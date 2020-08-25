<template>
  <div class="halo-tabs-item" :class="{['halo-tabs-item-active']: name === tabName}" @click="onClick" :name="name">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import {defineComponent, inject} from 'vue';
  const HaloTabsItem = defineComponent({
    name: 'HaloTabsItem',
    props: {
      name: String,
      label: String,
      disabled: Boolean
    },
    setup (props) {
      const tabName = inject('tabName')
      const onClick = () => {
        tabName.value = props.name
      }
      return {tabName, onClick}
    },

  })
  export default HaloTabsItem
</script>
<style lang="scss">
  $blue: #4d80e6;
  $disabled-text-color: grey;
  .halo-tabs-item {
    flex-shrink: 0;
    margin: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &-active {
      color: $blue;
      font-weight: bold;
    }
    &.disabled {
      color: $disabled-text-color;
      cursor: not-allowed;
    }
  }
</style>