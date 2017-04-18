<template>
  <div>
    <link rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.0/css/bulma.css"> DAY 6
    <div class="container is-fluid">
      <data-table :items="items"></data-table>
    </div>
  
  </div>
</template>

<script>
import Vue from 'vue'
import DataTable from './DataTable.vue'

export default {
  name: 'day6',
  components: {
    'data-table': DataTable
  },
  created() {
    this.$http.get('https://api.github.com/search/repositories?q=created:%3E2017-04-10&sort=stars&order=desc').then(resp => {
      this.items = resp.body.items
      console.log(this.items)
    })

    // for(let i = 0; i < 500; i++){
    //   this.items.push({
    //     html_url: `http://api.github.com/${i}`,
    //     name: `Git_${i}`,
    //     stargazers_count: Math.ceil(Math.random() * 5),
    //     language: 'Vue'+i
    //   })
    // }
    // console.log(this.items)
  },
  data() {
    return {
      items: []
    }
  }
}
</script>

<style>

</style>


