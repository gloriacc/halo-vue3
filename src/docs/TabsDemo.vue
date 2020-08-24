<template>
  <article>
    <H1>Tabs 标签页</H1>
    <P>应用于两种对立状态的切换。</P>
    <section>
      <H2>基础标签页</H2>
      <Example :code="regularExampleCode">
        {{selectTabName}}
        <h-tabs v-model:selected-tab-name="selectTabName" @change="onChange">
          <h-tabs-head>
            <h-tabs-item name="a">a</h-tabs-item>
            <h-tabs-item name="b">b</h-tabs-item>
            <h-tabs-item name="c">c</h-tabs-item>
          </h-tabs-head>
          <h-tabs-body>
            <h-tabs-panel name="a">aa</h-tabs-panel>
            <h-tabs-panel name="b">bb</h-tabs-panel>
            <h-tabs-panel name="c">cc</h-tabs-panel>
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
        selectTabName: 'b',
        regularExampleCode: '',
        tabsApi: ''
      }
    },
    methods: {
      onChange(tab) {

      }
    }
  })
  export default TabsDemo
</script>
<style lang="scss" scoped>

</style>