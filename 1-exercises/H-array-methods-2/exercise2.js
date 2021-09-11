/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  //***********Using split() and join() methods */
  function capitalise(str) {
    let firstLetter = str.charAt(0).toUpperCase();
    str = str.split("");
    console.log(str);
    str[0] = firstLetter;
    console.log(str);
    return (str = str.join(""));
  }
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
