<template>
  <div>
    <input type="text" v-model="pass" placeholder="Type password">
    <password-strength :password="pass"></password-strength>
  </div>
</template>

<script>
import Vue from 'vue'

import PasswordStrength from './PasswordStrength.vue'
Vue.component(PasswordStrength.name, PasswordStrength)

export default {
  name: 'day2',
  data() {
    return {
      pass: ''
    }
  }
}
</script>

<style>
</style>
