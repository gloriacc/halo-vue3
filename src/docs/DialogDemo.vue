<template>
  <article>
    <H1>Dialog</H1>
    <P>Dialog</P>
    <section>
      <H2>基础</H2>
      <Example :code="regularExampleCode">
        <h-dialog v-model:visible="isVisible" :ok="ok" :cancel="cancel">
          <template v-slot:title>
            <strong>Message</strong>
          </template>
          <template v-slot:content>
            <p>Dialog Content</p>
          </template>
        </h-dialog>
        <h-button @click="toggle">open</h-button>
      </Example>
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

const DialogDemo = defineComponent({
  components: {
    H1, H2, P, Span, Example, Api,
  },
  setup() {
    const isVisible = ref(false)
    const toggle = () => {
      isVisible.value = !isVisible.value
    }
    const ok = () => {
      console.log(ok);
    }
    const cancel = () => {
      console.log(cancel);
    }
    return {isVisible, toggle, ok, cancel}
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