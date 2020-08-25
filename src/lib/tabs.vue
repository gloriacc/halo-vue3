<template>
  <div class="halo-tabs" :class="{[`halo-tabs-${tabPosition}`]: tabPosition}">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import {defineComponent, provide, ref, watch} from 'vue';
  const HaloTabs = defineComponent({
    name: 'HaloTabs',
    props: {
      selectedTabName: String,
      tabPosition: {
        type: String,
        validator (value: string) {
          return ['right', 'left'].includes(value)
        }
      }
    },
    setup (props, context) {
      const tabName = ref(props.selectedTabName)
      watch(tabName, (newValue, oldValue) => {
        context.emit('update:selected-tab-name', tabName.value)
      })
      provide('tabName', tabName)
      console.log(props.tabPosition);
      if (!props.tabPosition) return
      const tabPosition = ref(props.tabPosition)
      provide('tabPosition', tabPosition)

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
  .halo-tabs {
    &-left {
      display: flex;
      flex-direction: row;
    }
    &-right {
      display: flex;
      flex-direction: row-reverse;
    }
  }
</style>