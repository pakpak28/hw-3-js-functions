"use strict";
// Task 1 'splitAndMerge'
//sp -separator as a second argument
function splitAndMerge(str, sp) {
  var newString = str.split(" ");

  for (var i = 0; i < newString.length; i++) {
    newString[i] = newString[i].split("").join(sp);
  }

  return newString.join(" ");
}

console.log(splitAndMerge("My name is John", " ")); // should return "M y n a m e i s J o h n"
console.log(splitAndMerge("Hello World!", ",")); // should return "H,e,l,l,o W,o,r,l,d,!"
// Task 2 'Convert'
function objectToArray(object) {
  var resultArray = Array.from(object);
  for (var properties in object) {
    resultArray.push([properties, object[properties]]);
  }
  return resultArray;
}

// Task 3 'CamelCase function'
function toCamelCase(str) {
  return str.replace(/[-_]([a-z])/gi, function (letter) {
    return letter[1].toUpperCase();
  });
}

//decision without regexep
function toCamelCase(str) {
  var resultString = "";

  for (var i = 0; i < str.length; ++i) {
    if (str[i] == "-" || str[i] == "_") {
      resultString += str[i + 1].toUpperCase();
      i++;
    } else {
      resultString += str[i];
    }
  }

  return resultString;
}

// Task 4 'Each word reversal function'
function reverseString(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}
//if we are looking for more elegant solution for this task we can go like this:
function reverseStr(str) {
  return str.replace(/\w{0,}/g, function (word) {
    return word.split("").reverse().join("");
  });
}

// Task 5 'stringExpansion'
//construction if/else with _regexp.test_ supposed to check if string got numbers at all
function stringExpansion(str) {
  if (/\d/.test(str)) {
    let arr = str.split("");
    let newArr = [];
    let multiplier = 1;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 1 == 0) {
        multiplier = parseInt(arr[i]);
      } else if (arr[i] % 1 != 0) {
        newArr.push(arr[i].repeat(multiplier));
      }
    }
    return newArr.join("");
  } else {
    return str;
  }
}

// Task 6 'largest & smallest function'
// for smallest argument
function findSmallestNum() {
  return Math.min.apply(Math, arguments);
}
// for largest argument
function findLargestNum() {
  return Math.max.apply(Math, arguments);
}

// Task 7 'transform array to array of functions'
function transform(array) {
  return array.map(function (item) {
    return function () {
      return item;
    };
  });
}

// Task 8 'summing up numbers using recursion'
function sum() {
  var args = [].slice.call(arguments);
  if (args.length === 0) {
    return 0;
  } else {
    return args[0] + sum.apply(null, args.slice(1));
  }
}

// Task 9 'countdown'
function countDown(num) {
  return setInterval(function () {
    if (num < 0) {
      clearInterval();
    } else {
      console.log(num);
      num--;
    }
  }, 1000);
}

// Task 10 'polyfill for bind()'
Function.prototype.myBind = function (context) {
  var boundTargetFunction = this;
  var boundArguments = Array.prototype.slice.call(arguments, 1);
  return function boundFunction() {
    var targetArguments = Array.prototype.slice.call(arguments);
    return boundTargetFunction.apply(
      context,
      boundArguments.concat(targetArguments)
    );
  };
};
