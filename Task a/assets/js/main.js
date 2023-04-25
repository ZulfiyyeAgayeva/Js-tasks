
// a. Toplama çıxma, toplama, vurma, bölməyə uyğun funksiya yaradirsiz 2 eded ve 1 operator('+','-','*','/') qebul edir. Qebul etdiyi operatora uygun a və b ədədləri üzərində hesablama aparib alinan deyeri qaytarır.

var a = prompt("First number:");
var c = prompt("Enter operator:");
var b = prompt("Second number:");

function math(num){
  var netice = 0;
switch (c) {
  case "+":
   netice=Number(a) + Number(b);
    break;
  case "-":
    netice=(a - b);
    break;
  case "*":
    netice= (a * b);
    break;
  case "/":
    netice= (a / b);
    break;
}
return netice;
}
console.log(math());




// Burda if-else de yazmaga calisdim alimadi

// var eded1 = prompt("1ci ededi daxil edin");
// var emeliyyat = prompt("emeliyyati daxil edin");
// var eded2 = prompt("2ci ededi daxil edin");
// var netice = 0;
// function math(eded1,eded2){
//   if(emeliyyat == '+'){
//      netice =(Number(eded1) + Number(eded2));
//   }
//   else if(emeliyyat == '-'){
//     netice =(Number(eded1) - Number(eded2));
//   }
//   else if(emeliyyat == '*'){
//     netice = (Number(eded1) * Number(eded2));
//   }
//   else if(emeliyyat == '/'){
//     netice = (Number(eded1) / Number(eded2));
//   }
//   return netice;
// } 
// console.log(math(prompt()));