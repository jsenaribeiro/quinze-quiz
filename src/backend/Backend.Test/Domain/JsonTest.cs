using Domain;
using Shouldly;
using Microsoft.Extensions.DependencyInjection;

namespace Test;

[TestClass]
public class JsonTest
{
   [TestMethod]
   public void JsonLoadTest()
   {
      var provider = Settings.CreateProvider();
      var service = new JogoService(provider);

      var jogo = service.CarregarAsync().Result;
   }
}