<template>
  <span>
    <slot></slot>
  </span>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  const Span = defineComponent({})
  export default Span
</script>
<style lang="scss" scoped>
  span {
    display: inline-block;
    background-color: #eceff1;
    padding: .2em .4em;
    border-radius: .2em;
    font-size: 14px;
  }
</style>