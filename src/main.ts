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
import Switch from './lib/switch.vue'
import Tabs from './lib/tabs.vue'
import Tab from './lib/tabs-item.vue'
import Dialog from './lib/dialog.vue'

const app = createApp(App)

app.use(store)
app.use(router)

app.component('h-button', Button)
app.component('h-icon', Icon)
app.component('h-button-group', ButtonGroup)
app.component('h-input', Input)
app.component('h-switch', Switch)
app.component('h-tabs', Tabs)
app.component('h-tab', Tab)
app.component('h-dialog', Dialog)

app.directive('highlight',(el) => {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block: HTMLElement)=>{
    hljs.highlightBlock(block)
  })
})

app.mount('#app')

