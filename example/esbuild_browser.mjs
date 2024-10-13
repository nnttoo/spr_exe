import * as esbuild from 'esbuild'
import vuePlugin from 'esbuild-plugin-vue3';
import dotenv from "dotenv"
dotenv.config();

console.log("\n\nBuild Browser : " + process.env.NODE_ENV);
const NODE_ENV = process.env.NODE_ENV || 'development';


await esbuild.build({
  entryPoints: ['./srcBrowser/main.ts'],
  bundle: true,
  outfile: './output/public/app.js',
  minify: true,
  platform: "browser",
  plugins: [
    vuePlugin()
  ],

  define: {
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
  },
});