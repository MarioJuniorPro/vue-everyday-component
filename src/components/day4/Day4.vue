<template>
  <div>
    DAY 4
  </div>
</template>

<script>
import Vue from 'vue'
// import ScrollTop from './ScrollTop.vue'

// Vue.component(ScrollTop.name, ScrollTop)
/*https://api.github.com/users/dhh/repos?sort=pushed&per_page=2000&access_token=189237662398c3cdd5eb036e94b127749fb0fb30
  {
    1:,{
      1:,
      3:,
    }
    2:,
    3:,

  }
*/

Vue.$http('https://api.github.com/users/dhh/repos?sort=pushed&per_page=2000&access_token=189237662398c3cdd5eb036e94b127749fb0fb30').then((d)=>{
  console.log(d.length)
})

export default {
  name: 'day4',
  data() {
    return {
    }
  }
}
</script>

<style>

</style>


