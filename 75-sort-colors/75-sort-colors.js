/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const swap = (array, firstElement, secondElement) => {
	const temp = array[firstElement];
	array[firstElement] = array[secondElement];
	array[secondElement] = temp;
};
var sortColors = function(nums) {
    	const arraySize = nums.length;
		let lowest;
	for (let i = 0; i < arraySize; i++) {
		lowest = i;
		for (let j = i + 1; j < arraySize; j++) {
			if (nums[lowest] > nums[j]) {
				lowest = j;
			}
		}
		if (lowest !== i) {
			swap(nums, i, lowest);
		}

		console.log(nums);
		console.log("-------------------------");

		console.log(nums);
		console.log("-------------------------");
		console.log("-------------------------");
	}
};