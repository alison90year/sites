module.exports =  {
  proxy:{
    '/site1': {
      target: 'http://localhost:3000',
      changeOrigin: true,
    }
  }
}