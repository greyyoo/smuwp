<template>
  <div>
    <!-- eslint-disable-next-line -->
    <a v-for="tags in list" v-bind:href="tags.item.Linkto">
      {{ tags.item.Tag }}
    </a>
    <h3>whowaewa</h3>
  </div>
</template>
<script>
// import Fuse from 'fuse.js'
import tagList from './tags.json'
export default {
  data () {
    return {
      options: {
        threshold: 1.0,
        keys: ['Tags']
      },
      list: tagList,
      query: '학사',
      resultList: []
    }
  }
  // mounted () {
  //   const fuse = new Fuse(this.list, this.options)
  //   const loadList = fuse.search(this.query)
  //   this.resultList = loadList
  // }
}
</script>
<style>
</style>
