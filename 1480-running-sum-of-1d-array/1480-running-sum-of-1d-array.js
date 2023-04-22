/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    let sum = 0;
    const answer = nums.map(num=>{
        
        sum += num;
        return sum;
    })
    return answer;
};