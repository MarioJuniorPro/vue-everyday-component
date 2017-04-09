import Day0 from './components/day0/Day0.vue'
import Day1 from './components/day1/Day1.vue'
import Day2 from './components/day2/Day2.vue'
import Day3 from './components/day3/Day3.vue'
import Day4 from './components/day4/Day4.vue'
import Day5 from './components/day5/Day5.vue'


const routes = [
  { path: '/day0', component: Day0, title: 'D-00 - Home' },
  { path: '/day1', component: Day1, title: 'D-01 - Modal' },
  { path: '/day2', component: Day2, title: 'D-02 - Passowrd Strength' },
  { path: '/day3', component: Day3, title: 'D-03 - ScrollTop' },
  { path: '/day4', component: Day4, title: 'D-04 - Activity' },
  { path: '/day5', component: Day5, title: 'D-05 - Clock' },
]

export default routes