<template>
<div class="columns">
  <div class="column is-half is-offset-one-quarter">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Stars</th>
          <th>language</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in getPaginated">
          <td><a :href="item.html_url"
               target="_blank">{{item.name}}</a></td>
          <td>{{item.stargazers_count}}</td>
          <td>{{item.language}}</td>
          <td>
            <!--<a :href="item.owner.html_url"
               target="_blank"><img :src="item.owner.avatar_url"
                   class="image is-24x24"
                   :title="item.owner.login" /></a>-->
          </td>
        </tr>
      </tbody>
    </table>
    <paginator :currentPage="currentPage" :totalItems="getCount" :perPage="perPage" @pageChanged="pageChanged"></paginator>
  </div>
</div>
</template>

<script>
import Paginator from './Paginator.vue'
export default {
  name: 'data-table',
   components: {
    'paginator': Paginator
  },
  props: {
    'items':{
      default: []
    },
    perPage: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      currentPage: 3,
      totalPages: 5
    }
  },
  computed: {
    getPaginated(){
      let offset = (this.currentPage-1) * this.perPage 
      return this.items.slice(offset, offset+this.perPage)
    },
    getCount(){
      return this.items.length
    }
  },
  methods: {
    pageChanged($page){
      this.currentPage = $page
    }
  }
}

</script>

<style lang="css">

</style>
