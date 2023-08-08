/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","2f97b6a464aae34859c5d9faf57f44b6"],["/2021/02/22/工具的使用/博客的搭建/index.html","a279e4c3bb4a7642219701c6a28124b7"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","1e12be1e103ee346ef66e4c5348d390a"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","e0433cc4c07a7ff8c9bb9a7246f11acb"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","07ec161b77b311cd940a238e211a3a2c"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","0ade2f4ea6193371f6b21a31ea69adfb"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","62d3fa5a6683d924ef1b33f16f6ebcb5"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","887ea4e814e4b9227c4f6a2480ba3054"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","f5710281b63d0af5bc0c527949fc3bd0"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","52f254f6cf4603fb4d1bbc525a4742ac"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","186b0854eec0d8fd18580d54c6606e34"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","c57c9f5367715c62d17c323823ccf92f"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","dbe1c88cfd65e0aca4ed8fafedd23d88"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","47a143acc57728111f6aeb2de4da8baf"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","68b68c0214b864de63ab35530a4b6abd"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","6c6c55e59daa4f2c4254d6f64a3a3e19"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","f5d1b47c140926ab7959098ce2129d37"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","d9aa1ffce0ac963acf5bc8c0ecbfe62c"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","a23f402fba3c7b2c16ce1ff12559b644"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","d7e5b878db128420d68d8656348ad000"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","830650cbeddf74e3921b3acbd40d36ae"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","a6a952495c616e02603c4659c9db204d"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","a8f50b98aba3f634097520203ec7f3c3"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","9fb3a48eb10d33bc58a038a1e7e81008"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","f646f64c8ded922150f7a8749db4dfd3"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","3eaa5ab107cc8b4ff5659cba1099895a"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","97005a58e03d8911b4cc1fa963dedc91"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","228daf2d4438cd8c23d646882baf0c96"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","6cf5b0aa31b2a1f1dafdd5e920ffc576"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","a51fe0b5bc6e4de2a568d0744c282d1e"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","7929e6014e148b7b83bba0bb50f57adc"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","01f25b468c72fc23c97a2dfdc569298b"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","0e7720e4b25b4c7d1d22916ff41c53dc"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","f0ec984a9cded6659e62965132a27619"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","099f696e5502cbd545a8fd94911e2e77"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","8a057f911fbb2f13dc54669634587b93"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","35e3d2fade1887a67320834ec79f1708"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","a679c1621b4233c2fcb4c49193722c6e"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","fc4c3f82b9a9d51bf34fcbccd71047d9"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","30eaa8476be7a558b99ef8b5e15197a7"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","ab0f24e1283396b0b1243dc501b1bdf8"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","372706c7d4c1ead141717c802aac2578"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","e4f289d58478f7325db2f91cdc16cb7e"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","4dff6bbc2e61346576acfe098912fcee"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","d79421a201ba47bc07e5011f1c93dd76"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","f5dc65c9a63fcdf56e4e0961c3d9a404"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","7778e60666f07832ea9168dbb7c1b33b"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","69b533d5ab297d07c5b5c935b1ee9e2b"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","0cf43e917e12b0ace2aee4bbb0357770"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","4e04ebecb97ad25c0e50623b5d8567d3"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","38ad258f0e5b367929e90747328aab28"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","37eb80fc729ad234b459bf485187b764"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","2f3730ddf75a1df911ef40fba8cd857f"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","84f4ee276fc1f66939c9e242acf23644"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","8cf961bbe36e17eee6dab6ccfb19c210"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","ac686f8d2dad6a39194a15d4dc33efa0"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","4175c0d98d495fda0b691b39dc344017"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","6b88897ed0856b0b44782470aca81d63"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","561cefb9842a317f0abed1de76ba1e37"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","fbedece6b374d3285c75aebbaa0748d5"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","80c500a85d5ae41805593d65fb089975"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","969859536189d45479cd42758f2310f9"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","8c676cf12868fe5bc5bef0e4cbd3065a"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","f96cd3be0f070850914dc8ca80608005"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","5db17149ea62069530f5676b7bd0cc98"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","8f7f111f91a9ca9562e2e7d1a4e64a40"],["/2022/08/17/前端/jQuery/index.html","ae961a468ee3ef48f49dc5df8fab8ef4"],["/2022/08/19/前端/JavaScript/index.html","abcff2d9e06f2261f9294f8e9efed5ac"],["/2022/08/22/前端/Ajax/index.html","7d3a07a9fc04134dc89db2d2205242de"],["/2022/08/23/前端/Promise/index.html","5991b39ae6c43e9cf8db4356af0fa793"],["/2022/08/24/前端/Axios/index.html","e4a4166d8b4826475aacf19e5e905f68"],["/2022/08/25/前端/H5本地存储/index.html","a87a4e3891593ed093a3ce7a7e0a3042"],["/2022/08/26/前端/mock/index.html","63ecf279240494247a48767692af0ec9"],["/2022/08/31/前端/vue/VueJs/index.html","5a36b8ea2514fbad114db20dfbd6e72e"],["/2022/09/01/前端/vue/vue组件化/index.html","19803d734f9c18d2cf2fb9b88704cd96"],["/2022/09/04/前端/vue/VueCLI/index.html","0e9c9aefcf6252fef04cb99771484c1e"],["/2022/09/07/前端/vue/vue实现动画/index.html","de2ae6b830181a0c3087e734b0b978ca"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","7e57e78790f7d55af223f9a73419ecbb"],["/2022/09/10/前端/vue/Vue异步请求/index.html","c32fd5dc77d52e62aad32a00812aea61"],["/2022/09/11/前端/vue/vue-Router/index.html","b8127dc194c9b588db610a4a435bee22"],["/2022/09/13/前端/vue/Vuex/index.html","6067a93ae163bec7106d4bb40dbca1b1"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","08a9480b27a1a6f9d7e05239674e3050"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","efaf55d2eb2d134d9e4f99f112f86df5"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","b20531124dafe59d98d7afa0126549d2"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","a8df534e3376944387ebdf87bef01a05"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","2a335e9d3e57cd7e86a162b8c04e2df6"],["/2022/09/28/DevOps/Linux/Linux/index.html","1daf333e2a20df8fbb282bfe38d722ab"],["/2022/10/02/中间件/Redis/redis基础/index.html","737b53d288cebdad4fa54e6c1a389c47"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","de82abfe91700c993ce975d0d2870b2a"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","7f72239f9a26d01598e2787e3d1debb0"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","ca7a7d7c28a19f2443bc42a9743480fc"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","fe3a936a620654ea453de8593bf48d75"],["/2022/10/17/中间件/Redis/Redis集群/index.html","24efe86b48a92937d7e60bf294d97f85"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","708bb46eef5bdb86f7217295db0577dc"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","37dc2f982d782c0faae5cf2087416d06"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","6bd56c636fc8b34448436cc5d7ec6b1f"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","534bb48d8e42037873b000ab791198c5"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","ae22fbbf2ce222c521431719b3f82a41"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","7824bcfa66f6825b14724bf8623af6d3"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","879ad7a1aaf40b44618281654bfdec28"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","8b7096ced086b547c16b7ce39ec05a37"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","9ac067b19ee2fb806aefa45573af42e1"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","d8deef9bc09846745f372c6d18f7e941"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","3bfc850c0a7fbbdd68a0efd15bae9a96"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","d152b6e87a690c12a145a019aa947055"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","11509127f71d7a03959131ddc2360179"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","3b13f1b0f2d20d5cd80b710f7be73faa"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","7985fb35384e46c80cb32c276d260c28"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","23b00342769e118a35a888703187036b"],["/2023/03/10/DevOps/CICD/CICD/index.html","a4f59b77fc8919d3fd5d2439eb157771"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","f86ee271cc36f21bc510dc4bba6ea793"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","eefe56286534dc2fa1f2616fbdf13f47"],["/2023/03/13/Java/NIO/NIO/index.html","7e3e6066724f7dd47c2d2f97f6b1c2a1"],["/2023/03/14/Java/NIO/Netty/index.html","2945a0125ce93b5b6f1e723f95dbbc8b"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","f6d9794d056e841a8e1e4dd22d8c6b9c"],["/2023/03/17/系统设计/分布式系统认证/index.html","492fabc3fa1c056d60e45c2ced6d1117"],["/2023/03/19/Java/JVM/JVM概述/index.html","cd5e03a4a76b7ea677313a440a1dc3b6"],["/2023/03/23/Java/JVM/类的加载过程/index.html","b5d53b23d24ebeb654336c9b34cb5ed8"],["/2023/03/28/Java/JVM/对象的实例化/index.html","383e95b36dbb50b3955e6e6e3535ec2e"],["/2023/04/01/Java/JVM/运行时数据区/index.html","951ee671a7af7039e2cb055e758bf6ea"],["/2023/04/04/Java/JVM/执行引擎/index.html","de05985412cc0f218c1dba978e9d6340"],["/2023/04/06/Java/JVM/对象引用/index.html","2dda5b56a5adf7c1ef5cb7d7369b1d3b"],["/2023/04/09/Java/JVM/垃圾回收/index.html","239d1730fd37cbbfe8da43a6f25a7f6e"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","0915152f07b142ad35dc72e8862f3339"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","11fecb8e40cade99da2df823dab15d8b"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","c7ec38aa209c684460467f7e18fd9cba"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","f201892a47a028fbb5d969acc082d154"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","51ff007e336d162f2744018c4374ec39"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","a2d0b6a77a34b2a09722523f86561c53"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","dc7a45ec7ad27d7ebb6c6ef83b5ccbab"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","7f20143f6047b1fc5b41c168bdb3b241"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","83b8be9154fab2d6d12f53d309a6b84e"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","46946cd0a3d6deee087dd6cb1ec0e0fe"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","b8bcf529d8c6a703faea20dd77f4c415"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","b9749d501c5fb2e7c8b995b5cb8f5b61"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","9f7a7ef59968f9ff687ca46c4d620946"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","cc3d94eabb2d46b6736f4455d44b81ca"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","cf66c9ef4bd1c003ed072ab30a47e2fe"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","e7a50427e9ddc720d300d664640cb960"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","113e798277b974c07ec4f4044867cfe3"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","64fe23894928e03978b54aadf4ce2ffe"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","d1383fef37548770880fa899fef8dc61"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","961eb9b45eec405b8d40e37846fd079a"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","c2bb5bf12ee271990f8909914d383055"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","bfdc1211014a216fc0b466beafb2dd54"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","ca377bcc4a08c29117f106020c7bfd60"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","9e4a25073ff5402d5a21a0658a1fe48f"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","38daf7c9ddbc063bb4493c9eba6cd151"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","17bf8491abeb5fd95e8d5af85bea084d"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","be0e431bf205bd5e2ca275b78d55cfc9"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","af72308eb2fd22ddd5f045d23d66462f"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","dc0966e806a8b938289a7a9d85a5e04f"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","87ffcf20ac49f2df27a806273dd40dc4"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","ecb6e466d4984d9d151f9ae13c0b6a9d"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","ed5f5e74cfeef0c3878007afa4c8e755"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","3b08aca94ae9ed1b51e7163600dfc895"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","00ccab64e57c6bd961a8e0bc5aad6b07"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","6e81ff5fb481cb08b623f4bf2c437cfe"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","2d5bfcdbd2560218414a024adc48a823"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","2bbdf30075fbaa5289e5be1e3e4d8d60"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","23e05c17652caa711f1c6a2456738108"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","0772bbbc37248e416241bb741b9f1733"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","b49e36858a41e88542c3aada40d4bb7c"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","9ac4331efeef4e56795b56689e2c248c"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","30e8edf029896a59ccbf455cd0b0c995"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","7185b45eb9834d4247f2677ae3ae52a5"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","48b5196ba306e915e26db803e7413d7a"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","ed25093fad3b80917b9893d56354d97f"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","f186507cd4d0d9abcf91f6111c5c7f59"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","827b7dd854484771fdee7f629e631795"],["/2023/08/08/Redis实现时间序列数据/index.html","b4eeaa8f16c63393b847c29798a29771"],["/404.html","d15387f901360b234e55fd584eb74daf"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","e32a3d2edf713bc6745a6ef24c49d144"],["/archives/2021/02/index.html","1ac1a481cf0f0114e41a207e4fb682b3"],["/archives/2021/03/index.html","876197a88cbcbae264f6ecbd678f66af"],["/archives/2021/03/page/2/index.html","292b4dae3886eb9c5b6b05f17d37d1c3"],["/archives/2021/03/page/3/index.html","5c31b4c98e01876ec6759597c5d3fd25"],["/archives/2021/04/index.html","5a04499f014ddfc9f37de5ba3ce66a38"],["/archives/2021/04/page/2/index.html","a1fdc8c1c672534a2d3eaa325514388d"],["/archives/2021/05/index.html","0b08048c17675f843f616bfc46ba0bae"],["/archives/2021/index.html","7670f321dde99a085f4433b1425fe3c1"],["/archives/2021/page/2/index.html","7d263826e442d5dd73831f884333b5ab"],["/archives/2021/page/3/index.html","c513891c6ec45dc02e0df6e815570e20"],["/archives/2021/page/4/index.html","264cac29bcf17de8ab13fd2862ee94c7"],["/archives/2021/page/5/index.html","6a7253b098e14b818f87c2eaf157f5d4"],["/archives/2021/page/6/index.html","b96b690b8e25294455bbdbeadbb5c0c4"],["/archives/2021/page/7/index.html","5d912fa734a31911b037ce1348c3801a"],["/archives/2022/01/index.html","84f9f065cbb7c3aaf4ac19853ca504aa"],["/archives/2022/04/index.html","71465fe2f30a6ab9195f18069a4620f4"],["/archives/2022/08/index.html","0f6b773e3945fd66605a44e2f2cc7343"],["/archives/2022/09/index.html","3868c25ea869ae7c7c3ca60ffb39d310"],["/archives/2022/09/page/2/index.html","fc7b1e456ae6a91161c86d6c911127c1"],["/archives/2022/10/index.html","d1d68780d8f5da35b09daef37a4dd890"],["/archives/2022/11/index.html","d0914b9e1b09c4267fb1d11067e217c6"],["/archives/2022/12/index.html","86eb4e5527656c73c3537b0804afdcbd"],["/archives/2022/index.html","918bee436e9b3da46b386eef06121972"],["/archives/2022/page/2/index.html","5bcb06fa7fdede194624a48ddbf485b5"],["/archives/2022/page/3/index.html","6b4a2b42e5e4b18b22ab0f4afd49392e"],["/archives/2022/page/4/index.html","4c0e28e0a5477f3cada8d10008071b0a"],["/archives/2022/page/5/index.html","1572b42810305952db57e71ed973804c"],["/archives/2023/01/index.html","72da0d15d90cbfb208df21e8a7dabfe2"],["/archives/2023/02/index.html","5302ce3b5cb0e1a89601f85a35fb746e"],["/archives/2023/03/index.html","fc06c26dc2eff79644dabcc72c4889d5"],["/archives/2023/04/index.html","d8cfd5817f0fe6bc574a328429cbd7db"],["/archives/2023/04/page/2/index.html","b28d88a36c9bb8a2f4b422e9c84d0a73"],["/archives/2023/05/index.html","ec47afabd53b4303bb3167804e13f803"],["/archives/2023/06/index.html","f46d59643fe75903e26dbe5880750cf6"],["/archives/2023/06/page/2/index.html","e7d33468010b4bce4994d38e456a3f40"],["/archives/2023/07/index.html","aef934c35f7f157951adcb60a8ab5477"],["/archives/2023/07/page/2/index.html","4fb609dec0ac68081f6bd371a183bc49"],["/archives/2023/08/index.html","8c048bba143f63edc9a088af0c80ce89"],["/archives/2023/index.html","36324d66d8ddb5db8906ca61b2e16753"],["/archives/2023/page/2/index.html","4b17c1059bf5c3bfc6a656c33e24a78c"],["/archives/2023/page/3/index.html","cc9570f8d71c69de51aba0faa1a6b40d"],["/archives/2023/page/4/index.html","5f2ecb7aad114e1c9ec1ee8f8c612edb"],["/archives/2023/page/5/index.html","496d8c4ae770a259e58a6a48601a98fa"],["/archives/2023/page/6/index.html","f7ac14c6fd6717a59b1092222c5ab948"],["/archives/2023/page/7/index.html","fff7441566f840c09741898583bba5cd"],["/archives/index.html","702cb603908f0979e5e28efb985a2fd1"],["/archives/page/10/index.html","87566264c80f54e7833516cd2470cffc"],["/archives/page/11/index.html","5fee439eb244240799b8488da1e088a6"],["/archives/page/12/index.html","bc64eb760f86617cc02ecbf59a262b68"],["/archives/page/13/index.html","9058c7164ef2cbc1ae01f9b7ca5738ee"],["/archives/page/14/index.html","7523f05da6388b30cff8994376004019"],["/archives/page/15/index.html","3596ae5557696fd84542a5ba8b6939ca"],["/archives/page/16/index.html","5b5e783205bf3acfb68bcb869280fc90"],["/archives/page/17/index.html","3d047c55f712d5d3a9e40a8f9617346a"],["/archives/page/18/index.html","a7042e3b79d35f0bafaba7d78f0db16a"],["/archives/page/2/index.html","c393c72eacce3edbd4c7bfa5fc0de403"],["/archives/page/3/index.html","e34ea9c8f4aa216c409681152122a0a1"],["/archives/page/4/index.html","c654fb221eae3611fcdd405709db2548"],["/archives/page/5/index.html","83befa2a5b71af3d3abd7f87007c7f3b"],["/archives/page/6/index.html","c5b1ccad980e11b42ab415b01c113e83"],["/archives/page/7/index.html","fa3a331e88628e48c8a048cc7c4bff75"],["/archives/page/8/index.html","062e19cc2dbafeab05da33f8e7aa58f2"],["/archives/page/9/index.html","3e2535479c857df2277bbea6d623ec10"],["/categories/Devops/CICD/index.html","77151a2e2e24b7cac0c60ea7dc5988d0"],["/categories/Devops/Linux/index.html","1f6604a522d62873536f3bb868ccb307"],["/categories/Devops/index.html","8f06e65f593eeb70c45584c088ff59d2"],["/categories/Java/JVM/index.html","8d81e2d6dd122cc4802391882fff46c5"],["/categories/Java/NIO/Netty/index.html","6cdfb6a2a6b3f006162abf3907cd532a"],["/categories/Java/NIO/index.html","d68a130fd872b4ecd42526e9b4e3e177"],["/categories/Java/NIO/原生NIO/index.html","15afe69671324a6d17da9361e3372a1f"],["/categories/Java/NIO/文件操作工具类/index.html","7134fe08f8e3ee3dde7baa5831fcceaf"],["/categories/Java/index.html","86fe6427698a8a71285f985a0c7c8b84"],["/categories/Java/page/2/index.html","36d49744770e36fb4db3c833bbd0cf78"],["/categories/Java/学习路线/index.html","9babfffaaa00fb877014a175e1d4843b"],["/categories/Spring全家桶/Spring-Security/index.html","4853193609d1ecc335dd3684b99a66e6"],["/categories/Spring全家桶/Spring/index.html","896e0e630803cca8d8c6906ea598fff7"],["/categories/Spring全家桶/SpringBoot/index.html","b0cf50c19348d185606829007ef69db4"],["/categories/Spring全家桶/SpringCloud/index.html","15eb57968088d3b2eafc80b38bdac39f"],["/categories/Spring全家桶/SpringMVC/index.html","1c13c63342dc48f76b15949e2fec03f5"],["/categories/Spring全家桶/index.html","1134398ee55b423e9804f696b374b2ae"],["/categories/Spring全家桶/page/2/index.html","e7793e80c765c8a6fd044b1953326c70"],["/categories/index.html","6dda44cec5a67ea5f880e288fd884c6e"],["/categories/中间件/ElasticSearch/index.html","e965e5de22570e3a63cf20e161714573"],["/categories/中间件/Redis/index.html","f47eec416a919ef82ad1f98fb6d49b66"],["/categories/中间件/Redis/page/2/index.html","185ebf36d0581503bafbcd0309c75e27"],["/categories/中间件/index.html","e3d705fef96ffcc97b895a35e3681ba4"],["/categories/中间件/page/2/index.html","73cc27cb3795cf52fd21ed58416c19bc"],["/categories/中间件/消息队列/RabbitMQ/index.html","da5fbf06e090caa4e644c16e48f4a327"],["/categories/中间件/消息队列/index.html","dbfcdd2086a750320412e7a487af26c3"],["/categories/前端/Mock/index.html","7593d242ce28a80f9c0ead314b735a06"],["/categories/前端/Promise/index.html","be0f85b18f31b190bfd05d8ea13c3c7d"],["/categories/前端/Vue/index.html","cf3700807a58767f79b79fa4b4a8e36e"],["/categories/前端/index.html","ed4f4e9870a71ae0eb634c17dc7dca51"],["/categories/前端/jQuery/index.html","9b8f20f570d8444204da6119a1c57950"],["/categories/前端/page/2/index.html","b7dea5f0b253e0c7332d555a79d98950"],["/categories/前端/原生基础/index.html","a3b2a48d74d07e4a2861359ba4d826b0"],["/categories/前端/异步通信/index.html","d4702bec2e5a83f0cc6507736b3889d1"],["/categories/工具使用/Git/index.html","a344de10ecb0e479dbcd83e7afc77950"],["/categories/工具使用/index.html","0a47b246973479ec1c7e20f8161a6483"],["/categories/工具使用/markdown/index.html","cc33c3b1960d5cec4f503d5770deb6f7"],["/categories/工具的使用/Docker/index.html","7555e12df3af52023edb90700a40e959"],["/categories/工具的使用/Nginx/index.html","8ccf527426e928d41f94aaa59caa5e93"],["/categories/工具的使用/Swagger/index.html","1ac6ae01401a590512160db0e0bfc8a3"],["/categories/工具的使用/index.html","c8747ea2e257b96e2c50850f93264e66"],["/categories/工具的使用/博客搭建/index.html","3a0738f5c4048883816637168c5f40cb"],["/categories/数据库/MongoDB/index.html","03f9f157ba01b51c5b7736914cd76761"],["/categories/数据库/MySQL/index.html","302605ff2a7003bf622a3d8d1a4f09fa"],["/categories/数据库/MySQL/page/2/index.html","f600a16834135daf313173150f0a4f28"],["/categories/数据库/MySQL/page/3/index.html","11c0d2346a8c049c3a4e469b8aeb0519"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","af08d9f5876e98fde4bcf5c2baf5f325"],["/categories/数据库/ORM持久层框架/index.html","b4383aba0b49cc1c567c9736d0c20bd3"],["/categories/数据库/index.html","cecf335fd1d0391a11ae8afad0579110"],["/categories/数据库/page/2/index.html","2ba22eef0494860b3209ec80389e1724"],["/categories/数据库/page/3/index.html","ab581b32f850d2446533458cc9e91c6b"],["/categories/系统设计/index.html","6db8ce9d4792d798ad8b3a3159139952"],["/categories/系统设计/page/2/index.html","60546830c77ec5a591e63e5fd97d1af7"],["/categories/系统设计/分布式权限认证/index.html","a15d0e387481fa18e180925aae3b22d3"],["/categories/系统设计/设计模式/index.html","3f41b596df0424fb22d90f8a3c64f246"],["/categories/系统设计/设计模式/page/2/index.html","36b77285c47ce24fdcca72396f12130c"],["/categories/计算机基础/index.html","8fe87eb5dd8e9cfd9ba8e49ed005aa74"],["/categories/计算机基础/page/2/index.html","0627d9240850fff4c25d36a1efd8ef1e"],["/categories/计算机基础/page/3/index.html","b34db4e19e1513b96422cf700c31610c"],["/categories/计算机基础/page/4/index.html","e9d9005b08826557527958b589fba3ed"],["/categories/计算机基础/page/5/index.html","a6ae352a302841ceb0e367c09d847f50"],["/categories/计算机基础/page/6/index.html","345b4e59783b3db37bec9613f51d4e4b"],["/categories/计算机基础/操作系统/index.html","c32e50489f3875eeb3148862e7b3240c"],["/categories/计算机基础/数据结构与算法/index.html","4b657dc816674f08cb3ee1aee66e7c1f"],["/categories/计算机基础/数据结构与算法/page/2/index.html","dc575a8cf54ea4f45c5a6c6d4d7550b1"],["/categories/计算机基础/数据结构与算法/page/3/index.html","e51881d7381d4af7fbfbac17b2d4a8c0"],["/categories/计算机基础/数据结构与算法/page/4/index.html","ac9a7f9d92e591dd679973c078d90871"],["/categories/计算机基础/数据结构与算法/page/5/index.html","b25dcdb3fe7b9bb21034c8eaf7a26b79"],["/categories/计算机基础/计算机网络/index.html","fc83ed813fae5cad0e416aa810159b6a"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","729b36065a59749052854b7fe332bd4d"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","0a88bca6f8551aa05155e78de7f579c1"],["/messageboard/index.html","9fd555c33f0d4363757b50691836cf4e"],["/page/10/index.html","df3f2336ead97c3f3d0fb602e284e8d5"],["/page/11/index.html","cc8c9fe4b35c43ff2c6f65439d028684"],["/page/12/index.html","7fa857bdd3b49d91cffa072f0454e0f0"],["/page/13/index.html","5cb80f4dee895e015d8d5750fbcddacc"],["/page/14/index.html","929f7f962199fe62bfcbe31578f56cf7"],["/page/15/index.html","2ac6a0baff9fce2575b7e28a46886511"],["/page/16/index.html","d28233d6f7687ca8d0330b9fb2906d51"],["/page/17/index.html","5502f27f9d1ca80fedd1c76bdc8e01f8"],["/page/18/index.html","389eb7658c02c0d7923c2d4d3e2b1cac"],["/page/2/index.html","7292809c5653ab51a3eac51e51c4ae04"],["/page/3/index.html","41130b40406ccd25f8ad9581ef88014b"],["/page/4/index.html","0e1fb792a854e05e7d2a203e9dbe518f"],["/page/5/index.html","205bfe636547f3e91c9964b58274ffa1"],["/page/6/index.html","6a66e2f7aa9eab5c70afd08b31eb321d"],["/page/7/index.html","c6beda43cc723213748713e0d256c67b"],["/page/8/index.html","d153224c0a78f8da5fc233b0f5b0d166"],["/page/9/index.html","eb06dff390aec48d3784ba77beff623b"],["/sw-register.js","f44d2f00a81c664b4998972662ac1a9c"],["/tags/Ajax/index.html","61799e54c7c1151842122d9c71fc03b1"],["/tags/Axios/index.html","dd4f931fab70488e705c8de2e3dc4de5"],["/tags/CICD/index.html","7ca3bf82cafbc24cad742ec92e71a7c1"],["/tags/Docker/index.html","3402bc0d98ed86f20d3c7bb9e7427470"],["/tags/ELK/index.html","226041973ddbb6bd298c6d023989dbe6"],["/tags/ElasticSearch/index.html","820bc706b3069dc820d4b535c8b3dadc"],["/tags/Git/index.html","91549974a3e22b53c62d7a63813c7dac"],["/tags/H5/index.html","6e4e79ed5fee5389228b5526f3cb23d1"],["/tags/JVM/index.html","2b4cff4af38fc3858a8b6c541fbe8a90"],["/tags/JVM内存模型/index.html","ec923a7521ede0c8e5460a9ac1d63611"],["/tags/JVM执行引擎/index.html","c665a5e63fbdcdecba96f5707b6763a3"],["/tags/JavaScript/index.html","f45d4b1691337a3edcc582ca31c1b92a"],["/tags/Kibana/index.html","3cad5d1f27760487b0bb933177b74da3"],["/tags/LeetCode/index.html","62d474fb3914934be2d3f413034d51d7"],["/tags/LeetCode/page/2/index.html","12f5b5177d2112475ff15b6894ad78a1"],["/tags/LeetCode/page/3/index.html","2452f31583abf7ce71464f6933935436"],["/tags/Linux/index.html","97ac88086eeb7394d4da84887a6463c2"],["/tags/Logstash/index.html","f889f001e83e4582f6372d9c3547a1bf"],["/tags/Mock/index.html","eebf31dde917544b0880790033254b3d"],["/tags/MongoDB/index.html","d1b15ffb40f5269853484969356a6fdf"],["/tags/MySQL-事务/index.html","f5a8a22bf08576c8f41d1aa7b919025e"],["/tags/MySQL-数据类型/index.html","d7618d4885080311852ba729b96cbfcb"],["/tags/MySQL-日志/index.html","50c6da17291949b2be5726f2c446dacd"],["/tags/MySQL-索引/index.html","43572c27163ec63428f0e49282515c91"],["/tags/MySQL-锁/index.html","e0deb64225002edff1b9299372d79732"],["/tags/MySQL/index.html","fd58f7591eb9a4291982c53981369b6b"],["/tags/MySQL/page/2/index.html","f88648e63fb3101d5dbc02e933f95dec"],["/tags/Mybatis/index.html","d7f8dfa844b8667059ea587dc6b43897"],["/tags/MybatisPlus/index.html","c8e013253901ba6c2131549e6b283a6b"],["/tags/NIO/index.html","c8b1cd4b4852f7a541a2503681b7cf87"],["/tags/Netty/index.html","e79462428232f31904d4e722e313cc9c"],["/tags/Nginx/index.html","76f225383af1b74789aea154b62d72c6"],["/tags/Promise/index.html","3125ecbb0dcb2fd8bf6999ae158997d0"],["/tags/RabbitMQ/index.html","f6091d240a4a19764a5579fda2eaceaf"],["/tags/Redis/index.html","5828e3ded4e19ba6d99e4ac9989d1c44"],["/tags/Redis/page/2/index.html","f1b9a2cf31e644cb537e1620d300cc36"],["/tags/SSM/index.html","9fb85f2d2bd4142b23e90d96558e9d5e"],["/tags/Spring-Security/index.html","fe7b22df47a6718d9a75432626dafc22"],["/tags/Spring/index.html","36452195a2884ccaacc5e09b8036503c"],["/tags/SpringBoot/index.html","8d2b51593973046926241ec55bc7b0b1"],["/tags/SpringCloud/index.html","0737ebf3607cff2d3e31cd27f587304c"],["/tags/SpringMVC/index.html","e1db528c19a866b33de56725084bb285"],["/tags/Swagger/index.html","2fde5d7479bd25072bb36b8a804001a0"],["/tags/hexo/index.html","811d43dc591d4c441a94c9bf60ed9d3d"],["/tags/index.html","29711426742df0dcdc452dfe30767ce3"],["/tags/jQuery/index.html","effcbf6d24083a0fd8b5bae23a5d9a4b"],["/tags/java/index.html","9550fb199e459a15a1d9272206d0f92e"],["/tags/markdown/index.html","0ae435a60288feda1e8ffde89e1ed953"],["/tags/noSQL/index.html","4e4fc5e3b69e73f311feb405e3bc0141"],["/tags/typora/index.html","9ef6ffe7171c8c315cc229769347b193"],["/tags/vue/index.html","9d3d8d9016871c0d58e3a2533339ba45"],["/tags/享元模式/index.html","ba8338d3e4e152a7dfe9a9b04790df3d"],["/tags/代理模式/index.html","b3c0533ad4094dbd583f6ac06ed6eacc"],["/tags/内存管理/index.html","32d1f6ef71a687ac56398fe579229370"],["/tags/分布式/index.html","60d22e78a10304ac0f6e76d2e302ec7a"],["/tags/分布式系统/index.html","e5c027fb8def5b6c1ac48e5e018b9d3a"],["/tags/前端/index.html","002b426c1b04cd5a3ac233773fdb52b9"],["/tags/前端/page/2/index.html","f25f53e5545f25d94c43bc08fe223728"],["/tags/博客/index.html","488a3629a2c9a6e2154d39974cd29c73"],["/tags/后端/index.html","7f644089b2df3a47ce83cfd0e1a22f71"],["/tags/外观模式/index.html","fae17888a0319a39fae6ec9146a4854e"],["/tags/容器技术/index.html","372829973b673b5f19c9adda70046939"],["/tags/工厂方法/index.html","05f7b549f06105c729d6e89da06f022a"],["/tags/微服务/index.html","3998f35ece79c7ccc2f9127f75f65e62"],["/tags/抽象工厂/index.html","f60473244dc32acc7f3eab95e49a572b"],["/tags/持续集成持续部署/index.html","a36299d53d864a7d43674a4348b2d88e"],["/tags/搜索引擎/index.html","996322ae4ac812cee7372289448ce8a0"],["/tags/操作系统/index.html","b9ff8b536773d15fd31a6504cac49955"],["/tags/数据库/index.html","35bc58b472609ae8fdf131b1d1773c28"],["/tags/数据库/page/2/index.html","3561559f9c339c7d92c475a66903db78"],["/tags/数据库/page/3/index.html","440f47fce42ab8d55e0435ec6b59d2b5"],["/tags/数据结构与算法/index.html","50a2bc0a00885032c89641e27767aae8"],["/tags/数据结构与算法/page/2/index.html","7a307f526e10b84e81599086a2238d4a"],["/tags/文件操作/index.html","88722968acb3e61bfdd1d8b29c9b2ed5"],["/tags/日志/index.html","b3b4a247bffc9c0e21cdb6dca65b2e9e"],["/tags/服务器/index.html","18adcb30b56de74288637b315197c874"],["/tags/权限认证/index.html","0db5305b8e1d0fc784c294adc08fac00"],["/tags/桥接模式/index.html","b8fb2bd22377b69f5a3d32e9e8f46b26"],["/tags/模板方法模式/index.html","413467cf57e046eafdf7dc8133766fb0"],["/tags/死锁/index.html","1334186fae019fb0a8aea1e25ea30259"],["/tags/消息队列/index.html","932b7f9dba3115a6910ecc8c8f78a18d"],["/tags/版本控制/index.html","13fed4941ca57f8626531c60ffd332a1"],["/tags/策略模式/index.html","4e5135966fbac0c2ff73a2211f4e1a14"],["/tags/简单工厂/index.html","fd818b28345535ca14073bec08096467"],["/tags/算法/index.html","941aa2a77c1ae0320707985462e817dd"],["/tags/组件化/index.html","4552c2512b52463e76054d4a2e21f29c"],["/tags/缓存/index.html","55bb06e0583fdf68b15989aaf21274ac"],["/tags/缓存/page/2/index.html","051789a82cb8e59292615e1bced0a7e7"],["/tags/观察者模式/index.html","17639c4fe8f921266bb5599bd3979eb5"],["/tags/计算机网络/index.html","ecc7e9e0c1cb64d89d792abee8e1d724"],["/tags/设计模式/index.html","03b17c8dc0c61f8f0743b843356a74b1"],["/tags/设计模式/page/2/index.html","353a88d026ea095499c77ac82a2fb000"],["/tags/进程管理/index.html","9310faf81b9177daff2cf19767c2f50f"],["/tags/适配器模式/index.html","187a56af13da257a95756c40b7d3ebc5"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
