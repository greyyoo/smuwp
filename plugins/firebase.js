import firebase from '@firebase/app'
import '@firebase/firestore'
import '@firebase/auth'
import '@firebase/analytics'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyCRJ7z5oDVIvQmAw37T0xRRof1JHKGHMz8',
    authDomain: 'smuwhitepaper.firebaseapp.com',
    projectId: 'smuwhitepaper',
    storageBucket: 'smuwhitepaper.appspot.com',
    messagingSenderId: '797698262453',
    appId: '1:797698262453:web:b49f90b9d54444e67d85fc',
    measurementId: 'G-0S00FPEDF9'
  }
  firebase.initializeApp(config)
  firebase.firestore().settings({ timestampsInSnapshots: true })
  firebase.analytics()
  firebase.auth()
}

export default function ({ store }) {
  firebase.auth().onAuthStateChanged(function (user) {
    store.commit('setUser', user)
    if (process.browser) {
      localStorage.setItem('userURL', user.photoURL)
      localStorage.setItem('isVerified', user.emailVerified)
      localStorage.setItem('userEmail', user.email)
      localStorage.setItem('userNickName', user.displayName)
      if (localStorage.getItem('userEmail')) {
        localStorage.setItem('isLoggedIn', true)
      } else {
        localStorage.setItem('isLoggedIn', false)
      }
    }
  })
}

const fireDb = firebase.firestore()
const faq = fireDb.collection('FAQ')
const qna = fireDb.collection('QnA')
const auth = firebase.auth()
const forum = fireDb.collection('forum')
const authProviders = {
  provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
}
const userinfo = fireDb.collection('userinfo')
const veriflist = fireDb.collection('verificationlist')
export { auth }
export { authProviders }
export { fireDb }
export { faq }
export { qna }
export { userinfo }
export { forum }
export { veriflist }
