let obj={
    name: "John",
    age: 30,
    city: "New York"
}

const funcObj= (obj)=>{
    obj.age=31
}
funcObj(obj)
console.log(obj) //{ name: 'John', age: 31, city: 'New York' }