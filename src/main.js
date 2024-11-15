// 1. Write a for loop to print the numbers 1 through 10.

// for (let i = 1; i <= 10; i++) {
//     console.log (i);
// }

// 2. Write a for loop that prints the numbers 10 through 1.

// for (let i = 10; i >= 1; i--) {
//   console.log (i);
// }

// 3. Explain the code below. Write a comments to each line

// let sum = 0;  შევქმენით ცვლადი
// for (let i = 1; i <= 50; i++) {  გადავუარეთ ფორ ლუპით 50მდე
//     sum += i;  ისე რომ თითოეულ ჯერზე ვუმატებთ ცვლადს გაზრდილ რიცხვს
// }
// console.log(sum); საბოლოოდ გამოგვაქვს ჯამი 1 დან 50მდე ყველა რიცხვის


// 4. How many iterations are in the loop below? Explain

// for (let i = 0; i < 10; i += 2) {
//   console.log(i);
// }
// ჯამში შესრულდა 5 იტერაცია, ფორ ლუპით გადავლისას ფიგურულ ფრჩხილებში შევიდა 5ჯერ.


// 5. What does the break statement do? Explain and give an example.
// ბრეიქით ჩვენ შეგვიძლია ციკლი დავასრულოთ, ციკლიდან გამოდის.
// მაგალითად დავწეროთ ფორ ლუპი რომელმაც უნდა გამოიტანოს რიცხვები 0დან 10მდე,
// როდესაც ბრეიქკს დავუწერ მაგალითად 5იანს, იქვე დასრულდება ციკლი.

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   } console.log(i);
// } 

// 6. What does the continue statement do? Explain and give an example.
// კონტინიუ შეგვიძლია გამოვიყენოთ როდესაც გვინდა რომელიმე იტერაციას გადავახტეთ.
// მაგალითად თუ გვინდა 0დან 10მდე ყველა ლუწი რიცხვის გამოტანა ფორ ლუპის საშუალებით,
// დავწერთ შემდეგნაირად

// for (let i = 0; i < 10; i++) {
//   if (i % 2 !== 0) {
//     continue; კონტინიუს საშუალებით გადაახტება ყველა იმ იტერაციას რომელიც გულისხმობს კენტ რიცხვებს.
//   }
//   console.log(i);
// }

// 7. Generate and print a random number between 1 adn 100 until you get the number 27;
