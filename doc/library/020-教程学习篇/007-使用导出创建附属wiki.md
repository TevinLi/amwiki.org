# 使用导出创建附属 wiki

“导出文库为 Github Wiki”，可以将一个 amWiki 文库导出为 Github Project Wiki

[TOC]

## Pages 和项目附属 Wiki 的区别

First，强调一个问题！Github Pages 和 Github Project Wiki 是完全不同的两个事物！

### Github Pages：

- 可以拥有 github 的二级域名 (例如 https://tevinli.github.io )
- 可以绑定自己的独立域名，不论是一级域名还是二级域名
- 网站文件和目录结构完全靠自己组织规划
- 所有页面的布局由自己定义，支持 css、js
- 可以使用 Bootstrap、AmazeUI、WeUI 和 Angular、Vue、React 创建富 web 应用

### Github Project Wiki：

- 隶属于每一个项目仓库  
  也就是每一个仓库都携带有自己独立的 wiki，这个 wiki 有自己独立的入口：  
  ![](assets/020/20170720-a74e0439.png=500-)  
- 不能使用自定义页面，不能使用任何 js 和 css
- 所有需要内容显示，只接受 GitHub Markdown 语法和少量 html 标签
- 所有 .md 文件放置于深目录无效，等同于放置在根目录
- 用于功能栏(例如侧边导航)的 .md 文件，命名有一定要求

### 导出功能

1. **amWiki 创建的文库，本身就是为 Github Pages 打造的**  
   无需任何修改可以直接上传到项目 xxx.github.io，并在 Pages 上打开

2. **amWiki 导出功能创建的内容，则是为 Github Project Wiki 准备的**  
   导出功能是以 wiki 要求的规则，重新输出整个文库，不只是平级创建所有文档、左侧导航，还包括修改每篇文档上的图片地址链接地址等等

## 使用导出

### Step 1 配置 config
首先需要准备的，是在 config.json 中配置参数 github-url  
![](assets/020/20170806-645771a5.png=450-)  
虽然现在增加了一些 url 识别，比如只写 `github.com/tevinli/amWiki` 也是正确的，但是仍然提倡填写完整 url

### Step 2 开启 Wiki
然后点击在页面中间的创建按钮  
![](assets/020/20170806-89f54122.png)  
再在打开的页面底部点击 “Save Page”，此时 wiki 已经激活  
_(如果 Wiki 尚未开启，则需要此步骤，开启后则不再有此按钮)_  

### Step 3 克隆 Wiki 到本地
这个 Wiki **其实也是一个小型 git 仓库**，在任意 Wiki 页面右下角，能看到克隆地址  
![](assets/020/20170806-99a3fa8c.png=-170)  
复制这个地址，在本地选择一个文件夹进行 git clone，将这个小仓库克隆下来

### Step 4 导出文库
从菜单选择“导出当前文库为 Github Wiki”  
![](assets/020/20170806-97a75a1a.png=-210)  

并在弹出的选择界面选择 **刚刚克隆仓库的位置**  
![](assets/020/20170806-af303468.png=350-)  
_(如果是新开的 wiki，可以看到此时文件夹下除了 home.md 文件和隐藏的 .git 文件夹，再无其他文件)_  

在选择界面点击“打开”执行导出，然后我们可以看到文件夹下已经创建了许多内容  
![](assets/020/20170806-e72a6d06.png=360-)  

### Step 5 Push 到远程仓库
此时导出已经基本完成，只需要将这个文件夹的内容 Commit，再 Push 到远程仓库，即可在项目 Wiki 页面看到效果了    
![](assets/020/20170806-1ceee30d.png=500-)  
