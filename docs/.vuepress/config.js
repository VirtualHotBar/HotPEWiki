const { defaultTheme } = require('vuepress')


module.exports = {
  base: "/",
    locales: {
        // 设置网页语言为zh-CN
        '/': {lang: 'zh-CN'}
    },
    // 网站标题
    title: 'HotPE Wiki',
    // 网站描述
    description: 'HotPE Wiki',
    // 注入到网页的<head>中的标签
    head: [
        // 增加一个网页标签的图标
        ['link', {rel: 'icon', href: '/favicon.ico'}],
    ],
    // 设置网页markdown选项
    markdown: {
        // 设置代码块显示行号
        lineNumbers: true
    },
theme: defaultTheme({
    logo: "https://pic.hotpe.top/i/2022/04/30/ozynrf.png",
// 导航栏配置
        navbar: [
            {text: '首页', link: 'https://www.hotpe.top'},
            {text: '下载站', link: 'https://down.hotpe.top'},
            {text: 'Github', link: 'https://www.hotpe.top/CodeWarehouse'}
        ],
        // 侧边栏配置
        sidebar: [
            {
                text: '写在前面',
                link: '/preface',
            },
            {
                text: '总览 ',
                collapsible: true,
                children: ['/overview/log','/overview/about','/overview/thanks','/overview/contract','/overview/donate'],
            },
            {
                text: '常见问题',
                collapsible: true,
                children: ['/matter/what_winpe'],
                
            },
            {
                text: '教程',
                collapsible: true,
                children: ['/course/down','/course/install','/course/intohotpe','/course/loadhpm','/course/edgeless','/course/driver_hpm'],
            },            
            {
                text: '开发者文档',
                collapsible: true,
                children: ['/Devdoc/notice','/Devdoc/api','/Devdoc/dve_env','/Devdoc/makehpm','/Devdoc/hpm_con','/Devdoc/shifthpm'],
            },
            {
                text: '合作洽谈',
                collapsible: true,
                children: ['/cooperation/permit','/cooperation/ZnPE'],
            },            
        ],
  }),

}
