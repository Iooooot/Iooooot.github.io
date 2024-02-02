/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","875f4506705b70e5c3a5bce8e38d7672"],["/2021/02/22/工具的使用/博客的搭建/index.html","2317d7e8eb8d2720ac5ef2fad1127daf"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","040fb20e44812efaeaec83675726dba6"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","aac530ce033c073fe3becff5a031ef5c"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","9d406ddc46fcd2a9ff20af6f2116d63f"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","5647f058bcfdf6ce065b326e8c0efc9a"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","5132da55291781eaf2b883321565da55"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","4e77c9dfcb1a5ca589e63ce24ab10b4f"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","aea4d7cc2add09c6180632a13c8f1ddf"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","01090e3158b4e5b8b347f376e5462934"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","03aafa4ccbd0a196e532396b22501b68"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","f59234217bbc01b590932340107d2566"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","94ddfa347c50d7b473d760e703f34134"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","eaf3b72ba64eb92e093766d4dd7b079a"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","90998e376dcedd8d20b30350e628a4cb"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","3635dfab3d18ea88fb57326b0ca06ff6"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","4e6c8c85facfbed2025c187a6ffbdd2e"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","2484b8a6a2aaa2fc788176a9c98ec783"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","8be5e0a27a970ffad8ba765c1085a2bf"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","c0ce6844cfca6a329387f538796738bc"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","060a7b94865cfdcb1bb423e14ec89e6f"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","b5cb735555d8391cb431a9ccc0e610fa"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","0e87c90ac19de0463c6387f82c707664"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","3e197b56ec702de8e131469b031877a7"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","ec6cedfcb25b00238981c85eef55d373"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","ac0cf74ad50fd646b1b36f53672b30da"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","4bf06aeb85ebc373c97f5174511f0e64"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","e62385f1fbd58a7e0ac13ba8be178f97"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","5acbc729067eb9f2ddeb365b71c469dd"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","40581de2b14bb9c66d0d55cc4d076ddd"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","850f6f4e36e076c1482a0e26b3a7311c"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","646781dbb72e4f2b34bfb54c6c4a19ac"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","5329162b4bb24f6dc8ca6affd61fe2c1"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","dcd952812d86d6a0fdf077eea4ec0290"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","8ca3de2ced7d92f0293db0c04390e3a8"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","86034b1ed9ef997ff9392cc9fe58efae"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","be64f94285ce6f8677f9150e4c57073b"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","a81a2c2f8922f26719664018b4d699da"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","3deaa786f3e10690b5ddf1a107496ba8"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","397fd5f0e55531bdb4984bd346afd22a"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","2cdb3bd79057ffaacdbf2e9f0954dd87"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","93d4bfc41aa17ffe0f69359c4626874f"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","54f8914e73c02da38ecbbd5f06fbec0d"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","6e34419285bab1ac2988b0651d10b6a2"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","dc982d53cc650d0506faa20a0017f819"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","fc517813ad5363180f072e8bd68ae08a"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","f6cedac77a9e933e0b7a3d364ac88c56"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","b4a36c949985fc72d0301ab9f8c31a6f"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","5a08cce7fc41444c2837798704212713"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","9497b224576eda40de06ca48d620a8d0"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","1ba084a5bda9ad46543254d27edb68e0"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","9e81fb77b27c5d6ba2871999728f5d28"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","cf157c3a3d33c57f82d7c958fc10670e"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","41d429fe0d91a930979f629cd8a336c4"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","9104961a92ccda5685c61fc4815f2b4c"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","e9bdd62e7345bf82512f4280c01937a7"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","1d6b9eeb2703cb711591797275f07b5e"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","ac1baf028fa029cc3e22428d5acd3a40"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","5ac82ef3f485e155ebdcafe1121178bf"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","816f492436f805bd4ced27035b83545e"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","0095cd713fe928213638bb03aadc3c52"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","9daca547e3bbbd35ef49fc2b91bfc1ee"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","67f9179ea6cce6a714bc7f7b59cc9962"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","2f6b9f528522e08481ae705c57315fa8"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","bfce7e639507c50193c274f4db642085"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","93615687ac54e0c9fff696f2b742afc3"],["/2022/08/17/前端/jQuery/index.html","7a3716b38ca137d769653483795d31f6"],["/2022/08/19/前端/JavaScript/index.html","a44b1cfd4365418f60c5f9c2dfa8128a"],["/2022/08/22/前端/Ajax/index.html","74484cca26e428270c88aa5e189e4f35"],["/2022/08/23/前端/Promise/index.html","321fdadf3a914b084625df957f1547d5"],["/2022/08/24/前端/Axios/index.html","0c522d467ba0ea57ff88a6211662b009"],["/2022/08/25/前端/H5本地存储/index.html","d59e1ac59fc6deab251dc73049129799"],["/2022/08/26/前端/mock/index.html","84b31509f9359b04e8779d8cd65aa2a1"],["/2022/08/31/前端/vue/VueJs/index.html","f69c48cc4559e8791fb4fa0476e13db4"],["/2022/09/01/前端/vue/vue组件化/index.html","981dbedf0597ca5d07913fd71f2276a8"],["/2022/09/04/前端/vue/VueCLI/index.html","93550dd2edaabc276e0f04363616cb16"],["/2022/09/07/前端/vue/vue实现动画/index.html","3f72b12c39e45098b4e521e6a507b906"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","3032b074210feb6569431a56cf30edcd"],["/2022/09/10/前端/vue/Vue异步请求/index.html","bc637ae489e0e6f8ca1a3b7d0efbf239"],["/2022/09/11/前端/vue/vue-Router/index.html","02c374d2d07a6bb47cb72386c30bc3d8"],["/2022/09/13/前端/vue/Vuex/index.html","b51bc9197b65e131998b42df1aab11e7"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","85660e0841357adc6872061ea22923cc"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","d9d85dd80b4661a5b1f21744f6eb8e78"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","b3623976f93f292ebf1fd020b116a14d"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","f521aff905f0114bc7c4a90f63529f37"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","25eedced4e42f2400effc9afc0a30e82"],["/2022/09/28/DevOps/Linux/Linux/index.html","1753d38176c8a85329547f0a8e5b6d3e"],["/2022/10/02/中间件/Redis/redis基础/index.html","0c0d9af6772f152d3904620bcc90a476"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","bc7611898372c3bf192a1e215e264dc0"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","e6631a661357febfc82aaf412159862d"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","4a3a46f2e39899aa3bf6f5b01d2959b0"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","044bff5b344fb4af97c1d0427b13ee5a"],["/2022/10/17/中间件/Redis/Redis集群/index.html","cf0b26269cbcb08f0da87bd2a5d997f4"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","287e7a7bc023ecf7c1f36d258819a7d4"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","d3f9aa486c1a215180ac924ebbb1ce9f"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","6aa012ccf6b51ac195449e04482b9f16"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","7266151045b470b338274a54b0a37f86"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","26aeadb63605f7daf823a9dc36984e62"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","eeccc9fc3772daca9917c68c7e6bf30f"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","c5a051ec31a48b595702b49520dc8126"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","b77874684e40b0c6a76d68e39ff51054"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","56ded3bb9c02504c21ba8cb9d084e35f"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","05fb8651d6ed582499b7de184d63686e"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","34aeb2c3f34a3d55221d1fcdf1138eb1"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","b8bb9eaecf081ae85ae067034f3bcd7d"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","3b9ab94ac26272298510fef667a2bb64"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","6a85fb4168647af40d1358b8fabc936b"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","ac4e562a64a2fd6d1bebcc399610e35e"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","6b168be0aebb15b1326f5251f6778cce"],["/2023/03/10/DevOps/CICD/CICD/index.html","b950295aa346f7bbd38e480c6772f375"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","85fdd7f17b2484b780a9bd2305e7b9c0"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","024b6466544ee5acaf7be0878cd41358"],["/2023/03/13/Java/NIO/NIO/index.html","22239845517e366ba29a53e6153b2691"],["/2023/03/14/中间件/Netty/Netty/index.html","7b745c7f9f1c3431f042e94e1abb2c10"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","00cf6e97b3a4e0883fb2a338a630ea26"],["/2023/03/17/系统设计/分布式系统认证/index.html","d0393e588e7115aac9b9f3218e0800ae"],["/2023/03/19/Java/JVM/JVM概述/index.html","23e6db4956e447debb9cda224d7238db"],["/2023/03/23/Java/JVM/类的加载过程/index.html","a1dd05a7a2459a83d3b08b7c84fb644d"],["/2023/03/28/Java/JVM/对象的实例化/index.html","5273f442750cc0bea66e285d9a5e47ca"],["/2023/04/01/Java/JVM/运行时数据区/index.html","46a8df5db7159e0d2f056846f432f115"],["/2023/04/04/Java/JVM/执行引擎/index.html","3e26e6ce381c0019ea0fcaf73d2e88b3"],["/2023/04/06/Java/JVM/对象引用/index.html","cfd2af5352180be86fcf70a03d47e731"],["/2023/04/09/Java/JVM/垃圾回收/index.html","908f7617f2391bd65488c8079ec7538e"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","a4ac760bef3cc7fdaaa833ace30a3344"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","8419a77a3bd3a9742b81366950e2516c"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","e9a4ad1c47d3ae4607ce0e26dfd87b71"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","7aedcfca38e2f1f3ed2611c6b52655fa"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","13860a486d2a7af57e99591ac4a49071"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","41a7802bcacc200d8a5d5c5b82918589"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","9b9cb0d1ec089d8ce180eff031e37f96"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","923e7c0136d1d2de403acb9c8e1e8b8d"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","0572f8d0f67be56162ea8bd705498b1d"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","bc1855985b3ce022f5542d5fc80c7444"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","5d53ee41e8e8fc75bdd2109d7a80e07c"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","e3d29c8d93464e560b635df7b4a0502d"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","1889d538cf957fceac404c8fb03e7c52"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","56b3379cedfb78c4fc7a0a73b67d692b"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","0e7dd0ee7656a7e03eb8d34a31fb8ad8"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","145ccbf87254990f2741a5b7070694d9"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","7241572f61a85fa4e5203c137217c576"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","314e2ebe30a7525685f5e1197a4bf958"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","88e6274a6b259f8e17db946be4089fa5"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","f36707e20917ab928d4410bdd63ee957"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","fc047d2eeb2e702228e46ee167cf61b7"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","dc90badeefca3abe27fb783cd46016e7"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","454f5312531dfcc294d5438a84b95093"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","1275e005b73ade850035a628242efbfb"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","c99605b97d7b66b3f1838898c757c8a7"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","43f95895a4ee8382ca014233c5298838"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","b52b75268745b9ad511c8cc17b38900c"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","c718d5a994dee7e4f5aabb4d25e8ce7d"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","7fcce86d79c5165871825f19d9466482"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","b124198630cae8aec6b36c9fe236e1d7"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","03497a512f467dd509f32b3eeb694db1"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","0a3fcc0608e002c9bc798ad80cce7b98"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","1052aa5049a8a3f8067b085cee187933"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","017550e918d0b54493d837a4d749ec8b"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","07e23a29cc1c8f5f589edcc5f7a31c41"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","c3a06d55be1adb98f6ccb022401f0040"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","90ed104b63c96f9c50f7940a2212c6a6"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","892289f12e087a53842bfad8c8f405c2"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","06775f12a53bbc4a1b377629ff1fce4e"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","c8e25588d63a5eab24da8dcf987e169c"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","15a367ce68ea5eb415825723ac9f3a53"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","7a6989320e2518fc34524d9af1f9bb28"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","d3d56a619deeead3977a7452e9942bba"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","7daadb225b98a2ce3d5bea9ada7aba01"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","50e011fab2fdd8bdd7d917c75ce5f096"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","da4ea692bb8e6e66a7ff4ed1998eeab1"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","2dbd97c177d62eb67ebea4dd7e98392f"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","9a35c6e308917b60a759fee1f80dccc6"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","4a0aa7646a2a32b2c1b84a3fc02a741c"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","460680bd2b4e246a7a58c3e22f5b455f"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","396ea9ec25b2865fb0a6b254279da75b"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","9953b2809e09dbaf221d6aea3dd10554"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","58c3431accbac7d00d914c4b2a421e34"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","51aa5c5b8e0552cf4ec482d763567afd"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","d4f179f5e140835054985f550d429726"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","4f19efa8027342429241333c591e5a01"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","d9ef65b2d49488831b4179ba21b802a2"],["/2023/09/04/中间件/Redis/Redis事务/index.html","cd53c3fe0268466ffd7c6ab7dc8e3682"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","1384132cca48466e84fea48e158aef5f"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","712e78376d459f0caa30ccd0889a1b06"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","b488ab78df62c6523d9be2e6230c80aa"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","942c530c80d89ca60f4c2b60e0ba1df0"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","1bf38472f4c497306e00a9bb05606138"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","6f1bc8fdfc83c51861b6b9a9bd858cc7"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","b6fb90a589b703d42e997fc776b54841"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","6d2b42c24fe8151d623903758d5389f2"],["/2023/09/22/Java/NIO/零拷贝/index.html","40559ea7a2b1156065965b67c9aa2a5f"],["/2023/09/24/系统设计/JWT认证/index.html","dce0b477007c4e1742804b833d1b1949"],["/2023/09/26/Java/NIO/Reactor模式/index.html","7db47c9407d6df86e4c5960f31c8bded"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","e9a2066fd9e5104f19dc25565371c6bd"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","fd4bbe57ddc4ba29f7ec7afbe6ae539f"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","6540c5b08571873042909ae769612379"],["/2023/10/09/Java/并发编程/共享问题/index.html","fbd90231f8e1bbf25c025949c9c16d7c"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","8a0d65daca9e131986dd75a254f8cdee"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","8073fc83ea739e751f6f562371fb81b3"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","c4b13ae6c2af9e3ca5637f7e0ff27809"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","cabdaa9ff4d2f9cc976470f3be8b8ed3"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","c5c5042903105e545a99d3b0e1ceb088"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","3824c7cad4218c0d9195d6babaeeb40b"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","053b0f16016b83dc3bf9590fed76194a"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","5d235f1715c4d694e495f8a0f3b872bb"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","f33ddcf65b8011733ec552b35b0a977e"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","7ebb6a6f168cd98f39ba467f510fd33a"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","d73e40e365e666935bbec24d5e9efc2c"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","c6be0ba84063a289960d74976aa9d939"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","a598b9c4c354b1a0bc496955e9ace9ed"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","9b85d2f5bc85ec0b64cf6cea0a270aba"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","b8a6ed1cc040e8bcc37d4e2af1204220"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","280f468be02c11f0eea1ada8c120ccc5"],["/2023/12/05/系统设计/开源协议/index.html","e22f3074010b50a89f0372f469db29ba"],["/2023/12/09/MockMvc/index.html","30002ff0781b91938c8d7e01c8383519"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","d2d4697d2fe802410faab28001712b28"],["/2023/12/19/MySQL读写分离/index.html","ac95d875ccca884e775baa9d4df0cc3b"],["/2023/12/22/MySQL分库分表/index.html","065d0dff93574c49788105ec7c6a51fe"],["/2023/12/27/利用NoSQL优化数据库/index.html","f14f853d204bcfe19d2334b205e4c713"],["/2024/01/06/缓存概述/index.html","2ffd2bf93971757617197c8f45b68911"],["/2024/01/11/缓存的读写策略/index.html","f70770fac52c1d3558e36e94e620c5c5"],["/2024/01/14/CDN静态资源加速/index.html","3f763ff9c032e43d098e34462083a729"],["/2024/01/18/消息队列延迟问题/index.html","c38fbc19296473bccfb49840b4b5725a"],["/2024/01/22/高并发系统分布式服务方案/index.html","c664ab4e0c878177a7063c9a1415fe86"],["/2024/01/26/dubbo/index.html","a74eba7eb1140a8a86157f7ceae7224c"],["/2024/01/30/微服务基础/index.html","ae80284629b2d00c9c5990c43fa938e9"],["/2024/02/02/监控微服务调用/index.html","01b63e763226c4810afb1855c097e4b6"],["/404.html","5b971b26983fcb307accffac0840fd06"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","f343d78bc875267ee79936d6c88a08ae"],["/archives/2021/02/index.html","91a3bd390e20a57ff82cee0c26bb38f1"],["/archives/2021/03/index.html","b1aba69ac4a43ff7e6958bd825ae8fba"],["/archives/2021/03/page/2/index.html","0acd249f6ce645ca934a5318ef3c35f7"],["/archives/2021/03/page/3/index.html","b31f9ba06b2802c77e513c105bfde0c8"],["/archives/2021/04/index.html","acadb0ae420cab560cdb272e327414fa"],["/archives/2021/04/page/2/index.html","d30bccaa6de10a5d152c8a884eee2760"],["/archives/2021/05/index.html","76842b47b33bc15d17dca0a5547ca1f6"],["/archives/2021/index.html","0f3c0a2101523e80facacac4dbf76a39"],["/archives/2021/page/2/index.html","f367998ba8e1f1f5fd7a4b97e48ffadf"],["/archives/2021/page/3/index.html","8499064ef8f507e2b5796fa9ab9a1a29"],["/archives/2021/page/4/index.html","dacb27b7e25eb57946b9a90cd9632616"],["/archives/2021/page/5/index.html","ac1aa31cdea5ed366a158df5440808fd"],["/archives/2021/page/6/index.html","54cbe4c86001e3cad151e3f87a675251"],["/archives/2021/page/7/index.html","8d0f256ea4d8ad51a99753fdacefc65d"],["/archives/2022/01/index.html","4270427ffd7cded62008209fc77a32ed"],["/archives/2022/04/index.html","500ac682d437bf6d8c684b2139789e2d"],["/archives/2022/08/index.html","5d4d223455b73f64fbfe698ebeea678e"],["/archives/2022/09/index.html","886e79e958a7c9184172418f4039a49c"],["/archives/2022/09/page/2/index.html","128c7ed4bbc3e7018a1b053b0a3fc1d3"],["/archives/2022/10/index.html","b95ec9adef72b9d60bcf591687a45644"],["/archives/2022/11/index.html","81436379533e4eba29902492c14f98fa"],["/archives/2022/12/index.html","c685c8cff2ac065203342d200a816dd7"],["/archives/2022/index.html","e32f08f897c3a017f27b11b93cf7ba8f"],["/archives/2022/page/2/index.html","33ab39a014a7d54f53fc3a65c62d06b4"],["/archives/2022/page/3/index.html","9db7975ed166a158ee40505092fe572b"],["/archives/2022/page/4/index.html","c651bd440236ef68d160ca75e1ec6ebc"],["/archives/2022/page/5/index.html","f9fef7a44a805e198bd22e9947c6d36e"],["/archives/2023/01/index.html","72c2ee1c989878ef1f75bb69c59d7b38"],["/archives/2023/02/index.html","f6303f788798cc1cb46aaf8e49c92f3c"],["/archives/2023/03/index.html","9840a53c7747b373ace36fb8af5a4be4"],["/archives/2023/04/index.html","d3ff5eb5819a0a387c45345af05ca982"],["/archives/2023/04/page/2/index.html","0eddc7dba3bde162237fa477cbfad26f"],["/archives/2023/05/index.html","0ee0ff06486fcd7a30d434c0912a6fb5"],["/archives/2023/06/index.html","a182efad678eb92a000f48606c73851b"],["/archives/2023/06/page/2/index.html","70449d7300f3cf9b5bc9ee725f2fc127"],["/archives/2023/07/index.html","3b27454306fc58a7d9ae5967e2f295af"],["/archives/2023/07/page/2/index.html","d6ff1180d8ad3493bb8e5c75899568c2"],["/archives/2023/08/index.html","12a2405e9319b08f68cc22c6514cba28"],["/archives/2023/08/page/2/index.html","6083cb0209c359b0ba465a7171404263"],["/archives/2023/09/index.html","6cad026c182b49f4cd085a8eae9a36db"],["/archives/2023/09/page/2/index.html","87c758e3bfa99947d9e95e1d97e034b3"],["/archives/2023/10/index.html","827564b3616c68705aebcf59ea23da4a"],["/archives/2023/11/index.html","dc3a647534be18cf6736a5d844c232ea"],["/archives/2023/12/index.html","42530b499403fc532ade1a95d074dc8c"],["/archives/2023/index.html","33fe107dcdb37b8ab53cca064b487b66"],["/archives/2023/page/10/index.html","d78b832eb64996b984aea417909c0410"],["/archives/2023/page/11/index.html","81606ba73b6376fe115e5d7abe826e02"],["/archives/2023/page/12/index.html","09e4800eb50a34d264178529c2399202"],["/archives/2023/page/2/index.html","29cc5ba66a654577365bd6b0fd0ba636"],["/archives/2023/page/3/index.html","702b181298dd2e73256addd38fcda7cf"],["/archives/2023/page/4/index.html","382fd460630f7a4ce15d3937ceb36eda"],["/archives/2023/page/5/index.html","b7b1db9ca6388f9b1eb23e2f8cb37515"],["/archives/2023/page/6/index.html","98c813617bfaa9fcb6a0f742584d4f03"],["/archives/2023/page/7/index.html","5891ddc3f7e1625cd31efdd6d1357ed9"],["/archives/2023/page/8/index.html","a875e0070f8e5d60b2d31f636655d922"],["/archives/2023/page/9/index.html","c157474dbe2375e115154e206d111497"],["/archives/2024/01/index.html","40197f63d2d7d31ab0231cb05d0a7c90"],["/archives/2024/02/index.html","5afec90db944ce671c245ae75b0301c6"],["/archives/2024/index.html","2acaa2d2ca13104d5ac6911c84cd79c0"],["/archives/index.html","5a64707fef5dee1e903782952f00886f"],["/archives/page/10/index.html","4c384bf99c8e3001b8544f90e14cb160"],["/archives/page/11/index.html","81a60b6488940870317ac0aa5f0bda22"],["/archives/page/12/index.html","6939e2566dff00db23dc801d537e3ba1"],["/archives/page/13/index.html","31b404769a57ca2b597d5248ac755159"],["/archives/page/14/index.html","e946c0a6a9b504c5fe28a4cbeb6d927e"],["/archives/page/15/index.html","c7ae1b77f316b3ab1b56e7c6515b28d2"],["/archives/page/16/index.html","1e3e82135d4c2c5318f7b6ce952bf432"],["/archives/page/17/index.html","9ad5f3e642af736b2e016bfdfe4dd831"],["/archives/page/18/index.html","a73b4eaa35a6e5f94cf6562ec28ecc21"],["/archives/page/19/index.html","6bddd31e2fe286ddcf5ac6301a7fc707"],["/archives/page/2/index.html","b94a8b28f33a865b504f3bd2ad79f10a"],["/archives/page/20/index.html","b66804a17b8aad54c041405b48f91d37"],["/archives/page/21/index.html","4ea7c77f5452abd12544d129c5b5115c"],["/archives/page/22/index.html","1cf437dad90db19c66b7c6f6436cdb9f"],["/archives/page/23/index.html","61b003013c94aaa0423338f75dd16f9b"],["/archives/page/3/index.html","d93905f60dddc9e4563bc1c79c3d566a"],["/archives/page/4/index.html","62564665b99b793f7aeca64d32ea90dd"],["/archives/page/5/index.html","47531298cc54b42e8ca4bd46708bd00f"],["/archives/page/6/index.html","929b328d312cc628fb8b79fd951b773e"],["/archives/page/7/index.html","b7a119605f79d5a16966015fb6f10bc9"],["/archives/page/8/index.html","36c24d106755a687f83ad4157e8f664d"],["/archives/page/9/index.html","4f89c7f8e34456ced13a994a999448b4"],["/categories/Devops/CICD/index.html","f2cfdf64b5eb252b1f83367809036142"],["/categories/Devops/Linux/index.html","a9eb93862353da81297d5ccd85d42699"],["/categories/Devops/index.html","bfa704d94ea1ee6b477609dec5ba24dd"],["/categories/Java/JVM/index.html","9780100f74502bb40c0e60ba3c1eb1fe"],["/categories/Java/Java基础/index.html","ce1b19b51efd1d46c403f12ab551369b"],["/categories/Java/NIO/index.html","956df270318b36dbff48aa3b83dea20b"],["/categories/Java/NIO/原生NIO/index.html","3e89e8b73c581d1df34bbb6767d0989d"],["/categories/Java/NIO/文件操作工具类/index.html","1990ad33f17b0f0c11d094cce63e8aba"],["/categories/Java/index.html","aad3c2ff48b1ab3527ec01d533669a49"],["/categories/Java/page/2/index.html","d2dd5e64457d15825fb122519b2106a6"],["/categories/Java/并发编程/index.html","d160f4606a67b573c05c51a67a6e538f"],["/categories/Spring全家桶/Spring-Security/index.html","98ab94731c2011843d817aacebdf50e1"],["/categories/Spring全家桶/Spring/index.html","619a4f734469cca9bff7dab83f58b1cb"],["/categories/Spring全家桶/SpringBoot/index.html","df30cc6947477aa9d029d421b9027cf3"],["/categories/Spring全家桶/SpringCloud/index.html","03189e3c23a82f8492e76a41aea197be"],["/categories/Spring全家桶/SpringMVC/index.html","740894876e6639d8e0cbaffe9f4b9493"],["/categories/Spring全家桶/index.html","b03bd4766e80b232881ac432231400f5"],["/categories/Spring全家桶/page/2/index.html","37306a42110f7ca60b154bbd7713ca70"],["/categories/index.html","5f1556474e7e89b2067b6d1a94658dce"],["/categories/中间件/Dubbo/index.html","d22c65560fd7ae9c3cb69a20df0a37a6"],["/categories/中间件/ElasticSearch/index.html","05e60a4698e0d68ea0cd9ab55494b989"],["/categories/中间件/Netty/index.html","2f8254a6a9af2aeb17ef6d66396b3abf"],["/categories/中间件/Redis/index.html","213741c0549b9c53aca319d09df758f5"],["/categories/中间件/Redis/page/2/index.html","7704bee5ec53bda306e602e9dfb0ee10"],["/categories/中间件/Redis/page/3/index.html","7f3f277e062dca69e9b6437abb36e7eb"],["/categories/中间件/index.html","b0e3add4e951799f81c0dc790459a73c"],["/categories/中间件/page/2/index.html","4013dbf3064fe5b00ab50a736da89624"],["/categories/中间件/page/3/index.html","e93829547bc991532e9fc73169a5168d"],["/categories/中间件/page/4/index.html","83402d5f8ee24c3c90a3e373711e581d"],["/categories/中间件/消息队列/RabbitMQ/index.html","30ed09a1a0969658733115eac837e46a"],["/categories/中间件/消息队列/index.html","4a8c50064ab3bc656e06d869b0a48c9f"],["/categories/前端/Mock/index.html","b7144e1a9af8fa66537a775e1366049b"],["/categories/前端/Promise/index.html","4b3a0093b11639d7aa82692be753b72b"],["/categories/前端/Vue/index.html","6586209c322cbb45e16f877e4de655ee"],["/categories/前端/index.html","0b29b4a7af8aeec4fdb3a9ffe3cfd6a3"],["/categories/前端/jQuery/index.html","86c341ab9e02f32f691b5cfa5773346c"],["/categories/前端/page/2/index.html","b90f14a217ff0ba95b08716a45f68fc6"],["/categories/前端/原生基础/index.html","6be0e8edf267a3d88dde58a008625db6"],["/categories/前端/异步通信/index.html","01fa8b0c61198c4b3162af503f38402c"],["/categories/工具使用/Git/index.html","c74324bce3b675e2c7f7977000c998b4"],["/categories/工具使用/index.html","26167ac2a4b98fe2128fd6077db4b187"],["/categories/工具使用/markdown/index.html","4af6fb9f732e79a9aa3a0f0bcf8162f1"],["/categories/工具的使用/Docker/index.html","14241b39aa82afc4469ac302bd4d5a69"],["/categories/工具的使用/Nginx/index.html","0229e7592a897b8dbf20c9cc838c965e"],["/categories/工具的使用/Swagger/index.html","95add7281c0c250744d0e18efdbaa012"],["/categories/工具的使用/index.html","79e14e269e95cfc73096409ce2e68abe"],["/categories/工具的使用/博客搭建/index.html","bf464760f4f481a203a5441ccc996abd"],["/categories/数据库/MongoDB/index.html","4f17631dc2c473c1cce8b57c8a5051e4"],["/categories/数据库/MySQL/index.html","81bbc0adbc067212753d2a7ed3113ade"],["/categories/数据库/MySQL/page/2/index.html","39e49f65f2cc8a7fed0db66502884e4e"],["/categories/数据库/MySQL/page/3/index.html","1f256767f4630db835cca0c5f06043f0"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","1b6c69f26ea854c84957d362350b62d0"],["/categories/数据库/ORM持久层框架/index.html","42dcd9aa6f162316a1ab687dd3e40abe"],["/categories/数据库/index.html","fadbb2b1833024d46050a70df76ee8e2"],["/categories/数据库/page/2/index.html","59324c6a95d388cdbcc28c80a76630fa"],["/categories/数据库/page/3/index.html","2608e4596a8ca4e78e9d0bd3e27e7926"],["/categories/系统设计/DDD领域模型/index.html","eb1c5dfaba288224debc158eaa75b3a2"],["/categories/系统设计/index.html","777b013c33c751be043d4832830ea723"],["/categories/系统设计/page/2/index.html","ee1cb407dc17459210badfcd89dab58b"],["/categories/系统设计/page/3/index.html","08f1ce815903a5b1f127643e494266ee"],["/categories/系统设计/page/4/index.html","15341aa25183fa5bcd4fa24df4fb5a69"],["/categories/系统设计/page/5/index.html","9e8ecb650902b491a1e7595df4b9c0a3"],["/categories/系统设计/分布式权限认证/index.html","15020d58d5e888162d9917d5b114c1f6"],["/categories/系统设计/分布式系统/index.html","015d3e89a3cdf4002539ffdaf1ced076"],["/categories/系统设计/分布式系统/page/2/index.html","166cf2a3e1bce814c8bfd89b233eb169"],["/categories/系统设计/分布式系统/page/3/index.html","9a353352ed12edf796030b7948c44791"],["/categories/系统设计/微服务/index.html","d7eea5c64aa4bbbf2c49de4b0e4720ca"],["/categories/系统设计/数据库优化/index.html","bfe67dea59332b5214f3befa27bec035"],["/categories/系统设计/设计模式/index.html","a0e9be50ded62f3ae817f1228f9cf56d"],["/categories/系统设计/设计模式/page/2/index.html","374c7afe3a0515a6380e12dfcf15f313"],["/categories/计算机基础/index.html","7d4796551c574b6852e2d4c7efb6ea05"],["/categories/计算机基础/page/2/index.html","e6170012e54fae0213bc724d8f704f59"],["/categories/计算机基础/page/3/index.html","f6b325ef98633d5a4e645feb7c8840a4"],["/categories/计算机基础/page/4/index.html","21e867953cd47620f48eca2cc62b5a7e"],["/categories/计算机基础/page/5/index.html","ab15183e9c18941a5a858170aa36b924"],["/categories/计算机基础/page/6/index.html","0a28136ec00604cf5f538e399580eb5a"],["/categories/计算机基础/操作系统/index.html","b997480311feb3f3239fdd51a5f08195"],["/categories/计算机基础/数据结构与算法/index.html","34ebe8ec1a0f3486f53f1a75600680e2"],["/categories/计算机基础/数据结构与算法/page/2/index.html","737f4461cdb39af1b096e5a10d10440a"],["/categories/计算机基础/数据结构与算法/page/3/index.html","9cc31fabb6de161da2d3c7109cdaaf71"],["/categories/计算机基础/数据结构与算法/page/4/index.html","b05fcff302aeda0522bdad0a87d6e242"],["/categories/计算机基础/数据结构与算法/page/5/index.html","8de2833cfc50a563ed2e7272422d7108"],["/categories/计算机基础/计算机网络/index.html","bac73c2bb0df968053c516e0b4598b48"],["/css/index.css","2af5ea34362e0b34f799106b2659ad50"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","17c265a4c8b44fac988bde5f09c2f57a"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","f2d258876cb95258667ada49b2288a93"],["/messageboard/index.html","22fc711ed5b6cb75851dd207a9451dc3"],["/page/10/index.html","32a8f5b3f39b61e83aa97636e6c31084"],["/page/11/index.html","df9e88cccd0554c60ffcf30e866c55ba"],["/page/12/index.html","4a033671d4a6a0ba98f63d54b9fa2bf1"],["/page/13/index.html","bfe293127271cd07fb77cfed5d84e0c5"],["/page/14/index.html","6e23b7400c8611d72cbdfb20aae89091"],["/page/15/index.html","53239f32e391d6b7a2ad9a54e7d7f9e3"],["/page/16/index.html","11a56d41411c7f6416b63929d1919cb2"],["/page/17/index.html","e490021bc9b5c8448f9caf885da59b97"],["/page/18/index.html","c08310e03c13d6c8e6c6142e90db5498"],["/page/19/index.html","3c4490fb72f2519280714ed70b8659cd"],["/page/2/index.html","418965307bd27f310ae6ff1c6fd60ff1"],["/page/20/index.html","356ecbb85e8c9abfa6d51a0701f67c5c"],["/page/21/index.html","8213256dcd1130053133ba1bf90c7896"],["/page/22/index.html","fa69b50a1fd9f4b62847ae27cc5b220e"],["/page/23/index.html","3fd0ddedc9fe5f931aec6ead23a59cca"],["/page/3/index.html","69eee2747c738d6aacff582d6de4955c"],["/page/4/index.html","fb59dc886bbc1323b827569423e7320f"],["/page/5/index.html","5365fe232c954cab0fa086dbccfdf6de"],["/page/6/index.html","c917d3860165ae35f57da91f890a8b10"],["/page/7/index.html","add295a85984a93faf02dd85a7b1f68c"],["/page/8/index.html","7c3ed78d4e7fdfa3fceafc7f78ea4921"],["/page/9/index.html","c6c96c91fd439813accd7c2777b3793f"],["/sw-register.js","c4f5d30072c795ff6c4d5ddd65d8a239"],["/tags/Ajax/index.html","1b4702b2c90bceb04dbc12123073d1d1"],["/tags/Axios/index.html","1ce7ccb735ca521410f7279b5259db0e"],["/tags/BASE理论/index.html","856c89b39f5ef78b66a20f98e6f7bd26"],["/tags/CAP定理/index.html","c400e0b9be97058fa9eccae165a94d69"],["/tags/CICD/index.html","3496a4a1972e9dee9b53e6b0b0aa446f"],["/tags/DDD领域模型/index.html","9d50fb232f5116283edf4faeedf4b985"],["/tags/Docker/index.html","ffffe559372d8dd7330b3860fa9f60ea"],["/tags/Dubbo/index.html","04041ddabe670a8cbb5e901c4a764b14"],["/tags/ELK/index.html","d3ab5ccc61dc39c3ab4c7db7fe0fbb0c"],["/tags/ElasticSearch/index.html","1d4c3e401b3fee1a804170cac10f1a45"],["/tags/Git/index.html","575d0198ac6aabd12d41ceae090c93fa"],["/tags/H5/index.html","f0ffd841e0d2b784644c8c774f23594b"],["/tags/JVM/index.html","f3a616263f7adcea63de4bffda84d922"],["/tags/JVM内存模型/index.html","019a53cb1ce51dc93cca14cf0197dd42"],["/tags/JVM执行引擎/index.html","b41c524463253f5bbdea22e4cad9786c"],["/tags/JavaScript/index.html","9aa5a6965e9178d0f07d0f075ff977c8"],["/tags/Java内存模型/index.html","b78f86f953fe3be773a445dc9403d310"],["/tags/Java进程线程/index.html","a5e883aa5b6227b58f54cc1982242bf0"],["/tags/Kibana/index.html","abe06d2cc50d9e513dd66816ca81ff0a"],["/tags/LeetCode/index.html","0ca9c474baf1ac19bfa491dfb703502a"],["/tags/LeetCode/page/2/index.html","2c9275beca191c4722c2ce621adf8879"],["/tags/LeetCode/page/3/index.html","c83d8cf16202893828da833bc126324d"],["/tags/Linux/index.html","9cfd9b5b80548fcd81a848fb763f6b94"],["/tags/Logstash/index.html","500ff6db70a95210b2a5e15f8c86f203"],["/tags/Mock/index.html","1ee1809425b32c4df19dacb670c0b747"],["/tags/MockMvc/index.html","d6e31e9b33f74a888884b2f7cb72488c"],["/tags/MongoDB/index.html","37dedce9f89523a5d794eafeb24274cf"],["/tags/MySQL-事务/index.html","44957e2588994fa01b26e4cb8687e6cc"],["/tags/MySQL-数据类型/index.html","6b141b12c34e8274d70d9a8c78a8d437"],["/tags/MySQL-日志/index.html","9167253f9e93f14c053379654244e188"],["/tags/MySQL-索引/index.html","cba90532e02c8c330a367cc7b6719f8d"],["/tags/MySQL-锁/index.html","1eb6cf8419743267e8d580061b1be2da"],["/tags/MySQL/index.html","f400c539e5387d0b4ea95117d57a8b05"],["/tags/MySQL/page/2/index.html","68948ff4541f29244dc1ef7c457294f3"],["/tags/MySQL分库分表/index.html","ccecaaac234e41f70314ddcec0ea1770"],["/tags/MySQL读写分离/index.html","33c0a1f6ba93a0ce76ec3ea7db80e048"],["/tags/Mybatis/index.html","e2f3d8d06f381a1f5949e4d121281c30"],["/tags/MybatisPlus/index.html","4fb5ff53471a88a415463be0538a02dc"],["/tags/NIO/index.html","c5c053187c8d2cef2019135bb203d87d"],["/tags/Netty/index.html","dbcac704d37b3c65d5af4ffac50657da"],["/tags/Nginx/index.html","192ad3ac6744fc3e6ce73ae7f9fa6683"],["/tags/NoSQL/index.html","c99e8091369732fc7dc7f40dd08a7232"],["/tags/Promise/index.html","98fac51de12c241bf0b8a02883be8235"],["/tags/RabbitMQ/index.html","0b7e16dd66be2a10f8cb6521561001a7"],["/tags/Redis/index.html","5cacdfb14fb5d37eefd67f8133370949"],["/tags/Redis/page/2/index.html","8f3b62a2cffb4bf73663e5d36b34a748"],["/tags/Redis/page/3/index.html","7b3a18f3b8055e17b9452ef4394d6ce5"],["/tags/SSM/index.html","b939fce14a1bcfe2796dc97aa1a9b615"],["/tags/Spring-Security/index.html","45cc973720821db799fac0e0068ac997"],["/tags/Spring/index.html","4f5d9529ce804e41d875163560042946"],["/tags/SpringBoot/index.html","6d434e6f87834b59e5315c1df8c15601"],["/tags/SpringCloud/index.html","14879003047b111ec8175a84fd7f1bf8"],["/tags/SpringMVC/index.html","58e19c2b3aef141c2f0c567369b5dd7a"],["/tags/Swagger/index.html","ad2f718ad10b758c610714558561cadf"],["/tags/hexo/index.html","6a0b6c5741a796319de2bf10769e1c5c"],["/tags/index.html","0ca9c9a07b99f15e00e83c14ac06ae6d"],["/tags/jQuery/index.html","719dc425d26622fccc14269bced6a07e"],["/tags/java/index.html","3928e8ed98a2c2496704863a7b06b3a0"],["/tags/markdown/index.html","d096315f8f84f06c55d3d4ebad27ffca"],["/tags/rpc框架/index.html","6db8ae64ca5805d016612f44ea2f1ed2"],["/tags/typora/index.html","0024cfd7a41867a7965755bac9a11f57"],["/tags/vue/index.html","de6141093957ca329c71e4b338e312bc"],["/tags/享元模式/index.html","ab9c8e5edad884e3ea8fce7cc0ddf3ec"],["/tags/代理模式/index.html","64f0dbd149bc1e485aa94bc9650691c2"],["/tags/内存管理/index.html","3de55981e366b8b2feee9815f292f34a"],["/tags/分布式/index.html","d81b80b100053454c69f5086f075c8e4"],["/tags/分布式一致性算法/index.html","78fc97e5b57c91369715f05651c63655"],["/tags/分布式系统/index.html","67ef339c8bbe8ffe40ab6cc68181eb89"],["/tags/分布式系统/page/2/index.html","01a3c38474a845c62fb23671503db7a6"],["/tags/分布式系统/page/3/index.html","547991bfb4ad8d0354f3218ccb7984c1"],["/tags/前端/index.html","79f0179d762be21a93503c771d203814"],["/tags/前端/page/2/index.html","bbd2e52ddd7587bce4cfb72602020c39"],["/tags/动态通知/index.html","7cc546bde3d85980d674d310912861b6"],["/tags/博客/index.html","287fcc7e95685b56def10a88e38563f2"],["/tags/后端/index.html","1626cfc0f49e1dd6ae438224abc76587"],["/tags/外观模式/index.html","ff6fdb2f859bc313306e1cba2cb2b844"],["/tags/多级缓存架构/index.html","b34e1dd5613a1104b02612c6e721dac5"],["/tags/多线程设计模式/index.html","2d3d755ae2549fbdd7cf7ee35aad2efd"],["/tags/容器技术/index.html","f367e22dee541bc1780f144b0fbe059f"],["/tags/工厂方法/index.html","6793883497c12e27510ae1f242b7dab0"],["/tags/开源协议/index.html","68d2cedae0a6c5a05c79d2b9f8945f8c"],["/tags/异构同步/index.html","f18b7791beb6afe69ed69aaff8ae8397"],["/tags/微服务/index.html","7e7a15aae4630bb1a4e4e645d24b3aa6"],["/tags/微服务基础/index.html","127148c5fdcde4c36bdd8eca80b310a7"],["/tags/抽象工厂/index.html","2fc762ba6c74f442218f014af6a8e11c"],["/tags/持续集成持续部署/index.html","7830d8e4df7842cc7ba838c53bd8fde3"],["/tags/接口幂等性/index.html","d22a5d6eb80fc7ae091bbc0b37dd6174"],["/tags/搜索引擎/index.html","0ca878096c0745d95371d4471d5ece15"],["/tags/操作系统/index.html","809f04c218d7cf4ebbd08d73db820931"],["/tags/数据库/index.html","9cfe5fcebcab5ac4e997ceedb5531059"],["/tags/数据库/page/2/index.html","f5ee41e5bf5e91d46b89a9a7a6055fca"],["/tags/数据库/page/3/index.html","dc2f8094fba3d9e7336ea05b27a26dda"],["/tags/数据结构与算法/index.html","4015cc9f2e25d0f6bd3217d027b637d3"],["/tags/数据结构与算法/page/2/index.html","f6837c31decd20e694c30f1d93387767"],["/tags/文件操作/index.html","8982a4213a6f5d82dee10ffd30f00e2b"],["/tags/日志/index.html","dd95dec69c77b00f77e8015327b959ae"],["/tags/服务器/index.html","aa4d691f94b6f454b4affa6108ddc0fa"],["/tags/权限认证/index.html","0837ed4625eb8c1d96467bd5bb2902da"],["/tags/架构分层/index.html","e5d22851970585bf4adba4b64e38fa3a"],["/tags/桥接模式/index.html","3090d9b7a4d2fefcdf8e439ec4cb3d79"],["/tags/模板方法模式/index.html","842c2b40c2c91b096dcb30aff8b3fea1"],["/tags/死锁/index.html","4d03d83ba0ec8ac766efbbdd32e4bf5c"],["/tags/池化技术/index.html","a73fe437f292425725d8bdf03936cc7e"],["/tags/消息队列/index.html","d334a71e8d806f7a93560c86f37be422"],["/tags/版本控制/index.html","d3b8a712812f9aa3a45790d4ab0e09a9"],["/tags/监控微服务调用/index.html","93f0dcb93863d290b4ed320ad986c96a"],["/tags/策略模式/index.html","9943b242e31a4547de66245f9b2972df"],["/tags/简单工厂/index.html","7960e47ab41a2765359c57b9c72241fb"],["/tags/算法/index.html","f8371b0b63bb3228f33320086b3642b5"],["/tags/线程活跃性问题/index.html","cebdbb836771dd9f10835deb84fb5a35"],["/tags/组件化/index.html","ba5abebcca3bbe6ed7d36693651a3ad2"],["/tags/经典限流算法/index.html","99c98e0da8f3c5f5638186ac80f9cb6c"],["/tags/缓存/index.html","7fb6b84e54933e6aa8765c4018f268d7"],["/tags/缓存/page/2/index.html","e97ee33396a777d4acc4ea4210b569b9"],["/tags/缓存/page/3/index.html","8052f2f162465ab5a173ff9293942be1"],["/tags/观察者模式/index.html","5f608fa09e22192176463102e96817e1"],["/tags/计算机网络/index.html","22906c1d23fed781811c7be1cce5c1e5"],["/tags/设计模式/index.html","30f13de0cdd1092923dd8e8e1d95d50c"],["/tags/设计模式/page/2/index.html","37c173eae4eafc5461bd3e33cbcf358f"],["/tags/设计目标/index.html","8faf17cd4f9273bd576bdecd87b2e669"],["/tags/资源共享问题/index.html","d473e37469425290675b5489889e529d"],["/tags/进程管理/index.html","6e0a584aad8eeb6f1643b5cc46209cbe"],["/tags/适配器模式/index.html","fa21459af8b85a35839b8ee8acfbe33b"],["/tags/通用设计方法/index.html","f3d8645f0fa5ebc87f2b3b36e7bc495b"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
