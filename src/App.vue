<template>
  <div>

        <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent, computed} from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const lang = computed(() => {
      return store.getters.lang
    })
    const theme = computed(() => {
      return store.getters.theme
    })
    if(!window.localStorage.getItem('localeLanguage')){
      window.localStorage.setItem('localeLanguage',lang.value)
    }
    if(!window.localStorage.getItem('theme')){
      window.localStorage.setItem('theme',theme)
    }
    console.log('当前语言为：',lang.value)
    console.log('当前主题为：',theme.value)
    //初始化国际化标记区分
    document.querySelector('html').lang = lang.value
    document.querySelector('html').setAttribute('theme',theme.value)
    return {
    }
  }
})
</script>

<style lang="scss">

@import 'scss/reset';
 @import '@langStyle/zh';
 @import '@langStyle/en';
 @import '@theme/dark';
 @import '@theme/light';
</style>
