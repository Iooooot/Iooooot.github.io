/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","205e4721072d42c13d5076100b4c0aa5"],["/2021/02/22/工具的使用/博客的搭建/index.html","84afd67c2952ab375c3e3dde20292e36"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","10b98e05b1cb141f5e152a3301fcf38b"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","c825df181f67a26a16e5c3f3d87cd5cd"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","9f6d68d2b6ee97e40a2642eb9e2bff47"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","6c1801224a1a52f145d4c03932dbae4d"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","ea30c38aa073a5ee5882b54b41698896"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","f2f1cd7c922acd15e7f25a5e11d6af5b"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","5fafdebd2c1f5951dde8a4b1cdd55e9d"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","f6738b5485b4917391ddfcfbf1790d39"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","c88f72f173e0a8fc6b57a5cb5897cbd6"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","dc2dae4a2c6c32ab0e91fd525cf83374"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","1116061388130323e73a18e54efa1615"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","f3724bdd7b99a1bd85614028d95d4d29"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","a082bb3d83321393204107b507f7b826"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","a586456778317ce04dada9a7a94d4e5a"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","4c2bf972493080ce1d65da49c3ec9bf9"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","6fa0ac499520d59215176d49d5e40ea6"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","081b22fce7dea81278c2a7c6ccb44300"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","18e4bdd6a7d635ec53816f647b9363c3"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","36f719c16290cb70dab5f78d55ad74b0"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","27428837270dea619b1b730c66e50483"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","3fe7f167f6cca430b629b600158299a0"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","1260710351be5d5ef4361caf686ba027"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","4a0e927399b6906a7910c003c6e482ad"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","f375531fdfaa3646601aa3e17cd505b8"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","4cabe384ca155614d8c0b3fd33c0e83e"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","7c549b071fce575f04ea744f50de9e4a"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","80bc474b561724f3f61c552d92f499f8"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","7356a6d33636a2af633b7236476ccc13"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","3344e2d97b9edc949ac7047d1d07fe82"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","0767209be7cdee515bf131b757ef8483"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","f618d50b09a8c88e73afa8e809be1bec"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","dde8299ed72da15f020994cc25deb3e0"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","f5967bacbb23074a09e0fcbd0ab5664b"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","70f7560614d701c86aac7c0877c4be02"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","ab76e2310746a9666b4076b9fdf2093f"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","50015c0dc251d83a7521ae259737829d"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","b8cb2e0885fc570cc3401c667e0b9f16"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","780ed6f296b1a2ee3433e40162e46d37"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","b653e544ec8c5b0a01700195838e0fb0"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","d3aa82c6aaed6bb5016f404447a8fdf1"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","5e1ae3d9e16bc2695c9b7855ba8f2046"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","7088d64ba77a6465d5f6aaf20b923261"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","96cf89f8e4f4a5ae4a8e3dacf878a1db"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","bc64ba5093e76f187a85517c502adb56"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","451733e2e4b921e5cca7ee37c5eb3d06"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","dd00a9b0c9893ccf942ae72fadebc8a5"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","f8e591718b81a3d55b225674e89a88a1"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","f1f2ae46ba8721469dbaacad4578450e"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","944deb9bfdcb591e90965f2815c34ee8"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","9aa8aa28baa041391efb9bff1e7d4ae0"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","9932c4216b6eadae8f6f9a5e4b7afe23"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","fa2cbe7c9a3d050e0dce798b287c8dfa"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","bf6e993db611b5737891b8a8fac4543b"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","14a478e11dcaa796ea56ff7896ea86e3"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","2ef758415ac40c269dfa5cbf58d26f0d"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","a5573651bfd4b553c44c94b3b39420e7"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","09be797b8a66cd9d5360f5dd35ffa301"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","a970f2baaf330af8df177580c7eaf4dc"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","702d6de023e76fa2681a815f613d3305"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","e6fcc261ac2ed50ce72fcd16c6fa0272"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","7cfdd6e6a0ddbfb86416763d5c0ed03f"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","0e90cf2b1cf6a5ebf29a82e810d40b71"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","df5d9f562deecc2aa506cfc9130bbd60"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","2909060e8edfa26e52deaeb7357aea02"],["/2022/08/17/前端/jQuery/index.html","a659263ac58870b5c60cafceb24e81db"],["/2022/08/19/前端/JavaScript/index.html","4dc9300cb73a63356a2a30635b160a52"],["/2022/08/22/前端/Ajax/index.html","4b86b31beb64d4839b85108a92918ee3"],["/2022/08/23/前端/Promise/index.html","3eac8c376f5616dc93decd48395ce7d2"],["/2022/08/24/前端/Axios/index.html","beb0b27acde0c6e5925c236a40c89d87"],["/2022/08/25/前端/H5本地存储/index.html","6637a5f5e73d4d1f0b18bc09ad4d16a7"],["/2022/08/26/前端/mock/index.html","9dba8b5ae5ea6057b323fba6e1f5b3ca"],["/2022/08/31/前端/vue/VueJs/index.html","11fe3d020cc65ccaac2e67783f4b02ac"],["/2022/09/01/前端/vue/vue组件化/index.html","1edebe7f0588f3ecb6cc51c9f0c7f66b"],["/2022/09/04/前端/vue/VueCLI/index.html","94beb5ddcea11bfef0418baf0114d37e"],["/2022/09/07/前端/vue/vue实现动画/index.html","4850a4d75fd7975314b3e7daa8723a52"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","3f9b5193bed1d762449b8fd99e2a3a54"],["/2022/09/10/前端/vue/Vue异步请求/index.html","fd5cb1f3a5b35ce7b1c531e9b3559711"],["/2022/09/11/前端/vue/vue-Router/index.html","31bd179de8d5d31f2160b81e8b989832"],["/2022/09/13/前端/vue/Vuex/index.html","29a2402279e9502c6276be488dca2b71"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","f9b724320bbb7e880fe7849255dcbb89"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","55bbc819c38e185abe98a1347498147f"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","bdf5ae74a4850e0981ad7f1f072c8b2e"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","b25eb74a62a7c0b5b5c018e53e0106e8"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","48c7961c6420dffacc588b5362efe6f6"],["/2022/09/28/DevOps/Linux/Linux/index.html","2416929780e5c8f87027fa9662a0b3eb"],["/2022/10/02/中间件/Redis/redis基础/index.html","0524d5c0ce77fee938e9db1ea061e8d9"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","8dfe413b5442b68b998cd22605335ade"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","72b71525402bc54a8596806796e0f29d"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","6a19096a641321b1ee64de76e0943148"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","a23f6a607180fa9397d61990c500718b"],["/2022/10/17/中间件/Redis/Redis集群/index.html","9edf6fe3f6e9a4a51679e6ae52a8c6c5"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","5909592cdcec480b43e49d3fc4f55db5"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","5b23104f5d2a7ede54d886b84c8224aa"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","819a80dc8be35f6c301f59cb0ef2501d"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","e74980db4b7bdda7fd52f5118d3af3a4"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","cac740d1aa1f6ccb0a3585c7f208acc2"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","e5afaf8f905cc22e5fc294be9616d221"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","d4971d1a11fd0ff745cc2f57a718db1b"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","b59f940c2b1e21c9ebd3e0b20e7542d0"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","8a36820fe2bebe9bb17fa9ebb08a65bf"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","9c20a82d71b60738ee723d02c3d91dab"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","d391b8a8e3872cbb25e99c87dc6dde00"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","2d4bd57ac0c9d31e03d651d27580cca2"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","31cf537274b130d05f26b4e87762d135"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","10b23b567e2d70197e490fd84a112ff7"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","01d16e21e26023cc0a10d58fa0e6cf2b"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","1a16dda69fc47313ace110c5c48bf046"],["/2023/03/10/DevOps/CICD/CICD/index.html","cb4cc5415bdc13b606aca29e892c2107"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","7961329162af4a9cfda4aa999fbc519a"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","48a6e3e4df94479f422a5ba44c404cc3"],["/2023/03/13/Java/NIO/NIO/index.html","3325fc4c0b512832ee1a85eee442e448"],["/2023/03/14/Java/NIO/Netty/index.html","c84df789a4b1348721f7de210bc16bd0"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","cb4bfa892e88542d16728195411fb61d"],["/2023/03/17/系统设计/分布式系统认证/index.html","ed8edd297946dc7eeeb76124f109c75f"],["/2023/03/19/Java/JVM/JVM概述/index.html","64b444ffb24a23cbb01c169fadf894f0"],["/2023/03/23/Java/JVM/类的加载过程/index.html","a1701eb3aadc168d3b721d5dec15c909"],["/2023/03/28/Java/JVM/对象的实例化/index.html","93e60836476e5402683aa99e5e3db973"],["/2023/04/01/Java/JVM/运行时数据区/index.html","8b40670edf3b21f6ef2eb017a657d108"],["/2023/04/04/Java/JVM/执行引擎/index.html","b7d439de3a15c4d369ae5b6d7644e142"],["/2023/04/06/Java/JVM/对象引用/index.html","8f1f4ccbf617fd8b9d7076e9496d88f7"],["/2023/04/09/Java/JVM/垃圾回收/index.html","aaa20a8aea992f7e0b6d5e47b73111b0"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","32955978569294e9c4d5e76736580f4d"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","70c19a34c7de5a57749b21e6134c535a"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","d0b52596d904c1720972b7576974c05f"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","d45d2708961de33d0b8db18451eaa266"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","e73f306936f9ffcfa16ceeaf82b8c8fa"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","00499ef83ee5e4f4cf96e8aa5d4b7572"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","a45f334e2a11c3c9284135f7cef0ffe1"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","250c8cfbb00017caf1b9904c6ec9c633"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","86bdb2ce33848026e381b37bb6f9c3ca"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","3a48fb0368c25f5ba43c08591eee95a1"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","6ba27b6ddff9f96577c8095c83b270cb"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","a7fbfcf7aab88b5eca7ff61c90271079"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","ba29aa4200a4edff59bef3fe11441417"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","610feba0aee2cba78f67f30d07958de5"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","18f0be55f93c9b4feac5b6fab44df259"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","1186aa1acbe7da4c50097170b04f19e9"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","cc69369cf9c33db3536736421bd115aa"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","e1ff5ef956f16c0ec871a6a95538bcce"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","19dbfe1a6c0397330c4c4ca85ebb0b14"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","949fe9ea9245a5560329d1e8caa8c3d7"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","6cb77657c5ec16a18d51f0140b0525dd"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","4bf63f0b1e136781a02459a3764e2e9e"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","be71aab555addafdf8df9d74813dfca5"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","0bc4eb9a8744e4e564cf0ac010770965"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","e506e1a05b7eb2aa92c9e469d23f67f3"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","b72a2e074cb82e7a208ffa39769aa9dc"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","6606356522614876709aa83c93ed4d7d"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","9d8a523e31f42a6c244c0ba76f621e60"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","2b3608365232407bcb2633733bf1c578"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","5d698c320af8116100cd413a7430671a"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","5de676f46919f07ac1d7730213be60d3"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","16f108c14692092e6f03ac5fcc9bcbe8"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","b02bdee476b56496e88744e6ab51ef29"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","3c411e5745e717ec17c2771b5fdd351a"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","4f18f7fab96b6fed7feab885cad2da50"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","7d5615050147c8009a5c7d09c6a3757f"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","ef5e18c10a56078cc0aa31353508449e"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","7b3eee7c12fdaaa97bb89cf26bfe4754"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","6008f0d01821ec5705523099e5f24131"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","f8b688bfa1b53d4055fb9bde525d00da"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","8a1a714b2d7410ad4729fdeb446b7017"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","83788a2193481e3266bd7213f0044a1d"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","079a58d2d1232583d89b6c2fb358cdac"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","90b978e4c269af0d53d1bdcba73be56c"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","32a3613eca769f65c69fa8ba5aedf74f"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","467ea9e47311f1a2af51d5c5d63436db"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","ba7f9dd12b06f56d3f4e43444c770c1c"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","e8a1dd43777a7d222da647f84c19a3e1"],["/2023/08/13/Redis实现消息队列/index.html","7c63964b49bec3d6874d4fa377f97aaf"],["/404.html","ffcccaca877fd18f7d56b145189c7776"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","f695ad04f0be6cc971f056046f2fa9ce"],["/archives/2021/02/index.html","10488905f20c6624cced4732abc453be"],["/archives/2021/03/index.html","7de2e3e86264e8ed315530b4e1af47e6"],["/archives/2021/03/page/2/index.html","7534765e154aa6474d72e310c41a2a35"],["/archives/2021/03/page/3/index.html","1ae03d83d9dee49cd4c8f5275dae4c9a"],["/archives/2021/04/index.html","ac6726204f5ead51cf1068c1840d6c8b"],["/archives/2021/04/page/2/index.html","64ca0909680051e9dd60e55494311ed4"],["/archives/2021/05/index.html","9ba4c6f81226e1fc2a3b577096006c1c"],["/archives/2021/index.html","2d0ae52999fdcb4dc7ce4111314b24b4"],["/archives/2021/page/2/index.html","8ceeb8710f821076cefd2b159ce1631a"],["/archives/2021/page/3/index.html","8928e8c6efb18b64fe9cdffb232aa296"],["/archives/2021/page/4/index.html","73049f010b721c6315a1096e896850a9"],["/archives/2021/page/5/index.html","165b127b0680f2997a3cd42e8633c50a"],["/archives/2021/page/6/index.html","77db4f30eb37dd0a7c2df924350df0da"],["/archives/2021/page/7/index.html","ee7bbd8464b2360d2a6707ec38507f5f"],["/archives/2022/01/index.html","5fd5aa05c7cc57ebe1ebe44705021afd"],["/archives/2022/04/index.html","781887771aef8238af0f1e547340476e"],["/archives/2022/08/index.html","0dfa623bd15ff14e574a1e6078fc53e9"],["/archives/2022/09/index.html","d00e8393b3c7f2caaeb6cdbc85b890de"],["/archives/2022/09/page/2/index.html","01247f9ff1d834c91f1734bbda7d7f54"],["/archives/2022/10/index.html","7ab59f276d681a8e78bbd3451af03b4d"],["/archives/2022/11/index.html","71d48db39e9d04cc239f86c0e06e29ce"],["/archives/2022/12/index.html","29b9ad18f7803a9c8475501ecd599dfc"],["/archives/2022/index.html","48190231fa0d0c1d5fa376d49a4034ed"],["/archives/2022/page/2/index.html","3e9501c6722f9fc43eab28d1982857e6"],["/archives/2022/page/3/index.html","39caf6cf3758f67e349053f01968d18b"],["/archives/2022/page/4/index.html","9bac348e48f6bab66138f864716925c4"],["/archives/2022/page/5/index.html","2c160e29894e6cfa17eae263284a91b7"],["/archives/2023/01/index.html","da972f72706bf316f93810d111e1d685"],["/archives/2023/02/index.html","65c8a4a459476cda8abd99d8011a7eb2"],["/archives/2023/03/index.html","630b19d1195f10196f14073ecf3aa893"],["/archives/2023/04/index.html","baf15a22fa9d3826fabb6bb6752f2ff4"],["/archives/2023/04/page/2/index.html","34ffe6e2a5eb703b1d497d6bcb0491f3"],["/archives/2023/05/index.html","24691ba29c5533a4ea64fddef375be5c"],["/archives/2023/06/index.html","adc4838fdcd3dd81b4a16cf686e7fac2"],["/archives/2023/06/page/2/index.html","077b5d39989638f3a17d0d7f20441d39"],["/archives/2023/07/index.html","6421099fd3deb41ad6ad561af68cc986"],["/archives/2023/07/page/2/index.html","df4931eef232c17708aae474925eae64"],["/archives/2023/08/index.html","528c3c2076a5c89303a32092dd5abb25"],["/archives/2023/index.html","29a85724684ad283ba9042eb6bf58644"],["/archives/2023/page/2/index.html","9d91d3fc15e385f017cbc7716443ad24"],["/archives/2023/page/3/index.html","d3ce0ce0dabd9159d309592b9fa9f437"],["/archives/2023/page/4/index.html","482214e00791ea8d917eb12e9e807999"],["/archives/2023/page/5/index.html","82c8f6d1be5c6612315c00bd31a89909"],["/archives/2023/page/6/index.html","bdd3dc127f937a1fa0025b57ec272c50"],["/archives/2023/page/7/index.html","67e06105e66f122396af8f2555f1cb74"],["/archives/index.html","5d848a0fb03b05fa7070f17349854221"],["/archives/page/10/index.html","bd66c43829ee72b4d74323ad1ca7cb28"],["/archives/page/11/index.html","5ec2f091509d0b3df2a903ae3646bdc4"],["/archives/page/12/index.html","2b5fbc76a23f0af2d654578e1929ffa5"],["/archives/page/13/index.html","dec6d8bed7712c01be6f18523ef72c5c"],["/archives/page/14/index.html","c0e36ab0126ac5b3225d663e04ad98d4"],["/archives/page/15/index.html","d354ab3caf181406ae79adcb912c70d5"],["/archives/page/16/index.html","c71dc0f1077cbf519262a1c1631f623a"],["/archives/page/17/index.html","6dfad69e16c4d83481a6b179061cd05c"],["/archives/page/18/index.html","12b31d390bc0fe2ef381c49cd6a9fe63"],["/archives/page/2/index.html","6942647fff7de011758d2c04df9bac83"],["/archives/page/3/index.html","9b7ff139cffb95a4767fdd4f4e7605ef"],["/archives/page/4/index.html","20899364f9ef5c222e0e3da43fce9f80"],["/archives/page/5/index.html","f727105b9d3edee1558a3fea489e81b0"],["/archives/page/6/index.html","ef4aa31c01023076b5be64c09dfd785d"],["/archives/page/7/index.html","695bb2f68e166fbd159ed4d0a814c6c7"],["/archives/page/8/index.html","92c2985c0b78822e2e36dadfd606d267"],["/archives/page/9/index.html","6d02c5ac82419012b867cab68d39bc04"],["/categories/Devops/CICD/index.html","810ccf72d07406de52948f740dbd08ac"],["/categories/Devops/Linux/index.html","c43e23c8aca6a16f1e1e44bb63ff175b"],["/categories/Devops/index.html","1189f2b4cb4edd86f734ac1230320115"],["/categories/Java/JVM/index.html","96b7fbeb2f26e17f59bf4523892361ac"],["/categories/Java/NIO/Netty/index.html","eb202bed857e799d1ff24c7b61a7ff79"],["/categories/Java/NIO/index.html","773f93ddc043a367ea2f6d4e800ae2cf"],["/categories/Java/NIO/原生NIO/index.html","c2ac1a06f1754f13f89e7c21b7416253"],["/categories/Java/NIO/文件操作工具类/index.html","d00afbcd64db2feee3cf107a161fa54d"],["/categories/Java/index.html","f3afdd073a152529c4a4c23527dc122e"],["/categories/Java/page/2/index.html","890281ebe7143bdb7891f8e57c89679c"],["/categories/Java/学习路线/index.html","65a3f34f52296fe50c168b8d7800bcd4"],["/categories/Spring全家桶/Spring-Security/index.html","2bb2bc565ab9b76967411559240dc883"],["/categories/Spring全家桶/Spring/index.html","a38e6dc97d1b85938cd2aebc46f2d60f"],["/categories/Spring全家桶/SpringBoot/index.html","cab51d2255878438d4e3d98aa80e2d70"],["/categories/Spring全家桶/SpringCloud/index.html","08cc46505f63088ed12f6b93a6623c2f"],["/categories/Spring全家桶/SpringMVC/index.html","2acc80c711a8d62f097334b858268452"],["/categories/Spring全家桶/index.html","d228a15bf5dab0675b9b1451dd452291"],["/categories/Spring全家桶/page/2/index.html","bff55c9babd4b309b7ef09df84d05f0c"],["/categories/index.html","3d3a206e97165706f8dea74cf9dbcb66"],["/categories/中间件/ElasticSearch/index.html","26725a3731fa724d4eb835d6583f56de"],["/categories/中间件/Redis/index.html","6eb3fda705ac84009d015b71dd136eb3"],["/categories/中间件/Redis/page/2/index.html","dd410f4a86fbbe9e100d13a83f1a73fb"],["/categories/中间件/index.html","5eaf02b697363b316c7838c0fada05d2"],["/categories/中间件/page/2/index.html","caf8f3af5f852dc489106779c0c427ad"],["/categories/中间件/消息队列/RabbitMQ/index.html","f833222cff6c23ce251c2ec64124a490"],["/categories/中间件/消息队列/index.html","2a9e67b406475f11110d60af6b03d718"],["/categories/前端/Mock/index.html","9c41511b242207edb63570d42cec87fc"],["/categories/前端/Promise/index.html","08cdebc1ed7a8afde2664cd420b61730"],["/categories/前端/Vue/index.html","ee8c62fded6b2785045593d026f13d4a"],["/categories/前端/index.html","edbb7c906def3eb802b15d4d2372453c"],["/categories/前端/jQuery/index.html","7a2b52ebc91d3d807af32a76a3808587"],["/categories/前端/page/2/index.html","0942f8eacc6b7b06618604768b494281"],["/categories/前端/原生基础/index.html","1f9aa510fcc5b7f979baf10361d083bc"],["/categories/前端/异步通信/index.html","d11c935bc6226a9b8751ada63a8e443f"],["/categories/工具使用/Git/index.html","b25114f52c302e397db77d9ef04f3f73"],["/categories/工具使用/index.html","21132907b173bdb0d71c4f2f9a1f928a"],["/categories/工具使用/markdown/index.html","13f2a9e8227bb82989db4b08b519edf6"],["/categories/工具的使用/Docker/index.html","347e1b35830d4787f4b92d503be00a72"],["/categories/工具的使用/Nginx/index.html","b12902c0b00e5bfd1a07c8470d00a2ff"],["/categories/工具的使用/Swagger/index.html","61f4046163483cbc663ab0f5b1381b2e"],["/categories/工具的使用/index.html","f130ad4639ac72a9c33c9308f4a0beb7"],["/categories/工具的使用/博客搭建/index.html","c80488c2972fa3c190754a18f8f1cf3b"],["/categories/数据库/MongoDB/index.html","993ffd2e67ff658f026f43e1e52a434c"],["/categories/数据库/MySQL/index.html","1f09af5e5ca27a955f8a86c2491ef7a4"],["/categories/数据库/MySQL/page/2/index.html","19c4904687b01f31358785c8dbfc8ffb"],["/categories/数据库/MySQL/page/3/index.html","9c1d04059f5cb916e69623e8f3bb9a0a"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","46f591db8e9030da04ce23195216c1bb"],["/categories/数据库/ORM持久层框架/index.html","a940065bb9d6de80a4e291318fab92f4"],["/categories/数据库/index.html","e1feaf15a398c41f73b8b89e81ac39e0"],["/categories/数据库/page/2/index.html","3f75841ccaca424e909a274843147743"],["/categories/数据库/page/3/index.html","f1b95679194587ae2593e199c47f9005"],["/categories/系统设计/index.html","960044dea5796b65d77f8bb75ea903a3"],["/categories/系统设计/page/2/index.html","f51c38dcddbfbd5add4915e7e409b37b"],["/categories/系统设计/分布式权限认证/index.html","1b3b8a8c2700eb97909e14707bed455d"],["/categories/系统设计/设计模式/index.html","b63873f30beec8e9d1f3ccaf0362f980"],["/categories/系统设计/设计模式/page/2/index.html","33a7bc90d47c160d3be6a0224b1e5710"],["/categories/计算机基础/index.html","e87c6e282ce6a51a91e2a440d6e7e6d0"],["/categories/计算机基础/page/2/index.html","d1c6eb67ad4e705647647e11d8c903cb"],["/categories/计算机基础/page/3/index.html","5388369872639bb73a8f4985840f5a5e"],["/categories/计算机基础/page/4/index.html","bc107ed86ae76ab393f3960c863bec9c"],["/categories/计算机基础/page/5/index.html","2f54356747f31e9e62d55432761f6ce4"],["/categories/计算机基础/page/6/index.html","ed1d1639e0d0c521cfbd4a9f52041ff3"],["/categories/计算机基础/操作系统/index.html","65ba1fe19b65b7b61148b5df79674873"],["/categories/计算机基础/数据结构与算法/index.html","03946b6bc6cb4abb48185a8591175c1d"],["/categories/计算机基础/数据结构与算法/page/2/index.html","6364ef40ca9f76ecc9343746381b817d"],["/categories/计算机基础/数据结构与算法/page/3/index.html","ccebd24ce9330b745193ccf8ec2c7a86"],["/categories/计算机基础/数据结构与算法/page/4/index.html","fd264ff0c336c640e44bab7da82ca14a"],["/categories/计算机基础/数据结构与算法/page/5/index.html","bb0a829c4edc33b4ef366000d82babff"],["/categories/计算机基础/计算机网络/index.html","c688a37907916ea98473cd07c722150e"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","4e423dfee4a44c32a62143fed7232052"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","60e678b25af28456ec08f0842aec2838"],["/messageboard/index.html","e04556ee9d97ed2f9a918a92c05d0685"],["/page/10/index.html","42e20e11fb01b1c30c019bf7456cb771"],["/page/11/index.html","7bc440744531007f919232af24a8587f"],["/page/12/index.html","412b7f77df2de682dffd5d4f1b69352e"],["/page/13/index.html","67b2a8ea90eb04f769f267cf427ce01c"],["/page/14/index.html","b28effe858e6329d9dae56594f60ebce"],["/page/15/index.html","9d0846bc946bbe062b784bb3bfca40c3"],["/page/16/index.html","f95d4588abad80ef7e431dd820eaa745"],["/page/17/index.html","23296fa09e45b53acaa403687e028ec3"],["/page/18/index.html","4078282649d9f9032fb2423492a77edb"],["/page/2/index.html","48b75d7c874bb8523aaf4378619c0247"],["/page/3/index.html","35665eb3668e4e3061c23025f36d36cf"],["/page/4/index.html","46130d214598da0d98689278c79360a8"],["/page/5/index.html","0c6b83e531f1ec81d303c3db1b219f44"],["/page/6/index.html","2e89858e9a3c2a1fcc2ff7e24c3fc21c"],["/page/7/index.html","0d43c88d7e9a277db9f34add6e704ee0"],["/page/8/index.html","eecdda684c0e0da084d61955335c24f5"],["/page/9/index.html","21161a063b87d58b6d217ad276084a68"],["/sw-register.js","c89ae28d623256475867b50ab2cca4ba"],["/tags/Ajax/index.html","cf24c6830a8faea7023f52edd6d43b24"],["/tags/Axios/index.html","281c070ca4eb25aa61764677f5072f73"],["/tags/CICD/index.html","236ea92c9d1f9b9bf0c0912908681087"],["/tags/Docker/index.html","0eca0a6a524148ce4a6e9f8785dc470d"],["/tags/ELK/index.html","2b5a0341ddbee51f874b2aca3a4d4b56"],["/tags/ElasticSearch/index.html","527f4c0dbb65a21375bfac31297bc409"],["/tags/Git/index.html","cdb2376d2afef254add47560baa2308c"],["/tags/H5/index.html","abebd137ea62db421402679ef3bb7122"],["/tags/JVM/index.html","c22b580171325b1357dcc3ae16ee0bb6"],["/tags/JVM内存模型/index.html","63ce30e3e7173932402bfc8d0b27f0dd"],["/tags/JVM执行引擎/index.html","23d1147afefe12d7dab660a9b5c716f2"],["/tags/JavaScript/index.html","0d4c588ca2aa9ed938a0d6e3006da7e9"],["/tags/Kibana/index.html","562f6f659d5bc995e37bc586f7aab95d"],["/tags/LeetCode/index.html","cbabab35e58d637a1e77f36305c17dd2"],["/tags/LeetCode/page/2/index.html","d5b43bde91229e1d7c62c83f845b6f12"],["/tags/LeetCode/page/3/index.html","2fecd3147d8eadd4ce03419fe3c7cff8"],["/tags/Linux/index.html","43a8a79b32d14d10662f85d5051c3bf9"],["/tags/Logstash/index.html","854ad025fde973f350a697c3bbd76e21"],["/tags/Mock/index.html","cd4a5f6fa460e83079c7b0e63fc954e6"],["/tags/MongoDB/index.html","adc7b6b0eb322173883e9281854cda2b"],["/tags/MySQL-事务/index.html","94a8421576ce26b9e6f1213f4ff0d0a9"],["/tags/MySQL-数据类型/index.html","0c565193a3ede80fd686be422b2e01f0"],["/tags/MySQL-日志/index.html","e7d1d340970decbd0448b6b298d8ffd9"],["/tags/MySQL-索引/index.html","d67217dcfcd6fd928517ae0b99c6c487"],["/tags/MySQL-锁/index.html","88fa4635b5c5957b7bf41698a6b37058"],["/tags/MySQL/index.html","da2324b60cdd82f9923bd97a20dbaea9"],["/tags/MySQL/page/2/index.html","b8d141f5c15265770f0ffc1ef61141a6"],["/tags/Mybatis/index.html","90cf998be4ac4e8522729a20089920dc"],["/tags/MybatisPlus/index.html","8ecf4377ebf6f89f38dff5a9aad8142b"],["/tags/NIO/index.html","0cc69230e154cfda032dca9db3e42766"],["/tags/Netty/index.html","eadd76aadbb5060bbd8f083d8bdc0390"],["/tags/Nginx/index.html","baed732af8d5b0073196c0e92eb959c2"],["/tags/Promise/index.html","e738d75d76ecef2739272b4e183f1091"],["/tags/RabbitMQ/index.html","8940d35051edf861c33d7f2d89f2c62a"],["/tags/Redis/index.html","ff2bb6b981b7ba3b8c62f70a8620db76"],["/tags/Redis/page/2/index.html","75965c8d8a0cb5f17f2e162e2c3a8fce"],["/tags/SSM/index.html","bb7bc6ada1fb824a97b607008cbe8598"],["/tags/Spring-Security/index.html","a96e99fc1af0720d1e51ca5f02098b54"],["/tags/Spring/index.html","784582984cb17676a76dfbcdfef0c4c2"],["/tags/SpringBoot/index.html","e2ec8699cd8816c83b8f7c510d25d01a"],["/tags/SpringCloud/index.html","169578ef0acfcc9dba335a34113e956c"],["/tags/SpringMVC/index.html","e3956ac9b79c853340adfe6af130fb70"],["/tags/Swagger/index.html","1a5687f62e55e7aba7b17e11c4daddce"],["/tags/hexo/index.html","c7e13eb9314cc1c9599e6b1934825aed"],["/tags/index.html","ffcd0cdca0d65698ce7aa5f75a29faa1"],["/tags/jQuery/index.html","78b43fe17485a09d1d60f7c28613008a"],["/tags/java/index.html","4e9d003f99a660c74080182c17531c4e"],["/tags/markdown/index.html","3ca68de3aea25f031b923f03718b4104"],["/tags/noSQL/index.html","47bc35c3bd8ade0fe24758013122f74f"],["/tags/typora/index.html","c19e9d87ffc667bf41fe330f9bdc9d83"],["/tags/vue/index.html","b0a541a870185f62396c6923bfa94bb8"],["/tags/享元模式/index.html","caab506bdfce007c8f1580be5711cb37"],["/tags/代理模式/index.html","c359dea623e7aabbdd7cd52dac64d920"],["/tags/内存管理/index.html","0cf8ea3d6a43f07b9fb322d0150fb71a"],["/tags/分布式/index.html","7897acb288bb5ed91482ca6bfe3857ea"],["/tags/分布式系统/index.html","fe44a35a34774d69aec5b74fe8e1d056"],["/tags/前端/index.html","fc7ecbb5122f773e23bd050e8bf15dff"],["/tags/前端/page/2/index.html","745e63eaa3bceb8d888b142c0b8a71a9"],["/tags/博客/index.html","e3e8a0f81229bcc645acb92ac10f9073"],["/tags/后端/index.html","fe6138f300336c841b49f19aa70ba4fb"],["/tags/外观模式/index.html","9276caaf3dcf2d6fffc4c7e1f8203e5b"],["/tags/容器技术/index.html","802994ee571ff7b812134e2688b45f1d"],["/tags/工厂方法/index.html","c041f810d92e29b10f176cdd054f6e86"],["/tags/微服务/index.html","8d913ac7029549123727bf5dccfa593c"],["/tags/抽象工厂/index.html","2c5a7a9748a65ca8b563ae0a7c07690d"],["/tags/持续集成持续部署/index.html","008f96808cace4f66556adc5892004c8"],["/tags/搜索引擎/index.html","afeb8ed31b83b3c9b4fc04ff928476db"],["/tags/操作系统/index.html","3fd819b616deda66ebd00d14707046fa"],["/tags/数据库/index.html","d87bfbff7772413df1f3e40b5e2d14a1"],["/tags/数据库/page/2/index.html","e2d08d654abd136cdf5a079ce1f01686"],["/tags/数据库/page/3/index.html","0bcde9d214cd032cacfff41985ac7688"],["/tags/数据结构与算法/index.html","bb28abf64ac98923fac71e5b4fb320fb"],["/tags/数据结构与算法/page/2/index.html","d64d41df1dabff6d472be19e853f8a51"],["/tags/文件操作/index.html","d45ddf46915b3543285b98bf59915c77"],["/tags/日志/index.html","fda92c8a176b13a36eb412d29d530b11"],["/tags/服务器/index.html","a6d88f6260aae9d4cbd85eea4f848c09"],["/tags/权限认证/index.html","72b4165dc6e448d90d95dbc6d13d5c39"],["/tags/桥接模式/index.html","efe83b8e33a4b8bd32d52536f9eca94a"],["/tags/模板方法模式/index.html","85ef90640617335e105f49bbeaa739b2"],["/tags/死锁/index.html","a91144a9af30f8596a4c38d28752c54f"],["/tags/消息队列/index.html","7010b29e7bec7e21c75f64f9f4443c5f"],["/tags/版本控制/index.html","d5f42fcdd5e90403b15adf01f59c3cb2"],["/tags/策略模式/index.html","07a0550611267320aab5bc154efe165a"],["/tags/简单工厂/index.html","72f89634a0c94d95673f911e1d5952fd"],["/tags/算法/index.html","bb21f4b4d09b26e3b8d41f8e05287c62"],["/tags/组件化/index.html","89a4a32ab8167d0e124f21f46e6a7e43"],["/tags/缓存/index.html","b355b7d402bd856ab3d785bfa8bc0f01"],["/tags/缓存/page/2/index.html","e775df533880fa7b75d8415a6fc4f900"],["/tags/观察者模式/index.html","0cb97edeb730d06735dc36dad9326111"],["/tags/计算机网络/index.html","2ff0ee1dab11ad12e92d6e908b3adc29"],["/tags/设计模式/index.html","d3fea84ab88eac50ef7b762933d986b7"],["/tags/设计模式/page/2/index.html","b143b0fd8a134db42426dcb9ac86eeb3"],["/tags/进程管理/index.html","dce62857031e77593fe4e44058d6b99c"],["/tags/适配器模式/index.html","1bcbdcdc2dc2dc73fcd8bb68e154603b"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
