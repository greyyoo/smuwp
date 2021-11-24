<template>
  <div id="login">
    <b-form @submit="signIn">
      <b-form-group id="form-email">
        <label for="email">이메일</label>
        <b-form inline>
          <b-form-input id="email" v-model="form.email" required />
          <b-form-text text-variant="black" class="sookmyung">
            @sookmyung.ac.kr
          </b-form-text>
        </b-form>
      </b-form-group>
      <b-form-group id="form-password">
        <label for="password">비밀번호</label>
        <b-form-input id="password" v-model="form.password" type="password" required />
      </b-form-group>
      <b-button type="submit" variant="primary">
        로그인
      </b-button>
      <b-form-text v-show="errorMessage" text-variant="danger">
        {{ errorMessage }}
      </b-form-text>
    </b-form>
  </div>
</template>
<script>
import firebase from '@firebase/app'
import '@firebase/auth'
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      errorMessage: null
    }
  },
  methods: {
    async signIn (event) {
      event.preventDefault()
      try {
        // eslint-disable-next-line
        const s = await firebase.auth().signInWithEmailAndPassword(this.form.email+'@sookmyung.ac.kr', this.form.password)
        const tk = firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        this.$axios.setToken('Bearer ' + tk)
        const data = this.$axios.get('https://us-central1-smuwhitepaper.cloudfunctions.net/widgets')
        // token 검증 후 200을 반환하면 로그인 성공, 실패시 강제 로그아웃 후 재시도 메시지 출력
        const stat = (await data).request.status
        if (stat === 200) {
          const user = firebase.auth().currentUser
          if (user.emailVerified) {
            this.$router.push('/')
          } else {
            this.$router.push('/mypage/' + user.email.split('@')[0])
          }
        } else {
          await firebase.auth().signOut()
          this.errorMessage = '오류가 발생했습니다. 다시 로그인하시거나 잠시 뒤 다시 시도해 주세요. 계속 오류가 발생할 경우 관리자에게 문의하세요.'
          location.reload()
        }
      // eslint-disable-next-line
      } catch (e) {
        this.errorMessage = e.message
      }
    }
  }
}
</script>
<style>
#login {
  width: 85%;
  margin: 5rem auto;
}
#form-password {
  max-width: 500px;
}
</style>
