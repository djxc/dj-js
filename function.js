//实现递归算法
function factorial(num){
  if(num<2){
    return 1;
  }else {
    return factorial(num-1)+factorial(num-2);
  }
}
console.log(factorial(5));

//caller获取另一个函数的对象
function outer(){
  inner();
}

function inner(){
  console.log(inner.caller);
}
outer();

//使用apply和call调用函数:apply可以传入数组以及arguments对象而call只能列出每个参数进行传递
function sum(num1, num2){
  return num1 + num2;
}
function callSum1(num1, num2){
  return sum.apply(this, arguments);  // 传入 arguments 对象
}
function callSum2(num1, num2){
  return sum.apply(this, [num1, num2]); // 传入数组
}
function callSum3(num1, num2){
  return sum.call(this, num1, num2)
}
console.log(callSum1(10,10));
console.log(callSum2(10,10));
console.log(callSum3(10,10));

//使用apply和call扩充作用域
color = "red";
var o = { color: "blue" };
function sayColor(){
  console.log(this.color);
}
sayColor(); //red
sayColor.call(o); //blue

//使用eval函数可以解析字符串并执行js语句
str = "console.log('xc');"
eval(str);

//查找数组中的最大值
var values = [1, 2, 3, 4, 5, 6, 7, 8];
var max = Math.max.apply(Math, values);
console.log(max);
