// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

import {dotnet} from './_framework/dotnet.js'
import {Person} from "./person.js"

const {setModuleImports, getAssemblyExports, getConfig} = await dotnet
    .withDiagnosticTracing(false)
    .withApplicationArgumentsFromQuery()
    .create();

setModuleImports('main.js', {
    util: {
        fun: (val) => val + 1,
        getPerson: (name, age, isChild) => new Person(name, age, isChild),
        getPerson2: (name, age, isChild) => new Person(name, age, isChild)
    }
});

const config = getConfig();
const exports = await getAssemblyExports(config.mainAssemblyName);

console.log(exports)

await dotnet.run();