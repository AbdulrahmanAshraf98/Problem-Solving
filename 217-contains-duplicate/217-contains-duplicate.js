/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const arraySize=nums.length;
    let constIsDuplicate=false;
    for(let i=0 ;i<arraySize ;i++){
        for(let j=i+1;j<arraySize ;j++){
            if(nums[i]===nums[j])
            constIsDuplicate= true;
    
        }
        if(constIsDuplicate)
            {
                break;
            }
      
    }
    return constIsDuplicate
};