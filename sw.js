/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","3b68ae729d9a53e4e153ee5e6da80fe1"],["/2021/02/22/工具的使用/博客的搭建/index.html","9f96b18587b22098ef17a25d7bbeb8bd"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","8eac752d3df08663f40de96826730cc8"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","ba80f9532a5f639f602b2db293e26756"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","e3bc70678628419d0b629fda8221d7e3"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","b1ab463bb4b23a1d34bb97ea7df0928e"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","0589362780ec4c0b935bc5bb37f27a75"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","5636385ba7e3182a6c26ddc4b25205c6"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","31be46c4b21fb0fd8c59bd4c5463feaf"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","40f076af4d8db26b1dbff4e3d062a1d7"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","7d49036d7eba8fae63067da764607b53"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","8ebbc4f47148010aa01c9eb0815cfbc4"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","0da62c3359794fa7d0645806a645f713"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","f7ef7ca11c62bff33cd20b682b6dbbc0"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","1d9b203e1c02cba4f2fc74cbc9a4ea9a"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","b6f1bd22c510ee3973f7ceeb046204c3"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","f72209760fc5bc433e71e539b3fadd62"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","3eeee16c4a5a2e3b00e2fd241cd942b6"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","d5b0ef88e0168ac4d8db5bec04c3916d"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","bb0d93e78563639b9398cfb6f274d8e0"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","6be3c82455d24a90160f672195bd734a"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","789fe2e3fd4efbdb6e70cc520ca0a114"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","6095d411fbae47c2079fbe482d7b1971"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","c579a947717d4cfbd11000cc025b06b4"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","fa9293e4c97b135f5cc56c99fa1b70a2"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","7e7b4750ac9ee69bcd5930740c8600b8"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","213b0fe60dc5247eedca21ab7a2f2e9b"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","956df94f3d46f029382051292fae4f3b"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","130ee48b85a1b7f2d8609ad68bb34b24"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","6595d281d41af1c3dd83055645c53b04"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","4a2003e1ce79951bb2a759b0ad4c463d"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","88464b7cbcb9aad9361b604f18f8ad9b"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","f1000dc148f1e3c755a393d484721994"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","7f65b2e77ff811b7bdf7d5cb84826738"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","2c33c1b34dad2370ca0773193e08dc53"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","c8a31dceec0db599320ff9c52068fc5d"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","281443458afdde812f20ba10ceb8faaf"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","b685e5a3bce9b6ba15ba175e6b8281b6"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","ece21690a6de3c259a5886df464fe0d0"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","6f1dd3adba5608b3a4dc467b65b4da5c"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","7220e652508a31203c2e8671243dadbd"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","dedfbe78e3def6dfa46ac762d62094fa"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","4f90b4aaff5b7fefed9cd57dae94b196"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","2fbaef46eef045665a13bab9c7c7fe93"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","0485aa3b55ef171ffa6749a48dcb2a77"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","b68dc073c1cda06ff1042d0ef1fd9223"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","60579c1e73235d69c4f421d950436fcc"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","989d46a9986bdad04bf6854dd6f7499e"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","c8d66e4a55666a72db4fb5763dc7546c"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","b4f1692299da95b6e1e60d1079c8e1ba"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","7a5cb28b815aa4c7f27716ccd13ff13f"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","5fa07fbf6034b4864c4d8e20482136f0"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","a004d5c3b7555bd16e738330ebee85be"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","6623f2c430f29e8b786d77a17c1d4c17"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","f62a533dd8980f9c71a9f6b4f55e99ed"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","4fd2a3f40ba38ec289526f00eaf28a90"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","9a2f46018f12535f4187c777bf3232b4"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","f9358a693b3714f4007bd59d59a32f58"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","13c76dacf9d00754fccd57073d359828"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","6cd29d88d788ea70f550b606df236500"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","85ec869df2fa96d3a03910800546ea22"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","09694a71d6ab6f7de7bd902d48586c9c"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","b90f2758565f9365200161883161dc35"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","625af1d502ceced7c2b3523b55e43701"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","9b1bf8c047b40b0beb281cf8d9a23952"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","2198d64f351fe0346ca47deb7b28c262"],["/2022/08/17/前端/jQuery/index.html","989ab33a6e6cc84b39a05cab3c996bf7"],["/2022/08/19/前端/JavaScript/index.html","eded755a9168b978fe1c045d8dec4d37"],["/2022/08/22/前端/Ajax/index.html","84e58f8ace6f4d2b6a73e7cdc51165ef"],["/2022/08/23/前端/Promise/index.html","3bae6a5bba18f1880940cf0dd564e4de"],["/2022/08/24/前端/Axios/index.html","a9d7a9597f62e3edb8e69192bfb0c48e"],["/2022/08/25/前端/H5本地存储/index.html","104d8856fd164f96c9ba617c0d9079cb"],["/2022/08/26/前端/mock/index.html","22cbbd04c42d119fdca6cb243dfc351c"],["/2022/08/31/前端/vue/VueJs/index.html","be81f6713cf4952beed8251fb13a4237"],["/2022/09/01/前端/vue/vue组件化/index.html","d5a3ce5975a1d5e0ba9ed0e354dfc8c2"],["/2022/09/04/前端/vue/VueCLI/index.html","a413c54f65779df9a94f29b0514f539e"],["/2022/09/07/前端/vue/vue实现动画/index.html","766d6c6ffc0a9dff34dea237647e7d0c"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","84af75ced97a060fbe6fa4466be6bd50"],["/2022/09/10/前端/vue/Vue异步请求/index.html","30d81a7a761d6c906aa6eb48e2ad893f"],["/2022/09/11/前端/vue/vue-Router/index.html","52b0facbeebde323bb90f67dbebd6888"],["/2022/09/13/前端/vue/Vuex/index.html","5e155b721609f5701899563c34ca95bc"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","43d9ade3d83bc41a32d99ce6926d6821"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","b5ca104854411a545aa2d160640b27dc"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","69fb200696f80de58d1a3a9d69bf2dae"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","5dbd2f3c219ac7137bdc27f0357ca701"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","5e6a2e9c224239e5aa374b9fd30711f0"],["/2022/09/28/DevOps/Linux/Linux/index.html","71a4b8b67bd19dd396fa5da325c886b6"],["/2022/10/02/中间件/Redis/redis基础/index.html","f819e8d7e6e8685b2baad502a301b06c"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","a28730ce77e949c364d1e917a7d7444c"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","d6d6c94744dff2466c7ad1eb8fe38fa9"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","20dc0b06d3c46c7dd9ba8d58343ea846"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","202686c9de9f810148fc1f2682d08074"],["/2022/10/17/中间件/Redis/Redis集群/index.html","cba26e261fc4ab945c36493a6589ceec"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","55e668cd0020f02b249ef0843a16abee"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","078f46de4bd56a24d102ac3ed2a358b9"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","7e4ab4fe438c253dfafde51c548e37d2"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","96b6d2faff769c304c6acf8375697a84"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","2e0797840070373eedb56864742ab33d"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","47d661b4d39e2b71c1a564bc4d0f018c"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","039af616a8314e36d3605de018b8f9e3"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","61193f804b7534c10f3d4652e31c5de3"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","d7449a1f3b9a2af7af5f5c6697ce7212"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","070b1ad4d89c5040a13676fe5c2d44ef"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","7fdfddc589cf51544328c74d436b1c46"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","53a9ac9f4a806d551a4f56c331a79134"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","73bad2ba70eaadbf604562a865bc9fca"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","ebdb4b85782749a05d026d85683198c3"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","1d67b0549169ff80835a9c82a60b0198"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","e251ae88542faa2cb42fb2ae40ea13d3"],["/2023/03/10/DevOps/CICD/CICD/index.html","91771c614a94d3ce0dd94a2c4d4812ab"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","4cf9b4ed2ae6fc713d1d4a399ca9e323"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","80bfad0f1cb2ab1a05b72aae9a283881"],["/2023/03/13/Java/NIO/NIO/index.html","200619c689310e27b1c41b5df6675ac8"],["/2023/03/14/中间件/Netty/Netty/index.html","b9df7f3254e177e4c62bd004d69245a1"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","adb162f6a32325760e251ff0f7b995cb"],["/2023/03/17/系统设计/分布式系统认证/index.html","0dde518f9985dba9f101038b7c28adaf"],["/2023/03/19/Java/JVM/JVM概述/index.html","eaf52b5b05d7f707227f1a55e61ef9cd"],["/2023/03/23/Java/JVM/类的加载过程/index.html","bcb6c981ff8f24eedd0f09a1bbec76c1"],["/2023/03/28/Java/JVM/对象的实例化/index.html","079df50565f00bb1393a2b310a71fb68"],["/2023/04/01/Java/JVM/运行时数据区/index.html","a4238b99da642a3b0293ace9cec48a47"],["/2023/04/04/Java/JVM/执行引擎/index.html","3060339b3adc39f27973425674cee22f"],["/2023/04/06/Java/JVM/对象引用/index.html","10b5262d66e83752a776ddf227fd43cf"],["/2023/04/09/Java/JVM/垃圾回收/index.html","ce1c09be12eb74829608c2129327d055"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","0ac178337b4ccba6c98309b6c9cc85a0"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","02fc4917e45d9d5b955c8a048320e364"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","3a065ad9c104798a404a78fcde9ab58c"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","947f02053408d8e3e5f53df5c36675c4"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","8a6200723b606270ce7a99950373ade5"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","825eed291151414a22ba6529eaec150f"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","1ce3f4ed2ab52d76dfd1969af2a83dd2"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","b6301d0b7e8f8c3d561e4131d262dff1"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","052f136878cf67a9fdaae76d8f97a6a4"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","8cbf66097c42588d0ee9457caf11c4fa"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","aa78a1e359ccda14c5a7f6f7f669658d"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","720be523c19bb89d6a05f484b6a5b19e"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","94503d62605a85aaaab9b83cfc7586e3"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","390803be84db2b377c3951e6bb1eae3c"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","d7dcc824aab51b1b94a29eec20188c74"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","4d8714ae2e1cf56c0890478372316392"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","41f1bfd9984b3592c122da93ad795340"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","5151a477a8a90ee1ee64d4f0f9bc2045"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","a147cf6cddc955e5bc89d52581569d29"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","955c4043073b71cb36859b010b917eda"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","f8c2075eab56b717cb1fcb9bab76e074"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","acfe921e3241f9aba395427abf875111"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","a4b7f12c85441d94e30b66e20e3ecd5f"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","a14dedf4d9c7f644b223e32bfdd4f0fb"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","ba7389e26dbc9df31a5285029ba309f6"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","1cdf70820827c847a7f39e876c6e1c49"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","ebf7aca590712da66e51fadef9b1382e"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","0fb1816902f7b41aec2f906c17cae831"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","cc82b609feff8b1b40c25b4cd9f97ef4"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","d9f50d4569096277757bf964f809db96"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","8f1cfec22b3cf74d6536cd1b02f69684"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","8f96cbf2b1720da82f93e9b07571c047"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","ce377a1ad8c465a724b42d5936067f71"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","9e562d3987d0142628f41c5107347cf3"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","c356fa0ce35e2bdd829e724e5a62724c"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","48dd37c0c8d943bcd925a02df68997bd"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","f416f321ef77c76ce2c679e22f1b8d76"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","a777ff68cf6434b51fb3f2f4a9fbde00"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","1b3c4505663cfcf7a8d0b2404893a34c"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","70ebeedd18fe09fad0429bbb07fd56f9"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","64862787ee625fb0391e62340a40b6a1"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","da08221b17197e992adf6f51e2d3ea05"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","b9fdba032272e0af223187de1dff607e"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","101e71b3e4edc917ecc7f46520dadb16"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","c16f9aa261a0fe8c319a6692398a03fa"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","9aabb7c8c8ff4245f85a1632c1de4068"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","5176f2355e1d8e0d62e16f3f187414d1"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","2c8f84fa17933c0dd01013368c48ba67"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","a73d23dc88761f02e0b76b533aed6233"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","086578b5270029ba28b50375990c75da"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","dd4b76301736ccf0303ace2736e3eaf4"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","6819e2411ac7677ad49959d4d40903ae"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","344a041dd46a520148a93d8fe6a41063"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","36c2e1e8e3b3308d0a2b432b84ea070c"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","668c7bebe295c878f695160ab16ca520"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","149b13546b9509a16c2ffd96b163d839"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","deb5ed1c88da2177ab63972a92f53c14"],["/2023/09/04/中间件/Redis/Redis事务/index.html","ea25e1e7fb6e3cb37c138e82f15a531f"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","7bb34fe6ee1e108cabeee304f685067a"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","bd1535e17f8be3e09d7cb92e72f665ee"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","4dd64d428e71e88f0c7ed3d1249f1f9f"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","54a1630a0a7f5fcc15aff294f47cbef2"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","aabcdb415752c4c6f10e3180947782ba"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","fdcff1df2711fdf143853cb72a49644c"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","2c0ebb0923b4c2f258b2014a6f1b6336"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","2740703aac295d2ffe13458596ebd4b5"],["/2023/09/22/零拷贝/index.html","7a18d376881fd6575b28d0c17fcf9979"],["/2023/09/24/JWT认证/index.html","fc5deea6cf250341d58e0a900a555e48"],["/2023/09/26/Reactor模式/index.html","409bcd028cf92c0278535b536b059345"],["/2023/09/28/Java内存模型/index.html","4675bc58e0400f3cc828989e242ac3ab"],["/2023/10/05/Java进程线程/index.html","5c7782cd6c64f5d7d188742892b7d48e"],["/404.html","13e41190a78a6bab9d5d552816eed8d1"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","5dfa4ae22ff9807dc64e0e06068896b1"],["/archives/2021/02/index.html","12533bd0cd27e3870976dcfc342de5a7"],["/archives/2021/03/index.html","78519fe94e99c362b4f3a619360b457b"],["/archives/2021/03/page/2/index.html","212d79ffe986ff92224321f8d7ed09a6"],["/archives/2021/03/page/3/index.html","97ca9fab26bf7a9e2395f3fd8bbeb4e9"],["/archives/2021/04/index.html","bce90ea2f4ca30416ba1206cd8dee988"],["/archives/2021/04/page/2/index.html","85451c59264c430e6841bccfc5df8ce5"],["/archives/2021/05/index.html","6e45a5a87cc737f7fb5d59d5c4c21676"],["/archives/2021/index.html","11c58a6a59ee71998894d6cae5bdf532"],["/archives/2021/page/2/index.html","5166066647f52969f74ea14b0fc0dcfb"],["/archives/2021/page/3/index.html","e0a46dd215281d0a99fc5a672c527c2f"],["/archives/2021/page/4/index.html","7b6b012b3d1a173afab0965d8a7b0087"],["/archives/2021/page/5/index.html","59b3d031a4e72505e25871634eb23c36"],["/archives/2021/page/6/index.html","ab0dadf491176de8d2063276a651ee0e"],["/archives/2021/page/7/index.html","ca006689ed762aa24a889a414d0d45aa"],["/archives/2022/01/index.html","f56a23cf9bf19f7fcee0e8cd5e3c1ee6"],["/archives/2022/04/index.html","004eae44854be7e2cd09cf90a7d1825c"],["/archives/2022/08/index.html","6ad86e8dbdcccdc1c0740a7ba731636f"],["/archives/2022/09/index.html","225f951d65a2700ffd07517c2588e400"],["/archives/2022/09/page/2/index.html","a051eb449f22de309d48561088df8e41"],["/archives/2022/10/index.html","52c3224b05a312665a554e9da51119b3"],["/archives/2022/11/index.html","83601458e4c8d88e2b6e9a1e49a8bed3"],["/archives/2022/12/index.html","f38a8613a2a174506e3015ca84c43e0b"],["/archives/2022/index.html","ffb26f7db433d2cdb546f8fb609a4743"],["/archives/2022/page/2/index.html","056f93c3ff8081a4df76867bcc5cf7b6"],["/archives/2022/page/3/index.html","69e72868e91a375223b5a1652a6e9043"],["/archives/2022/page/4/index.html","5ab57eb700f843c3f6b4741dc41719dc"],["/archives/2022/page/5/index.html","6b4a4a6e69ae8d906455c82a9dc5c1bc"],["/archives/2023/01/index.html","94eccaf84303accdd0ee1279616ba787"],["/archives/2023/02/index.html","4b935d1051b2c9cb70f779a24d9bf338"],["/archives/2023/03/index.html","e92ee32412969e31c33d5333d99b7710"],["/archives/2023/04/index.html","6deb766788b6cf174c470316eb13b820"],["/archives/2023/04/page/2/index.html","9014a523eb6b08552d3b1be477cbd981"],["/archives/2023/05/index.html","68f3f3fae7251f615d76e97b0fd3443a"],["/archives/2023/06/index.html","43b24a5590525a34bc3238ded35295d9"],["/archives/2023/06/page/2/index.html","3afb306b6110e7979b51ea87f97556aa"],["/archives/2023/07/index.html","ab569f097f2c3497ea38250baf19c457"],["/archives/2023/07/page/2/index.html","3e9f1d1e8fc0a268d70071b677363231"],["/archives/2023/08/index.html","2b61849405f80413b69efd8ddd9c6826"],["/archives/2023/08/page/2/index.html","b3ea72fc9944db17c48a78c875ef4112"],["/archives/2023/09/index.html","81e6370ad738fc75aa2589325bee5564"],["/archives/2023/09/page/2/index.html","826349e510168aedbbd0e5584c05ac5c"],["/archives/2023/10/index.html","ddbdb56cd5a6b0cfcc3730320c846910"],["/archives/2023/index.html","012b87faa2d2211f6debe1dba53287df"],["/archives/2023/page/2/index.html","d6d6924e71883406145644820620b968"],["/archives/2023/page/3/index.html","f11a2d43a755ea898a09eac8646f0f9c"],["/archives/2023/page/4/index.html","74aeb80e577f6c806ea9f2ae96f1b19a"],["/archives/2023/page/5/index.html","023bdfad017a36641d8e7decc8702be3"],["/archives/2023/page/6/index.html","521ac49cbdfda9a8b5f246fd29e1ed13"],["/archives/2023/page/7/index.html","27c58e9a9cf07aaa1b16182081d6eb3a"],["/archives/2023/page/8/index.html","8e35ea7b9fc33f6b02bc5037c1c2bddb"],["/archives/2023/page/9/index.html","6cdcf522e473df6f75259008a6952880"],["/archives/index.html","cd735596db8bd07d111bb59769d5289d"],["/archives/page/10/index.html","ed40bc99ea4ff5e56781ce6384efe912"],["/archives/page/11/index.html","1c1938c988e1948f5fb9118f0a925798"],["/archives/page/12/index.html","7c11349fa341f90c3d4f6ea8952a99a5"],["/archives/page/13/index.html","32170a3592d4fdca9a33659d58158bd6"],["/archives/page/14/index.html","48f7aec7e72b8e46eb938e6c000762b7"],["/archives/page/15/index.html","187478b2c0a379639931ee5fcf6b1d77"],["/archives/page/16/index.html","3fa4c34da8b48e61b6d7bb9536f4fc38"],["/archives/page/17/index.html","2a394ce0be605c77dc56608272469a6c"],["/archives/page/18/index.html","4685555f58a021d51b5505bc45ed39b8"],["/archives/page/19/index.html","92bea059589a89ea7591bd63944c15b7"],["/archives/page/2/index.html","be84225ce39b28eccdeaa974f2090cfc"],["/archives/page/20/index.html","0cc0628f02b9db6424d29a02ba28995d"],["/archives/page/3/index.html","9d2eb387e71f3d09def9ccf2f2885075"],["/archives/page/4/index.html","ee503d1cd68fe3d393eb1206f29f24b6"],["/archives/page/5/index.html","47fb1134e4b4f0c5715f25a9f743f585"],["/archives/page/6/index.html","8dcc4f605b4246d34ffcadf30515ef7c"],["/archives/page/7/index.html","5033dff82ff5e6badefd1716e28b2c7a"],["/archives/page/8/index.html","67831b8ee7aaf7c75f19982ca88bc795"],["/archives/page/9/index.html","020506b7bc8261f453994a71a2d96b90"],["/categories/Devops/CICD/index.html","80757b47361d7da097ee1b5720f0c163"],["/categories/Devops/Linux/index.html","f3109030742d0aa9e967c0f7a887ad29"],["/categories/Devops/index.html","af6db9a374a636faa878666f427d8604"],["/categories/Java/JVM/index.html","f4459a6dec9f1fba64e061b3e9b2132b"],["/categories/Java/Java基础/index.html","e27d7624b5dc1fa420cd9bd7093ca642"],["/categories/Java/NIO/index.html","fe377ec700997bedd3917036760255fe"],["/categories/Java/NIO/原生NIO/index.html","e4c7cb7f82e0b4dcd34a3a34f4444c69"],["/categories/Java/NIO/文件操作工具类/index.html","f68fb5791b5f6843d5dad062ede21f9b"],["/categories/Java/index.html","50c92ecead1095826b0b964ff975a707"],["/categories/Java/page/2/index.html","616f3bc1fa45d8a391e7023956efad78"],["/categories/Java/并发编程/index.html","4594d531e435f690663800fb419520cf"],["/categories/Spring全家桶/Spring-Security/index.html","72539e28daee31425c16d4dade6e35ff"],["/categories/Spring全家桶/Spring/index.html","a1f504a76c56379f4a962fa4d56d9322"],["/categories/Spring全家桶/SpringBoot/index.html","b503ce8964524e18d3b4b16229a29d90"],["/categories/Spring全家桶/SpringCloud/index.html","9a51a14d113497330c5e74a193d93a07"],["/categories/Spring全家桶/SpringMVC/index.html","17319dd14c6c1396820ad5e765de4d32"],["/categories/Spring全家桶/index.html","7fe388949862453f947fee2200bf09e9"],["/categories/Spring全家桶/page/2/index.html","7059b2bd9285cd57b3f4da24ba7457f2"],["/categories/index.html","6255594b4c401e5c570c86526d308d08"],["/categories/中间件/ElasticSearch/index.html","347de7861601cf5ac8bd167fc82fe71e"],["/categories/中间件/Netty/index.html","e565b780a0a7748ef148f9d3cf5bc105"],["/categories/中间件/Redis/index.html","3203c85a0cfea64a669f6f4cbd76883e"],["/categories/中间件/Redis/page/2/index.html","cbff7c9a415e68c1c30d341715283748"],["/categories/中间件/Redis/page/3/index.html","c584c8614bb844f0e8ab2be4bb8fe408"],["/categories/中间件/index.html","6d7b8b2d8cb30278bfce29b56369cb0f"],["/categories/中间件/page/2/index.html","d069c1f263f824aa1ca67dd16d5d00e7"],["/categories/中间件/page/3/index.html","d1affc107626020b8d90111598738d20"],["/categories/中间件/page/4/index.html","3ba6eb62a20b2a50dd797145ab167fda"],["/categories/中间件/消息队列/RabbitMQ/index.html","84542e0e1caeeaffc76cf97ca5aef613"],["/categories/中间件/消息队列/index.html","69fb501ad45f41d1d3463b9a294a7e3e"],["/categories/前端/Mock/index.html","951bf67927c5dc206c4df68e96d9e15c"],["/categories/前端/Promise/index.html","b0c3f207c39d82a66ed2ca3f2b38d9a8"],["/categories/前端/Vue/index.html","bc7f0511ce7b31d93def3ba59a97d635"],["/categories/前端/index.html","d5ba13f08eb4e16bceec187fb6de34ed"],["/categories/前端/jQuery/index.html","5d543e4f6cf2f3a986be053bd1932bc0"],["/categories/前端/page/2/index.html","4fde01a53af3838d47d6269fcfe203b9"],["/categories/前端/原生基础/index.html","3dc352983e4133afe2cc029943cb8c96"],["/categories/前端/异步通信/index.html","05d5b4fd1b2b0b809b8c608fd9b83b1d"],["/categories/工具使用/Git/index.html","d65cba5f918cf58aa6b2fdabd68c055f"],["/categories/工具使用/index.html","922ddc340d48002e9f008497062ee7bc"],["/categories/工具使用/markdown/index.html","6e5b0f172894e81e8f1be6b3e51e5e41"],["/categories/工具的使用/Docker/index.html","b7897957e7e15b378907bb96c6883a0f"],["/categories/工具的使用/Nginx/index.html","af3ad8ea4f2962060e1945cfd8e5d30f"],["/categories/工具的使用/Swagger/index.html","5c074b80a346b0086dd8dd2490ee0b61"],["/categories/工具的使用/index.html","560092c39f48f043a0df55246cd08f3f"],["/categories/工具的使用/博客搭建/index.html","fc1354a31f983bf4e578a04eb829e727"],["/categories/数据库/MongoDB/index.html","d3422ce0ab0e1455f43258c879ce6ed6"],["/categories/数据库/MySQL/index.html","58ad79c706830e1c546800c19c74013a"],["/categories/数据库/MySQL/page/2/index.html","7dd1b10dd9c8f69dc80f0891c1d6b5fd"],["/categories/数据库/MySQL/page/3/index.html","e11a12f2dd3c4d21039da364e48a6392"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","4806b72b68e11b45a4cc06335d5537da"],["/categories/数据库/ORM持久层框架/index.html","0c695de520cabe9214b6e036451d9877"],["/categories/数据库/index.html","597a28ef34ac0e572b1b16cab7fc1cd3"],["/categories/数据库/page/2/index.html","88e8a166b381e32a09a1dbd52b2fba1b"],["/categories/数据库/page/3/index.html","3fb1da93831eb512bed8f14e04cbe455"],["/categories/系统设计/DDD领域模型/index.html","d30a47ca347bb6aba1a9c9d8c9c6f8fa"],["/categories/系统设计/index.html","4d3342fb73d0304250218006d5c926a7"],["/categories/系统设计/page/2/index.html","453dcd7493fc7cfd53b84665523f2ced"],["/categories/系统设计/分布式权限认证/index.html","86efb469f7b25fe0061f460827af9f1a"],["/categories/系统设计/设计模式/index.html","d8674633b8856b75a625896ac71db150"],["/categories/系统设计/设计模式/page/2/index.html","27a54c6d314f8b63d2ac1453f675cc71"],["/categories/计算机基础/index.html","25b30f96eb3e9389d93ccd9ba33061fb"],["/categories/计算机基础/page/2/index.html","fe8a2a9c14de191208d594089cfb269b"],["/categories/计算机基础/page/3/index.html","3d35d255a54a2b170a8e70e5f0a17df8"],["/categories/计算机基础/page/4/index.html","f5343a6559c3a1982595bf54ccefe0fd"],["/categories/计算机基础/page/5/index.html","f2f883750ec16501348e71076c303a5c"],["/categories/计算机基础/page/6/index.html","50c37a57574ea2abd032fb26dfc13da9"],["/categories/计算机基础/操作系统/index.html","a890f47abcf9524e019d7b67431bacdf"],["/categories/计算机基础/数据结构与算法/index.html","5f065446885e9eace77a6ef3528c7d3d"],["/categories/计算机基础/数据结构与算法/page/2/index.html","3a87200b8228280af8a78aa67deaf1da"],["/categories/计算机基础/数据结构与算法/page/3/index.html","15542fac973b9aecd123802163aa3d34"],["/categories/计算机基础/数据结构与算法/page/4/index.html","b7d4d8cd4475e9dae5ecf2dee19912a5"],["/categories/计算机基础/数据结构与算法/page/5/index.html","65afa1d516663acf7787f1992d75196b"],["/categories/计算机基础/计算机网络/index.html","3a88094c6c93d2c53c3bb23dd5873a78"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","9e304bfb5d5d8cacd0c0e42f7e279947"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","85715422102ac7d8a439a3b00edd4e36"],["/messageboard/index.html","b421693ab75826e09ab9119bce213161"],["/page/10/index.html","d570fa209697b94581d9f2c8bce8600e"],["/page/11/index.html","c66f5d3c8e27a6a4fcf864365d5012cf"],["/page/12/index.html","d584a38848f3c1693edd2b48ffca7de8"],["/page/13/index.html","6a0deebef25357db91ee2c898056f36f"],["/page/14/index.html","65f307120cb830f583df6b2c8176d6fd"],["/page/15/index.html","e69f67ec9b4349883d52c22bf7d21848"],["/page/16/index.html","606e3f69540770d33ba09b898e2cda8f"],["/page/17/index.html","b3f6950e2522b62155bdb199c820a39e"],["/page/18/index.html","d5f21ee1d2e2e351d219a41c69d1dbd5"],["/page/19/index.html","0222a6c3d5585fcf653b6ccf3b139482"],["/page/2/index.html","fdfa1362d4930beaa70df254f3fb1589"],["/page/20/index.html","5f02745346409b65179f903f2222d735"],["/page/3/index.html","6b55fabe6d1d2607d244d47ed0189d50"],["/page/4/index.html","37045ab87059831ddca42905b00215ab"],["/page/5/index.html","86a4be88fe691e997c5a73b4ba3c9c5f"],["/page/6/index.html","fe5b3ed0d8a8484e5c34ef9b07046ce0"],["/page/7/index.html","6774b0cae751eaf2221e87e2904a3ab3"],["/page/8/index.html","501c6e8a18f507569322049eb0d7ecff"],["/page/9/index.html","b068b60e5be71b5795e2e8c63df8ac16"],["/sw-register.js","46b12c515bc4bcaf1d68f3a722cef3ce"],["/tags/Ajax/index.html","09e3a8373473b2b5c5af8e3353fbfaa2"],["/tags/Axios/index.html","9160eddceddf0e3ebb3dd440e4a8a4c1"],["/tags/CICD/index.html","7beaf89ed9def0b6fb85d3fa59326d8e"],["/tags/DDD领域模型/index.html","8a571b55998f6197c2c57928296fa96d"],["/tags/Docker/index.html","73f245076e93adc69e91599ff8657624"],["/tags/ELK/index.html","2184e9503e64134486819d40f7855054"],["/tags/ElasticSearch/index.html","e8aa6556fe98531969b17a11b0e6e5dd"],["/tags/Git/index.html","df55332cd33922fc403eb8bd97053c30"],["/tags/H5/index.html","762cad9dcee19358800ccc96c6d32b37"],["/tags/JVM/index.html","d695c184fde7b5e2cb58be503ffd8ede"],["/tags/JVM内存模型/index.html","d16b79f01b3d991194b884593e706618"],["/tags/JVM执行引擎/index.html","b1bee713c221789b815614023e889479"],["/tags/JavaScript/index.html","82fa9343fa944fe63e7e1e0a6f76f45e"],["/tags/Java内存模型/index.html","3236e432e20240fbd716fe0ad4026e82"],["/tags/Java进程线程/index.html","6163f598013fde8047bb31c922563834"],["/tags/Kibana/index.html","d268f6d8254642a620ab41c024e4b09e"],["/tags/LeetCode/index.html","1b5366da27e8f24ab5c7f2a885e0fd36"],["/tags/LeetCode/page/2/index.html","987569d672a1a2195aaee73db6fe4cc2"],["/tags/LeetCode/page/3/index.html","1d86812dd2e2969f56999e4b0eb539e5"],["/tags/Linux/index.html","8723ff0c94d197791b83faa1521c4656"],["/tags/Logstash/index.html","ca24a309d3b689ef044367e329329c4d"],["/tags/Mock/index.html","b7720e8ab80326de825f9d7a4be38277"],["/tags/MongoDB/index.html","6263bec2f3cef2f0ad47afde69ec3cd1"],["/tags/MySQL-事务/index.html","74d2b30e8ad8a57f146f9018827e740e"],["/tags/MySQL-数据类型/index.html","0cfb9ef665f9ee354a3afbb78b7e2c00"],["/tags/MySQL-日志/index.html","98a333277f40a3125fc9472f56508084"],["/tags/MySQL-索引/index.html","cb174b2938a804a38b1ed688df0d27e3"],["/tags/MySQL-锁/index.html","383a1a367db49b762d89638d049615ce"],["/tags/MySQL/index.html","5c81d5f1e8d9eda7c6b04d97b44d3c0b"],["/tags/MySQL/page/2/index.html","2c5b14ea10453d0d630396134c0b9993"],["/tags/Mybatis/index.html","5b9bddd32de00ce3f37ef7f73de5e98d"],["/tags/MybatisPlus/index.html","256fe9b41cbfd9ab3d988b9a1092eaec"],["/tags/NIO/index.html","b6fbb33285db2508f99ae36a90e8f713"],["/tags/Netty/index.html","879dc6e44fff0426fea037aeb4916592"],["/tags/Nginx/index.html","5cf861b1cb94682fca57b0e76b6b1293"],["/tags/Promise/index.html","71bb14766770b33ce93409b25a01d221"],["/tags/RabbitMQ/index.html","6a82669cb3cd8cef158ecb801896e18d"],["/tags/Redis/index.html","93566208017700f9ab825803bffa973c"],["/tags/Redis/page/2/index.html","92013c1e543d9766b12c37cf4ee128a2"],["/tags/Redis/page/3/index.html","57aae195e0d999e733756be7113ac7d7"],["/tags/SSM/index.html","cf266e28c1641f6b67df50d582c74013"],["/tags/Spring-Security/index.html","ce19b635a51d4409546942594dbd39b9"],["/tags/Spring/index.html","0923fefc2953a91f79fe2a681ad6a65d"],["/tags/SpringBoot/index.html","8a41d8b6641b91b8d2c6ea1d130deadf"],["/tags/SpringCloud/index.html","67dfa29b41527977a9ab20e665889862"],["/tags/SpringMVC/index.html","36baebbc2bba403db2e9767451c81112"],["/tags/Swagger/index.html","7a262afa15209d1e6d95097636c4fac9"],["/tags/hexo/index.html","9c6afaf8b903de0bb4e487d06381db6a"],["/tags/index.html","4139b272eb713da85615335491406b61"],["/tags/jQuery/index.html","05bb1aee3264df950cc9f75305edb2bc"],["/tags/java/index.html","d404785b0421c01840a754a36f4b73f5"],["/tags/markdown/index.html","c6035828d4541faa7813f182b43794c6"],["/tags/noSQL/index.html","8f90cd573869d823fe0eedce0f2806f6"],["/tags/typora/index.html","844bfc9820b573dd6c7ce5d35c6d6c24"],["/tags/vue/index.html","3cff90c5aebed768509b8aba43948a76"],["/tags/享元模式/index.html","073302e41e95a1fe1a1f6371763732fe"],["/tags/代理模式/index.html","8ec8582cc3645e5614e804d3c8784058"],["/tags/内存管理/index.html","8d047906c2b97618482311d02c97039a"],["/tags/分布式/index.html","c1dc5273b4b24ca5f2c01b0ff88dfe4a"],["/tags/分布式系统/index.html","3a0b73306cc589e5ad565631deb63ff2"],["/tags/前端/index.html","f9b8fa483238bda6c1aba14e93898443"],["/tags/前端/page/2/index.html","381e6e0cde4c2e473f9caa257d38cf45"],["/tags/博客/index.html","6c2381c40f15ff257d5c5680df272154"],["/tags/后端/index.html","42def224d96361d24404f992de7fc03b"],["/tags/外观模式/index.html","68fab2f578812c08e8e43989d1dccfe3"],["/tags/容器技术/index.html","ecc87dc798d02a43cc24294f8b481fd4"],["/tags/工厂方法/index.html","6d87884795cadff48fd87725bd8558bb"],["/tags/微服务/index.html","48b1e576c4ae01f9a0379b98a02ad114"],["/tags/抽象工厂/index.html","b7cd9eb8d176e1098432e771e09c73b7"],["/tags/持续集成持续部署/index.html","c85d3d8ebe7b129e2a78e442d35dfac4"],["/tags/搜索引擎/index.html","4e4f1abb486347a7b664a8c26fc97f86"],["/tags/操作系统/index.html","c2bc214942e59909fa242a51d9d2c729"],["/tags/数据库/index.html","5a469f9b22a5d072d7b44b2d77f59e4d"],["/tags/数据库/page/2/index.html","fafe0ae096f957deb206bb0f9f76a653"],["/tags/数据库/page/3/index.html","87d7366441c8e3e0fc02db84ecddc434"],["/tags/数据结构与算法/index.html","28a157da2e68eb743613e625cbb7b2fe"],["/tags/数据结构与算法/page/2/index.html","179a3deef34acb428c7eaa00f8180990"],["/tags/文件操作/index.html","bfd420660a85ffe5ee6a199db28616f7"],["/tags/日志/index.html","def4c82ba2523de0ca1ec7f10dc2cba6"],["/tags/服务器/index.html","464084373ac64f7e7e0bc43d55a69e61"],["/tags/权限认证/index.html","259a7091f538b10fa7c20cb0f982b10b"],["/tags/桥接模式/index.html","c543b747a97db0ae7ff870f5b0636889"],["/tags/模板方法模式/index.html","e1d5fe406b3e4643ce7b9e159bca7517"],["/tags/死锁/index.html","356f8890c8368bec45735907097501a2"],["/tags/消息队列/index.html","112db7558ee3441e0d701ada8c3f8c2b"],["/tags/版本控制/index.html","cabdd2966c2d92979d13d6d780538519"],["/tags/策略模式/index.html","1268e8c106761a586574b48b62611ba4"],["/tags/简单工厂/index.html","bbbb55a0daa291419f086ec1f9b67e2d"],["/tags/算法/index.html","c057883c1851fff01358f6fc786f5cb1"],["/tags/组件化/index.html","28166b77071e93276158bf3e29c1fb8b"],["/tags/缓存/index.html","925a37da4e0b1318090e9b2c850e2a8c"],["/tags/缓存/page/2/index.html","badb007367957c9366b06183607bc1ce"],["/tags/缓存/page/3/index.html","99def5a6b2057bcee6498cf70af024c7"],["/tags/观察者模式/index.html","82e92e745c5ae9b4bbcda37c5c9ebbff"],["/tags/计算机网络/index.html","141016aafa1177978b25d30847e7f1b0"],["/tags/设计模式/index.html","1ee04423d72513e2d2f9a5a5c747e4cf"],["/tags/设计模式/page/2/index.html","5667f028d0a7a6786fd7b8cc9d3a23a2"],["/tags/进程管理/index.html","9b3534154de7da5c2e57814777d5351a"],["/tags/适配器模式/index.html","b63c64cdebb65f534ae7544c12817087"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
