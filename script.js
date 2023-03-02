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


class Tree{
    constructor(array){
        
        this.root = this.buildTree(array,0,array.length-1)
        this.length = null
    }

    buildTree(arr, start, stop){
   
        if(start===0 && stop===arr.length-1){
            arr = checkArray(arr)
            this.length = arr.length
            start = 0
            stop = arr.length-1
            console.log(arr)
        }
        if(start>stop) return null
        
        let mid = Math.floor((start+stop)/2)
    
        let node = new Node(arr[mid])
        node.left = this.buildTree(arr,start,mid-1)
        node.right = this.buildTree(arr,mid+1,stop)
        return node
    }

    print(node=this.root, prefix = '', isLeft = true){
      if (node.right !== null) {
        this.print(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
      }
      console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
      if (node.left !== null) {
        this.print(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
      }
    }

    insertValue(root=this.root,value){
      
      let current = root
      if(value>current.data){
        if(current.right!==null){
          current = current.right
          this.insertValue(current,value)
        }else{
          const newNode = new Node(value)
          current.right = newNode
        }
      }
      else if(value<current.data){
        if(current.left!==null){
          current = current.left
          this.insertValue(current,value)
        }else{
          current.left = newNode
        }
      }
      else if(value===current.data){
        console.log('You cant insert ',value, 'its been already inserted')
        this.print
      }

      this.print()
    }

    search(root,value){

    }

}





       
let arr = [0,1,9,21,3,4,3]
const tree1 = new Tree(arr)
tree1.print()
console.log('---------------')
tree1.insertValue(1)
