const b = [true, 'hello', 5, 12, -200, false, false, 'word'];

function func(b)
{
    const a = {};
    for (const el of b)
    {
        const t = typeof el;
        if(a[t]!==undefined) a[t]++;
        else a[t]=1;
    } 
    return  a;
};

console.log(func(b));
