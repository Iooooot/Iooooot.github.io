/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","e83cd43eefe443d51d19ca10e1f56b2e"],["/2021/02/22/工具的使用/博客的搭建/index.html","d2efaea0c65457db3bc095711f6679da"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","71b6d67af6656ead3ad95a1f74153bc2"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","ef5ff8636419042394d72cf0aba73717"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","1e17e092c37c4c0405f825feb08e4b5d"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","2d928f6bc7813287f5fe27e0ef2804e6"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","70aa89fb6ddb2e54aa25e1db770050b8"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","b0d972b64121f58428968091b9316b2f"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","32a874808985b2c9a902b4720ea698c8"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","d9dcaecd4ce22051078e15d7adf1339f"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","a7927f35ffde742ff07bbb394256d39f"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","ccb55b2d13d8f1656522883117ac6ec3"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","3651c18dbca395fc53ed00583f9a4c8b"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","2ca20aa65767cacd7de6496f84fa3d7f"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","c118a870b9c32891b1b0c31a78fbee5d"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","709447b9e981959cdacf522d455d1084"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","66f54c012608f6354db357f570cbdb26"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","5983bf30f0b1d55c0d1b65cd4b5f39ad"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","c03bc0572bcca1afa5a832e0e509734a"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","288fb3e2378c9ebd4b2ae59e137c1f02"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","8fe9772f39af5f15cb54d00cebaf7073"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","4af6cb1b77ce8f9e0e6a370d26781422"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","ce5fa67e5510a3e8f9c8cdfc007f2e51"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","47a3be7800476b51c180952d305d86b5"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","6231110d8037f019d6bf2ff924291a18"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","ffb815c026c4bd223111958944a3359f"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","8de84964fbaf18715ad9898da0807de0"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","d9a985a427f041d2793436137082178e"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","01e8a49ea550c07e5fbea32ed9ae75d5"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","5a07ac045d082dfdc75d1dc5ffcdf20b"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","52e4d173e96e75bffe4d76a3ed7aa75c"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","3e0b418e21b29e5929993caf21f993d3"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","5e86aa992e32cc8905cdc5ff5aa3eff4"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","82e0f933b7d947a94a621bc3da393684"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","eb457b25fbace18102a93c3ff29becb0"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","7247bef96dc69c91a9e68996afe06eca"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","fcda2b28b4f9015d3521313889cb54a8"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","b79536f2860c71c599074fbdfa853220"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","790d25d846ce1011f517365e998dd428"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","4bbd17e42071fc78c2735f1f4303995f"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","a6397a810ba2d2dd318d83c7321980f8"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","c6c7afccb2ab8ff5e692cacd87afa311"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","6c7fcf296a45a69325f177cadbfdef17"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","9e87c3a3d3f8159b15b797dd4eb34198"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","afc26704c09ea274974226db903392a9"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","d5fed12d0f139277555195b9230e1a14"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","8e85dabd2a05b227dae6a1ceba1d82a8"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","096462a48edb1595aad148c60f95c752"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","9900fe1304ba849b4281df2030e1a44d"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","754bd4cacea1577b19b8abacdf5efbcb"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","a42767d9fd95ef65636d7d338fa24677"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","cb1f505e5451e89bcdd8fcacb937c025"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","07192bb687e2e32eb42fffbeda56163b"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","aa286ddb15f3015cf9afbf86747ad791"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","cec75328ce0b9962939347ed4c7ceee4"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","43faa2d46eaa22e587cee468419722dc"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","ea1563be893d5a9292a70c072ff9f049"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","7ba38258ed2a2e7695e73ad50a0ee4fb"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","90bb5b0d5a75956f55fe1d8660c0b913"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","521b4c2b0ca2ed4f683f4dc7b0cdcb23"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","5dd86835af711baf04ca506d37027320"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","53852f375391e2becca914ce778916f8"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","8139ce2cc05d2c29cf99d542db6c95fa"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","10592f8741a219a6e5e2ccce3798adb7"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","ee3ff43a220200c4bb27cc00b39ce13d"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","4755c10152fb20b2ebeeb06876945d3f"],["/2022/08/17/前端/jQuery/index.html","e91c78f24b4c8167ed6057a05fa89a38"],["/2022/08/19/前端/JavaScript/index.html","2afee9191ae099db5d510e519bd41add"],["/2022/08/22/前端/Ajax/index.html","738a040d806a3b998e39a0c86f293b6f"],["/2022/08/23/前端/Promise/index.html","caf6606b89f6ed0cbb9edbec82e925cd"],["/2022/08/24/前端/Axios/index.html","ec1d6c5f98a365cc0863911ad7813360"],["/2022/08/25/前端/H5本地存储/index.html","22d536391ec8490ff3eac65ce3910fc8"],["/2022/08/26/前端/mock/index.html","55dcdf582525c0eb7833bd6e4b84b587"],["/2022/08/31/前端/vue/VueJs/index.html","ac4e75380e28983a4126a057e50b12ea"],["/2022/09/01/前端/vue/vue组件化/index.html","8142ac7c7657fd35a3a80c97cae1251c"],["/2022/09/04/前端/vue/VueCLI/index.html","11091e2b9b1d8aa3b9b93a34bfbbd115"],["/2022/09/07/前端/vue/vue实现动画/index.html","4077a6f50025ac951fd1297750f0e3c4"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","970dbf93c628f147aec47acec0768d59"],["/2022/09/10/前端/vue/Vue异步请求/index.html","fe0295d0f08490e92b21583e84ea3289"],["/2022/09/11/前端/vue/vue-Router/index.html","580d0f1e991e806751b369a4dee1d1da"],["/2022/09/13/前端/vue/Vuex/index.html","3b765c394a72ac3eb09670199c2b3103"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","3359e11356dd6809fb87a72d2a23e74f"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","8ad760fefc251dde20ab673c872165e3"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","37f911cf2c7b06632d6bdf1fe0e92ca1"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","87fcc2de28ecc7c41d0db2af9b49702c"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","0f0c58a32c43150aa361dd067eaaffc0"],["/2022/09/28/DevOps/Linux/Linux/index.html","fbcf3408230203ff3552b2abb3252b26"],["/2022/10/02/中间件/Redis/redis基础/index.html","d822a185dc1ef57258d6b08e3ecf3604"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","b590f776048cfc907994162b8ce5fef7"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","9b6b446ae4ca8f5ed7abe04da1899e80"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","805658ba2ca55d843399a00994e09576"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","447d72a976eac7d6e6712b444f979b42"],["/2022/10/17/中间件/Redis/Redis集群/index.html","58a85c29cc7793e3403e108dbee2a9eb"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","032e753fd7539b3e9075e20c8f5ec397"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","811df8639aa06640fb1a03a42888bc76"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","c40b9caabbf6640c9557c0d0355c77c2"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","40e1a8c02fb70195be310f84f5300502"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","b781d9c83864982a1830996b13111469"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","d60f363fea81cd5591d99631f712d518"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","225d1620918b564d0cd048041e44320e"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","2dccf0b55c2c5daad308a0b00101f860"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","9973d7e3301f6a06382c63861430a54a"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","c1a967cd467f1d3a37d5a972c3a824ce"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","b05e1df16c5bbeea8602a41b1f7e8b0a"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","f31270bc7085b772e9023ac0c8cb0af9"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","fe34eab4e70065bca1600485aaaa2aec"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","e03b54c563893dac6373e3d56ee9868c"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","4945f23a2277c5e61715faaec6bf39e7"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","f09b129cd38b7717aca70359cb081348"],["/2023/03/10/DevOps/CICD/CICD/index.html","30588c3e15c09ebf29a99514179b519c"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","aefe4c9fea005ca36f68a866e7012f87"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","5029d1e50585aa6d2069976fd7b581f4"],["/2023/03/13/Java/NIO/NIO/index.html","97782b829c3fede90319631813c86b68"],["/2023/03/14/中间件/Netty/Netty/index.html","a609f6ef6f2fddcedbfc273d3af58be7"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","8ce09f5074d5bb7da2a6e56491e38602"],["/2023/03/17/系统设计/分布式系统认证/index.html","9978f0137d71d3ec8a1b840039890b14"],["/2023/03/19/Java/JVM/JVM概述/index.html","178a0effe8cb91f514d3748fcec80b8a"],["/2023/03/23/Java/JVM/类的加载过程/index.html","4f0ad5587a0fad690e9b4a4e2e5145be"],["/2023/03/28/Java/JVM/对象的实例化/index.html","7ed2d5c97793a8ab697c1f988dd89ac1"],["/2023/04/01/Java/JVM/运行时数据区/index.html","e85ee0385f4d682962a00d6a397d06d0"],["/2023/04/04/Java/JVM/执行引擎/index.html","08f5253f5d9be91df6a632a437d00a1e"],["/2023/04/06/Java/JVM/对象引用/index.html","f911affa581cd34469755bf233c320a0"],["/2023/04/09/Java/JVM/垃圾回收/index.html","b267ac70a38d1adbecfdddaf3ca78948"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","f16e1f4b1fa18f90c878aa94daf2a266"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","9ef3ecb9193a600b4f44aecb84d21de2"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","a391d1b1581e9e50e01fab1f109fc4d7"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","553cde20e698285ea9764b79d719a2e7"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","24d783c8362754987e718569ea144ec8"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","7e64ae9b908584a3100410e289f7286d"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","dd4708190d734a26aa239e981ee99079"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","8327444f3ef90b541c89a76d606e0a8e"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","e93f91881ed79414349dee846021b232"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","b265d1233a6619fd3d4b482cfa907bdc"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","d0601266896c5874cff2c64cf1b0600c"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","12538f0ac7e4fa0809978f1921c0df82"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","f999514d502ff7b5c0689a49449aafb5"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","4b946e25e85e34325d0be304d22a4dac"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","dfb9b2865e831afd32f4f58558fd40de"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","b00c9be448a89fb9dcaa8644050965f8"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","315c7059b9086f832f266126fcb634a2"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","2c306e23aedbc5b7a345a061fb641d79"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","6babd60cfc3b39601ea7644fb853bc9f"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","2e00fdab918865ca3db7d8964a596850"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","7a6592268a76a8f6fb311ff081ccc75b"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","fe7971e98f84df48600abed9474e8b2f"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","48a294c81292822f4c2f0c8aad41c047"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","727c38d2e6013bd325503d94b2c447d4"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","b4c83b8115c7bff8c86fe89e74f8331e"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","c4b13cfdaeac83f7b148a2b735c67f47"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","bb663a71566d276db1b9528449a78ba1"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","b81d306ea473fc3ce88f871eee375df2"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","8ac3c7a81938b57735f89ede93afcd00"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","cb359693bfae35d96e72e5811cf939ce"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","59f17ffe47e4fc7683d5fadc8e06bc18"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","56d6a0b34255bceb0b9b741b363681fb"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","e729cecd7545a35f61d4c877812fdd85"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","3aa81e699f6ca007136b63c07c93d6d9"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","8a0304e6002a779023e291d3f75ec4a1"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","5deeaf6bfe81a8517232200b464e722e"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","b35fbd3d11c43b82f99269985035e00f"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","cb6f23607b5b8ab5149e7caeabfdfb9b"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","b93d58b99cf20f5e75d3af8122351373"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","540ed57bbb6a66084f042638aff4d660"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","b2f3ddd2f837f94b457ba7299f32ae1c"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","4cefb6b695e96799d2de57b9ce59fbd1"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","d25e42368ad144531a32247661b2138a"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","56c80faaa25c7fa777901fb81ba12a2e"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","7a9c24d84246883d52730558e14c0206"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","a61f10289f7ace58652c06d024547c54"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","bedaa5af8bf96db63d7bdbea10f75b98"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","d8c113fa59accc040e3dade63540ada4"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","7f7ebd5e1ea89a3d095020341919f465"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","bdecd8fa128dabb5a3db9b8bb6142719"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","56f1790fc2379399e47ec763617e7c69"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","98570dc3aa306b94a389f83f1c29234f"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","6872f1f13bdd040eb07c016d1466a74e"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","2a89822bd98c370f0ea07439ce3f2971"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","23babdb918ecfef088b434c4865b8ec4"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","72e48a6edb129c10bc5457f8e6dde870"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","ba1554cad29e4f38f9a2eea9ba22c97a"],["/2023/09/04/中间件/Redis/Redis事务/index.html","21bdf466cab9e1a9dbb138dbc22232d0"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","99a08b749a54ebbd11a09aee4aa15fc4"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","3a084cd87c3044a5eb5be3dea608cf5c"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","c04475c08aaae972b479aa69fe12f99b"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","85def1a5ff030efbfd1b818f9be4be90"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","e3dbba1b656bc0ab7a953a116ed2284e"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","49276c23a11b850949474c17212cf7c6"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","83c6995f1c7e50df1bd41fd28a1c83fc"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","703a67271c8da17aefe4b436143da53c"],["/2023/09/22/Java/NIO/零拷贝/index.html","9f047089576bc89a9a4c2196f7ac1727"],["/2023/09/24/系统设计/JWT认证/index.html","cf45ab4ef08a7787e4fa1e033d41e678"],["/2023/09/26/Java/NIO/Reactor模式/index.html","4737a1f26cc66c1ef8c2728b333ced62"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","7c7e6e9c08fa9ab3e258c68abc9c90e1"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","d0e1e2f0853c16985626e9bdcb9ceadc"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","76f426ce31199de985545e1b98a83ad4"],["/2023/10/09/Java/并发编程/共享问题/index.html","537240be0abb4dc1a764607ef9a9da60"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","d7c5bacae2692737412d662a6bf4e093"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","f6680df2b641d6306c351947a493cfe1"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","2b71b7c2ec74dc500e5541e1077362a6"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","49c2329c136de7c6b967ac8cc13685b1"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","bfb85993f946e27329f4be886445949a"],["/2023/10/23/MySQL数据异构同步方案/index.html","46beeea1455cc13224bf66c45711afa3"],["/2023/10/29/动态通知方案/index.html","41b2954d702a241a30ccf2f95b901b12"],["/2023/11/01/多级缓存架构/index.html","a667ee3f2d4d322e06fffc08cc7834ab"],["/2023/11/04/分布式一致性算法/index.html","a17b61bc7c050c3cffae3fab3c373ffd"],["/2023/11/08/接口幂等性/index.html","ae111a41b31ad4225768e973d6ea4baa"],["/2023/11/12/数据迁移/index.html","9912d24398cb4596cd4ee4884200544f"],["/2023/11/16/经典限流算法/index.html","019d52821d70cf9de53b59420e9a4844"],["/2023/11/20/高并发系统通用设计方法/index.html","6be5dcd9a2f8377611f88fe3b0657891"],["/2023/11/23/架构分层/index.html","7628e6d6a7940f27ee7a3f57ceb5af80"],["/404.html","50a100b31220d1a79fae7f498c230387"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","54c5c8e88ac7edd065b86eb43781f907"],["/archives/2021/02/index.html","031c6359ef45184f296f31ec80249e4f"],["/archives/2021/03/index.html","bf49c1a455853973a0f41eec394f27d6"],["/archives/2021/03/page/2/index.html","d22477aeea925efc2392c44457fded22"],["/archives/2021/03/page/3/index.html","a792dffdb31e059c89e78279ab39edbf"],["/archives/2021/04/index.html","e7dd1bbf00ce6181c67da93650632776"],["/archives/2021/04/page/2/index.html","57410e97b0b94e2559f5e7205b11562a"],["/archives/2021/05/index.html","c25b83873830301cb94e67c77ded37b9"],["/archives/2021/index.html","49833d3b6e1d412a59f98b6866fff637"],["/archives/2021/page/2/index.html","92e0d47b4e7ff38afb2c7b386018b358"],["/archives/2021/page/3/index.html","cc4afb69aeff9178971d0db763adce89"],["/archives/2021/page/4/index.html","2054defd8e18c31b3c6e1845efd89d73"],["/archives/2021/page/5/index.html","c1222ae90e48965c40c15ef70c235b6e"],["/archives/2021/page/6/index.html","ee9d3058b094ac2db857fa0a6a1f7d5c"],["/archives/2021/page/7/index.html","e2a7ef2085bd99adc797d6bff5fc7383"],["/archives/2022/01/index.html","204f8fccb996ab41404275890466fa88"],["/archives/2022/04/index.html","6dfb2139abace85c7464e887ee95e63b"],["/archives/2022/08/index.html","1c110a0007bdd025a1c7bdce599e812a"],["/archives/2022/09/index.html","a739b1a53e4dbfeb228a64eb3eceeecb"],["/archives/2022/09/page/2/index.html","47b52eb8c528c92f81472101e95a6f5e"],["/archives/2022/10/index.html","dfaf85ae6c14b8329a202ff526dd8f74"],["/archives/2022/11/index.html","96ee8b05be77a161df8aaf407a9a8318"],["/archives/2022/12/index.html","e1d75460505f1b4da54056cc733d8c2f"],["/archives/2022/index.html","102fb038cc8317399591d9c894c82f94"],["/archives/2022/page/2/index.html","858dc1ec9cfa35edc6bc0d4dd4373447"],["/archives/2022/page/3/index.html","d01cc7e4b6593e434e05174349700757"],["/archives/2022/page/4/index.html","7a349483516a6af1d6754d7ab6d392fe"],["/archives/2022/page/5/index.html","0d4f4ff32373682549683bcbdcc3ddf7"],["/archives/2023/01/index.html","71d6920d8c09900588e970e5f478221f"],["/archives/2023/02/index.html","60fd6a4e2ee90911ac546173ca80e8be"],["/archives/2023/03/index.html","9315868c05c8979795d70986c6f18c1a"],["/archives/2023/04/index.html","fb6c8dfa9cae5a7d5751fafae2512d28"],["/archives/2023/04/page/2/index.html","607d86d6aa6e476e17f7ec547ccab2dc"],["/archives/2023/05/index.html","e6d54ec56ab5d95b14f244a4c2330e77"],["/archives/2023/06/index.html","30dcbd76b07b95933117ca8f20034d1b"],["/archives/2023/06/page/2/index.html","b4c2b8498095c8e247d7c859c63cd0f7"],["/archives/2023/07/index.html","fb5632a7d4298495cecec5aaf8122fe6"],["/archives/2023/07/page/2/index.html","17effeef804326265d17579e9022faab"],["/archives/2023/08/index.html","9a16ed016fcc7c26a15a8d02b9c88b1e"],["/archives/2023/08/page/2/index.html","1096cbe4903f3474fd4b50620c3a84fb"],["/archives/2023/09/index.html","de39922cff4929166463b27a7f1c7fef"],["/archives/2023/09/page/2/index.html","b66bb56a26387c291e243192243551dc"],["/archives/2023/10/index.html","b3a643b001adc56e813a832b8e498043"],["/archives/2023/11/index.html","33c9d2e0d95cf6f4e152f374df51889e"],["/archives/2023/index.html","c82d693adefa9ce5531ed5934b2b48fb"],["/archives/2023/page/10/index.html","5c2a680e229e0fcd1cb7171ab567ccc0"],["/archives/2023/page/11/index.html","185fd9a813880efe4b6b2cd8e35d2b9e"],["/archives/2023/page/2/index.html","c67ecb1bf086ea0d1838ed277b439a6d"],["/archives/2023/page/3/index.html","8b8ea6452c676f04c62af2c57fe41942"],["/archives/2023/page/4/index.html","b23ff69ce34515884a4da64951da181e"],["/archives/2023/page/5/index.html","c8be617f3dbd9be52e9b035328ea0ecc"],["/archives/2023/page/6/index.html","cef6c79d6ff56d75767c780872561957"],["/archives/2023/page/7/index.html","cf2b0d03c59070d69ed5685fa99874a8"],["/archives/2023/page/8/index.html","3148e101279975a02eac212a91c67371"],["/archives/2023/page/9/index.html","848ced8cb9a125aa55259289fa1448c7"],["/archives/index.html","f9467ca277b612cfc6487159278b4ad0"],["/archives/page/10/index.html","8d2d86e065c429216964c1340300b268"],["/archives/page/11/index.html","348d530ac63e77d8cf4379bd413163ad"],["/archives/page/12/index.html","ccd3fc162189db43be8fe4f9b784100b"],["/archives/page/13/index.html","20fd634636e780109707c5347e147558"],["/archives/page/14/index.html","edd88d914a4515e651039b3d18c0223f"],["/archives/page/15/index.html","22ab95bc3f1ec4d355982b127e8e0961"],["/archives/page/16/index.html","d968a0f6ccea12ee8fdb68dda909d27e"],["/archives/page/17/index.html","2c2f31582b2272f41cd3d769016c65d0"],["/archives/page/18/index.html","f11197309cafd704cc43c51e225f991c"],["/archives/page/19/index.html","f9ba9f55bd0b5a5086c3e8782849d834"],["/archives/page/2/index.html","9258d7a9b0718dea82ab76dbc8eef4de"],["/archives/page/20/index.html","f90f58417d4eb8278e3a6f5853057383"],["/archives/page/21/index.html","2c057098e0d2dc08e8a65e8034025f27"],["/archives/page/3/index.html","0abf72bd03d8a3f99316eddd50db0d1d"],["/archives/page/4/index.html","ef43da409ecb134dda498ff04ae5f34a"],["/archives/page/5/index.html","d4b0141f30215771a2ace647a9d261c9"],["/archives/page/6/index.html","5cefdc8cc42b6fe30f933a8fd3c6f864"],["/archives/page/7/index.html","810232e8e1cfac6ea1e516a9fbc95698"],["/archives/page/8/index.html","624d7c10ca1f6cef07bc8ad9277d3c42"],["/archives/page/9/index.html","d828385a031dd34190f7cb84b22cf26c"],["/categories/Devops/CICD/index.html","ef866bf0823eded391378d83bf322175"],["/categories/Devops/Linux/index.html","a09fc95c18c3340640cddf3f15d63da3"],["/categories/Devops/index.html","73e235106d53a31e8a151e61d78c01ce"],["/categories/Java/JVM/index.html","0f68afafdd8f6000af29d0be150d8e63"],["/categories/Java/Java基础/index.html","7601d45ef48568eb00cc0a6b5e215f29"],["/categories/Java/NIO/index.html","a8c10fb21e976b197ad0e7680d221c15"],["/categories/Java/NIO/原生NIO/index.html","ac0a8d1bd102b7b3ece97658fd264be3"],["/categories/Java/NIO/文件操作工具类/index.html","b783a787d9082b036dae1d8023575d02"],["/categories/Java/index.html","a1ba5af3456b5088b17ff19fb6c5dec8"],["/categories/Java/page/2/index.html","1b9142aa72ca8899f82c89398a20b1b0"],["/categories/Java/并发编程/index.html","c58e8a67e05b56b63feaea7aec88f372"],["/categories/Spring全家桶/Spring-Security/index.html","df504f85f41a45e06f6b1a9c5d08e0ac"],["/categories/Spring全家桶/Spring/index.html","26452e7a85708fcea7273c213264f68a"],["/categories/Spring全家桶/SpringBoot/index.html","115ff0ad33928ddb18dbcd70fcacaabf"],["/categories/Spring全家桶/SpringCloud/index.html","50bae919c187d6a24a67553a119c1191"],["/categories/Spring全家桶/SpringMVC/index.html","bd5efee2776ad7f924e5e38be690e7b2"],["/categories/Spring全家桶/index.html","6c37622028d7cb002be6b85e658514f0"],["/categories/Spring全家桶/page/2/index.html","c1280d8a0299b50bb17392ed3bc1be15"],["/categories/index.html","a88195ee8efafaa9a93bc2a586fb7df9"],["/categories/中间件/ElasticSearch/index.html","a21a4a222ab24f64746f5e0058b9c004"],["/categories/中间件/Netty/index.html","14fa6205b7f3f3b5bb66fae0c51f9b8a"],["/categories/中间件/Redis/index.html","e04dfad8e0433b66799a5feeb0425f6b"],["/categories/中间件/Redis/page/2/index.html","285df2d94722e7315310c7cca2bedd0a"],["/categories/中间件/Redis/page/3/index.html","907b3223522bf6b848cca4c7cd146bc0"],["/categories/中间件/index.html","71c9c0ee7d430d628eb0cef3d5f8d997"],["/categories/中间件/page/2/index.html","f182d148dd0ba0de96ee5bcc4fe5ce44"],["/categories/中间件/page/3/index.html","7930e7420e57aeab6635a13a75488c29"],["/categories/中间件/page/4/index.html","31429388ed1ca4b96636676312969ca2"],["/categories/中间件/消息队列/RabbitMQ/index.html","ec6af8405522da1cb31fb0ac9e2e3a88"],["/categories/中间件/消息队列/index.html","59d82f2a953821fa6b76087da7bd4373"],["/categories/前端/Mock/index.html","7d2bd392f0c7b2232b8ae8f25ac57c0a"],["/categories/前端/Promise/index.html","391c5361405684afe8d0dd52a29cbe09"],["/categories/前端/Vue/index.html","ff9a076a1deb8beb36206cccf296cb6f"],["/categories/前端/index.html","5317855714a4fa8862903ebe99029443"],["/categories/前端/jQuery/index.html","705ba580a60da8ba4fb4290a21cf67d1"],["/categories/前端/page/2/index.html","60cb3ea83ed0d0238e44742a895dd213"],["/categories/前端/原生基础/index.html","6f3173e636f50da7df9d2146772558eb"],["/categories/前端/异步通信/index.html","470b96001fabcbc77069a2755aa7f20d"],["/categories/工具使用/Git/index.html","079480744ce1b66e5789fd3b58523c8c"],["/categories/工具使用/index.html","2c1de14b04b4389b4bc7e51257118b55"],["/categories/工具使用/markdown/index.html","a5462a0362f92c0be7153c146c0c3073"],["/categories/工具的使用/Docker/index.html","b96c46bd2e8841a00327bfb32c4807dd"],["/categories/工具的使用/Nginx/index.html","df405a40c2292821d0fcc01cfe9932e3"],["/categories/工具的使用/Swagger/index.html","b16682b9ba7b22bb1eff0b38353a9296"],["/categories/工具的使用/index.html","e8ff2e545731d276ce2aada055afe206"],["/categories/工具的使用/博客搭建/index.html","fa770985ac16e9d5e06f3b9e87a5911e"],["/categories/数据库/MongoDB/index.html","409a3383edd613713baf8ea91ccc9149"],["/categories/数据库/MySQL/index.html","0a6ff5716d4dc565d37fd5f4d9a03b1b"],["/categories/数据库/MySQL/page/2/index.html","70c28efab7e5ab4b9779fc9a1e018b83"],["/categories/数据库/MySQL/page/3/index.html","f6bf1ef32c5a10230b47165729299ec0"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","28d310b57d225dbe309c807128369267"],["/categories/数据库/ORM持久层框架/index.html","498277d468e6e81f53c72d268288afe1"],["/categories/数据库/index.html","cd50736dc0196d6c5408c6da5b8fd5d9"],["/categories/数据库/page/2/index.html","9fbd8e0b7996ff67772d8a53d2d7bb50"],["/categories/数据库/page/3/index.html","7741b7c2e1c61ee0472752846d71d47e"],["/categories/系统设计/DDD领域模型/index.html","3f1ea77bbce752cdb0b9a3a61ec507a5"],["/categories/系统设计/index.html","f56f6ad53ac94d81eaff39d59a1a89de"],["/categories/系统设计/page/2/index.html","d43bcf094f20363698bec911f953fcdf"],["/categories/系统设计/page/3/index.html","10598a30aae8e8946c1c3789dd970a32"],["/categories/系统设计/分布式权限认证/index.html","96851229633ec353692d42f83a8dbe1f"],["/categories/系统设计/分布式系统/index.html","b258ae8ee7756c9de3b93ac186e686d8"],["/categories/系统设计/分布式系统/page/2/index.html","64e151f984404b8ab049011ca84d8850"],["/categories/系统设计/设计模式/index.html","0e7abac57d772b2b9dbf7847c8c5b04d"],["/categories/系统设计/设计模式/page/2/index.html","7b74f976a6829fb4effe1257a0bb7137"],["/categories/计算机基础/index.html","7881df4f509fd0c2425dc4863ea90916"],["/categories/计算机基础/page/2/index.html","5707d73f0e398611bc1086209a9604c3"],["/categories/计算机基础/page/3/index.html","f93f67b97d82b1530ab08c2e0dc45542"],["/categories/计算机基础/page/4/index.html","b18e2946e2d7297c49b58372711172a6"],["/categories/计算机基础/page/5/index.html","5d7519facc05ff0794167dbd7c9e2f81"],["/categories/计算机基础/page/6/index.html","cc89834738a1509d77637288ecadf04e"],["/categories/计算机基础/操作系统/index.html","968707e9f0230d23c413a295646b4641"],["/categories/计算机基础/数据结构与算法/index.html","39eef17c501511384d8f09315717d522"],["/categories/计算机基础/数据结构与算法/page/2/index.html","a2e0e331dc007a36b410339a00706d5b"],["/categories/计算机基础/数据结构与算法/page/3/index.html","9446c9bbb1b1ee7c75edd9a93229a355"],["/categories/计算机基础/数据结构与算法/page/4/index.html","c4f988da949b9ccd2515cff6a759a51a"],["/categories/计算机基础/数据结构与算法/page/5/index.html","312a542715bfc907c594f05ff80e3aae"],["/categories/计算机基础/计算机网络/index.html","fe2bf5e05044a9476a5abd6e748dde1d"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","74bd02f74edea0a36d77c853514aa26c"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","4fc0e277bbfec2555f31cf04d7880f7a"],["/messageboard/index.html","f7dfd809b43d8c874937fff290d4d2d5"],["/page/10/index.html","1120ecdfd777d8b5520cdf30b8815c88"],["/page/11/index.html","9cd3fd241ed2f5b0f2a3d128b29c11b1"],["/page/12/index.html","dc4ce9ab52ebd1eac7bb5d3515feac89"],["/page/13/index.html","5c4556691b76870fbf20b8b41c1b02cd"],["/page/14/index.html","56339c807a9054de412e7d41491a70e3"],["/page/15/index.html","b02e0b16b078ce9703121fe299759fd6"],["/page/16/index.html","e5d286e4f5c31db0eb663002cbe47a27"],["/page/17/index.html","9cc5f23a4e327e9e7b910c7e9d0665e6"],["/page/18/index.html","56d168f01573fc4b6a8601f093700bed"],["/page/19/index.html","1d0f6b53703c7c3e43194c3eab3a1bbe"],["/page/2/index.html","8f1855d30f109b162774993ab0919700"],["/page/20/index.html","523face9a0448522beb4554941e82b0d"],["/page/21/index.html","b4aaf3d81f29f3b3a4eca09df6bc444d"],["/page/3/index.html","672a6cab71b5b70ec477c6f34756faeb"],["/page/4/index.html","64a9ba42d43004d485a47748f0eda683"],["/page/5/index.html","4be103424b7c9431cbb57f48a5303f89"],["/page/6/index.html","a71805cf50b0e03cba53db3695b3ded8"],["/page/7/index.html","44ce82d4e04b1c7417c56a19591b530c"],["/page/8/index.html","b0ccf6d7542d6e66b83ef0c2e39a0154"],["/page/9/index.html","5376b358c27087a6bfbf413aeebfb1a9"],["/sw-register.js","3ff7d061e444d596967dd7f9a2f87665"],["/tags/Ajax/index.html","6ce8b5fbcdd69830d4675bcf2e91a1ab"],["/tags/Axios/index.html","5bafcfeae0c0c60a7da2cb942d81674c"],["/tags/BASE理论/index.html","673064a3ee26e38253ee6bfac3188b80"],["/tags/CAP定理/index.html","101dc9a3367d0fc06e95a962c1735db3"],["/tags/CICD/index.html","93050f380d8f5dd0e2495a957885d45f"],["/tags/DDD领域模型/index.html","90a28ad3d2dfee9053c788f4ba1d9f4e"],["/tags/Docker/index.html","27cf4f11cebc8388f7c10b1a57803c6b"],["/tags/ELK/index.html","6a5cf929aa896471983f6a35e8c61012"],["/tags/ElasticSearch/index.html","09183bb60fc0539f2fbdd586a53000e0"],["/tags/Git/index.html","559cf3cb7ea989aef845c7f9a2256ed9"],["/tags/H5/index.html","1196823bb6affc2152d0a2847246413b"],["/tags/JVM/index.html","439500be71a0df9a4659e3415be9244d"],["/tags/JVM内存模型/index.html","4ec57c0938cd273588622bb17a1d51b7"],["/tags/JVM执行引擎/index.html","e2ab78d26001a3428dcf4b34243c2e38"],["/tags/JavaScript/index.html","46dc65db0e9de0642ec68dd46c573ed9"],["/tags/Java内存模型/index.html","5c48eaad0964cbd7f12ed40fbaedabeb"],["/tags/Java进程线程/index.html","941c2d80ffedf384c2c31e2f8434cb5a"],["/tags/Kibana/index.html","ab21a8e34cc95725a12a88d65229ba20"],["/tags/LeetCode/index.html","3b9933e2b9b41e9b41cbc595510d2317"],["/tags/LeetCode/page/2/index.html","7e8a855fcb4e8c87b5ceee4482c15cd1"],["/tags/LeetCode/page/3/index.html","655970427150f82b344b6fc441859160"],["/tags/Linux/index.html","91f9b9dae42c1f621dcadb5f9b9d68d0"],["/tags/Logstash/index.html","8c7e623df24e1772266c767250087713"],["/tags/Mock/index.html","dd61d3a32f17d6ccdf48d64cb7801260"],["/tags/MongoDB/index.html","3efef8dc5c04656c32d4194208347fab"],["/tags/MySQL-事务/index.html","748b10bb93c1302759c66c484a96f7d7"],["/tags/MySQL-数据类型/index.html","bb31b367ca364d6a4e20f8a779bc5038"],["/tags/MySQL-日志/index.html","a639e6caf896b8635493b3a16f753742"],["/tags/MySQL-索引/index.html","ff147c9381964c63cbeafcf982731c8d"],["/tags/MySQL-锁/index.html","37e93a366f47adef96c4bccaefed20d4"],["/tags/MySQL/index.html","116f7c72275168068d95a5dc719ce855"],["/tags/MySQL/page/2/index.html","1a58ac09886c5a1abe7f013db4052fba"],["/tags/Mybatis/index.html","0dac345ea13e8546c684c37582ec9089"],["/tags/MybatisPlus/index.html","7667bff911b774a118cf1e7c4d1362bf"],["/tags/NIO/index.html","6c8497c0a073fef462cc89732e5aa03e"],["/tags/Netty/index.html","b9d8a5551ba5eeb03390a3ac37729809"],["/tags/Nginx/index.html","4e074a8ae6384c1b0f36bba078c8f120"],["/tags/Promise/index.html","ee1fbb0bcc746b1e387435e7def17a3c"],["/tags/RabbitMQ/index.html","e8769b1d628a439a65a2dfd807c50c75"],["/tags/Redis/index.html","9bab0114cd26c61d7c483daafb6b7931"],["/tags/Redis/page/2/index.html","f14f4298d0447680b3344d40e599cf28"],["/tags/Redis/page/3/index.html","c5139e4f99efdae8f8f37b2a6c232814"],["/tags/SSM/index.html","eb61bd943f18f783bd3c56f1c8108f9d"],["/tags/Spring-Security/index.html","42664dfc08b2ba190769d74f3ea9312c"],["/tags/Spring/index.html","f078738e584eee7eb98d1ccf32478435"],["/tags/SpringBoot/index.html","4fdda232f0f7c8cfbc77f489813ece59"],["/tags/SpringCloud/index.html","2fd37783f8a5dd7fec68683208ac7eec"],["/tags/SpringMVC/index.html","82a31c226401d4e2aabab10b95cd4023"],["/tags/Swagger/index.html","d04d80f2d440ab64f7c03b09e6697b5a"],["/tags/hexo/index.html","aeb0bc76015176a01fe10e0618a3c788"],["/tags/index.html","b6e57e11086c9022ce5760d8ab1ae865"],["/tags/jQuery/index.html","5687e355d8674a25f42bc724a17ecb7c"],["/tags/java/index.html","c6487396fed29264ce068e0817cc42b9"],["/tags/markdown/index.html","8c6082bb9e1dc9fb91d245012a906a65"],["/tags/noSQL/index.html","b3000fe6387d75da9280006eeb4e8945"],["/tags/typora/index.html","8bd9e3bd2ca1e3166914d469ac6613a7"],["/tags/vue/index.html","6069e4ab8864be0ddc6e75572151ad57"],["/tags/享元模式/index.html","4c7cb9a081aa91dd913f1de0d291450f"],["/tags/代理模式/index.html","14af4fdbd013e4a8ef272d3421383934"],["/tags/内存管理/index.html","6f9c5438fc622792368bcafca20ec359"],["/tags/分布式/index.html","0120a5c27ee1c04112d3dab4ca8cd595"],["/tags/分布式一致性算法/index.html","9bb9fd8d278f62b5eed273cd41d003fe"],["/tags/分布式系统/index.html","a1ec3ba1ff6df4aacd7adddf3aa1c910"],["/tags/分布式系统/page/2/index.html","ea0897eed81fd28e50e1b12ecfd5accd"],["/tags/前端/index.html","6cf9f5d194f52bb619bcf2ee19518db5"],["/tags/前端/page/2/index.html","020d7f7bd776d7abf5b2c779371d8d0c"],["/tags/动态通知/index.html","6d4cf8898ac7e1fadc5fe43bf3dd0db8"],["/tags/博客/index.html","d68145610609249dce05b8990137f190"],["/tags/后端/index.html","19d693fa2ab50693935995ce5376129a"],["/tags/外观模式/index.html","98ef81b06147a5fce59fce65e0789143"],["/tags/多级缓存架构/index.html","493de32db016c9c35692bd61d620271c"],["/tags/多线程设计模式/index.html","b5ee4f08f98c96fb36aa940dcb3312cc"],["/tags/容器技术/index.html","047b038e0e863592c9464aee98e2241c"],["/tags/工厂方法/index.html","eb9027d4ea352f28cff90b456b3378c7"],["/tags/异构同步/index.html","89a1a455f3543e87a759349ec968570c"],["/tags/微服务/index.html","f9b118d7ef0606870d1d2e12be1c2929"],["/tags/抽象工厂/index.html","9633fe99a39129443f47a1a9485160c6"],["/tags/持续集成持续部署/index.html","8455dea68b5bbcaf6ab190b664645f78"],["/tags/接口幂等性/index.html","6a7845245dc992a18976b83fe8d42f15"],["/tags/搜索引擎/index.html","6c9f95c64c5bab2ae6d9d9e0d818e144"],["/tags/操作系统/index.html","9d97db8d75780bad22f9e446705c04f1"],["/tags/数据库/index.html","ebfb31a0d382bb6a16cd8f59a17c72cb"],["/tags/数据库/page/2/index.html","3e639593ee7cd951cdae353349790389"],["/tags/数据库/page/3/index.html","544ae8a0fd8f5382e89ba8a2e6f7fcbe"],["/tags/数据结构与算法/index.html","af755ec7d09579321594bc6ff60fb47e"],["/tags/数据结构与算法/page/2/index.html","95530989f375dda3fc6c58ea60f2c1a2"],["/tags/文件操作/index.html","cb3b8e0479661e77c0f6bb74382d60fe"],["/tags/日志/index.html","667e82c920d4005e3fe3976145d601a5"],["/tags/服务器/index.html","670347db98b656cc64c3028a46370ea8"],["/tags/权限认证/index.html","43527538ec44aec835b7613b77ce1c41"],["/tags/架构分层/index.html","8e2d75bc9bb55cd06aca6ccaab0813c6"],["/tags/桥接模式/index.html","c07aa6e56c65af6e43be4cc29987877b"],["/tags/模板方法模式/index.html","e9c68f98a8c26f5339c6a56f77280fff"],["/tags/死锁/index.html","cd21567eec4249abbffa1c112dbca376"],["/tags/消息队列/index.html","90150dad71256f5d6940790bde10068c"],["/tags/版本控制/index.html","f170b7625149fb16a910e8ed3ee638f7"],["/tags/策略模式/index.html","ac2b2c0662a49990d6e448bd5c0d10bb"],["/tags/简单工厂/index.html","e823df075a62cab6bd14b52f5819706f"],["/tags/算法/index.html","b7a9886c66ac709e815ba2ff2757b990"],["/tags/线程活跃性问题/index.html","07c82b448ba617ca6592e046f68f936c"],["/tags/组件化/index.html","6de94111be32ea37ae607db83a40dcfd"],["/tags/经典限流算法/index.html","a86f0ee0a74624694c6d2dd94f6d01af"],["/tags/缓存/index.html","22722773c1aaeaa0180a8c2232b11838"],["/tags/缓存/page/2/index.html","bbd98201de34bfa3feba28585b76147e"],["/tags/缓存/page/3/index.html","cd36a52f731900095b1a441dcc8395dd"],["/tags/观察者模式/index.html","d2d2a8af1b17f56e1c3e6059a27e89b2"],["/tags/计算机网络/index.html","92773c8db926e613ac1a601f685f2b58"],["/tags/设计模式/index.html","336ea352721a23f182f097b1c0d8329b"],["/tags/设计模式/page/2/index.html","0016c9b44956ae6f76554b1125810ebf"],["/tags/资源共享问题/index.html","f2c19ad6e94cdf444db0b8db32f3b673"],["/tags/进程管理/index.html","ec3b7ea69fb307a0dc91f13a2f7cbc67"],["/tags/适配器模式/index.html","c3918ba26c7e4890834c537a46fe3d91"],["/tags/通用设计方法/index.html","25a95c73e5fe579e45605555f957b4b5"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
