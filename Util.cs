#nullable enable
using System.Runtime.InteropServices.JavaScript;

public record Person(string name, int age, bool isChild);

public partial class Util
{
    [JSImport("person.getPerson", "babylon.cs")]
    public static partial JSObject GetPerson(string name);

    [JSImport("person.printPerson", "babylon.cs")]
    public static partial string PrintPerson(JSObject person);

    [JSImport("utils.logInfo", "babylon.cs")]
    public static partial void LogInfo(string msg);

    [JSImport("person.changeName", "babylon.cs")]
    public static partial void ChangeName(JSObject person, string name);

    public static Person? TryGetPerson(string name, int age, bool isChild)
    {
        var personJsObj = GetPerson(name);
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