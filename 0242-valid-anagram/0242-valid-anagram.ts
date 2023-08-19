function isAnagram(s: string, t: string): boolean {
    let angramCharacter={}
    let isAnagram=true;
    if(s.length!==t.length){
     isAnagram=false
    }
    else{
    s.split("").forEach(character=>{
        if(angramCharacter[character]){
            angramCharacter[character]=angramCharacter[character]+1
        }
        else{
           angramCharacter[character]=1 
        }
    })
    t.split("").forEach(character=>{
        if(!angramCharacter[character]){
            isAnagram=false
        }
        if(angramCharacter[character]){
            angramCharacter[character]=angramCharacter[character]-1
        }
    })
    }
    
    return isAnagram
};