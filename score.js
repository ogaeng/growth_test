// 각 유형별 누적 점수를 저장할 전역 변수입니다.
var scoreA = 0;
var scoreB = 0;
var scoreC = 0;

// 문제 진행 변수 (문항 번호, 초기값 1)
var i = 1;

// 테스트 시작 함수: 시작 화면(#main)을 숨기고, 문제 화면(#test)을 표시합니다.
var testStart = function () {
  document.querySelector("#main").style.display = "none";
  document.querySelector("#test").style.display = "block";
  sendEvent("startTest");
  
  // i를 0으로 설정하여 next() 함수에서 i++가 실행되면 1이 되도록 함
  i = 0;
  next();
};

document.querySelector("#start_btn").addEventListener("click", testStart);

// 문제 진행 함수: 모든 문항이 끝나면 결과 화면(#result)을 표시합니다.
var next = function () {
  i++;
  // console.log(`다음 문항 ${i}로 이동`);
  
  // testNum 객체의 키 목록을 가져와서 최대 문항 수 확인
  var questionKeys = Object.keys(testNum);
  var maxQuestions = Math.max(...questionKeys);
  // console.log(`최대 문항 수: ${maxQuestions}, 현재 문항: ${i}`);
  
  if (i > maxQuestions) { // 마지막 문항 이후
    // console.log("모든 문항 완료, 결과 화면으로 전환");
    document.querySelector("#test").style.display = "none";
    document.querySelector("#result").style.display = "block";
    
    // 최종 점수 로그
    // console.log(`최종 점수: A=${scoreA}, B=${scoreB}, C=${scoreC}`);
    
    // 최종 누적 점수를 비교해 가장 높은 점수를 받은 유형을 결정합니다.
    var finalType;
    if (scoreA >= scoreB && scoreA >= scoreC) {
      finalType = "A";
    } else if (scoreB >= scoreA && scoreB >= scoreC) {
      finalType = "B";
    } else {
      finalType = "C";
    }
    
    var totalScore = scoreA + scoreB + scoreC;
    
    // 결과 스타일링은 이제 Tailwind CSS 클래스로 처리
    document.querySelector("#result").classList.add("block");
    
    // 유형 및 제목 설정
    document.querySelector("#result_title").innerHTML = result[finalType]["type"];
    
    // 결과 설명 업데이트
    document.querySelector("#result_explain").innerHTML = result[finalType]["title"];
    
    // 결과 세부 내용 파싱
    var resultTextContent = result[finalType]["text"];
    var textParts = resultTextContent.split('\n');
    
    // 첫 줄은 소개 텍스트로 설정
    document.querySelector("#result_intro").innerHTML = textParts[0];
    
    // 지원 내용 항목을 테이블로 변환
    var supportItemsHtml = '';
    
    // 불릿 포인트 항목 파싱 (•로 시작하는 줄)
    for (var j = 1; j < textParts.length; j++) {
      var line = textParts[j].trim();
      if (line.startsWith('•')) {
        var itemText = line.substring(1).trim();
        
        // 항목과 설명 분리 (있을 경우)
        var itemParts = itemText.split(':');
        var itemTitle = itemParts[0].trim();
        var itemDesc = itemParts.length > 1 ? itemParts[1].trim() : '';
        
        // 설명이 없는 경우, 제목 전체를 표시
        if (itemDesc === '') {
          supportItemsHtml += `
            <tr>
              <td class="py-3 px-4 text-base font-medium text-gray-900 text-center" colspan="2">${itemTitle}</td>
            </tr>
          `;
        } else {
          supportItemsHtml += `
            <tr>
              <td class="py-3 px-4 text-base font-medium text-primary text-center">${itemTitle}</td>
              <td class="py-3 px-4 text-base text-gray-700 text-center">${itemDesc}</td>
            </tr>
          `;
        }
      }
    }
    
    document.querySelector("#support_items").innerHTML = supportItemsHtml;
    
    // 마지막 텍스트 줄은 결론으로 설정 (불릿 포인트 이후의 텍스트)
    var conclusionFound = false;
    for (var k = textParts.length - 1; k >= 0; k--) {
      if (!textParts[k].trim().startsWith('•') && textParts[k].trim() !== '') {
        if (k > 0) { // 첫 줄이 아닌 경우 (첫 줄은 이미 소개로 사용)
          document.querySelector("#result_conclusion").innerHTML = textParts[k];
          conclusionFound = true;
        }
        break;
      }
    }
    
    // 결론이 없는 경우 요소 숨김
    if (!conclusionFound) {
      document.querySelector("#result_conclusion").style.display = "none";
    }
    
    // console.log(`결과 화면 업데이트 완료: ${finalType} 유형`);
    resultEvent("viewResult", result[finalType]["type"], scoreA, scoreB, scoreC);
  } else {
    // 문항이 존재하는지 확인
    if (!testNum[i]) {
      // console.warn(`문항 ${i}가 존재하지 않습니다. 다음 문항 탐색`);
      i++; // 존재하지 않으면 다음 문항으로
      if (i > maxQuestions) {
        // console.log("더 이상 문항이 없음, 결과 화면으로 전환");
        // 결과 화면 표시 로직
        document.querySelector("#test").style.display = "none";
        document.querySelector("#result").style.display = "block";
        // console.log(`최종 점수: A=${scoreA}, B=${scoreB}, C=${scoreC}`);
        return;
      }
    }
    
    // testNum[i] 객체 구조 로그
    // console.log(`현재 문항 객체:`, testNum[i]);
    
    try {
      // 문제 화면 업데이트
      document.querySelector("#number").innerHTML = "문제 " + i + "/18";
      document.querySelector("#progress").style.width = (i / 18) * 100 + "%";
      document.querySelector("#title").innerHTML = testNum[i]["title"];
      document.querySelector("#desc").innerHTML = testNum[i]["desc"];
      
      // 선택지 업데이트 - 옵션 텍스트를 span으로 감싸 스타일링 개선
      document.querySelector("#btnA").innerHTML = '<span class="inline-flex justify-center items-center bg-primary text-white rounded-full w-6 h-6 mr-3 flex-shrink-0 text-sm">A</span><span class="option-text">' + testNum[i]["A"] + '</span>';
      document.querySelector("#btnB").innerHTML = '<span class="inline-flex justify-center items-center bg-primary text-white rounded-full w-6 h-6 mr-3 flex-shrink-0 text-sm">B</span><span class="option-text">' + testNum[i]["B"] + '</span>';
      document.querySelector("#btnC").innerHTML = '<span class="inline-flex justify-center items-center bg-primary text-white rounded-full w-6 h-6 mr-3 flex-shrink-0 text-sm">C</span><span class="option-text">' + testNum[i]["C"] + '</span>';
      
      // console.log(`문항 ${i} 화면 업데이트 완료`);
      viewQuestion(i, testNum[i]["title"]);
      
      // 선택 상태 초기화
      clearSelectionState();
      
    } catch (error) {
      // console.error(`문항 ${i} 화면 업데이트 중 오류 발생:`, error);
      // console.log(`문항 데이터:`, testNum[i]);
    }
  }
};

