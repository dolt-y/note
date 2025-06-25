let obj={
    name: "John",
    age: 30,
    city: "New York"
}
let cloneObj = {...obj};
cloneObj.name = "Jane";
console.log(obj); // { name: 'John', age: 30, city: 'New York' }
console.log(cloneObj); // { name: 'Jane', age: 30, city: 'New York' }

let a=1
let b=a
b=2
console.log(a) // 1
console.log(b) // 2