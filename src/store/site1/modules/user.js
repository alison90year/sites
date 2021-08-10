import { getLangObecByFilePrefix } from '@/utils'
const user = getLangObecByFilePrefix('index', 'user')
const state = {
  LOCALE_KEY: 'localeLanguage',
  THEME_KEY: 'theme',
  accessToken: 'admin',
  theme: window.localStorage.getItem('theme') || 'blue',
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
    window.localStorage.setItem(state.LOCALE_KEY, lang)
    window.location.reload()
  }
}
const actions = {
  testActions({commit}, lang) {
    commit('setLanguage', lang)
  }
}

export default {namespaced: true, state, mutations, actions}