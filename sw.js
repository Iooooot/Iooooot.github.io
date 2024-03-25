/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","bc074fbb45b2e5617b6cf040f48eb90a"],["/2021/02/22/工具的使用/博客的搭建/index.html","d4569f05c9baf062c7288324395bf48d"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","66af044b071c580d81d7abf4bdf26142"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","7c164f215122c949e465fbef9fec5991"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","8cab48983fea1cea784aae2deefb2959"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","b0812c006feebe1580f0ca4999c505c9"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","05585d824ae90b573fcc9be002619edb"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","f13caab914f6ea067e90a99579e53375"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","e6025057df8f7a5c6240ec5adca79c9d"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","b7af30d249df2dff5a8798e601b9f880"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","aba15668613272b73d2b222552b2bf9c"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","d0db73e22472214eeb328992ecc7cf82"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","39985459a5b648aa918b750c369cb27b"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","f84b537aaa842c9ee0f19f5f0a75e973"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","804ac11952407f486dcf1c320989337d"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","118ecd147c766be1e03d194cabf6e742"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","ae0f67b3434188b49aae35a4e85f0a84"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","cd944f17c24f9216a45612d50cc0b66e"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","c08fbe73bcd2fdcd66d3517a93ca1425"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","223deca35c5fd442111cc8c0ed79ba40"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","36cf23e9101d24803c50b012a49613d1"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","0973112dc51488996d23968656a28f9d"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","f07aee753e42147eba86076d117b5183"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","ac9a06832a08bf951a5d28765f0822b2"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","4eb47d1099d7792bb0948efc7b0d73ff"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","544805768c02b5790453a6dfba2cf24e"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","b0e05a31bd80d29b5e66af2f0eef975a"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","477b90821d6a26f6bd06fc9d2371fa4a"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","fd844b4aab7a0f4d157a53343c942a85"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","d5803e16fd7bfa42ddf269f679b9ca21"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","a63d555a66088a7891b17ebea1e52747"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","b4658097ceb55a4517c4e5be23569fbc"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","2d6d5d3275a587b1d28e8fcfbd7ef79a"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","81d5b4af188c7f0ca30f5b60c4e931b4"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","56bf8c76cb425082a7e6bad139e7a68d"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","48468f0341bd4427baac7950679480ba"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","f7bb43d8d555e8640283c1486cb7c801"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","921d330733e83acf88571a2d10158d0d"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","cbe6e759768021cb133a64283e9f1a03"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","197ba3d1c0e21c8db509e36b2248cb51"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","d0a82f28bd2b15cc7805cadf70eee4f0"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","a2b79ff2cd2e5c2cf40728a59d811abf"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","e0b59076c852a513fe401f43aca8291f"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","33640dd64ac2f5d9c48ec34e4ec6dcee"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","17a91fc145fce6cf217b9202a771f8a2"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","01f3493a39b922d362707aefb40b7f70"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","2b9fe6603f595f5f893fb478ce8bc5f2"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","a9d7526bb9eea76de8420bb799fcb6f3"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","e2cacaa6039c0a3d04472676a620ffac"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","716ee4f886de18f9582ef520b3a20afe"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","173071cfe549fc7738de41a3750cfb96"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","448a4f1b81eefd086608bd88ce1b42d3"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","7934fc4d10d7b4bbfec3e7b3b2fee965"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","16140b673bd554e9ffff5e6040ae3939"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","4722ec9dfe40efa17fe1aac581fa4e2c"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","af78479c4b11b833fb3d3c9f89b4a816"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","4c51dc8563411fd4f8784e867d4fbe06"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","b63172aa41303b58284f270e517006f6"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","2ca813e825faa1b689acf642e34c4abd"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","c3daed97f559edf62987099d3f87804f"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","3b778af3c3f9533be6c739d4a3e4e2cb"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","a4b29311055f5cff7c98d025c028af85"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","9cb4eecb7a62c20d83d0ae3ffa4199b8"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","fc75badd17936cac0fe3a4a91e6a1a27"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","3e7db13535a21518ad59269f3bd3a478"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","31355f61095e6de82dd9f8a74d0be3a6"],["/2022/08/17/前端/jQuery/index.html","e8ca1f38e4346fbf38aecd4932f5aa6e"],["/2022/08/19/前端/JavaScript/index.html","1c163499791a04655af678d129e458cf"],["/2022/08/22/前端/Ajax/index.html","0bf38267d8a2b36bcf6650b809e7e158"],["/2022/08/23/前端/Promise/index.html","fda56e0f576d3068e028eda3197d6020"],["/2022/08/24/前端/Axios/index.html","52e44ac4bc9d8862e2dd0dc8c057aa9d"],["/2022/08/25/前端/H5本地存储/index.html","8e4caa1df1a23cf5d3678b100f538241"],["/2022/08/26/前端/mock/index.html","6a545a3fa222d9411d6e7da141ceb417"],["/2022/08/31/前端/vue/VueJs/index.html","39d079598e64749dcb82cbac37a7cd81"],["/2022/09/01/前端/vue/vue组件化/index.html","5ed5c523db0dde0603588de747428705"],["/2022/09/04/前端/vue/VueCLI/index.html","7899e8b191da5e4822c8aa57f023ac87"],["/2022/09/07/前端/vue/vue实现动画/index.html","7073e5c68786147e339c6eab112f4f7d"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","c53799f6b923b85d237fb7226025d071"],["/2022/09/10/前端/vue/Vue异步请求/index.html","36b8cc8a7af5953d44b915dfccbfb8ea"],["/2022/09/11/前端/vue/vue-Router/index.html","ee2b1ff7769204db109a4358b88d28d7"],["/2022/09/13/前端/vue/Vuex/index.html","2ba8a831b0afec3326e83684db1d124b"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","b261f9e943b1b3ccb6608c2550fdf871"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","47d4ca585f2c927441da629bcf591d56"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","7799a02c7667da206089016f0f27f325"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","8380326ecfefed26e26f1e03dedf3aad"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","5a00e3c764be0e0e58930d6bdff75ac3"],["/2022/09/28/DevOps/Linux/Linux/index.html","7cd57bd4ddb8ad44adcc515c6834eb35"],["/2022/10/02/中间件/Redis/redis基础/index.html","8f2357333aa92c997e037e2bbc163fbb"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","ca1d0f0c829ff0d207ba23ee71522ce2"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","7001c599a0c53d31fc9ae129994caa52"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","7ce4ca299f7004f7a53459f387ee81e8"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","fac2066509b784e8279f69d6c43b1775"],["/2022/10/17/中间件/Redis/Redis集群/index.html","7d8df06ef025c75eb57d6b969469a9c7"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","91dbf4332f698730989b27696270db05"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","4c2afd69d03ef723a7b2246e8ddd4a66"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","1582aef1ae43a20e592f2f205a5aafd1"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","d3bace8c98f6ae2f3707f05c12a1c291"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","bf7865bfb0c9550faf1850c16b01b630"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","158293c8d9caac0fa54a4a22cfdd2762"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","a650b9daee072fbbfdcc8e2eaaff3ecd"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","af23586130133f9decef0eec7bb0d32b"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","2abd5dcc464f7bcc1f035a1a5293b559"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","ad56528b7267c96fd5241e12c00f7ebb"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","0e4956ed4980292f813fba04126b5f9a"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","f8aea1260f81c18b7618d4762e111495"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","4e454969ab0873f671dbe66ee61809bb"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","993fc2b97ea94f55ee910cbccb725b20"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","3e0ae08b88c1260f2f193b9d0c51a692"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","33cf4845911ca7a8c399c5ba73d439f1"],["/2023/03/10/DevOps/CICD/CICD/index.html","c302b8e8462a0dfb437d338d302c2aa6"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","40b5735b580b367857a369e60566d50b"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","617f6a31bc4155ae08661c8104222324"],["/2023/03/13/Java/NIO/NIO/index.html","4284e3adc36ef20d250f684c364e5c75"],["/2023/03/14/中间件/Netty/Netty/index.html","1c9bce6974c72a529f357316891306c3"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","014a2cc3d4f6e9f3bd1110a8145a068d"],["/2023/03/17/系统设计/分布式系统认证/index.html","b488c8d6d42873f338152948a45d4aea"],["/2023/03/19/Java/JVM/JVM概述/index.html","fdd078d21490c1ff346d842ac52d05ae"],["/2023/03/23/Java/JVM/类的加载过程/index.html","3448fd9f0e20ca71cf733a95e9d3fb24"],["/2023/03/28/Java/JVM/对象的实例化/index.html","e045265f269e9de89b6c7c739fcf6b06"],["/2023/04/01/Java/JVM/运行时数据区/index.html","b92b37b3c0d29803225607d639f234d9"],["/2023/04/04/Java/JVM/执行引擎/index.html","af75c56636437fd49defe219213a9680"],["/2023/04/06/Java/JVM/对象引用/index.html","46227b7b26c159d04dccab1ae6ec490d"],["/2023/04/09/Java/JVM/垃圾回收/index.html","2f1128651976f798597a000cb91dd204"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","110560927bcf83fbf7a9eff0a381600c"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","3dfb8044e35aa291df89309565c6a8e9"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","e68274428b5c49be7e1af381a49c1f74"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","539971e836a2471226fef453eedd088d"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","bfb0ab72fcb348de5c0bac178edecb40"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","746e58dece9f240410797269331265a5"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","b6f1d69f4acf8d7ee2a1a1c1b957a3a5"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","ea8f703b79522ee29c22ada547d221b9"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","2739564d8ccebdedcd90f9c6ff9175d1"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","3874144cd5a2f59ca34cd160a54b1539"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","301b41282c428c0aaf3dcf2a68c6da39"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","fb234cfc0d2dc93ede60c077466f0d64"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","ae74d9fadd34f9058f1f0d1b169f7369"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","25eaeda34232b04f84dfc320521d79aa"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","8d127d60e057a6fa0e09f0403f2c8f90"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","c1ce6ab58045cef31321055c74b65ba2"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","0fa3ac7c3a7f4d9f7b970a5cebb9db72"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","6ba1bb37abfe05dc8e0b47352fc7e50b"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","612e4a46cca9d3b3c714fa37cf011dd5"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","5dd2afce52e822c3f511290fe7f89fff"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","2e0b85b554d3442e5897d28ccb7eee22"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","a48f733bd21aac8abf0373fc9eccc537"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","570d80a2f6910b53722ef829e3608bd8"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","87a2c3064365c3128c015e48ac9d46a0"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","00421fea05e8b7da863012481cac3d16"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","9a7b87364b73b3b6f082137260c53a12"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","65d484d8e13403406c549ae8533a5475"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","5191894e20a99372241a1d144f939331"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","ce58c09862a2f7816ccaf8a73a069534"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","bb4cb92a07f20fbcda5c925b0aa1536e"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","7ad334189af504b9d2233b0d229da725"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","5de3ed00a95b760102bd2a19b8c18653"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","3d552ef607f9b32239421d16fabf12ac"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","d591265d67fe1f610fdffab0c5cd1bab"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","e873ef82b09cac4e7350204da063f6af"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","8ae9d98730328db02fbafb2f66090545"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","6460fe2c2f821c813a46874bb51f9d9b"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","1f1b6d28473858f6a56404e3d1f8b063"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","7357bee2548dc1c26eb71c345f8e70f9"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","c44d1cae893896c97e79030faeec090c"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","1dac00fa510229e803ffbde90b3cc294"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","5f6957243804708e4c5696911c82a7bc"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","74a185496d06c686a19114b0fae10c90"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","a8b8e842b16e65d0f73b29654ea00b7b"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","425bf445c1ec7a7531549fc98faadfa6"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","63d83194ddbb7ebb04ba00e9efd1dee6"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","7e1a6bbba0db20a56dfd49cd194dafb4"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","c6851835ae9dc25c48dfafce9d340a18"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","e9c02fddb93ee4ec0fe1b9233c64d0cf"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","bb2246ac45e4f16523727f55602ef106"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","93474cc683a4fd7f9c0823e08ed8639e"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","9c2c1cdd1276c819d93a0558e1204fa8"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","8885eb0b959626d6085f21b652ce1728"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","7b5ad2c67a6077089636865347b9d3a5"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","7eb7e42b73d65e20ffb348afe907e8ee"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","1c322b75d64eb9f45b549cd990d27155"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","aac5320583868e21dd4b7079c01a2521"],["/2023/09/04/中间件/Redis/Redis事务/index.html","57cefbc74f64d69840975d99020a2fc0"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","7356de42c8d92e4abd6406ff0b179ca1"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","263abdc316bd14936c2c308082a554ad"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","ceb0719dde50edeebf0c7d5ecb9de7ea"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","0fac78423e6a441d39281350c1982821"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","9d406fee687c1b3d53f5afad3f484e9e"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","71b7532ef0a726f9a1db3d4aba64c1f3"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","3531d948b6994fd6efa477c2bfaee9a4"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","4609ca589feb6c3b5435306434c8adfd"],["/2023/09/22/Java/NIO/零拷贝/index.html","9c8dc3c0a59257a62fb6739ee39671b9"],["/2023/09/24/系统设计/JWT认证/index.html","1aefec489ac30d59140dc9ca73216dbf"],["/2023/09/26/Java/NIO/Reactor模式/index.html","8551db70e7c93ae69ac3df5b3cb2900e"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","104b7152ef133b6372aeb7fd6a6e0e5d"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","88c844b10d25d3d2be38f24fbfd23195"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","6ee110b47e4860dce5058559f7fa757e"],["/2023/10/09/Java/并发编程/共享问题/index.html","f3c70c124d565f9a2857b1913ccdfa6b"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","9ee45f921e46c1ca122c969d9310fd91"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","682f0ce915f329eeaa08d6f3b1715837"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","8b778db8b3c26856139407f18c312d97"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","7a556387534958b30d367ba3309911d7"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","d26014eff0bf1093d9d633c8dfb4237c"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","b4708418035e39ff8c52454ac2c86eca"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","5f12e9a46514f2e1663cd718889c25e5"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","02ff5de864e0bdbe169fc79c169d8d57"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","bc280edd032656c2ff313d386640a451"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","a33c924c6447745311172e118bf06a04"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","882eb9f7282ae987c9365b50f7771e6c"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","cf0675019dfda95dd501571b8f10e5bf"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","f7e393a22fc97ee9a8d557c130a87185"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","aa5872b9a622cdd1aa05745c88db1ef5"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","6266d82755ecb3242dcf2eb70c90e137"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","4065df3534e4184a4a46b8a3795a9223"],["/2023/12/05/系统设计/开源协议/index.html","2d298d01e9863ffd2a760bff941f3b93"],["/2023/12/09/MockMvc/index.html","ae1fbf3d212cfd1a3f57d13a848ffbb6"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","366363f377b17880f379cd39a6ddbab8"],["/2023/12/19/MySQL读写分离/index.html","f7eea43f60bd9a7c88afa028447fdbf2"],["/2023/12/22/MySQL分库分表/index.html","0f9ca9af7c07fa110d4eb62835eb2ee1"],["/2023/12/27/利用NoSQL优化数据库/index.html","a6ba37e44e13a14b099bfdd84375c6a7"],["/2024/01/06/缓存概述/index.html","99d9f55a69a4f44f1e99bee364cda581"],["/2024/01/11/缓存的读写策略/index.html","d533ef83534ed12240cd7d43b9e57eac"],["/2024/01/14/CDN静态资源加速/index.html","2068ad3e063665f05f6ef111f4a32531"],["/2024/01/18/消息队列延迟问题/index.html","2f01939d6535c3c60635eb6501d379ca"],["/2024/01/22/高并发系统分布式服务方案/index.html","57f7e65e9ae7160c7f7c06e23320cf70"],["/2024/01/26/dubbo/index.html","f46c0b341e1460e3fb61404317015524"],["/2024/01/30/微服务基础/index.html","173a32a2172fa7faf0fedba59edc3109"],["/2024/02/02/监控微服务调用/index.html","be0efd2986754dc48a7391b79df4b5fc"],["/2024/02/13/微服务治理的手段/index.html","be07ac751dc79fa31d1cf9785e4c79f4"],["/2024/02/18/微服务治理的手段-二/index.html","c64f043a15f0e9c4f0d72444189db73c"],["/2024/02/22/计算机基础/操作系统/epoll、poll-和-select/index.html","16e828e5c5c14ff31fbbe1f691454e4c"],["/2024/02/26/Spring事务/index.html","2db724508c505fad8359e4c2c3722d3a"],["/2024/03/01/HTTP接口安全策略/index.html","cf58c85526e28b697db0d5dd4847afec"],["/2024/03/05/HTTP优化策略/index.html","b47adc49f5a6b45326d04453cc97eb28"],["/2024/03/09/计算机基础/计算机网络/基本网络攻击与防御/index.html","71ad918e4f66f26f45037c59b6772e2a"],["/2024/03/13/分布式系统监控/index.html","46abb92ea65b1ce62b4a005643b5bce6"],["/2024/03/18/中间件/规则引擎/规则引擎/index.html","527294a8280d10a8a4be24af90ac7414"],["/404.html","bf61d726a849bdef57c83a152e80780f"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","7610013a2119211f74faa9eefbedbd44"],["/archives/2021/02/index.html","1067a7b1c598de33017c80ced0bacddd"],["/archives/2021/03/index.html","3a3f4ef82bb87fe5986aeff801f67db0"],["/archives/2021/03/page/2/index.html","767322e510de84db4db8d3583473482d"],["/archives/2021/03/page/3/index.html","a582b4056f4a4191bc2904122a0353f9"],["/archives/2021/04/index.html","fbe4e456f9b26287fe60d1cd5304e698"],["/archives/2021/04/page/2/index.html","03d9f8f0c5214139c05ee5bd96f29df3"],["/archives/2021/05/index.html","fbeac365993bea7e66ab9abe021e5136"],["/archives/2021/index.html","e2a1829ead54e575896ca939d5340652"],["/archives/2021/page/2/index.html","fc5053580086d8a4dfd2e18347b92f07"],["/archives/2021/page/3/index.html","8d12eaf6e7abde567e58e92efbf86b6d"],["/archives/2021/page/4/index.html","33d13349a0208d4775fd77a97e68ef39"],["/archives/2021/page/5/index.html","c360538732faaca9f0e1c52952bcda0e"],["/archives/2021/page/6/index.html","56e5ceea27d0626c00a5792fc8dfc9f3"],["/archives/2021/page/7/index.html","3d5bd233463dc4f59c53175635396203"],["/archives/2022/01/index.html","9b02346e10b4f893a57ae73015052e66"],["/archives/2022/04/index.html","9957b773c1563f356ca1cf2ebbe4e922"],["/archives/2022/08/index.html","49f7d0348d4d522ab347e0519e9d265c"],["/archives/2022/09/index.html","8fd01e21f152bb63cdbb040b8c628d6d"],["/archives/2022/09/page/2/index.html","64e3f768f1e7a60ba6905020e58def2a"],["/archives/2022/10/index.html","a04a6d28f50d5e8ba34cd0551caa1d16"],["/archives/2022/11/index.html","38696cd7b34c337f8f39f89c73bcf0ba"],["/archives/2022/12/index.html","09367cdb8aed034663519e67ed5aa1a3"],["/archives/2022/index.html","0a66f22250dfca9b48ab25938ad4fcf8"],["/archives/2022/page/2/index.html","e913a82fbcb2fa8d8a7f6c3245dd0d96"],["/archives/2022/page/3/index.html","5eb394b5996c8a86ac7f1b321299d795"],["/archives/2022/page/4/index.html","d2921d255fb97995ebe7be172de20fc6"],["/archives/2022/page/5/index.html","36705d7559674d60921dc8c9c137b100"],["/archives/2023/01/index.html","85473d70dd2f6660094ae1c45034d628"],["/archives/2023/02/index.html","70416beb9b0ddbb363d4f2e629defae0"],["/archives/2023/03/index.html","6fd09113519ae14842749f1582b2b58d"],["/archives/2023/04/index.html","cbf29940cc4f7739db0b3f1e581073f3"],["/archives/2023/04/page/2/index.html","5947fc4acc930c3a3be03e8c5944645d"],["/archives/2023/05/index.html","45f143192d8d28986e37e19efa115e82"],["/archives/2023/06/index.html","4473189f0467a0b0fb4050c9c65bc25d"],["/archives/2023/06/page/2/index.html","8c6fffe9f7e3ae9e015605eca2af28d3"],["/archives/2023/07/index.html","8c5ab6cfa3f8954071cb18294c7e001d"],["/archives/2023/07/page/2/index.html","4eb7b3f3a2c7adf01092396bc027c8a0"],["/archives/2023/08/index.html","55ba0b6fdd549a83075f55c272b7ec5b"],["/archives/2023/08/page/2/index.html","1dd9c6b169dbb7d88694b85f512186ea"],["/archives/2023/09/index.html","6560f9868ff162ddac3540851515a85e"],["/archives/2023/09/page/2/index.html","7130bc9c305fe9e6a0dfb95309140cf2"],["/archives/2023/10/index.html","204a9d101fcc437c49be0b80febf82b0"],["/archives/2023/11/index.html","491e570813a05491a1e78ac48ded7422"],["/archives/2023/12/index.html","b3c01165043bd7198ba6e021b11cd31a"],["/archives/2023/index.html","0c052362d64bf3f67ac160b45337937a"],["/archives/2023/page/10/index.html","914531ad4b34d8ccd58a702fc3ea6fc2"],["/archives/2023/page/11/index.html","88511f9be74a79c8165db5ef15820c25"],["/archives/2023/page/12/index.html","859cf25bf0f2b7385a519b74f618bb7e"],["/archives/2023/page/2/index.html","1e102c135eea9c098f62578d3ec09b47"],["/archives/2023/page/3/index.html","f7a5dbaf4d390003313c79421b75fc36"],["/archives/2023/page/4/index.html","9eac55802839933e416f231bc1ea57df"],["/archives/2023/page/5/index.html","0d95ae683174186ad08f9c070bc86a94"],["/archives/2023/page/6/index.html","2ce690363503d6bd14803a5b5736fdeb"],["/archives/2023/page/7/index.html","d8efb27019a780c08b341a65c136c956"],["/archives/2023/page/8/index.html","fbf855fd6e0b14b77cb3b947a81a923e"],["/archives/2023/page/9/index.html","614fb6e38895d39b196aa62bbc6eaafb"],["/archives/2024/01/index.html","398077abdb158ff40b54425f0d14c32a"],["/archives/2024/02/index.html","c868450f85587e9bd99352be7c0be0e3"],["/archives/2024/03/index.html","5f9175491d8031ec8d491bc72bae9c9f"],["/archives/2024/index.html","f056962bf56c00e24dd71435db0b7275"],["/archives/2024/page/2/index.html","b4286eb5101c5a5ce23636db66b8c97a"],["/archives/index.html","ce37421dde387973bc7ba145f75d6702"],["/archives/page/10/index.html","283eb73720e75f1a5a6c2be8b4380122"],["/archives/page/11/index.html","cfb4eab844d07d4e205cb76dd3c18eab"],["/archives/page/12/index.html","12cc6f8520d9b40bd854b6e7f40bf7d0"],["/archives/page/13/index.html","e9846aaf57be4c4b4216c0390ff66fbe"],["/archives/page/14/index.html","3ca5cce57c472fc4871068781afa770b"],["/archives/page/15/index.html","c3baf72817891a8f41f697649f839692"],["/archives/page/16/index.html","26be4b99d76b670381f90b88ff8829cb"],["/archives/page/17/index.html","0fbb796974c05c4e562e4805e013181a"],["/archives/page/18/index.html","de6b61b4202279812732478a77dc9904"],["/archives/page/19/index.html","069dcd5f9be2e061630a56fc2df01ca1"],["/archives/page/2/index.html","831e44eb6dfd8555bb283bb02df8e8c0"],["/archives/page/20/index.html","c8fb619f16f1f5c165ceef8be4c45388"],["/archives/page/21/index.html","46273db1799d512be4f419967290d65c"],["/archives/page/22/index.html","f9ce51db953f3df6bd77693f32365442"],["/archives/page/23/index.html","02e2b6a448399c569fb07c80ddd8a362"],["/archives/page/24/index.html","cb357fb5cfd210b3033b9fd211fa4ba1"],["/archives/page/3/index.html","513fdc6f67e11b270f3bf79b5ad56748"],["/archives/page/4/index.html","2d0509702afc5ae6a36bf555fac86381"],["/archives/page/5/index.html","20052c9ca8dd80cdf390ee74874683d3"],["/archives/page/6/index.html","0a36d384dce78f92e5e629080486d364"],["/archives/page/7/index.html","23a4f6e4e0f42dc77572235d35ef71f3"],["/archives/page/8/index.html","a90f8d99cf1f0d7763cc96c28bf0084b"],["/archives/page/9/index.html","9016c9eab760eaa6c61f3cb709baf019"],["/categories/Devops/CICD/index.html","1bb5930765d8c0c123fbc7e2c9e1f5f1"],["/categories/Devops/Linux/index.html","d2d00dd6d4c9886d9faf00c8f0a2733f"],["/categories/Devops/index.html","216e5056e387f8e08ec5cb101f0986ad"],["/categories/Java/JVM/index.html","65fc016046bab60926c39829594ec2d7"],["/categories/Java/Java基础/index.html","240537b2c900451109f7981e16e5f342"],["/categories/Java/NIO/index.html","c1cf2750097d5087643d52bb4b0b4007"],["/categories/Java/NIO/原生NIO/index.html","54091ab87713116e309eff92ddac9d5e"],["/categories/Java/NIO/文件操作工具类/index.html","653b9962a501068d83f6571affcf10c0"],["/categories/Java/index.html","a33c977b05bc44b0f728d0bcd8adbc72"],["/categories/Java/page/2/index.html","0f754fa2272eb699f90e8e92f0785153"],["/categories/Java/并发编程/index.html","53972ef305924a1799279a8a5285de0d"],["/categories/Spring全家桶/Spring-Security/index.html","e60b97e75d22937e7b3e49b32ce05e22"],["/categories/Spring全家桶/Spring/index.html","710e2956a97c0d003063aab84933c7a1"],["/categories/Spring全家桶/SpringBoot/index.html","e9d7ad0dacf4693e4778d446ca572748"],["/categories/Spring全家桶/SpringCloud/index.html","b45134769afc2174737260a09b7748f5"],["/categories/Spring全家桶/SpringMVC/index.html","c8c371d9e5430c7578bbc5ab147747c4"],["/categories/Spring全家桶/index.html","2edb457e8dc6c251b8ffd7fa51f7a030"],["/categories/Spring全家桶/page/2/index.html","7034cd6157c4b30f1a7c344abcfb4c7e"],["/categories/index.html","a72ba72fc22ef45a59fca4504fd60753"],["/categories/中间件/Dubbo/index.html","f176d8cba8795d56182bbee95ce81c8c"],["/categories/中间件/ElasticSearch/index.html","9bb437199c7b5e304015412e44657714"],["/categories/中间件/LiteFlow/index.html","42c87d5822f20ab62e8e4368575aaefc"],["/categories/中间件/Netty/index.html","7368bb097f00dbcb284cfbcc6b3ce152"],["/categories/中间件/Redis/index.html","3ec76f721b60954f6fe042bca181b602"],["/categories/中间件/Redis/page/2/index.html","e7d6f745a12f81e6084388ccbe74129f"],["/categories/中间件/Redis/page/3/index.html","3f0fcc48daec74fb6714ac47d792676c"],["/categories/中间件/index.html","6df54c3262880f526f447dd9b8282c77"],["/categories/中间件/page/2/index.html","80d75624e945bdcbbe0cd5312e958dcf"],["/categories/中间件/page/3/index.html","29e3a72c417ff4b764e2c59434a566f3"],["/categories/中间件/page/4/index.html","cbd184c344b9ae02dbdce41bf37157fd"],["/categories/中间件/消息队列/RabbitMQ/index.html","202715bc04e37197b3635f8ca09ad126"],["/categories/中间件/消息队列/index.html","c01fa90c5c143ea6ffa5ba130caf3734"],["/categories/前端/Mock/index.html","4627484b56f3d0d5cddfd53fcb67d372"],["/categories/前端/Promise/index.html","ddb592d8fed563a0a5cd3826d4f4fff1"],["/categories/前端/Vue/index.html","bf74b591726a736bf0bf0b752de69dfe"],["/categories/前端/index.html","0150f3308ec5879868fc69518b90731e"],["/categories/前端/jQuery/index.html","d7c01772e9fe0547224cf351874f8243"],["/categories/前端/page/2/index.html","a0482ff7f2eba9fbe9074fef095e5592"],["/categories/前端/原生基础/index.html","dff3347f66b40f657537e487e3bf2bd5"],["/categories/前端/异步通信/index.html","5379fe5817263a6b7e050c3c7cf24684"],["/categories/工具使用/Git/index.html","81b9d9f9e24939267bb4ad3df729f440"],["/categories/工具使用/index.html","19d96dcdcdc1642f50225373a1d31995"],["/categories/工具使用/markdown/index.html","db3ce0b429022de757389838f73470ba"],["/categories/工具的使用/Docker/index.html","fa1fa7de1ffe8af103561de1c23a54fb"],["/categories/工具的使用/Nginx/index.html","7cbaa541cc6d24162d89777cca956a74"],["/categories/工具的使用/Swagger/index.html","da167d1d7263a8cb22cf9c4a3489000a"],["/categories/工具的使用/index.html","b076a355c8a50c130f1ee34d07b45f34"],["/categories/工具的使用/博客搭建/index.html","5405e31a3ad14250a74f20161172d0ca"],["/categories/数据库/MongoDB/index.html","24565134dc05581931d4f6577fa8143d"],["/categories/数据库/MySQL/index.html","3545c352af443e99ed603843745dddf1"],["/categories/数据库/MySQL/page/2/index.html","d9f0ab2511e2c62e772e3901a3a57fac"],["/categories/数据库/MySQL/page/3/index.html","edbeede22a4df77c9d064681282e081b"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","ad0ef13f163ae74206f7b58a17db2c55"],["/categories/数据库/ORM持久层框架/index.html","0dee3eacf8dc56e696c83505081f46b0"],["/categories/数据库/index.html","0c99257dd05b02ae7124425248e6db47"],["/categories/数据库/page/2/index.html","1390cd846069a4584ef928171f0ad017"],["/categories/数据库/page/3/index.html","b84352c4cd3581074302400e6780f309"],["/categories/系统设计/DDD领域模型/index.html","3d2eb35ffec07e8ce035c76b0e059596"],["/categories/系统设计/index.html","eef9a15b764fa575876e9e3697ef6320"],["/categories/系统设计/page/2/index.html","509c40a8ecbb8f2ab25072bff39ef52b"],["/categories/系统设计/page/3/index.html","c4fb56fd13996b05506d58870913aacb"],["/categories/系统设计/page/4/index.html","ff67dd5cc64d5b2a63fbe2b0e71c9b5a"],["/categories/系统设计/page/5/index.html","78e46efd81da57aad41b629b9555165c"],["/categories/系统设计/分布式权限认证/index.html","176b811a37b1cb30e41d06fe5584a01c"],["/categories/系统设计/分布式系统/index.html","6e5f1bce6a4787d8a8662ff5f6cd9355"],["/categories/系统设计/分布式系统/page/2/index.html","409eafcdb67aaf48b174f0d36896e925"],["/categories/系统设计/分布式系统/page/3/index.html","d32238aa5c08ee05f0345def2d5e484d"],["/categories/系统设计/微服务/index.html","410db2f100cd3e9b0706c70a692ab8fc"],["/categories/系统设计/数据库优化/index.html","1db62401f4ef0c7ffe9bc1c7dcb8e852"],["/categories/系统设计/设计模式/index.html","284e03fda9d1543be6645514d6e40e5a"],["/categories/系统设计/设计模式/page/2/index.html","15536afa1149ce872d7b3d41c95e3c04"],["/categories/计算机基础/index.html","ca76ac3c62734b430fde61882536d803"],["/categories/计算机基础/page/2/index.html","600e3e44b66306ca036a957d49a57c4b"],["/categories/计算机基础/page/3/index.html","cca554b12d3ffef9d387d3809e335255"],["/categories/计算机基础/page/4/index.html","cadefc12f5b9914f62333744bd7c989a"],["/categories/计算机基础/page/5/index.html","b8b9d192c60d95c84de115478387a366"],["/categories/计算机基础/page/6/index.html","a3762a62905abf2d8c8d2c4e6549d9ad"],["/categories/计算机基础/操作系统/index.html","fd84ab5c13b604b7d7b42f561fdf8df3"],["/categories/计算机基础/数据结构与算法/index.html","f1d4c6e48d9a398ac296b0573bc6df24"],["/categories/计算机基础/数据结构与算法/page/2/index.html","d2df9a27f87ea9b15bf707cc748ff2bd"],["/categories/计算机基础/数据结构与算法/page/3/index.html","7b57b7f1cb19ccf547c96b8043ea6a17"],["/categories/计算机基础/数据结构与算法/page/4/index.html","9dc68ceb8bac489cd707d1c7606a74c2"],["/categories/计算机基础/数据结构与算法/page/5/index.html","17627be74f04dfc45e364bc5cc93a569"],["/categories/计算机基础/计算机网络/index.html","8d7462df467f51e40a197d432ff81490"],["/categories/计算机基础/计算机网络/page/2/index.html","eb8ecf9356508003cd45ab832d7a4a52"],["/css/index.css","4116fa9aa4ac3772d0d5d3b403252b5d"],["/css/shadow.css","5a0dc2c757a4aaef1f7bfbd8637ed9f7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","41c571bf42fcf5a45d252e6b5958125e"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","599b16b92b15f734a45978862358ea5a"],["/messageboard/index.html","7889e3caa57e8ff16a11690a58145f8e"],["/page/10/index.html","81aec3f4658b74c4c82267dd487e15d0"],["/page/11/index.html","1161b11ae28220e0310650b9bfa18c4d"],["/page/12/index.html","76a6430fadfc0e3b5c8c2eddc6759220"],["/page/13/index.html","82dca01efd28e7a80aec728f1ae0939f"],["/page/14/index.html","180cc7b49ca4f0546a2d6c8d17fefab7"],["/page/15/index.html","bc29843c83aec08ee029e30bb55a5408"],["/page/16/index.html","10fd9c2e6ebe6b071b113f24143ea46a"],["/page/17/index.html","4a8dbfb407a85b0959a8dedf693d67d1"],["/page/18/index.html","de03542aa9b6edd5c919809efddfdbeb"],["/page/19/index.html","a5b825e03120cf88773b411c940ac223"],["/page/2/index.html","3e1134309002848443764e74b97a8edd"],["/page/20/index.html","bec47568c7dc0dad596ed970625cf98c"],["/page/21/index.html","6b8b3804892becdb858fbd2bf6949006"],["/page/22/index.html","2b4c541fd650582f06388b15dbb6208a"],["/page/23/index.html","07b91f3e5328951a68e2347933b40b88"],["/page/24/index.html","d6c51e7d1e61395b2b824ca8694d1657"],["/page/3/index.html","e7c825043028280b96fe15262871ab3d"],["/page/4/index.html","ebbf7c7c468d177dd7e59ab86e99f290"],["/page/5/index.html","3b7e1ec3e9ad847b08b214a986a6f257"],["/page/6/index.html","46978a23901f9abe796013743c3efc21"],["/page/7/index.html","7272529b27abb66a9067e97d3e5b65f4"],["/page/8/index.html","3b0f445119f82e5532d1c87154545143"],["/page/9/index.html","e0807b2f7a40bdf91e0445389d42e6ac"],["/sw-register.js","fc07e9c3406ad3e4146f824ebb3d71ce"],["/tags/Ajax/index.html","4f3b01ec8a66110aa8717798d379c013"],["/tags/Axios/index.html","8cfad8ef3290bc7b9d58a1e775146dc6"],["/tags/BASE理论/index.html","c493222628c3ba0fef4e6f8fcb2807a0"],["/tags/CAP定理/index.html","d96fbd6681298514763889e75330b5d7"],["/tags/CICD/index.html","996534d678e2c37b284c1c251ec2486a"],["/tags/DDD领域模型/index.html","b390770dea08383dba334e85b16c4239"],["/tags/Docker/index.html","0667552e95394c458b94edc3b1cb5420"],["/tags/Dubbo/index.html","25d4ad383600e0805bed59a7d2435f82"],["/tags/ELK/index.html","f7e9f90ba80deb6be153afae117b9066"],["/tags/ElasticSearch/index.html","aae76c7d034a56f7af49440ae2de4179"],["/tags/Git/index.html","b1cc4a21ae08f815ee552902f79750e8"],["/tags/H5/index.html","0af6ab9606d1d432188972a6ed3cc3bc"],["/tags/HTTP优化策略/index.html","5865d6d758f8aac401e83e5204e3cdd4"],["/tags/JVM/index.html","0eb5accbecba5265ab3bfbf274fa6155"],["/tags/JVM内存模型/index.html","c727672c1b4335a199e5f7910deb6d8c"],["/tags/JVM执行引擎/index.html","c46115f4b89b5eab47a53039ddaef43b"],["/tags/JavaScript/index.html","999993573082b082fcb468a5675de60e"],["/tags/Java内存模型/index.html","37d3098f051cbfd3d5b0f65d92d8b1bb"],["/tags/Java进程线程/index.html","bda7bef94f244d86bedc21f82613a6fd"],["/tags/Kibana/index.html","4ce670ae43d8cf126320d48f1dc8a86c"],["/tags/LeetCode/index.html","14b004fe79251cba34bb0e52d2d27c75"],["/tags/LeetCode/page/2/index.html","c8d9441c9812aacddc79e03d19f7966b"],["/tags/LeetCode/page/3/index.html","193c1ef65bca51c1eb3604b2a4692d0e"],["/tags/Linux/index.html","6d697361091b427f3baa2ba2cd171bf9"],["/tags/LiteFlow/index.html","b0ff5fede677448a587ff72d59b026e0"],["/tags/Logstash/index.html","04f6c4c038ddab83f0f2401e2dd66204"],["/tags/Mock/index.html","1f21efb19e6d985ef083f48c3b3cf1af"],["/tags/MockMvc/index.html","ea91eeba4da067fcbf6d85cca73b55d2"],["/tags/MongoDB/index.html","9fc13a1f47e5a3665e4ea8786f7dde47"],["/tags/MySQL-事务/index.html","7c958f42794f41243a139b42cbd47f22"],["/tags/MySQL-数据类型/index.html","563e118ca761376412f40fd47e4a5937"],["/tags/MySQL-日志/index.html","77c7c22a67b415be53152b54ea903520"],["/tags/MySQL-索引/index.html","ecbcfc2f124f2118899505a377ca2c38"],["/tags/MySQL-锁/index.html","ee09079a363cca1630876b81a847b20a"],["/tags/MySQL/index.html","dc3ca64aea42f3b726c07769f74274de"],["/tags/MySQL/page/2/index.html","c97f9291980613b61d735692c5593315"],["/tags/MySQL分库分表/index.html","9140c968cfe119b04526a06556139855"],["/tags/MySQL读写分离/index.html","5a8a4cf615118f050ae20a3959e0cc5d"],["/tags/Mybatis/index.html","16ef7419ae3d1d20618b818538d74693"],["/tags/MybatisPlus/index.html","b0a7991e13c56b5b3688ae02b6c2a9c2"],["/tags/NIO/index.html","6791b30a2caabc02aac2b9a6f8871c76"],["/tags/Netty/index.html","87c717b0ca5d7b8f2d669136e883ef2e"],["/tags/Nginx/index.html","5009c23212065298c1511573a86fe382"],["/tags/NoSQL/index.html","ca5abe36bb7dff39880470890e1044b1"],["/tags/Promise/index.html","5961a03965d6aeea923ca124488ea721"],["/tags/RabbitMQ/index.html","d4e68b6d5032eb6dc1117f6f537e3e70"],["/tags/Redis/index.html","462f80f1b406cf084c9b4b487e656336"],["/tags/Redis/page/2/index.html","4775c17e350db40895156cd489a60846"],["/tags/Redis/page/3/index.html","e955db3c2a48cb20bd153561cf757397"],["/tags/SSM/index.html","de7268a99214c561353ace2f669e9fdc"],["/tags/Spring-Security/index.html","691e9f9f10fdccd53ae66c41267ee63c"],["/tags/Spring/index.html","e3374203e81d3723b9a36ddb1e72525a"],["/tags/SpringBoot/index.html","718328032878567933ff4651c31485cf"],["/tags/SpringCloud/index.html","020a60c5a9e70829d0db84c59448655c"],["/tags/SpringMVC/index.html","01a87e6beb50fe43fe75bb65939c4030"],["/tags/Spring事务/index.html","9143c59977d0538b052ae10caa3b9e05"],["/tags/Swagger/index.html","1898898d71a4c6704c709995668cb3ad"],["/tags/hexo/index.html","2bdf595fdb7085178d804e4534a90674"],["/tags/index.html","ad54b19b3866535c2fb633ffc49f268b"],["/tags/jQuery/index.html","8bfd583d9b6db0b8737d41f37699cd92"],["/tags/java/index.html","7ef4feb823e4fa813f6cf2ae32c69e5f"],["/tags/markdown/index.html","747d51af7cc100c5f412c727f906255b"],["/tags/rpc框架/index.html","ced7c77489749c30245ce5dee38993c7"],["/tags/typora/index.html","08c488b3c6069a9f87182ae45e35095e"],["/tags/vue/index.html","76b5eccee337b0b2e7e5a933e9af2355"],["/tags/享元模式/index.html","aeb478d2c186730b4f6c4541839a3638"],["/tags/代理模式/index.html","743cb1812d2d66e955886614417f7aaa"],["/tags/内存管理/index.html","52e9f21e068b5f7106e43d09acd175e0"],["/tags/分布式/index.html","2ecef2d1333a4eca23754af8e751b544"],["/tags/分布式一致性算法/index.html","71604b400d824071e82c3840c6e25307"],["/tags/分布式系统/index.html","9f33dac69a033b4a1fc7bde8cd3a7f90"],["/tags/分布式系统/page/2/index.html","154242a79d3829cd0e7017be00cf8cbf"],["/tags/分布式系统/page/3/index.html","984471a79ffe68b72b4e8aad48d2529c"],["/tags/前端/index.html","1e5d6cac13666aebcff194b521e04b99"],["/tags/前端/page/2/index.html","a67936782ab72da513609ecba81c7896"],["/tags/动态通知/index.html","2c681b80d17d247f21b761286bed4c35"],["/tags/博客/index.html","1b2040938136a979b0ce281b99116497"],["/tags/后端/index.html","1816481e31bfe17d75c112b00b65f3ad"],["/tags/外观模式/index.html","28a5f11431a9781d08b08b8225f9eb24"],["/tags/多级缓存架构/index.html","a168554829445b6a9660098bd57135b5"],["/tags/多线程设计模式/index.html","0142b745b4b04d0a36324500d6ff3a5f"],["/tags/多路复用/index.html","28f8c32c232111b796775f2ca3e8ec34"],["/tags/容器技术/index.html","18ace9e305cca065f9bdc586b87025f6"],["/tags/工厂方法/index.html","917d41a134b60ce8591eb41aaaafb7be"],["/tags/开源协议/index.html","c8d258c31831504a353a5e5200db901b"],["/tags/异构同步/index.html","ed0c7338727003089470dd9ba14a298a"],["/tags/微服务/index.html","ea473ba21fcd79be398afc9d3a759462"],["/tags/微服务基础/index.html","ded74ea1a09cbfd90a9d5e74ae5c2050"],["/tags/抽象工厂/index.html","c5b255c01c1b979a79d257e0c635fd12"],["/tags/持续集成持续部署/index.html","2e7a8a0ac8d9bb0937efca505cad72cd"],["/tags/接口安全策略/index.html","f2121726097483fc233deb6dbf429b7e"],["/tags/接口幂等性/index.html","b34c7d30ff4bdf026e4bea732b8f556a"],["/tags/搜索引擎/index.html","c8f5718ac7c42728b4c049e9953113bd"],["/tags/操作系统/index.html","764d9cc4b0416dd022d5ba95d3e94238"],["/tags/数据库/index.html","799fa717d014cc00e87c5d18dd1f3552"],["/tags/数据库/page/2/index.html","96818454a345e849f89be351ad7d1800"],["/tags/数据库/page/3/index.html","3434d77af8f18557cb6b4e296a32d59a"],["/tags/数据结构与算法/index.html","e5eac27478de4e5748f69a3ab216907d"],["/tags/数据结构与算法/page/2/index.html","63cb7225f0d44371295303d63bc1396a"],["/tags/文件操作/index.html","4556592a14a6e5e45310dcf824df6413"],["/tags/日志/index.html","71f53215543e2670c8612e360009f59f"],["/tags/服务器/index.html","790dccd7671186d3ac98629d5627543b"],["/tags/服务治理/index.html","6a2a23ef8eb33c79fbb6f04900db3bc3"],["/tags/权限认证/index.html","4641bc3703e21b795e4aaf9cb762450e"],["/tags/架构分层/index.html","fccf07addf7226f73347ceb1ea8a49a6"],["/tags/桥接模式/index.html","cceb1cb52ca942f75511c1227da0d628"],["/tags/模板方法模式/index.html","8a1851d32018d37c60d38dd14254cb6f"],["/tags/死锁/index.html","4be14f1baadab6304534872a87a0c732"],["/tags/池化技术/index.html","a13a5814d2fb2ec123c73fbe536954ce"],["/tags/消息队列/index.html","ad1f7646cebc03f76ebddad44de50a60"],["/tags/版本控制/index.html","3c62e1f4c95f79b610869ce77483b8fb"],["/tags/监控微服务调用/index.html","3c54e0f8db35875a1578685e9753bb9b"],["/tags/策略模式/index.html","88ff476acb960b4484d8134852306033"],["/tags/简单工厂/index.html","55e46dcdab671e015b4b1ff9af2c5683"],["/tags/算法/index.html","7aa4bba6536b2de7450af35bbbc33b60"],["/tags/系统监控/index.html","f3535f26a68bb95250a74cc16dbe57be"],["/tags/线程活跃性问题/index.html","559f71fa43319236f4db84f1ae011cf7"],["/tags/组件化/index.html","2ee07c88dd794cc69f137e63fb272f06"],["/tags/经典限流算法/index.html","f6c99bf6b9452ed005a39da972b5175b"],["/tags/缓存/index.html","c23c72214ff7cfadbaddd913c80adf87"],["/tags/缓存/page/2/index.html","7da59c66cd63c1b929727637d39ed574"],["/tags/缓存/page/3/index.html","91ad5579002ed09e853884f71ee8b72b"],["/tags/观察者模式/index.html","654e2215500e43d56f599de2780ac867"],["/tags/规则引擎/index.html","f700d6dc57cfaaf65e473f8a96193d8f"],["/tags/计算机网络/index.html","7e001eb7da7f06251d58d1067abdb4f9"],["/tags/计算机网络/page/2/index.html","69b0e63b5557b90fbf3ecfd7c3c57aa9"],["/tags/设计模式/index.html","aa2792f918a4c54aac32e6888a41bc5c"],["/tags/设计模式/page/2/index.html","a91c4672dc1f5225a1d4311d611f0349"],["/tags/设计目标/index.html","0751a0971c265b2ece67750b38b71230"],["/tags/资源共享问题/index.html","ba761ab199217ad1fece9bc4bc769ade"],["/tags/进程管理/index.html","c5371864c17c3c25bdedd89d6633ecf6"],["/tags/适配器模式/index.html","d47137348d7dfc0e2b88b8e5cf321341"],["/tags/通用设计方法/index.html","25a2bc187840a5357a2b832116c35b21"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
