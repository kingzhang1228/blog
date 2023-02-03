---
title: JavaScript Array的知识点总结
date: '2023-02-05'
tags:
 - 总结
categories:
 - JavaScript
sidebar: auto
---

# Array

## 属性

### Array.length

`**length**` 是`Array`的实例属性。返回或设置一个数组中的元素个数。该值是一个无符号 32-bit 整数，并且总是大于数组最高项的下标。

```javascript
var numbers = [1, 2, 3, 4, 5];
var length = numbers.length;
for (var i = 0; i < length; i++) {
  numbers[i] *= 2;
}
// 遍历后的结果 [2, 4, 6, 8, 10]
```

## 方法

### Array.prototype[iterator]()

`**iterator**` 属性和 `[Array.prototype.values()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values)` 属性的初始值是同一个函数对象。

- 语法 
   - arr[Symbol.iterator]()
   - 返回值 
      - 数组的 **iterator** 方法，默认情况下，与 `[values()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values)` 返回值相同， `arr[Symbol.iterator]` 则会返回 `[values()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values)` 函数。

 
```javascript
var arr = ['a', 'b', 'c', 'd', 'e'];
var eArr = arr[Symbol.iterator]();
// 浏览器必须支持 for...of 循环
for (let letter of eArr) {
  console.log(letter);
}
```

### get Array[species]

`**Array[species]**` 访问器属性返回 `Array` 的构造函数。

- 语法 
   - Array[Symbol.species]
   - 返回值 
      - `[Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)` 的构造函数。

 
```javascript
Array[Symbol.species]; // function Array()
```

### Array.prototype.concat()

`**concat()**` 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

- 语法 
   - var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
   - 参数 
      - valueN(可选) 
         - 数组和/或值，将被合并到一个新的数组中。如果省略了所有 `valueN` 参数，则 `concat` 会返回调用此方法的现存数组的一个浅拷贝。详情请参阅下文描述。

 

   - 返回值 
      - 新的 `[Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)` 实例。

 
```javascript
var alpha = ['a', 'b', 'c'];
var numeric = [1, 2, 3];

alpha.concat(numeric);
// result in ['a', 'b', 'c', 1, 2, 3]
```

### Array.prototype.copyWithin()

`**copyWithin()**`方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。

-  语法 
   -  arr.copyWithin(target[, start[, end]]) 
   -  参数 
      -  **target** 
         -  0 为基底的索引，复制序列到该位置。如果是负数，`target` 将从末尾开始计算。
如果 `target` 大于等于 `arr.length`，将会不发生拷贝。如果 `target` 在 `start` 之后，复制的序列将被修改以符合 `arr.length`。 

 

      -  **start** 
         -  0 为基底的索引，开始复制元素的起始位置。如果是负数，`start` 将从末尾开始计算。
如果 `start` 被忽略，`copyWithin` 将会从0开始复制。 

 

      -  **end** 
         -  0 为基底的索引，开始复制元素的结束位置。`copyWithin` 将会拷贝到该位置，但不包括 `end` 这个位置的元素。如果是负数， `end` 将从末尾开始计算。
如果 `end` 被忽略，`copyWithin` 方法将会一直复制至数组结尾（默认为 `arr.length`）。 

 

   -  返回值 
      - 改变后的数组。

 
```javascript
[1, 2, 3, 4, 5].copyWithin(-2)
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1)
// [1, 2, 3, 3, 4]

[].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}

// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

### Array.prototype.entries()

`**entries()**` 方法返回一个新的**Array Iterator**对象，该对象包含数组中每个索引的键/值对。

- 语法 
   - arr.entries()
   - 返回值 
      - 一个新的 `[Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)` 迭代器对象。[Array Iterator](https://www.ecma-international.org/ecma-262/6.0/#sec-createarrayiterator)是对象，它的原型（**proto**:Array Iterator）上有一个[next](https://www.ecma-international.org/ecma-262/6.0/#sec-%25arrayiteratorprototype%25.next)方法，可用用于遍历迭代器取得原数组的[key,value]。

 
```javascript
// 1、 Array Iterator
var arr = ["a", "b", "c"];
var iterator = arr.entries();
console.log(iterator);

/*Array Iterator {}
         __proto__:Array Iterator
         next:ƒ next()
         Symbol(Symbol.toStringTag):"Array Iterator"
         __proto__:Object
*/

// 2、iterator.next()
var arr = ["a", "b", "c"];
var iterator = arr.entries();
console.log(iterator.next());

