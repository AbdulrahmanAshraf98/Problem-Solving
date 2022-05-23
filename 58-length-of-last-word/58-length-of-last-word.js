/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let words=  s.split(' ');
    words=words.filter(function(str) {
    return /\S/.test(str);});
    const lestWord= words.length-1;
    const lestWordLength=words[lestWord].length;
    return lestWordLength;
};