// Evaluation Functions

let re;
re = /hello/i // i - case insensitive
// re = /hello/g // g - global search

// console.log(re); // /hello/
// console.log(re.source); // hello

// exec() - Return result in array or null
// const result = re.exec('hello world')

// console.log(result);

// test() - Returns true or false
// const results = re.test('Hello')

// console.log(results);

// match() - return result array or null

// const str = 'Hello there'
// const result = str.match(re)
// console.log(result);

// search() - return index of first match, if not found returns -1 

// const str = 'Hello there'
// const result = str.search(re)
// console.log(result);

// replace() - return new string with some or all matches of a pattern
const str = 'Hello there'
const newStr = str.replace(re, 'Hi')
console.log(newStr);