<template>
  <article>
    <H1>Button 按钮</H1>
    <P>基础组件。</P>
    <section class="regularExample">
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
    <section class="shapeExample">
      <H2>不同形状的按钮</H2>
      <P>圆角、圆形的操作按钮。</P>
      <Example :code="shapeExampleCode">
        <h-button shape="circle">H</h-button>
        <h-button type="primary" shape="circle">H</h-button>
        <h-button shape="round">H</h-button>
        <h-button type="primary" shape="round">Primary</h-button>
      </Example>
    </section>
    <section class="ghostExample">
      <H2>幽灵按钮</H2>
      <P>背景透明的操作按钮。</P>
      <Example :code="ghostExampleCode">
        <h-button ghost>Default</h-button>
        <h-button type="primary" ghost>Primary</h-button>
        <h-button type="success" ghost>Success</h-button>
        <h-button type="warning" ghost>Warning</h-button>
        <h-button type="danger" shape="round" ghost>Danger</h-button>
      </Example>
    </section>
    <section class="iconExample">
      <H2>图标按钮</H2>
      <P>带图标的操作按钮。</P>
      <P>当 <Span>shape</Span> 属性为 <Span>circle</Span> 时，只显示由 <Span>icon</Span> 属性设置的图标，忽略内容。</P>
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
    <section class="disabledExample">
      <H2>禁用</H2>
      <P>按钮为禁用状态。</P>
      <Example :code="disabledExampleCode">
        <h-button shape="circle" icon="setting"></h-button>
        <h-button shape="circle" icon="setting" disabled></h-button>
        <h-button type="primary">Primary</h-button>
        <h-button type="primary" disabled>Primary</h-button>
        <h-button type="success" shape="round">Success</h-button>
        <h-button type="success" shape="round" disabled>Success</h-button>
        <h-button type="danger" ghost>Danger</h-button>
        <h-button type="danger" ghost disabled>Danger</h-button>
        <h-button type="link">Link</h-button>
        <h-button type="link" disabled>Link</h-button>
        <h-button type="text">Text</h-button>
        <h-button type="text" disabled>Text</h-button>
      </Example>
    </section>
    <section class="loadingExample">
      <H2>加载中</H2>
      <P>按钮为加载中状态。</P>
      <Example :code="loadingExampleCode">
        <h-button shape="circle" loading></h-button>
        <h-button type="primary" loading>Loading</h-button>
        <h-button type="link" loading>Loading</h-button>
        <h-button type="text" icon-position="right" loading>Loading</h-button>
        <h-button shape="round" loading ghost disabled>Loading</h-button>
        <h-button type="primary" :loading="loading" @click="loading = true">{{!loading ? 'Click me' : 'Loading'}}</h-button>
      </Example>
    </section>
    <section class="groupExample">
      <H2>组合按钮</H2>
      <P>包含多个按钮</P>
      <Example :code="loadingExampleCode">
        <h-button-group>
          <h-button>上一页</h-button>
          <h-button>下一页</h-button>
        </h-button-group>
        <h-button-group>
          <h-button type="primary">上一页</h-button>
          <h-button type="danger">下一页</h-button>
        </h-button-group>
        <h-button-group>
          <h-button shape="circle">A</h-button>
          <h-button shape="circle">B</h-button>
          <h-button shape="circle">C</h-button>
        </h-button-group>
      </Example>
    </section>
    <section class="buttonApi">
      <H2>API</H2>
      <Api :content="buttonApi"></Api>
    </section>
  </article>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import H1 from '../components/H1.vue'
  import H2 from '../components/H2.vue'
  import P from '../components/P.vue'
  import Span from '../components/Span.vue'
  import Example from '../components/Example.vue'
  import Api from '../components/Api.vue'
  import Button from '../lib/button.vue'
  import ButtonGroup from '../lib/button-group.vue'
  const ButtonDemo = defineComponent({
    components: {
      H1, H2, P, Span, Example, Api,
      'h-button': Button,
      'h-button-group': ButtonGroup
    },
    data () {
      return {
        loading: false,
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
        disabledExampleCode: '```html\n' +
          '<h-button shape="circle" icon="setting"></h-button>\n' +
          '<h-button shape="circle" icon="setting" disabled></h-button>\n' +
          '<h-button type="primary">Primary</h-button>\n' +
          '<h-button type="primary" disabled>Primary</h-button>\n' +
          '<h-button type="success" shape="round">Success</h-button>\n' +
          '<h-button type="success" shape="round" disabled>Success</h-button>\n' +
          '<h-button type="danger" ghost>Danger</h-button>\n' +
          '<h-button type="danger" ghost disabled>Danger</h-button>\n' +
          '<h-button type="link">Link</h-button>\n' +
          '<h-button type="link" disabled>Link</h-button>\n' +
          '<h-button type="text">Text</h-button>\n' +
          '<h-button type="text" disabled>Text</h-button>\n' +
          '```',
        loadingExampleCode: '```html\n' +
          '<h-button shape="circle" loading></h-button>\n' +
          '<h-button type="primary" loading>Loading</h-button>\n' +
          '<h-button type="link" loading>Loading</h-button>\n' +
          '<h-button type="text" icon-position="right" loading>Loading</h-button>\n' +
          '<h-button shape="round" loading ghost disabled>Loading</h-button>\n' +
          '<h-button type="primary" :loading="loading" @click="loading = true">{{!loading ? \'Click me\' : \'Loading\'}}</h-button>\n' +
          '```',
        buttonApi: {
          head: ['属性', '说明', '类型', '默认值', '可选值'],
          body: [
            ['type', '按钮类型', 'String', 'default', 'primary / success / warning / danger / link / text'],
            ['shape', '按钮形状', 'String', '-', 'round / circle'],
            ['ghost', '是否为幽灵按钮', 'Boolean', 'false', '-'],
            ['icon', '图标类名', 'String', '-', '-'],
            ['icon-position', '图标位置', 'String', 'left', 'right'],
            ['disabled', '是否禁用按钮', 'Boolean', 'false', '-'],
            ['loading', '是否处于加载中状态', 'Boolean', 'false', '-']
          ]
        }
      }
    },
  })
  export default ButtonDemo
</script>
<style lang="scss" scoped>
  section:not(.groupExample) {
    .halo-button {
      margin: .2em .5em;
    }
  }
  section.groupExample {
    .halo-button-group {
      margin: .2em .5em;
    }
  }
</style>