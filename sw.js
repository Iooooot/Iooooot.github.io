/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","6320271326c3272d1a8f413300559a1a"],["/2021/02/22/工具的使用/博客的搭建/index.html","db27c289a6134dd66d68938f8235c2ea"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","d4e3bcee8a2dc8d63284b7cc0a2e73b2"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","c0bab150b9a7481808eb91098dabee64"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","2abdece88bb4f2f10fd6dcb2bf5196ff"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","f48fdd85be38a00e9e1e8c5d2dff89cb"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","2b975f24d741551487ae2843e08d2acf"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","ed3624cdd555654381e3dcda0cfd1922"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","19e0c8658caea342e63f88cdeb839039"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","5ce5565e2bbaac867223b9868a95ba57"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","f1e52c43bfee60e8f472b1cbbda09d56"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","819d60afa8edcfd02565eadf009f7dac"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","b04f7eb869a3a4011cdcd54da8d30dc2"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","a59e34dcf1bad81e8fd349a015a32364"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","2f650eca9259fd82ab59b1b28c1522a6"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","e1c43175c65971b9d91b6eca441a6982"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","20f3d198dec21584fc994a1926de3d28"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","35210d990be0290c6f41f27c5a6b1030"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","fe6287873599f285fd292060d1007597"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","7a622a187ddf760dc77e09680f04ed6a"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","325e809907d752dfcbe8b24a5b17b18d"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","c84d27df7f6bd105edc8f5cb48179205"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","76075fef988faba4b0d992b37e59c395"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","8b2244a16d90eb8866463474b7196b87"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","c1e5a3d6db00e441e6be35a5f18c55e2"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","c9a7a08ed7567ccdf80e0d411ffc88f7"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","3d18a4ecb50b8213249f2a75ffeacdfe"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","b8555192c97fc1610300112eb7529876"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","07418e9f2d69d22d3125dd845baa3400"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","21a5956b6ed0660e8cd438613e17166c"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","dc0312383d0e4885f8aeae9cff0a3b42"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","acf213831d1d237b352827e76b258381"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","f6bdbae9aaad3f48181b7f966153f3f0"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","349e367b5ec07e30dee2ade13168cc9d"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","a6dac5f516b1007324195c18fc00bc3f"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","d62de87235d08b5817f7d612df6fd35a"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","04ed5d9a691d34b6c925a4dae2933340"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","bfd713532496936949e5bdc9159fdce9"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","ed48015690d90a99b88e6e2797ab8e1c"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","01802e34b478ab61bd63188a2d884c7c"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","077ca7bea4b664d30690f43efbf42ee1"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","acca65783ee502bd1c71aab3dd936c13"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","bf6d44c6362ee8f628da6a879535f49d"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","f3a34be65d469224c4415373d75db128"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","d93312a58401d09c034a34d8ca223693"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","359b41e60c359cda932aadf27e53cd5b"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","ac9a7a0fb0560bd90540b56a11190ebe"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","7ade6e703103b56c4f599ae1f9d7a3f0"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","eb6753fc2f5b6323a01aca7c196958aa"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","eb7777633e8d201c542536c3ff960efd"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","1b16aa3d0cdf04b4ec4c575325f0caa0"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","1b5a2931d66f3b5663ade17681fb3902"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","b8583a719e4026697be9f854e1a9070b"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","fbb1328121d0de8a8f9bf97f68d40664"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","a20be0cfc200b81e5e1b083e8616d3d5"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","0ec648a3a7862af7c13731028bd4fa7b"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","bcbff32eda0760ebb8732a469c11d6c0"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","f1c5394f1c84865e33c239d50a06a8be"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","50d28207ae6ed9abdf98b12860d93ea1"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","c73cd8bdcd0d7b9226817006526b7f86"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","ec44f0a5df88878a07130877b3e8ad83"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","dafebdc94f8a0313f82ae4b3a179ff90"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","575647f97065b3b77e8dfd4aca88761a"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","553f222c40bd338f41cc1e3fabdada1c"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","9a2fafe29325eadd58154e65c892e09e"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","fe546fab850e13256462128767e72dbc"],["/2022/08/17/前端/jQuery/index.html","e8067bb0a9b3c672fbb0f4f602965211"],["/2022/08/19/前端/JavaScript/index.html","0592759a9a82e8b065eb1814c8991fa9"],["/2022/08/22/前端/Ajax/index.html","3b3b42ad9e42e81d043d90434a536dc0"],["/2022/08/23/前端/Promise/index.html","18f71cee85833cddc6e999a3c9708ce7"],["/2022/08/24/前端/Axios/index.html","429e09bd08d37aaac990c13b65972615"],["/2022/08/25/前端/H5本地存储/index.html","192bd95912a9365bd76eb175084658f8"],["/2022/08/26/前端/mock/index.html","ba523999cd48bd427a1b8c701122af18"],["/2022/08/31/前端/vue/VueJs/index.html","d4eadfd76d1b22943c76524f515b92e0"],["/2022/09/01/前端/vue/vue组件化/index.html","4700b8f3381858e97e7a09fe0c24f118"],["/2022/09/04/前端/vue/VueCLI/index.html","c1b7b2d92556653e0ee32a4c83463045"],["/2022/09/07/前端/vue/vue实现动画/index.html","e96dcb9f0f3de043b83dbe5826849f3b"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","d03f5aefac962468d4b264d2c49fb896"],["/2022/09/10/前端/vue/Vue异步请求/index.html","2598f8ece43442e2e3fd211a755e97f5"],["/2022/09/11/前端/vue/vue-Router/index.html","46b7d6c559c1ac085a8a4acb1dda2ecd"],["/2022/09/13/前端/vue/Vuex/index.html","1c4829c8493c315e4cdfca6c92483726"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","4ec96916081ded50eaedb4e22bd936cd"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","87d70d3972d95cb497b932d2f7ffa974"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","842e53ced005f5515f04065323361609"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","07b3328a6d42dc4cb54d88242088ff08"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","d02168eea8c6ed2604fc45acc2ec606c"],["/2022/09/28/DevOps/Linux/Linux/index.html","4c0475c66e058206ebdc09e42c3680ba"],["/2022/10/02/中间件/Redis/redis基础/index.html","4df6fa873cd2d1c35a73d49bf7195fa8"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","338c3565685db303e3c34c6375349c57"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","a671aefe4c4417b77f936df17e13b175"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","194aa8788da19cc65b1cf4a43f02efd8"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","aeebab2602559f4ccdbe5edad38c823e"],["/2022/10/17/中间件/Redis/Redis集群/index.html","eb732c6799b20e7f12990d88646a5907"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","31d5510b71bae2a268f267016cf86534"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","938e250fb58d164390b2bae4440a9083"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","5b8721ec99bcd9d310e3add251b75fd6"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","b4da2f9e72e748e7e54aa1910b2dbf9c"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","6044ebb6ee2d0e24deedfe51a9d029c2"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","9b3429fd26b14cfbd63c7badc167ef20"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","e79bffe0830620943b01565d1f7b6f26"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","f61f04acb8c23ff92c9d1f22b60aedcc"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","1a8d08220f299991417b731905b5ba28"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","a13135f80b54543818f62b67ec7fd797"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","c67801f52040332f4d73bc294353d11b"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","b626715e1b9c0819b8b4c7491d2c26aa"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","b9d556ddfe8fb50bd13f2745c411a359"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","c0a3a84372614389ebe422b57b08c845"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","1892071e67f8c96218ac313bbf43aeb4"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","16bba32962ba21fbba55945278434c96"],["/2023/03/10/DevOps/CICD/CICD/index.html","ec2c423819fe74c6e6c4afd16e36aa21"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","6941888ffed809744f8db6c8c9954da8"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","90a0cc589120efe6b96cf033427eee62"],["/2023/03/13/Java/NIO/NIO/index.html","e3f42c6f7a98a09b984dc51f3c7cb953"],["/2023/03/14/中间件/Netty/Netty/index.html","78347d549a8b7f42966ee42489a113f3"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","bdbfc5f57a45e24b073c7760ed9b6812"],["/2023/03/17/系统设计/分布式系统认证/index.html","5ecf3b41d86a34eed1b043abd3284fd1"],["/2023/03/19/Java/JVM/JVM概述/index.html","46b08714c914ee986f870c9345792eb0"],["/2023/03/23/Java/JVM/类的加载过程/index.html","57e0fb2988fccb7359ad757bf9a9d544"],["/2023/03/28/Java/JVM/对象的实例化/index.html","66151cd22482acbd2cbe941115a6d8b4"],["/2023/04/01/Java/JVM/运行时数据区/index.html","7c9d2a2ce2327c7ed35b1498cba0f20b"],["/2023/04/04/Java/JVM/执行引擎/index.html","d80a0c19d4b90ccddbe4b794b21a5e36"],["/2023/04/06/Java/JVM/对象引用/index.html","dc555c2b0ea1ae596d14fec0f169c824"],["/2023/04/09/Java/JVM/垃圾回收/index.html","8a67d2a6b347e79f7b2371705da94178"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","4ea4bda95685dae9a3612e4c2904b1e7"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","d5b56f99c5df60f0d0faea11025e3ab1"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","e4f9bcdd8dbc38e47af2ce5fb9692d47"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","b59a84a0f4120d197471a49a40e27d57"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","5ed08aacc6d5dc40bcbfd00bf326c620"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","94a2f1fc591ef00536f59556508a94bc"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","c4e3381698f0a8d1c9309567ecf0cb75"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","dd81fb1ba318257222f65297490eed03"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","0f28d4409dc8a97665ab3370154d7ef5"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","182151119419da5a4249776d72d07cfd"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","d5849d947fe7a756cf5b335e9fe1e070"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","833962bcae2457c0ff22b43b9be8d967"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","619eb70e461ffa10d2c614bea1d03dee"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","ac2ef894b05019dea4239ad147c6d87e"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","19c41a077f17836dc7737874fdb1bf26"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","cc980a4d80f7960ba02654f15078ca27"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","28741bad7adeb71978e67b89d7731e90"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","bcc594f61ad7ad13089f40702ff07c33"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","8c68a965e30d1e6a6d6acaa69026b134"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","4d8c8f5ee7b14a4f93a18cf4e02a2816"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","dfc43eba06aaf706b8643a3a60da9769"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","d1dfdb9fcdfaf74271cc1c14b150310f"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","2969baab4ea4faaaec5232a71bbf6f7c"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","391c46c3f077737b8c1b6a1399a01967"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","82cad22641811118bb297d7a3fc91570"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","8b547b453cdb72ffa035a3b6bc0f3426"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","698603cea1540be251cdf8e9892633d6"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","9c4d765af5f302c32a82ae253f712811"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","6c6086cc463a68eb8e1ab07c8943cb3f"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","da80465d5011eb43870d0ec97006db23"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","32ad46861872af76cdd5181cf9450a31"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","36e10734890830989d06688b7bd805f3"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","75c1a9fbfb1e51e53b78990c698179b1"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","ee6762f29d181e1b2596c65a9102960c"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","5d100179062a5a06af6ec69f627daf32"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","0102ff016bd3cfbfd4bda80752f74529"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","974c93d9f5439d1e25ac599b50eb1541"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","298d54992fd690e0be88ccf02b823d16"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","72422c6215a088b6bcaae45727ec81fa"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","2bbacae329f74c630c02f786922cad36"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","6222f91a56750fa8e4d640edfdf884e5"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","b094ece096f0de075772e965fc05bb12"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","7285da4779e8c6d044617134d7f0eccf"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","71b6262ad903739e8c704932eb14a3dc"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","287b9a475b4aff8ef8f4bb664e8568b9"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","ac4d2cc22f70eb3b1cc7ef34cd244fec"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","53f0b8388b8e7c9d1d77c80aa4556b2b"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","897919ab5b314fd91b780c241792f106"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","23fd870f6ed364eb2e76257a9a7a4cc1"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","274f9caa358690d17405dcaa0e3a849c"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","83ef54281727b7290a4cfb35410df830"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","95222cd6b35dd2ba8361c018cbf3a04c"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","80b5ba5469c3ecf3298e96977a70826e"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","f54f3f5f5d1382682654ac7eee24db36"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","6602c9002a7312e2014fa6362040e84d"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","8557d12a88ed09c56aaa3835b1ac52c3"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","10853e99281acaf468259848469f2d82"],["/2023/09/04/中间件/Redis/Redis事务/index.html","a67e45938be0ee2767eabafe28f01208"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","45853d2a6dfee6dab8cf809d018b7bff"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","6ab422e9cc8bd8c0ed4093fc71453115"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","184bd8cdd58bba26de2294bb7eb85ba3"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","5153b52440f1bf5b1ee7f95812e7fe50"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","2632ddebb2c4736857441084facd7670"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","dea0805f8224bfe614e2574da60c3949"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","f44a2e84e9ec2e385f304a02681360c8"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","8c098abfadeedde3616b26e112ce2bd6"],["/2023/09/22/Java/NIO/零拷贝/index.html","fe38d7baa188ea26954ca62f774b2447"],["/2023/09/24/系统设计/JWT认证/index.html","5ecb81d51453ac294baeb633a7e80814"],["/2023/09/26/Java/NIO/Reactor模式/index.html","3bf770cb73a7ebd8c5f8e8a3b8d20022"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","6aa224ba63500b284b64e2aae9cb09bf"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","58e2fd51b2fa41bb755a57ff8075aada"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","029e281968568ec0d5d48cc18fc794ee"],["/2023/10/09/Java/并发编程/共享问题/index.html","d8d8eead0e6187eab08fb198c7105409"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","3bb7f6d90b52dcb1aa839776aefe64d6"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","cf83cf8b4d1fbbd931966d913de00f0d"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","15a8eeab49043d31d7efefa506d0a48b"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","a5544ec9f32d79e444d878772459847b"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","0c8f729e6e3cc0b241dfae7cf26fbacb"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","4ad402a501293c4a8c5d097000bfce09"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","6f5557b352bdec45e46234c802021f19"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","1ba6eccbc00d84342e394b74612b3742"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","99ff0676d4dfebe9a35675605c4070ed"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","31344615cc2c311dafcdadbaa14162d2"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","e844f40e6124a71142336a6e99cf039f"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","3d71bc55332a0aee04d4c1305f0c4d2c"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","26a4cce658d6997b715bcbeb3ea0edf1"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","f08a61f43dc9c3775a29caba05c2725c"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","e19f8c3c65b3d38093e97e8ebce3ccce"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","1a787b1a37b37b36ebb56d5bc5ecfa21"],["/2023/12/05/系统设计/开源协议/index.html","a0278c10448e1b80d2621b85fedc3163"],["/2023/12/09/MockMvc/index.html","0898fee70a95f7318c15d2e6ddc00366"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","5479c0e9c52f69d9e5f20bdefa376a5e"],["/2023/12/19/MySQL读写分离/index.html","92ec6d039f28219edddfdfa23ad9ef0f"],["/2023/12/22/MySQL分库分表/index.html","a948544c01c56f2c2d39a3d0da03020d"],["/2023/12/27/利用NoSQL优化数据库/index.html","ad2a55cc22f17968d899c640fc31bfd4"],["/2024/01/06/缓存概述/index.html","faf5ee5f00132016ef9700b458894a9c"],["/2024/01/11/缓存的读写策略/index.html","d79d583f6385a9d9ade46c51db3f5a34"],["/2024/01/14/CDN静态资源加速/index.html","d8f1a0027f68bcdb6d6a6a878c9a368a"],["/2024/01/18/消息队列延迟问题/index.html","78c603314bcc037cd78d2c9c32f5bca5"],["/2024/01/22/高并发系统分布式服务方案/index.html","7cf811013d486a5f58a78ab3a1584c5b"],["/2024/01/26/dubbo/index.html","bb451981f9c60b0a20e615e100ce29f5"],["/2024/01/30/微服务基础/index.html","137cc52c619b7e011222015769fe4ca4"],["/404.html","80c137dd41a595b289d42634a627577e"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","bc090df507441185691c8126b74e36c9"],["/archives/2021/02/index.html","9a1e9e7875e23c845b8deb79cef9afb2"],["/archives/2021/03/index.html","e79f59c05c316a7539f6f0c60f5fef9c"],["/archives/2021/03/page/2/index.html","a75a2d66ffc637677ed6888d8575ae30"],["/archives/2021/03/page/3/index.html","cfb6e3ff4885dc5098a485b18a9e94dd"],["/archives/2021/04/index.html","bddfd0ac7ee54a2ac6046b7f0dbed42c"],["/archives/2021/04/page/2/index.html","10c3c9e2f252d4b48988eaccc42d4167"],["/archives/2021/05/index.html","bf986804b11d33ed04556eff3e15f273"],["/archives/2021/index.html","e8ff5bc2ed35ecdf8e64fd505e169fa7"],["/archives/2021/page/2/index.html","49c47831d0462f75d85e401032bba98e"],["/archives/2021/page/3/index.html","675f36cd7f40e2f26f64cbde6909c6cf"],["/archives/2021/page/4/index.html","615a3d914c6df283778e308cdcc78613"],["/archives/2021/page/5/index.html","c9ac501cdfb5d441e6b161bc6ba7aac9"],["/archives/2021/page/6/index.html","6e716562c552fbb91a50c936be0418e8"],["/archives/2021/page/7/index.html","d4ce7ac380ac4477f26a1db76e00573e"],["/archives/2022/01/index.html","7dcd8f02ccf49bc364c2df381fdc2ae8"],["/archives/2022/04/index.html","dfcaff51b336ab3d4a48d4ddfba0caad"],["/archives/2022/08/index.html","a29b5e8476d4a6303c4080c4f4aa6e30"],["/archives/2022/09/index.html","3db0fa5292c3320009fa03115b24b14a"],["/archives/2022/09/page/2/index.html","4d84d9be68d168d3b6da86b5c51c0ba5"],["/archives/2022/10/index.html","aac7ffc19b1a84aed71a4c84e9d0969a"],["/archives/2022/11/index.html","1e45b4b2fea3f2658ef4a1c6cd737504"],["/archives/2022/12/index.html","88de800edd3a6f82aff7b21b5c4abdb5"],["/archives/2022/index.html","6ef7b94cfc2e2d22077dc87b3065fdfd"],["/archives/2022/page/2/index.html","6604d44a6266a353a5591502c9fc4d61"],["/archives/2022/page/3/index.html","f1a7fa166afb760363d7d122e2d6418f"],["/archives/2022/page/4/index.html","0ffa662b7f0bf2c25314d070d4bf8006"],["/archives/2022/page/5/index.html","d5222762f7ba086f1e44f061baddb7ce"],["/archives/2023/01/index.html","7c6b39e44164ea87d7dcf1366de907a9"],["/archives/2023/02/index.html","e40f761b4ad22839c7d9d94279f004a6"],["/archives/2023/03/index.html","8b84f6adc3dab3f7f73a39e0f589e70d"],["/archives/2023/04/index.html","88ffe994da1c7da3c52156405b7510e8"],["/archives/2023/04/page/2/index.html","d0a37d84f7a376fa8743777473fb6b6f"],["/archives/2023/05/index.html","db4d07f411975a923e4762e8ce4609ab"],["/archives/2023/06/index.html","c4ebaf0477cad8099f69cc4e277b2c65"],["/archives/2023/06/page/2/index.html","01de6ba70774e2fce7921d8372ca401c"],["/archives/2023/07/index.html","c36a6ad44bba24ddd6c6e1dad4d45c0a"],["/archives/2023/07/page/2/index.html","5999dccab49db51ec0db6d3e74260395"],["/archives/2023/08/index.html","167b940b8c57e90cd2627a6d5ddf5c46"],["/archives/2023/08/page/2/index.html","a22731767ad7cd837f4a43aaab9b960d"],["/archives/2023/09/index.html","62635634842ec5c517ede56c7cd5907b"],["/archives/2023/09/page/2/index.html","02cae56a8a200581c3917f9934506fcd"],["/archives/2023/10/index.html","d9045d1d17f36c2904f43b40ed269858"],["/archives/2023/11/index.html","b9b15e7ae924c2b0b5e6015fb0b46fd2"],["/archives/2023/12/index.html","f4cc6c6c66d030b0a121b5ba3f4a36b2"],["/archives/2023/index.html","3408310aecfd044ffa6de84d8246c6ca"],["/archives/2023/page/10/index.html","21e595fb9fbc833a348dc7676206338a"],["/archives/2023/page/11/index.html","73154bedea4c2b4ee843862751f28906"],["/archives/2023/page/12/index.html","3a5c0ae9fd29f40c05a6a4856d120cc5"],["/archives/2023/page/2/index.html","c9b151780419ecaf947a72c49a4f876f"],["/archives/2023/page/3/index.html","c1cc705e71b0659b4f2751aac252c689"],["/archives/2023/page/4/index.html","3b9ea623daec7adf89770bf10841ac99"],["/archives/2023/page/5/index.html","44bfff3949c2c3d9400316133b9f594e"],["/archives/2023/page/6/index.html","345b076ea5570ad7dbeddd85e9bc6f7b"],["/archives/2023/page/7/index.html","91c1ebdf5401e16487424043d4168e99"],["/archives/2023/page/8/index.html","967b763274b16ae1878537dfbc714f02"],["/archives/2023/page/9/index.html","dd0b5527d9d5993161002b0e9545344b"],["/archives/2024/01/index.html","b772aec36835f770965f860d95f91277"],["/archives/2024/index.html","22963cbee6a9ac417590128444142302"],["/archives/index.html","0a5635835609eb8a79bd9e181e3b31fc"],["/archives/page/10/index.html","d3be52ab4b8b9515410f5fa86e0de751"],["/archives/page/11/index.html","4fc08d4ee2f7d885e2aefc31bbc20ca1"],["/archives/page/12/index.html","950cc1fc233ebd731f846530b95215ff"],["/archives/page/13/index.html","fb756ff2c696a8a758ade6e7860c8465"],["/archives/page/14/index.html","04bf16772bf5089bf94d6483dd70096b"],["/archives/page/15/index.html","1ba9abe2c9a2df9b0fde4a45475d5aa0"],["/archives/page/16/index.html","a496b4ad441516373346d903b672dee3"],["/archives/page/17/index.html","46412286b0d8294500bbbdabb63c2d56"],["/archives/page/18/index.html","1c91932442f6780c81df5b3bcd8f3bc4"],["/archives/page/19/index.html","f972ffa046538239091820dd9e64f8ca"],["/archives/page/2/index.html","526aed7701ef97b4a696ef88637ade52"],["/archives/page/20/index.html","61da2f01094b6b1d54672755444af305"],["/archives/page/21/index.html","4e97f716dd008299b22250b83a02d081"],["/archives/page/22/index.html","1b2c87efcba0952af3618d6c72a9aa00"],["/archives/page/23/index.html","ab6e3039bfc2fd89508b132fb50ad808"],["/archives/page/3/index.html","4821f16c5c14648619665fccc809508a"],["/archives/page/4/index.html","2fcb06743fb594728198ec342c0e017e"],["/archives/page/5/index.html","1e2d6bd9fa2f6207013433ae803d7ca1"],["/archives/page/6/index.html","3f42285c6e89bd58c00eb150ad634c36"],["/archives/page/7/index.html","842bbee7416bf83f9299fe30a734fdf4"],["/archives/page/8/index.html","132d24b02bd525b0d29a2e52ce101a1c"],["/archives/page/9/index.html","d6858badc478d7b8e88fbb5f90aa12d7"],["/categories/Devops/CICD/index.html","0e40d9dff9fb0ca52f6329aaf5fca0ab"],["/categories/Devops/Linux/index.html","292b9c57401aa70fbe3a271f3ab1932f"],["/categories/Devops/index.html","82b598d8dc45e61036b99ed85ca5b4cb"],["/categories/Java/JVM/index.html","536ce01126690b0fbab066a20c0e6e56"],["/categories/Java/Java基础/index.html","8eaa8772a8de67f39b692826607709aa"],["/categories/Java/NIO/index.html","fc21a11462ee3869192298ffb4295b79"],["/categories/Java/NIO/原生NIO/index.html","03e67d00a89714e7fbcb22af0cdb0304"],["/categories/Java/NIO/文件操作工具类/index.html","a241dafa0fb162cba106d9e57e2f1113"],["/categories/Java/index.html","cd13ddd238f6e68c755d6d46e9f85b8f"],["/categories/Java/page/2/index.html","55fe764c06f557f8e6e64a7a991c4bcf"],["/categories/Java/并发编程/index.html","114b2f51732d16549c4dee7ba90bc15b"],["/categories/Spring全家桶/Spring-Security/index.html","41272f832d2a1d33e34b2e44daf647a5"],["/categories/Spring全家桶/Spring/index.html","0ca1a2f0d68169cc8dc3b01a75b90485"],["/categories/Spring全家桶/SpringBoot/index.html","646d643f99ef9854622b07609985684f"],["/categories/Spring全家桶/SpringCloud/index.html","9471ddb614ce5e3f6e7f086be7222fef"],["/categories/Spring全家桶/SpringMVC/index.html","166ad9db3254b371c4b2c080dd6cb77d"],["/categories/Spring全家桶/index.html","c12ae2c29b604a435b5f0fb65956a2a9"],["/categories/Spring全家桶/page/2/index.html","4da7032f1ba44df2380db28c10787169"],["/categories/index.html","21e9f254a10f275b945a84988a301b66"],["/categories/中间件/Dubbo/index.html","2ef91ca0b8b61a2611076b13d0bf3b1e"],["/categories/中间件/ElasticSearch/index.html","d54f78a74705a8ec026d07c9ccf89f17"],["/categories/中间件/Netty/index.html","9ac10bc37789c94d681eab7d2b638137"],["/categories/中间件/Redis/index.html","b63990939702ebbec132e41bba09636b"],["/categories/中间件/Redis/page/2/index.html","b630d392b4416347776cddc61d3aa159"],["/categories/中间件/Redis/page/3/index.html","b5876e512f669c7a37dfdfb7109988b3"],["/categories/中间件/index.html","747e298cd9972a63abb87c1a474b08fa"],["/categories/中间件/page/2/index.html","9a6e0c123cd27d212c94ce6427295e38"],["/categories/中间件/page/3/index.html","ba83f506ad60d5d3c30d86271601d5d2"],["/categories/中间件/page/4/index.html","188c5b32c0f408b6d17f7243d25586c4"],["/categories/中间件/消息队列/RabbitMQ/index.html","2c8211dde20632be3d9a365a485668d5"],["/categories/中间件/消息队列/index.html","e5f4106e759117331902336266ea6a58"],["/categories/前端/Mock/index.html","1e6cdc7a4a5a1e1bb048aff7807022b5"],["/categories/前端/Promise/index.html","f3b031b69cbfe590f4c3b81f7982b7a1"],["/categories/前端/Vue/index.html","a8962f8c3a251899b906772aefe4ed1f"],["/categories/前端/index.html","5b48d9ba7dbe6fec6c29b57d465d7e67"],["/categories/前端/jQuery/index.html","460f4bd30b41a47f498c1a149985ac90"],["/categories/前端/page/2/index.html","e662fa8e72ed157d1dadf5e401fc2e73"],["/categories/前端/原生基础/index.html","2afe5f2a155a989b445659d834f54d55"],["/categories/前端/异步通信/index.html","2a744e54801106466677ee16f3dddc5e"],["/categories/工具使用/Git/index.html","8abd99415de4f3df277955d68b519269"],["/categories/工具使用/index.html","aa68968a08463ba807487dc7670f3000"],["/categories/工具使用/markdown/index.html","e2afac4275ea99bc20f62c0eedd553c9"],["/categories/工具的使用/Docker/index.html","083ecdf07ef91e01b849502f86e1db74"],["/categories/工具的使用/Nginx/index.html","b9981c1d8e09643d46e97d97ea342cc3"],["/categories/工具的使用/Swagger/index.html","15099f350cc4f557c36197092e3c3560"],["/categories/工具的使用/index.html","c3913287ba48b56185e2ed04c17a184b"],["/categories/工具的使用/博客搭建/index.html","d16d97c2bbe5cfbb1c454b3320263779"],["/categories/数据库/MongoDB/index.html","aa6d7e02765ba2120368b5e3b2323dee"],["/categories/数据库/MySQL/index.html","304c9b8ea1eb5cbf9289be6006935dcf"],["/categories/数据库/MySQL/page/2/index.html","a46f37647b957636aea947347047a4e0"],["/categories/数据库/MySQL/page/3/index.html","ec5ebb6f04702e0accb14b3e1f42db2c"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","5bbaa116508bac0bb3b4f6df6437cd9d"],["/categories/数据库/ORM持久层框架/index.html","8096aa09c160f943b8eff1b34dc33d84"],["/categories/数据库/index.html","8a48986bbc8637a425e6876f273b8595"],["/categories/数据库/page/2/index.html","e3fa59e605fe1659b3ca3c049da474c6"],["/categories/数据库/page/3/index.html","f40e24019d28fef4b0ac367eb5de4e2c"],["/categories/系统设计/DDD领域模型/index.html","3240b36625b4c857fc89d1b3d250be19"],["/categories/系统设计/index.html","eefafea36f73baa2923f6b0b3b08117d"],["/categories/系统设计/page/2/index.html","45165ee6c96322021e3a6cf2a25d5884"],["/categories/系统设计/page/3/index.html","c8aa73663eeaf48f562885a74b386e4f"],["/categories/系统设计/page/4/index.html","3cde16b0f5581ac075204daf0adac01d"],["/categories/系统设计/page/5/index.html","c7d330aca370e8d8893d341eb0c82cd9"],["/categories/系统设计/分布式权限认证/index.html","7a0b9bea633ca626af5c0f9b9287ecf7"],["/categories/系统设计/分布式系统/index.html","7fe970d39e2f57e4bd70df9e2eb7ec22"],["/categories/系统设计/分布式系统/page/2/index.html","8f0190560457ea26311ac36fdec8b68c"],["/categories/系统设计/分布式系统/page/3/index.html","079725430314005c42ff566b582b49ce"],["/categories/系统设计/微服务/index.html","9eda386ce5804c0404d501d91d3d3d20"],["/categories/系统设计/数据库优化/index.html","3393ed830c367b1b67ca018cefc35308"],["/categories/系统设计/设计模式/index.html","6bc1d5ce4b8acabe42a8f19503ca0707"],["/categories/系统设计/设计模式/page/2/index.html","4407ad223df3587d35e0abae3ca7b223"],["/categories/计算机基础/index.html","c96556912c2595fa60f25fae9c57ae2a"],["/categories/计算机基础/page/2/index.html","2a2714268e2ca3deafb6c2be4aee0666"],["/categories/计算机基础/page/3/index.html","ecacdb199aefbfe5394eb10677413d39"],["/categories/计算机基础/page/4/index.html","d09b5e000d5696735cd297ea5e3c8da3"],["/categories/计算机基础/page/5/index.html","66dc3e8d398ba1046b2488612465b36d"],["/categories/计算机基础/page/6/index.html","620cc27ff3e5951d6896a85263f1e819"],["/categories/计算机基础/操作系统/index.html","8cfa090604655d33888fd0abbac03c52"],["/categories/计算机基础/数据结构与算法/index.html","1550d12e32353db64c06651c832c725d"],["/categories/计算机基础/数据结构与算法/page/2/index.html","4de957a09f8471314c2ba0a186679b60"],["/categories/计算机基础/数据结构与算法/page/3/index.html","f3a383afee2f9ea66cc43d0afd7eb65d"],["/categories/计算机基础/数据结构与算法/page/4/index.html","8898895ba4392b3cd570bb1c47cfc8d2"],["/categories/计算机基础/数据结构与算法/page/5/index.html","71d16e1482d96e3eae77059219f6ce1a"],["/categories/计算机基础/计算机网络/index.html","5255ee0b72999f3c2a30bf053f22541a"],["/css/index.css","2af5ea34362e0b34f799106b2659ad50"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","6a0b78ce7a422f3621d217e8c1e5d4cd"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","fe20d7fadece37d5bbccae115f5dc099"],["/messageboard/index.html","c6d47cb1857bd0e5937182463b679313"],["/page/10/index.html","ce91015444cf61c401161485b8c0a2f4"],["/page/11/index.html","11029d941088dc66e6b0d3a4dbdb3fba"],["/page/12/index.html","fd573a7be1a09888c20ef8edc69465d5"],["/page/13/index.html","b769789893c71e9c915fa2827ab7959f"],["/page/14/index.html","38ae1014171b1d88e2462bb08a7571af"],["/page/15/index.html","6b8c7b27366f7bb180a981e32bbab9d8"],["/page/16/index.html","85f657173f52240dcf48ac79a997c46b"],["/page/17/index.html","99ea84d564015ded2b0c90fdae9efdde"],["/page/18/index.html","51d9d603b3e1d08cd7453997ad442c12"],["/page/19/index.html","fc69d079525ef27137face74ec56adc0"],["/page/2/index.html","fa103427c611671e5c4cc19946002e45"],["/page/20/index.html","92c40f4cdafa075fdfc6e9c9555e684b"],["/page/21/index.html","f784ad117706e7ec22e94e8faf41f736"],["/page/22/index.html","4fe12bd4e2bce3d8379dfca321b51d87"],["/page/23/index.html","87d091527d242e35f3f3989b491a7186"],["/page/3/index.html","d3da3f1765207368536e66ad89f27f6d"],["/page/4/index.html","2219b679976ff2753aac2cd42f1a8e6b"],["/page/5/index.html","3dfc2dd4470bd12c620b0c8632aa5a1e"],["/page/6/index.html","bb057a34df0d2d3d6aa5d2b0672c3d08"],["/page/7/index.html","b05e8b30c532512f1ea566b4c382d994"],["/page/8/index.html","8a4d369e99809953164082cc9297ca9d"],["/page/9/index.html","d71aa7a4eeaf5598d96d26b7de0e3eda"],["/sw-register.js","2c8ec190307bcf52cf9eadc91169ea5a"],["/tags/Ajax/index.html","bf675a2a09647f3a0d5d2f1204c44eeb"],["/tags/Axios/index.html","794516237ee951fa70eac71ff4c91f40"],["/tags/BASE理论/index.html","e3c6c20ab1b43a71355c3a17516c79ef"],["/tags/CAP定理/index.html","b2fa2ecab5857fb03d9b91f74b6a2ea7"],["/tags/CICD/index.html","576935e770e758865ccab92b834f40a1"],["/tags/DDD领域模型/index.html","3cd12f8302ab08b63c0ff09fc3cd70de"],["/tags/Docker/index.html","2688dde6075365bd52a12e69ef4ebbd0"],["/tags/Dubbo/index.html","f9e7e05051632f3b74d960bf956dea0b"],["/tags/ELK/index.html","4924ee44ad55a5698d91ba777fc5bab5"],["/tags/ElasticSearch/index.html","17f8ec1706c0e0da05ca8215079e5c46"],["/tags/Git/index.html","4f53918246d0e01ea5268b0b6b1fabae"],["/tags/H5/index.html","ed8448501061f0476fb9dd1c562bb495"],["/tags/JVM/index.html","f264f008c2e246512bfe1ceeda09a076"],["/tags/JVM内存模型/index.html","bc1a26fa77782177fc9cbb4089339439"],["/tags/JVM执行引擎/index.html","f75e5991611b2489aa07f8b9372a3f17"],["/tags/JavaScript/index.html","00656a5734c8b1f0d92f13cc0f75790b"],["/tags/Java内存模型/index.html","e4418ca0ca234ed1f37082b1c632080e"],["/tags/Java进程线程/index.html","c2e21840fa9d0383b5f5b97b7052845b"],["/tags/Kibana/index.html","69aa6c4a1634d5d03c875bab97eca1ff"],["/tags/LeetCode/index.html","6b83fd91909b49f589304ea99e469f23"],["/tags/LeetCode/page/2/index.html","154554dac60bd6ecff1a82d4a454eb38"],["/tags/LeetCode/page/3/index.html","42333eef9351a95174eb7111654fed17"],["/tags/Linux/index.html","bf96f7ca828718635cdf60347b0edcbf"],["/tags/Logstash/index.html","4a63ad273798721fccf7d5b957350e7e"],["/tags/Mock/index.html","96764d73d03322bd2781bf110da03ddb"],["/tags/MockMvc/index.html","af0c3c58765f4c4ed442f5b785a58da3"],["/tags/MongoDB/index.html","69cf958a2e56bba7e4b62cf954764aba"],["/tags/MySQL-事务/index.html","685c2eec45e38da114618e6e2998daa7"],["/tags/MySQL-数据类型/index.html","d19ff3b5938291f51367cc29899af689"],["/tags/MySQL-日志/index.html","9b6bf9edf1b7871a6125e031571a9920"],["/tags/MySQL-索引/index.html","3339c31c18f57f15e928dfbd4656c553"],["/tags/MySQL-锁/index.html","101cec6d0a3f58d0cfe8ae0e03b7c5ac"],["/tags/MySQL/index.html","237f3e29fce27cc194a3f6983f050402"],["/tags/MySQL/page/2/index.html","e2f8f186efa74cf6c105444896c87ed9"],["/tags/MySQL分库分表/index.html","9b2356ae4b1511ea39d3db6eb783319f"],["/tags/MySQL读写分离/index.html","a11ba1e60185fc4b1265e05d4cfbdb88"],["/tags/Mybatis/index.html","ee70c3681a085ee599542516d0975541"],["/tags/MybatisPlus/index.html","33a70f6f893435b8992fc6a21dbea575"],["/tags/NIO/index.html","98b9b68698fb816a2ec52810b2d7f91e"],["/tags/Netty/index.html","ada20f5e4917a5a33b7bf230b6204b3d"],["/tags/Nginx/index.html","d20e04e7dd49beacf40209ca0e2d0202"],["/tags/NoSQL/index.html","cd57e331faa0a4a406898f03d34b6916"],["/tags/Promise/index.html","3f6d5f3352efff4b5d4dbbf120879d08"],["/tags/RabbitMQ/index.html","7db32a422fb4914063ebe7b5427a9fb6"],["/tags/Redis/index.html","fdf565558286cacb3773d9d2bee8c345"],["/tags/Redis/page/2/index.html","cc9b6c199cd397ef9e444b2d1ecfee1c"],["/tags/Redis/page/3/index.html","e192618a7f7b4b26c4e7ab9b7d39f8f7"],["/tags/SSM/index.html","069d6f3ff028c09f99c816e9271b9d78"],["/tags/Spring-Security/index.html","e1aab8487386354325cf12fcad6378e7"],["/tags/Spring/index.html","2c35b2fb7f14f04e381bb982603fde5b"],["/tags/SpringBoot/index.html","ab5e233d7120612cb0ed7817614f73e6"],["/tags/SpringCloud/index.html","a3c77fe6b90cd607f890c04ea54119cb"],["/tags/SpringMVC/index.html","29d9dab12f6b831bc53324a817cb1690"],["/tags/Swagger/index.html","f2e91a4d5841c2316c308ff9970c7c14"],["/tags/hexo/index.html","2c446d0a5ebbe5717301f3e06721d3ab"],["/tags/index.html","dcad1d3c76cb7436bf8f87e91468cf07"],["/tags/jQuery/index.html","5d4da546cc506bb5d556377de49ecb34"],["/tags/java/index.html","01e87ff95a45ccf7e4bcd76e0b76bc1e"],["/tags/markdown/index.html","46a7679707f0769b3b8bd293c20a9968"],["/tags/rpc框架/index.html","86b4a77f24f37c66f3c98a1ee181b233"],["/tags/typora/index.html","e27822aa48a74a593f999552cf102ede"],["/tags/vue/index.html","ddb92fbac6d56da2d64b82ec3e6d0bfb"],["/tags/享元模式/index.html","14c70c626d7c010db14c97bc4a2f698f"],["/tags/代理模式/index.html","03a67b0902951d144f6c606c08a95122"],["/tags/内存管理/index.html","53cfdaa9332ef3d7f96d2b777b73b6e0"],["/tags/分布式/index.html","ad441a58ce32d67a732b8d868006c154"],["/tags/分布式一致性算法/index.html","4a85848a0142f86dcb454a6b054c90e6"],["/tags/分布式系统/index.html","ddea4e5e2ae12db9b133beecda8774c9"],["/tags/分布式系统/page/2/index.html","88103edd2ea545704432a019d8c9c779"],["/tags/分布式系统/page/3/index.html","b4fe769a81f0f86523124b1e18fbea84"],["/tags/前端/index.html","1b85ad7c59351189d70ab620a886320e"],["/tags/前端/page/2/index.html","63d5c76dc694bf062ae0ecd0537f87c3"],["/tags/动态通知/index.html","2b55f8847951f6fd8f068aaab6eea68b"],["/tags/博客/index.html","7e42b9f1ebe141f26f90d71ad6ddeb46"],["/tags/后端/index.html","cc958e80900309998dd32f96629c9eb6"],["/tags/外观模式/index.html","404692c7fe279b0bd2b9607a5370b647"],["/tags/多级缓存架构/index.html","5d1b55c163d8c7eba5a811c7bde9c326"],["/tags/多线程设计模式/index.html","8389dd0ff4b5a30c10e5339712e7d05a"],["/tags/容器技术/index.html","3a668d461dac71a5c0cafe7dbe7f4caf"],["/tags/工厂方法/index.html","00517369985e5136cf393901dcf639a7"],["/tags/开源协议/index.html","6088130de90d2468507cc787bdb41a5d"],["/tags/异构同步/index.html","8752eab9b6e478501f778ec5f9a35065"],["/tags/微服务/index.html","cd978e66093ccb936b78c87b736097b2"],["/tags/微服务基础/index.html","b56f145cca31c630599303a7ae521724"],["/tags/抽象工厂/index.html","d0f1e3ffeaf55fbfb6a72486fc766933"],["/tags/持续集成持续部署/index.html","bc49ff8788fdfa33a16b476c8f838268"],["/tags/接口幂等性/index.html","bd6f59e924b6a9754bb11a69488020f1"],["/tags/搜索引擎/index.html","ae6392ede36620c2051f239376a63ba5"],["/tags/操作系统/index.html","2efb8a0eea76062284bb35627ed622e2"],["/tags/数据库/index.html","dd24a525ef9a5d900357607db0d3b0af"],["/tags/数据库/page/2/index.html","dfba0ba7d700d89bc526669f2a5021f7"],["/tags/数据库/page/3/index.html","d554380f2c98aef6ace6fc4bf55f3b3a"],["/tags/数据结构与算法/index.html","e2094107b650f033d32a10b93700e03b"],["/tags/数据结构与算法/page/2/index.html","33a5fef4d79601516b88b7a3cc60be01"],["/tags/文件操作/index.html","9fc39f05e9d837c5d494fb7823d730b2"],["/tags/日志/index.html","2c62b3933af78d0e7285b59cb7ae8474"],["/tags/服务器/index.html","7d3a9bf0b2201fe247e2140a574ab8b9"],["/tags/权限认证/index.html","c1cb5208059e7177e23e858cee563c94"],["/tags/架构分层/index.html","267f0e24b4643e304cfc730b039b69ca"],["/tags/桥接模式/index.html","aa08e5a514b84113b5f372badc64aed3"],["/tags/模板方法模式/index.html","15fbe08789ad4f90cdd35d41933ad92e"],["/tags/死锁/index.html","3e0014b6b5abf477abce4f6388610016"],["/tags/池化技术/index.html","09dca853a30677329530c74436ea7a0c"],["/tags/消息队列/index.html","104757cacd0542b9325851827480a225"],["/tags/版本控制/index.html","d1c9887c01dc217fb541091c9423e1f7"],["/tags/策略模式/index.html","6da573c97f13667e709666b0fc3ed8c1"],["/tags/简单工厂/index.html","e0b9d1701c85dd108a4f2db1e2f320c0"],["/tags/算法/index.html","e736a4aad612025177b00bc3ea0afd80"],["/tags/线程活跃性问题/index.html","1eb36ccbaa6990133c28d0f8aad621e5"],["/tags/组件化/index.html","98488b46b407908b621965f215f9c123"],["/tags/经典限流算法/index.html","7ee8fb7ff43c9906ea7941fc808026cf"],["/tags/缓存/index.html","63474efbcaa9a6e97043a70d66a9e97c"],["/tags/缓存/page/2/index.html","1f4c3590d4fc680692572e8c88eeec30"],["/tags/缓存/page/3/index.html","f09b41bab3c0e11d1ac5dcdd91f255b3"],["/tags/观察者模式/index.html","e6a5a2769680483679d309a51f7a65e5"],["/tags/计算机网络/index.html","ce7334c6724c31a514753a28d47bb780"],["/tags/设计模式/index.html","597211e0758dc9063e9a7d89663f2906"],["/tags/设计模式/page/2/index.html","bb415173da3c8f89e7a898cda8b032c5"],["/tags/设计目标/index.html","02551387d623af55f9e3b9057ae6aca2"],["/tags/资源共享问题/index.html","5f3d9c1f5cd63394e5d74cb3a46c07ac"],["/tags/进程管理/index.html","b394a21bb1b0092634957af175b86545"],["/tags/适配器模式/index.html","7c73f1702e0a473726bbbbd47cf5527f"],["/tags/通用设计方法/index.html","374d7c8dd231faa19b5f20d5be795ec0"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
