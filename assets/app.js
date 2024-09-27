let arr = [1,1,2,4,4,5,5,5,6,7,9]

  let emptyArr = []  
for(let i = 0; i < arr.length; i++){
for(let j = 0; j < arr.length; j++){
 if(arr[i] + arr[j] == 10){
   emptyArr.push([arr[i] , arr[j]])
 }
}
}
console.log(emptyArr);
