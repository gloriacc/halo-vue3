<template>
  <article>
    <H1>Dialog</H1>
    <P>Dialog</P>
    <section>
      <H2>基础用法</H2>
      <Example :code="regularExampleCode">
        <h-dialog v-model:visible="isVisible1" title="提示" :ok="ok1" :cancel="cancel1">
          <p>Dialog Content</p>
        </h-dialog>
        <h-button @click="toggle1">open</h-button>
      </Example>
    </section>
    <section>
      <H2>自定义 title</H2>
      <Example :code="regularExampleCode">
        <h-dialog v-model:visible="isVisible2">
          <template v-slot:header>
            <strong>Message</strong>
          </template>
          <p>Dialog Content</p>
        </h-dialog>
        <h-button @click="toggle2">open</h-button>
      </Example>
    </section>
    <section>
      <H2>自定义 footer</H2>
      <Example :code="regularExampleCode">
        <h-dialog v-model:visible="isVisible3">
          <p>是否删除？</p>
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
      <Example :code="regularExampleCode">
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
        content: h('p', {}, '你好'),
        footer: h(Button, {'onClick': () => {hideDialog()}}, {default: () => '确定'}),
      })
    }
    return {isVisible1, isVisible2, isVisible3, toggle1, toggle2, toggle3, ok1, cancel1, ok3, cancel3, onShowDialog}
  },
  data() {
    return {
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
export default DialogDemo
</script>
<style lang="scss" scoped>

</style>