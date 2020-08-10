<template>
  <div class="halo-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'HaloButtonGroup',
    mounted() {
      for (let node of this.$el.children) {
        if (node.nodeName.toLowerCase() !== 'button') {
          console.warn('h-button-group 的子元素应该全是 h-button');
        }
      }
    }
  }
</script>
<style lang="scss">
  $border-radius: 4px;
  $round-border-radius: 32px;
  $circle-border-radius: 50%;
  .halo-button-group {
    display: inline-block;
    vertical-align: middle;
    > .halo-button {
      border-radius: 0;

      &:first-child {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;

      }
      &:last-child {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
    @each $shape, $border in (circle, $circle-border-radius),
      (round, $round-border-radius) {
      > .halo-button-#{$shape} {
        &:first-child {
          border-top-left-radius: $border;
          border-bottom-left-radius: $border;
        }
        &:last-child {
          border-top-right-radius: $border;
          border-bottom-right-radius: $border;
        }
      }
    }

  }
</style>