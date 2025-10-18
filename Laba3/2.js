const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(1, characters);
console.log(key);


function generateKey(len, nab)
{
    let res = '';
    let dl = nab.length;
    for(let i = 0; i<len; i++)
    {
        res += nab[Math.floor(Math.random() * dl)]
    }
    return res;
}
