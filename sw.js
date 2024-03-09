/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","45ea8afd16297d6537fdfda248413248"],["/2021/02/22/工具的使用/博客的搭建/index.html","d05b17874feb4f6c9e3d1dc3bdb37ee2"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","9ec48ce85ffadf64c15d27c9941709a1"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","a89b860473f296173f9101e9bf315bf4"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","c43b9befe25e3b16346b747e3310e128"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","721e35ba713d39cc01e8b9861a41a582"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","c47052aa86251b44a49267dc00a7ca48"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","e05306643071c7e07b517c7368042c5e"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","051176a28112df1779f36147d5f3f4ac"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","a8c5d399a689d02c85f6fb00f6117625"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","d4db0211b4b84fed507b59361c5a7b72"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","48e479bdbcdb59829dac673a96b77c71"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","da9cd4b6f1f79996b60304824c3f15c7"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","0decaf263c1702d2dae3b0a98e53eb00"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","c2cdeacd443ae08d500b984d88750092"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","d1ce17df5a98ade8e1b0b1d27ecfaa44"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","aacadf2e5ae8d5c98a4830fe7bee9827"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","9ca72d009f3b939111db91b01380e1db"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","745c99701d0698506217804caf5d870b"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","857ec8bd71bd030b624d1626d3032118"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","a070b5ff79b815f7869ab4b6cf11b717"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","535712b36a695b32674153ff1b0a56a7"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","e2f12482d66d2dc133c5ff9718604da1"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","626eec215285c7f320906d80fc52c1ad"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","e483d4e8e8694b289d36ba9f5fa99072"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","4024901cb364a779394ca3342f27455d"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","6bb028ad96a1a8111f7a287b579f1208"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","8614a5aa8db0c0e384ae454bb522f1f9"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","b13f2e9bdf0cb78c9f43e1c1a87f84e9"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","11b8569f4dfd704478b99c78a2f159eb"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","e12ef6b074ad2191f8f4220a6ac498ff"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","23ee6d72fc556e677d3415187af118a3"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","0ee5a6912a18f46278eb65029ebc7941"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","f94f36733fa06edd3cc842b3204c71a5"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","c16739a2ab2638102f2ee6556459c050"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","2bd53afc2f9c83b8cf04a5d395b719ea"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","07dafdd62d751ceb6d2bfa77566be0e1"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","a03db12ddd6784b6d9fd0152bb31bd4f"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","9a9db3ea61fb0bfdc84b4f30939e9252"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","110a2336df842c3d18a0cc864c49a6f8"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","8fe2bc84c3ea76184a9a91f728eb687f"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","6a68c8056c6501ad9b8fe94667839cd5"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","95b6912c000afced13f0ce4e063d5c79"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","ba4804faa76699c2d3ac5c163d90674e"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","b2d0bcbd1271adcedd50a49d10138a25"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","a2d49def7af2c28eb3ce27da86ec904e"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","ad39368c673effb108260728eb0a59dd"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","121d6e62142a7bec565b394294a0b71f"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","8deeb3d2af7a8471a904baa892e8fb34"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","bd67355e00d578ca6e35dc2e43f4a29a"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","5e78e3313695298a4c23692b3b2fb622"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","e68fa3ec1a7803d4431dc2afcdf228cf"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","c9bbdece7da19db491bca7133b333ab9"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","fae575bd9e4356171d9dcdd4f3c41e6e"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","2758349847068d48229d2f9027bb1b15"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","a1b0bfbebe60c5581080936ec9dfe383"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","5b2d69fa8c3c4c2c9f8c8e08194a8048"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","8c7d9116c18e0b75f170e2c24ad06dd4"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","107915dfd93c65d5c2c869e14ea8f854"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","cd920be201f246e49ba04e8fe9bf1edc"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","fe6af193fd6ab559c0b215b65e2de92d"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","cb371c4f94934dcd76f37e11c8b333e6"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","f93b8e0f910f5d046069af63960c8beb"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","a2576180fb68881d416da7839ff19058"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","5e8a12cb9692160c40c07acb075569e7"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","35e1046cdc8cc528ae286b3ecc4b4c87"],["/2022/08/17/前端/jQuery/index.html","6ad9c47316b361624d542a47bdc953da"],["/2022/08/19/前端/JavaScript/index.html","a5f804c156fc9386bf9654137cda7509"],["/2022/08/22/前端/Ajax/index.html","6dc360fe534943d9ae5f455d19e2cdf1"],["/2022/08/23/前端/Promise/index.html","52487679d158d32497f48bfe9b9cbde7"],["/2022/08/24/前端/Axios/index.html","4fe6dd2c10a669a72ec1b943883d58eb"],["/2022/08/25/前端/H5本地存储/index.html","82e94b0dd7589408a4239652d8101c2c"],["/2022/08/26/前端/mock/index.html","6ea0a353bc7b2217c96996808a789aa7"],["/2022/08/31/前端/vue/VueJs/index.html","bbec397c00e3a39121e9363495794339"],["/2022/09/01/前端/vue/vue组件化/index.html","b6d696b8957c949a67eec29fb0bec1a3"],["/2022/09/04/前端/vue/VueCLI/index.html","cde8401f90335a7b482f23f36019c82c"],["/2022/09/07/前端/vue/vue实现动画/index.html","f921a5ae008478005bb91181499de1c0"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","dd9014438585f4472cf8ffeebafedfc5"],["/2022/09/10/前端/vue/Vue异步请求/index.html","a381f25f32101e06a235918df683dd32"],["/2022/09/11/前端/vue/vue-Router/index.html","bd39848a8b29b0bbc512d1e481461921"],["/2022/09/13/前端/vue/Vuex/index.html","557c20581ca44b082a458952fc79cd4c"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","237cfc9cf347f377face64c45752b562"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","afc734ae846ec575873d60671a36dd45"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","76b84ebc90240b995318707333e88d02"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","fb9a4239f373a3b290c86ea4e4ae4ef9"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","c625a169458765aa1d3efc557a1a3e9a"],["/2022/09/28/DevOps/Linux/Linux/index.html","a6a01736ac447862e43c3370fa974ae5"],["/2022/10/02/中间件/Redis/redis基础/index.html","e59b2bcb0281e8e7bfa0e66cb2aa6668"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","ae57735d091e94eab2d2933b7d54187a"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","79b358d7286d4027961b968aa902a339"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","f9a2b77f4638a26f108a998cd17f2496"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","2c28e3b4a143746c53628b0269a0e863"],["/2022/10/17/中间件/Redis/Redis集群/index.html","7a83ed2034def0f1a926f727151f2c59"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","4c40ede906b2845103d5040f4d9b4d52"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","69bcfb8fa492de9b3cc772c941cf4374"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","6d9f8f5c346ea4e4fb5ed194fe6a4165"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","76a206e6dad53fc8f1cf1d9e1f134529"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","a927c8c686de20c83517fa23b3fa0930"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","12112dfb5741194b41e0310d527f319d"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","b769f4ba217fb09d4a5c038c15418afb"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","d476cbe3db43c5ff1be72b16fbec8976"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","2a577035b1aa076b8a6714c1b64e9fdd"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","6a3526af1a58290ac1752d71723395ca"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","3a5bb1cbb65d070dad7c40107ce669a3"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","947b9987dea686e0ad5a0e60c2430b30"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","1f5da754e9154a02d1c6d6bd4ee23a60"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","b7b978e38f73783824f0a986f04b0f91"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","7a069fa61b5aa20e45e3e517ddeda8a4"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","40dc4f1abd6370202467825da84d5cbe"],["/2023/03/10/DevOps/CICD/CICD/index.html","fec3d1151bea94ff170c6c5a26ffb3bb"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","c5a7f92ab236fdf7cfffec9846b9c5ec"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","de5cfeb114adf1dfc56ce16e73e2fba7"],["/2023/03/13/Java/NIO/NIO/index.html","8c928d098332a96951e2cfa76033c812"],["/2023/03/14/中间件/Netty/Netty/index.html","6632ed0b0aa692568767a82c52f7bedd"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","840206e6d267143a62bc384b40735fc8"],["/2023/03/17/系统设计/分布式系统认证/index.html","7a65a7e4bcf541faab79ed3cfe6d2267"],["/2023/03/19/Java/JVM/JVM概述/index.html","0b022b0b849c3f003a5a863dc2acb951"],["/2023/03/23/Java/JVM/类的加载过程/index.html","321796f7dd04ca27c0299e6e89ad3960"],["/2023/03/28/Java/JVM/对象的实例化/index.html","604d7718ecf9d97fa8a74df5eb96c654"],["/2023/04/01/Java/JVM/运行时数据区/index.html","ad056283e054dc208f93131957f333d5"],["/2023/04/04/Java/JVM/执行引擎/index.html","7c6c445dfbdc1516f3a8b65981389d20"],["/2023/04/06/Java/JVM/对象引用/index.html","95c46496965961eadb0e62c34cf59916"],["/2023/04/09/Java/JVM/垃圾回收/index.html","17388a6d054dcf6334282c4a95da34a8"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","a3d8136b8d757f59940ebf0d8aa2d605"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","4b11679c6b73021ce174a069b8e3488f"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","563374d9c626a9b8435d6c19b91cb21f"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","c4064af984067f7fdbf4df11a38e4090"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","5c688d2017d579907f212ebe195d8565"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","38565bcd54a3504a1d3790b280e70905"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","e9c97d0535013221ea7a10bb7ba16558"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","fd9c898d5a829c7100304b0a2491f789"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","fa7b4ae079f23f6d7c3b9b3a9be5acc9"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","32b6f4f1d2b5c7b57d76e1a9d9cb68ff"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","5a9650f2ab67f4fb0309cc9c610d9586"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","70f2479f5cce0f550c2e66fbe5fcbfa5"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","3eeca3467303e4ee33566a421a034b0f"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","a6c2d1a9cef1ae5b954d0b6cfe3257be"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","2f2e72a12a6b1bd674c543d17a7bdbb9"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","ae89ea77b7d00477638c2244f58d80dc"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","8ecf02f929b8a30df6a08ab8fa570747"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","618a95a6ea69cacd2d83994c4ff8f6fd"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","ad73686845bfbe962d80a73bdd08ecc4"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","92944ae2caae512fb553421a5395bcb4"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","9a7a31020655094a57d7af34640f1847"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","6529bd62829a4cccb6b05c8c7028e127"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","73b5df40720ed595719800e4af4fb31b"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","ba2157730ca459105198baad5a94ec14"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","0c74e1e5a77f70a6995ef31391cc2015"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","f83847691e942edf6f95f6c8cff0cb34"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","1b1d4082d3b229098bdd9c4921df8f61"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","a6a802a9d6a5e066b819a4aea9072d1b"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","0607a8b113c66784a90aa55805b3f187"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","e559bc02c08b553fe901240b8c28748d"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","2f13d3b216b724354c066bee82847759"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","cc80f1e1fd1ebfbe72bbdd7a6f6f2b3b"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","44d2fadf5734e87e98a20aedef5edaa7"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","fcf8e2511c6ea410fca45d1073944955"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","77cba1cf7782ed0879631726016e40ed"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","5c65aeeb0facdb3fc75916d821fb9668"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","9ba01946c293a2df411455fc9f511df7"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","99878bae3562449b83c6b41add63b5ea"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","b310ad4a7bfd6b1332c60387c8e698d8"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","e74779194a1bab0b656dcf224dcded52"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","66f15323b089437b5234b7d8fe192544"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","483df9e8cd8003740a58c277f2dc4032"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","5736cf31ba8d6d7c60f110baa1b8b270"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","5237ce8075a139cb0a6816560f3362b8"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","1add9d6d0eb672e324922404b87d7bca"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","3022e0d4725ddf0141f740165420bff7"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","f997f1dd9f896108ff6e872db7e4bf0c"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","eec06353b0f2eec34dc2a099c5ca5e0f"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","5db23814e1510f72e63be03db4313ad3"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","c9fb8ed0ae0c3c6f5b765b01541ca5ef"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","44815505e86ba07a9028e27c61210708"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","d50bd44d7a7411f156533cc05e183b9e"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","ac96e6c3f87e5f424079b3cdc0285445"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","61d232b527fa881a14b04d5abf6f07f1"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","0970234bc6fd9a659822306c7a4d3090"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","5ca51ca0ed6be04b8601217d8458c2d6"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","6a043efad68014e02beadd12de274d66"],["/2023/09/04/中间件/Redis/Redis事务/index.html","4a6fa4df61a84b2ef4ca086b05213237"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","506a0d56567b57280fe1f273807c5a03"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","01c4ebb7ead4b95cff1c1e3a40da4430"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","7df2a394c086b5df14565207ed7f9ba3"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","769d2bb7189c0e96e7fb8a68f0f5293c"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","cb783fe9859272f08e58c2df3be4b985"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","a88b1ef4e8c912c1f1d861f727f3ffab"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","feeaf421d6d793d6a510047650a84a90"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","6c5396191d5d385864b73d6d9f2bb2d1"],["/2023/09/22/Java/NIO/零拷贝/index.html","688a1f37bd345747c7b13270e50d1c2d"],["/2023/09/24/系统设计/JWT认证/index.html","aab388a16e24abc89c4d9f02fdb554dc"],["/2023/09/26/Java/NIO/Reactor模式/index.html","ec93d87ace12e88f6ef15dd39e2434c4"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","052894b325c3caadeca24b17eb3bbe3e"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","32e95b0cf5d509a97507d2a3e9e132bc"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","1c2259a4838b5f01742d7f6007dc3dc5"],["/2023/10/09/Java/并发编程/共享问题/index.html","302b52658cfa3806c8ad60540ff7e7a2"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","92b24239e8032051807890222c5a1e3f"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","e34bf5d2a321b66a538e335893382678"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","84dec64b1af3795528a693123be6bb5e"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","17e4fb10db645b2b270f9d391cda1524"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","d53bfab0d65600902bf44327cf26dc9b"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","a915940bb7fb211fe7b1a058d7e5148d"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","65300858dd7b03c6f69c46571380b4c6"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","800253aaae2807d2b1e27581a156dacd"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","26bdafbe5e9f4be5d820e547ee881169"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","a4ac4eb042e9c5de23d2ff475cef0f3d"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","c8059d4b4248af00fa0e2821f9d95df1"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","e2ae6469fce596b51b8fd0a498d6f71f"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","28f2fc63ba62a405f237dfca2691f613"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","620675de9053d98f08da589b0f1925df"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","57d8aa97f5b00724f7869f220c377b52"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","9d1bd2ebbf2f6b8f5445a4e145a8c629"],["/2023/12/05/系统设计/开源协议/index.html","37ea161c21aeb75688f24b423b9e6062"],["/2023/12/09/MockMvc/index.html","dd01b63bd7d94adc0bb79ba7840f15dc"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","6fc48e051199cbb45a4eb241e6faf44b"],["/2023/12/19/MySQL读写分离/index.html","9f3bec89934d977626d826b770cd2c72"],["/2023/12/22/MySQL分库分表/index.html","3e9338451cd843e6999afca776361a50"],["/2023/12/27/利用NoSQL优化数据库/index.html","c57a99f4b89cd21ce6c23ce789b7f1fe"],["/2024/01/06/缓存概述/index.html","af7ce7ab644843d49abf36aea42cd5fd"],["/2024/01/11/缓存的读写策略/index.html","79845504e72ecf047885117076be6380"],["/2024/01/14/CDN静态资源加速/index.html","21e959e0799fc22862d11976982c10e0"],["/2024/01/18/消息队列延迟问题/index.html","665cc89fbbc1c96125aea05025fbdca0"],["/2024/01/22/高并发系统分布式服务方案/index.html","9987a913f8da2ac9ca4affd028c02aaf"],["/2024/01/26/dubbo/index.html","15c87d5c2e55273cb735b558d0227f00"],["/2024/01/30/微服务基础/index.html","f2f25d6d2d383459a4eda4453b56bec8"],["/2024/02/02/监控微服务调用/index.html","3a5984379160a76130d4c57e178b5666"],["/2024/02/13/微服务治理的手段/index.html","c7c1d81464e6722b894b2d821a4dcd0c"],["/2024/02/18/微服务治理的手段-二/index.html","085be457dc6d94f493e2fb9e8382b025"],["/2024/02/22/计算机基础/操作系统/epoll、poll-和-select/index.html","7d45ebc17ca92864b912200dd72fe212"],["/2024/02/26/Spring事务/index.html","5b154b59a8b6bf4794fe0b093af0d4e7"],["/2024/03/01/HTTP接口安全策略/index.html","3d522608bc8614115cab9e284787d750"],["/2024/03/05/HTTP优化策略/index.html","2e02268473d54c8a9499819b9d23c9c5"],["/2024/03/09/计算机基础/计算机网络/基本网络攻击与防御/index.html","e1401e34d7b74e04d5225625846c0c2e"],["/404.html","e7db5b57fcfffe1946aa77402916cf4b"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","3bab7044a025b69cd8780265f476578e"],["/archives/2021/02/index.html","6ca42ee6fed3e949560b8ed551f286d9"],["/archives/2021/03/index.html","971bf92299308487e3d7fb713efe6701"],["/archives/2021/03/page/2/index.html","52faa19948927f7a889dc1aba809e1fd"],["/archives/2021/03/page/3/index.html","800b6e4bcc94a67617d28f7cc1b8a56c"],["/archives/2021/04/index.html","92450603aa9d9a3eddbb57ffb9e304d6"],["/archives/2021/04/page/2/index.html","e7bc9442d94443b4d479b496e16cffcf"],["/archives/2021/05/index.html","cc4d0f4e92c206a81012198de365729e"],["/archives/2021/index.html","6b715daa9a993d6192b3b0e56f383be6"],["/archives/2021/page/2/index.html","e54584ec30b8f2ea5959935090d69477"],["/archives/2021/page/3/index.html","3f46b18ec748535c9c1039ecdcc0f0c2"],["/archives/2021/page/4/index.html","aca7245cad2350bb4348253d0a1a77fb"],["/archives/2021/page/5/index.html","49826fba8b19fe577550478cad115e57"],["/archives/2021/page/6/index.html","b4ec5ec338f7adef7f62f64797559062"],["/archives/2021/page/7/index.html","76ebce147cf82145caaf116fc9a6d260"],["/archives/2022/01/index.html","e9011e659200f66031e235d5c87eb2be"],["/archives/2022/04/index.html","e5d7beedf34b8d41a5a429774f3514a0"],["/archives/2022/08/index.html","de1af2abccdbe3d58ea47ca34162e1cb"],["/archives/2022/09/index.html","b3ce8df1b632b1031494a4a9fd547e3c"],["/archives/2022/09/page/2/index.html","434b51e25ea7f4912fd26a5fc62a332f"],["/archives/2022/10/index.html","59c57527f99012f781b14e0495ea4e39"],["/archives/2022/11/index.html","9e1d2033595abed21624cbbc28a3db0b"],["/archives/2022/12/index.html","c3b64ca1674bd2284b3bd41f4c2dced3"],["/archives/2022/index.html","6a4d86bf05692cc577b6f1e16e72b739"],["/archives/2022/page/2/index.html","691f14b11a72b3d2b1215f92e04288f7"],["/archives/2022/page/3/index.html","8a84db1b380d9a5d2e176bf118a3243f"],["/archives/2022/page/4/index.html","a1a463119e6dc443233b130e24195b19"],["/archives/2022/page/5/index.html","e508fcfa04fe4f78288a022e9b3baa5f"],["/archives/2023/01/index.html","e8c14dfd03573a15a4fb98a80ab7d0aa"],["/archives/2023/02/index.html","5dce60a739b84134d0409fb4ab751f11"],["/archives/2023/03/index.html","2d680883e6bf483613d39a5b8382ad02"],["/archives/2023/04/index.html","95f138fe1aa3f97fce61f00500ecdd8b"],["/archives/2023/04/page/2/index.html","da17fc16bce7d6f9e4f7f465a39288c0"],["/archives/2023/05/index.html","68b2f05d1e173c69f0df7c94d0ff74ef"],["/archives/2023/06/index.html","924bd1d96fcc9deb479ecb765ab68ed5"],["/archives/2023/06/page/2/index.html","5c0bfa47a50b54c1980a00c0855d5050"],["/archives/2023/07/index.html","09cf58e75865df68f881ae1f082be57a"],["/archives/2023/07/page/2/index.html","3a6b0ff267eceff46e0ceabddce9b054"],["/archives/2023/08/index.html","aa39e024973b38eb44efc44d14b8959f"],["/archives/2023/08/page/2/index.html","004f782723f5fbdc539be89797fb0e27"],["/archives/2023/09/index.html","5c8d538e7322d5a6cf242fe202095993"],["/archives/2023/09/page/2/index.html","b7f386c9a73afdc6dd82ac90b5876d3d"],["/archives/2023/10/index.html","a8909c0412be4df98994cae663cae3eb"],["/archives/2023/11/index.html","e052b5477bde2506ef47f72617937e24"],["/archives/2023/12/index.html","b2b0476ecd370fc31d6ce112e5b7123e"],["/archives/2023/index.html","ee80250eeb273e3ebf6d5b31e5c64d34"],["/archives/2023/page/10/index.html","f77dd10e5a60680465183213d90fd9f4"],["/archives/2023/page/11/index.html","aa869f41a272b3e8b4a90154e57e2ca0"],["/archives/2023/page/12/index.html","b38cb03456e86d6f0223033856448348"],["/archives/2023/page/2/index.html","870981752f2c44e3abe4287224817fd6"],["/archives/2023/page/3/index.html","506559cce98b8a71d4c18b051c22e47b"],["/archives/2023/page/4/index.html","f02b60b8a3f8e8d4a989f2866076605c"],["/archives/2023/page/5/index.html","2c83098714a90012bfcf4f568b329a38"],["/archives/2023/page/6/index.html","1972fef30907d01ddca06c0d8e4f137d"],["/archives/2023/page/7/index.html","3de73e9321b81a5d67f7902d7a30d7a5"],["/archives/2023/page/8/index.html","3a7bb3b6ba7954633dd9dc44ac0587a2"],["/archives/2023/page/9/index.html","e1288a79f366b80b92e4e3bc3da2e49a"],["/archives/2024/01/index.html","116edd3e6cc203ae5d64da6c15b6c724"],["/archives/2024/02/index.html","225e536c6fea1741edbd6c2b17c6a450"],["/archives/2024/03/index.html","eb578fc65ea6d036dec6b0625b38a515"],["/archives/2024/index.html","15b6c6fd67b016fa780e32a462032a28"],["/archives/2024/page/2/index.html","566858af60ed2c70c0bc6547ca64468c"],["/archives/index.html","53885c6eb37c04c98f964a9a7303a352"],["/archives/page/10/index.html","7bbe4bc383df74d2b908df1dc9498ee7"],["/archives/page/11/index.html","e76fa187d3c50bf2fa91d10551452bd0"],["/archives/page/12/index.html","e63e3aef0259eb72d9d1834f41d30844"],["/archives/page/13/index.html","0dda176a74d84a1dd98c29ed7e415d06"],["/archives/page/14/index.html","7393ca22eb4aa475480ef35b2e251da4"],["/archives/page/15/index.html","272090db4c550b55cd42df0b6adc9257"],["/archives/page/16/index.html","b1aaaf800742d834aa18aa7756b45014"],["/archives/page/17/index.html","d36772848a211447f0bdefb48676d4e4"],["/archives/page/18/index.html","def6dc45983630b6e00bca24d110cb15"],["/archives/page/19/index.html","1ff44038ef298fc1bfd80355a9f10368"],["/archives/page/2/index.html","45c3e081e195f61d3758304c2ffa5db9"],["/archives/page/20/index.html","b58203a2b0f74ae1d5b9f7c8179b3b8e"],["/archives/page/21/index.html","5058e208385dc364597bebe359925be0"],["/archives/page/22/index.html","f5213d6c883c6267200c79b907e8d05d"],["/archives/page/23/index.html","a3d1d319c10025101c9a9f4195948721"],["/archives/page/24/index.html","353ced290bafec3dc3ad40197924b9cd"],["/archives/page/3/index.html","296f0e2896bb7c81ac98d5fe1769b74c"],["/archives/page/4/index.html","d7805da39a73a38da9a618708b4a379e"],["/archives/page/5/index.html","01abcfd4ad727269bdb97deb390a20c2"],["/archives/page/6/index.html","7ea1dbe9b3bf64830d506d0952f0e03c"],["/archives/page/7/index.html","31e608a8c8eddd9607215256f1e3c4c3"],["/archives/page/8/index.html","ba202d5a206bc58228b724a47b34dfb4"],["/archives/page/9/index.html","b3ac44fa5402502a33b7939d590b37fa"],["/categories/Devops/CICD/index.html","a02a7c7d73e71d4444b2040ca371aaf2"],["/categories/Devops/Linux/index.html","6fbffa45c168b1c6c8f297ca82d66d72"],["/categories/Devops/index.html","d72304cc2e322adb480722279a0c1571"],["/categories/Java/JVM/index.html","463f97ff3413fd69b4b983e45a9b2d3f"],["/categories/Java/Java基础/index.html","9c1badd1348b1f30c2428c28caaad493"],["/categories/Java/NIO/index.html","4bbeef2a3b0dae4f32fdbf6fdec6f1ea"],["/categories/Java/NIO/原生NIO/index.html","0c619d1ed9997e4ac9014f8ff56c887f"],["/categories/Java/NIO/文件操作工具类/index.html","2f0987e51cf1613d7045aad1cf03320a"],["/categories/Java/index.html","b60627ec053d95d666b743a2e3b0ee87"],["/categories/Java/page/2/index.html","c6f46fdfa01cb0a87b163f7b95961d83"],["/categories/Java/并发编程/index.html","e67a5be2f468fe2d377347db6631f961"],["/categories/Spring全家桶/Spring-Security/index.html","8df533c5a3f0d432c32019e027ceae2b"],["/categories/Spring全家桶/Spring/index.html","48d408781f0d163410bcc1df56542b9c"],["/categories/Spring全家桶/SpringBoot/index.html","d20f7f8dcf26305e38dfd60317af6a81"],["/categories/Spring全家桶/SpringCloud/index.html","2e8cfdc6c6dde92871ae947babc5364b"],["/categories/Spring全家桶/SpringMVC/index.html","99260a30412296845521c854dcc84e64"],["/categories/Spring全家桶/index.html","fc2b27bd376f50a9ac9b425e6fc81628"],["/categories/Spring全家桶/page/2/index.html","cf9efe9d152a93f899aa77e29584f3f6"],["/categories/index.html","12567b22ec548906ba6d729732b6bb01"],["/categories/中间件/Dubbo/index.html","8cd0f6207d8dc567b38f5b36976dce99"],["/categories/中间件/ElasticSearch/index.html","d6124fdda0de1c4ca816708f5759145d"],["/categories/中间件/Netty/index.html","d423d1ea9009e1736a3701a3d8a1f107"],["/categories/中间件/Redis/index.html","4a721a683f7a61ec03a7f16266437e12"],["/categories/中间件/Redis/page/2/index.html","b62c4be17042d6bb389d8535d3224b4e"],["/categories/中间件/Redis/page/3/index.html","42b7213bdb68e8d82d529023006f45b4"],["/categories/中间件/index.html","be85004d6e492bb1e51804f60a952706"],["/categories/中间件/page/2/index.html","389117d6fb8fbad37855f1fdb63e93d0"],["/categories/中间件/page/3/index.html","d844033edb99fb2cf0b36faf583ad965"],["/categories/中间件/page/4/index.html","8c84dbed8a31a2d9910d31fff7fb60b0"],["/categories/中间件/消息队列/RabbitMQ/index.html","856978f3a6eb222fdb949878acaf3fbb"],["/categories/中间件/消息队列/index.html","9373a56dfc6d16b12a808528276f3f9a"],["/categories/前端/Mock/index.html","70e90b13a81a3d771d27f20643f1cbbc"],["/categories/前端/Promise/index.html","57ba55e77ac3d2e70cd7b604af98c992"],["/categories/前端/Vue/index.html","3dccdd09f96cedd415c366bdb576eff4"],["/categories/前端/index.html","b5246f84d38d74d051d38219bf9ef54d"],["/categories/前端/jQuery/index.html","1520e6bd734376a6dfb062fbf9c73e73"],["/categories/前端/page/2/index.html","a22649f3e0307f7ac3fbe2b895ec0b56"],["/categories/前端/原生基础/index.html","f67f473c8af7f6bf695e6b820ef372ff"],["/categories/前端/异步通信/index.html","60e4f094fad862f64ea3d4d48e930edd"],["/categories/工具使用/Git/index.html","c75fc9ca6da24c8aa5a9cd625a072583"],["/categories/工具使用/index.html","e240088ba6524dfc1e180fbd49ab74f5"],["/categories/工具使用/markdown/index.html","fedd609b4e7f3f8800f34380041f403b"],["/categories/工具的使用/Docker/index.html","944fdf806463403a5978225ab8786bc4"],["/categories/工具的使用/Nginx/index.html","469a1abecc348aebaa10d4d7e80b82a3"],["/categories/工具的使用/Swagger/index.html","78bfd563cb1b03bb12c978bb289216fb"],["/categories/工具的使用/index.html","217c9e2127511c8f5197202d312b4556"],["/categories/工具的使用/博客搭建/index.html","0fd6a8f474836618b0df0314687a6830"],["/categories/数据库/MongoDB/index.html","1d6e1ce0d634da8977ecae4348d1b4e7"],["/categories/数据库/MySQL/index.html","77c62d2183d796567de55c571aa13c83"],["/categories/数据库/MySQL/page/2/index.html","d312e4ec627c7480d49e08c0b108beb4"],["/categories/数据库/MySQL/page/3/index.html","5a35c731d110ae12b70948f2b7d58372"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","3fd0d59a0e6d13ad32c3ac500e974419"],["/categories/数据库/ORM持久层框架/index.html","06b7035b6c5741528a8b0563ea5d471e"],["/categories/数据库/index.html","503d0112162d329e0ce3f9670f46bed5"],["/categories/数据库/page/2/index.html","b9102d082e5b970cb4ef4cafedbbc610"],["/categories/数据库/page/3/index.html","95bb6a748cdcb2164344e2d4a2740b7f"],["/categories/系统设计/DDD领域模型/index.html","b4de9d25e332e3b553eb6e0b4054fd95"],["/categories/系统设计/index.html","67068ba529159dfb84b40b1aa13ac717"],["/categories/系统设计/page/2/index.html","c03fc987c706b7e2259bd13b9de4fb7f"],["/categories/系统设计/page/3/index.html","77a2157f5a549b71c667061432acb389"],["/categories/系统设计/page/4/index.html","372bf5d307febff0eb08c9f3ed5802ab"],["/categories/系统设计/page/5/index.html","5a28da50c5b9cd1be187cf1dee53ea3c"],["/categories/系统设计/分布式权限认证/index.html","a1589fd9d3c6325cd5068345af50170e"],["/categories/系统设计/分布式系统/index.html","d2eb583c2375e9284b3128844ad2801c"],["/categories/系统设计/分布式系统/page/2/index.html","3f15aaac96daf27f1562088e78ad8f42"],["/categories/系统设计/分布式系统/page/3/index.html","e9fbb66d2d26d342a9a6d021ccfd8da0"],["/categories/系统设计/微服务/index.html","611fbbd784a01d62bd35a34a8ae6d46f"],["/categories/系统设计/数据库优化/index.html","66c0d7c6b32436c09bda276c19966d05"],["/categories/系统设计/设计模式/index.html","4be4bb1e72c7761cd5071db8304dbb9d"],["/categories/系统设计/设计模式/page/2/index.html","028f4e490b389a36109dc801872b2f0e"],["/categories/计算机基础/index.html","f3e1e059cf165e71371140c682e3903b"],["/categories/计算机基础/page/2/index.html","ba8031717579ace35154d961482c5bd9"],["/categories/计算机基础/page/3/index.html","6fd12e6e14adf26035d5d94c8ce2e44b"],["/categories/计算机基础/page/4/index.html","7742957cf99887a5718185a3567ee14e"],["/categories/计算机基础/page/5/index.html","54d32ec11459f35db625f69ed2e85e92"],["/categories/计算机基础/page/6/index.html","342d9174e9a26daf9e71f0bc570cc9f6"],["/categories/计算机基础/操作系统/index.html","8859507b4d291bfaad27a77a34827772"],["/categories/计算机基础/数据结构与算法/index.html","c63331aa58a2b2e85398dc69e8eaa34e"],["/categories/计算机基础/数据结构与算法/page/2/index.html","fb3743c9fe308a121b832085efe979fb"],["/categories/计算机基础/数据结构与算法/page/3/index.html","0bdc81dac5cc506f4da864a33aab7a3c"],["/categories/计算机基础/数据结构与算法/page/4/index.html","6c25bb5d008f3d14c3dbe7dd9e58c972"],["/categories/计算机基础/数据结构与算法/page/5/index.html","672294a051223eeb335117589f8c8755"],["/categories/计算机基础/计算机网络/index.html","ea2f2c5e2296d5127cff8618644c0f00"],["/categories/计算机基础/计算机网络/page/2/index.html","4e71e79c10efce9bbe9f45fd1ada22b9"],["/css/index.css","2af5ea34362e0b34f799106b2659ad50"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","b5a8e3d42e8390017b6d4b6fee362525"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","473061e49c2392bf9466e293b461854d"],["/messageboard/index.html","431bb4cd9f0cfb02f75aa72f2a9e20ac"],["/page/10/index.html","875f203abe31f1e7e6639e013f18ad67"],["/page/11/index.html","45654b264a0b37df4174e08537b6cd57"],["/page/12/index.html","2bce74a7faf4e99bd720dbb33e8156aa"],["/page/13/index.html","6be8fbe06940bcdfcf0fe1b9ff580e50"],["/page/14/index.html","16923ed22161776f971b7907deed5e16"],["/page/15/index.html","563342ea238bb07d3fa8dcbf9448ef8f"],["/page/16/index.html","bf14d600aaa7e776ca61f56820822851"],["/page/17/index.html","a1a0400948183d32cfcfb4f52c4b4524"],["/page/18/index.html","ebbb5434b4e8ec92a6a978927496f3ed"],["/page/19/index.html","697232e4f54cd9f74a402d0d7a2b38f8"],["/page/2/index.html","c274668b631986d5dc5d9a3f44ce9308"],["/page/20/index.html","08156a472c296c21927bcdb3afd1c53f"],["/page/21/index.html","62ad50da1fa9af1fc9e29bb602a6870b"],["/page/22/index.html","7c83a3aef19767778efcb2f125178e0f"],["/page/23/index.html","2a8630110664db1e6a8827e40b109a1a"],["/page/24/index.html","60c01bf493fc4b3219442e03392230be"],["/page/3/index.html","b4d895d8d00e1084a5a0569b523ca0be"],["/page/4/index.html","db683419d10c9d162aa383ec8b89c3bc"],["/page/5/index.html","a43978b984a4a8c78814ee0bfabd8cd2"],["/page/6/index.html","38c366b1669098ed33c9a1cfcbc8ab32"],["/page/7/index.html","b587ca23740c5c7e88d2e5e9dc263ff0"],["/page/8/index.html","77e7bc5eebf5a8d0a4c0e64541ed02f5"],["/page/9/index.html","65eb15d7408304cf38e84af5104dfcd8"],["/sw-register.js","6c8b8184de40b14b0bc0e7bab7ee1f08"],["/tags/Ajax/index.html","b124671f4cf8ff7b056891fa1c62a719"],["/tags/Axios/index.html","92e7827c871f6189dd782cbd8bc6ac19"],["/tags/BASE理论/index.html","72fb096bee097c541c72618d01f574ce"],["/tags/CAP定理/index.html","997069589ab81d32ada1bba389a661d4"],["/tags/CICD/index.html","3af67fedfc86b6f941a38c024b581bba"],["/tags/DDD领域模型/index.html","60582e17d07c3d08077b1fa25f329792"],["/tags/Docker/index.html","d098f4825225f78ffe3a3bc8d8d79c1f"],["/tags/Dubbo/index.html","4084a91d896731730706f227f344c360"],["/tags/ELK/index.html","9775e735b5e090935162bfbf8de3817f"],["/tags/ElasticSearch/index.html","7270ab6b9f09626801a96a6d85591efd"],["/tags/Git/index.html","64347c9fc7e3eaa041b712ea62900ce7"],["/tags/H5/index.html","da8b364921312b72042ee655918bdcae"],["/tags/HTTP优化策略/index.html","9481f48e74d56fb546007f286f06f03c"],["/tags/JVM/index.html","6c3bc83a1d926adae538f8535af2740d"],["/tags/JVM内存模型/index.html","75db2a03e17794e9d7158b50c3ccf535"],["/tags/JVM执行引擎/index.html","a86863de26a7bfa4840e70da83b08235"],["/tags/JavaScript/index.html","d26f29144ceb340d684770ef1a82e7f5"],["/tags/Java内存模型/index.html","cedf4da560fb7aba9c29353652817a32"],["/tags/Java进程线程/index.html","4ca7cc6a1aa53adad7354a2f0c4f5328"],["/tags/Kibana/index.html","54487b8a364a81ac57dbf2269c2336aa"],["/tags/LeetCode/index.html","6f4ab8da17fb1ee6a1cf5b2f0364d6a0"],["/tags/LeetCode/page/2/index.html","345ede8a4e7f338aa5b42295c7e57ef5"],["/tags/LeetCode/page/3/index.html","d6def1c2d72ae372016aea00dc5494d7"],["/tags/Linux/index.html","ff67c34426b84353bb6b56f4f0976ed9"],["/tags/Logstash/index.html","9718d69e82e9e20bde969b64e87e1104"],["/tags/Mock/index.html","712d90c9554283d7f5ddfe411be41cea"],["/tags/MockMvc/index.html","b1cb341d8d836fe72867762b918eae60"],["/tags/MongoDB/index.html","64d1617c5c0e9bc7669021b5c3c94f39"],["/tags/MySQL-事务/index.html","497e57a26291e2689fe68d4a57ac50f5"],["/tags/MySQL-数据类型/index.html","3aa0231a14f74a39d2bd0f61776ce0e6"],["/tags/MySQL-日志/index.html","674d1381b5cf044f5e34836bad6e80b4"],["/tags/MySQL-索引/index.html","f2c3df6bf1816a6b8a667e5592a4931f"],["/tags/MySQL-锁/index.html","abef6e323965fca869c11ed58394ea50"],["/tags/MySQL/index.html","47ad8882546ceda540b7757a1aee7880"],["/tags/MySQL/page/2/index.html","fac252b97c2b3f6ea923aa0eba61e116"],["/tags/MySQL分库分表/index.html","86d130399b616300cb18545f1c61ac2f"],["/tags/MySQL读写分离/index.html","c557e741b4e1facaa9fb368401380163"],["/tags/Mybatis/index.html","46fa68aeaa88e14ea5e6073e27ae16da"],["/tags/MybatisPlus/index.html","ba869c7ebe019062e440abd0bf24aab5"],["/tags/NIO/index.html","6ebf5b052c3648590ea435fd945151a8"],["/tags/Netty/index.html","c92960d72c687540ed6a876b2fbe2504"],["/tags/Nginx/index.html","284cc58da67d7aa0cb3cbfd2b35af203"],["/tags/NoSQL/index.html","2ea185b8cefd0ae6547e0f71c64401b6"],["/tags/Promise/index.html","336a820936d0aa51c58849b219c1da03"],["/tags/RabbitMQ/index.html","9d56465e4ebcee476f2bfb70394d5020"],["/tags/Redis/index.html","514a48c1f5b6225d126e773a16f8a3e3"],["/tags/Redis/page/2/index.html","16050182111030e6aa86ecb7d4ff6c94"],["/tags/Redis/page/3/index.html","797ad1f9602323e230dd04a898546524"],["/tags/SSM/index.html","b7f87a23ced004b8a6a3c732747aaa69"],["/tags/Spring-Security/index.html","1c1e382ac5dbd1e047aa680afa0963cd"],["/tags/Spring/index.html","426fbd27b85e40efb82fe0226cb958d3"],["/tags/SpringBoot/index.html","52745824aadf9fe626ebd1f858765e3d"],["/tags/SpringCloud/index.html","4d1e0dc4c6d10d0aae8e4c490e22b2e0"],["/tags/SpringMVC/index.html","bad49017044eaf07753e1531ff2e61f1"],["/tags/Spring事务/index.html","7f8ac621f91aaf489aa3f0592a77b1b5"],["/tags/Swagger/index.html","db08d2d9029528f5827a65422d2f9115"],["/tags/hexo/index.html","2a4043b9bcc23e61bc42e0092962c0a8"],["/tags/index.html","b55ba8cd879a3245f6b4bd63e4243831"],["/tags/jQuery/index.html","338a812d9a3a3d1500bf57b5cd59f938"],["/tags/java/index.html","3f29a825271a67546c5ddbb2fb8d310a"],["/tags/markdown/index.html","c13e28be724b3d4973fee32b70c983c7"],["/tags/rpc框架/index.html","b05eaf00d372b71d5ca3f657e86a9c58"],["/tags/typora/index.html","d2b37dd57fc47facd7ab972a39f0956d"],["/tags/vue/index.html","fad4b1d51aaaf36d8d011ed6cffb489f"],["/tags/享元模式/index.html","14204db936160f36950961fb1de1507c"],["/tags/代理模式/index.html","abaec8425a1b15aa051069772effc78e"],["/tags/内存管理/index.html","2337d58af8ccdd7003160dddbf429439"],["/tags/分布式/index.html","0373a1d3a0e004e5bcee7253bd909d25"],["/tags/分布式一致性算法/index.html","eb24a48a580af0e3c55c0b994ed710b2"],["/tags/分布式系统/index.html","f700f843ce370c26241f83bd2228f1b4"],["/tags/分布式系统/page/2/index.html","c1b823913777b41d21cf34e60252e082"],["/tags/分布式系统/page/3/index.html","f789ab6aaf953b0ad05f0557eec8fb63"],["/tags/前端/index.html","41ebd9b1e678dba116391b63a0f816dc"],["/tags/前端/page/2/index.html","85947c35aa75c58fb43f5b5cb63a6abf"],["/tags/动态通知/index.html","0723a3f099f94e3670e44dc4c9d39ac3"],["/tags/博客/index.html","3a85572c8d3803a6d581e1ddc92e9d7d"],["/tags/后端/index.html","6028127d64de179201c8825009ebb079"],["/tags/外观模式/index.html","dbe02d10e3181a8db9d76fcdcb9d07c5"],["/tags/多级缓存架构/index.html","b00f2724a00eeba96693aff6051170db"],["/tags/多线程设计模式/index.html","7c467402ef9324082a2f307436a7d4f5"],["/tags/多路复用/index.html","11ed902581f2c3cc07ede8be17416e7b"],["/tags/容器技术/index.html","5788f92ce4307456b205c3bc874af69b"],["/tags/工厂方法/index.html","f205d0c174385257a85e336e3d7b270a"],["/tags/开源协议/index.html","f9c41c21fbdd1ffa788abd5d1b287259"],["/tags/异构同步/index.html","61b84ed03245753cfba6a43b55fb53b7"],["/tags/微服务/index.html","02cb5a16ad3c9c763a3a4936cb0aab28"],["/tags/微服务基础/index.html","8598820e12a751dc400469b7b41c7aa3"],["/tags/抽象工厂/index.html","b3d1f3528191330615aa14ab94bfcd0d"],["/tags/持续集成持续部署/index.html","8e684721abe0b1d4b14333c08030a524"],["/tags/接口安全策略/index.html","a8b485dc32f9fdccbe17c56d82d456f7"],["/tags/接口幂等性/index.html","e3c7d6c1fb938d602252777e7b7418b0"],["/tags/搜索引擎/index.html","ca1844e68e859a3a203dd90de9723d03"],["/tags/操作系统/index.html","6f58fa1ad140ce5eab1cbe4350c20594"],["/tags/数据库/index.html","7ce1afb40ffe19f8cbe5933aa35dfb36"],["/tags/数据库/page/2/index.html","05994613d614990d7eb951ef0dfeadfb"],["/tags/数据库/page/3/index.html","e77e46ebc010b1a0ff65c7a6f22b5ea8"],["/tags/数据结构与算法/index.html","8f3544dc37d29b410ee021aeb3e5d9ef"],["/tags/数据结构与算法/page/2/index.html","da588e065278d9ded1ae9ea48e2df062"],["/tags/文件操作/index.html","19d9c8677eee75488c926ceeb7a12aeb"],["/tags/日志/index.html","7c11fad688f384839424122520bd7d7d"],["/tags/服务器/index.html","a362b8100b35196d1e757c8aea49c76b"],["/tags/服务治理/index.html","55d89e817cb2e14712b5fbc5cf5a660a"],["/tags/权限认证/index.html","51df13913f6fa1680d85a6764f052092"],["/tags/架构分层/index.html","047351289ba347624f0508aa14545394"],["/tags/桥接模式/index.html","997f5e3fc976ec2714a73a724315150d"],["/tags/模板方法模式/index.html","8416a762e98f0a8501c705248b8ee81a"],["/tags/死锁/index.html","2e9820152bb8b01b203bdf6f4068a356"],["/tags/池化技术/index.html","be7f2a746ba7abc5168eafdcf7e248f4"],["/tags/消息队列/index.html","c99ca3bab6c3bf52b3123fad7ccf274b"],["/tags/版本控制/index.html","9b5b60c5925de974426a5bde790b1406"],["/tags/监控微服务调用/index.html","91da2676010fee17a3269a2b0db6bf6f"],["/tags/策略模式/index.html","bca8932388f711c9956652f4fc2b0ad7"],["/tags/简单工厂/index.html","cadc75f51ccaf65bf496a29d13740b44"],["/tags/算法/index.html","91c00d70ef42fa807d55defe71ce8c48"],["/tags/线程活跃性问题/index.html","0c9291854d7c9298cc62c04d1c6b814c"],["/tags/组件化/index.html","0b266612812edd0d05243845456ad643"],["/tags/经典限流算法/index.html","dd418572011edc3311a99d2bbe8b2203"],["/tags/缓存/index.html","d647e65b12ed30d90a5a82f67bbb7ec6"],["/tags/缓存/page/2/index.html","2318e4ede87735710c3c7b525c2be148"],["/tags/缓存/page/3/index.html","e53530c49fc3b2bc076e8f42cbed5c52"],["/tags/观察者模式/index.html","e44135e79c6f236f1ee5221e9aa82cb3"],["/tags/计算机网络/index.html","caabb51be139520a5e7ed1761ce38388"],["/tags/计算机网络/page/2/index.html","ce4e13cf8f5e22b8ac961110953442f4"],["/tags/设计模式/index.html","eb7540f0efcb9fa9eece6d9343d205be"],["/tags/设计模式/page/2/index.html","75c58c7e7cd3f689cfd72f974c0ad50d"],["/tags/设计目标/index.html","782a8d121e279389f10e435e97de4543"],["/tags/资源共享问题/index.html","3657cc6b874217a529c3498cab9ac49a"],["/tags/进程管理/index.html","18b5ee9928c8bfc427f2135bf864ab4c"],["/tags/适配器模式/index.html","11d8644d4a2e6d3920d43337820f4a3b"],["/tags/通用设计方法/index.html","4d0a58524e3c5699d8c070f94c6562af"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
