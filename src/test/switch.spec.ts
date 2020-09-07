import {mount} from '@vue/test-utils';
import Switch from '../lib/switch.vue'

describe('Switch', () => {
  it('could render', () => {
    const wrapper = mount(Switch)
    expect(wrapper.classes()).not.toContain('halo-switch-checked')
  })
  it('could set value', async () => {
    const wrapper = mount(Switch, {
      props: {
        value: true
      }
    })
    expect(wrapper.classes()).toContain('halo-switch-checked')
  })
  it('could be clicked', async () => {
    const wrapper = mount(Switch)
    await wrapper.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.classes()).toContain('halo-switch-checked')
    await wrapper.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.classes()).not.toContain('halo-switch-checked')
  })
  it('could set uncheck color', () => {
    const expectedColor = '#d2691e'
    const wrapper = mount(Switch, {
      props: {
        uncheckColor: expectedColor
      }
    })
    expect(wrapper.attributes().style).toMatch(expectedColor)
  })
  it('could set checked color', () => {
    const expectedColor = '#2d96e1'
    const wrapper = mount(Switch, {
      props: {
        checkedColor: expectedColor
      }
    })
    expect(wrapper.attributes().style).toMatch(expectedColor)
  })
  it('could set uncheck content', () => {
    const expectedContent = 'close'
    const wrapper = mount(Switch, {
      props: {
        uncheckContent: expectedContent,
        value: false
      }
    })
    expect(wrapper.find('.uncheckContent').text()).toEqual(expectedContent)
  })
  it('could set checked content', () => {
    const expectedContent = 'open'
    const wrapper = mount(Switch, {
      props: {
        checkedContent: expectedContent,
        value: true
      }
    })
    expect(wrapper.find('.checkedContent').text()).toEqual(expectedContent)
  })
  it('could be disabled', async () => {
    const wrapper = mount(Switch)
    expect(wrapper.classes()).not.toContain('halo-switch-disabled')
    await wrapper.setProps({
      disabled: true
    })
    expect(wrapper.classes()).toContain('halo-switch-disabled')
  })

  it('could be larger', async () => {
    const wrapper = mount(Switch)
    expect(wrapper.classes()).not.toContain('halo-switch-large')
    await wrapper.setProps({
      size: 'large'
    })
    expect(wrapper.classes()).toContain('halo-switch-large')
  })
  it('could be smaller', async () => {
    const wrapper = mount(Switch)
    expect(wrapper.classes()).not.toContain('halo-switch-small')
    await wrapper.setProps({
      size: 'small'
    })
    expect(wrapper.classes()).toContain('halo-switch-small')
  })
})