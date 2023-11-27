/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","8d00dfb1241854cd475e4d4a53058ba3"],["/2021/02/22/工具的使用/博客的搭建/index.html","8ed8091e9e4e5a62c9dc910abebad172"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","200efd599e7f903afa6b59b1ea473c32"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","1318bec1d7f34e60211de7d7346325c9"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","5c5e9681d13a2243a3607626fc033f5b"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","1000a4f3152fab2432fa457588d0c71d"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","16be2292a731a500fb34505bf37b88bc"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","3e12ac67a60447c69da4d0cb169917c9"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","c16532ee7ad2003e1f251691bc5ef89e"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","a07d92df50cc1c98e6a821b265900b28"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","d7380a327ccb7a8ef145b348133b0a54"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","2ba827f7ec38d375aa698795f00d91f5"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","e65d1dfca5d8776053888b7bea7d41fd"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","62cde95399e815f3949186b11cc180d8"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","4da80a9cf0cc7803e0d4cc2ceee340d8"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","bbc9a0af27b03ba308acf06ed193ff31"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","c70b969f26cda58983f8714260d5c238"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","6bfd679bfe7d26e4ef4d5948ad040b86"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","957f2f5a5cdec5ee50b9578e75bc09c3"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","d1b5414fa37c1b2eb24e263afdf23ca0"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","a3c02236cdafad68a4e30f91f851bd1a"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","ebf4c043c0e56aafe1e8e08ec30bc5a4"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","f386cf585d753ddbb6c6c4473cca45a3"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","a9c70e126f80c089da69aafcc7ca70a5"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","83e27a174af89139e078613a54f6e947"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","38118f0100c3a44b31d94b53cb42abf2"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","ffbcd9b4390c85af2225060e01ee537c"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","9a7520a9887fd672506cc887d07540c4"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","b5f481c1eb4113460fe440f64495fcfe"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","e68b766e9da18016278a5bbe92f9ccd5"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","16e7b26d2f07c0c3548d6affe00f3f03"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","7396facd2f300bbf94a0a6cb8f93d420"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","a2a9e100485bde0ca9e21f36a671a7a9"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","8035d01432194d80a56113f7720a330a"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","312b50adfcc36c0366e4f7d99663c91d"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","4eed2edc0ab823ed36ec143948b2508a"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","249249e7f4fa70cf06738814e0d8bd17"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","1d997a090d5aa6eb485e7637e653f16d"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","7afed9c4964c49e0c5b2c0fa6ad1a27d"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","ae668f5121aec6edb831259920ecc2fd"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","c5c7692f9320c396fcf0f514beeb074b"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","7524881719c27f37c7c32e0cf0505eb9"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","1539ddb63794a171b5e5c28184816da5"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","92754c8b87223af33ac2541525f489b3"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","ebfd294c554760edfacc11fe730583ef"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","fccfc70261b232718b0a0684fcb2c741"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","de93341ab07341eea16b8b793933f297"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","a41f0b626c00be8b5744e2c0e67cdb9d"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","ab06483b77f2f84f6848ff465cf2c066"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","423c032e43272db27e1a60dec17d89dc"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","777ccf8134f9bb66d20072f1bd0b19c2"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","b63512a5ea6b8bc7413b7c93e1cc6c04"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","6c02aab204f5cbd8e7e46103fbcb2193"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","79b79bcb47a9f40b13bf7d14f8b9240e"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","7ad1e03ad7772126a468d3dfaa00a0cd"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","96631c8a003a7f27bde39f2fd0d1ee40"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","1e4f8db3ba2edfdaaf3b8ab137c6ef09"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","58781b04b1f70e5c79feca5792c64280"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","010a6968de3e2e40b416c369e32cd706"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","f77bc1fd71e06ea41888da482dfe5d89"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","4c493728f49771039326f0e9766d408f"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","171e013e05e296e496b0378e27427e11"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","19160f82986df8a47f1d7a683edadfc4"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","f3e3717a276838339e52e52b95fbf88d"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","63751c924e320a5c8ca1b0a77f18567e"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","6480e8f65e91a59156f540b3f772ec6b"],["/2022/08/17/前端/jQuery/index.html","e0c4e7211c7a2e0563d3067815430bfe"],["/2022/08/19/前端/JavaScript/index.html","941c7a9f774f9bd2c47c3ea30df76602"],["/2022/08/22/前端/Ajax/index.html","b293954a73498f37a0408b05a1dcae41"],["/2022/08/23/前端/Promise/index.html","0e9c022bca834e8d104a1c9b674e8c91"],["/2022/08/24/前端/Axios/index.html","81da1886c92ee27cc9101b7c136dca53"],["/2022/08/25/前端/H5本地存储/index.html","0809d7ae47d13faf8e5bbdf48b7170f8"],["/2022/08/26/前端/mock/index.html","5ef80603a02b5ea901e0bf7364a1ca5b"],["/2022/08/31/前端/vue/VueJs/index.html","61559bc82c40fb86ecf0233f22c1eb4f"],["/2022/09/01/前端/vue/vue组件化/index.html","e8239287f9cdf380167406f973be06b4"],["/2022/09/04/前端/vue/VueCLI/index.html","e0874a8847b1258fb20fd4ad0845d32d"],["/2022/09/07/前端/vue/vue实现动画/index.html","4e73eec12e6affde9252eb6fc3139a8d"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","b25d7171016a8768a184cd477d0c5f60"],["/2022/09/10/前端/vue/Vue异步请求/index.html","1dc00ec278b571fda6c8c771812ca5f5"],["/2022/09/11/前端/vue/vue-Router/index.html","b54dc3fdfcd43e6a281c5aa249110cc2"],["/2022/09/13/前端/vue/Vuex/index.html","1bba36eb4424c2b40758fbd614942a8a"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","7495e1857ebbddaf0d456f7f25c21116"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","215bad31d50c371a875d836b1c4eb63d"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","1f8708c9417911f2391853506a5944eb"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","98f4d624ad53901a9ff25f76cd542be3"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","a8a0bb857fc4ea76e7365d532a5d034a"],["/2022/09/28/DevOps/Linux/Linux/index.html","065d7156fec30a71453114afa22b3bb2"],["/2022/10/02/中间件/Redis/redis基础/index.html","2f0378caa6b12623f03726352b8863dd"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","3ae21a886d17d6cbb81e19320c49597a"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","39b6687013f56007f6f28e3c64dc06d4"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","49aa05c1de7eda1ee86020b94927222e"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","e3e15e795c126e13065729436224f830"],["/2022/10/17/中间件/Redis/Redis集群/index.html","79ad3fe4a6de442783b50d45819d05d3"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","92b97d3938b646b11df28fefd482d523"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","e9f01220972d65a0afcf5bde81e25d01"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","bda40e0b6ec97a69b9ff970855ad8a74"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","6e92896cfea1219a2c0f81deb223d1ee"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","42fddf591ce3184ef939556a4a84562f"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","f1d033edeeddb2eaa1e3db6ad66fc1f7"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","f04e3b82d910744d6ffe682bfa5a768f"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","57e3c7928f6650544864d24d29bfc41d"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","1a68892462d6fc3b83eb75f2f5bf6434"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","8e57a450c33f2e177fd243335998dc6b"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","23fb5fe9fa84ff4b49b0201d95bb46ec"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","b27b0a9cedb72003aef488b1c0fde984"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","39df3d112391cbf2f6b1536c963440cb"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","dec721d92037bd1100fde3ffdcced2ad"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","b26ac96f7fc6cb46ad85d38d18ae6e8b"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","6baaba324562b5739afb2b25e084ef4f"],["/2023/03/10/DevOps/CICD/CICD/index.html","904711c56f28fb74f397c0f7e0994cbd"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","2f299199dfdd177ed37e47d232a02f0d"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","50d4ef40cccc0d18ae6019eb0e112ca5"],["/2023/03/13/Java/NIO/NIO/index.html","8719827590827383b8059967d09da6df"],["/2023/03/14/中间件/Netty/Netty/index.html","cf1e349f8d00a65c3b515b530086fcb1"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","8d2b32cb3502d24007688f980a4bca4e"],["/2023/03/17/系统设计/分布式系统认证/index.html","bbbdb0ee98e25f7afc80c15ffb4c70ae"],["/2023/03/19/Java/JVM/JVM概述/index.html","8938a3952cdd21877f8a1a23aa9eed32"],["/2023/03/23/Java/JVM/类的加载过程/index.html","e0a6a0a183c6732287b48eee8b826414"],["/2023/03/28/Java/JVM/对象的实例化/index.html","f3a23b65f8cce1c67eb335ddb60f31d7"],["/2023/04/01/Java/JVM/运行时数据区/index.html","f781a81dcd2ccf7a6738a6cd9fd59e75"],["/2023/04/04/Java/JVM/执行引擎/index.html","134759b895b9f4bbeaba06a30553c175"],["/2023/04/06/Java/JVM/对象引用/index.html","269aa0375f2cca1e6299961cceb8f16c"],["/2023/04/09/Java/JVM/垃圾回收/index.html","9b9f11f20b665f2385f8b51cf99cea24"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","9d3e1c55e76b40345fb27217a814dc69"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","0b191112c6a5b9037418ae8c69ed0101"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","300eaa9acaa82114377f08c45fc83a7a"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","31e0c7c998f966c6db05d95365a50f5c"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","e3d332a89761223a059216ad4fa06198"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","fd2363c47f8c57d2156dc1d1bcde0719"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","0cabf0bb69fbeff4bc6b20c920153ed8"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","e9507976bc67d5bda04df1a17606cfd1"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","dcf518136fa8caff337872a6cbecef07"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","4d11c0a3d74131848e94ef8a188b6f39"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","6fee22454a3cf67418e543c1ab0feca1"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","fa797182246ff828e376c8b7e7047be7"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","37598e759ce09d2f6da1f0f5d67d35ca"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","7ed0dd785bb89c6be939a58d5d545454"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","1765cac5cafa981f044f8bcccd4f8431"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","a9b8607edee4ef312de2cf47a49db52e"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","afdbcdb969ee7b4965191d5a41f76fa6"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","34d67dd8a9141c7f64d8c0feec392ffc"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","e732fde3f6ec72af8fa2267a070897f9"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","904ddb1f4b66db26de35abe28208357c"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","68c56bbc7ed97c0601f5fa445d5a573c"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","799520b4ce56ed18eba0cf53ea61621d"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","13582caf81403afb283260c0012f0107"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","b58cd0ee65eb04466f4b62c46b7ef2b9"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","cfdde6e605047efb87932fcbea79b994"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","b00718edc59152fd9a8aa84548d38001"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","48fabe831feeea60383841be60d30e92"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","207c573ce3a0b77b96233a9fe53ce56a"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","d172dec9c208e368899b26c318ecfb4b"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","dcd2d2f3bd764b6421c68689b4b54417"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","136eeb15dbaf45276cc982e0dace3659"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","4c08abb17140be2eb9435e2784b84c74"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","f229ae959c58ae37549152474c3cbd2a"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","9287da8bbcf414f1b09a34f74e22a8f1"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","1557e098282ee89172afb7062ba8edac"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","7ac4600c03f3842f68db045e218e257c"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","0989833e5668b7f4f16bc51ec195e0bd"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","1802d51a0358ca6b544d37b128ae37cc"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","6733b32ebc92bbd12fa192e1d6cf3b8c"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","5a1e02ee93b5b6f9448537cdd08a72c3"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","175750bb17b481601fa14a7c2ffde575"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","eb6334c4b07d5bcdd6eb6f89089988c6"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","0602c3eaa32e612a51f12a6c9a8b94ff"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","53edd6e7a6c3166a20453695e69cabd5"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","dbeb48680a58bf0d1cfa17c99eb7eb7c"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","3f18b6c84d6dde5c72cd4431894eec89"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","08fc97039761d7d3be076924c3e81b60"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","1b48965f8b38623a41a3848166b6ac98"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","9a1de1b24722bd6f1cb2d5c372b7af7e"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","bbf858ac928c267ceb1865b6140fbe6c"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","909df2eb905c965b335be20bb6a53306"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","7050f3fcef45b586189d03faa129ed88"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","2a983d40a5df71622e914ecce44ac38c"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","c7857eea20586475b91c8ab65e75b536"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","30603345bd0e73f6456f7fe6ff7a136e"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","c03ee49b189c574db423736334b11bf3"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","4b2ab02e6c723e2026731789b17c3445"],["/2023/09/04/中间件/Redis/Redis事务/index.html","cd2bb1270cfa267b4d457146b8fc26e8"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","b1aea3502448256a4992a17347d372e6"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","f8dd7e662980f0127f35be013b5e030e"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","5039cd0019be176e013723995db60f0b"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","9920ae553d14538410195f5aaa84cd84"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","42d5a4d031c5b4610e8fd517b6dbbe57"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","eeacf94f2569ed14e9196454bc299911"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","bff1297b3d62bcd50992f83237fc3148"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","2f2a8c68598c4f3cc37a8c627452e61f"],["/2023/09/22/Java/NIO/零拷贝/index.html","c906b4d03de52ffaa6ea37ae474f306d"],["/2023/09/24/系统设计/JWT认证/index.html","ac1361b977281da66852c4f50a9b4fc5"],["/2023/09/26/Java/NIO/Reactor模式/index.html","c8807199c3ee97fb2910dd36f09679be"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","a1fab87ff5a21f924530130d3b6066a2"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","e642c3be07cdb892a58f13146ff9a7b6"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","eac5a5fcbf87d7bcfe5d1c8472a042d6"],["/2023/10/09/Java/并发编程/共享问题/index.html","096e8d0448019308291b546009a99168"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","c4ab52138068c3bb8da0228713663a87"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","06153d4ccf4e4faaae884848b98ee513"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","fd7fae80baa6f242a263306d945a53cd"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","25634fd1e0334a8d003478485bc01a07"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","f8b3d9cb043c8c43baa1eb661ee5fc1f"],["/2023/10/23/MySQL数据异构同步方案/index.html","abd6073aa3050bca1461fc23bcb31f6d"],["/2023/10/29/动态通知方案/index.html","188f7046473c23aaeaf9eaa83c723afc"],["/2023/11/01/多级缓存架构/index.html","674e5eb2a9bbfb0b2098d6d7b19a27c5"],["/2023/11/04/分布式一致性算法/index.html","ad5f20d091e0842a03370d45505c6740"],["/2023/11/08/接口幂等性/index.html","568138c65ec698b23bb3fb268a5e9270"],["/2023/11/12/数据迁移/index.html","d21ffa8f2e43828f1049cd7b2c43291c"],["/2023/11/16/经典限流算法/index.html","067f918cad914905f342015b5c2d008d"],["/2023/11/20/高并发系统通用设计方法/index.html","172f15790eefbcd143029ddae03d366e"],["/2023/11/23/架构分层/index.html","ae217a11287023a6449b1545e3d18ae8"],["/2023/11/27/高并发系统设计目标/index.html","fe02094f7f62577a7dd8814e3873aeaa"],["/404.html","8850b868f8a0ae8d519bc42a1b8b58fd"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","b86c019820e178630be8a9fb6cd9cb5e"],["/archives/2021/02/index.html","577bf09575a008520767e774302032fb"],["/archives/2021/03/index.html","cab27e55a40bca74ae432b2a9c2a67e1"],["/archives/2021/03/page/2/index.html","9c64fd479dd2bde5814f23753bc9459a"],["/archives/2021/03/page/3/index.html","46b6bd9a254d2b0f40f65099e2b78bb2"],["/archives/2021/04/index.html","9e5b977c140d6dd691aac304ae648aa7"],["/archives/2021/04/page/2/index.html","41facb109dfbf51be20d27196ae269a9"],["/archives/2021/05/index.html","47e87f713d022ff640b6c14bd8e76809"],["/archives/2021/index.html","63f8f7b27d85bcfc2048c906716e68cc"],["/archives/2021/page/2/index.html","a358fdb1dc072c419b1f926abeda8e97"],["/archives/2021/page/3/index.html","ce789ba0d1fcf1441d6f6bfd0fe192ab"],["/archives/2021/page/4/index.html","4bdab534be2d5af47a3fdf28bdde103b"],["/archives/2021/page/5/index.html","200105a6cba762c4d2cb37ca48665030"],["/archives/2021/page/6/index.html","aea73784123e73c8124771492974f881"],["/archives/2021/page/7/index.html","0700c25f98ea6be9d1cb38552f787cd6"],["/archives/2022/01/index.html","c5cd921d1c4abfbf2ca75b714fb0809a"],["/archives/2022/04/index.html","019e16a5ca37a8097ff9f44d4796a8d2"],["/archives/2022/08/index.html","d0eab5b5b9cd694d4b8ce1848511c757"],["/archives/2022/09/index.html","4727c74b40d3c46620bdd238a077854f"],["/archives/2022/09/page/2/index.html","33fd16d214f97d0d842bbe159fbdeb79"],["/archives/2022/10/index.html","1e33404c6d006a682f527666075e9147"],["/archives/2022/11/index.html","fb47758e473f00927dc1165fe2394ac3"],["/archives/2022/12/index.html","8ef012d25c4719fb8ef174e3aec65026"],["/archives/2022/index.html","6c1cf2643a614dc02eb190983c6119fc"],["/archives/2022/page/2/index.html","71856f77deb341823f5c5fc4096a705a"],["/archives/2022/page/3/index.html","ae16939ce13393917befaf92c6d81935"],["/archives/2022/page/4/index.html","c746cab8b84f5320b00a2ce72f5f5609"],["/archives/2022/page/5/index.html","7de70c9d4cdca373c66ba3e2a23e25f2"],["/archives/2023/01/index.html","e9209117b7988c02e9f1bf079300104f"],["/archives/2023/02/index.html","867caf1a57e44a3b241f1686c949f686"],["/archives/2023/03/index.html","22f1427a7586aa9d35b3685d45686883"],["/archives/2023/04/index.html","fc7369ef088c0d4bb878fbf1bd7146fe"],["/archives/2023/04/page/2/index.html","c94ea467766bf227f4e78cf96119ca41"],["/archives/2023/05/index.html","bb5501dadf8397626954f0b8e8d78979"],["/archives/2023/06/index.html","ab5f2f23205f9aa7fa6c49ca7da00fd6"],["/archives/2023/06/page/2/index.html","72b659c83b4fc3b74e4c393347adc95d"],["/archives/2023/07/index.html","3059f265ae75829bc70ca7e03909097c"],["/archives/2023/07/page/2/index.html","cd64d75302460ba92cc47e57720c7740"],["/archives/2023/08/index.html","f93fc9141831caec25c8094474c1b509"],["/archives/2023/08/page/2/index.html","cc0907210ca79b54e3f85e9be06fce7e"],["/archives/2023/09/index.html","e79ea30490dfffc48fe08bd67be06ef2"],["/archives/2023/09/page/2/index.html","e6d66ee7fcf27dcd4d7fb38abdbc7666"],["/archives/2023/10/index.html","538f45db715d5553324f3a3fad2053c6"],["/archives/2023/11/index.html","a79621a5950f179f01aaea5b0a06e335"],["/archives/2023/index.html","382ce0376e9f6c76789dec7ba981ed81"],["/archives/2023/page/10/index.html","ce5cd0964290c6f5220394580a24d34f"],["/archives/2023/page/11/index.html","32bc0ff34837052591c6eff58e591382"],["/archives/2023/page/2/index.html","826888f815f2f8512ef9242a5852f328"],["/archives/2023/page/3/index.html","2a0a424ae368146c1fb4ad107e637ea8"],["/archives/2023/page/4/index.html","e7dcb5502c9bd236c6cc73fc169bd95b"],["/archives/2023/page/5/index.html","6a87f34d0ca67fec34a3916ea6fa1d42"],["/archives/2023/page/6/index.html","edf457f284056d6139b4862cc69ae5d3"],["/archives/2023/page/7/index.html","c798981dfbce2c9193e798b5268d00eb"],["/archives/2023/page/8/index.html","1642ce751f00afe39871b77f30b9feea"],["/archives/2023/page/9/index.html","f06511643d983e7886d509d7f7f9ce24"],["/archives/index.html","39b4488785f149f41987dd4c4f575a71"],["/archives/page/10/index.html","81af7704a59c3a4b7fdc3ac760333616"],["/archives/page/11/index.html","e045d58e73f2a49df6bab06345c107de"],["/archives/page/12/index.html","ca94acdfaddf3519b56f08dde8d854ed"],["/archives/page/13/index.html","65d4b2a0df8a1304a5587e8b77a07fec"],["/archives/page/14/index.html","c418d8469cfc2dea0662e7c3ed131876"],["/archives/page/15/index.html","069924d985cc3eb61039d4c5e4e8c6e1"],["/archives/page/16/index.html","a3a54e37ff9d23f76bd1dd38e93fa3be"],["/archives/page/17/index.html","dca2cd3f27ee37bc6e4a997ad1bd0bf5"],["/archives/page/18/index.html","645ea943513bc71ff05c13b64a389723"],["/archives/page/19/index.html","da88dff9381e12ede70fbe21b200443f"],["/archives/page/2/index.html","c45905f3108144cc302306876d9cffca"],["/archives/page/20/index.html","fa13981041b5a10c1c4b5df7173d2e53"],["/archives/page/21/index.html","13cf840eb6fd10bdbc020368443c9742"],["/archives/page/22/index.html","669682f5cee070acb15066cacd593f83"],["/archives/page/3/index.html","ff92dd9ba332dce5b952e5cf57d21495"],["/archives/page/4/index.html","14dfb744eb4b8a181ea530a80e6432b3"],["/archives/page/5/index.html","a91c40231822bd74b0c21a9edf47928a"],["/archives/page/6/index.html","6e96b26196bc8e97596bd3f1c9c06bce"],["/archives/page/7/index.html","c97b9857105178380e91e54ed3879995"],["/archives/page/8/index.html","65e5d6ccc6616cc77fd4a23d6065e5bd"],["/archives/page/9/index.html","7539b61c2620643796541e8e1aab1eca"],["/categories/Devops/CICD/index.html","803f5a127e7e7cbf6bcb1e5270aa6eee"],["/categories/Devops/Linux/index.html","cfba935cd7bff2d911b87634b6002cd3"],["/categories/Devops/index.html","17e1c14ff9e76efecd4e8a92357f7008"],["/categories/Java/JVM/index.html","14bdb3295aac7b5ecf7a16e5d9e870d4"],["/categories/Java/Java基础/index.html","680b599f02b361302f86b14cb4f48dba"],["/categories/Java/NIO/index.html","14b30c02bcce5547b884a80e0ae97b24"],["/categories/Java/NIO/原生NIO/index.html","dfa7eac45abcf8c831796cdbd7adcf0c"],["/categories/Java/NIO/文件操作工具类/index.html","1c499ab1ce84dbe4b2dde19641b0dd0a"],["/categories/Java/index.html","b8581b1403158e28e47ad19fdd9254d0"],["/categories/Java/page/2/index.html","176999add1d5c4e0fefddd5cc10f87d8"],["/categories/Java/并发编程/index.html","f0ecb35b3465cc8fb001be5554d79a25"],["/categories/Spring全家桶/Spring-Security/index.html","d14aac6d3bd270b896ff2af151349c52"],["/categories/Spring全家桶/Spring/index.html","9167999d353b5033578f3ca3a2255b30"],["/categories/Spring全家桶/SpringBoot/index.html","54b26c66f850c6f81800fa3e9fc4534d"],["/categories/Spring全家桶/SpringCloud/index.html","ea4c6372663fd03914cae2198a200127"],["/categories/Spring全家桶/SpringMVC/index.html","149473db59f3fae9a8ab7b2974151f12"],["/categories/Spring全家桶/index.html","c806ad347af2803398a78a4f9f553506"],["/categories/Spring全家桶/page/2/index.html","483a46825882dfe7f56821c216231985"],["/categories/index.html","b4e625054976e94bc80bbeb17c5d98da"],["/categories/中间件/ElasticSearch/index.html","df0f9beba66d6e7e196d879e6809999e"],["/categories/中间件/Netty/index.html","fd4c108fa026046b8087367709517639"],["/categories/中间件/Redis/index.html","8b26418f7033e0a06fba41f239a7a156"],["/categories/中间件/Redis/page/2/index.html","16c88f9ec69ee7d0037392806e21ae7a"],["/categories/中间件/Redis/page/3/index.html","40765e20408ad08f8418ac9dd6a8f2b1"],["/categories/中间件/index.html","a5e9c06fccd5aa383e8f63ed0ba5ae2c"],["/categories/中间件/page/2/index.html","db874726bbab7ac77b07dcc79df1ca5f"],["/categories/中间件/page/3/index.html","caf2ff3131019a79b925df068008df34"],["/categories/中间件/page/4/index.html","66f7269bf64c2b66eca7d014dc9758b8"],["/categories/中间件/消息队列/RabbitMQ/index.html","7f05b7ba4575bfe14954a4a45ba6ac8d"],["/categories/中间件/消息队列/index.html","2131810dff117b7a21bbfefaa2b30cc8"],["/categories/前端/Mock/index.html","f3c9b7339d292cb5154cc9b8bd1bc8f2"],["/categories/前端/Promise/index.html","00e045b411e9914dca04a837adaa1c5e"],["/categories/前端/Vue/index.html","2e8f24ed8414b9168529200269c81f66"],["/categories/前端/index.html","11b78ce9e0a91909d12005ad879f9c69"],["/categories/前端/jQuery/index.html","1f5ebe39e65e83cdd1726d170aea642e"],["/categories/前端/page/2/index.html","646b1436a55c18ca991de51d0c99744e"],["/categories/前端/原生基础/index.html","138d733d5d57685763bee4065f586454"],["/categories/前端/异步通信/index.html","7a92ea4028ed1b99540f037fd0826df6"],["/categories/工具使用/Git/index.html","1ec23af4dee52a1f488a5d644a84c5ea"],["/categories/工具使用/index.html","33d6de2443d7ab35c0d875b02878678f"],["/categories/工具使用/markdown/index.html","3b5e34ad0e03b0a14e1d59f0c3bdc347"],["/categories/工具的使用/Docker/index.html","5abd484c313db1a9cd0aacb9c15f3ece"],["/categories/工具的使用/Nginx/index.html","41c820c892b9fec27d517dff7d208360"],["/categories/工具的使用/Swagger/index.html","e572d72de6015ad48e892413bab9bd43"],["/categories/工具的使用/index.html","f8f266be1f81ad2df590111d07afd4ba"],["/categories/工具的使用/博客搭建/index.html","907efd1345c8194c659373c36c298e74"],["/categories/数据库/MongoDB/index.html","fdfac55d68780cb2cd5b8aab1ee37885"],["/categories/数据库/MySQL/index.html","7cafd9e893f31988699d87c2b260561e"],["/categories/数据库/MySQL/page/2/index.html","860ceecb627706f3c75d69b017f6df47"],["/categories/数据库/MySQL/page/3/index.html","11751f9ca437d12a9568f68869ae280e"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","2fa27990c47aa47ca0391a78fd6eed33"],["/categories/数据库/ORM持久层框架/index.html","4f8f9512dfc99b8af00d9d2122952376"],["/categories/数据库/index.html","61356cefc7e55df6306485769ff8e05d"],["/categories/数据库/page/2/index.html","270be25b04e6af5dfa3fec35eb9fe67b"],["/categories/数据库/page/3/index.html","e4fd8d623b6c6631d977e5050f5b74b9"],["/categories/系统设计/DDD领域模型/index.html","08940e729bb13107a39920ce799c9266"],["/categories/系统设计/index.html","972817ca3501a1b60155cff9707b639f"],["/categories/系统设计/page/2/index.html","a7036910b08045ccfd1875d00aa9e17c"],["/categories/系统设计/page/3/index.html","d04856aab9d1a94a86b70f0ae7c3f32f"],["/categories/系统设计/分布式权限认证/index.html","4a74fad0529e4510e6087206749deb7f"],["/categories/系统设计/分布式系统/index.html","547c1f7ded3cad359021501dd78f2b62"],["/categories/系统设计/分布式系统/page/2/index.html","8604b07499c6c0d12265fd95ffdd36a7"],["/categories/系统设计/设计模式/index.html","c9ec52f0aa08ea5d193e187e19946d2b"],["/categories/系统设计/设计模式/page/2/index.html","9d4efb35b68fde7e540591d76c7bbb05"],["/categories/计算机基础/index.html","4c2c048a4d1389dffa538998b6315674"],["/categories/计算机基础/page/2/index.html","68482ed7d20202a549a00f1889158d0f"],["/categories/计算机基础/page/3/index.html","38935fd5ebc6085cae49755b40297255"],["/categories/计算机基础/page/4/index.html","f1d32c0700e7cea5ca909091554303a5"],["/categories/计算机基础/page/5/index.html","3e62c3e5a212d79b202e0a443518288c"],["/categories/计算机基础/page/6/index.html","c5772be01c0b97b4a7aa4cc062f46609"],["/categories/计算机基础/操作系统/index.html","58b3102701386f46725fc41f1aa49d5f"],["/categories/计算机基础/数据结构与算法/index.html","05ecf7e591e94ff8979627c3ef3fcdaa"],["/categories/计算机基础/数据结构与算法/page/2/index.html","9a52617c0fb37fc53689a0817ff6282b"],["/categories/计算机基础/数据结构与算法/page/3/index.html","c91628ad259d2a642d20afa58a7d5460"],["/categories/计算机基础/数据结构与算法/page/4/index.html","e55e7dd878e243fc57f7e5afe8647257"],["/categories/计算机基础/数据结构与算法/page/5/index.html","2bf2576edfeb544516f6cccab0bf4510"],["/categories/计算机基础/计算机网络/index.html","22e759dc0eb58511e17b022f07b969ab"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","79ef712429ce3fb850e9d3576c8d0102"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","69da3f9481dc0f96cc0a0000f8bcaf49"],["/messageboard/index.html","674bb3379689b04625768269ba41e671"],["/page/10/index.html","74ac7f4abc4a43a927cfc0ad841e8db3"],["/page/11/index.html","032e895123f2581a1e1f06f5b00b3944"],["/page/12/index.html","0511a262409785647fbe985b9f413ac3"],["/page/13/index.html","c6604ec8451b274e1076fdbec003148d"],["/page/14/index.html","5f5540cb265ad4c1a90df2b67f87722a"],["/page/15/index.html","d52c00a7dea4d9026459c38f7ca2e7d5"],["/page/16/index.html","4c2553021538339feeabd64ba33b81e3"],["/page/17/index.html","4706d6605e3e5000084108e3b1e9a8ab"],["/page/18/index.html","38246a7451609aaf496f4658a669e8ab"],["/page/19/index.html","48c0332e721589e9cb0c9e10d5240daa"],["/page/2/index.html","d4d403c5f5134ed3dcdedf4c617d4b2d"],["/page/20/index.html","a4503823f09c412d21d9ba10dce13191"],["/page/21/index.html","e6341a5c5845cc1d78a6904ee01d86b4"],["/page/22/index.html","af56e2d345cf6b0c9ff69bae87d07762"],["/page/3/index.html","cb53a7ade4c1caf841deb2efb0f3f149"],["/page/4/index.html","e00cd68a0b33392fdc06de82f5fbefbe"],["/page/5/index.html","6433afa41e6d467a7cec0c18e4876988"],["/page/6/index.html","7b5ef1de53bb06150a026054c2326585"],["/page/7/index.html","9e5a552243692d95ffe4b88e3c5ee28d"],["/page/8/index.html","c3fbd8e6a01f75dd54ab62e8a2c24f17"],["/page/9/index.html","dfce59a28b0cab98c70973804d7e5b53"],["/sw-register.js","ec14ecd5a6b7d5dac7d8d980d6c61b9b"],["/tags/Ajax/index.html","4367580db0d21debb6925de97dc6867f"],["/tags/Axios/index.html","a594469083b1a7e2018c3f8e1e941221"],["/tags/BASE理论/index.html","111106af97eb749868ad0a624c03b212"],["/tags/CAP定理/index.html","ce26c7a72bc97e26859566e61e6a3fbe"],["/tags/CICD/index.html","237964500edebba95c6689c637592618"],["/tags/DDD领域模型/index.html","0df83b54a44780fc309f6be2e031c16d"],["/tags/Docker/index.html","b7f6c59651cc2ddb46dccba5eee94536"],["/tags/ELK/index.html","21d0d948e737f31bf83edf2691e3bd44"],["/tags/ElasticSearch/index.html","5ccf94ffafda9dca21233c1fcb3837d1"],["/tags/Git/index.html","6fb9b5dae23623125301325493c996ac"],["/tags/H5/index.html","236c9bfc71e2e29bbe6cebf54b82ae93"],["/tags/JVM/index.html","3a7f4c3b1d6394ef781f0624d3a0bbc1"],["/tags/JVM内存模型/index.html","eadab13786bed5714c83a33a2906bc5a"],["/tags/JVM执行引擎/index.html","615a60a158cbe11618ea70c0f42fdac7"],["/tags/JavaScript/index.html","c4f6f0dffdcff47c894049f9a38ac7a9"],["/tags/Java内存模型/index.html","e8f9f457c88b2ba3d12139f41939a0c2"],["/tags/Java进程线程/index.html","6f4204a4df365302d38c8e02c8daa03f"],["/tags/Kibana/index.html","490c0a023aabed00c64a39999b40918f"],["/tags/LeetCode/index.html","b6e63cb96384de537f420da723c90cf3"],["/tags/LeetCode/page/2/index.html","e40bec2d4ccceb9d50aa325bc8ce5005"],["/tags/LeetCode/page/3/index.html","41904d3ee83444e26a1901b1d399813c"],["/tags/Linux/index.html","8bb18a28eedb9bc299d24b101dd79a6c"],["/tags/Logstash/index.html","ac0742b700ac2d2a06d8ceaf1c438b1a"],["/tags/Mock/index.html","a1435d0f84ce757c4e523076870742a5"],["/tags/MongoDB/index.html","5a76ff0c16c9ad4271bbf8cfa548fbd4"],["/tags/MySQL-事务/index.html","926156268332223f50eb26363a8f9ce0"],["/tags/MySQL-数据类型/index.html","1174fa93680ac9f7fc717fcddb8fb7c6"],["/tags/MySQL-日志/index.html","50dfa8cdc8b60aa221f2ac052aba3a5b"],["/tags/MySQL-索引/index.html","f5fc02c2e62180d732c758b25815269c"],["/tags/MySQL-锁/index.html","1bc3392b3791f1846bd49fe596fe9a4e"],["/tags/MySQL/index.html","a2b1b1dcd8acc5ee2795dfaba067bb45"],["/tags/MySQL/page/2/index.html","549179ad7f34d17c6fd5b5e321ddf2b8"],["/tags/Mybatis/index.html","b005a7ceb8369bec4c2e7cfb33bfea5b"],["/tags/MybatisPlus/index.html","747d30400afddf2762f7fcc1c3d2fdfe"],["/tags/NIO/index.html","b3ed21907e8c53918f977d54736e85d2"],["/tags/Netty/index.html","89ec69afe08d67e427ff8545d8a753b8"],["/tags/Nginx/index.html","d67239005e2aa07e493a14de67e0d75b"],["/tags/Promise/index.html","0d981a4c2d13019dd15343b1877fccab"],["/tags/RabbitMQ/index.html","727840abf5d8042bc232e6813feb5bc0"],["/tags/Redis/index.html","d60c198b973b8f68f69ebd752bd587e8"],["/tags/Redis/page/2/index.html","a07569c1e8223e6be2da7486da834e89"],["/tags/Redis/page/3/index.html","92f645940b35f987001f780767f9ece8"],["/tags/SSM/index.html","41ead7a92787d9cdfd6e4fde468317fa"],["/tags/Spring-Security/index.html","ba69d982e87cb2cc281d8a83f64a9ee2"],["/tags/Spring/index.html","08b31d163929b4d93f7843ca2d33d3db"],["/tags/SpringBoot/index.html","e14ee024c65a479bbfd8f30d99ef2041"],["/tags/SpringCloud/index.html","e288f0a9ac98f31dc21e60beb90a241c"],["/tags/SpringMVC/index.html","a451fc0b251e465c5b208999398578c8"],["/tags/Swagger/index.html","6080f69a5f210e732566a27256bd8a1f"],["/tags/hexo/index.html","7b2038033c2882311964c29026ace3dc"],["/tags/index.html","eaa8da9a86e3f921ff8bc1234fa4cd27"],["/tags/jQuery/index.html","7e04c3d3ca1f15f7984c7090a2852064"],["/tags/java/index.html","7144824fb4159706ad84373b6628a928"],["/tags/markdown/index.html","a8b8cc1024ab6bd0bafed693a832c639"],["/tags/noSQL/index.html","bee362cb6dd02d9679957eab89aa2792"],["/tags/typora/index.html","307698659e731592edc93293633a5f6f"],["/tags/vue/index.html","ee472db69eb8f1bd676406ef6aa6b5d7"],["/tags/享元模式/index.html","8b27a378ed7ac8eb316fae91b991e1f9"],["/tags/代理模式/index.html","8b97df47fe7f52942d28fb3612ba8053"],["/tags/内存管理/index.html","25f329d1c4379b02ed422b48b9e9d968"],["/tags/分布式/index.html","9ea58f9e2808185b7cafec6383e9a3fc"],["/tags/分布式一致性算法/index.html","1272402b2665cbf58a323deb9101cafc"],["/tags/分布式系统/index.html","f7b25898f3b4349ff081586f431ac40b"],["/tags/分布式系统/page/2/index.html","05fff960201b8307fa544a088fa737d2"],["/tags/前端/index.html","e3e2f2984ee845f3976b1c709a4a3c79"],["/tags/前端/page/2/index.html","da70bd717cc4901eec85840fec445d73"],["/tags/动态通知/index.html","0c20c17dac1ee0307ce489ab2b490632"],["/tags/博客/index.html","2fcd61ca0b63946ef0b86b4321a7cbfe"],["/tags/后端/index.html","cf07e1842ca713d10eef0ca66a0a6006"],["/tags/外观模式/index.html","fb0423bb64980063063fef6680758caa"],["/tags/多级缓存架构/index.html","42110566c327200790afa04baa617e25"],["/tags/多线程设计模式/index.html","f54bc5cb79f39a6ba4ff93af4e38ab5f"],["/tags/容器技术/index.html","2fb9d02e291fe01f911510fadf7dd76b"],["/tags/工厂方法/index.html","46d9859b744ec978dd5c45ecb530a458"],["/tags/异构同步/index.html","255bfd10cee11e5d62f8c028abbbb115"],["/tags/微服务/index.html","501ac83eabee6717e4afb5a9d4fa73e1"],["/tags/抽象工厂/index.html","12a5a4bca55adc5b737793ad76f07c42"],["/tags/持续集成持续部署/index.html","af14680968ffd6bbba221078abac932b"],["/tags/接口幂等性/index.html","5f935fbc6b003e7967577600054af653"],["/tags/搜索引擎/index.html","5340970f927dd793d5571e0da6a2a517"],["/tags/操作系统/index.html","4740de0f1a0ff12a9e35a50f4ae27333"],["/tags/数据库/index.html","4cbcecfb5d00492c80183b47b5e4bc79"],["/tags/数据库/page/2/index.html","8ddbde1cc2f4e8ff6d38252b3c37bccd"],["/tags/数据库/page/3/index.html","e139156710a6bdf298dea8b33c92665e"],["/tags/数据结构与算法/index.html","db8a500e6f5f8c18f7e36386061c121d"],["/tags/数据结构与算法/page/2/index.html","e819d050c0f45d66fa46c46dea373f33"],["/tags/文件操作/index.html","394f75ef748bd5101c1cb102997280c2"],["/tags/日志/index.html","5d3083347e023ed5eb0de6545652442a"],["/tags/服务器/index.html","d40dc4dda29b8f2ec0572caffaa647b9"],["/tags/权限认证/index.html","50c11428094b7de84fbfc6c7b39b7159"],["/tags/架构分层/index.html","000148ed2faf3c0eca900b0495c8bb26"],["/tags/桥接模式/index.html","1e76de123c241cd372b86b0801213f4e"],["/tags/模板方法模式/index.html","5f062cc7b459c7b014ace49f7118adc3"],["/tags/死锁/index.html","85c376723abffcc2921c12a98afc9770"],["/tags/消息队列/index.html","9138c1b0c74c59ba0bff2e3284e123a4"],["/tags/版本控制/index.html","5fa20ce8c5bd5c37a5bcf87e89e0f567"],["/tags/策略模式/index.html","ca6492801f3bdae0d4022c8d87a39add"],["/tags/简单工厂/index.html","b0a306e541cbccfec7e006068db96e76"],["/tags/算法/index.html","65ca2ea0e7bece530b28d539c8eccb68"],["/tags/线程活跃性问题/index.html","8fe66b90327fc73f0e0cedd9de6a82a6"],["/tags/组件化/index.html","b5d668c9ae5e56bf7bb05054d94d4cd2"],["/tags/经典限流算法/index.html","407db46f3878c6ee1c0c4416ca3d13c9"],["/tags/缓存/index.html","ee179222140c019f7790019099b86243"],["/tags/缓存/page/2/index.html","fe19f7778f4bbee7797e61fd0fd70c0c"],["/tags/缓存/page/3/index.html","7d8ded70df0a440500df463106347cbc"],["/tags/观察者模式/index.html","3fd68f502a9021ffeb2dfd5137f60b62"],["/tags/计算机网络/index.html","fafe1691ddb97fcecbd5d9a533b0e52e"],["/tags/设计模式/index.html","afcaddd9ab7f9e2e8f05fa1f7c106927"],["/tags/设计模式/page/2/index.html","a15a6735d26c4fa284acd26ca778a248"],["/tags/设计目标/index.html","40f9066ae38724ae0cf632c6fa1b5b3b"],["/tags/资源共享问题/index.html","3e7d124f093d36cb5244a296dab1498b"],["/tags/进程管理/index.html","465ef13cb6c5fcb4e35ef55e9d660a08"],["/tags/适配器模式/index.html","e2b5237f9ac69d9574b791b191c8bb67"],["/tags/通用设计方法/index.html","27feef9b2393a992a567d250ed72cc15"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