/*{value: Array(2), done: false}
          done:false
          value:(2) [0, "a"]
           __proto__: Object
*/
// iterator.next()返回一个对象，对于有元素的数组，
// 是next{ value: Array(2), done: false }；
// next.done 用于指示迭代器是否完成：在每次迭代时进行更新而且都是false，
// 直到迭代器结束done才是true。
// next.value是一个["key","value"]的数组，是返回的迭代器中的元素值。

// 3、iterator.next方法运行
var arr = ["a", "b", "c"];
var iter = arr.entries();
var a = [];

// for(var i=0; i< arr.length; i++){   // 实际使用的是这个
for(var i=0; i< arr.length+1; i++){    // 注意，是length+1，比数组的长度大
    var tem = iter.next();             // 每次迭代时更新next
    console.log(tem.done);             // 这里可以看到更新后的done都是false
    if(tem.done !== true){             // 遍历迭代器结束done才是true
        console.log(tem.value);
        a[i]=tem.value;
    }
}

console.log(a);                         // 遍历完毕，输出next.value的数组
```

### Array.prototype.every()

`**every()**`** **方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。

- 语法 
   - arr.every(callback(element[, index[, array]])[, thisArg])
   - 参数 
      - **callback** 
         - 用来测试每个元素的函数，它可以接收三个参数： 
            - **element** 
               - 用于测试的当前值。

 

            - **index**(可选) 
               - 用于测试的当前值的索引。

 

            - **array**(可选) 
               - 调用 `every` 的当前数组。

 

      - **thisArg** 
         - 执行 `callback` 时使用的 `this` 值。

 

   - 返回值 
      - 如果回调函数的每一次返回都为 [truthy](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy) 值，返回 `**true**` ，否则返回 `**false**`。

 
```javascript
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### Array.prototype.fill()

`**fill()**` 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

- 语法 
   - arr.fill(value[, start[, end]])
   - 参数 
      - **value** 
         - 用来填充数组元素的值。

 

      - **start** 
         - 起始索引，默认值为0。

 

      - **end** 
         - 终止索引，默认值为 `this.length`。

 

   - 返回值 
      - 修改后的数组。

 
```javascript
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}) // [{}, {}, {}];
// 需要注意如果fill的参数为引用类型，会导致都执行都一个引用类型
// 如 arr[0] === arr[1] 为true
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

### Array.prototype.filter()

`**filter()**` 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

- 语法 
   - var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
   - 参数 
      - **callback** 
         - 用来测试数组的每个元素的函数。返回 `true` 表示该元素通过测试，保留该元素，`false` 则不保留。它接受以下三个参数： 
            - **element** 
               - 数组中当前正在处理的元素。

 

            - **index**(可选) 
               - 正在处理的元素在数组中的索引。

 

            - **array**(可选) 
               - 调用了 `filter` 的数组本身。

 

      - **thisArg** 
         - 执行 `callback` 时使用的 `this` 值。

 

   - 返回值 
      - 一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。

 
```javascript
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

### Array.prototype.find()

`**find()**` 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 `[undefined](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)`。

- 语法 
   - arr.find(callback[, thisArg])
   - 参数 
      - **callback** 
         - 在数组每一项上执行的函数，接收 3 个参数： 
            - **element** 
               - 当前遍历到的元素。

 

            - **index**(可选) 
               - 当前遍历到的索引。

 

            - **array**(可选) 
               - 数组本身。

 

      - **thisArg** 
         - 执行回调时用作`this` 的对象。

 

   - 返回值 
      - 数组中第一个满足所提供测试函数的元素的值，否则返回 `[undefined](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)`。

 
```javascript
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }
```

### Array.prototype.findIndex()

`**findIndex()**`方法返回数组中满足提供的测试函数的第一个元素的**索引**。若没有找到对应元素则返回-1。

- 语法 
   - arr.findIndex(callback[, thisArg])
   - 参数 
      - **callback** 
         - 针对数组中的每个元素, 都会执行该回调函数, 执行时会自动传入下面三个参数: 
            - **element** 
               - 当前元素。

 

            - **index** 
               - 当前元素的索引。

 

            - **array** 
               - 调用`findIndex`的数组。

 

      - **thisArg** 
         - 可选。执行`callback`时作为`this`对象的值.

 

   - 返回值 
      - 数组中通过提供测试函数的第一个元素的**索引**。否则，返回-1

 
```javascript
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
```

