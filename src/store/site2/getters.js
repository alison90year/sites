const getters = {
  lang: tate => state.accessToken,
  accessToken: state => state.accessToken,
  username: state => state.username,
  rolename: state => state.rolename,
  avatar: state => state.avatar,
  userList: state => state.userList,
  total: state => state.total
}


export default getters