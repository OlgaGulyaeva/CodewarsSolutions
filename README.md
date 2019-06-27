* https://www.codewars.com/kata/capitalization-and-mutability/train/javascript
```javascript
function capitalizeWord(word) {
  let wordNew = word[0].toUpperCase();
  for(let i = 1; i < word.length; i++){
  wordNew += word[i];
  }
  return wordNew;
}
```