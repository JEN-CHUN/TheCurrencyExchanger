<template>
  <section class="api-intro">
    <h2 class="api-intro__title">
      This Side Project Cannot Be Completed Without the Help of:
    </h2>
    <div class="api-intro__api-section">
      <div class="api-intro__api">
        <p class="api-intro__api__name">Currency Api</p>
        <img
          class="api-intro__api__picture"
          src="../../assets/aboutapp/currencyexchangeapi.jpg"
          alt=""
        />
      </div>
      <div class="api-intro__api">
        <p class="api-intro__api__name">Rest Countries Api</p>
        <img
          class="api-intro__api__picture"
          src="../../assets/aboutapp/restcountry.jpg"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.api-intro {
  &__title {
    text-align: center;
    font-size: 3.5rem;
    margin-bottom: 5rem;
  }
  &__api-section {
    display: flex;
    justify-content: space-around;
  }
  &__api {

    &__name {
      text-align: center;
      font-size: 3rem;
    }
    &__picture {
      margin-top: 1.5rem;
      width: 400px;
      height: 300px;
    }
  }
}
</style>
