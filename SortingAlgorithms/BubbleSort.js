function swap(x, y) {
    var t = x;
    x = y;
    y = t;
    return [x, y];
}

function bubbleSort(arr){
   for(let i=0;i<arr.length-1;i++){
       let swapped;
       for(j=0;j<arr.length-i-1;j++){
           if(arr[j]>arr[j+1]){
               [arr[j],arr[j+1]]= swap(arr[j],arr[j+1])
               swapped=true
                // let temp=arr[j];
                // arr[j]=arr[j+1];
                // arr[j+1=temp;
           }
       }
       if(!swapped)
        break
   }
   return arr
  }
  

const res = bubbleSort([8,20,-2,4,6])
console.log(res)
  
  