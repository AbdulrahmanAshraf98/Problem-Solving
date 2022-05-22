/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  arraysize=nums.length;
   let resulat=[];
    let nextelement;
    for(let i=0;i<arraysize;i++)
        {
            for(let j=i+1;j<arraysize;j++)
                {
                    let sum=nums[i]+nums[j];
                      if(sum==target)
                {
                    resulat=[i,j];
                    break;
                }
            else{
                 nextelement++;
            }
                }
          

        }
    return resulat;
};