<template>
  <div>
    <speed-reader :text="article"></speed-reader>

    <h3>Texto por Diego Hernandes (<a href="https://blog.codecasts.com.br/desenvolvedores-voces-estao-sozinhos-13f3eb846a99" target="_blank">Desenvolvedores: Vocês Estão Sozinhos!</a>)</h3>
    <textarea v-model="article"></textarea>
  </div>
</template>

<script>
import SpeedReader from './SpeedReader.vue'
import article from './article'

export default {
  name: 'day8',
  components: {
    'speed-reader': SpeedReader
  },
  data() {
    return {
      article: article
    }
  }
}
</script>

<style>
textarea {
  width: 800px;
  height: 30vh;
}
</style>
