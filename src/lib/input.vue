<template>
  <div class="halo-input">
    <Icon class="halo-input-prefix" v-if="prefixIcon" :name="prefixIcon"></Icon>
    <textarea v-if="type === 'textarea'"
              v-bind="$attrs"
              :value="value"
              @input="$emit('update:value', $event.target.value)"
    ></textarea>
    <input v-else
           v-bind="$attrs"
           :value="value"
           :type="type"
           :class="{[`halo-input-${size}`]: size}"
           @input="$emit('update:value', $event.target.value)"
           @change="$emit('change', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
    />
    <Icon class="halo-input-suffix" v-if="suffixIcon" :name="suffixIcon"></Icon>
<!--    <template v-if="error">-->
<!--      <Icon class="icon-error" name="tip"></Icon>-->
<!--      <span class="errorMessage">{{error}}</span>-->
<!--    </template>-->
  </div>
</template>
<script lang="ts">
  import Icon from './icon.vue'
  import {defineComponent} from 'vue'
  const HaloInput = defineComponent({
    name: 'HaloInput',
    components: {Icon},
    props: {
      value: {
        type: String,
      },
      prefixIcon: String,
      suffixIcon: String,
      type: {
        type: String,
        default: 'text'
      },
      size: {
        type: String,
      }
      /*error: {
        type: String,
      }*/
    },
  })
  export default HaloInput
</script>
<style lang="scss">
  $height-input: 32px;
  $height-input-large: 40px;
  $height-input-small: 24px;
  $border-color: #dcdcdc;
  $border-color-hover: #4d80e6;
  $font-size: 14px;
  $box-shadow-color: rgba(0,0,0,0.5);
  $red: #F1453D;
  .halo-input {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    position: relative;
    /*> :not(:last-child) {
      margin-right: .5em;
    }*/
    > input {
      height: $height-input;
      border: 1px solid $border-color;
      border-radius: 4px;
      padding: 0 8px;
      font-size: inherit;
      &::placeholder {
        color: $border-color;
        font-size: $font-size;
        font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica,
        "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB",
        "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN",
        "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti",
        SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
      }
      &::-webkit-input-placeholder {
        color: $border-color;
        font-size: $font-size;
      }
      &:-moz-placeholder {
        color: $border-color;
        font-size: $font-size;
      }
      &::-moz-placeholder {
        color: $border-color;
        font-size: $font-size;
      }
      &:-ms-input-placeholder {
        color: $border-color;
        font-size: $font-size;
      }
      &:hover {
        border-color: $border-color-hover;
      }
      &:focus {
        border-color: $border-color-hover;
        box-shadow: 0 0 .4em 0 $border-color-hover;
        transition: box-shadow 0.5s;
        outline: none;
      }
      &[disabled], &[readonly] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
        background: none;
      }
      &:not(:first-child) {
        padding-left: 30px;
      }
      &:not(:last-child) {
        padding-right: 36px;
      }
    }
    > textarea {
      border: 1px solid $border-color;
      border-radius: 4px;
      padding: 8px;
      font-size: inherit;
      font-family: inherit;
      &::placeholder {
        color: $border-color;
        font-size: $font-size;
      }
      &::-webkit-input-placeholder {
        color: $border-color;
        font-size: $font-size;
      }
      &:-moz-placeholder {
        color: $border-color;
        font-size: $font-size;
      }
      &::-moz-placeholder {
        color: $border-color;
        font-size: $font-size;
      }
      &:-ms-input-placeholder {
        color: $border-color;
        font-size: $font-size;
      }
      &:hover {
        border-color: $border-color-hover;
      }
      &:focus {
        border-color: $border-color-hover;
        box-shadow: 0 0 .4em 0 $border-color-hover;
        transition: box-shadow 0.5s;
        outline: none;
      }
      &[disabled], &[readonly] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
        background: none;
      }
      &:not(:first-child) {
        padding-left: 30px;
      }
      &:not(:last-child) {
        padding-right: 36px;
      }
    }
    > .halo-input-large {
      height: $height-input-large;
    }
    > .halo-input-small {
      height: $height-input-small;
    }
    > .halo-input-prefix {
      position: absolute;
      left: 10px;
      fill: currentColor;
    }
    > .halo-input-suffix {
      position: absolute;
      right: 10px;
      fill: $border-color;
    }
   /* &.error {
      > input {
        border-color: $red;
      }
    }
    .icon-error {
      fill: $red;
    }
    .errorMessage {
      color: $red;
    }*/
  }
</style>