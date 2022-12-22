//Array should be sorted
//Normal
function binarySearch(arr, element) {
    let start = 0, end = arr.length;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        if (element === arr[middle])
            return middle
        else if (element < arr[middle])
            end = middle - 1
        else
            start = middle + 1
    }
    return -1
}
//Recursive
function binarySearchrec(arr, start, end, element) {
    if(start>end)
        return -1
    let middle = Math.floor((start+end)/2)
    if(element===arr[middle])
        return middle
    else if(element < arr[middle])
        return binarySearchrec(arr, start, middle-1, element)
    else    
        return binarySearchrec(arr, middle+1, end, element)
}

const arr = [-5, 2, 1, 4, 6]
let start = 0;
let end = arr.length - 1;
let ele = binarySearchrec(arr, start, end, 4)
console.log(ele)

