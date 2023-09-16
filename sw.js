/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","fe77d1af5dcefe29ef5fbceae0540e45"],["/2021/02/22/工具的使用/博客的搭建/index.html","6a443291b95c9fe9a5c69cd74afbb97b"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","c1c6296c8583e82487ef5ccae70f344b"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","86682082383814ac39e616e850c74084"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","5ed4bfac94df5eec5a56a6af7b7146a0"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","ab4cfd1d2b04a79d33f2a997d637b6bd"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","bc583f7b384f9d1be750d2d78cac022d"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","e691bd2c967222da37fcf6165079c020"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","3ab7bc8c24aa48372bf799076bfadc25"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","fd0647753dc4a3269bd1d5c66b082fce"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","cca72021658df167069f9bb24a4624d5"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","c643528d5e2252db9169decdead956b5"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","f062573ac40b8a025f7772ca6928b28d"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","07f72ebd204ccf2336938041cc4ac16e"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","25d8938ccf0a643c1748c7e2fa87f856"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","9b017eb21409cc670fdd773a096011fb"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","83e83706c0774b5871241c5b99eea15b"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","94983495a7bb8a7494c45ef9f71bd18a"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","0c7e20cb7394613439a748d2f34b16ef"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","3cd6cb53e5eefe2f03c4ba89fcb47c3e"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","ff8d2c6be8a2af59f2113df800e060e0"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","f162ddcae3ccf3d19d25d45560a32b52"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","9b654ae5369f144dcca3f1779ae36e68"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","badb536c88879da8d73e5a7e3e5f4200"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","3e8d8775c7972995a171606fdc44525d"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","64db1ecfe146786047ada1c80f7dc889"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","70ebe29982fc0823450d2dfb8d12d3f8"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","d254959a01f47b8c456500586ede323d"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","ad5c16abedb2149206e97a39ecc8c75d"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","a73ad7ece2d9618b46c5dd147e4085b6"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","6bbeaa504b686f270e24d8665660d6d6"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","19d282d14abf37cda0fbb170775007f4"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","794b2ed4776c7272d18602e521727a53"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","443790deeba1cfe2746fe73caa0c08b3"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","61e6e02a062cd0065b6f52129d35f3e6"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","633a31f1db477d1bf4e9db8130a23356"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","0db52c4aeb9e8dfff90469cae0f7a6aa"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","6d2fad928acd8bf23ccff22cc6f0755c"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","2ab40050df715ef5b99ca9a5af77854b"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","9ce2c84290ecd76f7cac5ec0ba93d536"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","dbba627e31839b2d58c4d9977129d1c4"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","61a9b5344619b7760a3c3f73a396f64e"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","ca1e4fe679ce33615144f42a3145e321"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","e018413f9bec13e90753e7468aa8895d"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","27fdcfb5c79ab2e3a91dc91d815934d8"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","696f2823835fa924b37f94b30beb8560"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","3081d689e9d848d9e772268f154baafd"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","f9d8ac760c5aaddf4a5e940be6fea537"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","c6f6275397bbfb62524b2f2c635d9492"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","fed4bf88aa4ce700ff53973ee6c56b39"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","1ccea0d086ef129abe1137a94faab57c"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","210a0967bf48ab589bd95eab093f36ca"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","b0f973105420ef42d66a9be1280b93c8"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","0c0917125bd68bd5bd77186a1f8bfddf"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","648cc905cd7574db66ffbc88db116b91"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","59ba93bb87d2fb3a663a85d4931e190d"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","74f67d53567843fee29de3f788e5f574"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","d7f3c512e767b713f5a6c03a19d29836"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","b6b163b0a84c41353df46a0a9ea988ee"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","b67d5581620dd88912b2185f4d056ca8"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","725021a183d3f748be7e726f6bb41515"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","52804345b8da0c49b9e7d415bfcbdea2"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","14300fd62e14d543a36db31d16fd97aa"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","51d8b86d0ee4b328b54f661f6dec2646"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","b2715bb093634ccb192812a0d9d64c16"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","079c2a9c7c0e0ceda66c6f504c05d9bc"],["/2022/08/17/前端/jQuery/index.html","d0e714e0d00a6c2a8f7706d94594e794"],["/2022/08/19/前端/JavaScript/index.html","240e2cbf876466df325a920c2dadcf68"],["/2022/08/22/前端/Ajax/index.html","17f480c5487708425373a7c44313ac18"],["/2022/08/23/前端/Promise/index.html","de50207a22c55b0774ffd81f9528d911"],["/2022/08/24/前端/Axios/index.html","fcecca4ffd571f39986aaee64026b010"],["/2022/08/25/前端/H5本地存储/index.html","98707abde37b6464ab749902a61a8aa4"],["/2022/08/26/前端/mock/index.html","efbe6218c5d56a2e6ffb6329106c95bf"],["/2022/08/31/前端/vue/VueJs/index.html","3425a09ce9a28b0a5b85461ff8234f21"],["/2022/09/01/前端/vue/vue组件化/index.html","680f5ee43ea03c533a9ac267ade60854"],["/2022/09/04/前端/vue/VueCLI/index.html","232a9864c1c87ad11038247410e2cec4"],["/2022/09/07/前端/vue/vue实现动画/index.html","f6e86d4eced75e4660e888775dfa30f9"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","475ed05b2d41621e68d52a457e5d3555"],["/2022/09/10/前端/vue/Vue异步请求/index.html","b2a01d46c39c6a36cf14d6dc5d538c74"],["/2022/09/11/前端/vue/vue-Router/index.html","f302c72777b3bc88bed8ab5c25b92323"],["/2022/09/13/前端/vue/Vuex/index.html","c14dcebdeae2d72c8a1ad9abe74ff379"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","cf01656388c29b351a1f7393c461cd76"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","172c00a8b13ee173aa9502f0466a098a"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","9e78204f11b5007b1346f990f10e8b74"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","314825e36bc43b7f56425b0a824dabaf"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","fb91f50e43f27aeed2cb206b8608a9c3"],["/2022/09/28/DevOps/Linux/Linux/index.html","c8e500917c9b921e2bf5196b55b624cb"],["/2022/10/02/中间件/Redis/redis基础/index.html","b385ff24308e28022d3762a6fae2b999"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","45a5cd51173e3b3accafe35d0be5e870"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","78f6ef11e54ea19fe5d38c69d6579f7c"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","c4e3ffe854ffb3a538a14b85b3ef7097"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","3c72ce0797a01ceb95206cf67265bfa2"],["/2022/10/17/中间件/Redis/Redis集群/index.html","50f71032f7d741d871b3741b77e9fe32"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","b74822656e6a676e0878a7c5cc44f395"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","eab69658f4966ed99d0266681042191b"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","4adc81a8076775a38c25e55c04a119cd"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","886c58c3025d9e7580e3f1fe45a78500"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","1c6f926dbdc691af775d799a7804e4c6"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","db313173f2450cce4dd486a417d812e7"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","e9a7b20fe7dd8b2202a2c86a7cbaa31d"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","3f5b8ef7f68429f83d6b60f1f588ca86"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","c414ad499299c86d9f7a173c2d8c8868"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","44abdb195b7ba24761e550a68ff99a64"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","f83f404ce3ecb56ab4886a2cf565badb"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","3097b8dbcb7561b224e2691c6fe34564"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","039abc650a71aa8e1a3d1c9a6b02bca2"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","49c52ad773387d04aae17e757e23c63a"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","f150f8c9805b180cafe082778b35c307"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","61b98a2299a0fa7d5529131429aa2836"],["/2023/03/10/DevOps/CICD/CICD/index.html","f348eff9d81416a8502b11c5620f5056"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","7d2c1a7e2eaa46d860bbb660cf4a5b64"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","46110d1e0ce4b43ea83b7831a3f4c11e"],["/2023/03/13/Java/NIO/NIO/index.html","81a833845c3846490bfcc66e1c3c6b18"],["/2023/03/14/Java/NIO/Netty/index.html","3cdff979a0cbfb67711623e8988073b8"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","2dee17cf7066207aabd90868b154b093"],["/2023/03/17/系统设计/分布式系统认证/index.html","7a9f3d60456ca01fcb0530201170cd2a"],["/2023/03/19/Java/JVM/JVM概述/index.html","1222a1eaa7590b8247b116ec0b5afdd6"],["/2023/03/23/Java/JVM/类的加载过程/index.html","b67a51f1e9f8a0e7c7a5a96318bfcc5e"],["/2023/03/28/Java/JVM/对象的实例化/index.html","59ddb8c5cac74568daf4d615b5273b7c"],["/2023/04/01/Java/JVM/运行时数据区/index.html","43bd6d12338437af2e38b9a7679d4cbe"],["/2023/04/04/Java/JVM/执行引擎/index.html","4098f7671d459f0ec2d654c64da2235c"],["/2023/04/06/Java/JVM/对象引用/index.html","130645c164ed9449daf611e91ba5bb80"],["/2023/04/09/Java/JVM/垃圾回收/index.html","705b123be108e817e5297d4c13075393"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","9a2f2219b4ded407c6f5d064045c0bde"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","98bbac9c5578cf3bb05cd0f50314e715"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","0e2ce7261150b8f72ff726f049dc72eb"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","f9cc895c61b448b3bcb158c69abccc66"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","42d96daa954f98fbeea0b907c9beac01"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","ac9eb0cd14bcc253916700c873eee5f0"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","2e911f371a31fb7c2680f3a779b6929d"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","139b4f0cf95424ed6ceaa3684594e365"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","4ae51cbb65974f57d1c1aa30caa4a7f0"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","f149a195597704ee02b13c5cb284a55e"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","0630af080ef4b3bb834cf5a72bce7357"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","52099fd805a412f5deab03543f79bf76"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","347baa155db7c5822ba1e6c699b6d6b1"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","5e9c184fe5b2741b54262ec9461ba441"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","0fbe5e86f871bb3c851538caf7911802"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","83cb23fb288011839a6b444adb8535c7"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","cdf8c070c511f04fca708f5924820980"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","95e1d04220c1fc98f4b66c557b39a3fc"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","feae9ddf7b85bb1d95d8560690367415"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","431b2018b059101a990dd858d3202fcc"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","ea6529a47f6c25cbb819605d9d987e4e"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","804de1275b960d01928f81e0bef72738"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","304bccee25706c7450f0ffd6f44fe290"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","4b2379321990f5c7d449134924136c8a"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","ebb97c36f98c639a7385eff216f3fe9f"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","f50f63ce295d020da1c0a17e37376d7a"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","dd4221aa6c106f573f49cab02f6d5584"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","051487d854f83839043e3c3c347843a9"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","c2efb6ecd5f6461867f0c8248b721560"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","5458256d7a3f631f916c466730a5fc8e"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","14ac822afe7940d023c58192a2e68b05"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","a816902657ac61bafed72d45750036fb"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","8593fdd00e02f5b1e45c40feea77b3b5"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","8ab85c59a4e1e75dd5bb28da29c22b2e"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","b3a886c3afbe1361547c1ca8399e3460"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","e46d0d770b24b08516d89273db5da2bc"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","68439b791a20ece854620d97ba5160c3"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","531db4d739386aabb1eb191661edbd3f"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","2e77abeaf87b8f740434f61d815ea9e1"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","19c5188ba4dcd13d554f84787f063117"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","444c657b9ad3353a5f5b528dd9fe10ff"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","118776e181cbad70b02cd17ef0af130a"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","fdba42ce98a586574b92a2860d86a27a"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","75930c03028e1bc8b7464ace332d7a7a"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","44da9272a8054714e81fc88f993b5e56"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","9dcc885860d174f74f3c040107c04c75"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","2f47fe6af95601bd96340d0d94bc65e0"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","14c43e198a4a3d8447ff76fe49859fb4"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","1f6003912c7bb1c84dd24d2bf4169064"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","3d58c6bcfde48b7db22fdaa089b7d135"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","e25bda26d571d555e2cf14b294a505de"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","19413bc623465a6b9806acae01bf1817"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","f2d8bf4eee34203ae7147724ea482d55"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","c830f6046fd5c2a9fc9b52908cf2c79f"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","0319732050d30b4150e56672f2bbf2ac"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","65d722ea2d8c2a45a0f881b3e7c7932a"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","8f4969eb0071a3c790ec83580b7bdc0e"],["/2023/09/04/中间件/Redis/Redis事务/index.html","56ff315db7aede78eb4daea4c2dd6412"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","bb625c4878c5c06ee09afd6a068d7675"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","9a471d21e2832eab20821e27ddd8acd1"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","e6b8733550b00e19c21e721df876617d"],["/2023/09/12/Redis数据倾斜问题/index.html","e641ba912415ca5e0b4254284fd09b92"],["/2023/09/14/Redis6-0新特性/index.html","c385dd55a6402772682b956c5161c2d9"],["/2023/09/16/DDD领域模型基础/index.html","f04ba2ea22c8db2444770072476aba5e"],["/404.html","aab62ffb2855bcc06ab73dddeecf162c"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","ae614ec3a5e16cb8e695d4bd25d57b02"],["/archives/2021/02/index.html","a03d351ae63ee0072dfac44eaaa4d4fa"],["/archives/2021/03/index.html","8adc9d4d30ec19489692ab0180f0798e"],["/archives/2021/03/page/2/index.html","48a1c581480ef8a8ad1bdc0f3f0a2e9d"],["/archives/2021/03/page/3/index.html","9bf64caae204114b77f6a6b27570c443"],["/archives/2021/04/index.html","f9d5fd9cfc9d5f0e45b4b1f302aaaf28"],["/archives/2021/04/page/2/index.html","008bbea55561ddfcc32c21c4a053e707"],["/archives/2021/05/index.html","7059b0893c1efda24a0e5b8a5fe19eba"],["/archives/2021/index.html","79075bf05e8c4f062b56abc00deef52a"],["/archives/2021/page/2/index.html","1c20a693658e0415ae42098a1c108a76"],["/archives/2021/page/3/index.html","94570a15d6711213538eb2087ab9d789"],["/archives/2021/page/4/index.html","d6b7810adc647cc05b67dedfff5aca7f"],["/archives/2021/page/5/index.html","e15b873f6b3a15f3d84689ece757ed4c"],["/archives/2021/page/6/index.html","db61990e04c83d7cabcda41f07df3e04"],["/archives/2021/page/7/index.html","cf8d09815380e6123b3dd5163c3d2597"],["/archives/2022/01/index.html","a4b40745ee048c9e4f37e6d906732c92"],["/archives/2022/04/index.html","f802bbeb01be761f270b7940a15c04d2"],["/archives/2022/08/index.html","1057a17e08d4915aa7bea820a52d3dd7"],["/archives/2022/09/index.html","f1b9a30386ee8d57af23ead0a2a431f3"],["/archives/2022/09/page/2/index.html","980ce706f31761d073cca9e95317167c"],["/archives/2022/10/index.html","2defa73928582669e34413bdcf03f538"],["/archives/2022/11/index.html","0deadd958fda58d8fd639b9cd3638271"],["/archives/2022/12/index.html","38f634b5b4fbe2de9eed05328823274b"],["/archives/2022/index.html","16af46426c60784be242b0d17f136eda"],["/archives/2022/page/2/index.html","b47b7ab6721172654b1bff93c0b506e0"],["/archives/2022/page/3/index.html","60d4871b55c78ff8a68a5bdb822cdd40"],["/archives/2022/page/4/index.html","55dca0790a646255513fe7b64252eade"],["/archives/2022/page/5/index.html","0ff2b21226e23922e92e3cbbe52de22b"],["/archives/2023/01/index.html","c331f93af25699a7846dccc88323502d"],["/archives/2023/02/index.html","97a5091336352aa8f553b5542a10cd35"],["/archives/2023/03/index.html","9dfb177b99443a2b408b3d1227fa7e02"],["/archives/2023/04/index.html","d9fe9005aeb232b5f28b09a21b2ffea5"],["/archives/2023/04/page/2/index.html","1af100a58fbc57546ae8267815c5e994"],["/archives/2023/05/index.html","9455b5aa39d0fe6404fa6c64f9212d22"],["/archives/2023/06/index.html","0e57ddadd632726c79b697be28e5087a"],["/archives/2023/06/page/2/index.html","0533d6c1d86e3bb15b0ca2d9ac57a62e"],["/archives/2023/07/index.html","14ca4d63fc96d90249397f82508bd36b"],["/archives/2023/07/page/2/index.html","d38d25e0ff9844288ed639dab88aaecf"],["/archives/2023/08/index.html","a2765635cfcf7137d0737b809dd3c1fd"],["/archives/2023/08/page/2/index.html","a3863db795b0211743afcaeefce88bdf"],["/archives/2023/09/index.html","b4070361e291f94fa27e4290bb9a45c8"],["/archives/2023/index.html","5a0f64ad9db4fd11d79ae0050aa97093"],["/archives/2023/page/2/index.html","9d482823788fc621ebbcbb8355a70f78"],["/archives/2023/page/3/index.html","ba6fc60a0063776135b12ca4e800fd59"],["/archives/2023/page/4/index.html","5eb0cc72b73644062fae64717214a871"],["/archives/2023/page/5/index.html","7f1c108182feda217709c4967765a294"],["/archives/2023/page/6/index.html","7a7e84f6fc30bd79c4b1616bba52f7f9"],["/archives/2023/page/7/index.html","6e61e81b39219a7d07bb45e8b2ade6a5"],["/archives/2023/page/8/index.html","d60d31b504c4c64bbd13e0ee27620337"],["/archives/2023/page/9/index.html","15880497c79b5092c8a37d8d3c7e5ad3"],["/archives/index.html","ad1e08fcd34944aba5a089314fd47b5d"],["/archives/page/10/index.html","66daf4e32f8b42dd85225bf95b92e4d0"],["/archives/page/11/index.html","0f973a06f676cc43b3b19271607f802c"],["/archives/page/12/index.html","37637a5bc2eb2031c12de318be3a9f42"],["/archives/page/13/index.html","f1db235d8b4ccabcce0df270d6916842"],["/archives/page/14/index.html","431b86cceaa432076588bc1d2081f721"],["/archives/page/15/index.html","505307b46dabda670bc52d3bd0a741a7"],["/archives/page/16/index.html","c42b8275d89c0e1b4c4d53bb1da91c74"],["/archives/page/17/index.html","36fecfeca54e11d403e12c19eabed576"],["/archives/page/18/index.html","c87389c6de861fb5ab203ce5ea0cde97"],["/archives/page/19/index.html","f3d1525a7a9f2a820a4964f839d5b9f2"],["/archives/page/2/index.html","c88bc4c67075fd35c718ef34b8b86bf8"],["/archives/page/3/index.html","335feaa460aa38992e73c8e483f370c4"],["/archives/page/4/index.html","49e4b028611c2b892d06d512af6a4aea"],["/archives/page/5/index.html","7c886577a7ecf28f78b1613318a40348"],["/archives/page/6/index.html","4911aa3aba6ec8b74313121cff1a84c4"],["/archives/page/7/index.html","1c188103c21434471dc11a90b900010e"],["/archives/page/8/index.html","681a48307e62e7fc3b6a41110ed56b18"],["/archives/page/9/index.html","2a5fb700b9bbcd78fbc0db2cd245bf99"],["/categories/Devops/CICD/index.html","0be1310e62f2b87ea06f6c8377693a99"],["/categories/Devops/Linux/index.html","cd0eb02538a00f45b892e2fd1b69f2f9"],["/categories/Devops/index.html","49a546c2cec6cef70bd77f5a44aa113f"],["/categories/Java/JVM/index.html","5130ce652e92d5caa7aa80083b319466"],["/categories/Java/NIO/Netty/index.html","c5c86fae648aa9d14cb1bb00a30c1ebc"],["/categories/Java/NIO/index.html","76f6e8f8eff334b0a843d995e3993c3b"],["/categories/Java/NIO/原生NIO/index.html","51385ba85773ce4c3b351482448cd196"],["/categories/Java/NIO/文件操作工具类/index.html","e4e8a00d5e9cba41741a5502e8dcb195"],["/categories/Java/index.html","6183411c2a6cf07baac4990a0e63cbc5"],["/categories/Java/page/2/index.html","545a5ca387ab5b103de1439dafae971e"],["/categories/Java/学习路线/index.html","b1e5b13fc2a18c1a51fdb15837e3e2e5"],["/categories/Spring全家桶/Spring-Security/index.html","5f7b65d893bffa99ee303193e29c0290"],["/categories/Spring全家桶/Spring/index.html","751a2427f0b6d4a0f168cd3b0251d36c"],["/categories/Spring全家桶/SpringBoot/index.html","5732a07900ca4553508971762443c7f6"],["/categories/Spring全家桶/SpringCloud/index.html","cb257f5e00c03d83dc406d8245d04740"],["/categories/Spring全家桶/SpringMVC/index.html","b0ad3759ba16c1838c7103da0e991374"],["/categories/Spring全家桶/index.html","78e55c5a8345a77344f916160314e9d5"],["/categories/Spring全家桶/page/2/index.html","276004f965f41afbb6b094890845c014"],["/categories/index.html","aa414be61a001e6b465bcfd33119f27f"],["/categories/中间件/ElasticSearch/index.html","9cb064421c9768f6a8999c836e825f07"],["/categories/中间件/Redis/index.html","763acfdcb943a578207a858b98cbc623"],["/categories/中间件/Redis/page/2/index.html","8a9f32b16f62a9a76ea0eca948c0b62a"],["/categories/中间件/Redis/page/3/index.html","8e4ed68af5f10ee14147c18ced0faf07"],["/categories/中间件/index.html","78077e3f33b1cfb9c78b306dab711614"],["/categories/中间件/page/2/index.html","7146a214bf92a11a55ffc27227f29776"],["/categories/中间件/page/3/index.html","6b89e9e7c540025d7f2b5d37c3809bd9"],["/categories/中间件/page/4/index.html","8020d19713c3e9dfa7ae0a646a418470"],["/categories/中间件/消息队列/RabbitMQ/index.html","6978a574996a08dce1dc2ea2c10bddb1"],["/categories/中间件/消息队列/index.html","29ddef67ba5ebf6fa7596492e158192c"],["/categories/前端/Mock/index.html","ef0a3624bc75a6b6f1a94d806745da0b"],["/categories/前端/Promise/index.html","f31b894fff0e07933fdcaaba4190cc98"],["/categories/前端/Vue/index.html","65c11d4c5dfa07dc3436f867b43be20a"],["/categories/前端/index.html","6771b21b723d7815442aac2b03a6c22b"],["/categories/前端/jQuery/index.html","c4ec5d40c1454f8e7de2c333becbd2e5"],["/categories/前端/page/2/index.html","c0a8397a475816392d127fe9ca22c0a7"],["/categories/前端/原生基础/index.html","906d797c2b8630056b645fe4de1af613"],["/categories/前端/异步通信/index.html","fde2d3fcdad4f984410efa1ee248df97"],["/categories/工具使用/Git/index.html","bd453cea45f68b23afea608d30699df9"],["/categories/工具使用/index.html","284db82a8791e724eae7884e2ef7f4b7"],["/categories/工具使用/markdown/index.html","c45f2f14c53a4350eb5e65c17a253648"],["/categories/工具的使用/Docker/index.html","128222115b4c8e9cc70384da608d87fc"],["/categories/工具的使用/Nginx/index.html","af7982e8ff82ff4c688ad30afbff6acd"],["/categories/工具的使用/Swagger/index.html","6877d72e87ca81a2857a2bd3e0bb4694"],["/categories/工具的使用/index.html","cdd1f4bc1b1865db8ca6354dde86fe94"],["/categories/工具的使用/博客搭建/index.html","6f0acafce5c2b629b8a1e4d32d5b43e6"],["/categories/数据库/MongoDB/index.html","8844f2905dfa2fe95cbc569720292127"],["/categories/数据库/MySQL/index.html","ec6d39af6718a24f34f734d4374a5e3e"],["/categories/数据库/MySQL/page/2/index.html","defcebfeff092717bc1e1cb0434b271d"],["/categories/数据库/MySQL/page/3/index.html","8492ffef864599494e080750a5d141bc"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","a00b32561d0e5d6798d558cb961b6ac8"],["/categories/数据库/ORM持久层框架/index.html","99e2bd367a131d22a6c61816cfe83abe"],["/categories/数据库/index.html","6545ecd1921a79997137601adc181517"],["/categories/数据库/page/2/index.html","c9e9b205a212eee446556fcee59bdf94"],["/categories/数据库/page/3/index.html","28f8a15f00370204b49612e55b49825b"],["/categories/系统设计/DDD领域模型/index.html","2e21be30aa121b4ca819dd389f35b5c7"],["/categories/系统设计/index.html","8ef79db48313f0ddf6ba54322084eb75"],["/categories/系统设计/page/2/index.html","d4ccb0a56cd7558b5144a715d6d3a760"],["/categories/系统设计/分布式权限认证/index.html","7135247dc97adba9525d192af91f68e3"],["/categories/系统设计/设计模式/index.html","19174cae5b55f39200dc1d848c133881"],["/categories/系统设计/设计模式/page/2/index.html","68532ffc2e97da8dbd2e97e52e7c5405"],["/categories/计算机基础/index.html","bed3dfe89754af956e3c518badb71ddf"],["/categories/计算机基础/page/2/index.html","a8aacd868d969c29e009906a8184bb4c"],["/categories/计算机基础/page/3/index.html","b41a6d72a0c13433ff599a9057a687b2"],["/categories/计算机基础/page/4/index.html","5b78eba9ad1a8dce12e705a54bae7763"],["/categories/计算机基础/page/5/index.html","3f37dd8b8af331f72dd69ced324779c8"],["/categories/计算机基础/page/6/index.html","d515d040b78fa438b9d9ad2f8666a221"],["/categories/计算机基础/操作系统/index.html","7bddcba419bcbb2dce894fe8feb1ad61"],["/categories/计算机基础/数据结构与算法/index.html","a746ca4f996377b94c866c47c4a7fe0f"],["/categories/计算机基础/数据结构与算法/page/2/index.html","4a4a81c535cf71818f25b745491d7fd4"],["/categories/计算机基础/数据结构与算法/page/3/index.html","a2300f4b5d24668fafc121438748d27e"],["/categories/计算机基础/数据结构与算法/page/4/index.html","55faa8368ade04c5c57d256236998650"],["/categories/计算机基础/数据结构与算法/page/5/index.html","06933f3f9a14c10deaee628002c90ee6"],["/categories/计算机基础/计算机网络/index.html","a31a1d72526a2e5e2f19ac70444e55cd"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","1ad234e64d962f038c5e27816dd24567"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","531230e7554466af019d750db8648847"],["/messageboard/index.html","0c34e4a04132c39982cda5abeb6752e0"],["/page/10/index.html","a9e8777ef8ed9179128693b62def74a3"],["/page/11/index.html","484e5152b368b6f6c51cc8bad457c9de"],["/page/12/index.html","52f6e0fba7f979d104c6c1fa0bfebac7"],["/page/13/index.html","dfe418f49873f31036dea917d86a29d8"],["/page/14/index.html","2bc5e45f383b752664dbba5083dbf18e"],["/page/15/index.html","d935b60d7d487761ade94f6d439bc234"],["/page/16/index.html","c8d1b69142e5c774222719a32d8e84b9"],["/page/17/index.html","514e5e7c1c3b9273259545c14273b1b1"],["/page/18/index.html","f6be9b8b8d8ff5284d6cd65a23634009"],["/page/19/index.html","35c7dcddb5f69aad2aeddcc012e9b4c6"],["/page/2/index.html","311530a275d5de0ec06ef927ff80d0b2"],["/page/3/index.html","4053dbb7626050d8f72cacedf6ba582a"],["/page/4/index.html","388a83a670d96bc928a263b596d8a5be"],["/page/5/index.html","0bcb0b54c62780c84b79cf3768eb5e7a"],["/page/6/index.html","2ae6acf1206efa4ae276c18601e84199"],["/page/7/index.html","36861bffe644340905a3f42b44fad463"],["/page/8/index.html","85b61dff678500b91ff60460501677ca"],["/page/9/index.html","e62f2a10e69351a87494fd921ceea134"],["/sw-register.js","1823fbcce8c811a528dc2000359d5014"],["/tags/Ajax/index.html","719fb9e57f9e5c9ad0d5d8d74466ba74"],["/tags/Axios/index.html","53a8ff64936c0a361d0c37298d7386c0"],["/tags/CICD/index.html","d76c39f148541da71188e3ae480ea0cf"],["/tags/DDD领域模型/index.html","bdbe528784aaeabd2005ff0100a2de7f"],["/tags/Docker/index.html","a07814e30680ea4caf8c4c8f25291a05"],["/tags/ELK/index.html","df06d70f4af9e22ad6f72048b1f72983"],["/tags/ElasticSearch/index.html","abe25167fe3ee996240b200b57cef863"],["/tags/Git/index.html","de034fe67f1fb653f10b2c34f0095025"],["/tags/H5/index.html","b711f61d4aff128ab6d2746cca6bccc5"],["/tags/JVM/index.html","cefde5c9f4091cac280c99872d4df1cf"],["/tags/JVM内存模型/index.html","3c9b8bb77920d21d480ada6cae75ead7"],["/tags/JVM执行引擎/index.html","d75f137fe2ff8f1cdc5cf6a62c42a3cb"],["/tags/JavaScript/index.html","e2d8e44f21497f34aba5a0b2ab0fdc0c"],["/tags/Kibana/index.html","a80bdd8aef520611ff2278186f659e94"],["/tags/LeetCode/index.html","ed9cbf1a8bb897c9c366f26d2e618e04"],["/tags/LeetCode/page/2/index.html","aaf0e1dcbd4ad2cb26c858a61f25d232"],["/tags/LeetCode/page/3/index.html","ed5a5b655199a35228d1e05e87536f33"],["/tags/Linux/index.html","c29cccd6aa354a1765b46a4641057b8e"],["/tags/Logstash/index.html","c2d719bf5d86a9a9f1ab0e11e52ab64a"],["/tags/Mock/index.html","ef9383aa36cc8bbf584b79b12f23c36c"],["/tags/MongoDB/index.html","7864468e128a8ac87f3346a789d393bc"],["/tags/MySQL-事务/index.html","c1dd2ff68d7fda700c72e2a8981ea5ee"],["/tags/MySQL-数据类型/index.html","22639c097c15b2db39af07beea425a49"],["/tags/MySQL-日志/index.html","087653a8299a6f76e6757c2d5b647980"],["/tags/MySQL-索引/index.html","356e3a47d9ceb41794f6315c92a44b89"],["/tags/MySQL-锁/index.html","0451dd7f01ea2210485f9c7dedfbd7de"],["/tags/MySQL/index.html","d8a93e82708b21c5883efeb00d9256a7"],["/tags/MySQL/page/2/index.html","f9d096d3846ffbc15f19eca4f84f1922"],["/tags/Mybatis/index.html","5e9803b2ce9334efa5beaeb1b368f82b"],["/tags/MybatisPlus/index.html","06542ed6a3a97bbf0ec5a430dd80699e"],["/tags/NIO/index.html","132b91de4477b22427f2d3da72ef23df"],["/tags/Netty/index.html","dc417721a7024d65ffb4a7b9df6b75db"],["/tags/Nginx/index.html","0cc1069b0829b292a3992ee76ad1d4e1"],["/tags/Promise/index.html","954f9e3aa46bd6df6e822a9ff570e1ad"],["/tags/RabbitMQ/index.html","0eb7f3ab97dd907a76b1d0d1ef9c0849"],["/tags/Redis/index.html","70f1bca5bf467023e190e730a852cca8"],["/tags/Redis/page/2/index.html","4563ab3d980e9d7062455e76e2285c66"],["/tags/Redis/page/3/index.html","9d6b753d67412399a9be2aa3f5d3c147"],["/tags/SSM/index.html","ef24dfae7f7a7b1c04030a8e0e0fc053"],["/tags/Spring-Security/index.html","856c09682aa5948af1f90235761f520c"],["/tags/Spring/index.html","d581de5a5321044f1a77be41defa1324"],["/tags/SpringBoot/index.html","febcfaa9656f78670f317b64d16432b2"],["/tags/SpringCloud/index.html","b9de1bd793216806d7f25398f4d1fa4b"],["/tags/SpringMVC/index.html","1fced03fae8bbcfd17c9ff9690972ff7"],["/tags/Swagger/index.html","aeaf2d5d43f4e8c8bd247256bd2489c0"],["/tags/hexo/index.html","9f3e308214b70d3a55c4bf45893cfbc5"],["/tags/index.html","a4359f250134791287946bea36f8c2c1"],["/tags/jQuery/index.html","346a7ca9e46ddfc4712085cb26f33f45"],["/tags/java/index.html","aec48fe5660ac83ffeb5569fbd85184f"],["/tags/markdown/index.html","775fbb466872c2fd4666479b2ca6667d"],["/tags/noSQL/index.html","de937a89adfcc9247399ee4f39776268"],["/tags/typora/index.html","cfca0e95e44c2f6a58ccec6fb583d4d8"],["/tags/vue/index.html","7d30860b567ea661805148e24bbb79fd"],["/tags/享元模式/index.html","ccd221b74d64df740f217ade3c0f59d7"],["/tags/代理模式/index.html","eb355ca83768195bde6752db401f805a"],["/tags/内存管理/index.html","0979749035eb7ee7d6af84d0f72e74a5"],["/tags/分布式/index.html","bb0bb6cfbff80173dfb909e5222877be"],["/tags/分布式系统/index.html","634f26427c8975239f9c8bce41353fac"],["/tags/前端/index.html","97ac67fba84dc17d8f99e025c99c30fa"],["/tags/前端/page/2/index.html","f5c46a3182c813e07072cb259e08f2bd"],["/tags/博客/index.html","7e8f8a812b81908a6912b2fcdc60cc05"],["/tags/后端/index.html","425acbe7ac8f6817f40c15e390dc5b4f"],["/tags/外观模式/index.html","d91d538b2f3a840787b61820880352b2"],["/tags/容器技术/index.html","1e1b236704c710dd43db54ad7cf61183"],["/tags/工厂方法/index.html","1be7ce630ba962e7ad464a83ee061df6"],["/tags/微服务/index.html","f2cd4a5c9fd19c83c2f3bb90605015cc"],["/tags/抽象工厂/index.html","a535baebe7fe5d18b6e728452bdf49e7"],["/tags/持续集成持续部署/index.html","cd474fd723a59ba11f2cad1a6edee087"],["/tags/搜索引擎/index.html","c1402cf18fa4b50ad91433318c925221"],["/tags/操作系统/index.html","1edce89728f5bbbc6aca5b0cbddf999f"],["/tags/数据库/index.html","3cda7f2373bd2eb644e79b6f4aa578fc"],["/tags/数据库/page/2/index.html","fed18787643568a2d2f24bf62638777d"],["/tags/数据库/page/3/index.html","2d4f92ae9681610d56984e6f0c26fac7"],["/tags/数据结构与算法/index.html","0f23e06427d13b1338015ac68596640a"],["/tags/数据结构与算法/page/2/index.html","edcb13cfa3bd06b3d1da78297a8e6530"],["/tags/文件操作/index.html","ecbf60d071b9c5e9f635c682260312fb"],["/tags/日志/index.html","b0cfadab720bdd9bacbe54af12e8d4cb"],["/tags/服务器/index.html","f897b6a1a5a94c848951a3677cf660a8"],["/tags/权限认证/index.html","d4ac9f684bd30059ae7498b422ef5faa"],["/tags/桥接模式/index.html","148ffff30a1be6ddf61e62c1c1f05cc4"],["/tags/模板方法模式/index.html","d055b465c80f548032cf4fa0117f00ba"],["/tags/死锁/index.html","bbb923b790b5a6381c2502e5cd549afa"],["/tags/消息队列/index.html","21a37b822603e9d9438591a3cc0841f0"],["/tags/版本控制/index.html","e5eae7897846383726c57b290003493c"],["/tags/策略模式/index.html","6dd3940a11b7eb71f15e4926f399aeaa"],["/tags/简单工厂/index.html","0557c64ffffb31bcc9e1cb0b8becf2bf"],["/tags/算法/index.html","23517609d8891354fc69fbd7a33df43a"],["/tags/组件化/index.html","b625191442541f7b4c19964b1bbffbaa"],["/tags/缓存/index.html","07fb5061e4c0bba73bdb2d283c4d3016"],["/tags/缓存/page/2/index.html","73a77fe1f1427cb7660cdf55d63d85d1"],["/tags/缓存/page/3/index.html","a1c847ff6ab55696f0a6578d689c333e"],["/tags/观察者模式/index.html","2ad59dcca87d647f2f5e55e75708a360"],["/tags/计算机网络/index.html","464cd7f0aecd0cdfd3b9a0da93e54cf1"],["/tags/设计模式/index.html","5f1d0b8637e580aeb52601d34c0cea6c"],["/tags/设计模式/page/2/index.html","1237b46be7d83771e5bd773f27b0d231"],["/tags/进程管理/index.html","a4f7d99f22738a4a49f22d1201bd665f"],["/tags/适配器模式/index.html","934fc7e459b5b57de94c63ff28eb39dd"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
