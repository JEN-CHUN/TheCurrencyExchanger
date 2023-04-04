<template>
  <div class="personal-info">
    <h2 class="title">About Me</h2>
    <div class="personal-info__self-intro">
      <img
        class="personal-info__self-intro__picture"
        :src="require('../../assets/aboutme/' + pictureLink)"
        alt="Profile Pic"
        @mouseover="pictureLink = 'avatar2.png'"
        @mouseleave="pictureLink = 'avatar1.png'"
      />
      <div class="personal-info__self-intro__detail">
        <div
          v-for="info in personalInfo"
          :key="info.title"
          class="personal-info__self-intro__detail-item"
        >
          <p class="personal-info__self-intro__detail-item-title">
            {{ info.title }}
          </p>
          <div class="personal-info__self-intro__detail-item-text-flex">
            <p
              v-for="detail in info.details"
              :key="detail"
              class="personal-info__self-intro__detail-item-text"
            >
              {{ detail }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const pictureLink = ref("avatar1.png");
const personalInfo = ref([
  {
    title: "Name",
    details: ["Kay Jen"],
  },
  {
    title: "Email",
    details: ["kayrenwork@gmail.com"],
  },
  {
    title: "Foreign Languages",
    details: ["English", "Japanese", "Indonesian"],
  },
  {
    title: "Skills",
    details: ["Html5", "CSS3", "JS", "Vue", "Python"],
  },
]);
</script>

<style lang="scss" scoped>
.personal-info {
  margin-bottom: 5rem;

  &__self-intro {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;
    &__picture {
      width: 500px;
      height: 500px;
    }

    &__detail {
      width: 500px;
      height: 100%;
      font-size: 2.3rem;
    }

    &__detail-item {
      line-height: 6rem;
    }

    &__detail-item-title {
      font-size: 3.2rem;
      font-weight: 700;
      text-transform: capitalize;
    }

    &__detail-item-text-flex {
      display: flex;
      flex-wrap: wrap;
    }

    &__detail-item-text {
      font-size: 2.8rem;
      padding-left: 3rem;
    }
  }
}

@media (max-width: 560px) {
  .personal-info {
    &__self-intro {
      &__picture {
        width: 400px;
        height: 400px;
      }

      &__detail {
        width: 500px;
        height: 100%;
        font-size: 2.3rem;
      }

      &__detail-item {
        line-height: 6rem;
      }

      &__detail-item-title {
        text-align: center;
      }

      &__detail-item-text-flex {
        display: flex;
        flex-wrap: wrap;
      }

      &__detail-item-text {
        font-size: 2.8rem;
        padding-left: 0rem;
        margin: auto;
      }
    }
  }
}

@media (max-width: 400px) {
  .personal-info {
    &__self-intro {
      &__picture {
        width: 280px;
        height: 280px;
      }

      &__detail {
        width: 500px;
        height: 100%;
        font-size: 2.3rem;
      }

      &__detail-item {
        line-height: 6rem;
      }

      &__detail-item-title {
        font-size: 2.5rem;
        text-align: center;
      }

      &__detail-item-text-flex {
        display: flex;
        flex-wrap: wrap;
      }

      &__detail-item-text {
        font-size: 2rem;
        padding-left: 0rem;
        margin: auto;
      }
    }
  }
}
</style>
