// 질문리스트에 보여질 질문 객체로 문제 순서에 따라 각각 제목, 설명, 답변버튼, 답변에 해당하는 점수를 만들어 놓는다.

var testNum = {
  1: {
    title: "문제 1번",
    desc: '광고 계정에 직접 들어가서 데이터를 보고 성과를 분석할 수 있다.',
    A: "그렇다",
    valueA: 0,
    B: "아니다",
    valueB: 0,
    C: "모르겠다",
    valueC: 0
  },
  2: {
    title: "문제 2번",
    desc: '광고 매체에서 제공하는 보고서가 아닌, 주요지표 보고서를 자체적으로 만들어 효율을 체크하고 있다.',
    A: "그렇다",
    valueA: 0,
    B: "아니다",
    valueB: 0,
    C: "모르겠다",
    valueC: 0
  },
  3: {
    title: "문제 3번",
    desc: '고객 세그먼트를 이용해 세부적인 타겟팅 광고를 집행하고 있다.',
    A: "그렇다",
    valueA: 0,
    B: "아니다",
    valueB: 0,
    C: "모르겠다",
    valueC: 0
  },
  4: {
    title: "문제 4번",
    desc: 'Paid/오가닉 매체의 운영 목표가 수치화 되어있고 그 전환당 비용에 대해 잘 파악하고 있다.',
    A: "그렇다",
    valueA: 0,
    B: "아니다",
    valueB: 0,
    C: "모르겠다",
    valueC: 0
  },
  5: {
    title: "문제 5번",
    desc: 'CTR, CPC, CVR, CPA, CAC 등의 디지털 마케팅 주요 기본 용어들이 뭔지 알고 설명할 수 있다. ',
    A: "그렇다",
    valueA: 0,
    B: "아니다",
    valueB: 0,
    C: "모르겠다",
    valueC: 0
  },
  6: {
    title: "문제 6번",
    desc: '페이스북/인스타그램, 네이버 검색광고 등 광고의 소재, 광고그룹 세팅 등을 직접 진행할 수 있다.',
    A: "그렇다",
    valueA: 0,
    B: "아니다",
    valueB: 0,
    C: "모르겠다",
    valueC: 0
  },
  7: {
    title: "문제 7번",
    desc: '사용자 유입 데이터를 활용해서 유저 행동/전환 현황을 확인할 수 있다.',
    A: "그렇다",
    valueA: 1,
    B: "아니다",
    valueB: -1,
    C: "모르겠다",
    valueC: -1
  },
  8: {
    title: "문제 8번",
    desc: '현재 웹사이트 혹은 모바일 앱에서 유입, 조회, 검색, 구매, 가입 등의 유저 행동 데이터를 수집하고 있다.',
    A: "그렇다",
    valueA: 1,
    B: "아니다",
    valueB: -1,
    C: "모르겠다",
    valueC: -1
  },
  9: {
    title: "문제 9번",
    desc: '현재 광고 추적을 위한 공통/전환 스크립트가 심어져 있다.',
    A: "그렇다",
    valueA: 1,
    B: "아니다",
    valueB: -1,
    C: "모르겠다",
    valueC: -1
  },
  10: {
    title: "문제 10번",
    desc: 'UTM(또는 추적 파라미터)의 개념을 알고 설명할 수 있다.',
    A: "그렇다",
    valueA: 1,
    B: "아니다",
    valueB: -1,
    C: "모르겠다",
    valueC: -1
  },
  11: {
    title: "문제 11번",
    desc: `트래킹을 위한 '이벤트'의 개념에 대해 알고 있으며 자사 서비스의 이벤트 구조를 직접 설계할 수 있다.`,
    A: "그렇다",
    valueA: 1,
    B: "아니다",
    valueB: -1,
    C: "모르겠다",
    valueC: -1
  },
  12: {
    title: "문제 12번",
    desc: '수집하고 있는 사용자의 행동 데이터를 정리한 이벤트 정의서(택소노미) 문서가 있다.',
    A: "그렇다",
    valueA: 1,
    B: "아니다",
    valueB: -1,
    C: "모르겠다",
    valueC: -1
  },
  13: {
    title: "문제 13번",
    desc: '자사 주력 제품의 최근 3개월 전환 추이를 파악하고 있다.',
    A: "그렇다",
    valueA: 0,
    B: "아니다",
    valueB: 0,
    C: "모르겠다",
    valueC: 0
  },
  14: {
    title: "문제 14번",
    desc: '자사 제품/서비스의 핵심 타겟이 어떤 사람들인지 설명할 수 있다.',
    A: "그렇다",
    valueA: 0,
    B: "아니다",
    valueB: 0,
    C: "모르겠다",
    valueC: 0
  },
  15: {
    title: "문제 15번",
    desc: '최근 1개월 내 자사 제품/서비스가 직면한 문제 상황을 파악하고 있다.',
    A: "그렇다",
    valueA: 0,
    B: "아니다",
    valueB: 0,
    C: "모르겠다",
    valueC: 0
  },
  16: {
    title: "문제 16번",
    desc: '월별, 분기별 마케팅팀의 최우선 달성 목표(KPI)를 알고 있으며 최근 달성 현황이 어떤지 설명할 수 있다.',
    A: "그렇다",
    valueA: 0,
    B: "아니다",
    valueB: 0,
    C: "모르겠다",
    valueC: 0
  },
};

