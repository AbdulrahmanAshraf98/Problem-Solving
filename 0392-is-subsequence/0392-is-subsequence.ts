function isSubsequence(s: string, t: string): boolean {
    let i=0;
    t.split("").forEach(character=>{
        if(character===s[i]){
            i++;
        }
    })
    return i===s.length
};