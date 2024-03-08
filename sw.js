/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","d7dd7956ba07ac4cb1a168c95792b5a1"],["/2021/02/22/工具的使用/博客的搭建/index.html","2b777348f6056bc566584dde4104e9c4"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","9c7083bbbcdc6d48ca5ebb7e1097fe5c"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","7893cf3a27b039ed921b3250549a8684"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","8317b81d91d12d3ddc44b6bfa633fb77"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","60c8fa53e223dabc7e5dff4594a250e0"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","3f09f2ded65da67409b0ac8ff3ff7e37"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","626cabb2ed577c0203c3b476376f9e10"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","ea30ab58fa4d0a254b42912d12233878"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","a6a4f23a737c210368aa2128cc166281"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","778d8d17e5c8d31086ffcb0d69353df6"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","d0650e3e158cc0c197de2ea0fcc0688f"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","09612259138da98c08767101b2c18b0a"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","92af927b1f490c884f8f439bc2294bdc"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","6978816894add817389adfcb7f1100e4"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","ee85161825720917b6fb4f925b16b84e"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","b7e8703d16b096ee04e571b6d0f1d843"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","230371c9005347fcc45af9924ecd883d"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","8490e26c801e2fb214dcdc34b01e3fc1"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","523535776cd547e4276138ae5ed0428b"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","d1875b0c97725a80a42624727499689e"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","5efe82f4191412fced01c9dee75b8d07"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","9f4b89b99412ad4c4ff5109787d46df8"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","4bcf67336ba0fabd2fe4052bee3e36c5"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","7fc7485a3df4945f9f9b5e760048c3b1"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","be035a59ed9848289419703021107643"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","7fbe7a0b6cc02706b23a1df4db3b730a"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","1a89a220dfb2e51b050ca194335dc3f8"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","c909c189d89089bd3609b78eae444712"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","ebe18cb22d6ae460de30447be3e582d9"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","5137fdb3f7886c6c0b6f2668a04e2cce"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","41052e8c2a1a0bddb66eaa197d4a5f90"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","13e52b5390df85398b29d9774a7b17e0"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","eabcfe8a2e1d7f18ec3cefbb39f41fad"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","66e5ee34565b18a326eb405500ee9d78"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","3d7095e030053a2de1f32d18c9234a62"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","03dc4d07946f95d2a1a15860c78e8a75"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","95190a05fca1c68b28e4b7f7ed518882"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","17869e73c70274a2e3ce36307b77a113"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","5ae5047c6afde0bdb618489442d277b7"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","f734a6c5206ca00450ea813b3a7f27ae"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","e9e3c3d4d99a99e404e6c87fc8a7ba01"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","f47caebf1a464b33fbdaf6b912e8a798"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","150cc63ef8bb32f1e593cbe6eb532c78"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","5be70079a706a095124627d21fc2475a"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","f9c7fe3144cb3f608718f0e6bcda6683"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","8fef068b32972d2e17aa98e0790b15a0"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","7ac7c451e0af3129abcb27d06378400c"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","579ff3ff8144986ceb9b559ee1d3fc5d"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","a0d385d21df8550f67677df90e2b411e"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","f00098258a1b2ee8244d661f2053491b"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","638019730220463ffc95ae08d99bfd7c"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","3eaeefbbf8c7a95bb325a343b645d783"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","0ae1bf2da8df90c11899489f90c7712c"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","784eec0829a0e9b1aa706aef8df3278b"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","ca6ecc5a0eef1f4ec64629d8167f84e1"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","d545a5ff65a221efb01183f4b7516354"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","66c5ff9b3130cb5718a8efd8e29ec9e0"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","8e3077b4129eecc21542a63f8efa5924"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","21cc74c1347f20c3e09417040ed57235"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","f151af81f1e280ef2a10570a85889c01"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","0a721582104a6fcdf5be942fb394d01c"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","d6ebfb3eb09a081e63b9616fbde685d5"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","fb53504377aeb9848ca587e601142eb8"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","795319590925bf599a21a34c4c9f9936"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","3240acc6a83f6a97e7e6e3f4535e979c"],["/2022/08/17/前端/jQuery/index.html","14c25e07d193590984719b3d28df7d12"],["/2022/08/19/前端/JavaScript/index.html","91ca3e6332159c346a50221516e249ad"],["/2022/08/22/前端/Ajax/index.html","de1881c066d5c875bfd46c4bdef69813"],["/2022/08/23/前端/Promise/index.html","fa9d6965b1dc3ac1d44f33ba1b48019c"],["/2022/08/24/前端/Axios/index.html","23f3f274a192926e94a502f4a9f1884d"],["/2022/08/25/前端/H5本地存储/index.html","347d13ee37389063763bd1bb1cec915d"],["/2022/08/26/前端/mock/index.html","ed8293666d45d5e5e4d82bcf79e8125d"],["/2022/08/31/前端/vue/VueJs/index.html","1b1aeb9069202120a294244c990fed48"],["/2022/09/01/前端/vue/vue组件化/index.html","26faf6c62c77bef49e2f4e2b56522be5"],["/2022/09/04/前端/vue/VueCLI/index.html","3b98cc53fe81eab65e6498ebaf2e7a51"],["/2022/09/07/前端/vue/vue实现动画/index.html","e10fdd2a58f665169fe3dddb813fec8a"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","16f5a25877696b80c19769badd092693"],["/2022/09/10/前端/vue/Vue异步请求/index.html","8e345ef664bef0a76c96aa88085aeb62"],["/2022/09/11/前端/vue/vue-Router/index.html","6ce312c2eb9cf7d48977ea9055602c14"],["/2022/09/13/前端/vue/Vuex/index.html","a8d228059de89f26d1371b53beac7331"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","7d9beacc6f1e27f82c017d304fca2203"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","12933cb50522bfbb0a77692c796bb8ff"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","ac72dd764ab48fbec33eee8261ff9e95"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","376ae760c6f93b95e90e63e2769dd4b5"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","2157bd8efea9c4d996eefde4ce2374b1"],["/2022/09/28/DevOps/Linux/Linux/index.html","6b5814f939e49cfc25c6264de5354046"],["/2022/10/02/中间件/Redis/redis基础/index.html","2bab506c11484b1102dc492721289f65"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","387626884d6a205f53b2fa7978bf278d"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","512908197ef4501b4ea43ffd259b08c4"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","86ae589120c583a49cc15485b8638a73"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","1b5c308d809012a24b22046539bee5f2"],["/2022/10/17/中间件/Redis/Redis集群/index.html","1f79c149fac7b03b2fc55946e4461ada"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","096958ad393ae92a1b2f9d690b0a36df"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","581f281a315b2c486f45318ccd7d4808"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","3f083c2bc0a19c5febdfb30240e5b62e"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","2f75085e0dbfc00899e6e5d442efb973"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","8e1dbfaaf95a6f8f351545984b52f336"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","a0b1eca141df63293f96a32903ec8ae5"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","46a0868c2d307e692de396585537acf9"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","0ec6bcaf6157ec54a9f6ba794d441d01"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","af6420ff396c138310f0e7addd98f384"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","f748c16160059028ab4e9d34104e4b25"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","5510e97d16fcc74cc204321403be8134"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","6cc563b3c7f6fbfa8c4863d8cc93919e"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","2a4f19746cf7bb58b5343cb24ea38d30"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","cfee2e0a2746c2f7968fee99fb2e0a90"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","30f51135bc565cca42e443c72784d3b3"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","6a11f9ccf2c9982158d1cd78ecb68671"],["/2023/03/10/DevOps/CICD/CICD/index.html","cd15781fcc2e2a513af2b8238f201d88"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","f5b9d1a3d7903fa7c8bd4c36ce998103"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","7487a8c485311c4d090700e4df8153dc"],["/2023/03/13/Java/NIO/NIO/index.html","3567067b2f304ae81f592463b8d834b2"],["/2023/03/14/中间件/Netty/Netty/index.html","d28e0f63515b6d101ab6baf31ee4d7e2"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","236884bca9ce40c6456eaf88e7f2d466"],["/2023/03/17/系统设计/分布式系统认证/index.html","78c8656e7fc83b5a251ee459d13861c8"],["/2023/03/19/Java/JVM/JVM概述/index.html","9139b460ad85e6c2d2481044bcfb1d5a"],["/2023/03/23/Java/JVM/类的加载过程/index.html","05cf23eb41fb463cf9c98abe79250081"],["/2023/03/28/Java/JVM/对象的实例化/index.html","191b3dd564411d7d16a49e1c3688d538"],["/2023/04/01/Java/JVM/运行时数据区/index.html","3eb513f3e824917058b99fcdd96df072"],["/2023/04/04/Java/JVM/执行引擎/index.html","3eecc6eb356a85d0adb6668b2e455d56"],["/2023/04/06/Java/JVM/对象引用/index.html","dfdf6c7ec71e50db119d02e16c6d7d13"],["/2023/04/09/Java/JVM/垃圾回收/index.html","3782af9fd9b0cbbd484e5c803bd725f7"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","01d08b965490beaca0f1ac4a4e18fdb2"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","a4582b64e912b0f20333b9865cd7db11"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","ce2198c6ed09d75e23aaf0e73c1af2d0"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","b281a4c44af3566d6ada9aa905493e13"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","88be7c5e7e3ffb107c3a94527d7f4315"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","f39e71976f92cc5853e0553a145a6cef"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","d017a9935609ed4cb8f9503fb0152446"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","e7b6ea14e174950cd36535d0e337179e"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","873af0a8524d1d668f26f7873a242f64"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","9e1645a6c2beeb5cbca73a8b2f52254a"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","0f1ec7067927a23fe4fd03a03fec9283"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","3b0e5fa1c5ef2fde376c49c737eb99d6"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","e9d943c2b2a5daa8a63ea0848e9cb78c"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","a79b77de3d0a0d210641e60fdbd6dd0a"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","065db90691ac0a892e999145a4c2190d"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","9e01a3bf98db9a44c28939a36f5f08a5"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","353372fc9de3a8f68344db8a90bbebf3"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","90515179cefc9713caae4fb32e22d678"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","d962cdd645c0c8553fbe5597a06da0e8"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","36efc3a223df7d3d90629747b5eb8863"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","610ccd4421f4ac3915b9df4d07d44a62"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","d7a040dbc5aefceaff5faa6d8be153da"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","6b3ce828f486f15033646d45154790c2"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","4531ca3a997d313e7e1eb1fc5b67b8e6"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","764b49348b23a30064644eefae983b91"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","80bb01c199ffa71a58623ae79471d804"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","5b923c101312c9a7b3e954121fc4f5fb"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","9ff1b1d38f14fd6ec7110912551e5081"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","08c84011f9389248a25172bd19b37eaf"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","daa8ebb8c4203bc8999b1b1e91dd4e39"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","e30d423ca9ca8e6fec5f40d2ff114d32"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","15db39859c982cec6c78af9572797324"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","e3eaa08474f29d9d28a32480b1b70e11"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","1d19a1aa418e6a9c89633b17c761cb9f"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","aaf12e645b94d3fe85f95a89829e026f"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","6418b634cc72b6b20e9d092f5c74c58a"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","b40764ed6c3f52d25777b6e8862db218"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","6a5e977aa953f2dc17727032f8d16c74"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","fc59fb5935db1a21523313255b52a1a5"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","4212f2865cac1265aa41128a6a245411"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","da3b7763986fa6d52d7164e9e69e8659"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","5e415985b650ad4350ffcec7b2a25408"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","941a76f9def69f14e602e7733cabe52b"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","30c84502d5a714ddc192eadf99a05aec"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","789ffc9618077b37791fab6202af0f2f"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","2faa9884054953ee0e040fc5bdd147f5"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","b05e3a76cb4059d5108580a15a783562"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","2498798522b9461c4c243421518294b8"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","ebb9c62c0779a1b63752940555e08a3d"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","d280fc002ed1a6bf0bc3dafec28a8949"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","1b96e2ab50e85b747809d4edfa252a75"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","d727f928e65460938e67b03542c96138"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","8b08a8e1987cc7a3b9f0bdfe4f2dc4a2"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","2ddfc733bc34eafa3da411f650d7e4a8"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","bbfa01de25faded2e2837b3f90da0081"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","0d3b966d0d227045e04dc552b5e89473"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","4f1f0cdf176da86e6decfe6405cf1ff4"],["/2023/09/04/中间件/Redis/Redis事务/index.html","1dd51c4d1d96e137e6763e1b71a9ac11"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","051143895383f165ef1474e381e274c2"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","1c39b5778ccda1d3242a6d38c26fae0c"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","a009df12f941967049284bc11a297516"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","e42d45082dd32830a51f767f1a86084d"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","86cac00c61b784791036a4c030f272b6"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","6758388084dd14532e293d77326c7c44"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","6582ae4bdd6b8a3334d8a578d030acb9"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","f121780201d13d238e6b1a94cbe63c49"],["/2023/09/22/Java/NIO/零拷贝/index.html","215a513aa1f887ea64f2d934425d4399"],["/2023/09/24/系统设计/JWT认证/index.html","9e23019ba5857aaec62ee1b7718669d7"],["/2023/09/26/Java/NIO/Reactor模式/index.html","90b1f21b05e4a9f524f2f1be863297d2"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","02926ae7c455d276d2da5a6c623642f5"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","fc5b9c7adb89cd25ab5ef923b6f084d2"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","099d00ddb6524bee55119a485e0bcae1"],["/2023/10/09/Java/并发编程/共享问题/index.html","683a83e110de149b424a37c90ea42e70"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","68932560dc1b16de670e7048996f2cdb"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","262ee58ced622861b1536d91fa346fb2"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","943458f9dde5f0a249f3b1495d9c3356"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","0e8ba4b31457bceeb5691cba39a8e3e9"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","4c3103be131bfcd6bb94426954dc9f01"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","04cad86794f9465399a7ef51066ed9ed"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","dd48d5adb5937f5e75954c775ba2ffab"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","37351e0861a709af5b9d465dc030ccf8"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","63d5e5ca159b93cadf2a52ac670f84d6"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","5b3fdaaccf0a2e718a3330687b14990d"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","26a012ee58a6f2e6de8c2ab6d2be2050"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","fca5602114d4a11b5e234e30c1b117e6"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","23de08823d23491b6bb1de5bbdfe99f2"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","68e9d193944c3cbf32ba8cad492268ee"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","e92de791311c04f7ca463141815a704b"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","53e9e422ddbc235378973b07383b7770"],["/2023/12/05/系统设计/开源协议/index.html","d8c239d8a7ea5b8d83fff395fe04eb07"],["/2023/12/09/MockMvc/index.html","7a917b59fb7270048839698b6510a33e"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","c1313284c7a42fdddfa5573c9986d4e4"],["/2023/12/19/MySQL读写分离/index.html","3186cd552102651335a69cd4f660e073"],["/2023/12/22/MySQL分库分表/index.html","381fa412657f171745ae66dfd53a7e96"],["/2023/12/27/利用NoSQL优化数据库/index.html","686e260005355331ac025f67d4ff34e5"],["/2024/01/06/缓存概述/index.html","1857b16605cc02a5e74a85361160ea52"],["/2024/01/11/缓存的读写策略/index.html","5c19bca96b65c8f6db3aca2edf4e6fcb"],["/2024/01/14/CDN静态资源加速/index.html","9beee2ad14b0bcdc1036bc50a3990d45"],["/2024/01/18/消息队列延迟问题/index.html","6fecce7569e7d99ef2355deffa685f99"],["/2024/01/22/高并发系统分布式服务方案/index.html","058bc1251adbd1ce921c78de0c3fc001"],["/2024/01/26/dubbo/index.html","7e50af62d109bcee65de0a84514ccc1d"],["/2024/01/30/微服务基础/index.html","ee4997a92570e3886ace59d77bd966f2"],["/2024/02/02/监控微服务调用/index.html","78e93b54e59e8975418f1b28cf4d0c43"],["/2024/02/13/微服务治理的手段/index.html","dcbb4da47e5154d7c1ad4348c3e8758a"],["/2024/02/18/微服务治理的手段-二/index.html","d746c76f29463e53fc0737583d45880b"],["/2024/02/22/计算机基础/操作系统/epoll、poll-和-select/index.html","0870cc7cf7379bc985fca11feaac25a2"],["/2024/02/26/Spring事务/index.html","e193de198e56dba3c6d8515651fa741f"],["/2024/03/01/HTTP接口安全策略/index.html","2489db4997be5d9023d7a51a5fb17972"],["/2024/03/05/HTTP优化策略/index.html","db9cbdc153f29976e17cf099041be48c"],["/404.html","f0ae64cb5b6ff8e512d655fe6cd47c4f"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","17b99e5efab7ec19bb7112cf58cbc9ca"],["/archives/2021/02/index.html","385a34882559eb17a43e8f6e18678039"],["/archives/2021/03/index.html","78b64863a1868c9e1e5f402fbde049de"],["/archives/2021/03/page/2/index.html","697fbb4ba2cd838eabc7d869c30c1312"],["/archives/2021/03/page/3/index.html","fe0c4ebbe475fad5fabba7606c7a0bc6"],["/archives/2021/04/index.html","d45d0f9cd22550148d2d097259828fd8"],["/archives/2021/04/page/2/index.html","a712c8ec49ccf57b4572e2304a11f78e"],["/archives/2021/05/index.html","7607177a61bf4e33d605934c7bc48658"],["/archives/2021/index.html","7c1bf99d7d0ed31faf40f1038c76de4b"],["/archives/2021/page/2/index.html","cb5e2c747737363a1a0f65cd9a30ffeb"],["/archives/2021/page/3/index.html","a52668c0006b313676b5893d11597f0d"],["/archives/2021/page/4/index.html","bd178705e458994652873e61f8175e2a"],["/archives/2021/page/5/index.html","5e5188c7ee826bfd06a16910e2f49ac7"],["/archives/2021/page/6/index.html","5ff81e8678d6d8fa054846a1e0145663"],["/archives/2021/page/7/index.html","635e92d0c52ebcef25e84257ac3b40ba"],["/archives/2022/01/index.html","c410f23aab3d9dc1d14cdf71c812b0bd"],["/archives/2022/04/index.html","099995796afa3a32c441977828bb52f1"],["/archives/2022/08/index.html","e42ccddffdb191b220d2699d0f659360"],["/archives/2022/09/index.html","f362881a66beca345081f781e87d0b37"],["/archives/2022/09/page/2/index.html","47c666a51845cc18519e92cece5cbec2"],["/archives/2022/10/index.html","d95f47bc71c30e3fc1294b3dbb0be88f"],["/archives/2022/11/index.html","1315eeb707d14b7c9bba2035212ae251"],["/archives/2022/12/index.html","afa03dbb802566c722b75bb910f44ee6"],["/archives/2022/index.html","881cfa92b017d7da115e9b575c4404ce"],["/archives/2022/page/2/index.html","c984dbdfa705cec31a4385ec70bd9475"],["/archives/2022/page/3/index.html","44eaecba5af9a9d8df035623e9c85874"],["/archives/2022/page/4/index.html","3627fc62aa0a1b17a8b41822c5f7d252"],["/archives/2022/page/5/index.html","c7071a911d1bacea01cdfa0bc3ff7767"],["/archives/2023/01/index.html","aebca203f9614b0e730553c6e87787e3"],["/archives/2023/02/index.html","59e4b14cf7e071018c528ba60982d928"],["/archives/2023/03/index.html","e1ba99c368d7bdc69267d4fe320314e0"],["/archives/2023/04/index.html","9bd8ff9fd0374d8b5849875973474e82"],["/archives/2023/04/page/2/index.html","d4bcb77872644a64d9268329e3d81a55"],["/archives/2023/05/index.html","97a46a265ae3d5bcf6ea5b06cc8a44a5"],["/archives/2023/06/index.html","ece8c654eb8a5863f6d7da7d0fcee7c0"],["/archives/2023/06/page/2/index.html","9258eeb25b9dd16c5e1e5980cd2d16cc"],["/archives/2023/07/index.html","e74ca63254ca9cd0def1c5ad483dc3ef"],["/archives/2023/07/page/2/index.html","4a7cf866e823642120ffdff6313ec988"],["/archives/2023/08/index.html","6b8f0fe40b5e7c7ff3284edb3e7c94de"],["/archives/2023/08/page/2/index.html","99c6a0d5c6ca53dc61fc9a81680e60d3"],["/archives/2023/09/index.html","e58b135beab90d26b248a064a21fd03e"],["/archives/2023/09/page/2/index.html","10452bd029f1d15d9b0eb38298d35ca7"],["/archives/2023/10/index.html","d9186a9e84db9b7408e6b932ac49e4eb"],["/archives/2023/11/index.html","bd7698db5d9cdea0948fc7cfcce0b460"],["/archives/2023/12/index.html","2be375921b9dda238c5eba5087f856f4"],["/archives/2023/index.html","b2c9f7280e1784858ea978ef5a477b31"],["/archives/2023/page/10/index.html","dc63ccaa6990537b2684375c4ecb7615"],["/archives/2023/page/11/index.html","24da78ac70c010d4cfecd5e2326547ae"],["/archives/2023/page/12/index.html","b426b4ae05414ba8b0a78255e4504237"],["/archives/2023/page/2/index.html","f6fbb22ef10e99b93c942f1fb24a3ae6"],["/archives/2023/page/3/index.html","1ab75dafa4d3efb146cfd4d1020ed0c1"],["/archives/2023/page/4/index.html","c7ef1b9b99b0b2406d9850603140f466"],["/archives/2023/page/5/index.html","1e2243076c70ca6b021bb50a430f4fd3"],["/archives/2023/page/6/index.html","b78f549a7386840336c48bc0faae74bb"],["/archives/2023/page/7/index.html","f4ecc07a386832c98e225fa9d641ede9"],["/archives/2023/page/8/index.html","9ed590e6d8831a59a28dafb6070cfc1b"],["/archives/2023/page/9/index.html","010072a22d65cfec48030bf9ea00e2e3"],["/archives/2024/01/index.html","c7683c42a13ec03d3feaa8a810d28670"],["/archives/2024/02/index.html","06e892a3d0256bf5d38909fe80012789"],["/archives/2024/03/index.html","2755df5986cf0841b8806896bdfaa0b4"],["/archives/2024/index.html","9ea4600b5ac5204e8f56dcfb249a13df"],["/archives/2024/page/2/index.html","0acb3a3e095257735c2adf88231823da"],["/archives/index.html","37aa95a0f55915e91c8cf611466d0155"],["/archives/page/10/index.html","a3c615bf1aee42b6cbe91391af3fd5b9"],["/archives/page/11/index.html","158866a0e6de9d37b8227b1c12e25ce9"],["/archives/page/12/index.html","8232df25e3add998d62a803e03f72c44"],["/archives/page/13/index.html","f06f83f307d9291f130b70f89d8f4e68"],["/archives/page/14/index.html","e436bd1114e4a83b8abebaa86c3a9104"],["/archives/page/15/index.html","c5b73d5a964bd72253a4efa530c7ecbb"],["/archives/page/16/index.html","b90a5e4be5f0757b99d755f876e3e268"],["/archives/page/17/index.html","81679ea135cc03db0a1847be79599b02"],["/archives/page/18/index.html","2766063a38bbed101c9f28df149f65cf"],["/archives/page/19/index.html","d6c3dbd283ad0532302c5f4cc4fb2976"],["/archives/page/2/index.html","b72b530137d5ec7da624b4b42cbf46ab"],["/archives/page/20/index.html","3b802679cef8c593cc550de787bc4715"],["/archives/page/21/index.html","ebd096f9aa0db7fd2357370f88748501"],["/archives/page/22/index.html","3a2223cbc5c4b581a64cdeaf7e9fe4b5"],["/archives/page/23/index.html","92e6e3f62b2198601f71459b94120ea6"],["/archives/page/24/index.html","2edb8469c051c01b99a73d6ce7a364a4"],["/archives/page/3/index.html","5dc15796307da223852309b7a6a200db"],["/archives/page/4/index.html","e357f9772d0bd702bbf06437af6fe708"],["/archives/page/5/index.html","4b09b06fd63cc0013f0305356c2a89ad"],["/archives/page/6/index.html","540cd1afdf6bb9465635049f7a99c06e"],["/archives/page/7/index.html","3498063b87678cf12f63acbe4c29a943"],["/archives/page/8/index.html","58dd56cfc56ee886ce505e81bc26d0e3"],["/archives/page/9/index.html","cc6c6c10aa761a45b70a0d59782684cc"],["/categories/Devops/CICD/index.html","aa0fe24cf9934dedca367ca4eccba309"],["/categories/Devops/Linux/index.html","72954f4d43ecb69a553d42106fd017b7"],["/categories/Devops/index.html","90901ea8881d51d32e94249b3c43bc20"],["/categories/Java/JVM/index.html","e2c776c51993c13299f34473fdea4632"],["/categories/Java/Java基础/index.html","05449b7a2e2ee68346c0f277696c634b"],["/categories/Java/NIO/index.html","667e090df2399febcbc83a9fa4e7f03a"],["/categories/Java/NIO/原生NIO/index.html","16195419b3a04fdc5ff8611e4f52a481"],["/categories/Java/NIO/文件操作工具类/index.html","58b0030a5aeabfe363df99af46daa4b1"],["/categories/Java/index.html","78817837400e8b5b71018784aaf2bd34"],["/categories/Java/page/2/index.html","869e7b062abda8e1dd6d6170baf653fa"],["/categories/Java/并发编程/index.html","0765f65797cb6262dce36ae4c94ba368"],["/categories/Spring全家桶/Spring-Security/index.html","9b5992e6fda8dbf2289348ecac5e0500"],["/categories/Spring全家桶/Spring/index.html","22debccbe60343cfe3e32ff69c1ca598"],["/categories/Spring全家桶/SpringBoot/index.html","0775db9e4416f09bb0559ab3b7b1d3c5"],["/categories/Spring全家桶/SpringCloud/index.html","6d5e0631d7d1c46c5a6b875c00a6b2ca"],["/categories/Spring全家桶/SpringMVC/index.html","7808c5feb25163264b9a81d53b409737"],["/categories/Spring全家桶/index.html","1024c2f7c80725f0534e5d55f7f808da"],["/categories/Spring全家桶/page/2/index.html","126543104419358d089cf64d15b969ad"],["/categories/index.html","80a99339b90e8a994dcdf7bcadeebea0"],["/categories/中间件/Dubbo/index.html","40138257bc70daea822476ab57b61f52"],["/categories/中间件/ElasticSearch/index.html","d1112a3f43f1014bf6ea2a2cef43394f"],["/categories/中间件/Netty/index.html","45189cfcab00bf56ede15b5a8916d5f3"],["/categories/中间件/Redis/index.html","fbfdb7258879db19d1e52b6f0a5e734e"],["/categories/中间件/Redis/page/2/index.html","f8a1662f64f6e501da03d91f8e54e84b"],["/categories/中间件/Redis/page/3/index.html","3d7ceeb90231e85d5d8c6ff17fe66ac0"],["/categories/中间件/index.html","2121a24edb0863d81a18efa792a3996c"],["/categories/中间件/page/2/index.html","59e2edae5b9c70ff8934bb7745e6e3d1"],["/categories/中间件/page/3/index.html","f67a6f7a9c32e31f71e28dbdfedf3f40"],["/categories/中间件/page/4/index.html","4b4ffa7743436bef4472b90a61a3ca38"],["/categories/中间件/消息队列/RabbitMQ/index.html","391ebd3801691654dff991f4282641dd"],["/categories/中间件/消息队列/index.html","fe4f34f88951359972150dad21ae8d49"],["/categories/前端/Mock/index.html","809bce68a07274a1000b45de11956609"],["/categories/前端/Promise/index.html","cb6c1581e8b8999922b46b29ffe980d5"],["/categories/前端/Vue/index.html","2ba2760efb9926d40548b2560106266e"],["/categories/前端/index.html","77739b6955c535be44f0e9c114b55e4d"],["/categories/前端/jQuery/index.html","5e04e72e47b43655982b922b391b575a"],["/categories/前端/page/2/index.html","f94ab3cfe6ee8f42f3e6112c7b76a92b"],["/categories/前端/原生基础/index.html","541803e4c4a46d14b784fc6b804ac5ab"],["/categories/前端/异步通信/index.html","7b693ee722d42a4f5b51fe511e2589b3"],["/categories/工具使用/Git/index.html","3d499441503545c477a92f2c6c9b6b24"],["/categories/工具使用/index.html","4e6985bf96cd8af205ba2b55947f88fc"],["/categories/工具使用/markdown/index.html","f06caf4e505b320d39f01320003cfde6"],["/categories/工具的使用/Docker/index.html","225d0ec738b1fdaddccaed5cc3bbd3ca"],["/categories/工具的使用/Nginx/index.html","0c2a963eeb5509e50093f92e2b1c52a5"],["/categories/工具的使用/Swagger/index.html","a0042c9c3d7aca7fe739fe6bc9ee0e10"],["/categories/工具的使用/index.html","3ba30de967aeced275c385a34fb70566"],["/categories/工具的使用/博客搭建/index.html","558b3a76510e7d47977bce2d17d21594"],["/categories/数据库/MongoDB/index.html","b3fe6cf6197d333787cf924f94ceac2b"],["/categories/数据库/MySQL/index.html","c3fc6c887bfc93447bcd588444ac7b89"],["/categories/数据库/MySQL/page/2/index.html","0afa12bd78a0d320dd3d84861b767eeb"],["/categories/数据库/MySQL/page/3/index.html","a0de450916e5deda280be4db19a0c53a"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","e30b520836e02d74f670547d6cf2dd66"],["/categories/数据库/ORM持久层框架/index.html","3025f7f70305fc7eb4b1817569350c41"],["/categories/数据库/index.html","673748e9620600995b1ea16866d3d1b3"],["/categories/数据库/page/2/index.html","2979943c500f3482461717272177d65f"],["/categories/数据库/page/3/index.html","a9c190d23fc728a1594f105648e29692"],["/categories/系统设计/DDD领域模型/index.html","971356e0f0dbeac0bc69b7f88ca0163f"],["/categories/系统设计/index.html","0c7b6659de9dcf6cd091eb0424845a7a"],["/categories/系统设计/page/2/index.html","114bbfd3614c20080b562d653891fa7f"],["/categories/系统设计/page/3/index.html","1064092c7f5a9660e333b84d1bdc3d6f"],["/categories/系统设计/page/4/index.html","6649773ee79928614d9a635608ed3892"],["/categories/系统设计/page/5/index.html","460ba1e4973e941df7a8ecaf1bd9ca82"],["/categories/系统设计/分布式权限认证/index.html","39eff0653b47e86ed4e8aecc9e34f6b9"],["/categories/系统设计/分布式系统/index.html","39a2af101f87963cbdd58c98035d456b"],["/categories/系统设计/分布式系统/page/2/index.html","800d23075c6457310f848e88bb61266f"],["/categories/系统设计/分布式系统/page/3/index.html","da0c5a9b80e590df4c1efdd288739b7a"],["/categories/系统设计/微服务/index.html","45e554582ee52a1daa0a44677499c63d"],["/categories/系统设计/数据库优化/index.html","db85f065c3884da61f327fb1f5ab1987"],["/categories/系统设计/设计模式/index.html","a641ae365160f37799ac1f78ff398136"],["/categories/系统设计/设计模式/page/2/index.html","ae6e0465a2f56ff704a46d7a92f26491"],["/categories/计算机基础/index.html","f7deb4100f6e1080fb1b81fe4130fd5f"],["/categories/计算机基础/page/2/index.html","cfa4d1977bb78626c25103bfcb2759a4"],["/categories/计算机基础/page/3/index.html","c9f2af63d1ed4db36d781a07a692c7c2"],["/categories/计算机基础/page/4/index.html","63de08d8c3c3a61610e8574d7f9a931c"],["/categories/计算机基础/page/5/index.html","669189ee61e337840294272fe4b7f851"],["/categories/计算机基础/page/6/index.html","1a455cb05c5f96c0ded93bdb37faa64c"],["/categories/计算机基础/操作系统/index.html","e7cb2a298e203e8e7a00c5f9fa090019"],["/categories/计算机基础/数据结构与算法/index.html","5d4ac13ed12f6240d611d733426e10b1"],["/categories/计算机基础/数据结构与算法/page/2/index.html","12b3b32b2141c435baa446f58bce1d74"],["/categories/计算机基础/数据结构与算法/page/3/index.html","602cd04dd41ec16a0bdb3aba91568521"],["/categories/计算机基础/数据结构与算法/page/4/index.html","cb066204ade5a38c8605fea161c9e3f2"],["/categories/计算机基础/数据结构与算法/page/5/index.html","bd22b2fe7cab4a0d9640223cc93ebd4c"],["/categories/计算机基础/计算机网络/index.html","0b0dfb2f46c7ba2e72e5518fe582058e"],["/css/index.css","2af5ea34362e0b34f799106b2659ad50"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","36b79a717e1045d691c533fd142982ae"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","b37689a24ac82b73d175c7db1a990483"],["/messageboard/index.html","9ec18531441b6c9cb1686fe5183b6a07"],["/page/10/index.html","f24149a0cdafbee1751d98bfb173be09"],["/page/11/index.html","712442faaaf789c34042ab22c3adae82"],["/page/12/index.html","91f7baf19a0de52e927e7ca7659a529e"],["/page/13/index.html","3f2e1f66937111451d91402d7a40ac3e"],["/page/14/index.html","13b4e4ecb5546e57ab854a8b627d8d61"],["/page/15/index.html","2373d2c9334e28b82c6b61902007f344"],["/page/16/index.html","b16214c097fa3babdf1677e257319be7"],["/page/17/index.html","f6eff44b09984f5efd7070a6f4699d23"],["/page/18/index.html","39f9c686d65cf2f23a16aa8eef59c951"],["/page/19/index.html","679a9505f2a34d9f1cd3eae6c7103b56"],["/page/2/index.html","ba307702399be9138ea886fb04bb267e"],["/page/20/index.html","6b062daef1ca75c405aca4ce30d95abe"],["/page/21/index.html","f00074cd421216f81032ad91632b4cf4"],["/page/22/index.html","c22d272912c7200c93f757c725112c71"],["/page/23/index.html","8a4ac5048a11275f114534e69aa6a5e6"],["/page/24/index.html","6e6e7adfab4ab721de39a62319957109"],["/page/3/index.html","211cd1a371514c0f583ef63384bec001"],["/page/4/index.html","fc7517aef8bb28f73a6ed67a123b638b"],["/page/5/index.html","6e40f7719ca93fd26f525f46cdfd4161"],["/page/6/index.html","92d46d44f0ca10cad30f963176eb834b"],["/page/7/index.html","0c805e205ee41de465d29e2b01b04104"],["/page/8/index.html","7955d7cdf005e4300848255e24696e38"],["/page/9/index.html","ca1d5bacdaadf597ac4bfb613f793f7f"],["/sw-register.js","be7e2c4dca93b4af294b28561bfe8b31"],["/tags/Ajax/index.html","6ad6c3d3bdf36fb3a8cfeaeafb59f77f"],["/tags/Axios/index.html","abd13b505b84723524d4b953980cfee3"],["/tags/BASE理论/index.html","fb91a6e1525ade00089b9b86af060918"],["/tags/CAP定理/index.html","ead11b97a6825993e271126bf0e4c4c8"],["/tags/CICD/index.html","afa36121bac9c2d6cfda3ee608fd3031"],["/tags/DDD领域模型/index.html","79281119d90131c4e76da007940c7bb5"],["/tags/Docker/index.html","1af3053c5676bf9b54e134df0f2f5b2a"],["/tags/Dubbo/index.html","53cbacad25010b05dda081fea0d32d34"],["/tags/ELK/index.html","cc5c1eda5fc3eec70d70d2bd45d85ccf"],["/tags/ElasticSearch/index.html","185c6fc76bb8e5df24ff24998932da15"],["/tags/Git/index.html","f9184f8dacbda8eb485ed278541ecb88"],["/tags/H5/index.html","9514d30f104a5481c20a49eb571ef61b"],["/tags/HTTP优化策略/index.html","bf6b0a7d76465eb658a50c24ef6b5e79"],["/tags/JVM/index.html","8b6d4360efe39bf53b95bfd0ebf4deff"],["/tags/JVM内存模型/index.html","a5f6deb9aadfb19e0943a466e8d6de1e"],["/tags/JVM执行引擎/index.html","887436cb5c8c10d2c8607458bc191cfb"],["/tags/JavaScript/index.html","bf4bc8cb382cd792dcea69c31b4d5f2b"],["/tags/Java内存模型/index.html","959a3f621282955471a0728f780c2b28"],["/tags/Java进程线程/index.html","b505beb4984b40d2515166f3ac035768"],["/tags/Kibana/index.html","fba08a57b18cde454803cb44b277037c"],["/tags/LeetCode/index.html","fd7df775747928aa366b8de43dd3088b"],["/tags/LeetCode/page/2/index.html","f89c174add5fcd225466a64a7186b677"],["/tags/LeetCode/page/3/index.html","617f33d2dd0f22b50176dc748b4bccb1"],["/tags/Linux/index.html","d2ccdf0eb2b49e129cace0609270841a"],["/tags/Logstash/index.html","e0f2bd4a7d4d0ba0393a7d7817845d3c"],["/tags/Mock/index.html","062efc92430fac5501ef164b9684bac4"],["/tags/MockMvc/index.html","0b01b8d4fc51866683b7dac4aed2877b"],["/tags/MongoDB/index.html","5cd96d8c3d071fb2dc58a6cb5f823faa"],["/tags/MySQL-事务/index.html","a1ca1e8fbcf50ee0a4b38e795ca5d87f"],["/tags/MySQL-数据类型/index.html","e8ad2ef1f77fe159f100ba0708d6ee7f"],["/tags/MySQL-日志/index.html","92e5dce76b583a7ac5051074d90947cb"],["/tags/MySQL-索引/index.html","03369be205ab9cdf2c83f6ce1c01b1c3"],["/tags/MySQL-锁/index.html","51e9703f0fb557bb7d03c182b4bd75c3"],["/tags/MySQL/index.html","0ba9ab9fb424cd61fafb6412d0e4fd13"],["/tags/MySQL/page/2/index.html","46582f60986b58abdb267a127347db5b"],["/tags/MySQL分库分表/index.html","42aeb49d6a16418078562a69b33b9306"],["/tags/MySQL读写分离/index.html","1c9084d22c0171ad11847f5135d7b92f"],["/tags/Mybatis/index.html","f894f8d29a921942b4d08f54b4cbe9e3"],["/tags/MybatisPlus/index.html","f8978eb331f1e1851984bd48b4f53941"],["/tags/NIO/index.html","06f3d088af676a29576f3b3fbe7f4830"],["/tags/Netty/index.html","1a641848cca9b6426d56e72a06e53f99"],["/tags/Nginx/index.html","f3fe93a3564e8fb8fc2bbd270fdc04c9"],["/tags/NoSQL/index.html","1f3c729e00b1e0a8fa2c604a88311827"],["/tags/Promise/index.html","da6fa899cea1caef73c5ca81c5704bfb"],["/tags/RabbitMQ/index.html","ccf560eb2dc48c6ab16dc0464c4cea72"],["/tags/Redis/index.html","6fdc5b53a5cef18e113d8c08759b733c"],["/tags/Redis/page/2/index.html","04f4154b718a3c903568e7a83c2657d6"],["/tags/Redis/page/3/index.html","5b8bc9d947691fb2ada676ba618b6cc9"],["/tags/SSM/index.html","c032a151884fad08fd5933019de6437f"],["/tags/Spring-Security/index.html","0b03db50db0c42ff1811160c1fa5661d"],["/tags/Spring/index.html","c711729ebc9b2bd6d3f7b75a70493992"],["/tags/SpringBoot/index.html","270f2175afe70a14b4ec5c68e3c6fbae"],["/tags/SpringCloud/index.html","6bca4b2a459a9a1a22e1fbee56e11acf"],["/tags/SpringMVC/index.html","b480693b5db8f23ec9266f0d986380d8"],["/tags/Spring事务/index.html","fd8c58cb310ae854e181c7778d86dd0d"],["/tags/Swagger/index.html","0abded6bbf5086d91f34e1a389f5cbd7"],["/tags/hexo/index.html","e5d364592b0fb24accae1e15a3729f02"],["/tags/index.html","3ead2f63b2fbc3ded84d5304429930fe"],["/tags/jQuery/index.html","58b64d789e8ae6803c43814e7f3cbd5b"],["/tags/java/index.html","e5a9914ba47d1409eeec2d0ca09babf6"],["/tags/markdown/index.html","2975ba80a5786fd1e7a901345b7739da"],["/tags/rpc框架/index.html","da6a9570a31d57735aa55f67a5c51246"],["/tags/typora/index.html","b50a2b09ebc23bc761554a5aec2fa883"],["/tags/vue/index.html","47042a65d438c7bc07d2304dbf0e93cd"],["/tags/享元模式/index.html","84fcf686d6ed8173466970e5ca353043"],["/tags/代理模式/index.html","af1dbfcd6d79b64f69aaa25e9a16aa2b"],["/tags/内存管理/index.html","8f28d111be260377aace78eda7829969"],["/tags/分布式/index.html","9e6b6798cb40c01120d265fe106c3360"],["/tags/分布式一致性算法/index.html","6c1de731f736080cc2682c21e5bc5943"],["/tags/分布式系统/index.html","4258cd8c793f9f99d9c5bbf36410d1d5"],["/tags/分布式系统/page/2/index.html","e614d7e8b5f7c0d106b9ccb148b8c9d1"],["/tags/分布式系统/page/3/index.html","e85ce6288145e8a7c853e33fc6917575"],["/tags/前端/index.html","63c2ac709d30d3461d90dd0d55766a65"],["/tags/前端/page/2/index.html","5e041ba2c831d80f2dd049b82862e468"],["/tags/动态通知/index.html","2c0c9b7b89f6b7fb19e3bb8ecf9a8fdb"],["/tags/博客/index.html","e617046047f66ad4b1913c4d2ac3f12f"],["/tags/后端/index.html","13d4e44e54dd1dbf7acfff6486619020"],["/tags/外观模式/index.html","4eb34ca78221a7b26998f558cce4f027"],["/tags/多级缓存架构/index.html","22f8ff6529c2882078c074a722c89526"],["/tags/多线程设计模式/index.html","2666307a180403cc09687b2cf48ead22"],["/tags/多路复用/index.html","444ac3fe26c4de3fd1168ef2520407f6"],["/tags/容器技术/index.html","cf2271e64bd4823f154ca8d415db3b9a"],["/tags/工厂方法/index.html","8e5a2d0b24bcb0714acc959a5acc615e"],["/tags/开源协议/index.html","4020b19978770d62c9595463a5e065fe"],["/tags/异构同步/index.html","33f4a319496f4e2d3ba3a2f02ea2f000"],["/tags/微服务/index.html","280bfe0c2f52dc7ae113ed6f07d7b6da"],["/tags/微服务基础/index.html","699315d6915551eeca682560d71029c9"],["/tags/抽象工厂/index.html","70b547d6ad3f252754038e99fd7b040f"],["/tags/持续集成持续部署/index.html","114f549ee9bd6e6b789a8337cb8fb68a"],["/tags/接口安全策略/index.html","254eff2479e27d04a7647d6b4369ff42"],["/tags/接口幂等性/index.html","9cf2be0f047ce51ec62a81d5b2cd73ba"],["/tags/搜索引擎/index.html","9083e6a433e976bac816e5e171b8981a"],["/tags/操作系统/index.html","787d3eff29b4ecf9243f8949ff9b85b1"],["/tags/数据库/index.html","0d2cc40cf3225bbc442d1bf11fdeb38f"],["/tags/数据库/page/2/index.html","3265802120e5cbe90ab15766c39b90fd"],["/tags/数据库/page/3/index.html","39bdc4be098b25fce956843ff46212dd"],["/tags/数据结构与算法/index.html","cd6bd6d5b3ac954f074047e9d32fc4ad"],["/tags/数据结构与算法/page/2/index.html","eb6d07a0024209df234cc9e5a3d39d81"],["/tags/文件操作/index.html","a82bb334db51d3dc02a27f997f700454"],["/tags/日志/index.html","fe89f7d33304d3457617371661fc2c00"],["/tags/服务器/index.html","13e06dcadbbeb63a3e89ab0af4100364"],["/tags/服务治理/index.html","c75f7794066e72d9829c51df16c13b9e"],["/tags/权限认证/index.html","8ae2c888e3faaa66442fc094320caf73"],["/tags/架构分层/index.html","1e6d663e544f8e4d90981b16d63a6880"],["/tags/桥接模式/index.html","9419fe05d8fdd84f29b460afe99b079a"],["/tags/模板方法模式/index.html","e3a504c5a81c6a483cc3ed63cd8fd6f8"],["/tags/死锁/index.html","59bc7bfa8a52501f3ea3e0290b3fc2f2"],["/tags/池化技术/index.html","d89a1d1efbb7257006742f8e508ffd5e"],["/tags/消息队列/index.html","0324c6e097975148dd9bd87962926a2d"],["/tags/版本控制/index.html","45d572564db9d3f67105dabe9ea6e8ae"],["/tags/监控微服务调用/index.html","94f1ddafedc08c0a10467010d7850af9"],["/tags/策略模式/index.html","281881d2f4817ced2cb7a65187eebbbf"],["/tags/简单工厂/index.html","51ec57faa8765f2a25584f7c4b0e885d"],["/tags/算法/index.html","022211e3b9363a29345178ded4ef7ad8"],["/tags/线程活跃性问题/index.html","bd0fe4b357993cfffa655bdd2a3adfb2"],["/tags/组件化/index.html","03aedab976589173581fd6df07011f10"],["/tags/经典限流算法/index.html","8d2048e0b44a1606f093aad867d16ad8"],["/tags/缓存/index.html","bc0794cf0e8354a339e85ccbdce65439"],["/tags/缓存/page/2/index.html","f66e67ebcda32e233d85292430af3c2c"],["/tags/缓存/page/3/index.html","25bd99db987006e8330f9a9e5c5f4373"],["/tags/观察者模式/index.html","0cfe21550de63d71856a943cd5c5dd37"],["/tags/计算机网络/index.html","fb4d6e401becec4c5789600eef163eac"],["/tags/设计模式/index.html","2816fca9acd4926d47176dab4b84f043"],["/tags/设计模式/page/2/index.html","e85069afa5853ea93db1d5e6e5b8e61f"],["/tags/设计目标/index.html","c818d7ebd6a12e8c1493d236161ef09a"],["/tags/资源共享问题/index.html","082cfc1dc55687a62da5c8bb5b367a4a"],["/tags/进程管理/index.html","a8151e40a13218b5fbcd9021e06712fd"],["/tags/适配器模式/index.html","6295963ddc724eb9fe8ccb2f5ba65ab4"],["/tags/通用设计方法/index.html","933aa042597e6169864b2cc58c57b3b5"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
