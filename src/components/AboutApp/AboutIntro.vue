<template>
  <section class="api-intro">
    <h2 class="api-intro__title">
      This Side Project Cannot Be Completed Without the Help of:
    </h2>
    <div class="api-intro__api-section">
      <div class="api-intro__api">
        <a href="https://github.com/fawazahmed0/currency-api">
          <p class="api-intro__api__name">Currency Api</p>
          <img
            class="api-intro__api__picture"
            src="../../assets/aboutapp/currencyexchangeapi.jpg"
            alt=""
          />
        </a>
      </div>
      <div class="api-intro__api">
        <a href="https://restcountries.com/">
        <p class="api-intro__api__name">Rest Countries Api</p>
        <img
          class="api-intro__api__picture"
          src="../../assets/aboutapp/restcountry.jpg"
          alt=""
        />
      </a>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.api-intro {
  margin-bottom: 8rem;
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
    position: relative;

    &__name {
      text-align: center;
      font-size: 2.5rem;
      position: absolute;
      z-index: 20;
      color: #fff;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &__picture {
      margin-top: 1.5rem;
      width: 400px;
      height: 300px;
      filter: blur(3px) brightness(0.6);
    }
  }
}

@media (max-width:960px) {
  .api-intro {
  &__api-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &__api {

    &__picture {
      margin-top: 1.5rem;
      width: 500px;
      height: 400px;
      filter: blur(3px) brightness(0.6);
    }

    &__picture:first-of-type {
      margin-bottom: 3rem;
    }
  }
}
}

@media (max-width:560px) {
  .api-intro {

  &__api {

    &__picture {
      margin-top: 1.5rem;
      width: 400px;
      height: 300px;
      filter: blur(3px) brightness(0.6);
    }

  }
}
}

@media (max-width:450px) {
  .api-intro {

  &__api {

    &__picture {
      margin-top: 1.5rem;
      width: 300px;
      height: 200px;
      filter: blur(3px) brightness(0.6);
    }

  }
}
}
</style>
