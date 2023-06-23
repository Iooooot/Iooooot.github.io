/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","367f9cd8f6478332439ab030cf970369"],["/2021/02/22/工具的使用/博客的搭建/index.html","3aafc75c4d0ac06ef50256794f5b03ab"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","8c9daad78cec44f1fbc534723da17bf6"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","461b7f4b69728bfcf031bde7594c99c8"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","54dbbea192ab61e0be58bdac8bbc952c"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","0de8443e05501a532db4794c249d90a4"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","32ae21e4759fc4788a5ac1e1bed2c976"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","4617b28dba4266a7487b8e16694b89e1"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","ae260b99034fdfe09ee5ea632b98ce89"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","68772de2f1a08d86fc6f8b7ffcab528c"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","81b475b5aa22bbecae9522497f21c5e6"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","5264cbe643ff8c9719640d9508c348ff"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","d633dc9d3c038d24a4613c57f4646769"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","f2d6a7bb2cc08d06da01a6029eb8c3c0"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","8519229b396f3b5e2dc6cb665f1f854c"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","c249ebd4453e7262a1cb73b6de2c08e2"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","fc1202ccbfbc0452b2192565a467a477"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","0ec7619e99600f5bbeecd3839a9d7938"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","e58cae73eea3b3c7f5cc76da04e21b4e"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","32748d5145ad357bcb6a59d8d392458b"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","d2bf798217684dcb017a61bcc78934d3"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","9833ef4f1db52c328575a34d377f3019"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","5eac1d6efb388d8fee9c8cc368925dff"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","fb72ce6d17add027cef90a766998b22a"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","2dce1cc28dc579b33fd418d0fa010aaa"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","cbd58cbcc0c3d72c432e91e9e8aa5744"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","68ea0bef7f40793d0a23aa0467c27f18"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","ce77dfb38250ec3c0b425f00723786d5"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","e1f1563218802583c719bc7ceeebc8e0"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","742c93296b439f85b36f91c5a8763edd"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","35ebd9d31133f2bd3160717e4313b221"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","1d1add6e0a4d04c674a11257d70c0431"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","f84a4462997f384c5878a498e9da53a1"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","5ab4493991d1549b5b4810535d468b16"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","9052851111cca5a0a9e57d4a27d43721"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","40650e2fbf6d76f335c0cc2f9fb17aca"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","29d6a6c4bffba6154f4ec78afc12df66"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","41d453723c7a900dca1b9b5059a63a25"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","c6bb8bc134c6c2dd467cad04763d8a80"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","ba4fa59dfeee77b7e45e24d046616631"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","ee1ee664d7b9556a8718efd54b227ffb"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","3aae92fdfdf0b9af01df5ecb2ce55274"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","7466a1b2a368e641e2d76be1a725c5d2"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","e28c3c7aea84eb0ee0cffdacaeb2ca8a"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","491e4582d7672ca7f97f3d93157af583"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","95f5a316f2f8653b440be39826c7f989"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","ccfb71be264d9d7aeee6106c30680839"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","7a11769771875b5db5b96ce0469b42e7"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","c83ba3cea742b07fd3967cea6f27425f"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","78a06a22ed22da81cb942b7dedb16819"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","14bca59a4f193abac8102571b1bbc78e"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","3aa9966fa2ca22d5796e0c341b78e190"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","2b6f3377286e9a3cb690f20b6b01e2cb"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","09a3da9e8cd34107e03a4b9fbb087fc5"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","68a9ae011e763838fdd5d8a56c359fc3"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","7c9a00928f701e2c2992cb1f40ee71c5"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","b9eaa3a1fc1ccb8bc1eb7b6a198fe9ab"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","7d051aa90cfcc118631b2e74cc6874a4"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","3dfbcb2a28d4dbda45df03935b008740"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","869ae543e248f1b8c2a6aa28095961e5"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","c6e78578e076ddd4215b1139818fcfbd"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","9b79a9531e93fd3ad55d95fda40a1041"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","4a0dd96a37711f86f249f4fe6b8ee644"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","b53b8ae1ad77d2b965f0ff65234c9645"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","9edab0bf5c5b360b5aaff3a65603ae80"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","2891cf4c1dc45282a182563736a2a468"],["/2022/08/17/前端/jQuery/index.html","73df9160dadbb7f64ce7c8084d8ab304"],["/2022/08/19/前端/JavaScript/index.html","703c5a92241752b5af156f9d0981ce0b"],["/2022/08/22/前端/Ajax/index.html","5840e12e4d1e8bb429b2b40e02991352"],["/2022/08/23/前端/Promise/index.html","a63b1299e1528d39c8c582f7b1af68c7"],["/2022/08/24/前端/Axios/index.html","cfa98de85bbc93fb6d2c2e9ec5e2092f"],["/2022/08/25/前端/H5本地存储/index.html","ef3af546c8c5169055864225b738408e"],["/2022/08/26/前端/mock/index.html","874ade34022ed29568ac5295fe41e0a9"],["/2022/08/31/前端/vue/VueJs/index.html","039c614ebbbf1c4c57504144e21ecabd"],["/2022/09/01/前端/vue/vue组件化/index.html","6001dc210024e9a2a975cb88c19315a0"],["/2022/09/04/前端/vue/VueCLI/index.html","b0802df3465eff42c4c8f8d37b1e0522"],["/2022/09/07/前端/vue/vue实现动画/index.html","a836700a39c6c36415525a90bc05f4e9"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","19f4253e308d15fcfa0231416a632142"],["/2022/09/10/前端/vue/Vue异步请求/index.html","16754bb55fd58cb98d01b6114dc1bafd"],["/2022/09/11/前端/vue/vue-Router/index.html","139931cbfde1a2924e07bee6eae3f2f2"],["/2022/09/13/前端/vue/Vuex/index.html","6010c0f1dd229e87601243eecd19570b"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","3872425eca2b7b96ec7141ebd1730238"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","ab605102ed95ad2cfcadba7bd7b9d9be"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","aa6b4e9508352bb48fd67c4717e4c2d1"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","bfdeab8d3c8493b545bc818b885657bb"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","a215e0067798893f9574364f766fdf1b"],["/2022/09/28/DevOps/Linux/Linux/index.html","bd8395bd9076bcbc32b35ebbd9ad4aa3"],["/2022/10/02/中间件/Redis/redis基础/index.html","30a2051b04345a9dc9d8a2e6f0783c78"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","fc3fb31a71049dc477b2a18c0c99f0ca"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","055353314d52331e4d6e802efa405d73"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","b172eb2ff0346c8ec55d507ce0cb31c1"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","78b3d18270456c6976a6faf6f142e122"],["/2022/10/17/中间件/Redis/Redis集群/index.html","2f058c9facbc4c54a63ee8e3f30a6258"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","4340f0849cedf02ff246b4ef971cb900"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","68bc67f4ff91c368d692534ca203eec5"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","7078c72bfa82d1ba00583cfc4feb0b45"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","680876b93dcd41c67d6b90cbc26c3279"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","05f82ad275af10abd6bbe7216f31ca3e"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","a0d04834f29971bff62b4cb9411600cc"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","7b645ae9a075ee1fde802c591333268d"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","27a5b4f35cf1f641b69bc61fa0c44ba7"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","ea46cfbee581e8ea6af5a5e814e27e0c"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","f62d72a7c641df68182baa53b412fcc0"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","6e14b856430c3bf5211756cdfa616343"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","188c3f601aaff7737ac5b85782b5d1c9"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","632aa1f36ee40c6e2fbbbec6a69bdbb8"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","3e5eb7da5b2e899618afcccf0b7f3245"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","4c0dafb8fa466fff401a29f37f9bb604"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","c8956a56c4043810eecacf19b7a618d7"],["/2023/03/10/DevOps/CICD/CICD/index.html","558811ee8067c83b2fc986b02decdba8"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","1458862db7ac7c8a4a982dc85d583ce2"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","f8b411c5edf7c99d7a29f6a8836cfb0e"],["/2023/03/13/Java/NIO/NIO/index.html","8c8a2a091f71dc5c1a2cc9c3ed70042a"],["/2023/03/14/Java/NIO/Netty/index.html","1a82190e33e00fb4224760e0f5efffbb"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","b7aebf76b2daaa3aadc38efdd2239416"],["/2023/03/17/系统设计/分布式系统认证/index.html","611b8ba5ac6bf94816f198fa2c4f21ad"],["/2023/03/19/Java/JVM/JVM概述/index.html","ebada395d48ae3b6048b4f9b28e754ad"],["/2023/03/23/Java/JVM/类的加载过程/index.html","38042b6a281b45c4f023f392f6bde1dd"],["/2023/03/28/Java/JVM/对象的实例化/index.html","f6b95390a2ffd79e3bb17f54129c9232"],["/2023/04/01/Java/JVM/运行时数据区/index.html","77e9c51c2a2ef30a14e2b0d59cbc4bac"],["/2023/04/04/Java/JVM/执行引擎/index.html","4a4b2618d6ea62b41c1970e032db9c72"],["/2023/04/06/Java/JVM/对象引用/index.html","67cec74143bc61242769bc012c1f8f9f"],["/2023/04/09/Java/JVM/垃圾回收/index.html","0cbc6d28d148eee4c8ab76731c64d2ef"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","a0f4b7dcba2ef9216b7a7885012fdd07"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","fdecfab92bc44ac6be10d9780b010ce4"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","23acdf80c8e69211b60e869d929eae0d"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","994b6b9b53cc58c0bd4638655f3a4348"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","57372acfe445781e8546c71513843f2c"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","51717d47a9824bddd57cf893d47c1b19"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","e8f1426e028305a4b9a0eafb2309648e"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","b3f615fb43be0ef8e98a9de673db2c22"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","9258d7a50e859a7ec43e155bfc1a748a"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","1efc7f761056a690d494abd3e163e031"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","92e8b514e7e400568b192c35b304b660"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","7113cf9759ba3f57a8731cd9fad33a55"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","9e97277b5c9429294e2a10ecb86c4276"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","b9584dce7a0ef3257e085df23b06004b"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","0a3bcdbe07c8f7143acbbbc273487876"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","f649b1180d8dcca205e2f48286ba6592"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","d1a7b774b34fad485a824b79fc2c6b6c"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","02205beafbeb831e50acd7316060eeb9"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","c3e8e747562cf3c3599cba755c9df59a"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","4ffc3d9e6ff66f1c1c0193523fd4ac44"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","3dfe8b8a31548d8da02d82c1ebbfaa5b"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","47271c4d28d11bc54fb7e0501dd06973"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","76d2b0130770a578512d8cd24b28de23"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","0032ad0f06ad038bcfa9f96a1bc50c49"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","33cb17dc51b937c9004d99bb7ef34ff6"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","68a9bbfa5ae769a6ef2f8ad1836eccb5"],["/404.html","c7c74d816a5f9b07852e1494a5d3f4f8"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","39a38a8146627ac7a61a8affc274e8b5"],["/archives/2021/02/index.html","4b10ef80a8f1cd694c3cc8aacc0edb38"],["/archives/2021/03/index.html","90ff6a9bada6bf5c416141a2e8ed9e66"],["/archives/2021/03/page/2/index.html","ee483ecf7c0cdab2cf3515e8b4357810"],["/archives/2021/03/page/3/index.html","65cd58f24c2be224eadec709bd8ba23f"],["/archives/2021/04/index.html","dfc348c0d9a2fd1048326b3e1f1cda6b"],["/archives/2021/04/page/2/index.html","b883e4df3365977f54c9b7356bf63d12"],["/archives/2021/05/index.html","98ea065cc826992cda6be41487a0422e"],["/archives/2021/index.html","a534031faf4173c5e8e86307b8b2abc1"],["/archives/2021/page/2/index.html","70234a6995bbaacca8fa62aff804fbfe"],["/archives/2021/page/3/index.html","b05cb900011f6c7c608c7a9b10eb8ef0"],["/archives/2021/page/4/index.html","a570435742a9e44da6419997b88402e6"],["/archives/2021/page/5/index.html","52df5d3bf750b638df9319c6c61e4152"],["/archives/2021/page/6/index.html","8d2127c7f878d8f89c9d600140c560b2"],["/archives/2021/page/7/index.html","99549d685f22a8c13767b24deefb39c6"],["/archives/2022/01/index.html","0ce8fc026ed5dfc55b844922eeb8b24b"],["/archives/2022/04/index.html","a82b7f860cf276d19960f39130cbedd7"],["/archives/2022/08/index.html","bfcc4db62e95eaaf3ab1b7513dc79d2c"],["/archives/2022/09/index.html","c51683d2415d287a4c70b024de8e1d26"],["/archives/2022/09/page/2/index.html","1c628552c37b8efec501f7e04cf79ad4"],["/archives/2022/10/index.html","e9bee7c672f6f75e1631605b5b6e1289"],["/archives/2022/11/index.html","425279408ba0a9c0d097274df20e1e1c"],["/archives/2022/12/index.html","b0630f60a56e3f9ae1c5d1f8b14a801c"],["/archives/2022/index.html","a052cef8491d9452895aa1feda544f41"],["/archives/2022/page/2/index.html","3d771da1c4fa3a7144c6c796698e6c15"],["/archives/2022/page/3/index.html","2b7645c6c577b83503bffc5d109b1292"],["/archives/2022/page/4/index.html","e3b7a2df26c6db86440bc353318cc593"],["/archives/2022/page/5/index.html","4ad468a73608759b75f6cc90045d61a6"],["/archives/2023/01/index.html","ca89f484a25e80d5e7fdf65f47063e07"],["/archives/2023/02/index.html","b5fd0e3cb3db5e5d5e3826624f0c28bc"],["/archives/2023/03/index.html","43aade48c981e6e387d1d766515f0a0a"],["/archives/2023/04/index.html","9c9b40f893864b10fd74756372c480e2"],["/archives/2023/04/page/2/index.html","ae51a1842c75a05d2608807115322d59"],["/archives/2023/05/index.html","e83e1594662e48f796790d8d37613736"],["/archives/2023/06/index.html","ecc817b1fe8f1f447b92b2d8a269f73a"],["/archives/2023/index.html","10594edef091a6bd017e21ea2750795c"],["/archives/2023/page/2/index.html","7f2e75e2d5ab1b0cc3e4d8b0d1e89fee"],["/archives/2023/page/3/index.html","89d8edc3ca79a4376c15adbcf1bcfcf3"],["/archives/2023/page/4/index.html","9cb6748e11fa2374a268f48bd7d6a0cc"],["/archives/2023/page/5/index.html","6571dc4e4514207686b5630c63bdd202"],["/archives/index.html","915c7c98f51ea782c391af80c9448d29"],["/archives/page/10/index.html","4f460bafa42680e1dceb1d8430f8d0ae"],["/archives/page/11/index.html","863bfe797ea04ae75a8202196add9f60"],["/archives/page/12/index.html","e818774af39a782a88302ac4f53f1f0e"],["/archives/page/13/index.html","72d9001d7eb9081146b4644987ac43ee"],["/archives/page/14/index.html","b191aeab6861dbb3874b02f6693cb3e9"],["/archives/page/15/index.html","c01b3d43a503fa139afaf41ef3501b8c"],["/archives/page/2/index.html","61ce0746df0af3f9f80f65c9579aca19"],["/archives/page/3/index.html","8a7bd264db5562bfab14da7f469bbf58"],["/archives/page/4/index.html","7bfa59e7ef8ff3430794f60ce969bca9"],["/archives/page/5/index.html","f3ce81703d810fb94f60fdd925011c9d"],["/archives/page/6/index.html","31104cc90a378d180be124cdf79e17c0"],["/archives/page/7/index.html","3e502ddc7d440cec307c8c243c9c041b"],["/archives/page/8/index.html","8d8490e3fb9431cb11437f7d1a2ee722"],["/archives/page/9/index.html","7ae30424a8d8738be61329785e8d39b1"],["/categories/Devops/CICD/index.html","13508c4f64cb9599ea72012422d22c35"],["/categories/Devops/Linux/index.html","65e14b99562cdccab1322b1dd4bc97ef"],["/categories/Devops/index.html","a57ebc9b4f58612d361faaadfd226949"],["/categories/Java/JVM/index.html","acec42d3e019aec45addc1ebbd63a456"],["/categories/Java/NIO/Netty/index.html","4e9140dbb43746250e751e96983e94f0"],["/categories/Java/NIO/index.html","04fbdd9f18932b0d8b8d14dfbb87b0d0"],["/categories/Java/NIO/原生NIO/index.html","5bba1492d1f1690a3c4410738486f5a6"],["/categories/Java/NIO/文件操作工具类/index.html","a325a155935d2d66588fde03c4a4da5b"],["/categories/Java/index.html","45a44d30945464be4f3f2a8a667d3bfe"],["/categories/Java/page/2/index.html","e0d0505d9859d4b111c52f4ddd4fd34d"],["/categories/Java/学习路线/index.html","92c11dea2ac324fad11f9d4ac139d242"],["/categories/Spring全家桶/Spring-Security/index.html","6f4c9ae3d91642066827e729f90d04f4"],["/categories/Spring全家桶/Spring/index.html","5f60d347be496dc003989a5cee54361e"],["/categories/Spring全家桶/SpringBoot/index.html","c5d3f429a0bded838eae6ad209455039"],["/categories/Spring全家桶/SpringCloud/index.html","ca0029e1f1a6a121c0ce75b63ceb8a78"],["/categories/Spring全家桶/SpringMVC/index.html","9ea9b69a82fb25b3d9d2eddf165f7e3e"],["/categories/Spring全家桶/index.html","19befdad67c74e22cc881ca63c5e1958"],["/categories/Spring全家桶/page/2/index.html","c9ce27bfe0bbbc3b97ce49206fec6826"],["/categories/index.html","c701fad750ba0c5898c5e01bd244a410"],["/categories/中间件/ElasticSearch/index.html","72772e775395fb3e7943d813c1b9dd42"],["/categories/中间件/Redis/index.html","bd3a730cd1402e87f8954659f6ab45df"],["/categories/中间件/index.html","2aa49d5bfe23b2645d0c8e90d95270d1"],["/categories/中间件/page/2/index.html","d9ec87a26894196952f85b512a053739"],["/categories/中间件/消息队列/RabbitMQ/index.html","135d18a14f998be543a9b902cb806079"],["/categories/中间件/消息队列/index.html","c2f81b2c205463b93031b9524f1cb251"],["/categories/前端/Mock/index.html","8b56ba86eeab1547ec4e12f066fde08e"],["/categories/前端/Promise/index.html","6efa502044d7710724663c6c681997ce"],["/categories/前端/Vue/index.html","75577bf2a9e819eeca57f77c59ba965a"],["/categories/前端/index.html","b1192b711067d4ec3844d979e5116716"],["/categories/前端/jQuery/index.html","21b2be4f9d20a578af802cab8c3c2a08"],["/categories/前端/page/2/index.html","e7b7537d31a7bd0d1b0d4b638b69939b"],["/categories/前端/原生基础/index.html","fa12711e4eeb001e7648fc05cdcd0643"],["/categories/前端/异步通信/index.html","548a2daa212ffde648d538d0d43c50f4"],["/categories/工具使用/Git/index.html","342f222b58664351bbc8dd00d3614895"],["/categories/工具使用/index.html","ab8242819e98752dace6afee09b5e360"],["/categories/工具使用/markdown/index.html","8bf19a2cf2767d0cc92087eb4413b382"],["/categories/工具的使用/Docker/index.html","59cafdec0e863bb9a106251a1306d033"],["/categories/工具的使用/Nginx/index.html","3f48b2be7bdfd391b5f6ffa4695d6960"],["/categories/工具的使用/Swagger/index.html","fbfdaad31eddc504592421a14507c967"],["/categories/工具的使用/index.html","133f9358949a3dd0186e4da6d8f91720"],["/categories/工具的使用/博客搭建/index.html","b4315f16c5cf2f06cc1fc1ca7eb69af8"],["/categories/数据库/MongoDB/index.html","e40c1317141e53013a75178645a753ea"],["/categories/数据库/MySQL/index.html","dc8a9a87d4cce1d922288843fe61e509"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","5d8a6f026ddc314b6655229d027fc2f0"],["/categories/数据库/ORM持久层框架/index.html","3ca1ae8a4228eeb13c5d16b8d8555a85"],["/categories/数据库/index.html","76fc1ae8438344b476b8913beaaea080"],["/categories/系统设计/index.html","3eb85c77391e35a85df4c4dbab989d02"],["/categories/系统设计/page/2/index.html","e01d099db86c6790802bd974d10cf534"],["/categories/系统设计/分布式权限认证/index.html","b17bd010f39fdb3d6874f2e8c66bd0b8"],["/categories/系统设计/设计模式/index.html","c8350fa5051d0977dfff69134f9d323a"],["/categories/系统设计/设计模式/page/2/index.html","736b0bfca2b6f54a9b47e359f5c2046b"],["/categories/计算机基础/index.html","ccc989fc9800d12b289623cd316ed453"],["/categories/计算机基础/page/2/index.html","130a28e4133b78a51a6a2852ca0aa1c1"],["/categories/计算机基础/page/3/index.html","9b94b2f7d13d828ad83159496e4c1252"],["/categories/计算机基础/page/4/index.html","35b76175a047da5f41b0a295e216ee9b"],["/categories/计算机基础/page/5/index.html","89acacdf6254fd7ac018e1976fe70db3"],["/categories/计算机基础/page/6/index.html","bb78e35046e4ea18d1f587a3957343b1"],["/categories/计算机基础/操作系统/index.html","12ed1d37726cc559f0d7f5dfbd0a5791"],["/categories/计算机基础/数据结构与算法/index.html","c30227333196112b1de4cc58850d2ac3"],["/categories/计算机基础/数据结构与算法/page/2/index.html","6b95c41efbc60fe318a09463c51ceef3"],["/categories/计算机基础/数据结构与算法/page/3/index.html","8941bafbebfb94af466b73b039ccf386"],["/categories/计算机基础/数据结构与算法/page/4/index.html","9c9c39d7d912cef5e8f8dde18f7fecd3"],["/categories/计算机基础/数据结构与算法/page/5/index.html","6c60c44733760c45eb7c6dea5526c5c6"],["/categories/计算机基础/计算机网络/index.html","2650d9972d59a9d2e4a6327d774c5a55"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","8730583936075809cd73570cb2ce15a1"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","61318c14487ca9e22ba8cb2db99dc90e"],["/messageboard/index.html","558ca9fa7f569bcdbe0baf54f3d12c53"],["/page/10/index.html","21a606f2c50dda1472eae6f7330563f7"],["/page/11/index.html","d9a85c00a7c56b3f99f95e7309dbd405"],["/page/12/index.html","4493fc95ef68c9baa48eb9983995c301"],["/page/13/index.html","22c6b580574776525cb8ae659a29f4b2"],["/page/14/index.html","53de61eff8747de9e0d1cdbae279c4aa"],["/page/15/index.html","2ca2c400f1926bc95410d4fa11093c11"],["/page/2/index.html","d13e3ae0373390d9970fd6333db8f78e"],["/page/3/index.html","9e7c92b0ebe47732f66fe4a76a82c79c"],["/page/4/index.html","f63500b92fc3e545e746cac3bc5a6fd1"],["/page/5/index.html","828d6720c6f6454009de232616987437"],["/page/6/index.html","dbec31e848ca81019ebeff6b13374578"],["/page/7/index.html","3de999fde69d3a5e373853c57ba0c55b"],["/page/8/index.html","b28634843790ddf6dd65e4681ab2859d"],["/page/9/index.html","88eaae38b6f8615ac324b1601f845732"],["/sw-register.js","a80c73a8bf7b68475872ee081ee15f59"],["/tags/Ajax/index.html","4fe222a2f72c4f633c88a5f16df1963b"],["/tags/Axios/index.html","ef92a25934ae535d004d64f9e94e6a36"],["/tags/CICD/index.html","1c75b6b2342f422ed2bdc9644c5c6433"],["/tags/Docker/index.html","1d37f1b054e919b5d16a74ee9c768ceb"],["/tags/ELK/index.html","52a988fd84fa5e8c1b620e7cf8c62b8c"],["/tags/ElasticSearch/index.html","8b0cb7edd361dea8bb4661c23739f586"],["/tags/Git/index.html","d54939400d42ea62c870950150830ac7"],["/tags/H5/index.html","6c523f3816f1a5fc2cfee6575d452b54"],["/tags/JVM/index.html","4b3f0c897105a937b7e20fce76a3636e"],["/tags/JVM内存模型/index.html","a962957167846fe30556734e9b92e6c3"],["/tags/JVM执行引擎/index.html","a92fbce556668c3e0ec34203d9fd07b1"],["/tags/JavaScript/index.html","826cf7f5e78ce01f3911d2e3007391ca"],["/tags/Kibana/index.html","92ec0957a66ae32440d7eb86a1686b8d"],["/tags/LeetCode/index.html","2979e3a02bda7ebbfaab0510e8a86d8d"],["/tags/LeetCode/page/2/index.html","f8637a424d4d48f8de306d215df2c2ee"],["/tags/LeetCode/page/3/index.html","ffe3066fce9e44af548aa46e2e14634c"],["/tags/Linux/index.html","88287b835ed38c4882ed430be585c8c9"],["/tags/Logstash/index.html","f470cc9b59212c45fd916c99c24e1008"],["/tags/Mock/index.html","83ef0d5ee65262c249266de6508fb3c0"],["/tags/MongoDB/index.html","5dde3250752e10831b7cd57eb159ea7a"],["/tags/MySQL-数据类型/index.html","69a024250cec7b3bb64eef689946d1dc"],["/tags/MySQL-日志/index.html","01e065c2f60c5e10ccfd9317845663e8"],["/tags/MySQL-索引/index.html","3ad82508f0483dc49197211ddfbec560"],["/tags/MySQL/index.html","9c125f93930e93b11f80e4151ccd776f"],["/tags/Mybatis/index.html","157b090c9074365b256aa92242b3f9d6"],["/tags/MybatisPlus/index.html","7d52575a0a4a0aa26cbae6810e83eb4e"],["/tags/NIO/index.html","fbc41887a179b5540f4dcf5aee4c6d7c"],["/tags/Netty/index.html","58d3da7c59face673bac98f349e58d41"],["/tags/Nginx/index.html","78c1871b7576f82aef0492b89f5bbd81"],["/tags/Promise/index.html","caae296439cf76a671d047f36195b1cf"],["/tags/RabbitMQ/index.html","892c2b13cbc59569919a27747346d29d"],["/tags/Redis/index.html","d08b42d7a794503746f3f8d5e92eb775"],["/tags/SSM/index.html","a01d3e9c484178ad21fcea2a8a506359"],["/tags/Spring-Security/index.html","e8470063cc0239f1c5e602a04bbeb3c1"],["/tags/Spring/index.html","d62f43ee731435717ffe3e16a82d62bf"],["/tags/SpringBoot/index.html","aaf352dacd1875eed26f28a73a327cd8"],["/tags/SpringCloud/index.html","44496801f81fe0ef21a4ac2c21f1329a"],["/tags/SpringMVC/index.html","598d8428581fbdf037c041e916123c30"],["/tags/Swagger/index.html","3435381d2259cb89e3ab426dae868e47"],["/tags/hexo/index.html","ff8c497f3c2f506061f3ebed79182b52"],["/tags/index.html","9b1ff6629137ace1e244cbff60b3db69"],["/tags/jQuery/index.html","634ded5f5daa6204084b4cb396e18a8f"],["/tags/java/index.html","302d7cefba70dcd08df6ce01614d6dd2"],["/tags/markdown/index.html","6d3d0d5584989f5af0136e043171af1f"],["/tags/noSQL/index.html","eb09ceabcfea310aff3ab06e1babdb17"],["/tags/typora/index.html","723eb991e34c8fc3f260513a06f73142"],["/tags/vue/index.html","07f62e97dd4990e0b53c66f8b978f56d"],["/tags/享元模式/index.html","a9d33ab74fc30a5173debfb89f7afdc0"],["/tags/代理模式/index.html","d8163a2e2eb511720050d86bfeea4a07"],["/tags/内存管理/index.html","8836ff49276c68edb213c352b35f21e1"],["/tags/分布式/index.html","ef0c60b54ddeada843ae3551f77ae517"],["/tags/分布式系统/index.html","896055c8f0937fa272ebf20f81091437"],["/tags/前端/index.html","b18b3bc9105128c4c5345e3eb1166f02"],["/tags/前端/page/2/index.html","aae43281fc277b80ada2e598fa84ebbd"],["/tags/博客/index.html","e93a54651b3ed4ee1fb4aa2405f39117"],["/tags/后端/index.html","1787aa23db741024e842f40a483b61ab"],["/tags/外观模式/index.html","e3fea60e21b958c8025e1bb3e6f5d5dd"],["/tags/容器技术/index.html","71256c6c6a45ea8dc136ceacd6f0f36e"],["/tags/工厂方法/index.html","180223ea7b21a3f45273ca1a62d63079"],["/tags/微服务/index.html","775ffe9b174fd2832600a06cb0db89cc"],["/tags/抽象工厂/index.html","ca2bc0bf442ddebf235e74720f06fa22"],["/tags/持续集成持续部署/index.html","6b1410b7f5c4a67e025da5646865d3e9"],["/tags/搜索引擎/index.html","eb45c2d0073d65b80ab5655926f0d559"],["/tags/操作系统/index.html","303681d75a23aa7af3acc497f1c819f7"],["/tags/数据库/index.html","caa12e6cba782b9e1ce3e944c45ea751"],["/tags/数据结构与算法/index.html","f84c77349b70f90b7fbb0ab5286e032a"],["/tags/数据结构与算法/page/2/index.html","92eec049d4f0a1cd27155d56f9ae014c"],["/tags/文件操作/index.html","3a845691ef9ba3c9326b394536ee8b08"],["/tags/日志/index.html","6813a8bb13b22fecab9e5f0fcf07fefe"],["/tags/服务器/index.html","1619392911850d78a49b126bd1635c90"],["/tags/权限认证/index.html","ddb77cb83a4f79e77d6d7a0c70ad3ac0"],["/tags/桥接模式/index.html","c2d70d62e682f71a7f0f856b34adf72a"],["/tags/模板方法模式/index.html","bd5b3a2877375b58085386666272c67c"],["/tags/死锁/index.html","7b2f522c17d50a28ff836edb3ac9c794"],["/tags/消息队列/index.html","194ae9800df475413d7697dd9412374f"],["/tags/版本控制/index.html","a69c5d188d1479a0bbfa9b5a5e621b8f"],["/tags/策略模式/index.html","953a8aa7ba4f9ea76e17bf5655e28660"],["/tags/简单工厂/index.html","58c628ca43737320479c8f7669b9e4a7"],["/tags/算法/index.html","b3a36a339f9482df915053a496caa24b"],["/tags/组件化/index.html","f433ac60c53dc60b8273c2843e85ec06"],["/tags/缓存/index.html","18c08503a5cae96f3a28cf552c6f33d1"],["/tags/观察者模式/index.html","56086632b96a841532b592cf4467d3f4"],["/tags/计算机网络/index.html","f35544dce35608c477fbe9e8e0a3d723"],["/tags/设计模式/index.html","f83ddf021c6521d07bb717fbcea7f30e"],["/tags/设计模式/page/2/index.html","9fd309b4a425b9849a62f2591a44d60e"],["/tags/进程管理/index.html","93221ff3931923eeb60701ed19383831"],["/tags/适配器模式/index.html","cade35d56321a95ba6608717a69de77a"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
