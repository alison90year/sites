const express = require('express')
const path = require('path');
const fs = require('fs');
const app = express()
const port = 3002
const useAssets = (assetsPath) => {
  const _path = path.resolve(__dirname,assetsPath)
  console.log(__dirname+'当前路径',_path)
  fs.stat(_path,(err) => {
    if(err){
      throw Error(`静态资源目录：${_path}不存在，请先克隆仓库`)
    }
    console.log(_path)
    app.use('/', express.static(_path));
  })
}
useAssets('../pc__assets/')
// 使用静态资源目录
app.use(express.static('../'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`启动静态资源成功 http://localhost:${port}`)
})