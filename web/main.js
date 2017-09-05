import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './app'
import routes from './router'
// import './assets/css/main.css'


// Vue.config.devtools = true     //配置是否允许 vue-devtools 检查代码
Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  template: '<app></app>',
  components: {
    App: App
  },
  router
})