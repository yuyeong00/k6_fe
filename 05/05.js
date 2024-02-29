//함수 설정
const handleClick = ()=>{
    //작동될 부분 선택
    const bts = document.querySelectorAll("img") ;
    //section > div > img = section img
    //selectorAll을 해야 for 사용 가능

    //배열선언
    const btsNum = [1,1,1];
//for of
    for(let [idx,bt] of bts.entries()){
        const n = Math.floor(Math.random()*6)+1;
        bt.setAttribute("src", `./img/${n}.png`);
        btsNum[idx] = n;

        console.log(btsNum);
    }


//for of 제일 추전 = 파이썬의 for in
// for (let bt of bts) {
//     const n = Math.floor(Math.random()*6)+1;
//     bt.setAttribute("src", `./img/${n}.png`);
// }


//기본 for
// for (let i=0; i<bts.length; i++){
//     const n = Math.floor(Math.random()*6)+1;
//     bts[i].setAttribute("src", `./img/${n}.png`); //이미지의 속성을 바꿔주는것
// }


// for in 거의 안씀
// for(let i in bts) {
//     const n = Math.floor(Math.random()*6)+1;
//     // bts[i].setAttribute("src", `./img/${n}.png`);

//     console.log("for in i=",bts[i])
// }


    // bts.forEach((bt) => {
    //     const n = Math.floor(Math.random()*6)+1;
    //     bt.setAttribute("src", `./img/${n}.png`);

    //     console.log("click",n);
    // });
}