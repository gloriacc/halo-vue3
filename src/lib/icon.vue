<template>
  <svg class="halo-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script lang="ts">
  import {defineComponent} from 'vue';

  const HaloIcon = defineComponent({
    name: 'HaloIcon',
    props: {
      name: {}
    }
  })
  export default HaloIcon
</script>
<style lang="scss" scoped>
  .halo-icon {
    width: 1em;
    height: 1em;
  }
</style>