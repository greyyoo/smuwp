<template>
  <div class="signup">
    <h3>회원가입</h3>
    <b-form @submit="createUser">
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
        <b-form-text v-show="shortPassword" text-variant="danger">
          비밀번호는 8자 이상이어야 합니다.
        </b-form-text>
      </b-form-group>
      <b-form-group id="form-nickName">
        <label for="nickName">닉네임</label>
        <b-form-input id="nickName" v-model="form.nickName" required maxlength="20" />
        <b-form-text v-show="nickNameNotAllowed" text-variant="danger">
          중복되거나 사용할 수 없는 닉네임입니다.
        </b-form-text>
      </b-form-group>
      <b-form-group id="form-name">
        <label for="name">이름</label>
        <b-form-input id="name" v-model="form.name" required />
      </b-form-group>
      <b-form-group id="form-major">
        <label for="major">전공</label>
        <b-form-select id="major" v-model="form.major" :options="majors" required />
        <b-form-text v-show="majorNotSelected" text-variant="danger">
          전공을 선택해야 합니다.
        </b-form-text>
      </b-form-group>
      <b-form-group id="form-hakbeon">
        <label for="hakbeon">학번</label>
        <b-form-select id="hakbeon" v-model="form.hakbeon" :options="hakbeons" required />
        <b-form-text v-show="hakbeonNotSelected" text-variant="danger">
          학번을 선택해야 합니다.
        </b-form-text>
      </b-form-group>
      <b-form-group id="form-termsAndUse">
        <b-form-checkbox v-model="form.termsAndUse" value="true" unchecked-value="false">
          눈송백서의&nbsp;
          <NuxtLink to="/terms">
            가입약관, 개인정보 수집 및 이용
          </NuxtLink>
          에 동의합니다.
        </b-form-checkbox>
        <b-form-text v-show="notAgreed" text-variant="danger">
          가입약관, 개인정보 수집 및 이용에 동의해야 합니다.
        </b-form-text>
      </b-form-group>
      <b-button type="submit" variant="primary">
        회원가입
      </b-button>
      <b-form-text v-if="errorMessage" text-variant="danger">
        {{ errorMessage }}
      </b-form-text>
    </b-form>
  </div>
