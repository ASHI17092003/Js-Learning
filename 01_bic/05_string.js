// concatinating 2 String
const myName="ashi"
const repoCount=50

console.log(myName + repoCount) // old type
// new type is called string intpulation
console.log(`Hello my name is ${myName} and my repoCount is${repoCount}`);

//new type 
const gameName= new String("ashi")
console.log(gameName[0]) //a
console.log(gameName.__proto__);

const newString= gameName.substring(0,2)
console.log (newString)

const newString1= "     aarna   "
console.log(newString1.trim())