/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(words) {
    
    const newWords=words.trim().split(" ");
    const lastWord=newWords[newWords.length-1]
    return lastWord?lastWord.length:0;
};