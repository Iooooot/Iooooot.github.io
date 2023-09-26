/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","adac2f962c1b9bd04f4b0adae9ff6731"],["/2021/02/22/工具的使用/博客的搭建/index.html","ede8d30a36923748024fdad032f29011"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","32acc450106ea495b31539422888bb5a"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","bc5fc1955c82edb3d17ac1051378f7d7"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","5db213c1a866c19ac7346ef0faa46543"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","34c0e196381a783b1420785ae4560b1f"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","0a53b570d3e4a60916ac4a97e77eb24b"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","5f2cdc31019520833d89d31f31846a9e"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","aeda134e50c6c2c2e60390e5d06920ff"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","0e165f3c4ef6d59fa4e0a657d746d053"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","d02fb13d694a016d0d628310eca70342"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","f20340a83d5b58589eb92d5ae7180d49"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","d6c1ff6734f4eb4d3c1670cb36f61dc1"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","8d79bbde66f6c188da083fee74c68cd4"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","5e7b1aa3e62f9b1542e0a1d9356a5d9e"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","c8284204eb134b5f137ee0adcb5b3bf3"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","191ba10f353e5f87e34b5afb5aab948b"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","7ec7e0e97a2c29e6e3ff641012916a4f"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","24a9a76a51abd3d9e3e27effba274b2a"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","68f89c2cd0ef6f767a14935a2145a8fc"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","0a5b652392a8e22aa3576f75883d1bb0"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","88c723288e6a271e6b7d6d9d6423f531"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","0f69c990d3662e49a8ebf0194c086e8d"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","89f802c89875966dfe518677570e9577"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","232e2e7f0422cc7362faba02537fd9bf"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","9cc4b7af0cdeebfd6354e50cc3b145f4"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","b947857de06987a96f0160abab2db17a"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","ceda0607cf95299ab052927a0bdb9601"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","0525a2a3847b27c2e8babbc8a583e138"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","0244cc328ef187fcab55188d6b157177"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","24d814ba0eeda8c50aaec2d7c1e38246"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","6bdc9237cf861a7aca0d695acecb08ed"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","ef2184a8fa603e9b38945eac47e166f4"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","d26de319d0644eb6465641120118db87"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","0014df9321cb0db511231ff766be2189"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","82c42975cfd6aeabc311649b2adcbc2a"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","e4c0311f2ea2f3668446e93a5d6cc11b"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","07ef16fc2d94d972f22f4661d7c807b5"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","7d24841e314e0fced7ceb87c04d7d869"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","4f43c7a4b74991ecf36eda3ec430239d"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","038ffb278f658b214aa174c3f9c9adac"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","29691fa9af22fea40bb1b36bd7ea2716"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","ec36e6bc15e2d09b63e70cd5daebabea"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","4d5676e4fec5556ce5aa63edb89edde7"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","d957a3aa47cd0a71031c4694cbd8d8d5"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","aff533ddb39aea0e3ce159c819af3d72"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","ae25572b8ac06e92a5cafccd4effa8ed"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","69524dd87ab7c727094f195b83c04387"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","617548c5b0af6c683e7d6666a6ad377a"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","dd6feddd80870d808229019066ac8414"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","7cfb9c8750359335fa0612b8303d89e9"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","5eb73690ddf2efc7ff755f90c87a4e88"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","d72f843461d687ca765754348056b850"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","55f2ae23f0501f157d50a0567ce75b6d"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","5c09c370cfc3b24d9c1817408a795559"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","f10d18de8678a0b66966f147c47374eb"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","0800aeb2ef24fdb378ea1add52f1c4c1"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","a20feb4de5c2b748211b388b53f8ae30"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","69d21f70f8634850c6c36c0130493019"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","8749c72a1b45ff0f39bed026affd206d"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","31d50c72514446ec19c0cece6b1b3b5a"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","9aef52aa7d49d064b2a056bcc78de913"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","b4f17d52e7f05066fdbf36dc3420d722"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","bc0355b1a6615fcee4a86428c9fdef40"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","1dd9d56cd1a28464b802a7c8be4ccae8"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","df44f0dcf2c5dacaa29e0e4d67c06248"],["/2022/08/17/前端/jQuery/index.html","3be12352e8e1fa93d9d3fb7845c14d09"],["/2022/08/19/前端/JavaScript/index.html","470dd8dbb97447d3921cb4f564cf0251"],["/2022/08/22/前端/Ajax/index.html","037d568ce38b6dc54095cbdeebff3f44"],["/2022/08/23/前端/Promise/index.html","b588c76e40b671dbf49f9cbcfe0ba063"],["/2022/08/24/前端/Axios/index.html","8cbcbeef4c42b0d1f7f12a8f929d21d4"],["/2022/08/25/前端/H5本地存储/index.html","ce550f616862e09982b462e5fd72a798"],["/2022/08/26/前端/mock/index.html","8ecaad8d35b354e07da3ff597e27c57f"],["/2022/08/31/前端/vue/VueJs/index.html","b683ae27f5e5f6aeb662dc2e1ee72009"],["/2022/09/01/前端/vue/vue组件化/index.html","f80ae7a038bfc6fae8a0f3685f4335cf"],["/2022/09/04/前端/vue/VueCLI/index.html","4e84facbbe3e7fee90a08fcd81b40308"],["/2022/09/07/前端/vue/vue实现动画/index.html","e62eaa9d7087e2906b8c7ae503064ec9"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","ea8a1fc42e728a01823adea213462fd1"],["/2022/09/10/前端/vue/Vue异步请求/index.html","2355dc67611fcec7dd37ce9413c3741b"],["/2022/09/11/前端/vue/vue-Router/index.html","595569bf830065ffc027f582a73420c6"],["/2022/09/13/前端/vue/Vuex/index.html","f2f16ab7c7ad1e70e19fc60b654f7739"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","7cc584b57a1fa45d5220accc20176e27"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","d2b53064be346fdc803e1323368e9124"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","bfe2e2bfd8fefce4e113c6abdf4422d3"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","d63777b5f75b57cc52e7497c08b1a241"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","24ec05576cabfb3a4731c83b40bc7548"],["/2022/09/28/DevOps/Linux/Linux/index.html","e9ef2dbe95eb0467257370afcbc89e9f"],["/2022/10/02/中间件/Redis/redis基础/index.html","b6d355eba927f54c353b4977ef6b0023"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","f547b012ea822e7ee23f4464789d0411"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","c91c5585d407412c2ec9f53da3a535b8"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","fb7fb7f1abf75aef962f1ca27ca95b2f"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","00c6f6a7485af81712adeee78c557ec6"],["/2022/10/17/中间件/Redis/Redis集群/index.html","7b6ec93e5c700aae68edd3ba59dd4079"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","be8e350ba02f89a3800aa04be36b4717"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","1ec69a59a08057694b85a74592e21e5f"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","47322aa5cad58ca4e5bd51176a5465c7"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","6e42b66108894a6573f64b9169985b0b"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","30aaa5a21f09b2177bf530724ceac02a"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","18b3809a6aaeb67ae7480202015e00d6"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","9c4ac20da22dd14a81d970ef96d76652"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","b72cf2006339a98914da9d169ccb18d8"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","7edc0092b3850ca2393167db6d445edf"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","34bcbb271a4bfda147adbc3df56107b7"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","239cfcbe1e22cf9095910389dc46494a"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","3bb870d80e287c7116e764b1d2473ea9"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","15156236c2febba09a190e93a4cdeedd"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","9b6c6cf31aeb745672b8d5d80b3e4fde"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","73fc283fba92a9364ccb92fe54b092a8"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","025d66840878f7022319a7de038fba85"],["/2023/03/10/DevOps/CICD/CICD/index.html","b637c989d5ce7c007d2caaf19688fd9c"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","9295f025e4680d3276fa0fefd33a96b4"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","11ccc26308a92d3c061cbe57e0aef1cf"],["/2023/03/13/Java/NIO/NIO/index.html","c6e299d1b0b8409b61b528ffabd2c1c7"],["/2023/03/14/中间件/Netty/Netty/index.html","2d94cd82e66bac619b075707f3eb9157"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","642f207d218e0acee5d8b25488313f11"],["/2023/03/17/系统设计/分布式系统认证/index.html","479250aa43def02be4f9c520ab8e04ca"],["/2023/03/19/Java/JVM/JVM概述/index.html","0bca8fce1ce9b91747a627443e44b106"],["/2023/03/23/Java/JVM/类的加载过程/index.html","da2d91c59f47562e4ab24351001334b6"],["/2023/03/28/Java/JVM/对象的实例化/index.html","8a659d91da2a143f348616af120848ff"],["/2023/04/01/Java/JVM/运行时数据区/index.html","6fded94767d7e40b7ac098cfb3defd5d"],["/2023/04/04/Java/JVM/执行引擎/index.html","1720cb9efb478d6dc7e1c5061be9843b"],["/2023/04/06/Java/JVM/对象引用/index.html","ad20d55a6a47a1fcd4da036850e45713"],["/2023/04/09/Java/JVM/垃圾回收/index.html","0aa18c789671c6157e78270652e2f11b"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","ea6163c142c2d1ecc1c27e6cf9bf86df"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","d0bcdb9e43d32cd8fbd4e7a6cf6003f0"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","05c45178d8b57e8103667e09bf864cf8"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","c2dbc104c4e25ca0825ae87212181fe9"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","94a00dedf5235a074ad165913800cf68"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","a96b01b8298b06c98972169bd14f649f"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","8c6708b6886dcd51730d7357c33bc551"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","1f17c0dea6978679990e174be87a99f2"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","85018f254eeacb49b42aae4aeefbf168"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","cc5b11d95a4c04f310ad7d274a58fecc"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","4ce6d3400f3037c9304b95eb58c5d5e5"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","d10762cc08e2c541e8685b77c03ac71e"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","61cd37c2db1e061a17875e548fc6df88"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","7ea184de70c07b2dfd169d38fbb4ae3c"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","b22fe9acf937720346190623bbe80a8b"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","168bc011b091b65de81e1daa903384a1"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","70390d0037bae6374bbe85b29a7cd0d0"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","49936be4716e89ef2ea9df5f75274d25"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","481406d0924ebe7e61f1289d9290019a"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","c48aeabba304d4a24256b5b9101f6692"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","482bdf244c675db15f97caa8faa53a20"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","f0ef2fd5f5a72a71e033a5f9b168c896"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","16df2fd7cfc4a44c16b9a488fd660494"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","41d4132345fbb403af96deae18dc48c2"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","e07200ad22edf44a32c551b5d62155a0"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","80440a03a3d9861bb5c04a42e9ff0f34"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","8d28a7f75b244748e312580f4a0e6423"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","922ebc6f573275eba1575a439caff116"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","ce8508c07901b29844b3513417db9fb2"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","c797549e2e2e9b311a048738138e4b5e"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","469f9ac736f2874c13e73360ed9bbf65"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","7bc865e24923454bd7df6227a03023d2"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","562dba98988296c64da13363c2aaf508"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","79855614b9c7ca2b6ff7918ff44df2a2"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","e6e28bc28d6429fc7e89d4e73996b503"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","163b6e54e8afebc6ce6cc962b8d2bd72"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","b749f47ab901e72a3e16c6d0ddc0c188"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","6c329dacd4f395ae7281fb9d86a8c151"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","8adee6ec55a91ec4f5bc2d903d2f998e"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","8675db80a3b85b8b2044a0c50c79ccf1"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","2b8249bfc7730cc69a55051238f81e4c"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","0b6056a28e81e6cbd352b1fe8fd5492e"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","85457611f69ffd49ca4046cc72ae701d"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","a59247a46b2a7a90ecc39baea140647d"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","ba1dccc1171d32da7928e9abb94ba517"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","8fc1cd1a7977cd9a37c6138036b96817"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","00ab0c20be16bd73208ac7f81c21f474"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","a665aa080d14a19f257741db48bb5a6c"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","f2b815a58bbc879c27159f989e6f95ca"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","e9229dcc74c432f1818d7516e568318a"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","b829d5821efe1330cff5cbd111d4a943"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","44c4562b4c59386823f24a2f561bf358"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","b5f58a5013d41635b522801127eabf0e"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","312e8c57d1d2914ef1d4259bce4ebd2e"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","406b54fd70c69ba9482eb702c269840a"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","8597341d1969a7453b118869bd8448f4"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","512016919b8ee5dee0d478549cd1230c"],["/2023/09/04/中间件/Redis/Redis事务/index.html","9bdcd52a5933b2276db6b0c78eaedbdb"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","2b0dc069a994d92feaa4a2bc36d0d20b"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","2f6b1477ebeef17d65af4b0d1503cf6f"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","fbc2ef89d08197969cc82732c903b679"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","88dd5503ad2b76e3034632302acfc47a"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","b151b2b52003948329cfd0622702ceaf"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","186b7569428af2719e1d0aa06d9083a6"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","9713a3674c9e6e477afc02bbc368f746"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","03564adaff864bdd7b4592eb4f2a95ef"],["/2023/09/22/零拷贝/index.html","2cfef057795530258e7836c0352cdcda"],["/2023/09/24/JWT认证/index.html","57581507e1ce9ca87ca4adcdbb1b710f"],["/2023/09/26/Reactor模式/index.html","7802ae52ff1c428c07d79f960282bd59"],["/404.html","e06c022e729026874de2c8e9287f9ad6"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","35e5537915366f43278b7161fae5c0a2"],["/archives/2021/02/index.html","3c3575f5f006fb1f24681d5374f8a3cb"],["/archives/2021/03/index.html","988f862861d6b36ba971a6e114a3ec07"],["/archives/2021/03/page/2/index.html","51ce2e6be8ecc54183501029330dd8ff"],["/archives/2021/03/page/3/index.html","e9f9a7c24fdeaa57feb52924aa58a258"],["/archives/2021/04/index.html","7a934892369ac5b60549a093576bbaa2"],["/archives/2021/04/page/2/index.html","1230e304eb8338b99c598344773b3f06"],["/archives/2021/05/index.html","dd52fcceedb9c0510bf9d2ee6b3734e0"],["/archives/2021/index.html","5801ff7718fc281896c6c2d065b3a31f"],["/archives/2021/page/2/index.html","9ef62a575ffd331a223defbb4e7e40fb"],["/archives/2021/page/3/index.html","9f7b588019a92ccef438d9bf57d487a1"],["/archives/2021/page/4/index.html","1bf87cc91dadfd32672fa6016137171e"],["/archives/2021/page/5/index.html","a70730d08ae2382c09a326b689ae2ed8"],["/archives/2021/page/6/index.html","82ec8fcebc555979345cb3097d1eed3d"],["/archives/2021/page/7/index.html","6a548d6ef9523f2a3e3b38a1cbc715ad"],["/archives/2022/01/index.html","1d74e7da9f7a75f55eff464390d68408"],["/archives/2022/04/index.html","748ad99ffe2b38517996678b3c105c17"],["/archives/2022/08/index.html","334732a46321e8936580a27e783e68c3"],["/archives/2022/09/index.html","82dcf76f514542ae9648be90fdce152b"],["/archives/2022/09/page/2/index.html","ad57478b90fe59990b51c33c843bb644"],["/archives/2022/10/index.html","3b06fc04bba2f69294721634b5776c33"],["/archives/2022/11/index.html","766328a43a920233665454c71090303a"],["/archives/2022/12/index.html","57032470897a02ca0e9f58de67949afa"],["/archives/2022/index.html","70395a5f39f1a0ea49a6264e3462b990"],["/archives/2022/page/2/index.html","2e09ba428a7fe2a54e30388a935db084"],["/archives/2022/page/3/index.html","2d1fe0b0471c21a816dc7a3e5554a7f3"],["/archives/2022/page/4/index.html","19436c566ad402593f796c4b18464f3d"],["/archives/2022/page/5/index.html","1a36dd9a88e294c218fbe40ea9b836ce"],["/archives/2023/01/index.html","f8ac6b0382ff23af59730bfd4138fcd0"],["/archives/2023/02/index.html","d3f9eb136fcfde3dcd6adcaf44fafa2a"],["/archives/2023/03/index.html","03f293585a4e60f3a8babaa89b7c4a87"],["/archives/2023/04/index.html","073818ab9f412c8f11ab5346839ccabb"],["/archives/2023/04/page/2/index.html","067ef80eb18d0302c9afb68e54f09e91"],["/archives/2023/05/index.html","0fe25d56895e67198b7d033626b2717b"],["/archives/2023/06/index.html","8877a1d001c25d220132f9a0ff575806"],["/archives/2023/06/page/2/index.html","ed9556811a2020d522add0ae943f8240"],["/archives/2023/07/index.html","03b763deabafb7c74459367fa33eb26f"],["/archives/2023/07/page/2/index.html","83e6d08efa9961060fd92414962e996c"],["/archives/2023/08/index.html","a40f7c80cb1b9a1c2e2e368226986cf8"],["/archives/2023/08/page/2/index.html","37ee67a372a772e9b45ca16d654335be"],["/archives/2023/09/index.html","ad4c1e8aa2ab5f25b7fc36f63c6d051e"],["/archives/2023/09/page/2/index.html","89e284cbb6dd428f40312c089c5e8239"],["/archives/2023/index.html","b000adb5f95ee106dc033299856e1890"],["/archives/2023/page/2/index.html","d3c780d7c2d3e79138014f3cda5078e8"],["/archives/2023/page/3/index.html","e9ff7db6de2c3fb2d24f893b6ae3eb95"],["/archives/2023/page/4/index.html","9ca80063e2f62844924237416d201587"],["/archives/2023/page/5/index.html","8f0f98321f39ec8d077734230864faa0"],["/archives/2023/page/6/index.html","d3d3bc3c8dd8a1036b51450d591e58c0"],["/archives/2023/page/7/index.html","69f0778da3f76671ce72cf448ef920b8"],["/archives/2023/page/8/index.html","2229fa9098f8f4f03a87d7ad465bf1bc"],["/archives/2023/page/9/index.html","05cea49ce8bf6caa73bca9a89c55c804"],["/archives/index.html","7fbfc920788ac729a297c263418d17aa"],["/archives/page/10/index.html","2a82971ae0768a22de2eb51eb0933b29"],["/archives/page/11/index.html","65a946cd481d47af01dd45f79c7e18fa"],["/archives/page/12/index.html","91364f44f9af07053ddb4415d25ef86b"],["/archives/page/13/index.html","86619a8755d1ca0659efe32a4dcc2ef6"],["/archives/page/14/index.html","8c389f9bda9e99eaeee8609e820f03e6"],["/archives/page/15/index.html","8885417563b838c28068367fc94f3b38"],["/archives/page/16/index.html","2162fa045496c61fc1bb9dd553fe0e10"],["/archives/page/17/index.html","ffba32972003ed1c539328fba4055c72"],["/archives/page/18/index.html","40de5beaf30a625ad5d616c3f3098c98"],["/archives/page/19/index.html","cbe177cf56136a782783dcc22437b5d8"],["/archives/page/2/index.html","1509138f7006938a2e0824f0ffd7242c"],["/archives/page/20/index.html","7e26bd367d338f725e53e31468e8e2bd"],["/archives/page/3/index.html","b56b4d23671632175d3e3407226f75d6"],["/archives/page/4/index.html","b856b5a75f1095377cee34c3e0fdae50"],["/archives/page/5/index.html","66af79763091185cbdd22cfdbde9c22e"],["/archives/page/6/index.html","d01c0cf56047ebac0bd65c2e175831a1"],["/archives/page/7/index.html","39dcf2dde73a7e12484395e2519a7462"],["/archives/page/8/index.html","79a83c6de990a4584e06f10d448db89a"],["/archives/page/9/index.html","9919a565eee9731779fbb1cd55e70613"],["/categories/Devops/CICD/index.html","51cc49ebf55134037efc42233e298e00"],["/categories/Devops/Linux/index.html","4ad3959104de35fc650ebb47ae4595fe"],["/categories/Devops/index.html","3e63c98f3f32dd6c861fccba0ac1fdaf"],["/categories/Java/JVM/index.html","34ffd0c413a90cfb5a696e1ce2c4b07f"],["/categories/Java/Java基础/index.html","e4f8c69dd3fceecccb24c5130360dce4"],["/categories/Java/NIO/index.html","38d0c64cfe4da129d5ca8ab05f561b3e"],["/categories/Java/NIO/原生NIO/index.html","3a371d3a98a9dcf2621df3d593dc77bb"],["/categories/Java/NIO/文件操作工具类/index.html","1122cb128a89b76bca62bb78b5fa2fcf"],["/categories/Java/index.html","52c764a19c784d9509b8bdf318c9877a"],["/categories/Java/page/2/index.html","afb8a6d6ca89a80c38291b4cfca020e5"],["/categories/Spring全家桶/Spring-Security/index.html","582580d1c7c2c410e20d00d0693f64dc"],["/categories/Spring全家桶/Spring/index.html","7369574fcdeb9ce1e8e6951eb32852b0"],["/categories/Spring全家桶/SpringBoot/index.html","6e91a07a37d89da9498d8bea136e542b"],["/categories/Spring全家桶/SpringCloud/index.html","3d3c104b501cf2a9e0d1c49bb3a556d5"],["/categories/Spring全家桶/SpringMVC/index.html","ac14c05e67f11e39acc6a241ba7f5206"],["/categories/Spring全家桶/index.html","0cf3df76a6ec77e2fb4ca4417677414e"],["/categories/Spring全家桶/page/2/index.html","cd2989f84709f18b55e6f3cee24a07d5"],["/categories/index.html","9fb637bef0d3e250e02d0fa15fcaccc2"],["/categories/中间件/ElasticSearch/index.html","e9d202979bb3671388659a179e1762f8"],["/categories/中间件/Netty/index.html","f85fdaff9a0d1c73853f558a9ed1fbd7"],["/categories/中间件/Redis/index.html","9b9899230f7671055f4b5b5ee3e4c101"],["/categories/中间件/Redis/page/2/index.html","1f3dd6943352347b925a89aa6302bb64"],["/categories/中间件/Redis/page/3/index.html","ca27f5444bd81d1701a5ecedf1b0aa99"],["/categories/中间件/index.html","75e402f23bb63d39f9446b0cb51ae6e5"],["/categories/中间件/page/2/index.html","dc0084aeb78d168fcc0f5450f5504373"],["/categories/中间件/page/3/index.html","3dfc6dc48e65d3c3eadf9e7345d7f94a"],["/categories/中间件/page/4/index.html","af739da90c53f790fcd9d50e6778a3f4"],["/categories/中间件/消息队列/RabbitMQ/index.html","60e1db387a923f67cbae7769ba44b0b0"],["/categories/中间件/消息队列/index.html","c95fc657f8f4c09f62c90ced79e34ea9"],["/categories/前端/Mock/index.html","c2e74ebb414de8d1776d5799f0ff1ffd"],["/categories/前端/Promise/index.html","5acb064c63240d17468c5b5db02c9aaa"],["/categories/前端/Vue/index.html","c1310c51ec306b526791361ab5211472"],["/categories/前端/index.html","7b074df0e3d1f04648a0c141052d269d"],["/categories/前端/jQuery/index.html","2380ce68c29d5d4dd8c8edaebb3bbd57"],["/categories/前端/page/2/index.html","62e48d6bc752f28f2cc32b409598deae"],["/categories/前端/原生基础/index.html","b33b619afcef92f0c088e441aee712e6"],["/categories/前端/异步通信/index.html","ea99e27493b489425c96e6c000b86ee9"],["/categories/工具使用/Git/index.html","ab7d06a0fa08bc01cf8a04d5a2271bca"],["/categories/工具使用/index.html","71deef12316176ffc065f65a1b77e819"],["/categories/工具使用/markdown/index.html","cc13199d59ca8d31a2b8dbf1b7b566b6"],["/categories/工具的使用/Docker/index.html","06dc860f97ba6cea0e6b3ec5144cee92"],["/categories/工具的使用/Nginx/index.html","8809cfc074e6b125eb867f7a4a296003"],["/categories/工具的使用/Swagger/index.html","96aaed4ac6a2a7d33651e8dbd79b84a4"],["/categories/工具的使用/index.html","9546ff1c4e0f01a28e6af28cd998bd6b"],["/categories/工具的使用/博客搭建/index.html","31825c3b2fc75341e248d1ea0aa43411"],["/categories/数据库/MongoDB/index.html","a4cc42014d75ea2afe2e6ed3cbe6912d"],["/categories/数据库/MySQL/index.html","5398bf10d2a0b1d85ce2d6e557068571"],["/categories/数据库/MySQL/page/2/index.html","46da4ac1b923bba30aa8e42a1ae6d71b"],["/categories/数据库/MySQL/page/3/index.html","d2bd51c4c284bbaed9562b9c16eda1fb"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","fa3d8e8a8a289e90acffe3686a429c5e"],["/categories/数据库/ORM持久层框架/index.html","fccbb257a8539ba3e633189f14bd0d44"],["/categories/数据库/index.html","d69801a38e81600be68f624d2dd42e32"],["/categories/数据库/page/2/index.html","1001345f2d805fe1b86ba0867eb47edb"],["/categories/数据库/page/3/index.html","cb765f6dc1eec20b3a318fb444823d1d"],["/categories/系统设计/DDD领域模型/index.html","7a7d74c798f4de17d7ec86b79199ca48"],["/categories/系统设计/index.html","b758209b6144ff72b785b82b4c2f3d1e"],["/categories/系统设计/page/2/index.html","38a5ac979b6e3c0a1d57e75ab850b073"],["/categories/系统设计/分布式权限认证/index.html","3f9517329527f04e1a26eca6b6ee695d"],["/categories/系统设计/设计模式/index.html","5c0eabba4bec2a82ce4ff6e4d98ebd35"],["/categories/系统设计/设计模式/page/2/index.html","1a48134dd63f0ea3dfbc1734f4ef47b0"],["/categories/计算机基础/index.html","b5e513148ef362ee539a2281846b3b74"],["/categories/计算机基础/page/2/index.html","7f31d686fede638922f51fa5c4d3847a"],["/categories/计算机基础/page/3/index.html","5e22037ae8041d5db49d0a12d3a11ca5"],["/categories/计算机基础/page/4/index.html","3bfdb558721e0cf876c5541f2d72105f"],["/categories/计算机基础/page/5/index.html","9835fd31b33e14692127532c049eb0ec"],["/categories/计算机基础/page/6/index.html","07d69e994b3811a35c02ef4b3ae3d465"],["/categories/计算机基础/操作系统/index.html","9318cbba07e328922c1ce3edfc55050a"],["/categories/计算机基础/数据结构与算法/index.html","51ffcd583302e998a51a41a8065ada21"],["/categories/计算机基础/数据结构与算法/page/2/index.html","bcaac6d0118edd5456106555ee11d1a8"],["/categories/计算机基础/数据结构与算法/page/3/index.html","384bcb55c237b95b73bac5b9df2e18de"],["/categories/计算机基础/数据结构与算法/page/4/index.html","2fa7c1ed8a4c70cb5b74387423779845"],["/categories/计算机基础/数据结构与算法/page/5/index.html","4d9f7ebfcccdefaeda980205d02a644c"],["/categories/计算机基础/计算机网络/index.html","3f5c70d4a5368014c49014d849c3aead"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","667136a26f8911506cb22b9f28092298"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","c635a65b55d600b4d14c7e8c4154d2b6"],["/messageboard/index.html","b2c42db07996c99c6267fbac68fa1f3f"],["/page/10/index.html","2a5c73d834bc3d28c9c26a58a807714a"],["/page/11/index.html","24130502f22df46d5e541ec52337a166"],["/page/12/index.html","4e69d9320b0c9b5140e9f8e3974ea2c5"],["/page/13/index.html","72763fd99e5ea3fae5a14d303ee3d0be"],["/page/14/index.html","16a63020178e36758e976c7d0071f7e3"],["/page/15/index.html","bef20a37499a30274f3490894bb432b2"],["/page/16/index.html","592a0bcf3d71d09820ca5684bd8f1012"],["/page/17/index.html","6c86b4b2af7409222888b076d8996550"],["/page/18/index.html","752f94aa08919c7a8e9cf3cb63c512e1"],["/page/19/index.html","5569597f8964659d53e7f8d1cdf8484f"],["/page/2/index.html","2654e2706c6069e41fd175686ac296d8"],["/page/20/index.html","4b5d4c7b021e4966455ab37bb5e46510"],["/page/3/index.html","98a10044919f2db398122c123a281ddc"],["/page/4/index.html","b555702ea39cba4e2acaf49700071996"],["/page/5/index.html","504a0ad1bb5f2079d391782b805a482b"],["/page/6/index.html","8a893b4916bc43300b2dd3f3945f019c"],["/page/7/index.html","c228fc2b3f440c761437a50b4b1036ba"],["/page/8/index.html","6e0bd3f54eed3b37ce0525e30d403bce"],["/page/9/index.html","53af44e5feab425ca75b3ffa8c236ba0"],["/sw-register.js","bd4223443b7676c6069b9b21fd57b582"],["/tags/Ajax/index.html","039aaa4de30159daceceda530410df01"],["/tags/Axios/index.html","2f3ec3b4ccca721dde6e56dd60df7b02"],["/tags/CICD/index.html","f45d3b97c2f88764eab344fac69db550"],["/tags/DDD领域模型/index.html","0e08a8352a04ebd251f33e8af49a38fb"],["/tags/Docker/index.html","aa719255f72070739dd55690d2fc9b1b"],["/tags/ELK/index.html","dcdd4502e3551ee07ab73038fdf8d3b1"],["/tags/ElasticSearch/index.html","f0fbcc510e8c9075e29a678fda4002ee"],["/tags/Git/index.html","be0c35638b67ec621a51a176c381426a"],["/tags/H5/index.html","2ff1429c6fdaf21bee123e6870387fc7"],["/tags/JVM/index.html","6036f9dc188331d7d173be1655a4a1a5"],["/tags/JVM内存模型/index.html","2ec44b8deaa1e41dbc32eed5f51a0c67"],["/tags/JVM执行引擎/index.html","4c191d9c763cab052cdcb9fe18e6018a"],["/tags/JavaScript/index.html","ddf0af6abdb024c6fb787f1559aa1331"],["/tags/Kibana/index.html","611c14e005782104ef436c11da48f697"],["/tags/LeetCode/index.html","038dc62806a5944357d47e8d879eabf1"],["/tags/LeetCode/page/2/index.html","0047c8e21d26c8e330e6748c6d428a7c"],["/tags/LeetCode/page/3/index.html","f5763dd9f71b74d9c5154e77a14ff7e4"],["/tags/Linux/index.html","f332b2237bf09e4e3ddbd16df18092d0"],["/tags/Logstash/index.html","0421ca7f9e308c3e1c33bb2312d15fe9"],["/tags/Mock/index.html","a1236e0a80d81d66c62c2499dbe9dfc3"],["/tags/MongoDB/index.html","19c67bc928e3157e7218a3ee32147ec6"],["/tags/MySQL-事务/index.html","ce4229da23f9b322da736e9e9284826b"],["/tags/MySQL-数据类型/index.html","b8623029cad8a9ef7584cddd980b17e2"],["/tags/MySQL-日志/index.html","983bb0f2dbba9053b17aca47deb7ef9d"],["/tags/MySQL-索引/index.html","182dcd6294f13a0682ca70a274e69745"],["/tags/MySQL-锁/index.html","5def025e28140b021839b9eda9800423"],["/tags/MySQL/index.html","641138b4677c2517c305698a8b598b4b"],["/tags/MySQL/page/2/index.html","db7e1f18110010cadb58a87ac67ee1f6"],["/tags/Mybatis/index.html","1ad4bd482e2d6d7572480baca867c15a"],["/tags/MybatisPlus/index.html","8aa398d0d95fece00090360009a681db"],["/tags/NIO/index.html","ee1962fecbb9bf853b54e6f59f0aa0c5"],["/tags/Netty/index.html","5d7718d353352956ff7b71fcee461379"],["/tags/Nginx/index.html","eeec3b605abb3595fa8259bbdcd6d8a7"],["/tags/Promise/index.html","7a3195495132943fc6a397e8cf7c71d1"],["/tags/RabbitMQ/index.html","a144b80a04f379a50049d62dfdf6631b"],["/tags/Redis/index.html","c0d1b50781f396078c93cf3f03f5fee2"],["/tags/Redis/page/2/index.html","fed2ee893d9d7f32ae06011b8237f88c"],["/tags/Redis/page/3/index.html","ca39f8fa6763f5d974e61facc400f37f"],["/tags/SSM/index.html","b5a8a8db7645cca74152946933546b1e"],["/tags/Spring-Security/index.html","f5764a61e7cb70872d00ae564504b154"],["/tags/Spring/index.html","46a16329c83bbeb8d7da84507dc05c1a"],["/tags/SpringBoot/index.html","98fe5bb6e03665a0e125b85e795b7890"],["/tags/SpringCloud/index.html","f7427cf28cb9a8296f51a1f0f22219ae"],["/tags/SpringMVC/index.html","debbe91b2e8a21a6f74684dd9f55a5ac"],["/tags/Swagger/index.html","77ece9e485eb628f0c98d15e6dd0245c"],["/tags/hexo/index.html","cd1c649b66744f95d1fbf07c85b25c52"],["/tags/index.html","b460aa26df89812993cd371ba2c3b7de"],["/tags/jQuery/index.html","a116e01bd78cae69a34f0b44f087f081"],["/tags/java/index.html","9eee4512d472917bb8b3ee3f7ad3935a"],["/tags/markdown/index.html","1212a7f71c677df95bd746320334bd14"],["/tags/noSQL/index.html","39794b260b31332ed93078065955130a"],["/tags/typora/index.html","a159620b18eef7a4dc39d47c1e3c02f3"],["/tags/vue/index.html","d766dfe9fe9b3491afe5db458b822a9e"],["/tags/享元模式/index.html","04152526aef285b2d03a22d2c6e9bc83"],["/tags/代理模式/index.html","f3b9fbe889c0c73268b1517a306e08a6"],["/tags/内存管理/index.html","b39e69678d1f932f6181699654d6c0da"],["/tags/分布式/index.html","58860e15f07e6567449aa64b551c94c6"],["/tags/分布式系统/index.html","54f131149d39ef9ee459864800e8865e"],["/tags/前端/index.html","66ad7a3c8fa9c63500dc4c0fbfd273a5"],["/tags/前端/page/2/index.html","f84c6c2c94e551811bce412adfea6c46"],["/tags/博客/index.html","ab99ffbb37ad8a0adf3880564da40e10"],["/tags/后端/index.html","f58cd56f3d82fb95971a7904dac006bc"],["/tags/外观模式/index.html","19bfc28d07eb758aac9cac63b93cf459"],["/tags/容器技术/index.html","3f9064d74de244714cf9b150ad3c1600"],["/tags/工厂方法/index.html","2a6a4788c1cc4abee1cce4b20ca6f8d8"],["/tags/微服务/index.html","26e560a07e99bed2938300441e2353bf"],["/tags/抽象工厂/index.html","f775ca6abbbdeb285031a8253ac33e72"],["/tags/持续集成持续部署/index.html","024868f4440653b3b90ecd717ac7663e"],["/tags/搜索引擎/index.html","1778d837c5accae80094b52d381ad98d"],["/tags/操作系统/index.html","db87c2e9f570e992f272ff6cb995c294"],["/tags/数据库/index.html","8b4506179cb38283ecd02d1f03a1b956"],["/tags/数据库/page/2/index.html","db09f106278195fe2783af26cfabd2df"],["/tags/数据库/page/3/index.html","4e6dbe7160535c04ff07de11b484c86d"],["/tags/数据结构与算法/index.html","b62bc8f76f2df7b92cbba1f722cc465c"],["/tags/数据结构与算法/page/2/index.html","22c8652376034fa9d70916b08486ac7c"],["/tags/文件操作/index.html","c2db45b2b678c4ab13a94f918a3e92cd"],["/tags/日志/index.html","b27116ee955358aff0c45844ccf2af5c"],["/tags/服务器/index.html","1dfa6ed4e657483602594d1df453b70d"],["/tags/权限认证/index.html","abc8fd4abddfab1e00d8dbf46703790d"],["/tags/桥接模式/index.html","36e898bce82f53a78e61d6836264da4d"],["/tags/模板方法模式/index.html","09de993f37fa67cfe1e78dfe61100552"],["/tags/死锁/index.html","7f76a7054da5dd3f887f97782cc401a2"],["/tags/消息队列/index.html","046201807ae7a54e2f535e592da54054"],["/tags/版本控制/index.html","9e47ac24a9a1e388a54708b4642fefa7"],["/tags/策略模式/index.html","40a3eaac139634d5dcd2ddcce823fa13"],["/tags/简单工厂/index.html","7f1c31fb61739af1f94f5f22b285a53e"],["/tags/算法/index.html","c24e9bd8cc8f2f14ad2066cd26517573"],["/tags/组件化/index.html","0d26b53347ce48c30dd245eda94b60e0"],["/tags/缓存/index.html","99218a3332edb848f299469ac412ac70"],["/tags/缓存/page/2/index.html","c80f86845450592655fd3fc345919660"],["/tags/缓存/page/3/index.html","81ce590677d59bfabf1fe91241af0766"],["/tags/观察者模式/index.html","dd02ff5ad58c17790f243384cf804d1b"],["/tags/计算机网络/index.html","eab4b38d0f46bb33626bfc060f9d5f7a"],["/tags/设计模式/index.html","fa1ab08a7c8113588ce72f68d6f4b954"],["/tags/设计模式/page/2/index.html","756ef91ef419b3f2998a7cb1410c69c2"],["/tags/进程管理/index.html","1a9ca987c943556aedf7fd8d1e5c6761"],["/tags/适配器模式/index.html","62a42d2fb18c3ec0173c9751289d8189"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
