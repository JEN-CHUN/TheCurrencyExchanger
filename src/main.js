import { createApp } from "vue";

import CurrencyCard from "./components/UI/CurrencyCard.vue";

import App from "./App.vue";

const app = createApp(App);

app.component("currency-card", CurrencyCard);

app.mount("#app");
