<template>
  <button class="halo-button" :class="{[`halo-button-icon-${iconPosition}`]: true, [`halo-button-${type}`]: true, [`halo-button-${shape}`]: !!shape, ['halo-button-ghost']: ghost}" @click="$emit('click')">
    <h-icon class="icon" v-if="icon && !loading" :name="icon"></h-icon>
    <h-icon class="icon loading" v-if="loading" name="loading"></h-icon>
    <div class="content" v-if="(!icon && !loading) || (shape !== 'circle')">
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
      // circle: {
      //   type: Boolean,
      //   default: false
      // },
      shape: {
        type: String,
        validate (value: string) {
          return value === 'round' || value === 'circle';
        }
      },
      ghost: {
        type: Boolean,
        default: false
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
    },
    // computed: {
    //   contentStyle () {
    //     return ()
    //   }
    // }
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
      /*margin: 0 .2em;*/
    }
    > .icon {
      order: 1;
      /*margin-right: .2em;*/
      fill: currentColor;
      margin: 0 .2em;
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
        /*margin-right: 0;*/
        /*margin-left: .2em;*/
      }
    }
    &-default {
      background-color: $default-background-color;
      border-color: $default-border-color;
      color: $default-color;
      &:hover {
        @include halo-button-default-color($default-color-hover);
      }
      &:focus {
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
      &:focus {
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
        &:focus {
          @include halo-button-type-color(nth($background-colors-hover, $i));
        }
        &:active {
          @include halo-button-type-color(nth($background-colors-active, $i));
        }
      }
      &-#{nth($button-types, $i)}.halo-button-ghost {
        color: nth($background-colors, $i);
        &:hover {
          color: nth($background-colors-hover, $i);
        }
        &:focus {
          color: nth($background-colors-hover, $i);
        }
        &:active {
          color: nth($background-colors-active, $i);
        }
      }
    }
    &-round {
      border-radius: 32px;
    }
    &-circle {
      border-radius: 50%;
      min-width: 32px;
      padding: 0;
      text-align: center;
    }
    &-ghost {
      background: none;
      &:hover {
        background: none;
      }
      &:focus {
        background: none;
      }
      &:active {
        background: none;
      }
    }
  }
</style>