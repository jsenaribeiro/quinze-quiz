using System;

namespace Domain;

public interface IEntity<I> 
{
   I Id { get; set; }
}

