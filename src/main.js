/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import { createPinia } from "pinia";
// axios
import axios from "axios";
import VueAxios from "vue-axios";
// vee-validate
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

// Bootstrap JS
import "bootstrap";

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faLine,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./assets/stylesheets/main.scss";

import App from "./App.vue";
import router from "./router";

// 定義驗證規則
defineRule("required", required);
defineRule("email", email);
defineRule("min", min);

// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系

  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

// 設定預設語系
setLocale("zh_TW");

library.add(faFacebook, faLine, faInstagram);

const app = createApp(App);

app.component("Form", Form);
app.component("Field", Field);
app.component("ErrorMessage", ErrorMessage);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);

app.mount("#app");
