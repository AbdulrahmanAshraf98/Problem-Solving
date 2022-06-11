/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
//     nums.sort();
//     nums.reverse();
   
//     return nums.join('')
    if (nums.join('') == 0)
        return '0'
    let res = nums.map(val => val + '')
    res.sort((a, b) => (b + a) - (a + b))
    return res.join('')

};