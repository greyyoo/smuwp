<template>
  <div>
    <div class="nameForum">
      <h3>{{ this.$route.params.forum }} 게시판</h3>
    </div>
    <div v-if="loading">
      Loading...
    </div>
    <div v-show="notAllowed">
      접근이 허용되지 않습니다.
    </div>
    <div v-show="isChecked">
      <div class="newpost">
        <NewPost />
      </div>
      <div class="contents">
        <Viewer />
      </div>
    </div>
  </div>
</template>
<script>
// import firebase from '@firebase/app'
// import '@firebase/auth'
import NewPost from './-newpost'
import Viewer from './-viewer'
// import { userinfo } from '~/plugins/firebase'
export default {
  components: {
    NewPost,
    Viewer
  },
  data () {
    return {
      loading: true,
      notAllowed: false,
      isChecked: false
    }
  },
  async mounted () {
    const userEmail = await localStorage.getItem('userEmail')
    const isVerified = await localStorage.getItem('isVerified')
    const userURL = await localStorage.getItem('userURL')
    const displayName = await localStorage.getItem('userNickName')
    // eslint-disable-next-line
    if (userEmail === null || localStorage.getItem('isLoggedIn') === 'false') {
      this.$router.push('/login')
    } else if (isVerified === 'false') {
      this.$router.push('/verifyyouremail')
    } else {
      const userHakbeon = userURL.substr(12, 2)
      const userNickName = displayName
      if (userHakbeon === this.$route.params.forum.substr(0, 2) || userNickName === '관리자') {
        this.loading = false
        this.isChecked = true
      } else {
        this.loading = false
        this.notAllowed = true
      }
    }
  }
}
</script>
<style>
.nameForum {
  text-align: center;
  margin: 3rem auto;
}
</style>
