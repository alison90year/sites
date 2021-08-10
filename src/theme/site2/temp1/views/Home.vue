<template>
  <div id="box">
    <h5>{{langeName}}</h5>
    <div>当前语言包{{lang}}</div><br/>
    <img :src="require(`@imgs/${lang}/home/me.png`)" alt="" />
    <div>{{$t('Home.header.title')}}</div>
    <button @click="changeLanguage('en')">en-US</button>
    <button @click="changeLanguage('zh')">zh-CN</button>
    {{ $t('Settings.settings')}}
    <div>{{ $t('Settings.search') }}</div>
  </div>
</template>

<script src="./index.js"></script>
<style scoped lang="scss">
@import 'theme/home';
</style>