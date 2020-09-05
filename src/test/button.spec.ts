import {mount, VueWrapper} from '@vue/test-utils';
import Button from '../lib/button.vue'

describe('Button.vue', () => {
  it('render a button', () => {
    const wrapper: VueWrapper<any> = mount(Button)
    expect(1).toBe(2)
  })
})