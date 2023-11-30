import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'


import vuetify from '@/plugins/vuetify.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
// import VueApexCharts from "vue3-apexcharts"


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
// app.use(VueApexCharts)
app.use(VueAxios, axios)

app.mount('#app')
