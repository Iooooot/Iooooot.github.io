/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","826eccd570e9791be2312fe7c839b617"],["/2021/02/22/工具的使用/博客的搭建/index.html","f3ca5f6eac7d88397d00ca23f545f8db"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","f88210214230d8b2eb42cf5b0280ab91"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","5a6773af0eff835a50b7ab4403b7693e"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","2b9f025e2579bb98d61767780f36eb6c"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","251adc5b8ac4c786a6ae7347e5599863"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","0f5993aae74e745238bd44b69aa13a9a"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","dd24d7a0858e25ed76d14079eff40fa0"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","cc75695df0ba469902f8c0f08878650b"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","9cf6fd6c7964ee580552a8c620a61958"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","1b839a311434295e69fe2c097cd7fc47"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","3671e9eb131744c2148e1810991d3455"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","00c0b5d9e268733f96632a6b5147e864"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","b3952388c55cb5e25c80d2d27e31cd2e"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","bc068b50309adb2499b1bad65f24416a"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","306695a2ccb9041bc9c4dbd3925004f9"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","d2c06c87ab2a33f7e2619cc0474238ab"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","d0a50580f5f4b9ec634c9f76e7e8e98d"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","6664135d88e80138d618f8605f29d7b3"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","dffad8f7e707111ab9b0209df86c2280"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","6bb61c982c1ee5dab23aa4a91d25384d"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","f0a5216a9948a7fd3e3e960b8e376e0a"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","657ad7ae017b5821f6481585920f9c6c"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","3545e5be45760468111c8ff1b932d992"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","aef93462540a941963573d6f8ebd23da"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","96b4af406b0f8b41763b9da7261b98fa"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","93f458fa7e618108b76351d696ee6fa7"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","e559b33e66dbcc2b80f838bf92a752b9"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","12f3113c8b06d1e3c19baba1b2e9bf69"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","e009dabc3f8c0c10a7cfaf0b52d1f757"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","4aaf78ec7bd9ce0a395df67ecf1b0174"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","1bcc86f53ed3c2fa97da7a33527eab5a"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","0db26da91687201c08e7aa27f4393880"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","b3a68f25c0b93651822488b638306fe2"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","6b7bc79378925d73aa0c59e9d09a7009"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","44d1831ac493bbe81af652f3c946ebe3"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","82e5806bfa1b2fcad73476940271e8c9"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","fbad52a0f6f56e5d493f1aa36489a3be"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","a2d58c5f86bba1c7181ef74aedb43582"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","8aa7ad2546f095d83b90d6fc88929d7d"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","8a642de99c79c36240eddfb037203853"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","611b6d5a00e41a7654ea03da2ed18e57"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","23474c9ef1a77b9bc614ed73f4d7a9e0"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","acd5881d715670e4968a689b55bc1dfb"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","bf0fc66f51c57ae077b86ae6feaa4913"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","c47fe6a9736b2e7fd5df7dcfa84f12e6"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","c5bcf48c9e7b2420059c3f1a040ce169"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","5e853fc6c38085da4de38602d0c7f971"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","4db502cea09735b9a880a80d3d015564"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","d9a654f8a5da65af6f648c12fe723166"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","bd5b3071cbbd9ddaa9f698e8168e5664"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","f98405df82937717fed4a78a2c4089d2"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","6ee0e9a6aabf8bcd06e5604fecdf7eda"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","82d6dc9e7d33e048318360b7814fb5e7"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","16bbce92001bccb1360841290ab07fff"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","ad19d51d9224df644359b467a5e20cc4"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","49bc15bb378a9b8f6e28651cc4a420de"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","44d34ae5cd4f411bc042b4eb2357986b"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","1e7c69228434d5adeddcdbea516b0cbe"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","47e0331827a54c57e9699883488f5b57"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","d9c78adb04569bf5d405f28f1d96460f"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","ba4fd572bc78df8a0c657d5bf380a45d"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","d1d70b0139951aa7d396daec0a3fe19d"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","8b2fb93b4f4fdec90f6316d9e11b1ef1"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","2f2df67e6c331d8989328a42647cd165"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","1b1e8812ccdcffdd35308c2e78d7c38e"],["/2022/08/17/前端/jQuery/index.html","4346a37acd63516f6e62cec9dd9786ca"],["/2022/08/19/前端/JavaScript/index.html","910486ef89d2e81c10d2bf0d9c68f5e6"],["/2022/08/22/前端/Ajax/index.html","ac97cc126764078c60de04ffc1796037"],["/2022/08/23/前端/Promise/index.html","f0a5ad7c4b773a9f7d440fa2f7906ac2"],["/2022/08/24/前端/Axios/index.html","31926a6e8d03323e65da92a00c945b06"],["/2022/08/25/前端/H5本地存储/index.html","57dca8bfa6e8dec56119a833498aaf23"],["/2022/08/26/前端/mock/index.html","9777be0368d9a9c3e3ac7117d47489d6"],["/2022/08/31/前端/vue/VueJs/index.html","bbd4f917271979698a6366afcb823832"],["/2022/09/01/前端/vue/vue组件化/index.html","1e5d966427f8c0127be89dec4ddc60cd"],["/2022/09/04/前端/vue/VueCLI/index.html","b9655d70f67831a77274a7a7f4cce7b3"],["/2022/09/07/前端/vue/vue实现动画/index.html","0bd7eab93f56f07097d3100f8a14a892"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","768875be1922a6454e75750a6bdfbafb"],["/2022/09/10/前端/vue/Vue异步请求/index.html","aa8ffd566f52886d56b6c77d85782f25"],["/2022/09/11/前端/vue/vue-Router/index.html","4aec670d59ab5023b8a549a1ef592829"],["/2022/09/13/前端/vue/Vuex/index.html","e28d23d58cef1ff48f6e1636f17b0dba"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","8289aba20877733ef3875927e514503e"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","37ed0f7a129ed5b6c58d9468d352d759"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","77b08f7bfb3b72edf4563a874fa4c9a5"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","11d2cb9fa839af86145616ebd69ecaa3"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","4fc0e17e66c0a7751c9165e4d3c21110"],["/2022/09/28/DevOps/Linux/Linux/index.html","5368f5b3812ae2f2c1477c56d4d32657"],["/2022/10/02/中间件/Redis/redis基础/index.html","bb1c590e92164b6cd213a0a817fec43f"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","24d2d582b625811bce127c10aa6bab3d"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","8004bc54e355e06f53a07bc1023ec5ac"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","62eee4ac1c9e9e7ed337e64cfb1e997d"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","730b1f033bb751b3d909c99997da31dd"],["/2022/10/17/中间件/Redis/Redis集群/index.html","1e615d2b694b40cf6eb6cfaa6e38c4ed"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","24698d67ca4e16b6b942c2cd21cf6de9"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","af5a6f43b5804fa1579c8ffcbe1dfcc5"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","965f0d39e592f6d9933526377eaf28b1"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","77c8c92f3225202319ee2a056327e722"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","1bf85f46a846e97b8fd305a149121815"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","c07d5aa4089c87b74a82e55fe83703e9"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","fc0172e5ddb2ba220ccad5f22ba6ed1e"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","3b39344b67000ab3378c46edf7c60f69"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","0347320884397967fabaa8fe78297958"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","096235df03051341b7095d33bccc6513"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","0f64bb4b2e4eb7878675ee2df2e66e6c"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","6ba591c199ed5aa8a0a6f10de8a9168e"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","f3c473ec2f4d83aacd027e5726e8364e"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","3703345c4618310fe3a914aa98271d77"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","47095d3e61f658e0159884d3a385f01e"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","a2fb92236c6be422a9f7f0c67196bc8c"],["/2023/03/10/DevOps/CICD/CICD/index.html","56e0ae95416748a7bc27b7369af39f42"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","cbdcbb1b10441bcab87fca7f4555d3d3"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","d16500ccd8073791d1fdfaa128b842cc"],["/2023/03/13/Java/NIO/NIO/index.html","d73fe021d6b3567ec2574ae1b92d7b95"],["/2023/03/14/Java/NIO/Netty/index.html","bb374e59d774a19ad9600381e8721815"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","c98f62d41f4fda87b5832f916dd43e54"],["/2023/03/17/系统设计/分布式系统认证/index.html","5cde71b254b5cd29d31f85e407306ff2"],["/2023/03/19/Java/JVM/JVM概述/index.html","3f064e085fd7e30d78b110d7647fe40b"],["/2023/03/23/Java/JVM/类的加载过程/index.html","f4ccbc847b92d3357f91c7cea54e1dc5"],["/2023/03/28/Java/JVM/对象的实例化/index.html","9de878e58ddb4176a6bd3e6c8c948d1a"],["/2023/04/01/Java/JVM/运行时数据区/index.html","6a46e8e358db873043964a842b833f93"],["/2023/04/04/Java/JVM/执行引擎/index.html","0ef342b0c85b9d3ade6aad88725ac3f9"],["/2023/04/06/Java/JVM/对象引用/index.html","a02f93aef324f5b630bd62d64cb9acbb"],["/2023/04/09/Java/JVM/垃圾回收/index.html","9b0c5b3075c8ff7b5689b1838f43a604"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","314e88d6cedef110199055154b4b0e4c"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","7b46f5f982d3847d83afe81bec776538"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","9b976d3ee4e7c34733cd821e42a88c2a"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","d969c08b67272f0d306865bf69945208"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","fd4bb73699ff69399f9ff7479a174cb1"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","f14aa7d93856a1f885be96a5ad842553"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","9112ee473ec42a580d4cc726e57e7951"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","6d2708cd6974f42a4f9149f1ed894bf3"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","bfdc4bc53060927e4e1d3bf46194e197"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","75c43d5cd100da2082d58f27ab88274f"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","a437be402bc10228eb3f2889d5088519"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","e4ded07e837a37fc52ed4d0a57d58339"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","762b68087029fbfb9a43a1119ee9f7d5"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","2726206472a0d2080380f91ee4e4a347"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","dfbda92ad40c9c05bb558772f05817d9"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","bab14c9138eb8f51f7c7aeb154bd8c33"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","34de0386fc739c56cea6751dbbea4e83"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","79500f36fc8ff56aa3d2438fd53b4849"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","128e269d43ea0ec54abd59a3d60e94b9"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","33267d21058b6a4950be967caf1bfdee"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","c469acc0c71bb1551a7883886d9971d9"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","4ec3f6742b4fa4b0b55ee8b9f206d276"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","4c42edf2c64c3ff5524b752682b9c87a"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","3e53bcda0a0a5929af9bc697a07e3e2b"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","165bf113f58475566850269eb4eac189"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","f83bb404c85967f09b11920ee7005410"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","d8454507860bb7d1de42414fa3f29a78"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","e372c82af43223620cec33f2f0e847c4"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","1df0a5532722241ea574b2fbf4ee6d7b"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","7ed5c686f72f3ddd2d1e3f3fec9ffdcf"],["/404.html","e4081a52b17066b68fbe9654d00ffc3a"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","96b1a7138ec9c685b0b3850e7ab23ef8"],["/archives/2021/02/index.html","6dc1624d75dfb8703895d8e028787710"],["/archives/2021/03/index.html","b91680c589abe5c138d2a9a081cb000c"],["/archives/2021/03/page/2/index.html","fa3acecb79ff4b3a666786914d346fbe"],["/archives/2021/03/page/3/index.html","f1a8c6ca1bbe6a6efcad23f8d715d2b4"],["/archives/2021/04/index.html","92c0199770739c0cc74149ed6c8141bc"],["/archives/2021/04/page/2/index.html","c7e3f896ab79f52aa96b169b75765c99"],["/archives/2021/05/index.html","22addc04765132b447cb3ebfd7452d75"],["/archives/2021/index.html","9704a90f3692839d8d13827b5b00e4c4"],["/archives/2021/page/2/index.html","8dbe155eac70ab8d273c5be5989b9582"],["/archives/2021/page/3/index.html","53d634e883ca5c55e9fc7922265e3b72"],["/archives/2021/page/4/index.html","8018be1c99b0bed60a7d6ab35d81278f"],["/archives/2021/page/5/index.html","ba31a2059a707aa61fbcd425e6275a53"],["/archives/2021/page/6/index.html","89df72fbb2207ddc809eaf7d80318743"],["/archives/2021/page/7/index.html","effa1d9120b56ac5a64e919970f2642b"],["/archives/2022/01/index.html","70a374c7518ddbba0a0a6cfc2c8e714d"],["/archives/2022/04/index.html","f6737dc7c81aced3faaa4599d9b9c747"],["/archives/2022/08/index.html","653a79e1ed61b96a5e19f3ba40cd723d"],["/archives/2022/09/index.html","103182235e7fc3d4f804188f450ed1fc"],["/archives/2022/09/page/2/index.html","305b9eb145f46fdf606993b15617ccac"],["/archives/2022/10/index.html","00cbfa88d86e07f646bfc46d588ff751"],["/archives/2022/11/index.html","abd9dd2ac7c105e17d15ccebbecee3f9"],["/archives/2022/12/index.html","7b3add0dc1ca4cf2b7be484b456f1836"],["/archives/2022/index.html","168b526e720857533623db58a66a78df"],["/archives/2022/page/2/index.html","78568848fa16f48e048f503a29f2c0b7"],["/archives/2022/page/3/index.html","6aae13343a962c4d01287d3d9195506d"],["/archives/2022/page/4/index.html","77065879722bbca984f20d97a1e5f8c4"],["/archives/2022/page/5/index.html","19b69958277efd403e850776fbf8484f"],["/archives/2023/01/index.html","3e2cb8716bdfce8935488b28fcc19290"],["/archives/2023/02/index.html","58beb1fd23d42e52247eea3cdb510d3e"],["/archives/2023/03/index.html","d6f633dfe9c5580e33f7fc58d1b724ce"],["/archives/2023/04/index.html","e39d0af3ffee3ccacb414c9aa5c30167"],["/archives/2023/04/page/2/index.html","556bda354fb377aa42eee058751179b1"],["/archives/2023/05/index.html","0e9c2cc711d1cda813d6b0205702898c"],["/archives/2023/06/index.html","d1ac3f19d00546e8ed85888f06fa77ac"],["/archives/2023/06/page/2/index.html","7fb1a44173dd63a7a5d48949140515a1"],["/archives/2023/07/index.html","fb6501f293ef5f212e15b7f5bd4477fd"],["/archives/2023/index.html","f2611ed19bddb4c8125f87df29a9fec7"],["/archives/2023/page/2/index.html","2030dba8b27a815d86aa329b715ca5ef"],["/archives/2023/page/3/index.html","c3ea07dd072f7dfaf3e27ec18f6a0470"],["/archives/2023/page/4/index.html","179858b65ca9772555b14e36643f8032"],["/archives/2023/page/5/index.html","115e13436fa8f7a71fe55669a92525f3"],["/archives/index.html","227ecb6acacc7da3a6c40235581c9847"],["/archives/page/10/index.html","f6029775e3cbeabecf22026a86e5fd55"],["/archives/page/11/index.html","f1a9318442b014761a094b517421316d"],["/archives/page/12/index.html","4a476eac8246d6b4c080b899703d2765"],["/archives/page/13/index.html","1080b4d21eebbf90fc161095f606cafa"],["/archives/page/14/index.html","a6a3cc115c04bdd67f09326a5093584b"],["/archives/page/15/index.html","f5759b3e41aeb9b9027c7765180f91eb"],["/archives/page/16/index.html","805916d6fff443d25fc31dc7e679db93"],["/archives/page/2/index.html","2bafa7a880a6ec501e5696a187e061f2"],["/archives/page/3/index.html","e2a7e05f0b2973e02af628b3e719a00b"],["/archives/page/4/index.html","4357998c6a762345e4b38e1ff746fb45"],["/archives/page/5/index.html","5a411808f56d3aa2c02ee97247c1d833"],["/archives/page/6/index.html","defb36e9e0ff8b5106f989fe8db7f6a3"],["/archives/page/7/index.html","7a7604732d8cc25b9e12419bebb9f791"],["/archives/page/8/index.html","7d9004b72135bea469bee97616ede24c"],["/archives/page/9/index.html","077a593d5fcf3d0dc8bacdcb2f322568"],["/categories/Devops/CICD/index.html","029ec0509b337cc35f8ec706debd8dd3"],["/categories/Devops/Linux/index.html","a191bdb34da40ae8366a45c1808311a8"],["/categories/Devops/index.html","021ed3656b62622c9fb132c3d10215d2"],["/categories/Java/JVM/index.html","69ca541390981573a679081954581b54"],["/categories/Java/NIO/Netty/index.html","234ee228cb6d782605df7a031f08a2b7"],["/categories/Java/NIO/index.html","882008a1d28dcbb30120e36e2976495f"],["/categories/Java/NIO/原生NIO/index.html","7ba33226160019ff22428b1ae3f5703a"],["/categories/Java/NIO/文件操作工具类/index.html","4f639d18d09f02a9eed3609d7a344b64"],["/categories/Java/index.html","f00bb8e6ffa2209daab4653f9378fbee"],["/categories/Java/page/2/index.html","556c59a9b2392050b5e61f09dd696480"],["/categories/Java/学习路线/index.html","6c03e2cd36640386a1f73e90b7e9b70f"],["/categories/Spring全家桶/Spring-Security/index.html","88be24082fa3e62621c48dc3643b0c31"],["/categories/Spring全家桶/Spring/index.html","6c38818909744d40a31fef942236e7fb"],["/categories/Spring全家桶/SpringBoot/index.html","ba07c90194cc611d3fac40116d7b3329"],["/categories/Spring全家桶/SpringCloud/index.html","8f9a14ec4408118f95b457e9b50c4224"],["/categories/Spring全家桶/SpringMVC/index.html","fa42a76cdbbd9825b68db46672e6cc05"],["/categories/Spring全家桶/index.html","a928bce88778775d2ce5eb0f4bf7b5de"],["/categories/Spring全家桶/page/2/index.html","4996fdfa0c96811e959ef7a0c4b72b4d"],["/categories/index.html","d1d6d115c31440032c2e39069f7b698b"],["/categories/中间件/ElasticSearch/index.html","077b2b44227a23b05e7498cb7baec892"],["/categories/中间件/Redis/index.html","1136e4bfc4627dce7e299de8419ff753"],["/categories/中间件/index.html","a9e637e33a5c6a2f374cd3fea621a658"],["/categories/中间件/page/2/index.html","960565eac12ceed6f3e87cbb07ab44f0"],["/categories/中间件/消息队列/RabbitMQ/index.html","82d4d71ce3bec09b009d90d7468bb6d1"],["/categories/中间件/消息队列/index.html","f74da2f66227b30d8a33f0664239c537"],["/categories/前端/Mock/index.html","007911f166658b55bdc204f193a435ab"],["/categories/前端/Promise/index.html","6863eaf520cb7575777cb729fa9eaf36"],["/categories/前端/Vue/index.html","9291761396707b0429a1b0150c1376c6"],["/categories/前端/index.html","5b9089b3118bbc89b82f6b7cbee0301d"],["/categories/前端/jQuery/index.html","745b4e102d6eae15ac26905842909121"],["/categories/前端/page/2/index.html","df84965b75100198182d046bb0728566"],["/categories/前端/原生基础/index.html","052309805395857302fc5118c9d94389"],["/categories/前端/异步通信/index.html","e9341d9887bf545fa0d3b42b9f664a10"],["/categories/工具使用/Git/index.html","369ca5579bd56fb1667d94d521f6de1f"],["/categories/工具使用/index.html","3d58f1cc76c8d160da124f06d20adeb3"],["/categories/工具使用/markdown/index.html","e84d282ef112021d38b6c2a862722851"],["/categories/工具的使用/Docker/index.html","e51058daa3fd375ea1ee794717cdc78d"],["/categories/工具的使用/Nginx/index.html","5758d653b986ec7231eac644d5f23697"],["/categories/工具的使用/Swagger/index.html","6baf3b23887eafa3d696e2531461e25f"],["/categories/工具的使用/index.html","46d00ccec7cf316b9c09ea735e8f677a"],["/categories/工具的使用/博客搭建/index.html","bde34115f61aa221aef9e57545243a28"],["/categories/数据库/MongoDB/index.html","a8af7a75186a9b798acd61e0c46e383b"],["/categories/数据库/MySQL/index.html","1a13452ad5f7a68d2997e28a695e9882"],["/categories/数据库/MySQL/page/2/index.html","60fafa8f5025a31a95ae0dab76106f56"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","ad21b309a482c6c7508677ab21c9612b"],["/categories/数据库/ORM持久层框架/index.html","59c11ece54d441f66ae148832253f9f4"],["/categories/数据库/index.html","976bec12d16ccb0d19acbf2c495c7066"],["/categories/数据库/page/2/index.html","3c4ca72b577604d07c98c164f1fd0bbd"],["/categories/系统设计/index.html","3ad2747513a85aa672063151331483e8"],["/categories/系统设计/page/2/index.html","d9251c2a9ccbceff6918e6f7ef2b1a0a"],["/categories/系统设计/分布式权限认证/index.html","ca1935604695f242451efab0c2b115fc"],["/categories/系统设计/设计模式/index.html","3920556ff68914a4e00f65097b3d235d"],["/categories/系统设计/设计模式/page/2/index.html","806539e8f9d1e60ee1ac75dfe94e34ec"],["/categories/计算机基础/index.html","0db9fd1f0d5f7edecdf71df2623e8e68"],["/categories/计算机基础/page/2/index.html","8ea87944f92df2425595eac8c4819e9e"],["/categories/计算机基础/page/3/index.html","c36c05c060e4054aee8e792fdeabf3f7"],["/categories/计算机基础/page/4/index.html","330e663a34a1cf68966f60ec1d3906f0"],["/categories/计算机基础/page/5/index.html","c46c9fd226c7af410784efc5f257ff6b"],["/categories/计算机基础/page/6/index.html","1cf141a05a4f1785653378b16bdcabc4"],["/categories/计算机基础/操作系统/index.html","270258a0788ed29abb5297e572c463ee"],["/categories/计算机基础/数据结构与算法/index.html","8ad12ebd3e23e4ecdf43af7649269441"],["/categories/计算机基础/数据结构与算法/page/2/index.html","63f48b2b3829af05d00ea054ce79f8dd"],["/categories/计算机基础/数据结构与算法/page/3/index.html","b36ebc6dee4459c743ff8828f9368dda"],["/categories/计算机基础/数据结构与算法/page/4/index.html","151e0625c7c721329e093d56fe65be07"],["/categories/计算机基础/数据结构与算法/page/5/index.html","6946c61cbe38515d16164e216600b61f"],["/categories/计算机基础/计算机网络/index.html","85c724c01a773bdeecc6a107ba2afb05"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","23839a458d8b45e16675738da5291512"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","583ef87d4f1fbc1d6e2ef0bd5f5cf4c6"],["/messageboard/index.html","c53a73bb0d7d1d7751bde1b641737ad4"],["/page/10/index.html","57497e052a47cad8126455c9b3633d58"],["/page/11/index.html","384b4824f012983750d4f4fb518ae7e3"],["/page/12/index.html","c436f8b8f1326c495e16d9db20cdba3a"],["/page/13/index.html","d8f290a4f56039a1c7980c4f17d4fca4"],["/page/14/index.html","71133028ca3e7dae8c1f51f599d94415"],["/page/15/index.html","21399ea51480752469f195ee9ff518e8"],["/page/16/index.html","39a3082cff73e0bc9a132a781f91fcbe"],["/page/2/index.html","2284e04a4cd9a2774b4946510e9b4263"],["/page/3/index.html","aecd09af565aa7f8516cc0d1d9a7ff74"],["/page/4/index.html","3cce9b446f87f05dcf3d4d7032b01d9d"],["/page/5/index.html","7ad5b7bb496bbb0d51d536c45f093849"],["/page/6/index.html","1eccb4b9192bb6ed458ce75f4ced4587"],["/page/7/index.html","0fdbaee2b76aa5c22a93f5ca373e3635"],["/page/8/index.html","ea1789e40a1db420835761d797a18ef0"],["/page/9/index.html","7f80a6c82a35f89f57ec39c79ecaa6a8"],["/sw-register.js","4d5c511c64cb785886c2ad06c326db83"],["/tags/Ajax/index.html","308e2818d47c9ef571a1b67e80c07ad2"],["/tags/Axios/index.html","3f6caf0eeff0b093b912f29e85640e4a"],["/tags/CICD/index.html","30091deb246d40375889b66679478352"],["/tags/Docker/index.html","c4cc7886ff9efffc6bcac54c7cc9d196"],["/tags/ELK/index.html","5c646b6db0a4c401250c79fa267d8688"],["/tags/ElasticSearch/index.html","45041e3db4a2966b946a336176ccb3f6"],["/tags/Git/index.html","534dafdfbb5b4e42e59cf90980968186"],["/tags/H5/index.html","e1f0987809fd42e964f268aea6daa77a"],["/tags/JVM/index.html","2529ec27a20b779a3d3e48fb20f50e3e"],["/tags/JVM内存模型/index.html","eed507200a57c675b55a939486f2048c"],["/tags/JVM执行引擎/index.html","fa8604e7ffc610028401e1c6c5abb712"],["/tags/JavaScript/index.html","a86ee3e5d53f41877a096ebf6d19781c"],["/tags/Kibana/index.html","68b1d72275fd7bc4c39d27d2b2b419e2"],["/tags/LeetCode/index.html","f1e9e28a250ed36c767ab958e4aeb490"],["/tags/LeetCode/page/2/index.html","29fedd873ec4361a5542c9a93ea708ad"],["/tags/LeetCode/page/3/index.html","9bb86c9c4ef18c41ab393699f1cf2fac"],["/tags/Linux/index.html","7b5dc3375af3c4a344733e27bfe35d9c"],["/tags/Logstash/index.html","76c13cd0a2a1147464581c9c72aea368"],["/tags/Mock/index.html","bcfe957e7c3411ccf2de0a951c149a44"],["/tags/MongoDB/index.html","c6c5363cab7fc91e3f0c75596c9495c2"],["/tags/MySQL-事务/index.html","7420ed53571e543286c03d9c94ab764a"],["/tags/MySQL-数据类型/index.html","fc89ee0a6d8b42d317de2748277e3843"],["/tags/MySQL-日志/index.html","21ed6de70f6e58e5a7205e6ee6ada5e1"],["/tags/MySQL-索引/index.html","9a064b579af78fa6bb00f73595ffea5f"],["/tags/MySQL-锁/index.html","81ea25a00a653901ff955c6a78ae4336"],["/tags/MySQL/index.html","0befa447f8c4d662c84ba02412e75533"],["/tags/Mybatis/index.html","748c3931b807bddaffafaee51ce87684"],["/tags/MybatisPlus/index.html","13ea5a71431d51cd3370e482f890915d"],["/tags/NIO/index.html","2c3615c986bdb1ce407dbe99e85ea552"],["/tags/Netty/index.html","1f308131cfab6178bf728e3846aa7908"],["/tags/Nginx/index.html","cbdd0d53b204b16c6092da360047bc3c"],["/tags/Promise/index.html","5e1e256c64bb6857dbff454a5267ee8a"],["/tags/RabbitMQ/index.html","3ab508ca09f8a226fb46c85c34cf795a"],["/tags/Redis/index.html","d051dd04808023f69891d0453bf48fce"],["/tags/SSM/index.html","80f00a252729ab4b27a6307b90e38c28"],["/tags/Spring-Security/index.html","2d7940688e4364b50c4ab3a872406e3a"],["/tags/Spring/index.html","05fd6a745fe98bb2255f1a7d5a74d538"],["/tags/SpringBoot/index.html","cdc717164e008da3f9adcbd318c264a1"],["/tags/SpringCloud/index.html","5616f3a3b6f10dacc151ff0a5cccfc82"],["/tags/SpringMVC/index.html","5ced0d1d77080a18808528104c368b1f"],["/tags/Swagger/index.html","59b964fd855cbd42a1ea625fa0c87b0c"],["/tags/hexo/index.html","f86b9da5ff38b3ee3ef6b69a86fab796"],["/tags/index.html","b8fe5c3bb62d0fa537dcea7a7eecbeda"],["/tags/jQuery/index.html","5346229e882da2934816ee211879e038"],["/tags/java/index.html","34b4fb4b7d69c42fcf590568f46a68a5"],["/tags/markdown/index.html","04d4f0bf8114f417f9cd718de5d886f3"],["/tags/noSQL/index.html","82e5c28f0f18227e19a74fa839cfb6c6"],["/tags/typora/index.html","9e0b55e4c0cf18f21e4c2890c4695ad8"],["/tags/vue/index.html","628fcd508d545c946adeeee5c0e5e0a3"],["/tags/享元模式/index.html","86ba14afe2d480702e5d17cd1f9bf0c7"],["/tags/代理模式/index.html","b2df69436db1aa5e1ce9f2037ae7d163"],["/tags/内存管理/index.html","cea12b6ad92b66321f1b99097fa53099"],["/tags/分布式/index.html","e29ac0ce8a7e4b2696f41862f08e6191"],["/tags/分布式系统/index.html","496cd854660e391265c0d0d926a2a932"],["/tags/前端/index.html","8e1e9d8fc318cc1f1aefcf94cccef5c5"],["/tags/前端/page/2/index.html","49d92a593d25ff7963156fa2c417cd03"],["/tags/博客/index.html","2ccda26aa9d46a903fb48b3d7c2ad0aa"],["/tags/后端/index.html","8c592a88a3e335c15d3402037b3283b6"],["/tags/外观模式/index.html","c6170940922cb80956e35ed54042763e"],["/tags/容器技术/index.html","77ecb2d1df32fb2ddeea2b1602f6b542"],["/tags/工厂方法/index.html","ee787b855ab79eb90307279a314425c2"],["/tags/微服务/index.html","eb1303cc4f5bb30ef8e2aeb43dd561b3"],["/tags/抽象工厂/index.html","8ab5f58e4e9a1814d7ea35e27af991d9"],["/tags/持续集成持续部署/index.html","f5c9f8b94259e70c1ffbc4bf0c575c19"],["/tags/搜索引擎/index.html","a48f7f5e4695ef929e3a1ec5f6a64731"],["/tags/操作系统/index.html","f40789677241c0f036aaf261c3abcb68"],["/tags/数据库/index.html","b7981c5a9f01999d63543866207d0a76"],["/tags/数据库/page/2/index.html","ce311890997d9de6ec28081322f6f4a9"],["/tags/数据结构与算法/index.html","bff3f566ad2c0c1d6a6133199fa08cab"],["/tags/数据结构与算法/page/2/index.html","48a893112a6a3226519061f743e5971b"],["/tags/文件操作/index.html","04858c462a91c64060fd85870d458d72"],["/tags/日志/index.html","53cc5936dea6ee1471fc97407c1aa1a1"],["/tags/服务器/index.html","a594068f1bed642811e494124d8c6bfc"],["/tags/权限认证/index.html","361f09c7943ae516fa840d29ba74d07a"],["/tags/桥接模式/index.html","112671641a688036bea92e8d0ded4332"],["/tags/模板方法模式/index.html","126c731f8e743a0037e8160aa476dd08"],["/tags/死锁/index.html","a5a5363b0743a53623d0040fa375ccef"],["/tags/消息队列/index.html","a4f90beba7b11038aabbf2742f6dd537"],["/tags/版本控制/index.html","dcad0c36f0c768cd17f2c97475484312"],["/tags/策略模式/index.html","584c15f2db56c89cd54d802b069e939b"],["/tags/简单工厂/index.html","018865a115f8c357fa3a30edcd37517f"],["/tags/算法/index.html","62c530ef08386f3a26e50c7615a7ff5c"],["/tags/组件化/index.html","0737b97e5a41bb98d9987ebc51018af5"],["/tags/缓存/index.html","2b9fb9a9fe0466f6031d06218ca2cc62"],["/tags/观察者模式/index.html","1df3c37c26c2b0baa09134027f7c9bd6"],["/tags/计算机网络/index.html","39cedc5b99562aa35fad05d6b3c713e5"],["/tags/设计模式/index.html","d9a232bf37e5c21c6a829ffa312894ef"],["/tags/设计模式/page/2/index.html","4c66c955f23a661db74de6f472d9a975"],["/tags/进程管理/index.html","89bfcd4fcabc35e7ff3238a43339ebe7"],["/tags/适配器模式/index.html","0335ee2f80f7b396cba9f031e0ff49f8"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
