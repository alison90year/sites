import {defineComponent ,computed , ref } from 'vue'
import { useStore } from 'vuex'

import dataJson from './moke'
import { setupLanguage } from '@locales/index'
import HeadBar from '../components/head-bar'
console.log(dataJson,'当前参数')
export default defineComponent({
  name: "Home",
  components:{
    HeadBar
  },
  setup() {
    let store = useStore(),
      userStore = computed( () => store.state.user ),// 获取整个state
      avatar = computed( () => store.getters.avatar)// 获取整个state
    const langeName = ref('国际化')
    const testParams = ref(dataJson)
    const lang =  computed( () => store.getters.lang)
    const changeLanguage = (lang) => {
      setupLanguage(lang)
    }
    return {
      lang,
      userStore,
      langeName,
      avatar,
      setToken: () => store.commit('user/setAccessToken', new Date().getTime() / 1000),
      testParams,
      changeLanguage
    }
  }
})