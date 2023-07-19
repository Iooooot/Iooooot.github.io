/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","45c50a569f16ca7d621c31ed8854f562"],["/2021/02/22/工具的使用/博客的搭建/index.html","1ad442a7260c82b4646486c9841749ef"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","14c4ebc79d2c708491b7499be1c5be73"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","684763dc32f2aafde1133d2061716591"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","d3fe6159b1a9d7f99d0ce029b3241d57"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","6ef6d59c1c83fb44ae01e592544f221a"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","d8146c6a6b40ba94bfd3b22d5a7b864d"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","1fb8e840303e381ef800c0e571f30864"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","a312f66ea7484fd095ba5d0c022a1836"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","77690d0f4ebd592f2fae2425c76a1362"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","9a1b9cf695770f52ecdb4e30627a1f4e"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","05c9dac4a8242644404219dc038df9a8"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","25c4151cfb48d69bc99cea05b227fddc"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","d153e3d6fd9b9451936fe8fcce19fea5"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","81af16976838c5cc924ef5212dd1cc0d"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","c5ea286bda7f3f48e2d761da5b869aaa"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","9727bff7dcdadfe0ef08c5726689f111"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","d362c3f6cf79631fa8b7f118a86e03fc"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","c6c8b5c0f04ef11ced8bbe9ffba72d51"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","2b203ef006ae58a1c21a3d4da46f4fc2"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","2bf617f3b2f27279b5629441c4f26659"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","da817d0e5d0f3281fba1f60698a89cdc"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","0bb9e3f4a479728cb432bd1113aa5596"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","185350b7f4a2ec10630ff2950576f227"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","e194aa1650b45ec6627be1afd7789d87"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","8b629ae0d697f38a7f1ad5cec5544fdf"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","bc73d09d98ab4002df03fffc05807f4b"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","4bc81192c739da72d92c444ce200e3fc"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","7d5d5f3794184a8dac2c50648f1a68e1"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","a10467588036ae75e565db14b241211a"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","a9378b17fea2a3e52693d155e52f2b64"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","07319972c0e2f769d23c51bbc719b0de"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","177534e48379d0bbf3067fb6b7eef9ea"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","57e3ef089541c2a8494cebadc5fba4b0"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","27463113f80ce9ab27817b5ad3070aed"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","aa5d9426de57471da5e4e70354f21b7b"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","fa57ef6c23649a33c84fac8fd8727da6"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","3690e097d9e30dd80f808d160f42d4fe"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","54efbc78964c359c7060dbecdb114476"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","374a15775c9549b1e0832e0f371aacf7"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","3c5155ec2a61bd31c502c418e5495e5c"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","067d638cf18697d8fb110b19ee1a5eb6"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","c017ce8d9f2a77ac4b3dfd3039a2c5aa"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","621fba0af8cfdc0009e5e3d7118c617e"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","b36f2c27518780a8a963ce8ee88a5a96"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","15b7acf5d4be3d723322bc580ff63e10"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","05495103638ba4d6afd65ecc60db1ac9"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","0d0fa81ee5346077619693e3b67a8292"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","dc19b7881628d968af2b9f4e216e4b9b"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","b74f183ca14b8be14911821f2301eaee"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","9de1b811922d8f7b5b991e692073e822"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","99607b890caed8512e0a638465a03e47"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","54aa9c6006feb1f6648705f151ed5b48"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","b4e83779e89b3e9ec8ceea4d67c81f4c"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","0ee60e8d4e017705e697c586ccab99f9"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","6d320ede25ce1d790d5bd45eb185eeaf"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","8111207475d472c7de58a776082fd4fc"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","9d7225c1a5fa0e28bea39c6133bb16f5"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","6515bc6cbff70e74d492087febfb5faa"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","47e0c5f5f30d4c0a4793e80d23056220"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","76e921a2cb7692aa5465339093cfaa3c"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","cb333108494a70af4118b12d6596f3cf"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","fb3de217b6ccbac2c012593a0c4af8e0"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","26caebb926de45a0004043297b07842c"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","208fb70bad711cd1f3457ead6df27bb4"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","b7839b34823b978fc3fafed03428889d"],["/2022/08/17/前端/jQuery/index.html","4de4f6c13adfcbdb38823980fa694b02"],["/2022/08/19/前端/JavaScript/index.html","c4bbb82bb863ce14b4fda03cc8b485dc"],["/2022/08/22/前端/Ajax/index.html","82090959553d2ab6372b40c4e01f8c7d"],["/2022/08/23/前端/Promise/index.html","a83e539acafd061e1fd4610cced07043"],["/2022/08/24/前端/Axios/index.html","456a74768040bf5977e9ce173c867627"],["/2022/08/25/前端/H5本地存储/index.html","62644250ec1fcaf50029c6a46121cae6"],["/2022/08/26/前端/mock/index.html","f92ef3e3e22248eb20b6e2a0bb4eef06"],["/2022/08/31/前端/vue/VueJs/index.html","1e814ca996e5c38593cf814a57b67851"],["/2022/09/01/前端/vue/vue组件化/index.html","fef0a83470a11560e304330ed0b3aad7"],["/2022/09/04/前端/vue/VueCLI/index.html","668a2a0445e90f439c95db05544faa9a"],["/2022/09/07/前端/vue/vue实现动画/index.html","bbc43a5f0d9fc93562bbcdebbd91e0a8"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","28e085d0dbed8279b17a47146ad906fa"],["/2022/09/10/前端/vue/Vue异步请求/index.html","35cc4cacbb74f889a88929809a1372d1"],["/2022/09/11/前端/vue/vue-Router/index.html","0e965f997eb376628a9a871832741576"],["/2022/09/13/前端/vue/Vuex/index.html","55eab600c414a545afeaef952dd81d52"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","ab09a61fb5736224da2a09c1447e667d"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","a91a3ad0e989e535e2a68de8344f23b1"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","ed391a1bb48174d8fcd083e067b5ec78"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","0ff2a062f73a5f41bedaf1b86908dd92"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","3bb0d7c51e98eea4e5503bec7995df88"],["/2022/09/28/DevOps/Linux/Linux/index.html","18714dce02e8930d9ef5a34a36f79f52"],["/2022/10/02/中间件/Redis/redis基础/index.html","86dc22497a32fd8159a5a2d725d26578"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","30638de9eae7075cbc665679107ad6fb"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","a917572fa5013b379c13fab99702a840"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","306f64ee08970ef3b4083c85c9c0f3a1"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","b4dba34dc9da7be1637021b655434a96"],["/2022/10/17/中间件/Redis/Redis集群/index.html","419dcf52a0cc2221a9f47b57bf68b9ca"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","7374b4c2916c07acd39cd6ef89dc32e8"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","fc3852a8fa1738da272bcdee7ee6d89f"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","e8d3cab742a335d497a5c1173f9e4a68"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","1234fa347f2015589bc4147e1c1afd46"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","4766c182fefdbda0fc2198140e0e799b"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","5c7b1f47e6996f722cd6eb6b58b26740"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","b8fde191c202b64ffa25fc522f6a88d9"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","dd22a576ba31ec130efb02e6b655c7a6"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","2c02e974996671a20778087766fac119"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","55f8e2641710bb3763e125dcc23fd53b"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","b72d6efe9861ca46a992a59b8efa1302"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","7e06717cbae8851b3a249263dae22718"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","796a4cbc4e471ea1b23a90dd11d2c7a5"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","8e29a5cb9d26c28b7d196fdeb8a21265"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","9458677e87368a4a7a12b222bb377d73"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","a042ffa7c887cc3eaefc51cdc161e299"],["/2023/03/10/DevOps/CICD/CICD/index.html","a99836d1310aa84f62d5956f8239c1cc"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","b0ff8c7c2b79d2569b2ab733be8544e6"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","a3475306cf7b807120915581a4fbae66"],["/2023/03/13/Java/NIO/NIO/index.html","8e7d3d1670c75da3c87e09b024bd1d69"],["/2023/03/14/Java/NIO/Netty/index.html","6fc014970f622470876cb8f27f3f5702"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","741e1dbe2c66f6b2a14ccafb3bd632a1"],["/2023/03/17/系统设计/分布式系统认证/index.html","fb5f505abead891ade1f270c7c328a08"],["/2023/03/19/Java/JVM/JVM概述/index.html","89f4190eeee5bd6ccbdde88670070555"],["/2023/03/23/Java/JVM/类的加载过程/index.html","7da253f9c55dd7d15f184596d019da8f"],["/2023/03/28/Java/JVM/对象的实例化/index.html","353489fb42a81911795bf860307b6a83"],["/2023/04/01/Java/JVM/运行时数据区/index.html","2228c71eac1986a7ae84eb6e0babd569"],["/2023/04/04/Java/JVM/执行引擎/index.html","8c85bb7bf7ec4e4df054e2c62e3f2303"],["/2023/04/06/Java/JVM/对象引用/index.html","da119f6147370a82641216c11cf2a490"],["/2023/04/09/Java/JVM/垃圾回收/index.html","138a90abf6cddb5fcd5b212646785baa"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","2ac751292edf584e0eec997873073dca"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","6d00801cc9885d5c4c3ce1efc53f3923"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","31a58dd5431e0190a83261fc06eb1507"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","9f501b38d0ae10a26c1c141fdb4613ab"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","6daf1c41f0c2595135cff47b47dfc8fe"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","5256759d69f13a9584f67adfbf70e9ae"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","c40cdf93303f1bdc0dc1afb06595e80c"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","2a7c2c0751f398c1c0c6ae423981ea65"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","630751ba19afba60300e0f6509aeabb1"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","27be8eff810e47fe5879a9e0401a6091"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","765a4d3f9f510cf10791c3317c1b651e"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","1f29eae760f2c958ff0a37cf825d4f0d"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","978d6a80fc3402e6a2b029fb7b75f290"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","0f1e23104806f71777ee7c3ad20dbb0b"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","7d11eca2c43f84c825395252bc4c9cec"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","4ff2cf52b5adfb79a4306feba72ceac8"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","526591bfb09b0b7a74539510b1253c31"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","b67b471d5a6fe34560a0583bee790e35"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","f2acbc5de7624f8a13c6ac08fd559f3a"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","a71fafd852f51129be86aeb70c9afad8"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","a1b431c23b3bbadfc2b088d9b74596bd"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","e06902d23f941302b77068bbba1c95b1"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","8bf22e2f2d1da7018153533e5aa01f1c"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","8fd660f6e4da3bd9eafa4fb5b624c45e"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","8071a459c3af4d10abea6b2bf1ed6768"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","30b08955b7e39acf1e2bd418ca9e45a3"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","5999ebe4f2dd3dd0ba48074ea173e2ba"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","f94fc2382016307f9b6c273951de0d29"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","a4967a357baac67db65a1dbe4dcaa23f"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","3b27174c640b762d71dcbb17ca10242d"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","4985664a990f8f52b5859e057c7ef08a"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","b80edd8e40ed2a6268d4ccfc0ff772d5"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","4e04e7f9aa55c3cc6f0aea0129918141"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","c9f0ce82d98bcb2cbe50f8fc0892c823"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","d68ad352e50c599dea5cf24bc176f4ce"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","80d8c6b064b9068e98fcad1cace3eccb"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","c4922a3fd956e921e4372a0756a2df50"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","66488a51f9995f48da17e38e12eb4fc2"],["/404.html","cb592fce80ac7b13ce8b3ff30c67b6b0"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","a320cf6d565f8f8d0219e614e19df2fe"],["/archives/2021/02/index.html","205d9acaab682affc2ea3fa1eb6b100b"],["/archives/2021/03/index.html","928be7439f7e8c36beaeb83f5ce72b6e"],["/archives/2021/03/page/2/index.html","2acdbcba20181d803212bc295e68e238"],["/archives/2021/03/page/3/index.html","5c6a6275a55366a4a9b75aa5a62d4279"],["/archives/2021/04/index.html","eea6a6956b6c8fc3adea5b43a251b824"],["/archives/2021/04/page/2/index.html","989db51cf56a51f12e90a1c2b515782e"],["/archives/2021/05/index.html","81147c5f5dea3fab2ab143545ffae8ff"],["/archives/2021/index.html","338d0ae468270732cd3d89aa9a785936"],["/archives/2021/page/2/index.html","7fa5dabb81132b277e877a7867476dc3"],["/archives/2021/page/3/index.html","ea694e343cf0f18962306b1d8c849fb0"],["/archives/2021/page/4/index.html","8476ba649f43bb0e11956d224485ee78"],["/archives/2021/page/5/index.html","7f574834b6a47a22b13e1e4e1a70aaa8"],["/archives/2021/page/6/index.html","de22d2c37a19e2f8a2f02fa4d1605b84"],["/archives/2021/page/7/index.html","44d703acf25f6d416257689902f81e1e"],["/archives/2022/01/index.html","b34c9913a3255a93e15d5ec7746ea26b"],["/archives/2022/04/index.html","05e5a8cc94f83bacf34d6247d9f2324c"],["/archives/2022/08/index.html","2baec9637ad0a072639b3a30e538e69f"],["/archives/2022/09/index.html","9a1595df84809b112f76de41492cf0ef"],["/archives/2022/09/page/2/index.html","97e4d21fdb804fc61a12cf4f6c63bcb0"],["/archives/2022/10/index.html","3729fcf8fbd52c8929c9825bc48a1740"],["/archives/2022/11/index.html","a1cff6a26e62d3bf49702bb1c2bbe412"],["/archives/2022/12/index.html","c2c4ff033f625b3b6104d249c38c5d24"],["/archives/2022/index.html","8f8bf29810a0ade17ea4780c6e7686e5"],["/archives/2022/page/2/index.html","6068c369cbc7cb6f823507c344da97a3"],["/archives/2022/page/3/index.html","eda83338d62d152213c38d0f5291e5b5"],["/archives/2022/page/4/index.html","1d068c901410d7f226ca19fe43853b73"],["/archives/2022/page/5/index.html","9acca59f7140d0d494aa5025d05a1c63"],["/archives/2023/01/index.html","d12c609c19426d8ba471964ae74a9fa6"],["/archives/2023/02/index.html","3f9d1335d9f74dd62eae48c8697ec5e5"],["/archives/2023/03/index.html","919a553eb7b8ec7ccf0ae40395c0bb38"],["/archives/2023/04/index.html","0d770c98b3b0a7d764cff56722279508"],["/archives/2023/04/page/2/index.html","84a7aeb7823afb188f951ae94270f766"],["/archives/2023/05/index.html","fa9e167f7a8f7e7f25ff79adfc87fe52"],["/archives/2023/06/index.html","ebf287abef9cdd719b2b57bca6dae2a1"],["/archives/2023/06/page/2/index.html","4e2eeb78f0a1bdde1325852c2db7df9e"],["/archives/2023/07/index.html","791d6fd8c4ee672bca6437eacdbd4855"],["/archives/2023/index.html","7f296bf4909c0284e4e7776948a95caa"],["/archives/2023/page/2/index.html","6f8b4eb3b7bc5ff617892c419869cc7e"],["/archives/2023/page/3/index.html","82bf70a45d6ce7c84c27ec57370ce851"],["/archives/2023/page/4/index.html","e20db8ecc41a8918d6a124ee51a9b737"],["/archives/2023/page/5/index.html","d5104efea10bcdccceecc7152028a50d"],["/archives/2023/page/6/index.html","7da97b774a6ceffc022a8735d3c8966b"],["/archives/index.html","c0e8ea4e9aaca379121a0ea9b640a29c"],["/archives/page/10/index.html","de891400f95ce68f57567b58c69e1b8e"],["/archives/page/11/index.html","34d68485970a98c01858ddc0f3b98729"],["/archives/page/12/index.html","1593abb11c86ecd9d7814c61917bae18"],["/archives/page/13/index.html","32227683fe0e9b1c83159970e11736a2"],["/archives/page/14/index.html","441c291e4cb8a2a79715346189430245"],["/archives/page/15/index.html","2c2cb7830452c8072ac2e023950cdb76"],["/archives/page/16/index.html","bd227d86f5f2971fc1c54b4dcec58d22"],["/archives/page/17/index.html","cb4c65318401ffcfb84ba064e247216e"],["/archives/page/2/index.html","345269c896541774a13ee83570690634"],["/archives/page/3/index.html","8e360b6e6d0a2952d3b64555a4dc4f1c"],["/archives/page/4/index.html","3dbcc186e11ac32926305361bd2dcb2d"],["/archives/page/5/index.html","34015de2e4f8760655066d8dacf561f2"],["/archives/page/6/index.html","35a7d8b09b18b28669c9269882aa8ad9"],["/archives/page/7/index.html","38875edb31488944135a027b7590aa9c"],["/archives/page/8/index.html","0112963c9c9b4a5e14f8d8ef9e2dea22"],["/archives/page/9/index.html","763a1e1860dc3fb40825eb9732fbfab5"],["/categories/Devops/CICD/index.html","a62c1e2bbdb5bf763c94a853afc86391"],["/categories/Devops/Linux/index.html","be4e448d6fb97dfe454769d9921e82c3"],["/categories/Devops/index.html","b1ee7153c9d795c31a89a3f91ef7bf40"],["/categories/Java/JVM/index.html","4468a9fb8d712842a4d300432df0ea1e"],["/categories/Java/NIO/Netty/index.html","e54365be45e86882de61ab41e5f25820"],["/categories/Java/NIO/index.html","872524bee56b69b2512eecd7768a4608"],["/categories/Java/NIO/原生NIO/index.html","d7f594bca444f520998777f8bf071383"],["/categories/Java/NIO/文件操作工具类/index.html","1b11f7327e58278cd7ce6638189ebf2e"],["/categories/Java/index.html","c5b3943a1fdfe95b7fb113e9ee5e940e"],["/categories/Java/page/2/index.html","c41938584701b2a507f0cccf78867988"],["/categories/Java/学习路线/index.html","298ef78af1df9de2d6b14b4c88634006"],["/categories/Spring全家桶/Spring-Security/index.html","2df522b1942094964bb5126f78b31e2e"],["/categories/Spring全家桶/Spring/index.html","490b6b58c4ed7d6c1eab39a5f25c0462"],["/categories/Spring全家桶/SpringBoot/index.html","1f29cff58ff2d92e0f337fe0bfe347a3"],["/categories/Spring全家桶/SpringCloud/index.html","eec884dc27df74204b3707ea01077156"],["/categories/Spring全家桶/SpringMVC/index.html","830329e1830bc55072a07544b927fe0e"],["/categories/Spring全家桶/index.html","b8c3f22fb73e59c84ae29473d5c556b2"],["/categories/Spring全家桶/page/2/index.html","0957a9a75965d0a1a0690d935f6e8148"],["/categories/index.html","ca4f83e876310465385a85c1268c6783"],["/categories/中间件/ElasticSearch/index.html","b3069848f901841c34ceb1a51042e4d1"],["/categories/中间件/Redis/index.html","87cabe56f60fdaa9f531af895815755f"],["/categories/中间件/index.html","9e77055692cb6be101f0da0856f3b269"],["/categories/中间件/page/2/index.html","ac53ea4cb585611288dbb6765d593928"],["/categories/中间件/消息队列/RabbitMQ/index.html","8b6acf6dbb56a82ce4f58c246aa95f7a"],["/categories/中间件/消息队列/index.html","2573507b5c7a897189133c261794d194"],["/categories/前端/Mock/index.html","7137af059735329d0ae134ffc5ca3337"],["/categories/前端/Promise/index.html","6818dc3dcc384cfb5f399ab4bca39e80"],["/categories/前端/Vue/index.html","98425ea0858152d8ab9c0910add9de73"],["/categories/前端/index.html","b565def9532ba31bed1428d3aed6ba76"],["/categories/前端/jQuery/index.html","358646bf3955fa7596cc583aa5f7d859"],["/categories/前端/page/2/index.html","5598b7b4240ab821f7620bcf8ed456ad"],["/categories/前端/原生基础/index.html","a37856f9151da3bf028234049d0d3887"],["/categories/前端/异步通信/index.html","db79fc06ed578c209fbe055c97c81d96"],["/categories/工具使用/Git/index.html","f7e9c6720098320ec6eaf323ceb3a355"],["/categories/工具使用/index.html","eb6fe73870bb7c91e711db3c9759c77e"],["/categories/工具使用/markdown/index.html","56002f3d7be3d796cc08ad8968e73d30"],["/categories/工具的使用/Docker/index.html","bbd1a676b6891b4dd78464fd728aae7f"],["/categories/工具的使用/Nginx/index.html","5e4a96a9c7ab7f79e2dc81138e197ca3"],["/categories/工具的使用/Swagger/index.html","102f6068b3bd1c3e16d3b693d4a7deec"],["/categories/工具的使用/index.html","2f2483cb5348c4b07b4e777d2792eea0"],["/categories/工具的使用/博客搭建/index.html","3acd7525c574fa9b38f75f8acf866f0a"],["/categories/数据库/MongoDB/index.html","eb0c9566f7ce62914c460d7d92665d2c"],["/categories/数据库/MySQL/index.html","3e5fb1bd21c95c4f83b41c0972b37091"],["/categories/数据库/MySQL/page/2/index.html","19f728fde455703faa0f16a878e4f467"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","0221d801ca7dffea5c7e88dadc5fb5db"],["/categories/数据库/ORM持久层框架/index.html","92f5946874ad874c215a639cd911e8c9"],["/categories/数据库/index.html","966df9ac5122e71668a8f83c3d7d451b"],["/categories/数据库/page/2/index.html","906e5eb3343004cb6d966a17a7be3aa3"],["/categories/数据库/page/3/index.html","b3d788bad5b7ae00dd6a668f46ab4fde"],["/categories/系统设计/index.html","49f23fec31eb61733ef8b6bbb0a46007"],["/categories/系统设计/page/2/index.html","9a36f8eb24d1296edd26aca0ad7f7b93"],["/categories/系统设计/分布式权限认证/index.html","b1d3dd3cebf7244d304e1eaaed38a2cd"],["/categories/系统设计/设计模式/index.html","9a9e8a72ded5091e4780d1d1288a3310"],["/categories/系统设计/设计模式/page/2/index.html","6ab38883233e95312c8b7b2d8d3021f1"],["/categories/计算机基础/index.html","0aa9c9116acf7be4a5633af1324d9f31"],["/categories/计算机基础/page/2/index.html","c67e9aa16b7612706efe8d38819b7313"],["/categories/计算机基础/page/3/index.html","ad1ad1c9461d9ec56b55300357e5142f"],["/categories/计算机基础/page/4/index.html","c9bcd710adfe58a662751d424e0da03b"],["/categories/计算机基础/page/5/index.html","7ea42d903d20d389035fa59f7a91102a"],["/categories/计算机基础/page/6/index.html","a60ea41f45f243f1b4bbf392f18ff301"],["/categories/计算机基础/操作系统/index.html","b64b562a7af12c5a02d5d020a9db1624"],["/categories/计算机基础/数据结构与算法/index.html","34ccc29acbfcfcd5c0cb5fca5865b237"],["/categories/计算机基础/数据结构与算法/page/2/index.html","a0ea6fe5956f1f98888a66a8b465f936"],["/categories/计算机基础/数据结构与算法/page/3/index.html","c81e6c1cfbc723eefb3aee47d3c55beb"],["/categories/计算机基础/数据结构与算法/page/4/index.html","a49726dcc06687b8b171d993853bda66"],["/categories/计算机基础/数据结构与算法/page/5/index.html","774caa52a82d24172bfc18e84d528bc3"],["/categories/计算机基础/计算机网络/index.html","5f4e8ad58b824d7b537b0b23a5156a4c"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","fbd5e69baf444554f431bdc408e380fe"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","39af9fd94039fb73c0ab603c0cfc69f6"],["/messageboard/index.html","5a36e490efacd4060d607ceece0679b4"],["/page/10/index.html","82fb764214696a5abc233375b63a55a6"],["/page/11/index.html","d3ff00a79ab02c10f7836e9d1b754092"],["/page/12/index.html","aaa79a996bf1dffc2670427eb1c8a360"],["/page/13/index.html","38da39c428dfe445ab8dcf2cac52edf1"],["/page/14/index.html","a331d457cc6d521e08081ddfd4572538"],["/page/15/index.html","bfebb85e715adcface23ea8849ca2404"],["/page/16/index.html","0f019779bcdb59e8c975576eb9cab1cd"],["/page/17/index.html","4ae7d3b7d0eee11b254bb6a6a8cc05ea"],["/page/2/index.html","7c4e170d187397cc7c65b905f7f65b37"],["/page/3/index.html","c9071d56ca5e1edf5b8bacb265998d97"],["/page/4/index.html","ecd6477d26cad3d2906af9b138cd5a33"],["/page/5/index.html","70a4e990b1b8316240adb3664daf92b7"],["/page/6/index.html","3d2457a789c8d7e945299a76c99e0b04"],["/page/7/index.html","dedbd670ca5961168d6b25ccb83c9fd5"],["/page/8/index.html","e691b086467704514e87953e26334d48"],["/page/9/index.html","bda4b25a03a3419ccf4efc8b462e04a2"],["/sw-register.js","fbfc060fc3b212ac7213f68fce9b62a0"],["/tags/Ajax/index.html","62353c231863b8b1b11ef7d44453ee41"],["/tags/Axios/index.html","1a36994f95b302262fc777cfd6d4a9b2"],["/tags/CICD/index.html","979cb936011bccee1044e8e0032c4eb1"],["/tags/Docker/index.html","ec0579212162a772aedd98c340b10ac7"],["/tags/ELK/index.html","ef50cf931c4e10ad43d2b33378e08b63"],["/tags/ElasticSearch/index.html","a29968cff904146d51095208ad572e9f"],["/tags/Git/index.html","045b73f3edf2235015b8084f083e209a"],["/tags/H5/index.html","0c05867437175586efc3cdb5cd87bd06"],["/tags/JVM/index.html","4dd36b39499df2be8df4ab0c5e1cf93f"],["/tags/JVM内存模型/index.html","1a7ea43e4d3cad0d04ead4e19136fc4d"],["/tags/JVM执行引擎/index.html","3287ee3014b7a22c98a6616b49b7383c"],["/tags/JavaScript/index.html","dcf0d7a75048d35a79b83a888bbb1239"],["/tags/Kibana/index.html","eb36318a06b25e9b4d23a93b82f20d45"],["/tags/LeetCode/index.html","e6b951b87a99d62b4c928a70f54a8df0"],["/tags/LeetCode/page/2/index.html","6c68cf4b486c098c7b37c2ba10d03c16"],["/tags/LeetCode/page/3/index.html","b6923da4e2302dc3658105cc4857ffff"],["/tags/Linux/index.html","e2ef539b280ff803ebceaa379bdc50c4"],["/tags/Logstash/index.html","0d67af6411a2df460a6778193b82d1ef"],["/tags/Mock/index.html","d37d11aedbf5d4c4ddcdcba50fe2a40b"],["/tags/MongoDB/index.html","b348545c959c18231be75590a8b221cd"],["/tags/MySQL-事务/index.html","a52e6ccae2704a5145936bf9a9ad2a09"],["/tags/MySQL-数据类型/index.html","2736fff33a45b5e347791150ea828733"],["/tags/MySQL-日志/index.html","8e9437cd227827a85e6299ee346af0b1"],["/tags/MySQL-索引/index.html","adf9a230a02e945d498f5922a346c63b"],["/tags/MySQL-锁/index.html","9fa836492317e16f7a748ffc1a32fccf"],["/tags/MySQL/index.html","2bc9e383a6d893326774d6518640848b"],["/tags/Mybatis/index.html","a47599d1c03101968030d5b4cf9747b6"],["/tags/MybatisPlus/index.html","264719758be1fb0515505d699b11d28f"],["/tags/NIO/index.html","291f05ca959b3368a24c78267b98254d"],["/tags/Netty/index.html","4124fd67416ebef7411e13de25779f17"],["/tags/Nginx/index.html","86b5d7fd0288b93904f8c4f3e18adca1"],["/tags/Promise/index.html","44cdb8edbcacdf85059ff4994dfd95ba"],["/tags/RabbitMQ/index.html","8a4e02b61907c5279f91b24276980253"],["/tags/Redis/index.html","f6878fda61d5a5b5c39a2219ce1398e4"],["/tags/SSM/index.html","d82fd377c48fb7cf443127b7a88e9e58"],["/tags/Spring-Security/index.html","35fdad525063b64c8b8aa76f826d09f0"],["/tags/Spring/index.html","29d16e84dc6e0660f632623f12bfd346"],["/tags/SpringBoot/index.html","fd0d4faaac0315738c76edccd34e5fda"],["/tags/SpringCloud/index.html","b347816461197bf99a58ab85a2be9707"],["/tags/SpringMVC/index.html","b66a0261022f3338013f56ef46eb519e"],["/tags/Swagger/index.html","a0c855cbb9af4d7223dc12fc779361ac"],["/tags/hexo/index.html","ceece5eb371f59f7bf82c7adcd37b422"],["/tags/index.html","a4be42475a8beabfe89512e969ec35a1"],["/tags/jQuery/index.html","e63874f9aa62b28b46ce951ef075ed5d"],["/tags/java/index.html","e623ed22c4231fbd938ec56cc35c0a14"],["/tags/markdown/index.html","2e0d2f5f5781fb6aac01b42908f86af0"],["/tags/noSQL/index.html","fde79490bb1377b9d5d371f8224a9c70"],["/tags/typora/index.html","050a0e681342e95130071b045bfd0cc3"],["/tags/vue/index.html","525fa258c2e4ea47305f0d01a1a4bd3a"],["/tags/享元模式/index.html","646bb209959900c4f28b4b696a0bf865"],["/tags/代理模式/index.html","98542abb8b15af97c78ff80cdb5b38f1"],["/tags/内存管理/index.html","d98a4fd85840fbb99f17222356272745"],["/tags/分布式/index.html","bac8853d9353e6618e1bcfb46b4cc72f"],["/tags/分布式系统/index.html","30e3efd6711d6783b2fbfd68d17163ca"],["/tags/前端/index.html","eed0024ac8f5471ac4ee5fe13ad7f71f"],["/tags/前端/page/2/index.html","083454cffdebb7bb88897b50c9289ca7"],["/tags/博客/index.html","248152c9591ca1fd77abc5b16e6ea11a"],["/tags/后端/index.html","b81a1cd8e660c17c588606e92b9df19b"],["/tags/外观模式/index.html","f5f1e3e643821a87ca181829ffadc92d"],["/tags/容器技术/index.html","43cadc1939b0507d831244d02c697930"],["/tags/工厂方法/index.html","46c166fbcc37841ca9fd36585da4dbb0"],["/tags/微服务/index.html","8058beeec80372ae95a03afe389f0083"],["/tags/抽象工厂/index.html","d0b57f00407179686487ec504ec0b9b2"],["/tags/持续集成持续部署/index.html","9309fb7b84771218c9324b86231f31df"],["/tags/搜索引擎/index.html","2673736c7e4a0aa0281b6560b96361c2"],["/tags/操作系统/index.html","be59067faf4ad663f32f897516bc8a4b"],["/tags/数据库/index.html","99d776050f925d411614182cf3833ddb"],["/tags/数据库/page/2/index.html","93a4535cb108c3cc8c9397647a644093"],["/tags/数据结构与算法/index.html","6e56326a309e8ed11f8bcd02eed655ee"],["/tags/数据结构与算法/page/2/index.html","49eeb7ccfbd06727a7632f0724f46267"],["/tags/文件操作/index.html","e37535674e41b982a18cd0518d781ebc"],["/tags/日志/index.html","cf832364d53227cacee237cfbaf41b8b"],["/tags/服务器/index.html","8e486e9cafbe669a24f32a056023f892"],["/tags/权限认证/index.html","f62a72303acc77464b364bffbe7f4d52"],["/tags/桥接模式/index.html","0ac5162ad6873f305f4e98ae92f7a28b"],["/tags/模板方法模式/index.html","2ad7e0afec1dffebe1b92d3fcfb65273"],["/tags/死锁/index.html","981d021f602ce0baaccbf96c44b7f182"],["/tags/消息队列/index.html","25a0a2b0477977f3e778850ad511df3e"],["/tags/版本控制/index.html","9039ce479a177ab4830e7bdc46937acb"],["/tags/策略模式/index.html","051318387f0678f1444d0eb036cc190f"],["/tags/简单工厂/index.html","db9db2ae1627b8cfb52d9f5d511769aa"],["/tags/算法/index.html","75902da4c3c2ad8499e02dfb320cabce"],["/tags/组件化/index.html","d957a5a1d661e62b5957ca8daee390d4"],["/tags/缓存/index.html","622789b9660e0082b7ba64ee2e7161a0"],["/tags/观察者模式/index.html","e457147336af94874dbe2c09abb7ba08"],["/tags/计算机网络/index.html","1717d92fd0357215e2d80fbc27435dd7"],["/tags/设计模式/index.html","518b89687dec262a8fa5f4877dc12436"],["/tags/设计模式/page/2/index.html","b674497c67366df6b038b720be86f4d9"],["/tags/进程管理/index.html","293e470b2fdb91935779ac535080e7d0"],["/tags/适配器模式/index.html","65169d1f2c2b58a30cd087f203df2db3"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
