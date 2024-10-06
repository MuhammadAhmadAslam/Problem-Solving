let arr = [1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9]

let emptyArr = []
let uniquePairs = new Set()
let comboPairs = new Set()
for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < arr.length; j++) {
              if (arr[i] + arr[j] == 10) {
                     emptyArr.push([arr[i], arr[j]])
                     let pair = [arr[i], arr[j]]
                     uniquePairs.add(pair.toString())
                     let pairing = [arr[i], arr[j]].sort()
                     comboPairs.add(pairing.toString())
              }
       }
}

// let inpArr = [-1, 0, 1, 2, -1, -4];
// let threePairs = []
// let threePairsSet = new Set()
// for (let i = 0; i < inpArr.length; i++) {
//        for (let j = 0; j < inpArr.length; j++) {
//               for (let k = 0; k < inpArr.length; k++) {
//                      if (inpArr[i] + inpArr[j] + inpArr[k] == 0) {
//                             threePairs.push([inpArr[i], inpArr[j], inpArr[k]])
//                             let p = [inpArr[i], inpArr[j], inpArr[k]].sort()
//                             threePairsSet.add(p.toString())
//                      }

//               }
//        }
// }

// console.log(threePairsSet);


// let inpArr =  [1, 2, 3, 4, 5, 6, 7]
// let k = 3;
// let a =inpArr.splice(-k);
// let b =inpArr.splice(0,k +1);
// console.log([...a , ...b]);





