import { dotnet } from "./_framework/dotnet.js";
import { setupBabylonCs } from "./BabylonCs/index.js";

const { setModuleImports, getAssemblyExports, getConfig } = await dotnet
  .withDiagnosticTracing(false)
  .withApplicationArgumentsFromQuery()
  .create();

setupBabylonCs(setModuleImports);

const config = getConfig();
const exports = await getAssemblyExports(config.mainAssemblyName);

console.log(exports);

await dotnet.run();
