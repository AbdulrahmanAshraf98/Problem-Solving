/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
     let numbers={};
    let containDuplicated=false
    nums.every((number,index)=>{
        if(!numbers[number]&&numbers[number]!==number){ 
        numbers[number]=number;  
        return true 
        }
        containDuplicated=true;
        return false;
    });
     return containDuplicated;
}