/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","978b36e61a339f9ffe5c3ab07db55e61"],["/2021/02/22/工具的使用/博客的搭建/index.html","8d7c5fbea20343b8aafd60cf0c6bc476"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","3f002fc72f6774032f156be703d02e7f"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","a1fced141f06bbd1ddc114c1a5692010"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","d42b228839e07a4c6af8de1f1c69a35d"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","18f7344b19304fa2edb1b973e76a0fe4"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","0fb3600b8cac08b3274790725f7e0208"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","61499b48324f207406ae9b709aae0eb0"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","d049d9753703dd6c7a74dbaa861d0418"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","28da8db8e92f6d1054b3577c7ebeab09"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","397ff756141d7ae13eb7b503049956eb"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","882af3d604186ad50db194523c092129"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","f329f5ea3aa7af895f3881a345800399"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","6734d2f018ca5131e0d1ba071accaa21"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","d249f31cf9a86d402675eb4962d40ae3"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","42499e4bb2f8348f9e6f82513df7af74"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","d471b719505f017e54ecd0afd46bda40"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","fdf5e331e9a8931de92ecaedf8a72a9c"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","398768bf9a97ddb56a8868fec1b9517e"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","c32051b8724889c0c516c68dd95dea3b"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","ce7f7482611bf52eb9196eb689f4e88d"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","6efa1d1db22c9af242dcef222a6c8a37"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","16b07c5fd900a29d62506da8e95f52a5"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","29974c5762b771923cde87bacf4b4b96"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","dcd419dc02b18c20e9e5c505d7fb4a1f"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","4d44dbf341954820089b298f9574ccb4"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","6f9671b87fac436e5e70f0bc6f71c6c1"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","42de4dd498456b0184998fd708898af8"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","893825687bfddad40c01f373e9aaa37b"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","b3e61eed1869eb3416eb20970685d6c3"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","c2fee841425c50d4c148e1aee9f9a774"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","493e59cf673fbbfd083faa180d717ff9"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","d883708cf45ea8981b689ecf1a7b1b06"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","f8df1e0ef8a3888e87ced6f779a2ceb4"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","39c2eb5946b40e1eb6942b1f1978a6f6"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","a62ff5896cc07c9f9264da9f14aaab3d"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","2c9f590c41e7cf17d117dcb83fe34414"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","ea58ecb2f43cd7f217f512f5e2573371"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","7cded92c2f5d804170b582cc055e6d37"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","3c7f3fb2ad05d8a97d442e8535d57b85"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","237299974f7acc505355a4db253fac26"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","b2629124a69ab05c53f01610f09ff0fb"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","4610a9a421d35e720a65ebcdcf2befa9"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","616a694aff19a7a60c6a33e10207635a"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","459d957bf0e8c4373c57ff8aaac6fd0c"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","1ed6f0073f2e777827fcb3b017bbc77c"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","2f0a6909a2fed2876dcdda49714581a9"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","d333a87a3e47a4af0b1084d3abdec6d4"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","2a315be635c3224e3acf12c88fb2c128"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","22630c7041615728afb8c960aea1b903"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","3bb36d309df67ca8cca446bb5dcdcd02"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","cc2876d6e8a7935b2e7a4e8cf5193ea1"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","9171242ee78a1fbff1cfcbffa895a887"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","4712e9bd989d94f1b29947ec595c740e"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","24c60b17a9476bc9f193fba80cf9a182"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","245ef5cb7db859af7e8a5a5a1b9e2e74"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","fc53b2f6319cb685f5f620cb41df8ca3"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","db3b536703a2efcb4bdde5ad8413e0de"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","9806d06a18690e1e1b4fa08202034fcd"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","f2108e88d21a057136000dbab4e864fd"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","af7614de20e648f377f35d7ad7f8ec9f"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","81a24de581ff79c24891c416a4f61859"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","4a66ca6d0828e787f734dc4e131d5949"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","be5db57145f55427765c87b86e43aa89"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","721eee98b57d9cba0c64b00a2049b460"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","caa3e69a4ff86f588e5e919507790ee5"],["/2022/08/17/前端/jQuery/index.html","e6ec57b7e21c3cca849e21475916518e"],["/2022/08/19/前端/JavaScript/index.html","3f4f19b688f37f7cd316acbc67134db3"],["/2022/08/22/前端/Ajax/index.html","feb7cb096ba89a428e795b1fbf2cac0e"],["/2022/08/23/前端/Promise/index.html","d69f68ea23a90c250fc9ac2d9872b424"],["/2022/08/24/前端/Axios/index.html","22dd1ba8eacf53377440e3f34de3d024"],["/2022/08/25/前端/H5本地存储/index.html","0ae15bf2d618fd424404decbdf4007af"],["/2022/08/26/前端/mock/index.html","450ccfaca9dff894932836f649513f7a"],["/2022/08/31/前端/vue/VueJs/index.html","9effa86c9305de87abb29c950c7b15c5"],["/2022/09/01/前端/vue/vue组件化/index.html","b46acc2efda1cf3d671e1d63682448ca"],["/2022/09/04/前端/vue/VueCLI/index.html","6e5fcef79b65cf1a6d9b655e7a32bc66"],["/2022/09/07/前端/vue/vue实现动画/index.html","a548a1ecf243751b70ba6779c1bf327f"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","0d6335c127010da621d9e6e15dab11cc"],["/2022/09/10/前端/vue/Vue异步请求/index.html","58e7c8d0d9cda0051bf67f4e59008739"],["/2022/09/11/前端/vue/vue-Router/index.html","49cfa2c210a69ee3b2f78433d281a471"],["/2022/09/13/前端/vue/Vuex/index.html","c5db8219771672cc397d4889a02b3c63"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","b822025f36ef04dfb1f1ed15f6f81d45"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","b555826bf7ff7f67f33d7a4885b55b79"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","c7999899086df8260153311022cae2d4"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","bcba7f5c57f616ffd2f6674012bdeeed"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","c3024197648052dad414ff92134cc15a"],["/2022/09/28/DevOps/Linux/Linux/index.html","5683b31ac3b53ab8c3d5f848617bf584"],["/2022/10/02/中间件/Redis/redis基础/index.html","9f16ae827c2e1d7b2bd7972bde58f05d"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","d1df62001465eae7c07b66a6fbbe7b16"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","b5b8460c467d7ec1a22f971ec62457d1"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","13f275ab3e4e85a45344d00570bee7b9"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","034337522a88c5ec53d25f272eb8b1d1"],["/2022/10/17/中间件/Redis/Redis集群/index.html","507d42abdf114a4ad451cd0efd06731c"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","f01f3cc7fd5c460cc2d364250167c410"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","8564d03e800717c100190b48b5be1243"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","6bc8930cb1cf333ffe61a5a6dfea3451"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","5e9cfb4f83a89674931e2c0df4ed6a63"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","5f84f676f688882ffa38cf02da79705c"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","c275de40101df3840e06ba37bc55f393"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","c946f722017891cb9bdf7e9fe694901a"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","d518b9c7c4806fa95e416f3f8a25df94"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","7f5238bb4f926d1e962754ae244c9610"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","5a2774706fbc94448105e264bfd3af80"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","b0171c2fecfe87b0464386e1a8b638ed"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","b64566e3f2ed1589667c925b22a92904"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","4d582191a770479c56f64ca09107a8b2"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","0354f6a89b743446772d4d5420b37aa5"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","158ba706f0c9f221eeeaca2261efc067"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","cae34e0a9b32461e4bf976ea0061eb3d"],["/2023/03/10/DevOps/CICD/CICD/index.html","5c546d8232597cff35846ae3292395ac"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","c6957288c82cc90f541969d92e2f9548"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","5b36afe9ed7fe366aced5d98a51da085"],["/2023/03/13/Java/NIO/NIO/index.html","61eaf97b4cd3032dc3b65640736e37e2"],["/2023/03/14/Java/NIO/Netty/index.html","3f5f9ec8c090a49e31c09b23ef60b8e2"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","0fee542eaad485b2b8cffd48a09ceb3d"],["/2023/03/17/系统设计/分布式系统认证/index.html","f9d07f1c72bdd7d14299aabdb6cb9bb7"],["/2023/03/19/Java/JVM/JVM概述/index.html","f2a8a173bda5534fd87684aca93648b0"],["/2023/03/23/Java/JVM/类的加载过程/index.html","9afc6d2bc0a19403bd49dbfc87bb3a8e"],["/2023/03/28/Java/JVM/对象的实例化/index.html","670d0d34187e6e0016e8f1cf4d1777b6"],["/2023/04/01/Java/JVM/运行时数据区/index.html","8cf85ca0dd880d7a62fcd59bdf67b3dc"],["/2023/04/04/Java/JVM/执行引擎/index.html","51bc18b165125b4a4e32a8c26464b4a1"],["/2023/04/06/Java/JVM/对象引用/index.html","3903cbe85c3af5dc3a383781a4d0ab18"],["/2023/04/09/Java/JVM/垃圾回收/index.html","9226b9abeab6daa896b4ce882af991a1"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","ca478297b7be2af855356c1764f16439"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","1a82404f9e9abf36748dc0337ac98721"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","d48afc2ad60f5c01ac1c851ed4dff13f"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","44657f40aded5d6c9d95163fb6c925f9"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","a13fdaa4e00ee3a2c3d933e099e1e940"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","c9ac99ab653ed321529f132a303b3464"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","6082b7ab64f83fe12adde3618515a2d8"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","0bb4a79dd0661ba33b9325a2289d48dd"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","1b2388c8fccd767edc2da8f64f0cdf70"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","e48088ab4f4d614c50bce04b52fd18de"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","053878016ba34fa27e6612e3071fff39"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","39853265184e3301a182a098f9966995"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","84b7d7c036230b4f1d1d21dbe32d0c77"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","ddda7c7ebe5d67a4cf1de212e8c0128f"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","0479feed6011eb231e02ec0901435050"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","a30874bf4e87757156c088ff33d30485"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","aa9046dc4e25e3af222f3ed049d73899"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","a68a6f1470e14ac5dc46643b7f0c61ba"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","47c506faa62bba7887dc115f401866a5"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","de31714ed68d6cb6046a1887a9003dcb"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","458f291a07d24d2f723758676e460165"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","5f19f2228675a58613ae9b0b4c4f2418"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","348128c634746400c811c7a5f9b7068e"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","62237f3caed3f8d96a74466c0587b25b"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","e7f018188c56cb2def9fd1399d2c8db4"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","b1973c3f7c9ccf2c79bb2e211615f30a"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","623e2c221080faf889ffcbd2036d9cbb"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","a8c289e6b54c7d3c344e8995ba565570"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","a61812a8ffb1f848e4efa11afd088178"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","9910e4a1a754f5cba2e88d510172eb99"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","b64a35e4e8548f70decb564cc4e59d8b"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","c4c745bb3eef7261d01f8c8486fba7dc"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","f1c71912218f5a0293f46d58be476809"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","765b71c30715adf0d6685747f8606e6a"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","f954a3fef75d705ec9f8bd70912f70ec"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","935cd1b1b5b93e2f63f3e3fbe9b7405b"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","8dc667096f54bcd77ed635a1e24eb6ad"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","2ada9aa4f0c9d9adbb5dd5353a841d3d"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","9cddf5ad08526a83bd515fc1a1e29a90"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","6c9177f49d3898c1b5a05c2dbf73e4f9"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","c2bedf82e6e697497241f6cb5474158b"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","688f3c089a123cb1bbfa3bb3c51404e7"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","a47ec3935d4b5e2905c93702203dae56"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","5fc5ad9e84896b5625e49e0330c2c530"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","9783b6469b57db7a19fd8bd2c5a47277"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","61d3ee587f73e3147c1a3ddf1b15445f"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","b47cb00e09b7a5e0fa5c2ea8e1ee9190"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","0d38b4c9c83777c3991fded9f6f491da"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","426559fbb99df11b5cf2b0ce6d8b2042"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","17df3e53c3252365598a838ab6e28e9d"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","eb1e05be7ad0ac20c9249f47458b2cbe"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","1dcc366e76600e7ba2fd4ba559d4e098"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","9eddd4221209644b097563d822fa3be2"],["/2023/08/26/Redis做缓冲/index.html","d2cbbc609e16b712765ac6b0cd7800dd"],["/2023/08/29/Redis内存替换策略/index.html","81c09ba500728322fbdb20b67a5fa77a"],["/404.html","6d1c700d2dace27624c877adda794ad6"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","a4b1bc1bea6a6efa3e4ffbf0a0d74397"],["/archives/2021/02/index.html","07eb9797146559fd86649021bf6e8574"],["/archives/2021/03/index.html","a0e47d821939e44ae086237123332896"],["/archives/2021/03/page/2/index.html","0a9729309cfd12cb68aa894058f0f8fb"],["/archives/2021/03/page/3/index.html","e67e7e0c5732dd7b2c1bdd5a31bd49c0"],["/archives/2021/04/index.html","922bfaf6cbd280e303b8172d8b684408"],["/archives/2021/04/page/2/index.html","05a55495269d08be92fc4a7666d3dfd2"],["/archives/2021/05/index.html","a94adfc894c9eeac49ad34d8020107fe"],["/archives/2021/index.html","d91f81f95b65782c3e370eae192f463b"],["/archives/2021/page/2/index.html","5c1bf5b41c1af8b3eac99f70c264ce57"],["/archives/2021/page/3/index.html","39cdc19cbda6fb3aeb2f0498c189517e"],["/archives/2021/page/4/index.html","1eda22097f6ade334dd8ebfe72cac27b"],["/archives/2021/page/5/index.html","4e72bfbd2a71c65f5f68d7aa04784501"],["/archives/2021/page/6/index.html","f2643e7cca7890fc3fff4e040a58dbdd"],["/archives/2021/page/7/index.html","fda77422257cd1ff25c9cdc2443c537d"],["/archives/2022/01/index.html","73f9da73c7d573d4488dbd32f1ca41e7"],["/archives/2022/04/index.html","4e3a30e94132fbf015b3812529a27eae"],["/archives/2022/08/index.html","873f873472473cab75f1a2c0be00894b"],["/archives/2022/09/index.html","7014bd13c1dd720be3b556795cd1de1d"],["/archives/2022/09/page/2/index.html","e6db8d11dcab25f814abf8f893fc0df1"],["/archives/2022/10/index.html","09040b910766810dacd093cf165cffe2"],["/archives/2022/11/index.html","2c4d0fa87fe44f514de357ce9a0da853"],["/archives/2022/12/index.html","b72fd815099f0f377837b7d01a51e821"],["/archives/2022/index.html","c1ed6df791faae59c64173e3251d052a"],["/archives/2022/page/2/index.html","b34442013e5fcb6d7d4b588f30eb295b"],["/archives/2022/page/3/index.html","909dae79bcf8851f5daa44e486796d28"],["/archives/2022/page/4/index.html","f556ce9b2bc91a182481687fbb53ec5a"],["/archives/2022/page/5/index.html","37555c0ed93104fc9dbf930fbff63375"],["/archives/2023/01/index.html","391c0b5732b5e4d04218488e40b8c465"],["/archives/2023/02/index.html","fc1b17b143b6d9710c0bf98f2247a41d"],["/archives/2023/03/index.html","f07d851ac4cc22281e99bdce60dc62de"],["/archives/2023/04/index.html","ec1b9f44d85462af0c3c7b534abd0889"],["/archives/2023/04/page/2/index.html","84c678bea01826eeaafaf3c1349bfca0"],["/archives/2023/05/index.html","9c1972a5963546d62ebd043757359641"],["/archives/2023/06/index.html","2bf85a5a6486b86d3566f160f0d99769"],["/archives/2023/06/page/2/index.html","7c5763ff3a7fa664d19d17a3a72837e9"],["/archives/2023/07/index.html","6f816a16e367231996e81387d4e1fa07"],["/archives/2023/07/page/2/index.html","3d1a6c86c51d271dd7cd94c9df576f7d"],["/archives/2023/08/index.html","62b5d9ad8c711b74ec6ed3d858c6a499"],["/archives/2023/08/page/2/index.html","bb2f4b7f0e6884e0d35e8c40ac419692"],["/archives/2023/index.html","4b765577ea8f95b9af62b144b7db5751"],["/archives/2023/page/2/index.html","b0c8a584007689e4041ef06b8a624ef4"],["/archives/2023/page/3/index.html","0e5e4590a403c24ee2828a97f012023b"],["/archives/2023/page/4/index.html","b21ea2beca4ce95839b5789efcf4e527"],["/archives/2023/page/5/index.html","f37ac4dffd63cb4e2da685042caf3466"],["/archives/2023/page/6/index.html","4f0980eeef887fbe3a21f18b67807621"],["/archives/2023/page/7/index.html","a85e1e3ac51bed3c8caf7bd58c2935c4"],["/archives/2023/page/8/index.html","0955754e74963441746a4c3a2c618c50"],["/archives/index.html","10a139f083125301eb0748ea5cdf39e4"],["/archives/page/10/index.html","eee07bdaf0ec7f3ba459d278d353aa2a"],["/archives/page/11/index.html","53407c8b577ad797866c9158fd69be3c"],["/archives/page/12/index.html","c13b3be84df5190d732762bd62a6f1f4"],["/archives/page/13/index.html","4a6b26a3cea49870dd822898c1e17e8d"],["/archives/page/14/index.html","4a4835448174316111cd7e5313bea55f"],["/archives/page/15/index.html","30ba91c345fe68922c3dc27b39834860"],["/archives/page/16/index.html","200c9419ad1586ee8a9f1acf8396a262"],["/archives/page/17/index.html","07fbfacab8bfaa222db38953815b135f"],["/archives/page/18/index.html","7d0eb70eeb6da49f9c913acd96379380"],["/archives/page/2/index.html","27410d1f8b475c67cd3a24c823b2ad25"],["/archives/page/3/index.html","566ee935a4942e228042a6be2fc8e22a"],["/archives/page/4/index.html","03caac266c242e58b33414cc74a435ea"],["/archives/page/5/index.html","f95076ef12d21b2c0b23bbb4c1bc525b"],["/archives/page/6/index.html","073d794ee4b198bd38190019e04c8193"],["/archives/page/7/index.html","26d8b415abff5d2e41e555de061f1c3b"],["/archives/page/8/index.html","26c19621d567cfa3969d322cd8720675"],["/archives/page/9/index.html","cbd2deb8e0ed2975124710d50edb5f4b"],["/categories/Devops/CICD/index.html","4fc5b916c48c1c7e87f8a9096c43517f"],["/categories/Devops/Linux/index.html","3043ba6c5a5ef44d7afae31b77b8317d"],["/categories/Devops/index.html","1a2037b544175e0b2ab6767c584642c7"],["/categories/Java/JVM/index.html","fbd2f557c155c2b1966372a280327834"],["/categories/Java/NIO/Netty/index.html","46bba48bfc31ff1188b3bf44ac5b3b6a"],["/categories/Java/NIO/index.html","7626d51721843ec2c172fc9b175bde5a"],["/categories/Java/NIO/原生NIO/index.html","27413ab6198471aed3dc81bd6046b637"],["/categories/Java/NIO/文件操作工具类/index.html","35f217707712547c0558d94c71c17097"],["/categories/Java/index.html","3868a2e9a56191bd7f0227c4b6525887"],["/categories/Java/page/2/index.html","7a73aa35152a29d5776c128dcd7f3b74"],["/categories/Java/学习路线/index.html","00052c2c0f91735ad86436b8d39e31ec"],["/categories/Spring全家桶/Spring-Security/index.html","1d88887cfd784510b9dea2a34907faac"],["/categories/Spring全家桶/Spring/index.html","4ebf0a336a5aed0fbdae1ce2391f2d5e"],["/categories/Spring全家桶/SpringBoot/index.html","1fb03a305996b781d65fe504475b2b23"],["/categories/Spring全家桶/SpringCloud/index.html","cbc2bb34bb7d6e90d5b56ede3491e7ef"],["/categories/Spring全家桶/SpringMVC/index.html","032b1de2714c3c6c8b5165dbcdb9adfc"],["/categories/Spring全家桶/index.html","b67dfee6fd1ecc70f7fef43bae6c56f5"],["/categories/Spring全家桶/page/2/index.html","957cd950d3400d9f2ef61d36a2a1f2ce"],["/categories/index.html","9c90a16817bc9f49f4f884d80ffa0eb7"],["/categories/中间件/ElasticSearch/index.html","8b725ccfaf42df226a0925896fd99e5f"],["/categories/中间件/Redis/index.html","b14de59c024a4bd92e2aecf04a5b979b"],["/categories/中间件/Redis/page/2/index.html","573808951e0de0ea0b3e0f7b64ce9722"],["/categories/中间件/index.html","3bd2977dd0d04fd31105c07256012f82"],["/categories/中间件/page/2/index.html","2b7950e37c3c6f326e77b92aba1d45f7"],["/categories/中间件/page/3/index.html","c1cf2c0f5c6be37c2195c2c646b7783d"],["/categories/中间件/消息队列/RabbitMQ/index.html","9f66e22f201a79f7c537b368b707c04c"],["/categories/中间件/消息队列/index.html","7a6a8a4ce41facc5c353f3c2d59cd542"],["/categories/前端/Mock/index.html","bc7de25ae1a4773862c8ecd83c770a5f"],["/categories/前端/Promise/index.html","12f8cd11bfa2d925bf81014aebde8ff3"],["/categories/前端/Vue/index.html","0e6c3aff6947cc10c58fde606a9d0c82"],["/categories/前端/index.html","d7430e2a0cee664d5bc0309f771c51ac"],["/categories/前端/jQuery/index.html","81791a1957f9a3f0bce6441850f73aa7"],["/categories/前端/page/2/index.html","c35ef03ac91ba9c6ca578905dd20b31b"],["/categories/前端/原生基础/index.html","e43956ba01ec0437e5832335a6cf4780"],["/categories/前端/异步通信/index.html","ff9af4025b9daec5a314e52c8cd13452"],["/categories/工具使用/Git/index.html","b2aa916269d9e755f54d6c12b5b7e9b2"],["/categories/工具使用/index.html","8df6589d233e547b10e7a71e3826e67d"],["/categories/工具使用/markdown/index.html","cba16cde068d9a407f95be17e3cb4d9a"],["/categories/工具的使用/Docker/index.html","2235a899622ac43952863bcf42edf76b"],["/categories/工具的使用/Nginx/index.html","edbe2e230680a98b5696e90d7c7298d8"],["/categories/工具的使用/Swagger/index.html","508dbd856e34a924cd75994082e49980"],["/categories/工具的使用/index.html","fbac20262856de30f0957cfcf1dec322"],["/categories/工具的使用/博客搭建/index.html","856df516003b8ef01a581a78e6924279"],["/categories/数据库/MongoDB/index.html","62e461b43ecce067b11795fac4bf3f4d"],["/categories/数据库/MySQL/index.html","8bfc4eb628c7697e4eac1119c4a0a1bd"],["/categories/数据库/MySQL/page/2/index.html","2fe276b09ca1c557002bec4d4498fd88"],["/categories/数据库/MySQL/page/3/index.html","e74cf798fde36aa088e1bb532e2135e9"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","0b63730b3e18a967e5c40d87d19e0b08"],["/categories/数据库/ORM持久层框架/index.html","091b6f05d2d1ee596d247adca3671215"],["/categories/数据库/index.html","2a980fd7edbef725a549c63ff8ab83e7"],["/categories/数据库/page/2/index.html","b04af862129d438ce5c465ca99fb0515"],["/categories/数据库/page/3/index.html","41c88d485ffd72de47a8670ff5298268"],["/categories/系统设计/index.html","0f4381e323a79fc05eb42d9047162af2"],["/categories/系统设计/page/2/index.html","46c5730fc2d585b1e584baf0f0041f85"],["/categories/系统设计/分布式权限认证/index.html","df8db6b72204f753777a352791d68096"],["/categories/系统设计/设计模式/index.html","ab20c1053f31932317c3dff838e10a28"],["/categories/系统设计/设计模式/page/2/index.html","e6f985f6a3baf486ab390808f43473c7"],["/categories/计算机基础/index.html","d7683dd39117a11bb0c1e4b042e30551"],["/categories/计算机基础/page/2/index.html","3451c9f9beecf0baff66d8f669043a0d"],["/categories/计算机基础/page/3/index.html","834729106042d1aa8e3a685f619324fc"],["/categories/计算机基础/page/4/index.html","d19bf8fb9fe465bbf3bf15aebaad0a9e"],["/categories/计算机基础/page/5/index.html","c5f14b500e4288d2d76218dec1ed6c7c"],["/categories/计算机基础/page/6/index.html","12c96b63ea3b261d8d22e2e08b88baa1"],["/categories/计算机基础/操作系统/index.html","699f711ab3c20fef6c0bd104a882e408"],["/categories/计算机基础/数据结构与算法/index.html","688e6cd352912d7c33addfd0e5cdeb41"],["/categories/计算机基础/数据结构与算法/page/2/index.html","0fc264175afbe305639f13a8b7b3bc0f"],["/categories/计算机基础/数据结构与算法/page/3/index.html","e4236e1ece68d8b9976d80fd25cd5ebc"],["/categories/计算机基础/数据结构与算法/page/4/index.html","87b8bb49962bd39d81fe74eb9214548c"],["/categories/计算机基础/数据结构与算法/page/5/index.html","264b001e90bb0cb337295b8270fd7b76"],["/categories/计算机基础/计算机网络/index.html","665cacab7ea50d6506a00489665a4be4"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","1bd80d0ac86c01e10c9c294ec559bf66"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","6cfa3470950e857324c0bcf238004c61"],["/messageboard/index.html","77f74532bd5a8e29a3bbeff67a907f50"],["/page/10/index.html","8c70b4748369a94dd4b18ed33c7a5987"],["/page/11/index.html","b3902dbdc3326323f9ddc92710ca627a"],["/page/12/index.html","b500eeb7066f445edf99d50dec2590df"],["/page/13/index.html","19834cde50e1e24012f7bfe78b483a81"],["/page/14/index.html","04f7e3bb0897c7c11783de558fe9ad51"],["/page/15/index.html","86fabe8876d4dca56e9c7a1cc77b79e6"],["/page/16/index.html","d1f6e362dc2804d6b18ba760ee995a42"],["/page/17/index.html","86b03ffa6aab28bb67158e4be2bd94c5"],["/page/18/index.html","f1fd24c5fa9cc52e781c0065c051cfe5"],["/page/2/index.html","c544a2e227f4ec1dfde833182154a6fc"],["/page/3/index.html","ee0e13dc85ee74df358aa7aaac252e0d"],["/page/4/index.html","e3e39eebad01ef42249456a89cedc2d1"],["/page/5/index.html","b66abf6e446955e8b885bf14dab51a9f"],["/page/6/index.html","9a31ebac6cc9522c3cfaf5533aa3546b"],["/page/7/index.html","c157c9532bb1e910f53d211cd4edf4f5"],["/page/8/index.html","5a0cf2e6715206be5fdff04adeb3f591"],["/page/9/index.html","c75a60fb5ad011a254f0ecc16b7ad00d"],["/sw-register.js","6647835f7f939780b6d5386d1fc6fa3f"],["/tags/Ajax/index.html","20f515e47c75b40d25a6bdc12b80a7f9"],["/tags/Axios/index.html","97faf86d55ceef1795031c51c02bb219"],["/tags/CICD/index.html","438c9b7ade399981c7bf68e025441cde"],["/tags/Docker/index.html","bb49af36a41348d4b89bb627c350af9b"],["/tags/ELK/index.html","d499373334dc34d16bdc8afebb7571ce"],["/tags/ElasticSearch/index.html","5d63c8054b0225c172adc2f46ae991e4"],["/tags/Git/index.html","65039ec9450e6d46e77db4c91efb0ac5"],["/tags/H5/index.html","903571d7024a99e83be4e66b128c3f8a"],["/tags/JVM/index.html","fb99e42cc0e66fcded6dc2896af67ea5"],["/tags/JVM内存模型/index.html","5e77c8124ebe9a9ff7f14815744287fc"],["/tags/JVM执行引擎/index.html","c6de899764afddacb64e0c1eb5fb98d4"],["/tags/JavaScript/index.html","37ffb24384ff08d91d40c9e1bbb2acf2"],["/tags/Kibana/index.html","2047ea276ceebbc486a713d663ec11c5"],["/tags/LeetCode/index.html","201677730f3c7c4f05fad764402bd6d7"],["/tags/LeetCode/page/2/index.html","d060df3efb70fc9742994d66bb005eed"],["/tags/LeetCode/page/3/index.html","39bdaaa5d94c833bb27c7dd92941c690"],["/tags/Linux/index.html","0a6e1f99f5dbaa6df748fe8dee482005"],["/tags/Logstash/index.html","6629fb8e290608cfa6f1737c4547f9f5"],["/tags/Mock/index.html","0948af9d79eb50ea531f5c9d7e9de44d"],["/tags/MongoDB/index.html","66796673a570fd798f9c550cdc8eaf65"],["/tags/MySQL-事务/index.html","51ac7be1a8533672361f6d57a175903b"],["/tags/MySQL-数据类型/index.html","e55360aeaf46c1452c266890392d1478"],["/tags/MySQL-日志/index.html","fe0b081061a320b4be479855b7aa0b78"],["/tags/MySQL-索引/index.html","fa61a38d87ca1364ca179d6b03d08b07"],["/tags/MySQL-锁/index.html","ac4368a6ae19bdffd214a9d8fe79ce6e"],["/tags/MySQL/index.html","2f015ccb16b6ed5c3f48d094910b7983"],["/tags/MySQL/page/2/index.html","e0f340613cbcb03457817a815f111a60"],["/tags/Mybatis/index.html","c94ac9f1edc8426d068b5798ffc97e1c"],["/tags/MybatisPlus/index.html","00f237008cad76424c85839db2bc04d9"],["/tags/NIO/index.html","3d01a883751e7a0ff59786a45e2b5f9b"],["/tags/Netty/index.html","71e381cbc1cab18710aff2f265e64916"],["/tags/Nginx/index.html","c3538658301d851713bebb33b499679f"],["/tags/Promise/index.html","b23a0b323a6c824745f85f1ce1a99f48"],["/tags/RabbitMQ/index.html","1036c8e8e1d7d12e59aadecd0c900f88"],["/tags/Redis/index.html","5439a9b0a3d2926cb7fd8733e98fb6d3"],["/tags/Redis/page/2/index.html","0d4cae06d673f1c82195cad7bb3a4e91"],["/tags/SSM/index.html","7c9f9ec35170ff5feed4acbcb3ee5d01"],["/tags/Spring-Security/index.html","a163c73e4dd1716afb807a52283eb4a0"],["/tags/Spring/index.html","fbc15a5d7bcd9713ab6c64af4428c784"],["/tags/SpringBoot/index.html","9495ac0abae97a7bdfd2602a1aaf9cdf"],["/tags/SpringCloud/index.html","f9e80d7d6055176bd62023814c4b1ccb"],["/tags/SpringMVC/index.html","e0bfbe2bfbdab59afa445d6cfea21502"],["/tags/Swagger/index.html","084816c807ae3e05e93d15745c3f3d8e"],["/tags/hexo/index.html","c7f52b4e1352dc88f7aaa9ecff166488"],["/tags/index.html","cbb89a8ac5c2687adb3ebc63e087f703"],["/tags/jQuery/index.html","353ee02524fdf0f79492926c4a85513b"],["/tags/java/index.html","3be0ea3b2982695153796aacc1ea2f5f"],["/tags/markdown/index.html","f1a69e5fe153c884ee4d0ef43762798b"],["/tags/noSQL/index.html","674eed52bb9b9bb5e1c76ecd56c6ca83"],["/tags/typora/index.html","7b1ff6fb222f98c86096cc89e3994e84"],["/tags/vue/index.html","ac564cf6bbf47eb8a540a2f8613eea58"],["/tags/享元模式/index.html","f9b36fcdcedaea83748c717b0bfcd5e3"],["/tags/代理模式/index.html","541b5482a79605d07953f45f44862cb3"],["/tags/内存管理/index.html","f04245de8c95d3c47a8f7b05e4a24e4b"],["/tags/分布式/index.html","749f27f3bf9c05de5077d2a1bbb8c0fd"],["/tags/分布式系统/index.html","8875388f0184fb1a68c8db9d2fce52b7"],["/tags/前端/index.html","dd2a1af8115e0fad742b844ea4988fe9"],["/tags/前端/page/2/index.html","c9ffad521f3935a718ab644738f5c558"],["/tags/博客/index.html","1e65c2ca07f898de7fc9dc4db156979d"],["/tags/后端/index.html","f1965cb3055f384d1430324b5d738382"],["/tags/外观模式/index.html","97f5e3bc8f0f9acbef3099d8cbb56ecf"],["/tags/容器技术/index.html","79a02287b8488380a1cea698cdfb2a3a"],["/tags/工厂方法/index.html","3e3b7534936e6e4722b62575d958474f"],["/tags/微服务/index.html","11f422565807058f9295d3be8a89a884"],["/tags/抽象工厂/index.html","1356ca47d4f796c3c1c207bd5419af0a"],["/tags/持续集成持续部署/index.html","d1d7b1fa0742036ba268cef0a2e562e4"],["/tags/搜索引擎/index.html","f4c192c1955fb0f658241a3aa9d378c1"],["/tags/操作系统/index.html","2cacd17a348a862f1428ebca09f92432"],["/tags/数据库/index.html","c58c6c5583fcabc51e07bf9286d3148d"],["/tags/数据库/page/2/index.html","4fd2e41b9de52038ab145b50ea6e575b"],["/tags/数据库/page/3/index.html","04c72e61f3ef074d656335a889a20aca"],["/tags/数据结构与算法/index.html","5c0a5a42ddc2589e0eec1027c091e215"],["/tags/数据结构与算法/page/2/index.html","f11373b1d18006e98b3149a7ea21018d"],["/tags/文件操作/index.html","6a8c8481b7ed75b73296b60ead6a571d"],["/tags/日志/index.html","6731c39c63ba07eac4991e1450ddcaa4"],["/tags/服务器/index.html","b7503237e9a1ed2a6aba69d4f5a0b2bc"],["/tags/权限认证/index.html","f0331b6263e26b6f85176ee21495807f"],["/tags/桥接模式/index.html","47732eb28c88acf308e931110d3a618f"],["/tags/模板方法模式/index.html","0199eeddaf3776feb3d6c7fbc9197590"],["/tags/死锁/index.html","692f944d69181afdef77a17a88cbb457"],["/tags/消息队列/index.html","64a56b07ef5bab4c3425d658519bfa90"],["/tags/版本控制/index.html","0eaf2affe5e03e2145cb67e13ab15a4f"],["/tags/策略模式/index.html","3c76b9e003796863da79aed7c84257d6"],["/tags/简单工厂/index.html","460a76475e8fc5f8a4f56a54959a5ffa"],["/tags/算法/index.html","8978a32cec109cf550898e23336eb3f3"],["/tags/组件化/index.html","a13c96b4265675267bcb328f29468687"],["/tags/缓存/index.html","8e7ee81db1ef0dac4921b15afc716ad2"],["/tags/缓存/page/2/index.html","18c5cce3c040710745291ca6e2fabd55"],["/tags/观察者模式/index.html","84f2ab6151a5a98ac036c7e199ec3268"],["/tags/计算机网络/index.html","f413211179409f14d3d2c0dde8b53955"],["/tags/设计模式/index.html","f2235f33eb0a45a83c1e9a9244b78d7c"],["/tags/设计模式/page/2/index.html","9c5db1f521aece5455421b5894a32da6"],["/tags/进程管理/index.html","5e9f2f241d7d98a20c26dc96d05460b7"],["/tags/适配器模式/index.html","24dcc46f8659547a28fc22c6cf700db3"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
