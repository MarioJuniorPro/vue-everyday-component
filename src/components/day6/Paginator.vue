<template>
  <nav class="pagination">
    <a class="pagination-previous" title="This is the first page"@click="previus" :disabled="!hasPrevius"> Previous</a>
    <a class="pagination-next" @click="next" :disabled="!hasNext">Next page</a>
    <ul class="pagination-list">
      <li v-for="(page, index) in getTotalPages">
        <a class="pagination-link" :class="{'is-current': page == currentPage}" @click.prevent="changePage(page)">{{page}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'paginator',
  props: {
    currentPage: {
      default: 1,
      type: Number
    }, 
    totalPages: {
      default: 1,
      type: Number
    },
    totalItems:{
      default: 0,
      type: Number
    },
    perPage: {
      default: 15,
      type: Number
    }
  },
  mounted(){
  },
  data() {
    return {
      curPage: 1
    }
  },
  computed: {
    getCurrentPage() {
      return this.curPage || 1
    },
    getTotalPages() {
      return Math.max(Math.ceil(this.totalItems / this.perPage), 1)
    },

    hasPrevius() {
      return this.currentPage - 1 >= 1
    },
    hasNext() {
      return this.currentPage + 1 <= Math.ceil(this.totalItems / this.perPage)
    }
  },
  methods: {
    changePage(page){
      this.$emit('pageChanged', page)
    },
    previus() {
      this.$emit('pageChanged', this.currentPage-1)
    },
    next() {
      this.$emit('pageChanged', this.currentPage+1)
    }
  }
}
</script>

<style>

</style>
