import { simplePageReload } from "simplepagereloader/client";

import { createApp } from 'vue';

import App from './App.vue'; 
import "./main.css"


createApp(App).mount('#app') 

if(process.env.NODE_ENV != "production"){ 
    simplePageReload(9090);
}