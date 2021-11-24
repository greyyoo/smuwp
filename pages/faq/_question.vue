<template>
  <div class="text-block">
    <h3 class="jemok">
      {{ qstnName }}
    </h3>
    <div class="tags">
      <b-form-tags v-model="tags" disabled input-id="tags-basic" placeholder="" />
    </div>
    <div class="date">
      최초 작성: {{ created }} | 최종 수정: {{ lasteditted }}
    </div>
    <Message />
    <!-- eslint-disable-next-line -->
    <div v-html="qstnSanitized" />
  </div>
</template>
<script>
import sanitizeHtml from 'sanitize-html'
import Message from './-message'
import { faq } from '~/plugins/firebase.js'
export default {
  components: {
    Message
  },
  async asyncData ({ params }) {
    const slug = params.question
    const docRef = faq.doc(slug)
    let snap
    try {
      snap = await docRef.get()
    } catch (e) {
    }
    return {
      qstnSanitized: sanitizeHtml(snap.data().Answer),
      qstnName: snap.data().Question,
      tags: snap.data().Tags,
      created: snap.data().Create,
      lasteditted: snap.data().LastEdit
    }
  },
  data () {
    return {
      qstnSanitized: '',
      qstnName: 'Loading...',
      tags: [],
      created: null,
      lasteditted: null
    }
  }
}
</script>
<style>
.text-block {
  width: 70%;
  margin: 3rem auto;
}
.jemok {
  text-align: center;
}
.tags {
  margin: 1rem 0rem 0rem 0rem;
}
.date {
  margin: 1rem 0rem 3rem 0rem;
}
</style>
