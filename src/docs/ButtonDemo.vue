<template>
  <div>
    <h1>Button 按钮</h1>
    <p>基础组件。</p>
    <h2>常规按钮</h2>
    <p>常规的操作按钮。</p>
    <Example :code="regularExampleCode">
      <h-button>Default</h-button>
      <h-button type="primary">Primary</h-button>
      <h-button type="success">Success</h-button>
      <h-button type="warning">Warning</h-button>
      <h-button type="danger">Danger</h-button>
      <h-button type="link">Link</h-button>
    </Example>

<!--    <h-button icon="ok">按钮</h-button>-->
<!--    <h-button icon="ok" icon-position="right">按钮</h-button>-->
<!--    <h-button :loading=loading1 @click="loading1 = !loading1">按钮</h-button>-->
<!--    <h-button-group>-->
<!--      <h-button>上一页</h-button>-->
<!--      <h-button>更多</h-button>-->
<!--      <h-button>下一页</h-button>-->
<!--    </h-button-group>-->
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import Example from '../components/Example.vue'
  import Button from '../lib/button.vue'
  import ButtonGroup from '../lib/button-group.vue'

  const ButtonDemo = defineComponent({
    components: {
      Example,
      'h-button': Button,
      'h-button-group': ButtonGroup
    },
    setup () {

    },
    data () {
      return {
        regularExampleCode: '```html\n' +
          '<h-button>Default</h-button>\n' +
          '<h-button type="primary">Primary</h-button>\n' +
          '<h-button type="success">Success</h-button>\n' +
          '<h-button type="warning">Warning</h-button>\n' +
          '<h-button type="danger">Danger</h-button>\n' +
          '<h-button type="link">Link</h-button>\n' +
          '```',
      }
    },
    mounted () {


    }
  })
  export default ButtonDemo
</script>
<style lang="scss" scoped>
  h1 {
    margin: .6em 0;
  }
  h2 {
    margin: 1.6em 0 .6em;
  }
  p {
    margin: 1em 0;
    color: #631071;
  }
</style>