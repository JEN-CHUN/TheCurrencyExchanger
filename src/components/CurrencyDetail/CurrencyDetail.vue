<template>
  <div>
    <img src="https://placehold.jp/350x210.png" alt="" />
    <p class="title">test</p>
    <CurrencySelect :is-open="isOpen" @toggleIsOpen="$emit('toggleIsOpen')" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import CurrencySelect from "./CurrencySelect.vue";
defineEmits(["toggleIsOpen"]);
const props = defineProps({
  isOpen: Boolean,
});

//////
props
</script>

<style>
.title {
  font-size: 4rem;
}
</style>
