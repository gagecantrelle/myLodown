'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: retun the given value as is
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 */
 function identity(value){
    //return value unchange
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: check what type of value is given to the paramter
 * 
 * @param {any value} value: hold any type of value
 * @return {string}: a string that hold the name of any value
 */

 function typeOf(value){
    //check if value equal to object
    if(typeof value === "object" && Array.isArray(value) === false && value !== null && !(value instanceof Date)){
        //return string of object
        return "object";
        //check if value equal to array
    }else if(typeof value === "object" && Array.isArray(value) === true && value !== null && !(value instanceof Date)){
        //return string of array
        return "array";
        //check if value equal to null
    }else if(typeof value === "object" && Array.isArray(value) === false && value === null && !(value instanceof Date)){
        //return string of null
        return "null";
        //check if value equal to date
    }else if(typeof value === "object" && Array.isArray(value) === false && value !== null && value instanceof Date){
        //return string of date
        return "date";
        //check if value equal to string
    }else if(typeof value === "string"){
        //return string of string
        return "string";
        //check if value equal to boolean
    }else if(typeof value === "boolean"){
        //return string of boolean
        return "boolean";
        //check if value equal to number
    }else if(typeof value === "number"){
        //return string of number
        return "number";
        //check if value equal to function
    }else if(typeof value === "function"){
        //return string of function
        return "function";
        //check if value equal to undefind
    }else if(typeof value === "undefined"){
        //return string of undefind
        return "undefined";
    }
}
module.exports.typeOf = typeOf;

/**
 * first: will loop through a given array then return a set number of value determend by the given paramter
 * from the beging of the array, a new array of value, an empty array, or the given array
 * 
 * @param {Array} arr: an array of values
 * @param {Number} num: a number given for deciding on what to return 
 * @return {Array}: return an array filled with a set amount of values, an empthy array, or the given array;
 */
 function first(arr, num){
    //creat a empty array
    var array = [];
    //check if arr is a array
    if(Array.isArray(arr) === false){
        // return empty array 
        return [];
        //run if arr is array
    }else{
        // check if number is a number
        if(typeof num !== 'number'){
            // return array frist value
          return arr[0];
          //run if true
       }else{
        //check if num is negative
        if(num < 0){
            //return empty array
            return [];
        }
        //check if num greater than array length
        if(num > arr.length){
            //return hole array
            return arr;
        }
             //loop through array
            for(let i = 0; i < num; i++){
                //push curent array value in new array
             array.push(arr[i]);
            }
        }
    }
    //return new array
    return array;
}
module.exports.first = first;

/**
 * last: will loop through a given array then return a set number of value determend by the given paramter
 * from the end of the array, a new array of value, an empty array, or the given array
 * 
 * @param {Array} arr: an array of values
 * @param {Number} num: a number given for deciding on what to return 
 * @return {Array}: return an array filled with a set amount of values, an empthy array, or the given array;
 */
function last(arr, num){
    //creat a empty array
    var array = [];
    //check if arr is a array
    if(Array.isArray(arr) === false){
        // return empty array 
        return [];
        //run if arr is array
    }else{
        // check if number is a number
        if(typeof num !== 'number'){
            // return array frist value
          return arr[arr.length - 1];
          //run if true
       }else{
        //check if num is negative
        if(num < 0){
            //return empty array
            return [];
        }
        //check if num greater than array length
        if(num > arr.length){
            //return hole array
            return arr;
        }
             //loop through array
            for(let i = 1; i < num + 1; i++){
                //push curent array value in new array
             array.push(arr[i]);
            }
        }
    }
    //return new array
    return array;
}
module.exports.last = last;

/**
 * indexOf: will loop through a given array then return the position of a targted value in the array, if the array 
 * dosen't have the value return -1
 * 
 * @param {Array} arr: an array of values
 * @param {an Value} value: a given value to find in the array
 * @return {Number}: return the index number of the given value, if the given value is not in the given array return -1
 */
 function indexOf(arr, value){
    //loop through all the array values
    for(let i = 0; i < arr.length; i++){
        //check if array has the targetd value
        if(arr[i] === value){
            //return the index of curent value in array
            return i;
        }
    }
    // return -1 if array dosent have targetd value
    return -1;
    }
    module.exports.indexOf = indexOf;

/**
 * contains: will loop through a given array then return true of false if the array has the targted value
 * 
 * @param {Array} arr: an array of values
 * @param {an Value} value: a given value to find in the array
 * @return {Boolean}: return true or false if the the the given array has the given value
 */
 function contains(arr, value){
    //loop through all values in array
    for(let i = 0; i < arr.length; i++){
        //check if arr has targeted value
        if(arr[i] === value ? true : false){
            //return true if array has targeted value
            return true;
        }
    }
    //return falue if array dosn't have targeted value
    return false;
}
module.exports.contains = contains;

/**
 * unique: will loop through a given array then return a new array without duplicate values
 * 
 * @param {Array} array: an array of values
 * @return {Array}: return the given array with no duplication
 */
 function unique(array){
    //retun new array with no duplicate
    return [...new Set(array)];
}
module.exports.unique = unique;

/**
 * filter: will loop through a given array that will run a given function that will test each value in the array and
 * if the function return true push that value into a new array. then return a new array of values
 * 
 * @param {Array} arr: an array of values
 * @param {Function} func: a function that runs a test
 * @return {Array}: return array of value that contanis certant value determind by the given function
 */
 function filter(arr, func){
    //creat empty array
    var array = [];
  //loop through array
      for(let i = 0; i < arr.length; i++){
          //check if the given function is passing the curent value being push in it
      if(func(arr[i], i, arr)){
          //push curent value in new array
          array.push(arr[i])
      }
      }
      //return new array
      return array;
  }
  module.exports.filter = filter;

/**
 * reject: will loop through a given array that will run a given function that will test each value in the array and
 * if the function return false push that value into a new array. then return a new array of values
 * 
 * @param {Array} arr: an array of values
 * @param {Function} func: a function that runs a test
 * @return {Array}: return array of value that contanis certant value determind by the given function
 */
function reject(arr, func){
    //creat empty array
  var array = [];
  //loop through array
      for(let i = 0; i < arr.length; i++){
          //check if the given function is not passing the curent value being push in it
      if(!func(arr[i], i, arr)){
          //push curent value in new array
          array.push(arr[i])
      }
      }
      //return new array
      return array;
}
module.exports.reject = reject;

/**
 * partition: will loop through a given array then run a given function to test each value, then
 * creat an array that will hold two array. the frist one will hold values that the function is testing for.
 * the second array will hold values that failed the function test
 * 
 * @param {Array} arr: an array of values
 * @param {Function} func: a function that runs a test
 * @return {Array}: return a array containing two arrays, the frist array contains value that pase the function test, and the other array contains the values that failed the test
 */
 function partition(arr, func){
    //creat an array with two arrays in it
    var array = [[],[]];
    //loop though arr
    for(let i = 0; i < arr.length; i++){
        //check if curent value in array pass the given function
        if(func(arr[i], i, arr)){
            //push curent value in array in new array
            array[0].push(arr[i]);
            //run if func return false
        }else{
            //push curent value in array in new array
            array[1].push(arr[i]);
        }
    }
    //return new array
    return array;
}
module.exports.partition = partition;

/**
 * map: will loop through a given array then run a given function to creat a new array that
 * holds values that the given function returns
 * 
 * @param {Collection} coll: an array or object of values
 * @param {Function} func: a function that runs a test
 * @return {Collection}: return a object or array that is holds values return from the given function; 
 */
 function map(coll, func){
    //creaft a new array
    var arr = [];
    //check if coll is an array or object
    if(Array.isArray(coll)){
        //loop through all values in array
       for(let i = 0; i < coll.length; i++){
        //push the function return value in arr
        arr.push(func(coll[i], i, coll));
       }
       // run if coll is object
    }else{
        //loop through all values in object
       for(let key in coll){
  //push the function return value in arr
  arr.push(func(coll[key], key, coll));
       }
    }
//return arr    
return arr;
}
module.exports.map = map;

/**
 * pluck: will loop through a given array then return a new array contaning targted values
 * from an object
 * 
 * @param {array} arr: an array of values
 * @param {Object value} prop: a object key value or key
 * @return {array}: return a new array filled with targted values
 */
 function pluck(arr, prop){
    //creat a empty array
    var array = arr.map(arr => { return arr[prop];})
    //return array
return array;
}
module.exports.pluck = pluck;

/**
 * every: will loop through a given array or object then run a given function that test each value
 * then return true or false depending if the all value given to the function return true 
 * 
 * @param {collection} coll: an array or object of values
 * @param {function} func: a function that test a value then return true or false
 * @return {Boolean}: retun true if all values in the given collection that pass through the given function return true
 */
function every(coll, func){
    //determine if func was not passed in
    if(func === undefined){
 //determine if coll is an array
 if(Array.isArray(coll)){
    //loop through array
    for(let i = 0; i < coll.length; i++){
        //determine if coll is true
        if(!coll[i]){
        return false;
        }
    }
}else{ // it an object
     //loop through object
     for(let key in coll){
          //determine if coll is true
          if(!coll[key]){
            return false;
            }
     }
}

     //else it was   
    }else{
        //determine if coll is an array
        if(Array.isArray(coll)){
            //loop through array
            for(let i = 0; i < coll.length; i++){
                //determine if the result of invoking the func on the paramter is true
                if(func(coll[i], i, coll) === false){
                return false;
                }
            }
        }else{ // it an object
             //loop through object
             for(let key in coll){
                  //determine if the result of invoking the func on the paramter is true
                  if(func(coll[key], key, coll) === false){
                    return false;
                    }
             }
        }
    }
return true;
}
module.exports.every = every;

/**
 * some: will loop through a given array or object then run a given function that test each value
 * then return true or false depending if at least one value given to the function return true 
 * 
 * @param {collection} coll: an array or object of values
 * @param {function} func: a function that test a value then return true or false
 * @return {Boolean}: retun true if all values in the given collection that pass through the given function return true
 */
 function some(coll, func){
    //determine if func was not passed in
     if(func === undefined){
        //determine if coll is an array
        if(Array.isArray(coll)){
           //loop through array
           for(let i = 0; i < coll.length; i++){
               //determine if coll is true
               if(coll[i]){
               return true;
               }
           }
       }else{ // it an object
            //loop through object
            for(let key in coll){
                 //determine if coll is true
                 if(coll[key]){
                   return true;
                   }
            }
       }
            //else it was   
           }else{
               //determine if coll is an array
               if(Array.isArray(coll)){
                   //loop through array
                   for(let i = 0; i < coll.length; i++){
                       //determine if the result of invoking the func on the paramter is true
                       if(func(coll[i], i, coll) === true){
                       return true;
                       }
                   }
               }else{ // it an object
                    //loop through object
                    for(let key in coll){
                         //determine if the result of invoking the func on the paramter is true
                         if(func(coll[key], key, coll) === true){
                           return true;
                           }
                    }
               }
           }
       return false;
       }
 module.exports.some = some;

 /**
 * reduce: will loop through a given array then run a function that will return a single value
 * also it take in a seed value. 
 * 
 * @param {Array} arr: an array of values
 * @param {function} func: a function that test a value then return true or false
 * @param {seed value} seed: a value that will equal the accumlation value the given function
 * @return {Any value}: return a single value after pushing in all values from the given array
 */
function reduce(arr, func, seed){
    //creat tesult variable
    let result;
    //check if seed was given a value
    if(seed === undefined){
//set result to equal the frist value in the array
result = arr[0];
//loop through the given array(arr)
for(let i = 1; i < arr.length; i++){
    //set result equal to the return value of func
    result = func(result, arr[i], i, arr);
}
    }else{
        //set result to equal the given seed paramter
        result = seed;
        //loop through the given array(arr)
for(let i = 0; i < arr.length; i++){
    //set result equal to the return value of func
    result = func(result, arr[i], i, arr);
    }
}
//return result
return result;
}
module.exports.reduce = reduce;

/**
 * extend: will add more values to the given object
 * 
 * @param {one or more Objects} obj: an object of values
 * @return {Object}: return a obj that combines all given objects
 */
 function extend(...obj){
    // set obj equal to mutiple given objects
     obj = Object.assign(...obj);
     //return obj
     return obj;
  }
  module.exports.extend = extend;