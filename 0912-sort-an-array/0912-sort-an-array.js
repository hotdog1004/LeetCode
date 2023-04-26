/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    
    let heapify = (heapSize, parentIndex) => {
        let left = parentIndex * 2 + 1;
        let right = parentIndex * 2 + 2;
        let largest = parentIndex;
        
        if(left < heapSize && nums[left] > nums[largest]) largest = left;
        if(right < heapSize && nums[right] > nums[largest]) largest = right;
        
        if(largest !== parentIndex){
            [nums[largest], nums[parentIndex]] = [nums[parentIndex], nums[largest]];
            heapify(heapSize, largest);
        }
    }
    
    let heapSort = () => {
        const length = nums.length;
        
        for(let i = Math.floor(length/2)-1; i >= 0; i--){
            heapify(length, i);
        }
        
        for(let i = length-1; i > 0; i--){
            [nums[0], nums[i]] =[nums[i], nums[0]];
            
            heapify(i, 0);
            
        }
    }
    
    heapSort();
    
    return nums;
};