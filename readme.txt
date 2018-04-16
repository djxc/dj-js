  1.JavaScript原型模式,每创建一个函数都会自动创建该函数的prototype属性,这个属性指向函数的原型对象.
可以为原型对象添加其他属性.实例化该函数对象可以访问到原型对象的属性,因此实现多个对象共享同一个属性或方法.
//定义一个函数
function Person(){
}
//为原型对象添加属性
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
  alert(this.name);
};

var person1 = new Person();
var person2 = new Person();
person1.name = "Greg";
alert(person1.name);  //"Greg"——来自实例
alert(person2.name);  //"Nicholas"——来自原型

delete person1.name;
alert(person1.name); //"Nicholas"——来自原型
  二.继承,通过原型链
  创建两个函数对象:supertype,subtype,它们都有自己的原型,且对原型添加方法.将subtype的原型等于supertype的实例,这时subtype的原型就包括
  指向supertype的指针,因此subtype可以使用supertype的原型的方法或属性,还可以给subtype定义自己的原型方法和属性.
  在通过原型链实现继承时不能通过字面量创建原型,这样会重写原型连.
