/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const bulidString=(string)=>{
    let finalstring=[];
    const stringLentgh=string.length;
    for(let i=0;i<stringLentgh;i++){
        if(string[i]!=="#")
            {
                finalstring.push(string[i]);
            }
        else{
            finalstring.pop();
        }
    }
    return finalstring;
}
var backspaceCompare = function(s, t) {
    let first=bulidString(s);
    
    let second=bulidString(t);
    if(first.length!==second.length){
        return false;
    }
    else{
       first=first.join('');
       second=second.join('');
        if(first===second){
            return true
        }
        else{
             return false
        }
    }
    return  false
};