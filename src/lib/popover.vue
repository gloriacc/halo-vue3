<template>
  <button class="halo-switch"
          :class="{'halo-switch-checked': curValue, 'halo-switch-disabled': disabled, [`halo-switch-${size}`]: size}"
          :style="backgroundColor"
          @click="toggle">
    <span class="uncheckContent" v-if="uncheckContent && !curValue">{{uncheckContent}}</span>
    <span class="checkedContent" v-if="checkedContent && curValue">{{checkedContent}}</span>
    <span class="circle"></span>
  </button>
</template>
<script lang="ts">
  import {defineComponent, ref} from 'vue'
  const HaloSwitch = defineComponent({
    props: {
      value: {
        type: Boolean,
      },
      disabled: {
        type: Boolean,
        default: false
      },
      uncheckContent: String,
      checkedContent: String,
      uncheckColor: String,
      checkedColor: String,
      size: {
        type: String,
      }
    },
    setup (props, context) {
      const curValue = ref(props.value || false)
      const toggle = () => {
        if (props.disabled) return
        curValue.value = !curValue.value
        context.emit('update:value', !props.value)
      }
      const {uncheckColor, checkedColor} = props
      const backgroundColor = ref({
        '--color-background-uncheck': uncheckColor || '#e6e9fb',
        '--color-background-checked': checkedColor || '#4d80e6',
      })
      return {curValue, toggle, backgroundColor}
    }
  })
  export default HaloSwitch
</script>
<style lang="scss">
  $out-height: 22px;
  $in-height: $out-height - 4px;
  $out-height-large: 32px;
  $in-height-large: $out-height-large - 4px;
  $out-height-small: 16px;
  $in-height-small: $out-height-small - 4px;
  $background-color-disabled: #b1bdf4;
  .halo-switch {
    height: $out-height;
    min-width: $out-height * 2;
    border: none;
    background-color: var(--color-background-uncheck);
    border-radius: $out-height / 2;
    position: relative;
    cursor: pointer;

    > .circle {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $in-height;
      width: $in-height;
      background-color: #fff;
      border-radius: $in-height / 2;
      transition: all 350ms;
    }
    > .uncheckContent {
      padding: 0 10px 0 26px;
      font-size: 12px;
      line-height: $out-height;
      color: var(--color-background-checked);
      vertical-align: super;
    }
    > .checkedContent {
      padding: 0 26px 0 10px;
      font-size: 12px;
      line-height: $out-height;
      color: var(--color-background-uncheck);
      vertical-align: super;
    }
    &:focus {
      outline: none;
    }
    &:active {
      > .circle {
        width: $in-height + 4px;
      }
    }
    &-checked {
      background-color: var(--color-background-checked);
      > .circle {
        left: calc(100% - #{$in-height} - 2px);
      }
      &:active {
        > .circle {
          width: $in-height + 4px;
          margin-left: -4px;
        }
      }
    }
    &-disabled {
      cursor: not-allowed;
      background-color: var(--color-background-uncheck);
      > .circle {
        background-color: $background-color-disabled;
      }
    }
    &-large {
      height: $out-height-large;
      min-width: $out-height-large * 2;
      border-radius: $out-height-large / 2;
      > .circle {
        height: $in-height-large;
        width: $in-height-large;
        border-radius: $in-height-large / 2;
      }
      &:active {
        > .circle {
          width: $in-height-large;
        }
      }
      > .uncheckContent {
        padding: 0 10px 0 36px;
        font-size: 14px;
        line-height: $out-height-large;
      }
      > .checkedContent {
        padding: 0 36px 0 10px;
        font-size: 14px;
        line-height: $out-height-large;
      }
      &.halo-switch-checked {
        > .circle {
          left: calc(100% - #{$in-height-large} - 2px);
        }
        &:active {
          > .circle {
            width: $in-height-large;
          }
        }
      }
    }
    &-small {
      height: $out-height-small;
      min-width: $out-height-small * 2;
      border-radius: $out-height-small / 2;
      > .circle {
        height: $in-height-small;
        width: $in-height-small;
        border-radius: $in-height-small / 2;
      }
      &:active {
        > .circle {
          width: $in-height-small;
        }
      }
      > .uncheckContent {
        padding: 0 10px 0 20px;
        line-height: $out-height-small;
      }
      > .checkedContent {
        padding: 0 20px 0 10px;
        line-height: $out-height-small;
      }
      &.halo-switch-checked {
        > .circle {
          left: calc(100% - #{$in-height-small} - 2px);
        }
        &:active {
          > .circle {
            width: $in-height-small;
          }
        }
      }
    }
  }
</style>