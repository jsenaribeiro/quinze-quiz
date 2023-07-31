namespace Domain;

public interface IUnitOfWork
{
   public IUsuarioRepository Usuarios { get; }
}