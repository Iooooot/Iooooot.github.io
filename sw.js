/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","0327b2d98d5e196e85e8f2c2d95e7260"],["/2021/02/22/工具的使用/博客的搭建/index.html","d89bcfa1cc4dce2e6ba97f7bf40ecfcf"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","8946728fc9ab2e55b09f2211544dee65"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","fd6fc32ef96cf24a234d21cf983ff684"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","e8fd6b18dfbc9f4ab745b5a4608a6c21"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","f36759955f9a12189431c2900fd1b01a"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","2887d3f82a64407c01e72330b9ca1279"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","c9aa70fa83ff22c61d37fec3d8d649bf"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","1476f643e2c2e3efb8c44102676f08d8"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","ed1535b92c7bb5c15646a1ae550cf7f4"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","1aa76cc539c5b484fa82de9a9eda1e96"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","1dc9fa75f6a65dbeec9f9cc95276c32d"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","8b88266476d726e3f576231944535815"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","cee4653ed3a9d9bb8dfc3fce56b4498b"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","be496b0de1fe6c58c10b493201775566"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","636623e862e71468a8510563d543f3bd"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","baa8c8729152e37c6f661304b7dd3bea"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","f121daf324b1a512d382c758e982c7fb"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","c0805ab4b49a4ba39f0fdedd4566cf68"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","8bfdfff4112c38b4c8bd7103a30dd1c8"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","caf8941203902ee53d72f3893c3874f9"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","8769708b35d16edb36c09d02a97fe09c"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","ad4318feb1e3563ac691f5ad20693045"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","dc8ee13711be578a94ca5fe4f8bdf88f"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","e8ab7b5b9c09f2f5c601379e4a387021"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","a20ac5b42ace2e58ea27a302bbcebae2"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","71581a60d65992ef62aa40b7dda315da"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","df50fcfc7054f68600e2836d03576e69"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","eeedb6499a91a3bd3250c5d3cf34b1f1"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","38cf7a7a8e651d93bdd4e77541a85f01"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","4dc820514cc671273482c25eb016a067"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","bd1ece939a3101801be027f295f03fc9"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","68b23cbf53432e79ca1882da92588c56"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","5f6126b49453e25aaf69da91f8562725"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","54fb4775c9ede76e94afcfb52cf687a8"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","993687d217a8a5fda0e61fa7c80c7515"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","ea7b7e6f8b04cb3b74bcb715c7da81f9"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","74847c47d08cc7d999e07348b06cf397"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","1486239091ac8e2550cf0bbb55f18ce4"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","7010852192c5889793bd99ffb21f9005"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","9a42ef3a0e2ef280bd13a4431e839793"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","88b4f3fb7f1e7f958b9ddaa568526f4c"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","4a72841069fb640b1ce42b1892fa7e25"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","afcbecb9e34fcd72d81c681213409186"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","4b8fee10c9feed110807019368649362"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","2190f2c79387945e0146b3ab0b4cca99"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","790b89f874e95458346702c038ece524"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","bae9e87ac47329c246426923377bf89a"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","cae6930a2d235ba8db45525d8847297d"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","6b9f3f2fbab1148c1ed81c75d6088c7b"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","881f1ee80c2b0f8dd117e1ee82ce2332"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","ed1b80e5d340dcd97baed73d75edd62b"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","a53a51969bfe019d46c745fb7efc081b"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","0fdc20e13f409d2248426b13e97613fc"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","dff0023080200f9c0cb2f2fcb64f1231"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","02760b4fc6603e481660529a95b1baa8"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","b7a6f80bf2e5ed134866945fbf01601d"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","04f163077f6b128fe59c1382debebb8a"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","6559c3f5fe2193b18314723a6bd87c41"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","7b6be3040ff20642feb708456a2bdf05"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","354458eb41999b354219eb768788d125"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","92af421b56aae95c0b67837fe8a10a30"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","2d2c7314e880d5f3f37e4f5477e2b770"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","0a9775c0cc04845e46fb6ad720ac40c1"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","d125bf16d8d387fa4dc9c3836be9da27"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","9d837b0d3418f1fef2061e1eb713753e"],["/2022/08/17/前端/jQuery/index.html","db0249613420f021bb842d4ca4721c9e"],["/2022/08/19/前端/JavaScript/index.html","f1d81d766531d8968f3a313ecd5cca1c"],["/2022/08/22/前端/Ajax/index.html","88f81bd592019ff7c243cc8efba2ba06"],["/2022/08/23/前端/Promise/index.html","5e9f3ee65cf79b0fc613e6f672789357"],["/2022/08/24/前端/Axios/index.html","0e3d781ecd4989e874a1aae44c6270a3"],["/2022/08/25/前端/H5本地存储/index.html","eb0f79f631fddd165f0b5d50e0e3b87f"],["/2022/08/26/前端/mock/index.html","8161f8ea8069dc6bfe7753b73df89c3b"],["/2022/08/31/前端/vue/VueJs/index.html","b1ec40c877afc846b5879128563798f9"],["/2022/09/01/前端/vue/vue组件化/index.html","e30cf12f4bca6b8d5e0ce62dd91d8ce8"],["/2022/09/04/前端/vue/VueCLI/index.html","38f8c4ca5f70070a2529fea74971b689"],["/2022/09/07/前端/vue/vue实现动画/index.html","89369dbbbcb796adf44263d05ff9d760"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","cfc99cc6037a70ddc9d1688e3b2cca71"],["/2022/09/10/前端/vue/Vue异步请求/index.html","c7d3800c99d63d2951b6d00c90db5ab7"],["/2022/09/11/前端/vue/vue-Router/index.html","881c3954a8496794d7a3eb0f7bd0c23a"],["/2022/09/13/前端/vue/Vuex/index.html","ad94870536652ab25b9df95f29605726"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","845450ba53fa52b87321649cf927f6f7"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","805e86340e124113768f22528a8be989"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","7070737d4d2d3faf8e717f3e3c566589"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","cf97dd4e4f776bc12d3ee366dc264a57"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","3d1d48b2bb190becf99ca8c4fa0d205b"],["/2022/09/28/DevOps/Linux/Linux/index.html","cc392900548f7c530f7f2f8ac5783d78"],["/2022/10/02/中间件/Redis/redis基础/index.html","c775c5fdfe554e69b048c1e03cf7222b"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","64956abd19c2500fcdfa8d81b644e0a1"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","298bba230553c1971dbeb642a8de0449"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","f44dc0d5e83e27fa4c6a5bf570a6c31b"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","a7659357fc267cb9084882045bd52727"],["/2022/10/17/中间件/Redis/Redis集群/index.html","7117538d7a78c5c54a10ee827f49f228"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","f4ad401f4f2f0391aee6c4291cad3406"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","41da566d022fcd5f3efaf1e64ef24281"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","2c8c5b810f55df8ab6bf010b829d5b37"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","0970e0a6d272785e5a854ce62187e1c6"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","752b30f8c64e0c0ca716da72ab682eb7"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","bf4eda482430b49e4f4c5ad3604f51c8"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","89b3b2e6c05a42473fa23c343e175896"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","24bc2211e7cace09b2e9db303f0b4b8d"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","b4420e86c5233629a3c14364c77644ea"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","aae4b295c5b2d33f96b8078c1934bd42"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","8db67969da6edac0e4e8450bef0ed815"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","886659ecf563d2daa815d5684f5f89c7"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","591dfd50dea7820d69a9984274bf5e9a"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","1de8ac8bc9f34694ef3d75fb3e2801d0"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","354bf37f4cc411c277f68620a31030f1"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","392395b79dfbf1409e7c9e3864397cf8"],["/2023/03/10/DevOps/CICD/CICD/index.html","db2836850d3abf49a6b30c27c71e7f2a"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","ade463365112f64b52efc821c54d7590"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","7c6911f4f4641529d37087746a97f085"],["/2023/03/13/Java/NIO/NIO/index.html","114068cd45081a6435f0bb42ef98166a"],["/2023/03/14/中间件/Netty/Netty/index.html","fb750da4898f09ed7b2f0b2b0a299a81"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","a876fc3a8bb724597d6fd99050b3440c"],["/2023/03/17/系统设计/分布式系统认证/index.html","8c5c57fbceb34b23bca2fd066986a2e8"],["/2023/03/19/Java/JVM/JVM概述/index.html","9baffee10d77ce0d0f559fa1c0c08014"],["/2023/03/23/Java/JVM/类的加载过程/index.html","39ee73ccaa81ce7c3e543d8dcb2b2704"],["/2023/03/28/Java/JVM/对象的实例化/index.html","aa6169c16585d683017a05a57e7f2d92"],["/2023/04/01/Java/JVM/运行时数据区/index.html","13a7c22f2c69fe0d07960ccb9b0b2ed2"],["/2023/04/04/Java/JVM/执行引擎/index.html","d23d6c6772590e5f5f2fb70b2db5c81c"],["/2023/04/06/Java/JVM/对象引用/index.html","ccffc5dd07e7fdfb3831a91cce004930"],["/2023/04/09/Java/JVM/垃圾回收/index.html","bd20aed69f23fe4e1b99965bc6cd7c8a"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","83b83fc37a92d262f59243a5b4b413ed"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","c6eb667ddb9a06b71f63f79bf1533af9"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","aa1778cb353838b113270777429d1305"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","6a58c8770ccaf8f2426e404495fb7326"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","6d7b2fedb9fc828d9ff87f98e5211365"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","8d7f0cfdf29ea49096a177e4fac5a21c"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","23543a58bc8aee74ef588e0740db98f4"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","918ab7a6af80e5d7c583bf237ad4595e"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","0e411a3404b71c8b7f97f8f897ab5c12"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","8fb3da45c77d2ab41637c331579854a0"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","0321ed93c0818650d85a90939d6241a2"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","37a3769f93a861bb257eed9a49813c78"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","422e82f6c4e1e9f88245d0125c92b498"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","a6d2ccdb6839389198f950eb167baf61"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","cb5c2145d029343b3d8b887ac7daa7d4"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","ecd1a03c20231e87b6207ff36f4b2715"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","a56c353b88a869720a132ecfc1b9530d"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","7bfcc6a83ba1d3e40ea6548eb1b3af5d"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","3112c2e782cd87742c5c08434515c2ad"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","ef59b7c3c94b38226a93a9df9307e760"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","29b6f46dd118a4c413af3c98891b47bc"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","06604d07e75e2263ebc88a217d9c3471"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","6faf6a0a66bd93ada0dc0e038ad5b881"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","aa59976fa054f88110f2aa71047dc033"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","908fee81fb5d591a5a048b46824e2348"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","ae8c6d1819a652b90808500bb72976be"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","5600dbe6b874af8040f3ced6ddb01dc9"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","dfcfbea023f3703dc38b4ed58b3dcddd"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","59bc87eef00943edd24e4e9a0de150cd"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","42bf0001e19512e19a9e98a85b3393b9"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","6d56c5701c31fc508d0aff998a9bfcbc"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","741278675c23c946682d844718557bcf"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","0af1a6041b228390f1485472112c8e13"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","05db0c89802ccfd0b894954d3860e9ac"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","c0e0a4a81d1b002392a25c2eaafee0fb"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","c6c15eacab1e76ff005b57224a8b55ce"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","8776de9dd16b15b3d10d484a27b3afa8"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","7c98cd1425d59846d3dd88ce3d85b7b6"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","fa40f7bcce82a59f4b3da4bebfbbfcfc"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","f906a59d0716274c8fdb21829c9ad1ee"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","dba47d35985468ee875a7f2f64516c2b"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","396f78b00a87e8cd4b06ba244d3e17aa"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","cd57def3eea84f3424b00b0f4525edfe"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","277d2897b42cb1f941dbf74dcc52ad43"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","2a217e6df1ecde326d0c63554db27add"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","3616614fda576ea3e4d531c00ff12034"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","6852a82166e6821707d79c47189d9f5a"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","96dec1392d004d3839863406c8061e86"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","e190fba89655d9cb7aa0175ef0bf8e2d"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","55526eb04798a8250333039da00406cc"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","d239205badc9bb859e2b677b0e27be53"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","cafa4b8dc21c96732940f5246664161f"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","4af386336e3b8547ac2fcba7bbc6b54f"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","f5ff11554490865cf58801312eb942a0"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","1929836ed7d5f32e5f14d7e408268e61"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","8952a7eaf7b68ffbaaba717b380135f3"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","16bad6c8ecbd142ab8815b0311f3381e"],["/2023/09/04/中间件/Redis/Redis事务/index.html","86c55f86be04211ff0eb46683bdac30b"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","9f6076268a6b6448381460133fef6d90"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","b0365ddd5e909f28d9127e4c4999071b"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","e29f0eb85aa81876a703d59755eab32c"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","5faa3d7749d4630e3d4fce8e1df5dc5f"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","462f4cf870d932be174ef5bc284a03b6"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","a33d22e3a190df7893fb6c294fe317cd"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","286f1c07c2118ae4dc37015bf4d71e05"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","7a84f7d7e9a41c1594a154457f266774"],["/2023/09/22/Java/NIO/零拷贝/index.html","7d76b8839d9a82c455e4fc0505d218e4"],["/2023/09/24/系统设计/JWT认证/index.html","38a7a7bb24450d49751e9f8364e424a1"],["/2023/09/26/Java/NIO/Reactor模式/index.html","e14a1bbc54f28c8f236589f39a97d516"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","2794815f35b530cebb41fe128a62531e"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","44ad8a66c5ba651b5034198a2b17e64b"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","98d1cc20fe01489905b5258f73493a2b"],["/2023/10/09/Java/并发编程/共享问题/index.html","e2102a523de5c7d24cd5659938708c97"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","707bbeff2bbbeec949764d69c6241bc4"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","ac9fa05a096779df4a688b7b025d9a79"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","d996c9669b660e436c31f3a7afd81184"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","aee3f6a4f6c9493260ff2af54ba6703b"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","444c90ef173de87c1aeda7624fb328dd"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","3d4437fee6ebb631aafe26c061c7567c"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","744fc094a5c91183ab7fa241b8cc8d69"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","0b26ad3a900728ba5344581c01318f68"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","e2d290cf99da99d0cc065a06c4c6bf29"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","e8ba8f04a74db5c6878a3cf42d6be0e7"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","0cb778f083debbfd58390b011a867ed3"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","a51cfd7c5ede8c575c047a52fdf8d2a8"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","5e45056aa64b8c350e8fbd2d3e2e413c"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","79f245fe0e6563bbd2d840c81311a1c0"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","4d577e73d61a58f5a824e6105211beea"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","79271c31aa6e9d5e3f6c9cc684245537"],["/2023/12/05/系统设计/开源协议/index.html","61098064b7b4aa9e64bcfb789d0ffb3a"],["/2023/12/09/MockMvc/index.html","7deb0ebd2504db733bf2696f89b6f303"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","817ea26767d10bf5807cc521b197f7e7"],["/2023/12/19/MySQL读写分离/index.html","bf8be3b29372d2e9a7b633ad7be9b31a"],["/2023/12/22/MySQL分库分表/index.html","f40365fd215f213bb409d4896c4cac33"],["/2023/12/27/利用NoSQL优化数据库/index.html","7e9ffb124de1ea3ca892d45f72f52985"],["/2024/01/06/缓存概述/index.html","6a4543df6b64b579b1d753a1f1c0413d"],["/2024/01/11/缓存的读写策略/index.html","ce1bb43726d7d48277585698aaf2b40b"],["/2024/01/14/CDN静态资源加速/index.html","60f272e0a8972c761b2c9666268c98e6"],["/2024/01/18/消息队列延迟问题/index.html","fb84475a93c0c083be9ad72205f0371e"],["/404.html","2c90d8e35191127b173463376cb51e16"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","83783284c3c300a2d773724ef96ae2a9"],["/archives/2021/02/index.html","2edb1dec4715e6bb92320b25a313e795"],["/archives/2021/03/index.html","407e61cb25333706c483ce9586ac1710"],["/archives/2021/03/page/2/index.html","bc8babe6915d0efc21ad410523600ced"],["/archives/2021/03/page/3/index.html","95022968e7076f8d285f61d8c16da20e"],["/archives/2021/04/index.html","43645493332143a9c7a67b1dd0ddd811"],["/archives/2021/04/page/2/index.html","05452682380b32e1d61868e210ba0bc8"],["/archives/2021/05/index.html","97644d4de7780d9bcc4c7dd46c40eb36"],["/archives/2021/index.html","fd2d2b90ed2bb08d6c15645751950384"],["/archives/2021/page/2/index.html","19d260d757447903cfad2c62f4f8597c"],["/archives/2021/page/3/index.html","47ccad0a2e810169b954775ced425a69"],["/archives/2021/page/4/index.html","4231bdcb096c9c04dad409cdd6c6f33e"],["/archives/2021/page/5/index.html","d28333d1491b458b4b68a1bdb09c5095"],["/archives/2021/page/6/index.html","ed2c97792052db41ae8f392587e11772"],["/archives/2021/page/7/index.html","732161254b305bccb321b73e947b331c"],["/archives/2022/01/index.html","905711dad1f5d0150ac3057bf9e2c641"],["/archives/2022/04/index.html","a89a2c5a2a1db2301782c9fe5fa4f3c4"],["/archives/2022/08/index.html","c08fcd81a76d3dc3eac0626f7bd97ee2"],["/archives/2022/09/index.html","5b9fb27d4c9a73cb166d4b1f4a3f2359"],["/archives/2022/09/page/2/index.html","dcf01d5b6cc27f4141f94a4554f0b035"],["/archives/2022/10/index.html","bf09f8325432168e3ebdad4262775ce6"],["/archives/2022/11/index.html","537640c3b2e46bb050c2a7f70ddbc3f1"],["/archives/2022/12/index.html","d25d351893c5206a6f0eb865b5be7107"],["/archives/2022/index.html","418f61306e6cf99ca77285f95aa95c59"],["/archives/2022/page/2/index.html","73ba94c358688042fbff665227f38745"],["/archives/2022/page/3/index.html","bda7071242d78189bac73e9f126ddd09"],["/archives/2022/page/4/index.html","6d24da42ba12d98db5e13df65f37e879"],["/archives/2022/page/5/index.html","3c9630a5af3c4fefe55c1f7bbdaec3b4"],["/archives/2023/01/index.html","176d5d58048c52e02abcf026b5d3860a"],["/archives/2023/02/index.html","5b3e150f0454405735e464058743e826"],["/archives/2023/03/index.html","328bbcd47740d2bfce3a6d0a67250599"],["/archives/2023/04/index.html","52e3e212c3a7d52fa72403f7dc7535c4"],["/archives/2023/04/page/2/index.html","d797e95769d811288c4c56ac7a40007f"],["/archives/2023/05/index.html","349267da9f23bcfba9932a5ef7702754"],["/archives/2023/06/index.html","de00eacd048028f64b9c5d33e6e6b4c6"],["/archives/2023/06/page/2/index.html","1e53838a0056c4e6238db9f0bfc3359f"],["/archives/2023/07/index.html","02f849931e2219057587bd43d3642354"],["/archives/2023/07/page/2/index.html","22ea4b02e916ed751a65d78549c5d556"],["/archives/2023/08/index.html","ef873aca4509924d5648978bcea33a46"],["/archives/2023/08/page/2/index.html","caf31f4a308303e730d3800a5a2ff815"],["/archives/2023/09/index.html","23c4c92bcf3588dd869cbe7f775aa44f"],["/archives/2023/09/page/2/index.html","9f455ad434163b610c3b54939664aa6d"],["/archives/2023/10/index.html","23c16a1c93ffdfd3087f0810f9785933"],["/archives/2023/11/index.html","3fa2c32d9a19bf512d7b6e5aed4fe859"],["/archives/2023/12/index.html","d2dfb9c7fc2e1a9c80560a0b87c4f2da"],["/archives/2023/index.html","2d3dd574e7d51852b764bba7d3317e02"],["/archives/2023/page/10/index.html","5b71dd2901353b1fae8f0aa3132c7a09"],["/archives/2023/page/11/index.html","5d0c4fa0546213f24dbc71af9248f71d"],["/archives/2023/page/12/index.html","092996f8586c668619b15dbc76a23aa8"],["/archives/2023/page/2/index.html","516b4be65321536f6450df6c88dc3333"],["/archives/2023/page/3/index.html","3ef4049cb00d4e228cdb95a45447983c"],["/archives/2023/page/4/index.html","053184d8cfe8f4875b251063e8fd4390"],["/archives/2023/page/5/index.html","acf7114c8c73dd11589a274790bf6429"],["/archives/2023/page/6/index.html","3e61b64f98e2b02a2bb591943ac61fde"],["/archives/2023/page/7/index.html","fa2d25e026a7762d5cfce370a8f2eccb"],["/archives/2023/page/8/index.html","35e3740da7893c1a4641edc0a16fb97e"],["/archives/2023/page/9/index.html","15edfc0595a6364b5707f231e6e7fff7"],["/archives/2024/01/index.html","7c71550e6f4d754d5a5a17222b54a033"],["/archives/2024/index.html","a6793209ffe87700ff980479f70cffa9"],["/archives/index.html","47064f1098dfa28b42e4eedfb7a88600"],["/archives/page/10/index.html","a45ea38cb39fc5f8b7b81d079a87b106"],["/archives/page/11/index.html","ea33bac1e3f1eee7fb1914e078205b5b"],["/archives/page/12/index.html","119a47dd5dd38c6ba6f2cd87f59f57e6"],["/archives/page/13/index.html","a48dae154f6a48a3ad0b5c164825375f"],["/archives/page/14/index.html","550eade2feb1e157dc9c85f552b4a7fb"],["/archives/page/15/index.html","3950e7c0af125ba1bc3a33a5634bb7e0"],["/archives/page/16/index.html","3fbdfea58555fae13b7b0762ecd25eab"],["/archives/page/17/index.html","6000b6ff626de3d8d760c7a09cb3be6a"],["/archives/page/18/index.html","310b5e2a9d286c3011d70e797c474319"],["/archives/page/19/index.html","4a88791d6de870bbc7c9937e467275a7"],["/archives/page/2/index.html","9068a7b84e0996063cefb29dae60ae62"],["/archives/page/20/index.html","3f0ba7869b6967c89874c67a2f91133d"],["/archives/page/21/index.html","df1875843f18801b6e93c190c5731763"],["/archives/page/22/index.html","fc903a490f7279165150b8f1f65dd211"],["/archives/page/23/index.html","8d07a3ac8810b8ffd66e23feac3b3068"],["/archives/page/3/index.html","a35ce6facae2fc0878bc7200b6fffff8"],["/archives/page/4/index.html","c1ed500089441bb313de7bb989f0a052"],["/archives/page/5/index.html","047cc5e1a3d89c7b3f353f096fb429d0"],["/archives/page/6/index.html","3c987004826a6773ba5cf09da61950a1"],["/archives/page/7/index.html","74af2890685218ff685e714c8946c25c"],["/archives/page/8/index.html","e8beb7efc17518c30085c2d4137ca5b3"],["/archives/page/9/index.html","c7ae2012308af468d5028e78243a14c4"],["/categories/Devops/CICD/index.html","aaabc9385bbbc2bfe026d161dc003435"],["/categories/Devops/Linux/index.html","e6e766124f83b72e015eff9cf4e5a0cc"],["/categories/Devops/index.html","26aa9f0930b5f070e7d45e07df038dd9"],["/categories/Java/JVM/index.html","6a0b5026bfca35025c31183153512829"],["/categories/Java/Java基础/index.html","60aa8df884d8d42e1226846ec196f82f"],["/categories/Java/NIO/index.html","f46388ed34cce228f40dfcce34a26b25"],["/categories/Java/NIO/原生NIO/index.html","97e4d40170bfc067a5f9349afa33ca23"],["/categories/Java/NIO/文件操作工具类/index.html","66e0a3449d7b281662266263f961bc46"],["/categories/Java/index.html","234fd825b2b2be5f4ffbb30d7d0aede9"],["/categories/Java/page/2/index.html","36864c2c51e29ef36e637af5ff1328a6"],["/categories/Java/并发编程/index.html","2865f242b8dd6b13c825a399f33f7c06"],["/categories/Spring全家桶/Spring-Security/index.html","aa5924388f61ffa2ee3bfce7261a93f6"],["/categories/Spring全家桶/Spring/index.html","c39d5ed23a0cec5032acf32ab5ae898e"],["/categories/Spring全家桶/SpringBoot/index.html","486f66d93e56b6511c5e386193f1ac0b"],["/categories/Spring全家桶/SpringCloud/index.html","7092f428834390b177df5366855bb44b"],["/categories/Spring全家桶/SpringMVC/index.html","fd0d72932a6cc96173928dda818c1abe"],["/categories/Spring全家桶/index.html","3ee0a9ab534174dbb6d36c4bb4a16803"],["/categories/Spring全家桶/page/2/index.html","1dd2e10dadae4fb4c903db33b6f387d2"],["/categories/index.html","8b84da155943752fc278e344263397ed"],["/categories/中间件/ElasticSearch/index.html","c801f5a5fd8c0e17fcae9faded6ef86c"],["/categories/中间件/Netty/index.html","b8448bc6c65f2b9dec56268fe73aa30f"],["/categories/中间件/Redis/index.html","7b16a2d90b8496fc8d26eb99019158a9"],["/categories/中间件/Redis/page/2/index.html","e1368059ce52b1af07105a73421923df"],["/categories/中间件/Redis/page/3/index.html","f9e9b0fb3284972c7908b2ab84366892"],["/categories/中间件/index.html","3a43c2c9514c4e5f315e7fc83e30fdf1"],["/categories/中间件/page/2/index.html","b2a20f16dc7cf15090ce9981325574b1"],["/categories/中间件/page/3/index.html","64545d7a9d5b5fef89e2e54f8b6d0774"],["/categories/中间件/page/4/index.html","937cf83af6924801cecf5a79f6816333"],["/categories/中间件/消息队列/RabbitMQ/index.html","1cb1a5c45ecfa5b1936161cc811eec49"],["/categories/中间件/消息队列/index.html","a4f32d0ec3f8927a541d5202939257fe"],["/categories/前端/Mock/index.html","15bcdbf02da0e8b635141cab4bba4034"],["/categories/前端/Promise/index.html","4c59b1a64ad0beb31f83bcb705f950e0"],["/categories/前端/Vue/index.html","3dc0d62f35a13b6aa30243b2146d948d"],["/categories/前端/index.html","e0116c3fd3e2e0c5a078484df379fa3f"],["/categories/前端/jQuery/index.html","de606d2454bd56408a99ccea4d35d2ab"],["/categories/前端/page/2/index.html","8b37f7530f2cce3c34767abc805a3dcc"],["/categories/前端/原生基础/index.html","fd0b3dd959537c61b3a8a8565f17e9b7"],["/categories/前端/异步通信/index.html","57c03f759e3adbcd41506623bfbc3f1d"],["/categories/工具使用/Git/index.html","77bb40fc56cf2f081b142ad9e0a67bd9"],["/categories/工具使用/index.html","3ff6fd6b306378251dc91c6e63f76a35"],["/categories/工具使用/markdown/index.html","4109b77c6509262ea831998dda48c7ed"],["/categories/工具的使用/Docker/index.html","9d603fff592c00bdb0dfc5cf13fc5569"],["/categories/工具的使用/Nginx/index.html","b49001723ae11fe7033e6bc9e5238287"],["/categories/工具的使用/Swagger/index.html","e934c896fd703b7cdc03bcdd1b038a46"],["/categories/工具的使用/index.html","b8494ec146fb09b00a1ba4adce005617"],["/categories/工具的使用/博客搭建/index.html","941d22f8f2bb69d24c4cd59e3570f050"],["/categories/数据库/MongoDB/index.html","551e9994375143fa5707e57fcd21bcce"],["/categories/数据库/MySQL/index.html","3d32df575a72d6aeddcc1bccbe5fd2fe"],["/categories/数据库/MySQL/page/2/index.html","c81176f2f61404e77ca37cf1c1199759"],["/categories/数据库/MySQL/page/3/index.html","113fad7587da2a9a83b4b5b85b79d2d3"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","82f3e8c943da220bf808ef3d34931300"],["/categories/数据库/ORM持久层框架/index.html","4b847f340b6877036ee09a04d47e2645"],["/categories/数据库/index.html","3f5c709d2b19c716e985aacd030b3d2e"],["/categories/数据库/page/2/index.html","fa71328d6ddbf481764f291be05559fe"],["/categories/数据库/page/3/index.html","4fd28e1f65e5fbd03987f022d1b12ad2"],["/categories/系统设计/DDD领域模型/index.html","0afda8df0c9537ec7584d68efb5b67fd"],["/categories/系统设计/index.html","a39d4b2a4b03af6336916717f9e1f5fb"],["/categories/系统设计/page/2/index.html","a9604712236a238e3278a57f1e362e0a"],["/categories/系统设计/page/3/index.html","68f325c6c74520e278f21e0b889d7ae3"],["/categories/系统设计/page/4/index.html","2b189a53284c486779aa005727e9b7fb"],["/categories/系统设计/分布式权限认证/index.html","b4a7ebfebb809cb07718805930d35a35"],["/categories/系统设计/分布式系统/index.html","1d2798ba6b4b15a2b673b026a54678a7"],["/categories/系统设计/分布式系统/page/2/index.html","05b7ac1723b54c843113310eec3d290c"],["/categories/系统设计/分布式系统/page/3/index.html","776e26f1dce1a2b7d10f1cbaabcf5ea2"],["/categories/系统设计/数据库优化/index.html","dab1cc3ed499b61c3086961f5dc9a2c7"],["/categories/系统设计/设计模式/index.html","e7067bd0e433cc4d0e660b995bfa78c2"],["/categories/系统设计/设计模式/page/2/index.html","5766d173665bd6d08a2d24fa852c8591"],["/categories/计算机基础/index.html","1618f9a397369440a51263adcb8398e2"],["/categories/计算机基础/page/2/index.html","28361f35bc49edb52f5de27628f132df"],["/categories/计算机基础/page/3/index.html","d5bcb834011eaeaa2292bc4135224526"],["/categories/计算机基础/page/4/index.html","8ecd168a82f72a41ff24b5cd39ec8032"],["/categories/计算机基础/page/5/index.html","4252c0a60d005f62756d66de6b7b1d3f"],["/categories/计算机基础/page/6/index.html","e3a0ce7cfb9108dc372d766de1c3ebbb"],["/categories/计算机基础/操作系统/index.html","9f522f0d1ed911228c5e624218af23db"],["/categories/计算机基础/数据结构与算法/index.html","ea168e2ba5c8a1c556f96622c2ad90f1"],["/categories/计算机基础/数据结构与算法/page/2/index.html","d21ace6a1279893830eccf66f4b97d70"],["/categories/计算机基础/数据结构与算法/page/3/index.html","7d18a57100b9fd8db6d170dfb4cbeb69"],["/categories/计算机基础/数据结构与算法/page/4/index.html","4ac4c3028de8cbeaf1245216cdc3de93"],["/categories/计算机基础/数据结构与算法/page/5/index.html","5c4c494c2e878e960083d2e2dfcf2bf6"],["/categories/计算机基础/计算机网络/index.html","8b89b59980ff10cf63fb135c54dae3f9"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","3be321ce9de6040177327a364a848495"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","6301fd604350cc9e2e882da6cf81a30b"],["/messageboard/index.html","324374c23b68622825fa34bdeaf3b076"],["/page/10/index.html","ec077a45c34a6fa8bf77e97cf5b58e50"],["/page/11/index.html","747763ce541726d0e23922f753cb2829"],["/page/12/index.html","75cc6503254d9523eb1ac0a9daaf5bcd"],["/page/13/index.html","52001908a214f37c4f34dac539a56d7d"],["/page/14/index.html","697d744a28192c0a7d2f0746eeab8626"],["/page/15/index.html","a4c9db7f2cb438e0eddb3f38e8723237"],["/page/16/index.html","f0efc8a2539e39a8ec9fc4f5135cda82"],["/page/17/index.html","84af393b96d39403237cdf1b891a98aa"],["/page/18/index.html","e39606d1a0d35cd24ee5aaa8288942e5"],["/page/19/index.html","5dc689020f8025a3540a7fde9f9d3eb6"],["/page/2/index.html","d4838f03febf60b3f78e7802d6121567"],["/page/20/index.html","dea977c939ecc379b6e8e26cb098069e"],["/page/21/index.html","10b64a7f11499ff9fb87d2b04d810d5a"],["/page/22/index.html","5d56ea0d4627eb5c32d33d7fc7188cf2"],["/page/23/index.html","3b3379c1f941d4e052e154ae7495d6f5"],["/page/3/index.html","6c9f15db70a1d1cc698e619c2be09233"],["/page/4/index.html","1e21ce20a666559b81f3c9ea7f65e8cb"],["/page/5/index.html","b8262d046a625e9448b436937be33f02"],["/page/6/index.html","b2041ecdff8ec2146340032d9127d5e0"],["/page/7/index.html","27aa001f73da779f73860b9f197618a7"],["/page/8/index.html","78d4536af749583b67f4072e6889c512"],["/page/9/index.html","91112c37bff1c20ac188c2548d30e956"],["/sw-register.js","f0d252d4efbcf5da5e5eefbb8f0ab143"],["/tags/Ajax/index.html","48dcda22116f762bc9296fb3e4deb734"],["/tags/Axios/index.html","df5e856a519b6b0d9fcd0b85af872370"],["/tags/BASE理论/index.html","5428cd4837c45049da88e8aedf4ef0e5"],["/tags/CAP定理/index.html","c76d0cd6feb921f5bf7e5d8ac73fdd48"],["/tags/CICD/index.html","00df9c297ab585906d3c3fa20b13b7d4"],["/tags/DDD领域模型/index.html","b51f69c08e6bdece0eb21a4bc33dadf6"],["/tags/Docker/index.html","02055b6171172f023a645a36b98cf585"],["/tags/ELK/index.html","45db047ef21dd25d4de3b9527ac2f37f"],["/tags/ElasticSearch/index.html","a70100542ecf47690e4fa737ca95fdf1"],["/tags/Git/index.html","64808b8f2f052c618de6ebff42fe05ce"],["/tags/H5/index.html","0fed2321a48004657eb64aea59496ae6"],["/tags/JVM/index.html","f93d3978daf6741b28906ebe7389c9bb"],["/tags/JVM内存模型/index.html","fd4451ab597b2c290940304fb706ac2d"],["/tags/JVM执行引擎/index.html","e80c8e7a4d927131bf2e144710e2ae7c"],["/tags/JavaScript/index.html","69f0de31e730df5aaa6ef0233c67fbc5"],["/tags/Java内存模型/index.html","01badc8da790b04a047c601089b229c2"],["/tags/Java进程线程/index.html","87a282458774e49a15386001edb2b961"],["/tags/Kibana/index.html","6e99c40aba8de7e15887480e0e4844f6"],["/tags/LeetCode/index.html","f4b2f14e96a57734a2830e437af2bec2"],["/tags/LeetCode/page/2/index.html","281c32d5acf33206f688279a02fee48c"],["/tags/LeetCode/page/3/index.html","f1e1ab9750e2230b2a8537e81f49e783"],["/tags/Linux/index.html","6965b1c0fd5bc5d6ed337ccb8cd0fcd8"],["/tags/Logstash/index.html","473777cc39c142f3ac46d74949eac4f1"],["/tags/Mock/index.html","ce9005c53665a18331897dec1fb87bbb"],["/tags/MockMvc/index.html","39449a6a8772ac69ba22c03b5e82b7eb"],["/tags/MongoDB/index.html","2c39514bc1558569d475b30b3aeadfc8"],["/tags/MySQL-事务/index.html","73661097637f5d3b6604533f979e3434"],["/tags/MySQL-数据类型/index.html","d37d2dc5021fa8931b3515bc4499084a"],["/tags/MySQL-日志/index.html","c1386958a401df07379ae1bea46f10b9"],["/tags/MySQL-索引/index.html","72a57a8ef9ae79d125050d8a3d247946"],["/tags/MySQL-锁/index.html","b0a88f6846dc5ebe2ec62e4d0cba3708"],["/tags/MySQL/index.html","1a1b6bdd08493c1065d2475f7ae31228"],["/tags/MySQL/page/2/index.html","b4aed107d529c980dc23fd43b4710d1a"],["/tags/MySQL分库分表/index.html","52774631b0a1ef41f301150b777cf3f6"],["/tags/MySQL读写分离/index.html","888de2d2a393502cc6d8a518603c4616"],["/tags/Mybatis/index.html","4a065bf597637e30abc373d3a90314f1"],["/tags/MybatisPlus/index.html","1a1388ed415ff3c0155676eef65aa54c"],["/tags/NIO/index.html","44f9a2be4134f8956244cf0d94005133"],["/tags/Netty/index.html","266e51fefc916ec24d75166bc0cee560"],["/tags/Nginx/index.html","4ccf8ba0358b9d4a5520251dcbdb7900"],["/tags/NoSQL/index.html","386543491daca3d8c6c999e253c05945"],["/tags/Promise/index.html","a6dd2d17ed9a8f718819acec7b04aea0"],["/tags/RabbitMQ/index.html","6c6f899bcbeda7490971e5815112a7d5"],["/tags/Redis/index.html","058f4027e92e6d1dd83b470c2b47bda1"],["/tags/Redis/page/2/index.html","734161acd1e7f3966def9ee3c15a2808"],["/tags/Redis/page/3/index.html","77cc4292f5d2d3bb667c72894e693800"],["/tags/SSM/index.html","fa1e73fea9bf159f414ff8d915080b12"],["/tags/Spring-Security/index.html","d4f064be3bc8f068804ad5cbf8a28183"],["/tags/Spring/index.html","7d38be4dc787a74b871e0c30d01abacd"],["/tags/SpringBoot/index.html","2bcbf475cfed694746199c1761bc0776"],["/tags/SpringCloud/index.html","230a0fff6176f52b1db293fa1a4d01e9"],["/tags/SpringMVC/index.html","7b30dbcf3a030f024fb24b9fb691edbe"],["/tags/Swagger/index.html","7d28410c0a0e2e1f327130012c0b80b3"],["/tags/hexo/index.html","d8b45575d4fb3738e98b94fa6b5e5183"],["/tags/index.html","cc4f3d4501e6003713300278a57cf1ea"],["/tags/jQuery/index.html","703fed15677e003d0dabc4a7c7b6ba4d"],["/tags/java/index.html","31c7e70ef54c259cb24ca434d6242029"],["/tags/markdown/index.html","ca81195f403dd24e1c2f28fb4e89c77b"],["/tags/typora/index.html","8b63817b4cc5dfcc9540ed0338ab80b1"],["/tags/vue/index.html","5e244b6cd4b21bbe0915bd4ddf73ddd4"],["/tags/享元模式/index.html","bc87cccc266cada8fca3d107426fd7ea"],["/tags/代理模式/index.html","80fd0e1bcb776b28c867ee323fdd8e8e"],["/tags/内存管理/index.html","96f42ea136a481b93aa5f571d501375a"],["/tags/分布式/index.html","f929729c7fe316235b84348758eb5bda"],["/tags/分布式一致性算法/index.html","c362483a1b1907ccc1f9ce1d0bcd88b2"],["/tags/分布式系统/index.html","ee8910ee08d5285e6901cce516e1025b"],["/tags/分布式系统/page/2/index.html","3295736004e55b883507c9847fc8624e"],["/tags/分布式系统/page/3/index.html","473968d4c2740a81796a04b6672ff639"],["/tags/前端/index.html","f9af95bd9cdb669e97259ad007e1c493"],["/tags/前端/page/2/index.html","d892fec059636545cecad094f5884177"],["/tags/动态通知/index.html","ee28fccbc9a39cdf3fa3c00867068bf8"],["/tags/博客/index.html","c8b926bd7b1ce87fd402b40ab670306a"],["/tags/后端/index.html","8af51ca8ab2092d873f74a58d627a113"],["/tags/外观模式/index.html","cddc787d43eefd79fbe005e97c245fd5"],["/tags/多级缓存架构/index.html","a18b01f733295ef1949aa7f868c7d64b"],["/tags/多线程设计模式/index.html","dbc4d3335c6cf3e463574e40e8b22568"],["/tags/容器技术/index.html","f9e1b26ae81581389dfdede475d77d90"],["/tags/工厂方法/index.html","aa07b0198ae7de334b263fd4cf1d2347"],["/tags/开源协议/index.html","f88b11c200857aed92b3e11ec094e964"],["/tags/异构同步/index.html","39608bf8c1d7c9d645fca8a9ce97213b"],["/tags/微服务/index.html","a8602a11dadff678d99a8c894e716fc2"],["/tags/抽象工厂/index.html","f52f03e815a40e0762efcab012b910e5"],["/tags/持续集成持续部署/index.html","1b4296599d50c3b8fb29b1fa9c4e9865"],["/tags/接口幂等性/index.html","2534ab39700a7b8cf5cae1005c0b5d74"],["/tags/搜索引擎/index.html","abecf7c7351a4d1ea724c4e893627fdb"],["/tags/操作系统/index.html","242f687c5bb069520398f1aab8fb7e18"],["/tags/数据库/index.html","0a27c859e0010d29e36e184b3b6b204e"],["/tags/数据库/page/2/index.html","a046b26e01f70c00871397b041f40827"],["/tags/数据库/page/3/index.html","47c098e8af445b238dd6fe1fdb0b5205"],["/tags/数据结构与算法/index.html","f6211dee94f43ee395fb2445847f9465"],["/tags/数据结构与算法/page/2/index.html","d3b5ac852f1de3bb1f3f32e5533e5e89"],["/tags/文件操作/index.html","caaae967d081159e3792dada1ee55f7d"],["/tags/日志/index.html","d4f6dde498284a8ee1380df39ddaa02c"],["/tags/服务器/index.html","27eae39a0d7ed43752eef4c19970c71d"],["/tags/权限认证/index.html","372e8615683b75dff8989756a83d804e"],["/tags/架构分层/index.html","58ee60069b7c87a576315037af30024e"],["/tags/桥接模式/index.html","4f3bb34c9f870201ec7f9e574c2232b7"],["/tags/模板方法模式/index.html","373ae97bc44c91b10ebcba22f9a5bf4f"],["/tags/死锁/index.html","cd01347411a4638de7fa1b27cc8fda2f"],["/tags/池化技术/index.html","e5913c539759f70f452757f310d9b855"],["/tags/消息队列/index.html","fe53202be391b51dee6137eabc3bb5bc"],["/tags/版本控制/index.html","c466b281384727f1bdf11ebe43ccf5ae"],["/tags/策略模式/index.html","f0fe23629dad7035229605c8ae21b255"],["/tags/简单工厂/index.html","5d853d08f2675ee9c8b2943f80766eaf"],["/tags/算法/index.html","687d388db4cbb4e0b198009d5b2a2980"],["/tags/线程活跃性问题/index.html","75fda64a55630e047f7036193f605003"],["/tags/组件化/index.html","ee5c237dc84208e65c2a5758ed69e8f7"],["/tags/经典限流算法/index.html","4453361f85807ba1506b7ca4e084b3c1"],["/tags/缓存/index.html","8945d8b7149646f9b1d8a552978b6f64"],["/tags/缓存/page/2/index.html","46f2b6a03c667aa9bda37b6486509e4a"],["/tags/缓存/page/3/index.html","f02bd44e914b8aedf6039799de5e7b53"],["/tags/观察者模式/index.html","82e71a0c7d4db25adb4b66e23db06fa7"],["/tags/计算机网络/index.html","f65693f3ea916eb957029dbf0e17c938"],["/tags/设计模式/index.html","26dbdea69ae4c34a7e27fe9c41d082c5"],["/tags/设计模式/page/2/index.html","2ab2145f386f55da8f7489c9766dc702"],["/tags/设计目标/index.html","c8a8f8b0e3f130ac1e34bdd38cb46e29"],["/tags/资源共享问题/index.html","52a0cfcdc642d067eac34227306e913d"],["/tags/进程管理/index.html","899557424fda0c9e7753cc7ad060884e"],["/tags/适配器模式/index.html","7d52db0167c743cb8cedcfea487656f4"],["/tags/通用设计方法/index.html","f9594366fa9718f37908f5ad5c9eb26e"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
