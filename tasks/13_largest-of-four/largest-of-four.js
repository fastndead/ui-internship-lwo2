export function largestOfFour(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].reduce((acc, current)=>{
            return acc < current ? current : acc
        })
    }
    return arr
}