### Array.prototype.flat()

`**flat()**` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

- 语法 
   - var newArray = arr.flat([depth])
   - 参数 
      - **depth** 
         - 可选，指定要提取嵌套数组的结构深度，默认值为 1。

 

   - 返回值 
      - 一个包含将数组与子数组中所有元素的新数组。

 
```javascript
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Array.prototype.flatMap()

`**flatMap()**` 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 连着深度值为1的 [flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) 几乎相同，但 `flatMap` 通常在合并成一种方法的效率稍微高一些。

- 语法 
   - var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
// return element for new_array
}[, thisArg])
   - 参数 
      - **callback** 
         - 可以生成一个新数组中的元素的函数，可以传入三个参数： 
            - **currentValue** 
               - 当前正在数组中处理的元素

 

            - **index** 
               - 可选的。数组中正在处理的当前元素的索引。

 

            - **array** 
               - 可选的。被调用的 `map` 数组

 

      - **thisArg** 
         - 可选的。执行 `callback` 函数时 使用的`this` 值。

 

   - 返回值 
      - 一个新的数组，其中每个元素都是回调函数的结果，并且结构深度 `depth` 值为1。

 
```javascript
var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]
```

### Array.prototype.forEach()

`**forEach()**` 方法对数组的每个元素执行一次给定的函数。

- arr.forEach(callback(currentValue [, index [, array]])[, thisArg]) 
   - arr
   - 参数 
      - **callback** 
         - 为数组中每个元素执行的函数，该函数接收一至三个参数： 
            - **currentValue** 
               - 数组中正在处理的当前元素。

 

            - **index** 
               - 数组中正在处理的当前元素的索引。

 

            - **array** 
               - `forEach()` 方法正在操作的数组。

 

      - **thisArg** 
         - 可选参数。当执行回调函数 `callback` 时，用作 `this` 的值。

 

   - 返回值 
      - `[undefined](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)`。

 
```javascript
const arraySparse = [1,3,,7];
let numCallbackRuns = 0;

arraySparse.forEach(function(element){
  console.log(element);
  numCallbackRuns++;
});

console.log("numCallbackRuns: ", numCallbackRuns);

// 1
// 3
// 7
// numCallbackRuns: 3
```

### Array.from()

`**Array.from()**` 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

- 语法 
   - Array.from(arrayLike[, mapFn[, thisArg]])
   - 参数 
      - **arrayLike** 
         - 想要转换成数组的伪数组对象或可迭代对象。

 

      - **mapFn** 
         - 可选，如果指定了该参数，新数组中的每个元素会执行该回调函数。

 

      - **thisArg** 
         - 可选，可选参数，执行回调函数 `mapFn` 时 `this` 对象。

 

   - 返回值 
      - 一个新的`[数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)`实例。

 
```javascript
Array.from('foo');
// [ "f", "o", "o" ]

Array.from('foo');
// [ "f", "o", "o" ]

const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

### Array.prototype.includes()

`**includes()**` 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。

- 语法 
   - arr.includes(valueToFind[, fromIndex])
   - 参数 
      - **valueToFind** 
         - 需要查找的元素值。

 

      - **fromIndex** 
         - 可选，从`fromIndex` 索引处开始查找 `valueToFind`。如果为负值，则按升序从 `array.length + fromIndex` 的索引开始搜 （即使从末尾开始往前跳 `fromIndex` 的绝对值个索引，然后往后搜寻）。默认为 0。

 

   - 返回值 
      - A `[Boolean](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)` which is `true` if the value `valueToFind` is found within the array (or the part of the array indicated by the index `fromIndex`, if specified). Values of zero are all considered to be equal regardless of sign (that is, -0 is considered to be equal to both 0 and +0), but `false` is not considered to be the same as 0.

 
```javascript
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```

### Array.prototype.indexOf()

`**indexOf()**`方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

- 语法 
   - arr.indexOf(searchElement[, fromIndex])
   - 参数 
      - **searchElement** 
         - 要查找的元素

 

      - **fromIndex** 
         - 可选，开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，以此类推。 注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0.

 

   - 返回值 
      - 首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1

 
```javascript
var array = [2, 5, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

### Array.isArray()

**Array.isArray()** 用于确定传递的值是否是一个 `[Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)`。

- 语法 
   - Array.isArray(obj)
   - 参数 
      - **obj** 
         - 需要检测的值。

 

   - 返回值 
      - 如果值是 `[Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)`，则为true; 否则为false。

 
```javascript
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'))
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype);

