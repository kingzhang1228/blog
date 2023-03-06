---
title: Map和Object
date: '2023-03-04'
tags:
 - 总结
categories:
 - JavaScript
sidebar: auto
---
# Map

`Map`对象保存键值对，并且能够记住键的原始插入顺序。任何值（对象或者基本类型）都可以作为一个键或一个值。
```javascript
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2

// 输出结果
> 1
> 97
> 3
> 2
```
# 描述

`Map` 对象是键值对的集合。Map 中的一个键只能出现一次；它在 Map 的集合中是独一无二的。Map 对象按键值对迭代——一个 `for...of` 循环在每次迭代后会返回一个形式为 [key，value] 的数组。迭代按插入顺序进行，即键值对按 `set()` 方法首次插入到集合中的顺序（也就是说，当调用 set() 时，`map` 中没有具有相同值的键）进行迭代。

规范要求 map 实现“平均访问时间与集合中的元素数量呈次线性关系”。因此，它可以在内部表示为哈希表（使用 O(1) 查找）、搜索树（使用 O(log(N)) 查找）或任何其他数据结构，只要复杂度小于 O(N)。

## 键的相等

键的比较基于零值相等算法。（它曾经使用同值相等，将 0 和 -0 视为不同。检查浏览器兼容性。）这意味着 NaN 是与 NaN 相等的（虽然 NaN !== NaN），剩下所有其它的值是根据 === 运算符的结果判断是否相等。

# `Object` 和 `Map` 的比较

`Object` 和 `Map` 类似的是，它们都允许你按键存取一个值、删除键、检测一个键是否绑定了值。因此（并且也没有其他内建的替代方式了）过去我们一直都把对象当成 Map 使用。

不过 `Map` 和 `Object` 有一些重要的区别，在下列情况中使用 `Map` 会是更好的选择：

|         | Map           | Object           |
| ------------- |:-----:|:-----:|
|       | `Map` 默认情况不包含任何键。只包含显式插入的键。 | 一个 `Object` 有一个原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。 |
| 键的类型      | 一个 `Map` 的键可以是任意值，包括函数、对象或任意基本类型。      |   一个 `Object` 的键必须是一个 `String` 或是 `Symbol`。 |
| 键的顺序 | `Map` 中的键是有序的。因此，当迭代的时候，一个 `Map` 对象以插入的顺序返回键值。      |    虽然 Object 的键目前是有序的，但并不总是这样，而且这个顺序是复杂的。因此，最好不要依赖属性的顺序。 |
|   Size    |   `Map` 的键值对个数可以轻易地通过 `size` 属性获取。    |      `Object` 的键值对个数只能手动计算。       |
|   迭代    |   `Map` 是 可迭代的 的，所以可以直接被迭代。    |      `Object` 可以直接被迭代。 没有实现 迭代协议，所以使用 JavaSctipt 的 for...of 表达式并不能直接迭代对象。       |
|   性能    |   在频繁增删键值对的场景下表现更好。   |      在频繁添加和删除键值对的场景下未作出优化。       |
|   序列化和解析    |   没有元素的序列化和解析的支持。   |      原生的由 `Object` 到 JSON 的序列化支持，使用 JSON.stringify()。      |

# 实例方法
### `Map.prototype.clear()`
移除`Map`对象中所有的键值对

### `Map.prototype.delete()`
移除 `Map` 对象中指定的键值对，如果键值对存在并成功被移除，返回 `true`，否则返回 `false`。调用 `delete` 后再调用 `map.has(key)` 将返回 `false`。

### `Map.prototype.get()`
返回与指定的键 key 关联的值，若不存在关联的值，则返回 `undefined`。

### `Map.prototype.has()`
返回一个布尔值，用来表明 `Map` 对象中是否存在与指定的键 `key` 关联的值。

### `Map.prototype.set()`
在 `Map` 对象中设置与指定的键 `key` 关联的值，并返回 `Map` 对象。

### `Map.prototype.values()`
返回一个新的迭代对象，其中包含 `Map` 对象中所有的值，并以插入 `Map` 对象的顺序排列。

### `Map.prototype.entries()`
返回一个新的迭代对象，其为一个包含 `Map` 对象中所有键值对的 `[key, value]` 数组，并以插入 `Map` 对象的顺序排列。

### `Map.prototype.foreach()`
以插入的顺序对 `Map` 对象中存在的键值对分别调用一次 `callbackFn`。如果给定了 `thisArg` 参数，这个参数将会是回调函数中 `this` 的值。

## 示例

### 使用 Map 对象

```javascript
const myMap = new Map();

const keyString = 'a string';
const keyObj = {};
const keyFunc = function() {};

// 添加键
myMap.set(keyString, "和键'a string'关联的值");
myMap.set(keyObj, "和键 keyObj 关联的值");
myMap.set(keyFunc, "和键 keyFunc 关联的值");

console.log(myMap.size); // 3

// 读取值
console.log(myMap.get(keyString)); // "和键'a string'关联的值"
console.log(myMap.get(keyObj)); // "和键 keyObj 关联的值"
console.log(myMap.get(keyFunc)); // "和键 keyFunc 关联的值"

console.log(myMap.get('a string')); // "和键'a string'关联的值"，因为 keyString === 'a string'
console.log(myMap.get({})); // undefined，因为 keyObj !== {}
console.log(myMap.get(function() {})); // undefined，因为 keyFunc !== function () {}

```

### 将 NaN 作为 Map 的键
`NaN` 也可以作为 Map 对象的键。虽然 `NaN` 与任何值甚至与自己都不相等（`NaN !== NaN` 返回 `true`），但是因为所有的 `NaN` 的值都是无法区分的，所以下面的例子成立：
```javascript
const myMap = new Map();
myMap.set(NaN, 'not a number');

myMap.get(NaN);
// "not a number"

const otherNaN = Number('foo');
myMap.get(otherNaN);
// "not a number"

```

### 使用 for...of 方法迭代 Map
`Map` 使用 `for...of` 方法迭代：
```javascript
const myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

for (const value of myMap.values()) {
  console.log(value);
}
// zero
// one

for (const [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one


```
### 使用 forEach() 方法迭代 Map
`Map` 使用 `forEach` 方法迭代：
```javascript
myMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
// 0 = zero
// 1 = one

```

### Map 与数组的关系
```javascript
const kvArray = [['key1', 'value1'], ['key2', 'value2']];

// 使用常规的 Map 构造函数可以将一个二维键值对数组转换成一个 Map 对象
const myMap = new Map(kvArray);

console.log(myMap.get('key1')); // "value1"

// 使用 Array.from 函数可以将一个 Map 对象转换成一个二维键值对数组
console.log(Array.from(myMap)); // 输出和 kvArray 相同的数组

// 更简洁的方法来做如上同样的事情，使用展开运算符
console.log([...myMap]);

// 或者在键或者值的迭代器上使用 Array.from，进而得到只含有键或者值的数组
console.log(Array.from(myMap.keys())); // 输出 ["key1", "key2"]


```

### 复制或合并 Maps
`Map` 能像数组一样被复制：
```javascript
const original = new Map([
  [1, 'one'],
]);

const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false. 浅比较 不为同一个对象的引用

```

`Map` 对象间可以进行合并，但是会保持键的唯一性。

```javascript
const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

const second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

// 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的。
// 展开语法本质上是将 Map 对象转换成数组。
const merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three

```
`Map` 对象也能与数组合并：
```javascript
const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

const second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

// Map 对象同数组进行合并时，如果有重复的键值，则后面的会覆盖前面的。
const merged = new Map([...first, ...second, [1, 'eins']]);

console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three

```