/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","19bebd4dff62434963ba299d4405e103"],["/2021/02/22/工具的使用/博客的搭建/index.html","29b657fdc666b4adb621eafdb9ec8763"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","744f3d981c164470842976ebc1da446d"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","ec1b4815f0bdeb635398d68878b7e6bc"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","c89468734786539e615eddceafb8f7bd"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","ebb4442a407663e5c92722976e7cd19d"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","0809086048de4297d3ca6ccada9b7a93"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","30710e5c96499a2160e36bae2e373b4d"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","b1d96348dbf24bf7c31a0c1234c23d41"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","89cfcd701257df27fcfe4cb022fbc479"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","b0153e00e95061cb07befa3552d04e5a"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","747e68e7e83c017228009c0294108c86"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","70a13400e248260fa7ea6f7bbdf428de"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","974efa007486d489f5ac4b65dfdae862"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","89084256bd0940e12e4541bc7a935360"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","3c30c72da3745b01bc0cc18c7b4216e3"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","7277969e10031738b485fa746eef9fb9"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","317eee506a23c09d89354482d8e951d0"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","4d70c92faf44d1658a13408f5018815d"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","a0f126dff8fc402aeb1d4e4e0a849074"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","6783bd47ea1b10c9e4f903bfc653a901"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","b782202b4ed0612e23d5bcbec7f7072e"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","81b189334eb2c29ed6b4327feac979f6"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","bfd850bf9ec0c6dc81f29d51d881da99"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","56895e09c150ec076bf66c0bb00f6b22"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","bdcee2d5f88d82575a8db1d31729d32e"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","d1d48d1b3251e75eeac4421ef5e70d0b"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","d5bd4a139038dffea6684e052ffb9aae"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","6f23eeb2d862816116c59dacb0001177"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","234acf3cacf2bb2730496df99604dc15"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","ebccfa47c0f1156e8e10c2c5020cd72c"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","cd0c2ed4ad5f39eeb898c7ef26d8dbcb"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","604980e132a4cc96610c25a6a53243b3"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","4325249cb449ec10416edc6021be297b"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","72e29cd5855e3c4bec4df535b2545b91"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","83c5d2482977f041bcf18522547cfc17"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","293697ac434ec10c73e8c136ce75975d"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","97dae4668b22a4bc0101624fe17224fe"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","242442e0484452576c19a6f1f0f333d1"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","c4fbff232c0b0585fd6b36dcf01cc4bf"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","634544c019c5e99c26720214283721c5"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","438e78f424f327aa3ded1a4b0fc5dc9b"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","14d6c3f903c7b8db501c0889ab5c4540"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","0bae3e097f94709c5fb2c976bce05698"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","f5b2727470b2d9dda53fb287acc02957"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","94148cf2689399054d4e01a3cced3f20"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","6285e51c1090beca22463b1df050c0fa"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","32863925183118a41e5d2e7832a3557c"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","afb63f6feb9870b37cb63bcd76a0fce3"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","98b8c14547a150f16b29fa02ff24e90a"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","d5b8880abe733f7251d2af3c773f43ac"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","fc24a5462efd4518624ac45732682557"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","1cbd85cdcbf523355f8c20695dc800d8"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","9720fc7a8a3ca86977ec1ef8a65a2253"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","68efd3cc75c421efedb1146f29e5d788"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","d6fa636746922d3ec2b2e032793e192a"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","d0f419dd644ef242dda3d797875439b8"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","2d7a137b8921a59b733b17421f55e6ca"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","606f720739b172c939766db0ebd87c05"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","d425e416dd14bbbdbceb9b55aa264593"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","3611733b7e98ad65ff6bd4c5325a01b1"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","77c194cb348c862b0321f75f70927150"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","6fbafb7a0d09829543293c5cbd9e58ee"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","f08395fda382138b43c9d4f4d699b38b"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","969f0355a5917d370c50740e925748b2"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","df0821cf68120883f814ceb273417975"],["/2022/08/17/前端/jQuery/index.html","ebce8fdf8b5fe5ff872ab575bda0f175"],["/2022/08/19/前端/JavaScript/index.html","14332b22411dbb8c96ddb60099fe96d4"],["/2022/08/22/前端/Ajax/index.html","ba08d47c88c06d45ddbd48d077f79145"],["/2022/08/23/前端/Promise/index.html","592777c76353169444131195bff6f3c6"],["/2022/08/24/前端/Axios/index.html","e691e9bc6a680916e060a9b4c0691534"],["/2022/08/25/前端/H5本地存储/index.html","c055642b245216cef223a0cb67e5952a"],["/2022/08/26/前端/mock/index.html","de4573e50ae97c32ca7d1e50ae5127bc"],["/2022/08/31/前端/vue/VueJs/index.html","30ab0ee0edf022b286d89dd753f94104"],["/2022/09/01/前端/vue/vue组件化/index.html","7f0498218d81edaadc62c156723a4ec4"],["/2022/09/04/前端/vue/VueCLI/index.html","954d2d2a6600bc712b57b7b38b16ed4a"],["/2022/09/07/前端/vue/vue实现动画/index.html","a0098745fe2b31a9dbe9b780857efdd6"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","40375f2c57b8151fb23a322cacf80262"],["/2022/09/10/前端/vue/Vue异步请求/index.html","de9ade4ffe5310b8748c05cdb4cc46d4"],["/2022/09/11/前端/vue/vue-Router/index.html","aec9973c4e70fc2a471a991a7bbc874b"],["/2022/09/13/前端/vue/Vuex/index.html","d41c6dcb0c525a9c768916506dec979f"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","63f707077b316a83c5865b4d2885b7ea"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","85d9463bc26ae2a64b9a7126b3e2898e"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","9e24ac3df6fab92f561a89ef87817d99"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","db42f7d63b502d1224d8d9c982e54585"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","d49a42e692bc47816fb4eb798b98ded5"],["/2022/09/28/DevOps/Linux/Linux/index.html","48613efc4e430495f374d01d24c43613"],["/2022/10/02/中间件/Redis/redis基础/index.html","4de95e9a7ec36ed4dfb4eabe8267907e"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","ec6378b052090596eea123a1ee47518e"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","986c631a9a6036555870d6fd23eee0b1"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","cc1c64732b4d9a761c9cc979cc0dde1f"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","6a2bb55e34c382a9033580606e76258b"],["/2022/10/17/中间件/Redis/Redis集群/index.html","7d199ac37832152937b14ae9b87fa01f"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","f202ee4db7969f5d36fd74c2ea9ac454"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","2356c1412f96e47d21bab1b0e8629d73"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","61373a02580df4188ee2264a300910f3"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","6aa490c58fe86df8aecdc8e1a6e25672"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","775250370d555ae967b77917784f3b91"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","eb18b2e9635fc8f5f2a5a2d99940cef3"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","cc9a51357c3cad18fdcdf54fa07a13c0"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","06bf07a6080a45b358e7bc7b4b841208"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","96519c312075366a845d1e8dbbdba633"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","5ae85edb0217d6c3c77903e366fd631a"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","609b5c4c0af2b1aaf016f9ec0a865b47"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","57055f21155912d85e903eeca01a5278"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","8e81866975f9734ba95160cc9ba8bbec"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","f2c5d26289804b23dda8bfb023fcdeb6"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","a5381999a154bb513126190af767542f"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","70077889d835ec34960b68198e3aec0c"],["/2023/03/10/DevOps/CICD/CICD/index.html","582780f92c5bd44f8bca9c47317bf10f"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","e1c8070f0781d4a8227dcca78444d130"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","a7ead47f2b152f75f97bef95737fa1e0"],["/2023/03/13/Java/NIO/NIO/index.html","d375b6b46190ff9471973464549e2017"],["/2023/03/14/中间件/Netty/Netty/index.html","dbe2967e6472242ed962c9c03dd613ad"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","08d5ecd7e3a803b766a955c0dd411b1e"],["/2023/03/17/系统设计/分布式系统认证/index.html","30db74ac9c8362dea3d902d8342001ea"],["/2023/03/19/Java/JVM/JVM概述/index.html","d4c6b8d158607fa6a18a9efded8a066b"],["/2023/03/23/Java/JVM/类的加载过程/index.html","ca2c4b8869720ec485a111e7a3c94e09"],["/2023/03/28/Java/JVM/对象的实例化/index.html","f374aec6bfb340e4d73977c6a8c33cac"],["/2023/04/01/Java/JVM/运行时数据区/index.html","f7839c0bd96e70dbdb679c6b47f73a55"],["/2023/04/04/Java/JVM/执行引擎/index.html","c5f44379ca3317f23cc394c0b4782007"],["/2023/04/06/Java/JVM/对象引用/index.html","50d2246b10ab2d0d717075ccecf073e0"],["/2023/04/09/Java/JVM/垃圾回收/index.html","c72054cf8ed85a6af577d5766d9d68cd"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","fd3a66dc74d70c798671b52afda597ee"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","859b3b51754a3eb871ede718bd8fc322"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","7e6a999c0945f9fc42775dce08b4cf89"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","3fb6c40f0cb0b02e0a6b9e0000ab6870"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","44eaf81b174bc8f6df0e75a8726ad270"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","f8c6aef68a1185d6aae7e45db6bcc749"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","448edca092474316c479a76b736d6ce4"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","7bad6441795db1ae2c69d0f03c2f3e1b"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","dbaff854b59ace67dadc363ba50f9aa7"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","43429912448cd5b3b55b20a89d9edbb9"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","9111323143515d8e7f1d35d0f7881916"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","3c802dca5f1273ca616148629cf150f5"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","1b8b4f73d2bc6efed743ba813ee2980c"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","93ee17e88e37fcfb79f82a0357e04475"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","8bd29cf9c222b63803d74bc96cdceea7"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","64b4776874be16d51490cc56e4aed3fe"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","48e0325096a8734444f645c5d26a07b7"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","ebb5e4b77981b55a82c2ff6fffc678fb"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","85c448db3f743a4b475542746660a531"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","4e55d1bb3c1c4f013ce81602e32569b6"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","0f2a0eef876f4cf2e4102c11e737a811"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","9df49bfdad01b44b2050db52d868c9cc"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","04413dcea153da09a66f871d3f55476c"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","4c9dc68758aa972dac0ccb34b835111d"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","86c25004d2756b7210616c98577881dc"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","9184f953b4bb5de0fd2dec130cd7eb06"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","ec73c4a8d5b2323547ed936f146e5cf8"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","e5aaf7d656162c2465702dd6b8e4bda7"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","2ccf303b5db73b2b57523ad9b2f18381"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","ac7dab4e59394f0f405e064abcb6a3c8"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","e0085747b3e55d5f9360eec0a968d7c3"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","ae457840ee66bd1b945cb6a9efdbfa5a"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","9602218916e4a6633b1cd5fb9377d04a"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","15601a23f45cfa887209401b21cd68ce"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","e297ab20073163e1d32d99a5eed0b3ff"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","b618daf7fa51f038f218b3855d911140"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","4524777b27510aa219e09e421891ebdc"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","1c949b5536dc0bda46a4f633c77545dc"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","09cb72e6c66d1f4da08e0ae8973c7346"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","c61138d33cf39e262abc73dfc4912212"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","174eb65febd87e0e43c853152e4f4e96"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","d55d748989d53779968b8a44dc6ad12a"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","77237bf909a35f623e747a0616049b56"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","063a2eba9efb642ec9e513a813135ef6"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","b6dd565b21e247575de6735d82a85dfb"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","6df80725220d759c76867a8b830912b2"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","313aeba3f4a9bad10d564cd44c7655b4"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","473758f4c96b2ed96361c89412b1a261"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","7c2a975b6a024c4c84705f60bb1ff22b"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","db11bc54845ef97e8b3ee46f3f43a965"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","58bde897e36981426d79624487d35c00"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","c556a3ddb52ae0d43628e93919741283"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","8bb46ffc0a75b9c1bba50db7d88d2386"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","01bbb603ee88ac482a1ca457761ef0e8"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","892b24f74dbbe26c4feb4fc6dde58ba2"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","17bf41fff35825b9e2c6d75439bfba96"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","ae114b2278f8bd6c103ef984dd3f6786"],["/2023/09/04/中间件/Redis/Redis事务/index.html","2641212a87058aaa0b79e442e4dedcc6"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","d8b679c02e3f77762ea216ad29aef4cf"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","fe5afbf917c7c1808145aebacdfc508a"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","e44f4ef2035ffc6ca9fd0c32f85c8ae1"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","49c03442fad558ed0a1982f6aba7fdd2"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","9992c27fc275f07b069bb9b7342ad239"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","5f24733da74cb1fedd4c9823add60653"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","a25116b84f97081178c9b58566801c0a"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","f769972b2d6af44bccc79236866fb79c"],["/2023/09/22/Java/NIO/零拷贝/index.html","685ad28aacf0e3f86c4a8865cb17088f"],["/2023/09/24/系统设计/JWT认证/index.html","41616ac072cb9f985beae26750e25ccc"],["/2023/09/26/Java/NIO/Reactor模式/index.html","810548683b592601fbcd8fa1de11c5ab"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","8f60bb50f7d28e520d453040965fb622"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","2a277a97810661a4da426b96272460a8"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","81fe5a0f340df5a1243ad85870a273a8"],["/2023/10/09/Java/并发编程/共享问题/index.html","c8a399164d4ff29bc341999ffde05025"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","4bfa7243e8311526dc0a67e2d65c4565"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","41207027894b710ae539f0a65bbeee8e"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","fb65a35a0562482bd1297546c18d9b3e"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","d97fbcf75f1be9c9eaa029493eca4546"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","c74cfe9f4829c730c4b7e347db902603"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","2bb0f7d08b26e45da27c7279cb255395"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","ad8dbbaec0482345343183cad42441bf"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","9d72c28c9681bf90f96478068d66a7e8"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","4115bd79eb094b88b1a998239e2dc1d1"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","1f06e5fe9480fed57dff453d7376e843"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","2783ef6c921cc3b7b617df820580947f"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","3cfde6ebc00e5adc17871e1f3916defe"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","4588f420916c15f91ec935847f9e176c"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","d59726106d220f748bad641c471b6bc1"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","2c32f7ae6df2598573855b3056c33f78"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","b1c01b1d4766f7e6a5cffb22ab0327a8"],["/2023/12/05/系统设计/开源协议/index.html","3b8373c3172b60b123e1941a74fd8d0d"],["/2023/12/09/MockMvc/index.html","f9196751bc2f7bb4efec14a13695b997"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","b0e71d7530ffa8bdea6fd711e1ba2da8"],["/2023/12/19/MySQL读写分离/index.html","f5ab3207c4265bfeae88acd3f9a04777"],["/2023/12/22/MySQL分库分表/index.html","c3b1b1f44f0bf0533f24c555aa63dcbd"],["/2023/12/27/利用NoSQL优化数据库/index.html","123900d3ced0eb2c979ce4cc7176cccb"],["/2024/01/06/缓存概述/index.html","81d2d866e83c8ec031929bb8b70cf904"],["/2024/01/11/缓存的读写策略/index.html","ebdee67ae6c5c62886a2cc2d04225d5b"],["/2024/01/14/CDN静态资源加速/index.html","3e4dc9b3c561e26ac1513cf280202656"],["/2024/01/18/消息队列延迟问题/index.html","7cb8879e6b342d19b1c34dd9be485fb4"],["/2024/01/22/高并发系统分布式服务方案/index.html","2af3c4dbac16bf01fa5c85ea48241017"],["/2024/01/26/dubbo/index.html","e2b28d802f65e44008e2d4739f5ce1f6"],["/2024/01/30/微服务基础/index.html","2b9d200e1e56db2a778f998fd96a9598"],["/2024/02/02/监控微服务调用/index.html","fbe9b22e4aea81cc35f321eafb92cc97"],["/2024/02/13/微服务治理的手段/index.html","3cfbf86c4a66b531b31077d4473e1b65"],["/2024/02/18/微服务治理的手段-二/index.html","85efa42c0e2aa70540587b697a712243"],["/404.html","a452544ccb33dda2c0fbc5b7c6bb098f"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","cd2e563025fe4c33d0506b4ed045e84c"],["/archives/2021/02/index.html","0e6c587e690c62ca77e978e4a2497bd0"],["/archives/2021/03/index.html","ff07bc639e557101af0c123e2a62f4b6"],["/archives/2021/03/page/2/index.html","3e4065147517b21d6fe0260d8f1ea830"],["/archives/2021/03/page/3/index.html","eaf1509eeb3cc9b4c3faa1e27aa3813c"],["/archives/2021/04/index.html","1ffe03b3d9922b98924901c0ac0066c2"],["/archives/2021/04/page/2/index.html","8995fcaddd1ecf441a8800352157d8b8"],["/archives/2021/05/index.html","aa96581359f640913d62677cb236cdcc"],["/archives/2021/index.html","a893c225222e5bf33df31160462ad50e"],["/archives/2021/page/2/index.html","3c9866daaa6fc779c9958876477906fa"],["/archives/2021/page/3/index.html","ccd805bbc4037a9c0809962f92808f52"],["/archives/2021/page/4/index.html","b62695684936dd50a26252ec95d2ea0d"],["/archives/2021/page/5/index.html","df7e58cd41797d803b5380c3a1bc9fa3"],["/archives/2021/page/6/index.html","af6d0f865156f31e25928f52b2650cc9"],["/archives/2021/page/7/index.html","49f2999b8b77cfabdef7ed339f55b7da"],["/archives/2022/01/index.html","ff8896e80b5a877cda9df72fa1927429"],["/archives/2022/04/index.html","4db194efece350ba21a6ae2566644008"],["/archives/2022/08/index.html","6c08d7afda3c5e8d9b054cd37af6aaa2"],["/archives/2022/09/index.html","8fb8402029d337235154e9780c42adf9"],["/archives/2022/09/page/2/index.html","3c7cacbdd41de4ef38f9e5d11a140137"],["/archives/2022/10/index.html","0e2513458276f85b66d0563621070e5f"],["/archives/2022/11/index.html","dec3fa0de3d28988d3572e9fc0bd25c8"],["/archives/2022/12/index.html","51b324f91844f7baf55b36587ea02458"],["/archives/2022/index.html","b9f47a95e864ac33de0a8d93c3f4923a"],["/archives/2022/page/2/index.html","febee0cc5637f560ac9b3dda53e0ca75"],["/archives/2022/page/3/index.html","772f1ddb7b1b8bdc8bf14ced98d2e935"],["/archives/2022/page/4/index.html","e7dcff5c194378f422c7eb3842bbecbf"],["/archives/2022/page/5/index.html","be7092a1b4dbec7598956dd9b7581c29"],["/archives/2023/01/index.html","de122c0eb201eac61456d86e7b95e7bf"],["/archives/2023/02/index.html","ade27e8b6304434d9ba2817c13a8c990"],["/archives/2023/03/index.html","3ff0c1815783ffe6128eae0d5a4d6028"],["/archives/2023/04/index.html","bd19be2b4505ef65c932d19413faa843"],["/archives/2023/04/page/2/index.html","b1a655f31aef3180cde23627d7f6fd93"],["/archives/2023/05/index.html","48534cbe4f2d632f45d416fac393c349"],["/archives/2023/06/index.html","ef477c7803a9cd5869e29043e96b1bdf"],["/archives/2023/06/page/2/index.html","60a279ad2fa42d8bce50930e39bbf88f"],["/archives/2023/07/index.html","e38785b829067eed116bb0dee149443d"],["/archives/2023/07/page/2/index.html","bdbb70d4396d32468e228cf12dd1dc8f"],["/archives/2023/08/index.html","882966c89654e594f94ff44c29426a0d"],["/archives/2023/08/page/2/index.html","de231995a93e7d4490a7c0cf81d6d546"],["/archives/2023/09/index.html","656b7b076a97230ccdb8aec9d3fe43d8"],["/archives/2023/09/page/2/index.html","94e8b2ff4ae90e345ba6a38cb817b210"],["/archives/2023/10/index.html","93cd8b648eae689c8d95f42a64916697"],["/archives/2023/11/index.html","b343abb29094978ea7decb31193ae470"],["/archives/2023/12/index.html","0916a4c2e96799d13d6d04e77e2d4eff"],["/archives/2023/index.html","52901f94705baff437fdca9b441440c2"],["/archives/2023/page/10/index.html","572f4174eecbeeb72227ff3a52f4cc11"],["/archives/2023/page/11/index.html","f2aabc4d3586a581165a758e8f304be3"],["/archives/2023/page/12/index.html","5392cf857b1a96bb901f46e7566cac91"],["/archives/2023/page/2/index.html","b883fd900ceb7900bd67813018894466"],["/archives/2023/page/3/index.html","3072addfb7cafd4d653e473652992181"],["/archives/2023/page/4/index.html","d240a14e33fc85a59d25a325478c65cc"],["/archives/2023/page/5/index.html","c472849c326e6e3ba53b25bcdeec0a4e"],["/archives/2023/page/6/index.html","a62957521094a739d92d855a39aa1283"],["/archives/2023/page/7/index.html","4b47e31585cfff7c31afe0c7e6fc0bf1"],["/archives/2023/page/8/index.html","65b751bb525a3020a949cb8dad67efa7"],["/archives/2023/page/9/index.html","76ecd542f1e2990758fa7b618339e3ba"],["/archives/2024/01/index.html","9b785faeb46af9dd226383e88794751b"],["/archives/2024/02/index.html","bd1f45add1cb2d123327d9e9f0fe68e2"],["/archives/2024/index.html","ad2281c2f731285e7e5b81f83122cecc"],["/archives/index.html","ce6d887b30ce84394d6be484d4c64fff"],["/archives/page/10/index.html","302caedd6a7499657a562ab34b6482b3"],["/archives/page/11/index.html","be0dd25e190a9720ffe360ffdaac9b5c"],["/archives/page/12/index.html","b72000466a1a1b0ca085c9b2b6d8acbc"],["/archives/page/13/index.html","bfb5b8f73b6950775de2ce45cdbe7c33"],["/archives/page/14/index.html","bce96e1968d7daa402d6940643795323"],["/archives/page/15/index.html","14eb8dbdfd7567396bda6e721e80f6b5"],["/archives/page/16/index.html","2ea7f2ecde1bf74323e1fb7545fea439"],["/archives/page/17/index.html","19e77adf075d3cdc48ae84a299181be2"],["/archives/page/18/index.html","aa9cac952cfa01f6df9b335afef4ccf4"],["/archives/page/19/index.html","97c9700027dcbc8b941fa6cffab0f7ce"],["/archives/page/2/index.html","05fa7f445529c9ff7eed1bf9d77cec0a"],["/archives/page/20/index.html","701d55732971f41b6da1653788af6bbb"],["/archives/page/21/index.html","550c547a8c992ab1a9d8e350c5dcbd21"],["/archives/page/22/index.html","a5f966619a09cad17c481f36bc8ff8f0"],["/archives/page/23/index.html","7caf7e0b61bb75cb3831cd55446de690"],["/archives/page/3/index.html","3bd7c67db5d37323267d556b492678b0"],["/archives/page/4/index.html","59a4d658a424c3d7a3eb9d89ea32d5f1"],["/archives/page/5/index.html","9d81bd60492de174629bf1c02d628013"],["/archives/page/6/index.html","c7fbaf37d5f229ab10e3fac5957f75de"],["/archives/page/7/index.html","150839e32e6a1b1ba380ab82bc57c820"],["/archives/page/8/index.html","85f7e08b110197cda72ba8a743b97d76"],["/archives/page/9/index.html","76faad88269f9d4a9bc05af696d2bfe4"],["/categories/Devops/CICD/index.html","df67e08f5ceee05139bccd633b6d5f97"],["/categories/Devops/Linux/index.html","e4675f58ee3cf087b04b540d60932f3c"],["/categories/Devops/index.html","b01d2f75fbba9af768ced25ac0332c57"],["/categories/Java/JVM/index.html","117583335fb7284e0fe2ad463a9e94aa"],["/categories/Java/Java基础/index.html","a4ff2c44e22c20188c48e10ef45589f1"],["/categories/Java/NIO/index.html","c7070f3a0cc61a2109a28159620663a8"],["/categories/Java/NIO/原生NIO/index.html","5c361df71fdc13c9c3eab5d73c628b02"],["/categories/Java/NIO/文件操作工具类/index.html","21fbee8f975e0c4559201bd10b8182eb"],["/categories/Java/index.html","f67e36436dd703b14474735bcde04cd6"],["/categories/Java/page/2/index.html","b8ccf37991701d016ccd6730862ddf4e"],["/categories/Java/并发编程/index.html","f081570f01a1b1264b26c07f493e300c"],["/categories/Spring全家桶/Spring-Security/index.html","e98d8e6789aeca1f5d70f806a41fc608"],["/categories/Spring全家桶/Spring/index.html","9f24eae0202cc4596163507cfbaa5154"],["/categories/Spring全家桶/SpringBoot/index.html","f26f6dfce8ad51a4512d9e78340d7afb"],["/categories/Spring全家桶/SpringCloud/index.html","d45f2db0ba13c7396e66c8e46d589e51"],["/categories/Spring全家桶/SpringMVC/index.html","9c661238ebb1b0b6d1d38ce62a63489e"],["/categories/Spring全家桶/index.html","f023dfab79422de10f7d216e1efe1de2"],["/categories/Spring全家桶/page/2/index.html","94803c63b8a4c28ff1961f027396d755"],["/categories/index.html","433adb810a39fa30ec1f7297187a592c"],["/categories/中间件/Dubbo/index.html","cfad9d06954df87b1e7f2fa369dea2e5"],["/categories/中间件/ElasticSearch/index.html","bcc9fcb4e4a4e8a378ae5f5b8e15da20"],["/categories/中间件/Netty/index.html","b0cf1b58b478168a9f31a0d0467f13bb"],["/categories/中间件/Redis/index.html","ac8a849f178b92ec029188083dbb15ca"],["/categories/中间件/Redis/page/2/index.html","261126815acf1144b87a991b2de32e2e"],["/categories/中间件/Redis/page/3/index.html","bf7bbbf4c81228089cde82acd5b77320"],["/categories/中间件/index.html","fa04b371c85f70e37cfb4438a3f89133"],["/categories/中间件/page/2/index.html","e8f8460c41c4dff94d1225182fcac34d"],["/categories/中间件/page/3/index.html","2a9990360abb32ef6f64866a142a929c"],["/categories/中间件/page/4/index.html","1953298a965322f3e3f4358bd712a45a"],["/categories/中间件/消息队列/RabbitMQ/index.html","58c2942fb02a5096b29086567a926b15"],["/categories/中间件/消息队列/index.html","5fd1ee8fb8b33c1bcb1f4e61cff19b52"],["/categories/前端/Mock/index.html","8b81b7414820a61c4c4bc6a12fbf0df0"],["/categories/前端/Promise/index.html","0bab74b0129735e8aa65e90feced229a"],["/categories/前端/Vue/index.html","be27d6a6e15cdc13a138b600c962e923"],["/categories/前端/index.html","6431a6565d96b84cbe1a8cd928d7c39d"],["/categories/前端/jQuery/index.html","53ec78e638defcd62f62246d963ce47b"],["/categories/前端/page/2/index.html","3d059bc9cfe4af3d0f281e9e145e1809"],["/categories/前端/原生基础/index.html","73b9e2363d9b98a0d8cde235ad1d7c1a"],["/categories/前端/异步通信/index.html","9a9e9bad4c74fa28c97974ec08b06578"],["/categories/工具使用/Git/index.html","fd9f5b6dff8ef985847fbfd19fac6b98"],["/categories/工具使用/index.html","521a9c0c1940792c67db11b9661d2261"],["/categories/工具使用/markdown/index.html","3eaaaef15d71bffdac89e9cca7806719"],["/categories/工具的使用/Docker/index.html","0a5441e93eb9ce6609ec4aad9a91e2cb"],["/categories/工具的使用/Nginx/index.html","0715ac649277fee2952a071ad6d9311b"],["/categories/工具的使用/Swagger/index.html","2eacbba2d18c0249131d8c563a65321b"],["/categories/工具的使用/index.html","3fe3aac17cbcfb02a15e4db73a92e5c9"],["/categories/工具的使用/博客搭建/index.html","1625e2e5cdd6d1ab3f7ba9a87368f431"],["/categories/数据库/MongoDB/index.html","24b7fbff7fe2c0da673cd6762614709e"],["/categories/数据库/MySQL/index.html","5d4af9d3f6b9624ec4a7f48e5731a6c9"],["/categories/数据库/MySQL/page/2/index.html","f8941c616cc75e35be6dcdee506681fc"],["/categories/数据库/MySQL/page/3/index.html","1ac61253d1b9849d09ffa6b956d7704a"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","66b3e11438f1c0eecef2b0b50d308bbf"],["/categories/数据库/ORM持久层框架/index.html","462d5d17343c67f8d681828719677b38"],["/categories/数据库/index.html","0d373cf551cd4e292151ed372bbd5da1"],["/categories/数据库/page/2/index.html","3522a3630be8fddcc19a00fc666681d4"],["/categories/数据库/page/3/index.html","34508d894e0bf55cb6e0c0e06b70e3b1"],["/categories/系统设计/DDD领域模型/index.html","de42f6154ee87619f710156f446b864d"],["/categories/系统设计/index.html","325885fb7d1b4516cb794b0a71e458ce"],["/categories/系统设计/page/2/index.html","8feba8c212c742e5ea97d51f3bd2d6f8"],["/categories/系统设计/page/3/index.html","0dc8ec0a98aa83e0a218f9cb1e4f5b01"],["/categories/系统设计/page/4/index.html","fd5b78274d254eb2635df9a49825c6b8"],["/categories/系统设计/page/5/index.html","054d3aa52f825d35b332d849b5c9fe3c"],["/categories/系统设计/分布式权限认证/index.html","267d5bd24e53895f61d35d824c9489ac"],["/categories/系统设计/分布式系统/index.html","afc35d75c1021ab7d8aab75add3de854"],["/categories/系统设计/分布式系统/page/2/index.html","1f26725fe80609b4135497f5f92b5185"],["/categories/系统设计/分布式系统/page/3/index.html","50ce81ba8ac9da9847ceb9112f269c84"],["/categories/系统设计/微服务/index.html","555726350321b08061958db162a6f97d"],["/categories/系统设计/数据库优化/index.html","b5de0b884b33c778a47d65d7d9e326f6"],["/categories/系统设计/设计模式/index.html","7d9fb270c22afefc6d0287f7b46fe847"],["/categories/系统设计/设计模式/page/2/index.html","954bdd6c2e677ef62c0a242c191f0acc"],["/categories/计算机基础/index.html","026d5c2157fb8f14f327bb28834255df"],["/categories/计算机基础/page/2/index.html","a92f17d9d6e497d95470f915f4e37388"],["/categories/计算机基础/page/3/index.html","082ad1f39bebabecb631510ad3b50fcf"],["/categories/计算机基础/page/4/index.html","fd90ecb14fcc7f441fe910aadffd92f8"],["/categories/计算机基础/page/5/index.html","7a1fdf1727ad7ef228bfcc52300e4b8b"],["/categories/计算机基础/page/6/index.html","42b6b6f80b0146d2abd8379e59ed0558"],["/categories/计算机基础/操作系统/index.html","d6c38a9dab32b1c599cb448c0b6e9cff"],["/categories/计算机基础/数据结构与算法/index.html","878c57252f94c4dee91121c2ac7ab474"],["/categories/计算机基础/数据结构与算法/page/2/index.html","d13849407f1190fbc634111432eb794b"],["/categories/计算机基础/数据结构与算法/page/3/index.html","e3df947f60138333f39338bf117e7a3d"],["/categories/计算机基础/数据结构与算法/page/4/index.html","f5f99823240900d70358fc91c55bafe2"],["/categories/计算机基础/数据结构与算法/page/5/index.html","078d859d8ad74781a64e4a3d181baf84"],["/categories/计算机基础/计算机网络/index.html","7f9850c3d58177ce6d765229e7304ed4"],["/css/index.css","2af5ea34362e0b34f799106b2659ad50"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","8a1de67efb5d6abacb6e0b5911a20e00"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","3c6d07274692ae1b23e7d58e0eed9a45"],["/messageboard/index.html","8b42614f692e21a57a0acb3374b4898b"],["/page/10/index.html","378b0e495f49d24febf3f27c45ef73e7"],["/page/11/index.html","5f2aa3dafddcece2603ff636fdd92812"],["/page/12/index.html","42d6208a9e87a2b6baee2c021536f11d"],["/page/13/index.html","858f7983c4762f2f9f7dcf8a054d4df1"],["/page/14/index.html","ad5b415bac9c4ef9fc8e098ea2819f16"],["/page/15/index.html","246f22aedc76e152c7fc4cc753b4442d"],["/page/16/index.html","efdb540838bb1fc0d6ff5198fd2cdcc6"],["/page/17/index.html","7679ce16534b4206c06b7c4e5bbaafeb"],["/page/18/index.html","ce947813fc39bec944b34c6b52a0a49c"],["/page/19/index.html","63c1b2a724fed9d08fbec2496a4cba9e"],["/page/2/index.html","14a871517e55f6e32a08bd6f5fa45eb5"],["/page/20/index.html","513bafc9c3328d2d1b4b205740b1b3f2"],["/page/21/index.html","7fa3d77cd8e0334402c5891c8ff8da50"],["/page/22/index.html","dba23b64476111753d952d71fbe08f1d"],["/page/23/index.html","5b85865787153a08bb2f1a95d404146b"],["/page/3/index.html","1db5e22e2bcdb9225c14208f80c3f37e"],["/page/4/index.html","516ba42d5095e040e76119ab3b230602"],["/page/5/index.html","18cb103bb4130d45aafdc39daae52d6f"],["/page/6/index.html","0a8242f8c6c33743799ef7952671d99b"],["/page/7/index.html","64237bd8ab0b2a6bfcb1bf3ae141be94"],["/page/8/index.html","b774d4460a8b9e6e001f8b3c1402e4e5"],["/page/9/index.html","672bd9b7ae040a6709add88e35451b02"],["/sw-register.js","415245f5f49744ab4f90c4d9bb63b31f"],["/tags/Ajax/index.html","ff2d3467ec7d083cc03f070f8d8ea007"],["/tags/Axios/index.html","c340b16173666cfb612fcd8cbd052188"],["/tags/BASE理论/index.html","2621da24e6dc21665d8388b261d55998"],["/tags/CAP定理/index.html","852048a55af7816dbd8c96236f20108a"],["/tags/CICD/index.html","ba902ff20905ed74631482460b4870f9"],["/tags/DDD领域模型/index.html","e7a1e4bfefb55c54d617a054ebba50f3"],["/tags/Docker/index.html","0102d5e94ceafae72256fc58cc325e92"],["/tags/Dubbo/index.html","260ca056e8638d49d776d6b55bcfe2a9"],["/tags/ELK/index.html","31f811fb6fff21b957e7df02c63eab48"],["/tags/ElasticSearch/index.html","d31227fc5735b28a18d2f34d08fe2639"],["/tags/Git/index.html","77c419410b1eb9bb26b79117ca04a878"],["/tags/H5/index.html","946a12f2a56d85af4ae4c5d4b950c80a"],["/tags/JVM/index.html","0b38ad479713e04e4286249218c43c04"],["/tags/JVM内存模型/index.html","02b927e8fc63eaee39ad8f855197cc70"],["/tags/JVM执行引擎/index.html","03882612981fecda66ec25a74578cacf"],["/tags/JavaScript/index.html","e26bbfae6145093a9dc8cd6a41811f75"],["/tags/Java内存模型/index.html","b33216cf11f1ba4c363a123a26b7ddcb"],["/tags/Java进程线程/index.html","2aa58220e4cf9f1089bd66a571431435"],["/tags/Kibana/index.html","558de4fa92d862d91afe73ccec1d80ca"],["/tags/LeetCode/index.html","2b5cc5b9572b241f8d82e1d079c4dcf5"],["/tags/LeetCode/page/2/index.html","a2f9b3f1c958f68870aaebb61d02b3f3"],["/tags/LeetCode/page/3/index.html","5ebd2271525c52145e141cb31d02a51f"],["/tags/Linux/index.html","b91aa0c999a2d2a8c2b18c4b78d57e53"],["/tags/Logstash/index.html","3ddceecddf9f7af7abca8de8b3c66600"],["/tags/Mock/index.html","82aa6e253381a9d8c159dd1e14df96d9"],["/tags/MockMvc/index.html","4eb691095578c352949a4ac7e45e7fa4"],["/tags/MongoDB/index.html","b20df1ae84a005d3b1dddfc84f973e5d"],["/tags/MySQL-事务/index.html","de728cecb70b2e971274eaaf29d7d122"],["/tags/MySQL-数据类型/index.html","edaddcbf0a54523dda5eda10448051fa"],["/tags/MySQL-日志/index.html","19c71346b46559dff34c05faa8550b82"],["/tags/MySQL-索引/index.html","10bdb71d8169752fc9b396bb4e5765f6"],["/tags/MySQL-锁/index.html","f8da5e43bed9844ca58c38f9e9c82ea6"],["/tags/MySQL/index.html","08d8d0fb91360964a50a315715ec0432"],["/tags/MySQL/page/2/index.html","3eea3876460aae53e8d692cad147dba7"],["/tags/MySQL分库分表/index.html","946de47c0573d6ef384f171b14db4971"],["/tags/MySQL读写分离/index.html","040147dd7d56b57a2011f8a77e456030"],["/tags/Mybatis/index.html","ea3ec8459742a95d68cd44791bb7f800"],["/tags/MybatisPlus/index.html","4c77835e8bec869d21131219574c79a6"],["/tags/NIO/index.html","227244d23f00be58ae5c16711d09dd5f"],["/tags/Netty/index.html","6b7897f153ce2b616ca72b0a1c2c6462"],["/tags/Nginx/index.html","88b57bdb6a4fb247f844baf667e9f89b"],["/tags/NoSQL/index.html","6f7cb2e049b5349fd3a57d71559defc2"],["/tags/Promise/index.html","b80f9b745257f1515f3bc18109e5f745"],["/tags/RabbitMQ/index.html","c6b81cd71696dfbe17bf89deb5947c2f"],["/tags/Redis/index.html","a6410d622d75eb347ad6386bf26e5c2c"],["/tags/Redis/page/2/index.html","453a7036a05142f281b4330466aaec36"],["/tags/Redis/page/3/index.html","dfc2ea9a3065f98bf070f434160f8d11"],["/tags/SSM/index.html","ffa1aa1fe520ca4c09db9be5d97f2671"],["/tags/Spring-Security/index.html","ae7507b85881dcdcaf4c6d3c4d9b24c4"],["/tags/Spring/index.html","17eb7cdbf9e49d2f42ecf89a9176162f"],["/tags/SpringBoot/index.html","2ebf117a0552bd62ea92fe6440ca4767"],["/tags/SpringCloud/index.html","ef10836386c09be44b6c89564f539287"],["/tags/SpringMVC/index.html","c4cd33acddaa86f8d390abec2377dbe8"],["/tags/Swagger/index.html","326fcf05ab9b8998b6424870572ac060"],["/tags/hexo/index.html","71c0e77aeaca193196d7e7118292cf28"],["/tags/index.html","d0a7aa27041a9db3551ede1b18fbfc4b"],["/tags/jQuery/index.html","87311bb9277b8e8415cd461a98865d6a"],["/tags/java/index.html","62c5e9c57b5115306c5ef391b08df058"],["/tags/markdown/index.html","9f688a6e4228fac9c6cc663fc3dd07a4"],["/tags/rpc框架/index.html","fdf46c481c661d870bd8e862928a8f23"],["/tags/typora/index.html","89f3c2ad0a01fe803dc579a8ba4afb67"],["/tags/vue/index.html","7787765fe918651e5ef7c7e8014d80d0"],["/tags/享元模式/index.html","67620a608718d1ec8ebe740a44839989"],["/tags/代理模式/index.html","b3108f365e2d99ab114382bdb3ecf5cb"],["/tags/内存管理/index.html","ad8ac1916133671347cdf92fe15c3180"],["/tags/分布式/index.html","70aead013ada0a4f326f1d8b531a5b4a"],["/tags/分布式一致性算法/index.html","1343b2f68305ce494698197a35b054cf"],["/tags/分布式系统/index.html","d065df205c6990687690538b6080d0e0"],["/tags/分布式系统/page/2/index.html","eb62f87c8340415f53b72fb288811485"],["/tags/分布式系统/page/3/index.html","0e0bdb103174fa0ecbd7579b68d589d7"],["/tags/前端/index.html","cf6784615ec42a95939362a0adcc2b44"],["/tags/前端/page/2/index.html","fc012ab6ea468863b26a429e646626cb"],["/tags/动态通知/index.html","7caf52b734f07e74fe34c5a70d8cc3d4"],["/tags/博客/index.html","cbc9519a050e13625c0102067b8ecf48"],["/tags/后端/index.html","b695100f530997cc32cbad1adcb53d35"],["/tags/外观模式/index.html","295e6951af822dc3171450a169e2847d"],["/tags/多级缓存架构/index.html","d03678bcbfb25fb0a1b6590ceae470e9"],["/tags/多线程设计模式/index.html","0e06a2c578cc5b43507f8f7a8d82fb40"],["/tags/容器技术/index.html","669a7fe40c0b76032b42a936bc14d2ac"],["/tags/工厂方法/index.html","06045180fbe3f9613eba41d5afc51556"],["/tags/开源协议/index.html","b7923282d7b662eea62eff68b035b19a"],["/tags/异构同步/index.html","fadd77ca555267735a329b0c67fa3dab"],["/tags/微服务/index.html","d5f851621a0295da56b0b1b89f2014fb"],["/tags/微服务基础/index.html","b1a8e7200313d3f7661c60f29648dd5a"],["/tags/抽象工厂/index.html","b97ec1b22ac025dde0e23a141191b95a"],["/tags/持续集成持续部署/index.html","88d1cc0bfaadf92cc6a4342b7da34fd7"],["/tags/接口幂等性/index.html","d14c6e8afaa13bd27d69ad5a35c00381"],["/tags/搜索引擎/index.html","fd70644c4dd28a5e6e3412086c0317ab"],["/tags/操作系统/index.html","1f4f23914f84f1854b60f9ee49a3c7ac"],["/tags/数据库/index.html","3cc40b745bc7e3744f4a9a78ae4208dc"],["/tags/数据库/page/2/index.html","c5de3d86e935a357af05fd05b6ea5899"],["/tags/数据库/page/3/index.html","c3ee7757bfe6d257311876f70dada74d"],["/tags/数据结构与算法/index.html","ebf360a680d8bf8cdc06c56eb0833482"],["/tags/数据结构与算法/page/2/index.html","fcc7e73c33ddff90c14d0cc85f5a4d0d"],["/tags/文件操作/index.html","8417eee93f71f8e3154a56cc425cd95e"],["/tags/日志/index.html","33468b79cfc71fcc691f0a40255597c8"],["/tags/服务器/index.html","b0fbceaf8d54e523bff8da0649082808"],["/tags/服务治理/index.html","84e973e83a8afe1a34a8ab44735d2e90"],["/tags/权限认证/index.html","a60c7e731cb3cbee4600f531b7072de7"],["/tags/架构分层/index.html","450761bc36da340b637948262a7e1ee9"],["/tags/桥接模式/index.html","a4939d93905e16af03cff84ccfbe9b89"],["/tags/模板方法模式/index.html","8dace6034f395fd38c2be5f3e658e95c"],["/tags/死锁/index.html","2986c88edb961658179f9b63090f01ae"],["/tags/池化技术/index.html","cec14397588515b7899c2e49eebc4698"],["/tags/消息队列/index.html","577d95515deb1e2ccc4b33f8415c99aa"],["/tags/版本控制/index.html","ed22c4c431fbf08c7b8d5c0187ccbe38"],["/tags/监控微服务调用/index.html","7e3f526b4db5c93a8d2a8a6cfd76cf91"],["/tags/策略模式/index.html","a7128e22a728c1d9b4a8f0b709d1cfe0"],["/tags/简单工厂/index.html","aec8c075b7289fd26b2d5f2dff5c1ef5"],["/tags/算法/index.html","c5a7f767cc03d94bc7b83c6b2845fec3"],["/tags/线程活跃性问题/index.html","dc733872144d8f413aad08d7b6b5144f"],["/tags/组件化/index.html","90b5a1cbf501bba21110eee4165715aa"],["/tags/经典限流算法/index.html","cf10998353979d042068367b16e3cd00"],["/tags/缓存/index.html","dc0929cad167ccbb0f712566764d5e6f"],["/tags/缓存/page/2/index.html","18c4e5736fb675e2ca29e25fd1dfbf18"],["/tags/缓存/page/3/index.html","ffd1cace7a17915bd2af30fda81e3bf5"],["/tags/观察者模式/index.html","4415d9073996de70d1fa4aa3f5f2ec74"],["/tags/计算机网络/index.html","0455392c8792f730cab352c7dcd481e6"],["/tags/设计模式/index.html","c58f5f7d7fe3d0feea04b98a3ac9d648"],["/tags/设计模式/page/2/index.html","96ed3b8d7cdd9ec9558a74eabbce5163"],["/tags/设计目标/index.html","080d70e656db65a59837390cb6a98105"],["/tags/资源共享问题/index.html","49aca4e6954b1599ab988b34749bc5f9"],["/tags/进程管理/index.html","73944fcd2e0c297d33ea31658b26b0f3"],["/tags/适配器模式/index.html","56de894833a9c28b1e3e46aa41a4eb71"],["/tags/通用设计方法/index.html","a209105c676a087625872ce77111e0d5"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
