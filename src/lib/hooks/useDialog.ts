import Dialog from '../dialog.vue'
import {createApp, h} from 'vue'
interface DialogOptions {
  title?: string,
  header?: Function,
  content?: Function,
  footer?: Function,
  ok?: Function,
  cancel?: Function,
  // default: Function
}

const useDialog = () => {
  const showDialog = (options: DialogOptions) => {
    const {title, header, content, footer, ok, cancel} = options
    const div = document.createElement('div')
    document.body.appendChild(div)
    const app = createApp({
      render() {
        return h(Dialog, {
          visible: true,
          'onUpdate:visible': (newVisible: any) => {
            if (newVisible === false) {
              app.unmount(div)
              div.remove()
            }
          },
          title,
          ok,
          cancel,
        }, {
          default: content,
          header,
          footer
        })
      }
    })
    app.mount(div)
  }
  return {showDialog}
}
export {useDialog};