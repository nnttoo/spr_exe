#!/usr/bin/env node
 
import {Command} from "commander"
import { callReloadServer, createServer } from "./autoreload_server.mjs";
 



async function  readArg( ) { 
    /** @type {{port : number, reload : boolean} | null} */
    let result = {}; 

    const program = new Command();

    // Definisikan option --port
    program
    .option('-p, --port <number>', 'port untuk server', null)
    .option('-r, --reload', 'port untuk server', false); 
    
    program.parse(process.argv);
    
    // Mendapatkan nilai port dari argumen
    const options = program.opts();

    result = options; 
    console.log(options); 
    return result;

}

async function run() { 
    let myArg = await readArg();
    if(myArg == null ||
        myArg.port == null 
    ) {
        console.log("--port argument eg : sp_reload --port 8090");
        return;
    }
 

    if (myArg.reload) { 
        callReloadServer(myArg.port);
        console.log("\n\n\n\n\nREQUEST RELOAD");
        return;
    }
    createServer(myArg.port);
}


run();