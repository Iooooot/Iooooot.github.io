/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","00b38276c0f5197d196a4ed2fdb7c821"],["/2021/02/22/工具的使用/博客的搭建/index.html","d31b966a78b6563c17b249fb40120e0f"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","8d3bc68f39e95da9414f09f6ac9091fd"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","8af40934d092a9c083a452366e16fab0"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","f5aeb77a9cd1be5d3ed8d53a76ed37a2"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","2d78dd35f74778b365cde04adca69362"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","f5079672da38f1d25ab82a8da5b9f75a"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","409b33cd7f9436bd825b464133471ba4"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","a363fcf24adce199bf78cf5bf1bcdb54"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","120699c99c99c2716dfab1a513dcb064"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","56f292ba89c457af15e59bfe9906ef01"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","a91b725380241e00d98c2ad7cc1c18df"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","f9fc79d346c6745ac5c2b80f0695a988"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","048fab897f5736067d314f9240418c16"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","896a0e7948378d0baad24ff6b2098fda"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","e3357b0d365a6ffba9dd2614d49bac3d"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","41796421e7ab2712030ce517bc1c5d8a"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","7d2c8236c73ee3a10658553d067be529"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","12b8312e3e771d2479feecd828711f43"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","9581dc507e1b4092a85eb46c86496f67"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","abe2fc2d1f7639c8a6057899162ecb10"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","5e9ae086066790858efd6046e44cd607"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","e8cb7ea99079fce163049248a4917dc4"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","ae01ed28c3da901a8b44c79fdca8353a"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","1ed2a0fa2b183d07ba5b8f6f3a33ef4d"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","22b31c70711d3b681a211c3d48a19669"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","52350fb7e5ee35785b05a61f1a5d7b46"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","356728f7140f76a2fb6f795ddc152279"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","5c2d4483e6e05f41d845f5386bedf227"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","103bf1502c5dea3555a70c02bc180bb3"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","ab30848dcbf706830fb8896068a14fad"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","ccb4b913da2b9b3b0f7042dafb4e4ed0"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","cf2f39af6e0e59b028a248d17d9e4d23"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","f185decba0aaea454fcc00a368daff80"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","854bb0dd782a879bfbe05ce700a06f19"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","f0320c01435029db990a91acf4060656"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","2070a74ec1f8e5127178b2f3d7af5e7b"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","630a8e1bc3814eb1303468f97f7057f6"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","e1e3024c1080a8c90d2288cd04c4f855"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","7699df1e999652826d0f8847513c9432"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","0be8fd5e06a0539c1f5258c9557a0c4e"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","1cedc68d0f2e71f6cc203c29804f4e1e"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","0997efe3661e12457ebc79be4abdd786"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","49852a68801fcd300ecfbcb9c2a7680d"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","4f8183221a47813b11549e7748d927ea"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","75650c30b7bd1e8f4c9c9ee9b126f126"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","434a04782f6f3b4f17718fa98b24c4c6"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","39bbda4e5140143cbb5edfad23ee599e"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","2d65b5ef7110265beb8e064f0ef30077"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","af3ffcd21ffa37394a4fe712824ca40e"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","c5aeb4fd13f097b1be2e4f6f847d8484"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","b74a8ced659a81b66e6561f885a8aeac"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","0a82b9e4bc077e2edb73502a0fa6f413"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","a532dfd30a0e3d160f136fae727264e2"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","6a30635b40a35311f16df3fff2879fa1"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","efb868e4818027961cc075dac0856bdc"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","397d0474ca49c152586e93fb9bfd3063"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","a6b3b4d1b9bf72b887f9c070b6193722"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","7769da3c9cb519b62d292385bb4a916d"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","be1b36d9de3ab1ccadd260d09422e388"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","bd1cfeeec30a42766b5d475ecd7649cd"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","d453b3bd0025b24526b33bc82e6d3317"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","d3d5a1812d2726f62e074b34d5b694ad"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","05ea0c82bf4604465314e8589de28454"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","767bc3e0579cfcfc4ef7200f96707ec0"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","c1d1b77232e8283a7150b384a27765eb"],["/2022/08/17/前端/jQuery/index.html","d214e88e478cb85fcee656b370829009"],["/2022/08/19/前端/JavaScript/index.html","f2a3e1e0eb46169899c860ca57a73c7f"],["/2022/08/22/前端/Ajax/index.html","78eeb7004aecdd89e0ebafc7249e3037"],["/2022/08/23/前端/Promise/index.html","b876f4264d17048dbfda0919c297cd0a"],["/2022/08/24/前端/Axios/index.html","0253a2d1d68f1d2f5582cfafcabd22cd"],["/2022/08/25/前端/H5本地存储/index.html","d3d5c732c96f3081aaeb3b4b8ede6225"],["/2022/08/26/前端/mock/index.html","2aa14b4e25e3b975a1420b89a93b5d1c"],["/2022/08/31/前端/vue/VueJs/index.html","d7d2fd9c08da28ff763e673c56d524f3"],["/2022/09/01/前端/vue/vue组件化/index.html","43496851ca7f4f84a5e3917af9290554"],["/2022/09/04/前端/vue/VueCLI/index.html","7b960d6aa13cc2a0b9be7f2764e669a4"],["/2022/09/07/前端/vue/vue实现动画/index.html","919c803aabfbf6918007fc7954a26314"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","4446e07a80aedc91acb36f93d15280cd"],["/2022/09/10/前端/vue/Vue异步请求/index.html","f709b615323767f41f64ca8e7ff40e93"],["/2022/09/11/前端/vue/vue-Router/index.html","9013f4210ade0a46b0349a7c830c5d71"],["/2022/09/13/前端/vue/Vuex/index.html","3e917a4baebe2888279e85cec513b601"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","01037582a3907fcb5e1af2a5dead9c31"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","a02c675d73760b142f115e4b62771101"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","f1bf3fc3a8a67f7084a374142c53f1db"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","394ed896e343942f3002521752418802"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","407169c2aff2cef821bb63ff348b6186"],["/2022/09/28/DevOps/Linux/Linux/index.html","4ecd11683c4a1b3115a5b7cbbcd9dfcb"],["/2022/10/02/中间件/Redis/redis基础/index.html","403adef5f3f4620d889256e768f0b6aa"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","4c914a04480e5fc34dfcb874d1fa20a7"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","4ee19917cb2884f066e5884da7c9d3e6"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","7ee71785471171d074107976d5b10f24"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","4658ded71c4c518ce95c58298cd4b652"],["/2022/10/17/中间件/Redis/Redis集群/index.html","b0ec17303fe6b3d8f260fc6ede845b32"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","6a1e451f0b16a8dcd63bff7fbbcc6c47"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","7d5e4496628953a08b3275d554287528"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","99eff9fd8063f7f0e098cb12c1eb0501"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","45925eacf9b336e96ed5a0137378ca5f"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","99d24e168ea303c83d999d0f38fb6011"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","9fdbec8210127d886a79e81547d4acbf"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","e27d70bcd96543eba6a3ba5b99c3f8aa"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","503ee351e3bb0084b4bdfce24dc24eb3"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","31fcc593a365446c818736e445304963"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","1bf497f662314d3428f44bb3af4620d9"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","b06cc1dc299bf0aefb71f1f757f3941f"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","7636b9b2e670d44d088b06e3d32486b2"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","9abdc3f9461de6dbf65e96039ea61c07"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","94660acd4fb8f816ff210726ba059def"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","e611d8e40234fe974a6c335818d34c48"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","79b9f1650f5c7404358ebe984dfb256e"],["/2023/03/10/DevOps/CICD/CICD/index.html","d09f8c8b994ecd6bb1438f65862f6c5b"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","505d2a0d98e0003273094963978a71f7"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","417ee4346c5082d30c7de9b03904ba92"],["/2023/03/13/Java/NIO/NIO/index.html","79b839c9d0c1220b47be08b73a21ca2d"],["/2023/03/14/中间件/Netty/Netty/index.html","cb6a0205fd71c16c23c45bbf2ac28f09"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","2d107aa32b10a65fea926364ba127429"],["/2023/03/17/系统设计/分布式系统认证/index.html","b63ce88cf490a6f71cbbd977da414e86"],["/2023/03/19/Java/JVM/JVM概述/index.html","e617d1935adc0745fa1b4e245ec1065c"],["/2023/03/23/Java/JVM/类的加载过程/index.html","413d309287d635640e3ab64e74688885"],["/2023/03/28/Java/JVM/对象的实例化/index.html","dff24ce443c55f73c370be1768bb6aa3"],["/2023/04/01/Java/JVM/运行时数据区/index.html","10813c41870606b4d430be923ea5fbb1"],["/2023/04/04/Java/JVM/执行引擎/index.html","fad96cb58323c527955c43d3c8817a72"],["/2023/04/06/Java/JVM/对象引用/index.html","722ff668645d037852c9f2bc9fba2f35"],["/2023/04/09/Java/JVM/垃圾回收/index.html","e8d795dfc4addfe488e91f945844208a"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","721ed360c80fef894ce74d8737595c72"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","e56c4643e791f9891fd8dd253b77ecb8"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","ae7e587ff1efd6f5de5376b6ffc93c81"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","d6819fab86a77778b7806f98401cf047"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","a0679dd10d461bc38e85ad89944591af"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","8ff9abc9869b8aa506d45a050ad5cc01"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","b249cf12e08de7e13f9d6efeebe0900b"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","339f79ddf255ce874f5d44eb2f9dc0ea"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","6ac8c2fcf15ab8d6666a83aba831aed7"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","dc68825cbe9fe8b4a82b3d4d606bd492"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","e8cfe7c689c2e8eeb6ec8ec697c1cfc9"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","08cb299f2363b9626e4235258cab641f"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","cbfd7a4b646fa547d88a64547c38c048"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","bd5702ca70b293a81c20c9ff8044b4e4"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","f599ed46bee942b4225fc751dc46f4f4"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","bd8c9291ce6bc91524c3aebba28fe111"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","47892b82071bdfd4b8db876ac037fbb3"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","f258068f8b02677b4857f7687282ef27"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","006606d74a9de232f16d351d3bc09c07"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","78d22faa5db205b0724393e2e3cbea87"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","e3781fdecbc9d89d8b6a837b3a8523df"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","3304915a7bfa94bb4684dfa270eb71f6"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","d838ad2d55bc68fde54f004724217a2b"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","5ed07f62b7371381d2d0bb01d43743fe"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","5a716f27b529da8394d4eb50fee1caeb"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","ef40e1ca54236dad705dec663067ed98"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","fcc359b9cf0dc647713c8af0f1ffcc7d"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","8fa5ba0af79e2bf61849a24bf0f71bd1"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","5d18266eb569a781fe5478763e7e0dd1"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","7f1e81732424d625e96a756b6878bac3"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","92aeb235de81036e88ef78ecb376d837"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","c3c8d1bbc532fbda03b873d81ad2c06c"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","f62408d8268cbd379b38391099d835cf"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","0003d39b931188a796ba5442147aa84a"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","fb814c76170744fff28d8d1cee54f659"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","c6c829dc62138f4371982a8dfcb8d38e"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","16bb8f5749215b4c0f1dafe0b69bf79c"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","9ec1eee7664822b490fe60d23fa3d60b"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","56999076c4dde2393b953ce17596e388"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","e0cc7f904c007b477e07fe3146fcddba"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","ada7f3c7860646e6cbe767ce75d2852e"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","36bfe87d4eadd605a021c6fe79e4a8a4"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","5168ba5e28189b15ba0ee53b6e684e5b"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","444e04598f42659d9c41dd49bde0daa8"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","befe0ce220e0f7217a2800b77705f955"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","fb988bba49c0b3598e178ad6be1c3fff"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","44c1d12d465af2b4ab1f911123a934e6"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","4b40e71e613d06b8558b4a53c9a02ec0"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","e0cef3a8d14cd2124fb3a391ed5878fd"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","cb6eb9d21e36c8741517010b9f31fdf8"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","8371f5721a9419c9b79c1d66b7966086"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","c2746514fbb798fba63eefc9a092e72e"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","a3e23c199a453c11d85cd0d48bb65b31"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","b3046c39dddb2be0e5d305cc6f7e49ee"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","4eaa37a87afcc0d6de975470f361d3b0"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","e5ecfbd0a9c65724978fea2b1ff5bc75"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","8fc264f2b6a85ab915971e8512144d09"],["/2023/09/04/中间件/Redis/Redis事务/index.html","bfc46df2ead1881d4a9e18ac32b72fd1"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","94688ae953f602a07d65bf679d200a74"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","e73a2a69ed10f41236b02debf1868ac8"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","02bf07d3d09c4a21fb7aefa6a0ddb9a8"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","ae21428b46220bf93d3b442354a8f3d8"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","a55393a6c7bb5d3d179754791656a286"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","1787b2fd1d30d90c0b0e616e6d13baf5"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","a95e4bbf61a35a3232f3ec9bb864c0b7"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","2b9fd48720838d6871723cf77655cf57"],["/2023/09/22/Java/NIO/零拷贝/index.html","3ff7a75fa84cf74f638d07cda4206da7"],["/2023/09/24/系统设计/JWT认证/index.html","05a967adb4bfb212835edb23caebebff"],["/2023/09/26/Java/NIO/Reactor模式/index.html","222fe12cf566bb652522c5836b306420"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","cf2d0b3bca691787c35e3cb42d08f8fc"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","5107bde433c4fb28a14db1efde0b2e8b"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","357e6f90edb7881cb43c2e44d7e5690a"],["/2023/10/09/Java/并发编程/共享问题/index.html","94b12cf1cd88cf96b002c941a858b972"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","853434ee7ad96f7005f726cd965d245a"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","67fd8012e771624813cad4c15145225e"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","06c73f75a03a7e70f0ca30b80b2aabbb"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","93dda68e7047c78260d75c99cfb6910d"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","4ce365a21da6925c1b9e5a310e3ae49e"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","3d8b10b2ab1c48d360ff7f22dd074398"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","bf2314d71643d9cc39070ee661f71987"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","866cf5b453a04ce4b569a3cdbe4805bf"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","062dfa41f92561ee8d039d8ad839a8ca"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","b4dc8ef86b7e38f0fad7ad62c4f1de3f"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","abddb10a87fcad08ad452e6af8ea0b65"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","2279e3be7d49aa98452d6dca5128b67a"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","6b1deed6bb87725fbdfed705236bb9bd"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","dd94c62424c69e5e7e4222117d80a8b0"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","b7fd0324c8eefb1af748284ec4748c7d"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","e3d7f022b5eea9465e519a0a514fbda3"],["/2023/12/05/系统设计/开源协议/index.html","8b9dcb483dedd20944855ee4a70724e4"],["/2023/12/09/MockMvc/index.html","6613e07426e204aabc3453e455759db7"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","91988e85f5d44293378e75e600808167"],["/2023/12/19/MySQL读写分离/index.html","60564dce22b81c07df5ed3b43d323c8f"],["/2023/12/22/MySQL分库分表/index.html","c2a7018a87594d1214a337da756dcb22"],["/404.html","c0c2ace8e368f6aa5761b2120b88d715"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","bf9068edbe9eb87adabfdf8ec52781f2"],["/archives/2021/02/index.html","f329a698eb6d47f2668829a8caa30322"],["/archives/2021/03/index.html","396ba78581598e72c659d4a6bda45d5c"],["/archives/2021/03/page/2/index.html","f1e7a38a363bb26f209c3e4401951c5c"],["/archives/2021/03/page/3/index.html","200216eb1b7a119dde015d671278bac8"],["/archives/2021/04/index.html","af2d99e62e097f622a5a0c482f9bf7e9"],["/archives/2021/04/page/2/index.html","5e6c0d3095e4791979b94bf98835f6b5"],["/archives/2021/05/index.html","c2936e0a974a25f0301e42a007d392c1"],["/archives/2021/index.html","b1c436e8e274209889beb8aac772b6b3"],["/archives/2021/page/2/index.html","6bb7c844c4b7b83adf265a2716901088"],["/archives/2021/page/3/index.html","f3fc50a36e0895791c8902b777c11887"],["/archives/2021/page/4/index.html","1d6c895e962f8b7e2801cee85b7d6312"],["/archives/2021/page/5/index.html","c3b0cc0e72d8cd100409f43f78b24a23"],["/archives/2021/page/6/index.html","6db00b3ada885e46eae89892ae22de53"],["/archives/2021/page/7/index.html","c536f6a17f5818f36c83a17012034ce0"],["/archives/2022/01/index.html","46fcd79f3f81591ca4521de044e78e67"],["/archives/2022/04/index.html","886d2bd2660163f57be56e1ec6803afb"],["/archives/2022/08/index.html","2a3b86dc5a4bb978057849c8db023b9a"],["/archives/2022/09/index.html","75f593c76259e874bfd873681a0d1689"],["/archives/2022/09/page/2/index.html","ed818d2d518f1acc8a0bb3fe169f7d92"],["/archives/2022/10/index.html","19f7da882ab1c261f05e5c1f060cf69c"],["/archives/2022/11/index.html","9ba4717bed0bc7868edf50efa0c159c1"],["/archives/2022/12/index.html","d3875b37f6808c6316190b4c96d874c4"],["/archives/2022/index.html","7e0a41db345bf7a6b726a7acf643dfdd"],["/archives/2022/page/2/index.html","22dbca439eb02c2273127495af5f94fd"],["/archives/2022/page/3/index.html","3d535441839df96bfd77b068b6a369ce"],["/archives/2022/page/4/index.html","d026d3303105fe29f56fd9b426105efa"],["/archives/2022/page/5/index.html","d77b994effa018cb2a36631eac60faa2"],["/archives/2023/01/index.html","95e9b6bca3fca7783060f64d82970355"],["/archives/2023/02/index.html","8aaafc393d7075b92b4ea166ea74ce9d"],["/archives/2023/03/index.html","436d9ca15d07635ba76c5b170309d641"],["/archives/2023/04/index.html","76c47d57bfc75ef071497f31531ed83e"],["/archives/2023/04/page/2/index.html","fd9b75c08eb6614e1ea9e89877204d63"],["/archives/2023/05/index.html","0ffe5eb9bd509dc1134bf334d2df70d1"],["/archives/2023/06/index.html","0fb5d6f785aa28820a7200deb153e699"],["/archives/2023/06/page/2/index.html","4185344fa304157f846a2b371d7e67c0"],["/archives/2023/07/index.html","6b9d08839793d6a96709286ae031f1d5"],["/archives/2023/07/page/2/index.html","15f77955017ed4e273fb5ad9d1cb1aae"],["/archives/2023/08/index.html","b33cb9eba35868a22c6abb36487af7b8"],["/archives/2023/08/page/2/index.html","e3377ac1119f1e8ab01485503078318f"],["/archives/2023/09/index.html","a7c00f7ab2f9d605583bf83452b2b124"],["/archives/2023/09/page/2/index.html","d29e11481ad0cd3db30dc18269aa71e3"],["/archives/2023/10/index.html","059ed926de2b996e6fdce2c86387f6c6"],["/archives/2023/11/index.html","02dc52dd3ef83f4e7906ceb7dc822e2e"],["/archives/2023/12/index.html","8850ea8ec92b32454bf149f7940a7ef4"],["/archives/2023/index.html","0d6766b7fddc382196d0ecb74ded2119"],["/archives/2023/page/10/index.html","b6f9bc21f4e31d52ecdd0bc832005c7c"],["/archives/2023/page/11/index.html","b6724af97e977cd39fd675b0f3ef82f4"],["/archives/2023/page/12/index.html","f719c524cbf571f291ee5c44fce62781"],["/archives/2023/page/2/index.html","f1c7a3ff1054d0bab8a2b84753b9c1ff"],["/archives/2023/page/3/index.html","4fbd233ae342fcfbf609893dc3d435b2"],["/archives/2023/page/4/index.html","7111fb03e63071da6c31ec122c737da6"],["/archives/2023/page/5/index.html","d89f4caa3c8043c1b2723616e1df853b"],["/archives/2023/page/6/index.html","c742fa3d615bd5e75df4ac75cd80f1d0"],["/archives/2023/page/7/index.html","97beb9f3413eda771f140281c02bd404"],["/archives/2023/page/8/index.html","b3d83ff70f0edf07cd0a1904b9b63ed3"],["/archives/2023/page/9/index.html","2a6f1b6c3c53134a25812bf5c72523f8"],["/archives/index.html","293e0149d898ddf98e369d9ce71e92f4"],["/archives/page/10/index.html","e09788912548eadd84598f00a355c039"],["/archives/page/11/index.html","d3042be5b3978c322576519d6c60e80f"],["/archives/page/12/index.html","d35a98587472e11dd73ca9dd34667241"],["/archives/page/13/index.html","bf22fc63d2c342353659d405fbcd3dd1"],["/archives/page/14/index.html","20d3e3daa0d8f438b8581c2a4f0b14aa"],["/archives/page/15/index.html","5834ed73027ce9b195adfd5bf9070580"],["/archives/page/16/index.html","980a9acffaf36124481831270fc297d2"],["/archives/page/17/index.html","4b84233dc5cdfa843f11973265df94c2"],["/archives/page/18/index.html","c956057676f9d4f414c84ff311a5d415"],["/archives/page/19/index.html","f374c74e3abb89c779d7b9cbea671483"],["/archives/page/2/index.html","beedd6599c282842046568bf095f72b5"],["/archives/page/20/index.html","861e7a3120161661fcab427954fd8454"],["/archives/page/21/index.html","05592437fd2a87338e81e31cd84b5bbe"],["/archives/page/22/index.html","651226009828c011eaa21a49ab4dbad3"],["/archives/page/3/index.html","5863eff62dbcbe0f66b60e7e6040b141"],["/archives/page/4/index.html","42886b9398c136b257b82dd679674e2c"],["/archives/page/5/index.html","758d5ec7ccc76ba3820e3fbc5a40b7c4"],["/archives/page/6/index.html","cb119b3f9a8cc1409e34e8741ee4476c"],["/archives/page/7/index.html","7becfee28aa57ba519098f49f11b70f6"],["/archives/page/8/index.html","a1259ceb8f80c2a287b331ef7f7bc0d5"],["/archives/page/9/index.html","937fa03bcb22b213c24f5726f87dd468"],["/categories/Devops/CICD/index.html","59f2bd7d8da2a58bd55c368e63dc1004"],["/categories/Devops/Linux/index.html","4381fe7e38fe16651ffa8283623d73dc"],["/categories/Devops/index.html","265bdc7d2546f1969cd378c62fcac973"],["/categories/Java/JVM/index.html","b924aefa4ad7e33def4e1e428f6202dc"],["/categories/Java/Java基础/index.html","74fbc2cf27ec432c123c438e6da2e722"],["/categories/Java/NIO/index.html","79ec3b8f0df46bd1abecdcd52ca4eb22"],["/categories/Java/NIO/原生NIO/index.html","d254951e2e60c50a58f32355dc086dfe"],["/categories/Java/NIO/文件操作工具类/index.html","07d9a69186ff671dda3f02a5631d4ec7"],["/categories/Java/index.html","2e04d497cf860fb36686ab65321e5d18"],["/categories/Java/page/2/index.html","2aa007ecf507e195c3a01bfa736558e8"],["/categories/Java/并发编程/index.html","3535b2a311720dbfe13bbf15c60fb8dc"],["/categories/Spring全家桶/Spring-Security/index.html","4c2e70ecb9d56b687b2a713ef4af7664"],["/categories/Spring全家桶/Spring/index.html","2eba6011a63e461a1ed915ec0a53ee9a"],["/categories/Spring全家桶/SpringBoot/index.html","30695682b0c3b78c938d566b488af4d2"],["/categories/Spring全家桶/SpringCloud/index.html","9a638ca727188619277afe27985c5fd2"],["/categories/Spring全家桶/SpringMVC/index.html","68c9714a6aeee52eaa4c1f688ad64494"],["/categories/Spring全家桶/index.html","f785142c452838164dd7e30f579385ac"],["/categories/Spring全家桶/page/2/index.html","26cf495942df01190daeb33b973b22df"],["/categories/index.html","c15cfa83687510a301c4488a2f345f78"],["/categories/中间件/ElasticSearch/index.html","3b1513ae928af0f5d709fbc6e9d75f43"],["/categories/中间件/Netty/index.html","d01df60ab2e4a9dd1835924b7224cc0f"],["/categories/中间件/Redis/index.html","260f3e6a93cf514174ea7d51e9bfc903"],["/categories/中间件/Redis/page/2/index.html","d3e143282f88473c5d46097d725ec768"],["/categories/中间件/Redis/page/3/index.html","914e110b1e067b750181c3f30cfeb262"],["/categories/中间件/index.html","92041ea991a17ce7322d15eda8252a68"],["/categories/中间件/page/2/index.html","d863f91b28b02ddf963e368594e8d002"],["/categories/中间件/page/3/index.html","92204fa3c880672fd81fe0dfe6a83b1d"],["/categories/中间件/page/4/index.html","6295f37bbe51ba3b2dfbe5f5c43a9501"],["/categories/中间件/消息队列/RabbitMQ/index.html","079ec983789c3a28710c807b781a42b9"],["/categories/中间件/消息队列/index.html","a706d474f435263b3af8cda2332d2082"],["/categories/前端/Mock/index.html","208d72937779eae5aa2d83cb90b713f5"],["/categories/前端/Promise/index.html","bb073325d4d9575dce810d5022784aa6"],["/categories/前端/Vue/index.html","e85d25431ec5bca1d2ca436e7cf1d27c"],["/categories/前端/index.html","e17b32444f4558788e694cfd5fc2f9a8"],["/categories/前端/jQuery/index.html","7d744c33916a9862028c0c082d7f1e4f"],["/categories/前端/page/2/index.html","a2dd070dfe0783ca1a263ab295286148"],["/categories/前端/原生基础/index.html","180c27b08aeec5550f84df3a03a9b0a7"],["/categories/前端/异步通信/index.html","98eea9bc181994c37e1ae54963e2deb6"],["/categories/工具使用/Git/index.html","bac5e1f799433eab2a94634b06ccad07"],["/categories/工具使用/index.html","bd77201b17c12d2fcf0144922a6b3d41"],["/categories/工具使用/markdown/index.html","7541eef02b8e5c267e561e489b36930f"],["/categories/工具的使用/Docker/index.html","d0f46e27185067ab9f5a891a68ff6828"],["/categories/工具的使用/Nginx/index.html","605da84a4283b6e259a3e087d69d6b9a"],["/categories/工具的使用/Swagger/index.html","a95460a01caef4306b3dc82dc19b70dc"],["/categories/工具的使用/index.html","f2d9b0e42168e31c14694009f998195c"],["/categories/工具的使用/博客搭建/index.html","d137999466528ec9466500d636132100"],["/categories/数据库/MongoDB/index.html","08cfe87a0c474eb66463c92262d2eb5f"],["/categories/数据库/MySQL/index.html","408fea9305ca0534aa1c5f407c49ceab"],["/categories/数据库/MySQL/page/2/index.html","bda72c393c51f1fa630c97f54781d907"],["/categories/数据库/MySQL/page/3/index.html","af77514a706c77e93fc720c923022156"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","5075e786e614b45accaf646dae753002"],["/categories/数据库/ORM持久层框架/index.html","471d11d38a4bf7e37179f92a6d5e949a"],["/categories/数据库/index.html","c6e28dae29c54909d6d3eccc29b8860d"],["/categories/数据库/page/2/index.html","7275fd85cc465e0a5757c42d62799a27"],["/categories/数据库/page/3/index.html","12e5943d663c638a60530052df2016fd"],["/categories/系统设计/DDD领域模型/index.html","00d1ce90e30f85f41256abe7114fea6a"],["/categories/系统设计/index.html","6032b627fc947a4fb2ddba7bdf4f7f5d"],["/categories/系统设计/page/2/index.html","ad7b27afaca803322f33c3303e9b3e9a"],["/categories/系统设计/page/3/index.html","d7dbb41b778358d2c0267b2512d8f92b"],["/categories/系统设计/page/4/index.html","a21f7d43b4dcd24ac03cad2c13e27627"],["/categories/系统设计/分布式权限认证/index.html","d36139bcd317625a7b8a37f77fcc214e"],["/categories/系统设计/分布式系统/index.html","2fb41a7bffacbbf6abb6ecd6b09f60e7"],["/categories/系统设计/分布式系统/page/2/index.html","9c614dd0139e41e103b06d41bd9e392c"],["/categories/系统设计/数据库优化/index.html","b13a523183d397179de3d3c7926e7a2a"],["/categories/系统设计/设计模式/index.html","be2d9e059e4658851ecd5ac4e788e7d0"],["/categories/系统设计/设计模式/page/2/index.html","ab0536bc4dbfb7d0ec4121008a902ed7"],["/categories/计算机基础/index.html","bf5706150cf2c90e7947ec096d981fc5"],["/categories/计算机基础/page/2/index.html","71155f2fe267ef4dc7c65b4c23ea333e"],["/categories/计算机基础/page/3/index.html","0fbe921ea5c62341ab53e7623d235e61"],["/categories/计算机基础/page/4/index.html","74aa210db7b6fbc5cf92dcb33424fab5"],["/categories/计算机基础/page/5/index.html","f8fe86ed114d45381a06b4bbbca44340"],["/categories/计算机基础/page/6/index.html","b408f4acf649ca27cfbc000c4fb1ee66"],["/categories/计算机基础/操作系统/index.html","f754154d505716040b509a6e42c0ade0"],["/categories/计算机基础/数据结构与算法/index.html","5d5febe11c8ba8125321c48501c20dc1"],["/categories/计算机基础/数据结构与算法/page/2/index.html","cb7bc3a94d0fef49c81ab2f5b9d7bee8"],["/categories/计算机基础/数据结构与算法/page/3/index.html","dd188aac067ff8cb696a8c89bd11f217"],["/categories/计算机基础/数据结构与算法/page/4/index.html","00193e64ad0f5f3c09a5df6c3550a75f"],["/categories/计算机基础/数据结构与算法/page/5/index.html","900f69111270095d60572cb2d5f845d8"],["/categories/计算机基础/计算机网络/index.html","47ba118734a7b52d34cd08874cf0a192"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","84c2d0bbeca0667f15833b05bd6b13d8"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","f1fbd5ecfab6dee8d9d82b0bfe86ee90"],["/messageboard/index.html","64730fd107c508612c721690149e58d1"],["/page/10/index.html","a2005f9c32ac95629e609076955999a5"],["/page/11/index.html","bfecf5ecaba5737c9069a845b9bc7c2d"],["/page/12/index.html","835959359d1f73666de68a185ad97d71"],["/page/13/index.html","76ea9892d2fa95b091a1bbb22d150a4d"],["/page/14/index.html","b9e99aa5e6e9c3077319a885764600d5"],["/page/15/index.html","ddebf9c09c526aa8a3f5d7dbca78b3d1"],["/page/16/index.html","477efffe37a718071f5d8bb43411f611"],["/page/17/index.html","e6de2c8eb8aebddd54d10a6ce9396835"],["/page/18/index.html","db10617cbe030fd7dcf4d7324abec981"],["/page/19/index.html","7fa80b8a12645aa25444b26577ad8cc8"],["/page/2/index.html","2427761aeb2311c574eee0b6755254eb"],["/page/20/index.html","5ef49d5f4e3df09b63d22d94d02d1d37"],["/page/21/index.html","4458e8b7aa30f87d6e9ea522346f3a7e"],["/page/22/index.html","94dbcf11eed86f80479031c4383da60f"],["/page/3/index.html","f0269fa7045a18256d788eabcf87ecef"],["/page/4/index.html","8d997a7d5a82bc8182af00bbe4ca9e89"],["/page/5/index.html","b124ab21c8b224cfad2f4e63528a34d0"],["/page/6/index.html","58606af555f147f7563e5dc73eacf2be"],["/page/7/index.html","aad29b9b30a7f6b4a7088f2ab108148d"],["/page/8/index.html","f7266be0928766238bddc6b002dc408d"],["/page/9/index.html","3b12f740219e1d6cb1721edfccd1a814"],["/sw-register.js","3126f557f054f89f883be2c4dd138c47"],["/tags/Ajax/index.html","b35e80ccb4d8c8138cd86437aa78beb1"],["/tags/Axios/index.html","9ddb29b8de93bbb86ccff84a16679dbf"],["/tags/BASE理论/index.html","3a862abda099c37972c47ef60654ab44"],["/tags/CAP定理/index.html","d4f0b5845e9392a4440f14f6f1b890bc"],["/tags/CICD/index.html","5e9c7eed4c9974255ddda321d3ca0af4"],["/tags/DDD领域模型/index.html","7efd4bbb700a41f7d24eb296df9a0a69"],["/tags/Docker/index.html","43b32f91799e0ebb6ca8dbbd3d05bb2a"],["/tags/ELK/index.html","b82cde397b015c37270412ea5d6d092b"],["/tags/ElasticSearch/index.html","ce871e80ee762cbb62d69436fc792745"],["/tags/Git/index.html","b189de7457c178c7cd4b4d3beeef97bf"],["/tags/H5/index.html","bb1611c1655aecf40e182b18353bdbad"],["/tags/JVM/index.html","ab0009cd6df6ffaf3d54253f5e3978ff"],["/tags/JVM内存模型/index.html","75e69476a88af5ca0c0815aa6e3ccc7d"],["/tags/JVM执行引擎/index.html","aa2be7f60c6ef903d6dd4f524a9c4b3e"],["/tags/JavaScript/index.html","2edb05a2ca9f3b472a059fb72759ee3e"],["/tags/Java内存模型/index.html","10adea05ffa880d57903ca863ddfc301"],["/tags/Java进程线程/index.html","6c1c69be15ef52bc268a6ff885267bff"],["/tags/Kibana/index.html","dcd9efd53bd0c909564dba80a413c141"],["/tags/LeetCode/index.html","48c377e73478054b6f5d932f505d5282"],["/tags/LeetCode/page/2/index.html","25437675ab932900b8e150afd04d9c60"],["/tags/LeetCode/page/3/index.html","6ecda0a4ed4ffba7a9120e77fb645b73"],["/tags/Linux/index.html","846586795be299afdbe446a4d573e6c9"],["/tags/Logstash/index.html","4825fa6375e1e4c34cac7983f7c80b29"],["/tags/Mock/index.html","3a9e94bf0bd619bd84ff8bd9243dedab"],["/tags/MockMvc/index.html","64c7f46b4e4b508d242416d213508c48"],["/tags/MongoDB/index.html","8e6a896af2cfc86da9d7a7e16665dadb"],["/tags/MySQL-事务/index.html","5735ee04f2d4840ef701b827a1535306"],["/tags/MySQL-数据类型/index.html","14e99c815906510d07e2e342ae26fa9a"],["/tags/MySQL-日志/index.html","bf3a4d1692aaff335de0a63848146844"],["/tags/MySQL-索引/index.html","140a45bb057a35974758805a300f0daa"],["/tags/MySQL-锁/index.html","37bd4859c600f383aa7b7aecb0d160e5"],["/tags/MySQL/index.html","b69866e36b0a76581d046eb054bd3bc8"],["/tags/MySQL/page/2/index.html","9f369f374aea46dbb9a4cdd3ca262362"],["/tags/MySQL分库分表/index.html","74959927dfd911d72e6e94aaba98c04f"],["/tags/MySQL读写分离/index.html","36a4645023b80871175ec50a908338ca"],["/tags/Mybatis/index.html","1a28064d2fa2638448f5d919dc4ed694"],["/tags/MybatisPlus/index.html","a54dc3f2d48bc639c68c7c1356e4f97a"],["/tags/NIO/index.html","f9ffd0469ff6169cc06f178b8781273a"],["/tags/Netty/index.html","6c43e4f9c1044f881775915f5b84be5b"],["/tags/Nginx/index.html","8a255a9c2687e2cf1768768b2858e42c"],["/tags/Promise/index.html","b7b2a408e8506be692f30b7a6c3c5f03"],["/tags/RabbitMQ/index.html","2ab5a9300323d65392abe47a63b8bb40"],["/tags/Redis/index.html","a7cd9d6f3858ee3a4f1c2beda402e2d0"],["/tags/Redis/page/2/index.html","5aaa0480ab91a59a36ab401477ebfd7f"],["/tags/Redis/page/3/index.html","b7fa37c15d09007bd4ae8b0a870c6aba"],["/tags/SSM/index.html","ee47c590ef8ded2f6990a0ec4bf9d500"],["/tags/Spring-Security/index.html","8117bdfc9018348d45539bb8a698fa70"],["/tags/Spring/index.html","a785ce11ffecab3d7499b667def8b7f3"],["/tags/SpringBoot/index.html","46bf12c983fd939cd0df820252d61320"],["/tags/SpringCloud/index.html","ecd7fc63fbae649cc1b1eaa8e45bf79d"],["/tags/SpringMVC/index.html","438dbb3480aa41dcca0c58479fb307ec"],["/tags/Swagger/index.html","b4370fee1027d9ab1e0204c94419f160"],["/tags/hexo/index.html","2ac964c9590cfac111b4cb11a9b13903"],["/tags/index.html","36a609247294c82360e39c92071bcf4b"],["/tags/jQuery/index.html","c91002aac8b0acb3c0a0d289fc61b430"],["/tags/java/index.html","a15d708a5fcef56e9043c14c86a34970"],["/tags/markdown/index.html","b8bec0687ff490cc7a307ed3de081212"],["/tags/noSQL/index.html","00573589808f3e0f4cda7ea2d84d9d56"],["/tags/typora/index.html","305e64988f2530aebfcc10956f3231b9"],["/tags/vue/index.html","d3bb3318012b14264acc06a0d6529ce8"],["/tags/享元模式/index.html","7583314d87f01d3146c7f9bae3edab39"],["/tags/代理模式/index.html","2de3a51f8bb08fa0b47cf5a6c69f1d9c"],["/tags/内存管理/index.html","166985ff21b3ea47ea01621d334398be"],["/tags/分布式/index.html","992c434a4726dd51036411bef05d4623"],["/tags/分布式一致性算法/index.html","d6f031aaae0f7c88aa5a87fae365a86d"],["/tags/分布式系统/index.html","2e5f9a4ea5d5c8b128946ef9e4165816"],["/tags/分布式系统/page/2/index.html","c4d38ef533597d1595e441032855c840"],["/tags/前端/index.html","07f7995801eab56d94e97d81348905c0"],["/tags/前端/page/2/index.html","cea133c3be0d1159361079a56ca2f860"],["/tags/动态通知/index.html","48ca846ff6143899c1db37e88c269a4f"],["/tags/博客/index.html","c4ebff39a2eb7803f963f58cf546dc83"],["/tags/后端/index.html","5edf6e993919d0b9437ad4ad994264d6"],["/tags/外观模式/index.html","b751cfc05e4c5cf221ce13a74c9c4676"],["/tags/多级缓存架构/index.html","9ae9b47fb15d8a3287e7a9a8b093f8fc"],["/tags/多线程设计模式/index.html","fda7441cf166361ffdd26322f15edae7"],["/tags/容器技术/index.html","bc8777aa80ebec015130219b5890ef1a"],["/tags/工厂方法/index.html","bddef85ec702775a6e57824381d5230b"],["/tags/开源协议/index.html","2c0f8621fd9f231af5aeb254ba78157b"],["/tags/异构同步/index.html","60832561ef8626cf74893a736558dbbe"],["/tags/微服务/index.html","6f2ef18ff7e87f2dc06f82da682704ea"],["/tags/抽象工厂/index.html","1bf5d6901e9c8dedb11ab01ce3a0fef0"],["/tags/持续集成持续部署/index.html","3a4c44b2dc7c2852584a6b94c79b0131"],["/tags/接口幂等性/index.html","e1fa3eddfd47fab03a9ce6f37ad6165f"],["/tags/搜索引擎/index.html","a477de96f4fb195d7d7378d1f836025c"],["/tags/操作系统/index.html","d8b400979783b2f90c6d3e19b26b68ee"],["/tags/数据库/index.html","b97c2a4821460c9d4ecb6534a4d5dbd6"],["/tags/数据库/page/2/index.html","403dedcf78c6fcd459693fe87afe4f4b"],["/tags/数据库/page/3/index.html","d1d3c819a31ef54cd37530752a6afe1c"],["/tags/数据结构与算法/index.html","bab3bf916210ac740cc094697a79537b"],["/tags/数据结构与算法/page/2/index.html","db1d4cd48439db43c5c84b071d30b9dd"],["/tags/文件操作/index.html","c7606cd0275ab6830e39df962335af66"],["/tags/日志/index.html","52bf2acc6750328238c6975a135f9202"],["/tags/服务器/index.html","7ebea50457d647c0d76ec924b5ebfc2c"],["/tags/权限认证/index.html","b4f5afb2c8b4d2e2568bc66e9f85b10c"],["/tags/架构分层/index.html","e53231b217490b4b099fb2560d694cf6"],["/tags/桥接模式/index.html","facc0301a65dc6a84904f005e43f96a2"],["/tags/模板方法模式/index.html","b393d45765f8698546eb71d8acc08e20"],["/tags/死锁/index.html","4d88094c8ff6105103ce59e4d65ec629"],["/tags/池化技术/index.html","64b98f9a30a3b400ccd4337c4cc8cd3d"],["/tags/消息队列/index.html","7fa1c1fab6f3d87d5659956e06fceaea"],["/tags/版本控制/index.html","1e427be5eb605e4edfca329b6a8a1653"],["/tags/策略模式/index.html","cde3995d0655db8e70c594faf7bb24d6"],["/tags/简单工厂/index.html","f0acf34bd5591e00060b5271203864ba"],["/tags/算法/index.html","75931bdb44d550d79b75a68d5c61c8bd"],["/tags/线程活跃性问题/index.html","6a967c00f734a3e8fb2b2b6af4a060fa"],["/tags/组件化/index.html","bc1cbf8bb42d9dfa94b4e0b62fe68d98"],["/tags/经典限流算法/index.html","b92f58948568ed5c45e6ce8f54c3f2a8"],["/tags/缓存/index.html","25b050f437b46c2d28e328838393bbf9"],["/tags/缓存/page/2/index.html","c33893b77d0783a0d6418dddec64d1a2"],["/tags/缓存/page/3/index.html","2e9b65bf812c6e7d7ef37c8bbec2cdca"],["/tags/观察者模式/index.html","6a353c97af9d55556702670b99c365f8"],["/tags/计算机网络/index.html","cc8e2892df06b13318f69be265f1f71e"],["/tags/设计模式/index.html","90bb055cd7f860e69b572879bd8a5ccd"],["/tags/设计模式/page/2/index.html","19afdbe5039c9a0a96acc0fb894a9a7d"],["/tags/设计目标/index.html","2b98fa75fb6aa98e8e51dd8ebe38050c"],["/tags/资源共享问题/index.html","03641320149743103cc4387f61377957"],["/tags/进程管理/index.html","ed078d2166416b2c1de6a7bb25adcab1"],["/tags/适配器模式/index.html","867d310fe5de5312e29d849fc538c25d"],["/tags/通用设计方法/index.html","dbd61fc7130c38fe66e0748dffbea223"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
