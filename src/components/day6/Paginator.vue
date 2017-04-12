<template>
  <nav class="pagination">
    <a class="pagination-previous" title="This is the first page"@click="previus"> Previous</a>
    <a class="pagination-next" @click="next">Next page</a>
    <ul class="pagination-list">
      <li v-for="(page, index) in getTotalPages">
        <a class="pagination-link"
           :class="{'is-current': page == currentPage}">{{page}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'paginator',
  props: ['currentPage', 'totalPages'],
  mounted(){
    this.curPage = this.currentPage
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
      return this.totalPages || 1
    },

    hasPrevius() {

    },
    hasNext() {

    }
  },
  methods: {
    previus() {
      this.curPage--
      this.$emit('currentPage', this.curPage)
    },
    next() {
      this.curPage++
      this.$emit('currentPage', this.curPage)
    }
  }
}
</script>

<style>

</style>
