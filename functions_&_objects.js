    //these are the normal function and also helo inside these statements and also can helo inside this
// these are the functions like c ++;

function helper(){
    console.log("hello")
    console.log("pritish")
}
helper()

let helper1 = function(){
    console.log("this is known as anonymus function")
}
helper1()
function helper2(){
    let n = 6;
    console.log(n + 5)
}
helper2()

function invitation(name){
    console.log('invited ${name} to the party')
}
invitation("marie")
let age_calc = function(birth , current){
    console.log(birth - current)
    console.log(current - birth)
}

age_calc(1023 , 2023)

let helper5 = function(b , c){
    let age = c - b;
    return age

}
let yz = helper5(2022 , 2023)
console.log(y)

// higher order functions order usage inside a function
// here we have to use function inside a function

// very simple this thing is that is fun is passed and then fun str will give the meaning 
// 

let uppercase = function(name){
    return name.toUpperCase()
}
let lowercase = function(name){
    return name.toLowerCase()
}
let helper6 = function(name , fun){
    return fun(name)
}
let x = "Pritish"
console.log(helper6(x , uppercase))
console.log(helper6(x , lowercase))

// when a function is to be executed only once and never to be executed once again is know as this type of 
// functions

(function(name){
    console.log("hello" , name)
})("pritish")

(function(name){
    console.log("only once exec" , name)
})("cant be executed more than once")

// hoisting
// mainly the fact is that we can declare the variable value at the first and then we can make the value to the last

// // mainly this is hoisting and only with the var and function

test = 5;
console.log(test)
var test

helper()
function helper(){
    console.log("hello")
}
helper1()
function helper1(){
    console.log("helloi")
}

let car = {
    name:"honda",
    age:"18",
    type:"petrol"
}
console.log(car)
console.log(car.name)
console.log(car.type)
console.log(car.age)

let helper = {
    x : "1",
    y : "2",
    z : "3",
    t : "4"
}
// mainly the thing in the array part is that one can pass from one part to another

console.log(helper)
console.log(helper.x)
console.log(helper.y)
console.log(helper.z)
console.log(helper.t)
// this is the main advantage of this that it doesnt affext the part of colour name
let y = "x"
console.log(helper[y])

helper.x = "10"
// if u want to change then directly change everything rather than changing a single statement
// just want to change if a particylar thing then we can change with this

helper.y = "20"
console.log(helper)
delete helper.y
console.log(helper)
delete helper.x
console.log(helper)
delete helper.z
console.log(helper)

let helperz ={
    x : "pritish",
    y : "ranjan",
    z : "panda"
}
console.log(helperz)
console.log(helperz.x)
console.log(helperz.y)
console.log(helperz.z)
delete(helperz.x)

console.log(helperz)
// methods
// here we can see all the types of methods

let person = {
    age : function(name){
        return name
    }
}
console.log(person.age("piri"))

let person1 = {
    x : "2",
    y : "2",
    z : function(){
        return `${this.x} ${this.y}`
    }
}
console.log(person1.z())
// access the objects in pairs
// here the objects are accessed in pairs

let blocklist = [{username : "pritish" , reason : "hello"} , {username : "piyush" , reason : "hui"}]
let n = blocklist.length
for(let i = 0; i < n; i++){
    console.log(blocklist[i].reason)
}

// mainly what happens when we pass that array by value tghen there is a problem because if we want to change the val
// value inside the first array the the value inside the second array is changed
// like if we change the value inside the first array then the value inside the second array is changed

let arr = [1 , 2 , 3 , 4 , 5]
let xi = arr
xi.shift()
xi[4] = 12
console.log(x)
console.log(arr)
// as we can see here that if we change the value of an array inside the 1st one then the value is also changes
//inside the second one also but we have to avoid that for this spread operator is used

//here it acts as an copy so this is the difference

let yi = [...arr]
console.log("operations on y")
y.shift()
y[4] = 3
console.log(y)
console.log(arr) 

// for in loop this is a kind of loop generally used for objects
// its just like maps like if we need to make the maps taken with us then just access the first one
// else its like mp[x]

let cari = {
    model : "p",
    name : "q",
    colour : "black",
    engine : "l"
}

for(key in car){
    console.log(key)
}
console.log("*******")
for(key in car){
    console.log(car[key])
}

