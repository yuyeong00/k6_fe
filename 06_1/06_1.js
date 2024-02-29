document.addEventListener("DOMContentLoaded", () => {
  //돔트리가 완성 되면
  const imgs = document.querySelectorAll("section img");
  const bts = document.querySelectorAll("section button");

  for (let bt of bts) {
    bt.addEventListener("click", () => {
    //   console.log(bt.textContent); //=bt.innerHTML
    console.log(bt.innerHTML.slice(-1));
    
    const nc = Math.floor(Math.random() * 6) + 1;
    // const n = bt.innerHTML.slice(-1);    문자임
    const n = parseInt(bt.innerHTML.slice(-1));  //문자를 숫자로 변환


    imgs[0].setAttribute("src", `./img/${nc}.png`);
    imgs[1].setAttribute("src", `./img/${n}.png`);

    if (n === nc) { //타입까지 같아야 성립
        document.querySelector("#msg").innerHTML = "맞음";
      } else {
        document.querySelector("#msg").innerHTML = "틀림";
      }

    });
  }
});