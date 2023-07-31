using System;
using System.Data.Entity;
using System.Threading.Tasks;
using System.Linq.Expressions;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using Domain;

namespace Infrastructure;

public abstract class RepositoryEfCore<E, I> : IRepository<E, I>
   where E : class, IEntity<I>
   where I : struct, IEquatable<I>
{
   private readonly Context context;

   private readonly ILogger<E> logger;

   private readonly DbSet<E> collection;

   public RepositoryEfCore(IServiceProvider provider)
   {
      this.context = provider.GetRequiredService<Context>();

      var property = typeof(DbSet<E>).Name;
      
      this.collection = (this.context
         .GetType().GetProperties()
         .First(x => x.PropertyType.Name == property)
         .GetValue(this.context) as DbSet<E>)!;

      this.logger = provider.GetRequiredService<ILogger<E>>();
   }

   public Task<E> LoadAsync(I identity) =>
      this.collection.AsNoTracking().FirstOrDefaultAsync(x => x.Id.Equals(identity));

   public Task<E[]> ListAsync(Expression<Func<E, bool>> condition) =>
      this.collection.AsNoTracking().Where(condition).AsQueryable().ToArrayAsync();

   public async IAsyncEnumerable<E> LoopAsync(Expression<Func<E, bool>> condition)
   {
      var index = 0;
      var value = default(E);

      while (index == 0 || value is not null)
      {
         value = await this.collection
            .Where(condition)
            .Skip(index).Take(1)
            .FirstOrDefaultAsync();

         if (value is not null)
            yield return value;

         index++;
      }
   }

   public Task<bool> CheckAsync(Expression<Func<E, bool>> condition, bool every) =>
      every ? this.collection.AllAsync(condition)
            : this.collection.AnyAsync(condition);

   public Task<int> CountAsync(Expression<Func<E, bool>> condition) =>
      this.collection.CountAsync(condition);

   public async Task<bool> SaveAsync(params E[] entities)
   {
      var crud = CRUD.Create;

      try
      {
         foreach (var entity in entities)
         {
            if (await collection.FindAsync(entity.Id) is E found)
            {
               context.Entry(found).CurrentValues.SetValues(entity);
               crud = CRUD.Update;
            }

            else collection.Add(entity);

            await AuditAsync(crud);
         }

         return entities.Length == await context.SaveChangesAsync();
      }
      catch (Exception ex)
      {
         this.logger.LogCritical(ex.GetHashCode(), ex, ex.Message);

         throw ApiException.Database;
      }
   }
   public async Task<bool> DropAsync(params I[] identities)
   {
      try
      {
         foreach (var identity in identities)
         {
            if (new { Id = identity } is E uid)
            {
               collection.Remove(uid);
               await AuditAsync(CRUD.Delete);
            }
         }

         return identities.Length == await context.SaveChangesAsync();
      }
      catch (Exception ex)
      {
         this.logger.LogCritical(ex.GetHashCode(), ex, ex.Message);

         throw ApiException.Database;
      }
   }

   private Task AuditAsync(CRUD crud)
   {
      if (crud != CRUD.Search)
      {
         var audit = Audit.From<E>(crud, "System");
         this.context.Audits.Add(audit);
      }

      return Task.CompletedTask;
   }
}