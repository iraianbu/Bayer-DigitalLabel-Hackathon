const GenerateCharSet=()=>{

    
    let s="";
    for(let i=0;i<10;i++)
    {
        let ch=i.toString();
        s=s+ch;
    }
    let ch="a";
    for(let i=0;i<26;i++)
    {
       
        s=s+ch;
        ch=String.fromCharCode(ch.charCodeAt() + 1)
    }
    ch="A";
    for(let i=0;i<26;i++)
    {
       
        s=s+ch;
        ch=String.fromCharCode(ch.charCodeAt() + 1)
    }

    return s;

}

const base62=(deci)=>{
   
    let hash_str="";
    let s=GenerateCharSet();
  
    while(deci>0)
    {
        hash_str=s[deci%62]+hash_str;
        deci=Math.floor(deci/62);
    }
     return hash_str;
}

var counters=[100,500000,100000]
async function main()
{
    var n=Math.floor((Math.random() * 2) + 1);
    var res=base62(counters[n]);
    counters[n]+=1;
    console.log(counters[n])
    return res;
}
console.log(main());
