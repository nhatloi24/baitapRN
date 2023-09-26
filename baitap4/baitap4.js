//Bai 1:

// let age = 15;
// let coTheMuaRuou = age > 18;
// console.log(coTheMuaRuou);


// Bài 2: Giá trị nào sau đây là falsy?
// let a = “”; falsy
// let b = 0; falsy
// let c = []; truthy
// let d = 1 > 2; falsy
// let e = {}; truthy
// let f = '0'; truthy


// Bài 3: Hãy thử tạo một biến a có giá trị là 1 chuỗi chỉ chứa các chữ số, sau đó tạo một biến b gán giá trị là giá trị của biến a đã chuyển thành kiểu số.
//  let a = '12.334';
//  let b = parseFloat(a);

//  console.log(b);



// Bài 4: Hãy thử tạo một biến a có giá trị là 1 số, sau đó tạo một biến b gán giá trị là giá trị của biến a đã chuyển thành kiểu chuỗi.

let a1 = 11;
let b1 = a1.toString();
console.log( b1);



// Bài 5: Cho biến x nhận giá trị là biểu thức sau:


// let x = typeof (10 >= -1 && typeof NaN === "number" && "Ky" && false && true) === false
// giá trị của x là gì?
// console.log(x); 
// x -> false


// Bài 6: Cho đề sau
// var a = '1';
// var b = 2;

// var c = typeof a;
// var d = typeof b;
// var e = typeof d;

// console.log(c, d, e);
// c, d, e = string, number, string

// bai 7
const x = 1/ 0;
console.log(x === x+1);

// -> true
