/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","a703302dc36593269e7c6f9f091ebd3b"],["/2021/02/22/工具的使用/博客的搭建/index.html","b701d00c302695afeb2719d31ab69e59"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","e1f15d3c1345bc6c4a6d239d3c5a6b1c"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","afb717a1f5334fc5f32fefb339fed293"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","edda8a63518d73ae5990859413d4c0bb"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","b7164c4cbca942138235126b7f29a2b7"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","b71edc7c05f2f2bb3444466c0380d28c"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","c041edc285b8614a8ec532434ba890d0"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","5763707a02cb34b472a82babf6480081"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","0fc72bdf4f3f9a8fddf735569b4f738c"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","2c164a8f49f4d682b92b213a93276f34"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","3d88a7127dcdadad9f8dd512db0e4a89"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","c90bdf03965562887f853effeb0e3d1b"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","fd92b656c9391fe479e67ef04d38f6a6"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","a672287fd1a90109f6c968fa5114d7bc"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","34febf0e7eb3a07880207d8b168d9da5"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","31f0e1ab0d13fba79ae442d7285cd088"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","cdb436f4bbe3911569e7d486e2034c9e"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","b0d81536574d0d6058713f5dc5d5de8c"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","ff148d15269fccb5b22015ce888fec1f"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","48fc1f273ee145184ec749288c1d7e69"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","b97548ee48ac4d1685a822dee5cf6993"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","b0279c93e041c3972bb6e2185eb2cfd6"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","80a92946a792849dc4fd91ab4fb3d308"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","23be3cb0ad44fdd0b2b57ab2c95d571f"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","5eab3a541103d03757fe4466e78e8996"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","90e17dea178599f321195d9d651206a9"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","b21050fc7e618999c8a9b0b8e91c2387"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","0f167f4296b94bf16704ff9836bfa419"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","72dc9c935351317240eb20c9fdd33e88"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","946028a9520d7f451ce391fa9b0e8509"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","9f424389d7aa497629a35ef90a615e93"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","cf1a4c3b95f7e0d0506cc372ebf489f7"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","9b575fd9fa4c9228b282479f32362a47"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","dab74d69f61392ee624c042372b475d7"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","f22ab944fa3a81689257f56a28435076"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","e682089d27275fd11f4b43e4dd42620c"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","da396991deb30e45d22dd62a04a1f1e5"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","acb795cb11dc53038a73f37b3d33fa83"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","bade5c7bf7187f166c3f082729b74e31"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","71ecf3351b0a5bf991d204f986de6b26"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","90d09739d259cec71a0304c95b5808c5"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","53fcc0a0f1be67dbb1c2791a88d7ab25"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","b002d5821dde3f037054ecd98f08e321"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","681250459662136c4557d56327c1cc0a"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","5d04b1265819719de65d59c8554e3550"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","4d9ac958585f2aa5010ab71c937f681b"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","dabb70ca8ea0fb64162b5bf6abe11689"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","da6d4324ca5820c973d962d10135d59f"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","03c1fcd5473d0ff8512bd46722bd98e3"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","c27c20fd248e0bbd3804816e09f85ecb"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","169bbb7105a4128760c6000bea41729a"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","d72143742cad8b2fef5845f3ac2cb68e"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","8e2ad494ea2f60e66173faf27c96edfa"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","770c10da5ed240007700f8225f314e8a"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","750211954d7aa2f0beec32fa6858439f"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","b43a5e32c6d14d7eae0744bf40011e23"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","b7f63fc617ebcdc97f3ff17366718bcc"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","0eb8de14e03b5a3b37f02fca87004653"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","d9deaaafb40c269d7e82596f085e0962"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","eb6d9710e0a2ec247d4aabceb71548b8"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","6961c831f86c3619409b763f3d1db6ef"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","81c00d56ed22d2ac3e57eb581f51e3a8"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","21eb459f0fb86495a453b34a79f0f8cc"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","bc56877552f6d3b6075cbc7ba25ba920"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","591b69975ec4551c81cefddabc4bc315"],["/2022/08/17/前端/jQuery/index.html","d5675163bb22dcf9266e674acc8dab7d"],["/2022/08/19/前端/JavaScript/index.html","5bf1b6000a57b34d5c2053a0280041ce"],["/2022/08/22/前端/Ajax/index.html","dba16cc7502eec8f352c5b5ccc85741f"],["/2022/08/23/前端/Promise/index.html","8c32a9a6e09821ff50f11f0ac3c546b1"],["/2022/08/24/前端/Axios/index.html","899c9ff5c2a58c6108e785f6b2dfcac8"],["/2022/08/25/前端/H5本地存储/index.html","6a39cfe6bc3032dc78a4ed8b9f4b7d02"],["/2022/08/26/前端/mock/index.html","243d2068123cc824665b4c6bcff5eb88"],["/2022/08/31/前端/vue/VueJs/index.html","2f71554b12fe51544dcb27f10edd947f"],["/2022/09/01/前端/vue/vue组件化/index.html","325fbc101dd2c636cd89c9902ef44bbf"],["/2022/09/04/前端/vue/VueCLI/index.html","ee4eaa88195af12820f4b821cbfdc6b4"],["/2022/09/07/前端/vue/vue实现动画/index.html","757d2706279db055261d113cd0809dca"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","c8e396451bf881486f9ee06229940831"],["/2022/09/10/前端/vue/Vue异步请求/index.html","bf89e36c0970f76f5696de14a8565f87"],["/2022/09/11/前端/vue/vue-Router/index.html","bdb9236cc924a72b0416a8673a66ae15"],["/2022/09/13/前端/vue/Vuex/index.html","65b8103f692c109efa9c5f119059ab83"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","f092eee43ebae8b1658405caba333d35"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","5ae4eb9d49398786a4efac037c35ed13"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","af081cdf6f441ca7a1184806b688af0f"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","d5942158e45e2ac6560a47078b6c71d6"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","dcfeb5f31e9066ae22d2cb21bc0c57df"],["/2022/09/28/DevOps/Linux/Linux/index.html","b5a3811ab49894c7c78d6c30067cc9aa"],["/2022/10/02/中间件/Redis/redis基础/index.html","b4b74c2d07ef898943aab6a011f3e6c7"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","f8e582456fbc202c05a197a61cfc2033"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","69c06efb5f71fb758cd9b77f581cd78c"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","6f44f87ce4c9662ccda40c4ef5c601d5"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","42106fb18d57f65f81c8791cea33acf9"],["/2022/10/17/中间件/Redis/Redis集群/index.html","fdddb69ebae21aba9ac1b2d253222edb"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","29332bb1b541273a0872178fdcb2a5be"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","d67281232468024f357e16b7c817bf0b"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","7e70026454f510494485056d187c4316"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","b4f62680e481d6847ca31e42ef7fcf07"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","0eae174eb7d1833f914d22a6c92f9658"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","d04a7979be9fb6a4f48e5c8125f72806"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","e4b69e731b61b3b2d48ec15a6c1671b8"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","ce2af6f36b4ec2ad785eb940b1c9bc54"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","f9098282cda4fbb7e360357b9f378300"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","f34b91b08bae119ab984bafe10f30b81"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","88140306525d087b3e308fd9aedbb0f5"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","b9b292702e5bfbb6a151f2df13101787"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","603410078a5e0ae44fcef4c893fbea03"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","8ed6cf38ca2fba7f7d04fe09d36dceef"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","546d9aefc96eca69a13edb000aab34d1"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","894ef3b5b4f2a7c789fdb6c2185ee439"],["/2023/03/10/DevOps/CICD/CICD/index.html","c39307a75df6af45a45cae479cd0e713"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","2e2429ca5b7d9d65a4554c53b8c3a1b2"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","051b3077b4de7ec670fee7cdc1f7be3f"],["/2023/03/13/Java/NIO/NIO/index.html","b57e6f794f2e49a80a34eb89b0330cc0"],["/2023/03/14/Java/NIO/Netty/index.html","34cda1f095481a7f5bc6945b8547711f"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","b765b649a7a8fa92e2626df1fb529235"],["/2023/03/17/系统设计/分布式系统认证/index.html","416c34693017ebea54e506d8a8d1c7e9"],["/2023/03/19/Java/JVM/JVM概述/index.html","cfbbd39c1f1c09af976ea93622cfdfc2"],["/2023/03/23/Java/JVM/类的加载过程/index.html","cec2cc3ec051c212419033cee249c25a"],["/2023/03/28/Java/JVM/对象的实例化/index.html","b2b3c71ccd79de4007e3a72c34abbf72"],["/2023/04/01/Java/JVM/运行时数据区/index.html","56a5f66bac109e46e193904036ec5cec"],["/2023/04/04/Java/JVM/执行引擎/index.html","2fb0c84512d54bab9d76ee4518fc13cb"],["/2023/04/06/Java/JVM/对象引用/index.html","3440dca7357976bf8ba4149657321329"],["/2023/04/09/Java/JVM/垃圾回收/index.html","5ad3cd393aba43dc04e5bb07bf3a9084"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","a4446b73ca6cb8df0ec86aedd859682f"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","56c645a4b2de50ac5e5142ae62868318"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","e16e5a3f15c84da0589785a5c33659fa"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","6e252c751ada9b6e6226d99ee397dd0f"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","0a206e85c87c0ad0e8d9bc3863711993"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","7f7d2aa09e0c2c9268095d704236c1ac"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","522783041f8af19500ea97b4e88d0311"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","d1ded563d7e5ddb03e34500d1e7a5f98"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","82df6c3dd9ac900b343acadd7c1501bc"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","ff16febabbc19d5943eb5c755617158e"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","5737ef91c96919f795ad8879686f1f5e"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","0c2286a247846fcf640b478626dee12d"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","c4e7ac976785f3f8a69f176ea975c1a8"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","eb3339f51770c448bdb0d9eac2663281"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","302d941e51a4330395cd3a70746d1199"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","d33c694042c6bb1c4dc2acaceddf0d01"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","c9a940c4a562cf46b5d10842bb3da19e"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","116b0fd98331bb7b3a6e590370720bfb"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","bcf01c851cd9a1040b73d7cb8c1cf5ed"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","42e9a7a396fa7724493e0e50dc76c265"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","bb47601abdcd818be4a12cf8ab5add0a"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","8a76c6caff35d81823f89401ae1c92cc"],["/404.html","450049e803554eda8a5c7b867ff4bbdb"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","e91245d08a62b191743eda970ab05e46"],["/archives/2021/02/index.html","1fef659c1de40c8208d90af676823220"],["/archives/2021/03/index.html","250a1f9b6ae43e43db8c70956de75e2a"],["/archives/2021/03/page/2/index.html","346c03cf6c37f16c0dc67d7b6e383362"],["/archives/2021/03/page/3/index.html","16a0964576df7104081eb1a16f6c55dd"],["/archives/2021/04/index.html","c7069b30c13ba204e85fd53661e7b0df"],["/archives/2021/04/page/2/index.html","50bb93d2a6104fa3fb06a59f0e786ca8"],["/archives/2021/05/index.html","654ba70b818559e097ca5bc6bc78cade"],["/archives/2021/index.html","76fb908e790c06485251e79ceb017b6c"],["/archives/2021/page/2/index.html","cae6044392edf0c0be1b16feecbf007a"],["/archives/2021/page/3/index.html","39950e139ca4d929d4405d909fd2db13"],["/archives/2021/page/4/index.html","bc23ce7416e11d828b5a179b42a3ec76"],["/archives/2021/page/5/index.html","a58d6977fd4443a295173243e625567a"],["/archives/2021/page/6/index.html","4599c937a79cd08f892d521e9e198d19"],["/archives/2021/page/7/index.html","c30a1dc1cbe906831f47786f077b71a4"],["/archives/2022/01/index.html","f1af0f60f3c133e6e023530b10230f90"],["/archives/2022/04/index.html","791223f216e168efd873eed317f1c7fc"],["/archives/2022/08/index.html","e45b819187548e33f43ba75593d20cba"],["/archives/2022/09/index.html","5b0dd675e74f8a02024f263a728a5f07"],["/archives/2022/09/page/2/index.html","f60a442bad406e5652155a062ee77eab"],["/archives/2022/10/index.html","ed633b42419bb62eaff5c2b339afde6c"],["/archives/2022/11/index.html","ca0b1893b9c8f3e5d88f4b3892688b80"],["/archives/2022/12/index.html","1ee756200d9cb0d7d019092d58bec3c3"],["/archives/2022/index.html","3234183b1e1ac0e2752effbfd9da8cdd"],["/archives/2022/page/2/index.html","03e59c17ba492481b9a1bce38b3208d1"],["/archives/2022/page/3/index.html","3a7135dc2cb0eab54aada8d0869b8949"],["/archives/2022/page/4/index.html","014002390592f7724840d2ea17097bfb"],["/archives/2022/page/5/index.html","4d7f34f8e674ceaa050fe414182db422"],["/archives/2023/01/index.html","832daa7630d66c8870b22857b838be68"],["/archives/2023/02/index.html","b33665490ceaf9b60b3b661c3605439b"],["/archives/2023/03/index.html","132f7e7bf2c70009a80f681526a2f56a"],["/archives/2023/04/index.html","5db16f6ef3323c70d113ba58d06ca6bb"],["/archives/2023/04/page/2/index.html","c97006f4327775c1309e60b8d2251945"],["/archives/2023/05/index.html","e39dda5736087b1f15cfa95db9f41272"],["/archives/2023/06/index.html","f3b1c531fd1d9ca90b67c195eb9a9e43"],["/archives/2023/index.html","cd2bea238c75d1625a87d61568ab6369"],["/archives/2023/page/2/index.html","97ba1af726ae905bbf52251338f1b5c7"],["/archives/2023/page/3/index.html","f41856dbca8ee2592c61ec0971fea37f"],["/archives/2023/page/4/index.html","c7425393a9a0f242d37989d16be05bef"],["/archives/index.html","68d178eb483d9f465571454eabb8511c"],["/archives/page/10/index.html","40d4bba10098dda59fca8f112a5845c3"],["/archives/page/11/index.html","09569d3261eb7cef5d33d8717a916c4b"],["/archives/page/12/index.html","1e0ff813dd1771015d8ddc4cddc66066"],["/archives/page/13/index.html","4f42618f16b8d9dc1d95e3ab721e27de"],["/archives/page/14/index.html","f98ff259f213378e8b23d30bb9f997d4"],["/archives/page/15/index.html","3d308dc174470fcecbb6696f6da07dc0"],["/archives/page/2/index.html","8f7ea9422a7b805f168d9255e48855fa"],["/archives/page/3/index.html","1bc30122da1dba891ab72a0dd6ef6894"],["/archives/page/4/index.html","95b0471295a836018a915c93a718e44f"],["/archives/page/5/index.html","f8b090780543daf9d672fd6598252749"],["/archives/page/6/index.html","f822d85aaca4bbde4a0f5fe1ace0cc0f"],["/archives/page/7/index.html","d73d63a1b54d7bd9fb193ba58d8d7ec1"],["/archives/page/8/index.html","a2c06899c4419abccc6a8d875ea25382"],["/archives/page/9/index.html","21571bd0b8b007f88cbf98375ae62dc5"],["/categories/Devops/CICD/index.html","af9cb6df74c09a33024dd3d8f6e441f0"],["/categories/Devops/Linux/index.html","5e4486276a429201106d405740ccfddb"],["/categories/Devops/index.html","5e0f26267d7e99afef7840feed37e4dc"],["/categories/Java/JVM/index.html","aa2c08dc0f893c321f0283391d1da2c9"],["/categories/Java/NIO/Netty/index.html","cff3497e03eb3bf50b48e302bb86c864"],["/categories/Java/NIO/index.html","b55d2680c6dfc6b05d6742ba452e1b1f"],["/categories/Java/NIO/原生NIO/index.html","09a43689a1aa6aa05195833b0802c7a9"],["/categories/Java/NIO/文件操作工具类/index.html","dec065216ccd24288fdafb630cbb3cad"],["/categories/Java/index.html","c2dc0a5346ab3afe3719b7a5ff8a1d4f"],["/categories/Java/page/2/index.html","4509e17b12ccb078d02da9722929dafd"],["/categories/Java/学习路线/index.html","1461e60207002b25e4ce918e452cf930"],["/categories/Spring全家桶/Spring-Security/index.html","a7016d815e1e924caccbff1d7a466366"],["/categories/Spring全家桶/Spring/index.html","a2194da007bb53fd5a56f4095f09c00f"],["/categories/Spring全家桶/SpringBoot/index.html","3c3b94adf1ebe2f2ccc1513c26138d41"],["/categories/Spring全家桶/SpringCloud/index.html","29d95ff2c7d6ed27b12b3cc04b2de7bb"],["/categories/Spring全家桶/SpringMVC/index.html","159762923bd2695ee5e60660b3aae3cf"],["/categories/Spring全家桶/index.html","9b1190a3b75835ed8004728d60d7091d"],["/categories/Spring全家桶/page/2/index.html","855406bf15251db4c512ec29ed27b8fa"],["/categories/index.html","d29666a411cea771dcc8d6380055902c"],["/categories/中间件/ElasticSearch/index.html","2f1addfb2e9450a07113feb32a3dbba5"],["/categories/中间件/Redis/index.html","551f707e57579e19bc42bf1cf9d38fa6"],["/categories/中间件/index.html","76f8a8444fab49567db206dc7dbea376"],["/categories/中间件/page/2/index.html","b7fb1a35f75d75856ef9346b0b3c8895"],["/categories/中间件/消息队列/RabbitMQ/index.html","c68a7e14649fc3ba2b75f311d10bf029"],["/categories/中间件/消息队列/index.html","024fbd66b02adc4f8a8660d7d77e512a"],["/categories/前端/Mock/index.html","49405c08bc8654a17423c95003e5543f"],["/categories/前端/Promise/index.html","480df1c086e30c364224d42110fe757e"],["/categories/前端/Vue/index.html","11c1b1654ecb059cf15334a0a3620e34"],["/categories/前端/index.html","5e704ba9734547e7443e3fe48478f096"],["/categories/前端/jQuery/index.html","e4529dcb72469ff4102c9c99156ca208"],["/categories/前端/page/2/index.html","8a84ffaaf03a2e36239198af39114624"],["/categories/前端/原生基础/index.html","21f4da294706e0fc40c7ad4d9b7118fe"],["/categories/前端/异步通信/index.html","7859bf5120df522e674c695f5a98f8f7"],["/categories/工具使用/Git/index.html","672a3136a0e47b81fe7abd416bcaf361"],["/categories/工具使用/index.html","0546c74093a55df8dc30d091e9f18cc6"],["/categories/工具使用/markdown/index.html","52f959f465ad2b8ab3cdcf389439f1d2"],["/categories/工具的使用/Docker/index.html","9b499e186d023ef07ffb6900cbb269e0"],["/categories/工具的使用/Nginx/index.html","469158a38c08412762828c57723dd885"],["/categories/工具的使用/Swagger/index.html","566f028934875bfaf0ca967e20009810"],["/categories/工具的使用/index.html","1dffc46a691725c4474e12e8fd12861e"],["/categories/工具的使用/博客搭建/index.html","8b0cb5f2bdd8c11d4ab9d2357c4e6b67"],["/categories/数据库/MongoDB/index.html","5f9461dd51021f0603c59b70fab24335"],["/categories/数据库/MySQL/index.html","0c9018af1df6f8b1acd2268ec29036b1"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","9c9c73807431d534fdc82e61890f0fce"],["/categories/数据库/ORM持久层框架/index.html","bc7c7b445b7d9537776116130e77ad5c"],["/categories/数据库/index.html","b4dd686c7e262db1e5b0fd9c027ded89"],["/categories/系统设计/index.html","73f24790791506d4299d4a4211241669"],["/categories/系统设计/page/2/index.html","7b06f448b4d959bdbb72beacca40700a"],["/categories/系统设计/分布式权限认证/index.html","ec1dedc494b2aae26fe129ee7972db69"],["/categories/系统设计/设计模式/index.html","aa640294f5021d353a67ff96666962a1"],["/categories/系统设计/设计模式/page/2/index.html","8288165df0a866d92600945bef13401d"],["/categories/计算机基础/index.html","22475bf4236a43b0f485a6b0ae5cb5bb"],["/categories/计算机基础/page/2/index.html","c7672069fab32598132eb7612788c98c"],["/categories/计算机基础/page/3/index.html","86322153bb3902ea78c731eac3db0369"],["/categories/计算机基础/page/4/index.html","4ebb4dcd1f9a8f3ca35d6c5efdc925b4"],["/categories/计算机基础/page/5/index.html","669d4366080a0809fff71d89680d23ed"],["/categories/计算机基础/page/6/index.html","6125f503a2adc6bb7d857bae0c6b3876"],["/categories/计算机基础/操作系统/index.html","bd55a74f262aa5ffb1d542f997e186f9"],["/categories/计算机基础/数据结构与算法/index.html","af0b759007a4486be29cf295ef7c2d40"],["/categories/计算机基础/数据结构与算法/page/2/index.html","fc6084070305b7ca89da7f0d6ceb48c4"],["/categories/计算机基础/数据结构与算法/page/3/index.html","3c3435f46cac20e8b6a22166e227b90b"],["/categories/计算机基础/数据结构与算法/page/4/index.html","c66f0c145a18485bb5386332db44d8eb"],["/categories/计算机基础/数据结构与算法/page/5/index.html","f80c5b8c6d557879ad24a74e2d1ad73e"],["/categories/计算机基础/计算机网络/index.html","4ad08ed35f75bc91045caa36e9243a5f"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","5c56b76e9f2a5c5139bd4699d307e8a8"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","175a20f8f6617211245ff6adbf629fb8"],["/messageboard/index.html","ab3aec6572196076aed5d7dc6f726b2a"],["/page/10/index.html","e095643b75f14f12c8a83f5fcaf3bee8"],["/page/11/index.html","24422ae298aa812cea829b8d8e093b41"],["/page/12/index.html","3d358bbced070b5ec2c57099a7f2f700"],["/page/13/index.html","98110b5360ca6868d37294ae59d1ff34"],["/page/14/index.html","51f8f620ca69ca4f9b91cee95e2e36d4"],["/page/15/index.html","a08b1d833eeccbb4db11ad0ecb9e8e7f"],["/page/2/index.html","a017e9231d7480b9211a8826a346b03f"],["/page/3/index.html","3bce557255dfe6b9cc7bbeea9840e311"],["/page/4/index.html","4484098659093f44e1f39e4d79bfdacb"],["/page/5/index.html","c4ce0b57d94c0a296f80c06e20eda065"],["/page/6/index.html","13fd4720ba013d4aea0c856c07daf7f9"],["/page/7/index.html","bcfdfb4af4d95be7f0828a9009a4e0e4"],["/page/8/index.html","bf44461c3eb2af459a3f9e7bc6be601a"],["/page/9/index.html","411d679ce67933397e2d7453c16c18dc"],["/sw-register.js","77620d96c16f9ab458fa07b392a99643"],["/tags/Ajax/index.html","40e4e77cfab1c47ef98199a7994d3768"],["/tags/Axios/index.html","b15c5eaaceb7a554e99317a15f11d690"],["/tags/CICD/index.html","8909c036639637ee4fae9020180f8493"],["/tags/Docker/index.html","d9f846b6236a03347a3808a2493acead"],["/tags/ELK/index.html","5241c2364d2d8d9dda27f2b202c8007c"],["/tags/ElasticSearch/index.html","cd5d4f4dc5db6a2286c17b2d408e0432"],["/tags/Git/index.html","98c6c4827c8c240c05d0cbc08585cf4a"],["/tags/H5/index.html","4566cb7ea6cf79353657d5096518cb40"],["/tags/JVM/index.html","2788167f0fd00a3ce45466b444e69aec"],["/tags/JVM内存模型/index.html","e7477abdf57d09a8ee569f9c23476f63"],["/tags/JVM执行引擎/index.html","e9473720f4a1e6062419ad1ff29a6e54"],["/tags/JavaScript/index.html","99cb869e19a8c9006a595e5731f9c8eb"],["/tags/Kibana/index.html","fbfd8d85e451542189c1698396536f3b"],["/tags/LeetCode/index.html","a935f82db32dab9914ead45383d936b6"],["/tags/LeetCode/page/2/index.html","9962f20de728c9327cc6748d49c35c12"],["/tags/LeetCode/page/3/index.html","7c43b12e44d3eaf40c4b25f435724ce9"],["/tags/Linux/index.html","4add1ceb98335c80e38de41e33cd8716"],["/tags/Logstash/index.html","c9ed7f31e1c24d19d29dc02c9642c67c"],["/tags/Mock/index.html","71d062065af4960fe68c3a5749bf9394"],["/tags/MongoDB/index.html","87d94c68b5764ee25966d7ef61f79410"],["/tags/MySQL-数据类型/index.html","3440648d9a7df4ef40c6c5b87d9cc560"],["/tags/MySQL/index.html","c967af75a0737b1dfd355012dca6de0b"],["/tags/Mybatis/index.html","e56b0fea08d169fa96315a8663a54e03"],["/tags/MybatisPlus/index.html","9f672b78b038eed93acf428a1c639ee2"],["/tags/NIO/index.html","4fbd80f5e272909409d32ef6af603c89"],["/tags/Netty/index.html","f31fc710c0c0ad8e6de8a25d73f86f95"],["/tags/Nginx/index.html","8eaa5546f973b7426a55b538c652aef7"],["/tags/Promise/index.html","9deb00c0230b591cde663b42720f387c"],["/tags/RabbitMQ/index.html","d5be3bc5c4c4df743a2a64fa2f9b66de"],["/tags/Redis/index.html","575dfc703c20064d072410a4e16057ee"],["/tags/SSM/index.html","c3cda3d8d1da05d1b163385640d05b76"],["/tags/Spring-Security/index.html","d2987d75537367f0b475fecc759888bc"],["/tags/Spring/index.html","ba497aac3f36000c8f7a2f10e671a39f"],["/tags/SpringBoot/index.html","7590e07d04bc2278213f9fa04a26e772"],["/tags/SpringCloud/index.html","407766c906b601395002cf758e7a26f3"],["/tags/SpringMVC/index.html","eb2f6b17c23c9ffcc8100734bb61e391"],["/tags/Swagger/index.html","0fd9fc9b4f7df23e69af439d93efbf7c"],["/tags/hexo/index.html","1569e04c8383a1a95257fc32a98e67a1"],["/tags/index.html","4eed5c9c2922f8eb4ea346a406b37418"],["/tags/jQuery/index.html","b103315905762f0307341a96be161f1e"],["/tags/java/index.html","c3faa709f635b9336a5404d49583cff0"],["/tags/markdown/index.html","7cd5a517a0c897a30f5f52b24f70d0a6"],["/tags/noSQL/index.html","121fad1fe9fc8fdcbce17551c9502363"],["/tags/typora/index.html","2b30b982a759867ade6428b99ad56108"],["/tags/vue/index.html","9cd66609e5485cd5b4b811b331a0b2ea"],["/tags/享元模式/index.html","04c18392ae39e42d0929e1742cfed2d4"],["/tags/代理模式/index.html","abec640b822a5bf792cf931fbde06d71"],["/tags/内存管理/index.html","e247910faa7c1c2754252594b4573063"],["/tags/分布式/index.html","01cf3999f41308c45be021d1a6089791"],["/tags/分布式系统/index.html","ff4ae7eb6c8903c4bd8ca5fb0c53043a"],["/tags/前端/index.html","8d4679db9a635b40d321f655e8df8cd7"],["/tags/前端/page/2/index.html","2f6c715d3bfc9c6857ba0fd348313a38"],["/tags/博客/index.html","55fd4d871844a7c99c4b2a7fbe6f7fbf"],["/tags/后端/index.html","e37877e36ffaab39a0f20a11e4d3d6c5"],["/tags/外观模式/index.html","b8c86dd28de2e022e7adb71f0eb1c6d7"],["/tags/容器技术/index.html","5f2eb672ab9ca23b6badc108e317b1e8"],["/tags/工厂方法/index.html","f49d73b644493d6d8f6b62a8068af380"],["/tags/微服务/index.html","8d2bfa5722b98f084be8f31b809adb04"],["/tags/抽象工厂/index.html","9b497c7a7a9247e48205788769fa516f"],["/tags/持续集成持续部署/index.html","c97e7c00f26b26bdb15d0bc4bdf41014"],["/tags/搜索引擎/index.html","2c979bef7b3cd2c3191e753211465f2c"],["/tags/操作系统/index.html","013c5a9dd059d197d9f90cc3259c4fc9"],["/tags/数据库/index.html","5590194e9da83f78f095faae97e1ae4b"],["/tags/数据结构与算法/index.html","5d8e7d4ffe1d04c21f80a4d7650ebfb9"],["/tags/数据结构与算法/page/2/index.html","77e20c1f172ae1e39193119cd54de0de"],["/tags/文件操作/index.html","22508a21c2295510cd048f78b6622e28"],["/tags/日志/index.html","f7eb19cfd24555c0838ff6246132c79d"],["/tags/服务器/index.html","3764fe57f89ab4668f83dd6ebe52de41"],["/tags/权限认证/index.html","0661122ea5ac2d040b23caf4934d77bf"],["/tags/桥接模式/index.html","4f2415436d07721e0da05ec9729c0fc6"],["/tags/模板方法模式/index.html","fd19e7b612bd65327fe4aa0ce743c38d"],["/tags/死锁/index.html","3e08c3b6a3ec9197db002c54d03ca3eb"],["/tags/消息队列/index.html","bf37ad75f5e676411ef6b6e8ee586d5a"],["/tags/版本控制/index.html","312e39f28c1808b195b93ed1ac52f803"],["/tags/策略模式/index.html","a5b572134bf137635bd506eb47e8ec1b"],["/tags/简单工厂/index.html","12d113c13ef32a4e55ef6399a191a578"],["/tags/算法/index.html","30495fde6c897d8e938aff39f14dd61d"],["/tags/组件化/index.html","d6cdafcc8b200b231b0a642a93ec848d"],["/tags/缓存/index.html","66c5aff21f935bad0a28ad61ee2038db"],["/tags/观察者模式/index.html","639754ef0eacf451a675b09948e3d70b"],["/tags/计算机网络/index.html","bf0e104500696c1be3a73edf4186c078"],["/tags/设计模式/index.html","84e90a520d310d7fbe562e5755f17162"],["/tags/设计模式/page/2/index.html","8e706894670435f28536d13da3f00c4c"],["/tags/进程管理/index.html","ec442eb77d63175c46681a94ea4646c7"],["/tags/适配器模式/index.html","06153e518649fd88f7bb699c3c4a1d38"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
