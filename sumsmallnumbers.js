
function sumTwoSmallestNumbers(numbers) {  
   // Sum of two smallest numbers
let nArr = [];
let lowestNum = "";
let seclowestNum ="";

 numbers.sort((a, b) => a - b);
 nArr.push(numbers);
 lowestNum = nArr[0][0];
 seclowestNum = nArr[0][1];
 return lowestNum + seclowestNum;
}
 