console.log("Hello world!");
//console.log(a); javascipt is interprited langauage hence code will run line by line hence before this line code gave output but on this line it gave error and code stopped
let a =1;
//const a =2; // let,var value can be cahnged throughout the programme, but const value cannot be changed it will throw an error
console.log(a);


//datatypes
let name = "sohail"
let age ="23"
let ismarried ="married"
//if else statement
if(ismarried == "single")
{
console.log("this person name is " + name + " and thier age is "+ age + " and they are " + ismarried);
}
else
{
console.log("this person name is " + name + " and thier age is "+ age + " and they are " + ismarried);
}

//loops
let ans =0;
let i=1;
while(i<=100)
{
    ans = ans +i;
    i++;
}
console.log(ans);
let ans1 =0;
for(let i =1; i<=100;i++)
{ ans1= ans1 +i;
    }
console.log(ans1)


//arrays
const age1=[21,20,23,24];
console.log(age1); //by default Arrays.toSr=tring method to print arrays


//Objects

const users =[1,2,3,4]



//functions

function sum (a,b)
{
    let ans = a + b;
    return ans;
}

const ans2 = sum(2,4);
console.log(ans2);


function sum(num1, num2,funcall) {
    let result = num1 + num2;
    funcall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

sum(1,2,displayResult);