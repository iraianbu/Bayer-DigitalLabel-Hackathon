async function main()
{
    var transactions=[[45676, 45688], [45683, 45677, 45688, 45672], [45690, 45674, 45687, 45682], [45681, 45687, 45684], [45689, 45679, 45672], [45676, 45684, 45683], [45676, 45673, 45685], [45681, 45686], [45687, 45677], [45678, 45688, 45673, 45686], [45687, 45678], [45672, 45675], [45681, 45673, 45678], [45675, 45685], [45687, 45674, 45686, 45689], [45674, 45687], [45688, 45683, 45686, 45687], [45681, 45677, 45682, 45689], [45679, 45677, 45682, 45680], [45680, 45676, 45684, 45678], [45682, 45688], [45681, 45688, 45672], [45672, 45675, 45676, 45684], [45689, 45687, 45679, 45677], [45686, 45679, 45687], [45686, 45676, 45683], [45672, 45684], [45684, 45679], [45690, 45674, 45682], [45676, 45678, 45685]];
    var total=transactions.length;
    var minvalue=45672;
    var maxvalue=45690;
    var min_support=2;
    var min_confidence=20;
    function support(n)
    {
        let c=0;
        for(let i=0;i<transactions.length;i++)
        {
    
            for(let j=0;j<transactions[i].length;j++)
            {
                if(transactions[i][j]==n)
                {
                    c++;
                    break;
                }
            }
        }
        return c;
    
    }
    
    function support2(n1,n2)
    {
        let c=0;
       
        for(let i=0;i<transactions.length;i++)
        {
            let b1=0,b2=0;
            for(let j=0;j<transactions[i].length;j++)
            {
                if(transactions[i][j]==n1)
                {
                    b1=1;
                    break;
                }
            }
            if(b1==1)
            {
                for(let j=0;j<transactions[i].length;j++)
                {
                    if(transactions[i][j]==n2)
                    {
                        b2=1;
                        break;
                    }
                }
            }
            if(b1&&b2)
            c++;
        }
        return c;
    
    }
    function support3(n1,n2,n3)
    {
        let c=0;
       
        for(let i=0;i<transactions.length;i++)
        {
            let b1=0,b2=0,b3=0;
            for(let j=0;j<transactions[i].length;j++)
            {
                if(transactions[i][j]==n1)
                {
                    b1=1;
                    break;
                }
            }
            if(b1==1)
            {
                for(let j=0;j<transactions[i].length;j++)
                {
                    if(transactions[i][j]==n2)
                    {
                        b2=1;
                        break;
                    }
                }
            }
            if(b1&&b2)
            {
                for(let j=0;j<transactions[i].length;j++)
                {
                    if(transactions[i][j]==n3)
                    {
                        b3=1;
                        break;
                    }
                }
            }
            if(b1&&b2&&b3)
            c++;
        }
        return c;
    
    }
    
    
    
    //k=1
    var supporttable = new Map();
    for(let i=minvalue;i<=maxvalue;i++)
    {
        let n=support(i);
        supporttable.set(i,n);
    }
    
    for (const [key, value] of supporttable.entries()) {
            if(value<min_support)
            {
                supporttable.delete(key);
            }
    }
    //k=2
    var supporttable2={};
    var sp1elements=[]
    
    var sp2elements=[];
    for (const [key, value] of supporttable.entries()) {
        sp1elements.push(key);
    }
    for(let i=0;i<sp1elements.length;i++)
    {
        for(let j=i+1;j<sp1elements.length;j++)
        {
            let ans=support2(sp1elements[i],sp1elements[j]);
            let arr=[sp1elements[i],sp1elements[j]];
            
            supporttable2[arr]=ans;
        }
    }
    
    
    for (const [key, value] of Object.entries(supporttable2)) {
        if(value<min_support)
        {
            delete supporttable2[key];
        }
    }
    
    var supporttable3={};
    for (const [key, value] of Object.entries(supporttable2)) {
    
        let a=key.split(",");
        a=a.map(Number);
        sp2elements.push(a);
     }
    
    
    for(let i=0;i<sp2elements.length;i++)
    {
        for(let j=i+1;j<sp2elements.length;j++)
        {
            let arr1=sp2elements[i];
            let arr2=sp2elements[j];
            if(arr2.includes(arr1[0])||arr2.includes(arr1[1]))
            {
                let arr3=[];
                if(arr2.includes(arr1[0]))
                {
                    arr3.push(arr1[0]);
                    arr3.push(arr1[1]);
                    if(arr2[0]!==arr1[0])
                    {
                        arr3.push(arr2[0]);
                    }
                    else
                    arr3.push(arr2[1]);
                }
                else{
                    arr3.push(arr1[0]);
                    arr3.push(arr1[1]);
                   
                    if(arr2[0]!==arr1[1])
                    {
                        arr3.push(arr2[0]);
                    }
                    else
                    arr3.push(arr2[1]);
                }
                let ans=support3(arr3[0],arr3[1],arr3[2]);
                arr3.sort();
                supporttable3[arr3]=ans;
               
            }
           
        }
    }
    
    for (const [key, value] of Object.entries(supporttable3)) {
        if(value<min_support)
        {
            delete supporttable3[key];
        }
    }
    finalres=[];
    console.log(supporttable3);
    
    
    function generatePowerSet(array) {
        var result = [];
        result.push([]);
      
        for (var i = 1; i < (1 << array.length); i++) {
          var subset = [];
          for (var j = 0; j < array.length; j++)
            if (i & (1 << j))
              subset.push(array[j]);
      
          result.push(subset);
        }
      
        return result;
      }
    for (const [key, value] of Object.entries(supporttable3)) {
        var arr=key.split(',').map(function(item) { return parseInt(item, 10); });
        subsets=generatePowerSet(arr);
        for(let i=0;i<subsets.length;i++)
        {
            if(subsets[i].length>0&&subsets[i].length<3)
            {
                var lhs=subsets[i];
                let rhs = arr
                     .filter(x => !subsets[i].includes(x))
                     .concat(subsets[i].filter(x => !arr.includes(x)));
                let s1=0,s2=0;
                s1=support3(arr[0],arr[1],arr[2]);
                if(lhs.length==1)
                {
                    s2=support(lhs[0]);
                }
                else{
                    s2=support2(lhs[0],lhs[1]);
                }
                console.log(lhs,rhs,(s1/s2)*100);
                if((s1/s2)*100>=min_confidence)
                {
                   
                   var df={};
                   df[lhs]=rhs;
                   finalres.push(df);
                }
    
            }
    
        }
      
        
    }
    console.log(finalres);
}

module.exports= main;
// for (const [key, value] of supporttable.entries()) {
//     console.log(key,value);
// }


