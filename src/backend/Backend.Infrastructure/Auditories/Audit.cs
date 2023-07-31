using System.Reflection;

namespace Infrastructure;

public class Audit 
{ 
   public DateTime Id { get; set; } = DateTime.Now;

   public CRUD CRUD { get; set; }

   public string User { get; set; } = string.Empty;

   public DateTime When { get; set; }

   public string Type { get; set; } = string.Empty;

}

public class Audit<E> : Audit where E : class
{
   public Audit() {} 

   public Audit(CRUD crud): this(crud, "System") { }

   public Audit(CRUD crud, string user) : this(crud, user, DateTime.Now) {}

   private Audit(CRUD crud, string user, DateTime time)
   {
      this.When = time;
      this.CRUD = crud;
      this.User = user;
   }
}