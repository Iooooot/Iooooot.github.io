/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","1b4bcae215c2729bd23fb29e803d67df"],["/2021/02/22/工具的使用/博客的搭建/index.html","2ba98bf58cf0606bde321fdc7f50a4ae"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","de264db4badd16a8e2647f0ba82609e3"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","c6050a61eccd3445a1da8b578e2b5e2e"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","b5dc6fb403d0bc96f5a88316b1fc6382"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","e29c2d969a637f3e92ab939be8299b34"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","3f15e8cf82401c1fac3fd1588e26a95c"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","63b11a169e2bdac3b4fab11c62717644"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","91ba3be84a20333fe031fb20577c988d"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","750e625310a1c01e537237a407439a67"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","b2499949f3267bb35787761f7647d5f6"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","72cc1fc17d6c578d22da5dde259b9c89"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","6e4472752b52ea5c5e365f85eeb5fb53"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","d13d1c1af3890d0902173a26ae55f0bf"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","9b787714d795f761b51590d5ada71492"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","f62a7d77408aafacfa2a95b0fe7cbb7e"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","30b9c963bc56e9fe75aa7c7639939705"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","289e3e3a8d4a8351392caee31541d18d"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","48c9f5b794a65658bddb812749bb2d2c"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","4c602f726c051fbc4b3409c3fa2f0620"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","7a1018cd4918568144793c185cde2afa"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","7aa085de7ed95af4c7b3b40e2ad88f5d"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","3e96565b73c7e85566e0aa65f4be0aff"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","d6eae56847a424ce53674cf1328162d1"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","b4c7df05468275340809bc8cc1726ce5"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","18dd6eed859532ef2fdb2a5891fe2849"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","278b8abd3dc2d80cf8b1077e77c7a68b"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","63a2e0c1b62bfe7a769a9e5dffad70b1"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","ceffbf2ef3c3e7682a9195f84cb56ae8"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","12a2f097df68d6da09a53b09d4ae0bce"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","ad16a0384b0eaca29c02946ef51fc941"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","43f5ceeefcfb2e003dd2bd26c58547dc"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","e4319a9ea55c4f1b78e766d639991c73"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","b81580873a4d47fcc4ce9338667666c2"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","24a9f737a2e6ee3f929f9be5b52268f2"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","93a9a7fa39901bbf769d9d757ea50fce"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","d1cc37dce155dd10a9e649c7cdcd1fc6"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","1a104410695b61e0be7cc0724c249976"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","e4e5494a083602139ca7923436b44d81"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","e1408c6d628e25b9b54fbc853d7c14a9"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","d47deb6081946c2d35a3352cab3c4c4d"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","c3db572bc638ed4d7a3e5207f7acdd0c"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","ef894585a5ee118e6bc039ff6dba56ed"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","c0c1d9bed25a45693077cf943cf334bd"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","fa2225feda55b5502ae19812a74baf25"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","c2ca2bc3163d312cf8137908c9f71707"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","f65b164487b982ffa174af6a31ae1c46"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","2c3a6e239c0fa29c42484a7af719ab8d"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","4f859278ca0fbfee94c426bb905e8b52"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","067697867de662f2e365adaf49d28ab1"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","8c3016d65537530c172d51089f68bc72"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","3cd2b13df9b4a2a5ce30f194232ae719"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","0b29cde86b92773779c722469c9b3099"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","f40f2ccac792f18758a4121f2b7b446b"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","4e39278843ea92888c2213c4c4c46169"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","3fc18db1152dee9d1af49025aec23191"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","affdee773394a9dafb398cb7dcfdec88"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","d0397524a75d643af83fa8b49452f619"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","49b22d4db72154f86009a1f18a64506f"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","37ce90681a5434361114239804ebaed6"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","934575107f00ced9f14ebf0ef2a98225"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","71d87cf4a532ae3723814aa73afb54f9"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","0a1c135512e54e07c7a561b0be7ae398"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","9fc45f75dbba18dff4bfda34487ee616"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","ca7211d2c58de389b368ec9e30fae54b"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","29c103626ecec7610102a61fe59bd789"],["/2022/08/17/前端/jQuery/index.html","f2db1cd476be2bfe79cb1baf41e7461d"],["/2022/08/19/前端/JavaScript/index.html","b033a2e641286c1844082f27017fae82"],["/2022/08/22/前端/Ajax/index.html","97a5fbb47d6433136e88692ba4fa169a"],["/2022/08/23/前端/Promise/index.html","025881ebb440f795dcbb27b2e53f7e48"],["/2022/08/24/前端/Axios/index.html","64bb792a884058d762a3c371b7b7cfee"],["/2022/08/25/前端/H5本地存储/index.html","39ac7e7db7ea2ea34831c285b819af50"],["/2022/08/26/前端/mock/index.html","e305255a0e75f5c09331deb60a87fe54"],["/2022/08/31/前端/vue/VueJs/index.html","506fd22ae05d8881959385115e2fdc3d"],["/2022/09/01/前端/vue/vue组件化/index.html","2269905f5b97df14d97c65dacf72b425"],["/2022/09/04/前端/vue/VueCLI/index.html","056926d98e6dee4ef96a9347555ad1f5"],["/2022/09/07/前端/vue/vue实现动画/index.html","54836612504e82cc9d8a4cab7cfb9ed7"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","16f0e400dee1fc482d70060c64b6b84d"],["/2022/09/10/前端/vue/Vue异步请求/index.html","8793de6d3c4742e7d944ea0ea53d016c"],["/2022/09/11/前端/vue/vue-Router/index.html","070e5037f1d04a1d4479583bff7ca10f"],["/2022/09/13/前端/vue/Vuex/index.html","67e20f02194b83fae10a31ed0f4b7e26"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","47aca26e4d316191d644aa7594587c69"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","23668219234c5d5271977c626122f831"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","80923278a9ee9df3ef9a09a9b9bfd976"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","ac0d532c9ff82d58c01ddaea4c487009"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","5e8606de4bf2b81aae74d8ccf5c77176"],["/2022/09/28/DevOps/Linux/Linux/index.html","a8f32a7d8ed10496c3c943ebd81ddbf0"],["/2022/10/02/中间件/Redis/redis基础/index.html","0a0e5d9e4361542c8ed18e96433fad4f"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","397d3c8d438c0d754e56d9b8bf7dfb53"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","92b454622cf791fd134906b1b18da9b2"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","4cc22738748bee1102b1080d40b820a3"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","137e3b2589b33601e43f2004b6ad318a"],["/2022/10/17/中间件/Redis/Redis集群/index.html","0089c803a2051ab26d005b5cb27d4adb"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","428543da8c5eeeab9281b4032bc15e3f"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","31d5443a94fc513f94d753c10951a234"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","09bb993912770ea9cbb7983763361a1f"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","a1feb5eb6d08b1dae1067d72502be559"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","b84194a733b281c2ee9c1a3b85818f4d"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","62915c059fe766a37825d798a874020b"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","3467c852307e1cfe7c3ef78def800f98"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","9d7ca57717f6c30be0ea623c943567dc"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","9cc9ad51c1f6a08b30f8a0f38bcd039e"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","24cb409bf05d2e9a7bc23aeebae07c02"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","acd44e6ea65487cfa5b6da946871adb4"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","97ad8c3eb2564990388950862c38eb1a"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","db7bd011d83b9d861a1205f767793a59"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","e4e59cb9c562260d69ffe1d95f84d057"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","dbf394e134a000fe88239a0db23490b9"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","9dbba5ac6d42ae01e3eb49f17b5a425f"],["/2023/03/10/DevOps/CICD/CICD/index.html","6fa557df71b88f22da989007ae7fb59f"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","757e699af3e35a501fbdf316e7d6a848"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","dae1eee10092272c5d2897360907042b"],["/2023/03/13/Java/NIO/NIO/index.html","760d8573c4e208248f73f4ef34715bb9"],["/2023/03/14/中间件/Netty/Netty/index.html","07634370995976e45eeec63096182a43"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","99eff84d04152480219e8fd9cfb1e2dd"],["/2023/03/17/系统设计/分布式系统认证/index.html","2f555fd05d81be7e8576b250564098e2"],["/2023/03/19/Java/JVM/JVM概述/index.html","857a87e9bc23a3c25112fa2b97c67043"],["/2023/03/23/Java/JVM/类的加载过程/index.html","c1d5b0ac9b50952c880888347d0bc87d"],["/2023/03/28/Java/JVM/对象的实例化/index.html","31249066d7b94b01742b2e49acfd7978"],["/2023/04/01/Java/JVM/运行时数据区/index.html","c29b03d070585f93130ad867ce67a2ec"],["/2023/04/04/Java/JVM/执行引擎/index.html","72679d84c389df09df573d6222f7f6c8"],["/2023/04/06/Java/JVM/对象引用/index.html","006fda706c8ef3ef201406b4330e3354"],["/2023/04/09/Java/JVM/垃圾回收/index.html","303d22927a1c67ed913b6a9f7d5535bc"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","89b247428addbe7d566784036b5a85ec"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","84816bbc2cb3d9cde08f921162f719f2"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","bcb3d3fa511882330b348dbadb02bb5a"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","9b3c82a24bf9b320ebab51d877699cf3"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","c9bc4c8d46a8323dc3db7397c3d964ae"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","898d7d09dfbd9b7b6b794baa4aab7c89"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","bb46fe474c980af37c7f3827f97cc402"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","a4e77fd5f71e9e57fa1fed8d45e89b32"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","c92ade8ba2a38a68762f146ca198106f"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","278d11a62d54b69a809fd3c13ae5943c"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","62a3268c57d71afa9429b2fb44cf1cfc"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","4a2930c9719f45f4d606823b538e782b"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","ba00fd8ca46a99e152431e1d5d54bf33"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","c6049d8404e85b9854d425b9a043ed20"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","92830ff7f5806dc5c515c48fa2532ba8"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","187b13120c6a7d3802612e838c67a6e3"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","08d7ca94d1e434acbeef0257d28f7c82"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","34b9a4159363959f80e2f9da716b26ba"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","2145a6256c0c850739f2a0cbdd8718b5"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","8a65869cb98413250f4d65008e97b471"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","2832bab2ae6004bf5567ce7b0653c928"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","7281500f7a1a380c9d8215c93c2eacfa"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","9f16451b04fa1a0c22a08692f56b03a9"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","5a41ca346ed3a2ad3bd813b87b36c453"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","b6fe85de43ebe5a9d289a39e12e8cebf"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","090bfd86ff60fa7f2e74a6d3c5643cb7"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","add3612193b668c87fa1d535082d12d9"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","7346037c1833c6c4056d835a26683cd4"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","3b0d7073c7be8ec30b7cc5fd1ba989f3"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","86ca8d24a419b24ceca7ab6f5b8916d2"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","dbde3e94ed6725a878e6fa6bb7fca7d2"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","579294d04bb73173a15f7f0bcc8f390b"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","8a49dafc3e4fb5e69aeeef839335ef87"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","78ed909df00fcc11f259e93b3fa67550"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","eda309fa286b60bdb89b56b35eb03156"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","f0ba8e52aa9b707ab2d5c017276c85b0"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","273434da5e9c4db149f632b489c3df9b"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","13a1da4386fc7afd87d0fee4575ee81e"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","8a4c44e0a6cca6d81cb62c07e3b4f5e6"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","bd199146832322b4771d671c851a9d7b"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","2b3d2541156304506a22d7f92ef1f045"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","ae981657f78b8fa12a76f0e353699e2f"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","3be8200203344b4b5fe58c787e2a73ed"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","9b193cac029d22d058250c365c265188"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","7d85b4eed7fd9942362cb07709b26912"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","e207bcb51add9c749e57d115240dc835"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","42a2a376c1d8853635217cf5ae919657"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","abf26a9b00e741a5eab75f70e2978d4c"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","ec70f18b69013528ea1b92f29b9c1175"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","70c38e38cc76f689beea69eb13b830d9"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","8864ab03698c21432f5e767fff3971c8"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","ccd515ac84490648180bad955c08531e"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","7e023082b29eb0f3a933f417ee617518"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","a20bba59487d83ef9c1d87fe5a314bea"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","5ad44db6fb5a9163f6bdc83b4ef79ba5"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","5eff7739b7f2f1072ac0c9f8b82289df"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","69f77cf1dd109fde4ae546804ca62aff"],["/2023/09/04/中间件/Redis/Redis事务/index.html","2e1f70717b92af8ebfa0999410dd683d"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","02e3f0c14226fada55572bc4db9d72bc"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","dc0b91089fbf68c70b9eeb7f790983e0"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","544e2ec77a4ee99bbeaa3f5fe6b046ff"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","7dc71d8376b8134c4a0b7ce2d13040e0"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","28e1c92d259145b11fac583dd3468988"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","21f68784124c4d9304f7013f88376716"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","36ef4061dd93095ed0c05fa9b3012eb0"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","c77dd311e5a912f4b1f8a9e4dfe556b8"],["/2023/09/22/Java/NIO/零拷贝/index.html","bd4eaed959ad5c080b6b7c69c12e7bb2"],["/2023/09/24/系统设计/JWT认证/index.html","03cb176072c333346503b2d856e979e3"],["/2023/09/26/Java/NIO/Reactor模式/index.html","cf05fb22eddba7c68aad56197afa3eda"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","655c965d9f8cecb1385ea5f822ae8ce0"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","6ecacb2beb10d83926677e01c53174c4"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","2341685ab1cceb6f4ed4769d23cf807b"],["/2023/10/09/Java/并发编程/共享问题/index.html","5df6c9ef3c1b945bef64a3aa948c786b"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","35a4b0465ca51fda30eacd699054f048"],["/2023/10/13/多线程设计模式/index.html","a77cee05af56cf66ef209ea38e06658a"],["/404.html","402ff3091e489c0e23e4e3922760c314"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","63c4057638ace30ab724abe6850a7a83"],["/archives/2021/02/index.html","7a4f6791e9492aebf9f37ea77e9fc52a"],["/archives/2021/03/index.html","264b2bf1fa9c81b888c687b2d42af4bf"],["/archives/2021/03/page/2/index.html","2a58ed2b31dda8a272bab7393ee1c15f"],["/archives/2021/03/page/3/index.html","2ee283fd9b45338ca9beeed74700f108"],["/archives/2021/04/index.html","80e449495b21f008e3960030710eb57c"],["/archives/2021/04/page/2/index.html","d9de9ff2d4f62d1ae1066698923319db"],["/archives/2021/05/index.html","586f7f1f9b1c009e447c5c82767e9419"],["/archives/2021/index.html","7460e9b855f4762774ef6bec314991e4"],["/archives/2021/page/2/index.html","d7f351410bb8c05e744cbbb9e18f04ee"],["/archives/2021/page/3/index.html","824a7327fe8c7e4b2761ced96afdd01e"],["/archives/2021/page/4/index.html","e9a025963ce77f37d583b86af53170ef"],["/archives/2021/page/5/index.html","b687c753b0d1207871da989848997b59"],["/archives/2021/page/6/index.html","527408b330a57c5e901a27871d6b5360"],["/archives/2021/page/7/index.html","b784944f4137e868cd3cb841e3906233"],["/archives/2022/01/index.html","cf111909bd2a8e77f15cccf39a793df3"],["/archives/2022/04/index.html","ff7c58971e5119b31eca9640d8cbea72"],["/archives/2022/08/index.html","f75fab6e5ea178de8e81a58cd1f1fe0d"],["/archives/2022/09/index.html","67ddb84f2eb638cd23121cab28588a1b"],["/archives/2022/09/page/2/index.html","3a1f772d6fa17268e286e1aa558d1083"],["/archives/2022/10/index.html","270f027586f9a4a72ce35cc454999f43"],["/archives/2022/11/index.html","c4cca26ec8f500ed9dc2e802e26a0b3b"],["/archives/2022/12/index.html","44ec38aac175e578d59cc36987d3f283"],["/archives/2022/index.html","c835fb599e7fd223cb4d778144c38abb"],["/archives/2022/page/2/index.html","dd507301a65841c0b2e24317f1c82191"],["/archives/2022/page/3/index.html","61eb9a6b33c3a9ea7c574fbf325e573f"],["/archives/2022/page/4/index.html","d0b8f8d30e50e4394f15d6aa9c59eb5a"],["/archives/2022/page/5/index.html","fd0885c2c374f8a7fdcef9bbe6bc27fd"],["/archives/2023/01/index.html","4471d7cc90ca79f68f99e7e355d4631c"],["/archives/2023/02/index.html","9df47536fd91df0ef91e992d18b0fa04"],["/archives/2023/03/index.html","4087f03883586118242b5b36f08269ef"],["/archives/2023/04/index.html","0cd96a83f69561a65befff9f68f16f8f"],["/archives/2023/04/page/2/index.html","de25990726b275f20ac510dcf3b2e8d2"],["/archives/2023/05/index.html","10403cbf7f9d7dc906e4a243a4d7f2e9"],["/archives/2023/06/index.html","1c01151d03940b68fbdf8e4ce447b1af"],["/archives/2023/06/page/2/index.html","83e867741cfb530dd01f68551955a5e3"],["/archives/2023/07/index.html","1371d58bd529975e25bdaab3a9125f9b"],["/archives/2023/07/page/2/index.html","29e369fa060a4d3818518538977dc5ca"],["/archives/2023/08/index.html","3d7e94ff67b5b45e5b2ae1e038575ad6"],["/archives/2023/08/page/2/index.html","c5628e0e78b54d647708492ac3eeb963"],["/archives/2023/09/index.html","4dc896a7f8a810133463f13bc184136b"],["/archives/2023/09/page/2/index.html","3e7bae91d7030d67afc5675075289a4a"],["/archives/2023/10/index.html","0c154aa9dfe12e1c0bbb151048da7b13"],["/archives/2023/index.html","1f64ef0c7c8989a86068d1dcf4a8a4b8"],["/archives/2023/page/10/index.html","cb0eb29d519d1f7aeec9c3171a82333a"],["/archives/2023/page/2/index.html","34a9067947b85898422abb4f1fad3fdd"],["/archives/2023/page/3/index.html","0bf65f100ce95dc984e251d688cab314"],["/archives/2023/page/4/index.html","f42877e70350c31a7ba0e71af759d9e6"],["/archives/2023/page/5/index.html","cd2b138d842dfb5ce5798dfca5b41020"],["/archives/2023/page/6/index.html","45745d94521947fc1347e114f86775af"],["/archives/2023/page/7/index.html","67358b0a2642f24026c2ea98ae66aaf6"],["/archives/2023/page/8/index.html","48e08ed82d74b9002c8d58ddc7d5afc3"],["/archives/2023/page/9/index.html","2ad436e5a1dfb9a71af756033bb8c795"],["/archives/index.html","5068f59795124ea395f60629a710293c"],["/archives/page/10/index.html","07d506ab36c829a0c1d96bed8ff48692"],["/archives/page/11/index.html","eacc535abb917b503f76112da558c004"],["/archives/page/12/index.html","11e6da184114649b355aac2a134de96c"],["/archives/page/13/index.html","75adea73adac3d849518625de04e9fa9"],["/archives/page/14/index.html","7af262997fdf4dac872b453d11315cb5"],["/archives/page/15/index.html","b22eb1abe24ad3981ecf0cd280ec444c"],["/archives/page/16/index.html","288c0b1d1b9e276d6e6b6bf1e4f3482f"],["/archives/page/17/index.html","a8183f7d5518610e920e6c9a0b95bc71"],["/archives/page/18/index.html","33cb04d49088bbf4cfa576ff976603ac"],["/archives/page/19/index.html","b16e74dd2c20aff969ca8acd462b0f4d"],["/archives/page/2/index.html","a0050d2692deef305fe7a95fb673f3ef"],["/archives/page/20/index.html","dfb40212aa974b64c931ea6070ce41e2"],["/archives/page/3/index.html","623c77d9fcc8cb2e1d238b4179aaf19d"],["/archives/page/4/index.html","721316fe10e7ef75359e99201ffe6b11"],["/archives/page/5/index.html","2421dfb8b7aebe9b89289fbdc89164c2"],["/archives/page/6/index.html","053148bcbf2ad30a08a332b21aa29f67"],["/archives/page/7/index.html","2dd8d71587f0c9b4251c2b251bcec9ec"],["/archives/page/8/index.html","bd4cb32f1e3f7da87ed7c4630b9680c2"],["/archives/page/9/index.html","ffca4e8efbe3b70b47f2e9e6fb2a8f06"],["/categories/Devops/CICD/index.html","350d5fa10a9e42da0bea1e9ab76560d9"],["/categories/Devops/Linux/index.html","11d6586de4a52192cf587a52d8abb0ac"],["/categories/Devops/index.html","fb562934e3c07cb55079cd1b6222b71d"],["/categories/Java/JVM/index.html","5ff6c89e00cbaaed0143c041186498a8"],["/categories/Java/Java基础/index.html","20313f8e7901cc4e263d0ffe555827bd"],["/categories/Java/NIO/index.html","6d92538039ad958e613a559be90c6118"],["/categories/Java/NIO/原生NIO/index.html","7ce043ec0835a740f4ff651694a1d73b"],["/categories/Java/NIO/文件操作工具类/index.html","c03ac22fb3e9a5cd2a9a355f85c1e785"],["/categories/Java/index.html","e3760daeb77b2899173d51342fe716a3"],["/categories/Java/page/2/index.html","7d44e5550ea34b8dae77a6a5249dff32"],["/categories/Java/并发编程/index.html","5910afcc994601feddad549abaa2372a"],["/categories/Spring全家桶/Spring-Security/index.html","bd48c7f4f7f73c1dd7796d5d9606fa60"],["/categories/Spring全家桶/Spring/index.html","797976fa9c574992c171afa2bdff93e3"],["/categories/Spring全家桶/SpringBoot/index.html","5d226927963ba41277094049261bd718"],["/categories/Spring全家桶/SpringCloud/index.html","7140d147f8c99a931f08d2f44402fdf0"],["/categories/Spring全家桶/SpringMVC/index.html","e2f9793055551c84a45057e6773e129b"],["/categories/Spring全家桶/index.html","a7620dc10a8ccd2a9f8f64d80856d591"],["/categories/Spring全家桶/page/2/index.html","9d272bb77fc8ef34409a010279854122"],["/categories/index.html","b11e221e650f19e9f466c72c5af59502"],["/categories/中间件/ElasticSearch/index.html","438a52f1aebbb465fc237a9e0bc082e7"],["/categories/中间件/Netty/index.html","1c6807b85e8c25b347b42eaa3d04d709"],["/categories/中间件/Redis/index.html","f84193556b1ebf439da8f4954bfb9ca2"],["/categories/中间件/Redis/page/2/index.html","ccf23ed88d84a4a8400b2a7bf535328b"],["/categories/中间件/Redis/page/3/index.html","579c849d07638d09e469acfb1de28823"],["/categories/中间件/index.html","950dfbaa901f4a089a7b3a952e73920d"],["/categories/中间件/page/2/index.html","c6ebeecb073ff3f560ee003eb60b1d93"],["/categories/中间件/page/3/index.html","62a4c33e4e2cddb826f3b2f99c7c2678"],["/categories/中间件/page/4/index.html","877718849c6d0dd1f0254bac3555069b"],["/categories/中间件/消息队列/RabbitMQ/index.html","128c8ac0a747d33f2744db12cb3ecea9"],["/categories/中间件/消息队列/index.html","b83a24273efa9cc806bfc0ab54bf3dad"],["/categories/前端/Mock/index.html","b6d81c4ec8e713ba6db8cb04c1a5233d"],["/categories/前端/Promise/index.html","9c6e611ee07a9d53b3c3da7a2035dea6"],["/categories/前端/Vue/index.html","d0e7642f954ca2a27f8003410902dc6f"],["/categories/前端/index.html","d1f2d0a387db39f44f3ca0f8d8fc6f94"],["/categories/前端/jQuery/index.html","4d02bf825e0a96e6a020697943e46a20"],["/categories/前端/page/2/index.html","18bfd3bdce60e1a9cd1fde79689d880f"],["/categories/前端/原生基础/index.html","55d0db6f150e7deb7ca170c071d61dfa"],["/categories/前端/异步通信/index.html","3e404074e5a67ff19286d0f829055a42"],["/categories/工具使用/Git/index.html","f2b6aba2deb9e55946fca53c9019d3fd"],["/categories/工具使用/index.html","56663717e8d34c6c8e0d71c64199c8fe"],["/categories/工具使用/markdown/index.html","b2f63cff8a483c0305470a0511685116"],["/categories/工具的使用/Docker/index.html","96f5e4276caff797fe8ca6419373db72"],["/categories/工具的使用/Nginx/index.html","85ef596d36cc878b2f903f364ed4334f"],["/categories/工具的使用/Swagger/index.html","68279ed189ba476e31963ef52139b384"],["/categories/工具的使用/index.html","c82c429af903a3ec9754499188673152"],["/categories/工具的使用/博客搭建/index.html","5ec6b4805b87ac4d9d08129498bd481d"],["/categories/数据库/MongoDB/index.html","c8df0aba027d866a778f6bbde23e1d21"],["/categories/数据库/MySQL/index.html","83bd7e6c8174e76957c4ea5129999aef"],["/categories/数据库/MySQL/page/2/index.html","319bad58dac06e541676770026938424"],["/categories/数据库/MySQL/page/3/index.html","4e481e35ccb007a85bd12eadc84d8015"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","4d9b3f5e7b1032071ea8ce05e315022e"],["/categories/数据库/ORM持久层框架/index.html","6d40c6f2a38dfcc81f3515c0fbd3a3ef"],["/categories/数据库/index.html","7a9ca11867b0087c12e3ac41cd125be9"],["/categories/数据库/page/2/index.html","7adf4781c9276708ccb96e07334c75cd"],["/categories/数据库/page/3/index.html","e74bddca75a63c5f509739d10b2ca1ab"],["/categories/系统设计/DDD领域模型/index.html","dea87d23b87b1fe8ba60ea33c52afe33"],["/categories/系统设计/index.html","5c938d8af5e1f85c914fecdcadccaa0d"],["/categories/系统设计/page/2/index.html","a035faeda3185d8be17acad8aa420a09"],["/categories/系统设计/分布式权限认证/index.html","e3578d0d286bcbd2d98c46a6215a109a"],["/categories/系统设计/设计模式/index.html","42ebdacb1bcd54bcfe134690f396f546"],["/categories/系统设计/设计模式/page/2/index.html","f9a8966f48bcac997e4d161c6b4633bd"],["/categories/计算机基础/index.html","91fda862ca2cca8b4ab59801d7539716"],["/categories/计算机基础/page/2/index.html","2a610fddf8a2af6c054f706fb1074fef"],["/categories/计算机基础/page/3/index.html","3910bcac33e8d2f1e7407f3c40eb0aa3"],["/categories/计算机基础/page/4/index.html","eb4ee2a6d77aeb08f8193475a7121130"],["/categories/计算机基础/page/5/index.html","e9c353c7ce541ba967f5ee7b87acfec9"],["/categories/计算机基础/page/6/index.html","c01d7cb913c0f7c6075fc5c5a80ddcbb"],["/categories/计算机基础/操作系统/index.html","68e80036cc44d1df0d8a5c3f7f421d3c"],["/categories/计算机基础/数据结构与算法/index.html","b45e715d25ebc94d6ac5991de6ce0996"],["/categories/计算机基础/数据结构与算法/page/2/index.html","23167ddb2259c8809282d9fdf970d1bc"],["/categories/计算机基础/数据结构与算法/page/3/index.html","85f2c8bda35f58deb8fc2ca6cfdea364"],["/categories/计算机基础/数据结构与算法/page/4/index.html","8a900bd34db6cb492e7b1befc0fc9496"],["/categories/计算机基础/数据结构与算法/page/5/index.html","7822809e129de74d2f3a11c817e449d7"],["/categories/计算机基础/计算机网络/index.html","3d00a9c87e7ea1eff7dd0ff53e4ce5bb"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","b72b4c93f6895ed270339e4c1a03cf9e"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","a2a13f1c60783642b8ce41c610cbf683"],["/messageboard/index.html","1a5b81ff4715dfea726252b473ca4ab2"],["/page/10/index.html","2ac1fc681d032c40848f25d6d3a434bd"],["/page/11/index.html","4b937d2597f6fa34ae64891acff37839"],["/page/12/index.html","a83a47b1193bb33b385d77894bd2d3fe"],["/page/13/index.html","4f85014e512356502bb415aa99aacdce"],["/page/14/index.html","be1c372a07820021075f9142117569a4"],["/page/15/index.html","f2f706dca096b07b83b891211370f643"],["/page/16/index.html","6cb451a3dc4a49bff9250ca9692e0734"],["/page/17/index.html","242f4194ba7631978e0fac65099f6a27"],["/page/18/index.html","687faca42d52f09ae9075d2b5e7445a4"],["/page/19/index.html","31a6f123f120f7da18376307093e6477"],["/page/2/index.html","e6ef1ad7061f86a38fb9f8cb7bc3ec22"],["/page/20/index.html","f004b6c57a6251e7225a8f5af32d7f0f"],["/page/3/index.html","eae3215cf3e53e223d27e782eff951ce"],["/page/4/index.html","9cd8999a52d499ed664d3b7ff825b40e"],["/page/5/index.html","c5e7a71468c1f40eae05d18b71a5a6e3"],["/page/6/index.html","1f4d79772a428a213055e27fb2edc421"],["/page/7/index.html","fea4b7be775c12b2a27603776ef39ed8"],["/page/8/index.html","429c17142b2c58931db00ecbd264847b"],["/page/9/index.html","43a6faff6d20fec9d3093226e82f1475"],["/sw-register.js","271c662373f53c7a12e59ada478b50fb"],["/tags/Ajax/index.html","43a38294fea2f20c1ebc3ddd9f0aa8e6"],["/tags/Axios/index.html","7a233a0a8624b7cd917df8ec7e18c4d6"],["/tags/CICD/index.html","0c33e04e73b8d0370c1ad42c0f7434a8"],["/tags/DDD领域模型/index.html","b26cfbe2b4bc053f8076910678d693fd"],["/tags/Docker/index.html","3651193b5a4f52839335ba686e0d0f59"],["/tags/ELK/index.html","cf7b8e71b3d3d18c6582e53b067f6ca4"],["/tags/ElasticSearch/index.html","5a1a3f0163466237bee8be8d479d571b"],["/tags/Git/index.html","332b9734f78bfb2c5cd63212fa154a45"],["/tags/H5/index.html","4672f37923a592b640d40789a4749b4f"],["/tags/JVM/index.html","940352d7306aca223cb0359d0aec359c"],["/tags/JVM内存模型/index.html","e29e24defda8273cdd6205ac7d76397b"],["/tags/JVM执行引擎/index.html","b01aefc0110ddaa4e24d31a0ed3f9aab"],["/tags/JavaScript/index.html","449ecf97170be41e2857f85926cedee1"],["/tags/Java内存模型/index.html","c5f9e754d0860a8138966007507afab0"],["/tags/Java进程线程/index.html","d3c4030202f53a2c6a3b66a1669b2275"],["/tags/Kibana/index.html","955baa4eba99788de0951088af6e414f"],["/tags/LeetCode/index.html","12280fdb665b8ef16087c61fe5da61e1"],["/tags/LeetCode/page/2/index.html","9d80042a4949aa36a06ddab6d97b3b0a"],["/tags/LeetCode/page/3/index.html","896eda1c5b75d9a1503ae276ce38563d"],["/tags/Linux/index.html","b6cf22279b6305c0ae4b43ccb02dbc87"],["/tags/Logstash/index.html","74736318879a25dda08900e6045c55ea"],["/tags/Mock/index.html","ca854c3d66bda2edbbeee9b6c010dfa5"],["/tags/MongoDB/index.html","18ff055f74a3f5d00b73f8abaa4bcca3"],["/tags/MySQL-事务/index.html","fb2301a4759f5e097f7f47b36b2edab8"],["/tags/MySQL-数据类型/index.html","7e8c5aeb68f4d5b115ed2cd3de4ca36f"],["/tags/MySQL-日志/index.html","dbc54c590b31f24d7204d79c2176b99c"],["/tags/MySQL-索引/index.html","d15525b6b02502664c40c97d3000996a"],["/tags/MySQL-锁/index.html","a793a415aae3b73d8c1572034281213b"],["/tags/MySQL/index.html","a4b280c357effcb46e109104ec53915e"],["/tags/MySQL/page/2/index.html","565992e85171cb04ca990b1a440b62bc"],["/tags/Mybatis/index.html","01dafe7b7c5f0c460a3ea4a224a6d89d"],["/tags/MybatisPlus/index.html","3de1b6238657c812f1f7543170ca1e74"],["/tags/NIO/index.html","f213256b3204fc3679f902bec98c38dc"],["/tags/Netty/index.html","68e9a18e6eb56a5f82655e02ed2c7c47"],["/tags/Nginx/index.html","e7c33df285e9b9ed17cd199f3fac3550"],["/tags/Promise/index.html","3db601ff6b1d0c04622a4d7856884e6d"],["/tags/RabbitMQ/index.html","ba23947b6d695a994bccecd6165d4d19"],["/tags/Redis/index.html","5dcb52f5201b52eb68297eb407b6265a"],["/tags/Redis/page/2/index.html","4e0876c5b845497c36f1d11b8db493a7"],["/tags/Redis/page/3/index.html","b368a1c113e95d63cebcde4496b5e98e"],["/tags/SSM/index.html","198585b54389b26044c7483305ea2552"],["/tags/Spring-Security/index.html","c03c0ff6a0a94a6f57ea0a3564728616"],["/tags/Spring/index.html","e5a05e49354a2209cd9accd5661b97a2"],["/tags/SpringBoot/index.html","b1ad5031b0b32052b51993fdabbeb5c0"],["/tags/SpringCloud/index.html","e966c9b583c7ce7bb2cbf71f3ca10054"],["/tags/SpringMVC/index.html","6073fff8774199d2449ab090790f3f96"],["/tags/Swagger/index.html","39bde5d680494950725817c63452aff2"],["/tags/hexo/index.html","6369f64610b5ac70b2feb0dc6e353de6"],["/tags/index.html","631f358127e3f8b5c3e340c319d8e184"],["/tags/jQuery/index.html","bd01481cf682b2f18247e3e6f200dc98"],["/tags/java/index.html","c8e5167d2ef871df4bcd3b67a21de2ed"],["/tags/markdown/index.html","70370cbafff2c110557ed72ed2bfd43b"],["/tags/noSQL/index.html","822b89d51d2971c9ce2ca75d8e0e631c"],["/tags/typora/index.html","8d0323acd325aeb1747e0e95be50f7f8"],["/tags/vue/index.html","10c3a81fcc5804119d33fb2f53235660"],["/tags/享元模式/index.html","84aeb650f3ef0f6fef1f149aad68fdec"],["/tags/代理模式/index.html","b10623ea8d62ec2d5ddab81ca6f04df4"],["/tags/内存管理/index.html","36cdc98415aad591b7841d4f579501bd"],["/tags/分布式/index.html","119cb2b5d91e6e580d3109b9793b07b2"],["/tags/分布式系统/index.html","cb858d53c8a62222148ed1112f0b5d8c"],["/tags/前端/index.html","1f22ec101212d3320c03c9c53367644c"],["/tags/前端/page/2/index.html","9a896ef2f9a9c6b030b63a8506abc865"],["/tags/博客/index.html","8efc04cb74d96074b585baec8aa3d145"],["/tags/后端/index.html","b1eea1dbc1d43ed8236c5a9b61e8538b"],["/tags/外观模式/index.html","3da6a9915246a2b5dacf2b7049f7c81a"],["/tags/多线程设计模式/index.html","7d0304b12b2c04b93da9fc27c1933eec"],["/tags/容器技术/index.html","4eb31a272860760683376317bad6b407"],["/tags/工厂方法/index.html","b48e54c171b5d5178328ea7dd6baf9a8"],["/tags/微服务/index.html","31d2d9bff6d91180b16005f4b21e6275"],["/tags/抽象工厂/index.html","9e08c4ff422b4283818c9335bf897abb"],["/tags/持续集成持续部署/index.html","0cae0d6cbf768b767c2e01f08a8a232e"],["/tags/搜索引擎/index.html","fec726dbaebbb29e0dbfd1e60f47a71e"],["/tags/操作系统/index.html","9b025f620062ea0b6326e44d1155bc7b"],["/tags/数据库/index.html","3bc08c99c0bbdd023e01cc4089aa9ca7"],["/tags/数据库/page/2/index.html","eee3aa6a7c0acbffb25ee6fb9984137d"],["/tags/数据库/page/3/index.html","bc84fcb4a332efa22ccfe1febab31d25"],["/tags/数据结构与算法/index.html","c379bd11b1c4839160df7bdb4fa8c51d"],["/tags/数据结构与算法/page/2/index.html","9d75458b61386122bcafc942190763ce"],["/tags/文件操作/index.html","e50ca761a2394dc2aa21e1c858968cf2"],["/tags/日志/index.html","2078d90cddac9504bfd5f4588e24af9c"],["/tags/服务器/index.html","612073817ce3acbcee0ab42aa67ef4c8"],["/tags/权限认证/index.html","a1e41e573e6511e70ae9a80697cfc47d"],["/tags/桥接模式/index.html","949faeac9d51e992ce18d7c7d7239acd"],["/tags/模板方法模式/index.html","09e3c920b9af6b805f0b086aa816303b"],["/tags/死锁/index.html","77feebed800393123a9bf39a39d6e43b"],["/tags/消息队列/index.html","36030d054fa6c48a75a1b923ab98c840"],["/tags/版本控制/index.html","4c6659d97e3b7ade22afddce8c7825b5"],["/tags/策略模式/index.html","e8ab608ce8a85e7221eca13d4bdbdd73"],["/tags/简单工厂/index.html","4d3acc4d39185aca92e279f64d867ea7"],["/tags/算法/index.html","ed3b18f7340768011f74d4fc8db5483b"],["/tags/线程活跃性问题/index.html","b666546a38326912ebde37d346b5daa4"],["/tags/组件化/index.html","246b40eaadb2b3956ae651299b57c025"],["/tags/缓存/index.html","6a97df4442ea812b31d016f3112dc32b"],["/tags/缓存/page/2/index.html","d73f4765aed1cc23367a1dde7bec6fee"],["/tags/缓存/page/3/index.html","b9831c22ced9b057e7fe97fd01ba542d"],["/tags/观察者模式/index.html","a41b0e9d8a2ccbfe07770ff53c66dba6"],["/tags/计算机网络/index.html","ea8d533db9131e20906199ea9f7905e6"],["/tags/设计模式/index.html","bbba65e3849379696962436a7b46fde7"],["/tags/设计模式/page/2/index.html","b1a1e234cfcc7c2b823194add939f805"],["/tags/资源共享问题/index.html","c7f6a406ab61569e19937d07ea0f9a2f"],["/tags/进程管理/index.html","002d9c06c6358608c362644d2143ac5f"],["/tags/适配器模式/index.html","3e334ae227b6b2615e1cbed69aa32a73"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
