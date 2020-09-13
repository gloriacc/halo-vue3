<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import {defineComponent} from 'vue';
  const HaloTab = defineComponent({
    name: 'HaloTab'
  })
  export default HaloTab
</script>
<style lang="scss">

</style>