

function inc(num)
{
    if(typeof num==='object')
    {
        num.n++;
    }
}

const obj = { n: 5 }; 
inc(obj); 
console.dir(obj);