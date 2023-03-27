/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cnt = 0;
    const arr = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1) cnt++;
        else cnt = 0;

        if(cnt !== 0 && nums[i+1] === 0) arr.push(cnt);
    }
    arr.push(cnt);
    return Math.max(...arr);
};