let re;
// Literal characters
re = /hello/
re = /hello/i

// Shorthand character classes

re = /\w/   // Word character - alphanumeric or _
re = /\w+/   // + = one or more
re = /\W/   // Non-Word char
re = /\d/   // Match any digit
re = /\d+/   // Match any digit 0 or more times
re = /\D/   // Non-Digit char
re = /\s/   // Match whitespace character
re = /\S/   // Match non-whitespace character
re = /Hell\b/i  // Word boundary

// Assertions

re = /x(?=y)/   // Match x only if its followed by y
re = /x(?!y)/   // Match x only if its not followed by y


// String to match
const str  = ''

// Log results
const result = re.exec(str)
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str)