function func (ip)
{
    return ip.split('.').reduce((sum, zn, i) => sum + (+zn << (8 * (3-i))), 0);
}

console.log(func('165.225.133.150'));