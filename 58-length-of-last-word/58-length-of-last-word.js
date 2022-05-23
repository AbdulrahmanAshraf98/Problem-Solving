/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let words=  s.split(' ');
    words=words.filter(word=> /\S/.test(word));
    const lestWord= words.length-1;
    const lestWordLength=words[lestWord].length;
    return lestWordLength;
};