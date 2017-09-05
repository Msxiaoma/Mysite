var fs = require('fs')
var path = require('path')
var express = require('express')
var mime = require('mime')
var bodyParser = require('body-parser')
var router = require('./server/router')
var compression = require('compression')
var session = require('express-session')
var FileStore = require('session-file-store')(session)
var app = express()

var resolve = file => path.resolve(__dirname, file)
app.use(compression())
app.use('/dist', express.static(resolve('./dist')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

console.log("sdss")
// var identityKey = 'skey';

// app.use(session({
//   name: "key",  //返回客户端的key的名称，默认为connect.sid,也可以自己设置。
//   secret: 'check',  //一个String类型的字符串，作为服务器端生成session的签名。
//   store: new FileStore(),  // 本地存储session（文本文件，也可以选择其他store，比如redis的）
//   saveUninitialized: false,  // 是否自动保存未初始化的会话，建议false
//   resave: false,  // 是否每次都重新保存会话，建议false
//   cookie: {
//     maxAge: 15 * 60 * 1000  // 有效期，单位是毫秒, 这里设置的是15分钟
//   }
// }))

app.use(router)

// 将对所有URL或路由返回 index.html。对于其他所有路径全部返回 404 Not Found。
app.get('*', function (req, res) {
  var html = fs.readFileSync(resolve('./' + 'index.html'), 'utf-8');
  res.send(html)
})
//启动一个服务并监听从 3000 端口进入的所有连接请求
app.listen(process.env.PORT || 3000, function () {
  console.log("Listen port:3000...")
});