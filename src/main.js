import { createApp } from "vue";

import { createRouter, createWebHistory } from "vue-router";

import CurrencyCard from "./components/UI/CurrencyCard.vue";

import App from "./App.vue";

const Exchanger = {template: './'}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path:'/', name:'Exchanger', component: Exchanger}
  ],
});

const app = createApp(App);

app.component("currency-card", CurrencyCard);

app.mount("#app");

app.use(router);
