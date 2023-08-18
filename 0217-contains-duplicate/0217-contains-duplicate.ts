function containsDuplicate(nums: number[]): boolean {
    let numbers={};
    let containDuplicated=false
    nums.every((number:number,index:number)=>{
        if(!numbers[number]&&numbers[number]!==number){ 
        numbers[number]=number;  
        return true 
        }
        containDuplicated=true;
        return false;
    });
    // const sortingNumber=nums.sort((a:number,b:number)=>a-b);
  
    // sortingNumber.every((number:number,index:number)=>{
    //     if(number===sortingNumber[index+1]){
    //         containDuplicated=true;
    //         return false;
    //     }
    //     return true
    // });
   
    return containDuplicated;
};