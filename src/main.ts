import { createApp } from "vue";
import { createPinia } from "pinia";
// import "@/style/index.css";
import App from "./App.vue";
import router from "./router";
import ArcoVue from "@arco-design/web-vue";
import { Message, Notification } from "@arco-design/web-vue";
import VXETable from "vxe-table";

import "vxe-table/lib/style.css";
import "@arco-design/web-vue/dist/arco.css";
import "@/style/index.css";

const app = createApp(App);
function useTable(app: any) {
  app.use(createPinia());
  app.use(router);
  app.use(ArcoVue);
  app.use(VXETable);
  app.config.globalProperties.$Message = Message;
  app.config.globalProperties.$Notification = Notification;
  // 给 vue 实例挂载内部对象，例如：
  // app.config.globalProperties.$XModal = VXETable.modal
  // app.config.globalProperties.$XPrint = VXETable.print
  // app.config.globalProperties.$XSaveFile = VXETable.saveFile
  // app.config.globalProperties.$XReadFile = VXETable.readFile
}
app.use(useTable);
app.mount("#app");
