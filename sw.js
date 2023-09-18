/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","aa1e5b26be1984d1f958ec8eeb13e174"],["/2021/02/22/工具的使用/博客的搭建/index.html","f6228dd296d78a17342d431ac4eb68c0"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","d86db4e0b2f9c539ab09d6db7dab978c"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","4316def05f2fae1a3ad52482f6ceacee"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","7d092a256a2b4c34719e7578927cdae0"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","a7897830ed0d00b2794f5da18934ed6f"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","eb0d419c272af839f1c265449175e577"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","97ce542a98dbcffe268d5f0a90f7aea1"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","a473a63151f063a40e3c86950f2d1883"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","e4b722e2471d7d2f49967b08d0fd77e0"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","fe1aa9a3e042dbc2960c89274c18a657"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","2e6fec96295a4ea71cc2f81412cd1961"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","7c8ceca9e3df1f0620eb73c21c94e3e4"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","028a4a401ea6f651b32cb73b1cc42446"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","62fe73ff638a91c830e0a12b1c3f896b"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","0eb9e08dc44303bfdb04e7ba77cb31d5"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","685ae1bb1727d86c21597b7a7daf3145"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","2808414af20e13e3fcd2c1c4a3f486d8"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","e3951f3da1e9d3e463167c815033063e"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","dba7fb22570f53fb5b4e2ea8e7f81c93"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","c4251676e827d0aaa143a06ac0bc0731"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","1d8fff2d6a956f3258a8aff316c931be"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","99f1b50dcd020dc1b1bef75f6e22942d"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","0cc1086d39e6089ea531c7d9c105d201"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","acaa0f996e36fba4f718a0c2b8eb3122"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","4a2bae93fef3772c4ed3f06e0f7f5bad"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","890614ba186743bb8145ee755e2ce493"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","061e1e301366f6c65f18934e2e7d2425"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","fa13adf2e560c40c8cb42750c7cf3c73"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","64aafc4f1dc9fba799b00a3f59a78307"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","977af2db3783751fa558b6892bb81e17"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","571fcb3262508e4e9882a89545056ea6"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","5a179408581517be93b0b0c2902c085c"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","3e7e2cda32ce4ca173c4ca101acea0ec"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","e7b0d1f35f0b425e3f6df84aeba09d71"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","aac65ce5371e3081407d6c84d46186f3"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","47ee345fb6b2e58b46203a95704b9f17"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","dc81db1a1ad95f44f0fd947b76cdcc55"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","41b5cef5a46838116f63e787e282ec0d"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","4cd5175e684399d1738723839ed81a61"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","5166d9f91cd7fa9207b6e362e3417888"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","c511d213b530d52b91318336f2900dbd"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","404c9b8afb5675b798aa3cc2f63c67a6"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","621334d66a74d811956c708fc0a238b3"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","67a62da7797dec0459f879a44814092e"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","67fb3536d6a2f3de453f8cabdb87a516"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","3dcb9f3d9037c0f323b2e39c58aaf217"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","15179d709c368a815021586b85525cd2"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","85f3be931cd02aa625a609071e7e91f3"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","0a6fae085cd85e1a691259ef4c6587b5"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","92227822abdf1628be03609dd6e1a18f"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","bb02ec3fdaed140550a09d0e0d806b0b"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","83921b583176cd68dc001b95867c9313"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","aa2be3b9e2ca7dcb7b981a0d95421be5"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","23c9f84f7ed35077c61c6c07340b820a"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","555f0538ea257cc0fa991790436af2c1"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","b1350633ae1dac24f78ed4fc6716974a"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","be27f8b86db42b8c659f2e11672f36e6"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","f3c4f5ce928db7f30424e70349ea7001"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","e0538b4a03cca9443cca2f0c1fdd4684"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","ab8c15e21c425aeecc2dc2937bc7f4c4"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","87b9e005e0fb742d87902532e06f90ef"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","d76f0ea1453f96c06eb9ae480d48ac89"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","5a5976a6d73c5f32d84d92e0f0a9fea8"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","ded4208af5d6b2587e45e9785422cc32"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","b7feb3fb46eabcf3f5c2973af03bcc1e"],["/2022/08/17/前端/jQuery/index.html","5f58186d0187c2f803c2b4bb0e40fdc7"],["/2022/08/19/前端/JavaScript/index.html","3904b7d5b547b4275cdcdd0a260b767b"],["/2022/08/22/前端/Ajax/index.html","9f32e2c31118fd14bb1301cda40036fd"],["/2022/08/23/前端/Promise/index.html","0ffa24d25d98988341ef5687e0e685ca"],["/2022/08/24/前端/Axios/index.html","6be75a35da26ef3a90884472437e5b78"],["/2022/08/25/前端/H5本地存储/index.html","5566d2233f99fea5a27c848afd1675ed"],["/2022/08/26/前端/mock/index.html","9241e9440eb2dc694a358cc47a9ed13d"],["/2022/08/31/前端/vue/VueJs/index.html","bd67b62907218afc8c716e79b0d7f094"],["/2022/09/01/前端/vue/vue组件化/index.html","bd40526879c516ff58c74b1f028f05bd"],["/2022/09/04/前端/vue/VueCLI/index.html","f7ce080996a5d0b9d3b5454ddf97061a"],["/2022/09/07/前端/vue/vue实现动画/index.html","acccdc6cc139afc1fdc3d2eddd600ea1"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","de85b94f6e393555ce65b098acae27b5"],["/2022/09/10/前端/vue/Vue异步请求/index.html","b5b98a4a25979f86a6a8e4305d77503e"],["/2022/09/11/前端/vue/vue-Router/index.html","43f7831bc2243a76170e9c5dbc55a6b8"],["/2022/09/13/前端/vue/Vuex/index.html","ade2ada3803b1cf0b8051c10fa5b480f"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","51272cde8fc97fc7e14042aab3f1a182"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","f88badda72e52fdae7b49fad661c4c42"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","c49acec60c2eee7048d75f35dc762009"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","66e5ac793a6ce2d8b2e2173b7aae6cb3"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","63ca5481a11ca59c3eee1b8e9b2de286"],["/2022/09/28/DevOps/Linux/Linux/index.html","13ce91cfbd16c60d63c73f7a8eb833fe"],["/2022/10/02/中间件/Redis/redis基础/index.html","2156dd62bd7a991c5f6d5301aa41c079"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","d7b877d25d4cff076016a1c818f8f6b2"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","8476d958871c0b9c25dbcd69356be0b4"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","236ecd740bd8284f39daeb2e9e0c7a40"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","81dc8ec6b4c6390b8abd40e74b0bd5d4"],["/2022/10/17/中间件/Redis/Redis集群/index.html","532981c88da0ff08196cdf12dbd8966c"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","a073452b53907c9c06368725d1b66fb1"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","50babfdf62759d28aa05b5bbed0849cd"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","3e0a673d88348791bbf0d8aad6ca2dbb"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","817ecbbb7df3f75379d9b1b574496679"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","44cbf49a9c388785fa8fc58399acaec3"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","c27cabbaf30c8cc751f15ee923995f71"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","1ab941cbf00fa6867b3aeb21dab6d93d"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","f371260cfa2c7f25a40bc790507fb639"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","3d29c43e999cab74c841e021e9cb506d"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","0a16e7f923213109779df0fc645fa9ca"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","7c6e5719e11951e10c718fbe54b99233"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","b00e3bb516b94630b482cfa0d415d610"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","c32ff890129efa38142e3bcf11e409a5"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","334d0ea4bd6ae42ad52a69d5bb0dcc15"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","487dc739f7891ef10a3204af07aad420"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","ea034751549341acf8b0772c33c0f77c"],["/2023/03/10/DevOps/CICD/CICD/index.html","d9b0a0be2d4255588865cd894bf0eb66"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","fb6636db33af34adc9ff03bbaa845ea5"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","46ffef55f4a551892322128f9a0a231e"],["/2023/03/13/Java/NIO/NIO/index.html","b9697c1751a27287e0175b2819fcf5d1"],["/2023/03/14/Java/NIO/Netty/index.html","a2520686d3a1eba8e5f0570eee5a082b"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","3f5b40159da46ff540940c4711706f68"],["/2023/03/17/系统设计/分布式系统认证/index.html","579e3dea909be2b769e3027375351e7e"],["/2023/03/19/Java/JVM/JVM概述/index.html","747abd0eeadf41d0b3cc7f01d8ca01aa"],["/2023/03/23/Java/JVM/类的加载过程/index.html","6c0b59de44e0efc95b7dcafc803e31f4"],["/2023/03/28/Java/JVM/对象的实例化/index.html","4d0eb5278e024f50bb878f8d4b97bf31"],["/2023/04/01/Java/JVM/运行时数据区/index.html","1e23fc28cb1e816589b801e8765e7701"],["/2023/04/04/Java/JVM/执行引擎/index.html","418d263d13297b062022aef9ee09927b"],["/2023/04/06/Java/JVM/对象引用/index.html","9406ec597b7550235be3a61b6c9010d4"],["/2023/04/09/Java/JVM/垃圾回收/index.html","7337a6f6b31b3bcbf3af9f7a065e3b1f"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","66f52f1f54b5e4861b6d7c337b7354a4"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","331321a69d3ca15d615c056c024fa5e1"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","2c89e69c1e825ba72102376ec2fa1027"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","c14680753513aa1ba4cf459a8c12928f"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","461ea6d2fc69852caf888ddc8f0613e4"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","ecdc1831c6634e12ad81ddbb34f89d2e"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","4448f8f702fd616b9ef8489c2630a1bc"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","ec6424cd6e46fdcb69a67b5dee94293f"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","4809488a444494d36bf21a27f112433c"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","0267ec9741d0dc5d76502d1fc0e01d68"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","5048fc8e219ae475bf477b9c5bb2c9b3"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","7034e8463256fbc0bf5af527cdb552ba"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","29263375742757da21e12fdfffb3da9f"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","170ab3db3e0cba3dd1e26a3fab24c1d2"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","8370bd8618cb71bf50b1a0b2180965c7"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","1dc2525006d5a30f6f33248a61354b4c"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","3729298928bf2146894184b768d11eb8"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","c8724cd41be8ad3c9391e49a5b885c83"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","1f0a17c22dffb58b20305a7713ea9b9b"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","19eecc3d14c530dc6e82004d94c1ce21"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","2df3453c70e3e95fd24ecad015f04e01"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","3f7e19d1f40994163e87b5fa5cc4587c"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","fbafe8ce9721be3001ffdbe063452de4"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","6f1e3405e051a57d51eb480cfa5bb1d2"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","d41555065be557f9879bb6e9fc2decc4"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","f14aaa1481ace610ecc0c1d5d7dc8076"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","0a4b7f7c2315507afcede4060e518317"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","d34ddd2f947698b4375a007fcc56ddb3"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","f3e7ce0b60525397df942a5f3305eef4"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","e7b961f5c53ed688fa92d28450059fe0"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","b79c1c5312213e81ced746483f8bf665"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","9878ced7d0fefc76602a5357ea549b55"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","26a886a16e31c388cc70318198908c23"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","578c2932063a15cb8c57b997931c2e7f"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","cee2e3a2b0fe040957a6ab49ef570da0"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","d2aaadac2fabbc2e1a0fa816b5744373"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","b6fa475e81bdd38a4107803769a257af"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","a6276b76354de5e2ad4853b254102cc0"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","4d7c7e4e3070b81871e618785136bf4f"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","0507a5c68146c6cb27abfcce3e212b3d"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","b20761a7c2cc6643ed62557f7f047d0a"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","04796d29c703aa9fcde9c9a2c5963afd"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","17d79ebb5f7f3897912c91bcc3943bf3"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","18c67e6d4fbc2c46d8253441c49a73b1"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","6076077f210b765cc8899bdf339c1267"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","15465509747ef12eac94fecebb604c22"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","4425e37ba7db5d5959905c6eadc31257"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","95ed62ba41ce99419986fb6ef211f40e"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","56ce64b00b2775f37b3e25966538bf95"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","dca87d10a6ff10f4c36e40375d6d2aa3"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","0a673f027cbf6a07789f4c87f381b595"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","6fcecce952e06f66cf3708a64804733f"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","ef7c46615929ae7690c51808bee78d4b"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","2d30e4c96ecdf7b5dccbc2c8b91ddfd7"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","29a5fa22f5804df2e333bff043d71c35"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","22a660ec2823c2d207e163e9841f073a"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","7c965ae463231b7f37df30a8bf94f952"],["/2023/09/04/中间件/Redis/Redis事务/index.html","5e9bfedfd5590b6ff6a4569259753251"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","0d5e977cfea43684ce602e308ddb1452"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","b8df3c1f416275e3863f962e58cbb190"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","52364c0937bc49610de57c1a0d295617"],["/2023/09/12/Redis数据倾斜问题/index.html","a4d4cc5fc42163b118d8eb22e4c57e86"],["/2023/09/14/Redis6-0新特性/index.html","bc676bac96d22762f7a2bd7813d57e29"],["/2023/09/16/DDD领域模型基础/index.html","06ac9867f339d58bd770383540d46916"],["/2023/09/18/DDD设计流程/index.html","cee2b2ff5f108143bf85850c3d486c0d"],["/404.html","cdc37d9c1bd49431adc8f5ff4b7d0413"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","dc31581b90999830c79cc3c04eff41ea"],["/archives/2021/02/index.html","e0b1de2eb02c0681f83658676487e94d"],["/archives/2021/03/index.html","905b4413f6abc53a39bec516ccec3d4a"],["/archives/2021/03/page/2/index.html","a388e9e5e069ada726743eea28a002bb"],["/archives/2021/03/page/3/index.html","c65bc3c4cc0d233f0dd9998aa340868b"],["/archives/2021/04/index.html","3d45192e344cc70d32b826dd308fd359"],["/archives/2021/04/page/2/index.html","a4f56d5c35a4128e72f9d436d41311bd"],["/archives/2021/05/index.html","3847f3625faa62564af2387472a4630a"],["/archives/2021/index.html","d7c7e83ab454270f396c2df7669bbb77"],["/archives/2021/page/2/index.html","18f8f0e9614f65666aee2d40a573fa85"],["/archives/2021/page/3/index.html","a9d1b4a2bc1caeafc42d6d8399ab568c"],["/archives/2021/page/4/index.html","f8d1c851141265ba827b5a5bb5e52c53"],["/archives/2021/page/5/index.html","362a11b3db1c4d1cf8c3b694e394290e"],["/archives/2021/page/6/index.html","dff14dc4cf9ba4069ab7453b1c2a9b39"],["/archives/2021/page/7/index.html","5979a89c9634394390c8a09efe5f77cc"],["/archives/2022/01/index.html","79c9bba8adcf9c75cfda755884ff3b95"],["/archives/2022/04/index.html","3f81b0911c1d99234dd93f889e4d1f56"],["/archives/2022/08/index.html","ee406e95a3059f46adb76be7790c7b95"],["/archives/2022/09/index.html","5e7044757263caab402663d4a86542d9"],["/archives/2022/09/page/2/index.html","d451f43f185565bb472e455b198347c3"],["/archives/2022/10/index.html","11d94658463dbb0f5bfd7150bf53b849"],["/archives/2022/11/index.html","abf571b0e6119e3b783dd72510220346"],["/archives/2022/12/index.html","e21266f70cfa4f3efb5f8c3e8a9a3087"],["/archives/2022/index.html","fd1dbe6e4e8b66a8ccf445560b9c34d2"],["/archives/2022/page/2/index.html","b435b213267d78ab6cb78b032d064ef2"],["/archives/2022/page/3/index.html","fa30370ca69020a9b64866eb769e10ac"],["/archives/2022/page/4/index.html","b601cf5ed9a90d28e9a28f7c5a63b0c1"],["/archives/2022/page/5/index.html","c80683a7b1c307e37ccdb30a5489adb1"],["/archives/2023/01/index.html","c858c84bb5097d893e5968c2a8474cc6"],["/archives/2023/02/index.html","fba71cb6527eb6204979878b1c237bb4"],["/archives/2023/03/index.html","3655957b5534fc3517ac067384ad28f1"],["/archives/2023/04/index.html","3532ab474abc805fee2f8a96c41f7704"],["/archives/2023/04/page/2/index.html","54184db1b78160b6e9ed44967912c1c0"],["/archives/2023/05/index.html","5dbfebe56a68383679e44dcb7a54be0a"],["/archives/2023/06/index.html","74b3b357ff4b5e7ba41787cb7cae9af1"],["/archives/2023/06/page/2/index.html","299ea1442a25d5ddc0b6a8db91df7e80"],["/archives/2023/07/index.html","6ef3247267b2a53db61f76c89f2d49cc"],["/archives/2023/07/page/2/index.html","3bd5e700c8badffb0ae858e5e6962697"],["/archives/2023/08/index.html","6819dc95051c09b262a4a70cefbbcfd5"],["/archives/2023/08/page/2/index.html","3ce4e892b3c8802dc09ff40ad9b520c8"],["/archives/2023/09/index.html","c7ba38cae175e458b2bd55d5b798ed20"],["/archives/2023/index.html","33d861ca9b6dfabc5f90ecc226dcf164"],["/archives/2023/page/2/index.html","bd5bec6f6b2a9cd77391eaf6891b9c65"],["/archives/2023/page/3/index.html","5f35f88cbbd1ceb376ce56dbda5132b8"],["/archives/2023/page/4/index.html","808af9b2562c0e9ffdbc6dd819d9a2f7"],["/archives/2023/page/5/index.html","75f56bb3999270a1bc6743357c29dc05"],["/archives/2023/page/6/index.html","a75e6df070b36fdbca87f7da7bb9672d"],["/archives/2023/page/7/index.html","bb75248b6a4abc77ff7a8b66b7264296"],["/archives/2023/page/8/index.html","a360ad534dd871baf651b5148c0e6f44"],["/archives/2023/page/9/index.html","136c7937ebd5729b58daf05af0075f42"],["/archives/index.html","52fff238e22c37c8ad34631bf5f88bfe"],["/archives/page/10/index.html","f2ee759902ba5441fc30e9bd9662315d"],["/archives/page/11/index.html","ca783b1490c2b5451251c1830a832f9e"],["/archives/page/12/index.html","a7093431c60af9bf6531e49f86baa46c"],["/archives/page/13/index.html","9e98d0d964141e6e94b135c3c0f5933e"],["/archives/page/14/index.html","236ffaa4864e3c024ffd16e5ed0dd499"],["/archives/page/15/index.html","49b8efab9ad96b1a1addab442eb78d7c"],["/archives/page/16/index.html","9c89adc595f9b08001aab9b8779523d0"],["/archives/page/17/index.html","cf9a95c0dd79563cab9a742f498beb21"],["/archives/page/18/index.html","99396ce511f562849bcecfba63fd6e2d"],["/archives/page/19/index.html","8bbf93126eac6fa5f706efdb98ff7da9"],["/archives/page/2/index.html","391e62ec7e6342b1b115ca31b6254a07"],["/archives/page/3/index.html","b35bc624761c6b447ebf87b0bcb85b0d"],["/archives/page/4/index.html","44e454204b8d249a96455772f0912cf8"],["/archives/page/5/index.html","fa192e9ae0d52441e1af725a86bd65e5"],["/archives/page/6/index.html","52c372499246d744b3b19697b06da9df"],["/archives/page/7/index.html","e91d4141a0b846a2f5dc2b2a1018ec01"],["/archives/page/8/index.html","0bc972a41004651e6ab9bcd45ebe30f1"],["/archives/page/9/index.html","b9c7e5a06ec828ef5af9a9265b7c2e93"],["/categories/Devops/CICD/index.html","2e1d74f9482ecfeac05086c46ad7c0d8"],["/categories/Devops/Linux/index.html","9aabe6aee66ac07a1a9e28e86b1e2add"],["/categories/Devops/index.html","8b76ec7050e798a1403bba0ae963d902"],["/categories/Java/JVM/index.html","9d535e0f456e4a1e50789ab6e8526f56"],["/categories/Java/NIO/Netty/index.html","bcfc4c738eb10b69f2e63c0e185ba017"],["/categories/Java/NIO/index.html","fcb3da78d177893608f0d0d866a3f277"],["/categories/Java/NIO/原生NIO/index.html","62486355592975eb481665e920e7909c"],["/categories/Java/NIO/文件操作工具类/index.html","d6fc0d4917be56133738fdc79daf6f4c"],["/categories/Java/index.html","96f455ebac9a42b4e947e4bc7afea3be"],["/categories/Java/page/2/index.html","cb0a556092167c01a19ea7f0ad6f57f2"],["/categories/Java/学习路线/index.html","5eb4c34525e813b4497c53d84de6acbf"],["/categories/Spring全家桶/Spring-Security/index.html","48b17c8578c9a286ea7176cb3f5afa60"],["/categories/Spring全家桶/Spring/index.html","74fdff90f888c5f8b0f1caa9914073aa"],["/categories/Spring全家桶/SpringBoot/index.html","ecb83205eba66e3f0099bcbced570096"],["/categories/Spring全家桶/SpringCloud/index.html","1567b93bac3d50fd4d7346ddddbf7485"],["/categories/Spring全家桶/SpringMVC/index.html","28e934861e324a5da9279a5730d7b806"],["/categories/Spring全家桶/index.html","7fadd87a5d76ca8d5ac4b74597c122e7"],["/categories/Spring全家桶/page/2/index.html","8d324a123f1840d91be894b88b427109"],["/categories/index.html","5068ade8694440ebf8e757e7fef53c24"],["/categories/中间件/ElasticSearch/index.html","b6e83cb7f6c0d44c5aacda55124f40b9"],["/categories/中间件/Redis/index.html","19328fd4e7264329d3b5d544b419a7b0"],["/categories/中间件/Redis/page/2/index.html","388c26bcd973f1f55d00d7b1123a45d9"],["/categories/中间件/Redis/page/3/index.html","519cc83d7b197a5963db4c29cc4ad21d"],["/categories/中间件/index.html","d511fea84daa5bfe3f249e74a8dddc1e"],["/categories/中间件/page/2/index.html","8f3c176a01ff2fd88d15ce3c3945feba"],["/categories/中间件/page/3/index.html","c003a2462be41e98f1aab059e5ba4720"],["/categories/中间件/page/4/index.html","e79abd50831e2c1e4bfce6672c78bfbd"],["/categories/中间件/消息队列/RabbitMQ/index.html","7ed1b2199d3e1a440194965293a9f8ae"],["/categories/中间件/消息队列/index.html","0afd245f0a2d594a009efc39dc4fa6fa"],["/categories/前端/Mock/index.html","9b182cb3797352452a1e73d55afbc100"],["/categories/前端/Promise/index.html","733e926ed35565eef00134408ecca8c3"],["/categories/前端/Vue/index.html","8e5f4edfce4c4547d74fa9ce068d417a"],["/categories/前端/index.html","216f0296d09ddb2a5bc4e7d862c496ac"],["/categories/前端/jQuery/index.html","c7c5fc71ab7648307933a5dfa3d6fbf3"],["/categories/前端/page/2/index.html","9bc27aebcc0db7d78abbbb5bd14ada26"],["/categories/前端/原生基础/index.html","5c36fc7b1663fa84d1d4b4111f4debe4"],["/categories/前端/异步通信/index.html","ca13b9252b9bdbc606ad3618f2c6b883"],["/categories/工具使用/Git/index.html","cdc9ab75f1749ad6f3b22b239d0ed0e5"],["/categories/工具使用/index.html","8bc5742e101490f0affe6ee1759bb722"],["/categories/工具使用/markdown/index.html","8946d4a5ba5746062c05657b25b23491"],["/categories/工具的使用/Docker/index.html","afa616183b4d1c09abed84326d549491"],["/categories/工具的使用/Nginx/index.html","c1de9baee13f876409ad6398fafef10a"],["/categories/工具的使用/Swagger/index.html","8fad84aa3b460f6aef420bc3c23d6fb2"],["/categories/工具的使用/index.html","6ae3dd884fe369d80e3f52d5aae6f4a4"],["/categories/工具的使用/博客搭建/index.html","cecd7e6c3f9211bf825e1dab1a6c47cf"],["/categories/数据库/MongoDB/index.html","11e74e0e7b35ff4c860ca2cb0cd23d24"],["/categories/数据库/MySQL/index.html","f3a2f9c99c9a49818e82211cda04a154"],["/categories/数据库/MySQL/page/2/index.html","3539b055a99003fbbe55294a8761d837"],["/categories/数据库/MySQL/page/3/index.html","987953f8b6e4ea6a6dd63617ba848107"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","cad3293241589aede40dc5fc4b98565c"],["/categories/数据库/ORM持久层框架/index.html","385a39e6561189cae47fc313ca12d733"],["/categories/数据库/index.html","1cc79ec7dd180912eabe32881fe43342"],["/categories/数据库/page/2/index.html","23c13b4d126f2f6806c865c874230d85"],["/categories/数据库/page/3/index.html","2130f2e175d2ff92a29ab202f9b1ff4b"],["/categories/系统设计/DDD领域模型/index.html","088c084ea07f811687717cf34dc79be9"],["/categories/系统设计/index.html","da69ffa714470b91423c0e300f26d147"],["/categories/系统设计/page/2/index.html","27075fd067ab8ed2640707f033b0a9b1"],["/categories/系统设计/分布式权限认证/index.html","9f253532a9de9a542e9d635ce1635642"],["/categories/系统设计/设计模式/index.html","919ee1ae91b93179a27ecfd6c8489396"],["/categories/系统设计/设计模式/page/2/index.html","056bea7884c885e31073825fff1a7431"],["/categories/计算机基础/index.html","eb33c58352afbbfcd9c7b91173da67d9"],["/categories/计算机基础/page/2/index.html","c7a0b92115bfb7f154532454dab175ea"],["/categories/计算机基础/page/3/index.html","01360dc77729d9edecc4ac49ae5b7722"],["/categories/计算机基础/page/4/index.html","1298b93ffc68f671e8d0de4ddd082a59"],["/categories/计算机基础/page/5/index.html","7fd78ade4077458d64939d3496782c22"],["/categories/计算机基础/page/6/index.html","71ca299ce2926b04c4915841781f88bf"],["/categories/计算机基础/操作系统/index.html","f802ef2b217ae534af90033ce781f7c0"],["/categories/计算机基础/数据结构与算法/index.html","b23410085a4d7a61fa172426a53727ce"],["/categories/计算机基础/数据结构与算法/page/2/index.html","51642bcfce469b138c0e9f3b79745146"],["/categories/计算机基础/数据结构与算法/page/3/index.html","71c4b7376f6206ba97050caa828b60a6"],["/categories/计算机基础/数据结构与算法/page/4/index.html","741a9659cf4877a619653670aafd823f"],["/categories/计算机基础/数据结构与算法/page/5/index.html","e0b6a3a0f4c6c021d980b1a4685ad9a4"],["/categories/计算机基础/计算机网络/index.html","ee40454cc96ec26de5aacdd89ef30f67"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","bd6bfbd9c11555381e2d74410066ba74"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","297222a03d80d06e855e38f40d102bba"],["/messageboard/index.html","3471a03b77138df4b8764c110d4733b7"],["/page/10/index.html","fce5953c04d3e4d5daa9012759f4207e"],["/page/11/index.html","484f39b23b2c00cf5b00d56d82445d26"],["/page/12/index.html","0401a7e4d3cfe22a453c0c210cb1d8fb"],["/page/13/index.html","f26cb1fb5a4da80b3b0b995a48e0bf57"],["/page/14/index.html","9027d6ca2c488c6a6bb1130df5e0e50d"],["/page/15/index.html","2f43abc3d02417649e5ea3998165c580"],["/page/16/index.html","e51f404492e4c4b983065931e9b8d844"],["/page/17/index.html","77f6b8e5189b14d7510d00822c0523d7"],["/page/18/index.html","3f70b383cf53099c4da12eae82d890b0"],["/page/19/index.html","cf663c1afa7d520be8c1fa7df982e8e1"],["/page/2/index.html","1f928174840f341870e6ef5543582a0d"],["/page/3/index.html","aca621acac9cfb93656622eae7e1fe3b"],["/page/4/index.html","5ffa65183c417b7f747f47e1e715f841"],["/page/5/index.html","c9dd033daad8bbf5b901fca24357fcd7"],["/page/6/index.html","d8d8bd2a36512c34d5a668b3b91f7a67"],["/page/7/index.html","029c5d151939cea959d40b311b1a01f0"],["/page/8/index.html","f50122e2eeed5b7c21edc899d9482d91"],["/page/9/index.html","3185340cdf0d5f7e6c418da69a5d4981"],["/sw-register.js","061f9d8390736f45eb62ecaef41ee176"],["/tags/Ajax/index.html","85dd15e8201fb11a7a2a008562184375"],["/tags/Axios/index.html","4fbdc8e320c910c740d168503b2da548"],["/tags/CICD/index.html","142e213f2d3ced0d3826150127eda730"],["/tags/DDD领域模型/index.html","b76bfe4ad3cbeeb4a8d33ad12da76058"],["/tags/Docker/index.html","1250df5a49d50aa2009e85bfdb9d4e14"],["/tags/ELK/index.html","0a7ec8e5b89d36bb169af43f1e215737"],["/tags/ElasticSearch/index.html","613b7d28140dabd4c831cb4325b7aaec"],["/tags/Git/index.html","1153bdab91001c107d61942ed259ceb8"],["/tags/H5/index.html","bae2da4bd0ef1648186ab18fc11058d2"],["/tags/JVM/index.html","b8c0e6a7d0a582598779720ccb924d57"],["/tags/JVM内存模型/index.html","076d8b9a5831bb6c35d152e81aa02b3d"],["/tags/JVM执行引擎/index.html","f3270b44c21047c195f50023cc57c71f"],["/tags/JavaScript/index.html","a73bf80961d97bc3b84a4cb032ab401e"],["/tags/Kibana/index.html","23eae3c2c29a3e93d3164d968b46a47c"],["/tags/LeetCode/index.html","e374ddd4a83a5ee9724ea81f6ea5ae2a"],["/tags/LeetCode/page/2/index.html","2ae59046b2c05b508af97fa3a72adef4"],["/tags/LeetCode/page/3/index.html","5b2bf91fa139f265cbe002703c421896"],["/tags/Linux/index.html","062fdb0ddc82320841b7dbbe32af9e18"],["/tags/Logstash/index.html","c4eb0b3d34721123bbb80265efb0d359"],["/tags/Mock/index.html","d8e86cafbd4dd6d3b9272be9eaf6c67d"],["/tags/MongoDB/index.html","0b1c5e85d30adf8e4bcd7a92ae2a50d8"],["/tags/MySQL-事务/index.html","1f3c217fa17a653b63c81e30928d107d"],["/tags/MySQL-数据类型/index.html","9d1f6f1b19f5f81090a9b0d793304c2c"],["/tags/MySQL-日志/index.html","9290de705ed1824f610beb8253f1ae44"],["/tags/MySQL-索引/index.html","116864077ee341b38d19310a4f97185c"],["/tags/MySQL-锁/index.html","311aa4ae87fecfbe223a4b506e545591"],["/tags/MySQL/index.html","55b25da47286c673112eb7b5db14dc45"],["/tags/MySQL/page/2/index.html","5de0ca9de0d3e38ca67edd99f715f73e"],["/tags/Mybatis/index.html","c0fd740a0ab354a91a436f69734a15a4"],["/tags/MybatisPlus/index.html","c7b473ba54d0d8fdec4a372c3ecfcc69"],["/tags/NIO/index.html","d3a7316a22cac9fde74991f0d579468c"],["/tags/Netty/index.html","f4a911d6090b855b2d4089796a446b12"],["/tags/Nginx/index.html","79124d1aeb93c4d824e401ee31b8a9fb"],["/tags/Promise/index.html","0e97b842104a12c95c35fb7e977382e5"],["/tags/RabbitMQ/index.html","59d2a42b209cd39c618b3487a2708efd"],["/tags/Redis/index.html","94ef6c5e60cf28723a131b7db7c8a0be"],["/tags/Redis/page/2/index.html","64044127e8c76b97c4431a411944495e"],["/tags/Redis/page/3/index.html","dda9075c83d450e5e2cd0c2c81ed0aee"],["/tags/SSM/index.html","a9b86fae8825f470555737cce4f11aaa"],["/tags/Spring-Security/index.html","b03eb4ec332968e94b9911950f55a3f9"],["/tags/Spring/index.html","b19bfa7537a743137a843c32a4a4b296"],["/tags/SpringBoot/index.html","757c46d1077fca6f49dbe15023f00d87"],["/tags/SpringCloud/index.html","f98aea65044350dbfe8f4c83dd124aa1"],["/tags/SpringMVC/index.html","2c8e4d3d84a242f7617b4c52f9c7475d"],["/tags/Swagger/index.html","bbc9a4bbb173eeddca5b5ddb4bc43f2c"],["/tags/hexo/index.html","2d623b46ef2c69cd578fb509b3aa556c"],["/tags/index.html","d358fcb647ac3595cfd3f47a6e03c51b"],["/tags/jQuery/index.html","fcdee864fe4e971f81109e872e1e1622"],["/tags/java/index.html","02d2bee99c5f25f493c00346361e7bb6"],["/tags/markdown/index.html","cf3e6289e416829d0e865adbbbbb82be"],["/tags/noSQL/index.html","b662b5c79d5e7283aebaf1048f78d1fc"],["/tags/typora/index.html","eb6a74dc6eb4d6b5d8fc28a046e21672"],["/tags/vue/index.html","db7cf4b917ded535f131b3143ec1fb30"],["/tags/享元模式/index.html","923875e4cfb80421b825246dd432fea8"],["/tags/代理模式/index.html","4aba86a515b53c60d05e924147f142f5"],["/tags/内存管理/index.html","bcec2e4135850435439e700e3f55b8e6"],["/tags/分布式/index.html","d8953312da7569b69a3bbeff7164b550"],["/tags/分布式系统/index.html","deafafeff9b96e5a906464e3f5475e5f"],["/tags/前端/index.html","dee98bd7e4aaee389c60d44e43109e9a"],["/tags/前端/page/2/index.html","c6b945955a34dbd6b387a2cec0602b1d"],["/tags/博客/index.html","c9b83ede3dc24e84204a8ac96bb89cb8"],["/tags/后端/index.html","d141fb8c41948b8740800828bbdcefa4"],["/tags/外观模式/index.html","411bccc83866cafcf1737bdc6f1bafa4"],["/tags/容器技术/index.html","4f9b1cc578ef9dee3350183d331a3d97"],["/tags/工厂方法/index.html","68e692f78c891829e5e656a57dd6b459"],["/tags/微服务/index.html","2f52959920d08adad93a9b03c394069f"],["/tags/抽象工厂/index.html","9f26febe48438ed519ecbedb787d6eab"],["/tags/持续集成持续部署/index.html","f657e727b3958db986df280ba1e01fd8"],["/tags/搜索引擎/index.html","773f08ddb5ddbd18f57a22bab552ad85"],["/tags/操作系统/index.html","f552d65d809cddf44d0c63a6716ab9ce"],["/tags/数据库/index.html","51229850adcf1243e08a70a8e48fb842"],["/tags/数据库/page/2/index.html","b9979d46b37ac238a49be1bb757bf399"],["/tags/数据库/page/3/index.html","ed4f71ce0c643129d88b97b678a7e1ad"],["/tags/数据结构与算法/index.html","526806327cccadfe3afdf6b43f044c78"],["/tags/数据结构与算法/page/2/index.html","c1a02ff3855fe09c9f8b610789775575"],["/tags/文件操作/index.html","a4fdd6cd37706b3b4dc9908425fdc277"],["/tags/日志/index.html","c35454e80510919dd58d452944dd5ef6"],["/tags/服务器/index.html","098f816ad271aeebf0de5cbc751518a8"],["/tags/权限认证/index.html","8f794093dbd29168f7d6f1bcf0946dc8"],["/tags/桥接模式/index.html","a12340dd3e2bb8624056685dc6bf86ef"],["/tags/模板方法模式/index.html","1f711415859fba615d0bc276ad3d7b9e"],["/tags/死锁/index.html","3d9b2ee1cee090146392bb9bb8628844"],["/tags/消息队列/index.html","21f84264292fcf75b1c2a3f7d8032d64"],["/tags/版本控制/index.html","7ee2e54d030979e8ea85afc9306bb08e"],["/tags/策略模式/index.html","3878b67014c0f3812d926f0e2fa89271"],["/tags/简单工厂/index.html","edd3ce80894b017e35e922a15631b839"],["/tags/算法/index.html","14121ca2705154db2b5b11cc80536921"],["/tags/组件化/index.html","434f5f991d5f02ced26271402fe64576"],["/tags/缓存/index.html","a394df0c24dae9d8a5a17e90a348379b"],["/tags/缓存/page/2/index.html","4de80e44314fa41d6213f1bdce83ec2f"],["/tags/缓存/page/3/index.html","f9e292745172b0f104210612616b3c37"],["/tags/观察者模式/index.html","076c89ae653bed4e0352acc48e0632c7"],["/tags/计算机网络/index.html","5179f47387d278c8c69d4db80b0db252"],["/tags/设计模式/index.html","c77c0647d6766f9e0b25896c22b8c34c"],["/tags/设计模式/page/2/index.html","ee56275ec08c2a2359132a6545a90d67"],["/tags/进程管理/index.html","87846779fef0cdb18453988e2d07b9bc"],["/tags/适配器模式/index.html","fd30083eed0de6f6e2e49a1a23db47c0"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
