/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let words=  s.split(' ');
    words=words.filter(function(str) {
    return /\S/.test(str);});
    const lestWordLength=words[words.length-1].length;
    return lestWordLength;
};