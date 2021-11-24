<template>
  <div>
    <div class="search-block">
      <div class="search">
        <input
          v-model="query"
          type="text"
          placeholder="질문 검색하기"
          class="searchbar"
          @blur="searchResultVisible = false"
          @focus="searchResultVisible = true"
          @keydown.esc="searchResultVisible = false"
          @input="searchResultVisible = true"
          @keyup="performSearch"
        >
      </div>
      <div v-if="query.length > 0 && searchResultVisible" class="result">
        <div class="search-result">
          <div class="eachblock">
            <a v-for="(faq, index) in result" :key="index" :href="faq.item.Linkto" @mousedown.prevent="searchResultVisible = true">
              <p>{{ faq.item.Question }}</p>
            </a>
          </div>
          <div v-if="result.length === 0">
            <p>'<strong>{{ query }}</strong>'에 대한 검색 결과가 없어요!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Fuse from 'fuse.js'
import dataset from './fuseindex.json'
export default {
  data () {
    return {
      query: '',
      searchResultVisible: false,
      faqs: dataset,
      result: []
    }
  },
  methods: {
    performSearch () {
      const fuse = new Fuse(this.faqs, {
        keys: ['Question', 'Tags']
      })
      const search = fuse.search(this.query)
      this.result = search
    }
  }
}
</script>
<style>
.no-result {
  max-height: 10rem;
  text-align: left;
  background-color: white;
}
.result {
  width: 100%;
  margin: 3rem auto 0rem auto;
  position: absolute;
  border: 3px solid #18bc9c;
  border-top: 0px;
  border-radius: 5px;
}
.search-result {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: normal;
  overflow: auto;
  max-height: 12rem;
  text-align: left;
  background-color: white;
  color: black;
  font-size: large;
}
.search-result::-webkit-scrollbar {
  width: 0px;
}
.searchbar {
  margin: 0 auto;
  border: 3px solid #18bc9c;
  width: 100%;
  padding: 0px;
  height: 3rem;
  border-radius: 5px;
  outline: none;
  color: #9DBFAF;
}
.search-block {
  width: 70%;
  position: relative;
  margin: 2rem auto 0rem auto;
  display: flex;
  justify-content: center;
  max-width: 30rem;
}
.search {
  width: 100%;
  position: relative;
  display: flex;
}
.content {
  font-size: small;
  padding-bottom: 5px;
  border: 1px solid white;
  border-bottom: 1px solid gray;
}
.eachblock {
  margin: 0rem 0.5rem 0rem 0.5rem;
  padding-bottom: 5px;
  border: 1px solid white;
  border-bottom: 1px solid gray;
}
</style>
