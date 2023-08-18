function twoSum(nums: number[], target: number): number[] {
    const sum={}
    
   
     
     
      for(let i=0;i<=nums.length;i++){
         const number=nums[i];
         let total=target-number;
      if(sum[number]>=0){
         
          return [sum[number],i]
      }
      else{     
        sum[total]=i;
      }   
      }
     
      
    
    
    return null
};