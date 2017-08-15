// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import {store} from './store'

Vue.use(VueFire)

Vue.config.productionTip = false
Vue.config.devtools = true;
Vue.config.debug = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
