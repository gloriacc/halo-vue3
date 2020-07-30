<template>
  <div>
    <h-button>按钮</h-button>
    <h-button icon="ok">按钮</h-button>
    <h-button icon="ok" icon-position="right">按钮</h-button>
    <h-button :loading=loading1 @click="loading1 = !loading1">按钮</h-button>
    <h-button-group>
      <h-button>上一页</h-button>
      <h-button>更多</h-button>
      <h-button>下一页</h-button>
    </h-button-group>
  </div>
</template>
<script lang="ts">
  import Button from '../singleComponents/button.vue'
  import ButtonGroup from '../singleComponents/button-group.vue'
  export default {
    components: {
      'h-button': Button,
      'h-button-group': ButtonGroup
    }
  }
</script>
<style lang="scss" scoped>

</style>