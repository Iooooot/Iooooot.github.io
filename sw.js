/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","cd945a37c97b916af70a05b04c31c46b"],["/2021/02/22/工具的使用/博客的搭建/index.html","2e910fd913d1e6de240936e138310226"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","2912eda0d185de6927b6c8ba29dd21d2"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","cbefc5a8e236cab9998ad63700dd586d"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","f7f07ccaddd3f65661d38bd798a4cd50"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","22db5e56fd82106672086ec46bda4908"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","40406bb99c2e3ef3e7ec6c92f73532a2"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","eb1720787e76145e22fa572c481e3dab"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","9ba1ad7dff06e729a5a470500e9c952f"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","fb8b9c41b7b3e0b257ebf95f946452fb"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","8816d07c13368a655fd5be32804b7fab"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","85001b72625386ba1d9eabb100a2e3c4"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","ca08ad4f7c3c66490e4a272d6a8624df"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","f39426d06c751d79a0aae3a484019ce7"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","553ceb240c0fe5a65f70fb54900d41ce"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","deec22f42b621e4b3db04032b172abda"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","f4ff8ba1ca27ddd68263d72125047fa7"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","793121e2538ecc295854d1c7181f04a5"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","0a52ca98c557134791e9b7010ed501a7"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","f12425201c7d41d143167458f14f1f53"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","20ad8d955d0d437b08006718968c79e2"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","7f46dd85b33e8c654c87b70c1901076c"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","28f31bc4120ab7e0a191072b5b602278"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","71921eae923f46340b8de6f7a6812db5"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","889c81541309f95bc5471a9ed1d202dd"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","6b00d2cb2c6ad2b0373fb048afa5d9be"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","657a582230130898326fe9c3578f507b"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","a10142e94bc4dd0bad1190905eb6d4ff"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","705dd4f06f73ce9e075ce2c4c83c9a22"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","cbabb3bdc35d1b5b98ca2e7d9c971e16"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","402dd1047b713e4482c9ced177c5caa1"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","11b37cd7bca2abe67f321f4838b161df"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","be20dbf3d1e12434abe01badba1c18cb"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","d300e4538d7596b4e8a100235aa536c9"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","6408b834fd2cbb9d02edc16ab437e74b"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","38084483d61d115c6d55e52c5392e353"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","f520ab9d8b4d8e22f3a7630eca94b612"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","d230eaf33729d758fbbca5ba1d7fc741"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","911839b1cf8d2a704c9b49754325187d"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","84e7fac5de965fa4b7b8f9c58face295"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","5a0bd08cfc7e9c7d32fadcbf3d4e3e60"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","70da6236b907614703bda2ea17df95fc"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","7d488fbd39b311fa3af627750339d4ae"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","8b5fdcd7919aa32c3862e4fea443a7ab"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","70fbb4a1d4548ecf55c4d0cb9d5c00bd"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","3dbf952ff81cad6316ff3f767ae538ae"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","1e9887091b069f1003004272a14b090e"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","3282b913a70dcb7f09e14277b86c84f7"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","31aaa1f8e085cf6f7679a15dcad77d47"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","221091b5efb0dce639b51c213eeec8ad"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","367987dffb0ec07acc56fd1aec86d906"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","a7efcc77e0a74a44332a2a77b21e3cbf"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","c85b4354e5c3a55e5b00dfc3e4500ea3"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","dbf679e7b03c545ad385ba12ea4fce0f"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","46370830e90f8c4423d2f7e9c223da0e"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","3bb732c99ae3287f7f1e3a654b2b2931"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","730a2933062089341e5e709eef90238b"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","b8241171fa68e38b97124998d7213ec3"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","cc14066e3792d8d7fb78d6c06bde4229"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","0c0623ad402652d03edc75fb9f2654c4"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","4e5ae2b8db87ba48e30c2e3bcc7ffbd1"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","177678dfae32b4810f0535eb0454d63f"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","59af2ee2aea609d27162bb1aee696d13"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","f1369bffe3f124608f7827cc99d08f8b"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","184df0800c5719b84a5b7b1391e80665"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","5e624be10321fffa66ca1c2db5fb0027"],["/2022/08/17/前端/jQuery/index.html","5e71e272f018f8d5265911999f8ee3e4"],["/2022/08/19/前端/JavaScript/index.html","35c19cbe436f5a47446ed3ed6b2b47d6"],["/2022/08/22/前端/Ajax/index.html","f8031c90f18d3d2c1a271c748966547b"],["/2022/08/23/前端/Promise/index.html","fae5326777176c638e8e2ce939f49b5c"],["/2022/08/24/前端/Axios/index.html","3ca31b8a366b19a03d33d035966907ad"],["/2022/08/25/前端/H5本地存储/index.html","fc4a9c277162b3cdd99b4ef00b3693e7"],["/2022/08/26/前端/mock/index.html","bfe47a682a40927dcbc7d827178b1441"],["/2022/08/31/前端/vue/VueJs/index.html","8fb005218bf342b1da4907ab42f48d37"],["/2022/09/01/前端/vue/vue组件化/index.html","d3f88ef158b348ab52f1d71c60a084cc"],["/2022/09/04/前端/vue/VueCLI/index.html","5326b28d6eb233bc1449d64ad47d76e9"],["/2022/09/07/前端/vue/vue实现动画/index.html","f947ea63c0a3ea5c21390bc243150b8f"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","5d61c49518550452bdea0b64a199011d"],["/2022/09/10/前端/vue/Vue异步请求/index.html","7cc15a42207391a7a0d9e2b7d1d98382"],["/2022/09/11/前端/vue/vue-Router/index.html","a59fb3052e2fd8157556489f9bf63f8c"],["/2022/09/13/前端/vue/Vuex/index.html","0855f80706b4f084dc874c125ffa7afa"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","f5cbc8d41059a1d69e239abd90ee9f81"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","66408d1c90c19720bb2512bf20df8713"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","c888f14b83c4449690a64dc84a88f148"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","22ef0f66cb335a56f8e3d6757a71c9cb"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","1cb268a9706f5157c6a389802483443c"],["/2022/09/28/DevOps/Linux/Linux/index.html","5b4509c454e9517535ada53f62bee5d6"],["/2022/10/02/中间件/Redis/redis基础/index.html","5a1ed00d6fc33f177c4e405b2c40970b"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","16af93c74fb59be8eb97cfeeeb4c3f8a"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","eb553adf5db3a402e1cc11d82f48f556"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","ec9c2a173b4f58fca78843b897722b44"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","e38af8f4dab68c2db3659d73581a7b56"],["/2022/10/17/中间件/Redis/Redis集群/index.html","4fa03762e969c471aed32d9285f31e63"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","fb720d32e4a35e927c9773693e88ae5b"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","9f9aa46ab4e67403d2bb4c719688aa86"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","ea18f7dedf4f601bd90e4c798dcd9d9f"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","f5a4b4d3cccc3f578b00ba98fe40f64c"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","eb8d80dcec3c8cd39b8e3de73e7399cd"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","f1834127ae031e0cc85e017c00dfc14a"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","fae759015b83f55f34b0d7eef523d66b"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","544791df6f8453d2e13e1f2173c90421"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","87b3d763d2a27b1f6e1aab17a341b56f"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","82fecc36a9512b66ff98ae8127bb589b"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","7909a827f4ad6a6e4b1eac0aa74a1571"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","8bd2c2daaa41752bbd920a732cd0834b"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","80d3779c91cd8563d69c01ef63761066"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","a0f9e6b7fbe20175d5c4250ccb1ba0ae"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","bf287fae2a159595414e4b36a98ebbf7"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","46fb09bd1c552a444b1a537623abbaea"],["/2023/03/10/DevOps/CICD/CICD/index.html","f039ccfccf91306e13ad7232b170af07"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","b1a4f88b0cb8ec0e7d81d43498b3364f"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","7017cce2801b494852f92891132c34d3"],["/2023/03/13/Java/NIO/NIO/index.html","dbb76488bb0c930636ed633ab539c41d"],["/2023/03/14/中间件/Netty/Netty/index.html","8fa1adbcbe2874b4fd9e92ba20e87c82"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","519cf409d341637715a52248de3c6324"],["/2023/03/17/系统设计/分布式系统认证/index.html","48848e9341b0d69a494c577140b83c4f"],["/2023/03/19/Java/JVM/JVM概述/index.html","496be73d51c1187c557cc0e980122d8b"],["/2023/03/23/Java/JVM/类的加载过程/index.html","c46585a8ee78351814e7c22cfd9d07bf"],["/2023/03/28/Java/JVM/对象的实例化/index.html","f7926f41cea5b5fdedde5896f10d1b52"],["/2023/04/01/Java/JVM/运行时数据区/index.html","79b9d8d7a86afba1659519ca233c5c72"],["/2023/04/04/Java/JVM/执行引擎/index.html","40bb81296a11c6447373b2268e50951c"],["/2023/04/06/Java/JVM/对象引用/index.html","1e644106f0017bb62da9c339987e789f"],["/2023/04/09/Java/JVM/垃圾回收/index.html","4dc8809313d5cabd06410d56171ebd67"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","5502b519aee4109413f02d106d90ec86"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","0ecdfbf81fa7c2c26166c7e2e9d5e5c8"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","f12c9cac8ee80be670a0084619df5caf"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","8dd55beb9cbb277ce08da633e901c468"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","f267667f5c7e48e3c43b8ec3e66d4b35"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","af542ff08a946738a47100b46ee0749b"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","f63a292427a27bc6565e6f89e4b90aba"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","534a2dec7af28cad4e10bbf51c4ef050"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","97b97cc93556c32a17b8ec67c409aa90"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","e6142e1064c65434b54e2461ab87a14f"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","5beffaa0b724081faed794deaf41503b"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","735bb7fd8959649a223a4495f98580cc"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","3d2e12aae4782d5f66856ee13df9cadf"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","d3caf969ed862becd5f50485a02c5a6c"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","845911629e51578cbd2b84ebac8d4669"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","7b7bebd86bf4fc619b6290fe890f08f8"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","68b3615a1d6dcedc3fff5dea3896ea0b"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","909e3d6ec7d1fc803fab628dbdbf3499"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","f6e64f974c37982d37fefe158d04e5eb"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","d2ad26b1d4c087b90358fb7c035096be"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","3579a5aa78dd8c38ad05fd2509336e43"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","f26fffd2f0069617b5afa6f6c071532e"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","e8d2aed153d483d28a233dbbac0df8ab"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","2ee1018a3ed891c2bf5ec1fba70909cb"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","ce56373507343e598487b2c4451d7199"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","c8c3bc8d01dfe812b45ca5ef9abdf53e"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","214fceaaeac983fe1527cc90b895edd3"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","a6f74615b5674d7aced9dd5de4e735c6"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","d16006cce3d49656b7b202b34c7a4472"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","7ea114d2d0098f77d8c31e876645ef96"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","37170c8bb1f83ade7c8555053bf88bd2"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","591c5fa3cc173fb731c7fb33d9e1f07e"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","6286c896b09955af4f9353a90c1a961a"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","2697cb6b8f6927f9bac48fe026d4c650"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","4ee521eb3c7dd7ea04e2cfbc6543c82f"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","02bb486fc071a927f03a416f6a3aa420"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","0fdaf1d20ecc482c573d972d9d201a88"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","1135b16a131ecad8b787b5c43104887f"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","4dab8ad397a08e0e77eaacf2d672a00f"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","0958ac1d7cf059e3fd3f665492878cf5"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","f26209813cd518c67801d78bcf22a9e6"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","490fabf0d50ce2c944a05af2c9c0dc11"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","b67e586802a3a531f72e1151d812b04f"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","bae4cd52aa1a219f2444eee76764dc1e"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","cdb6b82518d479e843c33ed8a7172881"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","dab4ae0151918fbb21dd561817110e5e"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","eff79a307824de0880bf6f2a8eb9e87b"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","5c25544a1fdd57d912280ecf7cc969a5"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","a58e8d84a12108510e4ea1216a6724a8"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","fcd4d68cd3b0ae6664bd22f8784f466a"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","b2505ad319d50bec4e769ee5f08f2f38"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","bdd857abb3a04e495474bd9cb743b686"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","1a8a93a5f8ed111716867116caa7f5fd"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","dec213208d668adc49c2d75aff2259c2"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","43729c7523fa73302f41a1cd2b3c2f0a"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","257797363651df9201f278f5de72813d"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","97dbbf2a1ed5f02d913abad2a62c0c24"],["/2023/09/04/中间件/Redis/Redis事务/index.html","a6d59961aa1bb4bbcbc7e6afeee76b3e"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","0a9c36a3db611d445bc53a67f67e1f54"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","aa2a80a284a2d717c8049f8a525a7b72"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","aa91bae1eafae6cb560512dd2b5efe1e"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","d73020cc9a410393134a44666f3766f9"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","dd39b24c83fe72b37c823f739c767cfd"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","ae113e10a0e68ea1ca860767447e6f55"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","0c5bf0835334e8d3318a060474926e24"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","b5d88344f05c277ad8c7cad6d9052a1f"],["/2023/09/22/Java/NIO/零拷贝/index.html","56c9a5d48ee0fb32bc8f3af90131bc5b"],["/2023/09/24/系统设计/JWT认证/index.html","98c0e30ba8f83aa8fc783c721f22e679"],["/2023/09/26/Java/NIO/Reactor模式/index.html","89ef974fff302df3e88913d2842924d0"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","68579c73a51805dabea8f6a2df63966a"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","0d1f269736dfbdc93cdb75dfaaf3cda3"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","6aa8210757045ae176ba26bdc60a9a31"],["/2023/10/09/Java/并发编程/共享问题/index.html","cd319965b179ba4c76bb6040d8120041"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","6f9bd45a83639b574603dd13ba0e9c73"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","3b66f89b4ae2ce527e954eb7b15871e3"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","e7b6013db7e8b217af0a06791117a5cf"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","d86a82fd8cda1e849f9de7fa0c0c6f75"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","7cbca69b08bfbb1de2bcccf6a473d493"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","5680030004e1ad02f520b7f62c0f2581"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","95dd7df944e4955bd145b651fc9776cf"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","5bb9459352a459c316ad54316c6de536"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","73670e5ba5db924b1a4f83c97fd0d88c"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","b90d50a7345de871133cd31603b413b8"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","fc7f6f6e47e830450618dc40625c91cb"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","a22ec7312476cbc3bc7efaf49187c86e"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","8a11c0229edc72a8ace9e8629247d0f2"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","ee1fe80b0b3adc4b8eb7ea323fb54585"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","ff7b86f18dcad73a6e33f53f751a90f4"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","e3d88db19f6431f4db4f19a49033f886"],["/2023/12/05/系统设计/开源协议/index.html","e458c1d3ffde3498080a74527b136de2"],["/2023/12/09/MockMvc/index.html","f99cebbe5b73f86ce3532757bf6fdd05"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","cb8be4d513979c26e2f6b91a806197cd"],["/2023/12/19/MySQL读写分离/index.html","69c33ef0112ae8e2f373483aafd1268a"],["/2023/12/22/MySQL分库分表/index.html","53d1207d6adddf2b27356ca23825a07f"],["/2023/12/27/利用NoSQL优化数据库/index.html","83bb8713cb1d10d195cacf8256b3111b"],["/2024/01/06/缓存概述/index.html","73d5e74e081aa9d30faa6e382b056c15"],["/2024/01/11/缓存的读写策略/index.html","b501129515bd26403f6e7693f1bfda7b"],["/2024/01/14/CDN静态资源加速/index.html","63c86ee81f5eea84b2bfac163936f0d4"],["/2024/01/18/消息队列延迟问题/index.html","af73c8e66c6b653539fd633798995153"],["/2024/01/22/高并发系统分布式服务方案/index.html","603c1d03d2d40052af65db3a568d37cd"],["/2024/01/26/dubbo/index.html","05cbf34b892dcd552c94b4f41a9c250f"],["/2024/01/30/微服务基础/index.html","f276ef51dd93947698406d5288478810"],["/2024/02/02/监控微服务调用/index.html","187a563d585de8293bc8464a83de2c8e"],["/2024/02/13/微服务治理的手段/index.html","c514dae36e0c062fdfebeb84dd4f7443"],["/2024/02/18/微服务治理的手段-二/index.html","0ca062f55ef0af06d8b92d05b23d9ce8"],["/2024/02/22/计算机基础/操作系统/epoll、poll-和-select/index.html","239352b132632c94ae6b420fa135adf9"],["/2024/02/26/Spring事务/index.html","7f62b03edba0df069295e3ebe9e41a7b"],["/2024/03/01/HTTP接口安全策略/index.html","149a3f56c575eda0842ebc5137cc0f8f"],["/404.html","7f129126de4d4acb1e7d60dc6674645c"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","0c86cd49f29a3525b03a5d1f3fc53305"],["/archives/2021/02/index.html","061bd19832041aba0e757d92e1ebddca"],["/archives/2021/03/index.html","8e029b306a000faa95d6b5b87d33e213"],["/archives/2021/03/page/2/index.html","372ffb678dd28a22fdf2cb4a3e997a91"],["/archives/2021/03/page/3/index.html","379e4b638a81e88bd07408b44ec1e35c"],["/archives/2021/04/index.html","c486aee851a7c53f5fe86ef459a80225"],["/archives/2021/04/page/2/index.html","4388c93ac415406626e2d77341e8ffff"],["/archives/2021/05/index.html","041c4da5dd510e7c95dd9225692532a0"],["/archives/2021/index.html","89804a2b9f8e87cc7de22c482c64cfba"],["/archives/2021/page/2/index.html","ab43885ca2b6b2bc6de062c9e39e1c45"],["/archives/2021/page/3/index.html","30559d986ac87b89b204bdbacf45e0c0"],["/archives/2021/page/4/index.html","a725ad2abd72be7e7edfa6607dab0fef"],["/archives/2021/page/5/index.html","6dc058b9a363e3f178bc2ddca813f130"],["/archives/2021/page/6/index.html","d52f8f6917f8f9c0a084797bc1f4fe18"],["/archives/2021/page/7/index.html","c0f6ca88e7a51404fbc2c56d2e92c3d6"],["/archives/2022/01/index.html","01d4ce7e7fb67de742821ae5c3c69cef"],["/archives/2022/04/index.html","4a8f5f93012f06533deb31e6d9aac9ed"],["/archives/2022/08/index.html","8cdfc24e9e409ef217d99daaabff90b0"],["/archives/2022/09/index.html","814fe4ffa97c806eafd047a6224c77de"],["/archives/2022/09/page/2/index.html","ad95c04bafc4c68fc8a8acad97a2ba1c"],["/archives/2022/10/index.html","a68d47a242f7399e0645e51ecea21a79"],["/archives/2022/11/index.html","79601280f8bb04739a37bc2bc8681dd4"],["/archives/2022/12/index.html","9dce1cf9539ae49bae8d80e6393c4d7d"],["/archives/2022/index.html","143c73958f9dc38e95170df9c7f4666c"],["/archives/2022/page/2/index.html","9a787cba2a4cb363811bbd88234471d6"],["/archives/2022/page/3/index.html","2fbb3667f66b9d3ab0bfc65a94dac232"],["/archives/2022/page/4/index.html","3c9f7d760ac74d28fbb7393b8f57fe02"],["/archives/2022/page/5/index.html","b868635251f1a1b9ab1c4f710da8dbae"],["/archives/2023/01/index.html","41b6a25a8c93495fe388fe16731c1dbc"],["/archives/2023/02/index.html","a64630f237d80e49539f71ed5c688cb6"],["/archives/2023/03/index.html","4c661999f42f7e60e7a9a65b70abdfc7"],["/archives/2023/04/index.html","1eb179c12c39e90955ed7108abee589a"],["/archives/2023/04/page/2/index.html","68dc32c69f25145ec6c49a0cce06107d"],["/archives/2023/05/index.html","b6417fe610eecf554f98908f80e5bed9"],["/archives/2023/06/index.html","a997c0d35bc5c7c69d662651be56fa45"],["/archives/2023/06/page/2/index.html","844d3b78490237c5844b453caea63ae0"],["/archives/2023/07/index.html","8473969b30cfb30468dc12c43b3a9591"],["/archives/2023/07/page/2/index.html","c5e833633414604b684859ee3085d705"],["/archives/2023/08/index.html","be93c6261d7e0d7b277e5541480128f6"],["/archives/2023/08/page/2/index.html","62c3ecca3ba4fd532dea46e05618925d"],["/archives/2023/09/index.html","53ac0ad9cd7655e3a48e3c6b3ccc8df8"],["/archives/2023/09/page/2/index.html","b92ca185babc074e13093ab83e95df7c"],["/archives/2023/10/index.html","b478512ad82fc662389e643c6e3a1e24"],["/archives/2023/11/index.html","8fc3af4c0d70a1311271cdac312af512"],["/archives/2023/12/index.html","b07d3ed97339eb9e0b92f921afec6b92"],["/archives/2023/index.html","6366a0d6f3f9019197c67ad9ad331b42"],["/archives/2023/page/10/index.html","182a6381928fb0d5b3f79e5b8ec8e9ad"],["/archives/2023/page/11/index.html","6448b959c8d1f4431abfd4338f06a796"],["/archives/2023/page/12/index.html","f0e749349b927359aa7ae952c257eff5"],["/archives/2023/page/2/index.html","0a19253d12ce24483922277a2dd4e520"],["/archives/2023/page/3/index.html","a43d0ba65391f01d4d0c5227d177c109"],["/archives/2023/page/4/index.html","4f0999c2035fff75b49b03ba21490bb6"],["/archives/2023/page/5/index.html","6cd6951889c3d15728081b8ae90a06fc"],["/archives/2023/page/6/index.html","67ec493969847d698a8a349354934aff"],["/archives/2023/page/7/index.html","7165d98b8fcf2f82bb872e6957f4960a"],["/archives/2023/page/8/index.html","7932ad3869a8c766fc36f6013c1482ed"],["/archives/2023/page/9/index.html","52e9b10d8ebe50bc80e50124f9b6efe0"],["/archives/2024/01/index.html","d419009a45b4deabb37a1c72e66e97f5"],["/archives/2024/02/index.html","bf7cb6a0b9c74760801120ddd9fc21e6"],["/archives/2024/03/index.html","7b91034e850d2f246392a5a490845c45"],["/archives/2024/index.html","2c5121f13d6198c473c20d4a1c1ca93d"],["/archives/2024/page/2/index.html","3c743314881e013e678bcaf3144f4b5f"],["/archives/index.html","20624222fceb0db2b80fb55573e32504"],["/archives/page/10/index.html","be23181fafe03242038fa43d033dc912"],["/archives/page/11/index.html","b9c1e4f38489cffe0c62021ccc040fd6"],["/archives/page/12/index.html","68dcef2ae6ce010928f6e1ba9600e190"],["/archives/page/13/index.html","c3912705faa6671f25fdcd0281137140"],["/archives/page/14/index.html","417b332cb819dc03cd6d378c01b03d7a"],["/archives/page/15/index.html","d00aa7671865b21bdb3778cb58d3c19a"],["/archives/page/16/index.html","2dc3355a9cd930d80ee93399df5747c9"],["/archives/page/17/index.html","1e7d5f65ef13b4bfdd869ed2ed844360"],["/archives/page/18/index.html","4577c804fec9c7c9b1d0cb1c1111801c"],["/archives/page/19/index.html","db6642e77b08000e4186c8b03a8bd545"],["/archives/page/2/index.html","c35ba6643f4e25ed4939c7b5f6cf4820"],["/archives/page/20/index.html","349320828f0970aa1f416f0fb0207e27"],["/archives/page/21/index.html","1331e1b3e9977207130a08633836fdfc"],["/archives/page/22/index.html","8f1359589e8afda5d533dbad7eb9e0f5"],["/archives/page/23/index.html","8b7b1adf9e2c1acd9e1802abb633a9ff"],["/archives/page/24/index.html","0043f4560dcedb9d16b1451a2aa4cf0a"],["/archives/page/3/index.html","87f29c979920e9641bf2a412f9d9879c"],["/archives/page/4/index.html","0107230f7964e401f78a2a7cdb7bb335"],["/archives/page/5/index.html","fca1f7d131504ed8ae9f98b57c851a8f"],["/archives/page/6/index.html","a3f31f85036eaf42cad09bc356d8ccc8"],["/archives/page/7/index.html","15d46fabadd6bcd338496b231569719b"],["/archives/page/8/index.html","a885e6ac42face96e690d999e121e81d"],["/archives/page/9/index.html","23f8c901f8bb8c59034d33944b78e569"],["/categories/Devops/CICD/index.html","2b6414c3e15340b5f5e08ba1b0cd35e7"],["/categories/Devops/Linux/index.html","b458f64707a190dadc9b75895749d4e9"],["/categories/Devops/index.html","225a19eb29f9224a8f60e4efa36beb70"],["/categories/Java/JVM/index.html","f9c19752b47f61f4ef92c06ec3cc0c2f"],["/categories/Java/Java基础/index.html","3231ecb8bfd2d8a65246cbbc5b88a368"],["/categories/Java/NIO/index.html","c93590e57db26ebb206fb7d6fcb74f83"],["/categories/Java/NIO/原生NIO/index.html","06e27c613f89d36c43815a9658e4128c"],["/categories/Java/NIO/文件操作工具类/index.html","319ab008ff60dc86530f16e27d34f488"],["/categories/Java/index.html","e79f626878cd9f36a4b0e1371dfa248e"],["/categories/Java/page/2/index.html","995530160573d715c9b9037b35bf5520"],["/categories/Java/并发编程/index.html","d7a91028104bfa636450545b536e50d1"],["/categories/Spring全家桶/Spring-Security/index.html","f30951dac22d77762635574e021680e1"],["/categories/Spring全家桶/Spring/index.html","1f21d87e3934f4b127841c732395ae95"],["/categories/Spring全家桶/SpringBoot/index.html","97d4c1ee80dc939c8cb542656875842e"],["/categories/Spring全家桶/SpringCloud/index.html","ea9eeca23cf89aa321bd904ae5daefa9"],["/categories/Spring全家桶/SpringMVC/index.html","d86185494c1bcf4d93fc490dc2b78717"],["/categories/Spring全家桶/index.html","ea70b8b414953cfe257289a521226c60"],["/categories/Spring全家桶/page/2/index.html","62e1ba677cb2f83597d7cadfa1fd7dda"],["/categories/index.html","d8e70e8dc556e53288ab52130c203d39"],["/categories/中间件/Dubbo/index.html","10039381b32d53f28f650d09c70cad86"],["/categories/中间件/ElasticSearch/index.html","cc35a938fdadd2e201b0a9f3d37b57e2"],["/categories/中间件/Netty/index.html","902ee6441403885786acaf0a8af28f00"],["/categories/中间件/Redis/index.html","342a0aca6a8bf4a77b84fb21fc07c5de"],["/categories/中间件/Redis/page/2/index.html","6ada57d212edfd77453b2bbb40196f70"],["/categories/中间件/Redis/page/3/index.html","f0fa28c49d79a8b329dc0d039cf8226f"],["/categories/中间件/index.html","226514c238a53409f5bbe95fe87ee3f5"],["/categories/中间件/page/2/index.html","8dddcfd356e7baa6de388ca919a102a8"],["/categories/中间件/page/3/index.html","9ec7360b71e308c790b49116b9178d2b"],["/categories/中间件/page/4/index.html","ea61f53b736e8b20181b365db917858f"],["/categories/中间件/消息队列/RabbitMQ/index.html","7ff8e77c69aacb1139e5ccbf7c07eefa"],["/categories/中间件/消息队列/index.html","d57f4cb7bd81597f59c52ad976238180"],["/categories/前端/Mock/index.html","e3f5a847994c84b0380dbc5a9ff7754a"],["/categories/前端/Promise/index.html","6fbb3c0d4166646eb040de8fd6de071a"],["/categories/前端/Vue/index.html","cba9e4c755da8b0ff19f3da6e7a06932"],["/categories/前端/index.html","7b955fb73f6ec49e2dffcb49d9a0d49b"],["/categories/前端/jQuery/index.html","c73c5a02a2a9e79cf6ca37d4f353507e"],["/categories/前端/page/2/index.html","e0b984fdcc6c7f4728c1596643120795"],["/categories/前端/原生基础/index.html","ae01268b153594004d3c3ee8319747ec"],["/categories/前端/异步通信/index.html","6ec7d392e75e1929b5e41b43709d6772"],["/categories/工具使用/Git/index.html","a14a08331961d1a9db58784d8047ab07"],["/categories/工具使用/index.html","1c5f26d95db2a14d8a4146516d90b842"],["/categories/工具使用/markdown/index.html","433b6f1a9ac011061963ac1f34a078e2"],["/categories/工具的使用/Docker/index.html","39b3459473ea3a19be5a26137ce2749d"],["/categories/工具的使用/Nginx/index.html","737f29ac9248291154b7e7b1ef627c47"],["/categories/工具的使用/Swagger/index.html","b401089c36ed0cfd85de05f88700b08f"],["/categories/工具的使用/index.html","656f4ef11821586aad3dd6ba457ef809"],["/categories/工具的使用/博客搭建/index.html","9f015376b853875bfc0ee444e46cbadc"],["/categories/数据库/MongoDB/index.html","2f1cbafdfc10f9a5a44a42a4c8e675c2"],["/categories/数据库/MySQL/index.html","d8e4b3eef2c9c210ace9ed3d0e55f0a2"],["/categories/数据库/MySQL/page/2/index.html","97ef5397ba528ccec1eff3d1562f7112"],["/categories/数据库/MySQL/page/3/index.html","533fc37d7518aa3a51d378ef74c33cb4"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","ddb3d1cb7b522135e6fd38a46d1276ea"],["/categories/数据库/ORM持久层框架/index.html","a80e09fcedc0667dd2fc9e1e33b1f053"],["/categories/数据库/index.html","2011802d67d68a222f59f3186d7f71ae"],["/categories/数据库/page/2/index.html","790a00e865ec2ce2253776691dcee8cd"],["/categories/数据库/page/3/index.html","79fcd06f9da7c13be5430b5a80f89e97"],["/categories/系统设计/DDD领域模型/index.html","74c8926e565e5f5b7e88e76ffd0a000b"],["/categories/系统设计/index.html","144421839a8806c52868ece9f8da9446"],["/categories/系统设计/page/2/index.html","da7929e750e4cb9490e7c90f6d9bf59d"],["/categories/系统设计/page/3/index.html","3346f7322d3bd499d31e306cb1cdafcf"],["/categories/系统设计/page/4/index.html","a4a2000e418d4bd16ef4bd3527ea34ac"],["/categories/系统设计/page/5/index.html","467677103f1836a360b081cf5c1d158a"],["/categories/系统设计/分布式权限认证/index.html","e8399025a36bea3cee5344ad75e6442a"],["/categories/系统设计/分布式系统/index.html","cf818d66d31e7d006c2ab9d98a18eab7"],["/categories/系统设计/分布式系统/page/2/index.html","ee06af8ff4691fbf395d91c58b41746c"],["/categories/系统设计/分布式系统/page/3/index.html","e6ef699f6d625c1644f95a00c2412d4b"],["/categories/系统设计/微服务/index.html","b052d843d963acdabca674e656d0bda7"],["/categories/系统设计/数据库优化/index.html","aeb255fb6101b21c33f54d3d59fa8021"],["/categories/系统设计/设计模式/index.html","4ba2881d961153ea7f17955093dcbec6"],["/categories/系统设计/设计模式/page/2/index.html","f71a3816c95de0beae00aebbfccf98aa"],["/categories/计算机基础/index.html","79a8673fb0e66816c0b2d3a8b494b787"],["/categories/计算机基础/page/2/index.html","5ebcbe41235adbb4e9b934f228870730"],["/categories/计算机基础/page/3/index.html","cfbf169bb970082dd096dc6033a3d9c7"],["/categories/计算机基础/page/4/index.html","7b9bd4bbc36c49c8dffaf571f435fff8"],["/categories/计算机基础/page/5/index.html","c00113d8f760ea988c02fd1358f3519f"],["/categories/计算机基础/page/6/index.html","a3b13a554f564754e7dfd06d95a595a1"],["/categories/计算机基础/操作系统/index.html","eb279f0748c02bd4121d5ffd643139cd"],["/categories/计算机基础/数据结构与算法/index.html","50c6bf2732b4fa7c28d114b82cb40fc3"],["/categories/计算机基础/数据结构与算法/page/2/index.html","2af0842996227c25c3cdfb85256e1585"],["/categories/计算机基础/数据结构与算法/page/3/index.html","944150b135cf28ee9145ce0acc90b4ae"],["/categories/计算机基础/数据结构与算法/page/4/index.html","b81a4b07d64fc771df8ba9bd862d767c"],["/categories/计算机基础/数据结构与算法/page/5/index.html","9da5e59c0fd27ab147036bab6ad8bf10"],["/categories/计算机基础/计算机网络/index.html","7b0b9e0dc0b9086f39a8902c605d6a66"],["/css/index.css","2af5ea34362e0b34f799106b2659ad50"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","cc9efb95166757e19dec934c06979772"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","b043e49bde971a65c318c1321685c5e5"],["/messageboard/index.html","a48663c9b4d655ab04176fdb051b47dc"],["/page/10/index.html","9e5d9e1b26448b8abfed612f43520c39"],["/page/11/index.html","135fa8a2a940e6c3cb8d18f53ef25e72"],["/page/12/index.html","cc928152c73e01f2a2df44b8f1c35e3e"],["/page/13/index.html","77ce957cb311d3d718a473214e0e8be7"],["/page/14/index.html","76e11f8690473cf0d6916b04e37d52aa"],["/page/15/index.html","d91600fdc2795c6ef78ecef2fe646517"],["/page/16/index.html","28e9afefcd395787fef903647143b152"],["/page/17/index.html","a1c575a8f8dac8105a5d430ec4a94aef"],["/page/18/index.html","b9a2ba5ba96700acd6e234f11558919c"],["/page/19/index.html","66bece3c2b616433b62c8f2e491b7fbc"],["/page/2/index.html","e0de3fa7057e3cbdcc9870886745f25c"],["/page/20/index.html","066489df7640064935b8065952370c39"],["/page/21/index.html","8a30470a3934467a87472ab29d7126ec"],["/page/22/index.html","f9a432810e70e0540f1b25526fe138a0"],["/page/23/index.html","78fbc0c16d9005840f24a27c417aa935"],["/page/24/index.html","a83770b42819b3785e6969452dff3864"],["/page/3/index.html","87c27365aca2ef147327157f5f5ac9f5"],["/page/4/index.html","aed07a16273af129cfb228ed9909929b"],["/page/5/index.html","66ab591ac76b307b08bc48c0ff4f430a"],["/page/6/index.html","9973895698f221cf333e0e52e04da9af"],["/page/7/index.html","e97b2c1a553d48571015f8211cd16a75"],["/page/8/index.html","b5267e2335dea1580ffcee6ddab497ce"],["/page/9/index.html","7361508444681ef8f173b0c4e7bf0fe1"],["/sw-register.js","3dc5232d2149d088e4b7f8ea1df91c84"],["/tags/Ajax/index.html","08de08d2e4a40ce181aa33883f467f16"],["/tags/Axios/index.html","2ee2b9ee1b20573262d89d8379f0bdc8"],["/tags/BASE理论/index.html","87e5d69818cc2abd41f81a451cc9a815"],["/tags/CAP定理/index.html","d313447a25d9d03e4b5c285f7792c4ce"],["/tags/CICD/index.html","cc03ba9eada55df85f30e23f5bd27ef2"],["/tags/DDD领域模型/index.html","c16654a4c06b8ca2d7326c253b6b7d89"],["/tags/Docker/index.html","9414bf4fef6b2a3ec36c6aed89eddb11"],["/tags/Dubbo/index.html","c68c2468d41c6b2836506adf8d0fb725"],["/tags/ELK/index.html","63bd42c58cb7dfb89f1957495c7755c4"],["/tags/ElasticSearch/index.html","3f09008b3b89785491908f81dc2f80d0"],["/tags/Git/index.html","4beb200f2687a2240e3b37466086347b"],["/tags/H5/index.html","ace1c9faead16fd66679e0e799890080"],["/tags/JVM/index.html","e4bd76cd5be5067bb9f70bc2e11ca882"],["/tags/JVM内存模型/index.html","bae4ad0dd842ee0926f5860fad2c23f5"],["/tags/JVM执行引擎/index.html","b03ef5abb63221e4add2be3316b452c1"],["/tags/JavaScript/index.html","133b0b2f667b54feb26d8a6cd759f2ea"],["/tags/Java内存模型/index.html","d6d75b78c0256177a1d841284343fa9f"],["/tags/Java进程线程/index.html","d68d3f6fe44db2f939796ba2de7a08cc"],["/tags/Kibana/index.html","ad94f942f05cd03af6254b13b6d944f7"],["/tags/LeetCode/index.html","35f776f23ab34e874b3dd99db0065472"],["/tags/LeetCode/page/2/index.html","4f7c11871248ee714f3881617d83cf03"],["/tags/LeetCode/page/3/index.html","21603db376ad3b5b4174ecccba4f1d2a"],["/tags/Linux/index.html","ad2f4a5f4c6d4faba5d023a562194b01"],["/tags/Logstash/index.html","655bd9fed810278fb1b9c556da2149be"],["/tags/Mock/index.html","117e4adb2d3a9740d12734f1bc30ea15"],["/tags/MockMvc/index.html","284bcef1967f495b880ab7730da3c033"],["/tags/MongoDB/index.html","1f0544112e92f16bf788334492c79fe4"],["/tags/MySQL-事务/index.html","f64f7a9f170bbda0a9316314568a65cc"],["/tags/MySQL-数据类型/index.html","f891fb5300a4317231737495d9c6fb22"],["/tags/MySQL-日志/index.html","78b78f4ce365c9379bc701d9cf592795"],["/tags/MySQL-索引/index.html","59c1db39737b0ccf1e86c9c8dfdad3a9"],["/tags/MySQL-锁/index.html","9e85d4ed41ccab3499fe33550d08fa7b"],["/tags/MySQL/index.html","5a2afc750a93f374506f63a493551cbd"],["/tags/MySQL/page/2/index.html","41f74365536e03db09a0ff29f0a7c7cb"],["/tags/MySQL分库分表/index.html","fa4c82c8f870f722c04ae17c28c0a353"],["/tags/MySQL读写分离/index.html","fb2f20d326b3baffab94d2788374d4f9"],["/tags/Mybatis/index.html","c31407f3d1e26f36441d8b826358f6af"],["/tags/MybatisPlus/index.html","8b6d304ab2eaed3666a1cf9539ec61e7"],["/tags/NIO/index.html","4073e8c075b880970a0d39eed2e539b6"],["/tags/Netty/index.html","72360f895618fbba96f5a5eb5248f45a"],["/tags/Nginx/index.html","d69e9eae68ee33b7bfb2985787836cd8"],["/tags/NoSQL/index.html","d34bd6091f73b5e887d7f759db13adf0"],["/tags/Promise/index.html","f26670a09b213b7f71cb0e79d7761317"],["/tags/RabbitMQ/index.html","90f5d8b0bbe8d386a3c4b1ee6ff81723"],["/tags/Redis/index.html","11ca7db5ebc2c97e387190d34b89d163"],["/tags/Redis/page/2/index.html","0d38f091556ad35f5d8b1b82940fd407"],["/tags/Redis/page/3/index.html","8f2ef989d432acc7e896e3fc6c0e5133"],["/tags/SSM/index.html","a0ed915192588e2504b194f4819e0498"],["/tags/Spring-Security/index.html","123fb878e71d5ab1bb93dadb015e9f61"],["/tags/Spring/index.html","0b7da992a68d7fa11930576090e1b90a"],["/tags/SpringBoot/index.html","f8dd6fd0e3188df482deff636d56abfa"],["/tags/SpringCloud/index.html","8275156c5e2310b10f7f61de447c7ad7"],["/tags/SpringMVC/index.html","d244b517221faac8992d5453f286ef9e"],["/tags/Spring事务/index.html","3a4d6137d0506a0d76dcbec92527f1da"],["/tags/Swagger/index.html","f192c9a804a07c703de0b391cebe1ad3"],["/tags/hexo/index.html","ee3e40be4d1c182cd053fe949c6493a5"],["/tags/index.html","ae9196821aa9039b6cc0dff924292be6"],["/tags/jQuery/index.html","c39964b68893a54ef2679650aa8c0a49"],["/tags/java/index.html","4f5d846331b87d987346d5cd36dcea2e"],["/tags/markdown/index.html","c2d918cabe4bff54382daa9a7908b82a"],["/tags/rpc框架/index.html","f09b64e3fd5a069a890b26c91a3fda2d"],["/tags/typora/index.html","20a13cd4c3255bb18a76abff86894550"],["/tags/vue/index.html","cf5894073593ff586a9152d64b6e3c4a"],["/tags/享元模式/index.html","fddf1d2cc54646280e1e7d0893b4cedb"],["/tags/代理模式/index.html","4473f8b9a34e7ee64e02d29e7f9f9faf"],["/tags/内存管理/index.html","f38f085d924dbaec2e26d6f3af4c99b6"],["/tags/分布式/index.html","3e8ca989b05edf814db40eea786def3c"],["/tags/分布式一致性算法/index.html","49339f978ff16656b8cdcb1d6effc119"],["/tags/分布式系统/index.html","e032ec2ed65e71ef045ebb821018adf7"],["/tags/分布式系统/page/2/index.html","459519f8ee8fd2b69f7ab2bcc1c765b1"],["/tags/分布式系统/page/3/index.html","1aad90742726143e566e820c55ebbcdd"],["/tags/前端/index.html","a9040265d71f2c91370f8f0dfc49aa8b"],["/tags/前端/page/2/index.html","80954670e18a0391b5c4bec8f0fc46e2"],["/tags/动态通知/index.html","4e334bdcbb7b7281693108c3981124c1"],["/tags/博客/index.html","6d7b30f9a66f634680d3583cb439d3d1"],["/tags/后端/index.html","d4c4243a9f8355d0156d1ab50395bef9"],["/tags/外观模式/index.html","ee7be40d4a9919867fb6c0af08df48c3"],["/tags/多级缓存架构/index.html","c4f3f3656416eb9e0b9704a44c8a6819"],["/tags/多线程设计模式/index.html","a8b0409694f209d11cef6cd2be635020"],["/tags/多路复用/index.html","4539aab20dfe6e6e2ea02b9cb539cab5"],["/tags/容器技术/index.html","75b6116c430c576a7468caf9eec35759"],["/tags/工厂方法/index.html","3dd5dfc43a7c5ea1377d081ab9775f39"],["/tags/开源协议/index.html","c93dcb6052f94c22bff24f3ff729f126"],["/tags/异构同步/index.html","e663e910f495b2e3286b8186fcacd708"],["/tags/微服务/index.html","8af82f3fa28b4216d7e61c2c33ec6d73"],["/tags/微服务基础/index.html","6366ffc0b720f13b662701b238c2e001"],["/tags/抽象工厂/index.html","4b97987ed4b107cfb93ccfec82dcbd31"],["/tags/持续集成持续部署/index.html","4cb47aa461a310745ed83deee63041cb"],["/tags/接口安全策略/index.html","9f80fac823e68e766dcc09d4b8247eba"],["/tags/接口幂等性/index.html","28cdfbd94dcb5ccd5ea4edb8f5e3a8d2"],["/tags/搜索引擎/index.html","8e0271c49bd1d5edf1ef0c6965dfbf7d"],["/tags/操作系统/index.html","f99f9ece20d7d40f8acf5d76eab9006d"],["/tags/数据库/index.html","e04d9f6873ae5de79a949be51e780b7c"],["/tags/数据库/page/2/index.html","b261fe5f9f182a79d2e6bad579c69180"],["/tags/数据库/page/3/index.html","e8277084a3ca1d107b4c7ce64ef2cf2f"],["/tags/数据结构与算法/index.html","a4c45131f93d3851d0ae7be63dd42c48"],["/tags/数据结构与算法/page/2/index.html","7adacfcfd68b3431bf12b7c7a28056db"],["/tags/文件操作/index.html","c55fa7e170d3369ac08005d14734c86f"],["/tags/日志/index.html","7c3b427dfc89b271d2956ccde86dbb32"],["/tags/服务器/index.html","5c461fad4ecacfdc3054af19f343f160"],["/tags/服务治理/index.html","7525f6ce2c351a4094e734eee3efb526"],["/tags/权限认证/index.html","ac4e152fd3b1e34205c687239c47f0ec"],["/tags/架构分层/index.html","972948a399e155393418091c32f88342"],["/tags/桥接模式/index.html","33120c2dfb1cb8a9f3119d48e48aad01"],["/tags/模板方法模式/index.html","ec07bf46f6d5ea435a22d136a396276f"],["/tags/死锁/index.html","74ca6c1376a7e0ff1c39d53a46bf15a6"],["/tags/池化技术/index.html","61f813c0060c0512c9928a0e213ab3d8"],["/tags/消息队列/index.html","469a109fa67e79211e6119b675aac9e7"],["/tags/版本控制/index.html","aba9ee2ccd6f4ebfdff10073fd332691"],["/tags/监控微服务调用/index.html","d824b8d60afc432e33b6df7ef48088d2"],["/tags/策略模式/index.html","cc07f08b2716b25f470393706cb53cc3"],["/tags/简单工厂/index.html","5c6a90609a03a285a11172b7e763d767"],["/tags/算法/index.html","dff7ee174be89f53079ff81820dccf3d"],["/tags/线程活跃性问题/index.html","749feadef733ca42e4837e0bd1e371a0"],["/tags/组件化/index.html","103d809cdd143fa4a0211e1f7fec42ee"],["/tags/经典限流算法/index.html","ec2a8eb718561bbbd04a1c428fc8ae13"],["/tags/缓存/index.html","3768884d3aaa2b08cb4d7d9ee6db05b3"],["/tags/缓存/page/2/index.html","df3f968baa37e9a2c25d91c636e5b5b7"],["/tags/缓存/page/3/index.html","f6c2bc07dc93d9aba5e066f8a61c5d9a"],["/tags/观察者模式/index.html","49835fbcd21c821c3661d1510fd4d035"],["/tags/计算机网络/index.html","5a63a0804a041dcc242849233e6a359a"],["/tags/设计模式/index.html","d84b53ba0530ac82558388dd4431fc59"],["/tags/设计模式/page/2/index.html","918380624070ff61f7dafd2b8a83e002"],["/tags/设计目标/index.html","5a519349291643d14d3c33300fdc72db"],["/tags/资源共享问题/index.html","136c9efb021234f6210d5742a38bcaf1"],["/tags/进程管理/index.html","d56adba0b8f3f7a30fd755614d296dec"],["/tags/适配器模式/index.html","0c4761e7b44465da477fecfd4be0cc69"],["/tags/通用设计方法/index.html","266f22e11d27d92e78b05c4869056863"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
