/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(array, target) {
//    	let result = [];
// 	const arrSize = array.length - 1;
// 	for (let i = 0; i < arrSize; i++) {
//         const findNumber=target-array[i];
// 		for (let j = i+1; j <=arrSize; j++) {	
// 			if (findNumber === array[j]) {
// 				return [i, j];
				
// 			}	
// 		}
			
// 	}
// 	return null;
    const hashMap={};
    for(let i =0 ; i<array.length;i++){
        if(hashMap[array[i]]>=0){
            return [hashMap[array[i]],i]
   
        }
        else{
         let numberTofind=target-array[i];
         hashMap[numberTofind]=i;
        }
    }
    return null;
};