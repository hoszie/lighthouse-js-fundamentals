function isOdd (num) {
  return num % 2 != 0;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
console.log("1 is odd: " + isOdd(1));
console.log("4 is odd: " + isOdd(4));
console.log("5 is odd: " + isOdd(5));
console.log("6 is odd: " + isOdd(6));
console.log("7 is odd: " + isOdd(7));
console.log("9 is odd: " + isOdd(9));

function ageCalculator (name, yearOfBirth, currentYear) {
  var age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}

ageCalculator("Nick", 1987, 2019);


function howManyHundreds (num) {
  return Math.floor(num / 10);
}

howManyHundreds(424);
howManyHundreds(1001);
howManyHundreds(99);
howManyHundreds(767);


function calculateRectangleArea (length, width) {
  if (length <= 0 || width <= 0) {
    return "undefined";
  } else {
    return length * width;
  }
}


function calculateTriangleArea (base, height) {
  if (base <= 0 || height <= 0) {
    return "undefined";
  } else {
    return (base * height) / 2;
  }
}


function calculateCircleArea (radius) {
  if (radius <= 0) {
    return "undefined";
  } else {
    return Math.PI * (radius * radius);
  }
}


calculateCircleArea(5);
calculateRectangleArea(10, 4);
calculateTriangleArea (8, 15);

