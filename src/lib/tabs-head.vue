<template>
  <div class="halo-tabs-head">
    <slot></slot>
    <div class="split-line"></div>
    <div class="active-line" ref="line"></div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
  const HaloTabsHead = defineComponent({
    name: 'HaloTabsHead',
    mounted() {
      this.onItemActive()
    },
    updated() {
      this.onItemActive()
    },
    methods: {
      onItemActive () {
        const items = Array.from(this.$el.children)
        const selectedItem = items.filter(item => item.className.includes('halo-tabs-item-active'))
        let {width, left} = selectedItem[0].getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left - 234}px`
      }
    }
  })
  export default HaloTabsHead
</script>
<style lang="scss">
  $tab-height: 40px;
  $blue: #4d80e6;
  $border-color: #dcdcdc;
  .halo-tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    position: relative;
    > .split-line {
      position: absolute;
      bottom: 0;
      height: 2px;
      background-color: $border-color;
      width: 100%;
    }
    > .active-line {
      position: absolute;
      bottom: 0;
      height: 2px;
      background-color: $blue;
      transition: all 350ms;
    }
  }
</style>