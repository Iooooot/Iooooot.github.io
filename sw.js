/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","b60d6f3778f7ced58ae323ad078e1619"],["/2021/02/22/工具的使用/博客的搭建/index.html","6eb700d14bd86b2651061156d8008e87"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","84073430f0a70d1706b3ddfb6dfe14b4"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","a18ef4f06f4ac7406d61017c2b96476a"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","716bf8d07ac9ee9b7a48cdbd6f11bd17"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","6be059b91caa6c3b6b9944c2fbf008ca"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","7f478514965b1e5953bbcd9abad34b4d"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","d34128e6f7244ea992f7479dea63f606"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","53f5b697d4dfaaecd32408e30741b1d5"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","b85f39b92dca2bb4c14fa6651fd06378"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","67ff7446e570f84bcaabed762fbd1ebb"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","42b52d43dd264f79217203250835b710"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","61b22ac0d86399b240d6a28e3c309875"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","443d0c85577a9b68b072681837a50490"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","b99f89746496ed7f2fc385f11f546055"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","d4ca94dcbe4cf8b1c8b3a778ee8c315a"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","ddb69376522d0dab5cd6909ea901968e"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","8bb13945429a65e0900910840d81c489"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","27b93df743333417eeca50d6af668d71"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","d38f54227f1320fb4baaeb7c2785501e"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","b1ee8ced9fa3073b82a5406a09dea572"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","fc2d69b4a8a3bacc1f039203f0c015d5"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","f6ed59fcfe7b05d978d1a880ca449e50"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","26ebf98bd12c27a7f08305f57ac8cc0a"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","43e445bd402ce00caf6bb16b989f1084"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","b630d9c6be49672e9ea84b64a2eff4da"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","03185c028685ad6c5e8cc61744b0d2ea"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","264d66908b0c465b7e5609e5d91fc778"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","4eb9a325ace9fa5f7da7403155088ec8"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","f1145d7c061bbc962defa9636d37ceac"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","4e62ebbc4f47b0aa7013aafb944e3691"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","2a824b8e6327497de3f541641731e587"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","558fb1ee644e73cf596666aefa4a1b2d"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","10e82a117e5c9bdfcc60e52b74262487"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","abb6bd9e07a6fa7f937501e7d8ae3d5a"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","38a98f879d0683e95506d7b41b88b64b"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","31feefd9d5cf98ceada20d808cc492cf"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","47ab147ed9a977b333a17085fb34e676"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","b1dd03eff90c8e4fcb12901746486db5"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","60f1283e699815bdab1f46562ce19e59"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","a69639bbd6e23b9526591374e18e1a2a"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","a65362215ee65ed0b526f61db2bcba30"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","2ef5b19516ca28177134ed069259b56d"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","7b90632d0e18c69f054c72027d617414"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","ee8765401a74a7eb2d1e2a7fab746b83"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","be1421e0abfb3bbda7d8aafaf146f33c"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","b76820b9e50a833390273934cadb398f"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","e27ba5b0c5f5ad8af32ade9fd5025377"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","9df730fc7bf14e1ed1440497f4a1adb1"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","815f5500436c1035dae4161ecd78d8d3"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","00ae6d8843fba113658275d0e06a9214"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","f45f56ef63ca6ed696865017c5bf1527"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","9d7dca520cfa2e83a3038923d8b55629"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","5ea19bf00d2acf7735558bcef6538e09"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","3a12fc0bc10a306b3a30e2b0dd505857"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","6246ef6e5690772b6642db1a5c756ea5"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","9962820004ade96b17bbdf78096056ac"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","f73ecfae36946083a41995eb7e81fe27"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","66e182b1e393864f49c751bb8d2f1e5e"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","f8dcab5f2f460ec385931231235d93af"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","4fe15006b5f8b7e6d49da4a27e9e1f74"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","19a6433b25634bdb90ed804c312280c6"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","00f5ed38abf90fec1b2ab7f8aff67b08"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","bc58e865eadd393893f88212d3c1e04a"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","6ac5d86ad73eea276e49234417a2e11d"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","73187b324476c3e46c71551342fa6454"],["/2022/08/17/前端/jQuery/index.html","6897ab0f064c0ad4405dbc7082725ba6"],["/2022/08/19/前端/JavaScript/index.html","01556e5742dc5b85b275e28e0fc51fda"],["/2022/08/22/前端/Ajax/index.html","1bdb66bd32418e4d3db1c558c0adff96"],["/2022/08/23/前端/Promise/index.html","7f1676bc743f28d3c49b4a26072ad1c7"],["/2022/08/24/前端/Axios/index.html","9ca0b969a152572748d923b8cc060d1a"],["/2022/08/25/前端/H5本地存储/index.html","d86b4c17b0ef642e56dfc55bc6cd80e2"],["/2022/08/26/前端/mock/index.html","64cbd15e9716b263d84747b07b6492f0"],["/2022/08/31/前端/vue/VueJs/index.html","9e2c218a303a57f8b66688b3bce25237"],["/2022/09/01/前端/vue/vue组件化/index.html","e1d64cd6f69631e886259d225344dd1f"],["/2022/09/04/前端/vue/VueCLI/index.html","c7968f10a8d03f653d5f1fe6024af853"],["/2022/09/07/前端/vue/vue实现动画/index.html","3ff901398747ddcea2747123287f357a"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","19e787e413023ba4262d09258626bfde"],["/2022/09/10/前端/vue/Vue异步请求/index.html","239ab5a127e01eb6dc3ac58c11bb4af6"],["/2022/09/11/前端/vue/vue-Router/index.html","64b8a7e9df0922c657dd8ca35f279521"],["/2022/09/13/前端/vue/Vuex/index.html","3a012a5a0a276763c987bc41a719b98e"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","3d98da4de49d3a24cc23d1c8caa112b9"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","62491316023d07d01d32017a4dc411d1"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","1c64924be73b1124ebcd30e6fe97cb5e"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","696fc219514ae37b641204a89c0ee2db"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","4473377cb781579bfac2b3993c94073e"],["/2022/09/28/DevOps/Linux/Linux/index.html","b4ef8b5c06c3a803c618f903743727fb"],["/2022/10/02/中间件/Redis/redis基础/index.html","931026b8734d050e4c822f0b5c2973fa"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","62933366418f7665a2ddcda816f99845"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","ab6fe1277ca3da6a4ac5ecb07e08c032"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","b694997144dd68c4ad2dc031467a266a"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","975609e3ce22d6183d016b1234e1cd7d"],["/2022/10/17/中间件/Redis/Redis集群/index.html","3002e56c69c96c3156a9dbd2dea743c8"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","119f3b7ba85bb5f7484bd71275de806c"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","e74a412233fbcdda260dc3312dd360f5"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","55f7f683b67f15ba37d7496301d87b25"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","494143a8e6ad7514edde8c5d54e2fbe7"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","06e9d8b9b19b470f0c8ab0ee1baa8168"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","90cd52fea4e46fa17263419ebe797c54"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","e2567902a5970d59827b076e0544cd44"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","5aeb2c3ff7bf2fdcf355de4ba79df452"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","18b2f30bed6f4b9d22e2dcc28ffa3f49"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","60c433ecd8c21172095218325716ec39"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","f123f81610800da37b425ea544d387cd"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","bba83eaffd28f3af5a71b4fe7925fa3f"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","cfc32ba7c4f36574775b2a337ee7353e"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","fea64d77fd47d6fe08b7690a3968da6d"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","ddc069b8bda92c3639632068ac0bd3b7"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","b70c06b661f3323bb924f16867b58b24"],["/2023/03/10/DevOps/CICD/CICD/index.html","1be7eef6e42b70351278ac80b6c9e837"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","a59f852acc5ff6386e8c69c6d3f3cc84"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","d707178ea0c8d16b1b00f7b56b0ac9da"],["/2023/03/13/Java/NIO/NIO/index.html","4ef6818888b3c0982d353114ff7a5359"],["/2023/03/14/Java/NIO/Netty/index.html","08bf08c977ed95caaf7f796120f6c4de"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","3d4841293213bb435b614714fe22ee8d"],["/2023/03/17/系统设计/分布式系统认证/index.html","f795d00cdae525bc0f2096f62daf70dc"],["/2023/03/19/Java/JVM/JVM概述/index.html","ee6c0a80235caa013df7278dc5c21cde"],["/2023/03/23/Java/JVM/类的加载过程/index.html","752eff9261123d4c2a198fdd4ded0f19"],["/2023/03/28/Java/JVM/对象的实例化/index.html","7c32744714deab447492c4f3d0022135"],["/2023/04/01/Java/JVM/运行时数据区/index.html","b02a8fd6bc9de6c2f23f3b040d106f58"],["/2023/04/04/Java/JVM/执行引擎/index.html","6978015c639e00ed0c0641575f5aa89b"],["/2023/04/06/Java/JVM/对象引用/index.html","835cb27416d5bb490abcb523ec7f32cd"],["/2023/04/09/Java/JVM/垃圾回收/index.html","c12f5ef68c8287d6052463ed0d03128b"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","f650c69a8e29438ef647df7053e6cdf9"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","473b3c7eab6dc7a20eb076e50bf1be8e"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","46c18141d7cd756c361b92d9a0671109"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","ac126875526aab9bd31f2efa83ea97c2"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","703c481ff3311cf10c3b482819e3122c"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","3b7807ab14e34ace8560e99b26b8e181"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","763930f39a248219d51bcc3c49facded"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","fbf57155e152de51ca2a2eb5f8ed2188"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","3cd15bda54dabca76298759fb0d283b5"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","caa6c6eb36092829203c65a8f2abe739"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","5442da0619f87411156c04f4b7944edf"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","c4502a6f60a717c2ae1bdb5fe7d6d1db"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","a3e9eafcf27227c38a0110f6d6cd4d4f"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","727a3ce30a2a5b19bb1166b95807b7cd"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","87590cf5f15e3340c7eeb0e4bf649b96"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","32622a03d79159869c1afd3357be180d"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","415036713f894e83d3e8631ab3609856"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","8f1810ddb583821007d9f37424e49920"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","4fd4444bb4bf0cb7d5a7e24a2e26603c"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","866149d63d9e8a26fa0775b9ab1761b3"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","58c7837590a484d1e9fc9cef7fe54291"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","70d77c11ede24e014203d7bb989cb7a2"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","9d3aecb2bcad1e6c344b7ec7f29862ab"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","1722d98416556869eba1853ff639e1a4"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","e857fcfcd1f199cc056de06165fa7b8f"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","1a5f5cd44bd0fc2d82d29411fb961398"],["/2023/06/26/MySQL索引-二/index.html","d921be581538efe1d12dd52281dc1dc0"],["/404.html","71f01993c1ea6ce64f32d9e6b641b1f0"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","49e83c0fcbefe60f1f1487e5edff273d"],["/archives/2021/02/index.html","8d463f9d66f848a13e48302477f2ae18"],["/archives/2021/03/index.html","36f0c308d4b1556debff5422b4a2914a"],["/archives/2021/03/page/2/index.html","1c80b2b91a53f96c6c1670c59581458b"],["/archives/2021/03/page/3/index.html","3b8a11a655be53545e75ace029dfcf51"],["/archives/2021/04/index.html","a94346a137bf35988a7a845da6fc05fc"],["/archives/2021/04/page/2/index.html","d8499eccfc002055760871459152034b"],["/archives/2021/05/index.html","25abff6e15ba4900510534584365dd5e"],["/archives/2021/index.html","cc7e1b51493859c1dee6f8bb4ef83b91"],["/archives/2021/page/2/index.html","42429857cd09e6b8cdf0ed2d7578d15a"],["/archives/2021/page/3/index.html","d081b1084ba8eadddbe9a6590b6428d3"],["/archives/2021/page/4/index.html","32ad21a2735eac96ee3a214f6e7c7f23"],["/archives/2021/page/5/index.html","dc00f0e15b9b942f46431c810b94e429"],["/archives/2021/page/6/index.html","4d8484d30ca2498984bccad34214a825"],["/archives/2021/page/7/index.html","d7bc8a324855b191b471c747e4edb759"],["/archives/2022/01/index.html","5d4473b4af7953f05f011f9d5c148ffb"],["/archives/2022/04/index.html","af62bdc98dbcb6ec67fe09d9e36c0299"],["/archives/2022/08/index.html","c0a13cb89089249e4c18a8334afec103"],["/archives/2022/09/index.html","06a2d7cceaad95fdb9d94175878e4341"],["/archives/2022/09/page/2/index.html","503e18d3e2365b5fe62a8ec17e7f3f52"],["/archives/2022/10/index.html","fce22872f3337cfe0b7b42d1ea9903cb"],["/archives/2022/11/index.html","357d94898976f3ba44526c23b3696eb0"],["/archives/2022/12/index.html","9f0262ef6b0d9f27fadd0bd60d277527"],["/archives/2022/index.html","3f4f5341d87bb31376bb85d82ca964a2"],["/archives/2022/page/2/index.html","9a63e77e1bc347c7c9ca83bbd38fae02"],["/archives/2022/page/3/index.html","c90ff7e1f65f72da822609b4e6558491"],["/archives/2022/page/4/index.html","c30c5fdb8bc2b51642cf3c1856984e29"],["/archives/2022/page/5/index.html","4f7dd8ceeb52fc6d7cf56b2f93ba9088"],["/archives/2023/01/index.html","6e52f5c09294b5c76726e43c76b48739"],["/archives/2023/02/index.html","95e6261467414913aaf84061afebe484"],["/archives/2023/03/index.html","fcd152e52e4159c0b5b062c4ad9618a1"],["/archives/2023/04/index.html","c62339bcfef459bf3e4d5f2331295a08"],["/archives/2023/04/page/2/index.html","55684d0c4004241de9f73671cc9f7bfb"],["/archives/2023/05/index.html","ff6c4bd54e7acd1cace75075a24307fc"],["/archives/2023/06/index.html","dd429720f2d2ea79609955fbc1ebdbb3"],["/archives/2023/index.html","b1e8fb5d69955de0e48b815928538885"],["/archives/2023/page/2/index.html","2abdf9e2e551bcc3e73434bbddf48db3"],["/archives/2023/page/3/index.html","0e36852ead3da1b54fa8c44a6948609d"],["/archives/2023/page/4/index.html","015926bdcb76ac41ed3a97104d09995e"],["/archives/2023/page/5/index.html","762b1fa3e07e6a4bb2c6eb54c75e2de7"],["/archives/index.html","7563d6fc09f12be82947cae43514081c"],["/archives/page/10/index.html","3289dc85360d1c2707425d68614a7d3b"],["/archives/page/11/index.html","2665d84371925ea4290482f33a2a5329"],["/archives/page/12/index.html","58637be1c265e001857cc7e4fae0e1dc"],["/archives/page/13/index.html","21fddf8754188a139c255092ccad4077"],["/archives/page/14/index.html","aa560b41bb7f88996e7b58bc5a5c1d89"],["/archives/page/15/index.html","ab975083945d6bc46d2cde176712f286"],["/archives/page/2/index.html","32ccba7927ed0eabfd6b36bf9fa8818a"],["/archives/page/3/index.html","c8078997f7f9f439e432157fabe6f5ab"],["/archives/page/4/index.html","ef9e3837a8940a3d702b8a47e5ec8399"],["/archives/page/5/index.html","34af83b14db762e940d032f1596b5d34"],["/archives/page/6/index.html","e92e3b53e9678ffb0e5b34a270a92b04"],["/archives/page/7/index.html","052e263c2d2ae84e1ae393555f12d71c"],["/archives/page/8/index.html","36063447f331f9ed5d0995814c0de644"],["/archives/page/9/index.html","5a8951bce2f88819c2adcb47a4bfa1a9"],["/categories/Devops/CICD/index.html","3de371235a311feb2f4ff1aae4e84ee5"],["/categories/Devops/Linux/index.html","ffb47abc8af314ce5d5217e19707685e"],["/categories/Devops/index.html","6fdb20e5c285f0e69dc0fa3e9e83a394"],["/categories/Java/JVM/index.html","603965828bf4d30543eb8392514a195f"],["/categories/Java/NIO/Netty/index.html","bbee0cfe9554287d0a60605019d12dd9"],["/categories/Java/NIO/index.html","325db13473ce285dea26b9b8add88ef4"],["/categories/Java/NIO/原生NIO/index.html","9567a44eeabebfd938f85ae609c0f6e3"],["/categories/Java/NIO/文件操作工具类/index.html","1f46f5131b9cbcbe5e5f4729d0b08a24"],["/categories/Java/index.html","1d4b19d23f50de02a368c9d5bdeba986"],["/categories/Java/page/2/index.html","b044034bc39af706f31ddfb325bf10f9"],["/categories/Java/学习路线/index.html","ecc87afe111f951a000169338e1fd1e9"],["/categories/Spring全家桶/Spring-Security/index.html","891b121a13224249044a86ce9dcfb003"],["/categories/Spring全家桶/Spring/index.html","a214ccb21e31cc115d7fbbfef0069dde"],["/categories/Spring全家桶/SpringBoot/index.html","d9bac5f25234faaa046a836c0a9ab10e"],["/categories/Spring全家桶/SpringCloud/index.html","3cdad38ab82fcfa1d5eb98257b7584c2"],["/categories/Spring全家桶/SpringMVC/index.html","0c86f4c938f6d799400eef2e0d90f50f"],["/categories/Spring全家桶/index.html","08b495783ed912b48c4713d93762890f"],["/categories/Spring全家桶/page/2/index.html","0a619fc84c214bb6a2f2c41475de0ae1"],["/categories/index.html","09388dcd398e9041038ce2bba34453f9"],["/categories/中间件/ElasticSearch/index.html","8d7ffdc0b3fd8673c7699adb35919b07"],["/categories/中间件/Redis/index.html","f548fcccd2f0e20fa65edb6bf051721b"],["/categories/中间件/index.html","28fcb29fcbc047014d408ee03735f003"],["/categories/中间件/page/2/index.html","bc05dae8c2cc38aa22b11589b0995818"],["/categories/中间件/消息队列/RabbitMQ/index.html","c273c2bff77e6c80e4634ecc9c14c0a1"],["/categories/中间件/消息队列/index.html","7acd5992dcf6f3eb664702dc648f2234"],["/categories/前端/Mock/index.html","abad251931c7aaba4aaa37e7f8729149"],["/categories/前端/Promise/index.html","9bbe768d8b51ee4e59c9ff89d0e024c2"],["/categories/前端/Vue/index.html","6f1b557e2418967145baab157822ff04"],["/categories/前端/index.html","f7444db36e8b76d0194bbded0a0c778b"],["/categories/前端/jQuery/index.html","13b2f33e5c92eec87b98c13dc4c82795"],["/categories/前端/page/2/index.html","dc6ef28074f4c46b07ad6ca0d97c972a"],["/categories/前端/原生基础/index.html","72d84e9a48e9c2f6f630f2520ec1a1bf"],["/categories/前端/异步通信/index.html","5fef969bc196c693650b782426361ede"],["/categories/工具使用/Git/index.html","389c60edd1d41db7bdb242afd911f907"],["/categories/工具使用/index.html","5b7ef7c92c0571989f24b2c2bf6a9372"],["/categories/工具使用/markdown/index.html","827cc6245e88e5e1cd743169cd2eab9e"],["/categories/工具的使用/Docker/index.html","7e30f3c4c28a639bfea714bde02e8ec4"],["/categories/工具的使用/Nginx/index.html","ae14120289f1fe834d51a2406bf3bbe9"],["/categories/工具的使用/Swagger/index.html","030608f238377e904bb810574a3df69f"],["/categories/工具的使用/index.html","3d75902ed32cc6dd39708980d937ae05"],["/categories/工具的使用/博客搭建/index.html","28125f11eeb711f8174af9c908b8aaf1"],["/categories/数据库/MongoDB/index.html","5ee44e0827953189c3239bb3e69e2796"],["/categories/数据库/MySQL/index.html","374a8dfa401efe8fb947a7cd277d967b"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","ab4aafe214495dd264bb69a3eb10e17f"],["/categories/数据库/ORM持久层框架/index.html","bda006357d11b2c5d732935872c86835"],["/categories/数据库/index.html","e3529da4a37a9ed4155abc882c61b6bb"],["/categories/数据库/page/2/index.html","004f680b2a2e847aa84ba7ab26f7d051"],["/categories/系统设计/index.html","5974036883a12634c5189af26b6e587f"],["/categories/系统设计/page/2/index.html","0becd4688640ea1bbec4335c595af199"],["/categories/系统设计/分布式权限认证/index.html","cf44f586578c96634dcd69c179393e9c"],["/categories/系统设计/设计模式/index.html","aa643d7c40018063355d437c5f896863"],["/categories/系统设计/设计模式/page/2/index.html","a9f636144227e9c772b74a9edf382e61"],["/categories/计算机基础/index.html","2b6d52809ab5d9bea20922ca8e206b15"],["/categories/计算机基础/page/2/index.html","753f8d3bb6f079f0ceb1187d328226a3"],["/categories/计算机基础/page/3/index.html","127005b253a4b7590f3ea8348e9927e1"],["/categories/计算机基础/page/4/index.html","0e8c7748c3682842b1bae2d2e095e7af"],["/categories/计算机基础/page/5/index.html","59a689e6911f896211d1c780a99352b9"],["/categories/计算机基础/page/6/index.html","4e9f64b87ce8039e36ce0ab698612ea0"],["/categories/计算机基础/操作系统/index.html","c263346170a898ef959e7d278794fee0"],["/categories/计算机基础/数据结构与算法/index.html","f12fe0a3ea004079a609209db7ab0818"],["/categories/计算机基础/数据结构与算法/page/2/index.html","c837a1c7c38e42e25dcc8c3894a07713"],["/categories/计算机基础/数据结构与算法/page/3/index.html","79f0f75f796a7e8904063a3a15318e69"],["/categories/计算机基础/数据结构与算法/page/4/index.html","3d022b3889f422d7c28ec26b5da13124"],["/categories/计算机基础/数据结构与算法/page/5/index.html","e464a5468e11cdd9587979e204a04f7e"],["/categories/计算机基础/计算机网络/index.html","49f2590c2f1999a67f82e701408abaab"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","a4f2401c30a8931868f94ba29933a77d"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","a8399ca317c35b2483d8662ff1b97798"],["/messageboard/index.html","3db82a65db91df58abca333666c5f01a"],["/page/10/index.html","d14af027591cbfe2af42b6345587d6de"],["/page/11/index.html","f9fa5c0df926745ea5374cdb2abdab25"],["/page/12/index.html","a988b5a6ba7a7a0b7992d2cd3982e8d8"],["/page/13/index.html","446e21e1c1d43d7713f2a3abda370263"],["/page/14/index.html","bc126ad2421723e948769c8033000383"],["/page/15/index.html","6051bd42c802eb3fe5b41a78b85d5e3e"],["/page/2/index.html","1ff8ca676c9148dadbdded51de2ddc45"],["/page/3/index.html","cecd1034ecb91866bb5653659cfef053"],["/page/4/index.html","4faaa7919e775db0187c9016d0a9af17"],["/page/5/index.html","2fe8ba3d9f4b9f1dd4794065769edfed"],["/page/6/index.html","7e9eb032dedb0bfb8f79b005df744161"],["/page/7/index.html","11eee1868dd626e5a0ce3d20c2a01998"],["/page/8/index.html","cddea753552061110c7503040c23ed74"],["/page/9/index.html","03ce838ae67408ef4bb74cbdb6b51be9"],["/sw-register.js","0702ae6069f21f56085dc0b2c812fb27"],["/tags/Ajax/index.html","75ce9422c01505235f734c6ec6a57656"],["/tags/Axios/index.html","fe608734b626ff77b5530cf185273e68"],["/tags/CICD/index.html","fdae428c3f31f8152db2b85f9bb7ff7f"],["/tags/Docker/index.html","29835767dd0c7b8529a242f83e7f8b99"],["/tags/ELK/index.html","b4084f262ec5ff507e1c2dc764e130f2"],["/tags/ElasticSearch/index.html","53dea0516a59b4d2fa736fae1a2c95f0"],["/tags/Git/index.html","48207c57939a5bdae1adf9cf509bdc2b"],["/tags/H5/index.html","1daf7043a9d5f607ec5c61b3888802f4"],["/tags/JVM/index.html","c80bcb678b64de1c153bc68a3133a5d3"],["/tags/JVM内存模型/index.html","2fdebcecf6685d4f34789ad9005ea0c3"],["/tags/JVM执行引擎/index.html","b9b89c751b8b9f4ea4c9655912e1dd60"],["/tags/JavaScript/index.html","01e56561b13d39f9bd0431400317e440"],["/tags/Kibana/index.html","8e1ed7acb50f904da33dd623cdfdaf9d"],["/tags/LeetCode/index.html","aa54b83b3b030d10a0d38bd1a86159cc"],["/tags/LeetCode/page/2/index.html","3f2433c04dfeac56ce23a8c7655c05c1"],["/tags/LeetCode/page/3/index.html","4176245c5e71cefc998b32f49867e6ce"],["/tags/Linux/index.html","cfbc96610eeba0601e013efc91d35dae"],["/tags/Logstash/index.html","e5daffca31e4be9151abcf2d813be599"],["/tags/Mock/index.html","453a3dad2805557d72336e40da7ec070"],["/tags/MongoDB/index.html","ca40d78b0ac8d9e69e7dfcff2e70161f"],["/tags/MySQL-数据类型/index.html","d07d3c55c2b17e9fa26812d1ae752671"],["/tags/MySQL-日志/index.html","5eb660454bb293f0957669c0d82ad558"],["/tags/MySQL-索引/index.html","5b12c41fd05b90a60fc57c585dd89d7f"],["/tags/MySQL/index.html","3503f44a18625404e0acac5b3af97bea"],["/tags/Mybatis/index.html","0efe07d2e3ad44b5a6764532fd3c9785"],["/tags/MybatisPlus/index.html","75624f04d5ca35891f3fa7f36d806672"],["/tags/NIO/index.html","11ec61b37d21ff3a9a740720513a17d0"],["/tags/Netty/index.html","d9c477a139aa48ab403ddc6cd7fec362"],["/tags/Nginx/index.html","1dcf964193c1f72845834ddd93deee98"],["/tags/Promise/index.html","ddd33741d93b2217a0cb4026c133ed92"],["/tags/RabbitMQ/index.html","da0ff65df1e0edc9d0db790e8f112a9d"],["/tags/Redis/index.html","403accd14494c8d740ead3be7e238cb7"],["/tags/SSM/index.html","7738ba5c68076c91e9f5007dd2c17f5b"],["/tags/Spring-Security/index.html","d236ee9f9d53fa0c4e8a1f272250db77"],["/tags/Spring/index.html","bc586c4fe8271610912d08beea8ac2af"],["/tags/SpringBoot/index.html","72f7b1bf4e93ba5e8c123ceffacc57bc"],["/tags/SpringCloud/index.html","8ccbb88701e1616d09993e2fc3c69b1e"],["/tags/SpringMVC/index.html","8da5392776f8df37c16518ac9c3c31ab"],["/tags/Swagger/index.html","1c8a84b7cd0d55b63a0163d4f6426f97"],["/tags/hexo/index.html","247383e949d0877817b35e25090ccee0"],["/tags/index.html","4e9dd5a344ddd16ae628b0e60bcaa36f"],["/tags/jQuery/index.html","a30415c05663d69ca9ec8955ddff38d4"],["/tags/java/index.html","c211537b2067152e2797ae0cda0ba653"],["/tags/markdown/index.html","2ba85e10900644ccfe5e9cacdacc4fec"],["/tags/noSQL/index.html","ef72d6d54bf99cb9b42b299b0f2ebf61"],["/tags/typora/index.html","889aee294467046108cd82eb6c953950"],["/tags/vue/index.html","697de4565094f7bcfc16417a70b03ea3"],["/tags/享元模式/index.html","196e4d25451dcc2be626b347559998d1"],["/tags/代理模式/index.html","c4f77b431532303e6bba103394be8f6a"],["/tags/内存管理/index.html","0927c10fac6dfdbd38f249b2de8a9fed"],["/tags/分布式/index.html","1fa8e4d80ecab7626803e2e22b3e69ff"],["/tags/分布式系统/index.html","2ffd59511c82135d8d8616d383fcba43"],["/tags/前端/index.html","48fd6c1add1e8e370d5cc83e291b0d25"],["/tags/前端/page/2/index.html","d1cddc2971a86964c9dfec7b923dfaa6"],["/tags/博客/index.html","359f6473cbdb42a39eb5565114b90a0e"],["/tags/后端/index.html","0121ae41837320e41cd33d8898c4a898"],["/tags/外观模式/index.html","ecb73c41c2bb8424586f0f51123a6c36"],["/tags/容器技术/index.html","9992a3f145f2c60e62d5ba39dfd30a9d"],["/tags/工厂方法/index.html","0b2cdac8018a26cd0a445d9d22ed19c8"],["/tags/微服务/index.html","df178d1b14999a46b916aa0fb433b958"],["/tags/抽象工厂/index.html","1e7b840d2a67664f039659cb84fc6ef7"],["/tags/持续集成持续部署/index.html","2cdec78efba74b42766b677ad4627455"],["/tags/搜索引擎/index.html","5c48eda75678012a3c9de24af2d09722"],["/tags/操作系统/index.html","3a8b40018f96d8a3b5076e09a620bd19"],["/tags/数据库/index.html","703f68dc7e677456528b4cb7a9e69ba1"],["/tags/数据结构与算法/index.html","a485db0f708f80c1b4cc5316bc308b8c"],["/tags/数据结构与算法/page/2/index.html","0ec14e5b241972ce661cd6d48935b3c1"],["/tags/文件操作/index.html","4412b5fac794b519fb2b3ac767ef414a"],["/tags/日志/index.html","bfcd33aa1f54387be7ab1298adaec331"],["/tags/服务器/index.html","e067dff7c4c0028e0afcece693eff7e0"],["/tags/权限认证/index.html","a76ba038ec486a14fc7fb80cf459022f"],["/tags/桥接模式/index.html","27666b3934f26869fa8562df6ca1cbad"],["/tags/模板方法模式/index.html","153e1310341c0cc646e12659a0c4ef23"],["/tags/死锁/index.html","356d7122d7ec7d18e2927cc6ff1d7001"],["/tags/消息队列/index.html","d0250674ff343f182df608765d978d45"],["/tags/版本控制/index.html","f368f719764685302b83f810fea7969b"],["/tags/策略模式/index.html","fe78eda65d07dc755ff60b3cef85cfe4"],["/tags/简单工厂/index.html","89eea9ceaa5b167e46cc98459936f011"],["/tags/算法/index.html","315c9c28de90c9bd32d84ed0bda24287"],["/tags/组件化/index.html","9ea1582befd41c390fb829906c9148cb"],["/tags/缓存/index.html","9e17583cd3bc8f609599e197bba909bc"],["/tags/观察者模式/index.html","95ef513a32fb6e25cb43431e618b5ecd"],["/tags/计算机网络/index.html","14e66c9c22bee24f415882c0e6e72f56"],["/tags/设计模式/index.html","ca992c58376ba9dedaa88f016d14ed86"],["/tags/设计模式/page/2/index.html","e4129770e91162df40e66ae5b1ccd2c4"],["/tags/进程管理/index.html","71b7456ba7407d53db1aeb6278d7539f"],["/tags/适配器模式/index.html","03452fade0f0aea5ba7744a8341fb398"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
