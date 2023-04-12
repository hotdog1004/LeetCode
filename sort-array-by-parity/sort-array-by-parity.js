/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    if(nums.length === 0) return nums;
    
    let idx = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
            idx++;
        }
    }
    
    return nums;
};