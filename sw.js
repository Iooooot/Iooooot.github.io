/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","f006fda035e57917ac110ebd6edc88e2"],["/2021/02/22/工具的使用/博客的搭建/index.html","bd2bf30f049d09d52d0d58c0f187a6e3"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","51a2ae521b10afbd059e5e58ab4c5628"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","b1e65dafdaa284e9bce1174702f8b3e0"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","8d13af6d2481275186a8ba35df33aa1f"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","ae26473b72220bd7720673c85d2c5e8d"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","8ff83ec4e6c78e12348e4225e4b35aa2"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","1ed2a965852f69d17e6bb2dfd7bca26b"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","53f0041448830bd0441ec92f7cceff4f"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","355d0bbc42a8761c7e39f5cfb4a3c7f2"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","3350459825b141406813c3b336309db9"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","b40e56338827c1fe6ac837cb6ffda891"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","57d62ed9d161d445a0ebfe0819510b41"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","a46e112b19c43ce3f8c96df5d6140c39"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","73161c50a02c987a2b4cbbbfefc973c9"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","fd7a48ee5f07fe2b890845d2e1e45133"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","d5913377728472b60104df0a831cc480"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","7a1e8e1ce0ccf5bfa6b1dd7d9afb585e"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","bd1532bb8e855c9635d30092300451c2"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","097df8b1b7464a380a8692186486a365"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","4d37c680faa69912b3df33c300efa3fc"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","18a9c386ce4583d32d89c72e1d4a614b"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","e55285f2861f23fb13a62ec567ab4162"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","47e2549064e01a2bb351bc326fb6a262"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","da1e4a658928db93bdcccdda91528fbd"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","e22aa784af45b726cd72dfa70fc37b00"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","029f774952c55a7984401c4d01daef6c"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","afa8ec90ce57f48db91d69a31ffa5722"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","fd48760d2d104a905ebe8df4b635d5d2"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","367fe7657bb37492b79918ddf7ffe5ed"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","ea6326e6e2fb977031026d9f7a30ee8e"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","b23f01333be0a9d5bc108f56a662abf0"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","49abafe4804aaa4a1e956e10c161b1fc"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","40780c1a4a233b85ae9e6ac6db9dd698"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","bc4501bf85024a8569872234ce74c596"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","557192f2769ce29e31aa0ba8d96ee105"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","bef2cb2677d2715420243f7894c8b07a"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","1226080a0ebf4d9b0b42fd21c40c13cc"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","0de24fa8dcd6f0ec53d7f2011d2ed9e2"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","cd3e3a64d3b2b5ba1624b2d91a5de691"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","6699389cb84094fc698d3a06d32bbbfd"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","ad0d908abb8c7b1b411cbd277dabd341"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","dbda9026ab42b85ea4661073a83c5fef"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","24bf814f023390a10abbc9feb6a42ae8"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","18c9c8a2799d80b5797cf74bfc70a734"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","9708f1c613a4aea8bf9b276f8c91f587"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","562bddbc6091b721d13be1e165f2f48d"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","6b795a791cbdf45107c2ee2334ea59fe"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","2bb62f71f29b62c29cf1380aa70dccfb"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","c4427c8f0ecc7270151a3cc681342b99"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","fe5e4e9741c4e7e8700fa7035629016b"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","9ec39e98319562c6e6baeebacbee70f7"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","2a9f021803302836a7e1f9f12affc62d"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","07facdc9e016fc5edbab7ea2a33875d3"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","1ec8a8593dbffda37ac65ffc0ccfc9bf"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","ab27abdd334c8d2be7364ff4c3e3059c"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","4487b834a45cbce498e51a49c622ae62"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","55ec630580a3f4fe7e94ef9da7e167aa"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","207aae3f77b3d0eb1d2b3cc70b3c6d77"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","eaa902521741c446a4be2e7fd321216f"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","03bcf6b89f7679b50dfa10bca2ac8409"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","dee102885c70cd872e4c9aef437c3e26"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","0fc2ed6121b8a5cebc3b84db21ad61ad"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","0b74fa04f2d2091721071d2f3c4bb9b5"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","6251c4ffb899dc051a6e0154c4fcf69a"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","a5245056d0970605261bc365eae2dbc6"],["/2022/08/17/前端/jQuery/index.html","7294a3930db24d83a688e22b6b887d04"],["/2022/08/19/前端/JavaScript/index.html","fcdbb119a8c0e22316d11f7367ef7cf5"],["/2022/08/22/前端/Ajax/index.html","0c2acad66d1bdb9d5a8f0ed23d78def5"],["/2022/08/23/前端/Promise/index.html","fea049826b9c97bff7648a39103f5bcd"],["/2022/08/24/前端/Axios/index.html","c08d05123d32d55eef7a96f7dc886cd3"],["/2022/08/25/前端/H5本地存储/index.html","3a333ce7ca518e1731bb43a452b42b6a"],["/2022/08/26/前端/mock/index.html","1f75bd16e42780394aaa1d6e523b7edd"],["/2022/08/31/前端/vue/VueJs/index.html","f50c045125d237130a8521e0714d6be9"],["/2022/09/01/前端/vue/vue组件化/index.html","cc40d426fb415edeb08a68819a6b02a9"],["/2022/09/04/前端/vue/VueCLI/index.html","0b27eaa5ae8691d2cb78ae33d1b10abb"],["/2022/09/07/前端/vue/vue实现动画/index.html","f87b876da3572d0c5044a5281be6999b"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","cc3e3b95b27a3ea2b3aee43efa96fd5a"],["/2022/09/10/前端/vue/Vue异步请求/index.html","3248d8ba60a651d69b1947f20640c18c"],["/2022/09/11/前端/vue/vue-Router/index.html","2e05c9c7d0fbbef6dd918ca5ad930ef0"],["/2022/09/13/前端/vue/Vuex/index.html","ad14ccfec011b8ffc4de54efaa8cd650"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","23fdc352731a703dbf23313ce12f512b"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","503b932a6eda722c85ca4a7354340d72"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","2afacbbc37b9545a82e34e1bf256f7dc"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","ff766713c2bb1291c59c7e6aec26b405"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","39772eeb722fb138d72d94fab5def038"],["/2022/09/28/DevOps/Linux/Linux/index.html","3f55d05c8212df0ffa9397c3542fa5f3"],["/2022/10/02/中间件/Redis/redis基础/index.html","84f69889a03133f7ef0f3de8af15314f"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","1eb4dfcedd6cfd9db8cea43322d289e1"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","8a679d8af601aa1878d0a12677383d86"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","4bd6ecf860fbb311d398367299561fc4"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","08b6891dced19c9baf10d253e3bf8f05"],["/2022/10/17/中间件/Redis/Redis集群/index.html","be086d3cad5d525ebfc2a97da36da23c"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","afa25e43b7e2dd0a96c95f30bfd5eea9"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","d72dd787e77b3cf84d8ae787ed0ea74d"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","f6e3ea7ed1fb8fd7a1f33129120a20b0"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","fae6bf6424da6db0dcaa4cdff97e3296"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","94a257f533be5cd08080dec71af202e0"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","61b1fb3faed4f40afbd3d9f9af481b68"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","8bc5148634e331ab414dedd98cd350f4"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","34dd41c29786d9a6a8d68eb0690ee92d"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","94927fcf9ab07fadde362bedeaf0d937"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","d59e4d2fa586eb7879c2cca81d1c4eb5"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","3c9b61b8b3ac50e6717e5f72160d8280"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","2f32dc46c7ceac82950aca87409259fa"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","5109cbc274a5ff872636595033aa6e40"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","4581da6fce2b25ed987a05782b229b52"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","91a26125944a58afe6daf7a2dfcd5b73"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","86cf03435a12cdf7db4f823e8e50319e"],["/2023/03/10/DevOps/CICD/CICD/index.html","6a7059b0e03885af864f436a80175b6a"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","e672d2304ab40b2c5fe7065d5c63eb42"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","ea1b90ee5fd49c25e18266ee50c3498b"],["/2023/03/13/Java/NIO/NIO/index.html","e04bbd9191dbc92e24835671c2b63440"],["/2023/03/14/中间件/Netty/Netty/index.html","ff68dd099c5b0bd6fab71ba03b749995"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","6f9cbbac722d248d9531c9343025f433"],["/2023/03/17/系统设计/分布式系统认证/index.html","083483d6a2f6b9a92848dc0364ce1c6f"],["/2023/03/19/Java/JVM/JVM概述/index.html","acb83c5470eb224d8b31798b21f470e1"],["/2023/03/23/Java/JVM/类的加载过程/index.html","052a0d2e0930e8fec42ed3a907affb66"],["/2023/03/28/Java/JVM/对象的实例化/index.html","3a9d714a057d6c76b2edecd95f9b1134"],["/2023/04/01/Java/JVM/运行时数据区/index.html","26e31bc44b9f3de8dd4fbf0a7e9de1da"],["/2023/04/04/Java/JVM/执行引擎/index.html","21409b6fa0d1b149c58b338b7f00238a"],["/2023/04/06/Java/JVM/对象引用/index.html","ed6c3679fcf237d5a115668c574565d1"],["/2023/04/09/Java/JVM/垃圾回收/index.html","45fe0ec6892a7c776e85a94441ad185b"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","c285b6eebfd6aa8744525c9a2612afb0"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","facc43900c6b1ae0345e937d1b5218d3"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","87914924d199a6ed98799345b9adff5d"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","4d1f349b13a1ee676e7785f346d5a9d4"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","7e9d71ee2fe132e3b5a80f516f2a3336"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","3db37d887971053dc82accf2dd3aaa28"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","994edff89237e14bf38fcb9f631d17c6"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","1762ac560c1680bfff359991cc3cd459"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","22041282d4e3f951cc356471bbe46000"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","e3120474253b860d0c9a010243471dce"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","31db891240b410c298dbd8a1b08bc1aa"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","2d888b9795a5c469541d883fdf333443"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","cafc31cdc28efdcf63477159ccdbaa4d"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","7fe2a2093032372b747b35737e28cbc2"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","f0a2394bc5994c5e8eee78ec1668552a"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","717ff426b4f75e131b31e776172fbb37"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","d90ec27eff90af4eaea084434792e125"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","1bb7ca6775f5fff5c98014bbb5247bb6"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","0d5f6821f1175530575f22d347ab9261"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","f788babc1f305fa4a4d516a9b9ac1304"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","7600ab12148b7dbe7bd46abef8cf8407"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","93d2ac863902bd86700c3c256c414544"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","58735dacde69560fb546b05a9bcbcd91"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","2ce6ba7f0ed6d1e56e82030ca1f3b1d1"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","270d7f7238690a4aa4a23538cc55dbbf"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","3936dea23f07ef879c31c3a9437c23ee"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","da5874ddfa11e247748d6a0e21523a86"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","110dd0b1d3e24f99cc927a5b8822839b"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","2d7705b62c4bbdb4d78b5cdd7ab32a86"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","379cfccf3c2b8cb80ba0cb06ab4be71b"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","40baf21d7481243fb3682546ee65aff0"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","0eb8ee8a9207fcb89463c8cb2afdefee"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","9b408df3bb07397d20d767029a128f4e"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","44e63308f75b66243879948fa091921d"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","7e79397aeaf52db289aef50cdf7328f2"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","9d231b8d002d663effbdce1d5505a07a"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","2380050b862c5f4674185571bdb8ec22"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","16d738ae79208f1a2a3f1fd58faf13ee"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","5a01632c88003483a31fdbd810e72440"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","9dbb644647edbef9aedb7438cb49178b"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","c8adfe89b604f3ca86f42218d726449e"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","a815fa5762522ddb08cb3c82ba497f46"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","3fe8178e31e19cb8fdfb64e756e3e785"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","f7292322863348347cf82f4af5b886d4"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","5518f309390928743940cbdf7610f0af"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","1a0a152538d61ef1ac3b3964d36e398e"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","0292c0b7c1557cf7841d0098d5363ee8"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","df25eaf06f178f8c44facbf4b49b8821"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","952d8a1f3a1c1d71ff138e3f9dc61e3c"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","36586c69521abfedd55108e1439adf45"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","ae5df75318d1aea833c20b7cbe7e9bf2"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","350d413f49ff92cc97da213d94f7aaa5"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","9fb587d52acfc3d4140bded1c2e58949"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","691dd12d5ca79b72ae525fad1a41f8df"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","76e68bfe2979fa8175fb6a7cf1ea4cb6"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","d0f959f3c7a390c9483ba7d3a17f5d54"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","8c1c72f52213e18dca36b459d51a5183"],["/2023/09/04/中间件/Redis/Redis事务/index.html","c371651f76fadc4567d31b06c99cfb4e"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","234c83227c28ce237cabe2c8933551fd"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","af86775025d0616f862e04f5aff91a10"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","698b244f2141414915d343a6263245f2"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","c73cbf1e2e4ef071ffed91156e676f71"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","aa8736a8158e57230e3de53111502acb"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","4f6e8888e350a1e5fe6a4452e157a579"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","a00a304d2e6bf1002639e83b997ffe30"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","40335427e7de068346c42eefe848a75b"],["/2023/09/22/Java/NIO/零拷贝/index.html","6d77d7a7898d004992faba802c547723"],["/2023/09/24/系统设计/JWT认证/index.html","d5db61c85df43213fc840bf9a0f4f1e5"],["/2023/09/26/Java/NIO/Reactor模式/index.html","dc6c0438e49742e7907bbb835b418223"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","9b98672b179daae8b5381b1310a162b4"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","d196cea0d37ed142ac0b0bf26e257e7d"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","d5d0b673578f047dd0cdab67a75da2a7"],["/2023/10/09/Java/并发编程/共享问题/index.html","3b5c7d8d0bbfe733a3dca72b543b3137"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","153dae1b58c619767b19a59115cb8de5"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","e1a54c5003fb7649f0c31e14fcf95fd2"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","572a907cb8d5da924fc88da51572ea7e"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","b619d707ab467ba83b49a66c296ca55c"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","d8b7c724da9d85848f948e35ef81fe27"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","058b57afe38def8eae1fac550aa5ec7c"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","c472696ac2c229d5a9a7f0c88be9effe"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","aa7f4d38da7e274e7a8f00cfae7e0b02"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","21077acc3cb0aa165645608343eb95ee"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","07477db9acb29e01fdec65d89467de0b"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","ff7a7ff02148046cd68dc84d7ca4388f"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","5453784c73e6b01cad2f052ed4254673"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","a4483663608933ab4f9df4f6c57417cd"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","e7cff386ec373aae5f3dca4d3d3444f9"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","56a9c834cca95513493ca73ec8dbd64e"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","c50569e891c061bf50fb758331b4bc4e"],["/2023/12/05/系统设计/开源协议/index.html","beaf60a2e10f51d46421bb1712df152e"],["/2023/12/09/MockMvc/index.html","f5025882803c5fec0b5dc336f4405ede"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","4712dee76ee1437cf3ed5f474ab8d4b9"],["/2023/12/19/MySQL读写分离/index.html","688887c3a1e36f5a443fe644680ddeb6"],["/2023/12/22/MySQL分库分表/index.html","04bc61233fcf0577e846d94820ede717"],["/2023/12/27/利用NoSQL优化数据库/index.html","f98bb05a93fb79dc43364256ddb83e79"],["/2024/01/06/缓存概述/index.html","28989a9f394d4b00f88c4c4a41b757f4"],["/2024/01/11/缓存的读写策略/index.html","913ef24e5adf1dca3fea01a64472c6d7"],["/404.html","91c8e34cef89e71555aa6e2300416aff"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","0850b8254de78079b0243386ab009929"],["/archives/2021/02/index.html","c65ce117c4d72f94bcc13a6b0480e5db"],["/archives/2021/03/index.html","c23315ad0747a60002faceee9ba79a45"],["/archives/2021/03/page/2/index.html","8f17c19e2e56b7757199b8e117299843"],["/archives/2021/03/page/3/index.html","2b6ff9cbea666332ae52ca3859a20562"],["/archives/2021/04/index.html","70a438b9fe94b1e577bd57ba30edc8fe"],["/archives/2021/04/page/2/index.html","24195c7c064ea34b01676360e57dcfc6"],["/archives/2021/05/index.html","50bc801a2638b57f71d6566370cc97ec"],["/archives/2021/index.html","6b6320b27f3a6bcc45c0cc82298a3bbe"],["/archives/2021/page/2/index.html","44a2e318cf91a15aaec4fd36db0ce7ab"],["/archives/2021/page/3/index.html","ebb80410a7201443ac3340b999456b7b"],["/archives/2021/page/4/index.html","64f4cb5c83b9eec4531d4d7d8d9d1501"],["/archives/2021/page/5/index.html","20cf202d784230efd485c56016eedd24"],["/archives/2021/page/6/index.html","8629d77359ee9dc4b099f0f97fb95fa4"],["/archives/2021/page/7/index.html","ce4f98f1f99fcc1b72af35c1c8b67b12"],["/archives/2022/01/index.html","36b39691bc9eac7d103395b4e4084eed"],["/archives/2022/04/index.html","6756b40e86d2b7a894c3792f1aafbcbe"],["/archives/2022/08/index.html","db4503b93fe91316ecb1a0f787626aa3"],["/archives/2022/09/index.html","a610790c971219791ccf8113a55fd34f"],["/archives/2022/09/page/2/index.html","47aa37a5c3075b420a7886aa05b64149"],["/archives/2022/10/index.html","5ffd467299ba557a8862a45ea0cd24b5"],["/archives/2022/11/index.html","dc8478a10629bdb2a784f552ac197aba"],["/archives/2022/12/index.html","5bedca342148f44e1e20bc605609bf76"],["/archives/2022/index.html","44dc0b1b89cdff379c9c76c27c62b2ae"],["/archives/2022/page/2/index.html","2098083eec5f0d059aa2b580a504911c"],["/archives/2022/page/3/index.html","e3d4b21fe5731851b788070fb7310444"],["/archives/2022/page/4/index.html","8435cd1041520798f7c6806faa52b1da"],["/archives/2022/page/5/index.html","b473bc5bc6e196c9e716ce686575e58f"],["/archives/2023/01/index.html","cbc7566326f4d91a972b972304b1fcca"],["/archives/2023/02/index.html","0f262d8e6ce08deb509038f3cd253a9d"],["/archives/2023/03/index.html","33b0b707e56b5f85315d475d1b2abafa"],["/archives/2023/04/index.html","5081c943d53b798dec85f4a2066b6983"],["/archives/2023/04/page/2/index.html","6c2f99f1a64dd57fc6b737ee506a50cc"],["/archives/2023/05/index.html","4acc8be729a6fbe9c07dbb5ad66885cf"],["/archives/2023/06/index.html","dd1f832ee8dc855f696244a65b445269"],["/archives/2023/06/page/2/index.html","93088b42cda6d7a46c531ba027b7812d"],["/archives/2023/07/index.html","69a4d4945356d52dd94548d7fa6baab0"],["/archives/2023/07/page/2/index.html","7ffcff14c9dc584398c6f66b06f52b2d"],["/archives/2023/08/index.html","a302f7f22f9c65a1c07f0f1faa5ad6f2"],["/archives/2023/08/page/2/index.html","a8c0369f08bac4d944244fd6ac6b1b30"],["/archives/2023/09/index.html","1531b7102614060f52160bf5034d26a6"],["/archives/2023/09/page/2/index.html","b6de09a5b0ee5403473e68aba1cbc7c2"],["/archives/2023/10/index.html","03e9cd77c8e1916674c69f77fff2c796"],["/archives/2023/11/index.html","9f358865cb91198d68d24a09362b7351"],["/archives/2023/12/index.html","ec97dbd00f9ac691d137e56357d3af9d"],["/archives/2023/index.html","1f9046f47406acf9d6e57a4742d9d1fd"],["/archives/2023/page/10/index.html","fb97fcb0dd5de2acf6fd55347845433f"],["/archives/2023/page/11/index.html","9505cc219439276e43a50a169d7e6a54"],["/archives/2023/page/12/index.html","2e4099e95cbe053c7b2211ced5348a8c"],["/archives/2023/page/2/index.html","a6f851a9cbd28ce3fb8c97538b172753"],["/archives/2023/page/3/index.html","970f00ed304543e82062ec5906884086"],["/archives/2023/page/4/index.html","002bc051ba74fc82ec2b69115b3846b1"],["/archives/2023/page/5/index.html","5aca74886f615a7f35eab5ee192a77c9"],["/archives/2023/page/6/index.html","15d36ea0e1c5c172bee86dbef6aba24b"],["/archives/2023/page/7/index.html","375837032517371161158fb84bfa0c46"],["/archives/2023/page/8/index.html","00a00a1d34a32e6dc067cf21a8333725"],["/archives/2023/page/9/index.html","19dd14d61d5afde4c240700653be1ce3"],["/archives/2024/01/index.html","3b237426b49b640a4a363b9066fddc95"],["/archives/2024/index.html","f8936e5eb42bd2dc954c4cfd6616fbe1"],["/archives/index.html","ab1af45f9bf603314e334810bf201655"],["/archives/page/10/index.html","1ca404ae8fde9ef0e9f42252a3001ac8"],["/archives/page/11/index.html","a0f5215535d826787a6a4baa770b28d1"],["/archives/page/12/index.html","02e9acce623a498841c46e63c706efd2"],["/archives/page/13/index.html","e9c76059d1d7817f4f9d2253fdb286ae"],["/archives/page/14/index.html","c02a33b28eb7bcb5d092744a428c8ae8"],["/archives/page/15/index.html","7949c12c9640115a6acfd7415593024a"],["/archives/page/16/index.html","8d570c41f78da242befa36c7f270e799"],["/archives/page/17/index.html","415d670fd0dd41b1caa347c10786560c"],["/archives/page/18/index.html","b26f69464ec9a61a98fe93c5cda95ff9"],["/archives/page/19/index.html","fea404f1f3a55fcc423599e771e2ff82"],["/archives/page/2/index.html","88b93515aff65ada597cf4bc72923468"],["/archives/page/20/index.html","e2b7a658840dd1155933027220f06b52"],["/archives/page/21/index.html","3983bf1e1d2cdd3ca3f4e7cc7a538eca"],["/archives/page/22/index.html","225dba99d7ec3b03face76605f73863a"],["/archives/page/3/index.html","80d30ec5c16288fd7e35f2a4fb37e390"],["/archives/page/4/index.html","d5463b8aafdff96c9d7a94abd4eb0734"],["/archives/page/5/index.html","b25fbab7e5052664278427f474bf5f07"],["/archives/page/6/index.html","7f81094a74a77e46394e964f48ef2aea"],["/archives/page/7/index.html","8b8eb4643209e11c9842e23920419a98"],["/archives/page/8/index.html","74a7d4f5fef32e19c3a06c0e5e50fdb7"],["/archives/page/9/index.html","64a673d9b9e2a6599ed28f74a9818e04"],["/categories/Devops/CICD/index.html","7f0a94b5fe892aac0d0f97d974efc6ba"],["/categories/Devops/Linux/index.html","8512b7aca81e73a1609ed34a8a375de1"],["/categories/Devops/index.html","8da1294527c479ad0a8dcdad5c5d0d94"],["/categories/Java/JVM/index.html","bb8c10dce9f61aee109a1e4447817f07"],["/categories/Java/Java基础/index.html","914fa2b4b18125b33a8a4c8733ca526c"],["/categories/Java/NIO/index.html","06044acb3f3de2d57565cdf5c8741c09"],["/categories/Java/NIO/原生NIO/index.html","b54e68292362dea16277cc19f9e681c9"],["/categories/Java/NIO/文件操作工具类/index.html","67b93579411ad3919ddf71c553ec1aa2"],["/categories/Java/index.html","5ef37da8e60686a89976c3ac18932e78"],["/categories/Java/page/2/index.html","8b4ab2b7a01797e0e32d47695080e042"],["/categories/Java/并发编程/index.html","2912837388b58a88ef6468022c623959"],["/categories/Spring全家桶/Spring-Security/index.html","426f0e80f8c33aebc65b44809165e904"],["/categories/Spring全家桶/Spring/index.html","3f2dd83d24d436f1dfee2f0fdf930421"],["/categories/Spring全家桶/SpringBoot/index.html","e0f9cdb55f9b8ce792148e99d562937f"],["/categories/Spring全家桶/SpringCloud/index.html","95aa50f554053aacfee410ff7e561be8"],["/categories/Spring全家桶/SpringMVC/index.html","d92c0bdcb3e86a5ecce00aeb88432dbe"],["/categories/Spring全家桶/index.html","7e0573ceb357ff5abcc1658e7c617477"],["/categories/Spring全家桶/page/2/index.html","94086d32abaca6a9955ddad26f1ea2d8"],["/categories/index.html","951babd71c4d8aad04cfa15f350cc524"],["/categories/中间件/ElasticSearch/index.html","9155b579e829b538da881a7131311c66"],["/categories/中间件/Netty/index.html","c395afa6a91cba04341109a0e5328ae8"],["/categories/中间件/Redis/index.html","72c1d9640eeda9b0e4986f48e5a44107"],["/categories/中间件/Redis/page/2/index.html","b2e241fb057bf57157e196f1bbcfaa40"],["/categories/中间件/Redis/page/3/index.html","ad0a32da2a6b8790a966685a2edf1443"],["/categories/中间件/index.html","04f4a11a84d513b942b8f852ba2bb21e"],["/categories/中间件/page/2/index.html","1b45dfd437524a7435faed3f6ed4c5b9"],["/categories/中间件/page/3/index.html","fe538c652a6f602e8cc38d1a9f526dbb"],["/categories/中间件/page/4/index.html","fa4907a4c3d2b591d90b74ed78e5cd43"],["/categories/中间件/消息队列/RabbitMQ/index.html","c1d27636f1f28249bc3b03f5f5fd5108"],["/categories/中间件/消息队列/index.html","ad86b244e32545fbfe5ead1682a136b3"],["/categories/前端/Mock/index.html","5b904084e95cf14696799929d0d9fdc4"],["/categories/前端/Promise/index.html","81442b87a24294de081d563558bd0930"],["/categories/前端/Vue/index.html","9205b75ded23bb2a08abeb4542869720"],["/categories/前端/index.html","75d69d8cb8ebf25b5260fe94d0946b35"],["/categories/前端/jQuery/index.html","dc6c6cd466c17306260854a9273ffbe9"],["/categories/前端/page/2/index.html","5bf0e93bcab9f6776212f02d2a3dbd83"],["/categories/前端/原生基础/index.html","0d7d3ac3d2c40dfc392de4b05ca8ccd5"],["/categories/前端/异步通信/index.html","5f11d37b38a81224fd62f02e96c9a95a"],["/categories/工具使用/Git/index.html","31da6ff34b56e7a9d8cd8133d348343f"],["/categories/工具使用/index.html","ea6b16b3c6cdea822382f50fc8503f0f"],["/categories/工具使用/markdown/index.html","3ad4d9d0a626059601cd669a2a084fa3"],["/categories/工具的使用/Docker/index.html","66f6096eb89a8bfda997457213024335"],["/categories/工具的使用/Nginx/index.html","70a02ea6283e132f192dc10cefe049c7"],["/categories/工具的使用/Swagger/index.html","52fc2f8ffde91f2469f74b0a78bf1e9c"],["/categories/工具的使用/index.html","37ac0ab432b8b0c8c35763f61413e8c6"],["/categories/工具的使用/博客搭建/index.html","f18ccff4f3561b48c855ca4443ac7c84"],["/categories/数据库/MongoDB/index.html","1c6a7e8fff2141f7f4d8915edfb76b87"],["/categories/数据库/MySQL/index.html","3995b06ff9c3395121f221491fee4c05"],["/categories/数据库/MySQL/page/2/index.html","28ea2fe41d60f7271ab081668c020973"],["/categories/数据库/MySQL/page/3/index.html","dbd78cf102b29a84b441cb439f68c0dd"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","6032f0e30b0213c138d77df35ca163a1"],["/categories/数据库/ORM持久层框架/index.html","517229ee5d7af4a31919090e775e5fac"],["/categories/数据库/index.html","5ede1cfb18f2e907e3ec487022d38399"],["/categories/数据库/page/2/index.html","0e8571ada9a35d8b541e1731832f726e"],["/categories/数据库/page/3/index.html","6e20d6d60c597ceee062acf4c401d8ee"],["/categories/系统设计/DDD领域模型/index.html","895c33027e857ac7c0e5da248698b614"],["/categories/系统设计/index.html","0daaeb1ebe59e82dbb51733bdb7acbf5"],["/categories/系统设计/page/2/index.html","04eec0a65a4a5a80d71aec1c307e8ae7"],["/categories/系统设计/page/3/index.html","ed5986cb10dd5a1a475796c31fee235e"],["/categories/系统设计/page/4/index.html","a7fc25f87c0544ff7828738715a9f711"],["/categories/系统设计/分布式权限认证/index.html","0f88ca30936804ea24ecfcdc3a745ae7"],["/categories/系统设计/分布式系统/index.html","f2a7e12fa49cee134ca7d577c48ec2ff"],["/categories/系统设计/分布式系统/page/2/index.html","c1c5a25e276518814d1ad1b49291afeb"],["/categories/系统设计/数据库优化/index.html","379fbc7c15c348347cb4b1d7c873fb09"],["/categories/系统设计/设计模式/index.html","1932d01cc6857a5ad900d2b0249d870e"],["/categories/系统设计/设计模式/page/2/index.html","e58a94fb18d23385596c6928507be003"],["/categories/计算机基础/index.html","c83b8aba6e5dcd59737ac689b82554e8"],["/categories/计算机基础/page/2/index.html","f7f69afa2a0ca2420b345b0cee65fa19"],["/categories/计算机基础/page/3/index.html","6453ff40b11ba685c0f7319185d9344d"],["/categories/计算机基础/page/4/index.html","94f1388dcca74db0972a9afaa494abcc"],["/categories/计算机基础/page/5/index.html","3d0ce6e1451a7559ecbfc8c93aa5e699"],["/categories/计算机基础/page/6/index.html","393e834ca18e5d8027839737ddbb5d63"],["/categories/计算机基础/操作系统/index.html","83daa343f29a6fc8964114acaf83bd26"],["/categories/计算机基础/数据结构与算法/index.html","3e8f4a6a151914cd82384b4662df5b95"],["/categories/计算机基础/数据结构与算法/page/2/index.html","e9cd5a97edcc6c1fa59c084b2c8f2d79"],["/categories/计算机基础/数据结构与算法/page/3/index.html","d34dcfbf1bd76c75d14e6fb46d2719ae"],["/categories/计算机基础/数据结构与算法/page/4/index.html","0feb80b05979a54727a2696783a03b3b"],["/categories/计算机基础/数据结构与算法/page/5/index.html","c0f8335c0e415bddd0c8acf574a83ca5"],["/categories/计算机基础/计算机网络/index.html","be2620ac91e7d31161aded97deadd060"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","dbe4bd94f354623c6d8f0b425ea38994"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","43bb783cd111657a0737a92f3f06ab96"],["/messageboard/index.html","624ead26af54271b5bc0f4bfd7807b21"],["/page/10/index.html","084d85715e0f8f3a151e6979509dea5c"],["/page/11/index.html","3a4c0c2a153531edf29435fdda576497"],["/page/12/index.html","8b8799f5d90bbe0cb5ec56f3b28e6d82"],["/page/13/index.html","38896379f12ad37ec455e11d5665ab2a"],["/page/14/index.html","e3aac1369b69f8c23cc60aa498ddddb7"],["/page/15/index.html","f0fd0c0e760a79af906c421583c9c79e"],["/page/16/index.html","2c709408b8e817863f5f2b00ffdce6ec"],["/page/17/index.html","08cd6d48c7d8a141b9dc0bf6b12ab55c"],["/page/18/index.html","87295cacb3cfdb5c4689d2e5380f3837"],["/page/19/index.html","3e09009d26084d36967e2d17e0284440"],["/page/2/index.html","83bef51e31ad785301f8f9e9ef2229d1"],["/page/20/index.html","83dffae80e8f8f646b7835ca44d34654"],["/page/21/index.html","8ed6da8e6f5e4aedb7839c311903d5fb"],["/page/22/index.html","2b4a8afed634ad05d613754078f1cffb"],["/page/3/index.html","ed639224a8070ed06ecf56a9f72b04ee"],["/page/4/index.html","a5acd61caafe4ec43747b1dd777bb296"],["/page/5/index.html","ea6453c4390bb67b2bbc401cec221b1b"],["/page/6/index.html","81a72e76311cd87053612e09645aac30"],["/page/7/index.html","8e686212976cae8c0f97a21c5d44d157"],["/page/8/index.html","b1819554ca32b6b102e2dde9f5315b5c"],["/page/9/index.html","9c7a04848ff4ddee34a1d1001015624b"],["/sw-register.js","3d7cd0466d260ee9888a841acf13bd09"],["/tags/Ajax/index.html","83008ca9c192fb535d685c93a7669cea"],["/tags/Axios/index.html","372f44493ac955d3f43b915c1f501825"],["/tags/BASE理论/index.html","8328bbb9725f07e6ac2250fea38f6647"],["/tags/CAP定理/index.html","c82caab66aacbdb21401bb657e0c560a"],["/tags/CICD/index.html","5d33074b549f0443a85d09440e4e3f20"],["/tags/DDD领域模型/index.html","b2240958c8852f2fd5e084b17b6b8d5e"],["/tags/Docker/index.html","fc8dd31a9f3c02a4e5eae81b868dc1d1"],["/tags/ELK/index.html","8a052f7ff5f989d54d201874806fe832"],["/tags/ElasticSearch/index.html","9f7dc81c1669232b8f6933d5dd1d6e23"],["/tags/Git/index.html","bf08d365a1ea1695f85492d1081dd47a"],["/tags/H5/index.html","719c95855e87722c213ccb1e4a2ae51b"],["/tags/JVM/index.html","14effa30994e345fe99e8b7ae00a7c87"],["/tags/JVM内存模型/index.html","0cd27c68e3cfa5a7157a720f9eabdbb3"],["/tags/JVM执行引擎/index.html","33064d2de12f9248a86bf663a2c0b1a3"],["/tags/JavaScript/index.html","6b9c6b499f946439fd939e8f1ff66af9"],["/tags/Java内存模型/index.html","142fa814bc7595f6678ccbd592addae7"],["/tags/Java进程线程/index.html","8bc44151cd61574cc147f941f2ff81ce"],["/tags/Kibana/index.html","89247ca5cf7c0ff1ea94be95f49abea1"],["/tags/LeetCode/index.html","61fd09f07ee99ff95ed911f76d288c30"],["/tags/LeetCode/page/2/index.html","a8ed89fcfacacf92ec86bc560e8b605c"],["/tags/LeetCode/page/3/index.html","c39229e19b0d5da3442a35319a46932a"],["/tags/Linux/index.html","38eb43b9da59514986c35b86ab629904"],["/tags/Logstash/index.html","8722b20479340c4418d38f898eaddbfd"],["/tags/Mock/index.html","e41f6b4d2c766ee5581e75f7820ef77a"],["/tags/MockMvc/index.html","86fde9ecf8822db271788931b47a8e8e"],["/tags/MongoDB/index.html","636110ebeaa0e1b916d7621b75531de4"],["/tags/MySQL-事务/index.html","b4f9757b43d5dd675f73dab52ce9f744"],["/tags/MySQL-数据类型/index.html","cf9129f9c159a056954baea818f8c5d2"],["/tags/MySQL-日志/index.html","b89d73f36f532f107019504351f220e9"],["/tags/MySQL-索引/index.html","49b885aaac66fa8f59e5796d3ccd0487"],["/tags/MySQL-锁/index.html","0fc98e3d7d981bec8f9ca703db2b5425"],["/tags/MySQL/index.html","cedd869c016265b875fa8925eb599ae1"],["/tags/MySQL/page/2/index.html","e21fef231f78039e346a84f68b21745f"],["/tags/MySQL分库分表/index.html","723c38ef153f09bf6b79716208517e08"],["/tags/MySQL读写分离/index.html","22e3ac0bea64d5cfde433070f46dd5e2"],["/tags/Mybatis/index.html","6672e3c10aa57e7179d09817f240aaad"],["/tags/MybatisPlus/index.html","b7f3ebd6dc9952145c45bed761b8c0e2"],["/tags/NIO/index.html","c98abb91e95f57c2c31f2b9ff376641d"],["/tags/Netty/index.html","a2d5e4d33ef1990619215a75e9e8c727"],["/tags/Nginx/index.html","0433f837f5b074de833d129acd722635"],["/tags/NoSQL/index.html","59588ee8795d0a879ea46d3ec5b54793"],["/tags/Promise/index.html","411c599e23a3f19b3ddb7e90e620cd23"],["/tags/RabbitMQ/index.html","c9d47d391371e61255f230086f1e6f46"],["/tags/Redis/index.html","dbf557f4d9fdc218e17da2f75eac834b"],["/tags/Redis/page/2/index.html","b03e41ca5a441eae8e0ce8b36b5104c3"],["/tags/Redis/page/3/index.html","58ef119290926af2b65ec83e5f1d6666"],["/tags/SSM/index.html","60701ca9780dcfe87e9bcbc4afe048cb"],["/tags/Spring-Security/index.html","bd842399b936a6a8b000ace06ed34a4a"],["/tags/Spring/index.html","a2959e0a741e1ec5a8843ba8f2df7b1e"],["/tags/SpringBoot/index.html","07701f1a4d70fcdd470f0d2b35d405e3"],["/tags/SpringCloud/index.html","5b44853056bd35b737fb9d6be9ac0d48"],["/tags/SpringMVC/index.html","d389a63b164f349280b22f86efcb5f96"],["/tags/Swagger/index.html","240ff101f495ea64d94f6c319e5813dc"],["/tags/hexo/index.html","c63aaeae49681b68bcdf94cc94d643fb"],["/tags/index.html","e5bf14ae9a30bc3b7bb93496d4710f10"],["/tags/jQuery/index.html","edc4130ed40dbd0ec631be057fe53482"],["/tags/java/index.html","29e334fa1cab2a663e70d61cf7f9fc24"],["/tags/markdown/index.html","0997dec74198cd05fe5fb57222d3c52b"],["/tags/typora/index.html","b370d6de792d5b2dc9ca69ae3052dbcd"],["/tags/vue/index.html","4d96a247766c8fb8ac5d99d57b3304ea"],["/tags/享元模式/index.html","50692072a74cd8095ba29fffd53c7ecd"],["/tags/代理模式/index.html","a2b52c32464fccdb82d17b5b1b65eafe"],["/tags/内存管理/index.html","c4ade1c3118ec58a34aa91fc4cb436bd"],["/tags/分布式/index.html","fa74a1d858847e3c15ebb084667d5f90"],["/tags/分布式一致性算法/index.html","073923a887f0235236ef139c658ebcd2"],["/tags/分布式系统/index.html","4c05f95ed6dddb8d06d7ea6dd3ba2e21"],["/tags/分布式系统/page/2/index.html","b791d0cace7194bd64f995f0b916124c"],["/tags/分布式系统/page/3/index.html","57c1f0bd369bc8b39a144531a4cf76b9"],["/tags/前端/index.html","2ad1eecc6e7d7d3ff4c1f0041c4a69cb"],["/tags/前端/page/2/index.html","b0c10e83ca1b7e3d15a348b8dd1d60a0"],["/tags/动态通知/index.html","ba06185c7a2d4c204ac5972026efe23c"],["/tags/博客/index.html","8910ab03cb607bc9160d44a409a7c502"],["/tags/后端/index.html","9d35aed12daed20216e9f7ddbf693688"],["/tags/外观模式/index.html","f2b6309b0c3529277b151230b459f8f3"],["/tags/多级缓存架构/index.html","dc09842276f9ea2a700fc63df2515b03"],["/tags/多线程设计模式/index.html","1beb0fc88de8c7b102d4d26e800b15c0"],["/tags/容器技术/index.html","98c5bc7dd5c72dfdeb691166e57206c6"],["/tags/工厂方法/index.html","4ab67ff575047dfb1d8aa77f7236e836"],["/tags/开源协议/index.html","fe298361281f74557e2f9a06b3e58c2b"],["/tags/异构同步/index.html","adb6fc44775ed83630ddbe73c6d31622"],["/tags/微服务/index.html","c97ce6ad81cf6d0008eb297f826c2603"],["/tags/抽象工厂/index.html","74de3b6baedb807fe1b7257db4b286c3"],["/tags/持续集成持续部署/index.html","0d86951a9ba4056a12ee1c1e6c9a48ff"],["/tags/接口幂等性/index.html","9a4a66afc4de0993a2dfb71690399ecc"],["/tags/搜索引擎/index.html","0a5a5a17869312b22ba67b5955138a57"],["/tags/操作系统/index.html","28ae6237daf521a98389e22af13255ca"],["/tags/数据库/index.html","a81d14c33e3a9fd9f5b952cb79a3cf0c"],["/tags/数据库/page/2/index.html","de183208ac371bae69ae7555438dc6e6"],["/tags/数据库/page/3/index.html","88e800f3df1d39ae37926a3100ff68b4"],["/tags/数据结构与算法/index.html","f29effad4a9c8164dfb23198b3992adf"],["/tags/数据结构与算法/page/2/index.html","c3de7edbb58beb16034f68afb02f4550"],["/tags/文件操作/index.html","c2c106d859a49373054c74e67b44e7ac"],["/tags/日志/index.html","16b6b51531ccf9315498759dd2da2817"],["/tags/服务器/index.html","1ec0e0ac12410ee7c7c7edbe13e307c5"],["/tags/权限认证/index.html","75153fd958766fb2406c7ed92e0a79a6"],["/tags/架构分层/index.html","444a597301916d2f03ed6d013fabc204"],["/tags/桥接模式/index.html","3cacf09eaac59c4f56666663dedb273a"],["/tags/模板方法模式/index.html","f24f44c167526368ee3bab52065e98df"],["/tags/死锁/index.html","7fcfa496d37a42560fb0bfcd22e177c5"],["/tags/池化技术/index.html","a1c81b9b778393300d70394df71faf0a"],["/tags/消息队列/index.html","325cc480bdbbbf8a7310174bdb7faaaa"],["/tags/版本控制/index.html","c855e596472786fd8af39c7718070dfa"],["/tags/策略模式/index.html","50130c8a5eca53864b99670368da8ce6"],["/tags/简单工厂/index.html","411563eef9d277702a2a5af8be92ef50"],["/tags/算法/index.html","fb6262aa377ea54e9d06976bd3925f66"],["/tags/线程活跃性问题/index.html","7d324681eb327c9d0236661bcecda694"],["/tags/组件化/index.html","d4777333a1a0cdbfdaa8810960f9a3d2"],["/tags/经典限流算法/index.html","4ae2995e5da2e6c678cb7699d095b753"],["/tags/缓存/index.html","19aab2876fe276832591be364d03b6d1"],["/tags/缓存/page/2/index.html","4c4fb1aaa324c79ce70fd3b8ac80319f"],["/tags/缓存/page/3/index.html","ce6504860c4b9f7e279454e21e13ea4e"],["/tags/观察者模式/index.html","a3b99844d690f019a4b59cfe97ef98bb"],["/tags/计算机网络/index.html","01ac448a7f80877438a91e854b5b179c"],["/tags/设计模式/index.html","657497b17a8e936c179eb2e8d8e45bf7"],["/tags/设计模式/page/2/index.html","0c2387e578026d4f9ebf3975b7d0d9fe"],["/tags/设计目标/index.html","38683c154c3df2997ec66367b06684bb"],["/tags/资源共享问题/index.html","55b813e3d04aecf9e7eeb0bdc3a1a0ab"],["/tags/进程管理/index.html","2a84418e1d7690681e21abea06020873"],["/tags/适配器模式/index.html","f2b2c265374250c7a72745e01fd224d2"],["/tags/通用设计方法/index.html","3dd3613ed5dd02240a0f0bd43384c9a7"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
