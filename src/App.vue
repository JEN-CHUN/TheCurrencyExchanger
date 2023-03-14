<template>
  <currency-navigation></currency-navigation>
  <main class="main">
    <div class="converter">
      <currency-card><currency-detail></currency-detail></currency-card>
    </div>
  </main>

  <CurrencyFooter />
</template>

<script setup>
import CurrencyNavigation from "./components/CurrencyNavigation.vue";
import CurrencyFooter from "./components/CurrencyFooter.vue";
import CurrencyDetail from "./components/CurrencyDetail.vue";
// import CurrencyCard from "./components/UI/CurrencyCard.vue";

// import { ref, onMounted, onBeforeUnmount } from "vue";

// const width = ref(window.innerWidth);
// const height = ref(window.innerHeight);

// const handleResize = () => {
//   width.value = window.innerWidth;
//   height.value = window.innerHeight;
// };

// onMounted(() => {
//   window.addEventListener("resize", handleResize);
// });

// onBeforeUnmount(() => {
//   window.removeEventListener("resize", handleResize);
// });
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  font-size: 10px;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
  background-color: rgb(108, 108, 108);
  margin-top: 8rem;
}

.converter {
  background-color: aqua;
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  gap: 30px;
}

a:visited {
  color: black;
}
</style>
