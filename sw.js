/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","685b6db338875ffa5b3a63efaae280ca"],["/2021/02/22/工具的使用/博客的搭建/index.html","50309ffceaeaaa00ce94693e6ea96761"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","6c5af6766b28cdd34902dad084559add"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","a468572750ba6bb6844329bba64faf1c"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","02470d968b8e258465a7db84bc482092"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","6d9eb1a37c6b90129be2d1eddb76ae2b"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","40472f33c14eeba2d9210e7000e50523"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","d20e6d556be158c1420a6f9544dadf18"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","28145e356607786bf24e69b299296e40"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","ba25be4b4ae8f0df0fe386daa78e3509"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","252599001a3dc7d6fc9c02dc8d995efc"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","f0add126038df5746a1271794e245103"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","2e82b79936464ecd48b1b247fc0bca56"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","aba4f9c66c269c72b7b2facc783b757d"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","2244991f3c0451a008ca05588d4a1d98"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","53d84c8df3c608c43fc0296aff59040b"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","be1425ea6552de4b3a8e10dea5e3311e"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","393e394686291204722f3c2aa0c26707"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","17087d446d36cf3f15e391b352dbc320"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","2289098c773858b7493d1ee65c20d6e0"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","0402afe4ad5833ba1c56a984c60f79c9"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","1a414e411c56d09e32029d9b3392a21e"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","c182719bc17e98932007f85722fb85b1"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","e5aeb1562c9f7ec5360d0300f7fe1e50"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","ca891fb7c5962171337f8dadee3fb28c"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","e226d4dbde4649e88de9da7633b13946"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","9d09e862e3c988809fd02bbb830eb6a4"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","ee249f4b67a0d9cac4a0ae47e07122f4"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","3f3f05d58191e2b1b3f718cac34c3565"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","8d3f03fd83956a1e9ac39357a7c4ce31"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","630828a2f9759fd2057aefd355ebac42"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","24e18946327cbac02c6addb79878ab70"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","ecba84b1d78f363b76fd423884b2640a"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","8c3dd549f16dd4b04ce4011dc9dfbd2f"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","633a3ceba8726ecb747353a30fd770c7"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","f6349471f9d0b6eeddc339f479921863"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","486dc56d0ac0d4b271477dd340170e41"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","3b29532201b13854504e2a3a59046b10"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","24e38b93d8a0185dcf0fc65e98d09391"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","248f9b19b21e549f8e9b7ea508b992be"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","2a157eb2918f8509343cf1eb70b3fab6"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","cba774a2750e4a44477e6ee87ca9d7b9"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","28928a268913fb3b74128fea4c51da56"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","972c16ef48f5674eb16c4a9e0fc373de"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","16948f430878c187cdcd7db08a3acca3"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","997c65966baed5fa3ac71913206ce01a"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","ab74bf12aafc10a4fd6afab7c3cf1bb8"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","f2498a97857aba1d2e85c6735dc4502f"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","5439f3bc6114727e287f016515f3b4f8"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","6a685bc0ede1ed932dfef350df5dd623"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","f8d15ed190a80823db8f3ee58c11a441"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","f86ec4838c117626688fd33f7c88f85a"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","d4585e85ddd1316220ae1d7cc85708fd"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","5ecc22518ab9fd0fd18a11046960764c"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","96793962ff6dfda7891203f387f3ffb7"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","f4e17ad0b42d7c1ba41f0ac7a97919e2"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","9c2381e420842aaf62336573db08fe22"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","0f03dd4e9dfdc98d14301c41a2aec588"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","12de04b03bbedf71d549e5e9dc42985c"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","e020dee920b2671339365241fef72a6c"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","ddd09b7ecc93e13c8565992eacc67d21"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","f90461f39982231e7921b278988864e5"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","061f4ff41085e5448aeed54261b52c50"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","5b5dae6a492d7837ae8c3ab25f19ab75"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","da4408248e780a453af1c676118b4129"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","381387412fcc3f1cacadd393670c8e7a"],["/2022/08/17/前端/jQuery/index.html","dc47a76b88492fd594fbde1e5191bb8a"],["/2022/08/19/前端/JavaScript/index.html","4ed6cb7b9e07e6075938f0bb34510997"],["/2022/08/22/前端/Ajax/index.html","4a9942c78a9f9d23463478e1992a8ea4"],["/2022/08/23/前端/Promise/index.html","70184b3650f47fcd3b362e56018b4cd1"],["/2022/08/24/前端/Axios/index.html","4746e4abb06923a7024e05596f5477ec"],["/2022/08/25/前端/H5本地存储/index.html","cdfae89b2be3cbcf2a2622e5e182c64a"],["/2022/08/26/前端/mock/index.html","04e23d511ef727eaf65de3dfb052324d"],["/2022/08/31/前端/vue/VueJs/index.html","c4aec4c1084d32e5e85fd40800046233"],["/2022/09/01/前端/vue/vue组件化/index.html","37d47e634b8cf404a825adf3201e1c8d"],["/2022/09/04/前端/vue/VueCLI/index.html","dd9b8480a7a76832f677d1ae6d2fe6b2"],["/2022/09/07/前端/vue/vue实现动画/index.html","baf8783954357e2f08975e65c3277cd0"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","60c61fdce8dd9167f38076a264b18ffe"],["/2022/09/10/前端/vue/Vue异步请求/index.html","4f3f3ebfeff381f67ecf699fa671ea30"],["/2022/09/11/前端/vue/vue-Router/index.html","5dd1d93d72dd4142b4cd1b1851426ff7"],["/2022/09/13/前端/vue/Vuex/index.html","3546db2b3933fb5e1ea200218afbf3f2"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","4a3c083f02f800e61ed698c0737ea4d8"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","81147abcf6383c72feb30d5c6e0d8caf"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","9e1a06756cbc841ea4f1a51bc698f623"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","6c981295bff1e2a0c32a49af645fb069"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","8b1beb856beac5d0dc9e27f8a24904fd"],["/2022/09/28/DevOps/Linux/Linux/index.html","9c380bc6cd836abf84e056ab3e49558b"],["/2022/10/02/中间件/Redis/redis基础/index.html","8771accd3132dd39bd1cf99a52fd2d01"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","2044a72cfdb6a797d9ff55ff7e077393"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","365ffaf6db95db602a1e75b0fbd2d8c9"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","94fb4fd17e8f2a67af7dfcf9cbb0f0f0"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","30b36c72942fbc1903c580a85e00e146"],["/2022/10/17/中间件/Redis/Redis集群/index.html","c3c0e3309e6f438e336420c2f573eb53"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","648a18c4e31b5f66db5418bad21ba2ae"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","3e1601993bcd5e48f359d4a534824dbc"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","c27b5f03ce3026ab92dcbf4c86a74419"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","473fda3e99e98a9ec3e166e02da11611"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","a8cfd147edee12031c644d23a031dc08"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","653e6b1e9aa8d3ba65c544c7cc17985e"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","03a8fe405956d43ca4768291863d6677"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","b0f78831c2a08fecda1ebf93e224ad21"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","525c369370ca2acee4169a8b22d68897"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","214ec7f6665c0512e303036b235b490f"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","4980395caa82b68724bda2315ab3341f"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","95b084ea9ea7f0fec706a27bede874f6"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","a243d2ff9119ef0da7d16db6f572b85a"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","49c63831e1f76ee912ee19f270d9cddd"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","83bed83f68dbfd466140f9c3bf3e8a7e"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","804a780bc96dece8dd24b958a0a243a0"],["/2023/03/10/DevOps/CICD/CICD/index.html","c6eb0563d2143bec19ab8c4bcfa152bf"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","0ff17c3d73bb7506b3c21d5dd90a0998"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","dd5128aa66673f8317303a5b3dc7dfc4"],["/2023/03/13/Java/NIO/NIO/index.html","a0f260c25b312edbc007084f24c023e1"],["/2023/03/14/中间件/Netty/Netty/index.html","b90ad3ca02dbc93854bb9816623b1106"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","182ee9365d71d0b160c03a86fb913d92"],["/2023/03/17/系统设计/分布式系统认证/index.html","8945959b61068b205ea2e8d852a03a42"],["/2023/03/19/Java/JVM/JVM概述/index.html","7b88ecba25162209d0f5dbd06f21dbf0"],["/2023/03/23/Java/JVM/类的加载过程/index.html","9710642aecaea978cbefc037fa6e50aa"],["/2023/03/28/Java/JVM/对象的实例化/index.html","a8dc0ed7bd134c6b407bd0b0a0b6a29c"],["/2023/04/01/Java/JVM/运行时数据区/index.html","5e319bee24e2b852619fbd9228844204"],["/2023/04/04/Java/JVM/执行引擎/index.html","487f59102367adeeaae588d86d975b59"],["/2023/04/06/Java/JVM/对象引用/index.html","27bcb08d0658044d1f0928788623c71a"],["/2023/04/09/Java/JVM/垃圾回收/index.html","0b83c3ac1ed1f3544d4b96fd47e11ed4"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","45c651dcd5d989f8cdba482dd25d2ead"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","228c748ebeb8e15fbee1822a5d271d6f"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","77e8cdad337e47423010734a9e3e9920"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","915137558255756d6ffacab2f9b27996"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","01b1184fb100fbae8e58d7ff4782a2f7"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","2840465ad6bf65163e73f99854a74d4b"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","d7bbaa56bcdfa94ef34f19b18aeb3b8c"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","c849595a1ae35df4f9695341892d8f8a"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","eff115121cc72efa908f157129d754a8"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","3e3cc85c4a2fa002c8b41e01220a7e74"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","0db0f8d4a33dcc3746333282c2524471"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","3edc0e9e1a45b8e8a6810bd0830fb832"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","14c3ac2c554a8d5ead7cf63539d17b24"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","25902a73349d916fc4622e87fc276295"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","456c5cec4ab6cd079cf155e663d71f68"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","77ffb0a6e07c804d3603d52f79f8ef99"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","a57a064aa4ec7afba29cf7549a30d5f9"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","a7c8418cdce2633ccd31e81f9e6b3d34"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","cdef9519f0beb2b67948eb8256fd66b6"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","7b44a2f53d71c25259f30b6893bfdade"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","227de8bf7c0ae30838c0354ac88bfe6c"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","336e72e07782feffe125f2d8368ca820"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","69abf0fc7d366dd7fd34f479f8581bf1"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","e67b4f748f85bb1f700759095be2910b"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","a867f35dbb2c5ce7d118add5fda9d182"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","a217085bb5768129fb81e627c1ea9f21"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","6a2bf906f1b0ab080da34dd058712c95"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","b0d46ff4582979728186d4c82329e214"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","0e3872dfb6dac2e6709e17b370f35803"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","293eafe4e6aa39c72a1d7ec31bc2c664"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","9d3b65713ec9453ae7b68315d3664045"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","42ca49158280315b50b4973adc95f4fa"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","fb04ae92b447b83355f1cdee275c7267"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","8c1dcf6dd2fd49bad6acb09904a10cfa"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","568569330ec171b708667c9f96427ea4"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","e751b2a25601ba536273dcb2bdbbb8ee"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","3ce7e52cb6b94188988bd5870e9c6e6d"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","782e9c17916159d373df37cacbb2196d"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","fa92ac84a5a977d623e58cc7f0a6850c"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","5edee91465e1d1ac59bbae7c82b9af08"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","f701ca34a0d6414289ee9e8c15e4b46a"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","690970809ef38df11603ace72df0be20"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","892b39db09dccde25e6103fd536f2ec3"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","7b34ffb686d5d94abb450ee666986861"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","edc93311c820ade58728e66a3c1f9f7d"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","2ae2a5f4124429be63a577a17822ba58"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","6dfaaecc4a238ea8ba4670e00286b1df"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","357c1f74c313c7fb3e5834b1fec8631a"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","83cb92480284760b122c8b4e3066c1bd"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","3e6cd23274cf96f70a57a1a7680c1128"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","e0732bf393baaad287e2720ff35cfd40"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","3f3241c6d8fca4f86efbf4b48b84c0aa"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","d945830abbc08ba4675795c5783e3e66"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","52bf35111e2adcc50193978961e7ea38"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","cff75dd0b6b48dcfd7fb02912cb067e7"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","f7e09afe477221f2583e8dfdac3680e8"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","f98d195f6fc0182e5c53c3b69f5eda28"],["/2023/09/04/中间件/Redis/Redis事务/index.html","26271ea74cd4d61edf3d403d8c43cc2c"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","59d3a72a8c6694db1efd9f25b97cbb2b"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","7a467f30a36f729ba24ab045441cf44a"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","f832c86ec48450f4fff80d914103fc6a"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","d15998c1a31ab7b5c342e9331281c664"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","486a4c6955a09221a23ef3ad72b5983c"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","8c8d4a367fd26966e1fd60bc5c45d802"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","16b1b131dccaf4cfd816103abc12deb5"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","36042401ca989ad9aeef70a40a575aac"],["/2023/09/22/Java/NIO/零拷贝/index.html","7be85f5c3a57fe3ad88f21017fa7684d"],["/2023/09/24/系统设计/JWT认证/index.html","4fb848a11b930d5df44d2dc41490f0e0"],["/2023/09/26/Java/NIO/Reactor模式/index.html","1088a3ca43460de2594c53b88510b252"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","f59cb1f3fc253628fc72d1e669931601"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","d057dc24490360038cfdae537fc999de"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","b41d9c62e119824ba5fc4876f16c3ed5"],["/2023/10/09/Java/并发编程/共享问题/index.html","469ddc540006ed7cc77155de036faa0c"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","dd6705c1276065d7a9b369bf5eaeff14"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","b8a64d4dc9767bbbb527904211ef8802"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","294366f8b29168256c7015ba858b074d"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","59b9c703e43e93d2593313fe62613cd6"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","be1b279d13ab1cb32a3559e6c28b9216"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","4098d60e9d95d4a8e8bd4feb8f788291"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","a1cd1d4ca831e54382489a89c4f49e18"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","41b12c52922e6b7315d01b76125c440d"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","674d02ab282b25bbfdf678976784569f"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","1d02e18ae172d3d2c58892aaf23e6e95"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","0642795aa862ee0cb8732adceaa56c16"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","379a5aa3b48414736f1db772646789fb"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","3f0d0184d872f29869afe768f2ba012f"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","36b22e410941b247408e5f22c409f348"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","8c5acd1b57b08109f22805f410fec09d"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","baa9cf049c99a7d434c1a938754609a3"],["/2023/12/05/系统设计/开源协议/index.html","49a8c4caeecc141a43d2ae082a436e5a"],["/2023/12/09/MockMvc/index.html","3ef98ca0904157ba3715174fb38cf254"],["/404.html","0496413f1c0d2f5f2c016b2b3daeb6e7"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","8747ee4e1b6eb99725123d90744ab3d2"],["/archives/2021/02/index.html","cee8b8945a9509aa563930b811f87d92"],["/archives/2021/03/index.html","9140f590240ed626b5327e7d095d0758"],["/archives/2021/03/page/2/index.html","8e85bbabc7a156d6814a50618f06c7f8"],["/archives/2021/03/page/3/index.html","dec508b01c8be36f8e23317a8222e704"],["/archives/2021/04/index.html","4382aa24bd30d4b58d309cf1cf19733b"],["/archives/2021/04/page/2/index.html","a8cd6ab23c96fbfa01d0ff27f603b2f0"],["/archives/2021/05/index.html","3626dbeba0a8677326beb24d66d26111"],["/archives/2021/index.html","1450ae16a36775297a1df311690a075d"],["/archives/2021/page/2/index.html","d4f869e3b1cb3c5d1a3d2a236208d111"],["/archives/2021/page/3/index.html","77c8f4bb074c864227a797c75e8922fc"],["/archives/2021/page/4/index.html","44c64e9f59de04a49b5c1eff15c9c65d"],["/archives/2021/page/5/index.html","f3ee2055736c163de559ff9b2c4693b5"],["/archives/2021/page/6/index.html","88b3bfce78f9cbd18ae970c6f5e3f101"],["/archives/2021/page/7/index.html","8573dbb23f6d0847616d9f0a2bf9f881"],["/archives/2022/01/index.html","70fe5d55ee70839ce3e1e09eb2ccedaf"],["/archives/2022/04/index.html","d9498523a413652b8b4f7f7440b3ca27"],["/archives/2022/08/index.html","5bd62244f3d344813aa5648bdaf7392b"],["/archives/2022/09/index.html","63cc4cee1a9b4e9d3c71ba641d338179"],["/archives/2022/09/page/2/index.html","42d39a8f6c436d5a5ccb6fd7c1b7ae67"],["/archives/2022/10/index.html","7553b7dc501e16c1b451ee836f7197fa"],["/archives/2022/11/index.html","c53152a2c90f101d878c1b8aa794b7cf"],["/archives/2022/12/index.html","e5abce79827d002600aabec03b78bf73"],["/archives/2022/index.html","85ff263498e5d59cce3e91e85d06fc33"],["/archives/2022/page/2/index.html","5602420936befd9c50f8ba05cd1d6345"],["/archives/2022/page/3/index.html","49871e4378d3b7220916e3b6c89dc634"],["/archives/2022/page/4/index.html","6a430df70b9704d1ee7c9565b897618c"],["/archives/2022/page/5/index.html","1d343e45585f62520e4dde73d681d141"],["/archives/2023/01/index.html","1e579d3e291405b8fcc45acb10122310"],["/archives/2023/02/index.html","36cac61c35cad04fad0b096038894af7"],["/archives/2023/03/index.html","a3f7c09acb4770e9c2425bf14825b2da"],["/archives/2023/04/index.html","80a730ecb6f7c75fde4c18955b3471c1"],["/archives/2023/04/page/2/index.html","a52dc7fd40689d25e751e8b5000c4e35"],["/archives/2023/05/index.html","ed800f35e3bb33c3792132e8ad06e4c4"],["/archives/2023/06/index.html","80fd705c33049e647b3d6e958f7ccd3c"],["/archives/2023/06/page/2/index.html","276371d3b895a62cc643e43c10a7d50e"],["/archives/2023/07/index.html","5b823c45f575d287114433d988c4416f"],["/archives/2023/07/page/2/index.html","9019dbe474531cbd2a8e233fa8ea565a"],["/archives/2023/08/index.html","90900d18451ca590536faa7fdcb66d9a"],["/archives/2023/08/page/2/index.html","a4a9dd1b88d0b73ab7086e2d1aeb06bd"],["/archives/2023/09/index.html","62530f707de914b9a1aff101c5324753"],["/archives/2023/09/page/2/index.html","825961aa8942b74aeaef915a1ab7548c"],["/archives/2023/10/index.html","71c824e486582dfb2aaaf866b8de0484"],["/archives/2023/11/index.html","6d6970759e85cdbcc0c0f7aa6fcc3621"],["/archives/2023/12/index.html","897bf5d0b84647f64b3e8d040e4d027f"],["/archives/2023/index.html","7e5b8ff66e411098a4869505223df6b6"],["/archives/2023/page/10/index.html","a7d0d542fcae489a0c2372d76d13c5eb"],["/archives/2023/page/11/index.html","e218a0e409b08087cc7e3c879cd9c724"],["/archives/2023/page/2/index.html","98ba9359ebbe8c5678057306d9dea228"],["/archives/2023/page/3/index.html","67b20269d31ec0c8e00bf6a9d1837327"],["/archives/2023/page/4/index.html","3e5979c8b88c1cbf9301e12716f2d9fe"],["/archives/2023/page/5/index.html","f1bfb015422c7cf8ba94ee0e6f19d760"],["/archives/2023/page/6/index.html","9d869508727682873be851cf94356abe"],["/archives/2023/page/7/index.html","e58087cc66844190987c234a098e013b"],["/archives/2023/page/8/index.html","da2b0a913869e87f962ca7163eb59bd7"],["/archives/2023/page/9/index.html","2a02c52e8dffea7b3ce3a904cb4b1018"],["/archives/index.html","1b2960bfa578d91ae88f1daa0cfdbb4a"],["/archives/page/10/index.html","c35dd8e705c8e036516c1d472ed71b32"],["/archives/page/11/index.html","9568b2a19093562abe9b7d253d60d7f9"],["/archives/page/12/index.html","e144d9dca7e4efb03bcd817f1775e578"],["/archives/page/13/index.html","9308dd77e458bea71c33d82213d2583e"],["/archives/page/14/index.html","2e4aba48a4d1c84b58bba7a982393ed1"],["/archives/page/15/index.html","a54e0639457b5818cb66bcb23239a968"],["/archives/page/16/index.html","c383d84bc0d128d732086c7e4dac3e0e"],["/archives/page/17/index.html","a107084a851606e6f82f85d01428d291"],["/archives/page/18/index.html","5f3d444c6bc634298579ad38e243c3e2"],["/archives/page/19/index.html","d2a5c962cf71d86fc345e4f362331d5c"],["/archives/page/2/index.html","b31ea4ce9c6d100a81d800f88dedbf39"],["/archives/page/20/index.html","9e0f2df9c64c6f95241a29dbbd273215"],["/archives/page/21/index.html","d2ec642ff10062b344e606b91e9bb7be"],["/archives/page/22/index.html","9237e137a927b29c41ac3199e6699981"],["/archives/page/3/index.html","2d9cd99b987fcd4437c57517b7737fef"],["/archives/page/4/index.html","81c4588407d6c34bed73eec893568aa5"],["/archives/page/5/index.html","0d3c7b3908e54edca19923056ce980b6"],["/archives/page/6/index.html","02e7c75a553a72ce94b18e9bc0bb899f"],["/archives/page/7/index.html","247d691432d9c8afe3cac08c88226293"],["/archives/page/8/index.html","7026fc391338c026d3b88ac03dde83a6"],["/archives/page/9/index.html","dcc9ba7a0fe97dbfe7588ea9ac97d673"],["/categories/Devops/CICD/index.html","5623c6c39c0b3dd12d27aba9635e55c9"],["/categories/Devops/Linux/index.html","22dfa73f438916e427ab162d292a0aaa"],["/categories/Devops/index.html","be3f8ac1bc4136e93351751c5ba1e93d"],["/categories/Java/JVM/index.html","5eec4d79f34e50c6729dab787e77526f"],["/categories/Java/Java基础/index.html","60bbffb96a9d9634b01ddad780f31bae"],["/categories/Java/NIO/index.html","a0bce09a9e09db4a3cfca4d7d81e230f"],["/categories/Java/NIO/原生NIO/index.html","a27df40fe14e8362d5a5d3cb48829f7f"],["/categories/Java/NIO/文件操作工具类/index.html","e907107083715d1d81dead254a03dd2d"],["/categories/Java/index.html","4c71ea10d960d307276301595b23cc60"],["/categories/Java/page/2/index.html","c94121b894cdb850410f0cf153f61f3c"],["/categories/Java/并发编程/index.html","8aac7b80f33c92881b82be7a1365d06d"],["/categories/Spring全家桶/Spring-Security/index.html","2a92f40ed45d81b25b51cc1568951390"],["/categories/Spring全家桶/Spring/index.html","5bce9e3846b97b2e7659829914ff7da3"],["/categories/Spring全家桶/SpringBoot/index.html","93d9752c52fdc176117c59a32ab6b4f4"],["/categories/Spring全家桶/SpringCloud/index.html","ccb670d2d2c25fb840f17824f00e7fdf"],["/categories/Spring全家桶/SpringMVC/index.html","2ccb2c1a76fbed80fcc61f05baf5ff73"],["/categories/Spring全家桶/index.html","ce5353505f6ffbf7db215ca7751f6112"],["/categories/Spring全家桶/page/2/index.html","0ae4b0943c148da17dc0c052b82c26a0"],["/categories/index.html","f5aae45fcecfb9b166585627bc452254"],["/categories/中间件/ElasticSearch/index.html","99d6544e64c5c75c5cdd1500e9f7e350"],["/categories/中间件/Netty/index.html","bf5908b581e122d6d0fa82c255744d0a"],["/categories/中间件/Redis/index.html","84c21d0c0ab982b46aa3a79ec6bde017"],["/categories/中间件/Redis/page/2/index.html","ae13257114c8300a0efb090fe2028ee7"],["/categories/中间件/Redis/page/3/index.html","7f3299dbae70613d7fa29490f6ea0c29"],["/categories/中间件/index.html","fa6f10aca147e91fab28d7d937f7e9ca"],["/categories/中间件/page/2/index.html","4a60f1d499db1176ca3a6184714ebd2a"],["/categories/中间件/page/3/index.html","059b8b555c78e65716f9c905e1b1e1bc"],["/categories/中间件/page/4/index.html","108d3217609ef4b9450839ba3d469a32"],["/categories/中间件/消息队列/RabbitMQ/index.html","4f1a10f996fa600d1894d039bd25a386"],["/categories/中间件/消息队列/index.html","c1bfdeda858e4be4ece74fdb288a4842"],["/categories/前端/Mock/index.html","f936c72dc08851164df99b44b6d55797"],["/categories/前端/Promise/index.html","a3eb8b3795e64371f107663fe590e5aa"],["/categories/前端/Vue/index.html","4e9fde086ea95fe3271bfbd5e6af3721"],["/categories/前端/index.html","48315626ceb3c4b4da3f01b0763116c3"],["/categories/前端/jQuery/index.html","251609b930d72b923679ada0956c3746"],["/categories/前端/page/2/index.html","76ae7645fb8809113289173a42e47530"],["/categories/前端/原生基础/index.html","07a0eeaf02aaee57d388b050e8a6d507"],["/categories/前端/异步通信/index.html","e9bd65f063480f38e0a271f0623e9a4e"],["/categories/工具使用/Git/index.html","263ec6422808b16f3a54675402056beb"],["/categories/工具使用/index.html","898a06ce327073f38732dc130e4360c8"],["/categories/工具使用/markdown/index.html","5f62e1d6557fa63c1ededb17dc9f5d77"],["/categories/工具的使用/Docker/index.html","b70c4866564cdad5f899f2e0ca0aa6ee"],["/categories/工具的使用/Nginx/index.html","e2d6215465e5a0c7f324f1215050e4de"],["/categories/工具的使用/Swagger/index.html","d3b94329df8f80c48fbb4ba242e06e73"],["/categories/工具的使用/index.html","5a1868c4b0277d1436f62cd6a48d4a52"],["/categories/工具的使用/博客搭建/index.html","f00a0ed0c346e3c7ed66761980c7e86a"],["/categories/数据库/MongoDB/index.html","24bcd87137c36b24bdd35dca24e500de"],["/categories/数据库/MySQL/index.html","7b6b59fa4fbcc229f696f480655a69f7"],["/categories/数据库/MySQL/page/2/index.html","351b96845a2716c0e202556687a8b5e9"],["/categories/数据库/MySQL/page/3/index.html","2b522ad682b78288d14efd17eaf6d01f"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","b5f712d82f0b4fba795525e5b7cfe412"],["/categories/数据库/ORM持久层框架/index.html","59d453e452fc986d48dcf24d147b4e49"],["/categories/数据库/index.html","63d74972608ee1029f7d4c62db070a34"],["/categories/数据库/page/2/index.html","e68b7df05f85c2bf59da0f7b41eff7e7"],["/categories/数据库/page/3/index.html","0d64d4040ced6e0628c2006b26bc8c9c"],["/categories/系统设计/DDD领域模型/index.html","cf4044f66945cbbd58b927fa2ef6fefd"],["/categories/系统设计/index.html","8d261f2c46a37d5adaf12a83184eac8a"],["/categories/系统设计/page/2/index.html","841dd62f01623be5a7287b12813d9ff4"],["/categories/系统设计/page/3/index.html","b6e047eaa244090fecfda14deca2193b"],["/categories/系统设计/page/4/index.html","a334e95314c248a58af663833c3c4878"],["/categories/系统设计/分布式权限认证/index.html","c90864d2c9a6bdcf9f79230104d7b386"],["/categories/系统设计/分布式系统/index.html","c126cf22c5e204029dc3006ab2291ba2"],["/categories/系统设计/分布式系统/page/2/index.html","03ca61d9b2440fe0267008072a01a5a5"],["/categories/系统设计/设计模式/index.html","eb5b15ebbfc96aa978c236b2bebd1562"],["/categories/系统设计/设计模式/page/2/index.html","8962cd754d892f802adda8637dd868fd"],["/categories/计算机基础/index.html","a38a993657bf3abd523a06db8fe55a3b"],["/categories/计算机基础/page/2/index.html","170b80acdd7517b3e9c6e744b9548f6b"],["/categories/计算机基础/page/3/index.html","1cc0df5b6ee6a458b4dbf0fa5f747f0a"],["/categories/计算机基础/page/4/index.html","777674f96f6101126c66b34a5abc36bd"],["/categories/计算机基础/page/5/index.html","836b725051bdbf8e677af93027da287a"],["/categories/计算机基础/page/6/index.html","f43b888d8c4ce1c3079177a8beda6c5d"],["/categories/计算机基础/操作系统/index.html","f7a5c1166a144da99d747e96fed172ff"],["/categories/计算机基础/数据结构与算法/index.html","6cfd6b1c92141a3798541f21646055ba"],["/categories/计算机基础/数据结构与算法/page/2/index.html","f20d4123e1150a9914a26baa7aaa0c57"],["/categories/计算机基础/数据结构与算法/page/3/index.html","bc90b4c1447922963f0e08185d740cf5"],["/categories/计算机基础/数据结构与算法/page/4/index.html","7fecb3abe739c3be65a61521961d2347"],["/categories/计算机基础/数据结构与算法/page/5/index.html","36c2064e7636c78b9cf227f2d40616f8"],["/categories/计算机基础/计算机网络/index.html","e62d166032d309bbf14f8e7a367dee37"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","2d7e570d3b7f35d084446b4a8d9563eb"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","94666f6ba5adb799b86faddbba647a03"],["/messageboard/index.html","149ddef81f27c7ca51b88f53dad25050"],["/page/10/index.html","74fe4c7180ebd5389019df4ce576beb2"],["/page/11/index.html","9edc551149aad75feb79b5e6d82e196a"],["/page/12/index.html","30abf27c2c15a7249dacc4d5458ddbb8"],["/page/13/index.html","47e1e4adfb6ccd207754efec18e1a4d4"],["/page/14/index.html","eb85240bc159b9889ce30cae9cd56f20"],["/page/15/index.html","b07502654d1077260f54dfd0ad44f652"],["/page/16/index.html","ee3e14a41df90012f1cd8cfc1e5b6b37"],["/page/17/index.html","eaeda6c8496ed56946a6c4a5accdd506"],["/page/18/index.html","1a5b4fb4c29c2780c68039833f7ff4bc"],["/page/19/index.html","d0c2e53493d078cf7f3a55557ee9956b"],["/page/2/index.html","e425b1651e3fbcdb82b08fbfeb5b095a"],["/page/20/index.html","825d6cbd62e78bc735f8f8cd0330908d"],["/page/21/index.html","5792990e6bf85cdaa6a0fd64fd71e911"],["/page/22/index.html","525305535e55f2ef987e651630096c11"],["/page/3/index.html","51f07d8fea27e84377b7193aefaa6639"],["/page/4/index.html","cc3aedf1b3025c40af9856c5e8a7c8fe"],["/page/5/index.html","5bdeec30189cd30a6ae5f12c7f521ccd"],["/page/6/index.html","4ad7884158891681c738dd639fe8f592"],["/page/7/index.html","196aa34d01cca8e7b82624881d9ec0d8"],["/page/8/index.html","fae4e7717f9944147732905c7a6fcc0c"],["/page/9/index.html","149e9bb2a0585a8c86a826f10ee64fc4"],["/sw-register.js","cdb3fb0dbf19baf0620bc1879300f4cf"],["/tags/Ajax/index.html","03f0e4c6826323975a3829f5204111c6"],["/tags/Axios/index.html","0a3f0ad6cc9b59ed81863af7617863a2"],["/tags/BASE理论/index.html","39dea15d6556809dc233ffb331af8dd8"],["/tags/CAP定理/index.html","9b473b5dd90df48a6a7a1b752a24c801"],["/tags/CICD/index.html","8b45a7ad20aa15dbf51dbc7336aa8add"],["/tags/DDD领域模型/index.html","e62664fa428a7f9f5bb2ee4f17b57e8c"],["/tags/Docker/index.html","ff77c0681b0353b5160edca5ad1c848d"],["/tags/ELK/index.html","de5a34f9fef098ca6f7c64422a2a48f1"],["/tags/ElasticSearch/index.html","227fbf0162b85d4fcb9716f5f155703b"],["/tags/Git/index.html","db6710982e4589027d3f47262ec80124"],["/tags/H5/index.html","6fec2cbabc89f0563750570658bd909c"],["/tags/JVM/index.html","e433b0d5293a8db40f3bbc1b3122cf4a"],["/tags/JVM内存模型/index.html","be94841707671755c61b67bc02bb306a"],["/tags/JVM执行引擎/index.html","5a565567ec8b2986e0dbbd1e1f811d07"],["/tags/JavaScript/index.html","f572f87ed4afa7c15c5cdaaf0575b637"],["/tags/Java内存模型/index.html","ba934434d05a98ed94b0f849f5b2342d"],["/tags/Java进程线程/index.html","34dadfb785c004470859b6dff1d860a8"],["/tags/Kibana/index.html","14f143bb713566d8198f4299281bd7f8"],["/tags/LeetCode/index.html","557bd58d4b1be17042af384d3831de39"],["/tags/LeetCode/page/2/index.html","b2843b14ef79606eee3170768df60515"],["/tags/LeetCode/page/3/index.html","54898836b28ae6ea6a83e4dded6c25d1"],["/tags/Linux/index.html","d27fe63e75cd2de85a381301bd458778"],["/tags/Logstash/index.html","9be019cd3fb53f1818143295ea6f1f12"],["/tags/Mock/index.html","730ebf0dbb91d908add658a66048ed19"],["/tags/MockMvc/index.html","aaab43e4aea14ef8645a33d80d587b68"],["/tags/MongoDB/index.html","bafb9cf67aa9136b4159008c8dff8363"],["/tags/MySQL-事务/index.html","07cb8247176ee9519ec21e2aebb3c0c9"],["/tags/MySQL-数据类型/index.html","c3a716c7afe99490125141a48a567113"],["/tags/MySQL-日志/index.html","d1274371bbd97d253e0bafa9068256d9"],["/tags/MySQL-索引/index.html","8cc05de6c980bb264f2d1fd500384de0"],["/tags/MySQL-锁/index.html","1e2a0104a54594426c887a818f13622a"],["/tags/MySQL/index.html","2d387ac95d48a57c17c567f3b9faca04"],["/tags/MySQL/page/2/index.html","758e04c860ad167082817055c1abe712"],["/tags/Mybatis/index.html","d669dcfd4c0477e83ce58b2a364cb48f"],["/tags/MybatisPlus/index.html","2615a163d56eb05b40b65f91c223fc6d"],["/tags/NIO/index.html","6a77cddc594e2759cae770b26f80110c"],["/tags/Netty/index.html","cd8d681aa57e40a747127cc643b81c04"],["/tags/Nginx/index.html","cc5ae0c11c5da7957d33c1e4073d5591"],["/tags/Promise/index.html","18ef3dcef7affdfad43bf9524338cc67"],["/tags/RabbitMQ/index.html","24c5fa94b6b419cb36355167e5a24232"],["/tags/Redis/index.html","a59b779419bb103ef47e94e027d2c8ed"],["/tags/Redis/page/2/index.html","8c5b82f2c5223b553d38eabe0a3ef7fb"],["/tags/Redis/page/3/index.html","52f4d70583c5cb22ae67cd2b94946852"],["/tags/SSM/index.html","e75b4e405b640f18b0e8c889182d4e04"],["/tags/Spring-Security/index.html","69c8e45cb79a5fcdfe7a2c8164c4d5fc"],["/tags/Spring/index.html","f05c9161868f4d7b180e5df38f95448d"],["/tags/SpringBoot/index.html","4f97b6de935dc337433c97c67b2ef1e3"],["/tags/SpringCloud/index.html","d18010f32aab6ed8ff706f6d026b079f"],["/tags/SpringMVC/index.html","72986e387edabbc10370055680e1c918"],["/tags/Swagger/index.html","8186f392357be2c8bd29d202df407097"],["/tags/hexo/index.html","d1e35708e44154257463eb838e70c4c3"],["/tags/index.html","56e310481355a6497e2e90acc9fea3dd"],["/tags/jQuery/index.html","f40fd92104671e301ef4fa626f2f0c88"],["/tags/java/index.html","dc578411ac7db1760871ccb019bd822e"],["/tags/markdown/index.html","3ae9878efe2a9479290ffae20e0da4bd"],["/tags/noSQL/index.html","1c78747d1f4d54b4f3d9a487f908877c"],["/tags/typora/index.html","4ec39cfdbac22d12eb920dd56e62f2a5"],["/tags/vue/index.html","0b9bcc30b7936d03ef7678b7b819efba"],["/tags/享元模式/index.html","2b10427799aceed71d33162692064552"],["/tags/代理模式/index.html","db1831ed80edb97565bd6f1e7b2c14d0"],["/tags/内存管理/index.html","ad9289326f9bd402ba4c4cd379d558f9"],["/tags/分布式/index.html","edb39c06b2059f400816ed95e26677bb"],["/tags/分布式一致性算法/index.html","a4625de97cc0b50c25d9ebf677fe870a"],["/tags/分布式系统/index.html","87aeb8f96987953176f8f99d44020600"],["/tags/分布式系统/page/2/index.html","1f16e582d3219b4d55790e2a89bfbdf2"],["/tags/前端/index.html","cfd4825b8916a07e1026ba989cd4a40e"],["/tags/前端/page/2/index.html","69e694c0de7b62d783511d145df40d4b"],["/tags/动态通知/index.html","6ca1723a6c26d6713236d0e4a6c31d24"],["/tags/博客/index.html","b5f2be1ef7a0d14d91d37bf025a98bd8"],["/tags/后端/index.html","2eb71ca3aec5becf7dea2308292c1d9f"],["/tags/外观模式/index.html","4bd1d893462309b4badc813a22f3a36f"],["/tags/多级缓存架构/index.html","9bc5bd6eada466090156156004c082e9"],["/tags/多线程设计模式/index.html","c48b26fb881900adb10154f46de67634"],["/tags/容器技术/index.html","60412e1f1bbc7cf00ca58c575cb85cc9"],["/tags/工厂方法/index.html","4036dbc0680a08d6c7f3ddc8610481cf"],["/tags/开源协议/index.html","1a9dc72c60b86ad883c3fecef0a1175f"],["/tags/异构同步/index.html","34a09de778a1f4aed2308d2a31430b12"],["/tags/微服务/index.html","46d1a447063d6153f861c14ef2a823b7"],["/tags/抽象工厂/index.html","f537e35e90b509cfa6610754b35a60f3"],["/tags/持续集成持续部署/index.html","2e155e61a690b6241383f3fd01be748a"],["/tags/接口幂等性/index.html","84ae9cf596ea5e88e2adfef8e866b7c3"],["/tags/搜索引擎/index.html","1cf83840282b60ed0386e2e251597e61"],["/tags/操作系统/index.html","20268285c8ba00666adafc21c73ffcca"],["/tags/数据库/index.html","1294e767134eed794fa3397aa8c5fd26"],["/tags/数据库/page/2/index.html","30b04b1e1fe07b19daedc3eba90ea207"],["/tags/数据库/page/3/index.html","d468c418be208f763276aa3823b369dc"],["/tags/数据结构与算法/index.html","71cf1f40cbf336ca5ca9f7e46008cdb2"],["/tags/数据结构与算法/page/2/index.html","2d68dad49e9001b0d58dfd7a2c3eb576"],["/tags/文件操作/index.html","3233300e1853a105f7a1311c0a8b3cf5"],["/tags/日志/index.html","54f5072b45f517ff78e4fa99d02362ca"],["/tags/服务器/index.html","da92816f2cf19d3cb758938676bbc2f6"],["/tags/权限认证/index.html","8d8db2e2f8619d4469a81c21b48354a5"],["/tags/架构分层/index.html","4ef73dd9389001e7a2cdcf9e83100192"],["/tags/桥接模式/index.html","4dfcbcdeab0395552ccbeed0c0e72f94"],["/tags/模板方法模式/index.html","bea16dff27227dc0b9bd2603c322de9f"],["/tags/死锁/index.html","08d7bb5e04d46a92da0ba4e45fc05a39"],["/tags/消息队列/index.html","5d2fa75d8aa9b79b6c81dfffb215343d"],["/tags/版本控制/index.html","a6d9ac7c3552d13b945f8ef1e7d59cf8"],["/tags/策略模式/index.html","0b05322086403b58646ba4660f368ba0"],["/tags/简单工厂/index.html","059303bf8f095c20c7ceb8d885a5ddf1"],["/tags/算法/index.html","20411048d8f02aafb4657c7c03c5f69e"],["/tags/线程活跃性问题/index.html","c45dfa7683a8400fa4478d18e0f11249"],["/tags/组件化/index.html","8eace6d5e1d113413992a689ac460af1"],["/tags/经典限流算法/index.html","e58b508d3e96beacf3e6904af0068dd0"],["/tags/缓存/index.html","c193dbc055456c731d61a36e22bbb2cc"],["/tags/缓存/page/2/index.html","328f5236ce022b0a3fdb14a0ee91bcaf"],["/tags/缓存/page/3/index.html","572c2cf5314f465c9872eb888769ad76"],["/tags/观察者模式/index.html","50e212eac7722dc0d9ccf35a1b5015d9"],["/tags/计算机网络/index.html","00890afd2f44185bcc798f27d7356bbf"],["/tags/设计模式/index.html","ca9f4f3d2d67618c5ce65d380eaed8a5"],["/tags/设计模式/page/2/index.html","14ac3d5c321ab025ba067121cd6d18f5"],["/tags/设计目标/index.html","68b34b1ad1dbc00206033812a5b1581d"],["/tags/资源共享问题/index.html","cad23619c68043aa152d968f21712fb3"],["/tags/进程管理/index.html","d62df67eb19210b805f9e6bc0dd1f2d0"],["/tags/适配器模式/index.html","a8ea6c343f8149350dda8f0884a745d4"],["/tags/通用设计方法/index.html","060484b3be6748e944d49b506be491b2"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
