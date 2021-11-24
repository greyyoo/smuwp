<template>
  <div class="tags">
    <div class="head">
      <h3>#{{ this.$route.params.questionlist }}</h3>
      <hr style="width: 60%; border-color: black">
    </div>
    <div class="list">
      <a v-for="(faq, index) in resultList" :key="index" :href="faq.item.Linkto">
        <div class="listing">
          {{ faq.item.Question }}
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import Fuse from 'fuse.js'
import dataset from '../fuseindex.json'
export default {
  data () {
    return {
      questionList: dataset,
      options: {
        threshold: 0.0,
        keys: ['Tags']
      },
      resultList: []
    }
  },
  mounted () {
    const fuse = new Fuse(this.questionList, this.options)
    const loadList = fuse.search(this.$route.params.questionlist)
    this.resultList = loadList
  }
}
</script>
<style>
.tags {
  text-align: left;
  margin: 5rem auto 5rem auto;
  width: 85%;
}
.head {
  margin: 2rem auto;
}
.listing {
  margin: 1rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}
</style>
