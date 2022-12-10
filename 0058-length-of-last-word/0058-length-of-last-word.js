/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(' ');
    let arr1 =[]
 
   for(let i =0 ;i<arr.length;i++){
       if(arr[i] != ""){
            arr1.push(arr[i])
       }
    
   }
    console.log(arr1)
    return arr1[arr1.length -1].length
};