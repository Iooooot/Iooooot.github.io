/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","c6ce970435424eeef6b881af0f6a6281"],["/2021/02/22/工具的使用/博客的搭建/index.html","c182f34552fddde439c401d001f01b8f"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","91ed7e6248c01b3058c7c02e3b12f53f"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","b5a5647ee26b50d76416d6f8650ba02e"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","1343216dbeda759c7c9a9b2c6427bbd0"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","10ae7a4730e2addd0cf9e23dd62d26ba"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","05bf0fa48d05b737bbfc29288e11f34e"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","b70439e042b9426b629d86777f267a1b"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","b740a1992a1f9db0d541646e881f48ce"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","20d103dbddc6f711bd9c000a1f888e15"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","aa29eef6012e2e1c1da0de3d4a93cc0d"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","a5a25e1b4f557cfbcedd1a1c0bfbe068"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","ed453aba5127db643e40f87b954c6207"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","383a3cd012e90eac3bf76cc287ec8d2d"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","f76262c4cfac510be64529f8b9df9f3d"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","6e8f80cfcd7c0a6a9ee0bb31559f1c15"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","b47e157218f5ef59260e0bc19b59a647"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","98028bb01f40652616fa6e0c30044c5b"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","8515737e23a6faa540a7a24f92957ee1"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","3482336eadd36556a9b04f7ed2edd871"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","efe371b48788093d67da71935e7c6be8"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","dee90b9da9c1d68f8686601182ea86ce"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","170b0ebdfd8915684cdf6ae589449900"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","347bc2121e801f77faca52e7d61c7e00"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","5f76243a7211c19ca97ec61944daf860"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","a310c3865e97a7107ba9e090d00c0e96"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","d2f0339a7e46f588c4c58d51167c518c"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","c91e89710b3f67cc0aa519fda60e096a"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","53616011434faf2fa1e0c4b7ece9b3e2"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","c3016fd5e04b6b5f0013d95221bb6b23"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","2a12e0c664c049affdd754d5a01ff2f4"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","540fd7f2bf2dd4e874b29a2b824544d7"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","52edf3e8eee671123af156d1cf53167a"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","9e8df25a6fa112980e23f84360b4d969"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","4d5e1f791617c8ee24f7135f0236fed6"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","b3b51cd9abefaea180cc545155ac1858"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","8db9b730513a6170f3ad5f136be5ac63"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","68a32137142ac8712fdd3883579ad920"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","075f5e8073b82a9d21b5781788a2aca5"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","fe2b1ffe84c91bd5e14dda5f8633ee68"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","7cb6840f49374fba34dfda337ab09824"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","94e27887f73e33de454db7a8d51db046"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","a57e229666597b57616ddc6f21a2a328"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","794df028da26c7271b6929cf8a16d0ef"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","9fad669eb23384326f37ecc6f1434b75"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","17ace06e7de888151856280d25bf2713"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","4e5555b2a5ab4278d334736856b149f6"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","0f6b148c168906874b1244f7007a5d53"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","81147691b053394dbb1b0c42148105a3"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","b5264347633cdf8ac47d31e7006c8368"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","26d6230ac70f82b31f1dcac526996fd3"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","fdac544d61c1b24870116dc6a981f1a9"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","c31536b97dd0646d23b1dbd14946d294"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","172f687a893b59a26670ae1939153bdb"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","1cb3d8d639ac601ac5249c490a0289e9"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","a7c7749b2e87d38cbebb932c859fb1d8"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","23b39283ffe5be67fb68c5b1e59ae7e2"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","561049a7bc5f7f0728e0c8ecaaabe774"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","132c011609fa0af29b958e59f4cf3dba"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","2a4670955267f7bcb0dbdd28641360b2"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","d588689eb00565320b02975b58079f39"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","a58b335fb50cd265b3bf127f8be001b2"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","9411404ecd78edd94c4198e3a1760a5a"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","b7a1a99c24f8924610efc7eb6bacc4e2"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","c91f6e44c5bf9f782313b061b21969c8"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","7bd3450a71b43a05d97d41169c368d86"],["/2022/08/17/前端/jQuery/index.html","e980d8f7d94da43db4971fffa980e810"],["/2022/08/19/前端/JavaScript/index.html","3c7bfc98735594f52c12bd0f2f53bc6a"],["/2022/08/22/前端/Ajax/index.html","a9c084ce343ddebc994717dd562b5db2"],["/2022/08/23/前端/Promise/index.html","f873f9e1c25e599d87cc2c5adcb88860"],["/2022/08/24/前端/Axios/index.html","67124dcdeaeac33801c7536b232f5604"],["/2022/08/25/前端/H5本地存储/index.html","1cbc8134bc7b65ae211da230b572a0cc"],["/2022/08/26/前端/mock/index.html","85ae5f42813a1c93259d82f682764109"],["/2022/08/31/前端/vue/VueJs/index.html","d9067f5d853e604d9816d2add5d65ea7"],["/2022/09/01/前端/vue/vue组件化/index.html","4142443f6975b7d33ca63e8973c3caa8"],["/2022/09/04/前端/vue/VueCLI/index.html","d81cbdbb3096e59d4ba06e25fbe796ad"],["/2022/09/07/前端/vue/vue实现动画/index.html","a1fd167e8e30e7c4cefa28b123340f13"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","f503ed04a0604d6656d1f5e2d1b2742e"],["/2022/09/10/前端/vue/Vue异步请求/index.html","2f2bb5a28636d6114f370216d061bae7"],["/2022/09/11/前端/vue/vue-Router/index.html","c301bac80dfd09c51bf3edc09c807dbe"],["/2022/09/13/前端/vue/Vuex/index.html","eed5b23e5d3c29bbb31ef2e6c14797ba"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","5fdc99db092513476e796cf8203bfd7e"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","2fe513e76b9fecbd10f149550142f2d2"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","d1a3e37a63b1fc14e3a2752e24a58c3e"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","82b5ffc420fd9d5b353b9bd4f84331cb"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","28359227806783c6514de8c38665f483"],["/2022/09/28/DevOps/Linux/Linux/index.html","f460604e019db3c0cb79870f3d96334c"],["/2022/10/02/中间件/Redis/redis基础/index.html","bc35bcab1da8f23ac7461e3eddb305c5"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","890eb564f051f9b2fb6f5e427d0a82c0"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","86ab4780699ba9fd8c5c5eb1ae05b609"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","a2a642adb93627af600d2163b2c2cf86"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","47f566b1d1345eb0812019b67330e293"],["/2022/10/17/中间件/Redis/Redis集群/index.html","a5f3176c18d9f5927cd89f918c672f71"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","62ccc33ab6e35b8c2f544e038fe8d3ec"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","6f5fddbdd361577c539c8cc00d71f54d"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","2b15b21bed15ef0801d346515be12234"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","a2776e42bce3ae9095c53c076c81be42"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","344e944dca3243c96dd2e660277c50af"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","4538be50a4b6fe3fb966a60bcafca162"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","b624290a42f3426acadd4ebfe21b4db4"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","627c02796e024ab3f6347db2f589a522"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","f39db41f43abc66e6a6044f47603db20"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","2f1e47a222320227bbd63a7f0a4fec88"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","d243477e86c1ac74988e0350163e48a1"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","b7e3db7c636cd1bdfb98a07fdb6a7855"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","83269b3c0fbec91036a7e3e09222f5a9"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","7be9d38baa951bbde9c0432c49f9d190"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","ee717facda59645730c0e00ffd555915"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","11a865ce8ca65ea4234056efcb438978"],["/2023/03/10/DevOps/CICD/CICD/index.html","85a58439631edd31951e6f377ad9f934"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","65ee2e1dad89650f18222e503f9bbf57"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","b121f61a723ccef94a12c110821a8268"],["/2023/03/13/Java/NIO/NIO/index.html","2e21b7e197fcfd891c45723c35e78a24"],["/2023/03/14/Java/NIO/Netty/index.html","ddba164a716df276b60e0e67d27d091a"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","3dd1218bc73c0734768ded071c05d367"],["/2023/03/17/系统设计/分布式系统认证/index.html","f25af75c67c2da1fd233f3e04717b56f"],["/2023/03/19/Java/JVM/JVM概述/index.html","aabc21ad06c727f51000b2a331c43e91"],["/2023/03/23/Java/JVM/类的加载过程/index.html","6f832456a31c1d06a5c7b9af571032db"],["/2023/03/28/Java/JVM/对象的实例化/index.html","16b53845b33099f6ba20515c1ec3edaa"],["/2023/04/01/Java/JVM/运行时数据区/index.html","899eb4fc3e121073005af39843e76420"],["/2023/04/04/Java/JVM/执行引擎/index.html","00312f86e0167b4664c7a3fd62222ad2"],["/2023/04/06/Java/JVM/对象引用/index.html","5cba7608a1011479626401ddeb86c1cd"],["/2023/04/09/Java/JVM/垃圾回收/index.html","f573e1217e8ef66cdd95d0c900661ea6"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","ce05b336b890263bbd7cb535e5a3140c"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","ade90eec6e2c0aa85449f632259ab696"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","1ad295805baf51ebe867b51a0c0c2628"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","af2e495f228a17d69bf0fa963b1c29c7"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","5abdcc66184f87a4111274a3adb875cd"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","c70d69730a4b967a86a8020fbf4c0117"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","830f844b6630270bbe2dc04245926e10"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","6e4cafb8c779c49420249212560f0edc"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","c1e3aea12a57524c0d8cb63d8d8bc8ab"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","b58e391052a9e6cae0994c9a3a656b72"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","d31dfd7e6a5e7dca600d8626347eca9a"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","84cfca51a692b97cae8122cc3f45f431"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","23e6f3d9174e0e8acd4f132da07ea905"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","95d73e1033fded8f37cedf8ba7eb5ef3"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","6912e55bfce038300e9a415926ff6929"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","d63e039b42dbbea190f17702dbd9d4e5"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","e9a137387fc8b3a7177e5c992568c405"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","13cb985ca3624c59a21f32f53d858dde"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","0dcccb49557a11f50929c9463c877add"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","a87d3da93008cafd07b64be33323ae06"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","d6bb5a14a5f2246fb32336c4745dd26a"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","5d99797d622ed61ef62dd0949ac57046"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","7eb1e139e7a1fc5588b965cbbd213efd"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","69ca1f919f1eab919521999d1fe1083c"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","16e154f2e31338e1ab6a6854f4277642"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","0b914f72f47412f5fd7d9c9712f294b6"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","c42e80a09490d153cf623efc62e85bc1"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","25a4ab07d28a467b1d5767c1c6da3d87"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","07cb5136b567a0dc65bee7705c5cf3a0"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","a3e2177b952e970b0970550d88c29fdc"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","c7d7c165a5f586bfd774d31e62ab89cc"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","b225a505008c4de6c0ba5d383b40db4d"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","3b1fe19db3785ddf8c60c89e4d021f3a"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","6aebafd0ba65ebfb5aa28cd82065f300"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","383f92c3ebfa8c6a16c3228a510defc2"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","ca7f0275b5aaf689a33d6089cb8e5b27"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","408ff3628b7559718e19a7141432536d"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","cc811d24dd44ec682f34e9d027257758"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","17edcedd089def16e0ebf0d00d16e264"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","5129967b4e2f17a8ee468c95ae569ff0"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","cf9b1e3ac6c76d4b96aa13ef53454177"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","dc8dbfbbeb79df19a46f1c078e6b8fdc"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","68037efeabaf49a28268bf56f5df3426"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","cca64a745c99813e247fdde8785327a3"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","07d07aedffe262ad5f72cbc559a141c3"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","d6faf610e985283fd1dff2ab2a584820"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","4fd273d052f14b921296c86859971ae0"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","d75fdb8f4095ea7f5123e35a6a2f8ecd"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","956cd3ca52b6ae509131acfdc379c0de"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","15a11954eeb4f61877590db4f062d0c3"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","15788daad2e1a89d20cc6d495823bb18"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","69d3a2ddb090fb471b0aa26a7d486878"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","5c7e299d18bf319e91e59f5f550cecb1"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","99ccd99ca07e3d2d7b68f2af0db91456"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","abeb63dd8b3455239fb80859e582c476"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","2a3e5c8483eefa02bbf24337f8ab6134"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","75b165629654c71c24464ffe5c557884"],["/2023/09/04/中间件/Redis/Redis事务/index.html","e5ce1114ecd086052cfd912819cdfeca"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","99089a01738b57f19c1af38af793563c"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","41c2bfe996b7e4d3119b084f9b51f873"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","6573734f40d82c119852dc5ab939898b"],["/2023/09/12/Redis数据倾斜问题/index.html","928d73d39e0ba37a17e485e5caa59ef2"],["/404.html","730d1d7389da99e3c78d287f99c1430b"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","8122853d4900532f812e70f3ff864b33"],["/archives/2021/02/index.html","1f2183ef2d4c10dba9499a11483f6534"],["/archives/2021/03/index.html","7cae999a204fd75c1c07cc5c49c7ed48"],["/archives/2021/03/page/2/index.html","ed8ea735c86a147e5f5de959607c75c3"],["/archives/2021/03/page/3/index.html","a62db46ad832f51c0be5817773415519"],["/archives/2021/04/index.html","4ac471aacb9be49123b9652ff0a92a24"],["/archives/2021/04/page/2/index.html","266b66c9e51f5922c859a7dc997edb18"],["/archives/2021/05/index.html","4836c1040f58b78d34fcaa25be75e561"],["/archives/2021/index.html","0ed4c799abf858ff92f3b1106084ab3b"],["/archives/2021/page/2/index.html","8f0efdf8dd40e9f987e9c72d72b16d05"],["/archives/2021/page/3/index.html","3a156d2cccfafbc52d2389d4c9f9aab4"],["/archives/2021/page/4/index.html","dface2dd27dae113b057b92d51158cd9"],["/archives/2021/page/5/index.html","d24431832537fdec84b8d7e93bc594e6"],["/archives/2021/page/6/index.html","2214cbc7b9e042bcee72c32de17826a5"],["/archives/2021/page/7/index.html","3bc1ffee80e64d397c6c122a65973c7a"],["/archives/2022/01/index.html","718ff6d47e25ebb5ccdaea4e7f1b04db"],["/archives/2022/04/index.html","34d046f843c0b1fad9f52435f5a8d3af"],["/archives/2022/08/index.html","ec1f5f67f4bc8a8b138e20f801fabb74"],["/archives/2022/09/index.html","b03e3ff21844d4ced26a9c644cae957b"],["/archives/2022/09/page/2/index.html","06ceb631bb4e0ce2eaa246caee424350"],["/archives/2022/10/index.html","ede8dd6b0fe5c678c56b5a83b907414d"],["/archives/2022/11/index.html","d5a137dc013ab74b0eaaf80c20c0c78d"],["/archives/2022/12/index.html","afb212d4dcbc1f71a12483f9d4ef7967"],["/archives/2022/index.html","d22e28b2091873e13ca0fc3bc8911a58"],["/archives/2022/page/2/index.html","847d5f08825e71704a35f05f64495ed3"],["/archives/2022/page/3/index.html","cbaea935f3118fead91805b6a570c8a3"],["/archives/2022/page/4/index.html","45077d38ca0e588ea62c2b76cf4e5680"],["/archives/2022/page/5/index.html","d14a030c05784e577a725d14f1d4f0be"],["/archives/2023/01/index.html","458d448dd317bb2691dfb6645e04bab6"],["/archives/2023/02/index.html","b03e91f064df2a3df290ebaab0647170"],["/archives/2023/03/index.html","90d2d04c3d7056a0e6d21a492d216b6c"],["/archives/2023/04/index.html","5814e65711ce2a968909227f82e5c3a8"],["/archives/2023/04/page/2/index.html","8f4ac2ada8c882810915066253928aa8"],["/archives/2023/05/index.html","442aa2607c757e86e9b26b9b8e95c12d"],["/archives/2023/06/index.html","71e4f7ac3f0939e2ceefeadb802df0cd"],["/archives/2023/06/page/2/index.html","87c5bbe18ee5c8d72dfa172b9811b9e8"],["/archives/2023/07/index.html","49228c60ba43008095fab893410ada75"],["/archives/2023/07/page/2/index.html","b868a81d725f423e967189229e093927"],["/archives/2023/08/index.html","228784a83942ddf6b3449a557b77038a"],["/archives/2023/08/page/2/index.html","11c2102a163001884e1e4be07762a2e4"],["/archives/2023/09/index.html","4fca0a3295a78bfbbaa7a9f2e6cdcd83"],["/archives/2023/index.html","2631ee8ca02f195dfaed1f252ad5e8ba"],["/archives/2023/page/2/index.html","c7f890efc5668bfeeb63ccaf6c1471a4"],["/archives/2023/page/3/index.html","555da867d064c344e62b2a0b1be95063"],["/archives/2023/page/4/index.html","46d5d6acd3f185aed06af589331cab8f"],["/archives/2023/page/5/index.html","c71c8c874909d19f8a8827a010326aac"],["/archives/2023/page/6/index.html","dc8b1268ed5427da8ce8c66889579c7e"],["/archives/2023/page/7/index.html","8ebf94cbff2ecdb636deb656fb0ff100"],["/archives/2023/page/8/index.html","fb7317c4e3b794e890e1f87b200c1aa7"],["/archives/index.html","86b533a6d1af1d5b2c81226f96783882"],["/archives/page/10/index.html","a2716c40b61f1fb5dc398cae8ef0ece7"],["/archives/page/11/index.html","8e40ec15550a2b617b98e8c8c6eae827"],["/archives/page/12/index.html","ca0806f1f79205b4f63061cc8677b8f1"],["/archives/page/13/index.html","69fdfa36a64ab917458fb376922afebf"],["/archives/page/14/index.html","edcd20889e9b4dbfa9dafba0aae13905"],["/archives/page/15/index.html","14dfbbfaa487bccfe28b737f99946ba7"],["/archives/page/16/index.html","e44b14e8533e87d443217cfb09871995"],["/archives/page/17/index.html","79d35377d539dd821ddca3ff9f62cbf9"],["/archives/page/18/index.html","53902a7107f2f6f2f5ae154d125796e0"],["/archives/page/19/index.html","ffdfec6ac215840621c61fd66db22016"],["/archives/page/2/index.html","71693b6b8a0b47cfaaf9d9587dee802b"],["/archives/page/3/index.html","29fbb173f77beb35cfa327bcbfb5e59d"],["/archives/page/4/index.html","b1e4306ee55b18af6332a69bca09fe15"],["/archives/page/5/index.html","5dccf0bac7a7068e9e3346ae8811186a"],["/archives/page/6/index.html","31f002f3e3b0fe118780ebed0e9ca6ed"],["/archives/page/7/index.html","52db1a3e03d47de1e9f1ce0d33d5eafc"],["/archives/page/8/index.html","1b5f3c7264b1d3912039c7276a778eb5"],["/archives/page/9/index.html","f40b92f258de09d6f71dc76bcfee0ba6"],["/categories/Devops/CICD/index.html","48e1a6a26e75c014b8d965d409b2c0fc"],["/categories/Devops/Linux/index.html","1fbf924d7f124755120c0ee68d78e6df"],["/categories/Devops/index.html","24a149af4e6641b9aa8d63be82b8e4f7"],["/categories/Java/JVM/index.html","b8f1ef3b30d00838f6b1a38527c7e9f0"],["/categories/Java/NIO/Netty/index.html","c026ff080f6617e6d2f4b431134719ec"],["/categories/Java/NIO/index.html","87667bf63f3fcf2bacefbdd8789069a9"],["/categories/Java/NIO/原生NIO/index.html","25b876917d08b9c3f9340cdcf29409f9"],["/categories/Java/NIO/文件操作工具类/index.html","51a770468d0e4efd89fd3b13dd105c5b"],["/categories/Java/index.html","f46531c843b8ca140caa88dfb8ca9d91"],["/categories/Java/page/2/index.html","dfbf158e593d202aa02bd3b5d980af1b"],["/categories/Java/学习路线/index.html","5f883fc45f5cc1ad26cdb252909b0dd5"],["/categories/Spring全家桶/Spring-Security/index.html","bddd1f40777f1b80e8acc56d90e8f5ed"],["/categories/Spring全家桶/Spring/index.html","f525adfde0dd277031b3506d4218c881"],["/categories/Spring全家桶/SpringBoot/index.html","5be55070d3ad8a3199d5ae23a0d5ab40"],["/categories/Spring全家桶/SpringCloud/index.html","961269c41589d090f5f456635acec783"],["/categories/Spring全家桶/SpringMVC/index.html","09b720c79d35db13bb0142b226454396"],["/categories/Spring全家桶/index.html","16939bf4ae808cc760abc0195dbee99c"],["/categories/Spring全家桶/page/2/index.html","9f265e1806c96caca1e3de81560e3a12"],["/categories/index.html","905f0ca50a0e0eb521815057c38ddd9c"],["/categories/中间件/ElasticSearch/index.html","eab9fea98b44a1dfc1f39169937b4c1f"],["/categories/中间件/Redis/index.html","a6b616dbf2c916e1ae0f12f1d32fe52f"],["/categories/中间件/Redis/page/2/index.html","07af90efc420e86806ea228c3a10dcae"],["/categories/中间件/Redis/page/3/index.html","285370119c8818d3dee6b6f1abe446c1"],["/categories/中间件/index.html","15f8e916e78023f7c061284ac59968b4"],["/categories/中间件/page/2/index.html","56dbb8c2012c6e0c0e749fb78eb42463"],["/categories/中间件/page/3/index.html","60b466d3c357002436932f7769870c63"],["/categories/中间件/page/4/index.html","49e7a046919788c9e6ceb653500292b3"],["/categories/中间件/消息队列/RabbitMQ/index.html","9dfe5000b1b068dad8b27af8747a024f"],["/categories/中间件/消息队列/index.html","80080abec5c7be88a1b1832ee5b215a7"],["/categories/前端/Mock/index.html","f051efd578fc63030aa2b8b2bd3dfba0"],["/categories/前端/Promise/index.html","0a4509054b891f1587774d96d8d061e4"],["/categories/前端/Vue/index.html","12453290c763b26c030b735a66f77c06"],["/categories/前端/index.html","3c9bff5dafe55a2860fff636c9b1ddb1"],["/categories/前端/jQuery/index.html","002403cdadeddae7c7959e720b366555"],["/categories/前端/page/2/index.html","6db629d6d381aade0d18283502ee0a85"],["/categories/前端/原生基础/index.html","6f4f548bdc512f686d4fb49d46ad85b4"],["/categories/前端/异步通信/index.html","77603ff9654237cf46aabdc934f67039"],["/categories/工具使用/Git/index.html","e3b7166d789ce9271ba9d9ba3018d67b"],["/categories/工具使用/index.html","fec7ce87be651f52c58859ab06304c06"],["/categories/工具使用/markdown/index.html","f99b85dcd644458cae5136f2d40ba288"],["/categories/工具的使用/Docker/index.html","900f63aea7fc5d74cf6a0fa930708f46"],["/categories/工具的使用/Nginx/index.html","76e93c27e44664490c07e8313bff326d"],["/categories/工具的使用/Swagger/index.html","8ad17a719d3d09a760dbad97081a12ed"],["/categories/工具的使用/index.html","ecc224c33c727bc5ccdf2d305af86a70"],["/categories/工具的使用/博客搭建/index.html","bb23319c5e9c750170fa6c9ce4fb088b"],["/categories/数据库/MongoDB/index.html","1724c48d8c9f471691538de9817e251e"],["/categories/数据库/MySQL/index.html","b98b033a69e022416d50035a3894c887"],["/categories/数据库/MySQL/page/2/index.html","dafadc61525572c6aca3f475fd42e10d"],["/categories/数据库/MySQL/page/3/index.html","b48b7daa2b38313b3b9037969d9dbf05"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","dbf9bb103163ac599e12b6522ef37e4f"],["/categories/数据库/ORM持久层框架/index.html","40315d9b2cd5821e9ea51afbe2d1bad7"],["/categories/数据库/index.html","131cd0b1edd595e99bde0db05a0e9dfd"],["/categories/数据库/page/2/index.html","ee549a03fde46e47e1695432a7e49a55"],["/categories/数据库/page/3/index.html","42011138afcc657efeddfa21f89b3599"],["/categories/系统设计/index.html","e68bf44330e42f381902a0ffa5895dd0"],["/categories/系统设计/page/2/index.html","2c1ba4a9b233895c9bea756c77ab48b1"],["/categories/系统设计/分布式权限认证/index.html","490ae99b8c66e1bb257876b7f22d4310"],["/categories/系统设计/设计模式/index.html","0bcfd0043f8eb6eb9dc158b9a9a161ae"],["/categories/系统设计/设计模式/page/2/index.html","80e048f9f34bfcbdd8b510d6b6368a51"],["/categories/计算机基础/index.html","aac6a2d95affe178d9a30ec48b387a7b"],["/categories/计算机基础/page/2/index.html","71f47b423943814ae4b0df212c8120f7"],["/categories/计算机基础/page/3/index.html","8a15663b6f4a64460d5152266d4bdbde"],["/categories/计算机基础/page/4/index.html","82104b3429004ca4cd9219f0a91ba14e"],["/categories/计算机基础/page/5/index.html","c5a9778f68364bf97ad3b71d61d64916"],["/categories/计算机基础/page/6/index.html","c8d2955926551738ad17b0b2dc17ffbe"],["/categories/计算机基础/操作系统/index.html","5b92480bf8a69dfcef85e6699b2e7083"],["/categories/计算机基础/数据结构与算法/index.html","7fd6ab12e7fbb37b884dd0441c7c0244"],["/categories/计算机基础/数据结构与算法/page/2/index.html","e43a9b75708204615abe928ac7f579a5"],["/categories/计算机基础/数据结构与算法/page/3/index.html","e74dc88bcb881a15d6c7717cdd1d31ee"],["/categories/计算机基础/数据结构与算法/page/4/index.html","eff7d60d6108a1b9988b7a5c8d1162be"],["/categories/计算机基础/数据结构与算法/page/5/index.html","29e7c1212805113c48faec44197e1199"],["/categories/计算机基础/计算机网络/index.html","cdfb11f52a44bb21fca01e11c84669b4"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","df562ba6fd7769c6ee7b73ecfafd8243"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","eac1ebc1440630fc39bcff138057a1fa"],["/messageboard/index.html","c74c02b6a9e98e5763790ea1ef173a69"],["/page/10/index.html","b434176a37f64dc6a918705570d5054f"],["/page/11/index.html","f25e939ae17a224d17e4733ab91877d7"],["/page/12/index.html","77fe2c530cf70b0230257def8ce355e6"],["/page/13/index.html","ee53a564fa51fde90cf89d1c850caaa2"],["/page/14/index.html","1710b00ec9c46903e5ddf678bdd89e7e"],["/page/15/index.html","c155214e3ae08107d76cee45abfe48f7"],["/page/16/index.html","71e46b0f15bc348636ed4ab00751f755"],["/page/17/index.html","66995806a42d839e8369cd6f5fe2069d"],["/page/18/index.html","e8b14a7c942261d9c70c379cdf6389c8"],["/page/19/index.html","27289fbfa085ba89053b9c407fd49e5f"],["/page/2/index.html","c69d4cf652ed6ba166f3279efa41af29"],["/page/3/index.html","f48e1dd50b539723ecd97c0cd3813114"],["/page/4/index.html","1f2712284fc1cd068ffcec681980cf83"],["/page/5/index.html","a27caab5324234afc037e5e04425362f"],["/page/6/index.html","4cd4962100e9202d182874c90a63975f"],["/page/7/index.html","ba1a48218bb44654488d4e1b2fd63900"],["/page/8/index.html","f5af8661d880d916d7848792be08b2c5"],["/page/9/index.html","9b936ecab153df873b8459b122656366"],["/sw-register.js","fc1fc20989c8abdb8232dadc30f22573"],["/tags/Ajax/index.html","e81fe1aa9366d4ca9c743c0c2f7f4481"],["/tags/Axios/index.html","f4e3988c15f5e43e9112c7bef7b2e4f0"],["/tags/CICD/index.html","fd2c3cc5541575921ab45919a6f8f4cd"],["/tags/Docker/index.html","fd898f6c8e9df58c21fc2ea913aef7d2"],["/tags/ELK/index.html","4f7cbf0e3ff64c1e920adced2f41d70e"],["/tags/ElasticSearch/index.html","25117dbfc3535e65c0e499158655cb71"],["/tags/Git/index.html","e238b0e1f1984bd548cdd82eebaa86bd"],["/tags/H5/index.html","f84231b13536494cd644ce089d6d587e"],["/tags/JVM/index.html","a43f5d8f868a56d070cc8bdc58f667a9"],["/tags/JVM内存模型/index.html","0835024951768a6db8626736b28bad50"],["/tags/JVM执行引擎/index.html","40b751da71ab2c9b8093ab05552c6046"],["/tags/JavaScript/index.html","8116b82248e0a89d054342091d659d70"],["/tags/Kibana/index.html","e4794e53c521039ae5f5e5877d2750b3"],["/tags/LeetCode/index.html","38bc861b2e249fbd6688d989fe9cecd5"],["/tags/LeetCode/page/2/index.html","04763b736a9e3730084d9f7b14d9dab0"],["/tags/LeetCode/page/3/index.html","a74a9c3602284a6154720c2af86afad2"],["/tags/Linux/index.html","eb8417cec7998d1d1af9209af91bbe87"],["/tags/Logstash/index.html","1412c19b8b96e1d3e5cb47b35b0e6f4f"],["/tags/Mock/index.html","acb6d8980ec4bdc667b458b83c9e141a"],["/tags/MongoDB/index.html","eb7a8e5b677a9030965590280e384cd3"],["/tags/MySQL-事务/index.html","56dfaaaa3813a74d3e1dac5b07d797f3"],["/tags/MySQL-数据类型/index.html","a3d7179bd22042b5b7e71ffeed5cd3f9"],["/tags/MySQL-日志/index.html","c509e10eb1c55891beda9e04b955804b"],["/tags/MySQL-索引/index.html","7170242ec886d4c949b49d2dc889e313"],["/tags/MySQL-锁/index.html","966d6b87dffa4b4bc00460b5d5e660a2"],["/tags/MySQL/index.html","cb7981ef1498c0968c7ecff653ac2625"],["/tags/MySQL/page/2/index.html","8baa472a721db27ad6fe23763fb94b7c"],["/tags/Mybatis/index.html","a4d6b2caa02b7699d69800de102fbcd3"],["/tags/MybatisPlus/index.html","2a77a1a4e1eb65125569d72c63481ff2"],["/tags/NIO/index.html","09d80089c67e7fd0aff9c970bfe3dfa3"],["/tags/Netty/index.html","90eedd51130998e1dc88a3818b595910"],["/tags/Nginx/index.html","e3ec22dc7f09edba81a7bb9648599896"],["/tags/Promise/index.html","b225806312ff81dddbc48a3bbca4d05a"],["/tags/RabbitMQ/index.html","7f524254ddd8133e2d88cb7193c7d419"],["/tags/Redis/index.html","9afcb2b2c7a95afda23ecb0b9068eddd"],["/tags/Redis/page/2/index.html","bafa623e3eed004c1d6c12a1bd11d218"],["/tags/Redis/page/3/index.html","7b0dbfd2831e1ff5b53f15b34ca950c5"],["/tags/SSM/index.html","f9e849c6e3acf29ca84c79fa42534b3a"],["/tags/Spring-Security/index.html","d839a56ec4fb34c2847c79e1285cab0a"],["/tags/Spring/index.html","f49836469e42fb136ca5d76c9511d1ba"],["/tags/SpringBoot/index.html","759089a566d341811ed36bf41d63830e"],["/tags/SpringCloud/index.html","05203f0fef73328faa74b83ef3d87d65"],["/tags/SpringMVC/index.html","c6536abba2616214af017b44c4c61e35"],["/tags/Swagger/index.html","15e39c515efc3d77ca9de14e0355bbfc"],["/tags/hexo/index.html","d200fc0cb5e465c49a458196c3b0aa0b"],["/tags/index.html","b99aef7835ddf965afbe788d979976ef"],["/tags/jQuery/index.html","69462562fa25f1becc388360184cd658"],["/tags/java/index.html","56115b4d2defcf8ea1b4b3ac35513a49"],["/tags/markdown/index.html","5e6e4b7099b09121eb2195dfaff09aca"],["/tags/noSQL/index.html","ce4d5c715f82268a15670e8f7f7bdeee"],["/tags/typora/index.html","135741e46baf426fbdab1455ca6a1488"],["/tags/vue/index.html","4aa2a908a087c9a3ca7726915db10c00"],["/tags/享元模式/index.html","abf442a87089ce8e3a27e174d2b66224"],["/tags/代理模式/index.html","23ca9bbf5f43b8caff8661d7c3c6966d"],["/tags/内存管理/index.html","c86037aacd52490df38ed275cc49073a"],["/tags/分布式/index.html","aa737a744b1cbacd3c1ab351f6363ca5"],["/tags/分布式系统/index.html","c3fed47b6e5dba1d2ffe0fd89206f9cf"],["/tags/前端/index.html","5a95da6a8a021e0a2413fb15de26c629"],["/tags/前端/page/2/index.html","3cd5a5f8e7664d3a59c9ba115b7f53ab"],["/tags/博客/index.html","452e7b4e8eafb07d368d211fa41f8fd2"],["/tags/后端/index.html","b00e7e3012c79a75b27eeb02d842147c"],["/tags/外观模式/index.html","93651bcde2ea6c93573148655ed425fb"],["/tags/容器技术/index.html","9c6f9b6e7f24349db4dee00c30ca6f03"],["/tags/工厂方法/index.html","2b7db7974397ad69ad62d37839dbbe17"],["/tags/微服务/index.html","c9a2e555ad341d53fd43fd9953334e3b"],["/tags/抽象工厂/index.html","450e39a246d9cc883a79f43a8b19fd97"],["/tags/持续集成持续部署/index.html","5e7ae38f40f0400349c05bb6eadeb2ab"],["/tags/搜索引擎/index.html","70c592e75fc37b1a250de105fe5e6198"],["/tags/操作系统/index.html","5e0df929a21e5e2befad59b165b125a6"],["/tags/数据库/index.html","f7ac191098ac6ed86487d12a9e127fb4"],["/tags/数据库/page/2/index.html","699580dabae707b54b2af2ed408277cd"],["/tags/数据库/page/3/index.html","374c2fcc3267da8a9d1079704df3dcd4"],["/tags/数据结构与算法/index.html","7b04a3cdb9dacf68850c210dcebcf068"],["/tags/数据结构与算法/page/2/index.html","983b8275c71ada841237097fb5aa2572"],["/tags/文件操作/index.html","77d541b51779dfc5ee32c015d394ceaf"],["/tags/日志/index.html","eb6a5e131c4b355319b7f0c0d5a1c8fe"],["/tags/服务器/index.html","3c57ec071cb2a92de9e3d717ac9c6958"],["/tags/权限认证/index.html","449d0b60c447bd01808525661a6d00a8"],["/tags/桥接模式/index.html","db7e49c46e7bd1c45beb4f25b771b08f"],["/tags/模板方法模式/index.html","c8cca8ec85e75175caaa535a1fea3d8d"],["/tags/死锁/index.html","e4f35a0280573498d8b84afded78b5a9"],["/tags/消息队列/index.html","cd3949feea6210877cf33ab011b50c24"],["/tags/版本控制/index.html","6e054cdee6cf47673d4b665eddd7d330"],["/tags/策略模式/index.html","56b1d67cbdd2450caee86755509113be"],["/tags/简单工厂/index.html","79836271dbf155f6cac60f892ac45f99"],["/tags/算法/index.html","c9914d2cba8efc24012a255538c1a416"],["/tags/组件化/index.html","ddc19e1f0cc3677952100352601f79e0"],["/tags/缓存/index.html","b551cb41baa71611ae2855eb305cf29e"],["/tags/缓存/page/2/index.html","264c89dce8738277b21878e1e9979f1b"],["/tags/缓存/page/3/index.html","1eda9715dfd725a961fc88d35fe71395"],["/tags/观察者模式/index.html","e7e9a0553fb4de79399d8cb1464a522f"],["/tags/计算机网络/index.html","bf92d75cbd414850bf099975b0c089b1"],["/tags/设计模式/index.html","c6e45fa8f3af1384410f24b176adddb2"],["/tags/设计模式/page/2/index.html","bc51a3a43d6372c4e97880501894c36d"],["/tags/进程管理/index.html","753e051e56fcfa272524084100cde69a"],["/tags/适配器模式/index.html","c0b55c366dea5a3443817e16f9cc6d28"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
