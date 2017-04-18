<template>
  <div class="speed-reader">
      <div class="read-box">{{word}}</div>
      <div v-if="showWordCount">
        {{wordRead}}/{{wordTotal}} - {{readPercentage+ '%'}}
        <div class="reading-progress" :style="{width: readPercentage+ '%'}" :title="readPercentage+ '% read'"></div>
      </div>
      <div class="controls">
        <button @click.prevent="startReading" :disabled="isRunning">Start Reading</button>
        <button @click.prevent="stopReading" :disabled="!isRunning">Stop Reading</button>
        <button @click.prevent="showWordCount = !showWordCount">Show word count</button>
        <input type="range" min="20" max="500" step="40" v-model="wpm"  :disabled="isRunning" />{{wpm}}
      </div>
  </div>
  </template>

<script>
export default {
  props: ['text'],
  mounted(){
    // this.startReading();
  },
  data() {
    return {
      word: '',
      wordTotal: 0,
      wordCount: 0,
      wpm: 300,
      isRunning: false,
      showWordCount:true,
      reader: function(){}
    }
  },
  watch: {
    wpm: function(){
      if(this.isRunning){
        this.startReading()
      }
    }
  },
  methods: {
    getArticleArray(article){
      if(!article) return []
      return article.split(/ /)   
    },
    startReading(){
      this.stopReading();
      this.isRunning = true;
      this.word = '';
      const article = this.getArticleArray(this.text)
      this.wordTotal = article.length
      this.wordCount = article.length
      this.reader = setInterval(() => {
        this.word = article.shift().trim().replace(new RegExp('\t', 'g'), '');
        this.wordCount--;
        if(this.word.length > 4){
          console.log(this.word)
        }
        if(this.wordCount == 0){
          this.stopReading()
        }
      }, (60 / this.wpm) * 1000)
    },
    stopReading(){
      this.isRunning = false;
      clearInterval(this.reader)
    }
  },
  computed: {
    wordRead(){
      return this.wordTotal - this.wordCount
    },
    readPercentage(){
      return ((this.wordRead / this.wordTotal) * 100 || 0).toFixed(0)
    }
  }
}
</script>

<style>
.speed-reader {
  padding: 50px;
  background-color: honeydew;
}

.reading-progress {
  height:6px;
  background-color: #42b983;
  transition: width 3s;
}
.read-box {
  height: 150px;
  font-size: 5rem;
  font-family: Georgia,Cambria,"Times New Roman",Times,serif;
  letter-spacing: .01rem;
  font-weight: 400;
  font-style: normal;
  letter-spacing: -.003em;
}
.controls {
  margin-top: 100px;
}
</style>
