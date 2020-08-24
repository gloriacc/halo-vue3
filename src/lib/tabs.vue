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
      // context.emit('update:selected-tab-name', 'c')
      watch(tabName, (newValue, oldValue) => {
        context.emit('update:selected-tab-name', tabName.value)
      })
      provide('tabName', tabName)

    }
  })
  export default HaloTabs
</script>
<style lang="scss">

</style>