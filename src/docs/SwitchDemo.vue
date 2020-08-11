<template>
  <article>
    <H1>Switch 开关</H1>
    <P>应用于两种对立状态的切换。</P>
    <section>
      <H2>常规开关</H2>
      <Example :code="regularExampleCode">
        <h-switch></h-switch>
        <h-switch v-model:value="isChecked1"></h-switch>
      </Example>
    </section>
    <section>
      <H2>禁用</H2>
      <P>开关处于不可用状态。</P>
      <Example :code="disabledExampleCode">
        <h-switch disabled></h-switch>
      </Example>
    </section>
    <section>
      <H2>带文字的开关</H2>
      <P>开关背景处可设置内容。</P>
      <Example :code="textExampleCode">
        <h-switch v-model:value="isChecked2" uncheck-content="关" checked-content="开"></h-switch>
        <h-switch v-model:value="isChecked3" uncheck-content="关闭" checked-content="开启"></h-switch>
      </Example>
    </section>
    <section class="switchApi">
      <H2>API</H2>
      <Api :content="switchApi"></Api>
    </section>
  </article>
</template>
<script lang="ts">
  import {defineComponent, ref} from 'vue';
  import H1 from '../components/H1.vue';
  import H2 from '../components/H2.vue';
  import P from '../components/P.vue';
  import Span from '../components/Span.vue';
  import Example from '../components/Example.vue';
  import Api from '../components/Api.vue';
  import Switch from '../lib/switch.vue';

  const SwitchDemo = defineComponent({
    components: {
      H1, H2, P, Span, Example, Api,
      'h-switch': Switch,
    },
    setup () {
      const isChecked1 = ref(true)
      const isChecked2 = ref(true)
      const isChecked3 = ref(true)
      return {isChecked1, isChecked2, isChecked3}
    },
    data () {
      return {
        regularExampleCode: '```html\n' +
          '<h-switch></h-switch>\n' +
          '<h-switch v-model:value="isChecked1"></h-switch>\n' +
          '<script>\n' +
          '  export default {\n' +
          '    data() {\n' +
          '      return {\n' +
          '        isChecked: true\n' +
          '      }\n' +
          '    }\n' +
          '  };\n' +
          '<\/script>\n' +
          '```',
        disabledExampleCode: '```html\n' +
          '<h-switch disabled></h-switch>\n' +
          '```',
        textExampleCode: '```html\n' +
          '<h-switch v-model:value="isChecked1" uncheck-content="关" checked-content="开"></h-switch>\n' +
          '<h-switch v-model:value="isChecked2" uncheck-content="关闭" checked-content="开启"></h-switch>\n' +
          '<script>\n' +
          '  export default {\n' +
          '    data() {\n' +
          '      return {\n' +
          '        isChecked1: true,\n' +
          '        isChecked2: true\n' +
          '      }\n' +
          '    }\n' +
          '  };\n' +
          '<\/script>\n' +
          '```',
        switchApi: {
          head: ['属性', '说明', '类型', '默认值', '可选值'],
          body: [
            ['v-model:value', '绑定开关的状态值', 'Boolean', '-', '-'],
            ['disabled', '是否禁用开发', 'Boolean', 'false', '-'],
            ['uncheck-content', '开关开启时的文字描述', 'String', '-', '-'],
            ['checked-content', '开关关闭时的文字描述', 'String', '-', '-'],
          ]
        }
      }
    }
  })
  export default SwitchDemo
</script>
<style lang="scss" scoped>
  .halo-switch {
    margin: .2em .5em;
  }
</style>