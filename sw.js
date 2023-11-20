/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","39cc4d592e7d919749ddf88057f31926"],["/2021/02/22/工具的使用/博客的搭建/index.html","6222cb23ade277722b370f02c4cc0518"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","d1401a348355aea1d7523df82135d882"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","4812464b836c340871a1c2276f7a4bda"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","79fad5a0975aa5195e2b64dda9c4b99c"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","19fd2ad83cdb138e2e327fb4c2608850"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","0a0127490630623150a9cd4cfc49c50f"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","ff3c954a4183e97085e6f659caae6d89"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","7beb1ccbd74d0c5334c744cb60ecc583"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","d91061a58a524aacf459699be46cc4d4"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","1f1dd14a22231232172d7f0bb62d625b"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","22f34af9a8ec27d9158b6179c7fbf754"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","d0f86b9d39a540a4a1868c7f2056ba15"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","6c11e0f60cb280d13416bbf317013bea"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","412661d89d1376a49b36331e757055bf"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","65ac4f643fd96545ae88dfa0c05f2d1b"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","19ed5520a05a0498011ae202bc17e5e8"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","9ff59456cc7fff514c8e865dcdfa1617"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","58a78521dc28fbd824a869a421b77c9c"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","4a1ca8ce633f116f15bfe795e5853847"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","14c33f5149335821afecb91ec582aa26"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","0cd2d3389f63201fa1edc4f3817b8dbe"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","03620b2434cf39adea70a4c5af1e20e6"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","fb8ac4cac4322bddfdd3e8d726d0570c"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","591f4ca87a9a6eb13037f1263c3e91e1"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","a613a1b559ca92ff43f34b57f751ea4c"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","f167e7a009328f5966b070660551d4f9"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","4b2b7a2f03d952629b90cb08315cba00"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","c0f1ada6f0184e0d0ad150ecafc70454"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","514befccdceab19fcb15f76e6529e74d"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","796df4b0856a542114ebde641025ee9d"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","f4f49274f96a025f4f97b5322edfa71f"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","28db9b904dbf1807e2e878a1024e8861"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","3be2720b4634cff4b8910d6ff23a623a"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","e5e1eb17b059802f5d5959520519a40b"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","b751f6dab4f27232f56b31e0bb5fbe42"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","e4be62a6736b69647c872b26ba3c57ba"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","07bc262fa8d491d9e8f7c209eec95067"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","c9f137e90318faa90f0005c11f663e81"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","68174b3f3831ff6eaadf269dba547b9e"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","62f04ceb5488db859c9323ba7fd8194f"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","d95a49ac72a0d0f7d00e751bb9462d21"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","c95b3514010e89d29b3705f2e6b274ef"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","8ee66998745fd677ba7efc3e7a036f45"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","2aed1681bf598c036663be9952ef985c"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","ac2dba572c72bbca132bc941d8f17310"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","882a5a4de7788f894c14f2ea3cb072d1"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","4a1c3b84c52af59694b8d7a88c32a8d5"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","21815354bd9b2afcbb5aed6cd31fe7e4"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","74f67658345b97064656cc6be0fbe90e"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","2f77a6ec7275ee1e9d31c7366b16d585"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","7e5a580c69f84130960612294e605e03"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","8b0e0cd9bc19aed6cb9b6ee81eb45385"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","c64dc27afb23ad7adacc8a7fc01b038e"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","6dc740b0610e02f51f5edba6e4a35d1d"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","1f144a7c5de7b7c13df3277e40b6dd52"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","7c959479ad29bc5870293a24c4d174d7"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","1bda19001e46fa7c42bc3ada087f840c"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","3c83284e9320fcbc72dfb294f615d586"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","d592e797414cdc8cd680865d4eebf8b7"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","92672b5045c671d70fdfe5a4e2e2bc9d"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","df1b3d26cccc5c7531c861007477765c"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","56cf37455700800e9ba3bf6f02b8bdc2"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","033b19fc509149bca02de0f5cc71ca9c"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","92f33132c33c270efa0a01ddfc91e68e"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","1562b097f3ef970e92e886dc1a3a0972"],["/2022/08/17/前端/jQuery/index.html","e7176fa1b12b2b8c8968ceb753a6987c"],["/2022/08/19/前端/JavaScript/index.html","6374618b8a24f8a67ba31c29710e34d3"],["/2022/08/22/前端/Ajax/index.html","4b87839e7c5a9495f652f3fd368e7094"],["/2022/08/23/前端/Promise/index.html","6ecc5854ae69317f436bc1e8c2fe05ec"],["/2022/08/24/前端/Axios/index.html","47cb59b952f98282843ade827aa9576a"],["/2022/08/25/前端/H5本地存储/index.html","f13d026c2a7c8f384be62d675933e7b1"],["/2022/08/26/前端/mock/index.html","e144b78ccf0c38f21ccae59c61cef3e0"],["/2022/08/31/前端/vue/VueJs/index.html","529aa230be396853defbcbee18c8eb92"],["/2022/09/01/前端/vue/vue组件化/index.html","186f65126ca1f46644ac40449069bc7a"],["/2022/09/04/前端/vue/VueCLI/index.html","70afd7576205107445b9f90c40ec43ad"],["/2022/09/07/前端/vue/vue实现动画/index.html","4275f7043693a4d357ae9a9d5561a42c"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","fa3bc0e58eacb63f5c442b80078b059f"],["/2022/09/10/前端/vue/Vue异步请求/index.html","3226a5715b75e6350ee64e5ea5a5b259"],["/2022/09/11/前端/vue/vue-Router/index.html","d3d8f9af88b6db16753c705cff0a9d52"],["/2022/09/13/前端/vue/Vuex/index.html","53387f5581fb37360dfc9fa6c31805c5"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","f1dcb2581b97f26a5cad025157910e38"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","41946c9893ebae1487d8aa86bd395948"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","fd534ba691cd19a92e2a9eb0c4946070"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","e3ad27bb69a07f51b3e84ec2d94c6abc"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","68dbacfc6ae1c2a9c1a5076d65021b8a"],["/2022/09/28/DevOps/Linux/Linux/index.html","197f890a98a937925ba1d0985756b95d"],["/2022/10/02/中间件/Redis/redis基础/index.html","ce8c57b80d2c9c7e8feda4eb2f35e63e"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","feb9d9943cdf23052cc250b7ca415d46"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","8d758e50b94d0efe303bd9152233002a"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","17920578a0da8d768b20e65ab8435efa"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","391d584f5d7b33d95c2fda49ed5eb9bd"],["/2022/10/17/中间件/Redis/Redis集群/index.html","80e2bc437f5590aea29a387d010e5389"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","d76dd97b715ef122c3e3adf1adb75ee0"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","8e947dfe8067dd3bf8fd569309357859"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","38fb9b30455fe298207dea98ae7120a3"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","eb2bf3b0989281e24e8a29ee624ce770"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","d467ff4593de4f0789ae71deb7845291"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","855661c6dcc736ee7280d74775f713fb"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","67c185b84286b34815ea3fcbcdf0eeef"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","1d4c6c9a3a77426178c4924851853d6d"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","cf3f053503045945ee41915b79a4d58c"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","875f3ad95e4b7dc987cca867bf278d6c"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","8da0cd2177b80ce302cf52e295eee6ab"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","c8a072b46b401ab86fa2e4e0c118596c"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","de9cedbe69580367cdf0da970c2d7c46"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","2916ba1dc5e7cd426f00c8960d99e241"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","2eb8e695b9bc6dcfde684666ddaa30bf"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","170d095c64861cd61307221a0b7d153b"],["/2023/03/10/DevOps/CICD/CICD/index.html","a208fab2b78faff0ed3e5dfd401b1591"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","31da2e08969a4d55693d6b0936346e95"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","1635dc10995ec5cbfde754eb2919f2f1"],["/2023/03/13/Java/NIO/NIO/index.html","12712f783dcd16e852f357410f6846fb"],["/2023/03/14/中间件/Netty/Netty/index.html","f291f7396bf2b79ff86f61a1aa3abeb4"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","f6bc00184d66bcecfa44efc1a8a3d647"],["/2023/03/17/系统设计/分布式系统认证/index.html","4c6b53e9f52a0175a13600c8cab60181"],["/2023/03/19/Java/JVM/JVM概述/index.html","30e5b9e4d864b231bdb86bca7b4a380c"],["/2023/03/23/Java/JVM/类的加载过程/index.html","97e3ac2e19ad023a78b0075c0ec72f36"],["/2023/03/28/Java/JVM/对象的实例化/index.html","5772a93c4b758881cbef0891f8d5ed04"],["/2023/04/01/Java/JVM/运行时数据区/index.html","19af903a39485821f6eb7144e5feadd2"],["/2023/04/04/Java/JVM/执行引擎/index.html","8984f4cf9f326ab9155605464d134540"],["/2023/04/06/Java/JVM/对象引用/index.html","bfd9918bd01f52373376d7a2ace8723c"],["/2023/04/09/Java/JVM/垃圾回收/index.html","cddfd5db2a38eef0f906aaa818c76e40"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","4889d0e0e4b98dc1e71fbf68e808e5ef"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","785f9774d9abd4ac422eb1c7ae017032"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","258faca0872b7374468945651995ed00"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","05e8b88f50775839e987d2e14a466e3a"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","6c666192261318855ababe3c623fc9d2"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","ce74469bf4e42520f90aa2968da6889d"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","55a2e8a404d52806969b471f232782bc"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","1c819e4a7a4406fd207aaee1ec22873f"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","25197bed6a56fdfd2b944b130d93d708"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","642adb3c47a4fd4b21c5422f6a7a601c"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","7484eaec35236ed895ca670556026517"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","cb1c6783425b871b60f386ebe775b0fb"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","445da6837a098b9569b8aef6a3cf2394"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","50b0789b4d9a23c8230c0fbbc924f209"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","2921e3b48e932718560c06fa6c716c7d"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","1b0a69b21fc331c03d14f014078fa3b1"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","68881ebc45d42a69269fd307bcdf61c3"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","8ef1da250823cf0f8db130bb47badd95"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","50705f6ba4e61ba06bcdb0701d3c0511"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","acc2736cb9381733132146b404096162"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","c4140990ca99ede934d95900cbb3d927"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","61c27ef2f2520558c5fe218e10586fc7"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","52a2e59cc24eeaeae167cf786618d52d"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","e3a981e25518efc0373be1358012a634"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","6d98aafb3d8d0cc3f8ebb8aeb1770dd3"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","bb966bb2f227c1678931ddceacce2e54"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","7046c483fecf8d2f4a5b5db77ea580d0"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","2951d3903506ca0fcfb026ad47c3fa04"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","f99a0d70bb74283f3e322535a81d47d7"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","d59e096c98e5555ddea68d481a41273a"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","957788fcb0375d6cbb2569f9e606aa8d"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","af505873b4c4a025e9da4e5a4391984e"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","6ac1cb6ddc48f663e4cbd5ed8ed03c92"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","3c136355815403020a6b4d9f3a4af2e9"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","191d5a4776c4d1caca041e5c6455d29a"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","e2b6402903e06ae280fbbb4d85acbeb6"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","631d326db9a31adde7841d72ad5e14e2"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","2056c1e15d626564ef927168c547597b"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","3825674dc5b7efd323ffa8aac60f6164"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","4138467aadbabf10ede5ce9a579ed293"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","dc38d73eb5f220281dc7ea3007166f6c"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","b114d82bd12cad123a7eef07ae26d906"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","5591c7f2bca604bd40bb7ca0b2824a9d"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","946f5663e2303db5e6edcc296386d4ac"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","aa9e1e01a8660881823869c49cb70ac8"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","0798a371e3c1dc18b7bcecf323cfb416"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","1b255df4031d250a8167bdbad4582ef3"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","e21090c0d056f09d6ba193521a6c7fde"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","15060a802f9d08dbed73921cd9ee93d8"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","4eb7752bb253c22a87a926ae04e897ab"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","8071d7a77ecbd1d52fb074a8944466fa"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","28a51e6acc0810b7273750e42bd267df"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","e85a0f1d48ef1d3cb2c0fe84cf08ea46"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","26d5a51405a5717c3cef3e13a50a8501"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","870537047126d02b266b9a6cdf4f82bf"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","caa05ffa0a92e87e0fc89047a2e62d63"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","0e060a577a5e7298b266504134336b52"],["/2023/09/04/中间件/Redis/Redis事务/index.html","9ed3925022eec25660e9570a8dea5a41"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","6d8dcf01d54122b59b3405ac986e40c5"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","f4e0ac8177f2cfa00849fa8fba91b3a3"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","fe936f7eb0ee053ba46fa7052a48c30c"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","f18e6917adb02525bd7e225a94af6464"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","7ee6304928cdb9f8b308e0ee1a73bee3"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","8d443898437fa06863d540c1074717a4"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","957461e16146f08bbc2ce949c62ecc04"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","5b0d71514d0eb069fce1ff2f0eb1f949"],["/2023/09/22/Java/NIO/零拷贝/index.html","ed01f9d60aa5e1e7c2422ead463b7f7f"],["/2023/09/24/系统设计/JWT认证/index.html","64f59d6d206950735d565bca061cec11"],["/2023/09/26/Java/NIO/Reactor模式/index.html","381558bf502e0397583de8a58940ee4d"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","2ffe1ef92785611ca27b21b34dd2fb6a"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","dee2da3771aabc092369e4dcff65f6ca"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","cfa08ebcd1a3c1262bd8e43d71015269"],["/2023/10/09/Java/并发编程/共享问题/index.html","6ae3d43b2573ddd1f1e4f64b5f1fdf3f"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","a968011df47869c6589dde4152bc1a97"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","6fb22b934736bfad738f70ed5483dcd4"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","28547fca28aefc54b0c80d82a0e1a3be"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","3442036c8a941e02ca76b6c660431df4"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","cc78b0b7fe57b600219477c6243aaaa4"],["/2023/10/23/MySQL数据异构同步方案/index.html","5672eadd05ae1c8d4cc800849e6dfa58"],["/2023/10/29/动态通知方案/index.html","210b30908071f44c9c1fc5f455179255"],["/2023/11/01/多级缓存架构/index.html","a0b5d9d8a7474e83523c0842e9112d88"],["/2023/11/04/分布式一致性算法/index.html","0777f109068489f7ed913131dcda090f"],["/2023/11/08/接口幂等性/index.html","b9b554d85d9c39030d5c1c7d0ad99170"],["/2023/11/12/数据迁移/index.html","3c17681e28d298e8247285bba847c3ab"],["/2023/11/16/经典限流算法/index.html","31fdc8aa8b39829548441b19a5612849"],["/2023/11/20/高并发系统通用设计方法/index.html","d51f7d5bcf47516c1c82d74d1e5a41aa"],["/404.html","399b78e75ff8fb4855edb66f57252f49"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","a444cbb2988380851e48eed81922c741"],["/archives/2021/02/index.html","0baca7ef36a44066944034951f099f1a"],["/archives/2021/03/index.html","e12ac0d81972b1dd9f57d24606a395b6"],["/archives/2021/03/page/2/index.html","6dfff893e9c154c00e7d3db59316d649"],["/archives/2021/03/page/3/index.html","d17666006cdae6478b8f42c5ef8b4ac0"],["/archives/2021/04/index.html","8f1835f5f9b31bddddc9d2fd9bf57de3"],["/archives/2021/04/page/2/index.html","a39c9e6f9cecb5e876e41fa27ff8cc99"],["/archives/2021/05/index.html","ff28641f9c4986fb88abdb786f692983"],["/archives/2021/index.html","b542875d704f9aec6b3e7f49a498b1d4"],["/archives/2021/page/2/index.html","ab894b5f6004f4275b12f815a922125d"],["/archives/2021/page/3/index.html","8b4d24938843b6a49f250d93dd39c51e"],["/archives/2021/page/4/index.html","bc4fe98bd32a59b1b7b1c2632984b08a"],["/archives/2021/page/5/index.html","4c289c77359cffa70e0b654e7a3b0c78"],["/archives/2021/page/6/index.html","5df152005642c330dfc19546591b9b65"],["/archives/2021/page/7/index.html","c31bc218460802755612e506ff76142f"],["/archives/2022/01/index.html","57769deaba4e4317d34ec3083e40b1e4"],["/archives/2022/04/index.html","57f2169771846c0d7aea9452d69034c3"],["/archives/2022/08/index.html","444aa791e272b529e630561bfc3736ea"],["/archives/2022/09/index.html","4c67259548adec50377573f34aa20eee"],["/archives/2022/09/page/2/index.html","6818dc57ef27d158749d747483c67078"],["/archives/2022/10/index.html","a6898b5ca3fd62adf7c236713fa155c7"],["/archives/2022/11/index.html","113c17dca217e5f667beedb6c5fd48a0"],["/archives/2022/12/index.html","9695b97171094ce71ae812a611a04c5d"],["/archives/2022/index.html","76624404a0286fbda28197e7cbebb23d"],["/archives/2022/page/2/index.html","49f99b799231bed964ea18a0ec3c4934"],["/archives/2022/page/3/index.html","76f0cbbc5b4c8f70c6f67c4179ca9072"],["/archives/2022/page/4/index.html","959530165f0de2d0dece463a14babcfe"],["/archives/2022/page/5/index.html","6af9c5274d7a5b270ea2015d0e59a547"],["/archives/2023/01/index.html","4fb0755ab7ecbd81ba963907107599e3"],["/archives/2023/02/index.html","ba82bce18b530f15949b206d753b3221"],["/archives/2023/03/index.html","30bbb7c1fa51b30eedc325073edf488d"],["/archives/2023/04/index.html","57e901337da0c05cf82194c74fa070dc"],["/archives/2023/04/page/2/index.html","45e15fc2c817dedad020cebf1756c931"],["/archives/2023/05/index.html","97896b0912b1293c7f50e6156b20feea"],["/archives/2023/06/index.html","2aea3d3f6dd7e7e1bd9abf7e5d7202bb"],["/archives/2023/06/page/2/index.html","11a92f3a7d26d3c7729b2d46cefba4cd"],["/archives/2023/07/index.html","7f20bb1913f91c44fc5ccfe6a3883611"],["/archives/2023/07/page/2/index.html","cb7f428fc171b0ace96df2192af71676"],["/archives/2023/08/index.html","115e8d23b8ff721cd2b60378c395e607"],["/archives/2023/08/page/2/index.html","c638341ce4ae206fea329779aa85b9a3"],["/archives/2023/09/index.html","18d8289c9c52f8892696e6d1c8254f37"],["/archives/2023/09/page/2/index.html","72052f3b21745665b0a96aee01bf8544"],["/archives/2023/10/index.html","2f73a2baf3c096c3581be5f0e7970fac"],["/archives/2023/11/index.html","7c0209b0e4a72e4db68b4ff6f01a100c"],["/archives/2023/index.html","01f7903d2e7046fa308aef886d7ebecc"],["/archives/2023/page/10/index.html","e5b1eec9cd13f75a929208bfa697e462"],["/archives/2023/page/11/index.html","25fa6638125a849ce939b2c53cc73523"],["/archives/2023/page/2/index.html","0bcfbd6d30d4f8ee99c4a3b0acc412db"],["/archives/2023/page/3/index.html","69eaf8defd63ef463fb4f1f529baba5c"],["/archives/2023/page/4/index.html","8dfcd88cfdbf6f580e76db4b0d9f799e"],["/archives/2023/page/5/index.html","253c1066d1e68bd93d9f43184dec6fe7"],["/archives/2023/page/6/index.html","2c8842958f88a0b4b8d00c94dd6f1ff0"],["/archives/2023/page/7/index.html","cf64d250fb324828bafaef7a7086d318"],["/archives/2023/page/8/index.html","7a0aa50e39c516e3b1eeff6e2edfb555"],["/archives/2023/page/9/index.html","3d55edc77ccc24fe7795b97cc2518d03"],["/archives/index.html","26afc41c9ef7600088e6f6d017d76b58"],["/archives/page/10/index.html","fccca68a55e3410dd4b5b8284f76df35"],["/archives/page/11/index.html","a862747ae821a019c52b6d9c00b7482e"],["/archives/page/12/index.html","92ef485bf775041a73228f04e6d0dd4e"],["/archives/page/13/index.html","c3acea5825892d04852bc3e499749c41"],["/archives/page/14/index.html","4e133e37bf6823b2bb52ea7ea1d0e7ea"],["/archives/page/15/index.html","d4710ea23467bfb01147ad92ed310d20"],["/archives/page/16/index.html","ee3c39106e57981863b6e3eb00b9c2ab"],["/archives/page/17/index.html","9da6bd21d5a661c669200e6c0e8e69c4"],["/archives/page/18/index.html","f169a62414282cfd524aeb5b219ee4f2"],["/archives/page/19/index.html","cec199b2e1b81e7c24a9f58b139686bb"],["/archives/page/2/index.html","6f260b0028627bfb9922c00ea6511d0e"],["/archives/page/20/index.html","302c5ee451c53a26736ed77c4ee1a1c7"],["/archives/page/21/index.html","1dd8b25f5a3f38cf49b44422cc803176"],["/archives/page/3/index.html","acfe6718b4727414a802f1a5ba05d4cd"],["/archives/page/4/index.html","4a7fcdef9f3cbd998167d4c0c1c88cc9"],["/archives/page/5/index.html","8c11765c0e5c849da6c539120b87e2ef"],["/archives/page/6/index.html","e46e88c9aa84a5058bc50250f23325df"],["/archives/page/7/index.html","856b34d12a0a5178099c3b69d6621285"],["/archives/page/8/index.html","f16a513d717455dc72e174127f6e74db"],["/archives/page/9/index.html","7f9d7a5f544bfafae67ff5aa28253ebd"],["/categories/Devops/CICD/index.html","c5aae8ec861b4704df6692215e875c21"],["/categories/Devops/Linux/index.html","f64de547fb3e098ee3033806a6cbe467"],["/categories/Devops/index.html","0a8a808bf7b2aeb4d18339fb6b362ba5"],["/categories/Java/JVM/index.html","8961e9797225ae9fac7a53acf1c2f564"],["/categories/Java/Java基础/index.html","0917522854906846e4df75523a737a78"],["/categories/Java/NIO/index.html","013544602ca6efeabad39939b659fa14"],["/categories/Java/NIO/原生NIO/index.html","38db2a0782440b569bf8ef2c1b2756a2"],["/categories/Java/NIO/文件操作工具类/index.html","79cc7f70aa9f49a12f402838b0386612"],["/categories/Java/index.html","ceb430e03088ab8359fa23f99a1d0cd0"],["/categories/Java/page/2/index.html","11e012e90ea1210c7bfb4cb418c37d71"],["/categories/Java/并发编程/index.html","319617ddd7379dc61f0fdf1054d4046f"],["/categories/Spring全家桶/Spring-Security/index.html","c66afcc0729d18776719b676e719f3f7"],["/categories/Spring全家桶/Spring/index.html","4c0d73f72b9704256cf5639531738e88"],["/categories/Spring全家桶/SpringBoot/index.html","f42c437e61bdef8adb21d4f271375f2b"],["/categories/Spring全家桶/SpringCloud/index.html","c6b71573c9e79eafaa2ae72ca09fccf4"],["/categories/Spring全家桶/SpringMVC/index.html","58dc2d976a338d964d0a4e8233ba0913"],["/categories/Spring全家桶/index.html","c5066de1b357dd4121bc1689dd35c64a"],["/categories/Spring全家桶/page/2/index.html","8fffbd3d01b282d1ae2cd0011e4b7a5b"],["/categories/index.html","489a8d9d6dd0209fa15870f5e7a9f3fa"],["/categories/中间件/ElasticSearch/index.html","2664a0c30f3f5fdb31deff36f1aa9a83"],["/categories/中间件/Netty/index.html","42c35387a2910c66eb43d1166da6cb38"],["/categories/中间件/Redis/index.html","abba53f8edcd9cf3299ca6c9b175ade7"],["/categories/中间件/Redis/page/2/index.html","cb7efdceb626fa39e29202c3d54146f9"],["/categories/中间件/Redis/page/3/index.html","79c4fdb3ff6fcb9bd08a530ea5b9e0e2"],["/categories/中间件/index.html","bfccb82d5233b4a786654104046ea7ce"],["/categories/中间件/page/2/index.html","d4a55ec13f292590a6eb45313688c5a3"],["/categories/中间件/page/3/index.html","466069e11b84a5b01851736c73911bc1"],["/categories/中间件/page/4/index.html","514dfa52d1b1bb47835ed715a18981de"],["/categories/中间件/消息队列/RabbitMQ/index.html","d7305af63eee83d65b9f32887e9c3188"],["/categories/中间件/消息队列/index.html","e0e7a5e446f45ac90c304fca2f6a1dc2"],["/categories/前端/Mock/index.html","e6675bb7b8f1662bdda838fee72a3cb7"],["/categories/前端/Promise/index.html","febf952e25e7c4f95e2539b69f098d4e"],["/categories/前端/Vue/index.html","2c40b413e39890a1ef9c4275757f20b3"],["/categories/前端/index.html","0ac9fb72cfb491c30818b56a4d7cf99a"],["/categories/前端/jQuery/index.html","ebee3f929abacbeaf84d77b721b39bd3"],["/categories/前端/page/2/index.html","85c3493ce2480278a7f4260bc8d12b35"],["/categories/前端/原生基础/index.html","31b80f928a7a53973f8ed565d2d7f5e3"],["/categories/前端/异步通信/index.html","416cabf7441dcc5a4787013a8db8c91c"],["/categories/工具使用/Git/index.html","199b38da0195095548cc7f053e3e625b"],["/categories/工具使用/index.html","3624d3d3988c57c5f02350e9a9fd8818"],["/categories/工具使用/markdown/index.html","d8519fbca1822615cd7b770ea933583e"],["/categories/工具的使用/Docker/index.html","c77cb12466d86ff4008aed3af8f80f7a"],["/categories/工具的使用/Nginx/index.html","db46c6103c1db51b9c2a39872cf4916c"],["/categories/工具的使用/Swagger/index.html","bfd3e9ab71075d726b8cc74c8c20f3fa"],["/categories/工具的使用/index.html","b8743cec807ebc1f9dbc04077b61b8a6"],["/categories/工具的使用/博客搭建/index.html","820a06f78f3421c01558310889d19ff9"],["/categories/数据库/MongoDB/index.html","8dba6e93d4aa4fe9dbbe1b0900a953cc"],["/categories/数据库/MySQL/index.html","b452c6a1b944015e5ca3a5709d249d94"],["/categories/数据库/MySQL/page/2/index.html","6d79274c1d6dd42a5aefc541eafa08a2"],["/categories/数据库/MySQL/page/3/index.html","333a9eda60fdf1ceb6bbccfa05ebd20d"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","1bec9b90aac500a0199e5da70c2c4fdb"],["/categories/数据库/ORM持久层框架/index.html","9051b6b22c55992bf5f4397e95edae0a"],["/categories/数据库/index.html","9629830770bf3d8ae646375c3321aebe"],["/categories/数据库/page/2/index.html","a51ac17aef8b9dd506e583e12dcc6877"],["/categories/数据库/page/3/index.html","29140355bef15804608b76adb9a43bac"],["/categories/系统设计/DDD领域模型/index.html","0e52a8267f1556e578dddf67772964d3"],["/categories/系统设计/index.html","8400ab4810481082de79716f159a17c8"],["/categories/系统设计/page/2/index.html","b21bf36b7f61b41d96c02f2752c962af"],["/categories/系统设计/page/3/index.html","2931a6a234b8eeeebfdb7ca9df6d0b19"],["/categories/系统设计/分布式权限认证/index.html","bfb47e9077b47ad2e72cb1f9cc5f37f9"],["/categories/系统设计/分布式系统/index.html","8169330aa250e71b9245fef48fa248b8"],["/categories/系统设计/分布式系统/page/2/index.html","e5bbc2f832b965226dd4876dde6ddf33"],["/categories/系统设计/设计模式/index.html","b4f9363ca4147211086ffe5c14f88b4a"],["/categories/系统设计/设计模式/page/2/index.html","6f85b83d47297d708c559b27050b22a8"],["/categories/计算机基础/index.html","62942d78f5712347bde57d101ece81db"],["/categories/计算机基础/page/2/index.html","07dc4e9b8f0303682c735f18575fdaed"],["/categories/计算机基础/page/3/index.html","6cfede8fdfaaa821f2af6310a7ac4894"],["/categories/计算机基础/page/4/index.html","4b23e380376c2b6fee587f33ab56beea"],["/categories/计算机基础/page/5/index.html","0a58b62a3ef156d825d4f591e1dd5482"],["/categories/计算机基础/page/6/index.html","e125ffbd7ae5ace5e0b513bcbe5db946"],["/categories/计算机基础/操作系统/index.html","a1691798705511c162ea63e586a136c2"],["/categories/计算机基础/数据结构与算法/index.html","8bc871c026e1b5619d5537a706bad617"],["/categories/计算机基础/数据结构与算法/page/2/index.html","53cfd24a560abf8c8a02fe10f53f90b9"],["/categories/计算机基础/数据结构与算法/page/3/index.html","fbefd277c5535bde0fd03623e6c05e56"],["/categories/计算机基础/数据结构与算法/page/4/index.html","60bb9cef1d39d1add5dfa5d2b6055fa0"],["/categories/计算机基础/数据结构与算法/page/5/index.html","8af2213b6e0877a40ba13d7e223bf3d9"],["/categories/计算机基础/计算机网络/index.html","9d01d8f9ecdd452f6ccf491bc125a86a"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","749a85a0e32e0c87309209356a4b1201"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","2e3ad1bd5257eab8e4f6d2b0f6cd3b71"],["/messageboard/index.html","3bce6c7252a3c982595db9ad6268677b"],["/page/10/index.html","330eb16a3766214aa6e05c282ba81537"],["/page/11/index.html","ae9a074f5297d1138c9f198104cbfac4"],["/page/12/index.html","76811422b29f7dcb730338373d24b636"],["/page/13/index.html","b161b535fbc2eda66890f3ee568245be"],["/page/14/index.html","de864d83328645ffb7925b88f3b66ff8"],["/page/15/index.html","23c57ca0b30e69754c9272f9687f2c07"],["/page/16/index.html","023f108231d2253f8efaaf566d6b8ca4"],["/page/17/index.html","58a9a2aed726110252ef2c9a38135a10"],["/page/18/index.html","12f0e687c8aec4e58fb317ba599935f6"],["/page/19/index.html","2a47f78f9999922a8ed975e615dbb8c3"],["/page/2/index.html","1994085d5f416b1ca9ac9a078132862f"],["/page/20/index.html","c65503e4eb773065272ca78acdae94b5"],["/page/21/index.html","ebfeccd0940ae4350023e73af43f8ab7"],["/page/3/index.html","69ec73ed22d73b991bb9046418bbdf12"],["/page/4/index.html","ab826db5b57cfc454348f0f0f8c3864a"],["/page/5/index.html","19b33ce2b5edd899c79ba66e738dcb53"],["/page/6/index.html","befd1cd411a9a7f91c968ceb2f829adc"],["/page/7/index.html","ae627f25f606750fcc6925ec8f0fb3a9"],["/page/8/index.html","78b475a7aef688d7c26d910b57261528"],["/page/9/index.html","273fa7e1e3c1f2d3568d1eb309e41d71"],["/sw-register.js","499c1caef33286969cab5ec0658eaec6"],["/tags/Ajax/index.html","4bfdec1cfdb02a3bcb8cbf050aa2d0df"],["/tags/Axios/index.html","d29270c27c4efb0c148a4a59a9376486"],["/tags/BASE理论/index.html","b32c9acfae385eb3653e886608ed6836"],["/tags/CAP定理/index.html","827e4bbeb2ebc71ed1661f6be705ddc0"],["/tags/CICD/index.html","fedfa9c18d3096befd2632c8fde4194a"],["/tags/DDD领域模型/index.html","da10dab0968a02ce407d57d224085a05"],["/tags/Docker/index.html","9e3d7db3b325d1688d0f2999d0321cbf"],["/tags/ELK/index.html","3d98813ab5e2d8d22f64ce665d0ffd6d"],["/tags/ElasticSearch/index.html","2f02fc477cb9cbce07dbce0aef9db655"],["/tags/Git/index.html","c800d3033f0a0de00f6ea33907a504dc"],["/tags/H5/index.html","10261e839beda1c6fa7186f6a46cccb9"],["/tags/JVM/index.html","e3d20cc5d3fc0310422093de4fe11e5a"],["/tags/JVM内存模型/index.html","6356a4e94c4a2e97e0e69127fce31020"],["/tags/JVM执行引擎/index.html","877bc0bd3e61db5cdc1c95f2884bcf91"],["/tags/JavaScript/index.html","2fd7c176300d0d5e47f8478caff40b93"],["/tags/Java内存模型/index.html","292353d6fc8cebaf960bc25974b59234"],["/tags/Java进程线程/index.html","fe30ab93b7ae2ca500738f72e8e366f6"],["/tags/Kibana/index.html","953056ee5fe86e2af5de9d80f0303274"],["/tags/LeetCode/index.html","9eec09288c2204693a491c4873c0bd3d"],["/tags/LeetCode/page/2/index.html","4485d182712d4e859319dd18b912aedb"],["/tags/LeetCode/page/3/index.html","8a9dc479fa2c05ae081a281ae11af3f1"],["/tags/Linux/index.html","b4f71bf5d541dd6c80ecf24e6dd86b19"],["/tags/Logstash/index.html","aeca88628ac09e1e400b447f2f7ecaf4"],["/tags/Mock/index.html","abee1126841227647fac55cb87fa8737"],["/tags/MongoDB/index.html","e361429900b1952e7a806c5631fbf3ae"],["/tags/MySQL-事务/index.html","a2e58e0bc4874be06e63126b7ac41012"],["/tags/MySQL-数据类型/index.html","d42496b521f3c1039c5ef7c38f2e59c0"],["/tags/MySQL-日志/index.html","061da50356ca138f0a0a71e0d3208427"],["/tags/MySQL-索引/index.html","79383b3ef205cb56ea1dd217ebf025ba"],["/tags/MySQL-锁/index.html","c91ec18228b506e6c9455bf584a1d58a"],["/tags/MySQL/index.html","a80a31ff1b46f0d8a407ad45ed3fca1e"],["/tags/MySQL/page/2/index.html","fea4bd548e7cbd26625c7e558a35d086"],["/tags/Mybatis/index.html","d62ed5cdb7c4e541a022023dcd7a6d1a"],["/tags/MybatisPlus/index.html","3a455ba81791d30c6122a2f04f993c1b"],["/tags/NIO/index.html","adb90beff8c4ac1b7386a65eb52e2aa2"],["/tags/Netty/index.html","a5fea47abea598efbc354f0a6ce07c07"],["/tags/Nginx/index.html","382a3207b74561f8e7c07bde0006134b"],["/tags/Promise/index.html","eb6ccca7a5e55c42d6f731a59b1a0283"],["/tags/RabbitMQ/index.html","8b2d81928b78e85eed06a6f9a2809c8d"],["/tags/Redis/index.html","d0c437f80f2efe22d2728403746c0654"],["/tags/Redis/page/2/index.html","80ed19405dab8f698c1e1faa9b1573d5"],["/tags/Redis/page/3/index.html","f1dc2794073c46ca00e3c9adc79e7416"],["/tags/SSM/index.html","820ed8fe7ea6e32b21a0a8a2d4c4cea4"],["/tags/Spring-Security/index.html","21b11a80ad152215079162564dc66349"],["/tags/Spring/index.html","7093242f9ab229751bd3b03f96822189"],["/tags/SpringBoot/index.html","df3830023f19a415d9dd650923137908"],["/tags/SpringCloud/index.html","90b4fc59dd8e1879ef413d9288f1d5ff"],["/tags/SpringMVC/index.html","b835037be2ef66ccb789f9989616f46f"],["/tags/Swagger/index.html","09d6200c416e1728660573cb95b7484a"],["/tags/hexo/index.html","5c41e920a9862e03fe44fca6db46990b"],["/tags/index.html","220d1d485e6b1363a90385237c0f4ba1"],["/tags/jQuery/index.html","ffda9ec81aa63e8fff0241c1c7ef95f5"],["/tags/java/index.html","19525d1c10979d63d1729d8992faf794"],["/tags/markdown/index.html","f0cd82313dae6ba05eb759751871bc5d"],["/tags/noSQL/index.html","f8f25c6258c1210384fb0ae86f802feb"],["/tags/typora/index.html","493d3765b53b7a9991137c101b76339b"],["/tags/vue/index.html","0b2b0ecd3f2ca844a1353e3c23740eab"],["/tags/享元模式/index.html","ea98e42f4c3b8e46372299c53ec3b4fc"],["/tags/代理模式/index.html","ad871327d908021e420f9474538f0bec"],["/tags/内存管理/index.html","0897029a2dc7ee728749dd7da22703a9"],["/tags/分布式/index.html","52ace7ed0b406639cfe7e8844f01b09b"],["/tags/分布式一致性算法/index.html","89c80be1ee9cb28a3dec6695ca09cfe7"],["/tags/分布式系统/index.html","2ee14c36a27cc1ea860ad13994dc303b"],["/tags/分布式系统/page/2/index.html","1b34352f5c8b52062de8ed4e0758394c"],["/tags/前端/index.html","59b584c3c16d4f2f97c98c3a1be9dee2"],["/tags/前端/page/2/index.html","c4cc91f43f2041e0034d4dcf62b77ce1"],["/tags/动态通知/index.html","95825b5aea207a682ce772da999b9fe3"],["/tags/博客/index.html","adb8a36bba1f3e087b2a3efd33218033"],["/tags/后端/index.html","8a46fa3133f0089b1939c5a6cf67eef9"],["/tags/外观模式/index.html","92b35809b2072c65c09695aab08e7e24"],["/tags/多级缓存架构/index.html","da47bf8fad61b7042561ccfabc5192b8"],["/tags/多线程设计模式/index.html","86f9d97ebe58db672536dd41580dfe8e"],["/tags/容器技术/index.html","90aae08e76b91b6bf1e6bfb9e8fd9d2f"],["/tags/工厂方法/index.html","a06b02b2a12933cb192cc442dfda4a12"],["/tags/异构同步/index.html","59325b1e7a3bb105618f26fed778b70c"],["/tags/微服务/index.html","f5ed3fd42ea431a5add956abccc622f8"],["/tags/抽象工厂/index.html","8c44f57abf24e84d05bae7df4979ec15"],["/tags/持续集成持续部署/index.html","be8e68bef410c4767739f4cf7254f128"],["/tags/接口幂等性/index.html","cd305b07a60baca20e7e217fdab1825d"],["/tags/搜索引擎/index.html","c87ac2faa8a6243b6d24cec1f858ea5c"],["/tags/操作系统/index.html","b6bc270aabf81ddd8a5cc9dbe16b9ba4"],["/tags/数据库/index.html","16ba3f98f12f66023245aa559e82e20e"],["/tags/数据库/page/2/index.html","380a864c8934695dc65c6eab7ebdce90"],["/tags/数据库/page/3/index.html","e696804ae449375b4f25bfe22d8a9d29"],["/tags/数据结构与算法/index.html","cd3a3e18ddcbc5581d94c9dac758e47b"],["/tags/数据结构与算法/page/2/index.html","7f556c33c264ad6e4cd0865397128662"],["/tags/文件操作/index.html","c3b95a9afa6eec1b9797c8d945862e63"],["/tags/日志/index.html","90dc0882821082a5ac95f10178a6af47"],["/tags/服务器/index.html","09a539ec65958dad8d261155e3399f23"],["/tags/权限认证/index.html","c36ceea099447839e04a546759bdb50a"],["/tags/桥接模式/index.html","d73ef50ea9ea7ec0e1f4d2c5c045a00e"],["/tags/模板方法模式/index.html","21bd92c52fa0ba1ad572238c8190bde3"],["/tags/死锁/index.html","1ba0ea93bfd9342c6b7fefc7a81929a1"],["/tags/消息队列/index.html","464cdddfcef14f209db84ee01e947003"],["/tags/版本控制/index.html","f6fcafee9cb37b3df91ff55ad30e343f"],["/tags/策略模式/index.html","e88b108a2fb45beee7c0f9e472bbe2f9"],["/tags/简单工厂/index.html","4fae62c2250811c610ec1161fb3686de"],["/tags/算法/index.html","1396ac4f569848d307e50c7630656375"],["/tags/线程活跃性问题/index.html","40531106060c9ac133108d0b81114b46"],["/tags/组件化/index.html","5cb9cb3b3fb3fce2be2ea01a76392f34"],["/tags/经典限流算法/index.html","4294b09aef124a6d2ae22fa184ae15ea"],["/tags/缓存/index.html","bc3bea975ccc4c951e9c85d6d94e09e2"],["/tags/缓存/page/2/index.html","79507256bca1437858db701c9c8bf72e"],["/tags/缓存/page/3/index.html","638cace5c8a972d9022376240a65606d"],["/tags/观察者模式/index.html","6c0c6cd162b0d7b3f7acf82398de668d"],["/tags/计算机网络/index.html","4409f088b732d502759cba6a50bbb4e3"],["/tags/设计模式/index.html","7024e8092c589115c5b230008a1697eb"],["/tags/设计模式/page/2/index.html","103c019c813367ec3af3c3f9826dceae"],["/tags/资源共享问题/index.html","3e6f8b6d98607e29d499fb74a3795435"],["/tags/进程管理/index.html","badbfeb796323cf2a82abe7b574f0b62"],["/tags/适配器模式/index.html","c9b1a5f3029ddcddf864e2f7052de5dd"],["/tags/通用设计方法/index.html","2f72d0956e026e87d7ce7e39c5f0712b"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
