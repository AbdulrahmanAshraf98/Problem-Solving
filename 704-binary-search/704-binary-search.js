/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const middleIndex=Math.ceil(nums.length/2);
    const middleElement=nums[middleIndex];
    console.log(middleElement);
    if(nums.length===1 &&target===nums[0]){
        return 0;
    }
    if(target===middleElement){
        return middleIndex
    }
    else if(target<middleElement){
        for(let i=0;i<middleIndex;i++){
            if(target===nums[i]){
                return i;
              } 
        }
    }
    else{
         for(let i=middleIndex+1;i<nums.length;i++){
            if(target===nums[i]){
                return i;
              } 
             
        }
    }
    return -1
};