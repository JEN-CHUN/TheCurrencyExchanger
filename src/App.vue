<template>
  <currency-navigation></currency-navigation>
  <main class="main">
    <div class="main-containter">
      <router-view></router-view>
    </div>
  </main>
  <CurrencyFooter />
</template>
<script setup>
import CurrencyNavigation from "./components/CurrencyNavigation.vue";
import CurrencyFooter from "./components/CurrencyFooter.vue";

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
  margin-top: 8rem;
  background-color: #acfcd9;
}

.main-containter {
  max-width: 1280px;
  margin: auto;
  margin-top: 15rem;
}

a:visited {
  color: #190933;
}
</style>
