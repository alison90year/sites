<template>
<div id="box">
  333
  <HeadBar></HeadBar>
  公共图片
  <img v-hash type="base" src="loading.gif" alt="" />
  <h2>{{userStore}}</h2>
  <h2>==={{avatar}}</h2>
  <h5>{{langeName}}</h5>
  <div>当前语言包{{lang}}</div><br/>
  <div>
    <button @click="setToken">设置token</button>
  </div>
  <img v-hash src="home/me.png" alt="" />
  <div>头部标题：{{$t('index.header.title')}}</div>
  <button @click="changeLanguage('en')">en-US</button>
  <button @click="changeLanguage('zh')">zh-CN</button>
  {{ $t('Settings.settings')}}
  <div>{{ $t('Settings.search') }}</div>
</div>
</template>

<script src="./index.js"></script>
<style scoped lang="scss">
//@import 'theme/home';
</style>