// Ether.vue

<template>
  <div>
    <h1>
      {{ price }}
    </h1>
    <button @click="clicking()">Change Value</button>
  </div>
</template>

<script>
   export default {
   data() {
     return {
       price: 20
     }
   },
   methods: {
     clicking() {
       this.price = 300;
     }
   }
}
</script>