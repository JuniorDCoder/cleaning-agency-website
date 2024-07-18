import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import './index.css'

createApp(App).use(router).use(PrimeVue, {
    unstyled: false
}).mount('#app')
