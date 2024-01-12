#nullable enable
using System.Runtime.InteropServices.JavaScript;

public record Person(string name, int age, bool isChild);

public class PersonAlt
{
    public string name;
    public int age;
    public bool isChild;

    public PersonAlt(string name, int age, bool isChild)
    {
        this.name = name;
        this.age = age;
        this.isChild = isChild;
    }
}


public partial class Util
{
    [JSImport("util.fun", "main.js")]
    public static partial int GetInt(int val);

    [JSImport("util.getPerson", "main.js")]
    public static partial JSObject GetPerson(string name, int age, bool isChild);

    [JSImport("util.getPerson2", "main.js")]
    [return: JSMarshalAs<JSType.Any>]
    public static partial object GetPerson2(string name, int age, bool isChild);

    public static Person? TryGetPerson(string name, int age, bool isChild)
    {
        var personJsObj = GetPerson(name, age, isChild);
        var personName = personJsObj.GetPropertyAsString("name");
        if (personName is null)
        {
            return null;
        }

        return new Person(
            personName,
            personJsObj.GetPropertyAsInt32("age"),
            personJsObj.GetPropertyAsBoolean("isChild")
        );
    }

    public static PersonAlt TryGetPerson2(string name, int age, bool isChild)
    {
        var personObj = GetPerson2(name, age, isChild);
        return (PersonAlt)personObj;
    }
}