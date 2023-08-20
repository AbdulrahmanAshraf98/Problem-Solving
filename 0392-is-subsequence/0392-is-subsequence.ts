function isSubsequence(s: string, t: string): boolean {
//    let subsequenceCharacter={};
//    let subSequence="";
//    s.split("").forEach(character=>subsequenceCharacter[character]=character);
//    t.split("").forEach(character=>{
//        if(subsequenceCharacter[character]){

//            subSequence+=character;

//        }
//    })
//    console.log(subSequence)
//    if(s.length!==subSequence.length){
//        return false
//    }
//    return s===subSequence;
    const sequenceLength=s.length
    let i = 0 ;
    for(let j=0;j<=t.length;j++){
        if(i<sequenceLength&&s[i]===t[j]){
            i++;
        }
    }
    return i===sequenceLength
};