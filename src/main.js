import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import directives from "./plugins/directives";
import { store } from "./store/store";

const app = createApp(App);

app.use(router);
app.use(directives);
app.use(store);
app.mount("#app");
