<template>
  <router-view />
</template>
<script lang="ts">
import { ref, provide } from "vue";
import { router } from "./router";
import store from "./store";
export default {
  name: "App",
  setup() {
    const asideVisible = ref<Boolean>(store.getters.getWidth > 500);
    provide("asideVisible", asideVisible);
    router.afterEach(() => {
      if (store.getters.getWidth <= 500) {
        asideVisible.value = false;
      }
    });
    window.onresize = () => {
      store.commit("currentWidth", document.documentElement.clientWidth);
      asideVisible.value = store.getters.getWidth > 500;
    };
  },
};
</script>
