/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","95fb944d3affe5d8128acce2e644d6a8"],["/2021/02/22/工具的使用/博客的搭建/index.html","5a9fc8a5ed00b023c065320431ff030b"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","1d9cc819fc9280c9887986d3881c01cf"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","121f86af56234d741e00cc98157e8124"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","8d9e6f228da382f58b097c940b0dc357"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","662e830f4297639d9354af735451fa86"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","3d3201c288134839981de439a99126df"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","c05c422228734b02d14184892571a3e4"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","7a1882a9313f5e049983586d7b2860df"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","f90219991238b5669e1f27f92a801a13"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","adc0dd9d18db297be63d79c747614df7"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","ab0a70de31fe89f4396c655d6f0783b2"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","b4e3730e34159f7eeb9d46eceb0dc65e"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","c4d7708e51a284e73bdcebece3ef9549"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","e455199d1394ee4f41ed9fb6f156b87a"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","fcab9d931a834fedac8390cf5506d100"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","156240ffc56152855b5e5cd70aa91bd3"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","430c4f85a2fec3d2fb2e7ff5aa35d166"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","154b1254272c6a0f46cb65884c8dd5c0"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","cbf7eedfb36111ca56d4f98dcf13c719"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","f45b25ae9f2c2350ee8499509dc83edd"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","4e6e59004c2e3c9111ad55ef78f07a4c"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","50ac3817ef89ed404652d674b1059ff8"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","ea9399a665ffb009c487e611c93c4d61"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","13741c9ffebc25a5c4ddee755fe26a78"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","9b9ed2128b0df10d239d17dec2887b49"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","210c8ac76031475d5801c3395ba769b9"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","e23c5b4d7bea85de186f6a99149639ed"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","a293e04aca681c1495db9b5f50d3c2c2"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","62135c69d12d7c391d3f9240db39e02e"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","eb210761f654f91ccba6d3f8b777f1de"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","efb061f06ae908ed8a957c3e00bb55b6"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","627161b0a2b3db3ccc31371c48a7efda"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","f651fe593ef00458937d8772a2889aaa"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","8ab1e048acf2236afc1d6ad38018a52a"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","f8c30d92e0dbdb676d3937bf59f713b2"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","5a54120be597c9b7c4dccec148ae6e0b"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","1166634c25bdd203f240b00ff8cf39e6"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","ac066a6bd626df3a74d8cc870d5c5ee7"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","8b61f5ae52ccbfc63ffadd3d842e74d8"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","302a74300e25e63e0c20431ce84b1b0e"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","160189d705a2745b0b48180e33e1b147"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","fe2eb61b4bf7b9195c6c0b637f07c0ec"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","e9a1bb931118c03356718d5006b3b943"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","87e30786043e0356b1783fd605c3cef5"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","092d6bebdfc0f528c7233ac41eeca27f"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","52766fd3e87a55211b36bd91b7dae5ff"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","25c550d9ae66d52233236bb718eefb5d"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","f6a09188e6cd5e23fcd3d506918447b8"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","3dc379cacd3af125939fc2c0629d23db"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","e580d0c2aff958704c7693249ce856b7"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","bbb8cdf147c230dc03b7c796786b8799"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","6963b88f1ead02b40b7da32c030d818e"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","4becab88c953fba769302681229f19fe"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","a206859a34840f96b11b25f0abaa6d41"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","28040cc049ff02a45c2ae1d48543b893"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","61df1291c2e8cea4c825ebfb07acb24f"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","897c5bc0724fbf48a482d3104b84a7d1"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","7ae8878d68e79c464ea2362413c09cfc"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","8be507cb1b359f2deb8b9bca39077024"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","4c478113a83a312ce0bbd8120fb7cc9b"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","4a2fc912550b688c406ddf369eb9adb8"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","7e31de40cdfad1f77561fc0f777cbaa1"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","c4106799fbbd8784bc4bc2abf6b5617a"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","131e730150eb746a5e1e0c0c0c85def8"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","162003cf17e6896432d75424f2bad66a"],["/2022/08/17/前端/jQuery/index.html","9dcbf69565d63fdcebdb41d07cc7a6d7"],["/2022/08/19/前端/JavaScript/index.html","54ad12a57b41361b24c2a82bdc6f4772"],["/2022/08/22/前端/Ajax/index.html","d84bfc63c8ca6983e87d3e74453d7bfc"],["/2022/08/23/前端/Promise/index.html","da9bcb9ebe6046b151e40abbf7bd0c10"],["/2022/08/24/前端/Axios/index.html","33e35b51817d511b2a0eb088282f7473"],["/2022/08/25/前端/H5本地存储/index.html","727758f8c8a3f2bae3a81f9201acc943"],["/2022/08/26/前端/mock/index.html","c3d7175dddcc996a8db08173157303c6"],["/2022/08/31/前端/vue/VueJs/index.html","c27c1531f9f1250497579cca3f2d9741"],["/2022/09/01/前端/vue/vue组件化/index.html","8dd61206341cc2d610b53e1c7d8ef403"],["/2022/09/04/前端/vue/VueCLI/index.html","416c9f0a6e7e7b5b11617a51c0dd93a1"],["/2022/09/07/前端/vue/vue实现动画/index.html","085c605101d4e513e820f4b34edf8952"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","fd4220b1d3e3d932f77e9ab6c8f30d30"],["/2022/09/10/前端/vue/Vue异步请求/index.html","6c9b80c1f4062b78dd2f9468e0f039f9"],["/2022/09/11/前端/vue/vue-Router/index.html","d1836d808aaaaa9036108eff01edc67e"],["/2022/09/13/前端/vue/Vuex/index.html","9a2b93ff9191f7781e2e9ee82595c24b"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","af68e8780a0abef53acccb71ee0f4aa6"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","25ba7e3b9788696dbfd72891a5708c32"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","3446edeb1e1713f6a8de55fe3438af98"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","31fcb91a35dcaba6ae221a47c7c9ca0e"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","40edbd37688a6fd2f315539a8400e28c"],["/2022/09/28/DevOps/Linux/Linux/index.html","0ebd3ee41f76f6261d4d8253ec108a7d"],["/2022/10/02/中间件/Redis/redis基础/index.html","47c314ae95ed009835ac1d614c7374b0"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","1d0f34b962eda5037090aee13acfbd72"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","f99a94bb0b3b550960ff39448ef42e47"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","67216806430dd015a30950f9a9958787"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","719be1f3f54f5880f0cc7fba5e4763b1"],["/2022/10/17/中间件/Redis/Redis集群/index.html","e719785d43b79e4f780a5dd1f9412e44"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","abf2ca97be87461bcc7cb79ca1a5205c"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","b3cdc8022fd6f936e2679dc8331d2b20"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","e919de193b202f5f3903c2c6ba7cbb48"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","c32d4617e8870907b94dfd09ccd57b0b"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","0c11f501793b63556993fc17ac225ad9"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","e105eddfac3a9dfa4c115ae5a4ee26d7"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","502514fa11ca363dbb0eeaca8e8697df"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","a607f6b03deb372922f24d422a5b9bd2"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","d630447e1178cd62562d594d73383e72"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","2c18acfc541da5132a2d30488fb8dab6"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","663a61fee8adb647bda2f18f0c674308"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","fdcc767df818fc94c5cda6594f4f8c8a"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","4e61e7ffa7c57696f5423e5fcec5dfdf"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","778dfa082ef32260f2b9d3ee6df76bcd"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","76e6e0f798b7c8145c2f3c7b1ef568ea"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","343a7f6118f4ee51b7cdc33c7c4abb71"],["/2023/03/10/DevOps/CICD/CICD/index.html","d47c50ddef79ffb21adf6b6250a35d38"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","e99f33602f9bcd69258560c613e372fd"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","20114fde11dbf34df17e9d74c742cf38"],["/2023/03/13/Java/NIO/NIO/index.html","36430281abe93e9dff0054c208d4526d"],["/2023/03/14/中间件/Netty/Netty/index.html","595f1daad327ca3807252d001f4e2e37"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","3264cf07b8bc2ee6fcb98461ba8ab4b5"],["/2023/03/17/系统设计/分布式系统认证/index.html","dcb608f5d28722e4f8d836fb491c13ca"],["/2023/03/19/Java/JVM/JVM概述/index.html","c6e9a6286193668b8a40aacdd124fbbf"],["/2023/03/23/Java/JVM/类的加载过程/index.html","e482de02f773020bebf5b4dcfcd4da93"],["/2023/03/28/Java/JVM/对象的实例化/index.html","38c066507642025a89242edd9d37677c"],["/2023/04/01/Java/JVM/运行时数据区/index.html","9a868bed46b3959bfbc71a2296be0774"],["/2023/04/04/Java/JVM/执行引擎/index.html","9aa1c02ffdef91fedca77d804671f80e"],["/2023/04/06/Java/JVM/对象引用/index.html","0a5a15fad51599d0dc7dcaa82a0c7b0e"],["/2023/04/09/Java/JVM/垃圾回收/index.html","291a89604341991a1235fe947c9f5ee7"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","22692770f3ee076c6d4ccce24d3df91e"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","f84cf1f01d7f0eb879737bc45b1f6ef3"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","22fa90b36629fabe96014418a2dd2c5d"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","74e98feeeee5d8d57e5c614dcd119d01"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","0a654b345b0b626773f4d476b86ede0f"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","0b05877021cfab4f847c0eae7887167d"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","cebf93747ac3231c3336d2307cff4771"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","9d522ee181cd52bb852753cfb6e97118"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","64ca179f2196a68ea10088d5a0c7f3c6"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","224e99d208f26ff635795014d6652ab0"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","4d54ecece4f1745054d6f58385519f15"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","41145777db94556b23a82ed30512fa99"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","e4584dab2fae7902ac5ad5744cd73733"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","ee31c7861f05bb07032586fbc1d68898"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","1bffa0417d8f63c3069ad2e996eb6aee"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","719ef2c8fde88539d12a5f3ee163c203"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","792e604dbdb8bd40f76d803c0bfeb623"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","e79336eb61000043e7e01fdd376e29f1"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","adc1ccd75752287a7f67f8c34be2e712"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","039ed4cf724e5a065038e41481ff2afc"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","50d1ea6513324007d75c89fbcaee0fab"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","a913822dae9120806d86cdc06c9a8582"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","e1411bcfbf94b7bf39db475e244a3283"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","ad3c679b55e135a071946719ed52cf44"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","856fb4891472c0322f39ed5b9a2460dc"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","69206a255004926e1576eff8c5908b7f"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","6f46add43d84e3e2ff83a9b44143a6ea"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","fc946b825f55ca4bf670ba1fda6b56c5"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","88658f9a20801a972007209abd6f4632"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","173f40cacf33480a3a154c444e84a187"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","a9a08a65112cbf5673783de6e3fe1261"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","39e49c353fccf6068641714e348595b6"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","6fa26726ba047dea749350fadf8151a2"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","0ec9db2bf4062da04b3e108e4ec091e3"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","b17bd47946f26eec211ed9f5da299019"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","e4c5ac14a53b5905f8d46b1c4ebdca49"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","85f4bbd1a286254a97d65911bae3d6fa"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","76b1bcc608abd3cc24fe8954863e2aa9"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","1a2d8db6a3c73e1a1f191fda50bf2224"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","7981efd4d1e1a23e1dd7423132acbf51"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","9e540858e5b3349a6d03d21a113d75b0"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","513aea6ea45f64c161f23e5288f6ae5c"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","9826c9f4350efe76111fd2fb5c1e4ac9"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","e528141d166ba5f8bf22dadff3c20ca3"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","544216afbd5de188242e66d078f93173"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","7d8f9ee5e3edc0b9796e3c63f8b88384"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","9e8012189a47302ef249b2586287ea28"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","9e59fdd96349fca76b47441ab5da2c55"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","19916e8285b052c5bf0d2680d301cd92"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","4cc992bfa59aac0f3afef9c3a9c12436"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","04324063628a0a696efd0c494bccbc39"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","3a4bee8f49e251bfd562aa7294cf74e9"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","e2a1f50d282b918341e37d6c864ebdf1"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","5a72e44b2a0338057095033af49f7960"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","3941a9c317f86e63047c851ac365e660"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","7d36685b99daa9a9dd9e1dc441efee9d"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","8d1c7d1b4215fa9dff0a877b48c67fd8"],["/2023/09/04/中间件/Redis/Redis事务/index.html","9c7acd14beff41f94b69b055911a8caf"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","0119849b79e653db1d3117b29c30f02b"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","e24a059acb04cc8788d18c7f0b253425"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","e335388cf9a5d6ebb42bf7567895af3e"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","40c018334afa8f9bcc38f86354bd4e3e"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","a90b6a7eeb6afe5cb41a2635fd6a0871"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","30126f3810123cc09036736c8b862863"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","41c9c3bb13c000d52e3aa8300b512abf"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","07ec75f92af990853113301dad560563"],["/2023/09/22/Java/NIO/零拷贝/index.html","2b4707c6601cc586caa75611715dd5a9"],["/2023/09/24/系统设计/JWT认证/index.html","a3f1931ade45044ce96995cba63e8b93"],["/2023/09/26/Java/NIO/Reactor模式/index.html","e343733979b16e7e0ba36ae817948b2d"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","97e4742022aa84e02ef1fa445f5bae57"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","9402efe8a177ff59ad90b44f2bc7d1ab"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","d2b42262a3f1f8a346f0d2735c6f058b"],["/2023/10/09/Java/并发编程/共享问题/index.html","4c7b038ab290a87c8a776fb225f40c86"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","0a6a54e7bfccbd626b5353d8da783b9c"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","6179d146fba8700d40b9d1dfb665e406"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","68365740c1c8aafe4f1f79a0ee49dacf"],["/404.html","756016334d6f0dfa4cdbbde74cb3c033"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","004eff553ab6b42db60148955cd259a0"],["/archives/2021/02/index.html","8f72513977c9b383cbf8965848bc65a1"],["/archives/2021/03/index.html","fd02e41a1a03bc3510cc44828219460d"],["/archives/2021/03/page/2/index.html","55ce2e4b3f91dd5ef87ffe7a4927b895"],["/archives/2021/03/page/3/index.html","a90cb0f7fc63a09387749f5ba65d70ed"],["/archives/2021/04/index.html","0fcd20c251533d9b90047e867f2dffc2"],["/archives/2021/04/page/2/index.html","a4ffa91a25c75d82ef8a825be560ae0a"],["/archives/2021/05/index.html","fee0b796673221113b00c34d19fe75f1"],["/archives/2021/index.html","96cfa539ed1f2248f0ad3194e3c01dd5"],["/archives/2021/page/2/index.html","da181b94ee1915f2d2b6263c2f3d7a1c"],["/archives/2021/page/3/index.html","ffb63c5d0136d7fc34e61b0359116a4a"],["/archives/2021/page/4/index.html","20933e32845e79552eac07f86e50e591"],["/archives/2021/page/5/index.html","5b0abd2deaa1f132c31dd9190763164d"],["/archives/2021/page/6/index.html","a7d17d77a3ef819b3b0417c50b40bd61"],["/archives/2021/page/7/index.html","780c7c7f2b06f1a279df0adcc6c83be4"],["/archives/2022/01/index.html","7b946a6c268568149ccbf38ecdc61920"],["/archives/2022/04/index.html","82298a9ac64bd343de836909ef4459cc"],["/archives/2022/08/index.html","3c7fbdef64dc423df21f4bf722b8ae93"],["/archives/2022/09/index.html","c65560d953721f738be4a3fe98363405"],["/archives/2022/09/page/2/index.html","6a70f6e403527efe1235c894281ab6d8"],["/archives/2022/10/index.html","40a534a3c0db81961073975b9fbf1644"],["/archives/2022/11/index.html","25e464de1cb602eb009fd6bc2523b3f3"],["/archives/2022/12/index.html","a41b7aebf33de8043d239a3fb3754c59"],["/archives/2022/index.html","9bae7bfc19b8d355dce05b01abb384c3"],["/archives/2022/page/2/index.html","5f937264c897ab0a86d5a634881e64e3"],["/archives/2022/page/3/index.html","9b7ed1d401477fc60b79e6ccfb29ef37"],["/archives/2022/page/4/index.html","8e9a5bca8f44b455079312bb689c67bb"],["/archives/2022/page/5/index.html","5c5a91a9d60f088d653808b224e8ae85"],["/archives/2023/01/index.html","7788a763b3441b78987667a8e78590fc"],["/archives/2023/02/index.html","67edd58e7789f2aa6c28aa5bfe5f1407"],["/archives/2023/03/index.html","17706e88ad561f074a9763b28029bac6"],["/archives/2023/04/index.html","f5bdee78adad64b1cfee5423eaa5bc76"],["/archives/2023/04/page/2/index.html","07de064abad5a019ce36707b32f12657"],["/archives/2023/05/index.html","e93ebb187a3d4b29a3a75f7a39880a32"],["/archives/2023/06/index.html","d7bcb4ea4249ff176a2d0aa9c6d64f19"],["/archives/2023/06/page/2/index.html","2a4ebea5cf476d79f23ac58ccd338677"],["/archives/2023/07/index.html","198dfc57342aee4ecd5d0f3871d15879"],["/archives/2023/07/page/2/index.html","341ab35fc4abbb2019ca87169bd37d62"],["/archives/2023/08/index.html","9df9572a3e033451a7d52e6d4826b119"],["/archives/2023/08/page/2/index.html","e9673da4aa871a711bcc2ebc150b1adf"],["/archives/2023/09/index.html","6cc443a9d11a40aa2656091db2036f3d"],["/archives/2023/09/page/2/index.html","2b975c59d32fd2751c9c7fdf660211a5"],["/archives/2023/10/index.html","46feb215f29dcb4c08e62d6aac2ce31a"],["/archives/2023/index.html","cd9f4f84b459b756bffaf6b7f7023211"],["/archives/2023/page/10/index.html","287eb41a8b5c926f008e670539d5cdd5"],["/archives/2023/page/2/index.html","ce7e99d1fda67b96fe6520acbfcbe1a5"],["/archives/2023/page/3/index.html","1f491af37fcd04ae51930678ca372a2c"],["/archives/2023/page/4/index.html","346199ad2809cde484193a2b368dbb12"],["/archives/2023/page/5/index.html","1a3e3356a93344d27bf71ef56669a461"],["/archives/2023/page/6/index.html","961ffdc3ea79d9e0eefcd6d0c930d6a4"],["/archives/2023/page/7/index.html","2f79fe85c50c5d77c5afa6a61b07e96e"],["/archives/2023/page/8/index.html","9c72caac20c81a82dbf7d707956edd8d"],["/archives/2023/page/9/index.html","1cc056d71f3a44860c5656049e9a37ad"],["/archives/index.html","ff51cc5329fee24b396a979cd7237559"],["/archives/page/10/index.html","d64f4830fd0f5819fe2b05aed708852e"],["/archives/page/11/index.html","e28174d86a499563fc343e5345584f44"],["/archives/page/12/index.html","8c9c322273f70f8ca3d6e23e7f411691"],["/archives/page/13/index.html","046334bf523e295b30c43fd1eba51aad"],["/archives/page/14/index.html","23b543b265e5594a04d5b418bebbff95"],["/archives/page/15/index.html","d796956d68b3555a12e8c4da4014e571"],["/archives/page/16/index.html","80bc12eab79a4998aa550933214a3e19"],["/archives/page/17/index.html","4a2a5eff061a8cf06b44cd1b713d56b0"],["/archives/page/18/index.html","8cf63fe505c1aa5dbdc4e1f1020b8739"],["/archives/page/19/index.html","ae669702a5a5d25847979e619fef8f7d"],["/archives/page/2/index.html","8d73b826cdc60e49b97bf8a29f9bf22c"],["/archives/page/20/index.html","703156eb589530adbc1792b0ad832785"],["/archives/page/3/index.html","1680c9b82edbf18f7214729ad2d331ae"],["/archives/page/4/index.html","d353c5aa169270ce46fd789c020ac8d0"],["/archives/page/5/index.html","0acee90b62c9fa32beafdcc2cfa35678"],["/archives/page/6/index.html","04aa6271e4d6b31ed9666a3565455bab"],["/archives/page/7/index.html","2974473ff3672ff37c522bb3c1291d8a"],["/archives/page/8/index.html","3738f752cc494c7cd266d580b190aada"],["/archives/page/9/index.html","ad70f839ff3448c0f08f23fe41d80325"],["/categories/Devops/CICD/index.html","e0966c016a9d77bb0fc13b21c8f9d9bf"],["/categories/Devops/Linux/index.html","66ee7da995207bd8025f864bb848403e"],["/categories/Devops/index.html","29ee7b757c2826cf5da499a4a8076bc8"],["/categories/Java/JVM/index.html","5fbb0e5b125965394abf50feaf990b8e"],["/categories/Java/Java基础/index.html","f6dbcdce3e043ee6f96050383602cdbe"],["/categories/Java/NIO/index.html","8e3bea9c1e9f82567871fae6b31c1310"],["/categories/Java/NIO/原生NIO/index.html","d697c824144b1f390123527ce38326fe"],["/categories/Java/NIO/文件操作工具类/index.html","8267e248579f94045bdfb9a795c13a65"],["/categories/Java/index.html","399ad99ed97c3fd1e93f42206e465e5b"],["/categories/Java/page/2/index.html","ccdc104f2f209500ffa812a242c2ed86"],["/categories/Java/并发编程/index.html","ee8b1714ea3ad87760641fc5167493f6"],["/categories/Spring全家桶/Spring-Security/index.html","9e0d98e06b227da94f6d662599d4411a"],["/categories/Spring全家桶/Spring/index.html","4614aaaf96639f6b51f03d0709d2f868"],["/categories/Spring全家桶/SpringBoot/index.html","21711a4c28a4360e64340dc339cf2488"],["/categories/Spring全家桶/SpringCloud/index.html","43fc170124ba10f18a962435f55a620d"],["/categories/Spring全家桶/SpringMVC/index.html","fee49c9b54b576b04596471e0b61167d"],["/categories/Spring全家桶/index.html","4dafc71c12a527edef2253877bf5a4a9"],["/categories/Spring全家桶/page/2/index.html","0fa9f75b9aa192865d9107d744ab7fcf"],["/categories/index.html","5caade8b53a615b2148da6fba0945696"],["/categories/中间件/ElasticSearch/index.html","7da4c30a4c929cbd15e8389b6943c86a"],["/categories/中间件/Netty/index.html","d0d92abf71a06a511b15128ac1b6a84d"],["/categories/中间件/Redis/index.html","3d3ff6973597290c71d3e842dd302238"],["/categories/中间件/Redis/page/2/index.html","d59bbebc48f8d2029ac94d1619317cc1"],["/categories/中间件/Redis/page/3/index.html","c1b913212d5a10af12d126e307c69aa4"],["/categories/中间件/index.html","9543f7c7c5bf8d641599476c1c00fbea"],["/categories/中间件/page/2/index.html","2289382ad1ee6c5684a374ba7f48f618"],["/categories/中间件/page/3/index.html","b4c076ea6b2f6c68eacb89fc89e7eb92"],["/categories/中间件/page/4/index.html","4f4d11e972eaa53486d473ae0ba62d8b"],["/categories/中间件/消息队列/RabbitMQ/index.html","320f8545e1f8d046c85ca011b80490e0"],["/categories/中间件/消息队列/index.html","1265a9eec9051ef36e4b3bd583f904d2"],["/categories/前端/Mock/index.html","1b73eebb0620dd7373b33aa4137a440f"],["/categories/前端/Promise/index.html","4fee0f803c2671e4d768fb079dc38e8a"],["/categories/前端/Vue/index.html","c318df381a90a663f30f7176954e778e"],["/categories/前端/index.html","418d82388983ce0a532fb0afff33e691"],["/categories/前端/jQuery/index.html","eeaf06319800e5ae3127641e0cb640b8"],["/categories/前端/page/2/index.html","8e92ac2f271f20306e1fe5ed363a71ae"],["/categories/前端/原生基础/index.html","17c33b4d1daa76c24924f2113c45d3e0"],["/categories/前端/异步通信/index.html","19bbf8704ad81a0da17585197eb7cf81"],["/categories/工具使用/Git/index.html","ad7b5fe759ce641f6e232b8ca41c814a"],["/categories/工具使用/index.html","5141b8e64832c473e14b570350ab7104"],["/categories/工具使用/markdown/index.html","04019054a3ee345041bd4ceb162417fb"],["/categories/工具的使用/Docker/index.html","2e7025dad645fdb4642816dca1c5a6cf"],["/categories/工具的使用/Nginx/index.html","42106297a2c2367e3add82d42860edfe"],["/categories/工具的使用/Swagger/index.html","0359a5d45e1d382d2b3a01f8255377be"],["/categories/工具的使用/index.html","7fa49ec133c6421ee5bcd6b1b5e768d5"],["/categories/工具的使用/博客搭建/index.html","fa2e8d47afb6fe57e4f9fd99a55e6233"],["/categories/数据库/MongoDB/index.html","b29cc694ac6d98aeed58015e4e5aa673"],["/categories/数据库/MySQL/index.html","fa77ec5a2396339c5eca8b729986ebab"],["/categories/数据库/MySQL/page/2/index.html","7256315a119417554fa8b794d6c2ad26"],["/categories/数据库/MySQL/page/3/index.html","217ede4dc2d23ae333f320f919784138"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","32b994e96ef757c4769914e3f01577e7"],["/categories/数据库/ORM持久层框架/index.html","474caf71aceaaa231c3a4441df3016f5"],["/categories/数据库/index.html","382c314468aa1b4e3aa0cc91e6c932c3"],["/categories/数据库/page/2/index.html","6069e25ef8d633a7b4d76b37ea2e4184"],["/categories/数据库/page/3/index.html","ce24450f1de7c9edbd4037dbe27be135"],["/categories/系统设计/DDD领域模型/index.html","8c2e0a52431ea90266126cda4edb51b1"],["/categories/系统设计/index.html","1c53107b146e1122aa717ddaa50b48f7"],["/categories/系统设计/page/2/index.html","4ac5af0ea32667e05badfbbbbef680d9"],["/categories/系统设计/分布式权限认证/index.html","8ce41b8d0d28e4648ad2e39dbcbf6801"],["/categories/系统设计/分布式系统/index.html","cbeb3e005d9b66545ea6eb3afe7dc112"],["/categories/系统设计/设计模式/index.html","f3dfec7e488bbec5a638ee16da5aefc6"],["/categories/系统设计/设计模式/page/2/index.html","48e9ad3544d8109b04a43c7a1ff7a57c"],["/categories/计算机基础/index.html","ec48ce1ca2a5df9b5a18fc0dc785c7e0"],["/categories/计算机基础/page/2/index.html","ac7d364f7642464096bca4ae3c99c4f6"],["/categories/计算机基础/page/3/index.html","a82c4c5a3a52e16dbfdfc091737b2bb3"],["/categories/计算机基础/page/4/index.html","adf3c9d29a53fab9f7418fca00990fcb"],["/categories/计算机基础/page/5/index.html","80a0c2ab89a384dedd7b31b49e9081af"],["/categories/计算机基础/page/6/index.html","4044f03d4de85da44539df76fda0e076"],["/categories/计算机基础/操作系统/index.html","316f506fd261e562469a564e8f14855f"],["/categories/计算机基础/数据结构与算法/index.html","149c3411999796faf3c59ca2fc450ff0"],["/categories/计算机基础/数据结构与算法/page/2/index.html","dc97b81386726b9ebc2b70912d758042"],["/categories/计算机基础/数据结构与算法/page/3/index.html","0bf255e73806b9849442d4ca99d5303f"],["/categories/计算机基础/数据结构与算法/page/4/index.html","43525e545071729f0b9d2b42dae19a3b"],["/categories/计算机基础/数据结构与算法/page/5/index.html","785b08e8cf0fd1cec66c9889930943dc"],["/categories/计算机基础/计算机网络/index.html","b0082069acf26168c7caaedecca40d76"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","4cb9f1e12c1849b88c45729c634e4ccf"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","176c9a47cc2fded9959ddb158b388c57"],["/messageboard/index.html","df2675d8cf4882e08408b3158839fb45"],["/page/10/index.html","6d62ff8ecb8fe0854c632211d05e3569"],["/page/11/index.html","0e364ff9efb5dfac245d07cfa06416b6"],["/page/12/index.html","11c4ca02fe8ef0d4d87cda3b90d00822"],["/page/13/index.html","12c708156a6f9af557463c107cebb448"],["/page/14/index.html","f0b16af63c3658214f680404ae3188fe"],["/page/15/index.html","b0dac10af5190fb2bddb545378604562"],["/page/16/index.html","fab64bc3f4c3299e608694f9433306dc"],["/page/17/index.html","2eda1921a4ec3e70f24fe656cfaf9b84"],["/page/18/index.html","c7142fe50827caa351f1703d589fa380"],["/page/19/index.html","de19e05f3dc838e5b43458f04c55e046"],["/page/2/index.html","c12c5b6ac4f01ef9d9fe75d205d38bb0"],["/page/20/index.html","378ae07e4aeeb712a95ca29edede5598"],["/page/3/index.html","933d954268cc76a946a0832d9aeec27d"],["/page/4/index.html","78ac29058b9eb88cc1d62bd2c8030a5e"],["/page/5/index.html","3b1738d3f84e06fcf7789b81d39ff245"],["/page/6/index.html","69b37195b8873bd077fe6a60061e5cb5"],["/page/7/index.html","2b6ee3d16f384cfde4c5faec969ea216"],["/page/8/index.html","398febaf9715ff8c925ce9e1e71b5bbe"],["/page/9/index.html","d3dac70c65f05db0426b902743636951"],["/sw-register.js","1bff2c9184fee577b380256ab5d53579"],["/tags/Ajax/index.html","dd30add83e1f561f594ae12e51c4568a"],["/tags/Axios/index.html","c47d332bcf4088e0c0899fa6ea52dee3"],["/tags/CICD/index.html","3708d6e8ce37fe349ebfdc3dcf29e9d6"],["/tags/DDD领域模型/index.html","42c38c4e6cb3dce339feaf671e156256"],["/tags/Docker/index.html","994c4f7fd771b7c7cd08f7ad65114984"],["/tags/ELK/index.html","ea27bf81ac44d137ee7fec1213398427"],["/tags/ElasticSearch/index.html","538deb8623aa5a43f38f377792aed71e"],["/tags/Git/index.html","8738d6cd6b2b0ac427d8705a279c7dac"],["/tags/H5/index.html","2dc2a8a5565c7b5c33bef42546c25594"],["/tags/JVM/index.html","023ccdad2b585fa801b806cbff8535ed"],["/tags/JVM内存模型/index.html","26b3e05798d0ed60af0d59912e9db340"],["/tags/JVM执行引擎/index.html","2f3879e5205825e1f25b090d10660484"],["/tags/JavaScript/index.html","e73b8b0e821ccf4f734aa522c5e756e6"],["/tags/Java内存模型/index.html","165667e5a40bb30639e9800946a10a8b"],["/tags/Java进程线程/index.html","86c9a0c6d4cedaeba1012cc1dc352ab3"],["/tags/Kibana/index.html","9afc3cf3c6f3d6297991bfa3a7922df6"],["/tags/LeetCode/index.html","a569bb16786dd9fd96a318521198addc"],["/tags/LeetCode/page/2/index.html","34bed9c25159bb1e4479744983015dc9"],["/tags/LeetCode/page/3/index.html","4d09d43c69c10c750b7dcef962886ef6"],["/tags/Linux/index.html","8dd3af69f2605e5e09f963307a0c25f1"],["/tags/Logstash/index.html","8ef6bbd0c64c254cb878ae8e84a6c478"],["/tags/Mock/index.html","d75f8b87e5598032dac18b6eecc2b5e5"],["/tags/MongoDB/index.html","cda3dcf0fc06b4c82f632c3caee141b6"],["/tags/MySQL-事务/index.html","d560f3a84d10ee1cd40d334296e4b566"],["/tags/MySQL-数据类型/index.html","b720e5d35a12487bbca02623a1bce102"],["/tags/MySQL-日志/index.html","6af255c2410839949aebbbc2c08534c9"],["/tags/MySQL-索引/index.html","c0f012a28b85318cc7c690b07659c533"],["/tags/MySQL-锁/index.html","e79b8e2848455ff31c3a68378985517f"],["/tags/MySQL/index.html","631b8ba65c8749c2f9a47a6dee474ee7"],["/tags/MySQL/page/2/index.html","3433f192b30b996042fbecf21f5d9f01"],["/tags/Mybatis/index.html","b01b3b1195bd97cf8784cad24dd7df9f"],["/tags/MybatisPlus/index.html","ec05f1edde606f58a3fb3a744c268f4c"],["/tags/NIO/index.html","f93fd64a041e5a8e9e8624bf1a8e9a3b"],["/tags/Netty/index.html","970696a7643356bf25ef707d2ddee2c8"],["/tags/Nginx/index.html","6edbe4b1ee57eecf035a9ebbb9ca1585"],["/tags/Promise/index.html","4318eac2b57f156446fb428176689162"],["/tags/RabbitMQ/index.html","ea760bae4f42812191d41725064c7a1a"],["/tags/Redis/index.html","1664037fd854195e05234b11889ff8eb"],["/tags/Redis/page/2/index.html","35eda134abe34946d71ed97ce9ee60fb"],["/tags/Redis/page/3/index.html","ffebe06bf942f0ca3ebe4c822a711a5a"],["/tags/SSM/index.html","6d37e22ce596307e2dd75c4e94be28d1"],["/tags/Spring-Security/index.html","601124b92598e0ffdb8b72ccdc8bf019"],["/tags/Spring/index.html","4e8bf22a385c164df3737f763ba5418d"],["/tags/SpringBoot/index.html","04abcf2b20322df2fec0d3dd9b0d413e"],["/tags/SpringCloud/index.html","57ceb6babdcabd744dd24c450c44454b"],["/tags/SpringMVC/index.html","984c1ebe0cfc4aabef642750987085c4"],["/tags/Swagger/index.html","c289955cff6b0d5c3404164158665f23"],["/tags/hexo/index.html","922d469640dc4777a8678db7c1e600e3"],["/tags/index.html","532f1e07b6ca71429326c327211b8177"],["/tags/jQuery/index.html","35dd0d34422de911b936f6f72ac8311e"],["/tags/java/index.html","adc105d794dbd439817484d48d312623"],["/tags/markdown/index.html","041cbd23ff98f7e17d070a090350ed80"],["/tags/noSQL/index.html","4d6823072367522c36d6dbc95d579115"],["/tags/typora/index.html","4e4b29c3b31e4f5366094daf679477ec"],["/tags/vue/index.html","2bbf7a0b6491aab99ce1ace40e7b6605"],["/tags/享元模式/index.html","d0eaa1bb96a10ac93331e7fbed8fc7dc"],["/tags/代理模式/index.html","708868ef169f4672c83a688842867cc8"],["/tags/内存管理/index.html","50ddd84a5abee35988f454a7cfbb885b"],["/tags/分布式/index.html","11100eab97774322409b36db7df2a1ad"],["/tags/分布式系统/index.html","b01e26ea4979bf10324ddb0dc03f59ec"],["/tags/前端/index.html","a78f6fb979417afe0f5d6b808ca2ed9f"],["/tags/前端/page/2/index.html","e813378444c16919452bdc8e241647b3"],["/tags/博客/index.html","211ec9a053facfdbbab1c6405baf210d"],["/tags/后端/index.html","8c34ef3db48a271e982ce4323460a378"],["/tags/外观模式/index.html","aefdcf1ba6915675a19c218422b2fdf9"],["/tags/多线程设计模式/index.html","c21be33327c4d16a21ff61cfd1a0f655"],["/tags/容器技术/index.html","3ad8de3822546c9b188ae7cba54ad742"],["/tags/工厂方法/index.html","03171c4d33fd9d816a585b04060cf67f"],["/tags/微服务/index.html","5b2448c6a579ff5b8e65dc8d36a77db6"],["/tags/抽象工厂/index.html","92c3b839441a4f9afc96db70c13a861f"],["/tags/持续集成持续部署/index.html","8e4aaf887b6f63f2b63a18ce9697d7fd"],["/tags/搜索引擎/index.html","3d49b2eb20a7056d4b62a47933364011"],["/tags/操作系统/index.html","ae8de2c88051f4aa8b8306cbd3187f06"],["/tags/数据库/index.html","c2544999c272d5d5a7409cebe86ee83f"],["/tags/数据库/page/2/index.html","dc4d6608dbff403347d7c3ac89f74434"],["/tags/数据库/page/3/index.html","1340b35a30056eb874dbb0c3d837b5cd"],["/tags/数据结构与算法/index.html","ff362ed76e9ce734096e42a05207a13d"],["/tags/数据结构与算法/page/2/index.html","a9603360b6593da07372165b45ca0f38"],["/tags/文件操作/index.html","33c5bb6359a2d5b3ffa2ada4db4e6ab4"],["/tags/日志/index.html","384db92c83e2bcec01c911342ed566c6"],["/tags/服务器/index.html","5cdd1d913e1f2ab30633bf8b2d9c7d1c"],["/tags/权限认证/index.html","9c563705fc9500c6c5e815c9979a9859"],["/tags/桥接模式/index.html","1f703450ef1fa5f281902ba60e0d32bd"],["/tags/模板方法模式/index.html","65549080e5a81958a1e81ad4c175e083"],["/tags/死锁/index.html","4b98fd9a2697e02ee7bf2ca3438d03b8"],["/tags/消息队列/index.html","c24a008605caa6f4ddb3a68c20986d40"],["/tags/版本控制/index.html","4eefe6488fabd9403693ab0178ad8622"],["/tags/策略模式/index.html","824e85d8ac1c5a4d2f88da2927d9ddf7"],["/tags/简单工厂/index.html","743b33a83ce637b1307178a7c5dbd9c7"],["/tags/算法/index.html","58239d11f73b93c6006320e28eebca32"],["/tags/线程活跃性问题/index.html","3307d20663d721a5a09c8649a60c5fb6"],["/tags/组件化/index.html","8be5318b6a0a956fb457edc3cb31f22e"],["/tags/缓存/index.html","0e329dd74d11de992a772422f999be99"],["/tags/缓存/page/2/index.html","abb3ba2517c4ed18ea56cdc8f81ebf9f"],["/tags/缓存/page/3/index.html","75646c211f3d514bede9d2380c934bf9"],["/tags/观察者模式/index.html","4d16c76b71cc0758b23f99f172563f38"],["/tags/计算机网络/index.html","c2fa2d3d53c6417ca2be86309626f9a6"],["/tags/设计模式/index.html","bc9c13abcda03b45040da9e2dc6c16de"],["/tags/设计模式/page/2/index.html","b67a73030480ae3b87827b518f9aa542"],["/tags/资源共享问题/index.html","2d2fa00f50a0ad7041eb490eaf40a5cd"],["/tags/进程管理/index.html","14c14eaac957c5cdbe2463106b72f09e"],["/tags/适配器模式/index.html","a46bb885f3b3c5f1560c2471060461f4"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
