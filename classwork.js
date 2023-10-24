function multiply(arr){
    let array1= []
    let array2 = []
    for(i=0;i<arr.length;i++){
    array1.push(arr[i]*2)}
    
    array2.push(array1[0])
    for(i=0;i<array1.length;i++){
        array2.push(array1[i])
    }
    return array2
}

console.log(multiply([1,2,3,4]))