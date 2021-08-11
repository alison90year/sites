<template>
  <div>
    <div class="head-top">
      <h1>站点1私有顶部导航</h1>
      <button @click="getVuexData">获取VUEX参数</button>
    </div>
    <div style="height: 90px">占位</div>
    <img v-hash src="home/me.png" alt="" />
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
@import '@siteStyle/head-bar';
</style>