function isPalindrome(s: string): boolean {
    const NonAlphanumericCharactersRegex=/[^A-Za-z0-9]/g;
    const word:string=s.toUpperCase().replace(NonAlphanumericCharactersRegex,"").trim();
    const reverseDWord:string=word.split("").reverse().join("");
    return word===reverseDWord;

};