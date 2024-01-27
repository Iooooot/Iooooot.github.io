/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","85baa73ccc48dc9339085b4fc38eda21"],["/2021/02/22/工具的使用/博客的搭建/index.html","63af1be4c6bb50105d449ced6cb4adc8"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","e2e73a02e5b7a8adade562ba58dfc236"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","f0bfc93f50b6f3242ff26cc77d91d3e5"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","35bc058196997009baf95be6f89fdeff"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","2d71a9904d4521f2dddb969421acaa6d"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","7631d6574f8e21cbb12a3fc884a3906d"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","977c7b5e5fee5c2e8a2c41e67c6865d0"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","6ff875222927f5e7d850ed226db088d6"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","f6e84e170b5e75dc2be6ccd39599a82c"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","9c18a4ca1c6b13cef3b97092a5680b95"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","2f65d2784591c017aef97be1fe6e50f1"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","6b578b09d463bdf106c3b5f4d8e4fcf2"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","68b8c9a4e288f2600943be7a79e9f148"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","823d44d2e8ca29ae3c4d659d20a62701"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","5a739f171aa9655b3f4be602b6b05265"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","dc3196129d25facd944279b4b299773d"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","195dd2f5cb9e566b4281bc4ffc5e7ab9"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","8bfe4f569e53e146caa2469fd6e5ea46"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","e84ab798ddf6de9a90be709b414c8ed6"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","3f7845f9b743a7718e35443f80c86d25"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","8befca10f7084dad3a478f5d32945b2f"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","232fd819c41b412bc94e593d8326b9aa"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","841b63f0e477bfa57c2912a7daba0a15"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","8a8f7163f20272e8a279d9ad921982bf"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","d0b6ddc284941a7ada27422b95164135"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","eaef9381bffeea033271ada8188c478d"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","65928994695d9f91023161320400bd59"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","5e43730bc205102ada74c41a4aa845b8"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","a639723d843c555da0ada30b84b23517"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","37330951a769189857f4aa5139c4d4b2"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","3b99762179a91927a2266cdca59bb491"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","f81645e37b905709e8588971ee8601d6"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","a04656a8bfdd929ab9941a27fd0a0438"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","318aba664ce57486f9446af298b44c5a"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","63d1182ac90f5d228a7eeb1699cf9d46"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","e276b68e830522231d4069c0b1f77e34"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","1c3e975673b0033c13ffbff789da0b5f"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","bdd982daf5de29ab9653dfd3bc9d3756"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","5db5c0a966cf0b570e214a02751e10d0"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","a8b9f9d868cd832babc9e8ce2e7fded3"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","bebc3cb22bb049d155b9272980eb8826"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","44d9c2a32c5a58713c357f229d9cdf71"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","14c9dec02f52ed0abb4a3d4a79825b69"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","6e8180ac3efd00b3535d7bbca8e641b7"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","87bd51be156f82aa06128a42297c6ac4"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","e401c7b47dcd4544ef5464c44dfc649c"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","c5ae3e0c7871998d7acef23d2e73c662"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","9cc2761a1a7b4bc1bf0384e7bd32ed5c"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","a454a1090e95a8649814f3363e285436"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","0524bcfed6a862a9d5929e4fa12f4608"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","94827675f5a598c4cf8e564d3ee90658"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","9684b1f380e01245bbaffa35edd6eecd"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","d15868177c58d16f816d7c8e74c7650a"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","a488bed097083727b9025b3ac2360d7d"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","9635ae5446e59d63091cc512752c5c30"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","63c80cded72a291629bcaefa1fc339b0"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","4b4ebc42e59559929381b65e5fdf4733"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","8690671f7c1d32bc11e2ad4064a00c2e"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","dd5f0ccead3348b521c0c1881f43177b"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","05aa860ad52e797042c135eff17fa519"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","b005c93636f1536dcb5fb1d2aa22aea7"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","ae794bf8abb4d937320dca93b8c8983f"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","b3869f942c0abd8fa31703c87940c34d"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","01a09f9fd0977559616ab71dcf0c0943"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","fa944bfb8ea2f17bf1745ab2e65be0df"],["/2022/08/17/前端/jQuery/index.html","6c3ed8211caf84e0f9f857dbe3dc599e"],["/2022/08/19/前端/JavaScript/index.html","92f29ee5b5c637bb69fdef270f99d638"],["/2022/08/22/前端/Ajax/index.html","89fd7d15713404d5d6688157e8934005"],["/2022/08/23/前端/Promise/index.html","553ece7bd096c180bd71347afc18154d"],["/2022/08/24/前端/Axios/index.html","4d6710ff164e1e16cf470a174a44f545"],["/2022/08/25/前端/H5本地存储/index.html","21889931d9ce2eb8b0ddce5bffd0b167"],["/2022/08/26/前端/mock/index.html","a4d76197caad129ccb26f3dffa825f6c"],["/2022/08/31/前端/vue/VueJs/index.html","ad0de8a1359fd21c8cf5174f34b862b7"],["/2022/09/01/前端/vue/vue组件化/index.html","071e00135ee17bbf5bbc55c5ccb538b8"],["/2022/09/04/前端/vue/VueCLI/index.html","b6bdef9fc989f5d490ca2ba47df57e9d"],["/2022/09/07/前端/vue/vue实现动画/index.html","b598b91668228182f95f1e59f222cb6c"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","85dff8e5defaa857fb4054d6f7557d87"],["/2022/09/10/前端/vue/Vue异步请求/index.html","3f85111df37dbc7ff111ea17a27f5c7c"],["/2022/09/11/前端/vue/vue-Router/index.html","979112b0846b363ef52e4e85492db830"],["/2022/09/13/前端/vue/Vuex/index.html","ba79add3f4c77637c20d2265887196c6"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","f605c4af1c8ffb9f6be1b441d548d16f"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","88b53999e669a82c0b59738f1324b3a5"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","abe107b5c99b08b2034f63f08b80fa09"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","9c2680fbc4096227af8c997a7411cf62"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","bb8806cb3ac118bec3849926ac8c26ef"],["/2022/09/28/DevOps/Linux/Linux/index.html","0c821327ad3da2cb4d2e71001d4b0cd0"],["/2022/10/02/中间件/Redis/redis基础/index.html","b7e6d6e62977fe5c3e1bf07cd19192a6"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","31e1830bb4dc8fa3cd57f5ea76ac18ef"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","43567cc38f4ee7a708d452763a8696b4"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","095f6e47d8745c9f78ff6ff327c80ba8"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","219b34a697a2743cdf78851cca41a9fd"],["/2022/10/17/中间件/Redis/Redis集群/index.html","b66938b4edbae83d4caf2ef2b01c2648"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","e9acf107cf6d7bc16468979d9336f826"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","52f416909404a42a61ea62421675f77d"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","8503958f8b52e37b40f89310fc43cacd"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","53429c3a484cb080334699c7e422ba1c"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","56182896a2ae7c4a3454c820188fa2bf"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","0df38ece91e68460491633710ff33c98"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","b682c82c2f702f5a403d418f8ad4f9b6"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","15d03cb75605983321deb5751f09f1a8"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","5ec0cdfce47b723416eea1d4346cc4a9"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","d8b313105056d08b9117b1f327c21b00"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","498d64864c347a7f82c167351f8c331c"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","4e4dd275dc2b5fc3a546478fa03d5509"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","2cbd0aa23210eaeb03b536e5a723dfa1"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","1165c11818a30374354cb022a0d19647"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","3e98232e3f0b86438770e61f873f9f07"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","b2619d04dc43fe0dfd7955d37ed9e708"],["/2023/03/10/DevOps/CICD/CICD/index.html","b891de6e680c9d97c1b1f05cd125a8f1"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","f5dba44cba0622d6f98f243f07bc60b2"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","0c8fe6b2ccb86f46f5b5b32dd47b6bd8"],["/2023/03/13/Java/NIO/NIO/index.html","bf50dd3aa92e65f5e3b2a67311ca35fe"],["/2023/03/14/中间件/Netty/Netty/index.html","ddece0f09a56f71922235da8f5e9fd5c"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","654565c117ea9a00f477b78d02a0f343"],["/2023/03/17/系统设计/分布式系统认证/index.html","2419ba5af6d20b4769a46907859b545d"],["/2023/03/19/Java/JVM/JVM概述/index.html","6631f40926af65dba75c50b75b962b53"],["/2023/03/23/Java/JVM/类的加载过程/index.html","1bc4ca71792aac84090a766174509489"],["/2023/03/28/Java/JVM/对象的实例化/index.html","fe1d59c3ec8b23452a41eb645bd5f310"],["/2023/04/01/Java/JVM/运行时数据区/index.html","ce3f93b31a31a1f68c5045ae7781d280"],["/2023/04/04/Java/JVM/执行引擎/index.html","ee89f209856c1781b2dfdae9aafecf45"],["/2023/04/06/Java/JVM/对象引用/index.html","06e3dd937bf1a2ae32aeb2fb09b9da34"],["/2023/04/09/Java/JVM/垃圾回收/index.html","a52b4b9aa0cc6480ea1c07abdba8ced4"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","2481d7ea1d5ca4681c6107b5bcd5d1a7"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","c67398d51cd6782f2ba6ecce4211912f"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","b13526089c8bc9299b868fb55ece460c"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","52d4f16e4b93f728bfcda503d623dad5"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","3f20bc1afac5173211275eb1f655229f"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","485c3d8e29328ad8f05f7e405f0468a8"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","a9ff5257e8a975de4c8bef33085d85bd"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","9540529e8d9308fa651848f6d412bc53"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","09fbd80f47579b61da7c194cd633e1e6"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","b3580b25013f1c8ec889c0783a392b61"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","cd437e14e302d5f6181adce51129f9e5"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","909bfd49e13a3ff83ba48c7c65fd95aa"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","2826f049de8aa2f52496f7bbeb5bb831"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","19265e22ff02ecbd901218806b9d19da"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","f9b73ede55c90ae6360d97e1e6554e1f"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","4a6f6a6fe05259fa0b439e7a4ce4a28a"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","167d4293acf7c14b1595ea65b7af1819"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","43437a5eccf5d66ad577b0ce41b18e40"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","3747958046caf992dada0c5275b03c7f"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","3f63409d1a53276aef50acca5fb34d0e"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","6b08001636b6ed805a33dfe0d8121413"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","33542a4f2f9450a1f8d19251626dadb5"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","36df8413c9cc866a8529f038bf130a72"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","81625755e2b0197fa0a494118a4689f3"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","ce2af48bc09ae003e5ef5db809a3c6e0"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","67c9fbb9a43845588661a1f816958c5e"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","5c1245dd54f279bd75bc26d7934f3060"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","518baeeb60ae7de30a5aa05f6c9f7dd5"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","087d38b92c23262855fe9bd1b542e73f"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","a8ab87bda8af27401442fb5e222782ac"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","f25744cd5d7c55aaaf1bf7a9f40b51c6"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","f06d4eefbe3f164a6206ba358072afb9"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","23dea08e0ee62e6773eff961c99a220a"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","ff6497d09188de634d8e397f1e3b6282"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","d67919137f6279f58b98338f18f7e603"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","5335a44a01b35dad5bc1e425af2c336b"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","2dbdd39496afbd09fb4b77bb052524d9"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","16c8dfe0bfe6c114218a549bde2c7fb4"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","1eac0e5a89880bc4d16adf5e9a7c1e18"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","e6fbc900502e31740f6961a06d44fa3f"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","17af30c4c0768ef420a5808c881964b9"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","258df7b49315c8073f861d3fad7f3acc"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","4b97ebc68e0be7ddacb5a5f8ddb1d7c8"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","b04a0135508170bcf7e5e8b1c16c2706"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","b8371761191cd8fcf4740212f022a551"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","c7e5cc62e2551d6d83d12c465af6edd4"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","b30bff991d39c8fd8f8605b5769aaba7"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","b6dedea4306f50655647b322bef6395d"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","a2cd540ba0dd84cfa2a1bca93905becf"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","206d656afe4feb63f6a70a730bd1b6fb"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","7c464a1d43bf693b557c222f380c978c"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","2c0a1d08e05899adf56e388bc89b0711"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","4e00f2c55631b049c88c573775d6aef7"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","a24c5ee4b17b39f389adbe82f4e933fb"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","a2d3aa64455e488f67317d850c88eb61"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","9dd8e69d4196d8bf765d7c57af2a24a5"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","df3f01eeeac92ccc13ccf33e2b26965d"],["/2023/09/04/中间件/Redis/Redis事务/index.html","56e05e38a6fd5b3a14a743aed6af8a05"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","18952df8f5e44ca1faf5b4e4c5568a21"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","c5bcefb15985bf3317ff89ef0de5d935"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","4f0b4e208db9a121f0e3be3b2d9ca079"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","0bea8b4ae5b7804ed623a1cb055390c0"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","f6d9bcbe87b8386b747593bc080ad251"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","1b77d7aa3acc0d85123ecaa7132b8b69"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","bf41d0909ef638fecf0ab97f25331019"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","259d44bbf13ee3f1d28ccb52669565da"],["/2023/09/22/Java/NIO/零拷贝/index.html","8fe3f9e286cc4fa7bb3072f6de590070"],["/2023/09/24/系统设计/JWT认证/index.html","890d31fc3d3325c726722aec0db428e8"],["/2023/09/26/Java/NIO/Reactor模式/index.html","600e1fce90e17e0799e62fefcb3f76ea"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","b40d2ff3e4dd2474bccf410d7d2aadd3"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","abaf135d2cbe49c094fb9c69e28e6f55"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","8e824b183ed71d0c6b9e99c0f6836b23"],["/2023/10/09/Java/并发编程/共享问题/index.html","c166e07a45587215c30e085eed1b180a"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","45ad1e77b498ce353458182309ccc401"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","84a57ee518b9cd4970b1fafda11f5daa"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","620cb68ea2392295bd73058dafea3835"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","670bef2050d8bc2ed50f2d0c77a862a2"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","f78ec523c39da9b6c5f4ca415ab96857"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","be133fa12ddb62549be1d050b1e3cfdd"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","00b4a97ad8a633291b942a46ae35978d"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","1a0af6e30c2a369c38e42c3965381a98"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","562dbc5f293ea0ad1a320259d5143b23"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","ab62ca758542b0ff3d6fd3479be4523a"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","8ac3b19265f74dfe826c61a83c18bfa0"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","d0dd9364c374cbf47cbec9c8c134b4a6"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","746cf3c1a6e27d56ac19fc906d64d44d"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","e0be701071a114c236e2088566f57747"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","4fd265e25cdb13ceaff80717234e27a5"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","77aae87c10b923267677db93d0c5d69e"],["/2023/12/05/系统设计/开源协议/index.html","ddba7277573b68948345c6764f1818e6"],["/2023/12/09/MockMvc/index.html","37ac89aa99c20541c2f68f8da87c458a"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","c707905bfd9a4722a3377ffdc58a3581"],["/2023/12/19/MySQL读写分离/index.html","9f7fd4549a4541f1784469b8dcbcf725"],["/2023/12/22/MySQL分库分表/index.html","1085eaaea64177d64c0f77d18dce9580"],["/2023/12/27/利用NoSQL优化数据库/index.html","e6e47e02525733e88a09c66d04c9da43"],["/2024/01/06/缓存概述/index.html","accdff0ae03a100dfb9fe271c632bc32"],["/2024/01/11/缓存的读写策略/index.html","b0341e821abf1eee1f748fbd740831f6"],["/2024/01/14/CDN静态资源加速/index.html","908bd6fcdc38f5b6853574df55e652dd"],["/2024/01/18/消息队列延迟问题/index.html","4877b985d93ffaccabef3e073350fbfa"],["/2024/01/22/高并发系统分布式服务方案/index.html","e2760bbd23a594b1b62e38e465706e4d"],["/2024/01/26/dubbo/index.html","883ad7d241207390e17ba4272ff8df92"],["/404.html","458af7fa967468626f1d9fd73a50a1c9"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","a0b87dbce35811819c809900743fde32"],["/archives/2021/02/index.html","6bf5e869d8f54d157d2b078372630c3c"],["/archives/2021/03/index.html","5f81924aa42b99fcecc6b42339d16c7b"],["/archives/2021/03/page/2/index.html","bb7c98b71bab587a1ebaf3041591698c"],["/archives/2021/03/page/3/index.html","e6049925bfd01bda380481a06149d437"],["/archives/2021/04/index.html","b7af39511c3dd6e5507eb4f68e083a1a"],["/archives/2021/04/page/2/index.html","49c13cd13a237ec3985ea8dea1040063"],["/archives/2021/05/index.html","3e7cc231eb0caa0c6c107c1b3b5977c6"],["/archives/2021/index.html","a8df73b7f21cb553e4cdf0779d3738a0"],["/archives/2021/page/2/index.html","74a392ffb0447c0757d86513e5c7834b"],["/archives/2021/page/3/index.html","084fe91e21ee009756094bf44ca9ba79"],["/archives/2021/page/4/index.html","4ca3c74c7673f2d4039ad841654c5aef"],["/archives/2021/page/5/index.html","b3a83b59918ad2edfe1dfe7b57239693"],["/archives/2021/page/6/index.html","f975bdef5b03b21c6c5fe0a5f973055a"],["/archives/2021/page/7/index.html","85fc0601b6fa15de90a6f55c2151d8fa"],["/archives/2022/01/index.html","c79ef394608e0add1bb602cd273040a9"],["/archives/2022/04/index.html","53723ee1aab4103adf362fbc16e4fd88"],["/archives/2022/08/index.html","5bd3174f61e2aefa2cc62384c64f2a48"],["/archives/2022/09/index.html","3f5adb425603933a13773dd26ea11dbd"],["/archives/2022/09/page/2/index.html","48a937b88a0d3d9a578c1d7c7de6b061"],["/archives/2022/10/index.html","f0947924edf4ca0cee413c9bdbf5a277"],["/archives/2022/11/index.html","ee0ef7654858f87509941b5a24ec480b"],["/archives/2022/12/index.html","a02bc2789e315ed624692d33f49e9953"],["/archives/2022/index.html","1739e20b25fce69ec72a8b7afdf50566"],["/archives/2022/page/2/index.html","27460bebea329d6a13633766f276470b"],["/archives/2022/page/3/index.html","925cdea90326dbd39b65560de1c0ebb8"],["/archives/2022/page/4/index.html","2e907023c6cddd6dcf607f784ddaa602"],["/archives/2022/page/5/index.html","f0145d779c6e32c69a86f7edcff7d62a"],["/archives/2023/01/index.html","61b8dab5385a5a74d14fcdb53c724103"],["/archives/2023/02/index.html","81dc9972010c29d80e128a2288e5b874"],["/archives/2023/03/index.html","cf5e4f0ef226b4258ff873f0a9f6b596"],["/archives/2023/04/index.html","28750e404b85fad218a979c968e46215"],["/archives/2023/04/page/2/index.html","4fe7f2667abacc89a1be6c022b78d02b"],["/archives/2023/05/index.html","c27c91da498f31dcc4a20a40b02cfba3"],["/archives/2023/06/index.html","25fd4961b5f3777481bd9b305b3897b4"],["/archives/2023/06/page/2/index.html","c1eef0d64b2eebf672ccbff0685e795a"],["/archives/2023/07/index.html","f1ef68bd8c2c9a98036e14135b91d8e0"],["/archives/2023/07/page/2/index.html","bca92f448da6063f959f4a95763ebfee"],["/archives/2023/08/index.html","4a76d853c256f503891e872e028ec747"],["/archives/2023/08/page/2/index.html","60d183265a098eb4019734f4c0aea282"],["/archives/2023/09/index.html","3e0025fec529350fb02d4805825375ed"],["/archives/2023/09/page/2/index.html","4aa19ffc2b49749a2edbb59d71c71324"],["/archives/2023/10/index.html","bfe2fa1502c38b542a8a948802d3db5a"],["/archives/2023/11/index.html","0206fab487a183bc75e12dd4a7d731a4"],["/archives/2023/12/index.html","beb3488741171f986a69906bc9ab1219"],["/archives/2023/index.html","179ca945e362a1795d2a930e6e22cba1"],["/archives/2023/page/10/index.html","8e18590a4a32c430361400a9c93b70c7"],["/archives/2023/page/11/index.html","26bb39d9d93b01accf2f64fe04707f8b"],["/archives/2023/page/12/index.html","51409882e6a8ce8e7b64d25741594525"],["/archives/2023/page/2/index.html","2561cabbcdf8a608b067dfddb5a791bf"],["/archives/2023/page/3/index.html","59f49310a2982d22e74e80e886ba2523"],["/archives/2023/page/4/index.html","75e7de2dca77000834eb2c2a819985b2"],["/archives/2023/page/5/index.html","33dec48c6a8f299b960c1c58c24768e7"],["/archives/2023/page/6/index.html","d5a0d26de1a01eb0967d12dd54a999a6"],["/archives/2023/page/7/index.html","2a6304c976f2c99227e6b7c4ada9ff05"],["/archives/2023/page/8/index.html","dc6d5461c2fb4d597ba25b8a48660253"],["/archives/2023/page/9/index.html","2a43e31da5b6dfee6592e7d9e772f1c4"],["/archives/2024/01/index.html","fb822224cccfa880229aaee66c27bc5a"],["/archives/2024/index.html","6294e92a94677d487c194f85293e5644"],["/archives/index.html","06fcaa932f2f605673b6f430a54c3eda"],["/archives/page/10/index.html","f4ef62c06f52d83aea6a6f4aaf31ade2"],["/archives/page/11/index.html","e4201070630ee9e29a070901174f59c7"],["/archives/page/12/index.html","217e2d24f47e33d1a4b08d25cb17a7d5"],["/archives/page/13/index.html","b295d3c6c393c20ad4d90b7d57c14776"],["/archives/page/14/index.html","55a278d83d5700cc1d76c034724fd820"],["/archives/page/15/index.html","23ce03a61e82c93f04c6a64a6785cfb7"],["/archives/page/16/index.html","4746eb4d1b9ab9a0528e0c47d26f5a7d"],["/archives/page/17/index.html","f2a189626cda0988f54b79464435c480"],["/archives/page/18/index.html","a7848c28d84c3daed9c3ac96d164c28f"],["/archives/page/19/index.html","1fe331aea648ecab3947b6e231797738"],["/archives/page/2/index.html","b52f8b630620461791c25f1210bd3608"],["/archives/page/20/index.html","59894051a6fad78e09a80df3446a8bd8"],["/archives/page/21/index.html","448617e38ff3dae34c42c78e17ff4f3b"],["/archives/page/22/index.html","db378b76fea2b63d98274b92d2618506"],["/archives/page/23/index.html","4f6a9984ad1ee2df4813b41a053365f0"],["/archives/page/3/index.html","dcf8876317a11b97e5fc929e7d1cebcb"],["/archives/page/4/index.html","1ebb438c23d089a5a7554f81d771c1c1"],["/archives/page/5/index.html","eebb0cb64aec3fc7cec7a60b7bef2f22"],["/archives/page/6/index.html","b49c5da7e6df706838158bc02086914d"],["/archives/page/7/index.html","b1e7d81e0bf7d7e2423c6f861bb1d069"],["/archives/page/8/index.html","fca008c32dcece9523af7f5aa57016e7"],["/archives/page/9/index.html","6dc5b369fa48e6ddd33e2101cdcceafb"],["/categories/Devops/CICD/index.html","d5d4d0a2e16f3decacb7651cae62260e"],["/categories/Devops/Linux/index.html","57e0e5c5bb314d718a8ee3d151433559"],["/categories/Devops/index.html","48d226773e16195d7aa923db5219d12b"],["/categories/Java/JVM/index.html","0b62ad74245c24416279dbfbfe0f26b0"],["/categories/Java/Java基础/index.html","916835565bc587c9a076db00b63ce5d1"],["/categories/Java/NIO/index.html","9bf985125ea30e35d415046fae36f051"],["/categories/Java/NIO/原生NIO/index.html","d22e78a4354fc9e97412e2f76abf49c7"],["/categories/Java/NIO/文件操作工具类/index.html","92acb04e233b373a41df8cf0d28cf680"],["/categories/Java/index.html","0c510a7d4d9f2688e8354209fc5cb306"],["/categories/Java/page/2/index.html","345791bf578e78fd6df3719b6b141897"],["/categories/Java/并发编程/index.html","09af23094e3ab15a05c747f6d0b8176f"],["/categories/Spring全家桶/Spring-Security/index.html","ed6b57cefbc91495ea30eec2b61e0197"],["/categories/Spring全家桶/Spring/index.html","b3b63ec6370f33db8217ad2092322b2d"],["/categories/Spring全家桶/SpringBoot/index.html","ae4055b2010ae40528ba7a738faf71bf"],["/categories/Spring全家桶/SpringCloud/index.html","a1cce06fffdd22d3e0acf1dc9b32521e"],["/categories/Spring全家桶/SpringMVC/index.html","b5d9f4430cb705a436199bb25cc48bfe"],["/categories/Spring全家桶/index.html","9a3d441c9109d43a6206b53e742f4c00"],["/categories/Spring全家桶/page/2/index.html","17e6262c082e50ff74cb9f5e7fa1db35"],["/categories/index.html","8a0c1e94692c065910c9f01ed4b75659"],["/categories/中间件/Dubbo/index.html","365f89a9652281529c356bafe7408515"],["/categories/中间件/ElasticSearch/index.html","d7d03c904a4a6db32374f8e11f985f06"],["/categories/中间件/Netty/index.html","d1882e56c63f6c358409c39f612964db"],["/categories/中间件/Redis/index.html","17c0d6e58e0accbd38ce723d65c187a5"],["/categories/中间件/Redis/page/2/index.html","f00e3b8730828cfccae1b8dbfa658d67"],["/categories/中间件/Redis/page/3/index.html","ea138a04708eb335203522514e61a91e"],["/categories/中间件/index.html","08335dc87b9fd69d90355e6ec872dc6a"],["/categories/中间件/page/2/index.html","e20c96da86af7de66365553747bc63fa"],["/categories/中间件/page/3/index.html","f4ca74ee72c9bc99159c75b141909a45"],["/categories/中间件/page/4/index.html","864c1f0e717dbd8d40f03e146ed3935d"],["/categories/中间件/消息队列/RabbitMQ/index.html","4c114ba86565577202a65519243bdae1"],["/categories/中间件/消息队列/index.html","ab67fb709e0572b04f0cad41f82a1104"],["/categories/前端/Mock/index.html","fbb91d1cbfbc3d207a574ca569996131"],["/categories/前端/Promise/index.html","bccce90223b2c33427edb2558a7d01d4"],["/categories/前端/Vue/index.html","94280f505a5cb8fc8f9257a2dadec23e"],["/categories/前端/index.html","858c6ee2d8098ba647c0a2aba3c3413f"],["/categories/前端/jQuery/index.html","53b45c055558af049aef20d8d9e0b786"],["/categories/前端/page/2/index.html","4c5f9083c8cd02c63098af3873918c61"],["/categories/前端/原生基础/index.html","f516ba6b377b399d74b2baf08f0b143b"],["/categories/前端/异步通信/index.html","b957ffef7c7131234a44441dc4c2e996"],["/categories/工具使用/Git/index.html","8df581c190b9f00ea88ca8bff7039f79"],["/categories/工具使用/index.html","13d888c32b5c5a5e8031d04ef2cac3b5"],["/categories/工具使用/markdown/index.html","6c734d3545eb9e46b40fab0116505245"],["/categories/工具的使用/Docker/index.html","cad3f97c9bc6d41d6fdd0cae428520d4"],["/categories/工具的使用/Nginx/index.html","ee9f0e58ee6c804a05b1495455e6f51b"],["/categories/工具的使用/Swagger/index.html","0620298b01a1c5bb63eaced7de676dbe"],["/categories/工具的使用/index.html","c3c511ff2d796bd6075ac31e7e43a8f9"],["/categories/工具的使用/博客搭建/index.html","2f0808d3da2799bc25aa73a790c73f95"],["/categories/数据库/MongoDB/index.html","c7c63d455ac2edcd0a949e9bac1097e8"],["/categories/数据库/MySQL/index.html","43bd3f30587f9409a1def5f84c4dbf21"],["/categories/数据库/MySQL/page/2/index.html","5a0467a1ec7f123b3e54504e98030a2e"],["/categories/数据库/MySQL/page/3/index.html","b6a165a2c0fec0694139e153f944702b"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","ec55227cd3a04fe5396fe3d7a422979b"],["/categories/数据库/ORM持久层框架/index.html","0c61e713a730a3829a5514ef57271782"],["/categories/数据库/index.html","99abc8acbdb235496f0bfb422d928cd4"],["/categories/数据库/page/2/index.html","6f11d8914dddd5083aeb2032b54c08f6"],["/categories/数据库/page/3/index.html","ad5c922b5ce961948112e097dd6664eb"],["/categories/系统设计/DDD领域模型/index.html","6b2598ad6b7c308a3a7d099ae9eb07e8"],["/categories/系统设计/index.html","76708d17afb71c0b52aa7f99f8648122"],["/categories/系统设计/page/2/index.html","21fd3347101c61532f9d70a8715acffe"],["/categories/系统设计/page/3/index.html","157e9e3a94ea547e21c54c7ad81ce360"],["/categories/系统设计/page/4/index.html","8a22d071bfb362c5257fcd0a080bb64b"],["/categories/系统设计/page/5/index.html","5ccac8dba71f23e9fad091955375783e"],["/categories/系统设计/分布式权限认证/index.html","42d07554248a907113b1bd83a6b8a8bb"],["/categories/系统设计/分布式系统/index.html","b007aa4ea983882b29bf8a75f4b2eb6e"],["/categories/系统设计/分布式系统/page/2/index.html","2c2a13bf630fa73d62d342c9bff0b9b0"],["/categories/系统设计/分布式系统/page/3/index.html","f1faa3edcccad19abe9d3df2bce79996"],["/categories/系统设计/数据库优化/index.html","a055dabab65f040c3eb32244cbc3d282"],["/categories/系统设计/设计模式/index.html","bcbf95237059abd1bffddec435670594"],["/categories/系统设计/设计模式/page/2/index.html","dec8c733493c54ed90be1a71fdc6a967"],["/categories/计算机基础/index.html","3bc482c4a3d0df98a9e19d072ff5ca21"],["/categories/计算机基础/page/2/index.html","e7991825d504030038c1764719b4c8ce"],["/categories/计算机基础/page/3/index.html","25afd39600a761013bffb177609d7f74"],["/categories/计算机基础/page/4/index.html","a695417c04c278ef9b5e79366efade8e"],["/categories/计算机基础/page/5/index.html","ff46cfa9debc28837f080def9317fb26"],["/categories/计算机基础/page/6/index.html","49837662ca03b5bb60132807b9a104db"],["/categories/计算机基础/操作系统/index.html","f5306be9372af1888b97cdf8c73e0b03"],["/categories/计算机基础/数据结构与算法/index.html","96de103aaa36863be1a7885514a8a05e"],["/categories/计算机基础/数据结构与算法/page/2/index.html","ea7cc50aa6dde0e109c48b5aa447d3cc"],["/categories/计算机基础/数据结构与算法/page/3/index.html","9ed5a3e81d2fee86392f04c7e4009df1"],["/categories/计算机基础/数据结构与算法/page/4/index.html","82570501f71b520a63f21bb40d92340d"],["/categories/计算机基础/数据结构与算法/page/5/index.html","a784ea428cc7c27098d718364cd7e3a2"],["/categories/计算机基础/计算机网络/index.html","4693b96707f6f31f1bcb9e975d88ba9f"],["/css/index.css","2af5ea34362e0b34f799106b2659ad50"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","268a40985bf9142bea65773af679daa1"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","02cc709ac6ec27b8f579ee3408ac8529"],["/messageboard/index.html","354f101af81c2ac785a63bb00863b000"],["/page/10/index.html","18efa7ef7eb60037a956b30ee2e53ec7"],["/page/11/index.html","d9e7b3df823df4896cfa70349cef5e8d"],["/page/12/index.html","d5fc5536d44f897d0f1da7629d0bbe23"],["/page/13/index.html","67f7764a73df6409bd394e6e90c3b2c9"],["/page/14/index.html","4372c4dea1061e750c1f71d88699a88e"],["/page/15/index.html","d6359211be7e3e8292398cf83881bc59"],["/page/16/index.html","67e2e7736531b88420a8c900400a9b8b"],["/page/17/index.html","90d056ca794efb8beb2260dab906f6dc"],["/page/18/index.html","1e27226b63eefcb3d102228a4e88df40"],["/page/19/index.html","22930b253a64c5ffa364c509f64453c4"],["/page/2/index.html","23d4651dff7a940354c51bbf0df8d449"],["/page/20/index.html","5f47eea87275f8d0fdc466b9e25df603"],["/page/21/index.html","eeafc28ee5b22cd7b059b234f7280301"],["/page/22/index.html","99ba678839f7d64499905c1275eecc6d"],["/page/23/index.html","acdb39f01a9b1b7e06fcfbf059913dda"],["/page/3/index.html","bd5ebe251ccb2a8475737f0d52bfc373"],["/page/4/index.html","52f5d0642adeb1ea78a2cd8c15f0828e"],["/page/5/index.html","4cbb36597ce3ae0bb1883bd175572109"],["/page/6/index.html","25c6fe1a62b7ac0dcc50bbfa4db9e78b"],["/page/7/index.html","33e4ec5b5a70fac27124aaaa78a65b30"],["/page/8/index.html","4c6bc0337c450bf710957dd1328de00c"],["/page/9/index.html","c7bfcfceedc49ab6cea31b79475bdde8"],["/sw-register.js","4f00232689c25db67b6d4d93991c457f"],["/tags/Ajax/index.html","e3cb106b648aa50644c3f3c36aa16524"],["/tags/Axios/index.html","0ab14678f8156df91d399b1b837e9f37"],["/tags/BASE理论/index.html","a4240d39faebfe0de4297d4d19eea627"],["/tags/CAP定理/index.html","5d4afcaaaa2aea4887a9d999cc163d57"],["/tags/CICD/index.html","2e8c56deeb2aecad829227d8162c15c7"],["/tags/DDD领域模型/index.html","07b3074dd8a7ac5507b2eea0485578e3"],["/tags/Docker/index.html","cb11a9672dce87b75cf11886ab3c5657"],["/tags/Dubbo/index.html","c0d99526e22b93fe24ff1b0b6ef1582e"],["/tags/ELK/index.html","ba371c72ac9de139c75a93b583d91ad6"],["/tags/ElasticSearch/index.html","9e87abd74d6f489f05d57e9a67170ec1"],["/tags/Git/index.html","266deb7da35d03dd74b7861bbd4e1175"],["/tags/H5/index.html","11c3bfd46a0f001b30e63af0154cef8a"],["/tags/JVM/index.html","33ed66741b629e4e48c2b50d5cdce834"],["/tags/JVM内存模型/index.html","132bdf5ba5c127afcda7a69e518b60fe"],["/tags/JVM执行引擎/index.html","987c0ac92865e00e61f36811cddeeaf9"],["/tags/JavaScript/index.html","49e6b42f34760f43ef4cbea34c02e5b8"],["/tags/Java内存模型/index.html","80a076f45897863c849d1a57a049428f"],["/tags/Java进程线程/index.html","569584f94114056adbd8881bebd26e8c"],["/tags/Kibana/index.html","064dd44ba6640642ed4a0a2a8992d908"],["/tags/LeetCode/index.html","4667e0f0b5204d970e4299a3cc44fce8"],["/tags/LeetCode/page/2/index.html","f33f9188cdf45af6e76e719a20e4f2da"],["/tags/LeetCode/page/3/index.html","a236feaaaaadff5007247cbbd7600758"],["/tags/Linux/index.html","fbbaab38ec5e45b94c4fe0f0033bf9bc"],["/tags/Logstash/index.html","50999082fbc07b46a126d4544fab37cd"],["/tags/Mock/index.html","1033dae73500387c63e22036f02d85db"],["/tags/MockMvc/index.html","962e8cc70d0e630f06a842212381c7b0"],["/tags/MongoDB/index.html","27d6bb4e2b51ab95c575019a603825f9"],["/tags/MySQL-事务/index.html","972a9ebbafc23dfcae4d38c110ac80ed"],["/tags/MySQL-数据类型/index.html","07116bb3d010e2a347ffd6b899a95bfd"],["/tags/MySQL-日志/index.html","1cac4ebc898dcc9aefc71cd9645e21fd"],["/tags/MySQL-索引/index.html","1916b37d9e4809462d48533fa2e63d5d"],["/tags/MySQL-锁/index.html","4836413010d7e81157e6005166e31367"],["/tags/MySQL/index.html","28bd908069aa3d3b92922436b001a178"],["/tags/MySQL/page/2/index.html","45ec6c830206478aacd9e8261b2bab2a"],["/tags/MySQL分库分表/index.html","ad3cd9014b15435e14d559f815339720"],["/tags/MySQL读写分离/index.html","92da11841a30e5bd2b94fdbee62518e7"],["/tags/Mybatis/index.html","91b34b2dac856f56a2b2739839b0fd49"],["/tags/MybatisPlus/index.html","5793a8400e162f14072a7919fdc69aa5"],["/tags/NIO/index.html","4d76c8a206e98ff4c1cd205be51497d3"],["/tags/Netty/index.html","a303354e35e6ce39e569c6f673464f8d"],["/tags/Nginx/index.html","5ed74aa2443e8dd3727ca005cbc48b09"],["/tags/NoSQL/index.html","85b5d20b43d4b388941b6a50430a9857"],["/tags/Promise/index.html","d168236faf1c6bedf21cf1fcafee06ec"],["/tags/RabbitMQ/index.html","c248f1d72c91043c82e08f9d09ed261d"],["/tags/Redis/index.html","d38b84f2c8063cb6b91d6a5263cc48b8"],["/tags/Redis/page/2/index.html","296b249951a964ab467ef9dd093a3d7a"],["/tags/Redis/page/3/index.html","469ab8a64c23db7a185172fd877c8e0b"],["/tags/SSM/index.html","5a35c6b853e973076e0999a369c2e779"],["/tags/Spring-Security/index.html","5d27b18969e3eb0770c3e05a3164cb10"],["/tags/Spring/index.html","ddf816f26927e22d260d9f5cc10f7755"],["/tags/SpringBoot/index.html","38c0fcfdccb03b64508a79f9854919dd"],["/tags/SpringCloud/index.html","81823c64c4d4046f580019a0292f0f03"],["/tags/SpringMVC/index.html","fc29688f8f4dd24f31e48374b4cb33c1"],["/tags/Swagger/index.html","d77f948599030b7498d6ca042f14b025"],["/tags/hexo/index.html","803429b1d133cf0f4bf5e323b1567c4e"],["/tags/index.html","4a1aa92f3b5b85f2b52f4f551332cb21"],["/tags/jQuery/index.html","be165014f247de412cf49ddae04be8c7"],["/tags/java/index.html","24dd58902c8c88bf3dc66cd572d010d6"],["/tags/markdown/index.html","da0f9b403210996bf71250a04a7b6b5f"],["/tags/rpc框架/index.html","145f1646382a3c13b19923bb45053645"],["/tags/typora/index.html","d356f7e746de3b786a1c9bb3f1f89866"],["/tags/vue/index.html","df3e4c46b3861bb95b1c9490f00ee106"],["/tags/享元模式/index.html","7c458749077daf34d887841d64396fbc"],["/tags/代理模式/index.html","deb7627d39b37fd69b424ded379af44b"],["/tags/内存管理/index.html","104330b4d549e75f1efa5b179242d309"],["/tags/分布式/index.html","b42e87b36bf5d3514ba4a1b1f1d175c1"],["/tags/分布式一致性算法/index.html","b9880056594cc8a348372b01c5690d32"],["/tags/分布式系统/index.html","d2aa36765d5213dce01b52dd9473161a"],["/tags/分布式系统/page/2/index.html","1485d0ff130018d17d27a480ca7852ac"],["/tags/分布式系统/page/3/index.html","93d8fc59e9f0e257b1c2cce4cdeea07f"],["/tags/前端/index.html","3289001e63d403c914266c77d0d0179b"],["/tags/前端/page/2/index.html","1a05e8a6bb39fa12521f0bf1883c1c6c"],["/tags/动态通知/index.html","57e7b7c4a8dcb0606310ccd4d4d3e515"],["/tags/博客/index.html","b6dfaf8ac1dc06c810f46fa1cbe776e2"],["/tags/后端/index.html","331d01f5fc2507ea69d8ccc58686f35a"],["/tags/外观模式/index.html","82e00a9c381dd8d8abeff22602b777c8"],["/tags/多级缓存架构/index.html","c9a685a51b262f2f914b9ddadb40ef3f"],["/tags/多线程设计模式/index.html","1ee0e2fd15ccc955e0c593743344944f"],["/tags/容器技术/index.html","9a4f020b8a2748cd9d5268789a825c3f"],["/tags/工厂方法/index.html","8daaf4ed3a6c1fca3dcea55e5de1caab"],["/tags/开源协议/index.html","a2b0a11bc4a91f83bdc801d5c9a5b1e8"],["/tags/异构同步/index.html","764653c0d35a1dbeb0a87cd0de96879a"],["/tags/微服务/index.html","0de6dcaf07bbf36db9fae9c2ebbc1c7f"],["/tags/抽象工厂/index.html","e7a85d3defc36c358c1a1d534c07ed6f"],["/tags/持续集成持续部署/index.html","6488bc4a175f427bf23254c70402b5fd"],["/tags/接口幂等性/index.html","8737bd77977f62b118c5aa390f2e0eb0"],["/tags/搜索引擎/index.html","44150c6b18400119c2b0a128c32c1756"],["/tags/操作系统/index.html","a382251d5ccbe0352840d69acca62e9a"],["/tags/数据库/index.html","032e968b9472e3515362f5ea1b47514e"],["/tags/数据库/page/2/index.html","27f695c6c1e8d1692f16af5a28a260e0"],["/tags/数据库/page/3/index.html","4f03a7ba8a70db2ae7ca447eae7d6cb5"],["/tags/数据结构与算法/index.html","8e5d8b352cd9907a7eef77244249738a"],["/tags/数据结构与算法/page/2/index.html","dcfebf1149e9858c75dc6960803756f9"],["/tags/文件操作/index.html","20cb26a2cd555cc0900797ce5f3cdb99"],["/tags/日志/index.html","bfeb6e94993b3194334fd04f46ef3d46"],["/tags/服务器/index.html","2fffcf8e50a56d3188eebb0070e1cc9a"],["/tags/权限认证/index.html","f7654aa24d0673e263b81a0ce10b779b"],["/tags/架构分层/index.html","5f3570015620266bec19ab06e58bc124"],["/tags/桥接模式/index.html","e1fe1e5156414768fb934c155d098260"],["/tags/模板方法模式/index.html","8aa12ec63fb39b31e9835240546b8a7f"],["/tags/死锁/index.html","1033baf3a144051c01a01d61ffa4222c"],["/tags/池化技术/index.html","60c050de76e84da27d8a3e825c3bf500"],["/tags/消息队列/index.html","858743bff7fbeb8ccaf8547147f003ae"],["/tags/版本控制/index.html","653e42f97eb6cac68b5df278b67e3b2e"],["/tags/策略模式/index.html","36bab6867dab7067e6b3d2b14a0d1565"],["/tags/简单工厂/index.html","578e02e4397cf8b6bdd1ad53ec509e39"],["/tags/算法/index.html","14133f3938ea699923eba4130b9be257"],["/tags/线程活跃性问题/index.html","0dda1416b41a8a2c5bf7d6384df07f25"],["/tags/组件化/index.html","9d1d663b3bc50a17a2ed4f578b8f9edc"],["/tags/经典限流算法/index.html","e15b7534e4ebe279595a9716fe8a0f37"],["/tags/缓存/index.html","0e3a92cf8b47aa5acf9b40c368b4b7ba"],["/tags/缓存/page/2/index.html","9820a2ad79c5a17f0885e5ae0aabf65a"],["/tags/缓存/page/3/index.html","5c82a35b05a7c1c68f49440edc383df5"],["/tags/观察者模式/index.html","91dd37faf6b58ea6132c8e10543d4408"],["/tags/计算机网络/index.html","701070d7acfd4972eb093f48894be134"],["/tags/设计模式/index.html","c5fde4b1df064639f80c7a04b81079a3"],["/tags/设计模式/page/2/index.html","178bf936f8ab86e54e5e758dadc7cf8e"],["/tags/设计目标/index.html","fc96cbf4456056fa44199b343c42e409"],["/tags/资源共享问题/index.html","07deface2940e3512bf9f03a99bfd7da"],["/tags/进程管理/index.html","84d0cc5fd119f4703785fbe30c4bb74d"],["/tags/适配器模式/index.html","139334453ef81549670c9e663874348e"],["/tags/通用设计方法/index.html","181fb9dba1f0337c7efd1d10cd3c3921"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
