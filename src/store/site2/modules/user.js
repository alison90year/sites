const state = {
  username: 'yellow',
  total: 0,
  accessToken: 'admin',
  avatar: '用户头像蓝色22222222',
  lang: window.localStorage.getItem('localeLanguage') || 'zh',
  userList: [{ name: 'admin', age: 29 }]
}

let mutations = {
  setAccessToken (state, accessToken) {
    state.accessToken = accessToken
  },
  setTotal (state, total) {
    state.total = total
  }
}
let actions = {
  testActions ({ commit }, num) {
    setTimeout(() => {
      commit('setTotal', num)
      console.log(num)
    }, 2000)
  }
}

export default { namespaced:true, state, mutations , actions }