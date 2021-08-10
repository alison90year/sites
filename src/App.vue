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
    if(!window.localStorage.getItem('localeLanguage')){
      window.localStorage.setItem('localeLanguage',lang.value)
    }
    //初始化国际化标记区分
    document.querySelector('html').lang = lang.value
    return {
      lang,
    }
  }
})
</script>

<style>

</style>
