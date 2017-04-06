<template>
  <div>
    <div class="password-strength-component" v-if="hasPassword">
      Password Strength: <span class="password-strength" :class="passwordStrengthRate">{{ passwordStrength }} ({{passwordStrengthRate}})</span>
    </div>  
  </div>
</template>

<script>
//import Vue from 'vue'

//Vue.component(.name, )

export default {
  name: 'password-strength',
  props: //['password'],
  {
    password: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      passwordStrength: 0,
      passwordStrengthRate: ''
    }
  },
  watch:{
    password(password) {
      this.passwordStrength = this.getPasswordStrength(password)
      this.passwordStrengthRate = this.getPasswordStrengthRate(this.passwordStrength)
    }
  },
  computed: {
    hasPassword() {
      if(this.password && this.password.length > 0)
        return true
      return false
    }
  },
  methods: {
    getPasswordStrengthRate(mod) {
      if(mod < 3) return 'very-weak'
      if(mod < 6) return 'weak'
      if(mod < 9) return 'normal'
      if(mod < 12) return 'strong'
      if(mod >= 20) return 'hash-like'
      if(mod >= 12) return 'very-strong'
      return 'very-weak'
    },
    getPasswordStrength(password) {
      let mod = 0;
      let cachedPassowrd = password
      let cachedPassowrdLength = cachedPassowrd.length

      const digit = (value) => /\d/.test(value)
      const lower = (value) => /[a-z]/.test(value)
      const upper = (value) => /[A-Z]/.test(value)
      const nonWords = (value) => /\W/.test(value)
      const gt5 = (value) => value > 5
      const gt12 = (value) => value > 12
      const notNumberAndLetterOnly = (value) => !/^\w+$/.test(value) 
      
      const equalSequence = (a, b) => a == b

      const compareWithPrevius = (cur, prev) => {
        let mod = 0;
        if(equalSequence(cur, prev)) mod--
        if(digit(cur) != digit(prev)) mod++
        if(lower(cur) != lower(prev)) mod++
        if(upper(cur) != upper(prev)) mod++
        if(nonWords(cur) != nonWords(prev)) mod++
        
        return mod;
      }

      let passwordScore = cachedPassowrd
        .split('')
        .reduce((acc, cur, idx, arr) => {
          if(acc.prev){
            acc.mod += compareWithPrevius(cur, acc.prev)
          }
          acc.prev = cur
          return acc
        }, { mod: 0, prev: null})
        .mod

      if(nonWords(cachedPassowrd)) passwordScore++
      if(gt5(cachedPassowrdLength)) passwordScore++
      if(gt12(cachedPassowrdLength)) passwordScore++
      if(notNumberAndLetterOnly(cachedPassowrd)) passwordScore+=2

      // very weak, weak, normal, strong, very strong
      return passwordScore;
    }
  }
}
</script>

<style>

/*FF0000
CC3300
996600
669900
33CC00
00FF00*/
.password-strength-component {
  background-color: lightblue;
  padding: 15px 20px;
  border: 1px solid darkblue;
  width: 400px;
  margin: 0 auto;
}

.password-strength { 
  padding: 5px; 
  font-weight: bold;
  width: 100px;
}

.very-weak { background-color: #FF0000 }
.weak { background-color: #CC3300 }
.normal { background-color: #996600 }
.strong { background-color: #669900 }
.very-strong { background-color: #33CC00 }
.hash-like { background-color: #00FF00 }
</style>
