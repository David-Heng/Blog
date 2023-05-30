---
sidebar: auto
---

## 添加markdown文档操作说明!

### 1.目录结构

操作遵循Vuepres的“约定优于配置”原则，即目录结构应如下：

```vuepress
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

- `docs/.vuepress`: 用于存放全局的配置、组件、静态资源等。
- `docs/.vuepress/components`: 该目录中的 Vue 组件将会被自动注册为全局组件。
- `docs/.vuepress/theme`: 用于存放本地主题。
- `docs/.vuepress/styles`: 用于存放样式相关的文件。
- `docs/.vuepress/styles/index.styl`: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
- `docs/.vuepress/styles/palette.styl`: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
- `docs/.vuepress/public`: 静态资源目录。
- `docs/.vuepress/templates`: 存储 HTML 模板文件。
- `docs/.vuepress/templates/dev.html`: 用于开发环境的 HTML 模板文件。
- `docs/.vuepress/templates/ssr.html`: 构建时基于 Vue SSR 的 HTML 模板文件。
- `docs/.vuepress/config.js`: 配置文件的入口文件，也可以是 `YML` 或 `toml`。
- `docs/.vuepress/enhanceApp.js`: 客户端应用的增强

### 2.添加导航栏目录

导航栏的所有配置在config.js中完成

#### 1.添加导航栏链接

在需要添加新的导航栏时，可以通过themeConfig.nav 增加一些导航栏链接：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}
```

text为标题，link中为markdown文档所在路径或要打开指定网页的网址。

对于目录结构，默认页面路由地址如下：

| 文件的相对路径     | 页面路由地址   |
| ------------------ | -------------- |
| `/README.md`       | `/`            |
| `/guide/README.md` | `/guide/`      |
| `/config.md`       | `/config.html` |

导航栏中的markdown文件全部存在docs文件夹下，和README同一级。

添加新的导航栏链接和所对应的markdown文件时，添加新的记录在nav：[text：‘导航栏名称’，link：‘markdown文件路径’]。

#### 2.新增Markdown文档

当不需要添加新的导航栏链接，仅在现有主题导航栏下添加新的markdown文件时，在config.js中完成配置：

```js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        items: [
          { text: 'Java', link: '/file/Java' },
          { text: 'JavaScript', link: '/file/JavaScript' }
        ]
      }
    ]
  }
}
```

添加新的markdown文件时，只需在选定主题中的items中增添新的{ text: '文档名称', link: '/文档路径/' }即可。（默认把文档统一放在file文件夹里）