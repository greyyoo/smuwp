<template>
  <div class="editor">
    <b-form @submit="addArticle">
      <b-row>
        <b-form-textarea
          id="textarea-no-resize"
          v-model="content"
          placeholder="글을 남겨보세요!"
          rows="4"
          no-resize
          required
        />
      </b-row>
      <b-row>
        <b-button type="submit" :pressed.sync="clickSubmit" variant="outline-primary" class="ml-auto">
          💙
        </b-button>
      </b-row>
    </b-form>
  </div>
</template>
<script>
import firebase from '@firebase/app'
import { userinfo, forum } from '~/plugins/firebase'
export default {
  data () {
    return {
      content: '',
      clickSubmit: false
    }
  },
  methods: {
    async addArticle (event) {
      event.preventDefault()
      const docid = this.$route.params.forum
      const userEmail = firebase.auth().currentUser.email
      const userNickName = firebase.auth().currentUser.displayName
      const author = userEmail.split('@')[0]
      const today = new Date()
      const month = today.getMonth() + 1
      const docName = today.getFullYear().toString() + month.toString() + today.getDate().toString() + today.getHours().toString() + today.getMinutes().toString() + today.getSeconds().toString() + today.getMilliseconds().toString()
      const created = firebase.firestore.Timestamp.fromDate(new Date())
      const post = {
        AuthorID: author,
        AuthorNickName: userNickName,
        Content: this.content,
        Created: created,
        Likes: 0,
        Comments: 0
      }
      const ref = {
        Ref: forum.doc(docid).collection('articles').doc(docName)
      }
      // eslint-disable-next-line
      const upload = await forum.doc(docid).collection('articles').doc(docName).set(post)
      // eslint-disable-next-line
      const save = await userinfo.doc(author).collection('articles').doc(docName).set(ref)
      location.reload()
    }
  }
}
</script>
<style>
.editor {
  width: 85%;
  margin: 2rem auto 0rem auto;
}
</style>
