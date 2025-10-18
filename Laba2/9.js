const obj = [
    {name: "aaa", phone: "111111"},
    {name: "bbb", phone: "222222"},
    {name: "ccc", phone: "333333"},
]

function func (name)
{
    for(const mas of obj)
    {
        if(mas.name === name) return mas.phone;
    }
}

console.log(func("ccc"));