import { createI18n } from 'vue-i18n'
import store from '@store'
const messages = {
  en: require('./lang/en-US').default,
  zh: require('./lang/zh-CN').default
}
export const setupLanguage = (lang) => {
  i18n.global.locale.value = lang
  store.dispatch('user/testActions',lang)
}
export const i18n = createI18n({
  legacy: false, // 使用Composition API，这里必须设置为false
  globalInjection: true,
  global: true,
  locale:store.state.user.lang,
  messages
})

