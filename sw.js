/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","bb7cb83b453fb0c43674879262a2a7e4"],["/2021/02/22/工具的使用/博客的搭建/index.html","1d90ca6fae1b2341b82f171f61bbfb37"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","afc4a84a3d39c5ce34428c9d4bdb9f7f"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","6e26524e4ae7f0a9dc0aacfc15d221ce"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","ea42fcab9d4ad7b19b9026c036d761a6"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","095441050e31e2758c03df986015410a"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","8ef88439e570c557df4c48ac962cedcd"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","05a3d9397e247990f00d626d03262d03"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","8dfddbcbfeee15765a7cd9e25c2f99c5"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","815d6f8d5ebd7e782c09d5bab5594d24"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","627f29d228191c2f64feb2a13a2b1b5d"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","97cdd8bc5c212010aadc10c245a3fb94"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","6b234d69d45c3693ebb3b65a143299d6"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","b4ec56006fdb88fbf9a90924f4a2edfd"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","9ee0e11b07a2fd4eca8425e0f5d0cd34"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","ecfd38d2230a46dede72b60934850a0b"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","bd97b12dec88a0a45ba95820ea8d69a9"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","d054d0e764075ff414a0727ddaba5d82"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","18f4a55aeb060f1545842af8c294c80d"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","22d1691e2f64faf88a5b1497f17b4bf2"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","928d4a31acac687e44064c41a332a449"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","ac01ff530ae1de3233357201355f2e13"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","8dc1653f246481e145d4259c466dc7b0"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","dda86b38b9546816cbfc04d207473052"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","2f329b2d36aec31c1aabe64ce55c9b25"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","20cf3066b27b66efacb72b576cf2c219"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","3b0209b54ab9aac00f9a7b3afb9bcf79"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","108a692687c238df31c08bbcee543c02"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","4535f8c3de3429ee07ec518c1dadc062"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","c364e268fa715855ba71b8f807c02d2c"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","f0732831dde8d7d68c150165fe30bb0e"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","a6d1786180ca69653a4a5a4853353668"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","d96c2f0a38bf3873da7b8828149ef1b5"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","8e77573bc3145a08472943b3ccfae78d"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","917abd9aa069784eb7aaff5738198806"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","d86be48c3d41934b4efe00729e633ee2"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","89d4dc7ebdcd8bd4ab234f5fca49b3ff"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","627002f0d28f3fe7cb158c5489afdff4"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","e42207f04f19dd78b021c59e9e0d36ac"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","d55879ffdb6dbafa2085b757c9c8061d"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","b9b139dabe3231a75a0e903021f547ac"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","f4cb11242400842f5dca3bf95efda4d7"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","4714a611c2324d088730406710d8d487"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","82375a2603b88def4c0f5854c0623175"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","15afaf63c2c0dcd06855eca82e4b5e36"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","d036817f736b56237f5cefd8660bc49d"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","2d2597a502bcba5e26dc3ef108859f94"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","5a2e6621ff11cdc93772fd1e56f6332f"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","821d1264681a764ec6681c56d0c760f5"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","a21bba439ded8782be4ea4091e7db52c"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","d5c50ff3b5d5697c6eaf66f495c8dbaa"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","85ced5cdf42a8e32f24ad25914f459e5"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","bdbfde693cde9c351061f81b20917de3"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","eeb95cc7eda900bf43fbab35f8e082bb"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","2092bb52eccad2acb97c84cdd436afe3"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","c1c1166372b4dc224cc21ff6b1e0c2c9"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","1272b85d74756b363d948459acf94b3f"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","c318465a42bf09cef7a416b6d2ca3c13"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","c284eb83cb2e5a54a74415e069c0b249"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","9d7b2e4f2027ada6ec8fa8e22f206706"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","570624f03043000d266b28720ccae9b6"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","308d19e57b6710430ed937b3e98ffc9a"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","20f9f429aa7c5308dc1cd7b7ccbd91d2"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","2cacc2d448ef5577619cc0d3c9c4d01b"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","75e11f658aa10839ed4da42cfc8ab4b2"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","83c3f7272f063478fb53dbf036f0a413"],["/2022/08/17/前端/jQuery/index.html","df2c2bd9625b000c24d8d951cbfefd17"],["/2022/08/19/前端/JavaScript/index.html","9f471d19af8a92fb7e2510e3232f797a"],["/2022/08/22/前端/Ajax/index.html","8b790f2c207b8c9836effc3206a71594"],["/2022/08/23/前端/Promise/index.html","31a3aece512dda2bc78d79a13136e0e8"],["/2022/08/24/前端/Axios/index.html","fd7c61bd59de84bc87d4356ddf2d90c4"],["/2022/08/25/前端/H5本地存储/index.html","0b2013ba19a9b448c1106449e4bf2145"],["/2022/08/26/前端/mock/index.html","4eb4a88ac1a1b632ec66171247060b28"],["/2022/08/31/前端/vue/VueJs/index.html","a2fbc70812a29c1f8b6f0ee810ac39fa"],["/2022/09/01/前端/vue/vue组件化/index.html","1a5eac4b4280939fb78183c0bf495f8f"],["/2022/09/04/前端/vue/VueCLI/index.html","716a9be76548441b2d5bf27e3b7d0658"],["/2022/09/07/前端/vue/vue实现动画/index.html","2b000332e04f76dbe21d5d5dd7e02188"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","ce876b8dc50940ff6054b948e616bfc3"],["/2022/09/10/前端/vue/Vue异步请求/index.html","c5abc223a34e7e161f85266cbd189b25"],["/2022/09/11/前端/vue/vue-Router/index.html","9fc60a56ae6f1605dd7d32a7da8f403a"],["/2022/09/13/前端/vue/Vuex/index.html","b2472423cd68778f59842f442034f3d3"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","692f6f97afd08ec055b2148fdcadba86"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","b36272da470dbdbe8bf2b8fa990ab6b1"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","13fd8d55e5887f295c18e6b8d137cdb4"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","9e5dfe2497205102852e767e0eb166dd"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","26283004eedb4fd3e4f01ce862604e08"],["/2022/09/28/DevOps/Linux/Linux/index.html","bce195099dca6950c7fc28eae97f01d7"],["/2022/10/02/中间件/Redis/redis基础/index.html","312aff5a725658b2189344a53eaecdf6"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","234cf32ae329c4bdd7e577b6623c1171"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","ed4ecf94b1b035375864733fb425d07d"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","b601154f0e5e7aa8bb08bd79757d7c6c"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","e41f44c3931b4ef1516f238ec8deeed3"],["/2022/10/17/中间件/Redis/Redis集群/index.html","89f6819575e9ff3a5f90f6526710b9d5"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","c06356c180a4ea96f7cb87c80c26f17d"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","d7609b5db4039827b8f713f5a66a0661"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","8d468f595c69af422b49b4f8a69800a0"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","058065247e7422fdaa5ac92b02a1ae37"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","9223983e5daeda7f2a8ced47a4f7f5d8"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","bbee6a49a6c9911c71fa049151ee7137"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","725451ef69b574dcee1b765966415757"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","dbfcb02f809838e85ce13b95965bfd45"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","d5920dc815c3fab9ed4de0a50de2009f"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","3ac8de8d755cef1446e6328c019a8eb5"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","ff748993859c355660640aa048448bc6"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","c8b1796ecb6f651aea0e80b8662dd3f1"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","10110d8bf83334778e65b7a650727f22"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","2d6b6c5acaaf891e94ce4611e3a2db0c"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","33a2c6209b25e3615fb1c35f260ca441"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","75b0bf5c7049c2850f7b9ddfb79434fb"],["/2023/03/10/DevOps/CICD/CICD/index.html","1994e995230448956d505ad5616da2b0"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","cba7a67ddaa056d03c33043f37e786be"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","8e2ed6f8f016607ae7ef4df78bf72712"],["/2023/03/13/Java/NIO/NIO/index.html","e2d4bd3e0069acba2a9170f8879f390c"],["/2023/03/14/Java/NIO/Netty/index.html","89fc486d5955e737456947119293663c"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","7cf026976b4d465da221b5148437cc26"],["/2023/03/17/系统设计/分布式系统认证/index.html","654c8d8cf227dcb80a6204ba5222c991"],["/2023/03/19/Java/JVM/JVM概述/index.html","09f2b3221b9a0caf576b0a3edf96ddd0"],["/2023/03/23/Java/JVM/类的加载过程/index.html","e39909fdcc49ee124aad7efd38f0bdfa"],["/2023/03/28/Java/JVM/对象的实例化/index.html","3ccea3973c772d27f59a23a424b36fe3"],["/2023/04/01/Java/JVM/运行时数据区/index.html","289f9a396dc05c567b25da429a874f99"],["/2023/04/04/Java/JVM/执行引擎/index.html","cc130ff8f9fe9ccba9731c4d16f243e9"],["/2023/04/06/Java/JVM/对象引用/index.html","80f255f74bac86f3cbd55df2773c9224"],["/2023/04/09/Java/JVM/垃圾回收/index.html","c3111dca6ab083717f33e6b238d7e60a"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","1f45f9da9edd37d8fb3891a3d4d18971"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","204ccd0007ab92f9af8d39bdf15dc8b2"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","c16f7e441a087bbc8747a6059a8fd8fd"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","c8704284a99e83f3ffeb643f4558f9df"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","10fc73a2e0e4893bfea1d4671f4490db"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","b60b5d1ab682ec50730b68143a720433"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","f6bb01b3730aa3a54b615f519a1791c2"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","cc3f8a4e5b26619c1d394773b5a55216"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","006b1be64c4535d642dcf76e349eee11"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","0e79bb9f9bd9f9ef9d2c02e58f9ffb6c"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","b1e21b80362ba7135a8ecbb69e11f5ae"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","708119e503a612affdbd8b469501f830"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","64596d0176610cdad6d4e5ad0af62816"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","45ca65e8ff79216b3ab4c28af6cc9725"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","11d0f6f7d1c1b7900b37af1ffbde7527"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","ee7ddc5be4d261a697f2167f282762dd"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","30d0b7a860e0553f0dab391bcfc5053f"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","33dade2eed497cf3a65a79c310c8b6cc"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","e5170c4bf8ddd7486377829cd619067b"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","68e3264546c8908850cf87d5a1200eaf"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","deb5aefb801ed06d32a06dd62dc0dab8"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","af0c6e05f98861ece98944b9503127b4"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","4e1b4f2a11ce00130dfe2ba2602e6ebe"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","a1c1f78d1302f2f337245e52cae21106"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","05f34c57772333bb5931a54bedce6d9c"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","97c3e987bb241d1adf0495a911634104"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","f0f277a1eb5eb9414d8e73050358c18c"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","2330b6e2578a7b66e7b2d4b7022f88f2"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","85ee6b23e06eedeacd84ffdefe80d5b7"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","613714185125ad950e1aa7f99e46f20f"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","fb73db34e335ff9c6b58791605419be8"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","f0d46360ddca9470e1dacbe16b6a1f2a"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","baa84c10af572e64561ba8492db9e543"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","01d33766a7db1be8b9bd8adb2694eace"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","e4d48bbe272fdbbd7d613bfaed429835"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","72c26d513d737283b29563fb9ea5d8c0"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","a60beaae3dc914fd44462b09fbecda15"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","b473b7f765ceaf0cdbcb843cd6b381c1"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","1ac7fe5f0ab0d46f3c140a1b07692a32"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","2057bbe611bd9f5d51055f02719d2f90"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","eff90cc38e3d8b70eb1ad745fb819fa8"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","51277b0992f62c51d4cc4aa7088b6c68"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","5ecb43b7301c70b6ed477ca7976b106f"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","cde55f4c8fc615b8da86052713ddc21e"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","b291fcd368ce2602b87dd170b4d4ddd3"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","2abbc6a2afec9d435b926636e8894006"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","15ac03c81943dea4367d78f459e9364a"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","f5f9ec286b4fb506182c8fbda22f74da"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","2968f99729fe3b568fe9aa724ee7587a"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","78087a135cd9d80d2b2f65198184424b"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","504c9c65b951016a211b95d49a4f286a"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","ac57f9a393e0241416354ed221077bd7"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","906f59be08b916120ce78234ef50e52d"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","50a33bc1d1d214a5606d33c9e6f83836"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","62837cffaca308dfbfbf0c315a01f20e"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","50ed744b7b35230e6750ceefbaa10b2f"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","c9ed825d727a5f064987f614ad4d7297"],["/2023/09/04/中间件/Redis/Redis事务/index.html","3a31f08aeb2c518aba2fbd0a36e0827c"],["/404.html","73780181b31aad4b7c1cb6fa1e50f472"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","93473e3b081886f98980ca5898852c68"],["/archives/2021/02/index.html","0e888604c93a40e9b1b2ac796e91fcbd"],["/archives/2021/03/index.html","b3c1ae67357cd716ca12c29997a8c982"],["/archives/2021/03/page/2/index.html","80662c091593a9fec4856ba982977b42"],["/archives/2021/03/page/3/index.html","a64a5430bc080a3a3c46931a6c00cea0"],["/archives/2021/04/index.html","abd73491b5b50b83625671004de94778"],["/archives/2021/04/page/2/index.html","a985795a0a65915dd0f434c636b5dc63"],["/archives/2021/05/index.html","88eb6328ba2f22d0eabb59c93cc5ccf2"],["/archives/2021/index.html","de0e877bf61ed71ada1e251c80ff6625"],["/archives/2021/page/2/index.html","4d316deeca59b64177723592fb096411"],["/archives/2021/page/3/index.html","acb8fc3b75f316d0a9c84e0f927d9629"],["/archives/2021/page/4/index.html","438ef74efbeefc5385f31f4ba6584b00"],["/archives/2021/page/5/index.html","a7b470c39a0810f4269963744e45d1e2"],["/archives/2021/page/6/index.html","705245199c11ec6187d37f60b3ebd35b"],["/archives/2021/page/7/index.html","f22e5ef1d3d8885a4c01e47e8521d78a"],["/archives/2022/01/index.html","0b52b87f30728f83f07b9d8a62549cbf"],["/archives/2022/04/index.html","338e69f30592c76f745e1ba467153c18"],["/archives/2022/08/index.html","15ef11574022989cb87b646d9eebb33e"],["/archives/2022/09/index.html","95f6c77049c8a623e3f2221fe1ea33ba"],["/archives/2022/09/page/2/index.html","ce9726ed91279aacf5c1198ee4b6e96f"],["/archives/2022/10/index.html","ba07580eed67a6ac315810c42f9c6e56"],["/archives/2022/11/index.html","659529400548a8e9326ac1c4d5af56e5"],["/archives/2022/12/index.html","3254ee84b4df7bb9025bbb5facbe2625"],["/archives/2022/index.html","1b2acb7249ae504dd3552db83e722950"],["/archives/2022/page/2/index.html","48d8dec8932735397e8651ac9908cc77"],["/archives/2022/page/3/index.html","46118b1c22e20b31c6a69a0f154ca847"],["/archives/2022/page/4/index.html","cef8d8f5325c9855e9cf93cb70037b8e"],["/archives/2022/page/5/index.html","b5a63411643e929ad1fca22dfa98f91b"],["/archives/2023/01/index.html","77b95042d1302b6ca1af57cb9c341979"],["/archives/2023/02/index.html","167a25d480d1ea0f1387ae8aab670e29"],["/archives/2023/03/index.html","dedea96539aaf374fd62a6144827765b"],["/archives/2023/04/index.html","714627e704eb050cd9bba30aee07fcb9"],["/archives/2023/04/page/2/index.html","5a05ada9ccb31f84b5e2114c319f7107"],["/archives/2023/05/index.html","6042a838f4fe4aa5b20c7b9eb2256ebb"],["/archives/2023/06/index.html","7967b6dcb568d5663c0075e13fd855c7"],["/archives/2023/06/page/2/index.html","885fd458841b6792d6029ac7e1f59526"],["/archives/2023/07/index.html","91ba821dd9fccab552e8a77d1035ee51"],["/archives/2023/07/page/2/index.html","e5ea94f7ed6956d48b51404c06114ff0"],["/archives/2023/08/index.html","7c72b6e15ba94745ffc5bb02d88aef87"],["/archives/2023/08/page/2/index.html","e13ff289e5fe68b6edc645c2fd2f942c"],["/archives/2023/09/index.html","4ec1b27ec92ff45c86bf6a153f219fea"],["/archives/2023/index.html","78241fd2aa8baea9463802db239f1f3f"],["/archives/2023/page/2/index.html","19bedeb71aa10512c64be837e00b191a"],["/archives/2023/page/3/index.html","f5f1f480ed156fb13212cae938bd8cbe"],["/archives/2023/page/4/index.html","1b6d61bcef96e0c64e14fad367705a4c"],["/archives/2023/page/5/index.html","1fd7cf010c58725bfb4478be1dae0c72"],["/archives/2023/page/6/index.html","56d1b7b2fd06f438cc3321ee1f983bb6"],["/archives/2023/page/7/index.html","5ca8e550b48c6fb5e6e399bbc34bb8fd"],["/archives/2023/page/8/index.html","54430110ee4505dac4bd5085c38740ab"],["/archives/index.html","abd547176b1aa622f23684b99903d609"],["/archives/page/10/index.html","d60f27d782aa05294037745bc6872bd6"],["/archives/page/11/index.html","f74bded531a6bfd2b37e07774a18d1d5"],["/archives/page/12/index.html","47e9c6e41b0b9d2329ace83d72398941"],["/archives/page/13/index.html","7c5bf7aa6ececfd6c433b176aef01f93"],["/archives/page/14/index.html","f9f007c9a6023bc8a660131d0fd34caf"],["/archives/page/15/index.html","8cd78bb0febd34e5d69633a009e30895"],["/archives/page/16/index.html","f763d60b7065115349716450a720a44d"],["/archives/page/17/index.html","1b7d4855d836fcc540402b9e1df3cfbe"],["/archives/page/18/index.html","3d47927e7d20ec07cfa4001d0cbcebfd"],["/archives/page/19/index.html","a52f78057707c7edeb8e58a4903c16fc"],["/archives/page/2/index.html","fcc6377bc26b4f21e929a1b618e944e5"],["/archives/page/3/index.html","7eb85edfe1e608d87193a4bdc0f5cf42"],["/archives/page/4/index.html","9cb1e9488474fec300db967dd8c48523"],["/archives/page/5/index.html","9e108df1cee9601b82d4c67fc57ab84b"],["/archives/page/6/index.html","dfb373f6a1f4c3f6d47feddef8b3ce77"],["/archives/page/7/index.html","02035cce5645c6b24993281f683d953e"],["/archives/page/8/index.html","ff1945bac881a86c0007dfc92828619c"],["/archives/page/9/index.html","a20b50cd6a8acc037afb9d18d7bef5ce"],["/categories/Devops/CICD/index.html","1979a765ecb726ccca5d810a3f6a8656"],["/categories/Devops/Linux/index.html","6ea078625f655f3d99d7f50245e51ffd"],["/categories/Devops/index.html","f3e7e5c1b4433365644744c2608ec974"],["/categories/Java/JVM/index.html","a9017b80f307141c0389fd1e2b53244c"],["/categories/Java/NIO/Netty/index.html","1a3f8dd609f7446cae014670804e14c9"],["/categories/Java/NIO/index.html","dd862cf4be3a13cf8807069de181726c"],["/categories/Java/NIO/原生NIO/index.html","37da4864be46694637268d5a85b6b7ee"],["/categories/Java/NIO/文件操作工具类/index.html","dc91bb2043e42f619320a1d5eb495931"],["/categories/Java/index.html","251f9dd22a90557708fbf08828bb0287"],["/categories/Java/page/2/index.html","ac1bc08dbaa0115d2e8d018be2fd535a"],["/categories/Java/学习路线/index.html","11b3dada65dcccab46296b5f846c3f10"],["/categories/Spring全家桶/Spring-Security/index.html","56d9a225b60b604e3d78c9f74f5ba5da"],["/categories/Spring全家桶/Spring/index.html","84f56e058604e93b05463cd3757b4801"],["/categories/Spring全家桶/SpringBoot/index.html","f6646ac6983fbffab058801cb3e1322a"],["/categories/Spring全家桶/SpringCloud/index.html","9443b174ed67a946d0577f6192af0ee7"],["/categories/Spring全家桶/SpringMVC/index.html","66b6a911612973aaaa1d662be6fbffa5"],["/categories/Spring全家桶/index.html","cd062709ebe81370c1c5ba8642f16cfd"],["/categories/Spring全家桶/page/2/index.html","d116186b8dc5fbe1b23d7ee0c1cdcce7"],["/categories/index.html","0a688adbd52171e25a79ac0e7b038298"],["/categories/中间件/ElasticSearch/index.html","4b69d713b395438c956cdef13409ad78"],["/categories/中间件/Redis/index.html","7475cd629eacdea2627495cf4701a769"],["/categories/中间件/Redis/page/2/index.html","ab9bbf3ae65a356276a9a1c223d7d8ce"],["/categories/中间件/Redis/page/3/index.html","6d24d04297bec09e0fabc7e38475afb7"],["/categories/中间件/index.html","faaa3ea69fde1588a51030674be7be22"],["/categories/中间件/page/2/index.html","df641b42958d8f185e948fa7817bc34b"],["/categories/中间件/page/3/index.html","549667f58729f81a2b66491299348b70"],["/categories/中间件/消息队列/RabbitMQ/index.html","32e6ed21a42f1ccb5f7a84aa7360329d"],["/categories/中间件/消息队列/index.html","0001dfc2576707a98bbc0ecb08fdc862"],["/categories/前端/Mock/index.html","fabea9bd5d144d5369152a38b27282bc"],["/categories/前端/Promise/index.html","3642d000f6b737a45fedbd947a7355c4"],["/categories/前端/Vue/index.html","9ea0dc03e1386ad4d68f4e85fa1c90fb"],["/categories/前端/index.html","898c3f1b22525bc9997d08fc765b5465"],["/categories/前端/jQuery/index.html","d19f943735213afdcc491f34c49084f1"],["/categories/前端/page/2/index.html","ba9e686e659bcd35a606544369e0b878"],["/categories/前端/原生基础/index.html","f8de87fdae085f80fa4cb308f0807041"],["/categories/前端/异步通信/index.html","114b9fb7003d17bd9473f304816841c0"],["/categories/工具使用/Git/index.html","2c5178c9d489a97d8b5b031ea39bfc4c"],["/categories/工具使用/index.html","7f6affe47c05262172b11f9a91793e3f"],["/categories/工具使用/markdown/index.html","4f0940c193fbfe60b330d52881e45dc2"],["/categories/工具的使用/Docker/index.html","379c0124eb2c514f8cec12a8e57b5585"],["/categories/工具的使用/Nginx/index.html","831066e92e1e857053fbc1ac8ecdf87a"],["/categories/工具的使用/Swagger/index.html","2175a362310172d842678c05c2a39eaa"],["/categories/工具的使用/index.html","6bbadd6cbda34274a00dc265cf931104"],["/categories/工具的使用/博客搭建/index.html","1caad72a8ce9dfba647f6d9a362df1a4"],["/categories/数据库/MongoDB/index.html","966be76d8a5158600adf70da6e2c38d5"],["/categories/数据库/MySQL/index.html","d26c9670215db960cb44145b84b99361"],["/categories/数据库/MySQL/page/2/index.html","689104e4ba993cee27e3b8641556779b"],["/categories/数据库/MySQL/page/3/index.html","abfc208787792635f4e4d5034f5365f2"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","4721db5b225fef6f542faa6b4a7c3f01"],["/categories/数据库/ORM持久层框架/index.html","6297ed07bbbd23a1baf473b9acc86fb3"],["/categories/数据库/index.html","1ebb64abc853bef3329c2474a0936524"],["/categories/数据库/page/2/index.html","b72805d1f32e5d76da8c7d93677af523"],["/categories/数据库/page/3/index.html","b9511675ad79578f6af7729ee7e6c239"],["/categories/系统设计/index.html","76026f28fe1fbff1f19137bc35f18c1e"],["/categories/系统设计/page/2/index.html","c8a9b974bcd6c93c011318c1167f488c"],["/categories/系统设计/分布式权限认证/index.html","666f6a0a77968c56420ed8d7cc38f987"],["/categories/系统设计/设计模式/index.html","a6bc7e3eab1001b461f6f63fdc1ad7a9"],["/categories/系统设计/设计模式/page/2/index.html","075cfb74190c62af48d11d67f6103ced"],["/categories/计算机基础/index.html","93f9c73abb6b0428ff6fcc101ca5c6ab"],["/categories/计算机基础/page/2/index.html","62c4605e5e70c4c778600f62d5b00ba4"],["/categories/计算机基础/page/3/index.html","ca3fd5df987dd081c02078978c8a828b"],["/categories/计算机基础/page/4/index.html","bb3fc65124adf19e7c3ad15c92554c63"],["/categories/计算机基础/page/5/index.html","1faa5e28e53429d65925290a292a0c60"],["/categories/计算机基础/page/6/index.html","9fbf3e6affe718a6adeb9d6e5e9e91e2"],["/categories/计算机基础/操作系统/index.html","5e13d1d7fa3a502f3a3618ef5c8c3ad0"],["/categories/计算机基础/数据结构与算法/index.html","3afd2858e575b31ce4ed02d36cfae25f"],["/categories/计算机基础/数据结构与算法/page/2/index.html","61fc99a51508f5671c2afecd66daa0c7"],["/categories/计算机基础/数据结构与算法/page/3/index.html","36df20f013681edc9915a5909e4db028"],["/categories/计算机基础/数据结构与算法/page/4/index.html","dd38a2264b68eabd99133c87919d1c8c"],["/categories/计算机基础/数据结构与算法/page/5/index.html","d6b246e23d947f0c1b54fd5798122ed3"],["/categories/计算机基础/计算机网络/index.html","bdda7bf426511f7ece27ad448a94a494"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","2ebcd1674cb5ca16d73bc5e1bdd75b16"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","0eeeb532f7af40d31762ca99472a9eaa"],["/messageboard/index.html","09e998e43aedf56f8435ff4d6695a272"],["/page/10/index.html","e1c487d491cd7d8984dbff881e1bc38d"],["/page/11/index.html","6e045df7e999b1bd9e5249649cd42c29"],["/page/12/index.html","ddb9e0e03554b55aabb6ae299a82e4b8"],["/page/13/index.html","1d85cc20598e2bca764b5b4ff747435f"],["/page/14/index.html","ebe2f4c14d7d605ffd37a255a808c98f"],["/page/15/index.html","3b8a630cddf6ee9ada16195811825ee5"],["/page/16/index.html","85ba7374bef5114fe2f0bb3b9b708689"],["/page/17/index.html","c8bb54c3fce2bcbffc8566c1dc825b52"],["/page/18/index.html","05ba4d0e406bfcbbbdc134c6be69400a"],["/page/19/index.html","ac63e088b524285ac52bb7f7feb63c36"],["/page/2/index.html","ade616ca78ef6c53e68ac37d87d50edf"],["/page/3/index.html","25de0b10db8c9fefc245accc0770e29f"],["/page/4/index.html","e136d7a7fba9ea53d5aa3ec5f2ed8300"],["/page/5/index.html","9b95591df7c4ec87a1e9f33beb80df95"],["/page/6/index.html","09a5ccf771d00c46b6721c409c6747fe"],["/page/7/index.html","33987acbfa572600587f7d601b9f0af4"],["/page/8/index.html","1c9195584fe2972593233fde440d4f11"],["/page/9/index.html","32a05e5a7179d2db241d2f468c3ad37b"],["/sw-register.js","42deabfe22525f2225516dd748eef337"],["/tags/Ajax/index.html","77c99e243046650e31353abd98b72843"],["/tags/Axios/index.html","5da8f04fb24ac46ad809664418907b68"],["/tags/CICD/index.html","ec9042ebd439b7106ebbe6d7261f8773"],["/tags/Docker/index.html","5e62fe6ba93f93de76f1fb5509bb3304"],["/tags/ELK/index.html","5a97d713fdad9c1982fe76a922eba3fa"],["/tags/ElasticSearch/index.html","930194529c75cc6678cec983567340c2"],["/tags/Git/index.html","ac3b698d2614ff8696c796f100f798e7"],["/tags/H5/index.html","6b6bafeb3e6ad4ec9184ff82354dab63"],["/tags/JVM/index.html","5aeda957beeb6ca3072584df38d6e2e2"],["/tags/JVM内存模型/index.html","1cb4dfaffb390b896802242e62c8af7b"],["/tags/JVM执行引擎/index.html","6c84a46104235e73ba093c15b9fd6243"],["/tags/JavaScript/index.html","88829e3dad739a91af9117f1e9a0ba2f"],["/tags/Kibana/index.html","b83c5905fedb998d5ba885a2a0e0ddab"],["/tags/LeetCode/index.html","a06b34e2348703c58c629518eb3d5931"],["/tags/LeetCode/page/2/index.html","411ff3f8ad9905aea8df859505c5d748"],["/tags/LeetCode/page/3/index.html","f181f00ba6cc24c685fa2289cea194af"],["/tags/Linux/index.html","90146ae7f8a5dff53893a65b961a8b40"],["/tags/Logstash/index.html","0b01d797f7d7a2a114fd0c2603bc06f7"],["/tags/Mock/index.html","a576b71c437e4e5457483186dfa4fc90"],["/tags/MongoDB/index.html","2b90e9779415fe95baa1062949b1ac45"],["/tags/MySQL-事务/index.html","afd156a21de361d6112b2fa0d1479d20"],["/tags/MySQL-数据类型/index.html","a77ba1d30838b0e4f15e86415db98576"],["/tags/MySQL-日志/index.html","96d7785cd3b547b5c6c3672f92b5d2a3"],["/tags/MySQL-索引/index.html","1335fbaecccd72e812f90512203f314a"],["/tags/MySQL-锁/index.html","73099eb1ad035e84769733175c3b7580"],["/tags/MySQL/index.html","056e271a9c539c4a3fcf08ea3dcbc521"],["/tags/MySQL/page/2/index.html","ef1adabcf6043bad7685c2934f88b76f"],["/tags/Mybatis/index.html","a83babccee4bfe7dd73f9bf70816fa16"],["/tags/MybatisPlus/index.html","d871aab24f3fd5dc737de992bc36bed0"],["/tags/NIO/index.html","857705af99ac3a6737580fb9c9b3af60"],["/tags/Netty/index.html","41ef7a3cfd3083e78bbb69f27c88cc91"],["/tags/Nginx/index.html","7f0508ab86550de4fe0d4f1dc5493999"],["/tags/Promise/index.html","62b506dc3d085013c270c148b20c1a16"],["/tags/RabbitMQ/index.html","fae169c244713afa835d9e9cb3133ca4"],["/tags/Redis/index.html","c2b8a4e5b6157e5587a104ebb326f42a"],["/tags/Redis/page/2/index.html","f219fdb434fe8cf9f4180e33e657f922"],["/tags/Redis/page/3/index.html","281d537d33da61aa06fbcf358e99ade5"],["/tags/SSM/index.html","798986023cfd99eb61492ae8b36f9fc0"],["/tags/Spring-Security/index.html","cae20d1aae5f368544874d292f5972d8"],["/tags/Spring/index.html","3b43810d7b8de3a34fa11e50f8e26e75"],["/tags/SpringBoot/index.html","92961248dce47cdc598637e9224cb9a2"],["/tags/SpringCloud/index.html","a325ae8893c319788c174403a6f2d7d3"],["/tags/SpringMVC/index.html","b1101b343388bdf8d63ca2e578f1af63"],["/tags/Swagger/index.html","a90893fc03acd501f1dcef532d9c0244"],["/tags/hexo/index.html","160ded1139dd76886bd95a8560c2a98a"],["/tags/index.html","5af983bf7cb8144d51b0cedfca211186"],["/tags/jQuery/index.html","74ee44834ba815e3c8be4836f269cc3c"],["/tags/java/index.html","9a8a531e741c42f33d75826799a0ef31"],["/tags/markdown/index.html","9d74b2f3ef107316b3de0a127f466df2"],["/tags/noSQL/index.html","aaee2df9d8faadaa8809511fb7c3e430"],["/tags/typora/index.html","6f03bd049edbf313525fb19b5954252c"],["/tags/vue/index.html","ee79167458b4fa76efa0605d955517a1"],["/tags/享元模式/index.html","ee48434e7ee7147007d798b73d2719c6"],["/tags/代理模式/index.html","306aede17ac8a154e5a5043d1dd14de4"],["/tags/内存管理/index.html","f84bd1f2f02d3ff3a6a7f40bb12c1237"],["/tags/分布式/index.html","b87f43ab1d1f2fa81e156eaffa108b95"],["/tags/分布式系统/index.html","1606d7432970caee06ffdb4fefe5f25f"],["/tags/前端/index.html","66445286eed70e6c02646509378a2d67"],["/tags/前端/page/2/index.html","fa645fc1a6d8eed90391d6c79ac592d9"],["/tags/博客/index.html","5db2dd7c97002c2af61591cf4bbc9a32"],["/tags/后端/index.html","6df13c332f6ecc0b62be57259dd96dac"],["/tags/外观模式/index.html","940c9d93ed1780326e3f1328410cf4bf"],["/tags/容器技术/index.html","5e71e475e80db267bc9297c4c1d67557"],["/tags/工厂方法/index.html","4ed4c11d502c0d60df9288ae0984d58d"],["/tags/微服务/index.html","99db8b9091954c44687e7965334790c8"],["/tags/抽象工厂/index.html","ced4971252109792dc3967ff4521df90"],["/tags/持续集成持续部署/index.html","c20016e71e26527f7fb7424ae8b2d1f5"],["/tags/搜索引擎/index.html","4cc3473f4d83fff05ed95db02a332e19"],["/tags/操作系统/index.html","f8c2e8667b094849dd15afbc08fc6e02"],["/tags/数据库/index.html","fd9da17734c125c1e78ebbe36a634e1a"],["/tags/数据库/page/2/index.html","7c7fde693501c3e14ad319c2b3ff06d2"],["/tags/数据库/page/3/index.html","c848b44a1327c5bd0a4ce74efb70de43"],["/tags/数据结构与算法/index.html","489439ce14388abf0a0462affc28ff85"],["/tags/数据结构与算法/page/2/index.html","d1d99806a5badf0b361ba949671b102c"],["/tags/文件操作/index.html","87e757d4041eb6f948189649b0662b8b"],["/tags/日志/index.html","56f7b340f5da32adc569deb27c032b8d"],["/tags/服务器/index.html","98b898eee7023d92756ba03b5239501d"],["/tags/权限认证/index.html","a8fe703d6ccf10c09faffb9ca96a9d3c"],["/tags/桥接模式/index.html","7b00b15be2db534e63ccc21c3b58ccdc"],["/tags/模板方法模式/index.html","fbc8eadd890ac1d705f3c5a1bc2dadfa"],["/tags/死锁/index.html","21424a205ca05cf5836dfa7b44b90bca"],["/tags/消息队列/index.html","3814065cf771668033913bfa3823e237"],["/tags/版本控制/index.html","75074f0f15fa8fc749590cba6b633eef"],["/tags/策略模式/index.html","4820831c6eb9d5b78981e4d830b0f685"],["/tags/简单工厂/index.html","8003c959c21137eb1d7759c179832fa1"],["/tags/算法/index.html","2c6b68afa93f72e05ed0ca6fcc0132bf"],["/tags/组件化/index.html","424bbe17e2ffc5bcd841ab9283526a4f"],["/tags/缓存/index.html","bd6bfd5f68b9a7bafebceb3bb542c844"],["/tags/缓存/page/2/index.html","8b5375b4d5df0f1d5a52f3d421d1fb08"],["/tags/缓存/page/3/index.html","2c3120e6108d620d854c262e02169e44"],["/tags/观察者模式/index.html","1578b02f07b4b15461ff937de2e0e2cc"],["/tags/计算机网络/index.html","6333edbfeafdcb7adcf91b787ceeedff"],["/tags/设计模式/index.html","91b3ba5febbfc802a5afcb8bd4f57cad"],["/tags/设计模式/page/2/index.html","17db91339b4282a0d8ddde06a28ab643"],["/tags/进程管理/index.html","dbbb25d516109dccfb83fb5161be2c7d"],["/tags/适配器模式/index.html","56fe5c23196e86dd77be38ca2b053ead"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
