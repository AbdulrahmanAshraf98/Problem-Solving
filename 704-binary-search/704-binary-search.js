/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
const arraySize = nums.length;
	let start = 0;
	let end = arraySize - 1;
	let middle = Math.floor((start + end) / 2);
	while (nums[middle] !== target && start <= end) {
		if (nums[middle] < target) {
			start = middle + 1;
		} else {
			end = middle - 1;
		}
		middle = Math.floor((start + end) / 2);
	}
	return nums[middle] === target ? middle : -1;
};