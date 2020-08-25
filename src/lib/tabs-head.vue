<template>
  <div class="halo-tabs-head" :class="{[`halo-tabs-head-${tabPosition}`]: tabPosition}">
    <slot></slot>
<!--    <div class="split-line"></div>-->
    <div class="active-line" ref="line"></div>
  </div>
</template>
<script lang="ts">
import {defineComponent, inject} from 'vue';
  const HaloTabsHead = defineComponent({
    name: 'HaloTabsHead',
    setup (props) {
      const tabPosition = inject('tabPosition')
      return {tabPosition}
    },
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
        const width = selectedItem[0].offsetWidth
        const height = selectedItem[0].offsetHeight
        const top = selectedItem[0].offsetTop
        const left = selectedItem[0].offsetLeft
        if (this.$el.className.includes('halo-tabs-head-right')) {
          this.$refs.line.style.width = `2px`
          this.$refs.line.style.height = `${height}px`
          this.$refs.line.style.top = `${top}px`
          this.$refs.line.style.left = `-2px`
        } else if (this.$el.className.includes('halo-tabs-head-left')) {
          this.$refs.line.style.width = `2px`
          this.$refs.line.style.height = `${height}px`
          this.$refs.line.style.top = `${top}px`
          this.$refs.line.style.right = `-2px`
        } else {
          this.$refs.line.style.width = `${width}px`
          this.$refs.line.style.left = `${left}px`
          this.$refs.line.style.height = `2px`
          this.$refs.line.style.bottom = `-2px`
        }

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
    justify-content: flex-start;
    position: relative;
    border-bottom: 2px solid $border-color;
    margin-bottom: 1rem;
    > .active-line {
      position: absolute;
      background-color: $blue;
      transition: all 350ms;
    }
    &-left {
      flex-direction: column;
      border-bottom: none;
      border-right: 2px solid $border-color;
      margin-bottom: 0;
      margin-right: 1em;
      > .halo-tabs-item {
        justify-content: flex-end;
      }
      > .halo-tabs-item:first-child, &:last-child {
        margin: 0 1em;
      }
    }
    &-right {
      flex-direction: column;
      border-bottom: none;
      border-left: 2px solid $border-color;
      margin-bottom: 0;
      margin-left: 1em;
      > .halo-tabs-item {
        justify-content: flex-start;
      }
      > .halo-tabs-item:first-child, &:last-child {
        margin: 0 1em;
      }
    }
  }
</style>