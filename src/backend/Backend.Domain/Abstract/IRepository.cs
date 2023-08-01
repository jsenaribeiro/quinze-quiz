using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using System.Numerics;

namespace Domain;

public interface IReadRepository<E, I> 
   where E : class, IEntity<I> 
   where I : struct, IEquatable<I>
{
   Task<E> LoadAsync(I identity);

   async Task<E> LoadAsync(Expression<Func<E, bool>> condition) =>
      (await this.ListAsync(condition)).First();

   Task<E[]> ListAsync(Expression<Func<E, bool>> condition);

   IAsyncEnumerable<E> LoopAsync(Expression<Func<E, bool>> condition);

   Task<bool> CheckAsync(Expression<Func<E, bool>> condition, bool every);

   Task<bool> CheckAsync(Expression<Func<E, bool>> condition) => this.CheckAsync(condition, false);

   Task<int> CountAsync(Expression<Func<E, bool>> condition);

   // default implementation overloads

   Task<E[]> ListAsync() => this.ListAsync(x => true);

   IAsyncEnumerable<E> LoopAsync() => this.LoopAsync(x => true);

   Task<bool> CheckAsync() => this.CheckAsync(x => true, false);

   Task<bool> CheckAsync(I identity) => this.CheckAsync(x => x.Id.Equals(identity), false);

   Task<bool> CheckAsync(E entity) => this.CheckAsync(x => x.Id.Equals(entity.Id), false);

   Task<int> CountAsync() => this.CountAsync(x => true);
}

public interface IWriteRepository<E, I> 
   where E : class, IEntity<I> 
   where I : struct, IEquatable<I>
{
   Task<bool> SaveAsync(params E[] entities);

   Task<bool> DropAsync(Expression<Func<E, bool>> where);

   // default implementation overloads

   Task<bool> DropAsync(params I[] identities) =>
      this.DropAsync(x => identities.Contains(x.Id));
}

public interface IRepository<E, I> 
   : IReadRepository<E, I>
   , IWriteRepository<E, I>
   where E : class, IEntity<I> 
   where I : struct, IEquatable<I>
{    
   Task<bool> SaveAsync(I identity, Action<E> action) =>
      this.SaveAsync(x => x.Id.Equals(identity), action);

   Task<bool> SaveAsync(Expression<Func<E, bool>> where, Action<E> action)
   {
      var result = this.ListAsync(where).Result.Select(x => 
      {
         action(x);
         return x;
      });

      return this.SaveAsync(result.ToArray());
   }      
}