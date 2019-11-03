

try {
  // Reference Error
  // myFunction()


  // TypeError
  // null.myFunction()

  // Syntax Error
  // console.log(eval('Hello World'))

  // URIError
  // decodeURIComponent('%')

} catch(e) {
  console.log(e);
  // console.log(e.name);
  // console.log(e instanceof TypeError);
} finally {
  console.log('Finally runs regardless of result...');
}

console.log('Program continues...');