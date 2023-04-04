<template>
  <h3 class="title">Personal Website and Projects</h3>
  <div class="personal-website">
    <a href="https://github.com/JEN-CHUN" target="_blank">
      <div class="personal-website__block">
        <div class="personal-website__filter">
          <p class="personal-website__name">GitHub</p>
        </div>
        <img
          class="personal-website__picture"
          src="../../assets/aboutme/GitHub-Mark.png"
          alt=""
        /></div
    ></a>

    <a
      href="https://www.linkedin.com/in/%E4%BA%A6%E4%BF%8A-%E4%BB%BB-476829230/"
      target="_blank"
    >
      <div class="personal-website__block">
        <div class="personal-website__filter">
          <p class="personal-website__name">LinkedIn</p>
        </div>
        <img
          class="personal-website__picture"
          src="../../assets/aboutme/linkedin.png"
          alt=""
        /></div
    ></a>

    <a
      href="https://jen-chun.github.io/Japenese-Hotel-ShizukuNoItsumi/index.html"
      target="_blank"
    >
      <div class="personal-website__block">
        <div class="personal-website__filter">
          <p class="personal-website__name">The Project</p>
        </div>
        <img
          class="personal-website__picture"
          src="../../assets/aboutme/project.webp"
          alt=""
        /></div
    ></a>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.personal-website {
  margin-bottom: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 7rem;
  &__block {
    position: relative;
    width: 300px;
    height: 300px;
    font-size: 5rem;
  }

  &__picture {
    width: inherit;
    height: inherit;
    border-radius: 2rem;
  }

  &__filter {
    width: inherit;
    height: inherit;
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    border-radius: 2rem;
    transition: 0.3s all;
    color: rgba(0, 0, 0, 0);
    font-size: 3rem;
  }

  &__filter:hover {
    background-color: rgba(36, 33, 33, 0.559);
    color: rgb(255, 255, 255);
  }

  &__name {
    position: absolute;
    color: inherit;
    font-size: inherit;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
}

@media (max-width: 750px) {
  .personal-website {
    flex-direction: column;

    &__block {
      margin: auto;
    }

    &__filter {
      background-color: rgba(46, 46, 46, 0.468);
      color: rgb(255, 255, 255);
    }

    &__filter:hover {
      background-color: rgba(36, 33, 33, 0.559);
      color: rgb(255, 255, 255);
    }
  }
}

@media (max-width: 380px) {
  .personal-website {
    flex-direction: column;

    &__block {
    width: 250px;
    height: 250px;
  }
  }
}
</style>
