<template>
  <h2>
    <slot></slot>
  </h2>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  const H2 = defineComponent({})
  export default H2
</script>
<style lang="scss" scoped>
  h2 {
    margin: 1.6em 0 .6em;
    color: #222c48;
  }
</style>