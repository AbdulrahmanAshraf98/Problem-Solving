/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const resualt=[]
    const remon={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let arraylength= s.length;

    for(let i=0;i<arraylength;i++){

  
        let Firstkey= s[i];
        let secondkey= s[i+1];
        if(Firstkey ==='I'&&secondkey==='V'||Firstkey ==='I'&&secondkey==='X')
            {
                
                 resualt.push(remon[secondkey]-1) ;
                i=i+1
               
            }
        else if(Firstkey ==='X'&&secondkey==='L'||Firstkey ==='X'&&secondkey==='C'){
               resualt.push(remon[secondkey]-10) ;                
            i=i+1;
        }
        else if(Firstkey ==='C'&&secondkey==='D'||Firstkey ==='C'&&secondkey==='M'){
          resualt.push(remon[secondkey]-100) ;                
            i=i+1;
        } 
        else{
           resualt.push(remon[Firstkey])   
        }
    }
        
       
    return resualt.reduce((prev,current)=>prev+current,0);
};