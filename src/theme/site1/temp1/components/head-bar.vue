<template>
  <div>
    <div class="head-top">
      顶部导航
      <button @click="getVuexData">获取VUEX参数</button>
    </div>
    <div style="height: 90px">占位</div>
  </div>

</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: "head-bar",
  setup() {
    const store = useStore()
    const getVuexData = () => {
      alert(store.getters.avatar)
    }
    return {
      store,
      getVuexData
    }
  }
})
</script>

<style scoped lang="scss">
@import 'theme/head-bar';
</style>