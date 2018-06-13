<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <h2>1. Wallet Create</h2>
      <button @click="walletCreate()">Create</button>
    </div>
    <!-- <div>
      <h2>Wallet Unlock</h2>
      <input type="text" class="form-control wtext" v-model="walletUnlockPrivateKey" placeholder="private key">
      <button @click="walletUnlock()">Unlock</button>
    </div> -->
    <div>
      <h2>2. Deploy Bios</h2>
      <button @click="deployBios()">Deploy</button>
    </div>
    <div>
      <h2>Wallet Import</h2>
      <input type="text" class="form-control wtext" v-model="walletImportPrivateKey" placeholder="private key">
      <button @click="walletImport()">Import</button>
    </div>
    <div>
      <h2>Wallet List</h2>
      <button @click="walletList()">List</button>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg:                  'Welcome to EOS Playground'
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
      }
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
</style>
