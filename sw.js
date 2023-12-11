/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","685b6db338875ffa5b3a63efaae280ca"],["/2021/02/22/工具的使用/博客的搭建/index.html","50309ffceaeaaa00ce94693e6ea96761"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","6c5af6766b28cdd34902dad084559add"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","9f5047efe01e69ef679f18c600a8c6ae"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","76b84345b41e20804b90aaff850f70bf"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","6d9eb1a37c6b90129be2d1eddb76ae2b"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","2958eb74e8f59d9c08dd6046673e2cd7"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","fae23eca901272c146dfca4b29a66ba1"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","0252df06262e2507084660b1fcf57275"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","ba25be4b4ae8f0df0fe386daa78e3509"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","c4c935ff1fb79931ed07850a2cdde356"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","fa58ff5ca888a692f773175a5e4ad46b"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","e1f9462fd5a4e5d8c1868eff56ab398a"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","bb3cbc6f53645ad567b0ac767031c402"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","c02e95cf931155d0c3a80dae46707791"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","3f4cdd89173ace9bfe79e40b1af4d637"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","5712b6087f9b6e3286d422c4ae86f825"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","18f166feaf337336d4f11c53cc35bc61"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","2e94c5aac0bac2190a7816822bc5e34a"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","3b78ca1e89422eda8b9c6724e3101a57"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","f7afcecf001e5fc387651cc07ce13707"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","e7178774573aa47fb69eb4597d18545d"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","3d3c4d51196ae199b75edba1fa0d8b73"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","10ad060e043948817a25169d0a8592e2"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","4c14d85647b2d8ef85630afcbf330b0a"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","e5080a9821335f9b2310748706a7cdd1"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","9310d851d77450bb74d9d4e81177a4e4"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","846d3aaa67f58ffcd2beea2f0c8bb8ca"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","1e635d20eff3d167dc4d48b541c8ea7b"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","b4ff5419e93807f850e67e071db24626"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","34dc7bb4ef62b91d825510a2e585ced5"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","97d668fbfff04a353c6c09711edeef52"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","72ff458cf73c1973a0ab7c03e2fb6de2"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","276b8e810eaf510dccdf1a07d2fec86b"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","00f68936a32c65ce4e872fa88a9a1242"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","a809bc4157f386d5fe74d5071d23d455"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","8e2c238d02ed3635747b26d9e155d210"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","05a2965b7c8b795be4bdbe16931b76f0"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","fcdb90d0745fb8fada45d6ef4f21e329"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","08e5ff5d9bbcaff9156a1cd65e392c27"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","f972753c5c6af3d33a0e7e324f19a03b"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","e8d5cf7efacd08b17c6c620cb54a2c36"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","40f4f89f91888ab6c78d5c103c733453"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","83c0f0cf298600659d3f013b279e58f4"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","48cb22c15a9d8458009b08374db2ecd3"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","5ffd98793d3824d832e8b5502d9df5aa"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","9bcf2039b7ef5527d5d1cd277ddeb0c0"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","3b89e1ce36e51c46d7cf4d8176d40ac1"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","0d659524dafef4a9d299d3949a0fcad9"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","2207deea54bd4fefacecc90b6b0faeab"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","28faa5c178b1fca92533245a720fecd5"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","20352eacad0600fd57a7693de290eb97"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","06b9768cb96321468feea97fd37d3839"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","7bdcbedbbc16f9915fc12747e504038d"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","e17bf55a8c9b0ed891ea59694a069615"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","603d36decff63b672e1d6cc77f045528"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","5e0be42b22ec2b1706e7230717dd8b44"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","0f03dd4e9dfdc98d14301c41a2aec588"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","12de04b03bbedf71d549e5e9dc42985c"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","d95a1b5014d62ace7e26cc3ba0bc2786"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","8e69c43a2960ed7435ec6d9c1d593988"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","03c26b027fc08e3051a641396ad90f65"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","3aebc279199b260d6d7fdec4092af5cf"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","5b5dae6a492d7837ae8c3ab25f19ab75"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","5003dfb2cb62c85dbfc043f41c2fde93"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","381387412fcc3f1cacadd393670c8e7a"],["/2022/08/17/前端/jQuery/index.html","b53db9afb4c74e1fb05b375423ac2ad4"],["/2022/08/19/前端/JavaScript/index.html","8ccda745abf29e2cfceee91337ba96a6"],["/2022/08/22/前端/Ajax/index.html","2a00c246f2957d94a8b3954605319bbd"],["/2022/08/23/前端/Promise/index.html","aa6bbf3a02190c9b1c3181670012c4b7"],["/2022/08/24/前端/Axios/index.html","5ba6513220aae368b750d5058ee2ed81"],["/2022/08/25/前端/H5本地存储/index.html","956cb7740eb6960e153219d56c3a364b"],["/2022/08/26/前端/mock/index.html","afd370dc41ef6ba0e49e38425677a163"],["/2022/08/31/前端/vue/VueJs/index.html","becd2cf3dfe2d3a17663a790e5584213"],["/2022/09/01/前端/vue/vue组件化/index.html","564daf05a9898d39790133104f5ac00e"],["/2022/09/04/前端/vue/VueCLI/index.html","18d138baad9353fea08f107a18f211f0"],["/2022/09/07/前端/vue/vue实现动画/index.html","1dcc7057456745855cf115a84101da72"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","4794d1e862cdab7d56dedffeabe29506"],["/2022/09/10/前端/vue/Vue异步请求/index.html","8f6b8c93fc425be1fa46773268917f78"],["/2022/09/11/前端/vue/vue-Router/index.html","0d4945ea478e9d351b1eef2c4819fc20"],["/2022/09/13/前端/vue/Vuex/index.html","a15922ca276320fdc08cde6b95a8d126"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","8fff70b972e2f60b819331b8cce35ebd"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","f06d3d41b8e8f9687514218a1870fe25"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","9e1a06756cbc841ea4f1a51bc698f623"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","e695910c06c73d6c9d0940f71b790de3"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","d4a9a389142ed48d9e4607d190b9c5cd"],["/2022/09/28/DevOps/Linux/Linux/index.html","9c380bc6cd836abf84e056ab3e49558b"],["/2022/10/02/中间件/Redis/redis基础/index.html","d9103f36d46abebdd8c2668498d2b9ab"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","94df54f1d5d11cc74167d983cb15a9a6"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","9eabc2e1ad58f8d802da261c3c31ab63"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","61032daa7f2803f783caa0032ee364d7"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","f21d010a884e90299f09f6224fdcb4f7"],["/2022/10/17/中间件/Redis/Redis集群/index.html","f94564afad8fe7e1cc5ab703851975fc"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","1aa6661bd86bfa05efd056ade555dd4f"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","3a36fa64809cbb1691096cf6155b48a2"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","6ed0f5b2a6b9eef1104540f4f5a9d2b3"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","473fda3e99e98a9ec3e166e02da11611"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","e51a0aa1e51f0d856c59fb232250ef5f"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","5a08e46077a898e4183beb2511c3068b"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","5b320a7c949db206dcb55496df285827"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","b7317dc55e755ec141d2043e996ac04c"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","1590f023a1f6c8046898195d79ca70ed"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","c860fc18d0c32cb67bdc091ec880203a"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","f3d30bbec8893bbcc7ce25b842e9c3f6"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","95b084ea9ea7f0fec706a27bede874f6"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","a243d2ff9119ef0da7d16db6f572b85a"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","58d20d3febe77f2efb5b4a60f2113d71"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","83bed83f68dbfd466140f9c3bf3e8a7e"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","804a780bc96dece8dd24b958a0a243a0"],["/2023/03/10/DevOps/CICD/CICD/index.html","c6eb0563d2143bec19ab8c4bcfa152bf"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","0ff17c3d73bb7506b3c21d5dd90a0998"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","dd5128aa66673f8317303a5b3dc7dfc4"],["/2023/03/13/Java/NIO/NIO/index.html","261b356b34abb0af8a2070caa9a3edbb"],["/2023/03/14/中间件/Netty/Netty/index.html","e0a8b9580e7ffb5998eceb503e2cef63"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","182ee9365d71d0b160c03a86fb913d92"],["/2023/03/17/系统设计/分布式系统认证/index.html","a30101e765f4484a28f4d5a11bb2a070"],["/2023/03/19/Java/JVM/JVM概述/index.html","968d656899b248ef980a21e8a4513e09"],["/2023/03/23/Java/JVM/类的加载过程/index.html","576041ce70e41ed9ab99f3121958637e"],["/2023/03/28/Java/JVM/对象的实例化/index.html","4dcb99f537de7e32417e723caccd1ccf"],["/2023/04/01/Java/JVM/运行时数据区/index.html","c001fb17a7e293b701f16f0b00a24fb5"],["/2023/04/04/Java/JVM/执行引擎/index.html","487f59102367adeeaae588d86d975b59"],["/2023/04/06/Java/JVM/对象引用/index.html","3a58e81b4718a963c75cebc538ece9ec"],["/2023/04/09/Java/JVM/垃圾回收/index.html","666e113d6a22120c4f7f084818b9525f"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","533bed2551c9041abc007eaeb15ad23a"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","28b9b219a9feaf0add89de0c362ae865"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","ab70a2aaf8d29a5334936b42b3aa966d"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","beacaf5083c9993f462b9241bf9bd60f"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","f9c88b204185a562110f473716cd83bf"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","2840465ad6bf65163e73f99854a74d4b"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","d7bbaa56bcdfa94ef34f19b18aeb3b8c"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","c849595a1ae35df4f9695341892d8f8a"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","eff115121cc72efa908f157129d754a8"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","2a4d2c22fda7275a5029e74ce66e8fdd"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","50fe06376e7991e64d2cf7960c6a9ff2"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","0c890af4ec1456b64a62fd9575f1cf85"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","6ceb622106d9f4550b05db5c54c5e570"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","2876ea51bc448694b32ddb2ad1ac6b69"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","bf43a47ed31a5f4dd81ecce41e81bafb"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","0a6ddc14f8378022a362341e12f50783"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","3a3a2c967bbc23913d64cd86280426e9"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","a7c8418cdce2633ccd31e81f9e6b3d34"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","211f6f12073f63c0094ee4e6c425e59e"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","7b44a2f53d71c25259f30b6893bfdade"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","201bb132a69dcdbc4618dc24b478c67d"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","59aa688732262d0d204ba04e633273d8"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","39e0a91f4df94ee39f29ac899eaa2746"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","bde44ce207bf0745e2241499b113a7f7"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","50512b73d43cbe7762d32088d548c2fa"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","85cc14c918a5a29391e55063905dcbca"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","7f26291ac2670d4e9c666caef454878a"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","5d9ff43491aa6cc3bf44afbf235a94b6"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","fe41600b3b499092717b7def23752443"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","8d797ec4c4023a3eb603483f622c5dfe"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","6368f86268d989503cbde49f7b86c974"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","383b924c436100dbe71c950c69d7350e"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","9305bb65d43301497e0e83bd158c293e"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","90526fac12a89749b337afc4c4c0759f"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","b1fccf45d296a08eef9da5e8d851f6b0"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","a039736aef89b5d12cff47275cd6f7b4"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","3ce7e52cb6b94188988bd5870e9c6e6d"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","9c657822ffcc8aabfe74ffba6d03c3f8"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","008a30bd9ed6759eff5a9c3595727389"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","b490532e4546aea7ab7ebd8015509d7f"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","f6473ed8fcbf2d74d9363bb601bfe5e5"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","88b2b6a1e14f2452c6b8606ee2ce052f"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","dfa14a21efb06206fd096f72426a8ea6"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","73d9c28701f448ab58237860fefd5c87"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","07ec6fb67c753507a4b36958d8b9e67f"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","887fe01f6315eb9635ca958d445e9400"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","6b35a6940de9f841feb477e0270f3050"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","ec2e3af1d97431d7efca6e4e4712043c"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","6c007577373c1054552effe12234d95f"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","598bf4a79a8b534f8895cb876f0560b5"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","524b2b301de1661a023de637d00ff0a6"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","bd1ada5acb54d04f1689be3ab4b9db5d"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","12fa4563d8572c2ca78d669ecff7ec38"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","b02ae4e8648a99d8049be1cd623a0de2"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","9ae47cb9af5887bd97478897cd2cde92"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","294cf5fc003132d04f8eeb54164d56ee"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","42af4eabe9158d661bac14173b248b6e"],["/2023/09/04/中间件/Redis/Redis事务/index.html","044fbc250483ec6368cf663e566886a3"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","1642f73ede724ea9bae0d4e78c715f08"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","8cf0ff2a357c8ecfb4a5096e4eaa3645"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","9644b1d5f638999eaa584646731054a8"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","5f45768b279dc89ec8e437c3302ad3c3"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","486a4c6955a09221a23ef3ad72b5983c"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","8c8d4a367fd26966e1fd60bc5c45d802"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","16b1b131dccaf4cfd816103abc12deb5"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","36042401ca989ad9aeef70a40a575aac"],["/2023/09/22/Java/NIO/零拷贝/index.html","de5690d8d31afbb882c9c5aa947eb4ce"],["/2023/09/24/系统设计/JWT认证/index.html","080299b1d71e26ca563a10d96ddae05b"],["/2023/09/26/Java/NIO/Reactor模式/index.html","55a53336010ce749695c2a73329c7cc4"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","f59cb1f3fc253628fc72d1e669931601"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","d057dc24490360038cfdae537fc999de"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","b41d9c62e119824ba5fc4876f16c3ed5"],["/2023/10/09/Java/并发编程/共享问题/index.html","469ddc540006ed7cc77155de036faa0c"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","dd6705c1276065d7a9b369bf5eaeff14"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","b8a64d4dc9767bbbb527904211ef8802"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","c4c55fd124f6480a30b4448353649d60"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","a44069d4f048f88f3939bc7403c7154c"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","edc1bac8b38dfc609fb6785f41c2ba3c"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","149b8808917b88030386a70169420bde"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","2dcfefaa1947c4e6ed63f2da69ee0339"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","6e72884dd68a263a5863ae11d42a2343"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","7f26b600a1e40a63b3b7a17ca89f7d92"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","ce4ccdcc73aa173aa660599455c053c4"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","4e7cb8720a749936f15e662f832acc16"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","fd23886d57cd7f81f7871c90f395e4a7"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","c3d647b9861d06a8a0d83a2d86f3b940"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","222c88d60c4e35a35153d746e4a0a3a8"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","814f6626d77c30e8e4242bdacdd847f9"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","88c05061b35fc40f4edd898552be99b3"],["/2023/12/05/系统设计/开源协议/index.html","49a8c4caeecc141a43d2ae082a436e5a"],["/2023/12/09/MockMvc/index.html","828c0f0dace5c0459faad928b89f472c"],["/404.html","7bdddc3528334c55d162b60e189be6ed"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","23896674486ebf34407f1ff452c9c6ad"],["/archives/2021/02/index.html","c51e276fec7cab04d109329768d4796b"],["/archives/2021/03/index.html","83ae17b15a012f1b1bcf0eeab4188f6b"],["/archives/2021/03/page/2/index.html","19372fbcb01f4c79884d95739cb91e52"],["/archives/2021/03/page/3/index.html","dc60bca055b765301c97e1c093f0643b"],["/archives/2021/04/index.html","ec77ab4c1b8d19c5727c89ba75425d76"],["/archives/2021/04/page/2/index.html","fb3ec4d5ff6a8b3de46cd82cf228c9f0"],["/archives/2021/05/index.html","1b0f347233d0fae80e20c18c86aa3097"],["/archives/2021/index.html","0d257159ed6a3897f7ad69b0651938aa"],["/archives/2021/page/2/index.html","ece192c1a07a50b4581b8aa3f75c71ab"],["/archives/2021/page/3/index.html","b13bbee86e832fb9854b1a7c5f13f1ff"],["/archives/2021/page/4/index.html","cb78876f16234898d24e0d0f0ed0e7cc"],["/archives/2021/page/5/index.html","6a95bf7bd30d4ddedb67bf96936f43a9"],["/archives/2021/page/6/index.html","2ef951cf82e6338b9fcecd0a99d7ab85"],["/archives/2021/page/7/index.html","0ef87dd8f6e004fa9bef2aff1165c762"],["/archives/2022/01/index.html","39600a82e892859c9498b5d24980cebc"],["/archives/2022/04/index.html","f0ff5b38214c169fa89509be63ce7d49"],["/archives/2022/08/index.html","a5ac1864f7e533dec8754799570b2260"],["/archives/2022/09/index.html","082e134c0eef34f3b0a4eb0ead0a6eba"],["/archives/2022/09/page/2/index.html","f8572a157979e143be9ccc3b1855d560"],["/archives/2022/10/index.html","4493673bf6d391258c8ac9e2d371d24b"],["/archives/2022/11/index.html","26a4ae0db29fb79b8d0db2aadabf1406"],["/archives/2022/12/index.html","851e1755c85db2a5d0e67d120fe589bb"],["/archives/2022/index.html","23895a82786c5500c3b929dc1d2e0470"],["/archives/2022/page/2/index.html","d61019b80db1785bedbed57af18a9c6e"],["/archives/2022/page/3/index.html","20bfba676d75a8fda73a19aabca3e650"],["/archives/2022/page/4/index.html","3a6b3d7a47c0d19674b5864b444de166"],["/archives/2022/page/5/index.html","06ead38918b59cda900514bde195ae0f"],["/archives/2023/01/index.html","8d070af6c8b7a86a154553819daf8097"],["/archives/2023/02/index.html","e8501057f37eb72bec6d726d85a97f0f"],["/archives/2023/03/index.html","3410778d2b9384e1f94702bf1c0119e1"],["/archives/2023/04/index.html","d466b3b6bf61f3e943bf5f024d81fe27"],["/archives/2023/04/page/2/index.html","cc98fba258dc2f4ce7f99139f62fc38a"],["/archives/2023/05/index.html","bef367d428d1f99aa9e1a5bff0bd7c86"],["/archives/2023/06/index.html","31e23de1a90ba48450a4365137d42e6b"],["/archives/2023/06/page/2/index.html","876feebf742684f3f9e1ab47b819d81b"],["/archives/2023/07/index.html","c246276b79be3c8a6a7999c25e4fb5a7"],["/archives/2023/07/page/2/index.html","b3e40d79e1ab81bf89a060f8191488e0"],["/archives/2023/08/index.html","5c4dea4b07e497f7fdbffab6c473ce3a"],["/archives/2023/08/page/2/index.html","7bc8ca72a4cf4bd90e5592caf5fe66fc"],["/archives/2023/09/index.html","0a8d30a598c20edcfcacb0c3ea5039f7"],["/archives/2023/09/page/2/index.html","f0ea12531bfb5eda964a258b644f2c2e"],["/archives/2023/10/index.html","fc0583d6396adb35b03d64de90461229"],["/archives/2023/11/index.html","45b01166e7e3fd5ea095804a692236ec"],["/archives/2023/12/index.html","b634c503de0d395f5d091f73b42c591c"],["/archives/2023/index.html","87d13b43b0fb80edf696926024226a96"],["/archives/2023/page/10/index.html","e9f5cc168092d2756eab16db05567107"],["/archives/2023/page/11/index.html","414005bfd07f6e03aa8faddbe3ff9e07"],["/archives/2023/page/2/index.html","438753956572b36fef6e7fb64133fd47"],["/archives/2023/page/3/index.html","fae20f4a48b8e1d0585042763703e725"],["/archives/2023/page/4/index.html","41186dddfc5e568b261e53940d82cd66"],["/archives/2023/page/5/index.html","0f091a5df7a45cceef2d15efd7d4bafe"],["/archives/2023/page/6/index.html","985bd9dcf84b6034fe8a98627749e3a3"],["/archives/2023/page/7/index.html","dc816cdc28f2842019b57bb0e85d29e3"],["/archives/2023/page/8/index.html","a738a4acc7530c6bd2fb2611ca7bdf82"],["/archives/2023/page/9/index.html","2450e1e1266ba7c4c16126329107ffbe"],["/archives/index.html","cca3915b205d45ef549859dadc028f6b"],["/archives/page/10/index.html","3cb7d81e583d6709e4a7e8b599ee51fd"],["/archives/page/11/index.html","bc84c4c6ec4cdf5194c9f5891f5d5de3"],["/archives/page/12/index.html","08233f0788cfae710fb2fd8846e5b749"],["/archives/page/13/index.html","2b3e9e24804aa6c3278120effe692c2e"],["/archives/page/14/index.html","28018fd197e37507fa00f3b83deb2044"],["/archives/page/15/index.html","8f5986d2df9a1c4271707c9789c0b217"],["/archives/page/16/index.html","fac6432258fdf8fc7d78b80e6f13a8c7"],["/archives/page/17/index.html","f8f91971559ab4e95117ceb82d5cc500"],["/archives/page/18/index.html","c8643addb1c4c7391c04e5963d7ccb9e"],["/archives/page/19/index.html","fdab1dbef93606715c8c45c996bdefed"],["/archives/page/2/index.html","5aa0a5d55c84ff14279a6c2c7d83e80c"],["/archives/page/20/index.html","481eb2bf9d58bbc5454bb355d0919416"],["/archives/page/21/index.html","9271e44c30610dd9ca31a2c2c6a7ddd2"],["/archives/page/22/index.html","6b3bac8fe406c24aa2f78626ede45f36"],["/archives/page/3/index.html","2156a2a6d78f8985ffaf37b3b7be0f6b"],["/archives/page/4/index.html","49e593cbb88cdc352ff68e1b943b8714"],["/archives/page/5/index.html","9206ce764bb4d7773e4591f9e18cba67"],["/archives/page/6/index.html","2fa221d4265bad81939ff7a0a420567c"],["/archives/page/7/index.html","36138a1115ee0b1e51f6e4754be7ae36"],["/archives/page/8/index.html","ab89e95b56dc551b0b6a6d361aa405cb"],["/archives/page/9/index.html","fc8d67f932fb87c5e9ce26513d19d401"],["/categories/Devops/CICD/index.html","bc3c9488887c9e499b0f6ec79dc9a7d0"],["/categories/Devops/Linux/index.html","e75258d53c8d50e561b69e08a270ba46"],["/categories/Devops/index.html","3a7f3ea6fa496e8f41f8b4631310c850"],["/categories/Java/JVM/index.html","3b24b1193fc5993c048649ad0b426261"],["/categories/Java/Java基础/index.html","c800fae930a8d3ef23bb8c859c71e9ba"],["/categories/Java/NIO/index.html","2c508f7b2375d13d4abdeca65ffb7a35"],["/categories/Java/NIO/原生NIO/index.html","36406af5c4cb81f7c386b8eacdca4ecb"],["/categories/Java/NIO/文件操作工具类/index.html","68c1093ade0de01e2d9fddf7fdfa4545"],["/categories/Java/index.html","d6fcb0783c1514f5f6da8373f34f0b4d"],["/categories/Java/page/2/index.html","0f88e2248bd5456434e22a3513f75704"],["/categories/Java/并发编程/index.html","d5717cb0a16e0d7ab7d3fd1b56860bad"],["/categories/Spring全家桶/Spring-Security/index.html","7cfe126a757e4eff196175d363a5e844"],["/categories/Spring全家桶/Spring/index.html","3af1c321fb2cabc68ba262c2ed813c2d"],["/categories/Spring全家桶/SpringBoot/index.html","895eb40fe6c63dd1e47576ae178b583e"],["/categories/Spring全家桶/SpringCloud/index.html","3c849ad54e88dfceded33390faffe31b"],["/categories/Spring全家桶/SpringMVC/index.html","4811442e0897228a9edd74537979ced6"],["/categories/Spring全家桶/index.html","683eddb878bc79ec736c75ff4b00251e"],["/categories/Spring全家桶/page/2/index.html","862dc8b12691a009fa9128b7daec0a14"],["/categories/index.html","5c5911a3e5e5ae1e42044c558a071291"],["/categories/中间件/ElasticSearch/index.html","a652b7d097df82ad8f265a1b282a0b7a"],["/categories/中间件/Netty/index.html","84dd61d75eeab23a0d6d639bac2f9eab"],["/categories/中间件/Redis/index.html","353dc060a173104f68e5631dcff47674"],["/categories/中间件/Redis/page/2/index.html","45ff4eaf226361aa14b819a5b09d24c8"],["/categories/中间件/Redis/page/3/index.html","08a4ce289d69d1e9918e338b0eda3a17"],["/categories/中间件/index.html","8be1e665e45ca6cc0ee950fe3e52fc40"],["/categories/中间件/page/2/index.html","c53077d3f4f89a7ca8d1616b31f6b90e"],["/categories/中间件/page/3/index.html","e06c0f318914898a1838bb14bdfed081"],["/categories/中间件/page/4/index.html","ad5de388d437924dbd87b4f941deb0dd"],["/categories/中间件/消息队列/RabbitMQ/index.html","cd231f27f8c2772524117dc1eadb5f73"],["/categories/中间件/消息队列/index.html","1458c84ce2d69987a2aeb292df0251cf"],["/categories/前端/Mock/index.html","6c912f140d7152f20aa089d5aba7cd1c"],["/categories/前端/Promise/index.html","adede51cbfe3156514228b789351e9c5"],["/categories/前端/Vue/index.html","a7fb0df7ec15c0cab65827261cda79ed"],["/categories/前端/index.html","d1ede83aa406c3ee42a78818f49eea01"],["/categories/前端/jQuery/index.html","cbb59c27a6174252dbf668baf259c18e"],["/categories/前端/page/2/index.html","6780e143b075706c7c996b4e41aa28d3"],["/categories/前端/原生基础/index.html","41b0a932aa50a37e1f6e1b2e980e1dce"],["/categories/前端/异步通信/index.html","b922cae34092973895bf21e776183a0b"],["/categories/工具使用/Git/index.html","7776c74d58ac909b4fa2fa9dbe5fa187"],["/categories/工具使用/index.html","62e868894f8f56636a8db70fe27996ed"],["/categories/工具使用/markdown/index.html","a4c151a7992cf93932b3525771c3a3f8"],["/categories/工具的使用/Docker/index.html","63baa54d5c71b6f74d6cdd05198d7c81"],["/categories/工具的使用/Nginx/index.html","7f20604a16b66aec31dbaceeb13df4a5"],["/categories/工具的使用/Swagger/index.html","b247785dee3826fab7ab2eba31748b6a"],["/categories/工具的使用/index.html","bcf2fdb48e7602e1d158a48683f0648a"],["/categories/工具的使用/博客搭建/index.html","61d49254b5f9d6177e0028108175b295"],["/categories/数据库/MongoDB/index.html","437ecd7b01bd7bc8ff23f08b441e6200"],["/categories/数据库/MySQL/index.html","e6dba4edacd908007a0b83b3abf50f58"],["/categories/数据库/MySQL/page/2/index.html","6ef7e967ff47fb642749095864dcadee"],["/categories/数据库/MySQL/page/3/index.html","884d105fd043ae1c0acab73f93af211b"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","5ab79af41e5b2c8ff42912f5b2783142"],["/categories/数据库/ORM持久层框架/index.html","fd583dc98604a6691372d13ef52bb530"],["/categories/数据库/index.html","dbbdf3cf94b1c943e498e7fb3616cfef"],["/categories/数据库/page/2/index.html","7555d4928fe470f628877ba56042606f"],["/categories/数据库/page/3/index.html","36915a7ed19de5ed919ed37d7484aa4e"],["/categories/系统设计/DDD领域模型/index.html","5226af404c8e5c4de8d7238dbb7a194b"],["/categories/系统设计/index.html","86f16b0fa627523c1b52ab7b7517cc19"],["/categories/系统设计/page/2/index.html","433265bb8d72a1f4a355178c2061cdc4"],["/categories/系统设计/page/3/index.html","c163d8dc3e0d02988130481b21f2f06a"],["/categories/系统设计/page/4/index.html","c8828edef934993a055ba127c1ffea0b"],["/categories/系统设计/分布式权限认证/index.html","3df7b65a84790d346ee265dbff748f72"],["/categories/系统设计/分布式系统/index.html","a400eccc1496f8653025c2709349846d"],["/categories/系统设计/分布式系统/page/2/index.html","0fcd72252350524a58cdc5d6c6ceaefa"],["/categories/系统设计/设计模式/index.html","4e7fdd32c9aeca5fbba57b22b48911aa"],["/categories/系统设计/设计模式/page/2/index.html","20067b2f7e2fc1641ce3b929744ab282"],["/categories/计算机基础/index.html","6fe103b61ba4e6fd02b1a173e3652af8"],["/categories/计算机基础/page/2/index.html","d885abe141bff30f0d76c6396f6d4a19"],["/categories/计算机基础/page/3/index.html","47ab8a993bfb12a4f1e11b2eb3fb1278"],["/categories/计算机基础/page/4/index.html","55a958d1dc8fc0eee5081f06cba217f2"],["/categories/计算机基础/page/5/index.html","88b2136fc50d176b78635b063fb20eb4"],["/categories/计算机基础/page/6/index.html","5f818deb2c06560a653662ac32682364"],["/categories/计算机基础/操作系统/index.html","c39deb0ba4e5df9d86983fd1b426d93b"],["/categories/计算机基础/数据结构与算法/index.html","85850df25cae70aa009fe77119a48200"],["/categories/计算机基础/数据结构与算法/page/2/index.html","2cdea7293f686c8b64c783028cfa20bd"],["/categories/计算机基础/数据结构与算法/page/3/index.html","efad21af3c8803fe4898fcfbdfaef297"],["/categories/计算机基础/数据结构与算法/page/4/index.html","b37d0dfafa2cee030e907bc564554a13"],["/categories/计算机基础/数据结构与算法/page/5/index.html","770d325e4be16676cd073fe81d1ffe91"],["/categories/计算机基础/计算机网络/index.html","c06825f81a1cf008f9cd251c2b453617"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","b8414b6858c50ab1ed8118bc9f3b8a22"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","61457fbb38467ce2a8fac503152e2380"],["/messageboard/index.html","7ecbad01da2b23bde3caab1aa912843f"],["/page/10/index.html","47a545c29c1c14e5f5ee93d3ba3bf690"],["/page/11/index.html","a1a8d12763dbe6fa8ec07f5df96c23f7"],["/page/12/index.html","5372191fc224568845d900b7152e7045"],["/page/13/index.html","bae725a06b94c602b07b988945b3ccf8"],["/page/14/index.html","452f6ff02758a8b9a2e9a3289fa96201"],["/page/15/index.html","0155f2d055cc61118a6150c483f561a3"],["/page/16/index.html","c97c07c97a433c9fdf4ff5aeed9ba7a3"],["/page/17/index.html","6a24a71cfa5510cc0e83c197fd22fa78"],["/page/18/index.html","76745d799207e8f6ce4ba5205638a9a0"],["/page/19/index.html","d225fdd88987af1cc6c6a2dd3c0afc86"],["/page/2/index.html","9d894b320e4e130405f9f84a88268508"],["/page/20/index.html","df65355bd979850ad02b393fc675ef57"],["/page/21/index.html","6e6e43e6cc282a4aa5255ff74774d497"],["/page/22/index.html","e1068af401083068d2a458878c7526ec"],["/page/3/index.html","51773960d96d87999a1da79e9cfb141e"],["/page/4/index.html","44e742a8b5c082e6694e477553e07894"],["/page/5/index.html","cb393ceacd7c017a2b2c9b52f0f5f4d9"],["/page/6/index.html","6023aed7172c1bdf453750971f9e9793"],["/page/7/index.html","9c06ec3dde655a999dfcfe106b0aa4a7"],["/page/8/index.html","2b9948d82b2eb0159d0fa0be795721d9"],["/page/9/index.html","cc261020a7aa0d2c150618e6062dc6c8"],["/sw-register.js","1be9269960fa7fae4f4f7cd59443688c"],["/tags/Ajax/index.html","02d284e3587d1bc9ba68b00e4ba9d458"],["/tags/Axios/index.html","6ae8a64f11edaae071707b2938538ca4"],["/tags/BASE理论/index.html","445395b395bbfc1d163ad5411001fa6f"],["/tags/CAP定理/index.html","05417ddce3592db198d8adbbdfbcd82d"],["/tags/CICD/index.html","511f1cd363ead12cd4ac1e1dc1ddd37a"],["/tags/DDD领域模型/index.html","d9fed81690390af5bf6f519c49974f06"],["/tags/Docker/index.html","daa90fad792a49b7a7c139622c760712"],["/tags/ELK/index.html","fb7167005d688c3b48da2d69e00946c8"],["/tags/ElasticSearch/index.html","5af53bc1999dd927882fc4822f6f73eb"],["/tags/Git/index.html","6720c8fa9ce6483a18151f624fbcb71f"],["/tags/H5/index.html","333a83c94da9cee456044b59f7bc5ea0"],["/tags/JVM/index.html","126e030506975f742455247b99dd6044"],["/tags/JVM内存模型/index.html","b2f151872420b6a4251ede84513b174a"],["/tags/JVM执行引擎/index.html","23629558e9faeaeec98a963804de7861"],["/tags/JavaScript/index.html","1fdbf9c1a653aa7c0ba747e0e99b2fd6"],["/tags/Java内存模型/index.html","752797c72d4b32f2c91b15079a242854"],["/tags/Java进程线程/index.html","82cd0dc32cb3c43a131f12c0242d3b71"],["/tags/Kibana/index.html","ea2ba62afa9d55dffd9eac45254c19b7"],["/tags/LeetCode/index.html","ebd983d4153b7793a741d0ce665253d6"],["/tags/LeetCode/page/2/index.html","f79687130f3c1df00ef87a41c1875542"],["/tags/LeetCode/page/3/index.html","2c2611315f7ae696165c295cc86dfb0f"],["/tags/Linux/index.html","faa46234eb502113edeb36a90fe45527"],["/tags/Logstash/index.html","645cd248115409d089987f5e93cc6172"],["/tags/Mock/index.html","a96f5b995830928f7bd84dcac401ed2a"],["/tags/MockMvc/index.html","f63c1108104be69104bfbcb17c639891"],["/tags/MongoDB/index.html","2e39434de27208cd50ef982d8a7e1ed2"],["/tags/MySQL-事务/index.html","6ad1229e91149e43546a1821a110b71b"],["/tags/MySQL-数据类型/index.html","08f649a12c33d3f38d16dae90ab83c45"],["/tags/MySQL-日志/index.html","54635ae071269bf394e5421b6f86054c"],["/tags/MySQL-索引/index.html","37914e9e098433dbe5a35d24d2533a9e"],["/tags/MySQL-锁/index.html","5f4cd6716b60cdf39dfff7fe822fad7e"],["/tags/MySQL/index.html","cb20497c21eb08f135f63c92c3ea57eb"],["/tags/MySQL/page/2/index.html","8baa33dc39fd7ed1d8cb4767dfe07372"],["/tags/Mybatis/index.html","27e18ca2fd236e562ddfe0aa25931a76"],["/tags/MybatisPlus/index.html","5d919eba11c0e5100a7e154b600b9ef7"],["/tags/NIO/index.html","bfcd0a430df70efcf2bebcd3d01e667c"],["/tags/Netty/index.html","e9689fd94c6674f2e705f448af83b338"],["/tags/Nginx/index.html","c61b14455e77fa4a25824fcd8e013c87"],["/tags/Promise/index.html","b4a61f8cd66b7ef61c59998711c11750"],["/tags/RabbitMQ/index.html","15e7fbccd1b3bf0a040cb6b1bfc15ff5"],["/tags/Redis/index.html","1bc337c6749a2e4158ed2599b36838c7"],["/tags/Redis/page/2/index.html","19576078424244255e8d80d5d849376f"],["/tags/Redis/page/3/index.html","2fb9e7a6a123c80e94f61e4dcc03d3fd"],["/tags/SSM/index.html","62c4466236ebc67a630221eaa91e9457"],["/tags/Spring-Security/index.html","6c6a5fd24a86af00cf051e2ec0926944"],["/tags/Spring/index.html","e204cf2225b5095fb00bd0f59cb78ec1"],["/tags/SpringBoot/index.html","90f968725a00ca225491242b36ce62ca"],["/tags/SpringCloud/index.html","4c7dbf21abb2e85791a41d509b9abcf0"],["/tags/SpringMVC/index.html","5ab82ad97cf824cd9577e3c1c22b16c5"],["/tags/Swagger/index.html","15a68111060f18e1b24a7be07f0f0997"],["/tags/hexo/index.html","0db3a81f1d67d7e5461580945778ad3c"],["/tags/index.html","4908b866cfabf6668c4e8f6805055cb5"],["/tags/jQuery/index.html","905f6af8db98eb6c790281068b69734f"],["/tags/java/index.html","c39c6a17eebb3e37cff7df08630399f9"],["/tags/markdown/index.html","6ab41b4bc1562f0bb11619298dbd9a75"],["/tags/noSQL/index.html","0f4bf6d5a8b63c024eeb9efebb52abd8"],["/tags/typora/index.html","e84a04bf90f881b0bb9245fdd1550758"],["/tags/vue/index.html","58d8ede48888a8d6c586e03054901754"],["/tags/享元模式/index.html","c9b7c56132a1e1c7326f348de3ba074b"],["/tags/代理模式/index.html","b1f29de3faac3c09291782a00e18ef4b"],["/tags/内存管理/index.html","01c75c9d9b52e177697da65a793611b9"],["/tags/分布式/index.html","a4cd5b9d6b266d5c1b26374844ae64e8"],["/tags/分布式一致性算法/index.html","3e167f0e75730b8343e2694d39a5cef6"],["/tags/分布式系统/index.html","da30dc5bdd59a1136d269ac2b20e4c93"],["/tags/分布式系统/page/2/index.html","e86649ba218c10c7b9ee03844a63c73f"],["/tags/前端/index.html","944be3cc449b1f3b385fb49fcbd8c101"],["/tags/前端/page/2/index.html","7329ba885112520481bd54d341ed9980"],["/tags/动态通知/index.html","0e383318f7339412c5147c5b33f600e7"],["/tags/博客/index.html","23df51578a8108ffc296117a35fc810f"],["/tags/后端/index.html","e8262d33db5b8dd3f7af54b87ada7f9f"],["/tags/外观模式/index.html","ccfb7fb8e52109e0206c736304cde89a"],["/tags/多级缓存架构/index.html","276c420024f4acbf7da09bade921b31f"],["/tags/多线程设计模式/index.html","e1aa034273b9294967e93414ed6c7498"],["/tags/容器技术/index.html","f861af9cfde52fd1df1024ce9a869939"],["/tags/工厂方法/index.html","775759d452ae93b716939d79f04421d4"],["/tags/开源协议/index.html","00ef15176ba6d194e4f8bb4596a478d1"],["/tags/异构同步/index.html","f057a7abe0296f167969ca55817d478d"],["/tags/微服务/index.html","60e355dd7e0c95e6a9e7bde695364db8"],["/tags/抽象工厂/index.html","390aa0a4049a468528d7f74ab675b75c"],["/tags/持续集成持续部署/index.html","7a0cb934c972bc297ebc88fea30b902f"],["/tags/接口幂等性/index.html","425203ff7515b7e7887186bfb862b6b9"],["/tags/搜索引擎/index.html","aabb07f0763777de0cae648a3690fbc6"],["/tags/操作系统/index.html","e8d9cfa5231abab313ff5a9e149c692d"],["/tags/数据库/index.html","0551614b2d95524d443dc84ba773203f"],["/tags/数据库/page/2/index.html","8f7d0173b3fb3097a288a67ae9a81f84"],["/tags/数据库/page/3/index.html","bae2ddfd1ae928f9db28896b6b2e32d4"],["/tags/数据结构与算法/index.html","bf36d8e6be8583f2fa6851e6af7841aa"],["/tags/数据结构与算法/page/2/index.html","b33bc53c23a3897e7867206833b7ddc8"],["/tags/文件操作/index.html","0b10965c93746bb5927b8097b9937bde"],["/tags/日志/index.html","a7fc0d21361963d2a95e21d8a3fabdc3"],["/tags/服务器/index.html","89f83f0bd9b2d21c2d9f7a79665043ea"],["/tags/权限认证/index.html","059d993df287e44785d3d801a778c0c7"],["/tags/架构分层/index.html","381556a2098348c01c12252124e25142"],["/tags/桥接模式/index.html","34d6b06e111eb403127de09751b8b6eb"],["/tags/模板方法模式/index.html","cbff7235fa3a20c14f1d304458f16087"],["/tags/死锁/index.html","2b115512190a20eda01ef23548e6cd97"],["/tags/消息队列/index.html","674ae115ed80ca5571b41e4d81393226"],["/tags/版本控制/index.html","6d576da7769e8e870ae605a925a4c2c2"],["/tags/策略模式/index.html","92ed6d8dd0cba1649e63667d8d5c24bf"],["/tags/简单工厂/index.html","3225c8dd74200b8af1fc4e8b3049c325"],["/tags/算法/index.html","da96aaa1d9acfade71576f92747f4159"],["/tags/线程活跃性问题/index.html","89ee170be64030f26a33880fab044c02"],["/tags/组件化/index.html","b1e32bfe8c56696135c87c73c4051c81"],["/tags/经典限流算法/index.html","6f712d37f498bbd4a82adcec9ad379db"],["/tags/缓存/index.html","dd313aab5e20223c5d23eb11a80b6a34"],["/tags/缓存/page/2/index.html","03199901be716c3bff6dda5af5a0b8de"],["/tags/缓存/page/3/index.html","534a2280b0df3b816fe62c88276dff95"],["/tags/观察者模式/index.html","2fc6c63aaacf755226174d7cacb736d9"],["/tags/计算机网络/index.html","76ca8b7a7a2b8780586c43fafc9221bd"],["/tags/设计模式/index.html","bb839c80fc47311a1a78688d59090c39"],["/tags/设计模式/page/2/index.html","198b58bc681b2dd1b94589496cf7dfb9"],["/tags/设计目标/index.html","9002c5290bf949048a45e1f4069ba7cb"],["/tags/资源共享问题/index.html","d3d370d6ccf8822e42b0aa5489bb2683"],["/tags/进程管理/index.html","25cb73decc3ca3561639e96f9de90a92"],["/tags/适配器模式/index.html","ddefab91c7435d7dd894ef861c0f13e6"],["/tags/通用设计方法/index.html","c2b351a8f5324207ad56306f81ef2299"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
