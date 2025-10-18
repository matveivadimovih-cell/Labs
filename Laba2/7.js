const obj1 = { 
    name: '12345' 
};
let obj2 = { 
    name: '12345' 
};

obj1.name = '54321';
obj2.name = '54321';

obj2 = {
    name: "qwer 12345"
};

console.log(obj1.name);
console.log(obj2.name);
