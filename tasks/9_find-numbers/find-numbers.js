export function getNumbers(str){
    let arr = str.match(/\d/g)
    arr.forEach((element,index) => {
        arr[index] = Number(element)
    });
    return arr
}