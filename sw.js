/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","1ab0e6654b5b068113b4dbc174cfed3e"],["/2021/02/22/工具的使用/博客的搭建/index.html","48452500f15f1d0dc745296ebe3a1a6c"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","b8611ed391f37fec5ccd8c3d0398a088"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","0211666a107654191c03e559c5bc3d67"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","0e9b7a70bbebf20e6fe0e16e2e4a4f22"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","0f198f6bcf10893658faca309878f702"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","00790ac6277be7501a267351e39c178b"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","d7c253c097d4c5a0fb8741ec3b68c1e1"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","4c84f30e062be43d3e0ddc4e75be00e3"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","76521fa9b34e07dca127fd24e31aaa1a"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","1a436aadc50019518182b569f04bf241"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","f40a7e97a94cdf26bacf059d9ed9f4f8"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","43da68d82911406065b5580f6642f907"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","d58d5f4f33fb4ce9976abcebd153f824"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","8023f96bba810057ed1ae1dca2d2f8a4"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","1538a1a80e36a8aef2c296eef5ec0179"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","49cfe45439698b8469bb0f5e65bf6fc6"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","bbc24e3c905084a6effe3700b915bca3"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","71d7e9da4b2e633d875e024735238634"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","0e8b86a31b929d560c13773326a0beb6"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","6555277dbb75381104d3ae17aac2beab"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","8b09f9c0d4c0921cb29632a84e4ae0fc"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","e38cf73fab1521db10092ee7e9ac13ae"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","556c8f0743b48ebabc4fab4866f07a3f"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","ed2044d657eb50caf4d061309cf5afe6"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","43fb133907b7430bdfea57c8d576a98d"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","b7762a30d333374ff245de5efdd59b59"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","eedd30ad2c81644d7cce225ab24ad476"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","bf14693c746fb3fd18b0c472ca848efd"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","075ebd8f71e1e85b1dfc05b4736b3a1b"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","075078b265a88fc05b371b009a425961"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","048bffe41ca27c02f99cff544089148b"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","88bf146af3f1320a6bae3b2314b5f88f"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","10d5e20cd8f42e10c402dc68085e05ef"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","836c9fdc7c33bcc88189cf8bffab0f48"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","2d47163e2b3b28f108bea6b7ba5bc040"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","0f527a4ba24e1be1be3c35bc2b58c6df"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","735f34ccbf2f07771534660bd7a682ae"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","fb5be1214d680f852c0a580d7fe259a0"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","24f21699450656977dc42e671d497e54"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","f61bc4065603b7fa93c7cc3e16d72e50"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","de12fac16acaa7eb4c61f64e270aa574"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","f6238fcc528a8968868f85109ca24c05"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","61a2f7f3f48cee1d676f976bb51a3ea2"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","577ed1f7decf421295300de966fb914e"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","3bd1e560e03fc5572e11773a9fa582e7"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","7c5d19149208576ac9d1fffbe5f40817"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","1fa9867b4bd0142e40a19ebe053cb961"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","1fbec55a5742e8cebd7044e24cff544b"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","eca4886d451843c56af8da60c704b333"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","cdf96a122b91360640273b82378de66a"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","d4d8a9b1388b021e251fa4c2af4ac9b9"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","c7c701c1d96871937f29b2aaee8e23f3"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","0d3a255a14e6deb0f424836e9a295e4d"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","da04f4aa982bffd1f703ad73c4a416de"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","ac72cdd1fb956501934de1b7e6c94b58"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","49c6882c5967e927b594d76bc1060728"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","e505fbb791e4e11fff8b5ca1a312f9ee"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","bddb953b465566ae49d0443f3383e59d"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","d25bf55f94a580c09f13a35f75325eac"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","1496b920355c81de357be623aa32b685"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","63a2a7ef56311cc21c69d9dd22bda190"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","853f23c7fcfaa16d4818cae1921514d4"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","999c65f855355c6d14090bb2c437e9f0"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","cd8a3d2c17ad882d31798fd2fef89348"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","bc2ebfa29e3a63026c1d61a2508126af"],["/2022/08/17/前端/jQuery/index.html","c20f8b6eeaaa88d9df2af10be3dea670"],["/2022/08/19/前端/JavaScript/index.html","ec39e911d989e8897b5addde0e309920"],["/2022/08/22/前端/Ajax/index.html","979845ce8a7a0a021b287a1cfce9a799"],["/2022/08/23/前端/Promise/index.html","5374ea7a5a192578f62358e92f6e7104"],["/2022/08/24/前端/Axios/index.html","fa3d687b9502172e62244d5a6c1b7bb7"],["/2022/08/25/前端/H5本地存储/index.html","25b69ddec4d2ed0c6a13406ae5be72d4"],["/2022/08/26/前端/mock/index.html","d76463c3ce20efbc3ee8c1801b805e6b"],["/2022/08/31/前端/vue/VueJs/index.html","c4db079d3b274fd416c2a74c25358096"],["/2022/09/01/前端/vue/vue组件化/index.html","9304f522620064b6f73229ef11847ff2"],["/2022/09/04/前端/vue/VueCLI/index.html","a2942d763ea66017aa567e7ee08b226d"],["/2022/09/07/前端/vue/vue实现动画/index.html","33ea1cabaf762898d6136bf237ebf7b9"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","bee07a27f9ff4863e98b82d31435d0c0"],["/2022/09/10/前端/vue/Vue异步请求/index.html","679011e7cb973438042ec0fed51143aa"],["/2022/09/11/前端/vue/vue-Router/index.html","878281b48b672429eecd857b3cf39483"],["/2022/09/13/前端/vue/Vuex/index.html","77e55389da8644ca611cd2c4643b2ef4"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","b39b58d2e30cee22a56c4eb942be7c2d"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","e3f381e186388c4c9b9e6c70cb389392"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","a0988b9a2dcddb5930ac3e2c784d2812"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","0523e935a04edd2f7d9fedf2281f3027"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","195edcd2af5b89d5d5f181536a1d3249"],["/2022/09/28/DevOps/Linux/Linux/index.html","98053b4b6842cb885b4bed0d1cc7137f"],["/2022/10/02/中间件/Redis/redis基础/index.html","4904fb271df213d49baed311b7033e24"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","f7829a1da365ff28613537c0856ecf4d"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","e412a7972bb89361187b4e0682ec08f9"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","17ba34afeb1280562b09fb0085807b4c"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","6e9b7f4c5ac3dd651056f8eca38026b8"],["/2022/10/17/中间件/Redis/Redis集群/index.html","ba89083cda128fa1b7ffc3af5b050a68"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","5976850966dcac86e7e8886d6aea2a48"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","5141a50d9be859032c80b603646270fc"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","4899c1d0af338b90d1bf38f2572baf92"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","27c9dc3ff56759affb1125442fe28147"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","efc176a430a9788fa081f1f6256d99fc"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","02edf39c3c42c0dcebc9283134aa046c"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","28317a14d4a93754e819e4c238d68505"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","cc750832e3e9729f19dff6e9b49a614b"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","1e33155a8dd1f084235ec083306b1b70"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","bd98efa7e2249f0819ef13ab573f7f41"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","70440f37fbf02b0d0ac88a7adbb3258c"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","b3d53a6636e90dc495d8c8de0c2adf39"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","745f6dc2b50ddb40077c0babb5f503ba"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","31bb5ad60e96a74ef5c73b78e7db2c38"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","73753c369f187e95f3b6de783a2402e9"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","dc13e65097774822367f963a5f19cfa6"],["/2023/03/10/DevOps/CICD/CICD/index.html","7864a69c7dcc02002cec872bbc5e5286"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","d478d3024f0eb53a6d24bbaf0b82afec"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","9b0ecae7cbaae489b20429e364955bf7"],["/2023/03/13/Java/NIO/NIO/index.html","ddcb2a8685e8117436815342d2373155"],["/2023/03/14/中间件/Netty/Netty/index.html","03726f42358ad53063cde6f76a54b685"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","fb21e9cc071611d9e7f64f4202e7944e"],["/2023/03/17/系统设计/分布式系统认证/index.html","7a7fe64175ca1ce2d5244130d8547479"],["/2023/03/19/Java/JVM/JVM概述/index.html","9c8e8e1090678bfdc9e815ac0e4cbaa4"],["/2023/03/23/Java/JVM/类的加载过程/index.html","eb24af5b6c2e54fc56f5f1685c4bd9d6"],["/2023/03/28/Java/JVM/对象的实例化/index.html","4423a9625a545824b42b936b1cec2cd2"],["/2023/04/01/Java/JVM/运行时数据区/index.html","257b2c99abf88801a037663bdb867e1d"],["/2023/04/04/Java/JVM/执行引擎/index.html","5dc7dd72aa471cb2fb038283a1056e82"],["/2023/04/06/Java/JVM/对象引用/index.html","025881d100531f9dc2a27a52828c6df7"],["/2023/04/09/Java/JVM/垃圾回收/index.html","69dab7ef4ddd3b7c86c7055ec42e14b2"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","3b89d29ad4774d36deb83fbfe16f5473"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","fae68cbf3498eb90a222d5c7fff6fb0c"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","76f78b97eccb1239c45ec97c3e06b082"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","513bf604e45192e58e24801c8467d835"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","2d329149b2da9636cf41eb061b15a730"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","cb3873b5207d985f9f72698b391b1faf"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","bd8368497d5b53bb122b148d55856764"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","b799ba664bc2d656a4eecbd215fe606b"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","dd7afac339b3d99b3424a655fe4c7c57"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","52f72dcef722940fb96f12e46b8419b0"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","9d61c3404635598ce4db44cfd892fe29"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","43671f7d3a2284efccabb9ec269e2d91"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","9ae2cd6ba41364fb7feee9e4260d1530"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","eb4935d0a64346c215b34880677d173d"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","c53ec5a74ac2171f71fb3b350874cbaa"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","64344830b0b4c693610e793e95287103"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","13dca4fe9528214e7961c2ce8151e258"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","c9c0a070a704287496d1b02740e8c418"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","22d2dab48bb725bdfd7bfb554b1f4a00"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","938fc210a5488a3c62fbfa170880dc28"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","8893145d2a17e910fa093aa39c89e259"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","2e65e007f27cdc3eb6d76d4f72c2c587"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","7b5d00eaa44b24d44b9da69d1c8be552"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","a22a7179525651430764c5e05a2b7f0d"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","5e610197208991358576b3e4729a835d"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","44510da192c0e32e77487d5194ca4ee0"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","4c0f091537a168e4c38c2a0c354bb9c9"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","7ecae48c168d8e21aafe1389dd250d0e"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","fdb90fd7505478538e9ba6da6e066306"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","f984e324803040b9849de7d075085277"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","eae254742f6d57483ecf8d088113a04a"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","0bf32d91c33a4517a50ee16f10efc039"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","b8fd04c55a65f8882730c7bb69bdfc60"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","aa0867ffc6e33007fcde5a4541e6ec01"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","c336e37d3934e48940d1e556030768e9"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","1816ce2ed870ad05a67f13db3ceddc6f"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","3b765e9b541855a9cdd79390f9cdd2ae"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","90b9d5a1a6814ea824c98d9c00a55fc5"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","ccf8b8ccfc57f851f00d76ac09c80227"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","36713429a5fa3eb981e48cc07674dc82"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","319996b10b43c1c43983ff21f6de9d50"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","eb84cad651b8724400687bd33f200542"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","bbf57f3e4a7a83ff811df6129bb11ba1"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","58d79b6e2022b46d90aebb7a5b41cdcd"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","132af486fc8933cb5971e33025096179"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","90de5f145991869fcb513c9f8475deaf"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","a9462bdf122ebc84562abf3877d83e07"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","3b93be243faa9e0eb6f225566d73f673"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","bff5a82b9e457d8a73110b3e15b69b83"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","1080e25e036110450424618524ec7468"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","36535ed58c7cdfdbce0f62894d250e6f"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","8a4bc75e449541c04c29f9ef6dbbcbb7"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","00469a525005dbf3fc773a29ba5b46b1"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","ec96181378b5feb2a59e70b8ebe053bf"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","3f701d55eebc8eddc5faceaded587d9c"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","a66ddab8af8db136543dc10a989d8da5"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","6c7eb0f43035ba77b0cf18079f094e2e"],["/2023/09/04/中间件/Redis/Redis事务/index.html","09c9ea88674afd4b685b88ffde84a224"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","86c6ca15b46f4687b2c1fb05890d8a8b"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","14efc73438e021a15e146bb7e54f176b"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","c93a56c8abfce739f0ffae0cc320237f"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","4742460811de30ef54331b601d6e03dc"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","b630c84c0506b9174755f07d7f3974bd"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","57e8acfbe6860eec029a66ae427ce1b6"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","d1573c10e98049e5b14d66a56afb353b"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","f22cd4b97779731ab233d985b96d4df6"],["/2023/09/22/Java/NIO/零拷贝/index.html","ddb239028d3206ddc892766ec1d0ebb6"],["/2023/09/24/系统设计/JWT认证/index.html","bcccce20343c5526864370f4d2ed07f3"],["/2023/09/26/Java/NIO/Reactor模式/index.html","36ee9cba4f76a2092bf16eb4cc25bac0"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","e16f5e056d797de9adadb66bf3d15301"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","87149ca2f533d56457dbc0ff893ef8b3"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","50e369ae512db7bdf629c825f3de142d"],["/2023/10/09/Java/并发编程/共享问题/index.html","0e5d1da110df502a82189df701d6f586"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","23aa9c028c2f4846b5d145bc6ef4700e"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","d3289e72890fb76602fe0521f6c87bfb"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","6806fc7fca107011ce5163fd3091d3d4"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","2c53309a41d881f487bb53e4d66fdd77"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","1c8d1daa788a074e53f41cb33568a591"],["/2023/10/23/MySQL数据异构同步方案/index.html","3b731f5d5017dd57d45edba6748b5f30"],["/2023/10/29/动态通知方案/index.html","b2808405a819e0e4f0e684e8b03b535b"],["/2023/11/01/多级缓存架构/index.html","199bc6802dec2665a1a49b3a57a2d894"],["/2023/11/04/分布式一致性算法/index.html","90eaad32e0d112a9f23f9124f6e766ea"],["/2023/11/08/接口幂等性/index.html","b2f2fcc1ce0437adfdbb0494cec62f90"],["/2023/11/12/数据迁移/index.html","3e246db242c14e6790062b05ba4cf25d"],["/2023/11/16/经典限流算法/index.html","228747487c01823da9650a10d1c847b5"],["/2023/11/20/高并发系统通用设计方法/index.html","5e02edc97f568763023b7dd73b717be2"],["/2023/11/23/架构分层/index.html","012949a1d293ebe8df9e280ccebc24a6"],["/2023/11/27/高并发系统设计目标/index.html","d03699e3d4b30496e58a43257b9d0126"],["/2023/12/01/数据迁移细节/index.html","513ff6c51e047e78a1dfd29e6239c827"],["/404.html","d047ada756c819fb9bfa591101bad483"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","4e75cd5ec6262bdb3f68d59471304c7e"],["/archives/2021/02/index.html","c4dbc0cba16f2623771809c754e60c7e"],["/archives/2021/03/index.html","c521ee3d872e168e874d5a8f731325b8"],["/archives/2021/03/page/2/index.html","839d5d91b38d9caf32f23559fe894f50"],["/archives/2021/03/page/3/index.html","006d5ed44bcfd9f72d097895147ea396"],["/archives/2021/04/index.html","f5240b3aed0096d788034851ccf67932"],["/archives/2021/04/page/2/index.html","92df07c74b8f234db9ee81517a4e5e0c"],["/archives/2021/05/index.html","c723b4da37d40c5ffd04f1cb9dde21f7"],["/archives/2021/index.html","3791e46064f2a7ebc4767e071dd6f8a2"],["/archives/2021/page/2/index.html","fbcafb39e51e73cf54d458d094ab584d"],["/archives/2021/page/3/index.html","98554dbbe6aa3afb1d091e4e094da12e"],["/archives/2021/page/4/index.html","f4dbadb3f517becc19ce1c0dd8565289"],["/archives/2021/page/5/index.html","356b74118a5d12bd760e5c6789f1c9f8"],["/archives/2021/page/6/index.html","5408f848964f1ce6f8da110a00b51aef"],["/archives/2021/page/7/index.html","94e36c938acf5db0358858bc50fb0425"],["/archives/2022/01/index.html","435468f776c61d0a15ecb0fa062d45f5"],["/archives/2022/04/index.html","4aabf0529ba3ea3bba349558e9773f3c"],["/archives/2022/08/index.html","b8d64aaca6899bc3dd87432c969a8e0f"],["/archives/2022/09/index.html","4475376400c3f8f551924c7abf850b15"],["/archives/2022/09/page/2/index.html","10453333569f2a87f6e14374b3f34185"],["/archives/2022/10/index.html","e2d44e357c3296d4ea96a7e2eab20bea"],["/archives/2022/11/index.html","0e8a51cddd3db6616e1bc69d19a71a51"],["/archives/2022/12/index.html","762e8cde52e3adf8106c8c8e258c8ca1"],["/archives/2022/index.html","c359873be49b279cffdce05149b26c5b"],["/archives/2022/page/2/index.html","4c7e4e2fdb46f9a5506d07c089b5000d"],["/archives/2022/page/3/index.html","025c0d2b6a3dc77c99a3667d3b011832"],["/archives/2022/page/4/index.html","f0db77b344a98f5ddbe0a91048ef86eb"],["/archives/2022/page/5/index.html","4cc38e807f07a0765ca0e7bb370b4150"],["/archives/2023/01/index.html","dc8ff656afea83898cb02b1641c97d1e"],["/archives/2023/02/index.html","705a2146538257df13ab361a40a00b75"],["/archives/2023/03/index.html","26b56da705a16cd547b44a4042323188"],["/archives/2023/04/index.html","2cf365826b76addcf4289d746dcb6477"],["/archives/2023/04/page/2/index.html","87b93dab9f7c9dc3e2970433d872ed78"],["/archives/2023/05/index.html","54420c1a32eebe0b3a15cb65a8de30ad"],["/archives/2023/06/index.html","122d0b761d246e9e47c2fbd55dcdbf2b"],["/archives/2023/06/page/2/index.html","b5283808a1b8431a9544879e45a2402f"],["/archives/2023/07/index.html","6559da47068d313167dfe647572274fa"],["/archives/2023/07/page/2/index.html","e37a4d47d002e2f98e6ff1f33f442f31"],["/archives/2023/08/index.html","350be852165e769fc9f236389fbbe417"],["/archives/2023/08/page/2/index.html","92b3ca20fd573202f1e5fb6384ceb433"],["/archives/2023/09/index.html","d1733d9aa4cc20977d353904b6194cb5"],["/archives/2023/09/page/2/index.html","019db82a34517bd1491711a69a7c0595"],["/archives/2023/10/index.html","c6e8645bcdca338a8121e77b0d9f3191"],["/archives/2023/11/index.html","26f4a07ce3ce83c892f8a6c9ed5d8077"],["/archives/2023/12/index.html","2f3619a38c9c8c6ec9dd09508bd12ee7"],["/archives/2023/index.html","ada53d9bd367c6d4f9eea3b706237530"],["/archives/2023/page/10/index.html","a0483b1c9287c7c78421f5ad156bf0ca"],["/archives/2023/page/11/index.html","b114625bb1e283d75d268b725b4b96db"],["/archives/2023/page/2/index.html","87f61121e14805cee78b82b6735ef4db"],["/archives/2023/page/3/index.html","63270a3788aff092c3faca3dd1816462"],["/archives/2023/page/4/index.html","b0e7fb8937bf7649f75e7febd48b3507"],["/archives/2023/page/5/index.html","b2f2813f319cb845acfee743539e468d"],["/archives/2023/page/6/index.html","953bc876a2c4d828a283fdbae76c11d3"],["/archives/2023/page/7/index.html","94acf4dfe48025654ff000a7c3c318ae"],["/archives/2023/page/8/index.html","369ad8f34ecddda45ef9a6c7f54f3c00"],["/archives/2023/page/9/index.html","a9d39324da9416186d451755b546d0a2"],["/archives/index.html","3b1e0a304ecfa0c9fcfce8a2c25069a5"],["/archives/page/10/index.html","cc0e36a772cd5efce61f533eea54f0d4"],["/archives/page/11/index.html","ca0dcc595e508962dc7229570597c6aa"],["/archives/page/12/index.html","b4aadd94a68d212572973faf448b235e"],["/archives/page/13/index.html","d4dd8dccd8dae373509207944061d374"],["/archives/page/14/index.html","ec7608a9e9893a31f7069cc16e01563d"],["/archives/page/15/index.html","a9ca3bb768a20d6102a8534643dabc8d"],["/archives/page/16/index.html","dfc2acc9fbfcb57d511951bacd4ed013"],["/archives/page/17/index.html","1f960009840e63668b5ef4f99444c029"],["/archives/page/18/index.html","c1b21f1f5e518cf639adc7aa1d8b00a6"],["/archives/page/19/index.html","d21a9ace4300c64c8921ddf08e98e469"],["/archives/page/2/index.html","c5dee571504e7393670ed63cf215480c"],["/archives/page/20/index.html","37be5633f12b0554e67f91b6f3e0b1a3"],["/archives/page/21/index.html","6dbbb6bd69d040d74f26dec14f9f269e"],["/archives/page/22/index.html","6b85ea457de353c1822f501ef372eaa4"],["/archives/page/3/index.html","81071251557903e03040128694d1d879"],["/archives/page/4/index.html","b7ac041782ab5e4ec72438a06aba1506"],["/archives/page/5/index.html","ab68a04dadfe9d9871a6a455e0010f37"],["/archives/page/6/index.html","ececcfff85e064ff9b5207c8545efd27"],["/archives/page/7/index.html","addf6446ea775236e562c4979613a841"],["/archives/page/8/index.html","0b50792fc832bd53c4ae2373d2892595"],["/archives/page/9/index.html","fa44a0e20f07aaff4067568c173206cd"],["/categories/Devops/CICD/index.html","5feadf4e918b5ec65bc7821351c0ceac"],["/categories/Devops/Linux/index.html","1ee4ff7162eee2a1c6124cd8144802d2"],["/categories/Devops/index.html","f5cfe5accd152179a33e45d1b1c048c9"],["/categories/Java/JVM/index.html","4cad182b33a1809f43b07c9d805119d7"],["/categories/Java/Java基础/index.html","346de546a86c37f83748ea9b029d332c"],["/categories/Java/NIO/index.html","dbb5434b96e22ba63ef8158b36648e9b"],["/categories/Java/NIO/原生NIO/index.html","22814960e02db96fcc8936033a82e6a5"],["/categories/Java/NIO/文件操作工具类/index.html","8804944c178c05dff8d1a30a17af092b"],["/categories/Java/index.html","90c5fb96f631aa531a97b75704410b91"],["/categories/Java/page/2/index.html","608f2a1903253e0489ee1b584857156e"],["/categories/Java/并发编程/index.html","8823865c0ddb2a8afaffc8df94d8ba89"],["/categories/Spring全家桶/Spring-Security/index.html","e440df4a5e1d5ef2141d58b1daaa5f5b"],["/categories/Spring全家桶/Spring/index.html","f2c935b88d8739542ed8d72f8a18ad12"],["/categories/Spring全家桶/SpringBoot/index.html","770f79b143ef48631375514f9a969f28"],["/categories/Spring全家桶/SpringCloud/index.html","3b2757c13b34e19b61f9d9fc0991dc6c"],["/categories/Spring全家桶/SpringMVC/index.html","ecf9888815266c7ccbfdd6ce51baee23"],["/categories/Spring全家桶/index.html","4561652b706fab0ce02e2540bd09225d"],["/categories/Spring全家桶/page/2/index.html","71d87a5e54c5a5c2db6ed875f56ed71a"],["/categories/index.html","d118e7bb3a4498b51faec779fb0209d5"],["/categories/中间件/ElasticSearch/index.html","fcabdba569ab4f0440100fc0c3f75568"],["/categories/中间件/Netty/index.html","04c0af437b6657ae344fe7b41f449202"],["/categories/中间件/Redis/index.html","de34ef7cb33ee783f3776d4ed8902ec2"],["/categories/中间件/Redis/page/2/index.html","2c42cca9439de916f7adfad4d0d09f99"],["/categories/中间件/Redis/page/3/index.html","aea4d42d5bb9db1588b34bf908573191"],["/categories/中间件/index.html","e449bf34e99ed0be73b473f7aaed9161"],["/categories/中间件/page/2/index.html","57e50280fba5d8f6e07853ba99e60051"],["/categories/中间件/page/3/index.html","8fc8f9ef730e7841f8b8232564fdf1e7"],["/categories/中间件/page/4/index.html","93fd09396880894b655d54c8244157c1"],["/categories/中间件/消息队列/RabbitMQ/index.html","a1bc4f58bc824c60854bf4f39b9c34c9"],["/categories/中间件/消息队列/index.html","1ae0ee0ea34eab4e4dbd73ae05557d02"],["/categories/前端/Mock/index.html","35a191ff0e8579c3b9a24f0f6ee3640f"],["/categories/前端/Promise/index.html","cd9b1d8ce36715d366c03d1e78bdd4e5"],["/categories/前端/Vue/index.html","6c0e3ed8b8d04594a727104aa426146c"],["/categories/前端/index.html","3c85bdccff039cb7a320279f2f01f4a4"],["/categories/前端/jQuery/index.html","189352a2389eb9fb89c657bfaa601a8d"],["/categories/前端/page/2/index.html","52e3c17530189ae1990cddf21b6e7c94"],["/categories/前端/原生基础/index.html","2cc88c65e3a33b5887442e2cf9f73bdd"],["/categories/前端/异步通信/index.html","7f254579bb05667581f01ca24baab168"],["/categories/工具使用/Git/index.html","14cd072f63e7205260be908a9c5155cd"],["/categories/工具使用/index.html","0e417b4f7469a945205a3656bc3298a6"],["/categories/工具使用/markdown/index.html","e4d5cb956921d84149507a0406ac395b"],["/categories/工具的使用/Docker/index.html","a2c1a8c2d13559552629c3a850a76ab5"],["/categories/工具的使用/Nginx/index.html","4669c023333c013a7419ea7210ca28d2"],["/categories/工具的使用/Swagger/index.html","7c31210bbfeaa5825c68f3e227185bd1"],["/categories/工具的使用/index.html","19b09ddb8e6cc8aeea5a63c2b493050e"],["/categories/工具的使用/博客搭建/index.html","d2cc204d1336b681598111c39b9c231c"],["/categories/数据库/MongoDB/index.html","9078237d16e6898141ed9cf4f3d182a1"],["/categories/数据库/MySQL/index.html","8056aa7443e1bc88e11da1f9c0970811"],["/categories/数据库/MySQL/page/2/index.html","7e3df6fc4e6af9d343665df5ef6b901f"],["/categories/数据库/MySQL/page/3/index.html","44ea1dbe15cb8e44a2848ba5681f7a10"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","c0c159cc968a5b9b2e5abed3abe086bc"],["/categories/数据库/ORM持久层框架/index.html","e9c0e7be9d34c3cd6546be8931f973a9"],["/categories/数据库/index.html","9a9716a8aac20614f84cfd2e9f34d699"],["/categories/数据库/page/2/index.html","0a17c3f8131e69223a747bacf7571617"],["/categories/数据库/page/3/index.html","c127242cbfb0da0f587a5a38be123ed6"],["/categories/系统设计/DDD领域模型/index.html","252c1f8a5970e1f4b03ff0f250684779"],["/categories/系统设计/index.html","16e0c9f1ca35f59d501ca106db912054"],["/categories/系统设计/page/2/index.html","5d42957e35ca805612fa9a0a546b7422"],["/categories/系统设计/page/3/index.html","7dd84c8b5ed5c79f017e7d25dd41d6b4"],["/categories/系统设计/page/4/index.html","480e1d8a8f833693510fe5e3c0dec6f8"],["/categories/系统设计/分布式权限认证/index.html","022efa4dee2baa6ac846e643dc14eb9f"],["/categories/系统设计/分布式系统/index.html","ecffb254b67af98b0155bd58106597ee"],["/categories/系统设计/分布式系统/page/2/index.html","4923d02e27779dd8d59a0893085e348e"],["/categories/系统设计/设计模式/index.html","2959d9e3284d7685ae53dabc13389ea5"],["/categories/系统设计/设计模式/page/2/index.html","90aac01ccae5687fe9d1ce8edf6e9f0a"],["/categories/计算机基础/index.html","35f8262eafd812a46c4af8206b4286c8"],["/categories/计算机基础/page/2/index.html","ac620bd074a73c1a8c0660d6785b1339"],["/categories/计算机基础/page/3/index.html","d74f29c6bc3dcd0424c1fc19a89c8fef"],["/categories/计算机基础/page/4/index.html","3b93193d121e1e4ea47656c847bbf3b8"],["/categories/计算机基础/page/5/index.html","fd1bd451861f1735907ffa9fbe5024dc"],["/categories/计算机基础/page/6/index.html","9579cfa780ac4214027b6545e77625e0"],["/categories/计算机基础/操作系统/index.html","bc4ea64890c8fdbc3504c5bd1674b480"],["/categories/计算机基础/数据结构与算法/index.html","2ec302820c455a61c476624c23a15769"],["/categories/计算机基础/数据结构与算法/page/2/index.html","92148d446b6ff4fe5c7115282507bf2f"],["/categories/计算机基础/数据结构与算法/page/3/index.html","306f7881b8ce2958b58e1c7153f90fd3"],["/categories/计算机基础/数据结构与算法/page/4/index.html","a46cf4b51a9642003443c1339a3f8629"],["/categories/计算机基础/数据结构与算法/page/5/index.html","686242d4d3a4044d41956266b11f1b19"],["/categories/计算机基础/计算机网络/index.html","6d07ff699fe85ba20c93994cd9fbbceb"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","e0945b37b0b8e439f8c059bd7b56e3be"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","9136d0ed04f7d9d18c5fd456b9241da6"],["/messageboard/index.html","5dc8f8739825c2271188a94e8940ab83"],["/page/10/index.html","414e522a34ab567069df7470489780d5"],["/page/11/index.html","3f02b996f9f9e838fa135a3026586b16"],["/page/12/index.html","f69c7795892702328221bf282492bba7"],["/page/13/index.html","37584f4fd0e5000665bce6ea758d1873"],["/page/14/index.html","58838eaab5ed3ed26ca3054c0b8b9faf"],["/page/15/index.html","9b3e0e6914a7e6247b63a086e9aa632d"],["/page/16/index.html","908b564eda9680cb30da63a922fb5339"],["/page/17/index.html","91d67b66514681817fcd6268f3cd420b"],["/page/18/index.html","3f6d7beb1091f3209c6c6a93dada2c7e"],["/page/19/index.html","7720864464ce68286a553d6208837dbd"],["/page/2/index.html","c0277b01dadccb173c4a4dea66969a59"],["/page/20/index.html","99792c9ef85d8527437541a37d8d8df1"],["/page/21/index.html","5e235cfdd3a3886b9bdd7e5bd886eb5e"],["/page/22/index.html","4029db25bc820516b3354af4e9d0cd51"],["/page/3/index.html","00417d3172c53f52c8f0881e7f75e830"],["/page/4/index.html","d7614d654a006420b5cc41919899d270"],["/page/5/index.html","2e47607692eee5e53f287379489862c5"],["/page/6/index.html","1eddafa15c042bb567d9ef96347402bb"],["/page/7/index.html","166a2ff7d2ec5445c10eb13c5b1f3767"],["/page/8/index.html","bf24a3b88e24abd6913c95ff6ea6d3aa"],["/page/9/index.html","4c529a31fb9f3ff3caff1926bb2a6564"],["/sw-register.js","78346a9e0cf62c13c2aad8c05a9e9c71"],["/tags/Ajax/index.html","34364447ec95a6c5bfde0a16cd13bb59"],["/tags/Axios/index.html","bf90a875b8a5849270bb44f1b3b2cdf6"],["/tags/BASE理论/index.html","b4b068a93c9ac05c1bac3de115bf3aab"],["/tags/CAP定理/index.html","9c96677aaa412e048030cf1c6a9ae9d3"],["/tags/CICD/index.html","5d68811d1dcd1151cc9cfa09aae90145"],["/tags/DDD领域模型/index.html","278aa0256492da0972aa0586ebc0c84a"],["/tags/Docker/index.html","5718eac0bdcbc336a3e4639cb5b79fd1"],["/tags/ELK/index.html","23db93da46c4911090c373d81d0f71bf"],["/tags/ElasticSearch/index.html","5fba5969f92522de0f40286d944cd3cc"],["/tags/Git/index.html","bd93c9ef06ecdcb6a39a1a99826cfa07"],["/tags/H5/index.html","7f2464c5a044d98ce80872801669803b"],["/tags/JVM/index.html","6bf587f87affa1a6d6446c5ff9893a29"],["/tags/JVM内存模型/index.html","b9f80a55605df5895b2e3aea6a9ed3f7"],["/tags/JVM执行引擎/index.html","c948a6f8dab0fe6392186a904e7592f9"],["/tags/JavaScript/index.html","85bd9a7644221ac1c2d5d9a3adab7907"],["/tags/Java内存模型/index.html","49a59def3dcdab6344d6c0d5c62dc89b"],["/tags/Java进程线程/index.html","c905f5ba0d29ce429a403695ed34e8a6"],["/tags/Kibana/index.html","8fb832f327ff418c446235f4270dec9e"],["/tags/LeetCode/index.html","efd082383dc5067a9708cb524c276b5f"],["/tags/LeetCode/page/2/index.html","793c917c88ff9f7c2255d539d920ff93"],["/tags/LeetCode/page/3/index.html","f5afbf31285f1fe33b294325cd784a18"],["/tags/Linux/index.html","0ac8871b5c52480882051222d759e996"],["/tags/Logstash/index.html","227ea0d63e64096f19d7ac5abe2e491c"],["/tags/Mock/index.html","c3e3629c9191be586b8cfad907dae615"],["/tags/MongoDB/index.html","32dc7c071944eff283155a1ec406a0ad"],["/tags/MySQL-事务/index.html","7463ab97016a1ccb30f6df821c2c8736"],["/tags/MySQL-数据类型/index.html","08b471452276f1e51973d6351cf8c16f"],["/tags/MySQL-日志/index.html","9ee5b26b1f32a6604f6d06e3f173b35b"],["/tags/MySQL-索引/index.html","4a165efcdf2991773ed290573ef241b0"],["/tags/MySQL-锁/index.html","dd170bac9309d65413001ec4ddea2b5f"],["/tags/MySQL/index.html","a14e687a074d5cbdd7e13d0ca3b16f10"],["/tags/MySQL/page/2/index.html","622465e529d19cec2c1bb0f9ebf45513"],["/tags/Mybatis/index.html","aacc19dd60ea9abe4122108fdf7cda3f"],["/tags/MybatisPlus/index.html","0d99772432c8e33b019050ef0b6ac00a"],["/tags/NIO/index.html","2fe13e60370928bc014e6ee7027ae8bf"],["/tags/Netty/index.html","f015b99bf0d61052835dcf87dbcbba59"],["/tags/Nginx/index.html","2506941f86f6e263f2378886d5835541"],["/tags/Promise/index.html","84e09ec597091ebe634e42ec32d1ae19"],["/tags/RabbitMQ/index.html","a9df547d14e86a587855ac2de7772e51"],["/tags/Redis/index.html","6fef33ceb786c928c51fe7d0ff2b31e6"],["/tags/Redis/page/2/index.html","6bd0dc1817d57de306a5ed1552d163fe"],["/tags/Redis/page/3/index.html","e4521e733f0b2548b09f4646b49f3db0"],["/tags/SSM/index.html","7f8bfc041c26a9e82ff882cc53559490"],["/tags/Spring-Security/index.html","90308634bab50212878121a6f83e2dea"],["/tags/Spring/index.html","7a5a60a788d5e9f6e4ee823407128a57"],["/tags/SpringBoot/index.html","71bd5765fcff4c2c38475f6e0c20e39e"],["/tags/SpringCloud/index.html","b922087b1524c96e7001e87f761b3fc1"],["/tags/SpringMVC/index.html","cb46e5b43f0e4a1bee605222681bad9e"],["/tags/Swagger/index.html","1959cfdeaee4f460ed92e1b0f6b4d490"],["/tags/hexo/index.html","7b4214c82b5fadcd8a3f2622ab86bd08"],["/tags/index.html","8c06adafce54a4a511b8347e025e436b"],["/tags/jQuery/index.html","1777940c320639de2454b4edf986fd93"],["/tags/java/index.html","2d476506d491940e0f6405d020463e2a"],["/tags/markdown/index.html","381269bcb2513f9f0461a46892026a10"],["/tags/noSQL/index.html","0daaa7d28594b8fa21c90b09c824e2c1"],["/tags/typora/index.html","b3c00bfda98b58423c6128cefa04acc5"],["/tags/vue/index.html","bec97ed647e3c61090d132c4dc5c33c0"],["/tags/享元模式/index.html","9ea1c7ab765a7ed33be29b253184a660"],["/tags/代理模式/index.html","4e43f601daae9ac61c95b02244f2fe29"],["/tags/内存管理/index.html","61790e09b55177fa320e24927c33b34f"],["/tags/分布式/index.html","38384c7518945c3576ff3458cc411700"],["/tags/分布式一致性算法/index.html","39aad7896366241693c9735473e944e1"],["/tags/分布式系统/index.html","ca0c606612dce50818a279ee436b5613"],["/tags/分布式系统/page/2/index.html","051894cc199cc954456f522cbf6aec52"],["/tags/前端/index.html","7365c1224a77fec70b72d09400e21c4f"],["/tags/前端/page/2/index.html","37ced9ec51ad0c843db2977bbfc489b1"],["/tags/动态通知/index.html","4d7d4f8f27c9032c256dbcf9ba903482"],["/tags/博客/index.html","52fde0faec2d089eaa5642eff0fd3963"],["/tags/后端/index.html","509fc4649615dc3e0900992150325383"],["/tags/外观模式/index.html","e630dac62127637d391a82ab6d12d67a"],["/tags/多级缓存架构/index.html","3bd6cd29a9592fdd74cc7ce7d9f5ba8e"],["/tags/多线程设计模式/index.html","e5064ae54379a87b8cc7e2e0277f8bad"],["/tags/容器技术/index.html","2fb74798fbdb01b3176244cb4c2c4157"],["/tags/工厂方法/index.html","53570e58f4b5846e4bbc27bd1112a785"],["/tags/异构同步/index.html","44aa44e9920cf8ab625b0c35dbad16ac"],["/tags/微服务/index.html","25802a90c635719d691ac60fed965605"],["/tags/抽象工厂/index.html","bb7eb2c8881c4a0d6116faa0f4411c09"],["/tags/持续集成持续部署/index.html","abdbc6d0407f38e614bdafd3c9f7ad4e"],["/tags/接口幂等性/index.html","a3aa07b88f75c4a53ea7946b6806edfa"],["/tags/搜索引擎/index.html","d73157962a0a3bc742d30bb0190e1595"],["/tags/操作系统/index.html","d64d5956d1e7b6a5d6528dca933e3b67"],["/tags/数据库/index.html","18734b0ac043af15894977bcfe2e3b74"],["/tags/数据库/page/2/index.html","ff06347a1ca37057ed53c85ef2c10632"],["/tags/数据库/page/3/index.html","9d1c915bc4d2165bb92af275d723d58b"],["/tags/数据结构与算法/index.html","e7d3092a90b96a0450b8a573b1746032"],["/tags/数据结构与算法/page/2/index.html","3f08ea878bfe8ade7896471f67b8a73a"],["/tags/文件操作/index.html","1d393c2aff2b55bc1aa734ded6a59f52"],["/tags/日志/index.html","31b84dffa419ac67e01786a177d4c5ff"],["/tags/服务器/index.html","5d78aed61a7ea91addc9590252826fd6"],["/tags/权限认证/index.html","786b03a21cfb815c495a1278875c57bc"],["/tags/架构分层/index.html","f236be43db92370062fdcbc8c44cff28"],["/tags/桥接模式/index.html","1ddb5bfdd5a37fc8b71830710b7813ca"],["/tags/模板方法模式/index.html","77e1bb3d33fdcb989c51e0decfd5e4a4"],["/tags/死锁/index.html","7e68fdce3fef78bf7b88a27783565681"],["/tags/消息队列/index.html","e77db23170180e02e26cf6d63d3cd5eb"],["/tags/版本控制/index.html","280769b35755f746828c3535f26e609a"],["/tags/策略模式/index.html","caf40b28dd71bc4f7d26e0b693c0f90f"],["/tags/简单工厂/index.html","afc67a09427394fb793d3c72119348ed"],["/tags/算法/index.html","1a42fbe7e72a6d4862c945fae673a93e"],["/tags/线程活跃性问题/index.html","3fe3eb96d5e29deabd638990096669c0"],["/tags/组件化/index.html","5093e97046190bb2afd80700be065a8d"],["/tags/经典限流算法/index.html","18ff6937dcd9d9093d1d616081829215"],["/tags/缓存/index.html","566d8337ea90d67bacefbe746864caac"],["/tags/缓存/page/2/index.html","c91ed2260cf512a99c2a54736e6bb4eb"],["/tags/缓存/page/3/index.html","f80da7e9dedc2b9454701df61afecbdf"],["/tags/观察者模式/index.html","fb3695725f0881ebbdcfb96083c7f9a4"],["/tags/计算机网络/index.html","8fea84ef20a422a13457f696795cc4a1"],["/tags/设计模式/index.html","e36376bae98090a2531f5a50a7af03cd"],["/tags/设计模式/page/2/index.html","b9521900c3b43d6732f184e890e76160"],["/tags/设计目标/index.html","7ad5047ac954f67e9b2dbfc5c88e64cd"],["/tags/资源共享问题/index.html","5bb049108b345ebae40db6871faf5697"],["/tags/进程管理/index.html","9e8b58a01aa94d9cf2a4ef9cab597f08"],["/tags/适配器模式/index.html","e9bd99d62a9e2f4d062649841e84d3c2"],["/tags/通用设计方法/index.html","0aa1d459f13bc0abb23b545d4b1a8cbb"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
