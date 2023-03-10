<template>
  <div class="nav-title">
    <currency-navigation></currency-navigation>
  </div>
</template>

<script setup>
import CurrencyNavigation from "./components/CurrencyNavigation.vue";
</script>

<style lang='scss'>
* {
  padding: 0;
  margin: 0;
  font-size: 10px;
  background-color: rgb(33, 32, 32);
  color: white;
}

.nav-title {
  height: 100%;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
