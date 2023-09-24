/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","90a0edc180dffdc9c9434f9d0fd50c05"],["/2021/02/22/工具的使用/博客的搭建/index.html","dc2e8be929337f253c53809b77ac29f7"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","c8bb44dff711cfa321d433a430eab037"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","7738ffbc0e70be7a8f56e8124c4eea29"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","c120e80669015238ccb1fa505f066011"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","52a0547eb495905907fb9b52fd510f4e"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","ed0a7d77b1a6aec1ecde752308d38c2a"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","3cac2cf5e4b5b9ba0c81a73773d6bdb0"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","d06aed981fbdeb2b0ffd7919e7cc5831"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","de67180efd053dc356f228bec3f53030"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","51b5efa199c0e56d1dcbcdd3c966a77c"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","fe0b6cea30b39fc7b3c615bc756f71b6"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","ea28f5655ffb3ae0da41986fef91e99d"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","566e7f40dfdcb30b8e508c2a9420c4b0"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","17f20cb666c03cdd9597d1e34879e816"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","590ff362299a8cf165c563d5c1cecf1d"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","07f6ec1d1cadee1a0281d13da4542f13"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","785d3e06328a03b8ce850f5dabca1475"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","7c907e930ebb373d67a63ee077c48756"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","3dd8784b1d7a70a173d55f1a7ff93c8f"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","b116dcce6d073a9adccf4def298a0e50"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","314fcb17345a008811ba5d91617e5856"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","7b50490ee119e06b244d44b6446919b2"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","c1c41b1679f09c2fb94751b2259fe0b0"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","d3a44dc4f04b9316bada8ca9717984a0"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","1cdf7a1fdb842610e4c28e7eafbfff23"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","91950a10eaba6c64cc26f7fcb23ca659"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","30ffd224f2d5dbe7010042d05172ef94"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","480b77176b2d56996943f7df7876c1db"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","57b0078510484b1e0b6801b8e1ff5378"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","fc3cadb668342ab9a97497fbbcf00924"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","0fcfb01a1a3f827bf55a6a94647f2c4b"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","af53e48dc3f9f73c1368a2192e2dd4f5"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","5f85a273e5c3539881807bade9514640"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","2ccffec588f610221e73ecef7bde654e"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","d436904587428a4fb133494189d3bf99"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","35d82f448d3d7bd03b44bfaa649526d9"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","cb786a73198a86ef08b19a9dc70a6b57"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","f957b3a2b6763867928b1a1417586f63"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","3ac740db428f2379304ca3d5e6ef11b2"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","65a30e7a76e2cd8c09ce71cdf40c2ab8"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","0685b19aa164fcc5100d03177153c663"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","42f884d65af82a562eefcd3199e2a395"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","02174e01145f652cdc559008604cd877"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","9fe9cf00957cb38846ac206090f9a0ca"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","178cb00f94404cf21569f7d396ea0506"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","b104ac871d225c9f264c0d807c30ce5b"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","d70fc06c9e2e1fb9723803a13598db8c"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","5a588905c05bf9bbda7fcc6c7d3dda4d"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","909f2a2c0ef2db1fb3c1fe4c8722cd69"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","6bfe2f3c74f31cd48d55888bcec6993f"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","9a8b19bbe960532e60622d5ec144dadb"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","6d5cb153ed772123a3f2606f43be238f"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","cf6ac4efc06bb6afa432e0ecc5a6b4aa"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","63f022f09603c4cf5d93d732cf70a9ac"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","daf8f315644b8ca5334ba869ffc91b13"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","3a1a26a771efd3d406d686e3d6d0031b"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","99aafd68abecad82b38bdd5b3a78c728"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","9ad250f34bd435ed1ec1b62d1781abfd"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","196320cd1e038abaa187a952e0b34f37"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","a71d471247564ff028560bbed7692d30"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","a3346a413e158dfbff6beaf0b0f54009"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","8434b19e17f92e4343d7ece7d21f5987"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","67bd2c8108307b3345c105272e954d03"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","1a89b846628b9abbed3015dc211b69d3"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","8ba3c6c90cdac405bd64979b2dd3b918"],["/2022/08/17/前端/jQuery/index.html","3642ffb1081d8cf713ea60244e64d85e"],["/2022/08/19/前端/JavaScript/index.html","5108799952bc23154dbc52533c8fb6b0"],["/2022/08/22/前端/Ajax/index.html","6b16789e25cc9ce59c9133719bff58eb"],["/2022/08/23/前端/Promise/index.html","0eaa18c3fd20dcf391c3bd6ed09149f5"],["/2022/08/24/前端/Axios/index.html","d1ebef115c2668a62ee820b7fd44b36a"],["/2022/08/25/前端/H5本地存储/index.html","d68bf97d3968a586d23cf8fc1e001c9a"],["/2022/08/26/前端/mock/index.html","dd5a6e62d3717af8f3d784f0d097a551"],["/2022/08/31/前端/vue/VueJs/index.html","2db3c1be2999ab7f49e42c29ec7a885f"],["/2022/09/01/前端/vue/vue组件化/index.html","d0e48550caf93bbe3e95a1a1833d07e6"],["/2022/09/04/前端/vue/VueCLI/index.html","accf5997748e12d989c07ddb9866c7b9"],["/2022/09/07/前端/vue/vue实现动画/index.html","0a6c7c9f2e3337f3fab44b5bc3549606"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","863d4b50bb743ee6f62a006872924d50"],["/2022/09/10/前端/vue/Vue异步请求/index.html","6b2efd9bc8a192070a2f7aa059ec5d11"],["/2022/09/11/前端/vue/vue-Router/index.html","faa72394fef543b29e9b71b50b1a9886"],["/2022/09/13/前端/vue/Vuex/index.html","62fd2a4a7ef78d393ae4790265c93f3d"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","5dfa1dfde2923390b62a654c28019ee1"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","fd2b5224ff8479d4b21e94a80187417d"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","411ad8d04fb7b22542971c483caf553c"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","719b1fc5ed545cacc399c75d79b709dc"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","28d73590e1be28e73f93d137ddfaf770"],["/2022/09/28/DevOps/Linux/Linux/index.html","3f425a4524c79abb3dfdc14d85864a31"],["/2022/10/02/中间件/Redis/redis基础/index.html","b7652086b96dec8592c838624b5f883f"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","735c401739681065b5da316fe40019bf"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","9e3250b1d314716bc6c4742b371889fb"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","3c2fc7ea489348d567db1e622e79bb3e"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","9627636b8c2b74638ebe2e38c1f49d73"],["/2022/10/17/中间件/Redis/Redis集群/index.html","6d9b48939b4f516c1933499d6e8e58ab"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","ff3bb4f97e4af39a33b7446fc858770c"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","11f779f96e1d25bad69dadb4b3a47fcb"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","bfeb7aa8a3b571eb0e42870a454bdaae"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","5cb2eb33fd0c236eafe80783a06a7558"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","08506bb0d12824dd131c6e1aca2f00fa"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","47d3de292834bad3847165b45eaa64d2"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","77d71a564768de89aab92ffcf9285fc2"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","4912d80090efc3851a6f61340fdc3934"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","08d26ad0efc2dd3df105dac9790b2964"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","896768ecb4733a86c6090bd741fbf1e2"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","dfe758de921f3bee3a7aee0cc18611ea"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","777072adda15208866adc5cef793cbb0"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","627bd49aebf49028e3644bb877d3f37f"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","f1533bdbbca020b0073734e4174c95f2"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","63316c767ecca33ccb49cd1d1667d5bc"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","c12ec78401eaa6c0d938d12b5812ae6c"],["/2023/03/10/DevOps/CICD/CICD/index.html","6bc39590c67610dfc6a817e0bc920a43"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","09a78b7050231088393308fd9fe59852"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","43fed3706352ed7791bb6407fff2da22"],["/2023/03/13/Java/NIO/NIO/index.html","0bc9b13a2b7d75ef27e26084ac6dbd40"],["/2023/03/14/Java/NIO/Netty/index.html","82471982f9b707b0605db999f91e3069"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","e04dfc5eff1a5fea7f2b4109efabe494"],["/2023/03/17/系统设计/分布式系统认证/index.html","84e15422187abddfef88982e0bb7171e"],["/2023/03/19/Java/JVM/JVM概述/index.html","d582cb8b5e649171cc52d533142b9c05"],["/2023/03/23/Java/JVM/类的加载过程/index.html","77f50e217fe128b477661b7f6c7e4e8e"],["/2023/03/28/Java/JVM/对象的实例化/index.html","7e5ff1fb51b647de0a0f3f405aec31a3"],["/2023/04/01/Java/JVM/运行时数据区/index.html","39a57190c70301ab484d885d4d8204cd"],["/2023/04/04/Java/JVM/执行引擎/index.html","13e2259dcd31fb601eb5f8e6b222d712"],["/2023/04/06/Java/JVM/对象引用/index.html","da0dbd3289b4da4a6bf841d1ceff57ec"],["/2023/04/09/Java/JVM/垃圾回收/index.html","85c879c70dbc89bd3d7669ce640ac097"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","2991775a443a6eb04341773939d08c1e"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","abbaa5c27752abddb823126ef22f9b58"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","85c94459649090208028765beed8fab1"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","df1d907ae77376b46339c68bdb486a39"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","84cb374046cf5518530071f7f8b85c7b"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","76826e1a4ad96c7564aef4a69a70b541"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","867b936c1b6ad62d714ae35440274db9"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","1180928fcd2cfe5e3846a47f03d041af"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","84e19158dc95783107bd8479778063e4"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","6ff6f0dfb9042c21395a5427db320707"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","b8ebf3e209fb56a759e14f3f41a4861a"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","614be8e6f7d04d0146894b91c068a00c"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","1aaf027c0f58f148c156d9589df9ebc4"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","366c44b706fbc8dc95a3b287d2721e2e"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","c77ff880a2b2229484b51cbf70a02de7"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","e48f5713e64510e6156855dbdb81bf3a"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","57aa7e0bea5fdb11780457ffd46367b4"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","eb5fd679a419b55e6632b0c691222054"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","3eccaf429ff06b2b745afb6e90cb4fc2"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","7dd4c055e2e45591497a75117283d773"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","9996773778199724d9d6fc5eec69e747"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","d519303a35cd27e7912cc5e9dfc64ec8"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","7e0ff9296d25e63e1989cb972c9eeeab"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","7d69a19b595cca94bc2826176a5bbf1b"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","1c993b47ef1cc86fe413b3d1830a24a4"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","bb524204168d5373a19a05cc45786bd3"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","d6ff7ff77bf1cf1b5daa9114a4975eef"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","2a6d8cb863f1600cfb86c714ab27eff7"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","69f543c4494d322f6ed3075e5a37458f"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","a13b133e4534415b4c8b9a28d84b3348"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","f4a75e701ded95da0510efb140b1ce49"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","29e7d7db7af83e563da3a2e2a11e1a43"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","b12be78520784f258aabdadb4e534491"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","886a2172adfe614d40a5f2e2f62cd072"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","2dc0b292ca418c2fff4d4eeec1b7c680"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","d5786e85335316b1a847da15ff0bb65f"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","778339dd76e3b941b5d929831c16e988"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","92e9e96c3fba013b708004833659e119"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","9f7934a16e4722c7a955040da32a6a49"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","52d320157c13c6c290f06934549eccaf"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","69a3f81f8882bab9cba9cca589c4974a"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","0404ff990508dc1c93e995098b136829"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","6bbcac76ccddebf9283ca18619b3d847"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","4e55397df1fe4b903b3a506da52bb70e"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","cc94d2b3ee57eaf59d2f59c631a5bc1e"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","71c425a372d9d468e772479262305220"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","33aade75f5c00b603ea6a78107c97c98"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","738b71d530304ac5468834687afe8ffb"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","179ca988de44a70f18a3b35d15500f21"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","cd8af6b368bc68af58686ead853be074"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","a82b48bd03b995ad27fcd5273db3971c"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","bdf6a853bad155c76a9737cb191ffab8"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","fefb18862283feaabadedaedf928ee6c"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","1ea69a5eccdf6f8ad6ebc2726eadee28"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","56f5571067eac28b7d287cf06667fb09"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","85d0a0c423d6dabf72a09f612bec688f"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","e2bcc8ec10715dd6e192beebc83b31b5"],["/2023/09/04/中间件/Redis/Redis事务/index.html","f6ce60b3f354a25e12380b49fd8bc8d8"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","ebbc14c42f73036d0d2924de64885af1"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","fa3c6b80b15256c3d9c5e23d039bf2fc"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","f111a5435b52022ba703df45fef6a94b"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","4712e0ff035916f5990e600599d013f4"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","2fc81771b1e783b3c0ac057da349b175"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","f69d75fd285d98f64b944f04363b652d"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","078aa140dcfc45f3d9cd11aa1f1bf69d"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","133c37e218adf8da3bfe5d87a4f84abf"],["/2023/09/22/零拷贝/index.html","52b33b140c68be9d1c470e7894427f1c"],["/2023/09/24/JWT认证/index.html","435ae26dbfbf1e91398cfe4d2ab97a4e"],["/404.html","7f3029d8bc2ff7368226aba33285da1b"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","408fa566469794c8691d71a72ced1943"],["/archives/2021/02/index.html","e10397f4f230975352a57e5c6f4ebf45"],["/archives/2021/03/index.html","e6dd4a7c47d996be24089fdf0d4fc2bb"],["/archives/2021/03/page/2/index.html","bed4d87daddcd4b44420678b3260f4ec"],["/archives/2021/03/page/3/index.html","864a93a9ae06c48901f0841cc7724216"],["/archives/2021/04/index.html","12886316f57917a2e7f50cccd1e0b88e"],["/archives/2021/04/page/2/index.html","e4c8e64ae809c1333aca7f48bd5f8c03"],["/archives/2021/05/index.html","0138448d0c54a1e23b7bbfd8d111207a"],["/archives/2021/index.html","5fa5ba7154d5c3ccdfe0db0d0a9ca9f8"],["/archives/2021/page/2/index.html","fce384fba587224045f3614ff573dc9e"],["/archives/2021/page/3/index.html","e152e7d12fc57b0f294b794f1c336896"],["/archives/2021/page/4/index.html","8651e9c0e60f0875f5e706950776002b"],["/archives/2021/page/5/index.html","66eccdb909b122f282d64a87c72eaf22"],["/archives/2021/page/6/index.html","315492573296db27cfb39049fe9a4e2b"],["/archives/2021/page/7/index.html","226e671bb02dd18c095f2d423400ca5e"],["/archives/2022/01/index.html","c5d35c53074a1c0a0331bd78e934a7e0"],["/archives/2022/04/index.html","79a5d27bb07280793599ca84569d7069"],["/archives/2022/08/index.html","7a45980b39898ecd2e372c25feb59c4a"],["/archives/2022/09/index.html","02483b9a3af98808c05c0adf71fbba8c"],["/archives/2022/09/page/2/index.html","379ad95e9dc11879af97ea8dc9739c4d"],["/archives/2022/10/index.html","50c5d00c6e04b1213b5340c1b2c6e34d"],["/archives/2022/11/index.html","697e83281c967f6943b1f7d387a06f32"],["/archives/2022/12/index.html","02492844d0b705e8a1c6142d6327236a"],["/archives/2022/index.html","4e3afcb35be8b24c5d000fcc485ae3d3"],["/archives/2022/page/2/index.html","6ced7b7ad6655b6d0a133405a47df491"],["/archives/2022/page/3/index.html","c30dd8bf1635fed259d9eef10e9e3990"],["/archives/2022/page/4/index.html","af819e55503b7376a6bef4d282edbc9f"],["/archives/2022/page/5/index.html","65194bd01eba0570fe8544ef7582572a"],["/archives/2023/01/index.html","946c73408e75821ff998c85c56085db9"],["/archives/2023/02/index.html","c7419a2c52e2305b0ddc8a351cf29972"],["/archives/2023/03/index.html","6963e7b410e3740d0bfebe18a1201325"],["/archives/2023/04/index.html","00b12f085b98ad64812ccb080262f2fc"],["/archives/2023/04/page/2/index.html","25a851ef9ecf260a587fe17cdf8297c4"],["/archives/2023/05/index.html","2ddb92fedc90453635c958345b8e3bf6"],["/archives/2023/06/index.html","2fe9b53a82def7c6ec22cc19ffe57671"],["/archives/2023/06/page/2/index.html","b2b09eaa7d3ca24b7a36c0e99ddeae6f"],["/archives/2023/07/index.html","a2acb0d3b1be88afa3f93fe39d2d768a"],["/archives/2023/07/page/2/index.html","9b43107fbddca828a4893964368f7ebc"],["/archives/2023/08/index.html","5aa4643c1d7bb1cbd07809d73b8cdcb8"],["/archives/2023/08/page/2/index.html","23043501db24e021b6b7b4295e3c8986"],["/archives/2023/09/index.html","5ff1da16bf3662fb42bdc781d0e1e9ed"],["/archives/2023/09/page/2/index.html","c6394b9ead144b07fb2a632171270358"],["/archives/2023/index.html","c3b1e558f90e05fbdff5db4065dd1a2a"],["/archives/2023/page/2/index.html","384b905694c320b15b7b10c9ae5a6b42"],["/archives/2023/page/3/index.html","ca6b1eb31f0cee3b5ebaba6b3cfd8a85"],["/archives/2023/page/4/index.html","bd75481706a3cc722f623b98489f82bb"],["/archives/2023/page/5/index.html","3b9ab0bf64737455584415004500d757"],["/archives/2023/page/6/index.html","c605865063118ecf91a43e1706ad33a9"],["/archives/2023/page/7/index.html","3133f2e3fd8bcbd99e981bd88edd6c66"],["/archives/2023/page/8/index.html","1f6ca0bb778747049154f570dda0a1f4"],["/archives/2023/page/9/index.html","edd995fcaf16f1ea01896bdef2d8fd93"],["/archives/index.html","1ecc6c3d0feef980b1fe35632edcdc34"],["/archives/page/10/index.html","c6f8493695384b778440bbe9e568bb7a"],["/archives/page/11/index.html","eb39a38b507e9738051edc6854bc5380"],["/archives/page/12/index.html","8e3b71f9e10cdd3224bedbfe1c802823"],["/archives/page/13/index.html","703456868978efc6030d959f0c765d97"],["/archives/page/14/index.html","783db02b4cb30a271b3662e73a9e40dc"],["/archives/page/15/index.html","f4fb09cfbaea722d0332b21b21777220"],["/archives/page/16/index.html","e306e21a278e192bcb2cce1fc067d5a1"],["/archives/page/17/index.html","386e3469b1d4857b67ad9d8244cfc29f"],["/archives/page/18/index.html","c8943329718433eee88c0232e4fe9487"],["/archives/page/19/index.html","3dd2579322d212ab1ba8e02fb11ec23e"],["/archives/page/2/index.html","c976786297667884819943aa64e5aacb"],["/archives/page/20/index.html","0c89d2fbd76faa72010529608fde1ca5"],["/archives/page/3/index.html","4cf227e2f695f31a5a177f1802d23a73"],["/archives/page/4/index.html","168ec70e80fe1eadd273cd5d873944d2"],["/archives/page/5/index.html","cfa00d6137457e3f8ed507dc66b364ba"],["/archives/page/6/index.html","afe7b02a6d5698e62c972ccd94aea097"],["/archives/page/7/index.html","2c50d3f484c773f47bfbc109f26cebaf"],["/archives/page/8/index.html","90f323663d81c0083c153fa135f15256"],["/archives/page/9/index.html","f9c11f36c3a8ffc591cd17e494fdbee9"],["/categories/Devops/CICD/index.html","1d8d3ceec5367001d43e41b8d264f237"],["/categories/Devops/Linux/index.html","2af6d8ded5ba7e7127aadadeb7afca7b"],["/categories/Devops/index.html","ef4006f7c3d7bc77429ba74cdcf19666"],["/categories/Java/JVM/index.html","72c7cb67d26499ba09329129a741fc91"],["/categories/Java/Java基础/index.html","90abfcc70b38cdb671f5fc3e7a573257"],["/categories/Java/NIO/Netty/index.html","62a1e69863000eef28fbbc2ba6acdcc6"],["/categories/Java/NIO/index.html","aded3c7dde5b5c53c4788e931bd76c8c"],["/categories/Java/NIO/原生NIO/index.html","8b9878710ec38bbe6de6e25ee5ff4574"],["/categories/Java/NIO/文件操作工具类/index.html","f4c10d429b0209685bcb59aaae55f27b"],["/categories/Java/index.html","66bccb7339310c89b4d09aaf31b9953a"],["/categories/Java/page/2/index.html","091266c44ab353d0b965a6aa9fd2cd0c"],["/categories/Spring全家桶/Spring-Security/index.html","ee288e4778beea1d94a4755f4ded125e"],["/categories/Spring全家桶/Spring/index.html","97ed4624a5b9df27f7097a4cea3bc475"],["/categories/Spring全家桶/SpringBoot/index.html","d16f964f78280ebea13246568bfeae3a"],["/categories/Spring全家桶/SpringCloud/index.html","cd947ed40229d62b0e2e5d0d9d41e3d9"],["/categories/Spring全家桶/SpringMVC/index.html","91a111ebd2c35735fe329962938545e9"],["/categories/Spring全家桶/index.html","799454d145f69c6a81ae3996fbc565d1"],["/categories/Spring全家桶/page/2/index.html","e41f2826b1496352cc857b2a626477eb"],["/categories/index.html","ccea2865e077f9f2ce7fdaaaffb9cf9b"],["/categories/中间件/ElasticSearch/index.html","eaeb666ae60fbddde41d511be8f492f5"],["/categories/中间件/Redis/index.html","7b62e7086ce4255e37fad14ae9545e0d"],["/categories/中间件/Redis/page/2/index.html","13fef3a344661f4b1b2e6997b23e7b0b"],["/categories/中间件/Redis/page/3/index.html","200a3a7ddb139dd89dbbbb1c0319d3a4"],["/categories/中间件/index.html","8f71a14ff2d9985c057d0816c2b2dfdc"],["/categories/中间件/page/2/index.html","917d8232257effd557d6137279fd2617"],["/categories/中间件/page/3/index.html","6a735df362099b3a6113f5a33dd421e4"],["/categories/中间件/page/4/index.html","236ff7ce0d4becc6b1dcfd021027346e"],["/categories/中间件/消息队列/RabbitMQ/index.html","f0d10e7bdaf205ba9cbf74f3a6ecbc8c"],["/categories/中间件/消息队列/index.html","78a2d6eea63ec03661f9284630162474"],["/categories/前端/Mock/index.html","7101cc384b77257b43481847e5ee1466"],["/categories/前端/Promise/index.html","cde0b5f3c77ebb3f59e894934a7b608c"],["/categories/前端/Vue/index.html","0e5768abd1cb83d8de401eeb00cfeef3"],["/categories/前端/index.html","e25f9d0d517159d24bd9aba455cd1250"],["/categories/前端/jQuery/index.html","ca515e91f1668fe6f004325b7c57a83d"],["/categories/前端/page/2/index.html","883580cf8ac9be2124ba4e757c9569e7"],["/categories/前端/原生基础/index.html","49ac4b21f1277d44ccec3d6d03d706ca"],["/categories/前端/异步通信/index.html","54880e450b103a7b4b7e2fd600ad757b"],["/categories/工具使用/Git/index.html","54107f239fadb6920afa5f6c61896394"],["/categories/工具使用/index.html","d8f26c45db6c41ee1dcf649599c4d508"],["/categories/工具使用/markdown/index.html","1bbe3cd2782392cee4188a905b45fe29"],["/categories/工具的使用/Docker/index.html","7137e3774d1f553928de17fb8b272d79"],["/categories/工具的使用/Nginx/index.html","2270196203e5cf92e4225e1174a8085f"],["/categories/工具的使用/Swagger/index.html","c99e214dcc51ecd580c613b95209711a"],["/categories/工具的使用/index.html","de6f9b98306c5a65e9c29d80215ee5ad"],["/categories/工具的使用/博客搭建/index.html","54e36fe1e5ef953ea238c5fdd85c0160"],["/categories/数据库/MongoDB/index.html","55e7ea4984bec8f1e46c78e55e3d090d"],["/categories/数据库/MySQL/index.html","ebe697826bca3ccd9467bfb24bf692f3"],["/categories/数据库/MySQL/page/2/index.html","a0c923681e7c93239e06d30acfc42518"],["/categories/数据库/MySQL/page/3/index.html","1ec653fea1af13d3bae588716880731f"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","0496a89b1589a2752b81fb52195d943d"],["/categories/数据库/ORM持久层框架/index.html","e7baf2a4ab8fcac06c83efb2f769d310"],["/categories/数据库/index.html","5aa03e42b77f99e57e5184d00c197f3c"],["/categories/数据库/page/2/index.html","04573a7821647bdd87fbd421f9d3cf42"],["/categories/数据库/page/3/index.html","66331ebab82417b457bd6c67ec3c89c1"],["/categories/系统设计/DDD领域模型/index.html","e4ebbb6c97659e8d7f49a3770d8b7c4f"],["/categories/系统设计/index.html","9c42a8429f39a3d9dffeaa2e183c2bdf"],["/categories/系统设计/page/2/index.html","c1696d398c44302f3efcc327ec958f46"],["/categories/系统设计/分布式权限认证/index.html","5f3c8143b5c05ac2c08a3366a1a0c57c"],["/categories/系统设计/设计模式/index.html","a561741c384d3c27725f4d24439ff57a"],["/categories/系统设计/设计模式/page/2/index.html","7039763111d182301fcd0beee68bb526"],["/categories/计算机基础/index.html","29669017789d2ab2599101113013c1b6"],["/categories/计算机基础/page/2/index.html","c09575f310dbd1fe6d92ea07ecf2b7f2"],["/categories/计算机基础/page/3/index.html","0f5a306fed8ac35f72ef54d65012c441"],["/categories/计算机基础/page/4/index.html","d3353ead7a5717269ae806180ac92a17"],["/categories/计算机基础/page/5/index.html","969cd5b1d210f16ae2b8baa83dc604f4"],["/categories/计算机基础/page/6/index.html","bf4e9fa22e0eae59ad44e14e3dee0c18"],["/categories/计算机基础/操作系统/index.html","d60252ab4f78ba0368047d3f88993508"],["/categories/计算机基础/数据结构与算法/index.html","e300641b9a68b97ddd9658ba0a568720"],["/categories/计算机基础/数据结构与算法/page/2/index.html","d374a8312f3b0790836c0def1849f2ee"],["/categories/计算机基础/数据结构与算法/page/3/index.html","1a4260eb8093dbd63735ef04c59dfdad"],["/categories/计算机基础/数据结构与算法/page/4/index.html","73f61b37ff9e477a1e17b112709426bd"],["/categories/计算机基础/数据结构与算法/page/5/index.html","7e328ad3100e40d5058859371b2506e1"],["/categories/计算机基础/计算机网络/index.html","b382dc6b9ab25efe7223bd66e1ebc386"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","d3f7cf8790a4284a08017285ef89c46e"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","744e3bc70f6b5283bea9c7becb255518"],["/messageboard/index.html","a1951339edcbbd15a0d0c56239fc9d13"],["/page/10/index.html","82bbd4e91968ee9d6177ab6f8c9dbb19"],["/page/11/index.html","b87b5bfe1e24aab3394d1543996f4e4f"],["/page/12/index.html","88419348e4fad3e00900beea587e6642"],["/page/13/index.html","e61c9ad0623a3566726144ef2c5d5fb0"],["/page/14/index.html","c8f811ce8c222de39b22cbae2426aa24"],["/page/15/index.html","c30950467bb827fc768d30909acfb706"],["/page/16/index.html","3d3520098542776d67396779438c69b8"],["/page/17/index.html","663ac1f554dd598773fcb5417a815278"],["/page/18/index.html","bc2cc3fa87d1d47ee941dba39c61072e"],["/page/19/index.html","89d3c0b8b303116b1e62ed1627338f02"],["/page/2/index.html","1e3b18aca91a210e211049eed627eff7"],["/page/20/index.html","4833520ca9e75846dec3c02390c12758"],["/page/3/index.html","650300b59ec821000cf2126e0d150636"],["/page/4/index.html","8f55ff13d35b77c89fb8427e7513d835"],["/page/5/index.html","95ecbccfbde0203529d98a9300258dbc"],["/page/6/index.html","0ccadfc6eb71dafd1d438c195aed7424"],["/page/7/index.html","e07993707695942bfed3fed74538f1f8"],["/page/8/index.html","cba836169d4ef5829e482fccb37a8237"],["/page/9/index.html","b057e6c6f0d407f380f96726400e2651"],["/sw-register.js","e654d46627ce401a333b85053767661c"],["/tags/Ajax/index.html","d59fa050af3b856fbba28a31be398232"],["/tags/Axios/index.html","52fb79d4d82006eeb96ab15d8047d86f"],["/tags/CICD/index.html","a8a765c6a66633fd62e62b6e7ceb1d74"],["/tags/DDD领域模型/index.html","af6c100e687619f7595342df5483bc88"],["/tags/Docker/index.html","e01bdb242f8c5116ee44d3a3a6a90de9"],["/tags/ELK/index.html","1354f5b9afc9a0cd231289a17cca2e7e"],["/tags/ElasticSearch/index.html","7e8d645e971712c21fcf59f297ab38bc"],["/tags/Git/index.html","9101bae31916a0039e4f340d253be0ec"],["/tags/H5/index.html","79b2c218aefb3ad78ab28dc8c5269f73"],["/tags/JVM/index.html","10976aa6225b06866ef4858d2ced285b"],["/tags/JVM内存模型/index.html","9af2a3b214e7b5e500a33d601f4a8468"],["/tags/JVM执行引擎/index.html","b29cf79eabc050eb99f8b281ff7cd09b"],["/tags/JavaScript/index.html","516e833119a14dd740a5d2fa390f760a"],["/tags/Kibana/index.html","a111d5017c22c2af12ffca692a461039"],["/tags/LeetCode/index.html","746a4392c80381739346722c111edcc5"],["/tags/LeetCode/page/2/index.html","a7125e86dd80ce31bc0239d5c210d888"],["/tags/LeetCode/page/3/index.html","3a2bf594cb22ff39140a3bcbf8867abf"],["/tags/Linux/index.html","56650633f8e80fe83fa479f9a35f8653"],["/tags/Logstash/index.html","409ca88fefbe83e431598284342f4652"],["/tags/Mock/index.html","780fb6fafb1818c62ac3b9548899b490"],["/tags/MongoDB/index.html","07182fd7bb78d47807a92504f1d37fa0"],["/tags/MySQL-事务/index.html","c03592597ca82d737fd94db670706585"],["/tags/MySQL-数据类型/index.html","18f236cb37efc9af2b966d257bd6c53a"],["/tags/MySQL-日志/index.html","386e3c2c574d07ccb02a7359a044ede5"],["/tags/MySQL-索引/index.html","c2ade3b5ffdb5b42717775b24bee6e2b"],["/tags/MySQL-锁/index.html","a3f329f8997608973f930b515089413e"],["/tags/MySQL/index.html","cd31995dbadeebed9b36de250cca7f03"],["/tags/MySQL/page/2/index.html","c5edd15680c41fa325f0f68f4f6785f9"],["/tags/Mybatis/index.html","c60a5abafebd418998ddbf39f21e2a52"],["/tags/MybatisPlus/index.html","d628fe89559f882d00b5756006b13ba2"],["/tags/NIO/index.html","12e59759c40134162e58c60771d2bbea"],["/tags/Netty/index.html","9fd1bf47cd0c65fe9ea55d30f3e136dd"],["/tags/Nginx/index.html","59616ed0c5460b341900aa1eeae58ee4"],["/tags/Promise/index.html","15f1856073ad7e50c6136e570eb67514"],["/tags/RabbitMQ/index.html","91706d8546ca99b573e2be7aed688734"],["/tags/Redis/index.html","20b561773a8179826370cdf1a2b2e294"],["/tags/Redis/page/2/index.html","d62e56b413880821c3fa6053597f53c0"],["/tags/Redis/page/3/index.html","6993786c6a000652760a81ac6652428a"],["/tags/SSM/index.html","40e9805d5d06f7af0304e7aef73bc08d"],["/tags/Spring-Security/index.html","7436136c4270f2f0d29063cb0b02fb72"],["/tags/Spring/index.html","fafb613fc0fd639a9d3d778c675f8230"],["/tags/SpringBoot/index.html","7e6c4aac8e6cac1a9b311171bd602e7a"],["/tags/SpringCloud/index.html","95d02c1f4a9919b6a90388e594de3971"],["/tags/SpringMVC/index.html","8f705be5a4d61a9ed028ece2275dc3b6"],["/tags/Swagger/index.html","aa87d3bf4b47e8f7e877c5758bcc9fac"],["/tags/hexo/index.html","ab18fd854e62f10a4570b6e6b060068d"],["/tags/index.html","7e12417b3ae3c59b011b051c1efdc15f"],["/tags/jQuery/index.html","642d40c5471969720748c77ebef41a3b"],["/tags/java/index.html","fd2b2c0daa13681dc27e4cb8a38a2910"],["/tags/markdown/index.html","c524d9d3537755ddd3ef6a719ad1c15d"],["/tags/noSQL/index.html","638459b4fd149cfdba32949a06dddd6b"],["/tags/typora/index.html","07f22337b54ffd7ba37d314d6f7d1be0"],["/tags/vue/index.html","fe0ca9d2a290145ccc450e84f4057ae4"],["/tags/享元模式/index.html","6c2f4fd9664b46d0f539b9711ca8694c"],["/tags/代理模式/index.html","2000ecd3daad26abdadee72bd9f5eaa4"],["/tags/内存管理/index.html","433da27eab9fcf5f442494fae087b5fa"],["/tags/分布式/index.html","960cf16a03b3d697d12f4c7ce6950e46"],["/tags/分布式系统/index.html","c711c7d372eec6df2bf7564baf2f502d"],["/tags/前端/index.html","04a2ed2946c025be42d7afc6f1788942"],["/tags/前端/page/2/index.html","d4f72f8cd13e9aacf4a62c8b29b7cee6"],["/tags/博客/index.html","33a047af4eac7a5f8f740dd7ba8ac7fb"],["/tags/后端/index.html","26d352d6a35ae57d63ed75d0ca613b52"],["/tags/外观模式/index.html","7b073d8e0a43730d090da210b7451ca9"],["/tags/容器技术/index.html","e254b5b7198c5df4b55cd280e20dd253"],["/tags/工厂方法/index.html","23f7ee6830851501d51ebfe697a9fcde"],["/tags/微服务/index.html","3e0575ac1283baa74ee5cd67545a8ceb"],["/tags/抽象工厂/index.html","ecf7af240c3eb067f6e82f985c90a7df"],["/tags/持续集成持续部署/index.html","57c463fe7a8d8bec9a478ff16624f05c"],["/tags/搜索引擎/index.html","6e54bed54add4783dd164846a90d2ffd"],["/tags/操作系统/index.html","fc9d9009eb7dbadc2ceb45b73725b570"],["/tags/数据库/index.html","afa42dc01249872daa1b7e04c43e3269"],["/tags/数据库/page/2/index.html","0e0db0d2d3bdad308a91bc6fe78b3f2d"],["/tags/数据库/page/3/index.html","ee6139ccd260e9e179944f99d92ae55c"],["/tags/数据结构与算法/index.html","1baa7bae0c0efe39ae25c9e021365099"],["/tags/数据结构与算法/page/2/index.html","c37ed3bb8053311e871064e163fdbd93"],["/tags/文件操作/index.html","83f2e13773beafc32d73b6f334b6fe48"],["/tags/日志/index.html","8d630a5ee491133cb5b1afaaca35d07c"],["/tags/服务器/index.html","23c04b8924a9ed94e52358fe31f3fd9d"],["/tags/权限认证/index.html","3006a9bc4c2b599d479d1d07fc1c0a21"],["/tags/桥接模式/index.html","d9d9be369ed77899e5894b6789030142"],["/tags/模板方法模式/index.html","2691065407161d54367aa9cb66805b1c"],["/tags/死锁/index.html","86706d7054e29c7d579e015e8cb3ad99"],["/tags/消息队列/index.html","8eb3b54b2618975d2c437ad980a197e4"],["/tags/版本控制/index.html","d361a54a9611e7aa3fff047ca0f96f39"],["/tags/策略模式/index.html","ae56c0b11e2dbca15b282075994db25c"],["/tags/简单工厂/index.html","b0d5f8657e259395062c00276b78d364"],["/tags/算法/index.html","9f7b3b866b03afa464ebcdeac5a0f45b"],["/tags/组件化/index.html","0be7ddfcfa50b787de89936fa6a1b2b4"],["/tags/缓存/index.html","b602a7cb98641680be453fc7eddc9f8e"],["/tags/缓存/page/2/index.html","11df82cab80d663bb372f6a9e38ebb71"],["/tags/缓存/page/3/index.html","a0c22ef8a54750dea9fb232e9661360a"],["/tags/观察者模式/index.html","d63b58a36b31aa56a065274c34b2530f"],["/tags/计算机网络/index.html","227ec943bccd2de00592730f9c89428f"],["/tags/设计模式/index.html","7bd0017460145a3eda869d6ad55b7b91"],["/tags/设计模式/page/2/index.html","4ba5430466683302817030aecaf27be4"],["/tags/进程管理/index.html","652467b5000496b800b3abe5db5dc968"],["/tags/适配器模式/index.html","65456599f815a1e84aec4a58b581f7c0"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
