/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function removethatcharctor(tempstr)
{
let str = tempstr;

let newstr = str.substring(1);
return newstr;

}




function isAnagram(str1, str2) {

let firststring = str1;
const secstring   = str2;
//first checking that both strings has same number of of chracter using length fucntion

if(firststring.length == 0 && secstring.length == 0)
{
return true;
}

if(str1.length != str2.length)
{
  return false;
}
else{
//checking for str2 with each charcter in str1 if that charactor presnt we will remove it from str1
let i =0;
while(firststring.length != 0 && i <= secstring.length)
{
j=0;
    for(let j = 0; j<= str2.length; j++)
    { let first = firststring.charAt(0);
      let sec   = secstring.charAt(j);
if(firststring.charAt(0) == secstring.charAt(j))
{
firststring = removethatcharctor(firststring);

}

// check if compared characters are in same casing 
else if(first.toLowerCase() == sec.toLowerCase())
{
firststring = removethatcharctor(firststring);
}

    }


i++;

}

if(firststring.length == 0)
{
  return true;
}
else
{
  return false;
  }



}
}

module.exports = isAnagram;
