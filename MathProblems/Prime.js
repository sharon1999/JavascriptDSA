function isPrime(n){
    if(n<2)
        return false
    for(let i=2;i<=Math.sqrt(n);i++){ //O(sqrt(n))
        if(n%i==0)
            return true    
    }
    return false
}

console.log(isPrime(5))
