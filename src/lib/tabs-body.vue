<template>
  <div class="halo-tabs-body"
       :class="{[`halo-tabs-body-${tabType}`]: tabType}">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import {defineComponent, inject} from 'vue';
  const HaloTabsBody = defineComponent({
    name: 'HaloTabsBody',
    setup (props) {
      const tabType = inject('tabType')
      return {tabType}
    },
  })
  export default HaloTabsBody
</script>
<style lang="scss">
  $border-color: #dcdcdc;
  .halo-tabs-body {
    flex-grow: 1;
    &-card {
      padding: 1em;
    }
  }
</style>