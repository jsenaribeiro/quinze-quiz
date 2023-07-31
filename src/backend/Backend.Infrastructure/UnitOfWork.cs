using Domain;

namespace Infrastructure;

public class UnitOfWork : IUnitOfWork
{
   private readonly IServiceProvider provider;

   public UnitOfWork(IServiceProvider provider) => this.provider = provider;

   public IUsuarioRepository Usuarios => new UsuarioRepository(this.provider);
}