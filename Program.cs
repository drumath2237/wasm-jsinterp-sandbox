using System;

Console.WriteLine($"{Util.GetInt(3)}");

var person = Util.GetPerson("Alice", 18, false);
Console.WriteLine(person.GetPropertyAsInt32("age"));