// result라는 결과 객체를 json형태로 만들고 결과 유형에 따른 결과 타이틀과 결과에 대한 설명을 그에 맞게 넣어준다.
// A~J라는 타입 유형은 값을 전달하는데만 사용되므로 값은 바꿔도 좋으며, 변경할 때 아래 score 범위에 들어가는 타입 값도 반드시 함께 바꿔야 한다.

var result = {
  B: {
    type: "[유형 1]",
    title: "데이터 분석환경 구축 및 시각화",
    text: `지금은 데이터 분석 환경 구축이 필요한 단계입니다.<br>유형 1을 통해 GA4, BigQuery, Looker Studio 등을 활용한 데이터 환경을 만들어보세요.`
  },
  A: {
    type: "[유형 2]",
    title: "그로스해킹 기반 데이터 활용 및 컨설팅",
    text: `데이터 마케팅을 위해 필요한 역량을 갖추고 있는 기업으로 판단됩니다.<br>그로스해킹 지원사업을 통해 더욱 효과적인 마케팅 성과를 만들어보세요.`
  }
};

// 테스트를 시작하는 함수
// testStart라는 변수를 만들고 #main의 내용이 보여지지 않고, 보여지지 않던 #test의 내용이 보여지도록 하는 내용을 넣는다.
var testStart = function () {
  document.querySelector("#main").style.display = "none";
  document.querySelector("#test").style.display = "block";
  sendEvent("startTest"); // 테스트 시작 데이터영역 실행
  next();
};

// #start_btn이라는 영역에 이벤트리스너를 넣고 click시 testStart를 작동하게 한다.
document.querySelector("#start_btn").addEventListener("click", testStart);

//#btnA 등 각각 답변 버튼 4개가 속한 영역를 뜻하는 변수로 만든다.
var selectA = document.querySelector("#btnA");
var selectB = document.querySelector("#btnB");
var selectC = document.querySelector("#btnC");

// 테스트 결과에 따른 합계점수를 넣을 score라는 변수를 만들고 초기 값은 0으로 설정한다.
var score = 0;
var count = 0;

// btnA라는 값이 들어간 div태그 id영역에 이벤트리스너를 넣고 클릭 시 아래와 같은 함수가 작동하게 한다.
// score라는 변수에 testNum[질문번호][질문번호와 버튼에 해당하는 점수]을 숫자형태로 더하고 next라는 함수가 작동한다.
document.querySelector("#btnA").addEventListener("click", function () {
  score += parseInt(testNum[i - 1]["valueA"]);
  if (testNum[i - 1]["valueA"] > 5) {
    count += 1;
  }
  answerQuestion(i - 1, "A"); // 정답 선택 데이터영역 실행
  next();
});

