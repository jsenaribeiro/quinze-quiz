using System;

namespace Domain;

public interface IEntity<I> where I : struct, IEquatable<I>
{
   I Id { get; }
}

