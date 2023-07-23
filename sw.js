/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","d48d93c88da37b972b58920de815ee10"],["/2021/02/22/工具的使用/博客的搭建/index.html","dc183acfde94a59501f7d0cd495242b0"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","915b996450027b558081c745380379de"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","a7b5c6a7e42dd97c41618092ad7cc0d3"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","1b4bf19e26ba89cbf0c5e908b14d8803"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","ca7e3b28b17419bedd15af7de2e5e6b8"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","9425e330f9f912f6f2670cf4be32b465"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","4f5dc008925ed977c27e5cb66e9722db"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","b1d86dbb2b1cafd9e9f700d69b0596dc"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","068caf6a0b7347c21bfab62173499349"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","623d9f7735eb0144f0fed88efc5a06e4"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","bb3b3144cd6a44aebc43884c2aaa39c9"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","486c06a6891472b958c3ce0284682a82"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","3cd77f3d00dd27130799b6f33bdd805b"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","9f7c8f0e1c442ab55a12ae5c64e62808"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","435219b70b3b97039a474a293ad78cf1"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","7f5a1437f2f8cce1ddd204cabda2b8db"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","8e9dd3437c99a6122e8e17ada282159e"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","55147fcdf6bfe5c91383f26327bf6659"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","6a44e87f4e81bee0054ebce4db16b1cd"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","b02623bc4af532e248de59ce5688792f"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","c61dd8e4e4c99c6c9d246871d55387c3"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","50aa5d68d7c22a3ae301f6586047e635"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","6a8b882d3276df3730256d97d67fa46b"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","89657e644ace2c60ec67679e49be129e"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","e2988c33850702c186b18ee1b5d812f9"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","663fef3740ffdd681f10409e49e8287a"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","348fdf31a3d4b96ea06abd69a0dccaeb"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","3d5710c19ee48d7aa36f81a795dfb311"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","3f8fb31275018880e210f372d2a79029"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","f42937809db4563246202aecddd42ea8"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","ba73e8c95c5eba290de53a3c422c89a8"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","2bd5c6cd7907139847e037ee815565c8"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","c1bd1775d4c5c33af0b90530976e2dbd"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","0824c09e6abf58f4f51eaa33c37153b8"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","0e4e3d77037ceabac448fe894e083ad6"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","6a2d2a73c907e2a584cf6f8645ec8189"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","3fd39ae5433eb41f1bbddbaef69e199b"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","17ab9090e3718935de435ebe2128b50e"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","59465b4598e43365b6705c768623ae15"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","62eabb732c955539d6a297b550463a71"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","68bdb659562d84481409515a4aa72f2b"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","863dcce14d9c824fbf3230adef87e1b7"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","7f38eb992d8b56523a30269944065359"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","0837671bf335968e47957a3d0e4dcee7"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","6e9f1708d979a449cc409e2ba369e838"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","9a373711aef3cb81418288e3b26a483d"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","8ab661234ad2d9e7d45b28101a81c7f8"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","ee2e253e69e73eb311c95083c633ee2a"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","880ad31f2d1e83bc0fd59c335a044d28"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","4d8e8ab939538fabc08e799ce1f865b6"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","edc20077f2f875134ecbc15e26f2a455"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","4425982401d32194c686fceaf9cb9299"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","5d86f7f2badbdd44000ace62226d3952"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","d527f506e65c357ad112e17f5925d3e7"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","a390d2250425895de7082a2319886806"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","47a7ff0631eb98f7985c3019f8210e04"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","d0ef27eaecbc9ac65931aa1d0510f37e"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","d6d82478f794ac9f261e3b4ec5318368"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","093b5e8c4869dd74100e0e1025b48b9c"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","d9ee86a9394cb927ba040da6af70e9d5"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","c4be89edfe75b23c803894c8d8689188"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","0417c0934dc263da93c4c618fce2e3ca"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","dfbe0b1a9ea25109731028d4a68a38ef"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","a2fdffd4000d8818231da85918ba6ce2"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","e81bd8837b88ecb90caa45d13f2af6be"],["/2022/08/17/前端/jQuery/index.html","173a3d26a3168f65c79fcf816dd68682"],["/2022/08/19/前端/JavaScript/index.html","0170bfd414cff4c22e3ce7080ffd4ffc"],["/2022/08/22/前端/Ajax/index.html","cc598239a672d22977053b8b904a16e6"],["/2022/08/23/前端/Promise/index.html","640c3c0467dd5c88b0186c6c8df84105"],["/2022/08/24/前端/Axios/index.html","cbf53011dcc96ce6fdd963fb097a4810"],["/2022/08/25/前端/H5本地存储/index.html","bca3a23139422c7e3a9f9ecec4eaeb46"],["/2022/08/26/前端/mock/index.html","f907c7eb29c2264ce22b9c19f0f234de"],["/2022/08/31/前端/vue/VueJs/index.html","de43b07d580d0ffc8cea816776c65f1d"],["/2022/09/01/前端/vue/vue组件化/index.html","631c260cb7cd6f4b15f2f6af4794b104"],["/2022/09/04/前端/vue/VueCLI/index.html","682daaf85c5ecd296c6d779b8c5026bd"],["/2022/09/07/前端/vue/vue实现动画/index.html","5be47668bf1ca219d473827770428f2d"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","1a94a92c3e6a76afe7283bcdbac89a4e"],["/2022/09/10/前端/vue/Vue异步请求/index.html","ff599b1a543123671597617b7891c240"],["/2022/09/11/前端/vue/vue-Router/index.html","ca074bfdd4e5601cb2fc6fe7a70c74da"],["/2022/09/13/前端/vue/Vuex/index.html","3ee96e84d1f246d00b1e4b0b4d79e629"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","7003693fbed14db53ac70085b7d36bf3"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","f08d6454ffc544802488f968ee639664"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","b20e3eb32b8be878ad33dcba92c1e628"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","020826a8a4ef998000136f2dd0222571"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","bbeabbb8efced39778100201a776f521"],["/2022/09/28/DevOps/Linux/Linux/index.html","130fb0a716fbed3b20a69daf5a7a75b2"],["/2022/10/02/中间件/Redis/redis基础/index.html","5694aaa91acc35891591ef9499ee64cd"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","0ba77ab662c29a9f61ca0fb704646bc6"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","834235343ddb4e7b7773cb0ffc144418"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","b2b02ffdac4f58b32fd4eafe4aa01a33"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","1f96387a2a93dc6055fc47263388a970"],["/2022/10/17/中间件/Redis/Redis集群/index.html","560b15449df926a30cc6305ee57d261a"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","a217eb7da294e5960f5f977a5135b98f"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","89aff7898285ff108d390436e59d88e1"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","2b8146a991656b33047c0416d7b09cb1"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","813f0578ae336987405f0da8cc8ac353"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","fd4610385d54b8d214f820a62c7d593a"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","50345847d9aa4f65060389ccedd79609"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","ddccc53a0c01f428cf82a1103f8e6f12"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","9312e9e40790dc2a10f496a0db8877a2"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","7d5a398be7b7645c26e4551053f5f4a4"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","55cb3cd88a1817dd1ea274e3307313b7"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","b9282977f47fdaf45ed7a5c9d39d76a9"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","9aad3d6ad7683d99729cad1f29af39a9"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","261db96f380196cb438d30acad7efcdb"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","da895cdde24feb06993ac34d547269dd"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","bd5f57021b571a688733fa828438d5a4"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","d9a183c2f0698c28d80636d977bae994"],["/2023/03/10/DevOps/CICD/CICD/index.html","0bb824b464677a966629ba598509703e"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","17bcf82b0eb810b56d3737d234b7f4d9"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","e1f6c1b1e1f634c7a89cca0070e04601"],["/2023/03/13/Java/NIO/NIO/index.html","819914a81be0bd89b5c7bb8ac493c5c8"],["/2023/03/14/Java/NIO/Netty/index.html","ab29f3eef63b88489d51d5a1c0572bcc"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","065d3b2a59031d60ac52c225c8cc0bf1"],["/2023/03/17/系统设计/分布式系统认证/index.html","94a8cbeadb92127688a9f29bcee72cc5"],["/2023/03/19/Java/JVM/JVM概述/index.html","61408e43578d5043117643b7f8ce69b0"],["/2023/03/23/Java/JVM/类的加载过程/index.html","88f2bdd59847360587ab9f17ed7f44b0"],["/2023/03/28/Java/JVM/对象的实例化/index.html","7270d72cdf4b73cd170e6346e8433fd0"],["/2023/04/01/Java/JVM/运行时数据区/index.html","696627a3af6afe05ab4a864fa30abe3c"],["/2023/04/04/Java/JVM/执行引擎/index.html","ce9c15f471f16cb1443cb5cc5f9d8517"],["/2023/04/06/Java/JVM/对象引用/index.html","0dba22352b699abac66e066a46accb72"],["/2023/04/09/Java/JVM/垃圾回收/index.html","e6c3824d68e79d24e6710cf7aa3da3b6"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","090629ae9353f4a79296a3288a87cdf3"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","203e60be74e78325e8493c609064adc0"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","b2821b2e938f9b5876c2a547f9dd4a41"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","cdaa854743444666b43e5523533b0209"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","2edddec0a8d6298fd678fecd3dbfbd32"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","95923fc5ea52143ee01b5f7dcaf83dcb"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","de5b8dc0172f2a22b01a380b1453bba3"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","8f67e04b87986e3f4739e546864244ee"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","d1c79d4e62c8fd107b90ecdd17ba7668"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","e293439ceebdaf65f07dadffdd1df391"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","5479b3804e6446759bb5e0c606f52abe"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","d1dcc9943b1e40d44fbd7bb741c9690c"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","8511a7786cbb1f29715ddc210491b231"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","6d3f9679bb9f51695ddb13b7be85170b"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","58333764981612f2debc82fceb8c4d55"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","91517f0f60099d95775126fac4a764e9"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","eff69be6d505045ffc0ac8650cef4cd0"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","df989f3dfda8a0af8b82632696f17302"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","7f579c89cdb3e8535f0dfa5b6c8b3338"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","3e3b1584d5b564296b9217b94a089dda"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","a395107e8874328ff9fe8e10e55508b9"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","db3ca9f077f78a56fef2bc5f4dbaf42d"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","28fd9c558d7e538a4a24592c813c8c86"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","3ed0c3bf20fdf0ffe97363aa476df84c"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","dfee4e69da33be315349c9369ad2aaca"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","4cc63bb28bbbd44e9a84960443ebe207"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","22dc68ad9be712c0c9a7ab04203a0571"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","ed6d649fe0dd5f1b9fe3b5da253cdfb2"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","53f2113ae389035ddf0d5220f734362e"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","23ba54d74dc9e61fd96dba5539b21ad1"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","642b9e135c0463c77b562a5b061396a0"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","980743e967f52e2279970ef37460a00e"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","4ed8b4ec561992b58623b0101343ada5"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","961568a05e253e753f43aa2e5843eb46"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","f9609ef2f7e75ec97a5a22745c99a64d"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","f591a5ff2b7e736fd7fe055267cbfc57"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","72c62733bf7ad03e4c494f2bce92a781"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","92dfeebce20bb0c8b08eca5042b8d313"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","8c57d48d43cc0c94c348a456643295d1"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","8194e3fe5a6074bfb7227f2188a0bf76"],["/404.html","ae54a3cd7c8ef2ae35101a2725fff9c1"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","9b3e8ce7f8f3375c2250f4f336b6e776"],["/archives/2021/02/index.html","df435a6385a4b1b7f6f3361869b362df"],["/archives/2021/03/index.html","43354343e1041ad500a85a07087aaf47"],["/archives/2021/03/page/2/index.html","d61f5f4e62ab99b542678bb3142a990c"],["/archives/2021/03/page/3/index.html","0738dfc9f3b0df5c5dd327d0778ed77d"],["/archives/2021/04/index.html","2a120c8e7bfe8788b99528f5a7fb7aff"],["/archives/2021/04/page/2/index.html","123d34378cff49acd3e84af26c657480"],["/archives/2021/05/index.html","4ba5d92b6368370ba8b7b4078a873b40"],["/archives/2021/index.html","32ae65ee59805fdec46caae3fa18dea3"],["/archives/2021/page/2/index.html","4bc2b0ce223cf95c711e9f41181abd19"],["/archives/2021/page/3/index.html","2a88ac695e479442b5cc67da6dc48df3"],["/archives/2021/page/4/index.html","7642cc28c29771c5fb392a2900af631e"],["/archives/2021/page/5/index.html","e8723fe6b0357d473c4e8541b40a94a4"],["/archives/2021/page/6/index.html","dc09f4fc0d1101aa5fd613447e67cdb5"],["/archives/2021/page/7/index.html","5a1a8e990dd8cb0011e74b3d672e24b6"],["/archives/2022/01/index.html","56e0f8b6a90d33d661f78074092054e1"],["/archives/2022/04/index.html","b1ff8b6cabd47cdc771663238dcf562f"],["/archives/2022/08/index.html","766603eef1f6405990648569b890aaf3"],["/archives/2022/09/index.html","93906092e739796b90d1b70fc00bffc2"],["/archives/2022/09/page/2/index.html","a902e890773923956eb83b664913450c"],["/archives/2022/10/index.html","5540d369a15721b107a2ffb155d2a1c9"],["/archives/2022/11/index.html","296f7d46be107e0478fdb8e30443cc89"],["/archives/2022/12/index.html","2018ec349b012ca316c44004ddde9e7d"],["/archives/2022/index.html","266050700aef66246e8b2e63ac4ea2c9"],["/archives/2022/page/2/index.html","15277663b75627cfbecefd5394ad2661"],["/archives/2022/page/3/index.html","3509bb931a363bb8de192edd4308a7df"],["/archives/2022/page/4/index.html","fe5812166c7b5981d02d260e7e77f77b"],["/archives/2022/page/5/index.html","8c6c98a036084afac35756989f216f96"],["/archives/2023/01/index.html","764ec72dce2518ee93a4ead090e11c78"],["/archives/2023/02/index.html","fcac40a5a2750823a71ab721a7b5e039"],["/archives/2023/03/index.html","97644eb250526848c0df934ed85bafce"],["/archives/2023/04/index.html","f37766f2ae1be9bc5defde98f680ad6e"],["/archives/2023/04/page/2/index.html","732be5f56d152c9e26c7e2501a36ffc9"],["/archives/2023/05/index.html","e4a8d4fa2c4d10d22550fc5b102d6785"],["/archives/2023/06/index.html","e105cdf2ff3b7779da60508665931c25"],["/archives/2023/06/page/2/index.html","fdc781ada77276fefef8303fe65373bb"],["/archives/2023/07/index.html","fad4a0903ba659c98ddc1073f3605a95"],["/archives/2023/07/page/2/index.html","e11e1a41f1e7e09c0f8d475fadc687a8"],["/archives/2023/index.html","4bbd2dc3094454e2ab3dba1248861f3d"],["/archives/2023/page/2/index.html","eb7605c17af526e2a0230dbefd67b0af"],["/archives/2023/page/3/index.html","def92bd3e52461f0a4094a6a9649f1e0"],["/archives/2023/page/4/index.html","28fc314a4c3065901cf280ed4c98dbe8"],["/archives/2023/page/5/index.html","9073ff12db628ab2a16d394d6a2816c0"],["/archives/2023/page/6/index.html","636f01d50f5a63a91aa9305e51777ad4"],["/archives/index.html","f5d89f0bcdb7cf965ca8931803257fb6"],["/archives/page/10/index.html","05a502168cfb4ef4ed632a0346346e43"],["/archives/page/11/index.html","0b0f1e6eacbe77cd72bc82f2f5e86d24"],["/archives/page/12/index.html","404c8faf2eb747acb132dbaa02d7ffc4"],["/archives/page/13/index.html","9c7eace9508e66d8373216d024657ff8"],["/archives/page/14/index.html","54c2d3f3bc03b6baba79484e952a744e"],["/archives/page/15/index.html","0097836e695cd1003c0489a8f9562365"],["/archives/page/16/index.html","ad759720ff7a8e9da7bbe4d0722cadc9"],["/archives/page/17/index.html","d8e3ad0120c3718fb2a0364412edffe0"],["/archives/page/2/index.html","df34c96f162607e9cfbc9660b85804c9"],["/archives/page/3/index.html","b9e5d969810e822115ee86b112b8d8e2"],["/archives/page/4/index.html","f85b5ed191df70fa89a9142bd609a907"],["/archives/page/5/index.html","becea2d1caa6f6fec1dbf8378f6f60cb"],["/archives/page/6/index.html","4a32423e07b6ecfa5964be9f63688d88"],["/archives/page/7/index.html","d4af0f7e4c1f5a1470c559af343e6655"],["/archives/page/8/index.html","4c2e993b5f6cf0c78e01f70e8744fa0b"],["/archives/page/9/index.html","f3dec165108baae4f168c0f600b1d972"],["/categories/Devops/CICD/index.html","8bbf97df7356dc2ba7973b4637d6ead1"],["/categories/Devops/Linux/index.html","291cde9f79a12067c287a6efe7e689d1"],["/categories/Devops/index.html","a69e3b299bc7640db8f702b75fdb1640"],["/categories/Java/JVM/index.html","0adc97810300d8d8a983e77f03e79c3e"],["/categories/Java/NIO/Netty/index.html","405f454a42d0c62cda7f6b39b6547432"],["/categories/Java/NIO/index.html","a5c27e3baf3dd12c6f3795b2186c54da"],["/categories/Java/NIO/原生NIO/index.html","297ef6b59e71ffd13c6c672088fecd82"],["/categories/Java/NIO/文件操作工具类/index.html","9c322016982e1dfa8a2b50350d3a7352"],["/categories/Java/index.html","0ca904eef5f90b69e52e93c2c74a3331"],["/categories/Java/page/2/index.html","f8b397381fd97c98effc7d35279f3dec"],["/categories/Java/学习路线/index.html","a2e7414c74e86a46cc300d632b6226de"],["/categories/Spring全家桶/Spring-Security/index.html","48b5353388dcc0d0cf006f594d0320b9"],["/categories/Spring全家桶/Spring/index.html","f41b5388e60d6799924053b3a8a2f502"],["/categories/Spring全家桶/SpringBoot/index.html","1f46bd1078aebf9409e48dfc9c0116a4"],["/categories/Spring全家桶/SpringCloud/index.html","a74b1ee535b6eb7e5ecad238689fb7dd"],["/categories/Spring全家桶/SpringMVC/index.html","71ddeb7d0cc10c4ad93f7b9b2dbbb367"],["/categories/Spring全家桶/index.html","b0fd144e8c2728306fc9cadd7babf5fe"],["/categories/Spring全家桶/page/2/index.html","d2117d405549d66ac9807daa68889120"],["/categories/index.html","f30d7a494ae2a1bd951d98d34bf2afdf"],["/categories/中间件/ElasticSearch/index.html","82ebba64a430ee0a34c1b32d62dcdf35"],["/categories/中间件/Redis/index.html","a2f7a584cb328a15fc6ec8f144dc9ee1"],["/categories/中间件/index.html","90ef0093c915aaaf112b4496a96ece48"],["/categories/中间件/page/2/index.html","652f492121c687c670772abedeba0086"],["/categories/中间件/消息队列/RabbitMQ/index.html","e41219f04c97d3db20ae18d0073c4776"],["/categories/中间件/消息队列/index.html","18fc2bc6d34300f604e59d36b87aa118"],["/categories/前端/Mock/index.html","fc5b83695a6befc5022ed187a314760c"],["/categories/前端/Promise/index.html","a6e3fb95ab330421d14d156ce42207f5"],["/categories/前端/Vue/index.html","536980d382e22281862831fa92e7afff"],["/categories/前端/index.html","82760e438117dc97ddc3aa7986c85825"],["/categories/前端/jQuery/index.html","bce604cacf98e01a56fa26a82ff9735b"],["/categories/前端/page/2/index.html","1ec22861ac5b11fb16af6ffebe23066b"],["/categories/前端/原生基础/index.html","29abb450e566371a66737e32f2af284a"],["/categories/前端/异步通信/index.html","5d33ba74b8c94f38ebac29dc2eb317a1"],["/categories/工具使用/Git/index.html","45fb6c5efcf2b7b121094ccf0988bbaa"],["/categories/工具使用/index.html","f846b17055e4ce0350946f48cba69c18"],["/categories/工具使用/markdown/index.html","e764d39e215d120bdbe218ddf10042db"],["/categories/工具的使用/Docker/index.html","270f7e366633ed2683e2cda5d6518d89"],["/categories/工具的使用/Nginx/index.html","14e7c57385e4c11933b18885bbf0e35f"],["/categories/工具的使用/Swagger/index.html","23c8e5300eae64a797c64bd19040c801"],["/categories/工具的使用/index.html","a4aaebffd3ff322acf528f26085283cc"],["/categories/工具的使用/博客搭建/index.html","4845e7722366b28e86e822be211539f6"],["/categories/数据库/MongoDB/index.html","6edc846ab2ad754099212af920bc6431"],["/categories/数据库/MySQL/index.html","450890d3748706b643955aa91d317d31"],["/categories/数据库/MySQL/page/2/index.html","8c6c5779010239b3640e0d59a1500254"],["/categories/数据库/MySQL/page/3/index.html","738eb56e6c25b18138bfca976614000d"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","84b44f7a304fe15f8e05d4b7f2e23d38"],["/categories/数据库/ORM持久层框架/index.html","00caacb668701d2995b819f01f3e9499"],["/categories/数据库/index.html","4659a66c6dfd68fa74d893e0d34af787"],["/categories/数据库/page/2/index.html","dce9dd75ef1c281db39197f2774f9ed9"],["/categories/数据库/page/3/index.html","dabead3dfdbdf7af18fbc26afcf7a5b4"],["/categories/系统设计/index.html","3cfc92696bdd6cb6bea78a5fd3402f55"],["/categories/系统设计/page/2/index.html","88d075056586dcc212967651a2ca1bf9"],["/categories/系统设计/分布式权限认证/index.html","fa231dcaf91c49839f3fc499cf71fde5"],["/categories/系统设计/设计模式/index.html","10a1246ebf68c9923feec47d71e0600c"],["/categories/系统设计/设计模式/page/2/index.html","1bca12f5229e3b2bc7645ce2eeb8dc64"],["/categories/计算机基础/index.html","409a183da237d1591a99f6142c253154"],["/categories/计算机基础/page/2/index.html","31a17c52929b3bd2d637205b33879092"],["/categories/计算机基础/page/3/index.html","47d4786120216b5c1e816425bfb57564"],["/categories/计算机基础/page/4/index.html","ce902511900cd03c8f6bc8d67ab61c25"],["/categories/计算机基础/page/5/index.html","07b9f1bb2f66f89a0bc7b633f639b5bd"],["/categories/计算机基础/page/6/index.html","e6e968d207ee0d78043f858c0fd42833"],["/categories/计算机基础/操作系统/index.html","effe192b29d69e6adca0033f8bb9b1ed"],["/categories/计算机基础/数据结构与算法/index.html","6cb7d704fc06e00b85c431a60c69b718"],["/categories/计算机基础/数据结构与算法/page/2/index.html","d28deaa63b45b2cfb3da7f58cfb5464b"],["/categories/计算机基础/数据结构与算法/page/3/index.html","b99e72766b0a0fcd19a5be37e2392df6"],["/categories/计算机基础/数据结构与算法/page/4/index.html","c25e83ff5ceb3a9886360009365db501"],["/categories/计算机基础/数据结构与算法/page/5/index.html","3399184ee4f445856d6607c9550bf55e"],["/categories/计算机基础/计算机网络/index.html","b9646d6b9eb4115f9d4b6d7b32fa657f"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","3e3275429690f11056e2f67f445336ec"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","b4f7581b9dd0ed8f67c83dafc11a099a"],["/messageboard/index.html","a0ea53d791f8a7a58a4975cf3636a6ba"],["/page/10/index.html","62c2ce4e15806e7179d61f142d7011b9"],["/page/11/index.html","25b0d8e553764e29e1bb534a52b336ae"],["/page/12/index.html","3804c5df1070a5bda7bd5d61b27b5400"],["/page/13/index.html","eacc110a683103e59d880d7627836904"],["/page/14/index.html","4a5849830359dc09062d4cdafcd205b6"],["/page/15/index.html","3a6ef94baacb580223614c96cdf5d375"],["/page/16/index.html","d9a7077c915911b0660c614e8f5ebb79"],["/page/17/index.html","12ea552a3bbde506fe130a4b27241059"],["/page/2/index.html","f3ee6872ff6ba92028b30c21a18ce321"],["/page/3/index.html","a67bacd9fd6cbf7c82ec51ac87ae5db0"],["/page/4/index.html","8798f9c1ad7ada914aea786079f628ce"],["/page/5/index.html","82d97abf884712fe9192a73bab6a4e1d"],["/page/6/index.html","4105f47f91261f674e7d9b13748edf8c"],["/page/7/index.html","df929f4b6022c1e50143823e8f616207"],["/page/8/index.html","be9445662c92d2745f1e2e521ba6046a"],["/page/9/index.html","4ed5cff369b5e7cb1db487d680bde7f6"],["/sw-register.js","cd05f61e48bffa34bfcec10488fefbce"],["/tags/Ajax/index.html","8222e42e46508c59412efc4acb8cff20"],["/tags/Axios/index.html","666799ae7a3464034388046a061e48a8"],["/tags/CICD/index.html","fb91a5583370e4afb4ce6150e4e5babe"],["/tags/Docker/index.html","dfdf5bce5b61cdbc506ec3ea97bc0c41"],["/tags/ELK/index.html","26a2a573bb7b6651bcf8e0e43218ed40"],["/tags/ElasticSearch/index.html","8ed5ece793a99c1f568f09b17724619e"],["/tags/Git/index.html","8db6d3a5f8f5c3e23c0bea6f3bf3476b"],["/tags/H5/index.html","ee142cc70d7364392ec92124f39c1775"],["/tags/JVM/index.html","3b21d1cd6bb07eb0a19a9ea7476d29e6"],["/tags/JVM内存模型/index.html","067ccf7b51f51275b45bed64148b044c"],["/tags/JVM执行引擎/index.html","7704fd8c64f8894fed7fc8db4d1ef870"],["/tags/JavaScript/index.html","23579013130715f8d5cabb2a6986ede1"],["/tags/Kibana/index.html","b88946a6e512269e2dadbc60dae9c247"],["/tags/LeetCode/index.html","05cc5bfed0ede619a378e9c442b89394"],["/tags/LeetCode/page/2/index.html","66635d3f631d870651cd9fd2051a98d9"],["/tags/LeetCode/page/3/index.html","5d2110a351eb9342266060d7da204d9f"],["/tags/Linux/index.html","0182097d0406747ded6bd9dbd1a1f6cf"],["/tags/Logstash/index.html","aaaa27b2aa0335d50f84513288b99caa"],["/tags/Mock/index.html","b545c70f4165051ed0cd9ab4ef09b33f"],["/tags/MongoDB/index.html","19e27033bfc8c5d111e1fbed7ab4fad0"],["/tags/MySQL-事务/index.html","5baf477a455b5bf25d4eec13853d7a73"],["/tags/MySQL-数据类型/index.html","e1de17907a158ff874cc622dac8af837"],["/tags/MySQL-日志/index.html","e931efe42ecf39766b6411efc936f67d"],["/tags/MySQL-索引/index.html","72be900bc0dd5a3cee648c0004085d84"],["/tags/MySQL-锁/index.html","8f2fd4503b82c58a555a82d7b1fee548"],["/tags/MySQL/index.html","04a07444cbd7dd35c3a373eefc1a7acc"],["/tags/Mybatis/index.html","aeb02e0bcd1fe043b30d493ff501ad35"],["/tags/MybatisPlus/index.html","c68b5d1f60d6f837972573dbcab64ed7"],["/tags/NIO/index.html","8ba3fefa1ee8368708e7675bd08132ec"],["/tags/Netty/index.html","24d7b463d52e13a785d13fea878cc614"],["/tags/Nginx/index.html","bce1c6be7abc70963ae63303a21d0c84"],["/tags/Promise/index.html","df9c69277fadcf198713fd75f442c75c"],["/tags/RabbitMQ/index.html","b122c1b15c8f18947e25ee1330701a75"],["/tags/Redis/index.html","d50075a5a98c176a4a8ad14c84516109"],["/tags/SSM/index.html","3ed1220b91b60698f6ed266b8895d3ae"],["/tags/Spring-Security/index.html","4af82b3455311c6039c213030c6ce82d"],["/tags/Spring/index.html","529104cfd4f3f6ce141717b5024dd3eb"],["/tags/SpringBoot/index.html","d274da1a1789a16624d24c6b31689c13"],["/tags/SpringCloud/index.html","ad3daf302ce07e9aebc2c0896a2753f7"],["/tags/SpringMVC/index.html","0b8bdc9de3bbdf87e504b72e639231ad"],["/tags/Swagger/index.html","c51e88ae1c4358798b08d2c176d045e1"],["/tags/hexo/index.html","f2f73a08b407f51316549458d06ab587"],["/tags/index.html","fa7fd79941bc706668a7bfe8ffbf075d"],["/tags/jQuery/index.html","8e48f57b9b5e76643fb4f6059f752333"],["/tags/java/index.html","b259335ad435c690cb860b8e113683dc"],["/tags/markdown/index.html","0c9895324a391f747e8eb6dee82bda41"],["/tags/noSQL/index.html","4acd9fb48478864e59605968f0a73744"],["/tags/typora/index.html","721d17cdb22a439cac74cd3591925ad0"],["/tags/vue/index.html","63ede52e8e6677934ad555ae0147b7af"],["/tags/享元模式/index.html","7c27040e7815044bc535cc8ed6214061"],["/tags/代理模式/index.html","0d16e6c0f63e785d6cd97a8941b39c4e"],["/tags/内存管理/index.html","80476572d8c78e1a0be6dac66544c5a5"],["/tags/分布式/index.html","8e5ad54846b69679af75b1b8baebaf56"],["/tags/分布式系统/index.html","dc98fe2a7d92a08c6ce031e78e749f77"],["/tags/前端/index.html","43a5eece411877e4f691a368e121af47"],["/tags/前端/page/2/index.html","18156118402d6a7217dc766d01ce0fe4"],["/tags/博客/index.html","ad2bf5651766019f532d5a70c62d10ed"],["/tags/后端/index.html","3ca3a36bdbd2f33d51f46c9d1a7786a0"],["/tags/外观模式/index.html","57a6c39f66ed04e4743b4e71713295ad"],["/tags/容器技术/index.html","fa049893d5698261abe5f30cc0aeb2ef"],["/tags/工厂方法/index.html","6a7d0c2642b6fa4871fce762279b75a1"],["/tags/微服务/index.html","52363c3207105a5da79e7d4865c0bc3a"],["/tags/抽象工厂/index.html","d9322d16df5e16853480833a3284d842"],["/tags/持续集成持续部署/index.html","2ec58cb160763f82ec1949711541eb07"],["/tags/搜索引擎/index.html","8386275685818f7ddc942b5d51390940"],["/tags/操作系统/index.html","5cf096f014daa2dec14dd26ec0b382db"],["/tags/数据库/index.html","3fb0f2b1b608402af32def2d33579e2a"],["/tags/数据库/page/2/index.html","fd0a52491c27b257556f54b90a249aee"],["/tags/数据库/page/3/index.html","b4cf4f4955f106d353bec869624a8dd4"],["/tags/数据结构与算法/index.html","757b07fe876d21c7b73db28355f71f62"],["/tags/数据结构与算法/page/2/index.html","470b0c2499a4d75501c8f09da66c3c39"],["/tags/文件操作/index.html","3b9199666b965a3b1594ee5741e7a755"],["/tags/日志/index.html","fd2c47dc1c12765c53d8c7b2f3f602ba"],["/tags/服务器/index.html","c56db93e1c65fa1407cec9cd287743d9"],["/tags/权限认证/index.html","094af7356ddcd5e9cb4417c594af6aff"],["/tags/桥接模式/index.html","c0f8eb92bdb026b0fcae9535bf3a6c59"],["/tags/模板方法模式/index.html","4a16773fa689f2f0889de5749dc5e27d"],["/tags/死锁/index.html","f280fddcf3e8b15be119bc7a1c6ad8c3"],["/tags/消息队列/index.html","5b42e241737d61892f2eb6547fef5d79"],["/tags/版本控制/index.html","c05ebc6aa7df097390e076e9471e04ea"],["/tags/策略模式/index.html","fff041a5edae9d6eb79ca2aaf5dcf2d0"],["/tags/简单工厂/index.html","6507e372eff480ae85b7939ec57d43dc"],["/tags/算法/index.html","c8aea0eafe943fcdab5d676ad3b8627e"],["/tags/组件化/index.html","a9e84b4957d1b1502f93743042407010"],["/tags/缓存/index.html","4778921a0429a14de105c8acff8d7c85"],["/tags/观察者模式/index.html","0f55e6f4f9b9e269e50a96577068e458"],["/tags/计算机网络/index.html","cdc6fee2caa9ca12062fb279c7c3a7d7"],["/tags/设计模式/index.html","4f7dc238cdd1897a5ba10323338138d9"],["/tags/设计模式/page/2/index.html","3883d49ae5a028547ea5f2cf3dce0a9b"],["/tags/进程管理/index.html","2497bc9d97bca57f70eb088437211991"],["/tags/适配器模式/index.html","f48e22065869a548fde58dcaa45a2ed3"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
