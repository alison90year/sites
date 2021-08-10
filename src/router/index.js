import { createRouter,createWebHashHistory} from "vue-router";
import routes from 'router'
import common from './common'
const routerMap = Object.assign({
  history:createWebHashHistory(),
  routes:[
    ...common,
    ...routes
  ]
})
console.log(routerMap,'所有路由')

export default createRouter(routerMap);