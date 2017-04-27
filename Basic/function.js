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
