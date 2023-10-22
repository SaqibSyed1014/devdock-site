import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.scss'
import router from './router'
import SmoothPage from "vue-smoothpage";
import 'vue-smoothpage/styles.css' // styles is required for correct displaying

const head = createHead()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(SmoothPage, {
    mode: 'vertical',
    smoothness: 0.75
})
app.use(head)

app.mount('#app')
