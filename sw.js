/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","9d0cb69afbd0196e4ecf29f8639cbd1a"],["/2021/02/22/工具的使用/博客的搭建/index.html","f626130c3695c4e28bc3a0ff67f44826"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","0f4ae910aecc07a8056132c7e68e7257"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","f7a4ab7989aac04b78f95a5c66d69d24"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","f7e4bebc606e0034cf17dbd084276cd4"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","db79de89bc7c5f35aae6f8e2f46c39ae"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","e16a7ff1494ba3dc4d2aae8053231651"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","d6a99c03802d261e3f698afdf5bef852"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","da9b2f49cfba129e5062847e9139e2db"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","9be00adb4597ca8f713d6fc46003cb8a"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","52014e65bc8b657a2ee34f8c0548d5c8"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","044fd6e7f186a501635bfeec076699d4"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","41a8c12eb20a606b12976843ba738386"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","1357f7d82e11748e5b956aa1ff8d40e5"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","4e15236a1129b9855b59b44705f31e52"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","1668fe73cfd707d1c400b820270457a5"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","30627610ec0ad9c22d40b14ed6e9728f"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","0b8038679954955157accdf3391bf39e"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","4190e4f74ff9451922f9035ac27bf818"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","cf62d00c3ad544dc20597dd8d1d45bfd"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","90e977f0feb830a97f6483f373c55230"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","553f95f32e595e5fbdcfd320e6e82bbf"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","b863b63aa19db87ea395e4fccacf1d5d"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","36348351675c3f454673699c452c4bec"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","e72107e72b3fc19c56ebfff6034211dc"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","6ae237eb50ddfee7847114bacf618050"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","f5bd42d1317ead3fe8b5b24a3c6df5b7"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","63127c8626bc466127da6c9d5efb6db4"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","33190dd05e0ae90902491df52199ff78"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","8fda5d9ce869cb1247896d1e1cddb561"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","e4c80eed7d6a1b2bda957aba575f93d8"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","ba643fbbb2c927457c5de1462204b6cc"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","b54185f78d11bbd544527f5cd176f9d6"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","a0a6829ff8c03c56395f157f961ece0c"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","fc0759e3a781b2f0ba1c0c19860c733c"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","974c0c2177e0dcc58498604a2d3a82a8"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","a114af319ab00c3bf39d83f30f97efc6"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","958eaddb79f452dae0e868afa2213570"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","3523ef93b50792db2ed27d5917d46f74"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","4f2a9f27d0ba625dd248245aa9477966"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","abc74b573b1e602745b96312e47c7cfe"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","d96145e4de58a52861f39e222e3d9f6a"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","74d279a5bf0bae5a283e8fe4a750e026"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","feab7588ffbee6749aed399a3dbbc98d"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","bfc8914315bac1a4a1c4c8e8e31fccb5"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","d3cfba9cdabc14d98139c87eb6de91c1"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","f290fe115f34950b15704b7708da5993"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","0e05d18b68a9dfa983c947d3fd33f48f"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","6c9466857c4d4467b7b06334b4b8f4c3"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","24c6bf607c2615a107b7a7f9aed7b55d"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","a83994d916c1e479ae5bb3d50b4b8b90"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","46ba3dbb25aa441b0ebd0c7c6af787ab"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","d7a3f1ac88b32c77b0a6581c6ebf5c9b"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","17b6f9672beb8b55881b741216e560c1"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","d8f212162852c231a9d8816abee800cb"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","841afb4ee2aa2b8dfbc5ba451f3e7dc8"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","0d3c5fda861a6a0d7307400fc119394b"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","d56e60c8ca86c476f92d981e167b2ed0"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","12cda6e3752a837c1fb2a2c1eba540cc"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","ba8365a1fc11278068ade48910cb69ea"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","44cc04b5522b8bf68692f70ea9eb429d"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","de868e26403b65530c1810b167aad58c"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","122889a5d45c512b7fcd333b9c7f7943"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","b46552c7a1d850d312fa8dda31ff2532"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","209c581b46e3eb1459162729c942b78a"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","1e2a200b5c1c0e9c976ba29f7b7544be"],["/2022/08/17/前端/jQuery/index.html","8b542ae8c37ed2cc45bf38f41958ab3e"],["/2022/08/19/前端/JavaScript/index.html","baf16124936385b1ed86206324b4d2c6"],["/2022/08/22/前端/Ajax/index.html","0e01d2d630eb4112991f5f52bf1950e6"],["/2022/08/23/前端/Promise/index.html","c295c2fab6af9efd4f6b5333fac7b55a"],["/2022/08/24/前端/Axios/index.html","11fefed267831ab51b7098fe20832829"],["/2022/08/25/前端/H5本地存储/index.html","76566dfbc455aba0d8ca7d6c05199adb"],["/2022/08/26/前端/mock/index.html","d32e8634294468909668abcd7396a813"],["/2022/08/31/前端/vue/VueJs/index.html","3eee68fbc677b3c9b63a718687a00633"],["/2022/09/01/前端/vue/vue组件化/index.html","e6c3f01a69956e30e57d5634fe792391"],["/2022/09/04/前端/vue/VueCLI/index.html","89aafaeee97d08acb656a4664d53c61c"],["/2022/09/07/前端/vue/vue实现动画/index.html","9cae4138078163379905b254032f617e"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","9d89ab5ffbdf87245c263f744828e981"],["/2022/09/10/前端/vue/Vue异步请求/index.html","daf3cddaf232626aee32e50b7a6e28f6"],["/2022/09/11/前端/vue/vue-Router/index.html","feeeb20a79fa30b895f1fc5655789da9"],["/2022/09/13/前端/vue/Vuex/index.html","9ed1df19cf6696e42601f41889eeabb4"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","7463d05b880a095c9a81b1078ccb31cc"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","d0be78d622a42625f0ffb9af746a2f1a"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","78fd3f1b15ebd01b5228c03d5f00e4f0"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","74ebd8f9c580496ac66c480507c664ef"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","a04b1dd3a10d3bb9a48bd47e99068f75"],["/2022/09/28/DevOps/Linux/Linux/index.html","cf1bdcfebcb1dec62f1bd6e017a4914d"],["/2022/10/02/中间件/Redis/redis基础/index.html","47ba66db9039e69bc3f8c06dacb2fef7"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","bc86819037e46974659cc1c5fcfe6329"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","53eeac0f54334497bf2ee1966aecc9c8"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","67e28162dc13e4e17dbd9e2e361c38a0"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","a1c00715d6d91fb41b71fc37e209edd7"],["/2022/10/17/中间件/Redis/Redis集群/index.html","6c10051f40015a71041bf582273efd0f"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","83fc9f2bea972420b32929182f662a3a"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","9bec478a38dbda258effdaea08ff99eb"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","7bb20d5032977e61d4e6befedd75d7ec"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","cd3fb06f7c85316d442227863bf0a85f"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","994dfed175ca33549ec66ec6e61987e4"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","05f3ec79b9926b213935123b0d981464"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","b3bd2d2286d50087697477c892b210b6"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","6ec44234b3f3c0b88564d252a5e99ce8"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","c372ebad9d0d10339131cf376892e407"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","e26a235a34d63695c1f2ef762b1da83f"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","40966adb8ac04a2ef655b799e120953e"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","3ceb69e1edccae6943bce0ff3af02c75"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","199cb5c656fbf418e841eb7241ad62c0"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","18c4a15836d26e5902110d78f0008853"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","a0af8c90009f45a1991bc78de081660d"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","88459a7e10c586eaf5c9d829e35a7fa6"],["/2023/03/10/DevOps/CICD/CICD/index.html","3b16471a7b4a00a6a15569e71497a968"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","c3d9fcd1f39aeb3cf20d666e06735b3f"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","b6fa229e24e34ebdbefef0cad10db404"],["/2023/03/13/Java/NIO/NIO/index.html","8a7309461d99b3ac2a9455df0db961ed"],["/2023/03/14/Java/NIO/Netty/index.html","a0380452c9ff1a3d6294ed429a9d79a5"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","ecc06313e3fe93fbdc2dd29d761c4890"],["/2023/03/17/系统设计/分布式系统认证/index.html","3d6841df3e92ba5bc5ed69b02608a9fe"],["/2023/03/19/Java/JVM/JVM概述/index.html","d01df7e7d94eedc552f472613aa4fad7"],["/2023/03/23/Java/JVM/类的加载过程/index.html","bbf282e71b9f25d1fa92ae735c511c47"],["/2023/03/28/Java/JVM/对象的实例化/index.html","d949cbb15ea27c694d67fdedbd9c70c7"],["/2023/04/01/Java/JVM/运行时数据区/index.html","b757c0efbc8f43b0a1ec3de75a76b9a7"],["/2023/04/04/Java/JVM/执行引擎/index.html","fed4b09e9dcd02441be8492cf29b2ec7"],["/2023/04/06/Java/JVM/对象引用/index.html","34fd50381fd61763eaac897aaadc1674"],["/2023/04/09/Java/JVM/垃圾回收/index.html","7d6660eea7aadb4957510dfdc7a5ea10"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","56c2021cd5e83d0f324e265088791b1d"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","c4782011e1e1a2f5c666f1ac26994469"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","5cd7199a489bd4a31ca4733c3e1be087"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","b7b4dee157d79b4be4c3bc647c2ddd4c"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","37c11b597e23b4082bb6f27d323c9fc9"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","d633b1a856c9113ca828328f8f294573"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","65e7d7098a56fba05f3bbf39bc113d38"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","1fb4bacd9847741c6bbf8f013bfc3557"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","29ee4c8d7b4795730eb7dadc50cf9ec7"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","f1bac357af890b35305f3fec499cf7c2"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","96594ca3a01bfe66ad97a3b35ca30b81"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","a12e1e5966a3717b10265704ac1d5e69"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","73f4e71c767a07361a8557bbc6727589"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","fa0c579c24ccb66d6be44dbb052d7855"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","4dec0227262d34cd252c35cbad3469e2"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","31753067eaaf293130d140cefc9baab2"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","3fe739ab8a282d2bc3700bc4af2261d8"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","cf6fe475fc042fc7e047c7800c7877e2"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","ad4674e2085ced86cff1329ff7df8fb2"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","c0396463828518ea6299b9cbcfb7dbdc"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","2943b7ce87b33fbfd48457cfb819b56e"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","1a86e2eafe9953cf84f33161356c2b4e"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","292d615f6d17a4aa7f0d5302f3d15a85"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","e588427ac13c4f39a5cec13db11bf10c"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","28b2f5b73ead3bdb3540bc06c8704443"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","e3fb05be38ad3a23b8e2d7626edf8110"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","15c17e004429643f8a4acbc783b92eee"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","b198d9856faefe3e9a7029576f18d26b"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","a0240d7c2bc59a0db7922484ed47af25"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","44a275775eb7cabc071c549c5811130c"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","77c7ba5812200ef99faa07ef1ff9259b"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","ef8e2d26c51a6f1912947ae4c741817b"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","e89ee928b08e3dc3ea9cc97bf25747e0"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","39edd91758344348a9faf85afa7331f8"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","1ceedbf88f16276e70d87e0d5de2143b"],["/404.html","789ae9437542319ef4ddc4663dccf278"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","051f244caf2a2e884e615993b39b162d"],["/archives/2021/02/index.html","707eeb26df089671aec959b1a6c56609"],["/archives/2021/03/index.html","7e9bb5e988259d9520ee0431231d88ec"],["/archives/2021/03/page/2/index.html","5cbf31295130bebea171c376daa9a6da"],["/archives/2021/03/page/3/index.html","2fc63b9b8687b2b378a39b2f6d7bde9b"],["/archives/2021/04/index.html","8d8e4818f34c43ced777da3fbeb279c2"],["/archives/2021/04/page/2/index.html","37547327a640ba78fa69517e14515508"],["/archives/2021/05/index.html","b6af1acf5f17f2688686cfceb3d9cf47"],["/archives/2021/index.html","04b138371baef2579c767cefaf5877f1"],["/archives/2021/page/2/index.html","f3072d1fa9d7e2f0c7294f4e490dece2"],["/archives/2021/page/3/index.html","043726f522c9c7859f22bd098a2f135f"],["/archives/2021/page/4/index.html","e5f0e4be7e9b81e4812862a3cab162a8"],["/archives/2021/page/5/index.html","a28a8d488b93789687b508e3a477bc24"],["/archives/2021/page/6/index.html","1c50f9265aef81743b19f2904e24035f"],["/archives/2021/page/7/index.html","404a936280d202924ff0e0b24a471055"],["/archives/2022/01/index.html","cf8796e6d07d52757d2895a469bfeaa9"],["/archives/2022/04/index.html","5ff0d876a0f3d0ea94c4cee244d1ff79"],["/archives/2022/08/index.html","25987d65514bbdd965ff4b08040b8a84"],["/archives/2022/09/index.html","05da369f0172b54125f738615574132a"],["/archives/2022/09/page/2/index.html","ae629c5f47f12fad40628cefa4b79472"],["/archives/2022/10/index.html","2afffe174bf2c9164e4097cfab603462"],["/archives/2022/11/index.html","e021b7b8ce5a1f1c02105874a8116e1a"],["/archives/2022/12/index.html","4895741a9da7300d1107c480d53cd836"],["/archives/2022/index.html","61e4c4e9ed33ddc97476cc701702306b"],["/archives/2022/page/2/index.html","57d0df5fb06b7049f6a357dbd50f1bac"],["/archives/2022/page/3/index.html","4c85cabc341c2dc20a637b5b1870add6"],["/archives/2022/page/4/index.html","dc157c376818e7be8e40889a03835ece"],["/archives/2022/page/5/index.html","e392a18bce693cfce5745bb21a6c1f60"],["/archives/2023/01/index.html","708443709bc9e915d6e197ce7f6f7075"],["/archives/2023/02/index.html","a20286152554de4ab1c70f30b06deecc"],["/archives/2023/03/index.html","eac354a511c792520c0bf1b94ec4cb95"],["/archives/2023/04/index.html","1745702fa7b597985b771dc71f900f95"],["/archives/2023/04/page/2/index.html","08caf8fe0003b3d393189d98f071d996"],["/archives/2023/05/index.html","672544cbd700632a8ff5ac58bba9b192"],["/archives/2023/06/index.html","aca8480ce7c572e391e6a9a98711e503"],["/archives/2023/06/page/2/index.html","d482aa952817b7e1a78d654530cdd17f"],["/archives/2023/07/index.html","5c94ff3eddec0bef9a4f351110692d11"],["/archives/2023/index.html","e045a374f51030f17b256992f984ddda"],["/archives/2023/page/2/index.html","63ba16f0f6c7ae2b7b88dd17adeb38a0"],["/archives/2023/page/3/index.html","d72f7bfa7ae9f5d94f940fb93bc9b100"],["/archives/2023/page/4/index.html","1bdde8f6dde1b4871f1f82b155275251"],["/archives/2023/page/5/index.html","65e86e660d69cd7a018abe59b327d421"],["/archives/2023/page/6/index.html","23c647bf176d691cb239398c43bf1c48"],["/archives/index.html","f570fa63f29f68b65b7f80acee3d564b"],["/archives/page/10/index.html","f010bbbf53ba1537b433a25c0fc7a4bd"],["/archives/page/11/index.html","04ccbc74eaf453d435b1b7e3f967dc33"],["/archives/page/12/index.html","049d9e46987259205c2b02a619cb9a77"],["/archives/page/13/index.html","1c6e90dfde6649eff43b1dd734dd4936"],["/archives/page/14/index.html","365aa3b9d63e0669c97a2bb6f6a18543"],["/archives/page/15/index.html","3d413c2152f3c8bc7aca3c555353224a"],["/archives/page/16/index.html","2567bb325d762e9ec236a6ef0ee57c96"],["/archives/page/2/index.html","32a23984f38231442194fe0a5d9c83d8"],["/archives/page/3/index.html","dc1ead0a990b6fdd66f9ad795811c898"],["/archives/page/4/index.html","bea00c74f171b3dd8a69470cac255471"],["/archives/page/5/index.html","c25c9c555d6a4a4e5dc3cd6f363d3fb7"],["/archives/page/6/index.html","743c0f2c27c15bd3ea8962891fcc04c2"],["/archives/page/7/index.html","210d1518dcb75220d08449a008fc5040"],["/archives/page/8/index.html","14721ac9485a1d5d9b3f3ff907112863"],["/archives/page/9/index.html","747bdb32ce80acf9acc8ac5f82f8f365"],["/categories/Devops/CICD/index.html","f040462922182fb73d7fca5cef1d2e9b"],["/categories/Devops/Linux/index.html","fbb88146677eeeae01b6848eae90a009"],["/categories/Devops/index.html","66b6b16aae430da8456553f1b00a8797"],["/categories/Java/JVM/index.html","e93fd199cb12fe0110711d5c0ccce294"],["/categories/Java/NIO/Netty/index.html","7a1ae2b9888a4e31164c4799cb22daf4"],["/categories/Java/NIO/index.html","d9434e030c76b479225e37270f168198"],["/categories/Java/NIO/原生NIO/index.html","60a2b29f2fa2f25eae05ed4a22f13ced"],["/categories/Java/NIO/文件操作工具类/index.html","4dd5b54284996676edbb0767bfbfa983"],["/categories/Java/index.html","fbadd1a886cf8467139939cecdba0560"],["/categories/Java/page/2/index.html","00112783389ca8bebb6b4633e9956fb8"],["/categories/Java/学习路线/index.html","78ee4a7476769574738b8b8cb5a53d23"],["/categories/Spring全家桶/Spring-Security/index.html","57b6110b7964ba972ef089aae6f954d7"],["/categories/Spring全家桶/Spring/index.html","1ffc14c346ad7b522e242fef3690db0b"],["/categories/Spring全家桶/SpringBoot/index.html","fce251222d2f699b9689caf12a52ce0b"],["/categories/Spring全家桶/SpringCloud/index.html","5695e1be3cfb8e8358a431d43e614b15"],["/categories/Spring全家桶/SpringMVC/index.html","735c4330404ec82e2468c042b6ae2634"],["/categories/Spring全家桶/index.html","2d9312e9405b9d2acf42da04fbb80096"],["/categories/Spring全家桶/page/2/index.html","d8060a4be3f35c73b7d2ea893f7e68d1"],["/categories/index.html","4aa362ca50e394423e3812937b0c8705"],["/categories/中间件/ElasticSearch/index.html","e1a1f976ecd509f2b906cbdcca00a539"],["/categories/中间件/Redis/index.html","b01b51106bd0083a5cc2c79aaae2604c"],["/categories/中间件/index.html","8c8a70b2295cf8ec5d47a973d68a673d"],["/categories/中间件/page/2/index.html","f181f4fa4aad9f29758d7c7dc6e006f4"],["/categories/中间件/消息队列/RabbitMQ/index.html","ebbb09e5dcc473ae6857262bee5669a7"],["/categories/中间件/消息队列/index.html","2c0f174e0a0fdd9e1eb2d8329cf9f853"],["/categories/前端/Mock/index.html","7dabf9939eba07ab7eb133b8ec6e01b1"],["/categories/前端/Promise/index.html","c0bbf2af185a91e52158dae052b74713"],["/categories/前端/Vue/index.html","e4ae755be57ba015b6e158fcaad503cf"],["/categories/前端/index.html","08db4be97b5bbfee84906c7091fe6390"],["/categories/前端/jQuery/index.html","2de9ec88244258e4d8661ea07ec9bdf2"],["/categories/前端/page/2/index.html","0b69051acfe443e49bce972bfb060bb0"],["/categories/前端/原生基础/index.html","9f2946ccfa7505c67ef73103d0c3d580"],["/categories/前端/异步通信/index.html","f326d5aae3b681af88430bc89ede8b50"],["/categories/工具使用/Git/index.html","f968da42595f638b199437c44edda591"],["/categories/工具使用/index.html","afdbc5ddb6ec8a5f61efa97126c0ece7"],["/categories/工具使用/markdown/index.html","646920ccf66afe9957d16d8be46a4880"],["/categories/工具的使用/Docker/index.html","b4bfc471f82e9569722fb3b4100d7184"],["/categories/工具的使用/Nginx/index.html","02fc15e40a5404b7bbb4376c26a66564"],["/categories/工具的使用/Swagger/index.html","939599d9cc7ca5476eecb293fa0c79fe"],["/categories/工具的使用/index.html","88df23607bc6a7bcc9ada20eaa8e17ce"],["/categories/工具的使用/博客搭建/index.html","2aa5f62c9f942c1a2ec07e29f7e6d817"],["/categories/数据库/MongoDB/index.html","8ca1031c68d1dad3c5f8d62eee19ed7d"],["/categories/数据库/MySQL/index.html","9d60c3f4b4ba263d594b896ba53bffe8"],["/categories/数据库/MySQL/page/2/index.html","90fba00e918871eb097b37145a91f58a"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","0cf633fa30ac310dc5d0d33305ae27c6"],["/categories/数据库/ORM持久层框架/index.html","57c752a42a828018f51d68bfd8edbcc6"],["/categories/数据库/index.html","ef3b2e4e81691af1891b0f9763013ccc"],["/categories/数据库/page/2/index.html","9f59d2955b8c938abd805459e21108ed"],["/categories/系统设计/index.html","02543c446c7b3e95a920143cdefff1f2"],["/categories/系统设计/page/2/index.html","3e0709361f50f9d11fe8ad2f1d300709"],["/categories/系统设计/分布式权限认证/index.html","4cefd858c4f4e713ca46ba7409c828b7"],["/categories/系统设计/设计模式/index.html","2ff53cf16078bd8d4d3c6939f56dea29"],["/categories/系统设计/设计模式/page/2/index.html","b946649e7be7d6dec70a57f2b36e2fe0"],["/categories/计算机基础/index.html","d6306ed2d2382f80e997609f7560b90b"],["/categories/计算机基础/page/2/index.html","74de07060dde967425034e11a398e2b9"],["/categories/计算机基础/page/3/index.html","bae7809c214090ced63b8f5452f0fdf7"],["/categories/计算机基础/page/4/index.html","42aeba971b3812b8c91982a78d2fc7b2"],["/categories/计算机基础/page/5/index.html","613ee87095764346bfa7063a6dd746af"],["/categories/计算机基础/page/6/index.html","d9726a13849b8ef4e2181d623d82ba48"],["/categories/计算机基础/操作系统/index.html","ed55ba4889a5e1787e7a83fd83c04569"],["/categories/计算机基础/数据结构与算法/index.html","95f5033de5010b53bf977d54f06ff34d"],["/categories/计算机基础/数据结构与算法/page/2/index.html","e89cb608a330903d4ddb2c08cabd8f4c"],["/categories/计算机基础/数据结构与算法/page/3/index.html","8e6714df2da09344f0745eed989b11b5"],["/categories/计算机基础/数据结构与算法/page/4/index.html","566c4c4fabb398d104200ea62263d257"],["/categories/计算机基础/数据结构与算法/page/5/index.html","63e60643942f2780286c96d6c90a71ca"],["/categories/计算机基础/计算机网络/index.html","f071fd4642fd18f6a039439868945c50"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","3733b5e0b27e52aa6c4d55ced346c8c8"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","f4f0f990e531fa2607dd750ddeb1e41b"],["/messageboard/index.html","4f5ef9e1be2c5074707131f1819e903d"],["/page/10/index.html","4f430da2b096e8099e4481bdd2ef6542"],["/page/11/index.html","e713ee0b6fff257f44a459e5e0d0e019"],["/page/12/index.html","eddf2abb966712ec3b2045e5820040e7"],["/page/13/index.html","338e4cb53c052abbd9249e1f94e3b571"],["/page/14/index.html","e0d8f4cb3c408bcaf251ba607da5729f"],["/page/15/index.html","6517223d61210c94584315ce447e0177"],["/page/16/index.html","e040fa9a2c2e3267cc4fa24b1955d2c7"],["/page/2/index.html","9b63f7249700f922f11bc26be10fef4a"],["/page/3/index.html","92c1c314b40cf4f2f9dc034775b17d06"],["/page/4/index.html","3ae0eda34f2b808d5bdccb08470da288"],["/page/5/index.html","f269126b82da9d5bf569741100d64ec2"],["/page/6/index.html","dd01a18e2168d51acce9089c29bdf858"],["/page/7/index.html","503de423abac6f617dd15af22e751989"],["/page/8/index.html","280dc1e6a8e0342882364a005a274728"],["/page/9/index.html","61503ed96478e5350f08cf0a0e344771"],["/sw-register.js","05d7bf51db9c0bcef29f2cc1ce0cbd7c"],["/tags/Ajax/index.html","2428a895b7aaae9de2fd3c8297a25d23"],["/tags/Axios/index.html","26a79e3cfbb22702cfb518b130369433"],["/tags/CICD/index.html","76cd3c5c22a4951a55af180705561aaf"],["/tags/Docker/index.html","af088dec484484f49d421dc979eab1d2"],["/tags/ELK/index.html","38efcde84ca55055035dbc709f867b6f"],["/tags/ElasticSearch/index.html","cdc5c7e9a414df1f7214ee705a28a43d"],["/tags/Git/index.html","05f80ede06da2d4bb8608cdabee98b83"],["/tags/H5/index.html","5d43011d49ab3e711f7c67f20a4ab67e"],["/tags/JVM/index.html","d4ef81123cd077de5cff515eb49ac44f"],["/tags/JVM内存模型/index.html","58428e06ec204a0cb426e2792fd0dc9a"],["/tags/JVM执行引擎/index.html","0d1d459075d4169c366e8b7de609ba61"],["/tags/JavaScript/index.html","ce7e11a7da7fd7e217114523a09e2877"],["/tags/Kibana/index.html","2b679c61a230612f37726ac75383a233"],["/tags/LeetCode/index.html","7e193b81745f71740f8c6a16922ace72"],["/tags/LeetCode/page/2/index.html","34cdd382389b84fb6054db367271b2a5"],["/tags/LeetCode/page/3/index.html","e2049634c4c0b0e298d655223d878465"],["/tags/Linux/index.html","12b26edf6b82e3a36fa5609c950c0b63"],["/tags/Logstash/index.html","01f1e557107e9e583353eb940f7c6f6e"],["/tags/Mock/index.html","b800b60cf2e6c5a296374420165f5c6c"],["/tags/MongoDB/index.html","dfaea42992dae4385f61b9205cd08291"],["/tags/MySQL-事务/index.html","55fb04734e84c51d66efff2d78ee6f77"],["/tags/MySQL-数据类型/index.html","69a2dd048112261f001e14b1877a513b"],["/tags/MySQL-日志/index.html","8266329d1b134cda9191df87af600f9a"],["/tags/MySQL-索引/index.html","f98756e13a4b99d5f4736bc0d233d401"],["/tags/MySQL-锁/index.html","adf1795383b91185474ea2bd92917718"],["/tags/MySQL/index.html","57c500a4ec836c67d818c96bf477a78d"],["/tags/Mybatis/index.html","8e431ea176b13dab6ceac76993a2d244"],["/tags/MybatisPlus/index.html","84ae9709cbec3b1b2ada0793f6ef429d"],["/tags/NIO/index.html","9fba495c7fd9416d0edc5d6ebb47be06"],["/tags/Netty/index.html","3a6226d04c8e828e504decb0beea3e6a"],["/tags/Nginx/index.html","f166c20c85f7a2feb8bed6048d1d336c"],["/tags/Promise/index.html","84aa487dc9c010cc13780b86993476b2"],["/tags/RabbitMQ/index.html","7b44d8dd7ef4e52c69263c6be3f40d1c"],["/tags/Redis/index.html","e188e5287cb36bb89252a68a65957cf7"],["/tags/SSM/index.html","35f1b40229fdc8a1682c2cd5f814aa28"],["/tags/Spring-Security/index.html","daee362dcb9f32cb28e78d6829fab1d1"],["/tags/Spring/index.html","f2a31e532b6c0b944ddd2a2547fcdcc9"],["/tags/SpringBoot/index.html","1faba2d10c9eccb91f062b4bf46febb7"],["/tags/SpringCloud/index.html","0457ae726450507d165edab3cde02ece"],["/tags/SpringMVC/index.html","7c8d852a00a83ea840859aeff6cd914a"],["/tags/Swagger/index.html","ab63d0d87ee3e368b983d1855f52b63c"],["/tags/hexo/index.html","805fefb9f6d10e6568f2216d35f55d99"],["/tags/index.html","580f0ac0a5b88b87c1ac12e60dcb3885"],["/tags/jQuery/index.html","729c2f9d231ff5174a7de61a6ef8dd50"],["/tags/java/index.html","6fdd52446d661c8422c7986e86226bc4"],["/tags/markdown/index.html","35f963e78d3d7519f1847e3eb24f65ad"],["/tags/noSQL/index.html","99b8f5d4acaf87635119a19418cd1a79"],["/tags/typora/index.html","ff32f265eceb8eb7a53d30f2767c52ff"],["/tags/vue/index.html","32c68777fe2a96bdea2965e65244aa61"],["/tags/享元模式/index.html","bc07bc880b047567d94b71d7b5b54593"],["/tags/代理模式/index.html","42a0eb0439d42ab746cc8992b16cd740"],["/tags/内存管理/index.html","163d5eddea498f88097ca1ada2fa708e"],["/tags/分布式/index.html","a601026992cae7a8ae992775c1eacd04"],["/tags/分布式系统/index.html","81ef2fea9ed6c6a1a6888918f71da5a1"],["/tags/前端/index.html","e54d39897583a0547d706af4fa31a658"],["/tags/前端/page/2/index.html","6abe0863efb3ec4c355d6d20d80d91a1"],["/tags/博客/index.html","33b6cd896f5c362a6f524298f1688788"],["/tags/后端/index.html","533794df2acfa33a034639680dee0df7"],["/tags/外观模式/index.html","a4cf3f25d6aa3d2e2e0d770956f14e44"],["/tags/容器技术/index.html","411b5f3859fc5182e3300dd443774b13"],["/tags/工厂方法/index.html","31c978fd02ddbf56899ffe357d858587"],["/tags/微服务/index.html","aa2e8b58d3080abfed695595801f3e6e"],["/tags/抽象工厂/index.html","66992f976a9a02e80895d98a4010bcb1"],["/tags/持续集成持续部署/index.html","cc03fc9e904b17b3b9d358d2121b29c7"],["/tags/搜索引擎/index.html","0fca6691ba49bfa1e88ad9bcfafee7e1"],["/tags/操作系统/index.html","a322c2a5f8b042878d13cbe3ac437e7b"],["/tags/数据库/index.html","92313ece180868d0fdac1bea0b70d58c"],["/tags/数据库/page/2/index.html","825afa71e115f796b197da07509267df"],["/tags/数据结构与算法/index.html","be8dc030e1a3057360567209dfe16b36"],["/tags/数据结构与算法/page/2/index.html","cda43f26b5c63ed01459e3cf919961fc"],["/tags/文件操作/index.html","461c8d92ce17e15131ea552d2e5fc81c"],["/tags/日志/index.html","3397f8dfafbb9900a25826a17de4588e"],["/tags/服务器/index.html","906da45d7e7c4d651e17f4d7146918a4"],["/tags/权限认证/index.html","8c66b32120a9f8925f61533e245876dc"],["/tags/桥接模式/index.html","81816be2d719beed478cbc68dd955f7e"],["/tags/模板方法模式/index.html","8e3fd17b4e9d54c756d7c4e3da96974e"],["/tags/死锁/index.html","db9b65adb75741cb4ae5eb8de8d62a5c"],["/tags/消息队列/index.html","3cae37d20fed050f3222f528aa8fa851"],["/tags/版本控制/index.html","24ddb046aab616a5bae29032e24710f9"],["/tags/策略模式/index.html","6b45d4fc95a4714bf6cc2924d3d4fe8b"],["/tags/简单工厂/index.html","4f3830958159e6495131f9aa4c8d8e16"],["/tags/算法/index.html","d2ab216b8c1f5d547b12003a4b1ca313"],["/tags/组件化/index.html","5a68a01741b6da686b9123e0c01c5818"],["/tags/缓存/index.html","461af31b7e48eed0e18b1c2155c87fd0"],["/tags/观察者模式/index.html","795544ce41f079516d91be41e3c53fba"],["/tags/计算机网络/index.html","e33462956d9df478cf5ea8f6779c5d43"],["/tags/设计模式/index.html","bf9286f712e023eed0b5aa2761d52ba6"],["/tags/设计模式/page/2/index.html","4b3c7b67ebe35945dfd9902756a4177c"],["/tags/进程管理/index.html","b6fece80f8340d7940aca04e33bf2d7c"],["/tags/适配器模式/index.html","d471262b77cd2517765357f0c829fdc4"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
