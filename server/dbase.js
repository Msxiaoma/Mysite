const fs = require('fs')
const path = require('path')
const mysql = require('mysql')

var conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  port: '3306',
  database: 'test'
})

conn.connect(function () {
  console.log('[connection connect]  succeed!');
})

module.exports = conn