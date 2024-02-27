/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","96934e8be74fa72c70887455dc643ce1"],["/2021/02/22/工具的使用/博客的搭建/index.html","6ec64a3bc8acf4b735dfbb2b7d6fee01"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","3e2f75834cde709883ad35d4e986016d"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","37c7af0d7ed1e1b102e3a8b540dc0ca9"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","97d5c4ecad23c2c5259bc4e3b36ff2c5"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","984512d3bc42b86770c5a9c9da206640"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","bfcdc2813ca41af4042ab14212cfe160"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","9b8418f1ac15e0c3dc2c50353c2ba7bc"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","8fd75235fe01c835989f9a15f6478df1"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","814f098d0cbcbf3aa535809264fa07a4"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","cd0d8a17f88f0fd4c3626b2af08cfe0a"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","236a6b2b59263d22bf80714827b7dd65"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","42c120734d3a936086f89e011cbed842"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","85f3aa3ecdac9b7a67ce43c8ed5023cd"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","f86ed6163f8053a66d9005d21d838dfe"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","da287e624f122b62c2777b6139368c72"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","1a43c0d742214c61a00d60af4793ef86"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","a88a66ea5049a48ce12b0a3b929584b8"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","2c4df344167dd2de2fac36a6ae307f9c"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","f9ce9d87559de69b89dec41dc5364f41"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","1b46db810c328129cab706f0f803fcd5"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","f80406efd8a27997ed20464bb4d4d28e"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","e0b034cfe5a651e1459095ba381914cc"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","fa7f680a4986a5e95ae9d11d72b8e960"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","eb5cee3a97c658817b6ddf9cb6567f36"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","34f96d96230f257836c587223820d086"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","464278ae275f7687a601080932af40c3"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","e5d15015d0bcf3549236b449aa97780c"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","2ea2cea0a8f98f835e2b55d8ae337f98"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","0c8de3004c50bc31e8eb2c6042a3c4c7"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","511c24c09e6e8a8f7a779957c977d7dd"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","5ec012c04fc47d70c4772ffa57e1ee8d"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","bab348ea14e80390fb7c9ec86c20acfc"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","faf5ed2a197da645946935fd46a19d27"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","386f9ef0f16ca707afe17e2b8c928e81"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","0dd85caea1d86d827fd386a9b97248eb"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","e2bb0944a04af7afc9cef41f7644ffc1"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","9dae96279544b3021494ecdb7d192aa4"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","6e6432f910cfeb9b92b4f624d9b6ff5a"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","a779e4262b6929fb0d90ea4900fd1606"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","d0bbdfe2283016e7284e5211531dc638"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","ab686c6bdbff1a5007aaba0156887243"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","12db9fdd3ffeb221a003462ad3c6451a"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","6d7033a276a3d42d78ad018200c38ca4"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","edb8f8db1c5f96db01b8869d864d9987"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","d590f5610c1dc0cf8afe9a097375e654"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","367fc9859a5230a75742539014ba56dc"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","c7deecfa3a81023c4acd9004fab75968"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","d1fcad22d52bf536fbab651ba3bc684c"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","48872a2ce17686176fcf035944d1f2cf"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","93dd61ecf29191227a8843f3a95cd08f"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","629b6de3f42b8e3877ee05f636715c8e"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","95e076076a6b3656184855f0499cec16"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","cad2056aa565e936dde998c1ead77817"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","d5f6baeefd713b23d6d5d9e18f8cd464"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","b593d5fc7ab4ac40bf2607b5f1bb2bbc"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","2899601ea277d1b82c0c596ead326e44"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","eec3f223d7762d5104b7ccff5b1155b0"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","1515df1f9ea310fc5e97ac8611aa4d31"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","2c6a6d6f24feb1b1135d040481e8f4b5"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","e00007c2f26d2a23b4a5573171544921"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","21213d3c92279a51deca72308a79afcf"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","9de7553d296ccdf420e69112463eab3c"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","8a9d1898679745e978a89cf2d4618cce"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","a090c4bfc47ae7f47a2f093e525662b9"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","95eeba3fcaae98cd7d39ed4ed35dad29"],["/2022/08/17/前端/jQuery/index.html","5cc9929526dfd2bf2cdc5b1351dc2a28"],["/2022/08/19/前端/JavaScript/index.html","4def8548a49c28b31278a263332982b2"],["/2022/08/22/前端/Ajax/index.html","31f87f9360269b123079154cc3484a9a"],["/2022/08/23/前端/Promise/index.html","b0f455b74ebd1519ac52743689d8bfe7"],["/2022/08/24/前端/Axios/index.html","f9940200f5ffdb397f498d3591e7bc65"],["/2022/08/25/前端/H5本地存储/index.html","3d62c4a7f3a7c67e77f4c1537bd9ada7"],["/2022/08/26/前端/mock/index.html","e7d5fe8e17cd4de8972e0382960f5bda"],["/2022/08/31/前端/vue/VueJs/index.html","9a2bd839600245404bdbfe1be76180be"],["/2022/09/01/前端/vue/vue组件化/index.html","90caf35f618b5e5661e1c94cd452d4a5"],["/2022/09/04/前端/vue/VueCLI/index.html","d8eb782bcaccb45537c17a11c51f781f"],["/2022/09/07/前端/vue/vue实现动画/index.html","3c6359d794d0cb84d990f342095b8ff5"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","3868a2d5f77dd494291c547833a69d8b"],["/2022/09/10/前端/vue/Vue异步请求/index.html","b1cc053926eba30a5ccb2882b9d2467e"],["/2022/09/11/前端/vue/vue-Router/index.html","8995c7c14bb9032b6d5adc839d008772"],["/2022/09/13/前端/vue/Vuex/index.html","966bf1e60edaf4f08b2e6416e73f8bb9"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","686d5f31dd87a083e380755c2686b6a1"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","3ddd41f0ca09ead837dc120c56df81e7"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","5e1684b58632a9d0f71c8b320be53d62"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","310c419b08bcda8ef64dcb053a7c64ea"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","b22cdab9e88580c987c6ca3c9d980daa"],["/2022/09/28/DevOps/Linux/Linux/index.html","3d7c52f77959a03a9bf3dfddf906ace6"],["/2022/10/02/中间件/Redis/redis基础/index.html","2786865e2ee02b906441050dd7646000"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","9204b08f75d87cbed01a4510bd7e41f7"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","34edb5dc9a0847e0366c2e632bd21c89"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","3d37fb13832a75bf941930993d78fc18"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","a25a15e559a1f1dc3f630c686d7fa341"],["/2022/10/17/中间件/Redis/Redis集群/index.html","f7b54a9b920ddc3463feb45555ba5618"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","ac319f04ac22345ec8936ce4eab581cc"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","2f6041da06397443fec3938e19bc6066"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","48f3b043a4d48b291f3fc7c17a344d9a"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","1240d4e5db128fe41cac9ac1af291aa7"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","e2702dd48f2a5972cb55239b3fda2f26"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","c9642ead18ec8011ae945458fac59999"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","c636f9aff15f8a1dc3eda3adc0241c7c"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","3e9f6a8c187cf9869db9dbed0b0401f7"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","fa83138b520b120264b9bc8cb46b13b5"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","495bc5263c31b290956e4da68abf801a"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","e5b3a1158fb5d55d708f7375c85196e0"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","33e0fea9239683a7549eaa4d3adc17c1"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","008e779001c481e92c0f6da24623d932"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","e111bbcd265f0af816be82b4eff786cd"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","5f6e028d5602e3459976639248f8c110"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","62d3fbedcc6f57c719a1779e394ae784"],["/2023/03/10/DevOps/CICD/CICD/index.html","1f56707ded4d8fd22058b2e2ced372cd"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","2fddf43d4c93a88be029ba1593183f70"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","070698b9a3eacca59bd3c9ad900a6654"],["/2023/03/13/Java/NIO/NIO/index.html","60a0c9af7fe4fba8414dbe805568d902"],["/2023/03/14/中间件/Netty/Netty/index.html","e1b51c508eed1354c8c57457fdf4fbff"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","39b8c8a84d243c9519191fb1d9f7700d"],["/2023/03/17/系统设计/分布式系统认证/index.html","d911152f28ae27084eb91da0212a5450"],["/2023/03/19/Java/JVM/JVM概述/index.html","508acd1307fc1735272e80ec05e6d690"],["/2023/03/23/Java/JVM/类的加载过程/index.html","85c5ddb302da5a52a7eccb678c5ac68a"],["/2023/03/28/Java/JVM/对象的实例化/index.html","33e84b0c06fe6b20d7c5b8c60747e851"],["/2023/04/01/Java/JVM/运行时数据区/index.html","ba7c1132709314a7afc0fc1517257792"],["/2023/04/04/Java/JVM/执行引擎/index.html","2a5bf708f191c2dc5197f0680f400baa"],["/2023/04/06/Java/JVM/对象引用/index.html","105026ec810a4050c842aeae597fdf2a"],["/2023/04/09/Java/JVM/垃圾回收/index.html","d266183ac53e45d85681718e98856308"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","b438d3a258cf76da570b27098a0676f9"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","d9ffbefcb63a6ced34219be5ad6c8421"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","890b7aa4afe90c62b45fec25b98bf04f"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","0206465ca6080a0ada821b0e1f894466"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","46369d3e67e7f203652fd779a29e130a"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","8561b022cfce2d96536db96ca771c978"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","87b7b9cbb2b6231b04e795816f1b2889"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","6536926de82092ae2273be61533c0c66"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","15987f9ad0a4abc222af750cf19fa6b0"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","f3884160d71c687a2ca4b5d0649b1dcd"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","40a6fdbf7e8a78cb242431e6c5475bec"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","5dd07bed569184a0000b2bf97ff3f4aa"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","eac989e15a1185126a88a183dfb430c2"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","4d5f05545895e089b8b583e59fd95381"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","af6d88fa51927de561a34c422eacf4cc"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","41fb043cc00cd3f132e6db0b8c3a5ffe"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","3c097301358f4a3d86c38fb39c3c6c88"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","18b6a10ced6cd56e4244f0abc6d9e41c"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","5048f096d465d8feb65b11dd107583be"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","a6982dfedd0fbaa2cf9220bb63cf1c11"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","903e3f113a1ffefbb91dc54cde846e65"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","e2523c0d228cdfb5afaf6c828fa05649"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","cdb3fec4e59b6e0c1ee2d5352aa26a86"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","12645803e0c828ddc003343cd623df03"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","fa274616179940a925d3dd8418cbbfbd"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","31f5df659ff70438719011d8f228c7d5"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","d6bad9d9aebdfade6720ea425a44c838"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","8d32d67ca605d836770d591703f620e4"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","eb9a3770418149c4310840aa03b0f545"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","21a2ce0196f982ab9abcf5465f409d7e"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","395867ab83ed276bd253cc4c48325243"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","ab15b06bb94deb3f2c3981a73808f1b7"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","9c36085856361f9769a358345f02f190"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","186a56b5aeb1a313665fbae69928c761"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","89dc38fbb9ab79b0e57c200c27c97fb1"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","73564a69c8245360b5e0d0e18aa1f54a"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","3b2b7be68af66358393670f4606432df"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","56de0f958152b65dc7912503c92a98a8"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","ace4099427a9615eef1564310f9045af"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","9c5b6aa50934f40748d936df40cde7ba"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","7d066487012bf675b32fab64bb240597"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","f89b446c1f58cb1a19c693baa0461ae7"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","cc9321598ee99e6ce78658e1f7903e74"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","d3de13e32758c0f81b64a33e52759c98"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","1b549e9ab9167fe561b9095faaa3980a"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","46ffb24ec7443b1879809935f5546406"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","346c9da0f83b7a5f08b7fce9ef989a21"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","0f283e5456ef958e67719982f5d751ae"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","b3abf01b01823c40d415967247765fd4"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","073ca318621b4661dd2c1cbfe8f1d403"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","e3bb27f1d855971869f057916a73afbd"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","f6440192518f4426a7c6d383b533f5a9"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","cbb9a3726c0fe5c1caa2485995dd375c"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","af9f0f1a4cf1d50a4a1cab1e2bb6dd62"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","b0dcac9860670e6f382e5112ed614073"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","f20905b455ff388ef50a6f5148541550"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","dcab54cbd84642ed7bf5ede4fc6e9322"],["/2023/09/04/中间件/Redis/Redis事务/index.html","c177c3c3d3f85a769c9bb6ce88966b69"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","9d1f6bd1dc2007fede509b7a120b3d32"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","ddfbd8502b43ab49fa05113c166e3f26"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","b516cf76071e37aaca4886c6895dcea3"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","835f44755e423c8e34bfe672e4cecfcc"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","843af4d0cdf59133cd986c8bef376fef"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","b22389041de4b5a73d9cdfd0121726fb"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","91ece81efbedb9ebbe4020f884b4ce58"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","e4c7e38f108dadda989cf34a6840221e"],["/2023/09/22/Java/NIO/零拷贝/index.html","1fbfa4a4547de124a676a8d82f159705"],["/2023/09/24/系统设计/JWT认证/index.html","9a42c35cea148cb627f8263ca8f19813"],["/2023/09/26/Java/NIO/Reactor模式/index.html","aae92e22ff306d4027544ef41d3392c1"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","b1583ea2f77097af3a728ed703513799"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","34e15cc6b70a58eef2898fa5925795b7"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","0a3a25afc5de9c8ed1aaac91be747a3f"],["/2023/10/09/Java/并发编程/共享问题/index.html","a082ba7efc975f9b58f865c8edd8613b"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","22cfa42650d9c86c43a1770b770c2b4d"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","caba908bebb35e5f992efffbc95bbffd"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","2c8daee628ccc2fbc8d938e721eb2031"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","89f3377f9605d23e40c1950be6e55435"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","93c9eeb31aa590ca8771eda410cc4d6b"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","8f5b22829b776ae5a480885a1fbe86f7"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","46d4acd5aac9866b88700cdfd33f9b81"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","f8e9a5c0442eb4489af2b5ad01cf1c7d"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","18f7c9b5f6be4a315079d45582ceca69"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","016ec063c3fc922e11e391dd00e46912"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","a15f5221281b7e76c4fd38bfa0ebf9e5"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","715dcb728b473112aa734a6c8503ac9d"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","0831d68d071028ae394f7366fb4cac2d"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","a260b1fdeeaa506a1c2ede4a264adbb5"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","bd6dd5832df1f64b43a95fdcb53d23c5"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","e103963595f65a5edb1058eccc9d85e9"],["/2023/12/05/系统设计/开源协议/index.html","774c50deebbb00e1832cc126b53801fc"],["/2023/12/09/MockMvc/index.html","2d290e570d29ea63e016550985dd0682"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","73e0bf2f66c3f56512107375d7cda83e"],["/2023/12/19/MySQL读写分离/index.html","8a0b40443df323b15d616963e16f9fba"],["/2023/12/22/MySQL分库分表/index.html","7cf08b6eaae258c8dac4fe2d31424064"],["/2023/12/27/利用NoSQL优化数据库/index.html","b54def62f296caaf670cb1ce3fe0af93"],["/2024/01/06/缓存概述/index.html","1bd15ee1d74661e398cd3421f999d3a5"],["/2024/01/11/缓存的读写策略/index.html","8952c24327f20dd05b8c4a0b74c6e50c"],["/2024/01/14/CDN静态资源加速/index.html","85bb97707c99cedff0d714fd4e69486b"],["/2024/01/18/消息队列延迟问题/index.html","26efc9e2c771c90c4871afbc24069e29"],["/2024/01/22/高并发系统分布式服务方案/index.html","e422cb96aba20481117afcc032eb7ef3"],["/2024/01/26/dubbo/index.html","69dbf28b6ee346f2906ae0c394e1c19e"],["/2024/01/30/微服务基础/index.html","fe35dc95963155923525bac6afe27853"],["/2024/02/02/监控微服务调用/index.html","62c27dbe4e33b7ffa91951a3ab50a97d"],["/2024/02/13/微服务治理的手段/index.html","756803b678dc3fd0213cfb5eb26d4380"],["/2024/02/18/微服务治理的手段-二/index.html","82bca68516bc9ebfef678230a7456c53"],["/2024/02/22/计算机基础/操作系统/epoll、poll-和-select/index.html","74398d620fe108ed0b61a462b6fe227c"],["/2024/02/26/Spring事务/index.html","a600f0756c8878aab637a5c6e064b930"],["/404.html","a09cdc1b87cd245b0a5cc81af07b9358"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","061183f3c8c6be6d966eba5533981188"],["/archives/2021/02/index.html","72dadbbf7cca281e596838899cbb99c6"],["/archives/2021/03/index.html","c9f2f8622f93c6fac76c8cfd7ec97d4e"],["/archives/2021/03/page/2/index.html","36dc15adfff9063c987576caeeda12a7"],["/archives/2021/03/page/3/index.html","12876b127c8d1786d1043b19b3d5e6ce"],["/archives/2021/04/index.html","b961abf71d79c0057a81e040c3f71430"],["/archives/2021/04/page/2/index.html","fe561de238a6006b3b9909e4ed786cee"],["/archives/2021/05/index.html","fae1044157deae50cbfafa53fdb4e931"],["/archives/2021/index.html","7d6bddba101129b2ed53b07879b18447"],["/archives/2021/page/2/index.html","62e51aa20bbecfbda83e1224236985ca"],["/archives/2021/page/3/index.html","4f7f15d316e7f0c4751f806841db5d34"],["/archives/2021/page/4/index.html","81e2fcf5ee1fffc45cafde00cdd22ebb"],["/archives/2021/page/5/index.html","0e4d3cd3802c0487aab339c5f368d092"],["/archives/2021/page/6/index.html","0520e12a57fa68c9071f0cb1c535b4f3"],["/archives/2021/page/7/index.html","de97ec41d126032980040bce3320de0f"],["/archives/2022/01/index.html","bbf21f91313a6f640eeb36317e3ee355"],["/archives/2022/04/index.html","d94c708e372f3d85c224a5c574f1c2e3"],["/archives/2022/08/index.html","8cc08aeb1b3fe4ff175715a7f6517b76"],["/archives/2022/09/index.html","db5a72460c9f63b540a596cc68e076ce"],["/archives/2022/09/page/2/index.html","4cb06006686583568dac1f518706b614"],["/archives/2022/10/index.html","1fe98ecd7037b77bf5cc452edee6cd5d"],["/archives/2022/11/index.html","ff6f70237b570122c2f0b4e55a9b971f"],["/archives/2022/12/index.html","e989025d58aa7556a49303ed8af43758"],["/archives/2022/index.html","825c240f1b2e3b875fe1aedaecd00683"],["/archives/2022/page/2/index.html","b56d3b301d3d3214e938708427c8e478"],["/archives/2022/page/3/index.html","1782995d938fa82ba4aaf995483b1c7f"],["/archives/2022/page/4/index.html","b75fdcf1ce9b0fdc5f24c0f3e3025f71"],["/archives/2022/page/5/index.html","8254f749e2d1c0d7fcc83236e8e07718"],["/archives/2023/01/index.html","7b3e266a36eff368c01c349070d70fe9"],["/archives/2023/02/index.html","8640c163da5e0ab4e5cd1387184402f1"],["/archives/2023/03/index.html","18bd0359dad39858266a260d2d7b3052"],["/archives/2023/04/index.html","497483333eb2c89b981cca7cce60b10a"],["/archives/2023/04/page/2/index.html","185c9d8e52492fa132ba7544c2da2e2c"],["/archives/2023/05/index.html","0064fd14e710ef9ac4d91e08cefe9377"],["/archives/2023/06/index.html","d5d6987018f2a1f319932d380ce1771d"],["/archives/2023/06/page/2/index.html","20a1bac415f8fb3551f2e8427276616e"],["/archives/2023/07/index.html","efedf3a456b9d83d612b2ef74beffcdb"],["/archives/2023/07/page/2/index.html","02ffc6eeea33c8dfbdb164529c35ad54"],["/archives/2023/08/index.html","610963bb3a927d4ade39843664dbbcdb"],["/archives/2023/08/page/2/index.html","108fe50cce86e82ebe5707b6751c8f56"],["/archives/2023/09/index.html","0f6973ae0364e85ba3838b746f79e2be"],["/archives/2023/09/page/2/index.html","cb762bb5771443e20dd3051fea6adeef"],["/archives/2023/10/index.html","d53de291dbe8aceef5d07f8f2eac23a0"],["/archives/2023/11/index.html","666787f7a393038b0022d790c4dd7785"],["/archives/2023/12/index.html","6a234d89faf5fd26c9f1f4bdde2ad7c1"],["/archives/2023/index.html","fbfd304c237b5bd2c61257d6a74cbfb0"],["/archives/2023/page/10/index.html","b54b51d7897bdfceb3d31eafee1f4ec1"],["/archives/2023/page/11/index.html","1cc40c313b00aaf59e8fab7f3cc8e918"],["/archives/2023/page/12/index.html","1e52f31064b9d4bac547b5d785da1bda"],["/archives/2023/page/2/index.html","ddb42c506a929d799257a6abf4ea1528"],["/archives/2023/page/3/index.html","fd22206e20d196b3f0d67085708a61bb"],["/archives/2023/page/4/index.html","06626090e3550995d1b75fbdda0a2a87"],["/archives/2023/page/5/index.html","7a601a0432cb80eb602b5fe884e5b3f6"],["/archives/2023/page/6/index.html","f2467eaad7a2b254bdf892e1d5d88329"],["/archives/2023/page/7/index.html","381e43423cf304ff78aa24116961e84f"],["/archives/2023/page/8/index.html","32fe2803941fe980281f426dc0873d3f"],["/archives/2023/page/9/index.html","f51e8d0926af0287008434b564df574e"],["/archives/2024/01/index.html","ace975de4625bb6ce8dfb79effc86e71"],["/archives/2024/02/index.html","d515ba6289ce93eab2221aeffb52acad"],["/archives/2024/index.html","d256134b09a5d51a87c25b0dd3a98880"],["/archives/2024/page/2/index.html","3031a6e82a8de7ee887ecb64393042c8"],["/archives/index.html","33774bc3073e9ee488f095c808fa6540"],["/archives/page/10/index.html","9fcd650b3a73ea79c5ba91ec8753cfe1"],["/archives/page/11/index.html","c2b3d666e4bef5e492dc7d2c351e1ea8"],["/archives/page/12/index.html","d1676a474c9011f8018db4db9f4e65e3"],["/archives/page/13/index.html","107d469eb90c6a3641d1e8e0ba9d58cc"],["/archives/page/14/index.html","8bbc9afb26e73a5ea8c29bcfb0c97715"],["/archives/page/15/index.html","79fa77974bd5d9f730c0cd6a68834767"],["/archives/page/16/index.html","e15d90bc00bab81383c8ef9f72a27b94"],["/archives/page/17/index.html","f62e8785f048eddb492a7679c81e8211"],["/archives/page/18/index.html","9bec5f3e8d8b0a2147c517a06d0ce4e9"],["/archives/page/19/index.html","56a165b64da25012658ba1f88592ab48"],["/archives/page/2/index.html","07f946290ad2b108f8364d45414e9388"],["/archives/page/20/index.html","25aa4730948500f1ded693af8397e85d"],["/archives/page/21/index.html","302d41390eba54a6d776d03f7ad0252f"],["/archives/page/22/index.html","04acb7be224593a4d4e52c72effc578d"],["/archives/page/23/index.html","b62a7018842c234efdfae506835fcdef"],["/archives/page/3/index.html","554c125502f2e25c5d268da364419f78"],["/archives/page/4/index.html","3df0da9eab0c53a1a288e588dee6d520"],["/archives/page/5/index.html","7cb8b98fba26112f9591477518842a0b"],["/archives/page/6/index.html","b31226648c6a2384d5ac32f57be79757"],["/archives/page/7/index.html","0bd4d4fa8776b4e232be2c4339f8f61e"],["/archives/page/8/index.html","d12d8c15ee4a6e4d6df51aa3eafdf830"],["/archives/page/9/index.html","1877d7d6848899170e6182673cef07af"],["/categories/Devops/CICD/index.html","83b2097cbeb4f87cb14a11a71bc9a315"],["/categories/Devops/Linux/index.html","1ef5e4afc1e33d1c1b291143724c4dd3"],["/categories/Devops/index.html","fed3b0c487a47545112e027c8923129d"],["/categories/Java/JVM/index.html","5b54c843320bdc3f9164f55808b282a1"],["/categories/Java/Java基础/index.html","2afead87e742d30c7f3e179ba9a557a1"],["/categories/Java/NIO/index.html","6046325b19fe696ccfa2801f6606ec6d"],["/categories/Java/NIO/原生NIO/index.html","ce256f1d71b416e3b5655d0186be4918"],["/categories/Java/NIO/文件操作工具类/index.html","fbfee1ef31d64f22289c21c69082ba01"],["/categories/Java/index.html","e8ae3eb921236fae477cc4b4d4b1d29a"],["/categories/Java/page/2/index.html","b24901319529fa776a5b8cd1a023b4d2"],["/categories/Java/并发编程/index.html","62479abdab9daef3ec416fe829a1b96b"],["/categories/Spring全家桶/Spring-Security/index.html","c8c11c8e2359829f8d811e3c9d3c3a70"],["/categories/Spring全家桶/Spring/index.html","287298ce396f377196401138e8332ca2"],["/categories/Spring全家桶/SpringBoot/index.html","8e27d34e408e8df6a8284e404b27ece7"],["/categories/Spring全家桶/SpringCloud/index.html","124f8d72a8e4d306deae4afbe13528e7"],["/categories/Spring全家桶/SpringMVC/index.html","f5739d6bc92411060908ad2c194e1dc5"],["/categories/Spring全家桶/index.html","c6f44a43e9b09c81be3a444c0d7002bb"],["/categories/Spring全家桶/page/2/index.html","419cfae775025b80f6e765dd8e002a8b"],["/categories/index.html","8887164389f2d6f8f2d828fcf301d185"],["/categories/中间件/Dubbo/index.html","b0ce3761a362bfad29adf0560e89b767"],["/categories/中间件/ElasticSearch/index.html","a20c856d4f516a4529eb888fd05cd908"],["/categories/中间件/Netty/index.html","283592d25400889f94338bd95d75c976"],["/categories/中间件/Redis/index.html","1aaea8de0d588700ef5e22941a2a05cd"],["/categories/中间件/Redis/page/2/index.html","e38e9bcb67dbe3c0e29364bfb2da4023"],["/categories/中间件/Redis/page/3/index.html","7b6fd8ccfb843b720e84e68cd8d5a40e"],["/categories/中间件/index.html","2c69df05fd704bb2012cc40d29423aab"],["/categories/中间件/page/2/index.html","61bd5d4717aec99798f781eccab9f1a8"],["/categories/中间件/page/3/index.html","c9b447370e28de11c52aca19f7aa24c7"],["/categories/中间件/page/4/index.html","0121f9f9aaee6dbb732b889d0f5fca68"],["/categories/中间件/消息队列/RabbitMQ/index.html","fec5f60fb961ea97fe3f55f32a8d0241"],["/categories/中间件/消息队列/index.html","1b1b6871e62ce3562efe380fb35e03f6"],["/categories/前端/Mock/index.html","09595d65de38c7878bf7fe55bd0889fe"],["/categories/前端/Promise/index.html","9cafcfc2541965197f831372e2fc0a74"],["/categories/前端/Vue/index.html","df4631905ace876ce0fa3a76a4f5109e"],["/categories/前端/index.html","60d50537f57547c7f2728b32fde99a9d"],["/categories/前端/jQuery/index.html","fccb03cdae307f2c581a0344822c20fb"],["/categories/前端/page/2/index.html","d625e347dad2672ae364376d979ab5e2"],["/categories/前端/原生基础/index.html","74c932f6979fa24027f68adecf27fe1f"],["/categories/前端/异步通信/index.html","82c8ac8314029fb1cd6c1f0284c68672"],["/categories/工具使用/Git/index.html","f3eb8771b72d32d32f19d8c3495861d6"],["/categories/工具使用/index.html","241f3827afcf8bc5f3027389ea9edddd"],["/categories/工具使用/markdown/index.html","cd0a42c63b4921c8d5183f95f7fd2759"],["/categories/工具的使用/Docker/index.html","46a3a20c60214d110b6d013cef9afc81"],["/categories/工具的使用/Nginx/index.html","e04ca036aee7867ba0923062ec45c159"],["/categories/工具的使用/Swagger/index.html","1adeb7582a576c48b56172fa2a521ccb"],["/categories/工具的使用/index.html","54cbf87bc6d3c33d2c01a85103b16a76"],["/categories/工具的使用/博客搭建/index.html","27979e26a008b6e6ff508ef3f40910cb"],["/categories/数据库/MongoDB/index.html","d4665d27af37772c43300b8119d3bba9"],["/categories/数据库/MySQL/index.html","03da832bda9b7e8821ef4dde341882ee"],["/categories/数据库/MySQL/page/2/index.html","db162b4163bf35e44bec72794931f124"],["/categories/数据库/MySQL/page/3/index.html","b5868b251b7054f4aa80ca4a35163845"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","2e45db1876fbb1a29147167b4eb5ef7e"],["/categories/数据库/ORM持久层框架/index.html","43bf9791b039d98f8f51f56a07974a2e"],["/categories/数据库/index.html","176af30c9118d5e4ec82977b51a809d6"],["/categories/数据库/page/2/index.html","d98760ce7bd11d615d3b3c6700615abe"],["/categories/数据库/page/3/index.html","a621cf86972b8fe2c9949ca3030aa0b6"],["/categories/系统设计/DDD领域模型/index.html","818ed2b127e35d677fc4d027de4e5a3f"],["/categories/系统设计/index.html","b6e8d51f7c3824ab4b80bd2d3ed8cc8b"],["/categories/系统设计/page/2/index.html","9c740b16e78ae606bc3809f975fd1b38"],["/categories/系统设计/page/3/index.html","803fedc60133d6665cfe8cd757c01571"],["/categories/系统设计/page/4/index.html","5efab9c1616976a4f9917f18ca59f65d"],["/categories/系统设计/page/5/index.html","8c31aa6434986ff3256f45174a117aab"],["/categories/系统设计/分布式权限认证/index.html","e06f2c69353a1e72d1190442fd4df3d8"],["/categories/系统设计/分布式系统/index.html","7fd55b0c38dd02cf7f209358f7b3e437"],["/categories/系统设计/分布式系统/page/2/index.html","2477b6abde31028970871c18aa0bf2ed"],["/categories/系统设计/分布式系统/page/3/index.html","6ebd3783807d798ff297599f9b5ad441"],["/categories/系统设计/微服务/index.html","dbfee71a51bb59d6b0b4980c6d6614b5"],["/categories/系统设计/数据库优化/index.html","d1119693735bd147addcc1fe9d9855a4"],["/categories/系统设计/设计模式/index.html","42278d85fcf54a0aaba4f9973aaf7b5f"],["/categories/系统设计/设计模式/page/2/index.html","c559f4e28fd09dfa07253a3b59922bde"],["/categories/计算机基础/index.html","72efa3c4bf311429992f836a68118b81"],["/categories/计算机基础/page/2/index.html","32cea0ff708ddc8447fb9a7d57ab02ef"],["/categories/计算机基础/page/3/index.html","d43ee66f4143e46499b054a1911f3f20"],["/categories/计算机基础/page/4/index.html","4bec6f9837ea58cde1de0a7130a9af8d"],["/categories/计算机基础/page/5/index.html","9a7a08b49c8a24af02ad133a8456a474"],["/categories/计算机基础/page/6/index.html","944fe7996e79853ed33435925527f644"],["/categories/计算机基础/操作系统/index.html","3bed4fa6b4b9d36fbfcd00f4887f1345"],["/categories/计算机基础/数据结构与算法/index.html","ec8fbeec6ba5c9a60136b039a89e619c"],["/categories/计算机基础/数据结构与算法/page/2/index.html","adbce28fa26805f5e29340537d4c19f9"],["/categories/计算机基础/数据结构与算法/page/3/index.html","9f4f5cbcb384b7d2589300f626579d9b"],["/categories/计算机基础/数据结构与算法/page/4/index.html","780f709b54631cf27a6db0ab0979edba"],["/categories/计算机基础/数据结构与算法/page/5/index.html","76fc84b8ddd5945a8e6c7cfff00ba845"],["/categories/计算机基础/计算机网络/index.html","6c99067e43c912898ad1f01d2569e1a6"],["/css/index.css","2af5ea34362e0b34f799106b2659ad50"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","888df736c9951eceb2963285c4f1939b"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","5a9c7ab89770ad62f64ad57dbc2c5fca"],["/messageboard/index.html","17b9130b5cd45ad0cff3b585a2ed7620"],["/page/10/index.html","08ce9623404ab53669851cc2218b142e"],["/page/11/index.html","b347f0d81dd31224c1a419d0ed753745"],["/page/12/index.html","6f345011fcc832de8e41382f641a79b0"],["/page/13/index.html","a044c932f2deab1269b47c7ee937ab35"],["/page/14/index.html","c38f6c75cb50095325096e347362227c"],["/page/15/index.html","0977c5c0d0a904708a1a98052ba59b0b"],["/page/16/index.html","f6949b478607925bd67877a13e308a3b"],["/page/17/index.html","f65acdf14571dddf3ab0e79966e7bbfe"],["/page/18/index.html","f8659309de33a85450aa1633cd7d1cfa"],["/page/19/index.html","3a217be237424a6f1bfd329bda28314c"],["/page/2/index.html","a7cf443f7f246a678724619ea1136d46"],["/page/20/index.html","f2448fb95eb2cee95eb726e2c1a55696"],["/page/21/index.html","5843da90d1c1a2a9119634848ebaaac9"],["/page/22/index.html","f18174c9cee6db6db9b3bf2045108768"],["/page/23/index.html","585775b2f5a3cf852479477e94b80350"],["/page/3/index.html","17b40ba310d6c57e9d9ac460e6234e73"],["/page/4/index.html","80fbe324befe9d13fd98f8c13b465235"],["/page/5/index.html","f346fa8ef59703c5b86b07555c56340c"],["/page/6/index.html","983aec121f7cf8c213885aab2de104d7"],["/page/7/index.html","db279b99e56c9a5f2542b6f1ee941fbc"],["/page/8/index.html","d5877615b97e5db412bca593c66c22a3"],["/page/9/index.html","3092b75a503e7436658b30fff8e12ccf"],["/sw-register.js","b1ce147164a09cda4c36a56581438587"],["/tags/Ajax/index.html","08a378eea291efaa34e295f0f8bb188c"],["/tags/Axios/index.html","04c6b140b5f5d26f394633778642148a"],["/tags/BASE理论/index.html","9969042d8871abd133ec33936c735168"],["/tags/CAP定理/index.html","59232ed9a260de7d07099a5c9f5cebe8"],["/tags/CICD/index.html","f5cbefc67b5b1876e33e0b76226c05d4"],["/tags/DDD领域模型/index.html","0d80f40ddd6196995d683fbc570283ff"],["/tags/Docker/index.html","248f27277bc170afb182d4a69051aa4f"],["/tags/Dubbo/index.html","8f1290cbd6c7cc8323c047258f47a97f"],["/tags/ELK/index.html","aca0a3158ff2018a9974d5e52999da0e"],["/tags/ElasticSearch/index.html","3f2d8c01924dce3c080ba3e333a085cd"],["/tags/Git/index.html","d6c9c93a354f9b60e05b7d5d4a9307ec"],["/tags/H5/index.html","dad9be5bfd501f21397cc6a9b939a172"],["/tags/JVM/index.html","96a76af990eeb818379abbab144cd9a8"],["/tags/JVM内存模型/index.html","b268675d544148e7a670d89ab1986fcb"],["/tags/JVM执行引擎/index.html","2a1aa4998b14e8847a16a86fa3bb54ab"],["/tags/JavaScript/index.html","b5650dca6c2c5dcad2c14fb46800deee"],["/tags/Java内存模型/index.html","541332b62ae40117e08cc2c28af7412f"],["/tags/Java进程线程/index.html","944fa78210d9bb56dd583351bfc1ee81"],["/tags/Kibana/index.html","c0ec0bdb4c14165e2068177b19244d53"],["/tags/LeetCode/index.html","0b4a9f944c363032c3fc9d0dde8faa24"],["/tags/LeetCode/page/2/index.html","17de3e64b71c22e4694591bef1e9e1f3"],["/tags/LeetCode/page/3/index.html","8ccda60a6e59b82a3e035fb8552713e0"],["/tags/Linux/index.html","55e2cab612ec39b34009636267ece4ab"],["/tags/Logstash/index.html","40e52821a61109bec43b808ec428435d"],["/tags/Mock/index.html","85d6a01728e65750ed3c10c7c0ee3fb3"],["/tags/MockMvc/index.html","b0c1a4cf9c9f7d9d1b587a4df3f16292"],["/tags/MongoDB/index.html","7c0616587d361856a6aab094ce2cb23e"],["/tags/MySQL-事务/index.html","c3db46305dcbe7297735bf95e8a5910e"],["/tags/MySQL-数据类型/index.html","41b0005908581bcd0462801409af256c"],["/tags/MySQL-日志/index.html","4561496c0feda7911d5aa41c22172b93"],["/tags/MySQL-索引/index.html","d3235760accf6eb6865d3d331a7cf23b"],["/tags/MySQL-锁/index.html","f4de4cc2c6d082652ad2994a370eec99"],["/tags/MySQL/index.html","ec94b9343acf6a15e8497a62aa3efb40"],["/tags/MySQL/page/2/index.html","ea707bd10e7ae47a253c5bfa779a1ab6"],["/tags/MySQL分库分表/index.html","9b930444ceb2fde99c1161500dacb439"],["/tags/MySQL读写分离/index.html","505199e030a9141079ce30f6606625d4"],["/tags/Mybatis/index.html","c4c032f2a594fe8e15110ead94eaeadb"],["/tags/MybatisPlus/index.html","52b3a64671c59311ab3afad384b1c3d7"],["/tags/NIO/index.html","98b01524f4b18b8091e2af7ae9fc6853"],["/tags/Netty/index.html","a09f6884e3d8aa6fd24e018429be46b3"],["/tags/Nginx/index.html","1aab77eb5920f4d4f6133f0cb84bf79d"],["/tags/NoSQL/index.html","3cc9da9995f101297f21dfe65d782fca"],["/tags/Promise/index.html","07c37e56e0dc5686ee475cc18e708a03"],["/tags/RabbitMQ/index.html","82bcc82e41173d36ad42492c539ef143"],["/tags/Redis/index.html","600b3f3b2bfd2b78548119a5b139cae1"],["/tags/Redis/page/2/index.html","b2f3a10b1e84254262e9928b84665ec1"],["/tags/Redis/page/3/index.html","da7a24e767504a138317060c82ee375d"],["/tags/SSM/index.html","895ac16202aca5163ffac0b1cba95f9f"],["/tags/Spring-Security/index.html","1f433183df94f3c396b6dd81e2b1970c"],["/tags/Spring/index.html","952929bbd9493e197c82891418ae5f06"],["/tags/SpringBoot/index.html","1bd7fbac3f60f4e79896dfd0172a7dbb"],["/tags/SpringCloud/index.html","aea5f4897891020407e037e7f4795c40"],["/tags/SpringMVC/index.html","e370cfe44a270f153c24d166282470d7"],["/tags/Spring事务/index.html","9077a72fd0eb877a7c652f8593200a15"],["/tags/Swagger/index.html","f245d5ba560f82d618283cc617de9de4"],["/tags/hexo/index.html","63375644cc534dde9f69bf88e91b4445"],["/tags/index.html","8cd31b200990b09a0a30813cba0a90df"],["/tags/jQuery/index.html","a67724d3362887b11fa9b6af442cdbf5"],["/tags/java/index.html","ef09e20b54790d2e68e0912f7d722970"],["/tags/markdown/index.html","6440979ff627faf06bbdc181bf668214"],["/tags/rpc框架/index.html","9b398737e62dec7c43cf9129b34c0c73"],["/tags/typora/index.html","9794f3701e186197c50e97e40461f586"],["/tags/vue/index.html","e7f1736f7dad69b7930d150b0c0ce592"],["/tags/享元模式/index.html","06d1b95e8e35f968668e029465a0e510"],["/tags/代理模式/index.html","bdd2f1c4d345f06e73ad9bc1418a8c0b"],["/tags/内存管理/index.html","9acd76ba94cd7a3917c47ac8e501613f"],["/tags/分布式/index.html","de75a204718a61a6ee3683926c011c6d"],["/tags/分布式一致性算法/index.html","26f825ae4500743bf67fe1410e1b552c"],["/tags/分布式系统/index.html","997a67f65517138f0d7e3783268dc470"],["/tags/分布式系统/page/2/index.html","901758e4506cc7a56b04bc8112fa37d6"],["/tags/分布式系统/page/3/index.html","3f39275cfe4f76afa2d4efa8e226833a"],["/tags/前端/index.html","79f6be1c1d3db0cb1aa67c683793d31a"],["/tags/前端/page/2/index.html","79cfe809c54cae11e6de85959f6f9ccf"],["/tags/动态通知/index.html","7ce3a0c59247febd461b866960d07cfa"],["/tags/博客/index.html","bc812e3a6d4aef56e85ef968ebd91112"],["/tags/后端/index.html","a0b3b896d5ff5479ab22e80e5504670c"],["/tags/外观模式/index.html","7bc99a05ae96903bd8eb85f72b588d35"],["/tags/多级缓存架构/index.html","8dbb53da502db8910df564a9da31993c"],["/tags/多线程设计模式/index.html","b620d00009251c39b725a80fccfcc718"],["/tags/多路复用/index.html","cd5a126e0f9f261d1394fced619c43df"],["/tags/容器技术/index.html","8a097ce6ffca25d590084650d0a87237"],["/tags/工厂方法/index.html","30c419761fc42047b97f68c54bc6dcc7"],["/tags/开源协议/index.html","709245e0eeb9b312f05100f73616eafe"],["/tags/异构同步/index.html","637836b2e18c54bc91a16664a3a5b0c8"],["/tags/微服务/index.html","885620f963454ed15dd35cc834772b48"],["/tags/微服务基础/index.html","ad2f87f9389b335f5e6ed22496c39906"],["/tags/抽象工厂/index.html","c88f34e5d12c3d5a3e5a5e3489ca19a8"],["/tags/持续集成持续部署/index.html","e0edfa44d1ea165fe82c77f9d7add67e"],["/tags/接口幂等性/index.html","facaf1e66a48d548666f37e7a9348bae"],["/tags/搜索引擎/index.html","93e652ca875f461369ee647129a0e1dd"],["/tags/操作系统/index.html","875f6ce2bdcf1fb91ef45918a1277fc2"],["/tags/数据库/index.html","f29c521c5a492572d77e8aa8feb9f06d"],["/tags/数据库/page/2/index.html","60f3d7c5faf75cb67b7650548eea1595"],["/tags/数据库/page/3/index.html","9e397e48dc72e0f067d56aa900319850"],["/tags/数据结构与算法/index.html","373ae5c8fea9d432cc6d613cfd0f03a2"],["/tags/数据结构与算法/page/2/index.html","938aa6ff164fc20b8445a0adb2fc796e"],["/tags/文件操作/index.html","40ab0a5a144eedee9c7b8fbd90b0585f"],["/tags/日志/index.html","3c4a4f6296bfe9f2c76fa4d7c990c525"],["/tags/服务器/index.html","e748c37c13fd83a06f7e705c93233afc"],["/tags/服务治理/index.html","4d8889fa7b1f64793595778ddde34610"],["/tags/权限认证/index.html","f858716c29af4b1f9b033c1e0b2f485f"],["/tags/架构分层/index.html","6b074180faa816ba98894b239e66aeb2"],["/tags/桥接模式/index.html","a07e7b00bfd9fd55b0d83e341812c2e3"],["/tags/模板方法模式/index.html","9706bb8c8acae7081888eee219e08304"],["/tags/死锁/index.html","72e7822ff9cfdc66d9dbf41485872a0a"],["/tags/池化技术/index.html","e315fc60817e241976a2691c52061972"],["/tags/消息队列/index.html","a327a0f701aad911682a5af427c5ad48"],["/tags/版本控制/index.html","56b995782beec05141375779b0865222"],["/tags/监控微服务调用/index.html","c355bf23d8d398b45efca6ab1a8ad701"],["/tags/策略模式/index.html","1e5d0942f7eb21c28037f22fe986653f"],["/tags/简单工厂/index.html","3a0c0d211dbf23415d5136b800380932"],["/tags/算法/index.html","038eb12c08f1bd80b26e079c3bebe1fb"],["/tags/线程活跃性问题/index.html","1af0d43be5a2544117cbe08bf9a7d7e4"],["/tags/组件化/index.html","544d687369fbb1f72594d98f530d4004"],["/tags/经典限流算法/index.html","38a73ba21f7e47a176478a6dbf6e7257"],["/tags/缓存/index.html","59f6b6a0246134229b7197147d8f1f51"],["/tags/缓存/page/2/index.html","7417b67d0c18d4e3e7c607f5cae6ef4f"],["/tags/缓存/page/3/index.html","4550cc97ecfd7190e0a61a7725e595d9"],["/tags/观察者模式/index.html","70af40d3a068f583c4323b04ee8f0bf1"],["/tags/计算机网络/index.html","138042a4f71a94c4b3787b078d251652"],["/tags/设计模式/index.html","f14bf993940b0d29dffb1aad143b2e52"],["/tags/设计模式/page/2/index.html","78f8295b67460a99952cf549c9a1c3b4"],["/tags/设计目标/index.html","12a3f2aeddddd3f5024ddacb011027e4"],["/tags/资源共享问题/index.html","cf562170105bb053acedfe902e7460f6"],["/tags/进程管理/index.html","a6c6644c9693acb2d8750db4dae9f8ad"],["/tags/适配器模式/index.html","51352ff61cb047f70bb2f2a4a33d5bd6"],["/tags/通用设计方法/index.html","3b922fdc9dacf04640aaf159a5d9f515"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
