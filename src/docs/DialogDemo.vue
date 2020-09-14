<template>
  <article>
    <H1>Dialog</H1>
    <P>在原页面基础上，弹出层提示用户操作。</P>
    <section>
      <H2>基础用法</H2>
      <P>内置标题和默认按钮，简便使用。</P>
      <Example :code="regularExampleCode">
        <h-dialog v-model:visible="isVisible1" :title="title" :ok="ok1" :cancel="cancel1">你好</h-dialog>
        <h-button @click="toggle1">open</h-button>
      </Example>
    </section>
    <section>
      <H2>自定义 title</H2>
      <P>定制标题区域的文本和样式。</P>
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
      <P>定制按钮区域的文本和样式。</P>
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
      <P>使用代码打开、关闭对话框。</P>
      <Example :code="hookExampleCode">
        <h-button @click="onShowDialog">open</h-button>
      </Example>
    </section>
    <section>
      <H2>属性</H2>
      <Api :content="dialogAttrApi"/>
    </section>
    <section>
      <H2>插槽</H2>
      <Api :content="dialogSlotApi"/>
    </section>
    <section>
      <H2>事件</H2>
      <Api :content="dialogEventApi"/>
    </section>
    <section>
      <H2>useDialog API</H2>
      <Api :content="useDialogApi"/>
    </section>
  </article>
</template>
<script lang="ts">
import { defineComponent, ref, h } from "vue";
import H1 from "../components/H1.vue";
import H2 from "../components/H2.vue";
import P from "../components/P.vue";
import Span from "../components/Span.vue";
import Example from "../components/Example.vue";
import Api from "../components/Api.vue";

import { useDialog } from "../lib/hooks/useDialog";
import Button from "../lib/button.vue";

