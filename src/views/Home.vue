<template>
  <div id="box">
    基础页面3333
    {{ $t('Settings.settings') }}
    <img v-hash src="my.png" alt=" 我的"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return {
    }
  }
})
</script>

<style scoped lang="scss">
@import 'theme/home.scss';
</style>