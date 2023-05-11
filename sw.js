/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","41b6c3cb33c9d88916f25167e6098f53"],["/2021/02/22/工具的使用/博客的搭建/index.html","5f981ba420551067f30c5320fca8f874"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","6332e465784f69d279168739c0d3a71b"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","7f6a0a0590aa5def0e6132a3006aac45"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","327b26081b47a3cef2733d7f0f8dee5d"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","e87235bd844d1291a1734f09031a89cf"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","984990dfca19665b683405ba4ec83887"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","ca45ec277dce939c8748a53190a6e904"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","55c4e2ed8cf5a459fc10b7155ef30797"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","100e20e7589ed876b06bd419578fbf47"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","6c4d35b01b55beef1eebe06b4e492ecc"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","f4d025e03f69276c7672bf53f9f8e374"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","8e249b10c725a024a4e2a644429ad3b7"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","ed7e6f878fe3f2a97e87bc67ef3605dc"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","02007047c970b7de5009d9bf1506da73"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","306592ec2efe663e60c39f9bf78a4f30"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","0b6aebeba34f1c7977cc3082c893c685"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","f3ed1abbbee75022ef266584c17ff533"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","b4363a009d32f7974b10fc0295757a7d"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","cb388f6fddcb1a24eb61a7516d0427e3"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","d99d8776d9830e004a83f1deec1d0b6a"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","7e6b10113e6aef3299741667f34c3eba"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","ad26c27764ca935a16b012fd6fa3a7a8"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","cc608c095c08f41624adfbef1d24e815"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","4d5dd26ce91865ad86f82271d9a1e810"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","4b97a0193f35582d8dfb5c9dede5d090"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","f5e1d6211c944aadb3751768af083401"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","4066210d7030d26243f8cad7a6d426c8"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","5100a6f37ff009baa29eb120cb210194"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","41df87b26e35fd8cb55c4076702f2962"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","192089d739d454ddde9d97e337108511"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","42fdabc09d21cb4a32a44ff31a28039d"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","d941cef67419e95304e67a0b499d5232"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","1f22eac27f315c59b9f2ddaf227f4b44"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","960076760dceeab2e31d2a189c43ee21"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","af4571631552969d0d06bb5c39a1d91c"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","7874dbd79235d3cf70a758424321cb92"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","42cb3f7d25de40f8215476f28a3989fe"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","dddcd6736dc8807d185f9f9c13c9999c"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","18bc269f845d8402fa1d62f2b8b9b8a4"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","44b0d50ed644851063feff981da4cacf"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","c827677d97d2e6b7cecf005720f8d050"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","df4760ed679d92f4eaf6fdf1e6574db5"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","d7e0c80088df30a42671f97d3f2d4f54"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","4275a1a6e4152eb724b92780ce12e4cd"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","6d80f2fc813b4f46eb18587c5d5adb94"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","ce1da0d44a89480e5c817e4d9b662cd9"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","a4ce6dadb700c951d78d7527b8a9c970"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","80a87de9a447905d3459c6a6b6b254f0"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","b9d4faf2c277942e0344461ef009937b"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","3c9e3e17e6a93e43fdb31f9969d8944d"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","ce3bb39b53e0844640f0c85d510379ce"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","e00c224dbad2e81e77cb58440c012f4c"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","b1b1feb59f1d0a6a6f05543a45acf25d"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","a472e157db4ae032e9b34c24f673c0e6"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","b3bbd3edc83e83795694564cea7e33c1"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","5ffaefc4a4dcf85c9095cc382358ba70"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","9370132de157ca99cc1211bade81896d"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","dc8529ebddac21cb3ecea4a5d4c68bd9"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","2ed6b57d4da8dd421e8bec7b46b64cff"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","396a90ebc0496b4ed7151875361b5344"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","552b34efd3222d9f2ad79cbe6580ad09"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","511b8d8863fa1858e6c4c34cfd97b271"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","4ec64327433ff2d5ca1dc231e356a64c"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","01a79e2da262ee29c8d9eb578d32b977"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","02951abf1df787098891412f47ae0af9"],["/2022/08/17/前端/jQuery/index.html","672d7fc4145ff544d13c97c1f6a8b71d"],["/2022/08/19/前端/JavaScript/index.html","3f5cab3356a9640ab824536de2401247"],["/2022/08/22/前端/Ajax/index.html","bad0817b0e66a0e620cecd1365d6e002"],["/2022/08/23/前端/Promise/index.html","6f6d6ae6c3725f7396591fd4748b3033"],["/2022/08/24/前端/Axios/index.html","3ea5c3d1f2c7b583de3aead436210fe2"],["/2022/08/25/前端/H5本地存储/index.html","7b90f29d4aa0868a1118f6532ed8eab5"],["/2022/08/26/前端/mock/index.html","75c46a3e4c524de0331b2be3bf7af4ce"],["/2022/08/31/前端/vue/VueJs/index.html","d811d4213736d5e0532fd203c9f83ee3"],["/2022/09/01/前端/vue/vue组件化/index.html","4847e7231b9039665d347132751a76ff"],["/2022/09/04/前端/vue/VueCLI/index.html","330dbf24ad86dbc731ec8947fe431eda"],["/2022/09/07/前端/vue/vue实现动画/index.html","044390e4ddd632b5aa29811c99c2b3c3"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","0c77dc123efcf0eaee56ae05b4b5c78e"],["/2022/09/10/前端/vue/Vue异步请求/index.html","ac0153c1db1d1e26f241025ebbe6ebe3"],["/2022/09/11/前端/vue/vue-Router/index.html","f682602c9a0edfa90c28909fc58c4c97"],["/2022/09/13/前端/vue/Vuex/index.html","9b8267d27502f07f08aeaea47d090cae"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","cb3f5e12e266b3ff167f800a4ef94358"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","82dac6f202abfa67a9967189e29dc9f1"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","07763ba472b9b383457b958097904bae"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","522d1b2049f6e730dff5e62b50bbc094"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","1c0fb128b924435094ccd8b149401152"],["/2022/09/28/DevOps/Linux/Linux/index.html","ff7bcc1dc3b2c29df3999efb9f3a730b"],["/2022/10/02/中间件/Redis/redis基础/index.html","2047334bfea07ccfaf91d9d498475440"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","4cefa5230033d10c7c1965de1988572c"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","ab3227e552d3e4f0228baa4e0a5fc7a1"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","6537a46b46399df583392bfc0790e97b"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","02bacd3af29b5b918406fdf82f5f9e49"],["/2022/10/17/中间件/Redis/Redis集群/index.html","d2a61371304853ebac2a78a11944971b"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","0c24526d98ba7018c0e7bf4316f35c22"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","1c4668174b17faae1730d4a3facaf96b"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","624110245523843fd187e778f2ff1845"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","7cd26d191e30941db38c55c89a5a5de5"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","50f329a0426ddfe7bd43e080641a4521"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","56cc5f1d1b5fc29437467bc4d859b621"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","86e08c5a0bbbe95e8129ae8eb71ad063"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","31bd296bd989cb4d4453507ab0b4be01"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","16dbd00ad58a7cb076fbb1f6985b0a40"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","b086104ae0d652ef0130e3f7dee46732"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","8c332051ec67aa4de6f127304abf81ab"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","017a462483fd19f5798faed2d268c320"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","e6ec6e33b05f201f96fc71fbc867e3fc"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","279144a44ecd5a64cfbb4f70e9cae01c"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","cabcfc1c9a81813ea8779d9f5e0d8aa1"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","49539a34691123ce6ce1f4b1cd4bff81"],["/2023/03/10/DevOps/CICD/CICD/index.html","0830676e29e4927cb9a898f64ff64627"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","3f538d767b0cd7bfce6641976f563f67"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","1feee76c5debc2458aa16ebdd23f7180"],["/2023/03/13/Java/NIO/NIO/index.html","dcb969878f3f07870b199835c8338967"],["/2023/03/14/Java/NIO/Netty/index.html","c626341b72905185828c8132d75dc934"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","7e3e49bb1a45b82190deea8e7a2cac21"],["/2023/03/17/系统设计/分布式系统认证/index.html","1f3a93fb0e968eb55145e6b8977bf885"],["/2023/03/19/Java/JVM/JVM概述/index.html","03be1a5e3643674777f74e8cf05025b7"],["/2023/03/23/Java/JVM/类的加载过程/index.html","aad2c03b17fba02393b06a74bc6708c1"],["/2023/03/28/Java/JVM/对象的实例化/index.html","154a63d22b914f544edc09767b3ed3fc"],["/2023/04/01/Java/JVM/运行时数据区/index.html","15b9f9e85d1b0e23beec5683dd9c5b75"],["/2023/04/04/Java/JVM/执行引擎/index.html","e4a130f727b1f6d3c5b5b0fabca80ca3"],["/2023/04/06/Java/JVM/对象引用/index.html","8380dd86fb55df0260413762992d9f5c"],["/2023/04/09/Java/JVM/垃圾回收/index.html","294beeceab60d146bd8299e40cf6ac65"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","6b745fd6632284ab5fed05b8de8cbbf3"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","94df7753c74d356476db44315bf0de5a"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","37ed981bc2ef68c5ecf3cd472b01fe56"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","0371724a96311d793494d1dd125edca7"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","865014f0d767776f8a9878647c8d5089"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","396977a0afb87a3f3beec71588c17640"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","a882b204321d97e5022997dda94cd484"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","f25267864448dffa0b4123759d66de03"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","434a3bded5e450dd94ddd45b9cbc228d"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","4ad10d183d930b010bbaee335bf6a889"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","7192b0b7c3a1ffc33e2b5baf6a23e702"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","0618fbc07bfb25f64edb991550955318"],["/404.html","c5bb263b0672c3bee1902be227afc71e"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","5bfb115697613ea97a3690f3df79d48d"],["/archives/2021/02/index.html","c2aa8150dff20165d22d10a386a5a816"],["/archives/2021/03/index.html","1663dd0492ae8292a90c47847d8e6c77"],["/archives/2021/03/page/2/index.html","515966682f32e948c26105ab8416c355"],["/archives/2021/03/page/3/index.html","963a5f3e36370ed56be25f22f95b22d4"],["/archives/2021/04/index.html","6813a06434c404f50919a47509de7d4b"],["/archives/2021/04/page/2/index.html","27befcb8d25ac912d76dcc3c876244eb"],["/archives/2021/05/index.html","3f965a73a62ee8a4b2202f76056f03c6"],["/archives/2021/index.html","58cb20707ba064dfbc5246f48817b70d"],["/archives/2021/page/2/index.html","00d77e2819080c338131f73d8a5bde08"],["/archives/2021/page/3/index.html","2c6e03da6edb355d823f69819c414227"],["/archives/2021/page/4/index.html","3eb7056bec5fa6a1395794fb6624b780"],["/archives/2021/page/5/index.html","2b88cb7b56fdf124465b55554140b3be"],["/archives/2021/page/6/index.html","ac5d643ec32e16d06db95ba9f2d30a44"],["/archives/2021/page/7/index.html","bc16c4db6a7a5a21fd5faab6e9461cdb"],["/archives/2022/01/index.html","7f33727849ba00d35d3af0987b3b9b30"],["/archives/2022/04/index.html","176e6867ae43c8922c497b39cd54a983"],["/archives/2022/08/index.html","42901bc319db416a9b5ac4a5f5006257"],["/archives/2022/09/index.html","92da06151eb8f920cd005f7c58b1464d"],["/archives/2022/09/page/2/index.html","0e2b845a11aa07745d598df1c0a1312a"],["/archives/2022/10/index.html","d97f18441fac0641b2558ec6f700a070"],["/archives/2022/11/index.html","7b28eaf6d69c60458bdd67f248b716d6"],["/archives/2022/12/index.html","55be6935f483fc731e9fc684cfed0740"],["/archives/2022/index.html","e384b4fcad26ba863be423c9cf34ff9a"],["/archives/2022/page/2/index.html","64564c34f182ecf22fd72a695e305bef"],["/archives/2022/page/3/index.html","3e90b07973829c8312fca1411b6da6dd"],["/archives/2022/page/4/index.html","16e3b0f7c85e8a7fca2978ac5193a2ce"],["/archives/2022/page/5/index.html","8466852ed458fa74d7995372e1ece571"],["/archives/2023/01/index.html","1c2f9cb0132fb8652d6bf4c3fa7f4831"],["/archives/2023/02/index.html","8082f9ac23e4d04c67e6df7f81c6d463"],["/archives/2023/03/index.html","596150978cf1d4895e9a46fe11c73d0a"],["/archives/2023/04/index.html","efb2139e362c74f04604b3f3a5c6233a"],["/archives/2023/04/page/2/index.html","b94871b57e1b5352fb8ae27a746940fb"],["/archives/2023/05/index.html","01f193ce4ad4e9843d390f22b215ffb2"],["/archives/2023/index.html","93377454c7fd8b5b09f5bcfd1bae5a98"],["/archives/2023/page/2/index.html","e2170826dd24602217ebb8102947a4d2"],["/archives/2023/page/3/index.html","6f668f3668d840711c537b019c04674c"],["/archives/index.html","ecf970fd829bd18c45d9308ef4744d62"],["/archives/page/10/index.html","a1ddda99930b3cba6c29934425c356a1"],["/archives/page/11/index.html","215a3b47b55fe4b46e0f3bfca92eeec5"],["/archives/page/12/index.html","5d310dae5b641d28314412f71ab15f05"],["/archives/page/13/index.html","34457b12ecea536948e65b6ce7b09798"],["/archives/page/14/index.html","a7e34859abccd9af34119e7eab71e631"],["/archives/page/2/index.html","518182e0652516e446e91b7fbb608431"],["/archives/page/3/index.html","e5d363ab36fa5c7f5db77b79d81d71e4"],["/archives/page/4/index.html","082d21179c299791d987432641766302"],["/archives/page/5/index.html","158d3034358237b40e2a36cc17369015"],["/archives/page/6/index.html","90d56a0052de7605dbe1bbadf437f0d8"],["/archives/page/7/index.html","99cd3575603a59a08c16434386ec5424"],["/archives/page/8/index.html","813de74058714e44c6b9a0384a6ccd46"],["/archives/page/9/index.html","41606cd45bd6f64a318e0fc7de765160"],["/categories/Devops/CICD/index.html","407ae5955b4c56c7a1af9c97f9a7154a"],["/categories/Devops/Linux/index.html","6f077e43994481d67fb498c6bd28a856"],["/categories/Devops/index.html","1bd286df1f0232c15b883b87098f9062"],["/categories/Java/JVM/index.html","6e1bc86b5fa42eed177a973d9ef68e88"],["/categories/Java/NIO/Netty/index.html","af4df4d067117956a2ce89985f6aa4a6"],["/categories/Java/NIO/index.html","c097cb6ea9f81daf78a38d68eeeece07"],["/categories/Java/NIO/原生NIO/index.html","c80f32c32c39057ec389f4e7e58db0b0"],["/categories/Java/index.html","f85575a29098c39c2d89203c068df061"],["/categories/Java/page/2/index.html","8b7a15b70821d76e132d62ffd60df05a"],["/categories/Java/学习路线/index.html","904f9d20bc5f21abce44d7e4f994a14b"],["/categories/Spring全家桶/Spring-Security/index.html","c2d95a691dacf76257927b654d6b80f6"],["/categories/Spring全家桶/Spring/index.html","17278c1803c1c41b817fa6406168cb3d"],["/categories/Spring全家桶/SpringBoot/index.html","18ae9d44e2264865d3d22dfa2195afdd"],["/categories/Spring全家桶/SpringCloud/index.html","99afb8e02940aae23b842b826501ed01"],["/categories/Spring全家桶/SpringMVC/index.html","3716de446570bb72da0631c27a432933"],["/categories/Spring全家桶/index.html","22a0d230dda4c624f4dab00c825348eb"],["/categories/Spring全家桶/page/2/index.html","498020095afde87e69d88ade1b0308f0"],["/categories/index.html","a973ea58d97ab839e5a1afd35dc86cf3"],["/categories/中间件/ElasticSearch/index.html","80e5570034f0c96489bcf774991825df"],["/categories/中间件/Redis/index.html","10c15da839a0ccdb9ec5bc6fe0d40f0b"],["/categories/中间件/index.html","4817a39fb798c096150a161451afee94"],["/categories/中间件/page/2/index.html","ed86ef59992a0a05eee4d8315dc2078d"],["/categories/中间件/消息队列/RabbitMQ/index.html","154d96bfb073e8a9db3b46c8f2f4aba0"],["/categories/中间件/消息队列/index.html","28914da5856bea36421502f589d7facc"],["/categories/前端/Mock/index.html","ada2dd8268b370fddcfb1aa2597b4857"],["/categories/前端/Promise/index.html","583ee15ce1ef56927ea441a61e9b677c"],["/categories/前端/Vue/index.html","a33f8c752a437b86ffb86eecfd46e30e"],["/categories/前端/index.html","122b006061b3f8ae8314de24f0259b0f"],["/categories/前端/jQuery/index.html","c2cfe3b69934441a2b9764eff62cc2de"],["/categories/前端/page/2/index.html","ac2e4c45b8b233d62957cf500d6b1e52"],["/categories/前端/原生基础/index.html","6db4ef9a9ac73d914915500a7328b6c0"],["/categories/前端/异步通信/index.html","0fa9fc96e583cb18ba4e7a01cfa6c09c"],["/categories/工具使用/Git/index.html","1498b1486c8406e421733c596ad7a96d"],["/categories/工具使用/index.html","4ead249aef957cec2c97ba4a4ae65a2a"],["/categories/工具使用/markdown/index.html","91ce338a4c9cc2c83f96fd24ae4b48b1"],["/categories/工具的使用/Docker/index.html","f2eefaf7954ff0d5ae19852ef7237f68"],["/categories/工具的使用/Nginx/index.html","a4b5b614f4c6737e21c4b45e61e5804c"],["/categories/工具的使用/Swagger/index.html","f965d6f6c5da46ccd6c3abe37dd80731"],["/categories/工具的使用/index.html","83e7371e9b7e889a1c6e2a9ac1cb39fb"],["/categories/工具的使用/博客搭建/index.html","de410bf62ffbb86a60b8dac05c09aa54"],["/categories/数据库/MongoDB/index.html","220fae28dc156d3ef27574fcc6fc266b"],["/categories/数据库/MySQL/index.html","0d16f0699f55f0db9d627820d3c6d25e"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","65da46c3ec7c07452feb6e313e69526e"],["/categories/数据库/ORM持久层框架/index.html","d28a47ada8648e9b0112f3033b4b1de0"],["/categories/数据库/index.html","e5845fad465f1bcc71cd2e6e93645fff"],["/categories/系统设计/index.html","de3d929c35d296adf971ac019a0148ee"],["/categories/系统设计/page/2/index.html","2bf5ce48383728cbc50b3119396ff1cf"],["/categories/系统设计/分布式权限认证/index.html","10ba476cd41fa924a502acb49732e566"],["/categories/系统设计/设计模式/index.html","1a933d65e3fe6cb652ba984b4dc3d506"],["/categories/系统设计/设计模式/page/2/index.html","16266da8479717cde767dd107c402a1e"],["/categories/计算机基础/index.html","70c66e9fdb728b36218dd6f975843725"],["/categories/计算机基础/page/2/index.html","006d70f30a33a6d7d927a99c5d5d553c"],["/categories/计算机基础/page/3/index.html","303280a282428866304729d824c1e534"],["/categories/计算机基础/page/4/index.html","bd89b9bfeb462face0d5b0dc26c829c0"],["/categories/计算机基础/page/5/index.html","d4293614f42967dac1a5dcadfc6cb3ec"],["/categories/计算机基础/page/6/index.html","160c4279699d088fa2e713047f068180"],["/categories/计算机基础/操作系统/index.html","87dc6a362ef0995fcc9d5b808243341b"],["/categories/计算机基础/数据结构与算法/index.html","59834f2fcaf5013193995c6d72197126"],["/categories/计算机基础/数据结构与算法/page/2/index.html","d70ac573036e35be2e49f5ba70a134e9"],["/categories/计算机基础/数据结构与算法/page/3/index.html","004dd2b20caa5a656e500b794555a8f4"],["/categories/计算机基础/数据结构与算法/page/4/index.html","b94b306c3cf3bfa68611aaf5c4504be9"],["/categories/计算机基础/数据结构与算法/page/5/index.html","8c68450ceff5374fde2face7112387da"],["/categories/计算机基础/计算机网络/index.html","b1baf3b34cab0ff1809ab449da4bf409"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","40c7cdbf514e640f3a847a1fe9bcfd4b"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","be7ff6d81976596f37588cbabadb9c97"],["/messageboard/index.html","526b5bd67da1dde467d84bc1e1e3f2f6"],["/page/10/index.html","e651bffe9f3b77efcf0b588836000342"],["/page/11/index.html","334feb97195087880c1a27056870f9a5"],["/page/12/index.html","74eae2ff58e1064c90f791f6b673600a"],["/page/13/index.html","67d5bb13fc6610bedc36c6d30334746e"],["/page/14/index.html","8fa5d9bbc4f0a3e8fbb81897d2d78a72"],["/page/2/index.html","cd2662ced457322ad5d9f82301f966ae"],["/page/3/index.html","377b75856112af1e02b0e910592b4daa"],["/page/4/index.html","b843a4a15b1e5d1fbe895c7b3801ed80"],["/page/5/index.html","70c3617f973fb85499ab824f2da60805"],["/page/6/index.html","78933314c8f2b411c0797a8e7a8e4cce"],["/page/7/index.html","288d73eb7bbd72521dd3094e1b15bda4"],["/page/8/index.html","446d957a11dc2f194a942ef683844d7d"],["/page/9/index.html","5431aa6e32e47b654654a2cd0ebbee09"],["/sw-register.js","782a370648b2d9d0455b4397a2f1cb12"],["/tags/Ajax/index.html","a0ba1c62ee8b77c9fc00eabdc4696ffc"],["/tags/Axios/index.html","10bf9568595fb51f4c846a07c25d72e5"],["/tags/CICD/index.html","d7713dcdba6d283f205cc32957fc0cf5"],["/tags/Docker/index.html","1eb9a15e03f508a17a1453dc2f345c5e"],["/tags/ELK/index.html","13bda44141b3b31d8b92134dbf40d96c"],["/tags/ElasticSearch/index.html","97b69b1ca26564be4bae7ced1cba01b3"],["/tags/Git/index.html","a7cc5bee65a6dc39018d66c01760a114"],["/tags/H5/index.html","b24850e6781733ae6d65a46cb067282f"],["/tags/JVM/index.html","e05e44a292075ffc7d7ea42ea2f5a192"],["/tags/JVM内存模型/index.html","a2736ba34e020dbdf62793c9239ff074"],["/tags/JVM执行引擎/index.html","c7cd1fc171d862145e8602dbdb033842"],["/tags/JavaScript/index.html","639c3f8d3e81a59163d2fe3e60874cb2"],["/tags/Kibana/index.html","b08cf53adf4bcc3074f3355fd4c68c98"],["/tags/LeetCode/index.html","6e41320eded1093c34762fbadf096808"],["/tags/LeetCode/page/2/index.html","0c747bf895ef5193cf4875991dacd2df"],["/tags/LeetCode/page/3/index.html","3435cc4d3c79c503b4d7e706e708ce43"],["/tags/Linux/index.html","3b73c31f322fa783f03f39c3b80fd758"],["/tags/Logstash/index.html","0102981a48af3e4d84e5d281a391e304"],["/tags/Mock/index.html","db851ed118c2663ee4a4f2ecfac656b3"],["/tags/MongoDB/index.html","e58d23675e8a3ac4eb9a11397b242d29"],["/tags/MySQL-数据类型/index.html","1678978b0153bc8b2ac61a7e54956c72"],["/tags/MySQL/index.html","dd4f5740815b9fa6e63f37d4a6b707aa"],["/tags/Mybatis/index.html","15b55113d08d0a5d4fbc22183b12cb2e"],["/tags/MybatisPlus/index.html","aadac1768f833fb8d7a905c88bfec3cf"],["/tags/NIO/index.html","0d4278b5b911ec9ac8de4db4b2ad0fec"],["/tags/Netty/index.html","b0f1b954a7b01416816cbbca8ac85300"],["/tags/Nginx/index.html","c9e7cb1730e94f529b403269a262423d"],["/tags/Promise/index.html","2971f522e6e24469dc6309d623530a53"],["/tags/RabbitMQ/index.html","ed2882b76e94e787314690141b257c00"],["/tags/Redis/index.html","b810725af9eb77d048388cb1e226fbb1"],["/tags/SSM/index.html","dd17329b853b9eb0f7320158dcf310d0"],["/tags/Spring-Security/index.html","f2c20e43b24cdb4c696b56c26b72ef1f"],["/tags/Spring/index.html","e2fa4b15c34dc20324bbf3795667ce42"],["/tags/SpringBoot/index.html","4170df52633326221d3807139036d6ae"],["/tags/SpringCloud/index.html","2c38e33a68c0f5d5def12c6e446693c8"],["/tags/SpringMVC/index.html","0d7fd71baa99bf05eccc7ba7303c1c16"],["/tags/Swagger/index.html","0ea015d525fcba04bb092f30cd4da249"],["/tags/hexo/index.html","b4b4314f929d08a85c5c28110f0338dc"],["/tags/index.html","961bdf6ecd20a0d829254519db2fd051"],["/tags/jQuery/index.html","e6d1e89805ee30ea2c8993a1a3ca9810"],["/tags/java/index.html","0034ed54a03cf65bb206c2df337392a6"],["/tags/markdown/index.html","9515a548f292e34d52f8d9b7bed9c055"],["/tags/noSQL/index.html","e61aebc393a966ab73c47385f29ed953"],["/tags/typora/index.html","cdab5df4314c8ac4483aa5ec416d38f7"],["/tags/vue/index.html","5eea436ae8e318df34a51212a0d15669"],["/tags/享元模式/index.html","e476de6696b3597767c176a35a8bd758"],["/tags/代理模式/index.html","f4f7a6f583f7657235970c71f0c1cdf3"],["/tags/内存管理/index.html","d4f9dd169bf053ad4e7acdaac81ddc85"],["/tags/分布式/index.html","fc1208d96c9b3711c9b761fae20ad449"],["/tags/分布式系统/index.html","c2d66cd92783e8547e45e06012a50f84"],["/tags/前端/index.html","5405139bb85150fb3368c12395153172"],["/tags/前端/page/2/index.html","375cab7943d9d166e88bc43643d8c104"],["/tags/博客/index.html","1a2b5ab7de9f003e002ebc8b85bf4ce8"],["/tags/后端/index.html","ae58c820588b73bcbffaadc352af5a80"],["/tags/外观模式/index.html","d05a697dacaeb47db8c8cdb8f47cec70"],["/tags/容器技术/index.html","54da84ac5e7882096f6774422b761c62"],["/tags/工厂方法/index.html","2d880b1294be1c491e581e8a1151c39c"],["/tags/微服务/index.html","bbdd2306b5a9b0868012db0238cf8a25"],["/tags/抽象工厂/index.html","911f26d5bd4fd24abe0d7d02fa5e77e8"],["/tags/持续集成持续部署/index.html","092434cca88b5fb3a763c80443b9933a"],["/tags/搜索引擎/index.html","dd362ddb23319d6c0120da2bd7d7da2f"],["/tags/操作系统/index.html","6478f2851136c5a6887c4695bf55722b"],["/tags/数据库/index.html","0ea2480278b77040cce7967236c6916a"],["/tags/数据结构与算法/index.html","4a8b7f7573f3e1dd6056630052214f21"],["/tags/数据结构与算法/page/2/index.html","3522555cc8e0d4ad3b0313bb6d279aa1"],["/tags/日志/index.html","c1be50364f43be2e5763b05f98918d14"],["/tags/服务器/index.html","a4e4006936115e48862948a12bb74f15"],["/tags/权限认证/index.html","9a4e6b32da6296ba6ee6ab16d007278c"],["/tags/桥接模式/index.html","77ab2c1316d5890b8dbb5bbba64e77bb"],["/tags/模板方法模式/index.html","14f6e14a79166187005fa95e7bcd86ee"],["/tags/死锁/index.html","0dcfe4708ba7032e1bc3b8dc31fdcf2e"],["/tags/消息队列/index.html","9c593e63b31900d445b8d2d767ec0742"],["/tags/版本控制/index.html","e9ad5b5bd137783d1688fe1f77739be6"],["/tags/策略模式/index.html","4d65ea517072a2fcdca9f7da988fe14c"],["/tags/简单工厂/index.html","2f926af995e172878c6275503bc8b31a"],["/tags/算法/index.html","a870f45483c419f324ac6b21a2f4798b"],["/tags/组件化/index.html","7c51cee9ee9bd9783e3aa09ba4b8c27b"],["/tags/缓存/index.html","b769ce1ab624a706419eef80b73c0177"],["/tags/观察者模式/index.html","8a3068c8c4b8018595cfbba5177fecd0"],["/tags/计算机网络/index.html","aba522f05f542229b9d95a2764c8fbbc"],["/tags/设计模式/index.html","c89e7f00439f01d1058e6adda6e59a48"],["/tags/设计模式/page/2/index.html","7bc6586be10877731bcece7c38df648a"],["/tags/进程管理/index.html","260b7090cabffae44919ac54869e87e2"],["/tags/适配器模式/index.html","062f1ba8c06918312f580aa51e969b13"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
