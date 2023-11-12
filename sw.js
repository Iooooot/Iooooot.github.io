/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","d5be689ed4f862dadd346c021905153f"],["/2021/02/22/工具的使用/博客的搭建/index.html","11ecfa7fae87f304c0b85b665d06a65a"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","ff3af7071ed56fe4a32ccd7388d9671b"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","41c81d43b67a1757c5c53b47b857a809"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","f2771ee5197d060dc53a940815098425"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","b502d7056e4658d19423f7f457b467f5"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","76c00654ac1282783fd8fd3f42600b7c"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","77d0f424658ff87674717b8a9c0cd6f4"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","2bb74ec885d6a53c7e2e42fdb776350e"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","f8964d7d8586060b0671dbff4094c3ac"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","a8a38fa797673b3a307394e114b55eb2"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","2ad6383418645c60b2a71504de944b67"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","623a7068ad978425b175a76e6f2e2b32"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","773cd5dbaf9349694dc3b4093fe1017d"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","cfb393066cce381a552dbc712c11f89f"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","906ac91b182d3a51e192d2d5d81d8595"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","4309b1fbf8f479aafabf59e847a6da71"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","3018f7b675ef2db2911d1e3cd1f38228"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","d7c642a438231305f49c3922fe6bef99"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","addb61b50a82c11309c31cf48d9488bd"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","481ebbca9ffe9f03366941014701d653"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","4fbcc58fc66578cb5fef5f2630445957"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","c986b3f9e0e7cca09c51992e02023ab5"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","d3188132cc1adbebe99671d772ae6d0f"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","ca4d99f44695901c36caa35b48ba8b22"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","9fb5d4b77b0f75c35e8c46a272f776fd"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","468b85cfb4cc125605b1558e2d12c966"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","eb4485fbcc4b665d73173f3a837295fe"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","c9ec82e83434c68bfece1bf361e79b5e"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","730745353801db63a11ea8d586f9e641"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","7ce89bbbd6e7e1334429722a8043c369"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","fd913559f70b485fa119d57844dbfcef"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","8b8651c9b5ed5d06c0baa333fc0c9847"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","4f4eee9967899813f36e7cc5f2c5f8f7"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","1e7e3d5e59547bed1a9eb1f30d3b86b3"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","3b8737327b5fbe11d6fa5aa64b9b75fa"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","a68c816fb072f17ed260da313954add5"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","5ef514dd7a115212974c6cd3de8e0d3a"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","7226e34ef2e9fef2495c4d1bdd572613"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","8fd70b82bc2b84e12daca6762cea9082"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","c32039f625c5dd8dbb96fb42248355e8"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","9763c31390958baec0826393817746a4"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","7cdf3a01bf97f0d2f466ccbf10e09daf"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","4bead74c4640545eee76bb651f77af14"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","739b36e05d152d25072d707266860112"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","11c89c828686a39484048870be0bd95e"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","0d102b7d57277e96dac113e33039d90f"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","8aa709b57f5daae356f4df74f720373e"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","5f4083add86c4dd0d78e2fc9a2ce6b5d"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","1ed22ea8a4259f0a90f4aa207c6b5c94"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","26ec1586952d8bd8783a2ea44cc47912"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","4b736008f8daf8ec4eb1f67ecaeeba02"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","ac8e4876be7971d6a730398aa7e299bc"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","7f4cb903ec9d2dde5ce18e3b00041cf8"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","c9caeb4178b981c78dc1ae6fa8dbb1f1"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","6a8c9cfb3af4d24ab2fedc1c262159a4"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","8014815d5f86ad7329d73c20807450b0"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","f98d76719bf70c6ade1810102a4e77cd"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","579f897fb0fd71b69717adef11faaa73"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","e210c8c3289f4feaabf3cda0af6e703f"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","94f3ca1c9403aadd3fb65a7bc46e87cd"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","f50d0bdabe3182cdcf3a3016dd92e639"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","5d7cf5e030c1f91a57066612494790ed"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","fce24d252f81dd57c2204edb7b2b3f54"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","bd628e2d55885b94497226316e812cfc"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","2df8224f5ad2efe30b409cafb5a197b0"],["/2022/08/17/前端/jQuery/index.html","8d77522264bff90b91a3b9626b5d363c"],["/2022/08/19/前端/JavaScript/index.html","90b6b2cbc5e5738cdc01bc51d927184b"],["/2022/08/22/前端/Ajax/index.html","b6aff1029fece259efce37c5d5499438"],["/2022/08/23/前端/Promise/index.html","92d9bd7cab404585b40c49c844a698bb"],["/2022/08/24/前端/Axios/index.html","78c9cd5c6aa415ace6ca1c2fd423ac8e"],["/2022/08/25/前端/H5本地存储/index.html","c974e52cb226bc0c52731262c1e5eba7"],["/2022/08/26/前端/mock/index.html","a5248e17a4be2ef34347041bc7dff925"],["/2022/08/31/前端/vue/VueJs/index.html","8401342c6ff79a8d73506d0008e9f0f4"],["/2022/09/01/前端/vue/vue组件化/index.html","ddf81589f320edd2ca5caba7c42a99f6"],["/2022/09/04/前端/vue/VueCLI/index.html","2f32637a451eb07790be49b24166299e"],["/2022/09/07/前端/vue/vue实现动画/index.html","b8300f1bbdd5a603175109793fdfa16b"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","66dc18462d19894e47404e8c0d375d75"],["/2022/09/10/前端/vue/Vue异步请求/index.html","b6fac68f13cd385b2d66a7697aca7273"],["/2022/09/11/前端/vue/vue-Router/index.html","341bda797b0149325f87c2536cae5d0c"],["/2022/09/13/前端/vue/Vuex/index.html","ee23d63587d07c6ea1158201a772497b"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","9f2845713db26ea7bb5541a99e85e8b9"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","3a549b776b4b4cdaa7ac9b6de849e331"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","6fb3c12aac2c31ab977c1994cb5bea31"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","6c6df5c783501365b5d2bd559f1f5d97"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","de088899ba746fb3ed38addb89b37537"],["/2022/09/28/DevOps/Linux/Linux/index.html","6798933c9ecc82e84b9cf9452c87d091"],["/2022/10/02/中间件/Redis/redis基础/index.html","74bd98ce6d1a2fbdc26466a37b34cfdc"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","eb9f59c3c5f4c89ca0ed83b5a6ca5dd1"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","a10f4908dd177a1327427a1b519e88f5"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","49be2c382f122ebf6c4d25c15fe5d72f"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","1f49094b1768f04e934d102b9d1a66b7"],["/2022/10/17/中间件/Redis/Redis集群/index.html","9688b191304974a52832c25402f3d5df"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","bc39371a8a56afc257634a8f74064177"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","536c2550f67fde7f59848d3f7a314f5f"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","b3020c0b34773b5a9178435f20ed5a60"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","61c28fb909c454b3e8a7256e2fd6d5b7"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","2c5ff1c0b897261592a584b63a5c1873"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","1f4bfd3c5fc0133063fc5367c67ff4ee"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","5ed687c2483b45dfdd4f19ab87535935"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","7193e7be08191eb46337bada2411ed81"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","608fd8385680452927a1b40f0ed37483"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","ed1eb02e7781daf47c9ab354d8bd20dc"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","50651e91c5a1c5e2e88992d635d2d9dd"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","1ae21b061d5460b05d8322af2d4ac7dc"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","2fa624ad5ce81e2ec280d3adadd6a16a"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","46505e595c0ae2e61be0691ff5e03554"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","30d4bcd3e8c17b04e2c0a10d300f99c8"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","40195130fcf7981b40eb4568bed70f17"],["/2023/03/10/DevOps/CICD/CICD/index.html","d9c393e0b2b38091ea767ad715714285"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","74793fe4d74532265d8e177a0bbb696b"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","9ee132a4213e6afc28ab395419d23e3f"],["/2023/03/13/Java/NIO/NIO/index.html","f8d8c73fe5523e47cd91a78d9c1d6978"],["/2023/03/14/中间件/Netty/Netty/index.html","9e5750f3194112c7a33ad59585ba9418"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","ade5f0bc1c93a66d064ca74ea6c20f5e"],["/2023/03/17/系统设计/分布式系统认证/index.html","1bf2066c6e4bf931da82312b5a685bac"],["/2023/03/19/Java/JVM/JVM概述/index.html","9ef96eeb1f27fa92d1082e2ed6d57d7a"],["/2023/03/23/Java/JVM/类的加载过程/index.html","18a4f242105089ce6d745e08cb8af5dc"],["/2023/03/28/Java/JVM/对象的实例化/index.html","c89abc6cfbd5795d35e5575f16ea011c"],["/2023/04/01/Java/JVM/运行时数据区/index.html","6021fe11509aae642eb97f5e3050427a"],["/2023/04/04/Java/JVM/执行引擎/index.html","553ab9e5153e1f8e177dd2a5f590dc72"],["/2023/04/06/Java/JVM/对象引用/index.html","33c91eff0298ee2cb77f3097433e1ba6"],["/2023/04/09/Java/JVM/垃圾回收/index.html","d5653aa8005b09927a0d016155aef81f"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","1e1482ad9b3f9640b24037ee4b4c2b62"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","58c00e851c7d32090a5e5556b1b72155"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","5b0000c8157a11bb783de10ce29bf9ae"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","82ecc88845cef2dd031f4808f0b7600a"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","ade93df793ce8dc633cc41e64196ba37"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","bf9c4b3ff5e6ccb40180adedd38c719c"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","a296305ffb6db24db54c23e5dac2295d"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","e0aa76c948e6c825e17ba527ccbd795e"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","874d7afcbbde58ca522e3b0f5bc2cdd9"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","c5f24ddd67c2dcd42f6d6c96e2fe036a"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","5b1e44a55cbcb68df5319f2cc9aa15d6"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","0f25f21d82c8e507787cd3cd882a02db"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","f318c533beadea877b789c45a5ba2233"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","212c481d0537a3e46db1c0237164698b"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","b60eff79cf9b93a51d08d690b5b481dc"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","6e39e33c29fc9ed968183f4d2d8bc1a9"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","a003838884330bce6784809ade3f4e60"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","f7cf885b8b100e0423c8c10b8f147839"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","6f5362f24fc81178591703c920fa680b"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","a01b054acb55380a3e0ab38cd63d6c0f"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","ec0c062621fa892891aa3706cac3b270"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","f9f9bd35181e8bdabd11574c670efcd0"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","110eb27493f39a9b4d8145ee0a27ad8f"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","0baaf68fe044acb10739c19fe94b1359"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","3cd8b46f519126cb94ee2e6db8e1710b"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","a0e29572dc879b8f155b973e11586638"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","fba75df40bc77bf37c0af3065b53491a"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","64faf83a212f8722c4cd8c6d5faff531"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","8f8e1310e1d2725afda00362f952b64c"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","4b8c0b5b79a1a13827ad159ae7386776"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","f0a6c463c16051dce48c42ff569d69de"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","dbb1b3494b8c98e672239b7943ad40a3"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","7cb8c0a4ebbaea9896eb55f4b4a685a0"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","f689420eb5984956ecdcd652c8cc1f97"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","64b16866cb237fd781edf2f76d1691a2"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","ce209bb42cefa1038ece98708bcead0a"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","d1e50b2075e35fb40d36288e7f55bbf5"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","0813c39489cdbf15449dff8d6bfa6953"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","e5a6d4cfd576c7ec10a326da23334c13"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","86967e59eee9b671fc6626e3ba48416e"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","b136ca6a0bc866778fceb6f731cc333c"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","0470ddd45e55c8943f0ec44e555c3eb8"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","31dbfe36b3d44a3233ad6a50b4b70c9a"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","7acfd6b2505608f54632d6864c9147a2"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","8828196d1c4f7d556ff736b7d1777fc5"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","2f181c3600e4a6f24863853bb86e89e5"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","cfb9fffe671a2f15236e7df577a0dcba"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","7df29d0dd84afb6cface357ff03bba50"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","cee1ac5bf6d8200b6c8bd0f99f188d74"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","822f9b902e521a310bfcd9931a13b963"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","36a3dc118d0b9362d0d7f51b0b86b1bd"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","028e4c7d900e49d6dbf36111d562a8a3"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","44f4786cba54de5e2cb9edc4907967be"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","23ebb97721b76fc30d84eb413c5eabd4"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","fb7cef5e294cb4b0accecab17af7bb64"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","c57ce32121c4cec7c91c89fff9622719"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","aff6967318384920b1b2ab0e4f5c5cc4"],["/2023/09/04/中间件/Redis/Redis事务/index.html","5904b5c2f3d2294413d7d25d0e52059e"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","eb23415c00997db794de8a60d583128f"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","0df561d0c5c78ccb39f536b35ca8eb18"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","8835544ec51820473a9c51361b3fa7c9"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","fc217d8101c4400004db06326ffaf722"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","844c9276e2050b4d1ddb478e8c00e29f"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","bbadbfaa01e6dd6198507d9861f7f838"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","be47d10c4da73483c3e6a5f115cfe1ef"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","4c809938ab68b5d93a81f0b0adbfd6a7"],["/2023/09/22/Java/NIO/零拷贝/index.html","4bea926d3a739e5d7331148ab7be41ff"],["/2023/09/24/系统设计/JWT认证/index.html","079137393514b99db9969446e4daca89"],["/2023/09/26/Java/NIO/Reactor模式/index.html","865bc86351163e25ded0fa7b9930f0a3"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","228210aad2d8558252c6b9d4c9ae1aa9"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","6205032354d4f32268280044623b1b65"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","dcea811dc03dce755d5cb009a3a8a942"],["/2023/10/09/Java/并发编程/共享问题/index.html","07bbda86a93a49326451e84f742a6f33"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","1b2508d54e7fce8ae073a68572bd7403"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","ef9097ce6e5ec71f162a109ed0f987cc"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","a55242244c63698f55e6dede969e068a"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","fd48ed601f0645d1aa00b6a7107a018a"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","f40a82b9d61c0e82a5eaa3ba68519036"],["/2023/10/23/MySQL数据异构同步方案/index.html","4c5292a5320cfd9485a6025e80019dbc"],["/2023/10/29/动态通知方案/index.html","01d265d4787d41f40bb1e2b947430cd5"],["/2023/11/01/多级缓存架构/index.html","5ff9bfd719c6fe622913f8c86f7cf075"],["/2023/11/04/分布式一致性算法/index.html","9547211a35820c3a6ef71542759a316a"],["/2023/11/08/接口幂等性/index.html","89f7a6375bc107cc279bf84be1c46b9f"],["/2023/11/12/数据迁移/index.html","196bc2a9a9b1120c08191c18053bfa81"],["/404.html","9c4be3f5cf3ca0b0689a019b1a8d0f9d"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","985de5d81dc7c8230408bcd74f291af6"],["/archives/2021/02/index.html","fe9a870efc2a93cc1cc05424d6a890e5"],["/archives/2021/03/index.html","c3c2f1c5b30e4983578588eb8ab6b9e1"],["/archives/2021/03/page/2/index.html","c8ede83c56fd3f7a68ed019d59abf28b"],["/archives/2021/03/page/3/index.html","3384a2ea618420f8b99c1f59331eea4c"],["/archives/2021/04/index.html","f9e5a8a221ff4bc457ba7155e9aa84db"],["/archives/2021/04/page/2/index.html","879b992a2fe2cd6c9894831dca2ce54d"],["/archives/2021/05/index.html","ce2eafe28722d7366e5853f7351b65c0"],["/archives/2021/index.html","654a256e731a8f053527de4f4e60f734"],["/archives/2021/page/2/index.html","386f21b11384e235b9b9de6b7df517a5"],["/archives/2021/page/3/index.html","a6fffa70fcb140b100666b5ac550f4d1"],["/archives/2021/page/4/index.html","1eaa1c4831c3cb75b8c6d6e4d3c9cb77"],["/archives/2021/page/5/index.html","f0ffc612a246f230f7e837f5f057d3bd"],["/archives/2021/page/6/index.html","a8ac1fb4e04197a133f76d01b3a8b862"],["/archives/2021/page/7/index.html","cf6175ecff4fea9b42477ebdbc0a034f"],["/archives/2022/01/index.html","496a068f2c343b1cca839fcc6843306c"],["/archives/2022/04/index.html","fe13a9a22ceb0643c14317cab7b1efb4"],["/archives/2022/08/index.html","166d7a5b2451158bff5f8320412a1586"],["/archives/2022/09/index.html","9c9c3b931acc0f815fe432c4eab6c877"],["/archives/2022/09/page/2/index.html","197ae988f7e56e695aa14e560a34c79a"],["/archives/2022/10/index.html","0f6154fda85445da9842dcf1ddebae8c"],["/archives/2022/11/index.html","afce28060bd7e8fc993fe5199776a32c"],["/archives/2022/12/index.html","b14ca8659a7437a649c5b059c568614f"],["/archives/2022/index.html","56d8556400f57c4d8de716de97efb0db"],["/archives/2022/page/2/index.html","716b3c920b41f7e7cf50a3354af107f6"],["/archives/2022/page/3/index.html","6be06be7cd504100a86db43a1fff845b"],["/archives/2022/page/4/index.html","250f072594599cf0fcc30b06e4b50aa1"],["/archives/2022/page/5/index.html","7cc7c9adf05c64f72b164df3bbee3bdc"],["/archives/2023/01/index.html","36cf7f0350c1666de6505888286f01b0"],["/archives/2023/02/index.html","c286e048f58df4ddfdf88aff08652c5f"],["/archives/2023/03/index.html","6cdf16958b30903040bc2924e8b71216"],["/archives/2023/04/index.html","a8ee7b07e55f63694c4c7e8a3af04344"],["/archives/2023/04/page/2/index.html","72c162af74bb7ba94db33117fe67d95b"],["/archives/2023/05/index.html","43fe550d5e32ca551dcbf111caf1e961"],["/archives/2023/06/index.html","5ecfc309a017f7d40ba251aa00a5d00b"],["/archives/2023/06/page/2/index.html","ca6daad4217ac84ec78029301fa2b4b5"],["/archives/2023/07/index.html","7a08a5998450eb95c442ffc0c7341a81"],["/archives/2023/07/page/2/index.html","233b87ee9157f7aa3e7ddb8cd1a8171a"],["/archives/2023/08/index.html","cf3a5708b1ab767366d0d194e4ac8df8"],["/archives/2023/08/page/2/index.html","e3022f999b4995b9f2fd4b759b66a233"],["/archives/2023/09/index.html","894cf4f07ced618b038a7f4c97f88353"],["/archives/2023/09/page/2/index.html","712a05ce101cfa78d0a24169407dd610"],["/archives/2023/10/index.html","dba049312c5c9fdb753f61615019d135"],["/archives/2023/11/index.html","a8f4b9e6e05e1f1e7503b68cc6e5719b"],["/archives/2023/index.html","5791dd9782f9d33e0a9c9af4bc65d7c7"],["/archives/2023/page/10/index.html","736b941c50ef4445aa65687c27440eaa"],["/archives/2023/page/11/index.html","f5ff2bc3d0266e109860bbb4670d3c07"],["/archives/2023/page/2/index.html","415a0ecbf5a90e8726f9a39240d5e7bd"],["/archives/2023/page/3/index.html","c6d6d7c4eb02a4a429227ed3b6616981"],["/archives/2023/page/4/index.html","59cca0c12ecce6c047b35754b9311ba7"],["/archives/2023/page/5/index.html","5ab1a6c62cadf32a44a769f04d01d5db"],["/archives/2023/page/6/index.html","9ff34d786ae123adcc3e455927241d54"],["/archives/2023/page/7/index.html","fa6e801c304d3b5802365b1966a9190e"],["/archives/2023/page/8/index.html","a1ab433d0a19cfde54f325f314aeb1ee"],["/archives/2023/page/9/index.html","844221e1a19020cf055e405e38035223"],["/archives/index.html","eb6e363205ebee4bd05b3782eb86020a"],["/archives/page/10/index.html","3dcbad58c71a385314f6eb1b296aca12"],["/archives/page/11/index.html","43f7a687fb406d6812cd883f51512398"],["/archives/page/12/index.html","a791263d91d2b2e364feb8b4b884b414"],["/archives/page/13/index.html","e794fda4f3a0f6a48a8484c7bd1358af"],["/archives/page/14/index.html","91a7a7c2ebd431346af15f6072990c95"],["/archives/page/15/index.html","29d77747e87b3228c7e2f3e7312c67ab"],["/archives/page/16/index.html","89f219bc5d504312a2d40d21b6642471"],["/archives/page/17/index.html","d6bb01548db16958db59c546f01633a1"],["/archives/page/18/index.html","5cf5e05dbe058c4e1b940667ad22f5db"],["/archives/page/19/index.html","aba868717fa9e3fa58b69cf4ddadba0b"],["/archives/page/2/index.html","eb488ed009bfbf13411344d7f24576b4"],["/archives/page/20/index.html","9caba530e0f15858e5702d84d9b6f038"],["/archives/page/21/index.html","4906439a53ec68455a98e5187bc98254"],["/archives/page/3/index.html","3b7b5c5a812eefa5278a65e3d3372bc6"],["/archives/page/4/index.html","f924af3d5ea5754935705a819b13913d"],["/archives/page/5/index.html","46e74a605e918fc8c12ca2ee1cf67b95"],["/archives/page/6/index.html","ff34fcb0285e33ffb7196316cf687114"],["/archives/page/7/index.html","671c63df3c3b0e60f8ec6c79ccdfcd94"],["/archives/page/8/index.html","79ff047b8379d490f84d546cd679996e"],["/archives/page/9/index.html","06f41c4a55db1b0fb122e33ec93719a8"],["/categories/Devops/CICD/index.html","79d8583f14db72d1dc114232b1cb996e"],["/categories/Devops/Linux/index.html","3189966a01fd5321a9929342c2aa1686"],["/categories/Devops/index.html","5b6721a56451d631c51700a65be0cf52"],["/categories/Java/JVM/index.html","0aa632847d4759f6bec3ee902ed666fe"],["/categories/Java/Java基础/index.html","4795186f1c6197520df3db93f6c2cad8"],["/categories/Java/NIO/index.html","1f7b4288f03a7420a392eac003d9645e"],["/categories/Java/NIO/原生NIO/index.html","af158dfb0217d31029e894510bd34ea8"],["/categories/Java/NIO/文件操作工具类/index.html","069fbc1ff30bafaa694c9f88dd2ee1a5"],["/categories/Java/index.html","cb91a6dbeadcf4b32cc4400c87638541"],["/categories/Java/page/2/index.html","05fd709803f7c493a4d209599501e3f7"],["/categories/Java/并发编程/index.html","fa3473acf91edd8caa68b82a419dcbdb"],["/categories/Spring全家桶/Spring-Security/index.html","cd34c621fc1cffd64baa7883ec45aae4"],["/categories/Spring全家桶/Spring/index.html","8b6dda80e8527d6983a3fa54ff28ac58"],["/categories/Spring全家桶/SpringBoot/index.html","f9b9e6a8d48ead0101b397ab52e0e9a3"],["/categories/Spring全家桶/SpringCloud/index.html","3a7bff394b43df34f829c8f8ea1ba502"],["/categories/Spring全家桶/SpringMVC/index.html","ea6313cb2bb66940a6d7704da5e7fbe9"],["/categories/Spring全家桶/index.html","19d0ed44c93502d1bde87edac3470392"],["/categories/Spring全家桶/page/2/index.html","177bb7969e86fa5be7fb8cfe61255aea"],["/categories/index.html","3114a2bf69206db222a6d77320ad390a"],["/categories/中间件/ElasticSearch/index.html","1f8fefec19d092c7399ee8ed6495a3f4"],["/categories/中间件/Netty/index.html","291cddc9d35692efb05adb72d21b1586"],["/categories/中间件/Redis/index.html","58daf7d374ec1fb6f029ca9a356005d1"],["/categories/中间件/Redis/page/2/index.html","2b35f50090a53eeb37d7caaf5437e66c"],["/categories/中间件/Redis/page/3/index.html","77252e49808ee2051349374a0583e3ab"],["/categories/中间件/index.html","c3264bfbb17bd89e712c0e40c604a11f"],["/categories/中间件/page/2/index.html","f18800c68b608913c6f75aec12cd4f3c"],["/categories/中间件/page/3/index.html","e2cb6175a474d8577bdaab949352e069"],["/categories/中间件/page/4/index.html","a94dd1ccfbb9ead61a1794a869e6b89a"],["/categories/中间件/消息队列/RabbitMQ/index.html","8430dcaa082111b4bcd514c57b7eaeec"],["/categories/中间件/消息队列/index.html","4813c57cd0751bc7d001c0b7c6fffb2a"],["/categories/前端/Mock/index.html","101746d262b776de668860fd738551a7"],["/categories/前端/Promise/index.html","78c94ff8bb229988328c9c8cbedd54a2"],["/categories/前端/Vue/index.html","be6362f0f005d192b792d18d2d3325ef"],["/categories/前端/index.html","d7bfdfb3b057589f0afdba63366a64d1"],["/categories/前端/jQuery/index.html","56f8070790f798302a20532e969b3f89"],["/categories/前端/page/2/index.html","14d8e67c9f1b9db0c4d558496d791ffa"],["/categories/前端/原生基础/index.html","3a0331d33fa8e0c284c62dd615bd8083"],["/categories/前端/异步通信/index.html","f5fa0f8457115c604f4f207fddd12907"],["/categories/工具使用/Git/index.html","d3943bd77ca5c20feb0de57e79d19490"],["/categories/工具使用/index.html","f6071931d61f273549a230783ffe5863"],["/categories/工具使用/markdown/index.html","8442114b721184170cb190be744a8a16"],["/categories/工具的使用/Docker/index.html","a45b30e851f36dfd35045bad970e7af6"],["/categories/工具的使用/Nginx/index.html","48203df0609466feaf3a49f8689a0f42"],["/categories/工具的使用/Swagger/index.html","45990d641020086fe27353fa7f9c949a"],["/categories/工具的使用/index.html","0302a13d202daee9194d93d8d84c7934"],["/categories/工具的使用/博客搭建/index.html","9eeb9bd1bc08d9d2f3f9e021edbf6368"],["/categories/数据库/MongoDB/index.html","11c216d6da72a7c12299179f485c310a"],["/categories/数据库/MySQL/index.html","b38b7bbade5dded23ee99fcabeb6dab0"],["/categories/数据库/MySQL/page/2/index.html","95b3c7deca7553b6e2d32ea4bb90f9c5"],["/categories/数据库/MySQL/page/3/index.html","720668313593e10b906517b501967928"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","722bacacbf207f70ee110b9a7aa344f9"],["/categories/数据库/ORM持久层框架/index.html","da8ae7c9939254dad865a48038be40ce"],["/categories/数据库/index.html","d24a8fbe36ad3a1dfbe5d35c016186da"],["/categories/数据库/page/2/index.html","77856ab2f57880e74ecc203a67ad6107"],["/categories/数据库/page/3/index.html","ea676cd7128cc0e5b5733eccd7be0af0"],["/categories/系统设计/DDD领域模型/index.html","f7ffb9fd2da3f89c35e18a609ab3bd1a"],["/categories/系统设计/index.html","8f6ccfecb79ace7074af32ef22354d0c"],["/categories/系统设计/page/2/index.html","188d36cc12f1ea23702e74be13389310"],["/categories/系统设计/page/3/index.html","e77f69f521e709855a6027bf8adb1d47"],["/categories/系统设计/分布式权限认证/index.html","83b24de1021e5c1e6ab3d0d70bd83c56"],["/categories/系统设计/分布式系统/index.html","411cb08df603f7befeb790c8e1cae739"],["/categories/系统设计/设计模式/index.html","5a47ffca89e9219e6a59174e022eec83"],["/categories/系统设计/设计模式/page/2/index.html","f47e921b787f9e2bd28620b8ea69a860"],["/categories/计算机基础/index.html","2044611214c44997481257d74cf85b6f"],["/categories/计算机基础/page/2/index.html","fcb951b393ab499d8c4e2561e4e679c1"],["/categories/计算机基础/page/3/index.html","2c844871bb704c683e184faaf0918a93"],["/categories/计算机基础/page/4/index.html","36317e017b96f0acc69da4fabcb171f0"],["/categories/计算机基础/page/5/index.html","50ead6c453b39851a37003247aa0126b"],["/categories/计算机基础/page/6/index.html","a5abdea3d967b40c9c6c29eff5f0ab4a"],["/categories/计算机基础/操作系统/index.html","fa276adbd1fee0032ef9dd0fe0b33535"],["/categories/计算机基础/数据结构与算法/index.html","aeddaa44a6c10ffa5444804ff52aeea6"],["/categories/计算机基础/数据结构与算法/page/2/index.html","185a8adf24824f9224a90ac581d4f160"],["/categories/计算机基础/数据结构与算法/page/3/index.html","8a2181c4be3401aea636e942ec1dab8e"],["/categories/计算机基础/数据结构与算法/page/4/index.html","c95ffe3e8f4843bd95a765fb65b52fd8"],["/categories/计算机基础/数据结构与算法/page/5/index.html","099f0181c064388c85b2601c11f85e7f"],["/categories/计算机基础/计算机网络/index.html","ee1b3d18d6bcf66cef200bb9132ce9fb"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","6de716272bdeaaece719e366b912eecf"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","18ff60e691747e3c61028c51fe6b5ef1"],["/messageboard/index.html","5af729ba967279a39f74a995b81f239a"],["/page/10/index.html","4c2665bc611f2d37031f5ed273768003"],["/page/11/index.html","25d2fe8ebc0fc3f8863957ebbc66d633"],["/page/12/index.html","cc920b71daf73acf83c693046e11e94d"],["/page/13/index.html","07572ad024b1415a37bd6683ef68f6ae"],["/page/14/index.html","fb04b0b014dcba0ecc3665ec06c7a549"],["/page/15/index.html","be4d9ffac7d075caee89bf65623b4001"],["/page/16/index.html","f7b3e5b3e798f0e9e99d9a5d374093aa"],["/page/17/index.html","91dfe6f892b525a352c2606d8bb6a8f8"],["/page/18/index.html","ec74bf00bac1429fdbd3c54015f52b6c"],["/page/19/index.html","6d4aac99715eb3adca60e757272ca7f1"],["/page/2/index.html","f2df396b7ef680c0e5829e68ceb3a8d0"],["/page/20/index.html","0e48d694a0a7e2c4e06d62b3e22cfd17"],["/page/21/index.html","8dc5f7e1d1cb42ee7652dc097632e8d7"],["/page/3/index.html","bd268d54e1cb279d21b2090ac7251363"],["/page/4/index.html","4e7453517377ebdebba20def9a845b8d"],["/page/5/index.html","ba690abbdc184f8e28edc1184740ea7a"],["/page/6/index.html","98385cb3147aa510acdf5953143577b3"],["/page/7/index.html","1d98afd507666a17a2a0fb3e702adea4"],["/page/8/index.html","f17ba23802c5a5f8b23dc3f45074a1cb"],["/page/9/index.html","5109c6d0ca89cd57a8e14fd0ba9f7e0d"],["/sw-register.js","45ee3146b29a20e059d9c2b6f9fa85e5"],["/tags/Ajax/index.html","6d2043640d8e2e8be8d5c158e21424c8"],["/tags/Axios/index.html","52bc74558e292e34ee01c45bc396038a"],["/tags/BASE理论/index.html","728986a09127a41104adb7fd4e17e3d2"],["/tags/CAP定理/index.html","5a4a1b7d81d980b4fbd83f1996994587"],["/tags/CICD/index.html","c26eb78c8fb0f77cd9901213a73e9733"],["/tags/DDD领域模型/index.html","7acfb8ce026d2034a88de9a2b1848a6d"],["/tags/Docker/index.html","20e4f3e2b9beab4719f4bb1bb171f1c2"],["/tags/ELK/index.html","616549bec7b8c71e877e8760b5125067"],["/tags/ElasticSearch/index.html","7fcf3ef8e9eaa8cd3dbea262dfadfeac"],["/tags/Git/index.html","8ebd43d16d676f5273e80c5309dfb3f6"],["/tags/H5/index.html","8f357910be24078368c0d58484e7362a"],["/tags/JVM/index.html","257d99590a19bc28961c81985d9a3cfb"],["/tags/JVM内存模型/index.html","57dbf5c23031b90974a4ab94964c8705"],["/tags/JVM执行引擎/index.html","daf0b966ef9e5e5a41f82086535ebd1d"],["/tags/JavaScript/index.html","8d8a9e43ea1599564e330ceca1388e87"],["/tags/Java内存模型/index.html","ce66b95bfcf01debf10bbf72a255885f"],["/tags/Java进程线程/index.html","c319600728ce2561ae14118e751c7061"],["/tags/Kibana/index.html","a1b31a824121573a862ab79a229e94d9"],["/tags/LeetCode/index.html","6fa227c65438166a3d3400b95a739144"],["/tags/LeetCode/page/2/index.html","794ed1d14c93eb5512b69b2c90976f62"],["/tags/LeetCode/page/3/index.html","2485789f570faf05a8544e7d5c6aa513"],["/tags/Linux/index.html","862e0c353192b0666b075808ae47ebff"],["/tags/Logstash/index.html","69216c59279d99b33a7923bd66421e6c"],["/tags/Mock/index.html","b46e439264ef48c63352e69c1b43c969"],["/tags/MongoDB/index.html","d06562d868b2daf4f2f6e693decb9f01"],["/tags/MySQL-事务/index.html","8ceb39ab69fa07f6b3afac88f954d237"],["/tags/MySQL-数据类型/index.html","6f27df54b4b36e7d012f3fa337036921"],["/tags/MySQL-日志/index.html","a5c288cd7f848d166201606c27bd7555"],["/tags/MySQL-索引/index.html","29e4b2c33767bfefb80355df72dd5a15"],["/tags/MySQL-锁/index.html","dcb60da01b8e7844217cfe04fd703e9e"],["/tags/MySQL/index.html","8d3773a645f51d429f61c1888c750823"],["/tags/MySQL/page/2/index.html","ba81f3a81d716f95137d6a8d9782b581"],["/tags/Mybatis/index.html","ca151d35c12e02da75a2980505d898cd"],["/tags/MybatisPlus/index.html","1a980034d36502ce34dbdf15f7467b5d"],["/tags/NIO/index.html","9d427fdfcfd8d5fcbff656abae13cc6d"],["/tags/Netty/index.html","c2500c2bde5ba3bcbeabf810f4a0cf01"],["/tags/Nginx/index.html","df77f09523a264bf4841c46862d63b8f"],["/tags/Promise/index.html","1160dcae3d0e9dc175a778a5a16a2796"],["/tags/RabbitMQ/index.html","ec698c12cc4dcb6a6bce0c1433c5e159"],["/tags/Redis/index.html","bc8af55eaa788c33d2524ff57e24f036"],["/tags/Redis/page/2/index.html","cb455614d3b1d1f142569760b6abbbcf"],["/tags/Redis/page/3/index.html","b6221fb3507caa1b74bcb8e011560e53"],["/tags/SSM/index.html","23c6226c78e832db1229c05be73026fd"],["/tags/Spring-Security/index.html","1a7aaf1839929a2aa7635d820f43ea5b"],["/tags/Spring/index.html","88bec999b3ecb17431c7f6c4b934092c"],["/tags/SpringBoot/index.html","ec4623f8ab46d0b6513e4f50a263df0e"],["/tags/SpringCloud/index.html","364f1a973e95e88a242e9639fb62e510"],["/tags/SpringMVC/index.html","ddcb06b626ffefca5fd4ba4e559dde64"],["/tags/Swagger/index.html","89839b70287a1abbd49938c90011ecba"],["/tags/hexo/index.html","d3b28eb660a16cea22731658cfffe749"],["/tags/index.html","44bcebeadfc6fda26bc1d1e0a8ba3a69"],["/tags/jQuery/index.html","baea4642b523a0689702a00622db5acb"],["/tags/java/index.html","268e6bc4abbd5c5166c4592141a23ffe"],["/tags/markdown/index.html","41c4ed1204f7f2fa084f4728e1434bf0"],["/tags/noSQL/index.html","669e580a90e181f020db89fecf7b8b8e"],["/tags/typora/index.html","43b605aafd18a92814e4e8df78946f54"],["/tags/vue/index.html","d8a004b744953daea22c4c2b9615aa92"],["/tags/享元模式/index.html","a06c3bc0ba54b1522fdb4b538b0d41f5"],["/tags/代理模式/index.html","01157258b272225fb7a8da150a466b9a"],["/tags/内存管理/index.html","b074037b877c4669a6fc37ee936715a9"],["/tags/分布式/index.html","b4557d81bf124be43f5bb8263f95cac1"],["/tags/分布式一致性算法/index.html","d0d39c9f9c864dee5fc81d3072a7dfe9"],["/tags/分布式系统/index.html","9a66f02f6480ca4f069d605b803e150e"],["/tags/分布式系统/page/2/index.html","77def59c3378e5469b45b30811d53507"],["/tags/前端/index.html","5190a63310571527b53ff6fe18d978dc"],["/tags/前端/page/2/index.html","ff65b15cb47bfe2747402f225c52f854"],["/tags/动态通知/index.html","94be5ba48247da1c6c18a314be910445"],["/tags/博客/index.html","5bff622b3f086547e19340f8ed2307b8"],["/tags/后端/index.html","ac95c5bb4c38c8a39a49a4e9b7e4c0a5"],["/tags/外观模式/index.html","8380b2209ac526a55efe1d5af83dc547"],["/tags/多级缓存架构/index.html","28cf14979d5d275ea974ada7c19dd6d4"],["/tags/多线程设计模式/index.html","4caa5351657b49aa2bd977710dd46b33"],["/tags/容器技术/index.html","86c2085a5aaf5535b4aef0cef83e5ed1"],["/tags/工厂方法/index.html","448cf2ff27c15c5bcf46d1db060f2cc3"],["/tags/异构同步/index.html","b28c2693d475217f8be5cbdae9b7b720"],["/tags/微服务/index.html","ec325921e1452097d55ff779297e3045"],["/tags/抽象工厂/index.html","cd363b3ad48919c67a76b0401b016704"],["/tags/持续集成持续部署/index.html","9414cc8521a5d89a18f1e83d2f6a4c2a"],["/tags/接口幂等性/index.html","11b0a7b79cd1cd86090ab878fd003dd2"],["/tags/搜索引擎/index.html","ce67d5a11a5b4ac1eed94208935547ac"],["/tags/操作系统/index.html","af9057fcf10918b1ca425c2195f440db"],["/tags/数据库/index.html","113a5ca3ee8bfd8d54d682d105648e94"],["/tags/数据库/page/2/index.html","4ae97159966f59b8846fc84842b004ff"],["/tags/数据库/page/3/index.html","a6377d1deceba87a1da5f9ce298c3ae9"],["/tags/数据结构与算法/index.html","ad17749d57844c35488b009452bb21bc"],["/tags/数据结构与算法/page/2/index.html","254d48bb120abcb9a326e42e6f646a5d"],["/tags/文件操作/index.html","19f35b80cef6dd05fb3c9602e5d552c8"],["/tags/日志/index.html","cb4db906316901e7040b65bc07ad5d1f"],["/tags/服务器/index.html","1a54d3358a9eceee5ad308bf1e893ba5"],["/tags/权限认证/index.html","8f5e6c4e79f377d444695924bc94f6a5"],["/tags/桥接模式/index.html","6a4f7a9e4a0041a5c7057b18b7fabe69"],["/tags/模板方法模式/index.html","41e3484fce4d58a74efb9e6ea3b1719f"],["/tags/死锁/index.html","dad94e41f99d208dd0caab8ba2492f6d"],["/tags/消息队列/index.html","85488e4e7994cd5d322de3ff900b4eff"],["/tags/版本控制/index.html","8b10077b8fd2ee5c60d35160959d11b7"],["/tags/策略模式/index.html","3ed190e39f3ad99e505f3480cf86e7eb"],["/tags/简单工厂/index.html","24aeb137290e6aa6fddd9d34ca933e0c"],["/tags/算法/index.html","6224a61d248f9dd60dfd01aa1b15b957"],["/tags/线程活跃性问题/index.html","dc9aeee61e66a9759f99dc319d328188"],["/tags/组件化/index.html","32b1e6eecfce1657eff34719324ad08d"],["/tags/缓存/index.html","67fb96c15a37d258a9ec207f24a742a9"],["/tags/缓存/page/2/index.html","4cea48479be431ba2cd3cac9e5361bfc"],["/tags/缓存/page/3/index.html","7ad4df4f8dbae9d34828acd6808bc5ee"],["/tags/观察者模式/index.html","83344782bafa1ee6fed53b7820b9b491"],["/tags/计算机网络/index.html","14186bd52461fd0940b600c3360a6570"],["/tags/设计模式/index.html","5d579ffd9751d00baf43e1ababb649ab"],["/tags/设计模式/page/2/index.html","9e1c640d8ac0944c4359474ce9ef3fcb"],["/tags/资源共享问题/index.html","8e533d2d7f0030fbd0f3c53ca397c1e3"],["/tags/进程管理/index.html","ac837e83c6ea75bf6535e656c35aee3c"],["/tags/适配器模式/index.html","aeef6c73f9bf55499c6bf7050faa3423"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
