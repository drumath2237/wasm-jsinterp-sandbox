using System.Runtime.InteropServices.JavaScript;

public partial class Util
{
    [JSImport("util.fun", "main.js")]
    public static partial int GetInt(int val);
}

public partial class MyClass
{
    [JSExport]
    public static string Greeting()
    {
        var text = $"Hello, World! Greetings from {GetHRef()}";
        return text;
    }

    [JSImport("window.location.href", "main.js")]
    public static partial string GetHRef();
}