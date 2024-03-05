//자바스크립트 데이터타입

//기본타입
let n1 = 10;      //정수
let n2 = 10.5;    //실수
let s1 = "안녕하세요";  //문자열

console.log("정수: ", n1);
console.log("실수수: ", n2);
console.log("문자열: ", s1);

//문자열 순회 //in:키를 가져옴, of:값을 가져옴
for(let i in s1) {
  console.log("문자열:" , s1[i])
}
for(let c of s1) {
  console.log("문자열:", c);
}

//참조타입 - 배열 //(문자열은 데이터타입이 다 같아야 함)
//tailing 쉼표 가능
let arr = ['🍎', 1, '🥕', 2, '🍌', 3,]
console.log("배열: ", arr)
console.log("배열의 요소 접근 : " , arr[1]);

//배열 순회 //in:키를 가져옴, of:값을 가져옴
for(let i in arr) {
  console.log("in 배열:" , arr[i])
}
for(let c of arr) {
  console.log("of 배열:", c);
}

//배열 map 함수 //for of 대신 map 씀// arr.map() 콜백함수(인수로 들어가는 함수)
//결과를 값과 인덱스 받기 가능 //인수,i 하면 순서 나옴 
console.log("배열의 map 함수");
const arr2 = arr.map((item, i)=>{
  console.log("map=>item",item,i)
  return item+"👍";
}) ;
console.log("arr2 = ", arr2)

console.log("배열의 map 함수 : 콜백");
//콜백에 인수가 1개인 경우 ()생략가능
//콜백 바디에 실행값 없고 리턴만 있는 경우 {}생략가능
arr.map(item =>item+"👍") ;
console.log("콜백arr2 = ", arr2)


//참조타입 - 오브젝트(객체) //이모지:키, 숫자:값
//tailing 쉼표 가능
let obj = {'🍎': 1, '🥕': 2, '🍌': 3 ,}
console.log("obj: ", obj)
console.log("obj요소의 접근: ", obj['❤'])

//오브젝트 순회 //in:키를 가져옴, of:값을 가져옴
//of 쓸때 Object.entries(obj명) 주의
for(let i in obj) {
  console.log("in 오브젝트:" , obj[i])
}
for(let c of Object.entries(obj)) {   //구조분해
  console.log("of 오브젝트:", c);
  console.log("of 오브젝트 키:", c[0]);
  console.log("of 오브젝트 값:", c[1]);
}

for(let [k,v] of Object.entries(obj)) {   //구조분해
  console.log("구조분해 오브젝트 키:", k);
  console.log("구조분해 오브젝트 값:", v);
}