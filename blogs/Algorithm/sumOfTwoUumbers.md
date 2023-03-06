---
title: 两数之和
date: '2023-02-03'
tags:
 - 算法
 - LeetCode
categories:
 - Algorithm
sidebar: auto
---
# 两数之和
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。

来源：力扣（LeetCode）<br/>
链接：[https://leetcode.cn/problems/two-sum/](https://leetcode.cn/problems/two-sum/)

## 暴力枚举
```javascript
var twoSum = function(nums, target) {
  const len = nums.length;
  for(let i = 0; i < len - 1; i++){
      for(let j = i + 1; j < len; j++){
          if(nums[i] + nums[j] == target){
              return [i, j]
          }
      }
  }
};
```
>执行结果：<br/>
>执行用时：108 ms , 在所有 JavaScript 提交中击败了32.68%的用户<br/>
>内存消耗：
41.4 MB
, 在所有 JavaScript 提交中击败了
63.27%
的用户<br/>
>通过测试用例：57 / 57

## 哈希表
```javascript
var twoSum = function(nums, target) {
  const tmpobj = {};
  for(let i = 0; i < len; i++){
      if(tmpobj[target - nums[i]] != undefined){
          return [tmpobj[target - nums[i]], i]
      } else {
          tmpobj[nums[i]] = i
      }
  }
};
```
>执行结果：<br/>
>执行用时：
60 ms
, 在所有 JavaScript 提交中击败了
92.48%
的用户<br/>
>内存消耗：
41.7 MB
, 在所有 JavaScript 提交中击败了
48.25%
的用户<br/>
>通过测试用例：57 / 57