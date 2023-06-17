/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","80162d0d4ec7e709058e9b37b991f7cc"],["/2021/02/22/工具的使用/博客的搭建/index.html","a8ee5a0ac7eceb5eb940dda65a2ccf40"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","fbb82f127aff23f129ea0db2d2fdafe7"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","ee2d68f790ccec2386677af04e66e06b"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","734c0522fbee839c42fca1d58752e106"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","76de905ac9cbba3e8617bf4a5559e470"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","36f35154008efeab8fc7c91860114bcd"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","1580f7222ac9dbe9f84c9788e529d8ab"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","dac6c4e93980075cba25eeac42e2a416"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","6b5bad46be580379cd6ec5b70408e8d6"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","9d4eaf822294f5e87181bf9d19c72a2a"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","41c7ddaed3bb79793e8c6f0e0225ac3e"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","7aebe43011dda4d0275be4b7fbee80ab"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","940958e0dc4018e2bdd9785e09556883"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","840857c2924dc295353db4bc30621f66"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","3750acb308c80326b8e4c662e6a213ee"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","84a6539d86b2e04f61e8cc913db8aec5"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","bd853f068a26f8bc9cff65fd2c4d12b9"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","2f7f12ce671710277a104b6e95c13eaf"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","77c4c7f63f2b84d74846cb26f2f27af5"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","5d551cd7c962fa765739eacd9ecdc701"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","5c7f16f1c4bb15eef06067dea9f3493f"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","15e3d743f356eb6a29f50d9dc9a63846"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","ec58793291a9775f2d7eb086aea1cda2"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","e88705f85b1f49cb3c4cc87e84ef51f3"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","cb12bd8e93c435225ae3f8fd60b69343"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","5ffba36e9ea316e14e7d01a890da35df"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","a914de31f33359ce3abe94e0a874a4ab"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","3ea6dd4e0afcc7d605b43f750dcf7ab3"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","b9bceb67444a51e9070a7119344dbbe5"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","0fdfbff33586272d57a3bf1ee5c1a33a"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","73c2a0b819562b2c672d32fd68112b1e"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","51a5dd2d10e2baa0ca2f95c105d6ba0c"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","9f0b9bc91ac1e3b08277c073cdbd4f7c"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","98b0a5c54d4dce6999150ae888d025f9"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","3f66ca5c162d1bec958b553f1c468f8e"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","ad1721047eef152c872178744929e304"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","2aff0c3c6f34db0744c98117626c8a6a"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","5b302a8735c1ca478846ab866283cb9f"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","768a8405bc08db0216f05ad88f6bfffd"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","8424fe53c940fed096f090fb90b7fc32"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","f598bc64d886c113a726efe337d036c0"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","3875e615db3da8c6dfaa1d24efa52181"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","f7734bfaf8cfaf7f54af7e638f63eadf"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","cae943940f52f916a42dc9060823d113"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","c42c55a910667f97f98b7f4800801ca2"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","d83582c40a671c80c703fb4cea20b274"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","cc4ea5bb8a11d011c1cc4d1c03c44047"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","628d5c92b835b0c87caeb42dd9ee393e"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","5b66decb76fc637fa1d0ea63e01ee348"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","0317c47049dbe0de27b20cdd7180e6c8"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","203b0e39d846ff7d0b2a7ec13046d637"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","94f268bc18b3c81ac798f7c550b352cc"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","3a0451cbd9b78df2336095f4957f5596"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","d5566aaa9259bb69352f519226f00779"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","f07ce28a362c1618794730cea7bb6cf4"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","b2d36b0ed7b9f03df8270bc2c02da3a1"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","facadb6661b0ab2630d0dbdfdd1ec3b9"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","ac8c2290f0a3a7b17c201be53ca4a988"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","1864673926176fc229efd74ad57a0877"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","c3a05fe54b37874cef53159dbdd24c3d"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","c2b73e4b2f7a118730ba3b8a5e4f8441"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","da58083f63327de729267cdb76c568ef"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","96707b1666a3059898f7f49b8eb42f5a"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","ac43d427eade2ac4a549c29a1d210fe2"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","3de58605995645441a5ea23b80bfd001"],["/2022/08/17/前端/jQuery/index.html","9148c07d80267489443b68f5394702a9"],["/2022/08/19/前端/JavaScript/index.html","514e0b8d23716ef88a8b5faac322c7c6"],["/2022/08/22/前端/Ajax/index.html","da3638666f86ce5315d212d7ddb506dd"],["/2022/08/23/前端/Promise/index.html","ae973dd4a769cad4c50833bce9c42fbc"],["/2022/08/24/前端/Axios/index.html","36082aa5ae235718d90365b4bbbaa69b"],["/2022/08/25/前端/H5本地存储/index.html","52be728f2f4f39f0352dc65d118142f6"],["/2022/08/26/前端/mock/index.html","186b910ddfdeb76c13b18e71dc443d89"],["/2022/08/31/前端/vue/VueJs/index.html","983dacc7be39f19d01d5522dc25167cf"],["/2022/09/01/前端/vue/vue组件化/index.html","4969194eaf4f77a9a046c43f530cb579"],["/2022/09/04/前端/vue/VueCLI/index.html","40a4ebf9190354d049a36e251720ed32"],["/2022/09/07/前端/vue/vue实现动画/index.html","47a9db1a56165a69713e408550b43a04"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","e388c0a4ca0c2c0345f2ae59d84276e8"],["/2022/09/10/前端/vue/Vue异步请求/index.html","605545e6894513ffdc5645971ea22aea"],["/2022/09/11/前端/vue/vue-Router/index.html","37f55412da01d82c3fcc8698eff06b16"],["/2022/09/13/前端/vue/Vuex/index.html","4c455b8e384647902a974ce80bc17c46"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","75e2cf48324938acab5cd98364c7b100"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","c8617336c56689cd6ec8f4605ea5fabf"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","d0693a06745c58893514415086229d8c"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","9f5477de0192577aebaae2dc43e8eda5"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","51c430aef38bd961823f52e6d6555aaa"],["/2022/09/28/DevOps/Linux/Linux/index.html","e6590d226f943c092a7c71f03e2d80fd"],["/2022/10/02/中间件/Redis/redis基础/index.html","d15615d0073bc16574aa93edcfd5ee46"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","a56a9dea985bbaefc7dfc9f0f9387742"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","97be562111eea5409a865f4ad2a9b471"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","c6d6e0abd5c5015bb01b64b122967657"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","36b8afffe29760dcc720ed01967228a9"],["/2022/10/17/中间件/Redis/Redis集群/index.html","98a1998d945fdad7efca7c2934abe089"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","dd26c56806ec2ad68e40844021798683"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","7c3191fa7c232daf71722b336129cf7a"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","5147e61cf3d7dce47bf37309f1f9524b"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","09c88cd19fe6c72c2f822e283730f40c"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","4393229bc50978947ba3e4ed47f83b41"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","b40ab5c46d9c51998066960eb410a9c1"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","5452c2308fa6af7f8e53286d704a7e4b"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","8bafcba8a185884b840eaecd61f01ee2"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","0d4932c8177f4c8f2503782a4245d988"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","b6e6a5051bf913af2289bba364a098ed"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","536fbe9bbbd037a9dc69e979a9af05ac"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","1b0c2438d13fe0decee53a9f952ae891"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","75ca77898130b17f7cfcd201fcb4e291"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","0e9214a755b9b5c54c397f3efa15ce98"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","9028731ba9c4ea9c2adf799e778271c6"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","fc50baaf7f32db9663cf333b64e3cb51"],["/2023/03/10/DevOps/CICD/CICD/index.html","a5f37a3c26f795bc1b413ff891c67f40"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","642c6b81501b8d0a56fee72589a55201"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","e8fddefce23a4dddcea81cd6c487f3ea"],["/2023/03/13/Java/NIO/NIO/index.html","254feaf78e49a7d78bd0f6741dcd1aa1"],["/2023/03/14/Java/NIO/Netty/index.html","a93fd4f1092547901b481edab1936e5f"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","5edad957961a263132c3c52287e8d9b5"],["/2023/03/17/系统设计/分布式系统认证/index.html","dc5349b4aafe375cfe7a0461c386cb86"],["/2023/03/19/Java/JVM/JVM概述/index.html","d933a74ec23523160c551405011a9f76"],["/2023/03/23/Java/JVM/类的加载过程/index.html","9f994e9feb528921a928a9453c800bac"],["/2023/03/28/Java/JVM/对象的实例化/index.html","2eecbd67e5ca3e3af53513c39010534c"],["/2023/04/01/Java/JVM/运行时数据区/index.html","7fbd13ccd40ec0407dc562acfdc2254b"],["/2023/04/04/Java/JVM/执行引擎/index.html","38fb0e0ac4e52da26a5eb0077de118f1"],["/2023/04/06/Java/JVM/对象引用/index.html","608df052e730740814858e500e6bb581"],["/2023/04/09/Java/JVM/垃圾回收/index.html","19831978d762ce121eeb1deba096c13b"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","390e1af314aa264fb84702210fa699cd"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","3cfcf3af754ad9332c7f044dd81ffce2"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","2076329d25b1a40aa55c058b331055b7"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","4b11e4b3697eddcb23b845a915ced190"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","05de97eb16fd4a31554e542efc66b3a3"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","398769bf4b45e6a848e041cf231f8358"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","ad5a233173185b67189db99e68e56266"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","7fee6634af9a014c76fb6b482acfb02b"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","49375e82d059bac6cf122bdd57b4a26d"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","b9841bd041bedff71ae10c1525b81abb"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","f8d1773d3f7168feb7120449c1c757ec"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","c0437b7c39d7f6f641081b842c0a8058"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","5c3e6e2036ec44769e09146dd606cf3d"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","091d6cc6802adf10d32d455ab5623e41"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","ba517217f9a2f35b327f3ed54373fc79"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","3f2064bffe111f9d0ed38220a56ca7a5"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","413c9bde37486d599f78884e5cf28962"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","beba54101a9fb021671c374c855ec76a"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","077a314a6a642804842e065834096896"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","b72bd3b6b981adb04070157ae55150f2"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","bec04474582bd3cf330f25acb882ca2b"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","33476eab1e0408df747a663a15ffd673"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","8a68b5a2979be633355c9a9d6d7b5dbe"],["/404.html","b865d620772dc41c6fc56663c323f11b"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","05da642bd9855dec7069449813b96edd"],["/archives/2021/02/index.html","9f1f98e58a40802105bd081c2a041410"],["/archives/2021/03/index.html","2cfe6b878221a476684026fcd88a65ab"],["/archives/2021/03/page/2/index.html","4f8f056d42ef75879c458821dcf35d00"],["/archives/2021/03/page/3/index.html","577758e493b17b6fa62eac1fcdf2efe7"],["/archives/2021/04/index.html","b42d55e6b868440a030be855dc3dcac1"],["/archives/2021/04/page/2/index.html","bca9bb89794f059f0fe6b8636cc811e9"],["/archives/2021/05/index.html","014bb7bcd0c362587f5da666dbb8ba60"],["/archives/2021/index.html","619ec73b91561b00599f89d48f5d4f31"],["/archives/2021/page/2/index.html","8eb2a74beeddd05d207f0c0ba5c066f0"],["/archives/2021/page/3/index.html","6815e7fb287851ce825765dc9c472f38"],["/archives/2021/page/4/index.html","ea9ddab78b62bc092fd337b21e2746eb"],["/archives/2021/page/5/index.html","5a5167e66c7afaa1be2073914941daee"],["/archives/2021/page/6/index.html","3039f303d573c8cfc6b406dbaac508bc"],["/archives/2021/page/7/index.html","9f14138b13d0883477dadf57e2108e0e"],["/archives/2022/01/index.html","c8c477087d9f0b329e7f0d13a4bc7efe"],["/archives/2022/04/index.html","fcd47f5cafbd5be30d08ecb5e91d9b50"],["/archives/2022/08/index.html","aeb8aa1a1515d8ab7e11c7325abc5bad"],["/archives/2022/09/index.html","3d49957d30e4f918c8af806acc36c668"],["/archives/2022/09/page/2/index.html","d7dbcdcfd02ea79d06d0269ea3662f77"],["/archives/2022/10/index.html","b481fa63388dc06df0962e4410efc6d3"],["/archives/2022/11/index.html","5c1ef3fafc0a08c3cff60908efe0a03b"],["/archives/2022/12/index.html","1d4169daa9c241d536a56f64bf6a1d4a"],["/archives/2022/index.html","a24bbef820d0ba9fb1aa1ef5733be055"],["/archives/2022/page/2/index.html","9642903d7f452eb5c7518c6227118ee5"],["/archives/2022/page/3/index.html","792a456877700ad02879277d219bcd75"],["/archives/2022/page/4/index.html","884717e17ea61d1544a5e17de8d960e0"],["/archives/2022/page/5/index.html","ecad18ad09883a801a6a731940c16889"],["/archives/2023/01/index.html","7afcff6ef36b082f256cb0971d6f6815"],["/archives/2023/02/index.html","a1f3f4d29f85821eb7794dc7fdafcf28"],["/archives/2023/03/index.html","fb9beca9df96e829e088bd37a275df7d"],["/archives/2023/04/index.html","b0ea76776350c4457073e33dcb52e0f4"],["/archives/2023/04/page/2/index.html","753a066e1ca715b31f16bb89fcf77593"],["/archives/2023/05/index.html","6e59e26b356627ae5326c823be64c00b"],["/archives/2023/06/index.html","479dae2bee1f86e0b9e0748da05259c4"],["/archives/2023/index.html","b89d5fbfc1c9d4af388458029685e7bd"],["/archives/2023/page/2/index.html","ea3d0a7c86a7064181179f0fab9e9cb7"],["/archives/2023/page/3/index.html","ec867768f0f2beccf3df52fe7417c140"],["/archives/2023/page/4/index.html","3150c486a96fd7d023b3b1d7ddbb99c8"],["/archives/index.html","2bc90d963cdbda58cedd95d57b994239"],["/archives/page/10/index.html","1421cbd31cff4caf224cfd31fc391582"],["/archives/page/11/index.html","116fbdc8551578c58a0c556784adec12"],["/archives/page/12/index.html","06037a20096f415338f3f73e42e4505e"],["/archives/page/13/index.html","803ee4c0bc6ec8aa7e06963144cde6f4"],["/archives/page/14/index.html","32713ccc6e24f21c415d887d9036daff"],["/archives/page/15/index.html","aea57d7203b9d2cc844d8e8f6d4cbd4e"],["/archives/page/2/index.html","b40500e7d1b4cb1e341dea7175852aa9"],["/archives/page/3/index.html","df16bd52ccffd3835a47e08e72915cc3"],["/archives/page/4/index.html","20d9b5143fce5224071b4a21af93d17b"],["/archives/page/5/index.html","1d4191f4483e2b2632737f9e6be7fdf6"],["/archives/page/6/index.html","b48b66ec866752e97bb926100b794420"],["/archives/page/7/index.html","32956941b53b5b0b28f00106a21c2b27"],["/archives/page/8/index.html","da1e32c1155d844cb4f6ee8dc29d4e0f"],["/archives/page/9/index.html","01c6aac2fd32fe048285ba1973ae84d4"],["/categories/Devops/CICD/index.html","0659f3c8a6409be02938a0b192bfb732"],["/categories/Devops/Linux/index.html","bb0ac0a684d31da380bdecaf53e1c53c"],["/categories/Devops/index.html","1c45ed3cead51e44e101d4a16b2c98cb"],["/categories/Java/JVM/index.html","29b56636eeeea623fba0f6a1d5a629ec"],["/categories/Java/NIO/Netty/index.html","17bf019712f9a9ff0eb221b58c578b26"],["/categories/Java/NIO/index.html","e3e1b6b33afa5b2e780934a840093b1a"],["/categories/Java/NIO/原生NIO/index.html","827fd752cee227db535003c40c2c204d"],["/categories/Java/NIO/文件操作工具类/index.html","1287828a873d28ac8afa23cc6a785716"],["/categories/Java/index.html","ab2c8b68903277037872b1c0b11f040e"],["/categories/Java/page/2/index.html","4202b65356a56dca6ae58517784b2750"],["/categories/Java/学习路线/index.html","43bd7b0f9258303728e928e77fbf663f"],["/categories/Spring全家桶/Spring-Security/index.html","8dc5f17ae7cb5af0fbf9ed2c99baa7e1"],["/categories/Spring全家桶/Spring/index.html","5ce73d3938324d8bc54e1e988d38c8a8"],["/categories/Spring全家桶/SpringBoot/index.html","0b266247fbd4d5e9da5623041e1eaaa3"],["/categories/Spring全家桶/SpringCloud/index.html","7abffb93741d7211c0c8b3fc5e0271cf"],["/categories/Spring全家桶/SpringMVC/index.html","c732646c204fed73de27c4d4d4fc0954"],["/categories/Spring全家桶/index.html","5d8efd9a5360bed50d82be7aa5734d9a"],["/categories/Spring全家桶/page/2/index.html","e9426310b2823f8be72a654488b6c3ad"],["/categories/index.html","264990495a1d1d9250b36ddcd89482a8"],["/categories/中间件/ElasticSearch/index.html","c8046465b93fda0f0c13b3b69422b227"],["/categories/中间件/Redis/index.html","71e51ce0c753fa5ad874982e79adbfae"],["/categories/中间件/index.html","35892ced620533c8774b8aa37e6a618c"],["/categories/中间件/page/2/index.html","70cf354de3e27167ed9c549f9e4bc2a7"],["/categories/中间件/消息队列/RabbitMQ/index.html","48b2b3306534dde9470ea42785bb30df"],["/categories/中间件/消息队列/index.html","bca0756df98a02371a5433bc7b1b2a4e"],["/categories/前端/Mock/index.html","2b9805efd6232b836dbbe6bb707eca70"],["/categories/前端/Promise/index.html","84e1299385a781806c38fd7122cb91be"],["/categories/前端/Vue/index.html","08138cfa21a92e547c85c0ca1951825d"],["/categories/前端/index.html","15454f1e16f34c7e6749412b6bfdabbc"],["/categories/前端/jQuery/index.html","488c9642cd0c6cd2365fb962b7587226"],["/categories/前端/page/2/index.html","bd72ea8448e9f6eda1d5bc3c5868b35c"],["/categories/前端/原生基础/index.html","4cff8274bacdaea8d04acf5534856ea0"],["/categories/前端/异步通信/index.html","c7217fa6e07bab9ad6d5a3d3217ed6ea"],["/categories/工具使用/Git/index.html","363614deec0fac30a161c6c3fc78d3d4"],["/categories/工具使用/index.html","63024f0a0263d2233b237e688453e354"],["/categories/工具使用/markdown/index.html","69df14295500c699e17d25e12a1fdb65"],["/categories/工具的使用/Docker/index.html","cea45cd9f62cabdc7106316601f33c8b"],["/categories/工具的使用/Nginx/index.html","b763ee212a90a94643cc9f0e3cfb5ef0"],["/categories/工具的使用/Swagger/index.html","9bf611d877105222e95aa128354a3ae2"],["/categories/工具的使用/index.html","cbc7cab4f775d0f5ba62fa576a379908"],["/categories/工具的使用/博客搭建/index.html","5030f042a430625e9b6812d592f5a3a7"],["/categories/数据库/MongoDB/index.html","88b0689c3cfa6b59e7d5346ecab7a1a9"],["/categories/数据库/MySQL/index.html","2b105539f3917cc753d659d7caefcde1"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","006c98a03297ec10e7799dabfc6d142d"],["/categories/数据库/ORM持久层框架/index.html","99cba95adaae9228367c66e75e9e5691"],["/categories/数据库/index.html","47e3822c27f53fcd12c1b60270c4c773"],["/categories/系统设计/index.html","5c9fd5182c0d1e524de4bcfbf4e7fa3c"],["/categories/系统设计/page/2/index.html","1444d03ee6caab90402ae9ebf6734943"],["/categories/系统设计/分布式权限认证/index.html","95bea6861ee8cea7e363473cc6d6224f"],["/categories/系统设计/设计模式/index.html","31ceb1b52af544e17779a6e2deb91350"],["/categories/系统设计/设计模式/page/2/index.html","471a8e9779bc6952130a9b88fc888ccc"],["/categories/计算机基础/index.html","88e30951792b2010180406d8e72c025c"],["/categories/计算机基础/page/2/index.html","2cd4ee182848d34838295e4c9c4e517d"],["/categories/计算机基础/page/3/index.html","bb7385f83eede75df4c51e014be305f3"],["/categories/计算机基础/page/4/index.html","1a43cd95e7a9b85710572456c983641b"],["/categories/计算机基础/page/5/index.html","f29aa8d9f042dc197d5c56e3282e193d"],["/categories/计算机基础/page/6/index.html","52f205876e00b23c6dba93249ad7e014"],["/categories/计算机基础/操作系统/index.html","6e269d7cf5e348179ca9c462e2d059f3"],["/categories/计算机基础/数据结构与算法/index.html","e93e0f12ae35162efbef1a0276bbfea5"],["/categories/计算机基础/数据结构与算法/page/2/index.html","03d0dd2cd296ef534094fd929bd43f60"],["/categories/计算机基础/数据结构与算法/page/3/index.html","db4d5ace04fe4b97bacc8ecf438ffb5f"],["/categories/计算机基础/数据结构与算法/page/4/index.html","0ffc6d79ecf051dfd6f133d7c471d18f"],["/categories/计算机基础/数据结构与算法/page/5/index.html","4cb67726afbe319ebc1369e9a738a99b"],["/categories/计算机基础/计算机网络/index.html","e733d7a4bbf776842151a3bd76eceab5"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","7e2a84834553d29e2fdbec8be903b8cf"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","f7d4eb53e7475646fe9a399c11778acc"],["/messageboard/index.html","36a61cb92b3f1855d4f81a674402d774"],["/page/10/index.html","f08dec10983100376a210539c63c0556"],["/page/11/index.html","26af240c484e5758858fbbd38503b087"],["/page/12/index.html","ebf2b12b693338dd07562f59c55e47c5"],["/page/13/index.html","3b02149358db1984a4013efb0fbb1478"],["/page/14/index.html","728dc3c0b9bcc9b6c6238809d1fd9734"],["/page/15/index.html","66eee283089596e3ddabb5a4c69ab17c"],["/page/2/index.html","c0c03dbc37d8c6617d855b60d5b86809"],["/page/3/index.html","1031ae537f92f1543388b089fee44d4e"],["/page/4/index.html","120fd8eb52a6b410232b56bcc1516145"],["/page/5/index.html","7dad559d0fca97b2e0cea18cb0c7b170"],["/page/6/index.html","b81ce779b173514b112e07dc208f06bc"],["/page/7/index.html","ce54f532fa88ce624ea8b324e02e8341"],["/page/8/index.html","2bb772147433a89552b586726a60e666"],["/page/9/index.html","b24a7a7dc8a8f4634d0b285c05776651"],["/sw-register.js","54bc8267a6ad8db05021b0c3c584b842"],["/tags/Ajax/index.html","e3b9221edd8925b18bc592be0b086935"],["/tags/Axios/index.html","62fb23dbd5fcf11946d950e8b68771a6"],["/tags/CICD/index.html","e562cd8dc6fbb84be7b55026c7a2a18e"],["/tags/Docker/index.html","588127f78a86c17cb4df51fcb46496a0"],["/tags/ELK/index.html","6780b2676fb6bc784bb703518fe1d286"],["/tags/ElasticSearch/index.html","681d17a695f5401e3d2a781936c337fe"],["/tags/Git/index.html","c22ad6e7bbbdb9bb6b71ba677daa8ed7"],["/tags/H5/index.html","ebdb0fb0dd7111b61cdbcf4412f2b965"],["/tags/JVM/index.html","54840bbefaef68a54b50f31f91e69459"],["/tags/JVM内存模型/index.html","e6c6c25595bff94c3e7b9023cf8746b8"],["/tags/JVM执行引擎/index.html","148ab2c80d2a8ab29a52c922b5e6b4f8"],["/tags/JavaScript/index.html","1d2aef0c500d4fc3e895ebefcab8d68b"],["/tags/Kibana/index.html","fde472152f69bfb34a3f9c1ba1f4103e"],["/tags/LeetCode/index.html","bfc9b792ae127527c867025c617dc8f9"],["/tags/LeetCode/page/2/index.html","9907140021791da57a1bcdda318ee33e"],["/tags/LeetCode/page/3/index.html","4223bda46c79ffc0798c212768672805"],["/tags/Linux/index.html","2afe5308dc6ea7e1e1eb1ac7f7fa068b"],["/tags/Logstash/index.html","4eb3831586a343c0c81e3f741d7029cd"],["/tags/Mock/index.html","f7ad574ebf010ca608a9da90ba097aad"],["/tags/MongoDB/index.html","fae68e9cde8f15e6cec0a715a20a45e8"],["/tags/MySQL-数据类型/index.html","95a431143decdfa24413e8253bb97e76"],["/tags/MySQL/index.html","ea8e91fed3d6a4bdb0e7247735e8e577"],["/tags/Mybatis/index.html","7b12c4299f185b29942037979417813d"],["/tags/MybatisPlus/index.html","f2bb7c8388db06347307562aeb6cdfce"],["/tags/NIO/index.html","d619cc330bd6e4b6ef7263b03a5b19a3"],["/tags/Netty/index.html","4055027b07e5e22ba2e49014544f6e8f"],["/tags/Nginx/index.html","6747ffed86d2f7af7d9344ea24bbd50a"],["/tags/Promise/index.html","105a35bd084ac961db7f90de59ed6aac"],["/tags/RabbitMQ/index.html","7a17ab54094712ff6c81188b1678833b"],["/tags/Redis/index.html","b3b1d79aee37d598bd1012731ca7dadd"],["/tags/SSM/index.html","d78bf109738569a3074fe02fbf375b00"],["/tags/Spring-Security/index.html","0b384dcab81867972ec40b2b08596a12"],["/tags/Spring/index.html","47a00108c01c7b9cbf6486969e70965c"],["/tags/SpringBoot/index.html","3d8bad0b3cc6482dd709d42978b4323c"],["/tags/SpringCloud/index.html","77383650a5b549e13461d57a32e063fc"],["/tags/SpringMVC/index.html","a13a7e10a22be31d7ff62bc7f77dbf9a"],["/tags/Swagger/index.html","efbe73aae2018df2a04013275c53bb59"],["/tags/hexo/index.html","569c448c7a19143325e498a1fadf304d"],["/tags/index.html","753ecd678c770f7f525dddc3367ac359"],["/tags/jQuery/index.html","110f78936c57d9cacf735b8307bd7a62"],["/tags/java/index.html","3912d3d67e5b9ea21eff086d4f2302e5"],["/tags/markdown/index.html","21b42b8bcef451b705e1c96a73af31dc"],["/tags/noSQL/index.html","2ad96dcc27018118eef03527c868f12c"],["/tags/typora/index.html","d7fbb7c2ab5ebe22b84d87d486147506"],["/tags/vue/index.html","393e76aa5cd67f495e3e55648e1bc3ea"],["/tags/享元模式/index.html","7553bdaa1480a6026b9c72b3eca23f95"],["/tags/代理模式/index.html","69db82da9ef28d9a7844c9c0ca1217af"],["/tags/内存管理/index.html","ce30686688bd01dcd262da2bb9785fd8"],["/tags/分布式/index.html","50740dc8e406be84f7996b495e80519e"],["/tags/分布式系统/index.html","2d2928f22ae3b35b35ed80dbebeab93c"],["/tags/前端/index.html","9e450b540cd24f069c34c47eccf75264"],["/tags/前端/page/2/index.html","9a75e63ee42108849242938b062dbdb4"],["/tags/博客/index.html","35a185ec35a6bde2b57115e40a3c4dea"],["/tags/后端/index.html","3404f6d78aa0f8d82a84ab0a3ab08aec"],["/tags/外观模式/index.html","fb7a166de10c73395e559f3d42921a81"],["/tags/容器技术/index.html","3b1b4cc98cfecd5af273f4b8f02422f7"],["/tags/工厂方法/index.html","135b948b3f23f468fd343ed9e433bd30"],["/tags/微服务/index.html","c48d7b69007648b6c083a4494407da0d"],["/tags/抽象工厂/index.html","b3e91d73808d3d960c68b6b3faf24cce"],["/tags/持续集成持续部署/index.html","f9ac2e97ab275de007970cb83f0b8280"],["/tags/搜索引擎/index.html","d3bcb6f460b594d6bb889c1b5aa586ae"],["/tags/操作系统/index.html","49182b4a02241892728750c492e9b3ff"],["/tags/数据库/index.html","73413834f40b100926d377af56341ef4"],["/tags/数据结构与算法/index.html","babdf733f84e704329fa752829103342"],["/tags/数据结构与算法/page/2/index.html","924dcfb297b9ced388b394ce55f0b490"],["/tags/文件操作/index.html","d1879bd746ae3e068b16e5ef480d5a4b"],["/tags/日志/index.html","c84c710ab2c21cafbad67f273d350905"],["/tags/服务器/index.html","4fb9864f04f12b1c152dc1ecd827364e"],["/tags/权限认证/index.html","c991f0aa6feaeb6de0aa2feee9752da5"],["/tags/桥接模式/index.html","8bb7df36ba37d2079edf46ea684e4af1"],["/tags/模板方法模式/index.html","29c311e09747d033552a8592bb2e1514"],["/tags/死锁/index.html","de35fbb02fcde2439a78f002520b4ba4"],["/tags/消息队列/index.html","8640a30d10bf0ed980b4c45a550e9e4a"],["/tags/版本控制/index.html","861f3e626aff738588acb5310caab63a"],["/tags/策略模式/index.html","a553687422d7016ebb10fc9f35767434"],["/tags/简单工厂/index.html","7cbb00121c98b7f77ff83a3416300a33"],["/tags/算法/index.html","aed000c33b0a177d9c854c210c76aaf0"],["/tags/组件化/index.html","1b3a892220aae42c73cea9616d798715"],["/tags/缓存/index.html","bee2003e7929849ab0b217c7d26edaed"],["/tags/观察者模式/index.html","2a4ff66deb6ac00e7a6131205a8a2607"],["/tags/计算机网络/index.html","c798dffc3e8b6e09ea2b2821e5758c46"],["/tags/设计模式/index.html","9b7c713b97cdb10155c0e26633d41837"],["/tags/设计模式/page/2/index.html","eb62979336c7b981fe0fb83e13809e99"],["/tags/进程管理/index.html","bfe2c04f006dc616c631424ec7bf5a51"],["/tags/适配器模式/index.html","51a739db5286727c68c6f1c65a9b0218"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
