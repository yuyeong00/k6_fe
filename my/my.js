//함수 설정
const handleClick= ()=>{
    //작동될 부분 선택
    document.querySelector("#msg").innerHTML = "안녕하세요" 
};

document.addEventListener("DOMContentLoaded", () =>{
    const msg = document.querySelector("#msg");

    msg.addEventListener("click", ()=>{
        handleClick();
    })
})