const funcs = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}

function func(funcs)
{
    let res = [];
    for(const name in funcs)
    {
        if(typeof funcs[name] === 'function') res.push([name, funcs[name].length])
    }

    return res;

}

console.log(func(funcs));