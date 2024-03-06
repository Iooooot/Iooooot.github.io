/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","6c768680e0db2bdc51346821b5324371"],["/2021/02/22/工具的使用/博客的搭建/index.html","c270ef160fa4c02812e536cbc3703123"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","b4d451945efd2b0b7af6e5d1f1ca98cf"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","973be3a27e13483c412dd8c27700933d"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","e083a9c8a5ffb2643922bde3051e5c72"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","90da26dedb7c4f0a26c701f8e0a1febc"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","672721d8d5a1d03866bba857df770059"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","d79559994d60ad24bfc5310d4c3dcad0"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","103fe4b2fed27ccf35041cbace6d9b91"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","ce31bcb9fc981d0acfafa430afd95da9"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","ff9d28fae6b3acbb6bdf32eea95670c1"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","7ddd3da2e383293be3c74777a645615b"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","f99a8392995f79dcaa5b6b65ba704c05"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","a324f1f4b58ea89b4e5a757733fe3e17"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","c840a8ee38a3a8c2f36dc2c0023e5bc3"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","89a4ee9e62f4d9ad69fb72053a11ec90"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","6dc5a460035cb94273d24b6828f6a6b6"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","8c75ddd63019f475683a28f172a9b316"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","8244f7b12a2cc80c2daaf04fc7500b92"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","a0639a3afb4a1f27d1b4dbd358efc879"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","ccbfb7017f9e130bcfbf378e2f2361d3"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","a19cbb50ff0175b334312f2fc8fad3bc"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","84348bf16085e24947937c8d39930348"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","952c82c592741ec91f988854105cc61d"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","bce9caaea3a24c180ca7990313edb201"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","bd5cde9a653d9acf6f3efc5b9918c583"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","35ec43c5ba4582821da0aff4f4bd7c86"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","e933df8655cb8d96ee6f59312df9b3ea"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","97e6974f7783085b7cf4aa39b933d27f"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","3d7b40792ed9e3b506cc773430096674"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","45c88a3507a49ea73558e9a7aa1bd10f"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","f0c847bb57b94d06aab7b8118d01dbab"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","d356c6197d0b11d79aa9f644b5de5d7e"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","81fd27d4144da26687c290846bc2841a"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","6148d522cc815522183b4b9d148a796f"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","f10f6559938e2b107a7e2ea46b0cd096"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","d6ceae1540962d4bb6e3006d2a2f29ec"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","4e7733c8f93078d1da851305b5149760"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","495c77583b43d4c94305dea22315eea4"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","ffd74ef816ae453bb171f42e45ef69ca"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","ddf92e1149d764cf7138db7528262874"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","90c0e69283da731963297211ecb1ab98"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","d1ec9743041f6bae4b51aa0d023e3652"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","73b5c0a3d5f1f3cce113ed3c431f9197"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","f4d8d65cb2d94803cc8fd0eb8e2dac10"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","7f61b7bb721bab76d5e43b6bb9cddf4f"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","bf24ca0fbaef5b9efef8ce1d8a9f3228"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","c3375d879439a7dd379f582adb390e67"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","f47d9a7635ec76db38b1ea5d884814a4"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","e3cd0efc9389cf5cb9327efbe56097c9"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","59edc83f4ecd7466a2ddf1ffe4b7b12b"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","bcd993d05cf8dcde2404f75417367add"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","73689e8e239fb24c7dcd3ca8446a6f34"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","6925f66d0ce65e2592d57e802226384b"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","3307ff84b02d05f083e5cb3bfc6d2b5e"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","a17aa7a2ae4e2922d4ef8b142824c6e6"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","60d1581c5fb24e57fbd69b2d8c4f5b3b"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","4c291e17de3a34ba50eeb2df680ad414"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","1d1731faa00f3973d4d0a549d86321f3"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","571f59bf43c8367b076b2fd6bac5ec49"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","7df0e818283bf4b8a6679f4f2eb98352"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","776835cca7d0316f132da4fdbf6523c4"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","838b898ec8a2f23c834191c7db18ffd3"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","8de7d2dddd940084a78d7a2a2bcff214"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","3241b49f18f5b40a63db109db88b4137"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","ab36c76c791646df921be5d4eb7db403"],["/2022/08/17/前端/jQuery/index.html","eb957d93add5b72e0d77aee98b044c96"],["/2022/08/19/前端/JavaScript/index.html","e2ecb403346387038d021f9bd54c567b"],["/2022/08/22/前端/Ajax/index.html","064ef6338d2cf157769337e2e98d2636"],["/2022/08/23/前端/Promise/index.html","f5be94b88dca2bbc46515a58be2b504f"],["/2022/08/24/前端/Axios/index.html","1652c7713c19d26bf5d6f8ec8c4f134b"],["/2022/08/25/前端/H5本地存储/index.html","fe24d148858517b8affb72f8d0242b25"],["/2022/08/26/前端/mock/index.html","919b8e334dbe1fe578701edd80db0cb6"],["/2022/08/31/前端/vue/VueJs/index.html","ede297a95d0a738c84155713959e3cbc"],["/2022/09/01/前端/vue/vue组件化/index.html","fe924bfd3b356867476714a3ba5ab296"],["/2022/09/04/前端/vue/VueCLI/index.html","f8f94dc6a2451e85b8dc1e2d52ff372f"],["/2022/09/07/前端/vue/vue实现动画/index.html","26ac086500bd49e04979c11d2cd53a12"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","07e262648b06d6325d41635129e75cbe"],["/2022/09/10/前端/vue/Vue异步请求/index.html","7332e43017d7fde82a4d4a977821be44"],["/2022/09/11/前端/vue/vue-Router/index.html","3ae7181bd3b19604b2b5adaed1b690f0"],["/2022/09/13/前端/vue/Vuex/index.html","f58e479a16089d53036a2d845ef15acb"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","0047a87eb04ccd08d6d28245277b73c4"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","f9849da80a61357c2a188ee4d0fa7087"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","d353b251a618b901ec4e5c8ff552dc00"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","8e1c8643d12722e8d5346b2ca4412ac1"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","3611474af6eaeacdb2a593f9a05f9201"],["/2022/09/28/DevOps/Linux/Linux/index.html","ae3b14e908e2fb1ecf699abb7403bc5c"],["/2022/10/02/中间件/Redis/redis基础/index.html","27b138dd82f92e128e4cefd2039047bb"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","2bdb81c4a83e6c431e62124c774cb8a9"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","ad355c6d390711a2653a20eed7bae181"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","0621246ad9e7c3b2091382aae250a186"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","df6a03f9e8f9f3e998936a03679b4496"],["/2022/10/17/中间件/Redis/Redis集群/index.html","9512487966aa1bf57049569cec2246b1"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","f5c1e941f466ddd406884dddd8e213f0"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","80db239d5c9611152b8a0b572f4378b8"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","9b9f0f998828f105c09877567f310dc2"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","a00997208e85b1d11598e52a1e1f6650"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","195c01b80ef6b084efb3ff86aa32ed1c"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","2d69ec4f4b8b2191ac57434abf6692c0"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","803dd26f0aacca48ac21eb026c3993a2"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","5322b90868cfbc81964593a2c73930df"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","c28cdeac68868c33d3d21fcd52131ef2"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","e0cb5e9e75d646e916bfc2a4d2efd572"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","3f56566990fe367ea5c272facd18a42f"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","b7d1eb5532039d08c55a705e77f8300a"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","126267f5c716914dbf6120e6fdae3911"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","50826591fd165d511aaa3e51a0dfb5d4"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","9cdfa617719833dc4908c05aa0c253fc"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","b8f757d736699a6660d920f8c9e3b514"],["/2023/03/10/DevOps/CICD/CICD/index.html","7a5b51ea502ec75e0943882252b12541"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","6e904c15060c1fd5648153dc00aa710d"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","3660a4ea08287238a9ce26d50730d1ce"],["/2023/03/13/Java/NIO/NIO/index.html","4f4bbd403e414ceb7ab90e82609d20bd"],["/2023/03/14/中间件/Netty/Netty/index.html","59d9df6b1ac82fcdc48b666cd6f59aeb"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","6ce37b93d87421e7ef9116268c7b59c1"],["/2023/03/17/系统设计/分布式系统认证/index.html","735f4cae7085c9df0968af03669e1bc9"],["/2023/03/19/Java/JVM/JVM概述/index.html","10f200ad06b3849e1e39a36c64d5fc85"],["/2023/03/23/Java/JVM/类的加载过程/index.html","cf3f43887cbe34044ef4bd299c0505f4"],["/2023/03/28/Java/JVM/对象的实例化/index.html","813a4a7d1a09457238dd057b57e85c20"],["/2023/04/01/Java/JVM/运行时数据区/index.html","c921758cfc91fc088cb649711295233a"],["/2023/04/04/Java/JVM/执行引擎/index.html","e27fd0d2cf48809eee35d3112a9f89c7"],["/2023/04/06/Java/JVM/对象引用/index.html","3964091f6c84e380d391fc4b923f7bc5"],["/2023/04/09/Java/JVM/垃圾回收/index.html","8a8b5fca1d2efc3887e49ca34c8d3649"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","433449e515c2316af93263c541ec37c8"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","5d9decf9d87df2a736a1e078d89929db"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","1c7910285061abbc565bfa65426da154"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","f5501738f6d4e8cd0a3af7a2f292c6ea"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","edcb80ead41d1556b52ed097e7dba9d9"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","ae096d0762169fc66165fc892071ae3c"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","7e9578d664e020834e859d57cb5aae50"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","4700bb11c2222f7ecfb8c65d0038d5e7"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","6384febb1e662e7e64d5eef7cac690ca"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","dde96d1e21219e4c0773a66e078c3c80"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","dbca9a3a58678ab3e7c1afd96509a89e"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","509688f653751b1e8e8d580d04355df1"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","7ee5bf71c0223f620f9ba888cb8a09b5"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","46b2709ff1c256d76bc8e6ed5eb26143"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","7189bfe7f5c9263d7d517415e62f4679"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","47b5058f99c4ac93f2d1feb54750b226"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","5807feba3b1f02c396c9976b7bcf0e97"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","1ba56c0d6fb1c111ab03a4a95502d3f1"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","7a1e2644de433b8d7b3c9959fcce74c2"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","6ef45e9150ee54a8b54da00dfaba9ba6"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","22ad09d5ff0bafbed8da68921a8eef5b"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","7365814256957848f38d0d20df21c834"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","81c869628aaa7f99fb5759de86d26b15"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","bc9b79c86560b824445c47e2222ac5d0"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","2b72329a7801e60c5d8fd79496f9edc9"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","7d4d2536410edbffe876b9b5bceca1e7"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","9d8e67a0cd196e0630b893eeeede725e"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","a238322918b21eb80b4d6f72e7067f3a"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","41d56c7c0b94b9d1f7404e7c6a3284d7"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","1421e0335375e73e6f4e166c5cfd0f75"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","f716b7d166ad2203ba2e647cedeaceb7"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","c606ff6690af8b0df338ef2f6c57a51a"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","6d64c6af818aa83b2dfbcd1082448a12"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","bb3671ed492d203585dc56cdbcdeb5ac"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","337da798fd6e528de38eba157e18243d"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","fe75c22a59906d23850d746ccfd2cb60"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","f3bcdbd6a52f1ff0c7c65c4f76ec8198"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","4a452f5a5655fa0095859d97ff0efa41"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","c81ba6e43adb8a0203ec7ac751d7ed0a"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","ba335a3271d19fa32e149c22e334a20a"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","1b84ddeb1ae45eee2d9da54127ae1be1"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","d237694f51879268db5b007bcdc6ce94"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","6b81caa972d946cf893bf1e0fee79b68"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","5eba069774160afb575a54b72a60b680"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","600322846b7acc0afc0c0c2988db1f04"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","0c421b404a662e5fc51b85e20648127d"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","e80a934f984457ba8d32d79bcfde085d"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","fa8088140a5aa168a35ebf48105f252e"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","e2ff50a267410d5536e6c65a04fe43c7"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","581d7b2ede199920eb63cdde062ec92f"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","f67114b6f1e3ae2f979fa07730da948b"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","e05f5c7230731c4d6bc8d1f182052ea2"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","4eca9f1426ad5bd778a31f81f2f50e05"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","6f0d00be3802d948e7b079bc68e243bf"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","cc874a04c9522766e1b3e40d99ab01f8"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","e75ff0ffc86202e5527c1d2d8c729657"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","cf97c40e548a8d52d9d1beb029a26038"],["/2023/09/04/中间件/Redis/Redis事务/index.html","e5c56c498ce9f9fa37d01bdb1a86ae68"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","1cddd7f6fe9516c49e81563080663507"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","ae714fcd22aa99b458fd3ca1fe5e576f"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","c24943912d231cdfb4026b89791c8068"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","6b7fd8b809401373c86abc581dda3f16"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","e11901f059b42cd330985bfedb60dd2c"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","cb1519527da22e49d618434d7228195b"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","4cff645762eaa9490ce6ba27fe27eafe"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","fc73d3da8407539d6e034e78656b5e0f"],["/2023/09/22/Java/NIO/零拷贝/index.html","4b4be8f224eda6cc07a63669862b22c7"],["/2023/09/24/系统设计/JWT认证/index.html","707ba102374c4c5f3427f48640207fb1"],["/2023/09/26/Java/NIO/Reactor模式/index.html","989739b071a4c5cf048b9f9d0e00d50d"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","cd56845e1c0f1dac4c4da51b8a160f4c"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","b7339cb6bda72787e7effb19a892b305"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","235bee1b7a456d8bba0f1b4a441540e0"],["/2023/10/09/Java/并发编程/共享问题/index.html","ec5c9585b671c1b9f73ec827353d0154"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","01114271c4a7fd96d2073724fde26c5f"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","0c52297aad74622e5605a64e2ea27149"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","dd8b7fe31f459e93bbba122496d0c0ab"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","ac1280e19a7f60c422e1a9079ff17172"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","cfb3408919db185a271eda0e8d10e2d9"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","96de861131d51f6ec3bd4af04ff99513"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","545c3a237565c918ccab7fc3f5a3bc45"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","23476443f5745f02af2a250ec0960d56"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","99c8b9f7a0e3ecebc02312bbae25cdbc"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","ca964a8608dfdc20de43370fedbd1be6"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","60177c32cd294606d15af2b24668ff9f"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","3f4c111dffe3dcbfcf81012ef065ad0c"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","feba694ecd6a1e9e3cbbf33df07e2e92"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","b4ccbeb4dd6340cc2ff487522f38d910"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","48536658d9a90c18945732a88caf93f5"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","956893cf5c48ebd539dccea5a274d444"],["/2023/12/05/系统设计/开源协议/index.html","4bffa823a5c37de85b3bf0368d61653b"],["/2023/12/09/MockMvc/index.html","d5c626904a692b2b65c2197d21063192"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","e9b48efe75124f2b2cd3dab0305ab96b"],["/2023/12/19/MySQL读写分离/index.html","f8a1cf410308b3e5e91ec0e579be0727"],["/2023/12/22/MySQL分库分表/index.html","0e933c7a1925eaa0eca10195588c3411"],["/2023/12/27/利用NoSQL优化数据库/index.html","dc58a16087764f722404b0e1b445632c"],["/2024/01/06/缓存概述/index.html","c268c82ce059144fe275bee81c48e09c"],["/2024/01/11/缓存的读写策略/index.html","d0a975ec890a9390400f7f2e586b0859"],["/2024/01/14/CDN静态资源加速/index.html","ac031f7b896ba0530ecd8bf008c3dcf4"],["/2024/01/18/消息队列延迟问题/index.html","cfe2f108074d5435126805c056320cb8"],["/2024/01/22/高并发系统分布式服务方案/index.html","41b007db4bfd739638e1b473092e174d"],["/2024/01/26/dubbo/index.html","204178f1163efbc0680768c38e965617"],["/2024/01/30/微服务基础/index.html","e83e95fa94ad88b278bfbf073730f63e"],["/2024/02/02/监控微服务调用/index.html","605c3811dcabc6f9e53008968fc97f08"],["/2024/02/13/微服务治理的手段/index.html","615f916dc12e24489768707b3a887da7"],["/2024/02/18/微服务治理的手段-二/index.html","b14160c942a339b8117f832dbc54074d"],["/2024/02/22/计算机基础/操作系统/epoll、poll-和-select/index.html","b5055c220336f9151ca60aa2d662452c"],["/2024/02/26/Spring事务/index.html","d180ce8af5077e604531b586677be2fc"],["/2024/03/01/HTTP接口安全策略/index.html","87b9b77f5f4bb5dd0d265f10998015c1"],["/2024/03/05/HTTP优化策略/index.html","91d36ec0922809101d3e71cf4f177894"],["/404.html","d54c7ba9a5858864ee49252c4c087700"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","d750410e7b5f29363aa97b2cfd3de4b2"],["/archives/2021/02/index.html","53b857d9268136c1bcc1462be5ef8387"],["/archives/2021/03/index.html","39f3269ddc4fb54253eebcc4072a9194"],["/archives/2021/03/page/2/index.html","f5bea1554c9e2ad6de0b480cecb6ab27"],["/archives/2021/03/page/3/index.html","efe4f7e7add96dbbe24f01a619e4f79f"],["/archives/2021/04/index.html","771df7eeec4ebadd81a58353c5466d1b"],["/archives/2021/04/page/2/index.html","4acfe3761a62edd440c9888e6141524e"],["/archives/2021/05/index.html","a5e47d2f313bce37bfec7fb294e2e9bd"],["/archives/2021/index.html","16c71e6dd14e71357c10c40a46f3f81d"],["/archives/2021/page/2/index.html","afdbe9a1793cfccae63c55cf95f7e6f6"],["/archives/2021/page/3/index.html","14eef90cdfe097b2cc8d9ceb89cc6c38"],["/archives/2021/page/4/index.html","cb21634c5fdf9becf5a52b030b07e902"],["/archives/2021/page/5/index.html","d5fbcae62cf2407e05a6a524e4818496"],["/archives/2021/page/6/index.html","b22d469045b4a1661574df5fb3d1f919"],["/archives/2021/page/7/index.html","47d39e3f27b76dcf23b79d3dd1be7534"],["/archives/2022/01/index.html","9ac7336058dab50d19497ef23b9f393e"],["/archives/2022/04/index.html","e4d25547742ed24ad0501bf3ffe11d17"],["/archives/2022/08/index.html","fd522a0aebabd7c3143042224fbd43c7"],["/archives/2022/09/index.html","f389f8fc975c470316aede779182d45d"],["/archives/2022/09/page/2/index.html","42e51d61f000ef5d846897addb1200ab"],["/archives/2022/10/index.html","8cabb876e98e3e3e0466eb68271055a1"],["/archives/2022/11/index.html","3be70763033091dc33d465cc72a05046"],["/archives/2022/12/index.html","0d0bcc7ea05d304112c35da5a78bd861"],["/archives/2022/index.html","91778c56eb33ca1b05b10092aea747ea"],["/archives/2022/page/2/index.html","0ff86f6ab175d1fd8674b400a03f59c1"],["/archives/2022/page/3/index.html","18deed70e7b138ed2cb5775e43cf3985"],["/archives/2022/page/4/index.html","e5d21d755506b2ff141c5313f1133d6d"],["/archives/2022/page/5/index.html","5b3d0c3e4c836f0228832de31c007f60"],["/archives/2023/01/index.html","72cf6447f26db966d12c70b5dd160750"],["/archives/2023/02/index.html","a1b4794a47c1f6c039ddbfdeadbddce7"],["/archives/2023/03/index.html","4cafeed85df36c10c3d6de7c429b331a"],["/archives/2023/04/index.html","5724673aba065b4b0ae0454c9009ea53"],["/archives/2023/04/page/2/index.html","c829b2148877d5b7d4ec4b223a96e8cb"],["/archives/2023/05/index.html","1c29ab359991331fcd24cdecf9013daf"],["/archives/2023/06/index.html","b306fb797def256b38e4b8e93192dd39"],["/archives/2023/06/page/2/index.html","086b6df9a8ab35fb1813a2950233f4fc"],["/archives/2023/07/index.html","a1bbf22c5bf38d0635b26dd9077aa8bd"],["/archives/2023/07/page/2/index.html","f555672f960454776d490d91fce9d400"],["/archives/2023/08/index.html","c1fe805f2ae6ce4009a1888963b3607d"],["/archives/2023/08/page/2/index.html","024ef03def12357d1d223179eb3ad7d2"],["/archives/2023/09/index.html","e95d5382c40279142dc08efb71cb15b6"],["/archives/2023/09/page/2/index.html","7c08d5c264c2137e7923d9467452dfb6"],["/archives/2023/10/index.html","7e8076a7bedf0547e5478024a1159852"],["/archives/2023/11/index.html","1a4914b74be34e7cc97b223d0a4e3b78"],["/archives/2023/12/index.html","f0bf2c1167bac5f25c129c2e8ca544dc"],["/archives/2023/index.html","149096a72e83dcfb23e46a90dbe0a65b"],["/archives/2023/page/10/index.html","50bd2c2aaec8a1d249cb16a970822d0e"],["/archives/2023/page/11/index.html","50a7c7e268867254a47d51bc10b56483"],["/archives/2023/page/12/index.html","37651dd045291256cf5145419941cb92"],["/archives/2023/page/2/index.html","5bb4eb945e3f3ebca79e824195dd2958"],["/archives/2023/page/3/index.html","de15f641350311f16185ce9c6c5bd0e8"],["/archives/2023/page/4/index.html","fcf8274f43dcde35d8b70ccf0227a86b"],["/archives/2023/page/5/index.html","cf3ce46c3497ca5b238316e5da43efde"],["/archives/2023/page/6/index.html","c0da2f78f4c22c8389b792301505dadc"],["/archives/2023/page/7/index.html","3b6fe3868a0a7424f77a4f4f27228aed"],["/archives/2023/page/8/index.html","e1de41ad8a9cb39d9e85b82906df6e44"],["/archives/2023/page/9/index.html","310c1e6a767bb32e030cce6d80de5c64"],["/archives/2024/01/index.html","b93a105de004c574dd634c2569fcc7cb"],["/archives/2024/02/index.html","c22c1f1cd2c811e629ae7895b31ad780"],["/archives/2024/03/index.html","b8bb1eb0609abcfd22450563c0a12a5c"],["/archives/2024/index.html","0b04a18691b76de1fa6e6a8c3c0d1d8c"],["/archives/2024/page/2/index.html","7fcd64c3e8a05be939738554a10b68f9"],["/archives/index.html","30eae78fe0d72379b92cadb57b0317ac"],["/archives/page/10/index.html","e778bae17444315e669da94b85cfa390"],["/archives/page/11/index.html","cfd2c0e6ad0181858de92a469411f921"],["/archives/page/12/index.html","f74d4f1793e35c90f88ef88150c7d625"],["/archives/page/13/index.html","f8788001344a4a41f9591ce07ce590d1"],["/archives/page/14/index.html","c062838c5fee1d68d4400b3a5bdf1546"],["/archives/page/15/index.html","bd70846cefb725e6c4ce48efa25a1186"],["/archives/page/16/index.html","2de6a3fd4aa4d6ff2b467114bdc6720f"],["/archives/page/17/index.html","ddbbb2031e06b28ff50738075e6ab952"],["/archives/page/18/index.html","841b7d4ef82e72f6b9f42f4893b34267"],["/archives/page/19/index.html","40af0c1ae0f304304ca9eb15b7f5b3b2"],["/archives/page/2/index.html","b3b8a817e86a57670edfd55171294ded"],["/archives/page/20/index.html","a3b3a5c051db222b7a538036db6810e1"],["/archives/page/21/index.html","8243162d67dd223373179c920fe8f131"],["/archives/page/22/index.html","fe4e7a93b33bad5bab3fc7d540873671"],["/archives/page/23/index.html","6afcb161d7f0f1eb41b687435a480f6f"],["/archives/page/24/index.html","24e87469dcfdc5f65baf480035be571b"],["/archives/page/3/index.html","b1571aee36d66f579eb162267993a8de"],["/archives/page/4/index.html","768aa5e81192696d009c8915583d5e69"],["/archives/page/5/index.html","89255d0c3a12173b098a098090c9285d"],["/archives/page/6/index.html","9bd70f2bc4375d92a46ef9bb471fbe7a"],["/archives/page/7/index.html","0afec6bec5248cde54807e5c036866c2"],["/archives/page/8/index.html","c573306ddfa096a546ffd8a54ff6656b"],["/archives/page/9/index.html","5a96e3ef2f84b67a2703129dd85be807"],["/categories/Devops/CICD/index.html","6cac3167e984147dac407220e7957e6d"],["/categories/Devops/Linux/index.html","482ff6d639cde7c704728312639ea0db"],["/categories/Devops/index.html","c5edb5d3e328577fe35eaaeaafc6d603"],["/categories/Java/JVM/index.html","b01f379807366de8cde4aca11ea810c6"],["/categories/Java/Java基础/index.html","305d5878c47e810baa08b749806601b8"],["/categories/Java/NIO/index.html","d7d2047ca49aab0e3d4ed4fdb13d25d0"],["/categories/Java/NIO/原生NIO/index.html","19697f205952d7c713f444beb14afe13"],["/categories/Java/NIO/文件操作工具类/index.html","ca7e23531d002c012cb293c4c33ee27d"],["/categories/Java/index.html","8452450d53bd5857e4a800387bcde512"],["/categories/Java/page/2/index.html","2b31ddfe05fbdef66d3059b99bc09553"],["/categories/Java/并发编程/index.html","9097e30641266d86469f3b583a743c39"],["/categories/Spring全家桶/Spring-Security/index.html","578faecb919ef300a8be4a13535b72e1"],["/categories/Spring全家桶/Spring/index.html","094122613230ffe677efdd8d26849154"],["/categories/Spring全家桶/SpringBoot/index.html","9ac0a61f8ad2a4322b750e16840d9cfc"],["/categories/Spring全家桶/SpringCloud/index.html","7710ae8cc36ff9a93d577807f6caf7f7"],["/categories/Spring全家桶/SpringMVC/index.html","925230f3f0c31c649eede624c5d355b3"],["/categories/Spring全家桶/index.html","2043172c2864289cab4d7ecc86657b8b"],["/categories/Spring全家桶/page/2/index.html","6a3ccfa5a184c6cc7168d625e380b3f8"],["/categories/index.html","468dc2bb139a247f9652306fdd295fd7"],["/categories/中间件/Dubbo/index.html","dd6c65a160e6d84478d7f0998305500d"],["/categories/中间件/ElasticSearch/index.html","c2cd5052b3de16b4548f7cc196a440ce"],["/categories/中间件/Netty/index.html","2e51664d82ad31492b8bb027d3691e7b"],["/categories/中间件/Redis/index.html","14e64ab01660bcc037bb673bc3971c68"],["/categories/中间件/Redis/page/2/index.html","839f7db0ecd948abf1f0b4960b84dcc1"],["/categories/中间件/Redis/page/3/index.html","1f68a9db972997adc4d41b079d6991bc"],["/categories/中间件/index.html","4ab25420c492e451a7a362efd9a8214f"],["/categories/中间件/page/2/index.html","46159ca5cb8ddecdfcceb28da69ca82b"],["/categories/中间件/page/3/index.html","9672d1eb8dbfaf48a65d021f987e2149"],["/categories/中间件/page/4/index.html","06e438f110a60f73d5cf8fc9b15b28fa"],["/categories/中间件/消息队列/RabbitMQ/index.html","92ec551c0f0d27e4faedb9d7747275a9"],["/categories/中间件/消息队列/index.html","07b1525bdd1d7bb58555940b26670cf5"],["/categories/前端/Mock/index.html","1e9865ed3a64c0e9d56541fab6b9fc28"],["/categories/前端/Promise/index.html","b58d3889b38193500b70bb5b1c838bfb"],["/categories/前端/Vue/index.html","511210f225f7df83494574b5cb585a2d"],["/categories/前端/index.html","b068f07a9da70c3e71694dd855260e0b"],["/categories/前端/jQuery/index.html","c81ce180b7fc9c2dfce48cc132efd26f"],["/categories/前端/page/2/index.html","f9781e3821503f1eaf82a36046f89b66"],["/categories/前端/原生基础/index.html","bba480bcbdb0519ffbbe760b594b58b4"],["/categories/前端/异步通信/index.html","76fba1361b7020d2745e3736bae3838a"],["/categories/工具使用/Git/index.html","4f1b7516eea96d611c00aaa12200213f"],["/categories/工具使用/index.html","822287a68da61d77016f9fe1dd848f35"],["/categories/工具使用/markdown/index.html","ac7815f6d15dcd38898221fe08e88f16"],["/categories/工具的使用/Docker/index.html","05cab23f372cef3c2beb1b19629f391d"],["/categories/工具的使用/Nginx/index.html","fe0f1efce75960395bfbb7fdfc24b80d"],["/categories/工具的使用/Swagger/index.html","f0fb8d9376ff8d00330d87c051d6b534"],["/categories/工具的使用/index.html","42294d593416a9564d7dd7a92a501df7"],["/categories/工具的使用/博客搭建/index.html","32df457a4346236a763c4100d87f18f4"],["/categories/数据库/MongoDB/index.html","8bfb58ad35791f87cf8d7456e2dc7f4f"],["/categories/数据库/MySQL/index.html","de737c64c6e609f10cb43c85bd5cb9e4"],["/categories/数据库/MySQL/page/2/index.html","537c27daa195d275832f6fd581fe454f"],["/categories/数据库/MySQL/page/3/index.html","063714bd5c17b1abd2a439d502a34a6b"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","76ae0d524d631e07cd1955814aeb0f92"],["/categories/数据库/ORM持久层框架/index.html","5344dcaca0f70321ba191e8bd9b0f9ec"],["/categories/数据库/index.html","6dc179ed1e1cad970efe8ea8dab93961"],["/categories/数据库/page/2/index.html","633455f7bd4c3af261bb85a832ef4761"],["/categories/数据库/page/3/index.html","0d4aca71fee5c4917fe306445b89cec8"],["/categories/系统设计/DDD领域模型/index.html","e9bf075a2d7d171655f739aaafcdb2f2"],["/categories/系统设计/index.html","d8fbcb57df05fa460ad887734b80afa5"],["/categories/系统设计/page/2/index.html","cfee81fdea031472a2bf8ca383b43076"],["/categories/系统设计/page/3/index.html","d10671bc47df31d16ef993e345286b67"],["/categories/系统设计/page/4/index.html","c0fc31a6be002ed2a29c5a8e005d3d96"],["/categories/系统设计/page/5/index.html","8ba5e273ce52c8e807e11b061aa2438f"],["/categories/系统设计/分布式权限认证/index.html","7904e80e1d47871c300f5883696f4dc4"],["/categories/系统设计/分布式系统/index.html","d2b1a06ee8da27717cb8ccaffb5fdee7"],["/categories/系统设计/分布式系统/page/2/index.html","d7bc8d3e1bf6db64bcb28eec27957eb5"],["/categories/系统设计/分布式系统/page/3/index.html","33186d281b4f9c5d4e2c0abf04a0ff86"],["/categories/系统设计/微服务/index.html","ce4515b799dd6caa396c6b94b437b108"],["/categories/系统设计/数据库优化/index.html","64da2fad45a1262bd64b8ae56517d0a9"],["/categories/系统设计/设计模式/index.html","1ce54bf5ea65f897f4ac2caf937ef7e3"],["/categories/系统设计/设计模式/page/2/index.html","eb92eb91c7217d8a86cceca8f452150d"],["/categories/计算机基础/index.html","0a550cc29492703a8caff35c20938624"],["/categories/计算机基础/page/2/index.html","898a5ef622406463acbff2cdd1d1dff1"],["/categories/计算机基础/page/3/index.html","03b47ff0db42041bf4f1cd28fb4b4e71"],["/categories/计算机基础/page/4/index.html","5d1689d92a88246fbc52770f7a165b45"],["/categories/计算机基础/page/5/index.html","032576cca22ea6ba023e382cf0ac1825"],["/categories/计算机基础/page/6/index.html","6137c037989833f5ae196f2d785f3dcd"],["/categories/计算机基础/操作系统/index.html","b51d40039bf135b21d188d1972fcfec2"],["/categories/计算机基础/数据结构与算法/index.html","92bb6cfabc1d28fbd206d56453b4b6e1"],["/categories/计算机基础/数据结构与算法/page/2/index.html","41c2102c001911da16d5d5bca249a88d"],["/categories/计算机基础/数据结构与算法/page/3/index.html","bfb84d087cbde869b194c6adab11be92"],["/categories/计算机基础/数据结构与算法/page/4/index.html","28625733c8841c620f2d48a0b89185f0"],["/categories/计算机基础/数据结构与算法/page/5/index.html","6400e73f41c933b5c02172e23fb2ae85"],["/categories/计算机基础/计算机网络/index.html","77769ccaa00b4ccfe028bad92e8c2703"],["/css/index.css","2af5ea34362e0b34f799106b2659ad50"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","f89eaffdf7405d07ce6db1db0ad5b8b1"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","335c125a46c353015b97df05050537a3"],["/messageboard/index.html","7f66e950e36d5cbec3912fb08dfca919"],["/page/10/index.html","51dd1c956254512fe4e0f1e6b44b0fbb"],["/page/11/index.html","699015d5e222b69939ec52a8ba7cc9e2"],["/page/12/index.html","684393bd1bd8886508f20e9c6ccb367a"],["/page/13/index.html","6932716fbced80f4e6a6f009df508455"],["/page/14/index.html","ac0e9344db5401e229ffbd686526ee22"],["/page/15/index.html","3a1b82e2f53208608f4499e82da7c7f7"],["/page/16/index.html","be1878fb47486ce79573a09a050d1d22"],["/page/17/index.html","061063a7ededd6a8c06b4923e36ac0d6"],["/page/18/index.html","c8ecc654444fb4706cb4e1669869a8a7"],["/page/19/index.html","c955df7de880462de1b9f0f4702ed673"],["/page/2/index.html","9930e47cc344d5c93d12a89bd81b6ba8"],["/page/20/index.html","9099d1fd71c1b78b304de8b4cc4dcad0"],["/page/21/index.html","9dcd9cab4f14db763b19d7a199ee0bf6"],["/page/22/index.html","5e12f2a60a835084e5537dc75d90df77"],["/page/23/index.html","5f6b4a514fa7791a71524e011915cc9d"],["/page/24/index.html","333382f89622f6ceeba114a8f8c35594"],["/page/3/index.html","6f7767241c4ba77849aaceed7414cd6f"],["/page/4/index.html","510efa8557265394d67cf9c1709d4b7b"],["/page/5/index.html","922815d76c7a9eff94df3cc9232da487"],["/page/6/index.html","73126ea70627996810487ae6f05b0670"],["/page/7/index.html","3a12f4abcde3394c46113000fbd2ec63"],["/page/8/index.html","fe3cfd9dddc5d613808aceddaaa9cbf4"],["/page/9/index.html","30ba64a40bd5c76d159a41759f079507"],["/sw-register.js","2638d83580fc11fede32f17039f7ada2"],["/tags/Ajax/index.html","a951592c5a081eab08182c2902b16606"],["/tags/Axios/index.html","366743fd0500cbd6f6532753078601b8"],["/tags/BASE理论/index.html","125de1d2620f5a8477446d5b89020191"],["/tags/CAP定理/index.html","a7ee6d971c046599e7e192c306ab97b7"],["/tags/CICD/index.html","6b84f9fdc026d594b3361450f865d231"],["/tags/DDD领域模型/index.html","662042cbb1a86dba2fc7173ab6b5bdaf"],["/tags/Docker/index.html","577954842fbe4bb8d00f356c143db67a"],["/tags/Dubbo/index.html","29bb9c3489a326aca2e9136efa0647ab"],["/tags/ELK/index.html","8d8ab169680808d81e6780ba1aab29d3"],["/tags/ElasticSearch/index.html","bf1120cffc580c89c046688e86832a75"],["/tags/Git/index.html","52e556188ae13fa7a24fed7db02b9182"],["/tags/H5/index.html","b89bf200420f4f781ce6a3dff228fab7"],["/tags/HTTP优化策略/index.html","191eb04b61dd588f47d65971d3312b8f"],["/tags/JVM/index.html","cf606f871626e1f20f92aefd541e4f68"],["/tags/JVM内存模型/index.html","a65313e556ef8de9eb3c4f63f7fce08c"],["/tags/JVM执行引擎/index.html","2094864aaf01530b963076ac24d4f8ac"],["/tags/JavaScript/index.html","3d732f1febe1294a4b2fbb14ec059f07"],["/tags/Java内存模型/index.html","2fe5b4bb4ca3d546b2a1e74fcbc4776d"],["/tags/Java进程线程/index.html","bd7b3d1f224182d0191fbc0efa1961c3"],["/tags/Kibana/index.html","7603af2de8b3c09b9e80eba0bc805807"],["/tags/LeetCode/index.html","6f17bfc1f4f680ada17c2cfb2e30b36b"],["/tags/LeetCode/page/2/index.html","79ff6bec4669326d3425954c67be97f2"],["/tags/LeetCode/page/3/index.html","4ff2ca5c83e5fd4b0415896d5c4fc845"],["/tags/Linux/index.html","01c223ec532d423e3153ccbdd4b51a2c"],["/tags/Logstash/index.html","2a813dc08fc70d13e74a93d62b067e1d"],["/tags/Mock/index.html","bd37057eec11464bc292937b866ccd1a"],["/tags/MockMvc/index.html","ce2cbb111f0f296248201cffefca8927"],["/tags/MongoDB/index.html","073594a9ac7a651fdea946baca4e11fe"],["/tags/MySQL-事务/index.html","99754eedc6989fb7d6d63f6b78a9ea07"],["/tags/MySQL-数据类型/index.html","2bfa87e685308c28006a9ce7236b81d2"],["/tags/MySQL-日志/index.html","baa457499d3698101dc7da6cdcab662a"],["/tags/MySQL-索引/index.html","469ab47649035b76822cbecf66f88c49"],["/tags/MySQL-锁/index.html","9b400bb54d0178b190241e85e7913a98"],["/tags/MySQL/index.html","02aaa0f9a5c3b2661abe23236f7b9cdd"],["/tags/MySQL/page/2/index.html","69d2e0391be2e12e37b3d94cc9066016"],["/tags/MySQL分库分表/index.html","3a6bd491c08f5cf1aa3304af93ce1669"],["/tags/MySQL读写分离/index.html","a66bbc8b3b7b8668d9dbfaea3f16d1a3"],["/tags/Mybatis/index.html","db117c84b0b0ee8f8c6c47183c074f41"],["/tags/MybatisPlus/index.html","da97189ff7c7543d82792b82c084b526"],["/tags/NIO/index.html","c25ecf282468a43da81f7e21a5db9190"],["/tags/Netty/index.html","3783d4d7ecdef277f75bf49bf0c4964d"],["/tags/Nginx/index.html","5008062b6d3bdf72310bf94739607ddf"],["/tags/NoSQL/index.html","9e93792f14bfd3d5c647d4b58d1ef968"],["/tags/Promise/index.html","5e5e01d50aeb213f2fa5c1878ae6d81e"],["/tags/RabbitMQ/index.html","3e37a0870e5f69ea7bfe987255f7717d"],["/tags/Redis/index.html","f38bd7e8a0ddea989318c269d5aa2f24"],["/tags/Redis/page/2/index.html","6ea7153a90724347af23756a153abad4"],["/tags/Redis/page/3/index.html","8760a65b61cbf48da24744e127b15aac"],["/tags/SSM/index.html","dbf6ffad675e4bf9e2a0bc47ae6a63a6"],["/tags/Spring-Security/index.html","345f1bd3524f05d920f9fe466e67b254"],["/tags/Spring/index.html","191c637cad1f1259aba2e4ebefdc5238"],["/tags/SpringBoot/index.html","afddd5cdad1ff5f404456a9d888b24bc"],["/tags/SpringCloud/index.html","052457fd732148b57ce2c9259e12b96e"],["/tags/SpringMVC/index.html","39c23f9cc3fde3ffb33d997c2e1e0fad"],["/tags/Spring事务/index.html","a47676ca09dd7802ba9aed27bfac6b3a"],["/tags/Swagger/index.html","4b9f9aec82a232cce3f3cf48a1a7b19c"],["/tags/hexo/index.html","951bfadf086bc19eb1cf2d8378a02f61"],["/tags/index.html","e16c8c0c427651ea5b416d9e29e6bd20"],["/tags/jQuery/index.html","1f5cb983e84c036e7aaf04b29c834b0c"],["/tags/java/index.html","fa566836259b99caf066c964ba82df1d"],["/tags/markdown/index.html","af34133268c5617c66fdb1780ed72a8c"],["/tags/rpc框架/index.html","74fd473551256946dda3330d9bba1645"],["/tags/typora/index.html","9a0ac477450a5f9daeafd9cd6d112931"],["/tags/vue/index.html","8fc8f1ac0ad352b4877035cf4a33894f"],["/tags/享元模式/index.html","bfc5470f9e89daa247d7085451c31585"],["/tags/代理模式/index.html","0985f0cc6dc9ad53ff396fe1eb6b96c6"],["/tags/内存管理/index.html","15eeb62d8fca6255389d9c52fd0b4ea8"],["/tags/分布式/index.html","3fcc3aea7078800a46debe52d0a3e36a"],["/tags/分布式一致性算法/index.html","334e3d3078424af6d9fa0049d368fbc5"],["/tags/分布式系统/index.html","0fe444bd9ee6429b2eb2eb74c7ac4184"],["/tags/分布式系统/page/2/index.html","c4522cf7bcb99f5f4b32ef0910df89d7"],["/tags/分布式系统/page/3/index.html","4d16120fffde9ea0b84732c84635c90c"],["/tags/前端/index.html","fc5a8ac7ff8a17bf56e18ad9e3754689"],["/tags/前端/page/2/index.html","7ce2a8867279960174fadf94d76ba849"],["/tags/动态通知/index.html","f04b6edcc3bbb29aebc631988d8c7b03"],["/tags/博客/index.html","88f15ee7f1ad8a178e9abd206c106a18"],["/tags/后端/index.html","0eefe32bca63aac4d0afed532056e3d2"],["/tags/外观模式/index.html","9965a85a65d5a10cbfbc5c226c1e4072"],["/tags/多级缓存架构/index.html","5c77b0710c853894bbcad6b7f8e9ddf8"],["/tags/多线程设计模式/index.html","bb99a0fee8fad7a88044e2cdc0d81e42"],["/tags/多路复用/index.html","cff07de178da769e9354ab5175554f52"],["/tags/容器技术/index.html","6e2e3a75db705718bf3b2826994070bb"],["/tags/工厂方法/index.html","7e166fc314f52b39103225a6d6158979"],["/tags/开源协议/index.html","306b2b70c0505f328ca5a81f9f837528"],["/tags/异构同步/index.html","d9f4cbe73cc8899afd50976ff580cccc"],["/tags/微服务/index.html","fb84cadad156076ef2418322a7dfbbc1"],["/tags/微服务基础/index.html","638db1749f09493dcf9946a91f9feed0"],["/tags/抽象工厂/index.html","0dcd34482e64f8a3016ddd067ae0d0e9"],["/tags/持续集成持续部署/index.html","d71bc9a5d14f23e117145f55d908898c"],["/tags/接口安全策略/index.html","a5efb1ea818d4bccaded9cc5802ff248"],["/tags/接口幂等性/index.html","961a6ed2b9939c5d1498ca9f9b1f4a06"],["/tags/搜索引擎/index.html","c5172c92c8bb6278482a72c65f33cfde"],["/tags/操作系统/index.html","67a5c179cecc0d05547d56af4823b67b"],["/tags/数据库/index.html","b469ede3f9bc28110d3c8abadc96afa1"],["/tags/数据库/page/2/index.html","568e1eaccac2873ddd9e6ee1b9daabbf"],["/tags/数据库/page/3/index.html","9fdaf2e05a13b362faf87174bb14ec46"],["/tags/数据结构与算法/index.html","456d825ba2c0d55f052591124bc3689c"],["/tags/数据结构与算法/page/2/index.html","fa8a4bdafdbf7556d3a5d994cd3ce1b9"],["/tags/文件操作/index.html","58c8cacf7601528428c0dcf02792c939"],["/tags/日志/index.html","e33a44fcd40159ed1c51b7a1ec986a98"],["/tags/服务器/index.html","b6409c91ca4e81f485050a551717bad2"],["/tags/服务治理/index.html","8bd695b367395a765a5712550cc4dd20"],["/tags/权限认证/index.html","004f0801b0c0c29562fc526e6d0b342f"],["/tags/架构分层/index.html","2f5505fc78f888241eedf3cb3b72e6e2"],["/tags/桥接模式/index.html","0a8092cdcae057022472e53e7894a660"],["/tags/模板方法模式/index.html","0a7d7e4fb16151714f9f599808d99dd6"],["/tags/死锁/index.html","4b2881c95b1c5197d09975908a6edd4e"],["/tags/池化技术/index.html","0aa38ab46d40b9d88c7eba928b1ee623"],["/tags/消息队列/index.html","84534ae072b8559e498033f4c3fb5440"],["/tags/版本控制/index.html","ea28041c922a1d53ac1cfc43d0d48111"],["/tags/监控微服务调用/index.html","e350c0e0c0f0265f515ac09464a0237a"],["/tags/策略模式/index.html","b790fc8e9c66af0dcd839d155d968eb9"],["/tags/简单工厂/index.html","83c2bd2ed56aedbbb140d7b3f36059b8"],["/tags/算法/index.html","b4a424595f06869fc8d496c3145675a9"],["/tags/线程活跃性问题/index.html","c3d24ea1ae2bc64b051bdcc7b30acb8d"],["/tags/组件化/index.html","e4c580ca65fc5da39b165f2c65598c83"],["/tags/经典限流算法/index.html","ba65051dcbfab648eb71854d11220808"],["/tags/缓存/index.html","5e0235444616829ba4b5e5c76e62d8d0"],["/tags/缓存/page/2/index.html","41f1fe44b192030dfca496b78f6684f9"],["/tags/缓存/page/3/index.html","ebb397c41a99fe278734e204a97fba21"],["/tags/观察者模式/index.html","95602bc7af16dd35df09112a29faefd2"],["/tags/计算机网络/index.html","90ca6d8ee53df0bb0af590ca60dfa25c"],["/tags/设计模式/index.html","34ba5f3995c0bea8a37938923a716fcd"],["/tags/设计模式/page/2/index.html","031271714894ac9c21be8433ca4eaa57"],["/tags/设计目标/index.html","b874e3c83295704d2d68f3173b166861"],["/tags/资源共享问题/index.html","082bcbccbd87c6124e6d385edcba98dd"],["/tags/进程管理/index.html","8ef32a5fdbc314d5e5eb63ffde2568af"],["/tags/适配器模式/index.html","f01681d496e1da5b08b77a7efbfe4f01"],["/tags/通用设计方法/index.html","09d56f4a48a332e09a64f46c1b793a38"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
