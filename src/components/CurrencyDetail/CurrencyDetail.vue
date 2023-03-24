<template>
  <div>
    <img
      :src="countriesArray[shownInfo].country_flag"
      width="350"
      height="210"
      alt=""
    />
    <p class="title">{{ countriesArray[shownInfo].full_name }}</p>
    <CurrencySelect
      :isOpen="isOpen"
      :isDisabled="isDisabled"
      :countriesArray="countriesArray"
      :defaultIndex="defaultIndex"
      @toggleIsOpen="$emit('toggleIsOpen')"
      @changeCountryInfo="changeIso"
      v-model:testValue="testValue"
    />
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from "vue";
import CurrencySelect from "./CurrencySelect.vue";
defineEmits(["toggleIsOpen"]);
const props = defineProps({
  isOpen: Boolean,
  isDisabled: Boolean,
  countriesArray: Array,
  currencyIndex: Number,
  defaultIndex: Number,
  currencyValue: Number,
});

const currencyIso = ref(false);
const testValue = ref(0);

// This Function Changes the Flag and the name of Country User Selects
function changeIso(code) {
  if (currencyIso.value === code) {
    return;
  }
  currencyIso.value = code;
  console.log(currencyIso.value);
}
//////

const shownInfo = computed(() => {
  return currencyIso.value === false ? props.defaultIndex : currencyIso.value;
});
props;
</script>

<style>
.title {
  font-size: 3rem;
}
</style>
