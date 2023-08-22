/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","b4c7aa97878fdfd49ad655347bb7cf55"],["/2021/02/22/工具的使用/博客的搭建/index.html","7422d0d9ed172f62279bc8da4bb146a9"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","b8a55261211ed9fe13f9448c66517cb2"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","9894ecdd034d6c51b6a2b5ea2749ef8a"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","dbb1715b8012c0ef59336b9acc3ca06f"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","787e904c47963881dfc7ca9f146a3342"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","04c38a23ef2caa24fed38833952b72bb"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","f52b973749caeb677a8b0919f51401fb"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","a508433a97da5dde3694f34f0a2a446f"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","7534e8bdc0c544ef5ef27e89daebc125"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","754fdc77f93af495a8ed814876329987"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","39b7a93b421771036f32ee68908236b0"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","a4c7a82eaa62d43b65091113847f549d"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","c30145a9f3e7c49bce71b921583c4622"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","50d42285a27022c301114938c8079ed8"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","642a090971488e615d5a8c9a68fb34f9"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","bfe9f0a4f3b69d45594078fa0624d73b"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","303a31355b7eb720c5739cea51b6aa4a"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","38e1d63c95f1c50391f36fd361ac3437"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","7818de8d083f20221368fdf868def5e0"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","e617dad8576a6e8193d4529c458b3741"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","8b24f48cfeb4008506c2ce52e9203770"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","b7b5fd9e73e6c3a970094baaa8889cad"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","6e0da78e73c01619323c35c6bccc8ea6"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","ed52a37a9a3772c0af55d7b9f1fea34f"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","9bc3c238dac452860ddfe7e582adbdcc"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","190b637715c44c32a04a893cc1154f63"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","318fefe6f0404015952d111ffd38c61b"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","ee06ef72c309eb2f8159574676a8621f"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","be5d9157ec2e5bd6e55d01b72adada36"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","e9274342863b33ab6429ce6a8ab69153"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","ad11c907e0b8de87d97651ee44215265"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","d9cfa977adcf4e1a65267b011a1f3377"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","696b3c52a8407d84150617e9c43c7a13"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","6b740ddadb69c8997c0270f14d71ba44"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","fda03c8ce36c2ac1d5d7a8e2d63e1ada"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","43421061522c3540d7e0ae3be28a1da0"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","0e5ad212eb94786c10ea2a8dbd7bf1e2"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","fe3eeb2c8748d62020288e881fe5b9f5"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","1567770377911a276611161452b57c33"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","9959f825e99da0f5205c6b45432bbfce"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","9e7d9b19a65a894fa57bec6e88038e77"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","1b09e634267647597c52e88ff99cb408"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","7f8e7cf284e691ee945c452b204d7e2d"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","3eb83cac36202dce14033308dd0134fc"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","0c880b944090f75d0f399f9d5cc1e95e"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","8c641e2b4608efc9902349300ed6f6a6"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","7fbd7280849fb5fc9d85fd9d4e4ea98a"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","09ecbef173cd13a9b5efbc459565173b"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","57239532143b10bc59b03a568a691619"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","d783fb7dfede15f0a955309024409ff4"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","a81af8bd684b1c201513681d3573d6d0"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","f1ca9f9eef51939110acadced54c5f12"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","3741a2b47bc18f02f6dd4e8c169074cd"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","5da18dccf4486723717cb61ee3b54d0f"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","81655d10eecf4d1cf19362c89ba7bbb5"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","4b934f7cdbfb4817f02fc5ce8420dd6c"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","e49bac5fb12b78fd9dee23ee995dc345"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","e82cae6254a0573205c2a2b9ce88e2e6"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","cb6c9eb095dc1f12031b19f9d307067d"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","e26d43845e74e6045b64f66413dd0b04"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","384197d9ff3971fa5d6fcb802bd7e823"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","1752209e2a414373c4f427a77984d7b5"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","a77003586446384a82435984f957b8c8"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","3d0c10f175de68d331565e2bf7bdf24c"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","f53c9e5b0808ad4ba0800b8ffb815478"],["/2022/08/17/前端/jQuery/index.html","35b62447d3e401d10d58061813595abc"],["/2022/08/19/前端/JavaScript/index.html","18f675f16ef196c1f08e69b83244d0ff"],["/2022/08/22/前端/Ajax/index.html","d54e9313f9bb41e3df3e4f9d89a333d0"],["/2022/08/23/前端/Promise/index.html","4d83cf34a20669baf60e98e597eb3ade"],["/2022/08/24/前端/Axios/index.html","61cf2054c5cb3e7c74f0628f470770c8"],["/2022/08/25/前端/H5本地存储/index.html","599cc8101b5e00d24cc3448f64ab7350"],["/2022/08/26/前端/mock/index.html","c8ba130b8c289112647db03966dc9a23"],["/2022/08/31/前端/vue/VueJs/index.html","8d3924c5c578ba7193415a95c2d06ac7"],["/2022/09/01/前端/vue/vue组件化/index.html","85e8e04aaa8b7a9937d787bfbb765ec0"],["/2022/09/04/前端/vue/VueCLI/index.html","6479ef282c5e53d9d1a880e27db2a12a"],["/2022/09/07/前端/vue/vue实现动画/index.html","f9ea17d98964fcb24beb8c9f95e9b07d"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","a0de8776fef2cf9491457b92ce9e4295"],["/2022/09/10/前端/vue/Vue异步请求/index.html","fa4fe94d561ae0dfccdf824442744d9b"],["/2022/09/11/前端/vue/vue-Router/index.html","cea1e895de6bb82f8f089d623f46d00a"],["/2022/09/13/前端/vue/Vuex/index.html","0b0304b88531d6a730db092fbd8ba09e"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","79ddce8f8dfa7b779cb6b64a942307a1"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","4e1d3ff8bbb817f9fc2db82492bf9847"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","03d04d24d7376d9e2184a8a40d698f27"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","e8aa4ed94c36745911852b820adc431e"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","f835bf9d3742074faf657df006800cdf"],["/2022/09/28/DevOps/Linux/Linux/index.html","e7a0c14e77f43ba7a470b84fb2010de4"],["/2022/10/02/中间件/Redis/redis基础/index.html","0c78ce78db1d1dc93f0f1760c34606f3"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","3f4f3e21fbe881b41e1be64152a6281a"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","fec1df241d67f9ecdd1fd923f35cddaf"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","5bf2ccc234a263e740dd63f196c1878c"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","b0afafcd2eb6ae3b9c4c8f3960a1b15e"],["/2022/10/17/中间件/Redis/Redis集群/index.html","fb846e67ce22a7af4d958f4656fd70e1"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","feca5590cd4dd33ff809251c583af144"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","943e2631f54d879388a1251adb2552f0"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","3636409e32565a00c2e7401e773f32e2"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","af76b9ad9875f871a2a3d1938402d1b8"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","140773e04acfaa872e0eefa6d0f4cb84"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","eb8cf34023933b8519cb63cce4f5ff9c"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","191b955e5a8b4e91d8f9b20ed3fa319a"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","3233faded7752d4ececb68a519646560"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","c3bee894a899a369361c4b8aca429853"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","dd6bc4d7b8775bbde8ef1368e9f8023e"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","bf02f2d5ef5b076ed52fe9f7ee22c81e"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","ddbab24c685487f7d2a92aedcf80b680"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","2d6fefba5ba087646e1aa36334065829"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","08fa7f64cbbee017f62a3cea2b987a55"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","24fb28b5701e5b48dacf3262e71f9266"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","c1feae8a439cd2a592af81802fb63630"],["/2023/03/10/DevOps/CICD/CICD/index.html","010f4f4ec0911a3b392aa969e92debaa"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","ff795a3aefa823f005874114316fa503"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","d02528021d6c200059f472e781e5001e"],["/2023/03/13/Java/NIO/NIO/index.html","39d4ed670059ced10ec14361f843c632"],["/2023/03/14/Java/NIO/Netty/index.html","e04371acc20273ed0a7eac246e69574a"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","1e02f2da4441efa4f4bcf9d9a35f9a41"],["/2023/03/17/系统设计/分布式系统认证/index.html","d5dd0aef3ca7320953b6276ff3b609c3"],["/2023/03/19/Java/JVM/JVM概述/index.html","ef53038fb87f5158e94967ce94d44b42"],["/2023/03/23/Java/JVM/类的加载过程/index.html","cabba989739970de941169328f45d46d"],["/2023/03/28/Java/JVM/对象的实例化/index.html","ebc9a172f367b68a754e8e8619fc9c77"],["/2023/04/01/Java/JVM/运行时数据区/index.html","1377d22adcc8c0f11e826e3038a6a1bb"],["/2023/04/04/Java/JVM/执行引擎/index.html","90159cc6547f9c33e61a1dab62466b3f"],["/2023/04/06/Java/JVM/对象引用/index.html","dc140416a77cda7e1d4d8cef680fa9c4"],["/2023/04/09/Java/JVM/垃圾回收/index.html","96acf4bd1f9dba8ff71deda1808a4e85"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","ccca71daa9890ed2c9d01e30a8869d1d"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","8f74af5a5818cd6c4128af5465fbcc0d"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","61f729899c87d57cfdaf06ebcb7c0d37"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","6977d3ee85b77ab8ad23e5b98a3624a5"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","81e0ff19297e7e2ef7970381f5309eb1"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","677ed6e5a4c0db4c83fa9307efcfc955"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","f7a9a20e7cea83a95187c3b0e9d9506e"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","7d4bd4357197794191aa4402e4a0f080"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","18ff3f4e312af5c40ac026f022b2fc00"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","64ade7aad59a066fa079f9856987fbe4"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","db641841c8cd01535ccbd4f3e5d0960e"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","237d919dd9f396326c4bc4ac66fba613"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","3b0206f84a6e6310c1974bdc095d1b40"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","8a1a841fb024cba39cb5d39c795c46a0"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","e154a5a6f37c928733784fd58d48dde8"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","5b03a8d57e01eca987601519a32ac1ef"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","80413775e754d5b8b3678f284ba03118"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","16f1d3d39e1ac3ef608d936bf5062954"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","92cecbe97ddee330d9ef107d89fcc9a3"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","0437c69e034624eba2dc690eb0d9984d"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","c2518e4a266a8bd10a76c8fa5f75d4bf"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","925bad5208d5257f22b4a9bcf922cf0c"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","2a5cbb65dee22df4c1a4bed1682d92d2"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","464992b832c665407d18df34af6434d4"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","404f073e4b1acddbf0d47d962a35045a"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","3a7a6c5504d6b3c5ad8d65f7bfb54339"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","82c48a4771c37918c8fdfb6459ef5107"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","d3d95683d8ecde1b8aff6ff00b2baf6b"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","9c2271e61e5d6607641c9a2a7d68e2cc"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","9197ffd24695272d88ac455e771c2b7f"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","509c4064bc4bb16918184b4968342ac8"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","8d300265b455138dbf13539a4bce3fa2"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","1568da5e183e1123ab831c61c0398b74"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","ed01446adcd94c1003fdc7edc471389d"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","bbbebe6f17a2b8274aed33851f9da449"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","e9627965288cfa5c3d943e68c5e72562"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","a12b9d84c3ecc000a9bf2f15a03cb7c7"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","8449e2d3c65109e40ba9136abc6ec429"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","277d22459c81f689f33fa6f2a90422a5"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","92c2b2a190e4e262b09f350e085896c2"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","035621106e29ca1cc18d1819619fb77d"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","cb08395ed1030f102ae77ec302d9ff50"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","12ca47be413f7c9c7e5e12730c6ca463"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","67367f9dbecaa4f7c7216ae618098b0e"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","d64983275745f2e8deb86dcbbcb7dbcf"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","8662108ca2dd7f419a94134452966dac"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","0f19a34d1285cebb8eadf922987f617d"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","a84cc9d479571acebb7379ac64e36e35"],["/2023/08/13/Redis实现消息队列/index.html","c0677adb91d4e24d8b4e1c697ee89559"],["/2023/08/15/Redis如何避免单线程模型的阻塞/index.html","616938a4e49c7a43f184498f13e1037b"],["/2023/08/17/如何应对变慢的Redis/index.html","87f04008a4e2959e1ebb8d78efff9181"],["/2023/08/19/Redis内存碎片问题/index.html","2277677e8fc899283f42313cf1958b41"],["/2023/08/22/Redis缓冲区/index.html","a1484ef75070ddf2c44f5d95bfd15297"],["/404.html","add710b4125b4ac3457cf9790d1a136e"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","ef9943c1a55b59a7c16e3c739e7a971c"],["/archives/2021/02/index.html","081edfe7d9e11bce6fdf1274d54ac126"],["/archives/2021/03/index.html","3be6798d8be1a587b9dcdcee7e395c44"],["/archives/2021/03/page/2/index.html","b83564b06ebb1af17fbd826365198780"],["/archives/2021/03/page/3/index.html","19a0a6e8c9f7a84d3a186b2804963489"],["/archives/2021/04/index.html","e923d445b3540070212a868b45bbbdfa"],["/archives/2021/04/page/2/index.html","2edfe2f6b80bdf5afb7378651cd39fb3"],["/archives/2021/05/index.html","32cc34e84f7ede935a76a60cbf8fa9bb"],["/archives/2021/index.html","484d4770dee696eeb296281e716cb33a"],["/archives/2021/page/2/index.html","5dc8aa388504611e2fb213eb16521b9e"],["/archives/2021/page/3/index.html","254856462af5210f52296a2cd6d9f169"],["/archives/2021/page/4/index.html","a89295ccdf1b95c169ae16df58fa06f4"],["/archives/2021/page/5/index.html","e9920216cbdfd91c068a0dd5503d6669"],["/archives/2021/page/6/index.html","500b2d04ef8b73f427dc72aad2a281a7"],["/archives/2021/page/7/index.html","44d42e811ca5ecf44f14bb06a2d96ba9"],["/archives/2022/01/index.html","3b7abceab7a4056323bc0f0c01e9f567"],["/archives/2022/04/index.html","c11ea5c4362e7f9704e5ae4e1dd6167a"],["/archives/2022/08/index.html","e7040d1962e5861270a097da680bad74"],["/archives/2022/09/index.html","bb8e269f69fcfcab2ed0c518cb5e6323"],["/archives/2022/09/page/2/index.html","fc782a7ffa6a86c0a35ee9aeaeeeeceb"],["/archives/2022/10/index.html","a88979b62c335702623ff3b3f6d4b19d"],["/archives/2022/11/index.html","2b934f5f039214cdfea4808320b61457"],["/archives/2022/12/index.html","4eb6dbd5a58fb42bd0b0d98634f405be"],["/archives/2022/index.html","a9fcc19d83f98c68ffcbe07b918582d0"],["/archives/2022/page/2/index.html","2c18eea83f3cb940b0175af453561b5e"],["/archives/2022/page/3/index.html","962f8c430e81d1dcc03d248612f1df85"],["/archives/2022/page/4/index.html","a91f65ac3a2d05bc8ed9bd094b76713d"],["/archives/2022/page/5/index.html","970d99cdea7d4daea989dc7ed14d07bb"],["/archives/2023/01/index.html","af49b843ef99f037c25048a137f50b0d"],["/archives/2023/02/index.html","72cf81c18fc2569900c227de3d964a7f"],["/archives/2023/03/index.html","dd8155569f06bb3e4d5c75e1ef1aaf14"],["/archives/2023/04/index.html","91c5491587ead8889365a1e6d59f187f"],["/archives/2023/04/page/2/index.html","8742a8975b78021701f216eaee05d671"],["/archives/2023/05/index.html","3047a17e78f2bcb2f74bc2fae9ff8a71"],["/archives/2023/06/index.html","cc6d5a2c232c57faacf77a540dbad927"],["/archives/2023/06/page/2/index.html","ba1576b88a434deeebbcd9f19294cc96"],["/archives/2023/07/index.html","945dfa3e0378e78a890d280a1497b4ed"],["/archives/2023/07/page/2/index.html","af6a694486997de3079cea652feb53bf"],["/archives/2023/08/index.html","bb74fb86654f0572ff310d590463e5d1"],["/archives/2023/index.html","8211bfee021502c74ce5beda794a42f8"],["/archives/2023/page/2/index.html","aea425d1bad2aa5b34737851bb809eda"],["/archives/2023/page/3/index.html","35ddecda8a57c59231e58eb02d13a451"],["/archives/2023/page/4/index.html","08ce7ee96863315aeb23a96ae1d00685"],["/archives/2023/page/5/index.html","f012e27b1183d8bd52e7a6dd277b3483"],["/archives/2023/page/6/index.html","4c6bb3c60972795618c4aa1959406706"],["/archives/2023/page/7/index.html","75f1cfd8573671a9de5556e2677afd16"],["/archives/index.html","66bc5b7bdd880c9eede623d4f6b19d14"],["/archives/page/10/index.html","0e6ada96a57a849b9b8ff216fe542ab2"],["/archives/page/11/index.html","083220232ffe658925666ea1b9746034"],["/archives/page/12/index.html","153233c23967c8136746dfed5426faa9"],["/archives/page/13/index.html","d0d9d7d4dad200f9d697ed93f93ce8bb"],["/archives/page/14/index.html","d185e016d2d3bb0770e61f8bfdb43580"],["/archives/page/15/index.html","cd33e6f609c94e41e6f8f4942da2c117"],["/archives/page/16/index.html","5eafda9c5bb04bb01c0680c1107622f4"],["/archives/page/17/index.html","ef01225c79cafa18359d20550c74cbc4"],["/archives/page/18/index.html","36ce58f60cb86a0881f50e277add9369"],["/archives/page/2/index.html","d41e8ededc1ec0ae1ff061081644a595"],["/archives/page/3/index.html","b2f82a8d430c96b5686699b303791714"],["/archives/page/4/index.html","9b46ded6ecdd51292a923100e2277373"],["/archives/page/5/index.html","c1c3ef42a0fddf3cb3d6adaa793f07de"],["/archives/page/6/index.html","cd52c760e1694270e2ab98fac3b958dd"],["/archives/page/7/index.html","bbda95deb9772288b256db4ca88a425e"],["/archives/page/8/index.html","26a578c5292e390e7ba2d1e66b878a46"],["/archives/page/9/index.html","60a1bd90cf838e65f86e1062ef2d771f"],["/categories/Devops/CICD/index.html","b53581738768ad2e9a57764bf08d1483"],["/categories/Devops/Linux/index.html","fbcb74ed4ee406fea28638211a82d3c1"],["/categories/Devops/index.html","70d7a883658b7c95ecbeb02285fc324f"],["/categories/Java/JVM/index.html","f7d5ffa4cca6d44930e72b2f685ad3db"],["/categories/Java/NIO/Netty/index.html","c023d60888be07885c73810457b9cefc"],["/categories/Java/NIO/index.html","53740ceb17d203b14bb0303fbef17e16"],["/categories/Java/NIO/原生NIO/index.html","6c5cf12e726ab4b41b5843ad40162720"],["/categories/Java/NIO/文件操作工具类/index.html","0d840da61ba81b4c26b3f35bdd156885"],["/categories/Java/index.html","8fd1625075e7113cd23bd908366cdc75"],["/categories/Java/page/2/index.html","aa32ba07f412edc93a86c1cd91bbdb17"],["/categories/Java/学习路线/index.html","920dff2957ffde34cb55feba3a7ec850"],["/categories/Spring全家桶/Spring-Security/index.html","774588819f63c3240d487572e86a6998"],["/categories/Spring全家桶/Spring/index.html","111744dc929dc85edbb0c6962e9c3acd"],["/categories/Spring全家桶/SpringBoot/index.html","0670ec983b13e15a86700d69fc172bb8"],["/categories/Spring全家桶/SpringCloud/index.html","ce93654a7a790cac24c313ccebe1fd6f"],["/categories/Spring全家桶/SpringMVC/index.html","e9945ef16385d715981b52f1d9d9270f"],["/categories/Spring全家桶/index.html","6639479079d532e63e3466e3d8acf5f3"],["/categories/Spring全家桶/page/2/index.html","e9d1dd2260af0a9b1f6c510a979ed411"],["/categories/index.html","7120420bd26f1a85fa5965a9a639d126"],["/categories/中间件/ElasticSearch/index.html","fcd7dcbd656fa2718e0ce747bd3fb49e"],["/categories/中间件/Redis/index.html","67bdbdcca635d944f6816e909a3fba4d"],["/categories/中间件/Redis/page/2/index.html","6ad02f4742fc8839a4aceeb32c9ecce0"],["/categories/中间件/index.html","0658fbdb5979e6c818244359d903ac02"],["/categories/中间件/page/2/index.html","b7c1648b69275d0ca3ae4ffd50986589"],["/categories/中间件/page/3/index.html","31e89417dfe92a18c6277974e1e148ad"],["/categories/中间件/消息队列/RabbitMQ/index.html","e2901383afc98ccc5570fee82da7f47e"],["/categories/中间件/消息队列/index.html","4cac7df088303195582ee70effd8e327"],["/categories/前端/Mock/index.html","ab947be761e007aff071e4d79ea401ad"],["/categories/前端/Promise/index.html","64f722a878829621cfbc991f2fb39018"],["/categories/前端/Vue/index.html","4794095b97754bee5e2141d684095a2d"],["/categories/前端/index.html","b335a0b288e2ad09f77747a948f0ca07"],["/categories/前端/jQuery/index.html","ff8a5237967725ab3977d1761be6af28"],["/categories/前端/page/2/index.html","0347933985ae7144d9432f46e60b29fb"],["/categories/前端/原生基础/index.html","fdc82c45d380606f6c305d5c4f33b18e"],["/categories/前端/异步通信/index.html","ee78265501a3f1378a8527397d894e67"],["/categories/工具使用/Git/index.html","44d6c8ad68b3b47b0ade09501ccbd6b4"],["/categories/工具使用/index.html","2870ad0a6f2addee95e8e12d1e690870"],["/categories/工具使用/markdown/index.html","d2feb70e044e3fa1718fb84d0cd40c61"],["/categories/工具的使用/Docker/index.html","a48b2b16d08374b6a5220539611e1ac0"],["/categories/工具的使用/Nginx/index.html","6560f38d24337da127281ae06a1b0c15"],["/categories/工具的使用/Swagger/index.html","6ebc515a38e4afb8e5fa1991b70ddf5a"],["/categories/工具的使用/index.html","fa3cd6af40bddaece4fa4d863c1f2ceb"],["/categories/工具的使用/博客搭建/index.html","56c919a01977179ae73577b6401a3a42"],["/categories/数据库/MongoDB/index.html","9b3b1a8d0049cebed6576a19f7821fc3"],["/categories/数据库/MySQL/index.html","a99e87266d054170ba9d6c0d4d2d76ba"],["/categories/数据库/MySQL/page/2/index.html","09df17f5e33e5da4ac32e5399066567b"],["/categories/数据库/MySQL/page/3/index.html","4f626518cadd801c83763b183f0a5bbc"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","2ddc2e02a75f88f27a8073fbaed2742f"],["/categories/数据库/ORM持久层框架/index.html","a548685cee8323f12acfe5d2379020c3"],["/categories/数据库/index.html","cadcc3ccf82b12a8cc25d0fccf58e3fd"],["/categories/数据库/page/2/index.html","26eb70a97d94de2f07b4cedfd278236e"],["/categories/数据库/page/3/index.html","2481e6ed3b6c4adc34b7797701926145"],["/categories/系统设计/index.html","78d9b7d2151470a041fcb8f531e35577"],["/categories/系统设计/page/2/index.html","080236cc914bc257990f208d7b8e4529"],["/categories/系统设计/分布式权限认证/index.html","b0de14ee3ac3496f822004d7058e9485"],["/categories/系统设计/设计模式/index.html","713e706daadc6ca8552110ebfe954484"],["/categories/系统设计/设计模式/page/2/index.html","3d152d9baa45b73728d5f601393ffa3e"],["/categories/计算机基础/index.html","4366d4213c45dd7cd356d9cb9d336bfc"],["/categories/计算机基础/page/2/index.html","eec4f7aa364e07ffba3d29c9f5117e22"],["/categories/计算机基础/page/3/index.html","dd24db4916a97dce6e35c12ef255fde8"],["/categories/计算机基础/page/4/index.html","6c6cb1764a8357bf45e4bf75548bbae6"],["/categories/计算机基础/page/5/index.html","3c844445b88a2f5fa72b6d013a8ff01f"],["/categories/计算机基础/page/6/index.html","a549fcd75f54c3c409cecec6e35007b4"],["/categories/计算机基础/操作系统/index.html","395cd9f2f3b4197422540aa27c4e0b0b"],["/categories/计算机基础/数据结构与算法/index.html","2437c4065be981194fd30a5617b7e307"],["/categories/计算机基础/数据结构与算法/page/2/index.html","b4ee54716c9adfec4e867f9d4adfd386"],["/categories/计算机基础/数据结构与算法/page/3/index.html","0c8c0c3ac3311a94a5e474cd4a9bc2ee"],["/categories/计算机基础/数据结构与算法/page/4/index.html","6575f7598102c11610f0267abe0289df"],["/categories/计算机基础/数据结构与算法/page/5/index.html","92414265bc0169dee494a8ac54ec8ebc"],["/categories/计算机基础/计算机网络/index.html","315342c22af1e551a1a7185b747f0910"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","167fd8a670e3fe013442e420c1a3fb95"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","ae51c7aad8e9fdb3946668c32688bf12"],["/messageboard/index.html","021675adc3d10bdd50587a33aa6b5774"],["/page/10/index.html","bb14d178b015d7f5e7fac5f02e52b807"],["/page/11/index.html","0d9a7b7c519d8e8a1c856dcbde699729"],["/page/12/index.html","ef00f3593d9938cd32104457492d03c6"],["/page/13/index.html","8c0438570fc02bd870fabadf94aa4f6a"],["/page/14/index.html","522501468040b1a0e44494a0e2bd15fc"],["/page/15/index.html","67240b761f2a79195cf43654ea1432ac"],["/page/16/index.html","aad1e44dc80ba8cde650fb67fc7a4bda"],["/page/17/index.html","2ae15f68ea9c07fa6d9e0b19e43a6ecd"],["/page/18/index.html","1df52f5427d98bed6811890e1bc58b41"],["/page/2/index.html","3d7c420a33a5a68cda797a0be8775c2d"],["/page/3/index.html","bf84c751530fbef156f903b342af648f"],["/page/4/index.html","bf385b34b04b069f9a674d8465df7e8b"],["/page/5/index.html","9eea736f28391bcaa06b33bfce00615a"],["/page/6/index.html","f2ada0078cc5cf6da2da0001e8653502"],["/page/7/index.html","1664b84bc529bd91f9c36d2e895f0a8e"],["/page/8/index.html","9a7351897c6bb71d50acba809f10bbc3"],["/page/9/index.html","b15fea790a48c8c783b68fa24f50961c"],["/sw-register.js","543c3986ea820e082f87611f1011cf06"],["/tags/Ajax/index.html","953c27a3995b7fb74dbd47a6e0e7e87b"],["/tags/Axios/index.html","68a17943a12d387af79da5eb57334373"],["/tags/CICD/index.html","1a7a12e0035926bdac472fcfbcca72a4"],["/tags/Docker/index.html","ae870f3e11309b8a1de38dac604247d9"],["/tags/ELK/index.html","44c8bad16a7b742ea78a7cd21e0abc26"],["/tags/ElasticSearch/index.html","5e30b7da4289e0e0b8b66d1c4494e195"],["/tags/Git/index.html","c9e47f400abb2a9886fe28916a52f107"],["/tags/H5/index.html","20a45b04f0b2da07b89c4bc8dd3e9393"],["/tags/JVM/index.html","eadcab6ed28348484d8c0b8b52db3fff"],["/tags/JVM内存模型/index.html","abe01f155ddf3cecec3d7b1f8814fcb1"],["/tags/JVM执行引擎/index.html","cdb14355a02ab4b7dbd6f1638e8c5519"],["/tags/JavaScript/index.html","0ec9ea8bf76f731c7e7dca2d91a9de9b"],["/tags/Kibana/index.html","1eed7025b218c6c8c352c5107b878b6f"],["/tags/LeetCode/index.html","5e25af165ef4b8b747157eac1f34e721"],["/tags/LeetCode/page/2/index.html","66bb0a8b097b2803c803195cd1d454c2"],["/tags/LeetCode/page/3/index.html","26c3a856bc24f1920d8e2d50c0541c2d"],["/tags/Linux/index.html","fadae2ea10819376fd26c317af758843"],["/tags/Logstash/index.html","c04084c745030f673cd442b297358054"],["/tags/Mock/index.html","f2a4d15b5edea8df5c27ef410cbee304"],["/tags/MongoDB/index.html","087697674046a21d047aef8368e63220"],["/tags/MySQL-事务/index.html","ab1e12055c9a88924af58d15ab71c036"],["/tags/MySQL-数据类型/index.html","0e8246fb5bd90b8e18f235b07945c906"],["/tags/MySQL-日志/index.html","76f2703e85d114a86873ccff93774f84"],["/tags/MySQL-索引/index.html","b97c3ab3e23052e25d3dfda727e8f9c4"],["/tags/MySQL-锁/index.html","f1581ddd7bc35036c36ab335737e37c1"],["/tags/MySQL/index.html","5912f43aa485f5822975e9357ad02f06"],["/tags/MySQL/page/2/index.html","f7fad303b0378eb9dd0884d6cdf5c172"],["/tags/Mybatis/index.html","47dba5f31e5fa6faef87d2617545d75c"],["/tags/MybatisPlus/index.html","c8794339af6e1e97c954251499023a83"],["/tags/NIO/index.html","ac0a0273e2945a041939c899086255fd"],["/tags/Netty/index.html","b1e1ab12a325315c39808968456f26f1"],["/tags/Nginx/index.html","edc2ef4d1230cb8c7e1df1c39dbf0322"],["/tags/Promise/index.html","d195522cdfaebaf1ae211ced4d2f4ae2"],["/tags/RabbitMQ/index.html","de66dd3528b1a9ecab094185fac27756"],["/tags/Redis/index.html","786f903892d7c28a165808405cf50160"],["/tags/Redis/page/2/index.html","4aa1d00524ecc6c9d3ce44ba80d3d065"],["/tags/SSM/index.html","2b70d70c7dd490184db1130c43c6ecc8"],["/tags/Spring-Security/index.html","b95b6f6eb45ecfb70ff6641bcbe98a85"],["/tags/Spring/index.html","c3153a401ec45d12d5c2acbd3b8631b4"],["/tags/SpringBoot/index.html","8093f60b6bd225341652dab5fb5401e2"],["/tags/SpringCloud/index.html","1236c2f1bc7f06abc63c7b5a56fc735e"],["/tags/SpringMVC/index.html","8328e4c9a644b44d873385ccc0842d64"],["/tags/Swagger/index.html","c71034a7b514825bc8bd755a1a0d993e"],["/tags/hexo/index.html","0ffba765bd4af6ad6f76b45bf451b767"],["/tags/index.html","f3ec89265dd2f6f95ad3ed787f7cb6a9"],["/tags/jQuery/index.html","c833baa1e94982491caeaed3eec16906"],["/tags/java/index.html","c5112caeae9966aa9f0893dd41e2a825"],["/tags/markdown/index.html","53315bcd8e0b5fa470813d89f18f0c68"],["/tags/noSQL/index.html","5d895d049b5b5a919e5be6700d648a61"],["/tags/typora/index.html","387adb234f323c8cb5c15e0dc93157a2"],["/tags/vue/index.html","2179e9ccb166dfceba84a508ebd84f34"],["/tags/享元模式/index.html","e66cfe5e0ffd9cbf270b1bc9ff60d969"],["/tags/代理模式/index.html","ec14fe7e126a366ed2e4cdea598f36fc"],["/tags/内存管理/index.html","bb531f52b350d371261741d3660f3af0"],["/tags/分布式/index.html","05db52ec266356513fc82e4cffae1154"],["/tags/分布式系统/index.html","b6fe8d9542f7b644aa1bfc5ccff49776"],["/tags/前端/index.html","f2774d7af06b1d58c26377817cf8347f"],["/tags/前端/page/2/index.html","871bb4f1cca6a296947a41c101af717d"],["/tags/博客/index.html","efe3f00fb9dee2cf9864f1d7c97300e5"],["/tags/后端/index.html","9bd8a728304df2206ef890836009c01b"],["/tags/外观模式/index.html","28fd7232a990e78a68c7fba7a7ec5df8"],["/tags/容器技术/index.html","8ee167621fbaefcff6a7d5fb06031a6b"],["/tags/工厂方法/index.html","12658655ea7a760f8ee9388a072d03a8"],["/tags/微服务/index.html","660351574bba008e8f0fe0da2843a994"],["/tags/抽象工厂/index.html","86df529af92131b69a57621d582fd0d3"],["/tags/持续集成持续部署/index.html","3f513e8b77b1a50fafaed2c0c057ab7b"],["/tags/搜索引擎/index.html","87a701ebff88bdd1f38401f1a9e494b5"],["/tags/操作系统/index.html","686152349333aa1c63eda55886771d92"],["/tags/数据库/index.html","75d1df243db6b94ee273af754e7d5109"],["/tags/数据库/page/2/index.html","079245ac585aab9c09ffebe1f41b1bf9"],["/tags/数据库/page/3/index.html","f65a07b77efd73bb10c6438acaf9619f"],["/tags/数据结构与算法/index.html","8c42bc343e98c7f4638ba3730c772aa4"],["/tags/数据结构与算法/page/2/index.html","fa15a64d8e73c000e5ba32a55ee2fe69"],["/tags/文件操作/index.html","d34a73b64e3821a818fbd37087cac519"],["/tags/日志/index.html","a41106e00a987f82983a8636976d0399"],["/tags/服务器/index.html","249a88e759fb85b09b9605d6b11f1cc3"],["/tags/权限认证/index.html","fda3815ff7203f16967a369d7d56bf6c"],["/tags/桥接模式/index.html","fecdeef5cc9ea1d3cfff28840f486928"],["/tags/模板方法模式/index.html","b0c80f064ba28cb785c6e3b05cc8eaaa"],["/tags/死锁/index.html","bae2a0bc87a720030323934d211c8a39"],["/tags/消息队列/index.html","4ae2a8a65a19e0b08e8a6c164be78e5a"],["/tags/版本控制/index.html","4599bf9be03a37e39b5f4bef0ae54078"],["/tags/策略模式/index.html","6b8d8a4c797aeadde27b901cd8776a5b"],["/tags/简单工厂/index.html","b56ce0c1c9a5d8fa1066f44752d2c7d1"],["/tags/算法/index.html","33182b33012502118738711f7759f186"],["/tags/组件化/index.html","2cf320d30624918810633f58f46d94d9"],["/tags/缓存/index.html","6fcdd93eb0004d956ba29b3cd755d044"],["/tags/缓存/page/2/index.html","9925cba202de99ea846d074f29c49b40"],["/tags/观察者模式/index.html","5fcf8a8e646021b6324eabb545946616"],["/tags/计算机网络/index.html","587bc4d849232060f275bcbafeff0fe9"],["/tags/设计模式/index.html","067322e758ee7138e9fee15937947eb9"],["/tags/设计模式/page/2/index.html","67143c8f6be9c883fc427ad15931ef7d"],["/tags/进程管理/index.html","171d7d217f4a51366611bb9db8f2d570"],["/tags/适配器模式/index.html","4bfa34191a86cbdf85f82da4df1be3c1"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
