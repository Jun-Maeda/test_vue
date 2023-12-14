import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import { createPersistedState } from "pinia-plugin-persistedstate"

import vuetify from '@/plugins/vuetify.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
pinia.use(createPersistedState())
app.use(pinia)
app.use(router)
app.use(vuetify)
app.use(VueAxios, axios)


app.mount('#app')
