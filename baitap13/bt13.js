//bai 1

const fullName = "Bui Pham Vinh Ky";
const age = 25;


const HCM_CITY = {
  city: "Ho Chi Minh",
  zipcode: 700000,
};


const person = {
  fullName,
  age,
  gender: "male",
  ...HCM_CITY,
};

const changeJson = JSON.stringify(person)
console.log(changeJson)

// bai 2

// {
//     "id": 29,
//     "title": "Refined Bronze Tuna",
//     "price": 226,
//     "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
//     "images": [
//         "https://i.imgur.com/zQwsC2m.jpeg",
//         "https://i.imgur.com/fpT4052.jpeg",
//         "https://i.imgur.com/uDpzwEk.jpeg"
//     ],
//     "creationAt": "2023-10-21T04:38:54.000Z",
//     "updatedAt": "2023-10-21T04:38:54.000Z",
//     "category": {
//         "id": 5,
//         "name": "Others",
//         "image": "https://i.imgur.com/nZnWUc0.jpeg",
//         "creationAt": "2023-10-21T04:38:54.000Z",
//         "updatedAt": "2023-10-21T04:38:54.000Z"
//     }
// }

/// 200 Ok 861ms

//bai 3
    // const multiLineString = `Sau khi bùng phát xung đột với Phong trào Hồi giáo Hamas kiểm soát Dải Gaza ngày 7/10 vừa qua, Israel đã bao vây hoàn toàn vùng lãnh thổ này, \
    // cắt điện, nước, năng lượng và phong tỏa cửa khẩu Rafah. \
    // 2,4 triệu người dân Palestine đang mắc kẹt tại Gaza.\
    // Rafah là cửa khẩu duy nhất vào Gaza không do Israel kiểm soát. Nhưng các cuộc không kích đã làm đường sá hư hỏng và ngăn cản xe chở hàng cứu trợ vào miền Nam Gaza.
    // `;

    // console.log(multiLineString)

    // const person = {
    //     name: 'John Doe',
    //     age: 30,
    //     address: {
    //       city: 'New York',
    //       country: 'USA',
    //     },
    //   };

    //       const people = [
    //     { name: 'John', age: 30 },
    //     { name: 'Alice', age: 25 },
    //     { name: 'Bob', age: 35 },
    //   ];
      
    //   for (const {name, age} of people) {
    //     console.log(`Name: ${name}, Age: ${age}`)
    //   }

    //   const arr = [1, 2, 3, 4, 5];
    //   const [x, y, z, ...rest] = arr;
    //   console.log('x', x);
    //   console.log('y', y);
    //   console.log('z', z);
    //   console.log('rest:', rest)
