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
```
8 kyu
Palindrome Strings
JavaScript:

function isPalindrome(line) {
    let linestr = line.toString();
    let len = linestr.length;
    let mid = Math.floor(len/2);
    if (len < 2) return true;

    for ( let i = 0; i < mid; i++ ) {
        if (linestr[i] !== linestr[len - 1 - i]) {
            return false;
        }
         return true;
    }
}
https://www.codewars.com/kata/57a5015d72292ddeb8000b31
```
```
BetaTesting Palindromes

function palindrome(str) {
let strlow = str.toLowerCase();
let len = strlow.length;
let mid = Math.floor(len / 2);

if (len < 2) return true;

for (let i = 0; i < mid; i++) {
if (strlow [i] !== strlow [len - 1 - i]) {
return false;
}
return true;
}
}
https://www.codewars.com/users/OlyaG/completed_solutions
````

```
How much water do i need?

function howMuchWater(water, load, clothes){
  if (clothes > load * 2) return 'Too much clothes';
  if (clothes < load) return 'Not enough clothes';
  let waterAmount = +(water * 1.1 ** (clothes - load)).toFixed(2);
  return waterAmount;
}
https://www.codewars.com/kata/575fa9afee048b293e000287
```
```
Beta  Palindrome
function isPalindrome(s) {
  let str = s.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s/g, "");
  let len = str.length;
  let mid = Math.floor(len/2);
  if (len < 2) return true;
  for (let i =0; i < mid; i++ ){
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
    return true;
  }

}
```
Rømer temperature
JavaScript

function celsiusToRomer(temp) {
return (temp * 21 / 40) + 7.5;

}
```

```
Maximum Triplet Sum (Array Series #7)
JavaScript:
function maxTriSum(numbers){
let sum = 0;
  let arr = [];
  let res = numbers.sort((a, b) => b - a);

  for(let i = 0; i < res.length; i++){
    if (arr.length >= 3){
      break
      }
    if (!arr.includes(res[i])){
      arr.push(res[i]);
      sum += res[i];
      }
    }
    return sum;
}
```
```
Palindrome checker
function isPalindrome(str) {
if (str === null) return false;
  let pal = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s/g, "");
  let ln = pal.length;
  let mid = ln / 2;

  for (let i = 0; i < mid; i++) {
    if (pal[i] !== pal[ln - 1 - i]) {
      return false;
    }
    return true;
  }
}
https://www.codewars.com/kata/palindrome-checker/train/javascript
```
```
8 kyu
Well of Ideas - Easy Version
JavaScript:
function well(x){
let res = 0;
for (let i =0; i < x.length; i++){
  if (x[i] === 'good'){
    res++;
  }
}
if (res > 0 && res < 3) {
  return 'Publish!'
} else if (res > 2) {
  return 'I smell a series!'
} else {
  return 'Fail!'
}

}
https://www.codewars.com/kata/57f222ce69e09c3630000212
```

```
8 kyu
Well of Ideas - Easy Version
JavaScript:

function well(x){
let arr = x.filter(i => i === 'good').length;
if (arr == 0) return 'Fail!';
if (arr > 0 && arr <= 2) return 'Publish!';
if (arr > 2) return 'I smell a series!';

}
https://www.codewars.com/kata/57f222ce69e09c3630000212
```

```
7 kyu
Well of Ideas - Harder Version
JavaScript:
function well(x){
let str = x.join(',').toLowerCase().split(',');
let res = 0;
for (let i = 0; i < str.length; i++){
  if (str[i] === 'good'){
    res++;
    }
  }

if (res == 0) return 'Fail!';
if (res > 0 && res <= 2) return 'Publish!';
if (res > 2) return 'I smell a series!';

}
```

```

7 kyu
Holiday X - Bintang Vests
JavaScript:
function vestBuy(price, haggle){
if (haggle == 'light') return price * 0.8;
if (haggle == 'medium') return price * 0.7;
if (haggle == 'heavy') return price * 0.6;
if (haggle == 'walkandswear') return price * 0.1;
else {
  return 'Run!!'
}
}
```

```
8 kyu
Holiday VIII - Duty Free
JavaScript:
function dutyFree(normPrice, discount, hol){
  let disPrice = hol / ((normPrice * discount)/100);
  return res = Math.floor(disPrice);

}
```

```
Cat and Mouse - Easy Version
JavaScript:
function catMouse(x){
let sum = 0;
for (let i = 0; i < x.length; i++){
  sum += x[i].includes('.')
}
if (sum < 4) return "Caught!"
else {
return "Escaped!"
}

}
```

```
8 kyu
Third Angle of a Triangle

function otherAngle(a, b) {
let sum = 180;
let c = sum - a - b;
  return c;
}
```

```

8 kyu
I love you, a little , a lot, passionately ... not at all

JavaScript:
function howMuchILoveYou(nbPetals) {
  const arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    let index = (nbPetals - 1) % arr.length;
  console.log(index);
    return arr[index];
}

```