// 下面的函数调用都返回 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32))
Array.isArray({ __proto__: Array.prototype });
```

### Array.prototype.join()

`**join()**` 方法将一个数组（或一个[类数组对象](https://developer.mozilla.org/zh-CN_docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。

- 语法 
   - arr.join([separator])
   - 参数 
      - **separator** 
         - 可选，指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果缺省该值，数组元素用逗号（`,`）分隔。如果`separator`是空字符串(`""`)，则所有元素之间都没有任何字符。

 

   - 返回值 
      - 一个所有数组元素连接的字符串。如果 `arr.length` 为0，则返回空字符串。

 
```javascript
var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.join();      // myVar1的值变为"Wind,Rain,Fire"
var myVar2 = a.join(', ');  // myVar2的值变为"Wind, Rain, Fire"
var myVar3 = a.join(' + '); // myVar3的值变为"Wind + Rain + Fire"
var myVar4 = a.join('');    // myVar4的值变为"WindRainFire"
```

### Array.prototype.keys()

`**keys()**`方法返回一个包含数组中每个索引键的`**Array Iterator**`对象。

- 语法 
   - arr.keys()
   - 返回值 
      - 一个新的 `[Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)` 迭代器对象。

 
```javascript
var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
```

### Array.prototype.lastIndexOf()

`**lastIndexOf()**` 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 `fromIndex` 处开始。

- 语法 
   - arr.lastIndexOf(searchElement[, fromIndex])
   - 参数 
      - **searchElement** 
         - 被查找的元素。

 

      - **fromIndex** 
         - 可选，从此位置开始逆向查找。默认为数组的长度减 1(`arr.length - 1`)，即整个数组都被查找。如果该值大于或等于数组的长度，则整个数组会被查找。如果为负值，将其视为从数组末尾向前的偏移。即使该值为负，数组仍然会被从后向前查找。如果该值为负时，其绝对值大于数组长度，则方法返回 -1，即数组不会被查找。

 

   - 返回值 
      - 数组中该元素最后一次出现的索引，如未找到返回-1。

 
```javascript
var array = [2, 5, 9, 2];
var index = array.lastIndexOf(2);
// index is 3
index = array.lastIndexOf(7);
// index is -1
index = array.lastIndexOf(2, 3);
// index is 3
index = array.lastIndexOf(2, 2);
// index is 0
index = array.lastIndexOf(2, -2);
// index is 0
index = array.lastIndexOf(2, -1);
// index is 3
```

### Array.prototype.map()

`**map()**` 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。

- 语法 
   - var new_array = arr.map(function callback(currentValue[, index[, array]]) {
// Return element for new_array
}[, thisArg])
   - 参数 
      - **callback** 
         - 生成新数组元素的函数，使用三个参数： 
            - **currentValue** 
               - `callback` 数组中正在处理的当前元素。

 

            - **index** 
               - `callback` 数组中正在处理的当前元素。

 

            - **array** 
               - `map` 方法调用的数组。

 

      - **thisArg** 
         - 执行 `callback` 函数时值被用作`this`。

 

   - 返回值 
      - 一个由原数组每个元素执行回调函数的结果组成的新数组。

 
```javascript
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9]
```

### Array.of()

`**Array.of()**` 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

- 语法 
   - Array.of(element0[, element1[, ...[, elementN]]])
   - 参数 
      - **elementN** 
         - 任意个参数，将按顺序成为返回数组中的元素。

 

   - 返回值 
      - 新的 `[Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)` 实例。

 
```javascript
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```

### Array.prototype.pop()

`**pop()**`方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。

- 语法 
   - arr.pop()
   - 返回值 
      - 从数组中删除的元素(当数组为空时返回`[undefined](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)`)。

 
```javascript
let myFish = ["angel", "clown", "mandarin", "surgeon"];

let popped = myFish.pop();

console.log(myFish);
// ["angel", "clown", "mandarin"]

console.log(popped);
// surgeon
```

### Array.prototype.push()

`**push()**` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。

- 语法 
   - arr.push(element1, ..., elementN)
   - 参数 
      - **elementN** 
         - 被添加到数组末尾的元素。

 

   - 返回值 
      - 当调用该方法时，新的 `[length](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length)` 属性值将被返回。

 
```javascript
var sports = ["soccer", "baseball"];
var total = sports.push("football", "swimming");

console.log(sports);
// ["soccer", "baseball", "football", "swimming"]

