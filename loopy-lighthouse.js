// var num = 100;

// for(var i = num; i <= 200; i++) {
//   if(i % 3 === 0 && i % 4 === 0) {
//     console.log("LoopyLighthouse");
//   } else if (i % 3 === 0) {
//     console.log("Loopy");
//   } else if (i % 4 === 0) {
//     console.log("Lighthouse");
//   } else {
//     console.log(i);
//   }
// }


// function makeLine(length) {
//   var line = "";
//   for (var j = 1; j <= length; j++) {
//       line += "* ";
//   }
//   return line + "\n";
// }

// makeLine(5);

function makeRow(length) {
  for (var i = 0; i <= length; i++) {
    var num = 0;
    num += i;
  }
  return num;
}

makeRow(5);