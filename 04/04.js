document.addEventListener("DOMContentLoaded", () => {

    //버튼가져오기
    const bt1 = document.querySelector("#bt1") ;
    // const bt1 = document.querySelector("div > button") ;
    // const bt1 = document.querySelector("button") ;

    //버튼에 이벤트 달기
    bt1.addEventListener("click", ()=>{
        handleClick();
    });
});


    //이벤트 행동 설정 함수
const handleClick = ()=>{

    const n = Math.floor((Math.random()*6)+1);
    const x = Math.floor((Math.random()*6)+1);
    const y = Math.floor((Math.random()*6)+1);

    
    const img = document.querySelector("#img") ;
    img.setAttribute("src", `./img/${n}.png`) ;

    const img2 = document.querySelector("#img2") ;
    img2.setAttribute("src", `./img/${x}.png`) ;

    const img3 = document.querySelector("#img3") ;
    img3.setAttribute("src", `./img/${y}.png`) ;

    console.log("click", n,x,y);
}

