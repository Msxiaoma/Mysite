import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './app'
import routes from './router'
import ElementUI from 'element-ui'
import './assets/css/reset.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  template: '<app></app>',
  components: {
    App: App
  },
  router: router
})