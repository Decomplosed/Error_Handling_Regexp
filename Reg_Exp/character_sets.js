let re;
// Literal characters
re = /hello/
re = /hello/i

// Brackets [] - Character sets
re = /gr[ae]y/i   // must be an a or e
re = /[GF]ray/   // must be G or F
re = /[^GF]ray/   // match everything except of G or F
re = /[A-Z]ray/   // match any uppercase letters
re = /[a-z]ray/   // match any lowercase letters
re = /[A-Za-z]ray/   // match any letter
re = /[0-9]ray/   // match any digit

// Braces {} - Quantifiers

re = /Hel{2}o/i   // must occur exactly m amount of times
re = /Hel{2,4}o/i   // must occur exactly m
re = /Hel{2,}o/i   // must occur at least m times

// Parentheses () = Gropuing

re = /^([0-9]x){3}$/


// String to match
const str  = '3x3x3x'

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