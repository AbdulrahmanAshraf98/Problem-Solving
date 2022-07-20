/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const arraysize=nums.length;
    let isduplicate=false;
    nums.sort((a,b)=>a-b);
    for(let i=0 ; i<arraysize;i++)
        {
        let nextelement=i+1;
           if(nums[i]==nums[nextelement])
               {
                   isduplicate=true;
                            break;
               }
        }
     return isduplicate;
}