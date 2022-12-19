//normal
function fibonacci(n){
    const fib=[0,1];
    for(let i=2;i<n;i++){
       fib[i]=fib[i-1]+fib[i-2]   
    }
    if(n==1)
      return fib[n-1]
    else
      return fib
  }
  //recursive O(2^n)
  function fibonaccirec(n){
    if(n<2)
      return n
    else 
      return fibonaccirec(n-1)+fibonaccirec(n-2)
  }
  
  console.log(fibonaccirec(5))
  // console.log(fibonacci(2))
  // console.log(fibonacci(10))

  