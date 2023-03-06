/*
 * @Author: Arthur_Zhang
 * @Date: 2023-02-03 17:53:57
 * @LastEditors: Arthur_Zhang
 * @LastEditTime: 2023-02-03 18:47:51
 * @Description: 
 */
module.exports = {
  "title": "Shark Blog",
  "base":'/blog/',
  "description": "This is a personal blog developed based on VuePress",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/shark.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      // {
      //   "text": "Docs",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "GitHub",
        "icon": "reco-github",
        "link": "https://github.com/kingzhang1228",
      }
    ],
    // "sidebar": {
    //   "/docs/theme-reco/": [
    //     "",
    //     "theme",
    //     "plugin",
    //     "api"
    //   ]
    // },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Blogs"
      },
      "tag": {
        "location": 4,
        "text": "Tag"
      }
    },
    "logo": "",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Shark",
    "authorAvatar": "/avatar.png",
    "record": "-", //ICP 备案文案
    "recordLink":'', //ICP 备案指向链接
    "cyberSecurityRecord":'', //公安部备案文案
    "cyberSecurityLink":'', //公安部备案指向链接
    "startYear": "2023"
  },
  "markdown": {
    "lineNumbers": true
  }
}