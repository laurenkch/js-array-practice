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

function flyBy(lamps, drone){
    let index = drone.indexOf('T');
    console.log(index);
    if (index > lamps) {
      let result = lamps.replaceAll('x','o');
      return result;
      console.log(result);
    } else {
      let string2 = lamps.slice(index);
      let string1 = lamps.slice(0, index);
      string1 = string1.replaceAll('x','o');
      let result = string1.concat(string2);
      return result;
      console.log(result);
    }
  };




// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript




// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043
