import {mount} from '@vue/test-utils';
import Dialog from '../lib/dialog.vue'

describe('Dialog', () => {
  it('可以渲染', () => {
    const wrapper = mount(Dialog)
    expect(wrapper.exists()).toBe(true)
  })
  it('接受传入 visible ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const wrapper = mount(Dialog, {
      props: {
        visible: true
      },
      attachTo: div
    })
    expect(document.body.contains(wrapper.vm.$el)).toBe(true)
    wrapper.unmount()
    div.remove()
  })
  it('接受传入 title ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const title = '接受传入 title'
    const wrapper = mount(Dialog, {
      props: {
        visible: true,
        title: title
      },
      attachTo: div
    })
    const headerElement = document.body.querySelector('header')
    // @ts-ignore
    expect(headerElement.textContent).toEqual(title)
    wrapper.unmount()
    div.remove()
  })
  it('接受传入 closeOnClickOverlay, 点击遮罩层可以关闭 Dialog', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const wrapper = mount(Dialog, {
      props: {
        visible: true,
        closeOnClickOverlay: true
      },
      attachTo: div
    })
    const overlay = document.body.querySelector('.halo-dialog-overlay')
    // @ts-ignore
    overlay.click()
    expect(wrapper.emitted()).toHaveProperty('update:visible')
    expect(wrapper.emitted()['update:visible'][0]).toEqual([false])
    wrapper.unmount()
    div.remove()
  })
  it('点击右上角 X 按钮可以关闭 Dialog', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const wrapper = mount(Dialog, {
      props: {
        visible: true,
      },
      attachTo: div
    })
    const closeButton = document.body.querySelector('.halo-dialog-close')
    // @ts-ignore
    closeButton.click()
    expect(wrapper.emitted()).toHaveProperty('update:visible')
    expect(wrapper.emitted()['update:visible'][0]).toEqual([false])
    wrapper.unmount()
    div.remove()
  })
  it('接受传入 ok 方法， ok 方法被正常调用', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const callback = jest.fn()
    const wrapper = mount(Dialog, {
      props: {
        visible: true,
        ok: callback
      },
      attachTo: div
    })
    const okButton = document.body.querySelector('.halo-dialog-ok')
    // @ts-ignore
    okButton.click()
    expect(callback).toHaveBeenCalled()
    expect(wrapper.emitted()).toHaveProperty('update:visible')
    expect(wrapper.emitted()['update:visible'][0]).toEqual([false])
    wrapper.unmount()
    div.remove()
  })
  it('接受传入 cancel 方法， cancel 方法被正常调用', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const callback = jest.fn()
    const wrapper = mount(Dialog, {
      props: {
        visible: true,
        cancel: callback
      },
      attachTo: div
    })
    const cancelButton = document.body.querySelector('.halo-dialog-cancel')
    // @ts-ignore
    cancelButton.click()
    expect(callback).toHaveBeenCalled()
    expect(wrapper.emitted()).toHaveProperty('update:visible')
    expect(wrapper.emitted()['update:visible'][0]).toEqual([false])
    wrapper.unmount()
    div.remove()
  })
  it('接受 header 插槽，替换 title', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const headerSlot = '<strong>标题</strong>'
    const wrapper = mount(Dialog, {
      props: {
        visible: true,
        title: '替换title'
      },
      slots: {
        header: headerSlot
      },
      attachTo: div
    })
    const headerElement = document.body.querySelector('header')
    // @ts-ignore
    expect(headerElement.innerHTML).toContain(headerSlot)
    wrapper.unmount()
    div.remove()
  })
  it('接受 footer 插槽，替换默认设置的按钮', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const footerSlot = '<button>确认</button>'
    const wrapper = mount(Dialog, {
      props: {
        visible: true,
      },
      slots: {
        footer: footerSlot
      },
      attachTo: div
    })
    const footerElement = document.body.querySelector('footer')
    // @ts-ignore
    expect(footerElement.innerHTML).toContain(footerSlot)
    wrapper.unmount()
    div.remove()
  })
})