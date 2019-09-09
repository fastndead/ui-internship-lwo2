export function titleCase(str) {
    str = str.toLowerCase()
    let words = str.split(" ")
    
    words.forEach((element, index) => {
        words[index] = element[0].toUpperCase() + element.slice(1)
    })
    return words.join(' ')
  }
  
   