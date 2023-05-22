import { createApp } from 'vue';
import { sync } from 'vuex-router-sync';
import * as Vuetify from 'vuetify';

import App from './App.vue';
import router from './router/index';
import store from './store/index';

const app = createApp(App);

app.use(store).use(router).mount('#app');

Vue.use(Vuetify);
sync(store, router);
