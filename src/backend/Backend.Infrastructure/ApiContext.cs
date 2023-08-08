using Domain;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure;

public class ApiContext : DbContext
{
   public ApiContext(DbContextOptions<ApiContext> options): base(options) { }

   public virtual DbSet<Audit> Audits { get; set; }

   public virtual DbSet<Usuario> Usuarios { get; set; }

   protected override void OnModelCreating(ModelBuilder model)
   {
      base.OnModelCreating(model);
   }
}
