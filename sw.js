/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","02856211235e10981380ead108406128"],["/2021/02/22/工具的使用/博客的搭建/index.html","1572d3de9584db889c9e880672081db9"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","5265311faa419c31a62c9f7f36ed6806"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","3818fc4a2f2e5e56ffeb1a963e8a0bbf"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","0bc89b9ccd3d8e715e410b2dc8b6b0d5"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","a4649395375b07bd4c32319f3973d04e"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","b5fc6ab67846917eb0c69cbe9334ef16"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","2590c8f236e7a4dfe7cd1a69c73f83d6"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","8df89f3e8415d6f6b71a53ae23ec63c8"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","9e29987db034186e94516f07122061a5"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","7ab2e08b130ee7825f6d8705b78ccf77"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","bd2af921a72f05863d62df210148e0ab"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","91f8b0c48a28d41b00f921e07482d533"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","e30806795d5bd20e225f10c8436532e6"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","e85915d4a3819bb6a823d7f1b11a3b30"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","e8d83352fe78441ff1252735ecb10dc3"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","0ecb359b06993c369e3d2f8a9b801add"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","bafd24d420d6fc0e591331570b642c42"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","ec0f88561b1200aab1b5f46837b5fd61"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","3944c741a48c04f63e99d812d565cfe8"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","9f41f88562db7c3e7986ead8a417c601"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","a8bbf589ddf4f3ad5089a6f31fa6d4a0"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","bd65c8e432d65c1e63bb2ee96bbf2f74"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","e6777b3937d6b40532bdc43061f59654"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","08c4bb6451f45bf235ac2c23e7954998"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","3377098cfdf259c1fa7c2df1ae437d16"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","98020b6b501c3d3c0b5f2f44108f4950"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","cf73beb0e98f1e1ada0a82bc3786a8aa"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","0471bda0623c4d022558ddae34a25e29"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","9d9a5ade671869480d703ca75838e5f0"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","95630c6ae12294febac620f6b5ba8f0f"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","216a656104fdcd807a682ffcc31264ec"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","b1decf7fca8bb2b75d5307dec8392537"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","76476bec042b2b6805e974f3f736f9ae"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","76861b5c1757d69cff9f1c14e7ad1703"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","fa2af80f6c709a4770af621314d61b29"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","b55d70ac542553210ca9935afe8cf7f7"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","a2e16f1d00d6b1c5745a7eebda34f656"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","0a0e10e229efacdae27e7f49b523d20a"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","077ba379d9854041be5a00328b648bd1"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","8557fb83fe899af91f7752ce8d0b6ab6"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","5974352549f551a9c6b54fe36d7a9427"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","b6e5707f9880c43be40d609759b9293a"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","2259afb7c6a8244a7917089ab7964c25"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","91414ecbbd864f928b2d68305e6a40bf"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","18aa6bdeb05c232c397c0d18788229d7"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","9d138542b28bff80b75d0dcd4e4b5d91"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","383f8ee9a379ceb1f446e9b0d36b2739"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","544424f884b1f9fcd7addbd4510b9442"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","24a7e05bc3a1b48697748615a86676d6"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","a6c3f8dfaacb6952c75a589aedebed95"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","eef5dd2f6fa8e8928b5df52987a4c7f5"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","84620cf97bad05deb10227cc438e2e72"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","fe871bbff843728d6867e48dad3fd556"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","57890222ec55da3bccbde00a348e949c"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","bb0b6831dcd775385c6ea301c60f0817"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","dd6b08a40576f1a7aca5153b0650f849"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","e38b82ac0872976a7add67d7eeed83ae"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","d82f57372f75222560835a77cae592a3"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","5558ebafb1bbfcb35536d68738a19f6f"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","cfe53bbc37e5bfd3a3d7b7c451195284"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","23e6dc65b7ed5168646d029ee1eb7ae4"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","548031c0a18dd9373a63754ab495f631"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","e3b51049cd21de222a90ffe1ced37e12"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","3992cfbc44a648452f6e05f17172e7d3"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","4036cc366e3af027223a7197c775ed9a"],["/2022/08/17/前端/jQuery/index.html","aa50bb41b76766b9cc07b7fe9f034445"],["/2022/08/19/前端/JavaScript/index.html","461287a2aeed89fa8772e436e8479352"],["/2022/08/22/前端/Ajax/index.html","3aa9a0d5d8af15c6ed22d7fe99d35ce8"],["/2022/08/23/前端/Promise/index.html","d7957e45106851dfe5648bb2d6546b4e"],["/2022/08/24/前端/Axios/index.html","69a117be12988c46f1a4dbe84ad7dbc2"],["/2022/08/25/前端/H5本地存储/index.html","bd3761e98f5e91f1d24b0d1db1993672"],["/2022/08/26/前端/mock/index.html","2ba269b623767c0f6704644ffc6e6d95"],["/2022/08/31/前端/vue/VueJs/index.html","de9f5670bc8b89e30c39bc7f08b670d6"],["/2022/09/01/前端/vue/vue组件化/index.html","1ae6cc9795a58801aafcd24f9e6c90e3"],["/2022/09/04/前端/vue/VueCLI/index.html","32c11a30d6c883c8bf006b9c1ddc8e29"],["/2022/09/07/前端/vue/vue实现动画/index.html","37cf41ade97bc265ac8d3caf2dac11c0"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","9ff823c686571b721deaa702c7426099"],["/2022/09/10/前端/vue/Vue异步请求/index.html","51a584cf5ced2140952a25f7de9cccd7"],["/2022/09/11/前端/vue/vue-Router/index.html","151627e2074587711d48a18d2799bf62"],["/2022/09/13/前端/vue/Vuex/index.html","c712730eda47f00138ea5a39264b24be"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","88266419fa43cd709466b61ee3229894"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","f280a1bf7db107d728444e19865cf748"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","a21c3c388bf90f996a6f45a6219fca85"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","a3cb8e3d91cf8158f0dfe0970cba3fce"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","fe3410827e96360249d97a710190b8b6"],["/2022/09/28/DevOps/Linux/Linux/index.html","91b72b25c0a8d9066b689ffafb238392"],["/2022/10/02/中间件/Redis/redis基础/index.html","ef82af5db53f3e47a747e4a05bbcce3d"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","2c4cbd461e51968a75423587a0a08daf"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","a3cc9112d5a00ee9ef2b43d34977e205"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","276854da1c024c779acf38a1b3542b7a"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","aaeed288089d03ade47973ed46cafbfa"],["/2022/10/17/中间件/Redis/Redis集群/index.html","1476c178c330958811b84b7c2dfd1b38"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","0d1d10273138d69013be39ea6ee70cd1"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","3bcfd9764c40ea182798e3cdf5c2817d"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","9969caeb15ad3d19409a1e9fef293b75"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","5d0f1c423a0f9bac729631aec0ff63db"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","2eac288c537fa17029f6c65d7bc98d76"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","bc30b23f47ca4d4a37c3acf43a83aa09"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","3239d1a801122c39548f32e73396cb7b"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","48d3506aea113e02af3f85953219bc36"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","e8a95352f3dd81d0806193799e01b822"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","e78e1540510b1e7d256e3a73141d499f"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","4d4ba6ce4cc250c103180131641c8f86"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","26c7275c8475cb744eed229d73f5b6a8"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","f944a48f9838fd5a01a18e5bfa61685f"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","9547f9a9f430a748f9552946d6b57f37"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","8a8edb7a6156fefd34932aa57275dab3"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","1182cf556ef5f3e75d56853153a1ea65"],["/2023/03/10/DevOps/CICD/CICD/index.html","f850e3e695369a37d104153e048a5940"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","e7169311651e8118d48fd4e347335986"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","c6919a8c4a7365a8f445843bd05f9cca"],["/2023/03/13/Java/NIO/NIO/index.html","2f1a9a27de8c6e0bf33e6bc1df976bf8"],["/2023/03/14/中间件/Netty/Netty/index.html","596a9a3e8622e79c8cbec34bfa671fd6"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","8c35392e2af14db08c3a78f8b601fc9f"],["/2023/03/17/系统设计/分布式系统认证/index.html","c10d9ee999862b75ff46a4e08900694e"],["/2023/03/19/Java/JVM/JVM概述/index.html","0e1362049133699f3e7232218f0c034e"],["/2023/03/23/Java/JVM/类的加载过程/index.html","5f7052f36063785f8745c8a0da25e383"],["/2023/03/28/Java/JVM/对象的实例化/index.html","bc67d03f822c5ef0ce80b4cc2b78ced0"],["/2023/04/01/Java/JVM/运行时数据区/index.html","e49dcc80583e99d775b136a9c79fc741"],["/2023/04/04/Java/JVM/执行引擎/index.html","74e2cfc95dac32e80dd60fa892721ee1"],["/2023/04/06/Java/JVM/对象引用/index.html","1be1dbe47604750ba2d4667aae0ea136"],["/2023/04/09/Java/JVM/垃圾回收/index.html","7e6e36b4fd49d1b81dfdefb9a74c9893"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","1f29ec91d1e67121de548b2480d38d56"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","bda26aeefb63bd4a01ce240b0a4da16a"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","143b3f3af0f2c574d22ec3464311823f"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","9e6a3f1422fc644d4fcc9071e567ebdb"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","ccf3d9a4a3f7b36dfbf95c576013c54a"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","55e0f7e3e27a372ecf5b120e488fefbd"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","953571e23695f06948e03ac279cecd29"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","d476a16027a4735d2afb450dc4633a24"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","1c4a25e339a1771edfc84a68d1d5ccb0"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","980cf6a07d8e93a585105979f7342809"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","8638e558dff81aa8adc7805a7feeedf5"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","3c007ffa5d93f3145b0de62a5ed47480"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","49ec9d5fc8c38386dc321a92fb0c3d0c"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","c899b3e0bbe546b90bfc03dd225278d3"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","bb340c2af876ac7508ab44a22e7bc085"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","c858302ab4f6b8e2a9c11e7160793892"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","1ccb82d19da712b12364ade9bebdeb2c"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","aa600cb735e97302b485d8cd2bbd9a5e"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","1497f7c679e83595eefc51094eab59de"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","1a96ca04163376dbc4fb6779b7d394bc"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","426eb9bdfb87b336475febaa0ae73654"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","06134d9ad23b841d75d23b51d38ff270"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","d4c1866d70647ed805cfafa4b31d35bf"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","9c54c510f2da8725ad1569254c6dcd41"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","ad1131cb9bec57df547c24d780b69eae"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","f031689305f965424eb5324162346f56"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","dac4f07e265bd1a747582001e8145022"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","66ab353d0ea04e6586772e2b400b4b96"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","45e3105f228b3ed7cb6a2ec7fd7a7f62"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","a15d562c37db0883a5929905aeeffd14"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","84d49c970270ae13c02a9ad3d3a90155"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","93c9583c458e38003c2b36cc006470c2"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","f8f460ccc6aaa1a246dff52d00c2b4b4"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","696c598c8226ac1a5447d298d7c2c197"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","a2dc931b71b963d605bdb131138c45a8"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","c99016b161f6671e8bc9431af5c22202"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","b47ccac0806b9b90d0a62a891d568502"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","3ce93fe3fbc73928024b7d8c0bae4d0d"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","6055e64166a98eda5184568af8240de0"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","3f83f96cb56bc4f0b4512633a5b4746d"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","9e626e83255895ff0144af4b54115b08"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","cb6c3ec80a1cb2c5fbae78a6f1404878"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","6d8513079595ff17f8fe7693e60f5b0a"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","0cf5fbed31ed22cca9828e6896d39084"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","c5a61c0ceb79c9fa1feb840e61ded4a2"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","44ce0d841fec397de13d0e2b3fc856d9"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","7f6fe8c6a3348d3772a710e0bf8a6d0b"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","fa55250929f56039a2295391eeaf0a4e"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","50831a09a4eb0be85997bc886ff1b334"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","244ffc8aafc979e51c4eddfea77965b0"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","b7dd51dbc9e8f3b727ba5d0f943b5822"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","3ad4e771ae821e6da19c6104251c2345"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","01bf52d79e39a2a7db519657d4700ba9"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","6db33fa1f78f06d17dbfedfb14cd33b0"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","20b3efae27b8c95c70e35d74e58bebf7"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","7768faeff8d231562e184fa37748e103"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","9b049372b1f6e2915f26b12952ca4192"],["/2023/09/04/中间件/Redis/Redis事务/index.html","8fc3ff15cd677e508f3826a878c9e511"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","03129a74b005b147325a22a172a29bea"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","f29889412c3317899b86dac145d15494"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","2ab5804bd3cce9afd5e95a7bebdcf5fd"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","78e6766a70dd863f0d0a65ddce126896"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","76ca0002f45445a2a6e1733384da8efc"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","3f8ce064d05b072d4046465c375a80c5"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","c77d6a089e3941539c80ef89ab92b92c"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","1dbf1054768bfdf25f6a7aeb5773636e"],["/2023/09/22/Java/NIO/零拷贝/index.html","7db253716f9230b837bfb12c2dac3949"],["/2023/09/24/系统设计/JWT认证/index.html","6eb06f98785b29121ba547156b8c4936"],["/2023/09/26/Java/NIO/Reactor模式/index.html","9d09d666b4f5e893c51c7399dcdba08e"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","10a14bd8e7d541ff61a7737fbe74d175"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","b4d47e46598f4a2020b27135f3cc3895"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","c113ee1889ecbbb7874755a8d575d1d0"],["/2023/10/09/Java/并发编程/共享问题/index.html","aaacc36d40d9c2bea2a2b67f21e5ef18"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","4d1b59602f638295eb6f302931853bb9"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","4b4bfd09b37b4e48181622a09382a831"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","57235ab026901a738f785ac5f4be98d5"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","e9b4da9f17468c7519334430050a7a1d"],["/404.html","4cd47b5343af2c33e8e1c3320a2ef268"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","d98fcd552d5392b7393070732aadbc8c"],["/archives/2021/02/index.html","a6f2cac5ce44a0df5e88e623bf0351c1"],["/archives/2021/03/index.html","b893920b1376c9d113ec040e1ace8b88"],["/archives/2021/03/page/2/index.html","d11983e6e58576cb9ee93ce80ffa3146"],["/archives/2021/03/page/3/index.html","7491029ce681c8d492dfc6d8c964b3ee"],["/archives/2021/04/index.html","986f18fb1faf2c5d9256f72123a10fce"],["/archives/2021/04/page/2/index.html","7add10c35729dcfc2f4285699b6df252"],["/archives/2021/05/index.html","c9974de186bb4052fab09e8d9737fb34"],["/archives/2021/index.html","bbd15c0728c8ff9eed20beaf00f54aae"],["/archives/2021/page/2/index.html","7a5b8e17744311880b472b1bdac8b21f"],["/archives/2021/page/3/index.html","10fbf95fbf9de23af1a5d28f7cecb46d"],["/archives/2021/page/4/index.html","ab9afa08b20e90f8ca55c55a89345a53"],["/archives/2021/page/5/index.html","d625a9efe17ac6545d2126b94d86f0c0"],["/archives/2021/page/6/index.html","0294b10c5a34728c4cc67d8b590bbe46"],["/archives/2021/page/7/index.html","e92cd6fda2456eb63cb1733259318b14"],["/archives/2022/01/index.html","eed6f894bd9fbbd578520cb76451cd98"],["/archives/2022/04/index.html","0472d33ea4e5b37c97707fe689f2d575"],["/archives/2022/08/index.html","6eedaaabcec08bdbe2910623965efc8e"],["/archives/2022/09/index.html","f620d30414e6f849cab42db2766fe4b7"],["/archives/2022/09/page/2/index.html","81f6c16587f3af6137c00dc2c52b93c7"],["/archives/2022/10/index.html","9aa8771cac7a89c975fa4b2e56804d8a"],["/archives/2022/11/index.html","9632ae8cfd092b06efff8d43d3ede3bc"],["/archives/2022/12/index.html","a5a70a56a76bb47272cd02a5b5dc8c39"],["/archives/2022/index.html","bc5ae620b3aa155bc2657e77f3b568db"],["/archives/2022/page/2/index.html","18790b2bfd18f7e9afd6d482a8cd15be"],["/archives/2022/page/3/index.html","c28f457566141ccba3b44a9968694933"],["/archives/2022/page/4/index.html","0de9f89233001b42630592f5e855114d"],["/archives/2022/page/5/index.html","6210b2b139f36f8e0d157d878c940d82"],["/archives/2023/01/index.html","069fc1c7aa3b08cbf653d232eee5fd9b"],["/archives/2023/02/index.html","a6c6cb7d210ab090c3b406a2cb96c002"],["/archives/2023/03/index.html","074939cf920ee175d11cfcef21dedaa1"],["/archives/2023/04/index.html","de13e2bcd27f5cc65b0a689277c2c5ce"],["/archives/2023/04/page/2/index.html","08ef5b0577b7a40a12a56ccb125463c6"],["/archives/2023/05/index.html","ba026fe89e00293936451787bd4a5fc8"],["/archives/2023/06/index.html","7aa22863a617589a12de44c6cdf2de64"],["/archives/2023/06/page/2/index.html","fc682bfafd634ee31b03c4c813ae55c9"],["/archives/2023/07/index.html","cc2bc2d755b048322bc0c15e13424c1a"],["/archives/2023/07/page/2/index.html","31f27ba30f68c2908ab75f2be46c14e0"],["/archives/2023/08/index.html","c5ce1ab92dbcbabef394a9122ff3dce4"],["/archives/2023/08/page/2/index.html","77361b265f5e1ac186441b07004032b2"],["/archives/2023/09/index.html","30c6f681e462e9f0a180156b3462559b"],["/archives/2023/09/page/2/index.html","2b7c8a82ec25d765ce8d3a75130998b4"],["/archives/2023/10/index.html","241676da8fbe189e691b2f7bc45672e4"],["/archives/2023/index.html","dac8927d50afeaa262d081bcaa3074e4"],["/archives/2023/page/10/index.html","2eb80d5aacea8014e0509e560c470d66"],["/archives/2023/page/2/index.html","1a4852693c46a04b73d1b7c05ec307e3"],["/archives/2023/page/3/index.html","69f9fe31fbbb6af6a07be29ca3387346"],["/archives/2023/page/4/index.html","f246f2c858349d9f8861d3653e82a2d0"],["/archives/2023/page/5/index.html","24f4579c97827b78bb142d662f8fd3b5"],["/archives/2023/page/6/index.html","9278b0dd56aa8ccf1e22e5d0a3bafde1"],["/archives/2023/page/7/index.html","775daedf69c955180d4ab55dc6bed5f5"],["/archives/2023/page/8/index.html","cd40dd5029d96c345ba1fc92d7c972c3"],["/archives/2023/page/9/index.html","a1ca656475ed7cab999bd068c4f92881"],["/archives/index.html","3e95e18320d5ed0e997aa442a608abfb"],["/archives/page/10/index.html","ab3292a5cb1dea5df6562610818613e5"],["/archives/page/11/index.html","d9d045d57265025b569bfe2cbc4f5e7b"],["/archives/page/12/index.html","5b7bf41628d65f1851ad577be353b1c4"],["/archives/page/13/index.html","de0903400c3d7030e5c02dd698f0ab16"],["/archives/page/14/index.html","b3144aa0c5b421c287f85eff0a8b82fe"],["/archives/page/15/index.html","62c7722000b7c37f1275d8f0ff6e50b0"],["/archives/page/16/index.html","6a02fc6b7320b522aff189fc88264988"],["/archives/page/17/index.html","66ce46ebedec024c0cb781eca32bb776"],["/archives/page/18/index.html","91d86c5d3716d985529e36fcf2f4cb8f"],["/archives/page/19/index.html","10684623b979109f9144c5f51dd941cf"],["/archives/page/2/index.html","c823457b7e70565901ac3ac8360477fb"],["/archives/page/20/index.html","d871aeef4a895c31f2b283a80158aab8"],["/archives/page/3/index.html","0b93171f8412a63757c767f909bb8842"],["/archives/page/4/index.html","8cf09879507fe91c503fe8e48415f84c"],["/archives/page/5/index.html","93bc8a6870bc3a331c35a97fadb6546f"],["/archives/page/6/index.html","07d0840bb94cf32a31d52a15e627c9b5"],["/archives/page/7/index.html","9538b0f9db42e84708d5eeae26edc7e8"],["/archives/page/8/index.html","dd758ba0632f94c7c0596697a901d72b"],["/archives/page/9/index.html","6becf712228dba241ebed79d41f13776"],["/categories/Devops/CICD/index.html","4255e742184fea153eca069642e0453e"],["/categories/Devops/Linux/index.html","c8609cbe4ac9d5d3bbc9a3e2148a7bfc"],["/categories/Devops/index.html","2210b98dcc1f508770348a62c6e5c7cf"],["/categories/Java/JVM/index.html","d9777855713f535a6c51de909701290c"],["/categories/Java/Java基础/index.html","234914e54909a3b5a01f780eb9e5514d"],["/categories/Java/NIO/index.html","71e5253f7eab4fcaf1f0a6431ef2d319"],["/categories/Java/NIO/原生NIO/index.html","11fbc653c3d16129942ac08d999abe18"],["/categories/Java/NIO/文件操作工具类/index.html","d2133311ca1dd709299c8f41b0ee22bc"],["/categories/Java/index.html","d7928993e90d457a31e8f37db6aac87e"],["/categories/Java/page/2/index.html","248524b2634c6f0048f0d79c9a14897b"],["/categories/Java/并发编程/index.html","eaaeaf3a10143568168ab6acf70ec484"],["/categories/Spring全家桶/Spring-Security/index.html","457b653453abe8edb161da5b86c3a336"],["/categories/Spring全家桶/Spring/index.html","d5ec87c6670249ddd87bff499ba3eddf"],["/categories/Spring全家桶/SpringBoot/index.html","f39a76292c7c40172a59e8e0fed53505"],["/categories/Spring全家桶/SpringCloud/index.html","c7d3c25241b7b1bc9d655714e397109b"],["/categories/Spring全家桶/SpringMVC/index.html","b37d1649db7e37795a9d5f1bbb128851"],["/categories/Spring全家桶/index.html","51869fe5de80cc2d45bcfdf57725c7ea"],["/categories/Spring全家桶/page/2/index.html","62386c9e1f3817c6a5675baaf890b0a7"],["/categories/index.html","d87aa0f6e0030ab16c46a147ef3b77e1"],["/categories/中间件/ElasticSearch/index.html","0f3a342e5dfd11e393f706ce21d7ebd0"],["/categories/中间件/Netty/index.html","d68899b19b06099be9c7205c8add102d"],["/categories/中间件/Redis/index.html","d4c4373f732031ed9a43a35932b57980"],["/categories/中间件/Redis/page/2/index.html","b785a4b6a739cb8d95ab76162920b059"],["/categories/中间件/Redis/page/3/index.html","ed6c1c75ba70d2ac41b0177155a3dc38"],["/categories/中间件/index.html","eedd94681998262c3c9c335cfe07508f"],["/categories/中间件/page/2/index.html","6657260b06de281a8fee09c9aeea744c"],["/categories/中间件/page/3/index.html","aa94e1533605dac8a8a7b08b8f8b694f"],["/categories/中间件/page/4/index.html","edd09b1ebe663d820e34e2b80052e6b2"],["/categories/中间件/消息队列/RabbitMQ/index.html","36d3ece9c8c87cd5823375b262df9852"],["/categories/中间件/消息队列/index.html","7d7818499fa86cf9f3aad5b5496d2d0b"],["/categories/前端/Mock/index.html","61276d784b835a62c1b8f0def99d5317"],["/categories/前端/Promise/index.html","edab3816e5f207989e13e743274e868d"],["/categories/前端/Vue/index.html","b160f0dc16b16468114d8811bf220b48"],["/categories/前端/index.html","db4beb55ca2133236d41aabdab6d1748"],["/categories/前端/jQuery/index.html","86d386a4c11522dd4ec2906f1169775e"],["/categories/前端/page/2/index.html","d1d47470b67a873aec8a356127167606"],["/categories/前端/原生基础/index.html","7e445808f207302c2c523246785be5a3"],["/categories/前端/异步通信/index.html","88b9597b1d4a45643cd052580ac50043"],["/categories/工具使用/Git/index.html","d5276283121fc35f529d64367df0c62d"],["/categories/工具使用/index.html","ba9768521220c48f61cd0ee8b6d52922"],["/categories/工具使用/markdown/index.html","dc6271277f5207ecea06a18fdf4ac143"],["/categories/工具的使用/Docker/index.html","578835826cd6d65ac20cb2d017066e0b"],["/categories/工具的使用/Nginx/index.html","eceae8e432c2e0da3dbb20c4a394b96c"],["/categories/工具的使用/Swagger/index.html","36bd65a6a0831640760b9124f1c649ad"],["/categories/工具的使用/index.html","e47d7bc7b6f818fc7478ded5738ba992"],["/categories/工具的使用/博客搭建/index.html","7b18c23e7ea3a024ce7ad9ba50546fbe"],["/categories/数据库/MongoDB/index.html","55b8f8187e95ca739cc98a22f859c055"],["/categories/数据库/MySQL/index.html","b749fe1fe4f49459a23ba1b191c86f76"],["/categories/数据库/MySQL/page/2/index.html","e1466d7823c1eb290d31ff22ad4892e1"],["/categories/数据库/MySQL/page/3/index.html","01b17c6106490dbfab4333a4230a1124"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","3ee94290a1dd68a14d48b7e7390290e9"],["/categories/数据库/ORM持久层框架/index.html","efd0eeec32156419e0237069ae8011c1"],["/categories/数据库/index.html","c98f3b3f0768105d5ad00f0ed2127e52"],["/categories/数据库/page/2/index.html","11c512f38f8f69a554ea0de128dc5a34"],["/categories/数据库/page/3/index.html","bba536e4c1e30fa6e6b291136d6ecf66"],["/categories/系统设计/DDD领域模型/index.html","fb997a38329b8d6ae4b08076e1ed40ff"],["/categories/系统设计/index.html","b8d3d7d30743d2fef48b16a4c6b61f1c"],["/categories/系统设计/page/2/index.html","a888e9c103264cba25f52792fb78a84d"],["/categories/系统设计/分布式权限认证/index.html","42a8ca74e8d425560da301c4e0091b89"],["/categories/系统设计/分布式系统/index.html","4f978a2c27a11f02cbec432f2916964b"],["/categories/系统设计/设计模式/index.html","00ff9c35798cbb21347c612a13dbcf20"],["/categories/系统设计/设计模式/page/2/index.html","767eac68af47877842b1a7b859c23ecb"],["/categories/计算机基础/index.html","821526a9431157731be29a4c36002627"],["/categories/计算机基础/page/2/index.html","2dc03cf4b06edc86e9871a95c44311b5"],["/categories/计算机基础/page/3/index.html","a297bc42fc762aad191dd05056b369fc"],["/categories/计算机基础/page/4/index.html","4dd49aeda779af927ff7aca6c42e57ce"],["/categories/计算机基础/page/5/index.html","71712b67a2eedec116da7a9da58b43a8"],["/categories/计算机基础/page/6/index.html","a1e41ffa084364d62910cf3f4652e35c"],["/categories/计算机基础/操作系统/index.html","800e23c382ad4052a4984146c95c0125"],["/categories/计算机基础/数据结构与算法/index.html","96f9a458b1d115e88108169561805951"],["/categories/计算机基础/数据结构与算法/page/2/index.html","5079dfa86a104f6de2445484811caa5f"],["/categories/计算机基础/数据结构与算法/page/3/index.html","8ec9eed5f7b2c30faf2c93cb309e3a67"],["/categories/计算机基础/数据结构与算法/page/4/index.html","afa181f10e0e1ac5e91166e83d611adc"],["/categories/计算机基础/数据结构与算法/page/5/index.html","c653dcbe0d4a2b222a2eb1b3bd2332c5"],["/categories/计算机基础/计算机网络/index.html","c2bbb183153c1a48ebc90ae3bbca4eaa"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","5f1930ea6610dc1c5085f9c1cb7806ab"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","dfab5850d9746efd9a870073738c3968"],["/messageboard/index.html","e0d95f0bb8be0645e93392ad20b49ab1"],["/page/10/index.html","42ed9a7d767aacb30fbf235d91a85ce9"],["/page/11/index.html","03e2c63fabd828311afcd1859c5970c7"],["/page/12/index.html","3a16da8d4aef293c124ae13c6f26143e"],["/page/13/index.html","5de119b719da53957a8af6d2693cde68"],["/page/14/index.html","06a52961fa0a59401a84cfa5d590bf39"],["/page/15/index.html","28a1dfd59f46455cede607f9493038ff"],["/page/16/index.html","80f94ff83295c0f36aa896ba1a1e07fd"],["/page/17/index.html","794eefd583b46539c2d6da4de0461542"],["/page/18/index.html","610a91cc63d21c71b82de55256456fb0"],["/page/19/index.html","519669b5ecdaa2f8c94f50e93fd5fbb0"],["/page/2/index.html","2ae3685e7da07e89afd89047a33c20d5"],["/page/20/index.html","964c0afdff086f56ff5e2f14a1e575b7"],["/page/3/index.html","f7ed00cc501105923f7dc934705080bc"],["/page/4/index.html","19447e95529d8473bb7c2ec0f8b89224"],["/page/5/index.html","39e23e318eab6e78a4aa23e70c61b2e5"],["/page/6/index.html","552281096b07c806aa898e90cd66b03c"],["/page/7/index.html","daa531b02b6ed89f18d9b7129dc727af"],["/page/8/index.html","e09e084547c3bd84a6491af3e8e2e4d7"],["/page/9/index.html","d75189f469330b926dab4968c655caed"],["/sw-register.js","db9882c6ce645d526a376d1f35d97c20"],["/tags/Ajax/index.html","54ec95552045e4ef0f62dc6559138139"],["/tags/Axios/index.html","59425d796a61644de6dbbfeaa8ea6609"],["/tags/CICD/index.html","398afbfb5f06dbcb9a384ec9f7d2c3bd"],["/tags/DDD领域模型/index.html","b59db4426349dea88d089eb47006d48f"],["/tags/Docker/index.html","c0e1f59b29d2ab04dea16279a39c673f"],["/tags/ELK/index.html","b657f1683493b5c15fd592d5538214a9"],["/tags/ElasticSearch/index.html","6edb10ad32041500bbcd6e60b6e4c126"],["/tags/Git/index.html","8c21a966316f4201efe5d4c312e8e103"],["/tags/H5/index.html","17730a6780030f3ff0549733f11be2c2"],["/tags/JVM/index.html","44e22940cc6d8e220c9d23350c562135"],["/tags/JVM内存模型/index.html","f2a8ea57db68f56cdaa303c0e54c12df"],["/tags/JVM执行引擎/index.html","21214a29f1f206f9098496dc2a5e72c2"],["/tags/JavaScript/index.html","665fa6004f65a3ad921aca8abf5a8e4b"],["/tags/Java内存模型/index.html","bfdba186ecc45de3b24d30d58b4edc99"],["/tags/Java进程线程/index.html","060271fd5c7389bc000f367762a83eee"],["/tags/Kibana/index.html","d1d2d81cab1684f009694199a7e054af"],["/tags/LeetCode/index.html","69ee1f7152f1389affa11cc690add40c"],["/tags/LeetCode/page/2/index.html","d8ba34d23ee950ae249770ff639464a2"],["/tags/LeetCode/page/3/index.html","d358e059b8092b276b4cfbc689a0aa82"],["/tags/Linux/index.html","1574a169df932c30a6def5e212bcae32"],["/tags/Logstash/index.html","bd274594d95d8a5e187c4d2f9b766bac"],["/tags/Mock/index.html","e4ac87a04afe7d00bf325f94f1b4f44a"],["/tags/MongoDB/index.html","0c13f533e34c369c54ef05487d7d4934"],["/tags/MySQL-事务/index.html","7ec3964687e9d0229d10d2f28df8987a"],["/tags/MySQL-数据类型/index.html","309801f3c52300730c2df5cea6780149"],["/tags/MySQL-日志/index.html","1d3a070deaa13dcb15798336088ce20b"],["/tags/MySQL-索引/index.html","5391d2bf62a006fce477cc4cf7f856ba"],["/tags/MySQL-锁/index.html","8bf7b36852286d862e1700dfd9103822"],["/tags/MySQL/index.html","389897170804fed00ea3c3e71da38f2d"],["/tags/MySQL/page/2/index.html","59613baa6ccc9c906afd8f2ae84f1fc9"],["/tags/Mybatis/index.html","d7e2a976cd9a41963d7e43db2de47bc8"],["/tags/MybatisPlus/index.html","89b35e36e27cfbc1cffd5b9268e63048"],["/tags/NIO/index.html","daaad341404ba3a2356312ce33965820"],["/tags/Netty/index.html","7eb59e85d808ea3088097c71c0807384"],["/tags/Nginx/index.html","1feb55eeab542f33a5f3e2f6006be5f2"],["/tags/Promise/index.html","a4b32d3da454ecd884eeeacc8ecbec82"],["/tags/RabbitMQ/index.html","1218514223378c783bc5aaa72bd295e1"],["/tags/Redis/index.html","ec8b83848b4b2292b99bd3b95fbca804"],["/tags/Redis/page/2/index.html","b4312287c81f8ceec4b050d8d12b815d"],["/tags/Redis/page/3/index.html","a9a0f14a510e128b0df6c1ea71e1e700"],["/tags/SSM/index.html","6add87539147d65497910935cfe4e7ef"],["/tags/Spring-Security/index.html","c7ed6be963a3002c9ebd3ebddc696efb"],["/tags/Spring/index.html","2ec8d40e2d4511e3089c0d9611b32871"],["/tags/SpringBoot/index.html","97da7c99f69652e8073c3165af5d4215"],["/tags/SpringCloud/index.html","b3b7c66863a5fa36878af3c186466b71"],["/tags/SpringMVC/index.html","8266b7cf33e302756d944eda21c339c6"],["/tags/Swagger/index.html","7d088813052511735ac820e97b6eff43"],["/tags/hexo/index.html","e0e0ea1461f55fa2eba6be993e1ea417"],["/tags/index.html","63eb5908f7fd35674f4f42ee21d733ee"],["/tags/jQuery/index.html","9f525de4fe5578266a3034c378861ca1"],["/tags/java/index.html","389fc8d8bd97484df503bdd613f15393"],["/tags/markdown/index.html","db62c32dbe1434cf7d198833d789fd82"],["/tags/noSQL/index.html","028872b9f42013f99c01b8e64218cd76"],["/tags/typora/index.html","724cd4c4ac063ab09b0623edc2c076df"],["/tags/vue/index.html","1c699e034ae27f0cf03d90b121af1881"],["/tags/享元模式/index.html","55fd8233f881a2f179269acfb03c3474"],["/tags/代理模式/index.html","e596051b8b2831b428e10c7952d60718"],["/tags/内存管理/index.html","2b8fb44cc088797ccc85e4d1fb296f79"],["/tags/分布式/index.html","82dc18679f24d081f560dcdb8cbcb921"],["/tags/分布式系统/index.html","a2553687b775a8178ebf55d6af4d5141"],["/tags/前端/index.html","e0858aecd8cba21bc80e05246dc7e738"],["/tags/前端/page/2/index.html","c2bf971be333da2477f4fbb674bc7fdb"],["/tags/博客/index.html","31b7a52493c9aa44f692b36576a3ec7c"],["/tags/后端/index.html","0160123f214f44ca712ef34ff1434953"],["/tags/外观模式/index.html","12e14edf2ec7ad29b5f3f3467aec03fb"],["/tags/多线程设计模式/index.html","61bd1fd220a1cfa2a15fa484581aefc0"],["/tags/容器技术/index.html","0f05b515da924532271fffb31848c208"],["/tags/工厂方法/index.html","ad06456b08b2d3745ea773fd4d47cd83"],["/tags/微服务/index.html","a250f6e69a52f945b3bc09f71d7b71fb"],["/tags/抽象工厂/index.html","f8efdc72fa2bfc4a0a3b05c75b413606"],["/tags/持续集成持续部署/index.html","3421f3ee382d0a29ca3dc6793d42678a"],["/tags/搜索引擎/index.html","57dd5875f3af59f534ea3fa0969ccc6c"],["/tags/操作系统/index.html","7964e93bd4f96c38d115a4267e166b83"],["/tags/数据库/index.html","551f77140fe4168a8f33ccd4442abf27"],["/tags/数据库/page/2/index.html","50cc53eedc6a12876d5e028455258213"],["/tags/数据库/page/3/index.html","71c3f0a275b88104bf2170e38d8b757a"],["/tags/数据结构与算法/index.html","5f986e67425ae76fab97dcdbd78e20a2"],["/tags/数据结构与算法/page/2/index.html","2b1b4c63f0834e170816fa4adedb13ae"],["/tags/文件操作/index.html","405467d946e29908a2b0f7f77dcf7a7b"],["/tags/日志/index.html","3a84173f8f1c97a55556d33fc6d033bb"],["/tags/服务器/index.html","a026d7d592e3c7a8f74ad4b83bb99d3f"],["/tags/权限认证/index.html","252a6d91a111980cbb291398faf4ed6f"],["/tags/桥接模式/index.html","9fe0429625507ed4217a1b93bceb9f28"],["/tags/模板方法模式/index.html","da97c5e41fe33694c59f375ef53fa154"],["/tags/死锁/index.html","72fb7eb2b9658a01f696a0cc878ece4d"],["/tags/消息队列/index.html","f4a09ad3a34ddd97872bb8abcc86995a"],["/tags/版本控制/index.html","9ed3d00b9160f46e161ffdee653ee6c2"],["/tags/策略模式/index.html","9243f2ed2664a714ee36b8009a488f7a"],["/tags/简单工厂/index.html","08f185e38dce0542108267c1fb07423a"],["/tags/算法/index.html","0999fe1844b6250b5a58700d94fc017a"],["/tags/线程活跃性问题/index.html","1c70a9f562a819a97d3e7ca264a4e194"],["/tags/组件化/index.html","97aac4477232967974fecce583342b29"],["/tags/缓存/index.html","c1f89a20fbb9e358d879d831f53b9775"],["/tags/缓存/page/2/index.html","2410ccd7f3a3af38001ee7079633eabe"],["/tags/缓存/page/3/index.html","bba8f3b8e435e7c41a8afb81f4289d73"],["/tags/观察者模式/index.html","2dd315e0ca5bad96abaea2f6412cefc6"],["/tags/计算机网络/index.html","be18c23f20a8e449fb878b50d55ddd25"],["/tags/设计模式/index.html","82963aa0ebb8fb25a6c93df4b44d318d"],["/tags/设计模式/page/2/index.html","02618e0cef7bfa633b15846eb92fe8e0"],["/tags/资源共享问题/index.html","3206673cb4ac826c898c918b83f52505"],["/tags/进程管理/index.html","f82fee349366993afd2a484302c93aed"],["/tags/适配器模式/index.html","0696db72f91afc4bd8a5dc19da6bf133"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
