import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import App from './App.vue'

import Day0 from './components/day0/Day0.vue'
import Day1 from './components/day1/Day1.vue'
import Day2 from './components/day2/Day2.vue'
import Day3 from './components/day3/Day3.vue'


const routes = [
  { path: '/day0', component: Day0, title: 'DAY 0' },
  { path: '/day1', component: Day1, title: 'DAY 1' },
  { path: '/day2', component: Day2, title: 'DAY 2' },
  { path: '/day3', component: Day3, title: 'DAY 3' }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
