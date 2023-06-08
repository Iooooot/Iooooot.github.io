/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","971e557b2da9310958fc7e3120ec039e"],["/2021/02/22/工具的使用/博客的搭建/index.html","d6d9f1694599f68d9e3ccfe5c8408f39"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","7b56d5d657d580d612fc0b407b1200d5"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","421d3236e4649a519e7a0e324f304cef"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","f046a550272c257ba444b370415b7485"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","891ae7a554f132e864a29dca5efd6925"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","c85e788c3c044cc9878d765ac37bc4bf"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","aad75449c625b6d2acdd4b2c02124960"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","9ec5b49ec465a6045bb7d23f00f7a37a"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","b58ff96e4aa1b9a8beead2461644cdd5"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","0dc368e51cd300d80e14ed891f5aad34"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","559c9de76cb753b48e859a7b8e0823a1"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","c31243f8a132c987e6e230e5774ec3f5"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","7d4fa4ce8db3af6973f464a326259e74"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","a081a8ca488d38bb1904e93a53fab4c9"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","e312abf334792fa1443e9c6208045eab"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","50e4a906b7b4bca017342a9b2d17f0e9"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","861f1df79ee072f61256f7fc26576349"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","e458a7b2d31420404959630f8aba63ca"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","31a264bef0c28bc91cb5b3fb27d88be3"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","b61f8e289623f90af0ef80e6f5ab973f"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","166869d947803253ccedeae86e9db739"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","19f91118cd7f74df28e2acbb417cff5a"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","b6ac384d99221b2d217dba6b5168653b"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","e4fe5703ceb0f87715af641430b94696"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","f06427ffc9f65bee4c5eff59fc951824"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","9f656ea5fbdb765b582f798baedafff6"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","9baa5fd357bf0cc9f8a5f07862ac18a4"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","3ba8d0f0e38dcc803923b895060308f4"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","673e16ddb3fcc4cbee49e434c20c50b6"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","e2ad4ee2a3fe1391c8a5e49fda4e4cba"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","eca6f527854e7ff3c87b14e852f83739"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","c7ddb10a4a4185c2fc61240ef2be27df"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","b3dbd02640cb95958509c73c15c663d6"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","a843cfb975dc6e9c0ec9e500f292d2fc"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","5bc993bf3c210f09f08837f07c1c9cbe"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","eba1953c98c2b4d13bd972a8e47f1aa5"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","bed7561816d03b4bce2a600840ea41bc"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","8ea5d2f531fbe7709e6b6074d99821bb"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","be75114e436b63dca541f8afd61ce4f2"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","4f6bfbe070b9b3247bd56435c89d8d5a"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","fb6abb1a1ee3aa7d1f501b827db79541"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","52359dc71c66f2e4940c3dd058ee5a8a"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","cef515b407ca84f53fb7beee6f232df5"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","aa5dd628cbb2e4e13e18c6a8a8bcf18e"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","dbd145d67c02192526b44cbfbd46397e"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","316e439df1f52c8bb8965c22ae9734b6"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","4ddc77512cca6a3e39fbd529be9d19e0"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","f16ffeabcf7f9b5ee5e99fb07f005ad5"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","f538e32a9aa8ffce6c31e0df19d22ed7"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","724158a5a832c2312289a2e91119198b"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","f166694676e871c39b480facead0cf06"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","ff4b168e7164508696d40d08a6e23ddb"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","cc48246dc5182a3607e3d4e6eaf623e5"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","31fb129541f71a584d5cd452364bcb6c"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","52f03c2b070e8acdcc3fa198914304a1"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","2fe341c78d3777a7536e85196c0db9aa"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","35d2091ea1b2d81bbf485015f5b73303"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","ab1afa47fbc8b14a307198af36bc0c8c"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","6839d8b226e915b285d35e15a552b4a0"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","d6c8d1c23ebef8c171fc4eaaf8785380"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","6d81068a7a814f42513f31d03e395ce6"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","1678eb99b4a5461f46d0b6aa0e5a9273"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","cfa04d07c92d27c914acc73829512e91"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","64b42e3782265801770c383da6e7cc66"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","81f7a4570acc96e9bc05bc2dbedff9d2"],["/2022/08/17/前端/jQuery/index.html","ebe23c07437e0228ef3fef7a6e248396"],["/2022/08/19/前端/JavaScript/index.html","a3f973c96f2360a5128d85ec8e87e1f7"],["/2022/08/22/前端/Ajax/index.html","af9d20e69154d64cfafc0bacb8de8962"],["/2022/08/23/前端/Promise/index.html","a4315d490834ba238dd61f5c7f2692e4"],["/2022/08/24/前端/Axios/index.html","28d0f0f464d8ce85825fd3c888de0261"],["/2022/08/25/前端/H5本地存储/index.html","2b93d0cfea576fa0587657c45435c2e6"],["/2022/08/26/前端/mock/index.html","b2bf8e73bb57f2581245eed7d6c9beda"],["/2022/08/31/前端/vue/VueJs/index.html","7fab864072e02d2a6791539257aceea8"],["/2022/09/01/前端/vue/vue组件化/index.html","92a99f389a5deb635d3334a14e25a57a"],["/2022/09/04/前端/vue/VueCLI/index.html","2ec2539878e422f9c25f808ad57b51f3"],["/2022/09/07/前端/vue/vue实现动画/index.html","648c261734676b2a43f707e0b7623180"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","8f97c27deaf7bf07096e77acb2fe4c79"],["/2022/09/10/前端/vue/Vue异步请求/index.html","ff7391f9cbf3b0a8d9dabebd55260108"],["/2022/09/11/前端/vue/vue-Router/index.html","560791a6357175b41666d033966b8336"],["/2022/09/13/前端/vue/Vuex/index.html","bf146e4972d9dada28167bd75c4a8858"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","2f34efaae1e6165554235ce2986bb6e6"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","8fe06aebe216fa08381128e3b4dffe4b"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","9295e59d863c3c060f82f6c12c0bb5cb"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","e69c1d3858d7969a2bb4fbfc399d6ee7"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","1d49e94f438216a2bf14fdc4c7aac9a7"],["/2022/09/28/DevOps/Linux/Linux/index.html","e575ac60f8058e108d3d8e9f5e7c49a6"],["/2022/10/02/中间件/Redis/redis基础/index.html","823844e6fed44d6fcf5b9f2cb9a791d5"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","c3eeca19253183b3a7335bcd99ad96ad"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","9075b8f19bf2e78ad817df3e4bafa21c"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","ff65cf23406d50c8e88a69c28d5ddc75"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","82885d6069a9528caa6bf00899caaa5d"],["/2022/10/17/中间件/Redis/Redis集群/index.html","649acc06b194bd9be82f28bd6c97626f"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","6c3a644e614448d2ae4d08bfcf6835fd"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","c5e68fe5b4e59673b0f3db1c6c669b13"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","02ab3c71fcbe14332cfcfe31109c601a"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","ef628c6e7e157c4cc0b00126af3aac8f"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","613531d1a9c469a80350deaee6acc7c2"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","f6d38744becf358d85a36b0c8a73bcde"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","3a2099311a1320d7ba17d66e6d12ebd5"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","5ae9aff30e35163bb6adebdcc1244c45"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","1c126bf47135e5c54840b1aeadcf6a01"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","cbdc91abc7eb23a5f0fbb79230f875a2"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","cf4dcc43e3b750b7b7762aeb8dd1e521"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","7f92dc5183f2f36f3e3a2b94f25e8de9"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","241cd33e867bf34611ca3c2dfdc80bc6"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","bc16fa48a924d39d39fe0b5a5c230171"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","de1b6fcdbc7b62a8385dc01e49c8bed7"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","c7500da38c03933549367788c9f7c201"],["/2023/03/10/DevOps/CICD/CICD/index.html","82608800f8fbd56520d58b8d6bd8be31"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","9ac048682dbc48c91aa1af1c35c2d3d0"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","9a477b94d1b402e6f3b925fb510363ce"],["/2023/03/13/Java/NIO/NIO/index.html","f5d210d19f9284910d5f813fccee577f"],["/2023/03/14/Java/NIO/Netty/index.html","c66e40715457327ba5b69f172de58cd3"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","10a1b026721d1fddadef6c34f898d9b5"],["/2023/03/17/系统设计/分布式系统认证/index.html","de89303f7827c1e7df4ab9f67f449a5c"],["/2023/03/19/Java/JVM/JVM概述/index.html","b7fa9f5263c335c60601aa62118cec92"],["/2023/03/23/Java/JVM/类的加载过程/index.html","67f9c0a7dcaf7c3bba2c5c330ca9e972"],["/2023/03/28/Java/JVM/对象的实例化/index.html","986042b84cb1c82d7eceb83b3bdbb697"],["/2023/04/01/Java/JVM/运行时数据区/index.html","e0fa2f32e1e006fb73341a784ae58968"],["/2023/04/04/Java/JVM/执行引擎/index.html","764e48766459415bd5d6e0ba60d4154d"],["/2023/04/06/Java/JVM/对象引用/index.html","5a54cd859da40ef5f1873f8a26bf165a"],["/2023/04/09/Java/JVM/垃圾回收/index.html","12997be1048c9e1f442fdfac54ec1fd7"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","d0d838f0b98b757bf0e32d2647c28dd0"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","06dc7e3a6132c04128c05135fbeeb7f2"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","6eec416c2700722e021ed7108d250b3b"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","bd1ff7672a1e5f4e062aa5b1662d9f86"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","df7a697e9c6fe5e1e249754193015594"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","7d2da9aa9402551b493ac3a26dbb67c3"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","7593fd443047f6873e39cdf69062e2e9"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","674975698f42da0eb4f40a0f4a6d5dd1"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","26d22f738b61ea3cd1a8dce4451fdd56"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","eb21478cd13347a8a071ed05052628fa"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","55d3ae70f6516681ceb5531952fab679"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","cef6a55f92520b090c8792c22f8d8f20"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","829f9c448374b0fafba550d787465956"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","a32a11e9321d255f6029dfe7a130d0bf"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","83968651e628afd89e1b879c5dfa4b51"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","9d5d94bd7737cf5bc599429160c34d5c"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","e2af09ad75eec9de0405f3b2aaebcc9b"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","868afd2a74934b81bf5009b21901314b"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","f1c3ccdc8e95c0142baccd68c2b34cb9"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","f2c27e16208511f9ecbcee996310ae58"],["/404.html","24fa8ee80f0c20170b46a9d9df232b7c"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","b9c1b3750fbc867bc638fa5cdcf7d49f"],["/archives/2021/02/index.html","ec4db723012e18e54ac9dbc84ea8af14"],["/archives/2021/03/index.html","06169fa3b231e1b784735140c30da99a"],["/archives/2021/03/page/2/index.html","c77abb5c110d91b3fe2978d51a7ffd28"],["/archives/2021/03/page/3/index.html","9f49e2f279e2bae8bff11c817034323f"],["/archives/2021/04/index.html","955c8c2bc1e9bb840e95e701f65fc895"],["/archives/2021/04/page/2/index.html","da3bb9adb96efe6fdf05abe3be8c7b15"],["/archives/2021/05/index.html","05e53553e5e05326732731eb9f6569a5"],["/archives/2021/index.html","5958bc736b6a68297105df06502a3bc6"],["/archives/2021/page/2/index.html","bbf86e314d4c8799d3fd08c3186bbaa8"],["/archives/2021/page/3/index.html","4f2ea3a12db3bdc913fee973e5dd2a3c"],["/archives/2021/page/4/index.html","595bd45ab8a2b47d9f6c47ddad74c977"],["/archives/2021/page/5/index.html","99536b24363e79fef7e42c443af6142d"],["/archives/2021/page/6/index.html","a6bba48a1db8cc14a6c3bf7808be9e68"],["/archives/2021/page/7/index.html","5781a375f456b0eaef74ecf492a4173b"],["/archives/2022/01/index.html","eaa05db7a49ce37920f5e23b5016bcf9"],["/archives/2022/04/index.html","c4b63ff4cef333743600682bcf52a9b2"],["/archives/2022/08/index.html","ff0a75d5ccbafa124470bc014b77f3bf"],["/archives/2022/09/index.html","fd48397c683913f2e1413698408e069f"],["/archives/2022/09/page/2/index.html","79b514ad4a5e146a5afad7fb38077535"],["/archives/2022/10/index.html","1beae7d4f39439f1f432ac2b093ea8ca"],["/archives/2022/11/index.html","ff94af654ccb8d219770329c2abd6981"],["/archives/2022/12/index.html","1ef79d169450fd2ace41b768d08932ad"],["/archives/2022/index.html","7d85e4286c6662a47e69eae4a3cf51da"],["/archives/2022/page/2/index.html","ac8bb94372f885f0dec07a3faf0beeda"],["/archives/2022/page/3/index.html","e6c2cc053fc4dacb0ad140d5c8c14b8d"],["/archives/2022/page/4/index.html","e3fa7caf93f041f7fc3010bd4dbc4b0b"],["/archives/2022/page/5/index.html","5a657b06b7a6ffdede4c198a95a403e2"],["/archives/2023/01/index.html","02b484cd1e4c8a9dac36acb7f2c47af5"],["/archives/2023/02/index.html","b98ba3fe2e32a7d9bb9854d73a3d1b50"],["/archives/2023/03/index.html","aacd674c874813346b3446a0b449af0e"],["/archives/2023/04/index.html","256cb5be8974fbad62f34ea12c9c9d32"],["/archives/2023/04/page/2/index.html","ef98c370a247025eaa621f70d34d9e4b"],["/archives/2023/05/index.html","1fe50b06769e6fae3ffde6b539fdee55"],["/archives/2023/06/index.html","e18401bb6dc932f6c7183d0cf4418600"],["/archives/2023/index.html","d9917eab0783367c898843a0e9c01d60"],["/archives/2023/page/2/index.html","35e7c0f7b222e82ab35d88d7d8c08d35"],["/archives/2023/page/3/index.html","19d307ff725b18dca3446a670229f40d"],["/archives/2023/page/4/index.html","1b10f7b9df96e3ca78c8c35f1d29e5d7"],["/archives/index.html","9b7d1ac2f11066c70c829f4d64b3e7aa"],["/archives/page/10/index.html","d6629a6fb9c20b36d2992987aa39bb08"],["/archives/page/11/index.html","9182e483ce81dfddb5664c86cdcf5205"],["/archives/page/12/index.html","3ca683e05fafb12bada96a1774e40770"],["/archives/page/13/index.html","36a78377145ec0c9f8774829a15bde03"],["/archives/page/14/index.html","8aa0024893fb95bf093592ebeca38924"],["/archives/page/15/index.html","5cc8f103666c027c55f47726d8e8c602"],["/archives/page/2/index.html","94f107f0d5a064e908c928b8c0ffc718"],["/archives/page/3/index.html","02cf6ae8adba28cb0740cf1a1bba7018"],["/archives/page/4/index.html","e1f88b6d08b81e77e0465af1d5070b77"],["/archives/page/5/index.html","a5aaf4a5ebeeba0dbfeaaea478c6ac45"],["/archives/page/6/index.html","3121e8109288724ce752efa077f200a9"],["/archives/page/7/index.html","f08b3eb751638d2214b0795d5d8ba176"],["/archives/page/8/index.html","5744010873c26965efa543723f8b8c33"],["/archives/page/9/index.html","424b3ee9bb10b4fa1ab6a5a39e999013"],["/categories/Devops/CICD/index.html","97614b6d02a2d47dd57987e34353595b"],["/categories/Devops/Linux/index.html","3f4e42537aec52f41c4c4897bfeabada"],["/categories/Devops/index.html","6ee54d35be69158393c847e02dac508b"],["/categories/Java/JVM/index.html","d2c3f1835d84aba3c14ca0454001ba2c"],["/categories/Java/NIO/Netty/index.html","53d8e7d42ca3a95a83cfb73db74080a8"],["/categories/Java/NIO/index.html","56b44c8e7625d743aa372b5dcea2dec2"],["/categories/Java/NIO/原生NIO/index.html","df202f5fda98aca00ad1b03ab259c668"],["/categories/Java/NIO/文件操作工具类/index.html","1712accf60fc8db6ade4fa27c5a11927"],["/categories/Java/index.html","84c10ec9de6b1b831192f5ebd82e8a3a"],["/categories/Java/page/2/index.html","0a3f1bfc882f2a6c19a6348846583e24"],["/categories/Java/学习路线/index.html","2a4a96c58321ace9a385a68e775f8369"],["/categories/Spring全家桶/Spring-Security/index.html","b875c802aace0ffffebedf1103e80813"],["/categories/Spring全家桶/Spring/index.html","e76c3b19dd3266900a177e962f666e10"],["/categories/Spring全家桶/SpringBoot/index.html","2584e4804d3171e4e07d56f5df8cd6a1"],["/categories/Spring全家桶/SpringCloud/index.html","7cf7557798b6feae96ae382883fc89c7"],["/categories/Spring全家桶/SpringMVC/index.html","7c5f05bf18ceeacf14884060ee22181b"],["/categories/Spring全家桶/index.html","38da7d4f1e6f8f51bbdd383d208bd80b"],["/categories/Spring全家桶/page/2/index.html","f55cbd4e16dab4a42f8e27b63b5c4254"],["/categories/index.html","68fc02e78619739836b0d1b6428284b3"],["/categories/中间件/ElasticSearch/index.html","97746bd9755c305b7d70f7662a1c2d9b"],["/categories/中间件/Redis/index.html","647974d8edba6949ea31f6d740c138fd"],["/categories/中间件/index.html","862c3be053c5d7ffdac62f7fd3be9297"],["/categories/中间件/page/2/index.html","7c1bc756808664aff1ebc54a8b8b54f5"],["/categories/中间件/消息队列/RabbitMQ/index.html","6e5ebafcc29f43500b86f5654fcfd22e"],["/categories/中间件/消息队列/index.html","7df271132b96b9eac420ca81d95cb620"],["/categories/前端/Mock/index.html","9d681babe8ad26424b73c49661161b4b"],["/categories/前端/Promise/index.html","20b6b7877dfdb496fd8e9589e24bbfa0"],["/categories/前端/Vue/index.html","283ec8a9ecb9a06f34fe67f4f3c67b7a"],["/categories/前端/index.html","48abc31903f405b97420caa65f375d96"],["/categories/前端/jQuery/index.html","78fb244f2f420bcf2174a57cbd1388eb"],["/categories/前端/page/2/index.html","21bf4a9e370b6311825e0657b3b46619"],["/categories/前端/原生基础/index.html","3678c01f443f099508b85c9b5bcf246d"],["/categories/前端/异步通信/index.html","5975e210a14ddc60389942dd9f6d4243"],["/categories/工具使用/Git/index.html","8ca0c1a29c2df0d23c38747fa279a60f"],["/categories/工具使用/index.html","e0211bef8cd9f51512c7c77e0d77359a"],["/categories/工具使用/markdown/index.html","30e1da6519e6ade6b09d5bc8c7a054fb"],["/categories/工具的使用/Docker/index.html","ec7fa3d67806271d52c37088d49621e5"],["/categories/工具的使用/Nginx/index.html","c4a8959a838271cc7652c8c46ce82073"],["/categories/工具的使用/Swagger/index.html","b7d10d29ada35293da42316d8c17bcd6"],["/categories/工具的使用/index.html","247bd878d7b8930dca6bcf83b64c4543"],["/categories/工具的使用/博客搭建/index.html","e064d7c857862c2941b8b960453566b5"],["/categories/数据库/MongoDB/index.html","a55efc5450810c366913cd0f37b70124"],["/categories/数据库/MySQL/index.html","1ff6a520d4f6c98ccae5b75bedae9579"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","d9131fd373e9fff03e1cda3dd1479708"],["/categories/数据库/ORM持久层框架/index.html","35f9d1ffe9fbc80eb728c70a5aea823c"],["/categories/数据库/index.html","451d7a6374b8b50496bcc985466fb4d8"],["/categories/系统设计/index.html","9ba183e2accb11407639dfc46e05d694"],["/categories/系统设计/page/2/index.html","bd29c458aa3e75de8d81aaa5cf365ea8"],["/categories/系统设计/分布式权限认证/index.html","204377f90d66943f3eaf7b3c3f295326"],["/categories/系统设计/设计模式/index.html","5ff5ff0b52b6068822b46616845998c6"],["/categories/系统设计/设计模式/page/2/index.html","4d54f92d032a398bbe5da03f86d01e57"],["/categories/计算机基础/index.html","0c859d505585b9f7bd692a7d1b8e7c50"],["/categories/计算机基础/page/2/index.html","2d901adabe26f92166bb2b25c83cb776"],["/categories/计算机基础/page/3/index.html","87611c76be98bcba08e07bad144b3cbc"],["/categories/计算机基础/page/4/index.html","f14afba134c431963b6818fb864250eb"],["/categories/计算机基础/page/5/index.html","1c5769c62adee40912720879741d7450"],["/categories/计算机基础/page/6/index.html","b7539336ad51d1fd521967579937410d"],["/categories/计算机基础/操作系统/index.html","688506de4fe70770ac437e959a80f7a3"],["/categories/计算机基础/数据结构与算法/index.html","b3138502fac4d27d7efc257306e06627"],["/categories/计算机基础/数据结构与算法/page/2/index.html","3557fab5fd4ec37503546a0a07bd16da"],["/categories/计算机基础/数据结构与算法/page/3/index.html","3e1025b5e2acf2fc51bb2ff37560a4cf"],["/categories/计算机基础/数据结构与算法/page/4/index.html","a0f9ee03729cc1185c76ff76bc62836f"],["/categories/计算机基础/数据结构与算法/page/5/index.html","e389166897d3b68b6241c96b1cfb73c5"],["/categories/计算机基础/计算机网络/index.html","f25714be0ff0e39425ea41ce46601e50"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","649c612070002ad9c2859090040895fc"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","40bbc4985e545f75ba4566abb7018593"],["/messageboard/index.html","b37718b9f552e71739ec8f5f377ad619"],["/page/10/index.html","45a1a24f9af99c11075d171d571c2147"],["/page/11/index.html","9b53be5f643e35bf1cafffabf560bdfe"],["/page/12/index.html","ef7b07421cb46ca0bd7985166f5ac138"],["/page/13/index.html","c6275327b134fd5dcbdf1ed23715fa53"],["/page/14/index.html","652218549e6db9e8d6b17e9d5ea4ea0b"],["/page/15/index.html","c32efe26bda6b6ab82e8f62804fcc4ab"],["/page/2/index.html","4b5e67a7257e3074ef9db18f8542bfc1"],["/page/3/index.html","40bf42e3bc0c62cf9df85f0190036f87"],["/page/4/index.html","c3d0e365c7c862555b8a4e1d671d41a0"],["/page/5/index.html","18e1c40bfd05b81db1ab1335a7114a8f"],["/page/6/index.html","d6dc5e0bd358a0811fb5891c573e9694"],["/page/7/index.html","deebc63bc16fd68588fc7bcc8f8e918a"],["/page/8/index.html","96b1026da45d18670812c8d2aa05a5e0"],["/page/9/index.html","15322a94c472bfa01e1d9e54dfcf007c"],["/sw-register.js","900297672bc94976394437cad9fc829c"],["/tags/Ajax/index.html","9b079e7b3786eb3c057530cd6f49e2bd"],["/tags/Axios/index.html","319a46fe1ca065eb67b2c58a51154336"],["/tags/CICD/index.html","e774cec60c5be556432956ba6b6cbdfb"],["/tags/Docker/index.html","0a251ef0ccaeffc45330f073a62d72d4"],["/tags/ELK/index.html","0815e58aa59cd3d7241018d7b463b204"],["/tags/ElasticSearch/index.html","953ffc1f2590e6d0aadf03c9f371716d"],["/tags/Git/index.html","d9d3edd1ce3439db6957f595b7fb2aef"],["/tags/H5/index.html","8e8ecdde2305651abec4f2e37975e055"],["/tags/JVM/index.html","f5398044b641a5906df67af820de8d02"],["/tags/JVM内存模型/index.html","e95e58ca0fa4e7cc6538435adaf2c299"],["/tags/JVM执行引擎/index.html","92f6495262564215d3cebc9d78772da9"],["/tags/JavaScript/index.html","8d3a735798f8218e3323cbc01da5c175"],["/tags/Kibana/index.html","6d09881987c9d87936e37c70fe8c6ff3"],["/tags/LeetCode/index.html","2bc5bdc320d6b5a8cae63beb489f73aa"],["/tags/LeetCode/page/2/index.html","a5e0bd04809c948bb3b676f43b5818cc"],["/tags/LeetCode/page/3/index.html","268438930c04cab223b34680758191d2"],["/tags/Linux/index.html","bc8f3f5c8e91b25fbfa821f647a38c8a"],["/tags/Logstash/index.html","09d7a1b374dde9bbc31bfc963fe2288a"],["/tags/Mock/index.html","f067dd5476d81211e11282c80d28cda0"],["/tags/MongoDB/index.html","11b9769eb891f2f5d3a96d6ac9872d0b"],["/tags/MySQL-数据类型/index.html","aa91cc21ee91089eab3c9d0c892e4421"],["/tags/MySQL/index.html","e8807cd0989112db892143a74216df1f"],["/tags/Mybatis/index.html","2d52bdcc47c002b2f4756179e1b0fc96"],["/tags/MybatisPlus/index.html","bc059550c3e6aa5dcae6e459f7cd4530"],["/tags/NIO/index.html","8d1b3ce8dfde51cf79906312399df82b"],["/tags/Netty/index.html","b6fdf0e890b988f060f32bb0eacd9098"],["/tags/Nginx/index.html","60a11accdb49714b9ea45a3d4af24908"],["/tags/Promise/index.html","22f9936e9c58b5e6909f9459a7d22302"],["/tags/RabbitMQ/index.html","e1792eb28296c36fec27a56ec3055c4c"],["/tags/Redis/index.html","1442459b4438def1e31f634b7e6bb123"],["/tags/SSM/index.html","124fab4b389b48918ee725bbafb7578d"],["/tags/Spring-Security/index.html","50d2ca1f04c97d44694cfcfcdfdda232"],["/tags/Spring/index.html","c7b27a6d85a1f225083e325caf47d8e0"],["/tags/SpringBoot/index.html","699a61f3ba3fea4f0e009c38e54979e1"],["/tags/SpringCloud/index.html","6fe4cb3b7f2198139eedb446c3d2cab4"],["/tags/SpringMVC/index.html","366a3d8a97980fb4b7b4ae1c15f4114c"],["/tags/Swagger/index.html","849aef9e08ae1ef77bf800c63f9d1d34"],["/tags/hexo/index.html","df87740057fb11454076e33aff3651a2"],["/tags/index.html","ee1d1338efb3d9f68cf26f35bb6c9248"],["/tags/jQuery/index.html","cd0ca9813bf885a55d890a73d4dbc42f"],["/tags/java/index.html","b8df137067cf03dea8aa0cf6ea6265b9"],["/tags/markdown/index.html","55cbda2478be7100a03967d5b6471596"],["/tags/noSQL/index.html","b73ebdd49d484bf83d692580fb888efd"],["/tags/typora/index.html","fc3b880dc1d77eec426cd75a2aa0bb8a"],["/tags/vue/index.html","df7d1f6cbcd56f9d687be11e48b4bf23"],["/tags/享元模式/index.html","d7a425591284b50ba49a300de706d761"],["/tags/代理模式/index.html","0001aa67ab3c322d066967adf704cbfa"],["/tags/内存管理/index.html","20ce438961a0db52533330a99eb31f7b"],["/tags/分布式/index.html","22f4757a9b62ec065457e84e0e5aab1e"],["/tags/分布式系统/index.html","5e94cbb3203e2a196491968a99b3dfbf"],["/tags/前端/index.html","afa74183e8db04b10961e76e116ef74e"],["/tags/前端/page/2/index.html","b8a72afc3583b469231eb6c0b615b0f0"],["/tags/博客/index.html","950dd12886e084855766cac7923b80c5"],["/tags/后端/index.html","bd39c776f57a4c8da829bf17eb5552ee"],["/tags/外观模式/index.html","4846c73f64681d9e99f9aa394283c990"],["/tags/容器技术/index.html","6a0e9ace908b8c9c95a6a3c5f68cc6bc"],["/tags/工厂方法/index.html","a8ae0ed03a5ac7d7b4f545f139fb2bcc"],["/tags/微服务/index.html","4baae1c52f23bebdef67821dca931403"],["/tags/抽象工厂/index.html","b618179a23dba54edf02116980d388e1"],["/tags/持续集成持续部署/index.html","19a45b1ca551e782c7d16e718830613f"],["/tags/搜索引擎/index.html","e9e126e46d460a829ab235e6b91d3fb8"],["/tags/操作系统/index.html","9166b968c0d8bc50c06aee1d0b2b1154"],["/tags/数据库/index.html","149f27189b5125269cdc8ce352b0ae8b"],["/tags/数据结构与算法/index.html","88a49d64995d6d7273c09d25d0b99cbd"],["/tags/数据结构与算法/page/2/index.html","799e4e7368547e44b246f4da182ee7f4"],["/tags/文件操作/index.html","c209b50fab211423c7a1ea293f349ba0"],["/tags/日志/index.html","fdfdf761bf9551496630c307461d4a53"],["/tags/服务器/index.html","4d4d24f097060eba9e5f4d0098acf837"],["/tags/权限认证/index.html","4f46570f8d70d75762fc034dae81f2df"],["/tags/桥接模式/index.html","19045ce0eb0266c88f33cc8dc4a13bc3"],["/tags/模板方法模式/index.html","0da2d14b2d7b62646aaf827280e56bc9"],["/tags/死锁/index.html","e175c59e5d1bea80f64decbd56d053af"],["/tags/消息队列/index.html","788f8c04aecb442f6fd9d340b4effa0a"],["/tags/版本控制/index.html","0abbd9c6e22089e8aca0c13f5204c0f5"],["/tags/策略模式/index.html","754283a5864e0f2d6d3ef96b62aab662"],["/tags/简单工厂/index.html","88e7c4dc0cbba3e92e3c9217233152a9"],["/tags/算法/index.html","f27a8cf4ae6b815e5b5870b24c0c9ac2"],["/tags/组件化/index.html","3461c055775dfe0057002198b749e192"],["/tags/缓存/index.html","c5bd153610ebd30a733f1a1eaf77b6fb"],["/tags/观察者模式/index.html","7b668f3ce9eaa0bbd22ce0710429e1e5"],["/tags/计算机网络/index.html","a1ab3686652456ee1f82b2e47a46d4dd"],["/tags/设计模式/index.html","52c114e02194709a017e549b21424e08"],["/tags/设计模式/page/2/index.html","d26cdd56d4f14be21e34ef95cd468d8e"],["/tags/进程管理/index.html","9ba0d4b8354914b5784ad910c4496fbd"],["/tags/适配器模式/index.html","1b0caa7e4fd7f334fe89b86b0f5c9ba8"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
