using Domain;

namespace Infrastructure;

public class UsuarioRepository : RepositoryEfCore<Usuario, Guid>, IUsuarioRepository
{
   public UsuarioRepository(IServiceProvider provider) : base(provider) { }
}