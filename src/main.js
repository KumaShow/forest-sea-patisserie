/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import { SetupCalendar } from "v-calendar";
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
import {
  required,
  email,
  min,
  max_value,
  min_value,
} from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";
import VueLazyload from "vue-lazyload";
import CKEditor from "@ckeditor/ckeditor5-vue";
import "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faLine,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "v-calendar/dist/style.css";
import "./assets/stylesheets/main.scss";

import App from "./App.vue";
import router from "./router";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max_value", max_value);
defineRule("min_value", min_value);

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

app.use(CKEditor);
app.use(SetupCalendar, {});
app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);

import loadImg from "@/assets/images/loading/lazy-load.gif";

app.use(VueLazyload, {
  loading: loadImg,
  error: loadImg,
  attempt: 3,
  preLoad: 1.5,
  throttleWait: 300,
});

app.mount("#app");
