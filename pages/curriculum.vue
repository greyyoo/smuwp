<template>
  <div class="allQuestions">
    <div class="head">
      <h3>전공별개설과목</h3>
      <p>순서는 가나다 순입니다.</p>
      <hr style="width: 60%; margin: auto">
    </div>
    <div class="list">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-50 variant="success" block>
            21학번 졸업학점 배정표
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-50" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              20년도 이전 학번이라면? <a href="http://www.sookmyung.ac.kr/sookmyungkr/1869/subview.do" target="_blank">과거 졸업학점 배정표 보러가기(링크)</a>
            </b-card-text>
            <b-card-img src="~/assets/2021졸업학점배정표.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-1 variant="success" block>
            IT공학전공
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/IT공학전공.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-2 variant="success" block>
            가족자원경영학과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/가족자원경영학과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-3 variant="success" block>
            경영학부
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/경영학부.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-4 variant="success" block>
            경제학부
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/경제학부.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-5 variant="success" block>
            공예과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/공예과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-6 variant="success" block>
            관현악과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/관현악과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-7 variant="success" block>
            교육학부
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-7" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/교육학부.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-51 variant="success" block>
            글로벌협력전공
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-51" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/글로벌협력전공.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-8 variant="success" block>
            기계시스템학부
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/기계시스템학부.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-9 variant="success" block>
            기초공학부
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/기초공학부.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-10 variant="success" block>
            독일언어문화학과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-10" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/독일언어문화학과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-11 variant="success" block>
            르꼬르동블루외식경영전공
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-11" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/르꼬르동블루외식경영전공.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-12 variant="success" block>
            무용과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-12" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/무용과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-13 variant="success" block>
            문헌정보학과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-13" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/문헌정보학과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-14 variant="success" block>
            문화관광학전공
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-14" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/문화관광학전공.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-15 variant="success" block>
            미디어학부
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-15" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/미디어학부.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-16 variant="success" block>
            법학부
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-16" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/법학부.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-17 variant="success" block>
            사회심리학과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-17" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/사회심리학과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-18 variant="success" block>
            산업디자인과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-18" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/산업디자인과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-19 variant="success" block>
            생명시스템학부
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-19" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/생명시스템학부.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-20 variant="success" block>
            성악과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-20" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/성악과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-21 variant="success" block>
            소비자경제학과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-21" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/소비자경제학과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-22 variant="success" block>
            소프트웨어융합전공
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-22" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/소프트웨어융합전공.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-23 variant="success" block>
            수학과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-23" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/수학과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-24 variant="success" block>
            시각영상디자인과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-24" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/시각영상디자인과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-25 variant="success" block>
            식품영양학과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-25" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/식품영양학과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-26 variant="success" block>
            아동복지학부
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-26" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/아동복지학부.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-27 variant="success" block>
            앙트러프러너십전공
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-27" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/앙트러프러너십전공.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-28 variant="success" block>
            역사문화학과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-28" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/역사문화학과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-29 variant="success" block>
            영어영문학전공
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-29" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/영어영문학전공.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-30 variant="success" block>
            응용물리전공
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-30" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/응용물리전공.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-31 variant="success" block>
            의류학과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-31" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/의류학과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-32 variant="success" block>
            일본학과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-32" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/일본학과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-33 variant="success" block>
            작곡과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-33" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/작곡과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-34 variant="success" block>
            전자공학전공
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-34" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/전자공학전공.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-35 variant="success" block>
            정치외교학과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-35" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/정치외교학과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-36 variant="success" block>
            중어중문학부
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-36" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/중어중문학부.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-37 variant="success" block>
            체육교육과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-37" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/체육교육과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-38 variant="success" block>
            컴퓨터과학전공
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-38" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/컴퓨터과학전공.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-39 variant="success" block>
            테슬(TESL)전공
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-39" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/테슬(TESL)전공.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-40 variant="success" block>
            통계학과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-40" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/통계학과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-41 variant="success" block>
            프랑스언어문화학과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-41" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/프랑스언어문화학과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-42 variant="success" block>
            피아노과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-42" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/피아노과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-43 variant="success" block>
            한국어문학부
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-43" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/한국어문학부.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-44 variant="success" block>
            행정학과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-44" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/행정학과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-45 variant="success" block>
            홍보광고학과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-45" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/홍보광고학과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-46 variant="success" block>
            화공생명공학부
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-46" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/화공생명공학부.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-47 variant="success" block>
            화학과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-47" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/화학과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-48 variant="success" block>
            환경디자인과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-48" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/환경디자인과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-49 variant="success" block>
            회화과
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-49" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-img src="~/assets/curriculum/회화과.jpg" />
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>
<style>
.allQuestions {
  text-align: center;
  margin: 5rem auto 5rem auto;
  width: 90%;
}
.head {
  margin: 2rem auto;
}
.listing {
  text-align: left;
  margin: 1rem auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}
</style>
