<template>
  <article>
    <H1>Tabs 标签页</H1>
    <P>应用于两种对立状态的切换。</P>
    <section>
      <H2>基础标签页</H2>
      <Example :code="regularExampleCode">
        <h-tabs v-model:selected-tab-name="selectTabNameA">
          <h-tabs-head>
            <h-tabs-item name="a">a</h-tabs-item>
            <h-tabs-item name="b">b</h-tabs-item>
            <h-tabs-item name="c">c</h-tabs-item>
          </h-tabs-head>
          <h-tabs-body>
            <h-tabs-panel name="a">page a</h-tabs-panel>
            <h-tabs-panel name="b">page b</h-tabs-panel>
            <h-tabs-panel name="c">page c</h-tabs-panel>
          </h-tabs-body>
        </h-tabs>
      </Example>
    </section>
    <section>
      <H2>方向</H2>
      <Example :code="positionExampleCode">
        <h-tabs v-model:selected-tab-name="selectTabNameB" :position="tabPositionA">
          <h-tabs-head>
            <h-tabs-item name="a">a</h-tabs-item>
            <h-tabs-item name="b">b</h-tabs-item>
            <h-tabs-item name="c">c</h-tabs-item>
          </h-tabs-head>
          <h-tabs-body>
            <h-tabs-panel name="a">page a</h-tabs-panel>
            <h-tabs-panel name="b">page b</h-tabs-panel>
            <h-tabs-panel name="c">page c</h-tabs-panel>
          </h-tabs-body>
        </h-tabs>
        <h-tabs v-model:selected-tab-name="selectTabNameB" :position="tabPositionB">
          <h-tabs-head>
            <h-tabs-item name="a">a</h-tabs-item>
            <h-tabs-item name="b">b</h-tabs-item>
            <h-tabs-item name="c">c</h-tabs-item>
          </h-tabs-head>
          <h-tabs-body>
            <h-tabs-panel name="a">page a</h-tabs-panel>
            <h-tabs-panel name="b">page b</h-tabs-panel>
            <h-tabs-panel name="c">page c</h-tabs-panel>
          </h-tabs-body>
        </h-tabs>
      </Example>
    </section>
    <section>
      <H2>卡片化</H2>
      <Example :code="cardExampleCode">
        <h-tabs v-model:selected-tab-name="selectTabNameC" type="card">
          <h-tabs-head>
            <h-tabs-item name="a">a</h-tabs-item>
            <h-tabs-item name="b">b</h-tabs-item>
            <h-tabs-item name="c">c</h-tabs-item>
          </h-tabs-head>
          <h-tabs-body>
            <h-tabs-panel name="a">page a</h-tabs-panel>
            <h-tabs-panel name="b">page b</h-tabs-panel>
            <h-tabs-panel name="c">page c</h-tabs-panel>
          </h-tabs-body>
        </h-tabs>
      </Example>
    </section>
    <section>
      <H2>API</H2>
      <Api :content="tabsApi"/>
    </section>
  </article>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import H1 from '../components/H1.vue';
  import H2 from '../components/H2.vue';
  import P from '../components/P.vue';
  import Span from '../components/Span.vue';
  import Example from '../components/Example.vue';
  import Api from '../components/Api.vue';
  const TabsDemo = defineComponent({
    components: {
      H1, H2, P, Span, Example, Api,
    },
    data () {
      return {
        selectTabNameA: 'a',
        selectTabNameB: 'b',
        tabPositionA: 'left',
        tabPositionB: 'right',
        selectTabNameC: 'a',
        regularExampleCode: '```html\n' +
            '<h-tabs v-model:selected-tab-name="selectTabName">\n' +
            '  <h-tabs-head>\n' +
            '    <h-tabs-item name="a">a</h-tabs-item>\n' +
            '    <h-tabs-item name="b">b</h-tabs-item>\n' +
            '    <h-tabs-item name="c">c</h-tabs-item>\n' +
            '  </h-tabs-head>\n' +
            '  <h-tabs-body>\n' +
            '    <h-tabs-panel name="a">page a</h-tabs-panel>\n' +
            '    <h-tabs-panel name="b">page b</h-tabs-panel>\n' +
            '    <h-tabs-panel name="c">page c</h-tabs-panel>\n' +
            '  </h-tabs-body>\n' +
            '</h-tabs>\n' +
            '```',
        positionExampleCode: '',
        cardExampleCode: '',
        tabsApi: ''
      }
    },
  })
  export default TabsDemo
</script>
<style lang="scss" scoped>

</style>