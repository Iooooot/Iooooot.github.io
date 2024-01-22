/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","b7a99002957651376a04a6b7535d91e0"],["/2021/02/22/工具的使用/博客的搭建/index.html","3472c39d2016a0dfb43954a21af7eb47"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","6217e7df09256f8580f091d7b862f7eb"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","bae17f58f810ae96729580b5a078dde0"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","3b31682696d4eb98e99a46f513ab3c15"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","849e24f6189419fd91e3b48a6c520816"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","94f470f6c8c8a93fbf2390ded4e16d06"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","92d3c53e302e2bbdd6369d9ceedcd8f8"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","d2140e58999643b58b840c6363c60d0a"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","425bf9e877e6db9557ee9d3318f6a047"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","a545df214cdc9f311bc7b032761be694"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","ed7652552bd01325f92d80a4f295eea5"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","d6452dbff306580c8c7404507dde34a4"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","77e66641f0b7bd60476b3159ad805ce0"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","bcdabb7fb86f2aecb86bb0ec8f3935a8"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","ee4be6cce216ecec03e743b2c55bde9a"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","9773c8be49c9b29788dd4655d25d6e95"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","dccfe37d680a89e3a8e1d95efb6aa7ca"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","9085ae2ec5759f75f58b2b57a24db074"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","746dd7c26256fbb96560026729b56026"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","0540cee01c78ffe8cf006b64891598b8"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","4518469b787fdc2e0a47c037239f99dc"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","3ad6f738d4cfe785f8a3e01e74663665"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","812e591c92cbc0e8283bc02c9f0fcf3e"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","ad8dd4c3707b13eecc7d64eb27f31302"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","7557b7d11db3bcf8a9521bbca10bc2fb"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","e3f4ce20f9154bb4390f22db558db46a"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","f10b7e9df5112d64e5ddc130011f1f4f"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","cd1dc67c953a002816ccfb9553b2ae34"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","e94169124c620b39567669aa79db86c4"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","8be2750dd653c549783124db2f77c396"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","3966ad7b6939319419d76cb04bbc8d59"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","cbc1f75775395716e9fbfbeacd50a39c"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","56109720a3931fb4d5788ad15866d559"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","eedc604e7d3e2f806ffa9f52daa671da"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","4e6f7e759bd02ca9973987cc360e99c0"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","60eafa7060252bc4c6f4364ea7c15585"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","756ba5616e773aacb1168cb11cefb1a7"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","c24d50b8e4bb93e22f01ecbf98251e92"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","8ac0999e994d1f6c7d0a6d67682f3b90"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","8f53cf7c1081f089097a29b65ff34213"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","55badea389b1d571c8063319f3fb737a"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","072976c868ed5635478c41df5ad82678"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","317b3328be167c67eb171f79b6a23772"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","17943713ef387809f4ac2ece734f267b"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","3f471d5439d5711ba90af3d7159438cc"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","454745c2677d97bbc06c6472574649e5"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","e48714bb0e4639e020b90ef1a9f32d8b"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","e239ab2936093527160859c9548cf16b"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","f80c05861c83c96e720e81bb150205b4"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","822ba48b64924034c326fd6e3e0eff37"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","84926bc86bdbf96f3df0496d0fd2baeb"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","4409b03074db13b807fd410e1b7c679c"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","e8d23b40d526bf96c4cba56224e90d16"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","6ebfb13f69d191ebde9d077f2043db4a"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","a696adb5652a1eb9a69c05f5a1b8c893"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","8e8f8a8f6dcb1c75c15032172a46ad74"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","30e8f567d03026d6dc57c8d0ce08cc44"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","4b764362d1907a31a3e377dfc26524e1"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","691da4efd67cd4d3b80a9da8bb393fdf"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","1595c77dcb92c3c77af71048d7880142"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","f2d6fe23065426868be03355cb66bd21"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","8fcb6e3b3d24625d0edbbb1aa8510fac"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","e072f9ec2003efb64de29ae5860b7ffd"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","5b5ddb3a40f159d2d1cc35d0c583c62f"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","7634a91782b4d89c12060dbe5e46c779"],["/2022/08/17/前端/jQuery/index.html","db95ef4156448829310dabb16a9c0108"],["/2022/08/19/前端/JavaScript/index.html","4875eeb428ebe8cb7c8a3e9f43966be3"],["/2022/08/22/前端/Ajax/index.html","f741b61b09d4c093e43b7c4794cae4aa"],["/2022/08/23/前端/Promise/index.html","61e92f301cc6e4c2ec34546df0a59842"],["/2022/08/24/前端/Axios/index.html","15ebac9ca67c78cc8243e1470fd2d67c"],["/2022/08/25/前端/H5本地存储/index.html","508cccccd7679f89c53870f02d61ab65"],["/2022/08/26/前端/mock/index.html","bbbcfdc12b0561b6814dea5c1ed0c2c4"],["/2022/08/31/前端/vue/VueJs/index.html","1669956f6368cb283d83f321c51d1f2f"],["/2022/09/01/前端/vue/vue组件化/index.html","0133dbf46ced4e0585c4112a90b16f52"],["/2022/09/04/前端/vue/VueCLI/index.html","d54b5fd92aa400cad247372e5711b5ce"],["/2022/09/07/前端/vue/vue实现动画/index.html","429584e94498e9c2d480d4eeeadf19a1"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","a986df9f8f361a10870cdb7a155179c0"],["/2022/09/10/前端/vue/Vue异步请求/index.html","9537a087c32c3e9a3ff7426dbe2e993d"],["/2022/09/11/前端/vue/vue-Router/index.html","4ec9ee6afa8d098a83b9ac8d97476e12"],["/2022/09/13/前端/vue/Vuex/index.html","c7144a84b1bb3b4e7ab513308c8fd655"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","d2118ecc22fe94d3c417fb0b2ca2e011"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","fc4d88b57121865f2055dc2a6fa51916"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","3fb6417eb205f508d289f675dc0a004b"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","89ef5976a829298dc4a93c5bdb239a64"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","caa71c79338a23887e5c15686d98da66"],["/2022/09/28/DevOps/Linux/Linux/index.html","48b9e358877772b7383605c14f21a317"],["/2022/10/02/中间件/Redis/redis基础/index.html","cf7ed02d7f8a5463ac9b24137e651f39"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","4f4c27acba9dd848e6b12dcebd51ca14"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","bc2f71824f4e14fa0eeef499c64412f3"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","8f47652718a2b7d2f081ac581cf3e091"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","d4848ea4ee53cecdd0b3a18e512d788e"],["/2022/10/17/中间件/Redis/Redis集群/index.html","03af12b094ffcae72e884b110099c0f2"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","6c23a811ac34eb69dfbafc93e218dcc0"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","5b056610b79941643d089e72564a44dd"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","281e8a6a534ea28e6d4947660845bd18"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","603491d582cd7518ef48084de24aaae8"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","428dca68adda3965aeff16ec977025ff"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","0df86299573e37e0652293d433d37abe"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","632ca38b6522be0a7962de4d2c9da5fb"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","e68a711e2760f59d8fe9f4dd0ce983d8"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","f25cf2f9375cbecd5f76a415a4a49ec5"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","aa51ec002a05092c92f45312c92e517b"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","2e3494ceb94b3cf4cb3ba982ecd4af7c"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","8c31608b630b107112f91edb9b54d14c"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","529149a5b15b0e4f552801576605b82b"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","5e6a3572ce7063284031d82be706aed7"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","5193a27ea7d9c52565b52bf32a812501"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","14970d2cd8cbe0bd098c2ac52c883c3f"],["/2023/03/10/DevOps/CICD/CICD/index.html","1b118111b4cbae8601b589952e015456"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","90952d1c4418646166b99f8489612a92"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","580247bf74f02d2aec94c11b773e1ebc"],["/2023/03/13/Java/NIO/NIO/index.html","efcefed7cb35caaaa2dc7bc0bd78fbb4"],["/2023/03/14/中间件/Netty/Netty/index.html","20c5ba4af14f7b55714df45618e0685c"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","e64ae91504617ee4621ab305d37fc1a7"],["/2023/03/17/系统设计/分布式系统认证/index.html","0f5ddbcac61f858ffda5f715a318a97d"],["/2023/03/19/Java/JVM/JVM概述/index.html","a033ea0276f34a4b5a86f25724a57fb1"],["/2023/03/23/Java/JVM/类的加载过程/index.html","bcd5911a380baa0d47404c0aaa6034d3"],["/2023/03/28/Java/JVM/对象的实例化/index.html","85ae343a12d5ddaa12da8cac972408ef"],["/2023/04/01/Java/JVM/运行时数据区/index.html","a88fa54ee4e91fa7068572b96fc03490"],["/2023/04/04/Java/JVM/执行引擎/index.html","992fbf6b13c5ec0aea65ae820accf7c5"],["/2023/04/06/Java/JVM/对象引用/index.html","7c67746b808291d5938dbe38cc94e3b7"],["/2023/04/09/Java/JVM/垃圾回收/index.html","b5c114803b868e1ba1b2e2e1b50a1045"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","647340b1c4d3149102a88e2dfe94f20c"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","deb09cf2ea88b2363629834dc213307d"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","e979b6c87ff7f71d196a436527ae5c7f"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","d67d4a10bf6b740beadd3ce2ef1f6770"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","703605affd1b76610027e9b7ae8e2d2b"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","adade2c0c0deb2d8396d830f2e3eda61"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","a56de4821e8ef72cfffa83b430623139"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","556a2b1ca35d85057475b57be97d563f"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","55443a23c3736775db798a2cb3148ba3"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","13ac102fcaa058a3c380d35df1b814cf"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","cf9717c9fad6e2735302ead7a192d8f4"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","aa40e4f96487fad8de3b9bc0853ffc33"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","e2740245e723c0a76dc8ace4592d8846"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","1a33874a70c2b47e89b9db647b32f4ea"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","f11ff6222e434c6ed6faaf41db5b7639"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","acccd9f6e21bd17ff3ce4d2e601daa3b"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","6a161bb62337b880b4c4065fbbae97f0"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","e66d4960403e0d45c6330f06074e1c9d"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","a80962fc177696706fb73e855e03364b"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","bef5e2518480229845d4ae243414dc7c"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","35f24b101b67f9e9107bf01147551121"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","f62ddb9f8dc3e19e8247e44a5f95e6a2"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","8f824ff1744dda414eb3ebfc9e077ff4"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","7bebc34755c422e6f9e8e8a128e80bdc"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","d9cc882b525f3175dfc63538d696a86f"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","3f3a236e91ef1c4357b25494db07e1b8"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","141aa873a2cfcd86aa22dcd15549ff0f"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","c311df939e1713b4a5a6bb9672542980"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","a2fa11b30a1ab1af7f24e0a2139d502f"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","0b2254603a34b227eeeead3514144f9a"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","71fd56ed0e8455fcf4acf80351e16a4e"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","638ec700b5f43ca208a57af21f6687ce"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","5ed3abee16159d739566fd30fbf20330"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","b39f16ade54a63c7090f0f7b73b9e354"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","b37aca7f62a4786a3d7d48f2ca177c0b"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","9c2c8724fe28e28c3b319636d7b3fced"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","7b3a3faf8e48f25702a15b6d90f5659d"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","5c6a3e5058c1ee939b1c191f58074333"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","b38d7cb2802e8d333b186f8f2c18b6ae"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","792d25e3580c0a22a3df6bd05fb1a50b"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","bb7c2d7bf47678970f1773895da99369"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","6c049baca46f9fc51734f38c8736552e"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","5393b038af5b2c62017bf72718b72350"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","0a73973c99c37048cf91f542d4b86f01"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","f186e91c96167171df23747bf0955ddb"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","0d0892161d0e1447c2b218df56cba56a"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","d9357831710b7babe43752021734bac3"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","f0e2a5774fcc59518b6a6a39edf6db5d"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","b9bfb92293fb11a28a66a2b2680f875c"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","5ff447e7da26c38f9914be6b3b12a33c"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","6bd35914c1bfa1492f5b497a56842711"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","72adf925ff980c45a00859aa2f6d0bdc"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","02d01798313a2e650fa062e8c3293983"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","36fb130eb3d7be6b3a231e912055c71c"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","099a446536e0480d0888b2a608577092"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","5c05e0fbf49cc92f82bbc18ba8d4b8c7"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","77e0de62666bc41e1aaea6c42426cab8"],["/2023/09/04/中间件/Redis/Redis事务/index.html","e6c8cb41c4bbc23a2651d8b65961cd73"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","d270e6ee77f722ae194736d09109ddab"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","8c294a149729c076c2e4ed3730c3833c"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","6c723871ebc24a9c5dd8c375e331d413"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","4e008fa62c9a3458aaef632deed5d9d9"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","ded7c608e06b3cad50c351ae9fdc3191"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","9a0eb620a37e2c6d3e45c99079533029"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","d8a81d46ba9eb29c381657b226fc8b7e"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","d55d3015a538560bfbf511af89522ac2"],["/2023/09/22/Java/NIO/零拷贝/index.html","ca7b0f351711f6871e8834487075cb4a"],["/2023/09/24/系统设计/JWT认证/index.html","6fec65820dfa2772b6cb2499d4c66b44"],["/2023/09/26/Java/NIO/Reactor模式/index.html","432196a2b52a564d3a9f5b10877e4dd3"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","00abc268fe992c97fdea80b750db77ce"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","8e20288b845f43ca007313053e1b4736"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","5758e623513cad7c6bad4abbee59cb2e"],["/2023/10/09/Java/并发编程/共享问题/index.html","f1720bc0a80ab6b131508398b982d38f"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","9dd1cd4e7065754395eb0e466eab851c"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","b4047a60739dccd208df943db9693b66"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","d1afa67d3a92d3a590edaebac565f775"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","75d81e5e56455a619fdea2305c89bb8b"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","e3c5e049df6d89d7a4e049ef92e4e848"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","1b58d63ae875b5f23bfd79c921e719dd"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","eb1945475915382eb196d4664891f03e"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","fecd1f48506e96d02e06b2b622da0391"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","610b95e00c8bd196769e0f14a6eec195"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","344a9645d820ad7e59cff940e55ac17e"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","04efcd125ce22758a88abd263e70ca0f"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","c23892f3e8a14802683f385f1bf6a37e"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","be448513505ff2165f472da970020f80"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","c462fe88b28adec011e2d7af969e03ac"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","1ce1172744d30aaaac23cd8bba5c1d6e"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","509d213c6e2b1d9092c66537756c09e1"],["/2023/12/05/系统设计/开源协议/index.html","cd88d3d78ca8e58db71dc6495538be46"],["/2023/12/09/MockMvc/index.html","76e8b8a52f4c8136c6d32cc2066ce76f"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","2d249df256d202c6208eda9f9d531068"],["/2023/12/19/MySQL读写分离/index.html","797b258bf723d76d0d9a456809ef95e3"],["/2023/12/22/MySQL分库分表/index.html","9d22c30643b200570a15e4832bde997c"],["/2023/12/27/利用NoSQL优化数据库/index.html","ff46ab0c094b85d7a3b83a1c8b5001ec"],["/2024/01/06/缓存概述/index.html","388114bc7370803ecb65662e9a08b6cd"],["/2024/01/11/缓存的读写策略/index.html","e36ffbc4eb14f08abc72c4816a90a925"],["/2024/01/14/CDN静态资源加速/index.html","9b1241f2e4956d14dfe868050d64c6c8"],["/2024/01/18/消息队列延迟问题/index.html","2e2f26c442038a746bba9217140a3449"],["/2024/01/22/高并发系统分布式服务方案/index.html","f3f7474ba1f8015dbb40fa2fc0c03d71"],["/404.html","7fd94717b096d5f1976119314e2ad33c"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","790e2cfdaef5312d46616cb94ac6421c"],["/archives/2021/02/index.html","f5033c49e0e8680fe32866d4f5487348"],["/archives/2021/03/index.html","b64fe5c0b5deb958fcae143b67a1cd2e"],["/archives/2021/03/page/2/index.html","750fcd31e59ebc92394d4d5f5fcea8ff"],["/archives/2021/03/page/3/index.html","06ff72af3d3d8cea9234a28f55c79c5f"],["/archives/2021/04/index.html","ac1a9cf63b8605528df10d61709e4385"],["/archives/2021/04/page/2/index.html","4faa6eb53d0678f6c22364fdd6eb6f06"],["/archives/2021/05/index.html","9dcac85af980210a7659763e0b166be5"],["/archives/2021/index.html","f1fffce001c9ceb0c9e7f45da2ec1890"],["/archives/2021/page/2/index.html","049060809cce19bb1005467519c78faf"],["/archives/2021/page/3/index.html","aec8f78022a825bce0605d77666e3ad7"],["/archives/2021/page/4/index.html","83688a1b527ed77a7e10924bf1a78190"],["/archives/2021/page/5/index.html","3a7183851986c4246ee6c9429a6313eb"],["/archives/2021/page/6/index.html","63239f3df2b5e02835e767bf91849bd1"],["/archives/2021/page/7/index.html","b930d99f76d2c7ec196c945ff2d0c337"],["/archives/2022/01/index.html","633e610a451617fd6d82c867f93bc50e"],["/archives/2022/04/index.html","ae7e3c3d394e49bbdaa72a16c8dd94e7"],["/archives/2022/08/index.html","ac6c62636adbfb5e3a15a63398df0c96"],["/archives/2022/09/index.html","1425c355306be49463e432716fc0f9ff"],["/archives/2022/09/page/2/index.html","05bc64ba9538d2d2dcc1ffc36059ad75"],["/archives/2022/10/index.html","b4912f3c68436129681a425846a83785"],["/archives/2022/11/index.html","82b549ca5e19c56a3e51d1c23901b86f"],["/archives/2022/12/index.html","d08eb072e280247b7b2d098700f2d47b"],["/archives/2022/index.html","5ed6767ec8b979395fb74298f5c70913"],["/archives/2022/page/2/index.html","ddbdecd9e99449717634af7ee57f4cc0"],["/archives/2022/page/3/index.html","cadfb2661a068258f9e02986e954cb8e"],["/archives/2022/page/4/index.html","e2ab12b4428c8e85b1d8666848ccb104"],["/archives/2022/page/5/index.html","05b6196549fba4b112d339491ce35589"],["/archives/2023/01/index.html","bcbc2477502f5ae6365c22ca72609389"],["/archives/2023/02/index.html","f93c400cf4098eb8773851671563f4c2"],["/archives/2023/03/index.html","6ab230ba1c0a301807bce14a1f701a46"],["/archives/2023/04/index.html","7c03dc7101eb2642cc774c313fdb0fad"],["/archives/2023/04/page/2/index.html","4758b73b366df67cc6093547ca2f548a"],["/archives/2023/05/index.html","c6b0b15a4075d1cbf7a6c7fe25ba6073"],["/archives/2023/06/index.html","cd070aa316b9d1121cfc03f2c263a6b3"],["/archives/2023/06/page/2/index.html","e2bcebc20326646891930999bd29acf4"],["/archives/2023/07/index.html","f86358cd9ea403a6a59f6aab737c6915"],["/archives/2023/07/page/2/index.html","acd4032926145003a525e8cd7abf8059"],["/archives/2023/08/index.html","01dedcb91194ae722b8060417d3f15ec"],["/archives/2023/08/page/2/index.html","74862342e3591890fa9023c2cee1a037"],["/archives/2023/09/index.html","2153703aabb20551b7fb7d3862b2f641"],["/archives/2023/09/page/2/index.html","ffb7f4b59b0bb37ddc9e6aac6529417f"],["/archives/2023/10/index.html","6002fdc186a90b42dd79837b95c6a41b"],["/archives/2023/11/index.html","4d0ac15f01e50a987f877284212feb35"],["/archives/2023/12/index.html","763353cfac53fa036893d22cd6713d5d"],["/archives/2023/index.html","aa603b8b631f53eec8bf6d6a0294a9c9"],["/archives/2023/page/10/index.html","e0a23f667aca2f936dec0101666f48de"],["/archives/2023/page/11/index.html","678758bd6e88aba1f703a1f739c868ac"],["/archives/2023/page/12/index.html","4013046e0e669e0c9c679052e7ad80cc"],["/archives/2023/page/2/index.html","09ef0b13c60b3d127c1ae9f1f5b49b07"],["/archives/2023/page/3/index.html","d12a654c32081d68b45524a40cb3cb97"],["/archives/2023/page/4/index.html","f4cf44c564c42272baecdb3f368b4927"],["/archives/2023/page/5/index.html","5a27a6e2596219f6fade3ecdc2195f0a"],["/archives/2023/page/6/index.html","c1cf0d74178aa89e61fbf9aa3090df96"],["/archives/2023/page/7/index.html","90520153815d73a1221ded199931c2f7"],["/archives/2023/page/8/index.html","33aebbb9dc7f53defdfbaeb019753649"],["/archives/2023/page/9/index.html","809b974a8aa10612a7447d971a177afb"],["/archives/2024/01/index.html","943f8238aada25ecedb5cdeeec5e1c25"],["/archives/2024/index.html","c62a0a3765d7bedcd2cbe335deb1bdff"],["/archives/index.html","ec1fb39542e8bd689ff36f14e0a7d041"],["/archives/page/10/index.html","8a8d76235bbd4d326de81755e403314f"],["/archives/page/11/index.html","8f8a7042def580531c08f7911fa4c081"],["/archives/page/12/index.html","50ea98ba1de139debe415fce58ab2efa"],["/archives/page/13/index.html","3b84518e7351119b863c38e6b5787b2a"],["/archives/page/14/index.html","e8d1e0291f912bc74a2e2cd39d1cdff7"],["/archives/page/15/index.html","ce7c64d5db4d7c8df32eedb27ac3a72f"],["/archives/page/16/index.html","9634b747eadf50bd50147f6e7fd8fbd5"],["/archives/page/17/index.html","97dad99bb9925b4a3dc8b9ce8e964442"],["/archives/page/18/index.html","92613f990e42e5e3ae885ff92d384f3a"],["/archives/page/19/index.html","4e8b1007606a7f01d725185b10161db5"],["/archives/page/2/index.html","c693083ffe0b66c091a62566e8578b4c"],["/archives/page/20/index.html","a57747ef7a1767df83ded6a40d5eb6f0"],["/archives/page/21/index.html","2493337b2360911da2068e3aa194e18b"],["/archives/page/22/index.html","1465fbf2567d448d11bef0b1413f9981"],["/archives/page/23/index.html","9e2033c0b6e839ec1d52b5eeb0e7bd3e"],["/archives/page/3/index.html","14e40cb669a2f96aa53e2edc348f733f"],["/archives/page/4/index.html","5e8111ff1aab7e8e0e440a8a414774eb"],["/archives/page/5/index.html","c8f0688b34161b76ee91bab2ac910182"],["/archives/page/6/index.html","86424b35dbec6b73cc6d14f8116569cf"],["/archives/page/7/index.html","ffc01e7ba5b7a7c3f47ef16e3a43974f"],["/archives/page/8/index.html","6a89c8bda64586cb50a70c1c325416e8"],["/archives/page/9/index.html","93627f2a22e4873f7eb34fa69e6441d3"],["/categories/Devops/CICD/index.html","40dc0213a9b8a94ec4b2be73b8c8db5a"],["/categories/Devops/Linux/index.html","6c7a7c78945dad7104a05393c983a65d"],["/categories/Devops/index.html","2fd40738e32f8ff91ac61ae5ccd54e88"],["/categories/Java/JVM/index.html","8c2173229af316886f506e1f4ec13106"],["/categories/Java/Java基础/index.html","5e9235dd730be951cfa8cccb8c8548b1"],["/categories/Java/NIO/index.html","21b9978ab2122504e51dcd351bfec6e9"],["/categories/Java/NIO/原生NIO/index.html","036a5bba6626014980e27f41cca912b2"],["/categories/Java/NIO/文件操作工具类/index.html","4f45b95794e3ce43fcc6f8735d8bf149"],["/categories/Java/index.html","435270c117a7f1b30a7da2242880d2af"],["/categories/Java/page/2/index.html","f5681f286ed2e8dbcdfefb8799cb9d70"],["/categories/Java/并发编程/index.html","b1619538d04b48a9e4dbb327f77c5883"],["/categories/Spring全家桶/Spring-Security/index.html","1467ae4a7b7370b89caee5d292ac3968"],["/categories/Spring全家桶/Spring/index.html","2ac2083b00ef1c47e184e147fa8c3e02"],["/categories/Spring全家桶/SpringBoot/index.html","fcb305b994bce4cf58b4b03c68c77826"],["/categories/Spring全家桶/SpringCloud/index.html","23db7bd8887a4d4f74b0f48506440316"],["/categories/Spring全家桶/SpringMVC/index.html","63a4a1715a78d515a3a9978235779a4f"],["/categories/Spring全家桶/index.html","8900af1dfb7d547d325937eb7742c874"],["/categories/Spring全家桶/page/2/index.html","0af2236f05a2b9ed31059ccebdc3974d"],["/categories/index.html","82478a5a6aefea0258e8ddcf092bf609"],["/categories/中间件/ElasticSearch/index.html","a2aaea8321243c11e7cb8511e0ee18c5"],["/categories/中间件/Netty/index.html","c23b6728d06a76e8ec857bebe8bce987"],["/categories/中间件/Redis/index.html","3c527cdef210e1486dad8e9b25f242fe"],["/categories/中间件/Redis/page/2/index.html","d338678ad34edc0e50c69facf8677cf7"],["/categories/中间件/Redis/page/3/index.html","56519ac4332c6e89a5c8c72824611891"],["/categories/中间件/index.html","bffc1dc7e05c9b648eb2346dbc70b2fa"],["/categories/中间件/page/2/index.html","7ff7324217fd13104dfac7afb0bcb270"],["/categories/中间件/page/3/index.html","d4e912358af9716caa233b10935e9f06"],["/categories/中间件/page/4/index.html","e2f75ddf7c01e895bc5d2d462e467996"],["/categories/中间件/消息队列/RabbitMQ/index.html","b349451910b750f8bcefbe134f000289"],["/categories/中间件/消息队列/index.html","b5791a340169a211f06ac2391e07f939"],["/categories/前端/Mock/index.html","76d573fd8ec054ad582a1a653f6c6e6f"],["/categories/前端/Promise/index.html","85042b3d92b3139d67137e0c396a7bc7"],["/categories/前端/Vue/index.html","8c435776435329aa91fbb315b337ec67"],["/categories/前端/index.html","a7078300ecb72006b64be7d41d358b46"],["/categories/前端/jQuery/index.html","09f8fe1bb2c6ccb5251bac7e2ce32640"],["/categories/前端/page/2/index.html","f3fcfc1636dd1f05c71e4fccf03b6ce1"],["/categories/前端/原生基础/index.html","6385ca8843e071c1b31373e973e4be70"],["/categories/前端/异步通信/index.html","c92f5539264f8437ceb7ef911bf80e7a"],["/categories/工具使用/Git/index.html","b0653e3326b2e80656dec750676d8539"],["/categories/工具使用/index.html","5dab880282e0ffe43885c09bdf6a21bc"],["/categories/工具使用/markdown/index.html","ec36c53830289176d3f2134621907ab0"],["/categories/工具的使用/Docker/index.html","7ebd83bfb5aa1314faeb4b0f3b86649f"],["/categories/工具的使用/Nginx/index.html","5c00c698dfa2e914723f11630a95f5d3"],["/categories/工具的使用/Swagger/index.html","d8b1a20ba842dbeca6bc631e954b4d05"],["/categories/工具的使用/index.html","75d432ec8642cedc040245d7a94c06a3"],["/categories/工具的使用/博客搭建/index.html","0567667008bfa83cf8f9390dd48ad064"],["/categories/数据库/MongoDB/index.html","e701c2f4931f7dd3a0ef86009ffc450e"],["/categories/数据库/MySQL/index.html","f59ba208ee31b72d7568fe30ae9ee0e2"],["/categories/数据库/MySQL/page/2/index.html","f3c0d5a0c0e0e1c935082ef95e522a0b"],["/categories/数据库/MySQL/page/3/index.html","cea72a98e0bfc6919a5dfffbd7039fd1"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","b12c659a38be626940d5cd7ce379cd51"],["/categories/数据库/ORM持久层框架/index.html","7a35b56159f5b1271de603ff0a076e9f"],["/categories/数据库/index.html","9a6776be62b3dbeacfb3163bc158d9a7"],["/categories/数据库/page/2/index.html","d7a6aef791cc39cd7177539253fd726c"],["/categories/数据库/page/3/index.html","41cf6defeee5cc89738ce682fbb84ab9"],["/categories/系统设计/DDD领域模型/index.html","96f59a677e7a9c9680fa31505eec042c"],["/categories/系统设计/index.html","7a5e66fe78fe50245bd771685d35061b"],["/categories/系统设计/page/2/index.html","5a98f0496d5143143b510e88f8ab42ce"],["/categories/系统设计/page/3/index.html","85c78a8a36bc8d456a4ce175eb589850"],["/categories/系统设计/page/4/index.html","547a051a126a9de5d8944a9f147cc6ac"],["/categories/系统设计/page/5/index.html","bea4930fa037ea175ff82b32c1ab77d9"],["/categories/系统设计/分布式权限认证/index.html","c1670602661c8178ecbb6442119d9365"],["/categories/系统设计/分布式系统/index.html","360a523099b7600b3e542ac86e9cff6c"],["/categories/系统设计/分布式系统/page/2/index.html","ced4ac25428f049abaa95cd7a74d382e"],["/categories/系统设计/分布式系统/page/3/index.html","ac250574730861db94b70e1f22f467fa"],["/categories/系统设计/数据库优化/index.html","2ff767f39fd3899042257f1c6e5dcaf7"],["/categories/系统设计/设计模式/index.html","7099356d9b9c34d818847706d58eac06"],["/categories/系统设计/设计模式/page/2/index.html","a52709b81870fee2105f11ccf855f1c9"],["/categories/计算机基础/index.html","dcc0c55dff8b70e769475837d7a0757e"],["/categories/计算机基础/page/2/index.html","7fa9981a465c3ef9671a362e22c0fa31"],["/categories/计算机基础/page/3/index.html","232caf652b5a3ced7552cb1cdf691651"],["/categories/计算机基础/page/4/index.html","969655b5e099e2d9e884ba17d8cdc40f"],["/categories/计算机基础/page/5/index.html","2a603eb0ea4036605f94247c9b39ea94"],["/categories/计算机基础/page/6/index.html","0c402189802e900c51a446aa5d923630"],["/categories/计算机基础/操作系统/index.html","f9fe4563a221903b37ee211d879d54d9"],["/categories/计算机基础/数据结构与算法/index.html","55091e449ee86a4b3a9d0b2d8aaab042"],["/categories/计算机基础/数据结构与算法/page/2/index.html","fed591b1e258e1d936a410dcc1e4f7e0"],["/categories/计算机基础/数据结构与算法/page/3/index.html","ab30cd59481e9d201d36af5a79d0a299"],["/categories/计算机基础/数据结构与算法/page/4/index.html","183f21b011977d16e0ddc6995d8b42a6"],["/categories/计算机基础/数据结构与算法/page/5/index.html","695495ceae0ee1b77fa361b17de5f3f7"],["/categories/计算机基础/计算机网络/index.html","4d04de40b0f203d2fa12f7682156e976"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","d5d6050b78303d263d043ae5587ae818"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","31e4ae1c988049e18018fda7902aba5b"],["/messageboard/index.html","062783b0e0dbce3e54c83d326545c0e8"],["/page/10/index.html","393289b61c3ee01af0bb082a564948c8"],["/page/11/index.html","b37ce657bbca27a8c92dcfcf069bef1b"],["/page/12/index.html","f08f2d48be87896d117a49453ad657eb"],["/page/13/index.html","4b0292b7117ac7e3cf3a3c3e831ad46c"],["/page/14/index.html","2974824351ae6a66f710de6694b2da98"],["/page/15/index.html","19a3e81f5c534d859b2c8a62d0cab0db"],["/page/16/index.html","c9e0dce8c110c8235ab71c6237ff56cb"],["/page/17/index.html","b928a8b6052ff5bd4397f8491db504bd"],["/page/18/index.html","704acdf4e0822c3eacae9e6d51c34551"],["/page/19/index.html","83d2be64d00c4244d9f5b4d520ba2ef7"],["/page/2/index.html","20f996f3c106ba3878ad064be92680b6"],["/page/20/index.html","86a9cd227b3190a12e62d9b36ddce4d7"],["/page/21/index.html","1a4f442a3dc16a61b7272a5d521000f8"],["/page/22/index.html","ec86959b9a52685b2123a4c4f6af5f7a"],["/page/23/index.html","9439798e80997df692e89036df9de3ba"],["/page/3/index.html","8876f2325530be459cd3f62f58c59a32"],["/page/4/index.html","c2251f067dcd70722cc8b36d44f879e7"],["/page/5/index.html","b19c4931950ed038a80f436533b5adf2"],["/page/6/index.html","bd172107e8963293e960f66296de316c"],["/page/7/index.html","8c85a2bddc7785f06f92e8528b0b2386"],["/page/8/index.html","1aae461bdce3deacec19d62ad49c2ca5"],["/page/9/index.html","4b7a5e3d0621fbdb44d0bc461e98c8ea"],["/sw-register.js","c2a0d7424ef311ed3c97c977b3a718a4"],["/tags/Ajax/index.html","44894081b1a744d5cc8749ddcacde852"],["/tags/Axios/index.html","54656ec2282060d2aac78a99fb6fe3bf"],["/tags/BASE理论/index.html","b5c8abfe0aabea14369517e7fbf72361"],["/tags/CAP定理/index.html","bf22f92d2572aaf397bc1b49679e3a15"],["/tags/CICD/index.html","be9e85a2f6ffc074fac09d05630a2730"],["/tags/DDD领域模型/index.html","898f5c840958e9d3c756b9ef93b44dfd"],["/tags/Docker/index.html","618ba3da51ed2a1a15d55dd1e9ba4e9a"],["/tags/ELK/index.html","b65788e792db2951c5e01a4dfc3ac440"],["/tags/ElasticSearch/index.html","e85316565f519263d45ac7f918744f1c"],["/tags/Git/index.html","0d92cafb85ca33be9fbfe246e1492d31"],["/tags/H5/index.html","088471ae3c57441ea59eaa1eb0f5c4ce"],["/tags/JVM/index.html","578baa9c16d76696053fd48a2bc188f7"],["/tags/JVM内存模型/index.html","1599d30df787c65975173b3b0e719a6b"],["/tags/JVM执行引擎/index.html","697f7bfc607c029469f36adad0b4ba12"],["/tags/JavaScript/index.html","4a31bb46c7032d4f8ecddac2ba54e85f"],["/tags/Java内存模型/index.html","3f3ffdc63329bb808444f7b23c8a4d7f"],["/tags/Java进程线程/index.html","362408145bddfaa3fe4205ac08deb527"],["/tags/Kibana/index.html","f5f3a92128c719f9f2c2864c0a4b6c11"],["/tags/LeetCode/index.html","8263943fd936d5168b9c1e164bf6e3fc"],["/tags/LeetCode/page/2/index.html","72e4ffc3a75c7b6309e720094f125e37"],["/tags/LeetCode/page/3/index.html","2ce858b60848a3feb694b3d7e4a29ae1"],["/tags/Linux/index.html","d86fa448afea2a87df1d6f49383b0b09"],["/tags/Logstash/index.html","13f0e2d6b80ac2cfd20274e5eab924f0"],["/tags/Mock/index.html","978c519dbd06833fb808d5923bb73475"],["/tags/MockMvc/index.html","1a03b360409e5b245f2ef64a6e75da2d"],["/tags/MongoDB/index.html","5d438cc167888576b0b3ef91ace906e1"],["/tags/MySQL-事务/index.html","7e22bb2b003aaa808aa62c245f6a587a"],["/tags/MySQL-数据类型/index.html","4c4ded280fe90c808886962e80f40b35"],["/tags/MySQL-日志/index.html","970755ec912c4f8c87bcae567320c016"],["/tags/MySQL-索引/index.html","96bb3aba8896a22477b3f3fec61503bf"],["/tags/MySQL-锁/index.html","eb8bd69f8b3e53410ca97080dab1df88"],["/tags/MySQL/index.html","341ab99daf83b6935f9fb493c1c204ea"],["/tags/MySQL/page/2/index.html","270fc754318ae258d26e73a3b0792477"],["/tags/MySQL分库分表/index.html","65da364d0282ac6f8b9de5f8675c6dfd"],["/tags/MySQL读写分离/index.html","7f0195e25b7d62317cc4d3ed382732e1"],["/tags/Mybatis/index.html","7d6395d504a18ca2c299ae0cf2d24cdf"],["/tags/MybatisPlus/index.html","d422923678c995a6995013134b75ef70"],["/tags/NIO/index.html","b78e284b800adf92d30fa33052cce525"],["/tags/Netty/index.html","543d654f76e2b2a12edd4380a35e4300"],["/tags/Nginx/index.html","fbbfbc7b25938a775d996cdc6fcb6e55"],["/tags/NoSQL/index.html","678f41faff9fdbe0f2950193e1a3a39d"],["/tags/Promise/index.html","f4728d914aa522c1b7989eca324f8d14"],["/tags/RabbitMQ/index.html","43476df931021569462fa9b7d7af95b7"],["/tags/Redis/index.html","b0b7575e5d1ed971e9e34baff3fc3ac3"],["/tags/Redis/page/2/index.html","c0292678aaae5318c0c653f02ed5fbd3"],["/tags/Redis/page/3/index.html","5254abbad6feddaa2205d189a81e3b15"],["/tags/SSM/index.html","9d441b951147f8abcb13fe60e42ad9b0"],["/tags/Spring-Security/index.html","db89be93c22fd237c9c1905f9d1ba907"],["/tags/Spring/index.html","b3a3fd08b823de6d0d70016397978a4e"],["/tags/SpringBoot/index.html","077fd77a285798fee96d4cde66640f57"],["/tags/SpringCloud/index.html","0a89d4bae4c80f1a836929775dbf8b17"],["/tags/SpringMVC/index.html","278fa33eb785a1d1286c0fad86647496"],["/tags/Swagger/index.html","345a76e1e78389678a63d5b0415a2c7d"],["/tags/hexo/index.html","1de0fcb1df75f890659608902a76fcb7"],["/tags/index.html","d724e9f7e8774b60980b7bf82280cac7"],["/tags/jQuery/index.html","1be4f8c214ffab8b3f0e886589319781"],["/tags/java/index.html","b9d9a3697a28a25b9d2daea6f376ee6d"],["/tags/markdown/index.html","6fc42cb84d42ef8f6bf678396ff3c821"],["/tags/typora/index.html","cd21880b2c23efadb4ee3045dd50c589"],["/tags/vue/index.html","fb055587580f3d92cb0f897b924d77c0"],["/tags/享元模式/index.html","2676c388a8468c582471b10a1a00fa3e"],["/tags/代理模式/index.html","cc7878d3f561ffadf5fdf5630dcde174"],["/tags/内存管理/index.html","24848b3555cc4f25a731f84472c05887"],["/tags/分布式/index.html","fd62ffaa701e53ee542c8ab7ee4b46f8"],["/tags/分布式一致性算法/index.html","7c41b2c5f1905e04b4dbb997603470c9"],["/tags/分布式系统/index.html","b3da67e9dae7ba2bef15f893b8563a3b"],["/tags/分布式系统/page/2/index.html","12c5a80ce0737df1f8df08ade714cf26"],["/tags/分布式系统/page/3/index.html","6e7d533df58512a81c856bcbb8a3a6ab"],["/tags/前端/index.html","f6b274da9d8cd6e3002e150887fa435a"],["/tags/前端/page/2/index.html","81ca852dbcfd8bda46b6097d911eb8a6"],["/tags/动态通知/index.html","864e1570a425aca79d4c34d64df0e8cd"],["/tags/博客/index.html","930138b764a2d755511e732cba367b7c"],["/tags/后端/index.html","6cd46173328f8d8119bb4ab0e97357a0"],["/tags/外观模式/index.html","683b8602b1cd5dfcf758690b26b661aa"],["/tags/多级缓存架构/index.html","a44836435b0fcf1fca5319a5833f2640"],["/tags/多线程设计模式/index.html","4fc51465d7cbf9df071ea5872ca77d8b"],["/tags/容器技术/index.html","3ce715147a4da5845c1c05d1effbc3fc"],["/tags/工厂方法/index.html","c3393bd7c88ce694c64c9f2435c933f3"],["/tags/开源协议/index.html","6cb9a6ccb3778c0646141bf382aff7a9"],["/tags/异构同步/index.html","969f1561379747e571c7bd6167abadd3"],["/tags/微服务/index.html","d2bdd1dd1e7287fd3c4588fe02b01a0e"],["/tags/抽象工厂/index.html","da2e7c222040d6f0228042d6b08458d7"],["/tags/持续集成持续部署/index.html","164e34b5cc169f849582242b327ae79f"],["/tags/接口幂等性/index.html","dab0a58078e57cb95d9a19e0eac17b3d"],["/tags/搜索引擎/index.html","a6f94d24615cbe62e2832aee21b562fd"],["/tags/操作系统/index.html","a25fe4de357d867bde125c1d771e6e6a"],["/tags/数据库/index.html","abfdde9cc44cad0e5348fad68b146a91"],["/tags/数据库/page/2/index.html","468347bc36e439e8f559f196334890e9"],["/tags/数据库/page/3/index.html","7d9be31cdb138ecb1dd1efb1be089fe5"],["/tags/数据结构与算法/index.html","42fb830d640175bfda3144fa04355769"],["/tags/数据结构与算法/page/2/index.html","e1485def8e8ef8c5ec363294206e320f"],["/tags/文件操作/index.html","b1a970227ca0d4f7f61089019bff2203"],["/tags/日志/index.html","e51b448a9804939610563dda86599861"],["/tags/服务器/index.html","77fdf7107a8ce276755279028b2e304c"],["/tags/权限认证/index.html","6029172299c0c5ebd9a88aeadb97f095"],["/tags/架构分层/index.html","051cd6f99150cb56c7010fb4ebe58cc5"],["/tags/桥接模式/index.html","d81bee63cfb44de3f22eab826b215ee4"],["/tags/模板方法模式/index.html","4a7728bf627ce3bd09898eef85cfefd0"],["/tags/死锁/index.html","ada78872a39c7a2ef0fef08086c29583"],["/tags/池化技术/index.html","b63b31c250f5bea2bc4717de5ad95a8d"],["/tags/消息队列/index.html","7e9f72113628d9ee32e1f0abdde90459"],["/tags/版本控制/index.html","b6f06dca74a79112fb38ff1beb1d6ad5"],["/tags/策略模式/index.html","6dfb72c371927668b8eecbb8ef28d0df"],["/tags/简单工厂/index.html","2d364960a175c2ee01efb65566eab73d"],["/tags/算法/index.html","73c8813c8db3d3c55145a3987ad8b47a"],["/tags/线程活跃性问题/index.html","70e1a267a85d5eaad07dd0b73f64564a"],["/tags/组件化/index.html","9ac2de2818286ec4d49c7cd59f806d73"],["/tags/经典限流算法/index.html","a43a04e68b6ea62261313259c10dcad1"],["/tags/缓存/index.html","5a6df44bfb5c59887e3020fcf5c7def3"],["/tags/缓存/page/2/index.html","4893811e0c2baab33d4c68300d583b42"],["/tags/缓存/page/3/index.html","591a2b654b02c02dda764b1b4e33ad17"],["/tags/观察者模式/index.html","ab97c20163b5f6a612843055abe44f88"],["/tags/计算机网络/index.html","b7bc80ff983efceabc2e2471c49eada6"],["/tags/设计模式/index.html","c2f33d1126f5119625688404559420d8"],["/tags/设计模式/page/2/index.html","56408a18e661561c2f86a9ed111963cc"],["/tags/设计目标/index.html","da2a7983d23f3ae75204f6a1aebe9375"],["/tags/资源共享问题/index.html","1b70f6a92e023f0f2eeaa972cf31ce77"],["/tags/进程管理/index.html","075dfc51ac9796a65139de337c95b8ad"],["/tags/适配器模式/index.html","c1e280a382659e1726d3fd08a9f49bc1"],["/tags/通用设计方法/index.html","c344e090725cdb449f3471242a21e4d5"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
