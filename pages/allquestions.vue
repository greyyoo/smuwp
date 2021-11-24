<template>
  <div class="allQuestions">
    <div class="head">
      <h3>전체질문리스트</h3>
      <hr style="width: 60%; margin: auto">
    </div>
    <div class="list">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-1 variant="success" block>
            수강신청
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <a v-for="(faq, index) in resultSugang" :key="index" :href="faq.item.Linkto" @mousedown.prevent="searchResultVisible = true">
                <div class="listing">
                  {{ faq.item.Question }}
                </div>
              </a>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-2 variant="success" block>
            학사정보
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <a v-for="(faq, index) in resultHaksa" :key="index" :href="faq.item.Linkto" @mousedown.prevent="searchResultVisible = true">
                <div class="listing">
                  {{ faq.item.Question }}
                </div>
              </a>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-3 variant="success" block>
            대학생활
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <a v-for="(faq, index) in resultLife" :key="index" :href="faq.item.Linkto" @mousedown.prevent="searchResultVisible = true">
                <div class="listing">
                  {{ faq.item.Question }}
                </div>
              </a>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-4 variant="success" block>
            등록/장학
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <a v-for="(faq, index) in resultMoney" :key="index" :href="faq.item.Linkto" @mousedown.prevent="searchResultVisible = true">
                <div class="listing">
                  {{ faq.item.Question }}
                </div>
              </a>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-5 variant="success" block>
            학식&맛집
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              Coming Soon!
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
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
      options: {
        threshold: 0.0,
        keys: ['Tags']
      },
      resultSugang: [],
      resultHaksa: [],
      resultLife: [],
      resultMoney: []
    }
  },
  mounted () {
    const fuse = new Fuse(this.faqs, this.options)
    const searchSugang = fuse.search({
      $or: [
        { Tags: 'GELT' },
        { Tags: '강의시간표' },
        { Tags: '전공' },
        { Tags: '교육과정' },
        { Tags: '교양필수' },
        { Tags: '영어배치고사' },
        { Tags: '교양핵심' },
        { Tags: '수강신청' },
        { Tags: '수강정정' },
        { Tags: '수강포기' },
        { Tags: '재수강' },
        { Tags: '계절학기' }
      ]
    })
    const searchHaksa = fuse.search({
      $or: [
        { Tags: '학사정보' },
        { Tags: '성적' },
        { Tags: '교육과정' },
        { Tags: '학교지도' },
        { Tags: '수업' },
        { Tags: '학점' },
        { Tags: '계절학기' },
        { Tags: '수업평가' },
        { Tags: '학점교류' },
        { Tags: '출결' },
        { Tags: '스마트숙명' },
        { Tags: '우등상' },
        { Tags: '이의제기' },
        { Tags: '교환학생' },
        { Tags: '학적변동' },
        { Tags: '유연학기제' },
        { Tags: '학사일정' }
      ]
    })
    const searchLife = fuse.search({
      $or: [
        { Tags: '대학생활' },
        { Tags: '단톡방' },
        { Tags: '공동구매' },
        { Tags: '사물함' },
        { Tags: '선행학습' },
        { Tags: '주변시설' },
        { Tags: '이메일' },
        { Tags: '오피스' },
        { Tags: '나이' },
        { Tags: '성소수자' },
        { Tags: 'CC' },
        { Tags: '연애' },
        { Tags: '학생복지스토어' },
        { Tags: '아이패드' },
        { Tags: '노트북' },
        { Tags: '외부인' },
        { Tags: '킹갓제너럴마제스티붐바스틱하늘섬' },
        { Tags: '학교굿즈' },
        { Tags: '취준' },
        { Tags: '학생증' },
        { Tags: '학식' },
        { Tags: '교내카페' },
        { Tags: '동아리' },
        { Tags: '리더십그룹' },
        { Tags: '학생회' },
        { Tags: '눈송이' },
        { Tags: '숙명상징' }
      ]
    })
    const searchMoney = fuse.search({
      $or: [
        { Tags: '등록금' },
        { Tags: '장학금' }
      ]
    })
    this.resultSugang = searchSugang
    this.resultHaksa = searchHaksa
    this.resultLife = searchLife
    this.resultMoney = searchMoney
  }
}
</script>
<style>
.allQuestions {
  text-align: center;
  margin: 5rem auto 5rem auto;
  width: 85%;
}
.head {
  margin: 2rem auto;
}
.listing {
  text-align: left;
  margin: 1rem auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}
</style>
