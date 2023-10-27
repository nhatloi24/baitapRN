//bai 1

// function concatenate(strings, ...values) {
//     // console.log(strings)
//     // console.log(values);
//     let result = '';
//     for (let i =0 ; i < strings.length; i++ ){
//         result += strings[i]
//         if (i<values.length) {
//             result += values[i]
//         }

//     }
//     return result;
//   }
  
//   const name = 'Kai';
//   const age = 20;
//   const country = 'VN';
  
//   const output = concatenate`Hello, my name is ${name}, I am ${age} years old, and I live in ${country}.`;
//   console.log(output);

//bai 2
// function formatCurrency(strings, ...values) {
// //    console.log(strings);
// //    console.log(values)
//     let result = '';
//     for (let i = 0; i< strings.length; i++){
//         result += strings[i];
//         if(i <values.length){
//             result += values[i].toLocaleString('vi-VN',  { style:  'currency', currency:  'VND'  });
//         }
//     }
//     return result;
//   }
  
//   const amount = 250000;
//   const fee = 5000;
  
//   const formatted = formatCurrency`Total amount: ${amount}, Fee: ${fee}.`;
//   console.log(formatted)

// bai 4

function countNameLetters(person) {
  //  if(person.name) {
  //   return person.name.length;
  //  } else {
  //   return 0;
  //  }
  return person?.name?.length || 0
}

const person1 = {
   name: 'John',
};

const person2 = {
   // No name information available
};

console.log(countNameLetters(person1)); // Result: 4
console.log(countNameLetters(person2)); // Result: 0
