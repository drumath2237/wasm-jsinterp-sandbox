using System.Runtime.InteropServices.JavaScript;

public partial class Util
{
    [JSImport("utils.logInfo", "babylon.cs")]
    public static partial void LogInfo(string msg);
}