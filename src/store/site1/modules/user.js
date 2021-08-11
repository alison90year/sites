import { getLangObecByFilePrefix } from '@/utils'
import { login } from '@/http/modules/user'
const user = getLangObecByFilePrefix('index', 'user')
const state = {
  LOCALE_KEY: 'localeLanguage',
  THEME_KEY: 'theme',
  accessToken: 'admin',
  theme: window.localStorage.getItem('theme') || 'light',
  avatar: '用户头像 1111111',
  lang: window.localStorage.getItem('localeLanguage') || 'zh',
  address: user.address
}

const mutations = {
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken
  },
  setLanguage(state, lang) {
    state.lang = lang
    window.location.reload()
  },
  setTheme(state, theme){
    state.theme = theme
  },
  getUserLogin(state, data){
    login(data).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
const actions = {
  testActions({commit}, lang) {
    window.localStorage.setItem(state.LOCALE_KEY, lang)
    commit('setLanguage', lang)
  },
  setThemeActions({commit},theme) {
    if(state.theme !== theme){
      document.querySelector('html').setAttribute('theme',theme)
      window.localStorage.setItem(state.THEME_KEY, theme)
      commit('setTheme', theme)
    }
  }
}

export default {namespaced: true, state, mutations, actions}