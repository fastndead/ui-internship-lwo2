export function nextInLine(arr, item){
    arr.push(item)
    let firstInLine = arr[0]
    arr.shift()
    return firstInLine;
}