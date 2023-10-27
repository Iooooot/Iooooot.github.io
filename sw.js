/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","5044d08bce1ae497615b935a0c2a59bd"],["/2021/02/22/工具的使用/博客的搭建/index.html","a541d1474cfabb6e1875da27ce525cbb"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","e1fab20e5c5b7475e0095ca677e964dc"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","1f42397bd73adbeb2b33494d5976a274"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","fd2c8cc38b74eede5615f1870a7d144a"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","e61a07558f8e67b906a388b0ff6d494d"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","0378d9c9e3fe35780661e95a88db0849"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","f1b8b603fb417db261269a5bc5331c1c"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","7c54657edbdc7f6b9e625c0001f43aae"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","3dd15761744fffeed8ff1d54d36ec1a9"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","067d08e25331a178a93563c1ebd1a76d"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","5bcb289384fbc0f8e283b7304ac845ba"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","5cb71acfecb05395a74c692cbb136f83"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","73df7830194f85c224034aa302e56fad"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","3845f21491fd16a9193e662a739bf83a"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","fa12e553d8c519cca446461cce5842b6"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","939b828fafd584c3d7f5210181cb4652"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","40391b4c8d14a139c11bbc43ee0e51a6"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","d7ed88cd57a1f3f98b14e8c7e0600571"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","0dc5907c8055e9383edb6435801cd077"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","54d6f5f38c6791cc3f1d777bae60e850"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","5ff6e0045a4da20aed5c0afaa9921cb4"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","65fa623d55b2316f6488d157f1e4e681"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","552d72e0f9c99695e0af66455a568389"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","93188ae04db94573ba2ccaa885436999"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","248a159c81f2c825ea9d259ce66e178c"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","32a71f9aa73a96be496184d8ae479a6e"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","3fea2ce4b5c92ce9aa413564cb242afe"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","71ea3b05f4e12910ec07ef1dbe83dca7"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","cec3898893a20435f5aa2a84cd701d71"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","2cd1c2329a84587a9d7c6a91111665e1"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","57f85ead2b4300b0dd71a5ac89a7e9db"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","ef25d2f398d7e6470978d4a3048c1c11"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","ea57eb60f05e999f507249af4e6171d9"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","4bedd47ffe8994a9508352f88a743a1a"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","333d24b30767362bae5924290fdacecd"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","7f46dbef8fbaee14bd7befddb9ab7de0"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","050f4dd171522610bfd3d374a951aa4f"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","ba403731b5e99a29ea7c88ce429095a5"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","c554a740153ea2fa4086323d584fd91c"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","95eb9f6feb00bfa2bf019154b878410e"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","35ab365a39312e653470947af771af49"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","71f6de36000170e0fc3ffe61e194f696"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","c16423dd5affbe311e28c19afab84504"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","6191032b2826bf3077700c87df9fcf51"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","0cc03b0dc59bc65c3f45e10793f77975"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","f64f6a172570f3022d62336070eb0c53"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","bfdb6fae2fa00a4df3f5478c0fc416b6"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","49c05ff2f85d609fec5bd9b84e10d0b5"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","3e7ff2b8ec007b531eeafdfe7771d088"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","8861c7afc0116fa904b8ba327ab7f201"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","a7e01f91580cc8d9eeb91837eb77a2a8"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","52d368b791c95a474e4589413992d8a1"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","06a83e4f68133a7c51e34bc2c0fbe48d"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","d5771de1682bf4a9e721d9cb6806d14c"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","e0f8f1a993027ad76893ac095c7ac87f"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","8a380a497d61d4cd3d3f0fb1d8f28807"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","b4a998c5b9874afdb4fc74c1f65942ff"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","18e711c7676f0c6addd90d8f927e7421"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","7c571fa918757bbee709c8e22f768c17"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","cd4ab3739cdeb492ee540e9e72d828b8"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","a853be720e835962c38ee155b67d4fd7"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","0e912203a728445153bd8d0de4c911f2"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","1c485d7cd021bd626b3c13cdf24f8f5d"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","5ddcf41689db3bf1a11b2c7f2fb65f7a"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","485e6b11ddbeb8af7e4beebfec3b238a"],["/2022/08/17/前端/jQuery/index.html","25c597fbfc69abec230058f59ae78ba5"],["/2022/08/19/前端/JavaScript/index.html","28cc976d7e016eb8a03eb9dcd92297f1"],["/2022/08/22/前端/Ajax/index.html","c99de29003f71636fc1137279a119704"],["/2022/08/23/前端/Promise/index.html","68442575b3d1a488236b8c9c9d68c6de"],["/2022/08/24/前端/Axios/index.html","ac2b2e3ebae02e9d8fcbec60a7d66439"],["/2022/08/25/前端/H5本地存储/index.html","4c36dfeb08255e3d6d7a17b6d4ccc202"],["/2022/08/26/前端/mock/index.html","29803d7a9058d05f6ee3ef91025d1e1b"],["/2022/08/31/前端/vue/VueJs/index.html","30b7c360f5e32bd5d3dac50a73fc61bc"],["/2022/09/01/前端/vue/vue组件化/index.html","ed412e05dfd53f78bc9283ef0344d3ed"],["/2022/09/04/前端/vue/VueCLI/index.html","dc9eeb661e4ba887717da247b15153cb"],["/2022/09/07/前端/vue/vue实现动画/index.html","e9e69b2324343efff83119d1f255fe16"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","cb2a566c7bf82296fb3f784f3ce52dc6"],["/2022/09/10/前端/vue/Vue异步请求/index.html","a81974412c27b3a7155d66ed0b3dc7a9"],["/2022/09/11/前端/vue/vue-Router/index.html","a170c4f4e161c0c793231646d50ece2b"],["/2022/09/13/前端/vue/Vuex/index.html","cb9330bde8b1913c6f64169bfea8d12b"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","b1a79cea3b27fea4b3b0aa2a9497856f"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","b1370044bd4bf2210966160112ab1a74"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","ef18efbaa8c55f248d03d2b657485713"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","d3c0d995406bd1202c2fbb32bc50ebbf"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","c18c8be32d60a30f587418215449572d"],["/2022/09/28/DevOps/Linux/Linux/index.html","853a6368a01fe737c14b02557b13b51b"],["/2022/10/02/中间件/Redis/redis基础/index.html","3d0987d453a0954227f0d7a63feb34fe"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","b9b33792f8ea7f10a3f6bba9272cec3d"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","5129e3dc05242cc12a837b786997b929"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","1061ac9db40ba14d30959a095a129cf1"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","950c2e1306f579edf0d505b592c102a7"],["/2022/10/17/中间件/Redis/Redis集群/index.html","0cc86db71766e4b98a5e213f1e80bc52"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","33dfaaef859c32e63507afa5f4bdb1b1"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","9a609187074580876dbe0b712742e046"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","5b77100fe021f3500e40d684ed2ee739"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","a8fe5772057228631bc8bd3661c7e038"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","d1acf8c075ce79b1e0a6e331830dbd8f"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","64f6190ece1fdcd332f8d52609077711"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","fb612fefb6dc05eb7431b1e982071341"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","6075c386dadbb1d68a75256150f68bbe"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","f93810dc47be3b75a1b178c2074d4db9"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","aed4c48eb973fdd91ce984310fa77053"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","d26151d957cab67639bfbdcf86ce2786"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","69c99fc3318b60f064f3a4c9da6ec242"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","943bb40b4963056de0aab3b85d6ee762"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","6b564fcac8a3d5b517e42f3a4f5f65c2"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","76f7447cb78fb98874284244bc54f799"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","1099f65b4054c569dd7da36761134cef"],["/2023/03/10/DevOps/CICD/CICD/index.html","6f741735ccaca36bfff0d1e9417f0d81"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","892946ac2c5a8af80b28c94fa78de8d2"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","fbb9ba08f11ea97fdd5a770d83402dce"],["/2023/03/13/Java/NIO/NIO/index.html","6f4373343cd83d6fe1211d5a39cb8406"],["/2023/03/14/中间件/Netty/Netty/index.html","a226e37f0bd4e06d24d6ab0cc6c3ab79"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","db13b6cc06eda4cc212574543e3b2fba"],["/2023/03/17/系统设计/分布式系统认证/index.html","4841d5d64ebc9411989aa471468190f8"],["/2023/03/19/Java/JVM/JVM概述/index.html","d422a5fb14fd7f9321e33a082c16cedd"],["/2023/03/23/Java/JVM/类的加载过程/index.html","3d3b362481b9a823f5658f8cd381c599"],["/2023/03/28/Java/JVM/对象的实例化/index.html","a8f873ea0872fe0398af3f3fc44caddf"],["/2023/04/01/Java/JVM/运行时数据区/index.html","bd42d1faacf0b03c2f70a9fb371fcdb7"],["/2023/04/04/Java/JVM/执行引擎/index.html","cacb61ee7a0d57a9fc2338ad6306226c"],["/2023/04/06/Java/JVM/对象引用/index.html","20def6f8c9f7eff25a299ae46b77d38c"],["/2023/04/09/Java/JVM/垃圾回收/index.html","8db55ee7f469c9bf4203aeed16295c7a"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","903b1ef5a78a9493d9767555ab94259b"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","5de6bacc6fcec9f497ca2215c8dea6cc"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","58c06e290988f59333a76c3088f8c5bd"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","22260adf48ee634fdf17a09607d4948e"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","385e61ffa6bdf2b027a4c343bea23ef5"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","341f3db6d671a70db81196260d202b02"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","00acd83a658e83cd5cc1a874298e4b33"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","61618845fe666e113e37bac60757fb93"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","4df3f6b5d7a66940da7b11c6737fc32f"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","0ccac634c749b286cf921e6822fb6f9a"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","4794683fdf6b7beb9ad9469517f822f1"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","4ba5d4e527a13a6afcdeaf4bb6dac56d"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","7edc7d2fae5d284ed179e781bb578f8b"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","5f63ce3778a10321f0d744edad5e774e"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","9f552028def32fec38d4875ddf5820b0"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","3947a21ccde63f33aabac5e441b11d68"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","5342efaaea51d795f81999253a67a926"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","7f5d74b2168688a93de2ce06eca4b094"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","46dce2ceef7809e1caa2e0bc55a4b4bb"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","b5c3a5604d5b9fe7550d1ce48a3b1a36"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","6d4a29c40c0ae390088e030b316840fb"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","7875a73db1934594a23d6b6dd97b460e"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","b69cd308f4000fb4271cd46c1fe17f27"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","c0e9a216e13ffa734613bb7133a0497a"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","1c8237ac0bfd092ec71e15155d7cddc3"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","c4d73988bc6f10c5ec30792275185d85"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","0b956e67a9122f38b2b6fc3f9aa48b2e"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","dadd5200ae4a08433ad37b6e69d12212"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","c3d065c127564b80c05ff1ce45666a3a"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","285a158495ee0a61ebc386ea64674175"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","4064b88195f3011cc71a4ffd25c87d3d"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","7dcc0a7e15a9ad5054b8ad2a1ceaf28f"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","93c8cdfd93aa02c1339313a20bb41751"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","7341e72538060723970427d87dc2da05"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","2d206fb70d8e61a848572977a8fb3012"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","e41bce203292eeccc8a77b87b1f0a339"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","71552cb21dd57e277badf17f68b68f99"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","a772f9b09cdcb7c60576da05c07b075b"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","f93332d3ba8f85eb0d4b2a9514e6245e"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","8476a341e769315d345a3a11c8c1e753"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","80ba92d651f0b064c3d7d9b3f4cb6fd2"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","f4a6ac384ecd50e019fc04d65edc453b"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","de1d7518832c682d00eb3b87963365d7"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","3438517ffa938b373367d48a77f811bc"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","6607f448e1060c0cb92f158df5498bb8"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","59b013da3d0672f927bac55e3b7c829b"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","f693c0d912e0629debc3e662e249ddb2"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","dd9546b2dd6b73db432a97e0891c5cf6"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","17be1023efc7d71696f2b25b96a28aba"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","a25bad1a51167103ed0d72a83a7f2a07"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","4c2a37a25e4367093f15229a5db65ebe"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","b22c93337f8e439ddf0b9480237b0914"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","7aaeccf456d1a7b63f24b4e4ee2e129c"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","509ae6aea14b3966f02b3932702caadf"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","8b5ab627e5b31e8cc465d17f9fba3d77"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","ffdc709a0fc2c532d3f5a4cb3665ce9c"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","87cb66dfb2048d83de6ae684b53ffcd1"],["/2023/09/04/中间件/Redis/Redis事务/index.html","eefa982042f9e5345001732863786fb8"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","3d90967c596b5d4cbb8368c1526126e2"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","fe1ce645a5830aa50c1ad3c760b63599"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","1d21c257568be63d822d2ffc1a50fd6b"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","191c5545b06507b1a25f76d939138ce9"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","c2dfa743751fa7e55649bb96559d7837"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","5b1642fbaca1aaf4ca0dde8d66671776"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","7b57036b3a31c251b3cdd97921b12375"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","cbe4d1f39e8afc3c77445bba2cc13922"],["/2023/09/22/Java/NIO/零拷贝/index.html","ea3af9576013b723ecdf01d577670e39"],["/2023/09/24/系统设计/JWT认证/index.html","5cf1ab7497a8e9634580e8f2311bafb8"],["/2023/09/26/Java/NIO/Reactor模式/index.html","ce45eea46843e9f579a86a748f114987"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","d77bf885d0f7d992eb579175807c54aa"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","da46ff482517f0f50687104b7d1e69bb"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","52fadc527a141bc0fb2d714d1e647bd2"],["/2023/10/09/Java/并发编程/共享问题/index.html","c24bfdd5183ed417ee9d63fc4bd06366"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","6367ece3cff1fb8cd8060ec3cf68fa8e"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","d37fdbdcf01838c6d1b8ae48d321e1e6"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","8a42fdf846a8b332eb514de5daae7a02"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","57cacfa4fd9af378f444fdce4051e1f2"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","c034d732b2127c14980988623d08e260"],["/2023/10/23/MySQL数据异构同步方案/index.html","35a5fa5a3341dcc3adfe3c46fd72a3ed"],["/404.html","c116a7efebe54026327353748668edb4"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","0e233bf6cf9c9f6d9af6304b19c62230"],["/archives/2021/02/index.html","2a61ebe43197d8a1e4b809ae74aac14c"],["/archives/2021/03/index.html","f2ad2db339374584f815278f59ee44c6"],["/archives/2021/03/page/2/index.html","58780877026b15b1465c91943e2895ec"],["/archives/2021/03/page/3/index.html","59888016f9b592ac37aba20d11fd9c84"],["/archives/2021/04/index.html","e53fecd9b6fd1dc1e5ad0ed88d3b811e"],["/archives/2021/04/page/2/index.html","0a7c0865a8171a74cabc698be9a8f366"],["/archives/2021/05/index.html","ece66166755d6659f546848385b3dfdb"],["/archives/2021/index.html","7b7b2d7ec0d84b4aaef5de05b5ad7e9c"],["/archives/2021/page/2/index.html","3432a61f9ab435c4a43797a5ab47d621"],["/archives/2021/page/3/index.html","fc683713bf00a7124b37ac3a81d5e373"],["/archives/2021/page/4/index.html","3fe282c50692448c29852271138f8ffe"],["/archives/2021/page/5/index.html","a16742b3224234a40b63946dbc4c747d"],["/archives/2021/page/6/index.html","02157c1851e94cfe23847a163f5f75f6"],["/archives/2021/page/7/index.html","646c8b33bf1d497552b43995ceba7994"],["/archives/2022/01/index.html","564695669daa19bdcfdd10c967403b01"],["/archives/2022/04/index.html","2c36c30d817595de66bcc55cc4661c4a"],["/archives/2022/08/index.html","6a211cf653bb62c9407d362dda94fdb0"],["/archives/2022/09/index.html","7a038467b7ea9130c6e3a18f1bc297b2"],["/archives/2022/09/page/2/index.html","3e4bc84a3fa3e1ecd396bdfcbc9ae058"],["/archives/2022/10/index.html","43bc9e1fb3af04f01fff9ec7f83d7d81"],["/archives/2022/11/index.html","77d148951789b1da938aed37c42d60bc"],["/archives/2022/12/index.html","9c7b061edede1d4caf44c8b5304226b4"],["/archives/2022/index.html","d4fd4f79796161fa0ecc39057ef1322a"],["/archives/2022/page/2/index.html","f6999dfa0d77dbcee4cd0c8423b11557"],["/archives/2022/page/3/index.html","409fb53709674212f786a9d705791113"],["/archives/2022/page/4/index.html","981762555a3bd43d55ad0e75d08da615"],["/archives/2022/page/5/index.html","c3dfdee1a322bc4c0b54bc12a4243db6"],["/archives/2023/01/index.html","adcceff4f51cee48678c9d75a5c35723"],["/archives/2023/02/index.html","e26f5861a0c885ddc2fc8940be58159a"],["/archives/2023/03/index.html","b67bab26d900caf6ee62440c0a8d594f"],["/archives/2023/04/index.html","9adb27cde9d07294e99c20fa15bfe900"],["/archives/2023/04/page/2/index.html","ed5d6837d4e3582654246103b7e1abef"],["/archives/2023/05/index.html","66fc15f11f2096959dc05542695116ab"],["/archives/2023/06/index.html","1e0066a097943611c382b326db720f0c"],["/archives/2023/06/page/2/index.html","bc239f332c76ab2d7185586ac3ba3b44"],["/archives/2023/07/index.html","2c411cc3141030793642c53a7f589609"],["/archives/2023/07/page/2/index.html","6c8a68c2f833f888452390821f44b99c"],["/archives/2023/08/index.html","ed8ee9baa98edf10ceb21721459e2c0a"],["/archives/2023/08/page/2/index.html","ca9af99732e8b9d51d3b334169d0e0ab"],["/archives/2023/09/index.html","6473c0ca33db0f0d5c91fd86be859372"],["/archives/2023/09/page/2/index.html","633906cadd5eb7c0a7ff221da2c278d3"],["/archives/2023/10/index.html","55471f3034d77d109266a264bdff6ce9"],["/archives/2023/index.html","46f3651dfd69e9dea7222a602b3eddcb"],["/archives/2023/page/10/index.html","fc7b59c8b2b651713fee59589f9929dd"],["/archives/2023/page/2/index.html","2f6e807bba12bd731149e593962cd774"],["/archives/2023/page/3/index.html","6b58104f70fc117b3c98d1833087277a"],["/archives/2023/page/4/index.html","6533963b80cc6607137328ebc4b8ac43"],["/archives/2023/page/5/index.html","c8bed66c6222cce9588a61ac812e5c83"],["/archives/2023/page/6/index.html","def3c404881f7990a98766144d7ff3af"],["/archives/2023/page/7/index.html","0bf0030d8328c9970d5968be1520dde3"],["/archives/2023/page/8/index.html","9ac899c7a4be9f8db814cc5834d25e9d"],["/archives/2023/page/9/index.html","ae44c8d3f55e6ae3c0a211bd33237a2a"],["/archives/index.html","a34ecf5a66cef20a74916cfde9cffad7"],["/archives/page/10/index.html","41608b59fc5e4ac14abdc112680f6a0a"],["/archives/page/11/index.html","c08440d6177e40615359745a128bf75d"],["/archives/page/12/index.html","d710892d12bf7018a6f33c94bb4c0443"],["/archives/page/13/index.html","ceafa1579a1e69ce9c791202271dd08c"],["/archives/page/14/index.html","9b61fc1f14ab905d14a747aeb2ab4ab4"],["/archives/page/15/index.html","4b1badbe1a4f3d23e0a0418b514729a7"],["/archives/page/16/index.html","eb0d0666aedb1f645c21be66b6815c4c"],["/archives/page/17/index.html","8809ee48df4632b343f5950827c7490a"],["/archives/page/18/index.html","85dc5c2809e092283afc2a782b1d4a31"],["/archives/page/19/index.html","da1f12ea0d359a4820e1cfe3555bc9a9"],["/archives/page/2/index.html","1d0b9febd17a6f77db8238d9d5b8b268"],["/archives/page/20/index.html","aa5532a605b9ccf73d705f998c32b4a0"],["/archives/page/21/index.html","19edd9861db5c9eaa70959911e257f4e"],["/archives/page/3/index.html","ce3ce54b72d9c5f3df5c0aea80ac2760"],["/archives/page/4/index.html","4634e09a795f2ce8d1766cd48c5862fb"],["/archives/page/5/index.html","4252e06865637e4a0e059145aa1cabdc"],["/archives/page/6/index.html","cb739c24acfb15768810f653cc6a4953"],["/archives/page/7/index.html","59ed3d53b174eda3d1b8b8a0f5cfc47d"],["/archives/page/8/index.html","4f154df0e845f3a7fef727052c6105f8"],["/archives/page/9/index.html","01ba7f4c0a162ea5bb1e8b2eef78bb26"],["/categories/Devops/CICD/index.html","9e5d545107b9aff5a58e9a8ab5bf5ff4"],["/categories/Devops/Linux/index.html","afca58e83a0dddfeaf1c03bdcbd46563"],["/categories/Devops/index.html","76c2c65e5f6ab2ef5590f38838489ed4"],["/categories/Java/JVM/index.html","1a4fdad464b4a03ee5c6d6ef42fd256b"],["/categories/Java/Java基础/index.html","fc6ae3b2cf86dbe514118c37b45f5328"],["/categories/Java/NIO/index.html","822c7aa3705758b8db97379f511abe04"],["/categories/Java/NIO/原生NIO/index.html","e781997f404e5cc8d22af102544cd646"],["/categories/Java/NIO/文件操作工具类/index.html","f76f6d754e3cbec2939069573b02f5ba"],["/categories/Java/index.html","5498349bcffd2df599497d5d996d7c00"],["/categories/Java/page/2/index.html","3310190b330a9ebfd98dcfb675b5ede1"],["/categories/Java/并发编程/index.html","5d3a912864feb4aec53e59a5e5681d63"],["/categories/Spring全家桶/Spring-Security/index.html","d33ceef974c71caaaeb5c0997afaddff"],["/categories/Spring全家桶/Spring/index.html","c81067dc6f4aff7926873d786f5a4de1"],["/categories/Spring全家桶/SpringBoot/index.html","6f02e3611cb8ee63bd8c970ac9c23457"],["/categories/Spring全家桶/SpringCloud/index.html","f0f194414a578eeef357045d30ef2c68"],["/categories/Spring全家桶/SpringMVC/index.html","5f8ac799dc055d097b23b0c4944293d0"],["/categories/Spring全家桶/index.html","cc690424d94f93f74795c9a136581c54"],["/categories/Spring全家桶/page/2/index.html","058112743ea5ab49fe16ef338fdcef74"],["/categories/index.html","5b92e9f28ba0067fb6f53b88c0e8232e"],["/categories/中间件/ElasticSearch/index.html","34fb31fcab577af074f66aa0e17735fd"],["/categories/中间件/Netty/index.html","f694d741f36e97a34a52f59a736a9f6f"],["/categories/中间件/Redis/index.html","cec357af0e1d1e72d8c828328246bfed"],["/categories/中间件/Redis/page/2/index.html","f7f268d7c8bdb3c766f8a7cb3f48ca04"],["/categories/中间件/Redis/page/3/index.html","998694056ac76e9f9f3d21a39868eff2"],["/categories/中间件/index.html","e37dfcd139376ca5cfa77c6dd8681a95"],["/categories/中间件/page/2/index.html","eab5638de5a2029bb7d3e672cbc9ead6"],["/categories/中间件/page/3/index.html","0b58e8aee98bca4697adabb890131ef6"],["/categories/中间件/page/4/index.html","437113e7e9d60bac3d263f2b4ec913e3"],["/categories/中间件/消息队列/RabbitMQ/index.html","082b9e259396b45eaff2d9accbe288c1"],["/categories/中间件/消息队列/index.html","c36ddd0a02c8eadbc26c94c60e10feab"],["/categories/前端/Mock/index.html","c92adaf39ba3e157d3c8804c8b591c15"],["/categories/前端/Promise/index.html","1a503dc5e02fc82261b3baee51a10a65"],["/categories/前端/Vue/index.html","005daa62ca8e19bdd88a8beef093a64c"],["/categories/前端/index.html","536ac44647bfc9010d2b3ad46a8f7ef2"],["/categories/前端/jQuery/index.html","44b40715f040296e2ec1f395c6c528d1"],["/categories/前端/page/2/index.html","df4b0e1fb95f2de6eecece8af757931e"],["/categories/前端/原生基础/index.html","73dabfd154fb67713f9b90ad1c0fba4c"],["/categories/前端/异步通信/index.html","613b5867292e226ace0a038eb443a9b4"],["/categories/工具使用/Git/index.html","2c73fa440f1d00d473d31c1adcb13f3c"],["/categories/工具使用/index.html","7f61d90f7c0700fd5b901d4bf7f2ecd7"],["/categories/工具使用/markdown/index.html","8ff0c7ff40e5f7b6bca202544c123ab6"],["/categories/工具的使用/Docker/index.html","884b37348ab612b3f23ddee059a67e24"],["/categories/工具的使用/Nginx/index.html","06b57a9959002a5a4d247e055aad754e"],["/categories/工具的使用/Swagger/index.html","2979605349c2294e5c7188b4140172dc"],["/categories/工具的使用/index.html","e24591cd14c5b882ecd841e9a51abb53"],["/categories/工具的使用/博客搭建/index.html","feb3da9f2038daef19b2466df296ac57"],["/categories/数据库/MongoDB/index.html","1b6db2b687118283744046ec16b2dbdf"],["/categories/数据库/MySQL/index.html","800af1130e077423577899b1ff60c682"],["/categories/数据库/MySQL/page/2/index.html","eba5100625bbe6764fa2e226d3e2ae91"],["/categories/数据库/MySQL/page/3/index.html","8181809a11d87c518224692eadf5e3d5"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","ce05aca923180ffccf38349071c31ede"],["/categories/数据库/ORM持久层框架/index.html","df9e1b513f01ce64677a582034db7df7"],["/categories/数据库/index.html","54b843dfa429e1d0753aafc572d432e5"],["/categories/数据库/page/2/index.html","23bab7a4eaaaf257cc17793259a14ee5"],["/categories/数据库/page/3/index.html","060d548637e4fea14c58d7c109bae5df"],["/categories/系统设计/DDD领域模型/index.html","b5444910bd6d315ba7c640aa3bc2d06c"],["/categories/系统设计/index.html","7f0db08b25514408ff1b78f03704a869"],["/categories/系统设计/page/2/index.html","9d41e31f5bcacc9cb724694fea4a54ef"],["/categories/系统设计/page/3/index.html","b80275cb70cd59ec28020d46c22f8387"],["/categories/系统设计/分布式权限认证/index.html","0b0b4dab8aee3227fcecc447627669ae"],["/categories/系统设计/分布式系统/index.html","3afa76c0dd998f37764fc49b44018bd7"],["/categories/系统设计/设计模式/index.html","872ac91b07b678314eb08f32348dc172"],["/categories/系统设计/设计模式/page/2/index.html","5ac330584d1cefceb41dfbfaa3fea63e"],["/categories/计算机基础/index.html","4b2f5f9b752cdb13fec3741b185c8c2e"],["/categories/计算机基础/page/2/index.html","4ea5a6f03f61e27eee4e851357fe8d63"],["/categories/计算机基础/page/3/index.html","ab2684653ab83ec63c38c4477095b1a2"],["/categories/计算机基础/page/4/index.html","159a3a1ab30b1967c6cd6a74abe6a978"],["/categories/计算机基础/page/5/index.html","ee43c9fdab129299fcac4300d252c56c"],["/categories/计算机基础/page/6/index.html","35f7b4d7654f38de6e4d49184b7b4714"],["/categories/计算机基础/操作系统/index.html","2a5136e1dd27788d748c1d86ab5f4796"],["/categories/计算机基础/数据结构与算法/index.html","aa35c1dc0ae8903fe09d6217a5cad846"],["/categories/计算机基础/数据结构与算法/page/2/index.html","88330d4be1f9686f3603a5e94da89042"],["/categories/计算机基础/数据结构与算法/page/3/index.html","6a53aa850e4625bd4f61d56ee7f51ed1"],["/categories/计算机基础/数据结构与算法/page/4/index.html","565963a4d5ef4e1b85f1c6c2bd1c1afd"],["/categories/计算机基础/数据结构与算法/page/5/index.html","de19fb5d84c455f11d84d186bd19d3ce"],["/categories/计算机基础/计算机网络/index.html","2d1fd5f68fded1276f2427787d14e68c"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","39ed96d26e0a4c029746dcb2500e3664"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","a332699030a593ad255aedbc282a2069"],["/messageboard/index.html","20337bc7a91f22d40075c9b998fab8e9"],["/page/10/index.html","22138a120421da79ca17386a27731f9f"],["/page/11/index.html","a782dc8ad49544ad05e1897647a9449b"],["/page/12/index.html","43e79a993d4ac49b93047e04b4242b47"],["/page/13/index.html","79a7e8de28049ada1f8256725f7403eb"],["/page/14/index.html","82bf9fdfe90adcd35fb0ce69a0640844"],["/page/15/index.html","5c96e851974e4b6ef07c628d870ea338"],["/page/16/index.html","597c3202ecbd3e374e8d14d487eced5c"],["/page/17/index.html","6f3b6203e1b9634d98ffd7ab03c3438b"],["/page/18/index.html","1375c74fa4b274fce466460c0129f5ca"],["/page/19/index.html","c492244018a67ee52e79f7538936ca4f"],["/page/2/index.html","6ea4a988caecd49d2cae85d549139b6c"],["/page/20/index.html","f6476aebc1ce5c1ea888b2470797ca4b"],["/page/21/index.html","2ec7a5495f7aedb6d47cf543d201b8a1"],["/page/3/index.html","3eac6b2580c72de2c03fd6dd4ffdcf3a"],["/page/4/index.html","5376ae78318e537e90a286cf52ab694e"],["/page/5/index.html","7933da5972b510b7c0ee01365dfb2163"],["/page/6/index.html","0afba6036665ebee25c4197b4cfc7c6f"],["/page/7/index.html","de4a0c712f8e46d4ac2941197158817d"],["/page/8/index.html","651011f763268d054ef1e0f35f1ea5ff"],["/page/9/index.html","875ee06d6ccf08d7767e056df6dd32f5"],["/sw-register.js","df55463a9a9dfd3784b37e10b9bb3ca5"],["/tags/Ajax/index.html","0aeaa4c6d812096b78632fa8c136cf63"],["/tags/Axios/index.html","f7068818553e00d58e6425ccf71ee324"],["/tags/BASE理论/index.html","74ab60b359e9ad4b01f879e4f8d325bc"],["/tags/CAP定理/index.html","ccadd91af1a95563e9b80415e1c64cf1"],["/tags/CICD/index.html","0b1bd17ef8aaa6f2bb5a30bdead9e881"],["/tags/DDD领域模型/index.html","da3ba661795f999d3be0ed0eba0133aa"],["/tags/Docker/index.html","d59e4c8c95fffdb9b3dd564d71c31ac2"],["/tags/ELK/index.html","c1399094ede5f4ba185736f39e36f9ee"],["/tags/ElasticSearch/index.html","845229b0129d243223b2ab881b07573e"],["/tags/Git/index.html","2792c66ef44577ff155025002ae4f208"],["/tags/H5/index.html","34eab78f066679f1d2e042695fba637a"],["/tags/JVM/index.html","6ee672ef8cf3008b13d05a312e0b17db"],["/tags/JVM内存模型/index.html","5cf4e426f48d15e51f7bf4919ea3aada"],["/tags/JVM执行引擎/index.html","6680733c2ccaa974332195cc073f8e3b"],["/tags/JavaScript/index.html","85e2d5145d10ffc14bb09018db73663c"],["/tags/Java内存模型/index.html","33b5e132f2f7ac0b82be078a69c3b146"],["/tags/Java进程线程/index.html","d65fb8fb491cb8755efa398ed6c98e16"],["/tags/Kibana/index.html","61bab1516a3bae52f2df945000f0fae6"],["/tags/LeetCode/index.html","8b0147f723d8d94ce3b58e8096feb5ac"],["/tags/LeetCode/page/2/index.html","243c660bc1d110fdb21b93f694bf0a80"],["/tags/LeetCode/page/3/index.html","231181776b039ebb49b50c8c6dede9ae"],["/tags/Linux/index.html","23511cd58f487877659aa0f2e7a3a6e3"],["/tags/Logstash/index.html","0f2ebd5fabf87351f30cddca36f8ef70"],["/tags/Mock/index.html","05fd5f8f6804c9117cbed393726b1f24"],["/tags/MongoDB/index.html","f21e3c7d15aa156195cdda2c24fed2c2"],["/tags/MySQL-事务/index.html","df7e10d2262ee3d74d7f481d1ff43c10"],["/tags/MySQL-数据类型/index.html","c7733cb47446c276ac2b0585742d6297"],["/tags/MySQL-日志/index.html","415ce3eb160810991fee12fac0a6362d"],["/tags/MySQL-索引/index.html","d31c50d9896bcd4485d0431847bc445a"],["/tags/MySQL-锁/index.html","c7a5524d2de33289187c77ca30f9c4ac"],["/tags/MySQL/index.html","88eb07307863d896443d83ba80441b66"],["/tags/MySQL/page/2/index.html","54e3755cd162e1b13262919b3572e201"],["/tags/Mybatis/index.html","e8ca092e9081c3446d0f649791c04de4"],["/tags/MybatisPlus/index.html","c541105d8b5920c60f635b50f6f45eee"],["/tags/NIO/index.html","4fc0c9b4652d57589062da11db5e1c75"],["/tags/Netty/index.html","3fd5294ee2e6972ab7b406f119f77fe1"],["/tags/Nginx/index.html","fdabe7b6a648ad842a9eaceb1f7e9473"],["/tags/Promise/index.html","92722ac055c219ea3dd32c9714265a0a"],["/tags/RabbitMQ/index.html","1e7ccf938a667447d75df8340f9fb8f3"],["/tags/Redis/index.html","2458f3cd3adb2456b71c814be2fe5a55"],["/tags/Redis/page/2/index.html","317a315e88e68cbf3fb2c7547dcbed08"],["/tags/Redis/page/3/index.html","bddfc5b92d93760307928b4c72b1fda4"],["/tags/SSM/index.html","e8c7a3de457e85f31a05b7437ef88d25"],["/tags/Spring-Security/index.html","0e254338a9dd86145e27fafd0d164ac4"],["/tags/Spring/index.html","997bcf48d581e1c94772746d91d6b077"],["/tags/SpringBoot/index.html","b0b99b2d4b0a71ff0516e635800e3415"],["/tags/SpringCloud/index.html","5f4a2c9b16334d272712cc6ea6a56937"],["/tags/SpringMVC/index.html","4740a1d67f68acbbfc8f3dea185f40bd"],["/tags/Swagger/index.html","2a56b467258087697c461c8d6081263e"],["/tags/hexo/index.html","de6de2db2887a42e7b2fbc371caa7377"],["/tags/index.html","ff55e11e3e01ab18a1cab2f6753b15cf"],["/tags/jQuery/index.html","51c208e369c6b601c38cca80d417894c"],["/tags/java/index.html","c102f3c5be8a907537dcf51143b303ff"],["/tags/markdown/index.html","4c28065985bace322130a6ef3b18dc7c"],["/tags/noSQL/index.html","14788288771a7415adc54e8f512084e9"],["/tags/typora/index.html","c438818a623c4a267138cb6816ea840b"],["/tags/vue/index.html","880e9a911d3c048163f5e52a4446ca0c"],["/tags/享元模式/index.html","69302fbcd794ccf286228413ebfa03ed"],["/tags/代理模式/index.html","70abcd44de170a9987fb27433001cfcf"],["/tags/内存管理/index.html","05cc8cf0aef46c8933bad2c533e37032"],["/tags/分布式/index.html","e1be0afc10a57db52b9475054d515b89"],["/tags/分布式系统/index.html","b7edb31941ede34b046b9e11fb6cfe93"],["/tags/前端/index.html","6d5bda5ba7423f134ecd972a4d79fb31"],["/tags/前端/page/2/index.html","2d16eaf5405704b14ad61b049af7ab06"],["/tags/博客/index.html","b9e10cbb9502c0e31bb91d42ac497b55"],["/tags/后端/index.html","09f5b88c0216dbabac991c7e5d24db18"],["/tags/外观模式/index.html","e1b9ab06ace9c93a56798e37b922f808"],["/tags/多线程设计模式/index.html","ae852093d3186e3e25a307cfa163aea2"],["/tags/容器技术/index.html","e77b80e8e8e439f7460ffb70009216ce"],["/tags/工厂方法/index.html","f52a3150242c2d26b47ae9650ac48d15"],["/tags/异构同步/index.html","963b4f5a246fb13d3b9c151d2ad80777"],["/tags/微服务/index.html","b6937b6e85115c244d702714cc0f5fd9"],["/tags/抽象工厂/index.html","bc74e8b199df09d9ccf2a102c23fd92c"],["/tags/持续集成持续部署/index.html","2954ca15816b467f340c9dcbe51813c9"],["/tags/搜索引擎/index.html","84716f679c4855e751491ae16189225a"],["/tags/操作系统/index.html","c36ce820c662d1a0fdaafd26cec5ca02"],["/tags/数据库/index.html","251b9d3fe9b0b24ae796b23972518461"],["/tags/数据库/page/2/index.html","4ac3e2938e2775ed40a6e52b77e6a0d0"],["/tags/数据库/page/3/index.html","0603434c913aa013b4d630105d83e761"],["/tags/数据结构与算法/index.html","a237513ca502ebbe984cc0cdf672abc8"],["/tags/数据结构与算法/page/2/index.html","9c299698ec7f5200d5ba5a72d26a62a3"],["/tags/文件操作/index.html","81e79fbfc7dec3432a9aafc66519757c"],["/tags/日志/index.html","d09882c6016f6e27a6d3d94516e5b5b4"],["/tags/服务器/index.html","f73372e6ffce1e5eb1ef82b4c0facd22"],["/tags/权限认证/index.html","e0eeabb30848e8c3e5641882f009d1bf"],["/tags/桥接模式/index.html","a85bc4afd64c0e6ee48884decffaca69"],["/tags/模板方法模式/index.html","eb4c8b9a1a8d2a57eaa220940810a7c3"],["/tags/死锁/index.html","73e5c0eef8e14aa830eda3fa6d845f60"],["/tags/消息队列/index.html","217020453d99b35f885a7a13d50bf108"],["/tags/版本控制/index.html","aac015e3785e6d97864a035d0a030ca3"],["/tags/策略模式/index.html","e1b003a85766a2a5351a6d0114d3e785"],["/tags/简单工厂/index.html","39011451a6cb22c7acca6c90b94840fe"],["/tags/算法/index.html","df3906c210fbd219883603981e6b7c61"],["/tags/线程活跃性问题/index.html","8d66ca45331e519efd8b67a17f1a68c6"],["/tags/组件化/index.html","d9c9dffd957750680afd4676fef298fd"],["/tags/缓存/index.html","e3e303f0b84156ebce9f2806b2c677bf"],["/tags/缓存/page/2/index.html","464e6bdc8e536eb716b8a7d62182b8e3"],["/tags/缓存/page/3/index.html","bcd03c96a6ea092c5129370abb931e3a"],["/tags/观察者模式/index.html","4b0816408011b124cb617f4fdee29016"],["/tags/计算机网络/index.html","b18db78e72816e55f94650733e8a8ced"],["/tags/设计模式/index.html","8fafaf569600383dc0f24624971b618b"],["/tags/设计模式/page/2/index.html","df7c09e226303c00da16db3fe524689a"],["/tags/资源共享问题/index.html","059ca18ca21ec4a521db2d061c31d6c9"],["/tags/进程管理/index.html","21059311555d24a3a8a657b900f2a509"],["/tags/适配器模式/index.html","c0435a5b0ad5c961010f28c4ebf353ed"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
