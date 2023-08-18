function twoSum(nums: number[], target: number): number[] {
    const hashMap={}
    for(let i=0;i<=nums.length;i++){
         const number=nums[i];
         let numberToFind=target-number;
      if(hashMap[number]>=0){
         
          return [hashMap[number],i]
      }
      else{     
        hashMap[numberToFind]=i;
      }   
      }
     
      
    
    
    return null
};