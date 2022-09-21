function checkPrime(num){
  let count=0;
    for(i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==2){
        return true;
    }
    return false;
}

let A = checkPrime(17)
console.log(A)
