/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","fdbbf3477875675509eec86a04300f4c"],["/2021/02/22/工具的使用/博客的搭建/index.html","ffb2e649b29c832aadd5ac8f35b97855"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","9d7c79e1462a2b0c02b9803251bae992"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","4d61ae70656054a219c489c4fa6632c7"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","ead91bfa2549ca2af72017c806fa375e"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","8b52aaab7e815c2fee1fe4b56d19a003"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","25551f472339731ca12e82b6647c062e"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","1082e7cc81f4aeef1b32fedafa861bd8"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","84f2c9cd52af20e3e073b71a628f3e92"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","5b7734b07c6ca7961b589fd4c24f33a9"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","ad3825d8c7b8013deededab72b518a54"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","f12934bb29736fb561ed1ed64041c100"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","8d42fb4350bcaf6235ec66921e5c114e"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","32af05d67735b30998f24c0dc1ef1e91"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","f02801330e87b4cc40f76a67efddaa9f"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","e422ae70a7a23d18b687e3d4d84b8264"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","332e0511d6feace147f34574ec10b0bb"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","6fe2c02c9d1a726e8a825dc2276233a3"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","b6f27fafa2ea42a982370ff8a2ea939a"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","dedbd7427d7729c26b6463bfb489d032"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","516c230c6c93f22c4041f9a455d49432"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","83252a15548ce592345e662feae6bae1"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","b693d24877694982377972a023b95187"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","54f19ef725675f42fc7131ba22df2382"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","02978fcf3bb179738320d05c2c2b5784"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","dc843e970599b37b644f80f75e91c841"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","79003f5a1e12711f088cce46b69e7721"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","9348efa3f0fdc36e0242fa232c27b544"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","c3670c6d98575a0ab33b5f5d3084eb0b"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","ebc0576eb3051f56f5c5b4938dc30513"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","c689c20ec6b0db1c3e523bd3e5806f26"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","8642987b4ad85e1ffc5237803247a40e"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","2d07d2fff06fbbb091a85f70ddd05a38"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","87c4c148d8bc477e07417ec8e7abe988"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","1c1d31a74c9ff40d885e46cc4f1b2eb2"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","25c1730e317fe2d5041a75e363851ca4"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","4b428c4b22153f1f283979bb0bcb1a68"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","c0b836314110968911ebacc533580505"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","ecf1d1144be0b202102b345a47a5514a"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","6b73cb184454fcced2fd84b8a7357e04"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","568ad79e37313773e51013a4a273fc86"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","30807eb1d51b8509866e9620170ce298"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","5543b23198100bc5107975d777d684af"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","8ea9a777cc723cb7a73569b45baa90d1"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","bf6e1b31385ee3c9876cf1153786b01d"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","e30f5736571e20ec3d5b3c51c48607dc"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","6d6da2a7dddaad39d88128ea5f98da8b"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","57c1a2e1e85e18a149d7a5bd98b9de9c"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","4f8b2e8b76201195fb20ebd491d83adb"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","9325bcc1e7a9bea35e74b8a26a159542"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","4133f41b7db8eefd704ae93905d39d36"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","bd21e5808ce4633d5ba5a886ccde4d8a"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","495f06a496db734d34f07a0cd42d492e"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","4d1946a07608df9d10982ec9628f3ae3"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","e94f246d57523ec8d9ff8771fe140c41"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","150d3fcf65fb735f5debf43b75806ee8"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","d0ef38038a49c95b2b92614ae48cca46"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","4cffe640dac9de959745c96630defad4"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","61206a088fe79c33143dd5bb7ae785e5"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","7648550b9e9b71392b2b9dc4b45422a6"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","d83a8bfe0265a31390894c9e21e8aaf7"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","952e59523fc2c6c59455847cc6f12b7b"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","c5f7ba2a8e0090a370f21b67f6a9c9fd"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","06eed089707a783153e59729a59d3160"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","19c7bbd9218ce0c826dc2f33e8af7843"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","c9b709ffe964da47f31b84984410be55"],["/2022/08/17/前端/jQuery/index.html","334af527570b9a14d172eb256cc449e7"],["/2022/08/19/前端/JavaScript/index.html","fd314c29edd30a882dfc508a8942dac1"],["/2022/08/22/前端/Ajax/index.html","6b63846e11e1d98102b156ab044043c3"],["/2022/08/23/前端/Promise/index.html","82470361981b6bfcdfbc1beb0ed86e15"],["/2022/08/24/前端/Axios/index.html","117d8644278fc787151cc46c4dfbd096"],["/2022/08/25/前端/H5本地存储/index.html","3066c7fc00adf76373d1fce01d49445d"],["/2022/08/26/前端/mock/index.html","ea2ef1352725916a1ef2664789ca3a64"],["/2022/08/31/前端/vue/VueJs/index.html","d0ca800a1d02164c00b48a6c8858c01e"],["/2022/09/01/前端/vue/vue组件化/index.html","347f909875129466e2ba3978bae643c4"],["/2022/09/04/前端/vue/VueCLI/index.html","83d761238f280f3847dd6f425e6b31ec"],["/2022/09/07/前端/vue/vue实现动画/index.html","fde19001fa594e5589e3bc4826816512"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","9ffe225a5a28198e4d32472f6800e82c"],["/2022/09/10/前端/vue/Vue异步请求/index.html","c7aae68ba8ec53267f7cdbadf3dbbafd"],["/2022/09/11/前端/vue/vue-Router/index.html","386301e23f8b2ece8620354887695bc6"],["/2022/09/13/前端/vue/Vuex/index.html","2c36cad33e2735ac6c12a412724c5604"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","e4aa2d5325b6673762e274d435bb4b6a"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","8789976043490e6dea04ddfe84b62a57"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","3a67be07f761007848b69a3db818e558"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","eae657b00301f14e3e29cd5d20fb49f4"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","da28b9dc32444bd276afa838e3242672"],["/2022/09/28/DevOps/Linux/Linux/index.html","590c8b630ef18d4d47647cc88ceec3d4"],["/2022/10/02/中间件/Redis/redis基础/index.html","a4c54de540838acd6aacbe7cc525542d"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","15c101522b9d2b47b691484057c98f3d"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","63a92398485e1d78e6d3d406ef97fa91"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","21d0de04f183c8b64c2a51e52fa6862d"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","1c213ad62704445e3549b405cceea6ba"],["/2022/10/17/中间件/Redis/Redis集群/index.html","0233ff062b920e9258ad5619aa97d1d2"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","1da58a4a9170a3e816a9933bb312e69a"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","b0112eb5765e0eb607088aef9fd90d30"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","3b4431405dd6a8ae08c8644c4159171c"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","66cbc81ae1cca1d63d2327860fd695a1"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","3c2f9fd4ae36a9cbbc70ead008591945"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","8adaf3df903a9681af78de1cffcb20c2"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","6bd54d6bf4d2dacc1fc0c9c75e493042"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","530a66ad25066dddfc47ccd66320db7a"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","56c94b9d3a21843cf02fe47a1bbb6526"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","8461012bc4e4572c300765942883d8a3"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","b65c753c8f6bd2c37f827c05ffcd3d7b"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","f49008484bac542c88472f550e96138e"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","1eecc86c92b330932c9767f925e0a8c2"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","ef78da4b453cb1316ac600fa7b7273f8"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","ed527fc38e0d693110ce65746003725c"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","d8f9f2354dceafdd3769c8ea5997f394"],["/2023/03/10/DevOps/CICD/CICD/index.html","ecce4cbcc25288b6db2b95f15b6f1e2c"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","032512cca8763b6303dea1d84fbc0825"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","03d9e5371902949488fdb400f8dc08e6"],["/2023/03/13/Java/NIO/NIO/index.html","ebb9050cde09c30d820f39b97d6fc72c"],["/2023/03/14/Java/NIO/Netty/index.html","512b4d7187d32985c9687a3edff73694"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","8260fce02d6b0821867d903564ae1e91"],["/2023/03/17/系统设计/分布式系统认证/index.html","0d56b413996c075a61072f1a4645cea8"],["/2023/03/19/Java/JVM/JVM概述/index.html","1a9f912c367fd05974ab880868045767"],["/2023/03/23/Java/JVM/类的加载过程/index.html","41927695cbec9c29dbeed54279b1c4b8"],["/2023/03/28/Java/JVM/对象的实例化/index.html","dbf7e821784864c1beca9c2678230926"],["/2023/04/01/Java/JVM/运行时数据区/index.html","ddfda0059a898e9a42a55cd8c1d15786"],["/2023/04/04/Java/JVM/执行引擎/index.html","42144d4cbaa71cb015a169d9d0011b46"],["/2023/04/06/Java/JVM/对象引用/index.html","517e2fab2ba1ac1aad84216fe6a4ed77"],["/2023/04/09/Java/JVM/垃圾回收/index.html","e97fbe341c9bfad74c8d3bbc25e09c7d"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","a47b7b84cb601c99a6b503f914056586"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","7b2064f11a7839ffc5bb7257b9c93d21"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","1e4bc3c11a28ffe09155c3bfbcb2898c"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","e95f21f14a22f8b73658608aa4de0231"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","36cda3b6440479fdfb2daad01c88ba29"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","00c7251aa23a69ecf33d1c83ea9ee89a"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","e4755c1e2a63b5b6444cc3af098309b0"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","8d931f7f550848ce1b2eb2585104228c"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","827c42c0cefd9a7b8bf9e895819927ad"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","f345b4d9955ecedd299c6e26b06088db"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","ab0f49ef00060a67a46e3754e8dcb34f"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","6474fb1cdb90ef415a74849096a0bad1"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","bd0be489ae2c2c97d02e6ea0d5b80399"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","bf4b4353ac0a153ceed78816f7181ee4"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","3ed64692aa20e4f8f558b01dfdf73352"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","7734f0f7d462aaaefb7984b9a9d52a5e"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","4dfe30cd070d07a1140e3a4fc1d7807f"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","03a49179df825e48f1dfec95adcd131d"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","e0d24ff72de18fde76cd1afd2a18e5fb"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","7e82b5e1784859794a14f883c9e43fb9"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","4bec0bd2c73fbaf96ca1f0e855246c16"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","661de5940ab85875eaf6a6ebdf858334"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","02e33d26fda79b174532e1e8e030db88"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","bb9eae293adc0843fef9e3eeb78ba303"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","d2be08b3524f78d5c69f9045a3a03307"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","81d86673549a6411e55b4f0b89a0a84d"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","3a85dceb214251114e17338e48b3a54e"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","a9a0c3ed23225f833df302f14b73d74b"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","fcd227b01f8e4b46f8954784f5b48999"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","aba51a400b1bcc08e21e7565e3385d1e"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","b97b21fbabaa2c386d3a936c8f521442"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","7a71e707f1681520f7f8f27b892e4272"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","8a855a9cfe76615a5dd0855e6748c9a7"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","74065e7a9c287ebc7c4cc8acd30e8d89"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","6d5796315630f1d2bdbfcd52329b6979"],["/2023/07/15/MySQL保证高可用/index.html","2685b1fc48f591251a22d90bb6ac39a7"],["/404.html","b7653869fde7a6581ad4cc2a82983f1d"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","13a6b13a159c21c8430d65373cc653fc"],["/archives/2021/02/index.html","658e4583d402d9c5e9b5024cf14f3a88"],["/archives/2021/03/index.html","8e2dcaf967ba3873f578a23c5ab40cbe"],["/archives/2021/03/page/2/index.html","8f1e1592031969bf20b595d753b3c317"],["/archives/2021/03/page/3/index.html","84a0a245683e001cca6094d8dab6f311"],["/archives/2021/04/index.html","447e02809d3c336a2f12ee39e76a844d"],["/archives/2021/04/page/2/index.html","3f5f29272d04c94b192c109e9a12667d"],["/archives/2021/05/index.html","8c3a0fee07af5578961055bf6cde040a"],["/archives/2021/index.html","2d41b6408a3c86acbe6110708c2d7caa"],["/archives/2021/page/2/index.html","fd5c11adf100d42ffe421ec7ffe2dd79"],["/archives/2021/page/3/index.html","7102e92b287a6bf58aa8aa3ad39330f8"],["/archives/2021/page/4/index.html","74d396626e799c6eb3ec257dd6c18d87"],["/archives/2021/page/5/index.html","6a665925d17de4189dd005af0cd47abf"],["/archives/2021/page/6/index.html","9d4b77f1a7caa79911eae9906edce9f9"],["/archives/2021/page/7/index.html","d55a7b6d8541d77aebe0429b816c7140"],["/archives/2022/01/index.html","64d6496a88c370ce6f51f5ab8f43ebe2"],["/archives/2022/04/index.html","613672f6aa027fa3a87f8c5909c8c346"],["/archives/2022/08/index.html","d3851befb4e69a0db3bb30fd891fe3d9"],["/archives/2022/09/index.html","23c1fe888e4a021fef7b1e5b768f719e"],["/archives/2022/09/page/2/index.html","9ad8907139cceb9291b2da683972b9ac"],["/archives/2022/10/index.html","e7148cc8792b6cd2e75692e5e2f4091b"],["/archives/2022/11/index.html","0a3e24f382f1d4cf4f0561e6ba92f45e"],["/archives/2022/12/index.html","52e671a2ba9526b2229fdf9736516aa4"],["/archives/2022/index.html","5a91b9285d8c0820b5c199facff4248c"],["/archives/2022/page/2/index.html","dca33bf411497595019e4ab36b53c6ff"],["/archives/2022/page/3/index.html","cfa7a08a197dbcfad6f13bfba3997abb"],["/archives/2022/page/4/index.html","ef4bf03e3de61a6ba846de1ee9918169"],["/archives/2022/page/5/index.html","195ab6db26c4bd647651cf150cbb19f5"],["/archives/2023/01/index.html","53b3c6d040e102f92c0678e66d51142c"],["/archives/2023/02/index.html","7f1064307d070f9fefbdb81f037983c4"],["/archives/2023/03/index.html","05836f14406d91169bc09722504293cf"],["/archives/2023/04/index.html","09caa13c6ff76ff006895f0e25b5ee3c"],["/archives/2023/04/page/2/index.html","5bee0526ce36947dbe2dd95067e7027a"],["/archives/2023/05/index.html","696c9c69daccd244f2d9fc8cd5badd73"],["/archives/2023/06/index.html","bea7106c622a9074012c836afc906670"],["/archives/2023/06/page/2/index.html","34895b8cdfcc6449a50e15da5fa44537"],["/archives/2023/07/index.html","bc4adf9c87ea7ead4bede114ae41cb3f"],["/archives/2023/index.html","5b85ea402ae924c5bfb87cd8c3315416"],["/archives/2023/page/2/index.html","ad5d36e3f5d3f12df25d187350c971a6"],["/archives/2023/page/3/index.html","1a342b36843683fb43f22b4e555f2023"],["/archives/2023/page/4/index.html","154912b12ee67b15db7e63fd2523eb2a"],["/archives/2023/page/5/index.html","42e6389f1d87d9a745310a39a635984c"],["/archives/2023/page/6/index.html","1551bf9a32369a75ad8114467cfd4bd4"],["/archives/index.html","16d5221459985c76c0060cb91e307798"],["/archives/page/10/index.html","30789e3183b22d1b127f413fad9b3037"],["/archives/page/11/index.html","ec3df599358f469da68052666e6b5648"],["/archives/page/12/index.html","9d715ec095ec07c79b0b58109892fb10"],["/archives/page/13/index.html","30ad89884c4645be17af0d234dc32a73"],["/archives/page/14/index.html","73061f08a5a5a13fbe337032d4160b5d"],["/archives/page/15/index.html","f7ee697207712a1484f07a600b039c2e"],["/archives/page/16/index.html","7eaa11029891d402d16832d1a9921e3c"],["/archives/page/2/index.html","4353c43cd9febd9d308c7fd031b18c35"],["/archives/page/3/index.html","7538b05442982155afdf07649df59b6c"],["/archives/page/4/index.html","4331a788435ffac0cefcbd629358d25e"],["/archives/page/5/index.html","c7734f976c8839098163a47a738ba25a"],["/archives/page/6/index.html","bfcf97e1dd5a1924046bb7d5830f018a"],["/archives/page/7/index.html","dd0bdc4ed3dfd4e028faecbc5314bbf3"],["/archives/page/8/index.html","1700d4dca1f8a1b74c3163fea5f73f8f"],["/archives/page/9/index.html","f3def264fc6d94c8816cc80588af2a9f"],["/categories/Devops/CICD/index.html","ebf26507c842c56d16e9736045b0af77"],["/categories/Devops/Linux/index.html","d58384302fcc2968675566894ebc6fd5"],["/categories/Devops/index.html","d313a0e90918f018a7bd35f61a089763"],["/categories/Java/JVM/index.html","203d56b34c6d036b21560dfee2661332"],["/categories/Java/NIO/Netty/index.html","1b6abcf8f2bee184cc11c0ac74d1d7e4"],["/categories/Java/NIO/index.html","67d4f9a8407178d0a0ffdf63e1ce77a7"],["/categories/Java/NIO/原生NIO/index.html","9191f2b2fdcf210c13afbe65f77d6da3"],["/categories/Java/NIO/文件操作工具类/index.html","b4315f83027ede98166538829d9bef6e"],["/categories/Java/index.html","cb1f851b7a7e0d29c088e0d9059ac674"],["/categories/Java/page/2/index.html","42a90f2a8697d4d43ce32377ba981fbb"],["/categories/Java/学习路线/index.html","c7002ca2757451b89fd7438487feda41"],["/categories/Spring全家桶/Spring-Security/index.html","e82db6a667f18ce0c07bbb8d866fff4d"],["/categories/Spring全家桶/Spring/index.html","24ce2a456fe6d29938f45722c33c433a"],["/categories/Spring全家桶/SpringBoot/index.html","75698ac76e4d376c573f98f5ddf7ec10"],["/categories/Spring全家桶/SpringCloud/index.html","62c83f13ad807a1b34b030663429b9d5"],["/categories/Spring全家桶/SpringMVC/index.html","eb86f9dcb55de0e58cd4b975cfa31128"],["/categories/Spring全家桶/index.html","baf035e8a0c377977108b917e913fd06"],["/categories/Spring全家桶/page/2/index.html","55e71938edf2c983dd7d3af4a3835adc"],["/categories/index.html","6737c8c646bedbeca8ec945e08fd228f"],["/categories/中间件/ElasticSearch/index.html","e3d4c9dee97a4447c3a50dafe520e18f"],["/categories/中间件/Redis/index.html","6aeebb8fc4747d2a3ad30e963871a930"],["/categories/中间件/index.html","abd3077a7c6f897abb642955883eced5"],["/categories/中间件/page/2/index.html","95293b47d2d64ea7a008ebbddfcf2fd3"],["/categories/中间件/消息队列/RabbitMQ/index.html","c531aee279d7a4e10454eeb7d2de69dd"],["/categories/中间件/消息队列/index.html","40980aeb1cc013f3bc02957e44b85a4b"],["/categories/前端/Mock/index.html","5c8b3cf4abf26a15bad6d261b184ecb0"],["/categories/前端/Promise/index.html","b5a38647e5785862f18b3bc164ee4b01"],["/categories/前端/Vue/index.html","3748a0629ca7b15084efbe1da729c858"],["/categories/前端/index.html","8e046edf1f5c4037ecdaabfb7dad12af"],["/categories/前端/jQuery/index.html","1d1105818ca55953dd56fb69485a1f2d"],["/categories/前端/page/2/index.html","35f65678734f6f4b0d3824b9ff4a1c42"],["/categories/前端/原生基础/index.html","c9a8246f7dffd24cc06ae2d289a4a5bc"],["/categories/前端/异步通信/index.html","1cb0439a2d8bb23ff1b675417ad8c957"],["/categories/工具使用/Git/index.html","4d0ea3e214c277458a90722305cfc707"],["/categories/工具使用/index.html","53788440d2275518a10f3326fe538026"],["/categories/工具使用/markdown/index.html","da1dddc5cbfdd92527c464ebf70cf5c6"],["/categories/工具的使用/Docker/index.html","d430cecfd804a4409b7b9a6aafaa7059"],["/categories/工具的使用/Nginx/index.html","37aa10d70413666fe6bf15d9077e9204"],["/categories/工具的使用/Swagger/index.html","46ce5827988ab0ec27949353df3f3406"],["/categories/工具的使用/index.html","ff755cd08b8cc857b9cfee280ce5742d"],["/categories/工具的使用/博客搭建/index.html","ad03f8002fd9c7a69453e885aa1a7239"],["/categories/数据库/MongoDB/index.html","d1631962ffd28bfdcca072571d811171"],["/categories/数据库/MySQL/index.html","9eb4d5f0efa2641f5c77c18e5cc658d9"],["/categories/数据库/MySQL/page/2/index.html","196cf0b1380dfe99fdf2f4aa85392f7f"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","c8598de2187741ad05ad045044ec493b"],["/categories/数据库/ORM持久层框架/index.html","9cf276a2abfcee159735dbf0853d781f"],["/categories/数据库/index.html","1a752a974799d21f63035a8d0d568b3d"],["/categories/数据库/page/2/index.html","7822662af6b38901cfcbcd45f1a08c86"],["/categories/系统设计/index.html","1c5b7374cd27fe6493fd2f8b26b2c2de"],["/categories/系统设计/page/2/index.html","459c2fa6dd27980431f9ea67d12ab27d"],["/categories/系统设计/分布式权限认证/index.html","077ed0257492f56f3190a7895b6b89e2"],["/categories/系统设计/设计模式/index.html","d25c4cbb44f58f861e7a12fe6d17f56a"],["/categories/系统设计/设计模式/page/2/index.html","8961fc9d891146e396353eade697e7bf"],["/categories/计算机基础/index.html","bcf0513d09a23b3c1b36ab2cc4ed1295"],["/categories/计算机基础/page/2/index.html","d2f615f44532bb7640e1286be6ed91aa"],["/categories/计算机基础/page/3/index.html","f43f767e50b5025c6a15ceafb28051cd"],["/categories/计算机基础/page/4/index.html","c788750a2445c255d3b9e93ad06b85ca"],["/categories/计算机基础/page/5/index.html","48175f2845bb70308fbfcf682b4c6de4"],["/categories/计算机基础/page/6/index.html","fc4ba40845bbdcef2824dbb54078aee5"],["/categories/计算机基础/操作系统/index.html","aad21bd866ea1e18e4b7a05de4309d74"],["/categories/计算机基础/数据结构与算法/index.html","abbc3cb1badb1c837b52872b69221e29"],["/categories/计算机基础/数据结构与算法/page/2/index.html","a0ccc41d35fea099ae9b73367296787c"],["/categories/计算机基础/数据结构与算法/page/3/index.html","08e91f7674e99400947b65316507b9d2"],["/categories/计算机基础/数据结构与算法/page/4/index.html","782dc217b40769d9df5f7300300db91e"],["/categories/计算机基础/数据结构与算法/page/5/index.html","b28a3530f31472009afb781a0f72c9be"],["/categories/计算机基础/计算机网络/index.html","e535503fa847e9ce3ed9ce65652236a5"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","089e5fddeb2e98d3bba2abaed71026ab"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","d5a48aa15b7d6704f3bf028fc39da577"],["/messageboard/index.html","a101cd246fa6d7e6ffdd657582e78239"],["/page/10/index.html","d7ff85034789eacfd9b06e4875fd9d17"],["/page/11/index.html","d74efdd2738a7fe71b703f6a15a7e438"],["/page/12/index.html","7bc0fd8c0aa294348a32ec4589675034"],["/page/13/index.html","5ec379b9419fd20674fa84df09aa26c3"],["/page/14/index.html","08fd60b306e1587cdd5d2472dd7d060b"],["/page/15/index.html","0218546726bd65d6f7e76695091eb254"],["/page/16/index.html","beba756143c55b8a37a0a8b02db6e88c"],["/page/2/index.html","a6d435f871d744d38c2c74c39f48fa58"],["/page/3/index.html","db9dd2f369ac29bcd5e202221502e67e"],["/page/4/index.html","c279ffcbc8a4f8fce6ca0bfd8464c71f"],["/page/5/index.html","39b886ef395f45f10978cd3395b92697"],["/page/6/index.html","77c8fc04804ad0837f7695ddf51edfc4"],["/page/7/index.html","ae714714a1cf2d09a9550aa4321afe70"],["/page/8/index.html","c3c01ea90d2f1bd2f5c94c0047868eca"],["/page/9/index.html","cd5087adeb5c5474a8c7937f8e7d98ce"],["/sw-register.js","dfd6310b55b0f80c4134b9ded047e318"],["/tags/Ajax/index.html","a1d3fb1e857be868fbaab8f705fb3f75"],["/tags/Axios/index.html","b61582a15ed21df9818ddd82503243c9"],["/tags/CICD/index.html","c9116d8160a5c99404925420157b863c"],["/tags/Docker/index.html","4943433b28244e58c956283429c03e36"],["/tags/ELK/index.html","c5b7cfea2a72ddf1200bdb78983dacf3"],["/tags/ElasticSearch/index.html","cceea6f1f3a0783158d364cc233f95ca"],["/tags/Git/index.html","87ed4f436fd00f53879fe8ec0e00f2c1"],["/tags/H5/index.html","cdb31c580b3f7f5ee3e09b93c9a86fd8"],["/tags/JVM/index.html","3f5cd14f70db4dee0aeb36ab93593224"],["/tags/JVM内存模型/index.html","9e33fc78f7f7b996b8f2fe8dee9d9e0b"],["/tags/JVM执行引擎/index.html","2c697bacbc696b0b53ad27749116d6ef"],["/tags/JavaScript/index.html","6a8642bc96bb92cbe3fea8a1ce84abd8"],["/tags/Kibana/index.html","5ec0812d595f54eacf670d0b4decff64"],["/tags/LeetCode/index.html","9ec3ffe7e9d7322240afed361c41c245"],["/tags/LeetCode/page/2/index.html","582e621ee62565e761de45e67022964d"],["/tags/LeetCode/page/3/index.html","388d3b0e0c7dea1984ef09cb9b3d1b0a"],["/tags/Linux/index.html","80acd5bb017a73073f0b4567bb1ce268"],["/tags/Logstash/index.html","81c1e02ef9920574764ed9c848385eb7"],["/tags/Mock/index.html","60cdc1654d43726d43a40b235432e436"],["/tags/MongoDB/index.html","825822361bc0761a2f91bd3f259485ca"],["/tags/MySQL-事务/index.html","a08c8e6a8bd87b046de07fe3cd1f5ed3"],["/tags/MySQL-数据类型/index.html","eb8b4ffbcd4ba80270506767ee53de25"],["/tags/MySQL-日志/index.html","09e2a179400d07da93ebe4f0967715f6"],["/tags/MySQL-索引/index.html","e4dbccdd59caa77d5b790b23ed4d42eb"],["/tags/MySQL-锁/index.html","8685fe1ed1f6181219fd18e12e803178"],["/tags/MySQL/index.html","b1554fe3071b5ae52678b93189661f4b"],["/tags/Mybatis/index.html","1959cb8c3ba9f1bf1216b632e6e4376d"],["/tags/MybatisPlus/index.html","898017fd5f74d830d20260e70bb5ef35"],["/tags/NIO/index.html","66e66abdd6ae4afb008647060ff57694"],["/tags/Netty/index.html","a966f6d0f3eb698444a594a636b16415"],["/tags/Nginx/index.html","bed1a3ebf6443cf17a0d5ff1ffb0ff3d"],["/tags/Promise/index.html","827b4bab78001c3e8d192eaaf45ea29b"],["/tags/RabbitMQ/index.html","fa9357f6644b96e6f29dd5d2f7e95ec0"],["/tags/Redis/index.html","24ee1f821f97ef37c6e433b3db8b0f12"],["/tags/SSM/index.html","4bbf5f374eea695809b2c43b01f923a9"],["/tags/Spring-Security/index.html","c05be38708edbb965d544ee5ad793ded"],["/tags/Spring/index.html","98bf2ba2e3dbdde190082187953d2005"],["/tags/SpringBoot/index.html","201f3b29da7b73c04826b1de5aeaf7df"],["/tags/SpringCloud/index.html","42ed1d1faae0529b373ab4d17db99403"],["/tags/SpringMVC/index.html","015c7962db90a88fcbdce80f2634e583"],["/tags/Swagger/index.html","0713bea0bebd643003982ae265bb951e"],["/tags/hexo/index.html","28883c689c79916f70c0acd3fcf44780"],["/tags/index.html","47fecf84548ad6f985668a9e6efe4dd0"],["/tags/jQuery/index.html","4dd231d45abdd1a9053c24a20b4fb69a"],["/tags/java/index.html","be3c79932b6bcf2c2f9fc7917888fd4d"],["/tags/markdown/index.html","744b52a431f8e52c1ef02e9e289c4357"],["/tags/noSQL/index.html","d0c3b5b8a952f85e2be04561bb979a23"],["/tags/typora/index.html","369f70494eed24b258ee635496f4e1ff"],["/tags/vue/index.html","0865bfdd8518c53734b4eaf692181793"],["/tags/享元模式/index.html","ba3282828df586f880b14e17038a2e56"],["/tags/代理模式/index.html","ef973751fd246930fe00615c209c3037"],["/tags/内存管理/index.html","fa3bbdb794f16c42fc2fbb0e08bc96ec"],["/tags/分布式/index.html","63f317e021b15862ae93741de7c9e972"],["/tags/分布式系统/index.html","551c6592fc56911daef2cb4b6fa6b8b2"],["/tags/前端/index.html","89f7411ebb6aad0a237d1755e6b1c214"],["/tags/前端/page/2/index.html","de62548b2011119835b2cc9dda3fc9f5"],["/tags/博客/index.html","a17c8558dcf2e6cf1028ffc3bf060db8"],["/tags/后端/index.html","42912ffa129698515feffb6163b986c3"],["/tags/外观模式/index.html","baf8c4be28b6f40f337a881e3e0c3bd6"],["/tags/容器技术/index.html","b9fd077a52e26983cf744c135eb6e4cc"],["/tags/工厂方法/index.html","5ae7ded031d6dc273432070a73886799"],["/tags/微服务/index.html","e4367c21f65bac633ac55972940f7073"],["/tags/抽象工厂/index.html","f1133d8c021d007107288b6e708a8a92"],["/tags/持续集成持续部署/index.html","fc1960ee7450be1f2be774a92448aec0"],["/tags/搜索引擎/index.html","d587445e1b89a5f3fdfd694e8d7e4c9d"],["/tags/操作系统/index.html","fe2a0e6d1cbb5705784c6c2dafa35515"],["/tags/数据库/index.html","3cc9f6ea53f18c9eab267f98ed79103c"],["/tags/数据库/page/2/index.html","e75ec4ff2b0c66e4e1f184550f8f90a4"],["/tags/数据结构与算法/index.html","b33a2c914a3728e2b7a85cf7fbb4103e"],["/tags/数据结构与算法/page/2/index.html","9c92e0e4bcb585bb081c5b198ab879ef"],["/tags/文件操作/index.html","4fc3087c05c60789ce015506704503c0"],["/tags/日志/index.html","e6af281590f40049e24cb57537d6e9a4"],["/tags/服务器/index.html","38ddf34786a27ec5bef5599d08c5cdaa"],["/tags/权限认证/index.html","a0c153bf3d9b9654e1301544f04e4402"],["/tags/桥接模式/index.html","1bb2943491a90a56002e6e8536482ce9"],["/tags/模板方法模式/index.html","1023f10d1efc0608d5821293e4207999"],["/tags/死锁/index.html","86570656d76bb03e8faa18d387151663"],["/tags/消息队列/index.html","65abe3af12616193a28e44a669095525"],["/tags/版本控制/index.html","7bc1ab1b79d2234a034cd367292da49e"],["/tags/策略模式/index.html","c8e65213345b071ca52922b15a34f0dc"],["/tags/简单工厂/index.html","b464309b73a0b78ebc2b8afd80e54fad"],["/tags/算法/index.html","edd9648a737578997f03b75d524bfbd7"],["/tags/组件化/index.html","4f7dd487bc9a8e218e2d99eb7e30cb2a"],["/tags/缓存/index.html","d4541a7cbb984b2a01646a748c2302c9"],["/tags/观察者模式/index.html","e612727f2288dd130b9bea180c3aaa35"],["/tags/计算机网络/index.html","63909ff0ae339759ecbd2611e11ca7c4"],["/tags/设计模式/index.html","8c34b36fbb68a6a9a42b032a32ca833a"],["/tags/设计模式/page/2/index.html","2ef575fbcc7be744f9ab230028105add"],["/tags/进程管理/index.html","c1be8e4b53d7c067fe80bb9343155f0d"],["/tags/适配器模式/index.html","7b695e7ca4ee888795f6cad1d33d7142"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
