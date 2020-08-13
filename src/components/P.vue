<template>
  <p>
    <slot></slot>
  </p>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  const P = defineComponent({})
  export default P
</script>
<style lang="scss" scoped>
  p {
    margin: 1em 0;
  }
  span {
    display: inline-block;
    background-color: #eceff1;
  }
</style>