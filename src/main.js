import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import fixtures from './fixtures.json'

const app = createApp(App)

app.config.globalProperties.fixtures = fixtures;

app.config.globalProperties.baseDir = import.meta.env.BASE_URL;

app.use(PrimeVue)
    .use(router);

app.mount('#app')
