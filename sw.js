/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","0a0fe9ac80269c7eb1eeb8b6f36aa446"],["/2021/02/22/工具的使用/博客的搭建/index.html","e78c0ad25acde74261af3cf1ec206e8e"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","0bf3f7c8e1a10c2e6fdb2d51089fbcd2"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","9b732c4bd73f82d3b5c3b23dda089ddb"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","b5354a3678550db04bda73b521e2bae9"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","8c8f1cfe9506a5d8f417cf20a3b3c362"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","2df9df6ae98e79d6e41d5ec5acf1c63f"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","9fed269f98bee370bd7ce2b7a946b3ba"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","bdb3bd4876981c29b81100e76dc68bdd"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","b2bd915a9c7b60c3b260e3266b82bf5a"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","2ddaa654004705e1890e56961aca2460"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","bf303a5967bad139f06a53530251776f"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","634b93e0fce1e384221f31f6dd31212c"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","33b4c21e36dc185e22455861409e1d4b"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","2a96c1f536df72f2231b809c55ad3ba5"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","c82e7b3060bb3963ac34a6337b212fd4"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","776280615aef815c0ea87922391cd468"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","9b5890e3383360351bc42f70073ce970"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","eb9b40d84f2601eb2533e0ca6e9e0459"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","646fc13ebe73a4d3fbaf058d8ad422c7"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","d0048120190553b5e990f8bd828b66ac"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","0c75707abc4f96222b7db1e0ca811706"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","81b3b3a64a9e1fbe5c619109d771bffb"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","207e375ed233b750111ea07c0a8e8ad6"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","6b0323b2b2a4394618a7d18a32111871"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","4e4ea630b231dedcd30d3e05ebdc02bd"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","0cc6431db6aed24271897d8c870d03d6"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","809c4b186b5be607fceec1ca959df4a9"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","c12fcc968e5a93e5a76ec05b2669cba7"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","a96144f3961f0a3747e43034f03510e5"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","0ea23ee56a8a2baf203071e8591a9c6f"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","a151d1ea8bd0765f058fb60cdd0624c3"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","f4cbcbee9c7800defb624739691d7ab9"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","e52579df007931fe34ef71e648980d9e"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","696dafead7f6ab5bc02426c464af5647"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","1050d56548c645f88045ea7a8bc3ba73"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","7e9e83299adbdf4ca5a8b9b5ecf8982e"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","717bde397dc036c95e5a74543e09099f"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","f982c70006c6f177afbf62644e27841e"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","d8870757f1f4127d73137e3600e3b21c"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","269fe2020a03ce358fe848849dd6cca7"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","421ba5080a1e5c7e458b6555f00bab16"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","116c44354606f71b929ee13937323639"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","759264a95e19e1567f613040d7fc235a"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","50b878572a1feef50c233c8be7394e7c"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","1f9271a89e5004ec9fe1d2a7afced02e"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","20b5937c7b31f8b2c18ff85e0c0f1dc0"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","58d569f0822b28a2f166322b3e743662"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","b06845dd46c38c23f37095e968a85683"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","078905d7b6591eaa4383da8c157bdc53"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","687589a117d18e2c0e83126b69c749e3"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","74dfc660926a8239a4ee5488331279cb"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","221fec49bbd0c1822e4ebcacb4501dc7"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","712cf279480abaffde2ecca2b16c85f0"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","f6c5a577b38a52dcad0ec4bb1fbd176d"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","e292bca63cdafcbcb172f9344ea45371"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","461837098527574271d3b507eeb05108"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","991d211676306b5c5eba3aecdb59ee88"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","bfe1603b923a346586567712102fe413"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","822c58245a23e9a0c6b900237cfbaaf4"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","a846c9f275b45fe595c285bd651aa833"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","4b7b85e70ea9dfe979fa3bf2b8139913"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","ca3d9de746199d780db33a049a7aaa8a"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","e72b19d540d587a6583a62e6ea151fd9"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","5c2e7ef0defc095815344c5176a9f8a0"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","b35f0bebcf2e2830a32faa183722814b"],["/2022/08/17/前端/jQuery/index.html","3ef6db70d1887ae54b74f294877b3796"],["/2022/08/19/前端/JavaScript/index.html","0fb08ed70c46890185c9f10099305a75"],["/2022/08/22/前端/Ajax/index.html","69540b017c42d45bd52639c2dc0aeccc"],["/2022/08/23/前端/Promise/index.html","326a48411981c2806c61986fd08e6e0f"],["/2022/08/24/前端/Axios/index.html","5889a65cb3b59f9d7a3c86a049833572"],["/2022/08/25/前端/H5本地存储/index.html","ba4017addca2cca63773864186f31143"],["/2022/08/26/前端/mock/index.html","05fc84b76cae90b090fa48a06007727d"],["/2022/08/31/前端/vue/VueJs/index.html","d8d5c1cfd3cf5a96c29624f3ac03b44e"],["/2022/09/01/前端/vue/vue组件化/index.html","a1b35c440cc9c1cd6ce53163666e5255"],["/2022/09/04/前端/vue/VueCLI/index.html","282d47f96a65c94bbc6656573ebb36b2"],["/2022/09/07/前端/vue/vue实现动画/index.html","02ce4b896d5fa94c563c8a4c26c3c56e"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","3b3f37e0a7d0cf6fde3a9140408bdca1"],["/2022/09/10/前端/vue/Vue异步请求/index.html","ab8983411039863aeafaef61b844c318"],["/2022/09/11/前端/vue/vue-Router/index.html","1d9befcec831b816a655dc020905ee37"],["/2022/09/13/前端/vue/Vuex/index.html","1f236ccbf88f92cf9cb2ae4e3a941d47"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","bcb5113c01aa8774892cd8dbcde14d64"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","60500f9fbb72f4eea3332f6453d1a2f8"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","65a594678fea3db6786ba862b16a4612"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","1f49e1a6d29f002e8ed611ba0451c062"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","617b59e9beedda3f8a6359ae59f51c42"],["/2022/09/28/DevOps/Linux/Linux/index.html","870b20b5aabbff4c8823027bdaa6120d"],["/2022/10/02/中间件/Redis/redis基础/index.html","c5335eceea9e4d6c9b007edd5c628a2d"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","9890a83a914035b35427d016d113cd32"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","72a91d5e9cb4cd71d2803b87e68a9764"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","4b7dae2ff44538505b137045d549e5eb"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","88affc8368392004f13f349a79327ea0"],["/2022/10/17/中间件/Redis/Redis集群/index.html","b5922e1ab3ba158b6438a1881279ef2c"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","9f64d82ed3104955cf2e7e6f9ef1b8b9"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","647e0ac6c70b570e66f5d716c148b0ef"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","d6ff47226e04e45b44bbb663c15cc234"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","d75042e535ae836c74e74f4b096888e0"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","044be794ee6b901ac0a1cb3beb033d01"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","0bbbddd9a85f96a006ec03e0dc3ea5c2"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","9c2babe6986ff08f79cf317c92258e9e"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","f3dbc5f1177592e537368e5f69d5e77f"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","c52d968172565b36083e87c7caa1748a"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","8ecbc673232feb224635ba6ebed54081"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","58f98bfe0ea8122cb563c0caeb7c191c"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","0479396a3614de48f399ee61b3ccfecd"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","7ee4e2d77ca5af9bd14563955e1b9a2f"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","9ee83b433bf3e3c082cd39e7e21fc839"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","40bc9c3bf9b67845ed97b485f5165a51"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","471be68af43efec9e5ce06e179d22e3d"],["/2023/03/10/DevOps/CICD/CICD/index.html","2c2e9822ebf78d3d0eb8934ab12c08d1"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","16d0af6c2fc69583a25ee721b44a3c0a"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","16d4cbe60290d99b8996a8bb5ecc5ee9"],["/2023/03/13/Java/NIO/NIO/index.html","3c8270c27861ffa59ec81ea54c8bd09d"],["/2023/03/14/Java/NIO/Netty/index.html","e7c56bcba659f74ab72ae0c4afe622c9"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","1a75b71f8ebad347fe77cf56accf7e18"],["/2023/03/17/系统设计/分布式系统认证/index.html","69d5ef81571953d69c458f6b71b303d0"],["/2023/03/19/Java/JVM/JVM概述/index.html","8131a654604c66ccbc4dba0fa353aea6"],["/2023/03/23/Java/JVM/类的加载过程/index.html","7aaa386e97caf6231e9c8d7a1d72bfe4"],["/2023/03/28/Java/JVM/对象的实例化/index.html","b1dc8289007ebedba37c92d7ebe1b58d"],["/2023/04/01/Java/JVM/运行时数据区/index.html","cef9c1f992766e74a0583ea73e6879e8"],["/2023/04/04/Java/JVM/执行引擎/index.html","da83b5efece7dfd4b04eb33cb54d0b35"],["/2023/04/06/Java/JVM/对象引用/index.html","70ad4597501abbc059926eabe4458775"],["/2023/04/09/Java/JVM/垃圾回收/index.html","49d386d75dd7a74eafa49caf2896e0e3"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","b99d2039bd31ed973f4a8a538ca675c2"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","a7ac052e11e59b8840390c86e93416a0"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","8476efed7fa65190f03ecc8004ceb50c"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","d2feff2cb363fa7839e5d3fcde5f37a4"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","5618f215981cb2144f48b7d9a8fcdbcb"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","98b5be759d9c889c2f9c3a5c1850f197"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","6d10d40bab41923306a4f27d05e71fe6"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","df19a13f5dc0010cf7fdfa8dc2ab416c"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","d5e673d35b8723890dec36ee3080418e"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","cac2c90bb20a488cb0bba0047d9e56ca"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","e71e14add96481f28edde97496351cfb"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","62abb9746cda4e58ca31f1e6e218ea63"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","51700ac26eebdbe3bb64c8eed2a9e66a"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","c7de504b7bf0c85b09da6bb6ef647428"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","a7c7a9bdc46a7e59fa21b727a7f25a71"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","27d7c727e0108a7b6eca0255cfde2090"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","f506c9ca146d08877850568931a89ff1"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","fc417a1f818295cbacf8060135343587"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","58f94a2dc88666cddb4e0f7f7d443832"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","8948bc896553334bb98cd24b6052c152"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","90363ae0f8f1c81686418ef3e0c319c9"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","baf2dc9168f84b22483ffed5ce1006ab"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","102bfb27e96fb7651817d560be9489ef"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","cb7a6bf24ebaa1dc5c697a9ab9688dfb"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","e8f729daae6b0ca9249196cceb4c9507"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","77dad187b06dbfc1bcf0e56aa0fa5ea9"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","f8df194f91669efbd4b1e3d67508c1ca"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","2ead54ab37bd9fc74811f63f653abe9a"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","4edac0e41b6e59e607dedea976a8119e"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","5f0167b1a268c891d81fa76bc9d21ef9"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","0cfa214293f73af9933c1181d4efa62b"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","108a3953138b71c96bbe69a4ecd9fa3c"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","5c28c7d8be4fddc8dd97faa4cc24784d"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","965c6802c41d3313ddafe425ca1e657e"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","4b89774840b9ee27aff367b1cbea7a61"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","85201bbc2dca67cb8e6aa9e5026b14a1"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","3bfb409f2726044dc1e86e02871690c4"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","82468312ded8643623e48777623f6188"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","21bc4399d68e2275eb4c9c5c58c52dd7"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","f01b4b1b4c62ed9ed71057082b1c7775"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","14b0f56bd04c63fbce5b2a3be5902750"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","a4181ff55db46b45e46036e8b6a87398"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","de7eb7329f4871899546cd18eb488a2e"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","b71032838a7673818b18cf1a7097e948"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","b934a2acb4f23884f86365b528d8ec1b"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","65597382a4a0518c1656b068e2ddfd39"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","7d728d04bf78d719ba250ba13076b265"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","69f8e87fd51f468b9a0a9a0faebb7c44"],["/2023/08/13/Redis实现消息队列/index.html","30a87d213047bb45d6e7b8c2f72c0dc8"],["/2023/08/15/Redis如何避免单线程模型的阻塞/index.html","adaf33025a2c257031d8ee6536893c92"],["/2023/08/17/如何应对变慢的Redis/index.html","8342050b6b220c4a747ff7c450b6b1f7"],["/404.html","672a18ffe133a04b226013dbedaa46cd"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","af9666aef9f095afb1cacd2ea13010f4"],["/archives/2021/02/index.html","d526b7727991011d2425ff5306386d1c"],["/archives/2021/03/index.html","ad4108be3b7eaf0ab0d24dd3b164c460"],["/archives/2021/03/page/2/index.html","e93800ba1c6951d8f4aabc8cdef33b92"],["/archives/2021/03/page/3/index.html","e9a1f3d7cceeb91b22bd1019fe72ec15"],["/archives/2021/04/index.html","9876e21d28f17bfe628e969ac0eb9b58"],["/archives/2021/04/page/2/index.html","315ce485d0ab8bd9056a74a773927834"],["/archives/2021/05/index.html","70c019425160d21353b648ffe8bc0878"],["/archives/2021/index.html","db1f408af68b0aae2387b0410a69dddb"],["/archives/2021/page/2/index.html","dde303e01a77e18fe308a1c623dfd2a7"],["/archives/2021/page/3/index.html","ef36da4a3c270dd6a13f1d3e296bf22a"],["/archives/2021/page/4/index.html","e7ad57eeb6c20ea3c45b86e5c5573168"],["/archives/2021/page/5/index.html","edfa30b3c145d68f5c87e8e84d08f422"],["/archives/2021/page/6/index.html","b37bcea589f5a23ae701c3c2390bdbe3"],["/archives/2021/page/7/index.html","40222ed65168a45ad00eec1a906bb383"],["/archives/2022/01/index.html","411e4ff49ec0c1e8b87a2b09ca78ccf5"],["/archives/2022/04/index.html","48d857cfa2d091396f68288aac1c16ce"],["/archives/2022/08/index.html","2b41468a3f0ffd4e30861658b6ef18cf"],["/archives/2022/09/index.html","0a2b75c0aed09ef66607045854fb9291"],["/archives/2022/09/page/2/index.html","cde5f223c167e82a67682657376b80fe"],["/archives/2022/10/index.html","cedfc6f3f10dca8579c3eb4bd9b7689b"],["/archives/2022/11/index.html","62412dec7bc4d8541b2c74af543edd93"],["/archives/2022/12/index.html","da28953b08abaa7440639259738a5eb6"],["/archives/2022/index.html","3849032ccd201e82964303fdd7e6456a"],["/archives/2022/page/2/index.html","8663beaaa363c799cc036fb63cd9cb7b"],["/archives/2022/page/3/index.html","80a7244bf00d0d75579711086c463a80"],["/archives/2022/page/4/index.html","6505169ea809bb53a9d0b34811622e10"],["/archives/2022/page/5/index.html","807bd7965706aee9e92ab0d7bd5f6761"],["/archives/2023/01/index.html","5c2e0202aa23e245e51583e14768ff16"],["/archives/2023/02/index.html","90aa802ab983fade17dd1479f8b8e410"],["/archives/2023/03/index.html","8417cba682de4e936898aba5f8c50588"],["/archives/2023/04/index.html","37c96d27305bf5ecfb50ff33c98846be"],["/archives/2023/04/page/2/index.html","a2032a611d715da09074a988f227d9ef"],["/archives/2023/05/index.html","88a94c3d2f23fb63108c1bd871da9c47"],["/archives/2023/06/index.html","9c1e58243cf872f671e7841e319e4e77"],["/archives/2023/06/page/2/index.html","3d3d4decf580fd721b33a48396b9ca98"],["/archives/2023/07/index.html","86918e40146ff9d82f536b4b8a0bef42"],["/archives/2023/07/page/2/index.html","9dbff8917a0102a3cb9583939cf19392"],["/archives/2023/08/index.html","abdbc3f66c74c7cc613c2f6ac5ebb7d5"],["/archives/2023/index.html","2187d1fb6db2590045a00110d38db7f0"],["/archives/2023/page/2/index.html","1c8356959aa6872e131322207ed0fc4c"],["/archives/2023/page/3/index.html","8f42e63aaf45677610b9fa3a525c0c17"],["/archives/2023/page/4/index.html","8c37fb7f33c838de6794fd9e921e0855"],["/archives/2023/page/5/index.html","2f65c6384d529dbcfa4064a9fd079729"],["/archives/2023/page/6/index.html","f3c5b3d7bd34717dc40aea658da4e470"],["/archives/2023/page/7/index.html","1fc173bab68c8337a356512fbb68e4cf"],["/archives/index.html","f623408ebb0d575be5c8239b72934052"],["/archives/page/10/index.html","27d949d3c3270e00e73b84636e8b5105"],["/archives/page/11/index.html","ea6583710feeb4f5fa5b5e5fd7aee0eb"],["/archives/page/12/index.html","edddd1521d7fb96c7c844eccd184e27d"],["/archives/page/13/index.html","09e4491906cb3b3e75d39cd012b9cdf2"],["/archives/page/14/index.html","da4520b1bd7753d8f4e858c69ad2870d"],["/archives/page/15/index.html","4d8c3b3401506d8038570ea2d4d21d5b"],["/archives/page/16/index.html","d4f7079b7ba000ebd0a01fec9b585c9d"],["/archives/page/17/index.html","d6711b2e14ada91721bce79fd26ef647"],["/archives/page/18/index.html","d9320bbb1ad70dc6eefca64795e46b31"],["/archives/page/2/index.html","cafeb677e732cfeafa5972c2740fbade"],["/archives/page/3/index.html","4f529dd9927c122b8ccda0448b0f0363"],["/archives/page/4/index.html","6362da962104380fb6a3885ed84b6ff1"],["/archives/page/5/index.html","d3b5203f517e0d727c94fe191f82b04a"],["/archives/page/6/index.html","e6838f38bb01f9352e09800862bbfd21"],["/archives/page/7/index.html","67c86d6d8b86667170cc58af4daf4cb6"],["/archives/page/8/index.html","0656a040f9f6cb578c766ed071895742"],["/archives/page/9/index.html","f8c66fa07716c228840c8ed8dccd5286"],["/categories/Devops/CICD/index.html","fd09042b9f2c27dadd131948c759565f"],["/categories/Devops/Linux/index.html","2c2734b0f07dfa64fc6d15352b8d769d"],["/categories/Devops/index.html","55b6d2c0af8c311307d91bd9ec8d49a8"],["/categories/Java/JVM/index.html","6f7334f4adc67e01ef4783db9798a238"],["/categories/Java/NIO/Netty/index.html","9c300a31831bd164de3da6064e62263c"],["/categories/Java/NIO/index.html","327ba2ba48582147d797963a3fb51022"],["/categories/Java/NIO/原生NIO/index.html","7ea675d634d9d61563fe614c71d30524"],["/categories/Java/NIO/文件操作工具类/index.html","acacb2182b6f9099543468b497b1028c"],["/categories/Java/index.html","58edb51332fb644565d02c20e7886a2d"],["/categories/Java/page/2/index.html","55484b86021ae64a0c6cdcb92da87074"],["/categories/Java/学习路线/index.html","33bd6ce86e18590f65a26ebb3932ab02"],["/categories/Spring全家桶/Spring-Security/index.html","1e2689190d698aa354eec45430235458"],["/categories/Spring全家桶/Spring/index.html","031a0a323409fbafd6c8e2e6d0f62f4e"],["/categories/Spring全家桶/SpringBoot/index.html","5e4f2a4eea169fbd4b0d10777e03bde1"],["/categories/Spring全家桶/SpringCloud/index.html","0f95c3d86224be202fa0ac5e5eb053a6"],["/categories/Spring全家桶/SpringMVC/index.html","44cb952e07f32b9cdf99eb2ed492a3df"],["/categories/Spring全家桶/index.html","6360fab7d3eaa423b92dbc8b1e402e92"],["/categories/Spring全家桶/page/2/index.html","ad8477c24a8f10dd79e286b54be7c674"],["/categories/index.html","0d0b4b57fa675fd96366e9e9ea8bf69e"],["/categories/中间件/ElasticSearch/index.html","d31003e90a4c8a19f7ba0fc164455212"],["/categories/中间件/Redis/index.html","32d0f11cd0dfc844d7e71f7e9146063c"],["/categories/中间件/Redis/page/2/index.html","69c09a6a55adba197f157edec080445a"],["/categories/中间件/index.html","665e0bc7377743c4217d2da1f0a9b863"],["/categories/中间件/page/2/index.html","f65f071844860f8a6d4ce8edfb847ec4"],["/categories/中间件/消息队列/RabbitMQ/index.html","dfb35ba04e0a601f395d9c35de5e44b0"],["/categories/中间件/消息队列/index.html","7c82ee9beaf0fd5aeb83a1f67c81635e"],["/categories/前端/Mock/index.html","d24904699e6a87ad32efaf82864b6ece"],["/categories/前端/Promise/index.html","ebcf818390799f5b035698333df24b88"],["/categories/前端/Vue/index.html","dc0d7cf467ca0f6a46c9b73276a8a4a1"],["/categories/前端/index.html","3a031c3fd0bdaa7af6a7526973de4991"],["/categories/前端/jQuery/index.html","09e4dff0aa00c9c7b932e7e90778ae80"],["/categories/前端/page/2/index.html","5b580571a7d3d2eb663c45a401e39b94"],["/categories/前端/原生基础/index.html","c0a928c3674912bf8ef4c51e0bac3b8f"],["/categories/前端/异步通信/index.html","c4a6cc13426c16995edf3834d0167bb2"],["/categories/工具使用/Git/index.html","675800308537f6142bc24688f7562be5"],["/categories/工具使用/index.html","3f0fc3c31f7893c7a3cd04e93df13c40"],["/categories/工具使用/markdown/index.html","11b3c25d34ccbcc8db0a289e6f20d007"],["/categories/工具的使用/Docker/index.html","ddc2215d86442eebad1dd4b7a70a9264"],["/categories/工具的使用/Nginx/index.html","bce50e430247466cfa193a60bbab5608"],["/categories/工具的使用/Swagger/index.html","3095a2eda5a5576c34268945180d7b0b"],["/categories/工具的使用/index.html","8061e1b86f0fd90ea7672caa5218f636"],["/categories/工具的使用/博客搭建/index.html","57910c50df8fa5c937a9a623bfeaf343"],["/categories/数据库/MongoDB/index.html","6d802470ae5d6ddd031a79665c0b4702"],["/categories/数据库/MySQL/index.html","53f0c35ff8fc61a8f61854b5738a7bad"],["/categories/数据库/MySQL/page/2/index.html","068c738083a5fd4b1ca384b70122f919"],["/categories/数据库/MySQL/page/3/index.html","f6f29ac65c59fdadacc2024c3d8f1389"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","06d9794acf1eef60dcdba6adcbe7189b"],["/categories/数据库/ORM持久层框架/index.html","d587b95669adddf55ab115be53e3d6f8"],["/categories/数据库/index.html","8f3dad77b067abd5745120f49f1b908a"],["/categories/数据库/page/2/index.html","900ab828038ba75723b77bd682f579c0"],["/categories/数据库/page/3/index.html","e71eb85ab73607a75e7d3be6adcf3540"],["/categories/系统设计/index.html","4bcc9071daeb671155e3dbc0676e533c"],["/categories/系统设计/page/2/index.html","fb86187035d52a1803c96247301f4ada"],["/categories/系统设计/分布式权限认证/index.html","d61b4f4c38421eb4f6dda74c7edca181"],["/categories/系统设计/设计模式/index.html","de1066a626cc792e50344ce320a2d109"],["/categories/系统设计/设计模式/page/2/index.html","ac4881261200bcd8f74f9261ed3207d3"],["/categories/计算机基础/index.html","568ee484818189e513d973ff731a8a4b"],["/categories/计算机基础/page/2/index.html","c61de19928ae43f5683b7e0adf0f4a02"],["/categories/计算机基础/page/3/index.html","e98d61bc847631e26866d02637fe3e35"],["/categories/计算机基础/page/4/index.html","1dab52d1b59f07ee6f9a6d2da543d68e"],["/categories/计算机基础/page/5/index.html","80b4fd36186cc280641d6b539820e1de"],["/categories/计算机基础/page/6/index.html","e7816e5151977868118d5d644d145e64"],["/categories/计算机基础/操作系统/index.html","ed1a25c58444e95886eb5b5b7d911e49"],["/categories/计算机基础/数据结构与算法/index.html","66e32dbf213b0082cb621d9dadce3a48"],["/categories/计算机基础/数据结构与算法/page/2/index.html","bd3e42ff85075f1edd6e963d73f2489a"],["/categories/计算机基础/数据结构与算法/page/3/index.html","aa851a05c22e56035230e4ab909d592f"],["/categories/计算机基础/数据结构与算法/page/4/index.html","9c579f4664aef5aa6c2cb3f495231cb0"],["/categories/计算机基础/数据结构与算法/page/5/index.html","e6ced35ea365f699962c2ab518e70870"],["/categories/计算机基础/计算机网络/index.html","794d686d09af5ac26298ea2bfd93a8d5"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","4a50ed04bc9e62c34fa7483fd3001393"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","484c05f1521f0faa3952b24f1c3df750"],["/messageboard/index.html","f7816388f29e944b192e21162fbf68c3"],["/page/10/index.html","e8651698d529d0e07cadf2ac2dbce2f2"],["/page/11/index.html","e3362212f7d77696ec1228d65419eddd"],["/page/12/index.html","2a8a3935797c5dd55f21eb7733e9904b"],["/page/13/index.html","583e33981e2eb14b922fea4a4f2b849b"],["/page/14/index.html","0e54ade8ce3dec86374e9c502c8cbed0"],["/page/15/index.html","2b7bbb4906f3b7a0f34fb7fa4e0b1c65"],["/page/16/index.html","80a4798dacf8e54b9d220862713d1f84"],["/page/17/index.html","7ae0b42b311d8b25c763d50c746671c7"],["/page/18/index.html","d4146bb49e70e351878e9e4d8cd38d8c"],["/page/2/index.html","54bacf4b9fcc9b4341a2d3954afcd2cd"],["/page/3/index.html","3fd27728dad183041db01607714757dd"],["/page/4/index.html","849adf5cd77b043ea02525b303f0b4b0"],["/page/5/index.html","c42216887c62ef41a745c94555be7f1f"],["/page/6/index.html","e5431394e7a81a909174800c00cc6b83"],["/page/7/index.html","885f342b0f0496a0aa094a8d3e4439ef"],["/page/8/index.html","85fd42cba53cec355a16e335b60a3227"],["/page/9/index.html","16012029eb74abff312bb6d4f848f2ed"],["/sw-register.js","3b00944621c0e4f6afbfc88b10fcc3c5"],["/tags/Ajax/index.html","ad369c4bc7443d8b3f0a00361f18ba5e"],["/tags/Axios/index.html","cf48d735733fcf51267e5051036ced3c"],["/tags/CICD/index.html","ca8d539bba0f6829afca6f38a8551118"],["/tags/Docker/index.html","773dab89e3c78ac2f31bbbcc6cf91e55"],["/tags/ELK/index.html","8c4054d27f057afed8f662ebe02fd129"],["/tags/ElasticSearch/index.html","6ba096179f2d1dc4556b7d8950ecf0a2"],["/tags/Git/index.html","a6b2634137c1d36c6e082348e81c03ed"],["/tags/H5/index.html","3459264bcd19609a859434227100b476"],["/tags/JVM/index.html","e07173972809ae5b4aa962d53ec80384"],["/tags/JVM内存模型/index.html","c5b800b39d2cc83131652d97d34d22ac"],["/tags/JVM执行引擎/index.html","f018357a65b2b2a163b370ceab17d2fb"],["/tags/JavaScript/index.html","456d029443b34ca11e5fb06a938e8d6a"],["/tags/Kibana/index.html","316724e88febf993b6b6e838e526134f"],["/tags/LeetCode/index.html","c2c043fc625b4282eea90d4b03013786"],["/tags/LeetCode/page/2/index.html","6ee25121f3ed19c3c2644e8d4b1fabf1"],["/tags/LeetCode/page/3/index.html","9504a719381829ca61dc62cea40497ed"],["/tags/Linux/index.html","cff934f54821db1a68d7589390a2f1f7"],["/tags/Logstash/index.html","7bb57bc5be182788b6b365fcbde91876"],["/tags/Mock/index.html","6e48554d8f35b15862da041e66720677"],["/tags/MongoDB/index.html","78db9d610d86042c02c86cd207516c5e"],["/tags/MySQL-事务/index.html","441f612339e7e31466b24cdb7bf986b4"],["/tags/MySQL-数据类型/index.html","3164cee8e1de3c2edc3c2de6d8741bbf"],["/tags/MySQL-日志/index.html","bd114dd14eee5034600f14a1178912ff"],["/tags/MySQL-索引/index.html","02fbd34acb0972916bb4d5fe3af48a62"],["/tags/MySQL-锁/index.html","c1fa96b13f4fe56d15ae21d54c9e2bba"],["/tags/MySQL/index.html","f667c1eeb7f5b76e0fb131e411c5a697"],["/tags/MySQL/page/2/index.html","8288f5770a61c9128a85332d2c5ef3c9"],["/tags/Mybatis/index.html","f93af63b63f867eb08096b4d21ce9498"],["/tags/MybatisPlus/index.html","8a685b22a467d74aa4dfbbc0be48384d"],["/tags/NIO/index.html","757eb9eb06c613ad83243ea43506fed2"],["/tags/Netty/index.html","bb99cb941acd04e3e70b3966762e3702"],["/tags/Nginx/index.html","1f963d6abc0438fcb44cfce39387f083"],["/tags/Promise/index.html","43c2c0d825dd25dd82b612582e706753"],["/tags/RabbitMQ/index.html","c461e98b5fa61793ed3e53e9a6bab0bc"],["/tags/Redis/index.html","c7f5f8afe413a546366e6b6bd10cf64f"],["/tags/Redis/page/2/index.html","d6228a4fbd5bb00ff1c33850c6035b90"],["/tags/SSM/index.html","a209501499d28c6c92df49a1cbdfe0de"],["/tags/Spring-Security/index.html","2d9ed11719661e74ae9c98ddc110377d"],["/tags/Spring/index.html","25ad6242c5416680f6ac1f695e0225c8"],["/tags/SpringBoot/index.html","64fd96e0c80081012c71e903c94851db"],["/tags/SpringCloud/index.html","eb58cfe11deff04fb60b6f2286feef77"],["/tags/SpringMVC/index.html","d711d3cd112705b67d556b0158807376"],["/tags/Swagger/index.html","55d11b31da995973b7b0e4dbe33ce0b9"],["/tags/hexo/index.html","16178dbbd777680762fc750314f3aaa0"],["/tags/index.html","d178652ff22afe9bce99bb1b47cdb71b"],["/tags/jQuery/index.html","eed754392893da3c72f8db4699b0eae9"],["/tags/java/index.html","793fc46772c8dcff57aa61e07381085b"],["/tags/markdown/index.html","dd481314af6b95f4b1c927b26408b5e7"],["/tags/noSQL/index.html","40aca86d5b13f283132301103acc7b75"],["/tags/typora/index.html","ab0009bfa6584e5e2f1bc6e6af9dd12b"],["/tags/vue/index.html","0c4a005a39bf262d100cbeaeee43607d"],["/tags/享元模式/index.html","c27b74084e115b5b8d530ec6bab5d158"],["/tags/代理模式/index.html","679ace3bbc17316c17e4d9eaa4b92bba"],["/tags/内存管理/index.html","7504b5191876f5b450b27d4d288803ba"],["/tags/分布式/index.html","43acdd7cba1dad94dd69c5653dcee363"],["/tags/分布式系统/index.html","527582b868854df415afdfc73652e43b"],["/tags/前端/index.html","4d3cf5ca0676dad4a0a8340112ec08e1"],["/tags/前端/page/2/index.html","0096d07dd15c97beef2021dff3bf0fb8"],["/tags/博客/index.html","730531ec288b4c23bd50951d7c2c21ab"],["/tags/后端/index.html","b803dd60705600644abfc9df7c2773fc"],["/tags/外观模式/index.html","991e71bd74a8da7e4af39b61ba43bf69"],["/tags/容器技术/index.html","5cea0b3a8f5e41846dadbd66503de25f"],["/tags/工厂方法/index.html","953609ae583662cbebe80678a33961a4"],["/tags/微服务/index.html","db09e1a304e471682ec9825637f9049b"],["/tags/抽象工厂/index.html","cdfce493974207bdb97a6e0a05720e8c"],["/tags/持续集成持续部署/index.html","4ffb66561ef15479f580cc79237e8d0e"],["/tags/搜索引擎/index.html","6c81c03adf69b9f4920d4f22e18c8403"],["/tags/操作系统/index.html","82d939b3e9d6f8ed553c66a98ed5c2e3"],["/tags/数据库/index.html","4bad2ee8f4cbbb349a6320c76ccff2ae"],["/tags/数据库/page/2/index.html","375040452adf29a5925320c3dfad1307"],["/tags/数据库/page/3/index.html","39b8f48bb63d9d8bcf0237aeca6fdfae"],["/tags/数据结构与算法/index.html","a08eb63d2c613f0a49891eb1f7755b94"],["/tags/数据结构与算法/page/2/index.html","02c4e685065b8122ff76cad2e04f65ae"],["/tags/文件操作/index.html","1042d36ec29ec9aa83cc55d0e6627588"],["/tags/日志/index.html","f8051a144eb0ab27e66875492ea7c30a"],["/tags/服务器/index.html","30e9554c9e2d71c3cabfd235b9f88cd3"],["/tags/权限认证/index.html","cb86aee9e88327c8dc578efa459a22fe"],["/tags/桥接模式/index.html","ee3fec1fd9d570e812449ce809211b05"],["/tags/模板方法模式/index.html","5db0030599b4623cf1982db21cfcbde3"],["/tags/死锁/index.html","9b6886ab07c4947caf3b7682f1c5ba64"],["/tags/消息队列/index.html","07d7ff0ee344e2942951875d8fabb7ff"],["/tags/版本控制/index.html","52061f64dcfc2e59921b07a9865a7a70"],["/tags/策略模式/index.html","806a6f0497c5ae3d4ced1a5bcff6e27c"],["/tags/简单工厂/index.html","4a84f1c7dd5be8408b17fb401abdc7e1"],["/tags/算法/index.html","672c5dcd21dee5668c2b5a3c50ea04a2"],["/tags/组件化/index.html","fb5afdb98dc09e7ae36bd5380e80e73a"],["/tags/缓存/index.html","88c5938c81e180a806c8cac42f4554da"],["/tags/缓存/page/2/index.html","56b34562d1079f359b0c639c85512081"],["/tags/观察者模式/index.html","a1fb1e1f0612142737e47b7cdfc7c020"],["/tags/计算机网络/index.html","4e52b408d4d74650c162a3a7c62b34a3"],["/tags/设计模式/index.html","1ee95c1e7fbd1e09949097fce6fc05d9"],["/tags/设计模式/page/2/index.html","24d82a51e25f0526f447605173bcdf1d"],["/tags/进程管理/index.html","2442400cccec8e0348b8dbf943fe3d2e"],["/tags/适配器模式/index.html","44759fb5922bfa30d90809f02b23c467"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
