// bai 1: Đoạn code sau in ra kết quả gì? Hãy giải thích.
// {
//     var age = 18;
// }
// {
//     let age = 19;
// }
// console.log(age)
//** Khong in ra gi vi day la block scope*/
// Các biến được khai báo bên trong khối { } không thể được truy cập từ bên ngoài khối

// Bài 2: Đoạn code sau in ra kết quả gì? Hãy giải thích.
// function f1() {
//     var age = 18;
// }
// function f2() {
//     let age = 19;
// }
// console.log(age)

// age is not defined
// Variables defined inside a function are not accessible from outside the function.

// Bài 3: Viết một hàm nhận vào một chuỗi và kiểm tra xem chuỗi đó có chứa ký tự viết hoa hay không. Sử dụng một biến ở phạm vi khối mã để lưu trạng thái kiểm tra.


checkUpperCase = (str) => {
    let check = false;
  
    for (let i = 0; i < str.length; i++) {
      if (!/^[a-zA-Z]+$/.test(str[i])) {
        check = false;
        break;
      } else if (str[i] === str[i].toUpperCase()) {
        check = true;
        break;
      }
    }
    return check;
  };
  
  console.log(checkUpperCase("JavaSCRIPT"));
  console.log(checkUpperCase("9"));
  console.log(checkUpperCase("javascript"));




