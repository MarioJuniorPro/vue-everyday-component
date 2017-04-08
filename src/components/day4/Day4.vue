<template>
  <div>
    <github-activity></github-activity>
  </div>
</template>

<script>
import Vue from 'vue'
import GithubActivity from './GithubActivity.vue'
export default {
  name: 'day4',
  components: {
    'github-activity': GithubActivity
  },
  data() {
    return {
    }
  }
}
</script>

<style>

</style>


