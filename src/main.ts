import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import { store, key } from '@/store/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from "@element-plus/icons-vue"

const app: any = createApp(App)

app.
    use(router).
    use(store, key).
    use(ElementPlus).
    mount('#app')

// 全局注册 icon 组件
// typeof 获取一个对象的类型
type iconTp = typeof Icons
// keyof 获取某种类型的所有键（key），返回的类型是联合类型
type keyUnion = keyof iconTp

Object.keys(Icons).forEach((key) => {
    // app.component(key, Icons[key as keyof typeof Icons])
    app.component(key, Icons[key as keyUnion])
})
