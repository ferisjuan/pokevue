import {
  defaultConfig as formkitConfig,
  plugin as formkitPlugin,
} from "@formkit/vue";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .use(formkitPlugin, formkitConfig)
  .mount("#app");
