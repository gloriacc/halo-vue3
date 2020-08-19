<template>
  <article>
    <H1>Input 输入框</H1>
    <P>基本表单组件。</P>
    <section>
      <H2>基础用法</H2>
      <Example :code="regularExampleCode">
        <div>
          <h-input placeholder="请输入" v-model:value="value1"/>
        </div>
      </Example>
    </section>
    <section>
      <H2>带图标的输入框</H2>
      <Example :code="iconExampleCode">
        <div>
          <h-input placeholder="请输入" prefix-icon="tip"/>
          <h-input placeholder="请输入" suffix-icon="ok"/>
          <h-input placeholder="请输入" prefix-icon="tip" suffix-icon="ok"/>
        </div>
      </Example>
    </section>
    <section>
      <H2>不同尺寸</H2>
      <P>分为大、中、小三种尺寸，不设置该属性时默认为中等尺寸。</P>
      <Example :code="sizeExampleCode">
        <div>
          <h-input size="small" placeholder="请输入"/>
          <h-input placeholder="请输入"/>
          <h-input size="large" placeholder="请输入"/>
        </div>
      </Example>
    </section>
    <section>
      <H2>文本域</H2>
      <Example :code="textareaExampleCode">
        <div>
          <h-input type="textarea" placeholder="请输入"/>
          <h-input type="textarea" placeholder="请输入" rows="5"/>
          <h-input type="textarea" placeholder="请输入" rows="5" cols="10"/>
        </div>
      </Example>
    </section>
    <section class="inputApi">
      <H2>API</H2>
      <Api :content="inputApi"/>
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
  import Input from '../lib/input.vue';

  const InputDemo = defineComponent({
    components: {
      H1, H2, P, Span, Example, Api,
      'h-input': Input,
    },
    setup () {
      const value1 = ref('Halo')
      return {value1}
    },
    data () {
      return {
        regularExampleCode: '```html\n' +
          '<h-input placeholder="请输入" v-model:value="value"/>\n' +
          '<script>\n' +
          '  export default {\n' +
          '    data() {\n' +
          '      return {\n' +
          '        value: \'Halo\'\n' +
          '      }\n' +
          '    }\n' +
          '  };\n' +
          '<\/script>\n' +
          '```',
        iconExampleCode: '```html\n' +
          '<h-input placeholder="请输入" prefix-icon="tip"/>\n' +
          '<h-input placeholder="请输入" suffix-icon="ok"/>\n' +
          '<h-input placeholder="请输入" prefix-icon="tip" suffix-icon="ok"/>\n' +
          '```',
        sizeExampleCode: '```html\n' +
          '<h-input size="small" placeholder="请输入"/>\n' +
          '<h-input placeholder="请输入"/>\n' +
          '<h-input size="large" placeholder="请输入"/>\n' +
          '```',
        textareaExampleCode: '```html\n' +
          '<h-input type="textarea" placeholder="请输入"/>\n' +
          '<h-input type="textarea" placeholder="请输入" rows="5"/>\n' +
          '<h-input type="textarea" placeholder="请输入" rows="5" cols="10"/>\n' +
          '```',
        inputApi: {
          head: ['属性', '说明', '类型', '默认值', '可选值'],
          body: [
            ['v-model:value', '绑定输入框的值', 'String', '-', '-'],
            ['type', '输入框类型', 'String', 'text', 'textarea / 其他原生的 type 属性值'],
            ['placeholder', '原生属性，占位文本', 'String', '-', '-'],
            ['disabled', '原生属性，是否禁用输入框', 'Boolean', 'false', '-'],
            ['readonly', '原生属性，是否只读', 'Boolean', 'false', '-'],
            ['prefix-icon', '前缀图标', 'String', '-', '-'],
            ['suffix-icon', '后缀图标', 'String', '-', '-'],
            ['size', '输入框尺寸', 'String', '-', 'large / small']
          ]
        }
      }
    }
  })
  export default InputDemo
</script>
<style lang="scss" scoped>
  .halo-input {
    margin-right: 2em;
  }
</style>