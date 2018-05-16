/*//Reverse string
function reverseString(str) {
  str = str.split("");
  str = str.reverse();
  str = str.join("");
  return str;
}
reverseString("hello");
reverseString("Greetings from Earth");*/

/*//Fact
function factorialize(num) {
  var counter = 1;
  for (var i = 1; i <= num; i++) {
    counter *= i;
  }
  return counter;
}
factorialize(3);*/

/*//Check for Palindromes
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

/*//Find the Longest Word in a String
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

/*//Title Case a Sentence
function titleCase(str) {
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

/*
 * INTERMEDIATE ALGORITHM SCRIPTING
 */

/*//Sum All Numbers in a Range
function sumAll(arr) {
  maxNum = Math.max(arr[0],arr[1]);
  minNum = Math.min(arr[0],arr[1]);
  var NumbersSum = 0;

  for (var minNum; minNum <= maxNum; minNum++) {
    NumbersSum = NumbersSum + minNum;
  }
  console.log(NumbersSum);
  return NumbersSum;
}

sumAll([4, 1]);*/

/*//Diff Two Arrays
function diffArray(arr1, arr2) {
  var longerArr =  [];
  var shorterArr = [];
  var newArr = [];

  if (arr1.length < arr2.length) {
    longerArr = arr2;
    shorterArr = arr1;
  } else {
    longerArr = arr1;
    shorterArr = arr2;
  }
  
  for (var i = 0; i < longerArr.length; i++) {
    if (shorterArr.indexOf(longerArr[i]) == -1) {
      newArr.push(longerArr[i]);
    }
  }
  for (var j = 0; j < shorterArr.length; j++) {
    if (longerArr.indexOf(shorterArr[j]) == -1) {
      newArr.push(shorterArr[j]);
    }
  }

  console.log(newArr);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);*/

/*//Roman Numeral Converter
function convertToRoman(num) {

  var symbols = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX",
    "XC", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "M"
  ];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  var numberArray = num.toString().split("");
  var numberArrayConverted = [];
  var counter = 0;

  function getMultiplier(i) {
    var multiplier = 1;
    for (var k = 1; k < i; k++) {
      multiplier *= 10;
    }
    return multiplier;
  }

  for (var i = numberArray.length; i > 0; i--) {
    var val = parseInt(numberArray[counter]) * getMultiplier(i);

    numberArrayConverted.push(val);
    counter++;
  }

  var numberString = "";

  function getThousands(value) {
    var thousandsArray = value.toString().split("");
    var thousandsString = "";

    for (var l = 0; l < parseInt(thousandsArray[0]); l++) {
      thousandsString += "M";
    }

    return thousandsString;
  }

  for (var j = 0; j < numberArrayConverted.length; j++) {
    if (numberArrayConverted[j] > 1000) {
      numberString += getThousands(numberArrayConverted[j]);
    } else {
      var index = numbers.indexOf(numberArrayConverted[j]);
      numberString += symbols[index];
    }
  }

  console.log(numberString);

  return numberString;
}

convertToRoman(36);
convertToRoman(1536);
convertToRoman(1023);
convertToRoman(3973);
convertToRoman(9);*/

/*//Search and Replace
function myReplace(str, before, after) {
  var strArr = str.split(" ");
  var index = strArr.indexOf(before);
  var beforeFirstLetter = before.split("")[0];
  var afterStrArr = after.split("");

  if (beforeFirstLetter === beforeFirstLetter.toUpperCase()) {
    afterStrArr[0] = after.charAt(0).toUpperCase();
    after = afterStrArr.join("");
  }

  strArr[index] = after;
  str = strArr.join(" ");
  
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");*/

/*//Boo who
function booWho(bool) {
  return typeof bool === "boolean" ? true : false;
}

booWho(null);
booWho(true);*/

// Pig Latin
function translatePigLatin(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var strArray = str.split("");
  var brintToEnd = [];

  if (vowels.indexOf(strArray[0]) != -1) {
    str += "way";
  } else {

    for (var i = 0; i < strArray.length; i++) {
      if (vowels.indexOf(strArray[i]) == -1) brintToEnd.push(strArray[i]);
      else break;
    }

    for (var j = 0; j < brintToEnd.length; j++) {
      strArray.splice(brintToEnd[j], 1);
      strArray.push(brintToEnd[j]);
    }

    str = strArray.join("");
    str += "ay";

  }

  return str;
}

translatePigLatin("consonant");
translatePigLatin("eight");