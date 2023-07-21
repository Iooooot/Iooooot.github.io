/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","f1df9c8fbc2e90ecd664cf4ef2138e10"],["/2021/02/22/工具的使用/博客的搭建/index.html","63fda807bd27eee87bc787d81b0bbec4"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","392e873c41159fa655bb46d8a8bd3d2c"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","0a1c20d69517e685b4d5694f557f2a48"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","193c4eca810680416ab38d191e75e233"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","daf8573b803c380c80a2c5df298e2884"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","df684059dc491cc432d05fbbce6b61f3"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","306ac44887da756c167d58abcc8dcd99"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","dd1e82488bcd5092bcac168cb5b1e618"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","23ed451deb0028cef8390cd398b567aa"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","56c0c39825681d281dfeb532c0f705ea"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","1cb082173ea3aa2ce21f09077bbf75e2"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","9c4126b9ac1f5c5e8b49a75f7b9ca168"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","5d4f1592bda4f88c2fc639451e3c2cbc"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","86fb56474d9fdde8b30bf4f175fe9957"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","5aa85202c37b032f26d5cfbce0da784f"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","325711a55bfb79cb6ea72d45224a48b2"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","8247b89a8d445e168da46b084ff74c63"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","7df89db760449b3511ea650c479d4422"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","672210604742ba298a17e2cd9c60c865"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","1a6b88dde3a0b57bfe5e3e8ea9aae118"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","10f9acbdc317a1110cb87d45d7b9e587"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","80451f06f8bb71d994f40dfe60db6cc2"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","913d841005bee4ccccdcaa446e316be6"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","5e0f5c05f468ebf15e2130c7bfdffa6d"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","e2275eaf832dd521f2c5c80fad01869a"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","d65822624ed2e6aff989fc4b8d8c48c2"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","f40c67682b8a437872fb31abe2930e13"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","362df108d27a919e857b30d9947ba865"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","54a6e52a53c9099f412d1362562e476b"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","778da60d57e5e03b83d0d6a97fdff34a"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","615b5131acb1480f5c837b4a2cb6d9cb"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","d6f9eacf9a8e1d70b9f5644ca2b27c0d"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","b3f04ccfce86b454f7ebfa0ec16f86f2"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","95bc4d4ebbf2e576d0adef99d971f36d"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","0c62f8341cdf9efc3420e13fb3e70a12"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","83d9d0d6e13d1414b4dc407f8b90d222"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","8b282f91d0a98c79f1d3620afc99211c"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","4451b0138b2742fb5b164a742453701f"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","6460345dcfcd9584de93d247257434a8"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","cfeccde647cedba18200a38150fbf119"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","782c35e764bcc466f0e70f07676e1b84"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","187b2433b000835824e9917fa0b730a4"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","42b4dca6a06ee0a1f8eea8a2b4ac148c"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","c59df4439ca176f8d4587a1ed4fc0fd4"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","54fdafd646a541c27e23e797eabdb8b0"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","7c8ac41acbbe0dd8c0f0e6f97c50c402"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","78f5305e48a7ff2004d9456b70aba5ea"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","c2f9a879b3dc2dd05425f1c2f4cf8df9"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","ddb14f6ae53f8d1d45697a623ecbc925"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","74e316196e61026a39cd72c5ff2d7c42"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","959f3794dc8c3109aab860f026784666"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","f47918aadb39ec3f504cd90591318382"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","f1f933b463c7e8efdc74939fae2ee698"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","e9e1d6cb3dfff411c817d8bf7e5411ce"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","6231a2fd0253d37cc31e703386f2b453"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","87fb800e708103061f3fe0430a3c772b"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","1112e846649c586296d640e4cc953ad5"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","b0e00c9e309eef391a29db230554901b"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","278aee616262ba86b7dd22e28343e3ec"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","953eb10ebe18bbdffc395628c349695b"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","4d38387f5c447b7bbc70eae9248d7815"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","36aa2c3e35a970f7f5d370427c744bad"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","e8b06ca1a2bdbcdb79fd8f8aca20d30b"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","324c99f7393c2eabae0612dfb0afb06a"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","e243482bcaca3eb7c1430aa3e26760eb"],["/2022/08/17/前端/jQuery/index.html","2627b3771c948538e22e3abb68d6a85b"],["/2022/08/19/前端/JavaScript/index.html","f0047fd01b1adcce0866ca869ac7840e"],["/2022/08/22/前端/Ajax/index.html","0d7049f83b382706b1f7d4198e910235"],["/2022/08/23/前端/Promise/index.html","bfb19e21257aa3c67ca94bc478a4eb61"],["/2022/08/24/前端/Axios/index.html","b7da32949198d4b198fe00fefd35ac0d"],["/2022/08/25/前端/H5本地存储/index.html","5ffd7b1eedf0e8d52e823c51c9bfbf62"],["/2022/08/26/前端/mock/index.html","57ce4d269cc56840bf6297a5d0bab380"],["/2022/08/31/前端/vue/VueJs/index.html","029948cf81ae6a30478825d2c0c1e806"],["/2022/09/01/前端/vue/vue组件化/index.html","fa8c52767c966bda8d48c034478577ac"],["/2022/09/04/前端/vue/VueCLI/index.html","30de10da772f6814c70d4e64eb18f23c"],["/2022/09/07/前端/vue/vue实现动画/index.html","7ab9a0ef3636e2b5bd96b704d9ffef66"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","faded23a3ae8f08def6d4b2d819a52b2"],["/2022/09/10/前端/vue/Vue异步请求/index.html","f55ae0ce176a21f7c2853b850c0c3689"],["/2022/09/11/前端/vue/vue-Router/index.html","1aafb857b0518a1bc05bfedbc2acfbf2"],["/2022/09/13/前端/vue/Vuex/index.html","ba8104f8d77e64bcf68db8e5112a42e8"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","f9287f42bf3a4cd1afaf346c99f6dfd8"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","7c49dcaa7a24667b9835cfc3a443e1ae"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","9acd8801d1b91138cd44fa1c026c192c"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","310af07b0753313d166d5a7e06df412f"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","01dbb619479d5fdd3cd31242b5e7efb1"],["/2022/09/28/DevOps/Linux/Linux/index.html","acebb3431ed61875f7bf07c223785d86"],["/2022/10/02/中间件/Redis/redis基础/index.html","698fe0174749a203eb942f82bc042d44"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","9022385fe1dfb6272f9da58617b10fd1"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","fc6c81af92e2cd02d7531b34b33561c6"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","8e25ce1a61b1cf48a913da474bb16ba7"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","6072b951c6f1638d34330d5c396713dd"],["/2022/10/17/中间件/Redis/Redis集群/index.html","ba2b97a39cb396ae82bdb9177b17feb8"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","6b300f7598445e857bb9ee907edc63cb"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","11187c26f53cd520db0d1c87a554d173"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","be82490cd4e81fcbeb6f5742475c0c8a"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","5314923eaf2a5dd0edb622142bee231b"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","67ca4150a7df58db3bdc60b0e9375b85"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","f3bd55d0aea3d73acabbcb1f5fe6c19e"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","ffc8cd753dd1cfd6d853eb24938c9c2e"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","5fe53d491f4360b5ba3c8c802634025e"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","74f7c32f4d67ba1aeefc91fb7790e65e"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","e7aa18684b3b28c066f7eb837dcd301d"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","733148ebf0c8794626aae89d293fb221"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","3749869ee233eb6204eee2e4d0fc9da3"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","685febf57498b04d72ef6f18f6267d83"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","3f6021352c71f21b524e99394290ff4c"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","b1a7a6b6df578d4dc3fcf336fd989c8d"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","29d3e4cff7597c81c1e8765b1b30369b"],["/2023/03/10/DevOps/CICD/CICD/index.html","52e47e7e0b76cfa245a3d9992102e0ba"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","b50ce1c50913c68f173259c80c56b6ee"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","8260bc8ed2616e91dadf0ab7e697aee2"],["/2023/03/13/Java/NIO/NIO/index.html","c7ee99d926bb74e60b937768523aed32"],["/2023/03/14/Java/NIO/Netty/index.html","a81f2a3c5c06ffc2811d9242c4b92628"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","a8264b0da3fbc11d555500bbc4a4dd71"],["/2023/03/17/系统设计/分布式系统认证/index.html","8c484dc35fb64d0e324e4c63578c13f5"],["/2023/03/19/Java/JVM/JVM概述/index.html","8befa48e20dcb9d0d807ab90f1c6bc06"],["/2023/03/23/Java/JVM/类的加载过程/index.html","6770054345b27d36db3ffb1b09ffd7ae"],["/2023/03/28/Java/JVM/对象的实例化/index.html","e4f8b9e8a79b1fd4ef15ae270993b9cc"],["/2023/04/01/Java/JVM/运行时数据区/index.html","02450758591888d6a00a00443ad6c2b9"],["/2023/04/04/Java/JVM/执行引擎/index.html","ea6fcf53cae46fbc78d284113242bfb3"],["/2023/04/06/Java/JVM/对象引用/index.html","277420cf926dee45e2326e6f1fe8cd61"],["/2023/04/09/Java/JVM/垃圾回收/index.html","b2083674b257594808d16d180b94bef4"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","816c1780698a0c568a4422e17e58744d"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","7eb114bd2c2e95b02009fa4711d46960"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","3b8c6f861054f123d5cb1a639d41f330"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","543a82ee4c3bcb983fc7949b65235663"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","4c407f66aaca96828ae55e8529b7e486"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","f34b97e12b5492ccd83f74fce6774364"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","c44cf255c66c77765ab1ff5e94d8aa37"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","dd6c408420a0f6742107ef9d1cc747a0"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","e6b58bc88285ea3776adbd484c6d2574"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","9f5f54f2181f9ce2f98bd5b964540141"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","684570c5c65bdad1a50fc43272458ad5"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","e4251a2d223a7d59868c3546ebd8658a"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","30046dd4fc0018fb69f696c4790a384e"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","2d1d8ea44b210bebacaa8740d4d91c6b"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","83f6e73e7d76403a15822e1931a19297"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","8cba01e10824e11e54353fe96c289e92"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","1930c20bf15abd2e2faddfbcca03afa3"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","ace98fd62416e6cb20fad88e4647ccb7"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","4c12db067c51e86b3a8e48c36ed5be49"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","5f1ef280f8dfaf750f76dfa4c2d0140d"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","04ea7eca877c41f98c4fdf3c1797c95f"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","e2d954dc548d2fb5fe5d270c66df1134"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","69d75ec21763a517699e850fa682761a"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","8a3d878d28acf1cd8a474eb54a84b75c"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","46306a4caf1f843490cc41ca02d2900d"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","313fd32ca0fcade5c62d9d978c742d16"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","dadd4ffedb803be7217bc79c2cfc3277"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","d08e947d75e45ff462e3de4bb75c8249"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","d899d927bf1cfae55b8bf573737f7e83"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","a75f30d305480e6f445c65b48192b3a1"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","62cf7bb5c5e0bbb497c210105b21d683"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","ea3976bd5e0bc2a2991fc7b810c8ae5a"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","f1467a18547eb69332cbf5aed7b8c7f2"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","703a60ef654baaf5733f22b23f7f0112"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","063894e5bcca8a1f1c3a41247f02fa22"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","43d0d5ca69b268afe91721cf4c54ada3"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","7bef7bc44ef8f219f08175ed5dec3f72"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","eeb2c974c503686698e7387a4ed2277f"],["/2023/07/21/MySQL优化JOIN语句/index.html","cf5ebe1f14b94ba962cbfc13aa2e5644"],["/404.html","1149d52dd5bb557b0cf537b6021c037a"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","5157275cd5ca454e05997bacc1c360ae"],["/archives/2021/02/index.html","c69f10d312611d0f1d001fd3b4d1da39"],["/archives/2021/03/index.html","c3a4dfe48391ba911a3d17aeb6892eb0"],["/archives/2021/03/page/2/index.html","730cc0ef01884df64bdb25a029179ee3"],["/archives/2021/03/page/3/index.html","9b0a71d2bcc33791029d0863596ba518"],["/archives/2021/04/index.html","db86d9d0a6b5da5d2aa5e30063decca0"],["/archives/2021/04/page/2/index.html","77f532b781930747607d41aa54b30168"],["/archives/2021/05/index.html","79e8e27cf043b11d0fb207abf906bcfe"],["/archives/2021/index.html","ebf39afc4d02382347f37708a3600fe4"],["/archives/2021/page/2/index.html","c4dc0ad056b8773f69349e064c7ef0a9"],["/archives/2021/page/3/index.html","9c992791c140b70aa86abdaf6bb49cc5"],["/archives/2021/page/4/index.html","fc20cf97bbea960584bcffa949861f03"],["/archives/2021/page/5/index.html","0a9e38abf821175eb9418589a83b2a55"],["/archives/2021/page/6/index.html","344e232daf2e5c1cc300fc4e4bba727c"],["/archives/2021/page/7/index.html","cacbdd47958eea9f4d19087f34516579"],["/archives/2022/01/index.html","1a59467f9466cd6093d2e93c4aafb217"],["/archives/2022/04/index.html","9af9b21c840ad75ee86609ac9fb492cc"],["/archives/2022/08/index.html","a7e1bcf0b1cb7c05fc4c16b4ae252f7f"],["/archives/2022/09/index.html","3b29949765f3532d4265c1e0193ec3e7"],["/archives/2022/09/page/2/index.html","a995aecac55a42883bc68ff367f82ada"],["/archives/2022/10/index.html","91cc27513301776beb0977639f398857"],["/archives/2022/11/index.html","37f43e6dea2cf9ad995464d9f59a6294"],["/archives/2022/12/index.html","46705d882121d7fa53d7bacde5dbf15c"],["/archives/2022/index.html","c8347f679f4ba39808ffe6ead6308999"],["/archives/2022/page/2/index.html","56d6ce3ccf631aee479be89b4abc912a"],["/archives/2022/page/3/index.html","b71c2d00f139c651319950b6f0f33f5b"],["/archives/2022/page/4/index.html","803b4ff3af4c6b97624858c87c872454"],["/archives/2022/page/5/index.html","6ea4f0398ef3ee0030819acda8377461"],["/archives/2023/01/index.html","41927f10835c73ad078dc7cc5eb70582"],["/archives/2023/02/index.html","743448b72ad5f85b204858aa5a490dd1"],["/archives/2023/03/index.html","2d62e40bd4efb42d26018a22e435f056"],["/archives/2023/04/index.html","95638e4bc1bae552f7aebfdea90872f2"],["/archives/2023/04/page/2/index.html","d46e27b9581bd3d5aeb579d60db8f132"],["/archives/2023/05/index.html","4ec08babc148f48e085f2bf735613ad7"],["/archives/2023/06/index.html","684f847167b1df3154ed8dc4e004d023"],["/archives/2023/06/page/2/index.html","01cf69d24fd9c96fb0c3424d66441709"],["/archives/2023/07/index.html","a035d78ae93aa2e89d56ad08308a4310"],["/archives/2023/index.html","385ecdf2e35ee52b86563f9d7c62398d"],["/archives/2023/page/2/index.html","1a0b0cc7606491ed1a70a553d3b81912"],["/archives/2023/page/3/index.html","43b25966fd07355e08616ffee0d1c0a7"],["/archives/2023/page/4/index.html","1886832847afc3ae2812d2833ebb191c"],["/archives/2023/page/5/index.html","e26fdd6282fb950a2262767e16374419"],["/archives/2023/page/6/index.html","77aa47661f8ffda636e1c2c18733c578"],["/archives/index.html","0220c842e4eba4734c1291a09a330f05"],["/archives/page/10/index.html","590ce64450790d39a936e22788100108"],["/archives/page/11/index.html","e291f4589453d9c143aae5e2ac8b409f"],["/archives/page/12/index.html","d78cbfe1c9a57d8c8898ba16f8b168d6"],["/archives/page/13/index.html","544b2be90b8a37fd3b44367cd03571a3"],["/archives/page/14/index.html","2b9a452ccf9606760557eb0f064b9e3e"],["/archives/page/15/index.html","36a3b2ef6d55fb179b632b2261998ac2"],["/archives/page/16/index.html","d98e4b7d971fb279de6dd67e26be67b5"],["/archives/page/17/index.html","cc63bebcaaf541bd9a6b6770557eb25f"],["/archives/page/2/index.html","b543abc6e6843a93430c819ead6610dc"],["/archives/page/3/index.html","d63cba85635a6dfc8258cf939cbf1f5c"],["/archives/page/4/index.html","0a4225125df02c2eabed85371f32313a"],["/archives/page/5/index.html","47b414c2a910c71d638c649146c56c53"],["/archives/page/6/index.html","c1039b03b0604396cafaf4d92b901775"],["/archives/page/7/index.html","67ec782b47699e5160f8703030199c39"],["/archives/page/8/index.html","7c5d338b63acdeb6019ce3d22e8ab6e0"],["/archives/page/9/index.html","acd9d8ee50c3bef67f9e831ca2bc0259"],["/categories/Devops/CICD/index.html","7258c1ad338c72e6f5c0c9f2edd4fbb0"],["/categories/Devops/Linux/index.html","492b4746538d35f56bd6ca9f08839d0b"],["/categories/Devops/index.html","26df57317f6f3dd2dcbe40d9019080e4"],["/categories/Java/JVM/index.html","3f4f555ae39bd0166b8672c91ef7d404"],["/categories/Java/NIO/Netty/index.html","29ce7c23b8a8be7e20625d64e2133943"],["/categories/Java/NIO/index.html","50351a1f0f8fb33378469974788e42b8"],["/categories/Java/NIO/原生NIO/index.html","0a9bdd72906fa0a09a45366ba9c6e034"],["/categories/Java/NIO/文件操作工具类/index.html","22f04647654d154d08faff8d93020006"],["/categories/Java/index.html","76e5644d099b5c289cc4467c7e4e17ec"],["/categories/Java/page/2/index.html","6c9d2b25c3c831ba369868a49d880e14"],["/categories/Java/学习路线/index.html","765b1dff64aa32cdf24a2b9b9b65c9f1"],["/categories/Spring全家桶/Spring-Security/index.html","b2b2f5144c12b727ff567b7b50d98025"],["/categories/Spring全家桶/Spring/index.html","9d7627516264bb64652773fd4d877ca9"],["/categories/Spring全家桶/SpringBoot/index.html","8c4a433c6c5ef7adf5ee83f573f6b499"],["/categories/Spring全家桶/SpringCloud/index.html","0a6995c3c296a2c7b1e2426ad318f28f"],["/categories/Spring全家桶/SpringMVC/index.html","340fce2fb01e8812cfbb963dbc891405"],["/categories/Spring全家桶/index.html","9062c283540d34220da55654febb5853"],["/categories/Spring全家桶/page/2/index.html","ec4b2d1317ca8a21756c13bebad6abf1"],["/categories/index.html","f5df1b9390f9f26cd2c0f3decca373f0"],["/categories/中间件/ElasticSearch/index.html","67719860ce364457df7f3ed6f6922d22"],["/categories/中间件/Redis/index.html","a089a90005d0dd9e42ce17384fb9ea1c"],["/categories/中间件/index.html","9022329e5acf3a023dead527b0534280"],["/categories/中间件/page/2/index.html","60871606c9caca258767318bfa5294d6"],["/categories/中间件/消息队列/RabbitMQ/index.html","de4465a9c2e67abaff10dacd38665e32"],["/categories/中间件/消息队列/index.html","536fca2e391e5828ead08569303cb38b"],["/categories/前端/Mock/index.html","7cd39f7ff819006d43518f47b9a2d8f9"],["/categories/前端/Promise/index.html","bb7693405501592436874d623ee0be11"],["/categories/前端/Vue/index.html","767df358d72b62e6a872601fbc88aee3"],["/categories/前端/index.html","b90f6eb8951b7197c911bc95fde00252"],["/categories/前端/jQuery/index.html","44d39fc6add95500a2d3bbccfa56ad06"],["/categories/前端/page/2/index.html","495f369a691a8cdbdb8d1ceca2a3fc9d"],["/categories/前端/原生基础/index.html","98067853b1fee36d547ab2f2786877fe"],["/categories/前端/异步通信/index.html","f9ca4736701550b7d528ecbb090e4247"],["/categories/工具使用/Git/index.html","f8de79cae171ce1012bd0a8e3c7f1f23"],["/categories/工具使用/index.html","687aa1c800a99c2d40fa7f1e20102c34"],["/categories/工具使用/markdown/index.html","e403266ad0aa6fc1e8502c5eac7ae9e9"],["/categories/工具的使用/Docker/index.html","12db8a9e2c1c3322e36df112e814ebbf"],["/categories/工具的使用/Nginx/index.html","47dbd84f41b4ecd9f259da82798bc865"],["/categories/工具的使用/Swagger/index.html","0ee7fe19c1694a776dccf19c7630fbac"],["/categories/工具的使用/index.html","a511b43addb63ff346e95b4b6d02b023"],["/categories/工具的使用/博客搭建/index.html","96b40d593f17af9804d8b83b41c26b42"],["/categories/数据库/MongoDB/index.html","e6c074e7ebdcef2f0137cba639c67d26"],["/categories/数据库/MySQL/index.html","8a15e4025dc501ef9b723e27ff2646c8"],["/categories/数据库/MySQL/page/2/index.html","91e0040038bc3d19434f9fe291cfb115"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","63ddefb36b6b25a609de27854baf2d64"],["/categories/数据库/ORM持久层框架/index.html","9df26f4a93869a990d0f005737a1c435"],["/categories/数据库/index.html","d0c1eeefcdc6ef1d118361a3b8c69d29"],["/categories/数据库/page/2/index.html","b4f3d90cb4eaf17ddb137aba38b6b444"],["/categories/数据库/page/3/index.html","cd534fb1c1bfc580b604adce41b14cb3"],["/categories/系统设计/index.html","729af21351ea4e61ee1e7aa7cb76966e"],["/categories/系统设计/page/2/index.html","4e4115678d52f165cb8a8f0045d93204"],["/categories/系统设计/分布式权限认证/index.html","50cd9c95dfc9e78e0486eae58666ba5e"],["/categories/系统设计/设计模式/index.html","f4a3d0c1f3125ea43bab7e163b5e41da"],["/categories/系统设计/设计模式/page/2/index.html","0f355378d53dacc31a58f61aba420a41"],["/categories/计算机基础/index.html","711d083b96bcb4113043033324a29808"],["/categories/计算机基础/page/2/index.html","d306d2d7bffcdc67982dbedff3aa6f13"],["/categories/计算机基础/page/3/index.html","feaf8bb4d3ccbba3b87d3a50cf63abb3"],["/categories/计算机基础/page/4/index.html","8c30d4f91198bd826e0eda49ee9bd876"],["/categories/计算机基础/page/5/index.html","3cd938a4273a48e0d49694ce622ba4a6"],["/categories/计算机基础/page/6/index.html","d36c9ff6eba08e04a211b84582b8526b"],["/categories/计算机基础/操作系统/index.html","73d21bbff2228083c9de60498e6d3191"],["/categories/计算机基础/数据结构与算法/index.html","dbbcf5b50b57e969aaf04a306f47d5c2"],["/categories/计算机基础/数据结构与算法/page/2/index.html","2c2ff65d81855eaee3e8633c8ce7e869"],["/categories/计算机基础/数据结构与算法/page/3/index.html","968810773e95f01a7bc35fe9acffc91b"],["/categories/计算机基础/数据结构与算法/page/4/index.html","9ddb62c0571075c3ff041349a31d4cbe"],["/categories/计算机基础/数据结构与算法/page/5/index.html","444ed81608d5e45eb5d745ff12ab1f28"],["/categories/计算机基础/计算机网络/index.html","7e103fddf67e66d0931f42409922d365"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","844c4c8b777fe033ed041643b747e7ec"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","72babcad82209421e4bfb7881ee1b76f"],["/messageboard/index.html","2ec50926a9053041ee3b70d2251d62ad"],["/page/10/index.html","c7e8065d6455ec62dfc34ba1498ebbcc"],["/page/11/index.html","6c2abc7607ee881a46a1b38971b49518"],["/page/12/index.html","0e97fa5413b1c1f1a426d616d1948417"],["/page/13/index.html","6c9a171130f94d208238057a823efa79"],["/page/14/index.html","61316808ebf04cbd272213fdf98590e4"],["/page/15/index.html","1999f3a8ce09159be0ce5080f03c8ea8"],["/page/16/index.html","644df6fdfd2c9bc5fcd40ff7030678a4"],["/page/17/index.html","7888b62a36765dcef7ccbb6be1f7e230"],["/page/2/index.html","a43b4bc2bd2f09dc8ce08c8c9ff15036"],["/page/3/index.html","def96ca31fe6b26a02a09d008c7b8b42"],["/page/4/index.html","f46730ef51d0f53547989898f10e2e36"],["/page/5/index.html","c8ca2e0f23644981033c330e05136c40"],["/page/6/index.html","609b3a3e32b679e37500af69ddcba676"],["/page/7/index.html","e2a61b90ce4b6e3c3dc576598cda2645"],["/page/8/index.html","bd64b212d1b8dc986bacb105be3cd710"],["/page/9/index.html","e38beadeff1dfb96e53973e82b5fffcd"],["/sw-register.js","8669b52a48636aec0eb628e039b4883f"],["/tags/Ajax/index.html","237d6e57c6c1b42f08d95880118d7e46"],["/tags/Axios/index.html","00cabb44d6641043e75f61f018de766f"],["/tags/CICD/index.html","6fa205b6f16d6b2a4b3dea8331df51e6"],["/tags/Docker/index.html","08ef9e2db2c6b56b011d20ffbd3c2552"],["/tags/ELK/index.html","a890e543f4c700c76efa312480cf3a63"],["/tags/ElasticSearch/index.html","20245617d99a36d8b51333a0334fe086"],["/tags/Git/index.html","8e5e52816e2699920a46dd4d53f5fac9"],["/tags/H5/index.html","27c1724bf355e19ce778c474d778d6a0"],["/tags/JVM/index.html","026743b8affeb5e8a999b1cc0a614baa"],["/tags/JVM内存模型/index.html","7352929618459572b16d71f14c659d51"],["/tags/JVM执行引擎/index.html","5d539a02ed425bd4f1a83f31f65a3b90"],["/tags/JavaScript/index.html","64898a2c9aad5bc09f4ca4de32f352d2"],["/tags/Kibana/index.html","656a00df47fa36e84326e465d1bca74a"],["/tags/LeetCode/index.html","4cfbfdab512270e743324961f678d03a"],["/tags/LeetCode/page/2/index.html","afb442ec5ca8a7432160a103f312801f"],["/tags/LeetCode/page/3/index.html","cce7ea1e793146727d2a242b786b05cd"],["/tags/Linux/index.html","eab35a42392caef5faabf83cb5232df6"],["/tags/Logstash/index.html","c9e52ce863a65af4f980fcf5d4bcd341"],["/tags/Mock/index.html","9bd65ef815abc1c4b7762c2b67b5bb32"],["/tags/MongoDB/index.html","9f20776f41bdcd8e854eabc3ed01d790"],["/tags/MySQL-事务/index.html","146753606cd6546afeca1b0a10f7135d"],["/tags/MySQL-数据类型/index.html","0a18c135df2d7c128fb63f4b7a067725"],["/tags/MySQL-日志/index.html","5729e0e48bd0f09ab3da6101102008f1"],["/tags/MySQL-索引/index.html","63c7a5697d02e95107c1f5af6c772d80"],["/tags/MySQL-锁/index.html","fc8275cb432535b00e383d928901b25c"],["/tags/MySQL/index.html","3d7f46861cdd7b68537b47c4ed07953a"],["/tags/Mybatis/index.html","a403e36f5b05bdcf2f0fd4591a50f251"],["/tags/MybatisPlus/index.html","6d779b36e9cdc5a71274ea3384600a47"],["/tags/NIO/index.html","3d7a242fcc5cec2fc45c1a1997824467"],["/tags/Netty/index.html","ecd0c506788d9027346858edb62a50e7"],["/tags/Nginx/index.html","3a1daf7ef08b19ae4ff7024a4837aed7"],["/tags/Promise/index.html","72b877fce256528dc5161a8115f408da"],["/tags/RabbitMQ/index.html","13199ab83d5c928db1a80f6ac589a36b"],["/tags/Redis/index.html","6362f262d82be8de1ee13096592730b3"],["/tags/SSM/index.html","824707554c32be35f5b8aae17da7cd81"],["/tags/Spring-Security/index.html","a7fc648a885cc0b170707463dae48124"],["/tags/Spring/index.html","c7fba967461c627523ee14a8c2900e73"],["/tags/SpringBoot/index.html","cfba49d37cdf9081ee11c76499503f11"],["/tags/SpringCloud/index.html","0db255a723b3929ae130324f3c55cbca"],["/tags/SpringMVC/index.html","2f7c6704f564ae70dac659666ac01a55"],["/tags/Swagger/index.html","bc8ad2d6982892d9dbac0aafdd60be88"],["/tags/hexo/index.html","7892b9f916929203686480b4a9b5a738"],["/tags/index.html","19c3a6d21a102fa5b6a9c3fe15d6381b"],["/tags/jQuery/index.html","c33135dc5019bd32632ce638c2d8ac22"],["/tags/java/index.html","f8481b0157b47805b2a185eb3ca65ef0"],["/tags/markdown/index.html","2b4bef6f4d30a84c8a1f83a4200860d7"],["/tags/noSQL/index.html","617c0b9d0d79209ca6361e62f8e9cc79"],["/tags/typora/index.html","797ba335bc6e6750e57ba6ed39b8bc9b"],["/tags/vue/index.html","4854102d7567b67be88354e019777371"],["/tags/享元模式/index.html","1bc3228573e52b3f09cb658ccc520a0f"],["/tags/代理模式/index.html","d3e67454d8056723ecdf99ce339990d2"],["/tags/内存管理/index.html","e8dc53a41e255e21cdda4fc6055bf58b"],["/tags/分布式/index.html","5794bb81c2ece22447d904c397d5370f"],["/tags/分布式系统/index.html","5acc5a4f72d7b4ea56385632b9cb32e3"],["/tags/前端/index.html","71d0725f55afb884de1e1a074bb65760"],["/tags/前端/page/2/index.html","275ae765d4cca8cd505d85c9d53956cc"],["/tags/博客/index.html","85fe72be8b2b0960a3332f526a36e897"],["/tags/后端/index.html","c9081acd5e187d5f87d0b710bc273419"],["/tags/外观模式/index.html","41e40c3b02b646a7550e3fdfaf86842c"],["/tags/容器技术/index.html","83cb0b61ab4d769a31ffd6cdbc8a0719"],["/tags/工厂方法/index.html","bd4f6f731779b2de09f06e468b7029d0"],["/tags/微服务/index.html","8f768e2de3ca5dd701525ce8128f4674"],["/tags/抽象工厂/index.html","6129e8b4719e639f182e645a1b0ce49b"],["/tags/持续集成持续部署/index.html","da7782cc03215afd0a34fe72feb4220e"],["/tags/搜索引擎/index.html","a856760e1e58721fd609706d435f79ab"],["/tags/操作系统/index.html","267862274c43d51bd78c8a9db7902bc7"],["/tags/数据库/index.html","0b8799feeb19ed2d43fc118d15b8ecb5"],["/tags/数据库/page/2/index.html","4c696d6723a66ca42c4924425ca9a51c"],["/tags/数据库/page/3/index.html","99f4a4f66a7eb5f32cf948e3d7dc157d"],["/tags/数据结构与算法/index.html","91bf89f8e2fa5679a50c91eb9a4edf4a"],["/tags/数据结构与算法/page/2/index.html","02ab8a84fcbe6fdf16386ac221f67860"],["/tags/文件操作/index.html","2cbd6a137cb6ed8e61bddd9f8d88e9a4"],["/tags/日志/index.html","ddb1efa0e7ee3c7164ef2112c0698b96"],["/tags/服务器/index.html","3324697559ae36cba6b50e80cf048c24"],["/tags/权限认证/index.html","547eb181d39dde60afcaa711f62fe621"],["/tags/桥接模式/index.html","b2cb789e4103f7f17054a5b14279ab5f"],["/tags/模板方法模式/index.html","8d49d330bbf3e1aafe1d53dbf491a9bd"],["/tags/死锁/index.html","6eef57b574b4da3a48bedeb5e33f368d"],["/tags/消息队列/index.html","80f9fa4ce1516a45d9214db0f34f2ed9"],["/tags/版本控制/index.html","eb7c8f24483acc2d84f5f5f725acf1a7"],["/tags/策略模式/index.html","97b3fcd6aa2857a7e6b3a42dec31d71e"],["/tags/简单工厂/index.html","5050faabd89304ebf4e7637494349b7a"],["/tags/算法/index.html","d9ecc120c0b437d92716043ae30bb258"],["/tags/组件化/index.html","7590ae63b2b55543f321a6fa3c390ae7"],["/tags/缓存/index.html","ba4884896ea4f3fd79a7a08deea9e2b1"],["/tags/观察者模式/index.html","b4561e2d2d611172093e0120495673fc"],["/tags/计算机网络/index.html","7dd3debb13003d04c9fcf6963d5cf5dd"],["/tags/设计模式/index.html","37d23eb9c6758dbbb533ba7c28056ebd"],["/tags/设计模式/page/2/index.html","2097a6945ca10b071a5012277f64b2c2"],["/tags/进程管理/index.html","2a709ca4e85dfc3a14d1f89d556a1050"],["/tags/适配器模式/index.html","b23bb47b0b80f2f565f05e6d31b9e48f"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
