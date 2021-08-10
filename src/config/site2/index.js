module.exports =  {
  proxy:{
    '/site2': {
      target: 'http://localhost:3002',
      changeOrigin: true,
    }
  }
}