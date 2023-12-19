/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","92c519339b1995cd4d34c0637e414899"],["/2021/02/22/工具的使用/博客的搭建/index.html","fd455afabd0901be3f11497be1b02cde"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","191eed43fed5ece6da4313358c038571"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","9c6df103fc71e916cf254b1f9d02c881"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","b0fbb168b1be5d924ca561170f550e4c"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","524b5111a862c1856cb783778e29dfb4"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","b1385c8d77e8ee8f0819461dba4b8a80"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","6183dc52ce8964b5dce2d05f1cf33693"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","a38726e84c663eda91b09268006b8417"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","9a41462ceab84b6ac29d98c8e2612e61"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","45d93fe331d30c0c0bb6168de6cb5494"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","2ca8ced6f2070aafb12c79735c610738"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","c9e1bb1bce0cff1a68a875b4c5e04db4"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","2938caf7e7a29cb7b62ef4817c23a696"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","7fffd191d9f7ee2c9e7b2c39bdd009ea"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","ddd32feeed5e06455a78aeb2fdd73a89"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","315fc5f1fe88d3be02abbe6c3564aa7a"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","1665de14b8483bdd09cb6974a3fdefd7"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","99503e345883df535dc0d68e85327701"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","6511392363cd5fe3d60dd8125733dc1d"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","9c7f08e15986db60e49681662eaacf44"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","94e2d4a337783c6e659e78536051ae71"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","3b6c0ddacef82e2523f0ddf0cfe130fb"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","0d1a1881fb7d393dc08df07952ab30bc"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","b5ced06e4ebf14bec814546477aa8f08"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","adb786311a373a8b7960e22fd52a11bf"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","0caaeedc3fba2afb50d7d962ce866054"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","e583a97e4ba7f4a41be6799f8d960d70"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","1accb2b60ea61bdbe55572c551a27f26"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","e72d5077c628501489053ddd9ad19029"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","8ecd1e44e0e74ba768772764e7c718a0"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","43488fe88ec62fd948c1b9ecab01e346"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","578b8a88e235261c2c183f176534d66c"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","d714c33b1782a78868c03c552fcdc3d0"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","80224e4bb11707dd317a4da553223b95"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","57f9ac932f3c77e9ae64e311587ddba5"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","2d2432f88e588e75c50f731f72b175df"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","3226635ffe38a703a303541ad6e314b1"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","f6cafab30ce44929a4f45b8b3aa13aac"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","6210488b63c862699f171bcc9b360c79"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","9fbd310696fb662d19faea3925e29069"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","e0a3cce45aa175380e58cad1a0b440bf"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","2c3c090356d0e01c92605b65573289e3"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","c5fc77c2b35273f128392fcc8a432d31"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","4bdbe24db036b141ffef797eeadd958f"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","032c6162e131cb0035888e8698650b7c"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","2fb455ade6726f38cd3a20618b5d59bd"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","6d5a2cdf024a27f5fca72db045132751"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","8936cc68d17978cca662d68d005824dc"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","ceffcd31a3697d6c9efa8556972b5be9"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","6cdc56f113dd17af9e6f32254ec39d47"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","437b6809064264528d812db85a0b920e"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","3f70b2cc59cfc38f6c63306dfe87db1a"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","56b3d4bec1687cae3ca44808bd121683"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","2b01d20726ac816fe7820837ba00d654"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","f3e420b978b8cd3319b4aa317c570e49"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","71d0bd1500247cb764a4b7f6712a55d1"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","b986e1ae5d5433db9287365c6fa4a13f"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","fed3aaff8d84deb8514fae9f12448dbb"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","18d3c8744a899467fc5ed15530bc15aa"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","efefeb7b9e25749514833e8329784a7f"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","4299bab18364fce60e283890a5018766"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","3a50608bd40cd85b90e02a79e5e243e3"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","1da8dfa00f6de0a5a054121288715a74"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","2bc29e37074344e1414f2de36a48277f"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","a62e1367f29deb265306da237ce8ced7"],["/2022/08/17/前端/jQuery/index.html","a9f49df7a1822a57aff26b54e78e7edb"],["/2022/08/19/前端/JavaScript/index.html","7d08f6568bcc4df739b2574e7fa08dae"],["/2022/08/22/前端/Ajax/index.html","d073791cdfbfe8e4ff4f05447fcd0db3"],["/2022/08/23/前端/Promise/index.html","cce42503ab18f9d7d9aed6aca002ab71"],["/2022/08/24/前端/Axios/index.html","a7112ce6cb416c8273031261199bb80d"],["/2022/08/25/前端/H5本地存储/index.html","6e641ed23ad49aa8cedb46566116f495"],["/2022/08/26/前端/mock/index.html","d1c5b7b31ce368b522a8e5230dc43c1e"],["/2022/08/31/前端/vue/VueJs/index.html","18120521e2e24264ac0d21e6a796ddb0"],["/2022/09/01/前端/vue/vue组件化/index.html","0965fd956f012dd0e44841857cdc4773"],["/2022/09/04/前端/vue/VueCLI/index.html","3f232f6d821043b9f4625ea7ec0b9cb2"],["/2022/09/07/前端/vue/vue实现动画/index.html","dac5b4a3eeccaf49f33776cffb9052f8"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","c1ed73ab6af756e5e495e0ba78568a58"],["/2022/09/10/前端/vue/Vue异步请求/index.html","e6bb8a872daacd7ae59bcdc0ac40506c"],["/2022/09/11/前端/vue/vue-Router/index.html","572dbf98a24f1e7757b6a593a21834f7"],["/2022/09/13/前端/vue/Vuex/index.html","646b99173b060efec6dc65c18ab4fdc8"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","78950d9b13f37f1cf05320d3914246d4"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","0a6c28c3a2aa61a0ec3dbd9f7c4613c1"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","a03088070b91fb7a3bb8712f4040e486"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","70e4c6fb3635af29bd365c7f8f99c0a6"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","56b9ed3f39bda0dddee165c044fce826"],["/2022/09/28/DevOps/Linux/Linux/index.html","4df53ab155107b69bd0758bc7ca8d74b"],["/2022/10/02/中间件/Redis/redis基础/index.html","22675fc38c21bc867ee2cb02f396d837"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","f724f616697451f9640bee5c5d5c8d46"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","3ae41832b38810b52e46a458839be904"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","ab986a4c34aa2447a2d8f4978c4f248a"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","25614ed266fb3f34c58553e6aa745eaa"],["/2022/10/17/中间件/Redis/Redis集群/index.html","b696cb40a171060e82feb37199d62a92"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","b327673955ac2c7e2ec2a524d523e887"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","45542c77efa3e193a56b31f239d73b04"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","00542de07fc639375771d2b103d3cdf9"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","9d23d26763ead51b7db99fa5c63e1f59"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","e98bf698b0b07f692b75297f44f3667c"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","36d5e3a20fd84633bc25a611dc35d26c"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","9def1df48b600eec550920d387cbe955"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","dc9915a6ca7a14eb18b8b31cd6b9fec1"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","8e5f4735a7e066794e98531cb08f1a02"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","e8ba997acce2fcefb1fb53097259e984"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","85c69a8fd39e2de9fde9f2f51d36285a"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","57a3aa5c17bd7719382fc2dfc0426820"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","b17f2b10812a94122276cbbfbbde24ba"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","6d29cf3b6daa1488e7f14083405ab05d"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","5a291faea98f1f42f4e58da9c5514c5a"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","3453f4f59e090346425b45a8ff2abb9e"],["/2023/03/10/DevOps/CICD/CICD/index.html","ea9a7e50b58c2914e46da4703624d93e"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","c2e2860ca9353608539f6ab67f91562a"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","f43af31cf84fb8eb9c06dcbf9c02c30a"],["/2023/03/13/Java/NIO/NIO/index.html","9a7c821211edd664282f1ad5584c7ea9"],["/2023/03/14/中间件/Netty/Netty/index.html","c944026dfc09c3386a7173ddeb4a50ab"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","cecbbc1effa08a9c367d00d5d7ec3488"],["/2023/03/17/系统设计/分布式系统认证/index.html","a2112c6ec4e845011a130fa548870bec"],["/2023/03/19/Java/JVM/JVM概述/index.html","18e027c6da729fab9b392b90a85c04fa"],["/2023/03/23/Java/JVM/类的加载过程/index.html","77360a2354e0e85e1e62a5ceedf4f9a2"],["/2023/03/28/Java/JVM/对象的实例化/index.html","b2c3b73b31334cd2e5502c3dc7b57066"],["/2023/04/01/Java/JVM/运行时数据区/index.html","a7484d1d5218e05d5826665352aaf603"],["/2023/04/04/Java/JVM/执行引擎/index.html","b64ce86f152b4142ce37fc713b20c348"],["/2023/04/06/Java/JVM/对象引用/index.html","1b6d4d672846d7e67a9488cc0b58757b"],["/2023/04/09/Java/JVM/垃圾回收/index.html","e88f149b780998f6a8e25a3572ef234e"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","d2e54763dd5cc5b4da17665b274f88b8"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","f6fbfa89becbb8bede2f736473612ce7"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","38f3669b785fcc19ecd61f396d8f33dc"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","2ff9e60ac67aa16acf6ce2c2f3bbe55b"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","fbb99d2286412bb842cb002214029a41"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","83b9e1d6058d63c028e73fd238f6350c"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","6bfac8fc6f632485862fac025b1c41d7"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","5b7b5f18d9935d149581f8613dead49b"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","3f691f5ff02a58b35ff9c7e5a35fec1e"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","59da272519f6eb2aee3b0de446adbde4"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","6d53ecda3c671e86230dce673668c8ff"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","99c7785402dba1879e4f1c08b4d68a3a"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","9639e16eee76cbedb15f5045e4344b40"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","e1a263de54eb30c8224abe28fa2d943f"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","576471b32ec7f8c2b1d180387da896d7"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","3bfc85b1716bb9b9410a00d55466d311"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","2e66603dad8f8d59d618f3d39b79948d"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","e1a1d621a05eb31a8b28a857424dce44"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","5cc6b977de3bb1cb00c96c43a708f967"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","2f9b004985b8b1b3bb9f4ad12c128ab8"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","c937643c61bdc2442d5f3d4668098558"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","1b1736279d5d527b70904843e4992f04"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","ba499af0cb6d5fe8bedb251d15bbb2f1"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","dce84961db0805e32732e39099ab617f"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","985687af9123305062fc172d88396bf1"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","b7ca3496a38fa06f52532c57446cc1bd"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","a43b2931b960b2abc6fa4b27bf4ec68c"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","2dbbfa82c7b181896853381b5a659153"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","cd53a60e4e33c998f4becf11e27c2082"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","eb1ea25a24c2e69b8c41b0845c21a359"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","8b4818140e6e1cf2855f9d9cfb45a169"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","92bbd507fa815e530e79f4e97daaeaba"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","c37796a563d1d82061c0c34a36827ad7"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","bc21d9fbf7678a8065e6d3de01e8ba15"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","84ad98d830fb7dba7d45fd42953c3ba3"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","3e94f224748bae926911a31869572069"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","ffc872b8a4cb8a425f49944bbf7b5f1a"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","2e161da411a0418e608a7a9df7470630"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","c283af83e91bb74a19b49465d3536330"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","78cb9b4ec9995ec26b61d41425894238"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","2cfab9c7021ac756f4ff210c305f2788"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","e0e1200fe9619129db3de810f9ccedfe"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","13b7a73d110c1a72f89f790d8a2d51e1"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","7a371a0a1cc7c1cdd70c6742013bf0ee"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","b5fa13c2dc3ff4f2caceba7b2fda78b7"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","fec912119fa3fa090b272f4457292c6b"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","a2c335ba1b038d907c4149b379949618"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","45fe0c159ad63aa0ebc16c8351978c3e"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","dd00fcbc8f6195c1ea56f065d0e38ec3"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","ee9c687e17da18991d14d92a1f89fec5"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","ce657aa52a6228a2f4792faf80327eac"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","0d8b4e85bbf5812e4d05d611bb1a35f4"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","603a0e1dc5c8e29486637ccc097e0959"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","045d6b57e3a963ef927ce17fd0192b8a"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","82d38df3fcc20bf4bc838154a58ddecd"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","1a85d9cc950fae2c6844150c7ecdd4ac"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","c8cc8ace530888bc4bd19f4e191d36f6"],["/2023/09/04/中间件/Redis/Redis事务/index.html","dadf055a1b0768556f5523fa675cc30b"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","74f57d31867ad3a8c3b4d19dd356c1be"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","6fa17f0742c52a258d62065957cd3eb4"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","2a0bea21660eae3ac1657dadbec2fd7a"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","f13cefe4c9409c899c6ceb00a39e30fc"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","fc29d1afbc0fc316e96a8e7950aff622"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","239274c6a4fd931788433a0dce706b2e"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","493ff813c7ae7a6e3219097915f9420a"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","2751d2bdcc24b46055b4c9b61ae3cb7d"],["/2023/09/22/Java/NIO/零拷贝/index.html","0d01da6fd479ee94f494a720e620d93b"],["/2023/09/24/系统设计/JWT认证/index.html","4e54fefba4887601d58bf7c97cc8b6b7"],["/2023/09/26/Java/NIO/Reactor模式/index.html","0f37d448af11481f7c49eb52080ac1e6"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","42df021bad37176324c1d2e724b42f81"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","694841a5b51e79bf688372c1c3f16f87"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","9f896d41eeda585ce18c122d1dc8a6e8"],["/2023/10/09/Java/并发编程/共享问题/index.html","02d54da04f6d0467083f2e4504f916a8"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","51c3a7b6bc5dd3eccc624df76c44dc21"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","5e3f2df158e1be6c904ef99349c49c2b"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","c4fd09a6424a353ee96842c6c6a493c6"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","b11c5a41683623fb896bb22a823e98e6"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","71f1d3eeaac7862de1d9588ddfbf072d"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","0378af7154d64c1147d0f801d807696d"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","4dc3e5f42dbd204f541b1d5668391c63"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","3cbc42d8b77ce8d7ffdcb30859217f4b"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","86615f6cacce126972d5160cde973359"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","745919731276b3392c9c10aa7fd872b7"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","abf8b905a0db50012379709ad2e60ae8"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","8c800a88bd36c451a5b12c8eb950a14c"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","63bd63c5085a0b974bedd93768538441"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","ab7341930f55c81b3f7ed844104eac82"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","b0da7e5a787c1da8bcfd8bfe11d9cd04"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","05b5ded54e4566dbdcce33d7abb2fc89"],["/2023/12/05/系统设计/开源协议/index.html","8c8a049b0b753d82b599c7673bf0c702"],["/2023/12/09/MockMvc/index.html","283105986fecc10dba318a04071d22d7"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","95f4188333145eb96dab2175c101393b"],["/2023/12/19/MySQL读写分离/index.html","dfbeac8832ddb036c9fb82149a68231c"],["/404.html","c47e37fb4237580d35be8120429f6d58"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","bd7b483ecab669466aa3d8554f27c1be"],["/archives/2021/02/index.html","f7a52b0c75b533f409374f0a116b3f7c"],["/archives/2021/03/index.html","30eb9f8e44e4ef15fa289f64dd8bdd38"],["/archives/2021/03/page/2/index.html","51e813f2f918e8d6ae4d80c098f94f49"],["/archives/2021/03/page/3/index.html","1b913e188e61f613f48083b4279848e6"],["/archives/2021/04/index.html","bd6c7e6581dfd58af90dcf740f327409"],["/archives/2021/04/page/2/index.html","a42d8102c784def13ccf0d539b2383d6"],["/archives/2021/05/index.html","236331d787abd2c0eab5e0c343a83a00"],["/archives/2021/index.html","a99e11c5d79941882059db32be2f95c1"],["/archives/2021/page/2/index.html","dea61cdc3ef7dbf1cc1fd42235fa0f96"],["/archives/2021/page/3/index.html","4fa238cbd2c0db14db13c8103812a9f9"],["/archives/2021/page/4/index.html","bff3c1ed885107f65f7583a9ea5f07ef"],["/archives/2021/page/5/index.html","564e6009ee73a68e79a0e562a7678460"],["/archives/2021/page/6/index.html","41e0b5b336d9c2437c454047bb715b61"],["/archives/2021/page/7/index.html","49dea07e3ae2b83ca9aff32e85f06840"],["/archives/2022/01/index.html","93856e27a3effd21055b525e685200be"],["/archives/2022/04/index.html","8e4172f052bd49e5c00ccdc4824db35c"],["/archives/2022/08/index.html","7aa9cbf8c7496f9a246a0e7d223e1c2b"],["/archives/2022/09/index.html","972d8073f841d2ab120c253fe1a57cb5"],["/archives/2022/09/page/2/index.html","0398f2634f7e4c17d6b9178fd8f1a246"],["/archives/2022/10/index.html","d74c43223cb84f4b4eb8955ce6f4cb8b"],["/archives/2022/11/index.html","363cd418d6eed1fedce26a02b74e9c93"],["/archives/2022/12/index.html","34c01fe989bdd202d19d9a90fd4f1155"],["/archives/2022/index.html","95c86a953af7a7c9d8653a4a9b8a2323"],["/archives/2022/page/2/index.html","2217cb2a46b6350164a24102f207106f"],["/archives/2022/page/3/index.html","6c10cf269f59c3a26e22820443208245"],["/archives/2022/page/4/index.html","eb78a3cca6ca51ba986b7871c7d07a27"],["/archives/2022/page/5/index.html","236a263edc7f32c7c2a22a0a7758e8d8"],["/archives/2023/01/index.html","8b8c43179296688ca42dac58ed2a39c8"],["/archives/2023/02/index.html","0a349ad33879697df7f4f74dbd799daf"],["/archives/2023/03/index.html","5c238d1cf731fae053f738b2a8d12e2b"],["/archives/2023/04/index.html","bcedcf86df36055ceced04b0f23ccc94"],["/archives/2023/04/page/2/index.html","13a7a4c854db2c3874895e814ac60b0a"],["/archives/2023/05/index.html","eac566f0a89852dc9966bfae5bb8a9fd"],["/archives/2023/06/index.html","e7f45b98fa24aec766447853aabf87cc"],["/archives/2023/06/page/2/index.html","5f7172d24c34d494013c3598ce458fb2"],["/archives/2023/07/index.html","140881eff3ad872a1df9fec897210d57"],["/archives/2023/07/page/2/index.html","d69563d6603b6c877fde63162c73dbdb"],["/archives/2023/08/index.html","6c31fc114fbf8ef0db254a9875efe110"],["/archives/2023/08/page/2/index.html","0bde9d84f09a8962d456ccc6910cfead"],["/archives/2023/09/index.html","9c9aa8cb85ac3f3f8064b55103f9d501"],["/archives/2023/09/page/2/index.html","f0c2020955edafc2139427cebfa8650d"],["/archives/2023/10/index.html","74939fcfaa725a6ac99dafe5d77a03b6"],["/archives/2023/11/index.html","ffaece6f901e99cc514d79ccc01dcf2b"],["/archives/2023/12/index.html","bcdd5cfdda465836c571c89cc04156ba"],["/archives/2023/index.html","455c58d40b6b2ac782f4b5e8f994bff1"],["/archives/2023/page/10/index.html","a16fbe87e619cf4595dc7cb6924ff15f"],["/archives/2023/page/11/index.html","82917cf95cf20f0d13d85ab954bd9bfe"],["/archives/2023/page/2/index.html","6446ed95afad236604f92e42736dadef"],["/archives/2023/page/3/index.html","73a8b24202822b1588f709aeaa2994f8"],["/archives/2023/page/4/index.html","2c03c6e52e868c6cede4f08ff1805071"],["/archives/2023/page/5/index.html","bd3d9372ad685ca9e297b7ce52d4478a"],["/archives/2023/page/6/index.html","256568132104ac6f2dac1acb0520e870"],["/archives/2023/page/7/index.html","fed216334182ee5e2322706b87006a19"],["/archives/2023/page/8/index.html","823e8fa7792f0f7e01d87e9d4fc46c9f"],["/archives/2023/page/9/index.html","e4a12c5cdfe1ca472ce15da892de3fe8"],["/archives/index.html","a4027c5dabf2d5b1d4c3cfa2046fb4c6"],["/archives/page/10/index.html","f903694b0f65c67592b70a276e052664"],["/archives/page/11/index.html","e3338b8829218fcb64a94ee599f5a0fa"],["/archives/page/12/index.html","99c7e01e84f8b4f5812ca44009cde031"],["/archives/page/13/index.html","0e689639df3753bec57c62fd2beb00bc"],["/archives/page/14/index.html","af2df728b06924e0addce88ed1bc5bdf"],["/archives/page/15/index.html","bfd0d6217ff20d18f91960f9e4d62667"],["/archives/page/16/index.html","d8d5095df1b5a33a678986bb7ada3825"],["/archives/page/17/index.html","1b268c23db8311ab8df9b7788edca92d"],["/archives/page/18/index.html","45e667b536162e918103f1c3831bff25"],["/archives/page/19/index.html","8afe5a7a1eef258fb7e52ff409dc6189"],["/archives/page/2/index.html","24e01109b2fa0398a7e9abba793d9226"],["/archives/page/20/index.html","2246ce263eeda7354f2a9722c0006451"],["/archives/page/21/index.html","4562d905bb12067dae1fb50d0b6b444c"],["/archives/page/22/index.html","aec3c972e87e57578ce2bb3837de33e6"],["/archives/page/3/index.html","f4342526aaaee9b9fa0ea8e4db48e6e5"],["/archives/page/4/index.html","1efe0ac4763a365d2db92e7dda4c496c"],["/archives/page/5/index.html","94035f7a3a7a4fb290387435c6ce076d"],["/archives/page/6/index.html","d2517df06e851eff2ad99544dafe4849"],["/archives/page/7/index.html","39fd8a9cfe186eb3d2bf6cbd33d0f60e"],["/archives/page/8/index.html","a54aadc783fd71b2067df680c3291af6"],["/archives/page/9/index.html","223fba72270cb4e4682165c430b5e927"],["/categories/Devops/CICD/index.html","317db80c80f378e7b7c2a161a119e36d"],["/categories/Devops/Linux/index.html","daf28a1ed06a307ecfda30010832cba5"],["/categories/Devops/index.html","ec814b1787414b0f096d72dec911fba7"],["/categories/Java/JVM/index.html","1f801a1e34bdc8db05a2872b1e6ffb6b"],["/categories/Java/Java基础/index.html","680245505e8d78392ea4055b4020253b"],["/categories/Java/NIO/index.html","c095e8a3da1cd6ea46192f1e05c6d04f"],["/categories/Java/NIO/原生NIO/index.html","ab13d819376a16d376ed20c6fabb7dad"],["/categories/Java/NIO/文件操作工具类/index.html","ba87551b1980db1cd7c4519150c6cb5c"],["/categories/Java/index.html","aff78b5b3804e40bdafe5fbc09052eaa"],["/categories/Java/page/2/index.html","f7d5d027d37540767752937c0456bf55"],["/categories/Java/并发编程/index.html","d06f445c548622ab6b6c8e71bf6587f2"],["/categories/Spring全家桶/Spring-Security/index.html","f575920bd37ece9ad850d39e7ab07c6f"],["/categories/Spring全家桶/Spring/index.html","62d0f45758ad03545916b67884009cea"],["/categories/Spring全家桶/SpringBoot/index.html","77cae1ee91d8d467482851f1d619ce5d"],["/categories/Spring全家桶/SpringCloud/index.html","5894747b208e8175f327806dfdedd705"],["/categories/Spring全家桶/SpringMVC/index.html","edd8987dcb8e72e09da93060494c254a"],["/categories/Spring全家桶/index.html","c8e82d8f12a407613ce9bf960057ba82"],["/categories/Spring全家桶/page/2/index.html","446ce72286a83b5b0986095cc8323ce6"],["/categories/index.html","3c421f43f3a457ec4b63d3aaa9c1931d"],["/categories/中间件/ElasticSearch/index.html","68905533523d16e8baae41c7981cb315"],["/categories/中间件/Netty/index.html","37ac017343f650e4d1b5545610dfaeb4"],["/categories/中间件/Redis/index.html","30b6eb4b7d804a7f34b4cec8b60b6217"],["/categories/中间件/Redis/page/2/index.html","8af1a1a22676796ea6135425a870b0b6"],["/categories/中间件/Redis/page/3/index.html","0d722dd1ff6622618512c6622fb39663"],["/categories/中间件/index.html","e60f9eb539f3cf6c8323e584175e4a0a"],["/categories/中间件/page/2/index.html","9bda03d4aa002fcc6ee5fa0c487d4563"],["/categories/中间件/page/3/index.html","8b88849550cdd47855fef3121de1555f"],["/categories/中间件/page/4/index.html","c8c69326f1d1e6f89cd0ef719c0a3950"],["/categories/中间件/消息队列/RabbitMQ/index.html","d334372abe95be9a2ef45a3c2e093d65"],["/categories/中间件/消息队列/index.html","d5ea3044cd0bef64c1631d9ec00c15f7"],["/categories/前端/Mock/index.html","474836509a5762816f46353875091c71"],["/categories/前端/Promise/index.html","b6ead9cb7c309a2d8a991e7314f96fee"],["/categories/前端/Vue/index.html","8f50ca3329e34f75a466bdf52ff9c526"],["/categories/前端/index.html","ce9e6ca2fd87d5334cb5b7df166a7661"],["/categories/前端/jQuery/index.html","8c3e6e82e4d83e7826c1799e85d70b43"],["/categories/前端/page/2/index.html","8988b81577089f1ce4f4e83af957ee85"],["/categories/前端/原生基础/index.html","3c9a1cdadcd4a4233e2cd91b1664a572"],["/categories/前端/异步通信/index.html","e36dca3041b05abafb91cdca71a760eb"],["/categories/工具使用/Git/index.html","b606b3c603be390416ef6d892fd49988"],["/categories/工具使用/index.html","a2beeb14204a3c711b2a9f0e8ee2a109"],["/categories/工具使用/markdown/index.html","82b36f8596e674f3bf7a082d7d1eedf0"],["/categories/工具的使用/Docker/index.html","bc631b6bace430527160c8489c33250a"],["/categories/工具的使用/Nginx/index.html","60bac6f957c16979d085c8a6dd335975"],["/categories/工具的使用/Swagger/index.html","5dde68255a874cda6e1845d95d802796"],["/categories/工具的使用/index.html","7e22ac0257069358b4f3b3f20087b5ab"],["/categories/工具的使用/博客搭建/index.html","94cc86dcd538005d5eaf08556d0c553c"],["/categories/数据库/MongoDB/index.html","67abcfabb59a9c18d0a0afa8e23ea1f2"],["/categories/数据库/MySQL/index.html","080d6832b15cfa022928cb76bc66e593"],["/categories/数据库/MySQL/page/2/index.html","80dc6fa029f7841a5206689414ab96c4"],["/categories/数据库/MySQL/page/3/index.html","05b906cade0e936af1403bf615aa929a"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","8369d630911f34f15f163c42db67dfec"],["/categories/数据库/ORM持久层框架/index.html","d2c86fab331576aca0592d06c71f57dc"],["/categories/数据库/index.html","c989f332a1bb2c1bd2a286371a1081bc"],["/categories/数据库/page/2/index.html","b4a48e915404009feb4b854488335916"],["/categories/数据库/page/3/index.html","051485634f23994b5e503099119f3109"],["/categories/系统设计/DDD领域模型/index.html","223de08dc8158417c0f6ac63f020ee2e"],["/categories/系统设计/index.html","e02af5e9d3acedba7914d808cee59dde"],["/categories/系统设计/page/2/index.html","2d80b2492c4d638f21b8b6400a044c3f"],["/categories/系统设计/page/3/index.html","0d186de5e7680b093d0de3b6d463035c"],["/categories/系统设计/page/4/index.html","aad629b013d9382750d8cc85c128a804"],["/categories/系统设计/分布式权限认证/index.html","3119944da5d122a5f7444db0df3fafdb"],["/categories/系统设计/分布式系统/index.html","994df50bc0d36ab204fd562ad84aa4cd"],["/categories/系统设计/分布式系统/page/2/index.html","e2d0f9559b870264b009d371f0865b12"],["/categories/系统设计/数据库优化/index.html","f7f5d1351b2caf9b28807d5d5410e07a"],["/categories/系统设计/设计模式/index.html","c1a8151087fbe56ec3b5815a037eaa00"],["/categories/系统设计/设计模式/page/2/index.html","54dbdcceebaca803cf60073a006ac0f8"],["/categories/计算机基础/index.html","9956ebef09ccf2ad2c8ae292768fe409"],["/categories/计算机基础/page/2/index.html","ceb61165d32bc28be54504228e5f8b42"],["/categories/计算机基础/page/3/index.html","4ba2aee6a55b042ff79ac5b59db2d0c3"],["/categories/计算机基础/page/4/index.html","5243a1353f564be3aa221cf715aa4eba"],["/categories/计算机基础/page/5/index.html","69cce00615f66822e6ef47a33112fc08"],["/categories/计算机基础/page/6/index.html","7067896fbe7c332a35861b7668f2ae3b"],["/categories/计算机基础/操作系统/index.html","f2331a2cb5d8b0146cebde458029023d"],["/categories/计算机基础/数据结构与算法/index.html","c2c2bdac752a123dd39a976c5963e9c1"],["/categories/计算机基础/数据结构与算法/page/2/index.html","7ba21f9d8278ff0d6e183c15c482bb98"],["/categories/计算机基础/数据结构与算法/page/3/index.html","c9c965b4282b6dd251b3b8196681b48a"],["/categories/计算机基础/数据结构与算法/page/4/index.html","5b7ae026a928c119dddd1ca7aa876be5"],["/categories/计算机基础/数据结构与算法/page/5/index.html","71f6617fc2d3eccaceb8374dfdaa69a1"],["/categories/计算机基础/计算机网络/index.html","48e289536130b094639e6e4229668ee8"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","7edf10a022d2ffd9aad3a33398c3d0d0"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","438b4d70b4bd7db1c8b3319b874bceda"],["/messageboard/index.html","8afeb684be819e9ddf150f0fe94baa31"],["/page/10/index.html","d905a90d7eec6e3b93d5a0bfb521bdf9"],["/page/11/index.html","41b92fe788044de71516119d30e14b38"],["/page/12/index.html","6412e789ced284faedac7938040e4343"],["/page/13/index.html","33cef1c6471a67f20b342a7e9365de21"],["/page/14/index.html","ca02818bf3f4695f334ffb2873366035"],["/page/15/index.html","0ec2f954ffff79edb02b7fa661774d51"],["/page/16/index.html","02d17ff6663136a77e9c152a5141ec11"],["/page/17/index.html","3b7e38646d5b5bbcc7aaf2e71ed24898"],["/page/18/index.html","ad95498053475a9630ae7ea627fdcf6b"],["/page/19/index.html","6e391c80c5dbdd3b7e338a0c23db69dc"],["/page/2/index.html","ff55ac0c8de148d6338b5c63baa59a44"],["/page/20/index.html","4e59267b6eaed5c096fa4e6695d2729c"],["/page/21/index.html","591e49483431d995c00303b1637e7458"],["/page/22/index.html","dd12895c18454606a5aceaa28a0c641e"],["/page/3/index.html","a193818de58341d6633acc04e332824a"],["/page/4/index.html","2303d07b19d4d2800937f4458e0e0347"],["/page/5/index.html","c2d3d51083b7411b68d3b61c95b2d640"],["/page/6/index.html","dc1eecf1b734dbc074572467c3ac87b5"],["/page/7/index.html","0c2c6a5b5eebc5bbe0e17c78c45fee06"],["/page/8/index.html","9ebb70a412b271b113f4f8ab3062ef27"],["/page/9/index.html","49c3d873bfe2cb559accf5dd39b3d4a9"],["/sw-register.js","1cbc72eb51c1d77924c555d991fceb36"],["/tags/Ajax/index.html","96e154557a0327fb2bc853ca4f152716"],["/tags/Axios/index.html","873f6a18ad16a910655b628a05709927"],["/tags/BASE理论/index.html","6aeb696a75938fe1473e56928b7a644a"],["/tags/CAP定理/index.html","0fd8f3fbe85b5b053592146cf16fcec4"],["/tags/CICD/index.html","0c437dbf236a764203a1c6249da6d5c4"],["/tags/DDD领域模型/index.html","94530978e8486e51f9547d5ea86bbc04"],["/tags/Docker/index.html","7ed8991fc51eb701dcbb4e560c059c29"],["/tags/ELK/index.html","c87490bada89a73a77a15ac6e6b70401"],["/tags/ElasticSearch/index.html","870af7cd299e04ecb5c4326f03e01805"],["/tags/Git/index.html","02d3be661a2a7f1d220f5542cdbe4166"],["/tags/H5/index.html","c62f42d188ee877d3689e5bd46d4b3ff"],["/tags/JVM/index.html","c262425eb210ee5d8f7f38681a2bd8e5"],["/tags/JVM内存模型/index.html","c402e82a6b418b370ac645d768c2d53a"],["/tags/JVM执行引擎/index.html","d3790076f3742ccc054749acfcf9af0d"],["/tags/JavaScript/index.html","5502ac2b60425f5b1bcc63ddc0b59c2f"],["/tags/Java内存模型/index.html","185f3088897430ceea45fc61a16d63f1"],["/tags/Java进程线程/index.html","4491f9e539e068aeb7ff1918dc106089"],["/tags/Kibana/index.html","42080d68d0bf8c98e180c1000e2abe1c"],["/tags/LeetCode/index.html","c727d2e347bc0e02473c573dceb31bf1"],["/tags/LeetCode/page/2/index.html","d59ad2b6e9fcba71ff5fbde28c87f4c8"],["/tags/LeetCode/page/3/index.html","f1be0b5ac24769a01f9c500380315ce9"],["/tags/Linux/index.html","484850776569378482756a5b6707ba00"],["/tags/Logstash/index.html","2e382b51258cdfd68f0fdd6c89378a8a"],["/tags/Mock/index.html","5861b209ce8c168bb20c6fbc1e563bcf"],["/tags/MockMvc/index.html","6ab848db1921899066cc8f8e0bc91031"],["/tags/MongoDB/index.html","b1d7f0d95cf2b856b9c7e5dec05cfd0c"],["/tags/MySQL-事务/index.html","bad16e35ed9754011ec5100bf38e6250"],["/tags/MySQL-数据类型/index.html","0fe2a4dbdb9a97ea0e48453ec0633971"],["/tags/MySQL-日志/index.html","b546281d68c6917592a5e1b5c4129649"],["/tags/MySQL-索引/index.html","1eec29326ff7513947eb8096d7c02b87"],["/tags/MySQL-锁/index.html","0ee6b720dd531a88d2a3e9d36d7b5dec"],["/tags/MySQL/index.html","b487b80c179a93e13b36ed3533733828"],["/tags/MySQL/page/2/index.html","832c739d18875c8ae7f72e7b841a29d9"],["/tags/MySQL读写分离/index.html","496cdc3446cb5a60e79a15e76009a396"],["/tags/Mybatis/index.html","01fc5d057d5c579bb08af8c907a266fa"],["/tags/MybatisPlus/index.html","254f992ec57e49155cf2c483c8c5620b"],["/tags/NIO/index.html","f12c1496c0a10df4a907ce7fbebd2bcd"],["/tags/Netty/index.html","ddbdb91dcc8396c3a5e0b8c8f5f3ece0"],["/tags/Nginx/index.html","ca491059db83ab0dcf510ff5db8ac870"],["/tags/Promise/index.html","399690bc1fbefd83aa4c8d62c8e1c008"],["/tags/RabbitMQ/index.html","7a55ca9dfe6ca4bc710cbd941fef473d"],["/tags/Redis/index.html","3293f844396f88fcea53f4b7b78fdff4"],["/tags/Redis/page/2/index.html","46772571220029b9e1325c00b1f188af"],["/tags/Redis/page/3/index.html","c779c58bef4ce486199ad9efd9cd21e7"],["/tags/SSM/index.html","5d3c9cf146562e12fbfa2bcc5d4bb368"],["/tags/Spring-Security/index.html","3433dc3a1c8aa7f5efbfdf5e878d2820"],["/tags/Spring/index.html","cf7922798a05981674d5fa41e15f94b4"],["/tags/SpringBoot/index.html","5fdbca05fd6213cf005cb35c27683ac2"],["/tags/SpringCloud/index.html","c7554b44b033874b75d19f8108a354b4"],["/tags/SpringMVC/index.html","0849c0b38934f698e72bc40b15b61c6d"],["/tags/Swagger/index.html","ba6dbea43ced647a4d567afc75835d93"],["/tags/hexo/index.html","7fc6264d5d81d3ceefc8085fc87d4b98"],["/tags/index.html","bb7d23949a4c181b06248c11c1fc9b1f"],["/tags/jQuery/index.html","11d691d7089d2ccd9124380b5c6f6ecd"],["/tags/java/index.html","71b3ea29c46f2f1b3949bc72c0538aeb"],["/tags/markdown/index.html","b616f0fedf66bccf7e4d12fd7477fcfe"],["/tags/noSQL/index.html","a62250521799408f431a2d2fa1bf4e53"],["/tags/typora/index.html","64a7a128493dec9415159b3b6853c4f9"],["/tags/vue/index.html","1f84c005ae0e75220f265c272f5d0ab1"],["/tags/享元模式/index.html","278afd1abf9cbdb1cf6013d43321f3f0"],["/tags/代理模式/index.html","7a04a9d17b90544e6d5e0af69d80dffa"],["/tags/内存管理/index.html","b0b95a79dfd55acc9bb13e9b44c4e6b3"],["/tags/分布式/index.html","79e48f812bc78e3b24f8a83907ce28fc"],["/tags/分布式一致性算法/index.html","9853c7749d6b2b8a07044d2650d95f7e"],["/tags/分布式系统/index.html","81af6dbc6d2cd6a70eaf531ceb8f79ab"],["/tags/分布式系统/page/2/index.html","2b7b4694048336278764758a8e4b200f"],["/tags/前端/index.html","5170a6be97ae893f98adaa2d1640d14e"],["/tags/前端/page/2/index.html","bbb40e43178e3fd0273f0846d8cfcf22"],["/tags/动态通知/index.html","39541485a20283ce0a5665262fcf6c0e"],["/tags/博客/index.html","633410e51d0ccbe1d0d64df454d25eca"],["/tags/后端/index.html","2f816dedbe0402cc75cd2064e177d603"],["/tags/外观模式/index.html","66da3366c1425ac021ccce8c877af805"],["/tags/多级缓存架构/index.html","63c2b5c3cb66ecaf128bc45bf363514b"],["/tags/多线程设计模式/index.html","bb4022a0982fc51fc5b642d83525e049"],["/tags/容器技术/index.html","7ac29ff00441e44ddfb64c50ccdce8f0"],["/tags/工厂方法/index.html","68271eb44a229c82d791f958263a36b1"],["/tags/开源协议/index.html","b2ce75373900150117a4040ba66c01a1"],["/tags/异构同步/index.html","100e453097bbe0e177230d2579313860"],["/tags/微服务/index.html","b5fa64101a7a20a5fc9c805f7a7198b1"],["/tags/抽象工厂/index.html","d157738264719b950bcc258cc3270a98"],["/tags/持续集成持续部署/index.html","0195ac2b3180a697f7330c9031ef95b6"],["/tags/接口幂等性/index.html","4bb7c75e451491912f8473e85517493c"],["/tags/搜索引擎/index.html","6bd11eea42ab95c30edc622df19bf447"],["/tags/操作系统/index.html","ba42064b5996f7c27705625edcffd121"],["/tags/数据库/index.html","19cd958bd64febd94e3fe951a684d669"],["/tags/数据库/page/2/index.html","5e1a0a2fee1e15db1790176ab7aa12eb"],["/tags/数据库/page/3/index.html","ef137d7cc41c0d43ba4d1f829c28d91f"],["/tags/数据结构与算法/index.html","8c91fee960e0555d5c7ee94d12908918"],["/tags/数据结构与算法/page/2/index.html","a01f6f06f4ada13c2c5eb7caa6a9aab4"],["/tags/文件操作/index.html","1450268766d81b28759cf54ceacf81d3"],["/tags/日志/index.html","f09661bf2b8738b42aa9e7b8e83af06e"],["/tags/服务器/index.html","ff8e8bd8936155220c1ce9c29a488c55"],["/tags/权限认证/index.html","d6b45c82ed5ccf71997db558b59086e5"],["/tags/架构分层/index.html","9e9d8e82d4d15565429343e229f71d14"],["/tags/桥接模式/index.html","1b83a32dac008b47727b4ac36b424eff"],["/tags/模板方法模式/index.html","4315cf9762bb2e6c9bd0638fa2538d86"],["/tags/死锁/index.html","ba901c362ac4acd3d5265510d9540329"],["/tags/池化技术/index.html","e9a05e97056e547c2aca110c3f441761"],["/tags/消息队列/index.html","c9e0d75340dd9a4b3cc8254da985d13f"],["/tags/版本控制/index.html","99da69839ce8691ded523a9d0be13325"],["/tags/策略模式/index.html","4929d1c8868e2eda8768e005c823f39c"],["/tags/简单工厂/index.html","14ac56fabd5f0f6d2752c8115cb79465"],["/tags/算法/index.html","1b43b8199d95911a2377ca0aa00f22be"],["/tags/线程活跃性问题/index.html","27868d9a4d5f847eb9dccada144a0c07"],["/tags/组件化/index.html","3bd0852c90eb002b2b757b7b32d09963"],["/tags/经典限流算法/index.html","d37b805c5586fc81b92df2cd98a2ff11"],["/tags/缓存/index.html","0059a71f53079be684bcf0ad819d93e8"],["/tags/缓存/page/2/index.html","42f4fd6a9a2313276cc23b695f508cea"],["/tags/缓存/page/3/index.html","5f02c10d2d781afd4e30d032850b5462"],["/tags/观察者模式/index.html","15b3ea7e5d5e77f40403302116a925b2"],["/tags/计算机网络/index.html","ab6d743b636014693db2d3682d7d0cf6"],["/tags/设计模式/index.html","d866dc6061502c484c5d4b3ac542bb96"],["/tags/设计模式/page/2/index.html","8d72d2b3a17305bd91176be7ff206b89"],["/tags/设计目标/index.html","10f9a59fef7b06d1972b92de03df2c48"],["/tags/资源共享问题/index.html","ae8e6f7981fe1615516b7422580dc17d"],["/tags/进程管理/index.html","1e95627ecc622bd075f332a5e845e51f"],["/tags/适配器模式/index.html","c0d9bff7b9b0862ff77304c406635aff"],["/tags/通用设计方法/index.html","0e48642d1a5d7c51a0c61f73b14685f8"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
