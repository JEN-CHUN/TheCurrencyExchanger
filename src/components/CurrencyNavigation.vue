<template>
  <div class="nav-container">
    <nav class="nav">
      <div class="nav-left">
        <img
          class="nav-left__logo"
          src="../assets/logo.svg"
          alt="logo of the website"
          width="60"
          height="60"
        />
        <p class="nav-left__title">The Currency Exchanger</p>
      </div>
      <div class="nav-right">
        <ul class="nav-right__link-menu">
          <li class="nav-right__link">
            <a href="" class="nav-right__link-text">Get Started</a>
          </li>
          <li class="nav-right__link">
            <a href="" class="nav-right__link-text">About The Project</a>
          </li>
          <li class="nav-right__link">
            <a href="" class="nav-right__link-text">About Me</a>
          </li>
        </ul>
        <div
          class="nav-right__hamburger"
          :class="{ active: hamburgerActive }"
          @click="toogleHamburger"
        >
          <span class="nav-right__hamburger__bar"></span>
          <span class="nav-right__hamburger__bar"></span>
          <span class="nav-right__hamburger__bar"></span>
        </div>
      </div>
    </nav>
    <div class="side-nav" :class="{ 'width-0': !hamburgerActive }">
      <div class="side-nav__close" @click="toogleHamburger"></div>
      <a
        class="side-nav__link"
        :class="{ 'text-transition': !hamburgerActive }"
        href=""
        >Get Started</a
      >
      <a
        class="side-nav__link"
        :class="{ 'text-transition': !hamburgerActive }"
        href=""
        >About The Project</a
      >
      <a
        class="side-nav__link"
        :class="{ 'text-transition': !hamburgerActive }"
        href=""
        >About Me</a
      >
    </div>
    <div
      v-if="hamburgerActive"
      @click="toogleHamburger"
      class="side-dark-background"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const hamburgerActive = ref(false);

function toogleHamburger() {
  hamburgerActive.value = !hamburgerActive.value;
  console.log(hamburgerActive.value);
}
</script>

<style scoped lang="scss">
* {
  background-color: inherit;
  // color: black;
}

.nav-container {
  background-color: yellow;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 80px;
  position: fixed;
  top: 0;
  z-index: 9999;
}

.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  // background-color: yellow;
  width: 1280px;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 24px;

  &__title {
    font-size: 2.8rem;
  }
}

.nav-right {
  display: flex;
  gap: 20px;
  align-items: center;
  &__link-menu {
    display: flex;
    gap: 50px;
    list-style-type: none;
  }

  &__link-text {
    font-size: 2.8rem;

    text-decoration: none;
  }

  &__hamburger {
    cursor: pointer;
    &__bar {
      display: block;
      width: 35px;
      height: 3px;
      margin: 7.5px 0;
      transition: all 0.3s ease-out;
      background-color: black;
    }
  }

  &__hamburger.active .nav-right__hamburger__bar:nth-child(1) {
    transform: translateY(5.5px) rotate(45deg);
  }

  &__hamburger.active .nav-right__hamburger__bar:nth-child(2) {
    display: none;
  }

  &__hamburger.active .nav-right__hamburger__bar:nth-child(3) {
    transform: translateY(-5.5px) rotate(-45deg);
  }
}

.side-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background-color: black;
  overflow-x: hidden;
  z-index: 9999;
  transition: all 0.6s ease-in;

  &__link {
    font-size: 5rem;
    display: block;
    flex-wrap: wrap;
    color: white;
    text-decoration: none;
    transition: all 0.8s ease-in-out;
  }

  &__close {
    position: absolute;
    right: 40px;
    top: 0px;
    z-index: 1000;
    // background-color: red;
    cursor: pointer;
  }
  &__close::after {
    color: rgb(255, 255, 255);
    font-size: 100px;
    height: 50px;
    width: 50px;
    z-index: 1000;
    display: inline-block;
    content: "\00d7"; /* This will render the 'X' */
  }
}

.side-dark-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.355);
  transition: all 0.5s ease-in;
}

@media (max-width: 979px) {
  .nav-left {
    &__title {
      font-size: 3rem;
    }
  }

  .nav-right {
    &__link-text {
      font-size: 3rem;
    }

    &__link-menu {
      display: none;
    }
  }

  .side-nav {
    &__link {
      font-size: 4.5rem;
    }
  }
}

@media (max-width: 770px) {
  .side-nav {
    &__link {
      font-size: 3.8rem;
    }
  }
}

@media (max-width: 650px) {
  .side-nav {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .nav-left {
    gap: 0;
    &__logo {
      display: none;
    }
    &__title {
      font-size: 2.7rem;
    }
  }
}

@media (max-width: 360px) {
  .side-nav {
    &__link {
      font-size: 3rem;
    }
  }
}

@media (min-width: 980px) {
  .nav-right {
    &__hamburger {
      &__bar {
        display: none;
      }
    }
  }

  .side-nav {
    display: none;
  }
}

.width-0 {
  width: 0;
}

.text-transition {
  color: transparent;
  font-size: 0;
}
</style>
