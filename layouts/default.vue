<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <NuxtLink to="/" tag="b-navbar-brand">
        눈송백서
      </NuxtLink>
      <b-navbar-toggle target="header-toggle-collapse" />
      <b-collapse id="header-toggle-collapse" is-nav>
        <b-navbar-nav>
          <NuxtLink to="/about" tag="b-nav-item">
            ABOUT
          </NuxtLink>
          <NuxtLink to="/allquestions" tag="b-nav-item">
            전체질문리스트
          </NuxtLink>
          <NuxtLink to="/curriculum" tag="b-nav-item">
            전공교육과정
          </NuxtLink>
          <!-- <NuxtLink to="/qnaform" tag="b-nav-item">
            질문&건의
          </NuxtLink> -->
          <!-- <b-nav-item-dropdown v-if="_.get($store.state.user, 'emailVerified', false)" text="게시판">
            <NuxtLink to="/forum/20학번" tag="b-dropdown-item">
              20학번 게시판
            </NuxtLink>
            <NuxtLink to="/forum/21학번" tag="b-dropdown-item">
              21학번 게시판
            </NuxtLink>
          </b-nav-item-dropdown> -->
        </b-navbar-nav>
        <!-- 회원가입, 로그인, 로그아웃 버튼 -->
        <!-- <b-navbar-nav class="mt-auto mb-auto ml-auto">
          <NuxtLink v-if="!$store.state.isLoggedIn" to="/signup" tag="b-nav-item">
            회원가입
          </NuxtLink>
          <NuxtLink v-if="!$store.state.isLoggedIn" to="/login" tag="b-nav-item">
            로그인
          </NuxtLink>
          <b-nav-item @click="gotoMyPage">
            {{ _.get($store.state.user, 'displayName', '') }}
          </b-nav-item>
          <b-nav-item v-if="$store.state.isLoggedIn" @click="logout">
            로그아웃
          </b-nav-item>
        </b-navbar-nav> -->
      </b-collapse>
    </b-navbar>
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import firebase from '@firebase/app'
import Footer from '~/components/-footer'
import '@firebase/auth'
// import { userinfo } from '~/plugins/firebase'
export default {
  components: {
    Footer
  },
  data () {
    return {
      notLoggedIn: true,
      loggedIn: false,
      userId: '',
      myPage: ''
    }
  },
  methods: {
    async gotoMyPage (event) {
      if (this.$store.state.user) {
        try {
          const user = await this.$store.state.user
          this.myPage = '/mypage/' + user.email.split('@')[0]
          this.$router.push(this.myPage)
        } catch (e) {
          console.error(e.message)
        }
      }
    },
    async logout (event) {
      if (this.$store.state.user) {
        try {
          await firebase.auth().signOut()
          localStorage.clear()
          this.$router.push('/')
        } catch (e) {
          console.error(e.message)
        }
      }
    }
  }
}
</script>
<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
#developer {
  color: gray;
}

</style>
