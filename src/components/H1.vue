<template>
  <h1>
    <slot></slot>
  </h1>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  const H1 = defineComponent({})
  export default H1
</script>
<style lang="scss" scoped>
  h1 {
    margin: .6em 0;
    font-size: 2em;
    color: #161926;
  }
</style>