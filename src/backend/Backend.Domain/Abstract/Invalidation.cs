using System.Net;

namespace Domain;

public record Invalid(string error, string field = "");

public class Invalidation : ApiException
{
   public Invalid[] Errors = new Invalid[] { };

   private Invalidation(Invalid[]? errors): base(HttpStatusCode.BadRequest, "Um ou mais erros")
   {
      if (errors is not null) this.Errors = errors;
   }

   public static Invalidation New() => new Invalidation(null);

   public static Invalidation From(params Invalid[] invalids) => new Invalidation(invalids);

   public Invalidation Append(params Invalid[] invalids) =>
      new Invalidation(this.Errors.Concat(invalids).ToArray());

   public Invalidation Append(params Exception[] exceptions) =>
      new Invalidation(exceptions.Select(x => new Invalid(x.Message)).Concat(this.Errors).ToArray());
}