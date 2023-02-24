import { createApp } from 'vue'
import App from './'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
// 全局注册el-icon
for (const [name, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(name, component);
}

app.use(store).use(router).use(ElementPlus).mount('#app')