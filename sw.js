/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","7ca75886e8f84c8ad2d941f5171387f6"],["/2021/02/22/工具的使用/博客的搭建/index.html","bf24047e54354589f62c2ccff1d9bf9d"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","26d75c1aabf5774998a3f5bb45c4fcee"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","d0362e5c077e6a047ce2deb4b6f61001"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","e3bdd03e033b9a86d962e83dacbe805c"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","eea3d435a4154d70e322cad903372c80"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","5869d9610909ea0b62699761e5ae4569"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","6dd274c3d5073037e38dc4c686d1e29f"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","cd5096815e83c86feacd6271e80a29dd"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","46006dfd5fe88e58bb8f7fae35bfcd5f"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","ce5effef3e1768562d9b65bc6498987e"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","6127eb3a18b6c20d2aa211237a40b411"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","6c7dee66bddd20aebbcb5380bbbd70be"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","23b32b1d1a27327bf1a6567377eeed0d"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","8ce8cf8b3f1354cb57cad391c52d07cb"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","ba958ad00520ceb5563e80b6c3748b1b"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","fafe448052e3007a875814322642de33"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","daf2a0192960edb271b0aec856671533"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","e3f1d0edec3c3eb46995bd60708ef93b"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","79c02fb8ebeb0873b0b4d205b79994aa"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","816a57094e21dcbaa2ce22b6484ef147"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","0b6c0f6b217a22389954dc12ee1e7299"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","0e542ab94e91891f104b35189c96256b"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","e3adf62fa03b70199ef3b8d84b610d7d"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","c29fa816fe17ffe4b45580a8c75ec62d"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","212b038160b16527c108a74983b595dd"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","104950543ff15240895e400aa1381965"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","c0c07de4019964dd97decd19658e42fc"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","2aa38a848d5866d3d78c962a3b816588"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","c5a665265c595a674c1f3acc220d4aa3"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","ec45d5d9fff395b9d23e3a086fe9e578"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","e1e5f93198ba1eee4dd47df2f1728df7"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","5f84d28052f94baffebcc4c0add6e9ef"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","f64371f8df012936a49085ea273e912f"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","15a29e8f263078c86c43069ad72e5dc1"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","0540afe37819c3f646bae91c81167e91"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","1ee1a0bd315a2c49176b1e92c166e81c"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","afb23a252e66bed6aa4bdd982ef86ec6"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","b9d40e9312a960457a73af331fc8103d"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","18c9eba870a9e8d9e4d7acd331c6dee3"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","d7ec3c9e7e28d76c8bcc1b6cfe9b0f7b"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","fca0452a25cc6cbcde71822e10a10b81"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","ce5e7ffdf825b5ecfcb38be15b9582b9"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","088f86896ec879038deb132154947c87"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","a1217d093405a4ad339997212c5fedcb"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","48fff067bab8562bd84dba00950c4fa6"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","e13a32140f83b8b4c2c227a18017b937"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","67264ec9364af82c06a1bd72e0202f03"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","0be33fc0c22dddd1a57bb9da16db96f8"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","5ab3ff1a91fe475e32fe849d7a7cd14b"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","cb15b5f3381ba4263d2df59ed40788be"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","9e41e06a2c39b0ed6b5c0a6759caf1c5"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","aad40b9c7b1e3ce72219786fde8f6a4e"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","6d4f59c3cb4daa8f4f17edca781672d6"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","92f0686c5fc57274e08e534637b6e208"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","0ec3cf76c9fc3ebdaf8f968a16506ffa"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","d172e26318290c218eab67d69b05768e"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","9119b311123e170f7228d09b71f705d9"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","8b87bb3af992d06e06b81f1a1274dd78"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","76f76d59ea696e1d28ada28e57dad4bb"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","8cca46d977c3711a63ab1e0ab5a2559d"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","6434afef3e78d4f21d7edfd2c139eca1"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","5ba686edc186fb38c98cbb60c0154dac"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","ad662625f5860892780079d2e823dedb"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","12636817d95b54664e16f1f48dcdc266"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","bd4fd9784f1890acab29c3da1be7cc1d"],["/2022/08/17/前端/jQuery/index.html","7d70e78141a3335fdbac24078205ee68"],["/2022/08/19/前端/JavaScript/index.html","dcb37d925b899ff27dd0e25597ded5f2"],["/2022/08/22/前端/Ajax/index.html","82aad511725dba7e04a378a664e17541"],["/2022/08/23/前端/Promise/index.html","81d4f8837c41dfb9c34520a6dd2f6270"],["/2022/08/24/前端/Axios/index.html","0f051477b91c743b7eacc88d22a5dd1f"],["/2022/08/25/前端/H5本地存储/index.html","6840513c2c76057e8ffaffddde1045ef"],["/2022/08/26/前端/mock/index.html","76bcec055f83e9e76858310bd16b3c17"],["/2022/08/31/前端/vue/VueJs/index.html","8f9e8715092e108ab2021cb4373d9ae5"],["/2022/09/01/前端/vue/vue组件化/index.html","aad5f798dcbd5e1ed8a13e4a9800aad9"],["/2022/09/04/前端/vue/VueCLI/index.html","c092f00470a99911a157a00b00a299e1"],["/2022/09/07/前端/vue/vue实现动画/index.html","7343d78ddecb51a8c9b9a0929918bef1"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","2417d818134ca4afdc35ad30f890b4fa"],["/2022/09/10/前端/vue/Vue异步请求/index.html","9a908d5e87d7f31a54a80e753c8d07a7"],["/2022/09/11/前端/vue/vue-Router/index.html","afd5bf0fec34cb690c397d0dfa99064a"],["/2022/09/13/前端/vue/Vuex/index.html","3c75596ad2c058cc9a62476655c3579b"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","70219fcffcde606f7ed340b279d2a8cd"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","1e9abb224b1fbae394690a69da75c77f"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","40c3f9487e317e706bd88917ef909511"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","dbbdf3440c93e447674e3d5da6ce0ae5"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","cf7a4aa9ad34bc32c641eed6454d67a0"],["/2022/09/28/DevOps/Linux/Linux/index.html","caeed8c92fd7fb1c3a354001f10e3be3"],["/2022/10/02/中间件/Redis/redis基础/index.html","b9526c45044eb48658daf6c1c5ee436b"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","4659d80c2e8b642d2f34f72e00258397"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","5e9a3394eb8e14cb2017c4a0afbbf009"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","ba647817a04b2b8f7a9675ec366e738f"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","7838d1991d13ee21b19280c376718419"],["/2022/10/17/中间件/Redis/Redis集群/index.html","cf128e08c5b42de04fb5d7c8a65350cf"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","c39ca440ec227c650769bf70690e48a2"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","a6758668811fa733581928edc5ca4e2a"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","f46259ce8360cd7ed994d7b6994ac9a4"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","69bfa0800464863a96943772c9cf46a2"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","e4d5bc500ef71fc730a6ebdb72882f6c"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","9bb89b88a046c11bdeb89fac19379e0b"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","3bd18a78ff0a4b0b33e27b857ced8cb6"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","eb9b79da9c5f762d072b11f6f6e0435b"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","c95f227e1b712e15f1a97dacb4988f1d"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","d3e5fbbc6ac7c0aedd05d1d45e460ea2"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","a15614a3ed78fff59ebe5ea27854ac35"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","6f1c7110c6223b469744db1eb76cd29a"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","c652cb9becee7a41d262d479dec20d82"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","b4c9d729066c88263642e75b1b6d471e"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","40c91fe41e394a5bfd2b7a23b135201c"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","a144dc9af1b43a4afad932c0f16a58b1"],["/2023/03/10/DevOps/CICD/CICD/index.html","97172c462b6d4b2231fc18802cf8c796"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","aa540edf0fcdc531c07228751a720744"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","62a7ec293dd421b2bb87ab119e56a767"],["/2023/03/13/Java/NIO/NIO/index.html","3cd6f67c7494008abb099143a27fd6c3"],["/2023/03/14/Java/NIO/Netty/index.html","7cbede60cf7d9565c96829ed59d0f2a4"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","580503c2033bfb5d7c1ed1a1f4c2f435"],["/2023/03/17/系统设计/分布式系统认证/index.html","1b1874a0bbf0eaa97654badd54090a15"],["/2023/03/19/Java/JVM/JVM概述/index.html","ca850d3f92cc9c73471111affd779728"],["/2023/03/23/Java/JVM/类的加载过程/index.html","3ca252bfe512b50347a6c1faca4adabe"],["/2023/03/28/Java/JVM/对象的实例化/index.html","b8e7a74643dfa263d1ed29c297d0b1b6"],["/2023/04/01/Java/JVM/运行时数据区/index.html","ec18f7532190154608ebd92a8cac1218"],["/2023/04/04/Java/JVM/执行引擎/index.html","791ece1dc289de897ad6a3808a2ac4c1"],["/2023/04/06/Java/JVM/对象引用/index.html","8d330761b7f8c56f5f10b8114cae6384"],["/2023/04/09/Java/JVM/垃圾回收/index.html","a2f68c72746c26adf6265b6a53678f29"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","7529879cec8cdec5f2effab242f3ff99"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","1a94cf4a881be06973bf0934fd2aad5d"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","e3e3560d7a659c800bbd81350b24d3cd"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","91796c784a2f4eec7b3f4f4dbf96b5ad"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","8da1e1c9a60f9572ff9578364c2a861a"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","eff33e7c555867f7746e00d6ca6d7c3e"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","50dd1a30fb6ca61e7b1f580f86e56135"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","adb58f46832915817811cf8e14eb407c"],["/404.html","6750387a3d29332e2550219ecf28cb46"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","cccd8824d22fc5ae04ebcfd9b27a6c69"],["/archives/2021/02/index.html","0987ba6431e7b5256d92d7bf5497bfbb"],["/archives/2021/03/index.html","4e4bb4a3f867f790810cc62a1bab918a"],["/archives/2021/03/page/2/index.html","c14ab5e45f9977cd4b6c426f947c8135"],["/archives/2021/03/page/3/index.html","138a70c74dbb2c9f03e46f1b2c3da48d"],["/archives/2021/04/index.html","98316b3674677094c6a58ef74ad6aa3f"],["/archives/2021/04/page/2/index.html","f5f2ef17fc57f3ea4d4cb375b0059f8b"],["/archives/2021/05/index.html","1c9f738402736ca5217d1bcff2fb80d7"],["/archives/2021/index.html","eb08c2dd1f8cd07c5e1d13f3579cafa6"],["/archives/2021/page/2/index.html","ce0ab110758204c4ec45a3c9e244ec51"],["/archives/2021/page/3/index.html","07bd44284d417a7ced55eb4515714b20"],["/archives/2021/page/4/index.html","22dadfd60a3d9a4dfb2b1ba9d24cc739"],["/archives/2021/page/5/index.html","0a50a1dc45c1b95390eca04d9bd92f3e"],["/archives/2021/page/6/index.html","cbcb9296e07becabd8618eaa7cfa4cb7"],["/archives/2021/page/7/index.html","8b01bc13fe8bf03be081884eabf3528d"],["/archives/2022/01/index.html","b156fdebd7d2db0299b71b0d3120c8e7"],["/archives/2022/04/index.html","62575214770ffc5a58f66f87e7e64195"],["/archives/2022/08/index.html","e3e8e9c049bbeb9f560ca0bd441ee615"],["/archives/2022/09/index.html","3088476e940babfddac2f867c2e14fdd"],["/archives/2022/09/page/2/index.html","4b3b788422b22b09c6592b042f88f9b0"],["/archives/2022/10/index.html","a629440caf2f2ff471823bb53704f2e1"],["/archives/2022/11/index.html","fb884e56c2d81cf57217c1d0f05f9f63"],["/archives/2022/12/index.html","c0b7808dd25608ca27e5b83d8d3216c9"],["/archives/2022/index.html","8349f9bb85d06902d0e2558a997302cf"],["/archives/2022/page/2/index.html","84ca9cb0c9ac8dd956da3e57f7b61029"],["/archives/2022/page/3/index.html","ca1af5c64d14d0b72075685fa3bb13f1"],["/archives/2022/page/4/index.html","33a9ea53a070529b30c4a09f7fc62e42"],["/archives/2022/page/5/index.html","604a982003f3844490e61f8f2ff34a54"],["/archives/2023/01/index.html","418bfd89802591398c3785d3d7455538"],["/archives/2023/02/index.html","46e9af636a2fcb23bdc933dc8266a156"],["/archives/2023/03/index.html","ad130f416ba7f40ec14dc445e3449b08"],["/archives/2023/04/index.html","7a456b11905c278d54c837617fb73e30"],["/archives/2023/04/page/2/index.html","4fd18945ca825e15e406ee2241ed6ed8"],["/archives/2023/index.html","a6d4ca9c59eaa5d5a4d83aaa51098a90"],["/archives/2023/page/2/index.html","00043de5d3ba330956881e605701a2f2"],["/archives/2023/page/3/index.html","e3dc3c905d05a129b97b3c959b5f4aab"],["/archives/index.html","4fda34d331f1fafeaf071eacb40f904b"],["/archives/page/10/index.html","a771cc83ff51fd1cc756b09e647831aa"],["/archives/page/11/index.html","55232f3d2ad1e0115fe4571739a92aa6"],["/archives/page/12/index.html","89e745d22af0020a2758c2b62ff61399"],["/archives/page/13/index.html","3243cdb7a2e5824e64029cbd8e40ab83"],["/archives/page/14/index.html","c0e9e05e99849207bfbee9e7e0ed4493"],["/archives/page/2/index.html","e6f6c3a92b01c98890d1ef008bae5856"],["/archives/page/3/index.html","3127fe88532f28de89f1c5cb9f85e3c6"],["/archives/page/4/index.html","04953a76b937655e09940dfc951b362c"],["/archives/page/5/index.html","d7d0da1157e87d1fa077ba2818714d65"],["/archives/page/6/index.html","1eb27ecfb754ffa6910dd5523b5158c1"],["/archives/page/7/index.html","fafde0bb81fb4b29713fbe96a684f7f5"],["/archives/page/8/index.html","4e629c99b9c510c20ec068f88cfd612e"],["/archives/page/9/index.html","1a728f270fdd0825d0abb5992214a079"],["/categories/Devops/CICD/index.html","0088b112153db166fbfa0595f043291b"],["/categories/Devops/Linux/index.html","5c96d49c0aac1c9da4e556e8a8092bff"],["/categories/Devops/index.html","ec606dc6ae41fb0dfcf730831dd752d6"],["/categories/Java/JVM/index.html","886e1a3fdb2310ad4f9efdaa36b8bc05"],["/categories/Java/NIO/Netty/index.html","72e8f532a3bbba41f3f17cdb5a8e09a7"],["/categories/Java/NIO/index.html","296ead6e8f048b171d08b14750eec15f"],["/categories/Java/NIO/原生NIO/index.html","524f553906fd13ebe6574e4a6a6356cc"],["/categories/Java/index.html","ea335d02e90178ec163e00145837ca2c"],["/categories/Java/page/2/index.html","3a76bdbdcc8e74df11db72f84fde3c0b"],["/categories/Java/学习路线/index.html","095d0a8c4d090181a45681538b0e3659"],["/categories/Spring全家桶/Spring-Security/index.html","84f8c3ed2434eff6fa43c17656b2bde0"],["/categories/Spring全家桶/Spring/index.html","bd5bd725a5cc0e0c14400080398e7fce"],["/categories/Spring全家桶/SpringBoot/index.html","0ced158c0ac11f9d2b8680033b77294e"],["/categories/Spring全家桶/SpringCloud/index.html","492e92adeb8b61dad68f7c20b49e957d"],["/categories/Spring全家桶/SpringMVC/index.html","9b92f08f116d968e1a08226989a46e04"],["/categories/Spring全家桶/index.html","c6a8bac16d755e5676a71ff5ce5192e5"],["/categories/Spring全家桶/page/2/index.html","f2a72fe70ef782d94156a9addd1af533"],["/categories/index.html","810e17e5c8cfeac50684440f64d210ca"],["/categories/中间件/ElasticSearch/index.html","ae34a36f452aecf5b1d09022b149a69e"],["/categories/中间件/Redis/index.html","ca5dec12aeacd7322b9c6d21299bcc8c"],["/categories/中间件/index.html","fe6aadb233195bd3aa2f32d410c32805"],["/categories/中间件/page/2/index.html","bab1249cbca9f443c0ee023dda850c29"],["/categories/中间件/消息队列/RabbitMQ/index.html","d3d468772dfe1256d8bcfb58c4019dbc"],["/categories/中间件/消息队列/index.html","7a262681c648986e4a54ba914588b43c"],["/categories/前端/Mock/index.html","4ed8dcb656fd31fc3e17f8971013ba7e"],["/categories/前端/Promise/index.html","fff7c0cf587649ebb28322d204d52722"],["/categories/前端/Vue/index.html","f939ceb0489a1777c0658eda55e145a2"],["/categories/前端/index.html","ecbf3e2c1746e40581a5b7d54cb4cfd3"],["/categories/前端/jQuery/index.html","87749aca299bf901425005240fe55e24"],["/categories/前端/page/2/index.html","ae66a0d9090ebf0593a4ff51c9c5d4ed"],["/categories/前端/原生基础/index.html","cbc610590b432f06dce1f6db98bfcefe"],["/categories/前端/异步通信/index.html","acae237707bbea2181f7dc3a6f747df5"],["/categories/工具使用/Git/index.html","d94d962e541826424d136ba61b90fa5e"],["/categories/工具使用/index.html","1416de55da56bff1679ca253b8ead099"],["/categories/工具使用/markdown/index.html","81c1257a45456ab767cce8667a01514c"],["/categories/工具的使用/Docker/index.html","466f43851d13ef447e6fdc5fc636eb71"],["/categories/工具的使用/Nginx/index.html","7de40b8b8ac406ae3f38e8c9853c3c20"],["/categories/工具的使用/Swagger/index.html","ce44a4b3ab43235306753ad1a61fc466"],["/categories/工具的使用/index.html","241536688f4abac379583a194ba1a7e3"],["/categories/工具的使用/博客搭建/index.html","76273edde337fb9c4109deae5a62d1ce"],["/categories/数据库/MongoDB/index.html","b895c3da13ffd6c3edcc2bda6e6a77c8"],["/categories/数据库/MySQL/index.html","00c785a58d6895c9426be1de9361ad7c"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","72ce444342cee1458f12505972e0cd05"],["/categories/数据库/ORM持久层框架/index.html","f25101a53b1e642c66e7a81e96038965"],["/categories/数据库/index.html","639c8b96975ee239b56d0cf6b89c16d4"],["/categories/系统设计/index.html","a8195c60631e3fd15423cff252e2c87e"],["/categories/系统设计/page/2/index.html","4604ec7147b60d40af2532acb522e6b2"],["/categories/系统设计/分布式权限认证/index.html","38919daff27af08841040cf3fd265949"],["/categories/系统设计/设计模式/index.html","a3ad360ee558c6a15a4271b556e440bf"],["/categories/系统设计/设计模式/page/2/index.html","9d8556f03332d3f1d8a04c8700895791"],["/categories/计算机基础/index.html","3322e8483fa1635301ac2e1388f65dac"],["/categories/计算机基础/page/2/index.html","6a464125ce9f7739aac48607e9ff31e9"],["/categories/计算机基础/page/3/index.html","8f2363183254756312148ea6e48f3773"],["/categories/计算机基础/page/4/index.html","f6fda27c4b1bd958bd83437abed4fff4"],["/categories/计算机基础/page/5/index.html","2b02df1e5121a675fa7b48df39a5b904"],["/categories/计算机基础/操作系统/index.html","2cbd1461cd852a26374b7c7f934d0372"],["/categories/计算机基础/数据结构与算法/index.html","c7a67d86b56c11cbac790cf065e5911e"],["/categories/计算机基础/数据结构与算法/page/2/index.html","f220d84c66bfdb1376236b12d21c64e8"],["/categories/计算机基础/数据结构与算法/page/3/index.html","491c282f2185a16b41f26751fc5f5823"],["/categories/计算机基础/数据结构与算法/page/4/index.html","528b6624cf3cd402520ddf8d902b98a5"],["/categories/计算机基础/数据结构与算法/page/5/index.html","69bf75b7a3c36169f2ed618ffd0e14ee"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","e97c55af49254bf63938699f2f4b9543"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","b9b9e5cf051de3c97ad7cdf689c83f01"],["/messageboard/index.html","58aec67a14fb21ade770d6e5126ad1db"],["/page/10/index.html","0aca6a29eea3f61716f865bf227f0bdb"],["/page/11/index.html","b738124114cf6512255b99175c43af4a"],["/page/12/index.html","20baf00504131b9dafd13dbfccd4291b"],["/page/13/index.html","7bb1963deaa48d6d3027874704e40276"],["/page/14/index.html","35eb46584f9f756b6afa57ed8453098a"],["/page/2/index.html","49567e4970b7a3005566e72c97b511e0"],["/page/3/index.html","2be0f3a13b21339ec015bd7f3ee9714c"],["/page/4/index.html","aa622e852714b9dfbca7ead69dfe99d0"],["/page/5/index.html","77b0a08b38b7fb31113d52f6bc61089c"],["/page/6/index.html","c5a49b070afa1fd76a5cf06c88ec54c0"],["/page/7/index.html","b152246b50bdcf6589f94748845c2bec"],["/page/8/index.html","e50c46dbd193d8216353337a2a17172f"],["/page/9/index.html","ef50cf4253797aacee536c230094be58"],["/sw-register.js","78721f49cb236057d16946808866e5d5"],["/tags/Ajax/index.html","8ce587c0d2fe681044f462f6a964f8ed"],["/tags/Axios/index.html","2895d4683351ac848ac575d424420777"],["/tags/CICD/index.html","1c6949f92cabbab56214c2969b7782aa"],["/tags/Docker/index.html","b199a314a96b5c3d97cf819cfea3566b"],["/tags/ELK/index.html","0423bd6f72fdd07c579c361fa01d9ceb"],["/tags/ElasticSearch/index.html","d45f97a505731be9af45688629dd7b99"],["/tags/Git/index.html","eac905034d3a6b828e469f63cd3b766c"],["/tags/H5/index.html","47c23e1399249d910a4e4a08c3bf1ee9"],["/tags/JVM/index.html","623c860cd995b2338a85583fc05a81cf"],["/tags/JVM内存模型/index.html","fc7292c627bfc5f2db37de45c2b557e9"],["/tags/JVM执行引擎/index.html","72b46b08227def589eba5c215bba6150"],["/tags/JavaScript/index.html","2366b287a3d01fbeeb6b38e1d1a1a63a"],["/tags/Kibana/index.html","7466b51c6ec7f45284baa00ee4c19027"],["/tags/LeetCode/index.html","dd2be858cccd508e6197bd3f88ea4ddd"],["/tags/LeetCode/page/2/index.html","9474d62061279a6cc155f4e3136a5d8b"],["/tags/LeetCode/page/3/index.html","880eeb1c68dd374e5930f013a4249052"],["/tags/Linux/index.html","d2664496e5dbb75d141a1120ce23346a"],["/tags/Logstash/index.html","29f91492eaed2b1b4c2093bf2d26727a"],["/tags/Mock/index.html","f5de8b18f22810a8c98fe99268a66142"],["/tags/MongoDB/index.html","292edfd2701fb16481b435ce614adfc0"],["/tags/MySQL-数据类型/index.html","ace987fada0c1d34e06bbb7313f2a1e0"],["/tags/MySQL/index.html","08fe92b9ca2ea9d14017a0a0987e4dc9"],["/tags/Mybatis/index.html","57b67a444befcc130b8899accaef3f35"],["/tags/MybatisPlus/index.html","c4c825b3683947abef3f0b7ba80fc1b1"],["/tags/NIO/index.html","55481865ab5a2f0b04e5b406debf52f2"],["/tags/Netty/index.html","b8c6788b5d1327146b2e116c33a81e6e"],["/tags/Nginx/index.html","67dfb034e097a6b9a53590fae62bc68c"],["/tags/Promise/index.html","f73723a510b88030c1249efec55c876b"],["/tags/RabbitMQ/index.html","2743a9bea793ad4598dd42c677b35ed2"],["/tags/Redis/index.html","891125812a90db2de5b5f2b6c5f49376"],["/tags/SSM/index.html","638e98f4ebc1b28a23c4b199dd585958"],["/tags/Spring-Security/index.html","78bc1bd538d07f68a9c0fc9606c017c2"],["/tags/Spring/index.html","69e535089a2b8f5f0e9b9f578cf8d33f"],["/tags/SpringBoot/index.html","96975365793f5d19decccdabf7c358de"],["/tags/SpringCloud/index.html","ee6a83504f75356c1384b0fae8db193d"],["/tags/SpringMVC/index.html","74a716ea08a3199dd6312819328e7a60"],["/tags/Swagger/index.html","427902142022863d6960d1570d8835d8"],["/tags/hexo/index.html","7781d69e55bc44cf9f692978b495f1ca"],["/tags/index.html","e9803a796b15252814ac59c266c65fbf"],["/tags/jQuery/index.html","6046cf738683be769ff9f6af5d2850ca"],["/tags/java/index.html","40c84ab0495cf1c1dba8256f438183d7"],["/tags/markdown/index.html","6f80b4c06dc153698c1c17e02e109e22"],["/tags/noSQL/index.html","734ef0b79199a00938208038ae1cc775"],["/tags/typora/index.html","121c4a96b95ea0e63ce838b4b53497e5"],["/tags/vue/index.html","4245c927277e4ab0f7bdd7518b111d0d"],["/tags/享元模式/index.html","ee9ec5705cbb627ffadf80b31da2695e"],["/tags/代理模式/index.html","667c2c9a71bea3b910270c688477d605"],["/tags/内存管理/index.html","9c98ee8d1c34d5e582be4273f27045cc"],["/tags/分布式/index.html","f66ab549a769c523045190c6003ff64b"],["/tags/分布式系统/index.html","50f4add0b9c66b2a7253dc49df3e5d0c"],["/tags/前端/index.html","704a965ec1313fa23d772e51f9a1f350"],["/tags/前端/page/2/index.html","325b9a036604f1651d82b90a69047b44"],["/tags/博客/index.html","25d425d099ea613ba63afff4672af952"],["/tags/后端/index.html","a12ba37b8adecdf5efc664e7b6ca3323"],["/tags/外观模式/index.html","d92b527c4030fc3498d74587599f2b19"],["/tags/容器技术/index.html","a35e8c1165f8f8c91e179effda2fa9ec"],["/tags/工厂方法/index.html","0535f49a2ed7355b534d6e25c96432a1"],["/tags/微服务/index.html","bb79b3da881096b4a424a4d1d427af86"],["/tags/抽象工厂/index.html","7d77e0e539a04adf636fe5d3202860a7"],["/tags/持续集成持续部署/index.html","c885886a0dc2e3e354e2c29768f70a40"],["/tags/搜索引擎/index.html","824f11058b1e750032878c3ac77f9111"],["/tags/操作系统/index.html","b941923b63ca4f536156c0e0435c01d7"],["/tags/数据库/index.html","21c802b75ab926e84438f8cb9108084d"],["/tags/数据结构与算法/index.html","872f637c11278a1be166225fda6d1f89"],["/tags/数据结构与算法/page/2/index.html","51aaffd0060f22a644912262fa562ce9"],["/tags/日志/index.html","cc6f910c961c89baf79e0213fea81df1"],["/tags/服务器/index.html","15acc41bafe5aa95550ca6db5349a816"],["/tags/权限认证/index.html","6007bd529853937728d2892a32d5b7e1"],["/tags/桥接模式/index.html","7afda74538b8496c53a2819a16d0748c"],["/tags/模板方法模式/index.html","7c6127c68defc69c6b0ab3ca4131cda6"],["/tags/消息队列/index.html","e9d513aa23c9fe2322debfdcac32e3b0"],["/tags/版本控制/index.html","de167dbf7aae6ac1b9186fb23c28165b"],["/tags/策略模式/index.html","3dbc201c318239b1c8fb17d2bf56c848"],["/tags/简单工厂/index.html","dda2aa591dd958aaa5f26e059d146307"],["/tags/算法/index.html","fc13411f9db15ad03970c6aaef1d25ab"],["/tags/组件化/index.html","5b8fc331a502830c76fe7bc04534a72e"],["/tags/缓存/index.html","c8631706791cc49122ef80569268eeb3"],["/tags/观察者模式/index.html","686c09b4b6436ea356e452ca718e867c"],["/tags/设计模式/index.html","5d344a373c61fcdd90c80a5e5a597814"],["/tags/设计模式/page/2/index.html","c28eb88115d9b7ea8c90e7c8eac783d3"],["/tags/进程管理/index.html","3e138ad1aac0fe0cfb652e2cbb4c62a8"],["/tags/适配器模式/index.html","f41f4ccd39a8980dee4ebef7bfe800f2"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
