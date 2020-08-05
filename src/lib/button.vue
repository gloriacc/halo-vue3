<template>
  <button class="halo-button" :class="{[`halo-button-icon-${iconPosition}`]: true, [`halo-button-${type}`]: true}" @click="$emit('click')">
    <h-icon class="icon" v-if="icon && !loading" :name="icon"></h-icon>
    <h-icon class="icon loading" v-if="loading" name="loading"></h-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script lang="ts">
  import {defineComponent} from 'vue'
  import Icon from './icon.vue'
  const HaloButton = defineComponent({
    name: 'HaloButton',
    components: {'h-icon': Icon},
    props: {
      type: {
        type: String,
        default: 'default',
        validate (value: string) {
          return ['default', 'primary', 'success', 'warning', 'danger', 'link', 'text'].includes(value);
        }
      },
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validate (value: string) {
          return value === 'left' || value === 'right';
        }
      }
    }
  })
  export default HaloButton
</script>
<style lang="scss" scoped>
  @import './src/index';
  @keyframes spin {
    0% { transform: rotate(0deg);}
    100% { transform: rotate(360deg);}
  }
  @mixin halo-button-default-color($color) {
    color: $color;
    border-color: $color;
  }
  @mixin halo-button-type-color($color) {
    background-color: $color;
    border-color: $color;
  }
  .halo-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:focus {
      outline: none;
    }
    > .content {
      order: 2;
    }
    > .icon {
      order: 1;
      margin-right: .1em;
    }
    > .icon.loading {
      animation: spin 2s infinite linear;
    }
    &.halo-button-icon-right {
      > .content {
        order: 1;
      }
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .1em;
      }
    }
    &-default {
      background-color: $default-background-color;
      border-color: $default-border-color;
      color: $default-color;
      &:hover {
        @include halo-button-default-color($default-color-hover);
      }
      &:active {
        @include halo-button-default-color($default-color-active);
      }
    }
    &-link {
      background: none;
      border: none;
      color: $link-color;
      &:hover {
        color: $link-color-hover;
      }
      &:active {
        color: $link-color-active;
      }
    }
    &-text {
      background: none;
      border: none;
      color: $text-color;
    }
    @for $i from 1 through length($button-types) {
      &-#{nth($button-types, $i)} {
        @include halo-button-type-color(nth($background-colors, $i));
        color: white;
        &:hover {
          @include halo-button-type-color(nth($background-colors-hover, $i));
        }
        &:active {
          @include halo-button-type-color(nth($background-colors-active, $i));
        }
      }
    }
  }
</style>