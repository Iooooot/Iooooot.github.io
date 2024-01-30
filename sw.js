/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","ab0ce39a927165e87086cbdf73c9d233"],["/2021/02/22/工具的使用/博客的搭建/index.html","89d5a52a4243ac1d784ef6b155d8aa7c"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","73c1f094b1380a7874df1dab3255c912"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","a236dd89856aa1a5bf275253de8a6d4a"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","608609f491bae2edc754b9373b1db2ce"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","e105df41d638870598edcbde8a5a7014"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","3e29e92903334e494d961ea84aab22f1"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","94ce1f99214395e1017e28891f22f547"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","726b2986f7c0347ab9a3686367830d8f"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","9330a0b654f2526c1efc3bb92a2ad80c"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","b59f022ba933c7594311d3564783d87e"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","aeb06c060594b1187f131d090201aff1"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","f693bf1176a6cd1945befdf06705c26f"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","7f99ce765b362a08d2d3e91bc5436f78"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","34aff97db63614103ce37e47bb68c4cf"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","ec74dc317033576707daa657109022c7"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","0808857f01441d559d23804dc6b29396"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","2bf0836d874d4989d2410b64ddf48801"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","0f14084426450316981d1232a17d7f5f"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","3c76588a3cd859d7f58517aee7a47d7f"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","76bedaf04e5795b334ee3320299c9d9c"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","c25378c466e9fec92dc209cc5729ac8b"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","5559e954b12ed663c9cf01e77567b56a"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","607eb1dbed2da1506617474da0b22f21"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","db871f0dd2be187e27aa98d393a2acd7"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","c06d7c1d25fb3cc453a38909231c85a7"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","f46791f7f54d127da6aa9f635e0746e2"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","82692b96534d679bddec575993204cbf"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","6eea5b32b040db0249c6875146cfa7a3"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","60ad044b8a62fd63dc47e3ff146ebdee"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","ef0c6a98db8fbd3b67930efd4e626831"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","756174bd7485355bec713863c3abea57"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","f579e7a07e9bf73e39b145b9de3f6147"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","7d84daec5f84cfb3550fbc68d8ede155"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","ad8aa3c4084240075ca0fa46dd5909b0"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","96f79c6073720b924d3adfbed1fb073a"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","cf39d9ac1045fd0e309013e290f290fa"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","ea0be1538607dfafbb69d187514accd1"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","8399fff295cb4a95383eb51174b93733"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","2e373605289c4263a977208498c945bf"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","97a617b7aed2ffe147016b22ad8cb44c"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","dd549b7aa8505523f50bc126ec1cbc32"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","eb5976161d4d7fbd2d898104d34a5254"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","abe86f560121230177e7e7e7c912919f"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","893315e08e2f5d8e6c92b90c32c9eb37"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","2d67ea09c1b699ada964815d0eeafa5e"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","090e86e3d43b24ab9b5854666d320871"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","ad6e7b9254de8463d831a891bd59c6b0"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","be89dda01b400a4dff29d74193db1426"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","c10d99d7074baf604b2761f191f580ed"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","2a93491754193687d2d56e4ca8f30252"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","53f03385052095fe4c68959dd3d7d36a"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","8f4acc96a6199661bd95ff751695984d"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","5137ab76b38c1d418fdd300d5e581794"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","167ee551fbd022f909e388d3b45902d1"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","0666f80acd6fe6d2462417027424fb0f"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","41e856d6450f75c0516430a06b5e5d19"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","6f401787a7e979b75b387411cfb37b84"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","1ac60d3eb94081186c8679d1359f0075"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","880dea3378bfcefa9c336a7bf86536bb"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","1f90ce796e18d0391926482f8f76cbb7"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","db7784f075998a374b0dd1e48bb50e26"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","0529a130890ecb952ccb302bbf2f6a45"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","06ea78de289553960201bff9dc397c17"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","8732d86436bb33ce54346ab5b2a61a56"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","639a2a71d123f95cf3f0d1872ff0ad58"],["/2022/08/17/前端/jQuery/index.html","38bc363128eada66414251cf9581813d"],["/2022/08/19/前端/JavaScript/index.html","0cca475b39ff318b4886ff64ddbb75a3"],["/2022/08/22/前端/Ajax/index.html","7abc066a3da6a991d6f721f142eecf99"],["/2022/08/23/前端/Promise/index.html","8d6be9b9b862d8144e8edba754d1e2fd"],["/2022/08/24/前端/Axios/index.html","3a4adaed50ddb16cbbdd95c67c9ac227"],["/2022/08/25/前端/H5本地存储/index.html","e2b3d807d09f4a50ff76a3181470d7e9"],["/2022/08/26/前端/mock/index.html","cfde90f59e0fc0f86ae2077a54324fd1"],["/2022/08/31/前端/vue/VueJs/index.html","5daaaee872ce429160a4da1b6e7eef21"],["/2022/09/01/前端/vue/vue组件化/index.html","2efde09ae1867f1450373648dd746440"],["/2022/09/04/前端/vue/VueCLI/index.html","55231107caec9083b1a3064a6c81c2e1"],["/2022/09/07/前端/vue/vue实现动画/index.html","2f5486a2df967cc3901dc7f4440c75af"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","e77b3dcf51d2d3ee302eb7b0ac51481b"],["/2022/09/10/前端/vue/Vue异步请求/index.html","b475fc429db1fe94d3129be664c3e5c4"],["/2022/09/11/前端/vue/vue-Router/index.html","83d244c9b6cf26fbfab5982ea7fefdf6"],["/2022/09/13/前端/vue/Vuex/index.html","adc62627463f3e50d72d2c2fec18ffda"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","a2af0dbf9155de5a959570541ee2330e"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","af2b93bef5d6e81ce5ed1edc5a2d7c7d"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","6c019548fb9b08d778937fdc4ed5c70d"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","de2b12f825d092ad6ff8a5052892af50"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","5e1503b3e95477b2e8fa6ec442fbae3f"],["/2022/09/28/DevOps/Linux/Linux/index.html","c07e32645497fa0f678f06221f6c9670"],["/2022/10/02/中间件/Redis/redis基础/index.html","42e41871eb41e5fe3baa12b1fd635a2b"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","8481917121d654e9a68d2466a319c7fb"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","c45025917f2643d5fb952c9e506e73bc"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","cff7ed01aecaddbad6b608526caa7a8a"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","47e910ec8e690e88e38836864ad60eeb"],["/2022/10/17/中间件/Redis/Redis集群/index.html","1bcfc28cf9567916cca4a30ca07613bd"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","381ccc9f2bc1fa40e5e73fdcecc4f225"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","7020628357dcac2f827c04211cd73af4"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","966b222260d08d1f062d0e57e65b3b40"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","f50bbb240dd618d1e4ed5c3f85542603"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","fb9776f2182aa624cd60caa3156faa0f"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","363f5004716b8256e28c382ca0a0fcb9"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","ee4ce0c1690fc7bcd29f491f370de44f"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","517916c500e6455d279e70559cbc4a1d"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","5fe168fcd7f3c5c46fea110608db3fe8"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","395c9715733820559fed09d9ef396baf"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","3eb676debe09c866aad4e1bbc207f294"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","faab412e97506474855c91f7cc6688c3"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","62a4f9cfbdddbe68c0c82e9196f878a1"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","395e30e2ccfeca54271b57a23ea04ced"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","449b81bd3a5138c7163aa2b511e8858a"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","e03c1fad24cbf5b2e3f22417fd8517c0"],["/2023/03/10/DevOps/CICD/CICD/index.html","09b3d9488c422ebd66830defafae2598"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","268e11525cffda424ee65eeec54e8f21"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","a16b4c92bc7b798115b18869e542ae2d"],["/2023/03/13/Java/NIO/NIO/index.html","f48c27a4b9f660a726cbc455fd8e8ea6"],["/2023/03/14/中间件/Netty/Netty/index.html","6ae0b5e87b3d29e17c216075db4f9cbc"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","676be07990e364c0dfe7d0821c70c5de"],["/2023/03/17/系统设计/分布式系统认证/index.html","2b9a67158f19936945d768fcca57ef0f"],["/2023/03/19/Java/JVM/JVM概述/index.html","21ac1d67cfa0db1c4cde1f5015d4b576"],["/2023/03/23/Java/JVM/类的加载过程/index.html","2e33dcec564bc87f1f626c4d93b8f92d"],["/2023/03/28/Java/JVM/对象的实例化/index.html","85000c56ee03c275adeca22c69fd26af"],["/2023/04/01/Java/JVM/运行时数据区/index.html","e4684f4cab392071732968d8e741451e"],["/2023/04/04/Java/JVM/执行引擎/index.html","3c34834de3a6d06370757787763ee823"],["/2023/04/06/Java/JVM/对象引用/index.html","6a3a472458ae8947912e0633d8044d59"],["/2023/04/09/Java/JVM/垃圾回收/index.html","ebf9cbe857370e823711334fee8403c7"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","74f909a57c00832083e2762d6b32e1af"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","3a87fe7c7305e365e2bb565d9cbdc5be"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","632fdb8840bebf01f26255b2fba1e138"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","3da094ca822fa999edadaf55beed349a"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","a282ce4a2222a5e7685adb4bd11d18ae"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","8edef05c71736458b20258a9b9c62120"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","b380584897977a19e27df9fe93f1c2d7"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","065d09e16fcec91225028d51178744ef"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","54eaa6630f4b18e680e0bbcb3850fa19"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","47ef9b3c9ea3aaad1e0369c7ec9e4c80"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","f6b741af7994d0a8399a48cceb606d08"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","221a4cc5e679a53811327329ca65ab46"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","8b61f437ba2854945794e3f7d9b1941d"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","7166831b3214c5b821c323a13c43b437"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","ea627d5be0ff70caccd4696e4cd7a77a"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","fde0fe69fe79e15f27138dec0c68798a"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","a9f750902c91d7870187bb7cb2b12b1f"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","31feede0d7c84f6a6980e43254362195"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","df6e00aac50f1cf669ec6200f1280dca"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","d58886aa3895c7408c37524211335b2e"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","0140464dcc4a8e1a72f6b5aa6fa917cc"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","e29a0a2eaac504dcf6bd070db0206b2b"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","a3dab289c37a942d1440f4b274a0b0df"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","8ebd721d2b8fff2f28ec268dabaf15e9"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","199456b6da862b4a46ec0e7d691ef7e5"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","c55b29a4659a39f4b13f9c173a247282"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","3b3e725af497d58e241a90e8fa7ff0aa"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","e014ac3b9d4d4e74d8e1320ba6501ece"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","47b54123efdf3bba57f48bf184332c2f"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","94fe9c3bf76f5f27b8234f505819f3f3"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","f13936772941614d0f21103e78c9bc3e"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","9883060c0473e379611383e5b4085932"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","ebad4deec6d458046c1a3cc757ac2b57"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","142f3eacb30147474d400b0568f3686d"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","a2936d1bbadaf59932ed0ce033271d38"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","d985f678150fe6ce13ffc4789017add1"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","a7bcfdeb0a524a32571befe747dc4ee9"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","d325f23ff6422998340d651b31748bb7"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","566b64a5c11a62ea817c3f942116563a"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","b75acd3811e082d5faa88d17cb501999"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","27b7a288ab2a5ecaa08298264a71af6e"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","65ec6fa31fb88d01cd981db1a80e8058"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","2b6d00cd4d25e6a564fcc95ff6673970"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","a9cf5333f91f127c1aaa326d30c662a8"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","6c0060c426df96c22116009f55a9ef94"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","de9d63e80b1a30f8263d0c3d3509e0f7"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","fa3fae12f9f036df27b72e8750e6433a"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","d63935aeb48eaf65dfbb312a0b557a47"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","d520e6551b9274ad410c654a8092812d"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","8f3ee76eec7c37a93a42980a702e86c2"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","b35d1dd7e020468f91661ae422e781c8"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","0ec890976d74c78b6bd9675013c20f87"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","3a2fbcf448a674c089758d789093ff4b"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","fb5451ef49b656e0b8a733e618cbfdd4"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","62dfdb168860b0c7a9a439d9bd798f9a"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","17873de2e8fdf88f31cdc3aab5a8409a"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","659b00ad01887b52b149e8d85d5302f6"],["/2023/09/04/中间件/Redis/Redis事务/index.html","1c670072e8f570456576f1b76e268b86"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","8c30bc53f6a0bf22c463cc5b8c2010f2"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","a78d27eda1339f71a77298ea29417b24"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","0466bfff6d1b0a46b848ef6287383d07"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","07317e09102d0503fe002964b2dbe466"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","c7629b87a048c8b073f6f351f78cc62e"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","92e2eeb75d4efc178e914166631356b1"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","23bee4aa07e5412ce61e4594a4a0a9c5"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","9a94b3ba1dccaa4dc10f2588bab44c5e"],["/2023/09/22/Java/NIO/零拷贝/index.html","1e30abe601b312474f46ecdfbf89045b"],["/2023/09/24/系统设计/JWT认证/index.html","654d0617a5ab047dda3caaeb858b44ac"],["/2023/09/26/Java/NIO/Reactor模式/index.html","57d3c034ea8c8508f66bbdf8171d56f3"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","6e139891385e8d0be2ea3ea9ba6fda61"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","7566414ad6966beeb527bc4aca2ad0a3"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","e4ea5ab2fcfd938f1b7cbe218ed0c66e"],["/2023/10/09/Java/并发编程/共享问题/index.html","f31fce097e9bda9cc22d4b5a4937119d"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","1019ca78e44f8e627cfefc18b52df591"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","c0f117888ed09dc72cb687ae38e594ef"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","948e46ab04b4328238d9437a6453d440"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","524417816a03d34fa0ed87030fed9d8c"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","d059315a3cd3d5b95acad79e78d78a2b"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","b34735002be2fa23aa41533f2a3ea98d"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","4a881432c42c50cacad94afa47ed8602"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","936f3564b6fe58c7810dfff0f01d1e52"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","14d963e42377c0ff73a160eddf6cece2"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","074527f53cc5891dbc8ff7f7dc1e89d3"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","16610771129d389a53258fb58d22b183"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","634cb3e18bd18474a1beb06351f570d9"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","2a82ca9133f12bc7921f0300bd9e7141"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","de5e9bc6b45c55a71dd45c4da4ed1586"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","aeaa5baa6c3b9fbcfbb23c2655d34948"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","afbda2479a38009bdfabb5fc3eb0ed64"],["/2023/12/05/系统设计/开源协议/index.html","c4e47a5822763f5e78819e354bb2ee93"],["/2023/12/09/MockMvc/index.html","2a3343577ddf14496bd497396f16a40f"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","a5c426f95bb265eeff47a94402504ade"],["/2023/12/19/MySQL读写分离/index.html","e515211b2a651002b982f0e11e5ce73a"],["/2023/12/22/MySQL分库分表/index.html","572ecfcad24f06298e3d1586ecf74afb"],["/2023/12/27/利用NoSQL优化数据库/index.html","3e5c35eb0a2db58988c37ebb0f270f61"],["/2024/01/06/缓存概述/index.html","8a1e0f50357191d7b496935d443b9bf1"],["/2024/01/11/缓存的读写策略/index.html","896ead395508260432f4ffc5e6a5fdd0"],["/2024/01/14/CDN静态资源加速/index.html","0897c3613c7ad35a500e7102feea226f"],["/2024/01/18/消息队列延迟问题/index.html","c98b5ef69f6eb9a2c19779f24ec94bd5"],["/2024/01/22/高并发系统分布式服务方案/index.html","6a3ccd6fccc5f96c0aef8ef30e671bb9"],["/2024/01/26/dubbo/index.html","d97895f43e63fe59151d86643ca89362"],["/2024/01/30/微服务基础/index.html","98e964e3c4049dd7da9d50d7cc7ace1a"],["/404.html","147728a1938bfdc061be7ea5539c50f4"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","9df8669407db3251bb45d60d7bad8bf9"],["/archives/2021/02/index.html","763b45f710e9c55d05e4720041ce6360"],["/archives/2021/03/index.html","da1054c0ede957dc9fa6b98515fd3779"],["/archives/2021/03/page/2/index.html","5ef263873424ddb7f2b5715f3e0adbb5"],["/archives/2021/03/page/3/index.html","33843936f6282ec2565b5d8d1872323a"],["/archives/2021/04/index.html","f53f58672524d6e88d9bb639d5e3d509"],["/archives/2021/04/page/2/index.html","60a9f9b5b691712fd4a9814bf825c266"],["/archives/2021/05/index.html","0046103e7e9c566b4b327c7cba724f2c"],["/archives/2021/index.html","007a7acfd05470919f5232d095068409"],["/archives/2021/page/2/index.html","73c10578781b31262265fa042019d9b4"],["/archives/2021/page/3/index.html","ed2098b196bf651605057569347930dc"],["/archives/2021/page/4/index.html","82cee11d032411ae45587e983ef308d5"],["/archives/2021/page/5/index.html","3c3e4647138902baadf3b77cb64c593d"],["/archives/2021/page/6/index.html","86e7cd13c6b79799d987498757fac03b"],["/archives/2021/page/7/index.html","5435014ea04070689b293fc7006e5300"],["/archives/2022/01/index.html","fc09fb9611ae801234a78698ebd09fc7"],["/archives/2022/04/index.html","9d9caa0bd1ab993801e6e39608a707a5"],["/archives/2022/08/index.html","ac3c347591c31c997f2d4b28946b3c76"],["/archives/2022/09/index.html","f8e74a8cd92984977158a78a69bb69d5"],["/archives/2022/09/page/2/index.html","6030174ba6cbda7304252a5439a8c39e"],["/archives/2022/10/index.html","b4fe22e76c41e365c2357d7c1c90a5eb"],["/archives/2022/11/index.html","7d137facf269f66b57b68bcf14b1b48d"],["/archives/2022/12/index.html","38ae3381728da43bf1d20f1e33f47bd6"],["/archives/2022/index.html","6b67e6b66b02660d238c6eb2000874ef"],["/archives/2022/page/2/index.html","9d14cce53c203734d3affac04fbc8efd"],["/archives/2022/page/3/index.html","265f28b47d6b389838abb8eeba60ea59"],["/archives/2022/page/4/index.html","67001aa25ae0efbae9e058b4c71ffe06"],["/archives/2022/page/5/index.html","26d5d843b5cc1305990a9f4f4e723ea9"],["/archives/2023/01/index.html","d8287f235aab2723ce4128030c083a10"],["/archives/2023/02/index.html","c918cb09d9dda3c55687fee2a8fb6387"],["/archives/2023/03/index.html","e23103d1a482c6ea580350e200e8f4e7"],["/archives/2023/04/index.html","ae20c09a6369640b4fd644151ccfcbbc"],["/archives/2023/04/page/2/index.html","17731a20a4fe145583a5c466e12e4df9"],["/archives/2023/05/index.html","1bece684e51258c6dc3fce00c51d2517"],["/archives/2023/06/index.html","cecbfe922c4a4f410178b6d320939d96"],["/archives/2023/06/page/2/index.html","0a48ab50f7f1741c393cd04daec50356"],["/archives/2023/07/index.html","cfc074a8e08a09e406366ae6731c99ce"],["/archives/2023/07/page/2/index.html","c7700677385f3e5d07226c2da3fdc5ab"],["/archives/2023/08/index.html","fe40c883c159eceeff46aed1507e15b2"],["/archives/2023/08/page/2/index.html","55bd6c66da3bfc8ad457c147a2d1ae14"],["/archives/2023/09/index.html","84b46a58d8bb3377739a360c45600599"],["/archives/2023/09/page/2/index.html","a7a4a9340678b923a513354ca77114b4"],["/archives/2023/10/index.html","3f54baf7991ceb1bead9db2e3602ba53"],["/archives/2023/11/index.html","5303c7a02d4d4482a8a2a89388ead655"],["/archives/2023/12/index.html","1f8186a21f947a2b068eafc6718d9381"],["/archives/2023/index.html","55091147f9cb0cbd6273c0dae1f2cc74"],["/archives/2023/page/10/index.html","6de9f36cb129c3673d5475039d7dca88"],["/archives/2023/page/11/index.html","a7743366bcdd89baaa3fbe16721b9fe7"],["/archives/2023/page/12/index.html","edd10bd177a3d25408f6030dca587c45"],["/archives/2023/page/2/index.html","e5726e6ae58d2dbc5a0d36c426312008"],["/archives/2023/page/3/index.html","98919d7ca1a77fb838db68487baa5009"],["/archives/2023/page/4/index.html","aa196caa4abca0e00ef67ea1deca2ac9"],["/archives/2023/page/5/index.html","44e05e54068147671729d7563c86452f"],["/archives/2023/page/6/index.html","dd68c38979e684c2dc74642786e5042e"],["/archives/2023/page/7/index.html","2726c5c0413ff71eed9842e6ad4c0405"],["/archives/2023/page/8/index.html","df9d81efec15e4463139287adb6e32cf"],["/archives/2023/page/9/index.html","df0369c477da21b8f917bdf026ebb519"],["/archives/2024/01/index.html","e3a33c97bcf203bb74fd3975e569f5f7"],["/archives/2024/index.html","2ce2e22df08cbc62372e6bed9e5d4626"],["/archives/index.html","5f39b664c82287cf7bce07f82667e913"],["/archives/page/10/index.html","dd8122f12cd50a5fb47f9e0d39aed08f"],["/archives/page/11/index.html","c5b0887b5dcd20024a5a96da4b825343"],["/archives/page/12/index.html","db09753e759603d67bbb6f24865eef86"],["/archives/page/13/index.html","602ce2b80ce39977fbaa59de13ec07b6"],["/archives/page/14/index.html","362a67a0ea304790322d8f0aa5e2c5c6"],["/archives/page/15/index.html","060c0784079fe4cc9af98743d3954184"],["/archives/page/16/index.html","7040cb5ff81dfac4c375586656994380"],["/archives/page/17/index.html","5742071a4226344610875052cd17d003"],["/archives/page/18/index.html","d661f96206cafad3f783e04bda9d56c6"],["/archives/page/19/index.html","106d9a01f30bfd41226ce67405e77e6a"],["/archives/page/2/index.html","65318bbfd9c7e653cb9e3428e101e437"],["/archives/page/20/index.html","05560ca3febe1cb972ab0ac83f4de8cc"],["/archives/page/21/index.html","c39cdac2534e47c09f7501505562b68b"],["/archives/page/22/index.html","cea060bfcc7f564ab52c190b0ef188a7"],["/archives/page/23/index.html","20990de85b3449f6cafcb18141d4eff1"],["/archives/page/3/index.html","91aefd2912e35afbfd3950da3bf73d67"],["/archives/page/4/index.html","e0ca822a463e9416471497d5ef18d151"],["/archives/page/5/index.html","93ec1bfbe91fbb8a80c3dfdda70b7937"],["/archives/page/6/index.html","fcae249628a1b4c3d1cf9f9f2eb77f9b"],["/archives/page/7/index.html","621f54cc8e41b424137b3db5a150cd16"],["/archives/page/8/index.html","0fbdacdd3186da8732a742949edbcac7"],["/archives/page/9/index.html","351ab9ba644ed85d7f1945704481e9ae"],["/categories/Devops/CICD/index.html","481b09b276b07d18e712d3efa9b86066"],["/categories/Devops/Linux/index.html","1aa9c60bebe720e278981033e6ce4d0e"],["/categories/Devops/index.html","482591b5b38a77bbc0b60eaede43c2c4"],["/categories/Java/JVM/index.html","227f4a5f24f1ac8b6d48148af537d25f"],["/categories/Java/Java基础/index.html","0dbffb1164a66beb4799a86e898de63b"],["/categories/Java/NIO/index.html","ad972082d6c071e727ea6a7e1c728178"],["/categories/Java/NIO/原生NIO/index.html","3608b9945a2cb544513271745650ae11"],["/categories/Java/NIO/文件操作工具类/index.html","2212e0a05725445f9a6cabb7408d3ff9"],["/categories/Java/index.html","769429d7f4f18a465e63b86472c20afc"],["/categories/Java/page/2/index.html","31b43b158b3a0a24f731f8d739a4cb87"],["/categories/Java/并发编程/index.html","1da1a3c0072597086d1800a11e270d6d"],["/categories/Spring全家桶/Spring-Security/index.html","100d27825fac21e949d6ada33696b5ae"],["/categories/Spring全家桶/Spring/index.html","93baa182c413e486adabe324dcd10cf8"],["/categories/Spring全家桶/SpringBoot/index.html","d3d0ba20bf66daaec816dab275db3b69"],["/categories/Spring全家桶/SpringCloud/index.html","42c0bddccb9d322c7d3f1b071717d78d"],["/categories/Spring全家桶/SpringMVC/index.html","976ee0a775e2998198f9ac09c251a847"],["/categories/Spring全家桶/index.html","91f89caa7d9cef5951d4d9ced7084b14"],["/categories/Spring全家桶/page/2/index.html","139201c946e7e72a737080fc0498bf4e"],["/categories/index.html","b0c5eb675244c9e27c4bbcfb7e47bfa1"],["/categories/中间件/Dubbo/index.html","67c8cc6d0bf15956c5e117fc511930f2"],["/categories/中间件/ElasticSearch/index.html","7a48c549b615415cbb1a3054080c32a0"],["/categories/中间件/Netty/index.html","a6cca892c1e96eab8c78ac78e2725a11"],["/categories/中间件/Redis/index.html","ab917ec5102f99d14dd93648c559ed7f"],["/categories/中间件/Redis/page/2/index.html","d71ae40ea241ec7dee9776410bcc8218"],["/categories/中间件/Redis/page/3/index.html","4e51ba1fab8183c011f1d6e731e936b8"],["/categories/中间件/index.html","f5f354b6f00b8bdb740581839ecdc121"],["/categories/中间件/page/2/index.html","430a95ed5f26089809f9a8ee88c0a86e"],["/categories/中间件/page/3/index.html","dc55234bd74c32540af9f2fae275a989"],["/categories/中间件/page/4/index.html","374e5e4527aebfa8198a32fb4fbca4c9"],["/categories/中间件/消息队列/RabbitMQ/index.html","55a7524244a90ad1b470235d903cba5e"],["/categories/中间件/消息队列/index.html","fea561e0acfc81d4ceb372597a05a056"],["/categories/前端/Mock/index.html","cfdd64452a79ab088cd61999b7d49afb"],["/categories/前端/Promise/index.html","4d23742f4263edac9f6d93108b5d8c7e"],["/categories/前端/Vue/index.html","1741c619fe17b3593d01f6c7ee5c58cd"],["/categories/前端/index.html","c4d2ef5e19ce69e100ecf3a973000657"],["/categories/前端/jQuery/index.html","1434c94f207a985fb34a41b73d17bd6f"],["/categories/前端/page/2/index.html","3f573c7b9a463361adabb96a4d5c1031"],["/categories/前端/原生基础/index.html","5d621b6414e51e8b1bfa679ce1e8f74e"],["/categories/前端/异步通信/index.html","fbe02f1742d3ddd17c9b4fc2c8d68830"],["/categories/工具使用/Git/index.html","f3294b3987d0d594898a1a2c2273c3b8"],["/categories/工具使用/index.html","38c9697b07b079dd9ff8972e578ea085"],["/categories/工具使用/markdown/index.html","9398d1a47f7b210ea778879c99752cf7"],["/categories/工具的使用/Docker/index.html","c701761efe635b85011832f395468830"],["/categories/工具的使用/Nginx/index.html","5f09c28086d9a144e5641d3662442706"],["/categories/工具的使用/Swagger/index.html","b6a467c13e2b02e1d73791ae366363ab"],["/categories/工具的使用/index.html","a0b7cc90ae13b65e63f211ff7750f8d5"],["/categories/工具的使用/博客搭建/index.html","f146e0fc89be38e3907cd0687262ccbb"],["/categories/数据库/MongoDB/index.html","6029795dd61b77d12baec1da7fd731cb"],["/categories/数据库/MySQL/index.html","ac030d7565c502269eabb34245fb3927"],["/categories/数据库/MySQL/page/2/index.html","763ebd540d276a2576bb2a45eb03198a"],["/categories/数据库/MySQL/page/3/index.html","712d8f4e95ca4fa9000b9c41c66c590f"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","95577f7ca5693cc2e95f558c2347623f"],["/categories/数据库/ORM持久层框架/index.html","570e9704183a933695223ed49881dafa"],["/categories/数据库/index.html","6643912156a87a940eb17ea3393e32c3"],["/categories/数据库/page/2/index.html","40d1afa40d1303d8b2aa1ae37128593d"],["/categories/数据库/page/3/index.html","a1a0821466cfe9b4d65cc7a303509487"],["/categories/系统设计/DDD领域模型/index.html","4e19ef28db95029ef699212475ec75a0"],["/categories/系统设计/index.html","d78f930dab668c3b799cd535bff54a24"],["/categories/系统设计/page/2/index.html","ec06ba9cad1011c3be30c83ea9ea58f8"],["/categories/系统设计/page/3/index.html","b40f89643c8a2b6c04c435826d0423a1"],["/categories/系统设计/page/4/index.html","8e674f147eef951ed4ef93f6e82ad35a"],["/categories/系统设计/page/5/index.html","9ecfa0af1209e22829ba501d54a1eae2"],["/categories/系统设计/分布式权限认证/index.html","7cb262687498f31158a5b9b4acdc2d3c"],["/categories/系统设计/分布式系统/index.html","beda85b5390ab4635710a550bfd374d5"],["/categories/系统设计/分布式系统/page/2/index.html","772ffd686993cc47f7e4893726755f6a"],["/categories/系统设计/分布式系统/page/3/index.html","a03c3370d34982b4b262d0b8aa631925"],["/categories/系统设计/微服务/index.html","ae8a4219b3d4fb69ff971cad9666c056"],["/categories/系统设计/数据库优化/index.html","84dc6d0c6c73cb0f48382c0bed2dc95b"],["/categories/系统设计/设计模式/index.html","469e1a6387167a5374b6596e6f712666"],["/categories/系统设计/设计模式/page/2/index.html","a7f2b510d7862673d3e47d0567f216fd"],["/categories/计算机基础/index.html","ec871192d57c4c6128789aa5eb0fbfd3"],["/categories/计算机基础/page/2/index.html","46699366f708be42e88ffe56bfdb550c"],["/categories/计算机基础/page/3/index.html","2e8883301f92c34d3fd49519840df798"],["/categories/计算机基础/page/4/index.html","ef68b87084e92ed84651d91758290990"],["/categories/计算机基础/page/5/index.html","0c3c4f531248a089ad020bf877b25590"],["/categories/计算机基础/page/6/index.html","6f36c28da15cd183681954b7be6dce01"],["/categories/计算机基础/操作系统/index.html","8cab40dc10d93e7ed147bd2edbdddca1"],["/categories/计算机基础/数据结构与算法/index.html","1e79b281ced651d40246b5f7bb9dfad2"],["/categories/计算机基础/数据结构与算法/page/2/index.html","46a1a814bd331139eed9c6f773579824"],["/categories/计算机基础/数据结构与算法/page/3/index.html","6b7e91796d418233d69fd019c1da175c"],["/categories/计算机基础/数据结构与算法/page/4/index.html","4de7fbc54da231223290ca5ef12996cf"],["/categories/计算机基础/数据结构与算法/page/5/index.html","c777b746cc18326efa7d17790e56bfc3"],["/categories/计算机基础/计算机网络/index.html","023da8122155f23d0d6926619aea3cd9"],["/css/index.css","2af5ea34362e0b34f799106b2659ad50"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","7cb6e0bf8c5c3b5e69ae7aa2ecfa6988"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","2a19c8a665fec8345826a956aef2703f"],["/messageboard/index.html","edb0663b3beae02409d28ebc11533453"],["/page/10/index.html","88832a11cbfa41fecd34a1f15208d073"],["/page/11/index.html","b9ee409a19f0eb1f0283164aec408c6d"],["/page/12/index.html","1ad585368f0d8ae2c51caf10dc9409a0"],["/page/13/index.html","e9606a6a536fb1f536fe9d55b811a062"],["/page/14/index.html","2cb75eb83af5f44b481ad82eedd9a82f"],["/page/15/index.html","b5696c875792190049507b4ae2f20ed4"],["/page/16/index.html","effafaae6fae9ba999c8e80f5ccee725"],["/page/17/index.html","a7103c4ba64aa875e96f044fc6b6074a"],["/page/18/index.html","19c702934c427a254012a0e366cff8f4"],["/page/19/index.html","3d07df32199f3d6f4908f2ecaecaa640"],["/page/2/index.html","197b8eeed073aa53d20c1d597f22bf97"],["/page/20/index.html","1705a727bd6624be6f00b6ca158c2034"],["/page/21/index.html","529ac8cceb59b2919af5b15a01c35971"],["/page/22/index.html","6c7465c514412b7f17c8db7398305812"],["/page/23/index.html","a81fe1181a0b73a096d767b981137020"],["/page/3/index.html","9b0c784f8f1c77ef564c7a6f720c65ac"],["/page/4/index.html","8170c1a666339d2cdf8ff018412f2ea4"],["/page/5/index.html","281ce63b7be41b68bbf285feb1081b9b"],["/page/6/index.html","18273b74852b4664fc85724fe17ae7fa"],["/page/7/index.html","88ca7ebd62fa54c9b5024e191a250a63"],["/page/8/index.html","a6145af89e7eec5152078e2d77360998"],["/page/9/index.html","a27a7dd16406f75437ad8b3eace635a9"],["/sw-register.js","935820a896db6d5cd4dde22c9cde39f0"],["/tags/Ajax/index.html","edc621a0c3da0856a8a750aa9b242720"],["/tags/Axios/index.html","22e038bb84517b709b04480f217b1ec8"],["/tags/BASE理论/index.html","cdda0d38b195fbca346b67f806f010a0"],["/tags/CAP定理/index.html","ee60f7c5fee9f4a5ac4bc9091c448f8d"],["/tags/CICD/index.html","ab554975fe1a39d5412ccab352e38de1"],["/tags/DDD领域模型/index.html","b320059edf99a0f6bef9ba897c87be2c"],["/tags/Docker/index.html","9edc8e25f1240490c5e209391affab30"],["/tags/Dubbo/index.html","378986c41830c8253c28cd3e36ddbcf6"],["/tags/ELK/index.html","a5c1f253599466e4b691f4c2ad5fae30"],["/tags/ElasticSearch/index.html","9b49a7849110ff5e209b76d0adfbfd7f"],["/tags/Git/index.html","3bc4341ecf42ccb0efe691a454c72e98"],["/tags/H5/index.html","7020cd5e123d30df88f3109fe8dd447b"],["/tags/JVM/index.html","6d7bd385d4aedf390c2e77a3d642dd5e"],["/tags/JVM内存模型/index.html","92327f95df502e8ad4a551d6e55621e9"],["/tags/JVM执行引擎/index.html","49176863a62dcce65e7f4ace2d55e9a1"],["/tags/JavaScript/index.html","5239f45b24da78c39296a7924d38dd06"],["/tags/Java内存模型/index.html","21192b48ae706341e045a1f4fd49c787"],["/tags/Java进程线程/index.html","ac1b0fcc4a875f2dad83415cba665ca3"],["/tags/Kibana/index.html","c314ef2a129a5491942274d6be2938c9"],["/tags/LeetCode/index.html","a12b01bf03fcdf311dee0269711fb48b"],["/tags/LeetCode/page/2/index.html","81cff4c453ddfb622a4ac8c604f34c87"],["/tags/LeetCode/page/3/index.html","df8178f65cbfc138660999585e7ebca6"],["/tags/Linux/index.html","0692f2d24448960a6b842695d56aa353"],["/tags/Logstash/index.html","d4c9ce5957725f6a86e6cc8446a9a252"],["/tags/Mock/index.html","7f782f992e4505f4f539d5750e4e9beb"],["/tags/MockMvc/index.html","6f48e6b4dc3bf68d68ceac0c9f69872f"],["/tags/MongoDB/index.html","f85efa66c237e5f8183eb364d3a7e8dc"],["/tags/MySQL-事务/index.html","03bccee2afee4694b17c9a89046711f5"],["/tags/MySQL-数据类型/index.html","cb83422db1198ea4fcffc834063261ea"],["/tags/MySQL-日志/index.html","df528a8d0583db810481ac89d799cbc6"],["/tags/MySQL-索引/index.html","950bcbfe44f5dcae8ace28d5e8bc6216"],["/tags/MySQL-锁/index.html","30bd1bcbe71ea7637d09c894fa7a3629"],["/tags/MySQL/index.html","943206d55d29ba1dd5f73945cd41b42d"],["/tags/MySQL/page/2/index.html","b3cd3dea9f03b0c3fbbab02c5e68ff8a"],["/tags/MySQL分库分表/index.html","661e06411497960a6ffa0a0c1b9ec95d"],["/tags/MySQL读写分离/index.html","011d7d6e019c49c33e56430dd87726b4"],["/tags/Mybatis/index.html","a126a5c5abfe1f0027ddd0afe61fccf9"],["/tags/MybatisPlus/index.html","a79ab7bf421dd74f586ea736e629d242"],["/tags/NIO/index.html","9b75b0cd71134515144560f2652ef0f4"],["/tags/Netty/index.html","1f0d7a0052ba4233271917eb167aebb2"],["/tags/Nginx/index.html","5f2fc3876a19485774055b4e13082dff"],["/tags/NoSQL/index.html","7934fb516a72d69f624268c2d0e65b5d"],["/tags/Promise/index.html","01b3d98bd1eba5755137fdacb2ad42f8"],["/tags/RabbitMQ/index.html","f8757432bd5cd47dbf7269cf3ca255c1"],["/tags/Redis/index.html","f64a514840f8a4300d5c85f7ac1bcaae"],["/tags/Redis/page/2/index.html","961f674731e65382db1369544cfe835c"],["/tags/Redis/page/3/index.html","3d80d7478fb8dd0c45563991c9f2dd41"],["/tags/SSM/index.html","8782c06a40f304709ee289c11154134c"],["/tags/Spring-Security/index.html","2ce4ce77ac72ae00f259327f4a949c76"],["/tags/Spring/index.html","76b56a93207a0d47f6aba98e89cf9fea"],["/tags/SpringBoot/index.html","a1fabf29ae73e12c95404393ad9e5bcb"],["/tags/SpringCloud/index.html","e2709ba9e4a876995fd5f06a10223002"],["/tags/SpringMVC/index.html","efe1fc9c7f6f2f4976eeec417f1e31d6"],["/tags/Swagger/index.html","46c0bd19bf04d20b4bc5ba4b97f09b25"],["/tags/hexo/index.html","e7c5fc86e0443fc71dcd65a745df006d"],["/tags/index.html","80b3f571a613d11b49962e8bee3da9e2"],["/tags/jQuery/index.html","cf0130c204894addef1cbf2a81597198"],["/tags/java/index.html","d05444d24e466a365531642c31f59053"],["/tags/markdown/index.html","3d5ac754e78288ac8ac2f836a839c86a"],["/tags/rpc框架/index.html","7c72922146235a1bccccc6481894a924"],["/tags/typora/index.html","c603edb284e6e4710e30d18146fdda57"],["/tags/vue/index.html","7e6c980505cc03a70cbb54ef3e8d0a9b"],["/tags/享元模式/index.html","8daab033a3dcf3271ed595dd7ee8d3c9"],["/tags/代理模式/index.html","b101050eb34800af0d08e8cb2bafb5fa"],["/tags/内存管理/index.html","cbbb4fd9b2a5f16c068bb8a91f35f0b4"],["/tags/分布式/index.html","c4595b40a1c99306507607b9cc9fe538"],["/tags/分布式一致性算法/index.html","548dc1441fdfa15faafc27a8724fcd8b"],["/tags/分布式系统/index.html","b550bf822a947c4b53eff2713d9c555a"],["/tags/分布式系统/page/2/index.html","5e947e190ba8a03191e607017fec17af"],["/tags/分布式系统/page/3/index.html","81c00e6b8b7fba0cd21583c1ed2ee838"],["/tags/前端/index.html","d6819d475b3defc2146a316fe860784d"],["/tags/前端/page/2/index.html","5a2605628d6034789b3ec8cf5ad8ac63"],["/tags/动态通知/index.html","cb4e7ccfd95f0eedf7adb84767f081e2"],["/tags/博客/index.html","2961abf0a8677cf9603a0566b297a5b2"],["/tags/后端/index.html","86f7cdc70f54d037154409a8944b0bb4"],["/tags/外观模式/index.html","b35baff4c452e6da0be44dc393511cf7"],["/tags/多级缓存架构/index.html","4902c6c98ce8cb2f0222526416adefa2"],["/tags/多线程设计模式/index.html","1fdef0bee65c248ac6e7da115df47df4"],["/tags/容器技术/index.html","e6e0dcbcfdacef7d11951357192b71a6"],["/tags/工厂方法/index.html","61e833eccb4cfc23650bf6f150749976"],["/tags/开源协议/index.html","79c5b8e723e883468e38ec4908b1532d"],["/tags/异构同步/index.html","e257023cb7d7bda8707e208693339dbd"],["/tags/微服务/index.html","94cbc1aaae686923be7ddf104a6cb858"],["/tags/微服务基础/index.html","fc82f8be765516de61863bad5d137426"],["/tags/抽象工厂/index.html","2b91de4207d2f9ad244d770e9bb46a1e"],["/tags/持续集成持续部署/index.html","a03cc9629121a8f8beeda373e36d09af"],["/tags/接口幂等性/index.html","38034f19f030551e422dbc80b696642c"],["/tags/搜索引擎/index.html","625f4aa5c19e4a410a49b74f2ffdbda8"],["/tags/操作系统/index.html","f1ff1af3d94f9fb15375c2a5ef439b81"],["/tags/数据库/index.html","712c333d47ce070371dc683d506a7498"],["/tags/数据库/page/2/index.html","bd0cddd65ee14f81fda2bb89ccc5cf07"],["/tags/数据库/page/3/index.html","2c906a7faa047206da5f0a8fad080d48"],["/tags/数据结构与算法/index.html","225d6a8aff8b2ce709b6decdbb4a2a7e"],["/tags/数据结构与算法/page/2/index.html","d9565bc8be6033ac440f257aa20f5913"],["/tags/文件操作/index.html","2e83c6367878d9b18e1dce1acc5a6b74"],["/tags/日志/index.html","528087f65727b4592e85e99cead4bb05"],["/tags/服务器/index.html","4385b06bc1c5e0dc81536ef2a0a87733"],["/tags/权限认证/index.html","e08398abbe1693a6f5888b69800c569d"],["/tags/架构分层/index.html","4cad48570640ab8381e5cde910c36d9b"],["/tags/桥接模式/index.html","4cf7d89b79252a82a37be989e6dddda5"],["/tags/模板方法模式/index.html","67897c21fade3b797f211f612285c5f1"],["/tags/死锁/index.html","629ef5ec354bf59b02045be649efc501"],["/tags/池化技术/index.html","b1ae14aa99f441a0d1c8a88772425d60"],["/tags/消息队列/index.html","fbdff6e5c677ac39315a5fd71b1212c2"],["/tags/版本控制/index.html","c095b4244fd0e22d7c2a750e156ff2f7"],["/tags/策略模式/index.html","60ee3d126468a8b53384d243235bd767"],["/tags/简单工厂/index.html","7a1de686547f1d00fc8c0b5687ad72a8"],["/tags/算法/index.html","f6359a219fb10e235c425c52b4c41922"],["/tags/线程活跃性问题/index.html","62dd7eefc93884402c8dfe2f5610ceb7"],["/tags/组件化/index.html","294722bbdb47018523f50fd138c63d3d"],["/tags/经典限流算法/index.html","d344df3de65d650346b48922c380fef3"],["/tags/缓存/index.html","b540eb2f527187ea0522637d79629b31"],["/tags/缓存/page/2/index.html","e185600601977f2486a0f7cccfb6c5f3"],["/tags/缓存/page/3/index.html","c30a788c84003240054240f6966c989e"],["/tags/观察者模式/index.html","ea34a406a06d0e67c118d813a336f633"],["/tags/计算机网络/index.html","5a9feef2dae074e4af926d120a03c793"],["/tags/设计模式/index.html","b6a459600d6d766dfd8830ac0460854c"],["/tags/设计模式/page/2/index.html","c61246d96b0946b676e3b38e0a1a1264"],["/tags/设计目标/index.html","18fe0d27a90a7f0cb7ebe99aad3d23a2"],["/tags/资源共享问题/index.html","27a38d313c2fba6d2fed0a1b67ecf07e"],["/tags/进程管理/index.html","06676dadda33ded3e8eb408e1a903cb8"],["/tags/适配器模式/index.html","6e09f068bb5189c51b16405297e0e66e"],["/tags/通用设计方法/index.html","dac2471cd30f80e2a715fabc92320a9a"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
