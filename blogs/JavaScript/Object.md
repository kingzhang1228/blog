---
title: JavaScript Object的知识点总结
date: '2023-02-05'
tags:
 - 总结
categories:
 - JavaScript
sidebar: auto
---

# Object

## 方法

### Object.prototype.constructor

返回创建实例对象的 `[Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)` 构造函数的引用。注意，此属性的值是对函数本身的引用，而不是一个包含函数名称的字符串。对原始类型来说，如`1`，`true`和`"test"`，该值只可读。

- 语法 
   - obj.constructor

 
```javascript
var o = {};
o.constructor === Object; // true

var o = new Object;
o.constructor === Object; // true

var a = [];
a.constructor === Array; // true

var a = new Array;
a.constructor === Array // true

var n = new Number(3);
n.constructor === Number; // true
```

### Object.assign()

`**Object.assign()**` 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。

- 语法 
   - Object.assign(target, ...sources)
   - 参数 
      - **target** 
         - 目标对象。

 

      - **sources** 
         - 源对象。

 

   - 返回值 
      - 目标对象。

 
```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```

### Object.create()

`**Object.create()**`方法创建一个新对象，使用现有的对象来提供新创建的对象的**proto**。 （请打开浏览器控制台以查看运行结果。）

- 语法 
   - Object.create(proto，[propertiesObject])
   - 参数 
      - **proto** 
         - 新创建对象的原型对象。

 

      - **propertiesObject** 
         - 可选。需要传入一个对象，该对象的属性类型参照`[Object.defineProperties()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)`的第二个参数。如果该参数被指定且不为 `[undefined](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)`，该传入对象的自有可枚举属性(即其自身定义的属性，而不是其原型链上的枚举属性)将为新创建的对象添加指定的属性值和对应的属性描述符。

 

   - 返回值 
      - 一个新对象，带着指定的原型对象和属性。

 
```javascript
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
```

### Object.defineProperties()

`**Object.defineProperties()**` 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。

- 语法 
   - Object.defineProperties(obj, props)
   - 参数 
      - **obj** 
         - 在其上定义或修改属性的对象。

 

      - **props** 
         - 要定义其可枚举属性或修改的属性描述符的对象。对象中存在的属性描述符主要有两种：数据描述符和访问器描述符（更多详情，请参阅`[Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)`）。描述符具有以下键： 
            - **configurable** 
               - `true` 只有该属性描述符的类型可以被改变并且该属性可以从对应对象中删除。
**默认为 **`**false**`

 

            - **enumerable** 
               - `true` 只有在枚举相应对象上的属性时该属性显现。
**默认为 **`**false**`

 

            - **value** 
               - 与属性关联的值。可以是任何有效的JavaScript值（数字，对象，函数等）。
