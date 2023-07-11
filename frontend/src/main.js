import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'

import "core-js/stable";
import "regenerator-runtime/runtime";

import router from '@/router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js';

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider({
    httpEndpoint: 'http://localhost:8000/graphql',
    wsEndpoint: null,
  }),
  render: h => h(App)
}).$mount('#app')