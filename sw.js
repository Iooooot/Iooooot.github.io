/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","14c95c56bc48d76a3716e3a4965f38c8"],["/2021/02/22/工具的使用/博客的搭建/index.html","4904699da58eb1f9373746e95ba20ef9"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","bb777e2bdab96679f0ebdd9f9c789b58"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","de3b31cd6f3d41c540184b6d11bd516c"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","e5cafafca0e5a58d1473124a0cc837a8"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","b932b5f4cca22595f0d966d82cbee283"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","e07bc5d2879e96234f6c73283bcecc13"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","5d22c9b22bcff8bfbc1fbae08bde09a1"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","e4050d7ef2e9c7ccdd44f81176bf29cc"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","381e85b634e161ca65d1c4af037b7015"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","cd63a487e5a710b015be6630b2178329"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","3682e154ff055faef5f60d6494f0cf42"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","30852ef659e50425f97bc3248c9acef1"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","c7a6f252d9b823997520b23d071464c0"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","c89dfc08d5a44ff9a4b6100ddf039e2a"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","c7283bb0b31c583ca9443fe3c47d7bac"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","c3b2a6d0a57b170ba782b6fad11f972d"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","7c2653547ca8c9a6d2e4fade0b1b70da"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","0ac536dbc4906eaa8b6fba405cab2c36"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","874a368dbfed61780501677edf3a9389"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","e3ea9fcefa6cc0f5f05e7fc307427865"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","0d32ad1297148be06aa4e7f9ed575af9"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","ac0dcafbbaf72f4db0e8c7707878d8e5"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","6384708494b26b98b68c72e37688142c"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","d1fb52b8b7ab266db49046945aa43f2f"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","904f8b5cd33c31fa7900689a8f437589"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","55668b283893d94469d18424a1713fb8"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","90b7dc761376391cf2ebc71360f36683"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","455484ebc33d2897e1ba2e6b032caa3f"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","b374acf6c7799bb3e7c0d9b5b206f938"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","180a857394995f14911fa9c4aca748a0"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","98a1eed35fbccc49a1099ffebfa434ed"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","90c1d37e6c1e3fd6ea48e9d15a165816"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","dd5072c03a90385f3bd6df682109e807"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","93969e92e6ef549c4970a9489dc6e6a0"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","5b166b0de7e7eb49e278ad1622be3f4d"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","1f157cc9726def7b7f9a1f2b85cafb90"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","e9a77c16085f9a4fa3d5f911d277752b"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","fbaba88d1a862d7265bd4fd86869430e"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","1eccef2c381c58468b9487df33b7b741"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","8456a1af865c60835efdd136acc02837"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","7d9c8b61ecf4331b9f7c6ccffc16e330"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","c9df6aa40dec9f6e2de68fa8f2045485"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","5f23e4eb1995a45614588af2708ee9af"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","6801c04c98d7d383657a24a0de8885c0"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","cc5273f3a5fdfa772f790a82f1003623"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","b63c2d94f3d8e9f2512f197e3a31c169"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","ef4f82704cbcafa39a017b101131dc4b"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","48f204ab9d458b67b65b2c1cf2f63d08"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","bd7919e9242f07ede0a3fdd405e763b1"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","2e1f6ed3e1472c16b385b3387b8d4f76"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","ae03d47e1c54237d9ad958d452e077ce"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","472ab0b346bb53da68a5299f6715dec0"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","581699fed86539900f17a0187131fa95"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","1e3710005a521ad1191fb884b16bf78f"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","279d1a3cebcb62229a86a7272930f89b"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","e729748dc20d64e1e6e1beb2276ba71e"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","30895d3134bf829c18360f2690f81a78"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","31f13e59b58b25e24943259408aac54b"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","1eb4628eb4c0434284a1e5aaee118108"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","4cc67e0082a7042cf728cbfe9377d5d8"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","ab74e1357452ccb957d9010c008aafa6"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","e4f082ac5dae554e04910b151bf47ba2"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","7bb9dcfee21a739f9aec36b693eddfb9"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","56e9f1628c8adb8fca2b7446199f35d3"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","631f44130329f05cc45cb2a77d1ce114"],["/2022/08/17/前端/jQuery/index.html","4f2b9e7dfdece75db778647de86d8f78"],["/2022/08/19/前端/JavaScript/index.html","cf9c83c422cb0a67b7247e3f782ac5b2"],["/2022/08/22/前端/Ajax/index.html","513525bc7dfc38a6062457ec331c915c"],["/2022/08/23/前端/Promise/index.html","c9983c51bbc7f36fc319a58230a1e3b3"],["/2022/08/24/前端/Axios/index.html","40c688dd15109d8cc7a951abb0758a4c"],["/2022/08/25/前端/H5本地存储/index.html","143c4e4beb243b2fbbedcf26c202022a"],["/2022/08/26/前端/mock/index.html","6cb211032ce8a712105512a39e8234a8"],["/2022/08/31/前端/vue/VueJs/index.html","6e6918cb2cf1fa5234e6c465bd7a8633"],["/2022/09/01/前端/vue/vue组件化/index.html","f1361d3431b1240ef49d3730899a2ff1"],["/2022/09/04/前端/vue/VueCLI/index.html","0cdabc0e79e525251e4e0564946655f7"],["/2022/09/07/前端/vue/vue实现动画/index.html","a57c63611bf006f1c043a70c70e4d136"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","8d97e1308c35f2b3ac5b484ee7b1d10e"],["/2022/09/10/前端/vue/Vue异步请求/index.html","efdcfe991b9c7cc15281d11b91bb500d"],["/2022/09/11/前端/vue/vue-Router/index.html","ade0167f43531c6113c6515a3fb53d41"],["/2022/09/13/前端/vue/Vuex/index.html","833821dbd12a489b851c0cc5e608dcb5"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","b0309ca127e2c652eae9b71daae4643c"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","50bcbfc7d3a64739737d742b16e200bf"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","7bf96fb89e72cefc76e7e571173276da"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","f30f51df771dc6792eee9e89c1bb5f2c"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","5e483d79e015b555e80cabcbb49b2d1e"],["/2022/09/28/DevOps/Linux/Linux/index.html","62acd9009b44e158a4f8509511f64d87"],["/2022/10/02/中间件/Redis/redis基础/index.html","c3f7197a344250581a789d3b28c1d21f"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","9c0a7d88342c54fa93a901851c4af112"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","db5382bcbc95879945b40f8740fb7daa"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","75680fe735a0e6c026e844e27e05f34e"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","61ea52784501fac5f8db301d72985fc2"],["/2022/10/17/中间件/Redis/Redis集群/index.html","28fad659e6315620b2251601eba071d7"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","74a2109e6c24a1aa3dcd832319165df4"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","68e238418123e757785a598a80b49fc1"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","009b49089b63668db3313705c53de1fd"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","58a3938b0b2850d2e1762a63156d9df1"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","30645c07c5836d2f383d53087ced18fa"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","9abfc59e75dcbbba3675e9fff22b55d9"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","22d6c97e9c998ea221c4703a89eda845"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","b6205b3590c7910ba969698b7d14e497"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","b6de636ebdb3997d3dacb8c521fafa2a"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","8469d72f1559163f440c28a01001df78"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","12645a078333becb1921aabbc591a412"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","4a1593e547e09e029979767e9797b4a0"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","023161bf56551d36dd0b80a1af810333"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","2d4eee827876c661417d7863212d9782"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","39df820de1483cdaa03b321d5e526ccb"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","49d4d877f67822abb5829bd3843d4642"],["/2023/03/10/DevOps/CICD/CICD/index.html","d4d8955626048c4e9a14726b0269cdc3"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","ae2da97af53acd72792df635956d210e"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","a28b6cb5fd446f1d19dbf5e30730c417"],["/2023/03/13/Java/NIO/NIO/index.html","1bdea219ed60333c14ba2c652903a3ba"],["/2023/03/14/Java/NIO/Netty/index.html","a5c76e2d24056167be870a93b28aa98f"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","43db55843125a15e154feddc9b88b54e"],["/2023/03/17/系统设计/分布式系统认证/index.html","1cb23d0b8da2b8dbdcd8a17a13c7b129"],["/2023/03/19/Java/JVM/JVM概述/index.html","1c475ba1a17a1f412ef54b9248039d57"],["/2023/03/23/Java/JVM/类的加载过程/index.html","10c145a48a5b07b3a03d3bc40198524a"],["/2023/03/28/Java/JVM/对象的实例化/index.html","3dcd5abb4273bdff1f27b47d4792408a"],["/2023/04/01/Java/JVM/运行时数据区/index.html","af073d513a233c9b6321a34399d5c2bd"],["/2023/04/04/Java/JVM/执行引擎/index.html","715b2751750467ab7201f687e3c4ea72"],["/2023/04/06/Java/JVM/对象引用/index.html","3e1acb8cba2d7bb798f5aaa470d5b09b"],["/2023/04/09/Java/JVM/垃圾回收/index.html","80904563cfe8aa5b32915b8cfc961d6f"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","9afa084abb0e353d1d8c25a8ced79062"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","2470793de3efd8afbbb6176b1ffe0e1e"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","94157cb3b888feb6527b28c67420fbd3"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","f9c5d67e398dd0fcf3406061aebbca8d"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","5639344be01f46a0c58b8c00f327ab4c"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","fa31c90a5b9ea9696387e442850fe9c7"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","90e6ff97dc5ccca5c9f588071ab11fc0"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","608bb84e096e396744e3cf6178208e56"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","9e82cea8413344ae5afbba4a3b85bd6b"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","a3f59bb15d07f0a1c3031d0850c828ac"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","0a6221d024f5ea2814b25aeb526cf91a"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","44e0999900435e207d681616516daeb3"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","e43b819f4310aef582a590ead981377e"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","3bfc9cb7191a3bd43817422a7027e5c8"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","ba4d7dfeaa895ef8f120e9d45e33e2ba"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","5a3bb3eb832e4da8040109078d193b3a"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","f04260e8b6bdccb59ae83f4621154d9a"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","ac72814c72c08e59dfea04a3d68553f2"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","ab9e7dba85b4fe06bc3719f9c31a5e02"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","b3c6c8086ac68ea87d81948d1c73655a"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","d2d9a7154882415b4e52a11902f430df"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","7254f405767f3668c06224a0a138c444"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","89abbde53c42d604ab91a2d68d5278ee"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","a2578aa4fa11f2c8aad97339587ba53d"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","ca14f61f5c48b3bb32f06a6f3d6079d5"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","dab267dbcc0fc13a365fa531dc050457"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","20bff46d66971a2854b99dd88561a8cf"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","c5305279f55d4fc4f6058bacb1c5cb69"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","8b72dd8979533c6b4e1e5bb70ffbfad2"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","fd5a1420a61e65edfc881deeb31f4167"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","dbd6ded011290899e371ef6c8e13fe0e"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","ea0148f02112a7de8a0333510cd82cb5"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","23c346c35d4f4aae5b847d76e70ef270"],["/404.html","da9d755c1921ee2543c77563d79f35c2"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","2b5eceef2fd43853f3c9a62642ea4fa4"],["/archives/2021/02/index.html","d9e488a82c845c3dedfd32778589173e"],["/archives/2021/03/index.html","660dc5cec762de1925b6c38eac00e134"],["/archives/2021/03/page/2/index.html","0a8fbcb467a1a700c0d84eca6827708e"],["/archives/2021/03/page/3/index.html","25c67df2f4ab6470bbf32aee2dc89fe0"],["/archives/2021/04/index.html","851a488c2f3a402774510ab6c13d6f1d"],["/archives/2021/04/page/2/index.html","0031798460594746de8fbc2bffde451b"],["/archives/2021/05/index.html","868f5ef830177513fec9b6a69f6f109a"],["/archives/2021/index.html","6f5bfbaa03fe632c1a9016c342b10031"],["/archives/2021/page/2/index.html","fd573f5f4859c5d7413d5ad39c5ba780"],["/archives/2021/page/3/index.html","98bc120ad4ee962569a769da67917cd6"],["/archives/2021/page/4/index.html","f1b8e72084289d2f99fc718c64dde1b0"],["/archives/2021/page/5/index.html","c1d6a318e80198490ab9bac6002207ca"],["/archives/2021/page/6/index.html","24ad71854b93e41be658c97cc02dd701"],["/archives/2021/page/7/index.html","d103a6059556b2655675aa1ce7701001"],["/archives/2022/01/index.html","f1da008dc22d092fe96e139244735e22"],["/archives/2022/04/index.html","7e2d15902e83e2b9a8e79124a7cfb1d7"],["/archives/2022/08/index.html","cbab8abc4b97ed0befe237b91a986f9f"],["/archives/2022/09/index.html","a970fe9b55b3bcb56abcd5a51bd8d205"],["/archives/2022/09/page/2/index.html","46e518f64b15f692fabdba0ad8f13aef"],["/archives/2022/10/index.html","57245f3a88d10c238cf6c7ca8b4536f0"],["/archives/2022/11/index.html","4536aa85ed8d268b42549991e03bc921"],["/archives/2022/12/index.html","0620ec1ab9d0501148444ca17b031192"],["/archives/2022/index.html","ac2ce470e098e10983f8c9c29956760e"],["/archives/2022/page/2/index.html","d8929641a5c51e0fec7daeaebc330271"],["/archives/2022/page/3/index.html","216e9392ca937361812c1b2745435b3b"],["/archives/2022/page/4/index.html","8dc151f2962025543faa7a6e7ba629c6"],["/archives/2022/page/5/index.html","19d0a22db07516f3c3a6fda8ab246dcb"],["/archives/2023/01/index.html","bb5e046a3778d9ffb581c51d63c157b5"],["/archives/2023/02/index.html","04bc7bc5b4df7d1440c151d4cdcabb04"],["/archives/2023/03/index.html","d5a1ec5ad687418238e1c9166c28fb9a"],["/archives/2023/04/index.html","d76e9dbdfdd583b40358b44006c169b3"],["/archives/2023/04/page/2/index.html","bbf40e94eac6674e97ce5c9b14ec0a99"],["/archives/2023/05/index.html","41aeaa4090cd4d80607483ff478d8620"],["/archives/2023/06/index.html","183a8d27c0ad4316362026786a7c8b2c"],["/archives/2023/06/page/2/index.html","d217600521c2d03e38d11dd354dd7984"],["/archives/2023/07/index.html","fc670b4c3a36f4f0c2f18a1b4b1a1e67"],["/archives/2023/index.html","4cb81e35e37ce00dbeeae4a26e474214"],["/archives/2023/page/2/index.html","5c555092554a1221c9d17edbb0c6461f"],["/archives/2023/page/3/index.html","1efd830213406eb5c837a23b2da99d2e"],["/archives/2023/page/4/index.html","584becfd1249c53a86a083a46f6b90f9"],["/archives/2023/page/5/index.html","f0281e18796c51d08d3f8e005195aa76"],["/archives/index.html","f61fae90364a5e5c3dfee08ca79b1875"],["/archives/page/10/index.html","1a22bdde6e80f91a548c13285dcb5121"],["/archives/page/11/index.html","3a360ea144aa816c7dd44149c840a88c"],["/archives/page/12/index.html","490ca499e494221ee5bb79e561519fd7"],["/archives/page/13/index.html","55ee48eb2f81aeaa82a156b613431adf"],["/archives/page/14/index.html","87b0042cad5ba634a9c86dfbe697eba0"],["/archives/page/15/index.html","dbfbcdb0e8f0a699471ffc72cb2c666e"],["/archives/page/16/index.html","bfd05df724b4c5e961ef13ab3fc62460"],["/archives/page/2/index.html","743bb472f67006d84e684a9c590d36ee"],["/archives/page/3/index.html","d2f8711a1d7a6494c528300edfc98d57"],["/archives/page/4/index.html","2d7b5d93701e4e8e0b338855fda8baf0"],["/archives/page/5/index.html","a17f64fba5f67447693c156beaf8d4dd"],["/archives/page/6/index.html","af72d13f904f7f935637a4cd6b1f0695"],["/archives/page/7/index.html","fd58c5bea59c21c0dbd374c2cce107dc"],["/archives/page/8/index.html","114ff3b511d015c259b141cd289cbc1d"],["/archives/page/9/index.html","46ba2d48e52db2c02c519689d287d273"],["/categories/Devops/CICD/index.html","07b02fb1603a6594535de97d0107c312"],["/categories/Devops/Linux/index.html","757a01af74ae96275a867fed665dc6ca"],["/categories/Devops/index.html","a320e70b43e2e382848d654387511f7f"],["/categories/Java/JVM/index.html","562a75bd0f15f2d735beda5e5036b5a1"],["/categories/Java/NIO/Netty/index.html","70f143701f777d3ff6515066533d3dde"],["/categories/Java/NIO/index.html","8cdfd9b2573e83715d4e5047cfac0ce7"],["/categories/Java/NIO/原生NIO/index.html","fd0bcbcbfd91feeedabc9fee0a2e4094"],["/categories/Java/NIO/文件操作工具类/index.html","537fd7a43969d8e001869f12523cbcde"],["/categories/Java/index.html","37fbd083dad9434ee53daf92f491b40d"],["/categories/Java/page/2/index.html","96c100e3404420b118ffcff9dbf38a6f"],["/categories/Java/学习路线/index.html","6a08ce374ae89d7349e186e5638e9df1"],["/categories/Spring全家桶/Spring-Security/index.html","358aadc539f5b9f93c0e437a8189444e"],["/categories/Spring全家桶/Spring/index.html","28d557cc27a8b8c9742d0569ac2b1548"],["/categories/Spring全家桶/SpringBoot/index.html","f3c58def02bfaeffc57fe6985a52cdbe"],["/categories/Spring全家桶/SpringCloud/index.html","bc32d8da144dc15060afcfe392339929"],["/categories/Spring全家桶/SpringMVC/index.html","9b9f50bc67333d1098bc58b2d9cfdfb5"],["/categories/Spring全家桶/index.html","9fc2246d5a393ee21c429b721bd13d49"],["/categories/Spring全家桶/page/2/index.html","e5a77ea72c563bdb274bdfbd2e2a2306"],["/categories/index.html","1faae9e9e32d22cd3ad3925c15130ac7"],["/categories/中间件/ElasticSearch/index.html","5a0ad29b593760c07962904a9334396e"],["/categories/中间件/Redis/index.html","eba659662faac4067615c985833d4259"],["/categories/中间件/index.html","c4ccd865d20b6ae26ac75ea0421b9be8"],["/categories/中间件/page/2/index.html","539e81d00eeb2e3be679d7018d2ae3dd"],["/categories/中间件/消息队列/RabbitMQ/index.html","9d59c2bed4d4da43cc2bd7154902bb77"],["/categories/中间件/消息队列/index.html","721a79ecdf3e59d57f862b4a777b9689"],["/categories/前端/Mock/index.html","51d03b7c45070f22774db57610530d61"],["/categories/前端/Promise/index.html","8daa6458e6269de920e68c4fc4797a06"],["/categories/前端/Vue/index.html","2b93fae6ecc344a0b6773ada7b36cb0b"],["/categories/前端/index.html","81b1dad51e7576163e8f819b4e35bd3a"],["/categories/前端/jQuery/index.html","18462164a9051f77cd69ed72a5581cbc"],["/categories/前端/page/2/index.html","5d5516028bc80910279b113343410a6f"],["/categories/前端/原生基础/index.html","e1ec4c481df39f91230d1a150bd53716"],["/categories/前端/异步通信/index.html","a9f594d6f1762b3f4594374c781c465e"],["/categories/工具使用/Git/index.html","40c71ea6462fa2ccbeae53c5c3a979b0"],["/categories/工具使用/index.html","e44b6d5864cd753d56783bc565d014e2"],["/categories/工具使用/markdown/index.html","f677d87d0cbc1c822728808f0ed41dc8"],["/categories/工具的使用/Docker/index.html","f77eae40e99c1e5e938f3eb84cde3784"],["/categories/工具的使用/Nginx/index.html","a5c075783a2778b7f1dbb73518307026"],["/categories/工具的使用/Swagger/index.html","7419aea1df107df3ad931c104e42ba30"],["/categories/工具的使用/index.html","22befec6399eff5ca3ba5816d288805a"],["/categories/工具的使用/博客搭建/index.html","59a7caf91d6d77a8dc561d42faff2279"],["/categories/数据库/MongoDB/index.html","016b32680a6e1ce673ed3a1c78c97558"],["/categories/数据库/MySQL/index.html","56b671b5d79ebedc53dc76c220149e3f"],["/categories/数据库/MySQL/page/2/index.html","56df2887564d5c70b3a462c0250fdf10"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","14fc27b9fe7e5a7a916c7635e234c264"],["/categories/数据库/ORM持久层框架/index.html","841fdd4b62216acc506c2554a9a73bb2"],["/categories/数据库/index.html","d4915feb7a293a0ab18718b00062a8fa"],["/categories/数据库/page/2/index.html","d597cfb8094180a0e054b5df04645963"],["/categories/系统设计/index.html","ecb5379f1a7f1f8464780feb253186eb"],["/categories/系统设计/page/2/index.html","52eadcae252f21bdb0656777e798d6ff"],["/categories/系统设计/分布式权限认证/index.html","b2189620303fc48d37150ce4fb84a730"],["/categories/系统设计/设计模式/index.html","fc2f58bd8cc7cfb9dcdfae4b4dc90372"],["/categories/系统设计/设计模式/page/2/index.html","a615d0ae97b03099e0fe5397ee40b642"],["/categories/计算机基础/index.html","4edbb92a1cda0458b533502399a6f976"],["/categories/计算机基础/page/2/index.html","f27af9c98c6002549c7c96c31675fc05"],["/categories/计算机基础/page/3/index.html","1f6fcf3f90d620ae50f174ad51819b5f"],["/categories/计算机基础/page/4/index.html","604ca4d66cf494d94eb0322a7f61a09b"],["/categories/计算机基础/page/5/index.html","b5bc9a87b71ea8040a5f7aaec324de71"],["/categories/计算机基础/page/6/index.html","049a86991cb5c7abfd8c9a234f38a371"],["/categories/计算机基础/操作系统/index.html","c202e57c9801f08eb576236219d9d88f"],["/categories/计算机基础/数据结构与算法/index.html","f0473d1b44fb67f7d91152aa3178e51b"],["/categories/计算机基础/数据结构与算法/page/2/index.html","8b36c16ea81e443f95b74740d0f91a7e"],["/categories/计算机基础/数据结构与算法/page/3/index.html","ffb65cbe2df1d6f699b810fd1d637ee7"],["/categories/计算机基础/数据结构与算法/page/4/index.html","35895b9d8f32b504087ab856c8592937"],["/categories/计算机基础/数据结构与算法/page/5/index.html","f90eca3c43746844b11d53d13d9e0657"],["/categories/计算机基础/计算机网络/index.html","76429f46cc8cf99db87be579b1fb62e4"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","3135782f5100631abf98c2fd393969ca"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","e5c18b97dbbc9a2b9c42cfc0870f5f51"],["/messageboard/index.html","b9ec4449b40ccabffbdce92f1d59ef9e"],["/page/10/index.html","57593bd69a5ad23329f7f7e9f113d709"],["/page/11/index.html","10abc023371118835d667b3b94f10a8b"],["/page/12/index.html","680ea33befb7a6a3e5cdf76e4fd9a7c4"],["/page/13/index.html","590ccbfddf33c9255a11621bbc86d90a"],["/page/14/index.html","f9a61de956ff81e20b6eafe72a88fa6c"],["/page/15/index.html","5224b48de22f30a938eee411b13f1970"],["/page/16/index.html","062eb0f409e4e5db8e5cee7e7280d821"],["/page/2/index.html","135122bd3d08de75cf4413cb85a1572c"],["/page/3/index.html","6dde9405693cd2fc43133f46e9f1b53a"],["/page/4/index.html","baa5231030f188632a9bfc802edac94c"],["/page/5/index.html","f2155e9df3aaa3d5e743683909b0d49d"],["/page/6/index.html","756e5acf7a4aabc3064689550ef75747"],["/page/7/index.html","2671fd155ed68db542c4e2c94691789a"],["/page/8/index.html","8b95a6560edcebdd90cc6206ff1f9d01"],["/page/9/index.html","bf6e2fd508212a3f37f4afab19ab19b4"],["/sw-register.js","b80498815b1c2a709b2afa2e47cecfec"],["/tags/Ajax/index.html","01527e6665f6fd1198c734b588c95ae2"],["/tags/Axios/index.html","c04b2f6fe5e446343a889a6806a54a2e"],["/tags/CICD/index.html","84430fb39d8dfb50d03e56abd8564332"],["/tags/Docker/index.html","80d14713703b1724a7ad86b9667367b1"],["/tags/ELK/index.html","a80827a6b7a1e02ef15af2878cc8ab4f"],["/tags/ElasticSearch/index.html","e5754326af82c86cd694f53f962a13b9"],["/tags/Git/index.html","be57a31f10d68a7839eca138f9fb575a"],["/tags/H5/index.html","048a0e02f7abf1bc195adea38937ba8f"],["/tags/JVM/index.html","877c8e4d158c30a854f19735defa2105"],["/tags/JVM内存模型/index.html","fcc0740718b3355d30652bc4d9c13482"],["/tags/JVM执行引擎/index.html","a0513a1b45802a301be7befb70b24166"],["/tags/JavaScript/index.html","fee7f628d4c085ec42a542e0838b42d0"],["/tags/Kibana/index.html","9f4b6245117b2b8114da36e88c8a209b"],["/tags/LeetCode/index.html","ed352ca4e4353237c3c8a39a4dbfc5d1"],["/tags/LeetCode/page/2/index.html","48498b6784d7550959de52c3f96ff2a1"],["/tags/LeetCode/page/3/index.html","3b273c6d9c5562bc994076c4532d35e3"],["/tags/Linux/index.html","1c756b2460a647e6d797c16cbe27c63c"],["/tags/Logstash/index.html","4f9a58c6343c3099444938b5b43cb611"],["/tags/Mock/index.html","99e3586c635cecad51caf491377fc93f"],["/tags/MongoDB/index.html","07fc7aa2578f3a36ecde7633c7b0f722"],["/tags/MySQL-事务/index.html","94d06fd243071762665b9d271ec37bb1"],["/tags/MySQL-数据类型/index.html","5ff63b8c048d59db25a7a1e2df6986a1"],["/tags/MySQL-日志/index.html","ce14a9f5e88bd4a6876b722292e0ddc7"],["/tags/MySQL-索引/index.html","2f84696974fa6d05050167759c7011d4"],["/tags/MySQL-锁/index.html","6bfe172b2514ea645970314d52f83d44"],["/tags/MySQL/index.html","8982922312407885960e3b3eab2470c1"],["/tags/Mybatis/index.html","b886ba6bdc698139e8581875709a543e"],["/tags/MybatisPlus/index.html","15af4b31c22cb5f52d82e1b072c5ae16"],["/tags/NIO/index.html","a272af1bf1e998724cd04d1787c64204"],["/tags/Netty/index.html","1f3f3b798479f592363ab1f472528792"],["/tags/Nginx/index.html","71cd3e87df3365b0ff63add2aca46791"],["/tags/Promise/index.html","514f6e5d62596adb3220d892c7fc0956"],["/tags/RabbitMQ/index.html","cf1f85328bc3a345e331927dfdcc2566"],["/tags/Redis/index.html","5d0b3127c1bb2c18c176d481e7f102b0"],["/tags/SSM/index.html","080520993b07d8a0cb0fa92f3b581c2f"],["/tags/Spring-Security/index.html","03cdcedd0d6a2d678bb7c72ebbb963da"],["/tags/Spring/index.html","25c4587cfecd7b6b32d7cdaed967ca19"],["/tags/SpringBoot/index.html","c8ba7bec35bc8c42bf183eb4d8c2ad15"],["/tags/SpringCloud/index.html","74bdf534e872d3240ed9c38f3abc13f0"],["/tags/SpringMVC/index.html","721326de9f23fbd2df48569efb08e99c"],["/tags/Swagger/index.html","1861063134f031dafb37e776644c325b"],["/tags/hexo/index.html","b1bf83765d7584432c4e7d4d9c0cbc2a"],["/tags/index.html","a105c31dbfab816747caf3c680033e7f"],["/tags/jQuery/index.html","f49e638ba640390b45ab3572090bf1bb"],["/tags/java/index.html","3a9e9efa6cce64fd870de2611e2d3601"],["/tags/markdown/index.html","c6a02ab932ef4410aa01b3db6bd5daf1"],["/tags/noSQL/index.html","8cb1ba819446198ab1149e2d66b7ca40"],["/tags/typora/index.html","fa6e947703c644fdf3422b8a86f0827f"],["/tags/vue/index.html","2cdaf92e010dd6750bb941eeec26606b"],["/tags/享元模式/index.html","e56d8f87a3e86a9d7315012cb8f48b89"],["/tags/代理模式/index.html","731358fd2486cb1140128a06ab5c136c"],["/tags/内存管理/index.html","51303360e1748a3773790b75c98a7942"],["/tags/分布式/index.html","592db908f670440543ee2d3ab0c849e5"],["/tags/分布式系统/index.html","5670e1ab9ed473b44f496d3dfd56e1d5"],["/tags/前端/index.html","6181db4b2f3d14658ec4ba260511e208"],["/tags/前端/page/2/index.html","a6cb5ffae021dfd2a3c2cdfefb4afda0"],["/tags/博客/index.html","1132d89d99fbff8d5fef175acd3dfc12"],["/tags/后端/index.html","e467fcd90dfa762662df697e83d3cb3d"],["/tags/外观模式/index.html","adaf796516a45e1bcdb1daae4ac3d629"],["/tags/容器技术/index.html","38f9de7afc244d67c322de9eafdd570f"],["/tags/工厂方法/index.html","5df0764f66ca15e866cb08f33c55a423"],["/tags/微服务/index.html","932ee86a5749e9b22b33bb5dfd37988a"],["/tags/抽象工厂/index.html","f0473ccdf0a41f9b842acb6be48e9233"],["/tags/持续集成持续部署/index.html","0570bd124aa1366310da5cd69b3ce3b0"],["/tags/搜索引擎/index.html","688aa995bfd625c2e71910fa49295645"],["/tags/操作系统/index.html","ec3f2d35f9f8b405591f6f5359d89b96"],["/tags/数据库/index.html","10a9c986a06a94317e55c82509ade516"],["/tags/数据库/page/2/index.html","927b6d9bb09146f587078b789471644b"],["/tags/数据结构与算法/index.html","cbf8c8d63dee1dc6b1a726bb3ecddac9"],["/tags/数据结构与算法/page/2/index.html","23ef53866e130e5a3c30477e7c56fcf7"],["/tags/文件操作/index.html","607db033e54c7827ffcaa976dd95b053"],["/tags/日志/index.html","66131494d4b9599e75ab0e06a2b228d1"],["/tags/服务器/index.html","fe2f6d092abd8b1b87e3b02004cdd084"],["/tags/权限认证/index.html","27770318ffe6eae80d339eaf6d751377"],["/tags/桥接模式/index.html","d551cfaefc6cb65bc1ef2e7bf9a121e9"],["/tags/模板方法模式/index.html","421f1e6e8e833c974a6f146ca2a5c7dd"],["/tags/死锁/index.html","c06621bf116d3e75b6429fb1cc6f8e6c"],["/tags/消息队列/index.html","f6badf26e5139f34c2cd7906711ab043"],["/tags/版本控制/index.html","545b3e4200f1ad0a93fae57f0aed3604"],["/tags/策略模式/index.html","aed8ec6b04d60ce3a7ab939dce119455"],["/tags/简单工厂/index.html","1c2d67b93cdb4ddb6cfd06a9e2f1ef08"],["/tags/算法/index.html","97e009338ea666b5258defbe348851bb"],["/tags/组件化/index.html","5c24b5086520a246326c55c7038ad6c6"],["/tags/缓存/index.html","9a6e05143d71b5ca5c105c45e936b818"],["/tags/观察者模式/index.html","c2ef9b356b6837aa70de5e0ad655fc77"],["/tags/计算机网络/index.html","786ea18968b84e7070e3c75ed6e0fe6f"],["/tags/设计模式/index.html","6a212edd7c6faa2fd94976dc30081e2a"],["/tags/设计模式/page/2/index.html","1012233deccc971cd19f2699f5af2f0a"],["/tags/进程管理/index.html","2b64ff843b60b964c447c347b677d2eb"],["/tags/适配器模式/index.html","236673fdc1ed9e55bf0f5e3e8573d587"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
