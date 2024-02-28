import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './Router'
import store from './store'

createApp(App).use(router).use(store).mount('#app')