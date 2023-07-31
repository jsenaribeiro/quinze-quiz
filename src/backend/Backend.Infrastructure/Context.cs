using Domain;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure;

public class Context : DbContext
{
   public Context(DbContextOptions<Context> options): base(options) { }

   public virtual DbSet<Audit> Audits { get; set; }

   public virtual DbSet<Usuario> Usuarios { get; set; }

   protected override void OnModelCreating(ModelBuilder model)
   {
      base.OnModelCreating(model);
   }
}
