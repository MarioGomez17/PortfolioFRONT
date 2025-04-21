import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/global.css";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";

const APP = createApp(App);
const PINIA = createPinia();

PINIA.use(piniaPluginPersistedState);

APP.use(router);
APP.use(PINIA);
APP.mount("#app");
