<template>
  <article>
    <H1>Button 按钮</H1>
    <P>基础组件。</P>
    <section class="regularExample">
      <H2>基础按钮</H2>
      <P>最基础的操作按钮。</P>
      <Example :code="regularExampleCode">
        <h-button>Button</h-button>
        <h-button kind="link">Link</h-button>
        <h-button kind="text">Text</h-button>
      </Example>
    </section>
    <section class="regularExample">
      <H2>自定义颜色</H2>
      <P>可以给按钮设置颜色。</P>
      <Example :code="colorExampleCode">
        <h-button color="#df546c">Button</h-button>
        <h-button color="none">Button</h-button>
        <h-button color="#df546c" kind="link">Link</h-button>
        <h-button color="#df546c" kind="text">Text</h-button>
      </Example>
    </section>
    <section class="shapeExample">
      <H2>不同形状的按钮</H2>
      <P>圆角、圆形的操作按钮。</P>
      <Example :code="shapeExampleCode">
        <h-button shape="circle">H</h-button>
        <h-button shape="circle" color="none">H</h-button>
        <h-button shape="round">H</h-button>
        <h-button shape="round">Button</h-button>
      </Example>
    </section>
    <section class="ghostExample">
      <H2>幽灵按钮</H2>
      <P>背景透明的操作按钮。</P>
      <Example :code="ghostExampleCode">
        <h-button ghost>Button</h-button>
        <h-button shape="round" color="#df546c" ghost>Button</h-button>
        <h-button color="none" ghost>Button</h-button>
      </Example>
    </section>
    <section class="iconExample">
      <H2>图标按钮</H2>
      <P>带图标的操作按钮。</P>
      <P>当 <Span>shape</Span> 属性为 <Span>circle</Span> 时，只显示由 <Span>icon</Span> 属性设置的图标，忽略内容。</P>
      <Example :code="iconExampleCode">
        <h-button shape="circle" icon="setting"/>
        <h-button shape="round" icon="setting"/>
        <h-button icon="setting"/>
        <h-button icon="setting">Setting</h-button>
        <h-button icon="setting" ghost>Setting</h-button>
        <h-button icon="setting" icon-position="right">Setting</h-button>
        <h-button kind="link" icon="setting">Setting</h-button>
        <h-button kind="text" icon="setting">Setting</h-button>
      </Example>
    </section>
    <section class="disabledExample">
      <H2>禁用</H2>
      <P>按钮为禁用状态。</P>
      <Example :code="disabledExampleCode">
        <h-button shape="circle" icon="setting"/>
        <h-button shape="circle" icon="setting" disabled/>
        <h-button>Button</h-button>
        <h-button disabled>Button</h-button>
        <h-button shape="round">Button</h-button>
        <h-button shape="round" disabled>Button</h-button>
        <h-button ghost>Button</h-button>
        <h-button ghost disabled>Button</h-button>
        <h-button kind="link">Link</h-button>
        <h-button kind="link" disabled>Link</h-button>
        <h-button kind="text">Text</h-button>
        <h-button kind="text" disabled>Text</h-button>
      </Example>
    </section>
    <section class="loadingExample">
      <H2>加载中</H2>
      <P>按钮为加载中状态。</P>
      <Example :code="loadingExampleCode">
        <h-button shape="circle" loading/>
        <h-button loading>Loading</h-button>
        <h-button kind="link" loading>Loading</h-button>
        <h-button kind="text" icon-position="right" loading>Loading</h-button>
        <h-button shape="round" loading ghost disabled>Loading</h-button>
        <h-button :loading="loading" @click="loading = true">{{!loading ? 'Click me' : 'Loading'}}</h-button>
      </Example>
    </section>
    <section class="groupExample">
      <H2>组合按钮</H2>
      <P>包含多个按钮。</P>
      <Example :code="groupExampleCode">
        <h-button-group>
          <h-button>上一页</h-button>
          <h-button>下一页</h-button>
        </h-button-group>
        <h-button-group>
          <h-button ghost>上一页</h-button>
          <h-button ghost>下一页</h-button>
        </h-button-group>
        <h-button-group>
          <h-button shape="circle">A</h-button>
          <h-button shape="circle">B</h-button>
          <h-button shape="circle">C</h-button>
        </h-button-group>
        <h-button-group>
          <h-button shape="round" ghost>A</h-button>
          <h-button shape="round" ghost>B</h-button>
          <h-button shape="round" ghost>C</h-button>
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
          '<h-button>Button</h-button>\n' +
          '<h-button kind="link">Link</h-button>\n' +
          '<h-button kind="text">Text</h-button>\n' +
          '```',
        colorExampleCode: '```html\n' +
          '<h-button color="#df546c">Button</h-button>\n' +
          '<h-button color="none">Button</h-button>\n' +
          '<h-button color="#df546c" kind="link">Link</h-button>\n' +
          '<h-button color="#df546c" kind="text">Text</h-button>\n' +
          '```',
        shapeExampleCode: '```html\n' +
          '<h-button shape="circle">H</h-button>\n' +
          '<h-button shape="circle" color="none">H</h-button>\n' +
          '<h-button shape="round">H</h-button>\n' +
          '<h-button shape="round">Button</h-button>\n' +
          '```',
        ghostExampleCode: '```html\n' +
          '<h-button ghost>Button</h-button>\n' +
          '<h-button shape="round" color="#df546c" ghost>Button</h-button>\n' +
          '<h-button color="none" ghost>Button</h-button>\n' +
          '```',
        iconExampleCode: '```html\n' +
          '<h-button shape="circle" icon="setting"/>\n' +
          '<h-button shape="round" icon="setting"/>\n' +
          '<h-button icon="setting"/>\n' +
          '<h-button icon="setting">Setting</h-button>\n' +
          '<h-button icon="setting" ghost>Setting</h-button>\n' +
          '<h-button icon="setting" icon-position="right">Setting</h-button>\n' +
          '<h-button kind="link" icon="setting">Setting</h-button>\n' +
          '<h-button kind="text" icon="setting">Setting</h-button>\n' +
          '```',
        disabledExampleCode: '```html\n' +
          '<h-button shape="circle" icon="setting"/>\n' +
          '<h-button shape="circle" icon="setting" disabled/>\n' +
          '<h-button>Button</h-button>\n' +
          '<h-button disabled>Button</h-button>\n' +
          '<h-button shape="round">Button</h-button>\n' +
          '<h-button shape="round" disabled>Button</h-button>\n' +
          '<h-button ghost>Button</h-button>\n' +
          '<h-button ghost disabled>Button</h-button>\n' +
          '<h-button kind="link">Link</h-button>\n' +
          '<h-button kind="link" disabled>Link</h-button>\n' +
          '<h-button kind="text">Text</h-button>\n' +
          '<h-button kind="text" disabled>Text</h-button>\n' +
          '```',
        loadingExampleCode: '```html\n' +
          '<h-button shape="circle" loading/>\n' +
          '<h-button loading>Loading</h-button>\n' +
          '<h-button kind="link" loading>Loading</h-button>\n' +
          '<h-button kind="text" icon-position="right" loading>Loading</h-button>\n' +
          '<h-button shape="round" loading ghost disabled>Loading</h-button>\n' +
          '<h-button :loading="loading" @click="loading = true">{{!loading ? \'Click me\' : \'Loading\'}}</h-button>\n' +
          '```',
        groupExampleCode: '```html\n' +
          '<h-button-group>\n' +
          '  <h-button>上一页</h-button>\n' +
          '  <h-button>下一页</h-button>\n' +
          '</h-button-group>\n' +
          '<h-button-group>\n' +
          '  <h-button ghost>上一页</h-button>\n' +
          '  <h-button ghost>下一页</h-button>\n' +
          '</h-button-group>\n' +
          '<h-button-group>\n' +
          '  <h-button shape="circle">A</h-button>\n' +
          '  <h-button shape="circle">B</h-button>\n' +
          '  <h-button shape="circle">C</h-button>\n' +
          '</h-button-group>\n' +
          '<h-button-group>\n' +
          '  <h-button shape="round" ghost>A</h-button>\n' +
          '  <h-button shape="round" ghost>B</h-button>\n' +
          '  <h-button shape="round" ghost>C</h-button>\n' +
          '</h-button-group>\n' +
          '```',
        buttonApi: {
          head: ['属性', '说明', '类型', '默认值', '可选值'],
          body: [
            ['kind', '按钮类型', 'String', '-', 'link / text'],
            ['color', '自定义按钮颜色', 'String', '-', '十六进制颜色值'],
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