/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","8acc25c8fd0d70f6325e4ac92167bb33"],["/2021/02/22/工具的使用/博客的搭建/index.html","bc4247780798bdce6a1b1e08f5cbf5d7"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","14d4d790728b277b638db5c9db01b6ae"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","20afa450dc9078cbda8ffdedd8410211"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","ec0bb601002a32e3c5f190e0e1daeb50"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","5e9406ea11c7a7d41c6960562e39384a"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","d593b0077521536c98736842e29a50bd"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","89a3ddd6d83cf990b759d362c3f25b7d"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","461cec9b591c8eb56d1717d1ac6e1d75"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","049b27116fce7b2fb4da57855a157476"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","1b1e189d08519db34f01f3bf7b4031f3"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","ceabbe64f69fb09f6a1cc5d32b61422c"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","80d2b5de6c702d2dd36b76d1836402d1"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","6e1f3504a08352cc891e5542b9010280"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","783e42f53583182c7e108d9f6401ae15"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","8e5cd9c62a97b2ae83be89e0545fbf79"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","898e2fa29d8394c351b2743f5e2013ef"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","a3887c5d9abc814471f1e41ad4170e29"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","fe0f5833dba0459555f4cf0ec4c0603c"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","cc9ba26b9e1e7c15836c6e8a8669a799"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","73c9665021da89b1d1c5b1d9824d6801"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","6c27bbb1301081d25d859b22b6862dd3"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","79c7c603293bde151ff48de2e2e389d0"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","03cc061f756d772e2c7dfb0a568dbbde"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","e12b96bc272423159d8bc47fa6dbdc8c"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","1ecd0881b0b41f65b0a5f547430a9f95"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","09e9edd5df34bd52f856833cc802c906"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","575774e3e6599dc47e75986e2de16825"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","357ebae3321d33302f2b5b903482f8c7"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","5bdc69b2ceb9e305638aa108b9fe0e34"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","16bbf954ae28a739de2be8fb1d3e87c0"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","4b8ebb90ebbe9e043af7095fcfebd6a7"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","2b6bd7282190507e03ac79cfa09f384f"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","176adc84a4be4133c7167aa81ec0745f"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","f9292e94d46148181c0d99f884bc686c"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","9f1396ea688736c926920f29d2f4ad84"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","75ffc1f43bf5576d9786daa1580aaf6f"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","c67ee2f404968be769477fa85fe750ae"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","cd78e06042593346fd943e99a0067e89"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","221af1db54195d8733ab81f095b757f1"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","62d46d2ad58c7d2846f79c6103e8f30d"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","fb884a9f661db7dcd90fd3ce3beddce0"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","90e778ad7aa91bd1201f0ceb837ff71b"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","54cb413a52165354a9f8d0d35f5e9bcb"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","275f2f4ae8c88cb7231cb2ecc0768648"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","8b1fc6dc8d4981a4fcc35d78049f10de"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","cf4e26fda815f812bec2176e02357f43"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","f3ba849ea209b63d34f358603e1bdc6c"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","6aa71102b2bc5484997b30b13e1f8190"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","58b78afeb45416a1d36d7c7b1fd74335"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","369d6564252c3e2d6b2924920f60c71e"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","d336966aef5f15768048eb217e950619"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","33a06a3fe2951caafba261ddc9da3271"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","c4b739ff365ea6e47fe27f06ecedc0b6"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","d9d50638fb7265debacd50e0e0ca5995"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","e965b2afee79fa49a81642c552d06940"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","864c4c109f446f3415c540951490ccb0"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","807daa7c053092c357c5e7f18beef343"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","9b025c3a40145dd0fe568d5c813fed67"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","0006c9dc54c89c60becd4c455e4f6ef5"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","6d4ceef0254d319c9506c6bc2f536196"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","0f7e0f193847f1f74b8ad2586124e7a2"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","44eed5eccb902b778ae5520984c56d36"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","c285070073195fce13f480b29007d390"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","bd533bf91d7d1cd940c68b75837e1a0b"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","54c1d9a0889c0f19c038aa2cc8dce2c7"],["/2022/08/17/前端/jQuery/index.html","08ea06c1bdcc1a4fdd67e5fac6493186"],["/2022/08/19/前端/JavaScript/index.html","cad943474efbe97317ca363532b9a8f4"],["/2022/08/22/前端/Ajax/index.html","cc4f778ccdad8bf1e81813155dbd554f"],["/2022/08/23/前端/Promise/index.html","a5077823cfb798c05255823f9a44b476"],["/2022/08/24/前端/Axios/index.html","a8eb66ecfc3d1f0ccf0d9e804663d4ed"],["/2022/08/25/前端/H5本地存储/index.html","0c6e7784dd05a90115110438e85349c4"],["/2022/08/26/前端/mock/index.html","6d6fd5d844ae0f9b0f1978298d89843f"],["/2022/08/31/前端/vue/VueJs/index.html","41f09a92aca1cc1318fb2407878c42a7"],["/2022/09/01/前端/vue/vue组件化/index.html","b80eed90e420ce8a5a0051af7f15bd61"],["/2022/09/04/前端/vue/VueCLI/index.html","9e5088411df184830400708017596d18"],["/2022/09/07/前端/vue/vue实现动画/index.html","8157ddcbca461e60e9eef3646be815d4"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","f1d0442b7bb59dcc1a35ca07015e2f4f"],["/2022/09/10/前端/vue/Vue异步请求/index.html","d30731bdb6db23c56acfe674eccfae1b"],["/2022/09/11/前端/vue/vue-Router/index.html","f51923fd7a8e8df1cfb6aa5a9047376a"],["/2022/09/13/前端/vue/Vuex/index.html","a2c7c81a6467f8172e26b296574e1c1a"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","9d4897ec06dcf47b042aca0ca0096599"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","0c3667bdde7547577ca0c83f4df2c9c4"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","e03314c51baed81d653853a20cab5da3"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","46e4f898dc3ed56fe138c22c121b876b"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","a70a8d249becb8752071aec2eb51a446"],["/2022/09/28/DevOps/Linux/Linux/index.html","317a8d1dbc44456cb0e4da8a685523ce"],["/2022/10/02/中间件/Redis/redis基础/index.html","182035a04bb03bc3946c0662c57934ca"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","18c9a6458c2969875a359e4388c5574a"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","1186de710aa18969f1dacb261ac6dda2"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","b73a9b13eef2225d636c77ce51c10fc3"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","a5e45aa1ad52ae1f1f04702e1556506e"],["/2022/10/17/中间件/Redis/Redis集群/index.html","bac8f667864b50049f93a7eec024ed3c"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","05272a22aad8a308200b2855bf31c291"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","42cb0d1039d40473f380aec865e1cae5"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","c1fa5884f32a470c31529d2d5d5cad56"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","c6a0343620afec7624b17ad8f1f30ef8"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","3469183293ec12dc6690ef687b7593b7"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","7abd504d584f136fcb0eca0dce9138f4"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","eb1b495bcd3769d8ff7279aee4ecad47"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","4027eb2006648e9e39401dec3b90d3e3"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","0385cd54198cc9daf1a552bd4e166d90"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","702d268fe83deb3cdf81fd31b924e3ca"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","2b5bf5a65605ca1506f2c66c8be0ea6c"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","05e378ac471641f6797498e93630933f"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","165766fcfbcd3edbee7d5d5795f9b7d7"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","fd97f3d896430bb8565481e158b05846"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","c266a79a6619c84aba1bb62a87d4334a"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","d0477093ac76ace34c45a863cf18670a"],["/2023/03/10/DevOps/CICD/CICD/index.html","a3bd66c7a0e8e01e1120ff0ce40cd4b4"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","b7a773ea544a5041f32598ac50e2f591"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","801ca5c753f0ace87f8f9a037e794b9e"],["/2023/03/13/Java/NIO/NIO/index.html","8d1993c90dc85056b3331f5f085b49ef"],["/2023/03/14/中间件/Netty/Netty/index.html","d7f10f81fae5528e8cb920d3bef4df4f"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","15aa674256b7cb17b10c25d4db97f3ce"],["/2023/03/17/系统设计/分布式系统认证/index.html","9bc21ca5e624933957034a947c4c90bf"],["/2023/03/19/Java/JVM/JVM概述/index.html","0ef83f1874acb491f87d3d8e1b70cc17"],["/2023/03/23/Java/JVM/类的加载过程/index.html","bdeccb45ac4c6b76600dae82cd8467ae"],["/2023/03/28/Java/JVM/对象的实例化/index.html","8fdf36e86c02730223f73073c7a46feb"],["/2023/04/01/Java/JVM/运行时数据区/index.html","f605d15c233ba6eaac8fbce39b02dd52"],["/2023/04/04/Java/JVM/执行引擎/index.html","790d466f95164e66ba51bd693e6f28fa"],["/2023/04/06/Java/JVM/对象引用/index.html","df8c620c1f754ca93870361c0b61552e"],["/2023/04/09/Java/JVM/垃圾回收/index.html","eef6735b58e9691371b404ce5e39a37d"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","f9527dde3b11022c4196c434ee00ff39"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","44a4c87ea45220f866184c116e37a9f4"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","fab1dfb3380c2ae4ff1f20de60970036"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","c40e4bfe8df6b110bb1216b1be85b16f"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","013826f1d8c655ee22d33888ca9c72f1"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","2dbeafb0bddfae58ba220756e5b9f4f6"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","8371ef7203c319d630face2bd091f7d2"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","a14e47d0e9cfc014ad5d914d2b43533c"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","9c1c5218191da91ecd031d958716e4d8"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","6fc25db7cbbd5e15b3c2cacb82c56e2a"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","fcbe122390814e8f3a1beaa5fec926cf"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","a5eda8bc73cb99c38ba3a713d584a2d2"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","d4cbe09511d557095f3263df15a76d78"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","2af6b4162186aebbbd4f44742331eebb"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","ef3a22b8eca690b36e555a6ca58dcced"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","6e16a548776efb7261843d1f623c4c09"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","905af6170912b5747ef2c8abe9a5664a"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","2929811a09aec8ecf6d3d4d77b4e603e"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","4be83db0043af6950d32b618796e9675"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","abe53d34db94cace7119832b249b0c0d"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","da18255bec6b9d476f6718c6ec34cdd2"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","7e28437917acbdabee781a684c23d9bd"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","bcdca5d223afec6d715fbcc520f3d45b"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","87b701dd480d0de4bf84e2ec04aadf35"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","4e5d0cc57fb7a67f91aee41f7e7a479a"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","d14c80b13ab21a8a3eb4dafe384eb844"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","062270fc16b35689346fb95d6e94b88d"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","0657b2f3ce50321d53bdabfb91a7d5b7"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","c563ac1e7e843d0a9a3d8add876db534"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","fad8667eca5bc1f17784d723e4033988"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","40746ea34617bbccfaab5027ea571187"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","5c5be24cb7d1f404cf16596cf068c98f"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","7a5f51abbc161606542c92aa3d315875"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","1580bd04ecd208c860c68630384b15e3"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","b77c90ac3c59b0c8e4bb7e40d0467a16"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","ee77eac2890e922cac9f209c5ca48846"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","7492641b6c204e07bd9901969f0410a5"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","6aa5cc2c660b2fdeac9434357bd29aa1"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","15485e614c99e136ba75602375733ba7"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","1fe6cfa0cd7ad6fac6627f56a7182ffe"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","b0436bd2540b814dc00a604e4e4eeeb5"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","db8d6e3cd2dda3a6b69db0248d60a1ad"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","76808e343158f9311a7d0aef97890484"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","5a4a2be61f2e8c8584922a5d36c30bb9"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","d85e63af72db9528ea4877099f416e51"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","ff7ea1a8bbeb92c193478f34bc7756b3"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","5e410a15c5ce4321e9c2c80a9762831b"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","72bfb8f9a7e7c45f9ad949525bb712e5"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","e916df5fe1ec9573f7174038f47df51b"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","cbaddd75f0477614dabc76363f6ca687"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","0a23342718cb3e144c9dcf7c5b86bb2e"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","75282e53a3f92fd5637712acd72290f9"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","da76ba9c2bc28faa1fe50d9c85dbb2d2"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","1274180bceaecf063456f2c0648214b1"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","0153b01daf9e91a4fab954ec38ebd0ca"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","ab9200ae67da6de3ee76f2488dd605eb"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","aafa923752146959a5e7b5d9e6e14ebd"],["/2023/09/04/中间件/Redis/Redis事务/index.html","3e08b5aba51bc62bceaa29d1263f4e66"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","3627cce159d0953ea8093cdc9c93477a"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","780546f9c48dd19501410552529c4f22"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","004f31b5314545fd661764b0d9e3d7bf"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","a4e85c8b9cc3dc58062f29e900db712c"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","1191825367eed708409f5ced71700329"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","cf0d328981d47198017f44cff9b500ad"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","606dbe03f9243e2fd4e79db9586b1ee1"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","ad4d4f459f5eb56cdfaaf095d299595e"],["/2023/09/22/Java/NIO/零拷贝/index.html","055e7c21bc8e9436f920840e1828a9e3"],["/2023/09/24/系统设计/JWT认证/index.html","a7e2cd2146d8e59099a42d8e1cce7757"],["/2023/09/26/Java/NIO/Reactor模式/index.html","950f609d24de54f5815008c09b4e9ede"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","750b7e0ca8309c4d4ef073ab97dbdfd7"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","81f956e57d8f55b48316a70e9e4cdfb4"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","c2cdb84c8f7065d14cb81c785e5eaaf4"],["/2023/10/09/Java/并发编程/共享问题/index.html","d4da5cea2bacff4c4d5fbfed4e1868c5"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","3e5a97a77202e2ddcee19e48112188b7"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","db0c46b4eaa701a2ad3cf76cb065a814"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","4f6c7be31d76b19050db51c94483b4ef"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","05312ed4ad71a1fb90f05dcb8a86f1cf"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","c7eb532d72372ed3e704450c0186d2c5"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","3b99176b2520d2d9c93a9402182d68cb"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","7dc0eb39740048d85a97c40b77a17032"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","1f2686b3277ef97e30729c48a275d621"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","a6d89f7e93b93738d19de60aa03ef37d"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","c954b6594c7a8f0c893c6e35b4c58643"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","53e96a96ba55b76003fdf345bca80ffb"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","7ed3f58a9046e34cbab06955b2c35565"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","07c7f0eb3f63ef56abe669f109a94861"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","9c93a2679e57cd8885afbbd2d2c34c7c"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","60ab66013e2950231a406241c5dfe7af"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","1a8a1de2bd97fa4e1fe180b95aae263f"],["/2023/12/05/系统设计/开源协议/index.html","29f8c7dc6085f3e698403b9c843a5511"],["/2023/12/09/MockMvc/index.html","629f9f696fd716b2c2efd73813b2c587"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","99eb4bfdd54699a14988dfdee0a895bf"],["/2023/12/19/MySQL读写分离/index.html","3e15f01a60d15dbcc427345f791e33fe"],["/2023/12/22/MySQL分库分表/index.html","fcad5518a0d797921a9da5dcf2ab2db8"],["/2023/12/27/利用NoSQL优化数据库/index.html","6b311351d90fa1b7ca0dc2675fd50e4d"],["/2024/01/06/缓存概述/index.html","59bb1d6de5b5a86dc123223e429de8da"],["/2024/01/11/缓存的读写策略/index.html","b62e84cd8e307ed705206006d16d2a85"],["/2024/01/14/CDN静态资源加速/index.html","b2ac6df4acd43dd77c3ae02b6e232406"],["/2024/01/18/消息队列延迟问题/index.html","223c7242cdc3f9fbc9e83261379e7b59"],["/2024/01/22/高并发系统分布式服务方案/index.html","8c7c0e668e84a04a91d034a98e5a8773"],["/2024/01/26/dubbo/index.html","3eeef478221f85c6becb3e2ba524d732"],["/2024/01/30/微服务基础/index.html","e9ca36386879c5e61315270d9d3a8d1e"],["/2024/02/02/监控微服务调用/index.html","77b42f80d4477b7a99523618bd462cdc"],["/2024/02/13/微服务治理的手段/index.html","da637c83eb1f95e8b478b85567171d8d"],["/2024/02/18/微服务治理的手段-二/index.html","44487246b4cc80e8c219a735b2bfb2f0"],["/2024/02/22/计算机基础/操作系统/epoll、poll-和-select/index.html","9dd3118c96fa8dbf853a56fb0827f2e4"],["/2024/02/26/Spring事务/index.html","645ae1945e0bef74dc2b697407f155ed"],["/2024/03/01/HTTP接口安全策略/index.html","9088e6f0c50d7b3f9bed2bf68cdf5d59"],["/2024/03/05/HTTP优化策略/index.html","de344fdf774c5b82eb9ce1d5ae732d9f"],["/2024/03/09/计算机基础/计算机网络/基本网络攻击与防御/index.html","ffb740b532fe530214dd28d4559a7f7d"],["/2024/03/13/分布式系统监控/index.html","21b71244538eb70e03822690fc61f03d"],["/404.html","25d4d7ad438aae35bd66aaf55ab95e95"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","e111fb9701c3ae737db188ffb3152030"],["/archives/2021/02/index.html","3467e0ec44bd51d572043aff62ae5352"],["/archives/2021/03/index.html","deae437436c4cfc21652ca13d10c7110"],["/archives/2021/03/page/2/index.html","63c321f6960b0086ed761fa5926fdff0"],["/archives/2021/03/page/3/index.html","2484b11f521d75158ada796e06e43c0c"],["/archives/2021/04/index.html","c3153eb23a850fdfa7221200d2b59467"],["/archives/2021/04/page/2/index.html","be3170f740ba0e47e9ecd7d641966631"],["/archives/2021/05/index.html","d9bdd878d4d62275329a1fe6a059e8e5"],["/archives/2021/index.html","3cebf69686b0743bf5f2ba81d70028be"],["/archives/2021/page/2/index.html","d8c0144ac461b10a0b86ec73cb1d9646"],["/archives/2021/page/3/index.html","02bddc527698e06afd2140645fc8f9ea"],["/archives/2021/page/4/index.html","36af54a0cdfb37cbc5de2d24f14308e3"],["/archives/2021/page/5/index.html","df32b37e62d271343e2291de6541b6d8"],["/archives/2021/page/6/index.html","45f85d356ca1c2351a8db98a42662518"],["/archives/2021/page/7/index.html","8cf66e1228a920d11584b9bc1c848222"],["/archives/2022/01/index.html","7b8949e6b6e6e6ad12f1605e8843adc5"],["/archives/2022/04/index.html","b77b5f170bf9781f0474bd7fa97a3df1"],["/archives/2022/08/index.html","d7f75cf230f2f352fc756ba27687c407"],["/archives/2022/09/index.html","d3c43fcf785065c223d8e01ea9eef95f"],["/archives/2022/09/page/2/index.html","d2869df6db3aaaeb9789f16a74081101"],["/archives/2022/10/index.html","2ca4e1ecab4a65306f1fb1eed95e248b"],["/archives/2022/11/index.html","7ec77f1382cc425ee4bbf3784986de2f"],["/archives/2022/12/index.html","5f9feaf98da459566528421574084647"],["/archives/2022/index.html","9e2a9eda5f3855b8fefca3d8a3086c3d"],["/archives/2022/page/2/index.html","24620eb0210a4514532d72c5f8816198"],["/archives/2022/page/3/index.html","7db5df7d808f7c3024b84f93ed535345"],["/archives/2022/page/4/index.html","f17a5d20697f63d7392613b3be623f0a"],["/archives/2022/page/5/index.html","c65b0a17515bf3bd49228fe8dab32f3f"],["/archives/2023/01/index.html","3018c2495599257148340842d82a870a"],["/archives/2023/02/index.html","5dcb333e6310ec974f55d028997912b2"],["/archives/2023/03/index.html","f0971edceed3c00a86ec0c822a95f00b"],["/archives/2023/04/index.html","47f3627302cf35e11b845de285b8904f"],["/archives/2023/04/page/2/index.html","7385e8733df987d51f5810d25f66bd13"],["/archives/2023/05/index.html","0c1f38203d12bbc832963e43dfc1c3e4"],["/archives/2023/06/index.html","50289112fce536d8167a041b95a679c5"],["/archives/2023/06/page/2/index.html","d59b4bf2fd144b517027e327884b2ce0"],["/archives/2023/07/index.html","293d97b3718f531d143ca4daae76f8e6"],["/archives/2023/07/page/2/index.html","02291c5f4f1dabe4757b42800c356ecb"],["/archives/2023/08/index.html","b8b8d0f7aec5f91e5a3a511e3554c19a"],["/archives/2023/08/page/2/index.html","e2cd27fd0fa595716735bc843fdc6dab"],["/archives/2023/09/index.html","3c203ed2ae36438d9bb22c249b445471"],["/archives/2023/09/page/2/index.html","d4924593f2c5b0231a2d33df3be71eb5"],["/archives/2023/10/index.html","2db7d1c6f8cace5ceb250d645238436a"],["/archives/2023/11/index.html","9f8d3fbd1e0b614d77d5e7fad3372f65"],["/archives/2023/12/index.html","6d4da8255e58a9d9ebf94feaf489c62f"],["/archives/2023/index.html","f097e6c743694e6fcc88d605eb8eb16d"],["/archives/2023/page/10/index.html","4cdfcaf48133df8dae26a8c96ea84ef9"],["/archives/2023/page/11/index.html","265d4320d7de4ddac75a03802fba5e49"],["/archives/2023/page/12/index.html","a7f0252d0be7944747b319a0f11a9dba"],["/archives/2023/page/2/index.html","34d76158194499e1e4c450f98bfa1314"],["/archives/2023/page/3/index.html","468cbbb5c7feb27b72147f388f7ccff3"],["/archives/2023/page/4/index.html","4e394c1d835255708a3c9c20bd2fee29"],["/archives/2023/page/5/index.html","db2469562a506a5d178204f8c7fe37f0"],["/archives/2023/page/6/index.html","65fcf09e8f63fce20f16a93aab7d3014"],["/archives/2023/page/7/index.html","e27c685435b03c88a6f6bd1c5a028f48"],["/archives/2023/page/8/index.html","a55a07e2fa49ef01f87850db9bc1895e"],["/archives/2023/page/9/index.html","5c71fbd7d514087a8313fbda2f431d2d"],["/archives/2024/01/index.html","80b38b3591d6c9b0f709f36afe9e8223"],["/archives/2024/02/index.html","045be09d7494ab4e36096ad33be655f2"],["/archives/2024/03/index.html","32b2a6ce02f0a8c00b405315e4b0e38f"],["/archives/2024/index.html","a4d72e77077c212760ed7eba01dbd677"],["/archives/2024/page/2/index.html","9b553e28125aab7552740977b658dbc9"],["/archives/index.html","ccb94f5e39c35698ac4702ee3eea9ab2"],["/archives/page/10/index.html","706c49c619ee8cdce911cbf11967726d"],["/archives/page/11/index.html","0413d93a3288730ba33560ac4b6a7c6d"],["/archives/page/12/index.html","89e1c0f4ebe986d015bf2e2808e5c6b5"],["/archives/page/13/index.html","2dd29cc5c9bcf1ed75ee4baa9d445863"],["/archives/page/14/index.html","71ba8d328ca900d73a7545a3c305484b"],["/archives/page/15/index.html","dc72c147b02ed0400bd48f09aac436e2"],["/archives/page/16/index.html","902bac62b6ab1a5fb36cc404a1eddfaf"],["/archives/page/17/index.html","ac321cccebb0e8f273115d58755f123d"],["/archives/page/18/index.html","f418d405244307bf09c4347096723d15"],["/archives/page/19/index.html","e1768796f0600dfac71faf52a6809f16"],["/archives/page/2/index.html","2730fe22bbd83d1544af0631642c3e42"],["/archives/page/20/index.html","da0981d10ab62170b4905427a65f7239"],["/archives/page/21/index.html","6fab759ca61b5b3adb2ed6de66d6d066"],["/archives/page/22/index.html","a32549cccea9bbdec2ea5ff52e2d3238"],["/archives/page/23/index.html","355225ef9f54468a6f1161ba1305c2a7"],["/archives/page/24/index.html","82495665128677fe126f68b825d271fe"],["/archives/page/3/index.html","ca5c02c1aacf40f3b650b0c447fbe33b"],["/archives/page/4/index.html","ee79d333597b5b51db23b0f34c3e7f06"],["/archives/page/5/index.html","13aacac27a937e31efbabeaa84e60b31"],["/archives/page/6/index.html","a600056223c9bbfffab16c830e9cc2a3"],["/archives/page/7/index.html","41a5dd23bed622c39fc1f43c867cce07"],["/archives/page/8/index.html","52426d2c9a5213b904b23ab2bf10a875"],["/archives/page/9/index.html","723098626a8689523950c51a7a8c719a"],["/categories/Devops/CICD/index.html","66cece769510bfa020663344c8cc1bb4"],["/categories/Devops/Linux/index.html","7684db15f3a802f2e876f2d92b1b8ab4"],["/categories/Devops/index.html","839944b0dedf394eb3445cbf5529616b"],["/categories/Java/JVM/index.html","8f2c3cbae6433d77f52efd82875a1e4c"],["/categories/Java/Java基础/index.html","fb7521e74f0f7043c82483d0c793d8c8"],["/categories/Java/NIO/index.html","882dfbdb6e5620affcc944df27f5d6fd"],["/categories/Java/NIO/原生NIO/index.html","0cfbbca64e0a491251060bf1a96c817f"],["/categories/Java/NIO/文件操作工具类/index.html","a54eee2c32563154d22e40abf6822630"],["/categories/Java/index.html","319a448b56daa0526457609c293b8c01"],["/categories/Java/page/2/index.html","0ee36e4140ad3582e66681e4856493b8"],["/categories/Java/并发编程/index.html","5c0e4c096d972f558c53ce67aa531a35"],["/categories/Spring全家桶/Spring-Security/index.html","6d3691248100f4189dcc00bc42f5de09"],["/categories/Spring全家桶/Spring/index.html","0ba0bf007582a7c0cb5c58fbadedd5be"],["/categories/Spring全家桶/SpringBoot/index.html","9350e31b1fea4086a7c7fd4eb236dce5"],["/categories/Spring全家桶/SpringCloud/index.html","d426a3a610422131160cbc3d1d93ed96"],["/categories/Spring全家桶/SpringMVC/index.html","eab8a8cb9e39859ef2a8d7977e53e8ce"],["/categories/Spring全家桶/index.html","27b34ee643f6868162c35e4b0bf3bdf2"],["/categories/Spring全家桶/page/2/index.html","fc6c1c94ac00ecae43715d816252b8c6"],["/categories/index.html","903728acb37005a106fa8899989f25f3"],["/categories/中间件/Dubbo/index.html","142051a41b45ba55ca0def79884897cf"],["/categories/中间件/ElasticSearch/index.html","d43b34cf9d4089649cfc43f0d918d003"],["/categories/中间件/Netty/index.html","045b14105c93c532fff3c8dd6f2ab204"],["/categories/中间件/Redis/index.html","b35dd2653c5cc5207a697cd5916fed1d"],["/categories/中间件/Redis/page/2/index.html","8d467da366eb4d81a1f045aa4b038ab0"],["/categories/中间件/Redis/page/3/index.html","c6bd31fd0e8a5c124eab95bb16593c63"],["/categories/中间件/index.html","79a8520c73d0abbcde744b5a936e0f5d"],["/categories/中间件/page/2/index.html","a50aeb9171c719292a8dc0ccad57585b"],["/categories/中间件/page/3/index.html","cda33e1ee68074e48c1670e68804df82"],["/categories/中间件/page/4/index.html","12ab25505c676525f2f751199c0131be"],["/categories/中间件/消息队列/RabbitMQ/index.html","12c3f410a64b6399f7042f792aafb61e"],["/categories/中间件/消息队列/index.html","097a90ef757d6dd4c7e43a7cb2fa50e6"],["/categories/前端/Mock/index.html","e7ef45bc9c4f9cf2a5aa53cb1d8405e1"],["/categories/前端/Promise/index.html","f289baaa8d072b25a525291625970ad5"],["/categories/前端/Vue/index.html","1da4130c44df632cea857df82d0db68f"],["/categories/前端/index.html","14da9b723318895bc95e3b11418767d0"],["/categories/前端/jQuery/index.html","3bf6f21df52c01975aab79457458c39f"],["/categories/前端/page/2/index.html","50e5b3860a7fb9abd93fbb9745024f1a"],["/categories/前端/原生基础/index.html","c567ec5188adb997cc312eee9578ed70"],["/categories/前端/异步通信/index.html","f3997c0a46a06b589a54b3d1591e5b3f"],["/categories/工具使用/Git/index.html","ff4c5b083dba63a49da02d1ba3321f8f"],["/categories/工具使用/index.html","7b5d0801dfa979433eea4b45a2403807"],["/categories/工具使用/markdown/index.html","849d2f99ed0b1c246d8b0204a7b8b3b1"],["/categories/工具的使用/Docker/index.html","822c8b1cdfae936e788bda55ba93ab19"],["/categories/工具的使用/Nginx/index.html","280dc7c990313e4a28a104d217ff8d63"],["/categories/工具的使用/Swagger/index.html","6c7cab0e829047e64fc9241481ae4130"],["/categories/工具的使用/index.html","809171056b320636c171201204cd630d"],["/categories/工具的使用/博客搭建/index.html","daa7ee1ffce79b1a3939427371827e78"],["/categories/数据库/MongoDB/index.html","ba533cf653c843ab364464b80f29147b"],["/categories/数据库/MySQL/index.html","0bbae1da4d8b1d8317f073a2ec9cce04"],["/categories/数据库/MySQL/page/2/index.html","6c0bc0bf045827fa422f5c91e7d70a6c"],["/categories/数据库/MySQL/page/3/index.html","ea1ca069fdd8d84908463df2a35697be"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","d0050270bc4be077d65f7700589b7473"],["/categories/数据库/ORM持久层框架/index.html","5dc3c7781e41dd6cb0165a0bac9fff01"],["/categories/数据库/index.html","1541e62aca78b618c5dbae3b7295023d"],["/categories/数据库/page/2/index.html","991adfa430a4ef48834ebeefd7ae661d"],["/categories/数据库/page/3/index.html","67da485ae7c7cdc66babdbd573a40917"],["/categories/系统设计/DDD领域模型/index.html","4dcbe892d010838164a0abc156cbf6c1"],["/categories/系统设计/index.html","8d1856c5637bacdf433f38bce0adb2ca"],["/categories/系统设计/page/2/index.html","67db9986ac7c9ec8e5c8375a2685ed35"],["/categories/系统设计/page/3/index.html","9fac512ff05f4ee57b702625a8d38455"],["/categories/系统设计/page/4/index.html","91be07a8955cfe077c8f526d7ad747d6"],["/categories/系统设计/page/5/index.html","0d56a3183f573073039c1d20f67b1f06"],["/categories/系统设计/分布式权限认证/index.html","6fe421e6f712865733482de2b8a58705"],["/categories/系统设计/分布式系统/index.html","daf69fd4dd31c126223a3bbb47d51b9e"],["/categories/系统设计/分布式系统/page/2/index.html","50322bff959ce339f3dd0aa6892a6675"],["/categories/系统设计/分布式系统/page/3/index.html","c61ced9f9adc06949172287064675852"],["/categories/系统设计/微服务/index.html","d5b9b304a0a680764ba4c19d7bc317eb"],["/categories/系统设计/数据库优化/index.html","8651350fd7f13b6a2d675c8d3b343675"],["/categories/系统设计/设计模式/index.html","f4242ed2d29b9166b57c74874f610ac1"],["/categories/系统设计/设计模式/page/2/index.html","d77336cbddc2ad5268bd0b7e0d3b4a63"],["/categories/计算机基础/index.html","27dcdd30cc2f7a95bc521b3b30a3491d"],["/categories/计算机基础/page/2/index.html","70bc49be86707e496924e4de02077f0c"],["/categories/计算机基础/page/3/index.html","5111d6a7342f7e8890e8bd8a01bee5a2"],["/categories/计算机基础/page/4/index.html","00a687fb7ad32e70d646f36c48426478"],["/categories/计算机基础/page/5/index.html","5a344116f668035fe9ad3ac2036286c0"],["/categories/计算机基础/page/6/index.html","400f9b72ab787d66c6f842e860718f1b"],["/categories/计算机基础/操作系统/index.html","9cc719fd9d092a8336c24e535ded507b"],["/categories/计算机基础/数据结构与算法/index.html","f13196d4e0169401cd1e238f5225f82d"],["/categories/计算机基础/数据结构与算法/page/2/index.html","615466e15ac70b259efd853fffc5ccb3"],["/categories/计算机基础/数据结构与算法/page/3/index.html","c3768fd3ee377c328d69f18915b380a4"],["/categories/计算机基础/数据结构与算法/page/4/index.html","e67af581c2a1da1a52f72551b9a278b1"],["/categories/计算机基础/数据结构与算法/page/5/index.html","9cfd2f9911c52b92a501e2bc6b62b3e8"],["/categories/计算机基础/计算机网络/index.html","21ddc47e57ec4b102015dc868eedf447"],["/categories/计算机基础/计算机网络/page/2/index.html","2f4c2e04c8f0a839e5b40a961ca65584"],["/css/index.css","2af5ea34362e0b34f799106b2659ad50"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","aee70c99b165de4def459537854b8ef1"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","1fd80546ebb3fd1d134c7baf127ea037"],["/messageboard/index.html","c285d7c9dc4482567bd6a30dc213b0b6"],["/page/10/index.html","4ec9149d650db0c4936c45d10039beea"],["/page/11/index.html","c18674870d3c6fed74b5503ac43e4a6f"],["/page/12/index.html","41b048e38696d40f9010b0c76e9fb115"],["/page/13/index.html","3be38d1c2a69dec393696d6e8ef19cdf"],["/page/14/index.html","525429e131200d56d04a89aedbe9317b"],["/page/15/index.html","a7904db6d1b434d67de2e7a61ed5c426"],["/page/16/index.html","85bb53a63fce06e9ad40d753698da73a"],["/page/17/index.html","743872a63d5a23eb337b0757f44c49bf"],["/page/18/index.html","e1956dc3f3902c7ceff9c705b1e2b264"],["/page/19/index.html","bd5f11cf94f344cf01055e5707cb5f6c"],["/page/2/index.html","698e92e32c5e7afb90aac16c8975b2a6"],["/page/20/index.html","77558910731a6e65d333aef54684b175"],["/page/21/index.html","b1709b35438e4be8c936e04474310150"],["/page/22/index.html","d205404ccbcca91a303289c039e6fd4f"],["/page/23/index.html","740df70d909ed47bf11db82698f91baa"],["/page/24/index.html","2480bcd47183fe5bf4aa3b79d725bdd7"],["/page/3/index.html","9b444b9de7f98774445642a5b73c75f2"],["/page/4/index.html","81e10fc9c8baf2dc183de71683e35ffa"],["/page/5/index.html","d87f6ea57a1cc953d2fc265a2972c0f9"],["/page/6/index.html","0f10b8dc04b2eb03e724c90d7da502ba"],["/page/7/index.html","f661831c1f75d27788db88e87eb96901"],["/page/8/index.html","368c7dabab0a94cf4220ccae49c281a1"],["/page/9/index.html","d8ca509f81844f2d4ad987e86be93203"],["/sw-register.js","8cdeab6b86d6554f441fbfbdd419836d"],["/tags/Ajax/index.html","7c8cd22c04feb4c618bbf32f22ce8587"],["/tags/Axios/index.html","cb7183817124c22eb4c1ba2464ff34fb"],["/tags/BASE理论/index.html","9830da25dc34908719f4bc812a2fff6b"],["/tags/CAP定理/index.html","d742bc4fd743e3cce77ba6a2d1838d3b"],["/tags/CICD/index.html","5a5088073f197c1d00aef96defe07270"],["/tags/DDD领域模型/index.html","87b94593183e18de63ec8622fea999c7"],["/tags/Docker/index.html","51344dbbc8efe90e650a7ce353100e6e"],["/tags/Dubbo/index.html","e46cd4e462eff2bc193097a04c0e6cba"],["/tags/ELK/index.html","154d76d3fe67d19fd5fef174f12ff71f"],["/tags/ElasticSearch/index.html","06193335af575320847753ae19c9f6d8"],["/tags/Git/index.html","192ebcd1ce9d9adc6fbd9d51cc7c308c"],["/tags/H5/index.html","a858a6892fdb65b4a800138d78c6891e"],["/tags/HTTP优化策略/index.html","632a6b798bf8fc81c9b167ae0f50229c"],["/tags/JVM/index.html","a4c47909139980ff6f6ab19dbffa994b"],["/tags/JVM内存模型/index.html","54f53b3c0e31cdbaad341019f32de32f"],["/tags/JVM执行引擎/index.html","7242f6910b60a0f2fc90e26ec7828773"],["/tags/JavaScript/index.html","20f3a23e2b9ed0862bd4561f953653d7"],["/tags/Java内存模型/index.html","a2da5a2d78919953f7e55ee30e3e6949"],["/tags/Java进程线程/index.html","e57a07b514d29b2f3f3c85c5382ac90a"],["/tags/Kibana/index.html","4786d1d3ab86c1c22425972bd2a0a8a4"],["/tags/LeetCode/index.html","08953d38a850de25b66bbae10a4050b2"],["/tags/LeetCode/page/2/index.html","a7f1dde28f1d413fff569f5d0e904676"],["/tags/LeetCode/page/3/index.html","16dcab490ec0b23c51ebc40d7a247d3e"],["/tags/Linux/index.html","6c24b588a22995b89152f3aa24dfa518"],["/tags/Logstash/index.html","8d54505bc0fd80098eb9bbb644d3bca8"],["/tags/Mock/index.html","7f9aeacb259022ed6d757bc41c9ac414"],["/tags/MockMvc/index.html","d86b40814c01b6f9b34feaf2a013602b"],["/tags/MongoDB/index.html","5724467fecc34fc930615d58aaefad76"],["/tags/MySQL-事务/index.html","08c5ed8423597f3db72f0463b78b69c0"],["/tags/MySQL-数据类型/index.html","ffadc463bb4a62bf8eba6c7e0c43cfc2"],["/tags/MySQL-日志/index.html","a6455aba4067e9c58696ef9a4842555b"],["/tags/MySQL-索引/index.html","4db672d46b2477940fe15dbb47363dc0"],["/tags/MySQL-锁/index.html","718130acd52a69f67d93eddbb27bf57e"],["/tags/MySQL/index.html","e98804f9f02d593df2fb0296e273999f"],["/tags/MySQL/page/2/index.html","9f8950a721a5c22e011b35eac46db136"],["/tags/MySQL分库分表/index.html","da092c8d3bd007c8fbe4cbf04534475a"],["/tags/MySQL读写分离/index.html","7623096543288ab2297bc32a601752a8"],["/tags/Mybatis/index.html","356050b778051cbfd5c52fa0deadc718"],["/tags/MybatisPlus/index.html","205231e1faa5f51b0108f592d090e43a"],["/tags/NIO/index.html","66e9af70bc08094ba79bac9fce0ebd79"],["/tags/Netty/index.html","60e163dd706ca4ceb295e6b9e4787d61"],["/tags/Nginx/index.html","2cd389ed803833935ab93f6a31d785d6"],["/tags/NoSQL/index.html","47413eaac9d24d3b6d1684e37629eb31"],["/tags/Promise/index.html","be838eed0ca0be516bf49ebd643b03e5"],["/tags/RabbitMQ/index.html","87b1d5f0ccf422bf24f9954d17d50d82"],["/tags/Redis/index.html","8d8308773db2acaf9515c42d6195aad0"],["/tags/Redis/page/2/index.html","a936644d7866c1680d2101f3d585c423"],["/tags/Redis/page/3/index.html","97cd85dddbd8ca49720822d2aa9f1066"],["/tags/SSM/index.html","b2c87f0c8000a0570528c4fdad1ed0da"],["/tags/Spring-Security/index.html","b2059d502f3c156ea9746f6d83c51364"],["/tags/Spring/index.html","46a6ff0a1e169198badac84f3230fcc9"],["/tags/SpringBoot/index.html","bba9ee362cd1483b8e85e5d8adf986ff"],["/tags/SpringCloud/index.html","310e4f6fd60835bf4bbc48238225d77e"],["/tags/SpringMVC/index.html","b2dd769b179fa042e0fca71f4fd263a1"],["/tags/Spring事务/index.html","4cca0a0a46ff69b40f51bb57ab780643"],["/tags/Swagger/index.html","5377ad8e84f125b395b7323517cf3f76"],["/tags/hexo/index.html","eead6c7db3d49ea5b35011616e80e699"],["/tags/index.html","26a2966c23c12ddf55939964b0c569f3"],["/tags/jQuery/index.html","5bd4670af942f5682cc908e7d0cc78a0"],["/tags/java/index.html","9737fe5a555c7d194908e4a521601afa"],["/tags/markdown/index.html","955b7b6dd4f4b96952eb1196f1adc4dc"],["/tags/rpc框架/index.html","67853e34e5076355649ad50340f80f47"],["/tags/typora/index.html","1918e38a452d8989a9adaccf71547cfe"],["/tags/vue/index.html","ca186ec41618870778188fc290ca23c7"],["/tags/享元模式/index.html","ca1c1c71ba29e2d87c7193a7d1a537c3"],["/tags/代理模式/index.html","3a7f2526345c0a3f305c4a99d84a7f0e"],["/tags/内存管理/index.html","e8c4b94685623f11fc6de7d81c77399c"],["/tags/分布式/index.html","09b9b8dec887205c658dc5c016a4d6bc"],["/tags/分布式一致性算法/index.html","f018fd47cccf4a7501e9713367f35c97"],["/tags/分布式系统/index.html","7a173159bbefc4e75efc0ae6061d7482"],["/tags/分布式系统/page/2/index.html","5c9c7527e53e8ce08abda37aeb517cf7"],["/tags/分布式系统/page/3/index.html","92bb80425f21e5b1a992a110519c5795"],["/tags/前端/index.html","1e60e9827b86177bab0e3d1589fb6e52"],["/tags/前端/page/2/index.html","b4c896001190e1378c7804bf257ed27d"],["/tags/动态通知/index.html","851a2675bf0f22922908e47dd88713e1"],["/tags/博客/index.html","2cabb583e278f958a4dc21a19db2f19d"],["/tags/后端/index.html","3c56de4c957cd418f934f503823960b3"],["/tags/外观模式/index.html","b65aef3684e64c98fccc188ae2f7c401"],["/tags/多级缓存架构/index.html","62f35a95407cdbbc4677a2cc7a78d633"],["/tags/多线程设计模式/index.html","8a205a34abc4034c287b07a67453604f"],["/tags/多路复用/index.html","2e1b9551a922329ca9e6c9f5efb53eb6"],["/tags/容器技术/index.html","ff40e515dde015126d976afe188460e9"],["/tags/工厂方法/index.html","6c33e44fc8f9720267627fce011dd035"],["/tags/开源协议/index.html","787b7c5a5e85334919f65d5cd185687e"],["/tags/异构同步/index.html","14c57011af789ce9f69cb83a82ef3927"],["/tags/微服务/index.html","7630444b1687b1a665f202e88356ce92"],["/tags/微服务基础/index.html","2fd9f9b98f386a616b5fd0c0d63c3c71"],["/tags/抽象工厂/index.html","13176c22c3e43de84314e1762be04016"],["/tags/持续集成持续部署/index.html","ade62cc8e2b59f0c6663059c8c0cf577"],["/tags/接口安全策略/index.html","2361466207e358552a2c6a60eaaf6eb1"],["/tags/接口幂等性/index.html","36b3006058bc0c533b6524d108e8c51c"],["/tags/搜索引擎/index.html","57e4a25d5fd26c1e6eda3acb885b2916"],["/tags/操作系统/index.html","b65b70288ded47b6f81e150b17d128ab"],["/tags/数据库/index.html","3ca77b8aa771573f0213ca81a03bca86"],["/tags/数据库/page/2/index.html","4deea2da5fcb2383062dfece99e07b5f"],["/tags/数据库/page/3/index.html","613461eac3971deea8985731fe72e549"],["/tags/数据结构与算法/index.html","4f1f84d2e64baf7cae923980c322cdc7"],["/tags/数据结构与算法/page/2/index.html","5a140806829a59e5f67675213b590a8a"],["/tags/文件操作/index.html","b1dbc43638e4476eb5a66edda2d54440"],["/tags/日志/index.html","2eed5b5e4676b2a6a1e229a278a711a0"],["/tags/服务器/index.html","8f387473d0ecc20b5c8ba67bdca95aa6"],["/tags/服务治理/index.html","e2b9ec78c0a4a30dcd478ea70eafaa50"],["/tags/权限认证/index.html","e88030ae23aa8894fc930509e765c881"],["/tags/架构分层/index.html","76c5a9d677c16a43f4f4949854b68eb8"],["/tags/桥接模式/index.html","b19bead54e7473c6894c267210d68de5"],["/tags/模板方法模式/index.html","0ffcbc8b5f4243faa95db4dd73c8619a"],["/tags/死锁/index.html","eb167aa99f17ce0fca249cedb6608ff1"],["/tags/池化技术/index.html","38cf533769356beb6c080a04c212e3d7"],["/tags/消息队列/index.html","485dcd3d0e10a2cf2017f060693c88e1"],["/tags/版本控制/index.html","9830314ced6c317515c4d275beda21c1"],["/tags/监控微服务调用/index.html","bc321c324613c655bdfabc73ee820e4e"],["/tags/策略模式/index.html","be4e9482e295a869799b15cc8663adc2"],["/tags/简单工厂/index.html","fb20e541efe287a7de529137841db976"],["/tags/算法/index.html","35c95e8d0f92b76f71c0c8470ed29fcb"],["/tags/系统监控/index.html","3890a430e3414698d8e7fea2ee8b8c40"],["/tags/线程活跃性问题/index.html","49b67d4dcfd3761f2f819d80cd0e9be4"],["/tags/组件化/index.html","744b3d3eed75f8fa6887f2310e85c85d"],["/tags/经典限流算法/index.html","d11af24a5a3d2cf59a1e82497d2d9955"],["/tags/缓存/index.html","2f8418e5df8acd6648bff08405a2bf4b"],["/tags/缓存/page/2/index.html","90480c248e197c7fefeb951358ef292c"],["/tags/缓存/page/3/index.html","a69a667661c5362853ad378c8d2d1ffd"],["/tags/观察者模式/index.html","769960ff0e3206cfd129c112582bb695"],["/tags/计算机网络/index.html","eb305cc3ee22497f7056905489dc770f"],["/tags/计算机网络/page/2/index.html","e249226eb59fe75849a80c1863c47d27"],["/tags/设计模式/index.html","f7a4c868225fa6214e23db2998d6572e"],["/tags/设计模式/page/2/index.html","ce2ed32696a200d48100316767f8426e"],["/tags/设计目标/index.html","ed6d07c8085a8e092ba859f73019758a"],["/tags/资源共享问题/index.html","c516947015ad4c904c0b0adb03cca0e7"],["/tags/进程管理/index.html","6999f8f19c707564a71a2b2e31c1992c"],["/tags/适配器模式/index.html","6e5527797e5cb0dbf61bdbd56ca92390"],["/tags/通用设计方法/index.html","134eb08129aa1294a3a39b15aa2504c7"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
