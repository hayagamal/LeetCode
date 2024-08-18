/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(obj && typeof obj === 'object' && Object.keys(obj).length <= 0 && Object.getPrototypeOf(obj) === Object.prototype ){
        return true
    }
    else if(obj.length <= 0 && Array.isArray(obj)){
        return true
    }
    
    else return false
    
    
};