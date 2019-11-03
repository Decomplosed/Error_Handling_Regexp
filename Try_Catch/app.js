const user = {email: 'jdoe@gmail.com'}

try {
  // Reference Error
  // myFunction()


  // TypeError
  // null.myFunction()

  // Syntax Error
  // console.log(eval('Hello World'))

  // URIError
  // decodeURIComponent('%')

  if(!user.name) {
    // throw 'User han no name'
    throw new SyntaxError('User has no name')
  }

} catch(e) {
  console.log(`User Error: ${e.message}`)

  // console.log(e);
  // console.log(e.name);
  // console.log(e instanceof TypeError);
} finally {
  console.log('Finally runs regardless of result...');
}

console.log('Program continues...');