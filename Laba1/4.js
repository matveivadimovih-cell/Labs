const b = [true, 'hello', 5, 12, -200, false, false, 'word'];

function func(b)
{
    const a = {};
    for (const el of b)
    {
        const t = typeof el;
        a[t] = (a[t] || 0) +1;
    }
    return a;
};

console.log(func(b));
