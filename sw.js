/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","82b7ddf2c8c5c7a0fae951586b4fbd35"],["/2021/02/22/工具的使用/博客的搭建/index.html","185879500a063fb6d5e83f5a24020cc6"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","b0cfda13d9e02188d4e79d5193835cb7"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","f186bed434bbb83ae5b77afcdddb0b43"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","3003d4893b9f6b6ccc81b10e8a4e6de7"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","81a925f402cf2aa4281be688baa3ac0b"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","9a3011da787946ffb36ef7cc2bee023f"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","11a4a8d7bfcc1aa5d79a052dbb046a53"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","68fd9b8ddfb5ad68dec9afd7360d1d2e"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","965c0994d256af87fe9a6dbf6f766659"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","21782db964020133cbf7aacac4f320ba"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","2196673b4ca2c803a5aa07125ead7cda"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","a34574bb78735bcf50fb71a46116d8a6"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","82e70e8997f0ff70ab961ee60a930729"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","4bc7b98a578c643b491563e22d79dfe8"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","d5fffb915d249f8cebaf9f2521981cf4"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","a5c3a15cdbe477d53ac16a36aa5c0301"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","072dae95203120141ffe4d1f50516c99"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","ca25ee8de716ad8b5567477d274af87f"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","cb97af5ae65eb52b881a16e4c2e8b8f1"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","fe11b757fdfbc5bb8d28575c86f48777"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","f3d87320cc41e3820bb885cce1b93fe1"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","c1d100da46b36435e825c45977934c5b"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","009fca4bc9ceed1205c73d2099058dad"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","4f7c53703618f3990dc13d116a9fd87c"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","6835d54c4c6201c3e9632c22940c8fe2"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","d31afa65d069f471cab28dbd7b1061f2"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","0a2c9ebf38459a7da8d785da557fd089"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","a15d313fb3a376d2e6658658ace9193d"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","809fd8ceec725fce183d1b409d9d7ee0"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","cf56490e6bc76ffab1d8eba334f9e5c7"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","6f02207dc74a6a1e298da0387105a77e"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","ef6a7707ffc7e2794a9db2dab1553932"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","79a510073911d4f1a5915db13d1538f8"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","8249326949aa33a0e8954934a2815ce3"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","0377f77e52b5466772eb20bc7c5e2d89"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","08c2805f21154dbff0eb55eab1742272"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","eeb1eb4abcad66cf4ce6a38ad96a1ca2"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","1659f8801d483161e848acad37c54356"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","1e2bcc10b74d9ca6a95c9e0688582282"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","fcf9216c3efe047d233e29811e46ca34"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","346138f449da02cd1e04c28cdef22fa1"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","c3f2a8fbe304868e46ba6d67812a29df"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","bf8cb8d73d0e164f53b089a7ab01d87d"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","9fa997a53e4f21728476dcf46928438e"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","1e7142a70b2b1917f9a063da0786e9da"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","0e1f14a000698bc3bbfda18089060b02"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","49cd9393b8e98db9f24e5e6abc8acd78"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","0c7f97cd098bf8a17c961c7acb97e726"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","b9df62f42d6676c1b4e9f3ae0c746ba7"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","cfdb889cc0aaeaba4d9d5cc5cc16876a"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","9a42d910273c9bebe162850de6bf789b"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","f9689733198d4fb0c6be9680c569f483"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","b1af07857522988f2e7928e710da397a"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","e9b23ac1e29584742948d2ddede52a57"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","7a629e7757755d2ea166f689880f15d6"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","f672ffbf498dd387fe649d111bb68dc9"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","c0d265e85987f91dd17ddbc16441e2d8"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","8a98593879d3999206c20a8413003166"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","67bbedf3d7541dcb85c4e5d8d3717b2f"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","676452f027bf5668229d5c614a7fc1ac"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","80864d36b6654279badf67537ef88f0d"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","bb9ff8b7f43a78c9b608bf6312af1549"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","0d9f883242ca3db2584302f624b84d24"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","d0cd9eb1acd182d701c438f62fb75c53"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","515a8e4d5a615d586411bc09cf3e73e0"],["/2022/08/17/前端/jQuery/index.html","6e19fc83295fed8be702c3f3723215e5"],["/2022/08/19/前端/JavaScript/index.html","32272a842f0d23c1cca7144bd5cef07d"],["/2022/08/22/前端/Ajax/index.html","5f2f62d78697122f24c14daac005d5bb"],["/2022/08/23/前端/Promise/index.html","cc0c6de9a012b290a874739eeaa50646"],["/2022/08/24/前端/Axios/index.html","521b0657173f1e98051d587807b4e8e8"],["/2022/08/25/前端/H5本地存储/index.html","31b499079cb1b3e05f43eee233c3a290"],["/2022/08/26/前端/mock/index.html","88b40e59d56683df4e96dbf65fff20aa"],["/2022/08/31/前端/vue/VueJs/index.html","84a5e97e0a0a1e0477e3571fa5797c8e"],["/2022/09/01/前端/vue/vue组件化/index.html","85011ada8af7c0eb38ed5882b317a972"],["/2022/09/04/前端/vue/VueCLI/index.html","4ab4283e433cfc75d33c230c4572d845"],["/2022/09/07/前端/vue/vue实现动画/index.html","47da78d1e351baa560a5334f13a55aee"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","19ef4453c1b4d0907a4aa251dffe3ec4"],["/2022/09/10/前端/vue/Vue异步请求/index.html","e8b25dd99b4fba7cc30eb306b0682d9a"],["/2022/09/11/前端/vue/vue-Router/index.html","aabe790ca68170c0e4780dbc57799bef"],["/2022/09/13/前端/vue/Vuex/index.html","5e2292805a658b1b63018f6d0ea3dbdd"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","31e4d3853beb36f40cc93936e55b6cf8"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","2e9a4da4d0cd8229795ed8d36da6fb29"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","c4882f5053e371054fdfe4c1f556d4d6"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","50fa2ef54ae12a746f39ab0c4d4a96df"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","9204774285c84af38a307db2858efbe5"],["/2022/09/28/DevOps/Linux/Linux/index.html","dc25226a925a82ef6bfd4390fd0f7586"],["/2022/10/02/中间件/Redis/redis基础/index.html","5fff3cf9f6bb41fb29a0688546019015"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","7e5a7b8e6cffee0ff33264b6bf2ef281"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","9d449b3645fe7e2352e85a56e26f928a"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","51665e33e8aab7dd9a92f7825cac7688"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","d6030a560c4e0ecf6f823f385ef4af11"],["/2022/10/17/中间件/Redis/Redis集群/index.html","d254a5bf2545f9235f949fa70c247a9c"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","5a373dd86ef3f5d93bce05632ff71a36"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","d8049f6d4e2b604aa6763bf6ac656d90"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","5e0591e5ef39b6ee1c1fe76b987e62f2"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","cb94f48190e6788dcdaecc6c1efc088e"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","8c7d5ace3965fe7e4879c116c029c292"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","b57f615901971135fb9fe5ea0fffdeec"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","a31cb5fe3388db0fae5a4eb36c8856e7"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","571d44beb07db53e2c64b1fcde3fa918"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","1ea87f7fc331c7b595d486ce0c760fde"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","19bbb4f8c22ef71778f47a22508d2ca3"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","40aa3cb4afed2e99107fc505f7273381"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","58f8a6624ae31aaf9d75dda7507aa2a0"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","3a9f1b52442ebd65fa66b39782e5f56d"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","b5967c0653cb81700885931d663737af"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","015c60a03523f7f22b1dbce70a4e59e3"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","686b333a0d00281350c42d55c5a11255"],["/2023/03/10/DevOps/CICD/CICD/index.html","6a6e1cdaf41d4ec65789efb124a72346"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","7d1235864a24a808ee8fb9c2316be280"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","9eb3e3e9e1849c54aa0734d179dedaf3"],["/2023/03/13/Java/NIO/NIO/index.html","fdc5d27114e45e11ff520f07ae2e4823"],["/2023/03/14/中间件/Netty/Netty/index.html","4d8eb4b19f49f3c934bd9385cd21f381"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","9a4a93e24a81f4b71930c49d12aa1688"],["/2023/03/17/系统设计/分布式系统认证/index.html","0a4dd0fd390c2bf530ae6716ba872d93"],["/2023/03/19/Java/JVM/JVM概述/index.html","5b4e92b370a385414f41f1dd52d1f6c8"],["/2023/03/23/Java/JVM/类的加载过程/index.html","0a2e481b84a4f5ec471b0843a581f9a0"],["/2023/03/28/Java/JVM/对象的实例化/index.html","3e40d783a344f639eb4e5820578486f5"],["/2023/04/01/Java/JVM/运行时数据区/index.html","6eff144389b924a8089e7edaf83a85a8"],["/2023/04/04/Java/JVM/执行引擎/index.html","30cc10eca7f309d510fd990585ee4a1d"],["/2023/04/06/Java/JVM/对象引用/index.html","f35448729e8cdba3ef10b6c2fffe1a03"],["/2023/04/09/Java/JVM/垃圾回收/index.html","73ec0d54d759a6082a533ab07c9ea692"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","74ceb38627f2ae465e56333fe0783680"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","420a9562df4d2478622c7f127c271a2f"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","91ae10e383ab3dac2b5edae882a81314"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","c5c42179ee0e345e56ad38807758b134"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","7126e7299fbb029645d7a72c2f8ffae2"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","f3a2fc0ffa798bdece98651aa9ea4346"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","c9d68ad46ccc83e2bbefc4f587b33e32"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","f083d73fcb72b3514f539a16f4e25a4b"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","21d21186da95afdc6067bac6235b722f"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","40e5e4530195c62eaba29f20ec6eb4da"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","bf7389b2000df5ec826d6c76c7fed82f"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","a6b8370ed174e7c5799c408fa59f24cb"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","c91a42917a723fd14720aa9b7a48099b"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","29f9b017d3155f13c7edfd9d5034b64b"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","e94ce24a0e424aa7670ca5d4adc07647"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","adc58f5f72f78fd2787887a54d5f3795"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","d0e76b75ad976c4e13e01fade95c4da9"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","aa52c4fb2cc3e0d368c734448409bcbf"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","ef0dc79ea8cee1b0208ae3305d149da2"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","57609dec1f73049601f8223921ba5eb8"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","1d632f1994773385a204b716deb4570d"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","383b5a4a73b18a54b33c2335ad0d115c"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","064765c6fed40f98617ca6d2a8012bd9"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","fa1e555f8cfea55368e8f6039271dd22"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","38f277d0eb934a1866e8b8e6cbc90a8d"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","225f0b606687e10ef633ea098200d4af"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","883e1985df4a3169760c4d23e191c1ac"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","5601d2d5399aaae8f4b3b0e36215bfc1"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","5cbc53ee5e0851498183d28a5de14d1f"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","3c7106648ed714686f81ddba204226fb"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","fdf879831d9fbe97c52e50498949bfec"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","7f1fde5f01ccae707871adbff736537e"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","76a51717b8bf8914fc2a5396d46dfa60"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","0bc4efa2e8c1ef663821f019ae4b32d4"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","10e22f0a0e6db6f67a52d77c0364db6a"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","c568b45c955e75084a5f3178d584b276"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","479c74fe2f863dd5879658f943fe2b44"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","270310efd9c5e8845576f579d1fd26c1"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","a8ead321b763d1e5f7f6942836fadd45"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","cb760f29f122853894d989f4a23bdcc7"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","40b7b893a51783dddebdc3bf80966d6c"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","3c85121469032671fbb169c2fdde14ec"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","c3ac0b229256481f2ce8020ec5e51774"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","4b240bf79e3804ddac4dabae5bc5b5b5"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","b9b5f2a77008153aef5f0910c463642a"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","f91e45d627f3fc36b8755c2e9053cb6d"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","ea3a2d1816043ecafc8aa16d4b75dcb2"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","d3a0f207b8458613f0b7bbdeb69129d3"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","87955cc7f70c91cd2f5eaeb6f8f2eb75"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","c73b4b8235ed8f5cc57c83d323fd3590"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","815cb07db73902396180996ff4179560"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","fd4daaf948f1c7dd24124ac86f01a094"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","dc316deb8d5672a36cc8b31c33e26283"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","cf74a29868ceec63e72d4163c3288300"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","3affa2ebb391d34c094dd3c34137c256"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","8cd01170b41648435e3f756ece698d0b"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","e1ba55b1360f1fd214954c6bb5bf960c"],["/2023/09/04/中间件/Redis/Redis事务/index.html","9a2a32f96bc80bc6bf1e801bfd1cc798"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","6efdc2cf0d84a2a56bfff1e57956a7b0"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","3e42fbb43b1eb7e80a3a30ea4756a880"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","26f6a4b050314266559197c3370586ef"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","65ec1ad7b46642b02f4d0daa1c1f64cc"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","143e6a98de2966295d9838674a238507"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","d875c63dc66c91aed8939e7dbad3ca47"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","74085622ce4d10362d9f790fe6a219db"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","0dc174410ee2412f3b8ea897a5a0e72f"],["/2023/09/22/Java/NIO/零拷贝/index.html","65055769f99344d202f0552e1f0e6345"],["/2023/09/24/系统设计/JWT认证/index.html","bbd5190dde0a2bdfa2c4092fbdc09428"],["/2023/09/26/Java/NIO/Reactor模式/index.html","1684a4e497143d2d254217905f67d1b2"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","9a47bb39e2e69f5e6c55f2d37733f646"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","96ded4414417222ae3ca342fddd7dd07"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","a7e339a8105fe5e7d73b06f55ba1cbd7"],["/2023/10/09/Java/并发编程/共享问题/index.html","5519cd8ccd2e0bd0400301a80bd4d84c"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","4668c4f0183a4bdd21e88d0ac9b5e0c9"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","34c6bb1d1d818218c011feb77c3b7213"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","aa8b49aa82adc3cc3fc784cd4e1c2df4"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","d02cd5532958fe290e26f477246c3291"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","e029449b3e92c6396634bb8996462c18"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","7bd3eea822221e0482e8c87c6430119c"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","bd33ae3c57aad6299cce6d7a4c5a0260"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","a535ead7071dc157ff8a3ac2b0629711"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","375fa0b6270dd6ded06ea1d1168289b7"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","ebbbcf804fa7d8b95fda4b3caa565aab"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","f474f5ae8e747645a827db46a3f56907"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","ef7cd1e6c30bac10a9e1d975aad46e40"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","bb8b50d7106c04a7e340501c044c238a"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","0475dc07b52808d940dce9b2ea13381a"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","2a3310b378ee714fc0677d4b5e5d5f98"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","58e4122ce5915d41c5dc73d283018f8e"],["/2023/12/05/系统设计/开源协议/index.html","cc3e8b8a60514b9f2c6fafc3abfa4e71"],["/2023/12/09/MockMvc/index.html","8f265d43b459fcc45daa6a12986b61dc"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","36b97175159de239fd76c4b518816829"],["/2023/12/19/MySQL读写分离/index.html","089ac50d6854979c2cf4f3520f688e31"],["/2023/12/22/MySQL分库分表/index.html","1ac72cabac42b7eb11013bfb65680cfe"],["/2023/12/27/利用NoSQL优化数据库/index.html","a4d42dbc7f8ec1e4c315fc33515152d5"],["/2024/01/06/缓存概述/index.html","16af28c8a40d400151b5f6a8c8e5e1a2"],["/2024/01/11/缓存的读写策略/index.html","e1d07bc71a4770fd1286b21d04e4eabb"],["/2024/01/14/CDN静态资源加速/index.html","c75c98711bb3d0e4c5e2b820e10acca6"],["/2024/01/18/消息队列延迟问题/index.html","0848e636d9da7a792cb4e308cfa5c5cc"],["/2024/01/22/高并发系统分布式服务方案/index.html","1837f3031493b2257e047d816603723e"],["/2024/01/26/dubbo/index.html","0ec152e49221c508d5c722e85faa3f47"],["/2024/01/30/微服务基础/index.html","280285e92a350ba9f8c7d3729b02b482"],["/2024/02/02/监控微服务调用/index.html","51cb7734778c8c5fa86517f2646f61b9"],["/2024/02/13/微服务治理的手段/index.html","982bcb1246867f7de4fe949b28521285"],["/2024/02/18/微服务治理的手段-二/index.html","01592a5dbc19904f8aab0bd25a82d650"],["/2024/02/22/计算机基础/操作系统/epoll、poll-和-select/index.html","e85fa287f51d08848eb55dd9aeb17bc1"],["/2024/02/26/Spring事务/index.html","02f230840a9d27b4c30176088bd38595"],["/2024/03/01/HTTP接口安全策略/index.html","478e8e2c4ad8e213417f9ded92e5fb8f"],["/2024/03/05/HTTP优化策略/index.html","d9986381b8a3605d42688f8d964329ba"],["/404.html","bb0b5bfb05c88b8bca0131b3808d70be"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","bee0c8c1f4ec1348ff929ae934670c0b"],["/archives/2021/02/index.html","380ae4d3f9c99937ccdae6c2ee749f22"],["/archives/2021/03/index.html","f877a67df159329f9987c2301723e4a5"],["/archives/2021/03/page/2/index.html","75ff0d49c98cfb5c109415bc532393e1"],["/archives/2021/03/page/3/index.html","8653c4ecdfdfb0cdfc386d5b130a20a9"],["/archives/2021/04/index.html","ca2ceac849e7288f791a988fb6bc43e0"],["/archives/2021/04/page/2/index.html","923a6d719f60703b193462ec59d63b0d"],["/archives/2021/05/index.html","254857e7014106487aeb3123d16996f9"],["/archives/2021/index.html","2fe3415016aac02cc43f8f3950c4add8"],["/archives/2021/page/2/index.html","2751f214a03568352431dd5fa1b12b43"],["/archives/2021/page/3/index.html","ab09246d451d0c5e88130785342f58ee"],["/archives/2021/page/4/index.html","867d950377e2ea300e9ab595a7c66222"],["/archives/2021/page/5/index.html","febc4dcfee37f9ecca6dec802fa34b52"],["/archives/2021/page/6/index.html","83b406b6cafccfeb5198644ff756ac19"],["/archives/2021/page/7/index.html","1195c2aa34779f5a126ca0b98de227cb"],["/archives/2022/01/index.html","4c5481b2b9984b052f6aa42439b09678"],["/archives/2022/04/index.html","e44af7727e1bb6214e0c1d7cff904381"],["/archives/2022/08/index.html","051c04a33e24c952abeb000422d5549b"],["/archives/2022/09/index.html","5c4dbb4ebee99f0e171aace8b608af6e"],["/archives/2022/09/page/2/index.html","62cd6b7ecf656b512dba4e9ed84cb364"],["/archives/2022/10/index.html","94d909f292f83d88c7aa0667d0c2f1c6"],["/archives/2022/11/index.html","a2b7a4e7d0e8c45ad70982d0bfb472f0"],["/archives/2022/12/index.html","40c7fc838a9ed566debb80d41c7c1cfd"],["/archives/2022/index.html","06231d09ce84acb3bb00167ab2974627"],["/archives/2022/page/2/index.html","9ef119418fdd586780760fce5d38c7c8"],["/archives/2022/page/3/index.html","75fa6fb4e6f706c22087ef085bd86f2f"],["/archives/2022/page/4/index.html","134c45a7b0b32fd7c5b3dff02dbb1ef9"],["/archives/2022/page/5/index.html","2eccea9e8c3318f10465c66c9a4577c3"],["/archives/2023/01/index.html","8e9ce5a7dd8140414119a4024c0443d6"],["/archives/2023/02/index.html","859b791a85799a377353ce80f32c0f85"],["/archives/2023/03/index.html","ed720e03966510739adaec8b570e7edf"],["/archives/2023/04/index.html","981010a144222cea75638b2b0acf294a"],["/archives/2023/04/page/2/index.html","bea99c2ffe7240ad01ed62ba18f3af37"],["/archives/2023/05/index.html","a32f3f9d5dfabe94788eefbc9c6e06c5"],["/archives/2023/06/index.html","b5cd61031c19505067a06e8d982c38f2"],["/archives/2023/06/page/2/index.html","4b2f74de72cbff86bc4ce7df8c63c2a9"],["/archives/2023/07/index.html","dd19d51e0e4c48727dfdef5f9d4a73ba"],["/archives/2023/07/page/2/index.html","f0c49514fce54f635b4349cfad9dbfc5"],["/archives/2023/08/index.html","db996ededf936609a10eb1616184229f"],["/archives/2023/08/page/2/index.html","c19d32ff15ae412a9897bfc4801fb570"],["/archives/2023/09/index.html","6ab4a309e26214f84b79ee5638bc2b6f"],["/archives/2023/09/page/2/index.html","59f6325d3ce7130a29cd3bd0f289216e"],["/archives/2023/10/index.html","3e95d127a30d1bbaa2a2ca70a17a7da5"],["/archives/2023/11/index.html","786959b9cf97d781c782505b2abaf410"],["/archives/2023/12/index.html","49e823d80500e0f2a9e0919b727c48d7"],["/archives/2023/index.html","45151548c1cf8e13500754347e7d3ba8"],["/archives/2023/page/10/index.html","251f257404bb5f0c67dbbd97ccd30fc2"],["/archives/2023/page/11/index.html","fb8255d8a55b454c08a25c50b7a01c64"],["/archives/2023/page/12/index.html","979ed27beead5b02155cf626a453c9b4"],["/archives/2023/page/2/index.html","f7ea8393465c9858d9f46121702d5534"],["/archives/2023/page/3/index.html","87c277f9c5179865d340beea2184392b"],["/archives/2023/page/4/index.html","f197fa47da77e32e952d5003e2a2e01a"],["/archives/2023/page/5/index.html","1c4263116d53bb3cfafcb67d235b3d83"],["/archives/2023/page/6/index.html","b01c7ed94c2b168cb4d9cd3b0486e6e8"],["/archives/2023/page/7/index.html","d172f92d22e5c05f12156d1b6a947678"],["/archives/2023/page/8/index.html","811d03512bffeb451cdb5dc363b082bf"],["/archives/2023/page/9/index.html","cdc1ad29fe6392dfd655df8acb0e9d97"],["/archives/2024/01/index.html","ec3035b2e081231bfa0261b0c6eb2980"],["/archives/2024/02/index.html","faf268ecf85ae002b9ab7c8a12fe674f"],["/archives/2024/03/index.html","a15658f229c6e2752ae6828978ce0836"],["/archives/2024/index.html","004b3731299326b02954176b04153bac"],["/archives/2024/page/2/index.html","5513939873de8bcc07148f504060c367"],["/archives/index.html","7c07240608ca09993c328d0a960c59bd"],["/archives/page/10/index.html","b636f66614d110ec0a52cf9334962b86"],["/archives/page/11/index.html","344460da8cdf7f176aba664ac19401b4"],["/archives/page/12/index.html","cdcb5c04b3794c5e430e1da5ef0242d9"],["/archives/page/13/index.html","26352b10b6c6244688fa15789438e34e"],["/archives/page/14/index.html","73583c7e182ce144fa0f01dd1975941b"],["/archives/page/15/index.html","3384ff6b0c3816b356f0d15135a6ed6d"],["/archives/page/16/index.html","9a913552db57f94fc0eb671d377b379f"],["/archives/page/17/index.html","2c385f50e4107f6fa4ebde6ec22f37f7"],["/archives/page/18/index.html","9dc2532bd3f870ed6ddbe564172b49ad"],["/archives/page/19/index.html","49ef09f07485b65eabcac8ae273049d3"],["/archives/page/2/index.html","cc275c43fb0af5f75e83fc0caea3d936"],["/archives/page/20/index.html","a93390dcd123dbcefab6f28af677eb5a"],["/archives/page/21/index.html","3508a5968e89f770fe9faa4111956a57"],["/archives/page/22/index.html","42a81395c20b884896babd0bb3205fac"],["/archives/page/23/index.html","5cda9ffbaa8de1e0cc79158749f73685"],["/archives/page/24/index.html","0c5342756d47fc6d9b727474c89eeefb"],["/archives/page/3/index.html","bff3691e4840ca43836cf8bad3114bc9"],["/archives/page/4/index.html","a6f2d6720d8102d2c37962f234ba5570"],["/archives/page/5/index.html","556090219d4ff4942b2609fb87d6860a"],["/archives/page/6/index.html","72e05735ed830fde31bd1ccd908382ba"],["/archives/page/7/index.html","53d4810fc65191bf9b1010b498e1e86b"],["/archives/page/8/index.html","060ecef798028df888e712c46d3d42c6"],["/archives/page/9/index.html","78d0d310b8b876cbb706efcec1e59e82"],["/categories/Devops/CICD/index.html","9c198bbe109b1c984ffb9346a5f8c773"],["/categories/Devops/Linux/index.html","d039de782e16e52dcb093a95f32eb080"],["/categories/Devops/index.html","e13d5092da4bc8dc20f50da4d2664ecf"],["/categories/Java/JVM/index.html","dc5856687c88a333a79d57845dd9b53d"],["/categories/Java/Java基础/index.html","bc6bbff4d4dad2b2d4e6c87f13df4fd7"],["/categories/Java/NIO/index.html","b45288e99b337fa8bf575852a21bd108"],["/categories/Java/NIO/原生NIO/index.html","4b1b34ca1e00daeef9d5fdf2d2ae948b"],["/categories/Java/NIO/文件操作工具类/index.html","62169772c80a48bee4860f3dfd59da53"],["/categories/Java/index.html","9b73af481f544029665070f9d1cce154"],["/categories/Java/page/2/index.html","771a45bc71050a4d47d5403ad08db50c"],["/categories/Java/并发编程/index.html","9aeb3c429192f4679bc2d090dab40fad"],["/categories/Spring全家桶/Spring-Security/index.html","e807df12688253de448c0c15ab6bc598"],["/categories/Spring全家桶/Spring/index.html","cdb00f8306056b627ee0d0cb94a19e66"],["/categories/Spring全家桶/SpringBoot/index.html","1aacf62ed3a24f24026651683c102805"],["/categories/Spring全家桶/SpringCloud/index.html","1a80b4a0fafe5618d69ad60f6479184a"],["/categories/Spring全家桶/SpringMVC/index.html","5e95e6ad89bc9219379fae000294f18a"],["/categories/Spring全家桶/index.html","d1b1f9f92301167553581593b7e39643"],["/categories/Spring全家桶/page/2/index.html","5625957bd7afe007101195f85faca20e"],["/categories/index.html","4c3062e763c66882f7f02ab84adaff89"],["/categories/中间件/Dubbo/index.html","88e7d1b564d0d834e520180566b0126c"],["/categories/中间件/ElasticSearch/index.html","e3ce71afbc57b04b3cdd870e7934339b"],["/categories/中间件/Netty/index.html","f96556adf40ec3360d7161d6a2021620"],["/categories/中间件/Redis/index.html","9106da3e2aa34bff045215535e8dc03e"],["/categories/中间件/Redis/page/2/index.html","0c8c36d4b6a1be8168f2ea8d1a8d87b0"],["/categories/中间件/Redis/page/3/index.html","0e0d9742dcdf709cfb9c7aba270b6d83"],["/categories/中间件/index.html","6063ac16a15389393dc90c8e48cf2e8a"],["/categories/中间件/page/2/index.html","ef30b3aa312f13071fb3e068413fb41b"],["/categories/中间件/page/3/index.html","02113ba9f2f6ac31e00dfac1593e3e32"],["/categories/中间件/page/4/index.html","b9b3c05d78d54cafb6c1be94565189fe"],["/categories/中间件/消息队列/RabbitMQ/index.html","4d66c5c4dae552cc4fdf172a11757452"],["/categories/中间件/消息队列/index.html","d466ffe9d37b52dbe38259326f9f34ca"],["/categories/前端/Mock/index.html","6ada5c9f1cbdb8ab213d0c30d152a92e"],["/categories/前端/Promise/index.html","67f88ab96234665ae2b11254e7b7d0f2"],["/categories/前端/Vue/index.html","5f11abc6a10786e21c0188f5f79d884b"],["/categories/前端/index.html","bb4dad8e98adf8f2212a40b0bc7f3588"],["/categories/前端/jQuery/index.html","fdf9d10faf29be9fb61e294bf9b0f938"],["/categories/前端/page/2/index.html","88e93a5b295362272938c82bdecdd02e"],["/categories/前端/原生基础/index.html","3fa91e6ad60fe7b53b932c6779b8db26"],["/categories/前端/异步通信/index.html","09fc6ce44768c635d0c228298f293050"],["/categories/工具使用/Git/index.html","2922d0af764c054fdb53fa3c314053a7"],["/categories/工具使用/index.html","972c8b07b77f4b5e161beb3175e8d4ae"],["/categories/工具使用/markdown/index.html","d42bdc7da93fe932abfc89e919afd530"],["/categories/工具的使用/Docker/index.html","1cc2142eb194b9f981d7d17762233fd9"],["/categories/工具的使用/Nginx/index.html","e9f4f54fb3af8ca2265bbc0734fcee72"],["/categories/工具的使用/Swagger/index.html","240ed45f5095aa7dbe353dabcbb00790"],["/categories/工具的使用/index.html","646731a72613c6a9b67d2fa4c7389e81"],["/categories/工具的使用/博客搭建/index.html","4df4fd85ea9ba670eec2d1b3020dbf71"],["/categories/数据库/MongoDB/index.html","92cb778cb90e06592bec4545daa9fee9"],["/categories/数据库/MySQL/index.html","bc276d03811239541d0cc07f0f66858c"],["/categories/数据库/MySQL/page/2/index.html","fcbd11cf83318eca72e700b4aa4d08d9"],["/categories/数据库/MySQL/page/3/index.html","962feea3f62a66444839efe2a5cfec5f"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","a3a39838a4cce95f1d3935f6d8782703"],["/categories/数据库/ORM持久层框架/index.html","3004134b0b5ebd4b9442272a66dd9a91"],["/categories/数据库/index.html","e7e5ee98d6e5a52a08de38b815bd3d21"],["/categories/数据库/page/2/index.html","00f454808a1d288bac055e0bb43cd331"],["/categories/数据库/page/3/index.html","9ea1ed5c2d71b0991a1ed418e5ff6baa"],["/categories/系统设计/DDD领域模型/index.html","7601f981218079ba2989ff7e09ac8de5"],["/categories/系统设计/index.html","ad0d4963ae9b68c5ba92480a1b2b4bbc"],["/categories/系统设计/page/2/index.html","e7fd32b04ea1f0505d3005f341da4b74"],["/categories/系统设计/page/3/index.html","0ad3544b2f96047e9522d1695219376c"],["/categories/系统设计/page/4/index.html","6494558fcdc517c705aac6dc0c204573"],["/categories/系统设计/page/5/index.html","a2cc428b29b292110d14ff03775f978f"],["/categories/系统设计/分布式权限认证/index.html","bae58d76aaa4da4d3aaec9a60627ba1a"],["/categories/系统设计/分布式系统/index.html","e51720754746454cd4b6ca5d49c4fd18"],["/categories/系统设计/分布式系统/page/2/index.html","8cb0a339780711a334ca76b4626810c8"],["/categories/系统设计/分布式系统/page/3/index.html","319e75bd47e46d5e1a9f99c424808224"],["/categories/系统设计/微服务/index.html","c7d36609838bace9de4862fc02cd7328"],["/categories/系统设计/数据库优化/index.html","dbfc3f9817f2a5e1c934df78a4bd7521"],["/categories/系统设计/设计模式/index.html","164a8a1f73ca577ec40d45fd6adce4ad"],["/categories/系统设计/设计模式/page/2/index.html","bd39dc5cc1096939ee681fdaa955c296"],["/categories/计算机基础/index.html","07809d1d7750dd8e815d94ff63b14d9d"],["/categories/计算机基础/page/2/index.html","c381e6562672cbaad920e0268de5ea5c"],["/categories/计算机基础/page/3/index.html","1233bfec63ab9376984d595c606104ac"],["/categories/计算机基础/page/4/index.html","cfe6a2ba00fee82b9e748a29a041dac0"],["/categories/计算机基础/page/5/index.html","682361144ef24cb6878b844dbd05541b"],["/categories/计算机基础/page/6/index.html","d7eab3d232d62bfb55f3c6ec326a5dfe"],["/categories/计算机基础/操作系统/index.html","cab2fbcdafd032ccc546d7db3c45caa8"],["/categories/计算机基础/数据结构与算法/index.html","95fc37283c42106467606bd7cf625a69"],["/categories/计算机基础/数据结构与算法/page/2/index.html","db8fe11475a3d6d68ee6e1bbacf19e5b"],["/categories/计算机基础/数据结构与算法/page/3/index.html","78cdd1eefde10fe7dc26bc84c533f8b4"],["/categories/计算机基础/数据结构与算法/page/4/index.html","d0764eb60fc7a843a3605dc5edef019c"],["/categories/计算机基础/数据结构与算法/page/5/index.html","18813d9e3e8db0469545e071aecaf311"],["/categories/计算机基础/计算机网络/index.html","fde166f2fe9aea652e376137f7cf85ed"],["/css/index.css","2af5ea34362e0b34f799106b2659ad50"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","1b3d0082c718563a900ebcd8220971c7"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","1c2ee9a2bd2338d3c09c27b3fe041674"],["/messageboard/index.html","775daf9b4158d5794aa724a5d9a8e3f4"],["/page/10/index.html","c8d35a3c28b9f7590f6f48710aae7efb"],["/page/11/index.html","5b10df4d1bf910006fc79cd619762618"],["/page/12/index.html","6515e7658ee2d6f6f518b15dc478c6e7"],["/page/13/index.html","d5bcdcf11591e41f88c9c9760d860912"],["/page/14/index.html","e3aad228f093562a093ce5270894539b"],["/page/15/index.html","e47e53bbc8828b91c4101b2085e9a040"],["/page/16/index.html","2cc8f88ceb93ba153b59d56db338241a"],["/page/17/index.html","0d877c41905abb4ef90a88bbdc330861"],["/page/18/index.html","9622d8ace7e2f3bb4bb6ee3e45404fcb"],["/page/19/index.html","d645f27d48c6cb7a53fc99a2680d9d74"],["/page/2/index.html","f17d80c242cb799041a419612558d75c"],["/page/20/index.html","d979532fc4b7ed44c077bbdc0f73d5d7"],["/page/21/index.html","274dc976e7a6a5455d5cdeb49f09da44"],["/page/22/index.html","837e4fe7af89a5c05aef18df0e6f1fd4"],["/page/23/index.html","2fd479005dcf82293e0c5638ddec4c6d"],["/page/24/index.html","62f2572bd0c7d7356cfc0fc7d4b287e9"],["/page/3/index.html","bc5c16ddf5281e1831acf7ed60db8b17"],["/page/4/index.html","281e54c400c1fead185c1c1e9c8cb393"],["/page/5/index.html","beca9c536e297a4e987a6490c3a3bb83"],["/page/6/index.html","a0eed02f0792507487c6e3614a00a309"],["/page/7/index.html","44924c6e523de72ca218ce7a91c389d3"],["/page/8/index.html","f347e078e433b4158bf6d79d2372572c"],["/page/9/index.html","f3da91b512b6ad895dae38affdd300e4"],["/sw-register.js","d781d30f95991d3e9979de70282d318f"],["/tags/Ajax/index.html","e7478ada59b5c04bb3b8d9b0de0ade46"],["/tags/Axios/index.html","e7ff9a4b384327b25cebefdec2bf03a4"],["/tags/BASE理论/index.html","5926dfd4378eb6dd753274065fdbbe76"],["/tags/CAP定理/index.html","60ab87d3b79bce46002dab4311cd30cd"],["/tags/CICD/index.html","d0a733c723d5d88ef8409f7490c3ba2d"],["/tags/DDD领域模型/index.html","27df15ced317e44d95c53ac0971b10a0"],["/tags/Docker/index.html","6b99d66bc30f59c4d8637d37aa8fd151"],["/tags/Dubbo/index.html","e5b218a34353f87f54afbd615a21d3df"],["/tags/ELK/index.html","efd5d6b1c437c9421656cb01aedce90b"],["/tags/ElasticSearch/index.html","759d9c3c8c3873b86bcb14e91a3805ac"],["/tags/Git/index.html","85d6606f5a14a79c1cc20998e9a46acd"],["/tags/H5/index.html","fb6c764972e426cce4d3afc33ba5e30c"],["/tags/HTTP优化策略/index.html","9e6d65814d1824952faf2d49a6471f03"],["/tags/JVM/index.html","68b9374b7845aec81c0c6cf52ef7ae12"],["/tags/JVM内存模型/index.html","fb9caae19baeed2fbb36e2d99f8ea19d"],["/tags/JVM执行引擎/index.html","75a38dd3460894eb407fc61141df7dbf"],["/tags/JavaScript/index.html","089932a36a6e742db7914c65a52e59ad"],["/tags/Java内存模型/index.html","cae7d4673bbed9513986f23275533ed1"],["/tags/Java进程线程/index.html","5918b94cb605e7eaf2ad9839038e1dd6"],["/tags/Kibana/index.html","f49222f93ae200f97fca0a4feb6acda5"],["/tags/LeetCode/index.html","ce83290f4f903a9d00c1e315ebca82cc"],["/tags/LeetCode/page/2/index.html","5c5bad40ad8867fa1205cbacb167a32e"],["/tags/LeetCode/page/3/index.html","3256b215b4e7f0aa1940d84c9c954918"],["/tags/Linux/index.html","7acfdad0e5995dc7afac8822967be698"],["/tags/Logstash/index.html","d0bb65c1d5ca512ed4786ff7c373cf8b"],["/tags/Mock/index.html","41f0862ba85d02802cf05e7d90a966a2"],["/tags/MockMvc/index.html","71c26df7ab2126f0ea1e4f9a3550fda4"],["/tags/MongoDB/index.html","fc42537b2c87c99e3506a68fdacb90da"],["/tags/MySQL-事务/index.html","ebf9a9bab062f963f14fb42d4f5bd19d"],["/tags/MySQL-数据类型/index.html","c7526829a253a582c142ac20864bee74"],["/tags/MySQL-日志/index.html","2f2ba97be4bb60338b56dccbbb91955a"],["/tags/MySQL-索引/index.html","09154bddcd87f3a971cd3bb568ff56e7"],["/tags/MySQL-锁/index.html","b958ca0323483f4392e84f7eec0019bf"],["/tags/MySQL/index.html","424ea109d9f2ba5717a8fb285afa8ae8"],["/tags/MySQL/page/2/index.html","75977c477cb55b34390c57f59c322f57"],["/tags/MySQL分库分表/index.html","c86754ac9b849af971433d5c74946009"],["/tags/MySQL读写分离/index.html","bb7037308f551535ac40d6eb111ee9d7"],["/tags/Mybatis/index.html","72223a327e91a681c11564239905e085"],["/tags/MybatisPlus/index.html","c487d905d89b89225e649e6bb31b163a"],["/tags/NIO/index.html","56d12a859c2e9df820b5375c5be85116"],["/tags/Netty/index.html","4dd0486924b14345f6c51fa916021cfb"],["/tags/Nginx/index.html","401a70aec20c037c968ef7ce768f6b24"],["/tags/NoSQL/index.html","780c1eedbb1d098392f8c44c35993f47"],["/tags/Promise/index.html","f4c3d6f54f1c4c8e9267095731601d76"],["/tags/RabbitMQ/index.html","28339e8df1d36eb0151b0bcf6f474d86"],["/tags/Redis/index.html","f396d02f94e92f42d4de862d6c595e73"],["/tags/Redis/page/2/index.html","9f9553b8e5b6ea8662e934c38f4f6ab4"],["/tags/Redis/page/3/index.html","0eeeb0cf9280e22acd5978d41da5be37"],["/tags/SSM/index.html","97bab00d6ded6a001ddd9d4b2f30ba8e"],["/tags/Spring-Security/index.html","f07eb061bb566bb52fb0abf0a4bac2ff"],["/tags/Spring/index.html","139f636d61aca732bbd6edf2ff9219cc"],["/tags/SpringBoot/index.html","8f9159d717cabd2782b9bf10d4dc95cd"],["/tags/SpringCloud/index.html","abe7e697a5ff038771782916306ab7e9"],["/tags/SpringMVC/index.html","b7d6e269d1a75054216825417047d733"],["/tags/Spring事务/index.html","ce37f5f58170d27fda3ea03759b91bd2"],["/tags/Swagger/index.html","3686e1f79afb75a88f00abfadef7d357"],["/tags/hexo/index.html","fe5d4ba0b0e7f045ac5d07bb556a0de2"],["/tags/index.html","23ea25136167afae5a08373eccd475f1"],["/tags/jQuery/index.html","2f0d7c6122f51f70c3445a611a6851f9"],["/tags/java/index.html","bb6a52eb2090ab42471436eb22521639"],["/tags/markdown/index.html","d6145dd67eb79329ba943fa773334851"],["/tags/rpc框架/index.html","3abbb454d38e350a153062f6d307a75d"],["/tags/typora/index.html","793c4f3ac28d290d44d769fe460987ea"],["/tags/vue/index.html","5b404f690d1e50d8657fe4f040f89af1"],["/tags/享元模式/index.html","53afb7976f03b4b6b5eeceaa52e7a9db"],["/tags/代理模式/index.html","8c1428af47fcc9796601d5cdbf566f79"],["/tags/内存管理/index.html","c1a6b8a7c2e7cc0bd8855d20e87491b9"],["/tags/分布式/index.html","aed3813ea0c492e2422775105a1b4062"],["/tags/分布式一致性算法/index.html","8f291e97c6b1739af5cd7ef944414f51"],["/tags/分布式系统/index.html","f16584d4706c066ff26404e54c2a2096"],["/tags/分布式系统/page/2/index.html","15dbca57fde8bc416c475dc7b78db638"],["/tags/分布式系统/page/3/index.html","e0a999851f7f412fc7d6eec32585619f"],["/tags/前端/index.html","df32a03858269675a52e0690dde5603f"],["/tags/前端/page/2/index.html","3e31450203eca0072c893a859bb644ec"],["/tags/动态通知/index.html","5b100e781c8b4f921e99bb7b2763c26a"],["/tags/博客/index.html","5baebd82d67999b2947c1a01a04996ce"],["/tags/后端/index.html","e5cbc9063df67e86db4cb50f7c4234cc"],["/tags/外观模式/index.html","de49943dfe0fbd7a0197b14f171e906d"],["/tags/多级缓存架构/index.html","bb0a6320751a6632f16971909e545452"],["/tags/多线程设计模式/index.html","ffa10a07a31c46fd67e59bd1878c9b13"],["/tags/多路复用/index.html","62dfd51f3374b884f548b58283e4584e"],["/tags/容器技术/index.html","5e8be9f128b7dade93cfe839a8bf10a3"],["/tags/工厂方法/index.html","28b7907c45264c667bf2d51b3e784ea0"],["/tags/开源协议/index.html","dc40e8d78bbd5c6227d48a4f7d817425"],["/tags/异构同步/index.html","19bed1223d2c351cc0dea24e3b64b6ec"],["/tags/微服务/index.html","3b2a676575ab1b01105d9492371410de"],["/tags/微服务基础/index.html","dc94c79f7065b785c41766e048e1623f"],["/tags/抽象工厂/index.html","084960bd5ddad087f45cfbc8e930b21f"],["/tags/持续集成持续部署/index.html","08b4d292d37a2b766ad190d61d2b71d8"],["/tags/接口安全策略/index.html","0d096859df67b2c9c5ab1a3a4ad67f93"],["/tags/接口幂等性/index.html","5d1acb150ec1e00f61ad641136087c13"],["/tags/搜索引擎/index.html","29d7ad73c22928c025a17239eb4a2503"],["/tags/操作系统/index.html","7db6978bf701457789dfc419db9088d4"],["/tags/数据库/index.html","758e0acb77abbec64e1efab891151d1c"],["/tags/数据库/page/2/index.html","7f89e7f053fe79fb6b80e1fde1b47ddf"],["/tags/数据库/page/3/index.html","dad21df7dcc1fba5b98ee0571b5fe7bc"],["/tags/数据结构与算法/index.html","7079c02f66b7d477591b32716268573a"],["/tags/数据结构与算法/page/2/index.html","f2ad5b31ac2e66244bed1bff9fa10b93"],["/tags/文件操作/index.html","195e645784bbf7a3d8e0953cef393f9f"],["/tags/日志/index.html","d872bfb8352506f60d1c188e2eb6499f"],["/tags/服务器/index.html","69e22de506a8e10b77b4184e4d7348eb"],["/tags/服务治理/index.html","a76ecaa28e44341f69716da1da7dd4d2"],["/tags/权限认证/index.html","d42fbb003b2dd08721b01813997cc392"],["/tags/架构分层/index.html","fa0ab0f6e9897951a64a73b973a21073"],["/tags/桥接模式/index.html","54f6c798fe8b1845671e559aea6da693"],["/tags/模板方法模式/index.html","e3490b4aa89abcf427cae026df058c36"],["/tags/死锁/index.html","a67e6b7d055a27dd52f31f8ae2f3713c"],["/tags/池化技术/index.html","c94c5d1ab6292ba890d6d0d90750b0fb"],["/tags/消息队列/index.html","0760ede835e8d0c5e25095ada05a20e0"],["/tags/版本控制/index.html","ebf28634a37d8568671a433b5a8a2a29"],["/tags/监控微服务调用/index.html","9e2653efcef5c3eb56a2a4e9d90ed00c"],["/tags/策略模式/index.html","04e0bf2811522ed016f6cd0e93cc40d9"],["/tags/简单工厂/index.html","14b0118882587fe72026c659aa403ca6"],["/tags/算法/index.html","3cd774e13f7efcae24364229fc49f0ee"],["/tags/线程活跃性问题/index.html","755d9f3935fec25852d1dd82a81737fa"],["/tags/组件化/index.html","7f878857690932b076448f83b6b3f8ff"],["/tags/经典限流算法/index.html","9bbab27e8b8c6c80cdae428da0026481"],["/tags/缓存/index.html","3689d81c5b0b2a5788d6113772b77f21"],["/tags/缓存/page/2/index.html","3ebcad40a3f2d11394497880b300cd85"],["/tags/缓存/page/3/index.html","07c22719094c37164c170848e857d614"],["/tags/观察者模式/index.html","7e11d43d2c400e68df62d3b2721c3fb7"],["/tags/计算机网络/index.html","76f8d3b0e8126247e7ca9785996ece53"],["/tags/设计模式/index.html","a3dfd408378a94e52d7908050a30858e"],["/tags/设计模式/page/2/index.html","2bc4b764af909b70960870814cf90b30"],["/tags/设计目标/index.html","eae94e530b8dafd32ef8a815b2e4bc1b"],["/tags/资源共享问题/index.html","25fc2c01c20919363a75059152b13d37"],["/tags/进程管理/index.html","2bf9b36cad6ff9ca06a5bd70b2afc35f"],["/tags/适配器模式/index.html","79cf0d358d58aa62f66b67ac66cad6d9"],["/tags/通用设计方法/index.html","c0e96b04979cfea08d2d540ca38690d1"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
