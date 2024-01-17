using System.Runtime.InteropServices.JavaScript;

public interface IBabylonObject
{
    JSObject? JsObject { get; }
}

public interface IPerson : IBabylonObject
{
    string? Name { get; }

    int Age { get; }

    bool IsChild { get; }

    string Print();

    void ChangeName(string newName);
}

public class Person(string name) : IPerson
{
    public JSObject JsObject { get; } = PersonImpl.GetPerson(name);

    public string? Name => JsObject.GetPropertyAsString("name");
    public int Age => JsObject.GetPropertyAsInt32("age");
    public bool IsChild => JsObject.GetPropertyAsBoolean("isChild");


    public string Print()
    {
        return PersonImpl.PrintPerson(JsObject);
    }

    public void ChangeName(string newName)
    {
        PersonImpl.ChangeName(JsObject, newName);
    }
}

internal static partial class PersonImpl
{
    [JSImport("person.getPerson", "babylon.cs")]
    public static partial JSObject GetPerson(string name);

    [JSImport("person.printPerson", "babylon.cs")]
    public static partial string PrintPerson(JSObject person);

    [JSImport("person.changeName", "babylon.cs")]
    public static partial void ChangeName(JSObject person, string name);
}