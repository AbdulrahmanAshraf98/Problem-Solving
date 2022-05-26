/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
        let reverseWords= s.split(' ').reverse().filter(function(str) {
                return /\S/.test(str);
                  }) .join(' ');
        return reverseWords
};