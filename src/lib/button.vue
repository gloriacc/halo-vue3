<template>
  <button class="halo-button"
          :class="{
            [`halo-button-icon-${iconPosition}`]: true,
            [`halo-button-${kind}`]: true,
            [`halo-button-${shape}`]: !!shape,
            ['halo-button-ghost']: ghost,
            ['halo-button-disabled']: disabled,
            ['halo-button-loading']: loading,
          }">
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
      kind: {
        type: String,
        default: 'default',
        validate (value: string) {
          return ['default', 'primary', 'success', 'warning', 'danger', 'link', 'text'].includes(value);
        }
      },
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
      iconPosition: {
        type: String,
        default: 'left',
        validate (value: string) {
          return value === 'left' || value === 'right';
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
    },
  })
  export default HaloButton
</script>
<style lang="scss">
  $button-height: 32px;
  $font-size: 14px;
  $button-bg: white;
  $button-active-bg: #eee;
  $border-radius: 4px;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;

  $round-border-radius: 32px;
  $circle-border-radius: 50%;

  $default-background-color: #fff;
  $default-border-color: #e0e0e0;
  $default-color: #757575;
  $default-color-hover: #29b6f6;
  $default-color-active: #0288d1;
  $default-background-color-disabled: #eceff1;
  $default-color-disabled: #b0bec5;

  $primary-background-color: #039be5;
  $primary-background-color-hover: $default-color-hover;
  $primary-background-color-active: $default-color-active;

  $success-background-color: #7cb342;
  $success-background-color-hover: #9ccc65;
  $success-background-color-active: #689f38;

  $warning-background-color: #ffb300;
  $warning-background-color-hover: #ffa726;
  $warning-background-color-active: #f57c00;

  $danger-background-color: #e53935;
  $danger-background-color-hover: #ef5350;
  $danger-background-color-active: #d32f2f;

  $link-color: $primary-background-color;
  $link-color-hover: $primary-background-color-hover;
  $link-color-active: $primary-background-color-active;

  $text-color: $default-color;

  $button-kinds: primary, success, warning, danger;

  $background-colors: $primary-background-color, $success-background-color, $warning-background-color, $danger-background-color;
  $background-colors-hover: $primary-background-color-hover, $success-background-color-hover, $warning-background-color-hover, $danger-background-color-hover;
  $background-colors-active: $primary-background-color-active, $success-background-color-active, $warning-background-color-active, $danger-background-color-active;
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
    cursor: pointer;
    &:focus {
      outline: none;
    }
    > .content {
      order: 2;
    }
    > .icon {
      order: 1;
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
    &-default.halo-button-loading {
      &, &:hover, &:focus, &:active {
        @include halo-button-default-color($default-color-hover);
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
    &-link.halo-button-loading {
      &, &:hover, &:focus, &:active {
        color: $link-color-hover;
      }
    }
    &-text {
      background: none;
      border: none;
      color: $text-color;
    }
    @for $i from 1 through length($button-kinds) {
      &-#{nth($button-kinds, $i)} {
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
      &-#{nth($button-kinds, $i)}.halo-button-ghost {
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

      &-#{nth($button-kinds, $i)}.halo-button-loading {
        &, &:hover, &:focus, &:active {
          @include halo-button-type-color(nth($background-colors-hover, $i));
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
    &-disabled {
      &, &:hover, &:focus, &:active {
        cursor: not-allowed;
        border-color: $default-border-color !important;
        background-color: $default-background-color-disabled !important;
        color: $default-color-disabled !important;
      }
    }
    &-disabled.halo-button-ghost {
      &, &:hover, &:focus, &:active {
        background: none;
      }
    }
    &-disabled.halo-button-link, &-disabled.halo-button-text {
      &, &:hover, &:focus, &:active {
        border: none;
        background: none;
      }
    }
  }
</style>