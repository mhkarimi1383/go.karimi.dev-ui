import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGolang } from "@fortawesome/free-brands-svg-icons";

library.add(faGolang);

const app = createApp(App);

app.use(Antd).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
