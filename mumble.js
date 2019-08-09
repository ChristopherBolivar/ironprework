//Mumbling

function accum(s) {
  let fArray = [];
let sArray = [];
let strVar ="";
let runVar ="";
let sLength ="";
  let adjst = s.length - 1;
	for(i=0;i<=s.length;i++){
    fArray.push(s[i]);
  }
 for(i=0;i<=adjst;i++){

  let uCase = s[i].toUpperCase();
  let lCase = fArray[i].toLowerCase();
    sArray.push(uCase+lCase.repeat(i)+"-");
 }
 for(i=0;i<=adjst;i++){
   strVar += sArray[i];
   sLength = s.length * s.length;
 }
 
 
runVar = strVar.substr(0, strVar.length -1);
return runVar;
 
}