/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","15816c13ec726bf45c3417f77f8c789a"],["/2021/02/22/工具的使用/博客的搭建/index.html","f1642f87ab454eb0eeb25f1d47ef7e2c"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","9a076c100781ff2dc9075c1fa63fed71"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","1ee0cf47da088991ea1f428a3e1c6d6c"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","34349fce437e9c5e33388645edbeb725"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","c87e36a94d7ff00f2604d8eb4e4b135e"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","42829e49d3d116f00b342f3487c8ab25"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","78f8f87935ed81379699d78c23b82c5b"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","3e1b50a7ca9ce8225ff83531c6b33515"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","eaeae82494e6c8d1ee074b1a3234a6db"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","ce88a6e22a49b2c8b0bedd81d0b8b522"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","33b4380be079fd86c210e4688d36cf3e"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","2b05c05fe0d30849485bc8b701488da9"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","9f80e867291dc60f8a9f31726dd82dd9"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","f2d4671fba2ac80f6302390aa914ab70"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","ea06b2cce6f32592b9fe903da16a2548"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","2224489f28946373c418770e17fafa71"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","78b7f4a33dcbe29f62ae28abbd4a0452"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","e89acd8783030f526c6358d3ee517966"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","44209c0365c2dcedc24435a935a566a8"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","f0a668e605d5865740965dbdbd7adf09"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","7ef8aff583976302b24b776e2852f9b4"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","0d55c973dfd7e1d9f93262d9a5f75631"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","a22d90ab7789b9cd71b246b2e42285df"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","65a47036dd37d77a08ff3980d6a4e2f1"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","b4ba2ec177d046badbf4e0afcf97c444"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","05a0e75a02a176c5ef01856da6645b79"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","9a15b275b5fffabcf63a84b1bcc43aad"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","3bf5d4cecca54ecf7ac1eeb3c9163f20"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","197e3c3b6f6ec63817e3c80e7dc4c02b"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","c5f2b266a401cc51054c764eb3e4fe97"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","5e651d26eaa6d19dd6b343965b49cb18"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","2cfe5f842e58595ca23f8b36f39f5c42"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","87d96ebe37beefa75fe6763f36dab171"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","3e66dfa94eb672b6c66e35bca18aa582"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","e0114cc200d3c3c5b074f7ed63c01f48"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","ecc139efa23caeb42af5759645ae92a1"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","1de93d4762ad4559dd12faa65e1d7130"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","69ac31ff5de83089eab9f80134bc6e08"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","1cf7f78efa412a2f1e834b82f334e26e"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","09c59cc7180525f22383ca11bbe642a6"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","7f8149c5530acf1f965e74280dcc0617"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","e0e9f3c43902729070f76bae7af6a268"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","388e3891470daa023bf28b8bdff80e88"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","e32c3a5870e8eb07952ca13d3c3a2c69"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","b71818b1be282ab653de86cc835cc741"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","ae80aa3134e0f6bc59baaf699e5f1ac3"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","78751add753f76d159930d2885bab88e"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","029c861c6249d2de1b0eecc8473fc398"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","0b6756d5a5da2bc456ceb4abc60ce7fc"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","ada9fd2aad0094e69489455b382850ab"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","df4516fc46503411df99c116c46ed822"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","9845854a15ffe944e781b9f3a4fcc49c"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","d6c531c622b4c7af0024ed68c73ae591"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","bbd7ad4c341997ba93c5fd919765960b"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","38570bb930f7af3abd3df712052d7285"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","99fbb3a67bd55ba061f8511ef15ed8a8"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","ad9955501f3a472378daf76fee9883c9"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","fd17dee65cfe9bfd6b0e17fd511f8581"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","98226c2516d8f1619735335627763b66"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","209cf7aaee9399df2aafb9099fbcf56a"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","2fd1ed2fbbce8e3f1230318acca4f3cc"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","aa998d3b05637bf6f9a85d186017fe7d"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","9cd73ba35b90683cdc99ea067acb74d1"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","7738a2d7d47fdbbe4655f99c54c2444f"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","35a8423b81c73bdb1ded06c77554b5cd"],["/2022/08/17/前端/jQuery/index.html","cd6f5ca4a3334a8d5ef135c90ff043f7"],["/2022/08/19/前端/JavaScript/index.html","05a7c49e5007f21219d5e9ba68e33669"],["/2022/08/22/前端/Ajax/index.html","3a9c0f5885c8d197798da349a75abba1"],["/2022/08/23/前端/Promise/index.html","a6cd2957f3bc7b8d712c56ce4f4ef305"],["/2022/08/24/前端/Axios/index.html","2151af55bb35e256e0136629ab37dd1d"],["/2022/08/25/前端/H5本地存储/index.html","df8b76569c105dff136a96d93e53135a"],["/2022/08/26/前端/mock/index.html","7b1b620a60fc1f3fec0b3f0c702a9e2f"],["/2022/08/31/前端/vue/VueJs/index.html","7d82bbb7b67fb4ebfed3f246d2e043f0"],["/2022/09/01/前端/vue/vue组件化/index.html","75ace4cb0ee156179a6b41933d639776"],["/2022/09/04/前端/vue/VueCLI/index.html","e75cefa678f7f1ffd00d82740ac252c8"],["/2022/09/07/前端/vue/vue实现动画/index.html","624b1467b87a5c71ad749ec5f07f235c"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","fc3d664d84124b66da04767f583eccc3"],["/2022/09/10/前端/vue/Vue异步请求/index.html","f39fafe74055ffd5d5ae5308b5ef56be"],["/2022/09/11/前端/vue/vue-Router/index.html","784563ec973e8bbdc0b742aa898c9d87"],["/2022/09/13/前端/vue/Vuex/index.html","1dec327c28d85d66cbf1cb322937abb7"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","aec9db0c91df57b4f7ac0bc83afe8e69"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","bb8b49b847beaec7b76083fae66d1c68"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","8be85fba909decc6186b20e0b98f55b0"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","a03b31c0c24772065a64e75a2c32424c"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","46303030834abc615d3bdcf486feb983"],["/2022/09/28/DevOps/Linux/Linux/index.html","ddfe1f786fa7e0fc57882557afc22c9d"],["/2022/10/02/中间件/Redis/redis基础/index.html","e9564a1aa6876470b37fddec6b561c7e"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","82dac8b282c431c43c80f4636ef8096f"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","b6a52ca53ceea4e8f6bcfe0ad14981fe"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","2a07e5ab180d633246afd87c7cdedda8"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","9be391aefb559cc775f17868456b9399"],["/2022/10/17/中间件/Redis/Redis集群/index.html","5ceda994b21dba86eb585c98c48e0657"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","7fc64e32a152ff2e4b1b7d2157152a66"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","183f19b37a1ffc6206d108f1c6695138"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","991f967cd6a519f5a6eedfadc9fb0f03"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","93560028ae972bc5acf4d0dc9dd6d2b8"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","57dc04f73b92950bb97cadca9b6d283e"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","6a606ed3754b35b8168008da19ac996d"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","48993b25e1aa016d0f677958f172e0ed"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","64a45efdef55148b1dbea12bac378a43"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","be69cd4b2aab968232bb54072a5b845c"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","539f70668f2a64c6183db50a06a8bce5"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","cc4e4b7c1a37aaf0d74a1e97eadf76c3"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","ecdb1898c38ebbc4fbec1ea5c6a456f2"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","a4d6850f8a92c0d3a3242b26ca22d6c3"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","c1e737d7f74b9bdd4727cbd32ec14b05"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","fbe7fb85bb2ce44a318d3884349a391e"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","0014c5465334daf2230dc5c86005a5ef"],["/2023/03/10/DevOps/CICD/CICD/index.html","802f65084bad5962b8f01791e1e565b9"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","7d481f40e8b4c01b62cc60d5d510fb32"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","43194d1b528ba28991914aecae9f5928"],["/2023/03/13/Java/NIO/NIO/index.html","f0f7e9c170d1f94ad1cf3f91fa87d20b"],["/2023/03/14/Java/NIO/Netty/index.html","6e246922aefcfacd1ec462ff00c98621"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","7665871c9fee044ec2c54a4d5c4ca479"],["/2023/03/17/系统设计/分布式系统认证/index.html","c5be0d65c3cf90f7f9e6f7e5998c10e6"],["/2023/03/19/Java/JVM/JVM概述/index.html","1e05ae43a7a9c47eaf5733550f9895a2"],["/2023/03/23/Java/JVM/类的加载过程/index.html","1ad86fac1bd8d4e2b8ae68b62409b6a3"],["/2023/03/28/Java/JVM/对象的实例化/index.html","d39adc34483dedbb272f3b40a158126e"],["/2023/04/01/Java/JVM/运行时数据区/index.html","17ab152f320464f60d4e112da367d146"],["/2023/04/04/Java/JVM/执行引擎/index.html","c17c78b76b287b3cc88388db3e2909d1"],["/2023/04/06/Java/JVM/对象引用/index.html","95177a1157d479c69ccdbdfbea9198ee"],["/2023/04/09/Java/JVM/垃圾回收/index.html","a7700237015a84ce5ee6c5cbc4c0bed5"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","568c19c13be42fb971f8760e26e497d0"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","bd65a2f5a07a356a00a4e23389e0c48d"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","0ce5f79de7303593972b9a53cdf08596"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","a42ce5c2b97dbd9d5b1b618c73d9fbb4"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","c2bd6b245eaba317d9411b70db3b0677"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","25f929c178bf5fee6542092cc27740a8"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","61c484a3dd0b046faaf67681b46b8a5e"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","004677806d1edd239ea6840d479b6911"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","642813a8e1d0a5acadf4a3199ff73103"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","508dbd11b23d6370361f3afcef1d36ad"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","4226d36715ea8b8fdca71d53aadeaafb"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","7b4129285a712547a5582ef588b2b497"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","a747ede23889edbc95477e2c2a84661d"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","e95e8798284877eed37d04e9447a6bf2"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","62513f31ff7a8f0451cb38e9eaf53f5e"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","1a100350b32c66d045851635a2ff44ac"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","231b9f1fd43fdc8cb27ce35ca043fa7b"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","c6236ce99879152bd64ca3dcebc83daf"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","d0c3c1344d0c288429ccba13cdff5d2a"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","6571477edd972ac878eaa3e4388f56ff"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","faf3f3da7b332c04f94ea4bc5f56ecd8"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","7bb80f8303cc9ecca3d981049f0cb742"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","33f2b37b7ab91a61197b22a1a2552545"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","fabdd8163db9b0ad98ce368a31330616"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","eb3b8438e4a4a05a8ad9094c8cd00374"],["/404.html","b885155470bc7226f5d7a21153529d9a"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","3b0c6d989d761822d79c4edf17ac63ed"],["/archives/2021/02/index.html","b56bdec6336ac09e6276a4b52e84c1e0"],["/archives/2021/03/index.html","17e21823d9c87088eafeb190133d26c4"],["/archives/2021/03/page/2/index.html","c3bae8dc0cae1c4fc6f408c81ee5299f"],["/archives/2021/03/page/3/index.html","f48d51fcb38b557bc56133ab8a042163"],["/archives/2021/04/index.html","8ace0e2ef44d88feb89df52eeab21d7d"],["/archives/2021/04/page/2/index.html","7b81610fdd1d2dad203fd7ace56f18dc"],["/archives/2021/05/index.html","0d2086d81576410afa7b3868e6f7828e"],["/archives/2021/index.html","3a534dc3cd6f69adf8567bc9928fe1d4"],["/archives/2021/page/2/index.html","1069fd59c5fed412f78420fbb8f4c4cc"],["/archives/2021/page/3/index.html","f526d42944042a7d3875b9ad47205b1f"],["/archives/2021/page/4/index.html","b9b3735b1a0505af03bc319f5bac8cd9"],["/archives/2021/page/5/index.html","c2d277e0b5740ab71fc26ddd4ab3f3de"],["/archives/2021/page/6/index.html","ec62baed9c8dff4a985c2acdb9f19c30"],["/archives/2021/page/7/index.html","566604a3e09247ce434ac6232380cd68"],["/archives/2022/01/index.html","c19ae4ee104fbb14253a4c900ff038f8"],["/archives/2022/04/index.html","5e449179405891db4b40b31595d32407"],["/archives/2022/08/index.html","7ac1748632ffb706cbed606541c4fbf7"],["/archives/2022/09/index.html","eb21130f49a658aa82b978ef821b73c1"],["/archives/2022/09/page/2/index.html","ffc19cac957085a372377112a0bd3880"],["/archives/2022/10/index.html","77e0072a842396048b4a743e36c79880"],["/archives/2022/11/index.html","d81e13f3f78198734aa5e8cdaca32019"],["/archives/2022/12/index.html","2e3995240f38acc7ff437553d4b52c5b"],["/archives/2022/index.html","05ac70f1e65b94f997bc1ed901f10e04"],["/archives/2022/page/2/index.html","da0b56ed4517c1266b1617ff89157694"],["/archives/2022/page/3/index.html","9caac55b1a5db4ebdd00041aef18b594"],["/archives/2022/page/4/index.html","6cf6fb21c5a2457dca4d424f21e6292a"],["/archives/2022/page/5/index.html","6b75f2891523d694aaa37d1dcf57d86a"],["/archives/2023/01/index.html","fe5f9d38dfe8ef6c2379a0e6b19a9922"],["/archives/2023/02/index.html","30163880cda61cb848e8772ef46d314c"],["/archives/2023/03/index.html","b7716487fcbe9f64fcaed35c38d6e1df"],["/archives/2023/04/index.html","82c4c1616cfd0b1e1e9d3b7efa5b15cb"],["/archives/2023/04/page/2/index.html","cf06bad8d9dd316736fd3353f4a9f535"],["/archives/2023/05/index.html","8785034523341068c844ee506dcb22e1"],["/archives/2023/06/index.html","fb25f51b1288f098581a3e8b1dcdd09a"],["/archives/2023/index.html","a7beeaf17390e29b25f929588f6ec24b"],["/archives/2023/page/2/index.html","d4b8366b91c2c9b89f65acdf60acc2e2"],["/archives/2023/page/3/index.html","899441f43ec29f54d29c862c366fd0b3"],["/archives/2023/page/4/index.html","7de079e27af6a2c6961705add685b0c0"],["/archives/2023/page/5/index.html","1c4a0ed6a93baf9a32cffee89a813259"],["/archives/index.html","f7f70c72b20e391534f17db8f2e22da9"],["/archives/page/10/index.html","ea476e72bf3c631deb90520dc54238d4"],["/archives/page/11/index.html","04e26c9900097244068b5e8382e84436"],["/archives/page/12/index.html","54cf71321d0b38dd1d4fd8f57691adb0"],["/archives/page/13/index.html","acd4288299eadbf694bdceaf8b56e416"],["/archives/page/14/index.html","d998597a0caf8b28b278f2e1127caa00"],["/archives/page/15/index.html","7ad1e170753b114e8ba20e9fd2b9741b"],["/archives/page/2/index.html","78be8d559bb68ce45f23b9e707076c6d"],["/archives/page/3/index.html","3926c67ad289a3cbe9a8a365ca3c5415"],["/archives/page/4/index.html","d351aaf3bf9832abf422cf4af980e48a"],["/archives/page/5/index.html","81db927c94a672380bba08e8d888bd7d"],["/archives/page/6/index.html","2882eac5f282a51ef89d0c118041ac5c"],["/archives/page/7/index.html","6d8035e73c565ecc2da1dd34c77aba5a"],["/archives/page/8/index.html","015118556518a1ac547f9a90d8b3c2f1"],["/archives/page/9/index.html","474c9e0b4f45d5327dd791b28e579406"],["/categories/Devops/CICD/index.html","4172584129ee894ff751cc196106c7fd"],["/categories/Devops/Linux/index.html","a8f39bdc3d7e395eb2b310dd41446675"],["/categories/Devops/index.html","19dbe4d116fae3863f3b099fd004b70d"],["/categories/Java/JVM/index.html","fff0a4a839f108bd97f1687fa5108907"],["/categories/Java/NIO/Netty/index.html","c9255c4200c57a1b792a084ecadfb83f"],["/categories/Java/NIO/index.html","8abbc23434de830b7f98f94002c815c7"],["/categories/Java/NIO/原生NIO/index.html","05eaacf3d51b00f8883d9b758ffda670"],["/categories/Java/NIO/文件操作工具类/index.html","6284d55b038a97c5fad627d49aee8330"],["/categories/Java/index.html","8fbdf10f5c17f2a623760aa2033ae08c"],["/categories/Java/page/2/index.html","192ca102491b1d033c08a34bbc463eba"],["/categories/Java/学习路线/index.html","e6088feb1bd591d7ecff30b145c5f07d"],["/categories/Spring全家桶/Spring-Security/index.html","78bde0b873b7d897dee804e6d761f012"],["/categories/Spring全家桶/Spring/index.html","233093e5e64420da26b5c9a9a5d1e730"],["/categories/Spring全家桶/SpringBoot/index.html","0112eed4b805ebdceab8fc7e5b8fcc3e"],["/categories/Spring全家桶/SpringCloud/index.html","87e86d0d1262299b15d9612fc33c5b91"],["/categories/Spring全家桶/SpringMVC/index.html","76878e41dda5e753ed5f8a81930beaf3"],["/categories/Spring全家桶/index.html","f88208fa1cfbf37b4da6808b1f4c0061"],["/categories/Spring全家桶/page/2/index.html","10249755d26a6fa4dff2b3e348a991c2"],["/categories/index.html","d358cc5436f2d2fa61e2448b93fa6b90"],["/categories/中间件/ElasticSearch/index.html","eda39f9f1cf8ddac1632840544c33f75"],["/categories/中间件/Redis/index.html","19c6313a251ceabaf243c3de9f6c464b"],["/categories/中间件/index.html","f97f331f2892939393169d6c52587d2f"],["/categories/中间件/page/2/index.html","495e8155a7408c83752fc2aa2345bbc6"],["/categories/中间件/消息队列/RabbitMQ/index.html","f666e42835b127d675157432bcc6da4f"],["/categories/中间件/消息队列/index.html","4d4937cddd25b411f5a2046c4576994f"],["/categories/前端/Mock/index.html","d5b7c0d0d6b261f6cd4cc819c6d1a01f"],["/categories/前端/Promise/index.html","c2f147f03c842bb6e6ff3374109f4de3"],["/categories/前端/Vue/index.html","bc376d237d38ed04889073c94d5cd08a"],["/categories/前端/index.html","28a9e83a4a24115d9b586409bb429170"],["/categories/前端/jQuery/index.html","8a0ceaf5a672d1bf386ab1922c2cd39f"],["/categories/前端/page/2/index.html","8296a0751c5ed275b826d4df6a4c1775"],["/categories/前端/原生基础/index.html","5e97235164b2f27c445fb0d107ba777f"],["/categories/前端/异步通信/index.html","93308354935962bfa2b95ebde03319e8"],["/categories/工具使用/Git/index.html","91ef01ef9301ca8d2f61eb8dffcea3ac"],["/categories/工具使用/index.html","2770cb67e9c5fc5acf8b09d2a8ede2fc"],["/categories/工具使用/markdown/index.html","98b01acb6ac5dab82ac75ad84cbd0ce9"],["/categories/工具的使用/Docker/index.html","b6b955b9cf63d987cc8d9e51d7fb45d4"],["/categories/工具的使用/Nginx/index.html","abdb41c57251de85c9b3f9579c4196c9"],["/categories/工具的使用/Swagger/index.html","9b1636dc1291bcfa8f9dfa9b430279bd"],["/categories/工具的使用/index.html","bb025823d6aff9ce051740d200099d7b"],["/categories/工具的使用/博客搭建/index.html","218a9f861ee7617a2cd7075b778d660f"],["/categories/数据库/MongoDB/index.html","f94766eba74e4970a0a18342ae98d78a"],["/categories/数据库/MySQL/index.html","2a7d340702d725914f0fc8e5990f3bda"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","c2d4bcbfb973b984bb6e24fd88e959d1"],["/categories/数据库/ORM持久层框架/index.html","7fea52c832f198038d84bb89fd574270"],["/categories/数据库/index.html","076951fee2421f56e8415b4e31b1238a"],["/categories/系统设计/index.html","1fd13c5b086bce5fa5b3fd36ea7a6a79"],["/categories/系统设计/page/2/index.html","efa4c331cc21fa3fe64284bd52b4d99f"],["/categories/系统设计/分布式权限认证/index.html","c92141e431ea10514cac0efe39757968"],["/categories/系统设计/设计模式/index.html","8f8019416228f1711582869342d8bc56"],["/categories/系统设计/设计模式/page/2/index.html","c3ae168a9e5dbf47fbc9bd9e004460c1"],["/categories/计算机基础/index.html","afb5eb5b6586a693119ebf003143ad2b"],["/categories/计算机基础/page/2/index.html","a264f7c316e1710b85fab0111faa032d"],["/categories/计算机基础/page/3/index.html","b249a03d945f3946eb36195259bd7673"],["/categories/计算机基础/page/4/index.html","93ddbbb667ebcee1bf97f2e65ddaa561"],["/categories/计算机基础/page/5/index.html","53834e9c295f945375f54feceac39bec"],["/categories/计算机基础/page/6/index.html","d25ec5ca1801eaad1b3c7dca27b208a6"],["/categories/计算机基础/操作系统/index.html","4fc78827aacdab1c2e3d1fdf4feec462"],["/categories/计算机基础/数据结构与算法/index.html","3e9235de12d616c2d041d26f70288aab"],["/categories/计算机基础/数据结构与算法/page/2/index.html","d2f3e2233fb534ee5fe8eb9b9e39d4e7"],["/categories/计算机基础/数据结构与算法/page/3/index.html","412b0e1e06e6727cf2c08a53439fc901"],["/categories/计算机基础/数据结构与算法/page/4/index.html","981e7fc454212dd8c6e26e9de5ef1d36"],["/categories/计算机基础/数据结构与算法/page/5/index.html","9d346da2f0b1251e2c7d3d5ef8904269"],["/categories/计算机基础/计算机网络/index.html","4b43fbb8bed95aa4e284d6be025b6182"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","df5d87695480019063a9c5813a4e6190"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","c8de3a149101c418048a3b716a2e3d06"],["/messageboard/index.html","213b12cdc34525c5d9b518f6eeca1211"],["/page/10/index.html","fa56bc5f690458074e617fd093cd4555"],["/page/11/index.html","ce1c595133ac6d881b2d1978f5eb8134"],["/page/12/index.html","c6227ad53be871e25fa3c4fd02f3f127"],["/page/13/index.html","657843ab34d64b558ae5ce83e5c7b6be"],["/page/14/index.html","b4775af16e63142be409f7aeef636712"],["/page/15/index.html","2496047800a86244c27ceb06ae4d01aa"],["/page/2/index.html","4342090bb1d68a7b943d8a4e6d8386e2"],["/page/3/index.html","0f394a18eaf12230b828dc30b6989d0b"],["/page/4/index.html","392908d55cf664542b29424cacbe3672"],["/page/5/index.html","a77daafb845d5565b7e820808eb01951"],["/page/6/index.html","07ca56a331b2c6f1c92c0b0c3c8b77e9"],["/page/7/index.html","2562ce95bbf6e0c569262643359f6936"],["/page/8/index.html","61e6c91f4eac97dd9ef77ef6851d15e5"],["/page/9/index.html","ef9c35d191cd367229365a6d0c9a9dd1"],["/sw-register.js","90773d6116dbc0991974086c0aeacefd"],["/tags/Ajax/index.html","c1070ac2b6f80b48bf696c0ee2a36964"],["/tags/Axios/index.html","eb36073b3bd147f51da1997bafc8f128"],["/tags/CICD/index.html","ddae2513ab26e5bd89acb84cb55e4b60"],["/tags/Docker/index.html","8debb0004b7d1607267c2027a6c5e9d6"],["/tags/ELK/index.html","d3bc9fd4afc6faad1d86cc551e07bbfd"],["/tags/ElasticSearch/index.html","129d71ea0c461c60378fe81422842b80"],["/tags/Git/index.html","a5ea1098747201a4df2e1b8dc4008573"],["/tags/H5/index.html","2fc4414adeab2bbed7d4a1182fc26708"],["/tags/JVM/index.html","7cea6da2503fa08f4430a4680806de77"],["/tags/JVM内存模型/index.html","6dde96643423347c1e81bd744c356eca"],["/tags/JVM执行引擎/index.html","c8c87fad4f302c45dddc8346705f1d5e"],["/tags/JavaScript/index.html","7baa877177612e9cab459c6c35d20bbe"],["/tags/Kibana/index.html","be4fd80b8b75e783e0010dc01a74a8f6"],["/tags/LeetCode/index.html","633159860ba8a812676b395c26e3e546"],["/tags/LeetCode/page/2/index.html","f6175c249a82f0871a3b9ca8604e9541"],["/tags/LeetCode/page/3/index.html","f6102302bddc16ed2604a942979526a1"],["/tags/Linux/index.html","c9df730be587746ebc3b3978b4c00e33"],["/tags/Logstash/index.html","efb50e1ffa6eff542fa6dbc148126e3a"],["/tags/Mock/index.html","c4a492df20b65bf5f1b569caef51b39b"],["/tags/MongoDB/index.html","55f8461411f3a009cf889193264a759c"],["/tags/MySQL-数据类型/index.html","85bb75dd9795265fc5e2830d988f9dce"],["/tags/MySQL-日志/index.html","b93bb4a8b0821e3e42d10a23aec13a7b"],["/tags/MySQL/index.html","6011308c0ba164bccd16f3943c958ee9"],["/tags/Mybatis/index.html","c56ac1acde6f96fc2b349e3f9a80e815"],["/tags/MybatisPlus/index.html","f268aa92282883709491c138b64ba74b"],["/tags/NIO/index.html","f66c3d90bf287c3419302843d7b5fd79"],["/tags/Netty/index.html","86a71efbe2ae1f4ea8ec6ca381b59890"],["/tags/Nginx/index.html","1604afa43453adad1372bcb4a46cfa51"],["/tags/Promise/index.html","9a4651eab5bac6bf42aee1583f7d2a97"],["/tags/RabbitMQ/index.html","499d5aa930c8e84c28f14a3af333b363"],["/tags/Redis/index.html","09409edb17cd39049f0e194a2ccd1768"],["/tags/SSM/index.html","cdc1e76c9e513d9fa6acbf635217e9fa"],["/tags/Spring-Security/index.html","42f4ae456469ced7ecd4b79922e64339"],["/tags/Spring/index.html","bfceb47e75d4326894e54dd5ba7ab4ea"],["/tags/SpringBoot/index.html","6a213b69cf4d6f6c1fa07ee0552f0271"],["/tags/SpringCloud/index.html","e32184406442dd6863a64e3ea04fa005"],["/tags/SpringMVC/index.html","3be7c55fc93a7bd05845e1f4228b93ff"],["/tags/Swagger/index.html","ec87a98d49a4745ef7e298bcfd8d9faf"],["/tags/hexo/index.html","7c4c7818fdfc2bd71458882cb4592933"],["/tags/index.html","ec87fb6020e68a29191d13670eade03c"],["/tags/jQuery/index.html","fb2e38592a614407a006a64e3508affc"],["/tags/java/index.html","6ef15ac1d6f806e25e51893bcbcf84dc"],["/tags/markdown/index.html","0f018fcd40e5b785673e6e3664e98159"],["/tags/noSQL/index.html","ba192bc829c765bdac807f20406ff716"],["/tags/typora/index.html","eaecc379bdbb02a6d1ea476ccdad0532"],["/tags/vue/index.html","fc6d603b13882a47d978c3d1d3b37738"],["/tags/享元模式/index.html","e4d984140136342219f86e67fc36d9a0"],["/tags/代理模式/index.html","81f22b60017cd6c0e8044424d23ce365"],["/tags/内存管理/index.html","6752e77826bb1b438de5d145ec0f745c"],["/tags/分布式/index.html","d418e030c19c97430cde1b4396604042"],["/tags/分布式系统/index.html","faf936f342d47c25e0086f0cce899f9f"],["/tags/前端/index.html","e2d893263865156ce227d42793768ac6"],["/tags/前端/page/2/index.html","362040e96412ca183a2236dec47d7bb1"],["/tags/博客/index.html","96b8a4d501bc5b9e5055317554347bcf"],["/tags/后端/index.html","ea6afb937c3685b949d2c2f776865576"],["/tags/外观模式/index.html","702afea3c3d5573801fb292ade9dc3b8"],["/tags/容器技术/index.html","ebf375c78d51bd72e62053794fd65f6b"],["/tags/工厂方法/index.html","d03c72e8c93fcc1fcc2ed0c2bb09efdc"],["/tags/微服务/index.html","bb9b60f3b33ac50321aa980ecda140c5"],["/tags/抽象工厂/index.html","86585b269c7d5dd12c2b53f85c074ca5"],["/tags/持续集成持续部署/index.html","5a132f9b4befd1d90eadc39e177c8f61"],["/tags/搜索引擎/index.html","1115e1c0ac80ad44f21a729360b9d705"],["/tags/操作系统/index.html","8f93b77cfc5b5cb9093c9faf2caccc63"],["/tags/数据库/index.html","fc3e8689a803b59197732f062a253190"],["/tags/数据结构与算法/index.html","b8cb246ade168e5cfe3e62ab8f1893c1"],["/tags/数据结构与算法/page/2/index.html","3c96ad5e895ae9fcb00678ae9359d3ab"],["/tags/文件操作/index.html","9601d2f1d0b87dc0c2f6422da266efdb"],["/tags/日志/index.html","3d61afa9dc78e2435a89888b30103afa"],["/tags/服务器/index.html","49fa80266da8f156af73b9053f8ccfd9"],["/tags/权限认证/index.html","afe9925303f8b0bf2dc2b3832bab6dfe"],["/tags/桥接模式/index.html","cab6ffc51925d7a8da929e0cba0b497d"],["/tags/模板方法模式/index.html","a5342814aca25a9b1d8299676b788fad"],["/tags/死锁/index.html","1de71f7bcaa5dfc8660bfd27092128d4"],["/tags/消息队列/index.html","b10d72e7224078612153a38d7e7da215"],["/tags/版本控制/index.html","09949684962658876e89d71e6e2b3fa4"],["/tags/策略模式/index.html","a19dc3d5ffd17cf176f63185a409fca1"],["/tags/简单工厂/index.html","47a5dd10d843765b39f5bded60436104"],["/tags/算法/index.html","143a3ea0ba5a29f144fc98f8fc891cc2"],["/tags/组件化/index.html","c28993613195a7f78d8f2fe17b67f696"],["/tags/缓存/index.html","b54844609e240a61147748095e008a96"],["/tags/观察者模式/index.html","cf68fd6aa0f786eb470a8cc50bd52a5c"],["/tags/计算机网络/index.html","b5bdc97b304df3723769f540d0cf8996"],["/tags/设计模式/index.html","513e09273eb28fe02b6f87eaf641f0d0"],["/tags/设计模式/page/2/index.html","71dbd53cd7318af95c7c0e73d00a9e11"],["/tags/进程管理/index.html","06a0725b3400c88e3e250b3aae552f10"],["/tags/适配器模式/index.html","e404a1a52db0f1b5d42486eaacc85587"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
