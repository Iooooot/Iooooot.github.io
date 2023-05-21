/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","8c77f2ddbbc3746658591f7693ca5046"],["/2021/02/22/工具的使用/博客的搭建/index.html","b2be0b1b44fe9462d932a8e1e463272e"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","52e4a9ed9b9436b219d349d3b8a37cb2"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","c4dfbb12efadfc41d9bc99b540eb62e7"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","6b45b76115965c5afa82805d617748c7"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","01ddd10f4e94b7e564bc194f713d0dc7"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","95b1d45922154b73d62b2df335ee2566"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","2220d7d4fa3267071801fb7d2b290d61"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","314a85db696d7cd45256aaee4202d92c"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","d2c880a099b2f980c1fc25dcc79c16a3"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","13f72b9c8888a5cd0b863fb0af6ce146"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","b8657df9effb5a1f703b9d0c2e304e96"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","20ef521f67bae2c14651027ef6dc9484"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","5223bb66e778ebb178d85585916d73c2"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","b54b31ff31f921d1e518ca7416d2f9a9"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","1e94bb59908d85a43e5769d8aebb0a48"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","34d6066effc226d9d9e775b382462948"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","a1121e9331ea11d9fc56eed08eb044b4"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","296fca19a06b1b40562089851a0d6a61"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","b67cd79c44a87e56a59af2718ca0dc06"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","01ca145155304fb262fe753d18053ed4"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","2e71cf72b058b3f9fd1a7c397b3862e0"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","457a2e470465f1a31f21fe1acb250f7f"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","01886a2b845e828405a5dfbecd669d61"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","eb807b4f9cd75a89bb20a5b0d2da2311"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","31f4ffa42b558f45137cccbf632e7915"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","46b5c62dd38efc078813c69af22f7a60"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","95c215fe0499a2aac0eef41e0a7b604b"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","bcbbb4fa066fcdc5633519441a0ac767"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","6971222ba4ae162125334e659fc138f9"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","591b06d152119da5cd6340925d1e6e2f"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","e67a4b4911d729c5bb12d6dc78825acf"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","c9a83e7952337b4b7df57ae79312f662"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","bdc05d2a799eee79d3a2c6f677ba72c1"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","6eafc1bb4f7c7e823d71314b8b2f2f74"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","84011c23cc0af169b67ca067ff6e3bab"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","e20471e44d7453b0f18d51097cd3638a"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","d9f289a75b5dd1c68203373bd353c620"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","9ba917718801244207478d251c00bc5c"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","e04823d1d8c304b66809f475a283fb9a"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","52b4270f733e2c3b2ac7cbc880b1758d"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","b760aedd23646ee12dfe59a4f43148d8"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","e89fccc99d8d0823e3dd5221f1283e30"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","8e17ac73b178e296cf9255c01a47a01e"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","ecb1fcbb779e3a19a0fa33d2c3d002c6"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","31384f14286a645944226565f0c184f4"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","bf0950698dba74cc81469eeafe91b7b1"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","1020a8878ddc54b1c8d3f31f56939dc7"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","5431eb180a1b97a1ada0415ecbcde078"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","65d50141c38e964a7498de4f15bac433"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","7cac00e5bb49ea5d0326ab393984e348"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","c6febf05b00e222eec8ec4d7241f5d04"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","5143973a4650d4a40008ddd0140da69b"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","3f1f00e6894b0584a3976e9c53625be7"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","ec8122392719e54d33c89d6b0ab66aeb"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","8574f5478796e5a5bd4e3df65914f0da"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","daddab7f68fca7b1dac0f6ea25c9a2c1"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","eae7f1f9ab0c0c3c9bd6cb22ba3a199e"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","e3c819f5597adf458c3088ec65a1f8b0"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","ac4b039517f07554263439a47503e1e6"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","603f9b29de99736ace85ee07dea68066"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","920194c6cd247e6121d078ea5350fc34"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","c60cd56a0ef30fe722340b6c43220821"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","2c345a0aa7d8fd76515844404875f7e5"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","1b0eba71ab8b0aece7e946c8d9b0acf0"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","a36b08cc70d4396b38abd5ebc07075b4"],["/2022/08/17/前端/jQuery/index.html","bfcfe5123575a60335f07de76bb2585c"],["/2022/08/19/前端/JavaScript/index.html","908d3dc528ac98725149388af65376d1"],["/2022/08/22/前端/Ajax/index.html","731212bbc66befb99c57b712a8c2f075"],["/2022/08/23/前端/Promise/index.html","beba6554cbcd96f6f949b58f19ff7c34"],["/2022/08/24/前端/Axios/index.html","9a0b2363e34c906a6e8cb47b60eedfdc"],["/2022/08/25/前端/H5本地存储/index.html","861fb2794e0ceb8813a7df03446eec55"],["/2022/08/26/前端/mock/index.html","b7b974de9094b31e555ee3f455d0b9a6"],["/2022/08/31/前端/vue/VueJs/index.html","35a75e531085e57b484c1edc27f0535f"],["/2022/09/01/前端/vue/vue组件化/index.html","55bbd3f4b90b45332bae6b3a2b65ea1b"],["/2022/09/04/前端/vue/VueCLI/index.html","6eba6151ce2af251b067ef2379ffedfb"],["/2022/09/07/前端/vue/vue实现动画/index.html","9fd360370b53784f4e1dfaba46b8b74e"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","36823860c2a117f702016cd11139b77b"],["/2022/09/10/前端/vue/Vue异步请求/index.html","0368a1178e3da146510ffdfa29413590"],["/2022/09/11/前端/vue/vue-Router/index.html","04c70c3f83f6f85f747604fec33b3af5"],["/2022/09/13/前端/vue/Vuex/index.html","5d5ee1cd8a71220a685dce465e834085"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","5846abf4e283d5ec29461bdcdfe9398b"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","cbbf5bd11ce0eb1b1a9c50e29b092c4a"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","158a6194ab556b20878abdc71498eb3d"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","8e4278ca3f06b44b1d4b001bd396be20"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","d6fc605f28433a54edd793a28a4a2bb4"],["/2022/09/28/DevOps/Linux/Linux/index.html","9e1a0d0c0273b236c8635885157c1f4a"],["/2022/10/02/中间件/Redis/redis基础/index.html","8306d587c7ed84dbaad34107ba6c9092"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","cc74e134b5265dbc33d05b6f577764b7"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","a908d13723e67cf2e929dcdab718a5b1"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","3e72b2b721b34687c39d3e162c99c2b0"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","88eff0f5e90453e1640b438d1a6aad77"],["/2022/10/17/中间件/Redis/Redis集群/index.html","f5715f8408d3f12a869f7b9d75173425"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","547b5092cd5c87dccd3c24bd990e5271"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","8e6edd9603ac90fb094d3a42bc9e97b9"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","89b26cc9a61b57d55a2963a23d24edbd"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","a1b89475906fb66e800fcabc787d5a8a"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","ebad2ab56c2fd34a7f4342b4a8ec7853"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","2c072d8101bebbac809199585467f4af"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","49492f4bad2c71b329c9990aa23ea713"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","f5f92f157654cd01eba836d3702d8b57"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","9b2bf7abcd73db6c9324aea55ce4d6b2"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","6b6f1b7922671a2ff2a836b71fa4b94e"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","198f9e4f4eb88a20167f8302606382fd"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","0db6730059e56b6daef0da9e5a392634"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","9b1e9695b1d0c4fbff51ce7ed40315c4"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","4e2c0f2f37b7ff00eef4ba9e60fb2f92"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","de93d56172b37dd257d6f5f26746c655"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","da9c0899afe34f4fa589376cfa6d7fd4"],["/2023/03/10/DevOps/CICD/CICD/index.html","75984c656238e7a18559728046a89faa"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","5ef136fca928feff6184a53bb832aefd"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","f477a1a409ca349923722cc5b1aa99a0"],["/2023/03/13/Java/NIO/NIO/index.html","491de0062f2246832744ad7a2da21d5a"],["/2023/03/14/Java/NIO/Netty/index.html","2cae9c27edd229045261d5f6d98c0aac"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","97ec6e8599dab3a7db69da2fb42404b7"],["/2023/03/17/系统设计/分布式系统认证/index.html","11f5df32862099e570471237d40c2866"],["/2023/03/19/Java/JVM/JVM概述/index.html","70ddb612b02129b3d997681674afac07"],["/2023/03/23/Java/JVM/类的加载过程/index.html","24a7ed3644bd9ea15c76edf115e4fa3d"],["/2023/03/28/Java/JVM/对象的实例化/index.html","ab48701a1b47c6295c22f1e8fa7237f0"],["/2023/04/01/Java/JVM/运行时数据区/index.html","9f2ed6381877fe1c9e2bf814cb4baa5e"],["/2023/04/04/Java/JVM/执行引擎/index.html","98bb551def9d772fb563c4ba5c8755ef"],["/2023/04/06/Java/JVM/对象引用/index.html","60e229d47238e04bfd49e03969bea1bc"],["/2023/04/09/Java/JVM/垃圾回收/index.html","a64e8a97983675f9d246919902cd853c"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","0045a1989c4b7d5418c854e83b37629b"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","76ee4ec8cd2f3bde51c601f4f4ee7af1"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","c830cefdf3f7e4913ef20e839ac1bd2a"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","60816abafbe2db3ffbdb58c600ec1792"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","0ca7aff4b45fa6c95fbe60e04ae34dd6"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","87e0212834af092554c9470772494003"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","911711482b16e093c99f11f1ef1c752d"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","03d7d470924c07a97bd9cf97f87ea3b5"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","62b797f1f3e74ca7e667a0738f01bd9d"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","9d7ead5a7c7342f67317b72609151bea"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","991ddf56b600b1b142763d4005b956f8"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","6641fe28a0b086dd9ce51f6df3be3f06"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","e740a1860d815652a28d078e9366fac9"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","715b77683fe8ed8bddc39a147edf498c"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","2acfbd8d354a054ea623a95a76eb64f1"],["/404.html","6cb2def21ff73ca6470c82bf49fdba8d"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","1919429e6ced84bfd4619370a7d8695f"],["/archives/2021/02/index.html","ac8b9643f0648111316e8cfebadbd3aa"],["/archives/2021/03/index.html","5e79c37e5770b801f82f4d9c557634c8"],["/archives/2021/03/page/2/index.html","14c3d11682ee0c495ae392e221e0eb3f"],["/archives/2021/03/page/3/index.html","d59c87646ebfb013602d99ae6b1cd40b"],["/archives/2021/04/index.html","b66f11dfd776974bd123f820597b1c1f"],["/archives/2021/04/page/2/index.html","8d6a937cdfd8e2bc7dce412300faa437"],["/archives/2021/05/index.html","ab81ced129eaa47167f7cbc101250eb0"],["/archives/2021/index.html","8ca1af64b09701b87f6e63d00bd611ce"],["/archives/2021/page/2/index.html","94375a16905f8f705ccb4a91f6ccab0b"],["/archives/2021/page/3/index.html","2b3f81820f3c5b908542b335235eb622"],["/archives/2021/page/4/index.html","b20d84e9ba02caf7c995999fea269161"],["/archives/2021/page/5/index.html","698c4dc21a846de6ed54afeb527293aa"],["/archives/2021/page/6/index.html","6ca70f86fe1754c75b0b32a70a39e33c"],["/archives/2021/page/7/index.html","6d4da98896e1833bee11e1aad94686d4"],["/archives/2022/01/index.html","30a361426dd94e8c37e4ef539e65a165"],["/archives/2022/04/index.html","931c904741a82981d2a0839ca2c445bb"],["/archives/2022/08/index.html","6cef0d66b5b1b177b9880bd052d7c7a2"],["/archives/2022/09/index.html","618029af8d67ebe028406af4f5502a09"],["/archives/2022/09/page/2/index.html","ffdc369a4bd3aa2d6093d2ef1cd85985"],["/archives/2022/10/index.html","817366d43eac9033b1c0c2cc9afbc9d4"],["/archives/2022/11/index.html","5c2dca18ac2fff4649b544b86c5cd2fc"],["/archives/2022/12/index.html","b5d9c640b125d7df0957b75b4c79f9ac"],["/archives/2022/index.html","a238ce7c2d3e9ba5bdf20fea44ee48fe"],["/archives/2022/page/2/index.html","d76b5e84a01677bffacb2b2bfb1139ca"],["/archives/2022/page/3/index.html","9e30035b5b57fdf629eab17d6ea8d49a"],["/archives/2022/page/4/index.html","e61906431964542dee2beeda8db59067"],["/archives/2022/page/5/index.html","367434e992c7a2117b5fa423e2c849da"],["/archives/2023/01/index.html","71e76b28785648ff4782482d0dcc1fff"],["/archives/2023/02/index.html","6c4618726323d919a9a793752f750d96"],["/archives/2023/03/index.html","08f6e5cfe26d65a5c5823f78f853e3ec"],["/archives/2023/04/index.html","4415f5b90b7e9efb4a6a9cb50e63ae19"],["/archives/2023/04/page/2/index.html","bc4fbd328607767e931fad71d590cdb1"],["/archives/2023/05/index.html","999e9047359fa2312c59b585e62af10e"],["/archives/2023/index.html","4a85d66d52a756988c585dd99958151b"],["/archives/2023/page/2/index.html","17a56e23e140258e23990b122d774674"],["/archives/2023/page/3/index.html","febef5719bde2b3ade9a1f5afac1978e"],["/archives/2023/page/4/index.html","064640363e7aea2e55e2185a1f1cb632"],["/archives/index.html","b14a40cbbcc2e433d72715e7e57e2b8d"],["/archives/page/10/index.html","f75f880cc4a8747b68207553c2195429"],["/archives/page/11/index.html","ae264889327e53cb698216f97787594d"],["/archives/page/12/index.html","7d45a1c7998028016de779d23979f878"],["/archives/page/13/index.html","3cc1c04589f0ced3af9cd9a09593675f"],["/archives/page/14/index.html","37b3de1450281e02e81d81cb82635e5a"],["/archives/page/2/index.html","dfb5679d982016a6438aba220404c996"],["/archives/page/3/index.html","3f59ac5a8c33c5486b2d9ceb2404c534"],["/archives/page/4/index.html","ac7810fcc0e445c5b105592a1e497686"],["/archives/page/5/index.html","d68c83be0f942b6848a3e127b123b3e8"],["/archives/page/6/index.html","dd9b4d0e63ca09c6edf86337abee73f9"],["/archives/page/7/index.html","bdf07d453e572b187b2ece68bca9451d"],["/archives/page/8/index.html","47e3ea7dcde7f2ac035b20a41b03945d"],["/archives/page/9/index.html","584333d0ed0ecae8432bbde8a5e696c3"],["/categories/Devops/CICD/index.html","5019bfdea6a1a44706a4e300fc1de396"],["/categories/Devops/Linux/index.html","1300d23b622c749eb25f91abb6d4abd0"],["/categories/Devops/index.html","89e722b16015dce2d74ba2d81f6c4743"],["/categories/Java/JVM/index.html","0f1bbe51ddd099aee4b64ce339329b39"],["/categories/Java/NIO/Netty/index.html","2f73491e40e00e0e3c5370803d0969f7"],["/categories/Java/NIO/index.html","7f534907f2757f3beffa25ca1eeccac8"],["/categories/Java/NIO/原生NIO/index.html","f77bb70f4a539c5e8c9681ecc7470b04"],["/categories/Java/index.html","265b16e82e0fde5ba12ff5ae3474382d"],["/categories/Java/page/2/index.html","4f5fc02e2f04a18fe100ba4e18f138fb"],["/categories/Java/学习路线/index.html","488bd9e7a24bf0da403a1a75015acc1c"],["/categories/Spring全家桶/Spring-Security/index.html","f3bf9b0b9be1fa36b6540d59a3c08c6b"],["/categories/Spring全家桶/Spring/index.html","7fa51da5e0176797251e1a81b4e2726b"],["/categories/Spring全家桶/SpringBoot/index.html","6f71775cb69b6111f0bcafec67f32fc0"],["/categories/Spring全家桶/SpringCloud/index.html","e090a09adb335dee0c9193155b0608a0"],["/categories/Spring全家桶/SpringMVC/index.html","5041415a3df7bfec0b17567f2e090963"],["/categories/Spring全家桶/index.html","2c495305e259c155c77d45acc946b284"],["/categories/Spring全家桶/page/2/index.html","27b6d3dd50fc53931e6e0f6bfb6e6dc7"],["/categories/index.html","3516111e6f01a0c2af55101bbf68af4f"],["/categories/中间件/ElasticSearch/index.html","70cdc330f13c21f5af469c9affb05c86"],["/categories/中间件/Redis/index.html","a3163f3fadbfae41a384b698e51656df"],["/categories/中间件/index.html","9e7d9b43b3f7a774ae7353fc3d21b465"],["/categories/中间件/page/2/index.html","4cb760787448f2a86ef2a651a02d9ab2"],["/categories/中间件/消息队列/RabbitMQ/index.html","ef741aac6094f4c3e24881f84f208cfd"],["/categories/中间件/消息队列/index.html","0a4876548d118f8536219329aff870e7"],["/categories/前端/Mock/index.html","1cadb4dd41302f8b258c09402a1a7631"],["/categories/前端/Promise/index.html","6180634d679143d39d37fad0914c59a7"],["/categories/前端/Vue/index.html","2bc60e8e7558b374b779a1b4fb7e441b"],["/categories/前端/index.html","6a33e2e4c566f80b563b580ceee25bb6"],["/categories/前端/jQuery/index.html","1004d9bc64a89efcce0b3798effe5d4f"],["/categories/前端/page/2/index.html","2fd6ef5a37dca0200e47e66c67fd1b6f"],["/categories/前端/原生基础/index.html","5728fb12f9ffe86ef8d3ac738aa31c7e"],["/categories/前端/异步通信/index.html","967490bde2d61b907fdff970f9e1c1d9"],["/categories/工具使用/Git/index.html","ea748fb934695e4a83eaddf95236c2e5"],["/categories/工具使用/index.html","2a4dab7e47d044cd5794b81b27275f25"],["/categories/工具使用/markdown/index.html","9b1703c40a0bbeaf7f86b5d29b236407"],["/categories/工具的使用/Docker/index.html","da911a427568b31107ff1e1b6dbd4e44"],["/categories/工具的使用/Nginx/index.html","c94b051ab8d19b201d498d9d040f1069"],["/categories/工具的使用/Swagger/index.html","36df2929b0d1300f1e471aa89527798c"],["/categories/工具的使用/index.html","b2694c545d75c73438bfa0cc3c3bb33f"],["/categories/工具的使用/博客搭建/index.html","98705f4ad4f9470cac51a6d0ef8ba7e9"],["/categories/数据库/MongoDB/index.html","5dd75217cf2b0149c969c53eecdc507c"],["/categories/数据库/MySQL/index.html","80b2fc4557cfad476b30b7f1dc18a9d4"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","a9b2ee3c9ac350071831853241c582c5"],["/categories/数据库/ORM持久层框架/index.html","58765c227f3cd07fb33f9c13457b5842"],["/categories/数据库/index.html","1221284e732655786a82ba53b7c6155a"],["/categories/系统设计/index.html","42edad470d9cf39acf3ca4477e4099d7"],["/categories/系统设计/page/2/index.html","34a7281b38c7fe372e4c5dcc5b7cb30e"],["/categories/系统设计/分布式权限认证/index.html","62f6fbf19795eaa8e4472617470f0c6e"],["/categories/系统设计/设计模式/index.html","9bd855d1abedc7843440a8817bffd6b6"],["/categories/系统设计/设计模式/page/2/index.html","a15edb8c82b566db9acb45046c068786"],["/categories/计算机基础/index.html","a444ef2ad6f62b585f9e56493a167010"],["/categories/计算机基础/page/2/index.html","c7591fc3ac77d52714781fbdc2eb94bc"],["/categories/计算机基础/page/3/index.html","a86028df808664800baed7c24c6a4e7e"],["/categories/计算机基础/page/4/index.html","5ad859ddaabfc32ba2b8fc196878d017"],["/categories/计算机基础/page/5/index.html","646866e730d82dce014a9ab56bf62fe8"],["/categories/计算机基础/page/6/index.html","82ad4061647fbf645b13f38a7af802f3"],["/categories/计算机基础/操作系统/index.html","33e73bc1598f7469cc564d2c7d357349"],["/categories/计算机基础/数据结构与算法/index.html","a6a07c63e0c3719b8b50ca5f2891da71"],["/categories/计算机基础/数据结构与算法/page/2/index.html","0fd18c7ac570dd07a64a580ff123768c"],["/categories/计算机基础/数据结构与算法/page/3/index.html","a0ce1a4cf63e9b34b465dc0b001dad77"],["/categories/计算机基础/数据结构与算法/page/4/index.html","e9608e39310bb83e711dd157e01bc622"],["/categories/计算机基础/数据结构与算法/page/5/index.html","e6fc3c5707886d0263941eb74356be2b"],["/categories/计算机基础/计算机网络/index.html","983a3eb478708875cab70f690ddebe0b"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","61cf73ae4ebb761f26ae1299bb128d6b"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","93486e09be936f1cf49d1639f9acffcf"],["/messageboard/index.html","9735f999e5b34192401f08db62d668d3"],["/page/10/index.html","c1dbf4d59bc0f7f986d5704f08ee9496"],["/page/11/index.html","7996a757bdbc2cb07a65b3fb5e8056e4"],["/page/12/index.html","790f61b9a25ec8c7698d4f815b9b5493"],["/page/13/index.html","539fde4850a4e927892318616ff1bd2d"],["/page/14/index.html","9acf18537867f0b7745a59716ddf164d"],["/page/2/index.html","2e8c0bce674debbb2bcaebbaa5a2d03b"],["/page/3/index.html","e4cdbe2bcf56376f89b97d0c09c1f179"],["/page/4/index.html","8eee2b09f07384c0337e4a996ade3d2b"],["/page/5/index.html","1c87dec822d00d0273faf978e59fd29d"],["/page/6/index.html","a55a975f885a9659d20363b8648dd86c"],["/page/7/index.html","eb262fd8eecd564e6d095f96ae874fdf"],["/page/8/index.html","acd91d16ab6a94cc7c6f50c92e3ff97a"],["/page/9/index.html","b9c7f0718fa8d9ec44440670e3af27d2"],["/sw-register.js","a4a2353531026dbe5fd0f1fe72adec66"],["/tags/Ajax/index.html","2e7923c08bae5e1331285694ad76c262"],["/tags/Axios/index.html","4b0d79145fb04f20bc4643a1ee8fd586"],["/tags/CICD/index.html","abe65de094cf4b9196b0d6b23852d538"],["/tags/Docker/index.html","104c71386d3e61f220fa7780ec7068b2"],["/tags/ELK/index.html","4c85ebd070951da189f2b6a816c26e11"],["/tags/ElasticSearch/index.html","dd69a1bf0f4536a65b6c44dd0d151222"],["/tags/Git/index.html","d947056ffb1ca30339ea8a9c17ac7372"],["/tags/H5/index.html","1c3b9400edc31d00ef17a158acd552d1"],["/tags/JVM/index.html","b2f3ea1837dc9c7b23ee07efed99116e"],["/tags/JVM内存模型/index.html","263bd34b6d32ad9c810174a03a55907a"],["/tags/JVM执行引擎/index.html","45bbb73e5d00076e633bda06a46e7802"],["/tags/JavaScript/index.html","6f0dd0a79f36bbdd71d15271136d0ccb"],["/tags/Kibana/index.html","7f2f7c80fc23f1b4b85fdaaa2bca608c"],["/tags/LeetCode/index.html","8aebd477c0644d512275641deb162512"],["/tags/LeetCode/page/2/index.html","144b6ce2d22437b40873103a2f9d1b1a"],["/tags/LeetCode/page/3/index.html","4e66342d0279f5df3032cc398385ce3d"],["/tags/Linux/index.html","f6550726036e1241c40e0a824a5fe203"],["/tags/Logstash/index.html","0bf1091a1e076c1ae737689f8999483a"],["/tags/Mock/index.html","85e1fcc8aa94c13e6379c0d1881deeee"],["/tags/MongoDB/index.html","727c288fc88cb4ef038b41c7ed0ac0c5"],["/tags/MySQL-数据类型/index.html","ecd1be902e2027eae717f23dcf6c1bbd"],["/tags/MySQL/index.html","1ef71c548a234a91d6583f7f7763518d"],["/tags/Mybatis/index.html","e963b2c4426af2c94d07fc7949ecc316"],["/tags/MybatisPlus/index.html","d4755b99c7f32830835ccc3b405233e8"],["/tags/NIO/index.html","225f6c3f03b2bd240819359ea8c82dd2"],["/tags/Netty/index.html","d055b88c9b085fb0b506ee73d06c541e"],["/tags/Nginx/index.html","17c043ad880065d564fbff7b63312d54"],["/tags/Promise/index.html","6c1e509fc6bb852741cf8d51b7192a96"],["/tags/RabbitMQ/index.html","cf579a895b6fe5cc88d531ca6fb4ff42"],["/tags/Redis/index.html","cd9c639bbd01ce6fd197bce237d694b1"],["/tags/SSM/index.html","d341cb4bd465bde813755a5c5e7372ce"],["/tags/Spring-Security/index.html","5ca7c08c2aacc0876ccc1349cbeb3199"],["/tags/Spring/index.html","adff989e31687fa82a60f66a6512ef72"],["/tags/SpringBoot/index.html","f4a12e352774b0f299e1fd91800b4b58"],["/tags/SpringCloud/index.html","f57f0f7739af3b86c4f2e647b1467aa3"],["/tags/SpringMVC/index.html","d96a6fe326aa6e85c7bd971c1770ee44"],["/tags/Swagger/index.html","c6a712a8bf5a081ea48561b3fb5065b2"],["/tags/hexo/index.html","767c089d3bb8d88ab05d5b368515017a"],["/tags/index.html","72a6184ec4ef7c35b0815d1b54e83cde"],["/tags/jQuery/index.html","0ef0f33179107e7b044dbf11e5f2a666"],["/tags/java/index.html","fb9037c1ebd2f6822148d37c13266384"],["/tags/markdown/index.html","dd255379a70a6d5cb12277c7dfca2d5f"],["/tags/noSQL/index.html","39c5efdfd4ff5b1ee63e31c4a07dc74c"],["/tags/typora/index.html","4655cb0503df8d91f9b5b931aeeb7670"],["/tags/vue/index.html","dfd5e759732278c0a0869f9d6f3ff0c0"],["/tags/享元模式/index.html","9510775bbdc49aa98e6d0640f28911f7"],["/tags/代理模式/index.html","3335cb4d3030fa1f64035b83ff9109b4"],["/tags/内存管理/index.html","54e56cd9a82f1791c203960105ca4a7b"],["/tags/分布式/index.html","09310f2911ea56c6c1e804f0342a8210"],["/tags/分布式系统/index.html","e17a6f435d74a73734d36fe552100bce"],["/tags/前端/index.html","c231f3f833977af484b810a31fcba7a6"],["/tags/前端/page/2/index.html","c12283ede46d07152aa0d7621b3f0bfe"],["/tags/博客/index.html","d6876c5e6685772ba045ec9172458bcb"],["/tags/后端/index.html","9219471f01c13c214302bbaa86bdbb28"],["/tags/外观模式/index.html","e4e36d8ede15b08760e33e31f3cb1819"],["/tags/容器技术/index.html","483be89b0e896a8646721b7d84a72405"],["/tags/工厂方法/index.html","940f8387e341ba6f3192ca57b54006c3"],["/tags/微服务/index.html","1ec476b3ba95a02eb9db54fd0659b366"],["/tags/抽象工厂/index.html","4147892c7c93f6735b84cefc70d9237b"],["/tags/持续集成持续部署/index.html","4deee77b491d3be6b3d635e886efe715"],["/tags/搜索引擎/index.html","c58efa396a6c8099851846c9b314b90b"],["/tags/操作系统/index.html","773adf0e3c2dc48844712fc989aa92c7"],["/tags/数据库/index.html","97383b97034d3e55c22ecdb397cb4ca7"],["/tags/数据结构与算法/index.html","18064f635c590c18c8a6032159f7a9e9"],["/tags/数据结构与算法/page/2/index.html","a84ce77d9fd9da1724cbf04f47e136bf"],["/tags/日志/index.html","a28f62c7b11381c41ff534b7ae40451a"],["/tags/服务器/index.html","3616cb69efb7c20781ed91733e3068a9"],["/tags/权限认证/index.html","b18ffc0f170cd601045aa47ae9ef8a13"],["/tags/桥接模式/index.html","7e0cb9fb03a500dd7ff91a228d264110"],["/tags/模板方法模式/index.html","bffef3006b780ded7a60d5f8cb7f1718"],["/tags/死锁/index.html","ac9aaba07839f69e8bb2886624b823aa"],["/tags/消息队列/index.html","4c928edb4a8a0441ae4d04b358c445df"],["/tags/版本控制/index.html","25b4ddd134828fee287885dbf244ed01"],["/tags/策略模式/index.html","0826be9dd54396b0863bc2284bcb945f"],["/tags/简单工厂/index.html","9defd4f0fa077e98a49c4772c4babdc7"],["/tags/算法/index.html","88582081f0d4c14265d52aa1e4512965"],["/tags/组件化/index.html","ce9f60000c596f114aebae0111b8f4fa"],["/tags/缓存/index.html","7c5bd19e3dc872c409a5057873432864"],["/tags/观察者模式/index.html","96f25404834443b33c92309098f329a2"],["/tags/计算机网络/index.html","ec56fc51f35ddf81fbd1188bc557db3f"],["/tags/设计模式/index.html","0326c3354159dde4029449e063b66674"],["/tags/设计模式/page/2/index.html","d6f9934048662099570d2f3ce6d63845"],["/tags/进程管理/index.html","ca5d391dadd3dbd3ddba566955fd1bcc"],["/tags/适配器模式/index.html","04e834d0012c9a3e64e9d7352b0449de"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
