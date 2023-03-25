<template>
  <div class="currency-card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.currency-card {
  text-align: center;
  width: 400px;
  padding: 20px;
  background-color: rgb(252, 252, 252);
  border-radius: 0.8rem;
  box-shadow: 1.5px 3px 5px 3px rgb(89, 89, 89);
  z-index: 1;
}
</style>
