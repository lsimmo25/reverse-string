function reverseString(str) {
  // type your code here
  // needs to use some form of iteration
  // this function will take in a string and return the string in reverse
  
  const newString = []
  for (i = 0; i < str.length; i++) {
    newString.push(str[str.length - (i+1)])
    console.log(newString)
  }

  return newString.join("")
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution


/*
1. I created an empty array called newString

2. Created standard for loop that iterates through the str array which will be the argument
  a. with each iteration I am pushing the last element into newString by using string at index of string.length - i+1

3. Outside the for loop I think join that elements in the array to a single string value using join("")

*/