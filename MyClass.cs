#nullable enable
using System.Runtime.InteropServices.JavaScript;

public record Person(string name, int age, bool isChild);

public partial class Util
{
    [JSImport("util.getPerson", "main.js")]
    private static partial JSObject GetPerson(string name, int age, bool isChild);

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
}