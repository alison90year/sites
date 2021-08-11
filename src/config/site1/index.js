module.exports =  {
  proxy:{
    '/': {
      target: 'http://localhost:8080/static/',
      changeOrigin: true,
    }
  }
}