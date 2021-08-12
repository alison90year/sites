import {defineComponent, defineAsyncComponent  ,computed, ref, onMounted} from 'vue'
import { useStore } from 'vuex'
import dataJson from './moke'
import { setupLanguage } from '@locales/index'
import { useRouter ,useRoute } from 'vue-router'
import { login } from '@/http/modules/user'
console.log(dataJson,'当前参数')
export default defineComponent({
  name: "Home",
  components:{
    HeadBar:defineAsyncComponent(() => import('../components/head-bar')),
    CommonHead:defineAsyncComponent(() =>import('@/components/head-bar')),
  },
   setup() {
    let router = useRouter()
    let route = useRoute()
    console.log(route.query)
    let store = useStore(),
      userStore = computed( () => store.state.user ),
      avatar = computed( () => store.getters.avatar)
    const langeName = ref('国际化')
    const testParams = ref(dataJson)
    const lang =  computed( () => store.getters.lang)
    const changeLanguage = (lang) => {
      setupLanguage(lang)
    }
    const setTheme = (theme) => {
      store.dispatch('user/setThemeActions',theme)
      store.commit('user/getUserLogin',{name:'alison23343434'})
    }
     // login().then(res => {
     //   console.log(res)
     // })
    return {
      router,
      lang,
      userStore,
      setTheme,
      langeName,
      avatar,
      setToken: () => store.commit('user/setAccessToken', new Date().getTime() / 1000),
      testParams,
      changeLanguage
    }
  }
})