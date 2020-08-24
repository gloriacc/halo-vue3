<template>
  <div class="halo-tabs-head">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import {defineComponent, inject} from 'vue';
  const HaloTabsHead = defineComponent({
    name: 'HaloTabsHead',
    setup () {
      // const selectedTabName = inject('selectedTabName')
      // return {selectedTabName}
    },
  })
  export default HaloTabsHead
</script>
<style lang="scss">

</style>