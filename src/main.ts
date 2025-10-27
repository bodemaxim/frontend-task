import './assets/base.css'
import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: '.my-app-dark',
      cssLayer: false,
    },
  },
})

app.mount('#app')
