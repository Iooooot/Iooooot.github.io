/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","53c13a0bea24430f82fb84d425baf166"],["/2021/02/22/工具的使用/博客的搭建/index.html","4b781602d94db7e4c30c091d40b5c9c0"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","e7d21d89fc8bf8e10c65bfc524bed51b"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","baceae0ad7864ddd5e6fcb47ded45106"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","02a0932f1f883f64f0330ff8fef01a59"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","9e07362fa9fb287d8ee1090a331cce36"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","92428ca0156f98f0b3b3ab65fa59e3f0"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","b48a6f08219b5051af66c94afbbd732e"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","6f946fe8df0700973060e35e0f708dc4"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","32645b5df94d0e3fc2cef12e9bb0bee3"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","097cc4a09da73a0c2444bed7d059002a"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","a94921bed602604b200cf2e0fa3a9204"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","eea6a58ce709392883007d4d9df0c300"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","c4be0040b449e855c8b7bf63bd754f48"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","2bfdb6637183b8994108091aae86b064"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","089c897efa2002533b578d09aa341e5b"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","fabacecc604f95547f474a178d88a876"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","f9f555e77aa90e2bf15538315166b1cb"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","feb7f844ccf8cbb43391ea6d8b097384"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","8c9f89eb8166360697087c7413f88c44"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","b808a2bbd83890e67bb2a68121184b84"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","955fba9ba3c6bd46857df0324b087d2f"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","d884de0c1271e5307518c52c76ee7eb3"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","16a52b0a37fe2e600d4a2c6033bb1393"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","d37101a29bf281b9918ee2f7d87d643d"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","d9bc68825ee921566e6730df2c72704e"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","a7966a55857c74a5f1e3e332252e2915"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","8b3ee1e50163ada6243062d42f3af334"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","62673b145e429fa71c2d320bdcd84c26"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","1b372c44df24cdc37726f9d027649302"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","6d9f4db63b4c94db738468ea2e728f14"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","f21fad0768ea111c69b846da7e8ea7b2"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","89c5b9f757cfd428aa8bf26a7482d0f3"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","ed8c3507fd873ccf502b3ea85f30cd15"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","912f5cf8d35346355ab506eeffe18d79"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","5f0aceb3dcc79fb0a5616ba8d56b888a"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","56b69fff05a1d8e4ca9c64fc7264929d"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","3999590d79f78b2ba3dcb6ceed10bbe6"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","b963133a5f4856396631216104a88e98"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","9f281e700c138674eb32b537db3f8e4f"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","b6729d90e24e8551f1c2708ebd686f3f"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","26038c6d657ca6b4c210fd90fd8e5c35"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","708093b3fe4d1cb296cee4de15d39df5"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","01293d3445d8f0d0e74f209ae04956c0"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","47bf1c552cd6a2637bc8463fe03b2ccc"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","2c3e1eebfabc0f3d941f91faaf99fef1"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","5249ff31515c49bd8fda37e649e4a9d9"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","bad6c261bdb48d87ab2bad942b4f6c7c"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","d2fc625e561ed840f20888d644178f4c"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","44e24f5cab5649aeb498a5ec68287303"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","fca414ccb81465796df616d582230d6b"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","d968f61f52f2f3ffb9ad8e6899263323"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","79b913be14f6d749e302508562050996"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","834849a3ece71a255a727c55f4244bf8"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","725917eb81a6a4e8f10ebe32f571dee0"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","4172dcf62069f6a8be356e5ec32b848e"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","9cab15567e813eb8ee0d753cd09a2f30"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","d564037cade57072d701f7266cb630ae"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","7d40e63563589aab065118cb3474bdbb"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","3417ac494e5fadd739fc879f6eb5e0eb"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","4523784857aeeb69d4d54a370a8a4935"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","dacbf829d13604506130c9942ef48b40"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","68a223b1ecae21a5fd1742519f24b049"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","38e30050fd7d252ac8f72546936bc454"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","46076b0d3425bda6dd0f9baab5a19c04"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","8d2d9c22cce292fee8c3a4efc2569580"],["/2022/08/17/前端/jQuery/index.html","1767c555d40d6bc04d811b1a40982ee5"],["/2022/08/19/前端/JavaScript/index.html","d6d3b58a597eb6be13c3234452ea1aa3"],["/2022/08/22/前端/Ajax/index.html","58585513e419d3fe7b72398b956ac2b2"],["/2022/08/23/前端/Promise/index.html","abb629ca76d0a3f4295f7c65dd2b40b4"],["/2022/08/24/前端/Axios/index.html","aed73301f48a3adc640a5ebbffab3301"],["/2022/08/25/前端/H5本地存储/index.html","8b7a81154adf2d583fd078513fed5b66"],["/2022/08/26/前端/mock/index.html","9334be28ab40e2aa6b025d451c6d1ccf"],["/2022/08/31/前端/vue/VueJs/index.html","3ac5ab2864ca38f76ff0ba0580816627"],["/2022/09/01/前端/vue/vue组件化/index.html","e1d41a611e82905d3555731207586f57"],["/2022/09/04/前端/vue/VueCLI/index.html","16e6ce4072c03dffdbd3f697e6c382eb"],["/2022/09/07/前端/vue/vue实现动画/index.html","82ebdc690eb5abda5ab88364b3deb331"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","374cb3e2b81672996418ed7726331737"],["/2022/09/10/前端/vue/Vue异步请求/index.html","d16224ae401fd887ad5f92822a3edc38"],["/2022/09/11/前端/vue/vue-Router/index.html","275bcf2a488ad50db09453ba4db0f575"],["/2022/09/13/前端/vue/Vuex/index.html","b21f20588ec108c91bb9c6c2973e76bb"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","5f2a2e64a8321b3d819fcc0c9004152c"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","3429be1d6bfa799a29cdcb5022ddfc81"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","b40702b0f47b27fcc20d74f1bdc19248"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","77739dd2662983c810678a444b6c4276"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","4d7d85273dc2dfc96478e9911a17776f"],["/2022/09/28/DevOps/Linux/Linux/index.html","d926c0c0402306d2e66c575a7e2cdde1"],["/2022/10/02/中间件/Redis/redis基础/index.html","6aa16e916a378d1aab5f6450d954f82e"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","207bd07dd79e4270b13675f37beb987e"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","ba3595a2c82f31370bbb1b52d68ab072"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","f65edf3695c140eeb8cfec671b0aab6f"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","0104e54122673a0835aa77593c09b751"],["/2022/10/17/中间件/Redis/Redis集群/index.html","3de3363da9a3f8ea6071956eacd8afa0"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","8ea1dbda4dae739d4050e136cb4a8c4a"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","a2655a8e2bb98d7abc5d9d22a1b301b3"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","39c7bbfd437100db67db6b378d61b018"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","62a843de2de5decdd8a69a5f15fbc2fa"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","250634a030eda4f7a16d7b904e1ab466"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","43ceea07ee6f1d5023e6587683e718c4"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","40f07d5767969cb517041bc05acb209b"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","e158a13607b49f2b2a9796327be16d01"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","fad746b7edae472bd6b9e1384313ba77"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","ab44a8600e95345c7aa80134b420f06d"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","952b49f4781c62983077134d12ffe19e"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","38cc385aa0d7b52a40075b0deb24002c"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","5d9c4b7d0e73b5e43eeacd7f8caecc48"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","acf54d708ec58c38564f92caaa792411"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","4b08a35ba6d2da8ed1eaa11ed9473407"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","90d6bd5e61e06b4a81db7268709a306b"],["/2023/03/10/DevOps/CICD/CICD/index.html","3359d7de6fbbdebab775e4502e6ce1b4"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","5f27e58968bad0e0f42c59e653862702"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","4b2e388a232e246572bc46a2b84bee64"],["/2023/03/13/Java/NIO/NIO/index.html","84ab3cd381cc527b2efa127dd9771146"],["/2023/03/14/中间件/Netty/Netty/index.html","17e9c4edd1035960201c8bd5234143bf"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","d82ce1d0625ffbe725913ec5faf80c36"],["/2023/03/17/系统设计/分布式系统认证/index.html","7729aa94347a4efaf2fba539d424f050"],["/2023/03/19/Java/JVM/JVM概述/index.html","3b17b67bcb1b299cb0fcb38ed88c4fe9"],["/2023/03/23/Java/JVM/类的加载过程/index.html","2875dbb966a2a4b47bbce79461254e39"],["/2023/03/28/Java/JVM/对象的实例化/index.html","a6f5861a0aecbb63d8c95be1c219deab"],["/2023/04/01/Java/JVM/运行时数据区/index.html","be65cafc62b1e3d029cf15e5fae13df7"],["/2023/04/04/Java/JVM/执行引擎/index.html","81fd9c47b7132fcb6172cdbaa1c24320"],["/2023/04/06/Java/JVM/对象引用/index.html","775415b9e9feef2f838c24dbf754ac83"],["/2023/04/09/Java/JVM/垃圾回收/index.html","21c90a336379cdfde8015d65a0a5dfb7"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","e10d263cce801f3945aeebecfd1bef42"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","867d95cd8851867f2030528dfbba56c5"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","7093b8fb2bbdce64ad901d304ea4308f"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","89c4b63cadbfb3a2845d8811c7cf2c9c"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","712cce88c9dc3fed229af111b8c652b6"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","38c6217cb6b28e614ccdb02d3d523045"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","acc8f2823b61af7be65ff6991ebdc3d8"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","b9c3755af9f7919746e1e9c145aa2d61"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","3a4d809cdc890012ca5d727c06937b5e"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","0ff78f0d51737fdeace49314f22a0bac"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","df5d0fd1ea1e7abb4d0124fb46001693"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","45270846f93a3f9efa4d7f2fe181d293"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","e8330d0530d0ff111b0caa11f6dfc7d9"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","78451bb51b6de9bb9ae7dd3df3351f8e"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","158105d7664ac6c0d924c57996004500"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","921e359cb161b28b1b4dd1eee7f7b61f"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","b190df8df7d4008faad6c8d99e59f19c"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","bafcc6ca0e3192644d9cff036cc55b2c"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","0d8241c7fc6728b0d7cc3d3004e46f54"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","edf0c3f13c546d5ddab3def35897aec9"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","b8efb1d98d802b42e64e6dfe623d9dc0"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","e60469ddd12e5144de73670ff0ab2c71"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","e78e34199007399d6712e9683166156d"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","2b9d1692a39dbc4fae7713a483be036e"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","c79ab08095e022cb4062ff929603c550"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","47df3b43336f2967316e041dc30afd90"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","2ffca9c0909fdc53f9e7afa42ec3d00f"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","27ba5cd87906eda2e763695cc275a5ee"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","910732cbce536a9d9a982fc152f30a32"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","05234cca2bf9f8bca5f035245725ced8"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","35aff1a8991f3e9b00c8d761b8c34572"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","fe5c6303788d799a9fa047f8bbd2a6c5"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","50ac7b8ddeccd6d734bd1348f741e6fb"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","d296dddafa5a5ad938f81a199d543a79"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","8e42b2a6902c33c5ba6870bf33e3e2bd"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","9691b48b1f6457b2075493411a7f9f47"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","9c2e608a7abfe02611b23c667ea2729a"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","21b02b49383249b357adf3ed8d88b760"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","e5d6c7310d752a1c3b55c70f64e9d780"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","f76fc419f53ad3775a05e71ed8f0a70a"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","b40c602b0202ddcdd9232915fa528328"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","d549bcfd56ee688848a0660e4e275f5e"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","b8a5d9306814f60cf0bb4ade22acce3d"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","d75b08ba30e51ee9223bf23cb8adcfc1"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","dea1b5f7570c3c6490829452e984a783"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","40b3dee98fe01be6d5c7de0bc58753d8"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","82c67376c1fbc6bafb7da1f80a86030f"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","7707e0fbf48e121c872713521ce8ce12"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","8638e335f339613620846a760f670072"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","cb7a794b957c09bf0f1577692af360bf"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","e874e40e3abc3cd3fc34f9b8aba07113"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","ac1aea4a8d2692dc00e464365366b3b7"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","1ecd695e26fd1fdd1bc5afd6b3b9bc64"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","a024e9049e0c71e7e349a4799a7f5d5b"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","0afce46ad5d79456f5a54c2bf86ce242"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","392846dfe898325358fb68557fbfd9cf"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","c75d47d177315cde92c519db3d087c07"],["/2023/09/04/中间件/Redis/Redis事务/index.html","93ce1e4ccd6ce1dabb6491cfb1b02f27"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","c172678b7ef25d6c85a7a1fcc28c2e00"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","32bde6d168a45fcd0a1c294be7d1ee21"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","e8bbc5b9de2e091996adca0bb6b08e6e"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","c1b70303d1cda558bf8300b4d2dddc96"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","74e7a170857e30631c687ca686d2a60f"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","f8e04f57c5f90a083a04bd56c2cd569a"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","86bd6d2aae010c9e3abb538c063b49b7"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","b0ff073569f2328a52eace120cd73c62"],["/2023/09/22/Java/NIO/零拷贝/index.html","51085e2715b9310ad1812395bdd20f8a"],["/2023/09/24/系统设计/JWT认证/index.html","5c61f5d5b1dd7d8e8ad23b642665d5e1"],["/2023/09/26/Java/NIO/Reactor模式/index.html","2db261a927a04261fe41569ffe434b7b"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","bdb616d18000468661853ff0851620dc"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","7d0cf874892b2eebd15d6187bfbdbe5c"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","82a779746b3f84f748c8a3f90c11643c"],["/2023/10/09/Java/并发编程/共享问题/index.html","34bbc1500dadfb2eba385de5ce9771aa"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","f55907f933a5145a268681deca1c045f"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","e6b039478d4224b6c9ff2fef5464ab87"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","ad7c99fc07a26d32e7cd6c46c8f35ab2"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","bfd9a3797a63577eeb7567ec76b8736a"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","c7aaff32f8ef7b234e1fd9fc5cb17619"],["/2023/10/23/MySQL数据异构同步方案/index.html","869df009b7eaa50cef5d9649b2189e38"],["/2023/10/29/动态通知方案/index.html","9074ea0c383398b02f39020e02e0511d"],["/404.html","02aaa6965dea44058117b1d84880b324"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","8bc0df801b087ad7a1c37191af23fb98"],["/archives/2021/02/index.html","e0f9e898be6cfd7cf659098097e81442"],["/archives/2021/03/index.html","8de09700cae87af1e78a16e9b76041db"],["/archives/2021/03/page/2/index.html","9eb1cac44578856a4d3566066f6589dd"],["/archives/2021/03/page/3/index.html","5a21712fade97556480fd3447ed3c820"],["/archives/2021/04/index.html","a459c9772b686d7d40253ae8555264e6"],["/archives/2021/04/page/2/index.html","73c10bb9330cf3c156d49b2d77d2146f"],["/archives/2021/05/index.html","09c6a03ee4789d83adac28d9f0cdc5ba"],["/archives/2021/index.html","d6f4b6805e9c6b783cff904874b8a956"],["/archives/2021/page/2/index.html","cd11a0c853fc029667e59b754ff4672f"],["/archives/2021/page/3/index.html","911c844c8ef48b69f947862cc503de5d"],["/archives/2021/page/4/index.html","5f5e3010275eed2d5133e15ae029dd76"],["/archives/2021/page/5/index.html","18016955594f0f3f9d33d522f490eb02"],["/archives/2021/page/6/index.html","4646174082b907f50a0ca4f31169941d"],["/archives/2021/page/7/index.html","28227423067119a4fa2fede57adc40a6"],["/archives/2022/01/index.html","7c62a8b5c58073c2348939ca1d050399"],["/archives/2022/04/index.html","ccc1e32d0d995028a1b43dea9a57b1f0"],["/archives/2022/08/index.html","247fa97cb3813d50327c20c264f22022"],["/archives/2022/09/index.html","cc2d3325691fd1ff43e95371235e3ce6"],["/archives/2022/09/page/2/index.html","35ec180c58807a11c41d6071e6b84def"],["/archives/2022/10/index.html","53c511887d3da6b580dc88cd96d65ff2"],["/archives/2022/11/index.html","b218f5ed187d496cd5469e98d599a77e"],["/archives/2022/12/index.html","c1dcf6f7aae4030721a4f9f2031c64d1"],["/archives/2022/index.html","77e06d73b35cc3e18df90a0786e75f76"],["/archives/2022/page/2/index.html","cd5926c1c390847b58bc274a6029399e"],["/archives/2022/page/3/index.html","33043678e3a081ff3bfb32af63d4946b"],["/archives/2022/page/4/index.html","3f30dddfecfd9f4d07ff4b5925c989c5"],["/archives/2022/page/5/index.html","253cfca0c90708e2bc371c45ec23b0b3"],["/archives/2023/01/index.html","8634848ce052f5586e7b70620c5ff636"],["/archives/2023/02/index.html","14359cf5396f16356fc60b2202954dd4"],["/archives/2023/03/index.html","2cebe868097c974fecc58dd6ce4cffa5"],["/archives/2023/04/index.html","aa5489731d7023c5f93249880110bf05"],["/archives/2023/04/page/2/index.html","9458e80812c2dd69ad945a0f6147c46f"],["/archives/2023/05/index.html","a3df12fa3411a7efc56b07844a9351d0"],["/archives/2023/06/index.html","3816805a978e5fd388945153602923fe"],["/archives/2023/06/page/2/index.html","7cd048f404b579f15ca34774acf660e1"],["/archives/2023/07/index.html","f601e77353ccebbf668f7168ffd6d0ba"],["/archives/2023/07/page/2/index.html","8f22cef9a829ddea1359b6d5e9e4159b"],["/archives/2023/08/index.html","dde47425d52b144df7e85daba51a80af"],["/archives/2023/08/page/2/index.html","0d6a8e745313ed21215abda795d4f02e"],["/archives/2023/09/index.html","b3e08ff0275c40c2ae505ec17a7adf07"],["/archives/2023/09/page/2/index.html","92b58a3f23249036620216de24694fb8"],["/archives/2023/10/index.html","77558a51039386fbf6883037adfc593c"],["/archives/2023/index.html","8bd18c294a895fc6ccc705801e2c1549"],["/archives/2023/page/10/index.html","1b57d87e007406dfe764fc4b2fbffda5"],["/archives/2023/page/2/index.html","2ccee650dc58d747baef6502b1dea6ee"],["/archives/2023/page/3/index.html","cad391b940682e75e0538d577f210309"],["/archives/2023/page/4/index.html","49d4428c83fbf677ae855d5a85df8074"],["/archives/2023/page/5/index.html","130b6e4af1c1d72c8e1a88d20c3a0fb0"],["/archives/2023/page/6/index.html","0217ae9a1593a65c5338560674d4494a"],["/archives/2023/page/7/index.html","d4bfa002d9f56990cdbfee1d58d945ae"],["/archives/2023/page/8/index.html","4a5b59960d422945316aa8ab2a07b600"],["/archives/2023/page/9/index.html","888be31bd102f259adeed1b9fab65fe3"],["/archives/index.html","3004ee16881082d89247ff9a1a24e22a"],["/archives/page/10/index.html","5e1a4c1948e48353c699d11181c02385"],["/archives/page/11/index.html","36e234ea585385fc434b8d3e0b6355ac"],["/archives/page/12/index.html","b72d751f8cac0695a76b80c209006c60"],["/archives/page/13/index.html","5e37c9331b96d7f9a8f98faceb0a0a6f"],["/archives/page/14/index.html","75d9b16dabf418a689c37424782cb52d"],["/archives/page/15/index.html","8025bbeb700767ab95361386e094219b"],["/archives/page/16/index.html","f414abde12a36165cf057f3a1c4a859f"],["/archives/page/17/index.html","8145c27acf1da202df1cf37f7ae117fd"],["/archives/page/18/index.html","71491169001d052b93d23986a9dc9e63"],["/archives/page/19/index.html","a4cdfc9e36e5164f74428e053fa3bf3a"],["/archives/page/2/index.html","ab30a192304eda0cc851a067ed0cd489"],["/archives/page/20/index.html","9a5db9ad2a8793d134d77b44d499f419"],["/archives/page/21/index.html","02fef87ce5c10b1ab8ed2e69d00f70b9"],["/archives/page/3/index.html","a6d7c3997210e07766aae96fd16f663e"],["/archives/page/4/index.html","7b697e6e42250cde58d4be7fb3d2a71b"],["/archives/page/5/index.html","5f9f6331669874b87a23ef8ec06d8b27"],["/archives/page/6/index.html","203c0cc1078ea9d19a58360e7f9fc34d"],["/archives/page/7/index.html","420149bb168200ca20d2ec1eccb55f61"],["/archives/page/8/index.html","d75d2713bd0a5bd0c8b2d5377c56d948"],["/archives/page/9/index.html","f36995440b0d613b1533754ceaa7e597"],["/categories/Devops/CICD/index.html","7f3b8e9eb6b7d24efd6eeff08a0eaaf0"],["/categories/Devops/Linux/index.html","3431acfc8534533f0c65ab5043e98603"],["/categories/Devops/index.html","325a3c1fd32c267f08af442626865f28"],["/categories/Java/JVM/index.html","4b06c29a699c126ed5d1ae05881c9d77"],["/categories/Java/Java基础/index.html","275ef90db5af70700693117476a644ea"],["/categories/Java/NIO/index.html","00d5902ecbaa50b7d7b5c9c357b9e9c2"],["/categories/Java/NIO/原生NIO/index.html","791a5ccb9d837381f7a444c057a8875e"],["/categories/Java/NIO/文件操作工具类/index.html","21f72bd446858066e17844597dd22af4"],["/categories/Java/index.html","47334d2643ca83c272db3dc033cc9f1a"],["/categories/Java/page/2/index.html","cd0592af9a3b41f49a025885619a5bd1"],["/categories/Java/并发编程/index.html","e346ec603deb9eb155af4f89044f3d8d"],["/categories/Spring全家桶/Spring-Security/index.html","cfc1e6ff8266a959173b63ab6e53aacf"],["/categories/Spring全家桶/Spring/index.html","a9fd692babde1269dbfa32d4e16e23c0"],["/categories/Spring全家桶/SpringBoot/index.html","77fd38b6f46507823f2500924f345b52"],["/categories/Spring全家桶/SpringCloud/index.html","b6c9f89d45f640b3507420538e65dc3c"],["/categories/Spring全家桶/SpringMVC/index.html","00e632ac15cc3da7bb01e87a8162a482"],["/categories/Spring全家桶/index.html","1d7c7c16f30fc5692603e7b99ee1865e"],["/categories/Spring全家桶/page/2/index.html","fc08b11c484206e3c45b229062a3a51a"],["/categories/index.html","c25042ded1302062cdb90e47a9a2f9c9"],["/categories/中间件/ElasticSearch/index.html","bd0c27e2adcad2c80a43dc5acff9f41a"],["/categories/中间件/Netty/index.html","aea92f524a3812be2cf781bfcf6ef4d6"],["/categories/中间件/Redis/index.html","9892f6b2311315a66bba1466b4449b02"],["/categories/中间件/Redis/page/2/index.html","0ca8340c4c35207b3a53caa2f805fd5d"],["/categories/中间件/Redis/page/3/index.html","e1d0a187e5571f3ddb1e66dbf7aefba3"],["/categories/中间件/index.html","081966891b0111ad204f2a50fc2bc710"],["/categories/中间件/page/2/index.html","36b3b37992eb833617c0ba192f1921e3"],["/categories/中间件/page/3/index.html","0365ece924734d3c458ff0c1e66100a4"],["/categories/中间件/page/4/index.html","8198c5bbfaca2c715d98f1afb5f3a490"],["/categories/中间件/消息队列/RabbitMQ/index.html","fe8cd2a8683ee863e2438bf63841b351"],["/categories/中间件/消息队列/index.html","c73bf9941bfd7cddfb6570d574eec174"],["/categories/前端/Mock/index.html","aa3895c55066b5ae6d54dcb899938738"],["/categories/前端/Promise/index.html","cf52dd1adf8bf174767bf8247526f508"],["/categories/前端/Vue/index.html","5326d1f124051fddbd830b4ab6bdb032"],["/categories/前端/index.html","0289e39af0ef4ad8363845e98cd99218"],["/categories/前端/jQuery/index.html","b5374073f102157716b6cb0d0a0ae9dc"],["/categories/前端/page/2/index.html","26d54d3c99eb2688e59ebb7c32174e52"],["/categories/前端/原生基础/index.html","d71f503d2bdfb12511ca4391dc4e1be4"],["/categories/前端/异步通信/index.html","691b2b0b10bfebbfa8b967f09b461154"],["/categories/工具使用/Git/index.html","c92e82d01afa64dd1b6a88518cca6506"],["/categories/工具使用/index.html","6855113bd0930a9c528bbcfc2ec31574"],["/categories/工具使用/markdown/index.html","cd7bb21b0e8189494e2d7338b07b0c4f"],["/categories/工具的使用/Docker/index.html","5413c60c893e7946b2d9eb3573a37dcc"],["/categories/工具的使用/Nginx/index.html","444f9c83c552a52713e643a78411a44f"],["/categories/工具的使用/Swagger/index.html","70f389612d49fba8a5ba1ed23632c130"],["/categories/工具的使用/index.html","82128b5af526a6527c114de666c8460a"],["/categories/工具的使用/博客搭建/index.html","b7e283729694f73beafe9e477eb41ac0"],["/categories/数据库/MongoDB/index.html","28b61c12536c67797f9ee1816f049197"],["/categories/数据库/MySQL/index.html","ac608e6d664165ef72f45b9816b14faf"],["/categories/数据库/MySQL/page/2/index.html","98e7a94a5208742ff1ca3699c5832fad"],["/categories/数据库/MySQL/page/3/index.html","4fbb76e3dace546ac8bd6060b377db7b"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","b7233d4b33e3cb0d25b93e535b2627a4"],["/categories/数据库/ORM持久层框架/index.html","2427a61f135f4e6255c7d15dc2a56425"],["/categories/数据库/index.html","a997b4427508388577d56f351ed3fb93"],["/categories/数据库/page/2/index.html","ae3d558838938de5416b34af8ac7c75a"],["/categories/数据库/page/3/index.html","7a3501e6c5a73911055b3916247e361f"],["/categories/系统设计/DDD领域模型/index.html","a064509400f8690e85a7889594ae5660"],["/categories/系统设计/index.html","955959f1bb135c4958f8c9d041844506"],["/categories/系统设计/page/2/index.html","af14ca10fb2b24aba98181bced4d27af"],["/categories/系统设计/page/3/index.html","ef24b2b783a105af917104f4035e8ca5"],["/categories/系统设计/分布式权限认证/index.html","2a3b53a2cb380cca33b8f3edf7cb05d6"],["/categories/系统设计/分布式系统/index.html","150ffda433060897bbbae61af9121656"],["/categories/系统设计/设计模式/index.html","653c4edfedfe063c4d715c8c23fcdafc"],["/categories/系统设计/设计模式/page/2/index.html","a7037c887e2f0b1e866ed9d2fe8ffb0c"],["/categories/计算机基础/index.html","fa9d5955b6f8fe3336915fe03d42a7f2"],["/categories/计算机基础/page/2/index.html","4ce157614b47158fb25bf2206e421ce2"],["/categories/计算机基础/page/3/index.html","723ef119667bc6a516b6b7eb2f20b2f0"],["/categories/计算机基础/page/4/index.html","62ed9f358fb3fc339be9839e43914ac1"],["/categories/计算机基础/page/5/index.html","3f722f54e7d2fc820b3d0a2dc25b1632"],["/categories/计算机基础/page/6/index.html","65c49f77828d5852c384045e06bb6cd2"],["/categories/计算机基础/操作系统/index.html","b4a9a9728fb8847ead54aaa81b6b6c55"],["/categories/计算机基础/数据结构与算法/index.html","e0ec314732550819308f112121f9bd63"],["/categories/计算机基础/数据结构与算法/page/2/index.html","1f92b4c55230c3edd37c00edfdba3b93"],["/categories/计算机基础/数据结构与算法/page/3/index.html","16f4d22067309dccf5d5d096928a5be9"],["/categories/计算机基础/数据结构与算法/page/4/index.html","348c019579fdf5e41f22977f21fe1139"],["/categories/计算机基础/数据结构与算法/page/5/index.html","caaeee3c6b089825100ec9b1338b3740"],["/categories/计算机基础/计算机网络/index.html","cceec832c170251eb44d786d653679de"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","1109675ac4cf15b19efcf2c51162bb66"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","b636c8b628f5178558253d85eff599d1"],["/messageboard/index.html","dcf85918d8c89c2f6bf6798b4f09fb6f"],["/page/10/index.html","56e9e3dc159f35f9eb391aa76ea0e15d"],["/page/11/index.html","f3776add0376ecad4070ece003b516aa"],["/page/12/index.html","3b3c0ec1cbb6b35dca63c43b8857f00f"],["/page/13/index.html","9a9bf608d0ad2cf97d8240109fe543a1"],["/page/14/index.html","14af53b7f955138d0fc41a5aca32a78e"],["/page/15/index.html","0d148787313f3eb1715719e86c1b69b0"],["/page/16/index.html","142f48eef4dbf6ebccab4f52844709c3"],["/page/17/index.html","7a067a4a4a339d1b5810e342855a98b4"],["/page/18/index.html","49cf8715679821605216093c706b9b52"],["/page/19/index.html","739b395a273a6856c59261d81ecdc07c"],["/page/2/index.html","a214190d65b916e2b9007eee75a6f22c"],["/page/20/index.html","3449497b401045cb6b7421915b3cc389"],["/page/21/index.html","6cafbfd5dda3afd6da6c0b507ba1de91"],["/page/3/index.html","6d5c4c768048b68cd3126cf2172f1f1f"],["/page/4/index.html","ba446552bdaa3c40c343f89c67af2427"],["/page/5/index.html","a49eda2057faf8a14a1f6d241d2e4177"],["/page/6/index.html","c2836166336f81b4afe2b8bf1b435142"],["/page/7/index.html","a41b22a4b2cdce00a0ad3c39b64e4bcf"],["/page/8/index.html","2980fb4d4cf2f69f1ef6de6c2e30ef69"],["/page/9/index.html","12a6110bded3c21618d48803187d5c53"],["/sw-register.js","6972b0b2d9ee4daddc7fa666d475345a"],["/tags/Ajax/index.html","9a5e7bbfaf6da1b392970c66194f7270"],["/tags/Axios/index.html","08178f72b6452b12cbed15355c4ddf94"],["/tags/BASE理论/index.html","46d488d215b73ed8a7446cea4f6031ff"],["/tags/CAP定理/index.html","24a68040c4f4cd6dfbae33a57ca08964"],["/tags/CICD/index.html","66132df273f89d7fa30caeb5892688b5"],["/tags/DDD领域模型/index.html","a2519be8ac280aab9581bbe92df04c04"],["/tags/Docker/index.html","3a3c24f0dfd151ea3b49fb07629a73d0"],["/tags/ELK/index.html","671d9d0f04308804a2388cdb5210e5e5"],["/tags/ElasticSearch/index.html","4057a77bca29691b32e979c4020746b0"],["/tags/Git/index.html","23a851ce79bcaef28a9afab43a31d83a"],["/tags/H5/index.html","85092eb163b1f1f51b1731cfc7a8aa4b"],["/tags/JVM/index.html","0fc68798acccbf4374af62072f6ab71a"],["/tags/JVM内存模型/index.html","0fa290ff3254bf76dfe6dbd8815e6bd5"],["/tags/JVM执行引擎/index.html","3e261a9fa6b555927c4eead91dd2dd2b"],["/tags/JavaScript/index.html","b55fbc59b3201f4413ec81a31851f5f3"],["/tags/Java内存模型/index.html","9636c2b513e41d52361adaa878fbd9cb"],["/tags/Java进程线程/index.html","368eb31bb5a259f053829ad52d717818"],["/tags/Kibana/index.html","cd288fe2b97032acfce05c48a48e8d6d"],["/tags/LeetCode/index.html","5b3ef62a0ed17202e88c0464b2a08dd6"],["/tags/LeetCode/page/2/index.html","439dbe680df77dd76b6e63d14363fe1d"],["/tags/LeetCode/page/3/index.html","db7471afac0df0864096d69c054acce8"],["/tags/Linux/index.html","f4af11a74f5af557b64ef67e8b8a5ce1"],["/tags/Logstash/index.html","38036a889062a8f9d43260b8be54112a"],["/tags/Mock/index.html","d629165c0d80fbf2f89372b95267d1ad"],["/tags/MongoDB/index.html","5b735741f9b6280ff658c9b6eb9cefb1"],["/tags/MySQL-事务/index.html","dcb17c11dc67a9959130b08a432ad3c5"],["/tags/MySQL-数据类型/index.html","2560f6d55c4e32867f697dfe180a7528"],["/tags/MySQL-日志/index.html","d9284851fa99a02b00c2db5cd2cc788b"],["/tags/MySQL-索引/index.html","0b8f21c2eb85a4ecfdd528a9aad71cf3"],["/tags/MySQL-锁/index.html","ef8e8b72f65ecbd7c5e1f952dc8eec2c"],["/tags/MySQL/index.html","7359755079db4b1de686079c41c546a9"],["/tags/MySQL/page/2/index.html","04495eec174e5a6f4a6dadb729d4e423"],["/tags/Mybatis/index.html","bde2afa551b9ea962baca05e36d42c5d"],["/tags/MybatisPlus/index.html","ff2da3b83eeb5abd157d7d5f9f49d6dd"],["/tags/NIO/index.html","ac56a396bfade23db2f0daef82e87015"],["/tags/Netty/index.html","956373c87120753b4fda40bb0a59c2a6"],["/tags/Nginx/index.html","18f7f97528d7915d10a9728df44931da"],["/tags/Promise/index.html","4fbd48e388bd5f4bfcb3781def2cfb0a"],["/tags/RabbitMQ/index.html","eec88bcb960dfa058a73b375a8f5703f"],["/tags/Redis/index.html","76742595ed20238f6a8463c5778e87f2"],["/tags/Redis/page/2/index.html","605341b2e9d87b281cd2cc66115dee72"],["/tags/Redis/page/3/index.html","85ceb0630ddfd151d8fbce208a1d45fc"],["/tags/SSM/index.html","f38d093bb87df520625a9ea84ffd2475"],["/tags/Spring-Security/index.html","49bb9351250777607e4d4262bf56b988"],["/tags/Spring/index.html","365d3b3a56d14779089b5c96feb56663"],["/tags/SpringBoot/index.html","eed105ff5fdccc06c6e8c75d10b71966"],["/tags/SpringCloud/index.html","c88119bbb8315bf113dbe8baf55dd518"],["/tags/SpringMVC/index.html","7df1dc3947e133ce2c9003f6fbfde325"],["/tags/Swagger/index.html","a7033e1e58fea0c5c983d3c2e1e7c46e"],["/tags/hexo/index.html","43adc8a64daebb283dc9ed8f25cc3bca"],["/tags/index.html","dc3abf1b9fc1a4668e91fdd27e0dde3b"],["/tags/jQuery/index.html","7998c44ad63e82bd5677ceb9319f418d"],["/tags/java/index.html","6147b2628db56bb1e18552ce443fbfe2"],["/tags/markdown/index.html","e5a9c7ac2eeb33688ae08c876042b313"],["/tags/noSQL/index.html","1c3c9b2dfd35c08a6e10338b347039d0"],["/tags/typora/index.html","f82d70b5447e2387f534c3a7b1986427"],["/tags/vue/index.html","86853894e5b292693932b99839b98c54"],["/tags/享元模式/index.html","7e256741871cfcd3424dae895c35f5a3"],["/tags/代理模式/index.html","9faa9d191c4ed70df7cdd6aab19a2cbe"],["/tags/内存管理/index.html","a804f85dc3613010dff91d91f59dc6ef"],["/tags/分布式/index.html","5b4b7de2ffcf7ebfd174d405692bbdae"],["/tags/分布式系统/index.html","4a49f5d905eb55c946f75abaf2d5e123"],["/tags/前端/index.html","2e6b0086fe5cd5dcd211fee44c880ff9"],["/tags/前端/page/2/index.html","e1822f54c2d47c577c15c32b13e46658"],["/tags/动态通知/index.html","97079ce474b85758d9654563311a9ee6"],["/tags/博客/index.html","708af7f888aae592f1291df653c1647c"],["/tags/后端/index.html","486e7c60311d760358f3f6288029f65e"],["/tags/外观模式/index.html","992b9604a163438307bbe41d8878aa35"],["/tags/多线程设计模式/index.html","3a842e38d72edc7736a1d9df47b4de02"],["/tags/容器技术/index.html","46fdabc3dd135eedaa08400cddf9a101"],["/tags/工厂方法/index.html","e186810a3b928a675d6eccbfdf36647d"],["/tags/异构同步/index.html","8bbd627b0d43455736d633bbdadc3582"],["/tags/微服务/index.html","7fd4051e2db20476929630c9faf1d93b"],["/tags/抽象工厂/index.html","e7d0f8f5355913ea74f265e77f5755ca"],["/tags/持续集成持续部署/index.html","fa0bcd5f96cf663f53c14f6eee3626d9"],["/tags/搜索引擎/index.html","8f2303176144a4671d412395d3d10303"],["/tags/操作系统/index.html","74cff1a6303c564272a4f56366dbd2e4"],["/tags/数据库/index.html","1fd4d561943a42c7fbb8b2753ef06003"],["/tags/数据库/page/2/index.html","8760e9e95263285a51d5c9eb9856002b"],["/tags/数据库/page/3/index.html","4108fc7216d108ff57319c94ebb381d0"],["/tags/数据结构与算法/index.html","15c18cbbfa3012082a226a589b94ee98"],["/tags/数据结构与算法/page/2/index.html","b1463ba3ef6d515129fb0f66a7c1606f"],["/tags/文件操作/index.html","ae0051453e792f0394936a6cca7a2fd1"],["/tags/日志/index.html","b3a182a65506c5f0322c238e1a6fc1e0"],["/tags/服务器/index.html","8012e16446295c921fb31ded93698b13"],["/tags/权限认证/index.html","14520a1590cd654e17a2a6cd77709861"],["/tags/桥接模式/index.html","c3abbc4b30b238b5c16052e50fd274d3"],["/tags/模板方法模式/index.html","439b1728c799ea7ad866f87db038f81c"],["/tags/死锁/index.html","52af6cf4ba83bfd847b3b4ecea1cf70d"],["/tags/消息队列/index.html","ab4101fde2ee80f984f20018a091f78e"],["/tags/版本控制/index.html","6f3504a333b3dca56cdc72451516a8c5"],["/tags/策略模式/index.html","d9a375c70e6afbe26e0573554224ff02"],["/tags/简单工厂/index.html","b2fab508be567a17de1d05fac308f69d"],["/tags/算法/index.html","dbe841b6eea0f1e0c505e88eb5673576"],["/tags/线程活跃性问题/index.html","2de0a0a5f844823c0697e9e0ba3a8ee5"],["/tags/组件化/index.html","fa4684c5fd2d0c9c6f2c4983e4ed381a"],["/tags/缓存/index.html","81523eb12b5d81b1c78c8681cc2dee1c"],["/tags/缓存/page/2/index.html","fc8d9705cece97126311b7c65fef59f8"],["/tags/缓存/page/3/index.html","cc6167dea3bb3c02971b43f41203289e"],["/tags/观察者模式/index.html","cfb964318b1541df7d663a16c32c4840"],["/tags/计算机网络/index.html","d44996ed325f07a0dd384764f2466732"],["/tags/设计模式/index.html","5861ad1b03c7827d0fda5268bb76209e"],["/tags/设计模式/page/2/index.html","4f6d08edea4cbd375f1966a926d1eb4c"],["/tags/资源共享问题/index.html","19a12a765e6f13c06108f373c102321b"],["/tags/进程管理/index.html","d523b9f195336fdc444d3867e036c372"],["/tags/适配器模式/index.html","26db8e7819c71ee86b8226894a335806"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
