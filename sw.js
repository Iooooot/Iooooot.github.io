/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","815372dabd0e78336e5b4a3ad4799778"],["/2021/02/22/工具的使用/博客的搭建/index.html","327d572b088aabd58a9a5e49b148b80e"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","8a81e38aca781a7a55fc790b7505b5f0"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","05ca817ab2b3eece782320f46a4c8154"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","8d80558199f58b478b2e4401c5f84765"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","b9b45ec0e7d22adee61793136f102f19"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","ea9c46144b90080466d04ad9f2422e97"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","a8f53ef850c2ade54ec430c2a214d83a"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","7f3b6080b541088dc8c1f5370006ccdf"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","4588b8e95f51a2554302ecce77efa8fe"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","d88d136dc62d25f5190d23ef49629071"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","d89ce4dd9073f893eb25c8292cfd06cc"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","ae945b367871c25660f1e51c80609387"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","b28fb332faa8967b39ecba1b50d4d99c"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","e8b00cf26c1c03484bfd51fe49810937"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","c6f39dacc6fa4340305d486f13c2f1ea"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","c7c3f05b1b061e4400393d223df8a5ca"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","ea5039e83700778a097c79b775e1b117"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","c9d1d1e85971fbe87088254947d556e6"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","15e80ff6948503fd9adab60d7016ef8e"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","0561fe45b89b756f79ace55b298a43f0"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","1c6215c13ba93730e0ab46b7f71bc7ce"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","1cb5d8a1c0281a0319290f5f5346df7d"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","15e4a2fc718f25ef35c33f7c31587f28"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","20c29ed61ca1965075e7ccf2e9f4e844"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","16c04b0c11233ceea5d42a207f1990fd"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","9cb82604361fbdc23b83277c3c9e0947"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","54eabdd78009cc6d70040cc4b21ec199"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","45db56b14cb410eaff5fc161fcc77e93"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","601cf075cb87a01fddaebf9e84ed725d"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","a4c2acde8056aeeb72a98bdc6530955f"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","240629bce04884dfd63076e4165395b2"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","78a1f52911c5483c6be527f5a9469a27"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","ba4fe1346db084338a9da16597be2959"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","bf478b0b703d54690b0cab0722983c94"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","92d4813795a81eed4ca385efa1b31741"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","c61000df1fca59d8236366b8349622eb"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","87480e1d73c81ccb9e32812802ec27ce"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","ef433f9c3c6852ea2241d3e39cc91a8f"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","234c9418ebd33ff8b4613679df166e7d"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","24a190a4880c493bc47ed3c7aa54b345"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","d50f857798986ed6b6e463c6a35e4322"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","9dc51e1a53eca3f79431a2c19b96475c"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","1474f91403ba2178d8ab9860fe41b596"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","7aa734d55b89a289acb53b57db1371e2"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","04948dfd8adb71cb0fa0d61f96115517"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","458b93506212c37c6ea20303ec6a334d"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","cd92b453671441085c87f78542cd81da"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","ac42d89c4eb3cf3ac33071b222374212"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","2701fc289c7afa91f57a6f357689c72c"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","3a58b73a4b2d99318f291c04154ef6ad"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","4cf81005f686ad96d204f6b04154e1ab"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","e2a56367c96f650a1e7c72cf03a26612"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","6dcf6c00a207f6ed418d4eb1bdf7b062"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","cbab82d3c48116bed99b878ff4c92f80"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","8e6bbb9a974f92b4c2f9c9a3d6579c0c"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","2d143c65ebafffa7ebbf0c70c2e2392c"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","cfb8447ad3b8f7bb861f13a511dc4f1e"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","d777d42d771a6267241a474a1eee5a07"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","a6acbe79bea1e64da1a11b7fd543ee78"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","d4ebb283e3ddf508035fbbf3c50ae8d7"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","594453a274bdf8cbb5dae4c797fac1b7"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","10480a4085e8700158d3c80b2965a56a"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","037cb01b399d5cda24df64cee562af4f"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","6b50dc6b6c55ec0fe11433a9ad0610d1"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","83d130b4697d72c1684dbc6aedaa244e"],["/2022/08/17/前端/jQuery/index.html","341100469bfd7689298e4956673bbe83"],["/2022/08/19/前端/JavaScript/index.html","c5d77f8ec6b14fbea8c80e42eb54a9ea"],["/2022/08/22/前端/Ajax/index.html","53ad8350736e4a5c26f1213adfc9ddae"],["/2022/08/23/前端/Promise/index.html","cf3b2dec9823ec97e04f61332f32f63f"],["/2022/08/24/前端/Axios/index.html","7a216fb6bbe984bb9772fd34d793f8d6"],["/2022/08/25/前端/H5本地存储/index.html","fce6cf43fbbded1bff58520f00e993a6"],["/2022/08/26/前端/mock/index.html","100fa66394fd51e10e696dc8da738335"],["/2022/08/31/前端/vue/VueJs/index.html","5bd7a20da5649112d9362b6351247fa3"],["/2022/09/01/前端/vue/vue组件化/index.html","677cb60a3780a2c894df391236a8690e"],["/2022/09/04/前端/vue/VueCLI/index.html","62b7b9cc092f87cfdb2cc53852be51bf"],["/2022/09/07/前端/vue/vue实现动画/index.html","b9f7c065623f9d5fe4dc583d1bc0e606"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","67e209f45cef8257bede6ce5b00d820f"],["/2022/09/10/前端/vue/Vue异步请求/index.html","3fdefaca009036f2c5b10e9216d5312b"],["/2022/09/11/前端/vue/vue-Router/index.html","a743fe691a07ecb2819253e6935aa454"],["/2022/09/13/前端/vue/Vuex/index.html","8cb9e2bd53c4c3fbc145876c060f6565"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","1bdf8c54698320366d5734570a0fb578"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","c5c0b052cf7a9ba136ed95377ab4fdb8"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","a39fc37ea9b21e6b8a5b2d91c371baf7"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","ceff020f2fc01996ca1a440c6604edff"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","5f0ce351826a3ee7b49a6285726ea0f7"],["/2022/09/28/DevOps/Linux/Linux/index.html","4fa81df6ada74b84df126c631ed33ebc"],["/2022/10/02/中间件/Redis/redis基础/index.html","cac620fce7d1b1e9a54faf8d10a4cc13"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","6f761189c196270e3d901e81e912cf6c"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","8cd03785d4ad7516927a92943cca349a"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","95cea4583f8201922429e6a6763c0d61"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","4bd6ac419bde45a8346e0eb68dbdbffa"],["/2022/10/17/中间件/Redis/Redis集群/index.html","5e187a7fad034f377976eaf7a1b0e411"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","522f740a8f9ccb70ce190a17de732657"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","accf195920301f3ae79073dcf4637261"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","2b287dee5c1e0d23321b27721e8d087c"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","89862e14f5235e0609e16bde68f1223d"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","1f54300057a1b8755dd1f28ce4d6c9a1"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","9c52979ccef0a1d3e94cbddd2541115c"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","bb86838e8fae8c95708f63ad9b8aebab"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","9121f32103995445134b3fb67bf72e6f"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","0d00652436bf17c0f289f7812b952099"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","c56c401017715b36bd5c0530b3b57204"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","b631a6cd207fdcd1cff43ec4c97a1f1b"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","f831f29fe8098a405cf89764209f3b1b"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","0a94e768e7812ebabddacbf081991382"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","fef6dabed09b7afb6c59480e5c0f26c7"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","48c2778a91155d13a8ba8f4d35872eef"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","c932d4e18bed3f3374e23b9e4518293d"],["/2023/03/10/DevOps/CICD/CICD/index.html","942d4f19ddccad605c9cf19a977efa6c"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","00ba97f28b72ed5bb254968a6a4e6e9e"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","af5bfaf71e6afe7e96e110901ec1400e"],["/2023/03/13/Java/NIO/NIO/index.html","e512ebfdd55c8b534e47afc1a8144fa5"],["/2023/03/14/Java/NIO/Netty/index.html","f97e2d537ae827434b3b3e58f3dafce0"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","666ad5281252819c31957458a72bdfe3"],["/2023/03/17/系统设计/分布式系统认证/index.html","f9eca137596e86dca885a44b8ce4f81b"],["/2023/03/19/Java/JVM/JVM概述/index.html","a8cece7aa89f677547e72a3601b5dc64"],["/2023/03/23/Java/JVM/类的加载过程/index.html","95ab1a35204713f22e06774452eb0668"],["/2023/03/28/Java/JVM/对象的实例化/index.html","baeb330db37afc6ca6a03ffeb88041fd"],["/2023/04/01/Java/JVM/运行时数据区/index.html","6f8dff9123402346b744d0629854f617"],["/2023/04/04/Java/JVM/执行引擎/index.html","051c650f92b2a415eb673ae53b11f967"],["/2023/04/06/Java/JVM/对象引用/index.html","eccbf6f533dd2a7864c9fb69bfccefc4"],["/2023/04/09/Java/JVM/垃圾回收/index.html","9f879f37d34454c8ca365ef55e7995c8"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","e0024758dd817ce0fed9bef214a234f2"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","4de97f540275b6ba7e22bd5066c6c20a"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","9a295fe3476dc595ab165abb2220af75"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","32be55f2bc99671daf84d51776e7400b"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","0cdcff01bf0c6961d82e661a5ada8afd"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","d0e5f8d575704f18afaceecb97fc4447"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","6d320206078fdd3c524c22fa9f013ec9"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","4e583026de5e681f54451f3ec40787b4"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","d1f88d2621d8185f0e2c9e9f4f357365"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","08b771baf95d731c116deada793cf577"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","f719f8f6dfe595d95e9c7b1721b8bf39"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","f7bbca46452bafada924aa8c7a39d79d"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","fa93a1142e51f1b9bee0b3d28938cd15"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","4152f7cedcc77b38f1a0e02ccf70c7e6"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","f1fe1305d3e9154402f39abd7e12a2a5"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","5aa45cdb4f18f0c51f3aec4a97c08289"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","87bf025632792d826480212765291b17"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","2ffa57f9c6c3574d07a0388a26aa426f"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","50d2e17b656045883d38b06d4c3b99a4"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","054e7f04b91a3609a7d11c4d23f8eb92"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","a827378d5f22f1f3db6e639697f1073b"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","6f604c658991f04b2c1268b9d645f2cf"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","278e2e98de2518b01d3a3a021c9f9b2e"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","6182ce50ff8718d007f3a9467054c233"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","1d27978fd478b8d97a3f7efacd14f31f"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","924d8e27de1699657d888648b2fe9606"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","3d30e1e17ab9627b34243c489dabda7e"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","e95cba504b3af5edafd53da2fc845483"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","e5e46cfbd976cf4135f6a15140132056"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","519a9df955a939d4b694febc6b788b98"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","d5bcb4a2ff1392efcb6b6079c72ab158"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","0a780a848c29864428c0e9f1580f6b10"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","9839ae74c0f4b3ad228a0c33694ae4d9"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","40d4a0b1d1c9833f406e78fa8af18214"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","3bb99b96bc2f405fc6bfd114a6080b93"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","94d15ebd1a8900334e54dc0475ff7ed4"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","cde1fb6062fae156e99f339fb72be8e0"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","bc63e51e861855aabda1c750e6ca38ff"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","885c3fd226f6dda5e0569ad45ad747dc"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","7ebab9e7c3fcf6f94a6f24d50fb9e613"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","f3a2d604e87c0bea6dd24fdffdc50200"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","ddbf876fb72458b2f2b6b46e258216e1"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","c0ce19ac11e2b4b059bb4223c2416a93"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","968f5ef0ce02c9abdd65943c6a445eab"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","68cc76af11bb34da8937d38515875d53"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","367a88784ee76640520a6474a8a96f3a"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","11b50ab444eda31bc15d7dfdda2b5953"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","f0cf736d0e29c9f7310fecf0154ad0a3"],["/2023/08/13/Redis实现消息队列/index.html","41d34cabb0bc4d2e8ae8b2ff7d121b37"],["/2023/08/15/Redis如何避免单线程模型的阻塞/index.html","2df7a60afd0402965989b22d4f2976ba"],["/2023/08/17/如何应对变慢的Redis/index.html","1bae001682bdcfee4ce83b094b5cb02e"],["/2023/08/19/Redis内存碎片问题/index.html","0aa4018a9e3c76ea95a95ec07fa49342"],["/404.html","51690def54eb40cd0b82d8096b229d50"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","91d71168d76114022e9d6d10d0bbba89"],["/archives/2021/02/index.html","a56e4af12bc146c6e7f279d43e5a3633"],["/archives/2021/03/index.html","fd88a7300f8bc761932ff7066b53ce62"],["/archives/2021/03/page/2/index.html","0985968781b0f22869739629c9f70102"],["/archives/2021/03/page/3/index.html","6dab615fc5cd0a6385ffa007e135c4f5"],["/archives/2021/04/index.html","b79ee19923ef65667a18b23b1ff09a62"],["/archives/2021/04/page/2/index.html","fccedd715795480459e72d78305c0196"],["/archives/2021/05/index.html","26ccbdbf0997c44a5537984ac541ef80"],["/archives/2021/index.html","b1414f5e8549a2ee98bcdbc354f510a6"],["/archives/2021/page/2/index.html","3e82a5e443e5d70c1b0f702366611a25"],["/archives/2021/page/3/index.html","230223127f00674e3ade504b08c1a386"],["/archives/2021/page/4/index.html","69b8e6489a79c174ca433e66265810fd"],["/archives/2021/page/5/index.html","6fd3a2f4219a21f189b233c9baec68af"],["/archives/2021/page/6/index.html","285dad4302bfabf9d0f2ab1f54b52f56"],["/archives/2021/page/7/index.html","ae5f087bf60cf44b21393b1eccb32a4f"],["/archives/2022/01/index.html","db9185eb339e7f06b897eb246b10e1cf"],["/archives/2022/04/index.html","14962784592e275b5ffd2ee34e784914"],["/archives/2022/08/index.html","64756c221799bf8086ba01d1641163b1"],["/archives/2022/09/index.html","55906ebc615642d5844248bb1088594e"],["/archives/2022/09/page/2/index.html","3bfc461ac3a25f6d414d6eacf6152156"],["/archives/2022/10/index.html","4f87f89428e32982d4e9adf56826e803"],["/archives/2022/11/index.html","777d3746b13fa2c3af24b8b34e397a1a"],["/archives/2022/12/index.html","d5903b7217cb336ecf8cb9b54a0ea2d9"],["/archives/2022/index.html","7d66599ea4a8be626bc34c4bde710a57"],["/archives/2022/page/2/index.html","dbfc9b3042ce72b49c3e918a33f48b9c"],["/archives/2022/page/3/index.html","173dea123d200ecca9ecfc25f6705cdf"],["/archives/2022/page/4/index.html","d6e36eca8de764b4aa9f10d320ebc78c"],["/archives/2022/page/5/index.html","5fdb3b9f0c76553f020f998d156fe284"],["/archives/2023/01/index.html","65c915337742ae0d347f1c46a2358baa"],["/archives/2023/02/index.html","77f94c9cde269d94df5e8641f438c621"],["/archives/2023/03/index.html","3c0938031c990d83db25073dc791df66"],["/archives/2023/04/index.html","fe67372e9d6fc1f0d887f1f5f48cad4b"],["/archives/2023/04/page/2/index.html","45db95718836f5aec1ca41de67ef57c3"],["/archives/2023/05/index.html","98a472e69876bc42ab2e1c3e75ca23e8"],["/archives/2023/06/index.html","44e40d980d4b7522e267fe628350b06c"],["/archives/2023/06/page/2/index.html","a943bc814ad26aa1cfd90a7b6a3386a8"],["/archives/2023/07/index.html","cd2d9415e8b9aa19cf85655ea87d1212"],["/archives/2023/07/page/2/index.html","73c09897b47f9e2d2b0501ccb8a16737"],["/archives/2023/08/index.html","42ed0d222876dfed94298f1d212c3a72"],["/archives/2023/index.html","9e2f38896ddf6631b57dfaebee972b8d"],["/archives/2023/page/2/index.html","bd818f74487506dd545d486cf124a6eb"],["/archives/2023/page/3/index.html","8e7d7bd72d5ca18179e54c8b26060c48"],["/archives/2023/page/4/index.html","8673dba91a26c0af38023666a5cbbea5"],["/archives/2023/page/5/index.html","ec94dc649b148609858fe6d550f118d3"],["/archives/2023/page/6/index.html","d0e066fc0667e38fa591d2576d67de18"],["/archives/2023/page/7/index.html","d4a712b828a9d0c0f8562752ee2bdb9f"],["/archives/index.html","ad2204a69d9cf4e616886d4c6e6c5305"],["/archives/page/10/index.html","3586fc424fc8a91e73b0450e56d96a98"],["/archives/page/11/index.html","638fddc7f9d43b481ec51a4091f957f6"],["/archives/page/12/index.html","1cc1ec5f63f06ac748a34ec84f948971"],["/archives/page/13/index.html","97fc7ffa909ccd1361cca1e7fbab84f3"],["/archives/page/14/index.html","57a3f9386ab90d9f85756957c1523532"],["/archives/page/15/index.html","a96fdf221678a8ca905e7d19fcc01e24"],["/archives/page/16/index.html","0f07c09e421803d81d7c52ef79fc8632"],["/archives/page/17/index.html","c536e51af79f6a76e59f45daf8ec5581"],["/archives/page/18/index.html","5817610e6f6c54daf043b768ddccda7c"],["/archives/page/2/index.html","eb1a26e9192bf1f0d3ab3deeed2f8e83"],["/archives/page/3/index.html","055f0d255172c524e2b460240c201cae"],["/archives/page/4/index.html","923c0391af35eef7688133a8a8db4249"],["/archives/page/5/index.html","d857bbff3f0abe554ebcaf75dc014af6"],["/archives/page/6/index.html","588258d4f45fa5d54ba7c8c2b28d2055"],["/archives/page/7/index.html","e4665fecfbf35864e49d84aa440902d8"],["/archives/page/8/index.html","286e94c42bafb6d2d2813173afd04eeb"],["/archives/page/9/index.html","ae126bef205ca5201b728e401d0c6e69"],["/categories/Devops/CICD/index.html","ccba9deb18a68ec64bf23e2d9f2dafda"],["/categories/Devops/Linux/index.html","80456055e5a25c46f39e9a3c75e2675c"],["/categories/Devops/index.html","33afdec77f33a4b4b72b73da6a44cc76"],["/categories/Java/JVM/index.html","127e67ada9eaf237927c3dfbd94abbf7"],["/categories/Java/NIO/Netty/index.html","c30e4db70c2b7fc2dccfd98517c03ba6"],["/categories/Java/NIO/index.html","0f91afa508b0eb2ab437444b1549386f"],["/categories/Java/NIO/原生NIO/index.html","c99e22c1a20373ca07c9949c7d60d20a"],["/categories/Java/NIO/文件操作工具类/index.html","0fc308c10debe4ced459bef24a60120a"],["/categories/Java/index.html","6e1a11dd637230b23d8447c975b71130"],["/categories/Java/page/2/index.html","3e3b9494ca623bd0ee14fc3e49f161e9"],["/categories/Java/学习路线/index.html","86f126d88f6994be33596f951e863dda"],["/categories/Spring全家桶/Spring-Security/index.html","6eddb875d3bf7360d51fd6fd814d1f15"],["/categories/Spring全家桶/Spring/index.html","783cb88498c4f2892b918e680ed3c0da"],["/categories/Spring全家桶/SpringBoot/index.html","bcdb37ca7304548768244a2d52c505bf"],["/categories/Spring全家桶/SpringCloud/index.html","9a65a2c6dbe0409e1e5672f8b423b4c8"],["/categories/Spring全家桶/SpringMVC/index.html","485e5f9be17a8ec257e73af885ffaa3d"],["/categories/Spring全家桶/index.html","2b62d4a34ec7e5e92e015e219f8f03ad"],["/categories/Spring全家桶/page/2/index.html","d61cc7482475a0e2db7dbd1b00b73027"],["/categories/index.html","270fe71afccac4a82dd251e3bbcef55e"],["/categories/中间件/ElasticSearch/index.html","40589e26c73e32944d1403e9d0cbeef5"],["/categories/中间件/Redis/index.html","eb2075c5e5d7071939bccf2a18a0e525"],["/categories/中间件/Redis/page/2/index.html","3382b01d18d15b437f4342bfc5f17803"],["/categories/中间件/index.html","823d305c160025ecb3bb1238894224e6"],["/categories/中间件/page/2/index.html","d92a131f6e118549b39ce530a7b1e2f5"],["/categories/中间件/page/3/index.html","dcfa7058fb61ed0af3ee5990de0d0d1b"],["/categories/中间件/消息队列/RabbitMQ/index.html","f531842e81a40832b4c46f0d35e911ad"],["/categories/中间件/消息队列/index.html","c79436e5f5d1037cbe58cc1bd913330f"],["/categories/前端/Mock/index.html","39f8f443408dc2bdec1872866de34744"],["/categories/前端/Promise/index.html","519b4501268fd75ff1c820e28b25ee89"],["/categories/前端/Vue/index.html","a2e25ef34a9f1c6156d38b83a0cdee48"],["/categories/前端/index.html","4cb24f080f1d51e9c65766633d7a2b30"],["/categories/前端/jQuery/index.html","29f584f6e4fd5876520e48a916db1863"],["/categories/前端/page/2/index.html","17419f4033697074880011c4bf23d665"],["/categories/前端/原生基础/index.html","bb70e37b88fee4c7640888acd7d06403"],["/categories/前端/异步通信/index.html","65907ad5f0077208e3c508d8f3e1064c"],["/categories/工具使用/Git/index.html","ffeeaf4fe84ef3b558723c2c7887d1c8"],["/categories/工具使用/index.html","67b99dd3e017bf1bdb9103f014815be5"],["/categories/工具使用/markdown/index.html","10d30aee949fec28221f1a7b093c5042"],["/categories/工具的使用/Docker/index.html","d0b69084d496312dd18cd65ccd3eb7a2"],["/categories/工具的使用/Nginx/index.html","8b369c7913577ae21b2fdda168a885da"],["/categories/工具的使用/Swagger/index.html","70fa5ec180cb7b0c70c9e69a80cbb933"],["/categories/工具的使用/index.html","9a7d019512717c54feba1a18ff7e0915"],["/categories/工具的使用/博客搭建/index.html","add01452a87e22579c0306a478660b26"],["/categories/数据库/MongoDB/index.html","9c938708e3056a278e45a74e25b132cc"],["/categories/数据库/MySQL/index.html","82a388b6ffe0e6e756d6eadcfb9d10d9"],["/categories/数据库/MySQL/page/2/index.html","51abe6b8c2f296447a6753fa13773a50"],["/categories/数据库/MySQL/page/3/index.html","883904bef86de04efd00bee72c7239a6"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","a2293f67d30241e759a411757676b6c3"],["/categories/数据库/ORM持久层框架/index.html","bf6f942e229f9a3f7832ee1c4169582c"],["/categories/数据库/index.html","3e6d078850dce74d1d60735b021c21d5"],["/categories/数据库/page/2/index.html","a529c928beaf50e37ec2b9e3db5d526a"],["/categories/数据库/page/3/index.html","a13268760fa4d675cc65df048e9529b3"],["/categories/系统设计/index.html","00d06f184fdfb3ff827225c8019b3990"],["/categories/系统设计/page/2/index.html","29017100fb333be607968d71497af351"],["/categories/系统设计/分布式权限认证/index.html","88d724d1ca7e852805da9b20f29935fa"],["/categories/系统设计/设计模式/index.html","191b2ac83bb3acfe9780787c2fe662e2"],["/categories/系统设计/设计模式/page/2/index.html","c3018b9a31c40fbd30493f8b3693cf7b"],["/categories/计算机基础/index.html","9757999a82ceacdb648069afee6157a3"],["/categories/计算机基础/page/2/index.html","928dd72b888fe28dd7e2f4681ae84896"],["/categories/计算机基础/page/3/index.html","ec88d2b41f6efd67941f89618c81e1a5"],["/categories/计算机基础/page/4/index.html","d43ca05fa38bfba17dee368e8fbc9ef7"],["/categories/计算机基础/page/5/index.html","a72ec008507a89f9e83e1fc57e4e9695"],["/categories/计算机基础/page/6/index.html","43343338d5d1ccf4e35ae7f3fca0f486"],["/categories/计算机基础/操作系统/index.html","8a3ea81c85fe13102cfe082c815ab812"],["/categories/计算机基础/数据结构与算法/index.html","a59e29c07710aeccf7342001173dc5e1"],["/categories/计算机基础/数据结构与算法/page/2/index.html","219690b0b7bb45147e0c7ce1f72ffae2"],["/categories/计算机基础/数据结构与算法/page/3/index.html","993be76b8c82b17308e4630c3c0bd81f"],["/categories/计算机基础/数据结构与算法/page/4/index.html","c081ee9bb1efaada75e1d91e6332a35d"],["/categories/计算机基础/数据结构与算法/page/5/index.html","0b6076e4f25d89a109fde815a9191fd2"],["/categories/计算机基础/计算机网络/index.html","144791a31127313f6c1432b5d0e86a5d"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","44267b3771f911f4fe64e772beb739e4"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","123e7be29c352f02eb33608aa43f817f"],["/messageboard/index.html","3853a39aa884ddb270857a1739dea661"],["/page/10/index.html","c93e269c50bc050d3d25c4891b8bbcc5"],["/page/11/index.html","c667e92e9ef143d16c76a178b78d7395"],["/page/12/index.html","1adf7c0b8baa088f156c2a2f5ed8cc13"],["/page/13/index.html","2aead0ce386d84ecd1e9676a3c4ceb22"],["/page/14/index.html","9773a0e96a233a00f20ecc9f8ebe9c38"],["/page/15/index.html","c2923e00c3e7ee0fac6a79d7b58e33de"],["/page/16/index.html","079a11efb4bf6e86709e6eb193714d97"],["/page/17/index.html","170af198b678828148b4c78548cb232f"],["/page/18/index.html","7d4a31368f3f0ce271bc11073193b7b1"],["/page/2/index.html","e633d6ee6fc2a86aaab677960481e3cc"],["/page/3/index.html","d3a4cb0f246379af91625ce63453943c"],["/page/4/index.html","af07693c1ca3642d7b6eb7706e433eaa"],["/page/5/index.html","32a3d4cfa75067e08abb065b1d2eb338"],["/page/6/index.html","27d25891058df3b72e3301ff40cdc6a0"],["/page/7/index.html","607062bcc5eb29c90464319a846b567d"],["/page/8/index.html","cec6bc2ed48bab079f03887ea3dabc0e"],["/page/9/index.html","1b27aaad0bea7fffa80d47f451b7bbcc"],["/sw-register.js","7ff643f59abb2b093287c1d74f21de5a"],["/tags/Ajax/index.html","f1d95b76bb7cb663a495b7b70ff392c4"],["/tags/Axios/index.html","d0b44c6e7a9fad7a3716c623518fe265"],["/tags/CICD/index.html","384f6a83dc5037f56c181387f78431d0"],["/tags/Docker/index.html","485041b4b3a03a21e12d1f178efdafe6"],["/tags/ELK/index.html","a675166b28b368953394d5a1c5db8ae2"],["/tags/ElasticSearch/index.html","d8595cb52d6ec5bc7a4fd60031b61db5"],["/tags/Git/index.html","2545396a13f07d5e77af0577605ef845"],["/tags/H5/index.html","67802a932bda9d80f5abc83bd99a7c73"],["/tags/JVM/index.html","9fb5f5dc325f0d1e04a7b0417622118a"],["/tags/JVM内存模型/index.html","01e55c856da2a5440543aa650e8c9346"],["/tags/JVM执行引擎/index.html","39f6f74487a57c338973160c81dc6387"],["/tags/JavaScript/index.html","064eae23227fd8ee42ad2f51712f0abc"],["/tags/Kibana/index.html","d7e6a1f2b017252f67e4dc93ada5317c"],["/tags/LeetCode/index.html","92fde43b42bc7f21ea6ebede761ea54d"],["/tags/LeetCode/page/2/index.html","1a6011d3cef666ebd8aa23df9090b599"],["/tags/LeetCode/page/3/index.html","e8a69bfb87ec0796486afbdd2711e97d"],["/tags/Linux/index.html","07e497d999eaa013e3a3040167da2e9e"],["/tags/Logstash/index.html","09bf9f2734d42c5e09bb63903e47d3d9"],["/tags/Mock/index.html","4d9bc77ecd2438709e40489affcad345"],["/tags/MongoDB/index.html","d2656779180253fffd18b580b9326703"],["/tags/MySQL-事务/index.html","d331763e85671d67ae2e44d89bd9933d"],["/tags/MySQL-数据类型/index.html","5f4075e2916c3234e4270e05ae840394"],["/tags/MySQL-日志/index.html","51b01bfae120fa6731c79c163a120bd1"],["/tags/MySQL-索引/index.html","dc9375e291dfbb2075265c8b68be7409"],["/tags/MySQL-锁/index.html","e291a4d8d9c749c33cdada659efd19f8"],["/tags/MySQL/index.html","d98eb51c97a0705f280dfd862fb5c001"],["/tags/MySQL/page/2/index.html","f8bb2e36828ba917099e9036504c3d65"],["/tags/Mybatis/index.html","00e4517a3b2c0b58b88d302e5c873119"],["/tags/MybatisPlus/index.html","5f07643a22c954ff1b13c180bef2f4b6"],["/tags/NIO/index.html","ca6bb925bfeaeb22854bd592daa2b068"],["/tags/Netty/index.html","275ed3d5252734aebadac6c8ce5c2211"],["/tags/Nginx/index.html","17d999d70b35957c6d8e32f2e5c97545"],["/tags/Promise/index.html","ce0df7f1fd563c2acbfb57b0338823b2"],["/tags/RabbitMQ/index.html","5fcc0a4a7209d716c6eff27bdc5ac15f"],["/tags/Redis/index.html","098b87ccea8884b8b4751ca58d621724"],["/tags/Redis/page/2/index.html","7d3efcdd68c0e2f695b989121f486620"],["/tags/SSM/index.html","4526062ee2e8f4e33139fcd2c86707f2"],["/tags/Spring-Security/index.html","18521eaf8117e810971e0a3417f91f13"],["/tags/Spring/index.html","5bfb80ec900df5ad92ff21cf6c78996b"],["/tags/SpringBoot/index.html","8774f23e5b56c37435516c15cb7118bb"],["/tags/SpringCloud/index.html","872ca18ed2d4ec50fc921829fb435a08"],["/tags/SpringMVC/index.html","147f0d76eee77305bfe7f13ef1e38bad"],["/tags/Swagger/index.html","a518a60373642a10358ca656812f9b8c"],["/tags/hexo/index.html","3b02663208e23f05bd3bf08b24651465"],["/tags/index.html","f6bc7ceefbbe5254bbbc62f6e44a769c"],["/tags/jQuery/index.html","ceef9dad10e9e6de18f7cc18a7bdb882"],["/tags/java/index.html","f752aa41d07d9f912ee41fdfba31e091"],["/tags/markdown/index.html","512d3dec7def091bc47a0219267209bc"],["/tags/noSQL/index.html","300f7ee2a18db2063cd0570c93876d43"],["/tags/typora/index.html","c1f864787325da4ab817015abb60e927"],["/tags/vue/index.html","5302cfb40b69c7d3505dbb08d884d670"],["/tags/享元模式/index.html","cbe8f6173e7b35edb02005c8f83773f7"],["/tags/代理模式/index.html","a58f8602037efb5ef1c366fc694b2131"],["/tags/内存管理/index.html","58c60201b156afba264ff4462aa25e6a"],["/tags/分布式/index.html","37c860db2d35127ae70a0ba768f89ffd"],["/tags/分布式系统/index.html","a0228781c4b12d3c64e484c0a11fdc44"],["/tags/前端/index.html","5b11f6ad32afa4f39121f7c342c59f27"],["/tags/前端/page/2/index.html","0b1e05d47bf4c329a0669a729e2badb0"],["/tags/博客/index.html","c5d6322706067f3c2395189a15be546f"],["/tags/后端/index.html","70085a599885f2f49e1be67f82626212"],["/tags/外观模式/index.html","65f0295489c59da7163704043c1a126f"],["/tags/容器技术/index.html","79c1780fb1eece7bbb5c45e249e37a3d"],["/tags/工厂方法/index.html","660bded58f2bb52f326f47ff37ae69f5"],["/tags/微服务/index.html","36e91e098ec4687f26228bcd6ee2c709"],["/tags/抽象工厂/index.html","be37d72e94c2daf411646ccb1ef89b53"],["/tags/持续集成持续部署/index.html","9ed54bbf8b5133b3aef5410e27d42b88"],["/tags/搜索引擎/index.html","9eeb148c27eeb1eaf3be42e233ea2873"],["/tags/操作系统/index.html","23cbce867572f36585acaffab22ed25f"],["/tags/数据库/index.html","ad89772584627fdd9e8bb532b68733b4"],["/tags/数据库/page/2/index.html","e02dc587d872bbdffc573f355065c705"],["/tags/数据库/page/3/index.html","16f36cb81682c68512acc419db19ba02"],["/tags/数据结构与算法/index.html","d1fdd2f9c2128d7da33fabcb33218e80"],["/tags/数据结构与算法/page/2/index.html","4c65890376109bfac3dc4ccd7eefdac2"],["/tags/文件操作/index.html","39d359bccd2bd8ac016ad0dd315223ea"],["/tags/日志/index.html","a4ec01a88416d72a8c900bfa7af7e466"],["/tags/服务器/index.html","d2322e612a45a9c5f094fd0be9f8e355"],["/tags/权限认证/index.html","34a1f349d3250db17c38a4feedaeb89d"],["/tags/桥接模式/index.html","4a20d48162d389f4d5c18d3a0dba46f3"],["/tags/模板方法模式/index.html","1a697b1506928847d7d6289390a29f3c"],["/tags/死锁/index.html","60419aaad37767293657d4f510c0f3af"],["/tags/消息队列/index.html","b50424d8e371f9407947aac0eca04720"],["/tags/版本控制/index.html","ec13848fb1042363f4610ae4cf5331b0"],["/tags/策略模式/index.html","32d7ca7656bb63b2c5f1f50a00a6c0de"],["/tags/简单工厂/index.html","c83ab7bf434a7973df0eb6a35c5d7fc4"],["/tags/算法/index.html","b8e97460ae5ad6970d5f0bf98e0b9b37"],["/tags/组件化/index.html","1d30f05d96e412077899db680a88f3b1"],["/tags/缓存/index.html","d26ea65afbad9e564455d596e09759dd"],["/tags/缓存/page/2/index.html","2781ad116fd093a158ca2bf2adec619b"],["/tags/观察者模式/index.html","bf8882f4b7ed630979fa50ee4003cdff"],["/tags/计算机网络/index.html","a14aac6e670b7fee91cff35a2a7e2434"],["/tags/设计模式/index.html","f0ff971651f3c762b7cc10ae98327dcc"],["/tags/设计模式/page/2/index.html","979bc3214ac8f134cdfc3c4c51599a77"],["/tags/进程管理/index.html","f888b3e69fc01f954098e7e20a5d7b25"],["/tags/适配器模式/index.html","a9628e5dbdcf535fef4e06c357affe7f"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
