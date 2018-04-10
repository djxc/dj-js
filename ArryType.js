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

/*
数组可以像栈一样，后进先出，
push推进，pop弹出
*/
var colors = ["red", "blue"];
colors.push("brown");
colors[3] = "black";
console.log(colors.length); // 4
var item = colors.pop();
console.log(item); //"black"

/*
数组可以像队列一样，先进先出
push添加，shift弹出
*/
var colors = new Array(); //创建一个数组
var count = colors.push("red", "green"); //推入两项
console.log(count); //2
count = colors.push("black"); //推入另一项
console.log(count); //3
var item = colors.shift();  //"red"
console.log(item);  //2
console.log(colors.length);

//排序
var values = [1, 2, 3, 4, 5];
values.reverse(); //翻转数组的顺序
console.log(values); //5,4,3,2,1

var values = [0, 1, 5, 10, 15];
values.sort();
console.log(values);  //0,1,10,15,5

//分割数组
var colors = ["red", "green", "blue", "yellow", "purple"];
var colors3 = colors.slice(1,4);  //从索引为1到索引为4
console.log(colors3);

/*
splice方法操作数组：
1.删除元素，splice(0,2），第一个参数为要删除的位置。第二个参数为删除的个数
2.插入元素，splice(1,0，“red”，“green”），第一个参数为插入元素的位置，第二个为删除元素的个数，后边为要插入的元素
3.替换元素，splice(1,0，“red”，“green”），第一个参数为插入元素的位置，第二个为删除元素的个数，后边为要插入的元素
*/
var removed = colors.splice(0,1);
console.log(colors);
console.log(removed);// 删除第一项

removed = colors.splice(1, 0, "yellow", "orange");
console.log(colors);
console.log(removed);// 返回的是一个空数组

removed = colors.splice(1, 1, "red", "purple"); // 从位置 1 开始插入两项
console.log(colors);
console.log(removed); // yellow,返回的数组中只包含一项

/*
位置方法：
1.indexof（），从钱向后查找，返回元素的索引
2.lastIndexof()，从后向前找，返回元素的索引
*/

console.log(colors.indexOf("red"));
console.log(colors.lastIndexOf("purple"));
