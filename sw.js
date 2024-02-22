/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","ea38fba0c30d6fda6197c0f56d0bc82a"],["/2021/02/22/工具的使用/博客的搭建/index.html","2859b2f861097198d746e111db716348"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","07cd9924e953ace0a050f5967c878d40"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","219444678dac1dc9594bce64bfe84584"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","e6e60be20a42486c6d1c2335c99f7c81"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","5d509c12f1b824857997941b6bb19457"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","70ceca8bffe831104e68c004f3387de6"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","adb29d3728acc3e7bfe0a1c091769074"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","6e0aaffe440e36730e833c728b2f4645"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","0ff8c06722a7a5e551c266b50d9cc52b"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","b05050413f0bfc4b2b297ae66c2b2a33"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","ab9781a6aae84d330db7d3c0e9f55a01"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","1b7d1c6c0dfabea01a68a42765d88c16"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","206dacd097d83083614147277e1241ee"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","9572d7375b5d7fe7ecce643edd72a3b6"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","87f97aa7810c65e8277f374b45618beb"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","adf3c35af02d92573e2815731998e95f"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","7051883dcfdb9a5a6344a3d1f03a3113"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","26de4a0bf34abff8628c69f977371a8f"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","c3ea588f6be0b995b3ecd4bdafc8fc6c"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","acd2d12e9ed6f5065eabbd85e034d557"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","5c7e3910e7578c3cc42c2b2132e4a173"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","50217edd92aec276340018c65bc7055d"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","e3533d39f80e470f42a8b36e0be6d89f"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","357c6c04eff48e003d5fcacc7c582364"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","618d9b7a80bee04b1b6ec7d822fa13fe"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","ef870fcd4146c375087f0cffba346795"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","bfbc0201ceee7408ff6a65c068f0a812"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","f60a888721a31e184a24b03fefe8295d"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","3aaee4e126d4c52575ae64b97c8b1e26"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","660356ced5d0faff0dedca5c817808e5"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","b6711b59ea6a77a8ac44d24ae2cbe3fd"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","9b7ebe741e1f55052abd304ee6faa1bd"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","5bf749a55f009c45c5bfcf47d90fecef"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","e44fbb75af664ed8b01c4ec782f895e6"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","d97ab1e6202911e4efed97d8bbac6285"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","92decb753a387072e84e8227fbe502a9"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","62d0bdb6808c2b3fb3520aa0f034cefe"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","eea636ba2bef19e47f5bb913d8bb0c39"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","edc1da76356aa714d95b574b18605729"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","17a44e5ec3498be1d897638cf304e2fc"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","8314642c9d9b4e83f57e9abae7ce8fb8"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","cb4bb9014fe860d5da2ea31e75d2e1b0"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","8a953f2adbff11bb6ee89aa670bc7b26"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","46751a4240570241e187f9229457439f"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","48346381dff13fb8cea822801458ff56"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","ff496b4abb649e1ac22176aec2654a84"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","5a7ed008491194f6e9a277b01dc4a5c2"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","8ed92d8bf0a81e83aae4598c9144da00"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","7c72a78fca60579867d095f267356337"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","819d24e82c011521a402287a01121350"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","5af2bde3fee772ac0d789db0e9195dc2"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","20cbe8978fe41bc7402db415d75661cb"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","43f4d67ec4a30a490edf6e9c07d58836"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","8928614f3566ef0acce4948810e45a81"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","472c161d9107a7f31c3844d99b4baa81"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","e9dfb6b837232c43bf551cf60a27e7c1"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","9fea99f57b0dd0ff0efcbd43eb4d5e63"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","cce0c97bd57eaa34edf5dd5cc0a4cde1"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","617584e9fdf0ae236ee96f3dea4d40e0"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","b3a92de474b11a61a8cb82106d3af570"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","2dbbaf3d4645fe52c8e63e2f57aa0e34"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","3ae348ba46dfe67a7655cc6d0ecbb555"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","3a10b249126ab5a49ab0dda7337a41f8"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","8749b99493f0dcf002d83589ceb38b1e"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","bebcd4d0f34f0f4f1b3779df7ef9b5af"],["/2022/08/17/前端/jQuery/index.html","16b8b65e0a301e5ed0d3ef5573f052ae"],["/2022/08/19/前端/JavaScript/index.html","6fef8ae22acd35dd219f90b1590c86fd"],["/2022/08/22/前端/Ajax/index.html","44aeab0dedaae67af001019f0bbdb3b3"],["/2022/08/23/前端/Promise/index.html","a59e84ae7c9bf149c3e37927bf8dc345"],["/2022/08/24/前端/Axios/index.html","ca70c3f678fa86b8359f6bc01c908af4"],["/2022/08/25/前端/H5本地存储/index.html","1172ecaa6050ad1f052b696226ce2fa0"],["/2022/08/26/前端/mock/index.html","d8fea71697d119d781b93cc5a15e0be7"],["/2022/08/31/前端/vue/VueJs/index.html","a8a00e15c9b3d84ce8e1ad928580d654"],["/2022/09/01/前端/vue/vue组件化/index.html","767545d9804ff50407afe4980ca04454"],["/2022/09/04/前端/vue/VueCLI/index.html","6351ddc5178f04cb66c21dcf9f432f78"],["/2022/09/07/前端/vue/vue实现动画/index.html","93d57ad8effec667a9ac236dbcd8ead8"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","2a1fb2d4bbca545143830fb259f85294"],["/2022/09/10/前端/vue/Vue异步请求/index.html","27f3f4b374b3f0bf095ea0b21a42353e"],["/2022/09/11/前端/vue/vue-Router/index.html","30a16ebf1fe74b1b6007aecf6f6c45a2"],["/2022/09/13/前端/vue/Vuex/index.html","f5d61c4e5a4a2c90df5fd200ec419399"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","0bcce88d37ad739994ed00f717626986"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","e30090f6734c17b1a607500e14676cf6"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","d89bdb78a3014c8862ebc670637dd0fe"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","ca44a49b5f6e1e498f946789153845d8"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","feaca2b1d4afc55493fa2fba3024c541"],["/2022/09/28/DevOps/Linux/Linux/index.html","5a8e51a8861e61f4542d7158dcf7bc8b"],["/2022/10/02/中间件/Redis/redis基础/index.html","a8b194c889fef808508ee2432c469cb8"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","0a417e4cea617ed4b9267ba60d052fb0"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","ccabc5f555c1f5dcd5b330f1c3ac89d8"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","9f39dfd05d6783936479a9e86ab545d3"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","85f76eefca04ea22fbca033b67fdc512"],["/2022/10/17/中间件/Redis/Redis集群/index.html","5d9faec24a1a0b4dbf31931fe2e8e7a3"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","cf17c3d131a3a83d59c559b988af90f9"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","f4ea5156ec0cac7f8e08b0e5838cf051"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","dfeb245dbbdb2cebf2c19dfaf8415d7c"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","2e9eb0079b017edca9e40df95f9a2d77"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","6184582c32fc38689c5e84c8bf143bd6"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","b6c9d51f2439fb3a2b5890c54db23dfe"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","c815ad8f581a84b96802e87ae5887b83"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","ef6951d252818fb47e8c9e91e17939e1"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","5f6493535d1c76c44c172af92b26d05f"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","a0f131004ad191f4dbff7b31cdee4ed3"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","adeeb128b18ebb1f47a3506076ffd5d5"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","af41fe234ad93f1fba9eba933b7a5a46"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","49b31e71ad0100bf20e191f206cc49b1"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","b4b0eee8280695ea7a2eb53b77f67f51"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","d90419f314ea5eb4f2de586bc8ba5b7c"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","b22f3d7a79cc34350a23fbc7b7c95a49"],["/2023/03/10/DevOps/CICD/CICD/index.html","a4a1015cf5e09aa57eab1c442556879a"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","2556ae87a35ec331513b4ec3b0c35a85"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","705292557d8b18b76c993326d4760175"],["/2023/03/13/Java/NIO/NIO/index.html","257ce1d711042bd3b5de0fc6c55bc6b4"],["/2023/03/14/中间件/Netty/Netty/index.html","44eb79a362198f2415254c0cd4abf354"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","1e07a882789fdce6b8d33a8bacaa6c4a"],["/2023/03/17/系统设计/分布式系统认证/index.html","f391c33925a6212e4270a91c3bd107fd"],["/2023/03/19/Java/JVM/JVM概述/index.html","91331ebaeedd2274d6658a486343f443"],["/2023/03/23/Java/JVM/类的加载过程/index.html","ee1ed2c4a992a81a633f42586bddddcf"],["/2023/03/28/Java/JVM/对象的实例化/index.html","effc1207ef3086676199a4cfcdaee370"],["/2023/04/01/Java/JVM/运行时数据区/index.html","a704264a4964d0eb059ab19746e42f88"],["/2023/04/04/Java/JVM/执行引擎/index.html","d8c6d29f4c3cdc28cde36b89947fb44f"],["/2023/04/06/Java/JVM/对象引用/index.html","3400b1379c49e1ccca56dd1bfab482ec"],["/2023/04/09/Java/JVM/垃圾回收/index.html","669808c28ff58a1b51f08561a9692ee4"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","74d48695c48df816a2782e038cd3fd9c"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","333c67900e6cde206dc48f9e7444db1c"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","85ecd8faab2093e51de544d9d92c527a"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","fba2468abc94e5b9fd7ee2aefa54c28a"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","e7a5db189ba958e33921376f5425d919"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","7ac097c2a0ff0ff05e7f561107b29a26"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","ddba60a0cfd2b7e9f29c661bdbfa93b3"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","8057656df2aeeef057b816a8923f3ad6"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","484d72727ff357e89676e7ee7a75fc6b"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","978913c157075a48e61781c635f305b1"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","451a09ed463a6fe9f8fd290d87c7e72c"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","967b05c4e8008a1b6ebf0e573deebc95"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","22d871d5dcfec57caddf191d73ddddc0"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","d7ebc29f1163f705fcb5a33dd0a2aa58"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","537b5e7e8c795728efc4915e92b7d633"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","02fe53faf787bd83f8e699c737876a64"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","2351559ea617613c2e9c744b327d630c"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","3cb937d88eec3592cf53b284a2c18f6f"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","92e0ce792b7aed16b89e56db202f2d59"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","26682dfdf3aad3a72283d511a29f05a1"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","e7bb5370b68be262c571e4acec44e94a"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","b06cb21a13a042c4d6826230a074ef02"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","f48749b2687edb8734f2f9b36779fc61"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","cb9b000a23aef66090857846e615e758"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","c69147ada7adc93533bbe7911db1e534"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","d9cb50e423826c39e47fd75ed2c1b67a"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","29e3015e504c5637067eac3c4c864c7d"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","90c6ff3b21e2b0907bdd179e7077a527"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","1bb9e172d2feae3a96d13f4ba3f7afab"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","e24c3b26496e22a7a3f6fc4105c28ceb"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","c327c82028085d27805b60b02c11187d"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","30140076d1ceea15c096589315006fcb"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","b5dcace74bbead487797c4b1dc7a1fc3"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","0ce6faea06576073031e4f3cb3e25c15"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","40e176df76bf5df5c469f319e766bdf7"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","8877bd43a19895db968128203632e376"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","8fcc47000ae27b2287a7a6ba71a8977c"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","c5c8024e4e14ab7346ab743bd37c3df3"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","037c6d6d6f7bf9c668223ed98fe33358"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","e898bde207ccabb7ef847c01dd2c5ffd"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","d8850d3fbe65f0d5f2b722195a51d426"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","3320436ef9f002b57236df49cafc04b8"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","23adc11b978f71821366260165225f8a"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","4d8a4ab1aa22eb6ce414ba13a09c3faa"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","15aa83115c21fa3adb9dc7f7965f943a"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","a015d7aa4e47619d877ec534b1a52124"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","c3d6e147d79bda1f4a26031407d892a4"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","3f0861783dfd36b3e04ca1506878ce25"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","f6541ec6840581cfbb9723234d181fd8"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","8df0d403a52e4cfb5cccc3c78e0cd497"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","a20400a1d2d4da0f2399019afd8a9736"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","0ce732360453ea8798c124a745833cd3"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","4ffae9ad05147155558d1e4a8641e699"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","fd69d5176ef60af466224e42323582d2"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","2c8e951215015605ab067f5225f9d300"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","03430118e1161a3a401d0e3e01d994d2"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","43b093335cd2ca6455f35c3a2529005f"],["/2023/09/04/中间件/Redis/Redis事务/index.html","b07134c65639ee757c224628665a947d"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","5ee5622d30995c39a179a0911b4e5f8f"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","59f7455c05fec5c08dd9dc0853e8999c"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","319e4a042ec6ae71acf30465f9fb685a"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","3130485fa08e7299493aa6aad9193901"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","2236f03ab1fa3ffa5345b75e63995e1f"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","1a5ff8ac8453063eda6e10c169e967a8"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","2b69363cefb4e2b355656fb7c65d1b97"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","89fa22903656082e320d302c179f60a9"],["/2023/09/22/Java/NIO/零拷贝/index.html","bd2072c2a69c3086f230397f0f1f9aac"],["/2023/09/24/系统设计/JWT认证/index.html","5700185bffccbfa5ce932d7e2f28958d"],["/2023/09/26/Java/NIO/Reactor模式/index.html","4dc7f2f61857539f9d68edfdff215688"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","9bcf347d67e7bdc31f8c8a69f205664f"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","7c6b53d5b9fecbba274a82dd448c89f8"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","237d1dc60ff32a6ff4523062b1ae786c"],["/2023/10/09/Java/并发编程/共享问题/index.html","1e2d4fe97147575415e8a70b34620220"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","4b268c700f426416cd44b686c6fe564e"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","082451d58e908c9d0f5a1c30b44ec7c3"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","8c98cc05bf2cde1cb0269c5d4adfe066"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","d8327a2bfc8dbe51ba9c4b690750e52c"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","580235ebba098a5c03fcbf1a4a69c63e"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","1c3b509bf0c5e028a6be30f4a615923e"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","8b66458c56c90f993f2df71ab9072c49"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","569fea3a760aa76eda3a69c761e0ad78"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","bdf6536e160e04aaa93fd809680fd758"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","ce14a9f7a4373ac7866544b5a48440c5"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","b1bc01ac07ce9991e07d75edbf0c06d2"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","9fbb28f2e03182447ed2581a01569f00"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","7d68dbc9a4bfa4e2968cc88641ebabb9"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","31307d036c18044df4a9cd85ba35e6ec"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","d8ffbf2fd7c486e03c39333986cecdd6"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","8710c5c44389ebe531326e02656cb8ca"],["/2023/12/05/系统设计/开源协议/index.html","5644ed7c41151f59be7e54662b66ef0e"],["/2023/12/09/MockMvc/index.html","7428c5fc78bae28d084673f77c251102"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","7221a7b62c5c069ff1dc2c546a501832"],["/2023/12/19/MySQL读写分离/index.html","b4e5c0c29878eea90d25f7741a71d8e4"],["/2023/12/22/MySQL分库分表/index.html","83f8058b8d6182bb22f017b323586842"],["/2023/12/27/利用NoSQL优化数据库/index.html","af6fc57c1c4e75b8e296de66cc05b715"],["/2024/01/06/缓存概述/index.html","36b9fc69093da3971dd0e8e3ba87c34d"],["/2024/01/11/缓存的读写策略/index.html","73904dc696051e3ac746e744595255a9"],["/2024/01/14/CDN静态资源加速/index.html","e848c0fb81e57e06f9f949d9169b87df"],["/2024/01/18/消息队列延迟问题/index.html","48e6c8498edac03471275fea0ccb3100"],["/2024/01/22/高并发系统分布式服务方案/index.html","22b1a58dccca3eebb3720325eb28a53d"],["/2024/01/26/dubbo/index.html","c871d57ea30bd39892d2c65a7690343f"],["/2024/01/30/微服务基础/index.html","fda14fbb8fdf3357b9096e1884ad25cd"],["/2024/02/02/监控微服务调用/index.html","e0a83428e05511b74504e0fa12d35c61"],["/2024/02/13/微服务治理的手段/index.html","048690bb7fd4c47d10aa10619883aa7e"],["/2024/02/18/微服务治理的手段-二/index.html","1c2c91ba86193b948ce192e400029e19"],["/2024/02/22/计算机基础/操作系统/epoll、poll-和-select/index.html","c69d2fe76ef0ecd109cc084dfad554b6"],["/404.html","cb7e32cc08a64463dc13a3c12020faca"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","b9009941d0358d0675d73f6608b3fb63"],["/archives/2021/02/index.html","57e9fcfe1c24817006aa9d7fbfc1d49b"],["/archives/2021/03/index.html","ff63eaa0119cc7b1d4230363a04b276b"],["/archives/2021/03/page/2/index.html","d5451ea4d91fef4f01859ebe24b58090"],["/archives/2021/03/page/3/index.html","1c30198954e2c9c0d4e0a1d7cfeb56ef"],["/archives/2021/04/index.html","2c3a65e17029ea2dbbd8df05a3b94bad"],["/archives/2021/04/page/2/index.html","7711b6ac212695498ebb6c49e85e9cb3"],["/archives/2021/05/index.html","a3b512526b23e56ffa2f394f40df4e23"],["/archives/2021/index.html","a18ce431489f48b4b8712091f6a2ca02"],["/archives/2021/page/2/index.html","687fa2f6a429b938c2648a1f0002ba63"],["/archives/2021/page/3/index.html","d3eb0d997e142a2f05b3c7c8c1a64f05"],["/archives/2021/page/4/index.html","a06df9983cb96badc3830cd9e576bf20"],["/archives/2021/page/5/index.html","ef0044600172dcf77eb9439821e201db"],["/archives/2021/page/6/index.html","91afeed5014c31e229a40b1c1b350cb2"],["/archives/2021/page/7/index.html","5e23923c4cfd8396b98806480a91c48c"],["/archives/2022/01/index.html","8c3b577202210a67d08ae046feb6651e"],["/archives/2022/04/index.html","90a6fa438ee1cf53d25685f36609f1e8"],["/archives/2022/08/index.html","2c31f67747ac201a070d55ea50ed3831"],["/archives/2022/09/index.html","24f9c12464e61dfd886c1ea1dc7a15a8"],["/archives/2022/09/page/2/index.html","13a4ec62e91573fa0b98f2132d465115"],["/archives/2022/10/index.html","7d87662f3405909f0444f1fc95e7056b"],["/archives/2022/11/index.html","427e3904ffc3d03511c16b1571f85bc1"],["/archives/2022/12/index.html","8c0d82f14ce0b64e6ac8d2fb14219b27"],["/archives/2022/index.html","b79f7481264ac766994f1899c6545b0c"],["/archives/2022/page/2/index.html","6e0ea358a86ac350bfe0138afb102f53"],["/archives/2022/page/3/index.html","ee8a2493a9950809e265d5c05be6d2b2"],["/archives/2022/page/4/index.html","18f380bca31a226f06f4e1a7c69b25aa"],["/archives/2022/page/5/index.html","16a7a58950d4eee10e49f00362a6405d"],["/archives/2023/01/index.html","85cc546e3e0ccc05c783c23a2c38bdb4"],["/archives/2023/02/index.html","7f5f698d358566c73f2d100c40b1e264"],["/archives/2023/03/index.html","021a08da5518191e92b2231e039600ef"],["/archives/2023/04/index.html","b95e2d6ab5dd4cb7fda17bbede911c22"],["/archives/2023/04/page/2/index.html","370a289e5b9848dda14b401038cdd8ea"],["/archives/2023/05/index.html","ceee8e1349c02cc1d47d7abe4a2eff22"],["/archives/2023/06/index.html","34cfe9b0922dc0a30305fa3847e8401a"],["/archives/2023/06/page/2/index.html","b42c3dae6daf86dccfb70277435601b0"],["/archives/2023/07/index.html","a6414cb520d0a81421d2a45c0ba3ab4d"],["/archives/2023/07/page/2/index.html","178645039dceeb9ca06725f3f9780766"],["/archives/2023/08/index.html","d5a75a24507c4539a246390ce19226e8"],["/archives/2023/08/page/2/index.html","45c9052b4843a89c3e43d06c571a031f"],["/archives/2023/09/index.html","102edf7641857bc720eb316669ffa301"],["/archives/2023/09/page/2/index.html","a96160bbad25ee1d708e52068781ce73"],["/archives/2023/10/index.html","6fbf7eb979dfdb70dad85f9c791081f2"],["/archives/2023/11/index.html","7dfb97c90f52473a4de83b157c7c431d"],["/archives/2023/12/index.html","84540d5b51257b5932500aaab843084f"],["/archives/2023/index.html","f1c8870799069a437ee3c813d67b1d09"],["/archives/2023/page/10/index.html","47f4e497af39e0dbb37086a6477860d0"],["/archives/2023/page/11/index.html","6ef51d73e0e0cc3482562e742b25fbd2"],["/archives/2023/page/12/index.html","176a9689ae8dec105f686d1a12d43240"],["/archives/2023/page/2/index.html","962f780063cfd3ebe72c2b62f0168010"],["/archives/2023/page/3/index.html","e2008665beb015ff316b9daeb3e97c8a"],["/archives/2023/page/4/index.html","b1540964685458f4da00e263cc603233"],["/archives/2023/page/5/index.html","fc3d59fc401b9a71f86285e8460372ab"],["/archives/2023/page/6/index.html","070a1bac450581c5d92263d5c012c501"],["/archives/2023/page/7/index.html","d7186bbee710f2e99f05cbf238c01afe"],["/archives/2023/page/8/index.html","2588674b30b4e3cc43df1b28501f42a3"],["/archives/2023/page/9/index.html","3c3b0d43e0274bfb4862d72f41326c1b"],["/archives/2024/01/index.html","4248a388ee2aff212d952172390052a7"],["/archives/2024/02/index.html","b36ff27579c3731dcb95bc384afd022c"],["/archives/2024/index.html","60758419671d43415931eb4d0864a859"],["/archives/2024/page/2/index.html","5188353ba607e17edf5cfee917c3ffdb"],["/archives/index.html","61a8aec8f7fdc06a51a92cb0bcc6d287"],["/archives/page/10/index.html","6dd57f0c1de7c0c2c9915209f2e2c7ef"],["/archives/page/11/index.html","0261f716a83f7da99f5d87b68c5c3261"],["/archives/page/12/index.html","17aded50e657419fd0ba96e6f32873bd"],["/archives/page/13/index.html","e8bd88225d0ff9dc5dd85b231a94f446"],["/archives/page/14/index.html","dc01185955f8b41894caa4f0be6e9e23"],["/archives/page/15/index.html","d489627e5bb35c11329d490456918655"],["/archives/page/16/index.html","f110673da83cd63b225ec1d6d7abb007"],["/archives/page/17/index.html","0f0996db10f7b87c4818c6a9173ea140"],["/archives/page/18/index.html","fd42ad2b079056628c69780a4f65df16"],["/archives/page/19/index.html","77b68d4a9c5e82f7816a3d75d8aabbcc"],["/archives/page/2/index.html","a01b61013d90637096c218c217af978c"],["/archives/page/20/index.html","2475dfb936cb80d0007f4765770cba19"],["/archives/page/21/index.html","91d5355de2d73024b7cf0c3f5c00fd27"],["/archives/page/22/index.html","d41ec335c79a9cdde7e15253bb0f83d9"],["/archives/page/23/index.html","9fd6157969129142012f15e0810ed26f"],["/archives/page/3/index.html","f9ca080749faa178ed9a49ac09574488"],["/archives/page/4/index.html","81728ee67c0201e0531b3f0659a18067"],["/archives/page/5/index.html","73e062cd2cb23552f76822d5dbd96012"],["/archives/page/6/index.html","4e4f3d95c7712cc1b1f30e3aa7a47258"],["/archives/page/7/index.html","1d95f1c256345e8da3158b8e6ba6bc0a"],["/archives/page/8/index.html","acb1cc5b1847f3a7a6785709d28f3cea"],["/archives/page/9/index.html","ddaf73724bd9ddf09feb25e3012d2003"],["/categories/Devops/CICD/index.html","475451a1831cdbd9127a79ffb4c82531"],["/categories/Devops/Linux/index.html","aed1922bc73934e2eee5c9a6e49e18bd"],["/categories/Devops/index.html","7b3e3cde825d681015f2ba68a6221763"],["/categories/Java/JVM/index.html","cf053e5104c8856356247654cd6f04cd"],["/categories/Java/Java基础/index.html","dd2420df3a96b776d8899f1cf4d9379d"],["/categories/Java/NIO/index.html","b5db201c94551f00c66183be69a46bbc"],["/categories/Java/NIO/原生NIO/index.html","0971f1dd906896a42a139ad472eed87d"],["/categories/Java/NIO/文件操作工具类/index.html","5fae125a097ad5ee213217ee010fdb1b"],["/categories/Java/index.html","42dd07155c2da356b744c900297abaeb"],["/categories/Java/page/2/index.html","6562d0beebb663b9bf4986590bd2644d"],["/categories/Java/并发编程/index.html","25b27e48f4d6eb8c8dd1197c8411a5ed"],["/categories/Spring全家桶/Spring-Security/index.html","49fe97a284906e7aa94726b68aa5847b"],["/categories/Spring全家桶/Spring/index.html","47c5d69d5c706b79d3d2282759d637aa"],["/categories/Spring全家桶/SpringBoot/index.html","661c1b011c1ed33636b01b905732e45b"],["/categories/Spring全家桶/SpringCloud/index.html","a534ad5897184aeb288e24bfd7df9873"],["/categories/Spring全家桶/SpringMVC/index.html","3a2c1410f0d8276317351c1ad0f89842"],["/categories/Spring全家桶/index.html","adbf6f49c80286f8d1e8984da0ffe934"],["/categories/Spring全家桶/page/2/index.html","d93f263a5edcc7d4f02926dbb4e67707"],["/categories/index.html","39ef97dcab29e4128cc5bbdd5b27b398"],["/categories/中间件/Dubbo/index.html","e96708525c94c23717def417ebfabf3f"],["/categories/中间件/ElasticSearch/index.html","b075c49aa8b10a453cf2db44eb50ba1c"],["/categories/中间件/Netty/index.html","cd3ee876a881ab0ef1efedb8c14e997d"],["/categories/中间件/Redis/index.html","6ba23928eea5c67df4a53d2eeb752332"],["/categories/中间件/Redis/page/2/index.html","3b509af6549740cd91c3f02e281e3689"],["/categories/中间件/Redis/page/3/index.html","c72384ef22ae8d13394eceaf6e958c67"],["/categories/中间件/index.html","49cd8d1fc09333ca5f7d08821dc2c30c"],["/categories/中间件/page/2/index.html","cc1734cbf998003a80a4a94cb5df1f85"],["/categories/中间件/page/3/index.html","5af62431d337e0f40e4af432a8e7916d"],["/categories/中间件/page/4/index.html","abf001b16d1fa82fefb8d9133338570b"],["/categories/中间件/消息队列/RabbitMQ/index.html","6b52b0e1a37c556d9ff4244498fdf304"],["/categories/中间件/消息队列/index.html","5413192205f8864da1b93914b8b8ed41"],["/categories/前端/Mock/index.html","d0973be4d9bde0954ae0f7e9710ff822"],["/categories/前端/Promise/index.html","e2a2656111ae70b9cc7cfcf940ae38fe"],["/categories/前端/Vue/index.html","f00360b74792fd34e7af5bb6d72611f9"],["/categories/前端/index.html","551e6c2c5c7e515c680ff82df39779c9"],["/categories/前端/jQuery/index.html","97d365e148b6f661dc788b314bf1af04"],["/categories/前端/page/2/index.html","c11013cb747d243b582b73bbfe4b27c3"],["/categories/前端/原生基础/index.html","e2ccfd39c3453727613106df1ca5a1f2"],["/categories/前端/异步通信/index.html","54f39fda5050f0f8effb0d42b8d2b28e"],["/categories/工具使用/Git/index.html","fe9d96339a2bdb8f4bb9e5c45bdfc6dc"],["/categories/工具使用/index.html","4aa9e550cfc5c622b58699e3df3ef635"],["/categories/工具使用/markdown/index.html","5deeb112a1b60c1d587ffadc1bd7d983"],["/categories/工具的使用/Docker/index.html","4a9dd71a21c4e87f750946a07d92de7e"],["/categories/工具的使用/Nginx/index.html","c193f52f820a93b3eac625878a5d9db4"],["/categories/工具的使用/Swagger/index.html","f68161f4717b28bd8e67aa6b80d034f7"],["/categories/工具的使用/index.html","9639c5bdc1c3ba293dd5dd865399a030"],["/categories/工具的使用/博客搭建/index.html","bc0172327b3297692e54a61834087bd1"],["/categories/数据库/MongoDB/index.html","da08cd65395daedc221f99144e1eaa79"],["/categories/数据库/MySQL/index.html","208b87eb5150f5e6f31440dc8ad32fa2"],["/categories/数据库/MySQL/page/2/index.html","21ab9cc669ef8734705d9041d7b56170"],["/categories/数据库/MySQL/page/3/index.html","445f551b6bb46895c0db6fe522ab1953"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","6fb4dd431bbd8a7c815943f463937412"],["/categories/数据库/ORM持久层框架/index.html","31fca38ccd3140f665d66d7693a68d6d"],["/categories/数据库/index.html","c4f8ef94ea36309c2823ad792b03f87b"],["/categories/数据库/page/2/index.html","f133f74b8a72fce8ed3be917c7b8bed6"],["/categories/数据库/page/3/index.html","3b22c16d0756ef2a1b9ce9fc7ae3a3af"],["/categories/系统设计/DDD领域模型/index.html","6e989a6b371b19d30c6afb722fb92e97"],["/categories/系统设计/index.html","e7c6c6f659f1f6337933468f825e9e11"],["/categories/系统设计/page/2/index.html","053c9e2d0ba2c1b3dc39b8f382d25efd"],["/categories/系统设计/page/3/index.html","965a2765b032dcfb3c9c4f6571d340ea"],["/categories/系统设计/page/4/index.html","69fcb6b111eec6107a813b8a6e84ef34"],["/categories/系统设计/page/5/index.html","f715611182d390cd07bc92d88d26d973"],["/categories/系统设计/分布式权限认证/index.html","3471596a94d054d25352c1d135d8d25f"],["/categories/系统设计/分布式系统/index.html","792d0f89c821106b07a75c3e644c8c7d"],["/categories/系统设计/分布式系统/page/2/index.html","fcb695f659fa426f48412bc9def96e05"],["/categories/系统设计/分布式系统/page/3/index.html","a1da9eb25a6fc1b0d862dfbb6666757f"],["/categories/系统设计/微服务/index.html","8bb0c38bb958570e63b40fb6f8c4b969"],["/categories/系统设计/数据库优化/index.html","cc16dbdca33e39d758de96ec35e7b153"],["/categories/系统设计/设计模式/index.html","e2876d3d07b1914b896bcbdd5ae8567b"],["/categories/系统设计/设计模式/page/2/index.html","a4283ca92e5e3e6fe5df35c2c21f2ed8"],["/categories/计算机基础/index.html","41edf2a06d8678b7e11763005470ebf6"],["/categories/计算机基础/page/2/index.html","9d4c49b85f5ece5c27bbae580491054d"],["/categories/计算机基础/page/3/index.html","8458705bf3bf6edadbeaf22df46f8e92"],["/categories/计算机基础/page/4/index.html","2c63fd483e0e096ff1823d9571709d9d"],["/categories/计算机基础/page/5/index.html","89fb4728e4b8aaaf192ccccc042b6c15"],["/categories/计算机基础/page/6/index.html","cf0186f330841708dd0998756b1d73cb"],["/categories/计算机基础/操作系统/index.html","24edbf11657f762f5829fb820ff20bc3"],["/categories/计算机基础/数据结构与算法/index.html","adcb959de6417522e040e523a8820367"],["/categories/计算机基础/数据结构与算法/page/2/index.html","2df43b9e568dca947906136f016baab1"],["/categories/计算机基础/数据结构与算法/page/3/index.html","b30ca53c8e9fdbb2901279677f3c8882"],["/categories/计算机基础/数据结构与算法/page/4/index.html","ef14fd85273f80469d5e156523e4720a"],["/categories/计算机基础/数据结构与算法/page/5/index.html","cc79c964196b540d1adb7f87c43b9281"],["/categories/计算机基础/计算机网络/index.html","32bc7d6404e091979c93f3e4c12c5273"],["/css/index.css","2af5ea34362e0b34f799106b2659ad50"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","c2df79e4f97bc199f0b4d1d017d3376b"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","fb48de21249752d84bb9c366376e04a5"],["/messageboard/index.html","bbdf7b726121ae21d1ae94edffac9d9b"],["/page/10/index.html","719e148fc24977c272924e57ecd3b964"],["/page/11/index.html","a50af98f3a1e738a89044c5d29f60aff"],["/page/12/index.html","34abe6de2ba52f9082b0527128f04756"],["/page/13/index.html","0c77628012beede7c7771847ba3c8c9b"],["/page/14/index.html","a6a34b5cb7dac4cf9976f18372888b7e"],["/page/15/index.html","97332941d4c20cfa0d9dcbbfbea38d50"],["/page/16/index.html","2513f8aa76751b3263e1517c6d6802ca"],["/page/17/index.html","268db7e912a3680a139aa603a3c856f1"],["/page/18/index.html","37bdd6fdeb9284f10bd8255927caa2b7"],["/page/19/index.html","3fb84577a73fdb579f6a5e38d570cfe0"],["/page/2/index.html","b57277fbb59f83719cab8f6b3ee58320"],["/page/20/index.html","690f0605feded0716393b0a43223dfad"],["/page/21/index.html","650d0aef158256ecab6f277ca89a8c93"],["/page/22/index.html","ee64704fc46b05fcde51276132b798a8"],["/page/23/index.html","92e8e7d368f2137b1f4de73b23292032"],["/page/3/index.html","05b2f6378dcf7aaff41142d07290f1e4"],["/page/4/index.html","69cdf5c18944956fe562db8c392bceb0"],["/page/5/index.html","bb040d937f851b1b287965ca76f85339"],["/page/6/index.html","53a94d8d32ff767f42fd9264b30c2aa6"],["/page/7/index.html","74a5acf711c2b28e2d7b1c331ab6ef10"],["/page/8/index.html","dc29382772631f8c2b7d61cf09767ac3"],["/page/9/index.html","f44e9ef255c7286e89bf725e46635a93"],["/sw-register.js","b64fb29633d51ac5ebb3011373e7058d"],["/tags/Ajax/index.html","1037c2f04489caf13a60d9c1f4aced2d"],["/tags/Axios/index.html","b5481e833705ec898cb7a0957256d216"],["/tags/BASE理论/index.html","2f6dcd02796264567405bdc293d27b13"],["/tags/CAP定理/index.html","5d54e28e66f286eef93c1899faf25152"],["/tags/CICD/index.html","4ee0bf2bc1acfecf94fecaad7cde71b0"],["/tags/DDD领域模型/index.html","6c616b6d3714ef511a09fd55826cbb55"],["/tags/Docker/index.html","ef1705fd42a4fef0384943f8ef2cd08d"],["/tags/Dubbo/index.html","e8e81289d1e83ba9bc7e4cd3a1ee593a"],["/tags/ELK/index.html","c18cdd6a8d4a794fd8cd24a45894fefd"],["/tags/ElasticSearch/index.html","0ea3a189d926b4387b8f690c831af431"],["/tags/Git/index.html","03d621e2da9c1336d25185519746c36d"],["/tags/H5/index.html","a6d1430209532ce24218cc0ceb431f60"],["/tags/JVM/index.html","39b44657c82a5244c70e1f2d6b78fdbb"],["/tags/JVM内存模型/index.html","519468065af3600d2023eca58ddcb709"],["/tags/JVM执行引擎/index.html","51eb81af54bdef7047f99d7805928f90"],["/tags/JavaScript/index.html","0600d4ce5801b28e656b3245431adeb0"],["/tags/Java内存模型/index.html","de1c3ab0ea567df9fad6e4d941213c12"],["/tags/Java进程线程/index.html","abfd5a5c2bb19c407db3b05a2e62db31"],["/tags/Kibana/index.html","30b74b91ab26cbb2c2e6a9892000fffd"],["/tags/LeetCode/index.html","9359453d30c939be876da9d172db669c"],["/tags/LeetCode/page/2/index.html","84a3eb316066a99353cfa586dfa232b0"],["/tags/LeetCode/page/3/index.html","ee21490d3bdf3f64feeb733a8f802faf"],["/tags/Linux/index.html","e6d58f2af8cf5cf046d7dd5d8122d614"],["/tags/Logstash/index.html","1d7b91a1841ea50c6cf80d8c79aa73a7"],["/tags/Mock/index.html","364938f4dcd5f82abf30b503fd58546e"],["/tags/MockMvc/index.html","5a8a09ded9a6071681087db43227c227"],["/tags/MongoDB/index.html","b2746fee7bb82fd559cd13ca840af66f"],["/tags/MySQL-事务/index.html","7d5fa915e8e6fd12f78415eb31a0ef3d"],["/tags/MySQL-数据类型/index.html","100c1fd1a96cda14691f55cbe06b6522"],["/tags/MySQL-日志/index.html","d3c52dc99aa7791cb527c2fa62619cb7"],["/tags/MySQL-索引/index.html","5b7102f30b77b1bd96a1dd50f0d5fc85"],["/tags/MySQL-锁/index.html","a8a636db0fd1cd8958b1eeafeda9c46f"],["/tags/MySQL/index.html","92d4cfc7be176d16c0cc9f60f4b4bbb1"],["/tags/MySQL/page/2/index.html","da54ac9a91f4cc2f2e306e99c6cf7ceb"],["/tags/MySQL分库分表/index.html","89da5e94fc304d03d4f7801a749aa74a"],["/tags/MySQL读写分离/index.html","b01d3413cf3ad5a72b26027f44b7e6f3"],["/tags/Mybatis/index.html","a92c13c4eddc20c7a1b8fdcde4a98ea7"],["/tags/MybatisPlus/index.html","81412b63557f8f4e5e15941b30773438"],["/tags/NIO/index.html","e675b4a44c1a5c2dce0e82b23e95deb2"],["/tags/Netty/index.html","1ee9b4bc6516c7370a71532836d5423c"],["/tags/Nginx/index.html","a9828ac53f218915173ff631ab153e40"],["/tags/NoSQL/index.html","7e23fcec1b6ced8dc35b8af5186bd32a"],["/tags/Promise/index.html","f284f79775f2b3e640c376d0640e0171"],["/tags/RabbitMQ/index.html","8c4b61b08144c8d1fc5455448d27e91f"],["/tags/Redis/index.html","dcec069c531c31872b7247826fd44bef"],["/tags/Redis/page/2/index.html","a5051f45fdf85ac209deb72a634173a3"],["/tags/Redis/page/3/index.html","774b2c0e3c20ef909be6d0242114f46e"],["/tags/SSM/index.html","05278639b761027bc2db3c0fac58fbdb"],["/tags/Spring-Security/index.html","37459b30d1f3073f3db0d2dcf075f738"],["/tags/Spring/index.html","59a78ee1341a526ca543a9a9d39e3d7d"],["/tags/SpringBoot/index.html","985de1d9589ffb2b44a1e133af733e71"],["/tags/SpringCloud/index.html","ec6f5ccd6c0943c140b71d670c6bbc87"],["/tags/SpringMVC/index.html","f10f1d7ba5d32f27a317e9a60936c896"],["/tags/Swagger/index.html","0ac0c4c4dccd8152755da6d059be19f0"],["/tags/hexo/index.html","6f08339955f5054001f72a5a24868b25"],["/tags/index.html","42e54141dc125d8c1ab417aa66d95938"],["/tags/jQuery/index.html","3aca39d3de8bd0d2037d4e41c3370842"],["/tags/java/index.html","f7cc83b2c2f7e2663a2ac4776739064e"],["/tags/markdown/index.html","0deba2f173db609e2ac888ab39d46b8c"],["/tags/rpc框架/index.html","285fd5053f83cae5a65f228909242ffe"],["/tags/typora/index.html","e90a26a609687d16930b761052e11d0e"],["/tags/vue/index.html","64ed6013eac44ecd5a51b68e48cd3313"],["/tags/享元模式/index.html","8de8a52698190ce739366245c40aa819"],["/tags/代理模式/index.html","484a015b87b8c6f3cf24633fe84cc7e9"],["/tags/内存管理/index.html","4bb936851b000b65945e778fb6931518"],["/tags/分布式/index.html","460485abcd6bf0d3f3992545fd212046"],["/tags/分布式一致性算法/index.html","2e7778ba33db59a0d96a1542c3525b07"],["/tags/分布式系统/index.html","371a79b07a98fb22f3f0cc8cee265b11"],["/tags/分布式系统/page/2/index.html","f4ac9806385900b9c6e8a2ff139d5c86"],["/tags/分布式系统/page/3/index.html","fdec68bf161f88aca39b91802e7cd398"],["/tags/前端/index.html","7b3472b77c6c3e1df5021dea25cf606c"],["/tags/前端/page/2/index.html","029980d5196c3b632808d29bddebe02b"],["/tags/动态通知/index.html","5dd96c903e93ee7d0241a8f555ec90e9"],["/tags/博客/index.html","c642f94c3cf47ec51005c62fe14ca4b6"],["/tags/后端/index.html","b239877e720e1c302f1ee06720eb011a"],["/tags/外观模式/index.html","4a030e0dc8b16dc169900231b2709b92"],["/tags/多级缓存架构/index.html","951dae26e9c1aa223c3eb12028a18be3"],["/tags/多线程设计模式/index.html","02d4fd806b10c4449680b296829ddbe7"],["/tags/多路复用/index.html","a58201346c577a58307dfbffc8042ad2"],["/tags/容器技术/index.html","b60d2b26349bfdd650bd41f94cc70b8a"],["/tags/工厂方法/index.html","d4095d07658342772d839c44412fe2fc"],["/tags/开源协议/index.html","bdb5b5ecd05a74fac760f39542f90d6b"],["/tags/异构同步/index.html","ad2ebe91e64812aa5f36f6dec4c44efe"],["/tags/微服务/index.html","52026515ecf5e8f81c8c133dfe9c15e6"],["/tags/微服务基础/index.html","8b85fe46bbaad42ecf35761cc0e592ba"],["/tags/抽象工厂/index.html","3e189934706c664cb88a1b24c140e9df"],["/tags/持续集成持续部署/index.html","864b9127beff39e0e6256ada869b14e1"],["/tags/接口幂等性/index.html","6092d3a22b0baed99f2f3a8aa1877741"],["/tags/搜索引擎/index.html","dd043aa0cab1a1dbf4c12dd10349d1a1"],["/tags/操作系统/index.html","7ff7e1fb4a0aaf8551e62b98a49470e7"],["/tags/数据库/index.html","230c0a9b46b961a60c6f5df48cefb0c0"],["/tags/数据库/page/2/index.html","ccf1fa3b5776aa1b20f91fb2801f9f0c"],["/tags/数据库/page/3/index.html","ca227061fcaa606f197f086822d76899"],["/tags/数据结构与算法/index.html","3357f60c0c9a3bd57a02a66c47426905"],["/tags/数据结构与算法/page/2/index.html","3a8e3470de9099aa2ca944697ef29df1"],["/tags/文件操作/index.html","357bd1423254ddbf5cbe3072e92a14be"],["/tags/日志/index.html","ed151b15788d75dd678913807205b2f6"],["/tags/服务器/index.html","b0024f17a239429607994f9dc416f78e"],["/tags/服务治理/index.html","2d3a9f4faa80569f600adfa85ab60428"],["/tags/权限认证/index.html","d27dc650d69cabfcd5823b1f2a474bf9"],["/tags/架构分层/index.html","ac1944838adcfa22cee7f5d31f965b8b"],["/tags/桥接模式/index.html","36e4e28cad2d29f34b990205da44912b"],["/tags/模板方法模式/index.html","6c4d934768468cc4d666bd40fb835ea1"],["/tags/死锁/index.html","9cbd2f6047e22791ad2f1e1a7d526bb1"],["/tags/池化技术/index.html","a45579e6db95faf8ed8c7d3db2eeeaec"],["/tags/消息队列/index.html","9349bd1fc7cd1e792cc8021638a1bef3"],["/tags/版本控制/index.html","c7fe26d00b2b0433a220571b4756b69b"],["/tags/监控微服务调用/index.html","b71e8f83f002a61c1c48412e16128d4a"],["/tags/策略模式/index.html","dd722f1730e446155d52188891f43992"],["/tags/简单工厂/index.html","03d985aa317513f7530af9dc1ded407d"],["/tags/算法/index.html","d83b6ceea6c9c706bf09a25c17681610"],["/tags/线程活跃性问题/index.html","70dcabd3d49c587fe637304c7c5a1b40"],["/tags/组件化/index.html","a8b1fbc4d3ded7d5e2af92aed3641133"],["/tags/经典限流算法/index.html","a0dcfd888b649d78d1a044e260d9d3b1"],["/tags/缓存/index.html","fd7e91f2aabde1a33874ef43fa159938"],["/tags/缓存/page/2/index.html","0b7ef1aef00dcf60bc5c600a379bcd02"],["/tags/缓存/page/3/index.html","b1bef28eac8171b1659e013028d9c097"],["/tags/观察者模式/index.html","64536829608a76a71319be9cf1c5ae8f"],["/tags/计算机网络/index.html","ece9866e28ef6aaf22997509a394fb27"],["/tags/设计模式/index.html","56596f5e345f30694befd3df49354630"],["/tags/设计模式/page/2/index.html","fca5144d972e83b7a4817521b2a487e1"],["/tags/设计目标/index.html","8b28bdc3b510eaa51f02eb2b43da12b1"],["/tags/资源共享问题/index.html","94d76f9ea80c1de60470f186c4f83777"],["/tags/进程管理/index.html","b942b9d7c45d86375335e43de53a9381"],["/tags/适配器模式/index.html","4ba129abf8954f95ce270ad8623b34e0"],["/tags/通用设计方法/index.html","21b626e121129f06f7e066dd44ffa55b"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
