/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","57d332e878ad3ff94994c4f808ce4e4d"],["/2021/02/22/工具的使用/博客的搭建/index.html","3a9234ff960164bdf74d87a39e92ba6d"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","5c7529cb919aaad31d85865d201395c8"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","9c7367bb07ed85152d67fcd48c12d96f"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","5451b3e5031b9f074f59d8c660af981d"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","9c7087d1cb6c2c372ab2ef59b635b79a"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","8715d9ea85151ac38b2532550e3ffc64"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","98189c2da13d6d9b948581bdd276c70b"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","de453806185c2f7fd6c9741b3ee6a407"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","29885d6174b8a519ac7e191a1516b324"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","ab6500667979b7a13133a5fb1a043782"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","12de99094d90286c00235d2a851eef6f"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","3a67eb8a707ef34b5e0756c7f3a2b4a5"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","a5b4d00ba21c5dc9be3fd53cfe99be11"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","ae64d234bdf842c14e780ec1ea12eae7"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","35756b5dc8ea672038168fe1cc5a5575"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","8d25930f0a1974746887cdb78a3ff78d"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","f53015df92f0ebca33fdd402842e441d"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","07d68ac451a69665ef30d420d3052ee3"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","dd5f37e2cad26c4456214e7bcbcd263c"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","9da95003db40d1ae93833a5bfad808e2"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","69d45e7c60d8f88eb07dbdc22b06f314"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","10864c170af5137bb6ce9e473df91621"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","a6726e65172054f9852f66062fbe58d4"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","0284e51700ca47b98047af30f968c8e3"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","ddac293e3b3a9bedc0fc723f8993a664"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","5288a935693f0280b7a03ea043688130"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","5bfd6751c0964a3729df8b3b076b6692"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","1c30a3dd50605ba714bb47e9728642ee"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","d14543d1f0498fa6dc8481ddcaa47fe2"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","8e6623c74d736fd25042cb3987a91a2b"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","89da3ee5a6697a4106d88f5d565ee7f8"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","2173d8ad22e2d3fffc3b98f68c37885f"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","9a272fc998df996baeabbda7e65e1457"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","4276135eca51c159ae2f0542eb405968"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","9eac3100c7e9b1c1a7cd1c24ec0566e4"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","bddf0c123fc4699fbd0ca39f189e0e35"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","59d19708dc93646e0799a2d776e8738d"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","2a857bb9cc1023fd8b602b3f6507792b"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","985b7a9e5e9117b0bedd2eacd54fc9f7"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","48f15333e593c15c75590bd3742d509e"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","572c3fe147c93cad768b86b29aaff420"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","1a9e03d395565f7d220c5c438ab56325"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","d5c5ffbdd39c871669c669dc981e9942"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","e73549767c0b52eec5e15b8815da38a7"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","c48f89bb0606570f46b0012f442724f3"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","22c479ddd6e7cf4e0818662b7077c362"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","582bc54a118912ab340b149e2f2f3773"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","192953f5168a88a1151e072af775bd89"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","9d4038f4f55e8fca96c3a3d8e804e77d"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","376b3d8cdd52aefd64c542d90098dec3"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","6f25778ec96522b95d3ac8aee456d805"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","34f321d9c622a7207247380485971086"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","ab3c5f4ff7ea0880bb0d0c68e224aafe"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","9b20e24036dad050ea0c568bd23842ef"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","83571a001664b3ba17f946daa04acb14"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","28b6f1a4f21b4966204a06dcc26d5aed"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","736555349c2770e1ee5129014d1cef4a"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","ec8521216f54e481fd7dbf6f79d9624b"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","5806d62ee1859334290fe19252a3a81b"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","f2340836c177bfdea13d875605d63db6"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","0ce8cf50bbc3a37b410b2c388a0ba86a"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","0c51dbc93820c2426fb78805c8604968"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","f4be474117a6eaf38a1d23ecda5bddc3"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","93a52407962462dcfb674b3594cbbc33"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","623de58fe472949f4a863a23a8bb68ff"],["/2022/08/17/前端/jQuery/index.html","2698af5811fd08e64184244e096b79f8"],["/2022/08/19/前端/JavaScript/index.html","acb2a2d7b7e080e52e1dd512eac303e3"],["/2022/08/22/前端/Ajax/index.html","1119f478eb0ee130e4da0c790ded2eb3"],["/2022/08/23/前端/Promise/index.html","5a7da9d5c6415636907635be7469dcdc"],["/2022/08/24/前端/Axios/index.html","536f966189d8ac981bf28904956dbe06"],["/2022/08/25/前端/H5本地存储/index.html","9172de386a63a014f996bfa791f1f5ab"],["/2022/08/26/前端/mock/index.html","ee3741e9e6fedb986632e663b4005270"],["/2022/08/31/前端/vue/VueJs/index.html","63de0efb33534a46f9c13fadf4713608"],["/2022/09/01/前端/vue/vue组件化/index.html","cd6fe1b97d4e23cec0df724233f8d1be"],["/2022/09/04/前端/vue/VueCLI/index.html","24c17049bc63b216fc86c626ca40cc2d"],["/2022/09/07/前端/vue/vue实现动画/index.html","e7b0ab430e52ce439124ccbe0f92ea85"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","b55a961d49d30a5fe5aa7811819dfdb0"],["/2022/09/10/前端/vue/Vue异步请求/index.html","ebb92446fd5bd91a8e0c83d886983b35"],["/2022/09/11/前端/vue/vue-Router/index.html","b9e5f843b13acbfc41ab0ba3ac701810"],["/2022/09/13/前端/vue/Vuex/index.html","cfbda038a7a769f3d162559d1a7efacd"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","754b37c1d2418b28c29461ea83083ed3"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","50455ff390ebe1bfd2161c5ec794096f"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","618caf24f6e36621d9461931e416333b"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","71b8ec4d1d48cb68b3440d548c09020a"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","a3bc6e2671bc0d0980e4b5bd53ac71b1"],["/2022/09/28/DevOps/Linux/Linux/index.html","d438ac3d69e483021c1df72a76b60800"],["/2022/10/02/中间件/Redis/redis基础/index.html","01ffe537668f03539b4fce6de9ab6426"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","75bce2348eb44983817834a3fdf7c6ff"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","f8382ae9a9b152e422d3cf18c9255f57"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","4a9e8efea5c5d6eb3bbbd388a5994c25"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","c0e93a62b3c7f9ed5b45e9e4d2ff60e1"],["/2022/10/17/中间件/Redis/Redis集群/index.html","a3ffc58deb68ebeb2098774aee3a4d4b"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","1ee92bcff86808b13e5f1d8ebe68af24"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","0cde85904854dc9f74690d322bd6b7f6"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","b2f53c29be4039c4e5601a8ca5e67e97"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","ae3f14ba9e90581d760813ecd379a270"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","c89dd690b8e64f1464188132717d006d"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","af8735401b2e8a9b0b9057851b7ba44f"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","e6697f85ec1a9e1d7f02fa1ab2757503"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","84fd99e798e5500a150b542ca4a22f20"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","86f37cf3910bbd41fab8de4dc06e54b9"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","89d46e499041a9d7a929d168cbd6de9d"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","e9125eda95ff8d8ad369d254f78c10f4"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","f3b53737516113cd3a19bfcef1a093b4"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","9835584efef1764fd853db9181653913"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","9d0672500553e025aa054d2dd67524b6"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","c0dde25214774821db24eea4566b3e15"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","badb3291b84715c4b5b6583ff225048e"],["/2023/03/10/DevOps/CICD/CICD/index.html","e0c58369fd841fb49cf60693ada581f9"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","ab9b75f52aa2cbac1702ff1cdf48ec0e"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","f53ce65115d3ca88ea5a86b65e968a77"],["/2023/03/13/Java/NIO/NIO/index.html","3a39d0dfd6a03a731ab1659d5007b195"],["/2023/03/14/Java/NIO/Netty/index.html","f052a49f3fb3035e241ea1667a6c1dc4"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","69776e0bf1531c356cb7ceacdad110df"],["/2023/03/17/系统设计/分布式系统认证/index.html","c9db52a7b9387c468df6c4d7c9477821"],["/2023/03/19/Java/JVM/JVM概述/index.html","c76ce4a9aa22574c943c824e1992f970"],["/2023/03/23/Java/JVM/类的加载过程/index.html","0f91c4cbda061ede6684355bda9f062a"],["/2023/03/28/Java/JVM/对象的实例化/index.html","17756181cd6d1d6039a5f7c5cb7f580b"],["/2023/04/01/Java/JVM/运行时数据区/index.html","b13352ab759d9e37c7016d5cdcc8899d"],["/2023/04/04/Java/JVM/执行引擎/index.html","cdfc938956f7d23556e6ce75f331dcce"],["/2023/04/06/Java/JVM/对象引用/index.html","a06f02c41db94ead1ce4b4485d7561a8"],["/2023/04/09/Java/JVM/垃圾回收/index.html","4b356009288458f3793cbe2ef6815926"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","108471f88f4bbfa0d35334e7b8b77097"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","82124504394663c86891e48d7657089e"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","c6256a201fb95ee13347f92500d26a4f"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","0a44d91679bc2770208d22dc340e5b21"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","2cbb878b5851c4eb2ab439577c6a8923"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","eb66b199a3c49c09d217a9bc64cfc220"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","b75147847e163106894ff1bba6922c95"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","d71b0baabb280137c867aa5a89536c04"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","bfa1e54ad5182f0fb5c9fdd72f0aa178"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","2378bc08e2989dd97b2b94fd0e722c0f"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","245f2c2a357c7d8264a5c3b9bbe98549"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","473157c3240b40d9301d5ddb4275f243"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","bde1635bb28241aa3b484d67a236089d"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","233e47f534f2e69811a54396bd56a2a5"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","01c898774b033aa672a9922b4799e698"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","50d3647ad230e25832d7e9140eeb18a4"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","1ff93d0a9eab250f96cbddd4a661678b"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","328179bf921733e55d40908d80d6816b"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","4ea5565f534910cea4702b7783ffe629"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","c0c9883a611c0cdaf5f41a2648608bd5"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","ed0866eb8a9d809abc593684072e5a9f"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","8804a143432dc3d5afa5bf2d9145c7bf"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","f750d3af31631254bf6eb9ce1ba3e6de"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","ad23ab7e1c1d8b847f11f7fa2aee3ebd"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","b247c4121c9e53f61c5572e6351bd087"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","157376806346bad4518f0eaac8f25c69"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","8f47933d4615b692f7370fdc1c7872a7"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","356d256502f9e242c4909c0c4eb62098"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","987828b4efa68a1b2200e5762ba1a347"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","937938a1d8b4df5f440da3f99c81a712"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","4d52119b3c3adbde6e0ccc54961d46fa"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","81c754daa313566a7de8c5071cfb6942"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","cc52fff2c5a258c57950c2afb99aa828"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","cf92d86806206d3404d90b5f5085a52e"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","e2ad0c0f51599932752697d8f6c4511b"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","1d5eb1dff099f42482dc24740a38cd04"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","493e422f7c7355898ce3c45951176cf1"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","a07155f6929e6de90944e2cff965c888"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","ab48f1c27329e58ee9965f0eb8792c5e"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","45497e5c20f55b300f2746c3a2fab0f8"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","1c05d732c21246733d8aae8925c5964e"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","d68f342f50e3473072a1f2cf4cc1d5f3"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","440f0d2f5ea3b1e6f90a5e6095e82a9a"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","146f133192ee53854e3b8cd920b3d446"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","74cdf4f1c916d1bf0b2297070779b18e"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","ea6ac0ec2779384eaa5f074ab60bf9de"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","efa1e899500e3d0263f1f6bd3627409a"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","8064ecdebb3035937892eb67ce4ffa54"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","78c6e789bcf23764274c9ba29ad54b5b"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","039647bb8df500f84d56ef6794eea21a"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","be129e68764d6535d2f07779cde5da60"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","58db98a670b9836c723ff413ade5b2cf"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","b3c5f4cee1fb8a734d5b4f2cc6023386"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","784efda60a6d8563dc370e33d6628a68"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","6d562374b9541f874a4572c514840692"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","94c112a34f2eb85ca22dab428c327847"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","5317a4185c9cf429c58b9791a9741971"],["/2023/09/04/中间件/Redis/Redis事务/index.html","1ef69dd44a94cf28148b153083d54ba2"],["/2023/09/06/Redis主从同步/index.html","16f6ae3706a3cc969c730661c918409a"],["/404.html","cb1d37360aa7e41f93f26e04fed03229"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","934d43db7cdee97d39080062039abf4d"],["/archives/2021/02/index.html","cdf7454d6dc704729ab96ad4f396c304"],["/archives/2021/03/index.html","13c0492b252d0db89f2bed2fa4cb3fb0"],["/archives/2021/03/page/2/index.html","2c0c01bfec398ec337cdc1df86604b00"],["/archives/2021/03/page/3/index.html","2c45fc824488415c828efd1e5a9490b8"],["/archives/2021/04/index.html","521dee261c2064639d78ed6710cc03de"],["/archives/2021/04/page/2/index.html","a416dc3efb3b026cffdcf16cf72cd60d"],["/archives/2021/05/index.html","187900f623340b61b9dd5b85d10ef21b"],["/archives/2021/index.html","848225b55fb4b4f33c14acb11d1476dc"],["/archives/2021/page/2/index.html","e6db173e267b055af198f9180f9ea778"],["/archives/2021/page/3/index.html","1e299e7cf61b18d8ccb7be086c3a31ed"],["/archives/2021/page/4/index.html","dd131ba55c2cf3f54be8ab6c74dab3d3"],["/archives/2021/page/5/index.html","7c789ed8988800ebdf0a1ec939375797"],["/archives/2021/page/6/index.html","af1cd9e501852c3baa1220528455c53b"],["/archives/2021/page/7/index.html","12109e336ee7778246f14a74c3ea91e2"],["/archives/2022/01/index.html","31b8c01cdb34d83ba88c0b3b305462bc"],["/archives/2022/04/index.html","cc8b4c8827656056000d31bfa6c8fa57"],["/archives/2022/08/index.html","f9010c600b9b935d3d135a0791c5c69e"],["/archives/2022/09/index.html","a08864491d3b5b6c8cbec363caa46da9"],["/archives/2022/09/page/2/index.html","3fb282fc83afe6c009af016b0855eee7"],["/archives/2022/10/index.html","33ad39ced1a77fbc2f3252d65fdfc30d"],["/archives/2022/11/index.html","946d1533474d1c35d16670107ca04d53"],["/archives/2022/12/index.html","d7d68b432a23379205f0351e89d09b9b"],["/archives/2022/index.html","7e378eece5a04305ca759281d4e1a9e3"],["/archives/2022/page/2/index.html","c476dbcd21a01e1e48a78bba9a7b4ef3"],["/archives/2022/page/3/index.html","47efd89f56f389f0f350db38ed26f2b9"],["/archives/2022/page/4/index.html","daceb4e637a4e87e0c3190bc0122cf51"],["/archives/2022/page/5/index.html","3eef774c858a7bae3c6d49ec99595c45"],["/archives/2023/01/index.html","45f5729a795425f128c07d3d888eef95"],["/archives/2023/02/index.html","e1dac27be3b6a0864894b0864bdaf248"],["/archives/2023/03/index.html","fc0d898a91a8a40ab8dbe2b5f03e9948"],["/archives/2023/04/index.html","580687a5ab0f61abf69ae5da41ab81ea"],["/archives/2023/04/page/2/index.html","ae0da8e9e3ab557c8f0c34fd69b15c90"],["/archives/2023/05/index.html","98196d58ace2ea86eb24e0dd5590f0d6"],["/archives/2023/06/index.html","d8e02b695652a97862d443f1780efe55"],["/archives/2023/06/page/2/index.html","70935ee10b04577f188b3f794585c249"],["/archives/2023/07/index.html","4082d8acf61d3f4bdd13412b85e9ac64"],["/archives/2023/07/page/2/index.html","01f929b2e8749d2177a8a50c140c0c25"],["/archives/2023/08/index.html","c14875c315197ffc04b7a3aecfaed219"],["/archives/2023/08/page/2/index.html","f9fc5e514d65550f0eeec5ecf100b535"],["/archives/2023/09/index.html","e817f81e44f6ff0706085a220ce7e935"],["/archives/2023/index.html","a77b29052cdf849e63833900d8824a5b"],["/archives/2023/page/2/index.html","204b71b355f913b599ea4a7efce20984"],["/archives/2023/page/3/index.html","c5a21811e1b7fceb6179dd937183cb56"],["/archives/2023/page/4/index.html","a262407d5e66b83fc60ae6288f046de6"],["/archives/2023/page/5/index.html","6369d5b026d45ab74215e549ea50ab98"],["/archives/2023/page/6/index.html","2ec41a3c001eb7e9155f4c2488e6f670"],["/archives/2023/page/7/index.html","8e39693926d65e2452e4e4098ec11dd5"],["/archives/2023/page/8/index.html","66ea02a6ccd0a09740f63d3e031286c3"],["/archives/index.html","4fd3887876b3d39baea6cd59dd82ef00"],["/archives/page/10/index.html","81289c0efa290849bfb8912a68b3b7d7"],["/archives/page/11/index.html","2880119f171bc6ea68f34183cd336f4a"],["/archives/page/12/index.html","d642e5f50ba08a693611bae2a7b14075"],["/archives/page/13/index.html","13f79d61c1bb0d64b4e5d115497b4303"],["/archives/page/14/index.html","b33fba9b734fcc81f00b729dfadbd500"],["/archives/page/15/index.html","686a18d4c73390be2579ce148ffecb3b"],["/archives/page/16/index.html","0901222f8f3ab2a6c5fd9026660316ce"],["/archives/page/17/index.html","5edcd3b0c3307d956ed0e07499c3977d"],["/archives/page/18/index.html","b5a5348170dd37593b21411d1adabc0a"],["/archives/page/19/index.html","b8ef0479a9e874ee73034677ee2105da"],["/archives/page/2/index.html","3d8db96e7a12ccc0eb500f3d57057e65"],["/archives/page/3/index.html","538f4a7d86ad33a9c14c55666bf1cfd4"],["/archives/page/4/index.html","cc6481cc7b7ee6c8c6584361a0dfe456"],["/archives/page/5/index.html","b8ce64458716d05e25b92fc4a557680d"],["/archives/page/6/index.html","fe6df02c8a150fdf79bf475922fdf276"],["/archives/page/7/index.html","eaa429eefa51b50bc4821c2d1ddcf66c"],["/archives/page/8/index.html","9d92c4bf4a472b4f6080bfb7a8bcd79a"],["/archives/page/9/index.html","e50fbf73f7467aa908b7ac8a627d7123"],["/categories/Devops/CICD/index.html","ff0041d4c0bee0b75c529ce5289a23fa"],["/categories/Devops/Linux/index.html","2862c075d7e4aacefe75d448896c5f64"],["/categories/Devops/index.html","b23ff396f4b89cf56528d9edbe845c63"],["/categories/Java/JVM/index.html","c52c10465aaee33988f57660d0ed0edf"],["/categories/Java/NIO/Netty/index.html","9d416a400534f08ad3d9e07d16660427"],["/categories/Java/NIO/index.html","85b29cea4cbeed55e7de1b5937b9315f"],["/categories/Java/NIO/原生NIO/index.html","d6e0f2d89922c1760e9ea8449d77734c"],["/categories/Java/NIO/文件操作工具类/index.html","0ec45f0d2024e6eb9141628196966446"],["/categories/Java/index.html","6a1860438f90cc040128d7f854260a5d"],["/categories/Java/page/2/index.html","9c18790bebc6ce2cdb79d68bf2fb804f"],["/categories/Java/学习路线/index.html","5f11be6b8137afd0e2e8cc29063b22f9"],["/categories/Spring全家桶/Spring-Security/index.html","44b4d31c744db8f14e644b8acb40f07a"],["/categories/Spring全家桶/Spring/index.html","bb78bc6ece6e4eeb2493a874dff16ae8"],["/categories/Spring全家桶/SpringBoot/index.html","391002e6459a32ebfc3015fa231f3aa4"],["/categories/Spring全家桶/SpringCloud/index.html","66206c90c8fad4c03a9ecb6e236820d8"],["/categories/Spring全家桶/SpringMVC/index.html","6dfdcf41909c9984f00b93003e29bbd0"],["/categories/Spring全家桶/index.html","c61e4c0d7243fb263b800d6334472398"],["/categories/Spring全家桶/page/2/index.html","76a65a7a824a0897cb9d597a462e105a"],["/categories/index.html","67aa6bed624a4eddf5d9307feb5d37d3"],["/categories/中间件/ElasticSearch/index.html","9f973b157ac8a0a9ad47f6dde9aa6707"],["/categories/中间件/Redis/index.html","9c28902bcb3646b1e7406741bcd829e6"],["/categories/中间件/Redis/page/2/index.html","1e3fd7c8839b215b6c162075c69a000b"],["/categories/中间件/Redis/page/3/index.html","ca85f4fd887aefeec70695cd094cb7f3"],["/categories/中间件/index.html","02e809cf95cbe6d2fc987cb4ce3507c2"],["/categories/中间件/page/2/index.html","f983a1667f17e437d33112e79404a299"],["/categories/中间件/page/3/index.html","a7dca8202042718c38f7f61f4bdc6be5"],["/categories/中间件/消息队列/RabbitMQ/index.html","42f743e19d8709bc72924e7087fa43e5"],["/categories/中间件/消息队列/index.html","22b3cd5f37678bbdd8b411c3a5f825ec"],["/categories/前端/Mock/index.html","bc9047ac0f5ff9201dcaa0a073c5b0e1"],["/categories/前端/Promise/index.html","eddfa76dd6b219c004cb07d0e6842382"],["/categories/前端/Vue/index.html","f6488fecb3c4c90f53d8ef5f38400b3c"],["/categories/前端/index.html","8a9eeb7dedfde2cd1cc35e8cbc62df48"],["/categories/前端/jQuery/index.html","adb2e6a5947df357a4422213397dee29"],["/categories/前端/page/2/index.html","0e21cada334b183e58fadee44c7c30ab"],["/categories/前端/原生基础/index.html","d86728b87d0491ef6a9e66ae3e086c14"],["/categories/前端/异步通信/index.html","a75391f55d66b1ab8b9c418450184d1f"],["/categories/工具使用/Git/index.html","2dd5d2dec5af5825dec98425b7bacac0"],["/categories/工具使用/index.html","6498dce6d952f5a9edf916672b302d00"],["/categories/工具使用/markdown/index.html","5ec32907cbf6707a58626b232e1d6d9d"],["/categories/工具的使用/Docker/index.html","c94f3ca02f6208194a32765cdea00fdb"],["/categories/工具的使用/Nginx/index.html","6c40097eed09d6b7e0994e746f46aa2d"],["/categories/工具的使用/Swagger/index.html","3cf43c12c242d2abb52ae19d8c8d2601"],["/categories/工具的使用/index.html","dc9f95f039116e19ed6eb264bfe11dbe"],["/categories/工具的使用/博客搭建/index.html","feacf2065769dcc01451a10dccfbf212"],["/categories/数据库/MongoDB/index.html","8b3e291bf9b8d8c3a1621e66488f5bc4"],["/categories/数据库/MySQL/index.html","bd9cf7b2f66928d0e8f6666aa85a4d53"],["/categories/数据库/MySQL/page/2/index.html","395d4bfd45894e22566ca601ea8693a1"],["/categories/数据库/MySQL/page/3/index.html","0ef2b87a236dac5ce437b32b41900770"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","0c36127de5e55ce8748b03974db51317"],["/categories/数据库/ORM持久层框架/index.html","1127319a589ebe5a371658333ccca8fc"],["/categories/数据库/index.html","03bbcee4a02b2a32257a7874373dcb09"],["/categories/数据库/page/2/index.html","be3f07d31038717a43332e4c7d09bc76"],["/categories/数据库/page/3/index.html","3f59cc10cba33099cf146c9eabea34e8"],["/categories/系统设计/index.html","0e3c04c88fad4fadac085671c61635cd"],["/categories/系统设计/page/2/index.html","71ff7d1cb835946a66372e28f69c593c"],["/categories/系统设计/分布式权限认证/index.html","75c1b9be5f8a8f53577ce7019c5f9076"],["/categories/系统设计/设计模式/index.html","d9a497b76568f632511f021205ed8679"],["/categories/系统设计/设计模式/page/2/index.html","e57d3b33e97a4a059499cfe9b7e93c5a"],["/categories/计算机基础/index.html","c1e835661aeacda0ea0494a84d2b6f12"],["/categories/计算机基础/page/2/index.html","efd7110be947bcac08cbc036ec524b63"],["/categories/计算机基础/page/3/index.html","0f16b8ef641f0c9774a8ae701cfaf396"],["/categories/计算机基础/page/4/index.html","0c871a5112d8b1affa04cbc9bcd4b3f4"],["/categories/计算机基础/page/5/index.html","303fe50c5ce443f87190985a1015821b"],["/categories/计算机基础/page/6/index.html","1e71a027644efa05ba3283bc3b29e35a"],["/categories/计算机基础/操作系统/index.html","2431dd18c9d0d1d966a4137f9f67c41d"],["/categories/计算机基础/数据结构与算法/index.html","56d44a51e523085812d71938c31f0681"],["/categories/计算机基础/数据结构与算法/page/2/index.html","307aeb85b3a77774f1d4871f89364b37"],["/categories/计算机基础/数据结构与算法/page/3/index.html","db1009c133cd39b0d444dfd65aa54759"],["/categories/计算机基础/数据结构与算法/page/4/index.html","b724a9f3ae51fd9c221d51d20548cc3f"],["/categories/计算机基础/数据结构与算法/page/5/index.html","06da09f4ab304851ee9faa6056c76116"],["/categories/计算机基础/计算机网络/index.html","6b335651d23f098841efbbdffc8d85e7"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","73c1c1c9d617342c4540078f321f8252"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","23f68d8d559e8905300326ce692a11e4"],["/messageboard/index.html","13117fc7d826e2dd676c18dde9f6cb02"],["/page/10/index.html","91613f9a5cfbbe098890f57eb8cde9d4"],["/page/11/index.html","b8c76f727a29d2b38373d69145c8138f"],["/page/12/index.html","b44b19ff37c4ff97d7508b0b32211878"],["/page/13/index.html","5cf866368a5ae1134e2c5e9cef79abd1"],["/page/14/index.html","86ab42164e1a0080650aed0d49aa626e"],["/page/15/index.html","a684035e3864b28582157cbd18c27507"],["/page/16/index.html","766fe57f3cf2f26721035ba8570cb5ab"],["/page/17/index.html","4adb72b51ddff70edb85b48da213a292"],["/page/18/index.html","d1f47a0862c498a720e29ec0a2ab21b5"],["/page/19/index.html","8bd1a8f136bb22d8891d65dc3c1b7a97"],["/page/2/index.html","8dac4d0a416245222ef8ac18aa66af1c"],["/page/3/index.html","84db6fce0a5d0c93d9e269566b46f9fc"],["/page/4/index.html","9c9839c396d36e9c5fdf123e73da2808"],["/page/5/index.html","a43d78ecdd068b923ab81b508aa6386b"],["/page/6/index.html","9da89697e346d813aeec3db3b65ee03d"],["/page/7/index.html","c152f0cb3cc131599b50c3e20f00695c"],["/page/8/index.html","72fba1dcc9d953a24e926df4d276b7ea"],["/page/9/index.html","7a4e8b290d1d97f8f33c3645ea6d28ef"],["/sw-register.js","01cf20c9e225c1e3c1d01af31e253ea1"],["/tags/Ajax/index.html","156e2178067bc538609ec449e01a6fd2"],["/tags/Axios/index.html","e66544349951c13d550e65c0e3b74015"],["/tags/CICD/index.html","0e20cd05e46e2f23a723ffc7e3ceeae7"],["/tags/Docker/index.html","62a9a2a03d3c02c1141964f7f070fb02"],["/tags/ELK/index.html","c03ab1644d47aa390f1b9ef3c8f097d7"],["/tags/ElasticSearch/index.html","31b7ab2cd16cfdf131411ff8aa55291d"],["/tags/Git/index.html","123fd0168a73b9332803d297cb213c0f"],["/tags/H5/index.html","29866da3401ba6efd5cc7d9284820867"],["/tags/JVM/index.html","81e76240afa64261a39efa4f03e612c8"],["/tags/JVM内存模型/index.html","474b1fba8943236371f58ee63db058f5"],["/tags/JVM执行引擎/index.html","d04f80086eb1263e84b8510463a5d1d5"],["/tags/JavaScript/index.html","e05595c3a2b3869de595d09f29431952"],["/tags/Kibana/index.html","28ae83515a503063604f3eb876be28df"],["/tags/LeetCode/index.html","4e36e7f91a9bab87a70db0e83893a5f8"],["/tags/LeetCode/page/2/index.html","404c034cc8b71c03be3f3e163b2f8d85"],["/tags/LeetCode/page/3/index.html","11729463276a57ba90326085a034278c"],["/tags/Linux/index.html","1d2013d6e900fad96a87e1962f5344bc"],["/tags/Logstash/index.html","3bd36be6c2ee34b8394522bb5cce6b38"],["/tags/Mock/index.html","88d9739fcaf3633d6a99c6a69809a7cd"],["/tags/MongoDB/index.html","e473b1decc59a03659c857bef862d6bb"],["/tags/MySQL-事务/index.html","f54decbabb20442f4635a6be800df7b8"],["/tags/MySQL-数据类型/index.html","ffa873a5f43bedad98a5dde9aadab667"],["/tags/MySQL-日志/index.html","15b67ba6790abab8d793155be024b967"],["/tags/MySQL-索引/index.html","da69d11d290efcfde3b5e4b4342cdeda"],["/tags/MySQL-锁/index.html","438b38172311dad905c8ef47b1ebe8c9"],["/tags/MySQL/index.html","6ef543d20b349dba42eb1e8d67330428"],["/tags/MySQL/page/2/index.html","b76c3102e0502893b3c44b71431113fb"],["/tags/Mybatis/index.html","6230a6080638fd1ce3fb1d5013829565"],["/tags/MybatisPlus/index.html","9f2fc19e05c657fa0a8b24fe6e54c217"],["/tags/NIO/index.html","ee660195e282569a954c9df461846409"],["/tags/Netty/index.html","fa6e2dd72e6f6214845be67a1dcc77c0"],["/tags/Nginx/index.html","3e6c612c879f76f1f7cf10aeadaa4589"],["/tags/Promise/index.html","275b2a89ad51180212d2cb3517a67537"],["/tags/RabbitMQ/index.html","b67fb2b5e901ffe8c626feacfd988e1c"],["/tags/Redis/index.html","998f3323c51d68d83e97111900c5a545"],["/tags/Redis/page/2/index.html","653f3a1457138a5033af062e17627267"],["/tags/Redis/page/3/index.html","7695444fb66538a48db19c3cb161d1b8"],["/tags/SSM/index.html","a6db78bbd16b8ef4ce43597ce340d2fb"],["/tags/Spring-Security/index.html","65ab9b5c166fa6e2d56b3a4a74ba46e6"],["/tags/Spring/index.html","8914a918da57e4ef602ce2de474d20f3"],["/tags/SpringBoot/index.html","213fc556edb18a1ff6b683a0877da633"],["/tags/SpringCloud/index.html","6d5f8e818e92985442a47512b6a7e8aa"],["/tags/SpringMVC/index.html","b092b98b43b742b4e8888dbe92b216c4"],["/tags/Swagger/index.html","29524c04639d5b5617fbd696268501f0"],["/tags/hexo/index.html","2e9757cdb2b6b1d3b5fb0fdce834a5ef"],["/tags/index.html","e491addedc898143abdb90844902ebb2"],["/tags/jQuery/index.html","1ba5a0a2a822ab6dc7630fe6ba5ef41a"],["/tags/java/index.html","f6800c43059073adc07edd3d26b415e0"],["/tags/markdown/index.html","7d32cdf920251ced3203acbd3c24d88f"],["/tags/noSQL/index.html","bc411afcb6b337819e97545965d149e0"],["/tags/typora/index.html","67267e7a3a9e5381f4dc9a0cb2167a4d"],["/tags/vue/index.html","d45951616256d484b3359401b16589b6"],["/tags/享元模式/index.html","3c37cc9c9523db4d8bf9172878504733"],["/tags/代理模式/index.html","185cb13cc0b9877fccf4c117eaf08bf5"],["/tags/内存管理/index.html","c5d479cad27c25d815ef9ffd9693fe1b"],["/tags/分布式/index.html","889ae237110ed89234ea9c8cfc1d624c"],["/tags/分布式系统/index.html","ffca74fa51aa2f59de33e355cc3dc503"],["/tags/前端/index.html","85a02b8a98916a6a722cf1dbb9a6a32d"],["/tags/前端/page/2/index.html","fb004dbad12ebf10f574b036657fd018"],["/tags/博客/index.html","659349d7d9350885a028107a58c457f2"],["/tags/后端/index.html","0519757693ca8a80bc88d5516716ae5b"],["/tags/外观模式/index.html","0f981a17084498d3f24228725e936339"],["/tags/容器技术/index.html","b57a82ee70b27956bba7640a9cb0f93d"],["/tags/工厂方法/index.html","f6c350e78e4c196a73d3043244f92f03"],["/tags/微服务/index.html","e103304dee9264970bde0cfd86312574"],["/tags/抽象工厂/index.html","debae4fbaed2e4a43d22387b7f2916eb"],["/tags/持续集成持续部署/index.html","007049fbcb3f96e4fc191f4d25414468"],["/tags/搜索引擎/index.html","21254cef4fa75e6438980faa337a5d10"],["/tags/操作系统/index.html","839328a41943b9d8ae616b45bf4f19dc"],["/tags/数据库/index.html","f6bda7d546f4fe9a5cc99f311109dd7b"],["/tags/数据库/page/2/index.html","b7c6eb5d1a77b628590101becc37a93c"],["/tags/数据库/page/3/index.html","b582224fcceb42f355ae81de76a6418f"],["/tags/数据结构与算法/index.html","ec932ac71e81226b6dec09f9a01e61b6"],["/tags/数据结构与算法/page/2/index.html","239cbad03e6c8840dbe627d6ba154e61"],["/tags/文件操作/index.html","f9ddffdc972b06cc781be428a72adf4e"],["/tags/日志/index.html","3ee3d1314ba26c03816af877d4b8ce7d"],["/tags/服务器/index.html","f72a9aab1994d1baba34780559215ffe"],["/tags/权限认证/index.html","4ae47fe349c7b6b6bd01a89810160360"],["/tags/桥接模式/index.html","4df49d63a3902e5385944b39cc221d88"],["/tags/模板方法模式/index.html","6f7fb13385bed1a6c4fdf56b7146beab"],["/tags/死锁/index.html","fe1bf0ff7f70bbb98a5e7a111404f62d"],["/tags/消息队列/index.html","5d7657793c44d05856133f9ca7a1360f"],["/tags/版本控制/index.html","5c63e816b1ebd4c4b721d92684f31733"],["/tags/策略模式/index.html","ed5dae249b6da4f36f8abfdde8e24784"],["/tags/简单工厂/index.html","3d429ae701ceeda40610c5577c1e6252"],["/tags/算法/index.html","f005633bde53e10acdaaec573f14936b"],["/tags/组件化/index.html","328c60c845b1a090b9ee650421a1c0fe"],["/tags/缓存/index.html","2cafcff087e4f0748c984fed02943bf0"],["/tags/缓存/page/2/index.html","6a14f606086009aa4d40bb1c28dbc4ce"],["/tags/缓存/page/3/index.html","3a3b969a53a01b0de1b63c1c6acbd0c9"],["/tags/观察者模式/index.html","d1e59d8f81a791d7d1aeb0f06697eb2e"],["/tags/计算机网络/index.html","4ca2d79757651990a71d7c3ab4eabcde"],["/tags/设计模式/index.html","af7a928407355bba32bc515c05e8955e"],["/tags/设计模式/page/2/index.html","4b2314fb614875b6c6e9a3f511769440"],["/tags/进程管理/index.html","ba3dfd4dc9f3e9fc560298835d96b2b0"],["/tags/适配器模式/index.html","5d03a4f6a3077a5514506f1b9d367500"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
