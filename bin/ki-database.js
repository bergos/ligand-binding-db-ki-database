#!/usr/bin/env node

var path = require('path')
var Fuseki = require('fuseki')

var server = new Fuseki({pipeOutput: true})

server.start()

server.wait().then(function () {
  server.createDataset('/ki-database', 'tdb', path.join(__dirname, '../tmp/ki-database.nt'))
}).catch(function (err) {
  console.error(err.stack || err.message)
})
