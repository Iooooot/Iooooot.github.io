/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","38dc4ecf77c883db654666916b36ae89"],["/2021/02/22/工具的使用/博客的搭建/index.html","df5ef54975fea9d8b12585f9fabc6328"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","fe8b5013641e9c34d960c1faea4c1d2b"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","29ae862d724375f70a1c0a5a74f26650"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","9f728703aaee6e369ae565771d546601"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","9794283050e9b6f3e9dc4604ab1b5ae2"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","107763e79de232c60b5ae0a0c1186552"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","bb3e555a20d93b35765f300b75678e2d"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","16e594ef60ee10f9da935f5d1bccb1dd"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","d5e46618bdcbc9fe30767b2809648d13"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","e83f0cbc752f02bb3fe620f284414cb8"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","26fddae8b24dfbf0524233da0cdc84be"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","62bea8c295b22d74927781b657c18c81"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","319cf3fd976fbb8f973d45795c232403"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","98288cd7bccbd3849980be7558d77413"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","3bba3cdab7d4b7c0f089dcdc8fdf9d4c"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","06942c05aa36f219adf23485b8511a55"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","d0ddd40b0ef5035762f3e47e25054119"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","f495b3511fc46ad820d751ff699a87a0"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","caf9975947c109bebbf0090b029291f5"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","20a09114d82496c0457b105510ac3443"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","e939603b122d8d25dc8a31b01ad02ac1"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","ac9e4c8ddc6c6c72b19e92b26c42c2d0"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","2f3e51f199a94175008502f8100a8062"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","219c166ed7dc28ea9031145d940d9c23"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","eff06d57093a2f61f940db13487c49ee"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","621afdd91c2857a6b8f31a8f9c24e602"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","ec1cea39eb5ba3fe5e845bdb3fcc4fd4"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","3b37a70a32688836073e11998ca361ab"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","51fb0d2fb68a54944c16f1f138e963c9"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","5886f52266f094a4345a1048bb38f8cd"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","b2dcd6f98d3cef9796ab195d5868a21c"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","13baea5f256c2c10b6aeda355d33b755"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","476f248fc4c69816740020672e8a0213"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","c914c04267c49040e04496b12c9bca7c"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","c3a22b662344f34b34fc220f5f1680ea"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","ba65169d771d545963682267608ddf3b"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","5efb895ed11f4bce0abd0ae861fb815b"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","a1913cb5fbdcf59668b352fdbc8ca49e"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","8fb652d5f39e6d0d84d13b56c7e52228"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","8cbf02af60f51118331bb0a79317039a"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","062765c10e33422e5c54c2ef10df481c"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","a3ea7684cd42fc6a184aba784ecc5428"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","339652eeb0753361f0db43e47bda5396"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","0bf7134912b954fbd4b04f5bd6787376"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","73f19952159bb0a0a8c16b1ca26e61d5"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","47b611f95edacc8544dab024703c976b"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","0e2d1742c6a8cac732e8a065d2845657"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","131eae496fa626f16fce5cab1792e918"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","8c12330871fd53733e60aaca013d0f81"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","efc5a018ca507d0da1aa17d5bef2f530"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","ab37586f9ff831f29c058b34ba29cd69"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","f79388523cf5eb22b4233535a30f8950"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","280340e1e5f1a1b04320585418ace34c"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","1639e77c4d662b0a17626cf215fa9484"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","cba9f82e00a221d20f150d2403514a5d"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","f65209bf047275968dbbd5135d250e85"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","b2748d9ddb6722342602d97bff25c1a8"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","6fcbec1a4a603547ed151ae2b53935ca"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","1f5d7caed43a7f0221ea1cdbfd4d6737"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","3caf65599f778470b19baffa81dc881c"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","93a3c1e9056018d366e10a52b8224bac"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","e783d6f199daef0215cdd33bb9f1a5bc"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","337cf0073098acd35178e7803700d53f"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","d62541e18ff62541425929b682978717"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","77bf928312efede54d2077aff20fc767"],["/2022/08/17/前端/jQuery/index.html","a29c4892dd064138e50fe3e16b3fcbc7"],["/2022/08/19/前端/JavaScript/index.html","5e8f3172a201568a7f63e9ee30e609eb"],["/2022/08/22/前端/Ajax/index.html","5d396a3bcc902955b70bb7e471a73361"],["/2022/08/23/前端/Promise/index.html","ea3ed13693f7473fe2a2c21098915335"],["/2022/08/24/前端/Axios/index.html","a732daa401f1d12a58ad05bc07776092"],["/2022/08/25/前端/H5本地存储/index.html","35dac0452026efd15d0877c553579cfa"],["/2022/08/26/前端/mock/index.html","72fe1de4673f45b939cd104ab155f8b6"],["/2022/08/31/前端/vue/VueJs/index.html","cd0bdb231eb7a0156a9350b35be1c851"],["/2022/09/01/前端/vue/vue组件化/index.html","72dd1aa8ce4d205009d555c81afb6643"],["/2022/09/04/前端/vue/VueCLI/index.html","7cf9494e97647abd80a8ae46d54deb48"],["/2022/09/07/前端/vue/vue实现动画/index.html","fc0c8733d5cba0d586125b6b9f03d37c"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","45210db277774c9fbe6ef011772ce844"],["/2022/09/10/前端/vue/Vue异步请求/index.html","a90cead2ce63879eee8efdfc5d9d6b77"],["/2022/09/11/前端/vue/vue-Router/index.html","e273b11f87d7add8137eb5c09d1687f4"],["/2022/09/13/前端/vue/Vuex/index.html","d6bff353c6c89cb6f1585c61def07bfc"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","a46197b89cf7c6dd7518e6c41dc908c0"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","fa7641c54c741892a0df2bf965e33213"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","c7f7106845204df4b3bb61ccd63bbbd5"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","410e83ea73f547d575f0bb23185d7790"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","97bcf3af274e407720ac2a3c627806a3"],["/2022/09/28/DevOps/Linux/Linux/index.html","af2ab72667b6ffd85926724868e72bd8"],["/2022/10/02/中间件/Redis/redis基础/index.html","127097e6417b27c0e5551064f703932f"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","54c42196cc65524a1860b8a23be3d52e"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","ccd5f525e25d5930fe3cac6b9efacae2"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","85e92a52c3c2e0ab0064f51047c3b631"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","b3fbdb7cc8a3ef26fc8b75383a39b145"],["/2022/10/17/中间件/Redis/Redis集群/index.html","20b63f6fd5e52aeafcb699fd13cf57b1"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","0e540effad738b2740f4c9749ad24617"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","ed40b3870524acd0c6f041282f127e00"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","2c38e951d4df32e4eaeb524b19f1909e"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","3f931a18317b211da181cb28eb35f68b"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","b00c6ddb80d4ba2650cea17f47024ec0"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","20def1a75c83e9827f23e3e726044fdc"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","da6c74cf40552ac2aa0b3b34784b479f"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","fb5f86843955c48d7cd5888ce3cb5beb"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","6b75d6a078d25457865b3516e722fbc3"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","52b159397366766e52ccf52d95d11d92"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","ca37a40158fbd3a6aaadbedbf3bd51e8"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","7b00e45af6448b9d81654037f37783a3"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","0cf03dd76c0cc9f12cbfd89712b88855"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","83fde0a1c835eac162b4e8f0d0db2917"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","7d056c53bf7ecab94b23dc5948dab22c"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","7535aa4492d35a39bab89ef9f68e12ca"],["/2023/03/10/DevOps/CICD/CICD/index.html","1ee32b14c15e917829be080df3ca8ac2"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","636c14d879ea80240fdd6ed20c83f9ad"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","ed5b16b789f0a8614c67acc6f8469fc8"],["/2023/03/13/Java/NIO/NIO/index.html","ba3c3fed946d7850b18c887227b76775"],["/2023/03/14/中间件/Netty/Netty/index.html","0cd1d79937e51646f3a83c2ec4fc9140"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","7e516b1bc33732a0c87babf537bcd009"],["/2023/03/17/系统设计/分布式系统认证/index.html","9b9fde2289462ec51582d30eb8e1232a"],["/2023/03/19/Java/JVM/JVM概述/index.html","7096fcebc4cb46a88afd773514956795"],["/2023/03/23/Java/JVM/类的加载过程/index.html","55347526c9f5f120b165545d0494f4ac"],["/2023/03/28/Java/JVM/对象的实例化/index.html","2fff0e23e57d6f7220b06c41307e16e6"],["/2023/04/01/Java/JVM/运行时数据区/index.html","4b78d0e3b5c3286c840d9624f7bd070f"],["/2023/04/04/Java/JVM/执行引擎/index.html","58d07fb5e68ef7ab14d375ce3fcb2a70"],["/2023/04/06/Java/JVM/对象引用/index.html","4a6cf186c5b1e1de43a559ba7f9041f3"],["/2023/04/09/Java/JVM/垃圾回收/index.html","43187dc5593798f6a1f21570a5e16d11"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","746f34bea082ab2119fa36dc02e6ca22"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","dcff085d3d47decf203a385c2692d94d"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","7c02baf28875d09a112290af3765e1fb"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","1df9b12fb543c4327dc4c039d8de7fff"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","56d99b08ba3f4512bee51d51e2d5ccd8"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","6767315a1242553fbfa4f9bd9fb78886"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","2f053b654801270b1f1fa1c6b79b2a9e"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","519cbc593483282d256877ed54a0d8e6"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","98f86cb7d8d3849f4da4afdad80d8187"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","531739b33ee3f037cda181f24f758f6e"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","f9e06e76559ef6cac9955fddf2440c73"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","75ae9784ff448d590c4700c8c88bc20c"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","ab74b4758300ea1b4389820ad5f3ee9f"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","795dce8ead86985eda9121a9252396a8"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","2c216dd6475614b07c05b1d73e5ed1a1"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","f536cf6370fc38148f752262a3c18b4e"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","87898ea8c50ae6338fd89b6a78843356"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","d361c04c410d4c5415deb4e4b853fd7f"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","ea45087ed37dac1eb7da08fa51cc788f"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","10c03bc950043ac6850032e2dda1791f"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","4eaa330992f0630c49e93b0537f9081b"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","805b967f1dae51928cf8bcb4754d24f7"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","db2465c867e2b948562d2956b8a9ab67"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","08b9304ce719c74db89787e640700ac6"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","bb8d7a9a3159171052c397d2a0562b57"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","51cddcfddf896dd5402f6853859478f8"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","5e6b395c8ac3d556ed7108df2bf276bf"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","888ba7ed4519948d1831de3f6885a437"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","e69f2e58845ec1733ee9745d4de59394"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","a4ddd8ec0d313a6bbb05ad1f49732788"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","4212f94132ff617ea9d33c948862e159"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","62f5c9fb069c4410c8edbce3e4d5f1cc"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","8621d5c25d4ae17f2ac976f805688cee"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","d4e1ef39d19fb31c8ef5d9b1270027ab"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","4b823df43828a7eb0aefb3a200f8d760"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","7e8faa5e43a4f35f3477158f9391b543"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","9b97b2010eab975d7891acff4b2a1dc2"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","41f6a9d409b1f8847001d0619d7a1d4d"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","138671f8bd7806d55feda93de3e8d1f7"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","590ffe2e22cc47e77faa2788aa428329"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","06c37334db10dd32a88c9f5fe04cf4dc"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","ba99e21766439c1ceecf509c1b0b2c65"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","1b06130705fde55ade2e0f0b605938f5"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","0f67499eb315c991e6dbfd00201e643a"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","44ed5b5a75682376da1e359951119f13"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","868b88338ce7681f1b2fec903f533352"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","679fb0592e49204c3937c66220bae5d5"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","67315bf780961724d08dda5a9d37b438"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","76b7eca091a763933243d30aead8264b"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","54642b6eecac5161d92e63c9fadc65d0"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","6e2ae4daad8b5e19f5ae7c9291d42ed0"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","2af59e42173449c05c53e9cde87a15d6"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","63db20c6129ca6d36f65e25fd655ec8e"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","5c5df9664ed4daef0f26a9a6fb417384"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","82ef5fc054b2b4755cb9c2f0f6cec74f"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","67db2570f52c0654862e4eed24fde3c8"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","dc020582a79c8f9227f92acd719916f5"],["/2023/09/04/中间件/Redis/Redis事务/index.html","ba4ebb4267fca8fc44ee3ecf255cd341"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","24d2fa35ccd6007f9308a17f1500d1e5"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","b2c28adb9cb1dfc68d078df0558aafe8"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","d06f241c004a480d61e78991b65131f2"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","14fb6fd5254ac746356a54fed20c336e"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","923ea00188c684972b30fc0cef53b3e4"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","2fa87efd78eb2a8eb74a4d63101c6e6b"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","9eab4c193ab98a7db95d1ec5400eaf05"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","8e2a13cfe763a4277c15c09d81f5dc2a"],["/2023/09/22/Java/NIO/零拷贝/index.html","7891d4d4b2cee586bc8bb0486b55ef96"],["/2023/09/24/系统设计/JWT认证/index.html","f69faef382e6165868167d2dde05341f"],["/2023/09/26/Java/NIO/Reactor模式/index.html","d0d952ea1d99e06617073dda68d29190"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","3ffcec1049437ea4455306a8376eb30b"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","1a5ccac064b9882854c2a3ec99aa551a"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","9cf41aa4a57fa42751caf1097b15caa2"],["/2023/10/09/Java/并发编程/共享问题/index.html","b80e960340cf752447a887e2d950ad0f"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","7193feb1990081cf779064c72eafd768"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","f4d4ad1cd2e5bd08773df8a6c0fa1c67"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","74f8a3b9cfa0f162551b69d6df40c0f3"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","73b1fad29ca5b49a94c6083b5d32d29b"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","0b692c8081e477a1db2567361398ec79"],["/404.html","e696e1812ce83a1000f20de00179d393"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","c61a073417f02296b69755a2962d5865"],["/archives/2021/02/index.html","0c63a939f328a4d0e1a57e6d55c581a3"],["/archives/2021/03/index.html","be49662983cadd384c9ba72af32ba010"],["/archives/2021/03/page/2/index.html","10e6c03e69735ef6ce934df18f9d619f"],["/archives/2021/03/page/3/index.html","2abb27482ec45e10d2cc5502eb36b622"],["/archives/2021/04/index.html","1e49650e43d1e431864417c0272bf5d8"],["/archives/2021/04/page/2/index.html","c322001d7a2e69a45e90cc18e8811f2c"],["/archives/2021/05/index.html","c2d1227b622fc914c4a8699744967b20"],["/archives/2021/index.html","b1462e13360d463735be4997f725c703"],["/archives/2021/page/2/index.html","bc224cdc78668c05f7c74617ce8f347d"],["/archives/2021/page/3/index.html","a0efcac2a327da4aab0c1fff6e3b77a0"],["/archives/2021/page/4/index.html","4b97c979fe123bfedd6f106229e61bc9"],["/archives/2021/page/5/index.html","1873f8177ca2d1a451ad5ceda8b04553"],["/archives/2021/page/6/index.html","ea58320391f78fc66482117e41956219"],["/archives/2021/page/7/index.html","b351375cc67a7b7da637cc5d92ac1773"],["/archives/2022/01/index.html","d1c10bbcae2d2b3000d1853d9a4c2ffb"],["/archives/2022/04/index.html","4d9c249462fe00a997a25a01d0aaf630"],["/archives/2022/08/index.html","3f7dff30c435274f6e5993be1f8dd955"],["/archives/2022/09/index.html","3f7daa4ba97c662048848789d322ea97"],["/archives/2022/09/page/2/index.html","47b284e5fb43eb15210904963f11b11a"],["/archives/2022/10/index.html","38e60a329d3e22fab86f648a52081be1"],["/archives/2022/11/index.html","3099feafc099a1e5d22ac69dfd1920a3"],["/archives/2022/12/index.html","f05b5a89ddf53495a2c43b57f4189c30"],["/archives/2022/index.html","0fea73016d7354d0fe10490a9d2c233f"],["/archives/2022/page/2/index.html","862f20a1d47ac265398ec7ebac0c90e3"],["/archives/2022/page/3/index.html","fdaa2870aea2c2a4cecc5b3b404d094d"],["/archives/2022/page/4/index.html","82266b89578e322bc72efe3e0fb191cf"],["/archives/2022/page/5/index.html","1eb5fb7e95cc321f2e42f6f23345b5eb"],["/archives/2023/01/index.html","7c652c372af7dd534553c02e1d153f5c"],["/archives/2023/02/index.html","8f2e51d4255dcb34885245a7b36607ac"],["/archives/2023/03/index.html","e2952a993c796cd0b90c9c5ffa9590fc"],["/archives/2023/04/index.html","459197f7b8fe472b313f591c6bfa0297"],["/archives/2023/04/page/2/index.html","1bf2f0204bf878cedc9de6eba25d0dc1"],["/archives/2023/05/index.html","826d287979dc6bff8fbf853fee5b8d32"],["/archives/2023/06/index.html","009419be1df79bc14c2448c128ecfff7"],["/archives/2023/06/page/2/index.html","7f4d9b2b2b823082127f18da851267fb"],["/archives/2023/07/index.html","78ae46057a28a7473168224075d0dd21"],["/archives/2023/07/page/2/index.html","f968b7397f28e9be493e3173ccbe3eba"],["/archives/2023/08/index.html","d7dbb63e23bd51057dc6c82b129606c0"],["/archives/2023/08/page/2/index.html","52c80f3dbb1d17d380b6480d108f6dde"],["/archives/2023/09/index.html","285d7b1179d85963e7dc44f74f24cc15"],["/archives/2023/09/page/2/index.html","1350976e07104fa533003d2227c40b61"],["/archives/2023/10/index.html","02e487c5a58b87a7a88bbb1349d15e5e"],["/archives/2023/index.html","b213ad452ba415c57657f32125fd2cd5"],["/archives/2023/page/10/index.html","17627b67d20f2641040cb630650dcddb"],["/archives/2023/page/2/index.html","b66d43b79b4d6169d86e3e32b454bd3b"],["/archives/2023/page/3/index.html","53ca0be1bc0ea5e97affdb2382add98b"],["/archives/2023/page/4/index.html","6f4b3bc705ca59449a91a9f829428ac7"],["/archives/2023/page/5/index.html","5e2784c8a56e351a03004a51a9057fa9"],["/archives/2023/page/6/index.html","9d9380e2be2e83671eaf9a454228936d"],["/archives/2023/page/7/index.html","a0be77b2fe112e9a07c93091e449e8c6"],["/archives/2023/page/8/index.html","81bb43fec24d1cad00e1661f167337c1"],["/archives/2023/page/9/index.html","fff589248d00bff1f8f072b3e57fb40d"],["/archives/index.html","0a5275220ac707be2e3760002fa7a483"],["/archives/page/10/index.html","dfd5d86153996967e735d2533a629f78"],["/archives/page/11/index.html","077d9dbaad98284c230c24728ffff982"],["/archives/page/12/index.html","30b2b02adebffae2985ebf0a23900e28"],["/archives/page/13/index.html","5871dee7aa315fb15aabc7a9ec3437a1"],["/archives/page/14/index.html","d903a93612a4588ff31405087e36bdab"],["/archives/page/15/index.html","8521e5f1050e9e53b1c2f1722fdca4c2"],["/archives/page/16/index.html","198b25e615b5354d5240a1bf60012066"],["/archives/page/17/index.html","89daf7954821cceb245d1c620b4efc3f"],["/archives/page/18/index.html","5a0be2b159b3cc06409490de05b3308c"],["/archives/page/19/index.html","05913e4adc63c9d12ba2d9de5260ad7d"],["/archives/page/2/index.html","3d98a20adf46283298f2e167b41ceb83"],["/archives/page/20/index.html","37aaa10b1aa603900f13f05f6cb2c9dc"],["/archives/page/21/index.html","a628c98930819477045ee6c7e1eee034"],["/archives/page/3/index.html","118413c593d9c02591449e4ee7644b34"],["/archives/page/4/index.html","8b6db1c57e2c2acdc2a593827406edb3"],["/archives/page/5/index.html","25ff842a74956e6f25f0abede29983b7"],["/archives/page/6/index.html","8f89a53503cc0ad2666700fc4acfe691"],["/archives/page/7/index.html","e4153eb3bac72031e99423ddd761e2a5"],["/archives/page/8/index.html","c3faf12fc98db5832ba5a5827e265add"],["/archives/page/9/index.html","0a80a24be032070698c9a4a26ee70781"],["/categories/Devops/CICD/index.html","43817f04e758376e0a425f8090db784c"],["/categories/Devops/Linux/index.html","d8a1cf1182282b05cf7a7249bb2b0dfb"],["/categories/Devops/index.html","08d3ac26bf7cc5094ffec02562957aa3"],["/categories/Java/JVM/index.html","dc23cc9eac77f3d6dac6ac473db58534"],["/categories/Java/Java基础/index.html","1060b6a58c32ef55f381e1553fc69c37"],["/categories/Java/NIO/index.html","d08468fc450b350e39b3bbbf634fab82"],["/categories/Java/NIO/原生NIO/index.html","e88f2b15d36951acc2d7a6fe74409264"],["/categories/Java/NIO/文件操作工具类/index.html","f300e536ecc9950d70fbfff2909dd2f2"],["/categories/Java/index.html","553d9e00d05ea4fa83696e8783ba63d2"],["/categories/Java/page/2/index.html","f7764e71e17b7a1dee782e520fe1b8fa"],["/categories/Java/并发编程/index.html","e948eff0a738f722f2a97754663b921d"],["/categories/Spring全家桶/Spring-Security/index.html","8b09f7f9bd43bc9c0b83b2d6b2738fd6"],["/categories/Spring全家桶/Spring/index.html","5cd553b3d2d52cf548a1996745ec9680"],["/categories/Spring全家桶/SpringBoot/index.html","dd2780a706a6f0a26ecc89a1cbdc5909"],["/categories/Spring全家桶/SpringCloud/index.html","3efeae3109dd89badc78220ac8e545de"],["/categories/Spring全家桶/SpringMVC/index.html","6d4f4be8dda468023f712ded87ce07f4"],["/categories/Spring全家桶/index.html","ad803bfa8ebd85c6881dcba44a61823a"],["/categories/Spring全家桶/page/2/index.html","c37ca9cfc64a84a4df1f94a5ee8f06e7"],["/categories/index.html","4c3909e76ed3701605fd67e33c90cf20"],["/categories/中间件/ElasticSearch/index.html","4cc6fbe5a28536a75226310bf2488e69"],["/categories/中间件/Netty/index.html","ce1d9add1258af264a8f288dbe386774"],["/categories/中间件/Redis/index.html","2a7ed401ccc798b50ad8c55d15ee2ad6"],["/categories/中间件/Redis/page/2/index.html","2527ef7ccb8f07b51e7002263d1d7e04"],["/categories/中间件/Redis/page/3/index.html","cb968aeaff9f6e25748c9c9401150089"],["/categories/中间件/index.html","f65fd4c7f168bc0024a7416f5f0eb8a8"],["/categories/中间件/page/2/index.html","e98cc56c6a5bdd1254bf46de75b13c71"],["/categories/中间件/page/3/index.html","51f3252490a220349095cfab2757d719"],["/categories/中间件/page/4/index.html","7ddc80acabceb5627d31b7bfea4cf7ab"],["/categories/中间件/消息队列/RabbitMQ/index.html","92d995bb18005a72b9d655903167abbc"],["/categories/中间件/消息队列/index.html","1d9c7bd6981a1c61fe4b004d21235897"],["/categories/前端/Mock/index.html","93595ad79a5496db92582070ca8cd4ac"],["/categories/前端/Promise/index.html","2a36782e4915366b47d7149d61886286"],["/categories/前端/Vue/index.html","806269bdc85ca26e2fd437ede3c94ca3"],["/categories/前端/index.html","90c13854926e51ff9ba3428c50f8f631"],["/categories/前端/jQuery/index.html","8adad3a6e1cffca786bf4d60a63e14cc"],["/categories/前端/page/2/index.html","9f02d458bbd501e6360c960a169a5080"],["/categories/前端/原生基础/index.html","82ff41d8f2e0b5ff76030718d82662e5"],["/categories/前端/异步通信/index.html","a79332e9ba9013d111af28558740c03b"],["/categories/工具使用/Git/index.html","ab4a75316c7cf5a11fd4935eb26aeec1"],["/categories/工具使用/index.html","f11d410daefe0b0e27856bf4f7e32f01"],["/categories/工具使用/markdown/index.html","9f8d72b87d13df149619ae5ad7679b77"],["/categories/工具的使用/Docker/index.html","546d82347931341f588224f1c6dc03af"],["/categories/工具的使用/Nginx/index.html","b116d328146cc19daa3d456e30b6f99d"],["/categories/工具的使用/Swagger/index.html","aa4d53eb5ef1b25a4638a21842e0cd74"],["/categories/工具的使用/index.html","7873e40f280c5d69e9553d977606558d"],["/categories/工具的使用/博客搭建/index.html","2950f2a09f84c882bf114cf0e8771200"],["/categories/数据库/MongoDB/index.html","dbc2ba78acfe940e2719b0eb42f3e182"],["/categories/数据库/MySQL/index.html","85e02df8f1663c13a9942c263908bdfa"],["/categories/数据库/MySQL/page/2/index.html","a84bb47988f414a532fec31df728a868"],["/categories/数据库/MySQL/page/3/index.html","b4c0399ebef5e44d73ecb2f762f30697"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","bd987a435599132b0259acf3515191c6"],["/categories/数据库/ORM持久层框架/index.html","f045a0dd4359eaa70a02214966ffe115"],["/categories/数据库/index.html","eeb01b5f58ea12bea7b8e4a03482ab4d"],["/categories/数据库/page/2/index.html","2dcbe0e383d913f07f0a9886c8a962cc"],["/categories/数据库/page/3/index.html","58fb09fdd4f11c30feeb600df16ae546"],["/categories/系统设计/DDD领域模型/index.html","3744097bf3eff775c7824d0f4791b814"],["/categories/系统设计/index.html","e5d42b27461a4526d47b8ea27dd28661"],["/categories/系统设计/page/2/index.html","b7d90ce159e0ea83b30f4006e50fd46b"],["/categories/系统设计/分布式权限认证/index.html","fde323f30889628bb236b14791c45249"],["/categories/系统设计/分布式系统/index.html","d01304c88a350dad54560dba85d8794b"],["/categories/系统设计/设计模式/index.html","1164be48010828fb20a7ba47557e29c2"],["/categories/系统设计/设计模式/page/2/index.html","d09a7a8a188ad099cb621b1b208cb936"],["/categories/计算机基础/index.html","dd1feab449cb9642ffcc7c8fd85c4bf9"],["/categories/计算机基础/page/2/index.html","4895d7f507189eaa48f4763132970a3f"],["/categories/计算机基础/page/3/index.html","91431203ae249fc7476bedba8c73da6e"],["/categories/计算机基础/page/4/index.html","7397e3d10f2973eaf011b90d7bbb76ea"],["/categories/计算机基础/page/5/index.html","458ce1984df56947c259be9c1961352a"],["/categories/计算机基础/page/6/index.html","f877f89032e46df2d84f03d8c907c12c"],["/categories/计算机基础/操作系统/index.html","d51d0af2edca0bc845a8531ee68de000"],["/categories/计算机基础/数据结构与算法/index.html","77bfb11bd500be8d3b77e16721b5d7a3"],["/categories/计算机基础/数据结构与算法/page/2/index.html","83a9736e7f0479f08fd5a5369d2b07b9"],["/categories/计算机基础/数据结构与算法/page/3/index.html","23d86516ee6b6b18243ab9270d7f99ff"],["/categories/计算机基础/数据结构与算法/page/4/index.html","32d1f907348f98a88616078cf8520e82"],["/categories/计算机基础/数据结构与算法/page/5/index.html","c8f966deb47c9a44f0fdb70edb3c8fbb"],["/categories/计算机基础/计算机网络/index.html","9f735d6bd41727c140d07ba3eda0efb1"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","012d46d1c5c05082192001a8cf281d33"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","6e7ab2577bd2586868c56766af427fa8"],["/messageboard/index.html","6ebcfe7406d7ff83cb0ec6a508fd36cf"],["/page/10/index.html","5e01cb8f13da8ce7659c4c148e1ea7db"],["/page/11/index.html","7dd487bd85811370ad35a831ce17d614"],["/page/12/index.html","2b37a70c72115062e2b4d3140500003d"],["/page/13/index.html","03a030fa1e4ed3cd3ad307c9c6c4290a"],["/page/14/index.html","4b22261ea4d269c630fc280dcaa7fbfc"],["/page/15/index.html","91e00ba03317e9b8ad447dbb58356d1c"],["/page/16/index.html","93741e7073946dbac9de6d857668f686"],["/page/17/index.html","4da3cd911f00815b1a0f2d6fd14447c0"],["/page/18/index.html","5bfc2431a02b5b18b06b1595c7d81d0a"],["/page/19/index.html","e138d236c51011110e7013999e344bd8"],["/page/2/index.html","8646fddf183ed1f096ba37851736d73a"],["/page/20/index.html","dc45a3b7de640bc69d8ce84bee96ad6f"],["/page/21/index.html","2179f973cf68962e2d583d11bf4aa430"],["/page/3/index.html","97e43141651bbab641b16518dd698ed3"],["/page/4/index.html","b98a63238babc20bf527f71179575fd8"],["/page/5/index.html","1734583f56eba4c5d4befd025018c4ad"],["/page/6/index.html","34cc8616a22c42886701a7ff97e34076"],["/page/7/index.html","e84e66efb74a1633f279017500355487"],["/page/8/index.html","5eba3011c3dce7ca660c488bba317d48"],["/page/9/index.html","295a5dc4d30cefaaa51ee3db3cb99b81"],["/sw-register.js","309c13a804c1fb4b061be4c14b6363e4"],["/tags/Ajax/index.html","1575b45a2f8be0daf53504283c888a91"],["/tags/Axios/index.html","934d167c91ee8c2b66ed3a02df9dd99b"],["/tags/BASE理论/index.html","193e87cc6da178e0bd758a1365e4325f"],["/tags/CAP定理/index.html","72e588af23864c0a99e5d5efb341e094"],["/tags/CICD/index.html","a729c20be8e3aa2ecb8ff6d16da20b63"],["/tags/DDD领域模型/index.html","567fc1dffc0fe126d6fe668b6abf9ae4"],["/tags/Docker/index.html","72ceabaafd153c7c696c584a136de63e"],["/tags/ELK/index.html","79979900fb597fa7290099fb4f6e318c"],["/tags/ElasticSearch/index.html","ab972d0fe7e530c2439c7dc8e033e1b3"],["/tags/Git/index.html","8df316598cf9d53a556a580a416a878b"],["/tags/H5/index.html","478f2237c9b475acbb8dc254d88fcd9b"],["/tags/JVM/index.html","e200fd3833da7f026bb597c919d99d39"],["/tags/JVM内存模型/index.html","60c63641817f1d1ebf85bd400d7dbc2f"],["/tags/JVM执行引擎/index.html","7f62c937357bed91c1fa0c052d35fcfb"],["/tags/JavaScript/index.html","75a61affdfc8a727551c050bface364b"],["/tags/Java内存模型/index.html","af876c390f95b43281b982659e9bdea1"],["/tags/Java进程线程/index.html","9ad96e7b5b4d59b6403f82f0e8c56e1e"],["/tags/Kibana/index.html","5ebab380ed9826dd05cad05c208b1ea9"],["/tags/LeetCode/index.html","e4838eddcfad5b124b15a928ecc13e7c"],["/tags/LeetCode/page/2/index.html","c5086f2c273f8f3697cb18c637b90a52"],["/tags/LeetCode/page/3/index.html","c82d1ac3726422755ef357ef852328f9"],["/tags/Linux/index.html","0a64f9569d7776af0746c4ae5657135a"],["/tags/Logstash/index.html","299e64f555ed08e3b422a027819574a1"],["/tags/Mock/index.html","14bd674d21f91c097e2b6cd4c0b5c8db"],["/tags/MongoDB/index.html","0aea4a8f21181529e88b9cb0d66416cf"],["/tags/MySQL-事务/index.html","c4af528b42bc75d6749ba2be46a7a17f"],["/tags/MySQL-数据类型/index.html","d2871f401433abef91a11312acd8b479"],["/tags/MySQL-日志/index.html","4140e7e5365b9d6f2f99bfc0df8a7227"],["/tags/MySQL-索引/index.html","03b604ea440b4dc4343a5e3823a9ceb9"],["/tags/MySQL-锁/index.html","bd5f54a41e4b2bc8b23e395dd000b874"],["/tags/MySQL/index.html","45b5138ab41db102f464d7587a565c0b"],["/tags/MySQL/page/2/index.html","b0ac5789839c07d961f9e4198b445fd8"],["/tags/Mybatis/index.html","71fd25feb0985854f81e6e64231cd078"],["/tags/MybatisPlus/index.html","2e2c29a1da7175fefc78b0a23460923f"],["/tags/NIO/index.html","938632503e489f5d521c19dc9974e584"],["/tags/Netty/index.html","69d0da496f2328bd36dca10313168a34"],["/tags/Nginx/index.html","4e26f4c8ce271717f6ad7755a0e387d2"],["/tags/Promise/index.html","2c6acc5c111996c653d7a6e2facd5dc6"],["/tags/RabbitMQ/index.html","415f066558d4adea6d530415d2fb2762"],["/tags/Redis/index.html","a8eef144427e62611086d6588f2daa52"],["/tags/Redis/page/2/index.html","99ed7ca73251bf9a81ed11c6c64d1ce3"],["/tags/Redis/page/3/index.html","a9a45d41115eb1b013b1e3f40b04bd9b"],["/tags/SSM/index.html","d2ec81088067c62acbd10910d38dec0e"],["/tags/Spring-Security/index.html","f24a07f97eafd801a3201967d3a70eb0"],["/tags/Spring/index.html","8cb84795a652c05cccb2a46bdf67a041"],["/tags/SpringBoot/index.html","1098af132802dd66359957ae8130c5ef"],["/tags/SpringCloud/index.html","a584ab6ef12a05fab797d7c7d72dea99"],["/tags/SpringMVC/index.html","582ce2ba611a7067828647e7c732eb1e"],["/tags/Swagger/index.html","603507c2d4544bda2475fb6c8b03b5ec"],["/tags/hexo/index.html","bc434def8fd8d6b680c49a95e7a2447a"],["/tags/index.html","27d896876361457793aa4ba504e4cd03"],["/tags/jQuery/index.html","ed45cef86a4dfd8695bb5203b1e92253"],["/tags/java/index.html","1c638aeb82209b11181ec2f0819442d2"],["/tags/markdown/index.html","17eec3bc13cde3075681ed0cf293e1fa"],["/tags/noSQL/index.html","2f44e1edad88cb6543dffe3bfb039a98"],["/tags/typora/index.html","3e3b251d7b0ba03ab2b9fb8ec26dcf94"],["/tags/vue/index.html","43060c2224302792f44fd12a664a02a8"],["/tags/享元模式/index.html","9f7da29a23e8007e46dd268472d1fe2a"],["/tags/代理模式/index.html","06c9bcb614e0c780ab5523798527173f"],["/tags/内存管理/index.html","23df1127418e1c220b521d77f37be5c6"],["/tags/分布式/index.html","b2daa04b363903332d7447e86e1f716c"],["/tags/分布式系统/index.html","5e9d30529040cf64fd17545be44b8583"],["/tags/前端/index.html","5bce37126f503b49fa9db3a637e7041b"],["/tags/前端/page/2/index.html","ca19c6cbf97c1a805aabbd844d14c837"],["/tags/博客/index.html","9eb1ae5e55dab327d28a2c5dad67aa88"],["/tags/后端/index.html","7b53936484cec5c4cd360697cebc1a28"],["/tags/外观模式/index.html","ca0ec6d27098e526a65e499fa7853016"],["/tags/多线程设计模式/index.html","e1622f8f178e1bc266238826dffb8221"],["/tags/容器技术/index.html","3dee77c66da3b14ba0588bdfa1a215c8"],["/tags/工厂方法/index.html","1ca4ff25d27dc94e634ede26f3ae2f09"],["/tags/微服务/index.html","1bfe90f8ef50a68bb14641bbcba407a8"],["/tags/抽象工厂/index.html","3f770b2ef6dfd0fdfc8c369bde3abd01"],["/tags/持续集成持续部署/index.html","6fe17d9b242f3aa650e94d5cd7028ffb"],["/tags/搜索引擎/index.html","7f4a07190049cfa725c65fa88c46f1ef"],["/tags/操作系统/index.html","84893066e74e20069e662ea4255731c9"],["/tags/数据库/index.html","960cd963fa22396949b3199101a86d9e"],["/tags/数据库/page/2/index.html","b4485dc5375752c3cc7613cc27531109"],["/tags/数据库/page/3/index.html","19d8b9cd08afdb21d13678000029a10a"],["/tags/数据结构与算法/index.html","30a08ead4b4f0dc9597ede56493490c9"],["/tags/数据结构与算法/page/2/index.html","3e0368311f6387219c20878a49081fc1"],["/tags/文件操作/index.html","946b1508417bb5ff4e222a2c8c775f19"],["/tags/日志/index.html","36b0b8934581449ad00bed917a58e158"],["/tags/服务器/index.html","7f543a60bbca38db22bc460ca91fe572"],["/tags/权限认证/index.html","e249f288ad4baf0fef186b45b4111fb9"],["/tags/桥接模式/index.html","2c06a7c77222a4bada365f6864994592"],["/tags/模板方法模式/index.html","e053363e11ce95d9f0327d0eb26eb207"],["/tags/死锁/index.html","eebec021dc9ae6e51b2c1261daaca5f5"],["/tags/消息队列/index.html","4956dba7fb3d896add224744e0254219"],["/tags/版本控制/index.html","967c384f1a5c5ec26448babbe664c7f5"],["/tags/策略模式/index.html","f2ef1040617ef9bc3418cc6aefc402f0"],["/tags/简单工厂/index.html","93dc8b03fc6a378b48b387a319da5c87"],["/tags/算法/index.html","e4fd6f011e34d3753282ae0a562c3b72"],["/tags/线程活跃性问题/index.html","9dab49746e416f9c3a9ca802584463a4"],["/tags/组件化/index.html","87695224f29b78eb8d33538ac9b47093"],["/tags/缓存/index.html","3272a7badc861f5f07f73e63dc2c6908"],["/tags/缓存/page/2/index.html","6ee674440a364e41b61caf51c339b883"],["/tags/缓存/page/3/index.html","c16145fbfd1e89fed3405e148e13fc40"],["/tags/观察者模式/index.html","526dd9d5958e2a4129b3577d7658b33a"],["/tags/计算机网络/index.html","89b02ee4342b46b193b2f41c17238f20"],["/tags/设计模式/index.html","98723bf6a60c68f65ecfeeeb653e73ef"],["/tags/设计模式/page/2/index.html","a04d9b2879f10394be5e932125684b91"],["/tags/资源共享问题/index.html","761093997727c1a75d53d3c180cf3056"],["/tags/进程管理/index.html","823bd510c5c108589fe61053c3a26e10"],["/tags/适配器模式/index.html","0e959dcf7d48c44c5ff4323ec39f512f"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
