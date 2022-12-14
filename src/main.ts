import { createApp } from "vue";
import { createPinia } from "pinia";
import {
  Button,
  Field,
  CellGroup,
  Form,
  Image as VanImage,
  Toast,
  Tabbar,
  TabbarItem,
  List,
  Col,
  Row,
  Icon,
  Divider,
  NavBar,
  Badge,
} from "vant";

import App from "./App.vue";
import router from "./router";

import { useRoute } from "vue-router";

import "./assets/main.css";
import "./assets/chat.css";
import "vant/lib/index.css";

const app = createApp(App);
app.use(useRoute);

app.use(createPinia());
app.use(router);
app.use(Button);
app.use(Field);
app.use(Form);
app.use(CellGroup);
app.use(VanImage);
app.use(Toast);
app.use(Tabbar);
app.use(TabbarItem);
app.use(List);
app.use(Col);
app.use(Row);
app.use(Icon);
app.use(Divider);
app.use(NavBar);
app.use(Badge);

app.mount("#app");
