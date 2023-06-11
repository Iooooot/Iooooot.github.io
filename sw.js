/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","4ebffeadae335ec320f716a4304b6585"],["/2021/02/22/工具的使用/博客的搭建/index.html","1f0c36e75a49b092f26ff87505fcbbd0"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","139bc76fcb6da1744164ecabdd23fa75"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","a0127df73965fc6012f4199f75022e68"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","319316945e489832cce2c9ba6a00ca89"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","95989dc819a9988b6c75836492e1ede6"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","3e5c9bde247864d9ee1582c61c0fcb80"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","0eeef05cb56e65151dd56256dbc991e2"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","0b2bcf7c1a631d982f49f5b3d11c19ed"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","19eeaf05d792e2c8ac39f51dd2842e62"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","339d49e0e82b70fe5e5471edb1a7c02c"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","b0d0d417f256efb10e27e86c2cc7a0bc"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","328959e5518cca9518278ead8887ef56"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","540baa121672e109cce4f23cf78642ec"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","6fe66a7fe347ccfaa4be596f2ade479a"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","758635f4398ea7eed4cad70303178789"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","b62ea99c9b79e52ff60758ae0b6993f3"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","0239b7fc2593295bb5430397867737c0"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","89ba8dbbc88f51c1c8780d07a7289845"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","7d8bf93bf812ce858054735df5612030"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","92b5e798b5429e199dcdcde58301fa53"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","2a8da22ede3277472fd2ff60cd9e4a41"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","554b81778308c8545285d0b6dde1c9f5"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","f03abeb23877ea508397ee2b6d8d5997"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","dca4dfc7e4553314a9893dc9d7f7ed43"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","ab700908ff794730196700d74dd20bd9"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","ab6f115f1673d3db1e831dda28b15e1f"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","6424a52cae45bc1c6b6ada35fbec0ee0"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","28e39da6eeba16c665ce9baec24c43d7"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","2fc06990ce39f1950e90330d1f893431"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","e94a68a52d22b6f3800c553d973cb266"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","14a04ec070f8e087896f8632d3415111"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","cb29959359b37b23ccc2c4205e46e7a1"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","54858b874c0d267256713b73a4cc8292"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","89853b4d91e3d38684cf60449c93f6ee"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","5a051798ce7a9962161d68032be45a94"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","aec802056c960371e40b6d853e09c3c3"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","13deb60abb9e07ee5453f680229b5032"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","39caee3a25395639c8eac35c527d25c0"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","cee986a551c2f7b53eec88ddbc38b3b9"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","b7e2b14d52853232d121eaadddb7ba9a"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","011c5bbabd0c182790e8f619e71cb8a8"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","e563708f7fe235b79133eea80332db8d"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","e1e6fa60330f948a88afeec723b9c917"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","633b47ea216284711f6f6d1d5c8e3e7a"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","bf5c02bf4a6e0b402c45ae1366829fe0"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","4fa419cc3e88c2374e75e535d6fffa49"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","2b935714b7c1e62a99a25040e172b545"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","992cfa725b4d5b5c1806e8aa7e1c0384"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","c695954aed546f6e05a1298d34edddb1"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","5af3f9abcaede7df7ad12b347924152e"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","ea1a16aae73b0be8cd10d19bd8d1ff3e"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","ab96ff89bd864fafd1fc9bd5ea21ff30"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","fc18c2b554a892f7bb052dee15d8f12f"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","b06554963a661dcc6bf4a5cdab101144"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","4be534fd2078ecaac4af1fc40c4f6e7c"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","bd53f685bc778aa24520702797e50c97"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","2a6cc4c21248759d8a945e505203958d"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","18f463586c49e6398601ca73487f28ce"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","718fd2e9aea7af019978462f121b2380"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","4427d86d9c5a3d816fa5e1dd3cb70245"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","f53f7b1c3931d5dc0a036e01e43707c9"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","e57178f8490cb9a4be6c0e489b559fdc"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","7998c0a1b97acbb6ec340347a90838bb"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","a8e87b46dbb1049ae4fe1996e7f5bd61"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","28ee81f1512231e7858cf39f091e7455"],["/2022/08/17/前端/jQuery/index.html","97c8c6af22e9c42333dbc8d605e95f87"],["/2022/08/19/前端/JavaScript/index.html","7dd27591b4009a63d45cb2b9c94cea5c"],["/2022/08/22/前端/Ajax/index.html","e15e7052d1ca23efb7230ddf23cfef39"],["/2022/08/23/前端/Promise/index.html","3441213d9781fc6a2080f3d328bf0a91"],["/2022/08/24/前端/Axios/index.html","d0d46c7ce844055aefcd4102e7cc5225"],["/2022/08/25/前端/H5本地存储/index.html","421bd735c4cf8244b714f3e7a2e73c07"],["/2022/08/26/前端/mock/index.html","146585f130c6813a13db591f1acec932"],["/2022/08/31/前端/vue/VueJs/index.html","6f03118d1a41933b26d14bffb9dc7a87"],["/2022/09/01/前端/vue/vue组件化/index.html","73e8707f2e54e05ed11f831ee346958c"],["/2022/09/04/前端/vue/VueCLI/index.html","0d2c81a896246edb0ecde71f623086e7"],["/2022/09/07/前端/vue/vue实现动画/index.html","40d5f9db9b535b02913ec1180dbdb175"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","0bfd7318651d7ed1dc907e2826060f8d"],["/2022/09/10/前端/vue/Vue异步请求/index.html","becb26367dba4921b70b8d3c1f38e156"],["/2022/09/11/前端/vue/vue-Router/index.html","0aa3ee94a7182caecf44fc6a2d222e46"],["/2022/09/13/前端/vue/Vuex/index.html","d440784e7262f1e11bdc06d2a30dba72"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","f4663adf4a699550b2cf0c7cc75b1448"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","eb7f59257d314789bbdb892b200c374b"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","f965580a56a66dc0c7c37ee5c3d0d501"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","165b30279767a2ffab1cb36a677fc3bd"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","0b7b29e224ab13032746e0043ace5948"],["/2022/09/28/DevOps/Linux/Linux/index.html","8985f9bc2f06bc6720e5f2543aa586eb"],["/2022/10/02/中间件/Redis/redis基础/index.html","56499ed8fe7c2c98d7b180d31cffd751"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","604920557f4cda7040a9631aa13805b8"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","980d5b2f9a721b69d10e19788f41604e"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","b85f73a93b67396bf58fcd32bcab1799"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","06641ba87dbdb23b203dcafaca198724"],["/2022/10/17/中间件/Redis/Redis集群/index.html","69bda5a4d04ec02b502bd9e7cabefd27"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","efe2262e802b4a7accda2aa9375afa62"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","9bc0f83f2cd7988d99962e50f60e20ef"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","2573432b2f5eb9c594bc250b2b3cecf2"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","c4a09272be63c004487a06e6b82dd684"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","6ef5dee533717e2a7784b34c6a829fbf"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","8bc0c653966b3b54c1680d9a793b919c"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","3989fbd54ede8d343a824fdb1c016346"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","633ff91427542838c02ca27bc7cef630"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","5ca4dcc315231308eb41361b1a546f7e"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","991317a77d281c5521c06a6d34702131"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","0d1619e32e976d39597229c355d5d8d2"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","62ca3da433f3a519b4ed824b5b98fc12"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","fbc4b4988073afdc3ee4f5e4015f202c"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","6cc0045648a8584b005cc3a6bcc986ad"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","4177d8d11ca2f70d8aa2613d94e29402"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","705adf97b61a8a44754c280d28149671"],["/2023/03/10/DevOps/CICD/CICD/index.html","6ec136dcc49cb46168ce4a6c64950f27"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","85a29eea11fe8371fd408d354d44a51b"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","adeed8398e1904806e84992f9939fe63"],["/2023/03/13/Java/NIO/NIO/index.html","88902b0ecb9962271f130c153f57898d"],["/2023/03/14/Java/NIO/Netty/index.html","26050bf941ce04c24e2d4fb2bca4775a"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","60a075ab3bace32e21e521ffcf7ab541"],["/2023/03/17/系统设计/分布式系统认证/index.html","09f1917bf56167661a51d110ca16bcc1"],["/2023/03/19/Java/JVM/JVM概述/index.html","5053034fe4e60cc3307322079e4b9424"],["/2023/03/23/Java/JVM/类的加载过程/index.html","ae131ab60f3346247ba9540e118be4a8"],["/2023/03/28/Java/JVM/对象的实例化/index.html","b945fc148dba0d2fb26048c8c08fcb83"],["/2023/04/01/Java/JVM/运行时数据区/index.html","13e8db7eec2816e01f55729757d082a4"],["/2023/04/04/Java/JVM/执行引擎/index.html","d3cb21b9163feb7a93eb7e107953df11"],["/2023/04/06/Java/JVM/对象引用/index.html","2f2cae0b23fffb3ff3b7b287885642ac"],["/2023/04/09/Java/JVM/垃圾回收/index.html","f3fe7316ccd7191f1f2e5ae302852ca7"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","585b6298f3d9901a0e3431d1663048c5"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","0f4094901e55d866d53d35eaa1c44027"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","741704c571ae6e3fc4c283f2acae1e98"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","cb71ee210ccafb0e11bb73f559e89491"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","0b51634699e283ebd06495acdf71becb"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","fa3b6e333f3bf783135300a99ec49ecb"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","492a09a1272f795e00444a063fe19970"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","75b37aca10a2d134350a25e4c13decfe"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","fca002cfd17bdf34df80780b926598be"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","b00b5a19e3de661f765666da5e84ce30"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","61b98b704dfe676f1062feb642e520f4"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","a0521e2679659b36574f60ded3968100"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","9a7a5ef3b83555dfd58136b2f955a1c6"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","dd5b52037cb620a33450d6516ca9d473"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","2fdfbf0ea6a22767d06997881579963e"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","d60ffca53426583a2c31fbb8d796d4b5"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","66a5ae86426005c3cff587cf0f557860"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","7944b3ba9ac516473d8fb7a572dcc6f5"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","940f0e74d3ff9b4295aa42d4fe34314a"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","e2ca7a804a7498294b2211d73b52f80f"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","6e6e8f125f331a163be5378859ec3daf"],["/404.html","3155c63367b8ca0f8c3c0750a2af1feb"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","9aa3067462dcfe2d9a905738d7e854fc"],["/archives/2021/02/index.html","19eb3bf8c4306c934748c8febc5fccf8"],["/archives/2021/03/index.html","11bcc1d8f18da55b873a64eceecbc78f"],["/archives/2021/03/page/2/index.html","0b6fe4b93f736c2b2e537441f8b5ce83"],["/archives/2021/03/page/3/index.html","fdc92e432bc87d6248b730a22273f6bb"],["/archives/2021/04/index.html","a5802317e0ab3c99ff0f4d17023d6372"],["/archives/2021/04/page/2/index.html","42e7a82cf52b8f6dd9585dc827eb11ef"],["/archives/2021/05/index.html","a47f37c1b592ffe3c21352e62dfaec3e"],["/archives/2021/index.html","20790f6d486d7d29bec1cf48f91e202b"],["/archives/2021/page/2/index.html","b3c9d25d0cc76468dbc03d0a303c6c14"],["/archives/2021/page/3/index.html","993b28d1935c5c15b91fc338ccc19b5f"],["/archives/2021/page/4/index.html","464ae237dff591b8cf55cf6a45cc2e15"],["/archives/2021/page/5/index.html","9c491816adff3c13f2c8e704185a354f"],["/archives/2021/page/6/index.html","402d4b66d544a82e5845d2c63331defe"],["/archives/2021/page/7/index.html","14eb1bcd47f674acf7d38c8eb7e9d472"],["/archives/2022/01/index.html","538f86c359ba144b831ecf9483dd3c73"],["/archives/2022/04/index.html","77f41e9e1b94bb88974c214a0e3a0c61"],["/archives/2022/08/index.html","8b00714945c963f8d69a6d4053c33e16"],["/archives/2022/09/index.html","e6e42ac7942f4f36ff25b424ca58ea82"],["/archives/2022/09/page/2/index.html","95935e26c8705bac6dd713f9f4615eae"],["/archives/2022/10/index.html","077f1bfadca65136b82f58d934db8f65"],["/archives/2022/11/index.html","0529cb9613e8a397828a036480320a95"],["/archives/2022/12/index.html","9275a4a54e0322942a2fd0b7bb1955ac"],["/archives/2022/index.html","64433abb4e3729f3199fe4056291e668"],["/archives/2022/page/2/index.html","a8a48fa3e65742bff19e7b071bd4e991"],["/archives/2022/page/3/index.html","886aaafb000218dc6003c62386367cbb"],["/archives/2022/page/4/index.html","564b24c6a3a1d06ebc5cf353b6b94ebd"],["/archives/2022/page/5/index.html","6f71fdcf2342baa2c95d6ab522ebf600"],["/archives/2023/01/index.html","ce27b22bf4d72c738772b98b1451c699"],["/archives/2023/02/index.html","b32df69bbf69082818110258e13333b1"],["/archives/2023/03/index.html","78d8e5cd1b2d4074e069789f5a40df69"],["/archives/2023/04/index.html","eb138b54a88fb6f98c20535f435c1706"],["/archives/2023/04/page/2/index.html","66e6adb450db560fb8fe7b6003da9946"],["/archives/2023/05/index.html","58af8e46081b26cc0428308cf1a87166"],["/archives/2023/06/index.html","d08a4cd28ba6b7ee03ce843af7fb5fac"],["/archives/2023/index.html","f5b681321d2b26494b18a0320d9a2641"],["/archives/2023/page/2/index.html","6af6e929baa67508e210111f07067143"],["/archives/2023/page/3/index.html","17be09de5c4c7bfcc606500d3fc4fcad"],["/archives/2023/page/4/index.html","9335b79aec5cf1eed48c76e2cadf21aa"],["/archives/index.html","9cbed4c72ad07feccc7edefcaa3c9367"],["/archives/page/10/index.html","9d46e6f5e4db0b4e16df8c329835dad9"],["/archives/page/11/index.html","3c205d8303862d6bb761dfdd567eb612"],["/archives/page/12/index.html","afcd4f1ec1103e621d2e6ffc1ef74f09"],["/archives/page/13/index.html","3c9f82d8d28c7ba54408a2bdf99235ed"],["/archives/page/14/index.html","7be33b2df569194e234fe7323c6badc8"],["/archives/page/15/index.html","28c48a6a0e2022d027e569fbeb424dd2"],["/archives/page/2/index.html","395fccda6df6468b599653035a4a9cc2"],["/archives/page/3/index.html","679a8ddd2ef4f77e19d65bbb24fcdd7f"],["/archives/page/4/index.html","9aac00d97c9146baadd87c8013f5fa71"],["/archives/page/5/index.html","d34ba95e49adc9f6dd06b64098570f67"],["/archives/page/6/index.html","1ae8061ddf19f54db3de5d70f565d4b2"],["/archives/page/7/index.html","f84a3727642e084c451eb2628c3f0093"],["/archives/page/8/index.html","061b630d29527846cb72ef1785ecf442"],["/archives/page/9/index.html","c88b92347c894c3bebaa11d8ec036caa"],["/categories/Devops/CICD/index.html","b16fd433fcb5c74a2fd275e04e1d5411"],["/categories/Devops/Linux/index.html","5f528af81e535bb8474c4acc37ce10f6"],["/categories/Devops/index.html","1849afdfd3b4a982dd83f8b677ac0763"],["/categories/Java/JVM/index.html","6432b5dda6b93f1932fd4b00ed429c28"],["/categories/Java/NIO/Netty/index.html","3ce3e009dceb4dd5533b1f7975d5c36f"],["/categories/Java/NIO/index.html","ce97806edec977fcae5158ed0929dc97"],["/categories/Java/NIO/原生NIO/index.html","118eaca0e75329ead4ab643169c66b8f"],["/categories/Java/NIO/文件操作工具类/index.html","5e191422519971f0f44c7d35b711bcae"],["/categories/Java/index.html","690873fa0279a7c24cca34b630c461e4"],["/categories/Java/page/2/index.html","f6993717be5be447cfba2f85f3c9ae15"],["/categories/Java/学习路线/index.html","be8828e1b3e7ad1552a423997752924d"],["/categories/Spring全家桶/Spring-Security/index.html","f46f79955b759dfb13db63b6a7685417"],["/categories/Spring全家桶/Spring/index.html","d9521082f958c8b9684f703d6cb709ee"],["/categories/Spring全家桶/SpringBoot/index.html","debb724c8de33865f65079a0f2fe778f"],["/categories/Spring全家桶/SpringCloud/index.html","0fe711fe8b7deade74469f1e3f8bb6f0"],["/categories/Spring全家桶/SpringMVC/index.html","3b501ce0842bf89ac62ba92c4751ffac"],["/categories/Spring全家桶/index.html","9b7cd0e6ae9267f0ab6378f8874568df"],["/categories/Spring全家桶/page/2/index.html","f19da0cc43198ccdda648e421df1f3f0"],["/categories/index.html","b3cd67866e77a63cac78c5e12eef05ae"],["/categories/中间件/ElasticSearch/index.html","f685fe8c82624f355cc8c64010a319d0"],["/categories/中间件/Redis/index.html","58aad14426391f3b35fd41f9b5dd961b"],["/categories/中间件/index.html","3042d563a97550821687dd2e21abff51"],["/categories/中间件/page/2/index.html","aa7dae5befe64055da2e8e5e01820421"],["/categories/中间件/消息队列/RabbitMQ/index.html","cbe779a0c9450bef2445de3ae9987ef5"],["/categories/中间件/消息队列/index.html","c4d2f46b2be3119cc5c0f5ef032f898e"],["/categories/前端/Mock/index.html","d6486b47fb2c432cf68db5eccba7033c"],["/categories/前端/Promise/index.html","55c9cc470d7d64311d77b7cad78d27b8"],["/categories/前端/Vue/index.html","e8929509bb7e6fb555f77b9cf499c10e"],["/categories/前端/index.html","9cf80e2a2c0a445cfcf96da9a7ef0d1c"],["/categories/前端/jQuery/index.html","0bbd489c19832a8076e365ddd86a3df1"],["/categories/前端/page/2/index.html","cd10123562c6f07ee0af457d595ea2e8"],["/categories/前端/原生基础/index.html","70eb7746ce2db1ba168b1c1544d38a63"],["/categories/前端/异步通信/index.html","9f0958ab5f67ff0e9c1c86086973ff36"],["/categories/工具使用/Git/index.html","83aad2ab5297eacac1c89390fd764f4e"],["/categories/工具使用/index.html","0aec3b9087acccacb0145a07b8f34f7f"],["/categories/工具使用/markdown/index.html","3775d0752bc4b6063a270a0518aad19c"],["/categories/工具的使用/Docker/index.html","2f76ab57f3fb1265feb18157377118d9"],["/categories/工具的使用/Nginx/index.html","02496421815903666b0b64ab6d13cbf6"],["/categories/工具的使用/Swagger/index.html","70db594d4737d269d829b6030f24e9ad"],["/categories/工具的使用/index.html","e5deacbdccb433b80cc26a100ba4c8f0"],["/categories/工具的使用/博客搭建/index.html","a98f71b8350be793d04c77011573b520"],["/categories/数据库/MongoDB/index.html","c00b13ad725eb689922f60590d8567aa"],["/categories/数据库/MySQL/index.html","602bbc335208b0576f28f6fe25f5d2cc"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","fb2c14dc3bae5a80d4994531dadb19a6"],["/categories/数据库/ORM持久层框架/index.html","0ca6c13d73250404cd71b31241fc69cd"],["/categories/数据库/index.html","1ef5fb6d77adb3fce58db2060f19c34c"],["/categories/系统设计/index.html","f9ebdb609f8705badda55337904cafae"],["/categories/系统设计/page/2/index.html","c8a05d5fcdb4d9dd6fc26edd4a4f64c0"],["/categories/系统设计/分布式权限认证/index.html","3939eb85ecb4d58b9e022cb0396990aa"],["/categories/系统设计/设计模式/index.html","fceadd1948433e2137d27b5ce2193421"],["/categories/系统设计/设计模式/page/2/index.html","7794692d90701f20af9bcddae024f80a"],["/categories/计算机基础/index.html","0501d1a966a5c4a5a55221b859144dd0"],["/categories/计算机基础/page/2/index.html","3f1d7035e4f5f65ca72bfa97afdc661d"],["/categories/计算机基础/page/3/index.html","0054cef2dbbeb57323f61504cccae10d"],["/categories/计算机基础/page/4/index.html","727dd6945fe557bc129727397b11bb00"],["/categories/计算机基础/page/5/index.html","e600820808eb4a56822e7071f58f0d72"],["/categories/计算机基础/page/6/index.html","96e88e9f45e8c3c85cc18986e166ca82"],["/categories/计算机基础/操作系统/index.html","7887717fad26b4a27932291767ea512e"],["/categories/计算机基础/数据结构与算法/index.html","2eb91f3e8405e3d5e251dcf622912c0f"],["/categories/计算机基础/数据结构与算法/page/2/index.html","81ce37eb26ce15ae36d7053d8a1dd657"],["/categories/计算机基础/数据结构与算法/page/3/index.html","600e104c3b31709825a338809feeebc6"],["/categories/计算机基础/数据结构与算法/page/4/index.html","6e1412e1f7b8f0f442f27e67f05a8045"],["/categories/计算机基础/数据结构与算法/page/5/index.html","81c127de1f3dabd4586b13d800a76982"],["/categories/计算机基础/计算机网络/index.html","02556f12baada06b686c32c565865dd6"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","75d405b4cac95dd7ca68e75f0506a8f5"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","284c73131d0de21fa5ab903679303f97"],["/messageboard/index.html","f48fac6f80e60c1ba50b7645a403404e"],["/page/10/index.html","3bc5314d280fa486697ab6372a975e38"],["/page/11/index.html","cc1564f04139c14c89259615e7c9d944"],["/page/12/index.html","db370d5db2f715ac45f0bad463b3c6f2"],["/page/13/index.html","b29d7bde34a882c6a66603688e14cb71"],["/page/14/index.html","780016288ad142e0273a12cd49a08daf"],["/page/15/index.html","6a2cab8fe3415d33102295bfc3aa13a7"],["/page/2/index.html","05cdae737ea113d5177323fc65c48b51"],["/page/3/index.html","7fb6bad65e4c31d6f953f2d3fea8e043"],["/page/4/index.html","e704a4ff20bdbd45245adfe9a1c7062c"],["/page/5/index.html","840f77cc1139f75060cd96490f3e7ca9"],["/page/6/index.html","94e57385c5c8e0f7be063b6ca4a8f8c7"],["/page/7/index.html","c23af60a38cf9a10929f60cc5acb470b"],["/page/8/index.html","567ebf2ba9a4a8c60c4123f27194a9a9"],["/page/9/index.html","e9d65a0d6d4040a157f3cbc3da2b3304"],["/sw-register.js","268ca56f677f8547a0e01b86d27c7277"],["/tags/Ajax/index.html","f1272279c7f00046cfe3cbb2ea838138"],["/tags/Axios/index.html","773af964ca02c2ccc0bca791c71a630c"],["/tags/CICD/index.html","9bb172b349258b5def4b5389cd608d26"],["/tags/Docker/index.html","fd4f5693b0f200bbc88ecf1c9ba99cb8"],["/tags/ELK/index.html","cb10ce0cf64517b44a073227e4b1ee0a"],["/tags/ElasticSearch/index.html","f3e9da2fe08df7637e9520fb6c2b42a7"],["/tags/Git/index.html","75e5324e6d6770fe890bb424f939078f"],["/tags/H5/index.html","073cb939a9264fad2c0728d15f219894"],["/tags/JVM/index.html","c7832c026d06b4bde61ed4b2bd0f6711"],["/tags/JVM内存模型/index.html","04c65249171ef824f8a3baad2746538e"],["/tags/JVM执行引擎/index.html","c88541ab87dc8f7a84da1660fd1e8095"],["/tags/JavaScript/index.html","2211dbad0308988a75ff899f46c5f5f9"],["/tags/Kibana/index.html","dc1c77107ab55dca6ae3b742be6e0db2"],["/tags/LeetCode/index.html","2de5ec9c98e0900b245c22a1cfcb74fe"],["/tags/LeetCode/page/2/index.html","c53efce853fdc42600ebcb66536d32d9"],["/tags/LeetCode/page/3/index.html","f0573f6232e24e9f11a4527422996ae8"],["/tags/Linux/index.html","18dc285531cf196976941089af7a3a14"],["/tags/Logstash/index.html","98433515d8588c7a1a17dd8bcb2b249d"],["/tags/Mock/index.html","a6769ff3be06d15d752b1320c50ba287"],["/tags/MongoDB/index.html","e4a9823827841edec9dc39c078330a34"],["/tags/MySQL-数据类型/index.html","c0da1e6df3541583779dc097275889a8"],["/tags/MySQL/index.html","23bdd554c977502d1e96d4a50ee52b12"],["/tags/Mybatis/index.html","ab1653bcc3401a21d998f5df1080d1c8"],["/tags/MybatisPlus/index.html","dc92b12f2d86ddda2027ffd8e67a27e5"],["/tags/NIO/index.html","e421c007178abd647b33621fa4c3498f"],["/tags/Netty/index.html","90f5c7d2cb6d821b54c7fd66e391cad7"],["/tags/Nginx/index.html","e26c6405f396501201390f25647713c5"],["/tags/Promise/index.html","f59db4691318682bc33c2af95828d341"],["/tags/RabbitMQ/index.html","be5c8d758ab85d8d88f2901631f028a1"],["/tags/Redis/index.html","8e142d2450e765c6bd1fc4f03c86c891"],["/tags/SSM/index.html","d83b595a3ba4c71cd375c03f630a0471"],["/tags/Spring-Security/index.html","4bc22670baacd62ee51c955a567ccf1f"],["/tags/Spring/index.html","ff50cc586daddee9da1a059ef56d964f"],["/tags/SpringBoot/index.html","370fa34ae34850a170d62dabd40c382a"],["/tags/SpringCloud/index.html","aa85d73f852b77a065858c40e052e863"],["/tags/SpringMVC/index.html","de7bc3d6d743cfcebd81384071cffdd5"],["/tags/Swagger/index.html","17d7393236891e3a08dbc4649bcbc37a"],["/tags/hexo/index.html","ad9358a73d11da7b9b800c0078c86a1c"],["/tags/index.html","33b250f58290db38568ead7bacd8dacc"],["/tags/jQuery/index.html","6bb5c35737aedc38df4aeb25da991ead"],["/tags/java/index.html","ead364c364d14d7701ec6e9e6c38237b"],["/tags/markdown/index.html","21353f9466d0c7676a55d83bab5bd7ee"],["/tags/noSQL/index.html","707cefd7518577eb34958c5ab9f24660"],["/tags/typora/index.html","81d07cb5089ca03d1858ee50bd0912dc"],["/tags/vue/index.html","933c8f499abb6dfd45146a791686eeb4"],["/tags/享元模式/index.html","8e16026409959a058a3b6e2529083ef5"],["/tags/代理模式/index.html","edcd459474812eeab82002b4bc2efaa4"],["/tags/内存管理/index.html","d08c574388ba2c294d90f42deb936e2e"],["/tags/分布式/index.html","20208471ba1f83177e44fa109bc9d415"],["/tags/分布式系统/index.html","bd99eb31db5aced169c3720bc1eb6ff0"],["/tags/前端/index.html","5f75eeb67942189ca76393264d50717d"],["/tags/前端/page/2/index.html","639e6b4b2e4496add5184f0c94b214b7"],["/tags/博客/index.html","ba4c32475b3827bee4018226e88bcaf0"],["/tags/后端/index.html","1d35397b570abbe3b7f74e2c19edf86d"],["/tags/外观模式/index.html","a7053e81110c679e69b78579c08dfaab"],["/tags/容器技术/index.html","d67ab134b58c666bbaf5d0f4bbb075eb"],["/tags/工厂方法/index.html","432d1e50b09e7a6d3241b0952d7c7991"],["/tags/微服务/index.html","5ee8b73e03292bb683984be94f002518"],["/tags/抽象工厂/index.html","6d69ab34ebccafeb16bb301f007a0e9d"],["/tags/持续集成持续部署/index.html","2063ab0788c3c252364709ce2c716153"],["/tags/搜索引擎/index.html","f9fa9174c1d4db18ebe62680d756fef6"],["/tags/操作系统/index.html","970a0c73d3248d2f787ea8f8cf5176ed"],["/tags/数据库/index.html","5ecf9cb5ee6b86ca5db9f3f79fa2072e"],["/tags/数据结构与算法/index.html","a06aa57a2faaa1171ce03e44244ffaa4"],["/tags/数据结构与算法/page/2/index.html","b6dabcb72c905cac4270e8af458e6cdb"],["/tags/文件操作/index.html","917f7736af11f3b59cf3956ad25ea64e"],["/tags/日志/index.html","fc6be4bf0df0609ec90edeab25ff948a"],["/tags/服务器/index.html","163876f3becec1e87b380909eb666c9b"],["/tags/权限认证/index.html","75a1140f6415c79b28c3ee721c069a1b"],["/tags/桥接模式/index.html","93b12d82b530abe714650d157cc98add"],["/tags/模板方法模式/index.html","a96090f612bae8d2a2a4387b998f9270"],["/tags/死锁/index.html","0bee2fa92ee67379af05b75719810418"],["/tags/消息队列/index.html","3cce4efac135df6c0a7ed5f482d93346"],["/tags/版本控制/index.html","29f11180d66e6eba87c3e3771a70f1cf"],["/tags/策略模式/index.html","a9eddaa000e5a8098b183c9076230deb"],["/tags/简单工厂/index.html","72c98b5516cdc0d29b3099c5a03ba7b0"],["/tags/算法/index.html","f42837913826f6870369f206e27d400e"],["/tags/组件化/index.html","5bbc5b549b4e4b95c835c038114fff2f"],["/tags/缓存/index.html","40d1ba330cc8f50b4537f94568df063d"],["/tags/观察者模式/index.html","27aaea44c1220298667aab893dd8792b"],["/tags/计算机网络/index.html","a8e92fa33e349f907c9759329fffa6f9"],["/tags/设计模式/index.html","ab7ba538214a07c3b7cf8ae9b37197fe"],["/tags/设计模式/page/2/index.html","9fac332e19a7ee97e4bcff7c83b9f51f"],["/tags/进程管理/index.html","0c4a5b76cff47cfae2fdb0b8a51b0208"],["/tags/适配器模式/index.html","e260dfaa3b478b88be527721ae02568a"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
