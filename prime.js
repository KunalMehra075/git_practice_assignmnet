function checkPrime(number){
  let factors=0;
    for(i=1;i<=number;i++){
        if(number%i===0){
            factors++;
        }
    }
    if(factors==2){
        return true;
    }
    return false;
}

let A = checkPrime(17);
if(A==true){
    console.log("Prime")
}else(
    console.log("Not a Prime")
)

