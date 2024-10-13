import * as esbuild from 'esbuild'
 

 
await esbuild.build({
  entryPoints: ['./srcServer/main.ts'],
  bundle: true,
  outfile: './output/app.js',
  minify : true,
  platform : "node" 
});