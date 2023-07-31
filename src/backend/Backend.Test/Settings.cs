using Domain;
using Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Test;

public static class Settings
{
   public static IServiceProvider CreateProvider()
   {
      Settings.Logs = new List<(LogLevel level, string message)>();

      var services = new ServiceCollection()
         .AddSingleton<IUnitOfWork, UnitOfWork>()
         .AddDbContext<Context>(x => x.UseInMemoryDatabase("test"))
         .AddSingleton(typeof(ILogger<>), typeof(TestLogger<>));

      return services.BuildServiceProvider();
   }

   public static List<(LogLevel level, string message)> Logs = new();
}

public class TestLogger<T> : ILogger<T>
{   
   public IDisposable? BeginScope<TState>(TState state) where TState : notnull => throw new NotImplementedException();

   public bool IsEnabled(LogLevel logLevel) => throw new NotImplementedException();

   public void Log<TState>(LogLevel level, EventId eventId, TState state, Exception? exception, Func<TState, Exception?, string> formatter)
   {
      var message = formatter(state, exception);
      Settings.Logs.Add((level, message));
   }
}