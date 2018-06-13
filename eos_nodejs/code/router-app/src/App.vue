<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link :to="{ name: 'HelloWorld' }">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view/>
    <div>
      <iframe class="terminal" src="http://localhost:7681/">
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  width: 100%;
  height: 100%
}
</style>
