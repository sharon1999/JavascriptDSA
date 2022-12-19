//Recursive
function factorialrec(n){
    if(n==0)
        return 1
    else
      return (n*factorialrec(n-1))
  }
  //Normal
  function factorial(n) {
    let result =1;
    for(i=2;i<=n;i++){
      result=result*i
    }
    return result
  }
  let start = performance.now();
  console.log(factorialrec(5))
  let timeTaken = performance.now() - start;
  console.log("Total time taken for recursion : " + timeTaken + " milliseconds");
  
  console.log(factorial(5))
   timeTaken = performance.now()- start;
  console.log("Total time taken : " + timeTaken + " milliseconds");
  
  