/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","346cfee062d8010e2b6027afef507ca4"],["/2021/02/22/工具的使用/博客的搭建/index.html","c8a3d6c2f49b65db13d026a032f6f224"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","8720a9a559efe1b83d75d643fb4dadb2"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","a98ee459eaba848fe4f7827c30838e4c"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","04b845d5e52ad2ffc9574f0a1f334cbd"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","3a3eaba55293aeaac9ca462e0258dd28"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","57671ae57b147205a3375e53cde31fc0"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","b6a3302e81321c73265843f87699db47"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","2048c0be009f94fc1a3f7d18fdf750bb"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","e2d96620ee2e6f5bb5ed7e4adec29b12"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","e4faeb4f42e2d09d08f1c0a10b169362"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","281028ebca59dd0a981a76bdf546734f"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","109b673ac85dae3e9f86ee706329d5ef"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","ed720992e9d0b363ae3801d3984b39cd"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","e29d3be5943c242ceec4c116347764ea"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","fbc50c538f97db23dd405f0265047858"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","fe6b78c3e37773392055201d83f9284c"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","bcac5e73b6c3f4b8e4112436380f714c"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","da58514499313edaa082584b8adcf870"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","0e3e6a1a66fa8ff094680e37168ee70a"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","192a7abffa8f95165c8b277be0d0bede"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","e82ad843c0b5255de17a07830ad52c14"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","e71f6ab2b00d239731e2e4fbfce4ac9b"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","ace5208d56f2d56efcf7f2789d4d9908"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","bad375e8a25d7bf31a871eed415ae6ab"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","d35376b8371553818ac98ae302301c60"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","7d0569517f587c4ef5680b40daccc29c"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","836a55a7b1a3e261fb185528e4af9ad0"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","3976712ea821f8e054c97c52b9bc0016"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","7b32ed1d991b602a655854fd94e9e6fd"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","639e2983ec7b81eab75d60ec1dd56cab"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","0bf8db29e1b4cc3860eedf96ee14233b"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","7546b49f031aae21891ba778c30f543c"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","0a5dbf7406f613642432d7ce3c87dde0"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","02d6e7065d54e9932e62b7b106db4661"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","6fe7cb6ad8d6be35df340c2401c783fa"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","47657b30bb11e5893e2e5e2046eddd78"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","c19417cc519333ed741e354c585ab2e6"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","57a29cb0a61ab42a56fa8d13ae21d27e"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","fdadcb2217ee589e7a77944e56763b86"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","59329297e1072e49c9ea36a008913a3c"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","abbcce046d28a9fa850d9ee1d51c7da6"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","697e4da89a42cb274aeae75eae56bc17"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","7828fbc46d15ee312b5a8b94d66065c6"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","c10bc97aea38d95a40794394768a88a4"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","1457ea78b6b5d4272d95c6182f42b513"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","6301513860fda284d00f6cadc0c3e5e0"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","d5a370cc65633c9a2ba3a66cd4e4bf11"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","022b0e455ffed6afe14826739441a3d5"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","a87d7705354e1ffa11c6d718ad2d20b5"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","75cf69ac8a135895d3e3c3c334ff47f4"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","f9e8abee862e219862a5897e2e98b2da"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","ef2d0737d74df052654ba775363a9d4a"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","991ccc20963d5877712dd78f74ac3888"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","b4878d4c8661502ee18860da13ae695b"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","759e3c022ff529ce22d71c8d67de5f87"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","a666c25680f7ac36ec9e7d6578925f12"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","a38a5c9f6001dc2c2dc9fa24e0ef1324"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","533e2166e0ff6162c81e6133b8c52fb1"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","277a747d409d08c71d3643ebf4572178"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","5239994f1efdcad842c99b49367a70cf"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","ec5817d5c5a73e5c24127a31625d755f"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","7b2e840f645ecff038ffad7820418776"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","087b6ee44b4552bfc50296a13abb4360"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","53387823d98fb83a8dc1c75fdab8af27"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","9bd6ea31cdfefcd2aa9e1d535a661e73"],["/2022/08/17/前端/jQuery/index.html","1eadf0137949e720ae169059946e4391"],["/2022/08/19/前端/JavaScript/index.html","8b4c52b22711d1cac34453fa824bf83e"],["/2022/08/22/前端/Ajax/index.html","aadfcf258ab7ddb99db16a9a63c6b8f9"],["/2022/08/23/前端/Promise/index.html","4d6d4b2c5a21b1793105eebdabd63af2"],["/2022/08/24/前端/Axios/index.html","b58ea61d9ca2dd936cdcdbfd3b32e16f"],["/2022/08/25/前端/H5本地存储/index.html","446ea4b92da9a16704b0c0f1292b0fff"],["/2022/08/26/前端/mock/index.html","3c458ad351f05677546c5151bef11b80"],["/2022/08/31/前端/vue/VueJs/index.html","15745b11feaf5314fe290c6797ce47c6"],["/2022/09/01/前端/vue/vue组件化/index.html","386c1d63f902e1b9afbcc16d821c5873"],["/2022/09/04/前端/vue/VueCLI/index.html","0913bec581d4983c79c9a326f8e3c01a"],["/2022/09/07/前端/vue/vue实现动画/index.html","4fc93d65f6ef64ea8e3d0859ca8a29d1"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","7d9bff4e78295047fcc2b00b14d1558f"],["/2022/09/10/前端/vue/Vue异步请求/index.html","5c831f13767be8c610eeed07ddc287cc"],["/2022/09/11/前端/vue/vue-Router/index.html","d8da550b209754f6b348a4dfbe8fa0fd"],["/2022/09/13/前端/vue/Vuex/index.html","95fcbfdbbc94e7bb6d1ef797f53d88ce"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","5bd1017897417131f128a1c29bfe0591"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","2672d430b9902579cf2bafa5d22a86bd"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","2ae96a364c36fb33016fc0656d0fa734"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","c58d9bd4bfb2d1aef60ba162f4d26ec3"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","e9839ee1c41595da808353663f3fab4c"],["/2022/09/28/DevOps/Linux/Linux/index.html","a21ae8865789b9778c88d8ce41149c45"],["/2022/10/02/中间件/Redis/redis基础/index.html","851f337b4f33bff84ba62b70d54c498e"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","106aae889a8f15b3f04178d978348fed"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","4d8d261e60154f1de7e485432a2bb319"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","1b87300cd78ad305ff2b9acabeca11d2"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","dba9a6324302f05c0b3765e316dfb63f"],["/2022/10/17/中间件/Redis/Redis集群/index.html","3a87c4a0b12fab9653206ae783944248"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","be871f9ae00116e358845fb4f82a030e"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","ae3948c7c266683c67388e7c9eef606f"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","55f1a91f4c6b25fe2f96b955721f9ae8"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","2d7991d8d035197cb5edee37b6af909d"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","556d77e9013cf96d8189d09858d63ec6"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","363e81170ca74f572372aab2057ea75e"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","7acd3f0f8c4e73ecd8f8d77e5fa34604"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","0745531992662c550ee2245386479601"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","f14fa42bd917a73032d39a1702900fc6"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","6bc147a48494bc9443afedf092e7464f"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","ed001def677b91ae723782a9a697a1d9"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","070d4c713839e7ea5dd241aeb6f92332"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","5d0054a98b0c8a1f52b4affba13416df"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","febd94649610beca3786ca2b17d297b9"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","2b59e0c92c1825667204d4cc60fe5e68"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","e502fc466cf9653f981c2c78225c964c"],["/2023/03/10/DevOps/CICD/CICD/index.html","0fbb7d4d7311db3aa2fd67c6c37ace06"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","396f7296e6dc13eda365d22741944a69"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","b4189d1804c52cfec77312305539fec2"],["/2023/03/13/Java/NIO/NIO/index.html","3b0f02b32fa536135378ccdf488ed44e"],["/2023/03/14/Java/NIO/Netty/index.html","ad2fe15a52fa5b87e2ee5d3cbba354c9"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","37b6945ab73d884f74498d91e1a62b1d"],["/2023/03/17/系统设计/分布式系统认证/index.html","5209cca013a780fa6843c95b688c64a5"],["/2023/03/19/Java/JVM/JVM概述/index.html","4b4b1013c0ac798677a276594f3b8bad"],["/2023/03/23/Java/JVM/类的加载过程/index.html","15fabae6f5aa13bb9d1e760f4c280839"],["/2023/03/28/Java/JVM/对象的实例化/index.html","33256c0067792c42795aef938b343f5b"],["/2023/04/01/Java/JVM/运行时数据区/index.html","82910372166ef844014f5ec2dafd5c25"],["/2023/04/04/Java/JVM/执行引擎/index.html","e645b02bda7b325aec931dc368b65add"],["/2023/04/06/Java/JVM/对象引用/index.html","9237591e29d67e1d1f64e5d40031018e"],["/2023/04/09/Java/JVM/垃圾回收/index.html","53ebf77119d799f6b0b55b4e560699ad"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","d886c08da7e02472c417b47803a739ec"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","a25dcf5950a408aeb92e1540512d5317"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","8a3869903c40c24568dd7057df5958d9"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","903de67180f12ad6b12f9446ea7df116"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","37da5725053698071a44e33a35eb92ae"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","147fcb27f1be8e1c0b46631cb230bc82"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","dcf349873205df3da7392d64f00d3563"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","88f5d88c0e4a4c578f5430048fd05d04"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","ca5141be6174dfcf760ad15a3e3f9b04"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","9c80aacea2384ae3c97ca92c84869502"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","ae351ddf1ef41b959b720a7353b3f0f2"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","18c8874a6a126de0daf7303f5e5d29ff"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","af7050422422e74e015e9d93c91bdfef"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","e60e2d92250ba3026aa65c0ad05a2409"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","150ad72ff3f9e5ea36a092dba21ebb23"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","fc8329787d25ca29fc3fa269f91ca612"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","000cc98e16b274164b70002d6f299572"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","4daf4f30d9a13cebd613165482a9555e"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","de64105ec456f892df9a1cc8d434c4db"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","25eabef45d6acfb2d1029ba450aca708"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","d3d2c12dd94ca5184923c37721f9332b"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","49ff9dca9eddfc2f696e526fd4f8c8f6"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","7a1d9f9da10c0e7aadb9b96ed640ede3"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","7eacd7f13fc0f2ef8fc15c46ada640ec"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","f8f81b23a16083812d9c587bac6ef79a"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","c19ed796c70d3a8020a843e2e6873f2d"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","07266397c1a7f1a256738f6420497acc"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","a83c0041f709d363098fc420c1c6bcea"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","6d6ec92171de7c54e93e7c90533bcdef"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","bc048eefe6bbb7bac8cc2c88a43c154c"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","281ecdf9a61c39f7e4d73258fc0bb129"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","d012878d73fc28734dfb509704e064e7"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","1e822d4384370664eafc473b5ebd0413"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","7447ca150c96e9e3dddaa3775b9a8731"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","aa5eecb1ca80ce11f721d0174c631953"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","985b2d84232e132e58c744ca5e721a5a"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","168aba1304a6092bdfd81b4127a718a7"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","6f29b505a21c75e96c382364f82f3b35"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","7b9eac17649df703f674b65292d77bf0"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","7fe2c28c3c33a62563e0fe94c79047cc"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","cd23f7d0ea5cd73367c2ca46ff032b10"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","d1641902bf6c13edcdf807f70d89ef29"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","c303eb5e1587760113807b1246943bd3"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","ed3dfb866d2588d909f24762ae06e479"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","ca52cdd1c0a901a53f6d42b33323096c"],["/404.html","c995cf9b40735f90c08d4c756cbddd77"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","6255ef0dd30229fd289bd85ab6e6ee92"],["/archives/2021/02/index.html","279ad453a1b8080e35889eeb576fb899"],["/archives/2021/03/index.html","d70fce42af4ae55a0cf476b5871a5890"],["/archives/2021/03/page/2/index.html","309fb3c699eeccf7150165ec94b88458"],["/archives/2021/03/page/3/index.html","fec972e1a0e6139797abd6159aec48bf"],["/archives/2021/04/index.html","c6a5b7d895aea5f712249c15a87cda97"],["/archives/2021/04/page/2/index.html","150a61a541ee99bf1534c0438f3190b0"],["/archives/2021/05/index.html","f757e7b56f069b0fc182b49be3c033db"],["/archives/2021/index.html","74c103b9f45720756efcc49c4382a24c"],["/archives/2021/page/2/index.html","26248896c999d8e1940875a11c579a3a"],["/archives/2021/page/3/index.html","95ae2928261c8f4413b9b681eb5274db"],["/archives/2021/page/4/index.html","f2c545251bf1654baabfd1131c9cbc28"],["/archives/2021/page/5/index.html","bfaa9506ef10e1804952d1ad1fea1661"],["/archives/2021/page/6/index.html","d594b180940a5d3654acd308aa103fc3"],["/archives/2021/page/7/index.html","96f7042df795508ab3ec2eb1f3e6fcff"],["/archives/2022/01/index.html","4193fd64dc8a6480141351d3edd27930"],["/archives/2022/04/index.html","5800ccd93d6dbac7fcb86ea4b451b25b"],["/archives/2022/08/index.html","d4945ed1f8db7057525fae11697a23f7"],["/archives/2022/09/index.html","7db426db5a1ead3e1e6e5e8490b6c6e2"],["/archives/2022/09/page/2/index.html","37e76f8b6a89263051c6b23b74f9982c"],["/archives/2022/10/index.html","92512810f36fdd67d952b5ddc9900005"],["/archives/2022/11/index.html","11fbc99ca2be3aae0544e118d48a5e05"],["/archives/2022/12/index.html","7ba02180b726047553a75e251f5e6b13"],["/archives/2022/index.html","6787b01af079efa956fbb512a747f1f7"],["/archives/2022/page/2/index.html","5f6d5ce123516b751030d74695e9debd"],["/archives/2022/page/3/index.html","46473d7f4ce7bfb31e01e571985af7f7"],["/archives/2022/page/4/index.html","b95d2f8689cbe5d4fc1abff8208748be"],["/archives/2022/page/5/index.html","07fb578956a15a205cc07ffa5ada4d1e"],["/archives/2023/01/index.html","efaff081b0ec2b5810cde7a05e43d3c2"],["/archives/2023/02/index.html","be6bc481e5e7bd8ed6245d0d5bfb7243"],["/archives/2023/03/index.html","47520d27924765abfc6a1a6f3896c441"],["/archives/2023/04/index.html","0d1bcde1710431bfb6262bbbf90fc535"],["/archives/2023/04/page/2/index.html","8fbc8dd4341a25220ef4bee010919603"],["/archives/2023/05/index.html","79e92414f0c4805ab7a6671beafc1a12"],["/archives/2023/06/index.html","513ffde4f5d4361fe728ccb50c569f79"],["/archives/2023/06/page/2/index.html","57d5fcce8eee2ff77301909944299de1"],["/archives/2023/07/index.html","95be6e1723c433d4dd991be9eeacdb40"],["/archives/2023/07/page/2/index.html","db45b521a293067d25940afbe0254da0"],["/archives/2023/08/index.html","8e9513458ffb27abcb23d68e394cedd7"],["/archives/2023/index.html","570c4628a5ebd5d03cb02f66bda053eb"],["/archives/2023/page/2/index.html","4b1f9867352e558fe44d3f719a42610e"],["/archives/2023/page/3/index.html","f00c88c5facb07b14ab942e93b3fa414"],["/archives/2023/page/4/index.html","8d1ec9e1c3fc5fb20f5249d13111e35a"],["/archives/2023/page/5/index.html","ed09f0a6f79fcbd06c6ef550c6d53fa8"],["/archives/2023/page/6/index.html","b4a7a2df61a46f02f5648ea39635196a"],["/archives/2023/page/7/index.html","13f6e970ae6089b2cf59b9a38e77268c"],["/archives/index.html","817aec054a01b320da80e4d9e4bc2f8c"],["/archives/page/10/index.html","86fe77575de5e6492262d07c47ef22b0"],["/archives/page/11/index.html","7d478458d88b9c3a52b672af931af395"],["/archives/page/12/index.html","c1c3fca71b2ab9ce25401573fac22da9"],["/archives/page/13/index.html","846cc9e9c6c4f77c355ec9df7cf796c3"],["/archives/page/14/index.html","92aee2707fbe66076e25d4016f2b6a51"],["/archives/page/15/index.html","3a0872dac7b9271b048dc154889af09b"],["/archives/page/16/index.html","891e31a13e0ce2a7fb86f52af53ac015"],["/archives/page/17/index.html","f24ca0477358957f585c07865d4045dc"],["/archives/page/2/index.html","ec30bc72cf00479d7ca0fa5d6736cfb8"],["/archives/page/3/index.html","a4f49472302b9753a22d46b74db662bf"],["/archives/page/4/index.html","682a6be6a4e3a269be58ea5b9208beda"],["/archives/page/5/index.html","ef7c13ac3024ccd3ffcaa3781ec52767"],["/archives/page/6/index.html","63bb690c5aab8c3a84266756747ad84b"],["/archives/page/7/index.html","08800cd17c558d4375eb1f2d71c2a979"],["/archives/page/8/index.html","b838df58f85498710ff948488e03389e"],["/archives/page/9/index.html","e9d851d38c6900e2259e5052f2d15b5b"],["/categories/Devops/CICD/index.html","22c8958abb11b700d9c014d9c7fe7135"],["/categories/Devops/Linux/index.html","4d6b0ae115f948986b640fbde9f50831"],["/categories/Devops/index.html","e12ba046e90a39873496443375fec108"],["/categories/Java/JVM/index.html","2052f268d9fbfdfdbe105f4d191be88f"],["/categories/Java/NIO/Netty/index.html","1436981c22239fd3086936a0e063d48c"],["/categories/Java/NIO/index.html","95bf10fd627ab8cf1e0497c53df82d65"],["/categories/Java/NIO/原生NIO/index.html","4607f5f3cd641cca3f0831b56c8031a9"],["/categories/Java/NIO/文件操作工具类/index.html","f55574e382b61001b043aecbfed9fc25"],["/categories/Java/index.html","c6d237bbe32daf611feedd1602c65b1c"],["/categories/Java/page/2/index.html","a573b8f858befb7a49752e05c7a01a8f"],["/categories/Java/学习路线/index.html","7472f4855bcbb459b4b91c71d865fcd0"],["/categories/Spring全家桶/Spring-Security/index.html","de44cc10a8a9894dffda93a66c093362"],["/categories/Spring全家桶/Spring/index.html","5bec4250dadbbf500b853cd093e78496"],["/categories/Spring全家桶/SpringBoot/index.html","1b77e8177a0d3077a7db8ab24b455ca8"],["/categories/Spring全家桶/SpringCloud/index.html","c7c6c19fe053bf717004e196047bfcc1"],["/categories/Spring全家桶/SpringMVC/index.html","0b227c87e3b54b154a268d2e2b19f922"],["/categories/Spring全家桶/index.html","95c97021361c141b71f4b813954f1cbe"],["/categories/Spring全家桶/page/2/index.html","4b3b1120b3970c85edde21cd10013d84"],["/categories/index.html","119ee84e9ad5652d39036f59f5dcd7e9"],["/categories/中间件/ElasticSearch/index.html","7e1f9547d43105ff8ee61c3c70370194"],["/categories/中间件/Redis/index.html","f012ffab0ffe4f113dfb7a754f8e021d"],["/categories/中间件/index.html","2f8ed4f89ba469b2680c1ea64b38f08a"],["/categories/中间件/page/2/index.html","950e660566f9c2b166bed5e0710d34c9"],["/categories/中间件/消息队列/RabbitMQ/index.html","7e333ba65757997fef3c7942d83fbc70"],["/categories/中间件/消息队列/index.html","8106b451bbb468ba0dd32a95b7ef8a4a"],["/categories/前端/Mock/index.html","052d9e849e3c3fa91691be5302a33a6a"],["/categories/前端/Promise/index.html","19fc4582da8664becb94abba49991eb3"],["/categories/前端/Vue/index.html","401810526a4206054fb9275befb045ae"],["/categories/前端/index.html","9c2e140e1c7c531dd2bed529e15cac40"],["/categories/前端/jQuery/index.html","4af199af98782a73e8287db84b89a64c"],["/categories/前端/page/2/index.html","18bc5b8ca7a6a9e964490ebf51f48b8d"],["/categories/前端/原生基础/index.html","92c7dfdb5342ae802cd7b9f7d0b1be81"],["/categories/前端/异步通信/index.html","013d1ffde31732606fc342c207862fda"],["/categories/工具使用/Git/index.html","44e5dff6499c873c01c37efa3e3de7d9"],["/categories/工具使用/index.html","ef08154822d17cd5615031792c3f5f78"],["/categories/工具使用/markdown/index.html","4553108fda46c262349eb0727c8d8401"],["/categories/工具的使用/Docker/index.html","1155884aad9e08846cf3fb67945463ae"],["/categories/工具的使用/Nginx/index.html","1456d821d25eea8a10d1961f2bf841b3"],["/categories/工具的使用/Swagger/index.html","a572bb469c3af090b8dfdddc78088183"],["/categories/工具的使用/index.html","0dce6f787d54f799a29ced79da68d040"],["/categories/工具的使用/博客搭建/index.html","2728f93361beef0d295f93b6b3d1a34b"],["/categories/数据库/MongoDB/index.html","a3d4c27b69fb8099fe18e29df42e69d9"],["/categories/数据库/MySQL/index.html","c89f37a34816fdec74db7a233bd4eb51"],["/categories/数据库/MySQL/page/2/index.html","a7a30bb88a949df14d7771aa91651518"],["/categories/数据库/MySQL/page/3/index.html","4956d881648d51f0af29120565c9b24c"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","51ca215cd14685a24f7e205412b75df7"],["/categories/数据库/ORM持久层框架/index.html","978ab34860b1c53c63d8f1991f561b49"],["/categories/数据库/index.html","923b7933daed95b4d78c742594bfe5eb"],["/categories/数据库/page/2/index.html","5dd80b81913d6c9408d6a142fe122a24"],["/categories/数据库/page/3/index.html","711ed6688474c361f4730207604503d2"],["/categories/系统设计/index.html","b1205036c0e84f836fc9e96fd79d9baa"],["/categories/系统设计/page/2/index.html","b13481cc58591db68258bef35a773a4d"],["/categories/系统设计/分布式权限认证/index.html","a6996afb2f4cd5f75df50c71cdcfe8db"],["/categories/系统设计/设计模式/index.html","6d3a345b0ffe37b22e8b59c97bb56895"],["/categories/系统设计/设计模式/page/2/index.html","680f39aa6edabe2cc7ca475ca6757a02"],["/categories/计算机基础/index.html","5c2f8e92113dc5191019334a6be7e5d3"],["/categories/计算机基础/page/2/index.html","532b4e09c0e0c912f59c06de5a902a76"],["/categories/计算机基础/page/3/index.html","d26deda64f2ff9feb652cdb21a414c30"],["/categories/计算机基础/page/4/index.html","5734732c7af017fa430777516390d30a"],["/categories/计算机基础/page/5/index.html","7d736151739d349f6c4c0ae79672ed22"],["/categories/计算机基础/page/6/index.html","5e9efbaba4171e8765175e2f84bc7413"],["/categories/计算机基础/操作系统/index.html","8360f93a950b582a2945568a267ac35c"],["/categories/计算机基础/数据结构与算法/index.html","dd2ee1345f0df175b7274f2af6b533e1"],["/categories/计算机基础/数据结构与算法/page/2/index.html","2a7498b48c2e9bf1e2879ca165ba7b26"],["/categories/计算机基础/数据结构与算法/page/3/index.html","dab55f967b35887016bb96c0a9b2f5a4"],["/categories/计算机基础/数据结构与算法/page/4/index.html","2f0252d2685e805cbeb5614279adef99"],["/categories/计算机基础/数据结构与算法/page/5/index.html","355a2a013b9b4f48e463d8f3f045a9da"],["/categories/计算机基础/计算机网络/index.html","54e3a90723de2f748ee0f221d0d95e66"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","58c6c3a9e20a8051dba3cdb869eb0b81"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","06773413cc7b07c5fe10ab6077180b73"],["/messageboard/index.html","946ce5644a554d8c6174b54f45be39c4"],["/page/10/index.html","06ef69638112a13e1dc35219397f47b5"],["/page/11/index.html","245135e796333164c90f2ea4ce0dd9e1"],["/page/12/index.html","ef8ecb8f50510b0cffe5e5ccf6ddee9a"],["/page/13/index.html","450da3317df5de9d911bcda0d6814253"],["/page/14/index.html","e3cf546beaad9077c4b9858bd3ddb490"],["/page/15/index.html","8b8bcf5f0ca72f12eece84087439cb18"],["/page/16/index.html","ffc67b7b18560f89da555ae2379f4d56"],["/page/17/index.html","6732c9b5edfa9d3a58b5994b5bfcc824"],["/page/2/index.html","c51a53e1ba737d8c27986649a664944d"],["/page/3/index.html","5ab0c1707719db1ebd275f7358963f0d"],["/page/4/index.html","2b9181ecee953b85e04f05e787fc3c81"],["/page/5/index.html","86449423b77e807d62cc1fb7b48eb5ae"],["/page/6/index.html","fe45199ea0660293748162dfcd6d0f2b"],["/page/7/index.html","5b45a8225274aa7dad20cee5111181f7"],["/page/8/index.html","70a27e60adb2f6d4017181f9d138e51f"],["/page/9/index.html","045a2535630c6915666bc3525f206935"],["/sw-register.js","042b295161dcbb0f77b0378f5c9e590a"],["/tags/Ajax/index.html","6be55bf08955666cfb9acf84edbc994a"],["/tags/Axios/index.html","4f9ce2e69981c162a475ca0ccd2e601b"],["/tags/CICD/index.html","1fb3f9b0eb4796c3ed9adf5f07c013e6"],["/tags/Docker/index.html","1644fe99a991c1372824cc1654f8c990"],["/tags/ELK/index.html","eaac5cd30d95742d3044b48e5899a850"],["/tags/ElasticSearch/index.html","187beb02b9ab5c63f2e9d268dcf27d47"],["/tags/Git/index.html","ea3aca6a9af9fc0d18299f61ae23cb74"],["/tags/H5/index.html","06316b8ff0d22f2b88becb8a0960bfb0"],["/tags/JVM/index.html","9090bd22b79eeb35696e7c9fbf0e3243"],["/tags/JVM内存模型/index.html","fc8e851f5a4d4f9b067e68eec8729946"],["/tags/JVM执行引擎/index.html","e0c698c29eacc7e2b33283b7304241ea"],["/tags/JavaScript/index.html","ac453fec6cfdd28be27093053b8205cc"],["/tags/Kibana/index.html","3ec629d46910283f4ef4e4709be5252b"],["/tags/LeetCode/index.html","d93745c9401de919ce4f65d34a09b6e4"],["/tags/LeetCode/page/2/index.html","121710a70b9be4fb1edf1d414fb1be2d"],["/tags/LeetCode/page/3/index.html","61e18d7690e2a8c00e4e31e8e995e4ad"],["/tags/Linux/index.html","aeb3b5327f5490aaf5ac0e0d07ba7e50"],["/tags/Logstash/index.html","63b1dac7ccf4833c5775dd370ed9f9ca"],["/tags/Mock/index.html","ed99bbc07ccacc99f5e3d72b6e61eb44"],["/tags/MongoDB/index.html","17a501c425d7deb650906e488886df59"],["/tags/MySQL-事务/index.html","3d2a5c75b76409f8dabbae2b7a486683"],["/tags/MySQL-数据类型/index.html","a988d2e67a31504c5ed9ef6338a80011"],["/tags/MySQL-日志/index.html","09fcbf9498e7cd5dcb14d15656794026"],["/tags/MySQL-索引/index.html","d1a2cb2365c5e7c1b0554efb176eb0f1"],["/tags/MySQL-锁/index.html","15cd819be99f10ad542262605b0144a9"],["/tags/MySQL/index.html","91a77436afd5665d83faad222109372b"],["/tags/MySQL/page/2/index.html","2b72dea91266be026e73ee2a1dd720de"],["/tags/Mybatis/index.html","99bc41f93b3bf03ceb6411bb63588cdc"],["/tags/MybatisPlus/index.html","2a82d0979973a6b9098872d563f892a8"],["/tags/NIO/index.html","e61fd465415ff0d95ae681ae71b61ad5"],["/tags/Netty/index.html","d82bb3a87b03e9c00ff60a2882c1e0d1"],["/tags/Nginx/index.html","c5531f0132a6c78fb0f10d79266b07ee"],["/tags/Promise/index.html","cbdd4a1c9ef4ced9a5f2cd941ddd222a"],["/tags/RabbitMQ/index.html","01e649133c8a4de845eed7c186a6cc15"],["/tags/Redis/index.html","0296430e40ea967a75f14ac1dd52ba47"],["/tags/SSM/index.html","005aef06264e070e37db25cd3b06a450"],["/tags/Spring-Security/index.html","0a1164885de26d75c855f6c940a5e36a"],["/tags/Spring/index.html","d8082839b508f41f38ffced74939574f"],["/tags/SpringBoot/index.html","b105d54fef36da5a6fe805b8e336438a"],["/tags/SpringCloud/index.html","4b052dc7bf481ea0d2b531e0a5d64f72"],["/tags/SpringMVC/index.html","124c9333adb23e6f45c8964c94818fc4"],["/tags/Swagger/index.html","ff6a6bf09d8fe4095007eb89f7137793"],["/tags/hexo/index.html","eaed231077a6b2d8bb14ff67bcd4d8eb"],["/tags/index.html","1100ff67759e8f880763737c4404f316"],["/tags/jQuery/index.html","f59216aaff540af79d887132213de2ca"],["/tags/java/index.html","01e904a8695b56c97a9961a6d807ede2"],["/tags/markdown/index.html","e8a08379741bc4eb7a30ade18f950aa2"],["/tags/noSQL/index.html","a34146f8bbb91c69f1a9e0624b58a76e"],["/tags/typora/index.html","1b87287b144c597f860f53dcef8b11a1"],["/tags/vue/index.html","bd4176de2285e39a8c9d60a0ea99ce58"],["/tags/享元模式/index.html","d3d9a3cb0a9221981b14c5103ae9e9de"],["/tags/代理模式/index.html","9f4e0182f2e32cc0beda8d81f067a1c0"],["/tags/内存管理/index.html","d7994108c69e5750053ba147c8f6179a"],["/tags/分布式/index.html","38000d4cfaeb3d6d0e1d3b518c0579bd"],["/tags/分布式系统/index.html","ed29fa07e8f3e34e62de3d8a30ac9652"],["/tags/前端/index.html","274ea82c0e9a2311b1a2c86060d8f7e4"],["/tags/前端/page/2/index.html","24cacd97e9edfe3fb1eaf9e8259ec0ef"],["/tags/博客/index.html","e73bef16734f8fcce7742e0402f4a32c"],["/tags/后端/index.html","e0e5f8ac9dd161d4ba525f07220cb907"],["/tags/外观模式/index.html","28d501f3414211093a03034f581763ac"],["/tags/容器技术/index.html","f22246d266ea4d03d959cc3903bf07ab"],["/tags/工厂方法/index.html","778e640baf8b50a47e539d0efdb52be1"],["/tags/微服务/index.html","a5172c90e10466db341dfda918ba2b9a"],["/tags/抽象工厂/index.html","f7ef1c0a354cd8caac98e03722c440db"],["/tags/持续集成持续部署/index.html","20b37cfd7fa69aaa53f0074f0662f2d9"],["/tags/搜索引擎/index.html","c740a20720c0b0fb3e201f3970809176"],["/tags/操作系统/index.html","381c109433a8dd0cce42fc0b799117a1"],["/tags/数据库/index.html","3d1fa7e4770905513060a9afd18e1bdb"],["/tags/数据库/page/2/index.html","47fd23ce622c0da84052cc27b5379614"],["/tags/数据库/page/3/index.html","eeb552f59429498d4cda32ea367d31fb"],["/tags/数据结构与算法/index.html","49d6d7e059c7adbe382e2ac025336989"],["/tags/数据结构与算法/page/2/index.html","0d1b6d9580ba92d916a7e053f74abea0"],["/tags/文件操作/index.html","01839b2d077f8e25b9ab5cb443552e6a"],["/tags/日志/index.html","a672c5907cb33f1b62a490d3ad666a79"],["/tags/服务器/index.html","6e9d97f902441f5b6f865a35ea3c87d2"],["/tags/权限认证/index.html","915c9a454b1aecf79867805326eff02f"],["/tags/桥接模式/index.html","5d4d992d3aeeafa98b75a8b0b4cd0544"],["/tags/模板方法模式/index.html","8b2616534b39b0095e4676a51fc6ba41"],["/tags/死锁/index.html","b72a7a6fac659cfa3b4a4ad354f96d85"],["/tags/消息队列/index.html","5107653fdad9e0b6041a3e5ced345c8a"],["/tags/版本控制/index.html","a81238a2ecb896e7028e15f56acf4621"],["/tags/策略模式/index.html","0359153bccf631a9ee094210997854ff"],["/tags/简单工厂/index.html","589f1c120851ac8f02ada0d7397cddfc"],["/tags/算法/index.html","b1bef5c98cc8ecab3ccbfaadc75c81f1"],["/tags/组件化/index.html","d7a85c528755fb7e50c5ea41fbbaf852"],["/tags/缓存/index.html","9193a0d493f3189216fe5a0f6b0712cc"],["/tags/观察者模式/index.html","b7547d24f316b63a44ebeded89e374a3"],["/tags/计算机网络/index.html","ffb0569b878c0aad76291a7e4c017ab5"],["/tags/设计模式/index.html","e3be34ac2868d63fcd0028cf2135866b"],["/tags/设计模式/page/2/index.html","a5529727f2298e053d1bf697104c7b3c"],["/tags/进程管理/index.html","e93633551bc1753438fe6207db5d72ba"],["/tags/适配器模式/index.html","210ec70963da11261bf4d22363e752eb"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