console.log(total);
// 4
```

### Array.prototype.reduce()

`**reduce()**` 方法对数组中的每个元素执行一个由您提供的**reducer**函数(升序执行)，将其结果汇总为单个返回值。

- 语法 
   - arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
   - 参数 
      - **callback** 
         - 执行数组中每个值 (如果没有提供 `initialValue则第一个值除外`)的函数，包含四个参数： 
            - **accumulator** 
               - 累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或`initialValue`（见于下方）。

 

            - **currentValue** 
               - 数组中正在处理的元素。

 

            - **index** 
               - 数组中正在处理的当前元素的索引。 如果提供了`initialValue`，则起始索引号为0，否则从索引1起始。

 

            - **array** 
               - 调用`reduce()`的数组

 

      - **initialValue** 
         - 作为第一次调用 `callback`函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。

 

   - 返回值 
      - 函数累计处理的结果

 
```javascript
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

### Array.prototype.reduceRight()

`**reduceRight()**` 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。

-  语法 
   -  arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue]) 
   -  参数 
      -  **callback** 
         - 一个回调函数，用于操作数组中的每个元素，它可接受四个参数： 
            - **accumulator** 
               - 累加器：上一次调用回调函数时，回调函数返回的值。首次调用回调函数时，如果 `initialValue` 存在，累加器即为 `initialValue`，否则须为数组中的最后一个元素（详见下方 `initialValue` 处相关说明）。

 

            - **currentValue** 
               - 当前元素：当前被处理的元素。

 

            - **index** 
               - 数组中当前被处理的元素的索引。

 

            - **array** 
               - 调用 `reduceRight()` 的数组。

 

      -  **initialValue** 
         -  `initialValue`可选
首次调用 `callback` 函数时，累加器 `accumulator` 的值。如果未提供该初始值，则将使用数组中的最后一个元素，并跳过该元素。如果不给出初始值，则需保证数组不为空。
否则，在空数组上调用 `reduce` 或 `reduceRight` 且未提供初始值（例如 `[].reduce( (acc, cur, idx, arr) => {} )` ）的话，会导致类型错误 `TypeError: reduce of empty array with no initial value`。 

 

   -  返回值 
      - 执行之后的返回值。

 
```javascript
var sum = [0, 1, 2, 3].reduceRight(function(a, b) {
  return a + b;
});
// sum is 6
```

### Array.prototype.reverse()

`**reverse()**` 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。

- 语法 
   - arr.reverse()
   - 返回值 
      - 颠倒后的数组。

 
```javascript
const a = [1, 2, 3];

console.log(a); // [1, 2, 3]

a.reverse();

console.log(a); // [3, 2, 1]
```

### Array.prototype.shift()

`**shift()**` 方法从数组中删除**第一个**元素，并返回该元素的值。此方法更改数组的长度。

- 语法 
   - arr.shift()
   - 返回值 
      - 从数组中删除的元素; 如果数组为空则返回`[undefined](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)` 。

 
```javascript
let myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('调用 shift 之前: ' + myFish);
// "调用 shift 之前: angel,clown,mandarin,surgeon"

var shifted = myFish.shift();

console.log('调用 shift 之后: ' + myFish);
// "调用 shift 之后: clown,mandarin,surgeon"

console.log('被删除的元素: ' + shifted);
// "被删除的元素: angel"
```

### Array.prototype.slice()

`**slice()**` 方法返回一个新的数组对象，这一对象是一个由 `begin` 和 `end` 决定的原数组的**浅拷贝**（包括 `begin`，不包括`end`）。原始数组不会被改变。

-  语法 
   -  arr.slice([begin[, end]]) 
   -  参数 
      -  **begin** 
         -  提取起始处的索引（从 `0` 开始），从该索引开始提取原数组元素。
如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，`slice(-2)` 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
如果省略 `begin`，则 `slice` 从索引 `0` 开始。
如果 `begin` 超出原数组的索引范围，则会返回空数组。 

 

      -  **end** 
         -  提取终止处的索引（从 `0` 开始），在该索引处结束提取原数组元素。`slice` 会提取原数组中索引从 `begin` 到 `end` 的所有元素（包含 `begin`，但不包含 `end`）。
