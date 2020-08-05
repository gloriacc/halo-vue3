<template>
  <div class="panel">
    <div class="panel-component">
      <slot></slot>
    </div>
    <div class="panel-code" v-html="markedCode" v-highlight></div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import marked from 'marked'

  const Example = defineComponent({
    props: {
      code: String
    },
    setup (props) {
      const markedCode = props.code ? marked(props.code || '') : ''
      return { markedCode }
    },
  })

  export default Example
</script>
<style lang="scss" scoped>
  .panel {
    width: 100%;
    display: inline-block;
    border: 2px solid #eee;
    > div {
      padding: 1em;
      &:first-child {
        border-bottom: 2px solid #eee;
      }
    }
  }
</style>