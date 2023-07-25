/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","f9bf1f51875ee043f4884357cd9049aa"],["/2021/02/22/工具的使用/博客的搭建/index.html","aaca6b92a0967f422175b3f32c457da4"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","7dabf32c0fa0d4bc0d748654ce25543f"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","783a79b49dc389c45b89ab41942e2b70"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","c3d23a70e23919c3a1c5fab44f6afa6c"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","8fb6f7b3c41a36c82fa24d1654313bde"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","531becdece0eb41497649915a8f9df8e"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","cef4d2311c16fe73c7da5a7a38f9aa30"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","79ea70a34accb2e00757638e1d21a768"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","9c376a903d8d8c036a0dcc6d0eefef90"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","df5324acda88d222ab75ae0430967912"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","d198fd677dc66ca172c8efd41f988e22"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","3de39dc8f400131d5469a1cdce50ba50"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","9e04aa51776c810b3b67dfc790c845a4"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","7396567515148d2814ede9fff0ca469c"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","c35767147d4454dbbe311e04a0646dc9"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","c5c29ed472347694d85d55fcfb8201a7"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","f231fedb4e019a467d655a3e0c90497e"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","7d29aeecdf7bf8db43647322d84ecd9b"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","765e48c44a716118cd49eb7178eb2dee"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","d5bae334ee1dd84d3679512343e6c069"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","c67f1257c1cc5b237398a2068e399ef2"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","4382da21738166a9066f67e4b358a184"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","41d1fe9f4b028e8022f9ca3250690a88"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","4b93c934854c4f36e095f42757599e4e"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","6fc11956d441629b5b9314f49b254550"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","2616624a120c38a1f759c3295df62474"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","5511d535d6b2cf3dc2aede921eb618f7"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","fd7559390766aa80a3508f9b10bd5b40"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","17382d7215027deb4dbb55886d6b7885"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","cea825639040b64a4eb7d94c73a3218f"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","b96228a4f5f3c45fe836768b94f00cf9"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","0b5da75337aa9a61bbd9fd66b8524128"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","190c0606190810e2e8a0e2873e575d98"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","943bf487ab7e8a06febd6373b30edeac"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","ba991e2cb5c2b04ca1f777d230744227"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","0407afe871c617259671c4d806d2ec65"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","4c77a320a4642a13ce78621d1f457a5f"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","1536edd446e0b66c75fca222375628b4"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","7e53e470c122b8613b39d6003fccc2a1"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","495335e67feb71a8a53d52ef2b403c65"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","e46eb3f5b61d545f585ac2f8c28c607f"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","cb839e304c50f0e5d182bc54bab81f6a"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","547c3368d495dc6bde2ad3920a9ddeb7"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","a8d669e824d51fa3ef62b3ee3dfb1617"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","619e9fb1fcfe3e1ae040c90c820db21e"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","77c4cc52a6092f2f077afc2410d55b68"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","02f55486f1c09e713a11d2d7a5c399e3"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","c70f1dcdc4e9476b93182ae3ade3a5a5"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","208b9f201df78da33a06058949cbe1df"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","13d823f485890ddd2f0d60b547828498"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","d392e07b79e7cc469df72d2a93b4d81d"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","322e9b856d22f912ad2c0e14da7d17e5"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","bb7a268ed86a28372f7f9fd2480736af"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","25cd1e9f7f3c9bdc54e95f9f28372ba9"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","3cdc5c446ca650da3b6be7a97493af37"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","c9aedbae4889a82fb58e821ddcdebb7a"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","3fcd445b2423c650a8f50f069402cc53"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","85361949a26a615993dc7c20313d4dfa"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","9e6baf81518bfd760e545a103465c225"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","2fffa29288e654c93607d77e80325272"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","0a8ecf323758108d55c795e42c866fbe"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","a86553e4d4b11deef1627b7020518a19"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","cf6c9a4fabc7b1306163caecc6e58fa7"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","764dcfd10e8f4fc768fcdeab41874de6"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","2ec2c59298837c142562c9ee58f4bfc8"],["/2022/08/17/前端/jQuery/index.html","286ec8f5942cb9d001492ff4dd9a91b2"],["/2022/08/19/前端/JavaScript/index.html","0738979e7c44ac25dd9e606c50b5bc75"],["/2022/08/22/前端/Ajax/index.html","5ed28708c601ee00a777c9824ff36c4c"],["/2022/08/23/前端/Promise/index.html","affbe853d942914994efc1c468f88673"],["/2022/08/24/前端/Axios/index.html","ce6eb860d8e88e345f6d8326b779c947"],["/2022/08/25/前端/H5本地存储/index.html","1163fc3a25f4f87c361de024031ce9ee"],["/2022/08/26/前端/mock/index.html","1d31e49ca3298ab8b07ff0271c62d8c5"],["/2022/08/31/前端/vue/VueJs/index.html","fa8aed412041d2bd4d9cafeed7436e98"],["/2022/09/01/前端/vue/vue组件化/index.html","37c715a54165ffd1e76c8e94283a7dff"],["/2022/09/04/前端/vue/VueCLI/index.html","2779c80427ef0f1977be8597fa11b35f"],["/2022/09/07/前端/vue/vue实现动画/index.html","372d74109e835ae74d514c43a6fe00bd"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","712450e3fbed76aefdfada9b58e4f43e"],["/2022/09/10/前端/vue/Vue异步请求/index.html","cd5fd6bce34d1792664946f8a181b416"],["/2022/09/11/前端/vue/vue-Router/index.html","2cf8b0d9f0dc5b6daeaabf600e8a1917"],["/2022/09/13/前端/vue/Vuex/index.html","d897de74c3c62b6eb0f287a8afc5e2fe"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","ecdc4f3524e3b5146e0714f26e7ea52c"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","6ae222616fe26d3970e7222920dfe8ba"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","85fc31dfb52a0498a0df6c52d923b70d"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","5c62c7baf11d775dc503246106dd4f8a"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","983cfc9007753ca394980fbdde5770e2"],["/2022/09/28/DevOps/Linux/Linux/index.html","c495e9329ae8e3cb6e8fd747930104d1"],["/2022/10/02/中间件/Redis/redis基础/index.html","86b9764d1989bfa8abcfc4dd7c2ccd3e"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","7659c6a015e3e3a873922c2d731ca45f"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","bac98daadd93c24cd1f1b69e7232d8b7"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","bec1852647b9e939172de1e8bf6eae8c"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","f9e8289d3804d9e1e2dc7a90e0d17990"],["/2022/10/17/中间件/Redis/Redis集群/index.html","82836a05ec3e043f49f2c89ea1ff24cd"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","15a3620d51bd43d64b055d1a21b96e66"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","0666601d25364eba61f10551508bf0e1"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","1a68b2f6eb821fc8af471a4cf9686c3b"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","f684532a48c8727aeb1294c53dc162fb"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","0115a0b9d728c522a2968d28a946f1bb"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","da04c2be282f04a088a06ea16cc80897"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","12199310f7e6dc67031ed41aee4e42ab"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","606b551e038bc2ea2cbe956498f89158"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","648c95eb01a813bd38240e35f98a80ce"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","469f92066d86defeaf6d4cc99170df6e"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","9c9dcef08bcedf4d505da2ad9b32f0b8"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","6cb62556b0990147d1010a5e70d92633"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","b70865234964493d2990bd211875b315"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","82cf3d456b83bf58495b3137ca938e55"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","1b20f7d199ddc977c32eff4e78dc0713"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","6ba987d19e12cd8a1164dc4bd36d4a84"],["/2023/03/10/DevOps/CICD/CICD/index.html","678aca0d8048dd62efe3f46111194a47"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","178582cd74d1f7e33b2431a2a0b6e680"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","b40befcc24a4da9a1e28d370a84ce987"],["/2023/03/13/Java/NIO/NIO/index.html","befaa621f120cf81ff65e3e364a66079"],["/2023/03/14/Java/NIO/Netty/index.html","62e223e5428bc91c8e73befaef26e87f"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","a41f930cc4ddd840dcaf22648e2aec90"],["/2023/03/17/系统设计/分布式系统认证/index.html","e57d942701a7202143054cabe8fd77d2"],["/2023/03/19/Java/JVM/JVM概述/index.html","5eb4dca3f8f5008194c55e5797ab88b7"],["/2023/03/23/Java/JVM/类的加载过程/index.html","f91dc7451284723519c522c78e63dea0"],["/2023/03/28/Java/JVM/对象的实例化/index.html","e1ebc4f240825fcd6f67a6f8b8699451"],["/2023/04/01/Java/JVM/运行时数据区/index.html","a5b06ba6a4d02b8cc72cf535d7c71bfd"],["/2023/04/04/Java/JVM/执行引擎/index.html","f651da759ba65de83d206951079b5c36"],["/2023/04/06/Java/JVM/对象引用/index.html","447a6d800e4ab762e3d1242f024e47ca"],["/2023/04/09/Java/JVM/垃圾回收/index.html","f6c2d4f5b5b97accf77ac697d6001f93"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","9fc52d5dab8efe90b2fa162d2dc4d86f"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","9aeb8ccace8ee73fe81f6cb087e77afd"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","b1ba4fa2286242bc1a9bd75e76f9d29a"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","3f7109135f5b0b1ba70b41cc65070ff0"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","fcd4420031ca3eae913c6d149352f345"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","e9c5e750b8b6c35bd7f2aca92a327254"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","b4815a018060d1024b12c35e7dfe12ff"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","4b3e8d5c79c449278ea13989caa67009"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","21e17db1cf007a7f397ad87782cdc590"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","394ceadf8fd92976fe97d22cf24803c0"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","ebd3dfb7a6bd0f82dfcd516cfe700a67"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","0003d089a5c2d462a355aea22aa930cf"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","e3c23e5d87c8a5385603d11bd5d051f9"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","fafc61892ab33e59233a55a775b0d47b"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","be0db6486deefbe89a20ad31cf049a24"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","9daf91512ffc1dab1974582d03fe43cc"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","46b34afbac8801ed8a9adc2425c4fdfa"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","b90e327923189f8bf46bc72d97f9ed8d"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","39ec195c7534905cb9fd2b8f07dd85d9"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","62e71ac416c1b5634795f0f2ddeca721"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","d4c1a1550d7ea7f5b2565a2aa114b613"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","0cc3063615d0db70b09e3419f3ee6550"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","e26849cee5ecdb5fea6f20244049450c"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","786b3ec56dee7ae9a1af8ee8f0c92572"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","b0cdd4ed35d1ee1e017ebc84685e8e2d"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","e1168399d25c0916e702e1b2434959bf"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","0feb39fe01216b72c731c6613abb886e"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","29c6c96281cbdbcf17494314dde57cca"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","aff55e9ea1a37ca497daa84640d70881"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","b41b76fb3bb8a790f7ce00de5e3a6233"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","66a9d1a179e78886f950aaf56dbde71c"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","2eb8223b8f1b46ab02d8dcd08daea810"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","6922ffc712344042d350e4a0159ff294"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","b315bffca8c0e0b69d945439dea3cbdc"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","16777fef119bf2e89f2ea6d5626c010f"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","d670a339e83fe1f603e21591add98b44"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","120a9ddd5f3823f0b7c698e492df3fc5"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","5c50c2163328cf6faccbabf9c9f3230c"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","c1edebb835aa93a9dd177a415dbc76d4"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","4ceb0a455c591eb8bdc4537dc858b7e7"],["/2023/07/25/MySQL自增主键/index.html","7ab3b2d3b041d1fb670eb1fb83b8116b"],["/404.html","80c11f87648cc42bebdfdd030878985e"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","2705be5ee93d583f02c91eb739094324"],["/archives/2021/02/index.html","04b46f25e99e121fa3e6f9001eaf3bf2"],["/archives/2021/03/index.html","5c574398480b3f87982eca97a986bc23"],["/archives/2021/03/page/2/index.html","05958b16353fa6076deffdbbc45daa4b"],["/archives/2021/03/page/3/index.html","7240574257b482a151594de8e72e4f2c"],["/archives/2021/04/index.html","cd26cc98c6a4fd1f8009487d9c0550b3"],["/archives/2021/04/page/2/index.html","02eef7db955987ce71133b393a3d4a1d"],["/archives/2021/05/index.html","5f49f23254f04eeadb6c03dcdb017fc8"],["/archives/2021/index.html","398d084a10cdf43b207f49f20d4b65f1"],["/archives/2021/page/2/index.html","2876c8117fc08b3938db6d9f2c4b389e"],["/archives/2021/page/3/index.html","754cbba16b0a6c208696037ef704926e"],["/archives/2021/page/4/index.html","8d0f0d19153fffc9763f83976cd7a81f"],["/archives/2021/page/5/index.html","8de09d614ae54000b575fb4784a6637c"],["/archives/2021/page/6/index.html","d359e9f646b2ae0b782cdd1200a85ea2"],["/archives/2021/page/7/index.html","70d6b9cf23cdea5953a186a9da9fbf97"],["/archives/2022/01/index.html","3e75c19d70b16d029154d6445725378e"],["/archives/2022/04/index.html","cbd633a79b5388aab0e4bc863e8372f4"],["/archives/2022/08/index.html","4fec7b46237bc28e718c6f3d025b939a"],["/archives/2022/09/index.html","bc05536516d771eb848ef568dbc444eb"],["/archives/2022/09/page/2/index.html","2a78fddbe8935dd979bb58ab39e43505"],["/archives/2022/10/index.html","9b059aec302f165d2640b8c463886948"],["/archives/2022/11/index.html","1f99e83a2f811d6ca2bfab90fed4940a"],["/archives/2022/12/index.html","966b5b916f0892560ba8d48284537b52"],["/archives/2022/index.html","44fd61fa25a9afd99c72e94305ef1a46"],["/archives/2022/page/2/index.html","9392d9be747911a5aea15947da155d84"],["/archives/2022/page/3/index.html","50d0e13dda80c3b9717be85a33a5be8b"],["/archives/2022/page/4/index.html","e67b22a4ba89848712b840cfcb8e23d9"],["/archives/2022/page/5/index.html","e7510748963d80eecf40d8bda85f09b3"],["/archives/2023/01/index.html","016caed99b59231c09abe98baed1af0b"],["/archives/2023/02/index.html","326ed0587d39c1b1a99e09f40928b6c6"],["/archives/2023/03/index.html","7b71b7cc2cae964f317ff6b8c7837fcc"],["/archives/2023/04/index.html","df2d3620a2db94b043d8aa5ca7f918b5"],["/archives/2023/04/page/2/index.html","53b97557f93a65f0a4096a153106d5c8"],["/archives/2023/05/index.html","37c2c2ffbaaceb3e70eed2cb18645916"],["/archives/2023/06/index.html","cab72d08f392f6b04d433de107f8cb2e"],["/archives/2023/06/page/2/index.html","7252c500234c53f92b5210f487e86de7"],["/archives/2023/07/index.html","77855bfba7aaf02211e38c6efdb32111"],["/archives/2023/07/page/2/index.html","8c6a2a7f9a3d3a0e9e59debd6616adac"],["/archives/2023/index.html","e5cca0af6a13eb10aa8a19b729c11c53"],["/archives/2023/page/2/index.html","bfa7008a1e4ffb16b4abcec4d949eca0"],["/archives/2023/page/3/index.html","98ef973a217a1a58bdf7af586333adbe"],["/archives/2023/page/4/index.html","5c5a1c74c940593e931ae5390bc728ee"],["/archives/2023/page/5/index.html","2415844687e6ffc94829a29791f7978a"],["/archives/2023/page/6/index.html","cc743f41daf9fecba0a984516903b57f"],["/archives/index.html","f9c941c55a1c1687638030554a41cb82"],["/archives/page/10/index.html","5e8b5d0dfd236058519d8cc84205470a"],["/archives/page/11/index.html","0c6b3ce87a82ea71e378d8bcb728a87e"],["/archives/page/12/index.html","8240077b17a94e6252bd396c628ab2c9"],["/archives/page/13/index.html","88ff0ad7e5da5a48f85814bfcfedcf5c"],["/archives/page/14/index.html","e5979dd6158bb878bcd3d20e63cdad0a"],["/archives/page/15/index.html","06511bf46846ce486473c7ee5b47339e"],["/archives/page/16/index.html","0428d1caa215889850060f8b22610477"],["/archives/page/17/index.html","49fe980a0825756e9d1e9eade77321ba"],["/archives/page/2/index.html","5d0b06d389716cfa42849db2d02dbcce"],["/archives/page/3/index.html","c247bb3767f6cafba6503beea32e8bf2"],["/archives/page/4/index.html","b0b4bb24a6338eea2614822c04237739"],["/archives/page/5/index.html","b282790c309e2e07ca5a69a3897dcf20"],["/archives/page/6/index.html","a3f06f20d6ae2755a7ee0881fd2b487c"],["/archives/page/7/index.html","c9ff7e12bbaadd7f0567579eacb77d17"],["/archives/page/8/index.html","69c8ed99fe728350338df0d07f943fcf"],["/archives/page/9/index.html","dd5cc132042ab87f6174c001a21be885"],["/categories/Devops/CICD/index.html","c6197b97910e2e5defeee62ec1d7e61b"],["/categories/Devops/Linux/index.html","06748a06aeaf012352a615c4eb10abf8"],["/categories/Devops/index.html","9a3ee60689a8e87a9d97e3081cb1807a"],["/categories/Java/JVM/index.html","5e607f3aa51cd34185c4d86a7c8b2daa"],["/categories/Java/NIO/Netty/index.html","258194af5daf7dda3c1b4bfcb82c15b5"],["/categories/Java/NIO/index.html","b3fe0450641ce1a7693ae651d4414e7d"],["/categories/Java/NIO/原生NIO/index.html","3ad8ce68f7c9ca7a7cbd8b4b480baa87"],["/categories/Java/NIO/文件操作工具类/index.html","d70fce95c39cf80d5ec7627952d52e2b"],["/categories/Java/index.html","bc2c43ce5aa51828fcd5dcf61a0ebd1c"],["/categories/Java/page/2/index.html","5c0d35242fcc78a3499ffbb3be159c29"],["/categories/Java/学习路线/index.html","e8599b97750620a52d7e3840b7e84108"],["/categories/Spring全家桶/Spring-Security/index.html","9c6d1942fce89d3c97361b5a4e0f1cf3"],["/categories/Spring全家桶/Spring/index.html","e54ef039289bdfd65ed27da54951708b"],["/categories/Spring全家桶/SpringBoot/index.html","c5f84f6955b62362721ce6a8ec3a33e9"],["/categories/Spring全家桶/SpringCloud/index.html","f3a72a4469cb858c022b15ee3161a545"],["/categories/Spring全家桶/SpringMVC/index.html","b12fc865c9747033a64cd5c7648cc53f"],["/categories/Spring全家桶/index.html","c652eda89be7b0d4dc0037a65282e56e"],["/categories/Spring全家桶/page/2/index.html","ab39e2aca30421dc8824e6d740dee9dd"],["/categories/index.html","363b03682f2c83dff7d1124bb56b8c12"],["/categories/中间件/ElasticSearch/index.html","dfcbee4fc4f4d31ed61b38be40c6c2d5"],["/categories/中间件/Redis/index.html","db0c384355b77f71bf428da05f904f55"],["/categories/中间件/index.html","fa737b892df0f239066017f2fd9839e7"],["/categories/中间件/page/2/index.html","01870b8a0bf73db36c34df733d6ca798"],["/categories/中间件/消息队列/RabbitMQ/index.html","8512bd0f35021720edbe73410dc2a102"],["/categories/中间件/消息队列/index.html","4b207d05eea2686099035db541e89ab1"],["/categories/前端/Mock/index.html","2c1c871ebc5ab1da40fabd5a745c76ce"],["/categories/前端/Promise/index.html","b6d5f0f55fe162d333008dc8535d7b71"],["/categories/前端/Vue/index.html","231807a99a8074f6e212e603ca53fb02"],["/categories/前端/index.html","3130b0b86b5400d88f6ed1214bdcdc47"],["/categories/前端/jQuery/index.html","dd81a4cd1afccafd2f6b9e4e97e6e176"],["/categories/前端/page/2/index.html","d566926c17be3dc903e57f6652653261"],["/categories/前端/原生基础/index.html","17b7d02d40b36db9b95b2faa07b40673"],["/categories/前端/异步通信/index.html","f15400b7bc073e38cc479caec08b5d68"],["/categories/工具使用/Git/index.html","bdde48baf77610ac09ef7d0918665277"],["/categories/工具使用/index.html","93f5be15237f9cfeac2856a652e416a1"],["/categories/工具使用/markdown/index.html","0b328c3596322970432925052d8519a4"],["/categories/工具的使用/Docker/index.html","e7d4e6554d29e755c378502fd8871898"],["/categories/工具的使用/Nginx/index.html","f1d18c36a5665b7a2d52969b716b3f66"],["/categories/工具的使用/Swagger/index.html","6b7729c969f8b492a1ca399dce381590"],["/categories/工具的使用/index.html","84fd11010e7a80852558c595d1ccbedd"],["/categories/工具的使用/博客搭建/index.html","924760c0273062e886d36c8800bd68e1"],["/categories/数据库/MongoDB/index.html","f2f652b9561abd2326d4ac23caef636e"],["/categories/数据库/MySQL/index.html","0c7567a69e542e07854fee0207b1b062"],["/categories/数据库/MySQL/page/2/index.html","af655d079af1cafe34e0af864673c9eb"],["/categories/数据库/MySQL/page/3/index.html","5c060e6111e93999de6877956370fcc5"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","cf71cb6e036e89094b607fe575eae431"],["/categories/数据库/ORM持久层框架/index.html","344fee70710f1f9382af1d0b36608e82"],["/categories/数据库/index.html","c3494814fa4b1f80b49b809d8b13614b"],["/categories/数据库/page/2/index.html","29fd721beec49a4ed154ef4a141279f1"],["/categories/数据库/page/3/index.html","8e7d949008e86c4327845493e839b311"],["/categories/系统设计/index.html","1523ddbc7b1ceebcb527685e0e59bb9f"],["/categories/系统设计/page/2/index.html","07e66fc8118a31d64a343c62715e5752"],["/categories/系统设计/分布式权限认证/index.html","434fdb9f8f9ef04c0369a98f04039ab5"],["/categories/系统设计/设计模式/index.html","2d911d59881ed917e34de2c5ba0aeaff"],["/categories/系统设计/设计模式/page/2/index.html","92c2f40a43ff31b04e13038fc36a477c"],["/categories/计算机基础/index.html","9eb099ab8ef2370afb36aa99f3c9a373"],["/categories/计算机基础/page/2/index.html","2289c66877cf0d8732fc3d00d679761d"],["/categories/计算机基础/page/3/index.html","810b142d062e5956863d5d3463eaf4cc"],["/categories/计算机基础/page/4/index.html","77254662bd5b894930d07527052e4815"],["/categories/计算机基础/page/5/index.html","592d6e475b60ef5ffd3860b17b4f960c"],["/categories/计算机基础/page/6/index.html","67ceeaeafbbd55c845c1e3f97609e7f4"],["/categories/计算机基础/操作系统/index.html","d1e9d9c501bc4d70b50e524d27ce4a3b"],["/categories/计算机基础/数据结构与算法/index.html","b95b267d2ac27118322ae4c83d89d476"],["/categories/计算机基础/数据结构与算法/page/2/index.html","78dcc1cef2ee961e1c808a7e69968476"],["/categories/计算机基础/数据结构与算法/page/3/index.html","bc0793b8d83108842feb6815263f7258"],["/categories/计算机基础/数据结构与算法/page/4/index.html","49e4d61df309aeee6fac72c0450d4e2c"],["/categories/计算机基础/数据结构与算法/page/5/index.html","de787c9078cb465bd03d8075abb2b45b"],["/categories/计算机基础/计算机网络/index.html","30d88b6c6dd7381c557bdb5d4bd89310"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","d70e0a30f5f4d05cc2390f16f2fe3ca8"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","fe6eb2b1fea1068eee311f4b69c6a667"],["/messageboard/index.html","959e8ae35cce8bb91965b4898852c8e5"],["/page/10/index.html","d9bc730ad8814b12d3e04706c1dd62e1"],["/page/11/index.html","0300a1c6aac49d15f4ac05a6f1c106aa"],["/page/12/index.html","d982b880d4d5e97e9eb8cf2426de5bdc"],["/page/13/index.html","a3856c9273b4504b8a283b2256471096"],["/page/14/index.html","d86141bd5c9e4b1ade4b88c8c93be2ca"],["/page/15/index.html","eb13d68d89307b8a81c35b31da5904a1"],["/page/16/index.html","881e1c0f2da1fee050e8a99bfc6064f5"],["/page/17/index.html","87e315dae49565d461aea8259df3932a"],["/page/2/index.html","2921450a1a4a9eca734eac45d49fbde0"],["/page/3/index.html","fc43f9bbe32246c236947e6a66473622"],["/page/4/index.html","fc10761578143d5f18c5be4dc15540b9"],["/page/5/index.html","10f2de862db0880b6bda64a06131a438"],["/page/6/index.html","75dfcbec7bdd793cd488becbb788f47d"],["/page/7/index.html","1e9a1bba97425389738b293f8fed98be"],["/page/8/index.html","214e08a01de2488665bfdcb3ed4da7b9"],["/page/9/index.html","d65c7b9bc156b6ebb249a46b7d7a5726"],["/sw-register.js","03cb5d070a61896ef4bbb1dfda16e9f5"],["/tags/Ajax/index.html","baae575a05327cc88c5312fc0c5c4783"],["/tags/Axios/index.html","0564983d6d6db12acab1fe1c02e112bb"],["/tags/CICD/index.html","54fae883556de468be8e3369e1bcf52d"],["/tags/Docker/index.html","2bb6c2756f5ed30683ad955882a92b00"],["/tags/ELK/index.html","d7e652ed161db90d5e4b2ccbd5d2bd84"],["/tags/ElasticSearch/index.html","cf04a8be7cf6f9a877735361d46fadbd"],["/tags/Git/index.html","abee61ab34a0d4a8e0d0d02ba4da1210"],["/tags/H5/index.html","c066e3aafeb55d4426cbd7acdbd913ce"],["/tags/JVM/index.html","5beb58611becfa2e422a92c1bc53c15f"],["/tags/JVM内存模型/index.html","38aa8448f95a098f016b2388bd162ea3"],["/tags/JVM执行引擎/index.html","7cbfb1e2292ddee2025adb99c7f9aaf8"],["/tags/JavaScript/index.html","3111e80076a365cb05c05afde520ad0d"],["/tags/Kibana/index.html","4e303f249f9f00ab11e7e4f24a488632"],["/tags/LeetCode/index.html","4d92be098d4043285a12cdc650b7264e"],["/tags/LeetCode/page/2/index.html","16b722f767958fd2f44ef434cf6663cf"],["/tags/LeetCode/page/3/index.html","7a0fb19be0002a4baf65405f097569f5"],["/tags/Linux/index.html","4fc2ed5abe9f0a6879db1e0cabefc5ea"],["/tags/Logstash/index.html","860e9e5c68d5a3b647ebd1f962154b31"],["/tags/Mock/index.html","dfcb881effe293339f52c9d499c90cc8"],["/tags/MongoDB/index.html","6dd24076227713c8b8d4ed066f40f04d"],["/tags/MySQL-事务/index.html","669b7821a0a8baaf39a7f7bba0f2be67"],["/tags/MySQL-数据类型/index.html","0f38545ecf631115722b643d06826d70"],["/tags/MySQL-日志/index.html","c9fd3af173d765d798dc8cbc4541a98b"],["/tags/MySQL-索引/index.html","854e705d6e78a3eaeadadf793a39ea6a"],["/tags/MySQL-锁/index.html","f39e5bee0f968143c2095e0f60012c24"],["/tags/MySQL/index.html","9abf2d2517168d6955b2f2022f96ea3f"],["/tags/Mybatis/index.html","688a62956e3e15c0e448bde37714961b"],["/tags/MybatisPlus/index.html","307c283450c672d53a094369c972c4be"],["/tags/NIO/index.html","c0465e947e3a6f1d08dc40ab9852a246"],["/tags/Netty/index.html","4f1420f82daea746deb97c68fe292910"],["/tags/Nginx/index.html","fde39cf7f73f3ec3f308b045bda24edd"],["/tags/Promise/index.html","24915c04fce02cc5f95de1aa62b679e1"],["/tags/RabbitMQ/index.html","052c6798b9086028926e9102c72ab960"],["/tags/Redis/index.html","5319c712b6c478d396269b5df6cf29a3"],["/tags/SSM/index.html","1372d7d5d156cb68486b4764bdf40bba"],["/tags/Spring-Security/index.html","03ec73f5b010e6ba34854f73853d8451"],["/tags/Spring/index.html","97213eebaf74db854446f6d52b0f3ae5"],["/tags/SpringBoot/index.html","7df3156858da6b3e1b81b7b1c901c677"],["/tags/SpringCloud/index.html","f205b9852a837754f8f06c526f993ff0"],["/tags/SpringMVC/index.html","dae1db70f1ff0653ffb8f59529c7e1a4"],["/tags/Swagger/index.html","bfef0d8ef01c11434d64767975230f28"],["/tags/hexo/index.html","6702fd6af26c82070c0e548cecad8e2a"],["/tags/index.html","a64b4848e950cfb0493f3f42ff99736f"],["/tags/jQuery/index.html","0c14ed12644e3b82a61622efd421858e"],["/tags/java/index.html","4b8ec13af6dc92bce93cd67ec269bfd4"],["/tags/markdown/index.html","5b5b2b9b5292962f01e6fa7abdb5d25b"],["/tags/noSQL/index.html","dffc12319ee08a1fd082e4e28838d5ff"],["/tags/typora/index.html","97fe9e5b733fb0d3275802f93beec9ae"],["/tags/vue/index.html","4d6821d7020c24efc520a7f8517ef150"],["/tags/享元模式/index.html","c209d2277cc41087321873c7837011fb"],["/tags/代理模式/index.html","1f6566a6d0115555899c8a4dbad55370"],["/tags/内存管理/index.html","a3381fe1177be73929e1cfebf18723b9"],["/tags/分布式/index.html","ac9b9383b323505a57fe1103b819ec8c"],["/tags/分布式系统/index.html","3f0fc8d105412c67041f818811377b7e"],["/tags/前端/index.html","8f352c0b781bdaa60a590d909a8805ef"],["/tags/前端/page/2/index.html","034b38a53f18d381126476ad0206fd3e"],["/tags/博客/index.html","b41ba06d1198a80a4105b25b0cbf2661"],["/tags/后端/index.html","0bdf88fa75cc32fd0d8ce601eab9107f"],["/tags/外观模式/index.html","1a01aed1bfbf1ef09a9d798d07090c93"],["/tags/容器技术/index.html","427d03a545b07402511e3813dc39df13"],["/tags/工厂方法/index.html","a46b047550809ea72f6e13092abe0112"],["/tags/微服务/index.html","c0329161b006037550ed7599c237dace"],["/tags/抽象工厂/index.html","3af84093938476e41b8af995e89dbf93"],["/tags/持续集成持续部署/index.html","693fc4dc8f473c06bec8d078f933d068"],["/tags/搜索引擎/index.html","f22277eeb23114443ebbbf7f23cc041c"],["/tags/操作系统/index.html","354f127698653060d274bad3d62774c3"],["/tags/数据库/index.html","0b1fa26fbb46c1c19bee6f0c16b8e220"],["/tags/数据库/page/2/index.html","ccb30102dbe33ae6aae02ddaa7a6a58e"],["/tags/数据库/page/3/index.html","21a7180bffd1fa4f61f8cd827b1b394b"],["/tags/数据结构与算法/index.html","5efaf50ad720c8408215dea129bb5df3"],["/tags/数据结构与算法/page/2/index.html","40914e9073747dc4d5ae017ab32e4ed7"],["/tags/文件操作/index.html","918d8f298f1233d96fbad830e19f1dba"],["/tags/日志/index.html","dc4f71266a885401104558ec11de19b8"],["/tags/服务器/index.html","324b4abae519c766e74b0e13884d555c"],["/tags/权限认证/index.html","b68ff2ba3e3d00ad0b0ad6ad0c8c7537"],["/tags/桥接模式/index.html","b3f69a1bd41e507229e6f5c29f4e9bfe"],["/tags/模板方法模式/index.html","ea17dcda54eafc462e617fa0177748ba"],["/tags/死锁/index.html","8eada85a9cd89e6172f67a3d93e31260"],["/tags/消息队列/index.html","fc39d4461332d3d4ceef6af0670c3dce"],["/tags/版本控制/index.html","11cd641193fa14af3ea45be0e2833ed7"],["/tags/策略模式/index.html","22faa1ca3cda54db9ba43caa448c1d5a"],["/tags/简单工厂/index.html","d3eeb7b67dbdee0b3b987367ebf7759b"],["/tags/算法/index.html","ed65028f93442b10de0d772aa52a9a65"],["/tags/组件化/index.html","8a3a70608c3fd98edd750757c22a2d9e"],["/tags/缓存/index.html","8bdb23be68c019a1520ef9e9d50fffb4"],["/tags/观察者模式/index.html","f80e235d06431a853062ab551fd91d3e"],["/tags/计算机网络/index.html","a93b4c99fa4db1274e69e64100a5ae52"],["/tags/设计模式/index.html","1a1ed927016f056d38aceaf05622f651"],["/tags/设计模式/page/2/index.html","ea787db409cca343323a0e3f06bf42a6"],["/tags/进程管理/index.html","fca0c201a18ad717fae8924a9acefe27"],["/tags/适配器模式/index.html","5b86086a3c0820a7b48a66d62244510f"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
