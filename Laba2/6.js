function average(a, b)
{
    return (a+b)/2;
}
function square(a)
{
    return a*a;
}
function cube(a)
{
    return a**3;
}
function calculate(a,b)
{
    const arr = new Array(b-a+1);
    for(let i = a; i<=b; i++)
    {
        arr[i-a] = average(square(i),cube(i));
    }
    return arr;
}

console.log(calculate(0,9));