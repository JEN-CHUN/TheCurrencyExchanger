<template>
  <section class="feature-intro">
    <h2 class="feature-intro__title">Feature of the App</h2>

    <div
      class="feature-intro__feature"
      v-for="feature in features"
      :key="feature.srcLink"
    >
      <img
        class="feature-intro__picture order-pic"
        :src="require('../../assets/aboutapp/' + feature.srcLink)"
      />
      <div class="feature-intro__description order-description">
        <p class="feature-intro__description__title">
          {{ feature.descriptionTitle }}
        </p>

        <p class="feature-intro__description__text">
          {{ feature.descriptionText }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const features = ref([
  {
    srcLink: "feature-apis.webp",
    descriptionTitle: "Powered By Two Famous Apis",
    descriptionText:
      "By integrating the Currency API and REST Countries API, we can establish a seamless connection to provide users with the most accurate data.",
  },
  {
    srcLink: "feature-update.webp",
    descriptionTitle: "Daily Updates",
    descriptionText:
      "By fetching data from the Currency API, regularly update exchange rate data daily and support exchange rate data up to one year ago at most.",
  },
  {
    srcLink: "feature-search.webp",
    descriptionTitle: "Seamless Searching",
    descriptionText:
      "Simply enter the country name or ISO code of the currency in the search list to find the desired information (if available).",
  },
  {
    srcLink: "feature-numbers.webp",
    descriptionTitle: "Data from Over 90 Countries",
    descriptionText:
      "Our service provides currency information for 97 different countries, displaying their national flag and name to help users confirm their selection.",
  },
]);
</script>

<style lang="scss" scoped>
.feature-intro {
  margin-bottom: 8rem;
  &__title {
    text-align: center;
    font-size: 3.5rem;
    margin-bottom: 5rem;
  }

  &__feature {
    display: flex;
    justify-content: space-around;
    margin-bottom: 6rem;
  }

  &__feature:nth-child(even) {
    .order-pic {
      order: 2;
    }

    .order-description {
      order: 1;
    }
  }

  &__feature:last-of-type {
    margin-bottom: 0rem;
  }

  &__picture {
    width: 400px;
    height: 300px;
  }

  &__description {
    width: 400px;
    height: 300px;
    &__title {
      font-size: 3rem;
      text-align: center;
      margin-bottom: 2rem;
    }
    &__text {
      font-size: 2.4rem;
      line-height: 3.5rem;
    }
  }
}

@media (max-width: 960px) {
  .feature-intro {
    &__feature {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-bottom: 6rem;
    }

    &__feature:nth-child(even) {
      .order-pic {
        order: 1;
      }

      .order-description {
        order: 2;
      }
    }

    &__feature:last-of-type {
      margin-bottom: 0rem;
    }

    &__picture {
      width: 500px;
      height: 400px;
      margin-bottom: 5rem;
    }

    &__description {
      width: 500px;
      height: 100%;
      &__title {
        font-size: 3rem;
        text-align: center;
        margin-bottom: 2rem;
      }
      &__text {
        font-size: 2.4rem;
        line-height: 3.5rem;
      }
    }
  }
}

@media (max-width: 560px) {
  .feature-intro {

    &__picture {
      width: 400px;
      height: 300px;
      margin-bottom: 5rem;
    }

    &__description {
      width: 400px;
      height: 100%;
    }
  }
}

@media (max-width: 450px) {
  .feature-intro {

    &__picture {
      width: 300px;
      height: 200px;
      margin-bottom: 5rem;
    }

    &__description {
      width: 300px;
      height: 100%;
    }
  }
}
</style>
