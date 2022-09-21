function checkPrime(num){
  if(num < 1 || num == undefined)
    return false;
    for(i=2;i<=num**0.5;i++){
        if(num%i==0){
            return true;
        }
    }
    
    return true;
}

console.log(checkPrime(17))
