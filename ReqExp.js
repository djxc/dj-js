//正则表达式的属性
var pattern1 = /\[bc\]at/i;
console.log(pattern1.global);
console.log(pattern1.ignoreCase);
console.log(pattern1.multiline);
console.log(pattern1.lastIndex);
console.log(pattern1.source);

//正则表达的exec方法,该方法专门为捕获组而设计的
var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;
var matches = pattern.exec(text); //需要输入要匹配的字符串,返回的是一个数组,包括两个属性:index为匹配项在字符串中的位置,input表示符合正则表达的字符串

console.log(matches.index); // 0
console.log(matches.input); // "mom and dad and baby"
console.log(matches[0]);  // "mom and dad and baby"
console.log(matches[1]);  // " and dad and baby"
console.log(matches[2]);  // " and baby"

var text = "cat, bat, sat, fat";
var pattern1 = /.at/;
var matches = pattern1.exec(text);
console.log(matches.index); //0
console.log(matches[0]);  //cat
console.log(pattern1.lastIndex);  //0

matches = pattern1.exec(text);
console.log(matches.index); //0
console.log(matches[0]);  //cat
console.log(pattern1.lastIndex); //0

var pattern2 = /.at/g;
var matches = pattern2.exec(text);
console.log(matches.index); //0
console.log(matches[0]);  //cat
console.log(pattern2.lastIndex); //3

//正则表达式的第二个方法是 test() ,它接受一个字符串参数。在模式与该参数匹配的情况下返回true ;否则,返回 false 。
var text = "000-00-0000";
var pattern = /\d{3}-\d{2}-\d{4}/;
if (pattern.test(text)){
console.log("The pattern was matched.");
}


var text = "this has been a short summer";
var pattern = /(.)hort/g;
/*
* 注意:Opera 不支持 input、lastMatch、lastParen 和 multiline 属性
* Internet Explorer 不支持 multiline 属性
*/
if (pattern.test(text)){
  console.log(RegExp.input);  // this has been a short summer
  console.log(RegExp.leftContext);  // this has been a
  console.log(RegExp.rightContext); // summer
  console.log(RegExp.lastMatch);  // short
  console.log(RegExp.lastParen);  // s
  console.log(RegExp.multiline);  // false
}
