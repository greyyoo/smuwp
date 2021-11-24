<template>
  <div>
    <b-jumbotron class="index-message" bg-variant="light" text-variant="success" border-variant="light">
      <template #header>
        눈송백서
      </template>
      <div>
        <h5>
          모르는 것 빼고 다 아는<br>눈송백서에서 학교생활에 대한<br>모든 궁금증을 해결해 보세요.
        </h5>
        <h4 style="color: red">
          2021년 7월 5일부로 더이상의 업데이트가 없을 예정입니다.<br>가장 최신화된 정보는 학교 홈페이지와 스노위 공지사항을 확인하시기 바랍니다.
        </h4>
        <p style="color: red">
          눈송백서에 가입하신 회원의 회원정보 및 작성하신 문의내용은 2021년 7월 5일 일괄 삭제하였습니다.<br>눈송백서를 찾아주신 눈송이분들께 진심으로 감사드립니다! 나중에 다른 프로젝트로 또 만나요 :)
        </p>
        <SearchBar />
        <p style="color: gray; font-size: 11px">
          모바일에서는 키워드 입력 후 띄어쓰기를 해야 검색결과가 표시돼요!
        </p>
      </div>
      <div class="gongji">
        <div class="wrapperGongji">
          <h5 class="text-primary">
            ❄<strong>눈송백서</strong>x<strong>퀵숙</strong>❄
          </h5>
          <b-button variant="primary" class="download" href="https://chrome.google.com/webstore/detail/%ED%80%B5%EC%88%99-quick-sookmyung/ojiacghdlkbcfphkggebiiblbhheiopc" target="_blank">
            퀵숙 <img class="logos" src="~/assets/chrome.png">
          </b-button>
          <b-button variant="primary" class="download" href="https://store.whale.naver.com/detail/lniagbhflokdpfoilcmcpdmaphllolai" target="_blank">
            퀵숙 <img class="logos" src="~/assets/whale.png">
          </b-button>
        </div>
        <div class="wrapperGongji">
          <h5>
            2021 신입생 수강신청 가이드
          </h5>
          <b-button variant="success" class="download" href="https://snowe.sookmyung.ac.kr/bbs5/attachments/57050512" download="https://snowe.sookmyung.ac.kr/bbs5/attachments/57050512">
            공식 수강신청 가이드 다운로드
          </b-button>
        </div>
      </div>
    </b-jumbotron>
    <div class="QnA">
      <h3>
        원하는 내용이 없다면?
      </h3>
      <h5 class="givemargin">
        학교 공식 FAQ도 찾아보세요
      </h5>
      <b-button variant="success">
        <a href="http://snowe.sookmyung.ac.kr/bbs5/boards/academicFaq" target="_blank">
          스노위 학사FAQ 바로가기
        </a>
      </b-button>
    </div>
  </div>
</template>
<script>
import SearchBar from './-search-bar'
export default {
  components: {
    SearchBar
  }
}
</script>
<style>
.index-message {
  text-align: center;
}
.gongji {
  margin: 0rem auto;
  text-align: center;
}
.QnA {
  margin: 0rem auto 3rem auto;
  text-align: center;
}
.givemargin {
  margin: 2rem auto 2rem auto;
}
.download {
  margin: 1rem auto 0rem auto;
}
.logos {
  width: 20px;
  height: 20px;
}
.wrapperGongji {
  margin: 2rem auto;
  text-align: center;
}
</style>
