<template>
  <div class="halo-tabs"
       :class="{[`halo-tabs-${position}`]: position,
              [`halo-tabs-${type}`]: type}">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import {defineComponent, provide, ref, watch} from 'vue';
  const HaloTabs = defineComponent({
    name: 'HaloTabs',
    props: {
      selectedTabName: String,
      position: {
        type: String,
        validator (value: string) {
          return ['right', 'left'].includes(value)
        }
      },
      type: String
    },
    setup (props, context) {
      const {selectedTabName, position, type} = props
      const tabName = ref(selectedTabName)
      watch(tabName, (newValue, oldValue) => {
        context.emit('update:selected-tab-name', tabName.value)
      })
      provide('tabName', tabName)
      const tabType = ref(type)
      provide('tabType', tabType)
      const tabPosition = ref(position)
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
  $border-color: #dcdcdc;
  .halo-tabs {
    &-left {
      display: flex;
      flex-direction: row;
    }
    &-right {
      display: flex;
      flex-direction: row-reverse;
    }
    &-card {
      border: 1px solid $border-color;
    }
  }
</style>