---
title: 回文数
date: '2023-02-17'
tags:
 - 算法
 - LeetCode
categories:
 - Algorithm
sidebar: auto
---
# 两数之和
给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

例如，121 是回文，而 123 不是。

来源：力扣（LeetCode）<br/>
链接：[https://leetcode.cn/problems/palindrome-number/](https://leetcode.cn/problems/palindrome-number/)

## 反转一半数字
### 算法

首先，我们应该处理一些临界情况。所有负数都不可能是回文，例如：`-123` 不是回文，因为 `-` 不等于 3。所以我们可以对所有负数返回 `false`。除了 `0` 以外，所有个位是 `0` 的数字不可能是回文，因为最高位不等于 `0`。所以我们可以对所有大于 `0` 且个位是 `0` 的数字返回 `false`。

<!-- 现在，让我们来考虑如何反转后半部分的数字。 -->

对于数字 `1221`，如果执行 `1221 % 10`，我们将得到最后一位数字 `1`，要得到倒数第二位数字，我们可以先通过除以 10 把最后一位数字从 1221 中移除，`1221 / 10 = 122`，再求出上一步结果除以 `10` 的余数，`122 % 10 = 2`，就可以得到倒数第二位数字。如果我们把最后一位数字乘以 `10`，再加上倒数第二位数字，`1 * 10 + 2 = 12`，就得到了我们想要的反转后的数字。如果继续这个过程，我们将得到更多位数的反转数字。

现在的问题是，我们如何知道反转数字的位数已经达到原始数字位数的一半？

由于整个过程我们不断将原始数字除以 `10`，然后给反转后的数字乘上 `10`，所以，当原始数字小于或等于反转后的数字时，就意味着我们已经处理了一半位数的数字了。
![图片](/algonithm/reverted.png)
```javascript
var isPalindrome = function(x) {
    // x < 0 不是回文数
    // 如果数字最后一位是零，与其对应的第一位也为0
    if(x < 0 || (x % 10 === 0 && x !== 0)){
        return false
    }
    let revertedNumber = 0
    while(x > revertedNumber){
        revertedNumber = revertedNumber * 10 + x % 10
        x = Math.floor(x / 10)
    }

    return x === revertedNumber || x === Math.floor(revertedNumber / 10)
};
```
>执行结果：<br/>
>执行用时：
128 ms
, 在所有 JavaScript 提交中击败了
94.72%
的用户<br/>
>内存消耗：
48.5 MB
, 在所有 JavaScript 提交中击败了
99.06%
的用户
<br/>
>通过测试用例：
11510 / 11510