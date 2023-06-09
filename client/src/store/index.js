import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  strict: true,
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState(),
  ],
});
