export default {
  // page1部分
  page1: {
    titleEn: 'Hello,I`m Born Zhang', //英文标题
    title: '一个追梦在AI开发路上的小白', //中文标题
  },
  // page2部分
  page2: {
    authorImg: 'page1.jpg', // 作者头像
    xinhui: '我叫张博文，是一名在读的大四学生。', // 幸会
    qiuzhi: '软件/硬件 开发', // 求职意向
    guanyuwo: ' 精通 Python，C/C++，善于在工作中提出问题、发现问题、解决问题， 有较强的 分析能力；有多项省校级竞赛项目实战的经验和机器视觉和深度学习开发经历。有一年社会工作经历。希望可以和大家一起学习，共同进步！' // 关于我
  },
  // page3部分
  page3: [{
    icon: 'icon-tubiao-',
    title: '硬件设计',
    msg: ['PCB设计，硬件电路开发']
  },{
    icon: 'icon-diannao', // 图标
    title: '嵌入式开发', // 标题
    msg: ['C/C++', 'Arduino','物联网',] //介绍
  }, {
    icon: 'icon-qianbi1',
    title: '动作捕捉',
    msg: ['基于pytroch框架设计神经网络', '基于双目摄像头进行机器视觉处理']
  },  {
    icon: 'icon-shouji',
    title: 'LLM大语言模型',
    msg: ['OpenAI','通义千问、Ollama调教与部署，自给自足，想要啥就练啥',]
  }],
  // page4部分
  page4: {
    // 我的历程
    course: [{
      date: '2020/9——至今', // 时间
      desc: { // 经历
        title: '山西传媒学院',
        list: ['山西省职业技能大赛web前端开发一等奖', '专升本上岸', '软件开发公司实习']
      }
    }, {
      date: '2019/9——2020/9',
      desc: {
        title: '晋城职业技术学院',
        list: ['学习前端语言', '构建页面 / 利用JS、CSS3等制作网站，vue有关项目', '维护508工作室','获得Web前段开发1+X证书','普通话二级甲等','国家励志奖学金']
      }
    }, {
      date: '2018/9——2019/9',
      desc: {
        title: '晋城职业技术学院',
        list: ['学习java语言', '利用Android、sql等制作app', '参加山西省职业院校移动互联技能大赛', '全国计算机等级二级证书', '国家励志奖学金']
      }
    }],
    // 我的拓展技能掌握
    singlelist: [{
      title: 'bootsrap',
      text: '了解'
    }, {
      title: 'Element-ui',
      text: '掌握'
    }, {
      title: 'mint-ui',
      text: '掌握'
    }, {
      title: 'scss',
      text: '掌握'
    }],
    // 我的基本技能掌握
    proresslist: [{
      title: 'HTML、CSS、SCSS',
      value: '90%'
    }, {
      title: 'JS、JQ',
      value: '90%'
    }, {
      title: 'Vue',
      value: '90%'
    }, {
      title: 'NodeJs',
      value: '80%'
    }, {
      title: 'sql',
      value: '80%'
    }]
  },
  // page5部分
  page5: [{
    title: '508工作室',
    content: '晋城职业技术学院508工作室独立站点的维护',
    image: 'box1.png',
    href: 'https://lab508.gitee.io/'
  }, {
    title: '图书管理系统',
    content: 'Vue,NodeJs图书管理系统前后端',
    image: 'box3.jpg',
    href: 'https://gitee.com/wttAndroid/book_admin'
  }, {
    title: '校园约吧',
    content: 'Vue,NodeJs移动端校园项目前后端',
    image: 'box5.jpg',
    href: 'https://gitee.com/wttAndroid/xyy_server'
  }, {
    title: '蘑菇街',
    content: 'Vue蘑菇街商城案例前端',
    image: 'box2.png',
    href: 'https://github.com/wttAndroid/MyShoppingStreet'
  }, {
    title: '个人简历',
    content: 'html,css,jq,bootsrap搭建个人简历网站',
    image: 'box4.png',
    href: ''
  }, {
    title: '二维码生成器',
    content: 'Android二维码生成器',
    image: 'box6.jpeg',
    href: ''
  }],
  // page6部分
  page6: {
    github: 'https://github.com/wttAndroid',
    bili: '',
    email: 'Mailto:1457321681@qq.com?Subject=邮箱标题&Body=邮箱内容！',
    zhihu: '',
    weixin: "<img style='width:120px' src='http://wttandroid.gitee.io/wttandroid.github.io/src/img/weix.jpg' alt='加载失败'>",
    qq: "<img style='width:120px' src='http://wttandroid.gitee.io/wttandroid.github.io/src/img/qq.jpg' alt='加载失败'>"
  }
}
