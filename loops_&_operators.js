// // loops
// // for loops and this can help in these all 

for(let i = 0; i < 10; i++){
    console.log("pritish")
}
let dishes = ['hello' , 'biriyani' , 'helper']
for(let i = 0; i < dishes.length; i++){
    console.log(dishes[i])
}

let xx = 5000
if(x > 400){
    console.log("yes")
}
else{
    console.log("no")
}

// if and else if statement
let yx = 800
if(y > 40){
    console.log("helper1")
}
else if(y > 20){
    console.log("helper2")
}
else{
    console.log("helper3")
}

let xxx = 22
let yxx = 24
if(x > 20){
    if(y > 20){
        console.log("all the statements are true")
    }
    else{
        console.log("one statement is true")
    }
}
else{
    console.log("no statement is true")
}

x --
x -= 4;

if(x > 24){
    if(y > 20){
        console.log("all statements are correct")
    }
    else{
        console.log("one statement is correct")
    }
}
else{
    console.log("no statement is correct")
}
console.log(x)
console.log(y)

// //
// break means we have to not take that value and continue means we have to take that value and only that value
// to be skipped at that place 

for(let i = 0; i < 10; i++){
    if(i == 5){
        break
    }
    console.log(i)
}

let password = "hello@123"
if(password.length > 6 && password.includes("@")){
    console.log("the password is strong")
}
else{
    console.log("the password is weak")
}
if(password.length > 199){
    console.log("password is strong")
}
else{
    console.log("password is weak")
}

let x = false;
if(!x){
    console.log(x)
}
x = true
console.log(x)

let score = 100
if(true){
    console.log("helper")
    let score = 200
    console.log(score)
}


// ternary operators are the best to ise and also can help in these
let age = 100
let result = age > 17 ? "qualify" : "fail";
console.log(result)


// object using math like math and 
let xy = 7.6
console.log(Math.ceil(xy))