
const getSumOfArray=(array:number[])=> array.reduce((acc,current)=>acc+current,0);
function pivotIndex(nums: number[]): number {
        let total:number = getSumOfArray(nums)
        let  left =0;
        let pivotIndex= nums.findIndex((number:number,index:number)=>{
          let right= total-number-left;
          if(left===right){  
                return true;  
          }
          left+=number;    
        })
       
        return pivotIndex;
};