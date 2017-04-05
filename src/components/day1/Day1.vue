<template>
  <div>
    <h1>DAY 1</h1>
    <button id="show-modal" @click="openModal">Show Modal</button>
        
    <modal v-if="showModal" @close="closeModal">
      <h3 slot="header">MY CUSTOM HEADER o/</h3>
    </modal>
  </div>
</template>

<script>
import Vue from 'vue'
import Modal from './Modal.vue'
Vue.component(Modal.name, Modal)

export default {
  name: 'day1',
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    openModal() {
      this.showModal = true
      console.log('opened!', this.showModal)
    },
    closeModal() {
      this.showModal = false

    }
  }
}
</script>

<style>
</style>
