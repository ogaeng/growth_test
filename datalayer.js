// 단순 이벤트명만 필요한 데이터영역
function sendEvent(name) {
  dataLayer.push({
    event: name,
  });
}

// 문제 보기 이벤트를 위한 데이터영역
function viewQuestion(no, title) {
  dataLayer.push({
    event: "viewQuestion",
    no: no,
    title: title,
  });
}

// 정답 선택 이벤트를 위한 데이터영역
function answerQuestion(no, anw) {
  dataLayer.push({
    event: "answerQuestion",
    no: no,
    answer: anw,
  });
}

// 결과 페이지의 이벤트를 위한 데이터영역
function resultEvent(name, type) {
  dataLayer.push({
    event: name,
    type: type
  });
}
