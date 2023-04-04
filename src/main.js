import { createApp } from "vue";

import { createRouter, createWebHistory } from "vue-router";

import CurrencyCard from "./components/UI/CurrencyCard.vue";
import RadiusButton from "./components/UI/RadiusButton.vue";
import CurrencyExchanger from "./components/CurrencyExchanger.vue";
import AboutApp from "./components/AboutApp.vue";
import AboutMe from "./components/AboutMe.vue";
import App from "./App.vue";

// const Exchanger = { template: "./CurrencyExchanger" };
// const About = { template: "<p>About</p>" };

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: CurrencyExchanger },
    { path: "/about", component: AboutApp },
    { path: "/author", component: AboutMe },
    { path: "/:notFound(.*)", redirect: "/" },
  ],
});

const app = createApp(App);

app.use(router);

app
  .component("currency-card", CurrencyCard)
  .component("radius-button", RadiusButton);

app.mount("#app");
