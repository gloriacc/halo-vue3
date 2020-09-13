<template>
  <article>
    <H1>Tabs 标签页</H1>
    <P>应用于两种对立状态的切换。</P>
    <section>
      <H2>基础标签页</H2>
      <Example :code="regularExampleCode">
        <h-tabs v-model:selected="example1">
          <h-tab title="tab1">tab1 content<br>tab1 content<br>tab1 content</h-tab>
          <h-tab title="tab2">tab2 content<br>tab2 content<br>tab2 content</h-tab>
          <h-tab title="tab3">tab3 content<br>tab3 content<br>tab3 content</h-tab>
        </h-tabs>
      </Example>
    </section>
    <section>
      <H2>方向</H2>
      <Example :code="positionExampleCode">
        <ButtonGroup class="position-button-group">
          <Button @click="onExample2Click('top')">Top</Button>
          <Button @click="onExample2Click('bottom')">Bottom</Button>
          <Button @click="onExample2Click('left')">Left</Button>
          <Button @click="onExample2Click('right')">Right</Button>
        </ButtonGroup>
        <h-tabs v-model:selected="example2" :pos="example2Pos">
          <h-tab title="tab1">tab1 content<br>tab1 content<br>tab1 content</h-tab>
          <h-tab title="tab2">tab2 content<br>tab2 content<br>tab2 content</h-tab>
          <h-tab title="tab3">tab3 content<br>tab3 content<br>tab3 content</h-tab>
        </h-tabs>
      </Example>
    </section>
    <section>
      <H2>卡片化</H2>
      <Example :code="cardExampleCode">
        <h-tabs v-model:selected="example3" type="card">
          <h-tab title="tab1">tab1 content<br>tab1 content<br>tab1 content</h-tab>
          <h-tab title="tab2">tab2 content<br>tab2 content<br>tab2 content</h-tab>
          <h-tab title="tab3">tab3 content<br>tab3 content<br>tab3 content</h-tab>
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
  import { defineComponent, ref } from 'vue'
  import H1 from '../components/H1.vue';
  import H2 from '../components/H2.vue';
  import P from '../components/P.vue';
  import Span from '../components/Span.vue';
  import Example from '../components/Example.vue';
  import Api from '../components/Api.vue';
  import ButtonGroup from '../lib/button-group.vue';
  import Button from '../lib/button.vue';
  const TabsDemo = defineComponent({
    components: {
      H1, H2, P, Span, Example, Api,
      ButtonGroup, Button
    },
    setup () {
      const example1 = ref('tab1')
      const example2 = ref('tab1')
      const example2Pos = ref('top')
      const example3 = ref('tab1')
      const onExample2Click = (pos: string) => {
        example2Pos.value = pos
      }
      return {
        example1,
        example2,
        example2Pos,
        onExample2Click,
        example3,
      }
    },
    data () {
      return {
        regularExampleCode: '```html\n' +
            '<template>\n' +
            '  <h-tabs v-model:selected="tab1">\n' +
            '    <h-tab title="tab1">tab1 content<br>tab1 content<br>tab1 content</h-tab>\n' +
            '    <h-tab title="tab2">tab2 content<br>tab2 content<br>tab2 content</h-tab>\n' +
            '    <h-tab title="tab3">tab3 content<br>tab3 content<br>tab3 content</h-tab>\n' +
            '  </h-tabs>\n' +
            '</template>\n' +
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
.position-button-group {
  margin-bottom: 2em;
}
</style>