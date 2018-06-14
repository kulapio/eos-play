// Load libs
var express = require('express')
var cors = require('cors')
const shell = require('shelljs')
const sleep = require('sleep')

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

// API: Create key
app.get('/create/key', function (req, res) {
  let cmd = 'cleos create key'
  sendCommand(cmd, req, res)
})

// API: Create user
app.get('/create/user/:userName/:publicKey', function (req, res) {
  let cmd = 'cleos create account eosio ' + req.params.userName + ' ' + req.params.publicKey + ' ' + req.params.publicKey
  sendCommand(cmd, req, res)
})

// API: Deploy Token
app.get('/deploy/token/:publicKey/:symbol/:supply', function (req, res) {
  let createTokenUser = 'cleos create account eosio eosio.token ' + req.params.publicKey + ' ' + req.params.publicKey
  let deployContract = 'cleos set contract eosio.token /contracts/eosio.token -p eosio.token'
  let createToken = "cleos push action eosio.token create '[ \\\"eosio\\\", \\\"" + req.params.supply + " " + req.params.symbol + "\\\"]' -p eosio.token"
  let issueToken = "cleos push action eosio.token issue '[ \\\"user\\\", \\\"" + req.params.supply + " " + req.params.symbol + "\\\", \\\"Issue Token\\\" ]' -p eosio"
  sendCommands([createTokenUser, deployContract, createToken, issueToken], req, res)
})



// API: Token Transfer
app.get('/transfer/token/:symbol/:from/:to/:amount', function (req, res) {
  let cmd = "cleos push action eosio.token transfer '[ \\\"" + req.params.from + "\\\", \\\"" + req.params.to + "\\\", \\\"" + req.params.amount + " " + req.params.symbol + "\\\", \\\"Transfer\\\" ]' -p " + req.params.from
  sendCommand(cmd, req, res)
})

// API: Token Balance
app.get('/token/balance/:symbol/:user', function (req, res) {
  let cmd = "cleos get currency balance eosio.token " + req.params.user + " " + req.params.symbol
  sendCommand(cmd, req, res)
})

// Send command utility
function sendCommand(eos_cmd, req, res) {
  let cmd = 'screen -S kulap -X stuff "' + eos_cmd + ' ^M"'
  shell.exec( cmd )
  res.send('ok2');
}

function sendCommands(eos_cmds, req, res) {
  eos_cmds.forEach(function(eos_cmd) {
    let cmd = 'screen -S kulap -X stuff "' + eos_cmd + ' ^M"'
    shell.exec( cmd )
    sleep.sleep( 1 )
  });
  res.send('ok2');
}

// Start Api server
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("API listening at http://%s:%s", host, port)

})
