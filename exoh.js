function XO(str) {
  let Test = false;
  let xX = 0;
  let oO = 0;
  let strLength = str.length;
    for(let i=0; i <= strLength ; i++){
      //Storing in argument input in var & lower case method so that the passing argument is not case sensitive
      let xoCount = str.toLowerCase();
      if(xoCount[i] === "x"){
      xX += 1;
      }
      if(xoCount[i] === "o"){
      oO += 1;
      }
    }
      if(xX === oO){
        Test = true;
        return Test;
      }else if(xX != oO){
        return Test;
      }
}
