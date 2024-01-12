using System.Runtime.InteropServices.JavaScript;

public record Person(string Name, int Age, bool IsChild);


public partial class Util
{
    [JSImport("util.fun", "main.js")]
    public static partial int GetInt(int val);

    [JSImport("util.getPerson", "main.js")]
    public static partial JSObject GetPerson(string name, int age, bool isChild);
}