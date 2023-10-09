/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","1cb616c1d53f34be11fbe5b0e2868b72"],["/2021/02/22/工具的使用/博客的搭建/index.html","6abd20f3cf7657d687be936c7418354f"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","91f6e018fa18259b237902eb217b0140"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","fdff89e886bd518971e8828cb1c0047e"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","36e82ac947c42f4dc678c88525f14366"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","da17c06ddc0a766fe50ae393700a12f7"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","e5a56f722dbfa8b9755d94d71a5927d5"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","2bacc18e51c3487190df736119bb946a"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","3d58e1dd083037dc47af2c0ee7a79af1"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","c7fe60405d12893bebb096a41f6e852f"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","da81b786b1890172f17c9b17ef4b063b"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","07e6ff523e1dfabbfd35bceb78c64b20"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","c4566be8ad21a7cbe91ca234cc248a38"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","cdeccb6f2fa71049b87fb24cec1138b2"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","b69d29a2dab6c3a2bbc429d775ccc91b"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","8f2c90b1fda19fcbe99427766f1a82a0"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","cbcb28f68cc86fff635b192b36c7b07b"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","b919ac475b3e7f6f2dfec4618cb6ed2d"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","a4636f6f757d00c9bc92675d41da930f"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","c1070a35af9e19952b4ef5e4af35b910"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","e9fab2b3be30fb596ae240e8ce58c492"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","2fac04d71ea21bab1bbfecf1a2b8e776"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","b76c846fff7043db61475ca7c1f6d87e"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","30a7b56b259f3e328a5b91c36b485d98"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","4ec727f35efa9eba1f27a4d6a5547f86"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","4da1de865584e3d3415947acc7bb0552"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","ebc070f9b10437dae8afd6ce85eb9733"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","fc5c47764c5e5dab97ac2a2a85cbdd43"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","2efd960b186a8c078915e83bde6ec839"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","da344e47d0f03d475096b2e4fcd1e113"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","d65c2b0c1301643b0f3b8216c751898e"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","9da4ee704bb912fe99906ae0a40bb28b"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","579203e47de256870dcd48b320bf43f6"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","e445acb3c37f169b9053db26828a0911"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","2f3a580c1e917b57ed4d04e1b66f6068"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","95b47f437100fad41c75306bd36a667b"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","a719add2220ba5138bdd662fe8daacbb"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","0a66b60a5485b10cb353d620ac40b21a"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","5b514bdb09e6fd3ae5ffff166576ba83"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","7ebb025952527a5f0cdc27c0b1bbc54b"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","322d0832d29d96811bdce23f9d17d0ce"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","b5acc1300ba9341298bb16f8f8b6d5d6"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","90f07a21b2545a4f40dba9a949152b72"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","002479b7a90e79cee2d9bf7461518d10"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","150393e3b9bfeb878d700fec934bb193"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","4969e8400752187b062d2b15340a09ce"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","5195880b52386072c5f00db4b2e665cc"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","af236c84bd4d45a3846e0046db489df6"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","a54fe99acb6895661152f942a6d9ef0b"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","c0b23722e98e0d34503ef17bd72cb288"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","a139f3f0e7af6bcbe5354503ea32f829"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","696eb38cc36490627e795a6600709c4f"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","407ae75166a410b51d253fdad724ba68"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","ea6cd507f51953d1c8ac068bc2abe580"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","cbd8390abf8f426bcf1211d25f226629"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","ef8069a5a8a0b9cc324340a3154bf0a4"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","c55d31ac94064243010eed7b357625a2"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","f2312b2397b8eb97b8129bab2de6bc31"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","1eea43fa99c1640133d440165a8c7fd2"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","158f38b609f208609ba6b9c90d26e39d"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","6caea85757cfeb2aba500e95eedf29d2"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","2487f424b1625f19946316bb911aa4a3"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","db0c1ad927c94a09578067e2c9543b9c"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","c8ad75d28addced89d7c5ff68a2f81a8"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","79cd760f3b3e762a5865f8cf54ca2e31"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","749b2e5d78b9fd65b2f72b4a1a482de6"],["/2022/08/17/前端/jQuery/index.html","204d86aca5c77e505b4315136becf8c5"],["/2022/08/19/前端/JavaScript/index.html","3de6b05c66587d3f08a21298ca84204e"],["/2022/08/22/前端/Ajax/index.html","d9e9674b1d8c37e516d19923b8058596"],["/2022/08/23/前端/Promise/index.html","2e34903c1e0540ba31dc872c3c01ee2f"],["/2022/08/24/前端/Axios/index.html","e4823b80f5030340bd9118e8c782a2e9"],["/2022/08/25/前端/H5本地存储/index.html","a5f72835ae79f2eb15329f391357d3ec"],["/2022/08/26/前端/mock/index.html","4d1cd2e638c09b1e8aa867ed9b3da1b2"],["/2022/08/31/前端/vue/VueJs/index.html","7c40833f629922a289a703b90ae67a90"],["/2022/09/01/前端/vue/vue组件化/index.html","2b7b33224ae123862d7f728a13d8a69e"],["/2022/09/04/前端/vue/VueCLI/index.html","b5f3e32380b2b27064c0977bf3a80661"],["/2022/09/07/前端/vue/vue实现动画/index.html","7ccba7ff953498cc69c7062a9dad7f10"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","e2446b622daef94e2d7a0744a1e3b227"],["/2022/09/10/前端/vue/Vue异步请求/index.html","2c57ebdd6c70b89d078df2cd2669862c"],["/2022/09/11/前端/vue/vue-Router/index.html","599723f6d2d8ea39f5951d0ea9b913b8"],["/2022/09/13/前端/vue/Vuex/index.html","3bd578dbb30ca22e025cdb2deaaf1f85"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","99e31f61b7f0da1d823f639d4525f9fe"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","74fa193dc5bf45cc97286d760f8a3337"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","79f6883c5a97f03aaf11520e83ffcd56"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","306301e671b5ee6ec618767d98c5a3c1"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","8294782d54d2c591ecceb628b570dcd5"],["/2022/09/28/DevOps/Linux/Linux/index.html","bb4c42b13796b56862049f1e7860f73e"],["/2022/10/02/中间件/Redis/redis基础/index.html","c044be0b87a2b70dfb192be1b89b4466"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","45bc30c5f2210ca5793e7f8f5ad5fe88"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","abce7fc7de7c1ce035806e246a94e1dc"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","ccef48b278a4a14f9d24e7bcadc6dd97"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","2505d5f8e096d3bf3b926710926e60da"],["/2022/10/17/中间件/Redis/Redis集群/index.html","574225347d57bd9fc18152b6c9514775"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","71643404a0954a5b6873dd5ddc40351f"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","a0e3b85e3d40f86e30c52919a11a86ea"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","97ff3dba3a104cdbe9a08eff12c64023"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","82133661ae6ffe039f1ca61e8826786a"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","f2b95ed41be018328c6037a5984cb3fe"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","f7fc9f46f77b76e02f59fcb484d4d13e"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","513b54ff51228f651e089640973d62fd"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","13a62f52e15855aa814688668fcf6e38"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","019c0f608e12dd04ce99b917f656532c"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","0a99e4e85c5f01552127d7945f879220"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","e02f55b710db68eb98b44371801752e8"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","ac168625e053d6c0f0ee70de5fee7adc"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","b3fef72f6290b3b9a2a8912135191b6b"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","9ae9e3af2152cfce998a5666d45effc3"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","650c06a1957e8711984f12cb14fc3e92"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","5d86d3f900995c14aea4745c12f19063"],["/2023/03/10/DevOps/CICD/CICD/index.html","1eada1c27ef7c1e35c7a630a87cb851b"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","21b53996309bca6f83a21c5b2d2e1746"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","a1217ab0910de2ae35f32b6fefa26592"],["/2023/03/13/Java/NIO/NIO/index.html","6bf8fb6595c5b714790b27357cb13e6b"],["/2023/03/14/中间件/Netty/Netty/index.html","f7cda37113aae5f001fc17f4173532d5"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","5c328a020b4fbeeeac8f500ca3723ac2"],["/2023/03/17/系统设计/分布式系统认证/index.html","3435cb0e37519dcbb92c03b5afd4ade0"],["/2023/03/19/Java/JVM/JVM概述/index.html","4e258f30b54092bf491c37266155b166"],["/2023/03/23/Java/JVM/类的加载过程/index.html","95b17b162e9429e9b1faa055539bc33a"],["/2023/03/28/Java/JVM/对象的实例化/index.html","4d603d7b0f1fc9eda28c0ff5bdc3b449"],["/2023/04/01/Java/JVM/运行时数据区/index.html","f444577ba27628d808c769df36d77b8e"],["/2023/04/04/Java/JVM/执行引擎/index.html","9ba0dd3b709f74e0bf484fcc37333ca9"],["/2023/04/06/Java/JVM/对象引用/index.html","18d160b0413b42c9ba741f513b6f57d0"],["/2023/04/09/Java/JVM/垃圾回收/index.html","346250cf6a07db570208afea00d163fa"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","15d4a1f673b55f3eaa35fc2822a0662e"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","d44d580c14583c804c0665c1079dbf51"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","8f876939f0b498949dc9248c8f7943cc"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","ea61bb39c7ce33ba3c157ddc2833be59"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","8073a70fa4cd7e4f6a73a4b7023e6396"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","1955dcb625ada327bf24a960b6a4dd62"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","c94a94576292a271547e32787d046541"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","1617893851927b62e5ff9d56fb3fa71d"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","091aa21c5f9d4c1d8c45ca4146581818"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","85b59cdbb0c01d87f6d08fec1ede3fda"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","c3d44ae337782b128ecb44c614138002"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","d4979be13783ea67aab4cb9f0b44a3ef"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","b9521efe982f226b1e5b6fa235012a8e"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","ac8c39dff757cc3c4891ef1c758957bc"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","ccedbc55006552abc29d19ad3e2b15d8"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","b00078eb495b42da17c37daf39fc1837"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","4b83d24ccaf9cc7ed4c82e4b473982b8"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","369bad41bbbf5fbc0a1f760da0c6be7e"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","0470d2b5b7e9b370c00240f6da772947"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","dbbd815ad8b1093f20bd081378ec503d"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","8d1fa7d6d68cef2bad0db667f491693e"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","b7c16e05cc556e8c13c81af5c4bf28f5"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","aeccc2d483358f532f6ef6e2e1363d2e"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","160ffc3d002b159351ee49a47a51631f"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","bdf4e7310d01ebbdf3b698a3a218d44d"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","a4ffb104ab56c728a51a0af4faa7fdbf"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","8301b44681acedd2d6cf2189c910edb0"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","1faef9845f7d72b6a160033bbb209667"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","de3ff5a7a8ce2487737a643c4a3de1e6"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","95e4d3cfe2935e63de319dea1598dca0"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","f1c5e20e37e7f2bc765484b1d9f87d57"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","27595f6206bf85cb0659551d29bc9a9e"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","9347d555483c0fb909e8a81f96f311d8"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","7acfd78fd457a0d9ddec68f6e4f64f6c"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","7d7eb1f4775b4aec3e22ba3bd8ee1374"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","bde2862b4e6836dec575eb072f9152ee"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","3372e09580913c2d086776f72a7ba219"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","21f3acaa5b8771fc1d860235bf414083"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","46d263802e96ca93f46de3fbee87437e"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","ab52c0c35425fc90bc4377f50932bb6a"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","a7e493ac8958ada1037624ea47761a0b"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","5db84adfdb42f2b81e0569d6ee09feb6"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","7085502766c6fc498f6dfb910fad8068"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","963558c18029908b072aa526534dcb3d"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","9bbc1b6caed6ce8dec3ca7f49cf1cda6"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","6dcc1c469db0525d4f136a2870a51de5"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","e666c9a7cdb7aea9732162e231a4c2c6"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","30d6ccd1e6f3aaa12ea5939782c3a3b4"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","23a9aa353d86559e17f20ff14258a48b"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","b3b9cdcf646ca4689e6cd0b9e02eb2cd"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","ad1260d299b55c8c13ded422bb47d77b"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","6fb01c71f07323a35ab348f699c80542"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","a3f7b4a44f524672e63a72f047024608"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","245176e7272a65106da6ccf45ed734fe"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","280c0f954c416764872063eb645f7ae4"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","8f541bf13058a5d542bd2726107385b0"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","8e3ea810604133efd08c40dd86eb553d"],["/2023/09/04/中间件/Redis/Redis事务/index.html","f4c0eae20cd7b8afc50f742c248cd848"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","c2c84b52a169d2924629f321485ce571"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","4e93d3d6bcf41fb315c33e428d1208be"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","7f459f6fb97be6b39664135cabc9f871"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","7288674dc38cdc296a7bb2e128abf1a4"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","400aaec9ac4a81f86c4a5624a4c7cc0c"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","896d2cf1d0e09d799987bb20bf3d4edb"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","a5a71a3fbc81a71fa5d6792a2be99591"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","2f80df4daea580782bb9790eb737a295"],["/2023/09/22/零拷贝/index.html","8014dd7d222bfaa0391cd0d509b2ccb9"],["/2023/09/24/JWT认证/index.html","d178c31ebd0bff9dfbbd996a7c6e4f01"],["/2023/09/26/Reactor模式/index.html","5a461eb089d02b89c737e31599bdc322"],["/2023/09/28/Java内存模型/index.html","60a22e3f141420a9b773ce6bdae93f2a"],["/2023/10/05/Java进程线程/index.html","d2ff195a6695a57fb110b739ccac18a4"],["/2023/10/07/线程活跃性问题/index.html","87fca2d458b72ef7ee0b59652b2b7637"],["/2023/10/09/共享问题/index.html","60bbf55cffe0269eacd673c49795df08"],["/404.html","9e524f5c095653a103321261ec353d2e"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","b0a9c29600922d9369a70a8deb40156e"],["/archives/2021/02/index.html","267a83e831384e499baacf817077f183"],["/archives/2021/03/index.html","f810e82a6c165e753f68ff328ef60a28"],["/archives/2021/03/page/2/index.html","0aba0e4e601c8e393bd513ca959c22b4"],["/archives/2021/03/page/3/index.html","50c2f433298df0bc5e76a7db6e067766"],["/archives/2021/04/index.html","970f61c08f83a884e5882c7ec0cdb3aa"],["/archives/2021/04/page/2/index.html","5aefdc8e3b281d24e709460875dab45b"],["/archives/2021/05/index.html","c3bef28e49a6b5d8b51340bff5838984"],["/archives/2021/index.html","064c33cb72028c60743ba636809ee213"],["/archives/2021/page/2/index.html","a083fbaad8ffea56842d5b3230d9f6a8"],["/archives/2021/page/3/index.html","9be0fa595faa130dfae5c2f6a2699ee3"],["/archives/2021/page/4/index.html","bd6f7e0912fc594dc0fe03185c30903e"],["/archives/2021/page/5/index.html","568440add925103570f9c41908d65ea7"],["/archives/2021/page/6/index.html","3c7d9a035f880a0fcdb683079f43350b"],["/archives/2021/page/7/index.html","92aebe61a86bae2f23ebf93ea985888f"],["/archives/2022/01/index.html","b433b9e4f0b49a3e41a6e642573480b8"],["/archives/2022/04/index.html","a4bd0de9ae6f311cf084e51437b1b484"],["/archives/2022/08/index.html","71387f372fa92ecf771faabf26a2069a"],["/archives/2022/09/index.html","5df072b0e2e086018e51bc4f2092c23a"],["/archives/2022/09/page/2/index.html","2610f77a99baa62d0118198f9387fd5d"],["/archives/2022/10/index.html","64d303495aef7cd83a9c56737288b01a"],["/archives/2022/11/index.html","1e1bd47f486e4c82c136bc344d203d17"],["/archives/2022/12/index.html","f54a1c47f5d8588d1c2a0c08fe4d112a"],["/archives/2022/index.html","9ced7b8ec7a24bfb88695897daeb8aa2"],["/archives/2022/page/2/index.html","2921218d66f92caac44d26dbb778b292"],["/archives/2022/page/3/index.html","6769376185e719d9f67cd3c8256d8115"],["/archives/2022/page/4/index.html","18d46624144654caaf4610b0517c8cbf"],["/archives/2022/page/5/index.html","311a8857f6f09f16548b91f2592dd5b6"],["/archives/2023/01/index.html","aa78332b1321453e7ed0817a0823c91b"],["/archives/2023/02/index.html","4a5c2cd3b9a6e7c6c7997e22786d33a1"],["/archives/2023/03/index.html","7f7d2a8309e00687240be770dc1c8e6e"],["/archives/2023/04/index.html","16e95fa21601b60d8226168eeda40287"],["/archives/2023/04/page/2/index.html","369d7cb3d03f1ebb089bd03da4a9cab2"],["/archives/2023/05/index.html","382729ff66004aa421a5d48c7191523f"],["/archives/2023/06/index.html","756492b7fd682a35e681b5d244c1a431"],["/archives/2023/06/page/2/index.html","8f0535ee47d207b7b4e93840a4934bea"],["/archives/2023/07/index.html","98d425cea4c66256245c1ea3e66629dd"],["/archives/2023/07/page/2/index.html","63881147a79a708fcbf7cb593f2d34b9"],["/archives/2023/08/index.html","c64a3464e0a9c797673b6aeff85a20f4"],["/archives/2023/08/page/2/index.html","11521b701f287726c3fa2712139a29b3"],["/archives/2023/09/index.html","3be644fc8aa89ff37535d8ec2047d81a"],["/archives/2023/09/page/2/index.html","d05a1e0d569603971d9cc6b50e87921a"],["/archives/2023/10/index.html","0820cc9d8eefface0b613989a5221b4e"],["/archives/2023/index.html","9b449ca822e32e91c125403949610989"],["/archives/2023/page/2/index.html","e51b5b4871caf42cbf1a6a533b6c010a"],["/archives/2023/page/3/index.html","191ce5ca6328aaaad19e6a10936dc2e2"],["/archives/2023/page/4/index.html","4343121b797991554eef2295f98c6f19"],["/archives/2023/page/5/index.html","43eb1cf72ffc0f94a1a16b6a4cab7a7e"],["/archives/2023/page/6/index.html","009d42e19646ff89a5df4612eead23af"],["/archives/2023/page/7/index.html","eb13171c9fc4e0fe1f2821700e961c62"],["/archives/2023/page/8/index.html","df717914074ae4ced7424829b5de109c"],["/archives/2023/page/9/index.html","f8abbdb81adaef86aeff9b978651a826"],["/archives/index.html","a92a29eb2c05f1bd2071537f0e6a0bad"],["/archives/page/10/index.html","90b50a4e2fe77abd29248e341e7b6ada"],["/archives/page/11/index.html","a57e42b2904525ad791a75ee9f6b91f1"],["/archives/page/12/index.html","4dc367d7ed1b5ae71ae30ea4f4e2e9fa"],["/archives/page/13/index.html","35a365381ea1d079e652280ffcac45f2"],["/archives/page/14/index.html","984075008c64bb13b996c8da6691944d"],["/archives/page/15/index.html","488c2634ed35500250c17955fc2bdb66"],["/archives/page/16/index.html","7ea095972ab60e0c2d9ad73449e3b7f4"],["/archives/page/17/index.html","3710ef5e0b604988044a6edab211c73a"],["/archives/page/18/index.html","a34c4f786ab1dbb2d9f2cfbdf94ae52b"],["/archives/page/19/index.html","5a8d0068e109b764ba88d68e3f19a28c"],["/archives/page/2/index.html","8742f05acbd39fffc92d9ad3c4e43690"],["/archives/page/20/index.html","66b9da3d2539a3704f5efef619b75005"],["/archives/page/3/index.html","f87148c3f82ed6eaf2436dbdf3d5e51f"],["/archives/page/4/index.html","d2ee355d696f33643e3a5a4a99b1ef67"],["/archives/page/5/index.html","7dd34cbf6604e7ceefad9ef2508a3770"],["/archives/page/6/index.html","e9c59b375f2b047db31fddf48efb4346"],["/archives/page/7/index.html","efc29d7e0d5abd0d9e5ab8a75462f439"],["/archives/page/8/index.html","0b8d63fe7e13fb01b41ee51d06a4c372"],["/archives/page/9/index.html","449391a6d3ea0c9037bc8e5a112eb978"],["/categories/Devops/CICD/index.html","c79c545dd78961a43b8a8a54555f9d8b"],["/categories/Devops/Linux/index.html","3ceda0f1d3e60aae7f892b741fe73bb7"],["/categories/Devops/index.html","cee726b4d55710e47cabaa3ff5791185"],["/categories/Java/JVM/index.html","79819bb752c2429a1d8b41cecaa715a3"],["/categories/Java/Java基础/index.html","676574070b475c2636c2e16e6e51f47f"],["/categories/Java/NIO/index.html","a2a4067404f6551487916cbc88e1400b"],["/categories/Java/NIO/原生NIO/index.html","d47c3bcdce2d94201637e96eecbc74aa"],["/categories/Java/NIO/文件操作工具类/index.html","a34945786d05a32e5a34cf6097a9351a"],["/categories/Java/index.html","929792690d0464c339f11b07801cabf1"],["/categories/Java/page/2/index.html","234da879b1bbeb77d78094cf0b6132f4"],["/categories/Java/并发编程/index.html","be866b5c9bec478d4743b7aecd83c8f1"],["/categories/Spring全家桶/Spring-Security/index.html","5ca1e42f6ece63ec2277ee6103d0e10b"],["/categories/Spring全家桶/Spring/index.html","a3dd1dc70fa29173d144b9fd6b83fd9e"],["/categories/Spring全家桶/SpringBoot/index.html","ca0f31f16a8dfb1994a5b3191b16e358"],["/categories/Spring全家桶/SpringCloud/index.html","2756d0a50ca3b988fb99a5a6fa917096"],["/categories/Spring全家桶/SpringMVC/index.html","6bc3cf6e858ab878a0a9c2959c1f792f"],["/categories/Spring全家桶/index.html","caf6b7d374c0f507abedf1bb7e1dfb8f"],["/categories/Spring全家桶/page/2/index.html","15b4b8df2022efa5aa79e4e1c6b94cab"],["/categories/index.html","59d6d75aa200c91972870087b8742a5b"],["/categories/中间件/ElasticSearch/index.html","0b10c5c46c8d5fcede55e9e2390313aa"],["/categories/中间件/Netty/index.html","d02af87002ed49f9586098aa7cbf3d12"],["/categories/中间件/Redis/index.html","fb63682255be484500bd500c5eba0fc6"],["/categories/中间件/Redis/page/2/index.html","0c03c19dfd920fb1a956316a3e55178c"],["/categories/中间件/Redis/page/3/index.html","ed584d28cda9df0bd0ce6db7599bf6bc"],["/categories/中间件/index.html","93e8c229b5a64e9c2078f070bad209f1"],["/categories/中间件/page/2/index.html","63761f922d171aa3b7688ff23cabb38c"],["/categories/中间件/page/3/index.html","33b7764653555b4cdf4380738a18983a"],["/categories/中间件/page/4/index.html","376b8f9768aac734c620e562663083a3"],["/categories/中间件/消息队列/RabbitMQ/index.html","f953a008d115f9e32364471ee2bd31ca"],["/categories/中间件/消息队列/index.html","5cf47f0e72f28d5ab9fabdcd53f05f19"],["/categories/前端/Mock/index.html","c6b3f201996512a79448d24e61b266e3"],["/categories/前端/Promise/index.html","70998bb1b9a708fb06b5b266b1b1390f"],["/categories/前端/Vue/index.html","da78bc0f38d875d94e8871e9c4485b5f"],["/categories/前端/index.html","307a44540f736f4f350459f19e2247bb"],["/categories/前端/jQuery/index.html","51d01249ca34ffe836b26dc65910e01a"],["/categories/前端/page/2/index.html","60179b21526804963bbe28c1dc1bed09"],["/categories/前端/原生基础/index.html","bfa3fb00d6b3de473fff25e60d6b0baf"],["/categories/前端/异步通信/index.html","b1037d6f16257a43d57431026fedd06c"],["/categories/工具使用/Git/index.html","5a19bab56b64d9f07e6bb6b72c3b6d0d"],["/categories/工具使用/index.html","d2408cc21d822a6a949ad470b8425a4d"],["/categories/工具使用/markdown/index.html","32ac0b7285ae99999baaff75ab65765a"],["/categories/工具的使用/Docker/index.html","929e3bf9aef1b4864f531922b049fc36"],["/categories/工具的使用/Nginx/index.html","e936bfdf8820c645b15a6d9cd70d38ec"],["/categories/工具的使用/Swagger/index.html","fa814c280ff0ea9fcdbb60d4510d5ea7"],["/categories/工具的使用/index.html","48bcf0b375faaa0285c09dfb421be673"],["/categories/工具的使用/博客搭建/index.html","766128005118a5bd23666522722e9930"],["/categories/数据库/MongoDB/index.html","57d73a99d7bb7db4594ffe7648f5e619"],["/categories/数据库/MySQL/index.html","12f9b1489d8c31503dbfa3b11eef70de"],["/categories/数据库/MySQL/page/2/index.html","e311fac6035cdcd3af3c3bd0eb77b544"],["/categories/数据库/MySQL/page/3/index.html","abab0d606dcf36e605aca186f4bdd5c2"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","4074750dd186533a22bc5b06ea7f6c3c"],["/categories/数据库/ORM持久层框架/index.html","5f11ad614ffd28f8bf31aff05eed9c7b"],["/categories/数据库/index.html","fe8684918cc391cfe3e9ef13e7aa64b3"],["/categories/数据库/page/2/index.html","85e6ceb7680d33028c974ff3d0547f30"],["/categories/数据库/page/3/index.html","4eb3bc82c376c179fea97217c5a6fc83"],["/categories/系统设计/DDD领域模型/index.html","660bc3f38a008a6a7f7adf0b5dbcac0f"],["/categories/系统设计/index.html","719ebb4bf500e4d27c066133c700db81"],["/categories/系统设计/page/2/index.html","ad6669871b741474c9a2cd4421449719"],["/categories/系统设计/分布式权限认证/index.html","9a59b96650f1df09cd18feec1a850f1c"],["/categories/系统设计/设计模式/index.html","24b60da910f8b09a99075641aae3c9ef"],["/categories/系统设计/设计模式/page/2/index.html","bc0d9a96e1b89bab978a24c35c0fb6d7"],["/categories/计算机基础/index.html","1607a3801558756be5fcdef56b47671e"],["/categories/计算机基础/page/2/index.html","48b416047dd21d47e7aff1f3fc66e885"],["/categories/计算机基础/page/3/index.html","275b5f77a246256d32c0a82b68bf8660"],["/categories/计算机基础/page/4/index.html","e5f1572202df68645e47cf72d592749d"],["/categories/计算机基础/page/5/index.html","8f77fe3e60fb6204a1d50e28ce20cc80"],["/categories/计算机基础/page/6/index.html","e57349c868a8e0642e01b935fc5f3f4e"],["/categories/计算机基础/操作系统/index.html","378137c8fe708277660d5ea649824682"],["/categories/计算机基础/数据结构与算法/index.html","a1c1df36ed7e2be6baaea52e5887d166"],["/categories/计算机基础/数据结构与算法/page/2/index.html","1f3208a102d94fea3638fe788552a4be"],["/categories/计算机基础/数据结构与算法/page/3/index.html","dcd4a9a63d75cdbc93fc4823ce53c77b"],["/categories/计算机基础/数据结构与算法/page/4/index.html","60221444270c0ff4780ef70f666c08db"],["/categories/计算机基础/数据结构与算法/page/5/index.html","bbb5037c745a33c5149907829619ac7d"],["/categories/计算机基础/计算机网络/index.html","5bde932578cc8512da8ed691bd24a703"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","4e72ab1944b80a53d2ee6cac4431838f"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","39c5507616437f8b0867bdf897239977"],["/messageboard/index.html","fca52c193d44de533fad012d4583b489"],["/page/10/index.html","27f06d89dc8d91437c5cee4c3fd02b1f"],["/page/11/index.html","d1af922fa256dc355e5a92696778d370"],["/page/12/index.html","6dd608f0332436f5f30626c57c7f8390"],["/page/13/index.html","b595feceb4611eea111aff9cab1041d0"],["/page/14/index.html","04c4a0ac01d6885eb3bffca5d93f0d49"],["/page/15/index.html","bf1e6c932b303dbf0e0737c2c039fe13"],["/page/16/index.html","b5b253123a7e69129a5c06ebb538b430"],["/page/17/index.html","987541385a413ff0578e48b75da93f3d"],["/page/18/index.html","d7c29412423f26fef292fce4224c13f2"],["/page/19/index.html","fa7f855525df1a65b785b87ef983026a"],["/page/2/index.html","66a21b4c4f08edd00b471ff4b8538c85"],["/page/20/index.html","85d73707813f39f05e9c11d5261e2dcc"],["/page/3/index.html","1275506d4968bf1c3149a5568ae4e311"],["/page/4/index.html","2743ed161f30f8abadf0c25fef5b073d"],["/page/5/index.html","9e7137e925347a75cf40329abac83490"],["/page/6/index.html","c968367d9e0d9615b01527cf17e70224"],["/page/7/index.html","c5e5b61a79bf9f62ec638ff0eaf51d57"],["/page/8/index.html","7f4cc130aa91dfb0df746cd956ac825a"],["/page/9/index.html","ac3c12f024181248b0b3077eac5cd3dd"],["/sw-register.js","43cee20ee091e8c01c0bd4de90397d0d"],["/tags/Ajax/index.html","5e32223331c1fcf246a139605d98b8e6"],["/tags/Axios/index.html","763058ad4648f4210954a40505bad33f"],["/tags/CICD/index.html","8da684115c9d181483c6d7c1d84dab7c"],["/tags/DDD领域模型/index.html","c1173dbdc307a72d5945c39ac9fa2f14"],["/tags/Docker/index.html","23fa4a63e7fd0b8e19ea5721b8418487"],["/tags/ELK/index.html","31599d6638044cdbf1b30e0c059d9e0b"],["/tags/ElasticSearch/index.html","85a2f946584f25b9b26c6069837c84ae"],["/tags/Git/index.html","7c029d1e331242c15f64755ae2a36a90"],["/tags/H5/index.html","742915e389bb19cbd9bbe11bb573e197"],["/tags/JVM/index.html","d84c60053546694a6ba35409c1c39d7e"],["/tags/JVM内存模型/index.html","ab874b5e68cba7b27ebfa5b15f11c0b5"],["/tags/JVM执行引擎/index.html","427122154a0a375b76c5d62134823d5e"],["/tags/JavaScript/index.html","63782732ff153dc049cdba043cf07bf3"],["/tags/Java内存模型/index.html","f8a1b89b105fa37071d9a5c169a98efe"],["/tags/Java进程线程/index.html","0e272abcb00303576677d44937f8ad4b"],["/tags/Kibana/index.html","5a2874cd8e2869997f5ec51f9e538287"],["/tags/LeetCode/index.html","0f14e5944ba06f7195fd634bf752894e"],["/tags/LeetCode/page/2/index.html","fc0121bd89b12935c5703e1e7c8615a7"],["/tags/LeetCode/page/3/index.html","06dd6426cd0c417057f8ef8292890db5"],["/tags/Linux/index.html","5adcee9599b2a36c10b782bc9adc9193"],["/tags/Logstash/index.html","2aff458693176f1243b6fee0fac9dfd3"],["/tags/Mock/index.html","1ef0d477c575f7cadb97f6fda57ad5c2"],["/tags/MongoDB/index.html","e644dadb4ff600d24a2d1d1591eaa035"],["/tags/MySQL-事务/index.html","e4190eddd4160da3a7dd0085c4b7381e"],["/tags/MySQL-数据类型/index.html","fce6e2e41363826b9d3ef1d21d76f60b"],["/tags/MySQL-日志/index.html","822e51ec7b0123fdfec63729cbd30829"],["/tags/MySQL-索引/index.html","15b892d9413895290a16d8b577eb7be7"],["/tags/MySQL-锁/index.html","fffa1756da9bb910935725b0f42788e3"],["/tags/MySQL/index.html","d5eee4eb7cf7fc736515aca057301b33"],["/tags/MySQL/page/2/index.html","76b3766f619b378ce237c7363d62b142"],["/tags/Mybatis/index.html","b0023d315cee00b0ce54e88d45c07def"],["/tags/MybatisPlus/index.html","405c2491b57c4a963593024b48c5c875"],["/tags/NIO/index.html","dcc085c1eba5c0ceaab245b22892e361"],["/tags/Netty/index.html","40b4ea9ec9406acb6370b23831edf947"],["/tags/Nginx/index.html","1780facfc29458877a35523d63bc3232"],["/tags/Promise/index.html","83d3b92d171adfbab2f84989c92adf2c"],["/tags/RabbitMQ/index.html","694a132427381f2b8af4c029ba21ebda"],["/tags/Redis/index.html","9407d960da34c6dc1e7018d79c0c637e"],["/tags/Redis/page/2/index.html","0c97d359af3e8358f043da9062f30d43"],["/tags/Redis/page/3/index.html","d8a83f15fa2db69ce5cd6aad6e355c83"],["/tags/SSM/index.html","2d983cbe9562dc42d9e2ff4001ac6c97"],["/tags/Spring-Security/index.html","b03d9e00b8de1db29a9ce266bb37047a"],["/tags/Spring/index.html","5a8359e62c9db95affadedf010399502"],["/tags/SpringBoot/index.html","3562f771215c7f6f2bb8f3413302ed0d"],["/tags/SpringCloud/index.html","988bc96eabbd79a3c3a52ef7368bdcdf"],["/tags/SpringMVC/index.html","b2861dd549c692a1439d8c479cd5860c"],["/tags/Swagger/index.html","1ed5f27d389beab066f817c1759b69de"],["/tags/hexo/index.html","704de526c0afa535e477434b848a5bf3"],["/tags/index.html","ffa219fd23fda1684bfd125974851e9a"],["/tags/jQuery/index.html","3ed3c49ad8b64ba0c2cfd851af14c1e0"],["/tags/java/index.html","bed4db980edf7c298c85298064552cec"],["/tags/markdown/index.html","ce49972ca55dfc5df65eaf371695b7dd"],["/tags/noSQL/index.html","f04214eb46545f5191331242db552ec6"],["/tags/typora/index.html","01660d8c8da0d21c8b3d4f35a1cac291"],["/tags/vue/index.html","ccfa59108c91c60aaf82d9851954a4fc"],["/tags/享元模式/index.html","84d5e042783675d766e9c07bb3de0d2a"],["/tags/代理模式/index.html","ef2fc52f123eb41f1b307345347bc9e7"],["/tags/内存管理/index.html","83dac440271dfd65d85223824953d2af"],["/tags/分布式/index.html","a6e3f92613e00b744803ea8097446f48"],["/tags/分布式系统/index.html","78d82335f07cccbf8ea2cab2be304e4c"],["/tags/前端/index.html","335dcc0ac67ca834ebc78a8f6e08f350"],["/tags/前端/page/2/index.html","ad7269b5406a5f17173512f7a0c8035a"],["/tags/博客/index.html","5fa7c4ec35a419be4fbc431fe2f80edf"],["/tags/后端/index.html","f6b9464e5ea49a77fa861581d500e8a5"],["/tags/外观模式/index.html","7983a855228bebb214763131b92c936a"],["/tags/容器技术/index.html","809dbfd71bdc0713c716ceaa9a463d19"],["/tags/工厂方法/index.html","243b2ad753ac3934a3033a0b9be23953"],["/tags/微服务/index.html","065b77f6e3aed8a90230e3546aa4707f"],["/tags/抽象工厂/index.html","8dc56e6a77a0712cbb71110327ca906f"],["/tags/持续集成持续部署/index.html","127130e464fcdb45a1c951ad99636162"],["/tags/搜索引擎/index.html","ccdd11732b6d194f7c5708aed2eb8c7f"],["/tags/操作系统/index.html","ed0848cfcfd23f5065d2c73fb8d7c5c6"],["/tags/数据库/index.html","430d8385e747ddc90e9938e24ac6824f"],["/tags/数据库/page/2/index.html","9c5673716abb48676e1937e515b148a2"],["/tags/数据库/page/3/index.html","dc7315f98528ccef9e94b5b18e9e45d9"],["/tags/数据结构与算法/index.html","592f7564bb7422b92f54447725f8c7e4"],["/tags/数据结构与算法/page/2/index.html","3a47389ae8d1766fffd6ea68a4a09077"],["/tags/文件操作/index.html","548082647f92e03ec5ae01d7de09ad8b"],["/tags/日志/index.html","bce7d8b040e60157ac2a8afb060e8fcb"],["/tags/服务器/index.html","2181b9a2f7f9fe244b46f2cf1713d8ac"],["/tags/权限认证/index.html","ca8732eeab942dc8b48ad3e28809b32b"],["/tags/桥接模式/index.html","6d93a71f3e34254d03675edf4fff835a"],["/tags/模板方法模式/index.html","0d7d1785422cf1d4622a63244ed40eb7"],["/tags/死锁/index.html","46a79560f50c30f2aa910ad513092d84"],["/tags/消息队列/index.html","6d16e0fb4783845c5f713c683ce36c73"],["/tags/版本控制/index.html","48ac5c8d10b1b44eb5e11a80cc36f4b9"],["/tags/策略模式/index.html","64d55e97516e186af7d425289172dbbe"],["/tags/简单工厂/index.html","c67809548cdcaf5e61c9344aed11ac04"],["/tags/算法/index.html","3cbff3574aa4488a4c316f8a0bf37a82"],["/tags/线程活跃性问题/index.html","6bb1dd703a1438128b1aaa143cf8f7de"],["/tags/组件化/index.html","1e5887b6b102330e2e99fea954d843a6"],["/tags/缓存/index.html","b87bd7264af914c1cba422f8c7166902"],["/tags/缓存/page/2/index.html","b752f957f00e818b037581f2ab9d5ef1"],["/tags/缓存/page/3/index.html","a38b93c5ca30db0fc6eaa8a99abf58e8"],["/tags/观察者模式/index.html","f0afaf0c94fd2ddc57f6a984b96d95ba"],["/tags/计算机网络/index.html","b75c2b7c5590b210a7ad6454a7e5a1ba"],["/tags/设计模式/index.html","aae56a3787268d212a52890ad293b475"],["/tags/设计模式/page/2/index.html","5bd0949334fd75b431c82ac1e095b95c"],["/tags/资源共享问题/index.html","e4d614b2b1b264de5e22f41f185f59bd"],["/tags/进程管理/index.html","9c48c373501f0081ff809caa81d8fdd6"],["/tags/适配器模式/index.html","f5af80690d79f2aed73c60109b764d0d"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
