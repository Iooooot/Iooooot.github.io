/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","5331346bd26afa361ccdff27ffca54d3"],["/2021/02/22/工具的使用/博客的搭建/index.html","16df028f5eb63ad9178ade33df8075bc"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","1a3f32a1c3fdb6b53912a34f527ecb7a"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","f7b9447b191b63cb5de0f951b68080e7"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","acb7de4063597961e273308045cb8d30"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","0450c8a883a5d8ed286e36664308f6dc"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","3f6f714c750b8ee31c75f2c97373293f"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","d9b5f68a246e49f1113aed4f7762ab1f"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","e7cda5f45f0fdf452e014bedd0bd3806"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","2cfa2bc05ca2c70b873645ab2a6de076"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","c3ddb5ffb492dd3ca8d061449843456f"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","a146a3ff2afda56ed9963515aea58077"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","01aacd19db2bec3be3eeb9cbc1dca45c"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","93bd3b06bf23071bfc553054592f9d1b"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","c6007807ed43bc08c53e62b14aea4c6e"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","097e35978fe037a9f26db87b83f9860d"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","510e3c1472a28056825fa5f05fe1c145"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","8de95c5314c4214c3dd4ab085776c7a5"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","244e577047821fb5f1da2cec84f00639"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","285542a6047acdaa3e5b8a8e102aea43"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","7f0086943da863ddaf47258701a84a0a"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","032d8dc0d7ff3cac667d915bca7d066d"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","50098d5a3f256ce92438ae316f9d7f2f"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","f07e1ee682ffd6efcbb548e2c11cd07d"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","09bd7a891d7a5545d6ef6cb810f8554a"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","235a16432f245c9c0cd75b18b9297a06"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","7962f0c247606e9a7ec61b6afabc8291"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","6cd814744d9cc4e36efbc2c06a009269"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","4d23f85466b8a2ce370c9932cd8bf5e2"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","ffbcb629e99db41dc8c1794f109e3ef6"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","2f6386a221f11c047fb9b73365e8f9f9"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","c52eb403cf8c9179bf485590b3276a95"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","32de85901512480de2a67c723496247d"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","01fd74d7231002fd37d81460ca7690b3"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","2618d9147d6c4e3fbfcbe5a5ac92414c"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","4ab1e72d3e36c8e158575da3b57f45a2"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","84eaf928772df2f8a7654424028ba892"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","f4cbe2c3d9841aa572b688057b9807d6"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","5fa1b1d6bc7904930bc9dabefc376a28"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","fc602863b5600e0b629c400d8f34ee72"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","626c89afdb5aaf2a6193fc0a9e3a5419"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","c713597af00fae8e4dc50c5834e26629"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","bddbc605acc9a5db2dc4349be707bc56"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","fb76314f6675f842d47baa6effce1061"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","993eb9f8e440736a32059cca762d762b"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","9a3dcc80308108104ed49e8fe19158b2"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","db2e0ccdd5ae65ab5c1d6cf05f070cef"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","4f330537b59a04360c6b61806ff69d60"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","77008d65a39d596ef4584712473ec4e4"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","f5dbae925058fc3a2b48be62aa082e8e"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","4e7aeaf71d4c6cbefee0c9babb4e330d"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","086ee6f77c0d4eb4e0374fe6eb512c76"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","6c05321496da824a44d004f092efcb1a"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","a7f8dedbf26962d8b23daade0aab185e"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","e39197ceed30005072f42a08c418a264"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","e1726b742df4fb0cdd64d3754b144fa3"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","1c3b1f316ce7bf8192a9987cb6ad6ab5"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","cddd930dac9e59c43689d03742109f90"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","d47d8e82ba0d5145a856e5a0e9a230b9"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","00176ff8f0c68ddf47d51b72fa0819cb"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","ca8f420de2c75b166e4361b912708bd1"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","310992adc3992c5d5d4341bfd19a7e94"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","b0c79f077c46b95510af3b3809a23e5f"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","783ac5db984f89da9d6ef53292cc4f07"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","04f2b4b50624720dd545941e248d6651"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","64edf34aa53d4d6151f05e94a7c3cf5f"],["/2022/08/17/前端/jQuery/index.html","8b90be97612b6f358d5c55ea1045c7c4"],["/2022/08/19/前端/JavaScript/index.html","88e12ddb7b3635c4402b7e666d6a0d16"],["/2022/08/22/前端/Ajax/index.html","1e7313d2235969e2978feb66ec708fc8"],["/2022/08/23/前端/Promise/index.html","fe013a17596d223efaea9d6de1bd6143"],["/2022/08/24/前端/Axios/index.html","321e0351cc8a74f8a0b6b08209b52321"],["/2022/08/25/前端/H5本地存储/index.html","f1f1c0c480df6377aeb75be80a125cbc"],["/2022/08/26/前端/mock/index.html","c7b2d9bf895b9fe0be530a7381c80d1b"],["/2022/08/31/前端/vue/VueJs/index.html","8c3883b8c10ce5156e2d2eda3e659894"],["/2022/09/01/前端/vue/vue组件化/index.html","e0b26ed43c38246f69ab1b92691632ac"],["/2022/09/04/前端/vue/VueCLI/index.html","ea497b341cb0415ddae0ccb2c6c2438a"],["/2022/09/07/前端/vue/vue实现动画/index.html","b8085c2c1ef0e90ef7387b06e426d694"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","7e59065d9277318fcba4a688cf9b3144"],["/2022/09/10/前端/vue/Vue异步请求/index.html","b17fea1c280778016405e2e9b1abd064"],["/2022/09/11/前端/vue/vue-Router/index.html","14c08bd61ec8f929794444528e5ff60f"],["/2022/09/13/前端/vue/Vuex/index.html","cf1617b5f25a990dba049d28e94f6ce7"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","cfd678aeb0ecd4fcf21dcc33d0e7bdbc"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","6d5e4f396546e09cd452d237ebcaf138"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","01d33b04c590b6456558cf5793e7107f"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","91a541c7d0230bf7121c5bf30ed6dbec"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","02d46d2983a605b28acc75dc8b58d360"],["/2022/09/28/DevOps/Linux/Linux/index.html","7c091b9dfa2331a7703579f73415b2ba"],["/2022/10/02/中间件/Redis/redis基础/index.html","6fab930e7151998211882b1c9f71fd4d"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","2cde7728ffdb02740e28deaf5b5bef41"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","b2e24a6db31134594177fb9f2bfd2723"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","9505c248f610a01cfd23e917eacf3414"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","740355279ef8ce7671c4aa0357dc4527"],["/2022/10/17/中间件/Redis/Redis集群/index.html","781d4f47077df575b8421398582f5dc8"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","9d844fcd9b8d29c1ef67e9f4f4c3e061"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","261daa9c9a73b6c03063447ef2e8e71d"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","c9f11f79d362c494493c09b8d88a6b58"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","600ae7fc713033a1d28a07eb26b76641"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","583d8d6db2d6eb0c060b37afa0b085f5"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","1aee1d6195d752cc1a0312c180f4cf63"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","93a1e85924d1262a95dd380ae8d12bbb"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","6c3bacaf94eb9728988ca603a16be531"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","1a3a8068c63f11e508ffcc6855b6040b"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","32cb0bbb3e4c39ef78f17999609dcd5b"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","767ab02ca0856e77570cedec5ba65df7"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","02077c396689e8d5db98a4d708562e1c"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","ed48cf14efa1a3d12d2047b43e6eba99"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","4ec964215e501e0ef9391e81b8e4223c"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","c7217511520214d5195a869caf6bd405"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","f309c27b9b5c855627689845dc12f894"],["/2023/03/10/DevOps/CICD/CICD/index.html","8eddf5cd4f2ef1e165760617a848cd77"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","b750e54273c42d2703932ddf65ed96a4"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","fcd8d4cf189401789d3ad9b0f71c6ab8"],["/2023/03/13/Java/NIO/NIO/index.html","22ccf1853b9d3c3ce229bb32c4690475"],["/2023/03/14/中间件/Netty/Netty/index.html","3bdbbd8e7653b01ed26b3e0fae5f7e2a"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","b063d0a2b7e88f78801595cf4c6ca78a"],["/2023/03/17/系统设计/分布式系统认证/index.html","a3da29a73678a8f2ae553e6df21b88ef"],["/2023/03/19/Java/JVM/JVM概述/index.html","bcf3d70dacdab77d53bb23600bd2e0d5"],["/2023/03/23/Java/JVM/类的加载过程/index.html","e3191e9e42294aec85eef16d111bfb8c"],["/2023/03/28/Java/JVM/对象的实例化/index.html","ee8fe549b80df4e5b9b44aaef9e7aa3b"],["/2023/04/01/Java/JVM/运行时数据区/index.html","f46c5a486099edd89dbdf12493e77aa6"],["/2023/04/04/Java/JVM/执行引擎/index.html","91cb831305dcaf9fdd539c8672e8c85a"],["/2023/04/06/Java/JVM/对象引用/index.html","7d68b75a48b0954dd07013268422c94b"],["/2023/04/09/Java/JVM/垃圾回收/index.html","7a2dd5528d5afcf085669ee304894ab6"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","069d111bfbccb9d500c8c93e7d373b4a"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","9ab2b910712eb644a84ea2ac1b9e10cc"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","4e019571a01e9a7b687086e696a76538"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","3b74019ce8e8fa4f4a19b5d3e689179a"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","18197bc1e3239ff19002aba1a8c22767"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","d971ff48c2342e741dd7fc8778c92b5a"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","352de8334431fddbf29fe65a8cf426e4"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","53f17c03e3e589e8762fcb414d524870"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","03f6fb525a5a86f0fe565e27a69d3f82"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","ffb1214fefe1b24ba52d78b2859c01ca"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","8ad21ca9e32ace187e652d05a2adb753"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","54554a1e837bbc1c6cf3e317909efce4"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","2b5e7a8f55b11f4e62f8017c1090240a"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","1b096b7acf819f16fe0a48f6077a527f"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","2b390e320f388855ebd1f08c149f2927"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","1c7759b36e231adb89e8f3fc68e9f854"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","587e474e22daa6c40a9bf01e5a94fbbd"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","ffd682eadf5556c4a810500288ff0948"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","76b98f6aaaba4133d129ad456b849367"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","057bf407f1bfa9421cf73c3426a5ee66"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","a0137dcbc2ffeef55fbc00e4bc143bb9"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","b2a10f318b9b2cbd12b18ca996699f34"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","04e930226a1b14ddff2caf79fcf2d8e5"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","9ed704e6e0a3ca26cac41daa25877fe5"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","b8bac37c9836fddad63d9b1bffd4be4f"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","21980c1412888ccb78584e144a795a60"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","b30d2f21dedf1c577250ca8893a3fccf"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","f8172a25e5d2375b87f79002deb31f8a"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","d3bfabbf1276f92b239df3b794abde87"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","1aa9d8c8ee8c13eb35f2a7adbcf635b8"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","47735ef2acdffc993f0f263926c6d91b"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","d63dd198721b2972d12a7b368f1adfbc"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","1506bf81ce6c3396226b0b78a9e356ad"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","8d3bcf6c1ed8e4d7396cad91ac187f50"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","0150c0bf2ed8eb03ca0b31673efc3d00"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","ab4c9a2722ca0c53c08da17d57b4c9b4"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","58dfc4f568c1aa8e5d21e6e52424a5f0"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","50923822da4550dd41a8c84068a4fb89"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","04698d10345256c54ad5a672703dd951"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","7b0982556958e38c10b82644cad2aad9"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","97e50527ebca0339eecfcc18844170a9"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","ad0b02272238e1eb731f2f303fb8dca2"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","21494b67141ac799b5a963ddfaf737b7"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","c7d2fc809a310891a156795a3c8589f1"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","cbd64abb6b6a22daf8e3d81e8bd81606"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","a384f21ae802e73a2d07b1e443bde6d8"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","9ba15ed082f6f20fa8a5152455a93474"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","0d76bfb0f15ffa671e43b7db8c0c2d0e"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","a66c834e5b8b609e70aa5f20edac8a88"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","8cd2c6401ef3b88df544e22218a3f8c9"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","8d212d61f9246c54ea427e8e16ff2c61"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","5c1fcba96c277f45df7ef6174be156bd"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","c69da24f0eea2e8802bf045604e19abb"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","372d87623e0ecde6b4cea01dc28fcf5f"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","260b9666ec411689538748aa4249a467"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","33f891b31722b360622b9b0902ac421b"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","1570d6d5b852d113830b4e1ccb5f052a"],["/2023/09/04/中间件/Redis/Redis事务/index.html","6668f04a4af17090e1d097dea79dfce0"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","5a5ccbd5d9067f3f6aa6bb8b2e4a2135"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","4b4bfe9f2edd3fd6c951fa3c046a2b99"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","c42aeddcca6add8d205d67dba5989a89"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","8d25463ef3d91d3a04eb6ad3ee90e7ef"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","cb24a1912999fd0785c52e4b63f7eaa2"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","1e2a0959e0c474a43d875ca0bcd1c33c"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","882098966880c093d2df0908484d6d21"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","5d080fcd132feb7e83789f2615f6cec6"],["/2023/09/22/零拷贝/index.html","dc745a35d5985381f80d0c620f5939e9"],["/2023/09/24/JWT认证/index.html","4666620a1f5f34df6e291a79844153ef"],["/2023/09/26/Reactor模式/index.html","6fc0ed1fe11e1ad99be39ba65008b934"],["/2023/09/28/Java内存模型/index.html","02534935c4fb1f77eb79da6dfe36c58a"],["/404.html","28a7dea919408935493d9cdf1f4e7067"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","70d0e233e8ffad39a0c6da930f956c89"],["/archives/2021/02/index.html","28b18374d67c123c7185b5545f593f17"],["/archives/2021/03/index.html","a976784cc2562d5091041232e506f925"],["/archives/2021/03/page/2/index.html","77991d4680ff0a57b399a4f4cd93f807"],["/archives/2021/03/page/3/index.html","35d5339dd7ed336e0eae48c378bb66f4"],["/archives/2021/04/index.html","4417258d121d30ec8245a8ae4c70aa87"],["/archives/2021/04/page/2/index.html","1c121e02af8fc8b989e6094c05fa4efa"],["/archives/2021/05/index.html","0f214dd52bc53aac3bec1632bea9fd28"],["/archives/2021/index.html","1c10de7525bc13761e889872568f81c8"],["/archives/2021/page/2/index.html","c26aed4fe2617f27f61ab12580f04043"],["/archives/2021/page/3/index.html","0bcac0b43edbdd627c304ff0dfbada69"],["/archives/2021/page/4/index.html","ab16e7fb35f4b21bc9e6ce26fa278480"],["/archives/2021/page/5/index.html","4996ce31d9fdb13a3d26fac3742fd59f"],["/archives/2021/page/6/index.html","f922478813d54681807b227783aa5dd1"],["/archives/2021/page/7/index.html","995d690b2c500f4a61c39e879f26e9f0"],["/archives/2022/01/index.html","29567204e5025ab1fcc3d1ea4751f8b3"],["/archives/2022/04/index.html","6c0f3f00eb983a723b757702dcb3ecaf"],["/archives/2022/08/index.html","3b340ff212f6f23b82f64e579851bd5c"],["/archives/2022/09/index.html","d87f631c6693fe5892072a35b22468da"],["/archives/2022/09/page/2/index.html","c9a856546ffe3f73b952e73344c01d1f"],["/archives/2022/10/index.html","ff382017377f08584a9266290612d066"],["/archives/2022/11/index.html","7e2067f1c6f662ee94e003b4a968c919"],["/archives/2022/12/index.html","7f4bb70581973132ea332c404c8011b9"],["/archives/2022/index.html","06f26743b61c7befcf0b6216b261498a"],["/archives/2022/page/2/index.html","5d34b0e34af6272b89fc8556eee4c558"],["/archives/2022/page/3/index.html","f75114f976bfebab753e0e45e586780a"],["/archives/2022/page/4/index.html","389a649ff2e4904fbbd5d71140303b89"],["/archives/2022/page/5/index.html","0e85c6a77c290b54cfb083f0916a043d"],["/archives/2023/01/index.html","957cb207ae4f406564121ee2dc1afe08"],["/archives/2023/02/index.html","59b951335ba56b3dea47e916ea300e93"],["/archives/2023/03/index.html","4f41dead676c1b889e40f497a0df6856"],["/archives/2023/04/index.html","1c3560172238100a27c492359ac39ea5"],["/archives/2023/04/page/2/index.html","8d5d48f8a6d011ecc433057beaf6d52f"],["/archives/2023/05/index.html","399cf7a92322f42cbc43e36f1bb36390"],["/archives/2023/06/index.html","85888afa8c3bcef23b94a106a69fa8ed"],["/archives/2023/06/page/2/index.html","b9537a3732be650a8bc170b12d388868"],["/archives/2023/07/index.html","23403e39ce2eebb05114232bebe60905"],["/archives/2023/07/page/2/index.html","dd67404d8a6f67ae61d476e2cfc71cbc"],["/archives/2023/08/index.html","28a6e38a954dcf9dcc28cf3068ff2fcc"],["/archives/2023/08/page/2/index.html","9584ef6bcd3fc2810e776347f96f228d"],["/archives/2023/09/index.html","062fb1b237cedd24a9563e3e410282f9"],["/archives/2023/09/page/2/index.html","b38b89f22d52aca6fbbe30e3003eff9b"],["/archives/2023/index.html","86f2f50664500fcdb65aa9936f72ce9a"],["/archives/2023/page/2/index.html","5149835e640813f2e7c744e8d3a394ba"],["/archives/2023/page/3/index.html","2c619a52fe0c77cb3ec40b41034de499"],["/archives/2023/page/4/index.html","a60bb1982061b2fb4ecf6ff550916d6d"],["/archives/2023/page/5/index.html","af3fb1c200f7194ce805a035017044c0"],["/archives/2023/page/6/index.html","8ec0cbb28f8fd88fb8467891b01555f4"],["/archives/2023/page/7/index.html","7f146405f6bbb5e10aa3672a7236a51c"],["/archives/2023/page/8/index.html","db22f05bff3626a467b600145d3ed20f"],["/archives/2023/page/9/index.html","9950f2c84eee26826795500eba2fdf94"],["/archives/index.html","2c9331e5da923414a82452734670ff17"],["/archives/page/10/index.html","22e3ea068c3db55858a00881a7d42061"],["/archives/page/11/index.html","111906126c57964cf5ffe389d25dfba1"],["/archives/page/12/index.html","045bf02368346182d02470df6f14f34c"],["/archives/page/13/index.html","363b325e5533536b7b4113ef6f7cd89f"],["/archives/page/14/index.html","8860c0139f6a21327de1b260d0b0bd0c"],["/archives/page/15/index.html","8e9e073fa100af51449e9130242b81cf"],["/archives/page/16/index.html","b3127a70abf4af3250e26fca862d485d"],["/archives/page/17/index.html","c524bbab7df79d0d14443b26b3467c47"],["/archives/page/18/index.html","69b3766be8c65ae8a2e42238e9d0dddb"],["/archives/page/19/index.html","e75f6578db834a6cf86921b587b00e3d"],["/archives/page/2/index.html","8ed41329c8936d8583be3ccca9c09028"],["/archives/page/20/index.html","2684a7d27cf5060a9e699a3a67a828e0"],["/archives/page/3/index.html","8392c568c831e613a168bbf06c56d39d"],["/archives/page/4/index.html","415a0c8b6448586790b517d137cd19af"],["/archives/page/5/index.html","db8d9e73df450472338d4efe6695e516"],["/archives/page/6/index.html","2b211b0bc4287772caf3808da858f562"],["/archives/page/7/index.html","499a4cf02ccbae8243c93df951a38c66"],["/archives/page/8/index.html","0ce7f0986f6cea5871bb4b151d9b9ec0"],["/archives/page/9/index.html","b7f99c804bc8d7f07c86d4af11645331"],["/categories/Devops/CICD/index.html","d6ac0713af91c764f778e117304537f1"],["/categories/Devops/Linux/index.html","769ba55ba7d1d3fa0ffdfe18b54668d5"],["/categories/Devops/index.html","e40575471cf88af90a9eba845119ae1f"],["/categories/Java/JVM/index.html","f36258dc505a35b9dae94669c0e0c13d"],["/categories/Java/Java基础/index.html","3f4556a57d0925d0be193cfee8afd072"],["/categories/Java/NIO/index.html","a2962e7c3aa0c2fa62296b0951cad9ea"],["/categories/Java/NIO/原生NIO/index.html","10e9e0f60933501201bfb51d4831b663"],["/categories/Java/NIO/文件操作工具类/index.html","09cfa8dcb7da169e02b5fe11a19a37cc"],["/categories/Java/index.html","1ad0e3d65b5d0999a863ece93f7c0408"],["/categories/Java/page/2/index.html","d1c1364186494c8a5b95bf93a2389738"],["/categories/Java/并发编程/index.html","ad0dbbde7953c4626d52cc34a4fbc269"],["/categories/Spring全家桶/Spring-Security/index.html","21c43ed16d439dc473042f39475f66ae"],["/categories/Spring全家桶/Spring/index.html","bb92d30eabc793c4fdde95a975aca5f7"],["/categories/Spring全家桶/SpringBoot/index.html","1d218a3180e59260dd8b9814b853a9bd"],["/categories/Spring全家桶/SpringCloud/index.html","79669586df76643072df67f9a66fb927"],["/categories/Spring全家桶/SpringMVC/index.html","0e2f4b437e8d6533242111fd43b49cc8"],["/categories/Spring全家桶/index.html","3e42402166210d6e73087f12865495d9"],["/categories/Spring全家桶/page/2/index.html","600938056e3b21d4fc9fceb7789f20cd"],["/categories/index.html","f08441f3571e6c739cd11ee0c85148eb"],["/categories/中间件/ElasticSearch/index.html","e918c0b49d5cee23b4e4911b503ea679"],["/categories/中间件/Netty/index.html","b0883c2db9b368a01f0d69d23c3e194d"],["/categories/中间件/Redis/index.html","15673d8a8f649b5e6e4b4085f544703a"],["/categories/中间件/Redis/page/2/index.html","43c549a2e0bcdad24a48b011742544e5"],["/categories/中间件/Redis/page/3/index.html","f40744f4a6c5179fced508d7936799d8"],["/categories/中间件/index.html","eddd0f9d9509827bfd35c1f8c61fb8c5"],["/categories/中间件/page/2/index.html","7bce02b49bbf64fb71b0add41020d37f"],["/categories/中间件/page/3/index.html","425253b3e23b66967b0a800439dfba0d"],["/categories/中间件/page/4/index.html","5adcdca358e366f157a16fe80dfbf017"],["/categories/中间件/消息队列/RabbitMQ/index.html","4f0bcc0de7e2b0f7caaba93572a01063"],["/categories/中间件/消息队列/index.html","ee30211eb3a74b0a6d191321510559c4"],["/categories/前端/Mock/index.html","dc96816e707abe0aa1f078e73e84604b"],["/categories/前端/Promise/index.html","269aaf72e8124e002c9a87f8d16af5a9"],["/categories/前端/Vue/index.html","07f033d5bc7fe99f89262cfe7c06b3d3"],["/categories/前端/index.html","703f0c67713e8dce0e0d0bda28d99025"],["/categories/前端/jQuery/index.html","18e1989f340128328e792c04f0c6da8e"],["/categories/前端/page/2/index.html","1fe4345ce27a76a52c1a06b2200a2683"],["/categories/前端/原生基础/index.html","eb729404d19355d22c90cb5ecbb73357"],["/categories/前端/异步通信/index.html","2478b10e7f2766f09ae60c5c0ca9a793"],["/categories/工具使用/Git/index.html","8b190f7e4c5dc8be3e404f88b2d9acc0"],["/categories/工具使用/index.html","c88e8803d9790fe344114fa60b7394cc"],["/categories/工具使用/markdown/index.html","8cca5b19589470c6854f0e1d6e0b5cd4"],["/categories/工具的使用/Docker/index.html","970828c66d5d1eb8ba882abe158db0cc"],["/categories/工具的使用/Nginx/index.html","2b65277ab11134e44dee58585934f734"],["/categories/工具的使用/Swagger/index.html","826149e1383b652c2915160e253031d3"],["/categories/工具的使用/index.html","5f59ff1772faaf0e47fcc730c3b1c6ba"],["/categories/工具的使用/博客搭建/index.html","af932ec17c5688ec4a5fd7d3a51f7134"],["/categories/数据库/MongoDB/index.html","adecadb53fd9d6d42f6d797ecc7d80e4"],["/categories/数据库/MySQL/index.html","80fe6a55e4efd157c63915de0ae18ba3"],["/categories/数据库/MySQL/page/2/index.html","0f7b2209c94e2a6b97b567d4e464c2cb"],["/categories/数据库/MySQL/page/3/index.html","15e17fd5090752a62129f3ed9631cad4"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","84ce672959399f623ed9bb25ccf74067"],["/categories/数据库/ORM持久层框架/index.html","e06b1ed0ede8523a0af15fa36e8c7eb8"],["/categories/数据库/index.html","4933b2ceff74e877c0d782454d02c070"],["/categories/数据库/page/2/index.html","7454dfd74d33c1feffaabf9f5d0ed690"],["/categories/数据库/page/3/index.html","02eaa65b163b69e69bab48966d360a2d"],["/categories/系统设计/DDD领域模型/index.html","75d0694e142cfaf9d8ee45db5353e1d3"],["/categories/系统设计/index.html","dd61cfc6f1db845caf910c31697a01c8"],["/categories/系统设计/page/2/index.html","8b4a829f2d8d0a27210e2477639afeb3"],["/categories/系统设计/分布式权限认证/index.html","14874ef2a58c7947c61d601a7cc8ae49"],["/categories/系统设计/设计模式/index.html","cb87486d1b5e83f0c7c0e16ea0d52514"],["/categories/系统设计/设计模式/page/2/index.html","171ce06da2156463d25992d0ed3cec76"],["/categories/计算机基础/index.html","127ff0c302eb82ac132c5e50beac4c92"],["/categories/计算机基础/page/2/index.html","8c90bd22501f3873a8da2af0cb94468d"],["/categories/计算机基础/page/3/index.html","15c0b9612af8bf9ad41db2c5e6cd3447"],["/categories/计算机基础/page/4/index.html","132a618c331b19624f6af0aecdcceece"],["/categories/计算机基础/page/5/index.html","57982bbb178134e324e66e4bc5d65c1e"],["/categories/计算机基础/page/6/index.html","19979f50e6c449d4f29a460af469d1ea"],["/categories/计算机基础/操作系统/index.html","08d8be3f0ebb76e218d513c7bfb6fff3"],["/categories/计算机基础/数据结构与算法/index.html","aad530cd27761340a22c700971ff4674"],["/categories/计算机基础/数据结构与算法/page/2/index.html","0ba7912dc17416d1df60b4f7c9383a8e"],["/categories/计算机基础/数据结构与算法/page/3/index.html","7d0ee2f193c5e2382ee337758495f754"],["/categories/计算机基础/数据结构与算法/page/4/index.html","5b1aea17045ad6853ca83b9a26b7434a"],["/categories/计算机基础/数据结构与算法/page/5/index.html","ba24fd68bd554a36252fdca5c208d813"],["/categories/计算机基础/计算机网络/index.html","397377897829fb64b8aaa9d4851d7e19"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","029fcaa9d757c7c35103ac199a51aa7b"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","dc665b3b797b8b054722be22b12fe16e"],["/messageboard/index.html","0358af415929cbe4dcc393bc7f2ebb1b"],["/page/10/index.html","1bb4372064aba2214d9d686fdc251fef"],["/page/11/index.html","be9e058cacd91d9bb402cbc588d01174"],["/page/12/index.html","be3b873157981f70f811bc01e5b488e0"],["/page/13/index.html","af94b518b0eb981072f9822f15c757b6"],["/page/14/index.html","7aac14337d2c63abc77f2e337a89a4a3"],["/page/15/index.html","afc8ad5c4b3ff4ec536fb90d65711b70"],["/page/16/index.html","e02ba4c3f8124ae73220b36c9e1f660b"],["/page/17/index.html","926cfcf5cc68c9dc99b26629ab9daaa1"],["/page/18/index.html","e3c6e4f0a59d6424a952315136f82a87"],["/page/19/index.html","008d4b48c24440caed58de817d42cd55"],["/page/2/index.html","76084da91bfe2b2a29fa1f82bb44dcdb"],["/page/20/index.html","a010071f1fe096a48fa921ba07a779de"],["/page/3/index.html","b7816316e599adb192fa6dd764d9bf13"],["/page/4/index.html","fca632666e0ee2d94ee900b63adeb228"],["/page/5/index.html","891fc19122d4e15e8e7a6658ee6351e2"],["/page/6/index.html","5b643815c4c54e6b4195195d9b3be324"],["/page/7/index.html","5b4946f963847ec3f29c264d294297fa"],["/page/8/index.html","2838c23545fcf70cebf8ff765ed2432b"],["/page/9/index.html","98386ff2638bdd5f736c147b634c2508"],["/sw-register.js","d9dfa9135aad923bef00dcbf716d358c"],["/tags/Ajax/index.html","3a2cdf1e629012dd64ef3df5a956b84b"],["/tags/Axios/index.html","89344cbfdfff4d50c480cfecc188be03"],["/tags/CICD/index.html","786fda85514dab0f4ab956da282a770c"],["/tags/DDD领域模型/index.html","61092c70b28cf2ab7e46b66ea270f438"],["/tags/Docker/index.html","ea21a1e326cd61e38b7091bf1ea18868"],["/tags/ELK/index.html","9dfa8c9497e1fd08bd067a916d25b598"],["/tags/ElasticSearch/index.html","91f7832d0f43f92d63a706c0277bbe5b"],["/tags/Git/index.html","c38806912eb3af7ba017704002fc881d"],["/tags/H5/index.html","90a3cb020d7a507bb83c973800f3aeeb"],["/tags/JVM/index.html","65ec81ca7cbcbea5e92ab63fa8d20b3c"],["/tags/JVM内存模型/index.html","bfa235fe09ffa98324ed462e45b70d63"],["/tags/JVM执行引擎/index.html","ffeb7d7d29397c447c2b66cadecae42c"],["/tags/JavaScript/index.html","6c43ab333af7f90a5a9d113f4b99a67a"],["/tags/Java内存模型/index.html","97b59a6c110a4f35bb01fce3aabaefe7"],["/tags/Kibana/index.html","8525a380c9b8c2ebcf6687541fbf06c4"],["/tags/LeetCode/index.html","4dbec57404a5d0a250a5e4dd2723a489"],["/tags/LeetCode/page/2/index.html","eb71d93f32cfa0ca51c13aa214c834d7"],["/tags/LeetCode/page/3/index.html","0dedfa0e02425ba14339b1aff96240b3"],["/tags/Linux/index.html","ef73db389fa582817ad0dd281956e783"],["/tags/Logstash/index.html","388eb9991cf54972cac39a6e35def82b"],["/tags/Mock/index.html","93774d6f953dbaf57eed900e443d829d"],["/tags/MongoDB/index.html","113f175d053e16f0e5158596b80a64de"],["/tags/MySQL-事务/index.html","53c1d6732361d880e3542a3ce7277903"],["/tags/MySQL-数据类型/index.html","82922277aa53daff0e3d19fcada19671"],["/tags/MySQL-日志/index.html","421da792db1d3c6f09dc1086c4ede04e"],["/tags/MySQL-索引/index.html","d68deb3f3c757c453b53c7fc2806cefb"],["/tags/MySQL-锁/index.html","a66c0376d2bde30085c2e6f0524de577"],["/tags/MySQL/index.html","e2dcda620ae715569c6f57325087da6e"],["/tags/MySQL/page/2/index.html","af87dd78dee2860731b9148439a1c7f2"],["/tags/Mybatis/index.html","45864e71266f87c06c8eb73e5e9f660d"],["/tags/MybatisPlus/index.html","e97832fda0a38f0349e981bc6ff4cd89"],["/tags/NIO/index.html","8c40a990ce3cd9328d8be1d1e55fcac6"],["/tags/Netty/index.html","b3a4b468e9cb4a7a258f8b689f4d738c"],["/tags/Nginx/index.html","62c8962b8f575709121a0a3db62888a4"],["/tags/Promise/index.html","d3fd82f6cddfc3501aeb2fa58a3446b0"],["/tags/RabbitMQ/index.html","5ca7c2676f6d8c0ea8da68bf3d80d280"],["/tags/Redis/index.html","15a725db36af1298c6945e9fc82b0deb"],["/tags/Redis/page/2/index.html","781c86d92f35bfdcf317a7bb404b9882"],["/tags/Redis/page/3/index.html","fda35656efe819db6758cac79c22afaa"],["/tags/SSM/index.html","0505c271ed11a16b4bc5f95ce0385c4f"],["/tags/Spring-Security/index.html","51bfc1a7d7b460d9516ece3637819f55"],["/tags/Spring/index.html","5531ff3b88e04c81ead9b0ec683595ba"],["/tags/SpringBoot/index.html","9083626ab907ba88e1c14a48efd26673"],["/tags/SpringCloud/index.html","16186184f4ffa080b015873020bb21b5"],["/tags/SpringMVC/index.html","c9941306f4d9c2bfd4f9195547188a32"],["/tags/Swagger/index.html","99b41d85af6e182ac07f29da5a927021"],["/tags/hexo/index.html","449cd86a411c85e419cf901f2e4a7bc8"],["/tags/index.html","8971a8e60a69a6baa3d61362128d203e"],["/tags/jQuery/index.html","2cc063c0b279345602df78744f72ec45"],["/tags/java/index.html","39e68564f6cfc9763552f7bc784f8174"],["/tags/markdown/index.html","99502a3957c337adcddd8be1009d9352"],["/tags/noSQL/index.html","e5d617c5f0eafb2755367c063b089468"],["/tags/typora/index.html","6202411133661cc1e4737c1c611ffa85"],["/tags/vue/index.html","ef87f295cfbc92ae21deb07b98c34429"],["/tags/享元模式/index.html","0888e556ebbad43ff7367f2d57cfbfc0"],["/tags/代理模式/index.html","e1e2ab8e93ddd01096c453dd6341cbf8"],["/tags/内存管理/index.html","d1886031f1e8e9288823d47a7ee952ee"],["/tags/分布式/index.html","47deb6d3378d4ac8b26889ae4ccd131b"],["/tags/分布式系统/index.html","5ff7fb9def8afbfac02433d6b715c701"],["/tags/前端/index.html","f77d1a93b72b3ac369c77cf3fafefcce"],["/tags/前端/page/2/index.html","06c630cd722139f535548709507a4742"],["/tags/博客/index.html","ac973c04439bd0d3ee5ff33bf549df05"],["/tags/后端/index.html","42709426c4af2e4df59047f5386a733f"],["/tags/外观模式/index.html","48829cdd8199a65eb996d51479ca4573"],["/tags/容器技术/index.html","ed7f541d44c11f886e8dfec41aabada2"],["/tags/工厂方法/index.html","f0c0483e80435c6fee2389ce4b691035"],["/tags/微服务/index.html","490a5729e22c18c9a19fcbe051f9dfd4"],["/tags/抽象工厂/index.html","1771e9e74644515ffd941814699428b7"],["/tags/持续集成持续部署/index.html","c3ae52e5c13473e72505c0c445c2c2c1"],["/tags/搜索引擎/index.html","2cd25d2201e03a0b468393f86791b615"],["/tags/操作系统/index.html","45d52bb40efe7b5ef09c6c1fffd788f3"],["/tags/数据库/index.html","9beccaaebe48c59b81495afa33c4f1b5"],["/tags/数据库/page/2/index.html","874055f600210f6a20ca1ef527c6cefe"],["/tags/数据库/page/3/index.html","99c4f27eed2758f058319b4b46def7c2"],["/tags/数据结构与算法/index.html","42f89e9cecf8cebc4c589b95747bff7d"],["/tags/数据结构与算法/page/2/index.html","cb78400f746bedc900c12597e6df829d"],["/tags/文件操作/index.html","8d4213a0efef8711f6ab200db77b6844"],["/tags/日志/index.html","e4f867eb9a9ed686a62642e53bbf591b"],["/tags/服务器/index.html","23302724fd3b172b6134113c8bf4833e"],["/tags/权限认证/index.html","e5f6856b201770dfd95a045747ce0dbc"],["/tags/桥接模式/index.html","e6a570ae28447255b884b555fa846b5f"],["/tags/模板方法模式/index.html","ffed6f5bf0b6df7691172baf415658d6"],["/tags/死锁/index.html","9dfa0b195650469862ce003e81d792c3"],["/tags/消息队列/index.html","b1da1224d1bee7571673efe7bf3f5292"],["/tags/版本控制/index.html","db0f74fe94af30f08827af22f5fbcadc"],["/tags/策略模式/index.html","62e7f7ef61b28900838649a084873a2e"],["/tags/简单工厂/index.html","650f350586eeac0849411875f88d98bb"],["/tags/算法/index.html","037ce5ebafe74efbdca9a2bcb7204b52"],["/tags/组件化/index.html","a5875fac3ab3fc4740231a1dee275c6b"],["/tags/缓存/index.html","90760bfeb475349e32683fee3bb3719d"],["/tags/缓存/page/2/index.html","dd7ac37660946dcdffe2c89f031c1b68"],["/tags/缓存/page/3/index.html","bae3919875e38e52791d2400956cb62b"],["/tags/观察者模式/index.html","e427fdb884612a202e22a0eb29fa82f8"],["/tags/计算机网络/index.html","a80fa5ba891beeb0678789553c21a988"],["/tags/设计模式/index.html","16839f24d5b2f49305e2fb56afbaf237"],["/tags/设计模式/page/2/index.html","ae7e33fe478a80d5a3a46491d5460257"],["/tags/进程管理/index.html","744e6a85779712867914a0e9fa6a3325"],["/tags/适配器模式/index.html","d8bdce57ae65080f1749b1683ba2576d"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
