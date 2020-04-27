// //                                                       1
// function cube() {
//   let num = +prompt("Input number!");
//   alert(`The number in the cube ${num ** 3}`);
// }
// cube();

// //                                                        2

// const threeNumbers = () => {
//   let number1 = +prompt("Please enter a number 1");
//   let number2 = +prompt("Please enter a number 2");
//   let number3 = +prompt("Please enter a number 3");
//   let res = (number1 + number2) / number3;
//   alert(`(${number1} + ${number2})/${number3} = ${res}`);
// };
// threeNumbers();

//                                                            3

// function dayName() {
//   let day = +prompt("Enter the day of the week!");
//   let week = [
//     "Понеділок",
//     "Вівторок",
//     "Середа",
//     "Четверг",
//     "П'ятниця",
//     "Субота",
//     "Неділя",
//   ];
//   alert(week[day - 1]);
// }
// dayName();

//                                                                4

// function factorial(n) {
//   if (n == 1) return 1;
//   else return n * factorial(n - 1);
// }
// let userNum = +prompt("Enter a number to calculate the factorial");
// alert(factorial(userNum));

//                                                                 5

function time() {
  let allSeconds = +prompt("Введіть секунди");
  let hours = Math.floor(allSeconds / 3600);
  let min = Math.floor((allSeconds % 3600) % 60);
  let sec = (allSeconds % 3600) % 60;
  if (hours === 24 && min === 0 && sec === 0) {
    alert(`Рівно одна доба`);
  } else if (hours >= 24) {
    alert(`Більше однієї доби`);
  } else {
    alert(`${hours}:${min}:${sec}`);
  }
}
time();
