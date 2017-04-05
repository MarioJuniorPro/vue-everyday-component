import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import App from './App.vue'

import Day1 from './components/day1/Day1.vue'


const routes = [
  { path: '/day1', component: Day1, title: 'DAY 1' }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
