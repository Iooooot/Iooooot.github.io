/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","a847a21f1b7337cf35e18ccf27001658"],["/2021/02/22/工具的使用/博客的搭建/index.html","fbfd7b37a3ffa3c97b65e958862dc91c"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","e156f14c0f809cc2a65ea8aba9331156"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","e196290f3a93e8a451c88a1dfb48d7c9"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","fcaa4ff6ef2a3537f4f2b7f14ac74af7"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","37c39633f18aea1ba68a0db93ffa47b7"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","32be459a4e8c66b81b1e4639fe39e1a4"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","4c10ed1ce1e77ca9a0d69a2e32976fe8"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","2c4ccc8c113a611fb8ba454f443e480f"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","c9f3c569ecadb6b0db8c60d2ea93d1fa"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","9ed12dd773291113178ca7e28ef33040"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","54dd23f6a82e6b318b639fa247b25f74"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","b9347b703431d3e4250863e934348df0"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","cfff7489ccf187472e754a0dcae296b4"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","342511338663348ef644fd635e53a922"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","125854e626e479b9e4121de5ad110261"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","b079105083edf7492f9710991e560b8a"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","15403c81928bdd2b98a6fb374ee9238a"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","4a9a2beaf7695f0cc18f8636a4352fd1"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","c60363eee3ad938056a1b75440ee657d"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","7b7ef3884bbb5479c106143ce0cbeab0"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","c6a917fb9ba979c1e0db1652896088d5"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","b8b101ae1aa6414a05017a68d33a8288"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","8659decdbcd8f1e9a883ba1f06a82224"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","6cd740274825f5c3b4fdf52085eb8df5"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","b5740f68c7a774114711cf2ee9bad46c"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","871b3e0a2edfdf1e040709d3c215fe2c"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","fc29c908e7d2b318617737001923a441"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","bd2a61babef5cdf6ac72ebfe0c07356c"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","a38a79990bb652b5430e436949e0c61f"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","5fc2ca7fbc3e9e552df6bb92607c7b8b"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","31bf039fd4e447396133f187c23a42f0"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","7f7b64e522ba37502e2a7840479b64c0"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","5141a7fd3b19b68471056ab7cc1e5426"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","d41e9c17ead72631446d2c574ed63f53"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","c11e4f9506f73e3959a8e20c3db7a669"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","01f129ac6a93ccfd88093233e8060814"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","9b4916e6f9b981776e04f6bddba59f4b"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","c64e511f1e043587fb4716ba75676a43"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","8040135f995a65e43baedf9dbadd9acc"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","8bc397ad3532701751c7bd9db2a20b47"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","339d504e2da7f4a651f5670eba37efd1"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","4f746aa4175752d44018c4b08375021b"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","54a116d78ac2b72cd553550a0b4a249f"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","ed75c7a6a67efcde66f994dc9184a635"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","96c555dfe5b1286fc4abf351af9bacd5"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","2ef7a81fd69465fd8ea5ddddc50c6317"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","15709b2bb962efede2d3a3f252a5ee7f"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","d6814fae3386e3bb5935e3ddf58a5ea0"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","73e1661c7e526b5d4bbd570a01e18d20"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","9d2ea2268a7f20263ef5427ededefee9"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","b8e6797ee27edf21c3bef1adfbcb773d"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","e683067e41090124cadb770f6204832d"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","343f16c1f4b775fbddc36e821aa8d906"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","8c1e399f94bc42076593de4728486bda"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","3f7ccc3543fe05a47d0bc38c5d79b741"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","a8fd1008cc552596eb09d35965e51512"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","38a84e64887f89a662769e3fadead728"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","708dcb0d1e10f08548c5b2d21c61cc65"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","cffcff3a9b05f89f343326e204d76f85"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","64f41131edf49768157936eda84cbe9c"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","32ae2872c57a0fa0d7f408b5b49e332c"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","8ff43325d7bec734e0a8dab9f56acd40"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","3288d67207f5524c513484a6a04c7cae"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","35bf13c1ef4bc1b74ad0ddebd79c1858"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","dcf8f4a133975677a2b206184b06569b"],["/2022/08/17/前端/jQuery/index.html","4196f0f22c1052b7b2082a80038a8d70"],["/2022/08/19/前端/JavaScript/index.html","6d8dffcf16021943624fb6d4859b13ab"],["/2022/08/22/前端/Ajax/index.html","3514ea6be01700027d6f21740b705dcb"],["/2022/08/23/前端/Promise/index.html","53318d42c76e7818a1786b4820ba9188"],["/2022/08/24/前端/Axios/index.html","869c686e5b71dffca242f252386ef07f"],["/2022/08/25/前端/H5本地存储/index.html","f62b9b23cdae77f3b404253a328d0684"],["/2022/08/26/前端/mock/index.html","217290bd3134ca19f31e212a8c1b0165"],["/2022/08/31/前端/vue/VueJs/index.html","7ad1f6041b0b9c60b47752005e606973"],["/2022/09/01/前端/vue/vue组件化/index.html","17534235af76cdce8a78046190484a40"],["/2022/09/04/前端/vue/VueCLI/index.html","1e200a9991a1733000891f1bb8ec2839"],["/2022/09/07/前端/vue/vue实现动画/index.html","1df2b1493f247ab2819fb2675e1bfa06"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","89531ba38e24a95be3a81da201982c4d"],["/2022/09/10/前端/vue/Vue异步请求/index.html","aba3f44f1075f6be5fcbd4c29f292eba"],["/2022/09/11/前端/vue/vue-Router/index.html","dcaf2352ac4dc48ba7212aab21861e76"],["/2022/09/13/前端/vue/Vuex/index.html","d457dd8bf3b8e7b9b6fa36b786df7e15"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","74bad1f6968e65e6fa511bd778c14ce0"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","b3bfa77b78139d867c7a65de94d2a9d9"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","69e2870385ed58bfc072ef4eda821828"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","7a6a5124937e5852c1c94b6d5f47a6f1"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","9af1fec6d996450b53d0764721cc8039"],["/2022/09/28/DevOps/Linux/Linux/index.html","0d091b710ba2faf86075b617d427210e"],["/2022/10/02/中间件/Redis/redis基础/index.html","83c92f66293b5b21a5d62927f826de45"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","526d3c9753fca0ec05253a45fe281468"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","daa63e9a90208ea5c0283a011ca7ce7e"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","d7d745d3b0cf9bc6a7a29f97d57ba0aa"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","c0678f7295f28d377144a64aa8ca6578"],["/2022/10/17/中间件/Redis/Redis集群/index.html","e41dc3dd82ec14f20e469aec2ddeca00"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","513795f53775c6cbaf2e61824c3573c2"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","6382c4ecbd0ec8b0c2ba1bc27e85c271"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","7a32f8e710bbde4f14bbaaa08032042c"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","a93358f91c802232e5fd431f5c1d4103"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","d3f29ae38ad1896a4ce1a63678c3da39"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","b7daaa402874ba28895dd8ffea42a4f7"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","7b029aa543ef8ce49a0cbfc6496b6dd0"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","dc14e19920e32e22ac93d1011030a699"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","b2f3094648517324e932c984e774eb14"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","c4a618244be6e627fbf8e2ccf4c3b9bc"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","0d877ef2bee16267ebf02cae2b5124f9"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","71f8bee6d8bf17fe339ea15809bd0069"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","06c31c43c36ba53a7d10b193a191e698"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","38c23a258f8fa13c136b9e2a7707e8b6"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","2dfb8dd2f702ca3fc61f7661de5526b1"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","355164f2e2a81259a3f4c22d0e28d1be"],["/2023/03/10/DevOps/CICD/CICD/index.html","7bf05f3a01500984a27d5fda465efc45"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","3bf9e2704fbf3a9a25fe38d84384d89a"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","e4b39bb46935e5ff3625292b367f6271"],["/2023/03/13/Java/NIO/NIO/index.html","1d006eeecb5fa331d0f4832e37d6ab6f"],["/2023/03/14/Java/NIO/Netty/index.html","c3f4714661f8d8d118994cf965d98c8f"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","e28a2c6b46019f667f77bb944ade987e"],["/2023/03/17/系统设计/分布式系统认证/index.html","9dbf7de167d163d3e2f88078515ff1c9"],["/2023/03/19/Java/JVM/JVM概述/index.html","c17771d476b70447b4196a6aece51322"],["/2023/03/23/Java/JVM/类的加载过程/index.html","b187afc9ca3c26f97fe5ac2b4ea52788"],["/2023/03/28/Java/JVM/对象的实例化/index.html","0ecffdacc24cfa78b8b835ea93917c21"],["/2023/04/01/Java/JVM/运行时数据区/index.html","95c79d75306f6436040ded684c33af22"],["/2023/04/04/Java/JVM/执行引擎/index.html","6da2ce258a3e62f843558eb5cf89a360"],["/2023/04/06/Java/JVM/对象引用/index.html","e1e5b5318d520e0a939bf39c35b693de"],["/2023/04/09/Java/JVM/垃圾回收/index.html","79189e439ff1e2282cad99f8d0d4fa5c"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","2bc54e31c7aca9b22d5fe250d229e674"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","4ee33063b7156573cb856d6dffaa8796"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","fcef408a7c8d19076876df4a84b1dba7"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","7534f5752eedfa92856c2873e6d60890"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","7c573f22d9a5dc38be479e5d847126f8"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","7571acf89c0367b5bca5eab414b60dd5"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","6ad4d4477aef2cb2d84e1742517d4433"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","8c4b857eb5f61a5c2e760c7fb6340f25"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","8cd82f37feb2a741378a52fb34407256"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","cc864053511d6afcd5d7939af55b6faf"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","c53c41baa194e4ad9ef6f5d3c9ad5fa6"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","95aadf3f70a5feb3372adbdb13fd44a3"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","2675d8ecccbb91bd1eae1e314ad07b9d"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","5a00367169c475ceb3d3bb92aae4acdc"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","8549d55919d9acb2ffc7c52d46d886eb"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","b225af5678f81ff575b02dceec5face7"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","69c5f4769126f6a064fd4cc032da6a7a"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","934c12632bc42c6bddd31fe944402d2e"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","0da9876913ec22059147f9bce6174afc"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","eac2a9984f5919fa015796f8d08e1f3a"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","a34ba8e09ef201c54ddd74bce2516ef9"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","5ee2daa1b3da1f62f2573ec6773286ce"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","f8d4734c4cef11428ab112839598a479"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","483f80dd35e7c57f9c0a48db1f379c79"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","63161643a1efddad3e6804f438558aa3"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","dcc9b287b9e644faa1bff35199e6a83a"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","ccf3b914dd27f4cb55c085d2957d9094"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","34b3b1d92c59fb0c7f382a8d084f090b"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","72650d653ed0e0d97c0a7b1d3cc85102"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","8fdcad4d29ee9f3d29d83c8d186abcc7"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","3760f6d3358f2a189ee5cd3ea8740a33"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","77e0ec398c46ed1996b61f76c61dcec6"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","fe94e111614fc4f0542c359e68082238"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","95994a2da757633530807e66dca6ed5c"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","921ee06bb809084407ca5e9d6690bcc4"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","1576ad2d1964d3ab85eb080c28f3424e"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","9c25c298b2b83a8c9f5cb2a5b64d2f14"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","d1d89bbfa1360553f5f0f1dc0ae65f7d"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","3fad41a6fb1b4385bea0da9356384fcb"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","d24b6c7be0d4da7348a2beb02733dad4"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","7c153dbaa3337fb036e863f43ed35a0e"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","9c83cf4f7822d27b02a212a00c89ffa7"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","7b82604214eedaf07df4da69201a9911"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","d869e6da521171aa2fab6f3eb493a4a8"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","1b2774b2b5f40884a9da25a9f6b42aa4"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","79a187cd83c58b182a58934d9d4cd4b3"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","f5e3b76e3fc021f05fc8c30bad1c5762"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","a53c4ad9884aa331e70c4331bf31a0ae"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","122731de00fb1e337b63319f7f748dc9"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","7b7be65eb0dea74be9eaedc31ec67ef5"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","16e0437e1582b31e207f64f83af54e61"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","6e8b8b35d3fea7f5e975889ec2199dc0"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","b097ffbba5aa04d9ee89d0e06c55c211"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","e047e3b2a108d7da1abc885fa14b7ac0"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","2d9b88c068b6a85d91855a7544c99ff9"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","ba9e9011e09b3c403219588b7b39b3fd"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","77308feddfd308560301176b7fc4a73f"],["/2023/09/04/中间件/Redis/Redis事务/index.html","78fdb8a027f6955cbb4a9cb7d8267edf"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","94c6a9291051856a4dc8eacae0b3c603"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","20ed76632a77110900eb8105556b1854"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","265a8d1036eddfb88d6c1234f922181c"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","f66b702f3899d2e8463cf0d439ca2245"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","f9325fe3697d248679dcf9820850645c"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","3f9a2dfb5c4b853673dfb8c4d0e6df7e"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","be1a687961844357963c9f7ef399cd01"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","5a037834e23694d339e462ae733dbd0d"],["/2023/09/22/零拷贝/index.html","8b35636a01985052924b9769d0f72e96"],["/404.html","37d6de45beb00620c948c21175343aaf"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","aae5cb0ae956a8e1ca5600245868aa42"],["/archives/2021/02/index.html","49c8cc483ab0229183ce59951ceda30d"],["/archives/2021/03/index.html","25f92c22254f6a86d00d2895682f3401"],["/archives/2021/03/page/2/index.html","e75bb024c9fe7b105a7a4c593f0c2c39"],["/archives/2021/03/page/3/index.html","aa433494e4347ad1aa2ddd67237a7669"],["/archives/2021/04/index.html","24c56bb0ad46cae7a26439df7a004884"],["/archives/2021/04/page/2/index.html","429d37131bd444d67fd7c64768f68c9c"],["/archives/2021/05/index.html","f4f6f505a06acce9a637b33accc2aea0"],["/archives/2021/index.html","1ef9b66b0d0578b205f2cd1b78f0ca7f"],["/archives/2021/page/2/index.html","7058761d7b04f3127d395918b0661bdd"],["/archives/2021/page/3/index.html","9ab8d435e68a51ace91f9cf26a039e6f"],["/archives/2021/page/4/index.html","bfda29babeb35aab320a40802a594723"],["/archives/2021/page/5/index.html","bc89ba3bbfad55f897c4546509fc8b55"],["/archives/2021/page/6/index.html","acfc79dc52c6f21f6caf3f3397bc84c8"],["/archives/2021/page/7/index.html","00445a6107b3da5790ac9b589fe32046"],["/archives/2022/01/index.html","cffa1721179083b879f387830802533b"],["/archives/2022/04/index.html","f42bb1bc1adeee43387c74eee9be6334"],["/archives/2022/08/index.html","7d85e9fd5c5a44d50dbf45147e6c6ad0"],["/archives/2022/09/index.html","7b69f245b7bf2c6dab51d89b9c96a4bc"],["/archives/2022/09/page/2/index.html","15cedd30d012d5cf0c0278a37f10ccd2"],["/archives/2022/10/index.html","519e91fa505e517e9684c589e4bd2240"],["/archives/2022/11/index.html","12c78f913bbd082a4cca3d07f020747f"],["/archives/2022/12/index.html","a1b05dbd8b0dfcd70696ad753b9036d4"],["/archives/2022/index.html","b42dddf630e308393044bcaecf3e025e"],["/archives/2022/page/2/index.html","7a7f377c6dbf1334ce808ae8e82c7894"],["/archives/2022/page/3/index.html","8af9b742a16b0164a48c6869e52e2df2"],["/archives/2022/page/4/index.html","03e9506b5f453786a8cc5474052601cb"],["/archives/2022/page/5/index.html","aebd58204fd300049be9fb0cb8900708"],["/archives/2023/01/index.html","1a1ff4df66490929454288d19ae00562"],["/archives/2023/02/index.html","5ac769a48e56b71f9b72bc9df1cb10ff"],["/archives/2023/03/index.html","2ab042e9ece16d4b9208acc5d45c85f0"],["/archives/2023/04/index.html","16b962afc2c60f8c614fe3fda8683fd5"],["/archives/2023/04/page/2/index.html","7bf7020781b09d5fc20c2948e0f2367a"],["/archives/2023/05/index.html","5006cfc1005fa4470018297be81dc53c"],["/archives/2023/06/index.html","ef4959f7d88a52ec9566a6f1672cb400"],["/archives/2023/06/page/2/index.html","eacf3ae24b8f2b0f79741aec0c8cb18d"],["/archives/2023/07/index.html","f49e34f60fa5e0fccb7282526e52a559"],["/archives/2023/07/page/2/index.html","b56a92dfc7657813a4e587c8919d8a4b"],["/archives/2023/08/index.html","0b569acab606fac097b6b9be5bad902b"],["/archives/2023/08/page/2/index.html","9922d2c6eff0243a328745f9a45728f4"],["/archives/2023/09/index.html","ccff4cbee5528bf604ff111d45273ace"],["/archives/2023/09/page/2/index.html","6d24cf489f31f3d25c6d2ac4239a51bf"],["/archives/2023/index.html","bb3c4e3c6f7a2c8b477e4438bd8d23cd"],["/archives/2023/page/2/index.html","a22e1a4d325656e34d7afe25037e3c3c"],["/archives/2023/page/3/index.html","db4d34e7e921cfb12d2882e19f1d036f"],["/archives/2023/page/4/index.html","e17d247911394e0fa9c4aaa5729dc5be"],["/archives/2023/page/5/index.html","3ec4168d4486e416b4b42b2cc3feb7b5"],["/archives/2023/page/6/index.html","729a7d97fb3f6c3b45b123e8bef9b995"],["/archives/2023/page/7/index.html","39e774d280ecad5ed5aeb6a8eef678cb"],["/archives/2023/page/8/index.html","2edc75ebe541dadc82fabf678643757b"],["/archives/2023/page/9/index.html","ac841888b205c7f0c3c0f99a62377bf2"],["/archives/index.html","435c85fc6ab64b5ded809c10e836c93f"],["/archives/page/10/index.html","83c4467a2bff80d60dd0f31c619084ae"],["/archives/page/11/index.html","8dbd04b0958950976776ee4356ac76c9"],["/archives/page/12/index.html","4dde8008f4b393ed50874d1f1925e570"],["/archives/page/13/index.html","163cef532d3244c9285fef4cc3ac6c26"],["/archives/page/14/index.html","6ec1733a7c82ec1626cadfa7d9c8fbc2"],["/archives/page/15/index.html","6cd8cabede713973d5b609241eede1bd"],["/archives/page/16/index.html","4a0867b72b2bc58a1bd3139f79667703"],["/archives/page/17/index.html","996aff66dcfbd0617100d88e671a04f2"],["/archives/page/18/index.html","8c42d7ee5099b949818985a57053aabc"],["/archives/page/19/index.html","742a03b1dbe255af271b64b7cdeb48c8"],["/archives/page/2/index.html","86707fc08f2f340a1234e8a194073bee"],["/archives/page/3/index.html","748b68b70a12d0758b0aeaa431a0bd4e"],["/archives/page/4/index.html","a558f8dc942e4d9d7434c3980aa529af"],["/archives/page/5/index.html","e0c5a8de9a8b22ede5e965f031c58967"],["/archives/page/6/index.html","34235a6ed39e3ffa7938384761d0fad5"],["/archives/page/7/index.html","34013f174c71fcf22509b9ae128ec21a"],["/archives/page/8/index.html","87734d2636d41ee6bbcdacc7793d9491"],["/archives/page/9/index.html","07aeb84e3b50f764ed93f96ced8ce9ba"],["/categories/Devops/CICD/index.html","987b18997e8e29f07d2182c2e70f397a"],["/categories/Devops/Linux/index.html","a7ee00c07ae1b89a6f25dad38037e90f"],["/categories/Devops/index.html","d9a9f33cc1b60b865cdbbcc341649520"],["/categories/Java/JVM/index.html","14548349eb5819204f54bfa3d22cd394"],["/categories/Java/Java基础/index.html","6ec68a08f44992673dba7a3573e9b23d"],["/categories/Java/NIO/Netty/index.html","fe90ef14201a68c07c6c12bd3fff80be"],["/categories/Java/NIO/index.html","2cc01b866c9f715f1d429d949e43bb4a"],["/categories/Java/NIO/原生NIO/index.html","9acde17716c2f84281c25a4b4247952d"],["/categories/Java/NIO/文件操作工具类/index.html","14903f710171cdb0fe830eea8832be6d"],["/categories/Java/index.html","6c74440b258d51d94c33752a49fabe0e"],["/categories/Java/page/2/index.html","fb194a7a3b7efe4a1186eef157899f91"],["/categories/Spring全家桶/Spring-Security/index.html","f5a932b1e93023641b7fd1679062cd7e"],["/categories/Spring全家桶/Spring/index.html","0921bda0fe108e9373e59c7177e06496"],["/categories/Spring全家桶/SpringBoot/index.html","18167d94eeeb3b9b8d0d1fa97a0c99dc"],["/categories/Spring全家桶/SpringCloud/index.html","ae4d9d065c437106509d52230ece3f93"],["/categories/Spring全家桶/SpringMVC/index.html","6787025511409b25b628294f689f2178"],["/categories/Spring全家桶/index.html","145de54520fe31b2ef42d377576c99d6"],["/categories/Spring全家桶/page/2/index.html","810d5c703480f11b43835ac2f0a01b38"],["/categories/index.html","b2e8f41374d7756a5c6570ee8416edc7"],["/categories/中间件/ElasticSearch/index.html","f4a320ea25d3b9c5f8a616ea156303f0"],["/categories/中间件/Redis/index.html","3a182a5c6c4de5bfc99201d4444bc316"],["/categories/中间件/Redis/page/2/index.html","723a78d8fa46c5e997aa7d27a15fc4ec"],["/categories/中间件/Redis/page/3/index.html","d16b9c295f80203cc3591c3d206e9b11"],["/categories/中间件/index.html","800641611a63a6d2ecf1591befeaa885"],["/categories/中间件/page/2/index.html","c60aa56a6cb5b0bcf161cc710042fa85"],["/categories/中间件/page/3/index.html","ee13fb4d68cbc837c0936d8fbbf6f303"],["/categories/中间件/page/4/index.html","4da869b723ff74b4370e937eb1a89899"],["/categories/中间件/消息队列/RabbitMQ/index.html","48c2113eed67aa0e15cc9272cae3f613"],["/categories/中间件/消息队列/index.html","4a8b5744c735bf187557c7b57a43d4de"],["/categories/前端/Mock/index.html","d223da1c650c2a67b5e07fc42a913dac"],["/categories/前端/Promise/index.html","c7fb681c86058dfd9e000fb02e04bc12"],["/categories/前端/Vue/index.html","2e6401bd10cc589facfecd40900841fd"],["/categories/前端/index.html","c263942e014c4b3c83042a7e7ea0b0b7"],["/categories/前端/jQuery/index.html","d3365f8189dc7ff1790a4cedced9e38d"],["/categories/前端/page/2/index.html","a54e86f049499beee446bb60a8fa7c5b"],["/categories/前端/原生基础/index.html","cf0fd3e96a3b322d6fe3d806e1c8eb96"],["/categories/前端/异步通信/index.html","fac021d68343d3b3a336ade947bfa923"],["/categories/工具使用/Git/index.html","9f6c212d2ca6d852b157ea4b5b9406df"],["/categories/工具使用/index.html","d5a20dd301f561afe033dd8f6c849ed0"],["/categories/工具使用/markdown/index.html","4897e1ed79a0f632ebd8263b7d4c2a42"],["/categories/工具的使用/Docker/index.html","4e6e258e9487f421241e97dceb928744"],["/categories/工具的使用/Nginx/index.html","352d421c4d9ba46ff00cded1e3e831c5"],["/categories/工具的使用/Swagger/index.html","65a8ee50943febc006a54b1e55fe3d4c"],["/categories/工具的使用/index.html","c15aadee67acada3dd9fb0df0e99f859"],["/categories/工具的使用/博客搭建/index.html","044484bd86597cc48900830f867945f7"],["/categories/数据库/MongoDB/index.html","20be188d498b4a5004678d55e25cee2f"],["/categories/数据库/MySQL/index.html","bc8801a78cb40398a9e9beba2342b4aa"],["/categories/数据库/MySQL/page/2/index.html","8fd58c6aa128d96d8ed3ac9a5900bced"],["/categories/数据库/MySQL/page/3/index.html","fd427fc323e2a1926297a6417a66312e"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","4235bdd88af4dc2f269e20625f8b46ea"],["/categories/数据库/ORM持久层框架/index.html","fd0240102620a4de952120ed9368f4aa"],["/categories/数据库/index.html","3d6e65204407200343fe65ee0cd28061"],["/categories/数据库/page/2/index.html","4a585928eaaa091687e2a6011a8c0e4f"],["/categories/数据库/page/3/index.html","3e3c643b76a1bd60632946d08e3a2782"],["/categories/系统设计/DDD领域模型/index.html","b3f596b87ee97dd301415bbe8c225ccc"],["/categories/系统设计/index.html","5ff5980af34f21ab9d163339fb33912d"],["/categories/系统设计/page/2/index.html","14f80d3eaad279a0bccbf6335f354205"],["/categories/系统设计/分布式权限认证/index.html","cebc09a0f2729fc8c6fd0d6aaa5a4f3a"],["/categories/系统设计/设计模式/index.html","9adb9a77261f276ef22b5dddd0995734"],["/categories/系统设计/设计模式/page/2/index.html","5862727345e36f24d4b576932a73cf69"],["/categories/计算机基础/index.html","3d8fd1eb1a060adc710285c493aea688"],["/categories/计算机基础/page/2/index.html","5130d3509deb3ae728f031dbbeadbe95"],["/categories/计算机基础/page/3/index.html","a8be572f816ac7235a1d067060b3afd5"],["/categories/计算机基础/page/4/index.html","f087754b8fbcb3a73f0805a26d1ab85a"],["/categories/计算机基础/page/5/index.html","325286d288a42a3898d20e15975372f2"],["/categories/计算机基础/page/6/index.html","8d01ac6f055c430c43f7ba119e8c9333"],["/categories/计算机基础/操作系统/index.html","e3dc6b48a022416f90fbf282a0e468ea"],["/categories/计算机基础/数据结构与算法/index.html","38a59e3aa7a35536d52450f30357280f"],["/categories/计算机基础/数据结构与算法/page/2/index.html","f3dfbe9af6d944a7768a948031693eea"],["/categories/计算机基础/数据结构与算法/page/3/index.html","d671b0328476478f559ed32a8987a0e1"],["/categories/计算机基础/数据结构与算法/page/4/index.html","459d009c8e4328dc1992861bb29d2f72"],["/categories/计算机基础/数据结构与算法/page/5/index.html","dcb34e5ced0400c11f61fd111051c899"],["/categories/计算机基础/计算机网络/index.html","ebed70279f099e4981ddf7470f606f0d"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","1f56d0b85d6ad25a979e3d68f2e06b91"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","dc583d5458997ccf0e192c6a2b48b2b7"],["/messageboard/index.html","4dae4e438890da03e4a10012d43065b7"],["/page/10/index.html","d90650755b1d9bc2fab6cc9855237e32"],["/page/11/index.html","3d0d5cf1301abc09ff86cf2e9641f0a7"],["/page/12/index.html","4819edfeafe9f87406561456ccf09649"],["/page/13/index.html","e8938215be215ab05ee60d3fd593aa31"],["/page/14/index.html","8f8960c052599a6fa7304a70b12097c1"],["/page/15/index.html","01f1af3bfb62cd3119b38727775cf167"],["/page/16/index.html","dd277b86aa6b13bde7673fe2befc35ed"],["/page/17/index.html","ead4d9ce95ee86543cca22e38e22e0ac"],["/page/18/index.html","d369578fae66f2130bcde1084a81480c"],["/page/19/index.html","653a299486c01a8f5083a5319604a226"],["/page/2/index.html","81745f84f84eb63e9a7e28bebd25b669"],["/page/3/index.html","fe235d76670d5e1b5a23be0b01e1baef"],["/page/4/index.html","b36009462abda4a4b00e4943ac70efee"],["/page/5/index.html","6e75250fa8feacd2e9815e7a94cab03b"],["/page/6/index.html","e52d6823f4d21621126828fd47cfb26e"],["/page/7/index.html","c3467a9dce2d27c8b41f62327525352e"],["/page/8/index.html","27a25fc1289bf35396a64e01f5deda4c"],["/page/9/index.html","608314bede861ee21e129ed81c26aca9"],["/sw-register.js","07a875f80a9e94472fbfe5ee6a9d0fb2"],["/tags/Ajax/index.html","896f2398d9ec96ec7d2e6215eee081d1"],["/tags/Axios/index.html","e909e5fbc67799d9a73352dab4a93de6"],["/tags/CICD/index.html","62411d258d7b5877cd4aff1777945243"],["/tags/DDD领域模型/index.html","caaf9297fc99e4377b96f66b4a7705fb"],["/tags/Docker/index.html","6e5a868e8f778fd003bcca8c2e73f406"],["/tags/ELK/index.html","cda855828eaafba54a85465a9612a78e"],["/tags/ElasticSearch/index.html","4e542abf57abaf85311c8f76259b71e9"],["/tags/Git/index.html","3bb9ec4a1239974700e4ba5d2ed7b85f"],["/tags/H5/index.html","8352b3c54b8cddaf3ba14feffd3309cb"],["/tags/JVM/index.html","483aa924a86c9fcc721131f99632be5c"],["/tags/JVM内存模型/index.html","d7523c89054fd902624aaad04ffc2125"],["/tags/JVM执行引擎/index.html","d5399f20d0b37a24ea736ace48b7488e"],["/tags/JavaScript/index.html","d9fdaed6e49c9216dc633db2c19a76e0"],["/tags/Kibana/index.html","2bf6998f9045b6a8b68dec014035d9f0"],["/tags/LeetCode/index.html","ccac34e1049c728c6581373fa320981b"],["/tags/LeetCode/page/2/index.html","2aacad4664ccf81aef8ff4ec79e01937"],["/tags/LeetCode/page/3/index.html","6a23ecbf1bc14cc03632963dd10551d7"],["/tags/Linux/index.html","f017ca73992722c728ad1024c2ceae41"],["/tags/Logstash/index.html","7a8ab03cb81d14ec39c0c448be9e14b4"],["/tags/Mock/index.html","a4c83941196d3e45a4232916869e0ac7"],["/tags/MongoDB/index.html","0883b7ee60285a04afb3b126313459ee"],["/tags/MySQL-事务/index.html","3b18296250e4794bd52369164a4f8e73"],["/tags/MySQL-数据类型/index.html","8a07e3925c9dd80eaaf9ea37b2daa796"],["/tags/MySQL-日志/index.html","91cf410d2306bae9d030979b10e57302"],["/tags/MySQL-索引/index.html","f83d69ce56141687ad845ac5f348b7be"],["/tags/MySQL-锁/index.html","249d8b1422f09a23cc142814fad2ca60"],["/tags/MySQL/index.html","5d135198e7202ba035662932ce1c0789"],["/tags/MySQL/page/2/index.html","22d3261b74b1a83ddcf676f9da40944a"],["/tags/Mybatis/index.html","b8e90296eede41a9e720d2bd2064eef1"],["/tags/MybatisPlus/index.html","5402fe4836d5d4b4ed109777747b7155"],["/tags/NIO/index.html","83752fced73c0c03f208c689c3e0456d"],["/tags/Netty/index.html","9c6a3dfa9871a9e0dcd1bcabdfc6f396"],["/tags/Nginx/index.html","9c85f73a66a0e551e24af309ae4d9f04"],["/tags/Promise/index.html","da07fa11b3bbe484d228778a9d92e70e"],["/tags/RabbitMQ/index.html","e7472943560810ac60e2ed0e94fabbed"],["/tags/Redis/index.html","12db92a2db5be69437a4d080548eec6b"],["/tags/Redis/page/2/index.html","6ea4aca84e00435f2465c15bb1e1bd10"],["/tags/Redis/page/3/index.html","eaf58bb06d0deaf1557675449c29e905"],["/tags/SSM/index.html","cc4a1e4617875ce8986d0d462c4bbd2b"],["/tags/Spring-Security/index.html","796f0ad9e0df225e96dbfce70edfc694"],["/tags/Spring/index.html","cd8acae7aa1f07c6cc269c7fb1e9756c"],["/tags/SpringBoot/index.html","9baacf823512d730c76a0ac78b026968"],["/tags/SpringCloud/index.html","9038d13325ce3827291832098105e806"],["/tags/SpringMVC/index.html","eeb5f41f30f007f223cd3a47feda30fe"],["/tags/Swagger/index.html","5ca612ea9b16603742ea0ad25e02c8e7"],["/tags/hexo/index.html","bd2c842c3787e50696f3cc7e51adf683"],["/tags/index.html","12d3c6ab22e66f0237a078d8dc334118"],["/tags/jQuery/index.html","5d3cd6eaab9537046bc4726c5eed8b20"],["/tags/java/index.html","11d8519e9814d02de810d47557e980d8"],["/tags/markdown/index.html","6c2fc4ef2c60946f27ca10e921cc15e7"],["/tags/noSQL/index.html","6be0b9b83cc822b578716e5e365d5994"],["/tags/typora/index.html","31f28c67ca959266e9708792c11af695"],["/tags/vue/index.html","222dc7be8d78f67d60ea8f21966a9999"],["/tags/享元模式/index.html","188225ff239f746779bd4722f57b3f25"],["/tags/代理模式/index.html","45d4a008fdcd5f3eff4643ef08caa550"],["/tags/内存管理/index.html","ad4fb8d8e39c7e752d18e25494af7811"],["/tags/分布式/index.html","84a517bf0c226d0b1a17341d6c66a90c"],["/tags/分布式系统/index.html","104e06fa03096bb93dbe139ddd910284"],["/tags/前端/index.html","22276b825898a4bab4a493bb2c3885e2"],["/tags/前端/page/2/index.html","9efc179a246efdff1eca10741bffe86e"],["/tags/博客/index.html","39f73b4d37703aa5ad492acf880e4e39"],["/tags/后端/index.html","90de483aeeb50fbb509e6bea2324d8d7"],["/tags/外观模式/index.html","12caee1522231c268a36768891e4b152"],["/tags/容器技术/index.html","be36e1b844d1539b71dd07ab7a2f6b12"],["/tags/工厂方法/index.html","6536133aa431151e8e3e4b1cf8cfec11"],["/tags/微服务/index.html","4f2df34bd0083b937c565c8ad9fe64dc"],["/tags/抽象工厂/index.html","70656ac06ab96f8248bb1cd647ffb193"],["/tags/持续集成持续部署/index.html","648da73aa2716a95cf87149893f180f5"],["/tags/搜索引擎/index.html","773f8e8e70942a49da698675da9d7435"],["/tags/操作系统/index.html","49abef775791f46544bcd6d841fad8fa"],["/tags/数据库/index.html","fc63f72b5ac3c8f10bed5aa41fbf006f"],["/tags/数据库/page/2/index.html","7bd98fe58380ea6144a4cdf764214149"],["/tags/数据库/page/3/index.html","ac3f082e9b6cdde1edf6b9b6fd6bedc8"],["/tags/数据结构与算法/index.html","7606202d0dc7606d66916493bbb100f3"],["/tags/数据结构与算法/page/2/index.html","e2ba46c66aa675d7e631d90f3d516ff2"],["/tags/文件操作/index.html","8c366331ee5b21df64e9503a6b5b3f77"],["/tags/日志/index.html","d165604d4e9239f9567f20933d3815bf"],["/tags/服务器/index.html","6acce6e45d6c335a5f9dac1d27bc5950"],["/tags/权限认证/index.html","44ed24e1b143d2962ade152da6890a06"],["/tags/桥接模式/index.html","8ec03ff6785d2b544d1d4e7a47a8cd2a"],["/tags/模板方法模式/index.html","259be9e59b8e2e7b297e08dd0a243b3a"],["/tags/死锁/index.html","113a627f5b875c19d5e43d42df2f5b00"],["/tags/消息队列/index.html","f530cca8ae29baa70ecff122036eac24"],["/tags/版本控制/index.html","9281a7af6437d04e043a02abebf9a968"],["/tags/策略模式/index.html","a0a068d7c8b18b019eb2c4e28282c40d"],["/tags/简单工厂/index.html","a5e39605714b9067b687b6333c496e43"],["/tags/算法/index.html","9ecc48f42b107a36bcc61f70ba116a8a"],["/tags/组件化/index.html","2bee80dda13beb03397c9a8466f8d1fb"],["/tags/缓存/index.html","6928a549af757f5f983e7c3eec6ac0a7"],["/tags/缓存/page/2/index.html","c1f94081dc2faab9b877ed34a0933b8e"],["/tags/缓存/page/3/index.html","ac52e67d39f0b3416fa63647c0855d28"],["/tags/观察者模式/index.html","f4e02aab8e7e70817841e7e7d2f012da"],["/tags/计算机网络/index.html","29dd45af17fb8e11f1b1742e368a3649"],["/tags/设计模式/index.html","de6650db4f03414203bae3f6f2e9402f"],["/tags/设计模式/page/2/index.html","6bbc7b69c64e4d0a41250cb2a38e8185"],["/tags/进程管理/index.html","3babf9b5889b9b5403ee07efac488af0"],["/tags/适配器模式/index.html","8524000c3ab7424069af9ac5874c3612"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
