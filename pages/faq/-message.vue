<template>
  <div class="message">
    <p>
      눈송백서에 적힌 내용이 간혹 틀렸거나, 새로운 내용을 곧바로 반영하지 못했을 수도 있습니다.<br>보다 정확한 내용은 스노위의 최신 공지사항을 확인하거나 학사팀에 문의하여 확인하시기 바랍니다.
    </p>
    <p>
      틀린 내용을 발견하셨다면 개발자에게 정정요청을 보내 다른 송이들도 정확한 정보를 알 수 있게 도와주세요!
    </p>
    <b-button size="sm" variant="success">
      <NuxtLink to="/qnaform">
        정정요청하기
      </NuxtLink>
    </b-button>
  </div>
</template>
<style>
.message {
  margin: -1.5rem auto 2rem auto;
  font-size: 12px;
}
</style>
