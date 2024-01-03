import './assets/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import twins from "twins-vue";
import { createPinia } from 'pinia'

const pinia = createPinia()
createApp(App)
    .use(twins)
    .use(pinia)
    .mount('#app')
