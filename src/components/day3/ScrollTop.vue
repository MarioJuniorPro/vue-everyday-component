<template>
  <div class="btn-scroll-top" @click.prevent="toTop" v-if="isOutTop">
    <a href="#">&#x21D1;</a>
  </div>
</template>

<script>

export default {
  name: 'scroll-top',
  mounted() {
    let vm = this
    window.onscroll = function (e) {
      vm.checkIsOutTop();
    }
  },
  data() {
    return {
      isOutTop: false
    }
  },
  methods: {
    toTop() {
      let vm = this
      if (this.checkIsOutTop()) {
        setTimeout(function () {
          window.scrollTo(0, window.scrollY - 40);
          vm.toTop();
        }, 15);
      }
    },
    checkIsOutTop() {
      this.isOutTop = window.scrollY > 0
      return this.isOutTop
    }
  }
}
</script>

<style>
.btn-scroll-top {
  width: 40px;
  height: 40px;
  border: 5px solid #42b983;
  border-radius: 50%;
  position: fixed;
  bottom: 25px;
  right: 25px;
}

.btn-scroll-top:hover {
  border-color: #25885b;
}


.btn-scroll-top a {
  font-size: 30px;
  font-weight: bold;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.btn-scroll-top:hover a {
  color: #25885b;
}
</style>
