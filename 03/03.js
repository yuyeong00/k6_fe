// alert("안녕")

// 버튼1 누르면 메세지영역에 글씨 나오게 하기 (로그인버튼)

/*
함수 작성 1
*/
// function handleClick(n) {
//     메시지영역 가져오기
//     document.getElementById("msgArea").innerHTML = "안녕하세요";
//     (메시지영역div집고). innerHTML속성
    
//     //메시지영역 가져오기2 //HTML이라 스타일태그 적용가능
//     document.querySelector("#msgArea").innerHTML = "<h2>버튼 " + n + " 눌러졌습니다.</h2>"

//     document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n} 눌러졌습니다.</h2>`; //백틱 문자열
// }


/*
함수 작성 2 : 화살표 함수
*/
const handleClick = (n) => {
    document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n} 눌러졌습니다.</h2>`;
}