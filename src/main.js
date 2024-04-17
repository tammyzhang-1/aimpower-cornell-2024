import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// main.js/ts
import {createApp} from 'vue'
import {createBootstrap} from 'bootstrap-vue-next'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'



const app = createApp(App)

app.use(router)
app.use(createBootstrap({components: true, directives: true})) // Change this line
app.mount('#app')
