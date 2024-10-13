console.log("haloo");
import { simplePageReload } from "simplepagereloader";

import { createApp } from 'vue';

import App from './App.vue'; 
import "./main.css"


createApp(App).mount('#app') 

if(process.env.NODE_ENV != "production"){
    console.log("developd");
    simplePageReload(9090);
}