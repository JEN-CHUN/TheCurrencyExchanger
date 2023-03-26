<template>
  <div class="alert-container">
    <p class="alert-container__content">Oops!</p>
    <p class="alert-container__content">Date Not Found!</p>
    <p class="alert-container__content">Try to Search for Other Date!</p>
    <radius-button @click="$emit('alertClose')">Okay</radius-button>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

defineEmits(["alertClose"]);
</script>
<style scoped lang="scss">
.alert-container {
  background-color: rgb(255, 137, 137);
  display: flex;
  flex-direction: column;
  padding-top: 8rem;
  align-items: center;
  border-radius: 1rem;
  width: 500px;
  height: 500px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  gap: 5rem;
  &__content {
    font-size: 3rem;
  }
  // display: none;
}
</style>
