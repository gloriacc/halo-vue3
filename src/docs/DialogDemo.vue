<template>
  <article>
    <H1>Dialog</H1>
    <P>Dialog</P>
    <section>
      <H2>基础用法</H2>
      <Example :code="regularExampleCode">
        <h-dialog v-model:visible="isVisible1" title="提示" :ok="ok1" :cancel="cancel1">
          你好
        </h-dialog>
        <h-button @click="toggle1">open</h-button>
      </Example>
    </section>
    <section>
      <H2>自定义 title</H2>
      <Example :code="titleExampleCode">
        <h-dialog v-model:visible="isVisible2">
          <template v-slot:header>
            <strong>消息</strong>
          </template>
          你好
        </h-dialog>
        <h-button @click="toggle2">open</h-button>
      </Example>
    </section>
    <section>
      <H2>自定义 footer</H2>
      <Example :code="footerExampleCode">
        <h-dialog v-model:visible="isVisible3">
          是否删除？
          <template v-slot:footer>
            <h-button color="none" @click="cancel3">取消</h-button>
            <h-button @click="ok3">删除</h-button>
          </template>
        </h-dialog>
        <h-button @click="toggle3">open</h-button>
      </Example>
    </section>
    <section>
      <H2>useDialog</H2>
      <Example :code="useExampleCode">
        <h-button @click="onShowDialog">open</h-button>
      </Example>
    </section>
  </article>
</template>
<script lang="ts">
import {defineComponent, ref, h} from 'vue';
import H1 from '../components/H1.vue';
import H2 from '../components/H2.vue';
import P from '../components/P.vue';
import Span from '../components/Span.vue';
import Example from '../components/Example.vue';
import Api from '../components/Api.vue';

import {useDialog} from '../lib/hooks/useDialog'
import Button from '../lib/button.vue';

const DialogDemo = defineComponent({
  components: {
    H1, H2, P, Span, Example, Api,
    Button
  },
  setup() {
    const isVisible1 = ref(false)
    const isVisible2 = ref(false)
    const isVisible3 = ref(false)
    const toggle1 = () => {
      isVisible1.value = !isVisible1.value
    }
    const toggle2 = () => {
      isVisible2.value = !isVisible2.value
    }
    const toggle3 = () => {
      isVisible3.value = !isVisible3.value
    }
    const ok1 = () => {
      alert('确定')
    }
    const cancel1 = () => {
      alert('取消')
    }
    const ok3 = () => {
      alert('确定')
      isVisible3.value = !isVisible3.value
    }
    const cancel3 = () => {
      alert('取消')
      isVisible3.value = !isVisible3.value
    }
    const {showDialog, hideDialog} = useDialog()
    const onShowDialog = () => {
      showDialog({
        title: '警告',
        header: h('strong', {}, '标题'),
        content: '你好',
        footer: h(Button, {'onClick': () => {hideDialog()}}, {default: () => '确定'}),
      })
    }
    return {
      isVisible1,
      isVisible2,
      isVisible3,
      toggle1,
      toggle2,
      toggle3,
      ok1,
      cancel1,
      ok3,
      cancel3,
      onShowDialog
    }
  },
  data() {
    return {
      regularExampleCode: '```html\n' +
          '<h-dialog v-model:visible="isVisible" title="提示" :ok="ok" :cancel="cancel">\n' +
          '  你好\n' +
          '</h-dialog>\n' +
          '<script>\n' +
          '  export default {\n' +
          '    data() {\n' +
          '      return {\n' +
          '        isVisible: false\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      ok() {\n' +
          '        alert(\'确定\')\n' +
          '      },\n' +
          '      cancel() {\n' +
          '        alert(\'取消\')\n' +
          '      }\n' +
          '    }\n' +
          '  };\n' +
          '<\/script>\n' +
          '```',
      titleExampleCode: '```html\n' +
          '<h-dialog v-model:visible="isVisible">\n' +
          '  <template v-slot:header>\n' +
          '    <strong>消息</strong>\n' +
          '  </template>\n' +
          '  你好\n' +
          '</h-dialog>\n' +
          '<script>\n' +
          '  export default {\n' +
          '    data() {\n' +
          '      return {\n' +
          '        isVisible: false\n' +
          '      }\n' +
          '    }\n' +
          '  };\n' +
          '<\/script>\n' +
          '```',
      footerExampleCode: '```html\n' +
          '<h-dialog v-model:visible="isVisible">\n' +
          '  是否删除？\n' +
          '  <template v-slot:footer>\n' +
          '    <h-button color="none" @click="cancel">取消</h-button>\n' +
          '    <h-button @click="ok">删除</h-button>\n' +
          '  </template>\n' +
          '</h-dialog>\n' +
          '<script>\n' +
          '  export default {\n' +
          '    data() {\n' +
          '      return {\n' +
          '        isVisible: false\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      ok() {\n' +
          '        alert(\'确定\')\n' +
          '      },\n' +
          '      cancel() {\n' +
          '        alert(\'取消\')\n' +
          '      }\n' +
          '    }\n' +
          '  };\n' +
          '<\/script>\n' +
          '```',
      useExampleCode: '```html\n' +
          '<h-button @click="onShowDialog">\n' +
          '  open\n' +
          '</h-button>\n' +
          '<script>\n' +
          '  import {h} from \'vue\'\n' +
          '  import {useDialog} from \'../lib/hooks/useDialog\'\n' +
          '  export default {\n' +
          '    setup() {\n' +
          '      const {showDialog, hideDialog} = useDialog()\n' +
          '      const onShowDialog = () => {\n' +
          '        showDialog({\n' +
          '          title: \'警告\',\n' +
          '          header: h(\'strong\', {}, \'标题\'),\n' +
          '          content: \'你好\',\n' +
          '          footer: h(Button, {\'onClick\': () => {hideDialog()}}, {default: () => \'确定\'}),\n' +
          '        })\n' +
          '      }\n' +
          '      return {onShowDialog}\n' +
          '    }\n' +
          '  };\n' +
          '<\/script>\n' +
          '```',
      tabsApi: ''
    }
  },
})
export default DialogDemo
</script>
<style lang="scss" scoped>

</style>