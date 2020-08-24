import "./lib/halo.scss"
import './index.scss'
import './main.scss'
import { createApp } from 'vue'
import  store from './store'
import {router} from './router'
import App from './App.vue'

import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

import Button from './lib/button.vue'
import Icon from './lib/icon.vue'
import ButtonGroup from './lib/button-group.vue'
import Input from './lib/input.vue'
import Row from './lib/row.vue'
import Col from './lib/col.vue'
import Switch from './lib/switch.vue'
import Tabs from './lib/tabs.vue'
import TabsHead from './lib/tabs-head.vue'
import TabsBody from './lib/tabs-body.vue'
import TabsItem from './lib/tabs-item.vue'
import TabsPanel from './lib/tabs-panel.vue'

const app = createApp(App)

app.use(store)
app.use(router)

app.component('h-button', Button)
app.component('h-icon', Icon)
app.component('h-button-group', ButtonGroup)
app.component('h-input', Input)
app.component('h-row', Row)
app.component('h-col', Col)
app.component('h-switch', Switch)
app.component('h-tabs', Tabs)
app.component('h-tabs-head', TabsHead)
app.component('h-tabs-body', TabsBody)
app.component('h-tabs-item', TabsItem)
app.component('h-tabs-panel', TabsPanel)

app.directive('highlight',(el) => {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block: HTMLElement)=>{
    hljs.highlightBlock(block)
  })
})

app.mount('#app')

