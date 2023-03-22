/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","92b8a7622efebc287a8ebdd803cb2177"],["/2021/02/22/博客的搭建/index.html","4d3293016aa967fcf5d9a7c901e0cfac"],["/2021/02/23/如何使用markdown/index.html","b6523f437f6188d74cd807e118570f69"],["/2021/02/24/mysql命令大全/index.html","71f8a7c0200648fe6e1092031ae68c03"],["/2021/02/24/mysql数据类型/index.html","7109329611c0f3cfb0dc982f88be0828"],["/2021/02/25/Git的介绍与简单使用/index.html","ed6e82de284a00f30bc91898b6dd0475"],["/2021/02/27/简单工厂模式/index.html","b60f124ae550448f6f90bb8fd350eec2"],["/2021/03/01/工厂方法模式/index.html","cfa049fa734d0fbb4c82dd89bac489f6"],["/2021/03/02/抽象工厂模式/index.html","0c329f93546e554b2391dd2a8967b011"],["/2021/03/03/单例模式/index.html","a1074eefaa90b1cf3af87d8cb90a67d2"],["/2021/03/04/观察者模式/index.html","d4bfe9f6c9d2eb17b9f1b5461464075a"],["/2021/03/05/适配器模式/index.html","0ae7e5a20b72e9b75fc815142c7bf1f4"],["/2021/03/06/模板方法模式/index.html","5dae74ad07b69e91c71a0f5265a31220"],["/2021/03/07/责任链模式/index.html","8cef9ec0fe70754a1de4f0a48ab60899"],["/2021/03/09/代理模式/index.html","6d7fef6a112240c04009a783a4e589e3"],["/2021/03/11/享元模式/index.html","75f02fe0e5ae627c1357752f811bf2aa"],["/2021/03/12/外观模式/index.html","b55d5110ebd938bff9c6108dde11536b"],["/2021/03/13/策略模式/index.html","fa92238158832eae91734346707eec80"],["/2021/03/14/桥接/index.html","7a1995143a784b184125c6cf92ffd7d6"],["/2021/03/15/LeetCode-多数元素/index.html","f688db9e9b63fdb57075959a9d24c5e0"],["/2021/03/16/LeetCode之汉明距离/index.html","b613aac7ebb68f757def89a34fa28d89"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","5a76aa432db9758ba19ffd16481ea5fd"],["/2021/03/18/LeetCode之两数之和/index.html","b7dc17d398c84c2f6dbac3072c62d072"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","7f122128d0a1b155d1870396b5b5c618"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","41e97d3fc6982dbe4cc96c4300e176fb"],["/2021/03/21/LeetCode之有效的括号/index.html","396427508bddb2dbc1cc653a6155c20e"],["/2021/03/22/LeetCode之移动零/index.html","9ef9ad1e4944b225555f56627efa5875"],["/2021/03/23/LeetCode之爬楼梯/index.html","26736ab2cf5c73d917df53b80050dd1f"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","5dbef68125885bf1e7abbd8760b2beaa"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","59626ea6ef75d0b3112cea70b5c8989e"],["/2021/03/26/LeetCode之最大子序和/index.html","aaabe311faa8a96680658ec2b6d6e985"],["/2021/03/27/LeetCode之子集/index.html","210469e596cc84cf4c4b86e0c11f64b0"],["/2021/03/28/LeetCode之合并二叉树/index.html","3ba848e96711b89060de1238a7f3f1fc"],["/2021/03/29/LeetCode之翻转二叉树/index.html","64d1a89c56ead6fe6fd9e676e3440cd6"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","4f7ae4f78c264aa95e50a625c48f2dd6"],["/2021/03/31/LeetCode之翻转链表/index.html","48daec9288ee335d568f80696bf875d2"],["/2021/04/01/LeetCode之相交链表/index.html","a169c6e86e89fd10f6bd40d00f6f9a2e"],["/2021/04/02/LeetCode之最小栈/index.html","0fc82e523a3945b905302f949a4af160"],["/2021/04/03/LeetCode之对称二叉树/index.html","8d536194e45e945456baca6c561ea12c"],["/2021/04/04/LeetCode之环形链表/index.html","ba1cbba76d775a88cbcebbd7caffc11e"],["/2021/04/05/LeetCode之二叉树的直径/index.html","f299e10b8286cec614a49f99dc73605d"],["/2021/04/06/LeetCode之回文链表/index.html","89e23d1ba6d90e55960b0bc54cb60d51"],["/2021/04/07/LeetCode之比特位计数/index.html","a7b3d49513d497e9448fd7be59e7005b"],["/2021/04/08/LeetCode之全排列/index.html","46356d554a0092445b091a636843b77b"],["/2021/04/09/LeetCode之括号的生成/index.html","4b556f0ba7e5c2b55dc096d1281b92eb"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","067b74247b17436e04764cd8b239e7a6"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","a5ead1ae5ea02205aaffbb58ead06c35"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","0d2042e7bbcd609a489769412b21b667"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","88f47979cea1bf6e5a0925167d1886db"],["/2021/04/14/Mybatis/index.html","5f7266308348d5bba23d3f4bf5dbde23"],["/2021/04/15/Spring-1/index.html","29ce754c9553339356494cd32d4422f8"],["/2021/04/25/Spring-2/index.html","80069565a8d51eb754ecd889f7a5bfcf"],["/2021/04/27/SpringMVC-1/index.html","b049c2aa1e08b693679f56cdf488bb93"],["/2021/04/29/SpringMVC-2/index.html","5335903cdeb5c752b90fb3bec4f33625"],["/2021/05/03/冒泡排序/index.html","30efe84108908062da83a34e0c87c585"],["/2021/05/08/选择排序/index.html","29c521308955c638297e1227f8759110"],["/2021/05/12/插入排序/index.html","05ccf86e598ae7b23078e7c3117f3a8f"],["/2021/05/15/快速排序/index.html","265ed334fb06fcff22763a484eb9abf5"],["/2021/05/19/基数排序/index.html","7a8e0721912d14d0de663e0ec5b0ec13"],["/2021/05/20/哈希排序/index.html","c66fb3cf8d7e907b431f386bd69b869e"],["/2021/05/21/归并排序/index.html","9a06332fa53077e28dd8ba4893bbe3a5"],["/2021/05/22/二分查找/index.html","c15ce97d5cf1db60fa81566f6c76ebd9"],["/2021/05/26/差值查找/index.html","e1746e428b4a5f85a702c101cbfffbed"],["/2022/01/12/高精度大整数计算/index.html","d206027c7f5ad60d348cfb0b0551ece5"],["/2022/01/22/前缀和/index.html","9a85e2e8b2802475879248fbbcec55d3"],["/2022/01/23/差分/index.html","1dd9ffe09ccc88fc7bc74fb757baa247"],["/2022/04/04/MyBatisPlus/index.html","fca6a611dfb4fd7f5e75933b4e587676"],["/2022/08/17/jQuery/index.html","45763c0d44ab363897889f0bcc46265b"],["/2022/08/19/JavaScript/index.html","f4a2a78cd392bbcb89670e67f4a3fab2"],["/2022/08/22/Ajax/index.html","be8b591e02d0af379c4f6958bb037274"],["/2022/08/23/Promise/index.html","e049b5baf1b89b15b25cf72789f36982"],["/2022/08/24/Axios/index.html","e4b1e9fa52fd2cbcf10b84e21a2ee813"],["/2022/08/25/H5本地存储/index.html","3782bc420edebe567885c8ba6f1cbe01"],["/2022/08/26/mock/index.html","529e736ee0f1d2c04887c907425c95bd"],["/2022/08/31/VueJs/index.html","89962bce418c289389c531ab22bf3f5c"],["/2022/09/01/vue组件化/index.html","8500aad26e56a5a03381f23a3a2a9e85"],["/2022/09/04/VueCLI/index.html","4c876d57dfc667b2254e4baee2cfb8a5"],["/2022/09/07/vue实现动画/index.html","f560254d9422c758d5de1bb5f54afb0e"],["/2022/09/09/Vue响应式方法/index.html","fbf418af4f1b305199c0a49f68c5450c"],["/2022/09/10/Vue异步请求/index.html","b11be7070db790e56ce25a5e6518f9ec"],["/2022/09/11/vue-Router/index.html","d32e04979a3bf9c3ae4331a76bcbd435"],["/2022/09/13/Vuex/index.html","b0e9828a1073963fe3da84509e9d677d"],["/2022/09/15/SpringBoot/index.html","51dfea0594731373c8c557940e380e70"],["/2022/09/16/SpringBoot配置FastJson/index.html","9ee2e6c464210c5f27a8e9f07ff2cd01"],["/2022/09/19/SpringBoot参数校验/index.html","e48a04b1f899bcb166ec4200dbb46b22"],["/2022/09/20/SpringBoot的异常处理/index.html","f94f3f6ca2b692e2935d9c15da5b3932"],["/2022/09/21/SpringBoot统一响应处理/index.html","e64b0beb6bbbf12c80e5e17ad610f40e"],["/2022/09/28/Linux/index.html","578c00078fe221108ef0dbd94d1287e1"],["/2022/10/02/redis基础/index.html","df443e2a84ba5d12699333717c7fb891"],["/2022/10/03/Redis缓存/index.html","80a4ac3d735972cef2fa768900edde01"],["/2022/10/04/redis缓存穿透/index.html","986c541b6aa548d1002b3facfacd55ec"],["/2022/10/13/Redis缓存击穿/index.html","c4ea011ce8a8a4f7b27ea693a9aedf23"],["/2022/10/14/Redis缓存雪崩/index.html","b03ecb78459697ea7f00a3959ef64a31"],["/2022/10/17/Redis集群/index.html","16a98dbfbdefd6615e59c503031a7a4b"],["/2022/10/18/Redis哨兵模式/index.html","4b47e465a0f96aee422545114e1fdee9"],["/2022/10/19/Redis主从复制/index.html","70e0b0f7db7b3a64d47cd36d06cd9cdd"],["/2022/11/03/Spring-Security/index.html","0df40438f97476077ba611c893285cc4"],["/2022/11/08/SpringBoot日志/index.html","dfd631b178cad881153b70dc0a323094"],["/2022/11/11/Swagger2/index.html","6a3e5e119c3be07b16b1502b7ea1fdc7"],["/2022/11/21/Nginx-一/index.html","9710bd650c2dad2cd9b282d89cd02892"],["/2022/11/23/Nginx-二-代理服务/index.html","c9faf7cae4a9f42537d979abf1ff10ff"],["/2022/11/24/nginx-三-负载均衡/index.html","2f86a3486a6ffaddcbb1c4d114aeeb1f"],["/2022/11/26/nginx-四-缓存集成/index.html","62adfa08406058425fec2ad1f1730c0e"],["/2022/11/28/nginx-五-动静分离/index.html","73d52b1d4f0302463ecc2a35a480b51c"],["/2022/11/29/nginx-六-制作下载站点/index.html","f410fda413957b0b9525356a849d5556"],["/2022/12/06/docker基础/index.html","d64429031ba639f466e302b065b41af8"],["/2022/12/09/Docker高级/index.html","080968a8783f0f972087f4f3219b98d8"],["/2023/01/04/MongoDB/index.html","73820b54315a5df0473682e4150162ae"],["/2023/02/05/消息队列/index.html","6a44d4febe51594746754828eee49837"],["/2023/02/12/RabbitMQ集群/index.html","59e67adb1763d75d9733901ce999b801"],["/2023/03/10/CICD/index.html","ddcb05ba35ba073c1cf306568fba5918"],["/2023/03/11/ElasticSearch/index.html","9b8319089407e34dfb1aa7473e1af443"],["/2023/03/12/ELK日志平台搭建/index.html","7ab2eb662d274ac57ec523c8191b51fe"],["/2023/03/13/NIO/index.html","83b585b0d167f7dd8a7cc3b602731934"],["/2023/03/14/Netty/index.html","ac2061c507c92e79df7f7df65080b9e3"],["/2023/03/15/SpringCloud/index.html","8e7e0e62fe65ee856de0cc1359b930fc"],["/2023/03/17/分布式系统认证/index.html","9df523581caca3bfefea8a1709993d7c"],["/2023/03/19/JVM概述/index.html","be910dcb086ae49fe8a90bc989525bf9"],["/404.html","76b7fa71d1c7802ec2f253353962e6af"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","b33f2cd3ece71e37185f5aeed0d43037"],["/archives/2021/02/index.html","f2ed0e341240d1fb75641ded786ae009"],["/archives/2021/03/index.html","e68c4bf4282561bf834118a8f1d7a631"],["/archives/2021/03/page/2/index.html","8d0e6a61a8a84aff87723617648c489b"],["/archives/2021/03/page/3/index.html","fdffbfaa09725bd0065e6697d9f2f14a"],["/archives/2021/04/index.html","3b6ca31a09e161fd1a256d11742b7b5f"],["/archives/2021/04/page/2/index.html","bbc020762a473ff5070cd24737a0e7bd"],["/archives/2021/05/index.html","cd7720781ae769434ee5a5f89c881f52"],["/archives/2021/index.html","3f1903d54ec019c53466d039362f7f8a"],["/archives/2021/page/2/index.html","04058c203115eccd9653e8e80b931faa"],["/archives/2021/page/3/index.html","7b6864f4871f795e57ffb0051b18bc79"],["/archives/2021/page/4/index.html","f8af43dd95dc39bed2c770e4bed39508"],["/archives/2021/page/5/index.html","0fa08aa6e2aa15303fb1d463c91370fa"],["/archives/2021/page/6/index.html","50d3a68e6d996de1f95cda5f82fdc3f8"],["/archives/2021/page/7/index.html","8a51b72bdef6ba7c67e175a53589af6c"],["/archives/2022/01/index.html","a0334dcca75a8fba7777566e5662c445"],["/archives/2022/04/index.html","a61c54f3617b5c6caa42e481b719ff8b"],["/archives/2022/08/index.html","e3e7dcf252dcd31443dd8486da8738d5"],["/archives/2022/09/index.html","4d7cc574b3f644417124ccfc2a26af3c"],["/archives/2022/09/page/2/index.html","1c6276ec112b4041120f2d6aa8f53f6f"],["/archives/2022/10/index.html","1c0e85bde7d3972142c2b9bb551d04ac"],["/archives/2022/11/index.html","bb26e3bb5abe77b108b243dae283862a"],["/archives/2022/12/index.html","b87d6fd3bd38e3ea232c2b724c7f50b9"],["/archives/2022/index.html","c557e52934c520834af942d6ef09a3e1"],["/archives/2022/page/2/index.html","e51665c9e477a303d43e859ea90e5503"],["/archives/2022/page/3/index.html","fe7f3d75c64fecd12109bf082d9469a1"],["/archives/2022/page/4/index.html","c39988b772edccca25854c17ca64d9a4"],["/archives/2022/page/5/index.html","f337f04da49ec812679f0e3b2617459f"],["/archives/2023/01/index.html","63023b67851702b397b8924342255102"],["/archives/2023/02/index.html","6eb3f781dc89106cd7cfe4a44a75434a"],["/archives/2023/03/index.html","99df1cab6a3d4faf8089cbc5c28ddd14"],["/archives/2023/index.html","11f0d99953b8f8f82c5afe42558da3d4"],["/archives/2023/page/2/index.html","cf9927dc86de3852292b8f4bfa1ad07d"],["/archives/index.html","cb614266ba93bd061d69af4edaa287a0"],["/archives/page/10/index.html","09de4f8e14184ca35eb72f5b355347b4"],["/archives/page/11/index.html","44edb717eef95ea012eb81807f4bfba6"],["/archives/page/12/index.html","b32f867c4d73bd6be2e1edd6522f89fd"],["/archives/page/2/index.html","095bcdb07aeb0b973de798bad5ae9ecb"],["/archives/page/3/index.html","7ebc0fa8d480234c3c4a13fede7455f7"],["/archives/page/4/index.html","4773f298fd77ba8e10b669c0c8a4590f"],["/archives/page/5/index.html","95377b820b1f26994512daa353068e93"],["/archives/page/6/index.html","ef93e8b17f947da9d89eaaf4c9eb80ee"],["/archives/page/7/index.html","57455ca7bda0bda3b7424f693d59f8be"],["/archives/page/8/index.html","c2a95eebe437983c4bbc75224a655b48"],["/archives/page/9/index.html","e593198af4fe77e089a8ef2d9e5e5e56"],["/categories/CICD/index.html","de1649fe3ad08a6eb64c05faba67b177"],["/categories/Docker/index.html","7fc83e4a36842f84b638a0cb17fabce2"],["/categories/ELK/index.html","098d86de0f12f6e47e5ab7b2f29ecb09"],["/categories/ElasticSearch/index.html","18bc9984aa38d087291c4f3d8b2b9907"],["/categories/JVM/index.html","5ec991f7ab049be3c69f7d0db657b96b"],["/categories/LeetCode/index.html","688983562bb841cafe3cc33edd73e539"],["/categories/LeetCode/page/2/index.html","8679148b346f313947578adea11cee25"],["/categories/LeetCode/page/3/index.html","0a57ed6689e2759e1ca74aa48558ac6d"],["/categories/Linux/index.html","516569a8f99895ff1dc8ed564584c616"],["/categories/NIO/index.html","b0fec436d257c7fa348c22ff714023e6"],["/categories/Netty/index.html","214cb91cdfd369ef6b8d9719fb3e7ee8"],["/categories/Nginx/index.html","ebb154a710f09254890448018d68fa9e"],["/categories/Redis/index.html","5978dfa59b329c17672d12f30d745ea2"],["/categories/SSM/index.html","f4fca237be1ab88c35e29a7dce36703a"],["/categories/Spring-Security/index.html","8068053b9bfbd811ac0f9b1e8815b811"],["/categories/SpringCloud/index.html","4fc8f8d694355a01a68d3d11cf63b2e8"],["/categories/Spring框架/index.html","1609f7484ca7abe2325b54be28d92b8e"],["/categories/Spring框架/日志/index.html","4059a955fa468cbbb6daa3501e25b7a9"],["/categories/Swagger/index.html","3840b15871b07dd1d68c0e58d086c349"],["/categories/Vue/index.html","b6661ff0dd15f2f49d7b989852c6cd4c"],["/categories/index.html","33fc5ce760f6bb62ef324cf93dc1ce3d"],["/categories/分布式权限认证/index.html","862241094ee2d91287145a21d50fa709"],["/categories/前端/index.html","7b0d8dc0ec97a0d7578975136f126da4"],["/categories/博客/index.html","7f84b7a4f79753a4873c91c16f69843d"],["/categories/学习路线/index.html","2693cd7864d8648a2d24296074b62754"],["/categories/工具/index.html","4e1e8504435220c91b2d99d8379b0693"],["/categories/数据库/index.html","6268a7986de674ea45a4d401235bd3bb"],["/categories/消息队列/index.html","8fa315262f0485f2260a4b60e374c650"],["/categories/笔记/index.html","96c8e69b11ebc5357f3ad7242e73d271"],["/categories/算法/index.html","9385d9818a9d5b52717b25fd2705eb5b"],["/categories/算法/page/2/index.html","ce4b2839756b1fcb28e017f22958cca6"],["/categories/设计模式/index.html","05c6115cb8cb66314ab829f60c9524ff"],["/categories/设计模式/page/2/index.html","294223bc6eb787da4ee21410bdcb16d7"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","7097e60c2ddbbeb024e18b5e1cfbabbb"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","12785af6021e5610af9c5abc127a7936"],["/messageboard/index.html","125d68159468afb58687ed0d3649ef9a"],["/page/10/index.html","31eee6255be3ebe874972d29e4658abd"],["/page/11/index.html","c90f039511cd2c32584f1084ac8cda43"],["/page/12/index.html","232fb9e25739a6e1b6586690ba7212b2"],["/page/2/index.html","c9a657b14b501d20570389dc058ba7e5"],["/page/3/index.html","7384cd7d1c93cdf889b413e0abc894d2"],["/page/4/index.html","977b4fbca42ce34d54728148eba89efe"],["/page/5/index.html","995d11229ab7cffacbd1f8a43ceafc3b"],["/page/6/index.html","c989bc9f3e8899c030fcb1ff898c4291"],["/page/7/index.html","a1c6530dc910dbbc2ccd36dbe7b6e974"],["/page/8/index.html","863e772be5d5923554abdea2f1bfd7e8"],["/page/9/index.html","11e7364d3c117496173410963953c00c"],["/sw-register.js","4f9a17863006b6df3532672bdb3d4eec"],["/tags/Ajax/index.html","8bf8d590b2955dfde7f7052082b55022"],["/tags/Axios/index.html","6b92b66f2bc88f7ba26cc63c05117078"],["/tags/CICD/index.html","34425d65ac5a067c27b595a5b1a95679"],["/tags/Docker/index.html","f12e543de712311f6e99d825d39971d0"],["/tags/ELK/index.html","b26ad51a603e5fdff0c1fbdfc576f920"],["/tags/ElasticSearch/index.html","14e5a02097e3a2b6a631117482e55fe4"],["/tags/H5/index.html","bd652b4eeb0460d416594817c1db4da9"],["/tags/JVM/index.html","5a1b00f66c2880101f2e9fb8d7013db5"],["/tags/JavaScript/index.html","a4b3dc20d756ffab2d8d4888f7f504d8"],["/tags/Kibana/index.html","c0a5f9209ae531a983eab0f87719fa71"],["/tags/LeetCode/index.html","f2150013eceadb328eb87aa7a4ed9943"],["/tags/LeetCode/page/2/index.html","9d1986514fad424effe95857dbd435d9"],["/tags/LeetCode/page/3/index.html","68aed4e97288fab6c42916fce44b7e73"],["/tags/Linux/index.html","687bb53856edebc29d3ee7ca90f5429f"],["/tags/Logstash/index.html","b62ea105379106966278dbb30e2ce80c"],["/tags/Mock/index.html","1811d6b0b8e10ab8215d8781a5dc1a8b"],["/tags/MongoDB/index.html","877c971bf08978d8df22e923b0af792b"],["/tags/Mybatis/index.html","697542c7e04862072bf029097f5a5827"],["/tags/MybatisPlus/index.html","4c2aa851661671131c0a1713e8263dca"],["/tags/NIO/index.html","75913a5b02443402de74b2e36def17d3"],["/tags/Netty/index.html","a058f4fd3932c19d9d912c8ec90435f4"],["/tags/Nginx/index.html","674b4777a6641efc584d0a3dd6c31155"],["/tags/Promise/index.html","6e30609ab4a87318bd725eb169785753"],["/tags/RabbitMQ/index.html","6ad3b47e5e6ff49ac645a8f3cee9df06"],["/tags/Redis/index.html","1fa19c20de513c8d0c8bc99371108531"],["/tags/SSM/index.html","fe17b4e380d8387b2553c0b9a8125500"],["/tags/Spring-Security/index.html","237414d40a3c85e7e69c2c5ca22768e8"],["/tags/Spring/index.html","93bcca56ee129f780377a58872835411"],["/tags/SpringBoot/index.html","2e6967642a0015b5d213c89e74f54d32"],["/tags/SpringCloud/index.html","f7ac93bce0a79e7fc9499b78a84f7857"],["/tags/SpringMVC/index.html","80aded6daf77175964583f8fcb9ddfde"],["/tags/Swagger/index.html","0aaf7e652c299e664c6132d906e95a90"],["/tags/git/index.html","c1d28ec93665685b2ff1e0a8bc3049b3"],["/tags/hexo/index.html","b5145d4425a59ae6955831b3b071a9d9"],["/tags/index.html","71553f291082ec1dc18e856e6ac0880d"],["/tags/jQuery/index.html","76361fe1d6412e8a54a0b6f71d9ad044"],["/tags/java/index.html","6d1a800a941d4f830e0fe50c3966c538"],["/tags/markdown/index.html","3d89989e593ab28a68c2c023f699a0a6"],["/tags/mysql-数据类型/index.html","41895c9f98429535eee175889190c253"],["/tags/mysql/index.html","97a770b3f4ef102238688139cfd82e3d"],["/tags/noSQL/index.html","6df9a4cc4dbd5b4a8df1f37b3599bb4f"],["/tags/typora/index.html","7f6893ea0b7425ff0afcd4013efa214f"],["/tags/vue/index.html","6bbb54d8f94b5e021a4b93026228abbc"],["/tags/享元模式/index.html","831e518dda0686ab3af966f0c4ee19f2"],["/tags/代理模式/index.html","0e60e14eb1dcf9ad2787689f7790239e"],["/tags/分布式/index.html","d69cd76118319cd8c4c0fc5231667864"],["/tags/分布式系统/index.html","9759ecd6761474b68651263b17488775"],["/tags/前端/index.html","4bc50ba719f28b266587ac9e7c459edc"],["/tags/前端/page/2/index.html","ac1c9b0055322cf22a7bf3e20a33181d"],["/tags/博客/index.html","4add722b10d3a6fcb6353deb2beee315"],["/tags/后端/index.html","a87df9ff27e470d54b2f2f9dd42c2c61"],["/tags/外观模式/index.html","ab0cd704234b6dcb9d64aabf82533187"],["/tags/容器技术/index.html","e15adde2ac9b814c163184f541e83472"],["/tags/工厂方法/index.html","994c9dcc919541d1b733aa97e1f70eac"],["/tags/微服务/index.html","33eedfca250f9d04e55fcb58a94d2d44"],["/tags/抽象工厂/index.html","7416b4e622e0cf1c9378ad51f27ee7d0"],["/tags/持续集成持续部署/index.html","e99d5d22ed0507117c51ecbac86683d7"],["/tags/排序/index.html","54be06accc541e88b9ec08b35d7768a7"],["/tags/搜索引擎/index.html","8d222a4b1efc80a69e4080b21a69a9b9"],["/tags/数据库/index.html","82a3d72a794ab4ce89cba21bf579e87c"],["/tags/日志/index.html","60bbeecbae70965c7ab22b5e22380b3f"],["/tags/服务器/index.html","2bda1e4fa5893dfe8504ea02f519d847"],["/tags/权限认证/index.html","f36022b2f15562c54cfd0a93f0bf65e0"],["/tags/查找/index.html","03ee6c1a9ab26121513e85f272de520a"],["/tags/桥接模式/index.html","d76c6d513b4346aabc81e81fc5a24efe"],["/tags/模板方法模式/index.html","af53f9712b36cc0f1fdfc98e846448ef"],["/tags/消息队列/index.html","0af6a2053612712c7cfafe100a2ad216"],["/tags/版本控制/index.html","84e9ea638c87656ea8a9d0ba9b73cd21"],["/tags/策略模式/index.html","2c894134b3f847ae0f6b2f0b938425f0"],["/tags/简单工厂/index.html","4b7eea0e58caf747ec3fbfabf8e116a5"],["/tags/算法/index.html","d966222952ddb9b7290de16df022e540"],["/tags/算法/page/2/index.html","12d05f732d525d88c9b09fec1f6c69c3"],["/tags/组件化/index.html","ddaa22453118abc1287741ffa8250d81"],["/tags/缓存/index.html","df0f5523528142a415448815e34e2ec4"],["/tags/观察者模式/index.html","eed2a974b7dc673dd14f7a1a65c4fa16"],["/tags/设计模式/index.html","cbd43fafab82151eef33e1605e2a7c56"],["/tags/设计模式/page/2/index.html","2d2791f1dcba3c4f591d6c678b24ae81"],["/tags/责任链模式/index.html","d024e18a5b3a81746f59c9ef58df4292"],["/tags/适配器模式/index.html","876de5551d36f3a6f0aaf4503c8da91a"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
