import {mount} from '@vue/test-utils';
import {h} from 'vue'
import Button from '../lib/button.vue'
import ButtonGroup from '../lib/button-group.vue'

describe('Button Group', () => {
  it('could render', () => {
    const wrapper = mount(ButtonGroup)
    expect(wrapper.html()).not.toBeUndefined()
  })
  it('should contain button components', () => {
    const wrapper = mount(ButtonGroup, {
      slots: {
        default: h(Button)
      }
    })
    expect(wrapper.find('.halo-button').exists()).toBe(true)
  })
})