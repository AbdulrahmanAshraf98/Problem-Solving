/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let rightSums=0;
    let leftSums=0;
    let pivotIndex=-1;
  for(let i=0;i<nums.length;i++){
      for(let x=0;x<i;x++){
          rightSums+=nums[x];
      }
      for(let y=i+1;y<nums.length;y++){
          leftSums+=nums[y];
      }
     
      if(rightSums===leftSums){
           pivotIndex=i;
          break;
        
      }
       rightSums=0;
       leftSums=0;
  }  
    return pivotIndex
};