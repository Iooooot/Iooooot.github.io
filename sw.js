/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","c6ce970435424eeef6b881af0f6a6281"],["/2021/02/22/工具的使用/博客的搭建/index.html","c182f34552fddde439c401d001f01b8f"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","91ed7e6248c01b3058c7c02e3b12f53f"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","8f505dddc7f9df3f531a5c0b77db5d4a"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","c7b4e8214bb76d402e96116de3ff254d"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","10ae7a4730e2addd0cf9e23dd62d26ba"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","05bf0fa48d05b737bbfc29288e11f34e"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","b70439e042b9426b629d86777f267a1b"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","b740a1992a1f9db0d541646e881f48ce"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","20d103dbddc6f711bd9c000a1f888e15"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","aa29eef6012e2e1c1da0de3d4a93cc0d"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","a5a25e1b4f557cfbcedd1a1c0bfbe068"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","ed453aba5127db643e40f87b954c6207"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","383a3cd012e90eac3bf76cc287ec8d2d"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","f76262c4cfac510be64529f8b9df9f3d"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","6e8f80cfcd7c0a6a9ee0bb31559f1c15"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","b47e157218f5ef59260e0bc19b59a647"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","98028bb01f40652616fa6e0c30044c5b"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","e284383915bc3c01cadb71fe3ef32a07"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","3482336eadd36556a9b04f7ed2edd871"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","efe371b48788093d67da71935e7c6be8"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","639df62da98c6ea2dfbd5ed35231c98b"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","faeeb54d04480a69e5cd91fe213290a7"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","347bc2121e801f77faca52e7d61c7e00"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","5f76243a7211c19ca97ec61944daf860"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","a310c3865e97a7107ba9e090d00c0e96"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","d2f0339a7e46f588c4c58d51167c518c"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","c91e89710b3f67cc0aa519fda60e096a"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","53616011434faf2fa1e0c4b7ece9b3e2"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","c3016fd5e04b6b5f0013d95221bb6b23"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","2a12e0c664c049affdd754d5a01ff2f4"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","540fd7f2bf2dd4e874b29a2b824544d7"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","52edf3e8eee671123af156d1cf53167a"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","33905d6280850ef2db889e989697fd4f"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","4d5e1f791617c8ee24f7135f0236fed6"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","b3b51cd9abefaea180cc545155ac1858"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","8db9b730513a6170f3ad5f136be5ac63"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","68a32137142ac8712fdd3883579ad920"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","075f5e8073b82a9d21b5781788a2aca5"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","35919339efb3e16232f0e0fbaf7bb776"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","7cb6840f49374fba34dfda337ab09824"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","94e27887f73e33de454db7a8d51db046"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","a57e229666597b57616ddc6f21a2a328"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","794df028da26c7271b6929cf8a16d0ef"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","9fad669eb23384326f37ecc6f1434b75"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","17ace06e7de888151856280d25bf2713"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","6f96070fbf81f91add41c4e9e36903f7"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","0f6b148c168906874b1244f7007a5d53"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","2293c912383b66dee8a1756c035ccd28"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","2c521156126ac9f9a73d7167654a17ab"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","1a65c6fe67cec1d826ed03e43cb86649"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","5f2e3c0fd792b5ac2006d89a5d08b19d"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","681b9a063aff554b742ae9049ab87f42"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","b7a518073a54c7cee4e061e4187daeb3"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","575546bdc7ca56a8a52dcaccd32f39d2"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","d7d18eb1b8cd287b9ae24e041f9490c3"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","874b882d7f19b5e799ca1aacaa8c89e4"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","561049a7bc5f7f0728e0c8ecaaabe774"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","132c011609fa0af29b958e59f4cf3dba"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","8ae621e7a9f4caa79a3e307b49d2a73c"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","59ee5c42b08cab0d426bc3f19bb7d8ff"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","4f1c0ca411ff943c63b65f16deda9a78"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","d62d0c52ca7e84f6efde68a32a5f1adc"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","b7a1a99c24f8924610efc7eb6bacc4e2"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","4737368c7e14730a02d61df16973587f"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","7bd3450a71b43a05d97d41169c368d86"],["/2022/08/17/前端/jQuery/index.html","54a7a853563572bee73deddb61cfc014"],["/2022/08/19/前端/JavaScript/index.html","b46cfbb55104e706f26f02dbd2c02e0d"],["/2022/08/22/前端/Ajax/index.html","a8e1a14a93f82886c37fbe109fc41e07"],["/2022/08/23/前端/Promise/index.html","d1ca1cb5f12e20552446fa1a2956596d"],["/2022/08/24/前端/Axios/index.html","09bec88bed03316610698a411a9a3c54"],["/2022/08/25/前端/H5本地存储/index.html","fea1d3281752d5545f8a597f73b9de0a"],["/2022/08/26/前端/mock/index.html","55848c59734d3220c902b2113aa080e0"],["/2022/08/31/前端/vue/VueJs/index.html","d9067f5d853e604d9816d2add5d65ea7"],["/2022/09/01/前端/vue/vue组件化/index.html","f297cb9d23e9c6467d1ac746ee3ee8c4"],["/2022/09/04/前端/vue/VueCLI/index.html","cf1332e339cd7504e35f7f951b7c7d17"],["/2022/09/07/前端/vue/vue实现动画/index.html","83b065727e489ef7ae46de77005ba661"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","6c8a732756588b5f46a73aa90591f2a6"],["/2022/09/10/前端/vue/Vue异步请求/index.html","4b4dbc6f733c64ecb30ac719646755d9"],["/2022/09/11/前端/vue/vue-Router/index.html","fc735bf1645e3a5c370fb5d93993adab"],["/2022/09/13/前端/vue/Vuex/index.html","a6fcc9493d7b11331e95e2c3a3339b02"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","fa0982ffd2d3b42e803fe953a9819936"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","214c43445093a77473f4bb5f550b9068"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","c06200dd99e0736a4f0cbeffb8d1755d"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","2d5b60979e42d397b16f015dd535383e"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","eb2c7369c2bb8bcfe231ad20e6b6235e"],["/2022/09/28/DevOps/Linux/Linux/index.html","f460604e019db3c0cb79870f3d96334c"],["/2022/10/02/中间件/Redis/redis基础/index.html","bc35bcab1da8f23ac7461e3eddb305c5"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","890eb564f051f9b2fb6f5e427d0a82c0"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","86ab4780699ba9fd8c5c5eb1ae05b609"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","a2a642adb93627af600d2163b2c2cf86"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","47f566b1d1345eb0812019b67330e293"],["/2022/10/17/中间件/Redis/Redis集群/index.html","a5f3176c18d9f5927cd89f918c672f71"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","62ccc33ab6e35b8c2f544e038fe8d3ec"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","6f5fddbdd361577c539c8cc00d71f54d"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","fa8dd92c8e96146a191057bc889a96e6"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","1a167c631b93e2e17762e5eeabd4c296"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","4d7fa3640693150c5b5570ab6d1d4435"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","46b5c40056841ec1cd474fcb4c70ce28"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","e20ee711daa3d23baf0c3dc101a7d634"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","1ff4f3cd852f713b73fb8dc131fd67d5"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","3ab0f4e3b5697100432f6c137c3284a4"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","34b7879110fd91af7a72a8c76b156cef"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","57d88acb754a4af72ed61b744868faa9"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","b7e3db7c636cd1bdfb98a07fdb6a7855"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","83269b3c0fbec91036a7e3e09222f5a9"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","516812e8a7e28eee1fe2ff77102aff1a"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","ee717facda59645730c0e00ffd555915"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","11a865ce8ca65ea4234056efcb438978"],["/2023/03/10/DevOps/CICD/CICD/index.html","85a58439631edd31951e6f377ad9f934"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","65ee2e1dad89650f18222e503f9bbf57"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","b121f61a723ccef94a12c110821a8268"],["/2023/03/13/Java/NIO/NIO/index.html","2e21b7e197fcfd891c45723c35e78a24"],["/2023/03/14/Java/NIO/Netty/index.html","ddba164a716df276b60e0e67d27d091a"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","3dd1218bc73c0734768ded071c05d367"],["/2023/03/17/系统设计/分布式系统认证/index.html","f25af75c67c2da1fd233f3e04717b56f"],["/2023/03/19/Java/JVM/JVM概述/index.html","aabc21ad06c727f51000b2a331c43e91"],["/2023/03/23/Java/JVM/类的加载过程/index.html","38375c1a0781cf48084cc7bb397b5209"],["/2023/03/28/Java/JVM/对象的实例化/index.html","9bcb6c7b8fa3eabd14b06e689a158df0"],["/2023/04/01/Java/JVM/运行时数据区/index.html","43344711af9a26cc0685613d5fb5280d"],["/2023/04/04/Java/JVM/执行引擎/index.html","93db91c1203e14d8b5454f2a34a79c39"],["/2023/04/06/Java/JVM/对象引用/index.html","771b6f32492a83b1ca662d7ba44c37ad"],["/2023/04/09/Java/JVM/垃圾回收/index.html","a8229f1a2325b2c8e831f41a53f5a97b"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","6d0ee328565bc8dbb52c1a5accc924e1"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","ade90eec6e2c0aa85449f632259ab696"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","1ad295805baf51ebe867b51a0c0c2628"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","f0a7a801c83ec5b9b559f1eac274b9a4"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","54cfe726bd5cee740a39fa73c4dea520"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","c70d69730a4b967a86a8020fbf4c0117"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","61dc44f8108e20f02ee53bec04ad43b4"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","6e4cafb8c779c49420249212560f0edc"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","8c996391b640b529bec07143cf4820c4"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","b58e391052a9e6cae0994c9a3a656b72"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","d31dfd7e6a5e7dca600d8626347eca9a"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","84cfca51a692b97cae8122cc3f45f431"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","23e6f3d9174e0e8acd4f132da07ea905"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","95d73e1033fded8f37cedf8ba7eb5ef3"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","6912e55bfce038300e9a415926ff6929"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","d63e039b42dbbea190f17702dbd9d4e5"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","e9a137387fc8b3a7177e5c992568c405"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","13cb985ca3624c59a21f32f53d858dde"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","0dcccb49557a11f50929c9463c877add"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","a87d3da93008cafd07b64be33323ae06"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","d6bb5a14a5f2246fb32336c4745dd26a"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","7414bb21aa62158c54e3909add554e4e"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","5f647864bf7af53e935d547f8a3f6948"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","12d842667f2f586bbff19474e3129e5d"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","7a572f1c7108909d7cbdcbaf0f503619"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","7accb2f665db028b00ec87d2a419875c"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","24fe0893e4bb8b946025cdc9253c22c2"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","1f820df400bc378fd6661ca0049fa4d9"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","c7f7b6c9524093a02537841832b34543"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","4c9e4ef94f1e51eb565b00b7a822a8e4"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","c7d7c165a5f586bfd774d31e62ab89cc"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","e62f0e46ee6122b8226fa59e19307f90"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","4ceed5e525b94f2748684275102109c1"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","37faf16399ce16736dff6f21f3cf10af"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","6ecbd7252346737c543ed86c0e2e300c"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","ca7f0275b5aaf689a33d6089cb8e5b27"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","eb33d56712ffb5291bd2351c057bf709"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","95d93649595b01c06e4f9b88f53fb007"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","af270849d667c223e83a53e229fb48a0"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","ad9c18b16f99a693c6a6ba69280deae7"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","5317e47a2c48736e50cbd60ca225f76e"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","f2ac2e95e3fe32f45983c92413596e8e"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","a27e509a4ad0bad9a01466b0e3aa0c5d"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","cca64a745c99813e247fdde8785327a3"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","07d07aedffe262ad5f72cbc559a141c3"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","d6faf610e985283fd1dff2ab2a584820"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","4fd273d052f14b921296c86859971ae0"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","d75fdb8f4095ea7f5123e35a6a2f8ecd"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","956cd3ca52b6ae509131acfdc379c0de"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","15a11954eeb4f61877590db4f062d0c3"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","15788daad2e1a89d20cc6d495823bb18"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","69d3a2ddb090fb471b0aa26a7d486878"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","5c7e299d18bf319e91e59f5f550cecb1"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","99ccd99ca07e3d2d7b68f2af0db91456"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","abeb63dd8b3455239fb80859e582c476"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","2a3e5c8483eefa02bbf24337f8ab6134"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","75b165629654c71c24464ffe5c557884"],["/2023/09/04/中间件/Redis/Redis事务/index.html","e5ce1114ecd086052cfd912819cdfeca"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","99089a01738b57f19c1af38af793563c"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","41c2bfe996b7e4d3119b084f9b51f873"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","6573734f40d82c119852dc5ab939898b"],["/2023/09/12/Redis数据倾斜问题/index.html","928d73d39e0ba37a17e485e5caa59ef2"],["/404.html","18677d9f716bb3bc4fd4680b24216087"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","c98978ac80c25ec8e50626e7bee45a58"],["/archives/2021/02/index.html","2bfd83eaa12ccd5c9b12d809e08e40c3"],["/archives/2021/03/index.html","ece774eca653a053e01e658620b796da"],["/archives/2021/03/page/2/index.html","995aa0e4b28417f94349d01d33f7f3f1"],["/archives/2021/03/page/3/index.html","e84cb7d515921fc316a61b602ac32918"],["/archives/2021/04/index.html","62ebc5bc8d1fa956a9d80b052f9a1cec"],["/archives/2021/04/page/2/index.html","8ff01909d8afa69e6073a3676dd32929"],["/archives/2021/05/index.html","1e63ae81249ea0fcf856b03456dd3975"],["/archives/2021/index.html","f7de7f541b95b444c2fba593928cab99"],["/archives/2021/page/2/index.html","39b89eb9971a406a8eb776e272821ff5"],["/archives/2021/page/3/index.html","3df83b75ba8ca2a10b50e4ef8f9cb546"],["/archives/2021/page/4/index.html","d12051154afe26fe74c486381a8327f9"],["/archives/2021/page/5/index.html","2609397d42793e1ca9e7b4409b8b3058"],["/archives/2021/page/6/index.html","23c39e7a3574c23eef424b95fd782d2a"],["/archives/2021/page/7/index.html","efe47d5765c0e03842abc44c653e21a0"],["/archives/2022/01/index.html","f81e9bd2e00c188699214d14cfa2848c"],["/archives/2022/04/index.html","f4c24aefc1cf8348ec774e147f4bd29a"],["/archives/2022/08/index.html","b1de7e122498ad0e53dee6b8ba640022"],["/archives/2022/09/index.html","6028649105ed46159407d927f99888c9"],["/archives/2022/09/page/2/index.html","cb546040eea3a03e365a8690ee2ce7ad"],["/archives/2022/10/index.html","45160a0fd9de4dbc775b3308f6a6bbf9"],["/archives/2022/11/index.html","692e3548845b96773757c1b1fd42b0ec"],["/archives/2022/12/index.html","1429997a0e59c0b960d84166cce5bb6e"],["/archives/2022/index.html","01407431d13279c6b3490b0d60df70b4"],["/archives/2022/page/2/index.html","3616028fd541ce040be08686ebe28912"],["/archives/2022/page/3/index.html","623bc9bee0a60f429bb3769675b9d9a7"],["/archives/2022/page/4/index.html","6be6fc00f92b996e3754fff5fa55b7d7"],["/archives/2022/page/5/index.html","2e4e4348a9d71ee2c79c059f4cf221c8"],["/archives/2023/01/index.html","4c01d15027709900874d040832be02e6"],["/archives/2023/02/index.html","b50804455be96851fd434cd9d888aaff"],["/archives/2023/03/index.html","a4a37428b2024aed292b27154ed91dcb"],["/archives/2023/04/index.html","adc178f8dc289ea2396ec390b2e49443"],["/archives/2023/04/page/2/index.html","a0bea6961d52faa8d178eda18c6ee0f9"],["/archives/2023/05/index.html","7004bf445a59ce0de2afa73c73d91ea0"],["/archives/2023/06/index.html","52012aa52a6edba4fb2efa92f2157660"],["/archives/2023/06/page/2/index.html","4ff404d1b6b0c4097054eb4655a5eafb"],["/archives/2023/07/index.html","21a13f1bdfbfb813bd2d7f051540187e"],["/archives/2023/07/page/2/index.html","802450cb5c8fb373c85cd73cdcc8deb0"],["/archives/2023/08/index.html","7c83fba33c2d2d6c1fdefb082a09a17f"],["/archives/2023/08/page/2/index.html","689f50238e8ec87d3f512cc3a80b8186"],["/archives/2023/09/index.html","928ba737c404f9d9a4bd1f36c65297a6"],["/archives/2023/index.html","3a13105997ca3962ebee2adc4defb0ef"],["/archives/2023/page/2/index.html","eb48330669f598c5f1d72b71dba42b87"],["/archives/2023/page/3/index.html","0117d052a1f1931dd39bfb840d945d00"],["/archives/2023/page/4/index.html","e7a6fe626cd61c409911ef791130d6d8"],["/archives/2023/page/5/index.html","5bc9ad3b7742119a008dfdf916edf986"],["/archives/2023/page/6/index.html","7805ae52443c6eaa18c00bb8df80febe"],["/archives/2023/page/7/index.html","2434bda2dc835701d0185fdb53578673"],["/archives/2023/page/8/index.html","77b4858d0afd5b2273254fad5c883cac"],["/archives/index.html","45d174a5c0c9bd15d37aefc3e78fc581"],["/archives/page/10/index.html","385ef4d5d0f974b630d543d7b1c1f7ff"],["/archives/page/11/index.html","88de69d0621900e035a65d89bf26b1ff"],["/archives/page/12/index.html","095ab8dc1e9d6fcf0ba042404a3e470d"],["/archives/page/13/index.html","0e1c240334e5a7a19fd1d327025e07ee"],["/archives/page/14/index.html","c6aa66cb0f9f31d423d3ea3794a143d8"],["/archives/page/15/index.html","716853a6756b9df4b8e85c27937dcc34"],["/archives/page/16/index.html","9dfdf37846e3e9191f29cbbd7ee19229"],["/archives/page/17/index.html","6f5686f76c1afa4324edeaf3eb78d244"],["/archives/page/18/index.html","85267e64fa93fd7d15cc7d6388248abe"],["/archives/page/19/index.html","9a0fa89ad50b6b114e2cd577ebb0f6bc"],["/archives/page/2/index.html","d0b7f329e1a7890f6edbdbfb8f89b581"],["/archives/page/3/index.html","2ed69a57882df2202183fd2da05a8598"],["/archives/page/4/index.html","d8f637388706a1cb1514a9f28fa30cca"],["/archives/page/5/index.html","f1eaaf54c39d13c5a704f2b14d717546"],["/archives/page/6/index.html","ccfec4f4be01987785e7c1bf73c96eef"],["/archives/page/7/index.html","9f6e978dd5d29258ee769cb5c456d146"],["/archives/page/8/index.html","fafc875de02a35f748370d7f4419b598"],["/archives/page/9/index.html","c137ac88612ef0b78368584955483f24"],["/categories/Devops/CICD/index.html","bd24d5a5581bf8359804beb438b93a19"],["/categories/Devops/Linux/index.html","54746b47ff4452f5596e70460f2ab084"],["/categories/Devops/index.html","9d8a39047c0768d31a60bbccc0fb42ae"],["/categories/Java/JVM/index.html","5c21c0a781c3b915ad9587a7e47190f9"],["/categories/Java/NIO/Netty/index.html","7adaa918e1756bb2ab392d7557a7c823"],["/categories/Java/NIO/index.html","2d08246501b8b9cf40b15b2133d3958e"],["/categories/Java/NIO/原生NIO/index.html","a1897654f4e8ab0d44625598ff187cef"],["/categories/Java/NIO/文件操作工具类/index.html","7a3b75476fbbc6b6a52c6fdcf83478b1"],["/categories/Java/index.html","59e84810e935a43ee07789a546790817"],["/categories/Java/page/2/index.html","962abc77eb7d2e2da93a848a3754615a"],["/categories/Java/学习路线/index.html","ed16960b348fffd9eadc82c9403913f8"],["/categories/Spring全家桶/Spring-Security/index.html","505f5e544a1368fc6c32f9596bb9a733"],["/categories/Spring全家桶/Spring/index.html","7d70fa996f1fc7b59e9479eea3c1189c"],["/categories/Spring全家桶/SpringBoot/index.html","4f3e9340b55336b9719a8342895ca6e6"],["/categories/Spring全家桶/SpringCloud/index.html","ae44d0b4ada88fbd754c9f142288719b"],["/categories/Spring全家桶/SpringMVC/index.html","ceb2cd6bd849fd596711a30514813520"],["/categories/Spring全家桶/index.html","997d6419fa9709b1c0977d2de8e8e524"],["/categories/Spring全家桶/page/2/index.html","df4d072642fad3deb7bc7d1171ed08a9"],["/categories/index.html","7e6c80f8a630254d324eed25a8c1ab9c"],["/categories/中间件/ElasticSearch/index.html","bebdd8fb249acd945e74926c9be0ca9e"],["/categories/中间件/Redis/index.html","3e80df1374dc02654c4a8b70ec3e0959"],["/categories/中间件/Redis/page/2/index.html","a32f5097b5ee81cffa3e579619654dde"],["/categories/中间件/Redis/page/3/index.html","b23a22f136c0c2161de1d474a25bfc50"],["/categories/中间件/index.html","bdd785d9be6710f406bd8d21d11ff3da"],["/categories/中间件/page/2/index.html","070943c3eb1c30cac6baff1e2fb51a67"],["/categories/中间件/page/3/index.html","ae9ba852bc88234230b406d06b881dcd"],["/categories/中间件/page/4/index.html","90e9b329cce4e79f202999524ffe60cb"],["/categories/中间件/消息队列/RabbitMQ/index.html","846c9e250a1de76e29e51c93f9186b05"],["/categories/中间件/消息队列/index.html","2e9302e116949c28fe4b09498327bbcf"],["/categories/前端/Mock/index.html","db0deb880299319c6fc21a5941a4a8d1"],["/categories/前端/Promise/index.html","513fd32f214d4821ae316b347000e836"],["/categories/前端/Vue/index.html","f739c727bbe8c3365d1e079407697c1e"],["/categories/前端/index.html","a79714715385e0084a128bc293a5ebe7"],["/categories/前端/jQuery/index.html","2d5401f12273adfd3dad5444ea71c94b"],["/categories/前端/page/2/index.html","356ffe55adaab6a0477864ae3b7c51d7"],["/categories/前端/原生基础/index.html","3eb5c1608b393fc533f979629a4bc519"],["/categories/前端/异步通信/index.html","4cacf23c1829ebcb5c4e34f2108f9fe0"],["/categories/工具使用/Git/index.html","4b9c424d2fbd1aa8e5128462f6a7ef34"],["/categories/工具使用/index.html","ce65613c8ca262d477d219a99abf67f6"],["/categories/工具使用/markdown/index.html","6b7fbc53ecd545a6a7b74a938bee96e8"],["/categories/工具的使用/Docker/index.html","14f8848779d84f1dcb884b8a92fb7b02"],["/categories/工具的使用/Nginx/index.html","02161cfda5b90a3bd362d7dd4eda578d"],["/categories/工具的使用/Swagger/index.html","fceb4cba4876d5c65ed48685ef3908a2"],["/categories/工具的使用/index.html","f16acdf79abba27ebf86a5844148c406"],["/categories/工具的使用/博客搭建/index.html","6c10f416030e9a5b52796c14db04659b"],["/categories/数据库/MongoDB/index.html","393cd2b75d87bca2b9e1e5a818563edc"],["/categories/数据库/MySQL/index.html","9f7c08b90a26cbbdac9f09bafa641986"],["/categories/数据库/MySQL/page/2/index.html","8be743326601b92d40ae8a4a38070f43"],["/categories/数据库/MySQL/page/3/index.html","84b78095d75afbc7c5ef5037ee692cc7"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","b6a8078335726a48fc08098da5038743"],["/categories/数据库/ORM持久层框架/index.html","f83b284b27019789fcf13805e4968b84"],["/categories/数据库/index.html","fabffcf62139c1afd30562bfaff2b33a"],["/categories/数据库/page/2/index.html","e6981f5afcd75ed171b70d627e0a89d1"],["/categories/数据库/page/3/index.html","d48ec188e91952ed80776e63778b9c4c"],["/categories/系统设计/index.html","b963cc13f0af909fa2d5b84371512d5d"],["/categories/系统设计/page/2/index.html","caa4f219a6a6038895cea79d73a4e005"],["/categories/系统设计/分布式权限认证/index.html","d0d05f1dbf48286d466fa14df389f1f6"],["/categories/系统设计/设计模式/index.html","aad18cc529545fda2b72cdc3eaf0dc61"],["/categories/系统设计/设计模式/page/2/index.html","aba13c2e631e04c1d5eefd05e7138b82"],["/categories/计算机基础/index.html","373008e7f05615e179bf1b7a78a2aa95"],["/categories/计算机基础/page/2/index.html","7ed590ab911a1d1000e8f89152bf486e"],["/categories/计算机基础/page/3/index.html","58de4b6e7e19201f5e8a6a6d37c53567"],["/categories/计算机基础/page/4/index.html","cc5e7c005dc0c8e39ccb690bfabbe240"],["/categories/计算机基础/page/5/index.html","15bea5aca88226024c3caa2e11247ba9"],["/categories/计算机基础/page/6/index.html","64a29889aed3d79456187edcf99b991a"],["/categories/计算机基础/操作系统/index.html","8b1e6d708319e3a31cc2398007ead892"],["/categories/计算机基础/数据结构与算法/index.html","802c6da1c744e6f6f886a83e98c9bc19"],["/categories/计算机基础/数据结构与算法/page/2/index.html","ff4495dba48f87647799328c1fa56569"],["/categories/计算机基础/数据结构与算法/page/3/index.html","14dc1a2930d0ef978f57ebb8d987cb6e"],["/categories/计算机基础/数据结构与算法/page/4/index.html","fed7a2a543e3c43a1ad27b840386b778"],["/categories/计算机基础/数据结构与算法/page/5/index.html","764f606fca4e36b57df8e2f6af37dabd"],["/categories/计算机基础/计算机网络/index.html","e3c05e336fb4ffc64d5d583c4c6f9ed3"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","9f61c5daa1c02c82cf60cf810c82da27"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","7edd567d0e248b27e2f55f91ed9d26aa"],["/messageboard/index.html","0e423a3833c3f4b1a5496a2d53acb315"],["/page/10/index.html","634614fa41fefc59a77323dea15d1248"],["/page/11/index.html","564f0f3f99112fdc3352915a7d4a2ef4"],["/page/12/index.html","d14d39b9995410be7840a10373a91e4e"],["/page/13/index.html","1214ccdd0af1c32680466cb67dbd6ad5"],["/page/14/index.html","bd9d2682b7cc62e10864a64ce88c17f2"],["/page/15/index.html","c688e1d6d0f8a459717d547fb2f8769e"],["/page/16/index.html","db2ab4eeed89fa179e1da9fada634c09"],["/page/17/index.html","81e742012070e42174f36cea2b93fd2c"],["/page/18/index.html","7f2d35486c92b54d84f38c1e8224033e"],["/page/19/index.html","cf11ba555e869e564f08923bc11bcf15"],["/page/2/index.html","c72ba7d67f7774eb2bd0ad3a81cf8df2"],["/page/3/index.html","152908cf66c768ef9f09db530f1f044b"],["/page/4/index.html","f46b4cda3c9060910a65921750f8f2c3"],["/page/5/index.html","50a3eed737d41586545923d28356238a"],["/page/6/index.html","f6247f90c64fa4a0bb909bf7c625b560"],["/page/7/index.html","a51e6b28df51d8fa4322b2da47c33c69"],["/page/8/index.html","4610602c90832ea0ce0ed374b28460a6"],["/page/9/index.html","41361e9473310befabf77f1695c9c35c"],["/sw-register.js","e1f0243e3d1126ea81c9d01f65accd66"],["/tags/Ajax/index.html","507353a853470afeca706358931000f1"],["/tags/Axios/index.html","4c17636806f3a798a023fe6dd21fbd37"],["/tags/CICD/index.html","851859dcaef19cfdb7c279c540b1b266"],["/tags/Docker/index.html","b855fed9b1e2a142cab7f3ddfdb31d2f"],["/tags/ELK/index.html","37ad9d57ad112a34f7910f8ef61724cd"],["/tags/ElasticSearch/index.html","2636d7046180dfe709f315cfa6ad64f0"],["/tags/Git/index.html","949e69d4ba846c99ee3cf55452854c08"],["/tags/H5/index.html","c3e273241434395dbe129b3a93d385e1"],["/tags/JVM/index.html","907e31281b79dd37682c2ff2d7596ba7"],["/tags/JVM内存模型/index.html","20edbc980d0c474bd78dccdf86978b2c"],["/tags/JVM执行引擎/index.html","081c4084da0e056dfaa7e7f1cb20c652"],["/tags/JavaScript/index.html","ec5e7d00d07be9b3ac0c309b3be24f2c"],["/tags/Kibana/index.html","e5207ef368e8b645910cde086a70a240"],["/tags/LeetCode/index.html","9de68828d22164b58181d5cf543b17a0"],["/tags/LeetCode/page/2/index.html","eb453b97b2ad2b981b00640b0a6dcfa7"],["/tags/LeetCode/page/3/index.html","8c286558ff199154135f5bdece702f5c"],["/tags/Linux/index.html","04d756f94c389f1b710819c4bcaf5a69"],["/tags/Logstash/index.html","964599cb92a4b3933dd0c18889e7b5ff"],["/tags/Mock/index.html","b7d29817f8f043eb5f73adf332f7aef0"],["/tags/MongoDB/index.html","58e60a549c750daf3a5c51d78bd381c8"],["/tags/MySQL-事务/index.html","c8301da9d26c933151759e90aaa65ac5"],["/tags/MySQL-数据类型/index.html","0d700339a65e378c10ddeef4cc7e474f"],["/tags/MySQL-日志/index.html","016e10eb0e2ea31aa68f126b908418d9"],["/tags/MySQL-索引/index.html","454ac2658ccf2034bf53564766a801c5"],["/tags/MySQL-锁/index.html","d184ef2efbe4c65bf807ea9b890360e6"],["/tags/MySQL/index.html","ac4cbb57467ce9b38839ff9279c541ec"],["/tags/MySQL/page/2/index.html","8ef0f31466e59be29679e07475d219de"],["/tags/Mybatis/index.html","5b61a76e8fd187cc811011db46df07f2"],["/tags/MybatisPlus/index.html","2a2bfc8b3c9a59e1f70536f44b99e301"],["/tags/NIO/index.html","5b44dd843735ac24be2ce5f3bc80dea2"],["/tags/Netty/index.html","d2d53e13b7a3f93efe3c034f21f41094"],["/tags/Nginx/index.html","16a6c735f047c4fbd419cefb42703704"],["/tags/Promise/index.html","5701e12603df8237ba2051d6a1e059c9"],["/tags/RabbitMQ/index.html","0ede46ccb0cf3554d82909aa1f825189"],["/tags/Redis/index.html","a6e20080c2315650ea5cf78af13854d4"],["/tags/Redis/page/2/index.html","d72d56ff5849a4b75681d2db57ba1152"],["/tags/Redis/page/3/index.html","1620c48d19a9b2b6bdfec84d09d156b8"],["/tags/SSM/index.html","51057d95821f9f596159a87db4f44d69"],["/tags/Spring-Security/index.html","63ac1b66728ee5c168c0ed230c224766"],["/tags/Spring/index.html","335639849732e31390676d86f3d97718"],["/tags/SpringBoot/index.html","39fa8a5597ae538b8bd83446ff4030c6"],["/tags/SpringCloud/index.html","27357e6865cf2aa0dc94928ae2d10b63"],["/tags/SpringMVC/index.html","99a8947a0d3c7ddbcf77d7452b069881"],["/tags/Swagger/index.html","f49e356e15e2e1b230f0f517fcc2ab60"],["/tags/hexo/index.html","6efa81ab1061c57a00c7c7d1fb5af09f"],["/tags/index.html","52d6d1e0fb5381fa3226894f4ce76c34"],["/tags/jQuery/index.html","e8ade69a09378a707d10138cf676a25e"],["/tags/java/index.html","ad90b64dfbd1794b045fcb7eb20af61f"],["/tags/markdown/index.html","52658bf27ecbdc4a9f07948bf78d6bc3"],["/tags/noSQL/index.html","4f52b8aa2feb68951ae2ce12e91d560e"],["/tags/typora/index.html","c0451f37da49b7e54dac532a70ecb37a"],["/tags/vue/index.html","4e14c24635444b89ffb4930a9731efba"],["/tags/享元模式/index.html","6bdc6947f9acf112c3bef790ba87df16"],["/tags/代理模式/index.html","7187d8a3440a3e94c5e7c652fb9d6b43"],["/tags/内存管理/index.html","ebafa633bd45c451e9ec5dbd03b2ab76"],["/tags/分布式/index.html","5d1cd0a98c3ff50108128e88037c96fe"],["/tags/分布式系统/index.html","e73facaa3fcacc5cb0dd3633faeaeb87"],["/tags/前端/index.html","33f0bb6a2356e144307dacb773964b95"],["/tags/前端/page/2/index.html","4e7b69e46267a693602cc4b5128de7d7"],["/tags/博客/index.html","b7b52af3e07ff8db69ed5a807d2c3c04"],["/tags/后端/index.html","bf41ef4fa2b2c9c2591e52bc18b5734d"],["/tags/外观模式/index.html","cd07cc629b4c527cc87a404d23106b58"],["/tags/容器技术/index.html","4191d87e5fc89701793f40325a3374eb"],["/tags/工厂方法/index.html","25e3212346df83b2bb80dbb1ff456276"],["/tags/微服务/index.html","42558966af5ae6fadf9fefdfc30f7176"],["/tags/抽象工厂/index.html","5eeef42adcf37992cfc29ed73793fd85"],["/tags/持续集成持续部署/index.html","7ee8fbb3d1c37926e68ecc209870438f"],["/tags/搜索引擎/index.html","e3aee4b140b7139b2fa2381e269156c8"],["/tags/操作系统/index.html","54a7893b9333fc8a76185d5454a1ca0c"],["/tags/数据库/index.html","a6ae26e9cf1452cffd31df2c17119e49"],["/tags/数据库/page/2/index.html","590e7c65981b4223b9a1668ee22cd455"],["/tags/数据库/page/3/index.html","686dc7a85953f0d92f9e3b9b497c887c"],["/tags/数据结构与算法/index.html","90323437dbb5fc5397f0566dc84ba03a"],["/tags/数据结构与算法/page/2/index.html","c7f7b1c4a1607c55e055b478ec6ee924"],["/tags/文件操作/index.html","10b2fa08b1e247de8c78dd0b2e8954f6"],["/tags/日志/index.html","ec65e805ef369aa4e5a0ea4acb131ba5"],["/tags/服务器/index.html","81318c47be6701a809005a1799c34bd8"],["/tags/权限认证/index.html","31cd207eab3009d9322b31568eba25cc"],["/tags/桥接模式/index.html","f9815b10a5901cf711dcc8df1731cb97"],["/tags/模板方法模式/index.html","693e761a7deb4accb8d58a8b5cbdb08a"],["/tags/死锁/index.html","57593578f870c5a789217b6366bc5e59"],["/tags/消息队列/index.html","c8b62068a4e9bfbfa95cf5bdf668fbac"],["/tags/版本控制/index.html","adea22cd6650dc99a9cedb632f746b1e"],["/tags/策略模式/index.html","25d051af0bfac7480775bc97ede54236"],["/tags/简单工厂/index.html","ea5bac4f00f7b23ce68b0ab213b22071"],["/tags/算法/index.html","7aa2af8bebc5dc11157f1dfd9fda1b78"],["/tags/组件化/index.html","b297490c48364d71b5366a21f6f1a5ec"],["/tags/缓存/index.html","d9efda29f4763109cd9b810b5faf48db"],["/tags/缓存/page/2/index.html","3ea27147f380c7d841654add4fd45209"],["/tags/缓存/page/3/index.html","d571796908f923222e5254fadff77edb"],["/tags/观察者模式/index.html","c362ec46a50fe1d555c259bdcb5fda94"],["/tags/计算机网络/index.html","10639cbb4fb76514111f84864e190ba6"],["/tags/设计模式/index.html","1ce90f5c8fd05c5ddd5c10a488a48f64"],["/tags/设计模式/page/2/index.html","0cd82d9e5da570651c6c0c0d029361f6"],["/tags/进程管理/index.html","cc7f1c494e7ac83714fcc8f3c25ff964"],["/tags/适配器模式/index.html","e6491242de68fb62f0db609aa5f2c879"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