`slice(1,4)` 会提取原数组中从第二个元素开始一直到第四个元素的所有元素 （索引为 1, 2, 3的元素）。
如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 `slice(-2,-1)` 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。
如果 `end` 被省略，则 `slice` 会一直提取到原数组末尾。
如果 `end` 大于数组的长度，`slice` 也会一直提取到原数组末尾。 

 

   -  返回值 
      - 一个含有被提取元素的新数组。

 
```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]
```

### Array.prototype.some()

`**some()**` 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。

- 语法 
   - arr.some(callback(element[, index[, array]])[, thisArg])
   - 参数 
      - **callback** 
         - 用来测试每个元素的函数，接受三个参数： 
            - **element** 
               - 数组中正在处理的元素。

 

            - **index** 
               - 可选的。数组中正在处理的元素的索引值。

 

            - **array** 
               - 可选的。`some()`被调用的数组。

 

      - **thisArg** 
         - 可选的。执行 `callback` 时使用的 `this` 值。

 

   - 返回值 
      - 这是返回值

 
```javascript
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

### Array.prototype.sort()

`**sort()**` 方法用[原地算法](https://en.wikipedia.org/wiki/In-place_algorithm)对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的

- 语法 
   - arr.sort([compareFunction])
   - 参数 
      - **compareFunction** 
         - 可选，用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。 
            - **firstEl** 
               - 第一个用于比较的元素。

 

            - **secondEl** 
               - 第二个用于比较的元素。

 

   - 返回值 
      - 排序后的数组。请注意，数组已原地排序，并且不进行复制。

 
```javascript
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

### Array.prototype.splice()

`**splice()**` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。

-  语法 
   -  array.splice(start[, deleteCount[, item1[, item2[, ...]]]]) 
   -  参数 
      -  **start** 
         - 指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从-1计数，这意味着-n是倒数第n个元素并且等价于`array.length-n`）；如果负数的绝对值大于数组的长度，则表示开始位置为第0位。

 

      -  **deleteCount** 
         -  可选，整数，表示要移除的数组元素的个数。
如果 `deleteCount` 大于 `start` 之后的元素的总数，则从 `start` 后面的元素都将被删除（含第 `start` 位）。
如果 `deleteCount` 被省略了，或者它的值大于等于`array.length - start`(也就是说，如果它大于或者等于`start`之后的所有元素的数量)，那么`start`之后数组的所有元素都会被删除。
如果 `deleteCount` 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。 

 

      -  **item1, item2, ...** 
         - 要添加进数组的元素,从`start` 位置开始。如果不指定，则 `splice()` 将只删除数组元素。

 

   -  返回值 
      - 由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。

 
```javascript
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

### Array.prototype.toLocaleString()

`**toLocaleString()**` 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 `toLocaleString` 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。

- 语法 
   - arr.toLocaleString([locales[,options]]);
   - 参数 
      - **locales** 
         - 带有BCP 47语言标记的字符串或字符串数组，关于`locales`参数的形式与解释，请看`[Intl](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl)`页面。

 

      - **options** 
         - 一个可配置属性的对象，对于数字 `[Number.prototype.toLocaleString()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)`，对于日期`[Date.prototype.toLocaleString()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)`.

 

   - 返回值 
      - 表示数组元素的字符串。

 
```javascript
const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);
// expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary
```

### Array.prototype.toString()

`**toString()**` 返回一个字符串，表示指定的数组及其元素。

- 语法 
   - arr.toString()
   - 返回值 
      - 一个表示指定的数组及其元素的字符串。

 
```javascript
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"
```

### Array.prototype.unshift()

`**unshift()**` 方法将一个或多个元素添加到数组的**开头**，并返回该数组的**新长度(该**方法修改原有数组**)**。

- 语法 
   - arr.unshift(element1, ..., elementN)
   - 参数 
      - **elementN** 
         - 要添加到数组开头的元素或多个元素。

 

   - 返回值 
      - 当一个对象调用该方法时，返回其 `[length](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length)` 属性值。

 
```javascript
let arr = [1, 2];

arr.unshift(0); // result of the call is 3, which is the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // the new array length is 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]); // the new array length is 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5]); // the new array length is 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
```

### Array.prototype.values()

`**values()**` 方法返回一个新的 `**Array Iterator**` 对象，该对象包含数组每个索引的值

- 语法 
   - arr.values()
   - 返回值 
      - 一个新的 `[Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)` 迭代对象。

 
```javascript
let arr = ['w', 'y', 'k', 'o', 'p'];
let eArr = arr.values();

for (let letter of eArr) {
  console.log(letter);
} //"w" "y "k" "o" "p"
```