/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let number=x.toString();
    let reverseNumber=x.toString().split('').reverse().join('');
    console.log(reverseNumber);
    if(number!==reverseNumber){
        return false
    }
    return true
};