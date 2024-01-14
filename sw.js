/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","419f1fef96e66ffc3a81621b1f2f5a19"],["/2021/02/22/工具的使用/博客的搭建/index.html","35fd5f23a328811c18a5d295ac7e14e2"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","e49484b9c53d0b737a8ce66883012fd4"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","ed06db959c8ba825504b91347f1b9362"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","891d7341d17259b449e5cb68f4921c43"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","2d1d0ef9fffa7148acf0a10212743368"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","99733d43ae4ee2fb8c0f8e7008f79c8b"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","e96e790998937f8ab1a90892fee5053e"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","911c60464255cb6df98f048c59474817"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","ee148c698f7ef0edfe4bea2ff7f1dea7"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","be97aef6afbad97865f405d871e95993"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","3a62c93fefdc34e968fa09c77b5a6f9f"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","56d87c4ac4d190663318d0222bfa9f32"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","8c555d11823823d6f1b81324d58e13e4"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","9be067114e0d891c883bae5651b39ed6"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","0ef3bd32de27585001a8c71972850102"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","493952672e2a502738251206036b049c"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","515751afc50625ac1890ddb0771e0766"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","2703904c0aef864eff33eda57e947e52"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","8fead58a3bf5aab41e68ca9f5ccda0d3"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","fc249eba65364b50ade63500ac2faff9"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","8a5acf71f7a9de15c8eb2b429f939c59"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","ac2ebefd330e6a720e4b70a8bbb2c0f4"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","25b35888ec508c1c315cd9df01a1ef14"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","f455a7309fc9964cd3eb602224383f25"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","083c86ce0c8c0e8bae6fc3d6586c388f"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","66e9ff093ff4e63a4dde7dc4cf259cc7"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","f316154a3f5ac4742f98bf34823e01e8"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","3723edb5bc06251d586c16fd1fff74a4"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","018b33c65638a556d1a085de91237478"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","c43de02cca6e8bfe4aa4fd27142548f6"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","1cdc43c8d776cfc5e07a1c5c33d3863f"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","d1da71dce2bf5edfd072d0b9d4caed09"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","f2ed65b0322faf599c96d6f68b502502"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","c3945bf958f6639f84279011ca069262"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","1783196c385c6dea41c729b3f7a976b5"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","a290a2e653b954d99e4ead6d99724c40"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","f607290fded7196211705b286e48dfab"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","c98a5456e263b7a2bf8b05529a6d5834"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","1214c5c113d1064f7b440099c306fa76"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","9635ccc8837c7b53e3fba37f0ec04dc1"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","701c339ae964fe8df16e92d2884f0c7c"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","6fc723c0104d6b0d36ed61400c3b1d32"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","9a369477a8ca87d5e23bbea1df388cbe"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","41839ef3366261217b14b385b99b68ab"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","385c0ad770dee2a9199e233e8f296dba"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","444e52c83c4242d1ea9a0a457a45759d"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","a76b64238d5f499f934b311deeb5b3ac"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","6c7e4652dd25579435c5c27d93391299"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","bf595b801b9ede877edb43587639d227"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","df8b91d2c11e8e3bee55bb00377844e5"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","e41a0f993b6e2576f4b967707b828d81"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","0de489f58df387f1c7427faa2a97b94a"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","a09bb4abb6af8cc004ed3c18d497057b"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","21e9c4342a2bacb4c74475fb77f453a6"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","41488d46e1db7f47ade48fc07006e22f"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","a8274a73fa741519ae84936b334db67f"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","49280ebea5ea747d073cb9c91d397747"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","8f2426ce52f7806fa80bf982a7d201c8"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","a66eb83b81177277ff5b463678e7da63"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","d3f86c92164861e6698aae2bb1e09282"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","8ab6abdc9514bebffb8c1133ec373dd0"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","d54cb5d7aca25054bbbc08ff67c86a1e"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","c6764bfff685cbe36afb5287dd9641af"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","f213d45982fc5942edfdfbe558a2c3c0"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","1dedfa947e64ee25911f6168b808f34d"],["/2022/08/17/前端/jQuery/index.html","d365b92638d514c0e5ce71b2c205cf45"],["/2022/08/19/前端/JavaScript/index.html","ad95bab78e1acf84ad0fc40281770c1b"],["/2022/08/22/前端/Ajax/index.html","524e6293dd0f62286a568eaeed5698b5"],["/2022/08/23/前端/Promise/index.html","1ce942db0076f3b4187339067c8b4123"],["/2022/08/24/前端/Axios/index.html","51216d474900e72c4fd7d55e8c558022"],["/2022/08/25/前端/H5本地存储/index.html","dcccf785aa91817eb1553592d9bc4760"],["/2022/08/26/前端/mock/index.html","e954385926f6a99ac036f8302fae5377"],["/2022/08/31/前端/vue/VueJs/index.html","a0e989b6b15e0f7f46cdf08151234e0b"],["/2022/09/01/前端/vue/vue组件化/index.html","2ef18e1b146317cfec87f4ec89f392a7"],["/2022/09/04/前端/vue/VueCLI/index.html","0860a99c0efa5876a6905afda273fb29"],["/2022/09/07/前端/vue/vue实现动画/index.html","3be68e0eada374faf5205d39426c0684"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","d3a7951a11d852302e97af7bc02fa6b4"],["/2022/09/10/前端/vue/Vue异步请求/index.html","f6cb504bd7b561c65072d9e090385128"],["/2022/09/11/前端/vue/vue-Router/index.html","bcbdcf51453289c42216caa2c162bd33"],["/2022/09/13/前端/vue/Vuex/index.html","93d9c8e05b9f65bb90083eb06811cfb0"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","4568c2aee8854a63b10462374572fef6"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","f87f5f2aa1cfbbdde7e9128887d43da6"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","2fce27c2303fd9442822eb1f8ae42372"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","9c004c4e50cd3642e7598f30b778a7d3"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","3b4656a04ad49d73589ee76a818e52ba"],["/2022/09/28/DevOps/Linux/Linux/index.html","63e15e01ccc703f96215248d90fb7f4e"],["/2022/10/02/中间件/Redis/redis基础/index.html","700ae7495aaabf679b70c8d2c2c13756"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","c580aa4d8a268f05b856f544895fa107"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","61e89a4dcb88263718213d57b9b47439"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","91b7c6e9f7102f5efafc13c20d833654"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","4b7ab7a8d0c95fd7735beaf8d4db6156"],["/2022/10/17/中间件/Redis/Redis集群/index.html","784fcd4ad38ca60e3b060b947bf49de4"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","fdc9597d9023f399188b5d10af5ad427"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","d46f5a6b11fe1899eb99c60be3a73c45"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","73035fbab0abf2bb63f2d697754546d3"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","a064562cb9075e950a11c7d24b7e6748"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","9ca2d4ddd576ed801a8041b94deb8daa"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","55ee5d7aab1d124c446b9748a588d6e5"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","d3dd4e94b06e1153d2c9168a5fb6bed1"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","f0420551117977b6de04c5d804d46b35"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","d1a02bd7fa8f76a9921936fcc226aed3"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","f55fc5e3365c1dd0ebd11d897075fc9a"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","dfcac7b0aaf8686ba6315a6285716606"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","6a3270aa0a8254a0217d5b388f442fce"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","a96f2b15ea9849ef037b214e7045156e"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","187b75a82a706876366db7310c296740"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","31b616488ab9e3c4d818543d121cab2e"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","2b3b24f7739ffe8ab6a0c98f3ff892bf"],["/2023/03/10/DevOps/CICD/CICD/index.html","5607619dc15470eed887dbfb2ec22dfb"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","11cd6b7441968d964c7d706b2023c362"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","6d1b668e25a851b839f8073b3ee81e06"],["/2023/03/13/Java/NIO/NIO/index.html","1c059d53d67ecea0fc1b6cf16fef7ad9"],["/2023/03/14/中间件/Netty/Netty/index.html","abb70115a414c6ecd7e307051ba9db49"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","4ce75a476ecf67ea68c6fdb26edb4d64"],["/2023/03/17/系统设计/分布式系统认证/index.html","8ac848c00c1d20271cb3704277f1df15"],["/2023/03/19/Java/JVM/JVM概述/index.html","239ae504bba25119f3e4074ff1f13855"],["/2023/03/23/Java/JVM/类的加载过程/index.html","60f83970fa440510ed4ee939b66bfbef"],["/2023/03/28/Java/JVM/对象的实例化/index.html","8d946347c838eaa48b2ffae9cf68b053"],["/2023/04/01/Java/JVM/运行时数据区/index.html","3c914bb69b0e1fed5e3bd0e145fa294b"],["/2023/04/04/Java/JVM/执行引擎/index.html","8d2845689963d5086768a80db0d141c6"],["/2023/04/06/Java/JVM/对象引用/index.html","cc77e68ceddac5b275ddf239cbbd37ba"],["/2023/04/09/Java/JVM/垃圾回收/index.html","5fcc45319e835a1e9410034b1e48e585"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","4be03bea321baef9864cfb573b718885"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","83d20f744a1067a8caa62e08968457ff"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","fc638340b440228c330441be76b827b4"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","87aa0b14938e5c0199b1774bc32c0c10"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","6efcca7efdfeb99c97b0c28040595cc5"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","a4beced1874cf364c8c7e39b7b9696bf"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","9324127685eb2a69b9cf1d8296d68ec3"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","d6b6cd29b47a8817a5b0dde623ffa33b"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","18918b726eff52549175aeeb12b09853"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","b8f3723289bbb6da608fa3f8c8bfa588"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","2cfb178ca6714623582d08cdaf765c1e"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","af44922480402842f339b21e98ea8318"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","f7f8211ce1d150b5b2666e7888ca1ad2"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","45d4f6f953c18c3158c71e9e6e96005e"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","a4de755e2f9eb0d753f3a90fe24be0aa"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","27cecc716657fcb645190e608c043cc6"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","640ee30ced57575a69c72541ef9366fb"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","1677cc27f03b0220db933e363e5fcab6"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","3b05ab8fdc2e2730cdedd43979686146"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","a734f9804cd563934ad9a02b08396f07"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","22e753cbed1b424d35c0af899b543978"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","687007359672dd83d1e80016f9c9816e"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","7505fd190cfdb53ea00d40bf4d0ee76b"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","5b1c4366c0bb73bc42702c5842dfeb72"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","0a81d400eb977410fa6387eac76f8395"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","40247e0910edbbff9fe1353cee28e198"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","4e023789700140ac4e033f31ede73a98"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","5b1683e950f8e7856f3a90ea6cee13fc"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","78d342033421f1b62e8305f1a5025314"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","07b41166ca1342a0e95e3ccffdc99423"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","a3bc8b54411ce71a3bb64959d322a5c8"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","6f3facdc41cea4d56a956fd7e4ef2f2a"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","ed20fa282d2fdfc76c68e88df62cc01b"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","917ec6d96e6fbfdb114f3439f3bbfb25"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","f010a7add6ba36424c9cf5d79dda2a37"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","c55f25dfd6e00042c2727820af57f18f"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","b09c34ef3344497a822116124b3aebef"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","323bf07d20f96ce5d4f1193c9bfaa6bc"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","e2dd002619e9890c2bc43abaff968616"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","3e78a35f4abad8587a643c961db54234"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","b415391d3d97584db3f7f94eed17124a"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","a7a90a44b7ca1774da74e070870833f8"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","ed954ed05bd6ad389d64550f427c8a05"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","8c869c2af53ace9e73d236d760b5c284"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","2673c546a5514bc120381498fb9f438d"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","95d5da3c1637e38e748b99d30965a04a"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","638d3cd5bd583f3b5ccdd6b3dbe6f38c"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","b1062d8d97a0fb7e4828799e1e27ec24"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","37ee9aa3a563ea03497a8d40b0afca5f"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","a3a66861b5e1ca024ffbe98b9faaeda8"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","3b0069f1d1d76c5e7d73ccaf46977f64"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","bc815f5ac89644f437802d84d25f8562"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","1c59266c8a1ff11968e9a963dda75acb"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","3dcdc12686492975bfd01b3e782e3c64"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","ec819b0bc57a105a4473d08f0edccc12"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","2f1bf99b5de7bdf5cac0f0eb9fbe5ecd"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","3fd359cc7c457e1d6f11ffdc35c9e1f2"],["/2023/09/04/中间件/Redis/Redis事务/index.html","9ae0d9b6a9747b18e387455a7a1e8516"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","27878a929397e1ae22dc2b68eca582ad"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","e60afcf3ab1dde7eceb3e6d44c24432c"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","1fcd45f26fb2e9619cbcbd067ae7b9e4"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","373d799f3e0f9c4e81a1dffe23abd95a"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","7094f10099a5daaf41c3794d878ca3c3"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","2bdda514c1d25c6e7e4aea53f9d794d3"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","c3ec1888eeb6694ca4780a89832babc5"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","60b5a367d49d4b54276eb1a9ff6b90a8"],["/2023/09/22/Java/NIO/零拷贝/index.html","52ad369f6f7d719f125ae475ff760cfb"],["/2023/09/24/系统设计/JWT认证/index.html","f6b03cb2fcf2cf17329f4b6c382fcbf7"],["/2023/09/26/Java/NIO/Reactor模式/index.html","202deb3e2d2aed2e01f96466076e72b6"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","9a24a9a516cae49b65abfc0f51f586c1"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","e63165feaf59a34623e5f94de3804594"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","afbadde17257a09278f8548f09dc3688"],["/2023/10/09/Java/并发编程/共享问题/index.html","cb19a5eb4e38b6a433458de2e5022c33"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","806fdfd657e739b897a515aad56b1efb"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","e76326cd4d7a10d6ad650590626fce67"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","cd23d2d448958cc95cae0464ff9f12dd"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","d40b1ee41fa70bffe241d68ae9a7d16a"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","da181352feb3bd1656bbe5ea913c0c6e"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","2ab5e0c0cb823095337b42d24d96062f"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","71ad2407e9975d94d0fed163d86cbc11"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","a36cf243e488b43f561a7f5f8b49381d"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","8086a30e906bc00695169633b42cdeb4"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","a0816e4e2f3843bccf28206dadcaf8ef"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","a955e2292599f731d7b52e4e0a53c810"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","86f15cdfb776b2c9ea5f597ef680629a"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","64a20852c207a107b320c4501a4d5506"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","4f546a33a3df9b7c3ea657eec666c071"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","1c2b5f91f9174b4a936f168a4b7e87e5"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","d815542b41059612a2a554637bc737b6"],["/2023/12/05/系统设计/开源协议/index.html","cf19a71b3511f409a61489f697caaa87"],["/2023/12/09/MockMvc/index.html","08b6ad7c0b237212cfdfc30895097563"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","527fe05f89c99a82925142920442a446"],["/2023/12/19/MySQL读写分离/index.html","ae3c2135c854e08799b31269f0c8e387"],["/2023/12/22/MySQL分库分表/index.html","f805da7326c9d98f604c57c15fcb4559"],["/2023/12/27/利用NoSQL优化数据库/index.html","e3df23ec982090b69d259db5524d6fdf"],["/2024/01/06/缓存概述/index.html","0d4073928c35fcfae443b03a6ee3f3d4"],["/2024/01/11/缓存的读写策略/index.html","5aba6bf0bee12a15ffc184af55368b34"],["/2024/01/14/CDN静态资源加速/index.html","16fd304ea580b7232ed77fd5ecfa3b97"],["/404.html","76ed4b1be794e92272fd7b873ed65afe"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","683588e4c46723782578d36e3ee81ae6"],["/archives/2021/02/index.html","dacaf64a7d8a0f7d5f5d04399b1f44cc"],["/archives/2021/03/index.html","9ef1ef87c2b1fc435630e4d160fd1908"],["/archives/2021/03/page/2/index.html","e26a8e3f62825821bc0bc659b43a7319"],["/archives/2021/03/page/3/index.html","e7db0cd8cafc53b115c424664caa9671"],["/archives/2021/04/index.html","3e02a41e11dca52f1fe67e02f84f7c06"],["/archives/2021/04/page/2/index.html","2438183ff7c280e1097a7f6e5fdd1dff"],["/archives/2021/05/index.html","58d2742f6cfa009b1e6f8300f4cfea93"],["/archives/2021/index.html","dcc05bb626aef62c89747ea6daed8068"],["/archives/2021/page/2/index.html","60a2d8ce728050138e1c6cddbc048fdc"],["/archives/2021/page/3/index.html","129db77a1faf25595c36acc647aacad8"],["/archives/2021/page/4/index.html","9f5c6afbe5bd8bd5f1cfe12cf8f785af"],["/archives/2021/page/5/index.html","43132075cc48c559236788ba4e334f7c"],["/archives/2021/page/6/index.html","5e08d5dc132381e1136ceac3ea6671c2"],["/archives/2021/page/7/index.html","872e918cca7082ecce14b2d8d12ede35"],["/archives/2022/01/index.html","095aae5b5e508582650f1ace962a0b1a"],["/archives/2022/04/index.html","dea669aae82ccb2c7504521f93cfce4d"],["/archives/2022/08/index.html","37441a33fcc31e60ab4701708ec44045"],["/archives/2022/09/index.html","1309b0ad73e12d24575af6f9e87a76b0"],["/archives/2022/09/page/2/index.html","ee4146624031934957bb6939cbc6a8a9"],["/archives/2022/10/index.html","1fd1cfa08faf450a1688517c616d22bd"],["/archives/2022/11/index.html","fd5607601ce77894708acba95207b2f7"],["/archives/2022/12/index.html","a3e97db7c9ec6aa761b15c9d38df515d"],["/archives/2022/index.html","d242cf8095c1fa476a8b4b7f824a4a09"],["/archives/2022/page/2/index.html","413cdcf98067b4c0c88c67df473cb89f"],["/archives/2022/page/3/index.html","709b752c0f2ff3a0efc16d791964a389"],["/archives/2022/page/4/index.html","495361ad29934c9cb5de665a22b2cdad"],["/archives/2022/page/5/index.html","2660da601c116ff76c284f294558aad2"],["/archives/2023/01/index.html","855e5c0629e773ea0b86d49b850cadbd"],["/archives/2023/02/index.html","1672e0d68850fa2e1b39651337e77b2b"],["/archives/2023/03/index.html","66d944b736a8bba9f229e0652ea03a6d"],["/archives/2023/04/index.html","0c8e6cc0cbb60f491feabe60cacd77d8"],["/archives/2023/04/page/2/index.html","8354144cc485309a067c9ff8c50c38a9"],["/archives/2023/05/index.html","6733f7979bb63006ea36406e44a07187"],["/archives/2023/06/index.html","e0270d9f67eb1569b7379e55660a5477"],["/archives/2023/06/page/2/index.html","fa384df47b0eff19c956098f063d4ffb"],["/archives/2023/07/index.html","5a5b42bc6fbb3fd7ab9c55d12d4671d4"],["/archives/2023/07/page/2/index.html","db5596e6ea0fcf984f3d2b322e5aef3e"],["/archives/2023/08/index.html","c4a56ef9e1ed2f39bd92a2a4ac5deca3"],["/archives/2023/08/page/2/index.html","e3c2f6b8c43ba80165f5c2416507141d"],["/archives/2023/09/index.html","cf76d6740a404de8e9855433602c12a6"],["/archives/2023/09/page/2/index.html","134ab17b6c801d6f99854ac0ad153619"],["/archives/2023/10/index.html","987406527dac89470cb98959c51224ba"],["/archives/2023/11/index.html","07c399bcdfbe7a7954b96f1cbf0b314b"],["/archives/2023/12/index.html","17f65fb3c97665fde174f19459aa23cf"],["/archives/2023/index.html","7a45b8520764447f93e896dab1ada55d"],["/archives/2023/page/10/index.html","ec94a16faffe405d425ac36e3f9f2f75"],["/archives/2023/page/11/index.html","b46cb548f21c42598ed943fe0831f4f8"],["/archives/2023/page/12/index.html","d5449b90f68bc72be5720c52e7436068"],["/archives/2023/page/2/index.html","854edc93106c73978d20422728b999cf"],["/archives/2023/page/3/index.html","a61440d820333a03aab35b57b40e79ac"],["/archives/2023/page/4/index.html","8b2df1cc90b064caf39ad6429426698f"],["/archives/2023/page/5/index.html","76a72487adfbbf037742af97a1e64044"],["/archives/2023/page/6/index.html","b3e0218965cb3785b802140bb7642acb"],["/archives/2023/page/7/index.html","abcf1fb19127eed33529871e3980839b"],["/archives/2023/page/8/index.html","977b8a57b5d531d54629eb87e5166857"],["/archives/2023/page/9/index.html","2127670d7fb8781a9e6b278329295f4b"],["/archives/2024/01/index.html","c08b71642c739f58b238d9b1e67f14ad"],["/archives/2024/index.html","67de81a06feba002ca9b0407dc174f4f"],["/archives/index.html","db08a2d3417b0b9b56332e9fb0272c28"],["/archives/page/10/index.html","2afb37845cc3cadfb69978290351cfa5"],["/archives/page/11/index.html","4b3d1ef2b3291611b578f7205e5f8abc"],["/archives/page/12/index.html","437cb4936754f333a607fae2b7be7262"],["/archives/page/13/index.html","209d3260c742d5bf68cf5bb9ffa987ce"],["/archives/page/14/index.html","b3d99a9e34370141d79a74c635398f8a"],["/archives/page/15/index.html","bc2c7d9db479ae119043fa82a6f6600b"],["/archives/page/16/index.html","b34473c91441b031df1762d02aebbb6f"],["/archives/page/17/index.html","082c43ab48fa88f793390910c10e23f7"],["/archives/page/18/index.html","559158fee3952cd60d124b93fcfee8d9"],["/archives/page/19/index.html","e2470bdbc547f147a1ee62a96975f25b"],["/archives/page/2/index.html","215f61ded82144ff17859714fb15c8d0"],["/archives/page/20/index.html","cea47693ebe19ff13a338d1e630b000d"],["/archives/page/21/index.html","9b7b51f5f46f9c50cde398e9ea0f7b36"],["/archives/page/22/index.html","11c7264fd6cf0d950b540bcec7934c40"],["/archives/page/23/index.html","f500142bea2437c7a8740b4fd76f65c9"],["/archives/page/3/index.html","d71ed51e4bfec4e216eb99554f8f3206"],["/archives/page/4/index.html","acb06fecaac9bf3b9f1c1b5e8d6ec0c5"],["/archives/page/5/index.html","fad9de4737c9af4de85d7618b4c7f7d5"],["/archives/page/6/index.html","08a0bdaeb585b7a5027ba99dbe8594cf"],["/archives/page/7/index.html","0c8bb90ebc96ffc2190c1d838e3e54e3"],["/archives/page/8/index.html","9a7d905d33aceea047acfa8bafaa1a2c"],["/archives/page/9/index.html","ef390e901b5db9041de15631b052dedd"],["/categories/Devops/CICD/index.html","3ef797760b0ceb2745a2487f30260464"],["/categories/Devops/Linux/index.html","25863628015e6b7e2d04a073887a712a"],["/categories/Devops/index.html","a5559793908fd71ffc72613f95d128d1"],["/categories/Java/JVM/index.html","1029b47aa9e842231242d063f0aae49f"],["/categories/Java/Java基础/index.html","3de776fd4a84f81ef4e313da08d48e79"],["/categories/Java/NIO/index.html","e37fcf09f522e0d0aa3a1acbec64086c"],["/categories/Java/NIO/原生NIO/index.html","502d64f714795c05bce82ccb251f7d6a"],["/categories/Java/NIO/文件操作工具类/index.html","c6874e75eed5593a173737dd8e8a4adb"],["/categories/Java/index.html","dbdde2dfa0b0e36adabfb51e85d6c31d"],["/categories/Java/page/2/index.html","1a9cfd5a8abc934b9f14e7c1cb25528a"],["/categories/Java/并发编程/index.html","2f8950ddd715d8e918c7c6db8a98c399"],["/categories/Spring全家桶/Spring-Security/index.html","2e81e96d8a54b88ef7d26e7b596b18af"],["/categories/Spring全家桶/Spring/index.html","a5d158a77fd8d5aaa76759c4ec1f3e9a"],["/categories/Spring全家桶/SpringBoot/index.html","dd6d767753082d66dfb1704e0f50b280"],["/categories/Spring全家桶/SpringCloud/index.html","9c12fc0f0bebcc55ac404f3153630c2c"],["/categories/Spring全家桶/SpringMVC/index.html","0105ba58f109ec590777ae41793032d3"],["/categories/Spring全家桶/index.html","65c9741b1b2532b60ca70d0cf0eff73f"],["/categories/Spring全家桶/page/2/index.html","294edbabee46d23cdf3d1dd751b4955c"],["/categories/index.html","b76e6c309ae90c657b8e43fbffdd9384"],["/categories/中间件/ElasticSearch/index.html","3a7ac86cfea6c712fdbe10e5010b8802"],["/categories/中间件/Netty/index.html","015caa8e48965e09a834400d7f277df6"],["/categories/中间件/Redis/index.html","244e16c0a18b02b63e43245585125175"],["/categories/中间件/Redis/page/2/index.html","cb47f061e88bd10588dc913fbd4051d7"],["/categories/中间件/Redis/page/3/index.html","53b106f57c38cc7cd2879d0c9940f4fd"],["/categories/中间件/index.html","18daecdf3de4dfe68b6eab978513d7c5"],["/categories/中间件/page/2/index.html","e1e7edda33724ef13c5a806233b1f2bb"],["/categories/中间件/page/3/index.html","c3eb338aea8a8dc5633493a3864e1011"],["/categories/中间件/page/4/index.html","06d46585190c75a3cc4684932f1411db"],["/categories/中间件/消息队列/RabbitMQ/index.html","634a42ef39dc0a7ca8c617f79e668868"],["/categories/中间件/消息队列/index.html","0a832ec1e16687fdad0715c45304ba2d"],["/categories/前端/Mock/index.html","24f68796f1279969debb828d0fd8d9c6"],["/categories/前端/Promise/index.html","97abbd40851e57c554346f20dfd8f89e"],["/categories/前端/Vue/index.html","43269f85384edc449f5131cd53270eb3"],["/categories/前端/index.html","1217efc13b58255cc1f5e10cf534adaf"],["/categories/前端/jQuery/index.html","53bb865db7437fe6d9d3a0a14d411849"],["/categories/前端/page/2/index.html","6598667e559d0b7cc3ddbf7093621f22"],["/categories/前端/原生基础/index.html","90ffae37dd9a66b45c42c7a7110f7415"],["/categories/前端/异步通信/index.html","8c561ac3be1c01452b833054490a001c"],["/categories/工具使用/Git/index.html","c3118fd95968c54568dea844483d5ddd"],["/categories/工具使用/index.html","8dbffe7f48bcbe6420c397921127f1ce"],["/categories/工具使用/markdown/index.html","184f1687c020efbeb7aae4b7da96a58d"],["/categories/工具的使用/Docker/index.html","c125b703854ecd20bbd95e64429c4db5"],["/categories/工具的使用/Nginx/index.html","42f53386e1f7527604e970866bbb60b0"],["/categories/工具的使用/Swagger/index.html","d117e2498416892329d5be33d638ba8d"],["/categories/工具的使用/index.html","6ba6329c66baac8b12db27dc2e78722f"],["/categories/工具的使用/博客搭建/index.html","e07c7f238a212e390b023d77b85356d6"],["/categories/数据库/MongoDB/index.html","190131b1cb88b64e66d651481a23e039"],["/categories/数据库/MySQL/index.html","cb9f465a45d5f7d0b56f5efba5610db6"],["/categories/数据库/MySQL/page/2/index.html","38684098781a28f698ad4f6b05890431"],["/categories/数据库/MySQL/page/3/index.html","795509554ab2fcbcdfe83e7870ad9b75"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","58eb0e7234de893fc2cf0154873ccb96"],["/categories/数据库/ORM持久层框架/index.html","14a69356ba69872b7678f9ce327d9456"],["/categories/数据库/index.html","5dbefb0ecfc2ea5b70fdfbd797794c5c"],["/categories/数据库/page/2/index.html","5bd02b37c93b221a2735f406603e6bd1"],["/categories/数据库/page/3/index.html","6374b1181be5ed1aac42c96eed998bcd"],["/categories/系统设计/DDD领域模型/index.html","e5f7c7fcecc3ea7f4fb8737ab0b1bdc7"],["/categories/系统设计/index.html","a5fa6463070d0e02e2c3e5e7748504c0"],["/categories/系统设计/page/2/index.html","269365271d81e082c0ed8fdff60ba0cc"],["/categories/系统设计/page/3/index.html","2743f7fbf7f55848801dd4779cc0090a"],["/categories/系统设计/page/4/index.html","56e6855ddc22f96ed47c1cf5d76dfc6b"],["/categories/系统设计/分布式权限认证/index.html","8a9a17d545bd2bc411c24f7e3895a0d8"],["/categories/系统设计/分布式系统/index.html","43cac640fe780adb3116bc6f974ab480"],["/categories/系统设计/分布式系统/page/2/index.html","2dcfae61200c75e9c8343dbe6431dafa"],["/categories/系统设计/数据库优化/index.html","41b9ee99decefaa6cc591455e3722b27"],["/categories/系统设计/设计模式/index.html","24a91e04952a2e972bdf6694819ce616"],["/categories/系统设计/设计模式/page/2/index.html","caf1108e0879e721f75cf61d0291f6a0"],["/categories/计算机基础/index.html","97ba8db175792b94cac502be5f2bd106"],["/categories/计算机基础/page/2/index.html","f4e020702f1be829fd977ea10a3b5639"],["/categories/计算机基础/page/3/index.html","28f151fb28546f73143ad5d89dc6054c"],["/categories/计算机基础/page/4/index.html","d0ead71b4574011ccd318ea01813a4e2"],["/categories/计算机基础/page/5/index.html","a9b6e4a93d84754884be9e772741b700"],["/categories/计算机基础/page/6/index.html","ffe37d56b742cd43beb53c9d495bb26e"],["/categories/计算机基础/操作系统/index.html","b7aab6d6442c8e01473e1f6fa11c70aa"],["/categories/计算机基础/数据结构与算法/index.html","4b86d21374c91b4462016fdad94a8d54"],["/categories/计算机基础/数据结构与算法/page/2/index.html","b2ed65f3e44c2c3de3ec8ea2b344fad2"],["/categories/计算机基础/数据结构与算法/page/3/index.html","2c206c476fe98adba0f22179f25a3629"],["/categories/计算机基础/数据结构与算法/page/4/index.html","acdf536ce691032de1d64515fe4f17e7"],["/categories/计算机基础/数据结构与算法/page/5/index.html","28e01e90af2a6aeebaf70be29534fb13"],["/categories/计算机基础/计算机网络/index.html","4883ad8581b6b846179e4b8829ae0499"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","1d4802afd6f66923bab49bcca04e9d7e"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","7362ad2c1151ae2538bfe076b77f03ef"],["/messageboard/index.html","1bed938ee80afcf057dea88db2ae22d4"],["/page/10/index.html","cae2f66f8b51d76a561a719da4602556"],["/page/11/index.html","e0829f94d011ce37ca0a9af229f1c07b"],["/page/12/index.html","63da26e7c15e6915b2d9866dfa4ce5cd"],["/page/13/index.html","2e03df649e1d272f6e3ed70379aab81e"],["/page/14/index.html","cccad83d73ba0fbb3e23da82e5a08290"],["/page/15/index.html","b5c691134ced8366cbe3674c725de932"],["/page/16/index.html","68edb687e42cea68c7e145f30fa9bd8e"],["/page/17/index.html","005aff11682c0377d82bc63e4f43bd8c"],["/page/18/index.html","67692553b20b886b28512e8fe1ee738a"],["/page/19/index.html","465b95e21c5c052ccd6e7ca8c259adc3"],["/page/2/index.html","8bd441797e79fb6dc6423608c18a1c1b"],["/page/20/index.html","43e2c426c49c30996ae14c950ec9f616"],["/page/21/index.html","ed5a50364c0a3dff90834088b5daa311"],["/page/22/index.html","a1235235f582a69b414a6e3bf2e2607d"],["/page/23/index.html","81e82afddab6edd0a41fe3883ddb6cfb"],["/page/3/index.html","9da4f37e95622e32d8c34f3c8b6c6ea0"],["/page/4/index.html","ba9195a3318c7257b32bb4296564d0cc"],["/page/5/index.html","3ffaf1e18f04d462f94990afeb9a1101"],["/page/6/index.html","bbb1f93bd8817705f643e88cdbc19f4d"],["/page/7/index.html","ffa604a7e3fcd46115636d7406b8776e"],["/page/8/index.html","6125e9034d2e19f7734b35791e42c513"],["/page/9/index.html","3649f89306f00cd6f923109017da870d"],["/sw-register.js","fd1a4f3308783c1c7e26174ae8acb7f2"],["/tags/Ajax/index.html","a1fa30c45fb7d8844d7f6b587d466d83"],["/tags/Axios/index.html","01afca4db39b008372added155cdac16"],["/tags/BASE理论/index.html","dfee1132362da02a874528cb4b790cca"],["/tags/CAP定理/index.html","dc02a1a2e74467ad7c010bb1ac75d4b7"],["/tags/CICD/index.html","c821306c2d1c74395ddd4c469a596b25"],["/tags/DDD领域模型/index.html","54737c33d182fe8cb82aae051fefd51c"],["/tags/Docker/index.html","eb1f7144db19553465b6cfb764324fc5"],["/tags/ELK/index.html","c545a80aefc9a42185cbaae42f1feaf4"],["/tags/ElasticSearch/index.html","4f3c01f1365634e95f6e00ad29e39f29"],["/tags/Git/index.html","f59a9ccfb390b07867a490fef6d4fd7c"],["/tags/H5/index.html","bae367c3ccdf7ca454b87d563d70579f"],["/tags/JVM/index.html","c209d2b5d885beb07cbefed40fe40a28"],["/tags/JVM内存模型/index.html","0c291f3e9db0fa000cd2c32fc8548584"],["/tags/JVM执行引擎/index.html","5213fa9db11797a3294a0f220a9a96b2"],["/tags/JavaScript/index.html","ffa4fedc3c1cd6ba6433f5c470b4dd45"],["/tags/Java内存模型/index.html","5a08b38cc3ca62b4ea3562bf21f5ee25"],["/tags/Java进程线程/index.html","6c0573b715b168435cb2de6453457f3e"],["/tags/Kibana/index.html","786bd45ee9b9cc7c13d1ebfbaaae926e"],["/tags/LeetCode/index.html","bd8b99e26b764653832aa5356ea9ba4c"],["/tags/LeetCode/page/2/index.html","08eaadc64e2f03063e29c83ae82c5198"],["/tags/LeetCode/page/3/index.html","f47b7960f924eb8ebcf4df56c907dd2d"],["/tags/Linux/index.html","7ddd1d74f6cc4e1b4440e12e2e527a52"],["/tags/Logstash/index.html","d4260445e69cf3a899355d701cad6f4e"],["/tags/Mock/index.html","35710c02baf46f154bf763a1f4e4ed3d"],["/tags/MockMvc/index.html","e2ac805ad750bf1d3d47afc0ed32dd60"],["/tags/MongoDB/index.html","af9a0bc07274a2e23772a4a226ea34da"],["/tags/MySQL-事务/index.html","9da597f85df046a909405a1f29cadcd8"],["/tags/MySQL-数据类型/index.html","68b887c841ad3adc6538c1b746c30d80"],["/tags/MySQL-日志/index.html","5c7538c4329d558d5fb76f6e7b83a289"],["/tags/MySQL-索引/index.html","15583cb2055bfec5c7703cf4806dc1e9"],["/tags/MySQL-锁/index.html","67218eebbee6d77d066464f05dcfed92"],["/tags/MySQL/index.html","4a34ce5fd68b8c3c85bcf9367731d71c"],["/tags/MySQL/page/2/index.html","cc8e8df027de3aa1cc5aeff9453ca5a2"],["/tags/MySQL分库分表/index.html","404060a7a5e90f62283550e15364651e"],["/tags/MySQL读写分离/index.html","5bb6e19f9a075d3c20820545e02eaf73"],["/tags/Mybatis/index.html","bb0e251c92e0b577a18c9de84f72f93c"],["/tags/MybatisPlus/index.html","17eb247a55bd42efff630c250c53285f"],["/tags/NIO/index.html","2b66d6dcd4f78dde5ae77efe476a9247"],["/tags/Netty/index.html","db0eb1903731487233c405f32d47a84c"],["/tags/Nginx/index.html","b9c5ce1d1a72cec739812dc8947f37ca"],["/tags/NoSQL/index.html","21ab2d503354e86063a9c19520732b79"],["/tags/Promise/index.html","b411977e9c5ce726a9270a653bb485f6"],["/tags/RabbitMQ/index.html","7094815b470825e349bb8c2ba1be9191"],["/tags/Redis/index.html","a9b021da3e1f757a94989c4556a6278e"],["/tags/Redis/page/2/index.html","acbf86b64dfab40a86b2736e6edf1177"],["/tags/Redis/page/3/index.html","b4564970296ab408f0e53a0a614b1cab"],["/tags/SSM/index.html","3dfbf4bde73e4a830f1245377bd29fd0"],["/tags/Spring-Security/index.html","9134616a5c0f1cf548c50f8e43c2eebc"],["/tags/Spring/index.html","6ab76dcf224a77ab3faa900ce974e147"],["/tags/SpringBoot/index.html","0548a9fab0c0d635b7cbff8186518e14"],["/tags/SpringCloud/index.html","d8049581212e95265d1764a7d12594f3"],["/tags/SpringMVC/index.html","f7d351f8c401d4a549d81b000dc786bd"],["/tags/Swagger/index.html","14eeab402904793bcb9cae899115bf15"],["/tags/hexo/index.html","7083920a09a9612fa8efb422692db38a"],["/tags/index.html","9d91ccd010852d494c525d35f7971f45"],["/tags/jQuery/index.html","7cd7c01a9b33de49b55981453ce09644"],["/tags/java/index.html","4f0d190e6efcfe5cac817ce655f51926"],["/tags/markdown/index.html","f5180b0711cf27892b98f6ac5d049e95"],["/tags/typora/index.html","cb3c328256156159289d3c908e417f4e"],["/tags/vue/index.html","8e9ba4a9bcff4fca9352372affee531f"],["/tags/享元模式/index.html","159f04b401c06f30ec70a1301cc33d35"],["/tags/代理模式/index.html","ab6badccee936803735f8bed5c6846f4"],["/tags/内存管理/index.html","925ba5c83a1e1e7a123accadb8abff39"],["/tags/分布式/index.html","72ae9029ff9525a5a0d49b7e9bdf874a"],["/tags/分布式一致性算法/index.html","e301d4d6687be1865dd22ca0e7833ac8"],["/tags/分布式系统/index.html","89928ed984e0000dc5ff13a2af7c7e12"],["/tags/分布式系统/page/2/index.html","76a5185e5accd166c5ef51f7e4bc6934"],["/tags/分布式系统/page/3/index.html","f13dffff835f0e997114d737cb33c1b4"],["/tags/前端/index.html","4a8078bd5ad3d0ffaf78a5ba52bda713"],["/tags/前端/page/2/index.html","3f897680a14b7c30dfa8d98d053f46b7"],["/tags/动态通知/index.html","621654b48891c37bb6b32b7da12fbad2"],["/tags/博客/index.html","3030c1cd08cd950fcd2091a597438dea"],["/tags/后端/index.html","3c72f99f733fd04ed8b899ef50d403dc"],["/tags/外观模式/index.html","be5ede3c0cce1572cddde05269c86bfe"],["/tags/多级缓存架构/index.html","7c820b9f66c5758982eb0723bd06ddcc"],["/tags/多线程设计模式/index.html","d208b81619915dd988a209f11925e152"],["/tags/容器技术/index.html","ec61addc2c566bb6e25b2e07156dd551"],["/tags/工厂方法/index.html","ee2518d552756b1517a4ff8471e42e98"],["/tags/开源协议/index.html","d3a088117ae1037a01c1f5ad9351a072"],["/tags/异构同步/index.html","3f9929b4be221fcb323bdf6950a883a4"],["/tags/微服务/index.html","108e07207660c7c121c73f5ef418c50e"],["/tags/抽象工厂/index.html","069e97009869c098232dc342ae7c4c52"],["/tags/持续集成持续部署/index.html","6221b5a9552e8ba513ed0ca531bc482c"],["/tags/接口幂等性/index.html","cac55d4c922084831e89f166775b540d"],["/tags/搜索引擎/index.html","f6280e5f237c2a946a17825e31d4dbd5"],["/tags/操作系统/index.html","214f6d4150b4d7a58ea56c614b867766"],["/tags/数据库/index.html","79a6de7f9b07224b02ac411897c9983c"],["/tags/数据库/page/2/index.html","457642b788cc72a27d05d5bd5e962f86"],["/tags/数据库/page/3/index.html","1b8cb08605fcf9958a0102b2bca58278"],["/tags/数据结构与算法/index.html","b50bf6ef2d88911742095edfa468bccd"],["/tags/数据结构与算法/page/2/index.html","8ad9c6827a7db369260f3b9809b288f8"],["/tags/文件操作/index.html","7881bddbe2732822dc749a682e918950"],["/tags/日志/index.html","a41623b0a1b3783df51b76cd69676655"],["/tags/服务器/index.html","9b01cbaad4b778450fd2ca2d4dd4dfd0"],["/tags/权限认证/index.html","1d836fed6e4b5dad005e97b0f7e63509"],["/tags/架构分层/index.html","eda896bc687f19356876a87a34f47c56"],["/tags/桥接模式/index.html","212eec7f5b2bf18be0ca388bcd294786"],["/tags/模板方法模式/index.html","486bf70c77c7eda0602cbb8a06a49fde"],["/tags/死锁/index.html","c42b993493e8365b7bbcb5d2cf1ad56e"],["/tags/池化技术/index.html","34a4fe9ec19f9aa453ff4cc7a1d571ef"],["/tags/消息队列/index.html","185defa25a0054582211c2a109dcfc00"],["/tags/版本控制/index.html","f761a4be88af8523a4ca21a5f534c016"],["/tags/策略模式/index.html","00e9aca2bcda12ea4c2e7c383cd66a12"],["/tags/简单工厂/index.html","e446e0247657281e1d870a0c3f21dfe0"],["/tags/算法/index.html","e2bba6bc30d89d2fe9c4d822c1c50716"],["/tags/线程活跃性问题/index.html","3026d079f47e41e7b0bc52d4b7910a78"],["/tags/组件化/index.html","0d8a557bab2f229e586cc27368c3b30e"],["/tags/经典限流算法/index.html","9b50ec3ffacfbef910ef13cbeee5b770"],["/tags/缓存/index.html","2b3b82b59b5cfa1ea651156b4a21fd0c"],["/tags/缓存/page/2/index.html","a744811f9fb0c85104da002870319ce3"],["/tags/缓存/page/3/index.html","c5a8dccca5926f6b7ddfc663c10129e6"],["/tags/观察者模式/index.html","95505a841052fb86d8fb18fb68247fdf"],["/tags/计算机网络/index.html","78e61709968f76c63d020978ffdbcbd2"],["/tags/设计模式/index.html","22adb0e93ba673bfc7d88cba7193e14e"],["/tags/设计模式/page/2/index.html","01614a9128d0fb8e086ebda5a4c8f66c"],["/tags/设计目标/index.html","8ac3dca901d5351800f724da22b50364"],["/tags/资源共享问题/index.html","6ec788fbc24aea36ed402fe73d697355"],["/tags/进程管理/index.html","cd98370b9dcfd2300aa1c4e509be830c"],["/tags/适配器模式/index.html","2df826576ae41bd59a13b1c23e9882bb"],["/tags/通用设计方法/index.html","1dc4faf8dced47409ab27e8b31a2b47e"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
