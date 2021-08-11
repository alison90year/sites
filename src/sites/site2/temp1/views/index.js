import {defineComponent ,computed , ref } from 'vue'
import { useStore } from 'vuex'
import { setupLanguage } from '@locales/index'
import { useRouter ,useRoute } from 'vue-router'
import CommonHead from '@/components/head-bar'
export default defineComponent({
  name: "Home",
  components:{
    CommonHead
  },
  setup() {
    let router = useRouter()
    let route = useRoute()
    console.log(route.query)
    let store = useStore(),
      userStore = computed( () => store.state.user ),// 获取整个state
      avatar = computed( () => store.getters.avatar)// 获取整个state
    const langeName = ref('国际化')
    const lang =  computed( () => store.getters.lang)
    const changeLanguage = (lang) => {
      setupLanguage(lang)
    }
    const setTheme = (theme) => {
      store.dispatch('user/setThemeActions',theme)
    }
    return {
      router,
      lang,
      userStore,
      setTheme,
      langeName,
      avatar,
      setToken: () => store.commit('user/setAccessToken', new Date().getTime() / 1000),
      changeLanguage
    }
  }
})