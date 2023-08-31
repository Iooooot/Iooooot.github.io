/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","479f53b012227ea770cdc6120aae8b41"],["/2021/02/22/工具的使用/博客的搭建/index.html","76bfc5fccc9de2ff6b17793695c40263"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","4ff875935e4b5c004fa0fb692d16bd2e"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","c517ddc7be7c69f9000726edf135f6e0"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","605336352fafcabf804dd8890138628e"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","e9384869494c8c33cefb7df559e7365d"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","e7e217158fbd8874995714b8a32b5d8e"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","a33c8066b6e58caea18386ca78c3211a"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","c81b9c3992ff2554e55d740c328c3b08"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","4778ccd881355bb19d992bccaf7c0836"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","3e2b1926d8820cc09fb04c7682afdc20"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","de312201566d54b1ee9c8ad7112a0b6b"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","e5f5f17bbcfa4aad05943090b5261652"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","00e82847c154e8e53ae086111cb5a3c8"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","dd1eddf3a6eb323a8da889a2b9741814"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","8be6475e7359b09d65a0fa74dc462647"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","deae20f45640c4539d40aad0a292db50"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","d5ec41d3089dfc4e9ca861d567ca84e8"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","85a4b8bdfd62d81e0f8d1d99318efe90"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","6309172bfbaa90b07944f011ab461e8c"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","b95944ab41ca0699a378d17e091b8f66"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","0968adc5513ba38e11ddb468ab5a2aa5"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","16d7bd63676f588dcea017682a124dff"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","50cdbb952910f70b71aea9f68e445372"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","f2d0fb444c7f893aa2f78974f956fe71"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","0ee7ae388e6ab9edfadf12027aa58565"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","d2dd8418c860392cc5f06e2eafa76851"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","f1142577f4d0481f7ed70ee4eac92b16"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","fc79ca296b90a570b45eeefd80f186bb"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","b4ed8c41c5f05aad3ebfdd0d7983980f"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","c6ec0260db492aa6d9a7850a2c1367bf"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","1c74d628dfa88d9ee6d5084d237beae6"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","e65da321cdfeaf5bf01b44f7b8a7bf5f"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","e41b1b748e5acacfbb7bc7e150c36605"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","fde3b52d8db057be1ad8b81369ccbb85"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","216ba956a264264bac9fd4a643e1e0d5"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","075d9715ce3b9843d10b8239e11a6e5a"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","f6751747c1fb49c1b1b8c6c41c6f7316"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","5c59d2ee5289873df429370c78c39c0a"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","93e171cc42386e6163a053ff7cb6f622"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","5d18332fb0942b8d3425005bede5a220"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","da17aedf06e329faef4b48cb68516e8d"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","060fe72f7a285e51d7c6b545e1ae4d42"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","33d20df8750d2f49576ffd68d1f46b5d"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","188c3e8dbec6a0e3b63929aca78e7345"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","390d60c3e1025a9b7a51fa25951bed12"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","854d5f87a2de81fa2e0114826d3c72f3"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","053a594b9959c8535b64cc101668ffac"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","8be24268cf8870b19bb084a2cd491177"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","774ffdc519b400f76f2b1272ebaea6bf"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","10e7ddd6821245313d226040f3829506"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","028b2b29532de39dc4fd28d12880ab99"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","c1034e492b23031a0bce8ddaccf23626"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","d2f08e6495324e004ca559ced7ee2a0e"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","97af564fdcef89993a5e5036cf3049b9"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","4067de8fdbc7279e598579db5d00ce89"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","f5eb2b537af348b6061e8445cc556837"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","4b79e5bde87e8b49ee571b2cfdad289f"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","b5672c35c3c4b24824cbef7ca5f4eb65"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","1282fc16999ade7f32740de029d91de9"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","601e178849caa6f2b3c6a7395afe966a"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","7deebb149b3f1535da51610ccd37b857"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","836fe80a3a08721a202d497fe8831052"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","49654b00b7973b9a06f09a27aaa13db8"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","6f48928f7fe8dd1546532823a5ed032b"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","2314419e85ccbcb136c2e8ee4a18aded"],["/2022/08/17/前端/jQuery/index.html","67d68fefac7d183f8fc9ee5c0757faa8"],["/2022/08/19/前端/JavaScript/index.html","e6ed71cf653f94284047c0be22cf87f8"],["/2022/08/22/前端/Ajax/index.html","cc19f7a3c00e2ad5536ef40d876b17ec"],["/2022/08/23/前端/Promise/index.html","b86f3ae400fb9440a631537f20b2853f"],["/2022/08/24/前端/Axios/index.html","a862f970cf4e26ac7e00661e20553cdc"],["/2022/08/25/前端/H5本地存储/index.html","8aaa8f8721778a973d0be960b6a89e6a"],["/2022/08/26/前端/mock/index.html","068b55ad00305999413ec4b6591d0c56"],["/2022/08/31/前端/vue/VueJs/index.html","7f536397aa7b493d228dcbb5e68a0729"],["/2022/09/01/前端/vue/vue组件化/index.html","5c4862068cbe451193977c00c71bc5bb"],["/2022/09/04/前端/vue/VueCLI/index.html","d7758b0a5f8d2477f8da098491bac6b8"],["/2022/09/07/前端/vue/vue实现动画/index.html","b9ccea67da0a426af89b762b4ef90ff0"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","d27860d8afa7e2a99f109b4c1ea807a5"],["/2022/09/10/前端/vue/Vue异步请求/index.html","5edd37838052c938d6fe03bfd62700bd"],["/2022/09/11/前端/vue/vue-Router/index.html","f12089c0544d48a15a52ebc389677a2f"],["/2022/09/13/前端/vue/Vuex/index.html","cfa5e1624a67da182f2ac19852e38271"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","2a289af3971bfd5039f64783b144abac"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","864c38c50c99f27a841d9522baf368b1"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","6fc6af41e0289c931e3830b1193be90b"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","a977c0664f047f2b932ce71eeb4808da"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","2307d0c91581e11d6276ca70a724fad0"],["/2022/09/28/DevOps/Linux/Linux/index.html","388dfbd567c8c745b409687b9ef54e8e"],["/2022/10/02/中间件/Redis/redis基础/index.html","77aeb15e9c50a0c2f37858e9c67b2929"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","0b8f471c54e0da7c60441856d5231955"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","f1b4fbad29f9aa7b343ad70ae9a08100"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","72348696e31312f890a66330d20a3b5f"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","0c2ce1e20d2e953c3f8bf304e49966af"],["/2022/10/17/中间件/Redis/Redis集群/index.html","a0b7c51eeaf3514fd7aacebd5bbd6657"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","d09912944b8ffbeb6d27df056ea84771"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","441c4a0dfd90e6ae7a2220508e64f145"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","399d7bee2895c0d659a864a49f408708"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","4ed38ed16624897d4780cdf48de831e9"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","c702946bdf0ce71a70569a0bbcf29703"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","21c11a32061f2b62c5873df549ea4482"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","9af8473129e3862d22a94f8bd558c412"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","8ebce90ae73ef6b31d7797273225460e"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","9a81b77d2febca87a1172377e72beecb"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","04ffe4df3f5102cf6b5d933c7618eac7"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","da67ef788a51e9de6b0c96342bc5b953"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","934d8efbb0c36b06332dfbb716995e3c"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","50b72acfc5415bc1034640a5b9669e64"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","97d2ca926fb2211370556b011626f079"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","53fe83d7b5bbc012cf5f347c62b53e18"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","52f92197db3e7c168e495d5d9e734481"],["/2023/03/10/DevOps/CICD/CICD/index.html","4d8df02460fd45d0a6fa478e0204e5ac"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","a62afcb0569c2e4da0d531db75ede6ab"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","83ad15be1b0b3373ef9373ec0c5a62e0"],["/2023/03/13/Java/NIO/NIO/index.html","73736d7d8f7eefb8ce7670aeb884ee7d"],["/2023/03/14/Java/NIO/Netty/index.html","242b73ba62dc6e8dadb9a9b248b1e51f"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","a395947b64fbe55df1052c2fd89907bd"],["/2023/03/17/系统设计/分布式系统认证/index.html","20e16c06f60f4704bc9fff7122e4364c"],["/2023/03/19/Java/JVM/JVM概述/index.html","96d372e26ab1bb2d6f54a2bc828a2673"],["/2023/03/23/Java/JVM/类的加载过程/index.html","a5a13556084e5944183a30080ae1d423"],["/2023/03/28/Java/JVM/对象的实例化/index.html","5e9625d0f2419e549b57acd5de93da1c"],["/2023/04/01/Java/JVM/运行时数据区/index.html","bff302af7d5554a3e1afed2e5f714580"],["/2023/04/04/Java/JVM/执行引擎/index.html","a15d8fa2e90a6ea10f968b0f25796c4f"],["/2023/04/06/Java/JVM/对象引用/index.html","9bb4902dfb8c33bd69d5e8ad8324fa7b"],["/2023/04/09/Java/JVM/垃圾回收/index.html","5a0f5c5120335b5836d9ee37d202c8ce"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","e886d430301fed073c2c077fd17431b4"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","0aea5b3722efc759721eaff93082efde"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","66a7b1952e1c1bdbf4b13a802e980662"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","16c8308238315c7fd09728cf7f54bbe8"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","cfab1feef46804c63f2d5b1f80dcd51a"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","c3423798aa76e940f4ec029b5c7c1975"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","12f89b3c1b7671d2cc44930a17fe658f"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","f7592c99ff93e2d08805d90116cc01cb"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","c3a17caa740d4f429b6b5597dfead2ae"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","5ee944cdfdb452ba4fc36e4360def6b4"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","416c3cd5f6f38b68edd69c37ba4c1f91"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","bed7d80ab08969c9ba066886b7812101"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","6ad5ab38ce65e767ef3ef458c316827a"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","e38e096541c54f33a45844bfa7c46093"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","e1bbcdd57629ac8148ce9be848a453f7"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","2ad2443f6a687b0e2449502cbc7d8246"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","5cd8355eb8f612268d635fcf503e2b62"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","4fb313711dd394e2960a07a64faa907b"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","f3129fb3e877db48b10c33610e3a5a0b"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","e4224db8f0dfd7c3ccf9c2f88f435154"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","666acb30661b50fcb80f49fad4f56da1"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","e31e2666bab03ed0a98e9bb813e67a4e"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","f63de76311433f62438a22041cac641e"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","876e735639576fec025237d642733cf5"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","c4c6dc22f48db85c06d6fd60397aabf5"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","021b7b7e1e793ed2724e46f43f35010f"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","04f0c7e753fa461b7680f17e9a22a351"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","99c45ba9de6ccd9632d5a25fb1dea0ff"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","5ced18a0933d9146641ebdd79cb881c9"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","71a9c74ac69c2bebba4e637927fe0b29"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","9e6ac7b3434f5e609e46a94400e38103"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","1d09ce3d26f2140baafc7f3295df0081"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","4410f154c72d4ea35cf8165d7cd4dcdd"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","9dd5faf8e381de1f6fb59c2c3cb70f29"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","1d471247b13f1dabbe626e515c0dec9d"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","d0d608d6054fe495f9b354381361ba77"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","50eaf0c9a669ca17baee548b8470619c"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","2128451748b1a4779a81e9b06dd42d71"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","179989e7cd8bc18090c26197db970684"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","1063d766592cefec44d2710ac5e61a13"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","640eac1e0f8701a311fa0dcf8372e131"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","ab263ea15cf0c65b860f57e42c17e0a0"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","d84448957cc0840f891cb5c856f3e60e"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","005316cc8ecbd410e50bfa8aefb7073c"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","46cddd27aa4460eff49bf46b977f18ca"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","39cb084c917f0ebf6222c3395741c5da"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","092e54636b0f331ee5a4535de16e8dcb"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","d7a8d09d5b887b1ee6a4448579d1c0eb"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","a0498998e3ac4388b69f0d8d2101a4f0"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","ae92e557a3c8db4e39da664f81e7d044"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","edc66cdd09c8286dc65551b7b0b22fc8"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","45211a1c236c5d8964e92b3fb727614d"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","28982e7027ac22c39ca5b430d85fc054"],["/2023/08/26/Redis做缓冲/index.html","224604fea4c378caea979ab117d5a357"],["/2023/08/29/Redis内存替换策略/index.html","59c8bc62a12fe4b79d6a9dd9e2844978"],["/2023/08/31/Redis缓存与数据库一致性问题/index.html","23f0fa72b0f7938ac33dfc23fff8b4de"],["/404.html","788b5054b3a744412dd75af507ece55f"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","428d05c87ee4a1976e5e4f16175d2664"],["/archives/2021/02/index.html","5912dfed1c0c9518661ad8709d71374f"],["/archives/2021/03/index.html","aed59e9bbf6d7c1909afd58c86a80e64"],["/archives/2021/03/page/2/index.html","1d051db0d75f32c1eea83a75a200c726"],["/archives/2021/03/page/3/index.html","00c73a86ff0c2af9dd6defb53add312d"],["/archives/2021/04/index.html","792ef61233bb0ead8433cb5928431e76"],["/archives/2021/04/page/2/index.html","3e50d4e2d22074e9b61142ea9ed55ed4"],["/archives/2021/05/index.html","cc7b263c5ab43c1428757bf62909cc06"],["/archives/2021/index.html","044e586c772c8f9d84ab13d86369f448"],["/archives/2021/page/2/index.html","b4ed512aa4b1e7fe5b2028787343f1d7"],["/archives/2021/page/3/index.html","ae1bee60f40fc4d037bd23e8c46ffb8d"],["/archives/2021/page/4/index.html","6c655af856e510b97d94002835c3ac20"],["/archives/2021/page/5/index.html","88c0603f58d011711c206ed120de8115"],["/archives/2021/page/6/index.html","524e5a4b387be194d433887e952f8f77"],["/archives/2021/page/7/index.html","a909f4e150e7798f705ae5c357eafaa4"],["/archives/2022/01/index.html","96195b9d2c1a6d7b0553c60a279e9c96"],["/archives/2022/04/index.html","b5c5135d30990ec905d221251a3aecfb"],["/archives/2022/08/index.html","127d5b5768423e3563ba93fe2f74efdb"],["/archives/2022/09/index.html","ae312492f3893290f97e33d29b9279dc"],["/archives/2022/09/page/2/index.html","a4291ab3771fee8bf46272f1078bdda6"],["/archives/2022/10/index.html","fd92c61efd8a500fe1c37199bbafc3da"],["/archives/2022/11/index.html","2e79639d28087e40ea2470e2f7490857"],["/archives/2022/12/index.html","f91d23459c94952e6ec06092a7e4f628"],["/archives/2022/index.html","fe65f9f4308951cdb35f0a81bd33a474"],["/archives/2022/page/2/index.html","6d2d581fda878f125b7f941f13854bb2"],["/archives/2022/page/3/index.html","7d3136bd56ea05df75977698d586b6ad"],["/archives/2022/page/4/index.html","6a8a91d583a7cbd5d798a31a4eee8469"],["/archives/2022/page/5/index.html","cd0130b81889160d1af80f7e4ddebc06"],["/archives/2023/01/index.html","de42385eaed8bf705db1f64a42995186"],["/archives/2023/02/index.html","02d91fd893a8b395bcceeccd3245a749"],["/archives/2023/03/index.html","9769bee33726a593dbd07095bbb13db5"],["/archives/2023/04/index.html","1ea6450ac569f2dac94e10c393ddf707"],["/archives/2023/04/page/2/index.html","33e57b6b1719a2b8fc0f1c1da7de44c7"],["/archives/2023/05/index.html","7d12679e05f13584c39210bbf1ec0845"],["/archives/2023/06/index.html","3f66c67b76086823c0e739f001a94f8e"],["/archives/2023/06/page/2/index.html","095f548cf4e937396e241f2e2e8e89dd"],["/archives/2023/07/index.html","60400dca17bc005fc4c1852ae3ba1321"],["/archives/2023/07/page/2/index.html","aaa4ad6119f60387a65aed04e0dee657"],["/archives/2023/08/index.html","4ae6e30c806e5dffc26623097babe616"],["/archives/2023/08/page/2/index.html","635e4c725a53da61f3e6456ea7bc1add"],["/archives/2023/index.html","7e5df3b53d13d22087669d72fc3d48ea"],["/archives/2023/page/2/index.html","a02c17e4da5e480c1b2ff79fd25411d1"],["/archives/2023/page/3/index.html","35b00ec28f87ebe379c40636d94b9c8e"],["/archives/2023/page/4/index.html","450060472620542c27a47ea41c9b439c"],["/archives/2023/page/5/index.html","72f9ec5737240356bd961bae2b29ceba"],["/archives/2023/page/6/index.html","166b932aeed8d9ced3b43bdd986d6292"],["/archives/2023/page/7/index.html","2e7bdafccbb8a6050e66e74b80ccd90c"],["/archives/2023/page/8/index.html","3fad2bd8686e88c7ca175d72d7ff34da"],["/archives/index.html","8773caa01f7f932b4b64d59d70bcb3a0"],["/archives/page/10/index.html","4370dd316c9fdf9f5dcddf26b7911248"],["/archives/page/11/index.html","3977c924db7da21f32850326eca229ba"],["/archives/page/12/index.html","a73da09ff0e26ae53e25e15e956dd972"],["/archives/page/13/index.html","abb35262412831f092971f5ea86dbc5a"],["/archives/page/14/index.html","6b8952ac745e15c3ac9abd2c625315c8"],["/archives/page/15/index.html","147c1391ca4b1c0ceb98ce1da4016e85"],["/archives/page/16/index.html","ce0536cf2b8ae632412651ed03285fcb"],["/archives/page/17/index.html","88a137c3c4d86eed65b53277df11a91b"],["/archives/page/18/index.html","e833fffbd5b048646825134e68001357"],["/archives/page/2/index.html","9ddeb1c0175963b503bae1c45210b1d7"],["/archives/page/3/index.html","b33ee2328c366b50041a61cbad2a1406"],["/archives/page/4/index.html","fee576bb7436c1a8eb0d581a0cd46c0c"],["/archives/page/5/index.html","e24557bc6af420efd9b49b6e2c03c8f3"],["/archives/page/6/index.html","e439ed93ab390b24ae36add92d960e56"],["/archives/page/7/index.html","537b6f9b6636c2b90157c3c7f9eb858b"],["/archives/page/8/index.html","a700715422ea5185a1e9e1c8fc5f7bfb"],["/archives/page/9/index.html","5ff021c4287d93d5fb337f19907bdc82"],["/categories/Devops/CICD/index.html","06c8bd5fbb99fd8a22b01494f869369f"],["/categories/Devops/Linux/index.html","ad5ea507c438f788c3ba54053c02a33b"],["/categories/Devops/index.html","58e2324e0f03628731ad435a5891c63d"],["/categories/Java/JVM/index.html","c7883d22558ff959a5129fab1fa06f38"],["/categories/Java/NIO/Netty/index.html","8e4803dcd4ff52bc67188f9e8d37a164"],["/categories/Java/NIO/index.html","ffa34c718efe8653a0b6469ab79f4931"],["/categories/Java/NIO/原生NIO/index.html","f4724bb89af965cafb35f0f7cdf3fed4"],["/categories/Java/NIO/文件操作工具类/index.html","7e59aa41c27a526cfb4dd8d6d7976e98"],["/categories/Java/index.html","9ee9fae01a04e8ac33cf38b21bbe2ab8"],["/categories/Java/page/2/index.html","331ff068a2b8d23dd85f2b2a67f74120"],["/categories/Java/学习路线/index.html","a0e5e1eaaffecb837eab94a15a2e405c"],["/categories/Spring全家桶/Spring-Security/index.html","c414d3ad2bbbd78b573c5b95c1db66dd"],["/categories/Spring全家桶/Spring/index.html","d531e6e57d5a1a532c68171b284aa72d"],["/categories/Spring全家桶/SpringBoot/index.html","5333d7671384dad8c8a333ab5878a649"],["/categories/Spring全家桶/SpringCloud/index.html","338584ad2ebcfb31d3604ffdb1032025"],["/categories/Spring全家桶/SpringMVC/index.html","b6b13fe51d727b24b316352580255c65"],["/categories/Spring全家桶/index.html","332af7ba86cccc74ca59ff2910b4d452"],["/categories/Spring全家桶/page/2/index.html","5408a273784c40bb5600d84fa460607a"],["/categories/index.html","b69a6ca95c76eb7d044a9e19624fb9e8"],["/categories/中间件/ElasticSearch/index.html","3132282128ad045de3a4f05e641b2b33"],["/categories/中间件/Redis/index.html","2ffa05c93936acdf12922be57bcb8b7b"],["/categories/中间件/Redis/page/2/index.html","76ec5bb93233e8560472d77a6c95eb40"],["/categories/中间件/Redis/page/3/index.html","e8bab2ee02fa75c01397aac28dc8ab55"],["/categories/中间件/index.html","4a8b18d1e3e76ff78a59babfc13944b7"],["/categories/中间件/page/2/index.html","dfe4765d84d9e84e4dd6ea2ac6a0aed3"],["/categories/中间件/page/3/index.html","200d0ae265bbfa7ff24d3046401dad0f"],["/categories/中间件/消息队列/RabbitMQ/index.html","c2a1a484c62dec5ea03d242317ec5430"],["/categories/中间件/消息队列/index.html","141df688938cf791ee73338051c0c2c0"],["/categories/前端/Mock/index.html","f8b17ac2ecde54f8aff89b30f1a6efe9"],["/categories/前端/Promise/index.html","5cf9232573dcfa2b18a5f34d2ef7bc76"],["/categories/前端/Vue/index.html","bff532cfb94bb35d5201161ccb7dcea1"],["/categories/前端/index.html","924ffca8915bcd6590e37d271ff53fbe"],["/categories/前端/jQuery/index.html","78e10266cbc52e6073fc3fda47292150"],["/categories/前端/page/2/index.html","1c006228008347f574b241b1a2341531"],["/categories/前端/原生基础/index.html","b2741db89e001d51f08a9bb5839ce5a5"],["/categories/前端/异步通信/index.html","a57dcf8f9309821e9e6e4a99a8f176c4"],["/categories/工具使用/Git/index.html","f3db4e517ed8d16e3a32917d2f774e98"],["/categories/工具使用/index.html","3d26d04b6a4b1ea1c8053b4a2390fab6"],["/categories/工具使用/markdown/index.html","ff26686e640140e241c9fe44a043e1b7"],["/categories/工具的使用/Docker/index.html","589955e1681f38062ee6fc8b626d61e5"],["/categories/工具的使用/Nginx/index.html","8b909cdbf8500be8fd9e1199204a8027"],["/categories/工具的使用/Swagger/index.html","0dbf5e133015e64c87a74b6e72407274"],["/categories/工具的使用/index.html","963726fd88dcb882694478a188ebb202"],["/categories/工具的使用/博客搭建/index.html","3b6bdd2bb7394e7c2e08a2c09e983fd2"],["/categories/数据库/MongoDB/index.html","02706789775a52454dc7e9cc5aa300f4"],["/categories/数据库/MySQL/index.html","b8af2cabfda0d3ba46f0dc1ec827e03f"],["/categories/数据库/MySQL/page/2/index.html","ffc3ce3cb9a04fde7cd6a4cab751fd11"],["/categories/数据库/MySQL/page/3/index.html","00415217b51e3f3e150b751fb87af190"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","c5036ecb16700ba203dccdf7d0419d57"],["/categories/数据库/ORM持久层框架/index.html","c99e56a0a7dd5b2f5ec0d7997b5066b4"],["/categories/数据库/index.html","3a897c994b31fe7c8365036e1a0687fe"],["/categories/数据库/page/2/index.html","302b6c78890fb8df3bb84dcb619307d6"],["/categories/数据库/page/3/index.html","7862f0e8978b6c0d99b2d2a28baddcfe"],["/categories/系统设计/index.html","546394b54eba2df16700e8cf48266dac"],["/categories/系统设计/page/2/index.html","1ee351ae6e27ffc2d8fd70e672b5d93e"],["/categories/系统设计/分布式权限认证/index.html","bf9d8ae453dda087260abbdb873955bb"],["/categories/系统设计/设计模式/index.html","5b6d76aadd0fdee7361ca9b0a1990d67"],["/categories/系统设计/设计模式/page/2/index.html","1c3c419759c0533b8c14d85474f21db5"],["/categories/计算机基础/index.html","0246a41971a5228ad1d2fa7dbe75fae6"],["/categories/计算机基础/page/2/index.html","b9cd8f25cd77564d47daed521788db40"],["/categories/计算机基础/page/3/index.html","a601a767c11f97cc15e5a54e892954c3"],["/categories/计算机基础/page/4/index.html","469666d56a5f5017e0f562c33c69abbd"],["/categories/计算机基础/page/5/index.html","31a59551d1f3cc373ff2ee9336cfec0c"],["/categories/计算机基础/page/6/index.html","9f1f6873d7a907da80e8696b54fae27a"],["/categories/计算机基础/操作系统/index.html","69f51e6e860cfe3f97c9f127c4056a2a"],["/categories/计算机基础/数据结构与算法/index.html","5060b437874b1d051377653368b00f45"],["/categories/计算机基础/数据结构与算法/page/2/index.html","acd1f36b83a1589b715b3ba465c6eeb2"],["/categories/计算机基础/数据结构与算法/page/3/index.html","73a6d00eb5a0ee3bc5346477e17821e8"],["/categories/计算机基础/数据结构与算法/page/4/index.html","d8f8c59971137b0077d76c0e20691e46"],["/categories/计算机基础/数据结构与算法/page/5/index.html","7f815a50dcaf5d75269d22a9e3692ae7"],["/categories/计算机基础/计算机网络/index.html","45c5f1353530bb6449401a27a709e2b7"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","03d0afd2567483728db55909e942f199"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","e76ee5e557c46be4515b67772bb35a69"],["/messageboard/index.html","9643d3627e47baaa82b38c573b22d2a2"],["/page/10/index.html","9199e1d72861a67458880f44099b6a17"],["/page/11/index.html","9df20c02993893b2ed556fdbf6be0d7b"],["/page/12/index.html","1c2b47ebf1d331cb55a50d04cf60ba79"],["/page/13/index.html","5ba44a1374c35510fe8fa6fc3516268e"],["/page/14/index.html","147aee90fc9c197941519e8c3e212816"],["/page/15/index.html","30ff5a8d410d6e1f7b1549147884bc77"],["/page/16/index.html","29789ddae7fc3647189fd70f8b48d501"],["/page/17/index.html","fcbf548a72e2498c5304c1cecf07d56e"],["/page/18/index.html","dea74e26c646ea304beb2433aa8894ee"],["/page/2/index.html","b395bdab81d80f3118cd035e4952f317"],["/page/3/index.html","a816caf2b0acaa3f31275323c77a706d"],["/page/4/index.html","0c30a718975ae5df9119ee99e862e0b9"],["/page/5/index.html","c2c106afc466f8c2e073670c35cc100c"],["/page/6/index.html","c4495843410864e91e2244e4812528d5"],["/page/7/index.html","fe349e6b65fda69b61a8f4eacfcea868"],["/page/8/index.html","a8a35c976076fd318019b87c05c94ea3"],["/page/9/index.html","2a735de2666ad3a37e6510e20e1c583d"],["/sw-register.js","fbd251c3c9d47ffe11797aadb8aac6ca"],["/tags/Ajax/index.html","fb49b2fe8876c17d7df29d218aa6ad70"],["/tags/Axios/index.html","38fa3a92b0e890739d61acf57a0e20cd"],["/tags/CICD/index.html","aaed2c0381546fabb17554f4d5f6ab0a"],["/tags/Docker/index.html","5bf1188c928e134ca21671609335172d"],["/tags/ELK/index.html","31bf492e3d1ee79cde84482c54f495c8"],["/tags/ElasticSearch/index.html","0a38b77fcc18edd4e6113d0a5f126806"],["/tags/Git/index.html","23fe797d7919d9248363ad2a96365749"],["/tags/H5/index.html","6ac326a0c2365378450d541b614f1ebe"],["/tags/JVM/index.html","8371ed6a98ba3360d49a775469ae017d"],["/tags/JVM内存模型/index.html","aed232f4fd004422370bed8593449e09"],["/tags/JVM执行引擎/index.html","3908139abcead03b3ffa004ed3862c17"],["/tags/JavaScript/index.html","a4794b2aeeeb9b103cde3fc54bcd8fa7"],["/tags/Kibana/index.html","2eab9a1f663e4869fad630b1e56d5fcb"],["/tags/LeetCode/index.html","00e2136a7c43e64fee814c624aed37c5"],["/tags/LeetCode/page/2/index.html","131a3465b61d00fd8f0e23e0a15643cd"],["/tags/LeetCode/page/3/index.html","d04fe4fc49d4f517f2cb76a56d6963dd"],["/tags/Linux/index.html","005aa2bab871df22ffb8e78820390061"],["/tags/Logstash/index.html","44cdc5358a4c9e2b9ba78ec9d498d2da"],["/tags/Mock/index.html","e51ba7831f7ae430a0d0d45371d67b6a"],["/tags/MongoDB/index.html","d67c088e95767cdf1c4c62aa71caca04"],["/tags/MySQL-事务/index.html","083ac64e1435f70da13e1b0bc43105dc"],["/tags/MySQL-数据类型/index.html","42a25795e59fb8fb7f7a364d6111b3ab"],["/tags/MySQL-日志/index.html","46824adf5d23b2699129aa64fcf08377"],["/tags/MySQL-索引/index.html","a10d602d7dfc18f5af715e194a4657ec"],["/tags/MySQL-锁/index.html","ff5d05804b2fbedab1dc87a840f6756e"],["/tags/MySQL/index.html","c2d3a11c4842c77db8706fd92af36f03"],["/tags/MySQL/page/2/index.html","431596ad2f464ced8af4415cef06d257"],["/tags/Mybatis/index.html","17d99efff3c39977669980d84abedb91"],["/tags/MybatisPlus/index.html","9ea2e071488f373535108c6cb0d8a2ab"],["/tags/NIO/index.html","7d74b3e5c137eac41f1e688e63601cbb"],["/tags/Netty/index.html","d06e4819dc4821ebffded95b0e0843aa"],["/tags/Nginx/index.html","992fc90bd59983e2b0d3edcadaa62cce"],["/tags/Promise/index.html","39638c465e6c3f10cd11968d92269114"],["/tags/RabbitMQ/index.html","12e3d4602d55db84e7c263a4dfe48809"],["/tags/Redis/index.html","f158b672b50138311b4879773926c74a"],["/tags/Redis/page/2/index.html","64fece0ff42995ee770624b9cd6ec7e8"],["/tags/Redis/page/3/index.html","7fdb2947bdaa71724b95edfb64e627f8"],["/tags/SSM/index.html","9e63a1f4fbfeb72e0b9680405efe06d5"],["/tags/Spring-Security/index.html","dfdf0e4d176130bc429728a1b8b731af"],["/tags/Spring/index.html","500c65b5da35972de9ea60ada9ca7c16"],["/tags/SpringBoot/index.html","0dcdd7caf9ce63a54065da6456b2fa13"],["/tags/SpringCloud/index.html","e255cc884b0c473f422d4abe5a081c1c"],["/tags/SpringMVC/index.html","62ab1040a07dc6b59106cc9c02fb9859"],["/tags/Swagger/index.html","86f64cb12ea7a2bab4bc653513d0ac3e"],["/tags/hexo/index.html","50970038a088c245128fc7293ce51cfe"],["/tags/index.html","195079df1cfe10b04188e4a325ccf800"],["/tags/jQuery/index.html","6923aede1f50baae8278535234a2d804"],["/tags/java/index.html","f28981bc1e305a6dc57bfae81f3b0144"],["/tags/markdown/index.html","b01d29036bbcd7f95ebe16ab5689af48"],["/tags/noSQL/index.html","fc34ea0c645581284d254395f5b32705"],["/tags/typora/index.html","bd75e30599ebc49fac7bf20b75623a3b"],["/tags/vue/index.html","4fffe5c1e85a85c7947634d1ee9be857"],["/tags/享元模式/index.html","177ea9749e2d0b58a6194cd40a209103"],["/tags/代理模式/index.html","603e70a969540eed6c2f1d671beac27d"],["/tags/内存管理/index.html","f0da7ed3aef6eb70a4c61754ab638e43"],["/tags/分布式/index.html","121281da88b9334f0124869963799e1c"],["/tags/分布式系统/index.html","d3751d39f83d7923be776fd3d428ab0f"],["/tags/前端/index.html","80a80704ffef47f5ad294af2243f3643"],["/tags/前端/page/2/index.html","b787dfab7f65d1f91844e2cf0fd73973"],["/tags/博客/index.html","0ce0046f56baab16aa029bc27feb464d"],["/tags/后端/index.html","b48f4295a2f5597cb64eb64500533fd5"],["/tags/外观模式/index.html","9b2c73f4363dc179df14256d1bb9120c"],["/tags/容器技术/index.html","69e8fc205360dbd83c5c5cd7d617f8a5"],["/tags/工厂方法/index.html","2e8c2134f39f6dde785dbb6aabaa68ef"],["/tags/微服务/index.html","d39d264a24ab2540beb63eba7a36d041"],["/tags/抽象工厂/index.html","861796315bad32a39932b1790bce8119"],["/tags/持续集成持续部署/index.html","a69ef22d81da25a7c89683287b9ad9a6"],["/tags/搜索引擎/index.html","05c9e9189a3a7195377dffead60dd9c0"],["/tags/操作系统/index.html","0c64403739f4f67e1e0f9c5f5e94e8da"],["/tags/数据库/index.html","cff25a92acfe2c25d3eca1a96ffbe1fe"],["/tags/数据库/page/2/index.html","8bc8abee4ccf075cd2184020b5688553"],["/tags/数据库/page/3/index.html","e0ff74915e2bb61abfda30c24155cc4c"],["/tags/数据结构与算法/index.html","ac29402444ca8b598ce36ebe8831be01"],["/tags/数据结构与算法/page/2/index.html","cf1a2fbc925fd6494c40af0bd25c969e"],["/tags/文件操作/index.html","ccedd789daf1823a5323a3c0542d2768"],["/tags/日志/index.html","f63d5111efccfdf7364b4808082949c7"],["/tags/服务器/index.html","d2b341ed9c992428d25de1bed287b889"],["/tags/权限认证/index.html","149a03aef34f6dadccec97bbbe7d3b72"],["/tags/桥接模式/index.html","4ccb6b860c6a73c5c3020462adec47b1"],["/tags/模板方法模式/index.html","25e9a1ee7838aa9dda226d9e339cda1b"],["/tags/死锁/index.html","3a2a59d6054fa96935b1f7f4b3ae3d8f"],["/tags/消息队列/index.html","90d9b7691863e8d78b0b979dd9e3bdda"],["/tags/版本控制/index.html","b11752e5d53a26220306a773bb6ddf7d"],["/tags/策略模式/index.html","f619d03489156be7338377e3c6965199"],["/tags/简单工厂/index.html","862575896f7b47c24094c12d19318661"],["/tags/算法/index.html","fbdf417429801b9b26ec6e18495c4642"],["/tags/组件化/index.html","6cdcd8b916ef86155f6bd7ec875bafb6"],["/tags/缓存/index.html","55896cf10a38b8a784c87f5a928fa041"],["/tags/缓存/page/2/index.html","af69c229e2ccb43c99751682ef35428d"],["/tags/缓存/page/3/index.html","f60c103feb1bd50b780f7ab47287b5fe"],["/tags/观察者模式/index.html","83b2e2db300282708ac87d9a3c4f0a21"],["/tags/计算机网络/index.html","e58bb70297b4f87b0f8702ca37ec5fb2"],["/tags/设计模式/index.html","dd5bdf4a4d5678211a701ef10fc75959"],["/tags/设计模式/page/2/index.html","0482e8addbacc51486f54df75c776413"],["/tags/进程管理/index.html","003f01491d17a08712633f49b0f557fa"],["/tags/适配器模式/index.html","9bad1e37820d1ae750b5f0d13ce6edb5"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
