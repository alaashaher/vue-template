import 'ant-design-vue/dist/reset.css'
import './assets/main.scss'
import Antd from 'ant-design-vue'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Antd).use(router).mount('#app')
// app.mount('#app')
