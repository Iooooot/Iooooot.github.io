/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","442630b8810a120ce177573b2bfffeab"],["/2021/02/22/工具的使用/博客的搭建/index.html","0da5dea97c7d123a1673cb0027d74ad4"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","309d118764a52a11432f7839de7b0b8e"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","3696778a2e968445d8bcd56baa2ce06d"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","d507d17cdc200685c0abddc016b6a2e1"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","2de6d8d497999d714a40c3ac79b7930a"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","9957dfa091e9a345dc7c70a42b09bb2e"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","0065294a7f286c5f122fb75883e749db"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","5e71e0d53d80f7f37d6a9075965b741e"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","d94e3218aa79f1d0b97ea001e539f81b"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","9fa081e391c5f918a7bd756176520ed4"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","8efea561b52726bcc7221b16b8deb4c5"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","1851e6c45ffbe5ddb3e9b5677973641a"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","e4be3baadb346ae06d4e7e424cee8874"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","af882ad896a0ba2cc7147ce4ed7d401a"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","e1539cae9d64edbb0af552d47dc99f77"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","b6e0a9196d9cb7737570ec584f3d48e9"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","acd43c1e5db3b762e9aa8f2ec46b8f42"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","b3e9a4f7da1218050bcaf6890f92145b"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","341f6987779f625cce252546bf996bca"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","71fab7010402277ff8459227fcb72094"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","93f090e7bf9886f3b2a5220a6d6d82c4"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","ece24a3682a6ffed9e9e38ae7b581f0b"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","8f4d32bdfa3e7c71d8d771781dd48990"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","b537b12612c7cdf26384845537cb92be"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","fcd46ff0e9f355b8ec7ad8476d03eea3"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","b80a733f13250324d9074956da1aed81"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","a192d4d9f1e8a8823403a1ee679fd54c"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","defeaee923319b759e29154d242a8354"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","ae34b1f7311b01fb7020116ebc416824"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","e0dadc1410d6a4edaf9ba793b12a97a1"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","ed94551e6413c9b2112eeb85019c5ef5"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","4815b662699dd4c04578c187e653f5cf"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","7ee59d7509588c145df37bfd783d5a96"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","c1e03dcabfb097c7fc0f2fab56175fc0"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","b287456913b16bfc734bb6a1be20863a"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","fd41dc4afb187475616354be4e9690c5"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","2a2dfdc6a9152649cf9d961b7aaa851f"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","d0e18ac7df0282c8d6744555a6a44426"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","635220cebd520008c4f9d7df1de0e561"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","61053180d1c10c864ac1ea22c13ede95"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","4573d12d130be022b9623f9d3ebd7b44"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","d33183161c67dfbdb3218f7a52fe7ece"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","103eb0bc8f5476af15e018600f6288bd"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","c9f1615994f6e2b50086898c8f023d66"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","5d849542b11a0af75d92a0c6ef119fea"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","0f4d13aa2c330602908a6d9c61c5deee"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","d1e4029d09d6fd4b88a87f12423dae71"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","b60139fc983fb5e5bcfc34660da7085f"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","866cee2c84371c376a485f06667d7e08"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","c52ae95f0aa862ccecf9bc78e3ebe59c"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","74ac3709092b23fb12a01862305c4bbe"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","835f95e06e3d0e3fe043fd2202480f53"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","25e990424ad66da2479b62fc7926f27b"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","e6b79a670f54ee2168360dd05865db08"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","f688da0963f80fe46d6f98794dd43439"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","4cc72443c04d2f1bcb1a0f9c5c276843"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","667f8d7234fb574738edbf762553fad8"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","4058faa6ea50390b237386d0c1331a48"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","15f40fe90a639d6ce81d50d8dc6d3263"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","0ceb816544a975b2f12c22b40e06418b"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","719a1d1cfa65b15887e9e5b8eba5806b"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","8f3240992b655da7d2634e8b1c73baf4"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","1fc100c706dec41d75b5ec0c4f2b807d"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","95618c368c308210141a59d1feca9923"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","811e58a435986b578a681ec5b2765417"],["/2022/08/17/前端/jQuery/index.html","370dbacadea1d94c5f30f2f630de4dd6"],["/2022/08/19/前端/JavaScript/index.html","4642c550885ea28a76227a58d093664c"],["/2022/08/22/前端/Ajax/index.html","b2fce1006116be4cc36bddc97583c892"],["/2022/08/23/前端/Promise/index.html","239b026ed25f090970ccabca7fe0f908"],["/2022/08/24/前端/Axios/index.html","df1125d958fac57dee15d1709c17c39b"],["/2022/08/25/前端/H5本地存储/index.html","f1bcf3e98851cc110fbcde037f138d5c"],["/2022/08/26/前端/mock/index.html","b494fc31de5ee2f6ed1faa850619c23f"],["/2022/08/31/前端/vue/VueJs/index.html","3ae0eaf38cd9cfee63e1d047c04dad33"],["/2022/09/01/前端/vue/vue组件化/index.html","8faedf4a5aec78752ad3c9c2ed140ca7"],["/2022/09/04/前端/vue/VueCLI/index.html","da46116d7edcd08d0439d379a41c745b"],["/2022/09/07/前端/vue/vue实现动画/index.html","2a3ef8c680cb45730c2731ec7ee09ef1"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","05afff39f35d6d8ec7add28ba5baf84f"],["/2022/09/10/前端/vue/Vue异步请求/index.html","91a4c753d4c5dd6706a1e8db4fff11b0"],["/2022/09/11/前端/vue/vue-Router/index.html","4632d633c71b7d2be01e9f4035208dea"],["/2022/09/13/前端/vue/Vuex/index.html","bd7a8512bb2fc28f26b20e3d046d26d9"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","1b918a22a0acf1ca1d0dcb057b77a9db"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","5de9c4ee911a54c2a3ccb49af3b1499e"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","e8c53f3a1ecdbd8be21efed2666d14ac"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","aa9417fc5fdb90724808df89603c55d0"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","648ae33fa3733ad2946edfa8275940f5"],["/2022/09/28/DevOps/Linux/Linux/index.html","4bdad1ff8f6e489c68789064253d75d2"],["/2022/10/02/中间件/Redis/redis基础/index.html","7c9eb941e16d1034a71d87eb8941cd39"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","07b1c2e435fde26dd617b23e7d5e4636"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","79c7321c00a3d78fb0cea1879dee0f07"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","ba39583d08511e0d1177636e7f285e50"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","2cd7f870c84ed0b7248793190eeeb9a9"],["/2022/10/17/中间件/Redis/Redis集群/index.html","b4eba7e92548b4504d02b60f9ef90501"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","0281dc5b3b858f0c4265064d6b5d0d1e"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","0899a9aec56291c425968ecc823dd26f"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","d590629057b1cc9ea4a5fe9dd0c28d63"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","abe980cb5e9dcde9670a82b8cc22ff80"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","12ee19b08f054aec0f5551670a9d860d"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","ee75cb934720d8a4182ff8bb49ad1160"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","36ecd8e5948c3e6261ac72a984cea346"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","87171c67301d4c374dda970c6ecb0b73"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","2a2a3dc25c489b96b79c246162896989"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","46f15a128056c14b23b05a9b94cd084c"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","593a4f4b8dd654b7d8a2297d6536795e"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","c06cc1c6872b0b01c20c8be0c3c99aad"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","bbbdca64b050766c7575806ca5746aa9"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","0276773701607487cd3164221b4b8111"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","0875b2db2f3665977132375b85c7f6e1"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","9d354909e0c32cba8399214f199e08d1"],["/2023/03/10/DevOps/CICD/CICD/index.html","1473cd7006e47764f20b6e7eece2fbf7"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","89ed016b2821cb66bc5682b7dc6ba24e"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","4624b6ae85d30a5442bdeaa65bea9a2e"],["/2023/03/13/Java/NIO/NIO/index.html","98b1ccb48fa60be232ecd6930d2a87af"],["/2023/03/14/中间件/Netty/Netty/index.html","80537929ce0267788ee2cac9c2248d88"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","291dae88a29632f53adfb5002df68c9c"],["/2023/03/17/系统设计/分布式系统认证/index.html","57d4bb611c14769d17394e7f74445241"],["/2023/03/19/Java/JVM/JVM概述/index.html","02fe185019967d619234d6807c53d963"],["/2023/03/23/Java/JVM/类的加载过程/index.html","40b7f24d4dbd372f1b684e9af2183cf8"],["/2023/03/28/Java/JVM/对象的实例化/index.html","9d7b059a2297b374d3df39817328dd9c"],["/2023/04/01/Java/JVM/运行时数据区/index.html","fa9a7bc30c5ebc70f242d6d86d88e2b1"],["/2023/04/04/Java/JVM/执行引擎/index.html","8af1ec100a97dcb1401c9a4aee3de6be"],["/2023/04/06/Java/JVM/对象引用/index.html","2a84fe89eeb87ae4f2c228844866a511"],["/2023/04/09/Java/JVM/垃圾回收/index.html","41d4df879bed815140194fccd68c2d68"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","99252880c97387bb6e2e3be138303a3e"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","285b66da38a9e27df6030e19dc12852f"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","5443005b07ba3a6879b2d7d83e29b52a"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","e865497d9dbbf8618d76636bfc4675a0"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","29af13270ae5263f4a6a8fb60007b652"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","413bd7106eb49add072e84149dc3a60c"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","8c440531b5a5bc89f89d26ff2890ee23"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","1890c9e061ed6be48b358d5d2aa7f07a"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","d5a03309d264ca668f097d362ccf5622"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","32503b96624cbb92d9b6cfbeb7abb1fd"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","a6c1edb28be29fc7322869d0e7a307cb"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","e53195b693610d852d76760a2e16325b"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","f79f8f0a1e0e35f97661b66da58432c1"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","9322456b12546e9417f0db116606f4d8"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","1ef057b547bd0117a16046e2aec85f8d"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","31f0d238623673af0a02292a76707cfc"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","c510e1bc712f48d983717034fe65ac3f"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","d336450543bd77e3d7a00e192c2050e3"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","9c4c72a4e3d925740268054243e5d8b5"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","4e3d905134ae79bb57ef229037c9c70c"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","2fd5b25afcb7c601e102eb13fd5fc564"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","12487a4e6d71c190ca81716618b83e95"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","c9f087a4d9a725e2adc3acc88ceac7dc"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","4ee6e9669732ff08541b76f1db7a69a5"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","0bf7201ff2f2914b7c63d55df4200cd2"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","caf5265c485bae36ff9ce5889a81979c"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","528e2f73b703af6765d1becf19de4a91"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","1b0aaaafc89f58b5aac056ce967359c2"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","8e74dfca34dadd96528e64dd64276b1d"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","9ed4168a3a56e970702b85c83e469d49"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","64312e1a84dcdb7c57837ad5a3c8c92f"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","799d975dd0411b3b26d28a8498206f7f"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","78a9eb9514837a454865b8c664874ae2"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","89e5e177eb3d21b6546b1f8bbca4ba2e"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","85d638423edcd847081e3f13a1332393"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","f1095209120a989ecb90205c9995cd46"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","d9bd48ac9a8ad0c930a69b9586821db3"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","38061f98934ebf78af571ea231894055"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","612bb8a82230a1270bed1e41877ab7ba"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","06048dd3b3af5e34e6d2d87895ed267d"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","cb621235f2a737cce8601819e24ea41d"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","d15b0cde5be7f7ab43391e3e6dd320d8"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","b9e0cf5550d4e74abd34399350f5d3fc"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","1686812636a489fab387393aa85d8d87"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","9ec655597311e73d837f486681bda7f2"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","5a75e7c997f60d6c4155cd1c8ab65bd9"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","6fd0973d4393dda2dfc9002654d6e302"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","7d1af1dd8027aa430f8eb8a244462d18"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","5342f5933fe15f5940e4a8faf538c786"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","17c7aaea1d6294a47520e5354ac9c028"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","fe311412db52ab41bfd0c9bb11b93994"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","a908a61a8e25022bf8cb13d1d38f8f2d"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","12156fecfb97d143593f331a559d6b99"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","72626e90570408ce9f3ff2701d7f63d7"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","dc415a18e81c89e58301bed902da33f9"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","c871bf0ab6c425a45ab973718b6b9bea"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","d5c2e339301259fbb768c95d1a188c92"],["/2023/09/04/中间件/Redis/Redis事务/index.html","35ef24dd7a691af621e166b2c656241a"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","8dbbc52c5dbb60cff5cd46124a0b6e3c"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","f5fade18615a01ef78df511b865abf01"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","574843cb125b91045a04f4364dfaab39"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","dac9d51356b72edd6a3c7d39c32bb8ca"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","05e803dd285c29b306311177b7dad780"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","5fb68f672bce96a430ee8d1cffa9dee0"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","fce25b8e4c43b24cbb2f536f6e4ceb7a"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","40c9d79f55ae24ba42935e1d8add1b6f"],["/2023/09/22/Java/NIO/零拷贝/index.html","90cf2aa74b3e6ccd4b747a28b1c6f70b"],["/2023/09/24/系统设计/JWT认证/index.html","f48661a1c3a94693c34f07555ff378d4"],["/2023/09/26/Java/NIO/Reactor模式/index.html","9be6b228047de0ba98caa2230de0610a"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","802ea9c041fc118d480af862b1a64bce"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","bffa30e98ea1d7855e9805035b47b355"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","1bc416c4101256faf1ee066530c52ad5"],["/2023/10/09/Java/并发编程/共享问题/index.html","785c74b48b6662f9dd67b960e645740f"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","9126e5f7ade51485443e6cde97ca827d"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","06fd7490c24f71e2d054be908d2df6ec"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","5f4665b47e4853ae41d83a8ec5a7d6e1"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","ffb1f8bbb3091d44e1ba59fc1fcefb79"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","050173c09ab7f2716197dc5f6929024b"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","63e56fa9dae8980afdccc618095c52f9"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","a09a720ea26bb9ad38347b3abb5618cf"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","317930309d531762b584c13ab2f24e4f"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","a9c11dc2885a8cf72492c642119bd335"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","80f71cc8517181bd62423de221d6f8ee"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","6718d98e68e0fed761018f20ae5bad7f"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","3727fde241d9bd3674f7cfb8aaa70340"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","403af2bec6c292c30b3f6eb8788863b6"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","615198f0fa54153e1fa07346233a5e6d"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","1fbf3b5ca473cf33b4e39a94f41c911d"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","9c76b913c75966d69b066343b725477d"],["/2023/12/05/系统设计/开源协议/index.html","d2809bddcfe4d97e5e0eaea247067efc"],["/2023/12/09/MockMvc/index.html","59d906f96965da302096f328fd1aded9"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","6a8b6001db380c890ec1d7e1b2c40004"],["/2023/12/19/MySQL读写分离/index.html","d820249919a004599c399cff68cb663c"],["/2023/12/22/MySQL分库分表/index.html","39f8a7e41225be5a6d65fd303b8cce0d"],["/2023/12/27/利用NoSQL优化数据库/index.html","05bbc7a39b69cb01e8e6a701f57a2523"],["/2024/01/06/缓存概述/index.html","228794dabf27dee53d0f7152ca134988"],["/2024/01/11/缓存的读写策略/index.html","1cc5da994f2e21c293b2ff5efb7f5264"],["/2024/01/14/CDN静态资源加速/index.html","027ec1dc8cafd88656a2475b529fd755"],["/2024/01/18/消息队列延迟问题/index.html","2243c64c21735aa852bd9091d725fc2d"],["/2024/01/22/高并发系统分布式服务方案/index.html","9726f38478033e61bf74fedba009d9b6"],["/2024/01/26/dubbo/index.html","0c81f52c840f6676218b9f61646c7271"],["/2024/01/30/微服务基础/index.html","bdefa8f610e9ce3ea61e78bcc8f093ef"],["/2024/02/02/监控微服务调用/index.html","04d01600535eeb2022508cf5633e2df4"],["/2024/02/13/微服务治理的手段/index.html","51d613744363575188a06e094f905895"],["/2024/02/18/微服务治理的手段-二/index.html","0ba9ce13057bb11264f17eec27544805"],["/2024/02/22/计算机基础/操作系统/epoll、poll-和-select/index.html","efdc13cefddbc6d6d9fa7e38ab5739cb"],["/2024/02/26/Spring事务/index.html","802b205e80f6645e32246925439d478a"],["/404.html","99a2d1e7dbc5b11423719a4ae6aa405e"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","5d838578049f1b9db873b950952ccd88"],["/archives/2021/02/index.html","61b60605f5c88e64dc3526ce091e20ce"],["/archives/2021/03/index.html","8b0f4ef7abb3aed853b3c1248845fcd5"],["/archives/2021/03/page/2/index.html","61199144cfa5d8c0d5dd9806b8ae3b3a"],["/archives/2021/03/page/3/index.html","cb4d0721cb2b2825d5ca400a4edd6006"],["/archives/2021/04/index.html","57be02e55a7489e8fcbec2684ed2088a"],["/archives/2021/04/page/2/index.html","f899ae001e4a3a7af27e189830eaa50f"],["/archives/2021/05/index.html","fef8e9f8386fd90a7e25a616923916dc"],["/archives/2021/index.html","38a2b5869c406fff6b1c3ef394a70023"],["/archives/2021/page/2/index.html","bc4f5a5ddf2636d5839ea4bf35f8dc42"],["/archives/2021/page/3/index.html","ab05e7ae9b4d2860c14e38f4b4184844"],["/archives/2021/page/4/index.html","2e052cae1b1955e7bfe6fbe7cd28385b"],["/archives/2021/page/5/index.html","a5494068bd6842fccee82beea588a2ed"],["/archives/2021/page/6/index.html","c17d67cddf3c217358785dc128fa082a"],["/archives/2021/page/7/index.html","96690348964df85de479a6c616f10381"],["/archives/2022/01/index.html","80a8fd88284055bb27d39cb8fb635268"],["/archives/2022/04/index.html","50eb827511b1d5926deaf94a184afda6"],["/archives/2022/08/index.html","c9f2158141cf8eccde93e564b1c2df4e"],["/archives/2022/09/index.html","ba86393d7050401dcdc7becaf7f5bf1e"],["/archives/2022/09/page/2/index.html","9e26ea69ea5bfabeb0288a4b92b3ec22"],["/archives/2022/10/index.html","408c640a86b1f23c42fd71c900821ede"],["/archives/2022/11/index.html","a84b90e8da023fcb558e64a3f4e556a5"],["/archives/2022/12/index.html","b3f0e63054231fde834352b9ac5de24e"],["/archives/2022/index.html","527f87ae70652b29ce3436d812cd46ca"],["/archives/2022/page/2/index.html","12771787301b17c28fcfa4de2ff37a14"],["/archives/2022/page/3/index.html","6ae046b31c62e6473c37cadcdb9f58b1"],["/archives/2022/page/4/index.html","3dcf7f73f7b6c8239679cc67af1e4c9b"],["/archives/2022/page/5/index.html","ac6151f0401484e6dea44c04d7ea3a1e"],["/archives/2023/01/index.html","fdde706aecad663fc1cb712149ada285"],["/archives/2023/02/index.html","d19d0d1383067e041a27ce385b467b30"],["/archives/2023/03/index.html","a4d9a710951d204e088a9f5da50473fb"],["/archives/2023/04/index.html","b6974810b69e4ca25b4106087d2b5955"],["/archives/2023/04/page/2/index.html","e5a6111608ae2218df65e42f94c290a3"],["/archives/2023/05/index.html","b2d0ad02ea8eebd91dba636553f5544f"],["/archives/2023/06/index.html","7d02d14e45d9cf3f8cbd31b0f91e07ac"],["/archives/2023/06/page/2/index.html","7d8c0309a0989b5d73f4339ece255b7a"],["/archives/2023/07/index.html","1fab880c1ee298efe808d77f44f0d3da"],["/archives/2023/07/page/2/index.html","e35b5b7fc7e28ee035f7818e1c895849"],["/archives/2023/08/index.html","02ba0f4427e5f6e74f0b8f23421d96b2"],["/archives/2023/08/page/2/index.html","1279ee6e2f5fa733adb0e3660261e420"],["/archives/2023/09/index.html","5ad216aec25f196b9417bc32db135edb"],["/archives/2023/09/page/2/index.html","343bda0b6092731367b6b1d322155d93"],["/archives/2023/10/index.html","c9b133cbd16f098b5fc1422d9bca841f"],["/archives/2023/11/index.html","1fccbab91e8c9e218e6dbf2af4a618b9"],["/archives/2023/12/index.html","8cb933d7da617c78c97a9e8c70d11386"],["/archives/2023/index.html","a6b85083dbfa44fd0c13624c1a975fe3"],["/archives/2023/page/10/index.html","0372cb8eb71871ffe2409ff0a3987e6d"],["/archives/2023/page/11/index.html","54af7d446fc544b890e5053cdff0bce4"],["/archives/2023/page/12/index.html","21d63b9e94e90f77cf1a0abe2d717592"],["/archives/2023/page/2/index.html","b4c7242d20626dde26166d08caa7c542"],["/archives/2023/page/3/index.html","0afe2ebda525f82e72da273106275542"],["/archives/2023/page/4/index.html","cccbc0879c17f4dd19f0c5223ed6ffa9"],["/archives/2023/page/5/index.html","e8a2f2dac1e49d389b67363e96973ce4"],["/archives/2023/page/6/index.html","b6a8be49834f11c48625aee1e9521f3f"],["/archives/2023/page/7/index.html","3aac6e4606e3e84d650f1f684ce9a9fd"],["/archives/2023/page/8/index.html","e1aa58cedf005277435329e342645d45"],["/archives/2023/page/9/index.html","9af96dc02bca285b7b208b13783fb0d2"],["/archives/2024/01/index.html","f3616d72e8f14c28ab54b612330faa0c"],["/archives/2024/02/index.html","2ff441e0c51a7b2b139ee9f9397944aa"],["/archives/2024/index.html","ee919d8e1d6e38b1c30b01ac879a9a74"],["/archives/2024/page/2/index.html","3fb2ea25131fbd18fd1adf9f5ddf4e48"],["/archives/index.html","9852fbdfe1cddb74147aa90325c7db57"],["/archives/page/10/index.html","c98ab15c97c046cf3c4ae25df0cdd415"],["/archives/page/11/index.html","912b9114f9130cef663c725ec8764ff3"],["/archives/page/12/index.html","72fab50005eff0bcd409e2a63964d916"],["/archives/page/13/index.html","a34b88af7ec12c7c75ea43ad586c7821"],["/archives/page/14/index.html","bce38084a868bcee07abc1a709e520aa"],["/archives/page/15/index.html","e3ad183e5fe43de5ce128b688ba9df8d"],["/archives/page/16/index.html","fb2c8dd228718e8781245f9a5306e096"],["/archives/page/17/index.html","e4b19728d90f9b2e41d145e968ed5af4"],["/archives/page/18/index.html","2b631d139d5e875f1521dbee5d3adf42"],["/archives/page/19/index.html","cc10bf05a0fec09c43bf5e71d17cf032"],["/archives/page/2/index.html","546e964a21c8f557dbf78fb5bf900d6d"],["/archives/page/20/index.html","57a00b3a9682172f5beb0dad18a681ce"],["/archives/page/21/index.html","07ecf58258ad733460020ba7022b50a6"],["/archives/page/22/index.html","618ae32f06914410a86f616f1f9401ae"],["/archives/page/23/index.html","13d153317ee5fc3db4689d9fcea2b679"],["/archives/page/3/index.html","0ff4e17b842d07872f8918b56e2e7f85"],["/archives/page/4/index.html","252149cb6c005e99855d7a457fd90b9a"],["/archives/page/5/index.html","2fb1fc3857072d2e80af21f328408960"],["/archives/page/6/index.html","4fc74c1e7ec54b94dec462211e8db51a"],["/archives/page/7/index.html","c092663e7234c5832e41e70c70b17dd6"],["/archives/page/8/index.html","5c83eee4e353f6f808a1f467089a2b07"],["/archives/page/9/index.html","0dffcde882116f2679b80682e731740a"],["/categories/Devops/CICD/index.html","8ccc244fa695ed762e473317359adf32"],["/categories/Devops/Linux/index.html","0607af7ee81775eeaeb862540ecffe92"],["/categories/Devops/index.html","3125e86c6101be08ae3cf847e880c006"],["/categories/Java/JVM/index.html","a121f3a900821f20ce612b743121dbe2"],["/categories/Java/Java基础/index.html","aa42661bd7e05da4f7dfc6441f75b3ef"],["/categories/Java/NIO/index.html","fefc9720cf76376be38d06d3631f9845"],["/categories/Java/NIO/原生NIO/index.html","9662dea912ae3bad2bada0de02e4368a"],["/categories/Java/NIO/文件操作工具类/index.html","9cbb5312db217519044d52bef2bc303e"],["/categories/Java/index.html","c7b77468810057a548369263cf8fb868"],["/categories/Java/page/2/index.html","4c8dbea7e2426f96ccfa6ee034511de6"],["/categories/Java/并发编程/index.html","37ff4a10d06db28550445852a6c126f8"],["/categories/Spring全家桶/Spring-Security/index.html","5f9127e9090ccb34d0c7e21d41e56d4d"],["/categories/Spring全家桶/Spring/index.html","d79223ce69e3bc8203760b0cd40bd757"],["/categories/Spring全家桶/SpringBoot/index.html","a9a8f67a5cf032b8b6bad9b60f28e0ce"],["/categories/Spring全家桶/SpringCloud/index.html","05210cc3fba53faec083300d71d791b2"],["/categories/Spring全家桶/SpringMVC/index.html","efbdf99060b66b0dc1f5c103bbac799c"],["/categories/Spring全家桶/index.html","cd914812896992e29e045c6d7055773e"],["/categories/Spring全家桶/page/2/index.html","9c877f71963dfb1906d8fadae96bb4a3"],["/categories/index.html","32507de96d37bd8b6af337c94a8cfba0"],["/categories/中间件/Dubbo/index.html","0b62bcc421daeadb29f9041785f98ad9"],["/categories/中间件/ElasticSearch/index.html","b00702295d87a88c0eaf11d4909c4631"],["/categories/中间件/Netty/index.html","a93a14a1acacd7670e89f0e5b0e2fe4b"],["/categories/中间件/Redis/index.html","031fc6a1ad3b4f4a0ae5d7bfcb83afc7"],["/categories/中间件/Redis/page/2/index.html","5522f82ea65e8e90206b68352f5aacbe"],["/categories/中间件/Redis/page/3/index.html","3ef298cac1b861d69af7662467abedfd"],["/categories/中间件/index.html","a67f00936a9b1fb3792b5adc99cccf78"],["/categories/中间件/page/2/index.html","06eb1a41f249a9d6facd4b161d3bfd8c"],["/categories/中间件/page/3/index.html","5edb02891aa9560580d395820fd7b395"],["/categories/中间件/page/4/index.html","b7a02a080ef4a2977ab9d0af60a561ab"],["/categories/中间件/消息队列/RabbitMQ/index.html","fbe8022b1bf7693e9c466fb573cfee7b"],["/categories/中间件/消息队列/index.html","80ceb9655ac5f888c5568a6c5991c0b6"],["/categories/前端/Mock/index.html","c4af37f208f3d2fec7761e25449e5856"],["/categories/前端/Promise/index.html","7e62bb8d0720bd0b35bda96651e509f6"],["/categories/前端/Vue/index.html","1f289ccdf60756cda436698b6f940da7"],["/categories/前端/index.html","c60508c65f64422e812ee3e80385cd6e"],["/categories/前端/jQuery/index.html","c9d7bfb303b3798b4ac0aebb8e98c19d"],["/categories/前端/page/2/index.html","dd22eaf31679e27d5aa185b2d1ae48ac"],["/categories/前端/原生基础/index.html","cf37427e47b1bcfb2ce7653d005ae4cd"],["/categories/前端/异步通信/index.html","f0e7dc1889afa229052b587fe2e8ca5e"],["/categories/工具使用/Git/index.html","20b35540eec54d1d54f47dcef749b49d"],["/categories/工具使用/index.html","fe0c26be1dd7bf9d8d79808a63a5c395"],["/categories/工具使用/markdown/index.html","8c51a31e68905013d62c1ed165ccee8c"],["/categories/工具的使用/Docker/index.html","4cb405f304a4ceabe34dd7f8f44ef6ce"],["/categories/工具的使用/Nginx/index.html","3d88153e2084fafb4710895218b2ce11"],["/categories/工具的使用/Swagger/index.html","e6444a1312194e8db1e7d254b14fff66"],["/categories/工具的使用/index.html","961995598be4927348ffc344454a6bb3"],["/categories/工具的使用/博客搭建/index.html","04358a9a17a4d5aa9bc52161aa4ff81d"],["/categories/数据库/MongoDB/index.html","de2a7f62808fdcaa2f2358cdafa8c873"],["/categories/数据库/MySQL/index.html","27765e8af0dc429ca3992dd291c0f145"],["/categories/数据库/MySQL/page/2/index.html","946828d4dee1264ad89dd932b4d4ff89"],["/categories/数据库/MySQL/page/3/index.html","5cf13471fcc697a3c4c552ffbde44e6f"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","265fb00b4a47cb84261837fab8443e97"],["/categories/数据库/ORM持久层框架/index.html","1003cb0acad67dbde9b0d6b1bdde1554"],["/categories/数据库/index.html","756c3b7909e3bcfd2f4fbfda955b4351"],["/categories/数据库/page/2/index.html","a9a547920273462df0026e1b926e4ab0"],["/categories/数据库/page/3/index.html","71fec1c4e65433dfdef1510691298258"],["/categories/系统设计/DDD领域模型/index.html","bc9ba758b771094ae0a5c62a811bb6e8"],["/categories/系统设计/index.html","98f61d0b1757a521f3c8bc136c74ea70"],["/categories/系统设计/page/2/index.html","616328c1842936519deda9d8cd4021e3"],["/categories/系统设计/page/3/index.html","c6f46dec71aaa4c407f4343bf478f17a"],["/categories/系统设计/page/4/index.html","d7aed749283fe3943aa2c09e109f23ec"],["/categories/系统设计/page/5/index.html","58678771a2209707f1dbe6ca9d3eb965"],["/categories/系统设计/分布式权限认证/index.html","85c45149b6389b15ef38f468ead86389"],["/categories/系统设计/分布式系统/index.html","efba7e278727da1fbcb55081ba9998a3"],["/categories/系统设计/分布式系统/page/2/index.html","ef3a41adefd56b5a6c33dbb4c2577f07"],["/categories/系统设计/分布式系统/page/3/index.html","4f9a0c5bdce54f15d9947b8e9dc7669b"],["/categories/系统设计/微服务/index.html","27f7302e6ca94d9d3d070feb3f1ac298"],["/categories/系统设计/数据库优化/index.html","5111f79c02e2125adeb32fd5c1df865d"],["/categories/系统设计/设计模式/index.html","f07daebfbf6f74ad221f03ea9fe3bef2"],["/categories/系统设计/设计模式/page/2/index.html","7efddcfd2438c93221d28c9a798304d1"],["/categories/计算机基础/index.html","48d76ad2066c983dae807d8a66494c77"],["/categories/计算机基础/page/2/index.html","0d89d4f9ee513073cae7af493e145267"],["/categories/计算机基础/page/3/index.html","02abd0f828256585219c17399241963e"],["/categories/计算机基础/page/4/index.html","0ead004ddd6c33f5236d608507833558"],["/categories/计算机基础/page/5/index.html","4d1229e12e1054d3853649159f130560"],["/categories/计算机基础/page/6/index.html","f99b1f624f1e3ccac85cc22f50e70c75"],["/categories/计算机基础/操作系统/index.html","de634f070cb4bf3c82e629be8efe27db"],["/categories/计算机基础/数据结构与算法/index.html","17375ea0edc4d8da04479b64d6dc106f"],["/categories/计算机基础/数据结构与算法/page/2/index.html","57fa3a7a5de6152fc27c100003c20ce2"],["/categories/计算机基础/数据结构与算法/page/3/index.html","7f6d8db3e454f8a75dfeac5f118cbeed"],["/categories/计算机基础/数据结构与算法/page/4/index.html","4f53a8c918f62de6d5ff13d3ba51ae2b"],["/categories/计算机基础/数据结构与算法/page/5/index.html","1063cb80472ccc3d6f51fc9b45fe01f5"],["/categories/计算机基础/计算机网络/index.html","3c33813276cafc1996dba07888c41b89"],["/css/index.css","2af5ea34362e0b34f799106b2659ad50"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","a2270d5632ba781a0d14efc2e891e794"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","cc43c591db0038888c9871864b66a3ee"],["/messageboard/index.html","5d31febf44d7cf0f5ca8708809a070af"],["/page/10/index.html","8a9c61abf11b32499b4a78fbdbd3ad38"],["/page/11/index.html","7a4f0ee430969f3c9d7b1732c309b3ef"],["/page/12/index.html","acfdef7fb255c9629e797aa5ad692bd5"],["/page/13/index.html","f08f725fe6fcfb6a5477d502ec89289f"],["/page/14/index.html","c570b908955de40f5a6ada7da72facc4"],["/page/15/index.html","451f77b83b89333d89bb25f7fca7e3c6"],["/page/16/index.html","183c4d50691b1feea525487b6c8e016c"],["/page/17/index.html","6af8dfd316b087d00a82588a52035cb4"],["/page/18/index.html","7ce7503ea0ee8bd3c7905248dbc83cca"],["/page/19/index.html","1d6689119e5e40b8c0802733b3b954a2"],["/page/2/index.html","c2aef0781ede2df6bbb370eb61d99ede"],["/page/20/index.html","d4f37f15cfc9bd6a2e7c56f7520fd793"],["/page/21/index.html","4a1ec36c4563e95a1dfaa13fa512f32e"],["/page/22/index.html","889fb4c9015f31cb45a81680d651c722"],["/page/23/index.html","87a0092ae2ca24813bfb813d98ce70ed"],["/page/3/index.html","dd896556e4b80e1643c3341f058e595a"],["/page/4/index.html","495193dc0421ff32ea0e7e111b2b65a3"],["/page/5/index.html","22fe2824a4a3b496760bbba9d14397f5"],["/page/6/index.html","a3215f45d81cbdda9b6a194d98b16023"],["/page/7/index.html","a84c9aec92ddb3bd272b1a12a5f4605a"],["/page/8/index.html","bd8a4d9ce68d8b69ac5bd833217313f1"],["/page/9/index.html","2f83fd53e69d7c3f64ac9bef429b4cd0"],["/sw-register.js","48e25c4b90593d6ba576336560bda9db"],["/tags/Ajax/index.html","a90c3a50f93871e4ead17efadfb0cdfa"],["/tags/Axios/index.html","423e66f6c19b216ffbf70e49d75c8e41"],["/tags/BASE理论/index.html","984020de253142146b575f9094c95824"],["/tags/CAP定理/index.html","696029e0d22629e7c3eea63107597779"],["/tags/CICD/index.html","518250d59adeba980e8216cb98e28bb3"],["/tags/DDD领域模型/index.html","91be5b448b22d27ab20e68676a020c74"],["/tags/Docker/index.html","6aa0a81d46c791d68673f0c35d86b1a8"],["/tags/Dubbo/index.html","0f5ed114ce7726ac9145733d60704de0"],["/tags/ELK/index.html","493435340eebb2ef477e0f3abba14b0d"],["/tags/ElasticSearch/index.html","56252b4a0fcb4be0db457d8387b7e2a1"],["/tags/Git/index.html","bd1151c7d3387cea90bd3cf540cf5d0c"],["/tags/H5/index.html","14e4ace1fb0171e951c4d0e3be485607"],["/tags/JVM/index.html","c1ecc6d9578771fc1887c3571f652854"],["/tags/JVM内存模型/index.html","de142b290a9154548c9da58466b6856b"],["/tags/JVM执行引擎/index.html","cd906890cb72ad37c2fca46ef9f48d50"],["/tags/JavaScript/index.html","ec1952a7b11cc30fa8625ec2b7cf1bd3"],["/tags/Java内存模型/index.html","b86d0e1a00d7dfdafe1436d6145b049b"],["/tags/Java进程线程/index.html","2b76e39c2aeb425c3f5f6fc4e0e8559c"],["/tags/Kibana/index.html","412c26d599e448b2376302b396cf5fc9"],["/tags/LeetCode/index.html","a18d5da1f3f885700f210120cc245939"],["/tags/LeetCode/page/2/index.html","7a2daee766a595b79bbb57f229861277"],["/tags/LeetCode/page/3/index.html","2c081ae1071688ce98636fa32985c9b6"],["/tags/Linux/index.html","2c99d74ff3081d0a203ae4b30e85f824"],["/tags/Logstash/index.html","46e6e559cb9fb397f4c0748382102452"],["/tags/Mock/index.html","3d670dcbfbec507a41de83c66fb04c17"],["/tags/MockMvc/index.html","a36c5316c1db733861c2c5d9933d3c76"],["/tags/MongoDB/index.html","5219d29fcea2a4530f0d5628cd85b94c"],["/tags/MySQL-事务/index.html","56522e949f4c843f5a5dc45690f8827e"],["/tags/MySQL-数据类型/index.html","9bd5e224dcc3c9beab818786610bb618"],["/tags/MySQL-日志/index.html","3dbd00ca224bb72af166b0e9d009c112"],["/tags/MySQL-索引/index.html","40214666f4273f8a31cef2c790c34294"],["/tags/MySQL-锁/index.html","4c28d8d93fed4e94f8b1bb0c47688d5e"],["/tags/MySQL/index.html","da30dc7a30f43a4343688e9f6dae454f"],["/tags/MySQL/page/2/index.html","7ea707e699e4b5878bf47f7a4fb21a72"],["/tags/MySQL分库分表/index.html","be451b19e6f5bc69bcb0a85708f9f2e6"],["/tags/MySQL读写分离/index.html","36e8888235d9e8d565e5368773641745"],["/tags/Mybatis/index.html","4dff177e7b5ac9063a1507fddaae585f"],["/tags/MybatisPlus/index.html","5412486d8692efb2f434fb5cdfeb6253"],["/tags/NIO/index.html","69d6147aba913e5c5b888cb96766f04c"],["/tags/Netty/index.html","4be9564430ad3fffeaf2ec8744f58358"],["/tags/Nginx/index.html","9880717ce943de93d36eee7812760884"],["/tags/NoSQL/index.html","e0c11d86879d47800c0a4805ad0abb6b"],["/tags/Promise/index.html","288212f093f6ebbdb2e81a5452e03ff3"],["/tags/RabbitMQ/index.html","1ebcee643cb966eccb5a44dd68693408"],["/tags/Redis/index.html","9de6d065fb43933507bb48b04f42bcf8"],["/tags/Redis/page/2/index.html","1b19e5205beab993ee09133649700e21"],["/tags/Redis/page/3/index.html","cbf5de301bd9aa34c391e8ca2cbce370"],["/tags/SSM/index.html","fb09f2dd41c1fe2d757778aa459e6642"],["/tags/Spring-Security/index.html","e56077ced11bc60a4f5c540d2d3bda93"],["/tags/Spring/index.html","1741d36ae800a9317c1c6a67a401968f"],["/tags/SpringBoot/index.html","23d87282efb61596de2e7926867a17b0"],["/tags/SpringCloud/index.html","e7d8156a89e35c28455c08673ace8cc0"],["/tags/SpringMVC/index.html","e2bdb06dc96ee1aac5d431bcf5b6c628"],["/tags/Spring事务/index.html","dc903d3cec8770e5ccdad61e7ea9106b"],["/tags/Swagger/index.html","cd831f93133c21d68904001f299f1820"],["/tags/hexo/index.html","3563e88ce04686b6a63ee6ab61bb19b3"],["/tags/index.html","9cd21fc765c189d34572aa359a64b462"],["/tags/jQuery/index.html","6dd19fed1dc79ccf26de5c3f8775b783"],["/tags/java/index.html","50319d165706936f8db69b4aaafef3da"],["/tags/markdown/index.html","c7e5a22995e61a42ed173461004ad069"],["/tags/rpc框架/index.html","9492cc3aae365ecdc0a5344e31154a3e"],["/tags/typora/index.html","b1b3a4f19f90aef57ccfb9c74c3d877a"],["/tags/vue/index.html","121190a2ae006131628a457448aa5174"],["/tags/享元模式/index.html","b2608b576179d8625bad8b7c1c8173a3"],["/tags/代理模式/index.html","303e3dabaf9649890162ee929eace75f"],["/tags/内存管理/index.html","13264187902d10d1a6a03c959dcbd71d"],["/tags/分布式/index.html","816534c0037878e1f2b09e8c936247d6"],["/tags/分布式一致性算法/index.html","6c99efb204634b810e7f0edade5aa92a"],["/tags/分布式系统/index.html","99ba203fea2e714c724db5b813f0a5fc"],["/tags/分布式系统/page/2/index.html","5a40f06e527d52cfe2b8a0b5341282e9"],["/tags/分布式系统/page/3/index.html","e731c0287c4fa6adaf7a2440a876192c"],["/tags/前端/index.html","72f2d7a935394365bfb2b113d074dcc4"],["/tags/前端/page/2/index.html","ccbde7035e3ec886a2ea9f36cb3243ab"],["/tags/动态通知/index.html","9b72fed92984c0684c21cf7c6bf57821"],["/tags/博客/index.html","41d48690cbd282f24e70a5d9918b93bb"],["/tags/后端/index.html","d7ed60c5a267854b0dd0154f4a5dbecc"],["/tags/外观模式/index.html","920dbf8b380298d77cc50db9bbf01fca"],["/tags/多级缓存架构/index.html","ff165586ebbc298792b27694c746b2f9"],["/tags/多线程设计模式/index.html","50d5f0e13e479e8851d7dfa41bf99ef6"],["/tags/多路复用/index.html","6dc7fa6bd34600d3ad9fe239d60ba38a"],["/tags/容器技术/index.html","977aa09abc4adebc2bb2920bc556e4fc"],["/tags/工厂方法/index.html","06a37c3af222dd844ee91ae4cefcdcaf"],["/tags/开源协议/index.html","fc4830c58bd855586b06a2bcfbfc6f10"],["/tags/异构同步/index.html","83ae819e474e828b76fd82e1f5df5753"],["/tags/微服务/index.html","835525456317da7188a507a7a3650f20"],["/tags/微服务基础/index.html","16b746159947cdd38ec2ccb9f3d4c321"],["/tags/抽象工厂/index.html","3e58c7a9b3d62b2d91400f7f9b5a5bb7"],["/tags/持续集成持续部署/index.html","a2b7e1049795ee1187dfc3b56c72da88"],["/tags/接口幂等性/index.html","6c3fd59e87624d44a1139436da5974c1"],["/tags/搜索引擎/index.html","d58788be1ba191c0ecc5a214108207ad"],["/tags/操作系统/index.html","42384937434602277965b0a63c3d2704"],["/tags/数据库/index.html","9a3fdfcf05d8b6b67422ad86da52a6e9"],["/tags/数据库/page/2/index.html","0ed738151a74c18f7cf2b15236a700f5"],["/tags/数据库/page/3/index.html","a49ffbddb55112ec23f9cce2829da981"],["/tags/数据结构与算法/index.html","5380ea3e5f6672c59e83484c96896280"],["/tags/数据结构与算法/page/2/index.html","dc33bdd6e91c2d3aa99245218c820cfc"],["/tags/文件操作/index.html","c0763946e1208fd20deafd730a9bdd19"],["/tags/日志/index.html","4da9089ec16ff989c0aeeedbdab99d03"],["/tags/服务器/index.html","6feb4f6378d9fae63b2677430708e194"],["/tags/服务治理/index.html","fa576c24f3817ff3d7b0a9b4048d5be0"],["/tags/权限认证/index.html","4189ada6da39b19b64c394cdccf843f0"],["/tags/架构分层/index.html","c1a9a1b4d5857943871175389996dc34"],["/tags/桥接模式/index.html","1c771146180c15412a02206044a0113d"],["/tags/模板方法模式/index.html","ca5909c163f79272de5fbfb77daee67b"],["/tags/死锁/index.html","c4928022aa717a25328b73d7034fe32f"],["/tags/池化技术/index.html","7e9f638723a6a371acd9dff8946be374"],["/tags/消息队列/index.html","87300a1be5ed31b0c9b53df280f255b9"],["/tags/版本控制/index.html","c97be6e0bace2de66de989f66b6bf3a7"],["/tags/监控微服务调用/index.html","a1773b73648b751449138669fb48878a"],["/tags/策略模式/index.html","e7c9eccb02c4f88615272a70a455eb32"],["/tags/简单工厂/index.html","d2ee135584eb86a0d7e3645fe2fa5f2a"],["/tags/算法/index.html","5efbb43141fbafaf1999dd23171a3ed8"],["/tags/线程活跃性问题/index.html","23b5e9a3e69369391544a769b41a108c"],["/tags/组件化/index.html","a407049a9c3df35345b6896b75e532b5"],["/tags/经典限流算法/index.html","6fa80148866b3a4cbd814264e14a6f04"],["/tags/缓存/index.html","3e843c29ef33743e829528ef3a2017c7"],["/tags/缓存/page/2/index.html","7c3fd2657df1802117de0378c08ee1b4"],["/tags/缓存/page/3/index.html","bd4e60d854ad5db1880b4e6635236fad"],["/tags/观察者模式/index.html","8530855aa6733d652c976888375b3d6a"],["/tags/计算机网络/index.html","721293aca4781403fc2765703193ba0c"],["/tags/设计模式/index.html","b73327523ee8fd43d450f1977435ea88"],["/tags/设计模式/page/2/index.html","b46675bc804f69c9cd70a86a121d78cf"],["/tags/设计目标/index.html","6718061b13ef7cfae6930af7ae885324"],["/tags/资源共享问题/index.html","19b92b678f9367bde1c939a0ec4fcf9e"],["/tags/进程管理/index.html","35aa2786da183a609275978ae5dde59e"],["/tags/适配器模式/index.html","88bdf969635b87af1537562e09fb7dfe"],["/tags/通用设计方法/index.html","181ec43e28c084968dad24979d7acd58"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
