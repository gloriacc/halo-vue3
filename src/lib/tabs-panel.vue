<template>
  <div class="halo-tabs-panel" :class="{['halo-tabs-panel-active']: name === tabName}" :data-name="name">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import {defineComponent, inject} from 'vue';
  const HaloTabsPanel = defineComponent({
    name: 'HaloTabsPanel',
    props: {
      name: String,
    },
    setup () {
      const tabName = inject('tabName')
      return {tabName}
    }
  })
  export default HaloTabsPanel
</script>
<style lang="scss">
  .halo-tabs-panel {
    display: none;
    &-active {
      display: block;
    }
  }
</style>