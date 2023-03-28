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
    background-color: #71E2C7;
    padding: 1.5rem 2rem;
    border-radius: 1rem;
    outline: none;
    border: none;
    box-shadow: 1px 3px 5px #8f8f8f;
    cursor: pointer;
}

.radius-button:hover{
    background-color: #55C5AF;
}

</style>
