import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.scss'
import router from './router.js'
// plugins
// import './core/plugins/smooth-scroll'



import { createHead } from 'unhead'

// Create a global head instance
const head = createHead()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(head)

app.mount('#app')
