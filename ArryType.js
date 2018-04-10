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
