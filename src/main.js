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
import fixtures from './fixtures.json'
 

const app = createApp(App)
app.config.globalProperties.fixtures = fixtures;
app.config.globalProperties.baseDir = import.meta.env.BASE_URL;

app.use(router)
app.use(createBootstrap({components: true, directives: true})) // Change this line
app.mount('#app')
