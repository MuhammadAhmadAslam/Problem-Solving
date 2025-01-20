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



// let targetArr = []
// var twoSum = function (nums, target) {
//        for (let i = 0; i < nums.length; i++) {
//               if (nums[i] + nums[i + 1] == target) {
//                      targetArr.push([nums[i], nums[i + 1]])
//                      return targetArr
//               }
//        }
// };

// let nums = [1, 5, 3, 6, 8]
// let target = 9

// let result = twoSum(nums, target)
// console.log(result, "result")
// https://leetcode.com/problems/add-two-numbers/description/
var addTwoNumbers = function (l1, l2) {
       let firstArr = []
       let secArr = []
       for (let i = l1.length; i > 0; i--) {
              firstArr.push(l1[i - 1])
       }
       console.log(firstArr, "firstArr")

       for (let j = l2.length; j > 0; j--) {
              secArr.push(l2[j - 1])
       }

       console.log(secArr, "secArr")

       let string1 = firstArr.join("")
       let string2 = secArr.join("")
       string1 = parseInt(string1)
       string2 = parseInt(string2)
       let resulttring = string1 + string2
       console.log(resulttring, "resulttring");
       resulttring = String(resulttring)
       let resultArr = resulttring.split("")
       console.log(resultArr, "resultArr");

};

let result = addTwoNumbers([2, 4, 3], [5, 6, 4])



let findMissingNumber = (arr) => {
       let infiniteArray = Array.from({ length: arr.length + 1 }, (_, i) => i);
       console.log(infiniteArray, "infinite array");
   
       let missingNumber = infiniteArray.find(num => !arr.includes(num));
       let missingNumber2 = infiniteArray.filter(num => !arr.includes(num));
       console.log(missingNumber);
       console.log(missingNumber2, "missing number");
   };
   
   findMissingNumber([3, 7, 1, 2, 8, 4, 5])
   
   
   let str = "Hello World";
   
   let reverseString = (str) => {
       let arr = []
       for (let i = str.length - 1; i >= 0; i--) {
           const element = str[i];
           arr.push(element.toLowerCase())
           console.log(element);
       }
       console.log("called");
   
       return arr
   }
   reverseString(str)
   
   
   let checkPalindrome = (str) => {
       str = str.toLowerCase()
       let arr = []
       let reverseStr = reverseString(str).join("")
       console.log(reverseStr, "Reverse str");
       console.log(str == reverseStr, "condition checked");
   }
   
   checkPalindrome(str)
   
   
   
   
   
   const myAtoi = function(s) {
     let extracting = Array.from(s).map(item => parseInt(item)).filter(a => !isNaN(a));
     let intoNumber = extracting.join("")
     intoNumber = parseInt(intoNumber)
     return intoNumber
   };
   
   
   let string = "0-1"
   let result2 = myAtoi(string)
   console.log(result2 , "result");
