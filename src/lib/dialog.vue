<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="halo-dialog-overlay" @click="onClickOverlay"></div>
      <div class="halo-dialog-wrapper">
        <div class="halo-dialog">
          <header>
            <slot name="header"><span>{{title}}</span></slot>
            <span class="halo-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot/>
          </main>
          <footer>
            <slot name="footer">
              <Button color="none" @click="cancel" class="halo-dialog-cancel">取消</Button>
              <Button @click="ok" class="halo-dialog-ok">确定</Button>
            </slot>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
  import Button from './button.vue';
  interface DialogProps {
    title?: string,
    visible?: boolean,
    closeOnClickOverlay?: boolean,
    ok?: Function,
    cancel?: Function
  }
  const HaloDialog = defineComponent({
    name: 'HaloDialog',
    components: {Button},
    props: {
      title: {
        type: String,
        default: '提示'
      },
      visible: {
        type: Boolean,
        default: false
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: true
      },
      ok: Function,
      cancel: Function
    },
    setup (props: DialogProps, context) {
      const close = () => {
        context.emit('update:visible', false)
      }
      const onClickOverlay = () => {
        if (props.closeOnClickOverlay) {
          close()
        }
      }
      const ok = () => {
        if (props.ok?.() !== false) {
          close()
        }
      }
      const cancel = () => {
        props.cancel?.()
        close()
      }
      return {close, onClickOverlay, ok, cancel}
    }
  })
  export default HaloDialog
</script>
<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.halo-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  >header {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  >main {
    padding: 12px 16px;
  }
  >footer {
    padding: 12px 16px;
    text-align: right;
    > button {
      margin-left: .5em;
    }
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>