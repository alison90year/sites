<template>
  <div id="box">
    <h1>站点2</h1>
    <CommonHead></CommonHead>
    <h2>由于每个站点的中英文样式有点差异  =>  红色为：英文样式</h2>
    <h2>由于每个站点的中英文样式有点差异  => 绿色为：中文样式</h2>
    <button @click="changeLanguage('en')">en-US</button>
    <button @click="changeLanguage('zh')">zh-CN</button>
    <button @click="setTheme('light')">日间模式</button>
    <button @click="setTheme('dark')">夜间模式</button>
    <h2>{{userStore}}</h2>
    <h2>==={{avatar}}</h2>
    <h5>{{langeName}}</h5>
    <div>当前语言包{{lang}}</div><br/>
    <button @click="router.push('/')">跳转路由</button>
    <div>
      <button @click="setToken">设置token</button>
    </div>
    <div>头部标题：{{$t('Home.header.title')}}</div>

    {{ $t('Settings.settings')}}
    <div>{{ $t('Settings.search') }}</div>
  </div>
</template>

<script src="./index.js"></script>
<style scoped lang="scss">
</style>