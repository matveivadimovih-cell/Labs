const b = [true, 'hello', 5, 12, -200, false, false, 'word'];

function func(b)
{
    const a = {};
    for (const el of b)
    {
        const type = typeof el;
        const num = a[type] || 0;
        a[type] = num+1;
    }
    return a;
};

console.log(func(b));
