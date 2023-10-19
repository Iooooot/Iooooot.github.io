/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","02856211235e10981380ead108406128"],["/2021/02/22/工具的使用/博客的搭建/index.html","1572d3de9584db889c9e880672081db9"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","5265311faa419c31a62c9f7f36ed6806"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","3818fc4a2f2e5e56ffeb1a963e8a0bbf"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","b57f963631f548780ea47758024212fa"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","a4649395375b07bd4c32319f3973d04e"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","b5fc6ab67846917eb0c69cbe9334ef16"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","2590c8f236e7a4dfe7cd1a69c73f83d6"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","8df89f3e8415d6f6b71a53ae23ec63c8"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","9e29987db034186e94516f07122061a5"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","7ab2e08b130ee7825f6d8705b78ccf77"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","bd2af921a72f05863d62df210148e0ab"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","91f8b0c48a28d41b00f921e07482d533"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","e30806795d5bd20e225f10c8436532e6"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","e85915d4a3819bb6a823d7f1b11a3b30"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","e8d83352fe78441ff1252735ecb10dc3"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","0ecb359b06993c369e3d2f8a9b801add"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","bafd24d420d6fc0e591331570b642c42"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","ec0f88561b1200aab1b5f46837b5fd61"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","3944c741a48c04f63e99d812d565cfe8"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","9f41f88562db7c3e7986ead8a417c601"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","a8bbf589ddf4f3ad5089a6f31fa6d4a0"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","bd65c8e432d65c1e63bb2ee96bbf2f74"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","e6777b3937d6b40532bdc43061f59654"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","08c4bb6451f45bf235ac2c23e7954998"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","3377098cfdf259c1fa7c2df1ae437d16"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","98020b6b501c3d3c0b5f2f44108f4950"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","cf73beb0e98f1e1ada0a82bc3786a8aa"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","0471bda0623c4d022558ddae34a25e29"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","9d9a5ade671869480d703ca75838e5f0"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","95630c6ae12294febac620f6b5ba8f0f"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","216a656104fdcd807a682ffcc31264ec"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","b1decf7fca8bb2b75d5307dec8392537"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","76476bec042b2b6805e974f3f736f9ae"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","76861b5c1757d69cff9f1c14e7ad1703"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","fa2af80f6c709a4770af621314d61b29"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","b55d70ac542553210ca9935afe8cf7f7"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","a2e16f1d00d6b1c5745a7eebda34f656"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","0a0e10e229efacdae27e7f49b523d20a"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","077ba379d9854041be5a00328b648bd1"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","8557fb83fe899af91f7752ce8d0b6ab6"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","5974352549f551a9c6b54fe36d7a9427"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","b6e5707f9880c43be40d609759b9293a"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","2259afb7c6a8244a7917089ab7964c25"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","91414ecbbd864f928b2d68305e6a40bf"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","18aa6bdeb05c232c397c0d18788229d7"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","9d138542b28bff80b75d0dcd4e4b5d91"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","383f8ee9a379ceb1f446e9b0d36b2739"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","fd9744cb54ac1f1b67223914ef863327"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","5c25e14140549e9c4cb7cc72f9ee4e30"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","33c3012374ced90a256f668549640fe4"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","5451da932282968b7832c8a558e5afb8"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","eff010e74aa9e9c5aad3f441809b49bb"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","fe871bbff843728d6867e48dad3fd556"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","57890222ec55da3bccbde00a348e949c"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","bb0b6831dcd775385c6ea301c60f0817"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","dd6b08a40576f1a7aca5153b0650f849"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","e38b82ac0872976a7add67d7eeed83ae"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","d82f57372f75222560835a77cae592a3"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","5558ebafb1bbfcb35536d68738a19f6f"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","cfe53bbc37e5bfd3a3d7b7c451195284"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","23e6dc65b7ed5168646d029ee1eb7ae4"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","548031c0a18dd9373a63754ab495f631"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","e3b51049cd21de222a90ffe1ced37e12"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","3992cfbc44a648452f6e05f17172e7d3"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","4036cc366e3af027223a7197c775ed9a"],["/2022/08/17/前端/jQuery/index.html","aa50bb41b76766b9cc07b7fe9f034445"],["/2022/08/19/前端/JavaScript/index.html","54a34e65b4055fae0849ebc0685ab0ee"],["/2022/08/22/前端/Ajax/index.html","524b54f0ba82b33c612b716f1aca87c0"],["/2022/08/23/前端/Promise/index.html","b89088a951c75acc93ca76e2e06d4537"],["/2022/08/24/前端/Axios/index.html","74a1ed7ed12100f9445aba454b8a9821"],["/2022/08/25/前端/H5本地存储/index.html","219ea9e6fefcb4571e8470e5feaafc9f"],["/2022/08/26/前端/mock/index.html","bef66740117644b8cf26bc148f3df8ea"],["/2022/08/31/前端/vue/VueJs/index.html","de9f5670bc8b89e30c39bc7f08b670d6"],["/2022/09/01/前端/vue/vue组件化/index.html","1ae6cc9795a58801aafcd24f9e6c90e3"],["/2022/09/04/前端/vue/VueCLI/index.html","32c11a30d6c883c8bf006b9c1ddc8e29"],["/2022/09/07/前端/vue/vue实现动画/index.html","37cf41ade97bc265ac8d3caf2dac11c0"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","9ff823c686571b721deaa702c7426099"],["/2022/09/10/前端/vue/Vue异步请求/index.html","51a584cf5ced2140952a25f7de9cccd7"],["/2022/09/11/前端/vue/vue-Router/index.html","151627e2074587711d48a18d2799bf62"],["/2022/09/13/前端/vue/Vuex/index.html","c712730eda47f00138ea5a39264b24be"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","b719aacddc177942307c9cab2bd738fe"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","28d69e2cc56e8ca0b8f1265167329f0f"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","5b5238c6496a7dc99a2b65f342fd50aa"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","3b2a8f6f287b70a977a057fc33e099c5"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","cc07bcf7419b422413baf60c95fb1dc9"],["/2022/09/28/DevOps/Linux/Linux/index.html","91b72b25c0a8d9066b689ffafb238392"],["/2022/10/02/中间件/Redis/redis基础/index.html","ef82af5db53f3e47a747e4a05bbcce3d"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","2c4cbd461e51968a75423587a0a08daf"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","a3cc9112d5a00ee9ef2b43d34977e205"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","276854da1c024c779acf38a1b3542b7a"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","aaeed288089d03ade47973ed46cafbfa"],["/2022/10/17/中间件/Redis/Redis集群/index.html","1476c178c330958811b84b7c2dfd1b38"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","0d1d10273138d69013be39ea6ee70cd1"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","3bcfd9764c40ea182798e3cdf5c2817d"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","38aa73f6073ad508daa6a52a24da0619"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","a8aec7c9d0969d45ab8585898d4078a3"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","3758816f6aae2d38d1a283fcb3c3d762"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","bc30b23f47ca4d4a37c3acf43a83aa09"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","3239d1a801122c39548f32e73396cb7b"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","48d3506aea113e02af3f85953219bc36"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","e8a95352f3dd81d0806193799e01b822"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","e78e1540510b1e7d256e3a73141d499f"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","4d4ba6ce4cc250c103180131641c8f86"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","26c7275c8475cb744eed229d73f5b6a8"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","f944a48f9838fd5a01a18e5bfa61685f"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","9547f9a9f430a748f9552946d6b57f37"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","8a8edb7a6156fefd34932aa57275dab3"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","1182cf556ef5f3e75d56853153a1ea65"],["/2023/03/10/DevOps/CICD/CICD/index.html","f850e3e695369a37d104153e048a5940"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","e7169311651e8118d48fd4e347335986"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","c6919a8c4a7365a8f445843bd05f9cca"],["/2023/03/13/Java/NIO/NIO/index.html","be375d5914e2b5244fb3a35a670bda1d"],["/2023/03/14/中间件/Netty/Netty/index.html","6a74e827a8d4d0ce14d757ed5eddc5df"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","8c35392e2af14db08c3a78f8b601fc9f"],["/2023/03/17/系统设计/分布式系统认证/index.html","c10d9ee999862b75ff46a4e08900694e"],["/2023/03/19/Java/JVM/JVM概述/index.html","592210e89ae5bbe584fa71fe7dca7d57"],["/2023/03/23/Java/JVM/类的加载过程/index.html","6c3c77d36ccf5e19777e0277471529af"],["/2023/03/28/Java/JVM/对象的实例化/index.html","df716afaf80a02510d377a926277cc3a"],["/2023/04/01/Java/JVM/运行时数据区/index.html","d1368127348ec77b7cc7fad7fa8b6820"],["/2023/04/04/Java/JVM/执行引擎/index.html","2c4faa6eb7f099c8d7f0a1f9520b489c"],["/2023/04/06/Java/JVM/对象引用/index.html","a0a6fdaa9999a6fc2e630a91df7dcc4a"],["/2023/04/09/Java/JVM/垃圾回收/index.html","ceae4c9d21088b93cca079561f2612de"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","24bdd60db34b7e438e557f10cb826eb9"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","3197a9ac977de60d658deca21e02b70b"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","143b3f3af0f2c574d22ec3464311823f"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","9e6a3f1422fc644d4fcc9071e567ebdb"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","ccf3d9a4a3f7b36dfbf95c576013c54a"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","55e0f7e3e27a372ecf5b120e488fefbd"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","953571e23695f06948e03ac279cecd29"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","d476a16027a4735d2afb450dc4633a24"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","1c4a25e339a1771edfc84a68d1d5ccb0"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","980cf6a07d8e93a585105979f7342809"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","8638e558dff81aa8adc7805a7feeedf5"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","3c007ffa5d93f3145b0de62a5ed47480"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","49ec9d5fc8c38386dc321a92fb0c3d0c"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","c899b3e0bbe546b90bfc03dd225278d3"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","bb340c2af876ac7508ab44a22e7bc085"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","c858302ab4f6b8e2a9c11e7160793892"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","1ccb82d19da712b12364ade9bebdeb2c"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","aa600cb735e97302b485d8cd2bbd9a5e"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","1497f7c679e83595eefc51094eab59de"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","1a96ca04163376dbc4fb6779b7d394bc"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","426eb9bdfb87b336475febaa0ae73654"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","46875e55d7f04b469592479562744ab3"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","fb2e5f27ac6b25402825b62de2da05c1"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","9c54c510f2da8725ad1569254c6dcd41"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","0331c3d8b43ad094dd58af0fe5367d96"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","a07443a277489cc66f8a65eb00c557ec"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","e0f3172d5870c0685d1705914fde4c21"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","f939234844af24a777c8b5511561b53d"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","0a35c47f49bd99eb6f91c403f3399497"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","a15d562c37db0883a5929905aeeffd14"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","84d49c970270ae13c02a9ad3d3a90155"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","93c9583c458e38003c2b36cc006470c2"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","f8f460ccc6aaa1a246dff52d00c2b4b4"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","696c598c8226ac1a5447d298d7c2c197"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","4eae9785dd58b1f4402abb0d48597ac0"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","c99016b161f6671e8bc9431af5c22202"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","b47ccac0806b9b90d0a62a891d568502"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","3ce93fe3fbc73928024b7d8c0bae4d0d"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","ac93758defb2d326338502dbd68b9741"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","362a06ae5c5a9b33bffaafc1a83cf9cb"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","15a978524574b0e1e44549b09df63cbc"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","cb6c3ec80a1cb2c5fbae78a6f1404878"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","6d8513079595ff17f8fe7693e60f5b0a"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","0cf5fbed31ed22cca9828e6896d39084"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","c5a61c0ceb79c9fa1feb840e61ded4a2"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","44ce0d841fec397de13d0e2b3fc856d9"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","7f6fe8c6a3348d3772a710e0bf8a6d0b"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","fa55250929f56039a2295391eeaf0a4e"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","50831a09a4eb0be85997bc886ff1b334"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","244ffc8aafc979e51c4eddfea77965b0"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","b7dd51dbc9e8f3b727ba5d0f943b5822"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","3ad4e771ae821e6da19c6104251c2345"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","01bf52d79e39a2a7db519657d4700ba9"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","6db33fa1f78f06d17dbfedfb14cd33b0"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","20b3efae27b8c95c70e35d74e58bebf7"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","7768faeff8d231562e184fa37748e103"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","9b049372b1f6e2915f26b12952ca4192"],["/2023/09/04/中间件/Redis/Redis事务/index.html","8fc3ff15cd677e508f3826a878c9e511"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","03129a74b005b147325a22a172a29bea"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","f29889412c3317899b86dac145d15494"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","2ab5804bd3cce9afd5e95a7bebdcf5fd"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","78e6766a70dd863f0d0a65ddce126896"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","76ca0002f45445a2a6e1733384da8efc"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","3f8ce064d05b072d4046465c375a80c5"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","c77d6a089e3941539c80ef89ab92b92c"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","1dbf1054768bfdf25f6a7aeb5773636e"],["/2023/09/22/Java/NIO/零拷贝/index.html","7db253716f9230b837bfb12c2dac3949"],["/2023/09/24/系统设计/JWT认证/index.html","6eb06f98785b29121ba547156b8c4936"],["/2023/09/26/Java/NIO/Reactor模式/index.html","8ee33af015080060d65c4495157cf74f"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","10a14bd8e7d541ff61a7737fbe74d175"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","b4d47e46598f4a2020b27135f3cc3895"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","c113ee1889ecbbb7874755a8d575d1d0"],["/2023/10/09/Java/并发编程/共享问题/index.html","aaacc36d40d9c2bea2a2b67f21e5ef18"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","4d1b59602f638295eb6f302931853bb9"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","4b4bfd09b37b4e48181622a09382a831"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","57235ab026901a738f785ac5f4be98d5"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","e9b4da9f17468c7519334430050a7a1d"],["/404.html","95812dd9684f1ef9d2b8704ddc4c3e07"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","96afa4263d88eb9b30a7a02e16783a83"],["/archives/2021/02/index.html","0d6895d94a87bbf3f18a8ab5aec68e74"],["/archives/2021/03/index.html","c2551ff2188f6cd5fddf523d9f9b0818"],["/archives/2021/03/page/2/index.html","0b8c0e49763a7388b0d0cd64937c6a9a"],["/archives/2021/03/page/3/index.html","4005a31f14628c2d351534db2a126b49"],["/archives/2021/04/index.html","bde49bb7e88432557a10cb417fef94e4"],["/archives/2021/04/page/2/index.html","1eba7c83133100a4237670d0106aee41"],["/archives/2021/05/index.html","5393be72c4a59efe272a04cf23af060b"],["/archives/2021/index.html","41ac6c252ddfed5f11491c71fb2f0406"],["/archives/2021/page/2/index.html","99d54034abfe79d4872276a2d72b79cc"],["/archives/2021/page/3/index.html","88e5548d3d439ddba998fc4ca31f8b1a"],["/archives/2021/page/4/index.html","3b08161baea3b1267c1c8e494115ad84"],["/archives/2021/page/5/index.html","725b5867d2cbf9ca0962d2a8596be46e"],["/archives/2021/page/6/index.html","f0f3a69e1c32ca7edfca766a7657264a"],["/archives/2021/page/7/index.html","5b1d8488106201b780b0c9cec2151a43"],["/archives/2022/01/index.html","e0c773d6263bcc31cfc57c0facbe134d"],["/archives/2022/04/index.html","e686331fc5073a06a2359c6271e4afa5"],["/archives/2022/08/index.html","e29e9821f310c38cd25e96fcdaf9e23f"],["/archives/2022/09/index.html","27862ddf7a8e4392f03fd14088aa7588"],["/archives/2022/09/page/2/index.html","8009eb8624e41ae2464d241876de23fb"],["/archives/2022/10/index.html","e5e306ab2bfe1389502bec026b73e15f"],["/archives/2022/11/index.html","e5c4c386f5bbd5a1b6dc0e796317db7e"],["/archives/2022/12/index.html","acd07d4da3dde8b0a2a13992384e6f5a"],["/archives/2022/index.html","0247e356a41a4ce8e6262a756e452715"],["/archives/2022/page/2/index.html","9e1c77c9bd8873fce0fcc0f54676c8df"],["/archives/2022/page/3/index.html","1fca51c5e0c6832fb20f7a05354e5477"],["/archives/2022/page/4/index.html","8de99dd8da3d25120b6a41046603d09f"],["/archives/2022/page/5/index.html","8ca83f8eba2f63d9d71c20c697d92688"],["/archives/2023/01/index.html","a6dd25524f95337f16b37296830e7ff5"],["/archives/2023/02/index.html","f91f702b747b1d0e9c0cdcd69961fa1b"],["/archives/2023/03/index.html","61c2e935b8f6c10376fd35e95c039e64"],["/archives/2023/04/index.html","9c405e2f1b0fcd1d09835fbbf0adc7d0"],["/archives/2023/04/page/2/index.html","7a0a7b50f6bffabbe25f052da9882bea"],["/archives/2023/05/index.html","84a588152d75bb8c48a6fce1e8cd31db"],["/archives/2023/06/index.html","8e2d406bbac1feefc4c56ddeb9b25fad"],["/archives/2023/06/page/2/index.html","2694e972f1421f27b783c235268ed78f"],["/archives/2023/07/index.html","f63f607bbd0de77653a818f9a86ca256"],["/archives/2023/07/page/2/index.html","0f986be3adbb5384d8017b4313344a53"],["/archives/2023/08/index.html","b1c44fe361bf7461717a80aaad7e2d2e"],["/archives/2023/08/page/2/index.html","0a914f93ce63ebca2c693cdab067ef3d"],["/archives/2023/09/index.html","ae758947b96935b00eabb5daa79c4ecd"],["/archives/2023/09/page/2/index.html","20033b81c789a4e39d35bcea82dcd860"],["/archives/2023/10/index.html","a84421cff2576a78c0292b391ef99c63"],["/archives/2023/index.html","d70a218ec683c7b9394479068f32618a"],["/archives/2023/page/10/index.html","b2b866b95f0869c229c12e30bac50c1d"],["/archives/2023/page/2/index.html","791c6c00572c112c6c8d2fad3818dc5b"],["/archives/2023/page/3/index.html","67c0a5ea2a19fbbb0ed5ff915574cb0c"],["/archives/2023/page/4/index.html","6dbdd7bbfa07a8b19a0e0a828509cea7"],["/archives/2023/page/5/index.html","8d94195fdb5851f96efa4106833e601c"],["/archives/2023/page/6/index.html","a57dd3798ac92e53cee2ba78410d3d86"],["/archives/2023/page/7/index.html","549ad21f94efaa0aacaa1cee95f80f14"],["/archives/2023/page/8/index.html","f6a925665f617ca28476080a7693e247"],["/archives/2023/page/9/index.html","c1e81d0f49c18bc7f502acb70ca08c9f"],["/archives/index.html","df50c35b9f59cdba029b6a875509c28e"],["/archives/page/10/index.html","7512a96f54c30a1bede88ab714cafea7"],["/archives/page/11/index.html","3217a44357a87273a710d59b85a8d5e7"],["/archives/page/12/index.html","da1efd8ea5c9c93948a1090335164103"],["/archives/page/13/index.html","a37c41faec0860ceeb0c845329ff5399"],["/archives/page/14/index.html","37c027fba6692b96c9bf540d8b7caf97"],["/archives/page/15/index.html","cc2f3827191762a589dadeed67eec393"],["/archives/page/16/index.html","6a4c5992471932b21ee3120b503fdd15"],["/archives/page/17/index.html","e8309c7eeb3bf97cf370f267812ba79f"],["/archives/page/18/index.html","13280a720c8370ea6bdd61df27315966"],["/archives/page/19/index.html","29e976eb23dd856d2ef81d74e6c84f16"],["/archives/page/2/index.html","9356525c1497074989c18454a5a8e58d"],["/archives/page/20/index.html","780859b0ada7f8b6ec7c7a7ba78d3a60"],["/archives/page/3/index.html","a2cc608c2c967bedffe5e6ed10cdd6e3"],["/archives/page/4/index.html","0861e528a4ab8df825f6758052484683"],["/archives/page/5/index.html","b250c30159a9f2a868aa0a6414356f2b"],["/archives/page/6/index.html","c33acc47464106bba7948f4a57979aad"],["/archives/page/7/index.html","152651d3bab272d08546697a23d1cb6d"],["/archives/page/8/index.html","e04e93ff590d23a752d62073ad9d2d9a"],["/archives/page/9/index.html","8421fffa92be8232b84a10e920c75652"],["/categories/Devops/CICD/index.html","194e65bee0382440008ab267acd8f5da"],["/categories/Devops/Linux/index.html","d43a729d6ddfbd2ac6cef8882472c94a"],["/categories/Devops/index.html","4c1e1d9745a33d6df79accd3ddbae6df"],["/categories/Java/JVM/index.html","229819a165f04c584a0e5441563d624e"],["/categories/Java/Java基础/index.html","479948f3278741204203fdee4286496f"],["/categories/Java/NIO/index.html","6c3685b16d28c2e99281598bcb4e29f9"],["/categories/Java/NIO/原生NIO/index.html","0731271bf3d0a0f2a3adb5f56b1333c3"],["/categories/Java/NIO/文件操作工具类/index.html","f2eb788678ba3d3efba27c85a76fe34a"],["/categories/Java/index.html","6b979d3bfb33c02852f6da4063210ae8"],["/categories/Java/page/2/index.html","9daf4554c201dcbf031b3d20db2ebe81"],["/categories/Java/并发编程/index.html","14bc9d941df85050bc7606573b866702"],["/categories/Spring全家桶/Spring-Security/index.html","146a22815156955600bababb2f1f7b13"],["/categories/Spring全家桶/Spring/index.html","aa0197dac0127af68d7e3756b7f8a19f"],["/categories/Spring全家桶/SpringBoot/index.html","5545fae10709a91aac4c51916540e045"],["/categories/Spring全家桶/SpringCloud/index.html","200a28d222b324cb8d32e32d2361cfb8"],["/categories/Spring全家桶/SpringMVC/index.html","e6d62a369c23c8f36c703bf120e66c7b"],["/categories/Spring全家桶/index.html","964e284f1af2bb59bde0d6088b317aa0"],["/categories/Spring全家桶/page/2/index.html","e069339b78f8588a808b0ffb4579cdad"],["/categories/index.html","8cb9d10af621b59a10c75501d32669a5"],["/categories/中间件/ElasticSearch/index.html","388deb325d56b013f1f4b14aad0fbb3d"],["/categories/中间件/Netty/index.html","d3189b1539bbc1aba1f2c7230e611d82"],["/categories/中间件/Redis/index.html","307d4f7071896a182cf7465a7afc269e"],["/categories/中间件/Redis/page/2/index.html","7f9f0e7461fdc986d19bd17e8ff34768"],["/categories/中间件/Redis/page/3/index.html","b947657967fbad8f9ca95bba9464fe82"],["/categories/中间件/index.html","6e9680ed101ad7cf6f4217847988b7ff"],["/categories/中间件/page/2/index.html","90211b794bb03e1a65239e7242e9b53e"],["/categories/中间件/page/3/index.html","c1e59ac5cc366fe5f3b88d4fa4af74c4"],["/categories/中间件/page/4/index.html","dc09289b67723d7b9925c9f2f862ceca"],["/categories/中间件/消息队列/RabbitMQ/index.html","6eb0534d915d4d569e19d220534b917f"],["/categories/中间件/消息队列/index.html","c0a6ff4a570bbe1cbc204db72cfd377d"],["/categories/前端/Mock/index.html","4408a9c6fa5bf0321a00fe379138f2a2"],["/categories/前端/Promise/index.html","8b9e3ac617398403719f054c242f3b83"],["/categories/前端/Vue/index.html","e7b5dbead86f037203a043dc5ccadb0c"],["/categories/前端/index.html","b059f05269ce345468861f997ab5bcde"],["/categories/前端/jQuery/index.html","3d758a82380ae7502f46c2a1645978fd"],["/categories/前端/page/2/index.html","7d9d013a997820378f3554391dead384"],["/categories/前端/原生基础/index.html","d4afa23dfb098727ac48cc059036016d"],["/categories/前端/异步通信/index.html","f281ef3a65936561050deae2c80368cd"],["/categories/工具使用/Git/index.html","279cdd0914d6d4950f44bb35b178e5a8"],["/categories/工具使用/index.html","9025194891e1071298289d4cb3a99bed"],["/categories/工具使用/markdown/index.html","9101573b5719188e3f2fbc31b5bad5a1"],["/categories/工具的使用/Docker/index.html","ca2f609226182e2e179fd918d5e23251"],["/categories/工具的使用/Nginx/index.html","6b4e33f8a2bea33fc4de47f876c726ee"],["/categories/工具的使用/Swagger/index.html","ff08189babf6efa3c3e57f866bb837c5"],["/categories/工具的使用/index.html","0501ddf29a7656fe068882e67f9176f0"],["/categories/工具的使用/博客搭建/index.html","3bb211dcadd19442555d839f072d7df5"],["/categories/数据库/MongoDB/index.html","d5fb9a853b0ef4a5df46d247e75e88e1"],["/categories/数据库/MySQL/index.html","8805665aa79d6bd634df09465dddab2a"],["/categories/数据库/MySQL/page/2/index.html","c2c4102022c96c1fe6512597e88cee84"],["/categories/数据库/MySQL/page/3/index.html","60b3a718b8e65527a3c0fd7aa743a56b"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","e794cca35a50b58986050cfc7c3db0ee"],["/categories/数据库/ORM持久层框架/index.html","133de9756ba247e6afa688c49144c48b"],["/categories/数据库/index.html","0a39ca8e1992fea18283fe6409a5a8c8"],["/categories/数据库/page/2/index.html","d41368d4c4c9aee9c738ddb28007ab64"],["/categories/数据库/page/3/index.html","8ff49bf628a49177cc70eea060ae4faa"],["/categories/系统设计/DDD领域模型/index.html","bd9ddec915d2a6231f3fc0f59588cc0c"],["/categories/系统设计/index.html","ee0cb534c7620cc227cd0c155ef6b2cd"],["/categories/系统设计/page/2/index.html","f51fd1fd40e0c4c0779cd7d48f9ea002"],["/categories/系统设计/分布式权限认证/index.html","53aa7665c7eedce91368b7a73378ef83"],["/categories/系统设计/分布式系统/index.html","28a1cb1650037f23c1bb79d5da6a7916"],["/categories/系统设计/设计模式/index.html","167b22b22e1a4fc6ed01dcc4434258ff"],["/categories/系统设计/设计模式/page/2/index.html","5ece415240a852a6fc770babcfad360b"],["/categories/计算机基础/index.html","991eca7216042eec5cad8a8c2a5142ce"],["/categories/计算机基础/page/2/index.html","556b562d7b08ae135c620810190203ce"],["/categories/计算机基础/page/3/index.html","624f1fce2ce743b0fd158da744f9ea6f"],["/categories/计算机基础/page/4/index.html","82493fdddcc21b28a4755ae3a34d52e9"],["/categories/计算机基础/page/5/index.html","af5beec7f9102dcaab10bd23421b2a71"],["/categories/计算机基础/page/6/index.html","3121fe381096153bf30c68f68ba05976"],["/categories/计算机基础/操作系统/index.html","aa3fed215366124bbdb9c58f93961bad"],["/categories/计算机基础/数据结构与算法/index.html","7993bfab88650303fffffff0da93b8bf"],["/categories/计算机基础/数据结构与算法/page/2/index.html","b77ce79fdc8f6c0abce99e0d53be5d9c"],["/categories/计算机基础/数据结构与算法/page/3/index.html","e606b1d1853a45b9b6e8ec8a04dabfde"],["/categories/计算机基础/数据结构与算法/page/4/index.html","71a651e88e5afc6c49ca5d6003ad518c"],["/categories/计算机基础/数据结构与算法/page/5/index.html","fe8fb27f969dfb757f4fabeb48e118d9"],["/categories/计算机基础/计算机网络/index.html","a21a91f550b331f86e369605303be4c4"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","4fb98e99af7af54ffedaf599f08eda46"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","69a57c8949a3dfad5535f5adc4724360"],["/messageboard/index.html","28cd5c6763d8a23a2ff2a95312734fdd"],["/page/10/index.html","b132c1752dbc95b3ef3a6c8166651e05"],["/page/11/index.html","d99699e317adb4b8ddb630f275f8e8a1"],["/page/12/index.html","541d8ab0134721368877d2b327c5b5dc"],["/page/13/index.html","6b4da404acd8938caaf3ebfb25481d9f"],["/page/14/index.html","38d8435735450b28836ff7cf0e3edb70"],["/page/15/index.html","5219a16ea6a4afd9158183fa36bb49b4"],["/page/16/index.html","ba5d2bdce2f757f5351a32f4d4ff7a3e"],["/page/17/index.html","a336f540b89d231c2325a5360b851f31"],["/page/18/index.html","fac52e7ac701c612a0d1e2d0eb4c8a7d"],["/page/19/index.html","f7a8c9f8f2fdde4cb863ac7b2a337613"],["/page/2/index.html","c30b95653fa62b5e94debc6b3c0456fa"],["/page/20/index.html","c8366067dbc8f9cb70cd4da5d9a1c9fe"],["/page/3/index.html","534458a04c6e013ff3b74844001420db"],["/page/4/index.html","ab19c183d62d4ffe59c1f0c1c3e204a5"],["/page/5/index.html","1c85c7b03427af2b3899c61c2c6efd7a"],["/page/6/index.html","87679f8e782f5cf4ef39d1eb43b71944"],["/page/7/index.html","c2fe7ca5ba0a4104a62dca8914b26356"],["/page/8/index.html","263d14f27023e885fc260e9b88000595"],["/page/9/index.html","86c218a92aa3a011d147ba87842a2156"],["/sw-register.js","66a8091656b3d36644949756198f7e2f"],["/tags/Ajax/index.html","fe8bedc072801f1c92d3841e500d1384"],["/tags/Axios/index.html","64214ae2783b06c5fd39eec78d8fe14f"],["/tags/CICD/index.html","9019d49bc5591b944723dcb3b34eee33"],["/tags/DDD领域模型/index.html","09f475362e01f0c2354e655ed3c3b12b"],["/tags/Docker/index.html","4d96ce5dd5de7336b3ea2851b13beefc"],["/tags/ELK/index.html","b7949c40651e19af644f6493a6e92963"],["/tags/ElasticSearch/index.html","1c2f03890ec48e58a5d707d24332ff96"],["/tags/Git/index.html","5fbd7040cf8965844c4ca96ddb6348df"],["/tags/H5/index.html","2ecfc2d1b6cf72630995506f554ad373"],["/tags/JVM/index.html","9f909807f167f0a7260027a587335f40"],["/tags/JVM内存模型/index.html","edf6dc5c2da76a621da555e303b9edad"],["/tags/JVM执行引擎/index.html","b419b6e072e2ca8d77b265adfceb3a62"],["/tags/JavaScript/index.html","9ba75b558931d1effa9d3b9e9038fcce"],["/tags/Java内存模型/index.html","0f7ff7d26c275bf4c14f2e9a98b182f9"],["/tags/Java进程线程/index.html","ff568dc5e67fbbeac3d6a9ad4c81e9c8"],["/tags/Kibana/index.html","9e9f6549f0c22dfb9cb579a67a45bf1e"],["/tags/LeetCode/index.html","645727b6423a368dffe724a29148df24"],["/tags/LeetCode/page/2/index.html","26b7fe3b5ae62267f9655482d658aa75"],["/tags/LeetCode/page/3/index.html","0724feabac70a7e229b2ab506add5607"],["/tags/Linux/index.html","72e0c07c954621f76ba8e1990638c37c"],["/tags/Logstash/index.html","7057c24438ec07f074a3f01045e7cb02"],["/tags/Mock/index.html","22301f90ea94a6b12808eb293b23f4c7"],["/tags/MongoDB/index.html","49d937b8015780cb4555a6f49e4b9343"],["/tags/MySQL-事务/index.html","c85cec68a71f9e9c0f8ab17931cc0f8e"],["/tags/MySQL-数据类型/index.html","8c7f5f2196e6028a9dd426276a9613d6"],["/tags/MySQL-日志/index.html","9fb1a7a84dc8d6513d2baa76e757b852"],["/tags/MySQL-索引/index.html","613d718bb5928c5eaf80a03e9f857967"],["/tags/MySQL-锁/index.html","921c9e7d263f220d43425b3c27cb932a"],["/tags/MySQL/index.html","dd085f696d1824ef1b4c8abc1415d8d4"],["/tags/MySQL/page/2/index.html","58edd7318f49d23514b6b8b5ea9402a2"],["/tags/Mybatis/index.html","008ecaf9f6daf20b06e711f8a5f5839b"],["/tags/MybatisPlus/index.html","cde4832bca6fabfce135195792d88e47"],["/tags/NIO/index.html","c56b37eccd5910bd0cf01dad463f1d76"],["/tags/Netty/index.html","da2ba40c35eb41ec3c63d6c415fe79be"],["/tags/Nginx/index.html","7175852094e215a168180d7f1befd028"],["/tags/Promise/index.html","719b37424f9398087f848cce201e39a7"],["/tags/RabbitMQ/index.html","fddf53a5d577efb7bd19cbc62ea853cc"],["/tags/Redis/index.html","cd6c2d4bd6986a6a33699b686c95fc7d"],["/tags/Redis/page/2/index.html","8dba78d28380265140f556842a825ecc"],["/tags/Redis/page/3/index.html","6f47c13f358755a9f9a9838a5270c391"],["/tags/SSM/index.html","020a5163c5acb0beb4feecb9c261bc53"],["/tags/Spring-Security/index.html","7eeaf19c2d2c3585d1ea3b3b6917d976"],["/tags/Spring/index.html","5e80051ac26e646c2cb3631f632c7844"],["/tags/SpringBoot/index.html","66701c281977b035d5fa709375397cb2"],["/tags/SpringCloud/index.html","3fb2a710e42d94125ef9ebfef728f1c7"],["/tags/SpringMVC/index.html","4c768d0a65c0b324029764dabbc8b695"],["/tags/Swagger/index.html","554454fba3830468362021cae7f42ab0"],["/tags/hexo/index.html","5246cf8e66daaf279158596d5b9367e2"],["/tags/index.html","d5ed76749620573c72fcf75d58c10269"],["/tags/jQuery/index.html","fab5204eada6db6769e2abcde9ca8bf6"],["/tags/java/index.html","e1fb372b51b83e1cce171f0e1a5ebe93"],["/tags/markdown/index.html","892c0b69f922d6015d92237eb4c4f09c"],["/tags/noSQL/index.html","5ac1b0021daedf5f713d62939b0dfae8"],["/tags/typora/index.html","437bbb47852c991317ac942a08457363"],["/tags/vue/index.html","b591ca9b42daca7d41e7c3d24035155e"],["/tags/享元模式/index.html","49d2952add4007cc87120bdfb0c6a517"],["/tags/代理模式/index.html","ce57b9b17f485a344f28ee84cadf77a8"],["/tags/内存管理/index.html","4fb265d79f53cc34f946084534fae12e"],["/tags/分布式/index.html","b455581c1f851ea705547381ae3b8abd"],["/tags/分布式系统/index.html","d5e3c6a8ca8a05d9fbc1a5d610c5a086"],["/tags/前端/index.html","b47cba9a0ed4fab2d19e0c6bf52c92f0"],["/tags/前端/page/2/index.html","33a8ee5014c9b5ffaffe93468e66728c"],["/tags/博客/index.html","624a1fc7e05db95eeab86540feee504f"],["/tags/后端/index.html","704c8184664eb834e66ae1a60fa02ef8"],["/tags/外观模式/index.html","8e1aaa1a13079871d62b1fe3b3966b67"],["/tags/多线程设计模式/index.html","396f195f26c65ce1c8d2b36820381f10"],["/tags/容器技术/index.html","9903ce3b1cbdf6c6ce47752ad3b40be2"],["/tags/工厂方法/index.html","a2bd27d8d4fcdbcf9eb2c0be5844069a"],["/tags/微服务/index.html","16023e3341075282400e8d63193a1f2f"],["/tags/抽象工厂/index.html","96d834e95c60b83a1c5d4452d460ed80"],["/tags/持续集成持续部署/index.html","dbab43d5edb0d86aa88dc7ea771af88d"],["/tags/搜索引擎/index.html","f4f91ed742c8c59d9c3f2a5cc74a3b18"],["/tags/操作系统/index.html","f1ba72f04e5f40a2e1f6abaeeb22f97f"],["/tags/数据库/index.html","4529136a2aa65b8b937a121889cdbf4c"],["/tags/数据库/page/2/index.html","55e3cce6207563d7362de4c388de7b87"],["/tags/数据库/page/3/index.html","37a42376a7470605cd79c11b1b942241"],["/tags/数据结构与算法/index.html","5f72436c04e204c030fa0e1de839ba95"],["/tags/数据结构与算法/page/2/index.html","4187cee3174b614aa8aa1dbd552fdb59"],["/tags/文件操作/index.html","645f2b7762f5c61551229184719be376"],["/tags/日志/index.html","860f41219765b5f86008f306cf9670e0"],["/tags/服务器/index.html","73af0dec496cceaed690048940246449"],["/tags/权限认证/index.html","147b9db8a93d8b31bc474da018a353e9"],["/tags/桥接模式/index.html","710a5c4195fc48f2d35df836de374c94"],["/tags/模板方法模式/index.html","7a7ebdcba508748168ea62ba3b2abc10"],["/tags/死锁/index.html","fee8335296aded225cfd14fca771a86d"],["/tags/消息队列/index.html","c50bc93750008cdab8c0ec2193dcacee"],["/tags/版本控制/index.html","dccd89d616a4324b49de7b54094d52ca"],["/tags/策略模式/index.html","045c7e5961f038bb91e57de1c08e7140"],["/tags/简单工厂/index.html","b725a24ac38753ca5f7d60e5b359c62d"],["/tags/算法/index.html","1925597d31a03df7659e791e5e3687ec"],["/tags/线程活跃性问题/index.html","b65d08d5828e7fb81f867829c2c2e136"],["/tags/组件化/index.html","823ed94f6c0b5e24711cb18f5c3c3e61"],["/tags/缓存/index.html","c76802103bddf5f29277a0ab03f55681"],["/tags/缓存/page/2/index.html","4d57b36b938ba7555fa2a42ab1ce75ba"],["/tags/缓存/page/3/index.html","f2750a5ae741f8e5003bdd87435b758d"],["/tags/观察者模式/index.html","ea9ecf4f2a55ac36b002b16d586f3c45"],["/tags/计算机网络/index.html","9398a2f76307d2a28e1377a8feea8f0b"],["/tags/设计模式/index.html","1d6371aaa8697c9bf65fcdc852f77680"],["/tags/设计模式/page/2/index.html","86ce97d87914d77b103460eed70da706"],["/tags/资源共享问题/index.html","8d788a52456d25d5c4147461d0ca012b"],["/tags/进程管理/index.html","12f256f3617acc5824d9296ecc87eecb"],["/tags/适配器模式/index.html","24a6153c24ee689ac1622ac10e634a97"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
