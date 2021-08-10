
const path = require('path');
const merge = require('webpack-merge')
const resolve =  (dir) => {
  return path.join(__dirname, dir)
}

console.log(process.env.NODE_ENV)

const getEnvParams = () => {
  return  process.env.NODE_ENV.split(',') || ['site1','temp1']
}

const SITE = getEnvParams()[0]
const TEMP = getEnvParams()[1]
const config  = require(`./src/config/${SITE}/index`)
console.log(`当前站点配置`,JSON.stringify(config))
module.exports = {
  lintOnSave: true,
  publicPath:'./',
  devServer:{
    open:false,
    https:false,
    proxy: config.proxy
  },
  chainWebpack: (config)=>{
    config.cache(true)
    config.module
      .rule('images')
      .test(/\.(png|jpeg|jpg|gif|webp|ico)$/)
      .use('url-loader')
      .tap(options => // tap修改参数的方法
        merge(options, { //merge方法是保证我们不会覆盖掉原有的其他配置
          limit: '1120'
        }))
     config.resolve.alias
      .set('@', resolve('src'))
      .set('assets',resolve('src/assets'))
      .set('@imgs',resolve(`src/assets/imgs/${SITE}`))
      .set('@locales',resolve(`src/locales`))
      .set('router',resolve(`src/router/${SITE}`))
      .set('components',resolve('src/components'))
      .set('theme',resolve(`src/assets/styles/theme/${SITE}`))
      .set('site',resolve(`src/theme/${SITE}/${TEMP}`))
       .set('config',resolve(`src/config/${SITE}`))
      .set('@store',resolve(`src/store/${SITE}`))
      .set('@lang',resolve(`src/locales/lang/${SITE}`))
      .set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js')
  }
}