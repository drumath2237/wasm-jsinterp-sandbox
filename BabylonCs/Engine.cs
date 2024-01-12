using System;
using System.Runtime.InteropServices.JavaScript;

namespace BabylonCs;

public interface IEngine
{
    object RenderCanvas { get; }
    void RunRenderLoop(Action callback);
}

public class Engine : IEngine
{
    public object RenderCanvas { get; }

    private readonly object _engineObject;
    private readonly bool _antialias;

    public Engine(object renderCanvas, bool antialias)
    {
        RenderCanvas = renderCanvas;
        _antialias = antialias;

        _engineObject = EngineImpl.CreateEngine(RenderCanvas, _antialias);
    }

    public void RunRenderLoop(Action callback)
    {
        EngineImpl.RunRenderLoop(_engineObject, callback);
    }
}

internal static partial class EngineImpl
{
    [JSImport("engine.createEngine", "BabylonCs")]
    [return: JSMarshalAs<JSType.Any>]
    public static partial object CreateEngine(
        [JSMarshalAs<JSType.Any>] object renderCanvas,
        bool antialias
    );

    [JSImport("engine.runRenderLoop", "BabylonCs")]
    public static partial void RunRenderLoop(
        [JSMarshalAs<JSType.Any>] object engine,
        [JSMarshalAs<JSType.Function>] Action callback
    );
}