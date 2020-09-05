import {mount} from '@vue/test-utils';
import Button from '../lib/button.vue'

describe('Button.vue', () => {
  it('could render', () => {
    // @ts-ignore
    const wrapper = mount(Button)
    expect(wrapper.html()).not.toBeUndefined()
  })
  it('could set custom color', () => {
    const expectedColor = '#008000'
    // @ts-ignore
    const wrapper = mount(Button, {
      props: {
        color: expectedColor
      }
    })
    expect(wrapper.attributes().style).toMatch(expectedColor)
  })
  it('could be disabled', async () => {
    // @ts-ignore
    const wrapper = mount(Button)
    expect(wrapper.classes()).not.toContain('halo-button-disabled')
    await wrapper.setProps({
      disabled: true
    })
    expect(wrapper.classes()).toContain('halo-button-disabled')
  })
  it('could be round-shape', async () => {
    // @ts-ignore
    const wrapper = mount(Button)
    expect(wrapper.classes()).not.toContain('halo-button-round')
    await wrapper.setProps({
      shape: 'round'
    })
    expect(wrapper.classes()).toContain('halo-button-round')
  })
  it('could be circle-shape', async () => {
    // @ts-ignore
    const wrapper = mount(Button)
    expect(wrapper.classes()).not.toContain('halo-button-circle')
    await wrapper.setProps({
      shape: 'circle'
    })
    expect(wrapper.classes()).toContain('halo-button-circle')
  })
})