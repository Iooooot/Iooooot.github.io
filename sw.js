/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","bd039f354d35a5c2dc3c25de6799c6d8"],["/2021/02/22/工具的使用/博客的搭建/index.html","e2f999c5cc5fe13ec3675931d326ee1b"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","49ab85d3e347007f05c8d7307b499b2d"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","3e7e05dc5c6dd86cb092874aaa87339f"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","9e6bb1034e87f321c41aeb5438ea4052"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","1f438ef899f42c4ea0159350b2485b20"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","50106bd1a4e0b6fb249c418ca903b035"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","3eab1db59a9ead51d6743e9f8335e673"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","a1946850b26a3e1c753aa9505ef1862a"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","8f33c6f6d30aaf406df344aab9caf06c"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","aa34251e251884fd7b9cdada528c7983"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","008ba201171ecdf96dafa961d881ef7e"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","c91125a165917047172e8e25e3c19103"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","ca1c4fd9a93d095d5983cf9605ba34df"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","c73819a5860818dd1ca54753d6e8334a"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","aad9896762e79a04674afdf90de8b725"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","b42444e68fc099d2afe90178e32c3138"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","4b389f2bdf679ba59d6481395392a0a2"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","7e6dc3c5a3baa324684891b355d05520"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","bbee4657a68ac80f560872fc2d24da8d"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","73ed1d1afccafbe91fba06025717b1e6"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","277c1600a25da5e29692d560b154eec9"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","18d4b59fec0db102945a4c4fbb6aa534"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","0d324335ea030eee41be570cec76c114"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","10dfbbad68a0a2cb6c198a350f5fcc1a"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","7d80df0aacf19ef79060345a1a51fc59"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","82493ebb2cbf5015c23813afe37551e7"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","6672bed41240f5eb6cb47cfe114d463f"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","5eee4bb4681b2381fea85cbfdc1f90f8"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","5ef65020652ac02d7249a1a2b5425cc7"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","f79dfdb2015da8b5ee110f7bf91e05eb"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","b8fbfea2dc1db09a0b08da861f85e040"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","66e10b6179c0dd5fc4f04efcee891573"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","b09a1a81944c639562af15f3922e0122"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","f070ea5d507392aae1b833370f4251a2"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","46ae4acb6197fa673e7cfbdb4a20d70b"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","a4c4d95518e412d692f2e13800a4fdbc"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","2057eec82d81554ab96033362ebed114"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","1d916a4ea0cf9ef7e8a9e63f3c08bb4b"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","ee57134548081056f445e7c8f9a581d8"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","5dbc9e336be26d4fa63e6cb3390b2783"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","210309339bc38e949c8d5dbfde7a38d4"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","d1b790df2635e9c4568b048d1b990dae"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","ef494d7b7843ae7c4dde2f3e097bd890"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","8b22c7b5250d6c88ded787472130f8c1"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","c545eb1a527feb69688af6a24f6e7214"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","4ec6b17a2dd3d2664a770d2565a277fe"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","25272caeb3c485d22f1a25af9a9ab0ce"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","10d58977c20cd4856600954b7d335f6d"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","3e5604d00ac5ba44a05e5d0d5f1ac1df"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","b4269273cd1f3aee42aac783ecd80f6a"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","79d5f2f878c8097e0bf6dd166826b02e"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","22250f2f8941ac4a58686a52616270b6"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","9ff7fc7c7878f6115aa742a037bd3a87"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","c86c626e9e6ec7365fa8b63a911af2ae"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","972fd37ec89b7aacc831e51d8ad395e0"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","4fb8000a0efb10ec8e96517e95fbac14"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","0052eab237b470108eb83ec13238757f"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","d9c884e8932184fc6093d4be2367a8e9"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","2fad89a2b1a457d6f571b24cbf8ce801"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","69f0f1d9214d569db90f7b502b2d1ae4"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","c6870193b29dfddf7a5dfd939d97c4ce"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","d8ea4f1799abbf23a2f86431aab22725"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","a308af1e3c860dc30ede578475dfe6d6"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","74ed234a0df3670d5701b10037d63801"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","c133fd9bff2de885c9ede3fd1e2a342d"],["/2022/08/17/前端/jQuery/index.html","ff58e58cbcca69d42ba3adab1e10c3a6"],["/2022/08/19/前端/JavaScript/index.html","13e4de5c2613ae87e5299861f4435552"],["/2022/08/22/前端/Ajax/index.html","c176e7773d349df5c1d1bad035ff0f62"],["/2022/08/23/前端/Promise/index.html","1d907c6f27c90a2aa575f4b4f825bf69"],["/2022/08/24/前端/Axios/index.html","3fa606fb49bd405924bf41c03955932f"],["/2022/08/25/前端/H5本地存储/index.html","44ec0cf378e9d81f3fbc2f7e2b83dbe7"],["/2022/08/26/前端/mock/index.html","2d518d52452ae1e6c957f8f24e44604f"],["/2022/08/31/前端/vue/VueJs/index.html","4510b47894110df951d8d0503a955b6a"],["/2022/09/01/前端/vue/vue组件化/index.html","2a0e9ad308ba8104a6229177ce985598"],["/2022/09/04/前端/vue/VueCLI/index.html","12bcbc6123183291db939cc4fbe75bf5"],["/2022/09/07/前端/vue/vue实现动画/index.html","c124027567e0ca2ac63c1362ff12727f"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","cd5f114d1d84de6d9b51b47e8bd16d52"],["/2022/09/10/前端/vue/Vue异步请求/index.html","d984b38948030f6c233a33c51f71ff09"],["/2022/09/11/前端/vue/vue-Router/index.html","a11c2b0fa0fa237f3cfb3f665c617b78"],["/2022/09/13/前端/vue/Vuex/index.html","26da276764145abbdad6b716470f3cfc"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","b26361c6e84b4590b56d380c1533024d"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","6cd9fb40fb2566d88d121e05e1d47af2"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","780f67de9c2fea26955c81e5230cdbee"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","d05ff7f92a8e68a34bee743ddeb1e7d9"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","6892ea3dfbcc01a4a43feb2bdbd60b4f"],["/2022/09/28/DevOps/Linux/Linux/index.html","eed53f0f0a80f8be65fb163e404f4355"],["/2022/10/02/中间件/Redis/redis基础/index.html","dfaef2046c084d7a85c5007d3f06e966"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","f2dfd1f732d773613347243587236886"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","ef91b522a93ddb1b10d441d49c5f2966"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","24846d89e68b971f05887fece392cf9a"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","98c72aed83c781e3cf8882226f966cf3"],["/2022/10/17/中间件/Redis/Redis集群/index.html","be269b6812df91f076a4b9cbf7f3443d"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","1eb6bdad8bcfe24b0548fbce3b5ad171"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","70733d269c4521d640670ab9cea6c98d"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","cd016b41495a5f679bb67aaa415669e5"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","444b5f16e8ecf3de8380b03946a3cffb"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","e6f86216a426d6c075e17e7eaaf3d3ef"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","f08ed62c594d1637e12377ee9db338ef"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","b8c1c49706fecc423073a1bc5e1a2e0d"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","d1f5e8fda46a5d7b97a37f9389a71084"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","324d127378166fc8d6800ca97a73a79b"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","7efee6e1f182dbcb371b9d4d4da44c22"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","067caa0e740e217c881903aa37e11339"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","d713920f0a57ab19ce42adc0595cae3c"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","d0529feaadd0920dc82b55552f4a1f3c"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","f73c7f720bf8a532bc2f764778c2fcae"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","a7577247e7471474f40e077350485aa2"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","f900e1dff5d1fa7df16c1194292d6072"],["/2023/03/10/DevOps/CICD/CICD/index.html","282ec98fc99c533513604c69a5563269"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","0fd845987c8dd47f4ef779453ccd51c1"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","08950d7cdc5cc0461082ed4dcd1ba485"],["/2023/03/13/Java/NIO/NIO/index.html","a918e8b4ced77ff10731364a668b93f4"],["/2023/03/14/Java/NIO/Netty/index.html","604ba8d4f19cc5d5ae158127ef3f9404"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","799df40fc5c97730b58784f7bac88380"],["/2023/03/17/系统设计/分布式系统认证/index.html","d360eab5974cde10dbb101aa9e0909ef"],["/2023/03/19/Java/JVM/JVM概述/index.html","b7a9a8bc776432a69a323b1c2f3383d2"],["/2023/03/23/Java/JVM/类的加载过程/index.html","d9d0271cb4cfb9561efd3ea2dc1d582b"],["/2023/03/28/Java/JVM/对象的实例化/index.html","393b57ebb49b57f3ccd9415f61c30513"],["/2023/04/01/Java/JVM/运行时数据区/index.html","6373d5f6639e417f60f2c5887b05df74"],["/2023/04/04/Java/JVM/执行引擎/index.html","15635bc4e02ba2b8d13a1e3d818c0889"],["/2023/04/06/Java/JVM/对象引用/index.html","9797080eb5930754c7239848393c62aa"],["/2023/04/09/Java/JVM/垃圾回收/index.html","f3b67737d0064171377e9ce06e030a4e"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","fec42d307b4c4692dc62736ed46e7047"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","164a9255f06720234f10ad21e5df3db8"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","b40aaf5450810165204d5fd51613a799"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","fa4a25972530e241276a890378f6305c"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","8d2fe5f0744ad611102ba7fb9e15783a"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","0f5f851328c4aa14cf4cb84081ce0692"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","359ac0d87d2088b59795ae2d7a167958"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","f6a36f75c59d1a447098c70e0682f2e0"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","e6be2e5e950eaeb3327aeea903a4919d"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","55ef2c3f5cf509c4deb40a46a9f19705"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","8f37ac9012c8c82d6b7c83e1e2c486b1"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","08d0502ecea4d579e166482a5fa3f93f"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","18478f69e6783ea971ca7ff6a322cdba"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","9600068d4652793f750e41fc1bdb26b1"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","09c1013b6e7e0fe150dd6eb47210ec04"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","cc9101aa1bcd586f9b28deea22d0ffc2"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","537a2d41294594193cec550e7c3f5f1b"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","46ec24f67fff3d00e94a2bf1fc400f27"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","cfcac025cb57139439d315c911863be8"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","a7cae07cf69b842b6345d71281e4a476"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","a51b43d3689e6a4837602065cb2376b8"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","c5821ee7a1ab8dd8bca85d4637f7c3e6"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","50e6644e5fbd341ea23bdfeeec820ab0"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","2347c216d4f4ba1a6c3f77ec28fac275"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","b0159ef36b874c9922ec6babc7e1931a"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","a3dea2927516203accf7c1c88a8aee02"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","8ddaee1a6c4a178931c7d40f72a4c2cf"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","bababc1b2f9a727faf882ce55fa11840"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","843c83037ac2db6a649e64f67b73a765"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","aaaf5d3632e80de271a772f92708614c"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","1aff032ea271034240f81dcd14f46ade"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","f325aeb17c51c4dcf27c89b0c439d623"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","798c503a9e5ca92899139b504be0742d"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","dd8ba27b739a452c98e798f746a0e942"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","585281ec0bcaec4cc9757740c0647c54"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","a575610efa5e5117b324f34c0be0227c"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","2b50f4aa4cc6879c1e49b22f62a9f705"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","f99ea7e93870e62eefea8497669981e9"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","6df9731d1448673d7446605320daaf4a"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","61b4a0928e9387edccaa7712666bf1a0"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","b1bb86dcc293a4eccc679dfc73fdb36c"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","96b74a474a849ae2306f19d0fea32877"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","c5e947bcb2603e131d964b4a26952b4d"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","d7adfd5a4f7c566e3c716a324b9b90bd"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","f5b1e9314e59f36205a131a6f2dcc5f3"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","20cb37170f6639a6fcba0101e45f9c44"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","0dd5b0ef803d706f0a978e826faaf1bf"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","c120b99b8f047a9a0654cf400bc4a5e3"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","ef7a452ed6a9c77c66511074e346f57c"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","1af6e4f868eda81c8a6bb4a122b3ed2e"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","c4dfe7410fa56c766c2912b6203fe528"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","db4ce81973213900128eb32a2834e095"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","0a62ba03cf8b7da8a756805cc4df52ec"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","280958a032de2a94dda621851812d40f"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","039a258bc5b23572f9d0517c0cdbe9d1"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","0d6a3f68943c26182bd8002496054954"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","e9f71e37708b9db920f1f1c9ed1e374c"],["/2023/09/04/中间件/Redis/Redis事务/index.html","ddd9262dc25218dbde6612dbad2ffa3b"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","fe4348d2b749e4c2c0a3303c558265a6"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","94badd3cdbdb21b8d550c4d1b64ddf86"],["/404.html","bcbad0398bea72be415e874ecb775f2f"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","5873d719f91330a87d65693a12a9743e"],["/archives/2021/02/index.html","4a49f7803c99ca46d9620494a5bd9f3a"],["/archives/2021/03/index.html","c677e3c73552fe677db58bc1b3147209"],["/archives/2021/03/page/2/index.html","0d179f9e0d0167136a1b622834935d84"],["/archives/2021/03/page/3/index.html","00cc186790923a8cf5c887deaf14f721"],["/archives/2021/04/index.html","f3345f9527e30e31d5bf2da1d2aeb881"],["/archives/2021/04/page/2/index.html","0d67f3bde2d32f01b54b01b45b37184a"],["/archives/2021/05/index.html","95674bd10f8b4275eb938eaa839bf345"],["/archives/2021/index.html","ecbe7f125dbe4d813f9857b51aadb0dc"],["/archives/2021/page/2/index.html","84342c7ed92a38ca15b57e9d2382695c"],["/archives/2021/page/3/index.html","884056baac9bdda99da2d19012262069"],["/archives/2021/page/4/index.html","289291f474f79335cfb4e8e2e4d63139"],["/archives/2021/page/5/index.html","dc00ce17fe05a6be6511da568c7c7451"],["/archives/2021/page/6/index.html","f7f1704734873ab00a0d973e3ee3e7d6"],["/archives/2021/page/7/index.html","0909bb455cdd2fa6dd5812b597ac1ac5"],["/archives/2022/01/index.html","c763ea172a3dd48cbb8abfb74c347259"],["/archives/2022/04/index.html","feb4b2bfa9e7fb467f7d88cffb8816b7"],["/archives/2022/08/index.html","d2b0f86e83b378bd0c173647d0b098be"],["/archives/2022/09/index.html","ad0feadcda128936bf7cae1cc93df411"],["/archives/2022/09/page/2/index.html","3cf4c83f6399ccfcc6c38803492fca4d"],["/archives/2022/10/index.html","97c0179d1452d8591ff2741769aad25d"],["/archives/2022/11/index.html","c89231b1ce4c8859ed70f2e3c3b8ec0a"],["/archives/2022/12/index.html","82193f59fcd2b34fe0dbc12ee4c0c899"],["/archives/2022/index.html","c50802a199e4163fcceb6262eb19dfcf"],["/archives/2022/page/2/index.html","5b959495a3105c87414344a663745b64"],["/archives/2022/page/3/index.html","cca4d2f1e0e05aa6c6ea297334295712"],["/archives/2022/page/4/index.html","b95ef942a5b45f5eb4a74b218b8dbe78"],["/archives/2022/page/5/index.html","a4024eb4b2d7a2508b43b3f46035f776"],["/archives/2023/01/index.html","5264ca5395c07cec32755c73811acefd"],["/archives/2023/02/index.html","a216a2096ff81898da8291419d1a9066"],["/archives/2023/03/index.html","efce3e4b6625a4fe9dd84fadc77ae593"],["/archives/2023/04/index.html","571794cd4885f962590b07820a72b4b1"],["/archives/2023/04/page/2/index.html","93a7641938aec63eb016a62df89abaa0"],["/archives/2023/05/index.html","4f32500468ff4930e6f56f1276ec3332"],["/archives/2023/06/index.html","646ffe9edf67a83db43423f4bac030b8"],["/archives/2023/06/page/2/index.html","a88b8d3ede026e965370cc479b80ffb6"],["/archives/2023/07/index.html","05a36b083834968242b5aee27ef7c867"],["/archives/2023/07/page/2/index.html","a1214f23c58c02c3829e1b4f55bd1f3c"],["/archives/2023/08/index.html","7c42079eb40d6b75ae09175781567e48"],["/archives/2023/08/page/2/index.html","38777ba875a35208252ef398ab99895b"],["/archives/2023/09/index.html","53c3aaa0e9c65d1765c01f0369424210"],["/archives/2023/index.html","e3444fc39764f9abd2c17c17bf667d70"],["/archives/2023/page/2/index.html","8dc39980ab2a0fa33df76f5ee1ca603a"],["/archives/2023/page/3/index.html","2b256dd2199f2866c058418723ae794c"],["/archives/2023/page/4/index.html","25d4cebe50835f2178ea10e1cc9bac28"],["/archives/2023/page/5/index.html","caaaae9c4d390b06647db1790cd6501b"],["/archives/2023/page/6/index.html","e411d59123ad167f8bdba02c2e1c5843"],["/archives/2023/page/7/index.html","373e636764bf3458d5cfdc7a5c3b73a3"],["/archives/2023/page/8/index.html","9b2c141fe8a63dd2969be929a7277f40"],["/archives/index.html","085d5a13d42360d95e8f6165dbc71c47"],["/archives/page/10/index.html","c5ca98b49eca93bcbd2cbd24b0bc37b7"],["/archives/page/11/index.html","57b4a02ef81f22929cdaa2d262082629"],["/archives/page/12/index.html","3da93c173fe197c264615d7477df8424"],["/archives/page/13/index.html","33bd72dbcf59c2670129dc1f622137e5"],["/archives/page/14/index.html","fdedd0b48fd6944cde33e151f0e57a4f"],["/archives/page/15/index.html","4abe47e4c2d810879034d3fdaf764770"],["/archives/page/16/index.html","ec804a1d455b6a6ebc85b4d097bae6a7"],["/archives/page/17/index.html","8ea6e6a0de23ade4379a77ea5afc81d9"],["/archives/page/18/index.html","ca6a00b77cd48ad28737c27b6084b542"],["/archives/page/19/index.html","b215511b006d1f724919843cd68db76f"],["/archives/page/2/index.html","ec9bec934c6f8d940cea191b6ea36741"],["/archives/page/3/index.html","31f542f1d412e830fded1e2cba1e1d51"],["/archives/page/4/index.html","8f4cf496c9b9975a0bea541015bc6627"],["/archives/page/5/index.html","0b3b30c91444bbc46563ed1283c32a1f"],["/archives/page/6/index.html","fe95af9ab82ed823c8175c96d27baf4e"],["/archives/page/7/index.html","6dd20257f37082009d1c33e8dea57d49"],["/archives/page/8/index.html","7e4efaa4f7bb5a28980486db92174520"],["/archives/page/9/index.html","48fbff877d2e5f2e9e4149af82fa7d31"],["/categories/Devops/CICD/index.html","6c738856d1defa4c2b5921b701015c62"],["/categories/Devops/Linux/index.html","c6ffc56697cb947edd6e177103734d3c"],["/categories/Devops/index.html","872afa64cc9d68f9bc0cfde998bc70fe"],["/categories/Java/JVM/index.html","975981b4b618bac54a91096da06e29a7"],["/categories/Java/NIO/Netty/index.html","60e0e8bc6f266854de9962dd5a84b96b"],["/categories/Java/NIO/index.html","2789f44f035fd455e7cbdb1be9efb8b2"],["/categories/Java/NIO/原生NIO/index.html","c67179ff2d330e21ecb4c3e406daa1e1"],["/categories/Java/NIO/文件操作工具类/index.html","618881870b26b5b33edbda15d414f654"],["/categories/Java/index.html","a48ae0dcaa160d0ac878bc70a1a0caa1"],["/categories/Java/page/2/index.html","645eedf307a08af64a251d620a1d2699"],["/categories/Java/学习路线/index.html","5308ace52f49b9021986bbb1e8a3f1a5"],["/categories/Spring全家桶/Spring-Security/index.html","968dce1049061e9f8267851a5c12f63d"],["/categories/Spring全家桶/Spring/index.html","c43c6a4b4143bd294ba81acc46a574ec"],["/categories/Spring全家桶/SpringBoot/index.html","c43317388b6b6c1742f9534cbfc3fc3d"],["/categories/Spring全家桶/SpringCloud/index.html","72c4e07d0ff9d9a979481a9234000f42"],["/categories/Spring全家桶/SpringMVC/index.html","55cf0f6a166c1dedd3a451e98acbf696"],["/categories/Spring全家桶/index.html","cdb43b57742e9b17fbfe9bf34742d46f"],["/categories/Spring全家桶/page/2/index.html","79d07890e8ce1def787a3fb4d1a564bc"],["/categories/index.html","32826de912635d1882717e20fc73107a"],["/categories/中间件/ElasticSearch/index.html","01b944492bc1ac1e2867d85907839647"],["/categories/中间件/Redis/index.html","fa5fd32d51c52cca053cd2113eed79cf"],["/categories/中间件/Redis/page/2/index.html","7391fa29740b83dc51d9fa6d58475e7a"],["/categories/中间件/Redis/page/3/index.html","fb7b24974e0d4c7516999db69846f0b7"],["/categories/中间件/index.html","2a00138205b9dcc411b97ad0aa83c3ae"],["/categories/中间件/page/2/index.html","f113de69570abdf03c38bd8e8a18c5dc"],["/categories/中间件/page/3/index.html","07ece650740934b0e7e05a3524df7094"],["/categories/中间件/消息队列/RabbitMQ/index.html","e642b81beaccb7b4703d20db21651f4c"],["/categories/中间件/消息队列/index.html","2f4dde7f96539a60eb5a5e77bf4524c0"],["/categories/前端/Mock/index.html","8015cd22793e70aabf67f3b13b023be7"],["/categories/前端/Promise/index.html","10966b1f8564c02e38cc5b5f83138baf"],["/categories/前端/Vue/index.html","1bea284f09df27659c4747870387bd27"],["/categories/前端/index.html","48f070911fe2062cd8ce0004aa86a7b5"],["/categories/前端/jQuery/index.html","1378e498d2dd61af9750c8b1b9dcc468"],["/categories/前端/page/2/index.html","90e108192c1b40c474d3fc58316b7725"],["/categories/前端/原生基础/index.html","1febeceadfe177e026ba9dd0e10592cc"],["/categories/前端/异步通信/index.html","f8fb8cdbd20356413f48bb0ab209f972"],["/categories/工具使用/Git/index.html","f6ff6e3b857bdf7b42aaa8c80f08786a"],["/categories/工具使用/index.html","66935edc27a9128e4d0792be4e7889f8"],["/categories/工具使用/markdown/index.html","f7fcb58ebfe96673b082a39d30cb6bcf"],["/categories/工具的使用/Docker/index.html","815304c3bc9db30710658cc1a5095a20"],["/categories/工具的使用/Nginx/index.html","e259e1aad5bb814268788780712c775e"],["/categories/工具的使用/Swagger/index.html","2cb62fa81e74944142d7af8d245ae34e"],["/categories/工具的使用/index.html","6189fa14cd52bfef73bb63e425d5170b"],["/categories/工具的使用/博客搭建/index.html","aeb9a971817bb09cb14cdf0dd2df42b0"],["/categories/数据库/MongoDB/index.html","e890d4d82b5feeb729ad373287a56372"],["/categories/数据库/MySQL/index.html","072983b2a6b684eb38b1305786dba64e"],["/categories/数据库/MySQL/page/2/index.html","cc56c1737d834a30de1f46ee9fe940fe"],["/categories/数据库/MySQL/page/3/index.html","4cc7f5ef31ac9804cc0f3625eb11ba93"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","c48c9a70376e4d3bd7cb290dd1c9b0fe"],["/categories/数据库/ORM持久层框架/index.html","77c024096ee943bdf65c5776e880af45"],["/categories/数据库/index.html","6801b6ff5d75254ef1cc87441a3b667b"],["/categories/数据库/page/2/index.html","26348388b2edf645e828771109733bc7"],["/categories/数据库/page/3/index.html","a0f628fa851706331662a5844df048c2"],["/categories/系统设计/index.html","42948847aada6755e983c55b7dc1d768"],["/categories/系统设计/page/2/index.html","18f39af3adce89fc4da4ee2e7e25d87b"],["/categories/系统设计/分布式权限认证/index.html","ba25b1278ce202074274998fc0bc2ed5"],["/categories/系统设计/设计模式/index.html","163348d748e1018cb7c2fca580abd331"],["/categories/系统设计/设计模式/page/2/index.html","4a938ad366891eff4d5e786428bc5023"],["/categories/计算机基础/index.html","03bdf538a017f9e4ba73a2990460686c"],["/categories/计算机基础/page/2/index.html","05aee2850f433018f3f52aaeec5ce75b"],["/categories/计算机基础/page/3/index.html","341cf56c50507095f5ea12fb803b29c1"],["/categories/计算机基础/page/4/index.html","03ae63179ee08e67c0826ce556829f76"],["/categories/计算机基础/page/5/index.html","e2ffc62a56e4c6e679a14f35cfa77582"],["/categories/计算机基础/page/6/index.html","d63b6d78131f5a49bb24df57163bee9d"],["/categories/计算机基础/操作系统/index.html","76250bd06b571d9a9e81ae2855584f94"],["/categories/计算机基础/数据结构与算法/index.html","ba97cf92a74133a5613d869749c16435"],["/categories/计算机基础/数据结构与算法/page/2/index.html","f2c66c322497bd827a8f785d52de9ff1"],["/categories/计算机基础/数据结构与算法/page/3/index.html","4ab2322867f514494ec6c544ad285e79"],["/categories/计算机基础/数据结构与算法/page/4/index.html","74dc8c8af7806e0547fad2df4e0d168a"],["/categories/计算机基础/数据结构与算法/page/5/index.html","41efcd88c5c789b912f4527f73ecd3ee"],["/categories/计算机基础/计算机网络/index.html","f5e6a40517804686ea52f0073baa2675"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","2e691d1dfad4f6dabebd51e9cdba6630"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","2194254009ab07f5584883452634963b"],["/messageboard/index.html","230cbf6fc02b68273c970154fcc12b4f"],["/page/10/index.html","2198e76ec462c5fc391544c733f2ce62"],["/page/11/index.html","49d97a4941cc17779012427812944a37"],["/page/12/index.html","1de65fb660596a647dd1d4a565727979"],["/page/13/index.html","db9b375626fce57b25ddb4c5b61e62d6"],["/page/14/index.html","d1b32d19e7d7e2a231b6e12c2e28aefc"],["/page/15/index.html","e2273d49434dff3199b98b82a2fc7095"],["/page/16/index.html","ffaf30854b3a59ce328a5f4de98af7b0"],["/page/17/index.html","25ff64ffdafdccbd65ab430b3ac72b22"],["/page/18/index.html","2f593c4087d4497be2797e375856b839"],["/page/19/index.html","f6e2bb0d5f08286dcc15eab56679ae02"],["/page/2/index.html","e9ba18b785852d2441c3ee2049b91c55"],["/page/3/index.html","f73f0d71c8ca1c9849373e972a0c9027"],["/page/4/index.html","06159e370a68556f0147071ff05bbc1b"],["/page/5/index.html","7b41b8fb325100c8e1b01afac0069d7b"],["/page/6/index.html","df56bcc5e7e232d8b208f050dafcb127"],["/page/7/index.html","3f977503a82013edf4617a1cd7303751"],["/page/8/index.html","de2177853242df4c4dbbaad7ca7898c9"],["/page/9/index.html","39adb26e7ddcff472bc476f861ca71e7"],["/sw-register.js","78d6c571d1abe11d70256621396ff8c3"],["/tags/Ajax/index.html","2519bdeafd7458e5acab6b44a81f8630"],["/tags/Axios/index.html","1d6a6ff4329f8d764acf5ce6231d1e10"],["/tags/CICD/index.html","942a8ead69524fde15991768c26bac4e"],["/tags/Docker/index.html","758d0102416089eb40fc6202ab86b57a"],["/tags/ELK/index.html","26a5b2970e88340dece8a0b6d8ec8c4e"],["/tags/ElasticSearch/index.html","96d68b3087393a188dd744e283832d0f"],["/tags/Git/index.html","2af669486e5577e2dd3321b943d0731b"],["/tags/H5/index.html","a79e67d6e94e401572f6ad32b61aa677"],["/tags/JVM/index.html","5f57fb9034dc4c43fcf507c26b9bb7f7"],["/tags/JVM内存模型/index.html","9d18164f497158e479a97e0f06d0d45a"],["/tags/JVM执行引擎/index.html","a21a6ee5e562f2503f2c17c55fd9214b"],["/tags/JavaScript/index.html","35f6781c366b53d68fd973d8fedc4ea1"],["/tags/Kibana/index.html","66053a8a3cced0ab92794e6be999ddea"],["/tags/LeetCode/index.html","111114e0ee6b8eafb16cf154320e334b"],["/tags/LeetCode/page/2/index.html","27cde4519d75f2c04b03d1c6a38bbbeb"],["/tags/LeetCode/page/3/index.html","5801f5fdf8f9b7e1afaaac281ba61b97"],["/tags/Linux/index.html","1864dae94b7330618b95886d5bbe07a0"],["/tags/Logstash/index.html","1035b0d4e218aede8490c5273e583244"],["/tags/Mock/index.html","e91c026211a167547458695e48501634"],["/tags/MongoDB/index.html","5e590dcbf6c1f68c3c39936944dd531d"],["/tags/MySQL-事务/index.html","00348af3dee7c7a35790ec4bd8d0bfb8"],["/tags/MySQL-数据类型/index.html","b64723ff920fbcb8b63f921301e20992"],["/tags/MySQL-日志/index.html","90a1cbb928a1546de699a9a2776302d9"],["/tags/MySQL-索引/index.html","8dfbbf76cb40e9479ea9900870179004"],["/tags/MySQL-锁/index.html","079f88429dabd4c858ecff2c39c5e11b"],["/tags/MySQL/index.html","e8d445e6275a887fa99c5e70807047f3"],["/tags/MySQL/page/2/index.html","31b05c323f6586f0c9f936aa31be8e72"],["/tags/Mybatis/index.html","d1d38273172f26983bb781c0ac360397"],["/tags/MybatisPlus/index.html","fc95c74fd28abac4ffdda0b9641d5d1e"],["/tags/NIO/index.html","6d44316a7f50ba7f18683742027322ef"],["/tags/Netty/index.html","477bf7b227f6de51b1d466ca3a95b726"],["/tags/Nginx/index.html","cc7a368bd8bc1cc96f7201bb103e9de8"],["/tags/Promise/index.html","cdd2499c76f20564f3e5b8bdadf9aa5a"],["/tags/RabbitMQ/index.html","8e726e7d40b5bb0b88e74349cfd3a908"],["/tags/Redis/index.html","a8cd4172dcbe230cab83633e8beed5f7"],["/tags/Redis/page/2/index.html","2a898b04bf4cc0ab39564ec1e59493ff"],["/tags/Redis/page/3/index.html","f811a9b8f88795809d54e733b6162b5b"],["/tags/SSM/index.html","d30f57176e84215cc128c314cde1ce19"],["/tags/Spring-Security/index.html","9342ed3f95a8c7af3da94de48bb63dc8"],["/tags/Spring/index.html","c4bb88ca622d875ca41ce71ecbcab08c"],["/tags/SpringBoot/index.html","507c383163c4184e369f2af1681f30ac"],["/tags/SpringCloud/index.html","d0a866dfd9ada955ea8d636d1663b0a6"],["/tags/SpringMVC/index.html","c0edbd40edfeef146dad55df10873e04"],["/tags/Swagger/index.html","1c71ee7a1639277f2c45ec1ae0500915"],["/tags/hexo/index.html","97d54d1fa2c564263890dcb6a3b778c6"],["/tags/index.html","eacd0a025a1736ae11d4a1392b4f2773"],["/tags/jQuery/index.html","457ca30fae3e66f3137cc3ec9e1772a6"],["/tags/java/index.html","1c5f0084edc4e918ee3bfd76473e5c2b"],["/tags/markdown/index.html","d6493ffa418464e2eeda62f19ec2516c"],["/tags/noSQL/index.html","845fffb4881cc00ec2e0944ea8a424dc"],["/tags/typora/index.html","98174cf9019f140a99d96582bea24669"],["/tags/vue/index.html","485398a333a293194fae8f4f410e4594"],["/tags/享元模式/index.html","f14f40e6b6d4f34d356eb07ec3ba4276"],["/tags/代理模式/index.html","d5e51989d34d95a80cf4049998114ec7"],["/tags/内存管理/index.html","f5dd9f5ab8ac99a1bfbdaa39f26ecda4"],["/tags/分布式/index.html","3021af1e4c7a98338ccfd6bc562590f6"],["/tags/分布式系统/index.html","a70dc6eb867f9b7f9d1dd73a3fe05b33"],["/tags/前端/index.html","61a6ba290037924d604c405c8c63d4d8"],["/tags/前端/page/2/index.html","5f066b2f290c727c0d75eaeaecf72977"],["/tags/博客/index.html","42ab5ff00fefe7fbbb04e7e25b9e32e5"],["/tags/后端/index.html","d5d4f2745298c2c265eefc6d06ecf712"],["/tags/外观模式/index.html","d0f59500cc95467f914eaf3342a23031"],["/tags/容器技术/index.html","7c5f57640d68c649116d589cf2db9e09"],["/tags/工厂方法/index.html","2b025c7dc7631d1b345f9d0c5d6cefe7"],["/tags/微服务/index.html","c5b75706f8ecfd6c9ace07f8d069da93"],["/tags/抽象工厂/index.html","5de6cc6b8010000b3f0af39fc839b8ce"],["/tags/持续集成持续部署/index.html","b97c8ab8e44f706ece33d0ae22d8771b"],["/tags/搜索引擎/index.html","f9948c38fb7c202bb7f151e993f2fcc4"],["/tags/操作系统/index.html","b2d69fb08d5d5f38a529b295011c8d7c"],["/tags/数据库/index.html","069e41f7461ab66ae8fc062edbdb7822"],["/tags/数据库/page/2/index.html","a941bfcd84c07d3adac0259ae59577a5"],["/tags/数据库/page/3/index.html","eb01a172a632208ff42a63b9aad1d384"],["/tags/数据结构与算法/index.html","afa81f2d0d1f390374c7fb7245114b6c"],["/tags/数据结构与算法/page/2/index.html","aeab2edcd53ac6a2793e24cd25551284"],["/tags/文件操作/index.html","b223e7c67bb3a46f0d166a8e6aff7990"],["/tags/日志/index.html","a8600f8f122d7d3c36a8c078aa5a2224"],["/tags/服务器/index.html","62dbd94de3e194b7322c376546d56a02"],["/tags/权限认证/index.html","a0a45f67af074b13f2de6c55d914e2d1"],["/tags/桥接模式/index.html","73444ec3e69547cd2d7a6fb916c0d8f6"],["/tags/模板方法模式/index.html","5edf2be44d0896f2bbe7df6464807b29"],["/tags/死锁/index.html","6187aefe1b6e575025e6abb4e180f230"],["/tags/消息队列/index.html","9c8b157d3357124d9a8c6f9cdb636a28"],["/tags/版本控制/index.html","0462832dfedc04c92500f97c3a11abae"],["/tags/策略模式/index.html","523210741f90f293cf07c824fee29f0a"],["/tags/简单工厂/index.html","f735de618eedc771684241039b755bfb"],["/tags/算法/index.html","3f98bc60e00aed6e5fde5973ab9c2802"],["/tags/组件化/index.html","8f7eb986619d7fbfd5636726d5c66dc7"],["/tags/缓存/index.html","c608da0b61b578c991b9320895c405f9"],["/tags/缓存/page/2/index.html","4a5c10534862126cde7e26199063d673"],["/tags/缓存/page/3/index.html","0c108eae0db86386136cd05d93a9eb75"],["/tags/观察者模式/index.html","8a5b60a34209315e6d27c3d46599ffb9"],["/tags/计算机网络/index.html","559cae3f7212de082a52ac5519c7d645"],["/tags/设计模式/index.html","b065c4430f6057d9db3a1421ba1e945a"],["/tags/设计模式/page/2/index.html","ccb96f1ea6eccb256c05e00a16118b08"],["/tags/进程管理/index.html","976147d428f4a9426288bfb9a9da35e4"],["/tags/适配器模式/index.html","6b57e5f47d010426d88ce66c3722a015"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
