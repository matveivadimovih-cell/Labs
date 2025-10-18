function range(start, end)
{
    let d = end - start;
    const a = new Array(d);
    for(let i = 0; i<=d; i++)
    {
        a[i] = start+i;
    }
    return a;
}
console.log(range(15, 30));

function rangeOdd(start, end)
{
    let d = Math.floor((end+1)/2) - Math.floor(start/2);
    const a = new Array(d);
    let n = 0;
    if(start%2===0)n++;
    for(let i = 0; i<d; i++)
    {
        a[i] = start + i*2+n;
    }
    
    return a;
}

console.log(rangeOdd(15,30));