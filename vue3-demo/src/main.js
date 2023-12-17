import { createApp } from 'vue'
import App from './App.vue'

// 将从vue文件创建的组件赋值变量
const app = createApp(App)
// 将变量挂载到入口的app变量上
app.mount('#app')

// 打印日志
console.log("yml-log")