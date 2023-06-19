/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","697ccc1af9cc3abf7303db57f872232c"],["/2021/02/22/工具的使用/博客的搭建/index.html","7875f9853f8d53d50b5610b1d78a580a"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","4c7428719e65a1b96e2fa37c747fbf7f"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","c5d355e159959be942b6a4762e6ed6c3"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","c45fa77dd741e92bcca902f3ca5a6f9a"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","8d7a2801a2bd70f311bfe73d228d0c62"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","8439afe8b5d92df22e864c296e20eb50"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","d8699dafe939d85f572dd0e1dc53098d"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","d8e3fcdd9558ceee056e53456c9e0b0f"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","35277c9cf47d79cf76f68df9234771ac"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","db18077371ef6889cb7922a6cc814b07"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","85f07a82d254ace3e32f337e2870f1ca"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","84e0ed1abd383efbbab9d615c7fd6111"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","fe6f9d646b17d77b21c6e3d649e44fff"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","7544bcb12cffeebacad8ecaa046a91f7"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","60f1a5cf544f66a3b7422dfa3d5764bb"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","c1692867a1ae01121509f1424814c604"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","8a1fad36a8cc61365746dcb345b4894f"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","99e2c23893639716a317d45913238213"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","076429a4c9b2579c79e939fdf26b7944"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","47f5d6a65baec549b94f0fd4b092b9e4"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","5b9e2e75e61f6715d91e05f38c892bee"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","49a9d79fd7d0239532bcc2a4f56b4d8b"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","ef0ae9bd5cd2e404077923191749c87d"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","b31b76380b0b7b5e6cbeb0f1c0668238"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","6da0e1a2b7b88b06b14f16b4c764c650"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","4d597dbe65631934d0a22db2bfb78807"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","fb7bb6dc7e2db1c12643e8b77f6131dc"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","8c5a44344c0918afe7f504bff46e245a"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","86ac52ee3f735e4bf73716fb4a332af8"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","85b753efc8f93bec854be082af9aca04"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","582c18d98ad58d6d7578d4c53651f79b"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","c6a04eff03f61561c7a6d17a85288070"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","d4a17f555f5302b702655b897cb7562a"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","4447422282ad49fdff5780f588884946"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","53888f933c0e52cdc7db37f9ad0df68b"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","f6d27e4cd57938b17cbfd17b30dab9da"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","3201b3f0d96e510b39e887e896936b2c"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","f07ed71b30b75b8b4205cf08d545c26a"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","d438622c6f64e44116ffd55050c2a3bf"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","34a04bfb5d0e38a217afc56c7b9fefab"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","5aca6035b3b59151d9d35318ce29c282"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","f0e22d28e7051be3328d4e51e28d00de"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","9721fd159962b7d08d233e02de6f32f9"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","dc46eb6f06457771f52063721e3f5758"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","359d209a6196a63bdd06237ca06d800d"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","02211c50a4784f5e7c4ed83d74954599"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","a254cd7faf49ff0c437db50e9f840b18"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","c00b4a8eacbd56ac8def8300749effa0"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","ee6f7978ddb16c445bdae00f2a4233e7"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","6e495f30c91c37634e20b71f4290c376"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","3796e12042018e85be23f0ccedcb8a58"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","ee585265f6fbe586bd17c07cfd68f572"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","17d0601731ab4f3ac99b00a8cda37309"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","7f7828a4f2322633d3a3ac02e271fc13"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","9c8f3e8156ba24c2e902d8ed926b8e83"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","ef793b6bd953beade0dacc628cc38145"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","331974be0369ea613afd1c3e9abc1a93"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","35d06d7006bff3f85f03762f27a541a9"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","6adeb1e2690a9f8112e09b694b53fbb9"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","9080c0790d4afba293cded5a250c1084"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","4c8025f53f51d83e7d31f6fad86f9bcf"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","4a0fbcf46f384d6e0b8b77c03b282449"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","4d453acd9d87cc7fbb4ff449443b4089"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","0f90231af878b8382756a9f23a525f71"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","5b8d5f376518a16b432f4339c57da048"],["/2022/08/17/前端/jQuery/index.html","3c027a68dc99fe31e47d056bd11905e3"],["/2022/08/19/前端/JavaScript/index.html","b415a5e3388546f27bdcd55d18bde930"],["/2022/08/22/前端/Ajax/index.html","9d7b66f5bde8e42a5392ac5b1ab7bb64"],["/2022/08/23/前端/Promise/index.html","4792c0ae7ad18f10424344971d37cf27"],["/2022/08/24/前端/Axios/index.html","b6c93db59b1202e7e1f4f59629b30a3b"],["/2022/08/25/前端/H5本地存储/index.html","2d0c66969db44c9049b75708d2f1d450"],["/2022/08/26/前端/mock/index.html","896d42de8db08d2577bd501dd1f8ca19"],["/2022/08/31/前端/vue/VueJs/index.html","6bedc148f08f4b47fb374defed919b42"],["/2022/09/01/前端/vue/vue组件化/index.html","053a6f421b2174d1c892e0808d916916"],["/2022/09/04/前端/vue/VueCLI/index.html","a94e273ecce536f5cd242a74262a8b8f"],["/2022/09/07/前端/vue/vue实现动画/index.html","75fe590785f099eae5699d18d4b9b533"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","614bc9fe041ff979736c6e7eb4259605"],["/2022/09/10/前端/vue/Vue异步请求/index.html","3bb7272fb9a4799a1077a0f6be6ca1ca"],["/2022/09/11/前端/vue/vue-Router/index.html","72bfae0004cfc22d58f008caa5299e33"],["/2022/09/13/前端/vue/Vuex/index.html","95be2392f82979308066e87f0c878c08"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","ba2dcb7d49a33d20b26930394e50d85d"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","9e24fc668a2a0aad4c381b7394a2ba77"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","9256a697382b1852b50fa6e7ab7a3e03"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","791b5f9dfe33f2e1230d5e6ff81da1d2"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","ba1f586518295edba48bc9e5e4564960"],["/2022/09/28/DevOps/Linux/Linux/index.html","c8dff8541909412e78bd773f5c035e7c"],["/2022/10/02/中间件/Redis/redis基础/index.html","1c752dd77ddfee9e80c8810781dee951"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","a0427e3981802ffcfa3e41d12b43fd4f"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","883d1f8aa0249cc071461a00798094b5"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","ddd581bbaeebaf2e54a85c26ce3d0254"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","6f4178f4fe92162a5d46cef5d9571034"],["/2022/10/17/中间件/Redis/Redis集群/index.html","a7b1657e1b57feecf8099c995f469899"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","5ec15289f05ae5d2eea0b9f0653863c8"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","3e23d7c93549f815c5349a16cdef30e3"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","abe6fcfa148a9388977bfc6bf08fdd2f"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","5519a7077832c728567736d08278450d"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","4fc1faf85ea475803f110ee7281a9b1a"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","4ef03ae098e9455ab412881bae4b92c5"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","bb0b9175f62e2b3987958e7dffe0cbc7"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","e2508021cd3ca6788c5e6448cd06e8a4"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","4081f65c23b41e6f56a4247cc9ee677c"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","dd0e8aa0fa7bde5907dc393de633e329"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","7e9c606e07c9037f36bbde1bd7fa4195"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","8f1125e77f1dbee3208b5ef7cdbfe5f6"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","4ea26de2bab88c1684d64e0afa2d9229"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","878a931552945ea9bdb195fef124e998"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","c8b4600df7f639f55be556b6833dd76c"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","ecd3e188e70f214e960168db1f60b8a9"],["/2023/03/10/DevOps/CICD/CICD/index.html","ad3745224383db192973ed30e2ba77c1"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","e40f2e290df16007c8376c4147db88bf"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","b90a2c7075c17e534871584d0d422472"],["/2023/03/13/Java/NIO/NIO/index.html","bbbeb30231f6a1c5dbc725554310ee27"],["/2023/03/14/Java/NIO/Netty/index.html","fa88606e977c50dd5d4b6ee568e6b17a"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","df362293cac8d77c12a2b470ae7b29d4"],["/2023/03/17/系统设计/分布式系统认证/index.html","3c556fabdf53a1cfe2b94d14c39e70d4"],["/2023/03/19/Java/JVM/JVM概述/index.html","ad3ca116191151b82d7286aee463d1a1"],["/2023/03/23/Java/JVM/类的加载过程/index.html","931aa86ef616afe8747fc625cae94f96"],["/2023/03/28/Java/JVM/对象的实例化/index.html","2670faed00ff7c020ceb22386b190b7c"],["/2023/04/01/Java/JVM/运行时数据区/index.html","c4e2d32fa2e5ec841f0f4e3e6f5f4fac"],["/2023/04/04/Java/JVM/执行引擎/index.html","24824e8db6e5c251823a992f986db077"],["/2023/04/06/Java/JVM/对象引用/index.html","7362d4c121bf4906a191695b2467cc53"],["/2023/04/09/Java/JVM/垃圾回收/index.html","f4863e15ff3fd1abef1e7d9bb24f37b9"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","e502bd00ea41279761e5757d569ed804"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","74ff5160a31361a5bffb71e7e00d4c4e"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","7a41b7ea379ab47ebebd5c824a257de5"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","9fdea05b4ddac8d8ac25bfc021f203dd"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","b95dbe5e78a77ab0c41611d92f08cd80"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","49e72505909a80569b2bb3fea889d578"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","93f6782810c9d9d9031a40f3f5f4f70f"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","74b9d6db1bb6779bb2cdb1216505ad2e"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","cacd126858623e379516b3809848ce7b"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","91d6ca75c07d2612eee54a042cceccfe"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","2fe413f0615a275fcba113ad2f8ddf3e"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","09bf1c72e5d6a34ec5bcf0d91531d1dc"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","1c3f87804d08c7dfa7637504c8bb8fbe"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","303560e7c068a65453d3ac279601219b"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","39673e5cfcd793a7c413dc33f125bc64"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","f73d8a96add5e18846d49a25fa158a51"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","cdb06f3b4e395603921d60d0d6aea786"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","1c4e0d7a1cb48497ba76bc70f0af0ab4"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","d0333087468709621e24180e42d1455a"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","5306c40637fdd8910f7b83f8fb531d05"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","aeb44d23193d72ea3f2a83880da7a8ff"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","491d676888a642dd24ab45baa3fb1d85"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","e49b16ede31c03c46fe1076ae5e9f26b"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","8e764586e78c8d9cc7a90cac603470de"],["/404.html","61aeb35ec55a42eb2ea725c6841cc289"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","bd9ce055fa1489bff88ef2ae81e50313"],["/archives/2021/02/index.html","7ae702a7c109b2ca4abbd839f600000f"],["/archives/2021/03/index.html","437b9d944273fe9b34b7a4a98a483aed"],["/archives/2021/03/page/2/index.html","e54f2411b5a446bb5a4527dc4860b6ca"],["/archives/2021/03/page/3/index.html","ccd3d54d2c0ed09469874f267291e06a"],["/archives/2021/04/index.html","29c47f93c772e1ea012713ff1bddb286"],["/archives/2021/04/page/2/index.html","6125471bd9ebad8ab9c40b45cc7b206b"],["/archives/2021/05/index.html","46fdb3e1ba58a2ea757f63a9e7559854"],["/archives/2021/index.html","cc984893d065de8141cea8dbd6f6ec1a"],["/archives/2021/page/2/index.html","4ed0143beb6829c1226bfd9d086dab1e"],["/archives/2021/page/3/index.html","b2bafce8069a58319757287b1969c409"],["/archives/2021/page/4/index.html","9ddc0e3b957a61d07653cc81fb1d6143"],["/archives/2021/page/5/index.html","9c10f27ec18750d6ef30a8096a389035"],["/archives/2021/page/6/index.html","8f4c8cf8a34868b9ae21653d56c1a553"],["/archives/2021/page/7/index.html","f68c0d46d35b88b29dfdd6eb01e8a749"],["/archives/2022/01/index.html","4d1ca8baf47bc40169adb0f6866cfb9f"],["/archives/2022/04/index.html","74b26edb528976f98ab3c43305e37232"],["/archives/2022/08/index.html","b0fb196306877354f52e5bb304630287"],["/archives/2022/09/index.html","82a695f9e862c1c63515050034dfdae8"],["/archives/2022/09/page/2/index.html","333eb2402742e5bac95c210206324601"],["/archives/2022/10/index.html","b60e4574a4e44dbf9bdeb7033eda0fe5"],["/archives/2022/11/index.html","6b9cfcebd7257b32b2a84b204e58324e"],["/archives/2022/12/index.html","cf5d6acef6fb2c3bd202d2a153dc5171"],["/archives/2022/index.html","50117300269b3bc5d5412a2b89db9026"],["/archives/2022/page/2/index.html","c3436d3c45050c0b394ede033e1085c8"],["/archives/2022/page/3/index.html","a8deeb2f3b07072bfdb0256c8d4274c0"],["/archives/2022/page/4/index.html","5e188f88e7ae8c5b086c522fb1a51952"],["/archives/2022/page/5/index.html","504792787c6bc28f7131c7a7c8f589f3"],["/archives/2023/01/index.html","bf892dffdf970aa6c7c6e0de19711368"],["/archives/2023/02/index.html","d8d2129209deffe5de5c5efbffe3c520"],["/archives/2023/03/index.html","bd67e5e1081310f555003beb4308ec88"],["/archives/2023/04/index.html","cb3de22c66c90e362fc0f03c7e98d0eb"],["/archives/2023/04/page/2/index.html","9b18146ad672d3ca7c381c3f9c475fe3"],["/archives/2023/05/index.html","1783cd61a21c6d784f62eda56a321758"],["/archives/2023/06/index.html","c7eec77a7bbef4d632c7804c415b4d41"],["/archives/2023/index.html","dc541d39e4fec8bf1ad944f81bd2a8a5"],["/archives/2023/page/2/index.html","e12369c15ee49876f66b74e7884173a2"],["/archives/2023/page/3/index.html","c007069c3ce2257224182e695b87f773"],["/archives/2023/page/4/index.html","aa650568ea75de78c570e919955c45ec"],["/archives/2023/page/5/index.html","0bc41602ef78092c4ff7ab4d514260a8"],["/archives/index.html","8771dd598692496b84f3a3ae8cf76538"],["/archives/page/10/index.html","3bc85378a8ab7b38915f04b9a7b1c395"],["/archives/page/11/index.html","e155d74153c58715f08625c3f78187dc"],["/archives/page/12/index.html","ddb5fa476cc350867f8a2477b0c3afa3"],["/archives/page/13/index.html","7b2462afecb53f0abfc65cda4d51d65e"],["/archives/page/14/index.html","4d92db80866b2a7ce51d510b200895cc"],["/archives/page/15/index.html","5d1bd950d08f5a1f349d47cd6319c15a"],["/archives/page/2/index.html","bfff48b2e1dea431d9caeeedbfcec7b9"],["/archives/page/3/index.html","a707b701cfe749a24feeabc780adcbf2"],["/archives/page/4/index.html","be15b79414834864d8b4452a8d478a78"],["/archives/page/5/index.html","44d492738a27a5d502a197cc4c3de88d"],["/archives/page/6/index.html","c3847bbb8547a2f6bea42bd037dd2623"],["/archives/page/7/index.html","573450724f3f397921eeea05bd8a32d6"],["/archives/page/8/index.html","f71bc04c416b546112b222c1696b1073"],["/archives/page/9/index.html","3e862b83d3902aad7029cd2590524fd0"],["/categories/Devops/CICD/index.html","873a951fe6a90b367ca2679c2085733c"],["/categories/Devops/Linux/index.html","d3e2aa4a6b95223fa100a1f20053311c"],["/categories/Devops/index.html","c3bb5701797042f036c17e4b3d532391"],["/categories/Java/JVM/index.html","8f8d95359376b65fdb0edb2d5af92cda"],["/categories/Java/NIO/Netty/index.html","6ed71422f44fc68f03c268ffc7f54e4e"],["/categories/Java/NIO/index.html","cd8b7870aee0f08d511c3e610cf0013f"],["/categories/Java/NIO/原生NIO/index.html","102bc5605ae8793b160e53a13ae31062"],["/categories/Java/NIO/文件操作工具类/index.html","dfe4dbd7fa67f955d50dcd711372494e"],["/categories/Java/index.html","02e0f8ccd4478a9e4af495b820f2357b"],["/categories/Java/page/2/index.html","007576292ffff421084935a00e4cc8d3"],["/categories/Java/学习路线/index.html","18faa06c0f005f4696d9a276eea00b15"],["/categories/Spring全家桶/Spring-Security/index.html","72eac6119818e07800cf624c136d30d0"],["/categories/Spring全家桶/Spring/index.html","4c982f6512bd6243fe27462af2c92cca"],["/categories/Spring全家桶/SpringBoot/index.html","2a639b2197a0dd4f2024540846a3572c"],["/categories/Spring全家桶/SpringCloud/index.html","c989a8a87c82183c050fd4b9afc2277c"],["/categories/Spring全家桶/SpringMVC/index.html","80055cbd596b2d0c59a0e22412bcf737"],["/categories/Spring全家桶/index.html","ad6884e819a8a476e7b7e638d787f51f"],["/categories/Spring全家桶/page/2/index.html","57ef35c4a8f45d0baf812e0b613bbe0d"],["/categories/index.html","48145aeb7d4d72d706a6bafe7c2e0056"],["/categories/中间件/ElasticSearch/index.html","ade2734ab4c9ee295e3231159f766389"],["/categories/中间件/Redis/index.html","0d1cd147fbd0a872606becd20b445fd7"],["/categories/中间件/index.html","203e99d36a5f73e303d9ca9afeec4e95"],["/categories/中间件/page/2/index.html","2a729dc95fe4d9b83dbcd772b3e858e0"],["/categories/中间件/消息队列/RabbitMQ/index.html","8a97599d6a365e2de596cf70dab584f0"],["/categories/中间件/消息队列/index.html","5f3839222ed5739ccee132d02da03f40"],["/categories/前端/Mock/index.html","c9cf45305430ff03d5db45f4247f07fd"],["/categories/前端/Promise/index.html","8efde600bb8424d284c221ddc19e745f"],["/categories/前端/Vue/index.html","0f40af05a4a82e495d28f30883282765"],["/categories/前端/index.html","d06b7cab2c68e1b946cd79d1ab98787c"],["/categories/前端/jQuery/index.html","981beec57d765168b2f056beb91dba69"],["/categories/前端/page/2/index.html","7b840195570c43dbc815c81eeed4e41a"],["/categories/前端/原生基础/index.html","a31821613ed4087a1ac0ca4f0366260e"],["/categories/前端/异步通信/index.html","4eb9bd5426be675eed8dc74a3c5c46f3"],["/categories/工具使用/Git/index.html","0be4c814439497cab57bf48f57af46af"],["/categories/工具使用/index.html","be16eadec22439026fe0acefb460bd8f"],["/categories/工具使用/markdown/index.html","1c43be6510c7f1ae9dc96c36686ba8ad"],["/categories/工具的使用/Docker/index.html","5a9e3356740daaf1b740abe88bc7970b"],["/categories/工具的使用/Nginx/index.html","870e6ccbf7122cb8157735c5e109eef3"],["/categories/工具的使用/Swagger/index.html","b5ba6f7aa26055d952639a28af9158d7"],["/categories/工具的使用/index.html","a6e5af0c3cdf847058c33aa7865a702c"],["/categories/工具的使用/博客搭建/index.html","6f5f9f3869cf168e5445c3c29e81c440"],["/categories/数据库/MongoDB/index.html","5ca6e98de1406fc7fea79dafed2b23dc"],["/categories/数据库/MySQL/index.html","3b535b23591a5d91882b631b20b5e423"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","05d065e8035be9306e3dbb2b7fcaed37"],["/categories/数据库/ORM持久层框架/index.html","74847730b2b5616fcc98de27264df636"],["/categories/数据库/index.html","55d85013307d7e35b5d47c14ede71820"],["/categories/系统设计/index.html","07cf8b9b1e11bdec4559240bc8b005b7"],["/categories/系统设计/page/2/index.html","14a379f91779f93e66854ae207cbccb2"],["/categories/系统设计/分布式权限认证/index.html","1ef86043648f96bf64c8f054db97b515"],["/categories/系统设计/设计模式/index.html","de63b9c64ab6378198ac62e1657202ee"],["/categories/系统设计/设计模式/page/2/index.html","0afaabd4598cc77201b504a0089b66a1"],["/categories/计算机基础/index.html","38ce8ba6102e83de0a8caf1cb7e3a66b"],["/categories/计算机基础/page/2/index.html","bd54331cdfbd10a07211a17f845b9288"],["/categories/计算机基础/page/3/index.html","b29c85ef56999dfa2a6416c4e8cf453e"],["/categories/计算机基础/page/4/index.html","e88e4d69f8d329447f5ad4fa8383fe31"],["/categories/计算机基础/page/5/index.html","cbcd4eb449332da8dc3123df02612c82"],["/categories/计算机基础/page/6/index.html","6aed080030127d908992d6af08cd292b"],["/categories/计算机基础/操作系统/index.html","b850ab70e8c3fe48ac92cb8cc7c2de8a"],["/categories/计算机基础/数据结构与算法/index.html","78d1661054e951f8c8f1107f3361fda8"],["/categories/计算机基础/数据结构与算法/page/2/index.html","88f97a02817de9b9da3db6a0dcd624b3"],["/categories/计算机基础/数据结构与算法/page/3/index.html","ab0da796ca5dea59a1d2217989792739"],["/categories/计算机基础/数据结构与算法/page/4/index.html","cc732a22a3283d76a8aa75709700bdee"],["/categories/计算机基础/数据结构与算法/page/5/index.html","d81c0cfa68e0f7753de2a55ea06bafcc"],["/categories/计算机基础/计算机网络/index.html","c0a2edab8feb082d2cd5d141882ebecc"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","6b88e1d69c6586729c464dad96c70a09"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","62dd0af1a1f97abf327e4d7fc2bde2e7"],["/messageboard/index.html","e9f748c6e1f1aca52fbd844cdc69ef88"],["/page/10/index.html","13299de77b2f6dfe1c51dee9812c272e"],["/page/11/index.html","d09b8e306682a802ed23f5cfa314df52"],["/page/12/index.html","ad89f6911cb8110dfffa7494adc6a3e0"],["/page/13/index.html","99ba095b779ade85eabd198744c168cc"],["/page/14/index.html","3790f846ade7a8f7802238f44a017a1f"],["/page/15/index.html","b6e6df2e8b09ef941e95bd3584e1ac8b"],["/page/2/index.html","f2ac94bc2aa5127f085137fba829f61c"],["/page/3/index.html","432a232689a365fc1a076307fe175b8e"],["/page/4/index.html","4d251cbdfa1f949d738bde1079ec5fd7"],["/page/5/index.html","bd88e008e4af38e0a995bf2891ac2579"],["/page/6/index.html","cb6592d866e6bf8d5277dc2c1e822b07"],["/page/7/index.html","980f3ca384190f4a9a3b3001224c0131"],["/page/8/index.html","6aab94dae4c6682ff55769ea6ea13657"],["/page/9/index.html","163f0a214cb778578d212abb872cfc9a"],["/sw-register.js","6b4c64583508d6533932e6023306907d"],["/tags/Ajax/index.html","bc76b8d8e27719e87bac405cbb70c88e"],["/tags/Axios/index.html","48fbf3000bb254dab72896e72844ecee"],["/tags/CICD/index.html","5d92f5f30c73c9c4e0ec21954fddc411"],["/tags/Docker/index.html","4b7f511e113a0d6e32c57f8a46268291"],["/tags/ELK/index.html","6fb4c7a9319a2e225e91402a8d78cbb5"],["/tags/ElasticSearch/index.html","0694193ed9bac5d6348c0c7a1e302bd7"],["/tags/Git/index.html","e1ae1dd2bd4281b59827ff186c02d8c9"],["/tags/H5/index.html","414c983d707864ad79a539288fc56def"],["/tags/JVM/index.html","697daa74716c9a638d3f93bdc44486a2"],["/tags/JVM内存模型/index.html","cd14523ea9d5b4e11e6cd2843757c6e5"],["/tags/JVM执行引擎/index.html","3082aab1997f8dfb7de537ae2f9eb464"],["/tags/JavaScript/index.html","1e0fadc8d8c24f4289e0f22553858237"],["/tags/Kibana/index.html","718334e8d6091ea7dbb40ac09352cb53"],["/tags/LeetCode/index.html","d8e6bdd59d9be8b8c667925597c25d19"],["/tags/LeetCode/page/2/index.html","5934abeebb9145f30690a8cbbd8dbf3f"],["/tags/LeetCode/page/3/index.html","d6af58b0a1fe8e55d4dfd1193620f363"],["/tags/Linux/index.html","33f4c4c2d584d758155b10b48d0a0fd7"],["/tags/Logstash/index.html","6e63e3eea86fddd912dc63945165050c"],["/tags/Mock/index.html","ceb37db5a65614837d3e2ef1a71eee56"],["/tags/MongoDB/index.html","e7d6aab39b2bc5f69eea0ebc224675a3"],["/tags/MySQL-数据类型/index.html","7c9fab3f809a39b4d5a96600e1c29e07"],["/tags/MySQL/index.html","cd485065dcb97876245d44990c676ec3"],["/tags/Mybatis/index.html","d7ff7f682856c5ac28bc69ee0e6357ee"],["/tags/MybatisPlus/index.html","61fe212bd0eb130cd8e661f363424948"],["/tags/NIO/index.html","86f955f2d85f5afdf9dce2e5b3a660f9"],["/tags/Netty/index.html","9763903ecf4cf13b433c9e682d70b6aa"],["/tags/Nginx/index.html","d2f694348794814c4e3cc4f27d6d0470"],["/tags/Promise/index.html","c77c69b9b0be35e19a985d3358e78324"],["/tags/RabbitMQ/index.html","bb68ebc15f861f83aceb830e0bb5ad1c"],["/tags/Redis/index.html","1f44d8927c252fd6afc7ac98e0bb6294"],["/tags/SSM/index.html","247ace6393d9cbd986e907b1b3383921"],["/tags/Spring-Security/index.html","e2af9ae449420af5abd4a9a8447ae57b"],["/tags/Spring/index.html","7bcba03a512aeffec33a43a6d6d30d04"],["/tags/SpringBoot/index.html","6c4e70d4926aad83c053067149ac1da2"],["/tags/SpringCloud/index.html","bbe0a5541b648a28f25d7292dc2b43d2"],["/tags/SpringMVC/index.html","a5a45ab11dfc00f13e6e9a52d3d0b0cb"],["/tags/Swagger/index.html","42c7096cb9ddb3d458895aa4b2985104"],["/tags/hexo/index.html","f47f441ebc64228cc4bc66c908d172c0"],["/tags/index.html","22e1a27c8caaf00501caf5fde2ebcb91"],["/tags/jQuery/index.html","6ef5acfde04ab3ab6aa222916db39087"],["/tags/java/index.html","c7b14317b0418596bef75ad79a5a4f92"],["/tags/markdown/index.html","e87a8937197e8899d5f004ee1b2600de"],["/tags/noSQL/index.html","f7d150bc2911a481c5ca896cbf308004"],["/tags/typora/index.html","56a4ffaf87ccbc3e2ee096f35e90c31c"],["/tags/vue/index.html","d134e43d3d5acba84bd5c455408f0b0b"],["/tags/享元模式/index.html","fa9174aadfc656218c6d68d0bb50f028"],["/tags/代理模式/index.html","c9875eba8309bbb6b60f9d45c27c1ac9"],["/tags/内存管理/index.html","d1aa18963067fdce0376095c17365c0d"],["/tags/分布式/index.html","1f7debdc68c480eb77ca3223db72ad27"],["/tags/分布式系统/index.html","509fa8d92c28b14f07938295510dba9c"],["/tags/前端/index.html","06e79c52ea3c5b90e56aa6e408e2d9d9"],["/tags/前端/page/2/index.html","02a4d853c4572369199ee28b575bfc8b"],["/tags/博客/index.html","0a6a31431aa0a5fee794a4fd5e732ecf"],["/tags/后端/index.html","189be5afbb3cc44c9969ce5a9f98c8e4"],["/tags/外观模式/index.html","92a4f3b873c83c6686e52e4eb85eac74"],["/tags/容器技术/index.html","4047592707cda56fbdee1f974247662c"],["/tags/工厂方法/index.html","3bb9b39a207fb7de7899be68d9b173b0"],["/tags/微服务/index.html","6dde4f5583d178a5a8e229fb990222d1"],["/tags/抽象工厂/index.html","214cf0dcf620bd308decbeb0e7e23e9b"],["/tags/持续集成持续部署/index.html","5bca95292a84bcc0639a2a24657d9777"],["/tags/搜索引擎/index.html","fe3948d70c0c41e2c04bf72b2d647d48"],["/tags/操作系统/index.html","54db9fd0a109353c0582ebae628e2061"],["/tags/数据库/index.html","8c59be539d72ab0da987c15a431f06d5"],["/tags/数据结构与算法/index.html","6f341f65f38347344f15e41d60b64fdc"],["/tags/数据结构与算法/page/2/index.html","d5072849917332d1fa3dd15039b10383"],["/tags/文件操作/index.html","4c591425436c2d1f78b4b49e2d25f702"],["/tags/日志/index.html","07c4f28d735fd8d317c4d1a59a0e1988"],["/tags/服务器/index.html","d82aa4304b9cc62bdcaed5b227b26b6f"],["/tags/权限认证/index.html","40d6e2477db14e0c12799bef5b1b404a"],["/tags/桥接模式/index.html","a9b52291b6a911a77bf9571a621eff8e"],["/tags/模板方法模式/index.html","ae1b7db5d508f2eb6ba7145b7d8f8c0f"],["/tags/死锁/index.html","95b240e22b1022581446e4ab389b60f9"],["/tags/消息队列/index.html","5761f58c3e24bd050649dae14af0d8e5"],["/tags/版本控制/index.html","0756b0dc0d241bfb9b40975df48c0d0c"],["/tags/策略模式/index.html","cb336d8b863c89f16d18c5fe324bfc80"],["/tags/简单工厂/index.html","17176113696d5d5f632907179dbe890a"],["/tags/算法/index.html","29bb49b8054ea4441b08a66b5c5bd9e3"],["/tags/组件化/index.html","9fd2be4a20aa80ba5c2e7e466725e7ad"],["/tags/缓存/index.html","b55ff851ff9cd66e8be50b8103abe53e"],["/tags/观察者模式/index.html","48b69ae342bffe1c52a6cf6ebb5b1e69"],["/tags/计算机网络/index.html","422c20480f0b62b4c0e5e4fc928f0250"],["/tags/设计模式/index.html","396aa3ea9a389ff3c7ff9ca5bab32081"],["/tags/设计模式/page/2/index.html","1e192a41f9685a553f6ca5d74111f64a"],["/tags/进程管理/index.html","a181a4adc2dd01001ffd8b60bd6a8ddf"],["/tags/适配器模式/index.html","40ad77f0454eb5cce410d85d3d5521a8"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
