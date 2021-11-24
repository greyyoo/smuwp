<template>
  <div>
    <div class="writeComment">
      <b-form @submit="addComment">
        <b-list-group-item>
          <b-row>
            <b-form-textarea
              id="textarea-no-resize"
              v-model="comment"
              placeholder="댓글 작성하기"
              rows="2"
              size="sm"
              no-resize
              required
            />
          </b-row>
          <b-row>
            <b-button type="submit" :pressed.sync="clickSubmit" size="sm" variant="outline-primary" class="ml-auto">
              💬
            </b-button>
          </b-row>
        </b-list-group-item>
      </b-form>
    </div>
    <div class="commentList">
      <b-list-group v-for="comment in comments" :key="comment.id">
        <b-list-group-item class="comment">
          <b-row>
            <b-col cols="auto">
              {{ comment.AuthorNickName }}:&nbsp;{{ comment.Content }}
            </b-col>
            <b-col cols="auto" class="ml-auto">
              <b-button v-if="comment.isMyPost" size="sm" variant="outline-danger" @click="askDelete(comment.id)">
                🚫
              </b-button>
            </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
      <b-button v-if="!noMoreComment" size="sm" variant="success" @click="nextList()">
        댓글 더보기
      </b-button>
    </div>
  </div>
</template>
<script>
import firebase from '@firebase/app'
import { userinfo, forum } from '~/plugins/firebase'
export default {
  props: [
    // eslint-disable-next-line
    'docRef'
  ],
  data () {
    return {
      comments: [],
      last: null,
      noMoreComment: false,
      comment: '',
      clickSubmit: false
    }
  },
  mounted () {
    this.initList()
  },
  methods: {
    async addComment (event) {
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
        Content: this.comment,
        Created: created,
        Comments: 0
      }
      const ref = {
        Ref: forum.doc(docid).collection('articles').doc(this.docRef).collection('comments').doc(docName)
      }
      // eslint-disable-next-line
      const upload = await forum.doc(docid).collection('articles').doc(this.docRef).collection('comments').add(post)
      // eslint-disable-next-line
      const save = await userinfo.doc(author).collection('comments').doc(docName).set(ref)
      this.comments = []
      this.comment = ''
      this.initList()
    },
    async initList () {
      const forumName = this.$route.params.forum
      const commentList = await forum.doc(forumName).collection('articles').doc(this.docRef).collection('comments')
        .orderBy('Created')
        .limit(5)
        .get()
      if (commentList.docs.length === 5) {
        commentList.docs.forEach((v) => {
          const item = v.data()
          item.id = v.id
          if (v.data().AuthorNickName === localStorage.getItem('userNickName')) {
            item.isMyPost = true
          } else {
            item.isMyPost = false
          }
          item.showComments = false
          this.comments.push(item)
        })
        this.last = commentList.docs[commentList.docs.length - 1]
      } else if (commentList.docs.length > 0) {
        commentList.docs.forEach((v) => {
          const item = v.data()
          item.id = v.id
          if (v.data().AuthorNickName === localStorage.getItem('userNickName')) {
            item.isMyPost = true
          } else {
            item.isMyPost = false
          }
          item.showComments = false
          this.comments.push(item)
        })
        this.noMoreComment = true
      } else {
        this.noMoreComment = true
      }
    },
    async nextList () {
      const forumName = this.$route.params.forum
      const commentList = await forum.doc(forumName).collection('articles').doc(this.docRef).collection('comments')
        .orderBy('Created')
        .startAfter(this.last)
        .limit(5)
        .get()
      if (commentList.docs.length === 5) {
        commentList.docs.forEach((v) => {
          const item = v.data()
          item.id = v.id
          if (v.data().AuthorNickName === localStorage.getItem('userNickName')) {
            item.isMyPost = true
          } else {
            item.isMyPost = false
          }
          item.showComments = false
          this.comments.push(item)
        })
        this.last = commentList.docs[commentList.docs.length - 1]
      } else if (commentList.docs.length > 0) {
        commentList.docs.forEach((v) => {
          const item = v.data()
          item.id = v.id
          if (v.data().AuthorNickName === localStorage.getItem('userNickName')) {
            item.isMyPost = true
          } else {
            item.isMyPost = false
          }
          item.showComments = false
          this.comments.push(item)
        })
        this.noMoreComment = true
      } else {
        this.noMoreComment = true
      }
    },
    askDelete (comment) {
      this.$bvModal.msgBoxConfirm('정말 댓글을 삭제하시겠습니까? 삭제한 댓글은 되돌릴 수 없습니다.', {
        title: '댓글 삭제',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: '네',
        cancelTitle: '아니오',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
        .then((value) => {
          if (value) {
            this.deleteComment(comment)
          }
        })
        .catch((err) => {
          console.error(err.message)
        })
    },
    async deleteComment (comment) {
      const forumName = this.$route.params.forum
      // eslint-disable-next-line
      const deleteIt = await forum.doc(forumName).collection('articles').doc(this.docRef).collection('comments').doc(comment).delete()
      this.comments = []
      this.initList()
    }
  }
}
</script>
<style>
.comment {
  width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: normal;
  overflow: auto;
  text-align: left;
}
</style>
