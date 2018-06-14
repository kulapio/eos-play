<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-link :to="{ name: 'HelloWorld' }">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/coins/bitcoin">Bitcoin</router-link>
    <router-link to="/coins/ethereum">Ethereum</router-link>
    <router-link to="/coins/eos">EOS</router-link>
    <router-view/>
    <div class="terminal">
      <iframe :src="terminal_url">
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      terminal_url: 'http://localhost:7681/'
    }
  },
  created() {
    let host = window.location.hostname;
    this.terminal_url = 'http://' + host + ':7681/'
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.terminal {
  height: 300px;
}
.terminal iframe {
  width: 100%;
  height: 100%
}
</style>
