#!/usr/bin/env node
 
import http from "http";  
import  {WebSocketServer }   from "ws"
import {Command} from "commander"
 

function createServer(port){ 

    /** @type {WebSocketServer  | null } */
    let wss = null;
    /**
     * 
     * @param {http.Server} server 
     */
    function createWs(server){ 
        wss = new WebSocketServer ({ server, path: '/ws' });
    }

    function broadcastReload(){
        if(wss == null) return;

        wss.clients.forEach((c)=>{
            c.send("reload");
        })
    }


    const server = http.createServer((req, res) => { 

        res.setHeader('Access-Control-Allow-Origin', '*'); // Izinkan semua origin
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Izinkan metode HTTP tertentu
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Izinkan header 
        res.writeHead(200, { 'Content-Type': 'text/plain' }); 
        
        res.end("");

        let path = req.url + "";

        if(path == "/reload"){
            let d = new Date();
            console.log("\n\n\n\nSERVER RELOAD : " + d.toLocaleTimeString() );
            broadcastReload();
        }
    });

    createWs(server); 
    // Menjalankan server
    server.listen(port, () => {
        console.log(`simplePageReload :  http://localhost:${port}/`);
    });
}

function callReloadServer(port){
   
    
    // Membuat permintaan HTTP
    const req =  http.request("http://localhost:" + port + "/reload", (res) => { 
        res.on("data",(d)=>{
            console.log(d + "");
        })
        res.on('end', () => {
            console.log("Request Reload");
        });
    });

    req.on("error",(e)=>{
        console.log("request eror" + e.message);
    });
    req.end();
}

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