**默认为 **`[**undefined**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)`**.**

 

            - **writable** 
               - `true`只有与该属性相关联的值被[assignment operator](https://developer.mozilla.org/zh-CN/docs/conflicting/Web/JavaScript/Reference/Operators_8d54701de06af40a7c984517cbe87b3e)改变时。
**默认为 **`**false**`

 

            - **get** 
               - 作为该属性的 getter 函数，如果没有 getter 则为`[undefined](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)`。函数返回值将被用作属性的值。
**默认为 **`[**undefined**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

 

            - **set** 
               - 作为属性的 setter 函数，如果没有 setter 则为`[undefined](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)`。函数将仅接受参数赋值给该属性的新值。
**默认为 **`[**undefined**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

 

   - 返回值 
      - 传递给函数的对象。

 
```javascript
var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});
```

### Object.defineProperty()

`**Object.defineProperty()**` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

- 语法 
   - Object.defineProperty(obj, prop, descriptor)
   - 参数 
      - **obj** 
         - 要定义属性的对象。

 

      - **prop** 
         - 要定义或修改的属性的名称或 `[Symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)` 。

 

      - **descriptor** 
         - 要定义或修改的属性描述符。

 

   - 返回值 
      - 被传递给函数的对象。

 
```javascript
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42
```

### Object.entries()

`**Object.entries()**`方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 `[for...in](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)` 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。

- 语法 
   - Object.entries(obj)
   - 参数 
      - **obj** 
         - 可以返回其可枚举属性的键值对的对象。

 

   - 返回值 
      - 给定对象自身可枚举属性的键值对数组。

 
```javascript
democonst obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// iterate through key-value gracefully
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```

### Object.freeze()

`**Object.freeze()**` 方法可以**冻结**一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。`freeze()` 返回和传入的参数相同的对象。

- 语法 
   - Object.freeze(obj)
   - 参数 
      - **obj** 
         - 要被冻结的对象。

 

   - 返回值 
      - 被冻结的对象。

 
```javascript
var obj = {
  prop: function() {},
  foo: 'bar'
};

// 新的属性会被添加, 已存在的属性可能
// 会被修改或移除
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

// 作为参数传递的对象与返回的对象都被冻结
// 所以不必保存返回的对象（因为两个对象全等）
var o = Object.freeze(obj);

o === obj; // true
Object.isFrozen(obj); // === true

// 现在任何改变都会失效
obj.foo = 'quux'; // 静默地不做任何事
// 静默地不添加此属性
obj.quaxxor = 'the friendly duck';

// 在严格模式，如此行为将抛出 TypeErrors
function fail(){
  'use strict';
  obj.foo = 'sparky'; // throws a TypeError
  delete obj.quaxxor; // 返回true，因为quaxxor属性从来未被添加
  obj.sparky = 'arf'; // throws a TypeError
}

fail();

// 试图通过 Object.defineProperty 更改属性
// 下面两个语句都会抛出 TypeError.
Object.defineProperty(obj, 'ohai', { value: 17 });
Object.defineProperty(obj, 'foo', { value: 'eit' });

// 也不能更改原型
// 下面两个语句都会抛出 TypeError.
Object.setPrototypeOf(obj, { x: 20 })
obj.__proto__ = { x: 20 }
```

### Object.fromEntries()

`**Object.fromEntries()**` 方法把键值对列表转换为一个对象。

- 语法 
   - Object.fromEntries(iterable);
   - 参数 
      - **iterable** 
         - 类似 `[Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)` 、 `[Map](https://developer.mozilla.org/zh-CN/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Map)` 或者其它实现了[可迭代协议](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)的可迭代对象。

 

   - 返回值 
      - 一个由该迭代对象条目提供对应属性的新对象。

 
```javascript
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }
```

### Object.getOwnPropertyDescriptor()

`**Object.getOwnPropertyDescriptor()**` 方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）

- 语法 
   - Object.getOwnPropertyDescriptor(obj, prop)
   - 参数 
      - **obj** 
         - 需要查找的目标对象

 

      - **prop** 
         - 目标对象内属性名称

 

   - 返回值 
      - 如果指定的属性存在于对象上，则返回其属性描述符对象（property descriptor），否则返回 `[undefined](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)`。

 
```javascript
var o, d;

o = { get foo() { return 17; } };
d = Object.getOwnPropertyDescriptor(o, "foo");
// d {
//   configurable: true,
//   enumerable: true,
//   get: /*the getter function*/,
//   set: undefined
// }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, "bar");
// d {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// }

o = {};
Object.defineProperty(o, "baz", {
  value: 8675309,
  writable: false,
  enumerable: false
});
d = Object.getOwnPropertyDescriptor(o, "baz");
// d {
//   value: 8675309,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
```

### Object.getOwnPropertyDescriptors()

`**Object.getOwnPropertyDescriptors()**` 方法用来获取一个对象的所有自身属性的描述符。

- 语法 
   - Object.getOwnPropertyDescriptors(obj)
   - 参数 
      - **obj** 
         - 任意对象

 

   - 返回值 
      - 所指定对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象。

 
```javascript
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);
```

### Object.getOwnPropertyNames()

`**Object.getOwnPropertyNames()**`方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。

- 语法 
   - Object.getOwnPropertyNames(obj)
   - 参数 
      - **obj** 
         - 一个对象，其自身的可枚举和不可枚举属性的名称被返回。

 

   - 返回值 
      - 在给定对象上找到的自身属性对应的字符串数组。

 
```javascript
var arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort()); // ["0", "1", "2", "length"]

// 类数组对象
var obj = { 0: "a", 1: "b", 2: "c"};
console.log(Object.getOwnPropertyNames(obj).sort()); // ["0", "1", "2"]

// 使用Array.forEach输出属性名和属性值
Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
  console.log(val + " -> " + obj[val]);
});
// 输出
// 0 -> a
// 1 -> b
// 2 -> c

//不可枚举属性
var my_obj = Object.create({}, {
  getFoo: {
    value: function() { return this.foo; },
    enumerable: false
  }
});
my_obj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj).sort()); // ["foo", "getFoo"]
```

### Object.getOwnPropertySymbols()

`**Object.getOwnPropertySymbols()**` 方法返回一个给定对象自身的所有 Symbol 属性的数组。

- 语法 
   - Object.getOwnPropertySymbols(obj)
   - 参数 
      - **obj** 
         - 要返回 Symbol 属性的对象。

 

   - 返回值 
      - 在给定对象自身上找到的所有 Symbol 属性的数组。

 
```javascript
var obj = {};
var a = Symbol("a");
var b = Symbol.for("b");

obj[a] = "localSymbol";
obj[b] = "globalSymbol";

var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols)         // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0])      // Symbol(a)
```

### Object.getPrototypeOf()

`**Object.getPrototypeOf()**` 方法返回指定对象的原型（内部`[[Prototype]]`属性的值）。

- 语法 
   - Object.getPrototypeOf(object)
   - 参数 
      - **obj** 
         - 要返回其原型的对象。

 

   - 返回值 
      - 给定对象的原型。如果没有继承属性，则返回 `[null](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)` 。

 
```javascript
var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true

var reg = /a/;
Object.getPrototypeOf(reg) === RegExp.prototype; // true
```

### Object.prototype.hasOwnProperty()

`**hasOwnProperty()**` 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。

- 语法 
   - obj.hasOwnProperty(prop)
   - 参数 
      - **prop** 
         - 要检测的属性的 `[String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)` 字符串形式表示的名称，或者 `[Symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)`。

 

   - 返回值 
      - 用来判断某个对象是否含有指定的属性的布尔值 `[Boolean](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`。

 
```javascript
o = new Object();
o.hasOwnProperty('prop'); // 返回 false
o.prop = 'exists';
o.hasOwnProperty('prop'); // 返回 true
delete o.prop;
o.hasOwnProperty('prop'); // 返回 false
```

### Object.is()

`**Object.is()**` 方法判断两个值是否为[同一个值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)。

- 语法 
   - Object.is(value1, value2);
   - 参数 
      - **value1** 
         - 被比较的第一个值。

 

      - **value2** 
         - 被比较的第二个值。

 

   - 返回值 
      - 一个 `[Boolean](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)` 类型标示两个参数是否是同一个值。

 
```javascript
Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);         // true
Object.is(foo, bar);         // false

Object.is(null, null);       // true

// 特例
Object.is(0, -0);            // false
Object.is(0, +0);            // true
Object.is(-0, -0);           // true
```

### Object.isExtensible()

`**Object.isExtensible()**` 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。

- 语法 
   - Object.isExtensible(obj)
   - 参数 
      - **obj** 
         - 需要检测的对象

 

   - 返回值 
      - 表示给定对象是否可扩展的一个`[Boolean](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Boolean)` 。

 
```javascript
// 新对象默认是可扩展的.
var empty = {};
Object.isExtensible(empty); // === true

// ...可以变的不可扩展.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// 密封对象是不可扩展的.
var sealed = Object.seal({});
Object.isExtensible(sealed); // === false

// 冻结对象也是不可扩展.
var frozen = Object.freeze({});
Object.isExtensible(frozen); // === false
```

### Object.isFrozen()

`**Object.isFrozen()**`方法判断一个对象是否被[冻结](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)。

- 语法 
   - Object.isFrozen(obj)
   - 参数 
      - **obj** 
         - 被检测的对象。

 

   - 返回值 
      - 表示给定对象是否被冻结的`[Boolean](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`。

 
```javascript
// 一个对象默认是可扩展的,所以它也是非冻结的.
Object.isFrozen({}); // === false

// 一个不可扩展的空对象同时也是一个冻结对象.
var vacuouslyFrozen = Object.preventExtensions({});
Object.isFrozen(vacuouslyFrozen) //=== true;

// 一个非空对象默认也是非冻结的.
var oneProp = { p: 42 };
Object.isFrozen(oneProp) //=== false

// 让这个对象变的不可扩展,并不意味着这个对象变成了冻结对象,
// 因为p属性仍然是可以配置的(而且可写的).
Object.preventExtensions(oneProp);
Object.isFrozen(oneProp) //=== false

// 此时,如果删除了这个属性,则它会成为一个冻结对象.
delete oneProp.p;
Object.isFrozen(oneProp) //=== true

// 一个不可扩展的对象,拥有一个不可写但可配置的属性,则它仍然是非冻结的.
var nonWritable = { e: "plep" };
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, "e", { writable: false }); // 变得不可写
Object.isFrozen(nonWritable) //=== false

// 把这个属性改为不可配置,会让这个对象成为冻结对象.
Object.defineProperty(nonWritable, "e", { configurable: false }); // 变得不可配置
Object.isFrozen(nonWritable) //=== true

// 一个不可扩展的对象,拥有一个不可配置但可写的属性,则它仍然是非冻结的.
var nonConfigurable = { release: "the kraken!" };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, "release", { configurable: false });
Object.isFrozen(nonConfigurable) //=== false

// 把这个属性改为不可写,会让这个对象成为冻结对象.
Object.defineProperty(nonConfigurable, "release", { writable: false });
Object.isFrozen(nonConfigurable) //=== true

// 一个不可扩展的对象,值拥有一个访问器属性,则它仍然是非冻结的.
var accessor = { get food() { return "yum"; } };
Object.preventExtensions(accessor);
Object.isFrozen(accessor) //=== false

// ...但把这个属性改为不可配置,会让这个对象成为冻结对象.
Object.defineProperty(accessor, "food", { configurable: false });
Object.isFrozen(accessor) //=== true

// 使用Object.freeze是冻结一个对象最方便的方法.
var frozen = { 1: 81 };
Object.isFrozen(frozen) //=== false
Object.freeze(frozen);
Object.isFrozen(frozen) //=== true

// 一个冻结对象也是一个密封对象.
Object.isSealed(frozen) //=== true

// 当然,更是一个不可扩展的对象.
Object.isExtensible(frozen) //=== false
```

### Object.prototype.isPrototypeOf()

`**isPrototypeOf()**` 方法用于测试一个对象是否存在于另一个对象的原型链上。

- 语法 
   - prototypeObj.isPrototypeOf(object)
   - 参数 
      - **object** 
         - 在该对象的原型链上搜寻

 

   - 返回值 
      - `[Boolean](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`，表示调用对象是否在另一个对象的原型链上。

 
```javascript
function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

var baz = new Baz();

console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
```

### Object.isSealed()

`**Object.isSealed()**` 方法判断一个对象是否被密封。

- 语法 
   - Object.isSealed(obj)
   - 参数 
      - **obj** 
         - 要被检查的对象。

 

   - 返回值 
      - 表示给定对象是否被密封的一个`[Boolean](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)` 。

 
```javascript
// 新建的对象默认不是密封的.
var empty = {};
Object.isSealed(empty); // === false

// 如果你把一个空对象变的不可扩展，则它同时也会变成个密封对象.
Object.preventExtensions(empty);
Object.isSealed(empty); // === true

// 但如果这个对象不是空对象，则它不会变成密封对象,因为密封对象的所有自身属性必须是不可配置的.
var hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp);
Object.isSealed(hasProp); // === false

// 如果把这个属性变的不可配置，则这个属性也就成了密封对象.
Object.defineProperty(hasProp, 'fee', {
  configurable: false
});
Object.isSealed(hasProp); // === true

// 最简单的方法来生成一个密封对象，当然是使用Object.seal.
var sealed = {};
Object.seal(sealed);
Object.isSealed(sealed); // === true

// 一个密封对象同时也是不可扩展的.
Object.isExtensible(sealed); // === false

// 一个密封对象也可以是一个冻结对象,但不是必须的.
Object.isFrozen(sealed); // === true ，所有的属性都是不可写的
var s2 = Object.seal({ p: 3 });
Object.isFrozen(s2); // === false， 属性"p"可写

var s3 = Object.seal({ get p() { return 0; } });
Object.isFrozen(s3); // === true ，访问器属性不考虑可写不可写,只考虑是否可配置
```

### Object.keys()

`**Object.keys()**` 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。

- 语法 
   - Object.keys(obj)
   - 参数 
      - **obj** 
         - 要返回其枚举自身属性的对象。

 

   - 返回值 
      - 一个表示给定对象的所有可枚举属性的字符串数组。

 
```javascript
// simple array
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
var myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
```

### Object.preventExtensions()

`**Object.preventExtensions()**`方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。

- 语法 
   - Object.preventExtensions(obj)
   - 参数 
      - **obj** 
         - 将要变得不可扩展的对象。

 

   - 返回值 
      - 已经不可扩展的对象。

 
```javascript
// Object.preventExtensions将原对象变的不可扩展,并且返回原对象.
var obj = {};
var obj2 = Object.preventExtensions(obj);
obj === obj2;  // true

// 字面量方式定义的对象默认是可扩展的.
var empty = {};
Object.isExtensible(empty) //=== true

// ...但可以改变.
Object.preventExtensions(empty);
Object.isExtensible(empty) //=== false

// 使用Object.defineProperty方法为一个不可扩展的对象添加新属性会抛出异常.
var nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, "new", { value: 8675309 }); // 抛出TypeError异常

// 在严格模式中,为一个不可扩展对象的新属性赋值会抛出TypeError异常.
function fail()
{
  "use strict";
  nonExtensible.newProperty = "FAIL"; // throws a TypeError
}
fail();
```

### Object.prototype.propertyIsEnumerable()

`**propertyIsEnumerable()**` 方法返回一个布尔值，表示指定的属性是否可枚举。

- 语法 
   - obj.propertyIsEnumerable(prop)
   - 参数 
      - **prop** 
         - 需要测试的属性名。

 

   - 返回值 
      - 用来表示指定的属性名是否可枚举的`[布尔值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`。

 
```javascript
const object1 = {};
const array1 = [];
object1.property1 = 42;
array1[0] = 42;

console.log(object1.propertyIsEnumerable('property1'));
// expected output: true

console.log(array1.propertyIsEnumerable(0));
// expected output: true

console.log(array1.propertyIsEnumerable('length'));
// expected output: false
```

### Object.seal()

`**Object.seal()**`方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变。

- 语法 
   - Object.seal(obj)
   - 参数 
      - **obj** 
         - 将要被密封的对象。

 

   - 返回值 
      - 被密封的对象。

 
```javascript
var obj = {
  prop: function() {},
  foo: 'bar'
};

// 可以添加新的属性
// 可以更改或删除现有的属性
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

var o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // === true

// 仍然可以修改密封对象的属性值
obj.foo = 'quux';


// 但是你不能将属性重新定义成为访问器属性
// 反之亦然
Object.defineProperty(obj, 'foo', {
  get: function() { return 'g'; }
}); // throws a TypeError

// 除了属性值以外的任何变化，都会失败.
obj.quaxxor = 'the friendly duck';
// 添加属性将会失败
delete obj.foo;
// 删除属性将会失败

// 在严格模式下，这样的尝试将会抛出错误
function fail() {
  'use strict';
  delete obj.foo; // throws a TypeError
  obj.sparky = 'arf'; // throws a TypeError
}
fail();

// 通过Object.defineProperty添加属性将会报错
Object.defineProperty(obj, 'ohai', {
  value: 17
}); // throws a TypeError
Object.defineProperty(obj, 'foo', {
  value: 'eit'
}); // 通过Object.defineProperty修改属性值
```

### Object.setPrototypeOf()

**Object.setPrototypeOf()** 方法设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  `[null](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)`。

- 语法 
   - Object.setPrototypeOf(obj, prototype)
   - 参数 
      - **obj** 
         - 要设置其原型的对象。.

 

      - **prototype** 
         - 该对象的新原型(一个对象 或 null).

 
```javascript
function Mammal() {
  this.isMammal = 'yes';
}

function MammalSpecies(sMammalSpecies) {
  this.species = sMammalSpecies;
}

MammalSpecies.prototype = new Mammal();
MammalSpecies.prototype.constructor = MammalSpecies;

var oCat = new MammalSpecies('Felis');

console.log(oCat.isMammal);
// 'yes'

function Animal() {
  this.breathing = 'yes';
}

Object.appendChain(oCat, new Animal());

console.log(oCat.breathing);
// 'yes'
```

### Object.prototype.toLocaleString()

`**toLocaleString()**` 方法返回一个该对象的字符串表示。此方法被用于派生对象为了特定语言环境的目的（locale-specific purposes）而重载使用。

- 语法 
   - obj.toLocaleString();
   - 返回值 
      - 表示对象的字符串。

 
### Object.prototype.toSource()

`**toSource()**`方法返回一个表示对象源代码的字符串。

- 语法 
   - Object.toSource(); obj.toSource()
   - 返回值 
      - 一个表示对象的源代码的字符串。

 
### Object.prototype.toString()

`**toString()**` 方法返回一个表示该对象的字符串。

- 语法 
   - obj.toString()
   - 返回值 
      - 一个表示该对象的字符串。

 
```javascript
  function Dog(name) {
    this.name = name;
  }

  const dog1 = new Dog('Gabby');

  Dog.prototype.toString = function dogToString() {
    return `${this.name}`;
  };

  console.log(dog1.toString());
  // expected output: "Gabby"
```

### Object.prototype.valueOf()

`**valueOf()**` 方法返回指定对象的原始值。

- 语法 
   - object.valueOf()
   - 返回值 
      - 返回值为该对象的原始值。

 
```javascript
// Array：返回数组对象本身
var array = ["ABC", true, 12, -5];
console.log(array.valueOf() === array);   // true

// Date：当前时间距1970年1月1日午夜的毫秒数
var date = new Date(2013, 7, 18, 23, 11, 59, 230);
console.log(date.valueOf());   // 1376838719230

// Number：返回数字值
var num =  15.26540;
console.log(num.valueOf());   // 15.2654

// 布尔：返回布尔值true或false
var bool = true;
console.log(bool.valueOf() === bool);   // true

// new一个Boolean对象
var newBool = new Boolean(true);
// valueOf()返回的是true，两者的值相等
console.log(newBool.valueOf() == newBool);   // true
// 但是不全等，两者类型不相等，前者是boolean类型，后者是object类型
console.log(newBool.valueOf() === newBool);   // false

// Function：返回函数本身
function foo(){}
console.log( foo.valueOf() === foo );   // true
var foo2 =  new Function("x", "y", "return x + y;");
console.log( foo2.valueOf() );
/*
ƒ anonymous(x,y
) {
return x + y;
}
*/

// Object：返回对象本身
var obj = {name: "张三", age: 18};
console.log( obj.valueOf() === obj );   // true

// String：返回字符串值
var str = "http://www.xyz.com";
console.log( str.valueOf() === str );   // true

// new一个字符串对象
var str2 = new String("http://www.xyz.com");
// 两者的值相等，但不全等，因为类型不同，前者为string类型，后者为object类型
console.log( str2.valueOf() === str2 );   // false
```

### Object.values()

`**Object.values()**`方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用`[for...in](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)`循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。

- 语法 
   - Object.values(obj)
   - 参数 
      - **obj** 
         - 被返回可枚举属性值的对象。

 

   - 返回值 
      - 一个包含对象自身的所有可枚举属性值的数组。
```javascript
var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// array like object with random key ordering
// when we use numeric keys, the value returned in a numerical order according to the keys
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']
```
