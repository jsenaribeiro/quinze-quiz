using System.Reflection;

namespace Infrastructure;

public class Audit 
{
   private Audit(string type, CRUD crud, string user, DateTime time)
   {
      this.When = time;
      this.CRUD = crud;
      this.User = user;
      this.Type = type;
   }

   public DateTime Id => this.When;

   public CRUD CRUD { get; private set; }

   public string User { get; }

   public DateTime When { get; private set; }

   public string Type { get; set; }

   public static Audit From<E>(CRUD crud) where E : class => Audit.From<E>(crud, "System");

   public static Audit From<E>(CRUD crud, string user) where E : class => Audit.From<E>(crud, user, DateTime.Now);

   public static Audit From<E>(CRUD crud, string user, DateTime when) where E : class
   {
      var typeQualifiedName = typeof(E).AssemblyQualifiedName;

      ArgumentNullException.ThrowIfNullOrEmpty(typeQualifiedName);

      return new Audit(typeQualifiedName, crud, user, when);
   }
}