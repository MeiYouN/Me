export default {
  // page1部分
  page1: {
    titleEn: 'Hello,I`m Born Zhang', //英文标题
    title: '一个追梦在AI开发路上的小白', //中文标题
  },
  // page2部分
  page2: {
    authorImg: 'zbw.jpg', // 作者头像
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
      date: '2021/9——2022/9', // 时间
      desc: { // 经历
        title: '温州大学 计算机学院',
        list: ['2023年校/国家级大创优秀项目', '浙江省青年人才项目', '国家励志奖学金']
      }
    }, {
      date: '2019/9——2020/9',
      desc: {
        title: '温州大学 化材学院',
        list: ['三好学生', '浙江省物理竞赛3等奖', '校级二等奖学金两个','普通话二级乙等','学生思想政治风采大赛二等奖']
      }
    }, {
      date: '2018/9——2019/9',
      desc: {
        title: '上海星巴克咖啡经营有限公司',
        list: ['值班主管',]
      }
    }],
    // 我的拓展技能掌握
    singlelist: [{
      title: 'Python',
      text: '精通'
    }, {
      title: 'C/C++',
      text: '精通'
    }, {
      title: '深度学习',
      text: '掌握'
    }, {
      title: '嵌入式',
      text: '掌握'
    }],
    // 我的基本技能掌握
    proresslist: [{
      title: 'Python',
      value: '90%'
    }, {
      title: 'C/C++',
      value: '90%'
    }, {
      title: 'Java',
      value: '70%'
    }, {
      title: 'sql',
      value: '70%'
    },{
      title: 'sql',
      value: '70%'
    }
  ]
  },
  // page5部分
  page5: [{
    title: '大语言学术润色',
    content: '调用大预言模型，做你想做的事情。写代码，翻译论文，提炼摘要等。',
    image: 'box1.png',
    href: 'http://121.41.97.246:2024/'
  }, {
    title: 'ncm转flag格式',
    content: '利用ncmdump将网易云音乐的下载格式转为无损音质格式',
    image: 'box3.jpg',
    href: 'http://121.41.97.246:1111/'
  }, {
    title: '双目动作捕捉系统',
    content: '基于双目视觉摄像头的三维姿态估计系统',
    image: 'box5.jpg',
    href: 'https://github.com/MeiYouN/BinocularPose.git'
  }, {
    title: '多摄像头管理工具',
    content: '基于OpenCV的多摄像头管理工具，便于在项目中便捷的调用多个摄像头',
    image: 'box2.png',
    href: 'https://github.com/MeiYouN/MultiCamera.git'
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
    github: 'https://github.com/MeiYouN',
    bili: '',
    email: 'Mailto:2719141980@qq.com?Subject=邮箱标题&Body=邮箱内容！',
    zhihu: '',
    weixin: "<img style='width:120px' src='' alt='加载失败'>",
    qq: "<img style='width:120px' src='' alt='加载失败'>"
  }
}
