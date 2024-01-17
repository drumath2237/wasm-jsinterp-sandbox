using System;
using static Util;

var person = new Person("Alice");
LogInfo(person.Print());

person.ChangeName("Bob");
LogInfo(person.Print());

Console.WriteLine(person.Name);