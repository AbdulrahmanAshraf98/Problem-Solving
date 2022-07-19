/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const number=x.toString();
    const MAX_LMT=2147483647,MIN_LMT=-2147483648;

    let reverseNumer=number.split('').reverse().join('');
    if(x<0){
       reverseNumer= '-'+reverseNumer.split('-').join('');
    }
    console.log(number,reverseNumer)
    return (MAX_LMT>=reverseNumer&&reverseNumer>MIN_LMT)?reverseNumer:0;
};