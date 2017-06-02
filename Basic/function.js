/*Reverse string
function reverseString(str) {
  str = str.split("");
  str = str.reverse();
  str = str.join("");
  return str;
}
reverseString("hello");
reverseString("Greetings from Earth");*/

/*Fact
function factorialize(num) {
  var counter = 1;
  for (var i = 1; i <= num; i++) {
    counter *= i;
  }
  return counter;
}
factorialize(3);*/

/*Check for Palindromes
function palindrome(str) {
  str = str.toLowerCase();
  var rx = str.replace(/[&\/\\_#,+()$~%.'":*?<>{}\- ]/g, '');
  var reversedStr = rx.split("").reverse().join("");
  if (reversedStr == rx) {
    return true;
  } else {
    return false;
  }
}
palindrome("0_0 (: /-\ :) 0-0");*/

/*Find the Longest Word in a String
function findLongestWord(str) {
  str = str.split(" ");
  var maxNum = 0;
  for (var i = 0; i < str.length; i++) {
    if (maxNum < str[i].length) {
      maxNum = str[i].length;
    }
  }
  return maxNum;
}
findLongestWord("The quick brown fox jumped over the lazy dog");*/

//Title Case a Sentence
/*function titleCase(str) {
  str = str.toLowerCase().split("");
  str[0] = str[0].toUpperCase();
  for (var i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      str[++i] = str[i].toUpperCase();
    }
  }
  str = str.join("");
  console.log(str);
  return str;
}
titleCase("I'm a little tea pot");*/

/*//Return Largest Numbers in Arrays
function largestOfFour(arr) {

  var resultArr = [];

  for (var i = 0; i < arr.length; i++) {
    var maxNum = 0;
    for (var j = 0; j < arr.length; j++) {
      // console.log(arr[i][j]);
      if (maxNum < arr[i][j]) {
        maxNum = arr[i][j];
      }
      resultArr[i] = maxNum;
    }

  }
  return resultArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);*/

/*//Confirm the Ending
function confirmEnding(str, target) {
  var targetLength = target.length;
  //substr - [mettől, hány karaktert]
  //substring - [mettől, hol álljon meg]
  if ((str.substr(-targetLength,targetLength)) == target ) {
    console.log('true');
    return true;
  }
  return false;
}

confirmEnding("Bastian", "tian");*/

/*//Repeat a string repeat a string
function repeatStringNumTimes(str, num) {
  if(num < 0) {
    return "";
  }
  var concStr = "";
  for (var i = 0; i < num; i++) {
    concStr += str;
  }
  return concStr;
}

repeatStringNumTimes("*", 3);*/

/*//Truncate a string
function truncateString(str, num) {

  var slicedStr;
  var dots = "...";

  if (num <= 3) {
    slicedStr = str.slice(0, num);
    slicedStr += dots;
    return slicedStr;
  } else if (str.length <= num) {
    return str;
  } else {
    slicedStr = str.slice(0, num-3);
    slicedStr += dots;
    return slicedStr;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 100);*/

/*//Chunky Monkey
function chunkArrayInGroups(arr, size) {
  var result = [];
  var step = 0;
  var j = 0;
  for(var i = 0; i < arr.length; i += size) {
    result[j++] = arr.slice(i, step += size);
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
*/

//Slasher Flick 1
/*function slasher(arr, howMany) {
  if (howMany === 0) {
    return arr;
  } else if (howMany > arr.length) {
    return [];
  } else {
    var sliced = arr.slice(howMany);
    console.log(sliced);
    return sliced;
  }
}

slasher([1, 2, 3], 1);
slasher([1, 2, 3], 4);
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 2);
//Slasher Flick 2
function slasher(arr, howMany) {
  var result = arr.slice(howMany,arr.lenght);

  return result;
}

slasher([1, 2, 3], 9);*/

/*//Mutations
function mutation(arr) {
  var secondElement = arr[1].toLowerCase();
  var secWord = secondElement.split("");
  var counter = 0;
  var firstWord = arr[0].toLowerCase();

  for (var j = 0; j < secWord.length; j++) {
    if ((firstWord.indexOf(secWord[j])) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["floor", "for"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);*/

/*//Falsy Bouncer
function bouncer(arr) {
  var res = arr.filter(function(word) {
    var booleanWord = Boolean(word);
    if (booleanWord) {
      return word;
    }
  });
  return res;
}

bouncer([7, "ate", "", NaN, false, 9]);*/

/*//Seek and Destroy
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  var removeElementsArr = args.slice(1);

    return arr.filter(function(value) {
      return removeElementsArr.indexOf(value) == -1;
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, 5, 6);*/

/*//Where do I belong
function getIndexToIns(arr, num) {
  arr = arr.sort(function(a, b) {
    return a - b;
  });
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return i;
}

getIndexToIns([40, 60], 50);
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([2, 5, 10], 15);*/

/*//Caesars Cipher / rot13
function rot13(str) {
  var numArr = [];
  var strArr = [];

  for (var i = 0; i < str.length; i++) {
    numArr[i] = str.charCodeAt(i);
    // 65 == A, 90 == Z
    if (numArr[i] >= 65 && numArr[i] <= 90) {
      numArr[i] += 13;
    }
    //if num > 90 then subtract one abc
    if (numArr[i] > 90) {
      numArr[i] -= 26;
    }
    strArr[i] = String.fromCharCode(numArr[i]);
  }
  str = strArr.join("");
  return str;
}

rot13("SERR PBQR PNZC!");
rot13("SERR CVMMN!");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");*/
