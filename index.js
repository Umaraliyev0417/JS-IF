// var a = +prompt("a sonini kiriting")
// var b = +prompt("b sonini kiriting")
// var c = prompt("amalni kiriting")
//  if(c == "+"){
//     console.log(a+b);
// }else if(c == '+'){
//     console.log(a-b);
// }else if(c == '*'){
//     console.log(a*b);
// }else if(c == '/'){
//     console.log(a/b);
// }



// var age = +prompt("yoshingiz nechida")

// if (age > 15) {
//     console.log(2023 + age);
// } else if (age < 15) {
//     console.log();
// }

// var n = prompt("ixtiyoriy son kiritng")

// if(n % 2 == 0){
//     console.log("bo'linadi");
// }else if(n % 2 != 0){
//     console.log("aks xolda bo'linmaydi");
// }

// 1-misol

// var num = prompt("sonni kiriting")

// if(num+1){
// console.log("1 ga oshirildi");
// }else if(a1){
// console.log("o'zgarmadi");
// }

// 2-misol

// var a = +prompt("sonni kiriting")

// if(a>0){
//     console.log(a+1);
// }else if(a<0){
//     console.log(a-2);
// }


// 3-misol

// var a = +prompt("sonni kiriting")
// if (a>0) {
//     console.log(a+1);
// }else if(a<0){
//     console.log(a-2);
// }else if(a == 0){
//     console.log(10);
// }


// 4-misol

// var a = prompt("a soni kiriting")
// var b = prompt("b soni kiriting")
// var c = prompt("c soni kiriting")




// var a = 4
// var b = 8


// for (var i = a;i<=b;i++ ) {
//     console.log(i)
// }

// var a = 4
// var b = 8

// for (var q = a;q<=b;q++ ) {
//     console.log(q)
// }


// function sum(a, b) {
//     return a+b
// }

// console.log(sum(2, 3));



// for(var i = 0;i<10;i++){
//     console.log(i);
// }

// for(var i = 0; i<10;i++){
//     if (i % 2 == 1) {
//         continue ;
//     }
//     console.log(i);
// }


// for(var i = 0; i<10;i++){
//     if(i == 5){
//         break ;
//     }
//     console.log(i);
// }

// var n = 100
// var summa = 0
// for(var i = 1;i<=n;i++){
// summa +=i
// }
//  console.log(summa);


// function summaNumber(n,summa = 0) {

// for(var i = 1;i<=n;i++){
//     summa +=i
// }
//  return summa
// }
// console.log( summaNumber(9));

// console.log( summaNumber(19));



// var res = [22,12,90,5,43];
// function maxArrayElement(arr){
//     var max = arr[res]
//     for(var i=0;i<arr.length;i++)
// {
//     if(arr[i] >max){
//         max = arr[i]
//     }
// }
//     return max
// }
// console.log(maxArrayElement);



// var res = [22,12,90,5,43];
// var summa = 0
// for(var i = 0;i<res.length;i++){
//  summa +=res[i]
// }
// console.log(summa);




// var countElement = document.getElementById("count")
// var incrementElement = document.getElementById("increment")

// incrementElement.addEventListener("click",()=>{
//     countElement,textContent = +countElement.textContent + 1
// })


// var  formElement = document.getElementById("form")
// var nameEl = document.getElementById("name")
// var password = document.getElementById("password")
// var passwordError = document.getElementById("passwordError")

// formElement.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     if(password.value.length < 7){
//         passwordError.textContent = "parol 8 ta belgidan ko'proq bo'lishi kerak"
//         passwordError.style.color = "red"
//         password.focus()
//     }
// })


// var counter = document.getElementById("counter")
// var input = document.getElementById("input")
// var btn = document.getElementById("btn")

// btn.addEventListener("click",()=>{
//     var value = input.value
//     counter.textContent = +counter.textContent + +value
//     input.value = ""
// })




// var input = document.getElementById("input")
// var select = document.getElementById("select")
// var btn = document.getElementById("btn")
// var count = document.getElementById("count")

// btn.addEventListener("click",()=>{
//     var res = input.value * select.value
//     count.textContent = res                                         
// })


// function Power(a,b,c) {
//     console.log(a**2,a**3,a**4);
//     console.log(b**2,b**3,b**4);
//     console.log(c**2,c**3,c**4);
// }
// Power(2,3,4)


// function Odd(a) {
//     if ( a % 2 == 0 ){
//         return "juft son"
//     }
//     else if ( a % 2 != 0 ){
//         return " toq son"
//     }
// }
// console.log(Odd(18));
// ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
// const piyodaSpeed = 3.6
// const veloSpeed = 20.1
// const avtoSpeed = 70
// const planeSpeed = 800



// var input = document.getElementById("input")
// var piyoda = document.getElementById("piyoda")
// var velo = document.getElementById("velo")
// var avto = document.getElementById("avto")
// var plane = document.getElementById("plane")
// var btn = document.getElementById("btn")

// btn.addEventListener("click",()=>{
//     piyoda.textContent = input.value / piyodaSpeed
//     velo.textContent = input.value / veloSpeed
//     avto.textContent = input.value / avtoSpeed
//     plane.textContent = input.value / planeSpeed
// })


// var nameElement = document.getElementById("name")
// var isValidElement = document.getElementById("isValid")
// var formElement = document.getElementById("form")

// nameElement.isValidElement("keyup", (evt) => {
//     var values = evt.target.value;
//     if (values.length > 4 && values.length < 20) {
//         isValidElement.textContent = "is success"
//         isValidElement.style.color = "green"
//     }
//     else if (values.length < 4) {
//         isValidElement.textContent = "error"
//         isValidElement.style.color = "red"
//     }
// })

// formElement.addEventListener("submit", (event) => {
//     event.preventDefault();
//     if (nameElement.value.lengrh < 4) {
//         nameElement.focus()
//     }
// })


// var btn = document.getElementById("red")
// var btn1 = document.getElementById("blue")

// btn.addEventListener("click",()=>{
//     document.body.style.background = "red"
// })
// btn1.addEventListener("click",()=>{
//     document.body.style.background = "blue"
// })



// var arr = [45,33,22 ]
// summa = 0
// for(var i=0 ; i < arr.length ; i++){
//     summa = summa + arr[i]
// }
// console.log(summa);

// var num = [3.02 , -3.65 , 5 , -9]

// for(var i=0 ; i< num.length ; i++){
//     if(num[i]<0 ){
//      num[i] =  Math.abs(num[i])
//     }
//     // console.log(num[i]);
// }

// console.log(num);


var list = document.getElementById("list");
var input = document.getElementById("input");
var addElement = document.getElementById("add");

addElement.addEventListener("click")