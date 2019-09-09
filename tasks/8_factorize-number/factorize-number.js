export function factorialize (n){
    if (n < 0) 
            throw "Negative numbers cannot be factorialized"
    else if (n == 0) 
        return 1;
    else {
        return (n * factorialize(n - 1));
    }
}