const DialogDemo = defineComponent({
  components: {
    H1, H2, P, Span, Example, Api,
    Button,
  },
  setup() {
    const title = ref('提示')
    const isVisible1 = ref(false);
    const isVisible2 = ref(false);
    const isVisible3 = ref(false);
    const toggle1 = () => {
      isVisible1.value = !isVisible1.value;
    };
    const toggle2 = () => {
      isVisible2.value = !isVisible2.value;
    };
    const toggle3 = () => {
      isVisible3.value = !isVisible3.value;
    };
    const ok1 = () => {
      alert("确定");
    };
    const cancel1 = () => {
      alert("取消");
    };
    const ok3 = () => {
      alert("确定");
      isVisible3.value = !isVisible3.value;
    };
    const cancel3 = () => {
      alert("取消");
      isVisible3.value = !isVisible3.value;
    };
    const { showDialog, hideDialog } = useDialog();
    const onShowDialog = () => {
      showDialog({
        title: "警告",
        header: h("strong", {}, "标题"),
        content: "你好",
        footer: h(Button, { onClick: () => { hideDialog() } }, { default: () => "确定" }),
      });
    };
    return {
      title,
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
      onShowDialog,
    };
  },
  data() {
    return {
      regularExampleCode: '```html\n' +
          '<template>\n' +
          '  <h-dialog v-model:visible="isVisible" title="提示" :ok="ok" :cancel="cancel">你好</h-dialog>\n' +
          '  <h-button @click="toggle">open</h-button>\n' +
          '</template>\n' +
          '<scr' + 'ipt>\n' +
          'import { ref } from \'vue\'\n' +
          'export default {\n' +
          '  setup () {\n' +
          '    const isVisible = ref(false)\n' +
          '    const toggle = () => { isVisible.value = !isVisible.value }\n' +
          '    const ok = () => { alert("确定") }\n' +
          '    const cancel = () => { alert("取消") }\n' +
          '    return { isVisible, toggle, ok, cancel }\n' +
          '  }\n' +
          '}\n' +
          '</scr' + 'ipt>\n' +
          '```',
      titleExampleCode: '```html\n' +
          '<template>\n' +
          '  <h-dialog v-model:visible="isVisible">\n' +
          '    <template v-slot:header>\n' +
          '      <strong>消息</strong>\n' +
          '    </template>\n' +
          '    你好\n' +
          '  </h-dialog>\n' +
          '  <h-button @click="toggle">open</h-button>\n' +
          '</template>\n' +
          '<scr' + 'ipt>\n' +
          'import { ref } from \'vue\'\n' +
          'export default {\n' +
          '  setup () {\n' +
          '    const isVisible = ref(false)\n' +
          '    const toggle = () => { isVisible.value = !isVisible.value }\n' +
          '    return { isVisible, toggle }\n' +
          '  }\n' +
          '}\n' +
          '</scr' + 'ipt>\n' +
          '```',
      footerExampleCode: '```html\n' +
          '<template>\n' +
          '  <h-dialog v-model:visible="isVisible">\n' +
          '    是否删除？\n' +
          '    <template v-slot:footer>\n' +
          '      <h-button color="none" @click="cancel">取消</h-button>\n' +
          '      <h-button @click="ok">删除</h-button>\n' +
          '    </template>\n' +
          '  </h-dialog>\n' +
          '  <h-button @click="toggle">open</h-button>\n' +
          '</template>\n' +
          '<scr' + 'ipt>\n' +
          'import { ref } from \'vue\'\n' +
          'export default {\n' +
          '  setup () {\n' +
          '    const isVisible = ref(false)\n' +
          '    const toggle = () => { isVisible.value = !isVisible.value }\n' +
          '    const ok = () => {\n' +
          '      alert("确定")\n' +
          '      isVisible.value = !isVisible.value\n' +
          '    }\n' +
          '    const cancel = () => {\n' +
          '      alert("取消")\n' +
          '      isVisible.value = !isVisible.value\n' +
          '    }\n' +
          '    return { isVisible, toggle, ok, cancel }\n' +
          '  }\n' +
          '}\n' +
          '</scr' + 'ipt>\n' +
          '```',
      hookExampleCode: '```html\n' +
          '<template>\n' +
          '  <h-button @click="onShowDialog">open</h-button>\n' +
          '</template>\n' +
          '<scr' + 'ipt>\n' +
          'import { h } from \'vue\'\n' +
          'import { useDialog } from \'../lib/hooks/useDialog\'\n' +
          'export default {\n' +
          '  setup () {\n' +
          '    const { showDialog, hideDialog } = useDialog()\n' +
          '    const onShowDialog = () => {\n' +
          '      showDialog({\n' +
          '        title: "警告",\n' +
          '        header: h("strong", {}, "标题"),\n' +
          '        content: "你好",\n' +
          '        footer: h(Button, { onClick: () => { hideDialog() } }, { default: () => "确定" })\n' +
          '      })\n' +
          '    }\n' +
          '    return { onShowDialog }\n' +
          '  }\n' +
          '}\n' +
          '</scr' + 'ipt>\n' +
          '```',
      dialogAttrApi: {
        head: ['属性', '说明', '类型', '默认值', '可选值'],
        body: [
          ['v-model:visible', '绑定 Dialog 的显示状态', 'Boolean', 'false', 'true | false'],
          ['title', '设置标题文字', 'String', '提示', '-'],
          ['onClickOverlay', '点击遮罩层是是否关闭 Dialog', 'Boolean', 'true', 'true | false'],
        ]
      },
      dialogSlotApi: {
        head: ['插槽', '说明'],
        body: [
          ['v-slot:header', '标题区域内嵌 HTML'],
          ['v-slot:footer', '按钮区域内嵌 HTML'],
        ]
      },
      dialogEventApi: {
        head: ['事件', '说明', '回调参数'],
        body: [
          ['ok', '点击默认的确认按钮的回调', '-'],
          ['cancel', '点击默认的取消按钮的回调', '-'],
        ]
      },
      useDialogApi: {
        head: ['方法', '说明', '参数类型'],
        body: [
          ['showDialog', '打开 Dialog', 'Object'],
          ['hideDialog', '关闭 Dialog', '-'],
        ]
      },
    };
  },
});
export default DialogDemo;
</script>
<style lang="scss" scoped>
</style>