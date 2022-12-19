// O(Logn)
function powerOfTwo(n) {
    if(n<1) return false
        while(n>1){
            if(n%2 != 0) return false
            n/=2
        }
        return true
}

// O(1)
function isPowerofTwoBitWise(n){
    if(n<1) return false
    else 
     return ( n & (n-1)) === 0 
}


console.log(powerOfTwo(1))
