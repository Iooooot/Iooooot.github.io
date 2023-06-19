/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","697ccc1af9cc3abf7303db57f872232c"],["/2021/02/22/工具的使用/博客的搭建/index.html","7875f9853f8d53d50b5610b1d78a580a"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","4c7428719e65a1b96e2fa37c747fbf7f"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","5bffde8d4f4ba139533d605b4d434cb7"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","f8abfca9b39170b8ed9ca2446a2854f5"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","8d7a2801a2bd70f311bfe73d228d0c62"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","38dc927c7837736d270ba1de67158812"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","a71ec4cd63db9a46e7de13d6a4fb43e1"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","35f1d042a77cb3fb02c1f936ad74f39d"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","35277c9cf47d79cf76f68df9234771ac"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","9d7bfe2ba42f1959196bf98089ae8bc8"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","f4967b129c22ac36bce4a45d68c60201"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","0aba1c1dc1f4b2f573d1d2c28e775166"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","2ea54f1917b4260804a091f93b817c4d"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","ca76b98a9f3102fcaf69e5364e2962cf"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","60ad5d00da2d0658a3aa32a2484ab37d"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","09f62f9539a8b1943b3bddc4d84b938e"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","e5b08a3c07a26a03cf8f9843efd759aa"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","46ad5f40fdda327771c3934097f16ed6"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","9a2454f6fda667d199badbb525b8306b"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","0893b7c331e0d8a10fa707f29662c840"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","174faf415c59da3a9910ee50abfb0967"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","49a9d79fd7d0239532bcc2a4f56b4d8b"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","d829b7f6273d64d3f7f57b44a60de82c"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","fde4a8a5b3dfef302a3273bbe8e79879"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","95ab114ebb77119cd2140c6d5a3e41cc"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","dc147101eb93f8b974cf59a23aedf64f"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","b322998951c81972375fd44199b20b0c"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","1aeed9d0e1ce4595e5e0cfb3352017e3"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","c84ae9aaf84cc9d5937cb4a6b00b8ebe"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","fc5eb96687957da96f8a687559039c6e"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","e4eace9a915d584e294fcabe29c5100c"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","98254a7702e26cdaf4e85674b192ca02"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","9e3cdc942842487fddf85ee75a924f3c"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","fed8467a4a48d2badef08e191299f48d"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","93f504d21e8d5fa8f1cf08a9d4c833d0"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","9238d69cb392e767acf4cf81512c44a8"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","94b7ba6c94163f1954c04c632a0dd0f9"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","39feba8219a37619abc553c28e80e918"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","dbb0bdb55d8d52d814d93be50f35eab7"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","a8ee5e0979bb06b34cafa7f80e57de65"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","4d7306aa9b7ca7c70eb307229ab94344"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","b79357319ca8d322aab51c7f348ffc81"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","1359f639839f0dd7dc136cb35e5b585c"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","8f8551d02ef19c12b052edfb18c2423b"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","b766bef94e68f3cb369f0060e97ace02"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","79c28437c185e6e6dc43a5b35cf280fc"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","f9017c00cba8e3edaaafd31cbb16e126"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","c00b4a8eacbd56ac8def8300749effa0"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","2dc9631db9466ba185b9a347c4fea820"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","25f55f56f3c8c1233bf4152578ebba20"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","3796e12042018e85be23f0ccedcb8a58"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","ee585265f6fbe586bd17c07cfd68f572"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","17d0601731ab4f3ac99b00a8cda37309"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","7f7828a4f2322633d3a3ac02e271fc13"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","9c8f3e8156ba24c2e902d8ed926b8e83"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","ef793b6bd953beade0dacc628cc38145"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","331974be0369ea613afd1c3e9abc1a93"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","35d06d7006bff3f85f03762f27a541a9"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","6adeb1e2690a9f8112e09b694b53fbb9"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","9080c0790d4afba293cded5a250c1084"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","4c8025f53f51d83e7d31f6fad86f9bcf"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","4a0fbcf46f384d6e0b8b77c03b282449"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","4d453acd9d87cc7fbb4ff449443b4089"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","0f90231af878b8382756a9f23a525f71"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","5b8d5f376518a16b432f4339c57da048"],["/2022/08/17/前端/jQuery/index.html","dea76b72335b52e5846291d3f4e14f04"],["/2022/08/19/前端/JavaScript/index.html","7bc36bb8a1ee37d157ad839e2428174e"],["/2022/08/22/前端/Ajax/index.html","d900f6848fc174dee729eb8509f123de"],["/2022/08/23/前端/Promise/index.html","868c791d86805db1f2823d3e68b33964"],["/2022/08/24/前端/Axios/index.html","34d749da5f7b8b0b6ee16554cf860a67"],["/2022/08/25/前端/H5本地存储/index.html","9f4df332de4aabcf4760c83a4b3ece1b"],["/2022/08/26/前端/mock/index.html","a2edf262abf0ca05f24b84315cb8af68"],["/2022/08/31/前端/vue/VueJs/index.html","fc65c577dfba835d751eda487c44202e"],["/2022/09/01/前端/vue/vue组件化/index.html","a0e319006c384e88c7e6de9f8e21c42b"],["/2022/09/04/前端/vue/VueCLI/index.html","dd7764697939931ff27eedb9b34ba70f"],["/2022/09/07/前端/vue/vue实现动画/index.html","883c89defe46eb8c24da56761939db5f"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","9abc04e76074002bbb522e0a67d4a5e4"],["/2022/09/10/前端/vue/Vue异步请求/index.html","9d97e76c6984217b6094620948a66c8f"],["/2022/09/11/前端/vue/vue-Router/index.html","0dd01ffc0f45b42b3f685da4c36b7d6f"],["/2022/09/13/前端/vue/Vuex/index.html","b67589d7d149d0c539b8b5597909fe0d"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","4231670780d2ee8ff2eb1595deae3c24"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","984eb7923c445cf7ea5178aa44509b7a"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","84d689663701d5d0e3babe0ec5fcf8f6"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","552ce775e27261bd09f4efb1ccdee57f"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","94560c49aeef71f785416b6704682987"],["/2022/09/28/DevOps/Linux/Linux/index.html","c8dff8541909412e78bd773f5c035e7c"],["/2022/10/02/中间件/Redis/redis基础/index.html","404087107ba6d50ddfb0aa9d7d61b35d"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","6503262bc23117a00a4c8abd7c585605"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","29e9ccedca9dd90ad2b5ed8db132b0b3"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","3ebbc0f8f2c00e9ce34454a8c6809ed6"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","53391e8b18674bc4927aa620730534f3"],["/2022/10/17/中间件/Redis/Redis集群/index.html","a7b1657e1b57feecf8099c995f469899"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","6c7e2a0c154b16ed046008c9e776a40f"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","d20ca03de69abab762d07644391ea6ee"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","550899a9e400aa266a6fe99fe42c2a11"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","8516bde615256162487c11e6ca86798b"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","6316e86b35487724db41cb09462a1985"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","3131b6305797b80057a72340234d0286"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","d57de0e12deca41031a5db9593d34c2a"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","3058288cf8d35509ce4b19b87164aab3"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","214fa130c1966ded7858d378b45dbc5c"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","b02483260a22717c4944be713d485120"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","df3e9191a2ffe613dbfe85929964feba"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","8f1125e77f1dbee3208b5ef7cdbfe5f6"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","4ea26de2bab88c1684d64e0afa2d9229"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","878a931552945ea9bdb195fef124e998"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","c8b4600df7f639f55be556b6833dd76c"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","ecd3e188e70f214e960168db1f60b8a9"],["/2023/03/10/DevOps/CICD/CICD/index.html","ad3745224383db192973ed30e2ba77c1"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","e40f2e290df16007c8376c4147db88bf"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","b90a2c7075c17e534871584d0d422472"],["/2023/03/13/Java/NIO/NIO/index.html","bbbeb30231f6a1c5dbc725554310ee27"],["/2023/03/14/Java/NIO/Netty/index.html","fa88606e977c50dd5d4b6ee568e6b17a"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","df362293cac8d77c12a2b470ae7b29d4"],["/2023/03/17/系统设计/分布式系统认证/index.html","3c556fabdf53a1cfe2b94d14c39e70d4"],["/2023/03/19/Java/JVM/JVM概述/index.html","dd0730f8b515dd8245a41d3447fd7272"],["/2023/03/23/Java/JVM/类的加载过程/index.html","11160c46eefb82e5076ce561e828f16a"],["/2023/03/28/Java/JVM/对象的实例化/index.html","35df3294bf0d7fc57a25da827ccbd436"],["/2023/04/01/Java/JVM/运行时数据区/index.html","660a078249474c22d04256f6356af3da"],["/2023/04/04/Java/JVM/执行引擎/index.html","82851ecb028a6295412543b5db69205e"],["/2023/04/06/Java/JVM/对象引用/index.html","e3ee8d542567655fb20529b386ffe8d4"],["/2023/04/09/Java/JVM/垃圾回收/index.html","ca1da42a2f4067879be5b85dfe59e172"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","937259ca30ab98d999e34290048a2780"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","ccea8498417c01b74e59e849ac05c995"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","19a3d4b0e29416d331175bad339d1df9"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","9fdea05b4ddac8d8ac25bfc021f203dd"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","b95dbe5e78a77ab0c41611d92f08cd80"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","49e72505909a80569b2bb3fea889d578"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","93f6782810c9d9d9031a40f3f5f4f70f"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","74b9d6db1bb6779bb2cdb1216505ad2e"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","cacd126858623e379516b3809848ce7b"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","062e50625f9bb7752506d71aca86e6d2"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","9e8b7bd5f88ac33a3c71157464f31e14"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","0e087bcf88626601837747246fcc98a8"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","13b7e37643ce762a5dc950845d1bf6e1"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","bf4ea93578c20bbd8e7435d070c71372"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","ec2e96b46169e9e8dd2aee888c8e1a88"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","386c30675d7fe2e0e84cedeb79370878"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","8fe7df88292cc6e16c072ab3af202857"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","1c4e0d7a1cb48497ba76bc70f0af0ab4"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","b2e61111980f5876aa1cdc928ad43c02"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","5306c40637fdd8910f7b83f8fb531d05"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","f761f329ddaffbed44db6ee0bcbec984"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","007d81cde4802e9f5f8d01a8aaf27d9f"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","2b0b97a19041f1e7a4d0e57acd3b76ef"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","e15557a2968e1c5b238b9836e749461d"],["/404.html","358cadf2c4bf10cf588338045c51a1d4"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","4b60004b88fc4723d8fc2b27b6ac9973"],["/archives/2021/02/index.html","11311ebc340fd9975ace4f52c04b20ff"],["/archives/2021/03/index.html","0341fb46bff8f2c20fee73176519366f"],["/archives/2021/03/page/2/index.html","c6833f574ae17aa86a4c021cb97f63b3"],["/archives/2021/03/page/3/index.html","f2a40e610a3a46baeea21b0bb7d08d49"],["/archives/2021/04/index.html","c1e02d64fff327c8d112dadb3a993844"],["/archives/2021/04/page/2/index.html","4ff80c615cab0ea2ca24d7668341856a"],["/archives/2021/05/index.html","a28204102fb4ede2e654db19fb052495"],["/archives/2021/index.html","a83e464f5d4e49ba5d015e3ae3d5b8c6"],["/archives/2021/page/2/index.html","407e6c1bce3633672cf891db99d5c8ca"],["/archives/2021/page/3/index.html","ca14e2fb8535f97fc14f7c5111efb22e"],["/archives/2021/page/4/index.html","3e1248532ef5a065efe8c178032b042d"],["/archives/2021/page/5/index.html","c99f67faed79a6878119a7079f0ed60f"],["/archives/2021/page/6/index.html","22f08455c5b1a5adbb35819f36ec925d"],["/archives/2021/page/7/index.html","0671c53a13a2f602260112fdd28a5fb1"],["/archives/2022/01/index.html","b7b2304632f2a1a9ba5c05ba7a55bf3e"],["/archives/2022/04/index.html","89a2f84c2cbd1dfff5814216afd2cf0e"],["/archives/2022/08/index.html","6f3b745dbbf655802d3be6d7f1b51747"],["/archives/2022/09/index.html","6b2297f1b638b4b2b4a3e48839ecc2a7"],["/archives/2022/09/page/2/index.html","8ab4b82e5abcb452b32ed15fc47e2adc"],["/archives/2022/10/index.html","82a6d04d99966a06fa341d52ceabfc26"],["/archives/2022/11/index.html","219484278692dd3441c7a4efc12d6c72"],["/archives/2022/12/index.html","b44a7d8a96a0cad1e21c3642ea9cbd94"],["/archives/2022/index.html","71b739042ce4d3ed829512877ef8a5b6"],["/archives/2022/page/2/index.html","50ed0873cd3a924a1b0239e6ddb003a2"],["/archives/2022/page/3/index.html","697423227f1a8e79c385415d98ac95dd"],["/archives/2022/page/4/index.html","dad8fcdb1fbe0508c47fa2795538d4aa"],["/archives/2022/page/5/index.html","8890d3aa7f5d74028a9bcdd2115e596a"],["/archives/2023/01/index.html","ccf091abaca1f8d4b48b5e485f8e69b6"],["/archives/2023/02/index.html","839be60583d18bb6c5cf6548f2c934e4"],["/archives/2023/03/index.html","3257014b8c5bc9544b9f444f6d4171f2"],["/archives/2023/04/index.html","71d3890b67d000bb535b014626a84185"],["/archives/2023/04/page/2/index.html","727018aeb4e4f30febcd351aad8e5c7a"],["/archives/2023/05/index.html","4561e53fc255dc5e097a52fea22ae470"],["/archives/2023/06/index.html","1b6a1ab2c75f136fc67b2c0d19a6b40f"],["/archives/2023/index.html","3594fdf71739d0c3db4c52cd225a1f72"],["/archives/2023/page/2/index.html","68ef397859307ce3504124839ae0d401"],["/archives/2023/page/3/index.html","9b343e35cf991fa0bd86d5f4f5d24a62"],["/archives/2023/page/4/index.html","01ec04df268d62caf5a700dd7428c5b8"],["/archives/2023/page/5/index.html","b2c6dac65b9db32d0bc0f6abbf85cc77"],["/archives/index.html","726ebb768aa32016806cb7628fc2a5db"],["/archives/page/10/index.html","6691a194816d39cc04da44d8922111b0"],["/archives/page/11/index.html","e0f5cd2b488bbf52eb2165b02dbb76da"],["/archives/page/12/index.html","94c255a43a007773f9a77c03fb7d61d1"],["/archives/page/13/index.html","48ce3b6008ea0bfbc25fe0379bbe694e"],["/archives/page/14/index.html","735a6c2aaf4d531d8d572ed326d9be9c"],["/archives/page/15/index.html","803aeac92a01202c033f0b0c8711c598"],["/archives/page/2/index.html","d96ad265b77e00df0898ff89e7bdaa5e"],["/archives/page/3/index.html","961e05b8a4214d168ededc011c4a837c"],["/archives/page/4/index.html","c32a28b70401c024525e99d040ee517e"],["/archives/page/5/index.html","e68905393c59445e4c5dee594af0f166"],["/archives/page/6/index.html","aca646df92a710e164050d4b154c26f7"],["/archives/page/7/index.html","967a17bc47cf9d8c0079c247f5c4d900"],["/archives/page/8/index.html","6a0c8df7486409e9b8ed8f30cc237dbc"],["/archives/page/9/index.html","1d8bfc51625e6df1d5cd23e2b2ea5691"],["/categories/Devops/CICD/index.html","e7fa799ef147560ca3d9a12ff132bd38"],["/categories/Devops/Linux/index.html","60c2a6dbf8ad997843caef74eb2b0b8d"],["/categories/Devops/index.html","0e35c2dcc5c4bbc1f5a1584951c8e432"],["/categories/Java/JVM/index.html","5b9022e05ee3257840b459b9a96a5d33"],["/categories/Java/NIO/Netty/index.html","28c9ede3b0e59aef2201974bcc72ff31"],["/categories/Java/NIO/index.html","287377e9b6281eda024cbe871525128c"],["/categories/Java/NIO/原生NIO/index.html","a8026000eb0329cbab4d7707af884ba5"],["/categories/Java/NIO/文件操作工具类/index.html","ed45db1a14c67f2cf9332d38a7ee83d4"],["/categories/Java/index.html","0037393961bd66d80c71aa372881eae7"],["/categories/Java/page/2/index.html","8613e31f8915bbb69591f77f95e318b0"],["/categories/Java/学习路线/index.html","32cce7e74561744c5868c1a68c750be2"],["/categories/Spring全家桶/Spring-Security/index.html","9f44c6963178f0935449a2805aae30c2"],["/categories/Spring全家桶/Spring/index.html","50a8aa1d91fdae703354f1f13680f97a"],["/categories/Spring全家桶/SpringBoot/index.html","510c5af0166e6df92394aca0fa9ed7cc"],["/categories/Spring全家桶/SpringCloud/index.html","d3c5f089ee71df2de42eb80af4108a6d"],["/categories/Spring全家桶/SpringMVC/index.html","d2e22e462e5907315ee3a4d3409385ae"],["/categories/Spring全家桶/index.html","1cbca57ed4554d5a7bf53e60d1960a90"],["/categories/Spring全家桶/page/2/index.html","585467dbed5739dd342e37c71e73db79"],["/categories/index.html","d562478fd31fbd120e11d15dd4e6f9fd"],["/categories/中间件/ElasticSearch/index.html","9c2ab80021075fd226d14b5984f13e2e"],["/categories/中间件/Redis/index.html","59915a4f6065b9236ca4573bbdb20bcf"],["/categories/中间件/index.html","230c1766eff150a4545724dd91be9c9f"],["/categories/中间件/page/2/index.html","7d485f9e8238d92bf81da4c155f6ca47"],["/categories/中间件/消息队列/RabbitMQ/index.html","4f2b937e852b0d677ad65b777f16dfff"],["/categories/中间件/消息队列/index.html","83d1dbbd1a4970cb8840672456586dd2"],["/categories/前端/Mock/index.html","88df83e1dcf795d6a2784a9dafa2648e"],["/categories/前端/Promise/index.html","cebccb6534314cc7b645f6e3696bfeef"],["/categories/前端/Vue/index.html","3c0d5188e9969adfdba9bfa67ecc64ed"],["/categories/前端/index.html","d5817ab807d92e923d7c30f3ca5f5ba6"],["/categories/前端/jQuery/index.html","a4d306f0819de046e831a0aadf8ec950"],["/categories/前端/page/2/index.html","7274473dddfd369d8149d14b1b7d21fa"],["/categories/前端/原生基础/index.html","9f31cc07faa2ae25e9e55ab8ae2d7ca1"],["/categories/前端/异步通信/index.html","8a96a303f92ec699719b9101d0824e80"],["/categories/工具使用/Git/index.html","92c3f5ea2c13a5a785d99a351caab617"],["/categories/工具使用/index.html","91b0f1de87bfb7f7756197a2d92d19c1"],["/categories/工具使用/markdown/index.html","a5170f7285b1d84beaa61748ad43b09f"],["/categories/工具的使用/Docker/index.html","35eb7d2e17deec94b268b2d140f40cb7"],["/categories/工具的使用/Nginx/index.html","6c35a08913bbe7439f4fde8f2e16aff6"],["/categories/工具的使用/Swagger/index.html","705cc9a92b692a65623966180ed5874b"],["/categories/工具的使用/index.html","75db82e658c4cc13c66a8fae722f1d38"],["/categories/工具的使用/博客搭建/index.html","93469b7fc1b81e1449b73339ba620a23"],["/categories/数据库/MongoDB/index.html","7e8bae5a2e314d1feaffa4abe6800540"],["/categories/数据库/MySQL/index.html","80662eba6ebfec3802e82c3f06ecc2a9"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","e01cb432ec680d4d4b9c70640bdfe0fb"],["/categories/数据库/ORM持久层框架/index.html","1df537c4ee280d1c7071607c887ca8b2"],["/categories/数据库/index.html","2f0f56b4bd852843778f2a10e5d45568"],["/categories/系统设计/index.html","fa6f6f0651007a8712076fa3745e873c"],["/categories/系统设计/page/2/index.html","fc32bae8ceb2ffccd4ad3c5fd46e7724"],["/categories/系统设计/分布式权限认证/index.html","db6472d17571c876b3d4fa61bfdc8109"],["/categories/系统设计/设计模式/index.html","bdc87eca91b4b8647714b0232256a651"],["/categories/系统设计/设计模式/page/2/index.html","5eac5a7ed755fc89e8c9cc2a0ef672b0"],["/categories/计算机基础/index.html","fa51bb26770ce6dadab17498137be3dc"],["/categories/计算机基础/page/2/index.html","5a0ae6ac48ba55b7328e032437c4b398"],["/categories/计算机基础/page/3/index.html","3daa1cbec08e5fe86abc34ee97d556cd"],["/categories/计算机基础/page/4/index.html","b2f09db7ad783e461cb6c86a5c6cd2c5"],["/categories/计算机基础/page/5/index.html","f088217178bc68621f2b946bec444d36"],["/categories/计算机基础/page/6/index.html","6371cb5d19dabdf1e203a0a7d0bf9187"],["/categories/计算机基础/操作系统/index.html","84c868a25f54f0e4e06ebf7fcd41b486"],["/categories/计算机基础/数据结构与算法/index.html","cb17e844d80f38465bb91852864bb111"],["/categories/计算机基础/数据结构与算法/page/2/index.html","a4e3e3e8892c99070956e682beb24630"],["/categories/计算机基础/数据结构与算法/page/3/index.html","ffa3c9bfd3fadd8f227816592210ff0f"],["/categories/计算机基础/数据结构与算法/page/4/index.html","1d37d96518ae2943f067a346c2c57edf"],["/categories/计算机基础/数据结构与算法/page/5/index.html","d7949dd0a770ac94c38f769fba6c1d8d"],["/categories/计算机基础/计算机网络/index.html","53e729c61bbebfdfb34d6198e08010c4"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","c5aad2df6b070fd57aa791b9198edd20"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","2a31635cafd895eef4b54076ae599d18"],["/messageboard/index.html","a2bfee024b666b47951e4035d404ea04"],["/page/10/index.html","b91416a4d17d6823ca15b45ddd13b40a"],["/page/11/index.html","45103cd6b0be3f7d5f0a67dfe09b22d8"],["/page/12/index.html","4ffa44a3fb5b5ecc0822875239c5ad1f"],["/page/13/index.html","559af197a7abd9778018216910185ce5"],["/page/14/index.html","4d9197e49ef07825c54702af320d2827"],["/page/15/index.html","773cfda9b3e457c40e0a7c66f26c5636"],["/page/2/index.html","3f233f6133fd543e867fc5b2caf36926"],["/page/3/index.html","df8834300f615f4558a2b0233f825b55"],["/page/4/index.html","c07742efaa473527445aff607455567d"],["/page/5/index.html","ca0b392e4aedae66a80d48eb61538b0c"],["/page/6/index.html","097a22b78bbb04744e2c58da0b2222fc"],["/page/7/index.html","8a9228af309b6a4d1e34383ff5212cdf"],["/page/8/index.html","5c7c21f1c42edfeb6fff2cde793a261c"],["/page/9/index.html","85c273d52635de80db6a49d6127a5453"],["/sw-register.js","162ba11d538c2b5c8c4221fc53eaf714"],["/tags/Ajax/index.html","299f602c7900992c78b7e849555b0d90"],["/tags/Axios/index.html","6fb312af7d4078cae1c6079c20fdcdbe"],["/tags/CICD/index.html","1db037207b0198163dac0e2e15e32b53"],["/tags/Docker/index.html","c32302f54cabf09f1d28cbcf4d22be13"],["/tags/ELK/index.html","9d08564a8195af4ae918985d63a232d0"],["/tags/ElasticSearch/index.html","f722c6e16774a5ea4d557b097543def6"],["/tags/Git/index.html","da1623fed548be4b14b83e80b000674a"],["/tags/H5/index.html","7d6f09e55f9ee1c0b3a6ad9cf5ae3d31"],["/tags/JVM/index.html","0e0e358a94b08c2b758bdd1f02a24d12"],["/tags/JVM内存模型/index.html","0311d7a105029c85b52be126fa25b720"],["/tags/JVM执行引擎/index.html","3f23253b26698bb8e2254b25f4724b0e"],["/tags/JavaScript/index.html","0f4a47824b37da3dd99ccb76f60e9149"],["/tags/Kibana/index.html","a8435bbf45bb16d432e71c4925c7dca0"],["/tags/LeetCode/index.html","541179d48f8db16a11021fe287298bd3"],["/tags/LeetCode/page/2/index.html","a24094d10cc0fa0b616616db73a3eb71"],["/tags/LeetCode/page/3/index.html","661ba8e20d459cc171fc8721aee5ffe5"],["/tags/Linux/index.html","693d5760ec47443f09f0ad42f7c1f790"],["/tags/Logstash/index.html","aab90811a9a1c74a5853a71b0528f317"],["/tags/Mock/index.html","81fbd05e6b3baefbea1bbb2372398d17"],["/tags/MongoDB/index.html","5eb284b2ff8d1a729b78e6b177d6b4c6"],["/tags/MySQL-数据类型/index.html","177aab2f8437ef45408f624559033abb"],["/tags/MySQL/index.html","184b8be7380c5bb0f9b974ff1cfe3401"],["/tags/Mybatis/index.html","2b6bcffeabb3b49c8b9c6d9e06922193"],["/tags/MybatisPlus/index.html","5b9c24f5e3f1b83239152be717f302bb"],["/tags/NIO/index.html","4acaad0060bd25f19254ffd0f253995a"],["/tags/Netty/index.html","852c63ea9a10fb03265172b0a8503995"],["/tags/Nginx/index.html","51d1796d053a8288b29bffb1e67bc65c"],["/tags/Promise/index.html","43cae296477d2ceb513f9a4f663008f4"],["/tags/RabbitMQ/index.html","820add6c8b6795d657b2bdd62cd26f4d"],["/tags/Redis/index.html","2e6d70fbbb820f57588e2cf331e048ac"],["/tags/SSM/index.html","99148e794232a642b2c0673e442b1198"],["/tags/Spring-Security/index.html","dee9484623745ec6f6d5184c54742d17"],["/tags/Spring/index.html","810e822a46903711f4badc35dc02989f"],["/tags/SpringBoot/index.html","7c4878fc0b2c38819ede806da5a5cda8"],["/tags/SpringCloud/index.html","cb640e9002bc086bc3433423a0df3116"],["/tags/SpringMVC/index.html","07f0344b9a1845c3e43e426c81c0330e"],["/tags/Swagger/index.html","12d6efe202b748b4aa94b3bc297b33a7"],["/tags/hexo/index.html","d0adb963545c8d31d99cd4ad5574919a"],["/tags/index.html","adfd8fe56c2d3c492c0293c5d07d2784"],["/tags/jQuery/index.html","988f9d41221b7c7bf537cc16b0caa724"],["/tags/java/index.html","8c8168c2851e581403821387af862ffa"],["/tags/markdown/index.html","ff708d586594292bf028d20faf01af5e"],["/tags/noSQL/index.html","ee43bbcd3c34515812113a5383cf1d8c"],["/tags/typora/index.html","1086e2aae79399866ce8e8ae104043ef"],["/tags/vue/index.html","c6eb269ea0372a37799470267ef1437f"],["/tags/享元模式/index.html","0de440f11ad215ffb4753275fa8c336a"],["/tags/代理模式/index.html","c7924d70296f1139a1eab5fc7e625194"],["/tags/内存管理/index.html","20ee40384c1c80e62a9fc005b4812fd9"],["/tags/分布式/index.html","04bb259c2c7743ee7e6155ce5c38a0e0"],["/tags/分布式系统/index.html","d2af8be41bff2771554327fec2a9896f"],["/tags/前端/index.html","f57a25333993115426c6f5bedf30536c"],["/tags/前端/page/2/index.html","7f8883721d9adb567c0e97d322a45356"],["/tags/博客/index.html","10b90831037ffbbe773d031bfa326394"],["/tags/后端/index.html","c069b61e7bf1a0a8c5cebd94ef6c808f"],["/tags/外观模式/index.html","121a8455ad5ffc1a51cd7724b9617f86"],["/tags/容器技术/index.html","7d27967dce5f470c6d19585641b65cfc"],["/tags/工厂方法/index.html","8c0a840349ea70887147b4b8d1d40125"],["/tags/微服务/index.html","3102695e25bd09dc96a066efbfa85cf8"],["/tags/抽象工厂/index.html","602b9434c607034dfe4042c06b9e6f5e"],["/tags/持续集成持续部署/index.html","e455a8af27f59a1a0d69cc88171fd4c9"],["/tags/搜索引擎/index.html","6bd8d995f156f4ff3aed4bdf3bd23c2a"],["/tags/操作系统/index.html","7359ea35038095d185b38567b98378cf"],["/tags/数据库/index.html","1ff70c168dac1d44c3e732ae2983701d"],["/tags/数据结构与算法/index.html","47bee946544e21edebb8a2eb1fa91123"],["/tags/数据结构与算法/page/2/index.html","ebdc4785e993b316ccfd6d6270162c1a"],["/tags/文件操作/index.html","0192455ff151588de9d3c9d14eaf9a03"],["/tags/日志/index.html","b0ac86db1e9d7ce974b5f2731bad5678"],["/tags/服务器/index.html","a86891c17f5bdd6e057dfda42b7acd55"],["/tags/权限认证/index.html","277835028822e62a3e3421206158cd75"],["/tags/桥接模式/index.html","fb035615f379839970435fb04d29763c"],["/tags/模板方法模式/index.html","1ccb03289a613dc88878e3b58087dcae"],["/tags/死锁/index.html","7aaaf04133469ee71a3f284c8007540d"],["/tags/消息队列/index.html","31327c75cd4737cff9b093eba7584378"],["/tags/版本控制/index.html","1d9fe382cf37525af7e92bda12f2eaab"],["/tags/策略模式/index.html","8a8e9d2e360373c94eaba01d2146eb43"],["/tags/简单工厂/index.html","c8c6c60afb4f24d229be5dd3e02eb7af"],["/tags/算法/index.html","4ed7e5e3459a7052b57898575e7112f6"],["/tags/组件化/index.html","df213dafd762373f9cd858ace2a47b51"],["/tags/缓存/index.html","dde9c49c26374ea3ab541544a274f87a"],["/tags/观察者模式/index.html","e221fdbf3754d2ee26bddd717159b6e0"],["/tags/计算机网络/index.html","fa20d49895bf4b77a0b9c460a9fc01c4"],["/tags/设计模式/index.html","53c524bb666f1d2d9aa3247152079b5e"],["/tags/设计模式/page/2/index.html","75d80965174d1bed9ef693504ad55fe0"],["/tags/进程管理/index.html","ead465404e355261dad6e4e38733b75d"],["/tags/适配器模式/index.html","c45ce679ffcfd3accb56d43985f67911"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
