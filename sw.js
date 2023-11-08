/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","ed31b8ae2be8694792c57730984d8f19"],["/2021/02/22/工具的使用/博客的搭建/index.html","0007553eeaa01d2f700e3f01438002f4"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","47bf6faad5919aa0dd9ccba3721f2ed5"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","28872222f1ba96c8d68679fec9a2acd3"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","c3e72f94adb425171a219685ea58a129"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","4a4720baad10be5e567ff9365d655e3c"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","d899f0c909bbf0bd330fb32afed6c540"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","de1728009747dd9e75c442648cfa045b"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","806ec330bdaef0c9ea8d2b51e1f65266"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","2fcc9aec708270a6f299711d34556e51"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","4bd686ab09e82b66134a2f7b40bdc304"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","23ba06925cd0ad3563ad4600aa57b008"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","ee0e900c2642b8729a6cb9ab5c471018"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","96e5953fa3b5e9e86bacd32c3f7925c2"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","b1ffb64b65326a389eadca47d7ee3365"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","e66cde8f5cc596c047d8fa2eab2e32c6"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","90ebb68058412e36fe9e10d5e819586b"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","19222d0ccc1c4e35f34b0abae384d7ba"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","d29231d4f68fe77067bc749b189ea0c6"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","135f310a99aba90c415b8e14236287ed"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","f8a81149b3cdfcf63f9234e75b52838a"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","45fb56ba8aa034523e35ade39bb960b4"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","c057c25a1d6f562088caee0075e1d4a3"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","371cc4d61fbb92151d47ba8b70719021"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","3e4e2a169d32d5c2d877ee373e1672f0"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","5eada053844f82f668d939dbf071d94a"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","fccab7cc48982572a8b74a78500c64b3"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","09d473d11a85204c6d1de89178865246"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","911e777a3afa5e3d096eda67b4eab789"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","69f8b68199dd9047bcccc2549f907f48"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","92a6a1fdce370333b04119a96d85cda9"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","6178efa4992b410701a9c8d3fc0d2a13"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","e24f80e3e36c39ca5c23bb481c26cee1"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","f83e8d4f5ed759b942ca0faa7014532d"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","ce84b7f39a2955586cdf7896ba969be3"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","e14ab9d452e89ee1605b2b9ddfc6f565"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","53dc604a0ba86d02a22d770bc0848bb3"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","ac95f582ca4bf0b0e47f2da1cfa59c87"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","d2ca47ee1e89afa402de2b033b642e0c"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","ddefac64c8d408e7ebe6e009f4e6d881"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","442107379eed93cec7e7d48db770d102"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","c9e684dfcc5b9114d26ef4b26ee325aa"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","a2e7e0df195040089482bad8f44ee6c9"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","06f9c29103fcc8bc01d4858f835f477a"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","115599a678fb85258e419339c3aa8fbe"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","1f0eb7ec4d2a255d2d3c2c8a4cf1d4a3"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","ac33710bb8cfe3feb7ae53332bf43ae1"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","f04fa0e112b5dac94bbfca4c2c8be6c7"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","686b6328346c40fe4317ee760a72ea21"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","568f008b3231d2f57734a26025d9a790"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","43ee8377e23a1f72cc2b91426ee73777"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","7248d8ed20a03512b8894a7b93f11aae"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","78dd3025b582ac8b82080db8c94a9efa"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","fbff389f69a475d8b19ac089c0eadbce"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","9b3744c9aa98b3e44a8f2ed64f6be408"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","8f4414db2371ce07aa28c6d59aa87258"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","a2c987bb5f75f53f3eb5ba1464997d22"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","8c47ebf05621636cab26b0a623105402"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","67f453bbd79b62dacf3dffdfa5987262"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","edde7d6b1f7abbf4d46333604db12878"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","d28826cb3bdaa7defcc53946043b87c6"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","2c3e1792ccfbb6d28b7f6d14bb38cf91"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","0797fc44fe1aaead50f08cea8c67790c"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","e6eb59b00a442944e0030d16cab6595f"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","7b13a8982120205ba08a8d9e22f54c7f"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","ca49902aea6edfc041b9d67ff6ab399e"],["/2022/08/17/前端/jQuery/index.html","898ff035fb806aca08a57ef75a722f8d"],["/2022/08/19/前端/JavaScript/index.html","80550b72a6456744b5e8781fb872866a"],["/2022/08/22/前端/Ajax/index.html","a47991132d89240e791e792519537c3b"],["/2022/08/23/前端/Promise/index.html","1a8630b9947e1fe8308d176c4dd4ce58"],["/2022/08/24/前端/Axios/index.html","aa509b86112b89885b5754373617cbb6"],["/2022/08/25/前端/H5本地存储/index.html","5147ad33e03353022f4e7d00b426bd58"],["/2022/08/26/前端/mock/index.html","62dd98fab39925bd07de2dea756dc444"],["/2022/08/31/前端/vue/VueJs/index.html","7416a1efdf3d4f7286e36b31c31c74ef"],["/2022/09/01/前端/vue/vue组件化/index.html","606d8a931d46aadf244cc9501baaa91c"],["/2022/09/04/前端/vue/VueCLI/index.html","2fe2acfbd94b5e5fe11ca31f5b2b9112"],["/2022/09/07/前端/vue/vue实现动画/index.html","19f98d413f4d47da76d48652e7983839"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","5ce571686777b01a18fcd456ab2b3cb4"],["/2022/09/10/前端/vue/Vue异步请求/index.html","9448805933e58de4b42ee9ba130a63b4"],["/2022/09/11/前端/vue/vue-Router/index.html","ea23d3b1fe06e468db62551496d6dae7"],["/2022/09/13/前端/vue/Vuex/index.html","8354745c0057ae562346e641806df45a"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","94b76ee5805f708b6f33e8957fb1d7df"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","0993b4c59a7f8ec4d43c5208eb8b7fc7"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","40613fa650d375af048cb14d76f6517e"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","15e474060f21570a9e053292f0cdb4d2"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","3ad548207a61b7591d29872f8ace573a"],["/2022/09/28/DevOps/Linux/Linux/index.html","b512e0fe1ef817fca56350b06742494d"],["/2022/10/02/中间件/Redis/redis基础/index.html","a02c1ba7c7e65cb7abb497b313ce5c44"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","88c96b85d3c7be77abc8fb275917dab9"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","658790364540e80de815f0c08db9aa0a"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","355bc00c8ba991b45c1e16dd9104c738"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","2ff7f845b9190ad34019bcb05223db7a"],["/2022/10/17/中间件/Redis/Redis集群/index.html","709661c2928d7b0fe4956fd7540e7841"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","f0bcad2b5bd813ddf8e11fdc3852cf24"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","7ae4eba4b42ae2342748b6cf1476b4ec"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","cb530930c09ffd48ec2a25d400f4ba9c"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","41a7f05f1b67247bd5fc1905484f24ec"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","3511de289e9318e55cd960dd172fa4e4"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","1bfb740770195b7b801394e85432a41e"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","691545671b74644e8266d96e14e60c5f"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","75347c3985cbb20a5bea0a32a78d020e"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","e315ead45f8d6e698c7fd6a89100eb30"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","833dce56d221cc1ba322f9b72cd97b53"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","09ab8f3bce86fc8a80294cca9e9d9813"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","f7228f9c75a8f04856d10a30830842c8"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","0d6983fe09281522519e904a251fe642"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","9f55748396f08b1b07ec7435dceaabd4"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","ae6f4304e00d60b42a1514ceea6f6d0d"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","c21bda0275a1b87a6d8b60fa1ee3c694"],["/2023/03/10/DevOps/CICD/CICD/index.html","7e0de982e8c504d234539a2cd0795d09"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","6e51f6019b1af53f5b1a84fc516fab65"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","692458e7ca127d7a074431a96cd401c4"],["/2023/03/13/Java/NIO/NIO/index.html","2821ca60e0e63a79d66067dd753bc0e8"],["/2023/03/14/中间件/Netty/Netty/index.html","4b650bc9644e2c6c789315155dff17d9"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","950722cc6372d7d479c80eb37cc3e717"],["/2023/03/17/系统设计/分布式系统认证/index.html","c506d105e673592221dddccf3b29212a"],["/2023/03/19/Java/JVM/JVM概述/index.html","aad6f74881aa52fdb98f12ade763b25d"],["/2023/03/23/Java/JVM/类的加载过程/index.html","129502cf79f851683866478ea15bdc95"],["/2023/03/28/Java/JVM/对象的实例化/index.html","abe7d047927455ffd431a60f2023a3d4"],["/2023/04/01/Java/JVM/运行时数据区/index.html","c1a5d9bfef1c27970d03afb5ac865302"],["/2023/04/04/Java/JVM/执行引擎/index.html","b4487a7897065208beb33e42384bebe4"],["/2023/04/06/Java/JVM/对象引用/index.html","df4293bfc565640d6a2c39e2aa879556"],["/2023/04/09/Java/JVM/垃圾回收/index.html","c0e07fbbb506bd5f05f2edf6da0afdcc"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","cb27a1279c7c448c82266a124e461058"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","bb25a7667d708c92b9e79c02902f8097"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","0845b76ae94e0bc98290553607da3c32"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","21c72498cd1033bc039025b684f51325"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","7b7c5ace55b580c7025c38357d7f8d2a"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","ac2ca1365823a944f053ca749e5eb781"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","2d22a61e139c3e059a1524c278abb347"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","01c8a8ec44cef695be0dcdaecdca528b"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","5d1b29b30e509c09fa36879634833e85"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","2af516ce6ebe1d9b10f16e5804fade32"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","863263081876e93adb123cae068c75be"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","642d6a4a63fef0c90dd8799cfe1f8cd9"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","859cf8b2ee6861ecaccc42e8ad200a00"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","71751b13c186d7ac10840ba002d2aa88"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","742f6f2b635d59361cf484488caa9757"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","4696a7be4eefafd12d51654ed2f504d9"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","f15bc49b719f70eb653a7af0e8e23cbd"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","a1525ce3ba2ff404f7d87cc5de510139"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","df2056440cb930bd864e33d3343800ba"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","cec1d257f94f3db0ba222fbdd2c94caa"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","5b71156af31771c4b321bc0077e3f181"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","4bb18163a1105fb7ce943b728305bbde"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","05016adaa4e4ff2c79ff7e6544fc3ddb"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","593769b29bc3d578331dd1e81fd0748d"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","5e9d46bfcecd7db244d357d5a91ac4f6"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","25a6afd423c914f89154daa2ead22a92"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","b547836d27125fb587985f5822aaccfd"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","6d9d086f0d56823250ba62778c268efc"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","4dac811bcad6f8edde6af2899584bfd6"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","e0c653e20c4253f372cbae9ce03c21d3"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","d098f3824b091d0423eac331ec740bc6"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","920c30e33faa598b69fbb6ebebbb182d"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","58687069d1b0840c2303cc9907a7de2e"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","828fcc15d17fa064f302e31f757ae435"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","f99f0826e78fc98e9fa58f452f31cbc8"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","bdb0a7535ba8f6f4caa264c99f18d9b6"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","a13a997d49ad426627b5ce04ab87966e"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","902442deb8d0ee2ab4e0f12ab09ff8a6"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","3f5c752c78243b0627e2d6a113f56f74"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","e161c1ce92d91bbd6c8915a57e13cd28"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","0585ef9a04ea00dfb80ebcc5972e24eb"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","60d3abd1b475bff9ea93ea5c00dcf5ef"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","bbabd7b86005c8f371ee4ef79a6e9289"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","39da7024fa84b9a19fad971be3fd28db"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","a581523ad5a153a7712566de2cd0940f"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","06e8679014223cf1e1e2436441c86b9f"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","b11a4e316daa1574d96d4448b6dbd4c7"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","c8bd57bac2335184c3a1294983ade1fa"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","162c8bd3c67f1c51552b8c30763dddbd"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","7edb0517068584f749c77109a47ac4a6"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","f9c72d56e233058c19c7eaa67eab20b4"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","1b6ffee515877c000d5224201a70d5ec"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","916b37619da768bb23db5e2fa38a004e"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","dc5862266dc9d117f5df070c657a4ef4"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","84297313b3a5f5c90568ccbd610c43ef"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","5e147b4c1ee7ab5e5a5d67a3433c19fa"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","85e80c95461b17a9a9d19e68979ebb32"],["/2023/09/04/中间件/Redis/Redis事务/index.html","faa2b6dd3085affe9aff715c8485f0e6"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","ff5fa2aeeddaa8bc5384665c2bf3efdc"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","4baa941c3e0fa6145f875f9c4a4c92c4"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","59d00dfd0d0c2c78ecb4f4964d7ba864"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","cff5754e6174ccae58123985320cd8f6"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","6934b262126ef2b65418b7ac3bb13b26"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","f8520993a9260b3af018f1809a43cac8"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","1a431c0b881ab4b0d2843c7bbe64fa19"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","e80728e945fe4e3b337d326d7a34d60a"],["/2023/09/22/Java/NIO/零拷贝/index.html","702569cdad71b30a90180ec612e5d27b"],["/2023/09/24/系统设计/JWT认证/index.html","7e5e1e79cf25b2ec9f8b0baf8b2be358"],["/2023/09/26/Java/NIO/Reactor模式/index.html","df6bb8fe3fbb5486ee366c601cbe6ad4"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","02dbb24892601cc4fb22080e3dc88ec8"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","308df5c9394ccc9240d66fbce998275c"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","573355e2a22c4c2d788e136acf4534a3"],["/2023/10/09/Java/并发编程/共享问题/index.html","0eaffe0072c4760c5d45c8f25c836541"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","60f57f1062a49060dcb6a45563e84a97"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","e45f349a40c390e58448feb61bcd9307"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","fbb3e4363fd34f495f3a4421d5356d35"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","628024e5b4946ff11ccf98214f8eaebb"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","f1b4a9372ed25f5c7003bb8d113857cc"],["/2023/10/23/MySQL数据异构同步方案/index.html","6e4a9427f69091470941d1d603f31a2a"],["/2023/10/29/动态通知方案/index.html","4a33d2acb56386a7d07cc84a1554014d"],["/2023/11/01/多级缓存架构/index.html","2f23a171cdb97f5f36735827783129a8"],["/2023/11/04/分布式一致性算法/index.html","a56c2c12668184fe0ee79636a2cdfa7f"],["/2023/11/08/接口幂等性/index.html","00866e7d0f955a23c7bb81b07b2afec3"],["/404.html","c9631df8b0cf4cd0c3c2396f19a7f608"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","8d147decb597b38ac5ee6ef3ef39332b"],["/archives/2021/02/index.html","e34791aa17e7dd54e2079940dcd379af"],["/archives/2021/03/index.html","27850a8af053955eea1c8c1c738e2fb7"],["/archives/2021/03/page/2/index.html","dd6c29f4ba7908d6a904c1d682d44863"],["/archives/2021/03/page/3/index.html","52d103844e1dc563f84b395e90928c2a"],["/archives/2021/04/index.html","3a615631968c86ed0807b4cda00b84ec"],["/archives/2021/04/page/2/index.html","b3905073afc40def997b956fdd3519fe"],["/archives/2021/05/index.html","d5aab07554c69f8e4d2b649e3d58a734"],["/archives/2021/index.html","a020988f875efefd471b10b8e15997c6"],["/archives/2021/page/2/index.html","ff1862fc9bcc6f8ee3ab36db4e68cf1c"],["/archives/2021/page/3/index.html","bf6f6ef1e659c4aeb0626f77e3b227b2"],["/archives/2021/page/4/index.html","a7443417f9bc23954505377b100544b5"],["/archives/2021/page/5/index.html","bd925dac61e1d16fea656cea7e93fdcf"],["/archives/2021/page/6/index.html","cad776cd507ff31d2c692a222fbfa02d"],["/archives/2021/page/7/index.html","13ef09005ccab3d27b93e1629d73f13b"],["/archives/2022/01/index.html","a1dfd94e369f1e0b7b649dc0878a61da"],["/archives/2022/04/index.html","72008576ce8f2ab937a0085bc009094a"],["/archives/2022/08/index.html","c17a2497d720f92b15bba80398900f6e"],["/archives/2022/09/index.html","b696343f42d4b515f291a59ad4fd045a"],["/archives/2022/09/page/2/index.html","68adb87e6a6e0391aa76890fc9bd5774"],["/archives/2022/10/index.html","b1a9526c4f0816adf6d0f3964a9e0e5d"],["/archives/2022/11/index.html","22ca4927e0b170bb1a5ce27fbb900a99"],["/archives/2022/12/index.html","625a2e8beb0fe6ae38ad1078359daebd"],["/archives/2022/index.html","820661dc66cfef1ddb17e58cbae7a877"],["/archives/2022/page/2/index.html","1eba6ebe4dc625106d68768f417b69cf"],["/archives/2022/page/3/index.html","0b4acaa769079d039ba4b842b95c2813"],["/archives/2022/page/4/index.html","b4902dee5abbaf1e9a5c845c5dbf50f4"],["/archives/2022/page/5/index.html","086e76cf336b5197d95a8d2e37febdb3"],["/archives/2023/01/index.html","97b3b04be73780479740f10d3e777f65"],["/archives/2023/02/index.html","218151898914989697d056dd2fa344f9"],["/archives/2023/03/index.html","4c4c13346f3c9b35839f4f56c3227ebd"],["/archives/2023/04/index.html","29bd72d01c9dda4604e11ab10d78a719"],["/archives/2023/04/page/2/index.html","1b4600d856d65be2cbd1e900edd68da7"],["/archives/2023/05/index.html","0a2b617e8a2923b7cae453c41a6b4761"],["/archives/2023/06/index.html","cf6291bcdfccb62b1f7d077cd7bc84ac"],["/archives/2023/06/page/2/index.html","415a83a5f47bac61d5c1e889f6a437e9"],["/archives/2023/07/index.html","7c222d91b8088962bab80e6f6e8171ab"],["/archives/2023/07/page/2/index.html","57daa22d4473d8353619c6dff349fd42"],["/archives/2023/08/index.html","db8097f806f89e2a3ee88938ef8d07be"],["/archives/2023/08/page/2/index.html","5cccb05e004f8ae0c861ebed60ca30e4"],["/archives/2023/09/index.html","23d0c598fd9cb825af7ea8fd3a228e79"],["/archives/2023/09/page/2/index.html","c2d230fd6dc0bdf8754560274e8878e6"],["/archives/2023/10/index.html","01e20af1a792125983884daeedf5df14"],["/archives/2023/11/index.html","5a949c5179b94650c04e5c9b8f00d1e9"],["/archives/2023/index.html","924ed394f9e2e894efa8aae5cb81c1f6"],["/archives/2023/page/10/index.html","994854a94eefb9581868139063e88f2c"],["/archives/2023/page/2/index.html","9067919c8a7cd316fa772adbc73d51f3"],["/archives/2023/page/3/index.html","f04ca83d59bac06ce20798db2782ae98"],["/archives/2023/page/4/index.html","55d68e9ceb0f6ee74a1261831dedc93d"],["/archives/2023/page/5/index.html","f6bee2c6af022a1016ecac6d74cbfac7"],["/archives/2023/page/6/index.html","0ad1f0ee0cf9ddb7ed8fe5cc45429f98"],["/archives/2023/page/7/index.html","71587cd5a6ff681be16473b7607722a1"],["/archives/2023/page/8/index.html","496277a32e2ad4504d02ddb7a3ec2dff"],["/archives/2023/page/9/index.html","0f0b2c84afe7983b3c2d92dd0dddcee8"],["/archives/index.html","d20dd027a822984da609e0b426029def"],["/archives/page/10/index.html","7ec82dfb2bdb34e93d1777635c443fcc"],["/archives/page/11/index.html","a72e22eae578c5662661ffee72951da8"],["/archives/page/12/index.html","f151a75b740d6b2e640974773615780a"],["/archives/page/13/index.html","68d2ea86ed6ea83fb105dccfddfcde34"],["/archives/page/14/index.html","0f5068fc58799220fa2c354a9a95f574"],["/archives/page/15/index.html","67879f794671b19f887b01c8b40b04e3"],["/archives/page/16/index.html","53455afafa916c3cea9b5e59c83e01a8"],["/archives/page/17/index.html","b0a65d03c6a4e767fda539f51a3ad1d0"],["/archives/page/18/index.html","2278b133256c363f485a902bf6570635"],["/archives/page/19/index.html","e53da48efb6b32d0e9b6b8db8824ab65"],["/archives/page/2/index.html","c07a91f41d848ffcd3b656410e62745e"],["/archives/page/20/index.html","bfc6defcba7408d1fad48d63986b47c4"],["/archives/page/21/index.html","52226359b7f3b1710a598c40c68eba7a"],["/archives/page/3/index.html","5747606d05a60f9bce5e15cf01078ed3"],["/archives/page/4/index.html","cfefe81803e9bc10658e848da9f477a0"],["/archives/page/5/index.html","4c701169b20df6c5d0936f1c450f304b"],["/archives/page/6/index.html","d55eae14f0b35434a40ba7666236eef2"],["/archives/page/7/index.html","59d1411e4b3c2b6ad0cbf679e20fa30d"],["/archives/page/8/index.html","0eee7a47858efa082488f392bd23c639"],["/archives/page/9/index.html","189f8218b4463acd61ab040a7b329073"],["/categories/Devops/CICD/index.html","b4b2f53e40bf57837e78d30dbbc9a5bc"],["/categories/Devops/Linux/index.html","60186dab898039284627f976091a887c"],["/categories/Devops/index.html","97c636af921377dee3e7c86f30df1f9f"],["/categories/Java/JVM/index.html","3158aa8e29061a28ba79072b73d6ee17"],["/categories/Java/Java基础/index.html","8a3c2cd0e966fb3515dd772e63f0be0a"],["/categories/Java/NIO/index.html","df81f523d56b2bcbbf262442da0401fd"],["/categories/Java/NIO/原生NIO/index.html","9cdf1c035b6850dbd0b3cfeb154068cb"],["/categories/Java/NIO/文件操作工具类/index.html","57de81ad4a1000a87b68ef3481e288d9"],["/categories/Java/index.html","37ff3002b4a6d0f47f7ced8732e5b3aa"],["/categories/Java/page/2/index.html","2a0a9023dd5c643c8d211bd56eb7a48d"],["/categories/Java/并发编程/index.html","3c004223f2fd9b7b172b263505652c09"],["/categories/Spring全家桶/Spring-Security/index.html","efa881e6f39a96d50faf80c61bda2453"],["/categories/Spring全家桶/Spring/index.html","33417d2cb4a421702c282c8eddd7aae2"],["/categories/Spring全家桶/SpringBoot/index.html","4057b6dd757babcb8d3e89bee4492198"],["/categories/Spring全家桶/SpringCloud/index.html","9e8429b2838b1ab121e183862d711c97"],["/categories/Spring全家桶/SpringMVC/index.html","77303a3743ec8c99bdd8d0e879b48575"],["/categories/Spring全家桶/index.html","2b49c8c761f0f0c374e5cc731c427c32"],["/categories/Spring全家桶/page/2/index.html","2b648daf22dafa2bbafc0338f48e1db6"],["/categories/index.html","257b12703c909bdb158dc7ae91a816e9"],["/categories/中间件/ElasticSearch/index.html","a12dccf4c799a4c0958ef27176286685"],["/categories/中间件/Netty/index.html","2e970037dcd674e83bef47df97990ae1"],["/categories/中间件/Redis/index.html","8401d52f25af947cd17c1b64f144ef26"],["/categories/中间件/Redis/page/2/index.html","19624cc36c45d2c2d0b6fa2b8bafff9d"],["/categories/中间件/Redis/page/3/index.html","6d7cc292d0d6034469df6ffc8956478e"],["/categories/中间件/index.html","8d1dd7ce5ad5330284d0836d2b5a98b0"],["/categories/中间件/page/2/index.html","0faf18ef54b15eb84b6a0a19327fb209"],["/categories/中间件/page/3/index.html","1137d912b017a8e571a7b2153ca7388a"],["/categories/中间件/page/4/index.html","fb4f6581e2c53f8679991f4125aa03eb"],["/categories/中间件/消息队列/RabbitMQ/index.html","b73c131925ae14c5df9e4ae0e63de671"],["/categories/中间件/消息队列/index.html","89d4c2a407a70fcd278600b56d465256"],["/categories/前端/Mock/index.html","ab208a23ae6f65f00f6f2b72205631d9"],["/categories/前端/Promise/index.html","bce366c763178b108ae483d26592b4be"],["/categories/前端/Vue/index.html","0a99252992edbb380c49c02cc938b1d1"],["/categories/前端/index.html","a95668c96dff48d41660fad4e355d506"],["/categories/前端/jQuery/index.html","7bea0a30e8d7b89968e4e74cf329f7cc"],["/categories/前端/page/2/index.html","4c6d7d059c325efc0cad627f39386b47"],["/categories/前端/原生基础/index.html","3a98081f3ed4492edf00800e749a1096"],["/categories/前端/异步通信/index.html","8f0526016f175a024c749afa8915fd8c"],["/categories/工具使用/Git/index.html","c34bd5d482e99f1f81059a433f9c0770"],["/categories/工具使用/index.html","8e02b2479ad5e3dd2cfc6106e11faa4c"],["/categories/工具使用/markdown/index.html","914742543c0b89a703deaa31c176dd27"],["/categories/工具的使用/Docker/index.html","b9f60dddc6978611a952378c7b06cb6e"],["/categories/工具的使用/Nginx/index.html","2436aa13ca974e9209c14180e9b3fef5"],["/categories/工具的使用/Swagger/index.html","d55bad49594421e3aab0704f648f19b8"],["/categories/工具的使用/index.html","da8d28f3bad255ddcddbbf7a0691e68d"],["/categories/工具的使用/博客搭建/index.html","ee1358ea49afe71215cae1b12df0d881"],["/categories/数据库/MongoDB/index.html","dc73dd1e54cd892986eed110d3a4fcee"],["/categories/数据库/MySQL/index.html","15d77b51dcc57ec41aa339faa6459e60"],["/categories/数据库/MySQL/page/2/index.html","297d2d519f63eb25ebb4512b43ebad02"],["/categories/数据库/MySQL/page/3/index.html","8be17e92745a06ccaccff954ba0a7bea"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","ad2e19de4966bb36017508f996efa4aa"],["/categories/数据库/ORM持久层框架/index.html","12c18896e9b2160e0fc0635ced625e6e"],["/categories/数据库/index.html","d8625293d9dd6d17983dc5996e8f10fb"],["/categories/数据库/page/2/index.html","602545e477d75e37c7ef0fe84bfcc0db"],["/categories/数据库/page/3/index.html","0454bc37a9f2c53e6e0ad150b34af9c4"],["/categories/系统设计/DDD领域模型/index.html","8f020eea7c26fbbe27d6ab95ded9aa95"],["/categories/系统设计/index.html","3154a0d4fba13565da7e75cbfbe06855"],["/categories/系统设计/page/2/index.html","b3d89ba1e02786e5e7a7a8201e8e89c4"],["/categories/系统设计/page/3/index.html","2aae6475868fa9e24efa8d5c782a54dc"],["/categories/系统设计/分布式权限认证/index.html","c2863c65444fed2e4a4cb28012634be6"],["/categories/系统设计/分布式系统/index.html","6334313f200d254ab5ce9bc38adaff09"],["/categories/系统设计/设计模式/index.html","45934c42d237d6369c4dc3fe06e1e57d"],["/categories/系统设计/设计模式/page/2/index.html","dfcf85f1ac83850181e213cab8a1bd92"],["/categories/计算机基础/index.html","18f2a870d2860ace780cf16f9cfdaf14"],["/categories/计算机基础/page/2/index.html","6d80917cf30ee7259d19f3ea8a7764e7"],["/categories/计算机基础/page/3/index.html","40e474f1234a4bf0d1b187bfdf418963"],["/categories/计算机基础/page/4/index.html","4247f35f4f5d8710f73a3b1f0ed69d00"],["/categories/计算机基础/page/5/index.html","9bc993b3a3cdffb41a72c6d7316a8580"],["/categories/计算机基础/page/6/index.html","af591dff24a09d8c343e3f15e900a22f"],["/categories/计算机基础/操作系统/index.html","da61a8a21b4fa15c6017a759ddff5bd6"],["/categories/计算机基础/数据结构与算法/index.html","287ae998bb18d397a9fc66bdace30e67"],["/categories/计算机基础/数据结构与算法/page/2/index.html","06aefa99cf0b5f9481ff14cefb12f74e"],["/categories/计算机基础/数据结构与算法/page/3/index.html","31d11c87ffde65133ceb24648c679543"],["/categories/计算机基础/数据结构与算法/page/4/index.html","04fba96e5b6d1fd1b0c090486c648b8b"],["/categories/计算机基础/数据结构与算法/page/5/index.html","0b4e2c95a2874861fdb2b4d9b4f9a753"],["/categories/计算机基础/计算机网络/index.html","4e037da704e2c7d4d789b2c3478bea10"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","bf7d66248a8a176ea6394e10406c462e"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","4fd7067413cd7a9ea1bcbd5679e13242"],["/messageboard/index.html","a623d453a367dfc0c90756058577edf0"],["/page/10/index.html","c836345889998cc740d23281517efc24"],["/page/11/index.html","22793495d1f648c202abf69cb64f3ad8"],["/page/12/index.html","63c685816c2f272acf0e10828a6918f9"],["/page/13/index.html","115f80020ccf3067d28aae6f5191c75d"],["/page/14/index.html","2b5f56c93a548abc41f2edd11d8851fe"],["/page/15/index.html","c4eb7334a22826147741a65b29b02dce"],["/page/16/index.html","1fda2ed57f7b97ca7daf27ff5d01bc21"],["/page/17/index.html","295c49d365a3072a585a9b8851a84949"],["/page/18/index.html","29862aebd60502bc52a2a81dca607d99"],["/page/19/index.html","52c17efa1cddab03e1e9e7c2cd8eb9b2"],["/page/2/index.html","d4fffaa67ea8204fbae7573c0d6fcf6f"],["/page/20/index.html","915b41a4da5fef855d22782eb1d9043a"],["/page/21/index.html","e2ea2f8e80730696c4a878f9e56f07dd"],["/page/3/index.html","3af2ce1c886589d31b5f8c2b887d9e67"],["/page/4/index.html","0327dc61f21eae6f0c1f69d4ac9ac09e"],["/page/5/index.html","818af92535f73157a3159de317064c96"],["/page/6/index.html","d8b395a1b78a2ab8de5689a2e4ffd60b"],["/page/7/index.html","53e16add9bcb8649e79a9d2d02ea0f8f"],["/page/8/index.html","f207bac43fa621e44b04a10e5427f011"],["/page/9/index.html","221d7ee97dd6fd4f78b3f96eed61f3f9"],["/sw-register.js","52b05a3e2c1957061cd40095ebdb7c7d"],["/tags/Ajax/index.html","4fe4cdee388fe09a53247f1f39dbf90b"],["/tags/Axios/index.html","7660cf50bcd26c4782869a737762591f"],["/tags/BASE理论/index.html","1572e7b8b6c585d96b09f266ad9f1ff0"],["/tags/CAP定理/index.html","049461106c213e955dd87866214a8cf9"],["/tags/CICD/index.html","dfad30b346cf6bc6179eb23cfaf10ecb"],["/tags/DDD领域模型/index.html","d8c621c7ef96d08cb6311c85febcad31"],["/tags/Docker/index.html","275240c119057ff694e399b3fb11677d"],["/tags/ELK/index.html","df18232ed190702203436f635270867b"],["/tags/ElasticSearch/index.html","6292dfc42894efbc8121e1e1a621f6fe"],["/tags/Git/index.html","97174e8f6e891804e9e5502f2c9086b6"],["/tags/H5/index.html","e1a865c9c521b0d64e3ef53648779a16"],["/tags/JVM/index.html","aa924f383cf20cc7c8837e556a758deb"],["/tags/JVM内存模型/index.html","810735a9e2f3999931f159e0348a145d"],["/tags/JVM执行引擎/index.html","09e3a4b6d401f38fe9bc091936a5b234"],["/tags/JavaScript/index.html","9a8e7880a1091f7caf7b42c8c54a9b78"],["/tags/Java内存模型/index.html","457ba64f607637b5576128faf33142ba"],["/tags/Java进程线程/index.html","da2fde5b46f9d39b2a600a46ed41ddf5"],["/tags/Kibana/index.html","bec145d16ff7da6130758ae45ef31a2e"],["/tags/LeetCode/index.html","0769be0f6710cdb5d8315ea1ca8aa7b7"],["/tags/LeetCode/page/2/index.html","e0ebad5f1993fa4508978c4239e0a9d8"],["/tags/LeetCode/page/3/index.html","0ff0be6239321bb196d99b085c9b43e0"],["/tags/Linux/index.html","270b90eb5b6966c5608cb24001171dd0"],["/tags/Logstash/index.html","501c607d25f67e9b837fe9b42a806a06"],["/tags/Mock/index.html","c1e2b0dfff7a353ee65fec39536d4133"],["/tags/MongoDB/index.html","123cf76e091298d562a7c019eae660ae"],["/tags/MySQL-事务/index.html","ced8fff7734ec0d92e16e86c970182a0"],["/tags/MySQL-数据类型/index.html","82548f7e1f23fc86a758fa53b8ca0021"],["/tags/MySQL-日志/index.html","04a5f9376ee30af93eec2585f1ca33ca"],["/tags/MySQL-索引/index.html","d2551e8acd668034f49ac7c2a0599332"],["/tags/MySQL-锁/index.html","6abd89484331b95b84b555be6c222ed5"],["/tags/MySQL/index.html","f74451b32977bb2ac389355e2ab69010"],["/tags/MySQL/page/2/index.html","a28777544587308d1326f3de53aaed3d"],["/tags/Mybatis/index.html","a7a9e5c9fbcb260602a96b3ce2ca47ae"],["/tags/MybatisPlus/index.html","862137133e907e93811ef3ce4065e1b3"],["/tags/NIO/index.html","98f74e455778953cbfbab21976d55cd9"],["/tags/Netty/index.html","525439947ede5412e446bdbe38909842"],["/tags/Nginx/index.html","c157d7afe92c7eb65e15488fc6929f76"],["/tags/Promise/index.html","905ad21dea90e868cbca34bed949395d"],["/tags/RabbitMQ/index.html","23d0607d4c88acd30472e2d41913a85e"],["/tags/Redis/index.html","1e806fba92d3ecebba7f57aaf4066cd9"],["/tags/Redis/page/2/index.html","7693a68c25e47ce97402e739203e86ea"],["/tags/Redis/page/3/index.html","85bcdec8ffd64e78eac13de323218175"],["/tags/SSM/index.html","175d7f1a74962d587f5e80013449a8bc"],["/tags/Spring-Security/index.html","e102881c17c5727be702716044b88b8f"],["/tags/Spring/index.html","a60b7016242c41d79f2be519b245bcab"],["/tags/SpringBoot/index.html","0fdeb356c21d83dfe013ed7c9dea9546"],["/tags/SpringCloud/index.html","9fe38db1a6b701d78c95496e95113a9b"],["/tags/SpringMVC/index.html","1e0e145a0eda48ad05f0fb51a0fcb1af"],["/tags/Swagger/index.html","321070d256b63fe557bae6275e6a47a9"],["/tags/hexo/index.html","29299eccf37bdd0e80d188b68e87932a"],["/tags/index.html","390f8960c648fbf207bd47402e0ba51a"],["/tags/jQuery/index.html","198dc3b53bd1d70a3ec8cdeb34cd3683"],["/tags/java/index.html","056a5d652b207bbc4767d9d27507a63b"],["/tags/markdown/index.html","b579c5f3561ed5c998d76526d575e25c"],["/tags/noSQL/index.html","2c38c5d12313e82f8a57967c38462ece"],["/tags/typora/index.html","17cec9bd4d9f0bfc24a0efc83488cf12"],["/tags/vue/index.html","471887e2f8a5035c1d5bad249d8498a7"],["/tags/享元模式/index.html","4856588519e844c0266f97dd635143d6"],["/tags/代理模式/index.html","98cf3c62faccf286539e62925c885ce1"],["/tags/内存管理/index.html","ec42dc839e8c87995eebb76eb5bc9669"],["/tags/分布式/index.html","250c55e0d5a366ed6238f3966bf41f07"],["/tags/分布式一致性算法/index.html","95c2a07ca3884018f04e2e792e90e3bd"],["/tags/分布式系统/index.html","5ab0c9c85bc5f68e67d3d9dd601254a1"],["/tags/前端/index.html","43b75d8a4b8d177a71ed6e990d8576ac"],["/tags/前端/page/2/index.html","8a0402e91aeca6cd171a8a48abfca911"],["/tags/动态通知/index.html","d66efee8487fe9e150eeb4afe3f6c81d"],["/tags/博客/index.html","774694a1a70b65d2b5e5da88aaada1b6"],["/tags/后端/index.html","0b12c92eda80f35737f1fbd2bfbe7a3d"],["/tags/外观模式/index.html","c4e7b6fac097f00122059bd1d13706d4"],["/tags/多级缓存架构/index.html","483485701a4420c299b305f52f2ee27d"],["/tags/多线程设计模式/index.html","e0a47d10ab990fa8dca2aad2b5d9c8d1"],["/tags/容器技术/index.html","85dfdb094cc8724621a9a830f7cd089e"],["/tags/工厂方法/index.html","37192ef116832fde347365f1aea361bc"],["/tags/异构同步/index.html","4042af3e751abea180993dab77e80ed5"],["/tags/微服务/index.html","c3ba46c2b05729b25382d76dc75642ad"],["/tags/抽象工厂/index.html","c3f1defb97cb09d9a60d302c6debcad3"],["/tags/持续集成持续部署/index.html","2f8b6ac9da4f4cd4826e4045a538611e"],["/tags/接口幂等性/index.html","7d59230908fe99d7ef9bd3c0a9df0c54"],["/tags/搜索引擎/index.html","0fa0f1b6c54f4df063a8f206dbd33d6a"],["/tags/操作系统/index.html","5c6ad53438abc27520f32f3674761746"],["/tags/数据库/index.html","9bd71e5f6150a63bc22751bd65bd69de"],["/tags/数据库/page/2/index.html","12dd824641760740c37cd36e88ec45ef"],["/tags/数据库/page/3/index.html","b766fbae9601f8547e63e077b5da34b8"],["/tags/数据结构与算法/index.html","7d1be9af1060a63228b2e545cfd22f04"],["/tags/数据结构与算法/page/2/index.html","065a50e3b1f5efaa16c234e49f4c3a86"],["/tags/文件操作/index.html","a3969d9a6a43cc7c479574c82b367e14"],["/tags/日志/index.html","c205584586420e60e55b3e18647bfce4"],["/tags/服务器/index.html","4e73c4d3fa6d9cbadd619cca784b5efd"],["/tags/权限认证/index.html","6976d0f314735cdee6a6f6402981c07b"],["/tags/桥接模式/index.html","5a1104ccc5b55bb7b0a003d803ebd5ad"],["/tags/模板方法模式/index.html","8c6ee283137c82a505400f49f327811d"],["/tags/死锁/index.html","dfd1ed53d61457913809885241717fde"],["/tags/消息队列/index.html","27cd86cc2c4bb9a6abc59e49885cfaac"],["/tags/版本控制/index.html","7963a22d9a6b8e61d76f3cae33519362"],["/tags/策略模式/index.html","ea4ad85cd5bccb8491cd669e4c174a4d"],["/tags/简单工厂/index.html","78eea2031106d2e1b5c721f4efdd8862"],["/tags/算法/index.html","6b9f5090b9b0a8f2a9b51518ef9f7058"],["/tags/线程活跃性问题/index.html","bdc4d0c52e8cd2ff36e60fbdfe4e44b9"],["/tags/组件化/index.html","f632c6b1c5b2709289feb7f09585979f"],["/tags/缓存/index.html","dd4e682406513ed0d473705b12fcf805"],["/tags/缓存/page/2/index.html","2c56ca83ef70ae6903f284d368937639"],["/tags/缓存/page/3/index.html","bed2edb94db66b4b0638aa3cf6b1725d"],["/tags/观察者模式/index.html","4435974d7b7c91412f9b5b170471d9ef"],["/tags/计算机网络/index.html","da72a9f582a52f937c35656d835c4392"],["/tags/设计模式/index.html","067da9c7fcddc029d5dbff283b89125f"],["/tags/设计模式/page/2/index.html","5426f57a700d8cb2306b54b06e943369"],["/tags/资源共享问题/index.html","cb160d6a8e2f33c1842cb9ed5fd6770f"],["/tags/进程管理/index.html","25102a1f9577c6d12e88aa850985179f"],["/tags/适配器模式/index.html","7d508ccaf55cbfaa6c5801ab08db9160"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
