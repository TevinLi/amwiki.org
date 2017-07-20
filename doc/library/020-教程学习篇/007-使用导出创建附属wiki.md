# 使用导出创建附属 wiki

“导出文库为 Github Wiki”，可以将一个 amWiki 文库导出为 Github Project Wiki

## Pages 和项目附属 Wiki 的区别
First，强调一个问题！Github Pages 和 Github Project Wiki 是完全不同的两个事物！

### Github Pages：
- 可以拥有 github 的二级域名 (例如 https://tevinli.github.io )
- 所有页面可以自由创建和组织，可以装扮成任何想要的模样
- 页面支持使用js，会玩的的话，可以使用 Bootstrap 和 Angular、Vue 搭建富 web 应用

### Github Project Wiki：
- 隶属于每一个项目仓库，也就是每一个仓库都自己独立的 wiki，每个 wiki 也都有一个独立的入口，这个入口其实很显眼：
![](assets/020/20170720-a74e0439.png=500-)  
- 不能使用自定义页面，不能使用任何 js 和 css
- 所有需要内容显示，只接受 Markdown 语法和少量 html 标签
- 用于功能栏(例如侧边导航)的 Markdown 文件，命名有一定规则要求

### 导出功能
1. **amWiki 所创建的文库，本身就是为 Github Pages 打造的**，无需任何修改可以直接上传到 xxx.github.io 在 Pages 上打开
2. **amWiki 导出创建的内容，则是为 Github Project Wiki 准备的**！  
   这个 Wiki 其实也是一个小型 git 仓库，在 Wiki 页面的右下角，有 git 地址，clone 下来，修改后 push，就可以更改 Wiki 内容了

## 使用导出
待续...
