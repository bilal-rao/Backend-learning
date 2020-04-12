var rect = require("./rectangle");

function solveRect(l, b) {
  rect(l, b, (err, resp) => {
    if (err) {
      console.log(`Error: ${err.message}`);
    }
    else {
        console.log(`Ther parmeter of rectangle of l: ${l}, and b: ${b} is ${resp.parameter()}`)
       
        console.log(`Ther area of rectangle of l: ${l}, and b: ${b} is ${resp.area()}`)
    }
  });
}
console.log(' I am after solve Rect..')

solveRect(0,0)
solveRect(2,4)

