/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","644d6912d7be3732bb36166ec8170023"],["/2021/02/22/工具的使用/博客的搭建/index.html","8fbf800761d7957ce12c14e93f59c0d3"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","9f8cf683f889797e995932653ca0c525"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","15c2bdfb5dd1f6382a14e6f5abb609dc"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","7675685ff48fa2ae89be32a87417bd52"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","07efeef96e3af6d0b473ceaf4994a9bb"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","9a03dd8bbf5b4fac1dba7a2074eab99f"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","85b3742a2a57eae398cc8f1284df8761"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","832a9c4049447070a652d1c4e56c86f4"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","9918c759485d99f073f3dcc226144830"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","57bbbb8e99dfab621a5c698fa3aea1f4"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","51db479f745b119d68259a74e7756c35"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","410d3512d081d7e8a6e7ae5eff371d1a"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","0896e1e99439fd0571a863b03938b0c5"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","7a669b403b96d292bc29e859bfae9177"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","95d88ffff6175b2e9d76e005999e5b9b"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","b6afa5b6aa0ed62834d29f81bc069427"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","e41beb46d8a0693dc1be620f02d0565d"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","8ccac3f15010441d90684462fd2bf8ad"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","b6f64eb3ea572e1ea92a8effa70b59b8"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","825b20a7915c180f616d7b30da6f7bd1"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","ce379ab01a53f0496c21576e2207aa25"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","88971d459b339cfa49df16d352f2fe9f"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","17b1e0933ad7e753c8bc3932b48f21d3"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","eb209a4505649124f0b94fd78a36cc66"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","f116eadadf385a561df2322a0be30624"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","3dfdb78d6ec759b77277a06c84d71f31"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","d86a2366d113b68b91869cf335fb4d05"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","f529d357e451ab31963163ee9856549b"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","25f09edd45c63c1a5aabd73909ce76fe"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","ec07665f27b3eb45e3c4e18a7bed7051"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","a44931ecf1c9bf8c4a03926722a8923c"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","07b0fb59670dc19dfdd4c149c1a23715"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","fd031603507720ae721277529958d8fc"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","c3f49f584cbfc15b0c2c9d8c84368481"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","f3f77c10d79a993938659386755ca24f"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","d7a94c3684c8a3950f69ef2eed6e0d71"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","f7aabaa2d05486f86f4988366a701297"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","34529844a5e18e73e5e51b9b255d7f26"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","99bbbde596c7c8c05d3d9e5107a5157b"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","a7a69a461642474f1fe981da0cac7b22"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","083620e764b8aee000c8ef317d728fc7"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","6f02318ee954704e9ebfd09c6c904dda"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","c2f364e23c214ae6fca9fe0284a4eacb"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","2e2ac694ce4bfeec1e1f823bf8ffe287"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","69433b554851cfa19f67f723cdaa6e87"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","84659caa268c6d8693bc447d21646bd2"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","dbd010dff264b3d248cedce0dd804eab"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","a3f3646c69136551d0c04be4c491a546"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","7b81ffff9aafef38883c3eec81e7b844"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","3feebb70c41cbbb7a12d9aa395ad0ffb"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","02da7b54bd6de8b819ec3710880be758"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","d5f35ba091f1d525ea6d1c41f8597d49"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","c49ed6d63752290401facba331d68409"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","93a805d6f8538aeced661a5f5f95c7e1"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","e9a07d72225d16a91ceeea8a8c72e10d"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","9d896e825394c7648a8f11374ead6d97"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","1611e01114b9a3ea02cc82f368d77b4d"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","4ddb1aa590e09f3d04dd8d0846064422"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","223a67e383bd9f2989d42633a8015610"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","7a691f8698392d5a409dbe54d91dc46d"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","ce2ba16a41519270c9977fbd7f81f75f"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","ae26aaae743b33dc97d3c2b7f7cc785b"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","2b389fbe94fc97f296fa732113950279"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","ae57bdbb682a2c349840226d6d8d5e13"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","6325033af485847020bcb62db7c29636"],["/2022/08/17/前端/jQuery/index.html","fff012468536f2cf6a7a95a1ee697b3b"],["/2022/08/19/前端/JavaScript/index.html","792c061c1d66242a62e4f75937b3dfe1"],["/2022/08/22/前端/Ajax/index.html","512c9236eb6374c8bee1554dcb8e3585"],["/2022/08/23/前端/Promise/index.html","1be2a0acc29f91c3519073acb4230f8a"],["/2022/08/24/前端/Axios/index.html","4d396703b2c4c7ec276a27fb0105f55b"],["/2022/08/25/前端/H5本地存储/index.html","96b0eb9dc6daac889bf70234ab467661"],["/2022/08/26/前端/mock/index.html","2f7dd69a60654f5429a9394a5eb9362c"],["/2022/08/31/前端/vue/VueJs/index.html","28f0064b1b89784abf73395c2c1b0eef"],["/2022/09/01/前端/vue/vue组件化/index.html","d557a3d7b1b5847f9b386f0a858e5b4d"],["/2022/09/04/前端/vue/VueCLI/index.html","6fceb8b62648e624d086c3da2bed2b19"],["/2022/09/07/前端/vue/vue实现动画/index.html","e73f05f5ecba8c7997571fe093c27ef0"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","646feb10da0077d72a9d30f6fe852dbd"],["/2022/09/10/前端/vue/Vue异步请求/index.html","bd34e431e2abf27b6b91bcc5029ba4a6"],["/2022/09/11/前端/vue/vue-Router/index.html","225b0613793c546a3f95e7146f02cfb1"],["/2022/09/13/前端/vue/Vuex/index.html","b98df0f47190ba427bbb0a38fbefb5b3"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","e8dc06625be7a845b790ce998f53aea6"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","f74912480a14b200e1a8f8d924196226"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","e7116caea238a10507bb397dc77069dc"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","ac8834db737ad379a7b745d91908ba47"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","0bbdfe515c32d7f8ee6f6d23bcec4954"],["/2022/09/28/DevOps/Linux/Linux/index.html","bdd97e6367ef1ae01a064344ce9643d9"],["/2022/10/02/中间件/Redis/redis基础/index.html","d35e5113d25b1141f62fde0c9f619f02"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","381af311a77a2b34607058a4cfb5e7c0"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","85a73c1da60a90b93e7c2ebccd0eec6c"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","446ee4995d8b6a68f181c0e0655ae090"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","36e1c282345d4c09da163c6aecbd8286"],["/2022/10/17/中间件/Redis/Redis集群/index.html","98adc7bcaf6c67b7871aee276fa33747"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","e9c068d4879ceaad71a76bb9cf88ace2"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","2132c7da1abcb748119144300244989b"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","d71f6c453f081650b7957a3a6441b4a9"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","a80b3d45e855643a9567cab2ff86a044"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","90e76bd2180da1a0fefc40fce35169c9"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","d2fabd2d691f4b290d07dec78041e517"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","a3e170cbc92bd2fa4ec5e2dbfbfe429e"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","cceb0f00c8cd7ce94695a5ce8e82f09b"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","fba04787d69613dd9cb945e13db97a6f"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","82dbe67b6668b5a5d12b09e259f9f96c"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","a1a4b348f6d87464a5da1040722d3ab5"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","1d9b6563b920169dfeef8979db3e1bb4"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","17e18da2ce21d6ed6ce2de191c43eb37"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","03d8be25240023401495e9f7e4ad79a3"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","dc43be14ce731a89d2b3d0b90c2f6d1f"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","6ab1589d0eeae9f4b3f4485722873a73"],["/2023/03/10/DevOps/CICD/CICD/index.html","25d1f1894302909955f12f519052ea7f"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","4af549a3519d7f48d25c1c4f63a3fb7e"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","a2d4b17d4420dc271fc561a32422863b"],["/2023/03/13/Java/NIO/NIO/index.html","4d705153602ce4a2367ae5a271f97d0b"],["/2023/03/14/中间件/Netty/Netty/index.html","3459fc143cdda99a7fe1f11e949e0856"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","e6406c129ad7714131e1256e28c8c8f7"],["/2023/03/17/系统设计/分布式系统认证/index.html","953be18305121a1123c5fe3dd3b34b4f"],["/2023/03/19/Java/JVM/JVM概述/index.html","a9ab9bfd85cc101439ea8d6051b320f6"],["/2023/03/23/Java/JVM/类的加载过程/index.html","21118b8d3bca482c0d7025f88081f9be"],["/2023/03/28/Java/JVM/对象的实例化/index.html","db7768c8cb965f7aa9a62dee263ea695"],["/2023/04/01/Java/JVM/运行时数据区/index.html","bbbea5dbf436144037ce6414de7929a5"],["/2023/04/04/Java/JVM/执行引擎/index.html","814c2129cfbb44168b7d98c048d62fbf"],["/2023/04/06/Java/JVM/对象引用/index.html","7c10019301eabe30702ee920e85592aa"],["/2023/04/09/Java/JVM/垃圾回收/index.html","b796e8087c626d86722bf0973047bd8d"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","fcef261c8425d0a4cab29ee34b5bed55"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","543ba00d5e5206e1c3910b4225b08a2f"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","b60adebd25c06d96b2cb553237b34ab9"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","7c354632cccf18ebea120737d1446337"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","cc5cdf8e0a92d47ba6f8ae7c9a834ee1"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","e5e88990fe989236c3c557463d0d6060"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","65330b339cf49552258cf3586853f436"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","86fff2821dfa579dc729b84a4a9b42b1"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","6078197196a8f9fa12308f205c80ed17"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","05fd489e4ef791e296e90cb50851de0d"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","181e6402172ae62a2525e70cb60a0841"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","a19b93f0d4635b0627f8008929b48977"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","13bd94f4db5774ff66bccf23550b2395"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","284ae3820da3fbb634d2645fb5a90797"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","3e4b064a0f7dbf1e5e8ed4bf70f5c405"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","9dee3b2f3d2056adf43497356f175691"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","5fda2761099a6655aa4d78f057568eb3"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","8398b6042232cfabc18c56881d46e20f"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","1312b167834f053ed416075d3d4f4532"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","0e06dd7319c91bb29517b96cfdf1e921"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","9212a483dcf47bfb64c426b6c787ce30"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","9695605c3ff58d78087d7f343a16efd1"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","7223336ae8ee8a8c8a3a1466c6ecdf9f"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","78c4864a296c18fa4fdea6b86479fe3c"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","660b62ee406d0030439abd1ae2d486f8"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","e4ca4b9109c8ae48da2dc4955bc65267"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","0bc5d17bf90b9ad578a741e4cfa0cb7b"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","2af6771664f61c3f7f7e33359b8b1304"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","49ca4e79a3202f2d3a644b7ab515b4a4"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","7a3e718c86a0ddb547a01c510cc34c8b"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","806670ae5453b58def529e4686728b8f"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","b3c30c8298e7a93c21b630060dddde70"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","368c21df92316718f87919dfa44a3625"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","095e5137bb6defba44b3027c91412ff0"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","4279cf769d153831c54c9ddaca60353e"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","eb8038c79de87c2c2a79a7ecf121966f"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","dd7936e8fc3954b9ddf8d1aab9428a07"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","dfae408eccf24c3f55f7432b15a7da49"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","1406ff820aea1ad7df22fa1bd924a5a9"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","2956a0fb369b5ed77451661d7a2fcc45"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","b11138e4fd4759abadb6d33990fce3c3"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","a79cf56c2066e4e5123e71ba80df84bd"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","294ea047cba37cc4a7ef8be255bbc968"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","0482ecef434b314e99d7b19214af61a3"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","16e6f7947b82f2a26fd6fa5a5949bc6a"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","08f758ec2f8a29f1d8c97c014d7ccb41"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","98333b0c415db4aa501a6d0042388085"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","7ae7c9ac51d7bcfb39a00560ef66de8d"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","6d4954eb87b129ef778395de0edfa694"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","0fe9398ac1b3121c4550444d2ca199c9"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","8f0e3a770139ee828f407ef2288c4a9f"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","415a85b49d0c33e8211007e7ce5063f1"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","94164693cdc2355a9f3e302d71d2480a"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","e3c4b2dd8fdcb4bd1f1c25562fbd0ff6"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","4b5f5ba067dc7d14c259423c31d8b7be"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","0c2a4d8bca1804b6cc98a0d42f4b44fe"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","5d8a02fbd48327673c1aed0674302075"],["/2023/09/04/中间件/Redis/Redis事务/index.html","be47fe8f78237d454bfaae29bfd88a1a"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","2d112ef22e9f7845dfdd23e3496b6d6b"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","fdda17691d31095ed7b0af0b452fce47"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","f66528a7f8c4dca95684c30a683c4f35"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","e599263def55bd8e85b5a2340bf8aeb1"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","dbda91fa1628a6d8c1612c52c110b143"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","b286e4dc30a84722c35b5911e2d9c84f"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","caf464f880ad5e427e37d2d0df591b43"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","345fd2c8bbf1f4bd752580842813a48c"],["/2023/09/22/Java/NIO/零拷贝/index.html","05d1a5a93c566e7aa0dc796c508a0bd0"],["/2023/09/24/系统设计/JWT认证/index.html","da891a095dff4e4455644b57517cdb7a"],["/2023/09/26/Java/NIO/Reactor模式/index.html","6fb0e091bf4313d444b9620aa39efc3a"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","821920659d1e49aad09939d92c1ba6a0"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","e2d2087b66276111aaa3d8985574fad1"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","2a6417261ec89afa41e51b78ae7ededa"],["/2023/10/09/Java/并发编程/共享问题/index.html","6a43672f4a3318eb5094298662b28c89"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","4e3c813198d177fb1bf3709ef3a46c9c"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","e5205d5fd9499214e67e07dfa01e7932"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","511dd3a1b5081a842a1845dc1829883d"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","c66d129ac2fb2d5dbecbe8534dc83bc4"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","413ac9dfffa57fef57f66972f30e6b21"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","cf4ba6f9a84160d40e339d8d54a95d86"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","a8c8725e99a51730d4791fd8fd6168b9"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","4b94e103b07f678ea0d3db12ac6684db"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","885401d7ad34bce5af7d99a86ecf4a09"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","afe7fa0804b60546d52fceb7045023f9"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","543f009454da796aa4cd156303c49d0c"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","58b33e59bff64b08c2c2882a6810efe5"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","f045f2fac544bbcacee98e0f4d2feb79"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","e091112da3a916ea113be32e96c380df"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","02f133288fbf74b9d12ebed2e3cbbe34"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","7461a1926c4ed03732ff5fa6a590452b"],["/2023/12/05/系统设计/开源协议/index.html","d15be233ead73c5b52818e8582d85f28"],["/2023/12/09/MockMvc/index.html","213403332b58d0ad78ee4b45f256f55c"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","9ac08c66d7ad03c56e2ea9b2446cc8b9"],["/2023/12/19/MySQL读写分离/index.html","63f6ac18324d36c592b6da165e1e5c22"],["/2023/12/22/MySQL分库分表/index.html","f3cb5ce48f1cb6632970ccaa321b73e0"],["/2023/12/27/利用NoSQL优化数据库/index.html","e0e25c5d01b5632eb170420f7e3d7f70"],["/2024/01/06/缓存概述/index.html","291729b759eadf9c2f5fb980aed22214"],["/2024/01/11/缓存的读写策略/index.html","f7a2095f87e7c99da388f50fa98cbc8e"],["/2024/01/14/CDN静态资源加速/index.html","1c6501c47ee279456487c0c19ae7d1ad"],["/2024/01/18/消息队列延迟问题/index.html","38f6419fcfa49e39ade1053fb4fb536a"],["/2024/01/22/高并发系统分布式服务方案/index.html","a550c878283012eca7ae7c52a41e6632"],["/2024/01/26/dubbo/index.html","2ad6fcaab7316fd9fa74ba6f4aebb611"],["/404.html","b6e848c1c29316c81d5e941954235ca2"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","af7941971ac1ebc830b6cffa60422313"],["/archives/2021/02/index.html","b54414c4069c5270a1c175e3b43b85ea"],["/archives/2021/03/index.html","eaf0abdedf7149638175ac4b58de5900"],["/archives/2021/03/page/2/index.html","d78c0c93f83c1f6fbf4df72e71fec7e1"],["/archives/2021/03/page/3/index.html","5ab2198e405a6b4bfa235d4430d9a57c"],["/archives/2021/04/index.html","8fb73f97f38614c1d9f6b935fe9cf736"],["/archives/2021/04/page/2/index.html","40bfb2efdff0142cc4721a2a97a45e0c"],["/archives/2021/05/index.html","4fc75ddf70acc5c88d21972ae944cb19"],["/archives/2021/index.html","2a836945c4f8c948d6e6db33f8e66dd7"],["/archives/2021/page/2/index.html","4dfce0ae70359c278bb57a7d353e6363"],["/archives/2021/page/3/index.html","c5fdd6a26bda65fa2172e851118d3ca9"],["/archives/2021/page/4/index.html","ef41198bb6799c9ef2782e0b88cd1bcb"],["/archives/2021/page/5/index.html","1141d61494ecfe69d51f777b82dd6478"],["/archives/2021/page/6/index.html","15a88faebb9ba8b55871b18110881568"],["/archives/2021/page/7/index.html","b2a59b235fb3b7a633c1b63fcacd4f8c"],["/archives/2022/01/index.html","8497f74b2d80a81d51c6da1caa026b9d"],["/archives/2022/04/index.html","faa7d43454bd2e464578b3329f88ae0b"],["/archives/2022/08/index.html","be0499fad406be510f554566cbaa743f"],["/archives/2022/09/index.html","62498367df32028d4fa7f958afba7ecc"],["/archives/2022/09/page/2/index.html","1dc76a2528a44da4f2e46c4d27641086"],["/archives/2022/10/index.html","8a876ca51563b844287ba4835771a037"],["/archives/2022/11/index.html","a606026af63e729a1f868d04495f907a"],["/archives/2022/12/index.html","c77cc8371df496aa243f03fc18fd723b"],["/archives/2022/index.html","d95597693ee3a40020098a24e7e43088"],["/archives/2022/page/2/index.html","a173c579d58a84f7b5e64cc269357dbd"],["/archives/2022/page/3/index.html","f696e55bbf223cb3bd426c74a327b7c8"],["/archives/2022/page/4/index.html","fb18be57a659b12d18bd3922666b13b0"],["/archives/2022/page/5/index.html","d46be07ee869653037b6875f9f68dccd"],["/archives/2023/01/index.html","16f6ebe2e436cafba77ce0d496b00395"],["/archives/2023/02/index.html","0f7d2fea412b91d0cb3d208cb293d147"],["/archives/2023/03/index.html","8653016eac236618a6a4b7bbc0aa519c"],["/archives/2023/04/index.html","5d458975bce3721025dfcd76234657e6"],["/archives/2023/04/page/2/index.html","23906cbe6779d91d9f24b6e54b1ae4eb"],["/archives/2023/05/index.html","c3c0702168295835f99f84c5f6bebb4f"],["/archives/2023/06/index.html","2500b8b17ec828cdd19c758f9d60692b"],["/archives/2023/06/page/2/index.html","804af1141adeed0309c91ddd174e4d22"],["/archives/2023/07/index.html","fa3f0a25d56e7e80337798835bb42d29"],["/archives/2023/07/page/2/index.html","777aa9dad3062292bc9a8bfe2a6a9822"],["/archives/2023/08/index.html","63438622ae4946c17edfe827cb3782cb"],["/archives/2023/08/page/2/index.html","b8ea448d4e512ee6dd460b043192c278"],["/archives/2023/09/index.html","1fd18a1adcf0aacf8671154486660e64"],["/archives/2023/09/page/2/index.html","2a066a00b13b42338feedbd7b15761c3"],["/archives/2023/10/index.html","cafa6c404272fb92ddb99361adbefbc2"],["/archives/2023/11/index.html","284bc52009b4012edca1c82cc210fcba"],["/archives/2023/12/index.html","9ab870000820a7ddeb33058bbc1a81f8"],["/archives/2023/index.html","7495e34386c7bc369b6aa5e09552fc13"],["/archives/2023/page/10/index.html","140e05a865c3142fa60ac29b1317e367"],["/archives/2023/page/11/index.html","970cb3fcd6be4b941caabfece5c2817c"],["/archives/2023/page/12/index.html","398a1c5d7f3f17534990053960128e5c"],["/archives/2023/page/2/index.html","b88667e3528c9963807a36790421771f"],["/archives/2023/page/3/index.html","e5577d3a172df53250b95c4f7b5c17c5"],["/archives/2023/page/4/index.html","6e0261e52384deaad9a49ea2e4117c4f"],["/archives/2023/page/5/index.html","13cc630d91c9b64991b9b663ba254a59"],["/archives/2023/page/6/index.html","99ac8bca8fa263105822f9f84879aa4c"],["/archives/2023/page/7/index.html","8f125e553249b26fa19392b932b8673b"],["/archives/2023/page/8/index.html","8a154e973a97226f77c933a3537b98cd"],["/archives/2023/page/9/index.html","1de5c4ce2059ee9ca71a89eab6df6fa1"],["/archives/2024/01/index.html","c3442ad165bbecb9257cf956daa78bac"],["/archives/2024/index.html","f5580c0e1a578b26ccb44f583c146b09"],["/archives/index.html","98ae11b12c08237f7e40c3fd97ffb4dd"],["/archives/page/10/index.html","13c1c07a7e9fae4754ee12dc020b2a71"],["/archives/page/11/index.html","2339f333e743db8bba67691dbd644952"],["/archives/page/12/index.html","930204937e9b734457ab508433f100a3"],["/archives/page/13/index.html","96772443c8c0fab50b7cb5385e39d3fe"],["/archives/page/14/index.html","eef486f3dcf3bfd22ae4cd59ec2f16fe"],["/archives/page/15/index.html","b0d54fd08e81194336f691958b330b43"],["/archives/page/16/index.html","aa4955044f0b243ab309bf9bcdee0298"],["/archives/page/17/index.html","8787c12fb6823092f03704e6fbd6735a"],["/archives/page/18/index.html","1e306125404accca9e20b5d09e6f2164"],["/archives/page/19/index.html","68c801c1be3cc72cf18600bcb4273ab1"],["/archives/page/2/index.html","96d3bba20ca5f6a1130ab6a4bf839f33"],["/archives/page/20/index.html","94621e78c3016cfc523a98b1dbaf7be1"],["/archives/page/21/index.html","bb37a2cf204d4ed60113f7d8f8aa3c84"],["/archives/page/22/index.html","b57023beaf9b56441b761c3d22f8ecfd"],["/archives/page/23/index.html","686ab678c534126013bfd519ca3d05ee"],["/archives/page/3/index.html","dc3cdb8f54e736b12b2108a734eabb2f"],["/archives/page/4/index.html","337779a88f9e1c056f9acc764d735cbc"],["/archives/page/5/index.html","7462d9079ceff5ffc539af1b1bcc91d6"],["/archives/page/6/index.html","017b17a2f2779f49546bf95ac13dce5e"],["/archives/page/7/index.html","259a7b21f0dd74dcf4d115c7116dee57"],["/archives/page/8/index.html","1c004e2ed6411ac9660ca1a6ac1f54c8"],["/archives/page/9/index.html","00800a569993fc4d255cc883eef1b920"],["/categories/Devops/CICD/index.html","2315c04f4ff33f8b9972218f6bbecd2a"],["/categories/Devops/Linux/index.html","99d8bbf5f31c28689d78cb734ca78c0c"],["/categories/Devops/index.html","bb371f1387f408b5421cb3e953fd2ec6"],["/categories/Java/JVM/index.html","789ccb0fc5be908a609449ec5c2739c6"],["/categories/Java/Java基础/index.html","f1fa26e31502a19729f77d00ae1a970a"],["/categories/Java/NIO/index.html","225f10dda5be3f30d831ddf39365de7f"],["/categories/Java/NIO/原生NIO/index.html","488a6eac76da089c6b6569391b69e8d8"],["/categories/Java/NIO/文件操作工具类/index.html","0805f2fa872f4f022f955f168c490e81"],["/categories/Java/index.html","48b829b819252966eda2756c929620cd"],["/categories/Java/page/2/index.html","a47453c698eb874927acec69c3bd1b5e"],["/categories/Java/并发编程/index.html","915b03bffc666af1a5d407619b4fdef8"],["/categories/Spring全家桶/Spring-Security/index.html","ac17ce9dcd3c5bf0e3d7871de5c5dc3e"],["/categories/Spring全家桶/Spring/index.html","b91a633b37dd057916263c528f3ef20d"],["/categories/Spring全家桶/SpringBoot/index.html","acff4fcb90f22593ee1f427360726ca0"],["/categories/Spring全家桶/SpringCloud/index.html","db11b1c4f0362683293b4db7cb865b9f"],["/categories/Spring全家桶/SpringMVC/index.html","883c030ec3eee293cc93b2314f1ab5a4"],["/categories/Spring全家桶/index.html","3f17001fca594a2bfe0bc740128d3856"],["/categories/Spring全家桶/page/2/index.html","c9b610a6a9fd48b85a6ef386772cdc3f"],["/categories/index.html","cf5fe95e3f5d89138b57dd4584d29d4a"],["/categories/中间件/Dubbo/index.html","1fe5489546cf04e51679f87685fe3ac6"],["/categories/中间件/ElasticSearch/index.html","beca5ef39e6a770e3090052f6306d468"],["/categories/中间件/Netty/index.html","7ac9850e745784801af68e4d95a5bdd4"],["/categories/中间件/Redis/index.html","36edf36caca5ba8a5afeedd4e3cef9d4"],["/categories/中间件/Redis/page/2/index.html","e89f26be0d199f823ae43b8e7522e47d"],["/categories/中间件/Redis/page/3/index.html","c747714c80b6245257bd664cfc30e5fb"],["/categories/中间件/index.html","e1c536f1c8d43885a79f83ef2070d570"],["/categories/中间件/page/2/index.html","bd14b249d3e278098cf1234ce2bccf47"],["/categories/中间件/page/3/index.html","496fcf66b7e0043fcd78683dd7f33dc3"],["/categories/中间件/page/4/index.html","4844e25e21bec9190578524c61afccbb"],["/categories/中间件/消息队列/RabbitMQ/index.html","107b1f2b3d6d2f83d4e9d254619fdd02"],["/categories/中间件/消息队列/index.html","cc9dad475f01fd5212fd1ba143cb9ee5"],["/categories/前端/Mock/index.html","e8b87fc679af6c50c8c7799496cd621c"],["/categories/前端/Promise/index.html","7c89d9124619abd9b566dd6b16c70252"],["/categories/前端/Vue/index.html","e9e7bc79184865bbf4ebe9a58caf7f2f"],["/categories/前端/index.html","fb68f8a31d3a9211e061d08e50313ec6"],["/categories/前端/jQuery/index.html","a97a1c89019c6ade95f25c802663abd9"],["/categories/前端/page/2/index.html","e3e3c61df807c8ae336f9d0287f0cb1e"],["/categories/前端/原生基础/index.html","8eb6cde1a8f8f17cb7a439b3ec3f56b8"],["/categories/前端/异步通信/index.html","829056898e8f291d94ca42e4457a7bf0"],["/categories/工具使用/Git/index.html","48d4f0e2f223f28d1f69cd2458df6c97"],["/categories/工具使用/index.html","610f4b69545e7bcf340e4357fcde1673"],["/categories/工具使用/markdown/index.html","2506e7a16b858cc03450d6ad680e284a"],["/categories/工具的使用/Docker/index.html","172e654082ba5dcd7bad72b22a43c115"],["/categories/工具的使用/Nginx/index.html","fb3dc712f2564ffb004795d2fe43d0c6"],["/categories/工具的使用/Swagger/index.html","486ddb639d937fc2da1948678d885746"],["/categories/工具的使用/index.html","2c0108c62c32d2ec41a98336603ef58a"],["/categories/工具的使用/博客搭建/index.html","d7cf66fffc87dcf55dac427e740785c4"],["/categories/数据库/MongoDB/index.html","6b9dd79c6aa5d524e44534a133b09c0d"],["/categories/数据库/MySQL/index.html","48a4a540101e25d10494ff277c381ec6"],["/categories/数据库/MySQL/page/2/index.html","4d170aafd05507a2119384ce6f732685"],["/categories/数据库/MySQL/page/3/index.html","83c0968ae6c326e82030a21c89fb42c6"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","bf2400f721fa1501a1716ee5ed153d01"],["/categories/数据库/ORM持久层框架/index.html","438b2ff3a7460b74dbbb9ee93f1cd089"],["/categories/数据库/index.html","addbfd71381da80edfa90abc9986ed68"],["/categories/数据库/page/2/index.html","2ab4ec091259f5a50a01f4ade58e96c8"],["/categories/数据库/page/3/index.html","066c1f0dcc2a29988614e5b58886e83c"],["/categories/系统设计/DDD领域模型/index.html","b57fa92f7040cb7a9b810ab43f39a5d8"],["/categories/系统设计/index.html","42cdb98669f4ac12c33bc016b9be6a18"],["/categories/系统设计/page/2/index.html","27cd0a615206db634756e6025f23e237"],["/categories/系统设计/page/3/index.html","fe0c64a668df5de9b7585a1b08148e32"],["/categories/系统设计/page/4/index.html","ceaa57bbaf273ee3b29510e6f781876a"],["/categories/系统设计/page/5/index.html","a9e962425455b0b8e791cc557804f1d6"],["/categories/系统设计/分布式权限认证/index.html","e8a76a1288ce16e3ab246512cfa66451"],["/categories/系统设计/分布式系统/index.html","4bacbc0b574f4688e13511aea068de17"],["/categories/系统设计/分布式系统/page/2/index.html","02e626b2129a77ab81959cadf9ed4597"],["/categories/系统设计/分布式系统/page/3/index.html","ecc94a220fe01b639669794b2f0ac72e"],["/categories/系统设计/数据库优化/index.html","534ecb580a6e242dac3874a595ee2fdd"],["/categories/系统设计/设计模式/index.html","617e0e3cbb44c39ae84b72b05a3c4271"],["/categories/系统设计/设计模式/page/2/index.html","65d034456545fccd0de8a78d5e0b89e0"],["/categories/计算机基础/index.html","8b33ae5efc7378638837c7448bb5bc02"],["/categories/计算机基础/page/2/index.html","c73bff941d2f09c654a816bf0e306de7"],["/categories/计算机基础/page/3/index.html","9fd605a441eb70f38c87f616f76bc54e"],["/categories/计算机基础/page/4/index.html","76b09a08e6fe637cd273a7f5143a6ad5"],["/categories/计算机基础/page/5/index.html","43cd5d4c20825a344b7b80404ab8228e"],["/categories/计算机基础/page/6/index.html","55a29ff5a0dcb21949dc2c7d283a4228"],["/categories/计算机基础/操作系统/index.html","7b799c0cb7d76424b7043da3be383da5"],["/categories/计算机基础/数据结构与算法/index.html","adfbc107c82a42c250efbe1f1afa3e81"],["/categories/计算机基础/数据结构与算法/page/2/index.html","23a0afff08762117b18d95ec7ee6fd87"],["/categories/计算机基础/数据结构与算法/page/3/index.html","a8102c05aa4ab223a492147c012dba41"],["/categories/计算机基础/数据结构与算法/page/4/index.html","4b9b242e7a0c79facc715159fbdbe7e4"],["/categories/计算机基础/数据结构与算法/page/5/index.html","679835de4dad1c52a52643cb360a2879"],["/categories/计算机基础/计算机网络/index.html","3ae218e3c394c79749f5474b9fa445ab"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","1f415c7d0a61a3222eca81400b51211b"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","45befa46418324d6a4eb4ed2ada37b6c"],["/messageboard/index.html","01bcb155caa8e4db119c1ef2b669b984"],["/page/10/index.html","cfe77ee7c607ec6d1b2d563a23a210c4"],["/page/11/index.html","49a8aa7b661c0cfb1a05d9d77e7f3aad"],["/page/12/index.html","bafd97d94bf7bd35ab9057169fb94281"],["/page/13/index.html","c72e8d879e1a4cb7b788bbd426fc3858"],["/page/14/index.html","45c5ece43b080fef97e2c9845050a1f7"],["/page/15/index.html","703a44f0cc6bf475f1be484016f36589"],["/page/16/index.html","b19199986618534365839375b24db7c9"],["/page/17/index.html","f562e6d3c4c7d337c6b9f011dd19a8f4"],["/page/18/index.html","d35139125c66ce2d2ca94583f2358775"],["/page/19/index.html","01908cddfc80f85ce5f79ba353f7e7c9"],["/page/2/index.html","4a9180e1a8c6e52cbefa751cf6b85cfa"],["/page/20/index.html","073856913e19fb8403dc7f140c4254bc"],["/page/21/index.html","ad94934a3e107fd97b229b4d51a3fd0d"],["/page/22/index.html","066d86087dbd7cd4f26eb80f4c701e90"],["/page/23/index.html","5cd5268d4a44d2b16da8601a4cbc5516"],["/page/3/index.html","289ceca59a544651588472a0f3451a9a"],["/page/4/index.html","899e5795bb049172282001904a7eb4d3"],["/page/5/index.html","e22ff0a171be91c8c827c5b13f6d3637"],["/page/6/index.html","85004f7ced43afb9e5fffb5e6fe34e50"],["/page/7/index.html","90dde6bf1631586b5052aa9d994d923d"],["/page/8/index.html","4c7a309daed1dd900c1f6bf13cddd376"],["/page/9/index.html","8db0beed624c6bc24d19883873e03e82"],["/sw-register.js","2e935401a05cd752d7f7a5f3272ad8cd"],["/tags/Ajax/index.html","5bdd6c72011e7ebec36fab8c75ef189d"],["/tags/Axios/index.html","782a64bfade8392ff3e9ed25bb80a25c"],["/tags/BASE理论/index.html","7bb259aa2ed7227fd394c166adf1834f"],["/tags/CAP定理/index.html","6b6fb459c47c0185eecfdb126527ddef"],["/tags/CICD/index.html","3e3e2a212c5ffca527ce78bdd8f1b864"],["/tags/DDD领域模型/index.html","7f4676603b1698f033f150cacb46c20f"],["/tags/Docker/index.html","4ffce4cf61ec08addbb588a0f2b36af5"],["/tags/Dubbo/index.html","c7d81d50f18aad4868592a3878dc1de5"],["/tags/ELK/index.html","6bd269d68f4125eaf8ecf71ae44169f1"],["/tags/ElasticSearch/index.html","62cfe9096b89a306624066c94cc3f767"],["/tags/Git/index.html","234f22643e5d4e080da797110826890b"],["/tags/H5/index.html","c6fb1fa7c6fce3974da48da2323e4b76"],["/tags/JVM/index.html","66d128d95b2c49ec056e001a857bd417"],["/tags/JVM内存模型/index.html","3c71c7e9819c25625485f8d357dfc97c"],["/tags/JVM执行引擎/index.html","debf6eade4429a416d6f8a118f47fc7c"],["/tags/JavaScript/index.html","a8f201a3d63e3123947852612149a8f4"],["/tags/Java内存模型/index.html","4a2b37ed0e0fa96110e79f6df694edda"],["/tags/Java进程线程/index.html","6dc96291bbbc777137ae3a3bbe90c7fa"],["/tags/Kibana/index.html","fe067e8eef94b6852ae4ce77f413af29"],["/tags/LeetCode/index.html","01e91eee309c7528bb85d8477b09b7d5"],["/tags/LeetCode/page/2/index.html","4ac81eebe9cd6aceb0ea852167feeb61"],["/tags/LeetCode/page/3/index.html","ac75b11acf2092c9b4497bc0e2b195da"],["/tags/Linux/index.html","1ed38b9d6ce3f807f20b084cd21ea69d"],["/tags/Logstash/index.html","3fe828d353b941aaa9355bad7042bed5"],["/tags/Mock/index.html","c1cfea30d521bb4ce4a10681916328bf"],["/tags/MockMvc/index.html","4244da293df6509541aa050530c976bc"],["/tags/MongoDB/index.html","ab617723787199459f8a448cbb21af54"],["/tags/MySQL-事务/index.html","ea85df69fc9c419e4267879221078575"],["/tags/MySQL-数据类型/index.html","8c6b99e68ef02d4d43cd6bb3567dfd11"],["/tags/MySQL-日志/index.html","49ad088ae0f9e2eefb391e9be507cc75"],["/tags/MySQL-索引/index.html","63ae5b4bba934b1bb208a6fd451441bc"],["/tags/MySQL-锁/index.html","cf8a8c4871faf9fb5b8736f40e7d426f"],["/tags/MySQL/index.html","d116eb952c692702339812810a79cf79"],["/tags/MySQL/page/2/index.html","d7eff2632b86357cc7b2add4b311642c"],["/tags/MySQL分库分表/index.html","94dfd77b3ddf343cee737d23ab80afe7"],["/tags/MySQL读写分离/index.html","dfdaccd88edd93c5f17336cc29ac63f3"],["/tags/Mybatis/index.html","249127e6d20effdf0bd738676b272ab1"],["/tags/MybatisPlus/index.html","87b3be950d015c4b40c1e3dcbd69f8f3"],["/tags/NIO/index.html","9822e072d30e4749f5a371f4697d2927"],["/tags/Netty/index.html","fa0fef3149250b8de3d689aa50138045"],["/tags/Nginx/index.html","040016f51eb9d70c17a6f5a9529a655a"],["/tags/NoSQL/index.html","c46df1a5d3b93d93df57c279bc8e0c1c"],["/tags/Promise/index.html","c59e62fe1bcf21e95b92d1e09cb50404"],["/tags/RabbitMQ/index.html","3e9d9bf4be993d70c2196d636a290e3c"],["/tags/Redis/index.html","94e33f63fe327f37bbe5717913bc245a"],["/tags/Redis/page/2/index.html","8e7211596db18bee2ac305347d780b27"],["/tags/Redis/page/3/index.html","629351cf2b8a4b89a2c4aaf1f4042238"],["/tags/SSM/index.html","922bb15eb74c64811725a94bdf859b67"],["/tags/Spring-Security/index.html","706b81b2c21c71021ab96ea0bb0986fa"],["/tags/Spring/index.html","bd7c53b06e47f1b3efc9f1b0127a75ed"],["/tags/SpringBoot/index.html","f0bb391f409820eaca45f26f7c4602f1"],["/tags/SpringCloud/index.html","13a69979a0c82822c1d2412817f20971"],["/tags/SpringMVC/index.html","aaa1a87daca466ce07d2ba8c2d0a0d38"],["/tags/Swagger/index.html","1062a13f0820b358ce1bf0c2b87f2bad"],["/tags/hexo/index.html","b9872950e6bb9d4259ba47fd1103b302"],["/tags/index.html","52ca6f621e0e87e4bafc4ccdd1776e00"],["/tags/jQuery/index.html","dd9338ebc42192140b52838ac91c12d2"],["/tags/java/index.html","798701037b46f8acff59ec4916e349d7"],["/tags/markdown/index.html","d9334d330c879d33c58e00e842e4913f"],["/tags/rpc框架/index.html","b9c0f4e76f2b038eca51e625772e44ac"],["/tags/typora/index.html","feb065c3b826db49f00b2a0a507372f8"],["/tags/vue/index.html","a158ff8785ef5597c0092d36eda97934"],["/tags/享元模式/index.html","c577875d50a24cbba978185ed62b4ebc"],["/tags/代理模式/index.html","6e8565ed8bd8201fe8ba058e25d61074"],["/tags/内存管理/index.html","4615233b11d7860f2898ab8355856382"],["/tags/分布式/index.html","3b0c106a0e4624e9f8fecf76c9865208"],["/tags/分布式一致性算法/index.html","182a43089c7f81608bba7d7cd1aadbad"],["/tags/分布式系统/index.html","a80c880ab3acd9a03e6bab8254c98c58"],["/tags/分布式系统/page/2/index.html","6b7e6b7328ddad1c1323f9ef5ff30d86"],["/tags/分布式系统/page/3/index.html","e0feacb52fa55616a93d98dbf625c54a"],["/tags/前端/index.html","3def8a8da27c814615eb3167dbeb2202"],["/tags/前端/page/2/index.html","3ed50b1c76f901ed47c34fb0824d24bf"],["/tags/动态通知/index.html","eded7714e9433359c71a93482b630e38"],["/tags/博客/index.html","a8f927dc0fca8aebd3b99afb25f8797a"],["/tags/后端/index.html","1485bc7a16213a9dd26599b5ebca19bb"],["/tags/外观模式/index.html","532eb441f43b975656830101070afd85"],["/tags/多级缓存架构/index.html","6ac530eab444bddc3de057f16e5b8145"],["/tags/多线程设计模式/index.html","f213f51aa3d8649b13da6fbb06bb5e8d"],["/tags/容器技术/index.html","fb773af932f48be0b7bc02c203185c72"],["/tags/工厂方法/index.html","7a3143de5a02daa7fca9cd59c0babd16"],["/tags/开源协议/index.html","9d5dcbcf3f708699102a9fa2e3d28712"],["/tags/异构同步/index.html","0a154fa7d9d55f538020356badec69a6"],["/tags/微服务/index.html","43d5e15d7739b1d2776daf9fb56a301e"],["/tags/抽象工厂/index.html","2503b25be8668f1f15884b5fdb0550c9"],["/tags/持续集成持续部署/index.html","bdbe045ad4fa7cea7004bb849ae75016"],["/tags/接口幂等性/index.html","5bbd27d80dfe687dc18897d409c57721"],["/tags/搜索引擎/index.html","fe44eae1af7f1e82dd30ed2bbbc28580"],["/tags/操作系统/index.html","48c31c8d88fdaa5cfc4507401a80087b"],["/tags/数据库/index.html","d1084971af4e01c0f7dad6f818a7bc4b"],["/tags/数据库/page/2/index.html","00d005a477c4dc5f9f4f52d3de107730"],["/tags/数据库/page/3/index.html","5884c517ec17d80d34edc15da9a0e66c"],["/tags/数据结构与算法/index.html","22c957a4c3ffc2c31258ef3992b99276"],["/tags/数据结构与算法/page/2/index.html","a1f0cada05bef69fc7d1ba7f4701d0a6"],["/tags/文件操作/index.html","69f49ebe837a889547174b7dfd899587"],["/tags/日志/index.html","2000daf00e0f4178f9c47fd3ab745fdd"],["/tags/服务器/index.html","07e9ef53f6dc36564666d5a3c3552b2f"],["/tags/权限认证/index.html","66a673ec42d7729ec36097b57532b149"],["/tags/架构分层/index.html","ff32df498b31b78c9c5085f98acf9e12"],["/tags/桥接模式/index.html","2a9c3ab02579c64a3b2dc514f969be20"],["/tags/模板方法模式/index.html","53f02709d63b1daff85fbf6fbfbf93a9"],["/tags/死锁/index.html","9b6847d63c29b152e8e201a027622e52"],["/tags/池化技术/index.html","8ca84e776e872ab18a55fae9f6bfccdd"],["/tags/消息队列/index.html","fed59d8cf22d5f6911f502d1aac3cc42"],["/tags/版本控制/index.html","db3fdcc1abcd964f11273afd5d6deeba"],["/tags/策略模式/index.html","43d57b97cb87875edfc84a29e16f276b"],["/tags/简单工厂/index.html","9e4d871d1fd8f4e3c5d772246487224d"],["/tags/算法/index.html","c4ed165a9364b495c2e16b8c6d0d89a4"],["/tags/线程活跃性问题/index.html","f7440b283f5d7b8eec7efde98287015c"],["/tags/组件化/index.html","b846c28868b5f06a41513ae335f52b4b"],["/tags/经典限流算法/index.html","0ceca3ee5347e930c5a269f81faf2fe5"],["/tags/缓存/index.html","6e2011053c7d5107ad60ff8d9d2af836"],["/tags/缓存/page/2/index.html","5154c1e1722dbe2d785811093eea1612"],["/tags/缓存/page/3/index.html","1ad3f59ca66bc34e2767e84dae21f145"],["/tags/观察者模式/index.html","4c726f155e7967b37ceca0a264cb2e40"],["/tags/计算机网络/index.html","4182b52b1c408efca35744c2d4205d4b"],["/tags/设计模式/index.html","6958fc4bd09701c754d27ffc216a7bac"],["/tags/设计模式/page/2/index.html","7ee437ad956e735222f04ce6e2629794"],["/tags/设计目标/index.html","10f891bdb90a4057f42db74ed2c6c9ff"],["/tags/资源共享问题/index.html","91be52bf77396ff87df9e3bdb5669e5b"],["/tags/进程管理/index.html","c778c635c76e471c823edb6d32b61fe6"],["/tags/适配器模式/index.html","595e5a244019271a8ff07c2e2ae7ba40"],["/tags/通用设计方法/index.html","c301e789a8025e46e3b9b9d8ddb6ca10"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
