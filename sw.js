/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","c8cfcc94b8ee401b0b5187b81aabb7c1"],["/2021/02/22/工具的使用/博客的搭建/index.html","1d2237e3568fed8887bbdf6339be90f6"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","de4218a9d62ed2e064382437288bead3"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","5d9a192b2bbd8e597a32ffd49daa8958"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","db5a9248950ec81e21f6a3093404584f"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","b0f61ba274f373b505b96037e0614a25"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","9de2fcdd91598f4a5528e5b3816abb85"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","b298c2d1171ae12ccd008423f2839bdc"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","e1f0fec9b224fb26f08a7e9c0a0354b8"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","8e26830940e45c9d05ad23b82e74ef1a"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","9d8c3dacc0607d4135275d0e6f13f711"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","13fb2a4c976cca9d2a75bee3819a6298"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","326b94f70cb34fef80423657336b193c"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","94232485b0489dc5bb9f43612c8d40f7"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","c85343d9718a9ed0a34dac3413c4191a"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","45db5d030a8d225e95f2a8d8338fccce"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","96006b22dfe0e60b18139b36b6959ccc"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","4c6365f43b90f888e8f8664839d624c0"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","c4d596416277ec23c4a5014f720ce46d"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","3a1c52c7f58f8bd3615c988f431a9362"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","c87de2d54ba7064e09282deeec6475d4"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","7b858ae679b8c84a761554fa5629fc84"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","eda5e9b679354c2dce950d931c2c9bd7"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","e89860bea83f71e785422ed53d37d4ec"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","6ee8ea193c699f300f604ff4f307274d"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","5282be322a324dc9e38b2d9324c9d374"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","23dbca0e1a00b4a2eae85cd30b441645"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","28f012a49610d3d1b283b5397d9f0b78"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","85eeb21c154dbe25f0ee19adb27932bb"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","32d2b30bd4b660d4f68bfc43e0622a31"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","6718cc5e9db534f1f0614a1c0e25430a"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","a0cc828ae302648de4d1deabdd90d6e2"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","e875d7b0d3f880222d43ce8f1f805978"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","e3cb27d1c5670859ea2030feb99ade77"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","efe7ecadb9963a0a9ee716741c65abed"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","e68f87e4c4d3a730759a4f36df3ba664"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","a86196934424f4e2e3cc97ff5c944680"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","df9e59c9c79be62843f3c001976be10b"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","feaa85fc2e7fe83f83d4b68a348509dc"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","49a58e7b901725909ca1dc9caa35b3fe"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","78d2716bb04aaea69760b9311ba2d821"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","cf2e2d11aa5dabc4e2a9ef434ee4a4de"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","8535d24c43d88a34946b4540b59a6331"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","f6f0cbc0902f80939f4b71fb4302c36d"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","80db28d87f9bee0037fc3031013453f1"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","547ca4b9a144d17792e9b30693ae5780"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","6d8cfd3b9931a2bbb787fd066dd77099"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","94b2caee20c3927310912f8cbbd0270b"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","c6b437ad250a148b871013820a6c1b0f"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","927b2e06fc2188a41004e1a2ce81963b"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","daedcbe5b4bc3340a3b04ac687089019"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","4b27f89e6a188c920ff59e616794a8f6"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","005d18e15083da08d865be2b09be51a8"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","57f7770ae7b7cfcb060d5a7f263a678b"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","8f94fea13b4c905482e89e9a74f1d847"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","89e149005b3e381b6b1831551fcf6e44"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","53d6d90240e1d14c0197a6b50be1f064"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","f01a6cde3b1ffc124a2894282ecc850b"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","ebabdd7886df19a198b590fe638cfbd1"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","a96076c2f8dac6dfc8e1d140403d9515"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","4ad522584d053a705e3133a331ec9f52"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","2b6caeb7fd5e493f11b5e2873c71710b"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","8eba2dfcffcbf0b0c2cbc241201afbb7"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","1fd132bcdb3a6a40b84b8e119b6b2d68"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","e50489590a70c727919db0bea4eafd09"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","8339747056a989175b37509274c0ec90"],["/2022/08/17/前端/jQuery/index.html","91df66a20f1aaefc2a91365e84434a23"],["/2022/08/19/前端/JavaScript/index.html","5738de0cb3078ef6f8f893b985383b69"],["/2022/08/22/前端/Ajax/index.html","dfcb0fe3043834fc0347d204fe0d369d"],["/2022/08/23/前端/Promise/index.html","224683b04bd70547dcc1b049e7a3bfef"],["/2022/08/24/前端/Axios/index.html","dc951bda202d14878d6de6fd6f612de9"],["/2022/08/25/前端/H5本地存储/index.html","e6940f1ca871dfd093d4241c77f6ac1f"],["/2022/08/26/前端/mock/index.html","a324d12e5b3ff3441e76631615124164"],["/2022/08/31/前端/vue/VueJs/index.html","33d59e41b6945e7fa23542ed9aed541c"],["/2022/09/01/前端/vue/vue组件化/index.html","4a892d2dccad043be6e0d5f11a389d77"],["/2022/09/04/前端/vue/VueCLI/index.html","185c4a038e694a90f8e8da4917d7c367"],["/2022/09/07/前端/vue/vue实现动画/index.html","046067c2d16d0261309a21369c7f6fe3"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","76779ad79f7a492b73fdbcfbaca3f20c"],["/2022/09/10/前端/vue/Vue异步请求/index.html","dbefb4cc85ebed2e471de4a5676a45cb"],["/2022/09/11/前端/vue/vue-Router/index.html","b43781821eeb2bf087a8eacb66c79e23"],["/2022/09/13/前端/vue/Vuex/index.html","c2573ebb51d5ef9d456741cb1e770b8b"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","2b6f00448020e80c92f76ed5dc052a25"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","475ee8f059d30a6db7744dbef37abed5"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","e72429b51853f14c98d19fc77addacc2"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","57fc49f13515123bf1de48ed5da512e9"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","f27e713f1cbc8dae9ca678ea6a168206"],["/2022/09/28/DevOps/Linux/Linux/index.html","7bd3eae1b810b778a3a682f913d87a03"],["/2022/10/02/中间件/Redis/redis基础/index.html","08af8a89f61d29f003378e1a8b1986da"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","c3b9e8cc9fc2ab54313ea5657df9715e"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","81c6730be022121d167457d40bc8ae39"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","fedafb303929493a35fb8aa0d241020e"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","87977094a5834d857ea144e35087eed4"],["/2022/10/17/中间件/Redis/Redis集群/index.html","e3b4a6b19c4942d5a04ade0b3adc74a7"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","2bf0a2066f72481eab26abeddc7a7cdb"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","2f16824f8211a566e78ca5995a8cae90"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","4fd0ba3cd4bd6321a2eb72de9c97432b"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","ec2fcc60354da5fa941d80c5a6035ae9"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","454c778e243dfb5f164b70456cd1e1e9"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","5733d29f0688019f0fa9256518065c71"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","8264130547c59aeb0b5e6fa653a1bcf0"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","b48a09eeeea70fb86fdf330208442e0d"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","9062952972925f34d98d969d8ec33edb"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","fdb3cd07dfd307eb3fc3b49adb7ebd81"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","994a3e3d932715134aaecef32cc58677"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","ada897753f908b5db77fcaf9401dde91"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","7f26b2b95b840cd77cc93692b893a14d"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","4154aa554ee1468c5f328b0c46c5e15f"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","fc76e0083a90cf6f603d5820a6665d73"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","f1ede85db607dbc23e08cc62fff9d554"],["/2023/03/10/DevOps/CICD/CICD/index.html","8710582b45e7498a4ececd61a30197f1"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","46516c004a6d986f4e04d922c69003a0"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","515761466991db621278c3807aefc1a6"],["/2023/03/13/Java/NIO/NIO/index.html","58827ac9ec7d3fcd19e32c700c800b80"],["/2023/03/14/中间件/Netty/Netty/index.html","d06e486f2cea40282a5337b768c71286"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","eee426acae608e3426648fcd5360899b"],["/2023/03/17/系统设计/分布式系统认证/index.html","2fdeb015eb4ccecd6ede85a993cc00f3"],["/2023/03/19/Java/JVM/JVM概述/index.html","d4c725b52c99e13b8ac7393a3b5a5cd4"],["/2023/03/23/Java/JVM/类的加载过程/index.html","8f058a7fadb9baf17cc2cf09ada4b519"],["/2023/03/28/Java/JVM/对象的实例化/index.html","8e35ffe5a729dea5f7d68cda7ba51a7f"],["/2023/04/01/Java/JVM/运行时数据区/index.html","9260bc7817e171e2fec27ec9e8bde3b5"],["/2023/04/04/Java/JVM/执行引擎/index.html","cba7d3840b8e3db8311e28a032089d55"],["/2023/04/06/Java/JVM/对象引用/index.html","d7182c4130dff1a947acb4de39e39feb"],["/2023/04/09/Java/JVM/垃圾回收/index.html","2d1b86e380a3068a459d5495e9031ff9"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","67a506327bb8a955fc750bf27309332b"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","5a3e506ab1080b74aa8a75ceece0e3a4"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","92c5caf970fbafb198e6cb2117097260"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","73c6c67c929fc24609b9ad793060ca71"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","c3b1966d1a4757a677bc76ebe6794be5"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","b33f15863960021008f79f988a1dd305"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","b9bfafad34222bcb18f3f9364a70fb69"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","97c79c5e155d635e7685252ea11fead6"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","7df8c6df9d287c1b2b642245598ef535"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","6bec307d395ce3f39bdfbebf1d242efb"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","2c37e39b5be4d25f01786150975b4b1d"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","1e8b7fdcf944591eedf066417a5b6360"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","db2d5ce4328c48acbf8e327a62134da9"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","44ff3c1a67df77564da47a9a5baf6f1f"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","bd41f4bb4d3bb6f0060a575aba79311a"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","5e0d0ec3de879d93cf11bf263fdeba35"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","cc696140ccdd34b38fdb5f21df6ef508"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","a059ab5364a4d736bb0106c2e6953893"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","388f8cdc373c55091beacb53a0cedefb"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","7440d6a72d595b561d444e31a931aae0"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","21b1c43d684dbb4bfb89f4b7365f5b27"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","87e7ad655b0ea0133afa02c702753833"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","e41b6f8df59816dee5a487bcf3cf4701"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","7cf0af15e202ff653f36da8fb1fef57e"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","3bf01f44bb62d6debf754ae23aa2e877"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","f7e5fb497d9e5d2156cea749bee204c1"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","e9e6a6e5033e1daa70199ea2f0d1276d"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","f984d8e77a5566c71f403472d4458d33"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","9e06a7610320e03dd63ca34f45624cc9"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","22d706b3b233f5e31c945d1e63e247ef"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","702c29d380630ecce27ec9e50cdb2bf9"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","17fd04e2e208319af7b93dc79873daa5"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","3c327456ab43c3657f7f480182bcd20d"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","3fa767b143a26a7d4003efc6587b566f"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","a01ecab7613a0ae4c394f536f05add49"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","afd69962a40576ee77d12f65a222b22d"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","2be5d693b96afbe81736cf4ac5efbeba"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","cfe02efa14587cb7fce859c80e74c91c"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","f4cfda7d90e6e6483546aeb4bc7e94f8"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","8f6f176a135acf6f6bb0d96e905dfa50"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","dfb5762605f4e6219dae5db0f34483b3"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","37ec5267bb6652eaad68f7dd52d8d927"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","e038404f846d07f62ee8451e3cb0e571"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","68542f62d7d8253929261343e3e7d986"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","eb965fae14514b63cd7f1b018e20d945"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","aebd640a76da8e29b14b65e7706a1c5b"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","b4af01a46be754fb262c4e815750d1bb"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","1c5468fbeab940fe29fa08ad6bd3b514"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","37a7f3e491dffa0c245ca7c814c46270"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","348b99bb0d691d85d751bf0853921146"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","58e44097cb2ec95082358bce4cfe70b0"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","f283ce32de8e9c8d258f999cbc9e5164"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","3ac2d74ddb27397e58f6b6ae2b80ed01"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","473cc2ecf3366a0759ab39008e585d0b"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","ab7c9c5ae72551b0e5b9857068364adb"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","ac665089df23144f0d89344ef5d1dc46"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","b167074b3ae027c8fd2937143c16ba35"],["/2023/09/04/中间件/Redis/Redis事务/index.html","25b160120d245bca68194b9252fc1234"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","f8c7b3a8662143e071ef46bb8baf9d96"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","727a47fdc752037476e6f0e935bd4ef0"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","7d57786799a601e63f1ed47656d9d9f3"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","b5385fea70797572d02531d18d5d4e98"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","1c91199b65312c2f08ea8151bf8e9c18"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","f6d843c9777d510eb9a45f5244129854"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","fb2e0b4cab98c4ef7c8e51c2f8a43d00"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","2a8d076fb1d25b215cef55ba7b6772df"],["/2023/09/22/Java/NIO/零拷贝/index.html","30a914b433a1eaf148c9881c2ebf547c"],["/2023/09/24/系统设计/JWT认证/index.html","df82722b93f43bc7ab7715964da6cefd"],["/2023/09/26/Java/NIO/Reactor模式/index.html","e9556a5d8a61002b21c67aef81e780c3"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","d84a885e1d758275fe87a7dd57e8cdd4"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","df2ce805358f4f8d7bdfc2cbd4b7552c"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","b2361adc4c78c73f77694a3f9c856c13"],["/2023/10/09/Java/并发编程/共享问题/index.html","db5c48586d964440cd0a2be0da1f18b4"],["/2023/10/11/Java内存模型/index.html","47740e4481f37ddc5f4226276910fabb"],["/404.html","4f1562af062325a951f7f077e90d7494"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","5ed3104bee07fb691c75b7d42dd1250f"],["/archives/2021/02/index.html","0b21f8f91734469bcc5c245ad1d6c14d"],["/archives/2021/03/index.html","94f9eb000a919ece6bf3881d8059346c"],["/archives/2021/03/page/2/index.html","e18ef60c72e076288869d9540eb69c82"],["/archives/2021/03/page/3/index.html","ee5fef291e372934bdd8c8975e2045fc"],["/archives/2021/04/index.html","dcf758c88c5ffcd6da118ca9d4881e40"],["/archives/2021/04/page/2/index.html","51a6614b7032b86d3be787c82440909d"],["/archives/2021/05/index.html","0074c0f4f8b5ee09ceadaac29d20cb85"],["/archives/2021/index.html","7ceaa00b622f5b8041646b18c01ce566"],["/archives/2021/page/2/index.html","d1d279e2c1064debddebc281201b4f33"],["/archives/2021/page/3/index.html","20a2fea9d454fc9b49c5e89406d8e91d"],["/archives/2021/page/4/index.html","20ec8fc3386fa3bc358d0919e639d1d4"],["/archives/2021/page/5/index.html","1ac2ae1f19d8af863b7849bf96498be9"],["/archives/2021/page/6/index.html","5e6f6b9f7d9fe428d85b6817c6523f6d"],["/archives/2021/page/7/index.html","d6d5c7231b6cf5665b46389c455a5880"],["/archives/2022/01/index.html","504baad6af655d8f990506c02ffb8e53"],["/archives/2022/04/index.html","b8f6d3c4ddc99fc44222fe583e5ef917"],["/archives/2022/08/index.html","ce9b9d315c89543e72bb8b644ff9ce1c"],["/archives/2022/09/index.html","e55363b9ea4914be1aca26451c64157c"],["/archives/2022/09/page/2/index.html","04e13ca317db5cb4306bf7495f02d073"],["/archives/2022/10/index.html","8963cb74645b7592291c1b0f873347f4"],["/archives/2022/11/index.html","4370eb9900ed1ae3be787b3f01b2bb3c"],["/archives/2022/12/index.html","7ec212fff050ef22840b901d9b994ded"],["/archives/2022/index.html","cfe1833cac9718e1f17c53658e10fb36"],["/archives/2022/page/2/index.html","9d2d2e3b27df725871d9097e8f88a51c"],["/archives/2022/page/3/index.html","9fa737179dc15d4ad5976eb21042169d"],["/archives/2022/page/4/index.html","e17cb81aff515929227a5cbeeb76018a"],["/archives/2022/page/5/index.html","8fc14a15c6700de5ffa9cee0679318a9"],["/archives/2023/01/index.html","309fe218e3ade8007185755b8a2371b3"],["/archives/2023/02/index.html","7289671817bc83e180958fff4fba3163"],["/archives/2023/03/index.html","8f8aba537de08934be4c7b3bb2cca691"],["/archives/2023/04/index.html","059a0762f8a24c9cf849dee71b0f755c"],["/archives/2023/04/page/2/index.html","d91d0cb044f22ca6c4458edf45465ab5"],["/archives/2023/05/index.html","c0c759c60da7618b580a51def316773f"],["/archives/2023/06/index.html","87b628d361c96d5ee116daa5eefcd9ec"],["/archives/2023/06/page/2/index.html","8396df9ca379dd3f7052da20d134046f"],["/archives/2023/07/index.html","798147f2d070cbf30f812d4afc862b61"],["/archives/2023/07/page/2/index.html","00222c4d39f1ddbb58f53f0fbc4496de"],["/archives/2023/08/index.html","d40a97743de5def9e0a3ae2dce083a81"],["/archives/2023/08/page/2/index.html","dbd5cda359dcd9e54111dcaa376448a8"],["/archives/2023/09/index.html","67253e3c333f8d8a6a6e41277e4b7218"],["/archives/2023/09/page/2/index.html","563d3ae865207dcb12125237222cfc29"],["/archives/2023/10/index.html","b067521f799ed2e3a7bcfb885deb96cc"],["/archives/2023/index.html","45292e97a94e778bc077c7a2fcdf3cf4"],["/archives/2023/page/10/index.html","682d6ddeab9ed9e8fed2bcfa0ef432b2"],["/archives/2023/page/2/index.html","9aa075280309ad84fd44bd6853245cb2"],["/archives/2023/page/3/index.html","8e361c0173edb4a7ec5eff81a9ab70da"],["/archives/2023/page/4/index.html","df97c4fb5d9e3f931cfae3f1a512bcaa"],["/archives/2023/page/5/index.html","8b77db9fee88041c7a65da955ebddc95"],["/archives/2023/page/6/index.html","56cef14a94b81c6c8103576d441b0827"],["/archives/2023/page/7/index.html","55cd77d22de26f7aa0d6afd17a81fca4"],["/archives/2023/page/8/index.html","9220f220c87bde5d50886f4fcd33f1a8"],["/archives/2023/page/9/index.html","0d3550ccfab7e715ac30271970264a56"],["/archives/index.html","9e44f74d09427ab769b334346b4b4562"],["/archives/page/10/index.html","36ddaed662d206550757f6c22574d155"],["/archives/page/11/index.html","6a91be0fbd9458f5c66953b84fa6f8e4"],["/archives/page/12/index.html","92d1678767e3ac85c2d1c3552896aa5b"],["/archives/page/13/index.html","0acde6cf86c493fcc0fe3146b97f7dd0"],["/archives/page/14/index.html","b1b97da10eebd6858ce332c3fa430e5f"],["/archives/page/15/index.html","a108561e110e2081604f5f19d9dd5fc7"],["/archives/page/16/index.html","5cd323072895e38b34aa5320f591750b"],["/archives/page/17/index.html","651be81c233e7bbd3626db611aeb8a5b"],["/archives/page/18/index.html","bb21ffcf1d16ae208e87b7c5af8a2699"],["/archives/page/19/index.html","17765ad5b59c4f5fb14c8ec837176ab6"],["/archives/page/2/index.html","ccf4dab03df18ef9edb87101b7023742"],["/archives/page/20/index.html","5858d561fc475d868e5fd08d564ce4a0"],["/archives/page/3/index.html","7e8a174232abb5f58f1437471cef871b"],["/archives/page/4/index.html","25a1de11b9b3ef1655fca9089b189802"],["/archives/page/5/index.html","c039e0c8c9c738785bbe3e080b48908a"],["/archives/page/6/index.html","68f3d7d75b57a58acec551037588eff9"],["/archives/page/7/index.html","bc267acea47952743b44f7f31b57da32"],["/archives/page/8/index.html","b12c7b27ca1d7464d7435c5a42569c5c"],["/archives/page/9/index.html","c0825fc96d522d13a28ba69fd2084acd"],["/categories/Devops/CICD/index.html","c89babd2e4b024e2a383545ca5674f19"],["/categories/Devops/Linux/index.html","a7da58c058e367e20a87fa1b1a2f0996"],["/categories/Devops/index.html","09a19eeba2e12c42e90b9cc81a7c5ffd"],["/categories/Java/JVM/index.html","f3c7495f4571bacdc1c31babae5ba44a"],["/categories/Java/Java基础/index.html","027f9685860efd125c8b43a7dee9c3b3"],["/categories/Java/NIO/index.html","a0aaed047cd327859e4de7f15e0a86bb"],["/categories/Java/NIO/原生NIO/index.html","aacb1860288438600e896c42116b8e2e"],["/categories/Java/NIO/文件操作工具类/index.html","ebca9b42dcc4ed2a691cd85b072e3518"],["/categories/Java/index.html","25f9be638c42838325c195212497c276"],["/categories/Java/page/2/index.html","c5256d223ca39d7ead0e81d4047584b7"],["/categories/Java/并发编程/index.html","5003b951faec57432ad48314a3ccf5b9"],["/categories/Spring全家桶/Spring-Security/index.html","f7be0f59e44427d730c3f4f602bbf613"],["/categories/Spring全家桶/Spring/index.html","c36bafdb88eef35f25282cc77fd17f49"],["/categories/Spring全家桶/SpringBoot/index.html","e5f6b6618c8e73bec583623702d66f8d"],["/categories/Spring全家桶/SpringCloud/index.html","1a1a7fb8e0557bd42c19bb09faed1639"],["/categories/Spring全家桶/SpringMVC/index.html","03ed536c98b45280aa07d5c297c3215e"],["/categories/Spring全家桶/index.html","505a1416c7b5dbb35fbe3848b8a5f103"],["/categories/Spring全家桶/page/2/index.html","f3191aec5e373c2b5119369d58e2f996"],["/categories/index.html","ea2bc3410a6f5b4377ee3bb2ca1e85ca"],["/categories/中间件/ElasticSearch/index.html","1500c42840bb04fd950596fc099a2d1c"],["/categories/中间件/Netty/index.html","cb5a228c39238ab3d82f265b2f8eaf74"],["/categories/中间件/Redis/index.html","f1f3a737a316a5759531bd0fa77b030f"],["/categories/中间件/Redis/page/2/index.html","c668a420d3b3026a202f428cff4788d9"],["/categories/中间件/Redis/page/3/index.html","0c5b4bbb7a864d5042b4c84b15ac204c"],["/categories/中间件/index.html","bc88464fe20cc239aad6681bd2a0931b"],["/categories/中间件/page/2/index.html","c53320b97f620e7f4f796f90cb0d50e0"],["/categories/中间件/page/3/index.html","4d114adb0a6933b46be94ccb9d2d3b41"],["/categories/中间件/page/4/index.html","00feb869f26f7401e5d51bc765015498"],["/categories/中间件/消息队列/RabbitMQ/index.html","975bfce5ceb7a9c91b0ec28a2dfd8293"],["/categories/中间件/消息队列/index.html","3172d7db01ae8b846da7aa9f56723016"],["/categories/前端/Mock/index.html","087ba8a0fff7d60d6236c77c75f5f23b"],["/categories/前端/Promise/index.html","5235d548757686e632dfc566840c4160"],["/categories/前端/Vue/index.html","5c05a892459862001f1633d2d3c0eabd"],["/categories/前端/index.html","d0e761abd50e7f1c3a70713f7ddd8e51"],["/categories/前端/jQuery/index.html","d2977835cecb51f1308c4da5a05a6ca3"],["/categories/前端/page/2/index.html","0783745bae69c2b956980510e9414672"],["/categories/前端/原生基础/index.html","82df8ff7564a83ccd4eae97257513af2"],["/categories/前端/异步通信/index.html","b4b4cdec164d7ae69b5abbee97b44517"],["/categories/工具使用/Git/index.html","1c425955bf17d9739a256f35b54e6458"],["/categories/工具使用/index.html","9a022547b839dd0ac57a3acaa06c33ff"],["/categories/工具使用/markdown/index.html","d82cde0e8cf568a506d497528f43c598"],["/categories/工具的使用/Docker/index.html","de285764c275b4951286f72705f02406"],["/categories/工具的使用/Nginx/index.html","aee4684b48a96b9809bf0652cb9c1916"],["/categories/工具的使用/Swagger/index.html","650e22aba4fea8fe87233e6f8b3e10ad"],["/categories/工具的使用/index.html","f8ae99675b8a4d7700fc86e200c5c51b"],["/categories/工具的使用/博客搭建/index.html","250e606c0c6c026a763193d910516a1c"],["/categories/数据库/MongoDB/index.html","4612eb8c2ceb361d5e7f472746e268b3"],["/categories/数据库/MySQL/index.html","9d1694029f525ed5ee7ece759faa9f3a"],["/categories/数据库/MySQL/page/2/index.html","72063a96cf3d22af11b63af1ad1d3a43"],["/categories/数据库/MySQL/page/3/index.html","2d917d78735ee46c051dfd462e7188b5"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","ee47bb9231e2e74ab322a22df656c358"],["/categories/数据库/ORM持久层框架/index.html","8625dfd1a96a4e804bd8485d9276e345"],["/categories/数据库/index.html","aff1e7ac349ec549c4d6176b87a790a4"],["/categories/数据库/page/2/index.html","d53b0b262fc4a2f1758e75662f6980e0"],["/categories/数据库/page/3/index.html","abf10467511a0fc69b2d50fcab65b4dd"],["/categories/系统设计/DDD领域模型/index.html","cdba66052f003ede264a77e6961e104e"],["/categories/系统设计/index.html","7944bf221a469aa4dcaf55efadbfcb19"],["/categories/系统设计/page/2/index.html","019032ce9cf54bf966babefbfb0a410b"],["/categories/系统设计/分布式权限认证/index.html","ee5ac7fb30b3ce78051079a36dd652f1"],["/categories/系统设计/设计模式/index.html","c550ba16ded4212bdc8374fa67a60fc8"],["/categories/系统设计/设计模式/page/2/index.html","84fa48b9a466c9f4a493a447b7e65a5a"],["/categories/计算机基础/index.html","2c9bd755cba12e5c2e4da7b8c16ca12f"],["/categories/计算机基础/page/2/index.html","e869ad1def14ec57fcdd699f80aa959b"],["/categories/计算机基础/page/3/index.html","f804678ce48e54dfc554cf12379787bc"],["/categories/计算机基础/page/4/index.html","2e35398643b311eb46ab80d46681d4f4"],["/categories/计算机基础/page/5/index.html","b24cde09a6c67a13d63b8e6dec431a50"],["/categories/计算机基础/page/6/index.html","287ba8944c4715f24696cb79b7edb60c"],["/categories/计算机基础/操作系统/index.html","a7cbb0981bd77a718df9eb936742f112"],["/categories/计算机基础/数据结构与算法/index.html","2920c1feaa82397f6b89796982644efd"],["/categories/计算机基础/数据结构与算法/page/2/index.html","0fda5ab64fd3395d1f75d3e7db4182ba"],["/categories/计算机基础/数据结构与算法/page/3/index.html","b25b67da143ecf0d38a9e955ce8986e4"],["/categories/计算机基础/数据结构与算法/page/4/index.html","d17271c06e15048780bf4e32e80beaa0"],["/categories/计算机基础/数据结构与算法/page/5/index.html","7e3c6a2f6fb1894a685c842b6c4e7a89"],["/categories/计算机基础/计算机网络/index.html","6f79ecff9f4d03efc8a5f76d9e1dd579"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","fa2dd2ab3197b93a2a559ee2861f842a"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","9cac27d23068b68b5c92afc25138f9ce"],["/messageboard/index.html","6fa0de7ee3dc9108407143624a10b3ac"],["/page/10/index.html","14126425b9abe15e548eca3b7025329a"],["/page/11/index.html","a83caa9ccbebb106a93e7373ed01776f"],["/page/12/index.html","52604dac85dd93e1de544954958c7444"],["/page/13/index.html","79190705e80aca37f1335f2215820aba"],["/page/14/index.html","c56bc8f58f2637abc321a3aae234d371"],["/page/15/index.html","f0e8d6b9188d94c020795e388edb8436"],["/page/16/index.html","71dfb730a9b764dcc642cf7760e0f443"],["/page/17/index.html","656a4eea35d546179531f8dc5ba927eb"],["/page/18/index.html","f7e2da30f90cd785fca1d82565de0d1c"],["/page/19/index.html","85e7c5bb3c58388d9860e597c82f72b7"],["/page/2/index.html","598bfb27b99f20b22eec8b46754b311a"],["/page/20/index.html","fdc9e4ecad13446d3abd5397b1c0d527"],["/page/3/index.html","b0f7252811061231b11c6dc62f9ba1c4"],["/page/4/index.html","5632c817a68f333768c4a9725c599e2a"],["/page/5/index.html","41927acc47d5427fb2350760004285e4"],["/page/6/index.html","086052c10f40469c9fc961f6aa50a7e8"],["/page/7/index.html","6fe613af8403e80fd7f4df30ed1fc52b"],["/page/8/index.html","16eaf0a6354fe186b5ae7489275c7273"],["/page/9/index.html","be54ae0fc483041224bda474afb67c38"],["/sw-register.js","c0167696de624107c56314b16fdb5088"],["/tags/Ajax/index.html","a8ed1b0675102f3bac1affa48ee24677"],["/tags/Axios/index.html","bf5a08b8bbcf5680c02a69ab6de1b790"],["/tags/CICD/index.html","0c301ce619aa8186486ec118880acd8a"],["/tags/DDD领域模型/index.html","14bcadb3557d8fb8acc8f1d0abb20c1f"],["/tags/Docker/index.html","cc78b8ac23c5381d7ebb1e3e732feb4e"],["/tags/ELK/index.html","80238664951b877bff8dd116ad888e0c"],["/tags/ElasticSearch/index.html","e286fca849a4d61704491d34612a9b2f"],["/tags/Git/index.html","98df2e75ba5cf19b76d522389ea13f2f"],["/tags/H5/index.html","43f1d859b33a4b02f2e9c68af50b1dfa"],["/tags/JVM/index.html","ec32e5795113a46e6ed397670f2b96b2"],["/tags/JVM内存模型/index.html","2ff1ca5f7a6c93cd9554586478a3edda"],["/tags/JVM执行引擎/index.html","be0a4c8e42c49561c75351cf5709b700"],["/tags/JavaScript/index.html","c7548f89f545bc24a1af11ae79b9ed78"],["/tags/Java内存模型/index.html","bf2f3ff7ca196efd29b1dca8110ba63a"],["/tags/Java进程线程/index.html","99b6ba466d5de1aec31dcfe6dbf2e73b"],["/tags/Kibana/index.html","68f80371a295c96559d85f5103e44e23"],["/tags/LeetCode/index.html","b5e7e682b520c6affbdd3e47769e7d1c"],["/tags/LeetCode/page/2/index.html","dfb893523c3b2612220983d1ffad16a4"],["/tags/LeetCode/page/3/index.html","78e4155e7711eb69ee95879399b5a800"],["/tags/Linux/index.html","837c82ad7b2a776db8de1e74a64d9a3b"],["/tags/Logstash/index.html","4e5cbab02e4814cc7b99b08636e3f9c0"],["/tags/Mock/index.html","51931a4e8c88f8b818828675f635fb14"],["/tags/MongoDB/index.html","e219d8398be0c2d20ab917e928f19b4f"],["/tags/MySQL-事务/index.html","8a09fc089b7e3f7b15a0448d804b30a5"],["/tags/MySQL-数据类型/index.html","9b64e1cddde48a03389353b457cde53c"],["/tags/MySQL-日志/index.html","db853e62b932a01bae8295f475ecc807"],["/tags/MySQL-索引/index.html","6788118d9eedf1e85a7db5f174615041"],["/tags/MySQL-锁/index.html","5aa3c8d1ed10b71a7947bbf588dd5545"],["/tags/MySQL/index.html","53d8ebdec51fa5d99075d1913522c7c4"],["/tags/MySQL/page/2/index.html","a863f99953ec222f82517c31a078961b"],["/tags/Mybatis/index.html","6ef7562eb213e46a48d56c272470f11e"],["/tags/MybatisPlus/index.html","565d5fd0447cfe9b7430cd5a0964433b"],["/tags/NIO/index.html","a1dd366ca11f067e08a0e8bdcb366a37"],["/tags/Netty/index.html","5943edf73773e5550f265298b9de01ac"],["/tags/Nginx/index.html","a8ba082dadd85f445b574e78b79649a1"],["/tags/Promise/index.html","9392b4e00c9bb5311c48074a2de09f41"],["/tags/RabbitMQ/index.html","821f60898e67eda269ddf4e29b8ea6fd"],["/tags/Redis/index.html","ca7b7b9816983001030c9e0e53e607dd"],["/tags/Redis/page/2/index.html","54a4871268a5c9053e77c738cc993774"],["/tags/Redis/page/3/index.html","931da735a9fc510ce8291d30b9f0d562"],["/tags/SSM/index.html","2433dc58ff3e9a3236de8cc6da8def16"],["/tags/Spring-Security/index.html","bc22409acd2bf9091dbb4aedefc901da"],["/tags/Spring/index.html","491b33852656ab733f7b1642ea1610c6"],["/tags/SpringBoot/index.html","2211a296ba5be9451151a36ffad64578"],["/tags/SpringCloud/index.html","e2b196bd669a8fd2b70b38d03c08c533"],["/tags/SpringMVC/index.html","6cb359da9ca7c8ce07366588f3bde677"],["/tags/Swagger/index.html","6050c2ef0c396862d36d52d801f25d56"],["/tags/hexo/index.html","a258989a0810ba596c60a67200f3d315"],["/tags/index.html","d13ad282936a797a64eb795b4f2c9b2a"],["/tags/jQuery/index.html","4562db3bfc56696053a987ad1ba39991"],["/tags/java/index.html","f6e50705a19d6313a8ae955a77f2e9ce"],["/tags/markdown/index.html","64c235f898c36a08d66886308b8cd068"],["/tags/noSQL/index.html","13505eea1d4c00ae470579dff6147696"],["/tags/typora/index.html","68693f388fdfb95ed264c1eadafd5368"],["/tags/vue/index.html","85a537aace0139be76478a85bba8b58d"],["/tags/享元模式/index.html","6f8ada02fe29b14b55d3de293adbd4e9"],["/tags/代理模式/index.html","add38d475fb9fe979c5b20fe2c2e583b"],["/tags/内存管理/index.html","ca3223457786e84aca8872299c3deae5"],["/tags/分布式/index.html","de8436232bd88661f0989e6095ea27a2"],["/tags/分布式系统/index.html","b6a66695d7c6b0cafa67974b29f50529"],["/tags/前端/index.html","83d47391c61fffcdead7073550be200a"],["/tags/前端/page/2/index.html","a508158b051be6ee265586c1d617ccc4"],["/tags/博客/index.html","bb6f5367575d32499245717638f51949"],["/tags/后端/index.html","1ea062e1c94a6d9c9d0a75e2efc92c8b"],["/tags/外观模式/index.html","40d66a09bc2c39eaa346fb92f3809d2a"],["/tags/容器技术/index.html","d78876e1ef3f6474024d6734702dc72a"],["/tags/工厂方法/index.html","5bfb6f5d7c16d60ee07e2d2d837f3ffe"],["/tags/微服务/index.html","aeae18928e7441a709c52ca21fbfd0b8"],["/tags/抽象工厂/index.html","8f7c57bfbef1dc3c5f635be7f4fa8982"],["/tags/持续集成持续部署/index.html","7b8c28d58b7a08599a2bed28714c0dda"],["/tags/搜索引擎/index.html","983e96f641882843d380324b4b733bcd"],["/tags/操作系统/index.html","dd8bc11483ab80be536686cf438a749c"],["/tags/数据库/index.html","9ada08fbfa44c374f6e7b5bda8be0293"],["/tags/数据库/page/2/index.html","56b04eb46fc14087d04971347002f946"],["/tags/数据库/page/3/index.html","ca099671ec20634213e9540e6c2319ed"],["/tags/数据结构与算法/index.html","b695eedb00f0d8fb1326d2d22eea9842"],["/tags/数据结构与算法/page/2/index.html","f65a7fd61fb6c6f8349a79e558773b64"],["/tags/文件操作/index.html","ba9857568084cb544bf98b95a07dd9af"],["/tags/日志/index.html","ac90b2407167e140d756aaeb1e89a09e"],["/tags/服务器/index.html","3d58d589703f64435a4a3ceb0ab1a540"],["/tags/权限认证/index.html","f5332f288e9226a713dbc8f66c4d1abd"],["/tags/桥接模式/index.html","5e66f2a9964dc1fc7dc8d4bdebe0aff2"],["/tags/模板方法模式/index.html","585b264ac4f4e4fcbbfcbb789b7de8e0"],["/tags/死锁/index.html","76711fc2504ad5ff23db012442de63cc"],["/tags/消息队列/index.html","5f62197de9d25c0517ba79f677b18615"],["/tags/版本控制/index.html","1ae7c15a0f80120cb62dc23fa6a7e5f5"],["/tags/策略模式/index.html","d2b1e45756e52583bf2e833c079b2c09"],["/tags/简单工厂/index.html","24f4e14751e73b9b0097b224a3e58345"],["/tags/算法/index.html","ac93de037d50394ff1e61e155e68ffea"],["/tags/线程活跃性问题/index.html","839c11f92c2edba1b5ab013efa1d4c97"],["/tags/组件化/index.html","8e76c685446a6002e343454701e61586"],["/tags/缓存/index.html","db891f4a4154e254e0bd75d16d868a81"],["/tags/缓存/page/2/index.html","3c0b81e21844abe9f0b270654cca5d33"],["/tags/缓存/page/3/index.html","6a6b2c8d9375b68569ea34e994e47dd0"],["/tags/观察者模式/index.html","dc358adce2261851c9378daf6a3a9620"],["/tags/计算机网络/index.html","65bf79c2206330d5e70cc14b6e0e4fbd"],["/tags/设计模式/index.html","e67e155206a6c0432bdcb9db92c23096"],["/tags/设计模式/page/2/index.html","cb70e8aa9f94372b61d535d89ee70d9d"],["/tags/资源共享问题/index.html","196e1137239580d75c38326c6cc9c001"],["/tags/进程管理/index.html","40f2d7b91352b81f307b57c2e71fdf0a"],["/tags/适配器模式/index.html","105e82d91cbc82da08f68fda4f4e7531"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
