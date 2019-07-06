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