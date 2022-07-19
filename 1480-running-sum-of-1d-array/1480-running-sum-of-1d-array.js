/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let number=[];
    for(let i=0; i<nums.length;i++){
        let sum=0;
        for(let j=0;j<=i;j++){
            sum+=nums[j]
            if(j===i)number.push(sum)
        }
    }
    return number
};