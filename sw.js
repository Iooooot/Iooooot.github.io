/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","32135cdd90dddf6d3456b69075c99175"],["/2021/02/22/工具的使用/博客的搭建/index.html","54211a96d12dd36d0520a90b7b2bebe4"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","b622367f7bb5b4771a930d9430e96251"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","c4055710007bdb99e6cfb8bf2a732ab0"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","6148de7cef5390e3137fc43df34e81dd"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","22109fd1b90394357ce3f11b8135cf4b"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","00b119d350caba840a60740a95c6d925"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","b36f3fe49300520f54acb722f51c1d5a"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","c0b9db5a3ab5b6ce068b9001f9a6d5f1"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","d53ffd960c5a308b16d43ee63b637e90"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","3058fe732f7e17ba9a61dec34dc65b98"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","ce66aff2834e096895d682daaa92cf58"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","8d25576376e2e1cf8f142f82a209ac8c"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","dddb491977a7545915405eb8a1a120b9"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","9003a3d56ad3ef1648edec3bd6b09c33"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","7e4fd965ed1ab503a2b9f13738b524ae"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","c9664dcf38e4ffd59afbf31e3f9810f5"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","423d332c559fb416ba4b2fdf2f5ba30c"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","efcd8247533a5966c28245dd93a5d424"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","11e283dd30ee26e2fd303bec69354856"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","d264f3448903fc21543380ad6aaa2e14"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","e535f47201935c31043b68b401d9dbdc"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","aa7dcfcca49cc164c0537a1e17b309cb"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","82a08a8c84c754603a78e64f0594f1b1"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","58f4f058547241c770ac1c3933189452"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","42588cd000ce2f5073b3380e9f6e05ba"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","6b073eca2d824a0e1b6e038a36dd37eb"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","1af0aba1f5e562bbe43e60d03f95a8c0"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","95bc23bc45523496b3de2c2af8d68fe8"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","73282332928b32b0230603d8a01bf1e7"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","087be63c1fa1d0d698afc3123abbc4aa"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","6ea49da5e46ff8a72ad715161b692df4"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","9be694f9ed11caf943207c4567968410"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","2cd152c6da2d3af7aef68b471e4111dd"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","d37e7224f5121c596541966ef22395cd"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","6035bcb5faf56b4483d42a30c0786429"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","f2d3ad81c56a0fd73f1759d92bf6d658"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","1e9c851cda170058b1df1f922b29276c"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","dc48258638414ef6b7b02d1ff3fc6f98"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","b75a9074bfac9eb84d98d2e9590fb1fb"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","03e2b082336b4ed342db5b5e87038453"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","40ad9a755c61d2fc306e14123b91b350"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","8eb446f66b5c3b78831af4403bd1b1f8"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","a0eb84ad0fd27e2b2985760cc5d5535d"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","f1ce6458469a2dedc810f6aae980ac4e"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","1254cd52e2e0e6d1e64c961fdff1dd27"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","5ce7fa92b2b01fd224d603da309feaa7"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","c3f2b45193e3bca4d1eb11030e9f97b8"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","2579ce9ca8f9376429babc3e9c11607a"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","bf126d111ed75de8f7b24d40ccaec41d"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","7063c1af2380c8c9dd2c3f5b7615c86a"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","e09847b38e8df899cec6e69fc185868d"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","838649ff1e7081437e7e120c6b8d0596"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","36f88fcd58d7dfd77bd8d40079784d4a"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","86aec88b8b488f50e6c889a3b5e05a5a"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","0bb814703491da5ef3639c1a0fa41ea4"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","de88927ee1e0a5ca959832f97a1b9902"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","e45ea0467ffa43c2353da59703f96416"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","281acd1b0e16a1aa459b267e61375410"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","19978b5a48427257b517b3b251d9bf24"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","c1fde8cd4c8eacadb1caa13e47e63e53"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","b5f08ad0c1e6d722285ac0c46e142146"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","4bc82553b15c3695c27a534d75d9e716"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","a0e2f99499f72ed3ff158ba5a0843fc5"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","98ce7104fb6c6c5a0b7f7ec1226d64c5"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","002dc98592704703478994f712e63f44"],["/2022/08/17/前端/jQuery/index.html","c7a4ccd3b95057a77bb03f743b031072"],["/2022/08/19/前端/JavaScript/index.html","e7e0feb16981f8627ba1b1c81da457f9"],["/2022/08/22/前端/Ajax/index.html","f0fa41a46894df8e1981b28b354593f6"],["/2022/08/23/前端/Promise/index.html","a5723035c79ca9e726ff17044c94579b"],["/2022/08/24/前端/Axios/index.html","b22ce163c169cd20569c06c0206ce52f"],["/2022/08/25/前端/H5本地存储/index.html","e54fdbaeb9f2ae0b375e3b375133fad0"],["/2022/08/26/前端/mock/index.html","ee2d61859826f31af126de264efadc1b"],["/2022/08/31/前端/vue/VueJs/index.html","8f6f8c2551c9a5f886226e03fd0891ba"],["/2022/09/01/前端/vue/vue组件化/index.html","9d932e93ae74984b55dbe80b5c944bd6"],["/2022/09/04/前端/vue/VueCLI/index.html","c2b02f1598b4a81bd4163cee5bc87f63"],["/2022/09/07/前端/vue/vue实现动画/index.html","6e3e86d988b25ce2e95ebff23637d421"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","d369fd74c9c78a4e36a00085699121b9"],["/2022/09/10/前端/vue/Vue异步请求/index.html","1f9cfaf86ea3952298da325f6f7e041d"],["/2022/09/11/前端/vue/vue-Router/index.html","2fbcc556767a5483168b89b8ed0b60e5"],["/2022/09/13/前端/vue/Vuex/index.html","33eeb661d82256d358abbcbdebfa49db"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","5de0a2a094e4f6e1fca3faf7ad6a7bfb"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","37ef0859851a200fcf8d748d444017be"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","d499babd41f661433255be297b6351d1"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","b8064ece83fe40171f78452ae52d9137"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","f7ec44cd5708b5ac679dc09cfac84a24"],["/2022/09/28/DevOps/Linux/Linux/index.html","5599cf3ad44b467fea47ee9dd9f3d3f3"],["/2022/10/02/中间件/Redis/redis基础/index.html","483da4dc195dfb3061c171a3e23480f6"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","c7953e3459709b4dacd480399401386e"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","dac84ee893c2e52c80bd14c4bfd0121d"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","7cc38865396a5980d27a2abe50098304"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","0ea5a26e4bd141187ec494394d6aba74"],["/2022/10/17/中间件/Redis/Redis集群/index.html","574c1afbf5c8949c0d596e210492a951"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","5ce7d2262ed0c46548da9f6639e6f400"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","a44e987e4f52c0c9b44cdd993ccc651d"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","93501375eb0008fcf3928f2042da9a26"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","c33d5c856c08cece79a53191cff1fad1"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","94a4443891477ec865a5b9970a6f7cf7"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","38420ccf923fc5f419ce00e264ccd0c5"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","59514f685314ccaed971112dd413786a"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","d0b916c03fd4fdd95f8ae05a2146a7fe"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","b3c614ee9eae7858a10834161dc7d9ea"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","d7b5d6e386fa787eee61695083bc3b50"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","fee5c96f959874b0a4d9b2f5f4a24440"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","e8210a4bb6edce25356169e6d56120f3"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","73ac8350060ba1470db0811d966e2548"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","77013028e2103e3d561247d849af3d69"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","cd7ed9229aaebe7ba28ded90f408d818"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","8e81a1d9b95c59da34c4fbc05866613b"],["/2023/03/10/DevOps/CICD/CICD/index.html","3ea823f82050bcb5788b04a328ffa74e"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","43c31cd6aa4d193bbabf79cb45429f67"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","c4ae15a972f36faadf654ff7768bda7a"],["/2023/03/13/Java/NIO/NIO/index.html","dafcb3d06c0338e93575ea7ad266cf9d"],["/2023/03/14/Java/NIO/Netty/index.html","5ce677a881afdd959121b1a709a7767f"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","410b2221490536cc1b1d4e855be86133"],["/2023/03/17/系统设计/分布式系统认证/index.html","338073eaa31f28b526bd5afc238c046f"],["/2023/03/19/Java/JVM/JVM概述/index.html","b2071823ec4d91c38911a3c928ea3221"],["/2023/03/23/Java/JVM/类的加载过程/index.html","e4aeddc6b3205a5022ba62010c5ac595"],["/2023/03/28/Java/JVM/对象的实例化/index.html","12209960bc3c6e4d1fdc711ebea37b0c"],["/2023/04/01/Java/JVM/运行时数据区/index.html","af84b2abc3a245fac32de914e352d00b"],["/2023/04/04/Java/JVM/执行引擎/index.html","1fcd6c84070bfa79d25a1dcd91b8b8c7"],["/2023/04/06/Java/JVM/对象引用/index.html","f02c16795ad0df969b69932f782a6b7e"],["/2023/04/09/Java/JVM/垃圾回收/index.html","8b8b6be8c68bf8a0c2771497998067af"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","4317ffc98970cf0b02c1bde3f190a574"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","7323eed35eed10d6fc49b1e54e4e10af"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","cff137032cf3a098f7f912604591f809"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","bc68bfbf768a1ef4740b1e89bb3eb1b5"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","25345b56a6249c39fb7b6d96ca56ad0a"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","f662f974069ad5f03185fe17c306036e"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","6e294cfa51b5ac04c3560c76549dc6d2"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","1be559bd838ff993eea1ce10feca1e21"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","2d3b8768b24479bbe8765e061bb722fc"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","8aa53c99cdfe736a35804a4cec2bffee"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","0c68e5d75808dd588491050a104514bd"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","4a4c9924e023a4acbc2fcbefb1e68757"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","0ebafc0a397356a65e44af8184271c94"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","b1b26a5bfabaf877f0d78f519031489d"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","0989e051fd2c34fa486ee15308e1381f"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","919afae258997075681211486f94b93d"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","efc1810145a7d3eef146c25bae6068d0"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","3b5a28ff8c178940d4bd083845435e4c"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","1cf1136f08ff47c3ae678268a438bd62"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","bb3065f9b64a2f0db3526e3c455a77f2"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","43ba5b16a27c6301d1e040d98c5a3651"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","fb201c3383dd5986e64233865e4cb2c5"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","2590965684a0dfbf458586abebdfa14a"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","8e0b6ba918ee47ccce16d3473a39d132"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","5de7ef406273bc2398e79b6834c3c0d0"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","3213c1e7c102c3436c44b1f8dbc0a38e"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","2f406ef1928bf5d69f3bb13d8f56a0e3"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","5b5bf73dc18c05b8eaec51a817c3d005"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","337dbd59bb46f95fc74f32850ca22950"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","727ea78615c63eb4880403508a9438a0"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","042fb3e350f9950feb2457f1be17c286"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","b862bcb713540e8ab51b957215b73466"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","93c3ceaeaca304c8f5acba4623d6c45b"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","c175af645b92ff323afac476425b23c5"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","953214d08850accb9e99bd1571710eb3"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","1872a7c0b0c04d469112be58885fd430"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","04db32da925522d78df21eba373fdeec"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","3fb4b1e090d7364e427bbba98bdd7448"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","b81e76d25cf3be01e757469da1c4b9dd"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","63a21c3f88ac9e8377e7632865ac4bc5"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","3a53ba93a5eac4528664f00c26982936"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","6e2eb30ca5db279bf4d10785f01101eb"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","65c658159345d52cd21accd4c53641f1"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","a6bd40683cc70f2183c906c46fc6d8d4"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","9fbd509c3b65cf875cd3d6e9a802f049"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","7d2d3a1d8f0d9f1c82a60014e4c48d48"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","51542683baf056b1090824bd4ce27df8"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","b2e09daa06bed71468c37fa7a7af2b74"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","35a82df2933146a472117a3823803776"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","7c11e579beeacdc2cb77ff935e16cfa1"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","239a63949246c0c2801fb5944a6959d4"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","d4e93682c1acf6a49d64fd44ef6b1fe8"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","c28c344855651bdb4a7629edf57149a7"],["/2023/08/26/Redis做缓冲/index.html","5883a17791ac4ac679a10c00bbd319c2"],["/404.html","ea259c230821a94b2d588a68e97df23b"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","0b7f2f0a8081e1f871e4af269437a5d9"],["/archives/2021/02/index.html","e30aa3f191f7916191d585891a72f7c6"],["/archives/2021/03/index.html","f0b4835b0d334353aad81b7edc80a464"],["/archives/2021/03/page/2/index.html","31bd5f2c93137f67250f5a25eec0503b"],["/archives/2021/03/page/3/index.html","fa74a82832ddbd961bfb6d72cdd8c859"],["/archives/2021/04/index.html","a0907fedfd9e3e9962cd879386bdab8c"],["/archives/2021/04/page/2/index.html","e8ca29e6cad48ae9f4446fec3fba242f"],["/archives/2021/05/index.html","803dfde75b9ae411907cfb89ce9d2ab6"],["/archives/2021/index.html","864ca0d824d273bef6d216df320d54d7"],["/archives/2021/page/2/index.html","ffc04a951e63f916d4dc3158feb4091b"],["/archives/2021/page/3/index.html","0007d20a1fd348a69a592014630c1650"],["/archives/2021/page/4/index.html","e26b680914bcc81c28f818b05a4668de"],["/archives/2021/page/5/index.html","55e6d48517930ed6def7d423d213f846"],["/archives/2021/page/6/index.html","56ec60e0740c3ce46a01c7b805ba61f0"],["/archives/2021/page/7/index.html","94662934f4e8b9aa0889bbbc416e4f09"],["/archives/2022/01/index.html","32d77a63f22bbc3fdc86c1f99a8851e8"],["/archives/2022/04/index.html","aeccf8f04bd259ecb30832aac8ade650"],["/archives/2022/08/index.html","5eaa05dd6b72ab391be3b4495a93c704"],["/archives/2022/09/index.html","7b894d8a896e31d72d9c5067f7884661"],["/archives/2022/09/page/2/index.html","e9cb9454d45f85c6440999313d050190"],["/archives/2022/10/index.html","b3c9d24732e1165a7d7a645a4134b71e"],["/archives/2022/11/index.html","cd982774965dfbf4a4f25edec9b02db7"],["/archives/2022/12/index.html","40bdb97bccda1cd3022d4422670ca835"],["/archives/2022/index.html","70e24ca243c2af9e8749d0e04a0fce45"],["/archives/2022/page/2/index.html","5cd50a859e9839a25630c6679019f211"],["/archives/2022/page/3/index.html","86f871c3fa0b4e4168baeec908f79eaa"],["/archives/2022/page/4/index.html","ea81b99113b7ff295bb2e8b4ad97e9e6"],["/archives/2022/page/5/index.html","2736bbf0ac27a12283dd659f39eec557"],["/archives/2023/01/index.html","d48f6d37c260d1cfd25492aa171554f9"],["/archives/2023/02/index.html","e92504a09ac2b586e68bcd7c184afcab"],["/archives/2023/03/index.html","31c254f1eea5be48bdcc03d17ed2d88b"],["/archives/2023/04/index.html","5bf276fed96880952499034ff4907fe0"],["/archives/2023/04/page/2/index.html","a16326e3b9abcacf0a6ab946f1ca0833"],["/archives/2023/05/index.html","a1ba24f1717c3bcc479add8c28368573"],["/archives/2023/06/index.html","1b494d97fa957c8a842503314209e0c0"],["/archives/2023/06/page/2/index.html","6dcf804896f15a2c175c9b93484353af"],["/archives/2023/07/index.html","b240c3186d215e9b877db0306258001d"],["/archives/2023/07/page/2/index.html","1440f4a61debe933b18cc5d1673a3e1c"],["/archives/2023/08/index.html","f7d12bd1fb8b3e4db85ffcb6c6827bf1"],["/archives/2023/index.html","69c9142d798fb5b6b974dbb71230d9e5"],["/archives/2023/page/2/index.html","04fa0c37b380fc18f73972a3e30cad20"],["/archives/2023/page/3/index.html","45399feea8317594364c3639a0415f34"],["/archives/2023/page/4/index.html","0882bd0e3b4897e9caf32daa357fe5e9"],["/archives/2023/page/5/index.html","29e38212028454fc55465f4e62896762"],["/archives/2023/page/6/index.html","035f819d6d2f9df9061da193e695e21c"],["/archives/2023/page/7/index.html","dc9bc090d59eeeb86629aadc549a1dec"],["/archives/2023/page/8/index.html","73e58ce022b60fdf3b6054dfb4b99064"],["/archives/index.html","9fbc26223e05463fb1ae51115ebed71f"],["/archives/page/10/index.html","ba60ae07ebbae1683873fe0e93e594a2"],["/archives/page/11/index.html","c63d674e7be8ce5e4c2b6f9d3f3f8733"],["/archives/page/12/index.html","cdcc82f5cc92837d153794404cc580ee"],["/archives/page/13/index.html","56d39a8c597bc2df2aee6aba86bfb5e9"],["/archives/page/14/index.html","6700d40f5fa152ffda2702f4f006b354"],["/archives/page/15/index.html","d311139e3ecc9997705dc03d83fb7c1b"],["/archives/page/16/index.html","13f805f4a0c7254b809e0bf730071f27"],["/archives/page/17/index.html","43c85b0ea0ede319e6f85cdea7c81ac3"],["/archives/page/18/index.html","b020a85256705597d051dffc7f727e59"],["/archives/page/2/index.html","dba67d071d00af22f458b8b87b28318a"],["/archives/page/3/index.html","f2b592d3bd115080404b86ef1b5da6b7"],["/archives/page/4/index.html","599d611697e637a038cd9e26aeb91f0c"],["/archives/page/5/index.html","b249896b92669d84e84d8a52dd3207d2"],["/archives/page/6/index.html","0882d85f7ce19eaa6f185145e0f90400"],["/archives/page/7/index.html","d3e26c0f71cd69c5409f7e1a2a2ceb2a"],["/archives/page/8/index.html","ca246acca784082265749d68fb2fc50c"],["/archives/page/9/index.html","1329d4642749b4e01bb1929972c0e506"],["/categories/Devops/CICD/index.html","60ffbf92e02e147968d32b9dc946ad84"],["/categories/Devops/Linux/index.html","f4bd1e087411d6df7b96d6536b5c3563"],["/categories/Devops/index.html","c3f70179acc62309653f6164d1587569"],["/categories/Java/JVM/index.html","b94f20c72e2cbf582bf17c2afb75e8d7"],["/categories/Java/NIO/Netty/index.html","6b012d30e30cc71114fdaa1d74c8f7d1"],["/categories/Java/NIO/index.html","bf5f673e53506e44d739f4c869a8fad2"],["/categories/Java/NIO/原生NIO/index.html","ddf87c5ae692dbb2222f4dd0e5071486"],["/categories/Java/NIO/文件操作工具类/index.html","111948c906719b2baf9441cae63d4d4d"],["/categories/Java/index.html","47aa2be55b6a42330ff9ecee6b866829"],["/categories/Java/page/2/index.html","5203a30d827605ad5383a592ff33c846"],["/categories/Java/学习路线/index.html","8d073da28438e928b56d9be069a1b03e"],["/categories/Spring全家桶/Spring-Security/index.html","dd1ea092215540847b3618cee04f4a76"],["/categories/Spring全家桶/Spring/index.html","2eba0419a18b122914a80e45c8da5ddc"],["/categories/Spring全家桶/SpringBoot/index.html","df1141bbcdc2b9c3534f60291cdc40ba"],["/categories/Spring全家桶/SpringCloud/index.html","cae4ed29b298bde4a97c828e422dfebd"],["/categories/Spring全家桶/SpringMVC/index.html","1997a57e5dd36ffe1d7c8a1d29902c44"],["/categories/Spring全家桶/index.html","4c10c4206f5f484fffc1ed25273552ba"],["/categories/Spring全家桶/page/2/index.html","3b3efdc722ac79e09aa23ce24f03a11f"],["/categories/index.html","762b567f3acd6d9f035af45f33754a17"],["/categories/中间件/ElasticSearch/index.html","6891ef02f6dd925727bfcc6c00f5d77d"],["/categories/中间件/Redis/index.html","34fd5de19f0958f85eb09ce75598fa06"],["/categories/中间件/Redis/page/2/index.html","e8f1c2263714cc71814143e1baa2bda8"],["/categories/中间件/index.html","5b606e03fcd94a4e1690516dcf507b3f"],["/categories/中间件/page/2/index.html","13931413dd953df0b680456c3dfa2bc9"],["/categories/中间件/page/3/index.html","523b6f0d29b3d86a1551bf401b21f3b1"],["/categories/中间件/消息队列/RabbitMQ/index.html","14284ead868e136a559b8c16725be70b"],["/categories/中间件/消息队列/index.html","cfac18e3f004d7d413c2fcdbda2b9c6f"],["/categories/前端/Mock/index.html","075a1f9cacf2773a103bc9fc1fcb0df4"],["/categories/前端/Promise/index.html","77e240e81e94405cdd99045d97ed5017"],["/categories/前端/Vue/index.html","1464dcabb72ae42414e1258ddcbc259a"],["/categories/前端/index.html","799c9f0a59a49e2f3d2218abb0d30f8e"],["/categories/前端/jQuery/index.html","b0013d44fea5700981a01259e3be160c"],["/categories/前端/page/2/index.html","86362b593d3297130d97efe761227a19"],["/categories/前端/原生基础/index.html","a8081dc7c4585d0e68abe8765cb5e02a"],["/categories/前端/异步通信/index.html","8dac42cd1d8246a1f5ebe597d2a0fc38"],["/categories/工具使用/Git/index.html","12f9a5ebc740a49bd0366c6ddff49e01"],["/categories/工具使用/index.html","46a101d0d9f49d51f5af6fa31d829252"],["/categories/工具使用/markdown/index.html","e74eb0fe856abef0fa409306d2ca9547"],["/categories/工具的使用/Docker/index.html","7f2d944447d1d7626736c08bf1dbb0ea"],["/categories/工具的使用/Nginx/index.html","edf1678b37407035cf5757bcfc8d0631"],["/categories/工具的使用/Swagger/index.html","68174f60fc4d2ee59af167b24edbfcbf"],["/categories/工具的使用/index.html","9fcdbbaa0af57b863f7f95d3a94fcb2b"],["/categories/工具的使用/博客搭建/index.html","1a600676efc5133e04ee47710235be6e"],["/categories/数据库/MongoDB/index.html","e71fdb70ad8777c292dacda804881ff8"],["/categories/数据库/MySQL/index.html","fe4603801dffcd5cd5a27218da6f8c6b"],["/categories/数据库/MySQL/page/2/index.html","17f4cec4d2b9d4b2660c4aa2927a9761"],["/categories/数据库/MySQL/page/3/index.html","8f588b3152d0e0c2cb2af3a2de444e05"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","9f044cd93959c650bd67297d3b7f97b6"],["/categories/数据库/ORM持久层框架/index.html","6bc3ffcf29e4feb0c67bcb5f29546668"],["/categories/数据库/index.html","891779c986edc897bb3ede2e8103d798"],["/categories/数据库/page/2/index.html","e274eb19f68647133ef2ddc08dba0ef2"],["/categories/数据库/page/3/index.html","d6dbef345fc056b79af8ac1868e0c7b2"],["/categories/系统设计/index.html","5f04b33498e5832e729e4ce58ccc3e98"],["/categories/系统设计/page/2/index.html","bc63b919e9c65ccd1c45ca8133564d63"],["/categories/系统设计/分布式权限认证/index.html","f49b84dff1cdd2fefdc4c8aa52d05229"],["/categories/系统设计/设计模式/index.html","6a4b4531079f94e161c70f3ede96bc8d"],["/categories/系统设计/设计模式/page/2/index.html","764633c2690e407e0a47ba4707fad0b3"],["/categories/计算机基础/index.html","361ec70807e4d2e0b1f259e14302f9cb"],["/categories/计算机基础/page/2/index.html","60fa8d99caf3b248c1c6c877699f90ca"],["/categories/计算机基础/page/3/index.html","47ed078da2cc636af51795aa42e16249"],["/categories/计算机基础/page/4/index.html","89d3c9d81c3622ca8c515b953f341393"],["/categories/计算机基础/page/5/index.html","77e94aec23f9132ff5231d8dd756a8e9"],["/categories/计算机基础/page/6/index.html","4695b5e19bdcbfb27700f53acca109e1"],["/categories/计算机基础/操作系统/index.html","39ff0fcc264df3e9eaee69bf2c4c1472"],["/categories/计算机基础/数据结构与算法/index.html","d84f8ea6bca4104b57877f6fc15f303d"],["/categories/计算机基础/数据结构与算法/page/2/index.html","0e902a30235a76b7260cdcc8505c93b6"],["/categories/计算机基础/数据结构与算法/page/3/index.html","021dfa3b172ea31860abea4cb224f272"],["/categories/计算机基础/数据结构与算法/page/4/index.html","44e505288ead564e2e14108ccb460dc5"],["/categories/计算机基础/数据结构与算法/page/5/index.html","f220878fdff5fc06d58dad8adc1c1572"],["/categories/计算机基础/计算机网络/index.html","97ef92722cec41ddadb61c07a9b1d1a3"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","0a626202c928ff76d3b40aba997447db"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","e1bfd719d4f25e9d23c41289c3b5d874"],["/messageboard/index.html","3d207926ff89989a7ad42881d898724d"],["/page/10/index.html","fc8858907baa7866494eba47491e7fb7"],["/page/11/index.html","ab17e4c7ed2ac7e40633ed6b4b7de91a"],["/page/12/index.html","4a166640565dff7a9944b68eb62a0cd0"],["/page/13/index.html","5f4fad915c4821c28a79285435031c6d"],["/page/14/index.html","9274e34d9852df7a5b50a6f7e5d31590"],["/page/15/index.html","f2f9f61f85ba00c4e24490920a18b0de"],["/page/16/index.html","6f872e151e9e64a298fa852c2dacc666"],["/page/17/index.html","c1b2f7cedc7eb689cf1c084b4162c058"],["/page/18/index.html","87bc43100c7985d156f1b5320bc7885f"],["/page/2/index.html","ecfa5c615e540821e1613ac2a0a9bcdc"],["/page/3/index.html","448b2368fbb7396b5c6f76047a5b271b"],["/page/4/index.html","5eeb1e48430229194ad8f10d8dbe09ce"],["/page/5/index.html","0f66dcd1a3fb5fe04868d7712ccb0294"],["/page/6/index.html","50aa20c0e745042cbbba33c76e987877"],["/page/7/index.html","f33383bf26602291e5e4c9750ebbea3a"],["/page/8/index.html","c45e83f792fb96ef4102fa45930e1b66"],["/page/9/index.html","1db279dd5618cf545611ecb86ce0e2be"],["/sw-register.js","33d821627658b0faf02940553f66b8b8"],["/tags/Ajax/index.html","3b263b783c00bdce3ec815aa74a726cf"],["/tags/Axios/index.html","4720edb64ae00e5a00ec65d49b27c88c"],["/tags/CICD/index.html","ad4c899c323f87663707b93629c4150a"],["/tags/Docker/index.html","5ebb515eb798b20956be306278f4de4a"],["/tags/ELK/index.html","22bbe84e1ca580f52bf95d71319b7431"],["/tags/ElasticSearch/index.html","14dd18a76b4877c91e3e526ad819df3a"],["/tags/Git/index.html","30125a1728cd5849298217378937fb2f"],["/tags/H5/index.html","01c829339235e7869cfa21f7b87bc05b"],["/tags/JVM/index.html","1e879b303f2c3791a355b360eb2e3c5c"],["/tags/JVM内存模型/index.html","43be1e153e5e3482a8c62ffb5959668a"],["/tags/JVM执行引擎/index.html","ec088a1f9701dcad730f4af3e43bce09"],["/tags/JavaScript/index.html","538eabd7efeec8276fb28c9751687a2a"],["/tags/Kibana/index.html","d0800d9ce2c0916c87f5465615ccc2bc"],["/tags/LeetCode/index.html","2b27db2fc626361621ecbfe25be6f6d8"],["/tags/LeetCode/page/2/index.html","d91b9a4b71b6f25d7c990776fdb9542a"],["/tags/LeetCode/page/3/index.html","711b0ff3510155e4249f27d6b5233339"],["/tags/Linux/index.html","5e84a89b720af7321c865bc7f2085492"],["/tags/Logstash/index.html","ec830c9c0d3a04fd5f34bc6929cdf9b6"],["/tags/Mock/index.html","f628f51e8e15bde0e22ae432648e4f87"],["/tags/MongoDB/index.html","234d5f0891d384896b33c6b2693c982d"],["/tags/MySQL-事务/index.html","331da1a9e91dd2017c46a9f9789759a6"],["/tags/MySQL-数据类型/index.html","d27ecc0716dff9e39cdc5329b455a9e3"],["/tags/MySQL-日志/index.html","01213e66e527b9978752fe4d50f1d93c"],["/tags/MySQL-索引/index.html","0ce40cc9ad92dc0685d6aef01e9bdbbd"],["/tags/MySQL-锁/index.html","65d811dd3b9b826a6a7095d5dc48ef71"],["/tags/MySQL/index.html","a591fc55349ce130c86862682554f766"],["/tags/MySQL/page/2/index.html","eb63a21f86c0d4290d9e8ac3c59b06a5"],["/tags/Mybatis/index.html","826c55bfe4016676bbba0dbaa07401cc"],["/tags/MybatisPlus/index.html","756471775dc46933692665d85c431d1d"],["/tags/NIO/index.html","b57006d89b7636779aa04dc6b8990f61"],["/tags/Netty/index.html","1c6dd63f8de86b6e74dffcf8a8f744c2"],["/tags/Nginx/index.html","16230e89322598ee2f7ba20df4f89229"],["/tags/Promise/index.html","c4940dc58a7acb273ad9e425ae39615d"],["/tags/RabbitMQ/index.html","6480315beea45b5be814225581a93cd3"],["/tags/Redis/index.html","cdd103f0a55db2609ca99a7767165b60"],["/tags/Redis/page/2/index.html","5fc45b2fa9db0154fa64cd35635f5c50"],["/tags/SSM/index.html","ff9872a6c86dd442aea3b83cf0bb459a"],["/tags/Spring-Security/index.html","bfdf349e8b3513c472a337d2d3bd0b4a"],["/tags/Spring/index.html","715707ddf37044005836b3b9b3e9ed65"],["/tags/SpringBoot/index.html","8bd1df9ec7a8cea195b903eab28b4954"],["/tags/SpringCloud/index.html","9b986914524d2a8b5c0a375772679cd3"],["/tags/SpringMVC/index.html","912f90ad8d51a4e9e89673a0cda506af"],["/tags/Swagger/index.html","45c454f284df2a6cd428625a3854d3fd"],["/tags/hexo/index.html","8e2d1c5689afdec4a18afe6d021824ed"],["/tags/index.html","52abe2935d10d68f1d10938b107e4a3a"],["/tags/jQuery/index.html","42bb3546e21e7d71a369771f5c0f1cfc"],["/tags/java/index.html","22ad61a0d0eb5ac1f9b02b84133242b3"],["/tags/markdown/index.html","511f2f9504aa78631f731084fdcd11e8"],["/tags/noSQL/index.html","19f466ee232493d827aa54338d13ac11"],["/tags/typora/index.html","f6adf4a5deb350675dbf5939207ba0ef"],["/tags/vue/index.html","24606992d6ed57abe6cbe4c9ff4811b1"],["/tags/享元模式/index.html","e615109a388b0133d5c9c7c580c3021c"],["/tags/代理模式/index.html","7407cd41aa847fcc33b8d83fb3b68cf0"],["/tags/内存管理/index.html","c8eaeeec4f6e90c15af8d84549933565"],["/tags/分布式/index.html","548818b84c4a29ff87fd3c7f42e84871"],["/tags/分布式系统/index.html","21f18b19dd9f639177f9e55a4cd37f80"],["/tags/前端/index.html","d2d49319ad869b59c9ce2957e52a931d"],["/tags/前端/page/2/index.html","b421363b9a78280dac6707d71d5025c5"],["/tags/博客/index.html","14dcf126514a08c19b8462b142b4ffd5"],["/tags/后端/index.html","36cbf53088dd60038a404dd45da9253d"],["/tags/外观模式/index.html","bfc792adfd702f9da81f4732a911c9ac"],["/tags/容器技术/index.html","4ac50bac2882924cafa8e84d125a3ed8"],["/tags/工厂方法/index.html","5638604b59da0795041274a4c1ec82d0"],["/tags/微服务/index.html","3e9c97d6f71cf807acecd173fe5b96e6"],["/tags/抽象工厂/index.html","2c6216839956c871b3d0da1853ddc81c"],["/tags/持续集成持续部署/index.html","926946da8db498293d100c38d8fbab29"],["/tags/搜索引擎/index.html","78bc3371be7e9fb7f9534e821d9f9f0c"],["/tags/操作系统/index.html","41abb270ed93cb1b1cffb92d97d63dfa"],["/tags/数据库/index.html","d629c4bdd2aac22a21f25c6ccb1e637d"],["/tags/数据库/page/2/index.html","81480f383afd564018c6e42b6542d757"],["/tags/数据库/page/3/index.html","06a05fdda97e580fc7dc871d65a78c00"],["/tags/数据结构与算法/index.html","b5acf532da45d03e0458a38ba0b1c621"],["/tags/数据结构与算法/page/2/index.html","293adbc91f33732c23d0fe230594fce4"],["/tags/文件操作/index.html","1704db1f412bb976fcd353414f6d6693"],["/tags/日志/index.html","9e7dea2056491a41d1112ba2768b71bd"],["/tags/服务器/index.html","efbfacd25b9265ff24994f37b90ccfde"],["/tags/权限认证/index.html","9b1d46dd3d9ea83d4746863487f6c1c7"],["/tags/桥接模式/index.html","b3ebdde96db5f7438a1c44ca67c9d240"],["/tags/模板方法模式/index.html","9012e2d5eb501739bb39bfc77ac700d9"],["/tags/死锁/index.html","f2fb512233d4547acd86e9a4629f23f7"],["/tags/消息队列/index.html","74fba65353778903e7c713fac51ec405"],["/tags/版本控制/index.html","d655737ff8956e5a86c2f5a1691d4f94"],["/tags/策略模式/index.html","1869a4767fc5f62ed3891bc9df9af383"],["/tags/简单工厂/index.html","e2dd0d4a284d6982e68347bc886d4db9"],["/tags/算法/index.html","694b1aceb1321659eef580d013bdd8b7"],["/tags/组件化/index.html","e3e888ba5ca2cded68946cbf0bbf64e2"],["/tags/缓存/index.html","f39d855acd34215b96cbff630c4d36ce"],["/tags/缓存/page/2/index.html","f642ddc7625d9405776b702fd9ecda15"],["/tags/观察者模式/index.html","16bceda772db18dc1bd5aff20f3a81a5"],["/tags/计算机网络/index.html","919b1865b80b586bcf61b07c933dddd2"],["/tags/设计模式/index.html","36a4092df897f04f4cd84b69f69eab1f"],["/tags/设计模式/page/2/index.html","b861a490c181e9b3c46bdd91603cd1a3"],["/tags/进程管理/index.html","2ad1f32550121f136d06e429afda67d9"],["/tags/适配器模式/index.html","f2c56f192c37a0a599ab5efa1c942d11"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
