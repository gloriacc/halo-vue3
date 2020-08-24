<template>
  <div class="halo-tabs-item" :class="{['halo-tabs-item-active']: name === tabName}" @click="onClick">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import {defineComponent, inject} from 'vue';
  const HaloTabsItem = defineComponent({
    name: 'HaloTabsItem',
    props: {
      name: String,
      disabled: Boolean
    },
    setup (props, context) {
      const tabName = inject('tabName')
      const onClick = () => {
        tabName.value = props.name

      }
      return {tabName, onClick}
    }
  })
  export default HaloTabsItem
</script>
<style lang="scss">
  .halo-tabs-item {
    &-active {
      color: red;
    }
  }
</style>