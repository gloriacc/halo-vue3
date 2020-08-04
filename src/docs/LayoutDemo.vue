<template>
  <h-row>
    <h-col span="2" :pad="{span: 2, offset: 4}">1</h-col>
    <h-col span="22" :pad="{span: 18}">2</h-col>
  </h-row>
  <h-row>
    <h-col span="2">1</h-col>
    <h-col span="20" offset="2">2</h-col>
  </h-row>
  <h-row gutter="10">
    <h-col span="2">1</h-col>
    <h-col span="22">2</h-col>
  </h-row>
</template>
<script lang="ts">
  import Row from '../lib/row.vue'
  import Col from '../lib/col.vue'
  export default {
    components: {
      'h-row': Row,
      'h-col': Col
    }
  }
</script>
<style lang="scss" scoped>

</style>