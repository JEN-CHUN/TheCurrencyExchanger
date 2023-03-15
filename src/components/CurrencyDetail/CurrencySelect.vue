<template>
  <div class="currency">
    <input type="text" class="currency__input" />
    <select name="currencies" class="currency__options" id="">
      <option class="currency__option" value="">USA</option>
      <option class="currency__option" value="">ERU</option>
      <option class="currency__option" value="">RMB</option>
      <option class="currency__option" value="">JPY</option>
      <option class="currency__option" value="">NTD</option>
    </select>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
$currency-option: 100px;

.currency {
  display: flex;
  border: 1px solid black;

  &__input {
    width: calc(100% - #{$currency-option});
    font-size: 2rem;
    height: 45px;
    outline: none;
    border: none;
  }
  &__options {
    width: $currency-option;
    height: 45px;
    font-size: 2rem;
    text-align: center;
    // background-color: blue;
    border: none;
    outline: none;
    border-left: 1px solid black;
  }

  &__option{
    background-color: blue;
    color: red;
    font-size: 2rem;
  }
}
</style>
