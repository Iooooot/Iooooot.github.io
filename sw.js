/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","35b7500458d87c8763e627f3e518853e"],["/2021/02/22/工具的使用/博客的搭建/index.html","ebe46aba0cd1e846ef3c28f410e1a4d3"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","b1681f9c9204fb239806ab81ff7bd323"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","b7ce02ba640b0f08789595ecb59f4b27"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","15437504eaf6e32f3d6bb4aaec748f50"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","8426a10b674899e7d851d7572c0e6f99"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","c6bcc3b82954b967f7eb152a37e47a8e"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","3c47f8877b02be8cb774becaf7a900ba"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","388a5c588856f29867b98f65ae857c8e"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","f6dbe02c4ab61e86bf8396f22d8314fa"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","3a452bc8828a5585c493aefa610f6cf3"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","876e745f23003bdaf0c86b88ebd0029c"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","c34a6fb196816c73bd88923d0759e929"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","0f1eb37e7d10f2c8f96ac908d32ee2b2"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","880eadc436ee6e7a2433a9fd2e58eea1"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","3321f6de90d84c3d0320c34071472fb4"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","a728ea78939c6363f0d8b547606205a9"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","91a0ba2cc49a8f1615625ef4037d710e"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","b80ba3f3606ea00b0733192f12914572"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","0de8e936516d68663d029757f58f114c"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","4a12cc414fb63d74597216caebc3b802"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","950a41d842b7dd296878b5e286ba4f8f"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","6a315ff36e431dda4326f64fab8ee9bc"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","f3343210acdbff6b808f2ba64b17e4ff"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","e51fa57cb52ae16a5a9921cb382df594"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","4d3ca444e1482976aa386c640c29a89d"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","ef619a897ebcb7a0a08c049bd59b63ae"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","07b0e5cb51289bfa2716f0940138cf02"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","102d736dd9b87cd50dfab8f684703892"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","fa5381cf6bec0dd2726192e09a13e413"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","37f450aaba414e735fdc7a0e8241095b"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","a0af9d7ffbabdca98c7024db0c02ffb4"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","06e9a3df0b0d5e8644fead77bcae05cd"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","c8f101b84e011b0c7889b5b7ca08b86d"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","b69eb987fe3b7b49d17292aa7e5aa0f8"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","8415558bbf496d59b89dd72b58c8d4a1"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","3a1e6c326ea74dcb8f2b8ab31740aa80"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","90ae60123586c0134d19f80e9988f742"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","8b79ca6f43f65b7f67e3ac1b71177064"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","d1ef5ada8b1cd6b7e43c3dc07eb547d3"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","35fa8c290d60ae0c68ba5989b9bd00e0"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","456acfc7c4f03f4f01ba5a3bc39e5423"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","7f6bebd27b8bbc07c0dff83d13e8de22"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","ce01187d881a764ab8d7c3021ae3b8d5"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","d82ef58dbd525e549867d23e95f3edf8"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","b521a242d21aead6aa28f4cbee3f2f5b"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","056ca2d977bd6738ad68fc01b49686d9"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","ca0c7e7c6ba7f220a4dc894075af983f"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","4d0eb3d0e203875fd9fb27e2633e029d"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","f737fc7929ce8bf7e51fb89ec1308625"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","1b5e9ea2b7bd1ef4d6fd6add29d063bf"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","0b0b63e04720a8306101aa5ee2596ccc"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","da663e49c4ca62cd4dbe643e025a4402"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","81cc85a0d13a90c07056b3ca62408892"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","c8dac54295d7ece533c7ff9ccef86d57"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","cb78121c8e3940d160759c5e74f8f05b"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","179c6b6bfa95699f5fe95c46a85bc1b7"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","e9ea576563ca11c8dd3e2704f46948e0"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","069fc1edd171bd66defb9b9af2e7e836"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","6bc7492cf134c2f3a80439aaf2be2be0"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","1c517e393e685cd2a8fd2a16fb60734d"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","62dde5c80bb1e4357b5772255c4a78e0"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","511b818e3bb965e5389dbc657bd780d1"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","f56ee33d0d070d3f2bd8d64903079d61"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","f76e7172adba2285b94334bb22277b23"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","bd4cdcf1e60218834f2a16c71c4f203b"],["/2022/08/17/前端/jQuery/index.html","aeb889941fda081cbcbda1434a8c122c"],["/2022/08/19/前端/JavaScript/index.html","940adbc13fd14d0cea0e12cafb0fd833"],["/2022/08/22/前端/Ajax/index.html","2ad98984dea0b3f56446638742762c40"],["/2022/08/23/前端/Promise/index.html","c01599c8e369ee498c777854fc1f2787"],["/2022/08/24/前端/Axios/index.html","b779d85ec1b905b8636674ec1bc11658"],["/2022/08/25/前端/H5本地存储/index.html","7b11a7655d7c26638424d2b6b71df3b2"],["/2022/08/26/前端/mock/index.html","1a2086085f8e4405cf9d204f925d682a"],["/2022/08/31/前端/vue/VueJs/index.html","80720060584437dd3fee47fdb4c4f657"],["/2022/09/01/前端/vue/vue组件化/index.html","60044469f6bd319e89044f7140d1c56e"],["/2022/09/04/前端/vue/VueCLI/index.html","fcb62edd58bce7779eb4629c177c5495"],["/2022/09/07/前端/vue/vue实现动画/index.html","323a0b89d3a2e0574c82fbfc716b1c32"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","a0af1452e1c416a3f62896a5d349d312"],["/2022/09/10/前端/vue/Vue异步请求/index.html","27789511f23725ffa8aa0495fe302114"],["/2022/09/11/前端/vue/vue-Router/index.html","1cd021058d7df46a8c5b851ac9cd448e"],["/2022/09/13/前端/vue/Vuex/index.html","7840d5d17acebc3d40eb81a08bcb31e7"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","dd1e7c82c7a4a27bb4a2d8a358d36844"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","fc2d4f02906ac810cd787f0e851617f8"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","9e747b13185070773d5a4b8687a5b472"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","a4c535bfc2a5d3160d22b3f670f8573d"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","e38a4170efb67146910cbf8c2a621e78"],["/2022/09/28/DevOps/Linux/Linux/index.html","7ad15afd401d19ee8c8ad62fc0b5aa66"],["/2022/10/02/中间件/Redis/redis基础/index.html","74c7d7ceb924d0decc624f6b3626bbf8"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","baf7462190bd5242ba3651d3553ec878"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","0d49a62f94cfe53ef659021a81af60ed"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","08cf961e205965bd1c5a3470ae9d70bd"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","9698c9984a4c077984aae0ed2ea3a68e"],["/2022/10/17/中间件/Redis/Redis集群/index.html","83386153fb055a70b8c6a02f722f8c5c"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","1f4d09bde0bb3ff86b8ff2ac130a5588"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","0ef4d1790aabf51ca721a4beb4f98445"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","c7cf4285e3186e375d5ba69534050558"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","c718ca53ac232d2ef71cfd1c2ef6af10"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","a4c41c310431077bf7745eae6b321980"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","f7cde3c129f5c981ff5c9bec90200ccb"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","8f6147903c78b6f1702035b00dbb992c"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","5407c0cbb34de4d34981e1c011dec076"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","a3e705af025765ced09b9d7e6af81d24"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","24923bbe0bc4db9baf339bc89b02dd10"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","5249c56f2a37a6dfe43a26a97c49819b"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","67fa634a11a04718b37f45f96ac6fb39"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","464f5302be8b66aafa615c3e49643a19"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","a866762e57082b8aced94d600d6d921f"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","a1c3494b6f053ef2fe87ca3209b31904"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","d256ce40d4b89c7b07d1d8ac77195efb"],["/2023/03/10/DevOps/CICD/CICD/index.html","1d3accf0dee4a4dbc4611c45219c453a"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","bf1bf26643b725a37a2db579511cf621"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","1ba7f64d19f9d456e9683332baf5adb9"],["/2023/03/13/Java/NIO/NIO/index.html","e8f01bf51c72ca019c76ee23f30a2a72"],["/2023/03/14/Java/NIO/Netty/index.html","26222e45a3eca526cd825ac49f0496d4"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","5e069d471a9e2857f3d6e05204342a9c"],["/2023/03/17/系统设计/分布式系统认证/index.html","b94122c608ee6a3a29481c40e6992616"],["/2023/03/19/Java/JVM/JVM概述/index.html","5b9282cd7ee9fd6ad1ceea91cf43cdd2"],["/2023/03/23/Java/JVM/类的加载过程/index.html","696842fc5682e9984c2dabaa2f53f313"],["/2023/03/28/Java/JVM/对象的实例化/index.html","56058b9fa8b92c1a40ae620c92a12d3a"],["/2023/04/01/Java/JVM/运行时数据区/index.html","d856057b2af00d027a6178426ad9028d"],["/2023/04/04/Java/JVM/执行引擎/index.html","48b8e58bf144e87a5808f91d05f11e75"],["/2023/04/06/Java/JVM/对象引用/index.html","18c27eef5e40b3a5296554395710b0fd"],["/2023/04/09/Java/JVM/垃圾回收/index.html","2e2e0b134a4d9e7a0a271b344ad75290"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","ecd3df8977f26da2db83aa4a88eecfb3"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","b78544ce1ddc7f4ae0d78fee20e38dcb"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","93b539e76ee54aa2d65447ed50aceb6c"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","78eee773e67d45f84d41fd6bab9c43ac"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","ad217cb9fd5f2d64ef0ac24d8eaf3ea9"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","fd74f47860acb0dbb14401547b2369f0"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","2a2fe9f1238f440bcb9e1135f21c8ceb"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","c59842ea28ceff0ab7628f7f3540bea9"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","b489d6c1ea74b10ee13c6295b3780ec0"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","f746ff75bfa3a90c3a58acb2e1fc95e8"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","0c7d5c562c4f19cf5bf7ee8d621518cf"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","222cd72a1e92b0ea7b96d86efcdb853f"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","d471c55071582d5ecb741eb835f7e8c3"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","fb4f8a38013c18a8f997d3ee5de70e6f"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","e1e054a2aafa93103897f39fa2a2b49a"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","ccff6f88522ae5aa12eb2042ffadc170"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","1dbab618c85a45b92783dca3f9e39ca0"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","c413d22317a78b9daf6436b1888c9bad"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","9ac0ae03132c81cdfcbcd58e19187279"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","baa0aacd601214800595d247ffd56e05"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","ee1cb196e7a6980e9337505f24798132"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","ca627ab2d86d386f1ed6d9c3aed2cb78"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","ba70ba5317dfdc7882e5343a92a12133"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","21122f43f73b7269c67b59076b5ad017"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","dedac3dcb3c30cec14aa6e633f39e809"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","6193eeabc7fa6eae3a77ea8239874269"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","f36cbe903957034c99d459f559f7c88e"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","7f3fd95c90b156a6949eecaa78727c58"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","513fc4931a8d608c7d9543dbc1218dfd"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","9f9213a6ae47f62822aa4a231b37db18"],["/2023/07/05/MySQL中Orderby是怎么工作的/index.html","6de3b51ef0d439dfdf3af43776e662e5"],["/404.html","70817115c7c71ec6c1944f3dd80e1e53"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","9a2055e0f3d36e544e92677b3c5bb5f3"],["/archives/2021/02/index.html","107222d5a8c3eeaa772eaf1e9d342b4e"],["/archives/2021/03/index.html","abae4bf94f2298d88822b93a5d3414da"],["/archives/2021/03/page/2/index.html","7bc414812c12c1f1b72e3605844f1ed6"],["/archives/2021/03/page/3/index.html","5c9f6e1b1c9fe4851f17e39749e7e72a"],["/archives/2021/04/index.html","397c3a024d59eb30b233cd6e2f6beaf1"],["/archives/2021/04/page/2/index.html","635669274f2c10cd6d20b37beaefb395"],["/archives/2021/05/index.html","ae7d0fb8f050ae0e01a6191ab44ef984"],["/archives/2021/index.html","4f96ca7d3a4168a3206ff5a497640048"],["/archives/2021/page/2/index.html","f81be2c4af0f91178bc7d606a3a71aa7"],["/archives/2021/page/3/index.html","25beed65901af3450ac19894b5162cd4"],["/archives/2021/page/4/index.html","9d6c38e83955ccda1cb116877624ce52"],["/archives/2021/page/5/index.html","79cdbae3aa1bad299688eb5b7b6087e6"],["/archives/2021/page/6/index.html","fd07cabcfee21ec1a5174e17676aeee5"],["/archives/2021/page/7/index.html","6cac503addf19ba7106c80f77a610648"],["/archives/2022/01/index.html","8a783f912ae772ebbf44ceef9f36ff75"],["/archives/2022/04/index.html","7e633e405bb90b83ce570ce45d1a43c9"],["/archives/2022/08/index.html","7537897b439fa7cc15fdb874311f549e"],["/archives/2022/09/index.html","2c781310343c3bb20d934a8c3041a894"],["/archives/2022/09/page/2/index.html","027f1094f7a4edb1e987ac0dbed78e81"],["/archives/2022/10/index.html","0b30178ba6102562f6cb57bda78a7cea"],["/archives/2022/11/index.html","09d0425b1130048268dd37dfaf66a8a6"],["/archives/2022/12/index.html","df69d9ca28ac9f7993a6a27031da2cd3"],["/archives/2022/index.html","852925c86e1c3d5b40eb84e63d8cbe11"],["/archives/2022/page/2/index.html","7f8384915934bd97043c39ac5e04bd18"],["/archives/2022/page/3/index.html","66c89313cb0c5ee3fe557a9fc01ace4e"],["/archives/2022/page/4/index.html","abad046107d356f3517b30e3712c4ffc"],["/archives/2022/page/5/index.html","73ee6c02841b5e70bc1677dde2d039cf"],["/archives/2023/01/index.html","e74792d824e00a19fe8318696c764a10"],["/archives/2023/02/index.html","3d7807e51e6f8605b7ac40a6b5734d2b"],["/archives/2023/03/index.html","2649236b6207a129acd86fd85ad1ff05"],["/archives/2023/04/index.html","5b39eb2ec7c53dbbd6de40898d853700"],["/archives/2023/04/page/2/index.html","6f5b54be715dc758e4359d1081418861"],["/archives/2023/05/index.html","82156de837abdc4715be8f3138610d35"],["/archives/2023/06/index.html","acd81424c82e30333a54eb4e5772c14e"],["/archives/2023/06/page/2/index.html","35d2155eb8a70266df7d447a5a2d06c9"],["/archives/2023/07/index.html","a838e923670311f12a08bb62dbff31d6"],["/archives/2023/index.html","c6990a35700e07719eb5d9e8ddf56ea5"],["/archives/2023/page/2/index.html","be48d38733aa4d695142889919035edb"],["/archives/2023/page/3/index.html","40fc7ed5b7407503f3732b5bfe99a099"],["/archives/2023/page/4/index.html","d93a08c8269997c03d66b2f33f2cd9e1"],["/archives/2023/page/5/index.html","941082d4644adaa7cef4dbef4a1b78b6"],["/archives/index.html","722e54abb5d6e2db084478eb3519a117"],["/archives/page/10/index.html","dba408b87d76774a319813cd3062850a"],["/archives/page/11/index.html","188d8178c92edfa91912cabe940d1974"],["/archives/page/12/index.html","3a0cf76934909b626ebc42087c7f42c4"],["/archives/page/13/index.html","0853071ebb0d6aadb19da318a4ae6d53"],["/archives/page/14/index.html","f063b2af2e02097f7fb92ea9aa8caf4e"],["/archives/page/15/index.html","505fe14d0380825b43ad2431455fc033"],["/archives/page/16/index.html","c5de251ebc7c638d05484806f1d16f07"],["/archives/page/2/index.html","92c578a1a330d551b7a96efc2bd0f7b6"],["/archives/page/3/index.html","e15ceed4af2ae7342c69c42241f7904b"],["/archives/page/4/index.html","9a4f33d31a0dcc45e23b3e401079f5d6"],["/archives/page/5/index.html","b242809eae97a83125cf583f6c178a29"],["/archives/page/6/index.html","3a6f0750518c3620ff65c57c13e55836"],["/archives/page/7/index.html","d144034827b7f4e25545e9b6018e25b3"],["/archives/page/8/index.html","b84c0d84e31df69e84acc1437abc6fd9"],["/archives/page/9/index.html","5a5b088243d960c785d2b629ed8d8322"],["/categories/Devops/CICD/index.html","be9bd5e92ebb2385088a5c1210732144"],["/categories/Devops/Linux/index.html","64730989baa46fb893ffa11d6c16c76b"],["/categories/Devops/index.html","689fdb5a4812dfc6349233846215bb99"],["/categories/Java/JVM/index.html","9d5567741ae43b575837b1e6df8d70da"],["/categories/Java/NIO/Netty/index.html","7a7e29099582959cf605e67da0246f2c"],["/categories/Java/NIO/index.html","7a33f5e710ed46b725a0d6ee5d7394b4"],["/categories/Java/NIO/原生NIO/index.html","75678243d556f433831081ea4d22f5ac"],["/categories/Java/NIO/文件操作工具类/index.html","f8e2d42b1926603b989e2c918ae72df9"],["/categories/Java/index.html","29b7560c5f69411580a6a860c6c3a2cc"],["/categories/Java/page/2/index.html","d7de74bf690af14ed2356b929d528877"],["/categories/Java/学习路线/index.html","637ebf9889f17147dc0cb94870469452"],["/categories/Spring全家桶/Spring-Security/index.html","7dc013711df23c93adaa49f9674e4313"],["/categories/Spring全家桶/Spring/index.html","d34ec98e41d33b904d82dddb7a12fba0"],["/categories/Spring全家桶/SpringBoot/index.html","4ac32a110588317fb7b9b86d90db0325"],["/categories/Spring全家桶/SpringCloud/index.html","9bff7c0ae840b869ad82cce4bbc84d91"],["/categories/Spring全家桶/SpringMVC/index.html","d27e590295b1ac293326724e72128d08"],["/categories/Spring全家桶/index.html","442477fcb494e830654866672914caef"],["/categories/Spring全家桶/page/2/index.html","15e938c5d9c454c62bc363fd08714a37"],["/categories/index.html","a998cdbb98b9e418fd8d2d15e2c675ae"],["/categories/中间件/ElasticSearch/index.html","2acaab4f3a945cb7125d586757cd9a13"],["/categories/中间件/Redis/index.html","e822871bd125d5d3a6fba506a386dc51"],["/categories/中间件/index.html","19ce797e12547a6ca249edd36021df56"],["/categories/中间件/page/2/index.html","6a91133e54478a465a903b81b84ab06e"],["/categories/中间件/消息队列/RabbitMQ/index.html","5264d70aef4be0f9725b4fabaea4d3e4"],["/categories/中间件/消息队列/index.html","c40827ec17e42041e40e8f487dd63644"],["/categories/前端/Mock/index.html","00b82014a8ad482a4ddd5bb65b313f00"],["/categories/前端/Promise/index.html","fae877aa94b8f740eec0567e203e1bf1"],["/categories/前端/Vue/index.html","40802fb3058df7871987843f4ef4d87a"],["/categories/前端/index.html","f8a5466ae3ef662abe44864b2e425423"],["/categories/前端/jQuery/index.html","ba19e8e08828c84ce8a25d79c795c6e3"],["/categories/前端/page/2/index.html","0f8570cfd5433bd2a579a8775cb9cb8b"],["/categories/前端/原生基础/index.html","4805a2d4a29975e9f1ca875d7e3ebbc1"],["/categories/前端/异步通信/index.html","1caab127a34beb6a899eee048fbad436"],["/categories/工具使用/Git/index.html","9451cd8b6850e67cca3334949d775eec"],["/categories/工具使用/index.html","39d51f433333f862c55ce23c73b295cb"],["/categories/工具使用/markdown/index.html","df08ea133f964aedb01572a2afb9113b"],["/categories/工具的使用/Docker/index.html","75c815b15953f3f92fc6beaacf341832"],["/categories/工具的使用/Nginx/index.html","5e499ff63bcf60d634d2d88321096683"],["/categories/工具的使用/Swagger/index.html","eaea9e77907270214c8c4960028468a6"],["/categories/工具的使用/index.html","c0f5204951b4c61ea99a031497eca70f"],["/categories/工具的使用/博客搭建/index.html","cfc4cdd037a364f615df8e2410215720"],["/categories/数据库/MongoDB/index.html","898f44b57a23696341f83f69f6134b70"],["/categories/数据库/MySQL/index.html","c84c7fec7d15af54548ceadf12574f05"],["/categories/数据库/MySQL/page/2/index.html","2f2bee13ae1f87b47794fe118524d141"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","bf5fc6ac7dfaae6fa5cbc4cb58f44d86"],["/categories/数据库/ORM持久层框架/index.html","5a0569eb49d1f133928b8e46890e18a1"],["/categories/数据库/index.html","fa67cbe5436fadc1f1059b08ed8be4e8"],["/categories/数据库/page/2/index.html","426b0d19677c3f19522dd727c61d83d0"],["/categories/系统设计/index.html","decede7e873f23bd333e3ed9f8ebd64b"],["/categories/系统设计/page/2/index.html","8a16b2001de3717d8bad9709ded8ecd1"],["/categories/系统设计/分布式权限认证/index.html","d14d58fae478fc7b3a1f09f096544dfe"],["/categories/系统设计/设计模式/index.html","f0fa67a6064c032183c57842f02def2d"],["/categories/系统设计/设计模式/page/2/index.html","f0350793869f9934d6fae6b6126099d6"],["/categories/计算机基础/index.html","019c4b42762028a62c30facbb0de5ba1"],["/categories/计算机基础/page/2/index.html","0ab0d42a0cb3ef9610ba3650f0f276f1"],["/categories/计算机基础/page/3/index.html","79c39c33b6440ebebe0bf0b5b4f73b37"],["/categories/计算机基础/page/4/index.html","20329ebb250913b6eb95ce84a55b879c"],["/categories/计算机基础/page/5/index.html","030acb37e0cdb51950e7616f0fde4c51"],["/categories/计算机基础/page/6/index.html","698a5cb016ca93fe6e29f5f5499104c9"],["/categories/计算机基础/操作系统/index.html","4be724306b9f69ce9aeb4536013469a3"],["/categories/计算机基础/数据结构与算法/index.html","a01d588fbf2272fff7a9c52fe7c95d8a"],["/categories/计算机基础/数据结构与算法/page/2/index.html","072d3757c0bde1fe9044fa6548bb0942"],["/categories/计算机基础/数据结构与算法/page/3/index.html","9698e64061a44e7b52cff789f5c51328"],["/categories/计算机基础/数据结构与算法/page/4/index.html","e33608c652e7b64f9bdc25e317633a23"],["/categories/计算机基础/数据结构与算法/page/5/index.html","74dc15c9fa38db7d4e0957c14c2f0af7"],["/categories/计算机基础/计算机网络/index.html","dc71ee3a1f9216a23ecd951698f81ae4"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","7ad93db088a35991b18b21118eedc8e9"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","0debaa32aa125975f69e943ace6f7fde"],["/messageboard/index.html","021ffa5a8ad3cb3181c0aa41fce2183d"],["/page/10/index.html","30403a725bf753a7d2b2af134958aad7"],["/page/11/index.html","5e5a07acf3b5d4b995e727f4a2a78e94"],["/page/12/index.html","aa0918a17f96d3e800b64bfde6a63ae4"],["/page/13/index.html","da4e1d5e82f9cac067c8ecdfec6cba46"],["/page/14/index.html","73953dfae486c69ed4818475c9ee70ba"],["/page/15/index.html","37f81b6cd59077d2c77124251ec92d39"],["/page/16/index.html","e5d951325df588370ed6c10427fdb109"],["/page/2/index.html","f9a4786bb7ba3619003f9cdb593ec1c7"],["/page/3/index.html","4d392c5980d602a717fa339a1ef34793"],["/page/4/index.html","6c48477dc81dfb96aa0e2820a905b6db"],["/page/5/index.html","1d96e7a9a1caf4e48cb04ebcd269e33b"],["/page/6/index.html","665f1023705a6d0cdcc6e74f82093b5b"],["/page/7/index.html","a5cca2eb9d40c5c2cd4621c0c23ea990"],["/page/8/index.html","0eeeb64f4838bc8ec8bbfc084d22f9f2"],["/page/9/index.html","0823190e0c2090da6f2d2c054b4fdb7e"],["/sw-register.js","06d8f7792005605274164203abaf03ef"],["/tags/Ajax/index.html","94dffe47645a53ac66d2629a57d49dcb"],["/tags/Axios/index.html","60aa0bb6378499bbc15ebc055822fa48"],["/tags/CICD/index.html","4b9faaed091a3bdb9fbfacde7cad9247"],["/tags/Docker/index.html","a6da8682b619e717b85c1c7dc4de2b1c"],["/tags/ELK/index.html","f44a64f5876704b5c0d6b0fc67ac7fc3"],["/tags/ElasticSearch/index.html","e6d55a5013a203f28310aecb443de655"],["/tags/Git/index.html","b9c1a9c4f7fc64bfee0f9d34ec22e870"],["/tags/H5/index.html","4b5c98f563092a086dcfa0670f7a2d4c"],["/tags/JVM/index.html","54131451ca0acf30ca20b2117e7469d7"],["/tags/JVM内存模型/index.html","b98f5ce5cdab9f5fe18b195ae621f5c4"],["/tags/JVM执行引擎/index.html","b8011179b76035178400c94fb0ade0ac"],["/tags/JavaScript/index.html","3308f51286e4fc0be49d74a3d0b98b2b"],["/tags/Kibana/index.html","8ed04e9e60d6da53d596cbc0b599dc3b"],["/tags/LeetCode/index.html","86b0a6660bfd681f7d602002ec5ee83e"],["/tags/LeetCode/page/2/index.html","f402bd15b23e098fa2503a8a8e010501"],["/tags/LeetCode/page/3/index.html","78cd6550f6c0ebfa59c22eb292c0e0ea"],["/tags/Linux/index.html","4d7972bd372dc141fc578cdcb96d8c4d"],["/tags/Logstash/index.html","ae6327289b96f98865717ee7f9ff93c9"],["/tags/Mock/index.html","34f1e9af288e4d9fce10d77ac58fe4ce"],["/tags/MongoDB/index.html","bf6e3d5bd57dc83e5f0b4edcb8f7468c"],["/tags/MySQL-事务/index.html","a2c1d02d4e36181b4c5413f7b11f173a"],["/tags/MySQL-数据类型/index.html","d672d323169f340e5fe2f8bb1d661b48"],["/tags/MySQL-日志/index.html","999615b0526f779d09e01db59f6d4018"],["/tags/MySQL-索引/index.html","6d609ac5fa9e8e1e1dea5d7f40a82186"],["/tags/MySQL-锁/index.html","22a36ec8d084b761e3833d27e1f26927"],["/tags/MySQL/index.html","363139c49d03c8c324eaea9dbebd0e13"],["/tags/Mybatis/index.html","d876211b5d2eacec6d6179c0103eade1"],["/tags/MybatisPlus/index.html","fcadd03d9b2ff6499ecc39f76eafe13b"],["/tags/NIO/index.html","2707b1ab4ac130ad9988629592722344"],["/tags/Netty/index.html","8cd6f72e0c1beebe3a1d118c070d1392"],["/tags/Nginx/index.html","5664d2e180584d7e0ad5f274d3032181"],["/tags/Promise/index.html","cdb3ecd907be9c36b7905000eff18dbb"],["/tags/RabbitMQ/index.html","77ed9e5b29f67f37144a976851aa0059"],["/tags/Redis/index.html","215115af4664e7234b1582c973cc2a85"],["/tags/SSM/index.html","6da4688432e506fd383dc5a471b89733"],["/tags/Spring-Security/index.html","d3fa724dd0575951cf4800e7996f6fde"],["/tags/Spring/index.html","58d23c4bf3e0def30c8a5ca758dfe4b4"],["/tags/SpringBoot/index.html","c648be5610188a855214a1705e7605e2"],["/tags/SpringCloud/index.html","9cffefb81cd5e47a6ef2c56515282e6b"],["/tags/SpringMVC/index.html","759ffb36084fb315c76d62798cfe882a"],["/tags/Swagger/index.html","2f8156287f97a6dd37e9511792ddbae2"],["/tags/hexo/index.html","ad0070200661f9d6501d5467bb7b944b"],["/tags/index.html","7b96881c89ae65f71b82e738faf038fa"],["/tags/jQuery/index.html","9dd2092e3a875efc631c4f3f06c885ea"],["/tags/java/index.html","83cdbf4a850992fa03869992bcaa5f9d"],["/tags/markdown/index.html","beae9f5a1e5b39e8c9e7d27008a9ad40"],["/tags/noSQL/index.html","61994690bf95e8f8eebff50120f22265"],["/tags/typora/index.html","c8f6e3e4001f6ac70a202a2a59f80994"],["/tags/vue/index.html","a59e0e0b38484cf41273f6db47ec3bac"],["/tags/享元模式/index.html","ec14311627dd49dbc0765287bae6494e"],["/tags/代理模式/index.html","a7528a571d7ca2599da3821d4c5440c5"],["/tags/内存管理/index.html","e26bd7f5b570e7388ef94046f85d00ba"],["/tags/分布式/index.html","1d2564cfcb1aa1f5cbe632e504c3da9b"],["/tags/分布式系统/index.html","f05c6585db7ce7ae6e3902682ac7ffc1"],["/tags/前端/index.html","d58fdf719726179006883c56022851cd"],["/tags/前端/page/2/index.html","813aba574041cb4705dad32044115aea"],["/tags/博客/index.html","c61b88ad7435cde9f2fb3a72b50a65f0"],["/tags/后端/index.html","1d67094bb675db7ee1bba328ef6b0e73"],["/tags/外观模式/index.html","026da9a6dfbf98591a3a7283129d11d5"],["/tags/容器技术/index.html","effb21b7af306c220535bcc4904f3bc8"],["/tags/工厂方法/index.html","e729abddfce419c6f4263f68c9763546"],["/tags/微服务/index.html","60b8aa2ae371dd27fb02eee8ec559533"],["/tags/抽象工厂/index.html","b9493c990605701edf37b636225792f3"],["/tags/持续集成持续部署/index.html","64c6784067924fd435fb564b1b87752e"],["/tags/搜索引擎/index.html","baa073645385c2da236c3b38a99f412d"],["/tags/操作系统/index.html","e62936681d52684eac1d3d5912a0207a"],["/tags/数据库/index.html","0b2aa1dee3e8ff8a313c8dbe752915c4"],["/tags/数据库/page/2/index.html","26d7ff68db003866345971682bdd8374"],["/tags/数据结构与算法/index.html","b12b55c14420910b3b7982efe24acea9"],["/tags/数据结构与算法/page/2/index.html","4dfc64fb36e849d0bd132a156bc8d81c"],["/tags/文件操作/index.html","3b259e4924f1eedfead077a95ecea3da"],["/tags/日志/index.html","d41414512133c2c23d9da9d634d239b1"],["/tags/服务器/index.html","db2f07f3a2a1cad1523629dd106ba980"],["/tags/权限认证/index.html","4f450f520d0ccbb85600c72cae3d1912"],["/tags/桥接模式/index.html","67a61be89b98334dd7a865d9a1bdffcf"],["/tags/模板方法模式/index.html","cd1e8fa00a2ceae6eb39d8adf79e6103"],["/tags/死锁/index.html","f58a9ee62060afa9d99a9be0229604f2"],["/tags/消息队列/index.html","816a0a3439154c6039ecda1a3df1ecec"],["/tags/版本控制/index.html","c451b29dd7bcc7a3c4cc8c7802bdc334"],["/tags/策略模式/index.html","49b640677deedeab6e2b4776d2ede778"],["/tags/简单工厂/index.html","2c9223634be18cf04e41a9151bc74958"],["/tags/算法/index.html","924f071536f5c5a40f08372a94388dbe"],["/tags/组件化/index.html","46f456dcf2462fba4336d03af645105a"],["/tags/缓存/index.html","880cb949cb6deeedad7e8ddf578b5e89"],["/tags/观察者模式/index.html","967b589ff9883f3c0c9acfeaf70c53e8"],["/tags/计算机网络/index.html","ded4d7cad88a5a15bcf03927c2ccc37e"],["/tags/设计模式/index.html","610131a9371149d4cfbfe145b4acbc18"],["/tags/设计模式/page/2/index.html","43f1c198d7edeb47c31dbfa871491440"],["/tags/进程管理/index.html","deca8bac0d4809b271d61912dec19c0f"],["/tags/适配器模式/index.html","0c932480b08942996cd3d8c950d9c94e"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
