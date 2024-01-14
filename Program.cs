using System;
using static Util;

var jsPerson = GetPerson("Alice");
LogInfo(PrintPerson(jsPerson));

ChangeName(jsPerson, "Bob");
LogInfo(PrintPerson(jsPerson));

Console.WriteLine(jsPerson.GetPropertyAsString("name"));