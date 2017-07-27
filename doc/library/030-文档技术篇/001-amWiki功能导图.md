# amWiki 功能导图

amWiki 整个项目的代码由两部分组成：**工作端**、**Web端**

![amWiki功能导图](assets/mapping-1.0.1.png)  

**说明**：灰色文字代表的功能部分，表示目前版本没有，但是已经列入开发计划

## 工作端
工作端代码核心基于 node 开发，可运行于 Atom 和 Nodejs-Npm 两个平台，基于 ES6 异步编程实现两个平台的体验一致性  
(有热心网友已经提供了 [amWikiForVSCode移植版](https://github.com/YaoXuanZhi/amWikiForVSCode)，使用 Visual Studio Code 的朋友，可以去了解下😀 )

## Web端
Web端代码处于兼容和于便于大众修改的考虑，基本都采用 ES5 实现，同时使用了一些 HTML5 或更高版本的功能 API
