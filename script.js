function checkArray(arr){
    arr = sortArray(arr)
    arr = deleteDuplicates(arr)
    return arr
}

function deleteDuplicates(arr){
    for(let i=1; i<arr.length; i++){
        if(arr[i]===arr[i-1]){
            console.log('x')
            arr.splice(i,1)
            i--
        }
    }
    return arr
}


function isSorted(arr){
    let sorted = true
    for(let i=1;i<arr.length;i++){
        if(arr[i]<arr[i-1]) sorted = false
    }
    return sorted
}

function sortArray(arr){
   if(isSorted(arr)) return arr
   else{
    function merge(left, right) {
        let sortedArr = [] // the sorted items will go here
        while (left.length && right.length) {
          // Insert the smallest item into sortedArr
          if (left[0] < right[0]) {
            sortedArr.push(left.shift())
          } else {
            sortedArr.push(right.shift())
          }
        }
        // Use spread operators to create a new array, combining the three arrays
        return [...sortedArr, ...left, ...right]
      }

    function mergeSort(arr) {
        // Base case
        if (arr.length <= 1) return arr
        let mid = Math.floor(arr.length / 2)
        // Recursive calls
        let left = mergeSort(arr.slice(0, mid))
        let right = mergeSort(arr.slice(mid))
        return merge(left, right)
      }
      
      return mergeSort(arr)
    }

    
}




//MAIN FUNCTIONS
class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}

function balancedBTS(arr, start, stop){
    arr = checkArray(arr)
    
    
}

let arr = [4,7,7,1,5,3,2,8,9,4,1,6,8,3,2]
balancedBTS(arr,0,arr.length-1)
