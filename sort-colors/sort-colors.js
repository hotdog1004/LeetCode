/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for(let i = 0; i < nums.length; i++){
      let idx = i;
      for(let j = idx+1; j < nums.length; j++){
        if(nums[j] < nums[idx]) idx = j;
      }
      [nums[i], nums[idx]] = [nums[idx], nums[i]];
    }
    return nums;    
};