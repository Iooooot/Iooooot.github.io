/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","9bc070eea3f16f8c7b7c8bcf98cb7867"],["/2021/02/22/工具的使用/博客的搭建/index.html","99eb17605a81a67f58d9203876785ff8"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","9f6ccc4f259c1f485ba44355e87a533f"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","8bb94d60a93f156b274e61f46733a971"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","f710d55b0bc91d331762771abea25b7d"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","1fa606a6f83a79b1090418f4f4cebfe4"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","e1234125718b2f9efac65d396eb90cb5"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","f3c8f7fff10bda1ee2b8c70350216aeb"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","bba526c25f7cdfc84fa707113ba2f298"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","acba37fd3cd8e88ce8384e41a49d2d61"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","ebe59a66a7c363fba8ff1b259696ce15"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","0d538e4bdb02e2e9b1bc5a5d03c7e5b8"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","915a8f43c46d77a3a9e91664949a36a7"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","19301a9ff9f258ae0d4e8ffbb153e816"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","f6c6fd428752d1067dc9b0936412da83"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","275f8e4b268dbb389e1ad23f493e0757"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","f746ad2ff8250f6fb78a44bd1831dbf7"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","2f4038ef10a8f1b628942f5b079faeeb"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","c92da6d86d016139ea510100b564d10f"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","dbde35869ad01ac8f631b767cebbce36"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","0b8fa51ddcb96ed80c2634e4981bd34f"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","c65bc3dbaa6e22b45a23b35b0123791e"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","c286e7fe88c931151a4ec88299adb33d"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","caedde48c50173f485f456b2288a111b"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","28dc8dfe8bbcfe9a04e42fe4cff47032"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","a942aa36cef8ffa676405d70bcb30481"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","4a852d36982c9d0465667afb174a85b0"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","f77f18e826f07fa210e31e4622f956ae"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","b864036348a9ebe23958081501118884"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","f9bf63fb4b5a817d1b3f3a9b5e6ec370"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","8749291a46b387e6acd7d07fe6e63ef7"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","53970716cba245641421f40e4fd31927"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","a99e3f5d4a9d58ee046c5084754c56c8"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","abe8a5f21a718c576146280856a7ce78"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","5830fdc2297b93f719c15b950d95bc80"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","f08940e8c5445e49a5565e8d9ea0ac78"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","1376678deb0a713bad6c39f1887758ab"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","70f48b70c2efbc9c0c7bbb50460b0b5e"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","9ccce2a49fa5139bb62ae0c716b9b65f"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","09ad87577e426093a493e72c6c3c2479"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","b51fde9fbe8c23324d1e7fc7c0d5f162"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","77f54678dae4eb08d47233a4e434c3a7"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","9635bdabfa09f38740cfa188550c7765"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","188eefabc93ada9a7bf9c07257231ad2"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","712bb1a2bda1a9e2baa488d4f2264e52"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","50bbe40e139086f28f4b8397d93dcc04"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","5f0aba3eb6724c1c090faef909a8eac6"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","a58ece1aab116c335098ef503c8b9199"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","bf59254158aa3bcba5e9dbd44be737f1"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","be2ccc361078524dcd60a1086b7333c6"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","998d899deefd60a17254142ad9d862a7"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","9c1ff5a4904d943d5c8fbb420c3b157a"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","699f73be2be1d8c91a40a8ede267e7bd"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","96c1d15b81e3fc0e7ffae471550eec3a"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","95783fd00d8f87f4225a9b72ec10bc32"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","39a7e3929dfe69b638fe9648562e4a0f"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","4cff746f697f78a90d1718a34c884f2d"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","06d2b107304336460c80d1467e977310"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","abbc79a90c242f2e3e2213261971f3d0"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","8e18611ad476812bc1dead3aad1082d3"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","a17d64e3fc960b6a7ae54dd8695e4cb2"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","8aefa5a1cddc8a445dc0cf8b9a59a523"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","77683715a5a1bafe7fb33e87383e8b81"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","59f93b3f41fac8afc54b43f6600b9d75"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","aa91ff2532ddd0cf83c2e4c6fb407dd6"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","2f6f204b35772b3906103775acdb2522"],["/2022/08/17/前端/jQuery/index.html","a6143516b0b896e667c1f70b14fe408c"],["/2022/08/19/前端/JavaScript/index.html","4325baf60dc1dc60dcc4e912c22e15c5"],["/2022/08/22/前端/Ajax/index.html","3e3d91370c380f96e277249e5ef6a12c"],["/2022/08/23/前端/Promise/index.html","6512e94c50b2dcd01a86139196662e31"],["/2022/08/24/前端/Axios/index.html","31c8c6251eeff638c1712106c52b4e55"],["/2022/08/25/前端/H5本地存储/index.html","f491c9b9d987c7b91544f348581ad767"],["/2022/08/26/前端/mock/index.html","b34ac924952c293d1c2cd8696ea3c002"],["/2022/08/31/前端/vue/VueJs/index.html","90f9c86a981b677ef560667d53e44d0f"],["/2022/09/01/前端/vue/vue组件化/index.html","9ee015ca7dd0255691c737b8c7f40c55"],["/2022/09/04/前端/vue/VueCLI/index.html","063e69466467b9d3578c1296e6d786d7"],["/2022/09/07/前端/vue/vue实现动画/index.html","481a2b3a062a33800780031259447274"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","2480f606cf91b37a51e8004d847b7f5a"],["/2022/09/10/前端/vue/Vue异步请求/index.html","ca7f934e536eb05c9a4e019f81029241"],["/2022/09/11/前端/vue/vue-Router/index.html","6c977a626a5dae3b140090f0aee67dbd"],["/2022/09/13/前端/vue/Vuex/index.html","c6ce97601e14d8c89d0fe7056b2bdf63"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","46dbc299152809eb8d7aafcd77eb09f2"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","766ca48b534aad4444bc5236afa108fe"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","8e11526ab9f18d5669f0854e5bc480ff"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","5c8d0af3e7b6531a396dfdf13face590"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","ce8cbeeea30bef66be5d81f3c1247229"],["/2022/09/28/DevOps/Linux/Linux/index.html","942c1346f5504e3af33fa0ec00927a56"],["/2022/10/02/中间件/Redis/redis基础/index.html","d11fcd5bd1b1d253a3332bb3f7f1420b"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","06e17beb805afaf823853b89ccc5a21e"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","2ebafea447b760f189a099024a735924"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","4b867f902fa9f52bb30f8b7dc2123b79"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","7a350c4a16349a4f0afcc5bfe11ea7a8"],["/2022/10/17/中间件/Redis/Redis集群/index.html","10c00a1d10cc4ce66b8e197aa17190ee"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","1a1ab90ce5e3e40445d1ba870be7907d"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","cfaf487eaa65d7cc50d6a33f82f01ddb"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","bfe6f257aa5b2324b3fbb334bc352027"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","87406cb75644840c258595f2aaee4c3b"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","b9b7121d60c66db33212218939eb89e2"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","c2b088501f46147720817ba3829cc992"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","628894fcb2930df10f679f85573e0e9b"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","6c63eb8edd9e2fa00cb65f222b800404"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","f61b93ec6ac246f7818f178c49436b38"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","51039b177e7880fdc593815323c3954a"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","7a2fb0de6f7b5dca00d8d7776766979b"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","818120837c42f0809bde262b872b78b0"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","5671de1179241e651e609267248f1021"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","716b0a92272e73009989ec4840c22dc6"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","23444273585976bffc4313d3e78bcd0a"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","4854fb9bd90ca33034beb84217804fce"],["/2023/03/10/DevOps/CICD/CICD/index.html","91b8e30e186d720f4aa5b00727bc6285"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","c5b94e0aa22860ee61e750f6eb3f6cd1"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","27e8ef67a99c72d268aa9e74bf56f203"],["/2023/03/13/Java/NIO/NIO/index.html","7ce28dcc15956236b9b596f646122404"],["/2023/03/14/中间件/Netty/Netty/index.html","c3cdbccff21d2bb779429c79d6a92e9d"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","ffefe0bb1a7868035e7c3d416ca7f004"],["/2023/03/17/系统设计/分布式系统认证/index.html","914200b13db25d4d48ea1bc84ce5bbcc"],["/2023/03/19/Java/JVM/JVM概述/index.html","99850361060a1f860156cf2bed8d1e5f"],["/2023/03/23/Java/JVM/类的加载过程/index.html","505827c48e676af481e516f19bb8bc98"],["/2023/03/28/Java/JVM/对象的实例化/index.html","085d833f4d6bf16c8b1a1457b6f51f26"],["/2023/04/01/Java/JVM/运行时数据区/index.html","507c88293bfd2b447f2ab4f16ee50aa6"],["/2023/04/04/Java/JVM/执行引擎/index.html","f9e651b96adfd564c24b44f31cdc07df"],["/2023/04/06/Java/JVM/对象引用/index.html","6a87448ee0e971a2978ed2e1b16c6254"],["/2023/04/09/Java/JVM/垃圾回收/index.html","159443c3bb0df921dedfbb379ea13f22"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","e870456afbc4952be2ac6d1a25bfc297"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","38c136b9e7d7843167e962e686144b49"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","9140a71c94664cfb1c0641749d873f30"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","181ed786526db012d5da2227f0903443"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","e758f40bff24587d8949869b9feb2fe0"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","6ad5b6e1340c2c8631fdc293520c6661"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","4ce946cb052ae722abc0fd2102a16921"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","b4c45117a119ff2cc2b107eb3dd8a2fd"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","16e9aca66dd0a14bf8fcd878e7753a26"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","8913746ce7cbde4d19eda58ed864f0bc"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","e6685b4cb5cd37867754267c7e5a2017"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","71c00f528bcd599376cf0d7aae932151"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","78bfb2e998f1232aa889935b5085a3ec"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","fc33f4ed7c26bb335d69690ef98b6599"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","e2165611516441c5c2f5e1ee32016f48"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","c38f0275b3dd462bd30b7072b4130e71"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","b3496ebb15ef542df199ee8351ae6d6e"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","f51b29e8b5ca2b2d6b97bfa56e9d8928"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","eb772a340efdfd38a6142ff231ed9119"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","b0bd572bfba091b73dd8a12b557726db"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","568d824a191eafa9f0df667a392a3334"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","64901b8a552bf222564cc9c903edff3a"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","22801a394372e2f1814cfa5e14c2baed"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","6eddf1e24182f5ff5ea5a295ecab1e4a"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","c0ae2f0140b16ea4daa1e5aaa6b8a21e"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","d7946bbabf5a79a7ba646b6ab776af83"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","3aa98b432a35dea4f413f2192979ff42"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","742aec36ec0fefa4bcadfde620ba3c4a"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","8f008c45094a46ad8ee2772c4b0f64ba"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","6936ec99e8f9568f706dcdd6c0f768cc"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","854b079805078a266a98346197362b78"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","f58674cb2f65ef63ad7e6ae53ae7f5aa"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","7dc06408d0d585d237fc39ef03881868"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","24a1c6fc6c37e738cb86ac8fae05bc23"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","6b26d6acee2a320b5a078d7df79263ff"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","a0ffdeab2bae27aae37d49bd106c2615"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","ae752e4197b6eb06924b1edca12c5599"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","d0a210ff12cfe06bf7858251f308803d"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","496f52a1a44dec36101cf5dd9cface75"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","b5225a7a6004438f0a4b9a53a5b02410"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","dbc23905c673fe40003e62af27252275"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","c367588b21be349d30e8a0b0e4686132"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","660d98ebd52235af8e06a63738691b36"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","186963ecf15cca004613ad8b22a82751"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","30534045874adb8694a244d69441b838"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","76a7f2baec3b628403989a66717914fa"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","97995ed1c6deec53e4f2b85ed3632593"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","1932d275832075a5feb4984381302f84"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","ff0beeabfdcc7072c3bf614b054fa60d"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","5e44d38f54f43d493eeb72269be09381"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","a1d4c20ebf934d1e5bd0f01973bbe67b"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","664b3a4d3b013b26edbee56addc00c1e"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","0a37df7e8d69be6884971e0806682b05"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","1af3d0e24fd3eb8ee39d3515aace1df8"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","6879c984b7dd2ae2390c2b4fa398ff66"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","3ee0cc2fe1cb176fbcf5059c4d98644b"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","aa130d311959cd77f8511c29cc806633"],["/2023/09/04/中间件/Redis/Redis事务/index.html","f17c689bf069ab403240255c8f4e8910"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","eee1264dc362a858ceb36707cc1896dc"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","4c03f6d23f59ba1d1891f83e3c323ebb"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","f460bc0f3416ce37cd4a0cd32b1db1ac"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","f120031d9a391ad71d49c42ca4f70df4"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","77dccbb2a464e17d7600452f3d6a7ac3"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","cc57010c0bfba7e85baf69895fa08050"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","74fbfc88f77c981bf2246abb29c7cc1c"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","e2c0d30ee7e078025703cdb0b51c756f"],["/2023/09/22/Java/NIO/零拷贝/index.html","15151e40821701635de93be31561b5fb"],["/2023/09/24/系统设计/JWT认证/index.html","7ee1dd165f178f40b7ec1b81851c0aac"],["/2023/09/26/Java/NIO/Reactor模式/index.html","71d73ccc93fb420953b5f2bd9a4ae885"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","9f0160751a3142c5d50cc174f946ff09"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","08d5fab3ef74534e2883fd5c0358e6b8"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","0188e8553c4284899eb843f3806aa2d6"],["/2023/10/09/Java/并发编程/共享问题/index.html","377aa1336c4cabd8bf2cc662d179c2e7"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","8a2e6b192b576ec37ea183626be1abff"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","d5169c6dd6024b8bc64fd669e637b716"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","73e52358bfe3916a35ace548895ed291"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","0b3f55ff290076bdcd04c1ec8dc6d343"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","1a41b7e25f012e986e3798d6a37075a3"],["/2023/10/23/MySQL数据异构同步方案/index.html","9c85daebd4ddd1c7e250255e9409cb11"],["/2023/10/29/动态通知方案/index.html","108f5e1d83b6ecf66f828ba8b2fb8a22"],["/2023/11/01/多级缓存架构/index.html","11009b9c5c177d67d6a4d4cf9132cf14"],["/2023/11/04/分布式一致性算法/index.html","9903da2b41b5ebe273b362a0137c148e"],["/404.html","c10063b2c7ce923f82d38820a6780d62"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","c651fc85c8aa8b084189a59cd23d1678"],["/archives/2021/02/index.html","6b656586f9f4466b27f0a89341676cc9"],["/archives/2021/03/index.html","8b3fe7ae26c7cbcc7c609e391d643d64"],["/archives/2021/03/page/2/index.html","bb1912c4e9bd210594d42192fc4c08cd"],["/archives/2021/03/page/3/index.html","575dcceb53013f15053aa61958421b10"],["/archives/2021/04/index.html","fa1502d5aa0b5e4f5965c8ff1485eb32"],["/archives/2021/04/page/2/index.html","48a93c00aea9336618e08fa10a5fd61e"],["/archives/2021/05/index.html","27eaa13b6373d5162bb7d83362acee14"],["/archives/2021/index.html","99ff3b41c73705b84435739bd1ce5ad9"],["/archives/2021/page/2/index.html","eb2653fcbe3b615c0263be7170b859ca"],["/archives/2021/page/3/index.html","cc27572fb10f5502a8fe3df69e903705"],["/archives/2021/page/4/index.html","06d1e79b7f17685fff85dd9c8353d3db"],["/archives/2021/page/5/index.html","6bbbd676663f34aff3a2f3b6948755e8"],["/archives/2021/page/6/index.html","89e982e9721bf1357776d91e2652458a"],["/archives/2021/page/7/index.html","53e0c5d06adad1c881d0bb3fe80c1263"],["/archives/2022/01/index.html","1e75d515e77e7f48a27c910d540c6c75"],["/archives/2022/04/index.html","60e1513b203715fb83cc3bac248f645b"],["/archives/2022/08/index.html","e9987ab90313b9e6052448df4cc1f6e4"],["/archives/2022/09/index.html","a6fb206a787cfbfb56876ebcc017d813"],["/archives/2022/09/page/2/index.html","91f75830d43ca714240f42157029b288"],["/archives/2022/10/index.html","627007204242fd0e026af10cfab5b0e1"],["/archives/2022/11/index.html","13b0c681cca633760756b85aa103dfbd"],["/archives/2022/12/index.html","e8df8475902ac0cb22bbec965d370ff6"],["/archives/2022/index.html","9d591a8ac72aef5fa00c1e00f3b7919b"],["/archives/2022/page/2/index.html","8d300081dd5b5ab2c51acc42e4f3c3ad"],["/archives/2022/page/3/index.html","17a3c2caec38770dbe7cfd38286a1a53"],["/archives/2022/page/4/index.html","55ec317fd59d38baac52567ceb09a6c5"],["/archives/2022/page/5/index.html","95bf7d205ee9c2f1ec386ad359dcdd36"],["/archives/2023/01/index.html","9f019d1b243dcfec444a578b9151e0d2"],["/archives/2023/02/index.html","026f68d384132036f5e744e2414b64ea"],["/archives/2023/03/index.html","6134347ca679c560f19a5ab00dddff5a"],["/archives/2023/04/index.html","29a99790b1ac53123263be0174c63de1"],["/archives/2023/04/page/2/index.html","bd94cbe122f602cb8325c72e28647c6e"],["/archives/2023/05/index.html","10bac12523d968c4c37088d843772545"],["/archives/2023/06/index.html","58f24b65f0a6ab7abb549ae9986637e3"],["/archives/2023/06/page/2/index.html","09a60d3a38023013d962f89e794734d2"],["/archives/2023/07/index.html","d87cf97350c9e17f52e7657db7582e02"],["/archives/2023/07/page/2/index.html","9b5145dd9c3dd27f67d46b6ad2bbb560"],["/archives/2023/08/index.html","f3319639d774c441023f857ea7b744b0"],["/archives/2023/08/page/2/index.html","c2aa01ceae3b1d385dc3205e2041f1b8"],["/archives/2023/09/index.html","8d31e98d3244d64b456c55d35bb7d513"],["/archives/2023/09/page/2/index.html","bc778dbee04fb7b5e33e6fb9e947efbd"],["/archives/2023/10/index.html","3547bf8de87484da2948725ef8f62b39"],["/archives/2023/11/index.html","f6069a997a74f7a6248dc8a32445a247"],["/archives/2023/index.html","b882050b4046237a65801b7f485a05f5"],["/archives/2023/page/10/index.html","aed5dd3ff15ec8ae724d8c52b473db58"],["/archives/2023/page/2/index.html","1a21ede861d1aeda7c9bab290afe83ad"],["/archives/2023/page/3/index.html","9a5dc49d9c108cf8c10d6f6b96d7fe1d"],["/archives/2023/page/4/index.html","9057b11512353a243017f34119785bd7"],["/archives/2023/page/5/index.html","0eb08887708cf2eddaaf03a409343a5f"],["/archives/2023/page/6/index.html","0883462e4079303aae8da5cb13b36e86"],["/archives/2023/page/7/index.html","825becabd531bc7a47a1a8d326397abc"],["/archives/2023/page/8/index.html","53414621b38bfde00842922ee8fab6b0"],["/archives/2023/page/9/index.html","9e0093cac71dd5df591eae2fadc06f0b"],["/archives/index.html","4b02afbf9bd6af69ebac16617c888eb7"],["/archives/page/10/index.html","9748e4a7a8cfd6b1e3a8be57bb4581ab"],["/archives/page/11/index.html","0d449a6c62ea7e774eda92164085b2c5"],["/archives/page/12/index.html","6d090c947f6e830b0e7d787baa28bf20"],["/archives/page/13/index.html","f89f33b6f6db2f800de2f0719bcf6570"],["/archives/page/14/index.html","70ac440ac33789c74857f20d3ab5c4b5"],["/archives/page/15/index.html","0a5d90ebd2f669fb515208ae147ddedc"],["/archives/page/16/index.html","e723849121c2d17cd8385f6d58f1c81b"],["/archives/page/17/index.html","affb097e968e579028c336395065254c"],["/archives/page/18/index.html","4615a4838f6998b29ec31ada8125142d"],["/archives/page/19/index.html","71ae3f683cf2d8768b19eb24fc4a7af9"],["/archives/page/2/index.html","9e4e50bf936c3552d1743c447e7e57d1"],["/archives/page/20/index.html","7969a55e673c211954df0bc102a1f145"],["/archives/page/21/index.html","95bb331c95dce34c254db2bef9f1debe"],["/archives/page/3/index.html","8e038905dbc0e0d4b93ed44d25c3b675"],["/archives/page/4/index.html","33bbe7a68e0215794f7f767e7d331cd3"],["/archives/page/5/index.html","368355e87eddca756e2881f9c97c630b"],["/archives/page/6/index.html","1e652af7adce65589965dbd45d9d54d8"],["/archives/page/7/index.html","4a49fa84d1a6d3b0cbda9d8bf7847cb5"],["/archives/page/8/index.html","eb37987bc0d0a649ce0d1c526e27e401"],["/archives/page/9/index.html","b1988aa86c168df4bb2b6c195640bdf0"],["/categories/Devops/CICD/index.html","1dc8788d9c88e58e79c4f9580cb58c0d"],["/categories/Devops/Linux/index.html","9c1ec1dc5e91aa775a2745b2f124f3ce"],["/categories/Devops/index.html","78c779606820a5ca5951762587ff8183"],["/categories/Java/JVM/index.html","0afbd78dca522c3c5df02c51b8d19196"],["/categories/Java/Java基础/index.html","48f4eba2ad9d3c6f7fe584b0a711a7ad"],["/categories/Java/NIO/index.html","7c99c9a4e69f2a2efb29bdb6234fbe7a"],["/categories/Java/NIO/原生NIO/index.html","0d655e2412224686806132439cb92e03"],["/categories/Java/NIO/文件操作工具类/index.html","cc52cb097f90a9fb9b73e78436a5c303"],["/categories/Java/index.html","09e827e18a8d03591fe14f2d4df632f0"],["/categories/Java/page/2/index.html","0bd9ec3f3369c39c32fcf0427b243030"],["/categories/Java/并发编程/index.html","d77058adf536b9866eab39c07e805271"],["/categories/Spring全家桶/Spring-Security/index.html","0b7880910dff393ad9a8751944d06c30"],["/categories/Spring全家桶/Spring/index.html","0260ed2f18b42ebb5e232420d703aa1a"],["/categories/Spring全家桶/SpringBoot/index.html","0fc058672993f419bb44af089c09f7c5"],["/categories/Spring全家桶/SpringCloud/index.html","271247707548c574ca53dde3e7050f3b"],["/categories/Spring全家桶/SpringMVC/index.html","56c2bfad236aa781f249fabcbdca487b"],["/categories/Spring全家桶/index.html","7183905ec157c162a61489d0f27b67d8"],["/categories/Spring全家桶/page/2/index.html","eb217b06dc00cf48cdf7a5af5d9e28cc"],["/categories/index.html","8dbfc770dcb71acb4ae8da0e14b4994a"],["/categories/中间件/ElasticSearch/index.html","756d0892896b1f35019c43927312eb5f"],["/categories/中间件/Netty/index.html","6001e7a4d466d255a11cc81f4704b143"],["/categories/中间件/Redis/index.html","03de83bee952fb6b3a411a6e67f49d37"],["/categories/中间件/Redis/page/2/index.html","fe9acf8db4ea86b6d9b7a00a9155da7d"],["/categories/中间件/Redis/page/3/index.html","079ba91bd59ce8195ff4797bffd1a330"],["/categories/中间件/index.html","11012955a98ec9ae8267dae8a82fdfce"],["/categories/中间件/page/2/index.html","9ed45cd9be198bcd823b1e01b910f7da"],["/categories/中间件/page/3/index.html","32b8e06ffad98b58ef80a6050e4881bf"],["/categories/中间件/page/4/index.html","cda6e5f5bc892c83185584228ae73040"],["/categories/中间件/消息队列/RabbitMQ/index.html","816cf082b30afa27193eb7bd644c741c"],["/categories/中间件/消息队列/index.html","a67ab9816a51d822cdd5586589af6873"],["/categories/前端/Mock/index.html","d64db7ca25ccde90619f293f4bc8d031"],["/categories/前端/Promise/index.html","68044547e3ba51a8bb2ae2bce5c7070d"],["/categories/前端/Vue/index.html","b3286202ab336deca4e41a603fce178b"],["/categories/前端/index.html","2e6c8298d643a6f5d8d73dbb2db9190c"],["/categories/前端/jQuery/index.html","c2384ac42caa5021c372acc1f8e0cf37"],["/categories/前端/page/2/index.html","2e8ffd187ca6c48c7c44893a78dfffe4"],["/categories/前端/原生基础/index.html","b3ac1fd9850ad740bba13f46d96ac3f1"],["/categories/前端/异步通信/index.html","3bea90598f1d36910cdaf50c11db701e"],["/categories/工具使用/Git/index.html","41ee06346daa425fc379d72bb4ff9d2a"],["/categories/工具使用/index.html","ff4df8d2d03958d6093a0c5335bc4d58"],["/categories/工具使用/markdown/index.html","9e1b048ae6aed03dcd7b189f8ef63631"],["/categories/工具的使用/Docker/index.html","394580815eb6e5afacc998feb58e2978"],["/categories/工具的使用/Nginx/index.html","5510f349df55f11e5f4a04c1e0f17943"],["/categories/工具的使用/Swagger/index.html","f8c1718f0f3cf4fbd0daa8526a1d3c54"],["/categories/工具的使用/index.html","afabce5dd1a17b72019fd1129f7b22eb"],["/categories/工具的使用/博客搭建/index.html","14f8ecf5e9440151c52a71644bdb6c8e"],["/categories/数据库/MongoDB/index.html","3bee54e8727da131d249bd2e4e5d734a"],["/categories/数据库/MySQL/index.html","afbfdb61f9fadd16af6edf250ddd555a"],["/categories/数据库/MySQL/page/2/index.html","08da8dde3f94e34ad8ed26c39436a8f4"],["/categories/数据库/MySQL/page/3/index.html","641ae664b2ba86526b4ab68ad9e1c1d7"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","2e85926e31beaad658bf15119f9dcecc"],["/categories/数据库/ORM持久层框架/index.html","fe0acff22295146207913fb946f38299"],["/categories/数据库/index.html","8e01bb084f9f3a36cdf42213059874b0"],["/categories/数据库/page/2/index.html","fb434bc62df1db3fc325c0ee586711cc"],["/categories/数据库/page/3/index.html","97c283b2e2240d7b7b608c02c34285b1"],["/categories/系统设计/DDD领域模型/index.html","910dae09533f8150c756b132169fb8f5"],["/categories/系统设计/index.html","02e09afe9869f4cef30aaeb926e88e6c"],["/categories/系统设计/page/2/index.html","447aaa62d88a61710b3bcf8c9bd97cda"],["/categories/系统设计/page/3/index.html","e76f82c0b0f5a38571a413876b6bcac3"],["/categories/系统设计/分布式权限认证/index.html","240a0c237fd72df39bbd0277cb495403"],["/categories/系统设计/分布式系统/index.html","3ce8227aed95288ea7253f86b5e04858"],["/categories/系统设计/设计模式/index.html","f44ab6a9530df3ae49bc962e7553e79a"],["/categories/系统设计/设计模式/page/2/index.html","f08defad8a576158567a95da53e482b4"],["/categories/计算机基础/index.html","026685a89950ce5b2828f6de4fffc585"],["/categories/计算机基础/page/2/index.html","932cb5653f0ed88bdb21fdc8540247c0"],["/categories/计算机基础/page/3/index.html","8b9df3cff1d7777847b3e5d2770e5b1b"],["/categories/计算机基础/page/4/index.html","a91793003cb907c88bdbce11f3b419a6"],["/categories/计算机基础/page/5/index.html","01c459e6debc51ea27413ae816a12153"],["/categories/计算机基础/page/6/index.html","8175d5f6bbc69aa8fa8146d640fbe17d"],["/categories/计算机基础/操作系统/index.html","ca499901cd9bf9061e49aa230d8eedeb"],["/categories/计算机基础/数据结构与算法/index.html","733247ba456fae468cc3f6ae14a0d198"],["/categories/计算机基础/数据结构与算法/page/2/index.html","ee3f6373e25d4f35003beaf760988688"],["/categories/计算机基础/数据结构与算法/page/3/index.html","a14700640e260e895c998bcf9d43ef7a"],["/categories/计算机基础/数据结构与算法/page/4/index.html","7d1485340a2c26f53bf457fa2226529c"],["/categories/计算机基础/数据结构与算法/page/5/index.html","b9b71150d774bfcccd54cc27619c3af4"],["/categories/计算机基础/计算机网络/index.html","3e231bc6dc62555aa10a6472cf8bf3a8"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","43d492e6e7fca52e76d62eb3dd723dfa"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","e098bc2dd4459bf6bf5ec1c6850981b0"],["/messageboard/index.html","38e1bd2f343f3ce1522290eda7a4021d"],["/page/10/index.html","96ce9d9083a837df72975a27917fba53"],["/page/11/index.html","81bb9ebf5c968be3db8f50365e3294da"],["/page/12/index.html","28d79306205a2c8fc95db74cf82b7223"],["/page/13/index.html","867334e286c79cb85144bbf744d6c918"],["/page/14/index.html","acd47ba5d4580dfd338710bbd5c7ff3a"],["/page/15/index.html","72337e16372da82bfc9f90aed476f7f8"],["/page/16/index.html","f7ac26b5393f6676845bbb501d7f1ab5"],["/page/17/index.html","2cba951a57b8572ee267d3881ff578a0"],["/page/18/index.html","a1eb4a31c7987a12a1a200a08bf0da9f"],["/page/19/index.html","6408cfe3b59713a84d8776b88f261ca1"],["/page/2/index.html","e2c0ba9d0bda289233080e6f8357bf17"],["/page/20/index.html","423afc57b325a1d853d4be2dd38cb3eb"],["/page/21/index.html","3ea421cf41febb827b0ffe223e98e678"],["/page/3/index.html","45c86cfb61e437b0a2ab9def5f555dbc"],["/page/4/index.html","e42bad1046593e5accb8e3134d4b5877"],["/page/5/index.html","5bd9439e6bd886fc0dc5cd935130eab2"],["/page/6/index.html","c1d1e0d55f6e48d9e42b480434ed9176"],["/page/7/index.html","f9fc5896f7b830b3ab015253dcf62e15"],["/page/8/index.html","a52d3b99b5979bd8788e64c3aff0af56"],["/page/9/index.html","19c6a9f324b6070c0f2de5d8fd04c7f7"],["/sw-register.js","5d3930485bf9faaec1a394f092123da3"],["/tags/Ajax/index.html","ef90b1b60791ce3f5cbe0eec4450c670"],["/tags/Axios/index.html","8e860dde4f1a7a9b66f97bf55b1b3603"],["/tags/BASE理论/index.html","5d8f76be328b72ea058ede94656c5d11"],["/tags/CAP定理/index.html","c366d88e2e2de6ad5291b7ed350ecce2"],["/tags/CICD/index.html","a003a72628755fa52cecd5a34b288c16"],["/tags/DDD领域模型/index.html","365e76e36dfa9febc441eeae39bccdc4"],["/tags/Docker/index.html","5c36ea933c9bf0721a0ce1a6b0c9b4bb"],["/tags/ELK/index.html","0a330ec3fbddfff93905abee42d9aa93"],["/tags/ElasticSearch/index.html","c214efa5b7567affb4d884fe282e0fd5"],["/tags/Git/index.html","442b0a4a148e00b5b471fa6d3b8c8113"],["/tags/H5/index.html","01de0ea4d7e7f8e2be7f6f1aba868739"],["/tags/JVM/index.html","50a0d407fad191fe47f8e91c642b2f5d"],["/tags/JVM内存模型/index.html","3cb2aefcedf9a71bd2aaa1a4f0056c10"],["/tags/JVM执行引擎/index.html","07e0f1fc67349978f3e247dbca0324a4"],["/tags/JavaScript/index.html","2ab97ddafc9ccadcd5bd4a928102fd7c"],["/tags/Java内存模型/index.html","5e7e497b986de65ddc104d68a81786f3"],["/tags/Java进程线程/index.html","a33431aec7a7c5dc674bc34b1a4c55b8"],["/tags/Kibana/index.html","4e9ad655beda6f21725037dcf9d433ca"],["/tags/LeetCode/index.html","f2047bb9ac8911be2259f5e4305be4d9"],["/tags/LeetCode/page/2/index.html","6baa836608ec3b41d4133945c82a59ea"],["/tags/LeetCode/page/3/index.html","7dc056eb6533b979c48e225884771a7a"],["/tags/Linux/index.html","5ae4fdc0c25a81f790f2b406683f9c9c"],["/tags/Logstash/index.html","a0ee3927e58ad9701058c4bca35c2142"],["/tags/Mock/index.html","8ee3660a0679f2f32afe8682e5304cab"],["/tags/MongoDB/index.html","8fbeac030b1430a9a489042a4c85183e"],["/tags/MySQL-事务/index.html","93d2adbffd50c714b8865a29f166dd4d"],["/tags/MySQL-数据类型/index.html","06052557df3297a4b7c57baaccbcb01a"],["/tags/MySQL-日志/index.html","f855bb360086e184be7824533a2921fb"],["/tags/MySQL-索引/index.html","9c1a2a910152136e143349a654a88226"],["/tags/MySQL-锁/index.html","3cfdb0de8f323b9c2fe6c68bf50ab17f"],["/tags/MySQL/index.html","5ede6cecf96688e68bb4f45112274f80"],["/tags/MySQL/page/2/index.html","d1978b1ef441f98fb008a410a6265188"],["/tags/Mybatis/index.html","a8380cd8ff6c6a2bb4501dbd101a5fc9"],["/tags/MybatisPlus/index.html","982191dd5f28b1aab536fe224ba90a3f"],["/tags/NIO/index.html","0682cb496ec99ffed0518df1f82cc944"],["/tags/Netty/index.html","db7dff5e42dca05d64675a18feeb9508"],["/tags/Nginx/index.html","5d02569f38ca3f02501f23f96fda7182"],["/tags/Promise/index.html","e280dc89b5b9f46522bbaac6837f83d0"],["/tags/RabbitMQ/index.html","4afc200758a4a4cc385cee1d512f548d"],["/tags/Redis/index.html","52604678dc4f51845f4fbc42ec9d8320"],["/tags/Redis/page/2/index.html","ddf13168d4759101bf533a08d6872286"],["/tags/Redis/page/3/index.html","abcded94e0208c8929219b3d8ba3494a"],["/tags/SSM/index.html","32d63391df3defad4c80d3551a85530f"],["/tags/Spring-Security/index.html","f716ad5c505784a5217c4ee5bda75a7c"],["/tags/Spring/index.html","864146c885d949149b44cac39f7ef37c"],["/tags/SpringBoot/index.html","dad779c130bdd549318b7b3690703e78"],["/tags/SpringCloud/index.html","f58fdd41ceea78743f5390b9191cab2b"],["/tags/SpringMVC/index.html","50c3281f0b410272adbe24cc23451e28"],["/tags/Swagger/index.html","30801b71a879a843fd5483a6a8e5b5e1"],["/tags/hexo/index.html","6100799f395c29bc9789f76221eb72aa"],["/tags/index.html","9ad1cddce99e5fdec58d201ef041b3ec"],["/tags/jQuery/index.html","328e46a40347b40521379c2915ad0848"],["/tags/java/index.html","99a12ecd81f84aa4dde859690046ba88"],["/tags/markdown/index.html","234cad2091036d64d7bd2ee7be4d6aee"],["/tags/noSQL/index.html","98c7eb49277af7dacc09faa1897b298e"],["/tags/typora/index.html","5e454b88a2088069e25e3b64aa962d87"],["/tags/vue/index.html","df9b71ca0118a4414c8dcaefc57907ca"],["/tags/享元模式/index.html","6b1ad05b52ecf4de7edd20de5f7d00ce"],["/tags/代理模式/index.html","f82e9bb9db97aa22747c7125bbbc17b1"],["/tags/内存管理/index.html","06d14fb386c731f1ee9327f4121629ec"],["/tags/分布式/index.html","dd34c5b770e7bcee3d8507e90d66ce6d"],["/tags/分布式一致性算法/index.html","10b5aaf16e8d17863744b057e4752923"],["/tags/分布式系统/index.html","969238a181b665ef4b2fb3cf05d1bbac"],["/tags/前端/index.html","123c08b52f2a2c11be469488db2d30d8"],["/tags/前端/page/2/index.html","d765491c142af394132bfb6432a72d15"],["/tags/动态通知/index.html","ff71beff97a9f5f4e8702a5ed39a3d0c"],["/tags/博客/index.html","a9b43744d30c658ffb8efbf997a21aa6"],["/tags/后端/index.html","da6c8ed059673c9fd9addc6be1f31a26"],["/tags/外观模式/index.html","6c19b2eb5fd9c4c7469868e115769ac6"],["/tags/多级缓存架构/index.html","d796c999c74f60a9cd58c0ffe8b2187c"],["/tags/多线程设计模式/index.html","f275b51b1680f6da1de83ad7ab32f2db"],["/tags/容器技术/index.html","d83a00fd4e9ffa189feb64f4f618cb62"],["/tags/工厂方法/index.html","c04cf6640fa661ac259419089b01ba7c"],["/tags/异构同步/index.html","3e045f28c483dc3b4b86893b2cab1295"],["/tags/微服务/index.html","c9fa36499b6ff20a369c57e9d6314468"],["/tags/抽象工厂/index.html","288b6d267313ed778d9e6c1fcf0e4fdb"],["/tags/持续集成持续部署/index.html","31bb9d92518506f559b8c1320cbe8587"],["/tags/搜索引擎/index.html","b87fe4263bbc2d8e9a4f946da5356d3f"],["/tags/操作系统/index.html","08100937b82fe8d570039b2ad8e5be45"],["/tags/数据库/index.html","75f5abe21866c5386e024e4d49b105cc"],["/tags/数据库/page/2/index.html","661ee0720b872863364d14e5bb917bc6"],["/tags/数据库/page/3/index.html","3c9cd2b6f10bfc6015b2ee30456d16c8"],["/tags/数据结构与算法/index.html","d7b1b0169ff2527312d33c02048e7a12"],["/tags/数据结构与算法/page/2/index.html","12d2aa3fccf76bc356bc1cd361753c98"],["/tags/文件操作/index.html","3a038daebd72bddf6f7bee711b293588"],["/tags/日志/index.html","9e56215ce05da161741a1cda4b714a24"],["/tags/服务器/index.html","6b7c95a2fcb1b40abbc074073b160415"],["/tags/权限认证/index.html","6dae95023c9b395892f2a28a862f8160"],["/tags/桥接模式/index.html","7b22a1b97f45f1526a6a21e29701be07"],["/tags/模板方法模式/index.html","f405807bf425421e111ab663ea0034c7"],["/tags/死锁/index.html","d420971c78825af3b6c2ea8fe897ac8e"],["/tags/消息队列/index.html","5c7921858b00f8bba111f4c837e8f744"],["/tags/版本控制/index.html","9c1d6b2f04b372e8f32b05ea487d7230"],["/tags/策略模式/index.html","07194a2de69f73c00cb4fc8960f93dbf"],["/tags/简单工厂/index.html","bbce52e21b5f19b5f2b397cb8bdf527a"],["/tags/算法/index.html","b64461152cb4c762898d304681f7588f"],["/tags/线程活跃性问题/index.html","33239516aeab697e37e6403b1e161e37"],["/tags/组件化/index.html","f0f5f874e3a048d144e135c104a5ac1f"],["/tags/缓存/index.html","be5b98f5a935ef5521589715fa634fc1"],["/tags/缓存/page/2/index.html","1f4a8e369c70c41d78ec379afc287e3c"],["/tags/缓存/page/3/index.html","4a28c2d38bc8fb66b601c8b94e6c9cbc"],["/tags/观察者模式/index.html","452759d88bca4d9d3424f32e0d2cd532"],["/tags/计算机网络/index.html","e17e874b92c2d6010555e033f798f87e"],["/tags/设计模式/index.html","c14b3d22e3cdb8130318487ca469853d"],["/tags/设计模式/page/2/index.html","e16a8fb490281888c0bb41c6f919b956"],["/tags/资源共享问题/index.html","869ade730add47855ce3dab01c46ac5b"],["/tags/进程管理/index.html","c1eb2ba400942e1a29dfe32c0eb904e9"],["/tags/适配器模式/index.html","ca8a39113d78d340c935886196f09af4"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
