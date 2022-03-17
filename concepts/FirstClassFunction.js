a();
// b();
function a(){
console.log('a is called');
}

const  b = function(){
console.log('a is called');
}
sayName(); //return say my name
// sayAge(); // return error . it doesn't even run
function sayName(){
console.log('say my name')
}
var sayAge = function(){
console.log('my age is 21');
}

var namedFunctionExpression = function xyz(){console.log('xyz')};
/**
 * what will happen?
you will get an error. Reference error:xyz is not defined. Why? because yo use set it 
to a variable, and therefore its not created in the outerscope but its created as 
a local function. You can called the function in itself
 * 
 *  
 * */ 
// xyz(); // throw error its not defined
namedFunctionExpression();