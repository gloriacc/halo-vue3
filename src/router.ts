import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import DocDemo from './docs/DocDemo.vue';
import SwitchDemo from './docs/SwitchDemo.vue';
import ButtonDemo from './docs/ButtonDemo.vue';
import DialogDemo from './docs/DialogDemo.vue';
import TabsDemo from './docs/TabsDemo.vue';
import InputDemo from './docs/InputDemo.vue';
import LayoutDemo from './docs/LayoutDemo.vue';
import IconDemo from './docs/IconDemo.vue';

const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc, children: [
        {path: '', component: DocDemo},
        {path: 'switch', component: SwitchDemo, meta: { title: 'Switch' }},
        {path: 'button', component: ButtonDemo, meta: { title: 'Button' }},
        {path: 'dialog', component: DialogDemo, meta: { title: 'Dialog' }},
        {path: 'tabs', component: TabsDemo, meta: { title: 'Tabs' }},
        {path: 'input', component: InputDemo, meta: { title: 'Input' }},
        {path: 'layout', component: LayoutDemo, meta: { title: 'Layout' }},
        {path: 'icon', component: IconDemo, meta: { title: 'Icon' }},
      ]
    }
  ]
})