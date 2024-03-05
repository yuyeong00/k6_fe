document.addEventListener("DOMContentLoaded", () => {
    //DOM 생성 후 img input button 가져오기
  //  html에서 onclick 안만들때 동작하는것들 가져오기
  const updownImg = document.querySelector("img");
  const NumInput = document.querySelector("#num1");
  //   = document.getElementById("num1")
  const bt = document.querySelector("button");
  const msg = document.querySelector("#msg");


  //첫화면에서 인풋에 포커스
  NumInput.focus();


  //  랜덤수 생성 변수의 위치에 따라 랜덤수 고정범위
  let n;
  let flag = false;


  // 버튼에 클릭 이벤트 달기
  bt.addEventListener("click", () => {
    // form태그 썼을때
    // bt.addEventListener("click", (e) => {
    //     e.preventDefault();
    //if (flag == true) {
    

    if (!flag) {
      //랜덤수 생성
      n = Math.floor(Math.random() * 100) + 1; //1에서 100까지/Math.floor는 소수점떼기
      console.log("n=", n);
      flag = true;

      //성공 후 재시작 눌렀을때 초기화 시키기
      NumInput.style.display = "inline";
      bt.innerHTML = "확인"
      NumInput.value = "";
      NumInput.focus();
      updownImg.setAttribute("src", "./imgs/what.png")
    }


    //input박스 내용가져오기
    if (NumInput.value == "") {
      // alert("숫자를 입력하세요");
      msg.innerHTML = "숫자를 입력하세요";
      NumInput.focus();
      return;
    }
    

    //숫자 비교

    else if (NumInput.value < 1 || NumInput>100) {
        msg.innerHTML = "<span> 부터 100까지 숫자를 입력하세요 </span>";
    }

    if (n == parseInt(NumInput.value)) {
        msg.innerHTML = "<span> 정답 </span>";
        updownImg.setAttribute("src", "./imgs/good.png");
        bt.innerHTML = "<span>재시작</span>";
        NumInput.style.display = "none";
        flag = false ;
    }

    else if (n > NumInput.value) {
        msg.innerHTML = "<span> 업 </span>";
        updownImg.setAttribute("src", "./imgs/up.png");
        bt.innerHTML = "<span>다시</span>";
    }
    else {
        msg.innerHTML = "<span> 다운 </span>";
        updownImg.setAttribute("src", "./imgs/down.png");
        bt.innerHTML = "<span>다시</span>";
    }

  });
});
