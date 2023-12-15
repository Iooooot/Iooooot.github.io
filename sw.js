/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","33968455b99659ada1495a80120a9a79"],["/2021/02/22/工具的使用/博客的搭建/index.html","f5195dda8d18487c37cf4c39f0640455"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","62f112d87c1316de1117db3e8ed65094"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","5ed951b52f3d9fac14a874fb4fd83330"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","bfc88effb85758d7cce0907d9a304334"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","20f6f86ece3ffb91a61af63dae42607c"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","a205d425f2936a9e982b222289b5831e"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","ec2324fc01edbadb0716640a51d5d6d2"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","4a0c82475e32e2a54bbcf62d53e116fe"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","827c1198f0184b67f4083f79d5a24106"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","58482b2ac40ceb69b94c371dfcf4d013"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","94019f837a06fe38f41307426a1dd0ef"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","507a58ac5bda9a901456b0dd0b721d95"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","62fd61b5c272e784a6ca219143ec407e"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","c7a6e47e1b59f5ce416b927a5348f32b"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","41b281b7239111775193f9d01e3f236e"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","eb3011c38f3bbaafb3d7918d672bc585"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","8f35c0c6ef23ae7c3dae194bf541f12f"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","c639e2b4061452c14bb600fcdbf1c0c6"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","2826a5c496f7ef7af68d2ea17a3180a2"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","56f124ac97fc3840cefbcd31e4cc7114"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","7ddfdc50dfabf48257a785157e520b1a"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","00381868bec6e3e95865b1186b3a13bd"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","b50469f3dc44431f6d4b843d6ef76541"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","d9a3bb82af313fc32c354e104da53832"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","70231805fe63d05035d4fbf2832a5b31"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","1203fa005fe92b6a4aa1c93cdbbf6b8f"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","40b4a7c6ca0481842d0e0098be26eb0c"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","67bff1bb5d4fbe990b4d9858e71b3a3a"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","631a111d4d4e535f0eea3e3143019b68"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","14e7a6fecd285f7bc22f1a0efc98a992"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","10179723553a1c1bee101a7bb188effc"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","62cd84ef0530c6f0e6c8a847b4fcc2d6"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","93eba88d4aa173e6a658abceac9043b0"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","b0170d202a7209c9d0f4148755a89452"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","f8bc5bec8f706d6d0e82c6746a2efece"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","e9526064c45147d4244aa793a0165cf4"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","476c52379885b8f1e0309df9d7871446"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","32dea80d31f2a6da154bd57e26457551"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","14baccd2782ecf309ea8578d401a5799"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","730b8c6ec732345a993d06631abe0431"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","1549615003405c0ec590f0a22b3c6850"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","fc9ea560737c8f1144d5da04a2888100"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","aa2ac1d91c69bfa77d0daef330fb73e9"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","f9d4c9d99de714849c7f7df7aec6a957"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","3acc20377bf29fbcc7487453108fba0a"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","0fc32505276ebca4dbf41a7d21f726e0"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","75667c884d96e25d9ae5866d6e0cf2bc"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","de0b12ecc373a34db10ad6590fbc0050"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","15e945ad8c52885fab4edd229c2c6885"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","1577a4c4cfc04fd58c55e83a9861caf2"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","a3c81232e6765bf201d9b351cd137741"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","083c771a01d38bd0a333470580fd2003"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","2396a56b9f44b58af3487b4bbe4ab720"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","e242ecf6f6b6eb97f34c8aaffb3ec5a9"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","a7d6bc3ea8fa022bb1f14b8b578509f5"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","528235406914cc4d8cc8f297bf9e557c"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","0d92fc18759db94adfc459e0cd832cca"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","e5be75d32ceae2e04fa015a8c966114d"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","20047002803c24491c02d529ba377922"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","d526c672e7c9c0ff0617ec8f534d014f"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","f9565d4643ff1ad75cace443036a0766"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","07f6f44d3c646e289deaedc906d66866"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","d0288e17053ad2f5d73b7d22b4fe0149"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","bad7ba015906f11b659eafd80d54a24f"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","e6098e7ddeeda74a4ea83c3b25cf3e0d"],["/2022/08/17/前端/jQuery/index.html","489d1b1ba7bbc52649bdbbc809e01be2"],["/2022/08/19/前端/JavaScript/index.html","acd8e37127bc0214cb314f7d39a5fa04"],["/2022/08/22/前端/Ajax/index.html","0409739bb743027ae926b6b27cd08985"],["/2022/08/23/前端/Promise/index.html","9952119bc35ade3024bf89d0c0a6545f"],["/2022/08/24/前端/Axios/index.html","9f5a48d26c89b66449a3216c2903f587"],["/2022/08/25/前端/H5本地存储/index.html","4c1480a635978339361cde01d9b70788"],["/2022/08/26/前端/mock/index.html","b13a15778a61a26522cfaf9df18f9bd1"],["/2022/08/31/前端/vue/VueJs/index.html","5cf223c1b1b616f370422a72742bbc76"],["/2022/09/01/前端/vue/vue组件化/index.html","1149587abad5a46870cad407ec117f95"],["/2022/09/04/前端/vue/VueCLI/index.html","a07cb4f8bb725f83534e5da41262f07b"],["/2022/09/07/前端/vue/vue实现动画/index.html","3b1e7a2eaf996739a2a613215487fe8d"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","d3a3e27802ff9965c62fea0a449f0ee8"],["/2022/09/10/前端/vue/Vue异步请求/index.html","4cd8627d8fdcaa945de43ff144e91043"],["/2022/09/11/前端/vue/vue-Router/index.html","a01be163e8b93d65fa47c029ad56d38a"],["/2022/09/13/前端/vue/Vuex/index.html","0db22404d01c77be2511bcf432c8c414"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","eb17316c4beb92e56b26d71af7d9a187"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","b0161edcf309ad3741ac81d5717e5bd0"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","e385fe05623a4177ce4b01296924bc31"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","6205c0cfb183fc0cbd99299cfe242abf"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","a4d709e61d8fa2d6d4f84fb1fceecb8c"],["/2022/09/28/DevOps/Linux/Linux/index.html","97e56480e051ece41e70cc10b1800416"],["/2022/10/02/中间件/Redis/redis基础/index.html","d036f0975aa7b16c657cb36868c2d524"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","e4e6205add46a7c540c2de1bd044233f"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","141afe7cfbdf71bad563b2c97fb3d0a9"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","2509817fdfedb7e859b9982d6b2f4676"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","f14624de9d0a41048759ed4b441eff23"],["/2022/10/17/中间件/Redis/Redis集群/index.html","140f6c3ab62ed5646fc908677c797c6d"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","237012b915ac06de06869f19340d3682"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","b921152caa84d99578fa85618a69e74f"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","9da426d713142f314ed0b1370cb8e12d"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","96ce8d55868520ee0c339802a8a38755"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","eceb63200a83888a4499a0fa1457b97a"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","52057dc597c014573c51e02d62d0d84c"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","918c795e40512b49c8831b4fa6336fd7"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","1a93b8a8f08b74de212b4c5f2a9e9e6a"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","7d2d91c46bded32ebd2bcd221b8fd52a"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","9366f30f9a2311dad515e74e4e2af332"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","66f6fc86954baf79675fc61760fcc1b3"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","4ea8545a2717ea4496b6f33152593fab"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","bda497b16e30be7368d10c41bbe3e947"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","d1c090939bbafc3762588fd837c4eb91"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","a49211194be7e5bc01890e5cbb822ccd"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","cfc36863bcfa565df6f6cf627a748206"],["/2023/03/10/DevOps/CICD/CICD/index.html","35da754cc392e72bd05883ee304152d1"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","e2179a90de150d7289633b756f8f9507"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","85c2722c241b29b4442496b35a9136dd"],["/2023/03/13/Java/NIO/NIO/index.html","6297cbbeccfa5cd3701d2a6209b00809"],["/2023/03/14/中间件/Netty/Netty/index.html","0ae23d38bacbc209d08c79893116ec03"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","cd60fb3a4a05d53da09d069c2394a68e"],["/2023/03/17/系统设计/分布式系统认证/index.html","b07fa8b0b50323d520f3423dd3aa48ec"],["/2023/03/19/Java/JVM/JVM概述/index.html","b1f1d9c86fe6f0c797a2b91d12a30d34"],["/2023/03/23/Java/JVM/类的加载过程/index.html","fdbca5910b36cf73ecdda58c2bd74ccd"],["/2023/03/28/Java/JVM/对象的实例化/index.html","24a260a07aef0bcc335d183473c39856"],["/2023/04/01/Java/JVM/运行时数据区/index.html","f466a65a3f6b800ef5d31a381f1630d5"],["/2023/04/04/Java/JVM/执行引擎/index.html","f4cada60ee3aef064228529e93d6d82c"],["/2023/04/06/Java/JVM/对象引用/index.html","93dce311de2573321d9084a79e58a857"],["/2023/04/09/Java/JVM/垃圾回收/index.html","7537f8ad0b3c65b4ef560325328fd69c"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","83100ecc99a899a063d2a830374c279e"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","af7ec301edf8f6f063db79981ecbc4da"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","5cae44dda589d1285992f8e29bbccc4f"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","b293a22f38859b12d36af4080f7d36fe"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","8990337a410018611df85ffc94c7f9bb"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","e6b9ceec8bd5288652cab1bab7a6a59c"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","ace2c6b1ec70939649d60bf5e626dec5"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","c8319b6405a39a330d3e857be1580767"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","337de9c7d9df6d0ad6306afb9bd0e65d"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","6f34eeea69749f4cb6c3e022ec92d7e1"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","a75f8f950003832e77ffe3b19d287df9"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","bc1cb9003826a81569a14e90a0d4d821"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","a615a4f274e35a9ab3e41211808ff0fd"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","c6d34293cbb202d7f0f57cc100198967"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","5d2f4d5bbb09822b903392b7a3d4c28b"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","b95ef85fe261c9f7c91ff8f9d39e6a73"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","ee41835f3b16140a82477b40d5506a5c"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","6cc3f3c3dac902e4c76725ad0998ca1f"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","2b6563d53baf8abfaa38ba0c919c926a"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","bdb60b1454f8e16a4aa87866a6fc18b2"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","617fcf490ddecf5ccbe5fcadfed3c8cc"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","64a577e197656921512f36cba2bd4668"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","bcf9a502e6dd546e857a8de02fda28ad"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","c33efbbb0dff002cd70ba7c93c44d043"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","d0a625de604d63fec375e6c6eca5a881"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","732a1c82584b3426117249133964daef"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","cc090acb05b818d69703ba4bbcc0539d"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","f37ce6e0dbadb4b6fbe92d68d1ddc464"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","aa26ee5d14329e2fb7897398c1293896"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","936cadde4e1f15af05cbfadcb9364964"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","639742a423b88ade1e16f37d4426748c"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","8b181935124f9e77aa5ea4d803c8cb6d"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","713727e8d928fba6904557f50beeb683"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","044a28c55020a5fb0067369a17f40139"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","46ac7877624aeebe6db80344c082e253"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","b93a8b752bf8dee1a645b262f2780729"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","776a9b5c1d291729b07cd1d348e73d10"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","0126c0d92bdacfaca65cc7385b2aa41c"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","f0bce544fbaa0a02f19e123c8625c5d4"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","99807da01cc46bff84513213165ddf72"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","e04d767eaad29252c1f2af2043a59d17"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","53531e0b71c8fe07ff14aaa69604b704"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","1ef877e4b66f232d3600f990fb634abb"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","9766539d5437029b7f3134b645ed4102"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","08d663a92c199bbe1976077a12dee265"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","c615e2a5d9f7b67d0c76ffa4771940a2"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","064488e49344815d04ec70ddf369a404"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","7da28c76b6601c298e73295c2c0687a7"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","0ccbc90d720bc6993b266990a4312d0e"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","6d7791f63eac3d233be2812d74406b7a"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","ade3645137159d81e094e74f1fcb1363"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","279a39c39d2c2e2f6df7b8c657aeb86b"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","7041331c8b2c056a75e5b7e98b19c645"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","02069e68d8044bfd0fb9a1b5c3ded6de"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","07ea07a427e67a637e2ae17455d72476"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","628bbfa1ebd93c7ce0bf0467c3f1ae90"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","e3ba6752338b3a2465e16398411147a7"],["/2023/09/04/中间件/Redis/Redis事务/index.html","e8a588c158b238d63410f3eb124e5370"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","4e48483249c68c16b36795cdbb28e496"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","468121293ec5238d98f42739fffbae4a"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","f85c5519f49dd3174ab40d60d6e160ce"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","bd8bbec7533cc5f3fbfa4011d45773f8"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","2451b5e836a89ee8bf0bebe2c081788a"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","2c5ca8efdb889b6f85b4083bda70833c"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","88e7821c59d8447f7a1b1fda9a19b5c9"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","caf94126d96e985e80d8600c13b51173"],["/2023/09/22/Java/NIO/零拷贝/index.html","8a2983b7ff8fa80d5aef2d85816a358f"],["/2023/09/24/系统设计/JWT认证/index.html","2528238d7fba36af4687baeb491b5965"],["/2023/09/26/Java/NIO/Reactor模式/index.html","73f20310d596640dbcece73b3c980d1e"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","3d934244810775e8c7a7c760a63baed1"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","4f52c4da1cc5f1ee3d23b27eccbb87fb"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","6d63152c29f851b01c7a048f4d54596c"],["/2023/10/09/Java/并发编程/共享问题/index.html","e96c7e67e0b97dbb557cfdcf61639469"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","9d60170b72475e76537de07accd02f77"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","da44d8e095f6f6d1f91cb64fb953d819"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","52bd84700720b8caf23c37c160bf7ba8"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","ec45d3177b99833bff2e8870a8809a06"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","677d4a9a9f78a2614a1210947936ddf4"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","b2a5482068c93025ed0457dbcb083774"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","b028f69ab29f48a4a51c93ce88079807"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","2001ec4d0fab41674affd18b30f3f826"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","664ade384bae6ca4660269a7d317e06e"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","1ed8b94e19661b0b0a2feee32baa2f6f"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","a95864eb41b3c27eb19d29317806082c"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","b74b131f1fd19be3f5a7246bd4d3bb68"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","f7309b7754551f495121759555ad0ea3"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","54480db30176f4c396cd770f40210d78"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","0890ed8aa89568ae9ab7c5f7cd05ae47"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","781793ca7d6ea4943954c0e6bf88b0a0"],["/2023/12/05/系统设计/开源协议/index.html","5c47c3a9ce0d17f5c603881c502c7f6a"],["/2023/12/09/MockMvc/index.html","1ff8a59a7943fe73911cec48168faaa0"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","b29eccab925abe0ef29a82d03dcea002"],["/404.html","aaebb1ecf38a6c6b106c2e5077e43100"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","4a3aa561b5dc7ac0bc2620e56f174af3"],["/archives/2021/02/index.html","2325c768b97e1897053b0eb0be5f2f5e"],["/archives/2021/03/index.html","3036e965a80e46a5b21bd593c7208955"],["/archives/2021/03/page/2/index.html","02beba39da5d8d1faa494ce7a60c1dd5"],["/archives/2021/03/page/3/index.html","f25f6ad73aab66207478007e17680b1f"],["/archives/2021/04/index.html","afd5ffc46a379075a86b16941ddf7aeb"],["/archives/2021/04/page/2/index.html","db87ab6d501fa02f7904d7d7a60e485f"],["/archives/2021/05/index.html","35a302aa17242e09f62ce1efa0704a25"],["/archives/2021/index.html","4bc8708f61537e2d8bdf1616cca90ee4"],["/archives/2021/page/2/index.html","142d3edba3b1503dd0a06513f040c4d5"],["/archives/2021/page/3/index.html","7808bfd1a09faa86bf83d30b635679a5"],["/archives/2021/page/4/index.html","c5a9e3089a6376c000e6432d76528dcd"],["/archives/2021/page/5/index.html","65155ced4003f866680775ce592ba25a"],["/archives/2021/page/6/index.html","bfd45ad4d84609e8c40518ee43bf1e3d"],["/archives/2021/page/7/index.html","800f6222031ad7d556c3c450d6f0bf1c"],["/archives/2022/01/index.html","6ac62dbb678093a5d5c316e9b93c170e"],["/archives/2022/04/index.html","328fc8f42d27c8011820d82a81e233c5"],["/archives/2022/08/index.html","7889f0478a93075e347548e649d59f19"],["/archives/2022/09/index.html","f582859abe0428ec12eb4958a27a8453"],["/archives/2022/09/page/2/index.html","3d7a60c92b17f71b76f04b46600ca1fd"],["/archives/2022/10/index.html","ad73f76d9dda24f5e8d4f877bc619f99"],["/archives/2022/11/index.html","2682e3fdc19f707f1ee700aee25132b1"],["/archives/2022/12/index.html","dcfa1f2439ceb4191f4219b0a19a9a6d"],["/archives/2022/index.html","33c5d62075a1df51a7994c987d3a747d"],["/archives/2022/page/2/index.html","31b2825d0291eb778b76edaf3eed25e3"],["/archives/2022/page/3/index.html","a001239e12df1d1b4142c5213e4a078b"],["/archives/2022/page/4/index.html","efefe2ab26b58268e8cf864711cbe879"],["/archives/2022/page/5/index.html","1e7dc134b4c173ac7d9c2df1c1150034"],["/archives/2023/01/index.html","e20908c09af53404c30916eb31996875"],["/archives/2023/02/index.html","399d1f21e8c0b4393e664e55976fbd76"],["/archives/2023/03/index.html","61587c938c244a0e9f00334c9af49d7e"],["/archives/2023/04/index.html","545197753b7b54f3fd1b33d1c922bd28"],["/archives/2023/04/page/2/index.html","e17bceb2c1384057f5f8abcfab27e2ba"],["/archives/2023/05/index.html","7efd84759eb4104acf1d63b4214c5bc4"],["/archives/2023/06/index.html","5a4df8805d6881678d8bada27a0254d0"],["/archives/2023/06/page/2/index.html","b5c049335885eec6fe38d4ec75e5f718"],["/archives/2023/07/index.html","5f8266bbb5bcc038023b960596949236"],["/archives/2023/07/page/2/index.html","e66c9f0b7c7c95ab9c2fa02613da0bc7"],["/archives/2023/08/index.html","a0658ab4545857b09de389ddcdf6dca0"],["/archives/2023/08/page/2/index.html","e78fdc8d452b7037c3db4be3cd5e1d24"],["/archives/2023/09/index.html","c3272416bf3c8f9adbe56926e8477c49"],["/archives/2023/09/page/2/index.html","07b73169a9ed5927474a2f2ab613ea38"],["/archives/2023/10/index.html","df2bc8e8abf96e8f2be42dab77893d8c"],["/archives/2023/11/index.html","1459ac8ee23b75762e1f90521a189502"],["/archives/2023/12/index.html","865566a7a7082e6733b5f09069626b3c"],["/archives/2023/index.html","f4a43945141d9eaa18701324ff2e84a3"],["/archives/2023/page/10/index.html","801451c8f8286a215681f790aae9b241"],["/archives/2023/page/11/index.html","432f742f0b4e7a5a2535bb9efad4193c"],["/archives/2023/page/2/index.html","dd6c397a6467925fb3008cec27123a08"],["/archives/2023/page/3/index.html","86be9857165628efc8cfd10e62b8a70a"],["/archives/2023/page/4/index.html","f050c6e103539fb2e98daf32ed9c95d0"],["/archives/2023/page/5/index.html","51bffa3207bac169d87e710beedd5cfd"],["/archives/2023/page/6/index.html","5fcbba6ba802856f9316ee82f30abb87"],["/archives/2023/page/7/index.html","c7c0d610cfb8f5a42c3dd94623e20672"],["/archives/2023/page/8/index.html","0c58f69d2587d3c023cacc47773ef55c"],["/archives/2023/page/9/index.html","286960f4b799d6ce02665b93d86fb368"],["/archives/index.html","d1251a7b03b02b236725bfdfac805170"],["/archives/page/10/index.html","ab79cbe15dbb84f8134691acf3cc7eb4"],["/archives/page/11/index.html","f62a904f30aa6051c7dae91db1b27c51"],["/archives/page/12/index.html","f5d405c05f23e8cf5019a5317b80a62b"],["/archives/page/13/index.html","9aff3529474a305bbc5e306ea91c2aba"],["/archives/page/14/index.html","39017d320948c4a5e161803102802647"],["/archives/page/15/index.html","6a655405238992201db184a555f3e6e0"],["/archives/page/16/index.html","8d0f8c6724e51772c6c346739a9171ee"],["/archives/page/17/index.html","8599c2f685651d2d172280b4a8e7f41e"],["/archives/page/18/index.html","d16ccd0216f148eb19feb8cb6bd58340"],["/archives/page/19/index.html","cc475c3bad33001bb45ddd9cf37e886e"],["/archives/page/2/index.html","6177d72b55c3721c9c22e8fbabe5871d"],["/archives/page/20/index.html","820a5e5bee9d9dd38749ca1c6dc1baa3"],["/archives/page/21/index.html","f5c44bf81dda643636be2744a0a7d4d9"],["/archives/page/22/index.html","3b78843a6945be39cf8da203206e7395"],["/archives/page/3/index.html","0ece8a9eba0559d0c1adbb4768d69559"],["/archives/page/4/index.html","acbc3a32369906b9f9edd3ab931215eb"],["/archives/page/5/index.html","c7f5847fe0cb78ed6d37aa3dccdbd13b"],["/archives/page/6/index.html","5c5e5a42a600cee45a803cd9b31b86a8"],["/archives/page/7/index.html","3dc8b5b8acc361287f5484bc18d2ebde"],["/archives/page/8/index.html","5e6c95d1bb29fc41fd5c5904214b9f92"],["/archives/page/9/index.html","93c4e2d8b209b35bf9264ebf2180191e"],["/categories/Devops/CICD/index.html","34da56e16341ebf61d859d4a79bcbc11"],["/categories/Devops/Linux/index.html","e8f5461bb5cce110fb0e6b1343945edd"],["/categories/Devops/index.html","77f5aa9a36818cd921953f13342b0bc3"],["/categories/Java/JVM/index.html","e54bbf6818133c3e887e8850419b333e"],["/categories/Java/Java基础/index.html","e70753b0f78c5b63e4ffc42e6e342e29"],["/categories/Java/NIO/index.html","f9510b52098af1f7c814630cb7e342f0"],["/categories/Java/NIO/原生NIO/index.html","230e24796fc3b73fa0c4689c6102af85"],["/categories/Java/NIO/文件操作工具类/index.html","03cfcabca70ebc199571ce29bcd8151c"],["/categories/Java/index.html","02c8f306ef2216b83714c43e0b7f47e4"],["/categories/Java/page/2/index.html","90ec6c79baadbd24d8e7ad121bd67534"],["/categories/Java/并发编程/index.html","c841aec3fe7d65c74af31fe88f9adcca"],["/categories/Spring全家桶/Spring-Security/index.html","f35ef49527545451906e7e85b1c82ad8"],["/categories/Spring全家桶/Spring/index.html","fc55c34954883ea86baa9ec78531e830"],["/categories/Spring全家桶/SpringBoot/index.html","f16b2197690468e0e1796ba42465f640"],["/categories/Spring全家桶/SpringCloud/index.html","70c3d192862c9260bfa3780a11584c7e"],["/categories/Spring全家桶/SpringMVC/index.html","9f28a9feee846da2937c0e396aefa89a"],["/categories/Spring全家桶/index.html","25e994114f1d79c0646e8e8d9decd9ec"],["/categories/Spring全家桶/page/2/index.html","99992fe9c360cbf78cd53e00b41b42f6"],["/categories/index.html","3a02c61ba0d8a146b69785e171935c0b"],["/categories/中间件/ElasticSearch/index.html","dcaf880f1704f3b90516b774f4c9e373"],["/categories/中间件/Netty/index.html","f06f0194b2f27c715199acb906ba9dcc"],["/categories/中间件/Redis/index.html","bcde6abc31006b7ad76d6e8b9e454d3b"],["/categories/中间件/Redis/page/2/index.html","b73a6cbc05ba016c9d665af0cd76c27a"],["/categories/中间件/Redis/page/3/index.html","b0662c1ba051b62832ecb80dfb1d63d4"],["/categories/中间件/index.html","78b244b1243775327d9265a6d4cc475a"],["/categories/中间件/page/2/index.html","f2f2ae6b6668ac9587163a2dc7bd3111"],["/categories/中间件/page/3/index.html","d1b2e5f2b647baa209572df847bb71af"],["/categories/中间件/page/4/index.html","c439ce8f94d4eecc92172e69e155ad1d"],["/categories/中间件/消息队列/RabbitMQ/index.html","bdb50de4bd655c01e904d0058c2b8b3a"],["/categories/中间件/消息队列/index.html","3f70cfda9b8bd86124ac68bdaee40f71"],["/categories/前端/Mock/index.html","1e0421edabe81f5dc5661ce482ef15d2"],["/categories/前端/Promise/index.html","7dd44e81e066f7ec5fe02b42a4a54feb"],["/categories/前端/Vue/index.html","a8e23c8afcd89599591e0d38ca9a35f2"],["/categories/前端/index.html","060907078c8e77263f0980ffee1d4ef2"],["/categories/前端/jQuery/index.html","bacfbd46ef8b30f8150bccdeb256225a"],["/categories/前端/page/2/index.html","f94dc56eb31863bc91627765dad1ae96"],["/categories/前端/原生基础/index.html","4a06a0fcf5e2daddf9c9c70ca1f69308"],["/categories/前端/异步通信/index.html","21d438eda99a0417347726e8e934928f"],["/categories/工具使用/Git/index.html","99b373090e07887d4621a6104648ccde"],["/categories/工具使用/index.html","611babb2bb65e3b8445a9c46443114bc"],["/categories/工具使用/markdown/index.html","eafd016c73a3dfa681c89278e30c1c76"],["/categories/工具的使用/Docker/index.html","03c27d91911831f77bec319541de6291"],["/categories/工具的使用/Nginx/index.html","ff586375789ec58e2b7d2e14e4ae9c45"],["/categories/工具的使用/Swagger/index.html","c8be3a1a2d04ed041c553fc57b5f2c71"],["/categories/工具的使用/index.html","8f420353cdd05190146d979ae2f323f6"],["/categories/工具的使用/博客搭建/index.html","01cae15e342d503f28800fbffe5a6cb7"],["/categories/数据库/MongoDB/index.html","d69ace17576279e0e614284a12bc7e5c"],["/categories/数据库/MySQL/index.html","ae8613f3f80c2092a0d10b5d85f79c10"],["/categories/数据库/MySQL/page/2/index.html","2488f03543c94c63114ff38d132d4f8e"],["/categories/数据库/MySQL/page/3/index.html","cd68d4da2307b1282fa6aaf40df9c8cd"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","656aab1d669fd6ccb275da78ccdfbca1"],["/categories/数据库/ORM持久层框架/index.html","79da10d8d7e26aac7aa96d30e85c262e"],["/categories/数据库/index.html","044c76eb96bd29664a27c7693cf50a87"],["/categories/数据库/page/2/index.html","00fdcf9e804116f785a0163b958876a1"],["/categories/数据库/page/3/index.html","9f92e62bb2dfa0048ca81c58c9a24125"],["/categories/系统设计/DDD领域模型/index.html","ef8473fbf328f1e4add97e5079d2c811"],["/categories/系统设计/index.html","2a5cebf95e0ef8ac454c1d8036ab49a4"],["/categories/系统设计/page/2/index.html","f9c74f0f54a4e7bd875cbe27f745464c"],["/categories/系统设计/page/3/index.html","57062663122d5bfb707d9d75bab99efb"],["/categories/系统设计/page/4/index.html","33e4e1e57f5183ca039133ee40e81072"],["/categories/系统设计/分布式权限认证/index.html","64d3d6c2a0c48e09893ebfadc2ce05c2"],["/categories/系统设计/分布式系统/index.html","8707c7b946288e84efdb11a9e3cd0e48"],["/categories/系统设计/分布式系统/page/2/index.html","e472b54b0dd9c269c0efd64714dd1e84"],["/categories/系统设计/数据库优化/index.html","34630f89b25f8dc172e1b8e22736bb20"],["/categories/系统设计/设计模式/index.html","e554969b6c2dd453cb3ed31da415ca69"],["/categories/系统设计/设计模式/page/2/index.html","dd839a6ba0d9166551ed977b035f97c6"],["/categories/计算机基础/index.html","ba2da0300a5022e3d213b4bccc78ac15"],["/categories/计算机基础/page/2/index.html","cb09325c794a4927b9a198c59a737faa"],["/categories/计算机基础/page/3/index.html","32e8de2386922b80f854f94ecf396c27"],["/categories/计算机基础/page/4/index.html","b46e3ae3b556f2e345f5f5079c05dfc0"],["/categories/计算机基础/page/5/index.html","2b0f64b166b8757d1bd9b7bdbb0b69f7"],["/categories/计算机基础/page/6/index.html","676045550515944f6c66913f69c031ee"],["/categories/计算机基础/操作系统/index.html","271c5035343b322f0f6f0c28bf616991"],["/categories/计算机基础/数据结构与算法/index.html","bd8e61a93c7fa8abe3392b27d41f4119"],["/categories/计算机基础/数据结构与算法/page/2/index.html","b381af132400427b243a43e68619fb59"],["/categories/计算机基础/数据结构与算法/page/3/index.html","97ae563bfac7121aad477036e773ffea"],["/categories/计算机基础/数据结构与算法/page/4/index.html","2587d695e5820c923196b54aaeb487fc"],["/categories/计算机基础/数据结构与算法/page/5/index.html","96f290f01ba9355a0b3b9bf437772d3f"],["/categories/计算机基础/计算机网络/index.html","4a5b34e03a08e5980a14455fb1bd25c0"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","a22722e1c0d27effa70dcc944082e97f"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","fbd05a66d461cc3e6ca31926586ff2fe"],["/messageboard/index.html","14b897c5a8dfa323f71f3819a9762f9e"],["/page/10/index.html","bfcb3e8c9827fa2f441deba07fbae30b"],["/page/11/index.html","26631b8e8114b234941a1cfad8967a8c"],["/page/12/index.html","2dcb52cd696075c87f543633a0936a7b"],["/page/13/index.html","cdfa1a6c0190dcb3c3220b91c2361435"],["/page/14/index.html","6dc063ecdeaed71d4e63b0b59af3c901"],["/page/15/index.html","11ecf83971088102589a9beac2cc02a9"],["/page/16/index.html","fdd79f95056578d6ca5a77cc52982408"],["/page/17/index.html","d5bbfded8f8ea52c94500d6ab43a117f"],["/page/18/index.html","459ec50bd25591572c098457a88384f1"],["/page/19/index.html","8d1c4bdbe8c490fef7c2af4b35fcfc36"],["/page/2/index.html","05c34275609048009efa87a3025953c0"],["/page/20/index.html","7ee956534b29b005ae61707652b5948b"],["/page/21/index.html","71196d28db3d519d3ca9a08d6cc9e6ce"],["/page/22/index.html","38c3a0bff38fa299f2e91cddfaa8ca5f"],["/page/3/index.html","3066db8f30a3cff3df1b6c84ed899494"],["/page/4/index.html","9a8b7efd61cad4530d1807cbe1612734"],["/page/5/index.html","d96710c1b17ce6353aa93d5ad73d6715"],["/page/6/index.html","3efff81e5d0e10e248ad7b9f90cd9699"],["/page/7/index.html","143eaca876906748455b6701c197f2a5"],["/page/8/index.html","31ef3f249fee24a446778552123bdc19"],["/page/9/index.html","1eaf1321dbdd2fe9ed854abcff49b99d"],["/sw-register.js","4f51d2b1a153b0dad0977bce381af733"],["/tags/Ajax/index.html","7ef74d318a11d0de9a3114fead226154"],["/tags/Axios/index.html","db2e956f3ba69abfd394d35d5de144ac"],["/tags/BASE理论/index.html","942e35447835b5f862281531bd17c6c2"],["/tags/CAP定理/index.html","f34938924c01d6e4d51fa1de2e7362f3"],["/tags/CICD/index.html","472a6b0d94030e4e7a09154ae8986e8b"],["/tags/DDD领域模型/index.html","f5b4c0d828b91b3185e0914ad9c71ba4"],["/tags/Docker/index.html","4b92e5b2ab262eb9d24f3a53e76fe596"],["/tags/ELK/index.html","4f842ee1866d55576be30adb16ba1606"],["/tags/ElasticSearch/index.html","e86c5d8b637941bc2900f43ae68c4737"],["/tags/Git/index.html","0cf3aca361d25e44b34bce9bff8f9efb"],["/tags/H5/index.html","f085fc25386d0e6203baacc6f273788a"],["/tags/JVM/index.html","d634f5e4624adad3da65f08a1d54d409"],["/tags/JVM内存模型/index.html","9ef536af6002eba11948bc518fc383b1"],["/tags/JVM执行引擎/index.html","135832cdc29a790cb3eb40a88c866c52"],["/tags/JavaScript/index.html","3606dc1b7c0cc48c274f2d284c6a3b02"],["/tags/Java内存模型/index.html","933cbe288b6f9496269575f30e10aadf"],["/tags/Java进程线程/index.html","b629e60536896c773b22c6ad19744dd7"],["/tags/Kibana/index.html","2cb2552b7802ebf5f20c9dd0bfc21648"],["/tags/LeetCode/index.html","081d5ce235d13b455cab1a0a184f8f4e"],["/tags/LeetCode/page/2/index.html","6790148b5d53be23d9ec6fa6481e9ae6"],["/tags/LeetCode/page/3/index.html","07f0354f846c8696fe32a1706ea31d4a"],["/tags/Linux/index.html","6d1f94f534434afc6934deedd8c89fb9"],["/tags/Logstash/index.html","6601a36b682d07186f1facca0457338d"],["/tags/Mock/index.html","930930c9c294da2d53cdd51a3de97c87"],["/tags/MockMvc/index.html","d058b88c85b8b86f00a0889b34e1c8a4"],["/tags/MongoDB/index.html","21547ba10b9127efde141966421e098c"],["/tags/MySQL-事务/index.html","d91d57abbcb01e6bb8ce9beaaeb0162c"],["/tags/MySQL-数据类型/index.html","2bd08ce57d1dc7f75beda1ece7f3d018"],["/tags/MySQL-日志/index.html","e0da5dbd7aca3b28f60a637f64d182d2"],["/tags/MySQL-索引/index.html","f0f74cb89f07b360a6636bb2ac1c216b"],["/tags/MySQL-锁/index.html","bbefd609b2999cf4ebcf0b14301b6eff"],["/tags/MySQL/index.html","3f3bb8b70509fe317e061c17454cc7f3"],["/tags/MySQL/page/2/index.html","5995dde5486b1ecae8d7726002d1ad48"],["/tags/Mybatis/index.html","301646aefdea184aecaabec9cee29a02"],["/tags/MybatisPlus/index.html","4f7761c8a750e522fc13cd9c3de4c358"],["/tags/NIO/index.html","df8a8c28e86b5a7436b38adf3b6efcb5"],["/tags/Netty/index.html","d280dfcc73a0729ac80367d7dc98bcbd"],["/tags/Nginx/index.html","8e41d7a109bee6d0f85dd01a8f5a6514"],["/tags/Promise/index.html","6f3874faabde1575350f782e3addbd04"],["/tags/RabbitMQ/index.html","48270bb89aeb6c7efafb876f58bf1183"],["/tags/Redis/index.html","dd38424d5e226d39e4a4dfb5929604f4"],["/tags/Redis/page/2/index.html","e285c384066e13a78513077907d2b526"],["/tags/Redis/page/3/index.html","a6e10725eb32069565fec9d6184ffd8d"],["/tags/SSM/index.html","814de982af5013932ad19f2596d3f4d0"],["/tags/Spring-Security/index.html","2dee47750baa1a6a2f0bc8fb04f8613b"],["/tags/Spring/index.html","ee1061a3ee7473bd1bc6d9eceb97cda2"],["/tags/SpringBoot/index.html","f89083dbd661dc97a90d732f9b3b2dff"],["/tags/SpringCloud/index.html","a33f62431b409fe3c3f9c8eefe740570"],["/tags/SpringMVC/index.html","784257ba2e1fef7415013232a654861c"],["/tags/Swagger/index.html","272c17d07d67d57694dce3a870f16fe9"],["/tags/hexo/index.html","0ab9030e745bfd14552d7e523dd87a38"],["/tags/index.html","422948b73a09d0482fd23015737071ac"],["/tags/jQuery/index.html","47c7fc1fc2e980ff23f65e8f46c63071"],["/tags/java/index.html","72b9a9e339b5069808d96877bafe409a"],["/tags/markdown/index.html","ee76f562d840a8f9a3a1f1d463e70498"],["/tags/noSQL/index.html","7e615e96449b955a01abedb2e340d24f"],["/tags/typora/index.html","ff452e6f8a54f737ebf4380eebdf67c8"],["/tags/vue/index.html","9b2dad9463df94c3c0acb4d237483b40"],["/tags/享元模式/index.html","f16c1e95de3c5c090b271e9729cdca02"],["/tags/代理模式/index.html","2faac155200caaece5ad9fcb9b335f97"],["/tags/内存管理/index.html","a7472f424d09d34a28015d2048050d58"],["/tags/分布式/index.html","f0a8c5d4286fcaada9786e2b52db76fe"],["/tags/分布式一致性算法/index.html","787953db41fd80fd56915bd8f18fe3c6"],["/tags/分布式系统/index.html","59ffc4ba1133ed38a96a4b636b796288"],["/tags/分布式系统/page/2/index.html","daf6488b9065a4b84ca1f2efe14e2133"],["/tags/前端/index.html","51a96b45ddbef99825ea19c5872b3adb"],["/tags/前端/page/2/index.html","d838d09ada4ff38e475df2bc0d8c6bba"],["/tags/动态通知/index.html","61bbf1a6a686c5ed853a830efdd92064"],["/tags/博客/index.html","0708d5bbea9916008e7d17d19abc01a6"],["/tags/后端/index.html","dc6724ad07a887a4cf8eae0ea73dd099"],["/tags/外观模式/index.html","d5b0ba6ff6a1439d72a7562388a6a3a7"],["/tags/多级缓存架构/index.html","dee8b629e1e0b4d4fb4be0ac0a007b02"],["/tags/多线程设计模式/index.html","d4f04edebefb1dd9d314e82f9614b320"],["/tags/容器技术/index.html","c06aae2bf123c01a987c3c238da339bb"],["/tags/工厂方法/index.html","fea8e8af114ad2302b791f6b9082d7d9"],["/tags/开源协议/index.html","300e49365b1cb6a9918d1a64f56b4f37"],["/tags/异构同步/index.html","8d57c03136cff67f735cba380e49f240"],["/tags/微服务/index.html","4611419660a033c922713fcd848fddfe"],["/tags/抽象工厂/index.html","1f5ab4055f7472b2746488e37587ad14"],["/tags/持续集成持续部署/index.html","79cd4879c1d36b4724ecb027ed27bd27"],["/tags/接口幂等性/index.html","dce048a47edb9bb42a25ab67e9078d23"],["/tags/搜索引擎/index.html","ef37263b3603c0a0d51a1833674eec5d"],["/tags/操作系统/index.html","8e6fe6c152f99e0070f0cc2db0a09a44"],["/tags/数据库/index.html","514020d09dcb1596fbf5221c236077a5"],["/tags/数据库/page/2/index.html","685eb6753a0230bdabe99fa6edbd39e6"],["/tags/数据库/page/3/index.html","0d40f304096433d9002786881d9d47cc"],["/tags/数据结构与算法/index.html","e6a2a823b0a19cb65f36605418cbab55"],["/tags/数据结构与算法/page/2/index.html","c94a42b2122046ac1c533e40a4c379b1"],["/tags/文件操作/index.html","334d96b51760d7ad0f12e8f3f74c1c26"],["/tags/日志/index.html","1594e28d58ffc61e63db7d937748d905"],["/tags/服务器/index.html","1fc204245468c11075bb23c03e80232f"],["/tags/权限认证/index.html","3196b5728d87b08d4a7fe98cacd3bf3b"],["/tags/架构分层/index.html","c053a38b7b8891a9d9b4810d1099ea16"],["/tags/桥接模式/index.html","5f3fba329cd821fba5d7980e51892caa"],["/tags/模板方法模式/index.html","fcbe1075e728585a9415352725337edc"],["/tags/死锁/index.html","6d4991c6085be32b375d6ae3a23f228c"],["/tags/池化技术/index.html","87d3b582c79fe52565049b9f76a84128"],["/tags/消息队列/index.html","e006eee2669328a5eeaadcce50f50066"],["/tags/版本控制/index.html","3ab21841347df9151a6a8936e4ddbc39"],["/tags/策略模式/index.html","814f86bfdf5b51c1f51b6d2142e4beef"],["/tags/简单工厂/index.html","84c78e113695f5ea4717d488369e790b"],["/tags/算法/index.html","4ba2c0e92c9d1ad5e8fa4b81badc7b8f"],["/tags/线程活跃性问题/index.html","97f8348376d498f0b8c7eddcfb48c069"],["/tags/组件化/index.html","e597e1d4b012513674802d1b97cad4bd"],["/tags/经典限流算法/index.html","0c48c1fc69d4cce4401023ecc3403875"],["/tags/缓存/index.html","245fc18c06565da506645ad50ae616a6"],["/tags/缓存/page/2/index.html","bb2bf41774f41c4843ad20c9725f188e"],["/tags/缓存/page/3/index.html","a0f310d9e4a4552e76017890b84666c8"],["/tags/观察者模式/index.html","820f3320e18e9029f9c1b0a8ad0b0dc1"],["/tags/计算机网络/index.html","a7438fbfe2f1f597ee97a45612a32fee"],["/tags/设计模式/index.html","893f9716880bf9398739ee4488bf957a"],["/tags/设计模式/page/2/index.html","706adc690b3f441406ba3c9641675720"],["/tags/设计目标/index.html","1cb446714f04777def8bab7d1cc0e90d"],["/tags/资源共享问题/index.html","576530856fb8609929234a006e707a14"],["/tags/进程管理/index.html","ba1046c8826b1a3c3c6ccc4e096edcef"],["/tags/适配器模式/index.html","bc2505ca677e2c19e82b393a4d9bee6a"],["/tags/通用设计方法/index.html","e63829237b1cab20d544e71c14e645ca"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
