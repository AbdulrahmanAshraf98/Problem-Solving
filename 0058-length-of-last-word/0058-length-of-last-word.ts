function lengthOfLastWord(words: string): number {
    // let length=0;
    // let space=false;
    // let charcter=false;
    // let i = words.length-1;
    // while(!space&&i>=0){
    //  if(words[i]!==" "&&!charcter){
    //      charcter=true;
    //  }
     
    //  if(words[i]===" "&&charcter){
    //     space=true;
    //     charcter=false;
    //  }
    //  if (charcter){
    //  length++;
    //  } 
    //  i--;
    // }
    // return length
    const newWords=words.trim().split(" ");
    const lastWord=newWords[newWords.length-1]
    return lastWord?lastWord.length:0;
    
};