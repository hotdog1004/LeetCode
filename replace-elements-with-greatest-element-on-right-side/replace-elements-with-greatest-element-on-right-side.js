/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    
    if(arr.length === 1) return [-1];
    let result = new Array(arr.length);
    let slicedArr = [];
    for(let i = 0; i < arr.length-1; i++){
        slicedArr = arr.slice(i+1);
        result[i] = Math.max(...slicedArr);
        
    }
    result[arr.length-1] = -1;
    
    return result;
};