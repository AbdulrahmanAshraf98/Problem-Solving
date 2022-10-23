/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(array, target) {
    const hashMap={};
    for(let i =0 ; i<array.length;i++){
        if(hashMap[array[i]]>=0){
            return [hashMap[array[i]],i]
   
        }
        else{
         const numberTofind=target-array[i];
         hashMap[numberTofind]=i;
        }
    }
    return null;
};