document.querySelector("#btnB").addEventListener("click", function () {
  score += parseInt(testNum[i - 1]["valueB"]);
  if (testNum[i - 1]["valueB"] > 5) {
    count += 1;
  }
  answerQuestion(i - 1, "B"); // 정답 선택 데이터영역 실행
  next();
});

document.querySelector("#btnC").addEventListener("click", function () {
  score += parseInt(testNum[i - 1]["valueC"]);
  if (testNum[i - 1]["valueC"] > 5) {
    count += 1;
  }
  answerQuestion(i - 1, "C"); // 정답 선택 데이터영역 실행
  next();
});

// 문제 번호를 의미하는 변수 i를 생성한다.
// 이 후 답을 클릭할 때 변수 i에 1씩 숫자를 더해 질문번호가 넘어가고 그에 맞는 값을 가져오는 중요한 역할을 한다.
var i = 1;

// next라는 변수를 만들고 "다음 액션"에 대한 내용을 넣는다.
// 특히 문제가 총 10개로 기획되었기 떄문에 i == 11이 되면 #test 화면이 사라지고, #result 화면이 나타나는 것으로 시작한다.
// 그리고 10문제동안 득점한 score에 따라 각각 범위에 맞는 scoreRange를 얻는다.
// 이렇게 얻은 scoreRange는 결과에 따른 제목, 설명, 이미지 등을 노출할 때 중요한 역할을 한다.
var next = function () {
  if (i == 17) {
    document.querySelector("#test").style.display = "none";
    document.querySelector("#result").style.display = "block";
    if (score > 0) {
      var scoreRange = "A";
      var scoreElement = document.getElementById('score');
      scoreElement.src = "img/growth.png";
    } else {
      var scoreRange = "B";
      var scoreElement = document.getElementById('score');
      scoreElement.src = "img/data.png";
    }
    // 결과 도출 화면
    // #score부분에 들어가는 텍스트는 score에 쌓인 점수로 교체한다.
    // #result_title에는 결과 객체에서 scoreRange에 맞는 유형의 explain에 할당된 값이 대체되어 보여진다.
    document.querySelector("#score").innerHTML = "<br>" + score + "점";
    document.querySelector("#count").innerHTML = "1";
    document.querySelector("#result_title").innerHTML = result[scoreRange]["type"];
    document.querySelector("#result_explain").innerHTML = result[scoreRange]["title"];
    document.querySelector("#result_text").innerHTML = result[scoreRange]["text"];

    resultEvent("viewResult", result[scoreRange]["type"]); // 테스트 결과 데이터영역 실행
  } else {
    // i가 11보다 작은 수라면 변수 i에 따라 질문 리스트 내용이 변한다.
    // 변하는 항목은 문제번호, 진행상황 바, 질문 제목, 질문 설명, 버튼 설명이고 버튼 선택 후 i에 1만큼 더해진다.
    document.querySelector("#number").innerHTML = i + "/16";
    document.querySelector("#progress").style.width = (i / 16) * 100 + "%";
    document.querySelector("#title").innerHTML = testNum[i]["title"];
    document.querySelector("#desc").innerHTML = testNum[i]["desc"];
    document.querySelector("#btnA").innerHTML = testNum[i]["A"];
    document.querySelector("#btnB").innerHTML = testNum[i]["B"];
    document.querySelector("#btnC").innerHTML = testNum[i]["C"];
    viewQuestion(i, testNum[i]["title"]); // 문제 보기 데이터영역 실행
    i++;
  }
};

// 다시 시작하기 함수
// retry라는 변수를 만들고 #result 내용이 사라지고, #test 내용이 나타나게 만든다.
// 이 때, i=1로 초기화하고, score는 =0으로 초기화한 다음 next(226행 참고) 함수를 실행시킨다.
var retry = function () {
  sendEvent("retryTest");
  document.querySelector("#result").style.display = "none";
  document.querySelector("#main").style.display = "block";
  i = 1;
  score = 0;
  count = 0;
  history.replaceState({ data: "retry" }, "", "/");
};
// #retry_btn에 이벤트리스너를 넣고 'click' 되었을 때 retry가 실행되도록 한다.
document.querySelector("#retry_btn").addEventListener("click", retry);
