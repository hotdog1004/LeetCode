/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr = nums.map(num=>{
        return Math.pow(num, 2);
    })
    return arr.sort((a,b)=>a-b);
};