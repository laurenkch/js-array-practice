// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------


let makeAnArray = function (str, i) {
    let array = [];
    for(let x = 0; x < i; x++) {
        array.push(str);
    }
    return array;
}

//could have also:
const anotherWay = function(str, i) {
    return Array.from({
        length: i 
    }, function () {
        return str;
    });
}

//array.from gives you an array from an iterable objects (something with a length this includes strings since they have a length.)
Array.from({
    length: i 
});
[undefined, undefined, undefined]

//the function returns the string in the array.

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------


let reverse = function (arr) {
    const reverseArray = arr.slice().reverse();
    return reverseArray;
};


// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

let removeFalsy = function (arr) {
    trueArray = arr.slice().filter(Boolean);
    return trueArray
};

//don't need slice because filter returns a new array anyways. 

// could have said:

let removeFalsy = function (arr) {
    trueArray = arr.filter(Boolean);
    return trueArray
};


// filter takes a function and runs it against every item in the array

// if(i) also checks for falsy, so the below code would only push a value if true. 

function removeFalsy() {
    const newArr = [];
    for(let i for arr) {
        if(i) {
            newArr.push(i)
        }
    }
    return newArr;
};

//be mindful of coersion. 0 != false returns true. undefined is not equal to false or true loosely. 

// trueArray = arr.slice().filter(element => true); is there a way to make this work too? or rather, why does it not?

//!!undefined == false returns true. Double bang manually coerces it to a boolean value. 

// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

let arrayToObject = function (arr) {
    const object = Object.fromEntries(arr);
    return object;
};

//could have also:

function createObj1(arr) {
    const obj = {};
    for(let i = 0; i < arr.length; i++) {
        obj[arr[i][0] = arr[i][1]];
    }
    return result;
}

myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
arrayToObject(myArray);


// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

const noDupes = function (arr) {
    uniArray = [...new Set(arr)];
    return uniArray;
}

//could have also said:

const noDupes = function (arr) {
    return [...newSet(arr)];
}

let testArray = [1,2,3,4,5,4,3];
noDupes(testArray);


// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

const identicalOrNot = function (arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    let uniArray = [...new Set(arr3)];
    if (arr1.length === uniArray.length && arr2.length === uniArray.length) {
        return true;
    } else {
        return false;
    }
};

//could have also:

function comparArrays(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false;
    }
    arr1.sort();
    arr2.sort();

    for(let i=0; i < arr.length; i++) {
        if(arr[i]!==arr2[i]) {
            return false;
        }
    }
}

//if you can get out early do so, it's  quicker program
// let testArray1 = [1,2,3,4];
// let testArray2 = [1,4,3,2];

// identicalOrNot(testArray1, testArray2);



// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------

let flatArray = [];

let flattenArray = function (arr) {
        for(var i = 0; i < arr.length; i++){
            var element = arr[i];
            if (element instanceof Array) {
                flattenArray(element);
            } else {
                flatArray.push(element);
            }
        };
    flatArray.concat(flatArray);
    return flatArray;
};

// array1 = [0, 1, 2, [3, 4]]
// array2 = [0, 1, 2, [[[3, 4]]]]
// flattenArray(array2);


// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------


let slicer = function (arr,i) {
    arr1 = arr.slice(0,i)
    arr2 = arr.slice(i, arr.length);
    arr3 = [[arr1], [arr2]];

} 

// slicer([1, 2, 3, 4], 2);





// -----------------------------------------------
