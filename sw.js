/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","fe495837a0025bbc1bc4f11509330a56"],["/2021/02/22/工具的使用/博客的搭建/index.html","d5822512f83d927e04171891e144c868"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","c4b4ec8fe60a6625a642617cb4a5dd1c"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","a2bc0e0e93028deedbc91568983706d5"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","353ca2d6c64412f79a4e5abcaef640d3"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","e68d3d8557fa48d9aff4b8e2cfcd471f"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","02f5cad5867beaefb12dc848b6c75fb3"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","d43c28666f3f233bd41c11edfc82acaf"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","7409cdd8c0d5ae9e89e78836b5f24b0f"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","ad51e7276f51d022263c4f2d8add1270"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","3d638c619b0e395c61afefb118058813"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","83ff244eb4d5efd51cb16e0a5ce6c0a6"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","3e6c2a67397dd1a77fed72bd8efa2ad4"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","6754a71a2201b4dc1dcbdf100535105f"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","f2f755f6d947267b9b98aca497231d7a"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","7e5dadd67ed6480d9796cd595519954e"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","4a2ee76a594314cb41a30d32bea69a6c"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","89878a6e3b1ae8aee4d4ab493298d987"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","072be118ae8c1fe9e7b04c07d90be9d0"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","7fb67756b44abd03dcb3142c26566794"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","0d7573d21b65bd93903431ee5c34b48d"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","0137a4ea785b81432cff41764b2c6422"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","0d2b68c8fdbdeb2c8670f4ad39e7097c"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","43d16fdb3fb27a181cc4cfb1ec44f0f2"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","ea624cb7cf3038d6c1fe32fd53f97ec7"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","203fd37c435e39c5a9bd094ef031f715"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","21a23f3565c344c513cbd334f9f1679b"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","e12324e7f0d28cd52bd01727a601e9be"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","76aa0d54ea81a7c3450d1d3e9899e577"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","a6bf001ae6e9233b654c8630bea52b9b"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","6b988381cb09e923e9bb79671b45ea65"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","89ec03a588dac05d980db15a03e40d36"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","a7b1a26548152532366c27f2126de76e"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","5ff09ed42a0d8bfc268236ce8b8f7948"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","cd10bb5af6b4582fd4ea78ffd5af3577"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","2bf8980cd631cea9868eac609c0a22fd"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","32865f76960006b8ab7598d17657ecb5"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","87e9af7a5cf79802cc195a7fc05dcd65"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","d0a79246f95f29d9ab5a56b0daa1ae7f"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","e1f6b476b3c1f93debbc0214a911d696"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","fee1714fdb0094a187350d3c6e21fdae"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","060edc5674ec598954b608f68dd0d7f0"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","13832f1d452dad5204e0108bc5e18432"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","d67fa686f999a72742751936ceabd8b1"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","1570ffeebbec0a9c020033a6c920ec47"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","5725ffda55a8aca39f8712981b5ddfe2"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","2e3a9b413b7215c5975ce2e7d6767fd7"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","93ed73048f473112afe401cdcc488149"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","0035f60ba28238faa620111f68147272"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","3c038926c866d99997e912db02b627dd"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","d5e6b81087f9bbfe4c4c4749e983f3cc"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","18e5db1afce4eb605fda60bf0c6a0de3"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","f770531d3d5c127d5022ac718a7df603"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","32882fae8015f5514bb65379ecb7feba"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","389ea09f76891d51e950426edd449b94"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","cdc65bf699dcbf46df0dd139aa398b3f"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","5e7d37f1bae75162c3d3647f5d9e39bf"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","00325f971dcc8180c7b7f95acd5e0a9c"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","ed2d057d792d3401dcfcbd4808161035"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","5eccf1564a5f3273225060692469bcda"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","804845c02db8f1a23062dec1649ab865"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","308cafd91e77bb8b24eb3766d567c8f7"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","4302e036f386f2a0a9b5bf9e11d31063"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","ce5e785a8f57272001646c4d34c1bd41"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","9145b28a91556bd9bc760b226a88467c"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","975eb1f005c2a931e5a7967076fd0c14"],["/2022/08/17/前端/jQuery/index.html","237c9dfd3daff2fa30a06e23927cfcf1"],["/2022/08/19/前端/JavaScript/index.html","f0a912f3c909d548feeef43bd2077be4"],["/2022/08/22/前端/Ajax/index.html","beef860411e0b3bc9498c7a2d2c3d868"],["/2022/08/23/前端/Promise/index.html","0bb44ded8af4dbe116235bf5e0be7c91"],["/2022/08/24/前端/Axios/index.html","9b932cd7d793a9d42fbf144bba23d3a1"],["/2022/08/25/前端/H5本地存储/index.html","a8d9ff16872bf58c57d3e67e756b4ac3"],["/2022/08/26/前端/mock/index.html","b55440816c7b38510ad8412534d39ab7"],["/2022/08/31/前端/vue/VueJs/index.html","71f3d115aac9369689482795ce39e138"],["/2022/09/01/前端/vue/vue组件化/index.html","2a01c1623403bee02a84a85ebad819e2"],["/2022/09/04/前端/vue/VueCLI/index.html","05ff5ca5ebe86966c4624f273eec615e"],["/2022/09/07/前端/vue/vue实现动画/index.html","486259475f9f6e29eb0354b95fc1c1f1"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","12ed12f85f510b83f4b7631573c294c6"],["/2022/09/10/前端/vue/Vue异步请求/index.html","6849e3f4750c2ba41496fe91c3cb1a2f"],["/2022/09/11/前端/vue/vue-Router/index.html","1e9a018dfccdd5b654d57b6f85ed88bc"],["/2022/09/13/前端/vue/Vuex/index.html","265e996b9e19a7a38d07099fa456b305"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","ed98379d89f52ddd5b3c2465e0f7040c"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","f03684898dd65301cd4990dbcccddb18"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","5b66d183a8de9ed182c71030e6fab350"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","ce67794f7c68527cccef8c46d9932152"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","8b3c63aa3280600e1d5da7289a1baf74"],["/2022/09/28/DevOps/Linux/Linux/index.html","d616e271e592962f67eefb8823f0f842"],["/2022/10/02/中间件/Redis/redis基础/index.html","4f58af626f82bcf70594e86dbad64723"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","cd6e058a2d061ddfa9e4ec0f33090dfd"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","001e51855f23a7bd09fa7e5ffa02cc24"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","4de057199c8b85a898da70b8bb48273a"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","ca166682a9dd0dbf50572b4cab2e5c2c"],["/2022/10/17/中间件/Redis/Redis集群/index.html","06458424978d272f1f83b0c858a7dc20"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","e7b8d7098be44916feaf2d804ae9e0ab"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","01a826c376cb37f7efb60fe34029dfb5"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","b0934c0e57520bb826a3e5786888f7cf"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","c28d5dc5a19d1573960f14613ae52340"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","ce2ebbf149efe06c4b0956eb3e58252b"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","aacfded260679b31a83e5e5e714e2902"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","74a0c9e8b999bfe691aeeddf0eac5636"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","321cb37248748101a6f55030be13a49c"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","8a7326c158afe19cf89073176d89bb5c"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","f07a6d9a00083dbd57478b8a098cdb7b"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","dd1443dc4d054d94ca26ba0ecef09ece"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","422d20abe32310b15aa22dc709950080"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","7c001ce5b2e77721d9133992e7fc5e7c"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","00831ed70eaa0231594c381dc75c0f08"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","8027a911cb1f43cbc36fbb95b1e34cfe"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","fdb7f09ff22ceee30acc9349927ec535"],["/2023/03/10/DevOps/CICD/CICD/index.html","5e4d9a36ce6339faa8ecac93da3a256a"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","d0f59239b2f54ff771949b046d21264e"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","02d9bd3370c744e0ad73fabe525ac03a"],["/2023/03/13/Java/NIO/NIO/index.html","b7e42fecd80c354d0e8de06251b99d08"],["/2023/03/14/Java/NIO/Netty/index.html","ffa315170e1b538c432b3e41e9f78bb6"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","fab3eaa3607e49a71b11fa5b2a62c030"],["/2023/03/17/系统设计/分布式系统认证/index.html","cedf8016c2dd8b87b9eefb9b4b8e0f2c"],["/2023/03/19/Java/JVM/JVM概述/index.html","466fde7472dac682a1f3060b0997a74f"],["/2023/03/23/Java/JVM/类的加载过程/index.html","1570a04f73cfb4e8b4b7850f8009c910"],["/2023/03/28/Java/JVM/对象的实例化/index.html","cd4c880092ac13ff9cf3da76045f147d"],["/2023/04/01/Java/JVM/运行时数据区/index.html","cf4694affa276396990863915185ceac"],["/2023/04/04/Java/JVM/执行引擎/index.html","ab54190709c3653434dc2025bf63a0d7"],["/2023/04/06/Java/JVM/对象引用/index.html","941120acdc83751fb6bfc4c44e82f4b1"],["/2023/04/09/Java/JVM/垃圾回收/index.html","c567e858a6b72cf8100533ccf4379311"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","c51fd0629a54dfaae265321503ed8eb8"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","670036471b548ad31a7f32fe00059e38"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","08e310b0fd6cd5052e09f5252ba6de39"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","443b83f3564ff6c2a8551f8ba44aca5e"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","798d9ac088a808ba639e786521e948e7"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","71146fb25c6ef6c7a955807164ea8264"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","b151f110005b64e5a55e9b07c2bbd9fe"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","990e3bc63b755ea6d14aa26b86d43ded"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","0a1924ae3f45b9fb93f76b89f0d347d1"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","855e244e9b50cbd7a458ad6d67a9acec"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","ae8519fd81525ba912d1f7575442c1bd"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","e917e854d0a5fd822cc872d91d0cba8c"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","83461e6ab9ee0f3af6706dcbd900caef"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","063c0b7b336de4437e02af867cf73700"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","821b7e0dae56e0276e481960d5d0624f"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","381d4116d63774d1220647678303a623"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","4f699595b93fd70a83408e14f607e181"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","80adb8831185d89f14ae2d8f190686f2"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","3111b9c7ad755611f6c64318fa728a43"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","0d639ab20ede06591d1467bad91a9dde"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","783fb74bfbda9f74256a4727e308ef79"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","4671fc2be151883667eb0b8743c80c19"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","80ff44fef6ba148814eaa0a771def926"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","6d7f3e1e1f02a54da7c723b98908e785"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","0889605a73df5071a9c0eaab69ce652c"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","171c154bbb77217b39c68dd07529cab3"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","2c98479e89fab505cd2f62f6a34b7c58"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","9a389c742c1a26a33136f92aae8f5eb7"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","838b3f7a65e7e77afbf96ed6f06f7d0b"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","fb7444e665b2c445df507c8ce8fd08f7"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","64d9d6446c77b8610c306a989732f4dc"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","a34afc7f53a07a6fa42af73140d64986"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","7f78a81f7c2b400096cfc0dac055b478"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","86cf1e4acd02f9ba2bb1a5edcb3b8ed9"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","e6d18366620f9926552dd2ededd48489"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","94846e722cd73a67cadc766744f50dd9"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","e7f133f780c552ddd5e38998709f7beb"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","7dd88a9b56fbdba711c4cb523001e241"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","a88d1fe8be501aceaa3e4905be846b35"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","e0771d0ed1b543e37411d89c54f3997e"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","dc13a676bca3412828a2f78af21d88b9"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","4cad5ae168b5640d806a31756b6ffeff"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","2eee5cfa47795c4f1d5d9bd7ecacc96a"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","9c1125f443679ee34d5a5c58a5bb8a2f"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","84274ded88270a83389519ca03983473"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","7bdfdd3f00d7f4eb2ede2ea334badb40"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","5ff9b75e3e82a004b3e11b8bd441e9d1"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","67d0d5ec74a5ed2f246b5522840c5a61"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","2d070814cb24346b9b66caa626b4d1ca"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","45912534d3cfa7e8b1182eefda66f4bf"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","1dd2a6e3a0802f38c53cf12289b9ff8b"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","eee551f5fc9d153d1f00c4a86bf43704"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","8f204c715a64facaa67c56422fe831df"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","6fa6d2884f0def67e1e89af9ea50f411"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","eb4d1dd05f6c8ef40a3b4aa481b211c1"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","a13c161a050ddbc4833170e77122a155"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","94ea473dd266812507e99a8ad2840eec"],["/2023/09/04/中间件/Redis/Redis事务/index.html","4c74c0f8d90882736b7a9d42a2d1c2d3"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","e7a09c9d58e9df82892306d5491db908"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","5529c68a22be1a5b45814260554355e3"],["/2023/09/10/秒杀场景模拟/index.html","e590884733c106ddd907b3b388b4af7f"],["/404.html","d1678e44081fc6f98908abfeb89b3943"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","99eeea53f5231fb4b55e4dd7759fd02b"],["/archives/2021/02/index.html","821684dfbe4486f5291abe3b720d0f93"],["/archives/2021/03/index.html","c1c316eacc837055f86e1b4d553ea6e5"],["/archives/2021/03/page/2/index.html","81c9270125259e309a3c27492aeab3d8"],["/archives/2021/03/page/3/index.html","cb28003ec61a580820a3c582cfb9eedf"],["/archives/2021/04/index.html","711b8e013a3b5d7e1cfbee097e920a23"],["/archives/2021/04/page/2/index.html","b75d3b5607c683440af246d555f14c04"],["/archives/2021/05/index.html","6ab5297364f968d1135589ac12194617"],["/archives/2021/index.html","778fa3fb705b00a14f88d6ac01e79453"],["/archives/2021/page/2/index.html","888cfbac9414173767db315b03fb4d23"],["/archives/2021/page/3/index.html","c2417cdbf64e55b303f304d890ce045f"],["/archives/2021/page/4/index.html","a41733eb7e300fb2c1fdbfea82ff86aa"],["/archives/2021/page/5/index.html","251ec24f10a78e2b1c77ba11162f390d"],["/archives/2021/page/6/index.html","fbaea752150e77faa75c3c03cf39858f"],["/archives/2021/page/7/index.html","ce1e52178d3be3eca8b9a81300b79f4b"],["/archives/2022/01/index.html","622f70d2a96c72c82842c307ca2abb96"],["/archives/2022/04/index.html","62ad7debe994cd2c95b1fcb395df676e"],["/archives/2022/08/index.html","d6d53e5116c43f1bf3336fda5376a56e"],["/archives/2022/09/index.html","b48e6d56a70a3bf3a2ea559fb0becca0"],["/archives/2022/09/page/2/index.html","948353e92482744bb4cfed2e8a1ec72c"],["/archives/2022/10/index.html","6cef8e0d7fbce161a4be25464a1c200e"],["/archives/2022/11/index.html","f505ccb3aea7fb401b3014f4b7c9e79a"],["/archives/2022/12/index.html","4127f21a02f94aa1de77d3f6c921ab09"],["/archives/2022/index.html","130b847c0a3ebbf1f38d43e77061888e"],["/archives/2022/page/2/index.html","3b855d4d6597011a879ae5988f140576"],["/archives/2022/page/3/index.html","75eb6c61c142c4d22e567a2366ba06ab"],["/archives/2022/page/4/index.html","9c9c8a9623aa0b3f8f1138c9c62aecc0"],["/archives/2022/page/5/index.html","35ed0f0ab408e2c2dac4176eed74bcb3"],["/archives/2023/01/index.html","dfc20467fc19f86fa1b6d1c151bf6dbd"],["/archives/2023/02/index.html","66b7677268f3302c280b5175eba7393b"],["/archives/2023/03/index.html","69ff3bdc516e2309b3a634c56bca8956"],["/archives/2023/04/index.html","f806459fe0aaf48152085574aa78bd6b"],["/archives/2023/04/page/2/index.html","671e7b1ef720a040efd1ce666e52f920"],["/archives/2023/05/index.html","0232fa8406cab2ea8f370881fb63f19f"],["/archives/2023/06/index.html","9f11eeb7e38746b4eb3ddc5535c40c27"],["/archives/2023/06/page/2/index.html","52f0648115a0a0bd83c9ccd68a1070ca"],["/archives/2023/07/index.html","f8b06083fdbfbb24413235ba1bfc83de"],["/archives/2023/07/page/2/index.html","fcdfa102f438f699d4088ffda5432672"],["/archives/2023/08/index.html","9613bf04833235f96c1b131405d940f8"],["/archives/2023/08/page/2/index.html","040833f32eb2ed8c7c0de28ed99043fb"],["/archives/2023/09/index.html","036ccb07edb844dd3f322644ec2a0f29"],["/archives/2023/index.html","ce1160528f03bd6ce9d0a84a140f4cf4"],["/archives/2023/page/2/index.html","151602372c62a990d303406d67bffa57"],["/archives/2023/page/3/index.html","3511106177bd9aff1be586bebe3c2ba2"],["/archives/2023/page/4/index.html","acc6458095570e5b8201e8204745c6c8"],["/archives/2023/page/5/index.html","b984076007cf1d4d971c39add9c3d3c4"],["/archives/2023/page/6/index.html","03e59f1163b7af0005fc1db909e81147"],["/archives/2023/page/7/index.html","5fcc2ba11198fb372c324d89d1572628"],["/archives/2023/page/8/index.html","7883db2c803b0ebd2e5dd18287ed5cea"],["/archives/index.html","7a1e1ce772172479f2bbb379d2208303"],["/archives/page/10/index.html","568d591b90fed2cf6478f00da4a6063b"],["/archives/page/11/index.html","686c1d4ae43edb5dd79861e96770c483"],["/archives/page/12/index.html","a43b12718725f461682c517db7736af5"],["/archives/page/13/index.html","e80af904f976b0c73c011bed06ce2fe8"],["/archives/page/14/index.html","d793e5858b948e4aa0693dcc2c5913b6"],["/archives/page/15/index.html","d2bd751f3baa2d5fb63c042ce0e356c8"],["/archives/page/16/index.html","009dfea230d50cd85b4c038072731621"],["/archives/page/17/index.html","3cc117a72b95a8e195c9fb3b64a2e005"],["/archives/page/18/index.html","54cf62a26878a6ba2e142fe307330ad2"],["/archives/page/19/index.html","e84768ba75850edc2729c2a4e79ea023"],["/archives/page/2/index.html","02e62b0f2e38b4548a56c096f99db935"],["/archives/page/3/index.html","c5bd851c10e548efa50e1705fad9724f"],["/archives/page/4/index.html","7ccd9a5a2aa3668d380422309f0d58bb"],["/archives/page/5/index.html","beca0d485df092dd3ab23744af4337b2"],["/archives/page/6/index.html","cb469d6e10fc7b6a4d08c8561b7afbd7"],["/archives/page/7/index.html","30eb9cbe6c6db43554c32e0c208e943f"],["/archives/page/8/index.html","d0b81e2365a2db147b4ea759293c8924"],["/archives/page/9/index.html","5c990b76775de89c78949784136fde56"],["/categories/Devops/CICD/index.html","e6283161cd060a0258fe84863f964e55"],["/categories/Devops/Linux/index.html","1e898ba7884431ddc407d1b241e6d84f"],["/categories/Devops/index.html","627bf2714fc19f5cca65f69d61ed2d80"],["/categories/Java/JVM/index.html","8d92c1666e045c803920e62201bb9ee3"],["/categories/Java/NIO/Netty/index.html","2d8f3106ae2c99276d8c255474c0b07f"],["/categories/Java/NIO/index.html","418d04b8c42b974a4ef41944c269bb89"],["/categories/Java/NIO/原生NIO/index.html","eb74db78fabe52231fe467dcf807f394"],["/categories/Java/NIO/文件操作工具类/index.html","e9be5c3e198dcf12f41dc976f1d7400a"],["/categories/Java/index.html","6a95cfe20e4c5971a511d8eea1ba45d6"],["/categories/Java/page/2/index.html","d3f2f849a74ea9d6e888f11100adc302"],["/categories/Java/学习路线/index.html","69408bca9612800dcf1ae94b67f6d6c6"],["/categories/Spring全家桶/Spring-Security/index.html","6b64aba6b0b9b83ed296715bafd9e60e"],["/categories/Spring全家桶/Spring/index.html","945cce1ff41a2a837c927953471cb42e"],["/categories/Spring全家桶/SpringBoot/index.html","4c5e038bfd8e2cb488516b14e5f0a464"],["/categories/Spring全家桶/SpringCloud/index.html","5d2494e5bb2a5b50a51fa4e4531ad04e"],["/categories/Spring全家桶/SpringMVC/index.html","ae9a39a9d47e6eba0235c6f7f885fdfa"],["/categories/Spring全家桶/index.html","a92619ffd13c100cac37ca4d73bb1e78"],["/categories/Spring全家桶/page/2/index.html","c6ba46ccd8a542cd8c29e997738bda60"],["/categories/index.html","8a30b7816824b2adfdb7e5cfde9cd4d3"],["/categories/中间件/ElasticSearch/index.html","f8cda07d9e4dcc09dc95aea51715f1a8"],["/categories/中间件/Redis/index.html","9edc9c734d1a50a85d4be38c56070fd8"],["/categories/中间件/Redis/page/2/index.html","0a5b12b3dd42809e92d54aba410c9cea"],["/categories/中间件/Redis/page/3/index.html","054bdcc8bcb8aebb64a8ba0067fd986b"],["/categories/中间件/index.html","8c35c16929f1ba43cf2de40689794530"],["/categories/中间件/page/2/index.html","585f9093e41d3afdf5ed6366aa846c71"],["/categories/中间件/page/3/index.html","10250142d89c8ef334e499cb19338e70"],["/categories/中间件/消息队列/RabbitMQ/index.html","877fbc66da0c9fc6d7b4f5469b1ddc8c"],["/categories/中间件/消息队列/index.html","dcd46a6ed1989cb95df83716d846a89f"],["/categories/前端/Mock/index.html","17220902c5cb3a373c91068a760741d6"],["/categories/前端/Promise/index.html","3a958efbc4dc6a4548b351e95173112f"],["/categories/前端/Vue/index.html","ada879787f1f0fccd274597a9e3ad628"],["/categories/前端/index.html","6027127b61d12d49c61ffbfa087830ab"],["/categories/前端/jQuery/index.html","c2d09276da19f40669a1a4f0e6d41ffb"],["/categories/前端/page/2/index.html","d0b3b48c11b8e4df8dd7d49c4315c0cd"],["/categories/前端/原生基础/index.html","bc9e01552e344b59063a9718f9cc6e00"],["/categories/前端/异步通信/index.html","53bf538a0a7bd61e81d2c05b7b4da658"],["/categories/工具使用/Git/index.html","f53f3fe13e5b43cad992c36bdfee325b"],["/categories/工具使用/index.html","90aebb4da97c98fa30418f3821aea166"],["/categories/工具使用/markdown/index.html","b9a1c474b5db3c595d812c0db8c3024e"],["/categories/工具的使用/Docker/index.html","f326d47e6e3c5fe9a192561d4f0b131c"],["/categories/工具的使用/Nginx/index.html","a74ca9e5da5b927aef8ad9aaf86c2641"],["/categories/工具的使用/Swagger/index.html","0a5ffebd289bd59d4c90cf398f2b8094"],["/categories/工具的使用/index.html","bbb9da67d8dd7891857a4f2448db1a10"],["/categories/工具的使用/博客搭建/index.html","9021c2f9b8f077641770cea7af4ff5b2"],["/categories/数据库/MongoDB/index.html","66146fe8ded06c34e58a97f806c5522d"],["/categories/数据库/MySQL/index.html","2c7a35f212011aa1d3e4305b6d9f7e33"],["/categories/数据库/MySQL/page/2/index.html","102515cc355a3ee7caa13e561c986365"],["/categories/数据库/MySQL/page/3/index.html","49ef852635dac9732fa3e319fe44a8af"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","7aaa0bd705cddf3c0b958696195aa0b0"],["/categories/数据库/ORM持久层框架/index.html","1db687f1375d6ea8eb062475fd58f566"],["/categories/数据库/index.html","bb7f2330a6cc3ce4380f6f76bb6f799f"],["/categories/数据库/page/2/index.html","a5070c6b44ebe951e8ccafb0f22c00c9"],["/categories/数据库/page/3/index.html","f845529bac0ee8ac0533ed73107a988b"],["/categories/系统设计/index.html","ad28e10bb8a08d881c8c6668cee36e4a"],["/categories/系统设计/page/2/index.html","972c268f028ad357116b0b65cf30563b"],["/categories/系统设计/分布式权限认证/index.html","7853ecc6ef61d4457997bda705df8b77"],["/categories/系统设计/设计模式/index.html","975dae53550ffa64b0c69c99a29ba8fd"],["/categories/系统设计/设计模式/page/2/index.html","37751f4d66942bfea3b347caeec18af1"],["/categories/计算机基础/index.html","7ba96e46dca9693a186365654bec4e54"],["/categories/计算机基础/page/2/index.html","ce422befb9c5e93c0f2d8211f2d3ced5"],["/categories/计算机基础/page/3/index.html","6451aea4395012e8325e5fd95afda330"],["/categories/计算机基础/page/4/index.html","27f513b53609c607d9fcc7dfe674f1af"],["/categories/计算机基础/page/5/index.html","e488791e1ba5be7be49796e265b542ca"],["/categories/计算机基础/page/6/index.html","00bf6b493b38e5d70089fdbfadd1b502"],["/categories/计算机基础/操作系统/index.html","f6133e2327c306e622a57d74f52d7564"],["/categories/计算机基础/数据结构与算法/index.html","572d968f4ca3114e59864d6c4ce86a14"],["/categories/计算机基础/数据结构与算法/page/2/index.html","4ad66c439acd829dc8167810fde81916"],["/categories/计算机基础/数据结构与算法/page/3/index.html","828876d5c5856387347a4689e3129a30"],["/categories/计算机基础/数据结构与算法/page/4/index.html","eb39de0dc67c6e184e528710d1b1c9d3"],["/categories/计算机基础/数据结构与算法/page/5/index.html","d251efa3fa3a4701a075d2f501aa575f"],["/categories/计算机基础/计算机网络/index.html","9758482f5c54c410e6d01349de9df34a"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","acd371356068eabcd404bbe647ed0509"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","6a97ac2e86ab56d135bad3b0ea35367c"],["/messageboard/index.html","15b065633c8374c5f2a5f5496cd3e11f"],["/page/10/index.html","017e62dcfa560967f86e9ae8667b57b9"],["/page/11/index.html","bd0a819453e5d1ec0dbd7d63fc666675"],["/page/12/index.html","0ab27ef9510c44d8e5c754f17239082c"],["/page/13/index.html","d2240948055af95812b51c8b0ab90cb6"],["/page/14/index.html","599f67acfe4351fdd27cec25f5fd98c3"],["/page/15/index.html","9070d3e0e0c5b0b2e3e79b59e721806c"],["/page/16/index.html","c55e025286cd8deb6df1ed0ac1e22561"],["/page/17/index.html","d2415c291160522dafbfcd062b22c8ce"],["/page/18/index.html","35592533df27040b5014f3c79d283b8f"],["/page/19/index.html","71df046aa96b693b3e36cb3677c92a4f"],["/page/2/index.html","a392185fda42e95c898316c64ef79b9d"],["/page/3/index.html","dc771784c6316f8af42d8a49006ecb10"],["/page/4/index.html","b5d567315999665ec9e18cdad4857cbb"],["/page/5/index.html","6fc73d193902dd3f149478a614213ac8"],["/page/6/index.html","9200bfe170221eb951efd925f60d3960"],["/page/7/index.html","34b2a1ea70e8a03f5afad237e5b96329"],["/page/8/index.html","caeb0fa0694cce850893c2945f7970c0"],["/page/9/index.html","d0ddf3d9c8ed3ac9a5a7ae48621820d9"],["/sw-register.js","1e402721718ab268ff44422a557006b1"],["/tags/Ajax/index.html","7c5689402bce39ad81896c6f384cd665"],["/tags/Axios/index.html","43028f6a62039ee85c3d40e64baa718e"],["/tags/CICD/index.html","c3122aee4a771e3703264f7e7710cfa7"],["/tags/Docker/index.html","6de573d9e170ce6e96c73e92d7ec4f42"],["/tags/ELK/index.html","354648c5604796140d52624a50ab41f0"],["/tags/ElasticSearch/index.html","9bccf3c651cb00312ff7672fc9c2d0e7"],["/tags/Git/index.html","0b44c75719838c70ca4bb719a47d1468"],["/tags/H5/index.html","3003f6f506880860430e04f828be7f9f"],["/tags/JVM/index.html","7cd7fedc0b3f09223c80d1d3548fbc57"],["/tags/JVM内存模型/index.html","94c76b6948d9c0bc362f7868904b4b30"],["/tags/JVM执行引擎/index.html","da6c402a6084d6df3643cd478170632d"],["/tags/JavaScript/index.html","d4c8f6e5bdaa597b73472f9370c85a76"],["/tags/Kibana/index.html","582e7339eee6162a5dec9ec3894daf4a"],["/tags/LeetCode/index.html","7ae29c1723ef27bee178f81a14193b70"],["/tags/LeetCode/page/2/index.html","6591675d1aea759c5af269ccea9d6719"],["/tags/LeetCode/page/3/index.html","1e1de6d07fbcda52931421c5ee35fca8"],["/tags/Linux/index.html","f73ec3b9fed3d375902cfcaf06fe5fe4"],["/tags/Logstash/index.html","5966d43cbb86a091e41556a0f276fb8d"],["/tags/Mock/index.html","aff1a2a1eee9137b4eef040d662637b5"],["/tags/MongoDB/index.html","f13ba19ad33a5c264cd8bca39f7c772a"],["/tags/MySQL-事务/index.html","20150b0d8c0cf6ae4ef9f2ce66268807"],["/tags/MySQL-数据类型/index.html","771629b21c552dd904a891f3113bfc7b"],["/tags/MySQL-日志/index.html","1831582c48b14b7137f5f0fb78f1abce"],["/tags/MySQL-索引/index.html","78e8fbe83f36b9bffdc843f9664aba16"],["/tags/MySQL-锁/index.html","c5553dbce41a26bc106be3f312426adc"],["/tags/MySQL/index.html","dfcda326c1d50aac5d9662e021708dfa"],["/tags/MySQL/page/2/index.html","14515907861c029a3f508be0e91c7971"],["/tags/Mybatis/index.html","a34c516f358df2098b433ed392088e16"],["/tags/MybatisPlus/index.html","2fb3e88d050389b1465a5fd9b4be131e"],["/tags/NIO/index.html","06742aa03dd9f7e8e9f299158e175c80"],["/tags/Netty/index.html","be4fc92ac9fc3b195b82ceebfd438c2f"],["/tags/Nginx/index.html","a40c27c2d4fec200106a12d7f981bb2b"],["/tags/Promise/index.html","61add5151c21d0249691274b2c0a7517"],["/tags/RabbitMQ/index.html","7c101f94e8f7076ffde61c216948c6d3"],["/tags/Redis/index.html","ebfa17a2f1382d60129ef83933f78422"],["/tags/Redis/page/2/index.html","dfce87950591d20cdfaff049cb7bbd3f"],["/tags/Redis/page/3/index.html","5d47947dec992d3d159fce05829f0d17"],["/tags/SSM/index.html","bd4d7e56a9db4a60ca0a1370c082bada"],["/tags/Spring-Security/index.html","e4a230d3563cba6d9c32a11f976a2784"],["/tags/Spring/index.html","fbd206f8f8798c98ed573cc61d1f9beb"],["/tags/SpringBoot/index.html","51a249a323f6ff4bfdea86fe37774e9f"],["/tags/SpringCloud/index.html","e3ac7ffcf5eeb9051b8b0fd64bfd519b"],["/tags/SpringMVC/index.html","e046bc6037b6194abd6dcbc53211a56a"],["/tags/Swagger/index.html","8e8c611dc34f33237f7a9a63185788e6"],["/tags/hexo/index.html","53984788c30a51c42f7d85dc487de830"],["/tags/index.html","08b3dacf97425dc830d9f7f53bfe47d0"],["/tags/jQuery/index.html","14db4d062cbfdce12ec7f462635782d0"],["/tags/java/index.html","d0bf7d1368d68f7ef34f819290f62e7e"],["/tags/markdown/index.html","ee34c24a7a9f646f75778a9d4d13d97a"],["/tags/noSQL/index.html","f3e5945f32276f9e691accbcb248f197"],["/tags/typora/index.html","60fcf68319e02cd48175d3c719f6c1f8"],["/tags/vue/index.html","b77e462e12596aa67601df95235beb50"],["/tags/享元模式/index.html","c0d806ed50461c5a80eba385fd651965"],["/tags/代理模式/index.html","be838ec18c4b078e2cb33509bcdd10c0"],["/tags/内存管理/index.html","9ea715f379dea3ae78a35a6a5bf4346a"],["/tags/分布式/index.html","2e336216bd9a3d1c2d14616a0493b08e"],["/tags/分布式系统/index.html","071601913d9f227f6cd785defdde905d"],["/tags/前端/index.html","d80c676616a8648c47de1e2f44f0e129"],["/tags/前端/page/2/index.html","1f5b12b74484df4155d6973f1f129c2d"],["/tags/博客/index.html","e91c925611f9d019683c1c9fe4511a2d"],["/tags/后端/index.html","033425fbf9ea76c06b9eb9140e670872"],["/tags/外观模式/index.html","a3cd9a17859bcab976e4970fefd99925"],["/tags/容器技术/index.html","35cf7660d6ae6ce68dd4102d6334a9ee"],["/tags/工厂方法/index.html","619609dfdcba2670ad36322bcdcc524a"],["/tags/微服务/index.html","4ed0fcab973f1fe47825752428666b35"],["/tags/抽象工厂/index.html","5073e50a075f90327b8388a0880c03ad"],["/tags/持续集成持续部署/index.html","a6e4e50e97cd9dc425be1029f276bc6f"],["/tags/搜索引擎/index.html","8ec078c2ab8a4ed400b1ebc167f45a18"],["/tags/操作系统/index.html","c2c56e9fd4f7efa0ea4bead12d87556a"],["/tags/数据库/index.html","14e661093103bbb6a8b2cdb90a00bc71"],["/tags/数据库/page/2/index.html","324aefa08a4b382b278a67d5b189a614"],["/tags/数据库/page/3/index.html","0254129a28a017374ef29d03910e71dc"],["/tags/数据结构与算法/index.html","47cb8679d4bc7dddcb1d9c5de50b9a52"],["/tags/数据结构与算法/page/2/index.html","6a3b0e62520bfe2923e46c4d03ca7d16"],["/tags/文件操作/index.html","5c62acaee6f8c272be6b3c372073c642"],["/tags/日志/index.html","bb6151d4bb748ba22008eddfb2e7a108"],["/tags/服务器/index.html","7da3d6ce64423fb5ecfde372ba731d7d"],["/tags/权限认证/index.html","3817d5c05caa61720eeeba30b2532c1a"],["/tags/桥接模式/index.html","2128d569f8625393d533ecfced524b79"],["/tags/模板方法模式/index.html","3fc5841a8aa6fbb3273c0612fb9d2dcc"],["/tags/死锁/index.html","5d567f22fb314a919acb6886c03205a9"],["/tags/消息队列/index.html","bbcac01676691e93b9138bb224cc0ddc"],["/tags/版本控制/index.html","7d6d74075d54525765e414a92c214000"],["/tags/策略模式/index.html","fb9983eaf5feee9ef51f4d24e9b9c15e"],["/tags/简单工厂/index.html","d1d07f9326acc7140a9ad8f79fc04569"],["/tags/算法/index.html","c18557f3387d2cbaab2d0821c67d54ac"],["/tags/组件化/index.html","70347b8a7f25dd4ae732c5a85a68dff0"],["/tags/缓存/index.html","51cfcb43e058692f7065f23ad27f4b8f"],["/tags/缓存/page/2/index.html","5c1410774008c263aa7dafbf95756fec"],["/tags/缓存/page/3/index.html","fca5762951a67b65d129f21b5397983c"],["/tags/观察者模式/index.html","b8a4c433741d5c1f76bbc93b5b294b54"],["/tags/计算机网络/index.html","1af1d589f5eb2b7bc5cb5d689c6f7fd2"],["/tags/设计模式/index.html","812e31d49abced555d28e428722e7dc9"],["/tags/设计模式/page/2/index.html","e61b1e88c368ff88e1ec29209f0c588d"],["/tags/进程管理/index.html","62d5744818606e01cb5729c7139782e5"],["/tags/适配器模式/index.html","23af07794326073dd046279b5ba475aa"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
