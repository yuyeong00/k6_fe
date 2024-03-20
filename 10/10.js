document.addEventListener("DOMContentLoaded", ()=>{
    const bt = document.querySelector("button");
    const numDisp = document.querySelector("#numDisp");

    let nums = [];
    bt.addEventListener("click", ()=>{
        //배열초기화 버튼 누를때마다 새로 만들어지게
        // nums = [];
        nums.length = 0;

        //랜덤 1~45까지 7개 만들기, 중복없이
        //몇번 만들어야될지 모를때 쓰는 반복문
        while(nums.length <7){
            let n = Math.floor(Math.random()*45+1);
            
            if(!nums.includes(n))
                nums.push(`<span class = "sp${parseInt(n/10)}">${n}</span>`);
            }
        nums.splice(6,0,'<span>+</span>');
        // console.log(nums);

        // let tags = '';
        // nums.map((v, i)=>{
        //     tags= tags+`<span class = "sp${parseInt(v/10)}">${v}</span>`
        //     console.log(tags);
        //     if (i == 5){
        //         tags = tags + `<span> + </span>`
        //     }
        // });
        // numDisp.innerHTML = tags;zj

        // let tags = [];
        // tags = nums.map((v,i) =>
        //     `<span class = "sp${parseInt(v/10)}">${v}</span>`
        // )
        // tags.splice(6,0,'<span>+</span>');
        
        numDisp.innerHTML = nums.toString().replaceAll(',','');
    });
});