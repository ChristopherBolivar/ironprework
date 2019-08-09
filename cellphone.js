//CreatCellPhone
function createPhoneNumber(numbers){
let Arr = [];
let PhoneStr = "";
let NewStr = "";
 Arr.push(numbers);
 Arr[0].splice(0, 0, "(");
 Arr[0].splice(4, 0, ") ");
 Arr[0].splice(8, 0, "-");
for(let i=0; i<=Arr[0].length - 1;i++){
  PhoneStr += Arr[0][i];
}
return PhoneStr;
}