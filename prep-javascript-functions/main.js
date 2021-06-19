function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var conver = convertHoursToMinutes(2);
console.log(conver);

function getGreeting(name) {
  return 'hello' + name;
}
var greet = getGreeting(' sal');
console.log(greet);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addmult = addAndMultiplyBy5(2, 2);
console.log(addmult);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multdiv = multiplyAndDivideBy5(5, 2);
console.log(multdiv);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var sub2 = subtractTwoNumbers(2, 1);
console.log(sub2);

function getCircleCircumference(radius) {
  return (radius * 3.14) * 2;
}
var circ = getCircleCircumference(4);
console.log(circ);

function getFullName(firstName, lastName) {
  return firstName + lastName;
}
var fullname = getFullName('sal', 'gar');
console.log(fullname);

function cube(number) {
  return number * number * number;
}
var cuberoni = cube(3);
console.log(cuberoni);
