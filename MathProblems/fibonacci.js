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
  
  console.log(fibonacci(1))
  console.log(fibonacci(2))
  console.log(fibonacci(10))