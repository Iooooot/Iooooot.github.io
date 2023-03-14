/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java 学习路线/index.html","7e656e0e8c1d4ade6611f15ca69b828e"],["/2021/02/22/博客的搭建/index.html","ad51243ec9eb0a913d2dbc158f1b55ef"],["/2021/02/23/如何使用markdown/index.html","9293fa696a3a85e6e8e2e6367878a16b"],["/2021/02/24/mysql命令大全/index.html","9f8af39e9a3d5d9d47d7c42ef468cd3c"],["/2021/02/24/mysql数据类型/index.html","8d6fadb42d882693d1acb7fe047cc836"],["/2021/02/25/Git的介绍与简单使用/index.html","8ccef983556301a4e9c3b8d80c02137f"],["/2021/02/27/简单工厂模式/index.html","7fbcd4d38661395bd2bcaf5383f8b18e"],["/2021/03/01/工厂方法模式/index.html","6914f1c94fe8656d1a4aeb15dc5f4c8b"],["/2021/03/02/抽象工厂模式/index.html","98e97db5c9f79c5599dd59d4c4a25a38"],["/2021/03/03/单例模式/index.html","d48ca34c5f9e7c03e1375f8bf9e7abf8"],["/2021/03/04/观察者模式/index.html","64df2e6f14864f1c7056f8d83ad82d5d"],["/2021/03/05/适配器模式/index.html","bf90ed49a0e2f04d0885ec1f37539ff7"],["/2021/03/06/模板方法模式/index.html","05c73e662c4830da75896a3537a78016"],["/2021/03/07/责任链模式/index.html","f64abd96e281d3fe20d88d3e3718d55c"],["/2021/03/09/代理模式/index.html","5a9a4362ce2cef494e91a752397899bb"],["/2021/03/11/享元模式/index.html","cb0ccf40a557924656e053c12dbbc96e"],["/2021/03/12/外观模式/index.html","62bc60201a8623b49e746cf16f481ee8"],["/2021/03/13/策略模式/index.html","b598e9ced370a6d2cdea44d4a1f07edc"],["/2021/03/14/桥接/index.html","67ee108b7182cbca9c8d00ba4494a209"],["/2021/03/15/LeetCode-多数元素/index.html","bb86a192d7ac869467c3e321f8ca82d9"],["/2021/03/16/LeetCode之汉明距离/index.html","3c3502304b2314f55dc250d634a34572"],["/2021/03/17/LeetCode之合并两个有序链表/index.html","5ff89ea76bc1de89ea02ab5d28f1bb3b"],["/2021/03/18/LeetCode之两数之和/index.html","ec821a515b06d0a4faf8ed1b98b0b4ad"],["/2021/03/19/LeetCode之买卖股票的最佳时机/index.html","381084a4a14e947627e99692b5912000"],["/2021/03/20/LeetCode之找到所有数组中消失的数字/index.html","2c393bce1729a39c5e824f54ed25520f"],["/2021/03/21/LeetCode之有效的括号/index.html","68609d476f4fcb6439f22a124d66cf50"],["/2021/03/22/LeetCode之移动零/index.html","ce6cd85e7eb9396d320571254e870be4"],["/2021/03/23/LeetCode之爬楼梯/index.html","eb1f20ac1988790e5f51f7455e78a4f2"],["/2021/03/24/LeetCode之只出现一次的数字/index.html","7ea0939f274f93edbe0db87c8657569d"],["/2021/03/25/LeetCode之删除字符串中的所有相邻重复项/index.html","223459845ef929cac3865fde95974e6d"],["/2021/03/26/LeetCode之最大子序和/index.html","7196c749c17b17ffe65c5661964a1a68"],["/2021/03/27/LeetCode之子集/index.html","6a4422ba32cd42cfa47aebfa2b0445af"],["/2021/03/28/LeetCode之合并二叉树/index.html","f59a6d84e3159ae96913a520e8ba3d6c"],["/2021/03/29/LeetCode之翻转二叉树/index.html","85b690da1629bbd01c32a90f02cf40f2"],["/2021/03/30/LeetCode之二叉树的最大深度/index.html","9ca3c60be38ca6ea2646cf3d28f7a2d2"],["/2021/03/31/LeetCode之翻转链表/index.html","9234d84504ddede8fec736d0832b3e91"],["/2021/04/01/LeetCode之相交链表/index.html","4ace5473d77027c9bcb0a33ae8ebc01b"],["/2021/04/02/LeetCode之最小栈/index.html","0b4584b7e04194e3abb3d03581a0ebea"],["/2021/04/03/LeetCode之对称二叉树/index.html","582cbc8ac37c53e2383dee596fa749be"],["/2021/04/04/LeetCode之环形链表/index.html","ec28acc6ffda7dc93efd1fbb9b677b4b"],["/2021/04/05/LeetCode之二叉树的直径/index.html","24a498d1c082b6f78d9840f2b545805e"],["/2021/04/06/LeetCode之回文链表/index.html","8ef1bac5ade0b9339612ee821871bfd3"],["/2021/04/07/LeetCode之比特位计数/index.html","8210a1b4d4877b59e84bb4d6f90556c4"],["/2021/04/08/LeetCode之全排列/index.html","fbf1b6b4656c3d325da7c5ca9823fe63"],["/2021/04/09/LeetCode之括号的生成/index.html","5dcd1e27b7b5c26a63bf94ab479df5c5"],["/2021/04/10/LeetCode之合并两个有序数组/index.html","e0215f7815b836e78c8a73afea0757e6"],["/2021/04/11/LeetCode之删除有序数组中的重复项/index.html","41c02100e906f779d6faa40ba273c084"],["/2021/04/12/LeetCode之二叉树的中序遍历/index.html","afe5d9b70a69d266ab16c70a05502677"],["/2021/04/13/LeetCode之根据身高重建队列/index.html","0e0f1b6ecb4241dc1c404b78e2c4fcf6"],["/2021/04/14/Mybatis/index.html","c3c30f8cd7981fbd9f7ac438747c5ba9"],["/2021/04/15/Spring-1/index.html","afd1dfd9686812dbcc9c458cedfe3bd2"],["/2021/04/25/Spring-2/index.html","845b4bd1b106785cb40581e71a3a4cd9"],["/2021/04/27/SpringMVC-1/index.html","9dea5b682d73b359bb2dcc5484102b14"],["/2021/04/29/SpringMVC-2/index.html","7a9d261a765cb3da0c3fa6a205b35c1c"],["/2021/05/03/冒泡排序/index.html","e515b4ccbeec0b1b021c3080a2a0939b"],["/2021/05/08/选择排序/index.html","901402aa8b71508eaadddc25dd02947d"],["/2021/05/12/插入排序/index.html","c6f851c9b739b6c1739624aacaa6465c"],["/2021/05/15/快速排序/index.html","27b230356c86bfb4f081703ca2bd9568"],["/2021/05/19/基数排序/index.html","a18151efef4eadb3dfdbfc9c8d17d17c"],["/2021/05/20/哈希排序/index.html","e2b4160a4e19caec9ce2ebf00d1457b6"],["/2021/05/21/归并排序/index.html","750071af00f0dac4e418c1cb10fc7622"],["/2021/05/22/二分查找/index.html","17debbd2a68b696ba2882985dc79c12d"],["/2021/05/26/差值查找/index.html","d599136e906e80f94d7a630a4cbe988c"],["/2022/01/12/高精度大整数计算/index.html","069d50ae2123caed161cd3bf04ab8112"],["/2022/01/22/前缀和/index.html","86d359f673fa40e97fa36b44e68b1c1f"],["/2022/01/23/差分/index.html","b27d41f085a316dee0f5ad5e606d633c"],["/2022/04/04/MyBatisPlus/index.html","fa9a0bfc3ae10041b63d721cdbb42fca"],["/2022/08/17/jQuery/index.html","57289c62c666925f747aec33940c473e"],["/2022/08/19/JavaScript/index.html","59817e5b3a19f1644254b403e280565e"],["/2022/08/22/Ajax/index.html","575bd59b997be89bda2da080274cbf86"],["/2022/08/23/Promise/index.html","1451691552bbd1dcf7220e4db3af5257"],["/2022/08/24/Axios/index.html","b909285014de02faa68acfb795c842d5"],["/2022/08/25/H5本地存储/index.html","1380d1126c8efd65423ab504f04187fa"],["/2022/08/26/mock/index.html","4b81fbb3b3b840ac7428bf954d5fb788"],["/2022/08/31/VueJs/index.html","af6efb6e2db06a6a1f798133be2732fe"],["/2022/09/01/vue组件化/index.html","2a82fcc70a51db4751eaa47e48cbcfbd"],["/2022/09/04/VueCLI/index.html","cc1bd9d83ab16bca4d5346c601f6fc41"],["/2022/09/07/vue实现动画/index.html","47873268107812170e8e4782b8af6f56"],["/2022/09/09/Vue响应式方法/index.html","f5cfb29de7cee601055be9647f36715e"],["/2022/09/10/Vue异步请求/index.html","9f93663f539be5613b5a8529c3ceadf4"],["/2022/09/11/vue-Router/index.html","b85a4eba0c9c4641f8329e205377b3de"],["/2022/09/13/Vuex/index.html","eda0433c20ec3ff960f9624df46b4ae0"],["/2022/09/15/SpringBoot/index.html","5b3485639312697dbc5ae186415be07b"],["/2022/09/16/SpringBoot配置FastJson/index.html","ee38c522f82f33cd6a9494e38b57ed7a"],["/2022/09/19/SpringBoot参数校验/index.html","8f8992e9ab9ee5dabe8c6c7f77f405b0"],["/2022/09/20/SpringBoot的异常处理/index.html","674324b7ff318c1d82939f09065518da"],["/2022/09/21/SpringBoot统一响应处理/index.html","e2b6aab9c9f64d71363d796443c1b740"],["/2022/09/28/Linux/index.html","d508526c61d13d58ef6ff190d4e164c3"],["/2022/10/02/redis基础/index.html","8bc9e19188946099642661fcf54816ad"],["/2022/10/03/Redis缓存/index.html","bf91e018072cb7da31422040341cb94f"],["/2022/10/04/redis缓存穿透/index.html","441d39890f3810a3d8bc75913eca214b"],["/2022/10/13/Redis缓存击穿/index.html","54112ee576028ca7cff02154ad35dc62"],["/2022/10/14/Redis缓存雪崩/index.html","d1225bd30dcf4dc9834d3dc296e7b822"],["/2022/10/17/Redis集群/index.html","10fd4be866e2c4f14ff86fb54f1dadb1"],["/2022/10/18/Redis哨兵模式/index.html","720587c70553c77e48c304269d9fbe14"],["/2022/10/19/Redis主从复制/index.html","3789b18712dfebd37d228e5cc207fa85"],["/2022/11/03/Spring-Security/index.html","9948f127a9319c5c2ce27bce073d0245"],["/2022/11/08/SpringBoot日志/index.html","09809d58afc7800fddfd24d887a1475a"],["/2022/11/11/Swagger2/index.html","eb2fbbd5998a1f3cb35e9646f8469da4"],["/2022/11/21/Nginx-一/index.html","8cbd0421eb2537499f83967c827fed3e"],["/2022/11/23/Nginx-二-代理服务/index.html","ff242400556da04b5a5372bfbc10c227"],["/2022/11/24/nginx-三-负载均衡/index.html","5d7ee18f6ed87a8dbcd7d9f78f73f01c"],["/2022/11/26/nginx-四-缓存集成/index.html","a08ca9501fb35dfe304989a875e21608"],["/2022/11/28/nginx-五-动静分离/index.html","44b3600a5119906cb7fcaf1334faf498"],["/2022/11/29/nginx-六-制作下载站点/index.html","4de3ab5bd7c0c8a775464c788109853d"],["/2022/12/06/docker基础/index.html","c6f4e305388c50d5f3f05e72b67f744d"],["/2022/12/09/Docker高级/index.html","c4b0462dbfdb7ea7fc5c96f6586dfb00"],["/2023/01/04/MongoDB/index.html","d24048c9fddc31aeb69f700551a6d95f"],["/2023/02/05/消息队列/index.html","483b48a707fcd045e00a424a7b72936b"],["/2023/02/12/RabbitMQ集群/index.html","7bda419d3325b2efdeb84e3c4e5baa24"],["/2023/03/10/CICD/index.html","e67f3e91ed2b1c41a950d7760bedfdc7"],["/2023/03/11/ElasticSearch/index.html","e9cdd8a46d3f5232469970441680d090"],["/2023/03/12/ELK日志平台搭建/index.html","0c3fbfa00f1f06181106e1128fa38f86"],["/2023/03/13/NIO/index.html","8b8493fefa594e6c6fd56c1371aaa3b3"],["/2023/03/14/Netty/index.html","0abfdde3181abf6cdc2edb8da0f438b1"],["/404.html","899ba6a6c3bf6a239721b8ab064bf920"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","53c243acb9a8e729fa620857d25e4e45"],["/archives/2021/02/index.html","d9eef4dba4654feeb400e700e01cbdfb"],["/archives/2021/03/index.html","57cd694c2a15d63a2bd093f5cd43af9a"],["/archives/2021/03/page/2/index.html","ba4784cfbdb231dd6aabdfd59e192ff4"],["/archives/2021/03/page/3/index.html","eb16b60ce7d68c093712743427957cd9"],["/archives/2021/04/index.html","23b980d830e7b5079c7e8724e66018c5"],["/archives/2021/04/page/2/index.html","70f505d9b2fb51ae5a7f107174f9b269"],["/archives/2021/05/index.html","a689fa468a6cf0f4be1cb8bb60ea066a"],["/archives/2021/index.html","b2f6570d39f4fdd3a9a8996128a1f18b"],["/archives/2021/page/2/index.html","11c18c2ab999a5067729f56041237418"],["/archives/2021/page/3/index.html","80fc22e9a0a164caa72fcfd98d6c8c13"],["/archives/2021/page/4/index.html","f12feeb3149229789b2c82021d71454a"],["/archives/2021/page/5/index.html","08822c8e860b0df49e010368dd679bf2"],["/archives/2021/page/6/index.html","3a68ec0d29ce3a24b0cea9dedbd74cff"],["/archives/2021/page/7/index.html","a7f3e05e6b36fd0556f5b347ac1281ed"],["/archives/2022/01/index.html","cfb6f49fc7a7d83b13f4e2ca9ea030ef"],["/archives/2022/04/index.html","145be3934b06590503c28c07fc041f44"],["/archives/2022/08/index.html","eb3e11573940b8bd5ca8e95103100360"],["/archives/2022/09/index.html","796ee5ca709f72be4a847e083c399c72"],["/archives/2022/09/page/2/index.html","9213b2b263cef48df030f9817bfe9c87"],["/archives/2022/10/index.html","51c9d632ca9a6c1a6bc1891d0c82769b"],["/archives/2022/11/index.html","3bc23768f7f28b2dae79c8d387f377a7"],["/archives/2022/12/index.html","f9846e6104c632f036395ab8cc559e92"],["/archives/2022/index.html","f23a4ce45214f128797d445ca96dc901"],["/archives/2022/page/2/index.html","1b764b55ed263044263a86c2c858e1b7"],["/archives/2022/page/3/index.html","18720efb198299aeb7d483172e56191d"],["/archives/2022/page/4/index.html","068faded04e8243f49f43c2056825d29"],["/archives/2022/page/5/index.html","4f467760def6d6395fbe89d2486b178d"],["/archives/2023/01/index.html","b11cbe054bbdd270b9ef14b31b993f71"],["/archives/2023/02/index.html","283e369d0baef708bb11d3076c1e55d7"],["/archives/2023/03/index.html","a2515463f4a4b851b00d69858aa76e3f"],["/archives/2023/index.html","4f5b85398162e3c446a57bba375efd45"],["/archives/index.html","7db232e11ea1587b0ca5dccfc1e4f6c5"],["/archives/page/10/index.html","c1ab2a1c4a2a992e165b5ec0f0e06d02"],["/archives/page/11/index.html","182f90625eabfe5f80fc2c86bb6ea478"],["/archives/page/12/index.html","237bbaa1e04c5c9cc547ed8511e6ec1e"],["/archives/page/2/index.html","2819fcede1fffb452b62305db66ddc45"],["/archives/page/3/index.html","5b5b0589ffd0e7ce8340e472b24b4aed"],["/archives/page/4/index.html","2089f19688aa815de3aef15fdb500ffe"],["/archives/page/5/index.html","6767f4376d5a85f7c9f6d297cc0dbe27"],["/archives/page/6/index.html","e809919d12209607f978966a4b1dfab7"],["/archives/page/7/index.html","ecade6d3e48dff0801411c153fd15a6d"],["/archives/page/8/index.html","9e357fd1ece614c43c64caa7241b2294"],["/archives/page/9/index.html","950ea91e3448a95ee3c6393549b7b3ed"],["/categories/CICD/index.html","d5a4964b90d69869df9a355b251c2fc5"],["/categories/Docker/index.html","05bca2770489982919e19ebc8eb00d18"],["/categories/ELK/index.html","98f7881c5a438537919643adbcbeabc5"],["/categories/ElasticSearch/index.html","fa04a09202f29dd35b431a8cd5d38e47"],["/categories/LeetCode/index.html","1648df955b836f51d982fc40b9c53cdf"],["/categories/LeetCode/page/2/index.html","61a46d3d3e8c6127b3896db708bfde49"],["/categories/LeetCode/page/3/index.html","d97540ecb38da001117d24225a9df9a3"],["/categories/Linux/index.html","6dd4d735b2570480e132edf19d61ce20"],["/categories/NIO/index.html","55c76bbc72a1a24beb9da1323018b7e5"],["/categories/Netty/index.html","9ae6e260298487a109f3c633c39895f6"],["/categories/Nginx/index.html","682fe381929fe9efbff1299263a46f6e"],["/categories/Redis/index.html","effcbfd9d330823b20baa0a587814bec"],["/categories/SSM/index.html","f7ad750231dff502ff5abafff991cc68"],["/categories/Spring-Security/index.html","6466d2addfd242584339c88213637a0b"],["/categories/Spring框架/index.html","3bc9554562fc665d65fa7cf835f9a134"],["/categories/Spring框架/日志/index.html","cf3f3f3e0f8541c328d3be577a215391"],["/categories/Swagger/index.html","e52aef7fcb9433d1e8d93a67b59f84ea"],["/categories/Vue/index.html","828f4c4745408a8655fbc068bce4ea9c"],["/categories/index.html","efe06c940afdf238d5f7acc4d3dbcdcd"],["/categories/前端/index.html","3e6131ea0cb28569c11bd4564d65350e"],["/categories/博客/index.html","ada844aad5f2e70eb1bd09c97d5804f9"],["/categories/学习路线/index.html","5c789fc4541c09aed3625415a2cce110"],["/categories/工具/index.html","b6cc441925139acde8370ddf695a7b06"],["/categories/数据库/index.html","27d4c10a73bf1f1a5b68d3422ef264d8"],["/categories/消息队列/index.html","d95ba735c9d6a222e4124733bb2dee1f"],["/categories/笔记/index.html","5b741f5d9153138de480086c81f7b8e3"],["/categories/算法/index.html","f48a46a6c04b51f4bac08484791f360d"],["/categories/算法/page/2/index.html","864071f701e7b974611bfaa9409d5df1"],["/categories/设计模式/index.html","b1ec5ff90d316f3a0a2435187d78a00e"],["/categories/设计模式/page/2/index.html","7136b5a95afbaa763a3c56bd4d09e947"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","5d5d97a270feb1cc20ea5066c8ea2509"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","3e634d5faebf85195ab656406645b81c"],["/messageboard/index.html","525f622197614f87faf832faa2877d1d"],["/page/10/index.html","373148b7be0586d1c71b7138b655c56f"],["/page/11/index.html","e1e2914d21dc43103b098131dc1c71c9"],["/page/12/index.html","c62d0f42f38b4f4b78df3f8f424cc39a"],["/page/2/index.html","07b1602351dba60fba7cdf5638782ecf"],["/page/3/index.html","e103a74651182d8d3f9a5a1a94fd27aa"],["/page/4/index.html","75c300244c54ffafdd018d5b59cc9db7"],["/page/5/index.html","fbb1183026e0f2316d5f72309c25eccd"],["/page/6/index.html","8a4b48279c665c32079beeacdd563f12"],["/page/7/index.html","4e2bda78e1af4d6adea138df51978655"],["/page/8/index.html","033a6a3ed67b2e5d18e561f5e6e6c2c3"],["/page/9/index.html","2686c9869d9690a90b0dacb357d8d0a7"],["/sw-register.js","cab911520e50adcd2db9302f0e5c4efa"],["/tags/Ajax/index.html","8475605a5eb55e9b129e91ff5937f41c"],["/tags/Axios/index.html","abe1329242042ef99689ae6722c374b4"],["/tags/CICD/index.html","fa454f15f53e839bd6346f1113b6466a"],["/tags/Docker/index.html","8ab12879e2f8f8f53f46ba85b2caf3da"],["/tags/ELK/index.html","3f8717610c661148feac1a74cfdea6fc"],["/tags/ElasticSearch/index.html","72b5a1b78de4ca6813a9dfcff4b23e91"],["/tags/H5/index.html","e08cd449ba1c4cd09884903618200ea0"],["/tags/JavaScript/index.html","5fce5b6961d760349ebdbc803b620240"],["/tags/Kibana/index.html","0ca15f03aed2599b24765a360f2aedd6"],["/tags/LeetCode/index.html","8c9ed7a321115712f4d12d7e1bdfb1d9"],["/tags/LeetCode/page/2/index.html","286545559f864f68755d5f7ea4b5ebd6"],["/tags/LeetCode/page/3/index.html","52fdb24cdb176b331b4b9bd7fa968cc8"],["/tags/Linux/index.html","de8695bb4bf5eb2dda731e2e0d18fb91"],["/tags/Logstash/index.html","34581f001707cdb9cc85a79ea14b1518"],["/tags/Mock/index.html","3ab54af58a17b29385cb527a2992666e"],["/tags/MongoDB/index.html","3eed75804803d2b06f28125035b8d5e3"],["/tags/Mybatis/index.html","f66bf9d44db18f51f2ff55d263736381"],["/tags/MybatisPlus/index.html","675083177e5bc2f726440f39000f83ed"],["/tags/NIO/index.html","373c490f909c113c3219a217a3a472aa"],["/tags/Netty/index.html","2ea5d997f2dc19dd8bacb521eeef5498"],["/tags/Nginx/index.html","362989e5600310752015515ff16ebdde"],["/tags/Promise/index.html","347ab815de787bf7566c0ffdbe5d598e"],["/tags/RabbitMQ/index.html","3760c00b7836d79ba52555f24c431a66"],["/tags/Redis/index.html","159f3fa1cdca64317b4e09e7881c7d66"],["/tags/SSM/index.html","44ad478c9c1ef761ffff528f5e9f28e6"],["/tags/Spring-Security/index.html","5d6b256a8eb5d6fd9aba77c6fb23dfc5"],["/tags/Spring/index.html","4c88b4fccf7670c31386867ee7cf3ae7"],["/tags/SpringBoot/index.html","77f2002fefaedf0b0c723023df040afc"],["/tags/SpringMVC/index.html","9187cac3b6c6f1a50339b5e05dd12c28"],["/tags/Swagger/index.html","057ce522a8541d36a6728f7bb0d52359"],["/tags/butterfly/index.html","109e55001b51c6ae9f5c5cd47dbfc6f3"],["/tags/git/index.html","15f33f66bc4d3db3987ae55bc5b21956"],["/tags/hexo/index.html","c4c1d461bcf39bc4f830c2057c513b39"],["/tags/index.html","1c9aa0d21fea689ee95d3abb8eb8f36d"],["/tags/jQuery/index.html","d417760dd147f3f85d142d7469c1b450"],["/tags/java/index.html","b422b5d34d0f676278055f90c973ba97"],["/tags/markdown/index.html","a4403a943ee9df177bc3830db78c41f2"],["/tags/mysql-数据类型/index.html","d16a611429afa2c2770b0d3aebf423b9"],["/tags/mysql/index.html","4f2a6ae7e31ebf92843570fd7020152a"],["/tags/noSQL/index.html","e7ea57a6722b2d0f95436912425ff7f9"],["/tags/typora/index.html","8abba616f6ed50841068b44be8e25f7a"],["/tags/vue/index.html","882b566f9c64f81e285114e98854b51b"],["/tags/享元模式/index.html","4ba8885e52f3fb35c1294a4797b251a6"],["/tags/代理模式/index.html","07e88cbc0f8a120f830bbdf1023434ef"],["/tags/分布式/index.html","d4131c81b28746a89cda3d852d590b3f"],["/tags/前端/index.html","9499298f01fbe93aa5d632fb27f65115"],["/tags/前端/page/2/index.html","89758120edaa55cfe2a380895409554b"],["/tags/后端/index.html","aed78c5e9d217218b9053c9fa34e078a"],["/tags/外观模式/index.html","9f0d3198d55e87af8280b0a44f7f69d4"],["/tags/容器技术/index.html","c9924daf33baf2e88bc7b9d0871ced82"],["/tags/工厂方法/index.html","307c702e3b222a2b4e0f4aba3af251a5"],["/tags/抽象工厂/index.html","3ad9ff7d5da67ff5b7c7bec7ed0100fb"],["/tags/持续集成持续部署/index.html","bd1c7b761372797a198ed067fb329a8d"],["/tags/排序/index.html","ba31c66d82f7d295fdcec5fed57ef536"],["/tags/搜索引擎/index.html","a66b55403cd6587c092539277f3d3e38"],["/tags/数据库/index.html","cc94dbbbbd14ce0769152f9140fb74de"],["/tags/日志/index.html","9f15ad6b9f7067cbf585f88e36c9007e"],["/tags/服务器/index.html","ccd638cd15390f69b8d6431d59d99264"],["/tags/查找/index.html","a364e9861c427a014500e11745aca2dd"],["/tags/桥接模式/index.html","0d959d3e407545831f720f0b971c8762"],["/tags/模板方法模式/index.html","f4f97125d901aa1f16a3866b1371f97f"],["/tags/消息队列/index.html","379692b3288532292716529aebe3d106"],["/tags/版本控制/index.html","153c8e925410572444f0acf382e138b5"],["/tags/策略模式/index.html","c4da835ca2904bc4dd5229b2f21ce9e5"],["/tags/简单工厂/index.html","524292264172ce30e1c7f12adc0e5b85"],["/tags/算法/index.html","910811df3fd60991470214908742b0a9"],["/tags/算法/page/2/index.html","75db11321a6db03c916c5ed7d3f057cf"],["/tags/组件化/index.html","9bd2998ce77a2fe82eef40242539aa5b"],["/tags/缓存/index.html","1d7a8a5e7211355ec26e9461d36c8697"],["/tags/观察者模式/index.html","1de1d2dd3e4c0012232403f690006f8a"],["/tags/设计模式/index.html","1c7c598a53b94db3b48ccdb0ebbe5079"],["/tags/设计模式/page/2/index.html","cf3502c5ae7cff8407e21a47c9b80134"],["/tags/责任链模式/index.html","4a5cf839faf5c5a34b3ef65e045e2abe"],["/tags/适配器模式/index.html","ba6dd163efa06d3ab466158948aa3f89"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
