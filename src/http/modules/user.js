import http from '../core'
export const login = (params) => {
  return http.get('/home.json',params)
}