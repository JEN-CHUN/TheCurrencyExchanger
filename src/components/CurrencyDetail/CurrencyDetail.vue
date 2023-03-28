<template>
  <div>
    <img
      class="picture"
      :src="countriesArray[defaultIndex].country_flag"
      alt=""
    />
    <p class="title">{{ countriesArray[defaultIndex].full_name }}</p>
    <CurrencySelect
      :isOpen="isOpen"
      :isDisabled="isDisabled"
      :countriesArray="countriesArray"
      :defaultIndex="defaultIndex"
      @toggleIsOpen="$emit('toggleIsOpen')"
      @changeCountryInfo="changeIso"
      @changeCountryIndex="$emit('changeCountryIndex', currencyIso)"
      @update-data="updateData"
      @input="$emit('updateNumber', moneyValue)"
      :currencyValue="currencyValue"
    />
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import CurrencySelect from "./CurrencySelect.vue";
defineEmits(["toggleIsOpen", "updateNumber", "changeCountryIndex"]);
const props = defineProps({
  isOpen: Boolean,
  isDisabled: Boolean,
  countriesArray: Array,
  currencyIndex: Number,
  defaultIndex: Number,
  currencyValue: Number,
});

const currencyIso = ref(false);
const moneyValue = ref(null);
// This Function Changes the Flag and the name of Country User Selects
function changeIso(code) {
  if (currencyIso.value === code) {
    return;
  }
  currencyIso.value = code;
}
//////
function updateData(value) {
  moneyValue.value = +value;
}

props;
</script>

<style>
.title {
  font-size: 3rem;
}
.picture {
  width: 350px;
  height: 210px;
}

@media (max-width: 450px) {
  .picture {
    width: 245px;
    height: 147px;
  }
}
</style>
