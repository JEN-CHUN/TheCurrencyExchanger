<template>
  <currency-navigation></currency-navigation>
  <main class="main">
    <currency-exchanger></currency-exchanger>
  </main>
  <CurrencyFooter />
</template>
<script setup>

import CurrencyNavigation from "./components/CurrencyNavigation.vue";
import CurrencyFooter from "./components/CurrencyFooter.vue";
import CurrencyExchanger from "./components/CurrencyExchanger.vue";

// const a = ref(1);
// const b = ref(2);

// [a.value, b.value] = [b.value, a.value];
// console.log(a.value);
// console.log(b.value);
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  font-size: 10px;
  box-sizing: border-box;
  color: #190933;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
  position: relative;
  background-color: #ACFCD9;
  
}

a:visited {
  color: #190933;
}
</style>
