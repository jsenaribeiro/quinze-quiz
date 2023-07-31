using Domain;
using Shouldly;
using Microsoft.Extensions.DependencyInjection;

namespace Test;

[TestClass]
public class UsuarioTest
{
   [TestMethod]
   public void RepositoryTest()
   {
      var nome = "testing";

      var usuario = new Usuario(nome);

      var unitOfWork = Settings.CreateProvider()
         .GetRequiredService<IUnitOfWork>();

      unitOfWork.Usuarios
         .CheckAsync(x => x.Nome == nome)
         .Result.ShouldBeFalse();

      unitOfWork.Usuarios
         .CountAsync(x => x.Nome == nome)
         .Result.ShouldBe(0);
      
      unitOfWork.Usuarios.SaveAsync(usuario)
         .Result.ShouldBeTrue();

      unitOfWork.Usuarios
         .CheckAsync(x => x.Nome == nome)
         .Result.ShouldBeTrue();

      unitOfWork.Usuarios
         .CountAsync(x => x.Nome == nome)
         .Result.ShouldBe(1);

      unitOfWork.Usuarios
         .LoadAsync(x => x.Nome == nome)
         .Result.Nome.ShouldBe(nome);

      var guid = unitOfWork.Usuarios
         .LoadAsync(x => x.Nome == nome)
         .Result.Id;

      unitOfWork.Usuarios
         .LoadAsync(guid)
         .Result.Nome.ShouldBe(nome);

      unitOfWork.Usuarios
         .ListAsync(x => x.Id == guid)
         .Result.Any(x => x.Id == guid);

      unitOfWork.Usuarios
         .ListAsync(x => x.Nome == nome)
         .Result.Length.ShouldBe(1);

      unitOfWork.Usuarios
         .DropAsync(x => x.Nome == nome)
         .Result.ShouldBeTrue();

      unitOfWork.Usuarios
         .SaveAsync(guid, x => x.Nome = "test2")
         .Result.ShouldBeTrue();

      unitOfWork.Usuarios
         .LoadAsync(guid)
         .Result.Nome.ShouldBe("test2");

      unitOfWork.Usuarios
         .DropAsync(guid)
         .Result.ShouldBeTrue();

      unitOfWork.Usuarios
         .CheckAsync(guid)
         .Result.ShouldBeFalse();

      unitOfWork.Usuarios
         .CountAsync()
         .Result.ShouldBe(0);
   }
}