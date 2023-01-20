<template>
  <div class="TopNavigation">
    <a-menu
      class="TopNavigationMenu"
      mode="horizontal"
      :default-selected-keys="['1']"
    >
      <a-menu-item
        key="0"
        :style="{ padding: 0, marginRight: '38px' }"
        disabled
      >
        LOGO
      </a-menu-item>
      <div style="float: right">
        <a-menu-item key="1">Home</a-menu-item>
        <a-menu-item key="2">Solution</a-menu-item>
        <a-menu-item key="3">Cloud Service</a-menu-item>
        <a-menu-item key="4">Cooperation</a-menu-item>
      </div>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { onMounted, onUnmounted, reactive, ref } from "vue";

export default {
  setup() {
    const count = ref(0);
    const add = () => {
      count.value++;
    };
    const mouse = reactive({
      x: 0,
      y: 0,
    });
    onMounted(() => {});
    onUnmounted(() => {});
    return {
      count,
      add,
      mouse,
    };
  },
};
</script>
<style lang="less">
.TopNavigation {
  border-bottom: 1px solid var(--color-border-4);
}
</style>
