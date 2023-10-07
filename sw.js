/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","3528bb64a91fd2f075b5d4b287acabb5"],["/2021/02/22/工具的使用/博客的搭建/index.html","aabac204ec104b3d9eceb5c434e4d458"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","c9ca2e42f9e0a693b15d0132c511772f"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","008e7c00214cc9639046b0685ffaa2e4"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","d1cffd3937aed1b11d3cce3a8164575b"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","d56add7346d70314eca769505767921f"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","e37562b332b3e686b7ef011db5e733be"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","4e1649c224a34cd6b95f2d6a6d65199c"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","941f972dd91c05e552ad20b354dca0ba"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","4794180067da3fe7346e277b9f92b56a"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","cc7244d9f0f63b2fc22e42c7ee807562"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","b05cdeb19aca6451d9e1bb995e31ccab"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","6aee481f11b7e0f514334db86aa2d4d6"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","1bb6b06153cdf37dbd2dd479d3400ce7"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","38ba9a78c4c9493e59fbed6d4d8ef586"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","ffc7539b3d4874e8896c05387751f705"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","2218dde5d4661efee0a3c34daa4fe1ff"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","61944cfd4671f49958321614b14423a9"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","06af331750699734d8199c3b5cca7269"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","b9d0a2abfd23198d1b34ebc4ce9370e1"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","065bc06194c95e791c3de253a772628e"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","2070e5978f824ef6dddf1757c76d3bd2"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","0266448d79c0d4b0082b668ed37faf65"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","a9b4893956aea9a2d809bb236df5d14c"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","801cd2aa14f61a69e1cf1b281013c726"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","6df843cb0df1c265cc45bc835cfcce56"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","aa6c8801ed625d174874f8aadc3f5bd9"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","48c29d9b3156ffd1979e7f49d815a59a"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","b9c5b9a8a591f4723c369583b59bf3c0"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","2bdc973e7ac2c50c88e19fc50411e7bd"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","5bfe386b59d023b7e192f724e8b4db52"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","0ca74ff1035e392bea59d0cef8655277"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","e0069e65d8faad801f7a02e767043578"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","ba287efe636f96ecf6052104431e1100"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","279b024929ca03acd840af32dd6a4a2a"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","a9547b4cbc1e455f4e9c63d470e19481"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","694fa080efcdae3c4a34e16094dc21cf"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","4f6ab65db050a2c4565650522dd1b6a8"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","0832a66d1fb8a7fca12e1dacb10f9187"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","8c3c238de32e75d7016d723a5e189f38"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","f26351a06d8272fc7d70a129bd9fc3d3"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","b98d5d9ef4ef931b10c436538fbc5ba3"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","2c6b93c01f3c8356d398d0246d7e9e86"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","d4c94048289aa67b5de9c9870d679161"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","823ba83d21853012cb8336d6b1dc56ca"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","370292f6d954938d66447023c4bff175"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","9f53af1e72d5dfca5a6cd0a99df89bdb"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","0589e132e28af0b9f4bf477958c965c0"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","19a50446170d7e7b5817e1a3d0f3bcc1"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","d34491e2d0a89de88d89d47405fae4c5"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","72deb0b794839e20aee470f36d5c5afa"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","06af8de5fc83a987b151b2bc64e4c040"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","9324e9b80082a9cbb1b7c9b53ff29d4c"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","7f99ff482c78cb1f7831ab0c0606399d"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","d27e85ca69fa5c9d4e676b3aecf22859"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","9eac287b97ec35a1897cd838a72d3c2a"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","98b2bb5a33a254ce158118009c40707c"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","fac5a4a3e8f4c6030baa7d2e8b4ddc7a"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","a23dc8efd7350a06fa6a2629e7ddc159"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","80772d10a1558978f5baae39462eb32f"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","1d47259f813a7d2deda51c2d0a6138bc"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","1d44e68593e25477a3a4668e0d57fe19"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","dcf49c48f8d1002fee23582e36da4cd2"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","861161a9cf18097a3021d5910e85d6ab"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","d144afaa2c8e5099d8acc3f4d05eb177"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","1ba4548f03979d473488e623c1f65219"],["/2022/08/17/前端/jQuery/index.html","10e6f9fc38badb1fc24a4ab7821bb397"],["/2022/08/19/前端/JavaScript/index.html","0100ca752897a774276d7dba7e6a1fde"],["/2022/08/22/前端/Ajax/index.html","615bd7d4f9cb372c70a1536c8e8351dd"],["/2022/08/23/前端/Promise/index.html","f7b31332028793b21a5198819ce2b154"],["/2022/08/24/前端/Axios/index.html","b22b7252f60d3485b9fcf28cda81c17f"],["/2022/08/25/前端/H5本地存储/index.html","80544f91e2ddcfcb1c6b021aa262a6b7"],["/2022/08/26/前端/mock/index.html","775ae3847e73964d7f2341952bb3b200"],["/2022/08/31/前端/vue/VueJs/index.html","0e3055af251516943d2db38e1a38bb70"],["/2022/09/01/前端/vue/vue组件化/index.html","b670bb594e3ae06d3dc64b85c55cca03"],["/2022/09/04/前端/vue/VueCLI/index.html","965dd0fd688c1e03777050ff37a80a55"],["/2022/09/07/前端/vue/vue实现动画/index.html","dc1fc43847766b8b91783a9841901a0e"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","0b019819e1147d924d8f56c1edadc10e"],["/2022/09/10/前端/vue/Vue异步请求/index.html","201d1f45452c9d31b3703b939e53dec0"],["/2022/09/11/前端/vue/vue-Router/index.html","47048a40d996498ad4178215d55d1648"],["/2022/09/13/前端/vue/Vuex/index.html","67b7e7cd3637f8b6d0d4f19ec3de209a"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","d4d22a9ee666e26c736d92cfee1bb750"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","b1693201549d92d817cfffc905fbf723"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","272c44cf04d56cde1eb9317c89bd7506"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","bd004c233ed0b090a35379c4964bcdff"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","593f1d0f9b9049c3f1cf4c716f3e572c"],["/2022/09/28/DevOps/Linux/Linux/index.html","deb9f9457b6a94c31d8863f744e71732"],["/2022/10/02/中间件/Redis/redis基础/index.html","04529e3ca3729729c9061f68d461c016"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","abb034e8fe7be2b16b89a8b280d51080"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","f4658dccc342e06c75b756cb1da6c218"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","76a13f966043cf101dff95ca5885076e"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","7e4ae6f43bd48d42dabe0df053ce720e"],["/2022/10/17/中间件/Redis/Redis集群/index.html","c7d4ca48790cd2b647660a791e6f6e33"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","8ef6f0dd7c1d884e4c426012c2e67969"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","5d5fb5ed4108ce90b8608ff9465b5ae2"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","f480a31e651f300196999bb5c1df3743"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","11c91a7596978f331c4507f118e76167"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","3e7cc5c8eda7081296220bec9683223f"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","4351a90ae924125a22c79025ef9db263"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","d28717f2ef77e6a5a4f6814f40184bfc"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","d4155e619ff3f622c723fd90b32be351"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","86661743b92e6635a70b9b12f3aae23e"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","01c05c26ea23cb1a9b9b5a24c724e961"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","240563872ab49ee283bb38ecafe845ad"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","df15b2b774f03a33e03ef645063e2a36"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","1aeb4bc5177ac63eb0ef0c7beb955fbc"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","d9290d5048025be5bb95366993310215"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","258116d28e7bb6dec69c6a6be85a44bc"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","960e673b95457e004a1aa0c6a5ca17be"],["/2023/03/10/DevOps/CICD/CICD/index.html","fe07313c941772cc74e156792d7ec582"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","392d207301dc8ad311b94b63ebe0dec1"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","3162d83425d7f1936d9551e176af895a"],["/2023/03/13/Java/NIO/NIO/index.html","9773f312326e0503a4ad2aebd5c81ae0"],["/2023/03/14/中间件/Netty/Netty/index.html","d6171bf1dacb592f59bde1fbe5d25d0a"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","0876672f6508a48e9bfe79a550aaa56b"],["/2023/03/17/系统设计/分布式系统认证/index.html","762be3f90134753909895c83e80b5d29"],["/2023/03/19/Java/JVM/JVM概述/index.html","3ea98f921e402e9ee9b82b0fdb4b00cc"],["/2023/03/23/Java/JVM/类的加载过程/index.html","0d04de183a0930ac9548cff467e06c33"],["/2023/03/28/Java/JVM/对象的实例化/index.html","c39952eb3982f0c50b1849439175fcdf"],["/2023/04/01/Java/JVM/运行时数据区/index.html","4c873f1dc4cfb10762eaafe2d2eea8e2"],["/2023/04/04/Java/JVM/执行引擎/index.html","3d525d484b6d3bef8591e76316a6ce38"],["/2023/04/06/Java/JVM/对象引用/index.html","4510250b2e80c99c30f39fa46ef6c6dd"],["/2023/04/09/Java/JVM/垃圾回收/index.html","db80566fa0739b366b12849620ced507"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","71fe53ae18db53f2c471a8bb57c8d804"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","0f56fab2f54acf2818418252daaadeab"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","b6842986165f1b1ff90f9c54ae422d79"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","72c1d3df720e62443322ff95ff737357"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","d751b4288501cba7ffe3aaed265244de"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","8fef1dd84810e2a6d2b4a5f46f53cdc1"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","d34288afc578e28d4912d70390e53326"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","a9e8f64aefac013fb3578ecd7040ecbc"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","626edcb3ab5866fc9f37d3ea57c1083f"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","155f38ca5c0a4573200e6ed2ffbd839c"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","d46848d3f395f929a6ab020cb09c8e75"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","54108bdcf9b415a197b6ca0a0cc96fde"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","02d6008a27327cdc9aeedbc7c62823f7"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","3e70b98d9dc924111790bf9b207eed20"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","18723da190f53425b9afc692f7b8aa04"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","e6de2c7f4f4ddce9efe50508def6dcb7"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","e0f1a37602c9927c8fcc54bae772524e"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","b1dec017ef81c9bf600793fcc0514c54"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","90caad39745096b93f40325777968f62"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","8c45fe0e1a4105d34f621b1b60d2df41"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","6c1010ef6c0ddc6e948655ea1aa4b9a3"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","60bac09dc25b50054fa992edda8bc9eb"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","463c02c5fe89674625b5f11042c7bec9"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","817ce07167cf827a404a0ce94c081dae"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","ec4bc3a5218db37552f0dff0dcfebccb"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","ccf333c4b361b963aa6313ed66b10d58"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","575fc54f77d6faf04fb7f1195941a98d"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","847761df915a89289d0208b8a5c0d70e"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","4bf7377bf0f429a3c4ebb3813e069786"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","a4bdebc9b118866fb70f4ea67f562a76"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","2e81dede8a434107a489862f267fa8b0"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","f4a62c576584012624ecabbc649b8d20"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","ea1446a443510c6f2785ad547e088c58"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","a6b10014a602f29a04694aef1c477426"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","fd7c5ac331b814d1e7bdaa9572b5d1a1"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","25ff839ed68844f8bbc086883684eb3f"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","738dfef0f39b564a713fa7ccf0afe041"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","ccc7a205c9095f266a3d12cb22d598d2"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","ca84655b351627fd8b2cbad289a85ea1"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","17c66768130bc134d717573b08b04262"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","67d2075bed91a574a8614d3ba3be9f05"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","971180d6010a06eaae2be280329dd51a"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","52a2c3bf5587639a40670f01e4501461"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","9050d7e77f645e32a69d7899461c41c6"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","5fc1c6c78561368afff28ac9e1b8605e"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","d244a294f7e3d47d9344c3f5e9f0521c"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","daf53798f9ad01486d78d49250b5e4d5"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","7008270dbe0f14642cf035bb17149759"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","07375cd4558a56c5db8747a07e75ba39"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","bf9003d3c48831c197491c3f366c8182"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","85df26a9fe62b9a03dc634d0dedd9035"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","6e5cd125ddbc730d771a38a13f913543"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","bee7526e13fd7bab8651530d756f0908"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","390ef4634f05d64e07cb29341ea0535e"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","b6241b755270eda7e376019927506b30"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","38e83af16c60941cc444138b46941720"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","07182a1b381d56b6dfedb413cd187e6d"],["/2023/09/04/中间件/Redis/Redis事务/index.html","f61dc57a4b98ef96d8e70f1cead83b79"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","f60ad4bac0249677e58090ab3e9f2ab9"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","34fcacf60995f05b0dd3010998e7f787"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","378de210fa8d8299523ce663bdd104f0"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","4baf00e561f5e4301511a8ac95585858"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","06225e8c4b0404d4f23dd7e7b479a274"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","be6230aed0cfb02830a549ed0cc1e2b3"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","f3dd5b54a83b0ce0dbe31f6878b1604f"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","18a7a1f17821168d12be2c612a46c94b"],["/2023/09/22/零拷贝/index.html","e21a942a87b9a0a9b7b33d048064392e"],["/2023/09/24/JWT认证/index.html","5972e123d27bc52e0903a91a180862fc"],["/2023/09/26/Reactor模式/index.html","b501e092f5d571695782baaebcbca3d6"],["/2023/09/28/Java内存模型/index.html","2f7c0f680eaf10168779e5df0609c716"],["/2023/10/05/Java进程线程/index.html","4966d4097b6ab16a4b350b643aac62d0"],["/2023/10/07/线程活跃性问题/index.html","54b4f29c8164145bfd1635de040b7f42"],["/404.html","e73e32393728b0d72a21b2e78d6deae7"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","aabc9d6901649053aff4504827ec40b2"],["/archives/2021/02/index.html","4ed9efbb34dabb364905427d83b369d5"],["/archives/2021/03/index.html","39936b01b5dfa157207d251941bddfcf"],["/archives/2021/03/page/2/index.html","8553a280c7c7f1b6295e06c26723ccb6"],["/archives/2021/03/page/3/index.html","992fe9847d3743875afb41f90d4137f4"],["/archives/2021/04/index.html","50516a23f5427482d7ea44a2cf72527d"],["/archives/2021/04/page/2/index.html","21a90d0294e58c1592bd00ace5ab4597"],["/archives/2021/05/index.html","4880ee8db439a985b149bb67ef8f73cf"],["/archives/2021/index.html","334c64ae5d82c3a4a3cd70c8c4108675"],["/archives/2021/page/2/index.html","941ec21689928b9ac8fa3d11424fcf59"],["/archives/2021/page/3/index.html","19223c41caccbedf8d2df130516e67c2"],["/archives/2021/page/4/index.html","a628c37ee6533c6fe4b637a453b39c16"],["/archives/2021/page/5/index.html","0e4133142ce8ad7427bcf177813bb31c"],["/archives/2021/page/6/index.html","949b3f8ecd1467dfe959db9ec934a888"],["/archives/2021/page/7/index.html","be0b6f7518d97b22e34924d1f26cc4e9"],["/archives/2022/01/index.html","37e36207a56db6d1de474fe1bd5bcb5d"],["/archives/2022/04/index.html","f81ab6a51a5dcc5219b449871e357307"],["/archives/2022/08/index.html","5efd5469669b97a652e313245e3dd438"],["/archives/2022/09/index.html","482f175b0305cc18fe9e69b37ca627a2"],["/archives/2022/09/page/2/index.html","b8b05c01d85dfb41d595f5975c907fb0"],["/archives/2022/10/index.html","02e776eb32256ed77de725fc3f9bed75"],["/archives/2022/11/index.html","670c5d1d666e7a29bd1356f076dd3ad7"],["/archives/2022/12/index.html","fe80d0ab828a16eb5ba8e1495dc6f4ab"],["/archives/2022/index.html","8d570f76a1fcef442a913b100c3447b7"],["/archives/2022/page/2/index.html","256b965a220c8270d614f804d6117b57"],["/archives/2022/page/3/index.html","5e6895220344b2b1079741a2947492c4"],["/archives/2022/page/4/index.html","2a97b96513732a72749dfb8d2d7f1baf"],["/archives/2022/page/5/index.html","4526af72c1eb50102a9471f78c1280a1"],["/archives/2023/01/index.html","6b46996b2fb9d0294d298f66680ba02b"],["/archives/2023/02/index.html","412c0283b3aef3f83dbe9f6b2936b311"],["/archives/2023/03/index.html","c4b9f4c5638ab981f01e44593b20dc0d"],["/archives/2023/04/index.html","a1579eb23cceb666582aa9dfecfafa5a"],["/archives/2023/04/page/2/index.html","3acb483db9400359efd8b6d6e078dec3"],["/archives/2023/05/index.html","be6cc9cc380f07a529097f7d485154e7"],["/archives/2023/06/index.html","e1ec68e24276c6352fe2a3e934188733"],["/archives/2023/06/page/2/index.html","7f909da7ebf52db0a9ab8212444102c7"],["/archives/2023/07/index.html","a93ec1421d4b1a95611d8c25695ece0f"],["/archives/2023/07/page/2/index.html","8c865bc1893d14ae3e0b8716b2660712"],["/archives/2023/08/index.html","ef8d099f1a504298e4218dd708f6e9f5"],["/archives/2023/08/page/2/index.html","1560b218224dbe0c0245345d47ff9ebf"],["/archives/2023/09/index.html","bef4fae9b0771476114349a9c66bc9c0"],["/archives/2023/09/page/2/index.html","7b157f15dd7af8c6a8558f8ceedb1e62"],["/archives/2023/10/index.html","097ee4e3c6d0eb027a15a9d49ea00720"],["/archives/2023/index.html","4d0f3f5daa11c3fc8eb760ce4cdfc50c"],["/archives/2023/page/2/index.html","4e63351fdb58f88706e2b5bf747d3b75"],["/archives/2023/page/3/index.html","a38df0755894839c1c8365f9e148c5dd"],["/archives/2023/page/4/index.html","a26704975b3d7ebaaef7c1ada4fd4418"],["/archives/2023/page/5/index.html","29828921afc3b59981f49f9c7953aae9"],["/archives/2023/page/6/index.html","ee65a1b2785c7f2b969fbd3cd8871bb8"],["/archives/2023/page/7/index.html","d0a16b7fbc58113147d0a56681f82ff4"],["/archives/2023/page/8/index.html","a97508a06d1534a35fb0bc5bb3c3d283"],["/archives/2023/page/9/index.html","d9581b768c9d61ab5dc450623e884303"],["/archives/index.html","4e213a389d272505f7879e742e0638e5"],["/archives/page/10/index.html","b82af2b0ad6a1bf4b8d8de25f4ae0a4e"],["/archives/page/11/index.html","2fb362b427c67e84d347502cfa156476"],["/archives/page/12/index.html","6d358b6b22ba88e5461c92c9cf6d046b"],["/archives/page/13/index.html","5155257d2fa5e19bd0dcb7993a159536"],["/archives/page/14/index.html","c0fb53b99973cd2d5083b1f3bffd528f"],["/archives/page/15/index.html","90f8e9c887191dd264cf464f3f03020f"],["/archives/page/16/index.html","25148a72117b72c26394cb44d14079dd"],["/archives/page/17/index.html","3a39d0db6105acf0a8766183041d9f88"],["/archives/page/18/index.html","2becdf963c43957e525be784bac440bd"],["/archives/page/19/index.html","a2cbf968f849a6cc837d4134e73ce211"],["/archives/page/2/index.html","e142208b482e7080474f6d1158d406ad"],["/archives/page/20/index.html","15da32c1e04d71f261ceb6639f887d86"],["/archives/page/3/index.html","e79fe1f1debb4fb89e24d5e9485ff05b"],["/archives/page/4/index.html","d48257e193ba0255513902ef274187b6"],["/archives/page/5/index.html","f6ceeca62d1b43afee8a70814a4709a4"],["/archives/page/6/index.html","3d7542682fb1e5a35c912a7b6a936f85"],["/archives/page/7/index.html","c57e4bcb2bd966e37ab4544f9dff12ab"],["/archives/page/8/index.html","7e5bc73a296af6ffcac0b15becb65c1d"],["/archives/page/9/index.html","3e1b4202b3da1415502a4f8288c9c2e5"],["/categories/Devops/CICD/index.html","ce7b55ead55e34d24223c13981ab34eb"],["/categories/Devops/Linux/index.html","5bf321be384a6be4cd1315c457fb8944"],["/categories/Devops/index.html","474814dd20eb46b850e2f5ba6e09768d"],["/categories/Java/JVM/index.html","7de4cb3a1a3a58e0c44f4c79b7fe7d17"],["/categories/Java/Java基础/index.html","b2b6ab1139a7380302e0c54cdbc54e79"],["/categories/Java/NIO/index.html","c370e5209c5333badc504b0bb78d0a50"],["/categories/Java/NIO/原生NIO/index.html","b98f4eb89650fd17dfb0d54fe6bb17cd"],["/categories/Java/NIO/文件操作工具类/index.html","51065abb384c97c93c2e899654aef12a"],["/categories/Java/index.html","7cdadf974a77452546b90854d6786613"],["/categories/Java/page/2/index.html","2853668508edce7ffab1c2da84c2fa1f"],["/categories/Java/并发编程/index.html","44fef1a568f79d0fbd182af94c3d9bb3"],["/categories/Spring全家桶/Spring-Security/index.html","66fc30c42109491a716326c383c9d6aa"],["/categories/Spring全家桶/Spring/index.html","fa77827e82cec930eb1884b74829668a"],["/categories/Spring全家桶/SpringBoot/index.html","aef869cb6d74037fe9b9e3c52e8d9428"],["/categories/Spring全家桶/SpringCloud/index.html","0043aa9972a0d38dbdb37e0c06d4ead7"],["/categories/Spring全家桶/SpringMVC/index.html","a6af72ca2191546738eab16d1b41d20b"],["/categories/Spring全家桶/index.html","cfbe3a9c98c421b205000ab13b1fce0b"],["/categories/Spring全家桶/page/2/index.html","02b6a327aa334bfe3ccad74192505609"],["/categories/index.html","1490d823527c7c734b042bb3699976a2"],["/categories/中间件/ElasticSearch/index.html","3e6b1c8b372661f54fd3e2f92fd75fdd"],["/categories/中间件/Netty/index.html","0ef20b638751b16e2a24c066b3f04783"],["/categories/中间件/Redis/index.html","15a9a9065df5f869d5317aaae89e95c4"],["/categories/中间件/Redis/page/2/index.html","3be196d079a87b350db6180a818201be"],["/categories/中间件/Redis/page/3/index.html","dd9864c0404d224bf6059535d67a341e"],["/categories/中间件/index.html","5aca626fff46ccbd87f5cabc1240be42"],["/categories/中间件/page/2/index.html","e56e89c3598e4d10efed1fe2990fe9e0"],["/categories/中间件/page/3/index.html","5aa0764c5e1c71483e610f3b43c6f704"],["/categories/中间件/page/4/index.html","eb349f98cc6334a0c97b950425785c71"],["/categories/中间件/消息队列/RabbitMQ/index.html","017b38317892d3597a08430dcf384614"],["/categories/中间件/消息队列/index.html","d66770d5e5b57c89a2b3d4c379a56c19"],["/categories/前端/Mock/index.html","038d8a1f48560fd3b91e3cb2a11747ef"],["/categories/前端/Promise/index.html","f78e494a0286f1c500b25f3fe71da254"],["/categories/前端/Vue/index.html","2433771219f2a563e10042caf34d7488"],["/categories/前端/index.html","724629dea6467eb618d0212f0d3adae2"],["/categories/前端/jQuery/index.html","4336af931a2ab13dbfd69b031fbfa673"],["/categories/前端/page/2/index.html","e76f09d318722637f955af684f5824ac"],["/categories/前端/原生基础/index.html","71e87a69dbd4612a89b2b0bddcfcdaa2"],["/categories/前端/异步通信/index.html","6c5595eb62a6f889feb470ca9ddb3abe"],["/categories/工具使用/Git/index.html","a52c63b71a9fe517ae876ffcf0371bed"],["/categories/工具使用/index.html","d3cc6dd1e9071ee4436d67d0d4da9ecc"],["/categories/工具使用/markdown/index.html","1f7ef25fcc0dd049696628bf438c40d0"],["/categories/工具的使用/Docker/index.html","442453bb9eea3d731b8098d6eda4ff8b"],["/categories/工具的使用/Nginx/index.html","9560760ba0c6e9916e83027eb1b1eb9b"],["/categories/工具的使用/Swagger/index.html","6adc04c1b4ed0b33b6ce2e1f8f03ee27"],["/categories/工具的使用/index.html","b022db67efffac4b38f175e8e000978b"],["/categories/工具的使用/博客搭建/index.html","e3d77ea1302ea60df6ce83b44c905bf3"],["/categories/数据库/MongoDB/index.html","0460e11dc73c8445ba7a8a4b0fe5f958"],["/categories/数据库/MySQL/index.html","495f8e49d0fa6d01d81f95b5e3f6ebbd"],["/categories/数据库/MySQL/page/2/index.html","e20d6e52418a19b9f12fe9d14951ddd2"],["/categories/数据库/MySQL/page/3/index.html","efab1c4d48b8d12accfc1f53f36ba670"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","f62b9930acbe6a1e8cd67b1c1a13ec33"],["/categories/数据库/ORM持久层框架/index.html","f04b694012da0e65cbce115852adcd4c"],["/categories/数据库/index.html","43b816e9e4e606a8625e9580149fc2c6"],["/categories/数据库/page/2/index.html","e491fade049158ca414db3befc5b0352"],["/categories/数据库/page/3/index.html","1c35e3065189386b8cc3db0c26b3bb48"],["/categories/系统设计/DDD领域模型/index.html","c760ec24f00fae0f14c2c4e7bb03df73"],["/categories/系统设计/index.html","eb45b7f842033b11e6679d83b25b9079"],["/categories/系统设计/page/2/index.html","b1ab717be61ef2a86bb83f94a85bd540"],["/categories/系统设计/分布式权限认证/index.html","711ae196d399185630371432f2d758aa"],["/categories/系统设计/设计模式/index.html","88f0a3eaa62953977f29386e9394cb8f"],["/categories/系统设计/设计模式/page/2/index.html","45de7e756bb1af4bae230836bd34b59f"],["/categories/计算机基础/index.html","ba6e5b124075dd9f49df312a2804bae5"],["/categories/计算机基础/page/2/index.html","7cdbcb597c45fa6b657eccd80390b8af"],["/categories/计算机基础/page/3/index.html","f8e0703ead7cfa5b9d473130197e820b"],["/categories/计算机基础/page/4/index.html","1e74708fa8dd9645d642c0f78eeec084"],["/categories/计算机基础/page/5/index.html","e492d5a9ee8deb37c9560c312b590881"],["/categories/计算机基础/page/6/index.html","2a34e90f2beb1fe86d43745f33df6aff"],["/categories/计算机基础/操作系统/index.html","7686489af79de6480b070b34d7942649"],["/categories/计算机基础/数据结构与算法/index.html","baa6782ac64297fd2804074901c29995"],["/categories/计算机基础/数据结构与算法/page/2/index.html","d2a7612d69c9c6328bd8e760543ac31b"],["/categories/计算机基础/数据结构与算法/page/3/index.html","eb5da6035ed1471d8023a9ea35bdac4b"],["/categories/计算机基础/数据结构与算法/page/4/index.html","0aeae717a845a5e2b9dcb9a1b526f6c8"],["/categories/计算机基础/数据结构与算法/page/5/index.html","943527ce8759340add6cebad5c0c335b"],["/categories/计算机基础/计算机网络/index.html","726f6de8a66971993e54cb13574b0bd8"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","2bb8cd35c8177fc65947f76fbad7338b"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","5dd2482e48aeaf695d658f153577928f"],["/messageboard/index.html","66e358f0a6078e95e933644ea654467f"],["/page/10/index.html","1ff0622d8b1723897e42582f2fca8314"],["/page/11/index.html","4b6bf48fb5a9c035164f97c1485c101f"],["/page/12/index.html","7cf5b36ecfe888976894e8bf100ed7c8"],["/page/13/index.html","7c8028705a9e2773e1a7bcc3a03f1900"],["/page/14/index.html","ba0641291efcc2476f470428f7368673"],["/page/15/index.html","a40178732145bff31cbfa91f93ffc36d"],["/page/16/index.html","c85648ad4cc2e9e30f5ea042896de637"],["/page/17/index.html","ec3ba39c1f266c375f54cf20b540488a"],["/page/18/index.html","4cc814d96202c1440feca63956617367"],["/page/19/index.html","3fb456a73c2afc8394e86fbe961fd7fa"],["/page/2/index.html","bd9fa759e2f0eb725d392602c7e54aaa"],["/page/20/index.html","1a366f55f027e85b862b2aa54f83451a"],["/page/3/index.html","c482708676129d97619135f1b15ccf9e"],["/page/4/index.html","0555d6b909d9ccbc7ccadab81c41b104"],["/page/5/index.html","9c22c334dbad30d0a900a10c574b2926"],["/page/6/index.html","d8f60ffccc7de76d9cb11db177bec47d"],["/page/7/index.html","a1cbfc8a5c4ba9451a0026ede02bbf71"],["/page/8/index.html","c3e26f85772c8d8b2319db6570fefdb4"],["/page/9/index.html","cb7712c0b26f5721feebb9636a447681"],["/sw-register.js","f0662f0747982a52463b59d5b15688e8"],["/tags/Ajax/index.html","72df38ae3c7a0b96f74304b330628e5d"],["/tags/Axios/index.html","7bb61724c3614e74df9f0c6a28435747"],["/tags/CICD/index.html","85de629943ccf5cdec17704e871943db"],["/tags/DDD领域模型/index.html","5d52370cf77ad08f5d43f0036fc38c89"],["/tags/Docker/index.html","22771511a7de077cff39bb57118a6b93"],["/tags/ELK/index.html","3e8f4a36adc6088eefc706fc2fed0cfa"],["/tags/ElasticSearch/index.html","be18e58c2e4e06f51aac6eb30d20d0b9"],["/tags/Git/index.html","8d0a386914dfd0f232896023f2dcbe51"],["/tags/H5/index.html","2908b5b6488a3f260afb71139743f47f"],["/tags/JVM/index.html","b66d5683da7e9fe7c6a6c1ff5ab11766"],["/tags/JVM内存模型/index.html","60882fc53919692b097ec0869f1bbd77"],["/tags/JVM执行引擎/index.html","87f3c3454eb41271db8fafbf83aed72b"],["/tags/JavaScript/index.html","045afb2ca1fedf6f96a53b1d71843bca"],["/tags/Java内存模型/index.html","16012d14eeee62c1156cd27aee6b4e6b"],["/tags/Java进程线程/index.html","5298473fe3fb11b5d89743917a97e7c2"],["/tags/Kibana/index.html","7c2307b35fbcdbc7c45e70053b835b1c"],["/tags/LeetCode/index.html","84e889adacd09cd31e204a4e429f2df4"],["/tags/LeetCode/page/2/index.html","1497b1860f4dd8386214704d95ea1439"],["/tags/LeetCode/page/3/index.html","aa5bb4dc6e6845a221a1b2e38d9d91d0"],["/tags/Linux/index.html","8b101fa2e0dcbcef6cd1ffb665324047"],["/tags/Logstash/index.html","ae655154b313899fc1bda4351f5e8ddb"],["/tags/Mock/index.html","5733541c3fec6175da98e9dbb4e3f438"],["/tags/MongoDB/index.html","25fa6a910242a025444c064794dc1f65"],["/tags/MySQL-事务/index.html","9e2f214f478d3ec3bc5675cac3b87a6c"],["/tags/MySQL-数据类型/index.html","e54d17148c13476237da18436d24b0ec"],["/tags/MySQL-日志/index.html","4d276a355e9235486508126606b3de40"],["/tags/MySQL-索引/index.html","98e489bc52a7149fab4d96a01e5944a6"],["/tags/MySQL-锁/index.html","90392c5c3ec2c8f16e1333d5c7f76399"],["/tags/MySQL/index.html","db2d3fd1a5ab009d1c5fb869d1fd8672"],["/tags/MySQL/page/2/index.html","7e6075b15a3797aedabfdce2425932b3"],["/tags/Mybatis/index.html","00725c463f9c33abb7d2f23b38471b07"],["/tags/MybatisPlus/index.html","912b8baf4a90589fb9700e6fbe4d2324"],["/tags/NIO/index.html","cb23c15bb02e968843e8f8d6e60845e1"],["/tags/Netty/index.html","12f1a95f2c8efa63aa72f875dbba0449"],["/tags/Nginx/index.html","17a4842337487df039695b9a07bb607d"],["/tags/Promise/index.html","3c62c033f287d3ae6f9743585e067b3a"],["/tags/RabbitMQ/index.html","0cf274b244af922157e44865f6ff3118"],["/tags/Redis/index.html","f8bf58f5bcf2193bdc0bf66404f5f9a5"],["/tags/Redis/page/2/index.html","d5b36accdab5a530aa90f2aa2f9fc64c"],["/tags/Redis/page/3/index.html","043197e58b39824508e85f50f0275223"],["/tags/SSM/index.html","c05f6d5ae6aa25e2dfeca12e131a3ab9"],["/tags/Spring-Security/index.html","38c432d3e36010c3800d1b3e9d59fe97"],["/tags/Spring/index.html","d54218a68d93a9663dfd0e95ab5fa2a1"],["/tags/SpringBoot/index.html","46469022fe4da28fb38081a3e7295b70"],["/tags/SpringCloud/index.html","c4464cea467b02cf5f1808cfaaededa8"],["/tags/SpringMVC/index.html","e7ee8e7fcedc6001c647e5e49e9df799"],["/tags/Swagger/index.html","0514b2f9fbf1370cdb354168f79738e4"],["/tags/hexo/index.html","e54105e6ec535d799d6552ef6463b423"],["/tags/index.html","fc7e20ab49b493ee21d323a424029a64"],["/tags/jQuery/index.html","5540991f3c5643dd502b69c14f5fa749"],["/tags/java/index.html","aa1f0e3ad2c6b0146db087de9547d308"],["/tags/markdown/index.html","308fbab465e29e48e15728019453a018"],["/tags/noSQL/index.html","795416ed3c81d9084bb17cc1b17e9bce"],["/tags/typora/index.html","0db127d231a6e1bb15d11c587a155112"],["/tags/vue/index.html","da158b3ea03839a33ab974aa1eebc815"],["/tags/享元模式/index.html","2a4670e830dad18b707171663ed74899"],["/tags/代理模式/index.html","8b7b7930877cafb2486c08537d508793"],["/tags/内存管理/index.html","7321a38c9ef16932ca37cc98059c1dc2"],["/tags/分布式/index.html","e11bc23f2c3eae05bf152b4d1e765634"],["/tags/分布式系统/index.html","e2ca9524a6be02d014519db60d79298d"],["/tags/前端/index.html","7fad545ca35fdb5da02a3858f9f5d79e"],["/tags/前端/page/2/index.html","eb5605577746a0b399e86f3dbdb09fd5"],["/tags/博客/index.html","0a3541ecd6a8636984ac940f7296452b"],["/tags/后端/index.html","f392954cf1e5f884909f6cdefc331da6"],["/tags/外观模式/index.html","fe41832d53cf1863b5338e12c6531438"],["/tags/容器技术/index.html","e29ffc1962f98949bf201ae6e75e91a4"],["/tags/工厂方法/index.html","51a33af8dd8afde8f41a04f7e8bc2082"],["/tags/微服务/index.html","0fe1e771fa866fa93a5fcdbbf6446a4c"],["/tags/抽象工厂/index.html","1b7d98513161af12406b618cb54b11d0"],["/tags/持续集成持续部署/index.html","e22835e4f2a9d7333da68c1fe7556ee7"],["/tags/搜索引擎/index.html","0834fbeef3d3fec589566aed57363e2a"],["/tags/操作系统/index.html","c56f61c741d31f8a50800c3e96bdf4dd"],["/tags/数据库/index.html","633cbf9a486947ed3e922089c2f442dd"],["/tags/数据库/page/2/index.html","67fae6735b449dc583b34282a94b97e8"],["/tags/数据库/page/3/index.html","2668908e78c4adfadbe9a95cb07441ea"],["/tags/数据结构与算法/index.html","ac28f880256375cb32e5178548a3d8cd"],["/tags/数据结构与算法/page/2/index.html","e08dc314bbbc0fb7df74e0128f6eb7fa"],["/tags/文件操作/index.html","3a030d851314c2c439ccb4e4e28779bd"],["/tags/日志/index.html","8143a14026de67678d0c058d41edc8a2"],["/tags/服务器/index.html","0b620d556d7a9e0826cf8ebc058e0f9e"],["/tags/权限认证/index.html","78336c11218e2571f2efb7e10f413498"],["/tags/桥接模式/index.html","e5d36251875a34f456fcf9e274aa1604"],["/tags/模板方法模式/index.html","8b55788c118d42c875460bf05b81c6f5"],["/tags/死锁/index.html","b9e87bb6a4d95e2dab6ac5d04e78d330"],["/tags/消息队列/index.html","68ccf879bff94d4e2ba9b17b6177b745"],["/tags/版本控制/index.html","140d43c79091a7f7e217b918922a76b8"],["/tags/策略模式/index.html","3a8c001288eafedeb194c603b21d1884"],["/tags/简单工厂/index.html","694cb7366dd417da64a02dcf288e811b"],["/tags/算法/index.html","45fcfe0712f6844d3e48d23607a07f84"],["/tags/线程活跃性问题/index.html","f11170773ac33ec48cb1c631f4a6daca"],["/tags/组件化/index.html","469ee32ecadd3c412f7244b23c81f3ae"],["/tags/缓存/index.html","5ba1ef7486f484c0cd50b4fe7522be40"],["/tags/缓存/page/2/index.html","fcd2dbd61ca2553fc3c5616a86cff330"],["/tags/缓存/page/3/index.html","0366cb07331306970c7649fcfb82f6bb"],["/tags/观察者模式/index.html","9017451efed8bd78d7180a0f06e3a770"],["/tags/计算机网络/index.html","fb49967839f54a1f735ef1eb0f68ab7b"],["/tags/设计模式/index.html","b60c102ef03cad11f1f9e3dbbb5bd83b"],["/tags/设计模式/page/2/index.html","141e8719022f8a75391f13c41911b57b"],["/tags/进程管理/index.html","cb2053ce068fee0fdb62e530752f696a"],["/tags/适配器模式/index.html","acfbb304615bfce0355445b7f524bf63"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
