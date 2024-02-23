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
함수 작성 2 : 화살표 함수 () => {} 중괄호 주의!!!!!!!!
*/
const handleClick = (n) => {
    //msg라는 변수 생성
    let msg ;
    if (n==1) msg ="<h2>안녕</h2>";
    else if (n==4) msg = "<h2>안녕히가세요</h2>";
    else msg = "<h2>와와</h2>";


    document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n} 선택됨.</h2>`;
    
    // document.querySelector("#msgArea").innerHTML = msg;
}

//DOM tree가 완성된 후 실행
//함수안에 함수. 콜백함수. 화살표함수 사용
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded ok") ;
    
    //버튼 생성
    const bt3 = document.createElement("button") ;
    const bt3Txt = document.createTextNode("버튼3") ;   //버튼에 텍스트
    
    bt3.setAttribute("id", "bt3"); //속성 설정
//  bt3.getAttribute(); //속성 가져오기
    bt3.appendChild(bt3Txt) ;   //자식요소 추가

    //원하는 위치에 버튼 추가하기
    document.querySelector("#btArea2").append(bt3)

    //버튼에 이벤트 달기
    bt3.addEventListener("click", ()=>{
        handleClick(3);
    })

    //버튼4추가하기
    const bt4 = document.createElement("button");
    const bt4Txt = document.createTextNode("버튼4")
    bt4.appendChild(bt4Txt) ;
    document.querySelector("#btArea2").append(bt4)
    bt4.addEventListener("click", ()=> {
        handleClick(4);
    })

}) ;