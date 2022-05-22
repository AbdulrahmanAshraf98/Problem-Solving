/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const arraySize=nums.length;
    for(let i=0;i<arraySize;i++){
    const numbertofind=target-nums[i];
    for(let j=i+1;j<arraySize;j++)
        {
          if(numbertofind===nums[j])
              {
                  return[i,j]
              }
        }
        
    }
    return null ;
};