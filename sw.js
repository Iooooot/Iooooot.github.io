/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","948daddba0c47c047655c3479a3a4bc8"],["/2021/02/22/工具的使用/博客的搭建/index.html","9442bcf56e35aa4e6d7da03d0656f732"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","6e23ad853815fec1571db192697b91be"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","707aec1cd94592d74456e8f36a82463e"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","dcf863704480527a1e0852aeeae029c7"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","4648434a727450eb7ef6bf0fe6d94c6e"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","6d37aefa046891c50ca9cfc394f87457"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","eaa4e78e014c9739511ea60ef16ea676"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","64648370d9396e48f70aed4952fbb856"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","ec6697693e73bf3aa75def870c354d89"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","851a8dd75755e1e199f7609fdc4a1fcc"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","ada66c2bc501eff6c64f1f1c5fb01c03"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","06109f792514266a9e3f9a36ac51a115"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","0abaa134454d5d8f31599ed93f047fa4"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","90c7c26933bd4969650e9220cfcf3ec9"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","ca028bc7b86053ff3ff577a36b5fd8cf"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","4dd0a3b278faac846e8ef4858bf45cd3"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","8028080f0db318fea11192ba34beabc5"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","e712b2ba7250307a4c71c335b80a1412"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","7ea109ee6d28048e15bd823585f173cb"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","d0c469da41efe48a7415e44f458a1823"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","23601f7b39d9c93693cea029a189ab3e"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","a98afdafdce6429f7a6e26e91ec684ea"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","2d2e7f3d976ee8c3f66985a70b6dc3ba"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","affdccf1980bf8fa19ff5049ad28229c"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","123a514826fa86615949fb126259baf1"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","7ff6640ae033ab0acacf034291fc3435"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","9e62d8e00fd67c4080d3b984c9b2e0d2"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","c7b1e2622985154d75e1de1995dcda7b"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","ec9504dbc34bd817c29f421154a57d44"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","f60484f645fdd15ddb166101c1cfd1f5"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","caf79a09ecfe21944093e373eabfba14"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","f04c2c42e8031fd909b57e398f89551f"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","3dd8af2a0cf568ef2603f760c5502da1"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","6fcbb2f5242971215a969779618ade13"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","5913458c797fd1a590baaaf0e7e43ccd"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","4388622bac45f7511d8d9192409f78f5"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","ec2098bb078dc81e6671c8e8c386e429"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","e8310cd61f417d25adfbbe83e4d755e0"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","fba08fc8d1f593edc62b330e6b2ba6fb"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","7ff3107e12a2f71f3683f6c383c4c9f3"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","959d1d800c6fe6f63fb690002b4f7df1"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","f90e799b02423522d6f80d932163fd2b"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","5b6771e39b6b62229b9e5a3d51fb386d"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","b682b72a77fdcb7836d997fb81ab8b6f"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","2247ed5e37658cea39b57fa60180d710"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","d59fd17d0ccc1412de9c3da434fe2300"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","f7f638f283406c7625d4b275e1741a80"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","64ea07b860bb07c82308719641579cf0"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","cd582e61fe6168c094754d3bb86dde48"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","d0f752da687d53bda92b42d654a77cf5"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","606cdce525420a5e4282252942e19e04"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","00cc7bb734493ef806f7794a2735d8da"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","5c128b54ec1ea9a88f30f76796b16ac2"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","d3897bcc7f705f16503d19e49c485aef"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","49d186cfd29210a3d1efbfbc224670da"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","7de543617576e90589ef1ceeceac1400"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","69123361f210674a3f2eed8f9166de39"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","8342477db1c80c99403fe47de55c389f"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","0f34dc61255952d1ad2f70a174af8dc8"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","a1cc4b9fafc7375a2c233186983f436e"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","e2b19b14ad2cbfe24003de0a158c0e57"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","03c1896d2d10f076a779514b52449236"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","8e9d78efb77602f5e84b35fa68e21fae"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","4fa6d471bcf88a6a0fd8b95fdd884219"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","ae483f6db415124a81b537882b0a9065"],["/2022/08/17/前端/jQuery/index.html","74655cb66ad6b33fb0db495d54960e95"],["/2022/08/19/前端/JavaScript/index.html","e2b13529bfc78a35465ee4967590f846"],["/2022/08/22/前端/Ajax/index.html","12c24aa68ec82c9dc06820a36c56880a"],["/2022/08/23/前端/Promise/index.html","8195cf93f9e124cd8b5cd0bf61ec0b09"],["/2022/08/24/前端/Axios/index.html","17f87a11d2dbfa56332e0ce5b8ff26ef"],["/2022/08/25/前端/H5本地存储/index.html","bd45c0cd7003d0da512b378b36f44ca7"],["/2022/08/26/前端/mock/index.html","fb779ef71b4bfe7ad64249f8398a69eb"],["/2022/08/31/前端/vue/VueJs/index.html","7bc55af20929c2e5503034519e5f0191"],["/2022/09/01/前端/vue/vue组件化/index.html","0ce63f53560f5206712e28cea2214d0f"],["/2022/09/04/前端/vue/VueCLI/index.html","c5d2008babaea9b845b9350facf93d1e"],["/2022/09/07/前端/vue/vue实现动画/index.html","e80f9601060f838f584645f79b294b62"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","7e8c6d89398fe566c594df30e224ea6e"],["/2022/09/10/前端/vue/Vue异步请求/index.html","4193ee3fa6ad6f6fa82b2ebc8f808d93"],["/2022/09/11/前端/vue/vue-Router/index.html","85a56c9efccd85accf0e3e1cdee18426"],["/2022/09/13/前端/vue/Vuex/index.html","cc3e6eb2e6776dc65ca967001eeb4bc7"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","9bd618e8dae59014c9e8e141f065ea0d"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","054005a0637112269cdf3dce6c5b9ae1"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","f9c70fbb3afabbb4c43e465de2a67257"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","a97bae18c0a5b7b6e8fef5d525d5bea6"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","fae9b073c25e12897671f5291f9368c8"],["/2022/09/28/DevOps/Linux/Linux/index.html","d7e20d6476a4e72f371a68ac2ad83f10"],["/2022/10/02/中间件/Redis/redis基础/index.html","29dd066862e75de59b9b4abd5dd1295d"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","0de458a68e808d5122f83be7ce8f6ab0"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","83fcc845a2c4750347ec134f26b71eca"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","3834d3b065cb89230781864cece2567b"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","95538ff33e652d53a52bfe70a5926564"],["/2022/10/17/中间件/Redis/Redis集群/index.html","34cd942c46591d0ea271a6c3bdb348b8"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","11b9f413098328317895e436164a19bc"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","9c19994dc3acedf6c79268dfd732bfeb"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","ba358bf29ea496e63184e7367be69f32"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","7cb770ac6451ee4cec9d9e940fb3db7e"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","5b9895bb0762fad77d57a93f0309d0cd"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","7c794d6194c9574a0b7d9c4f7c5f7bb0"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","341991461f3c1a8415b555c53f9899b0"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","16786cdea2506072e6ab0e5578b5ed82"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","5513e1091042a35c1281dbd77f10dfad"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","319887e97ff1969a161ab1c9ca41f08e"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","1d0adee7b3b4d8ce5ac83a388cc6cadf"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","08e1b3348c36bb1f409f6b81d774b267"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","5ac61b38cdb11c28005a19871f4d0114"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","6da4ccf7b642a2a0a65893fb34bb40e5"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","60023d1d21176e20a1e5e4d0b5d26c5e"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","00ea0cddd65b4a709a1cdd4eaf42b76b"],["/2023/03/10/DevOps/CICD/CICD/index.html","1ce908cf134371f3b95d04fe5837c964"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","ec279aeb6121e7e5a016d69e5cb5e54d"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","a52893fc3fc3b37cb1da9c27d581ff22"],["/2023/03/13/Java/NIO/NIO/index.html","7d8a8de8cef7f30f2d964fa620fb8a7d"],["/2023/03/14/Java/NIO/Netty/index.html","1a735b7594ff8fc6aa5906be7301bede"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","bcb014cf25eb5ccb6730b4e3dfc213e2"],["/2023/03/17/系统设计/分布式系统认证/index.html","3d272a9cd52d57441da06785c35697d7"],["/2023/03/19/Java/JVM/JVM概述/index.html","7cdd550e128b15df7101513264b3976d"],["/2023/03/23/Java/JVM/类的加载过程/index.html","a483b1ee88f439701f4ea1d7041d96ce"],["/2023/03/28/Java/JVM/对象的实例化/index.html","e932b6232185d14e38d8b68c54fa936d"],["/2023/04/01/Java/JVM/运行时数据区/index.html","00432326f1a27fd9028ffa3bb7810df2"],["/2023/04/04/Java/JVM/执行引擎/index.html","90b31ac859e9489d4bb87554ae06e1f5"],["/2023/04/06/Java/JVM/对象引用/index.html","8ec1810b55807d2d117e21bb895c84c9"],["/2023/04/09/Java/JVM/垃圾回收/index.html","a07e4c205f1b3d200ddc96fbb851c772"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","f0fd90973c846296296363555b7fc0fa"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","89d493ffaa2bd8890a1bd9543c21b6a4"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","ebda0479218ef94cbaa77a565c29ff6c"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","b2289de47439179ad87b7bff91f40b63"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","8be8acaa2a8b5da36b52a3f715561e49"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","19f93e465a927776c7ef4a4c647ab6eb"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","9df64c490e791288a9638c46522bb7b4"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","800095f844dea1695920cfeaf794eea8"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","22ba0b7d436122ef16c1e2ecad013085"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","f9732dc4ad7ae62fbfb982e4e864f05d"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","8da281ec0be1190255385179294eb0f3"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","138d858adebb0329b3afab11c05db04b"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","9464a483b99e4fa2b8f33164e7afba82"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","3fb7dc103145e903b0b4e80588969b8a"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","b57e5cf8e1919449934cdb51cabea7af"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","436d359ce0a33bc0e26cf5659e276409"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","69b94ba8663138d6460d0b5493dc1f87"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","4562492dae7a4c234fc2ee6c2b4362f4"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","4179c5855039befb5886f26f2328ecd1"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","7b9e13a691f328e3ff9b922884c8170e"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","549d64374b2e2e1b2450d9b0cfb2db5c"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","c015911bb6fb4eead81decce1221a996"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","755680c6b840a6dd627331de6c642c5a"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","9821c7fbbc18e2a797a72c4e635f5af2"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","d3990f5d4f03662baa139a336ef18c1b"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","e83268666d4b1ed277ed7ab4ce384786"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","ca2974f46aca8d1061a884e992cdfd88"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","3d94d0be9df2e959751b1188fc755e7e"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","2963a3e4b374dbe8e1e67e0a061fa8ea"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","f4e50db044ec0430b46ccfce5ae26d47"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","daa8caea5fb87556e30d3a83be874919"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","59f4df63c1020dd4812f0e3d38fe3dec"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","c772f326248086f315c439b7e6f4cdc5"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","fcd1891e7f837cc1dac2740d768701f2"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","95a626b285edb3e885a5982b49337d7b"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","3a299e010bb42341f2c7aa7fe93eb000"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","3fa372af950224421033c36689979347"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","b282c71941099b519dbe3fb13113bf65"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","affcec1ca51c8414c0fd5a95dc5c253d"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","7c14acd1d61499cdcc3ea6118f54d40b"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","e572839b19c94465acf0304afeea1eb8"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","82e8dcfe428b6d493b616146e4f32359"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","245e2ce0d20f2382675d4cc0d2763fc1"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","98f020b057b6b42e3fb322243f47499f"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","97ecbb642861eec672a4a215b52ad62a"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","98f8907cc4ced2ecdceb630bd476c213"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","844e98e178e25b88a11f3dbf30e30c0f"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","d6d87ca30c48a3a46f558f96919c28c8"],["/2023/08/13/Redis实现消息队列/index.html","d3194431b78aae729e546cde1795e00a"],["/2023/08/15/Redis如何避免单线程模型的阻塞/index.html","ee5885d3ffbd10c62e46ba21394bffbe"],["/404.html","020108776732cd3077fd16d3a98e063e"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","2897bd92baea0b327fec8b18c72399b7"],["/archives/2021/02/index.html","e6d38a2202a361558c2adefd40daca13"],["/archives/2021/03/index.html","ec9fc92a17c2e108bb5e1056f26e6c67"],["/archives/2021/03/page/2/index.html","0aa964309f188531eb619a961e189463"],["/archives/2021/03/page/3/index.html","b90f99e64c43f415e36a20fdc2c4518c"],["/archives/2021/04/index.html","7bca573bb7ed8b3b52c64d09966ae6cf"],["/archives/2021/04/page/2/index.html","bf13fe06f2f34d43ae0685a3eb9f8945"],["/archives/2021/05/index.html","bb644abf8cc2bb800f9172dfc12dfee2"],["/archives/2021/index.html","3c98c09a67f29c993786dfba56dac1a5"],["/archives/2021/page/2/index.html","789294abc42a921388abd1fc1bf928d5"],["/archives/2021/page/3/index.html","e5a4856d87b522c488ba6d96814e2ef8"],["/archives/2021/page/4/index.html","37a8c2b27ba28ea9b9f007664ee8d5ce"],["/archives/2021/page/5/index.html","066fa5c7ee5cffe487d80e8f9ae3ad3e"],["/archives/2021/page/6/index.html","561eff6d53a933f5d309313d2b1881ca"],["/archives/2021/page/7/index.html","0d668b734aa000b75f1a2a49c742e4a0"],["/archives/2022/01/index.html","32b0dc63d70fb3931bc0ad866398234e"],["/archives/2022/04/index.html","075c280952abe5c3526ac88b4fee439c"],["/archives/2022/08/index.html","7ed0544efdff78d446c3d1c102d01922"],["/archives/2022/09/index.html","46b900e80fc65fc568db0d0b8203b964"],["/archives/2022/09/page/2/index.html","e73b64a0227abf76fc517f641bdb8916"],["/archives/2022/10/index.html","e09663ecabe434052e3771f6adc4344c"],["/archives/2022/11/index.html","9f6b623e80361d38679ec3ff646b2039"],["/archives/2022/12/index.html","09f6394e793908f1be4f3743aa43ecbd"],["/archives/2022/index.html","84fe42eaed2423a7f3bc5d1d5f547bf0"],["/archives/2022/page/2/index.html","b9e79c2c0991600211c9dad60acdc4fd"],["/archives/2022/page/3/index.html","54d66b5b89f549ae1b9f9fa015f706a9"],["/archives/2022/page/4/index.html","6eec3f14d4bfb499873f88b3e73a7912"],["/archives/2022/page/5/index.html","52dd28d35df60729bffa94fe7754d86c"],["/archives/2023/01/index.html","1fe64d741710177f9efa5a150c96fbe9"],["/archives/2023/02/index.html","d3301b663d13cd3255a531b56a283a66"],["/archives/2023/03/index.html","2fa17c6fc9c17730b160384cacb09367"],["/archives/2023/04/index.html","bc710c9ceb86fc98bddd6b93e06217d8"],["/archives/2023/04/page/2/index.html","ef2ba265d4d4ed712925792d59c636c9"],["/archives/2023/05/index.html","7f04497deeedea4319f4696c68332780"],["/archives/2023/06/index.html","9c4fbd88262344586079131da5fc34ee"],["/archives/2023/06/page/2/index.html","7df1c1fb1ddf17411d64d9aeb4a43022"],["/archives/2023/07/index.html","468ebe07cc914c26290e75cfd8d6a47b"],["/archives/2023/07/page/2/index.html","6f284b9a671a9d5d92bde6e96e40fc0c"],["/archives/2023/08/index.html","20a67ea5ead8aa864a32b7a9041532ff"],["/archives/2023/index.html","3daefd1bb3151b274623bfcd100a93c5"],["/archives/2023/page/2/index.html","f4479fb307b9ad59bd0a602cd37dbb8e"],["/archives/2023/page/3/index.html","f90eb800b2f94a5ce3b5b5d909a72869"],["/archives/2023/page/4/index.html","0862e25181fabd76952e71de69394f18"],["/archives/2023/page/5/index.html","846bd6861c43faad4823715c97f2d0d2"],["/archives/2023/page/6/index.html","54e79ca771f4dcd00eae2bf42e7aad28"],["/archives/2023/page/7/index.html","e4d76233eb5549860728e974b82be739"],["/archives/index.html","c8d16094c20153fbfdcc043e604f1020"],["/archives/page/10/index.html","25c743c6e1f88015f1d2b29ce3a3032c"],["/archives/page/11/index.html","3dd74230ed4af086b40b088eb7ac09e9"],["/archives/page/12/index.html","c875e533bb8a043c89840039624c8093"],["/archives/page/13/index.html","34d8cd4d2a3cd8eaf281570e5220be94"],["/archives/page/14/index.html","ed515b3c78a84ed90417f89ad59542b3"],["/archives/page/15/index.html","80747c025e198a8ff81eba09f5813cff"],["/archives/page/16/index.html","0d936d8639b710ff550a65487046a8f1"],["/archives/page/17/index.html","acbd9feb4eb0330f8f3cdcc7292b32db"],["/archives/page/18/index.html","051a5a765677159c76816e4c1a610699"],["/archives/page/2/index.html","738afd99ca45d1e157426cc0d32ee1bb"],["/archives/page/3/index.html","b8a4c0a4713b397419f20544902f2061"],["/archives/page/4/index.html","2c1acd6790f07e84435985d18871efea"],["/archives/page/5/index.html","cfe07d986908db61596a838fbcf3a6c9"],["/archives/page/6/index.html","037db9e713ff867d9b8958a2bad54a54"],["/archives/page/7/index.html","85d923e58e57eb9cd9887cbb7bdb13ab"],["/archives/page/8/index.html","1d9615df963d6999f5980a5384590add"],["/archives/page/9/index.html","4edde7f0e740eeb63d1469a9824f4e21"],["/categories/Devops/CICD/index.html","270dd20de5da12863ccbbf66d771ef2c"],["/categories/Devops/Linux/index.html","0ec7bc3f733fe4bd7abfd726feb889d3"],["/categories/Devops/index.html","3ef2b7d2c537e550e9736077237f88af"],["/categories/Java/JVM/index.html","6dd1f6906d715d6a7687246db704ece8"],["/categories/Java/NIO/Netty/index.html","15395fbfb9531ae4d4917b197d18953a"],["/categories/Java/NIO/index.html","81dcf4e18d6e5d0f12d9a3e639c11deb"],["/categories/Java/NIO/原生NIO/index.html","2b2d5e6f77ccca8c1d9f294399ff7719"],["/categories/Java/NIO/文件操作工具类/index.html","787a12eff25d2f1313c5416f5606f624"],["/categories/Java/index.html","7189c30213eaa7624908d9a9e69fcf07"],["/categories/Java/page/2/index.html","de7c686893d2fb9485dce8cd6345f26d"],["/categories/Java/学习路线/index.html","e97d7cd18c994c0598bdc347d5c82423"],["/categories/Spring全家桶/Spring-Security/index.html","32c6d23f17dab5c134a6efb668cece65"],["/categories/Spring全家桶/Spring/index.html","fcf2a17b97ad156be65b1ef9a52d7904"],["/categories/Spring全家桶/SpringBoot/index.html","42f48d69021ccd85966cb7632ebf7bc3"],["/categories/Spring全家桶/SpringCloud/index.html","1d59f9719df90858decf5d037570d4a9"],["/categories/Spring全家桶/SpringMVC/index.html","b5ab7a494d05d9e7d14db5a374d942c2"],["/categories/Spring全家桶/index.html","674cf57a3b1c3b1789ec8f94eaf0c4fc"],["/categories/Spring全家桶/page/2/index.html","47ea33f911dcdb5634212f2a21d15033"],["/categories/index.html","5e0be0b27273cd04983239ae25899184"],["/categories/中间件/ElasticSearch/index.html","254b054f70fa1e01b06752de47e88a9b"],["/categories/中间件/Redis/index.html","c20bd253554f1e4385620e594792d8f3"],["/categories/中间件/Redis/page/2/index.html","5d0978e160b506221e2fe98224214efc"],["/categories/中间件/index.html","c8dfebec5e0d2b794c247fbc14e2013e"],["/categories/中间件/page/2/index.html","ced9a83244be2c3224bf9039d5ace6ba"],["/categories/中间件/消息队列/RabbitMQ/index.html","b5027583c099ab9ce91774d954a0a25d"],["/categories/中间件/消息队列/index.html","e5f227675516b1dfa0062227f38c3655"],["/categories/前端/Mock/index.html","7b8679cddece6a91e2f692c47ad5f1a9"],["/categories/前端/Promise/index.html","f7de4a338c41979eb633f5211d363a82"],["/categories/前端/Vue/index.html","d8c9af90a7f7ebede2ddecd488f4cd6d"],["/categories/前端/index.html","2bf054912c8f77474513c26de28a99ca"],["/categories/前端/jQuery/index.html","37c2a948de580cf4fc57f4236eb7e120"],["/categories/前端/page/2/index.html","f598279151b38362fdf556b2e3ea43c1"],["/categories/前端/原生基础/index.html","39f1d169ce30d499197b4046965de4b0"],["/categories/前端/异步通信/index.html","37e04c750cdd12d5e03e9efb8758a0c3"],["/categories/工具使用/Git/index.html","a1c1d16fc16156e0bc24a360d3a655dc"],["/categories/工具使用/index.html","437baa5ccb2ad0e5972914d7ebd32e30"],["/categories/工具使用/markdown/index.html","39ca3ea27953781a871fcdbbdcbb6c82"],["/categories/工具的使用/Docker/index.html","4f26b3c7711b1eda43a6be3589fdb8fa"],["/categories/工具的使用/Nginx/index.html","22ff466e137d734c0de8e6aaa4f7eb8d"],["/categories/工具的使用/Swagger/index.html","2f84ad80172b3bc5778dfd95779f7cc5"],["/categories/工具的使用/index.html","fd48e03c1f46ec4f17d0fdc09d8dd51c"],["/categories/工具的使用/博客搭建/index.html","8233d7d1040e7a02fd9c8024a61ce464"],["/categories/数据库/MongoDB/index.html","453e1f6bebf439b5c8be4536cf5bebc6"],["/categories/数据库/MySQL/index.html","d8dba9a131409b632dcc1064e6b434ac"],["/categories/数据库/MySQL/page/2/index.html","99d90699afce3d66e36ca79226b955f3"],["/categories/数据库/MySQL/page/3/index.html","727490f2446d83494a2a873a20121eb7"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","de9f3067a5ffd629947a7a4f43e5a88e"],["/categories/数据库/ORM持久层框架/index.html","09dacefecfdb7713eced25f54e0495e1"],["/categories/数据库/index.html","8b934c75123432b30a37e80718cebec0"],["/categories/数据库/page/2/index.html","a27300f18f60a047a992d0f16d70e6ee"],["/categories/数据库/page/3/index.html","fad1b6e5ece6a410eca7809e6d76a460"],["/categories/系统设计/index.html","f91dc40836480a7ae77bacafc81dd611"],["/categories/系统设计/page/2/index.html","9b616a3834f0b18a96856d6c9dd5123e"],["/categories/系统设计/分布式权限认证/index.html","7a19fd879c8ad9556879df1169c7b164"],["/categories/系统设计/设计模式/index.html","8ddaecf890b375762206b41b5743bad1"],["/categories/系统设计/设计模式/page/2/index.html","83ca2dbf3359c0ed73ac85acedc4278a"],["/categories/计算机基础/index.html","8309d349d8f93e5102dbe2fbe62185cd"],["/categories/计算机基础/page/2/index.html","27fb951419cfbda3d15e2823c802ea0c"],["/categories/计算机基础/page/3/index.html","1bfa44767821f42da6d2fcdccb3eea4c"],["/categories/计算机基础/page/4/index.html","fd673c4eb46cb224a7621ecc6b3f6714"],["/categories/计算机基础/page/5/index.html","5c7c447c646d0570d4c1766d76bd765e"],["/categories/计算机基础/page/6/index.html","9239983f35bad813c22a996cbb91f16e"],["/categories/计算机基础/操作系统/index.html","a39466911c341a13f72115ec0662d6e4"],["/categories/计算机基础/数据结构与算法/index.html","acdf3bc64f210a38436b28e71bc15f7e"],["/categories/计算机基础/数据结构与算法/page/2/index.html","0676d49d6866a51c888e43b55db24a19"],["/categories/计算机基础/数据结构与算法/page/3/index.html","fb14f4fda9b535177b87be3bbe7da5b1"],["/categories/计算机基础/数据结构与算法/page/4/index.html","d555d9696a82c1c6fb43319ce4e71372"],["/categories/计算机基础/数据结构与算法/page/5/index.html","389fc20deafc2c3accca98cff74d93da"],["/categories/计算机基础/计算机网络/index.html","6e0ea81997ee1aa3a51a58a76b948523"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","3e738c78218242224a22073cc9f7ad0e"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","ec8e174c90881271ed2cb6a2c18ed9f9"],["/messageboard/index.html","d10f9b4c2e1db8bca06babe469ef4e98"],["/page/10/index.html","592fdc7db9f69e7994d4afbac61670b4"],["/page/11/index.html","4faf30302b0d180e823f07fb25602e1c"],["/page/12/index.html","0dd588bf3a7cc3959b78ec04dbbe8a17"],["/page/13/index.html","f8fdb6542ebcf38d2858faa95854f848"],["/page/14/index.html","20d7700f346a6aa166bf2fdc4c6b526a"],["/page/15/index.html","aeaf4ce5971d99693b4cf236f218a390"],["/page/16/index.html","30e031240a5318cbc51628935afac005"],["/page/17/index.html","11608dc12c061fee065ce5ff2a9c870c"],["/page/18/index.html","0f022df3e39eee976ee4bf320187b0e9"],["/page/2/index.html","c9723f310e552cad56ef1247685ef897"],["/page/3/index.html","27fe4567682daab29a38ee672434f867"],["/page/4/index.html","450546e4e5920e787b7e77eb7ddeb6b0"],["/page/5/index.html","c241373aceade20e7d01c1cacffbf215"],["/page/6/index.html","fc28ff664c9e1e57d99608569c424dbc"],["/page/7/index.html","dce0cc82b6dcf8f12f68cf8c5cb2661b"],["/page/8/index.html","4f219ff480bb9171562906642fa539fb"],["/page/9/index.html","f4b40e5ea0a5e19fa66e7b8933adf2ef"],["/sw-register.js","dbb2fc6275479c1da1a8dc273d42e266"],["/tags/Ajax/index.html","3f001ae1a026550b9bc5d08d63eaa539"],["/tags/Axios/index.html","65d656209ced41ce97003beab5ccc4ba"],["/tags/CICD/index.html","9a2c1c24f88e0cf0d7ea492d152a3043"],["/tags/Docker/index.html","ee14480bc378d4ca7708a99110b06bca"],["/tags/ELK/index.html","2cf5711e4f0cd05a46fd5d9533a6513d"],["/tags/ElasticSearch/index.html","bddedfc4ef91b2a7cc788901962ec24f"],["/tags/Git/index.html","1121800a01f8c906e09d9a9342929837"],["/tags/H5/index.html","6e9a8e2a1093886827755ddc10653553"],["/tags/JVM/index.html","4d2a683cf582e7ad639b159890699069"],["/tags/JVM内存模型/index.html","a55f04f23df064be27dbeebb43da7337"],["/tags/JVM执行引擎/index.html","c6be0b793b6221d9600d60049068662e"],["/tags/JavaScript/index.html","fe9fea8e7a28680382e4ec9b93655a54"],["/tags/Kibana/index.html","2203a838b2c66407a3d7069e9be4197a"],["/tags/LeetCode/index.html","ae8defb9aff7801f33e9846e82faea70"],["/tags/LeetCode/page/2/index.html","26b797f76c8c5976bfb02934cf68185b"],["/tags/LeetCode/page/3/index.html","72b7400db921629fed6c4a23159290a2"],["/tags/Linux/index.html","22c1c8e4593628a9b94562cc10cc89ac"],["/tags/Logstash/index.html","bcf78e7391638753a1fb4e95d7217e21"],["/tags/Mock/index.html","100a77fb587f4a21cbf001a47f69dfb9"],["/tags/MongoDB/index.html","65b1f36fd7dfd84d0fb2f9e1c232c21f"],["/tags/MySQL-事务/index.html","7ef1f64b88395e008e52b0b2eba94401"],["/tags/MySQL-数据类型/index.html","f311f06db23713196704df6a36a02bcf"],["/tags/MySQL-日志/index.html","a5a9c71c58028a8ede069f25797efc74"],["/tags/MySQL-索引/index.html","76703ccf220891200dcc0c745a482f5c"],["/tags/MySQL-锁/index.html","3ae92d2a204266c6a1122f2d3358f25b"],["/tags/MySQL/index.html","e3d3f15586d2cc48d7c5946bea1ca510"],["/tags/MySQL/page/2/index.html","19a802b1ddfadbc309c3518f100ee4a4"],["/tags/Mybatis/index.html","849b5646df484a507f6e2157f19d452d"],["/tags/MybatisPlus/index.html","7c76ff484c97adea3348b23462b73b7b"],["/tags/NIO/index.html","78cd5cc508598d7986abb31561ab90c2"],["/tags/Netty/index.html","e905babfc84684f932b26562a674d014"],["/tags/Nginx/index.html","11fef539654a4339dd0a508ee0aa1b24"],["/tags/Promise/index.html","01ec1ee2d7877234979515f9a276a21f"],["/tags/RabbitMQ/index.html","6412ce9746c82cd654f7802ae5472cab"],["/tags/Redis/index.html","e48a65acb48b5531cc77c8e69c4f915f"],["/tags/Redis/page/2/index.html","f6d202598556a8ed3bcccc421a26c103"],["/tags/SSM/index.html","3dc4b9ccfaec928f0b056e833e1b5da4"],["/tags/Spring-Security/index.html","8c124d2a9c6dbee4fa77c617e1b1ca02"],["/tags/Spring/index.html","6c4ef39738d5665b6d3b08546547ca9e"],["/tags/SpringBoot/index.html","108ecf368c4d56491f9adb8e40fb401a"],["/tags/SpringCloud/index.html","1dac9d158c0ff17acc2a42a0927d3b1f"],["/tags/SpringMVC/index.html","ac4b63999bec21e324cffdaf967a9590"],["/tags/Swagger/index.html","366888db5fd4b28e1e58a775f18edd37"],["/tags/hexo/index.html","b0a2c2c918089ef7ebf2ba6431f037cd"],["/tags/index.html","30a296024a639639724b9ccb1719363c"],["/tags/jQuery/index.html","df2aa3bb5dbc201f09106e08bfe7f230"],["/tags/java/index.html","3d92c6fb9d7975a29c0b3cd4f502b775"],["/tags/markdown/index.html","eebebd47d76bd06dd3ed921d09c8056d"],["/tags/noSQL/index.html","e591df5e383a883d80b9aa54b7692da6"],["/tags/typora/index.html","868f3882ee175df135938143ec82522f"],["/tags/vue/index.html","ec20bd805ef29d50f7288e585eddf5dd"],["/tags/享元模式/index.html","d005759a573dc9b2b07e0872db81c030"],["/tags/代理模式/index.html","f113f74ac1eaaf3eaf6e536eee8b7dd3"],["/tags/内存管理/index.html","1d15f109a7ab64eaaa0987c7dac177da"],["/tags/分布式/index.html","cf101268e5c713c04550014d1c352f1e"],["/tags/分布式系统/index.html","d4688a73ecb6b722b64fd9fb13aae8d8"],["/tags/前端/index.html","19db874e93bd54c9f9c7ce4ccc823483"],["/tags/前端/page/2/index.html","f5db9a63977eac6bdc113c63f52f392c"],["/tags/博客/index.html","cabb129ee345285b54848ad5011fd467"],["/tags/后端/index.html","7f5bb0b71ca07372216c66f8e48cb654"],["/tags/外观模式/index.html","a82e90facb53f4ea19ae8a7dc2104468"],["/tags/容器技术/index.html","0803bdda1f5e5d47f002ce9cde92d0c8"],["/tags/工厂方法/index.html","b7f52b8b17b194ba38f937433038a09b"],["/tags/微服务/index.html","759218609ef821a9b387f905253e7f7e"],["/tags/抽象工厂/index.html","e09e22b423b9bb75408aea9054b306f7"],["/tags/持续集成持续部署/index.html","d9a2ddeab11e463e676a7990824717ac"],["/tags/搜索引擎/index.html","1713f6b66ce9b4080ec84d6f05a4b45e"],["/tags/操作系统/index.html","de274416707ab94a108800467f308910"],["/tags/数据库/index.html","091f9444e7080c2852ca1e3351ceea84"],["/tags/数据库/page/2/index.html","7157903d3c94393c8fed84f860257326"],["/tags/数据库/page/3/index.html","8f1b60f6133ecb6107103eda3c3da96e"],["/tags/数据结构与算法/index.html","2217e369a5bc4e2f7dbcd8b4f33b09c2"],["/tags/数据结构与算法/page/2/index.html","04b22c8ca03127d33dee4f5e61e2a25c"],["/tags/文件操作/index.html","d7cb0655b8bc432932e0c21bea8ef285"],["/tags/日志/index.html","47081c6f7c82b390db390004dd4f2b6d"],["/tags/服务器/index.html","9f13b40856cfaab664457a40791ea4e9"],["/tags/权限认证/index.html","85e6dea619957129067012a6dc4b50a7"],["/tags/桥接模式/index.html","c18191827b6bd2ca3d515dfc7a266da1"],["/tags/模板方法模式/index.html","9f50033ada5b761f3b145e3f294fdab3"],["/tags/死锁/index.html","dbf1623f3c13764501f6267d3bdf3005"],["/tags/消息队列/index.html","564a795d70d806f0464ef89136018826"],["/tags/版本控制/index.html","dd37e0254af004caeb7f5e0b2ed31a62"],["/tags/策略模式/index.html","8d4faef9ed995e38c7f93b41ba5fa3c4"],["/tags/简单工厂/index.html","dc3f2221344bbf91b08feee7feb38884"],["/tags/算法/index.html","cbc7c1cf5a7fcfe890620a4ab2ebc9d9"],["/tags/组件化/index.html","c28b985549836f1ed49097a2ae257613"],["/tags/缓存/index.html","a02dc9f64d751c2b8bbf66f31b943fd2"],["/tags/缓存/page/2/index.html","b5179a309624f3a1a96ae40999750ea5"],["/tags/观察者模式/index.html","54d93a03df5a3208df6394dbfb42e6e6"],["/tags/计算机网络/index.html","a930c97052078e19de2b90ddd6a18f65"],["/tags/设计模式/index.html","25e6685b973e46363d1b79444ae9e178"],["/tags/设计模式/page/2/index.html","fbde8d7c153a1070ec64f945b0d78573"],["/tags/进程管理/index.html","60a41a80988eb7a1fdb6cea07ffa8701"],["/tags/适配器模式/index.html","effc832232647c7ddb27fc6c619a93d1"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
