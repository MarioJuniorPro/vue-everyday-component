<template>
  <div>
    Clock {{hours}}:{{minutes}}:{{seconds}}
    <div class="clock">
      <div class="clock-face">
        <div class="hand hour-hand"
             :style="hoursStyle">
          <!--<div class="circle"></div>-->
        </div>
        <div class="hand min-hand"
             :style="monthsStyle">
          <!--<div class="circle"></div>-->
        </div>
        <div class="hand second-hand"
             :style="secondsStyle">
          <!--<div class="circle"></div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'clock',
  mounted() {
    const vm = this
    setInterval(()=> { vm.setTime() }, 1000)
  },
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  methods: {
    setTime() {
      let time = new Date();
      this.hours = time.getHours()
      this.minutes = time.getMinutes()
      this.seconds = time.getSeconds()
    }
  },
  computed: {
    hoursStyle() {
      let deg = ((this.hours / 12) * 360) + 90;
      return { transform: 'rotate(' + deg + 'deg)' }
    },
    monthsStyle() {
      let deg = ((this.minutes / 60) * 360) + 90;
      return { transform: 'rotate(' + deg + 'deg)' }
    },
    secondsStyle() {
      let deg = ((this.seconds / 60) * 360) + 90;
      return { transform: 'rotate(' + deg + 'deg)' }
    }
  }
}
</script>

<style>
/* Based on Wes bos clock */
.clock {
  width: 20rem;
  height: 20rem;
  border: 20px solid #42b983;
  border-radius: 50%;
  margin: 50px auto;
  position: relative;
  padding: 2rem;
}

.clock-face:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 30px;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.3;
    background-image: url("../../assets/logo.png");
    background-repeat: no-repeat;
    /*background-position: 60% 70%;*/
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
}

.clock-face {
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-3px);
  
}

.hand {
  width: 50%;
  height: 6px;
  background: #42b983;
  position: absolute;
  top: 50%;
  transform-origin: 100%;
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
  display: flex;
  align-items: center;
}


.circle {
  width: 1rem;
  height: 1rem;
  border: 0.4rem solid #35495e;
  border-radius: 50%;
  margin-left: -1.3rem;
}
</style>
