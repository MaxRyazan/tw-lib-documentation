import './assets/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import twins from "twins-vue";

createApp(App)
    .use(twins)
    .mount('#app')
