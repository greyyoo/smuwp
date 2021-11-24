<template>
  <div>
    <h3>Admin Page</h3>
    <div v-if="loading">
      <p>
        Loading...
      </p>
    </div>
    <div v-show="notAllowed">
      접근이 허용되지 않습니다.
    </div>
    <div v-show="isAdmin">
      admin contents
    </div>
  </div>
</template>
<script>
import firebase from '@firebase/app'
import '@firebase/auth'
export default {
  data () {
    return {
      loading: true,
      notAllowed: false,
      isAdmin: false
    }
  },
  async mounted () {
    const user = await firebase.auth().currentUser
    if (user === null || this.$store.state.isLoggedIn === false) {
      this.loading = false
      this.notAllowed = true
    } else if (!user.emailVerified) {
      this.loading = false
      this.notAllowed = true
    } else {
      const userNickName = user.displayName
      if (userNickName === '관리자') {
        this.loading = false
        this.isAdmin = true
      } else {
        this.loading = false
        this.notAllowed = true
      }
    }
  }
}
</script>
