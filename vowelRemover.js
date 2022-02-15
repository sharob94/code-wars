/*
https://www.codewars.com/kata/5547929140907378f9000039/train/javascript


Create a function called shortcut to remove all the lowercase vowels in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"



*/


function shortcut(string){
    return string.replace(/[aeiou]/g,'')
  }ss