```
8 kyu
Calculate BMI

JavaScript:
function bmi(weight, height) {
let bmi = weight/(height * height);
if (bmi <= 18.5) return "Underweight";
if (bmi <= 25.0) return "Normal";
if (bmi <= 30.0) return "Overweight";
if (bmi > 30.0) return "Obese";

}
```

```
8 kyu
Be Concise I - The Ternary Operator
JavaScript:

let a = "You're a(n)";
let describeAge = (age) => age <= 12 ? a +" kid": age >= 13 && age <= 17 ? a +" teenager": age >= 18 && age <= 64 ? a +" adult": a +" elderly";

```
```
8 kyu  Sort and Star
function twoSort(s) {
  let strSort = s.sort();
  return strSort[0].split('').join('***');

}
```
```
8 kyu
Sum of Multiples
JavaScript:
function sumMul(n,m){
let sum = 0;
if (n >= m) return "INVALID";
for (let i = n; i < m; i++) {
 if (i % n === 0) sum += i;
}
return sum;

}
```
```
8 kyu
101 Dalmatians - squash the bugs, not the dogs!
JavaScript:
function howManyDalmatians(number) {

  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

  if (number <= 10) return dogs[0];
  if (number > 10 && number <= 50) return dogs[1];
  if (number > 50 && number <= 100) return dogs[2];
  else return dogs[3];


}
```
```
8 kyu
Enumerable Magic #25 - Take the First N Elements
JavaScript:

function take(arr, n) {
let arr1 =[];
return arr1 = arr.slice(0, n);


}
```
```
8 kyu 2d version
Enumerable Magic #25 - Take the First N Elements
JavaScript:

function take(arr, n) {
let arr1 =[];

for(let i =0; i < arr.length; i++){
 if (i < n) arr1.push(arr[i]);
}
return arr1;

}
```
```
8 kyu
Find the Integral
JavaScript:

function integrate(coefficient, exponent) {

return coefficient / (exponent + 1) + "x^" + (exponent + 1);

}
```

```
8 kyu
5 without numbers !!
JavaScript:
function unusualFive() {
 let x = "ilove";
  return x.length;
}
```
```
8 kyu
Keep Hydrated!
JavaScript:
function litres(time) {
  return Math.floor(time * 0.5);
}
```
```
8 kyu
Grasshopper - Personalized Message
JavaScript:

function greet (name, owner) {
  if (name == owner) return "Hello boss";
  else return 'Hello guest'
}
```
```
8 kyu
Grasshopper - Check for factor
JavaScript:

function checkForFactor (base, factor) {
  if ((base % factor) == 0) return true;
  else return false;
}
```
```
8 kyu
Grasshopper - Terminal game move function
JavaScript:

function move (position, roll) {
  return position + (roll*2);
}
```
```
8 kyu
Find numbers which are divisible by given number
JavaScript:

function divisibleBy(numbers, divisor){
const arr =[];
for (let i = 0; i <= numbers.length; i++){
  if ((numbers[i] % divisor) == 0)
 arr.push(numbers[i]);
}
return arr;
}
```

```
8 kyu
Is it a palindrome?
JavaScript:

function isPalindrome(x) {

let str = x.toUpperCase();
let rev = str.split('').reverse().join('');
if (str === rev) return true;
else return false;

}
```
```
8 kyu
Generate range of integers
JavaScript:

function generateRange(min, max, step){
let arr =[];
for ( let i = min; i <= max; i +=step){
arr.push(i)
}
return arr;
}
```
```
8 kyu
Alan Partridge II - Apple Turnover
JavaScript:

function apple(x){
if ((x * x) > 1000) return "It's hotter than the sun!!";
else return 'Help yourself to a honeycomb Yorkie for the glovebox.'

```
```
8 kyu
Keep up the hoop
JavaScript:

function hoopCount (n) {
   if (n >= 10) return "Great, now move on to tricks";
   else return "Keep at it until you get it";
}
https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145
```
```
8 kyu
Sum Arrays
JavaScript:

function sum (numbers) {
    if (numbers == 0) return 0;
   let sum = 0;
   for (let i =0; i < numbers.length; i++){
    sum += numbers[i];
   }
   return sum;

};
```
```
write a function which takes a string and return a string with 2 last letter

function inverted(word){

  let str = '';
  for (let i = word.length-1; i >= 0; i--){
    if (str.length < 2){
      str += word[i] ;
    }
  }
  return str;
}
console.log(inverted("OLGA"));

```
```
write a function which takes numbers in array and return a new array with index of value only  2

function indexOfnumber (a)  {
let arr = [];
for( let i = 0; i < a.length; i++){
  if (a[i] === 2)
   arr.push(i);

  }
  return arr;
}
console.log(indexOfarr ([1, 2, 3, 2, 4, 2, 8, 9, 2]));
```
