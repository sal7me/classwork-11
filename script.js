// // რიცვხვი კენტია თუ ლუწი

// // ფუნქციამ მიიღოს ერთი არგუმენტი — number.

// // თუ რიცხვი ლუწია, დააბრუნოს "Even".

// // თუ კენტია, დააბრუნოს "Odd".

// // გამოიყენეთ if/else და return.

// //                     20
// function checkEvenOdd(number) {
//   if (number % 2 === 0) {
//     return "even";
//   } else {
//     return "Odd";
//   }
// }

// console.log(checkEvenOdd(20)); // "even"

// console.log(checkEvenOdd(3)); // "odd"

// // შექმენით ფუნქცია findMax, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათგან ყველაზე დიდს.
// // მოთხოვნები:
// // - ფუნქციამ მიიღოს ორი პარამეტრი — a და b.
// // - გამოიყენეთ if/else.
// // - თუ რიცხვები ტოლია, დააბრუნეთ "Equal".
// // - სხვა შემთხვევაში დააბრუნეთ უფრო დიდი რიცხვი.

// function findMax(a, b) {
//   if (a > b) {
//     return a;
//   } else if (a < b) {
//     return b;
//   } else {
//     return "equal";
//   }
// }

// console.log(findMax(15, 25));
// console.log(findMax(40, 10));
// console.log(findMax(10, 10));

// // შექმენით ფუნქცია calculateSalary, რომელიც გამოთვლის თანამშრომლის ანაზღაურებას.
// // მოთხოვნები:
// // - ფუნქციამ მიიღოს ორი პარამეტრი — hours და hourlyRate.
// // - გამოთვალოს ნამუშევარი საათების შესაბამისი ხელფასი.
// // - დააბრუნოს საბოლოო თანხა return-ით.
// // - გამოიძახეთ ფუნქცია სხვადასხვა მონაცემებით.
// // გამოძახების მაგალითი:

// function calculateSalary(hours, hourlyRate) {
//   let result = hours * hourlyRate;
//   return result;
// }

// console.log(calculateSalary(8, 15));
// console.log(calculateSalary(20, 25));

// სტუდენტის შეფასება 🎓
// შექმენით ფუნქცია getGrade, რომელიც სტუდენტის ქულების მიხედვით დააბრუნებს შეფასებას.
// შეფასების სისტემა:
// ქულა შედეგი
// 90–100 Excellent
// 70–89 Good
// 50–69 Passed
// 0–49 Failed
// მოთხოვნები:

// - ფუნქციამ მიიღოს ერთი პარამეტრი — score.
// - გამოიყენეთ if/else if/else.
// - დააბრუნეთ შესაბამისი შეფასება return-ით.
//   გამოძახების მაგალითი:
//   console.log(getGrade(95));
//   // Excellent

// console.log(getGrade(75));
// // Good

// console.log(getGrade(40));
// // Failed

function getGrade(score) {
  //     true           true
  if (score >= 90 && score <= 100) {
    return "Excellent";
  } else if (score >= 70 && score <= 89) {
    return "Good";
  } else if (score >= 50 && score <= 69) {
    return "Pased";
  } else if (score >= 0 && score <= 49) {
    return "Failed";
  }
}
console.log(getGrade(95));

console.log(getGrade(75));

console.log(getGrade(40));
