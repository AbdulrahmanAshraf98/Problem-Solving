/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(array, target) {
   	let result = [];
	const arrSize = array.length - 1;
	for (let i = 0; i < arrSize; i++) {
        const findNumber=target-array[i];
		for (let j = i+1; j <=arrSize; j++) {	
			if (findNumber === array[j]) {
				result = [i, j];
				break;
			}	
		}
			// if (result.length===2) {
			// 	break;
			// }
	}
	return result;
};