// 재시작 함수: 결과 화면에서 '다시 테스트하기' 버튼 클릭 시 테스트를 초기화합니다.
var retry = function () {
  sendEvent("retryTest");
  document.querySelector("#result").style.display = "none";
  document.querySelector("#main").style.display = "block";
  i = 1;
  scoreA = 0;
  scoreB = 0;
  scoreC = 0;
  history.replaceState({ data: "retry" }, "", "/");
};

document.querySelector("#retry_btn").addEventListener("click", retry);

// 초기 로딩시 testNum 객체 전체 구조 로그
// console.log('테스트 초기화');
// console.log('testNum 객체 구조:', testNum);
// console.log('시작 문항:', i);

// 선택한 버튼 강조 표시 함수
function selectOption(button) {
  // 모든 버튼에서 선택 클래스 제거
  clearSelectionState();
  
  // 클릭한 버튼에 선택 클래스 추가
  button.classList.add('option-selected');
}

// 선택 상태 초기화 함수
function clearSelectionState() {
  document.querySelector("#btnA").classList.remove('option-selected');
  document.querySelector("#btnB").classList.remove('option-selected');
  document.querySelector("#btnC").classList.remove('option-selected');
}

// 버튼 클릭 이벤트 리스너 수정 - 선택 효과 추가
var btnA = document.querySelector("#btnA");
var btnB = document.querySelector("#btnB");
var btnC = document.querySelector("#btnC");

// 기존 이벤트 리스너 제거 및 새 리스너 추가
btnA.removeEventListener("click", btnA.clickHandler);
btnB.removeEventListener("click", btnB.clickHandler);
btnC.removeEventListener("click", btnC.clickHandler);

// 새 이벤트 리스너 함수 정의
btnA.clickHandler = function() {
  // console.log(`문항 ${i} - A 선택함`);
  selectOption(btnA);
  if (!testNum[i]) {
    // console.error(`문항 ${i}가 존재하지 않습니다.`);
    return;
  }
  var current = testNum[i];
  scoreA += current.valueA.A;
  scoreB += current.valueA.B;
  scoreC += current.valueA.C;
  // console.log(`점수 업데이트: A=${scoreA}, B=${scoreB}, C=${scoreC}`);
  answerQuestion(i, "A");
  // 잠시 지연 후 다음 문항으로 이동 (선택 효과 표시를 위해)
  setTimeout(next, 300);
};

btnB.clickHandler = function() {
  // console.log(`문항 ${i} - B 선택함`);
  selectOption(btnB);
  if (!testNum[i]) {
    // console.error(`문항 ${i}가 존재하지 않습니다.`);
    return;
  }
  var current = testNum[i];
  scoreA += current.valueB.A;
  scoreB += current.valueB.B;
  scoreC += current.valueB.C;
  // console.log(`점수 업데이트: A=${scoreA}, B=${scoreB}, C=${scoreC}`);
  answerQuestion(i, "B");
  setTimeout(next, 300);
};

btnC.clickHandler = function() {
  // console.log(`문항 ${i} - C 선택함`);
  selectOption(btnC);
  if (!testNum[i]) {
    // console.error(`문항 ${i}가 존재하지 않습니다.`);
    return;
  }
  var current = testNum[i];
  scoreA += current.valueC.A;
  scoreB += current.valueC.B;
  scoreC += current.valueC.C;
  // console.log(`점수 업데이트: A=${scoreA}, B=${scoreB}, C=${scoreC}`);
  answerQuestion(i, "C");
  setTimeout(next, 300);
};

// 새 이벤트 리스너 등록
btnA.addEventListener("click", btnA.clickHandler);
btnB.addEventListener("click", btnB.clickHandler);
btnC.addEventListener("click", btnC.clickHandler);
