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
    descriptionTitle: "Powered By Two Famouse Apis",
    descriptionText:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptate at possimus perferendis aut quis adipisci ipsa, officiis, velit eaque repellat minima, blanditiis quas natus non? Aliquam odio ut excepturi?",
  },
  {
    srcLink: "feature-update.webp",
    descriptionTitle: "Daily Updates",
    descriptionText:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptate at possimus perferendis aut quis adipisci ipsa, officiis, velit eaque repellat minima, blanditiis quas natus non? Aliquam odio ut excepturi?",
  },
  {
    srcLink: "feature-search.webp",
    descriptionTitle: "Seamless Searching",
    descriptionText:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptate at possimus perferendis aut quis adipisci ipsa, officiis, velit eaque repellat minima, blanditiis quas natus non? Aliquam odio ut excepturi?",
  },
  {
    srcLink: "feature-numbers.webp",
    descriptionTitle: "Data from Over 90 Countries",
    descriptionText:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptate at possimus perferendis aut quis adipisci ipsa, officiis, velit eaque repellat minima, blanditiis quas natus non? Aliquam odio ut excepturi?",
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
      margin-bottom: 1.5rem;
    }
    &__text {
      font-size: 2.4rem;
    }
  }
}
</style>
