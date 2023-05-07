/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","8118d4317967328ca6ca805c3b6de374"],["/2021/02/22/工具的使用/博客的搭建/index.html","b8ec9067e7eb8ef08fa089387f9ca365"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","cc185719afd9ec2e4f91bad9482d0b4c"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","503604e98d1a6c119ce8e9977c7172ae"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","fabce4bdad6af0e060c5a5f7f722ff92"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","cc20a9eff529bbd247662453772c55b1"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","4e7ac36430c8d8c148449c1de54cd683"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","f5277679e6a21afa29edc06136e232d5"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","16c460c9cdaf55687151d248da4bb953"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","e8960441015aa02352e318110eaed090"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","8abdbbdae5219623bf9c2d9c1d64ad72"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","2ac7ce0547726be5b1aa627c23aa3836"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","5e00c021aea05719fb510081db51d264"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","42a17fc04080b7cd6bb8b04b0b53b4f6"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","75c9867a030316068fc5cacf99f01709"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","fa365efded1b003489bf8f6c849023eb"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","64cce10746f827cdd4f2a46366667c41"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","6bd3e299d7efa8ed90a5d2a22f4c29e1"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","001ce5ded4b56f556dc2cbae87474481"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","5528dbd883db1b4c38ba83fe83e49faa"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","37413d0533a1ba5dca3fd1e7b3d45c43"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","bdfee201442291abdbba87f92712a42f"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","3bb6048c56b33588536372d5b03d6ca1"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","98a267132f485a0a7089acd579bec383"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","cd51c8fd56d674ec8b9e4a683242c112"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","2271e09188255bdb4bb9c64cd041485c"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","4fc2f54be4106a9e50d9e2289e614af4"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","ec920bdfcc198a0fafb2fd2004fe278b"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","8c68129d98c2d9f8711d0dd21de74632"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","f8711c51153be2467e1e0c3bddea7867"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","0bb4856ccd436e3cf82ddbea6064f1a2"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","e022a1cee1f03bce067a3f8c9cb88740"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","0503bbc1039afa3c2ae4ff1cd3480f0d"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","fee73f0d01cb0c9728fc6cd76161afbb"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","c01d2223fef0009394ba1467b5b9dbcb"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","c007d47e8e38da44ff5c1247d62d02b7"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","b33e14c45d29de888856880abdc72f12"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","f0fe644cceba6479b75549ecb58ff53d"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","b753c97c28d5dc35f3dbad93333b69c0"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","deb223ecb22c6315d5812f540625d275"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","5c2f5ac1656101c166ad1b207860e057"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","a9870ef33072d1be1c72d8203f99d62b"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","0040ac038a4e22af8c526ae3b7e07dd8"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","ac0e32daad5a16ec00d74f4a48e657d3"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","caeda48217da47bca73a744a531fa2f8"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","3b8a019f6427072bbe795c1cf2e3fece"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","cd1b9582d36afac123e0f89be5bf4837"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","3fbc7771190ca505c672195125e88102"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","1535630b03f1a86aa6c2929801ef192b"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","72c35934b39dc924dfac62dcd9d4d158"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","3819076db890071fc661f2dac6feab91"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","6ce7139acace52925b203ebd038c71ea"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","9ad414a07ae83dfe2004da61a432bf88"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","aacda8ca553b01377a4fe99a18bddd24"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","cd8dcb1f6415a9c9d2ad459f0c7ce2aa"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","aefa57081118df0a59c3d6cacc6afe09"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","6053f09a20e1db4dcacb202e7991c9b9"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","a1fa66a34c1a1babdc82b8ef6002b88c"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","b2fadd68beb8f0924b226faf2a117abb"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","146d6d55b7cb4cb26fdd3640e6d571c2"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","c9993eac5f6b2eeb405889ce3a895dc9"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","b33c6cb9469b936a9479c7f8aafc6803"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","5a40ff093804aca5a122cb74f2a3c6c8"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","1d20238c93236f8b194177c082ec34e9"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","32dde882fd6d9d009441b60afab64a73"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","dc002ab2bfbff82f1e839379a30334ea"],["/2022/08/17/前端/jQuery/index.html","8117467d31f8381da49489d1229de0e7"],["/2022/08/19/前端/JavaScript/index.html","392ab2e8819f0752bebf85086d24abce"],["/2022/08/22/前端/Ajax/index.html","295c08b84c686306404ce4a73dac49ac"],["/2022/08/23/前端/Promise/index.html","af10dd183d02f51e5fc77dc7449b7941"],["/2022/08/24/前端/Axios/index.html","c6e4ad0d90070035b284e235e877005d"],["/2022/08/25/前端/H5本地存储/index.html","75aaad7065d0c1e66bcd4b5c790e0458"],["/2022/08/26/前端/mock/index.html","c24abdbdda5448c0338f60c7f0734dc3"],["/2022/08/31/前端/vue/VueJs/index.html","9608bb93e4997ee319ecaa3056f1b017"],["/2022/09/01/前端/vue/vue组件化/index.html","8f76e6694421301def232a1b86cd9631"],["/2022/09/04/前端/vue/VueCLI/index.html","61ee5f60c955b21608486fd997d62ff5"],["/2022/09/07/前端/vue/vue实现动画/index.html","6d85131e3ceada1c9a26ba1183243e9e"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","d261911b2d49e00322f68245b2cabdf3"],["/2022/09/10/前端/vue/Vue异步请求/index.html","a08cbd9b60b6fb0abb642a7f5f857f95"],["/2022/09/11/前端/vue/vue-Router/index.html","d7eda85d8bea580eddb83959eba6315a"],["/2022/09/13/前端/vue/Vuex/index.html","e18ae1c81f70d051e3f0607dd0a28edc"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","f26907257230b6c541f18d6e90a42afa"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","d84292786344de2fcfc689af5310b09f"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","274e405e70eb5c776e3160d08c00df6c"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","617dd6872c6b26fcfc6a19f86fdccae9"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","cee40ba34569d5e71c29020dd55463c4"],["/2022/09/28/DevOps/Linux/Linux/index.html","6eb52ec5ac2f552e2a0cd9c67999d5f1"],["/2022/10/02/中间件/Redis/redis基础/index.html","3dd4e7660c109ae66c7d1f272af46eed"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","94a38cbaf70233b1bbe8ea84ff45c46f"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","ebc7e5cfab0ecf1915f5cd9f8cecba0a"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","6c071464852313bac54de989251d9587"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","6c86f09b297c036abc24881d12da336b"],["/2022/10/17/中间件/Redis/Redis集群/index.html","cf85c88738a47e466bbdd13a4db50a7a"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","99f53d9f19091915aa37bfda3b08a98e"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","d4cf9d5977802ca7ba712d34c131456d"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","2fd3ba66b18ffed08171230718e305f3"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","2959eb60c4ec121b5821c317e6ad4651"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","6c8d288519e5d4647db7e8f500695104"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","7e093a955583256fd9c9049b34363483"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","ee8e4c3d1a2b781f5e54225890bb24cd"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","4a1da87b9a0e0261727718f20c197d1a"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","4df25c12f808f285e3cc31bbc4eb9b3c"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","7ee96b23a2fcc9bb362c70e41549f871"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","3ae0e87fe45b1511ebfd0a3331252866"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","9b7dd6bbc1f8c125271ca2f34bf53d68"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","1494de3e0fded5fbc8934988d2b1f27f"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","fb0ef1d0305752b840c2594001b94ef0"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","73d5453d81062af90afa7954926ca803"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","f4fe4409890459f1df1edeef0d925c10"],["/2023/03/10/DevOps/CICD/CICD/index.html","f3942df02a598a5a290ab80d29ade3be"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","4bf37da5cffde8bf790d1fe23dc11e54"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","ede0f51d8f0e436781ec5fde3b96bde1"],["/2023/03/13/Java/NIO/NIO/index.html","c484fdbe8bd159304b29b963dd9e4734"],["/2023/03/14/Java/NIO/Netty/index.html","b34f2985063028bfebdfde1fd00846aa"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","865296364aa5a6700eb62e57698d6d4e"],["/2023/03/17/系统设计/分布式系统认证/index.html","4bbe7cec47f67abd699f68af16e5bc5a"],["/2023/03/19/Java/JVM/JVM概述/index.html","cb8fb7894b511222d34aa0c4e84b041c"],["/2023/03/23/Java/JVM/类的加载过程/index.html","e3fbb2594a91d99d7c92a8810a72506d"],["/2023/03/28/Java/JVM/对象的实例化/index.html","75f6af641f460df5284011ab0b2de887"],["/2023/04/01/Java/JVM/运行时数据区/index.html","abf186b5af22c812797c5cc426c5403c"],["/2023/04/04/Java/JVM/执行引擎/index.html","c30e4816a5ded5f7233b3fb37326d63f"],["/2023/04/06/Java/JVM/对象引用/index.html","ef08df41f2be5bfd173ec8310ef60d6b"],["/2023/04/09/Java/JVM/垃圾回收/index.html","4bf531194e34d87f4b25fa3117a2cf7e"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","77cf14f43fa94305c7370e3b49a24e33"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","aa7ad0472aa4f1c398c92fe86ab5ce44"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","ad421ed3b9ebd305a34c7ff5bc0f902d"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","86a2c35f044b2639d0efd26620d3afc5"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","a971bf6598fb43325471980496643d28"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","73c3dac8bc59ff73c8e8c33e2eea941e"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","b6b27ee6451ec4812810e9c3e2e9d18b"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","3aa5bb6e88c55e8e41995f56ecc89de2"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","b3764f5ca860a5195d1da50dc1c3dcf0"],["/2023/05/05/计算机网络和因特网/index.html","6be3f96c10a3dee0118a2370ad188680"],["/404.html","0ff65fcac0050beb5aabe43abffc9109"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","2d1d8e45ce8ebe8827eb9e902c2b9fca"],["/archives/2021/02/index.html","290f4e114b247130df0a3d2d168b421d"],["/archives/2021/03/index.html","0568a3ebc7b2b12ca1da6f946c74819f"],["/archives/2021/03/page/2/index.html","f08459e03304506aafd17b7c75cf611a"],["/archives/2021/03/page/3/index.html","47f30245826ebb7f41598944e1fbdc47"],["/archives/2021/04/index.html","8ada5661c37f435ab7440b71176830ff"],["/archives/2021/04/page/2/index.html","d8d9f8e1486d89dd4ea9dec9e18c8544"],["/archives/2021/05/index.html","dd10611734a4a9632e25e2d337714e59"],["/archives/2021/index.html","6486edb976fbba0b5fe63538779f3576"],["/archives/2021/page/2/index.html","569cb46e43c52ecbe4fce5cdad78eb9f"],["/archives/2021/page/3/index.html","f5e02009ffb2e72fd417ecdfcb8c1752"],["/archives/2021/page/4/index.html","8a3cc456e1b9790188304d022f8b7d25"],["/archives/2021/page/5/index.html","df627235428ceda4bee8f0814683baab"],["/archives/2021/page/6/index.html","ad42153540505dcbc989d6998d245acd"],["/archives/2021/page/7/index.html","f37e96e46fb9a3e52c80c2e5c265f2de"],["/archives/2022/01/index.html","8cf6cbf505bbbd69fcbc2370a8df4ea2"],["/archives/2022/04/index.html","88a57629769c51a2ff69db054159714c"],["/archives/2022/08/index.html","4a51f9d2251a9a4b27559774b2bd1a67"],["/archives/2022/09/index.html","9b0a574445b957e049afb6f7d06c9990"],["/archives/2022/09/page/2/index.html","43d0500f9751aa60b1d6df9a48973beb"],["/archives/2022/10/index.html","1097de172546e8e5f72a8bfea1c68c51"],["/archives/2022/11/index.html","c42491f79553f8bda884a9db0c23a4cc"],["/archives/2022/12/index.html","6127b7364ae02093a9c25573fc6d08fc"],["/archives/2022/index.html","4238a955db773f7e4381f35b3fc7bbf9"],["/archives/2022/page/2/index.html","43d549632da8fa5e1019cb707ba565a4"],["/archives/2022/page/3/index.html","8a5e3006528cdf6b64663970ad62b038"],["/archives/2022/page/4/index.html","c7e88eb619b534a7a2e9a5b8dc38f99c"],["/archives/2022/page/5/index.html","07b5563a631dcbe0d7118355099c127d"],["/archives/2023/01/index.html","72def5e39c2dd4948de22a526f78d6e3"],["/archives/2023/02/index.html","edf19ee4db89d689572648250a5dcc72"],["/archives/2023/03/index.html","0c7e02bc80ba02568ebc5cb29ef25e69"],["/archives/2023/04/index.html","b0fad05a7d09cccf08b85e52e5b91437"],["/archives/2023/04/page/2/index.html","0a175787d840db3636d867d670ada25a"],["/archives/2023/05/index.html","7c25cb11b808aaad187eb6755731ee44"],["/archives/2023/index.html","77d9ecb52537ded522c9c32d6e41aa9e"],["/archives/2023/page/2/index.html","3e62df5cb52a28b6a0e53e1f5a11e56c"],["/archives/2023/page/3/index.html","7fcfde0bb306259ac2c06f22b4d98f6c"],["/archives/index.html","c1ee16dfe3430031792f6423b71b6830"],["/archives/page/10/index.html","df10126a9293379dcef9ba7eda26f2bf"],["/archives/page/11/index.html","7ba3e109cd1805478f0a5b4d8a69e86a"],["/archives/page/12/index.html","361ee46b8848ff525a2899291f6a1b2b"],["/archives/page/13/index.html","7e9127de8977d9188c3eedb6a622a533"],["/archives/page/14/index.html","22b636d5c3c9bca0f2d2ab63ed1f05cb"],["/archives/page/2/index.html","6be9056eb565472b1e5656a4038bbc62"],["/archives/page/3/index.html","e6da565d7b558e1eda46c45a74c7dce8"],["/archives/page/4/index.html","ad470fd1af9f827ec928d8788d0d88ba"],["/archives/page/5/index.html","8c5d1b0aad8b66e3a1b2a6f18f27dfba"],["/archives/page/6/index.html","b674230c93746da0a416a57b94cc24a4"],["/archives/page/7/index.html","ddc8e2a7e4e532666065348cd3079f4d"],["/archives/page/8/index.html","a7e429185808c23aadc9900917e4b5ba"],["/archives/page/9/index.html","4460df9838b418c2b18714e4a31c0355"],["/categories/Devops/CICD/index.html","4f3f4b9e8168c22381c7ed198c336128"],["/categories/Devops/Linux/index.html","f57ed80ede9e73294bcc9a8903a6b2d1"],["/categories/Devops/index.html","a1213ccf653cf8b484119fb9df7cdcbe"],["/categories/Java/JVM/index.html","de1e60131f9cc1beef886096e93e3cac"],["/categories/Java/NIO/Netty/index.html","5b54cce8e84ec313cb3e18421790c17e"],["/categories/Java/NIO/index.html","7b5bfa96d809c0d1260333a1e66ea376"],["/categories/Java/NIO/原生NIO/index.html","5837e37fc89f494a89962f616fe6ca7e"],["/categories/Java/index.html","b305ba4c6af5c2feb28728cb42ab997e"],["/categories/Java/page/2/index.html","60d3471bf65ad12b6e385abeec2c9235"],["/categories/Java/学习路线/index.html","0535fe4ddc01343c24684566adf4e441"],["/categories/Spring全家桶/Spring-Security/index.html","46518aa15f0e4fd4a9626039b056653d"],["/categories/Spring全家桶/Spring/index.html","2fc754f61939d74cb6e549a1b47a7d00"],["/categories/Spring全家桶/SpringBoot/index.html","2f1eaedf7d7983d5985d9e12929aeb33"],["/categories/Spring全家桶/SpringCloud/index.html","d1051bd22034abe0fece8d262ede691c"],["/categories/Spring全家桶/SpringMVC/index.html","af51aae8e652b458a81c03582ca7d6d4"],["/categories/Spring全家桶/index.html","42f234e348919399015128f327486fd6"],["/categories/Spring全家桶/page/2/index.html","6c483029fe9c96b17a36e24c8a62dfc7"],["/categories/index.html","752ca218c36597a5caa704cad866383c"],["/categories/中间件/ElasticSearch/index.html","000f196f8e1ca136209355ad6d794701"],["/categories/中间件/Redis/index.html","f95a873512b4d5530044b2caf96ac35d"],["/categories/中间件/index.html","2cc9e47676ee46a334f1d0aed8382e45"],["/categories/中间件/page/2/index.html","631354d742426a06de04a84067045fb9"],["/categories/中间件/消息队列/RabbitMQ/index.html","e6aafdc90f06978b7c5f4e8c706b0234"],["/categories/中间件/消息队列/index.html","b807dd4cb21baa93df89aec73bc8ab4c"],["/categories/前端/Mock/index.html","2911f5b8d59126610c0e1d914105209c"],["/categories/前端/Promise/index.html","a625be78712624a440f6570f6b8911c3"],["/categories/前端/Vue/index.html","47815745b25563e21d05799d469a75f3"],["/categories/前端/index.html","50a44d6f825886c5161127db36e74835"],["/categories/前端/jQuery/index.html","38be40859750bb8b38d8744310e30210"],["/categories/前端/page/2/index.html","0e687f472ac31e4528051bb4cb9d6658"],["/categories/前端/原生基础/index.html","d246a59aa82d3a2c2eec39e19fc19012"],["/categories/前端/异步通信/index.html","c3567e1bb58eb3f2594fbf93c05c29d5"],["/categories/工具使用/Git/index.html","fd67a3b1ecc74248cb7a120a3a72e57c"],["/categories/工具使用/index.html","0af754b6caefce25d62b8fb710bb0473"],["/categories/工具使用/markdown/index.html","007ff2291525d7810776c2788b488045"],["/categories/工具的使用/Docker/index.html","0bf8c2fc940e2fc46c829d36a991dd10"],["/categories/工具的使用/Nginx/index.html","2d5addb1c6358bd1b114953122156e93"],["/categories/工具的使用/Swagger/index.html","9bd80a2f5f5d6fd1c4064fc06160ba1d"],["/categories/工具的使用/index.html","f5d20861b9f3130261b0f214ba547db5"],["/categories/工具的使用/博客搭建/index.html","5cafb216217a7496e4aba87cd6b915f7"],["/categories/数据库/MongoDB/index.html","f9033ad4972cb9a22393e04c2775476d"],["/categories/数据库/MySQL/index.html","19e3ba310651fc6e2eec6b69099cb358"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","bd0721a9f8f6735e4156208f48e72b37"],["/categories/数据库/ORM持久层框架/index.html","eb81642c4082c80fdf0837c41e848b65"],["/categories/数据库/index.html","99db9dc352bc89a756802bcf595b9538"],["/categories/系统设计/index.html","61818a054f6491b28e620d5993de9c88"],["/categories/系统设计/page/2/index.html","7075edf5a7718fd1221c1c3d825d524e"],["/categories/系统设计/分布式权限认证/index.html","7cbd11a2cb492e98ba65343095ed5d18"],["/categories/系统设计/设计模式/index.html","57f689c00376e2760a5f96d08266a3cd"],["/categories/系统设计/设计模式/page/2/index.html","8bba39fb72aec10ff6cb483680d9a5e7"],["/categories/计算机基础/index.html","8f6a48461049dc5c9b77cd32ab631b69"],["/categories/计算机基础/page/2/index.html","4124b7a013c717fce8e1a415cae81c3b"],["/categories/计算机基础/page/3/index.html","d2704efa31ba06e83d59939aae63d020"],["/categories/计算机基础/page/4/index.html","faeb4e46eea96e1d94f492380b0949d6"],["/categories/计算机基础/page/5/index.html","fd61acddbc255cb169fff592efcda5d7"],["/categories/计算机基础/操作系统/index.html","89f2bf9da05e48d99954971f6664cc89"],["/categories/计算机基础/数据结构与算法/index.html","a46637d4103bd2451d76aef2cded3630"],["/categories/计算机基础/数据结构与算法/page/2/index.html","a59317bac2b1614adcde10e19d7e6289"],["/categories/计算机基础/数据结构与算法/page/3/index.html","007cfa7dd1a0864d3939304b66f70a60"],["/categories/计算机基础/数据结构与算法/page/4/index.html","5450e20e279c13f34184a8ae1cc00b65"],["/categories/计算机基础/数据结构与算法/page/5/index.html","d499f61ce4389927cef06d14a925e56b"],["/categories/计算机基础/计算机网络/index.html","196647004e683a7dff9472e7171874b3"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","1809000cc661f71fc49631cfd947881d"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","796914c2c568c63276d441663e27cdf4"],["/messageboard/index.html","cf761e91aeadb4df78ebf00e9adea73f"],["/page/10/index.html","ad22a4311bc659add7ae747c05a805da"],["/page/11/index.html","4b2d21643e6c1812154703ef369b7ba0"],["/page/12/index.html","97ea94abfcae317293444691c877cb7e"],["/page/13/index.html","bc983643f844b60747d8282dc7ecd77e"],["/page/14/index.html","e2e029deb7d881af8a502a6c971902ea"],["/page/2/index.html","46f7bb10c4613ba21fe6181b434adb9f"],["/page/3/index.html","f79d711edd7e9016ea38442d480eeaef"],["/page/4/index.html","04793ca9f5a8c752c6084e9d0224688f"],["/page/5/index.html","3b64583730f6676c594c4da13e4a7ae3"],["/page/6/index.html","f38269e8da1c64d7d04cf785c4a0fcb8"],["/page/7/index.html","f79af3b28d97b0062ab54a218668ef1e"],["/page/8/index.html","cfb00edf39ae5f4d0458c87ae3998078"],["/page/9/index.html","4b424aed98087a3bf0ae64e2dc5c082e"],["/sw-register.js","0ae87b35190fa1bd198f1251e1eb37e1"],["/tags/Ajax/index.html","5b1f3987e0a55092c0c456d581cd3f60"],["/tags/Axios/index.html","85f14c3742eef65fe9ebe8e4e3a58328"],["/tags/CICD/index.html","ec6e6c2c241ff892e1dee8888ad7b1fe"],["/tags/Docker/index.html","38e0dcbf702fe3f20b46ce6c731538fa"],["/tags/ELK/index.html","dee631d95f2cccda64993c38fc3c9293"],["/tags/ElasticSearch/index.html","4a5b8deb2ee9fb40fe1d86eb8adace03"],["/tags/Git/index.html","329b8487ad9e41dbf6f2474aedea5522"],["/tags/H5/index.html","58db44f5de63ea0ff5be1a7345e52894"],["/tags/JVM/index.html","b7427136593be28bca570ccb7cd039ab"],["/tags/JVM内存模型/index.html","8a5adca464359c17f5f91f26ab4521bd"],["/tags/JVM执行引擎/index.html","696a377ee4076bb618b2ab337d492dbc"],["/tags/JavaScript/index.html","ae5918c1dedc22bc26c8628df451dda5"],["/tags/Kibana/index.html","449507f92732bb88eb1d4a7c416a2dc7"],["/tags/LeetCode/index.html","7ac93f4b9e2a47150c29547f2981c883"],["/tags/LeetCode/page/2/index.html","d610c9ae2cc0fb28f31aeffc138fcdbc"],["/tags/LeetCode/page/3/index.html","93fdbd88ad68dc4bcc22f64d8efb7267"],["/tags/Linux/index.html","17b28eedc3d83f26546be3a944d9a7f3"],["/tags/Logstash/index.html","ec1ab94b26c993e382dcb1826af10fe5"],["/tags/Mock/index.html","5ad03a74591bc9c807a898ed6e7f44a6"],["/tags/MongoDB/index.html","3277de649054e2ba2119922bcead1247"],["/tags/MySQL-数据类型/index.html","80009ee46b6092b5bf4a6a39a5e74fa5"],["/tags/MySQL/index.html","f16178071676245bd55f48f15323bdce"],["/tags/Mybatis/index.html","055b87e93a139fa16bcce1a085d9f868"],["/tags/MybatisPlus/index.html","c6094ef9456f2bad0b9c3555ce3377bf"],["/tags/NIO/index.html","da14b356c5258e124c9f8f3ee81b2f5c"],["/tags/Netty/index.html","cd1f1f2ed9945da6b6e4cc4827be22b6"],["/tags/Nginx/index.html","e93d717ce1bb3577b94eaf9aee6a13b7"],["/tags/Promise/index.html","25755143c8d75c1cc1baf58e07fd1f0b"],["/tags/RabbitMQ/index.html","b7ce5885f78d9aa2e293209146f2a71b"],["/tags/Redis/index.html","ff53f670daf9871c2845bd2b7290e17e"],["/tags/SSM/index.html","13a768f36d004ca286199dc251e44647"],["/tags/Spring-Security/index.html","a2dc565e0ad2fb96e80f2a9bad95cf59"],["/tags/Spring/index.html","e3b1085eabdc8a776ef6efeb740a4eec"],["/tags/SpringBoot/index.html","8c9bf1e02b8052788314c056bc059a74"],["/tags/SpringCloud/index.html","d3aaddf28edab71a2cdbd537a888a85c"],["/tags/SpringMVC/index.html","c18c7f8fdbfe950213803164dc9eed8e"],["/tags/Swagger/index.html","7ef903dce389a7bc0c4e355c18ba8527"],["/tags/hexo/index.html","81938f4107514ea79c355a586b4426fb"],["/tags/index.html","853c8666e5e066ce727f8e320f3300e1"],["/tags/jQuery/index.html","ad9724a00b97306be79973e05e6dd894"],["/tags/java/index.html","e36fc3310d015a9920d1ccf03b87fe50"],["/tags/markdown/index.html","f16d83a9ec0ebb00d0074c56699a70d2"],["/tags/noSQL/index.html","1ffb9112bc98921b3efa879115094c59"],["/tags/typora/index.html","d6788c39f2f1f2887c717cdc7aeeda8c"],["/tags/vue/index.html","2b8aced243ca33f4ee21ac2ea55d5993"],["/tags/享元模式/index.html","a7ccb29fec1526af6d54f6b057c3760f"],["/tags/代理模式/index.html","9f66ae3fc846150998c6d7e147df9536"],["/tags/内存管理/index.html","a6aabdcba110c12f84908fe487392091"],["/tags/分布式/index.html","c8c1774453e18c09144bb83bd92edcde"],["/tags/分布式系统/index.html","8356f2d8ff19fd3c2c6028290e023bd6"],["/tags/前端/index.html","f0599caaa21f4437363f75502ce191b8"],["/tags/前端/page/2/index.html","e632a92284a9b25d5c280d876506a46d"],["/tags/博客/index.html","f5cd8cd6e4e5206fa7fcd24a237cc263"],["/tags/后端/index.html","9d62e7cd7cd3e4c7415a34b6ace7aab1"],["/tags/外观模式/index.html","a2eb3dddaddb915115f0d390411b1241"],["/tags/容器技术/index.html","2ce1170b62a8a4492b34581dcf179b09"],["/tags/工厂方法/index.html","b6b64e38c7a803b6c79b2f81afc0cbcd"],["/tags/微服务/index.html","db4ce993832d1da53247dab7bb1187d8"],["/tags/抽象工厂/index.html","bcf912ebfbc5a8314d7374b203de3719"],["/tags/持续集成持续部署/index.html","c537745db1fbf18188d9348bb4eff237"],["/tags/搜索引擎/index.html","de345d778941907e3bc479763935096d"],["/tags/操作系统/index.html","f6eb01f5c36de727b67138ae5a79fcd5"],["/tags/数据库/index.html","ccd42e816e7b60e4b34626e5c726cf3c"],["/tags/数据结构与算法/index.html","0a2527d2114e76c5397923d449aa6a4e"],["/tags/数据结构与算法/page/2/index.html","ea55142fc91a3de3246f37be6f2f2df6"],["/tags/日志/index.html","86100767822e3ac001a7a1f30d3e207f"],["/tags/服务器/index.html","4bf703d107e2d7a8af79c94a4de6f1c5"],["/tags/权限认证/index.html","1e48e48cee45bc0f92248f11548abf15"],["/tags/桥接模式/index.html","99173a2896c4ab7e267edcfe4ec43d64"],["/tags/模板方法模式/index.html","12a85f0867ebc937513afdd08b36e764"],["/tags/死锁/index.html","4e1f4afbdf6e3a9e780ec16ad3160a80"],["/tags/消息队列/index.html","a3e9b8e98b420a7aee643e3a84babe3d"],["/tags/版本控制/index.html","88b5f86cd8cc49e467b3febe082f1aa0"],["/tags/策略模式/index.html","8921cb3bbd0357816de98da80e09acf5"],["/tags/简单工厂/index.html","5d1d8347ede3c7c6f70d0ac64678fc1d"],["/tags/算法/index.html","92ad0c1db6e4901ad346356e618e1c55"],["/tags/组件化/index.html","72ce975849d6535156750a41a11ed70a"],["/tags/缓存/index.html","08b0bd5472df25eb4ee654b7f13fcec4"],["/tags/观察者模式/index.html","6729d1414e082ed30b231efd03343443"],["/tags/计算机网络/index.html","b93c03ee9414cac2b6b5400410e94492"],["/tags/设计模式/index.html","f428a4c87bb990ab41f8ee8e1c581675"],["/tags/设计模式/page/2/index.html","c2f2384630410bed7f8843d82b66528d"],["/tags/进程管理/index.html","2c283b4134bc0f9e4fc7b137e3f3cbb0"],["/tags/适配器模式/index.html","5ca9e8f68d53d262853756864cf36ea1"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
