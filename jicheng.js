/*
组合继承模式
*/
//创建函数
function SuperType(name){
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
//添加该函数的原型方法
SuperType.prototype.sayName = function(){
  console.log(this.name);
};
//定义另一个函数
function SubType(name, age){
  SuperType.call(this, name);  //第二次调用 SuperType()
  this.age = age;
}
//将第二个函数的原型赋值为第一个函数的实例,以此实现继承
// SubType.prototype = new SuperType();  //第一次调用 SuperType()
// SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
  console.log(this.age);
};

// subtype = new SubType("dj",26);
// subtype.sayAge();
// subtype.sayName();
// console.log(subtype.colors);

/*
寄生组合式继承
*/
function inheritPrototype(subType, superType){
  var prototype = Object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function(){
  console.log(this.age);
};

subtype = new SubType("dj",26);
superType = new SuperType("xc");
subtype.sayAge();
subtype.sayName();
subtype.colors.push("yellow");
console.log(subtype.colors);
console.log(superType.colors);
