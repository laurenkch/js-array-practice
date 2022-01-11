// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number=function(array){
    let arr = [];
    for (prop in array) {
      arr.push(`${Number.parseInt(prop)+1}: ${array[prop]}`);
    };
    return arr;
    };


// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

function arr(n){
    var newArr = [];
    for(var i = 0; i < n; i++){
      newArr.push(i);
    }
    return newArr;
  }

// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript


//this one worked in my browser, but replaceAll didn't work on CodeWars and threw an error that it wasn't a function. 
function flyBy(lamps, drone){
    let index = drone.indexOf('T');
    console.log(index);
    if (index > lamps) {
      let result = lamps.replaceAll('x','o');
      return result;
    } else {
      let string2 = lamps.slice(index);
      let string1 = lamps.slice(0, index);
      string1 = string1.replaceAll('x','o');
      let result = string1.concat(string2);
      return result;
    }
  };

//instead I used this solution on codewars:

function flyBy(lamps, drone){
    let index = drone.indexOf('T');;
    if (index > lamps) {
      let result = lamps.replace(/x/g,'o');
      return result;
    } else {
      let string2 = lamps.slice(index + 1);
      let string1 = lamps.slice(0, index + 1);
      string1 = string1.replace(/x/g,'o');
      let result = string1.concat(string2);
      return result;
    }
  };


// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
    let sum = 0
    for (i = 0; i < marks.length; i++) {
      sum += marks[i];
    };
    let avg = Math.floor(sum/marks.length);
    return avg;
  }


// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043


//this works for a regular array but it is too long for the codewar test. Also, it doesn't work for the string values in the second test. 

//this was my shortest code, but it is still 89 characters, so too long to pass the codewar test. 

const reverse = a => {let b = [];
    a.forEach(e => b.unshift(e)); 
    return b;
    };


// this also works, but is also too long. 
  const reverse = a => {
      var b = [];
      for (let i = a.length - 1 ; i >= 0; i--) {
        b.push(a[i]);
      }
 return b;
  }


