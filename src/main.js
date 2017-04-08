import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


Vue.use(VueResource)
Vue.use(VueRouter)

import App from './App.vue'
import routes from './routes'

const router = new VueRouter({
  routes
})

const vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//Vue.set(vm.routes,  )
