// STRINGS
console.log("strings")  
// ----------------------------------------------------------------------------------------------------------------------

// console.log("hello programmers myself pritish")
// inside let here we can mainly change the value means if te value of x is 7 then we can change it to the value
// value of 88 but in const we cant even change also for which let keyword is the best of all

var x = 4
var x = 5
console.log(x)
let yx = 88
console.log(yx)

const h = 9
console.log(h)
// null operator
console.log("first name")

// mainly we have learnt about 3 things one is the lowercase and the other is the uppercase and the other is the 
// indexof mainly lowercase is toLowerCase() and the uppercase is toUpperCase() and the last one is
// indexof with an attribute of indexOf and these are the 3 things that can happen

let firstname = "pritish"
let lastname = "panda"
console.log(firstname , lastname)
let full_name = firstname + lastname
console.log(fullname)
console.log(fullname[3])
console.log(fullname[2])
console.log(firstname.toLocaleLowerCase())
console.log(firstname.toLocaleUpperCase())

let helper1 = "pritish"
let helper2 = "PANDA";
console.log(helper1.toUpperCase())
console.log(helper2.toLowerCase())
let yyx = helper1.indexOf("i")
console.log(yy)


// here we can say that mainly if we caan trim then the extra spaces get removed and also we get the desired
// result and we can make the following but here we cant do that

let hobbies = '   coding reading hopping'
console.log(hobbies)
let resultz = hobbies.trim();
console.log(resultz);

// if we have to check that something exist or not then we have to make the include statement
// and here we can do that by include statement
// for mainly searching anything we can use these statements and thus we can get that


let helper = 'reading writing'
let resultd = helper.trim()
let yd = result.includes("wriTing");
console.log(y)


// email check karna hai and we have to check that @ exist or not then we can give the include word

let yyz = 'u b h y y u i o'
let result = yy.trim()
let z = result.includes("u")
console.log(z)

// mainly for finding the substring we use slice that mean for dividing the string we use slice and that is like this
let fullname = "wowhelper"
let s = fullname.slice(0 , 4) 
console.log(s) 

let yyr = "pritish ranjan panda"
let yr = yy.slice(0 , 11)
console.log(y)


// slice doesnt change the variable it only makes the copy of the singe array and also helps inside the making 
// of the array and this is one of the reasons why slice is used because it only helps inside the making of
// it only helps in making of the string and doesnt help in anything

let str = "helper"
str[0] = "p"
str[1] = "q"
console.log(str)

// string ans inmutable means that if we change these like the following then we cant change on
// not like c ++


// --------------------------------------------------------------------------------------------------------------------------------------------


// NUMBERS
console.log("numbers")

// ---------------------------------------------------------------------------------------------------------------------------------------------

// division
let x  = 50;
let yrx = x / 2
console.log(y)
console.log(y / 2)

// modulo
console.log(x % 2)
console.log(y % 2)

// mainly you can convert a string to a number by this

let x = 50
let yff = "sum of 26 and 24 = "
console.log(y + x)


// mainly there are 2 types of equality operators and they are loose equality and the other is strict equality
// in loose equality we can say that here there is no type checking but inside strict equality there is 
// type checking means if age is 22 then in loose it is false and in strict it is true

let age = 22
console.log(age == "22")
console.log(age === "22")

// type of something can be known by string typeof method
// mainly its like
let ydd = 99
console.log(y , typeof y)
let yy = "hello"
console.log(yy , typeof yy)

// now the nethod to convert string to number is Number
let x = "889"
let yfff = Number(x);
console.log(y , typeof y)
let u = "998877"
let uu = Number(u)
console.log(u , typeof uu)

let x = 88
console.log(x , typeof x)
let yo = String(x)
console.log(y , typeof y)

let x = 5
let y = Boolean(x)
console.log(y)
