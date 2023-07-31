using System.Net;

namespace Domain;

public class ApiException : Exception
{
   public HttpStatusCode StatusCode { get; }

   protected ApiException(HttpStatusCode status, string message) : base(message) => this.StatusCode = status;

   public static ApiException Database => new (HttpStatusCode.InternalServerError, "Falha no banco de dados");
}