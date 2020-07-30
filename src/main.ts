import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {router} from './router';

import Button from './singleComponents/button.vue';
import Icon from './singleComponents/icon.vue';
import ButtonGroup from './singleComponents/button-group.vue';
import Input from './singleComponents/input.vue';
import Row from './singleComponents/row.vue'
import Col from './singleComponents/col.vue'

const app = createApp(App)
app.use(router)

app.component('h-button', Button);
app.component('h-icon', Icon);
app.component('h-button-group', ButtonGroup);
app.component('h-input', Input);
app.component('h-row', Row);
app.component('h-col', Col);

app.mount('#app')