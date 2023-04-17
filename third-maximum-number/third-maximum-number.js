/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if(nums.length === 1) return nums[0];

    // 정렬부터 하기
    nums = nums.sort((a,b)=>b-a);
    
    let cnt = 1;
    for(let i = 1; i < nums.length; i++){
      if(nums[i-1] !== nums[i]) cnt++;

      if(cnt === 3) return nums[i]; 
    }
    return nums[0]
};