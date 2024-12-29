import './assets/main.scss'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router'
import { createPinia } from "pinia"
import App from './App.vue'
import { createPersistedState } from "pinia-persistedstate-plugin"
import locale from 'element-plus/dist/locale/zh-cn.js'

const app = createApp(App);
const pinia = createPinia();
const persist = createPersistedState();

pinia.use(persist);
app.use(router);
app.use(pinia);
app.use(ElementPlus, {locale});
app.mount('#app');