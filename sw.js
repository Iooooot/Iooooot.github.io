/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","d8c1c498f8588a7ea076b8345595231f"],["/2021/02/22/工具的使用/博客的搭建/index.html","3342625d261d21111d8f1c0483d6aec6"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","afec7a2634c050210217f475b5c32bb7"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","e6867b15551d0dd2b72af014c5886e3d"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","6bfa23bf741ba9923c50addea270423c"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","f8d8679d82a34c43bf495be59df7226e"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","7fde36cfd1d85dbc612475c297da452e"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","515b7292e1bea9dfa02d6fdf334669ac"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","ef65d21bef09d0348085bff57cd880c9"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","426e8c0a316f08e345cf7462efd053fa"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","50b7d912dac874b0db4498158cfd936b"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","217ba7172f95b12607b2b912db190175"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","14be192f835ae809930be2097c8fc7a3"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","94c58d3f559bfe65ef137cf74bbe7fbd"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","bef0514d8e6b96df561167a402ed1c97"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","479edbaa6781b909e191cde2a7c6e99c"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","4da8d5bba5e9cbfa4efedd840110e2d9"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","ea4859a5c7d85fcfe2ed07a7676f4986"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","d081671ebb25779e63ef84e92f0c229f"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","073c8ac876e0975f2f24b4b95fda27c6"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","699d99868649a6a7d99ceae5b565b0d0"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","cdfc5de4c845fc6330c27dd838651672"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","107d181b019b009bab2c4b1fbc062400"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","e61346efc90b8451f31d313186d4643b"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","a165afe8211911493a2a229804512440"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","5a32db8c34744789ff70d60b07bb6ccc"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","049b3695ab691704ff9f1ab42f062c27"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","479622e741d5c10e27e4a68eb67bf577"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","e9fe39a1855e3d23815d81a449d3927a"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","9f42fbf0a1fd6c55ca96d0d70348cce3"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","c4b7a5bd0847654225b9029a26f8b8cf"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","5125aae1d453d289943ad8cc2baa8169"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","296cb60be8f356df9bae704d5c8ab9c8"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","975fba1b41ab4a1079f3dfd7f94a15a9"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","bb66688c98e889171ff7c1dd7e8b5e20"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","c4b25f34922b3dd82a5f097e2b25b425"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","030ddb2fd4f3e3d9ceb0f9cdeb561f55"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","ddd1bdab19333e8c2c56170a38c6f16c"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","a39e5108cea86c11a3d3fd923b8552cb"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","94af1de4e849f8e28b16625b8032f6d3"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","5f306e02d922ab2db8b602a918e17fa0"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","1d408fc2986484dc231dfb1739d25179"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","6c3c19fcf10b51dbb789781b6d8905d7"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","42c19d4b082b581a10b3f9e0fc209607"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","102efacdb83b0003c33ee5f9928b5825"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","233f2f22faa50f2c893bf96d2b97e5c2"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","0d484710967f38d50bb7a64e16cd59aa"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","be530751cd31f3c03aac3c9b978936de"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","e1dec7092243844a5e9d16ce591c1df2"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","caecd5edcdbe4c509c9a00374815fd1a"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","24cafccdd99d5f0833987e3c8731a552"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","984418e4541503b5eb168392234bde50"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","81644ed3010fd25746c517d2d67e4df5"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","6725bd0e03516ac0218102f47ff4ae7b"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","51292566a481b908aa931fb93ea011b8"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","9e4082dc20de41bf3b38bd17d33dc826"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","7fee81e2657f02c3d8ee45dd2c267f82"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","05c13c1242eb0e798bab0b82f9cf57e1"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","c95ab557072fc8d770c882478da012b4"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","e721125e80bc59c4683c255e2960c81c"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","fcf376a45ab96fee45e1d9e1b63039c0"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","9898463f76d12a189d771206c1b74423"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","d6eb2ef6ca987d4d837464ff320e6bd1"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","6b0204b1dc4fa5ee6c5901c99c720556"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","b951666359cd926b0a23708b9efa0637"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","d3ab4de201e8f7b19e8ce29c09891fb6"],["/2022/08/17/前端/jQuery/index.html","c3a4a02c15926d56e6dd774ea4f715d0"],["/2022/08/19/前端/JavaScript/index.html","497f8ccf7547a05af57a2270e05007cc"],["/2022/08/22/前端/Ajax/index.html","cbfeda5f47a4c171320c021c6b3508ac"],["/2022/08/23/前端/Promise/index.html","f043cc158d907cfc4fcd23a0ad7aa58e"],["/2022/08/24/前端/Axios/index.html","52a518050b6af57cd1c986611d92e397"],["/2022/08/25/前端/H5本地存储/index.html","7a0dda797925277c024b2da5f43cf691"],["/2022/08/26/前端/mock/index.html","6280ed228d8a2b9415fa4926d988a831"],["/2022/08/31/前端/vue/VueJs/index.html","e216f6289f5b584de2e37cbfc576e088"],["/2022/09/01/前端/vue/vue组件化/index.html","fb50a7db3cb5427995c8f20c7872f750"],["/2022/09/04/前端/vue/VueCLI/index.html","e0ef39e9d615bad6c77746b93864cd2d"],["/2022/09/07/前端/vue/vue实现动画/index.html","596b674dd133420dad08d15e638680d8"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","1243bd54bf57f513f253e4d8420706be"],["/2022/09/10/前端/vue/Vue异步请求/index.html","555c3284a220e61ba3e3fd3f1d25bb1a"],["/2022/09/11/前端/vue/vue-Router/index.html","44cbd1ed4e06a0fa9c7b1dc43f575c11"],["/2022/09/13/前端/vue/Vuex/index.html","0310ec8ed70e787ee6b08aae36401196"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","f8e3895d0da10d01bc147597d09a9051"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","7ce8aa61fbb477f9e31a2a47f188a377"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","3ec83562952615073c12f9f0adfc6b80"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","d0af51002827e0df9d9704eed16cc550"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","947c88b6cde47a886716b39ed352c243"],["/2022/09/28/DevOps/Linux/Linux/index.html","ffc1fe49ff53d61a4e7f0ec7580ebeb8"],["/2022/10/02/中间件/Redis/redis基础/index.html","b8b49a666341dd5f1ff7cf3e026a4e39"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","352f47a741e0640de55c70be245e5519"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","2de343aa736e8d1b0b3bebe117a6dff1"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","b20ecff853998ea2285968731e2ffc69"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","92f3ace090ee41261e1f8d89de74935e"],["/2022/10/17/中间件/Redis/Redis集群/index.html","90bda81e05d9f96b2b59dfeba5c8ff20"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","613fde2eca4c4395d33b0c35614dc6e1"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","35d9c69e8e3552833f27684f2e0bd0b6"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","8825f8bf1126a329387e25280cf4eff8"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","055825cb390fed2ce6c813ee4c6c1b5d"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","374463f64b113e4094096cb7ffce6646"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","941c28de75e3f7e674cd81c61bb1526e"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","5c7ed137a98db1db2b1e6485da962776"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","848ab5d319faabf921bb20609bccff1c"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","12c3769bd338da3ea2f8aecfb6b0bd81"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","b6b569b5562d447bc6f717225ff39cd7"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","6c8d3fa2d04a851521ea4137440febf3"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","b9001067d636b26b73c109b3dcf73626"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","f5ba1bc25c808e4ecb5fedd5f6cae256"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","41d481f011c340dfbe0193808e429e89"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","2b31ca6b218f001a0d2430a38cef72b1"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","29b7e9922060f7e23542ffe9b413db59"],["/2023/03/10/DevOps/CICD/CICD/index.html","91d6707bb3b7978a6ffcce98c095ebc8"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","60babd56ead503f2437b148ea1b48c29"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","c590af511b665900049f47cbec52884e"],["/2023/03/13/Java/NIO/NIO/index.html","d7e7f37e8a40e6abaaf0dd5ddf67d395"],["/2023/03/14/中间件/Netty/Netty/index.html","6e3be86a8646a84291019ee25ba2b85d"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","5a11e6f8c98b581d2be34426ab1a13e6"],["/2023/03/17/系统设计/分布式系统认证/index.html","cb1346e4f2bc216f5bb74fd199d1bdb1"],["/2023/03/19/Java/JVM/JVM概述/index.html","110b2b175a8633a46b5880aabaa0d5b4"],["/2023/03/23/Java/JVM/类的加载过程/index.html","e31b818719b4136b145355601efc5bc3"],["/2023/03/28/Java/JVM/对象的实例化/index.html","0b8de3333bc9fe1253672d49ec15a94f"],["/2023/04/01/Java/JVM/运行时数据区/index.html","348e026f6940e775f0fecd1bde180731"],["/2023/04/04/Java/JVM/执行引擎/index.html","c96b511470a72dba7adbfe443f477fc3"],["/2023/04/06/Java/JVM/对象引用/index.html","a113718088de879fc182a2e170f24ba5"],["/2023/04/09/Java/JVM/垃圾回收/index.html","926ac86e76e71e95063f2badf44ebf6d"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","e461fde5125a3bd2ddf8aca2e346e083"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","e88acd891b9153009cb17a4db7cbf056"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","323c0d811f4e04149a4efd8d46c11d5d"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","a9248c969fc96674a318b020904d84e9"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","1f6a5983dde249a565cd125aeaee8acc"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","971381a8a6e7a25de9dd611901a4a77f"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","326fad6bd6115e813b2fe6453dc179b5"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","e0a4f67ea45f69ae359461b523eaac70"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","28cc415a7f83484f865f0863fb4b0e25"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","f216388ffffc3909f839498b66a6f690"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","ecfe43417e89beec7d0c44b28fd22a74"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","851b6c9fc25a1ad6b014138b6ee627f1"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","0621ad41b53e918154cf8a456bab9d31"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","8f79be0e61b1f30c444583a20c36d067"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","e42e94fe3dc680cfc54b020d48c2bd92"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","b3b3f7fd26822e519636fae854355211"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","e76449482397d9a07040a9ac3b6a9519"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","85d9adaf96c9ba232658fa911cab25ff"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","64ccb4f301fa1fd77725b8aa95d24f15"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","c775390df18617394575a49e5c73c146"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","5cdf6902fa002b08c7eca61656844683"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","d4e95676c51690f8ee13447ca50b1afb"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","4d78876671c3828e59ad8a0a3481b6c4"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","e8356656dd2f5a178522c0f9b8112c25"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","c3da527637e663202bbcd174bbe2dbcb"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","fb91a9e2b7c4fe8e4cbdf208c160ae9c"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","3bb87606f462cfead407f5818522731a"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","21ce5574228c4163dae8e6d651a72daa"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","c69d9217003c0af131bc85e47439ad41"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","36c277ed8b49fe6f5c67594ccdfa8bab"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","206fdb4db341f78e595b0844066099ed"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","7718f5481015a165c5844b460907c9e7"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","76e119e4e87aaede6ba7f07d66d66ddb"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","413193933e39c0f9300e4013ab254fe9"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","2022e5f8b456d1eb1af0a72bf26616bc"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","8036ce87b99541c2250b7140716d8732"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","0996d3322548c65915d90080824ff931"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","88f1a17292cff6d355b071c93cb695d6"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","a6acba384ad3ec5eb7b87d40ddd4f5c5"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","a79642281385131c7301914789c5ea80"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","09ae0178d8fc5acc9b41cb59fc5265e5"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","fc2538e653925236640389c81ef7fcaa"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","4ae9e4d0e279557aaa8a783b88f802d8"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","58c9c3143bef327b45ee9770ffa82bb7"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","565936d22b60d9ef7df86f64043968fb"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","aa5aff1e9899cd4c7e9a6ff43d2a6916"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","aa4f5f0a48dc40154cb9b1c84303b247"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","1f401ad851693743c083627b701ee45f"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","13a809a6503d1df65e7c74d0b2f4976a"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","a641ea207326687fd7cbede3c8b05796"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","4fa62d4009262f081410a60b4ea6039f"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","7eb39f79f2cf0319cd54e5176cfe9bd3"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","6e8b9f9897cd7326f2331fcdab23bac7"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","30b6837b540be5529ad5edc31319557d"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","457b46441e6c05036082ff961dbb94d8"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","ee66dd4adbc1e424b3323d5cb511c5ca"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","9681868de301df2116ae306173b999b5"],["/2023/09/04/中间件/Redis/Redis事务/index.html","67719dcd7356b5c218779ea9bacee7aa"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","65d0ded22117bb8d9e9883221363adfe"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","c2b832693aaf9aa0fbe7c2e51f0a5dc3"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","91cddb611eedf912f7d13c12d5fca028"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","f7c534b84996f822ab5214aad12ae6ca"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","fa0e7d228d86fd1f8ab5b06a2416feb1"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","a7328fefd4bd4730d64f214a75b9ba2f"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","d77923e5e042897fe99d51d59a6ca647"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","be0c96f5ab6befc3b9c47cb00b2451a4"],["/2023/09/22/Java/NIO/零拷贝/index.html","32ece712acfd642d6371cd5b6f4adc95"],["/2023/09/24/系统设计/JWT认证/index.html","60301a3d4dd44f7633f78ba794151b26"],["/2023/09/26/Java/NIO/Reactor模式/index.html","16cd6c7fa48e22ff09e4e29f12cd9c16"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","535f48efdad02bea595cd7435889219a"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","f90a31a68472c9ef724239778dbed313"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","d6a891bfb3515aef9a556177ec405e1e"],["/2023/10/09/Java/并发编程/共享问题/index.html","49fb082c6696ddb01e7621a5442f5ca5"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","b76d56049d5bdc6fe5a170fd1e08c251"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","e07cd1477fe353886affd0719a959144"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","627da2bdaa98cba8a581ee35fdb98a3d"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","d60bebb420a0033913c91975a660f217"],["/2023/10/22/CAP定理/index.html","698dbaae13589a57bd5bcc40059ed415"],["/404.html","892955fc425c7e288b70e0dae1cb92bd"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","011c9758a7c364a5a572dde04b7deb80"],["/archives/2021/02/index.html","0f3812661098f9e76ee8005e3ad39f7f"],["/archives/2021/03/index.html","a59036795fdc19741e28a44cf7572425"],["/archives/2021/03/page/2/index.html","35d83896dd474d9c76b276faec5ab655"],["/archives/2021/03/page/3/index.html","ef470dfb7ad9fd07ebd3d623aefc5a1b"],["/archives/2021/04/index.html","70671fc5888dac699d3dab38985259cb"],["/archives/2021/04/page/2/index.html","bed8757f386259d89c2423afd9a58896"],["/archives/2021/05/index.html","75a8addb6f655ad2b0048d1b4ec8070a"],["/archives/2021/index.html","468e69d61820420de1e8279b3d01ae5b"],["/archives/2021/page/2/index.html","ca70bd2e815c72449d5b6a959de42da7"],["/archives/2021/page/3/index.html","b014b8bf1ec8d0e1f0e64ff4a195da4a"],["/archives/2021/page/4/index.html","a1e0151c49b4afe5960a1f6d28e25360"],["/archives/2021/page/5/index.html","9d5ab261da2b6e2a273b355bfa1b5831"],["/archives/2021/page/6/index.html","f651459b75cd08f9aa22988cecf38f75"],["/archives/2021/page/7/index.html","b587f5673258c2b3af1763f2143205d8"],["/archives/2022/01/index.html","c56730c2868a8527f730fdf9fce6f287"],["/archives/2022/04/index.html","8ffdc510022c6a7e6de777949d823efc"],["/archives/2022/08/index.html","228acb434d165a1c47d23f1a336ef548"],["/archives/2022/09/index.html","3376342383fc7be2a387e1ebe1c632ea"],["/archives/2022/09/page/2/index.html","f1059370d3ed367e21d00601c89c6a57"],["/archives/2022/10/index.html","4ce1c34cceb7ef7ffa2254e102ba9e90"],["/archives/2022/11/index.html","7dae3c7debaf44659cf012ae4d83b3a8"],["/archives/2022/12/index.html","d24501b341fc3b5715a01898d855064f"],["/archives/2022/index.html","30f9f345f6ca52c3dfdc18047e81e43b"],["/archives/2022/page/2/index.html","c3f95c29879dd6c4f36fffc2d2acbd6c"],["/archives/2022/page/3/index.html","572c7443046abd18c42ad32cdea0eea7"],["/archives/2022/page/4/index.html","61b2c3f702f9312c2aec2450a9c8ebed"],["/archives/2022/page/5/index.html","c21b1bfcef7310ec875943982e0ccfae"],["/archives/2023/01/index.html","dfdf363c22299c46ddc51f06221a11fa"],["/archives/2023/02/index.html","0bc197591d72a3b1d5c568f84503abab"],["/archives/2023/03/index.html","7c80f40532c0004d018e728dea57b266"],["/archives/2023/04/index.html","a5499aa9445bf82f4a9fe554e32153b8"],["/archives/2023/04/page/2/index.html","ae1d63c021e0a821028dc6ae9a0b656b"],["/archives/2023/05/index.html","581f0132e415d60dc9c9dcd6ba49680d"],["/archives/2023/06/index.html","f278ab0ad364ee4f616c85a79e8cc42e"],["/archives/2023/06/page/2/index.html","6da110c55b4474653fc98ac9a9828cfa"],["/archives/2023/07/index.html","608140798ad3360940d19747e1d91c7a"],["/archives/2023/07/page/2/index.html","b71af061585f65ad13fcd1f6fed16254"],["/archives/2023/08/index.html","fb6e7bb6e1d0f1d4989a6bdeddd4d431"],["/archives/2023/08/page/2/index.html","046c5376bcc5b6cf57fc014a65b64c89"],["/archives/2023/09/index.html","c5e1b3187d0cc54a70ef9886de751737"],["/archives/2023/09/page/2/index.html","637e0c480596c2f216130f4dbf4350d4"],["/archives/2023/10/index.html","85b2bbf597e220080917cbf57608a907"],["/archives/2023/index.html","6a7111b776ffacd6c31ee11fd38f7d57"],["/archives/2023/page/10/index.html","a765893b17880e7ba8459bf64441e4b8"],["/archives/2023/page/2/index.html","b7d159f6782292e9237fca7f02c23c80"],["/archives/2023/page/3/index.html","5fb7ed6636d76ee97c9e04593460ec0e"],["/archives/2023/page/4/index.html","ebdfb6f7b8b5fe419c59e7beeb4dfbd9"],["/archives/2023/page/5/index.html","13ca47595b36ed02e078240025d22395"],["/archives/2023/page/6/index.html","980fadf7d9c79b61967c134124d87dd3"],["/archives/2023/page/7/index.html","cee7acbdf7ff1665bc9c3cce72a3163d"],["/archives/2023/page/8/index.html","c71999916fdada63da434348f739f316"],["/archives/2023/page/9/index.html","4422c4fe6c8f2b1cc36256e1086f1d40"],["/archives/index.html","7f415c3e1c5a2c387334871d0b537f22"],["/archives/page/10/index.html","92bc52fbc0a3c7a00390902330c039a9"],["/archives/page/11/index.html","6df18f9a1e5f2424e19d1e30d7e2c5da"],["/archives/page/12/index.html","5d180881d793d605c9f34dfe8bf35b80"],["/archives/page/13/index.html","776afbba40ba6dc2a17bb672cb3d77e3"],["/archives/page/14/index.html","27c9e31a3f876aad9e00b6a7e239a066"],["/archives/page/15/index.html","9815a1619b09e476c4f31311544903b1"],["/archives/page/16/index.html","0bee44a039a285d029fc775de07ebd4c"],["/archives/page/17/index.html","a9c3e461217d60610684a8cbd521b8f3"],["/archives/page/18/index.html","72c4ae51f81c6126cb8fa68009b24c37"],["/archives/page/19/index.html","82277f14e01c03e4365707845626b1e6"],["/archives/page/2/index.html","ad373a464ca8061b6091d0a59a814024"],["/archives/page/20/index.html","8c46ff3701462e6de984459ea97ff787"],["/archives/page/21/index.html","31fb65f80d954c1d603e723146f74480"],["/archives/page/3/index.html","1acaa213cca011259fcbad9976a9201d"],["/archives/page/4/index.html","3e497ad470bd119b107417fef8e64716"],["/archives/page/5/index.html","ff549ac27c8e891c35f02b1adc65e39a"],["/archives/page/6/index.html","358b58894e8a2c417b00d2e719867819"],["/archives/page/7/index.html","13cd799a1034df91898616ae0de99fd7"],["/archives/page/8/index.html","c4dc0abf3106d9970f592aef1a9d81da"],["/archives/page/9/index.html","750b754f1ab86b0e24696addc096db41"],["/categories/Devops/CICD/index.html","6c4d4d2c4ea9fc019bcb741308c58196"],["/categories/Devops/Linux/index.html","4d685079e1d5d780c68a4ee382ecf3dd"],["/categories/Devops/index.html","f2f4cad5935f62f2729176fff28d6d97"],["/categories/Java/JVM/index.html","e9515e47b941d2185a48d73d2e818be5"],["/categories/Java/Java基础/index.html","bcbdaf259b2c960813a9732223822e84"],["/categories/Java/NIO/index.html","ef2ca9b2c8fd2e2b7ef509edfe4cb6cc"],["/categories/Java/NIO/原生NIO/index.html","52b31b0f97555786c2213d92c77aa743"],["/categories/Java/NIO/文件操作工具类/index.html","19f2d08cbf5ade3acef4fc5f661efa51"],["/categories/Java/index.html","7fac3c96c403573d464ccf70bfa24e02"],["/categories/Java/page/2/index.html","997f4eed9d04ad228c659a150e31b59d"],["/categories/Java/并发编程/index.html","054c32a9bfda148ce5ff99b881f7b6a5"],["/categories/Spring全家桶/Spring-Security/index.html","220fe474d130ee819d36263168392ffb"],["/categories/Spring全家桶/Spring/index.html","d47cbe7c43820220cc78b5b67b8208d8"],["/categories/Spring全家桶/SpringBoot/index.html","6a275d20646bbbfe8229dd6ee23d893a"],["/categories/Spring全家桶/SpringCloud/index.html","588cb3545ccae5faebfe47faceae52d3"],["/categories/Spring全家桶/SpringMVC/index.html","7f59ee02517f727e697a305f2848a687"],["/categories/Spring全家桶/index.html","d3cc82d816fb805aa87945651740e655"],["/categories/Spring全家桶/page/2/index.html","5b6f6e535a62bef7a1ffdbc4903b45a1"],["/categories/index.html","d2f7c3618552e091606164aeb96b262e"],["/categories/中间件/ElasticSearch/index.html","756a67018d8f0f94aac41613b427e5f5"],["/categories/中间件/Netty/index.html","7bc5e3a2faa34c8e10503d4c0be6be65"],["/categories/中间件/Redis/index.html","8df052667310cc5d383bc95289816ce1"],["/categories/中间件/Redis/page/2/index.html","52c585a7fb26c6a78b3158ec27f29024"],["/categories/中间件/Redis/page/3/index.html","d7514841baf06cd00fa07e9111f75833"],["/categories/中间件/index.html","f1cbc6f632033d01c739fc97c0c28f0d"],["/categories/中间件/page/2/index.html","0b7e526331278189d06c45e2a6bf4a3b"],["/categories/中间件/page/3/index.html","b19b10105f4b2aa5a1c52e50c7955296"],["/categories/中间件/page/4/index.html","503aac5edaf9aacba1bdf7026ae5132f"],["/categories/中间件/消息队列/RabbitMQ/index.html","acee4129db12400e2dfc0d8cd17ad33f"],["/categories/中间件/消息队列/index.html","6081ee11bda2f9cfc40eef114458fcc1"],["/categories/前端/Mock/index.html","b7d55f064bfca7a75bf3c8b8108d1833"],["/categories/前端/Promise/index.html","73115686e21f088dd049f0f3cd3e9d58"],["/categories/前端/Vue/index.html","d284f1627c5af231867c72f52b8ccb7c"],["/categories/前端/index.html","7ea8f0a0be702f728e44a44b4dae2f12"],["/categories/前端/jQuery/index.html","373d330ce2be89e959c204d1fb4488b6"],["/categories/前端/page/2/index.html","e5f66d4dfbeb902ef99a03e73ed722ae"],["/categories/前端/原生基础/index.html","b6f079ad982626b423f9f660294c1542"],["/categories/前端/异步通信/index.html","d70730d31c2f3b211ead76d5ce6d5d83"],["/categories/工具使用/Git/index.html","4bce04ada6fcf9d782d4ccf311d38fc1"],["/categories/工具使用/index.html","1dd12baf33e3d0eec5eb49ae50d70748"],["/categories/工具使用/markdown/index.html","0178e6c3646fc6b2746bb56c96425c1d"],["/categories/工具的使用/Docker/index.html","c41d65f280944ac458653c620344fa05"],["/categories/工具的使用/Nginx/index.html","506c74e12ef71668092efb5c0700288f"],["/categories/工具的使用/Swagger/index.html","82e1c77e752caeeafcb2df5b536f389d"],["/categories/工具的使用/index.html","4c55b928696f531fef3e84337356a3fc"],["/categories/工具的使用/博客搭建/index.html","089167a1a6e0d2260b5526a3c03f30c5"],["/categories/数据库/MongoDB/index.html","db126a85986563cb958351f8e060829c"],["/categories/数据库/MySQL/index.html","ba2faf3962a59b89225edd0cf2657fdb"],["/categories/数据库/MySQL/page/2/index.html","5ed1838f8cbfe403cb6bde66ae385940"],["/categories/数据库/MySQL/page/3/index.html","128b68ce5856ae3660a2f10beab45124"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","4160fa24bdaf5108fbaf7e4a891e172b"],["/categories/数据库/ORM持久层框架/index.html","df95f8ae208f719de68f7589f9d774c6"],["/categories/数据库/index.html","506bb79e398f54d420bcad654cba7379"],["/categories/数据库/page/2/index.html","f0af98057d85e8e4f7084060f0710021"],["/categories/数据库/page/3/index.html","d02cef408b4732e5e714dba00840e328"],["/categories/系统设计/DDD领域模型/index.html","5da01724553858df191f8cae5686e0e3"],["/categories/系统设计/index.html","0bca5d3c792b70ff6b8d167cd268bc29"],["/categories/系统设计/page/2/index.html","f172e1ef32af866600df505eb8cd40fd"],["/categories/系统设计/分布式权限认证/index.html","9d7cf012d322fe5a2cc7d594f47fdbe2"],["/categories/系统设计/分布式系统/index.html","6e7b8cd72eddddc3dbec52f2348e8f57"],["/categories/系统设计/设计模式/index.html","395f31d1751a5aeff7408cb411772d30"],["/categories/系统设计/设计模式/page/2/index.html","0037d96c80fec3143957c34ac1aa7a6f"],["/categories/计算机基础/index.html","cfdfe034bf360a995645ecf475acf658"],["/categories/计算机基础/page/2/index.html","a40e091ad16c1402e7d14812126cfdee"],["/categories/计算机基础/page/3/index.html","e53d7a2a83cefaf071f24f88e3e0b94d"],["/categories/计算机基础/page/4/index.html","04012dcfbf9cfa148412089d0d2d7155"],["/categories/计算机基础/page/5/index.html","2789cfdb570eb51bd63a9192c975d5c3"],["/categories/计算机基础/page/6/index.html","70b737641f290383eb9a96fb88f1a511"],["/categories/计算机基础/操作系统/index.html","8215ab6a396387f58e5de8466fcac6ed"],["/categories/计算机基础/数据结构与算法/index.html","850337760f7c851e39789a499878fab1"],["/categories/计算机基础/数据结构与算法/page/2/index.html","045fd80ec1f2f62bacc636e1827ab073"],["/categories/计算机基础/数据结构与算法/page/3/index.html","b323ffe9847ffe778f2a56bd835d1bf0"],["/categories/计算机基础/数据结构与算法/page/4/index.html","5f111b5df103811668828be138c6e9ef"],["/categories/计算机基础/数据结构与算法/page/5/index.html","13d49fa948fdfaf115cba4627f170472"],["/categories/计算机基础/计算机网络/index.html","0568f473abb3276c01fca2a8412b75eb"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","515e24ba07370256134c98e4ec7486ef"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","ee3ce3bb7e75e3ca75c02d462b1937a6"],["/messageboard/index.html","946539bbb6a2e7ba6a98f1f9d7d82531"],["/page/10/index.html","6a3046569282563aac1837311c6fe06f"],["/page/11/index.html","022aa699ab750805345f550db648d50f"],["/page/12/index.html","cfe347a2e111e0e2df04e34e4fcef0e4"],["/page/13/index.html","d4161858633064d266aeb701570ffbdc"],["/page/14/index.html","8b462927d143d6e7cc6f20c8d36a0533"],["/page/15/index.html","171369d0e24f541c2c31047361d70910"],["/page/16/index.html","5f45937717ea4e8adcb2e9f0c65748e1"],["/page/17/index.html","138e590ce851511473c282118b58e62e"],["/page/18/index.html","fd81d520ab2f14b464d35d334ee3d4dc"],["/page/19/index.html","afdd2395dcd42835349257e0e4a9b5f7"],["/page/2/index.html","6d87bb7bfb90c18b6fe65be813d7f0b1"],["/page/20/index.html","4d1e66b87f0e18f4497c2e5048e8c020"],["/page/21/index.html","e6f8eff917ab250c813ad29f2d8b4c4b"],["/page/3/index.html","e2a493165ad88d3709d9f58085a07210"],["/page/4/index.html","542d8d3e238720f507e761bb9c35218b"],["/page/5/index.html","8860a5ad96acd91a7b555931a8353868"],["/page/6/index.html","363b3b00b1e95b010eb363786aa252d3"],["/page/7/index.html","62b532bcd84f24b0639fc8790e8a9f76"],["/page/8/index.html","cb76112e41741cd28f1287d530ab9fc1"],["/page/9/index.html","e3f4a13615cb18910f4aa8c09cbf8a6f"],["/sw-register.js","ae11d41fb939894dc372450afe6b8b38"],["/tags/Ajax/index.html","fce20c672b3d319ba5b4359f6651d0de"],["/tags/Axios/index.html","6060f240565ae578ccc12600f4dbccc9"],["/tags/BASE理论/index.html","77c809b5514d1938b6669387f5544e84"],["/tags/CAP定理/index.html","16d7b356514cea6574e17babc431382f"],["/tags/CICD/index.html","e6ab0d63e57ca71ff9f6aa6168e61578"],["/tags/DDD领域模型/index.html","4e1454c2ae501c67bd13c016519072d0"],["/tags/Docker/index.html","ba19417b84a5495ee30368d043f66649"],["/tags/ELK/index.html","9056ec090fb93a770c1716c23ce8841c"],["/tags/ElasticSearch/index.html","dda1434ef571c8eb97072dda7287aaa4"],["/tags/Git/index.html","e24d4bc4fcee916e08d2e0725d9e8c0e"],["/tags/H5/index.html","0d822bf5968717b9e16ad908db1f1057"],["/tags/JVM/index.html","967b2f4ad5f33013dacb03add0830acf"],["/tags/JVM内存模型/index.html","07b50fccfe68780daf7d56435ddf9f1b"],["/tags/JVM执行引擎/index.html","32856b4e2e88270d39fe5b58636be86d"],["/tags/JavaScript/index.html","7350697ae85a907d47f2ef02b9ffd4ca"],["/tags/Java内存模型/index.html","852b3753aa48ad9a9775c2ba0f9b532c"],["/tags/Java进程线程/index.html","2657053486b3506fcc92683d1975a425"],["/tags/Kibana/index.html","123e6468b26213ab5a694aa7316dbf5b"],["/tags/LeetCode/index.html","7ca0dfb65426efc0837c5eb41e337669"],["/tags/LeetCode/page/2/index.html","abdaec434e1620c3bb8123d32f49d705"],["/tags/LeetCode/page/3/index.html","f50bbb1cf3735c1ba95f8f0853a7c0fa"],["/tags/Linux/index.html","48a615349c7c5d2c5d5d3d0868eaab92"],["/tags/Logstash/index.html","96391f07b5c16f489094285c57b8bbd6"],["/tags/Mock/index.html","747a27966a8668c16b668b2b2ef30e6c"],["/tags/MongoDB/index.html","52d7e453c52206216cf90b473943b556"],["/tags/MySQL-事务/index.html","1b1b1cf19632903b44e92cf4022f7e3e"],["/tags/MySQL-数据类型/index.html","3898591ff182eff194727348e2e94ef1"],["/tags/MySQL-日志/index.html","84ff29f8a511725c681674b7591d3161"],["/tags/MySQL-索引/index.html","4c530d31f3031f536c41732ddf1264aa"],["/tags/MySQL-锁/index.html","e77056e514efe827c80f59764cc8bff1"],["/tags/MySQL/index.html","51a0aad43add122b1d0a729a260ac321"],["/tags/MySQL/page/2/index.html","542701072dd795fc3a2eec252773643a"],["/tags/Mybatis/index.html","cdd78ae52af8172d1ea014c2efe80232"],["/tags/MybatisPlus/index.html","c55a254aa362c510978921fc08c73278"],["/tags/NIO/index.html","eca10edf8bc998d94fcd4cd9da7ed415"],["/tags/Netty/index.html","12b0f039305566a899d9af3e5084b23d"],["/tags/Nginx/index.html","bb0ade75efc7cb714e9de7f79a0d0ce2"],["/tags/Promise/index.html","99cb20bb5d697a033d6e1223ca5ffa21"],["/tags/RabbitMQ/index.html","c8449ad3b94d9626edfd1b5cabe70cd0"],["/tags/Redis/index.html","c7e6a44a85d1d482b561b7f66768a4f4"],["/tags/Redis/page/2/index.html","d8ca64751730fd1311f35ad42025076c"],["/tags/Redis/page/3/index.html","2bd4527dc710ea92ae8cc73d262c5d61"],["/tags/SSM/index.html","7c1b5a27ed3bc389b1ea2179a4a1a72f"],["/tags/Spring-Security/index.html","3805e9908953a4fa92ffa6c753488f46"],["/tags/Spring/index.html","1f1fd722cabefd5a06cc351b2a717165"],["/tags/SpringBoot/index.html","ce81f329e0438ebaf3aee8ad3e66b8bb"],["/tags/SpringCloud/index.html","9fd208b489e2a1d325a7a1c102718d20"],["/tags/SpringMVC/index.html","5dc0c1c4bf153c16f92038b510bd0086"],["/tags/Swagger/index.html","ddadee426f9851b2d7b166483e6712af"],["/tags/hexo/index.html","54fd718ccc584daebcf4200fc18b7d38"],["/tags/index.html","49edf04b66c15566371ecc787009e95b"],["/tags/jQuery/index.html","2dce1ac0038a74a79303f2020b0e32e5"],["/tags/java/index.html","196458222bf49855682b4e1b3a55fee3"],["/tags/markdown/index.html","2377c5a7bb42a27a0419807c209a7a55"],["/tags/noSQL/index.html","e7e6cb8c0f9df5a75ebf19be9690fada"],["/tags/typora/index.html","b353786568e4feb3a212e738f14ef54b"],["/tags/vue/index.html","0987bb1d7375983985822e796e137e87"],["/tags/享元模式/index.html","8b7828a0e9bbccad9d14cfea7d785036"],["/tags/代理模式/index.html","4db106e90185f60955e8a7b897ff0fbe"],["/tags/内存管理/index.html","c2876fa89c8d73975608c3df82e999b8"],["/tags/分布式/index.html","1e6d7f2c7f4bfc25ad052a0768be6a99"],["/tags/分布式系统/index.html","16590b8bc3ae01027b80584a73bdf475"],["/tags/前端/index.html","e895de89be23ac6b7fe0d0c451854978"],["/tags/前端/page/2/index.html","8a207726ef75fd878691946ffbd4b49f"],["/tags/博客/index.html","39d39a986bee1db32c88ba5c157c3314"],["/tags/后端/index.html","55c625c0b6dd9b81522229a0343c068b"],["/tags/外观模式/index.html","29465dfb96414b4e13de442bf301ccf4"],["/tags/多线程设计模式/index.html","e650303cbe77d7fa37e46216d600cb73"],["/tags/容器技术/index.html","00807e89f80b8fc20ef0c5478fc121f0"],["/tags/工厂方法/index.html","b625b46df6fe0ad65ae3d04b7334dc1b"],["/tags/微服务/index.html","f5a57474769cde57340229085832fb19"],["/tags/抽象工厂/index.html","1eb61b22c3ba408a5dd838f564fe9ba2"],["/tags/持续集成持续部署/index.html","01d93c84b2998fea2525da8273539239"],["/tags/搜索引擎/index.html","9a5f1f131ffa0bbf193eded4b920aafc"],["/tags/操作系统/index.html","e771c3fbb5c08e94a245a9f724fce8c1"],["/tags/数据库/index.html","747be565bc5abc3bc6927657c36dd558"],["/tags/数据库/page/2/index.html","985a71f6e15c7cb75a15aba9c4c16d6b"],["/tags/数据库/page/3/index.html","037f66501dd51a58a28b409a05919ad4"],["/tags/数据结构与算法/index.html","fac1c96d3c236a46901bc09a9f269a7a"],["/tags/数据结构与算法/page/2/index.html","d9d4090a0035b031ed672d4b3c29dc26"],["/tags/文件操作/index.html","835fdc834ac4d72818aee32b62b232f6"],["/tags/日志/index.html","3d561ee778f9fd4a3478a55a1aa3a00f"],["/tags/服务器/index.html","73baa605a0ebe10752aca23f64b20a7a"],["/tags/权限认证/index.html","2ae40d13abc6f9cb533922391313de03"],["/tags/桥接模式/index.html","3e1a8305ce1db3d1a7179256a4ea7edb"],["/tags/模板方法模式/index.html","d97264bd42b4031d9c7d5bd200c7938f"],["/tags/死锁/index.html","24412a60df6d673dddfaa4a86de0b249"],["/tags/消息队列/index.html","2938fabb35b87cb6bd56548fbf44dd40"],["/tags/版本控制/index.html","5d1f9de637696d2c0c224a167dd73578"],["/tags/策略模式/index.html","b3b5f895ac21ab15c14e3cfcb35effaa"],["/tags/简单工厂/index.html","9c25538b0a169aad7eb05a89cfb936b8"],["/tags/算法/index.html","c91b4796c3fb737d1ee3231f20c374b4"],["/tags/线程活跃性问题/index.html","8f5446aca25057f6f21334b3a7fea27d"],["/tags/组件化/index.html","993b1d475cd921d677bb9fb38b0ff7c5"],["/tags/缓存/index.html","81abf428fd3c71d3c77fff3e9f5106bd"],["/tags/缓存/page/2/index.html","f2c79d512639058c1e446068a260a4f9"],["/tags/缓存/page/3/index.html","bc921639bcb7dfd5a2754363b3b7908d"],["/tags/观察者模式/index.html","52a9cdfe24ee537d9eddb5e73ef676fb"],["/tags/计算机网络/index.html","d8304515900795ba212fc5f06a75f542"],["/tags/设计模式/index.html","06464548d5749c8bb51683f9d2b4047d"],["/tags/设计模式/page/2/index.html","4b9b667dcbd7f09a02d04333568de594"],["/tags/资源共享问题/index.html","68416a383b9d53bd686cff4498d54f6f"],["/tags/进程管理/index.html","339cdffa6c7bbadfcd7f8dcdc8c6ff39"],["/tags/适配器模式/index.html","4ab0067455b992ac12e61dec3b2bdc82"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