</template>
<script>
import firebase from '@firebase/app'
import { userinfo } from '~/plugins/firebase'
import '@firebase/auth'
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        hakbeon: null,
        termsAndUse: 'false',
        major: null,
        nickName: ''
      },
      hakbeons: [
        { value: '21', text: '21학번' },
        { value: '20', text: '20학번' },
        { value: '19', text: '19학번' },
        { value: '18', text: '18학번' },
        { value: '17', text: '17학번' },
        { value: '16', text: '16학번' },
        { value: '15', text: '15학번' }
      ],
      majors: [
        { value: 'IT공학전공', text: 'IT공학전공' },
        { value: '가족자원경영학과', text: '가족자원경영학과' },
        { value: '경영학부', text: '경영학부' },
        { value: '경제학부', text: '경제학부' },
        { value: '공예과', text: '공예과' },
        { value: '관현악과', text: '관현악과' },
        { value: '교육학부', text: '교육학부' },
        { value: '글로벌협력전공', text: '글로벌협력전공' },
        { value: '기계시스템학부', text: '기계시스템학부' },
        { value: '기초공학부', text: '기초공학부' },
        { value: '독일언어문화학과', text: '독일언어문화학과' },
        { value: '르꼬르동블루외식경영전공', text: '르꼬르동블루외식경영전공' },
        { value: '무용과', text: '무용과' },
        { value: '문헌정보학과', text: '문헌정보학과' },
        { value: '문화관광학전공', text: '문화관광학전공' },
        { value: '미디어학부', text: '미디어학부' },
        { value: '법학부', text: '법학부' },
        { value: '사회심리학과', text: '사회심리학과' },
        { value: '산업디자인과', text: '산업디자인과' },
        { value: '생명시스템학부', text: '생명시스템학부' },
        { value: '성악과', text: '성악과' },
        { value: '소비자경제학과', text: '소비자경제학과' },
        { value: '소프트웨어융합전공', text: '소프트웨어융합전공' },
        { value: '수학과', text: '수학과' },
        { value: '시각영상디자인과', text: '시각영상디자인과' },
        { value: '식품영양학과', text: '식품영양학과' },
        { value: '아동복지학부', text: '아동복지학부' },
        { value: '앙트러프러너십전공', text: '앙트러프러너십전공' },
        { value: '역사문화학과', text: '역사문화학과' },
        { value: '영어영문학전공', text: '영어영문학전공' },
        { value: '응용물리전공', text: '응용물리전공' },
        { value: '의류학과', text: '의류학과' },
        { value: '일본학과', text: '일본학과' },
        { value: '작곡과', text: '작곡과' },
        { value: '전자공학전공', text: '전자공학전공' },
        { value: '정치외교학과', text: '정치외교학과' },
        { value: '중어중문학부', text: '중어중문학부' },
        { value: '체육교육과', text: '체육교육과' },
        { value: '컴퓨터과학전공', text: '컴퓨터과학전공' },
        { value: '테슬전공', text: '테슬전공' },
        { value: '통계학과', text: '통계학과' },
        { value: '프랑스언어문화학과', text: '프랑스언어문화학과' },
        { value: '피아노과', text: '피아노과' },
        { value: '한국어문학부', text: '한국어문학부' },
        { value: '행정학과', text: '행정학과' },
        { value: '홍보광고학과', text: '홍보광고학과' },
        { value: '화공생명공학부', text: '화공생명공학부' },
        { value: '화학과', text: '화학과' },
        { value: '환경디자인과', text: '환경디자인과' },
        { value: '회화과', text: '회화과' }
      ],
      shortPassword: false,
      notAgreed: false,
      hakbeonNotSelected: false,
      majorNotSelected: false,
      nickNameNotAllowed: false,
      errorMessage: null
    }
  },
  methods: {
    async createUser (event) {
      event.preventDefault()
      if (this.form.password.length < 8) {
        this.shortPassword = true
      } else {
        this.shortPassword = false
      }
      if (this.form.termsAndUse === 'false') {
        this.notAgreed = true
      } else {
        this.notAgreed = false
      }
      if (this.form.hakbeon === null) {
        this.hakbeonNotSelected = true
      } else {
        this.hakbeonNotSelected = false
      }
      if (this.form.major === null) {
        this.majorNotSelected = true
      } else {
        this.majorNotSelected = false
      }
      if (this.form.nickName === '관리자') {
        this.nickNameNotAllowed = true
      } else {
        this.nickNameNotAllowed = false
      }
      if (this.nickNameNotAllowed === false && this.shortPassword === false && this.notAgreed === false && this.hakbeonNotSelected === false && this.majorNotSelected === false) {
        try {
          // eslint-disable-next-line
          const userCreated = await firebase.auth().createUserWithEmailAndPassword(this.form.email + '@sookmyung.ac.kr', this.form.password)
            .then(() => {
              const user = firebase.auth().currentUser
              user.updateProfile({
                displayName: this.form.nickName,
                photoURL: 'https://www.' + this.form.hakbeon + '.com'
              })
              const userData = {
                ID: this.form.email,
                Email: this.form.email + '@sookmyung.ac.kr',
                Name: this.form.name,
                Major: this.form.major,
                Hakbeon: this.form.hakbeon,
                SignUpDate: firebase.firestore.Timestamp.fromDate(new Date()),
                StudentIDVerified: false,
                isAdmin: false,
                UID: user.uid,
                NickName: this.form.nickName
              }
              userinfo.doc(userData.ID).set(userData)
              // firebase.auth().currentUser.sendEmailVerification()
              this.$router.push('/verifystuid')
            })
        // eslint-disable-next-line
        } catch (e) {
          this.errorMessage = e.message
        }
      }
    }
  }
}
</script>
<style>
.sookmyung {
  font-size: 20px;
}
.signup {
  width: 85%;
  max-width: 500px;
  margin: 3rem auto;
}
</style>
