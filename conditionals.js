/*

const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");


const temperature = 45;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");


const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}


if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}



var x = 1;

while (x <= 20) {
  
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("JuliaJames")
  }
  if (x % 3 === 0) {
    console.log("Julia")
  }
  if (x % 5 === 0) {
    console.log("James");
  }
  if (x % 3 !== 0 && x % 5 !== 0) {
    console.log(x);
  }
  x = x + 1;
}




var num = 99;

while (num >= 1){ 
     // check value of num 
    // print lyrics using num 
    if (num > 2){
    console.log(num +" bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    }else if(num === 2) {
        console.log(num +" bottles of juice on the wall! "+num +" bottles of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!");
    }else {
        console.log(num +" bottle of juice on the wall! "+num +" bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    }
    // don't forget to check pluralization on the last line!
    // decrement num
    num = num - 1; /*Can also be represented by num-- */

    var second = 60;

    while (second >= 0){
      if (second === 50) {
        console.log("Orbiter transfers from ground to internal power");
      } else if (second === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
      } else if (second === 16) {
        console.log("Activate launch pad sound suppression system");
      } else if (second === 10) {
        console.log("Activate main engine hydrogen burnoff system");
      } else if (second === 6) {
        console.log("Main engine start");
      } else if (second === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
      } else {
        console.log("T-" + second + " seconds");
      }
      second--;
    }


