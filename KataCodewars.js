* https://www.codewars.com/kata/return-the-day/train/javascript
```
JavaScript
function whatday(num) {
     switch(num) {
       case 1:
         return "Sunday";
       case 2:
         return 'Monday';
       case 3:
         return 'Tuesday';
       case 4:
         return 'Wednesday';
       case 5:
         return 'Thursday';
       case 6:
         return 'Friday';
       case 7:
         return 'Saturday';
       default:
         return 'Wrong, please enter a number between 1 and 7';
     }
   }

```
* https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
```
JavaScript
function DNAtoRNA(dna) {
let rna = dna.replace (/T/g, 'U')
return rna;
}
```
* https://www.codewars.com/kata/do-i-get-a-bonus/train/javascript
```
* https://www.codewars.com/kata/unfinished-loop-bug-fixing-number-1/train/javascript
```
JavaScript
function createArray(number){
     var newArray = [];

     for(var counter = 1; counter <= number; counter++){
       newArray.push(counter);
     }

     return newArray;
   }
```

* https://www.codewars.com/kata/string-average/train/python

```
JavaScript
function averageString(str) {
if (!str) return "n/a";
  let obj = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  };
  let obj2 = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  };

  const arr = str.split(' ');
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(obj[arr[i]] !== undefined){
      sum += obj[arr[i]];
    } else {
      return 'n/a'
      }
  }
  const avg = Math.floor(sum / arr.length)

  return obj2[avg];
}
```

* https://www.codewars.com/kata/do-i-get-a-bonus/train/javascript

```
JavaScript
'Do I get a bonus?'
function bonusTime(salary, bonus) {
str = '';
  if(bonus){
    return str = '£' + salary * 10
  } else{
    return '£' + salary;
  }
}
```
```
JavaScript
function flattenAndSort(array) {

 let res = [];
 array.forEach(el =>{
   if(Number.isInteger(el)){
     res.push(el)
     } else if(Array.isArray(el) && el.length) {
       res = [...res, ...el];
     }
 })
 return res.sort((a,b) => a - b)
}
https://www.codewars.com/kata/flatten-and-sort-an-array/train/javascript
```

```
who likes it?
function likes(names) {
const l = names.length;
  if (!l) return 'no one likes this';
  if (l === 1) return `${names[0]} likes this`;
  if (l === 2) return `${names[0]} and ${names[1]} like this`;
  if (l === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (l > 3) return `${names[0]}, ${names[1]} and ${l - 2} others like this`;
}
https://www.codewars.com/kata/who-likes-it/train/javascript
```

```
how much tax?
function howMuchTax(salary) {
  let tax20 = (45000 - 11500) * 20 / 100;
  let tax20sal = (salary - 11500) * 20 / 100;
  let tax40 = (150000 - 45000) * 40 / 100;
  let tax40sal = (salary - 45000) * 40 / 100;
  let tax45 = (salary - 150000) * 45 / 100;

  if (salary <= 11500) return 'You should pay no tax';
  if (salary > 11500 && salary <= 45000) return 'You should pay ' + '£' + (tax20sal) + ' in tax';
  if (salary > 45000 && salary <= 150000) return 'You should pay ' + '£' + (tax20 + tax40sal) + ' in tax';
  if (salary > 150000) return 'You should pay ' + '£' + (tax20 + tax40 + tax45) + ' in tax';

}
https://www.codewars.com/kata/how-much-tax/train/javascript
```
```
7 kyu
Thinkful - Number Drills: Congo warehouses
JavaScript:
function boxCapacity(length, width, height) {
let l = Math.floor((length * 12)/16);
let w = Math.floor((width * 12) / 16);
let h = Math.floor((height * 12) / 16);
let res = l * w * h;
  return res;
  https://www.codewars.com/kata/thinkful-number-drills-congo-warehouses/train/javascript
}
```