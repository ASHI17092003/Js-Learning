//Primitive
//string,number,boolean, null,undefined,symbol,bigint

const score=100;
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId) // noo

const bigNumber=73548717267683729725376494754n

console.log(typeof outsideTemp) // object



//Reference or non primitive
// arrays,object,function

const heros=["bc","eyt","eydui"]
{
    myName= "ashi",
    age=20,
}
const myFunction= function(){
    console.log("Hello World")
}


//js is staticall type or dynamic?