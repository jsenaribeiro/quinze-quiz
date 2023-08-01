namespace Domain;

public class Usuario : IEntity<Guid>
{
   public Usuario() { }

   public Usuario(string nome)
   {
      this.Nome = nome;
      this.Id = Guid.NewGuid();
   }

   public Guid Id { get; set; }

   public string Nome { get; set; }
}