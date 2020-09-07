import {mount} from '@vue/test-utils';
import Button from '../lib/button.vue'

describe('Button.vue', () => {
  it('could render', () => {
    const wrapper = mount(Button)
    expect(wrapper.html()).not.toBeUndefined()
  })
  it('could be a link', async () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).not.toContain('halo-button-link')
    await wrapper.setProps({
      kind: 'link'
    })
    expect(wrapper.classes()).toContain('halo-button-link')
  })
  it('could be a text', async () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).not.toContain('halo-button-text')
    await wrapper.setProps({
      kind: 'text'
    })
    expect(wrapper.classes()).toContain('halo-button-text')
  })
  it('could set custom color', () => {
    const expectedColor = '#008000'
    const wrapper = mount(Button, {
      props: {
        color: expectedColor
      }
    })
    expect(wrapper.attributes().style).toMatch(expectedColor)
  })
  it('could be disabled', async () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).not.toContain('halo-button-disabled')
    await wrapper.setProps({
      disabled: true
    })
    expect(wrapper.classes()).toContain('halo-button-disabled')
  })
  it('could be round-shape', async () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).not.toContain('halo-button-round')
    await wrapper.setProps({
      shape: 'round'
    })
    expect(wrapper.classes()).toContain('halo-button-round')
  })
  it('could be circle-shape', async () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).not.toContain('halo-button-circle')
    await wrapper.setProps({
      shape: 'circle'
    })
    expect(wrapper.classes()).toContain('halo-button-circle')
  })
  it('could be ghost style', async () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).not.toContain('halo-button-ghost')
    await wrapper.setProps({
      ghost: true
    })
    expect(wrapper.classes()).toContain('halo-button-ghost')
  })
  it('could be larger', async () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).not.toContain('halo-button-large')
    await wrapper.setProps({
      size: 'large'
    })
    expect(wrapper.classes()).toContain('halo-button-large')
  })
  it('could be smaller', async () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).not.toContain('halo-button-small')
    await wrapper.setProps({
      size: 'small'
    })
    expect(wrapper.classes()).toContain('halo-button-small')
  })
})