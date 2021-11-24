<template>
  <div class="viewer">
    <b-card v-for="post in posts" :key="post.id">
      <b-row>
        <b-col cols="auto" class="mr-auto">
          <b-card-title>
            {{ post.AuthorNickName }}
          </b-card-title>
        </b-col>
        <b-col cols="auto" class="ml-auto">
          <b-button v-if="post.isMyPost" size="sm" variant="outline-danger" @click="askDelete(post.id)">
            🚫
          </b-button>
        </b-col>
      </b-row>
      <b-card-sub-title>
        {{ post.Created.toDate().toString().substr(0, 21) }}
      </b-card-sub-title>
      <b-card-text class="post">
        {{ post.Content }}
      </b-card-text>
      <b-button :pressed.sync="post.showComments" size="sm" variant="outline-secondary">
        💬
      </b-button>
      <!-- eslint-disable-next-line -->
      <GetComments v-show="post.showComments" :docRef="post.id" />
    </b-card>
    <b-button v-if="!noMorePost" variant="success" @click="nextList()">
      글 더보기
    </b-button>
    <p v-show="noMorePost" class="noMore">
      더 이상 글이 없습니다.
    </p>
  </div>
</template>
<script>
import GetComments from './-getcomments'
import { forum } from '~/plugins/firebase'
export default {
  components: {
    GetComments
  },
  data () {
    return {
      posts: [],
      last: null,
      noMorePost: false
    }
  },
  mounted () {
    this.initList()
  },
  methods: {
    async initList () {
      const forumName = this.$route.params.forum
      const postList = await forum.doc(forumName).collection('articles')
        .orderBy('Created', 'desc')
        .limit(10)
        .get()
      if (postList.docs.length === 10) {
        postList.docs.forEach((v) => {
          const item = v.data()
          item.id = v.id
          if (v.data().AuthorNickName === localStorage.getItem('userNickName')) {
            item.isMyPost = true
          } else {
            item.isMyPost = false
          }
          item.showComments = false
          this.posts.push(item)
        })
        this.last = postList.docs[postList.docs.length - 1]
      } else if (postList.docs.length > 0) {
        postList.docs.forEach((v) => {
          const item = v.data()
          item.id = v.id
          if (v.data().AuthorNickName === localStorage.getItem('userNickName')) {
            item.isMyPost = true
          } else {
            item.isMyPost = false
          }
          item.showComments = false
          this.posts.push(item)
        })
        this.noMorePost = true
      } else {
        this.noMorePost = true
      }
    },
    async nextList () {
      const forumName = this.$route.params.forum
      const postList = await forum.doc(forumName).collection('articles')
        .orderBy('Created', 'desc')
        .startAfter(this.last)
        .limit(10)
        .get()
      if (postList.docs.length === 10) {
        postList.docs.forEach((v) => {
          const item = v.data()
          item.id = v.id
          if (v.data().AuthorNickName === localStorage.getItem('userNickName')) {
            item.isMyPost = true
          } else {
            item.isMyPost = false
          }
          item.showComments = false
          this.posts.push(item)
        })
        this.last = postList.docs[postList.docs.length - 1]
      } else if (postList.docs.length > 0) {
        postList.docs.forEach((v) => {
          const item = v.data()
          item.id = v.id
          if (v.data().AuthorNickName === localStorage.getItem('userNickName')) {
            item.isMyPost = true
          } else {
            item.isMyPost = false
          }
          item.showComments = false
          this.posts.push(item)
        })
        this.noMorePost = true
      } else {
        this.noMorePost = true
      }
    },
    askDelete (post) {
      this.$bvModal.msgBoxConfirm('정말 글을 삭제하시겠습니까? 삭제한 글은 되돌릴 수 없습니다.', {
        title: '글 삭제',
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
            this.deletePost(post)
          }
        })
        .catch((err) => {
          console.error(err.message)
        })
    },
    async deletePost (post) {
      const forumName = this.$route.params.forum
      // eslint-disable-next-line
      const deleteIt = await forum.doc(forumName).collection('articles').doc(post).delete()
      location.reload()
    }
  }
}
</script>
<style>
.viewer {
  width: 100%;
  margin: 1rem auto;
}
.post {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: normal;
  overflow: auto;
  max-height: 7rem;
  text-align: left;
  white-space: pre-line;
}
.noMore {
  text-align: center;
}
</style>
