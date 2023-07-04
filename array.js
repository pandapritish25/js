// this is the way of concatanating the array and also we can make changes the array by finding the indexof
// and other things
// arrays
// now we can start the part of arrays
let dishes = ["paratha" , "dahivara" , "x"]
console.log(dishes[0])
dishes[0] = "parattha"
console.log(dishes)
dishes[1] = "ye nahi khana"
console.log(dishes)
let helper = ['1' , '2'];
console.log(helper)
helper[0] = 1;
helper[1] = 2;
console.log(helper)
helper[1] = 3
console.log(helper)

// mainly join means it will join all the 3 website together and will give the following output
console.log(dishes.join('-'))
console.log(dishes.join("----"))
console.log(dishes.indexOf("x"))
let helper1 = ['3' , '4',  '5']
console.log(helper1.concat(helper))
console.log(helper)
console.log(helper1)
console.log(helper.concat(helper1))
console.log(dishes.concat(helper))
console.log(dishes.length)
console.log(helper.length)
console.log(helper1.length)

//  we have to store all of these inside the new array because we have to take all the elements inside the 
//  single array thus we have to concatanete them

let helper4 = dishes.concat(helper1)
console.log(helper4)
console.log(helper4.length)
// push and pop are the same function as in the simpler one

console.log(helper4.push('00'))
console.log(helper4)
helper4.pop()
console.log(helper4)

let email = "pritishdps25@gmail.com"
console.log(email.includes("x"))
