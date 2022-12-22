function linearSearch(arr,element){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==element)
            return i
    }
    return -1
  }
  
  const arr=[-5,2,1,4,6]
  const ele = linearSearch(arr,4)
  console.log(ele)
  
  