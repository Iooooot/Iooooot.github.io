/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","e170715447544a93661c04cfe5b9aa3a"],["/2021/02/22/工具的使用/博客的搭建/index.html","66930d517029ad7f77ab59d2b11618a1"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","86cc2c4898440e3ae9f07c47b1b63754"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","19bd13fecd28bd66914ca23556acfdff"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","856dd4d868a3f1470122a00138749cf3"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","719b98249a62c9ab37107c0dc4f172ab"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","d96db682e2a080463d13b0b9b807b6bf"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","b41b64a4c87c5bcb8379038d828ad776"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","27600adf2fdd13da4192ee005abbb869"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","f34b8b876aaeee86e95533f5304a07e3"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","2b4540d99c133afddec68f3a89ff5453"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","a93a6adc7549c5ba843e2fc90240ff18"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","53561f2cb240d37dd8ca278e4e11dd33"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","3a30e520cb12dfcac94426da2b41eefb"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","b2491d14258dfe620764e7e06828ea10"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","b1b52df3653d69b47428a99dd57a49c5"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","6a9d146f75c186bd83145c534ed066b9"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","3b00d941fb5e587a504607f25aed04b2"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","24f75d60c5d35f64994f566f8710a727"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","f158a7ad56fabb05fae2aee202250f5a"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","5fcf4ece4e166f467adb097ca3528a81"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","00352a737bc078d8bf1d0bd03fb1b964"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","9b537669d2ebd181328af27d830bf8d5"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","f263b250a0f6e89ecb1b5beea1657763"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","2319777e9a82c721094183d775f888bb"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","a0829891feda60f22b1b440f734c2c41"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","277c56e48d8d21aa4ba77f5fa7902918"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","fc778916a3fcfd246de48c7b8f85c767"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","e1a14cecbb5bdc691649b5804c884f75"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","0d960a3a4efb8de89eed940f5bf3c4db"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","097cde940d453942822fbdb28e36caf1"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","2b6030ce2c29d675d87066cb63874c3b"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","b4c9c87dbe4fb689de5d7966483c9d84"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","19ffb8660cf120e4547d1332516019ff"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","fb32cd966160c3c853a2cf7c21d4a0ac"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","31fca0104219a5d6a6187799871c1e0e"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","65513a8898f8b2e5471d53a6802f5253"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","b04199841f95097e778dbc2946214472"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","147060a041c4bf7b791b4a49f76da23a"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","b9704b03ea83092624aa4fcad89ee170"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","3ee73138e6ca6c8afd50251a511a19ee"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","81483ed565d24923fe3ae5d730efb443"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","0d7683c885d4317537a44ac683d10e0c"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","c41be281726ca193585736dbdbaeaff4"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","81561a49a75c3590ae197f6a8b2c2878"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","f3df194be8b3c544c97f87ca081041ba"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","db2532f1102c32b9fa4f4f4ee5a05051"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","e079a09fb9424f45aeac57eb609c3d53"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","c6726afb8129da3c1111e26c24b8cd9d"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","a19a503d51cfde77912e46ae799204ec"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","a3efe3b57cd54ca4788cd3664b08ea43"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","5d73bd651e9a190a051905045d26880b"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","31023e0ba18e3473b0802d241909de4c"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","fba17efeb4f1c6f2934514fcf45df0b0"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","dc6a3d8a97fc13b3bd649d2540d337e7"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","4e3a4d1b5c0803fb406c2be0b593a30f"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","2572891b28be0d5384d641afa9ae1611"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","26174cecfd8ba8c2733066d968abec16"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","2ef04c8fabec90918b3b01211ecd00e1"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","6e2cb666fd5e82457a7901a20e6c68dc"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","3ecc6f70280b2eab23879a458f9e7e59"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","dfdbc7b961403f3ce48f31f8b231fa17"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","ac7e0b46ccb3c76ca3b6db43b5556b93"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","2894969a820ac43773245485dd9c7f70"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","f6d8cb5e2b3e7f7aba591160a72317cb"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","ced0f1ec6f77eec7966b13070804647e"],["/2022/08/17/前端/jQuery/index.html","0030a96f20212acb494243cfb2aac8ee"],["/2022/08/19/前端/JavaScript/index.html","6944ffae5953a7c1adb27bd59252b898"],["/2022/08/22/前端/Ajax/index.html","4e8bd513120910c5ff55d7bd72753d87"],["/2022/08/23/前端/Promise/index.html","77af8ce0aa541d7bbdd45bd5307aeb2e"],["/2022/08/24/前端/Axios/index.html","49884930bd329d1884cb6005abaedb65"],["/2022/08/25/前端/H5本地存储/index.html","50964afb11a1ca9fc4f7ef9d2ed95827"],["/2022/08/26/前端/mock/index.html","71dec248c3539f8bbc25d2655ccfe9e7"],["/2022/08/31/前端/vue/VueJs/index.html","514e0ca67eeaeec48be68066e4faecd3"],["/2022/09/01/前端/vue/vue组件化/index.html","0420247c50229646c554db6bb1a5ab27"],["/2022/09/04/前端/vue/VueCLI/index.html","e9a61e974a5c94dfb04b25f838fe31e2"],["/2022/09/07/前端/vue/vue实现动画/index.html","837a5c18b3ed8b2ea22586d8370936a9"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","6dc21e0730f82e24e18df731c1a8bde5"],["/2022/09/10/前端/vue/Vue异步请求/index.html","222f10b77b7810cb3114f6c925c468d9"],["/2022/09/11/前端/vue/vue-Router/index.html","2f4716fccc55d1bdb83d45c75d0f63a6"],["/2022/09/13/前端/vue/Vuex/index.html","ce1ff883ba8be4b14e2ef9c69bc3e378"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","3a22ca0013859fcfe66f9aa2330155f7"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","e00cb09bba13e43ceae0f527f2b2c72b"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","f0de14335c2db833b9b9f0228daad95a"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","7556e053a8aef96d9125119b21058456"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","8e05cf4861150132b3f8a8d98a7d18cc"],["/2022/09/28/DevOps/Linux/Linux/index.html","12e97ababf49a636a69101fddb92afc6"],["/2022/10/02/中间件/Redis/redis基础/index.html","24f2bed1ea26dc65a880efe22609b738"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","cf5eb492ae7bb18f62331f450feb1774"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","5662b49658879d14e57254d2b50cd606"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","170c3d75c6070a2c943475048df84d43"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","fe2b6690354ea7d16dfb664adac87fd0"],["/2022/10/17/中间件/Redis/Redis集群/index.html","d962ddb15a91e25f06b2c0c614863efc"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","70fb3ad01d229ac151bcf4d4fbb74e30"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","1122112cbceedaecb3980d4e6d59eefc"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","73bd000ffe498a7528e1829d4c34d491"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","6efbc9f574e41fae2a49b9af413f867e"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","62bb85570f3e2fd330a89eb4b3bb9d6c"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","c21f60a5da269e1df9dcac8339226284"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","4ee86b5f5a7ef69c1d0d6c34ef4ea38a"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","a28e33bb3e0779204f6cc9af26590821"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","26a6a1e0503caa8207ac8a3454834a27"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","3aabef3277320030407cec473d46e11d"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","677813408aea9d168881dcd2afebf2e4"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","bd08e427f57d5c2cde91a2a3e289f633"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","bb5586d255c6a6e68fea1ee8ce9e2c9c"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","8d331469c6c21e1e6433e54260e6974a"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","39ce455aa3fa415175c74001cf49f33c"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","52f293bb4dfaa61327f6989eecb16815"],["/2023/03/10/DevOps/CICD/CICD/index.html","1b549fd74bb476e26e5b519546348362"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","51e4627a8b4d078e941259ab1d8a623c"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","5de3e34e1992462cea5a4bbe48e271c0"],["/2023/03/13/Java/NIO/NIO/index.html","9d5808ba0bea121295646122ce4b054c"],["/2023/03/14/中间件/Netty/Netty/index.html","400bcf4ce13c52cd9c645bd9530a894b"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","22716da60c009ff747d7988a1f5280f8"],["/2023/03/17/系统设计/分布式系统认证/index.html","a0eeb14b749d73fa188ede353a908f63"],["/2023/03/19/Java/JVM/JVM概述/index.html","277656def4ca0fa7ec06fd598abb9feb"],["/2023/03/23/Java/JVM/类的加载过程/index.html","bcab0e4563e0c5d649393f6a64447db0"],["/2023/03/28/Java/JVM/对象的实例化/index.html","732a19e8e23d57b8a3868b331a3ea390"],["/2023/04/01/Java/JVM/运行时数据区/index.html","460d5a7927b9079b63e91ea7769bcbff"],["/2023/04/04/Java/JVM/执行引擎/index.html","083325811b43f0e8a429e4a73f912335"],["/2023/04/06/Java/JVM/对象引用/index.html","7c3480d58696cf339838d973c266e110"],["/2023/04/09/Java/JVM/垃圾回收/index.html","49c6c79557b85f090db4648c01ea0d3e"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","0924da31a1ba8aec0de8abf48997291e"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","e2cb55c774e1d093a88bf6e67ae9999e"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","c5e798c68799758c13aef334a43b68c2"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","5ce8ef95c8687fad21ddd24691aff5c6"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","0e037dc2188eaad8bdfd2905a9177347"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","b3071d1aff0bb0e3ddc0b08521a39125"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","5b9f2708c49a84b67d76290b96de5673"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","da5345980d5f1eca4b0087aef0c41d0e"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","d09fba0d6c18af03d3354f8c261ebc0c"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","da08da001a6d874f98c85459d7b919cd"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","f2898aef9b12910e3bf0131556f5adc3"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","ea7ddad816ec3652189639478f150b47"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","850ba65e10b7a9bbe074fdacf7b3f67e"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","8fcf2856c27688a583829d5fa38b335d"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","ea5e584a480f93bf51d3a1649079bb69"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","6d26a901f2b1561083337f243ee52940"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","b64550369b32346a7ff4f7f13459031d"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","53922ecd58e077716feae68c4454c9b7"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","01f609e40c928e203b21e318b63fb5f1"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","3151f427c88d5108fd73a2d376672741"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","5f723840b57fc33fe32eb6ee0f84056f"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","413b5a8f6792e1e513802179856670ac"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","66fde76f200e92dff95a0bfba1a38d8b"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","446988d8981783fea18d647152afc39d"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","06c3c8e271cd7415e6d76d7eda4d6f8e"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","5d8bf1701112485419915ea8fe2d7638"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","e80dc2a32b37af9e0e8f41b50c21b1c8"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","a3edb9e35e2b8642532af0504e05894d"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","99b896a8221b016c60a690c25c6404f9"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","fef41a0c9c63e3f2d68ae2ea55718c74"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","1cdbd0866994e67d0bc76e9acc797bc7"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","032cb9cb912c4f932e58d26a86ad1045"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","d9879b2368ef7f0bc1c475ccf4be58aa"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","5579c1151c663c26cd94ed49a109e822"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","44f02f97dab5ae1b18fb3fc686d0c67e"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","d36221ef2908f90aff1715b059dcc719"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","ac5d3889f24a3bf7b38a537539b609fa"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","0436677784d9c8a6d6187c03846645c5"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","5f522c0fa1b33a509fb98dc2ea8f7675"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","40224e0886f6f46d89554cbbb6be6ecf"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","a33d90bee46c3926d8ab8b9d0e0beb5b"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","0ea74ccbca271ce49481c8d328a8604a"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","f96bb41470df1a8076a23126d23fad95"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","4d3475b63d30a13d6975d814771771ad"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","47048448fec7391319f1558c15ebda45"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","6868e827f0282efeb0523e88a3af6136"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","bde3b75482d8246068f126f38cfd209d"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","20a55de715dcacd00f5cbfb19f17b3b1"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","5c92537fcac7deeae95c0139dd3aeeba"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","cc4e8e5dd8554fdec801c4c16f80c38c"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","dc33b54ca17eb63a3c3803dd31ca0774"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","ab10b03c8a664a5f2cdf0dca0d1faf8c"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","c3e94798fe8029185e6138f254ce4f09"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","b519afee6a284076b994b5dcb8d0732c"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","2167e1a85fe9a5590ae82b0d953f4a54"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","63114ea7867fc011a12726f0d56fe1e4"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","bf3b31313f8ab17cb1a76a7abf112321"],["/2023/09/04/中间件/Redis/Redis事务/index.html","0ebe5e550a9bfa70a6f89fc55dd7b061"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","b4a02cef62edbf39e14761463624f074"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","8ef69846d507ab10418361a687cfb8b3"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","74dc5a6c32429465aa8cc5dcc2cda503"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","574933775bc0a24e1df98e81c4487917"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","6e8f830ddf0eeddc451ceb1e029dabcb"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","0fddf94d5b025c066c5ecaa9e433891f"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","82c39f40039dda7fd1ceb0819079c21c"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","f2ae43ddfca07645e091a8012a0d7972"],["/2023/09/22/Java/NIO/零拷贝/index.html","7893a1bbace0deddc8618d700cbe62d7"],["/2023/09/24/系统设计/JWT认证/index.html","faebf7dd2cfe3b58b7a3458510449b80"],["/2023/09/26/Java/NIO/Reactor模式/index.html","71a94777acc00837c832e0b8937f267b"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","5343e614bf138e891971d7d97968ed8f"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","aaaebb5deeeecaed81fe5cc702142f49"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","49f2de23417a7972e49846ad2e1b7e24"],["/2023/10/09/Java/并发编程/共享问题/index.html","1a6c4572fdf3a4edb8d8c035cdb69aa3"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","c9ada750ca9e18379ed10222c2c0e12b"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","4bdd7733eb1a41ceb4a05321d962493f"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","855494c15b88a77deed97a0255bb8a67"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","e093e9059761f03b3789ecbc9a3aecdf"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","7f7ba055489cc8e053edc702397f3737"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","c0b24cca0b9ff2e7d91497fb1ead2d55"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","54fddc205334775fc0ba7e2c684c461c"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","66f54e4e72209f08859f18e977208fe2"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","18e27474d2194145ea7f2cc193343006"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","246107a6fbe38713904f056c406cf3cf"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","d5abe15d2b8cc207481f1e8a95f5eccc"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","8f1580dd4fdd651c7a6c8673a2ec200c"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","f4e8c1a0fae90ef139b43cfc2284767a"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","4f94c240c93e6a0f8ad5a62440233154"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","419a2e01869a6adc19fa329170bbc7d0"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","025053e950a88ff557de8e6c32b124a3"],["/2023/12/05/系统设计/开源协议/index.html","e6d694c2bbdde1e9aa118e027cbb40c8"],["/2023/12/09/MockMvc/index.html","6154bda9137bac1f671acf1d39bf1bda"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","9f330c6dbb4dffcbaf531d5a903e0102"],["/2023/12/19/MySQL读写分离/index.html","0e4de278784396eb3c22cf95e86a25bb"],["/2023/12/22/MySQL分库分表/index.html","856852183fe68e63116345b5aeb75719"],["/2023/12/27/利用NoSQL优化数据库/index.html","04c0b3d929b11f3b84b7c207c5336646"],["/2024/01/06/缓存概述/index.html","3f27b66392d44cdadf496a8fe93f61d6"],["/404.html","bc75fb7a7ee4786cd1f2ee171446915d"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","8b92da560c966082b2a0bfb855679b30"],["/archives/2021/02/index.html","65277a4d55c8758c9f39cab556ba04fa"],["/archives/2021/03/index.html","252db9f957dac6fbc47b0a18f7bf5878"],["/archives/2021/03/page/2/index.html","6003710174cc3dd80bc196a23e09634d"],["/archives/2021/03/page/3/index.html","d9d792eccbe26955141a87747b18862c"],["/archives/2021/04/index.html","57d0bd4b70987a13c17f70cc3299d284"],["/archives/2021/04/page/2/index.html","d0443e122f0d03f8dc30431cb18ec636"],["/archives/2021/05/index.html","1ec8056bfc57f3b6760d333100259eb2"],["/archives/2021/index.html","9ec6d0909972967bd897430a81c56060"],["/archives/2021/page/2/index.html","ce6ec41280bd892b26a47d9ef64aada3"],["/archives/2021/page/3/index.html","1794370386689ddf95af94e77c0e34d7"],["/archives/2021/page/4/index.html","ff67b9ba84a36349b259a40972cb4756"],["/archives/2021/page/5/index.html","7ba1af0c1816f4319e9c2f8036e38c4e"],["/archives/2021/page/6/index.html","6bbd34451237538a94e746d13e8524df"],["/archives/2021/page/7/index.html","26b5afc0799ad4a43352ce59434193d9"],["/archives/2022/01/index.html","40a64e1488a2180b98a5c629bbef3d84"],["/archives/2022/04/index.html","b6d872fe479c2071218a5da2f3c65497"],["/archives/2022/08/index.html","6633a5eacbe553a523d95fc7f348b7bf"],["/archives/2022/09/index.html","d21164196a0499de718e6e4bba0f8178"],["/archives/2022/09/page/2/index.html","d3658d72ca8a6c8205376bc816a9e4dd"],["/archives/2022/10/index.html","bc80c5ad3b4f389d1044752a283d5f15"],["/archives/2022/11/index.html","615d757aae3c974db483f7af2e997f71"],["/archives/2022/12/index.html","675b19f2ece47e1c098b5eac67361145"],["/archives/2022/index.html","6188e2f165c7937a165cd3cdcca11d97"],["/archives/2022/page/2/index.html","3fa4592831e3eefb57a2e4cd7f342290"],["/archives/2022/page/3/index.html","384d8116fbb580f37c43c06f3d0f7f87"],["/archives/2022/page/4/index.html","3e2c52558b258afd22ef2030b70367fc"],["/archives/2022/page/5/index.html","f873e47ab814a3b3ea5cbec7d62c667c"],["/archives/2023/01/index.html","8cfbf04866a44219af994650446df52a"],["/archives/2023/02/index.html","85529d762c40ac1bba5871dc0177bb01"],["/archives/2023/03/index.html","9bcf6300635c988fa6e7d3e229ab70d2"],["/archives/2023/04/index.html","cf13a564f759abd21d26f64a6d308bed"],["/archives/2023/04/page/2/index.html","4b9f82bf8423c5c172af688578647d34"],["/archives/2023/05/index.html","dd5d515baf088cbaabfe9dd2f650e6cc"],["/archives/2023/06/index.html","917c0fffe560d38ba882a30a59c3ef2c"],["/archives/2023/06/page/2/index.html","56e9a7202852cd401a939f3147d4ce15"],["/archives/2023/07/index.html","073cf2cd86bc9a783d8f73a902fa4f3c"],["/archives/2023/07/page/2/index.html","39af4434bdb63a9e5504090fb65b2843"],["/archives/2023/08/index.html","25db7e28106f10883a910ce7eb29821b"],["/archives/2023/08/page/2/index.html","294a72fcf46cb88ba91d01a3b3041b5e"],["/archives/2023/09/index.html","230cefab42bdece2644db4086496b27b"],["/archives/2023/09/page/2/index.html","501abf0f6c8c144fac7f0779e72cf53e"],["/archives/2023/10/index.html","89e2e6570144abed303d0aa03219cbcc"],["/archives/2023/11/index.html","81a6a71a8debdfa2cf4df4d0e6f3e56e"],["/archives/2023/12/index.html","4b3869ce661aa11ebb3dd1e7975025e7"],["/archives/2023/index.html","a7b6e912d431cc1fcde79141b460fc2d"],["/archives/2023/page/10/index.html","985319c17a05260e9326cdeb2b7ac9b8"],["/archives/2023/page/11/index.html","130a11cb693be31158b00be7e1666ed7"],["/archives/2023/page/12/index.html","39deb243dc806c88d949ecb6b9e42b7f"],["/archives/2023/page/2/index.html","85fa3eb467ceda7b749b8f4b1c2b2d93"],["/archives/2023/page/3/index.html","f0e82b5a89af4ce791a4cec3c2afdf44"],["/archives/2023/page/4/index.html","d6bd0fa81cef378a26331c617cd373df"],["/archives/2023/page/5/index.html","a8b43cd2ee0358f87f01293a4cf73421"],["/archives/2023/page/6/index.html","2d1e946ef8c02b1bee73ac4dcf095c69"],["/archives/2023/page/7/index.html","d68d97bb3681d891df38e7f3b02ae06c"],["/archives/2023/page/8/index.html","cedee613a6e18062e62caa3307334c3b"],["/archives/2023/page/9/index.html","31d1e8e038ce0f8ad6d9416c2314302f"],["/archives/2024/01/index.html","617f46b5d38b778014cf035d53d5392c"],["/archives/2024/index.html","6747d1b26fe1027d187752dbcef8625f"],["/archives/index.html","f2e01111b5ae9b36a3b4832c0f835ac6"],["/archives/page/10/index.html","d60a94f3e2c8a0e66939ffe4b8771d59"],["/archives/page/11/index.html","cd94b833100f89297ed9be5a8292867d"],["/archives/page/12/index.html","29663f2489e6c20e1050f064133cdc4c"],["/archives/page/13/index.html","e3282a8c7a2c3e61252a7f48f77cbd1b"],["/archives/page/14/index.html","51dfc8d1bbfd06848e38ca8b70362296"],["/archives/page/15/index.html","f9139718cdb81dfd0ed20e3e0ce12f87"],["/archives/page/16/index.html","ac61c7104a9c5357a144c9438cf4d05b"],["/archives/page/17/index.html","b283e129afccd1575ec158feeef02ec5"],["/archives/page/18/index.html","c9f307668929abbe1479e88b9909075c"],["/archives/page/19/index.html","702b489838d978a40113751df2e9269d"],["/archives/page/2/index.html","db59302a1affbd7cd78d2c6e67cc6398"],["/archives/page/20/index.html","b037be61d7aba532a9859cc4b4aa2edb"],["/archives/page/21/index.html","38e1c62f157999ea9777edc3dd673d4b"],["/archives/page/22/index.html","e4635cf09194319d039c19f34f17d945"],["/archives/page/3/index.html","ca12c75d957ff40cbe5bc7b9e794024f"],["/archives/page/4/index.html","9d8bc98710e3d50e254afe149e478bc4"],["/archives/page/5/index.html","c989d7a721497d84f4c1944c6ad3eb84"],["/archives/page/6/index.html","db2076ab58919d0b9de350d2def444db"],["/archives/page/7/index.html","c971eca499d558632f2d109b20a6fde9"],["/archives/page/8/index.html","0e8f63c4829139a009fcf7963d87f274"],["/archives/page/9/index.html","bfeb386e17528c0699075d83308dc11b"],["/categories/Devops/CICD/index.html","ccc67ce91cb329b89203d6bea0a6a180"],["/categories/Devops/Linux/index.html","c0fd95580ec5d84115c7029a7e156fa7"],["/categories/Devops/index.html","4392debfcfad186a59affd91bd772eeb"],["/categories/Java/JVM/index.html","b11b5a89360043397f60b7a77abc466f"],["/categories/Java/Java基础/index.html","29cf9b1032217b566e722b941ef6bca7"],["/categories/Java/NIO/index.html","7447fa56e8326969d2d57c1c087bdda7"],["/categories/Java/NIO/原生NIO/index.html","29995ea9c54b807ce7bba4af3eb6e8fd"],["/categories/Java/NIO/文件操作工具类/index.html","7e51497fae38f56cbfab4df284af1aa1"],["/categories/Java/index.html","af5b9d7ecb70fc8afc9130612b5635aa"],["/categories/Java/page/2/index.html","97f58083519ae02ce61679ca0c89f034"],["/categories/Java/并发编程/index.html","b7de9055d97d444a237d0f22f1e02966"],["/categories/Spring全家桶/Spring-Security/index.html","eb6b20cd012f511f710b5cc10baee486"],["/categories/Spring全家桶/Spring/index.html","fc712668c29585713cb1967c5914bb00"],["/categories/Spring全家桶/SpringBoot/index.html","bf996cb4766f19968000530877fbd1fc"],["/categories/Spring全家桶/SpringCloud/index.html","47466cd520d2af905037881645f0adab"],["/categories/Spring全家桶/SpringMVC/index.html","40923f8a2a1f8c6584f41b1a6295b42d"],["/categories/Spring全家桶/index.html","9de9fc2bbba996b7b3d11dd5955361d1"],["/categories/Spring全家桶/page/2/index.html","7696ff8579a9b80a65067ba995620364"],["/categories/index.html","b24f59928429c865f632362e691b98af"],["/categories/中间件/ElasticSearch/index.html","94dfb42a6c87fac1b52daceb9a616c26"],["/categories/中间件/Netty/index.html","dc0c4c6ca423d8ce9f036aa7f81294d0"],["/categories/中间件/Redis/index.html","c6dd04dd0526ffc6c4644305edc89368"],["/categories/中间件/Redis/page/2/index.html","5bab1cadab8d9c472ad2703a5ed8849b"],["/categories/中间件/Redis/page/3/index.html","2da823f354a8c85637285d7d7c3e1be3"],["/categories/中间件/index.html","da237f65fe5bab22faa782014d2890a2"],["/categories/中间件/page/2/index.html","a4af19165786611034d78d7936ded15c"],["/categories/中间件/page/3/index.html","ef3dfff63c9bf8a164867130c2529e14"],["/categories/中间件/page/4/index.html","0307d2059c4644f8e9b3b55e2aa9a053"],["/categories/中间件/消息队列/RabbitMQ/index.html","019a7b50134081df9856cae18eb0fab5"],["/categories/中间件/消息队列/index.html","df50573eddfe3a0e7cff4ac63a87b972"],["/categories/前端/Mock/index.html","38bc26147bef06b1328b72a27d1fd755"],["/categories/前端/Promise/index.html","fe492b6bb3636806a3c42b4225c9ae20"],["/categories/前端/Vue/index.html","d9357f3c6977d4b1d8a17d6cd9984d2e"],["/categories/前端/index.html","af19334be602099feff46c10e6f1c218"],["/categories/前端/jQuery/index.html","52bb58750165d0a8671805e6c9510604"],["/categories/前端/page/2/index.html","284432d7ae627c597c37df7eec88ecb3"],["/categories/前端/原生基础/index.html","41a1073678d90820ee059ce2a87e33d0"],["/categories/前端/异步通信/index.html","24234647e8b151a882dbc64fbf059aa9"],["/categories/工具使用/Git/index.html","4f97c027d19883b7de89ae0a26c2b2bf"],["/categories/工具使用/index.html","4c92e64299d9f2dc34dfb9a4717b41d0"],["/categories/工具使用/markdown/index.html","57648cb01bd078f331d8ed31c432f674"],["/categories/工具的使用/Docker/index.html","74cb8d800d9d19a4f05aea4a9e64520a"],["/categories/工具的使用/Nginx/index.html","b178e2ca43af4e1cc93bb41dbd47e935"],["/categories/工具的使用/Swagger/index.html","0c437281408bb60432dcc52a028dc756"],["/categories/工具的使用/index.html","8681be228cb6e6f1f005057721d3098b"],["/categories/工具的使用/博客搭建/index.html","e473e49d71013308b460c066f3743538"],["/categories/数据库/MongoDB/index.html","75a7d85928accc7057f0a88ae8d28dff"],["/categories/数据库/MySQL/index.html","384e29f47e10e297be7ba2a1d5928304"],["/categories/数据库/MySQL/page/2/index.html","c8330fbd2d31f3eab71890580778502c"],["/categories/数据库/MySQL/page/3/index.html","ac2b74c663c92d3e7dc956ad9855a5b3"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","bad61bad80bbf8d9136c7e2bace11bb5"],["/categories/数据库/ORM持久层框架/index.html","7be35cf8d1b02ffad345db58f4117d51"],["/categories/数据库/index.html","925ccecec1fc2f68329332e0bba64467"],["/categories/数据库/page/2/index.html","69fef6d6037ad0e2b12287ef96e19e83"],["/categories/数据库/page/3/index.html","684ab31a7725fd5671a23ed4d1070643"],["/categories/系统设计/DDD领域模型/index.html","e7541c5f330a91bcd877ccfb487c5225"],["/categories/系统设计/index.html","2e59fd39ddfcffcc42fda2683507f2bc"],["/categories/系统设计/page/2/index.html","866a36c9f551ad0bd584c33d0eb7c808"],["/categories/系统设计/page/3/index.html","181eb159709e7cc0110fc8be73051409"],["/categories/系统设计/page/4/index.html","11c58934db347e71d3b4ed06f796c728"],["/categories/系统设计/分布式权限认证/index.html","ff7ef349fe77c91847335d1dd1f4f720"],["/categories/系统设计/分布式系统/index.html","9b57b5dce2770cf41ad5a367cf0e3a79"],["/categories/系统设计/分布式系统/page/2/index.html","a5473101f39b22c8f817856ad7d42578"],["/categories/系统设计/数据库优化/index.html","4c66ed1a1606a166c78a7729c32127bb"],["/categories/系统设计/设计模式/index.html","dcc5032e3513a0ba36eb7289b24d55b0"],["/categories/系统设计/设计模式/page/2/index.html","b1c95c40743158f0d9e39ebe7abe2567"],["/categories/计算机基础/index.html","85e4549c4fa8c7c45f00fa9c7fd7cbee"],["/categories/计算机基础/page/2/index.html","48b55089e8d292f6e1b2882f3e5761be"],["/categories/计算机基础/page/3/index.html","258e04c403550cb6f5f77115a31189e2"],["/categories/计算机基础/page/4/index.html","0c7d520321abc71f4afbfcacf58c8b7e"],["/categories/计算机基础/page/5/index.html","6f3c50dbf5f9751ad6827925600af506"],["/categories/计算机基础/page/6/index.html","2a3580f1b861d4c441fced44305f52f8"],["/categories/计算机基础/操作系统/index.html","f0d022c03b550f35595d6af2aa539aa2"],["/categories/计算机基础/数据结构与算法/index.html","3b235871b7be97ed3a8d4708ace3a999"],["/categories/计算机基础/数据结构与算法/page/2/index.html","6128b44f82ba67ad6a80b887ea59d7a0"],["/categories/计算机基础/数据结构与算法/page/3/index.html","b13490e30f70fada7a5ea88e98b2c0c3"],["/categories/计算机基础/数据结构与算法/page/4/index.html","4ae09efbc981efe9d59ed530b06f78b3"],["/categories/计算机基础/数据结构与算法/page/5/index.html","a149b30e74fe7e6c25f953c1be268bdf"],["/categories/计算机基础/计算机网络/index.html","76977ab0fd06250b444bfbfc1ca37cc7"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","468add2c9f9d35afa349713e36fcfcf3"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","dd8f69b8609fe7c13a769ce6c18a0c6d"],["/messageboard/index.html","e611d54a3f9af653c7577eb78518a30c"],["/page/10/index.html","97a3380d41b6bd60316ab6599fc7ebc6"],["/page/11/index.html","927f7e498ba989b9b5ff8ade595b8f1e"],["/page/12/index.html","d4bb081a2f5285c609ca789bba9b011a"],["/page/13/index.html","f6e51d9345e84ecf3d1baad6ffa2b3e4"],["/page/14/index.html","42aab384c8be0ad834cb480c16b916a5"],["/page/15/index.html","2d863041aa480aeb4fe596812a43d7dd"],["/page/16/index.html","018562650b285f35d00fcbe73a28bed4"],["/page/17/index.html","ca0bbc5d2bbbd29015845e436afa199e"],["/page/18/index.html","a936ccb3d9acddbc1e1a19edfb9e262a"],["/page/19/index.html","67e8d72bca2f44b10a231c75958d2af4"],["/page/2/index.html","c2c0e866bc1f6fbe805497158cb08b83"],["/page/20/index.html","aba8bb3d65dede7dfca90e405756b077"],["/page/21/index.html","1c5b975093001c29cc7da7b01483cd64"],["/page/22/index.html","e86e1f2f65193b7575e51105f445fae5"],["/page/3/index.html","020bbae348c29df8b199eb789873d77b"],["/page/4/index.html","26af484c66c850b74292d5930860f93d"],["/page/5/index.html","5bd9dc29bbd361d76b8440945cef3b5c"],["/page/6/index.html","c553f811d00cfff392298a5de2165500"],["/page/7/index.html","984c3293ff59a4d728fc6d352a56fa1c"],["/page/8/index.html","50d6d22bdf82adf06247e660966fb962"],["/page/9/index.html","9dc3e3721a230cf0718d92bc4592ee87"],["/sw-register.js","951bfa34d0bf2d6d81e70f81e44f4abb"],["/tags/Ajax/index.html","386d957da3a6c4845b646841f2bbe26d"],["/tags/Axios/index.html","2b71d0e255655b160dcf27f604d6a123"],["/tags/BASE理论/index.html","67074bd04c2f4179dd8e421d2f4a2656"],["/tags/CAP定理/index.html","e856e06bdfaedb60f322a8b9f6f45654"],["/tags/CICD/index.html","68d22d629cb6bcdb13b6a8b725e517fd"],["/tags/DDD领域模型/index.html","494c5c200e65d28a462a6f7c73f1a479"],["/tags/Docker/index.html","6626cc52356528b91fca248b36041f90"],["/tags/ELK/index.html","393f72db9620a071aea52e9221ecdf83"],["/tags/ElasticSearch/index.html","f12dee79642669ecff35d6ef2c3e417f"],["/tags/Git/index.html","5fcf32fc6fab0f06a3d057dbcb1f4a52"],["/tags/H5/index.html","7855936da5cb58d3564e6d2a303736c8"],["/tags/JVM/index.html","aef4f907602e70ae3c8f4d311a8f6ea0"],["/tags/JVM内存模型/index.html","949db8ad9d8f4b3930586deb3abcd609"],["/tags/JVM执行引擎/index.html","eab5768ba4af32bc69aa4c265e4dff2a"],["/tags/JavaScript/index.html","2945ac13555c6925e4abb7911facdbe2"],["/tags/Java内存模型/index.html","690140ab0bc9d44831601736c2afb2a3"],["/tags/Java进程线程/index.html","643384f13e88744c2d155ad80d1095cc"],["/tags/Kibana/index.html","f7e30f829b0f975d1ce09bd50ffc8fa3"],["/tags/LeetCode/index.html","e790195d47f0c6d955c5a7dee893b0fb"],["/tags/LeetCode/page/2/index.html","7dcd3dfc7e2d64b9f6ee56bd833dbba8"],["/tags/LeetCode/page/3/index.html","0f3346f2bbaf66dffebd08fa97ea3571"],["/tags/Linux/index.html","e47605f62815da894d3966f80a8da7fa"],["/tags/Logstash/index.html","fe045a03c09ce03be6a95af15547ed94"],["/tags/Mock/index.html","25a541532f6a3a43232995979ba0e51d"],["/tags/MockMvc/index.html","785e31b6e22401bea74c73d4c2a9c119"],["/tags/MongoDB/index.html","7c9ce696a7f1eb6ba99ad88c1b7cf82e"],["/tags/MySQL-事务/index.html","c345927d6e723ccc3d487056c7183558"],["/tags/MySQL-数据类型/index.html","3ce795e722f56912fbeb578d8b63fbcf"],["/tags/MySQL-日志/index.html","cdecf3b1ef090ccde95b101ff9ed5031"],["/tags/MySQL-索引/index.html","e019b758e98f2fc8be58c900dbb09393"],["/tags/MySQL-锁/index.html","7fb4bcc86ea7d5adb195d4863515cf55"],["/tags/MySQL/index.html","201aa42bc2e46eba56f914be3563a3d8"],["/tags/MySQL/page/2/index.html","c95dcbedb49516d8b16a1ebb68625a6b"],["/tags/MySQL分库分表/index.html","18e19bbdfdbb0c6f8df0a11125d6a23f"],["/tags/MySQL读写分离/index.html","4042f44302518e6ef6970c540d0d9286"],["/tags/Mybatis/index.html","07b497c092d7ab90da50b539c48883c9"],["/tags/MybatisPlus/index.html","81cb7721b4dd25977f13fc7743d2ba98"],["/tags/NIO/index.html","3f60528baa875d3ebb94956b57f78815"],["/tags/Netty/index.html","cb564e98d2a5e03e356f6e42dcb26ae5"],["/tags/Nginx/index.html","895417a201beb8fdd6fff6d6af0ff600"],["/tags/NoSQL/index.html","a6b0aeffc439c27e66fe479ec5e15ce7"],["/tags/Promise/index.html","5945da4aad0b7b0c70de642e04bce434"],["/tags/RabbitMQ/index.html","a56c6a8122f89863d20a17d73febbd00"],["/tags/Redis/index.html","0ca05aa9a86ab8f2428193a05accc19a"],["/tags/Redis/page/2/index.html","315243d187750e09fd75a43bdcc57728"],["/tags/Redis/page/3/index.html","06ad539a2e3f2773fe236aa264888d25"],["/tags/SSM/index.html","9e577143f8e12436710481013779d1ff"],["/tags/Spring-Security/index.html","d747c6ce01fc32d9f5999fa867bd4522"],["/tags/Spring/index.html","2f6ac218fee797839570e6eb50252c6a"],["/tags/SpringBoot/index.html","9060513e7d810784e388af14b8a756fd"],["/tags/SpringCloud/index.html","d19ed2ffbe4928f33142859a4fd17785"],["/tags/SpringMVC/index.html","6a44bb9ae3f2dd310bbd22f905fb7f91"],["/tags/Swagger/index.html","e2787f1ad1a5c0467f76f07b6220632d"],["/tags/hexo/index.html","7e2d43078180e33048860a5bc9fa12ca"],["/tags/index.html","c01d23d0263671a5937ff6268d90cafb"],["/tags/jQuery/index.html","db5270d3570e468c6f53fa8e200bb79d"],["/tags/java/index.html","8aeea09e3ffb15a25e9ff5a391964a5a"],["/tags/markdown/index.html","481bce322fce6e209cc18408e5767288"],["/tags/typora/index.html","88177ae2085e86a7cf075269204cfe76"],["/tags/vue/index.html","a52afe0ecd94ccfd74d377cbb121d872"],["/tags/享元模式/index.html","107a2d0e35867746950115ead072c8e9"],["/tags/代理模式/index.html","4c08f790249c0f8e99cd065a3c373672"],["/tags/内存管理/index.html","e9d22cf2cb65f87170993ab3dc74cf59"],["/tags/分布式/index.html","19ef6e5d918f423d3b273131bbc95ffe"],["/tags/分布式一致性算法/index.html","89b1fc330647a28c0ece5c9034630335"],["/tags/分布式系统/index.html","3ae6b29811f8913d7c3cb3eea8e361be"],["/tags/分布式系统/page/2/index.html","874d7db26489ec60474ca2a2ce81f081"],["/tags/分布式系统/page/3/index.html","1156172bcea167066fe75c90d26a49a6"],["/tags/前端/index.html","f49419b16b6641d70ee3074ef9a3cef7"],["/tags/前端/page/2/index.html","98d4232806ba8405dca95b4660145d7c"],["/tags/动态通知/index.html","7d7700c9fee4e028ccb7698d58e8c2d3"],["/tags/博客/index.html","6e2d4bf795a19dc66a9c8d6f4d856835"],["/tags/后端/index.html","639f4747668a224240f67e4d7e6cc7aa"],["/tags/外观模式/index.html","c6a82a20ae5bef561763ccde804578bd"],["/tags/多级缓存架构/index.html","eadc0028bcc564fc924c36f745fe744a"],["/tags/多线程设计模式/index.html","c7c6b0713733bf302d1a61c633cba172"],["/tags/容器技术/index.html","60d167fa6e1dc1b697f629cd5c8d901c"],["/tags/工厂方法/index.html","fbf73265bdcf40a325d3eb2aa3c4d5f7"],["/tags/开源协议/index.html","b08548d13170f80ca5e4f3143fc0d4c1"],["/tags/异构同步/index.html","f10f12d056a40ebcab69f9101b1a8592"],["/tags/微服务/index.html","0ab605ad6d05c70bc086c0a2deb2c7e9"],["/tags/抽象工厂/index.html","0bc6434c80948590d002a7de69766992"],["/tags/持续集成持续部署/index.html","7fd78da9608415217642d1c8b374ca2d"],["/tags/接口幂等性/index.html","a1d1d9a4d23b9b00f8d46c727c419bcd"],["/tags/搜索引擎/index.html","2cb9c53515fab81ed6839801608ee8f6"],["/tags/操作系统/index.html","05e30c0804d38ea2f7d4f102b22288d6"],["/tags/数据库/index.html","f3d21057a494c94979f85303bc92dc02"],["/tags/数据库/page/2/index.html","8107a482f2fcb1611773a44b8100578d"],["/tags/数据库/page/3/index.html","5cea95f5ca084ce029d7cc1232e63bf3"],["/tags/数据结构与算法/index.html","750da32c40dca1606be1360d1084b0d8"],["/tags/数据结构与算法/page/2/index.html","6869c52f2837d96a892098d85971ce80"],["/tags/文件操作/index.html","78e6c9715daa1c11f2a797b8f3d27d5e"],["/tags/日志/index.html","46f19949c8436aa2f443fa55b36b3822"],["/tags/服务器/index.html","6132103d031fd2192b6fa3092d2495b7"],["/tags/权限认证/index.html","3359145bbcd13ddeb019e608207f3256"],["/tags/架构分层/index.html","12075fb22f99f3485e8ad5f682172e0b"],["/tags/桥接模式/index.html","db17987171b64e5f634c3c3fe5556a81"],["/tags/模板方法模式/index.html","edec88ceb2249a9d34a9c76c2e2c5279"],["/tags/死锁/index.html","772692a0da41ed06748284caeb5ebd3e"],["/tags/池化技术/index.html","faab8583eedd016fb2c69bb0703a77a7"],["/tags/消息队列/index.html","7748d54cb7994b93c110f52e466300a6"],["/tags/版本控制/index.html","2e45f590f37c574758cdd626f2023ad8"],["/tags/策略模式/index.html","9b77e64e0130801798bc2c9cadf126a0"],["/tags/简单工厂/index.html","78e35e6ace045a08be43bb97bc553e9b"],["/tags/算法/index.html","e1cc0a9d2e11e4c6ca50bc76d99269fa"],["/tags/线程活跃性问题/index.html","26d991d7227954328addf813564b8d64"],["/tags/组件化/index.html","ec7c727d2430b79cc8c5dfc119b3098c"],["/tags/经典限流算法/index.html","870a9087fd800c43504e942192a902c6"],["/tags/缓存/index.html","cb27dca8693257e140276d0633a26d8b"],["/tags/缓存/page/2/index.html","25fe2247925da2270b699cfc74c2e7d1"],["/tags/缓存/page/3/index.html","6c892c6ea00be384206d8a94375877f4"],["/tags/观察者模式/index.html","dfa3d5a85e1cbe1ebfd434249be6c9a0"],["/tags/计算机网络/index.html","2c6d2b6be04fc13fa1b4da20607c33bf"],["/tags/设计模式/index.html","eafe2428ab99e9e87518df118762dce3"],["/tags/设计模式/page/2/index.html","b0d6446ec7286ed8f081fa878ebcdb82"],["/tags/设计目标/index.html","bbaad2dff43ce7c8c8b6ed2ded89ba8d"],["/tags/资源共享问题/index.html","7bbc79fcfbaacbe108a9d4dcff38be24"],["/tags/进程管理/index.html","3ba64b225a1d451663121d7295b67616"],["/tags/适配器模式/index.html","954862dfe5c7904212b3ae9a659307de"],["/tags/通用设计方法/index.html","764d5448931cce7afef4e0777dd57a17"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
