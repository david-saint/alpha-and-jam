require('./bootstrap.js')
require('./firebase.js')
import Vue from 'vue'
import App from './App.vue'
import { store } from './store/index'
import { router } from './routes/router'
import VueFire from 'vuefire'

Vue.use(VueFire);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
