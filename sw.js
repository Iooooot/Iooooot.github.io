/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","51f5f005be59fa8e600f078be43e633e"],["/2021/02/22/工具的使用/博客的搭建/index.html","9955337b992d41ffba92a94b5ca8fe52"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","e4cf2f438e092c5c7798720dbceeda2a"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","063829c720005e7f1b36c15ee10976a3"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","ebaa14e5f6a785b030a73c2b6d7987cd"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","5c4f46bb1d776b857b1196feb003439a"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","e7570337057d89b47b968e876f8d68dd"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","dc8ea0f2b58ec1827e0002bc4f0da8e9"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","9240abb4165ab0754edcc007d68526ca"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","9c3ee2ae1c0bc944b13a473132ff10bb"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","f74b1bdb1c4f2b2277ba5427e52c1474"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","5d10cc6d7fd7bf31c8494783eb9f7fbb"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","98c3ebb17032a7cb5c2d840174374ddf"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","d34453590d3337b6e59dc16000b1966c"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","fd312fe6726ef45953b6ff5a419a445a"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","3fded21d928dbea4f688047f0f58b2b1"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","f60e6a74d042fa5d97f1c143a1bddfc2"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","ab0fb38c1f843b557a9a82d85a5d1043"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","3d7b240921172bf70202ac8a95459d35"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","4072d544ca0e79689d4d127f6ab8c120"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","e2ced318a8d421357b1aa56cc3e76d9d"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","a4948bb5891284508048da8501512f91"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","3f473e23c4ac4db07e3ea177d80f0ec4"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","c015f9694c5de9c7895d6893bdf69ecd"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","e125d438c03e0bed73c4ad192b51c808"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","a3837578075291505cea28714fbb5c57"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","300d9025a33fdcc183f9d079b2cc90d3"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","42020483bb472a028bb77e6f09166880"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","40d2021bb499afafb219b9891d0e979c"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","be19c297c90a911773b2bbed500243e1"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","f24d189c6e5dba23d28534f1e513116a"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","2c490fde6d5ee82af376108d147a81c0"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","fec9d6311d816d2a5b12f2666b80008a"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","cdc84f67436a23688f1a3e5f1c721536"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","1bae3dbbdea15221e5cec81dac5409d1"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","fb7aef9df53bc3754570927d400018ba"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","723b6c0d5ba43ca9c9a368787ed9d237"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","46fe5801aa95355b1de4a3f592d947e4"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","6a277748f724d32d4e14598f2f0763ef"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","eaebe4b6811af36d4dd1c0b53a04ba70"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","90067266f56de23b9085cd9c014a8937"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","56bd04e4417692d8925ba44000293ce7"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","54746cf0f2af31a2c66fff0a6a23b8e5"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","b41ab40b7cbdde284077ffc932ea0cb0"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","72ed7dc2ebda20e45805cf811dc89e54"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","851391c43e4b9223e9e0617adc2c28a9"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","c6a6ff72aa31878bf7fb683a354af4c7"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","6823c33aa87945c92320e22f59892476"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","009d0392cd7d37cfdd52344988addd48"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","3d88ce8f59f9279de238388784913250"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","639c45bb740323cb1e2515350cbb3def"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","9f6ea7fcef6eecfb390c70f7ddbdd6ec"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","a375507e41d2e8070358d001c3a0ded8"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","96c673aaaeb96dc2d21ed5c3b3cbf033"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","2f7ae862ccbd108d3abbdd4ae9f02ca0"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","625e86b349c0d4a3563bb4e4bfb2a271"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","fddd6300e99e2fc5410f0f03a9e6496a"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","97e9266876f867151c2ed835405b1dfa"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","5a0052429b82c7869af391582828c0a2"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","0a88aadb1f18e9fff7936407cd5ae141"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","b02df5d17bf31846ffe8c0eb36dacd28"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","8366d80d348b3caa7fa660aaba41eb12"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","989ffb14355c0bab5ea20f6ba95e6274"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","0779175cc8426be4f0f57533216a2bba"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","7f3d2f918d43f3c3c76cc99561c788b0"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","499ff70f6ff4bf48c0ba9d8c6b052420"],["/2022/08/17/前端/jQuery/index.html","e64189487c026a85a88c6c2bb7b892c7"],["/2022/08/19/前端/JavaScript/index.html","5822a23677317ba026bec9072f05b636"],["/2022/08/22/前端/Ajax/index.html","d03718a8ab025dd911ea14fae2c83e10"],["/2022/08/23/前端/Promise/index.html","c1cdedf6f8383ee966d7c38bf59e1f7a"],["/2022/08/24/前端/Axios/index.html","11764b171216bc1f9cec7f3c1abdf224"],["/2022/08/25/前端/H5本地存储/index.html","18dc8532c9d522cc97fdd3066aa30241"],["/2022/08/26/前端/mock/index.html","5a2e10efd657e21740d54adf748c4e91"],["/2022/08/31/前端/vue/VueJs/index.html","fdc5ae1bc644be739c04f6a45b48064d"],["/2022/09/01/前端/vue/vue组件化/index.html","adeb63cb03f125a6ce6066937ecd8a93"],["/2022/09/04/前端/vue/VueCLI/index.html","825a668a55dc1a7bd263040be70978a2"],["/2022/09/07/前端/vue/vue实现动画/index.html","542b7a79401de71ff11cde38c4849f7c"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","5246ff198c0adf15646a2275ef872583"],["/2022/09/10/前端/vue/Vue异步请求/index.html","376a05f58cff1f3115f0441a42bd68f8"],["/2022/09/11/前端/vue/vue-Router/index.html","4ccaa110c545fd9c67c732304199c890"],["/2022/09/13/前端/vue/Vuex/index.html","0e7aeecbfd529c813b1fbfe756d6481d"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","86bf9175dc34bbc4669273e364aff0d9"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","b554a541aa5ee0189a521303d78db6d3"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","cd2bec512e459a3a11ef112f50dcb901"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","98498358c3f5d8d75f363cbf12a4d80d"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","97ac70f575b7bcdd4f16eebb3a120e12"],["/2022/09/28/DevOps/Linux/Linux/index.html","e9c8fa9fd11ce25660f4f6f4aecce7d2"],["/2022/10/02/中间件/Redis/redis基础/index.html","e2619e43d12183f3880e9a364ab1cd0f"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","501c4136c16c59b8350c4b5350279693"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","2c35a04e97af9bfe834c4506ab36feb2"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","40912deddcb427b06f16f0319ec81cf1"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","3365aab5cdd50c0007e05d76361d6e2f"],["/2022/10/17/中间件/Redis/Redis集群/index.html","1bbdd95ad716290363a93d46119f7080"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","511aee3c873ba00dad6ad89004b6ee42"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","53545b1fc39501d859ab8666256f748e"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","3519624b1b32e30a1c96029a84bbce4e"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","60441eac8fdea24b2ae150035819baf7"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","101639207bce3b9e47e1985c7bd543df"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","1c86fed38a9bc23b9d2a04ff9ea76dac"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","37bf26de8a013c55eefdee9c404911a0"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","ea659c899c59703af253840cbf11f9be"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","4e28f6e93b143089a467e32cb69640a8"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","a20c45f6117c29035f77c5143ee6b2d8"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","8e30108361c3971cc18c9c9aaa37fd10"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","17c2b4fed53df8333c862ffef6c50fcf"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","d422b303f643d020b69a442b0f5105a1"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","bbe0f10f622b586047512a6021090168"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","a52941d7e35dec25a56ed5250bd2c579"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","009b26ccc3a90c9d6db11ba16a140656"],["/2023/03/10/DevOps/CICD/CICD/index.html","42db8c4666a00be5995a28e66411e76d"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","4a5fcf99135d4cf9107cb99d7e33d78f"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","88cdf00bf02b0d6681b2a055254735c3"],["/2023/03/13/Java/NIO/NIO/index.html","a8d8193cd4f17a05e4259ca0487af4ed"],["/2023/03/14/Java/NIO/Netty/index.html","e5f90d6db85323491b13efc90dd2a8f2"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","54d92f3ea931adc40055c0c1fc1941c1"],["/2023/03/17/系统设计/分布式系统认证/index.html","e8816f9cab114ee505c4da01259e8150"],["/2023/03/19/Java/JVM/JVM概述/index.html","784586819efcfdf5a457be450e2d03b0"],["/2023/03/23/Java/JVM/类的加载过程/index.html","d3e83a686614ef51f8110f8078ea00c3"],["/2023/03/28/Java/JVM/对象的实例化/index.html","652e67dfbcd491236790ff8451eb8c5a"],["/2023/04/01/Java/JVM/运行时数据区/index.html","41242e5b900dbc393fc4612d2e37feb5"],["/2023/04/04/Java/JVM/执行引擎/index.html","cfd4e3f9ec8c1a3cc442c624c2d2fdf1"],["/2023/04/06/Java/JVM/对象引用/index.html","4afc3a73506d2b8dd0a3eb2897dbef0e"],["/2023/04/09/Java/JVM/垃圾回收/index.html","35579607b0985f50e8217161e687f341"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","bfec8cd47acb804ee4897dd037ed8f1c"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","88e4c452866da909df2c7345469f80af"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","aa8b7a237e9a413945235da9f4e53af3"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","7d3c37541ca50f1cd04bdffcc14e6f61"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","2bbd2c4c3f18acb58b6d616f5e0a06a7"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","101a79dcf2561c3b1e081ccdfa45e85e"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","6801a130009c49fb8a9055689a8a835c"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","f3ed9bc4a4bf444a871077a52fec4810"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","04116a602332f51ba2a113de40b7c870"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","effeedaddf84b2e4e22f80ac6be16465"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","014b685eea93632948cb0dd0dc523dc8"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","426116a2b403a1bbedd95ea9f70486e4"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","84febe3b0a57fae91b128fa4ed60a50a"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","55cf3d995c689c54991848523bf0e561"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","dea90e75870f8fa961c8742cba9904cc"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","389464e12e8083129b7f948a3a9a0525"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","29758702b0fea69bc002bc622a8d05a5"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","5251492b96004e229575b23355fcae8b"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","b850c6bab045418fc7b7bdf15883433b"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","74274e4ca8a629a89f3fb2700f5bb476"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","697429c2addcae5e10198106f579451a"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","47e7dbb372c02e1a7278205267979573"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","540ce2195dd2b5967207e32ebe290bdb"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","4fce748afdf659bf5f43bf0dbc699b9d"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","380ce56267fe07cc2ae50e3c0aea7ad0"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","75579cc3c321c82be49355a80ecc7ff0"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","440abfd3ef04f8248fc5dd6468a7423e"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","f8698897396e922fe74c10e2e3443f1b"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","ef2cfe209aa390b1899d4838da4d4710"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","85594009ba339e74027731bd2e810a08"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","18e2eae3b0ba2aa536ed2db230b05299"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","0c7cc7a9b60bced0feee0c8823a4ac98"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","f092792bb38e3c475b3274bf6d925732"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","02a947e42b97bd888d43f45b96af896f"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","4e30a14c908ce00dca14ecc325a4100c"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","bc25d37c5cacd5709ac77c3bf67fe2c6"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","2427bf5121e128dfe37b0bd9ed62dc71"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","0117f2bd62bbd75dc8d34030972e77d4"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","b23b60dc19f9b9e7edc9213fae222421"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","6ffd5a01172c3d2c03ee72f09e27933f"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","fc9b3d6bc22e5eda5c9e3e189acec732"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","5f527b2ba1c00817b261d8a1812e04ac"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","5bcfdfd3d7ae9dac84278c55c97d1c1a"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","aa51a897ef6ae1ab3cf800c575772ab4"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","546c06eabf378c6311a7626738e45b98"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","6775df2a8e058a73a6519a2a2344cfef"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","bdf95dbf53aaec2b3a8c5e5a8b757db5"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","010c212f3d8f16f3714495ebc30b66b5"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","7bf8073cbea81dbe6b13f1f4651ae8d2"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","1d25fcd3e99f11963102bbeda2aebf84"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","95c5c59c6e19f48a8b3d69af1965340a"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","102fb701185298c12c64431122c1286b"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","c9fd48a8c5c03db73bb8b19d0d688361"],["/2023/08/26/Redis做缓冲/index.html","21f835b89b721ce11f4f1e800e5b4111"],["/2023/08/29/Redis内存替换策略/index.html","982847dd8dca1caf95be2584ae650ffa"],["/2023/08/31/Redis缓存与数据库一致性问题/index.html","e03f6b1735afbf2bed247e88da449b61"],["/2023/09/02/Redis应对高并发/index.html","0bbe1affa6518af301775740194f262c"],["/404.html","ae6c3a71aaa834f8e2fa472d96daf3a8"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","c5db43615a6fe535f24fb7416a7e436c"],["/archives/2021/02/index.html","637cc5ebb63574d4fc3556f485dd3265"],["/archives/2021/03/index.html","a4f7b78fcc27c0859abf4b0ebca8c9a3"],["/archives/2021/03/page/2/index.html","ec640dfd6215e41b1ce633a3be111c56"],["/archives/2021/03/page/3/index.html","5926aea1731670e5faeabc83d3cc8fd7"],["/archives/2021/04/index.html","170f541bcfa3b7e912a23e803aab8a6c"],["/archives/2021/04/page/2/index.html","0f210820b72726c149d390dbb3ba6cdd"],["/archives/2021/05/index.html","da589d1771eb16297969fff376eed838"],["/archives/2021/index.html","95e223ce7d0d9dda4414c9654d663bb7"],["/archives/2021/page/2/index.html","1d57d776d8624a1c6e97c2c8bd893d03"],["/archives/2021/page/3/index.html","007ecbc99d223720b6e68677a57c81a5"],["/archives/2021/page/4/index.html","97cea9618410c87855a943e4886e418c"],["/archives/2021/page/5/index.html","08afedf369a34eeaf5008e07c2bf9b21"],["/archives/2021/page/6/index.html","c144f6895a5e87d0c092c53a4eea9266"],["/archives/2021/page/7/index.html","ea85c4092089ec32ed562fe9abbe4175"],["/archives/2022/01/index.html","6b558e615b3199d95b1cffa8ea77d67f"],["/archives/2022/04/index.html","0ce0e659fab001dd6e89282f9c38b185"],["/archives/2022/08/index.html","9153af510396ccc9820ccca38262ca11"],["/archives/2022/09/index.html","678e003816511f05cdc9ecf91862564c"],["/archives/2022/09/page/2/index.html","984c3ec43e0e6ff66a534e1a164c0458"],["/archives/2022/10/index.html","463912a5d4364c75983fc6fb3808b7b5"],["/archives/2022/11/index.html","41326e476b1b9cb45cd868c9369a2fce"],["/archives/2022/12/index.html","bae42902a955055fe200939c1a4bc896"],["/archives/2022/index.html","b41110d0bf336ae2cd5656da8b64f902"],["/archives/2022/page/2/index.html","0246837e1cf33e4880f83e8abd24cff9"],["/archives/2022/page/3/index.html","67f8affc59444f4f00e76917d703cea2"],["/archives/2022/page/4/index.html","568b52ae3ec685bed9b44274d6e3e66a"],["/archives/2022/page/5/index.html","af05a617e365daadbfed2abd32930027"],["/archives/2023/01/index.html","ac4f05943e590815713ee2657cc1b321"],["/archives/2023/02/index.html","19541d983b8416ef0a6cdfd62e4c0789"],["/archives/2023/03/index.html","7d79e37862c3c675a930b102995d871e"],["/archives/2023/04/index.html","54fd43c92ea1d6b05709010ee7e1a7cc"],["/archives/2023/04/page/2/index.html","e565360a3c2bc93636b09701d24de238"],["/archives/2023/05/index.html","3f2630615c8103238f82506c103190b8"],["/archives/2023/06/index.html","e663c1050de325a083bc5fd7b9f9c068"],["/archives/2023/06/page/2/index.html","e81951b5ce57a03ca6e1ca41371bc50c"],["/archives/2023/07/index.html","a090fe81cbd7e923df007a377f770482"],["/archives/2023/07/page/2/index.html","b95e113792ca428049174e2a501f5d37"],["/archives/2023/08/index.html","481ccba3d4eafe4692b0441233f5379b"],["/archives/2023/08/page/2/index.html","28442616207c843d0c4686d0488ffa15"],["/archives/2023/09/index.html","c03a0f5657159c3a46ad40c6a535bf29"],["/archives/2023/index.html","fa66bb4485372311e7186a89b7b3aede"],["/archives/2023/page/2/index.html","9b2b320eac7b31a41879189d9e363c24"],["/archives/2023/page/3/index.html","17617047776235a8d7acf19298038c47"],["/archives/2023/page/4/index.html","6ce092d2c82081e9c40491de66ed95e0"],["/archives/2023/page/5/index.html","fa430c4a547dd6f7b62a3854aa4ee4a6"],["/archives/2023/page/6/index.html","91c9e01493f53e7d45a821a7f4b6dc3e"],["/archives/2023/page/7/index.html","3c9462ae42e589f005f170d64faea1c1"],["/archives/2023/page/8/index.html","f335eadb87029c60f8b6b0293439edc8"],["/archives/index.html","adb5185c65c0b6a6bec0078e29a2e908"],["/archives/page/10/index.html","681ea45e26d5d48b5a352ee6dcf97d66"],["/archives/page/11/index.html","eb44eda436308f076bd7d0f55b6c7921"],["/archives/page/12/index.html","dfccaf70d51c32d388f044d75e6b3dc8"],["/archives/page/13/index.html","e94374a05a56cc8d69c7b6e5eb0216f6"],["/archives/page/14/index.html","ea558b916950e31d6fbf86714a91f47d"],["/archives/page/15/index.html","cd6a72b34e8e545837a827b5a5a5db19"],["/archives/page/16/index.html","86deb03abc3e9b6fb048621005caaedb"],["/archives/page/17/index.html","71e5cc4cdf42deb1f203ffb77bd16f0e"],["/archives/page/18/index.html","3fe5fdeb6921ea55dfe989c75b2981b9"],["/archives/page/2/index.html","d483b93536f04ddb6c92ca7c1e6bfc85"],["/archives/page/3/index.html","db8e46f7cc0905ddda62297de8588fec"],["/archives/page/4/index.html","b23eb84f0eb0a18bb2ce7e935670c988"],["/archives/page/5/index.html","c9c25e393f69a6fdf1149a7a2b74c156"],["/archives/page/6/index.html","adb9cf6307de499109d1e0b1e59d011f"],["/archives/page/7/index.html","bdd8b635fd0046080d02ebeb0afd8827"],["/archives/page/8/index.html","4cbcd8d4b23cc35d84db0bb54c4326ae"],["/archives/page/9/index.html","6cbca24186fc7f56c6b6dcca410e2fd5"],["/categories/Devops/CICD/index.html","cd8bd42f1698e709e46b7c5ab57a3498"],["/categories/Devops/Linux/index.html","f0f7082dd0b0eadfbae29b819572d07c"],["/categories/Devops/index.html","1b72f5b270b53b2c77b073eb3810794c"],["/categories/Java/JVM/index.html","a5073978dc3f935c43066a6621dd32f9"],["/categories/Java/NIO/Netty/index.html","7ed15080e7382091168c49c5c2ef28e3"],["/categories/Java/NIO/index.html","af418dc114d1c679bc18c818e1a0749d"],["/categories/Java/NIO/原生NIO/index.html","22660fd19f4985730094931125ca210d"],["/categories/Java/NIO/文件操作工具类/index.html","d3b8162f78bc784cab6e7213fa86b304"],["/categories/Java/index.html","cba2cb2c418036fcf4dedf7c69c4bdde"],["/categories/Java/page/2/index.html","9d15bf17805fdf6e04d644317737d1d1"],["/categories/Java/学习路线/index.html","46ebd0afa8eb464938e033f91c1b9005"],["/categories/Spring全家桶/Spring-Security/index.html","91638808329edccd0ce8b69a5168b158"],["/categories/Spring全家桶/Spring/index.html","5a824244edb24a3d6fe720808549b5f1"],["/categories/Spring全家桶/SpringBoot/index.html","affb111ecd88052ec78743dcbbe4fd6d"],["/categories/Spring全家桶/SpringCloud/index.html","12660d66ff08aa5bddb564f428109b90"],["/categories/Spring全家桶/SpringMVC/index.html","24c12a19cc9126bfc0b78f81b818e86e"],["/categories/Spring全家桶/index.html","c03b3fd43e98ebb41443c6707f326cdb"],["/categories/Spring全家桶/page/2/index.html","fb2026be7743287227061099875f99cd"],["/categories/index.html","e007e5402ce52183b4a0d62c8dd73456"],["/categories/中间件/ElasticSearch/index.html","9b301284317b57da6aaaa190e09bac0e"],["/categories/中间件/Redis/index.html","9f41b4df57a8f85b0d856ec949e25fe6"],["/categories/中间件/Redis/page/2/index.html","eb503415cf46a7af1bfe129f741e8c40"],["/categories/中间件/Redis/page/3/index.html","ad3f854767747fc157200d0240fed8a9"],["/categories/中间件/index.html","2d10f0af3de4c035a8c51a7cad346178"],["/categories/中间件/page/2/index.html","aa81ffdadb212831fd7a0d6cf8a4c37e"],["/categories/中间件/page/3/index.html","df519b1353d23063ec5d7ce4dbe42f36"],["/categories/中间件/消息队列/RabbitMQ/index.html","22d4212f60f5ebce485251f779c9d2f9"],["/categories/中间件/消息队列/index.html","9e8941be9a8b39d82dbb79dd00c43a9f"],["/categories/前端/Mock/index.html","eb6c3ac5859de4bd1118a6439e0c2803"],["/categories/前端/Promise/index.html","5a1776ebd362d1940a1401e2a2c35b7e"],["/categories/前端/Vue/index.html","8b253bc335461a88da08b532306311fc"],["/categories/前端/index.html","a83074d88f9d12d1b955ce91132e138b"],["/categories/前端/jQuery/index.html","61c192fbe55ad5302e01f771daf2bab6"],["/categories/前端/page/2/index.html","5e4b5a8abb3450abc4c36e412d39156f"],["/categories/前端/原生基础/index.html","3fb85836e745ceb6f2a5f95f0f271fab"],["/categories/前端/异步通信/index.html","b8dadd00c0a10e73667b54b049d3c742"],["/categories/工具使用/Git/index.html","93b69b24cb348a7973500261a809996c"],["/categories/工具使用/index.html","3ef70e769fd834dd12ec7b24c24d1105"],["/categories/工具使用/markdown/index.html","ce513fa2fbde667c5d55b60e35ff7b65"],["/categories/工具的使用/Docker/index.html","84aed30226827748c7804b4036bcd860"],["/categories/工具的使用/Nginx/index.html","9d01d83bef59f31487e9c650f542157d"],["/categories/工具的使用/Swagger/index.html","390e0c9fcfb2defe681325e32b3b4ce8"],["/categories/工具的使用/index.html","ef6df16216276492bb084224c62dd462"],["/categories/工具的使用/博客搭建/index.html","a4982a15dd040e3c1051f73c8513fc71"],["/categories/数据库/MongoDB/index.html","eb912771244a74101aaaf43aa985f40b"],["/categories/数据库/MySQL/index.html","210350b703dd6871673c5381406bba0b"],["/categories/数据库/MySQL/page/2/index.html","05a4e136ee78d97f7d8e331c2da75871"],["/categories/数据库/MySQL/page/3/index.html","ba255a1195ba35276f01b10ec0a21293"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","3f1b705eeff9c445d93b9a160c758655"],["/categories/数据库/ORM持久层框架/index.html","377bc0167b847718ac4be69988ab045c"],["/categories/数据库/index.html","d0884482271e78440eeeb9eee85006ae"],["/categories/数据库/page/2/index.html","cb727eaea318e1c9dfb66ddb91a45aa8"],["/categories/数据库/page/3/index.html","c5b3bb36c449da0eda921d53bd110f90"],["/categories/系统设计/index.html","dbe848add4a84958e3e05c26a6b6ad71"],["/categories/系统设计/page/2/index.html","bf564ecf11fd53208951a516587d3fc0"],["/categories/系统设计/分布式权限认证/index.html","bffcd2c3a2b71e651abfbfd761ea012c"],["/categories/系统设计/设计模式/index.html","f2e061e2ed43c7b896306ece734b0fb5"],["/categories/系统设计/设计模式/page/2/index.html","f5fc628df4efbaa5ee51f675f148dde3"],["/categories/计算机基础/index.html","e8ec2c01166ab474b8501b7ed78ef182"],["/categories/计算机基础/page/2/index.html","e629fae952c04aa88b49a34c1997457f"],["/categories/计算机基础/page/3/index.html","2fbe516455557ca664354be35cd156c4"],["/categories/计算机基础/page/4/index.html","2ba3e3cbdc27f405447628e00aa4e035"],["/categories/计算机基础/page/5/index.html","03a66b3e70978dee08ec4ed4cde034a9"],["/categories/计算机基础/page/6/index.html","531dc057087e893b332fd6dc0c005372"],["/categories/计算机基础/操作系统/index.html","316770a6082aeddc1a3a88f3a0a68189"],["/categories/计算机基础/数据结构与算法/index.html","e53fa500c5e0abaaafe0a1b5a0e64a54"],["/categories/计算机基础/数据结构与算法/page/2/index.html","af7664a1c5ae41db9a3218a4db6c18fd"],["/categories/计算机基础/数据结构与算法/page/3/index.html","91aa641a99886b7b096831c31b175463"],["/categories/计算机基础/数据结构与算法/page/4/index.html","b53696b4efbd4f07e75f17707a253228"],["/categories/计算机基础/数据结构与算法/page/5/index.html","f846db3c5818d980b8086237048f8c58"],["/categories/计算机基础/计算机网络/index.html","7b5a47482866ee0ea342aab673cd428f"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","a27c1e174c90f85a25f3ff94653b69e0"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","835572ca6d37891a3d6092e4ac2f2d04"],["/messageboard/index.html","0ecc18684802a08f048e22c11acb851f"],["/page/10/index.html","4cbdb198f1a74fb6480a8573ec39a7d5"],["/page/11/index.html","07c3812a7a8a0c3d6882f9b85acd8d53"],["/page/12/index.html","09f20f4ce8414ecc3c378ee84fd2156c"],["/page/13/index.html","5a8ea883c02fefba8a3f392be1f2bdfe"],["/page/14/index.html","eb0fbb0fec6d96249ff4f92cb91996f1"],["/page/15/index.html","ebb7f553e1fd9bb5837a2325f42195a9"],["/page/16/index.html","c6a5bad035903664d62cbac5122b38ab"],["/page/17/index.html","8c6cac215ed4fd4a881953c33b4b81fc"],["/page/18/index.html","940db7f3dfa6bdf0e8621090e2031bea"],["/page/2/index.html","33d241daa4dffe891ecb20634837940f"],["/page/3/index.html","e2f1427125771689931edf6a636770ad"],["/page/4/index.html","50fa6b78e96668fbc5b3cad65b1be533"],["/page/5/index.html","fd8bc77b4d405f392269ecdcc78b0f39"],["/page/6/index.html","62e7aa35a4e77e0a1fbcf388505bddb6"],["/page/7/index.html","669032a7d3d18bfdff61c8789f1b876b"],["/page/8/index.html","fbbcc551e5c32c9e2236ea19e4e4eb15"],["/page/9/index.html","767c6f4f12aa38a19a0f514a87d4bd74"],["/sw-register.js","7737c2e74adb338e708c0675f4964c37"],["/tags/Ajax/index.html","f1f284ee28f5708284b9a9f44d2c6b7f"],["/tags/Axios/index.html","626f2c53114dae7b81624a5cf60e0c14"],["/tags/CICD/index.html","4ed540888926f38db63c2d66de4633c0"],["/tags/Docker/index.html","c133585f4f28e172e05f4619205d3c41"],["/tags/ELK/index.html","3873c8eec1ba93a4efc15dbb929c3967"],["/tags/ElasticSearch/index.html","515cc93f8a6d4dc93dd14adafc64c650"],["/tags/Git/index.html","f1556ff73ac105a81e76867f46ec0ca7"],["/tags/H5/index.html","27357efc3e6cae3f935633bb056e1de1"],["/tags/JVM/index.html","b8328343f19362d59715ada4bcd22ea1"],["/tags/JVM内存模型/index.html","24d4a6fed4f0565a005b5d60e594bf54"],["/tags/JVM执行引擎/index.html","1c27c205eff6e35b83cdc3882282f7ba"],["/tags/JavaScript/index.html","b7c8e564a90b0dbb0f14fb00c49aa77a"],["/tags/Kibana/index.html","345d362f61b92f9c2edea219174f8577"],["/tags/LeetCode/index.html","99e3d9fa9c43abefd9f06fc2335979be"],["/tags/LeetCode/page/2/index.html","799f53a301099b0ea919c0814458899d"],["/tags/LeetCode/page/3/index.html","ed9709219af826915aabd665adc6b1e9"],["/tags/Linux/index.html","40431f0bc968253658af7b7d569764f1"],["/tags/Logstash/index.html","ec1f57f6f76ef4c4bde31c4ea08eb72b"],["/tags/Mock/index.html","e0d2a4e0f3c0de5307e3ac166adfcd55"],["/tags/MongoDB/index.html","5229a1852fa930cf74ecd69e5f67cd39"],["/tags/MySQL-事务/index.html","3ce3e5bcac70b29cb7ace5b08e7c7599"],["/tags/MySQL-数据类型/index.html","314fe4ef97d3ecf59111efd7d2919076"],["/tags/MySQL-日志/index.html","9ec2c5d3d701f23af5bac6beac3fb5f8"],["/tags/MySQL-索引/index.html","501a0892c51b901f0955e5fa878b94fc"],["/tags/MySQL-锁/index.html","a38d845ecd80500bf5e0e6acdff0eda4"],["/tags/MySQL/index.html","2a338589920fddd4ce51550ede1770de"],["/tags/MySQL/page/2/index.html","776f9a1fdc699368ed0b20e809b3a248"],["/tags/Mybatis/index.html","c5b4691092bf8954652696591563bf9a"],["/tags/MybatisPlus/index.html","d639c811d157728a903abf8cf5b57069"],["/tags/NIO/index.html","e549fbd7ea74af94e71903f917b6a324"],["/tags/Netty/index.html","f5e064668a1499ae2244a86bdfca3099"],["/tags/Nginx/index.html","23c1d673733a6325973b4e956bd4040a"],["/tags/Promise/index.html","45893c3b2d43cb9c5bc7329fe26eed8a"],["/tags/RabbitMQ/index.html","634ed5e11c29264b628df2079efefb98"],["/tags/Redis/index.html","93a562655029b9b98425685b893d8505"],["/tags/Redis/page/2/index.html","f56f6f951cd002ae2a5c82a5dc2424bb"],["/tags/Redis/page/3/index.html","b1e750eb9b3c31bcfde2620b392ff831"],["/tags/SSM/index.html","0a9bf93832c96099943a36d08505bd60"],["/tags/Spring-Security/index.html","57a53794d73068d22d3262879ddb50c8"],["/tags/Spring/index.html","68548f7ce5739c24fd54444a7240cfa3"],["/tags/SpringBoot/index.html","2bb1c4a1f4d95ebeb68905650c664e2b"],["/tags/SpringCloud/index.html","56447dffe7b9b4152f89beb6b77fa080"],["/tags/SpringMVC/index.html","b5ca9aa021f6bdc052a769873d6f31f2"],["/tags/Swagger/index.html","e22cee9b9b0f51fa40ebd1130bea334d"],["/tags/hexo/index.html","28c0a5ae1a6c33440944f5028314fdd6"],["/tags/index.html","9aba6809beffb9d08502e28388bbfe92"],["/tags/jQuery/index.html","9be319660f1d5371edba615f35db5ad6"],["/tags/java/index.html","fe08787120672047413b7a2c8499b891"],["/tags/markdown/index.html","b899be466942e1ee0d00d7a8723f6cb4"],["/tags/noSQL/index.html","537b0c96647a409ba89fbcf57193dd72"],["/tags/typora/index.html","9e411cb615cc435f9eb794af0c75496f"],["/tags/vue/index.html","5c05db07405bf7b3d9dab6b500c3c9e0"],["/tags/享元模式/index.html","05eb063b61202c1e1b8230e13ad35fd5"],["/tags/代理模式/index.html","8fc11f396f99f91b3b6224fbfdccb22b"],["/tags/内存管理/index.html","a356784db4e614c1050de42da3569b28"],["/tags/分布式/index.html","8f92f41cf9f52aa0158983ba502a726b"],["/tags/分布式系统/index.html","966a9b5b63debedf8f5de372dcabd84a"],["/tags/前端/index.html","edefcf2fd71f84871df39e95d0f36b56"],["/tags/前端/page/2/index.html","6a8c1ff9806c1d8751a945608039a965"],["/tags/博客/index.html","6c69296abec78dcdfc684963d5cbd071"],["/tags/后端/index.html","497f55848de0309730f1cd8bb152a8f3"],["/tags/外观模式/index.html","5d2ba89ae5a12aa60ed6be45897cfff3"],["/tags/容器技术/index.html","51555262c9981a815f76945dccb61ac7"],["/tags/工厂方法/index.html","10bab26a7a9a52af2b5e60236cdde73e"],["/tags/微服务/index.html","5f97c4e21ddc914f2f9527b9e3791d75"],["/tags/抽象工厂/index.html","84b6d7accdd531e492299111bbd48be3"],["/tags/持续集成持续部署/index.html","62aa41b78d0821f6c3721820fdd18e82"],["/tags/搜索引擎/index.html","44b369e8c3d1e65909fa78bca43120db"],["/tags/操作系统/index.html","11d4d7686ccf929b5ea0c1a70727be9d"],["/tags/数据库/index.html","05281ef1939f9168c81c8ee6acf397dd"],["/tags/数据库/page/2/index.html","957ca49dd629458e8fccb4c03c2e35ce"],["/tags/数据库/page/3/index.html","0d5f6c1ac3fe34c95d1cf7e48fdc4339"],["/tags/数据结构与算法/index.html","73f2ff63e5719bf6920ce386596a5d69"],["/tags/数据结构与算法/page/2/index.html","06c8e1086a1ecbcb994991293998470c"],["/tags/文件操作/index.html","dea136eeee92c85a8f16b8947f871afa"],["/tags/日志/index.html","5c4c6402d2e0dc9c9d01689a15a78b6d"],["/tags/服务器/index.html","2b90ce336f1f9f358d9b28cb7820d8ae"],["/tags/权限认证/index.html","1fe1b7c6713884a3e274369bb7bbc6d8"],["/tags/桥接模式/index.html","bcf5d1644b2bad87df998c70fab4a326"],["/tags/模板方法模式/index.html","0863fb389ea3a352884eb7cdd76e3f5c"],["/tags/死锁/index.html","4c5526fb053063098c94dc0b44f4a7e8"],["/tags/消息队列/index.html","fc4284338f5feba5baba6cc6fba4781f"],["/tags/版本控制/index.html","435e78ae4ed7783a7dbcac408de42c92"],["/tags/策略模式/index.html","b6ef47d2282ce4e3b49d63a88a8c3813"],["/tags/简单工厂/index.html","3128538a95eec6fddbbe677920330ebc"],["/tags/算法/index.html","bf23c1816bed7a6aacbae83659acfd90"],["/tags/组件化/index.html","eed8b7f96df1edeb23117c4a91c9292e"],["/tags/缓存/index.html","0404798d86e7d58211ef6e81e20766ff"],["/tags/缓存/page/2/index.html","0b28af65c18d62df2f97b7f1d18e00ff"],["/tags/缓存/page/3/index.html","480cd42d07c9d8182f9ac6e7ae323c04"],["/tags/观察者模式/index.html","456c1b80f38439d64068388c8304d48f"],["/tags/计算机网络/index.html","03d769850c742898fdc65a12d0acdcb4"],["/tags/设计模式/index.html","e9087d52107b3c06d09577ed16e15b5d"],["/tags/设计模式/page/2/index.html","c434e9444295a246d0c5459944d1daf4"],["/tags/进程管理/index.html","3fcb5d95e55089b0f1fbbd01b2ec1f0f"],["/tags/适配器模式/index.html","c77c030f915158cb5f7ad1c75b4e8a0d"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
