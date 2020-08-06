<template>
  <article>
    <H1>Button 按钮</H1>
    <P>基础组件。</P>
    <section>
      <H2>常规按钮</H2>
      <P>常规的操作按钮。</P>
      <Example :code="regularExampleCode">
        <h-button>Default</h-button>
        <h-button type="primary">Primary</h-button>
        <h-button type="success">Success</h-button>
        <h-button type="warning">Warning</h-button>
        <h-button type="danger">Danger</h-button>
        <h-button type="link">Link</h-button>
        <h-button type="text">Text</h-button>
      </Example>
    </section>
    <section>
      <H2>不同形状的按钮</H2>
      <P>圆角、圆形的操作按钮。</P>
      <Example :code="shapeExampleCode">
        <h-button shape="circle">H</h-button>
        <h-button type="primary" shape="circle">H</h-button>
        <h-button shape="round">H</h-button>
        <h-button type="primary" shape="round">Primary</h-button>
      </Example>
    </section>
    <section>
      <H2>幽灵按钮</H2>
      <P>背景透明的操作按钮。</P>
      <Example :code="ghostExampleCode">
        <h-button ghost>Default</h-button>
        <h-button type="primary" ghost>Primary</h-button>
        <h-button type="success" ghost>Success</h-button>
        <h-button type="warning" ghost>Warning</h-button>
        <h-button type="danger" circle ghost>Danger</h-button>
      </Example>
    </section>
    <section>
      <H2>图标按钮</H2>
      <P>带图标的操作按钮。</P>
      <Example :code="iconExampleCode">
        <h-button shape="circle" icon="setting"></h-button>
        <h-button shape="round" icon="setting"></h-button>
        <h-button icon="setting"></h-button>
        <h-button type="primary" icon="setting">Setting</h-button>
        <h-button type="success" icon="setting" ghost>Setting</h-button>
        <h-button type="warning" icon="setting" icon-position="right">Setting</h-button>
        <h-button type="link" icon="setting">Setting</h-button>
        <h-button type="text" icon="setting">Setting</h-button>
      </Example>
    </section>
  </article>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import H1 from '../components/H1.vue'
  import H2 from '../components/H2.vue'
  import P from '../components/P.vue'
  import Example from '../components/Example.vue'
  import Button from '../lib/button.vue'
  import ButtonGroup from '../lib/button-group.vue'
  const ButtonDemo = defineComponent({
    components: {
      H1, H2, P, Example,
      'h-button': Button,
      'h-button-group': ButtonGroup
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
          '<h-button type="text">Text</h-button>\n' +
          '```',
        shapeExampleCode: '```html\n' +
          '<h-button shape="circle">H</h-button>\n' +
          '<h-button type="primary" shape="circle">H</h-button>\n' +
          '<h-button shape="round">H</h-button>\n' +
          '<h-button type="primary" shape="round">Primary</h-button>\n' +
          '```',
        ghostExampleCode: '```html\n' +
          '<h-button ghost>Default</h-button>\n' +
          '<h-button type="primary" ghost>Primary</h-button>\n' +
          '<h-button type="success" ghost>Success</h-button>\n' +
          '<h-button type="warning" ghost>Warning</h-button>\n' +
          '<h-button type="danger" circle ghost>Danger</h-button>\n' +
          '```',
        iconExampleCode: '```html\n' +
          '<h-button shape="circle" icon="setting"></h-button>\n' +
          '<h-button shape="round" icon="setting"></h-button>\n' +
          '<h-button icon="setting"></h-button>\n' +
          '<h-button type="primary" icon="setting">Setting</h-button>\n' +
          '<h-button type="success" icon="setting" ghost>Setting</h-button>\n' +
          '<h-button type="warning" icon="setting" icon-position="right">Setting</h-button>\n' +
          '<h-button type="link" icon="setting">Setting</h-button>\n' +
          '<h-button type="text" icon="setting">Setting</h-button>\n' +
          '```',
      }
    },
  })
  export default ButtonDemo
</script>
<style lang="scss" scoped>
  button {
    margin-right: 1em;
  }
</style>