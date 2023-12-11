/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function remove(string)
{
  let p = [",",".","/","[","]","{","}","(",")","!","?"];

  for(let i = 0; i< p.length;i++)
{
string = string.split(p[i]).join("");
}
return string;
}







function isPalindrome(str) {
str.trimStart();
str.trimEnd();
let str1 = str.toLowerCase();
let str5 = remove(str1);
let str6 = str5.split(" ").join("");
console.log(str6);
let length = str1.length/2;
console.log(length);
let first = str1.substring(0,1);
console.log(first);
for(let i = 0 ; i < str6.length/2 ; i++)
{
if(str6.charAt(i) == str6.charAt(str6.length-1-i))
{
  console.log("matched")
}
else{
  return false;
}

}


return true;
}

module.exports = isPalindrome;

