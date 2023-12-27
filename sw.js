/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","e652f4cbc9a2659503ccbc53274d1fa5"],["/2021/02/22/工具的使用/博客的搭建/index.html","34b0fdb8ee1909332504429c1938a72d"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","7fa4865f646127681cc8e450cb7e0150"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","65df22abb203947dd577c7069ae10457"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","d3cdd010dc9218ddbd11c3ad0e78ea1b"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","6315676231cfbada1328f63d9d23ddee"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","96572af6a27740def8c8ba01ce2599f7"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","6b1f98f9d490216e1a45b53d6f3aa099"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","e8e29c2e2883ed331ebe6e160ab9d053"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","1cedba82663bbf3c739a3ec9201d9561"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","49fa752a5c5db75bfaec8fb7039c0864"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","81fa18d0c8022ed95572de22b61d8581"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","3abf8f098649e8c5711712826e87960e"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","bb81d2759cdf4e27dc9b6102b2a8c5c1"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","a5a94e7d2541f9321a71f6b877d7b985"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","92a9602c61f03df05eeb2e77a73a01f5"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","c0e67e5a7ceae9f8af48ff25af342b95"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","7f286845f293c63e79b6a55650ada784"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","023e7ffaea66ef2254d498df7a1db3cc"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","5c8c2c72082bd530748a2660a7decdc9"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","5121135a1e64135029b730e537cb40a7"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","e71c603c0eccaad1631bdb7b6cd75312"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","55e35e4779b4f6b6f1576b0d9ece5872"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","ad3055f27e9ba8994fe948739a654e65"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","519e10e74624617f9fddc47961a43a39"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","f4d392abb1b85f28f8b6130bd3c21d07"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","bee02c01a5581d2a8ed0294bc3f55017"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","d7d13c298ec1473535a9ab67cce938c4"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","6b573a4211b435886922ba8c1128f857"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","4d39373ec9d71227ba3ef00bec43c47c"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","0c2af2538fe43da89a47c6b08047a7f1"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","053132d4d4fdc6023273428aea288d38"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","e5ac8b81d71d45e08898de6a20dd25b8"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","f6609a2219d5df21a97f8761e0384c05"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","8e39cc3e3a2f96634f9aa20654af30cf"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","c84d2c18bb59566fe2ac4649dc1157b2"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","5b21a96ad90891b2c9254e16a219707b"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","374c206cee67a3df2b0920769e6f9358"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","815bb59e26e87c05b103980487cbc99c"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","6646ad4cc016e4cc18f0d0bdd4f0f93d"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","81ac522161da7388ca0b5bb78d1cfc54"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","c7d171953d78614cf35f9f19a3e7e508"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","1bcbec39f958ab5c795332d3f910c7dc"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","cbaeeb8ea7ca0f00954b87cacc5ed368"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","09db01b9d9b5a0d7f0626c6ffbcdcb4d"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","48873c98b1892c68c7976b5e683871fd"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","39535daea99d7cffd15c869439cee893"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","4331b211abea667b32d2325c3f857b97"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","7e497cdbe392aace24caadaa3f1fffd0"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","34cf2b762e07d0f15ab92e9e859b2f54"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","6dfaccdcae43f0991c1b937829b25327"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","a090bbf1f0bc1c853f14625188a2689d"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","aa2f82846a8bd749fc1bed78f9e077e0"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","2197921f5055cdb3bb14940ff25c4f93"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","31dbe72e808821dc60d248b46efdb80b"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","0e6d4d3a3258063fd0e3cd2af24d3cb2"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","92b2bb8ba86c128bbbad2f7b365ea6a9"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","bace013d8df2bba312f8cd3277360be0"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","8342b58a819d8e6631b7ceccfe6fb89a"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","652df73f234eefb6879726b95defa5dc"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","1d7d199721b68ee746c7d09b9b2aba68"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","d513894052fc6c94631ea2eb80806547"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","89c33ed4e7af691328b6cbc9c162f213"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","8121b5cb3f37f224c9e9e9929076ff90"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","28853b0ba4e604fdff85e32b9e815d21"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","56204e6b0a3515960409c88259956061"],["/2022/08/17/前端/jQuery/index.html","b6da9cae8141d1b25b2a1ed07eada3bd"],["/2022/08/19/前端/JavaScript/index.html","93d4a10f745fa2daa6438e9405630403"],["/2022/08/22/前端/Ajax/index.html","30774a94824503f31a233c9ef05817e7"],["/2022/08/23/前端/Promise/index.html","43c57be2ec14d0121d7ed42c1a59c406"],["/2022/08/24/前端/Axios/index.html","2b9d1021b8933ab12a8d5bb49f025489"],["/2022/08/25/前端/H5本地存储/index.html","5b06d75cce5a6e2810ad925a809b2f26"],["/2022/08/26/前端/mock/index.html","692338b99447633b0cb60dba7ecd2503"],["/2022/08/31/前端/vue/VueJs/index.html","73d4b957f3ae47495eb2c5b9e5ea0760"],["/2022/09/01/前端/vue/vue组件化/index.html","c795d2678a8f2ef4ff0f9e805bf66e4f"],["/2022/09/04/前端/vue/VueCLI/index.html","2877ea9121d3f76840629b601404ce85"],["/2022/09/07/前端/vue/vue实现动画/index.html","3d808118539dc960966f417e815bca23"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","1251d30f901be7e4e99e197befff189b"],["/2022/09/10/前端/vue/Vue异步请求/index.html","60cc9b98348d30346c39009f173ba4b4"],["/2022/09/11/前端/vue/vue-Router/index.html","341b29fda95200836dbcb9d39276e2c1"],["/2022/09/13/前端/vue/Vuex/index.html","31a0f5626fcec9c6eefd38979318a194"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","c867be8557cb37e4297145b9eb5f1e97"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","ad155e8522d03dd916851d8ce98b47ea"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","02603ef05c62b7922f9a352d01fc9d00"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","a8898599351d053e5ca42020a683a4ec"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","95e3da553e2faa4b61f7da141d95f476"],["/2022/09/28/DevOps/Linux/Linux/index.html","7a119b97c6174fc39617cac1996cc210"],["/2022/10/02/中间件/Redis/redis基础/index.html","6292dc65dc8999d7f594e5b8667eb7c5"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","d467fc3a631409b639f8adb59b01b2e9"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","22a8a750975025744b4f19c717af92c5"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","b141711d205b683ed9d4afda4bfc4355"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","b18e449d63a3b05ea65b4e8fba15b694"],["/2022/10/17/中间件/Redis/Redis集群/index.html","10eca8e7a87ea4295d21faf15244b09b"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","ce610fb2b54b2d6d343c5297a2c9272d"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","ecb303403080673265c76171541c7886"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","f22b4ac4f4830e9f887509a9fbea4f0d"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","11507a6aaf9c61e6bde05575954ae5eb"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","756c358b6af5b12b1ca2a153b27782b0"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","11e7d573621edcadc8ec466c2dccf0a9"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","fb6d335f8126fc4d7d39332f3a84c2c2"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","5a9a9194792aa768648cffc5603541fb"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","e71a11f07ad93b4746a0ffa93929b68a"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","80a7a507c435cda7fdb42b4ce980306b"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","1dbd1a693e762d8de289939a44ceaec7"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","783e17567802bbac19bdea66d5f6ed83"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","bc93dc2180479dddebb525b7360ac239"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","3866540a25f66460e0a03bbf8f747914"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","c98f170f52719865c546784038ca004d"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","f243cbbc92a63b4f2c07b36fc07df579"],["/2023/03/10/DevOps/CICD/CICD/index.html","a8e002fe374a3b9f22a1aeeb95aaa9c6"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","e46c3863f9c8461eb57a5c22178cd468"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","8494d6980c02121eba9308aee7347c0a"],["/2023/03/13/Java/NIO/NIO/index.html","8cb59f10df4cbbb9317bfe21fcf84515"],["/2023/03/14/中间件/Netty/Netty/index.html","dc16c1df5da95c5b58d92d5ac4c93771"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","412af609343b549d8a80065db7f99411"],["/2023/03/17/系统设计/分布式系统认证/index.html","e177371b2d0eb16306b9e6109f3910cc"],["/2023/03/19/Java/JVM/JVM概述/index.html","5d90a50b118ebc3dc24a55f26b4baa8b"],["/2023/03/23/Java/JVM/类的加载过程/index.html","00d062aa6d88f44eeee9dcef66f8b003"],["/2023/03/28/Java/JVM/对象的实例化/index.html","6612bc69fbde19d137092c19e200a758"],["/2023/04/01/Java/JVM/运行时数据区/index.html","553594fd1347f00d4ef1f0f8a0ed636e"],["/2023/04/04/Java/JVM/执行引擎/index.html","745499e5b1b2d182b8c864bc33d5da5e"],["/2023/04/06/Java/JVM/对象引用/index.html","6a3051cda3885c966df5a199e5fcf2cc"],["/2023/04/09/Java/JVM/垃圾回收/index.html","fb7b7ab07715237031eaa6f29dfe09a2"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","67ca3ed11e29d3d77b94cc509a40f822"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","c6f9c5bd5305ac6460a206a08ceb0f89"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","2c58838004c0c10c439ff22e6f022452"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","52d35387e45dead9a440c0c9873012fe"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","97da07347065261434204a96a5ca2526"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","0589ece2a4aeff2b682b850dcaa73937"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","83eef7a4fcf65e9318802222ec57d4c3"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","dc2a74ba118b22cae5e924d6c127c0fa"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","d0787e0dee891e030002f77878ede617"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","0403ca1bd2289d6f612e77cd828cb953"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","c6e55ee3cad416f347729f95fb38297d"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","ef65aad3526657e2459b105898d88653"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","66d3086349f4db62dca19c86ec7d56b4"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","cedb6ce4c818cca65199d6347bfab4f0"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","c0d1b8ca159f2647080959572b7a2b51"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","e1ac6a29e7bca4b53e3114180f218944"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","0aeada910a49665e6bc8410018406934"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","243dccb7f6c0da9925be25fe36f26132"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","5da633d4493236b462bc8c1b5039c8aa"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","d3f9887ee947cdb116f822747495441d"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","355a2932f8289f14cd4a01a416c23891"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","f457f8cb9f4f91e7e11816ee10f6894c"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","7a445123ac42df7fa08e4d924d8adc7a"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","bf8df469f88d232f8b93e27aeab3a18e"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","b17212c1d81be174ee04606e35ff4056"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","3fe9dd665cb51f877d0f41bb74a8fc3b"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","395303bc9cb548dd7eaf41d0b91a8b47"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","8f52717449d6b723249d69bc0be729b0"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","dd1bdebb08df028cf622ff0c250c575e"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","51496b35a3f91eabed9103266c3bdebc"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","1051ae7e92982f5dfab464d16fd3cf9b"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","e73588c0d5a8aab52f8194e0db90405d"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","d6e99dd593314bd940bec35a8ed66d24"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","2f6762559319e03f33bb9d4756e64e34"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","9fff99b8f3116b4aedf29b60c098eb8b"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","2d67fd99aae1b2c4fc0e0d8c70e3a17c"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","ac049725a4be6d6fc8046cf7b8e2e95e"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","c66f59c16184548275c7e54b45b3c458"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","b38ea5ceef9483ff1775ce262df0726e"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","4caae0662285db20248ec4108b95610f"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","40a193b8dd2d089c752b3b097888c852"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","e3b1b6d8d281d8197fab3a16a99f7791"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","45016bbf1008822daba7bac55e6e089e"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","f2020f71fd8cb9fc5f2e9d163bca6b9b"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","06590ce76013309f2ce9efa741ae39cf"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","a59ececf6ed6737fe0df68fcedb7d357"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","c880bf212dde6b04d7d3b87dc9c1bf4f"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","6ab0748852fc9c013e31bc59f16898d7"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","e47c50dad2cf0d8c3e52309d572dd1ac"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","f86fc3ae8e6828d385732ef477af6aee"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","2c985ffbb3d4e910ffbfe692b6bc892e"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","cf2b15f48c94685ab04a463c7e7753a6"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","753b9ff8b4cc4094494970598eaae323"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","747e05f1cb0b9be6554c8c02538e6731"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","cfccbe4caaeed945bdfeda13e18b9f82"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","5f044d21b07829c13abdc68e0d1fe9d2"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","9c109cb903d27f630e905e5fb472d3c8"],["/2023/09/04/中间件/Redis/Redis事务/index.html","b3265e5a68cb3981ee3c9852b119502e"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","76e85e318cd82d76853723c83161cca6"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","ced1d92d51fc58e2a01967077f9ec0d0"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","373e3407056774942912da6f8640d150"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","f636e1b8053580ed68e3c39991d592ce"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","bbee31c93e054e6781fa360dcc5b4d89"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","b33dc495afc841307ab3e6a6484a2227"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","fac73b29a1ce51f9deef212e14948302"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","130ec8668c27d7c57e360edb42a24ec4"],["/2023/09/22/Java/NIO/零拷贝/index.html","674bed79fe1f4d99855cd25e8cb70f91"],["/2023/09/24/系统设计/JWT认证/index.html","4439b0c0aabe3d9da1399edb533e24f1"],["/2023/09/26/Java/NIO/Reactor模式/index.html","c53f62405c0dac46ee6a99ad1352b5c9"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","13e40473bcec97540e2fa5309c76c76b"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","da53726b9492088d256ed71da9056f58"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","4bd44379e5779058e70fcc09d656d32b"],["/2023/10/09/Java/并发编程/共享问题/index.html","8a4f4e630d07cdb1f8477422a0d43570"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","c5152ff146676bbe675b1c4b31004abf"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","ee9870bd611afbebb811146b0046ee24"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","2d666c2699e5b4febc2d0f6254ddd14f"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","50c66644a02d8da01149f62d7c407df0"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","0ed867cb7703d8eadc6b57133e859ff1"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","0dac1438fa06142417d5db3b64740004"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","73d977b70b3b33446a0910e211097f81"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","eee27e5fd3f2cbcf5a6ad97ff0b025d6"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","8bd31af62e9106d04156c8275e7e709b"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","111a9a231ae37d67d96f95cd77f944cf"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","257aba64f464c5c8f5d3e9128209854c"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","4282a5161358e49b47cc62e42a3ecf17"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","d652563fe38edf4303d76ef2b57ab51a"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","2d28ff6ddd522db86a10f010b1c9b5cc"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","a8d88257ac1820a718643c5351b2a8df"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","62fd15eeb8e1ed080d84095b32371a56"],["/2023/12/05/系统设计/开源协议/index.html","ba99d9b192c4dc527648b4a3657b3bd5"],["/2023/12/09/MockMvc/index.html","fc5f9dfad9e8a71547a17b256d551617"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","9ca750a32545eea1f6aee8aceac8e04f"],["/2023/12/19/MySQL读写分离/index.html","6710ddab04f224cfd350849641958c50"],["/2023/12/22/MySQL分库分表/index.html","474245bda27cff98c27ed19a4b61cbf3"],["/2023/12/27/利用NoSQL优化数据库/index.html","5a7ad0ce546429017495aa014f2b8b2a"],["/404.html","ec2e6fa3c5598b37feb15b2faa0177f7"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","a789730c39507a492d794d65a7a12e05"],["/archives/2021/02/index.html","d9a403e50220a719b1cb27ce3fcf9311"],["/archives/2021/03/index.html","b96c6c56e322e7b1da8bf7794ab491a1"],["/archives/2021/03/page/2/index.html","4985d0d1caae8e50012f11eeefc9071b"],["/archives/2021/03/page/3/index.html","24d3c3e70a2619a05f935432e7180089"],["/archives/2021/04/index.html","c94ee890620b5d86ef22ff951f215785"],["/archives/2021/04/page/2/index.html","8c7ac5f0d922c6607fdd5fec8d4b8c9d"],["/archives/2021/05/index.html","3cca1f4081a7f20752566e8f7d9715e1"],["/archives/2021/index.html","7bed570b0abb45c69da014f4996b4b1b"],["/archives/2021/page/2/index.html","60bbc3ec89671e2434daf6aff8a0b36b"],["/archives/2021/page/3/index.html","e5a2dd41e8d737892210e1cd913d20a7"],["/archives/2021/page/4/index.html","e338aade76af669f6194438bbb90c896"],["/archives/2021/page/5/index.html","833eadf60e8b9014402a97cb84ccb2a6"],["/archives/2021/page/6/index.html","a510f57e4e590ac7e113c2fc97335608"],["/archives/2021/page/7/index.html","859e84893e3dfd1b76ee2d2c8d84beac"],["/archives/2022/01/index.html","25f9c901b7c07707d3b402cec4df467a"],["/archives/2022/04/index.html","cc699f05757155fd54c1ab0b33179b4b"],["/archives/2022/08/index.html","b4c3186ed61e94de6a8723c82a61873a"],["/archives/2022/09/index.html","f72b0e68abe7e2178ee594a595a37602"],["/archives/2022/09/page/2/index.html","0d2b11e2236beefbf48fd0318ed0f57c"],["/archives/2022/10/index.html","506b409c4862fb73066e15d5b47f9c09"],["/archives/2022/11/index.html","fbe851723a511d3b288d52072d721cb9"],["/archives/2022/12/index.html","dd33409b4484aa0d070fa72392acedf6"],["/archives/2022/index.html","517598435481b0cdf75e6c999324e57d"],["/archives/2022/page/2/index.html","f1125820ebcc3b81f958641cae54458d"],["/archives/2022/page/3/index.html","ff58ce15fd41dd3d869f1a87c8727d97"],["/archives/2022/page/4/index.html","d8772eca2dee8c172009bfa2db8a2d4f"],["/archives/2022/page/5/index.html","ffd7f4a2f7c35239df387afeab1c312c"],["/archives/2023/01/index.html","c47f56a7db4f3616afe97a7b15410965"],["/archives/2023/02/index.html","696549d83cfbfa643f4e02c8557812c7"],["/archives/2023/03/index.html","f92afed9f6e55479dbac79df0373376a"],["/archives/2023/04/index.html","e34204975b5968743f51f58634ad8885"],["/archives/2023/04/page/2/index.html","ed5112e3c3ccc654180338391661d59f"],["/archives/2023/05/index.html","02097ad15182e6c07b0750207e97900f"],["/archives/2023/06/index.html","cdeeacf4f49188f60c3d80042bff3627"],["/archives/2023/06/page/2/index.html","e7bff550ee41902204606067b0ea9e47"],["/archives/2023/07/index.html","a71eff20ddc1fa3f113d95e772bed6b3"],["/archives/2023/07/page/2/index.html","188e611047221eb9f82863183fac43f0"],["/archives/2023/08/index.html","a9130fcf9d9e5019c4da67b5642a16da"],["/archives/2023/08/page/2/index.html","09fb63ff1851d522a839f804dec9b34a"],["/archives/2023/09/index.html","41a3a1a7cc439cef1b344023e8a6f2e6"],["/archives/2023/09/page/2/index.html","5718d0d729513632f9a0d0da564dcfe5"],["/archives/2023/10/index.html","b42729e51045a12ea705cbca02afb7a5"],["/archives/2023/11/index.html","f2f6384d2212d5cbcb7bcd6171974943"],["/archives/2023/12/index.html","ef6ea10758c9adc11078b511f087731d"],["/archives/2023/index.html","aac6820624852ff0d4ac98d71a7f6ae7"],["/archives/2023/page/10/index.html","339e32ee6eedae76af38f640efa27e99"],["/archives/2023/page/11/index.html","21b3dc4867f75a0ee5accb539d01525f"],["/archives/2023/page/12/index.html","435374d92a5172f1012c7d7ca58ad698"],["/archives/2023/page/2/index.html","0cdd2b2875c19982dd81b273afab0094"],["/archives/2023/page/3/index.html","c4c3fd8351aeff5fb9d12a71d9c2f7a1"],["/archives/2023/page/4/index.html","6094530df924d7c6e5cc9720af248316"],["/archives/2023/page/5/index.html","de85e54b8c5ec81081933edd6ec28a67"],["/archives/2023/page/6/index.html","90d0e6fa03ba7664adc821fd43006d75"],["/archives/2023/page/7/index.html","0259ae04cd92755c13aa287dc4130603"],["/archives/2023/page/8/index.html","34609a16eaa296b66a4c40d3106faba4"],["/archives/2023/page/9/index.html","ebb2c0a0e6583f2c177dd1f2d6c343ee"],["/archives/index.html","a39f206ce74616c55ed3c6dcd4085b82"],["/archives/page/10/index.html","c1d1b463608287f5e94bb75d0d1e0347"],["/archives/page/11/index.html","8c77044aafaafa1b00ed1ebbf72cf06f"],["/archives/page/12/index.html","f3ce4f233b487df325491ef56184cc3e"],["/archives/page/13/index.html","74e47487c7d8103e28b3a2a22b620679"],["/archives/page/14/index.html","aa7fe90e415c90f4ead97da68031c746"],["/archives/page/15/index.html","36cd7193942c37b26f66c8672340b1d5"],["/archives/page/16/index.html","c152b897c372727d0d3df1fadddc47c2"],["/archives/page/17/index.html","e5709a6ac71e5f9d204a3fd9c2679a62"],["/archives/page/18/index.html","5f5ea1c6a9b4256d57b2d393ccfc603f"],["/archives/page/19/index.html","b48eb89f1ec52c2fc9d117af07208250"],["/archives/page/2/index.html","925851359a01b408a968c33d9b118093"],["/archives/page/20/index.html","63e486a196ddc4aaa1887ea084acef60"],["/archives/page/21/index.html","066505f1ae163e3b8c29c6fae34d3c1e"],["/archives/page/22/index.html","54acbcf732ba9e0f7cfba2c17047bd11"],["/archives/page/3/index.html","d5201f80055f4fad03553c11b44642fe"],["/archives/page/4/index.html","02f5dc2195c6429ec59693dbec389ff5"],["/archives/page/5/index.html","13e1528d74c30d3a4dfafb6885da897f"],["/archives/page/6/index.html","f2cf02df9507f0b42fc83689a4a0087b"],["/archives/page/7/index.html","f8aa0c43eb21cbdd0465030cb6474112"],["/archives/page/8/index.html","a31627fc2aa17222dbc66e3b082da316"],["/archives/page/9/index.html","1cde0d15507145ebb1f2f17c246ab508"],["/categories/Devops/CICD/index.html","b0ce9986a94c6fafaebe5e7bee506049"],["/categories/Devops/Linux/index.html","9e1806e9c7a72461b9203ddeb9c252ce"],["/categories/Devops/index.html","a2d5fbfe236f1154c7ebeaaee6fa6b0b"],["/categories/Java/JVM/index.html","57dec79f89eee04fbf01c024be439502"],["/categories/Java/Java基础/index.html","dcf1f1d5e594896eee2a968e00c93b80"],["/categories/Java/NIO/index.html","0f94f73723e5ddd7aaba800d7ce0bac6"],["/categories/Java/NIO/原生NIO/index.html","9024fea72e6b17fc9668a326965034b1"],["/categories/Java/NIO/文件操作工具类/index.html","be0b8d0fbc1d7718f3b23b8e6047e139"],["/categories/Java/index.html","e27028087c949965e07e8a62017643a9"],["/categories/Java/page/2/index.html","c553397dc672982770748dbaf267bfde"],["/categories/Java/并发编程/index.html","c1de5c373deb8cbd8a47b60c22d13525"],["/categories/Spring全家桶/Spring-Security/index.html","9d763a3be2f70ac6222078c9698fbed0"],["/categories/Spring全家桶/Spring/index.html","e7d9f87cc8dc8c0779779515196d4d22"],["/categories/Spring全家桶/SpringBoot/index.html","805280eced9e982a005842e99a8db62b"],["/categories/Spring全家桶/SpringCloud/index.html","aaddea3512bd552a3a2333c540efcf5d"],["/categories/Spring全家桶/SpringMVC/index.html","aa77005d1aebe7f1064d55ca59d0b97f"],["/categories/Spring全家桶/index.html","ab578573c6856dd027a70a147aee3e88"],["/categories/Spring全家桶/page/2/index.html","d212c0adaf2cf73f2dcaf65198c7acdf"],["/categories/index.html","15126c8cb144e21a8bbdd0784c4c0e2c"],["/categories/中间件/ElasticSearch/index.html","7d7db495133bd52a2cd7484eab29a8cd"],["/categories/中间件/Netty/index.html","847012b2a733201ac3144a43f5010c31"],["/categories/中间件/Redis/index.html","6cd09c13a817123b1ecc9bbd01c5fbd7"],["/categories/中间件/Redis/page/2/index.html","68946d744cb9fea3168e5114fc0cb786"],["/categories/中间件/Redis/page/3/index.html","d6dd8981c5754e2fed787a9fec345805"],["/categories/中间件/index.html","1a758eec470e48cfeefd6751abe3a9fe"],["/categories/中间件/page/2/index.html","95e0b78fa895d997955c92804710360a"],["/categories/中间件/page/3/index.html","6204d17760c2b94fcf922d00aa7cdf3e"],["/categories/中间件/page/4/index.html","67a3a264b4b5e01b84018da1d2c89a5f"],["/categories/中间件/消息队列/RabbitMQ/index.html","b9912896e8cf2adc0f7da92af862d805"],["/categories/中间件/消息队列/index.html","be6afc8292c9590b1305728bd6ffcb85"],["/categories/前端/Mock/index.html","5c0babc9aaf509a5cd3df55e5a948506"],["/categories/前端/Promise/index.html","7e90171e74e3351f3649d3fa1fde9b9f"],["/categories/前端/Vue/index.html","a2bedcb364bd85224a203ca8397bb346"],["/categories/前端/index.html","0a50939cd9f0d41ba7892892feab3562"],["/categories/前端/jQuery/index.html","ed332f2e79923b802b48187d93072e27"],["/categories/前端/page/2/index.html","d94030a313b074f0126b9d13d99d4e15"],["/categories/前端/原生基础/index.html","62511ecc0a666d169bd764b75caca644"],["/categories/前端/异步通信/index.html","1dc35ae7976d696fdde51650869c5b3e"],["/categories/工具使用/Git/index.html","62348c69d699b7f6463cb230edd80e1e"],["/categories/工具使用/index.html","2fd6e255ce2e51cc0ae245dbade161ab"],["/categories/工具使用/markdown/index.html","2ef8147f4ee6637548d5be7ca24bb5e5"],["/categories/工具的使用/Docker/index.html","24715d3edb3f4d0d9bf43574de0df4fb"],["/categories/工具的使用/Nginx/index.html","c30f359f7b02d134b6479128bb9cdaeb"],["/categories/工具的使用/Swagger/index.html","5d9c463f9adb2eff0a220bfd0f2031fe"],["/categories/工具的使用/index.html","d027a1dc8a9060cc798c4dbfbd55ea1e"],["/categories/工具的使用/博客搭建/index.html","5ce5aa80f07cafdc75242b2acbfa89de"],["/categories/数据库/MongoDB/index.html","a61198881b3cb52e26051c0106fa5485"],["/categories/数据库/MySQL/index.html","2f132211bbbf5dace31477cd1035b35f"],["/categories/数据库/MySQL/page/2/index.html","f0533d1e680ff9ca5a49ebf83c1ab487"],["/categories/数据库/MySQL/page/3/index.html","698bb88fdf2ab10ed7dd5cb29bf1f5f6"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","dcb1817730628a5219ec4041d58afec3"],["/categories/数据库/ORM持久层框架/index.html","5dccd5fee3e1dfd2eb34172a83ed41ad"],["/categories/数据库/index.html","9578acdefdc78a1df1a977d66a9537ca"],["/categories/数据库/page/2/index.html","0b2ca9d2ec0feb1f02b65992e24a8e99"],["/categories/数据库/page/3/index.html","2e7bf3fa8966300fcd4d812485e66cc8"],["/categories/系统设计/DDD领域模型/index.html","fcfe1e0e17004c9a6d92080d9180d926"],["/categories/系统设计/index.html","a9518782ef1a619f52ce53a78979ab99"],["/categories/系统设计/page/2/index.html","0d3c98593604a0988f5bb731647bf768"],["/categories/系统设计/page/3/index.html","edadbda9b0b02c0b7ec5ead66b2bf43e"],["/categories/系统设计/page/4/index.html","760b350dc43e819dd1e61f4ec2682880"],["/categories/系统设计/分布式权限认证/index.html","e4b8aeb408759008f9afdeb98ea710be"],["/categories/系统设计/分布式系统/index.html","da9a57169211074032edb09a38a0e835"],["/categories/系统设计/分布式系统/page/2/index.html","ed1bc5c061cecd1cdd110a99d1e9779e"],["/categories/系统设计/数据库优化/index.html","c6f35f52002c7c70af549ae69bc532f6"],["/categories/系统设计/设计模式/index.html","45a0ba9ac64a38d5cc1226e10c33eff0"],["/categories/系统设计/设计模式/page/2/index.html","a2ea2af4b57660aec58b3613e2a62cb8"],["/categories/计算机基础/index.html","e5954edd591d23e33ca01cb8bb7056c3"],["/categories/计算机基础/page/2/index.html","3a5a6d46d96659b31f19e135dca7375c"],["/categories/计算机基础/page/3/index.html","b41d9e22c61d76b74ff79f4346b33e39"],["/categories/计算机基础/page/4/index.html","197fffd54adad684acee0f7a9351eeda"],["/categories/计算机基础/page/5/index.html","7a837f47a03c1b36d53c052c69e50799"],["/categories/计算机基础/page/6/index.html","affa6400af35c354f134910185b2a566"],["/categories/计算机基础/操作系统/index.html","73bced43c47fd3865dae06cc8e062ca5"],["/categories/计算机基础/数据结构与算法/index.html","c7afc8da79f6df0b8940cffdc14e69e9"],["/categories/计算机基础/数据结构与算法/page/2/index.html","76cd82e36efe00732839f23349573d8d"],["/categories/计算机基础/数据结构与算法/page/3/index.html","36f4a06b8ed260286789e90217c7b5d6"],["/categories/计算机基础/数据结构与算法/page/4/index.html","75501882aa81d2c115bac077dea1ffb4"],["/categories/计算机基础/数据结构与算法/page/5/index.html","6dfbc4d725be3fda7803ccf35fae94a6"],["/categories/计算机基础/计算机网络/index.html","c8c2d7f933066698bbf62837ab4c7f2a"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","116e50221eb442a4d11ec824fc5e2586"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","c3a61e8f601afd472e73b1cb2afc3304"],["/messageboard/index.html","b2eeef5178233e83dba6674cc3d22fb0"],["/page/10/index.html","7f08d671c91bd8d6ba1dbf12d494dc6f"],["/page/11/index.html","ab411a66e7e08ecfd4429c1890c47fc8"],["/page/12/index.html","6e8093f4fe58fbf46f79c071624ee967"],["/page/13/index.html","3bb7d21f6ac2723803efe511a94004fe"],["/page/14/index.html","d8b70bfb90221672b614256cb62d7dda"],["/page/15/index.html","096030dd1661d6cc3a56e34f2c59e4b1"],["/page/16/index.html","38868986452e906477730b8974f0a2e6"],["/page/17/index.html","1faa1ab5d02e0291823f992fc9e184e5"],["/page/18/index.html","fb3d1cffc93baec36bd8dd83dfc8ecb7"],["/page/19/index.html","7917cc88a4c0ebf66e20b69869e82935"],["/page/2/index.html","c50132eaf02a379dfbf7a8f26a415670"],["/page/20/index.html","8eb5298353d4aa7536c5fae60d75b3ac"],["/page/21/index.html","df8eb21eef929f0776afb75624d79d63"],["/page/22/index.html","a3f37d7c1fa4117ace5d3eb176b35309"],["/page/3/index.html","ea3a27689d9d8e0b67e7bfa0b5e73897"],["/page/4/index.html","a53819e88014998a53a060dccffb6818"],["/page/5/index.html","45dfbcbd7e25be6c181e8fdcb0fbb5af"],["/page/6/index.html","c8cace62cbc8930d230f5153719411c6"],["/page/7/index.html","b52b91176ec44a50412cf0ca7ba6b295"],["/page/8/index.html","751d4ae1ead729541ab3afe2d21fe6d3"],["/page/9/index.html","3be1550e2b9fcddc94832837241d31fe"],["/sw-register.js","a12e0e35e366c1e88cba063b90cec871"],["/tags/Ajax/index.html","28c9b4eb5597b47b307a6f5ddc46bff7"],["/tags/Axios/index.html","d99eb4c1e89a2e5a364275215b3b54ee"],["/tags/BASE理论/index.html","64243fdf737eab0d3d56000fe1d5b2c5"],["/tags/CAP定理/index.html","19459e1d709f95d3accb2e1a7fcacc0a"],["/tags/CICD/index.html","c8353c3d21136caddbb176ded377800c"],["/tags/DDD领域模型/index.html","7286eaa533b269063a1f5b03426afb2f"],["/tags/Docker/index.html","e97916c366d7d7c045eeb52ec02ba158"],["/tags/ELK/index.html","4b49f585e847a71099fe36fc4e5f52d4"],["/tags/ElasticSearch/index.html","c387ff322d0af7d2e95340785776eb63"],["/tags/Git/index.html","729fba27f50cfad4e728f0b4bf8481e0"],["/tags/H5/index.html","c715dbd95af03f8dbfa4e2359545a819"],["/tags/JVM/index.html","f537974dab5edb1f2889d7b1e0ea32c6"],["/tags/JVM内存模型/index.html","6664b0b56f5de7111b7771475135b2b1"],["/tags/JVM执行引擎/index.html","e00a9544a4de8fdf86e68c8868390a43"],["/tags/JavaScript/index.html","ecc0f8810aef002b5268f1370fd11f8e"],["/tags/Java内存模型/index.html","8e633e98dc251ae5d2bde098e5ac089b"],["/tags/Java进程线程/index.html","2368612d889ad59471eb27a5e2456312"],["/tags/Kibana/index.html","20efb6521ae237c766e3fc6e0b458356"],["/tags/LeetCode/index.html","ca3c1e59b5f80ea2cbe1814873986662"],["/tags/LeetCode/page/2/index.html","fae8373d4b899f4582ea3d8b94f987d8"],["/tags/LeetCode/page/3/index.html","fd90e814dfef9c0550a66a87b75b1c72"],["/tags/Linux/index.html","7a36d2938bb3bc831aa466a10dcade7d"],["/tags/Logstash/index.html","54fa0a8beb9e5db08086c79b1320dd75"],["/tags/Mock/index.html","af3db061d38d856388422aa0ace00aca"],["/tags/MockMvc/index.html","e7a7eb193602c45cb04e93d1441d41aa"],["/tags/MongoDB/index.html","9f40584093a09ee8b26008e578f5ea88"],["/tags/MySQL-事务/index.html","22626d9dc6934858c2c91c73be98eb78"],["/tags/MySQL-数据类型/index.html","3c89f6cef5e41fdfe25495a06175875d"],["/tags/MySQL-日志/index.html","e836af77ea7e1bd2490f8bcae19a33df"],["/tags/MySQL-索引/index.html","6e06b9e0ab9934040c2e86a3135376de"],["/tags/MySQL-锁/index.html","fc447aa4a1b8c5c1cd0c3e68546240ad"],["/tags/MySQL/index.html","552bd7a032451050fca8c1b5f6a28be5"],["/tags/MySQL/page/2/index.html","23b9d33a89b65f73bad3c16cfd6fead8"],["/tags/MySQL分库分表/index.html","6d67c1b177c1217a7a97ee1b765707f0"],["/tags/MySQL读写分离/index.html","823ddad77e9fcb3bd1c09bf4ea16e8d4"],["/tags/Mybatis/index.html","440e5dc83e534232e62c6d1290cb86f2"],["/tags/MybatisPlus/index.html","8353de6d6d1f5f946d91aca8022b3884"],["/tags/NIO/index.html","51d2c374f906cebdf17862fac68425e3"],["/tags/Netty/index.html","cf0b4efca215bdb3595d208a8cf5ca1b"],["/tags/Nginx/index.html","d4f1b0487ad713ab5fd160056e716ad4"],["/tags/Promise/index.html","d7b939573b9cb6d67548823d74f3a9e6"],["/tags/RabbitMQ/index.html","8219e3c568c17347d45b41308334577e"],["/tags/Redis/index.html","4abbf0c7ef0d6499637c3bb286fbf674"],["/tags/Redis/page/2/index.html","9b5b6d845377b6e33e17b4c28ecd45d9"],["/tags/Redis/page/3/index.html","a60ee68f995afeb6bc8f6dcdb0e18484"],["/tags/SSM/index.html","788d1580c9bd957373de7e771139e928"],["/tags/Spring-Security/index.html","2dfe61f3b1a7a564735079ec6d098bdc"],["/tags/Spring/index.html","e9fda60da624c008c88adf35d87af18a"],["/tags/SpringBoot/index.html","e79313437bf48e089656ce5b2c5a16db"],["/tags/SpringCloud/index.html","157190d39f26ff88af8274793bbbe5b2"],["/tags/SpringMVC/index.html","61f8228ddf92e440323f6510eea791e1"],["/tags/Swagger/index.html","45aa667c90922bc366503bb5fe911877"],["/tags/hexo/index.html","8e2bac5eec403f4f1c3b745c3ef55247"],["/tags/index.html","08956e24eb460f6579a9d5a191cf85e3"],["/tags/jQuery/index.html","88e2e8649fe84b47d6ccc7fd60701b0e"],["/tags/java/index.html","a1d3bfbc0764b0560d3c3355a8a0c940"],["/tags/markdown/index.html","76d3bc1c55fc7ee9a5ee6f4a80843393"],["/tags/noSQL/index.html","bd1e506382516852b730a05fee892837"],["/tags/typora/index.html","4e2a6a0df736114c73ad36313ce96393"],["/tags/vue/index.html","17718280b95cd8c5577f922c66778c6e"],["/tags/享元模式/index.html","9c15060a3ced5660fc1e1e646c05d8bd"],["/tags/代理模式/index.html","afb2a01d5a831eb311a03d271c569112"],["/tags/内存管理/index.html","714ddbee71ffc671a1c48bfc3e463d79"],["/tags/分布式/index.html","197d11df58371924a140f09637c6932c"],["/tags/分布式一致性算法/index.html","bef4691c89583af341533f16b84be664"],["/tags/分布式系统/index.html","ebaf3487864feaa0a6e709dbf7c391cf"],["/tags/分布式系统/page/2/index.html","f442ceab4346d919908953707b85a460"],["/tags/前端/index.html","180b7c67085063024320d35138c94dbe"],["/tags/前端/page/2/index.html","c801e9a812db71a4ab66ba066bf9acae"],["/tags/动态通知/index.html","f7e3e1c8cfb08f55559e1aed80569e09"],["/tags/博客/index.html","44025d9d8bc357252cc0db115e2b697b"],["/tags/后端/index.html","1ba56f85336c8fce5182324ceefb2d55"],["/tags/外观模式/index.html","8191f9397b133fe8c7c7dbc5715ef246"],["/tags/多级缓存架构/index.html","4d0786cd3a45f57f01223bd257afab45"],["/tags/多线程设计模式/index.html","2868342b88cbf13d8eadfbdf393d7e71"],["/tags/容器技术/index.html","7ef67e61c7eb904de106285662703566"],["/tags/工厂方法/index.html","6340add497c229ed854d958f12ca026f"],["/tags/开源协议/index.html","339aac595dd3e6ba952787e773af3d54"],["/tags/异构同步/index.html","12633e312a8a0f937b1e4958a38d3b6c"],["/tags/微服务/index.html","cc4989cb1102fc40c8462f8446e382c5"],["/tags/抽象工厂/index.html","6a8dbd378b22040e397e69a83b7bad5d"],["/tags/持续集成持续部署/index.html","41c9b19f44a81c0ae6cf21b6e4d21613"],["/tags/接口幂等性/index.html","e93771206ae9dc9753df2006dbd99ac8"],["/tags/搜索引擎/index.html","d81dc85fce159acb02bb802da3cdf3ec"],["/tags/操作系统/index.html","d7c59d9fc356051930842c4feb18cad9"],["/tags/数据库/index.html","a94a42031aa75b5cf19446e573ab3379"],["/tags/数据库/page/2/index.html","e2535d02f10a20b94aae97f34724650a"],["/tags/数据库/page/3/index.html","4c21a14fb5d5f05ecde498ab586e8f1f"],["/tags/数据结构与算法/index.html","bae51ef81bce36006eb48d0b33536f6d"],["/tags/数据结构与算法/page/2/index.html","c568456afb40da8a9cd592dbeb89a98f"],["/tags/文件操作/index.html","710a71517a5578bfb79e6a77b9fecc0d"],["/tags/日志/index.html","697db413e4912f778243b899d7c04fa7"],["/tags/服务器/index.html","99c3473dc059d9eba03038f3ad10e428"],["/tags/权限认证/index.html","76fd9baa7badab563d7809d4d52d8662"],["/tags/架构分层/index.html","f8d31d7d6e1386635395b1d0c0bb16c7"],["/tags/桥接模式/index.html","7a23d017a2f308519fdccf3315d734d5"],["/tags/模板方法模式/index.html","498991bb3d2c30a0ac559e1ce5d06e37"],["/tags/死锁/index.html","8278c5029fdad0559c74d084d0810a7c"],["/tags/池化技术/index.html","71f85ce5135e174acfda78b3838c2a82"],["/tags/消息队列/index.html","ee0953c08e72333c708d35103fdc8389"],["/tags/版本控制/index.html","32527b46fcaa8144201ce8a371e6faaa"],["/tags/策略模式/index.html","352a318f10285c2d444d600f3674383b"],["/tags/简单工厂/index.html","f49a4834157890a3dc671d6a4cf28df6"],["/tags/算法/index.html","8f826f050a118430067d736952b11be1"],["/tags/线程活跃性问题/index.html","3da8a11ddf714bbd251a5bd6db44b2ab"],["/tags/组件化/index.html","99201c4fa671627126e4021d130f0683"],["/tags/经典限流算法/index.html","4d1e0c003c1b54a1ed27de176c2022be"],["/tags/缓存/index.html","7b576e9d984d1b948b9615f86eb05112"],["/tags/缓存/page/2/index.html","f01801d26563be8b739f36d66fd4e438"],["/tags/缓存/page/3/index.html","228289b00fcfebbc4d286f179c954d55"],["/tags/观察者模式/index.html","324a3760cb167ead5612fe443915be62"],["/tags/计算机网络/index.html","1b8049d6bc33a3597193bbe79b7d3f79"],["/tags/设计模式/index.html","94fe85e262492356c8c6206a6184c7cf"],["/tags/设计模式/page/2/index.html","e4b08abf06bd8a7d176690836cf478c9"],["/tags/设计目标/index.html","892ea2cb3bc3317f021bae66a9d114d4"],["/tags/资源共享问题/index.html","56d371eefb16d371e630c444f2a6757b"],["/tags/进程管理/index.html","b7ca0b00995a4faddaf50cbc60675a85"],["/tags/适配器模式/index.html","cfef0cc2955d2d74f1b937910ee87d8e"],["/tags/通用设计方法/index.html","0b9a201a29efb1bdf18bdb0753b65d0d"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
