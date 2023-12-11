/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

const num = numbers;

let current = numbers[0];

for(let i = 1; i <= numbers.length-1 ; i++)
{
if(current < num[i])
{
    current = num[i];
}


}
return current;
}

module.exports = findLargestElement;

