<template>
  <b-navbar class="footer" toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand class="mb-0">
      SMUWP ver.0.6.1
    </b-navbar-brand>
    <b-navbar-toggle target="footer-toggle-collapse" />
    <b-collapse id="footer-toggle-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="http://www.sookmyung.ac.kr/sookmyungkr/index.do" target="_blank">
          SMWU
        </b-nav-item>
        <b-nav-item href="https://portal.sookmyung.ac.kr/irj/portal" target="_blank">
          Portal
        </b-nav-item>
        <b-nav-item href="http://snowe.sookmyung.ac.kr/bbs5/index" target="_blank">
          Snowe
        </b-nav-item>
        <b-nav-item href="https://snowboard.sookmyung.ac.kr/" target="_blank">
          Snowboard
        </b-nav-item>
        <b-nav-item href="http://snoway.sookmyung.ac.kr/" target="_blank">
          Snoway
        </b-nav-item>
      </b-navbar-nav>
      <NuxtLink to="/admin" class="navbar-nav ml-auto" tag="b-nav-text">
        개발자: G.Yoo
      </NuxtLink>
    </b-collapse>
  </b-navbar>
</template>
<style>
.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  /* height: 9%; */
  font-size: 14px;
  position: static;
}
</style>
