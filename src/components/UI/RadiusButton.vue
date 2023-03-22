<template>
  <button class="radius-button">
    <slot>testtettest</slot>
  </button>
</template>

<style scoped lang="scss">

.radius-button{
    text-align: center;
    font-size: 2rem;
    min-width: 10rem;
    background-color: rgb(95, 159, 255);
    padding: 1.5rem 2rem;
    border-radius: 1rem;
    outline: none;
    border: none;
    box-shadow: 1px 3px px black;
    cursor: pointer;
}

.radius-button:hover{
    background-color: rgb(48, 131, 255);
}

</style>
