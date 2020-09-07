import {mount} from '@vue/test-utils';
import Input from '../lib/input.vue'

describe('Switch', () => {
  it('could render', () => {
    const wrapper = mount(Input)
    expect(wrapper.classes()).toContain('halo-input')
  })
  it('could be textarea', async () => {
    const wrapper = mount(Input, {
      props: {
        type: 'textarea'
      }
    })
    expect(wrapper.find('textarea').exists()).toBe(true)
  })
  it('could be larger', async () => {
    const wrapper = mount(Input)
    expect(wrapper.classes()).not.toContain('halo-input-large')
    await wrapper.setProps({
      size: 'large'
    })
    expect(wrapper.find('input').classes()).toContain('halo-input-large')
  })
  it('could be smaller', async () => {
    const wrapper = mount(Input)
    expect(wrapper.classes()).not.toContain('halo-input-small')
    await wrapper.setProps({
      size: 'small'
    })
    expect(wrapper.find('input').classes()).toContain('halo-input-small')
  })
})