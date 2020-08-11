<template>
  <button class="halo-switch" :class="{'halo-switch-checked': curValue, 'halo-switch-disabled': disabled}" @click="toggle">
    <span class="uncheckContent" v-if="uncheckContent && !value">{{uncheckContent}}</span>
    <span class="checkedContent" v-if="checkedContent && value">{{checkedContent}}</span>
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
      checkedContent: String
    },
    setup (props, context) {
      console.log(props.value);
      const curValue = ref(props.value || false)
      const toggle = () => {

        if (props.disabled) return
        curValue.value = !curValue.value
        context.emit('update:value', !props.value)
      }
      return {curValue, toggle}
    }
  })
  export default HaloSwitch
</script>
<style lang="scss">
  $out-height: 22px;
  $in-height: $out-height - 4px;
  $background-color-uncheck: #eceff1;
  $background-color-checked: #039be5;
  $background-color-disabled: #b0bec5;
  .halo-switch {
    height: $out-height;
    min-width: $out-height * 2;
    border: none;
    background-color: $background-color-uncheck;
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
      color: #757575;
    }
    > .checkedContent {
      padding: 0 26px 0 10px;
      font-size: 12px;
      line-height: $out-height;
      color: #fff;
    }
    &:focus {
      outline: none;
    }
    &:active {
      > .circle { width: $in-height + 4px; }
    }
    &-checked {
      background-color: $background-color-checked;
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
      background-color: $background-color-uncheck;
      > .circle {
        background-color: $background-color-disabled;
      }
    }
  }
</style>