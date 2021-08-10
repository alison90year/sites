import {defineComponent, computed, ref} from 'vue'
import {useStore} from 'vuex'
import {setupLanguage} from '@locales/index'

export default defineComponent({
  name: "Home",
  setup() {
    const store = useStore(),
      userStore = computed(() => store.state.user),// 获取整个state
      avatar = computed(() => store.getters.avatar)// 获取整个state
    const langeName = ref('黄色国际化')
    const lang = computed(() => store.getters.lang)
    const changeLanguage = (lang) => {
      setupLanguage(lang)
    }
    return {
      lang,
      userStore,
      langeName,
      avatar,
      setToken: () => store.commit('user/setAccessToken', new Date().getTime() / 1000),
      changeLanguage
    }
  }
})