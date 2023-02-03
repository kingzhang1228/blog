---
title: JavaScript String的知识点总结
date: '2023-02-05'
tags:
 - 总结
categories:
 - JavaScript
sidebar: auto
---

# 字符串

## 字符串方法

### 1、str.length

获取字符串长度的方法

```javascript
var str = "welcome to china";
console.log(str.length); //结果是 16,空格也算长度
```

### 2、str.charAt(index)

返回指定索引位置的字符方法

> 说明：index是索引，值的区间为[0,length-1]

```javascript
var str = "welcome";
console.log(str.charAt(0)); //结果是 w
console.log(str.charAt(3)); //结果是 c
```

### 3、str.charCodeAt(index)

回指定索引位置的字符Unicode编码

> 说明：index为索引，如果指定位置没有字符，返回NaN

```javascript
var str = "aBwelcome";
console.log(str.charCodeAt(0)); //结果是 97
console.log(str.charCodeAt(1)); //结果是 66
console.log(str.charCodeAt(11)); //结果是 NaN
```

### 4、String.fromCharCode(code1[,code2])

将字符编码转化为相应的字符串

> 说明：code1,code2是待转换的字符串序列，如果没有参数，结果为空字符串

```javascript
console.log(String.fromCharCode("97","65","66")); //aAB
console.log(String.fromCharCode()); //空
```

### 5、strs.indexOf(str) 

返回某个指定的字符串值在字符串中首次出现的位置

```javascript
var strs = "welcomecome";
console.log(strs.indexOf("co")); // 3 strs中首次出现“co”的索引值
console.log(strs.indexOf("co",4)); // 7 从索引为4的位置开始查找“co”首次出现的位置(默认从头开始查找)
console.log(strs.indexOf("sb")); // -1 如果找不到，返回-11234
```

### 6、strs.lastIndexOf(str) 

返回某个指定的字符串值在字符串中最后出现的位置

```javascript
var strs = "welcomecome";
console.log(strs.lastIndexOf("co")); // 7 
console.log(strs.lastIndexOf("co",6)); // 3 从索引为6的位置往前找字符串“co”123
```

### 7、str.toLowerCase() 或者 str.toUpperCase()

将字符串转换为小写或者大写

```javascript
var str = "welcomeCOME";
console.log(str.toLowerCase()); // welcomecome 转为小写
console.log(str.toUpperCase()); // WELCOMECOME 转为大写123
```

### 8、str.substr( startIndex[,length] ) 

返回一个从指定索引位置开始的指定长度的子字符串

> 说明：
> startIndex所需的子字符串的起始位置。字符串中的第一个字符的索引为0。
> length在返回的子字符串中应包括的字符个数

```javascript
var str = "welcome";
console.log(str.substr(2,3)); //lco 从索引为2的位置开始截取，截取长度为3
console.log(str.substr(2)); //lcome 没有规定长度,截取到末尾
console.log(str.substr(-3)); // ome 支持负数，表示从后面开始截取几位
console.log(str.substr(-3,2)); // om 表示从倒数第三位开始截取，往后面截取2个长度12345
```

### 9、str.substring(startIndex,endIndex)

提取字符串中两个指定索引号直接的字符

> 说明：
> startIndex指明子字符串的起始位置，该索引从0开始起算。
> endIndex指明子字符串的结束位置，该索引从0开始起算。
> substring方法使用startIndex和endIndex两者中的较小值作为子字符串的起始点。如果startIndex或endIndex为NaN或者为负数，那么将其替换为0。

```javascript
var str = "welcome";
console.log(str.substring(2,4)); // lc [2,4), 从索引2到索引4半闭半开
console.log(str.substring(2)); // lcome 没有规定结束索引,截取到末尾
console.log(str.substring(-2));  //welcome 不支持负数，会从头开始截取
console.log(str.substring(-2,3)); //wel 不支持负数，从头开始截取3个
console.log(str.substring(5,2));  //lco  支持索引交换的能力123456
```

### 10、str.slice(startIndex,endIndex)

提取字符串的某个部分，并返回提取到的新字符串

> 说明：
> startIndex：下标从0开始的str指定部分起始索引。如果startIndex为负，将它作为length+startIndex处理，此处length为字符串的长度。
> endIndex：下标从0开始的str指定部分结束索引。如果endIndex为负，将它作为length+endIndex处理，此处length为字符串的长度。

```javascript
var str = "welcome";
console.log(str.slice(2,4)); //lc [2,4)
console.log(str.slice(2)); //lcome
console.log(str.slice(5,2)); // 空不具有索引交换的能力
console.log(str.slice(-3)); // ome 支持负数，表示从后面开始截取几位 
console.log(str.slice(-2,-1)); //m 7-2 7-1 从5到6 即为str.slice(5,6)
console.log(str.slice(-2,3)); //空 相当于(7-2)到3，即5到3，不支持交换，为空
console.log(str.slice(-5,4)); //lc12345678
```

### 11、str.split(separator[,limit])

将字符串转换为字符串数组

> 说明：
> separator字符串或 正则表达式 对象，它标识了分隔字符串时使用的是一个还是多个字符。如果忽略该选项，返回包含整个字符串的单一元素数组。
> limit该值用来限制返回数组中的元素个数。

```javascript
var str = "tom:alice:lucy:lili:jack";
console.log(str.split(":")); //["tom", "alice", "lucy", "lili", "jack"]以分号分割
console.log(str.split(":",2)); // 以:分割，分割后返回数量为2 ["tom", "alice"]
console.log(str.split("")); // 将“”里面的字符全部分割出来 ["t", "o", "m", ":", "a", "l", "i", "c", "e", ":", "l", "u", "c", "y", ":", "l", "i", "l", "i", ":", "j", "a", "c", "k"]1234
```

### 12、str.search(reExp)

返回与正则表达式查找内容匹配的第一个字符串的索引位置

> 说明： reExp包含正则表达式模式和可用标志的正则表达式对象。 查找不到即返回-1

```javascript
var str = "welcome";
console.log(str.search("co")); //3
console.log(str.search(/co/i)); //3
console.log(str.search(/aa/i)); //-11234
```

### 13、concat(str1[,str2]

连接字符串与字符串

```javascript
var str1 = "ABCD";
console.log(str1.concat("abcd","mnqp");12
```

### 14、str.match(reExp)

返回与正则表达式查找内容匹配的第一个字符串,返回第一个匹配结果(有全局标志g)或存放所有匹配结果的数组(无全局标志g)

> 说明： reExp包含正则表达式模式和可用标志的正则表达式对象。 查找不到即返回null

```javascript
var str = "welcome";
console.log(str.match(/\d{2}/g)); //null 无数字，即为null
console.log(str.match(/we/));//["we", index: 0, input: "welcome"]，没有g，存放所有信息，index 属性声明的是匹配文本的起始字符在 stringObject 中的位置，input 属性声明的是对 stringObject 的引用。
console.log(str.match(/we/g)); //["we"],全局匹配返回的数组元素中存放的是 stringObject 中所有的匹配子串，而且也没有 index 属性或 input 属性。1234
```

### 15、str.replace(reExp,”str1”)

检索与正则表达式相匹配的子字符串，然后用第二个参数来替换这些子串

> 说明： 全局标志g有效,加上g之后，所有的都会被匹配

```javascript
var str = "welcome22er66";
console.log(str.replace(/we/,"pp")); //pplcome22er66
console.log(str.replace(/\d{2}/,"pp")); //welcomepper66,未加g,值匹配一次
console.log(str.replace(/\d{2}/g,"pp")); //welcomepperpp，加g,匹配所有
```