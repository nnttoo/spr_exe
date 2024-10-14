declare module 'simplepagereloader/client' {
    export function simplePageReload(port: number): Promise<void>;
}

declare module 'simplepagereloader/server' {
  export function createServer(port: number):  { reload : ()=>void };
  export function callReloadServer(port: number):   void ;
}