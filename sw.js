/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","7b5c72688a719c67fdb78188d7d0e2b6"],["/2021/02/22/工具的使用/博客的搭建/index.html","03dc47abd5b9d9b80b0a4fa0c4dd872c"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","c76a651d8efabe223e1a59d95c844ad6"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","54214aeb06c52522de3693f2f4c93a8b"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","900136b135f6e20a854310164483825a"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","5079f862d03cd787c9f2afc3fe22d3f5"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","1d8a8bad4786b638b9371ef0cf5d6400"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","b520e0a4132ce025c1fe8f48d0c49328"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","5b8a8c00bb2cbf598f1c8905898a0b49"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","976a190084cc3bb9115c3b24d488141a"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","e8efdfa67e19741f3263ae4e54e76812"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","86641219725213e1aaa25dcfdee966de"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","f2e926ec874cdd4a46e0937017c115b9"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","e05d1d49b234cc8106f4ea29c14bc7c7"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","755aff8b175ca6bb438d7015a646d503"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","26e045badc423e38bd7866173231a7ac"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","01412ab1505aee82be41dbb32bc02fdb"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","3706173019e2932b64abd731cc2d6d1f"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","2e1b02c9533b63d180876c872bd1cabd"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","013b43d2d9bfed9fa9ed4b3c2af3b2d6"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","85548ab07a13f807aefe4ce4eb8c2ceb"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","75e6f7410c8e82a1817c71241c34c986"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","b401f4a6d86969bb10c88c6a412510f6"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","b1bcd581606bd923ff8abd1771f039ec"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","33f2fc12562f273bfa4fab098fa548d1"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","b7d524e44ff01b046e0b9f0ed6448845"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","da2c45d080c01967121473704f195501"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","2b40b7867d38a651ab78a4dcbd35b2bb"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","2ba2b8d59128eb7cf94571f6b94f2444"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","05417730723ecbd1110b2d86aaebe90e"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","82bd90a2eee87502def6f9954a194e34"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","2442f339396bbf5d07205a478aa64d5a"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","52104ce2382a3dd92e2f57b70555aa58"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","69878fa7c5982059454bef550b47c9f0"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","a42014036db41b062dbf36a0c087bf3e"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","3f9fdf1b2292c24ce7924f2a0b6f7df6"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","f29e0714911cef42397d9d6ff0f398d6"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","df79179e088b03823dbd61d58bed1f61"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","2837503914ce527c7526cda10a963b16"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","1b03dffe9ee16b1c3dce3a51822445c7"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","dde7e91cf8722dc218beb1435187bad4"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","b587c91c27d91c1a607b3aab9f8cc120"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","a187070e5fbfe2ced72b6f4ce4e44eda"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","dfb180ccedbd6e863359c8814ed260af"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","6ad039df7f269c41d8fb3cb034f7fd9b"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","92b8b5b306f3addf76453cb2ef730864"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","a94df64a4936188ff449814d34ab29ea"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","222e12a40f7ec166f3798a8c9cb34758"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","088978249adad50bd598e6b1b191bbed"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","9dc107bfbf81010402e49debfe76635b"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","2c30fdc9fd27e62308c60a4eec103f1e"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","8d6d7ee6c95502a7f642716f00cbb1bb"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","acca481a22ad8d4dad65cb0aa30c691b"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","53e58dcd4e3a83c748509e8815b2d8f1"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","0194274f653e16216f9c366842df5173"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","4e6a033620e65a0835f084e4fa211108"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","78e0f2988f178c6fe05267276414f0bc"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","116e734c668adccc3c26db2c23698f4e"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","bb9b7cddb4763baaa85745cdf6354b59"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","a14931cf7bd6cddd3ac6abbdcc1bd873"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","05665d91da84d2b48df28b73e6c8e32c"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","ac04ce2ac212929cd9e80895ffc1ac08"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","c4c8c3d07ef087fe65ff8bed76fa5df4"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","e1ea6f3f5b498558934711b32a13d15f"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","105bdcbc42c82e8149491af22b907a17"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","6377f1b43724804ae4013b1e18d98906"],["/2022/08/17/前端/jQuery/index.html","4d4ada6d52065d643c3a57137af17acc"],["/2022/08/19/前端/JavaScript/index.html","a986a3d910f7326520a546772145f36a"],["/2022/08/22/前端/Ajax/index.html","0431911a3016f44bbfc50f2c75f9e118"],["/2022/08/23/前端/Promise/index.html","785c86921d05816a0060834700d4805c"],["/2022/08/24/前端/Axios/index.html","9089fd02abe6d0a94f7991e692165694"],["/2022/08/25/前端/H5本地存储/index.html","88cf9c4b399d3a340bb0f064c85659b2"],["/2022/08/26/前端/mock/index.html","e680f22aef9690ccd9707373b4317470"],["/2022/08/31/前端/vue/VueJs/index.html","9d18746e3f75782255004f6926021c35"],["/2022/09/01/前端/vue/vue组件化/index.html","bac280190bf5680f5b60343886c06d9f"],["/2022/09/04/前端/vue/VueCLI/index.html","2939d4b058772617048ba483d22aa953"],["/2022/09/07/前端/vue/vue实现动画/index.html","269fddff9c72e5160aec7f889647979e"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","259d4ad6526aca284f349fd4843ebf3c"],["/2022/09/10/前端/vue/Vue异步请求/index.html","2ff413289c25ffcfcc1f7faa5ad71b9a"],["/2022/09/11/前端/vue/vue-Router/index.html","66944d4d9260ab1ae42593bd1267d080"],["/2022/09/13/前端/vue/Vuex/index.html","c0de902a494410bc0f8537734f3e7235"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","0dcf3d7b116a972343138458e5ce1174"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","ed2da121c52b9c2fedeef777faeddf3e"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","e8e781b4349eddf6174b6dcdfe9483af"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","d26f312a5a8321227f13d1f53f41c374"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","0818a7907225ded05e663769ad2b8cc0"],["/2022/09/28/DevOps/Linux/Linux/index.html","560d23b3e2122a0a09c3fd07b5d7976c"],["/2022/10/02/中间件/Redis/redis基础/index.html","dcf9a4e280ae84459e22c7b593f53e68"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","6f07e83740af6c1a7438865e8cd87687"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","58d7cc5c548a0d915126f3b92130a6dd"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","0c1e48fba8765c1727dc9d524d5d0be2"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","7bcc8f94f9e4d6a7f25a5bc27a96c29d"],["/2022/10/17/中间件/Redis/Redis集群/index.html","f4fcc301ec70de1920757396a0d97d5a"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","2ac1e852e0977f5bb8df0bf091aba505"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","36e8226084191891ad6b76ad8d671e89"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","b013d089cec5bfca772991eab77c721c"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","7bcb1a880628fd5673e7aae4756eef54"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","a55a1f0e58c4b4acba651c88a4ac96e3"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","a594ba1c93b1f9f1bc8c2cccfa1f28b3"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","369c30534a894b08646f62a048abbbb8"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","d2a4435d1110f72fccbc4ad0504f2bcd"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","f780f7b81a15f64c67812404612cc238"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","42a042b695f5ba744df6b11f3195f4bd"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","671ad3859c29a1adb68593768283ec15"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","da718e648bceacf303234a2b09a2db49"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","46c4637d74aeed75b1009d94ab8a8356"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","2ca59b1741749b5c6c74bc07ec64bc58"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","41e0854004bf7bb704098469799af878"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","75d4ea5e0df3b2fd0bf18080a6a0b3ff"],["/2023/03/10/DevOps/CICD/CICD/index.html","22823e87f056c2a99cf236f132a2f6a2"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","0edb090e6571bd20cff5e1f6e0bbde05"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","797549a3bf398797b4575bb5921067b4"],["/2023/03/13/Java/NIO/NIO/index.html","b329d61976ebf7e3a5eb9e53f12a8e51"],["/2023/03/14/中间件/Netty/Netty/index.html","83ca526d6aacded5b4ab14ed9c6e1d22"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","ec75f2b6d83c8aa546da33b0578fbc23"],["/2023/03/17/系统设计/分布式系统认证/index.html","2c71fc28a7ff16f8c1b36a819d14a53b"],["/2023/03/19/Java/JVM/JVM概述/index.html","802c204b2ac45336c83dc5e2bfc04b7d"],["/2023/03/23/Java/JVM/类的加载过程/index.html","bc193c69c722a7798171ef63c98136b5"],["/2023/03/28/Java/JVM/对象的实例化/index.html","77d5f252d83eb8560006f2ae6b7d77ae"],["/2023/04/01/Java/JVM/运行时数据区/index.html","48065f23f2073906ffac10efbab8186d"],["/2023/04/04/Java/JVM/执行引擎/index.html","82e144684ef70088a8a6b8c17a8facd0"],["/2023/04/06/Java/JVM/对象引用/index.html","7964bb1dabb67776edbd24c85efe71f0"],["/2023/04/09/Java/JVM/垃圾回收/index.html","fac7a75869ac097eaa31bb395deac3bb"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","410076106dd54504aa64a5d46b01aa14"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","40f927186a100afab47db70762cde9d9"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","ddd4bfbacc0f671b2eff250c899a1b64"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","68a57bc9bc45c69f3d8c340dc6556d25"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","3803cd74658a61884fe9fecf021597fc"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","e2c0db3402a7a74a87c46a80c4acfab3"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","b778b6ef284189a1373aee767e6a4ec0"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","a00d7036253d3e9c4c652cada1f8694c"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","a5de487edfb0f48b52920fdac9db9d7b"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","5c970d44966b09f1d9f0a076fe65ff7f"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","777306a6283b4ad66276cae733247c2d"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","cbd1e08555e0637f0ff7bfd39d400461"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","b4457204b7f4ecb3b52e1834f449710f"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","cbe32019c29aae86abaaf2d6e95c5bbe"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","ad773715060b06fcf19fa1b9dbaa796b"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","696199bf607c2064ed7f82438d2a3cf5"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","cb58f6e38c0cfeb7c01e45fbada2bb2f"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","4d6a6096783d372ea157fc1c78bccfac"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","9381ee39e82fe5d9aa587f2a2cba9e68"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","1713688ab0aad11568e8a546cd03d48b"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","78b7acdbdaf3e8bc0cf59480661922cc"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","1146761393a0bdec1ca7e56c17251e8a"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","a8ec60bbdae99980ee9786442cc83369"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","f03304fc2bcc898cfba38a2ac9a685d0"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","af29641c79ce62f2160eca8ed6c04909"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","d5f47c47b81625f1e3883e9622a0e1a7"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","86881d34e8365395b454b97f3be4f77e"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","c2f8c99883a42ae332a838274f72a22b"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","e0439fea3b97cb58fb421de8caad2926"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","a894e00484bc57a2117e9c0136cebc5a"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","d7563a4b63bcb9545f6b605cc5eb589e"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","6966015f8ea6fc37ef9a141fa6171d25"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","7fd0ac1b4b18b244e7c36538776aaa24"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","bbde11c41f78c1d0516f276573576c1f"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","b956678736ff3f3fd9eaf4e778b23fe3"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","1a1b69cf9eb3bf2b0e53d29738e58529"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","163b55e8c39cf80f1e58ff8049e90076"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","8d00108e259ae17e7acaf02a9ea239b4"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","b6d52a1045f829f9393a73da2a7e5ed8"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","e31c67399c3062c489876ef5d1c72da0"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","655f3b53810b4e764e87474411a85bf3"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","18fc7bed28aee105eace5f4df77fe61f"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","61e0cd94546bbe66fd052084033e9ea2"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","25a3c5c275a594669f14f3594ce0a3c2"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","6e51f4d8ef2c7708ea22e677e0aed5e6"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","72fa407a91329ce7f61bae42cfb475ae"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","ad6c37eecb9164f3cd0c522fe6c6bc41"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","b8897d0b2fcd191dc94a14ee873fda5b"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","8a3b9b0ef48dee3a214d8477323f3c16"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","707dcc862c08bbf181826b27509e0f07"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","bc25b8594e8429ee028e0e244f25f1d3"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","c528e82a4a72ae9853cf23be63a27c1f"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","8ad039c8df6c7bd1e6da140f9309fb87"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","9e941d9123a30faeea27cb42cb00f55c"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","64c57b569bf4c79277980063fabc6a58"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","f07323ac072a3c63adc0e69f4bf16048"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","128c19fe17d66b10d64fd2ec3904e767"],["/2023/09/04/中间件/Redis/Redis事务/index.html","26bb591c46570bf6037a9dcc6b52147a"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","4770732f1aa3a145d198ef9306e54f9f"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","9cb746114f4db4704a05835f4a225571"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","80cd266a002a6667b1a4730139a64214"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","f7533946beb04d3dd8e683f2ead93efb"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","bca62b427ff277d9e2c787e59a9946e3"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","2083cd5c05a81beaade91b5f30831310"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","3acda2b8b5e6c9a914d1e0bcccbacebf"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","b97e2424682b09c9425c99d29e76d796"],["/2023/09/22/Java/NIO/零拷贝/index.html","c408c7f3e7448cd38cf3d2a24d5941c4"],["/2023/09/24/系统设计/JWT认证/index.html","93999b2c4f4de1b5f301c67f177d55ac"],["/2023/09/26/Java/NIO/Reactor模式/index.html","802254402ad98d21b3bf7fac6f054df9"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","6848282ddab55e4360991dfb7719eb3c"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","a448814844ced9b2eb10d42713e8c06b"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","10798f770921f819b53794e4b910434c"],["/2023/10/09/Java/并发编程/共享问题/index.html","8df6039dfd53ebe0b55dd23796ed2207"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","2b4199618ac452c1ecee8f15f02e9fc9"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","be3861e1bd9b9c86cf62bcd1171c5f18"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","47336d5f06f4d060bda3a2ed6a20b0e3"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","15c7c8dce91c2d8c70ab0aa057d19e49"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","0abef095e403841298ed5413dd8cfb2b"],["/2023/10/23/MySQL数据异构同步方案/index.html","02f13c51596794d337989262d9236b83"],["/2023/10/29/动态通知方案/index.html","af130f262d3cb8d701ae884be44a795e"],["/2023/11/01/多级缓存架构/index.html","0853f37dabec88b256d59ac3019fca58"],["/2023/11/04/分布式一致性算法/index.html","d11c2b221f7ba3f5d596f98610723eff"],["/2023/11/08/接口幂等性/index.html","1b6ded9e0f37c5cc3b2cce292262f3d3"],["/2023/11/12/数据迁移/index.html","b5e9e656de3781e5ad30fd6046306189"],["/2023/11/16/经典限流算法/index.html","a4236b47d9a5c90da0480727fb162283"],["/404.html","480bffefa17fd92a63baae458687a5ef"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","594030e7c4d80143142a5f41edbc9a92"],["/archives/2021/02/index.html","83a6ecf1e431cf3321f35e145b952d19"],["/archives/2021/03/index.html","d9e3fdac4bbb813e3302d6cf3a7e8c9a"],["/archives/2021/03/page/2/index.html","520084f039ad0ac8ec3854c173f7c7fe"],["/archives/2021/03/page/3/index.html","8cb216f0d96f842db0377718f3cc9077"],["/archives/2021/04/index.html","951986beb960441ab7574076ab507840"],["/archives/2021/04/page/2/index.html","3725b824a92a914e9b4c13e0e474bdd0"],["/archives/2021/05/index.html","e3351b0dab0084d324a7aec72d7813e9"],["/archives/2021/index.html","0d38997f631582cc046b60bad662f7a2"],["/archives/2021/page/2/index.html","44aa854e2e558717ef6d35933f40a507"],["/archives/2021/page/3/index.html","7525953cec562c7eff683bd6c3932ae3"],["/archives/2021/page/4/index.html","e29a06b75727ce8c7a7799c3bf822529"],["/archives/2021/page/5/index.html","b6df25cfaf76ddf987066c71fca0f9a8"],["/archives/2021/page/6/index.html","7355e3fc2ec56faa67c09e4ac27e215d"],["/archives/2021/page/7/index.html","2fbcd37b7a59eecb401be555941318f6"],["/archives/2022/01/index.html","60e674f30a2145d970994fa6d9a0892f"],["/archives/2022/04/index.html","cb1d3914d7118889a31d5e8ea4279558"],["/archives/2022/08/index.html","7e1533f906989d17444d2da80c7414f0"],["/archives/2022/09/index.html","e7f40086bffe8f25f6821f5ae3db4ff8"],["/archives/2022/09/page/2/index.html","f408494f44527c4585a828e2ff8c530f"],["/archives/2022/10/index.html","94d6f0c3ab0212cc8697463e755976a9"],["/archives/2022/11/index.html","6ca164584c8f7ec2fd1818acf260b44f"],["/archives/2022/12/index.html","25dcd1ca0d70132da39dc6e9367c5972"],["/archives/2022/index.html","5e16bd287f8a0f79c0954c6e56574f73"],["/archives/2022/page/2/index.html","e9f97a5a5e5fa794a78345836181f85c"],["/archives/2022/page/3/index.html","4f399f1dda6761d9dcf037b706b572e4"],["/archives/2022/page/4/index.html","ee9785fc1b3d575a5a7d57b88cc602d6"],["/archives/2022/page/5/index.html","f3da80b27d166f18a98ae2ba0d2a6783"],["/archives/2023/01/index.html","9f327b546626e89d1eca42780b46b103"],["/archives/2023/02/index.html","95a572eda0054cd3908c6946e1ccd502"],["/archives/2023/03/index.html","3d3ce33a10e9d0186310de6b93d07f2f"],["/archives/2023/04/index.html","276ac771985ce291b8e1a6375c86c5d0"],["/archives/2023/04/page/2/index.html","a02aa9f68a7d22e34c8e862b3aa2fdb0"],["/archives/2023/05/index.html","522e219684325d23efb13c8d0fc36ba0"],["/archives/2023/06/index.html","03efd952cf27a3b095bee3f5398e1e09"],["/archives/2023/06/page/2/index.html","2a6f2e1bf8d28c692556b30c6e70cef6"],["/archives/2023/07/index.html","ac9b0e666d8e5746385ac31dac274aa8"],["/archives/2023/07/page/2/index.html","284b0814761860e09be110ce5701efb5"],["/archives/2023/08/index.html","262abeaa8918d38233a1977bab1d8ae1"],["/archives/2023/08/page/2/index.html","2603001194b88621c5cb45f5e2fb87d6"],["/archives/2023/09/index.html","da781fbea05371aded56fcad16c82aac"],["/archives/2023/09/page/2/index.html","38763a2acd34dab31eb22a26965fec70"],["/archives/2023/10/index.html","8afc36c7ec80875271536cf04cb1002d"],["/archives/2023/11/index.html","0527dd9197d32c322a96ac0e649098dd"],["/archives/2023/index.html","43b95aec7dbff420aac2a0abbaeb2e8a"],["/archives/2023/page/10/index.html","b05c950e218e428997add18aa12cdcf6"],["/archives/2023/page/11/index.html","d7f515a5764a41fc477f9ba98eed925a"],["/archives/2023/page/2/index.html","bd1102a4b4bd17d9084025a854075bb5"],["/archives/2023/page/3/index.html","77dc4ad76829e2530a46030e58dc970d"],["/archives/2023/page/4/index.html","e7d0cdaaabc35b0e295454d6c0c75c51"],["/archives/2023/page/5/index.html","fc3f60c231a3b5fb13038e0e464371ae"],["/archives/2023/page/6/index.html","c6082d2a6106de6f47d83884e9094877"],["/archives/2023/page/7/index.html","2a296e0202223bacf0b866666ec40830"],["/archives/2023/page/8/index.html","21f23e07f813f7590afc6be1beb86480"],["/archives/2023/page/9/index.html","49c77be7c91c877d9f8a9f56c59ec192"],["/archives/index.html","4fab2087c9611efb3471a67fa7da1b3f"],["/archives/page/10/index.html","3688b9ad23e14e657435f58f53691448"],["/archives/page/11/index.html","594b8989ad9d1a49474847dbccef65d7"],["/archives/page/12/index.html","8fa6375de00057fb50d0a9d1734e30db"],["/archives/page/13/index.html","e1a44abde243888ae7f5f2fc65953ab1"],["/archives/page/14/index.html","c49641fcc026e65be80f927d28636bc5"],["/archives/page/15/index.html","2a0ff3b915ac3e5a3698c28e1a80f946"],["/archives/page/16/index.html","8d051cf991f8d5615045ff71af557d7e"],["/archives/page/17/index.html","d3c05a3e1ab5a5483dcd190947b866b4"],["/archives/page/18/index.html","ea331910db6630c71dc16bbc22298035"],["/archives/page/19/index.html","ea861293889ffc3fcdd75b4478ddc3e1"],["/archives/page/2/index.html","dd91422f1f60d31e608f4db82cc57b7b"],["/archives/page/20/index.html","fad26352ebdef5630f859987dc5e1c5a"],["/archives/page/21/index.html","086b8d2f0313d7943bbfa2a2f4881f47"],["/archives/page/3/index.html","1a8a103732226208edb561119f5996be"],["/archives/page/4/index.html","38d0ec56384268f4f88a759cafd6a611"],["/archives/page/5/index.html","b5b19d76bf8820bc4392cd290e0aa14d"],["/archives/page/6/index.html","2c153bc195184cd0499c9c64adae64a7"],["/archives/page/7/index.html","f5b79cce076f5423c981cd1ec437f92c"],["/archives/page/8/index.html","429a5a887a58038041c511a6e2a7455d"],["/archives/page/9/index.html","1888bfbbc842ff6a50708005ba3470fa"],["/categories/Devops/CICD/index.html","de4a76ba5d759c06dfcbe3a04fb833d7"],["/categories/Devops/Linux/index.html","45778d661336897a92a5f3eee229c2dd"],["/categories/Devops/index.html","82d5b48edd51151a54b1c1b5c06b8786"],["/categories/Java/JVM/index.html","c41ec5411f7ebdcc7089dc04b62d9f39"],["/categories/Java/Java基础/index.html","8196529548b676be0ed4aef7881613ae"],["/categories/Java/NIO/index.html","d37aa8cec242a1781a60912eb2621971"],["/categories/Java/NIO/原生NIO/index.html","fc74d8a5fe2fe59ea5960da6d8e60b7e"],["/categories/Java/NIO/文件操作工具类/index.html","75b0414c6db5f5d0ab9a3f6bcbbbe0de"],["/categories/Java/index.html","6a9ea9a4890eb1635b047e6c46bd426f"],["/categories/Java/page/2/index.html","eebd791eaa4860378ebdab14fbf375c2"],["/categories/Java/并发编程/index.html","4a5c5db689e6d4e3971b47142724f854"],["/categories/Spring全家桶/Spring-Security/index.html","6ed59a18f1b438bed32d454831f3503e"],["/categories/Spring全家桶/Spring/index.html","c8b5d709018cdc4f9a5310e73d7043d0"],["/categories/Spring全家桶/SpringBoot/index.html","a97244427bf5a0e7f16bd6e720799449"],["/categories/Spring全家桶/SpringCloud/index.html","21bd889abbf49791419ef073eb07a819"],["/categories/Spring全家桶/SpringMVC/index.html","68f520630363c7a2865013abcfeaa205"],["/categories/Spring全家桶/index.html","57654e2192841bb7620aeee80c8a2ef3"],["/categories/Spring全家桶/page/2/index.html","c76f481f5416e908a047ebb7c19268d9"],["/categories/index.html","d8f40596839db5f8041dba24f642b42e"],["/categories/中间件/ElasticSearch/index.html","0e7e39c0e77e4fd5613e33a592112205"],["/categories/中间件/Netty/index.html","cee4cbabf9554e7f189f194939358f8e"],["/categories/中间件/Redis/index.html","fdbfc0292d4080469a2f56cdefc309f8"],["/categories/中间件/Redis/page/2/index.html","71d59d09bffdad9df2531659d69f9482"],["/categories/中间件/Redis/page/3/index.html","7004553a4c535f48f248c4a74096b05d"],["/categories/中间件/index.html","5c764013f30c83f6ae0931d96bb0cc1e"],["/categories/中间件/page/2/index.html","777a4ba192a34712feed54466f33a1ff"],["/categories/中间件/page/3/index.html","f297bcb5f6e45e0b27c04f3a4c85d940"],["/categories/中间件/page/4/index.html","554f75a56288182230ef22e66d2a291b"],["/categories/中间件/消息队列/RabbitMQ/index.html","ae0897b052dff090b782988a3956716b"],["/categories/中间件/消息队列/index.html","d0a6ff4a4dea77330c0c2fe50effc1b6"],["/categories/前端/Mock/index.html","cf386e483c5da678aa9427981203c0cd"],["/categories/前端/Promise/index.html","e13613528663b5b9d1df9342f658eb88"],["/categories/前端/Vue/index.html","25a3295ad894aad1dec32bae32fc39fc"],["/categories/前端/index.html","0602bcba1730fa0900dec47ef06d22b9"],["/categories/前端/jQuery/index.html","bfec2cfca1481c1ed22a38a8e9a87509"],["/categories/前端/page/2/index.html","d64acc0397232d33b41373b30e1ff412"],["/categories/前端/原生基础/index.html","cbbdde692600a3e01685a6da176ee2df"],["/categories/前端/异步通信/index.html","39c51c644a2ea350b6a7473ccd0c866f"],["/categories/工具使用/Git/index.html","3ae68742fb5fe4d39ca770fdb63b2579"],["/categories/工具使用/index.html","645eb29d3cb3ef4978bdba513ee81912"],["/categories/工具使用/markdown/index.html","fc78cb8937fe582870e0fcc2ca3eef54"],["/categories/工具的使用/Docker/index.html","1b827bfc74164ccb7da67b0b83fb4240"],["/categories/工具的使用/Nginx/index.html","13d461ce0492717b906f35e4869f0bc3"],["/categories/工具的使用/Swagger/index.html","57cbecc14d3d6b50effb15fb67e721dc"],["/categories/工具的使用/index.html","8914141199d8f3b7a9878a6712a264f5"],["/categories/工具的使用/博客搭建/index.html","542dc4b84db7261573337b1250971d76"],["/categories/数据库/MongoDB/index.html","377b1f79d425f9a86208dfc296e8d878"],["/categories/数据库/MySQL/index.html","6b00296ec8275abd6af707b6b10dba77"],["/categories/数据库/MySQL/page/2/index.html","943228bc9b376d09f241d33360d82df2"],["/categories/数据库/MySQL/page/3/index.html","872d443b31d81ef6ea58b5c84c8a423c"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","20c713f461472c029954195fccd3d267"],["/categories/数据库/ORM持久层框架/index.html","b096f9f371328d8f9836b7d28f25b946"],["/categories/数据库/index.html","aaa4ef054cd5dcf7ce954d4503bbb577"],["/categories/数据库/page/2/index.html","6f299e2f8e229bc6618ee2ae3beea61a"],["/categories/数据库/page/3/index.html","6bc147fc1ba49c9888421e501e464688"],["/categories/系统设计/DDD领域模型/index.html","fd3ebe0120f8deea1f1566af155cd00f"],["/categories/系统设计/index.html","bf481d85eb8930cb5c52bf1746184605"],["/categories/系统设计/page/2/index.html","b7dc39d6965e7180d3391578ea602518"],["/categories/系统设计/page/3/index.html","6f26cca12cd58c04a4168b094239e3b3"],["/categories/系统设计/分布式权限认证/index.html","bc86490343a4768013925b87467cf72b"],["/categories/系统设计/分布式系统/index.html","2bcb445cc1c39db0862f8fa4b4847151"],["/categories/系统设计/设计模式/index.html","dfa11d8af5fa5d6771605a652be25813"],["/categories/系统设计/设计模式/page/2/index.html","4222fc133a7a28881affdd0fe6e35597"],["/categories/计算机基础/index.html","c456900c9a7a4923c46264906b0edecb"],["/categories/计算机基础/page/2/index.html","38b6f0fa8f6be791d1675b880e51a964"],["/categories/计算机基础/page/3/index.html","1f0efac2f8b949c6d0af264fa1f65591"],["/categories/计算机基础/page/4/index.html","02ed784c8fbb679034a8dd41179be787"],["/categories/计算机基础/page/5/index.html","c091773022faca262bf3123ac59fe295"],["/categories/计算机基础/page/6/index.html","9beae70546e0dabfe75283eb8169a13e"],["/categories/计算机基础/操作系统/index.html","b3f835a48a27992e08e3f30f7a0fb705"],["/categories/计算机基础/数据结构与算法/index.html","7165ed9a0b74786ecff71acb60e4cfdb"],["/categories/计算机基础/数据结构与算法/page/2/index.html","2d092290590b99816410283589b148e7"],["/categories/计算机基础/数据结构与算法/page/3/index.html","a4e307dfa452f8f43b9d70af8985d152"],["/categories/计算机基础/数据结构与算法/page/4/index.html","37b0a2d0790088b4f254260db0453c51"],["/categories/计算机基础/数据结构与算法/page/5/index.html","d13ebf39853df41c1d8231acc69869a5"],["/categories/计算机基础/计算机网络/index.html","1b409282efaa6bf8a03524b43affacfe"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","22b2e7ce27fb9c7d477c7c6d9625e9a1"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","72ab48e4df597afebfbd41b9b881ac32"],["/messageboard/index.html","bcb46527802dea4cc192e290093dd5a8"],["/page/10/index.html","a0884f961c215204078e1978ad13d6ed"],["/page/11/index.html","fb8476f51f29cba3eea1d1332985608e"],["/page/12/index.html","26548ca378aa875d8eb9903303f41cfb"],["/page/13/index.html","b1b3cd190603e861be65983eca7e41f8"],["/page/14/index.html","ed2bac65dbec5b382d1fc973190bd986"],["/page/15/index.html","18ce2de6af925ffd6d915523ed039223"],["/page/16/index.html","68d04c9859d028edc5470cb8d9424124"],["/page/17/index.html","8862c13034abd39472edb903055c1606"],["/page/18/index.html","0e1eb4ef52117c424033cd5c50a2b634"],["/page/19/index.html","75018974ed9ccb18db2eb19706f71550"],["/page/2/index.html","3bb3a8a49f5879c18298af36280c3dbb"],["/page/20/index.html","59335072575cb126ccf88c301bbe66c8"],["/page/21/index.html","ca244fd0aa370311a811e83f596def5c"],["/page/3/index.html","ca38d5ccffb9dac7bf903c3539084afa"],["/page/4/index.html","4e78cdd8dfc16ee3a19991addb283f17"],["/page/5/index.html","9ff71228663c750ea432523f9b4504ce"],["/page/6/index.html","cfcb7a28a21dc66673a70bf9481c5b1f"],["/page/7/index.html","cb78b8e2b4bbfeddb6b87986e1c604bd"],["/page/8/index.html","8695b455e44711ffc7c80834b453fda2"],["/page/9/index.html","151437e735efd81e0a505eb1bc3d335d"],["/sw-register.js","e42e4fd4f3a1cdd0c7e9ce3969e83d1c"],["/tags/Ajax/index.html","d808eef2ffa7ff0f5f016f37b354c5e4"],["/tags/Axios/index.html","34ac70163561a140f3dc306a276dd029"],["/tags/BASE理论/index.html","6af51890a622b4f53ee66c69d73787a1"],["/tags/CAP定理/index.html","50084c99f1c72aa85f9bfedbfc81e369"],["/tags/CICD/index.html","2b3670a8f40d1a75220dbe8144db1f6d"],["/tags/DDD领域模型/index.html","51eb5fedbd27ba9713d1fe743a42e712"],["/tags/Docker/index.html","5e02838f2a0967edf4f5f76652412139"],["/tags/ELK/index.html","803c5c892fee16624c4712c1d92ff5c1"],["/tags/ElasticSearch/index.html","d116cdbc10e066a63c158d131948dd76"],["/tags/Git/index.html","811476180064b94a8e4470753f72128d"],["/tags/H5/index.html","f5b6c05e890189baaed3a03b93619c67"],["/tags/JVM/index.html","ff58bac19086e6f0ec0890c6cfd80283"],["/tags/JVM内存模型/index.html","a9d013d21e493cf6cf410827dbd2bd92"],["/tags/JVM执行引擎/index.html","f9530b5665722985913f29692a097cc3"],["/tags/JavaScript/index.html","992e8809f8e71f1e4013d474d1d7e5c5"],["/tags/Java内存模型/index.html","2aa3fa0e29bd2b925e23fd0a102e5e8b"],["/tags/Java进程线程/index.html","55c30e72b0146405458790fedf7c2f96"],["/tags/Kibana/index.html","afc0bedf9597b2fa3aab18e146c1d591"],["/tags/LeetCode/index.html","5dcb088daffcd288758d6fddbe97f97f"],["/tags/LeetCode/page/2/index.html","e2cd1961c170a040bccdf4cfa4f7c319"],["/tags/LeetCode/page/3/index.html","2767d70e3c003d4eb4dac27dc146f415"],["/tags/Linux/index.html","c7c425a1e4e122bbf070170484aa1296"],["/tags/Logstash/index.html","f3703c9d9483e5180b7e12db57f4ec9a"],["/tags/Mock/index.html","4e5b4dae511617b27c78504571a868bd"],["/tags/MongoDB/index.html","2e27a48d2522d6098419b113f3fb1cea"],["/tags/MySQL-事务/index.html","c8f7bc4a823be209b8937a8f2108e204"],["/tags/MySQL-数据类型/index.html","178797fe2df8482bd2d3d7417c17384d"],["/tags/MySQL-日志/index.html","006fdf343f7852fa6cf07762360d4097"],["/tags/MySQL-索引/index.html","9a32fbfd60f091a9c73d1e50a44786f8"],["/tags/MySQL-锁/index.html","f837e5b40e1c5cc6229b6fcdae4080c2"],["/tags/MySQL/index.html","b6e8f354b1a06ad2668eebf160004dbf"],["/tags/MySQL/page/2/index.html","29fa19f5e50be6b8e99ba69d1c46df99"],["/tags/Mybatis/index.html","9c4885a9d18fe59f0a9a4e25854394c7"],["/tags/MybatisPlus/index.html","8c2688767eb11c6c397bd4ec96922583"],["/tags/NIO/index.html","19f72e104715725981a56c439eae9bba"],["/tags/Netty/index.html","22c531605f28814b576c44c8a251257f"],["/tags/Nginx/index.html","f67007acf96ce495b5f2b7859240db17"],["/tags/Promise/index.html","aa575a087bc9db9ede4d7011f0d30e82"],["/tags/RabbitMQ/index.html","2a9fa5e40fda5a3155e6f4825ce62d6a"],["/tags/Redis/index.html","e37d21a7f7189b3291abc93dfadab6e7"],["/tags/Redis/page/2/index.html","32a9dec77d6894b267d3f8282699e498"],["/tags/Redis/page/3/index.html","098ce18a280505b379e17aa5bbf41382"],["/tags/SSM/index.html","6fb6847f6ca14355dfe12154b2e49386"],["/tags/Spring-Security/index.html","2766464aaf6e2d301052dccc269e9b5c"],["/tags/Spring/index.html","fbe92e8d02c022af1358464193be82ee"],["/tags/SpringBoot/index.html","37e342026c69b677bb593a5a13b3b4da"],["/tags/SpringCloud/index.html","1074fe3dc882ae81f278e63da004edf7"],["/tags/SpringMVC/index.html","a77673f4d859280627200339720284d6"],["/tags/Swagger/index.html","6238f08279b08c5a8ea13f6c7aa0e123"],["/tags/hexo/index.html","006c1122ec8dc2d0babe03cf8d16a001"],["/tags/index.html","30e398a204d5ce8bea18c215d918d1dc"],["/tags/jQuery/index.html","e2ee8070a836627832979a69d487c1a3"],["/tags/java/index.html","45beab8db5bc91baed51f4ce8dfbdedd"],["/tags/markdown/index.html","cca8e3324728fe8e35895176ca227d3e"],["/tags/noSQL/index.html","22de8d7138f33c0bb21abde910ab55fe"],["/tags/typora/index.html","06378d50cb2ffc510d04dc51faa0c5ae"],["/tags/vue/index.html","fc26f69fcb104944ce288eb8cc53cecc"],["/tags/享元模式/index.html","85bf8c47be62a81e95fbcc5e00490a8f"],["/tags/代理模式/index.html","2a0a39e459957880248e695121451b3c"],["/tags/内存管理/index.html","92f859ca0d1afccb9345450a73dc7c8c"],["/tags/分布式/index.html","f497df6de0cc8a74dba8985e12697214"],["/tags/分布式一致性算法/index.html","f5fbd96208811846132549387f001f6d"],["/tags/分布式系统/index.html","1f4cff02950f904b53ac827fc7a3099e"],["/tags/分布式系统/page/2/index.html","c99e70635519a6e25d638215fb7099f6"],["/tags/前端/index.html","855e1caffe6cfdad90778c15c5b8a078"],["/tags/前端/page/2/index.html","ccc932e808e4c2ac5d1f312e64f0866d"],["/tags/动态通知/index.html","f934002d6ff162fed39c5baa81104001"],["/tags/博客/index.html","9170fc0d142d6139acac758f39c00e11"],["/tags/后端/index.html","ac051421216388b07f34d49d7674a724"],["/tags/外观模式/index.html","3021f40451477c0069f2e19cc8179b54"],["/tags/多级缓存架构/index.html","b6e67f3c0c7266d60b71d286f1ea939d"],["/tags/多线程设计模式/index.html","b70b095c5c1935e31d50dc0d6aa356b3"],["/tags/容器技术/index.html","d31ab9478e1441c49bc0c356021a2e21"],["/tags/工厂方法/index.html","28c10ecdc23f289a25b1e4a7dda7134b"],["/tags/异构同步/index.html","2cd798504fb1231112e067eb20ba3fbf"],["/tags/微服务/index.html","67d25a5e8c5d9dd72fa4fb5bebfe5d1f"],["/tags/抽象工厂/index.html","ca805356fa0752ab7a20e151f78915da"],["/tags/持续集成持续部署/index.html","d7dfb1002adbb8fe09aa9bb4fb5babb7"],["/tags/接口幂等性/index.html","5f4681e537217404de60eac828c206c8"],["/tags/搜索引擎/index.html","e4d9472fccd8acec54462b9c68d61eb5"],["/tags/操作系统/index.html","1d07089d804d09bf0402a1470fe070c1"],["/tags/数据库/index.html","485c9263f3908c92e109e44cc522f38a"],["/tags/数据库/page/2/index.html","f4019e59b1b1da209a9b5b9853438bf0"],["/tags/数据库/page/3/index.html","ec7d74fce8c0fa410402c2485ca957db"],["/tags/数据结构与算法/index.html","5107681ab837337c42c7cd9d0a0de213"],["/tags/数据结构与算法/page/2/index.html","39a5310123372c3c27b11fa5562d1e44"],["/tags/文件操作/index.html","5622f46ae3f969f21ea6b962747b45ef"],["/tags/日志/index.html","aa45d092f5aa0259dd877f18e52dadc9"],["/tags/服务器/index.html","384dd2094bf08f44530c30acc1076f7f"],["/tags/权限认证/index.html","0771dfc32f7bb767797040f451873db1"],["/tags/桥接模式/index.html","66dfc3a6797c451e44a0449ed04c21ec"],["/tags/模板方法模式/index.html","a97fb6c053415fda1f8f688be8191c81"],["/tags/死锁/index.html","e8300f6dfe347d31fdd98ce6915398aa"],["/tags/消息队列/index.html","eace8f34567ffe7f46be4127e47e2bfb"],["/tags/版本控制/index.html","1329730033ac49c07c051cf1772fbff0"],["/tags/策略模式/index.html","fc0e3c9140f6c1cf2aa7d705d78f6098"],["/tags/简单工厂/index.html","5e3f7f1184b014363897b34718405e77"],["/tags/算法/index.html","722bceb484b891693b9a5f3740bee976"],["/tags/线程活跃性问题/index.html","0c9fc20823f6f09679f90cfd9cb4b0ad"],["/tags/组件化/index.html","b5a465df30c8d3ee5eaf00a175018af1"],["/tags/经典限流算法/index.html","a9d03907b4ae31c4cdab30a24c150ce7"],["/tags/缓存/index.html","f58401a64b7505d1ba168537c00b0410"],["/tags/缓存/page/2/index.html","f47c0ff4f13af1da049b025976807850"],["/tags/缓存/page/3/index.html","555e0680657f27cfa1c9b23be9546418"],["/tags/观察者模式/index.html","2fd1ee8112e94b6a8bda78abfedad6a1"],["/tags/计算机网络/index.html","110e79d566617c50c9ed657a17bb2f72"],["/tags/设计模式/index.html","df19aa45b85c5fe645442fab5bf4070e"],["/tags/设计模式/page/2/index.html","dd7e9a8626223f74d06c44e8d50e0249"],["/tags/资源共享问题/index.html","a869573ff7d5cf8a13653df18b5e7361"],["/tags/进程管理/index.html","3855255df5bfef6f40dc0194593803db"],["/tags/适配器模式/index.html","351d7161ee8491fcbc42807241e752ab"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
