//E6 feature in javascript
//1) let & const keyword
let x=10;
const y=20;
x = 15;       //it is valid 
y = 25;    //it is not allow 
    
// 2) Arrow function
//function Es5
var double=function(x){
    return x*2;
}
//Es6 Arrow function
const double= x=> x*2;

//3) Tamplate literal :string interpolation
//Example
    //Es5
    var name= "john";
      console.log("Hello"+ name);
   //Es6 
   let name= "john"
   console.log(`Hello ${name}`);    //backtic(`dollar sign $ {curly bracket in key} `);

//4) Spread opearator: Expand array and object in concise way
//Example
//array
const number= [1,2,3];
console.log([...number,4,5]);

// object
const person={ name:"john", age:20};
console.log({...person, job:"developer" });

