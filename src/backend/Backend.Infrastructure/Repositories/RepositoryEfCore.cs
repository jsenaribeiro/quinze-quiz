using System;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Expressions;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using Domain;
using System.Reflection;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure;

public abstract class RepositoryEfCore<E, I> 
           : IRepository<E, I>
   where E : class, IEntity<I>
   where I : struct, IEquatable<I>
{
   private readonly ApiContext context;

   private readonly ILogger<E> logger;

   private readonly DbSet<E> collection;

   public RepositoryEfCore(IServiceProvider provider)
   {
      this.context = provider.GetRequiredService<ApiContext>();
      this.logger = provider.GetRequiredService<ILogger<E>>();

      var property = typeof(DbSet<E>);
      var identify = (Type type) => type.AssemblyQualifiedName;
      var selected = (PropertyInfo prop) => identify(prop.PropertyType) == identify(property);

      var x = this.context.GetType();
      var y = x.GetProperties();
      var z = y.First(selected);

      this.collection = (DbSet<E>)this.context.GetType()
         .GetProperties().First(selected)
         .GetValue(this.context)!;
   }

   public Task<E> LoadAsync(I identity) =>
      this.collection.AsNoTracking().FirstOrDefaultAsync(x => x.Id.Equals(identity))!;

   public Task<E[]> ListAsync(Expression<Func<E, bool>> condition) =>
      this.collection.AsNoTracking().Where(condition).AsQueryable().ToArrayAsync();

   public async IAsyncEnumerable<E> LoopAsync(Expression<Func<E, bool>> condition)
   {
      var index = 0;
      var value = default(E);

      while (index == 0 || value is not null)
      {
         value = await this.collection
            .AsNoTracking()
            .Where(condition)
            .Skip(index).Take(1)
            .FirstOrDefaultAsync();

         if (value is not null)
            yield return value;

         index++;
      }
   }

   public Task<bool> CheckAsync(Expression<Func<E, bool>> condition, bool every) =>
      every ? this.collection.AsNoTracking().AllAsync(condition)
            : this.collection.AsNoTracking().AnyAsync(condition);

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

         await this.context.SaveChangesAsync();

         return true;
      }
      catch (Exception ex)
      {
         this.logger.LogCritical(ex.GetHashCode(), ex, ex.Message);

         throw ApiException.Database;
      }
   }

   public async Task<bool> DropAsync(Expression<Func<E, bool>> condition)
   {
      try
      {
         this.context.RemoveRange(this.collection.Where(condition));

         await this.context.SaveChangesAsync();

         return true;
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
         var audit = new Audit<E>(crud, "System");
         this.context.Audits.Add(audit);
      }

      return Task.CompletedTask;
   }
}