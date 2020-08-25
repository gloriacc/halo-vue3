<template>
  <div class="halo-tabs">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import {defineComponent, provide, ref, watch} from 'vue';
  const HaloTabs = defineComponent({
    name: 'HaloTabs',
    props: {
      selectedTabName: String,
    },
    setup (props, context) {
      const tabName = ref(props.selectedTabName)
      watch(tabName, (newValue, oldValue) => {
        context.emit('update:selected-tab-name', tabName.value)
      })
      provide('tabName', tabName)

    },
    mounted() {
      if (this.$el.children.length === 0) {
        console.warn('tabs 缺少子组件')
      }
    },
  })
  export default HaloTabs
</script>
<style lang="scss">

</style>