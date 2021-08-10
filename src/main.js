import { createApp } from 'vue';
import App from './App.vue'
import router from '@/router/index';
import {i18n} from '@locales/index'
import store from '@store'
import * as directives from '@/directives'
//全局配置语言包方便JS外部访问
console.log(process.env.NODE_ENV.split(','),'当前环境标签')
// 注册自定义指令
const app = createApp(App)
Object.keys(directives).forEach(key => {
  console.log('当前注册指令',key)
  app.directive(key, directives[key]);
});
app.use(i18n)
app.use(router)
app.use(store)
 .mount('#app')
