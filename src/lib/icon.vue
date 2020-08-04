<template>
  <svg class="h-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script lang="ts">
  export default {
    name: 'HaloIcon',
    props: {
      name: {}
    }
  }
</script>
<style lang="scss" scoped>
  .h-icon {
    width: 1em;
    height: 1em;
  }
</style>