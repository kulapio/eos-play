<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="step">
      <h2>1. Wallet Create</h2>
      <button @click="walletCreate()">Create</button>
    </div>
    <!-- <div class="step">
      <h2>Wallet Unlock</h2>
      <input type="text" class="form-control wtext" v-model="walletUnlockPrivateKey" placeholder="private key">
      <button @click="walletUnlock()">Unlock</button>
    </div> -->
    <div class="step">
      <h2>2. Deploy Bios</h2>
      <button @click="deployBios()">Deploy</button>
    </div>
    <div class="step">
      <h2>3. Create Key</h2>
      <button @click="createKey()">Create</button>
    </div>
    <div class="step">
      <h2>4. Wallet Import</h2>
      <input type="text" class="form-control wtext" v-model="walletImportPrivateKey" placeholder="private key">
      <button @click="walletImport()">Import</button>
    </div>
    <div class="step">
      <h2>5. Create User: user</h2>
      <input type="text" class="form-control wtext" v-model="walletPublicKey" placeholder="public key">
      <button @click="createUser('user')">Create</button>
    </div>
    <div class="step">
      <h2>6. Create User: tester</h2>
      <input type="text" class="form-control wtext" v-model="walletPublicKey" placeholder="public key">
      <button @click="createUser('tester')">Create</button>
    </div>
    <div class="step">
      <h2>7. Deploy token</h2>
      <input type="text" class="form-control wtext" v-model="tokenSymbol" placeholder="Symbol">
      <input type="text" class="form-control wtext" v-model="tokenSupply" placeholder="Supply">
      <button @click="deployToken()">Deploy</button>
    </div>
    <div class="step">
      <h2>8. Transfer Token</h2>
      <input type="text" class="form-control wtext" v-model="transferFromUser" placeholder="From User">
      <input type="text" class="form-control wtext" v-model="transferToUser" placeholder="To User">
      <input type="number" class="form-control wtext" v-model="transferAmount" placeholder="Amount">
      <button @click="transferToken()">Transfer</button>
    </div>
    <div class="step">
      <h2>9. Token Balance</h2>
      <input type="text" class="form-control wtext" v-model="tokenBalanceUser" placeholder="User">
      <button @click="tokenBalance()">Read</button>
    </div>
    <!-- <div class="step">
      <h2>Wallet List</h2>
      <button @click="walletList()">List</button>
    </div> -->

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg:                  'Welcome to EOS Playground',
        tokenSymbol:          'KULAP',
        tokenSupply:          '1000000.0000',

        transferFromUser:     'user',
        transferToUser:       'tester',
        transferAmount:       '100.0000',

        tokenBalanceUser:     'user',
      }
    },
    methods: {
      walletCreate() {
        axios.get('http://localhost:8081/wallet/create/')
        .then((resp) => {
          // this.coin = resp.data[0]
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      },
      walletUnlock() {
        axios.get('http://localhost:8081/wallet/unlock/' + this.walletUnlockPrivateKey)
        .then((resp) => {
          // this.coin = resp.data[0]
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      },
      walletImport() {
        axios.get('http://localhost:8081/wallet/import/' + this.walletImportPrivateKey)
        .then((resp) => {
          // this.coin = resp.data[0]
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      },
      walletList() {
        axios.get('http://localhost:8081/wallet/list/')
        .then((resp) => {
          // this.coin = resp.data[0]
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      },
      deployBios() {
        axios.get('http://localhost:8081/deploy/bios/')
        .then((resp) => {
          // this.coin = resp.data[0]
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      },
      createKey() {
        axios.get('http://localhost:8081/create/key/')
        .then((resp) => {
          // this.coin = resp.data[0]
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      },
      createUser(userName) {
        axios.get('http://localhost:8081/create/user/' + userName + '/' + this.walletPublicKey)
        .then((resp) => {
          // this.coin = resp.data[0]
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      },
      deployToken() {
        axios.get('http://localhost:8081/deploy/token/' + this.walletPublicKey + '/' + this.tokenSymbol + '/' + this.tokenSupply)
        .then((resp) => {
          // this.coin = resp.data[0]
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      },
      transferToken() {
        axios.get('http://localhost:8081/transfer/token/' + this.tokenSymbol + '/' + this.transferFromUser + '/' + this.transferToUser+ '/' + this.transferAmount)
        .then((resp) => {
          // this.coin = resp.data[0]
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      },
      tokenBalance() {
        axios.get('http://localhost:8081/token/balance/' + this.tokenSymbol + '/' + this.tokenBalanceUser)
        .then((resp) => {
          // this.coin = resp.data[0]
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div.step {
  float: left;
  border: 1px solid;
  padding: 15px;
  border-radius: 24px;
  border-color: #aaafaf;
  margin: 20px;
}
</style>
