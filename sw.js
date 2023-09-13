/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","c6ce970435424eeef6b881af0f6a6281"],["/2021/02/22/工具的使用/博客的搭建/index.html","c182f34552fddde439c401d001f01b8f"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","91ed7e6248c01b3058c7c02e3b12f53f"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","f7d1584c0668c7b597bf556d873c6a20"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","bf21ac032aa9133897d68ff0463cb6b2"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","10ae7a4730e2addd0cf9e23dd62d26ba"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","f0fdbb11db739ee239eb6ee70c4c6338"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","819c6d51d4782d492d6be1f5ef1bd803"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","b2493ca148f8e0cac99eff05362c5333"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","20d103dbddc6f711bd9c000a1f888e15"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","1bf5752a42e170fad304f4804fc29659"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","cc1bdbbb4d113e8171bf75cc263456eb"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","0a619fe8105d4b2854db81e393eb80e3"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","af630a69338b588b05c8b53f27dbd88f"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","d59d295a0043ad7e1fc9448e72d86749"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","2631a65ee2e5d37f28c18c4e1003edce"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","bf7803ed839229d33765bb8aab9387d0"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","44c1db1044dc75abe1d17d46fd92079a"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","8515737e23a6faa540a7a24f92957ee1"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","3482336eadd36556a9b04f7ed2edd871"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","efe371b48788093d67da71935e7c6be8"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","dee90b9da9c1d68f8686601182ea86ce"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","170b0ebdfd8915684cdf6ae589449900"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","347bc2121e801f77faca52e7d61c7e00"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","5f76243a7211c19ca97ec61944daf860"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","a310c3865e97a7107ba9e090d00c0e96"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","d2f0339a7e46f588c4c58d51167c518c"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","c91e89710b3f67cc0aa519fda60e096a"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","53616011434faf2fa1e0c4b7ece9b3e2"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","c3016fd5e04b6b5f0013d95221bb6b23"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","2a12e0c664c049affdd754d5a01ff2f4"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","540fd7f2bf2dd4e874b29a2b824544d7"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","52edf3e8eee671123af156d1cf53167a"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","9e8df25a6fa112980e23f84360b4d969"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","4d5e1f791617c8ee24f7135f0236fed6"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","b3b51cd9abefaea180cc545155ac1858"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","8db9b730513a6170f3ad5f136be5ac63"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","68a32137142ac8712fdd3883579ad920"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","075f5e8073b82a9d21b5781788a2aca5"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","fe2b1ffe84c91bd5e14dda5f8633ee68"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","7cb6840f49374fba34dfda337ab09824"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","94e27887f73e33de454db7a8d51db046"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","a57e229666597b57616ddc6f21a2a328"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","794df028da26c7271b6929cf8a16d0ef"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","9fad669eb23384326f37ecc6f1434b75"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","17ace06e7de888151856280d25bf2713"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","4e5555b2a5ab4278d334736856b149f6"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","0f6b148c168906874b1244f7007a5d53"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","2293c912383b66dee8a1756c035ccd28"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","abf08303bc764f856dcdfb8cac325485"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","0146303878936fa18af298c511e13840"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","5f2e3c0fd792b5ac2006d89a5d08b19d"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","681b9a063aff554b742ae9049ab87f42"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","99298382a2e78d376fe21bc48d06b434"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","936718b3ff1a54528583e23762d76d8f"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","c8a2e85cdda0d01113b99bb9c075bc45"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","d4c45c932380d48e1c15fea628b22a42"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","ab956e78f2aa7d2ff030a14bf31e347d"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","2b8bde6af2a65d5232b1e7935ccf4ae3"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","2166f19663795488c06ff839c7d867ec"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","b64e8e3ec722b0ab401fc70c075b0c8d"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","cdff1a8e7b6418225babfe0ce9d26f77"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","497fb4ec2ce818a1928c0b82f38a1f5e"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","b7a1a99c24f8924610efc7eb6bacc4e2"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","276464d727c4120cf1afdd6c354c660a"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","7bd3450a71b43a05d97d41169c368d86"],["/2022/08/17/前端/jQuery/index.html","303b5215e6b20fc5035cdd37bde4afc8"],["/2022/08/19/前端/JavaScript/index.html","b46cfbb55104e706f26f02dbd2c02e0d"],["/2022/08/22/前端/Ajax/index.html","782d6044540e9c4e00dfb8e13786055a"],["/2022/08/23/前端/Promise/index.html","29aaddd3e9c2bbd864de77326f859613"],["/2022/08/24/前端/Axios/index.html","9e534f04475bb4bcfd1ec3721dd8163e"],["/2022/08/25/前端/H5本地存储/index.html","fea1d3281752d5545f8a597f73b9de0a"],["/2022/08/26/前端/mock/index.html","42bfa0325779a5972992a2892a7deda1"],["/2022/08/31/前端/vue/VueJs/index.html","051b0d89404dd5cb0350966080a1f448"],["/2022/09/01/前端/vue/vue组件化/index.html","ec96cb5247f6bb9a8130978b359e0578"],["/2022/09/04/前端/vue/VueCLI/index.html","e8c89db796dd7b28bac7f4a39d33dac2"],["/2022/09/07/前端/vue/vue实现动画/index.html","36fcaef9e32aa60db1a48632585c18fc"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","2f75b368f516498af84b181ed5f0efe0"],["/2022/09/10/前端/vue/Vue异步请求/index.html","97cffc8c66b4a1c5c1a9b7cb214be926"],["/2022/09/11/前端/vue/vue-Router/index.html","d92529650fbfa7b943972983abcb3ebf"],["/2022/09/13/前端/vue/Vuex/index.html","5800e6d5687abbbccb9394f1be8c2f1d"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","aed572d6bc1a9c6c114bd4c301d3e0ed"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","9bc34e48949994da4d49f06baf741314"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","ad901a65361bc076eae8725f7bd2f26f"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","2dcc8858739cc6dc8dd7ad52feb0027e"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","264b3ed42c570f561554a703d1e2ed57"],["/2022/09/28/DevOps/Linux/Linux/index.html","f460604e019db3c0cb79870f3d96334c"],["/2022/10/02/中间件/Redis/redis基础/index.html","729ed8616fcdde1a0777460634487efb"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","6a7fb3586b779d11dba5ef58713f061e"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","421c0045320863dcffbb2dfc9fdb8587"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","e40b76bf62897ddcd5c070abb7c7ac56"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","074fa09119f827196757a0fd9a52f949"],["/2022/10/17/中间件/Redis/Redis集群/index.html","877068e21efad0d6245991cb036d48a5"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","a1b6acf1b089fe9a2f1bbc9f7d7cee2f"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","6f5fddbdd361577c539c8cc00d71f54d"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","8f85f4a18c38cf2d5ef3d44982a1035c"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","813edcef9265a50880bd24be200ae613"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","769dce2710b604ac10d58a1a2a8953e5"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","66e1c542fa778c141d8ba9f3ab01e567"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","03b1e5b318c8d92aa2c70701f1a71e7e"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","f942583186612f67217ff451142832aa"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","ab9bfc3b7a260e7f12f2f3513c034212"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","34b7879110fd91af7a72a8c76b156cef"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","c98419bc6d8d07488179f440a09683f9"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","b7e3db7c636cd1bdfb98a07fdb6a7855"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","83269b3c0fbec91036a7e3e09222f5a9"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","204299eb578a65d76b76828b0646f108"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","ee717facda59645730c0e00ffd555915"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","11a865ce8ca65ea4234056efcb438978"],["/2023/03/10/DevOps/CICD/CICD/index.html","85a58439631edd31951e6f377ad9f934"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","65ee2e1dad89650f18222e503f9bbf57"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","ea540dd553460064b8049a885d18b840"],["/2023/03/13/Java/NIO/NIO/index.html","2e21b7e197fcfd891c45723c35e78a24"],["/2023/03/14/Java/NIO/Netty/index.html","1ad84e40345faab8b97ce1444b691f6e"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","3dd1218bc73c0734768ded071c05d367"],["/2023/03/17/系统设计/分布式系统认证/index.html","f25af75c67c2da1fd233f3e04717b56f"],["/2023/03/19/Java/JVM/JVM概述/index.html","9521291bfd8516988ae598b060f79a47"],["/2023/03/23/Java/JVM/类的加载过程/index.html","f9813444b91b3fbd15da0de315b924de"],["/2023/03/28/Java/JVM/对象的实例化/index.html","85b5a55b261ef808aadd67545d2bbf84"],["/2023/04/01/Java/JVM/运行时数据区/index.html","68f381134e2b03ee28f6bf27cff81265"],["/2023/04/04/Java/JVM/执行引擎/index.html","04ae9c75174edc410187f1adc09dc2b7"],["/2023/04/06/Java/JVM/对象引用/index.html","4e94c121e51092de8524dc1d2ac51b21"],["/2023/04/09/Java/JVM/垃圾回收/index.html","4e4fd6e54c5c3b51898abc236e9cfdeb"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","e5995742d774089ff00bde5e3cbe22f3"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","ff0ff2f8dd2704762caf312352cbeb92"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","542776437053ec27c373fbe0ffd4c620"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","fc88dc61b84c7bc70de30e50b68eebb2"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","b41337e0b42515ee7d4107c167bba621"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","6599a5aa3625f3c4f04418082dfaf593"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","e3dcc8cc33a1c67d7a152b9054fea067"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","b590fe711d15e762cb79dbcd8bf6a330"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","341a0fe2bd5e942919577bd6b8893819"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","d37259c819294562000c1a34af925e21"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","3a639334b1977c51da5a8185953ab6f8"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","ff253bd7e944bdc76355bec529316ae7"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","fb3ecac71c4759100e81b2a79905cb9c"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","df8dc07853b4c1d842c37ead95ee5cb8"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","0abc7169ee7057c824dab654ab4975ed"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","b4ec7a88f59ec118e1dc25e518181131"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","ac85e22a669eef055655e6aec890bac7"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","13cb985ca3624c59a21f32f53d858dde"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","f9f12970a680ee8044294c0accfd35f3"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","a87d3da93008cafd07b64be33323ae06"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","b66fadba11beb786cc688ddde17cb587"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","91a2158f4e4f8e8429335868913881fb"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","f79e5243097ee5ba42fb8e8ed2f22330"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","0968d2c54bfa57279c49bb5e75223b35"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","a5f7b239b19280fcb6bdef92584ad518"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","11acd1a61c235d115e10d3a26656d49d"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","3dbd7cc58cb9a96c77614a8da25a942d"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","94e7279947be66a19447f166eadbf66c"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","b654563f02e27e36c5cbd90b865aac97"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","bf657f1144445b83025178da1962fb17"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","e9418523db9e4308e58b5763351ef15c"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","15a4a1578ba570e2104178378804b533"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","2b4afbd936b765da89ed1ad82e117701"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","147e9829cf0721d865f663ecf9c32202"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","84c41fab8efc9e4dd5a3696db74b9326"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","ec156bc4febd2bef728e6a24faaa4073"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","c79fbb7841b6637661c2aa966c949cb2"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","fde520f544b0ec943886c444eb3ec61c"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","8f491a090d53decd9ac262fab6ccbd8a"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","b8287f0ead7620946c07195780b34b61"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","e0b9594aa52e86123fdb469f3dccde69"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","d2353c093ebdd94fff388675d8cf42b6"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","d1e70d3c6c9efb9076cccbbe41082d1d"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","3b07b6016462b70aa836f6af349030ac"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","f83b516e50015f6d9273fea8dd12e40e"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","0fc8e5fecb22304b0b2e602c08a6ccf1"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","3414aa13757bc6e8c8eb7b391fda4a6b"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","5fcdfdf4593216ca2bc455974a4e1433"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","dced0c9d9678cf44b994d4e083c4807c"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","77dd5d10bdbae0aa210af8fce4589cb0"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","ffe5b1f89777d9e5cf46d6280526e6e6"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","2971161e6c06269ed34a0c33b7d53644"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","96219201a0e3adc3e5d03a8feb3f0a5b"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","c27b42ab763a8084677733f2c0eff7a6"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","febaf4e8b7c24e2ea26062a1dba7e72f"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","5c709d369f45ec6a91fee414a113b1e5"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","74dac8e0824fe08dc6784c7fb8855fda"],["/2023/09/04/中间件/Redis/Redis事务/index.html","279e7a44f59c56ff4230915afe85177d"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","cd7adbd63c14b1906f78ae48de91e65c"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","41c2bfe996b7e4d3119b084f9b51f873"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","dbf03459585691d687e4d1b9b6eb2193"],["/2023/09/12/Redis数据倾斜问题/index.html","0dc10f0e6ee7bfc0362c4a83d70ae9b4"],["/404.html","ed52c41c42d1c6e0a6c1c43177c2d83e"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","4b0ccf6e28ebaed5fb3b750a710a6e36"],["/archives/2021/02/index.html","44c05c8403fee1891e4385639a9aa5e9"],["/archives/2021/03/index.html","bf5e95b851f725fd2e400f956c79ca8e"],["/archives/2021/03/page/2/index.html","3af57ab0b80d24171c94989a5adbfc82"],["/archives/2021/03/page/3/index.html","617d73fdff5c4643dd28424dca651e3b"],["/archives/2021/04/index.html","a1df154a19f005e5cd8bea80bcd57f13"],["/archives/2021/04/page/2/index.html","c665d15a78d11dc9cc46cb74c399f794"],["/archives/2021/05/index.html","853ee01bbc5897de4e240ddbd712ead3"],["/archives/2021/index.html","c5a46649d2cf2646024955e4912cd0e0"],["/archives/2021/page/2/index.html","5e81f99754b18ec4e8afbdcd21eeff2e"],["/archives/2021/page/3/index.html","39b6b92e5f42bedabe89ab96850eec8b"],["/archives/2021/page/4/index.html","1aed1bedd79e6bcaf40e5fa9caecc53f"],["/archives/2021/page/5/index.html","8ad646df8065d7369cbf2d802da4f561"],["/archives/2021/page/6/index.html","7bc9231c20b7d75563e1c7de72aa6d90"],["/archives/2021/page/7/index.html","c3664d5970f6846f0cc66494011bbc06"],["/archives/2022/01/index.html","3656489de64d157416e3b880f57b3834"],["/archives/2022/04/index.html","e6c5822e27c295b581da9985af1ddc40"],["/archives/2022/08/index.html","f8d077e6c4e11e4babdd1e8617132dd2"],["/archives/2022/09/index.html","169c9be67fcfb9c8c6b0291afb068934"],["/archives/2022/09/page/2/index.html","3ba0fcc8f06548e0aae76651e6990bbb"],["/archives/2022/10/index.html","f328f93d03097f1ffc252514c1939243"],["/archives/2022/11/index.html","a104d88ec4da0ad33275a2c0c77c920f"],["/archives/2022/12/index.html","76f742c847d5248d087f97bb28fd67ac"],["/archives/2022/index.html","a5e5bcd4b9d06f2d7116645c55e8c3a5"],["/archives/2022/page/2/index.html","02e520d7e729b2fee0a90ab6fff96c4b"],["/archives/2022/page/3/index.html","11993e593a49a9df7e0dcb898293d48b"],["/archives/2022/page/4/index.html","a61b504f97e78da4b69ab1db9cb84282"],["/archives/2022/page/5/index.html","d1687da1a1557e033b91324772e56b86"],["/archives/2023/01/index.html","2790bbd887baae397161f53b9e09795e"],["/archives/2023/02/index.html","2cb4f9bf0a13b96c55c0fe702566e21c"],["/archives/2023/03/index.html","d8297fb146833e84703f4cacb2eb767e"],["/archives/2023/04/index.html","52b8c747b26a33881959a9968bd26dcc"],["/archives/2023/04/page/2/index.html","7a89be4d39fd11854163676f0f7d19a8"],["/archives/2023/05/index.html","f2111f1c273a7194085fd8bbab4c03d6"],["/archives/2023/06/index.html","df09feffce3f258f4bd89ffe3f2a0cc4"],["/archives/2023/06/page/2/index.html","30793e914c9083b475f0e667355ace16"],["/archives/2023/07/index.html","5de05ffb480ac5c0bdcc6b369f721114"],["/archives/2023/07/page/2/index.html","20113dd5058c86ea61cc83c8073981c5"],["/archives/2023/08/index.html","18f7a198bfbf77c92c84236dd08dbcc4"],["/archives/2023/08/page/2/index.html","a292a6f2cc74ec800856ac332646e450"],["/archives/2023/09/index.html","40916d66d1adea365ebb0f0e1854c0e8"],["/archives/2023/index.html","6acf89b7f51be09a0523158d623958ad"],["/archives/2023/page/2/index.html","532d862cdcf8e3884f62d8d499e46ac8"],["/archives/2023/page/3/index.html","abc9363d19286bbc9023ca9971ecb858"],["/archives/2023/page/4/index.html","2e7b1106850c992f5e08ac6380bd26bb"],["/archives/2023/page/5/index.html","c8aa7ba66d30445f2ba40c18b0121da0"],["/archives/2023/page/6/index.html","47b9ef64a19541f3090b1c1ada2a1471"],["/archives/2023/page/7/index.html","60cfc85a0f02f973a36af1f024505d15"],["/archives/2023/page/8/index.html","9352587ef5e836bdea3a944b7d79d4bb"],["/archives/index.html","8e70f0da1363f0e567f15fe259ce8cdb"],["/archives/page/10/index.html","d39edf43c698c08993c94672065f5af0"],["/archives/page/11/index.html","a391b156241f8ee66fc2ea19c4571b05"],["/archives/page/12/index.html","90ca87f31ad7b41be4b0c1f527aa7592"],["/archives/page/13/index.html","ac3b5e4c26de84fc865485fe752f9c18"],["/archives/page/14/index.html","5d8ef97e202e9a9f6f881dabc007012d"],["/archives/page/15/index.html","ef4a4f8e0e5176d42755ad2861a760bc"],["/archives/page/16/index.html","40fb670e2a0ce10da09c94b9c6740266"],["/archives/page/17/index.html","0880fc708a9af14573002f558018cc0e"],["/archives/page/18/index.html","12b2df3989ab6e50edb4cb9e8eba29be"],["/archives/page/19/index.html","6ef7317c6ca2bd799bd850c4eb89502b"],["/archives/page/2/index.html","cf8f95d835af873176e66f04760d388f"],["/archives/page/3/index.html","8b851a5341f553c431ce447685f1f656"],["/archives/page/4/index.html","59ed935ed3c6463e0e8bfebb0ef7883a"],["/archives/page/5/index.html","3f6031fd19c5a6a0f979203ef7a50322"],["/archives/page/6/index.html","48e2338d5bb56a4e61360eaa66b0f083"],["/archives/page/7/index.html","0e8301935b36b5df65dd48ce28db1d14"],["/archives/page/8/index.html","77198bae7c6adee2dbe4d14958ff6756"],["/archives/page/9/index.html","3bee62147997ed95d61874f234295f16"],["/categories/Devops/CICD/index.html","5b3c99ecec4711b2e2980d8c221063df"],["/categories/Devops/Linux/index.html","016c3e3784f1c809ad16906eba831c16"],["/categories/Devops/index.html","cb7e95fc3f33a1fa2aff1f0250e870b7"],["/categories/Java/JVM/index.html","ef57e5b6a38e4cdd6d5661ab7b453459"],["/categories/Java/NIO/Netty/index.html","133e42f6bbf59fe87858c48b1811c6d4"],["/categories/Java/NIO/index.html","c9206e10c178bd2933f24307d5812741"],["/categories/Java/NIO/原生NIO/index.html","0aed4dae06dad740e1b09339e3cb8644"],["/categories/Java/NIO/文件操作工具类/index.html","1863752b1bccbfd87bf85bcba4011f7a"],["/categories/Java/index.html","7af4032a5dfe04f3ccfd147b951b2552"],["/categories/Java/page/2/index.html","34b28505e67f184e68ee7b4667832233"],["/categories/Java/学习路线/index.html","462d8241299b4983d0ce81e5a6666b7e"],["/categories/Spring全家桶/Spring-Security/index.html","863dabb0133b07b9c13379a325155d99"],["/categories/Spring全家桶/Spring/index.html","7c895bdf99cfb92eace8e859df229ffb"],["/categories/Spring全家桶/SpringBoot/index.html","642a7f4e4e141b15d258e4f1662e9fd4"],["/categories/Spring全家桶/SpringCloud/index.html","8a49677e22aef0a0575bf1cbb41f638b"],["/categories/Spring全家桶/SpringMVC/index.html","75b21f0f9100bf066bc95ee498e0502d"],["/categories/Spring全家桶/index.html","47df12b2ec4d138d8f6ab14a8af6ce9a"],["/categories/Spring全家桶/page/2/index.html","8efb99aa894179e93e527a0b2101290d"],["/categories/index.html","0b91608c40173993de1f63da670995aa"],["/categories/中间件/ElasticSearch/index.html","b1d72b14ef848d0f5859b17fd9ac2e67"],["/categories/中间件/Redis/index.html","a1f7e77de4b4d2486580c7aef305de96"],["/categories/中间件/Redis/page/2/index.html","5c31a36026aef667710784c89a00a58c"],["/categories/中间件/Redis/page/3/index.html","e0c0c90863b53ce31aae420799b31f79"],["/categories/中间件/index.html","892ae6627beed6c84d728bd8257a55b7"],["/categories/中间件/page/2/index.html","d713849eecf0f7ca83cbb3093fbcc5f1"],["/categories/中间件/page/3/index.html","13c146ce702137ef572d58509adc4dbc"],["/categories/中间件/page/4/index.html","8c9476e32949dc30070af7814c33f770"],["/categories/中间件/消息队列/RabbitMQ/index.html","7aa1526ce0ecd88b11394c86060c0786"],["/categories/中间件/消息队列/index.html","c99788055ea179133d7941232351d954"],["/categories/前端/Mock/index.html","8f0bfa8cc05cf32bfbd18d972a71bad8"],["/categories/前端/Promise/index.html","f07ca0a33da2f20f3ecd462f37239774"],["/categories/前端/Vue/index.html","999209c0af1ead14e53971c512f4a611"],["/categories/前端/index.html","dd1e8729a6a3d3205d846d132e4705d7"],["/categories/前端/jQuery/index.html","1c11aaabffb56b5285939e0cd79f70ec"],["/categories/前端/page/2/index.html","4c82d0bb05d50add95a7c15764c21f06"],["/categories/前端/原生基础/index.html","c817d6fd37c7ffecb71f888737ead7c2"],["/categories/前端/异步通信/index.html","478fb530176903427a99e5e584e99f32"],["/categories/工具使用/Git/index.html","24250d21c37014e671fa9386eb914405"],["/categories/工具使用/index.html","40c8ef04ef47df7a50f93aba7088463c"],["/categories/工具使用/markdown/index.html","96a0ea4be33e0ab96988a60c0c4a6dd8"],["/categories/工具的使用/Docker/index.html","26967e474f973896b1c5e9ae84c45156"],["/categories/工具的使用/Nginx/index.html","70177005d9b3d209eb564e03fde91e1f"],["/categories/工具的使用/Swagger/index.html","fdf433f9a51db44b97c1cc59009c8fb3"],["/categories/工具的使用/index.html","bcc02034dde0b124dd86578b26286283"],["/categories/工具的使用/博客搭建/index.html","7c6548d14f23cbf713ddc64e0070e83e"],["/categories/数据库/MongoDB/index.html","9e5efc58c67d21445687ed2becb4f94c"],["/categories/数据库/MySQL/index.html","be4dd6fef0312e1827d31b64e64cbd7c"],["/categories/数据库/MySQL/page/2/index.html","c83960787fd800ec95aff848493d5f28"],["/categories/数据库/MySQL/page/3/index.html","837c48f3d5bb4a3e99ec6373fd199f1f"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","603040054b8dea2630d1e4f703f65368"],["/categories/数据库/ORM持久层框架/index.html","a7baedc66da6145f1cdd8ffc2bc410e2"],["/categories/数据库/index.html","521b3bdc143bbaa1e8dfe7e46d7c334d"],["/categories/数据库/page/2/index.html","d3fa202b40f5a4041b1cd5771edd0af0"],["/categories/数据库/page/3/index.html","6726a9829c1fd0dbf6cd44d80507e432"],["/categories/系统设计/index.html","baf1c5ffa8b903419b740e178bfa8ca0"],["/categories/系统设计/page/2/index.html","211de972f1d4c055664955cccbee5fca"],["/categories/系统设计/分布式权限认证/index.html","f4beb091f73ff6786d8d3d45bfebea97"],["/categories/系统设计/设计模式/index.html","000b894a96394a0de7faa4c06751e343"],["/categories/系统设计/设计模式/page/2/index.html","a2cffb42b0dd7a5ef1f8ad670bec70e8"],["/categories/计算机基础/index.html","b77267a5b4f4af5be15cf835cd56e089"],["/categories/计算机基础/page/2/index.html","351cf1dbe750827801468e715335c492"],["/categories/计算机基础/page/3/index.html","4b7646b7ecbff8fe924fc59a3aa30618"],["/categories/计算机基础/page/4/index.html","09689b911ef5200dfc8efacba4911f71"],["/categories/计算机基础/page/5/index.html","0ee64c69bcdfc433a2ec5f568af29524"],["/categories/计算机基础/page/6/index.html","beb24ea89f415dbcddafabf7c6edc3b7"],["/categories/计算机基础/操作系统/index.html","fe6645922700bab2289951cb1db17f5b"],["/categories/计算机基础/数据结构与算法/index.html","83bd45aa20d42ca7222e28f2419da1d8"],["/categories/计算机基础/数据结构与算法/page/2/index.html","a4f4a081965cea3ce01b359cc3c2626b"],["/categories/计算机基础/数据结构与算法/page/3/index.html","71e248e996a68fd957feca56d2fc7622"],["/categories/计算机基础/数据结构与算法/page/4/index.html","11f08fd4bef49ba98429c356ff4e56ea"],["/categories/计算机基础/数据结构与算法/page/5/index.html","1586068bd4f9eef7d429ccff951e9dcc"],["/categories/计算机基础/计算机网络/index.html","6c980be92e874ec3df08e3597e8f8859"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","7fb2c29e586077c574f15a723009152c"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","462f2acc43c61df78229b873616b741c"],["/messageboard/index.html","96e11a6d86f57d144414c2df2e5ac4ca"],["/page/10/index.html","9a1ba2d75546c90b2156d3bab017836b"],["/page/11/index.html","ef7bee8a7a7fa3219e4a6047fc6c19ba"],["/page/12/index.html","b544670dcdc734fd4851f3c5fbb4183b"],["/page/13/index.html","281abf27863d2c2f3a0638b0be9da8be"],["/page/14/index.html","5eb0373aebd1e8d58ec3aa2267e1c253"],["/page/15/index.html","2a247ed40b5e6424a70d6065cfdd0c88"],["/page/16/index.html","cf3ac85ddc50616babc4b3ae0204f2df"],["/page/17/index.html","5252c98e75a904a9e251038ba3e86207"],["/page/18/index.html","8dca2114257a2affcee2476326c4a1ae"],["/page/19/index.html","90962bba4dca0490c2e20641e2960634"],["/page/2/index.html","311b9e66f97a08b0770953db0a3d8969"],["/page/3/index.html","5dbf4b3efea1ee848daf0c76ff82d8ef"],["/page/4/index.html","f3260d6ef1498d42adf28d34365bcf57"],["/page/5/index.html","cccef1d3ab35081b42c2ed3bd136c8c5"],["/page/6/index.html","0b6548c676bbaa5365a964a1abe3f5d9"],["/page/7/index.html","4f028c05145a051df39e6667bd340741"],["/page/8/index.html","737ba41761a926c4bb28a109ffb71093"],["/page/9/index.html","835ab1e3821a0ac7a605a9a485647c5c"],["/sw-register.js","60e8e8bec1c1bfc79dec9f38225a7499"],["/tags/Ajax/index.html","e247c4ee3be27734b8fcb072dc0e8ced"],["/tags/Axios/index.html","4ba22bc0e09a2cc2aa67da5911c8d559"],["/tags/CICD/index.html","cb09c8dc710d4ea1c23e554cede9933d"],["/tags/Docker/index.html","74ad2035654ebf81909efa435d67ca0c"],["/tags/ELK/index.html","b02a0f0f72a3bf7a7b0ba44faae77046"],["/tags/ElasticSearch/index.html","4a6bec64b1913f31aa8440319c8fc9c5"],["/tags/Git/index.html","e690d3b43eade88b6042eff472bdf759"],["/tags/H5/index.html","0f07c2706e0a1543d0ec3699927f0476"],["/tags/JVM/index.html","e263188a9f393b8067b6aa15c29d6d14"],["/tags/JVM内存模型/index.html","5bb4e72873733f75c03c54d003c7a926"],["/tags/JVM执行引擎/index.html","39240962ec4514514cf27e98b987941f"],["/tags/JavaScript/index.html","19adca0ff7df0452a72bef6555139212"],["/tags/Kibana/index.html","2bbacbb0a54e8afdb5dfd7775e38686f"],["/tags/LeetCode/index.html","b7b199ed08745ecb68b12e3e1fa51f13"],["/tags/LeetCode/page/2/index.html","e61f8dc457b3b15f1c3be03df089c143"],["/tags/LeetCode/page/3/index.html","004b25d602fbe5679314371db527cfea"],["/tags/Linux/index.html","dbb25a459274ffdfbad7047f842c7667"],["/tags/Logstash/index.html","c077c3ba6f927a5135fcc65bbddd7121"],["/tags/Mock/index.html","6ff36f543f73365e8e19b754a398cd0c"],["/tags/MongoDB/index.html","87df08b3e29d0eb4e6d0df07c2a1609b"],["/tags/MySQL-事务/index.html","0e42021f8c6319e045c79ca3b7e7de89"],["/tags/MySQL-数据类型/index.html","8a121667161ad35d795a5d8b98f44df0"],["/tags/MySQL-日志/index.html","31697306b62da17fb080c0407d948e28"],["/tags/MySQL-索引/index.html","9fffbc3a2b853290313583910e629d0a"],["/tags/MySQL-锁/index.html","68300a1bc8d61383374fca650f40aadc"],["/tags/MySQL/index.html","a3216d76b1ac7463b914f7f799dbe393"],["/tags/MySQL/page/2/index.html","ff1a0bdc18d90a1dd8920fe611e95af2"],["/tags/Mybatis/index.html","b716067309ebe4bbf3de4e9b4dd3f355"],["/tags/MybatisPlus/index.html","d479438a4d571eded4df5ce28cffc2c9"],["/tags/NIO/index.html","63d8116c2ce5b3903aeb2acbe10e7aa1"],["/tags/Netty/index.html","608996678b5eece3139c96e5360a24db"],["/tags/Nginx/index.html","8f759a9c31a46982261cdeee25eba0b8"],["/tags/Promise/index.html","d8ed51efd2b3fc4da10e68f3b8074cda"],["/tags/RabbitMQ/index.html","5d4ffa2eadbc17e95bca279fb3a75ba4"],["/tags/Redis/index.html","4525a18e977735dac28a5291089bd0b4"],["/tags/Redis/page/2/index.html","b592d3fa3eb127d7ab12948592711a9f"],["/tags/Redis/page/3/index.html","fdf859bc673a5ce8370e5ebe565311ff"],["/tags/SSM/index.html","da762ef5dbb614191a0ec1f6f65fe624"],["/tags/Spring-Security/index.html","cbff91858b92d64a0dafa312cff200ac"],["/tags/Spring/index.html","78dcd70e29e9c47877d4947459e5bfa8"],["/tags/SpringBoot/index.html","dfa4b0908c97990005a130169fcde21c"],["/tags/SpringCloud/index.html","bd44f8c9276361095821dd466caf83c7"],["/tags/SpringMVC/index.html","f2c40d06444cf22b9a8f4fe5d08412c0"],["/tags/Swagger/index.html","7a42f96142c7c57f6974dc115b6422ca"],["/tags/hexo/index.html","616de6ac9cbfbd84f43c17cafa607313"],["/tags/index.html","249a5f0773d9659da4eaf953cc055f59"],["/tags/jQuery/index.html","97cc49c64433db4f52e9df61dbbf70b9"],["/tags/java/index.html","bbd953c322801482908c2ff520db138d"],["/tags/markdown/index.html","3d90540cda7c56f29ce2591216ad24fc"],["/tags/noSQL/index.html","3ee36735d2aabc70e4a2efa96f04fc6d"],["/tags/typora/index.html","8e8b686881db3610864eeff5fddbc652"],["/tags/vue/index.html","692345592d7cd60bbe1c39be11ccbb02"],["/tags/享元模式/index.html","06edac7b04227fc6c46f598cf8ee2e4c"],["/tags/代理模式/index.html","ccb7a7cb1fdfd454be7202e5cdfd5c6a"],["/tags/内存管理/index.html","8af4c04d23cc105ba15b20b8a267955f"],["/tags/分布式/index.html","e95658e69b473fcdf2c874ab34236905"],["/tags/分布式系统/index.html","c9493b1f6f0351814b0f9c6edf821e69"],["/tags/前端/index.html","2633bd368a5b5bb4f6fd09185d5864f1"],["/tags/前端/page/2/index.html","c27ddf57a70aab7c76d3fdd7417709fe"],["/tags/博客/index.html","0f67410e9f4d95dd0fb1d50b37dbc64d"],["/tags/后端/index.html","040d1473856727c03f43be9c6ca9c6e4"],["/tags/外观模式/index.html","59e65aa72bb6ba869388c26152bd78cf"],["/tags/容器技术/index.html","1470af8c02a4828bbc8804c1fbd75cca"],["/tags/工厂方法/index.html","9f273c4c4c54b5ac4aa5c9ca2427e5cc"],["/tags/微服务/index.html","a22b4f5e15a5b1ab9d6d6f91474278e7"],["/tags/抽象工厂/index.html","be3acd77b92c0990c19814d470625f2d"],["/tags/持续集成持续部署/index.html","ceaae5512d4e56672d2722955a2eb58b"],["/tags/搜索引擎/index.html","8b0881da80edea1cef8c2904f8ef8293"],["/tags/操作系统/index.html","1bca02b2aa2e09bca15eb34700761b15"],["/tags/数据库/index.html","ba1db9f99213d4ce2554ec7737a48e34"],["/tags/数据库/page/2/index.html","bd09d58c092315a95def76b438fc2f82"],["/tags/数据库/page/3/index.html","ea49c85cca0bc23153e0f3fc62706895"],["/tags/数据结构与算法/index.html","1f2db533586170987a79f1d1b88d8801"],["/tags/数据结构与算法/page/2/index.html","cc12fd5663c82c870fd637050f1e2437"],["/tags/文件操作/index.html","d79f34577236d6bbe0f339b026a3ebea"],["/tags/日志/index.html","403912ebf605437bbb40f820f569ff0a"],["/tags/服务器/index.html","40dddfe581d50facababf2f5038052b6"],["/tags/权限认证/index.html","bb6f8921808b1b74c2e4ae8253397f8b"],["/tags/桥接模式/index.html","065f708735294013257d15006fd3dbfe"],["/tags/模板方法模式/index.html","179abd61a032475b120e952f0e5f9d05"],["/tags/死锁/index.html","527c29eb18e43f8fb270c0d40881d671"],["/tags/消息队列/index.html","0c7fe8ffb0c4f8c596b57def7114cd1b"],["/tags/版本控制/index.html","159be05f5a9400ad3773664c587a32ff"],["/tags/策略模式/index.html","002221462770670ccf7784a90641ffb0"],["/tags/简单工厂/index.html","a690ca817ea3bbd74b5f8ca849fbf3d2"],["/tags/算法/index.html","216f3d5e92bdd6263d6bd9c756d634c9"],["/tags/组件化/index.html","c009cf42363e555d28a994cdfe10e7c2"],["/tags/缓存/index.html","fc12e692f6325b811fb85bea0da198f1"],["/tags/缓存/page/2/index.html","b1404b8c4670cb9c87c338c7cb2d9c7d"],["/tags/缓存/page/3/index.html","24cd36e2d7fa102b3584a8b990337d26"],["/tags/观察者模式/index.html","a1bc7dfa776d9481c2c51399c6c932a0"],["/tags/计算机网络/index.html","6bcbb5052b69baba0416f5c639509f56"],["/tags/设计模式/index.html","ecd34160665fd6e22a9bba93f78198e3"],["/tags/设计模式/page/2/index.html","773f8ee2841699c2a61262978d2831b1"],["/tags/进程管理/index.html","b5d59e631baba06322289e9e5e7fb63d"],["/tags/适配器模式/index.html","31d5ee8de27d98ce415fd1c477f48360"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
