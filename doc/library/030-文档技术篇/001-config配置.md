# config.json 配置

[TOC]

## 预备知识
- config 文件使用 **json 格式** 保存当前文库创建和工作必要的配置信息
> 什么是 json ？ 请前往：[百度百科JSON](https://baike.baidu.com/item/JSON) or [维基百科JSON](https://en.wikipedia.org/wiki/JSON)
- config 所有配置项皆为可选
- 配置变更后，您需要重新创建文库才能生效


## 基础配置

### name - 定义文库名称
1. 不设置将显示默认名称 “amWiki轻文库”

```json
{
  "name": "测试文库"
}
```

### ver - 标记文库版本号或维护者名称
1. 如果设置为空字符串则不显示整个小标记  
2. 如果不设置则显示默认内容 “by Tevin”

```json
{
  "ver": "Beta版"
}
```

### logo - 自定义 logo 的 url
1. logo 的建议尺寸为 120×32  
2. 不设置将显示 amWiki 项目的 logo

```json
{
  "logo": "/assets/logo.png"
}
```

### colour - 定义界面着色
1. 支持 `#` 开头的 6 位 16 进制 web 色、RGB 色两种模式
2. 也可以使用单词 default，和不设置显示默认颜色效果等同，默认颜色色值为 `#4296eb`
3. 注意是单词 **`colour`** 不是 `color`

```json
{
  "colour": "default"
}
```

## 功能属性

### testing - 是否启用接口测试模块
1. 类型：布尔值(Boolean)
2. 不设置时使用默认值：false，不开启测试模块
3. 设置为 true 的文库，文档满足一定条件将在右上角出现打开测试面板的按钮

```json
{
  "testing": true
}
```

### github-url - github 项目地址
1. 类型：字符串(String)
2. 此项用于导出 amWiki 文库为某一个 github 项目附属的 wiki  
   (项目 wiki 栏，附属仓库，非 Pages)
3. 不设置时，导出操作将给出未配置的提示
4. 此属性变更不需要重新创建文库

```json
{
  "github-url": "https://github.com/TevinLi/amWiki"
}
```

### imports - 页面嵌入自定义 css、js 文件
1. 类型：数组(Array)，数值项类型：字符串(String)
2. 目前仅支持 .js 和 .css 文件，其他格式将被忽略

```json
{
  "imports": [
    "assets/test.css",
    "assets/test.js"
  ]
}
```

### page-mounts - 是否开启页面挂载数据
1. 类型：布尔(Boolean)
2. 默认值 false 不开启
3. 设置为 true 将开启页面挂载数据模式，即创建为本地浏览式文库  
   (类似 Axure 原型图，双击 index.html 直接打开)

```json
{
  "page-mounts": true
}
```
