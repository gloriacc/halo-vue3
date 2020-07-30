import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import DocDemo from './demos/DocDemo.vue';
import SwitchDemo from './demos/SwitchDemo.vue';
import ButtonDemo from './demos/ButtonDemo.vue';
import DialogDemo from './demos/DialogDemo.vue';
import TabsDemo from './demos/TabsDemo.vue';
import InputDemo from './demos/InputDemo.vue';
import LayoutDemo from './demos/LayoutDemo.vue';
import IconDemo from './demos/IconDemo.vue';

const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc, children: [
        {path: '', component: DocDemo},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'input', component: InputDemo},
        {path: 'layout', component: LayoutDemo},
        {path: 'icon', component: IconDemo},
      ]
    }
  ]
})