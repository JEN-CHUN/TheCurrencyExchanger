import { createApp } from "vue";

import { createRouter, createWebHistory } from "vue-router";

import CurrencyCard from "./components/UI/CurrencyCard.vue";
import RadiusButton from "./components/UI/RadiusButton.vue";
import CurrencyExchanger from './components/CurrencyExchanger.vue'
import AboutApp from "./components/AboutApp.vue";
import App from "./App.vue";

// const Exchanger = { template: "./CurrencyExchanger" };
// const About = { template: "<p>About</p>" };

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Exchanger", component: CurrencyExchanger },
    { path: "/about", name: "AboutMe", component: AboutApp },
  ],
});

const app = createApp(App);


app.use(router);

app
  .component("currency-card", CurrencyCard)
  .component("radius-button", RadiusButton);

app.mount("#app");
