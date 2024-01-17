const account_Id=1234567
let accout_Email="amanpratapnagvanshi7622@gmail.com"
var account_Pas="1234"
accountCity="Punjab"
let accountState;

//account_Id=2   //not allowed
accout_Email="jd@j.com"
account_Pas="323233"
accountCity="hsiskhs"
console.log(account_Id);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([account_Id,accout_Email,account_Pas,accountCity])