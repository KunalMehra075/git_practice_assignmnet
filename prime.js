function checkPrime(num){
  if(num < 1 || num == undefined)
    return false;
    for(i=2;i<=num**0.5;i++){
        if(num%i==0){
            return false;
        }
    }
    
    return true;
}


let A = checkPrime(17);
if(A==true){
    console.log("Prime")
}else(
    console.log("Not a Prime")
)

