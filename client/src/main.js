import 'vuetify/dist/vuetify.css';

import { createApp } from 'vue';
import { sync } from 'vuex-router-sync';

import App from './App.vue';
import router from './router/index';
import store from './store/index';

const app = createApp(App);

app.use(store).use(router).mount('#app');

sync(store, router);
