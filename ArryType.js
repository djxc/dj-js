var colors = ["red", "blue", "green"];  // 创建一个包含 3 个字符串的数组
colors.length = 2;  //数组的长度可以随便修改，修改之后有些元素就会访问不到了
// alert(colors[2]);
console.log(colors[2]);

var person1 = {
  toLocaleString : function () {
    return "Nikolaos";
  },
  toString : function() {
    return "Nicholas";
  }
};
var dj = person1;
console.log(dj.toLocaleString());

//数组可以像栈一样，后进先出，push推进，pop弹出
var colors = ["red", "blue"];
colors.push("brown");
colors[3] = "black";
console.log(colors.length); // 4
var item = colors.pop();
console.log(item); //"black"

//数组可以像队列一样，先进先出，push添加，shift弹出
var colors = new Array(); //创建一个数组
var count = colors.push("red", "green"); //推入两项
console.log(count); //2
count = colors.push("black"); //推入另一项
console.log(count); //3
var item = colors.shift();  //"red"
console.log(item);  //2
console.log(colors.length);
