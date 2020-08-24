<template>
  <article>
    <H1>Icon 图标</H1>
    <P></P>
    <section>
      <H2>图标使用</H2>
      <P>指定 <Span>name</Span> 属性设置图标。</P>
      <Example :code="iconExampleCode">
        <h-icon name="loading"></h-icon>
      </Example>
    </section>
    <section class="switchApi">
      <H2>API</H2>
      <Api :content="switchApi"></Api>
    </section>
  </article>
</template>
<script lang="ts">
  import {defineComponent} from 'vue';
  import H1 from '../components/H1.vue';
  import H2 from '../components/H2.vue';
  import P from '../components/P.vue';
  import Span from '../components/Span.vue';
  import Example from '../components/Example.vue';
  import Api from '../components/Api.vue';
  const IconDemo = defineComponent({
    components: {
      H1, H2, P, Span, Example, Api,
    },
    data () {
      return {
        iconExampleCode: '```html\n' +
          '<h-icon name="loading"/>\n' +
          '```',
        switchApi: {
          head: ['属性', '说明', '类型', '默认值', '可选值'],
          body: [
            ['name', '图标类型', 'String', '-', '-']
          ]
        }
      }
    }
  })
  export default IconDemo
</script>
<style lang="scss" scoped>

</style>