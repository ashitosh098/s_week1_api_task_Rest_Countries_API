//create first object
var arr ={"name":"ashitosh","age":18,"a":[1,2,3,4]}
// assign  first object to second object using rest parameter
//  This will copy property of objects rather than reference 
var  arr1= {...arr};

//add new property in second object  
arr1.ask="8";
//print both object

console.log(arr);
console.log(arr1);

//first object remain unchaged even after adding new property to second object this is copy by value