<template>
  <button class="halo-button"
          :class="{
            [`halo-button-icon-${iconPosition}`]: true,
            [`halo-button-${kind}`]: true,
            [`halo-button-${shape}`]: !!shape,
            ['halo-button-ghost']: ghost,
            ['halo-button-disabled']: disabled,
            ['halo-button-loading']: loading,
          }"
          :style="colorStyle"
  >
    <h-icon class="icon" v-if="icon && !loading" :name="icon"></h-icon>
    <h-icon class="icon loading" v-if="loading" name="loading"></h-icon>
    <div class="content" v-if="(!icon && !loading) || (shape !== 'circle')">
      <slot></slot>
    </div>
  </button>
</template>
<script lang="ts">
  import {defineComponent, ref} from 'vue'
  import Icon from './icon.vue'
  const HaloButton = defineComponent({
    name: 'HaloButton',
    components: {'h-icon': Icon},
    props: {
      kind: {
        type: String,
        validate (value: string) {
          return ['link', 'text'].includes(value);
        }
      },
      color: {
        type: String,
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
    setup (props) {
      const {color, kind} = props
      let colorStyle
      if (color === 'none') {
        colorStyle = ref({
          '--color-background': '#fff',
          '--color-border': '#9a9a9a',
          '--color-font': '#9a9a9a',
        })
      } else {
        colorStyle = ref({
          '--color-background': color || (kind === 'text' ? '#9a9a9a' : '#4d80e6'),
          '--color-border': color || (kind === 'text' ? '#9a9a9a' : '#4d80e6'),
          '--color-font': kind ? (kind === 'text' ? '#9a9a9a' : '#4d80e6') : '#fff',
        })
      }
      return {colorStyle}
    },
  })
  export default HaloButton
</script>
<style lang="scss">
  $button-height: 32px;
  $font-size: 14px;

  $border-radius: 4px;
  $round-border-radius: 32px;
  $circle-border-radius: 50%;

  $color-border-disabled: #e0e0e0;
  $color-background-disabled: #eceff1;
  $color-font-disabled: #b0bec5;

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
    border: 1px solid var(--color-border);
    color: var(--color-font);
    background-color: var(--color-background);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    cursor: pointer;
    position: relative;
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
    &:focus {
      outline: none;
    }
    &:after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      transition: all 0.2s;
      border-radius: $border-radius;
      margin-left: -1px;
      margin-top: -1px;
    }
    &:hover:after,
    &:focus:after {
      background-color: rgba(#fff, 10%);
    }
    &:active:after {
      background-color: rgba(#000, 10%);
    }
    &-link {
      background: none;
      border: none;
      color: var(--color-font);
      &:hover:after, &:focus:after, &:active:after {
        background: none;
      }
      &:hover, &:active {
        text-decoration: underline;
      }
    }
    &-text {
      background: none;
      border: none;
      color: var(--color-font);
      &:hover:after, &:focus:after, &:active:after {
        background: none;
      }
    }
    &-round {
      &, &:after {
        border-radius: $round-border-radius;
      }
    }
    &-circle {
      min-width: 32px;
      padding: 0;
      text-align: center;
      &, &:after {
        border-radius: $circle-border-radius;
      }
    }
    &-ghost {
      color: var(--color-border);
      &, &:hover, &:focus, &:active {
        background: none;
      }
    }
    &-disabled {
      &, &:hover, &:focus, &:active {
        cursor: not-allowed;
        border-color: $color-border-disabled;
        background-color: $color-background-disabled;
        color: $color-font-disabled;
      }
      &.halo-button-link, &.halo-button-text {
        &, &:hover, &:focus, &:active {
          border: none;
          background: none;
        }
      }
      &.halo-button-ghost {
        &, &:hover, &:focus, &:active {
          background: none;
        }
      }
    }
  }
</style>