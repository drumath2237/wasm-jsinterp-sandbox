import { dotnet } from "./_framework/dotnet.js";
import { getPerson, printPerson, logInfo } from "./BabylonCs/index.js";

const { setModuleImports, getAssemblyExports, getConfig } = await dotnet
  .withDiagnosticTracing(false)
  .withApplicationArgumentsFromQuery()
  .create();

setModuleImports("main.js", {
  util: {
    getPerson: (name) => getPerson(name),
    printPerson: (person) => printPerson(person),
    logInfo: (msg) => logInfo(msg),
  },
});

const config = getConfig();
const exports = await getAssemblyExports(config.mainAssemblyName);

console.log(exports);

await dotnet.run();
