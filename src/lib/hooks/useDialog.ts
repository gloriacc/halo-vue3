import Dialog from '../dialog.vue'
import {createApp, h, RendererElement, App} from 'vue'
interface DialogOptions {
  title?: string,
  header?: RendererElement | string,
  content: RendererElement | string,
  footer?: RendererElement,
  ok?: Function,
  cancel?: Function,
  closeOnClickOverlay?: Boolean
}

interface DialogChildren {
  header?: RendererElement,
  default: RendererElement,
  footer?: RendererElement,
}

const useDialog = () => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  let dialog: App<Element>
  const showDialog = (options: DialogOptions) => {
    const {title, header, content, footer, ok, cancel, closeOnClickOverlay} = options
    const children: DialogChildren = {
      default: () => content
    }
    if (header) {
      children.header = () => header
    }
    if (footer) {
      children.footer = () => footer
    }
    dialog = createApp({
      render() {
        // @ts-ignore
        return h(Dialog, {
          visible: true,
          'onUpdate:visible': (newVisible: any) => {
            if (newVisible === false) {
              dialog.unmount(div)
              div.remove()
            }
          },
          title,
          ok,
          cancel,
          closeOnClickOverlay,
        }, {...children})
      }
    })
    dialog.mount(div)
  }
  const hideDialog = () => {
    dialog.unmount(div)
    div.remove()
  }
  return {showDialog, hideDialog}
}
export {useDialog};