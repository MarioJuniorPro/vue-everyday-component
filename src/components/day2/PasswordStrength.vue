<template>
  <div>
    <div class="password-strength-component" v-if="hasPassword">
      Password Strength: <span class="password-strength" :class="strength">{{ strength }}</span>
    </div>  
  </div>
</template>

<script>
import zxcvbn from 'zxcvbn'

export default {
  name: 'password-strength',
  props:
  {
    password: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  computed: {
    hasPassword() { return this.password && this.password.length > 0 },
    strength() { 
      let result = zxcvbn(this.password);

      const strength = {
        0: "worst",
        1: "bad",
        2: "weak",
        3: "good",
        4: "strong"
      }
      return strength[result.score || 0]
    }
  }
}
</script>

<style>

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

.worst { background-color: #FF0000 }
.bad { background-color: #CC3300 }
.weak { background-color: #996600 }
.good { background-color: #669900 }
.strong { background-color: #33CC00 }
.hash-like { background-color: #00FF00 }
</style>
