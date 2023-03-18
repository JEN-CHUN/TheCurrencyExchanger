<template>
  <div class="converter">
    <currency-card>
      <currency-detail
        :is-open="listOpenOne"
        @toggleIsOpen="toggleListOpenOne"
      ></currency-detail>
    </currency-card>
    <currency-card>
      <currency-detail
        :is-open="listOpenTwo"
        @toggleIsOpen="toggleListOpenTwo"
      ></currency-detail>
    </currency-card>
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import CurrencyDetail from "./CurrencyDetail/CurrencyDetail.vue";

const listOpenOne = ref(false);
const listOpenTwo = ref(false);

provide("listOpenOne", listOpenOne);
provide("listOpenTwo", listOpenTwo);
/////
function toggleListOpenOne() {
  if (listOpenOne.value == false) {
    listOpenOne.value = true;
    listOpenTwo.value = false;
  } else {
    listOpenOne.value = false;
  }
}

function toggleListOpenTwo() {
  if (listOpenTwo.value == false) {
    listOpenOne.value = false;
    listOpenTwo.value = true;
  } else {
    listOpenTwo.value = false;
  }
}
</script>

<style scoped lang="scss">
.converter {
  background-color: aqua;
  max-width: 1280px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  margin-top: 15rem;
  gap: 30px;
}
</style>
