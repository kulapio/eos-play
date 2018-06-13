// Load libs
var express = require('express')
var cors = require('cors')
const shell = require('shelljs')

// Enable access control allow origin for ajax
var app = express();
app.use(cors())

// API: Wallet Create
app.get('/wallet/create', function (req, res) {
  let cmd = 'cleos wallet create'
  sendCommand(cmd, req, res)
})

// API: Wallet Unlock
app.get('/wallet/unlock/:privateKey', function (req, res) {
  let cmd = 'cleos wallet unlock --password ' + req.params.privateKey
  sendCommand(cmd, req, res)
})

// API: Wallet Import
app.get('/wallet/import/:privateKey', function (req, res) {
  let cmd = 'cleos wallet import ' + req.params.privateKey
  sendCommand(cmd, req, res)
})

// API: Wallet List
app.get('/wallet/list', function (req, res) {
  let cmd = 'cleos wallet list'
  sendCommand(cmd, req, res)
})

// API: Deploy Bios
app.get('/deploy/bios', function (req, res) {
  let cmd = 'cleos set contract eosio /contracts/eosio.bios -p eosio'
  sendCommand(cmd, req, res)
})

// Send command utility
function sendCommand(eos_cmd, req, res) {
  let cmd = 'screen -S kulap -X stuff "' + eos_cmd + ' ^M"'
  shell.exec( cmd )
  res.send('ok2');
}

// Start Api server
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("API listening at http://%s:%s", host, port)

})
