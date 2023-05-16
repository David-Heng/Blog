// notes/docs/.vuepress/config.js
module.exports = {
    base:"/Blog/",
    title:'慧图资环科技',
    description:'软件开发部',
    head:[
      ['link',{rel:'icon',href:'/favicon.ico'}],
      ['meta',{name:'author',content:'DH'}],
      ['meta',{name:'keywords',content:'慧图软件开发技术栈介绍与说明'}],
    ],
    themeConfig: {
        logo: '/img/huitulogo.png',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Technology stack', 
            items: [
               {text:'使用说明', link: '/about'},
               {text:'Java', link: '/Java'},
               {text:'JavaScript', link: '/JavaScript'}
              ]
          },
          { text: 'External', link: 'https://www.huitukj.com/' },
        ],
        sidebar: 'auto',
        sidebar: [
          {
            title: '侧边栏',   // 必要的
            path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              '/css/c-aaa',
              '/css/c-bbb',
              '/css/c-ccc',
            ]
          },
        ]
          }
      }
    
  
