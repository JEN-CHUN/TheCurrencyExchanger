<template>
  <div class="nav-container">
    <nav class="nav">
      <router-link class="nav-left" to="/">
        <img
          class="nav-left__logo"
          src="../assets/logo.svg"
          alt="logo of the website"
          width="60"
          height="60"
        />
        <p class="nav-left__title">The Currency Exchanger</p></router-link
      >

      <div class="nav-right">
        <ul class="nav-right__link-menu">
          <li class="nav-right__link">
            <router-link class="nav-right__link-text" to="/"
              >Get Started</router-link
            >
          </li>
          <li class="nav-right__link">
            <router-link class="nav-right__link-text" to="/about"
              >About The Project</router-link
            >
          </li>
          <li class="nav-right__link">
            <router-link class="nav-right__link-text" to="/author"
              >About Me</router-link
            >
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
      <router-link class="nav-right__link-text" to="/" @click="hamburgerActive = false"
        >Get Started</router-link
      >
      <router-link
        class="nav-right__link-text"
        to="/about"
        @click="hamburgerActive = false"
        >About The Project</router-link
      >
      <router-link
        class="nav-right__link-text"
        to="/author"
        @click="hamburgerActive = false"
        >About Me</router-link
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
  text-decoration: none;
}

.nav-container {
  background-color: #5dd9c1;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
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
  background-color: #5dd9c1;
  overflow-x: hidden;
  z-index: 9999;
  transition: all 0.6s ease-in;

  &__link {
    font-size: 5rem;
    display: block;
    flex-wrap: wrap;
    color: #190933;
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
    color: #190933;
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
