<template>
  <article>
    <H1>Switch 开关</H1>
    <P>应用于两种对立状态的切换。</P>
    <section>
      <H2>基础开关</H2>
      <Example :code="regularExampleCode">
        <h-switch/>
        <h-switch v-model:value="isChecked"/>
      </Example>
    </section>
    <section>
      <H2>自定义颜色</H2>
      <P>可设置背景颜色。</P>
      <Example :code="colorExampleCode">
        <h-switch uncheck-color="#e8ef44"/>
        <h-switch uncheck-color="#eaaf49" checked-color="#7cc96a"/>
      </Example>
    </section>
    <section>
      <H2>禁用</H2>
      <P>开关处于不可用状态。</P>
      <Example :code="disabledExampleCode">
        <h-switch disabled/>
      </Example>
    </section>
    <section>
      <H2>带文字的开关</H2>
      <P>开关背景处可设置内容。</P>
      <Example :code="textExampleCode">
        <h-switch uncheck-content="关" checked-content="开"/>
        <h-switch uncheck-content="关闭" checked-content="开启"/>
      </Example>
    </section>
    <section>
      <H2>不同尺寸</H2>
      <P>分为大、中、小三种尺寸，不设置该属性时默认为中等尺寸。</P>
      <Example :code="sizeExampleCode">
        <h-switch size="small"/>
        <h-switch/>
        <h-switch size="large"/>
        <h-switch size="small" uncheck-content="关" checked-content="开"/>
        <h-switch size="large" uncheck-content="关闭" checked-content="开启"/>
      </Example>
    </section>
    <section class="switchApi">
      <H2>属性</H2>
      <Api :content="switchApi"/>
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

  const SwitchDemo = defineComponent({
    components: {
      H1, H2, P, Span, Example, Api,
    },
    setup () {
      const isChecked = ref(true)
      return {isChecked}
    },
    data () {
      return {
        regularExampleCode: '```html\n' +
          '<h-switch/>\n' +
          '<h-switch v-model:value="isChecked"/>\n' +
          '<scr' + 'ipt>\n' +
          '  export default {\n' +
          '    data() {\n' +
          '      return {\n' +
          '        isChecked: true\n' +
          '      }\n' +
          '    }\n' +
          '  };\n' +
          '<\/scr' + 'ipt>\n' +
          '```',
        colorExampleCode: '```html\n' +
          '<h-switch uncheck-color="#e8ef44"/>\n' +
          '<h-switch uncheck-color="#eaaf49" checked-color="#7cc96a"/>\n' +
          '```',
        disabledExampleCode: '```html\n' +
          '<h-switch disabled/>\n' +
          '```',
        textExampleCode: '```html\n' +
          '<h-switch uncheck-content="关" checked-content="开"/>\n' +
          '<h-switch uncheck-content="关闭" checked-content="开启"/>\n' +
          '```',
        sizeExampleCode: '```html\n' +
          '<h-switch size="small"/>\n' +
          '<h-switch/>\n' +
          '<h-switch size="large"/>\n' +
          '<h-switch size="small" uncheck-content="关" checked-content="开"/>\n' +
          '<h-switch size="large" uncheck-content="关闭" checked-content="开启"/>\n' +
          '```',
        switchApi: {
          head: ['属性', '说明', '类型', '默认值', '可选值'],
          body: [
            ['v-model:value', '绑定开关的状态值', 'Boolean', '-', 'true | false'],
            ['disabled', '是否禁用开发', 'Boolean', 'false', 'true | false'],
            ['uncheck-color', '开关开启时的背景颜色', 'String', '-', '十六色 | rgb | 英文名称'],
            ['checked-color', '开关关闭时的背景颜色', 'String', '-', '十六色 | rgb | 英文名称'],
            ['uncheck-content', '开关开启时的文字描述', 'String', '-', '-'],
            ['checked-content', '开关关闭时的文字描述', 'String', '-', '-'],
            ['size', '开关尺寸', 'String', '-', 'large | small']
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
    vertical-align: bottom;
  }
</style>