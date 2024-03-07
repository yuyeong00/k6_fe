//자바스크립트 데이터타입

//기본타입 //값이 변하는건 let //변하지 않는것은 const
let n1 = 10;      //정수
let n2 = 10.5;    //실수
let s1 = "안녕하세요.";  //문자열

// console.log("정수: ", n1);
// console.log("실수: ", n2);
// console.log("문자열: ", s1);

//문자열 순회 //in:키를 가져옴, of:값을 가져옴
// for(let i in s1) {
//   console.log("문자열:" , s1[i])
// }
// for(let c of s1) {
//   console.log("문자열:", c);
// }



//참조타입 - 배열 //(문자열은 데이터타입이 다 같아야 함)
//tailing 쉼표 가능
let arr = ['🍎', 1, '🥕', 2, '🍌', 3,]
console.log("배열: ", arr)
console.log("배열의 요소 접근 : " , arr[1]);

//배열 순회 //in:키를 가져옴, of:값을 가져옴
for(let i in arr) {
  console.log("for in 배열:" , arr[i])
}
for(let c of arr) {
  console.log("of 배열:", c);
}


let arr1 = [0,0,0,0,0,0];
for (let i in arr){
  arr1[i] = arr[i]; //바꿔치기
}
console.log("반복문 첨자로arr1 = ", arr1);


//arr2 만들기
let arr2= [];
console.log("arr2 = ", arr2);

//반복문으로 arr1요소를 arr2로
for (let item of arr) {
  arr2.push(item); //요소가 아예 없기때문에 밀어넣기 //append랑 똑같음!
}
console.log("반복문으로 arr2 = ", arr2);






//배열 map 함수 //for of 대신 map 씀// arr.map() 콜백함수(인수로 들어가는 함수)
//결과를 값과 인덱스 받기 가능 //인수,i 하면 순서 나옴 
console.log("배열의 map 함수");
arr2 = arr.map((v, i)=>{
  console.log("map=>item: ", v, ", map=>i: ", i);
  return v+"👍";
}) ;
console.log("arr2 = ", arr2)

arr.map((v)=>{
  let s = v + '👍';
  console.log("s로 리턴 arr2 = ",v,",",s);
  return s;

}) ;



console.log("배열의 map 함수 : 콜백");
//콜백에 인수가 1개인 경우 ()생략가능
//콜백 바디에 실행값 없고 리턴만 있는 경우 {}생략가능
arr.map(item =>item+"👍") ;
console.log("콜백arr2 = ", arr2)


//filter
let arr21 = [];
for (let item of arr) {
  // if (isNaN(item)) arr21.push(item)
  if (!isNaN(item)) arr21.push(item); //숫자면 false
} 
console.log("반복문 Filter arr21 = ",arr21);

// arr2 = arr.filter((v)=> {
//   if (isNaN(v)) console.log(v);
//   return isNaN(v); //조건식 (날려보낼것들)
// });
arr2 = arr.filter((v) => isNaN(v)); //조건식 (날려보낼것들));
console.log("Filter arr21 = ",arr21);

// 비교하기
arr21 = arr.map((v) => isNaN(v)); //조건식 (날려보낼것들));
console.log("Filter arr21 = ",arr21);

// 맵과 필터는 배열에만 쓸 수 있다.

//전개 연산자
let arr22 = [...arr];
console.log("전개연산자 = ", arr22);



//참조타입 - 오브젝트(객체) //이모지:키, 숫자:값
//tailing 쉼표 가능
let obj = {'🍎': 1, '🥕': 2, '🍌': 3 ,}
console.log("obj: ", obj)
console.log("obj요소의 접근: ", obj['🍎'])

//오브젝트 순회 //in:키를 가져옴, of:값을 가져옴
//of 쓸때 Object.entries(obj명) 주의
for(let i in obj) {
  console.log("for in 오브젝트:" , obj[i])
}
for(let c of Object.entries(obj)) {   
  console.log("of 오브젝트:", c); //키값 한쌍이 배열이 됨
  console.log("of 오브젝트 키:", c[0]);
  console.log("of 오브젝트 값:", c[1]);
}

for(let [k,v] of Object.entries(obj)) {   //구조분해 할당
  console.log("구조분해 오브젝트 키:", k);
  console.log("구조분해 오브젝트 값:", v);
}

console.log("오브젝트 키배열 : ", Object.keys(obj)); //키배열 : 맵,필터 가능
// let arr3 = Object.keys(obj).map(v,i=>{v+i});
let arr3 = Object.keys(obj).map(k => k + obj[k]);
console.log("arr3 = ", arr3);