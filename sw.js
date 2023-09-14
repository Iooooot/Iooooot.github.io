/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","dfe13a7cf3a0b4ae35593b11eeb2b7d3"],["/2021/02/22/工具的使用/博客的搭建/index.html","c23759513c2c0f80a11f12db99841cd5"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","ee20eead376111a079d7c0a728fbc6fc"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","c7052f3d585019c4424b8ea87982d269"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","c23a698db4986218d76fa42e26d21452"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","552e1b45a805bae3bbd802b64fe4accb"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","0ebbc0244c67d7859ad75c345b4b6b6e"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","582d2982c245a737504470c15b5c8a11"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","5860856bcb531fcac1c495e18aaf0cd4"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","297d6f588842bf2091902fd0add8f6bf"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","fe88bc6cd499292b8aed3ac6cd1b88c0"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","8da7cece7568e1146d91a0357f815918"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","81b3b762684bad74d4c89572788c188f"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","57ec14fc65cc5103d4a3bc33fa5626fa"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","f0ba9964f445df355068953190a88864"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","8cd99f703f3a9f0253430b3f2e949418"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","ed93554a05e5e3e897a84d82b0966f84"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","061826332116f7dca8ed1e98ccd7e1b0"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","805bd7f65ed3ef5faaa7144dc95d0df8"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","f2478f62867cfb70d320e685449f4ef9"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","8f7e60056a1232364b1c717bf9ae8009"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","4622bcff8aa93b92ef294fc1c4ed63c2"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","d59478211ba51c5659fc15c9017acf77"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","e78df27ed9d7dd20be6f84007ddce5f7"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","abd96edc3854e277a4457db8aa6fb984"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","01c7e5ceeba41dbfc62fe1f1a8bca514"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","e96f3f76280301fcbe0eef0297adb943"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","a73190cb5cf88da56084d197d1162e96"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","8677c21062f930ec0e9d71bef1ac63ee"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","26f5bbd48c5084c7e7c149a4376adaf8"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","1922a44085e8aed487273af663e52b30"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","24e8fd5ed3931e402a863a5a3e8376c4"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","78710706179247bb6e343beb220a6452"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","1226085e70cb4953589d636ce2299834"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","10f3cb27e343b38a83d34ab3fccf4167"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","caa42a39b59792fde4715b6d851ba235"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","2fcd4ad00463f3fb14dd0ee19c635fb4"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","25c42d4d60bfba46c2965337dc35e529"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","4a40fd632c401b4d569bc8c549e7b0bd"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","db49e14d9fb512ab6134028a460239e3"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","4ddc4a13ffd45834c4dd67c5abe56020"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","2d0673ab79b86c66b878a96bbd090924"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","99b4b689e716903b991a0ca32dedabf5"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","4e2f8d4ea3e559910588c1cc5fe23000"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","c4778c2540c49e4e8daf92ab085b6b36"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","9b89a17e3f9cefb2de87111bc54229bc"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","ad2c061d0dcec795536a4f0fb2f044f8"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","40eacc4d27d6d11815f5063261ff4849"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","4f54321791532d0b15d4d0a46900ee07"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","e0f589aa3674dfdc6056237d1a268c14"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","87f81da3667ac4030aa4bd75818b7a37"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","df6cd45d7e94ff608a78664ff5663945"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","a209f6772aaf122148eee03bef1203e5"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","da3d3bc99df28c43a5f0df4338a14a24"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","7655f81b37e28c91214737324190665d"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","4cfac590aa1a2e69bcc94b3ea0758bff"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","10b07ddd9e6875c94172ec44863f9be2"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","a3d7b11468dc28fbf6d24e65fcec18b9"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","487942c20685e7a8b3141d89977dc233"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","47fa36ceafe039cf4f126b6533be4164"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","ab7ed271247b6d1b7a76c18523a99619"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","02d832bcef3b0ea0501fb2fee17a5404"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","95fbd12f5b4ca48cbb698e7b2d27787e"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","59d82eae8dff5247f11cd2ec801d3369"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","82fc911e3465667cfc2854343027e928"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","55813d923f6969e463dd1620d5888626"],["/2022/08/17/前端/jQuery/index.html","8505b8814959c6c16517694a745ab6a6"],["/2022/08/19/前端/JavaScript/index.html","550246c810226ef6b4b92fb85153cc77"],["/2022/08/22/前端/Ajax/index.html","ae5f1db9ee8dbaf2a62d6ae45f44f37a"],["/2022/08/23/前端/Promise/index.html","ecef17494312dea2642aa104a9df375e"],["/2022/08/24/前端/Axios/index.html","c8b8714dfbef0f6f9a9613712535d68b"],["/2022/08/25/前端/H5本地存储/index.html","5d6eb4565b5c96c6314f45622334f981"],["/2022/08/26/前端/mock/index.html","60839864e7348785f389ce8b20d49434"],["/2022/08/31/前端/vue/VueJs/index.html","f96b1c3cddcb3fba928aad285075ab94"],["/2022/09/01/前端/vue/vue组件化/index.html","a8dba44694ca675239cc4624b9472780"],["/2022/09/04/前端/vue/VueCLI/index.html","5372f412287c780376ed11d2390dbfa8"],["/2022/09/07/前端/vue/vue实现动画/index.html","16a9038913ce9f65ef8ace9013a6d4c3"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","550a40dfcfce1fb5459b22b9cf0abceb"],["/2022/09/10/前端/vue/Vue异步请求/index.html","326ba2c88197e8c096c5aaed1bf0dc2f"],["/2022/09/11/前端/vue/vue-Router/index.html","903de93b72303269843a1ad0e04b013d"],["/2022/09/13/前端/vue/Vuex/index.html","aae9e00e56bb360a88131700ed40462a"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","ab2746c4d5b549cf50841741b8dd5316"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","ac563d4c310a0ab3a648e7e8e77d9737"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","7956ed01e7a1f61559cf4a18f95ff442"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","0c971c437c7421aad6d193acb1353062"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","1e3a65388ad61a17acb3e1cee4e58312"],["/2022/09/28/DevOps/Linux/Linux/index.html","31b4d674fe31750e0a9cad3aad8eb7d7"],["/2022/10/02/中间件/Redis/redis基础/index.html","580b3723e081e23ace5d4fe0f57f3989"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","2ab031694ae82ad009a3cc9408dd4906"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","a35432061d85560b100e65a0b45bfd12"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","0f839d47cdefc247b188831a2b80e1fd"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","0170ad20e8b96f75689f9c81b7be7b42"],["/2022/10/17/中间件/Redis/Redis集群/index.html","c3baf0ab0648fca96e23a5ebe67c54ec"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","2945ad0069aa000090506e79f90dd090"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","d161bea8241cb0b5793188fc28cf9bbe"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","f6c554b8d8331c6bc8a2e218f8393174"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","e27f5054c69d7f737722f69e5b57311a"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","3c22648ff8c938890ab425093393ce8b"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","124185bca14457c40dafd1cd925148c8"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","21df6193e113895c4e97d5b8b4b6f8ae"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","2305777b6f1eb1c207a844bb2783d52d"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","145f999bb4033c5c93ffacb8602412ab"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","48e535627626982dfefb1c0d9c4d82cb"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","601006ad78f1a1f861a1e3065c877b58"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","f358726e52fb817ed15111fbb7f01383"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","849fe38eba7f955c22d3dd6bf0aadc28"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","43357ee21ebf81dc24cba36635c7b5a3"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","4857fc16e6da813baf37c94aa4353cba"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","135531a0c8152b2bdcb36310b9591e92"],["/2023/03/10/DevOps/CICD/CICD/index.html","0fe072864cdf6c74b493796ed5bf7b1e"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","b0465bf724a2b22595ba9dfdfbab5cf4"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","9d6cd298aa025ac6cd3b056ed471d27c"],["/2023/03/13/Java/NIO/NIO/index.html","e3556ac9fa18e7b8dc753ffecc576aff"],["/2023/03/14/Java/NIO/Netty/index.html","04cc39d1d746b16ebd1ee7879f1e9120"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","bd6fe696be63561d6c01205760526114"],["/2023/03/17/系统设计/分布式系统认证/index.html","8db17745836fffe71db876d2101c131f"],["/2023/03/19/Java/JVM/JVM概述/index.html","ec8bf0af0ec61191f21dae5a74006fb1"],["/2023/03/23/Java/JVM/类的加载过程/index.html","5864b6f1d2cf0dd988f85859bd858698"],["/2023/03/28/Java/JVM/对象的实例化/index.html","46e1c753d805752787f3111b7711aac0"],["/2023/04/01/Java/JVM/运行时数据区/index.html","b288a819afc808616ad59316909e73d3"],["/2023/04/04/Java/JVM/执行引擎/index.html","14533b21397e5378a37e06d060a2eea4"],["/2023/04/06/Java/JVM/对象引用/index.html","f1ac497fef0ae63223b7371162d46495"],["/2023/04/09/Java/JVM/垃圾回收/index.html","f266554628deb5e99ae2f8ce7eb30c99"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","2538a27313cc5d83629c9a2a75728efd"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","83edff970c6bdddb012962db82d3d64e"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","b793485abfc792130797ccfbf0bf9da1"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","a6c286c0eac2f79a8e67d03514b28b52"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","8284e13c79279ef1ecdd08bd99bd77bb"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","ee835db17a5783043106b09c71176ed4"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","24043ad9f6c6dec7020abae05229d6aa"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","1f042ae10907bd8855a462047fa2e7fb"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","a1192b7f9f68eee017117d6c54f1dd6d"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","72a878cb78acce60804910dbbae39dcc"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","d2650843d7fded4dfc8c2ca973dfbfc4"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","eb2cfff5de28b904f6d922cdff545c83"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","a63675f9cb137a5a8cbaa8111d7ed849"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","a7f3ce6a6571d42467f00ff0d18b4347"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","04c11d4cd42545676653c668ef93cff1"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","3f2bdeab2fe1ae8425e64920f7d6ee34"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","a2992ae191dbbf72b9437fa120c08758"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","ae2593b548e0c85106c62bb74b153ad8"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","bd20aa43086739b453a4b155f056054d"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","93ba1f398400e3763bccbfcb657f02c2"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","a00d2c7ccbf7c50d1ee56f52561dd058"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","7201ab71bcee00d42b0078be2b075d21"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","6b5eae6e975dee8d086e31d0d2b2d5fd"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","311b090c562d61c78dfdede89324f3c5"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","a2d9a05b4ba907daf81e8a4c56193eb4"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","6eeb02c2f0174c30fb403dd539fa41be"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","23f096a558ed02af9ed5ed3f0eebadb4"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","49da053cb4bec7baac50eaad3d3c3430"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","4f7cb6e3a1d241ad8a986099205dbb58"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","d8a8f6490f6d8e1534d361170824e32c"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","869ef841eab5f02ee9ed3aeed7705833"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","194da546288c47025fc264aaae3ca6c4"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","e295f721d639a475d7d19c3065134384"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","8de50da7e459347376f72fa1c7330b65"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","d84df531fceb51c8791bb1478d6132b9"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","5d1f238269732abaf869ebca95f7d137"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","2c34d99820f0cdeb83999622ac76918a"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","143465cb2c4b8a2c81db0ed4e61d4911"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","2fd7028ab25fc74b13d5105ea76d92cb"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","7cb926a4d5f2c7f10700a2b66097b01b"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","8a952aebc847f9116204413c823523ff"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","7ada9fad6fee5e317948d3ae90441b77"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","8f41e2c5e9f812740c34562adff76bcf"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","473027a704fc53dfc12612abd896ab28"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","b11b23afd91352e9486dae3f8730bdfb"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","6c72ecfa24717eb947ee6ed4a89c4f68"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","44c4c2ffeb499565dd8f8203dce0101d"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","2802c54597dd020bfea59926b02804fb"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","8ecedf2cf31f7dcbe7139407b5fdb380"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","dae7f48e54d583c1612345f29605feae"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","a130c44582a5e541eeb32df06f2b78dd"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","9aedb8d225e3f2b8a721269cc19efeca"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","86218ae8b1734867a5e1cddeae9056b5"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","b883d363dfd8983f5f79d987c5a8b46c"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","02b70abe34985cf3bf1b92777901a0c0"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","b324cf4d632865eee18c88a4c21f81ec"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","9f49e810b69810d0fabc666ebd55afc3"],["/2023/09/04/中间件/Redis/Redis事务/index.html","bad60c818178db134ef43684f09c45b4"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","eb4f414e3b807dcb84131f1538fbd9c7"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","a1686edc4a5ce85ab5f085051e42763e"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","b4cb9e2b0697d508b52d5551f262c5eb"],["/2023/09/12/Redis数据倾斜问题/index.html","99ffaad861e41bcd9fe34d077f8fbece"],["/2023/09/14/Redis6-0新特性/index.html","b6adef6b3deff08bab468e68c4180bf1"],["/404.html","954567c347475dea5c0ebde3e2326e81"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","77e1afe5c6d7ed3cd87ae9d30026e78c"],["/archives/2021/02/index.html","1277d1fe0c071409242bd964d21f93c5"],["/archives/2021/03/index.html","35bfa6483287fe32cf6858913eaedc62"],["/archives/2021/03/page/2/index.html","54be54b87b1a7c18e8b49e95f6f5667a"],["/archives/2021/03/page/3/index.html","ae8da8165776042730780eddd3061838"],["/archives/2021/04/index.html","d2c67e1f14b83bf51973606b87f550fa"],["/archives/2021/04/page/2/index.html","9691b6235b2092e46e7169d82bec2b57"],["/archives/2021/05/index.html","8ee34d0918d785a5a50008cbf23dd2e0"],["/archives/2021/index.html","85175dc7e8e5c1ffdb80ecd64db6380e"],["/archives/2021/page/2/index.html","81e5fe529d44e1e52dec8c5f6e5e576e"],["/archives/2021/page/3/index.html","5276a8f61bf5015f3993ef6cfa749bda"],["/archives/2021/page/4/index.html","c48c900ad5bef0924222f8eb43b02302"],["/archives/2021/page/5/index.html","29e339047722ebc46711c3c1c33c5d29"],["/archives/2021/page/6/index.html","68b7630f6c8ffbe1f7e8fbd2d31c4a65"],["/archives/2021/page/7/index.html","8e40836cada44576f0452e9ca6f7a9ae"],["/archives/2022/01/index.html","0c867b8972e60fbcca795de4c684c65e"],["/archives/2022/04/index.html","7bcc6a2e6583ddd2125e657d038361a2"],["/archives/2022/08/index.html","1237e667b6adbc5c77e24fce01c12771"],["/archives/2022/09/index.html","a5e98fffd841ebf9d5ed424ea07bc591"],["/archives/2022/09/page/2/index.html","2b949eefc566b1813042c7ece4de063b"],["/archives/2022/10/index.html","dadd3cb853672a1341b37d2cb34afb30"],["/archives/2022/11/index.html","37856dc77e5d351c43b454d32fcc8466"],["/archives/2022/12/index.html","f3370f083454850c0161b39023cda7f9"],["/archives/2022/index.html","b1141795df7d8d07a6d8bad81a79b74b"],["/archives/2022/page/2/index.html","de2b4080d3321eab400acad15872a271"],["/archives/2022/page/3/index.html","8aa3278352b771e45effbb1b13761a47"],["/archives/2022/page/4/index.html","9f2b453b28344db3225d45c542a45ec5"],["/archives/2022/page/5/index.html","ba92a784c3a8084a98791b23ab9f6436"],["/archives/2023/01/index.html","80b0786ad4579400e464611c55ef9294"],["/archives/2023/02/index.html","f1bc05311d27aa93313eb2496126569c"],["/archives/2023/03/index.html","845a5a0c4b484eb9ef60d4297a65270e"],["/archives/2023/04/index.html","2bd5cab2f47480aab2a13bc8fca2184c"],["/archives/2023/04/page/2/index.html","d41e0cb56695c9a8b2806026c2d40843"],["/archives/2023/05/index.html","b958fb49346d16d71edcd2b2430e4b89"],["/archives/2023/06/index.html","7f1bdfc4ab532de7dbbb79235f911cfe"],["/archives/2023/06/page/2/index.html","4f8cc46bc813c0d57fbf53482c56eda8"],["/archives/2023/07/index.html","2d16cf1fc5b0d3e6be8af46cbb9daab0"],["/archives/2023/07/page/2/index.html","11d28f925eb35222f15b783de334a7f6"],["/archives/2023/08/index.html","a03b2bef9b8d2871abedca281bf43b7e"],["/archives/2023/08/page/2/index.html","07046e6be588c8be6582367afac7d5c9"],["/archives/2023/09/index.html","e2fa0a3e1757e0778f57bad9b7995cd1"],["/archives/2023/index.html","3604c93c3c598e3b6c94159f923011bf"],["/archives/2023/page/2/index.html","bb6dd4ed51de7b5c48483efbad2bb5eb"],["/archives/2023/page/3/index.html","e55023cd0be11f894bd692dd227fce74"],["/archives/2023/page/4/index.html","02c6997e3cbb48a35c87ccc45eb6211e"],["/archives/2023/page/5/index.html","8e05f7abc8541407882e4ce307964b17"],["/archives/2023/page/6/index.html","a855f91604ea48c2a692911dbc2db497"],["/archives/2023/page/7/index.html","d304bc0ec222871f35611fc11a63f3ea"],["/archives/2023/page/8/index.html","bcce1407a36057996cdfb689afe2d744"],["/archives/index.html","c13877b573107467ee656b0d992f66fa"],["/archives/page/10/index.html","f3ea13cc066b30e8624f572d6b1cc243"],["/archives/page/11/index.html","217f4eecfaa19bbe2224f9d6b8d71f44"],["/archives/page/12/index.html","8dba3e1e8d0f1d0bf1a240a9345acabb"],["/archives/page/13/index.html","3d5801ec9ac34a31d6ec88cc3a6e8239"],["/archives/page/14/index.html","3067849c83c37b063175f23ccd205812"],["/archives/page/15/index.html","72f650898473c63e5bc01a19aa581c5a"],["/archives/page/16/index.html","741f09567e5f07a352d979e7bd5ccf4c"],["/archives/page/17/index.html","9da394d804a3f96f55be13c92d6a1b7d"],["/archives/page/18/index.html","9c497cc1eb876d59fcf0a972348f6817"],["/archives/page/19/index.html","f37493583e7ae131fa841a520ab396c9"],["/archives/page/2/index.html","438ca2af4b387402b886bcac1e9f6235"],["/archives/page/3/index.html","f175c8a4bb100d8b5501934e3c6b9e9d"],["/archives/page/4/index.html","2616b244ffaa23c4eb0f204fbdae2cfa"],["/archives/page/5/index.html","2a5e2018e8469822048e44a0ad774ec0"],["/archives/page/6/index.html","2328b90805d8e79e09d5add7f3368edc"],["/archives/page/7/index.html","d1ca38c5a63ab9df04839b9f87e206b4"],["/archives/page/8/index.html","edc04c3ec75a6592721a250e23936617"],["/archives/page/9/index.html","442804d6c555d9f7fda2dadad5e70d32"],["/categories/Devops/CICD/index.html","a502618c5f69598a822d055a5648ca6d"],["/categories/Devops/Linux/index.html","d6aad8f4a6e9ff3cd0f5ed0277f80873"],["/categories/Devops/index.html","777e2c0091db6b62fdc4b58b9fbd5b57"],["/categories/Java/JVM/index.html","2aea69e5c5226a01b2ce444cb710dcab"],["/categories/Java/NIO/Netty/index.html","90300f266a2b2f450e85195aa5a19a57"],["/categories/Java/NIO/index.html","fa2265c938ab0122df9d42873d7df549"],["/categories/Java/NIO/原生NIO/index.html","3a462de713fd3b41602511468cc8f812"],["/categories/Java/NIO/文件操作工具类/index.html","4337225c4b8737611f1c0b20e99bb924"],["/categories/Java/index.html","ad690df0518acbfc4d96db6a546de459"],["/categories/Java/page/2/index.html","a703d539ac967dbf3a6845d584a8a68a"],["/categories/Java/学习路线/index.html","ad93423bccbd115db5cd7ba2a82e4bf5"],["/categories/Spring全家桶/Spring-Security/index.html","b1ee9825050097a498032708d6659f5d"],["/categories/Spring全家桶/Spring/index.html","f9730259246d0cb0304eb4538a13f23d"],["/categories/Spring全家桶/SpringBoot/index.html","1e99ef28d87fac28c6b251782e6751d8"],["/categories/Spring全家桶/SpringCloud/index.html","9c335917b3538105de9f80ebd6617bcf"],["/categories/Spring全家桶/SpringMVC/index.html","41ce7787923718db8aa255cc249aac97"],["/categories/Spring全家桶/index.html","69ffefbb887c4f8217b4bb10ccfea614"],["/categories/Spring全家桶/page/2/index.html","aee5251d47b7c050036fd55a9704848b"],["/categories/index.html","4d61e331a736b6af26fffda3b484f1ad"],["/categories/中间件/ElasticSearch/index.html","d95e71ad51baf883fdc99d2fb72c8108"],["/categories/中间件/Redis/index.html","d318fa3667ac95b6d22403a12b6bf1b0"],["/categories/中间件/Redis/page/2/index.html","8b8aff2674e65cf0ba5305d22c22e93a"],["/categories/中间件/Redis/page/3/index.html","752364006c336904bab63a9b05386aad"],["/categories/中间件/index.html","d96980b057f7a9ee8d52ad615aac2583"],["/categories/中间件/page/2/index.html","c6d994e78910111c70fa30631c0a5ea5"],["/categories/中间件/page/3/index.html","816f7f3e853746cb971363e41c6271fb"],["/categories/中间件/page/4/index.html","6329ba915eaeed1e55dbcb8073ea371d"],["/categories/中间件/消息队列/RabbitMQ/index.html","491f55e00f7bb9dff8aebfa48115e7c3"],["/categories/中间件/消息队列/index.html","18708165740596eb1af4c78918d02741"],["/categories/前端/Mock/index.html","089ffaa2cf866f826e5284caa09d5f1a"],["/categories/前端/Promise/index.html","bd4fbb235d49bf625168f40fa2a6a4e8"],["/categories/前端/Vue/index.html","09c06d3136844670614a9b627fa9a470"],["/categories/前端/index.html","cc1131e71c83223af9043bd93f9c5ea8"],["/categories/前端/jQuery/index.html","a98ff50791fab5ee6096d86c00459185"],["/categories/前端/page/2/index.html","a886d811e239591a261bd6f92baf2f6a"],["/categories/前端/原生基础/index.html","5ce47dc23e6f7eb5403379ad5e9e23a0"],["/categories/前端/异步通信/index.html","ce2de143507c5573f3c1081cc0828a25"],["/categories/工具使用/Git/index.html","972904e66a7215551581378d813814af"],["/categories/工具使用/index.html","76b5554119d5a307672f3ff0abe22bb2"],["/categories/工具使用/markdown/index.html","73a73e08b5f644ec21a4b2ff3478a8e1"],["/categories/工具的使用/Docker/index.html","91292b76e09d00bb395b9240571f67b9"],["/categories/工具的使用/Nginx/index.html","7ca8335537f8e5070f74742f434bc0ea"],["/categories/工具的使用/Swagger/index.html","df3be7777de8dc586fda330e344f3414"],["/categories/工具的使用/index.html","669930679c3ef86f38591ed836bc4af7"],["/categories/工具的使用/博客搭建/index.html","7d717e2e4b147b9671f63ef018d7a73b"],["/categories/数据库/MongoDB/index.html","f0edab04fead3ee2ece2710fab1e38b2"],["/categories/数据库/MySQL/index.html","4ad82082893769a903a3b41ee4b3c9cb"],["/categories/数据库/MySQL/page/2/index.html","48ab85b2bc39f2f7e3f375f5b41eb346"],["/categories/数据库/MySQL/page/3/index.html","d6019f76b35956829e42f9cf67be3cfa"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","8fe46df6ec9e32011d4844cbac16c501"],["/categories/数据库/ORM持久层框架/index.html","4c81d3102477ca9ac19e0e1a66a50b4d"],["/categories/数据库/index.html","16903e4d23ad8e363b6c5e1250dd911c"],["/categories/数据库/page/2/index.html","36d620573c31601ed02756a426f7cd9c"],["/categories/数据库/page/3/index.html","52a0f2447476f715b03f6172234d5aca"],["/categories/系统设计/index.html","c881148bff00e998ef6e528fb345a57f"],["/categories/系统设计/page/2/index.html","f9f13395a97d4b1e885959c029f4b382"],["/categories/系统设计/分布式权限认证/index.html","09df137609a9fb390fc228309d48c2a6"],["/categories/系统设计/设计模式/index.html","440145adaf1b183798715612316818c9"],["/categories/系统设计/设计模式/page/2/index.html","f91ddda2a463c5abf35d1574296294f9"],["/categories/计算机基础/index.html","e912cec7b9bc81cb84624057e48d08b1"],["/categories/计算机基础/page/2/index.html","34dbc76b00b956b9b02a66d2a50592ca"],["/categories/计算机基础/page/3/index.html","66de17db58ec0de8e2e4097d55efc6fa"],["/categories/计算机基础/page/4/index.html","8585678380e6021bc2d3b872409afa40"],["/categories/计算机基础/page/5/index.html","f58dbde05af59b8c8a8c3d454da957d5"],["/categories/计算机基础/page/6/index.html","a7835c102d1a8121d338924b54274292"],["/categories/计算机基础/操作系统/index.html","158e0982eab27adde92e2c7994900012"],["/categories/计算机基础/数据结构与算法/index.html","43f7adccc90ad468022aec92b87cfdea"],["/categories/计算机基础/数据结构与算法/page/2/index.html","eb41dbe9be89690ff6a112144f2e9e46"],["/categories/计算机基础/数据结构与算法/page/3/index.html","38cabb58e6d51f239953e6d9bbfc355e"],["/categories/计算机基础/数据结构与算法/page/4/index.html","a016eae0193fa69b7b4df5284e75472a"],["/categories/计算机基础/数据结构与算法/page/5/index.html","8e10d23bc902de5bf0d586d2d1e7fbe2"],["/categories/计算机基础/计算机网络/index.html","42e447a8341ddad87ebd1e07bd51e820"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","4ee5877ed77bd4395d1eabf99c287dde"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","95f03cec8a3c1ecacdbcb9556af7a4a8"],["/messageboard/index.html","350091bca98bd5d1e07a4579349a6a9a"],["/page/10/index.html","d5f573e54a67c672cbb925a52a9b8298"],["/page/11/index.html","46dd11359fac5417dfa891e28ef8d94b"],["/page/12/index.html","66897f22d5c038dd810a868034fe8551"],["/page/13/index.html","b9cc430f13beb90aee0319a963f80d3e"],["/page/14/index.html","8483ca1f5a0b01d7d9584729264ab36a"],["/page/15/index.html","459e31c0037764177cf2da352c3e2527"],["/page/16/index.html","ec373e51d6b984edc89cf8cfc0b9c249"],["/page/17/index.html","2e8e846ce9163ba7e5d09830cf56f32f"],["/page/18/index.html","5d1242a2627302a6254f6dcbae39a97a"],["/page/19/index.html","83b81bce54c35e3bd66585b0b41d4838"],["/page/2/index.html","2b1c976765898393f2925209eadf31f8"],["/page/3/index.html","fe9be70720827c2f4b8e0349fb0d527e"],["/page/4/index.html","4f055369b6ca7d4effb07f926bd3b9fa"],["/page/5/index.html","52abb0482edd26a85958fe8c586b119b"],["/page/6/index.html","ac7f8b48270fa791aa159539cee62e8e"],["/page/7/index.html","f9ba388c3d9c12d46d6a4da7cdc0b1d7"],["/page/8/index.html","5c2a7697a0a1aa212d19e41340e05691"],["/page/9/index.html","333e0a0d048454da47bf64531702efe5"],["/sw-register.js","b1660c9224c5560851cf1ac8f16d5251"],["/tags/Ajax/index.html","85f153f538d0e6047dcebed35f06e966"],["/tags/Axios/index.html","78be13115e2115188794c6b14e6578f9"],["/tags/CICD/index.html","9809bace797ad95286a3c9f5a27b8f1a"],["/tags/Docker/index.html","79c4927e4ac98b6741f8dcbe08fe753e"],["/tags/ELK/index.html","81557912ecec59c63a56b7c57f104514"],["/tags/ElasticSearch/index.html","a87ff62e7016505c3d209b25a36e97dd"],["/tags/Git/index.html","f3cdf9b2e604c9d91478c1001739b653"],["/tags/H5/index.html","4558e31b0343d30f9e720aad4dd15375"],["/tags/JVM/index.html","97133bfba116b6653b304bd896d1cac6"],["/tags/JVM内存模型/index.html","0bad743abb8b62d30ca08790a069d974"],["/tags/JVM执行引擎/index.html","48aa9568862b95c9bdc9c5c7ff40a17d"],["/tags/JavaScript/index.html","ffa793b04c4d368c7446f3f191b6b446"],["/tags/Kibana/index.html","8c1b0052eacdeba270cbd5f9ec05ea16"],["/tags/LeetCode/index.html","05852e43e00507a42b40c7d3eb0f8045"],["/tags/LeetCode/page/2/index.html","af4389893838a7ba323ad114b6965482"],["/tags/LeetCode/page/3/index.html","8df3e48d9333afc46c33488d2b5564f5"],["/tags/Linux/index.html","a6088caea3fcfb6de8148a12936e16c5"],["/tags/Logstash/index.html","0294cdd959069cb9eb04126d8395b204"],["/tags/Mock/index.html","74eb09e054d4fdbf46ddafe0cdc0aee2"],["/tags/MongoDB/index.html","5dbbd8dc8ecac730bde0637f78bdd559"],["/tags/MySQL-事务/index.html","ab77f4e2cfabfd4bd82af109db4df587"],["/tags/MySQL-数据类型/index.html","580a57e00cd5e55468ab3be793103c16"],["/tags/MySQL-日志/index.html","7bfe21893d00c997285f3d029d4f9b41"],["/tags/MySQL-索引/index.html","6e0edce8caa36bd0015254043b2947d8"],["/tags/MySQL-锁/index.html","5c8b30b5ac2c3ee44fb539bc7276db90"],["/tags/MySQL/index.html","00a8f49cccf219301ab24578d1f34bbb"],["/tags/MySQL/page/2/index.html","a3d93aad8249e9a5ec956829504e625e"],["/tags/Mybatis/index.html","0b3b9327e8bb20f2e5a3d6a7b096af9d"],["/tags/MybatisPlus/index.html","f6009696236b90aaea26d25189691c3b"],["/tags/NIO/index.html","5ac0fb4581dc3618a03ca359593fa31e"],["/tags/Netty/index.html","1ff3e01fb977eff19a8ce0b6ea1ac289"],["/tags/Nginx/index.html","69cde7e4682c54af48936a0bbdd6869b"],["/tags/Promise/index.html","a2001a153993ce6b3297c4f875febda0"],["/tags/RabbitMQ/index.html","15bd430fbf42a4ba77d3a2ecf4126c1d"],["/tags/Redis/index.html","62cddb54277c6f8f3a44aaa1132ae08a"],["/tags/Redis/page/2/index.html","75a33881c1b775b2a0e5c1f96347defb"],["/tags/Redis/page/3/index.html","4965235bebe28f7b780efe4287f08276"],["/tags/SSM/index.html","6ca2419eedcc84153c4e8052df4e0e37"],["/tags/Spring-Security/index.html","fe242476cddbce91997b42eaef0849c0"],["/tags/Spring/index.html","e301ce78cd6e0cc0e6b8924ca1ebdb74"],["/tags/SpringBoot/index.html","c176335cdf74c7f7a570a77993b34cba"],["/tags/SpringCloud/index.html","4ad691b912b76d27c46ca37e37ef8a1e"],["/tags/SpringMVC/index.html","ea2c8927e58d47f0e172c1b47382c7b3"],["/tags/Swagger/index.html","6f3125c207083d170470092f1e80577c"],["/tags/hexo/index.html","a55acb32719734780192cccc42bc8df0"],["/tags/index.html","cf5e143a62bd5422a4a1f2a74a91bdac"],["/tags/jQuery/index.html","704e310b08cbb20fe0b1bb62311fa54f"],["/tags/java/index.html","295e7bf656e9dc378357d5019651818a"],["/tags/markdown/index.html","4ce18c543ab46a42bf58dcc180c638ea"],["/tags/noSQL/index.html","4bffb6ea2185c0054f69f6fc471c4e82"],["/tags/typora/index.html","23e6fb47e801cb0823eff322ede6e637"],["/tags/vue/index.html","97598377ab47840c31901df9eabdc044"],["/tags/享元模式/index.html","115b11bcfef1a223f35c8fce7a3a7c0f"],["/tags/代理模式/index.html","d8ff9d83511277dca35f8d9290fb9a21"],["/tags/内存管理/index.html","0b4b85620725d67ff27f45296c581f26"],["/tags/分布式/index.html","30e5f50ac015e7e54849c55cb0f5beec"],["/tags/分布式系统/index.html","6d827e73bd4597d1847be1c9b6c900f4"],["/tags/前端/index.html","527372d6b114f4ec2a4b48032da4f3d6"],["/tags/前端/page/2/index.html","4c20ab8742d97babba5e7f3549eeb517"],["/tags/博客/index.html","b2b33796fe4afe2de17eea6ca867cc63"],["/tags/后端/index.html","0fdbe32765aca93278f2607c8b7dd4fa"],["/tags/外观模式/index.html","d6041dd3ae6b5a21221347f61196bdc8"],["/tags/容器技术/index.html","1de5a0560c232771fabe5c4f1129b7a9"],["/tags/工厂方法/index.html","93a5b0a738293c208255428129a116e9"],["/tags/微服务/index.html","aae9ef72b95a35d4805c0587d9f0484e"],["/tags/抽象工厂/index.html","e90db5adfde3bfdbce746d42a023ecf9"],["/tags/持续集成持续部署/index.html","fb44286097808874a48140133d024462"],["/tags/搜索引擎/index.html","3f2321ada3ad8558fd47149de3b948b1"],["/tags/操作系统/index.html","04bf18f22a978ea14b705aa57f8a47a7"],["/tags/数据库/index.html","284eff17430869ab74f76b2cefbfea20"],["/tags/数据库/page/2/index.html","bfcf02b954cc147350bc1f636523ce25"],["/tags/数据库/page/3/index.html","cd772b71670c5c3704a7316edb61897f"],["/tags/数据结构与算法/index.html","32209e4a1a44732efc70ca52de812e1e"],["/tags/数据结构与算法/page/2/index.html","0ef1e806b5084125c43933253b089e35"],["/tags/文件操作/index.html","dbb0108f8cdf088e97f8ae901b42ac2a"],["/tags/日志/index.html","aaeb7031ce0be9521d2c2f82b4f146c7"],["/tags/服务器/index.html","9823f66227daf664e60518c66742522c"],["/tags/权限认证/index.html","58ae105fa1c21195e5b9d727a5f137f2"],["/tags/桥接模式/index.html","8e9243f4592ff4ca19c2d03589478464"],["/tags/模板方法模式/index.html","d2680c6ed10d6422dfc4407f962151b2"],["/tags/死锁/index.html","ce351951e9109a8a166fc4fb48a6c82e"],["/tags/消息队列/index.html","10a10ec295cb7a730748cf741b3d97f2"],["/tags/版本控制/index.html","bc7626e89554320f64a486e17d24f2a9"],["/tags/策略模式/index.html","a2c76573034cf1406c55c39526ff302a"],["/tags/简单工厂/index.html","ce936e3b75bf389dfa4da0a2be871f88"],["/tags/算法/index.html","a3f646ba695062945f1477780db626ea"],["/tags/组件化/index.html","d0d658e39e1524a887df177878ea75a7"],["/tags/缓存/index.html","0fe13b5a9ec9b5a7af981e51a28cc628"],["/tags/缓存/page/2/index.html","f74216bf3401900a9af5ff1ba9200342"],["/tags/缓存/page/3/index.html","477b636ac06a553c7d12e400eb06f551"],["/tags/观察者模式/index.html","f9702f2671459f496fa4330c67a19647"],["/tags/计算机网络/index.html","690e8076fd7c2989efa743751cca028c"],["/tags/设计模式/index.html","a7e27e670d777ea53a11f747ca3a7e6c"],["/tags/设计模式/page/2/index.html","9600f1d09d7fb63966e9726ce55942bc"],["/tags/进程管理/index.html","0b5675cb5ef0da585c86d46ef4ae7519"],["/tags/适配器模式/index.html","c6e5b9e56f914ff2fe9afd5b686232c7"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
