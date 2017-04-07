<template>
  <div>
    DAY 3
    <ul class="element-list">
      <li v-for="item of times" class="element">
        {{item}}
      </li>
    </ul>
    <scroll-top></scroll-top>
  </div>
</template>

<script>
import Vue from 'vue'
import ScrollTop from './ScrollTop.vue'

Vue.component(ScrollTop.name, ScrollTop)

export default {
  name: 'day3',
  data() {
    return {
      times: new Array(81).fill('Hello!')
    }
  }
}
</script>

<style>
.element-list {
  width: 250px;
  margin: 0 auto;
}

.element {
  background-color: #42b983;
  width: 50px;
  height: 50px;
  border: 5px solid #42b983;
  margin: 5px;
}
</style>
