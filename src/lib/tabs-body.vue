<template>
  <div class="halo-tabs-body">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
  const HaloTabsBody = defineComponent({
    name: 'HaloTabsBody',
  })
  export default HaloTabsBody
</script>
<style lang="scss">

</style>