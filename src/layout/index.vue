<template>
  <div>
    <TopNavigation />
  </div>
  <div class="layout" style="display: flex">
    <div>
      <div class="menu-demo">
        <!-- breakpoint="xl" : >= 1200px 响应式配置 -->
        <a-menu
          :style="{ width: '200px', height: '100%' }"
          :default-selected-keys="[params]"
          show-collapse-button
          breakpoint="xl"
          :auto-open-selected="true"
          @collapse="onCollapse"
        >
          <!-- :open-keys="params" -->
          <template v-for="item in routesItem" :key="item.path">
            <a-menu-item
              v-if="item.children.length === 1"
              :key="item.children[0].path"
              data-obj="1"
              @click="() => goto(item.children[0])"
            >
              <icon-font :type="item.meta.icon" :size="16" />
              {{ item.children[0].itemName }}
            </a-menu-item>
            <template v-if="item.children.length > 1">
              <a-sub-menu :key="item.name">
                <template #icon><icon-apps></icon-apps></template>
                <template #title>{{ item.itemName }}</template>
                <a-menu-item
                  v-for="el in item.children"
                  :key="el.path"
                  @click="() => goto(el)"
                  >{{ el.itemName }}</a-menu-item
                >
              </a-sub-menu>
            </template>
          </template>
        </a-menu>
      </div>
    </div>
    <div class="RouterViewMargin" :class="{ RouterViewWidth: collapsedStatus }">
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import TopNavigation from "@/layout/components/TopNavigation.vue";
import { Icon } from "@arco-design/web-vue";
import { computed, ref } from "vue"; // getCurrentInstance
import { IconApps } from "@arco-design/web-vue/es/icon"; // , IconBug, IconBulb
import { useRouter, RouterView } from "vue-router";
const IconFont = Icon.addFromIconFontCn({
  src: "https://at.alicdn.com/t/c/font_3867821_c74rxgp0sym.js",
});
const routesItem = useRouter().options.routes;
const router = useRouter();
const params = computed(() => {
  return router.currentRoute.value.path;
});
const collapsedStatus = ref(false);
const goto = (item: JumpType) => {
  router.push({
    name: item.name,
  });
};
interface JumpType {
  name: string;
}
// const { proxy } = getCurrentInstance();
function onCollapse(val: boolean, type: boolean) {
  collapsedStatus.value = val;
  console.log(type);
  // const content = type === "responsive" ? "触发响应式收缩" : "点击触发收缩";
  // proxy.$Notification.info({
  //   title: content,
  //   duration: 2000,
  // });
}
</script>
<style scoped lang="less">
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 59px);
  background-color: var(--color-neutral-2);
}
.RouterViewMargin {
  margin-left: 10px;
  border-radius: 10px 0 0 10px;
  overflow: hidden;
  height: calc(100vh - 59px);
  width: calc(100vw - 210px);
}
.layout .RouterViewWidth {
  width: calc(100vw - 59px);
}
</style>
