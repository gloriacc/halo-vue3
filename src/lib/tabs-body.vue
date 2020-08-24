<template>
  <div class="halo-tabs-body">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import {defineComponent, inject} from 'vue';
  const HaloTabsBody = defineComponent({
    name: 'HaloTabsBody',
    setup () {
      // const selectedTabName = inject('selectedTabName')
      // return {selectedTabName}
    }
  })
  export default HaloTabsBody
</script>
<style lang="scss">

</style>