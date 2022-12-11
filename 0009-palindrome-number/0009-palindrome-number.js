/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x <0){
        return false
    }

    let m =x.toString().split('').reverse().join('');
    let s = x.toString()
    if(m === s){
        return true
    }
    return false

};