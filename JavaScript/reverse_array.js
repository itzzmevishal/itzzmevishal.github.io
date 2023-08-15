let arr=[5,6,8,3,26,57,63,55,22,64];
let start = 0;
let end = arr.length-1;

console.log(arr);
while(start<end){
    let temp = arr[start];
    arr[start] = arr[end]; 
    arr[end] = temp;
    start++,end--
}
console.log(arr)




