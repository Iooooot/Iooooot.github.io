/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","5044d08bce1ae497615b935a0c2a59bd"],["/2021/02/22/工具的使用/博客的搭建/index.html","a541d1474cfabb6e1875da27ce525cbb"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","e1fab20e5c5b7475e0095ca677e964dc"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","1f42397bd73adbeb2b33494d5976a274"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","5a675e6ac52f23cb9802aa86c13c37cc"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","e61a07558f8e67b906a388b0ff6d494d"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","493e345104a1ab75d2121b43b01886f6"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","ea0118b425cd82e9449d3e043f7aa805"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","37d7e460ef209f4a5ab7547af7319c9e"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","3dd15761744fffeed8ff1d54d36ec1a9"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","12975191948e05adafeaa59e77020324"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","fed4df873235da8de5aa5dda31a56e9f"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","73720b15c5df0909b713ce917f41e0cc"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","584df4b80e027c1fae9d3b614c3ef3c6"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","5cf6423dd897fca7d805d8e561fefdc4"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","6911b74971e7cb09602dee95a6987a8f"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","fa6620c63fd2fc7bbcc11cdb39e54cec"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","1dd042b60003a5fbdef1c7e34718a2eb"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","d314bc7ed83a0eb0de7eeb393df710a7"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","d34a147bf45e68f788218ede3acd08c7"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","64c9fdf7f7a352197cc2b9d6cae03599"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","c56ebcf45f3fa0fe97742c182e64000a"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","290a5b0e6d6286f0e6db4aebf0c1882f"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","487887f3faca003bae155ecd035dd867"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","b514641f4ad770c400441c60e1f31eed"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","7c7bde7291dc73f652fc504a1e930d80"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","2eeadd708a4841faebd2afe5c407d66c"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","3ac45a452a89aa140546c2b892f55e1a"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","624f2c3360ef67b4bb2c2ee80c9efa12"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","9bb27fcee10f9e8f1754bd3c25a2e468"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","4ab326cd03138ea8f1db229be41b252b"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","81a4792f9784a42c30dea19cf08658a1"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","4b16fe32a3f30176e57d9b88350f1870"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","24b9aa20838dc351ab12947c36897721"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","64b95297a9bf9941a116b99cc7582dd4"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","551c365a18235b3724b15188b218a1d3"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","4bee02008ce7901679ebd3939ab4ef74"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","034645c0be8c1c3d1755cab787569689"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","4e0e3cfad71126b8c675c336bfc2c568"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","856843a63c56b7621d13ad825d974f76"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","83a5bb5b24be14418de473e3f330433e"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","eb80c7fa6fec017cd193f39a291b59c6"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","d08f516c55f4ba0855d00c026e57f406"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","562d39e047d45af3d4481f9edf2c484b"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","08ec7fa495149a9ee265640e89d1b4e3"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","eee9fe5c2dd55f74c400fd81b3383456"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","dda2141365a4f875d06ef16cad4069ce"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","78e1d8caffd61cf1712bf1b11be6c220"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","571fe676e8a7ce55fd4d5968d4e2ff3f"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","d5aa9133665f6a0be4b69f4104d006d3"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","62741d51ab8e55173b1aaec6aa3a39ec"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","74462f603d040586d96683d2dbd19087"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","d1b184a87499a29046c42ed662672b08"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","9fa9c00a7dda1432a41ed8854a6b69ab"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","d9969b34c22a2e3c2576ba2dea2e3318"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","6509d560bb8fd83f7de4fdee5fc4be4b"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","2d854f09a1f4fe03197a342b74d7abf6"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","8352f32d562cb685f35c3db1f49ca0f7"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","ba972a9ac4e0fe85c0e9e994f08eeab2"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","b650d5212321627116dd53d87ca0b46f"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","f614340c515bba700494064e30bcf0c4"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","d49213faa2237d0a020b0849b6c4f4a5"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","c9122bcac5ec4c97521c450527776575"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","1c485d7cd021bd626b3c13cdf24f8f5d"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","5ddcf41689db3bf1a11b2c7f2fb65f7a"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","485e6b11ddbeb8af7e4beebfec3b238a"],["/2022/08/17/前端/jQuery/index.html","9388e5010567a8d9ce64919be463ce3f"],["/2022/08/19/前端/JavaScript/index.html","ab207a150b66a6c0730edae7555a4858"],["/2022/08/22/前端/Ajax/index.html","1564d2191286255560157ed47f75ec19"],["/2022/08/23/前端/Promise/index.html","36116be6e0388c831bcdb4df4c6ad4e3"],["/2022/08/24/前端/Axios/index.html","eb68dd11ea509aac2cc6cffa6bdf0e5b"],["/2022/08/25/前端/H5本地存储/index.html","12dc6de5203803395da0778b6fcc2729"],["/2022/08/26/前端/mock/index.html","c0555857775fa7292676d65f9948633a"],["/2022/08/31/前端/vue/VueJs/index.html","e1ed64641c1b11104b179b92c56d856e"],["/2022/09/01/前端/vue/vue组件化/index.html","e2f1ba0977e49e8031ee29ac70ef8535"],["/2022/09/04/前端/vue/VueCLI/index.html","5a8cf8c62ccfcc9085e033c53b95f3f1"],["/2022/09/07/前端/vue/vue实现动画/index.html","78e61f77070f2afd09b8b1bc51716a81"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","68b9448695068dfb948994639b68cd80"],["/2022/09/10/前端/vue/Vue异步请求/index.html","33e9986dae41cffc312cca3d3c71b067"],["/2022/09/11/前端/vue/vue-Router/index.html","45fb77374458ae39ecbf29bec01ae47c"],["/2022/09/13/前端/vue/Vuex/index.html","6283425404034575733d09af26fedb03"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","0db4752a494a2ff21c633fd3f4d4f705"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","b03360721034d5a76933e0fcf438f967"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","ecd019464f2ee9376c17b0b4a33ae25b"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","d3c0d995406bd1202c2fbb32bc50ebbf"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","a7ed85ada36fe19d7543458e3665ba01"],["/2022/09/28/DevOps/Linux/Linux/index.html","853a6368a01fe737c14b02557b13b51b"],["/2022/10/02/中间件/Redis/redis基础/index.html","0837bc7f50c1152e391daea42b768f05"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","ce213d9032531793ceb7dc195150581d"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","1b10236cc26eee6e2212d720a842c480"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","19e20d2a89a9efa4210b59f084cf7069"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","c8ab912369b5ce925970108eaef130d0"],["/2022/10/17/中间件/Redis/Redis集群/index.html","ffb1a92b0790a86b9c606eed213fb556"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","ae3f0108e7db8398827cd2ff62baa6cf"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","47025e11df83fc5d210c6e3c2c206d77"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","201ac66006392bed8f5ba2550fdb8ffd"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","7c0fce22af76cc247f09a5295847033f"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","321d0b48555cc2c0b151f10c3e160902"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","e505678c1dd86924e960fdc380b5d161"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","185ec0fcc2ef608f8e0b8e17aae0f4a4"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","2ca6be2024d23e65609bb68ccc4b23d6"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","28e33801767dbfaac7630fbad63da7fb"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","2a3a969f8911f4286363f402acf4dc17"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","e8c8b45a1ce6847ecc160afce5333f5c"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","69c99fc3318b60f064f3a4c9da6ec242"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","943bb40b4963056de0aab3b85d6ee762"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","f46b1cdeede342850dabc93ba4dbf2e2"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","76f7447cb78fb98874284244bc54f799"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","1099f65b4054c569dd7da36761134cef"],["/2023/03/10/DevOps/CICD/CICD/index.html","6f741735ccaca36bfff0d1e9417f0d81"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","892946ac2c5a8af80b28c94fa78de8d2"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","fbb9ba08f11ea97fdd5a770d83402dce"],["/2023/03/13/Java/NIO/NIO/index.html","6f4373343cd83d6fe1211d5a39cb8406"],["/2023/03/14/中间件/Netty/Netty/index.html","7eb7a340890a3b2a87471c0994fc6d34"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","db13b6cc06eda4cc212574543e3b2fba"],["/2023/03/17/系统设计/分布式系统认证/index.html","4841d5d64ebc9411989aa471468190f8"],["/2023/03/19/Java/JVM/JVM概述/index.html","947cb16a63d91ec336176993c8a3d38c"],["/2023/03/23/Java/JVM/类的加载过程/index.html","e581dddac7ae00ade987063209b0d3f0"],["/2023/03/28/Java/JVM/对象的实例化/index.html","27ab596a6452888b07e751664ce72839"],["/2023/04/01/Java/JVM/运行时数据区/index.html","9e71d8258e20a19ecc496918fc5f62b0"],["/2023/04/04/Java/JVM/执行引擎/index.html","aba3344b4dd9f59fe9f41b5720efa760"],["/2023/04/06/Java/JVM/对象引用/index.html","55aac5ae54eff304e6d386fb6136fc47"],["/2023/04/09/Java/JVM/垃圾回收/index.html","8db55ee7f469c9bf4203aeed16295c7a"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","903b1ef5a78a9493d9767555ab94259b"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","1d5e0daf7903a4dd0d9b58feaaec5d38"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","b4fb037014325f5d005b61049eec473e"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","22260adf48ee634fdf17a09607d4948e"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","385e61ffa6bdf2b027a4c343bea23ef5"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","341f3db6d671a70db81196260d202b02"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","00acd83a658e83cd5cc1a874298e4b33"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","61618845fe666e113e37bac60757fb93"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","4df3f6b5d7a66940da7b11c6737fc32f"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","e0d477cabcfed59555d2145188ebc654"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","6f1c0132d7d73879241d1555b875676b"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","86c9dc319052ff5c2e27565fb3ef8f40"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","6fd01ffbda872b3c7372ef74018ffde9"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","ec17683bd403ce58702c88cbd9361d00"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","79a377ca58c75220dc83c891711e8273"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","93353f7406ec2b0a2027b5736e27cfe3"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","1a7c9c260a742df55ca48e915ad7cdc3"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","7f5d74b2168688a93de2ce06eca4b094"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","a1ad676199140a8dc6b29242d0d41483"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","b5c3a5604d5b9fe7550d1ce48a3b1a36"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","8a1705e7025a89c54754a0f418535493"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","04c43db96fd85a10616b46f69894bcd6"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","0ee0efeb9f08414231f8d9ad0604168e"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","c0e9a216e13ffa734613bb7133a0497a"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","338f12e3b07ac19f4203110ae33b0952"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","37a097b1fadea9861ad5859661d3a19b"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","edab0e7d3ce3d48ed5b998b9031ee3db"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","b62e08645e9a1e74d05fc6f9631726a0"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","c8d9886172746e41b2f17dfebf45fae2"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","285a158495ee0a61ebc386ea64674175"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","4064b88195f3011cc71a4ffd25c87d3d"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","7dcc0a7e15a9ad5054b8ad2a1ceaf28f"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","93c8cdfd93aa02c1339313a20bb41751"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","7341e72538060723970427d87dc2da05"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","8e194f5a6d706852f8a4544dd2ca6a0e"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","e41bce203292eeccc8a77b87b1f0a339"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","71552cb21dd57e277badf17f68b68f99"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","a772f9b09cdcb7c60576da05c07b075b"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","08f731bd065b11f2aa981ca0a687323b"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","9dd5de1cf81cc33e7ec881bc1643c5c6"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","dab892ce70682a01eabb884714fa018e"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","f4a6ac384ecd50e019fc04d65edc453b"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","de1d7518832c682d00eb3b87963365d7"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","95fc7de47766ffefba9e44736840b1e6"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","2aedc898eb2e22738274e7464b54571d"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","2507fd824c26ca144718eb887857e35c"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","2ae22e78b04d7e4e9b5d3a2361f27bed"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","5129054ce99a7ebe00467bdca090067a"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","03a9f14fc4750612c7f15962afd2edbd"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","623a68810833d39509424df7cf2d1d43"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","52a94fa519a4b0fbe730716831cf3b08"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","b5c8b2d4ac720ffee49ef5932cb8a04d"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","f1adbfa987908580bf98b25fa42eae9d"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","b849cbbbab1b400aa5556775a490ecd5"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","f8d2346d1a3c2479aaeabb07526ba866"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","ba55cd5ca524fe158501e9568f8989aa"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","3b313b23a73d9cb11c1c6f3f9c596a8d"],["/2023/09/04/中间件/Redis/Redis事务/index.html","74e45b23107843f40fec27d7ec0a377f"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","26dc6e868c5ee519eaf5d19b00804b96"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","f5357c8522c188ba8343057addcb70c2"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","77263781b525742051ca692fef84aecb"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","7cd9a2f0884f019e714306c5d064768f"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","c2dfa743751fa7e55649bb96559d7837"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","5b1642fbaca1aaf4ca0dde8d66671776"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","7b57036b3a31c251b3cdd97921b12375"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","cbe4d1f39e8afc3c77445bba2cc13922"],["/2023/09/22/Java/NIO/零拷贝/index.html","ea3af9576013b723ecdf01d577670e39"],["/2023/09/24/系统设计/JWT认证/index.html","5cf1ab7497a8e9634580e8f2311bafb8"],["/2023/09/26/Java/NIO/Reactor模式/index.html","8d9bf7b5c5e3f003d8c1fe5a49b70f22"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","d77bf885d0f7d992eb579175807c54aa"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","da46ff482517f0f50687104b7d1e69bb"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","52fadc527a141bc0fb2d714d1e647bd2"],["/2023/10/09/Java/并发编程/共享问题/index.html","c24bfdd5183ed417ee9d63fc4bd06366"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","6367ece3cff1fb8cd8060ec3cf68fa8e"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","d37fdbdcf01838c6d1b8ae48d321e1e6"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","3e3610dbb20ea5f8ebb272daaa55a6a0"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","57cacfa4fd9af378f444fdce4051e1f2"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","c034d732b2127c14980988623d08e260"],["/2023/10/23/MySQL数据异构同步方案/index.html","35a5fa5a3341dcc3adfe3c46fd72a3ed"],["/404.html","2f1d73c6e358b664f0bd787c85f7618a"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","2a20032ca1b54b6b19e579a39f85ac65"],["/archives/2021/02/index.html","1ae0e7b9322a541beb57c90b68fab31a"],["/archives/2021/03/index.html","128cf511da46a53e54c343eef9a2b965"],["/archives/2021/03/page/2/index.html","61deb13223f6e0a9d5e57d49dbed68f4"],["/archives/2021/03/page/3/index.html","389026dad35ed6dbc8e6051f2ba73abd"],["/archives/2021/04/index.html","f131d2a3a25af24ed49dd2931932215c"],["/archives/2021/04/page/2/index.html","5a4dbace2ce781622164438060a49b3e"],["/archives/2021/05/index.html","4eb70d050a69ad85857e84e33728b97a"],["/archives/2021/index.html","cd332363c4cf43bbf2db43d9276d5d7e"],["/archives/2021/page/2/index.html","b515325370644f894cb79ed1e880f73e"],["/archives/2021/page/3/index.html","8fcebd7148de1444a425019479cad401"],["/archives/2021/page/4/index.html","ae4847d15ab82da0e2efda2bccee4b80"],["/archives/2021/page/5/index.html","d7a6ac86e515aeb3c3c9773b7fb47056"],["/archives/2021/page/6/index.html","91b269670e22033740b2d8093c452a37"],["/archives/2021/page/7/index.html","e906f4972f02ee1a155b5ea94be51aa8"],["/archives/2022/01/index.html","1c10c7121e138655bfda1217b8b95542"],["/archives/2022/04/index.html","287579477c96d05db6f2d940ae99b4e3"],["/archives/2022/08/index.html","a9601aab786d6ffc50c5137873b3baef"],["/archives/2022/09/index.html","0fe8927f5c3509f51acf30248b85c5a3"],["/archives/2022/09/page/2/index.html","f51a8f22dbe7100545fbcd38d703d074"],["/archives/2022/10/index.html","ad305e1aa7533475b83dffc5328ec21e"],["/archives/2022/11/index.html","a182666be77763934d223abfe649e837"],["/archives/2022/12/index.html","fd5c45bcb409d035bc49aeb175970be8"],["/archives/2022/index.html","fda186e32765ab88e975f8066a078c58"],["/archives/2022/page/2/index.html","0b58123fa603a34dabf736ee83b4ec06"],["/archives/2022/page/3/index.html","8b43d9a5f0be626545477351cec76765"],["/archives/2022/page/4/index.html","1426699e4a6870ebb73049419631df68"],["/archives/2022/page/5/index.html","b3e2dca4c09f7e9f5a77354f47caadbc"],["/archives/2023/01/index.html","017a70e78c610ddeb155876227cd015a"],["/archives/2023/02/index.html","f8bf4b52348ef9a2000de502b6a12322"],["/archives/2023/03/index.html","f41e3024311776424060c23ea9ba0792"],["/archives/2023/04/index.html","2853ad474b9b951ecf83c0196b3f39e1"],["/archives/2023/04/page/2/index.html","460de7250191b5fbf478fc3a5b19ab0e"],["/archives/2023/05/index.html","20bb98f086a9659bafe9b13102fc172e"],["/archives/2023/06/index.html","2901a55fce6646e41b6bd4b4a69f0622"],["/archives/2023/06/page/2/index.html","fbff8e810bafe25a648e02360c81adb8"],["/archives/2023/07/index.html","d6e899f5e6ec38e27a2887c9d0c14df0"],["/archives/2023/07/page/2/index.html","cb6f79736d35297a89f565a5e82612b1"],["/archives/2023/08/index.html","9df466ba04fab33af41433cee24c569b"],["/archives/2023/08/page/2/index.html","e2e8bfd362a4d0afb504853466b3ef14"],["/archives/2023/09/index.html","a367b3674ac9220c4ca3544c0949b4ac"],["/archives/2023/09/page/2/index.html","8613eff3eadd51a55c7a93a03279f751"],["/archives/2023/10/index.html","0c93c636aa108dcd190e0a19c3df36cc"],["/archives/2023/index.html","ed9f058f91a05688bec7ee0873064223"],["/archives/2023/page/10/index.html","f04a61e80e3b1f4e6c008efc7ecdf25e"],["/archives/2023/page/2/index.html","b168e42c7a34dc4512b7431b98bf6b0e"],["/archives/2023/page/3/index.html","7c5629960fd373d9a1cc12965ce47be3"],["/archives/2023/page/4/index.html","d58e59ee4234200e2b151c77e54ec6f8"],["/archives/2023/page/5/index.html","705aebc2e84ac4d25ebfd13e225dff74"],["/archives/2023/page/6/index.html","4800ac8d4d3e214fb5d3b5ccd9e7dcb4"],["/archives/2023/page/7/index.html","71c2a995c9d4969d5e5f140a25814011"],["/archives/2023/page/8/index.html","29938498e10d74283bf14306ea584dc1"],["/archives/2023/page/9/index.html","9a9f56841c61ffce0f6b0f87eb0d56ec"],["/archives/index.html","9e3578d73be7a3926208f8850a39fba8"],["/archives/page/10/index.html","5d64d365558ac82fdc8336547e7adcb1"],["/archives/page/11/index.html","a8a25b686d3af2cd7c8cdd9273a4f33b"],["/archives/page/12/index.html","626eeec682eff8037bf2d41e1180dd7d"],["/archives/page/13/index.html","c61fcd8e92d66fb68c9cdfce3d4010b6"],["/archives/page/14/index.html","6b1c056efffdaa17d4b8039d2413dd4c"],["/archives/page/15/index.html","fc4bc427a30d688f6911f07e07e37023"],["/archives/page/16/index.html","ca0c9ab5f624504e5d992b8de6170a16"],["/archives/page/17/index.html","9139dae38f1155ad5d2975287d97ab87"],["/archives/page/18/index.html","9198a0ee45e6cbde5e12aeedf19a503f"],["/archives/page/19/index.html","f34b7a93b8134faea687869ae1db30bf"],["/archives/page/2/index.html","2c524e97faa6cb0850c39eda6c6ff774"],["/archives/page/20/index.html","9c8d7067f687bbe50b144d7c6d120f15"],["/archives/page/21/index.html","59fec7dc422d2e146d0669fd3da6d5ce"],["/archives/page/3/index.html","cee19545d594d2f4b54fde9c875e0238"],["/archives/page/4/index.html","e319d404aeb8539f61b1cb58aec04945"],["/archives/page/5/index.html","7ac7047ee7bcc854a22ac13f99685d24"],["/archives/page/6/index.html","0f9a7957f3b1b9db6acaf5e0f8825a56"],["/archives/page/7/index.html","f39518c4b324a52c27e0414bd2410670"],["/archives/page/8/index.html","c9c723adaf87fb964aa6b4d13f227a96"],["/archives/page/9/index.html","a09ab81eac59b6f549f61098ac3c1f77"],["/categories/Devops/CICD/index.html","3ff9e41075aea6c922b213e5d730cd70"],["/categories/Devops/Linux/index.html","1721f4bdaba75f6534ce2e21a6fa872a"],["/categories/Devops/index.html","12862dae3a7278f35b7516a8373e12e2"],["/categories/Java/JVM/index.html","b8f1c4f65bad119505467298341f9120"],["/categories/Java/Java基础/index.html","4ea2ac382abf0bb6ca5658cbceef07e1"],["/categories/Java/NIO/index.html","5caaf8fb8900b242770e8641059b7133"],["/categories/Java/NIO/原生NIO/index.html","29c98d9b4a9286c7f0635f7ddd31e640"],["/categories/Java/NIO/文件操作工具类/index.html","a7ce18ce90d21f0158ec8beace6c9a55"],["/categories/Java/index.html","154210419d301f058b9c3258921cf3cd"],["/categories/Java/page/2/index.html","b23acef688fc1360abc09dba141cb21d"],["/categories/Java/并发编程/index.html","d6974f42d960921bae0b9f8ef269e89e"],["/categories/Spring全家桶/Spring-Security/index.html","7e934ed531fb633f172b860ecc24dfee"],["/categories/Spring全家桶/Spring/index.html","8a94ddb092c10c7aa1429a7b7cf9e07c"],["/categories/Spring全家桶/SpringBoot/index.html","b4736a375fde825e99082b38b14ff2b7"],["/categories/Spring全家桶/SpringCloud/index.html","94d14e848643fe25eb4a23c3bad6d246"],["/categories/Spring全家桶/SpringMVC/index.html","e92b36bf0db752c50e2851a98488b0ab"],["/categories/Spring全家桶/index.html","d64d34cfc60eddaa0e17f0ea3bf3c536"],["/categories/Spring全家桶/page/2/index.html","a23ceaa136144c6a07dea08d5edf2e50"],["/categories/index.html","6e73015ebca5fab2842aa8b8a941ac43"],["/categories/中间件/ElasticSearch/index.html","ff160f8bfcac42117fa27d706a3445e2"],["/categories/中间件/Netty/index.html","17cdf1abebc50fd058deb5a24d39d4ca"],["/categories/中间件/Redis/index.html","3edb7b2a4d065065112b6abba2b7a23d"],["/categories/中间件/Redis/page/2/index.html","15e6e5b07a254c8216c77447b05c0b58"],["/categories/中间件/Redis/page/3/index.html","e318732456455ff1e69ad8ba94b219f8"],["/categories/中间件/index.html","60dc819d47acdd3ec044c50338c5d853"],["/categories/中间件/page/2/index.html","684eb5231e72dbdc129abbc4e12ff3fb"],["/categories/中间件/page/3/index.html","886023cd05c5fba76cb20a2234c3ddc1"],["/categories/中间件/page/4/index.html","1bf58ea2854ded789e7311b4b3a6e3fe"],["/categories/中间件/消息队列/RabbitMQ/index.html","fff1037c923a7bbc0a4bdda3a75e6615"],["/categories/中间件/消息队列/index.html","d73644dd8a0352cd202cf7c559a024da"],["/categories/前端/Mock/index.html","4a39ec9177b443ab795cba0cabe153aa"],["/categories/前端/Promise/index.html","98356eb8a2062699223ea2d9637f7fce"],["/categories/前端/Vue/index.html","93c78cdc5ed31d21ef4304b6ddcbd206"],["/categories/前端/index.html","1de7692bb65627b5a881a747fa74c693"],["/categories/前端/jQuery/index.html","e1ed50bb61bdbb589df5e8e0fb2e6838"],["/categories/前端/page/2/index.html","5514870b786eefed1fdd775f696da385"],["/categories/前端/原生基础/index.html","5447915c595cd9d4705c42836d573a0f"],["/categories/前端/异步通信/index.html","d578aaaa0f4e9c0a9532510bf812bca3"],["/categories/工具使用/Git/index.html","313c2dff164921974f249eaed76311c6"],["/categories/工具使用/index.html","6772a826d815c2f9d302e69bf8c0b5a2"],["/categories/工具使用/markdown/index.html","5a3f6e3032c57ae02f816379d9c67701"],["/categories/工具的使用/Docker/index.html","ae9f36b48dbafa5dd7a0678d23ffd6c9"],["/categories/工具的使用/Nginx/index.html","96e192dfa1c818f0d626b92c642ae0f7"],["/categories/工具的使用/Swagger/index.html","e29c25c8bb185faa6327ab81f7fb0382"],["/categories/工具的使用/index.html","84cb7f686080de2883c006e536a3940e"],["/categories/工具的使用/博客搭建/index.html","808b12bc0774f756fa4ee2cb71c400e0"],["/categories/数据库/MongoDB/index.html","bbebbae97500298fe5743a46265f471c"],["/categories/数据库/MySQL/index.html","876e446dd15b67a49f41734c8d494c50"],["/categories/数据库/MySQL/page/2/index.html","1a1195dfa58c8e41208657e217a42108"],["/categories/数据库/MySQL/page/3/index.html","d5dd5980d7e0027088f8bf41404f38c7"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","ef86182386a199fd561d3186ef607fdb"],["/categories/数据库/ORM持久层框架/index.html","13578f5af9277a7b49969a4d5c5f52f9"],["/categories/数据库/index.html","c2e593603d11441ca97d61a652c96d8f"],["/categories/数据库/page/2/index.html","346734a0deb2f71ce54bb10c94e727d0"],["/categories/数据库/page/3/index.html","5bb1fc9d42fe7b6cf765ea27c12a950e"],["/categories/系统设计/DDD领域模型/index.html","bc690d1c2aacb739ef563b819b792773"],["/categories/系统设计/index.html","402c7ec4a301894a11087ab7a22674e8"],["/categories/系统设计/page/2/index.html","6c50c83d85915f960761b6223e5aed79"],["/categories/系统设计/page/3/index.html","e0c3cdf424ce99092909702d159c1289"],["/categories/系统设计/分布式权限认证/index.html","495d9f3c672ccf8b26308a246711895d"],["/categories/系统设计/分布式系统/index.html","b43146c065ea5db3031e1bcd7ccc8a0d"],["/categories/系统设计/设计模式/index.html","33c9cd880b98ffef85c57a500dba206a"],["/categories/系统设计/设计模式/page/2/index.html","c2f50cc16e491fd19139346ba5fed2e1"],["/categories/计算机基础/index.html","d1b1c73343fa86b4db97048369b38d77"],["/categories/计算机基础/page/2/index.html","8c5f58387c1d5e2d30f8d6963b3528b9"],["/categories/计算机基础/page/3/index.html","f61dc54f40b6e4233b47e8a34dd61a19"],["/categories/计算机基础/page/4/index.html","4e59b10a8a4bd391ab26dbb4ac86a836"],["/categories/计算机基础/page/5/index.html","2c5b2e8100ab6bc24f6d1ba05ed15f4e"],["/categories/计算机基础/page/6/index.html","d287dd4a99bb272a4a6e5397ca60df22"],["/categories/计算机基础/操作系统/index.html","4f238c5b4214fe9aa9649b295a83ddb8"],["/categories/计算机基础/数据结构与算法/index.html","7ddb5ee83fcafc59446ce9110ef32c59"],["/categories/计算机基础/数据结构与算法/page/2/index.html","977cd51c0aab3fb92ebbf9c2e49814d1"],["/categories/计算机基础/数据结构与算法/page/3/index.html","1ec932c4016cefa632c6f0d4e116cb5e"],["/categories/计算机基础/数据结构与算法/page/4/index.html","07e4146577ff4ec8c61580b0fbbe4ddb"],["/categories/计算机基础/数据结构与算法/page/5/index.html","bf9a23241a8d548c6e32b01854870c11"],["/categories/计算机基础/计算机网络/index.html","1fe6c8fb36c579d136474544aab9e647"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","ab9a591ef96055c66fc9724324964bdb"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","846761d03637e31d27f476264e3c6df1"],["/messageboard/index.html","0de49fa69e92c25a8077668b1d12d962"],["/page/10/index.html","8d105b00a034fdc86cb5600d8d53dec5"],["/page/11/index.html","05cb224ea61bd3c8fb9c157d40f808e7"],["/page/12/index.html","d64c874f971b16e36c6592e16691bd51"],["/page/13/index.html","0c79ab0ec26d3c485853e3d254be554b"],["/page/14/index.html","f1a8cdf8bfdd43b546c51d4c412ce940"],["/page/15/index.html","e368c629f23ef3b828a28a05c508a196"],["/page/16/index.html","f8338cd9e77ba9b1702e860654a088a5"],["/page/17/index.html","eed7bfa7fad395a357e03b3be856045e"],["/page/18/index.html","ab3d024e55b11416c82668cac0c57500"],["/page/19/index.html","e127c230d874f039c957d9fb9b201e69"],["/page/2/index.html","7da30882702307f54d4bb26d2f4c1b12"],["/page/20/index.html","efbfbe0656e1b9c5189fd6196a5c9454"],["/page/21/index.html","b6b06f9a189399ade3ff97d7f2f97ca7"],["/page/3/index.html","e2d3e30cbf44ccfdc5f78d387bb9161f"],["/page/4/index.html","e29114c926e397fbc9c4e648f2158547"],["/page/5/index.html","05725d01bb388824b6eaae841a30c804"],["/page/6/index.html","ee5db089a453c5a5b8e679d54aac2042"],["/page/7/index.html","235bf858ffcef789e2be05098ea45936"],["/page/8/index.html","e2765809248362540a402bd42703d75d"],["/page/9/index.html","9366b727f5b959b719c0dc3e2b315334"],["/sw-register.js","4016aa5b94d4676bafc7bdb5d3666eec"],["/tags/Ajax/index.html","1584f5f71015cf9af8086aa4201ce1aa"],["/tags/Axios/index.html","2bc7f3e02b7d7e259da00509ddd37de0"],["/tags/BASE理论/index.html","94d19b9aa38ca4905a1bc60e0aaf5591"],["/tags/CAP定理/index.html","563302b41c8edfd332662ce574bd7275"],["/tags/CICD/index.html","2e9bc21b84332ebf7c12df2e82dcdea3"],["/tags/DDD领域模型/index.html","ab42b3872aa56cb1e3c691d2262b43f1"],["/tags/Docker/index.html","fb17d9950f2bf7f6160d458bf102e369"],["/tags/ELK/index.html","a4d31660f274dfdc113957501036fc3e"],["/tags/ElasticSearch/index.html","e21afaba1ee0d2f0841363ee5dcc5858"],["/tags/Git/index.html","1a5a0d3f545d85d627e8b5f88fabb327"],["/tags/H5/index.html","5298af7f2931c8235bb8bf208ab52868"],["/tags/JVM/index.html","aa4a44a9b06d2b8c3c2f3ffb53176561"],["/tags/JVM内存模型/index.html","deeaa3108954f10f2efb85f95752ca52"],["/tags/JVM执行引擎/index.html","de1a39c0bce96bca1bcb1fe21e63f6c9"],["/tags/JavaScript/index.html","894b9a59effde7c17e85aca71949e8ad"],["/tags/Java内存模型/index.html","2ff7a18c06d770026f5e1b3d4c33b75f"],["/tags/Java进程线程/index.html","9aa601b56a14e5f99fea4172bbb708d7"],["/tags/Kibana/index.html","a77665f1f7ff85462fa64db328d2dfef"],["/tags/LeetCode/index.html","0ddc499c2b1b775fba329ce5627d1284"],["/tags/LeetCode/page/2/index.html","a1dabdacd5770a1bf8985d4350c7de2d"],["/tags/LeetCode/page/3/index.html","d0f46eee1b9cdb45fad489ab73785918"],["/tags/Linux/index.html","ad16a3596b95256723f9e5fc05338057"],["/tags/Logstash/index.html","1ac7844921234b49ffca8a17bc53b99f"],["/tags/Mock/index.html","9424c19f1d370ad4d6a348750b11abce"],["/tags/MongoDB/index.html","33bdefde36bc100348950fedd1d99fc2"],["/tags/MySQL-事务/index.html","afd56d0c711e9617dbc513ce92a7ab1a"],["/tags/MySQL-数据类型/index.html","5fc50a806ee0a037a4f024b8e513e185"],["/tags/MySQL-日志/index.html","953ac8290f2aaaf65ed0737f7240e5f5"],["/tags/MySQL-索引/index.html","6e32cb21011d18434c280dd94d2f0f45"],["/tags/MySQL-锁/index.html","51844b7659dc1309e0071ddf0d50d165"],["/tags/MySQL/index.html","8eba2199f5c5745416776470d078e3fc"],["/tags/MySQL/page/2/index.html","7de4a7536946a726bf767c7b091aa86e"],["/tags/Mybatis/index.html","c4928a2dacbc1dbe3777aa5818310c37"],["/tags/MybatisPlus/index.html","72d7699f1de5b822e22f407332d94580"],["/tags/NIO/index.html","ef9cf95cce70437396a291ce36716e35"],["/tags/Netty/index.html","77f24d1c57605f1d3b3f67a3fa0a265b"],["/tags/Nginx/index.html","957afb10c182313aa0d12f262e3febcc"],["/tags/Promise/index.html","e6f054aae00091fbc615c4e7af7a9088"],["/tags/RabbitMQ/index.html","b77ac337b055a33960ed51e402a2bed5"],["/tags/Redis/index.html","904214bdeb55a22655022886535c43b6"],["/tags/Redis/page/2/index.html","7de61096a8a1435d8de4690ea52b99ee"],["/tags/Redis/page/3/index.html","e2c88994c92b05cec250612ed3a28f84"],["/tags/SSM/index.html","6f416b129ecd9fcaed96f3551e189173"],["/tags/Spring-Security/index.html","926ce6c12cd157f571f5609d643a4b73"],["/tags/Spring/index.html","ec4a318d31a602e7612d6d3e61e7dd48"],["/tags/SpringBoot/index.html","9a28867a91182fd90f100e40cddcde68"],["/tags/SpringCloud/index.html","83476ea227263c0e1be0668950dab031"],["/tags/SpringMVC/index.html","4862d4d32cb415a770ee67b2381861e1"],["/tags/Swagger/index.html","1fe23809d6ed7cd2f2a087e878c3e0eb"],["/tags/hexo/index.html","4127da0a3807ba661eb390b93f698ef1"],["/tags/index.html","2cb2fd9d4f569239282ee86775888dd9"],["/tags/jQuery/index.html","f98d8edc857f3dfa3404cb86c5ef482b"],["/tags/java/index.html","aff52a9d0b7e0088dda843e37dc161e5"],["/tags/markdown/index.html","fb32b63571e18cb6966203d8784440df"],["/tags/noSQL/index.html","f084e00bbfa4fcbb1048d065b8d549cc"],["/tags/typora/index.html","f7e74909d1a3d71de363017dc31d0224"],["/tags/vue/index.html","f3f671730858f43e336b93a1701af221"],["/tags/享元模式/index.html","e3a78abe72be1be98d4b1d8777a003c6"],["/tags/代理模式/index.html","75059ae7648fc7877b981d9882c544ab"],["/tags/内存管理/index.html","131a87ece0b7a2e9fd4324d79aac902f"],["/tags/分布式/index.html","ffd1a8a21c864966e76087fb8292e493"],["/tags/分布式系统/index.html","464002e4439158c44ecfb12851b80751"],["/tags/前端/index.html","e979ae1d04e16a5f7f46e7cfe13426ed"],["/tags/前端/page/2/index.html","8561d5a4e86ac27752106ad360945f8c"],["/tags/博客/index.html","57cc6e9093f5dba237da6f7f2fd741b3"],["/tags/后端/index.html","2a362b01f87e717c48ae20578681515e"],["/tags/外观模式/index.html","b51a3b2655296af8fdca3725daf61886"],["/tags/多线程设计模式/index.html","591aef65058d37848a877f1aa9678567"],["/tags/容器技术/index.html","8a3b4bbf33cf6ccc457622ce3917c21f"],["/tags/工厂方法/index.html","024c986063f5910c8c794a797d693b63"],["/tags/异构同步/index.html","e5ba582a9a07c55bf9b3f9b25fd064e8"],["/tags/微服务/index.html","fd8bc5bdcad7be47dec1b12ae8d78703"],["/tags/抽象工厂/index.html","68a8002d51cf95c5cb9e44c8d9da1244"],["/tags/持续集成持续部署/index.html","cfa803e63b5f3232db4432b875bc0741"],["/tags/搜索引擎/index.html","c8c4c8da85c3936d6244d6b04e6cfaa1"],["/tags/操作系统/index.html","2d62b2a47e24c83a4efcaece64f0785f"],["/tags/数据库/index.html","12f76221bd90e2ff8ac9569424c7b387"],["/tags/数据库/page/2/index.html","dfe215a89d1fa191b65a7332a9589e96"],["/tags/数据库/page/3/index.html","ce0cce38c43a5af04da8d6d8e415f132"],["/tags/数据结构与算法/index.html","be747d014fee0d63f70fad60850ae89c"],["/tags/数据结构与算法/page/2/index.html","a87e6d9d5f2bb857d07313f59a045d50"],["/tags/文件操作/index.html","c882ef6624769f27861a4faf140eef56"],["/tags/日志/index.html","8c1a48fd74e0374396a056390d42c2eb"],["/tags/服务器/index.html","d36f73bde0d250a8a8219b8b4684af61"],["/tags/权限认证/index.html","ff66c367907d810099ef4dde1828ffe4"],["/tags/桥接模式/index.html","6ab4c12a5056b83d8a6b886c74c4eec7"],["/tags/模板方法模式/index.html","b8f6e23e28639607f9135b51d38f444b"],["/tags/死锁/index.html","e83104fe09ee33494c9366344ce54db2"],["/tags/消息队列/index.html","c203ad973ed1e227fa5f7d7faf3974d8"],["/tags/版本控制/index.html","ea2c2079d4fe9b1a82e426338231da88"],["/tags/策略模式/index.html","a4f03a7f6a42b16e5d178d35babde8b3"],["/tags/简单工厂/index.html","e8ed4777674f48e5dfeca508cb0c215d"],["/tags/算法/index.html","b348bf815f35b4f3c0947bece772f1e7"],["/tags/线程活跃性问题/index.html","b276f9d386d802aba49aaf65db9b9506"],["/tags/组件化/index.html","451baf405aeeae9ed94ebc06dc4c926c"],["/tags/缓存/index.html","9fb429f860c83225e654f8dbb804b755"],["/tags/缓存/page/2/index.html","90c6c784b1c837030ca3cecf1b2a576c"],["/tags/缓存/page/3/index.html","544a485038d3e42cd1aa94ff8593f81d"],["/tags/观察者模式/index.html","dfe4a2b476553ca8c4db25015b930e92"],["/tags/计算机网络/index.html","a35ca57c860d8e8a833b4cdf58c77212"],["/tags/设计模式/index.html","e234580d8057fcbab654ae0e4875a245"],["/tags/设计模式/page/2/index.html","c6f98e2a979755c184f74a6019d5c4d0"],["/tags/资源共享问题/index.html","9c583b0cadd6dbda628296616d8915c8"],["/tags/进程管理/index.html","1e02663c20d07f7843fe5f7065c4bda9"],["/tags/适配器模式/index.html","e2d0ba89940b3c6a4afbbcbcedb54ea6"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
