import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
// 注册一个名为my-component的组件
app.component("my-component", {
  template: `<div style="color: red;">my-component</div>`,
  created() {
    console.log("here is my-component");
  }
});

app
  .use(store)
  .use(router)
  .mount("#app");
