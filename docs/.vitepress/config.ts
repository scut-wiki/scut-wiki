import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '华工手册',
  description:
    '开源的华南理工大学信息聚合项目。An open-source project aggregates the information in South China University of Technology (SCUT).',
  base: '/',
  lang: 'zh-CN',
  cleanUrls: true,
  srcExclude: ['public/**'],
  lastUpdated: true,
  ignoreDeadLinks: [
    /^https?:\/\/mp\.weixin\.qq\.com\//,
    /^https?:\/\/www\.bilibili\.com\//,
    /^https?:\/\/space\.bilibili\.com\//,
    /^\/future\/assets\/.+\.pptx$/,
  ],
  head: [
    ['meta', { name: 'theme-color', content: '#8f1d22' }],
    ['meta', { property: 'og:title', content: '华工手册 / SCUT Wiki' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          '开源的华南理工大学信息聚合项目。An open-source project aggregates the information in South China University of Technology (SCUT).',
      },
    ],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '华工手册',
    search: {
      provider: 'local',
    },
    nav: [],
    sidebar: [
      { text: '首页', link: '/' },
      { text: '通讯录', link: '/contacts/' },
      { text: '生活篇', link: '/life/' },
      {
        text: '学习篇',
        link: '/study/',
        collapsed: true,
        items: [
          {
            text: '学院与专业经验',
            link: '/study/colleges/',
            collapsed: true,
            items: [
              { text: '未来技术学院', link: '/study/colleges/future-technology' },
              { text: '吴贤铭智能工程学院', link: '/study/colleges/wusie' },
              { text: '生物医学工程学院', link: '/study/colleges/bmse' },
              { text: '前沿软物质学院', link: '/study/colleges/sesm' },
              { text: '微电子和集成电路学院', link: '/study/colleges/microelectronics' },
            ],
          },
        ],
      },
      {
        text: '飞跃手册',
        link: '/future/',
        collapsed: true,
        items: [
          {
            text: '保研与直博',
            link: '/future/recommendation/',
            collapsed: true,
            items: [
              {
                text: '华东师范大学-环境设计-19环境设计蒋静含',
                link: '/future/recommendation/hua-dong-shi-fan-da-xue-huan-jing-she-ji-19-huan-jing-she-ji-jiang-jing-han',
              },
              {
                text: '华南理工大学-电子信息-19机器人邓婧雯',
                link: '/future/recommendation/hua-nan-li-gong-da-xue-dian-zi-xin-xi-19-ji-qi-ren-deng-jing-wen',
              },
              {
                text: '华南理工大学-电子信息-19机器人工程余绍蓉',
                link: '/future/recommendation/hua-nan-li-gong-da-xue-dian-zi-xin-xi-19-ji-qi-ren-gong-cheng-yu-shao-rong',
              },
              {
                text: '华南理工大学-数学学院-19级数学类创新班黄亦婷',
                link: '/future/recommendation/hua-nan-li-gong-da-xue-shu-xue-xue-yuan-19-ji-shu-xue-lei-chuang-xin-ban-huang-yi-ting',
              },
              {
                text: '清华大学深研院-人工智能硕士-18自动化伍思朗',
                link: '/future/recommendation/qing-hua-da-xue-shen-yan-yuan-ren-gong-zhi-neng-shuo-shi-18-zi-dong-hua-wu-si-lang',
              },
              {
                text: '清华大学-自动化-19智能制造李金鹏',
                link: '/future/recommendation/qing-hua-da-xue-zi-dong-hua-19-zhi-neng-zhi-zao-li-jin-peng',
              },
            ],
          },
          {
            text: '出国深造',
            link: '/future/abroad/',
            collapsed: true,
            items: [
              {
                text: '2+2爱丁堡大学-电子与电气工程-21微电子邝星洋',
                link: '/future/abroad/2+2-ai-ding-bao-da-xue-dian-zi-yu-dian-qi-gong-cheng-21-wei-dian-zi-kuang-xing-yang',
              },
              {
                text: '2+2爱丁堡大学-电子与电气工程-21微电子李润庭',
                link: '/future/abroad/2+2-ai-ding-bao-da-xue-dian-zi-yu-dian-qi-gong-cheng-21-wei-dian-zi-li-run-ting',
              },
              {
                text: '2+2伯明翰大学-机械电子与机器人工程-21机器人周俊霖',
                link: '/future/abroad/2+2-bo-ming-han-da-xue-ji-xie-dian-zi-yu-ji-qi-ren-gong-cheng-21-ji-qi-ren-zhou-jun-lin',
              },
              {
                text: '2+2鲁汶大学-电子工程-21集成电路杨媚涵',
                link: '/future/abroad/2+2-lu-wen-da-xue-dian-zi-gong-cheng-21-ji-cheng-dian-lu-yang-mei-han',
              },
              {
                text: '2+2鲁汶大学-电子工程-21微电子郑飞扬',
                link: '/future/abroad/2+2-lu-wen-da-xue-dian-zi-gong-cheng-21-wei-dian-zi-zheng-fei-yang',
              },
              {
                text: '代尔夫特理工大学-航空航天工程-21机器人费菁皓',
                link: '/future/abroad/dai-er-fu-te-li-gong-da-xue-hang-kong-hang-tian-gong-cheng-21-ji-qi-ren-fei-jing-hao',
              },
              {
                text: '东京大学-先进材料系-18轻化工程刘梓洋',
                link: '/future/abroad/dong-jing-da-xue-xian-jin-cai-liao-xi-18-qing-hua-gong-cheng-liu-zi-yang',
              },
              {
                text: '东京工业大学-IGP项目-19分子许熙',
                link: '/future/abroad/dong-jing-gong-ye-da-xue-igp-xiang-mu-19-fen-zi-xu-xi',
              },
              {
                text: 'NYU-21级生医廖君如',
                link: '/future/abroad/nyu21-ji-sheng-yi-liao-jun-ru',
              },
              {
                text: 'ucb22-ji-ji-qi-ren-Shuai-Zhou',
                link: '/future/abroad/ucb22-ji-ji-qi-ren-Shuai-Zhou',
              },
              {
                text: 'University of Akron-3+2(AMP)-19分子李锐新',
                link: '/future/abroad/university-of-akron3+2amp19-fen-zi-li-rui-xin',
              },
              {
                text: '香港科技大学（广州）-Mphil-19微电子左一航',
                link: '/future/abroad/xiang-gang-ke-ji-da-xue-guang-zhou-mphil19-wei-dian-zi-zuo-yi-hang',
              },
              {
                text: '香港科技大学（广州）-Red Bird Mphil-19微电子冯雨橦',
                link: '/future/abroad/xiang-gang-ke-ji-da-xue-guang-zhou-red-bird-mphil19-wei-dian-zi-feng-yu-tong',
              },
              {
                text: '新加坡国立大学“3+1+1”本硕项目申请经验——2020级BME吴诗哲',
                link: '/future/abroad/xin-jia-po-guo-li-da-xue-3+1+1-ben-shuo-xiang-mu-shen-qing-jing-yan-2020-ji-bme-wu-shi-zhe',
              },
              {
                text: '约翰霍普金斯大学-生物医学工程硕士（BME）-19生医朱云龙',
                link: '/future/abroad/yue-han-huo-pu-jin-si-da-xue-sheng-wu-yi-xue-gong-cheng-shuo-shi-bme19-sheng-yi-zhu-yun-long',
              },
            ],
          },
          {
            text: '考研',
            link: '/future/postgraduate-exam/',
            collapsed: true,
            items: [
              {
                text: '西安电子科技大学（本部）-电子科学与技术-19微电子黄松桂',
                link: '/future/postgraduate-exam/xi-an-dian-zi-ke-ji-da-xue-ben-bu-dian-zi-ke-xue-yu-ji-shu-19-wei-dian-zi-huang-song-gui',
              },
              {
                text: '中山大学-生物医学工程学院-18级材料学院郑汉梓',
                link: '/future/postgraduate-exam/zhong-shan-da-xue-sheng-wu-yi-xue-gong-cheng-xue-yuan-18-ji-cai-liao-xue-yuan-zheng-han-zi',
              },
            ],
          },
          {
            text: '就业',
            link: '/future/career/',
            collapsed: true,
            items: [{ text: 'Page 4', link: '/future/career/page-4' }],
          },
          {
            text: '体制内',
            link: '/future/public-sector/',
            collapsed: true,
            items: [
              {
                text: '怀平实之心，报桑梓之情',
                link: '/future/public-sector/huai-ping-shi-zhi-xin-bao-sang-zi-zhi-qing',
              },
            ],
          },
        ],
      },
      { text: '立志篇', link: '/goal/' },
      { text: '信息素养', link: '/literacy/' },
      { text: '参与共建', link: '/contributing/' },
      { text: '关于', link: '/about/' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/scut-wiki/scut-wiki' }],
    editLink: {
      pattern: 'https://github.com/scut-wiki/scut-wiki/edit/main/docs/:path',
      text: '一起完善这本手册！',
    },
    lastUpdated: {
      text: '上次更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
      },
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    outline: {
      label: '本页目录',
      level: [2, 3],
    },
  },
});
