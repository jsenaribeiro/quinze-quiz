using System.Text.Json;

namespace Domain;

public record JogoService(IServiceProvider Provider)
{
   // private readonly IServiceProvider _provider = provider;

   public async Task<Jogo> CarregarAsync()
   {
      var json = await File.ReadAllTextAsync("Jogo/Jogo.json");

      Console.WriteLine(json);

      return JsonSerializer.Deserialize<Jogo>(json) ?? throw new Exception("JSON failed");
   }
}