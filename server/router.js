var express = require('express')
var router = express.Router()
var conn = require('./dbase')

// 登录接口
router.post('/api/register', function (req, res) {
  console.log('sdfs')
  var userInfo=[req.body.name,req.body.passwd]
  conn.query('insert into user(id,name,passwd) values(0,?,?)', userInfo, (error, result) => {
    if (error) {
      res.status(500).send();
      return
    }
    res.json(result)
  })
})

module.exports = router
