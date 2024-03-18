/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","bc074fbb45b2e5617b6cf040f48eb90a"],["/2021/02/22/工具的使用/博客的搭建/index.html","d4569f05c9baf062c7288324395bf48d"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","66af044b071c580d81d7abf4bdf26142"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","7c164f215122c949e465fbef9fec5991"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","8cab48983fea1cea784aae2deefb2959"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","b0812c006feebe1580f0ca4999c505c9"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","05585d824ae90b573fcc9be002619edb"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","3680fe7d8620961d53efdc561ae3eb24"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","dac66636b1787b0b88c2b2531ea717be"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","b7af30d249df2dff5a8798e601b9f880"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","aba15668613272b73d2b222552b2bf9c"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","d0db73e22472214eeb328992ecc7cf82"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","39985459a5b648aa918b750c369cb27b"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","55bd5082b3932cdf8545253b3f334d5d"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","9bf7f84df579574eec863443ecce54a7"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","a22e11c4c28ff4473b2a2a2848156eec"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","ae0f67b3434188b49aae35a4e85f0a84"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","c5c278fb878398539490495efe4dbf4a"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","c08fbe73bcd2fdcd66d3517a93ca1425"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","223deca35c5fd442111cc8c0ed79ba40"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","36cf23e9101d24803c50b012a49613d1"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","0973112dc51488996d23968656a28f9d"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","f07aee753e42147eba86076d117b5183"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","ac9a06832a08bf951a5d28765f0822b2"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","4eb47d1099d7792bb0948efc7b0d73ff"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","544805768c02b5790453a6dfba2cf24e"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","b0e05a31bd80d29b5e66af2f0eef975a"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","477b90821d6a26f6bd06fc9d2371fa4a"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","fd844b4aab7a0f4d157a53343c942a85"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","d5803e16fd7bfa42ddf269f679b9ca21"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","a63d555a66088a7891b17ebea1e52747"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","b4658097ceb55a4517c4e5be23569fbc"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","2d6d5d3275a587b1d28e8fcfbd7ef79a"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","81d5b4af188c7f0ca30f5b60c4e931b4"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","56bf8c76cb425082a7e6bad139e7a68d"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","48468f0341bd4427baac7950679480ba"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","f7bb43d8d555e8640283c1486cb7c801"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","921d330733e83acf88571a2d10158d0d"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","cbe6e759768021cb133a64283e9f1a03"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","197ba3d1c0e21c8db509e36b2248cb51"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","d0a82f28bd2b15cc7805cadf70eee4f0"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","a2b79ff2cd2e5c2cf40728a59d811abf"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","e0b59076c852a513fe401f43aca8291f"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","33640dd64ac2f5d9c48ec34e4ec6dcee"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","17a91fc145fce6cf217b9202a771f8a2"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","01f3493a39b922d362707aefb40b7f70"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","2b9fe6603f595f5f893fb478ce8bc5f2"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","a9d7526bb9eea76de8420bb799fcb6f3"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","e2cacaa6039c0a3d04472676a620ffac"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","716ee4f886de18f9582ef520b3a20afe"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","173071cfe549fc7738de41a3750cfb96"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","448a4f1b81eefd086608bd88ce1b42d3"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","7934fc4d10d7b4bbfec3e7b3b2fee965"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","16140b673bd554e9ffff5e6040ae3939"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","4722ec9dfe40efa17fe1aac581fa4e2c"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","af78479c4b11b833fb3d3c9f89b4a816"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","4c51dc8563411fd4f8784e867d4fbe06"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","b63172aa41303b58284f270e517006f6"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","2ca813e825faa1b689acf642e34c4abd"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","c3daed97f559edf62987099d3f87804f"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","3b778af3c3f9533be6c739d4a3e4e2cb"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","a4b29311055f5cff7c98d025c028af85"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","9cb4eecb7a62c20d83d0ae3ffa4199b8"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","fc75badd17936cac0fe3a4a91e6a1a27"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","3e7db13535a21518ad59269f3bd3a478"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","31355f61095e6de82dd9f8a74d0be3a6"],["/2022/08/17/前端/jQuery/index.html","e8ca1f38e4346fbf38aecd4932f5aa6e"],["/2022/08/19/前端/JavaScript/index.html","cda76e2fd8c0a8521bbe531c1e837301"],["/2022/08/22/前端/Ajax/index.html","47a091713034e3f98ce0f397b74401f5"],["/2022/08/23/前端/Promise/index.html","fda56e0f576d3068e028eda3197d6020"],["/2022/08/24/前端/Axios/index.html","5efddfdee3401339a24dd1e5f6f667bf"],["/2022/08/25/前端/H5本地存储/index.html","b03999e112ad9bb874f886de95f22b2a"],["/2022/08/26/前端/mock/index.html","682afb78fca6cc2f269d34cca5d304ef"],["/2022/08/31/前端/vue/VueJs/index.html","f98cd7f3b0e0df3d6ff267a6a4d983e2"],["/2022/09/01/前端/vue/vue组件化/index.html","eb73bd80932f6fa02cae314fc278a207"],["/2022/09/04/前端/vue/VueCLI/index.html","3d74665531448a8dc927a88605ff13e0"],["/2022/09/07/前端/vue/vue实现动画/index.html","09e1ece021746fa042ac5b56906d1388"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","c53799f6b923b85d237fb7226025d071"],["/2022/09/10/前端/vue/Vue异步请求/index.html","70887dac9c6e7ff8f67f16cb1907c621"],["/2022/09/11/前端/vue/vue-Router/index.html","0c1daae318c18d8e73d045108432036e"],["/2022/09/13/前端/vue/Vuex/index.html","2ba8a831b0afec3326e83684db1d124b"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","b261f9e943b1b3ccb6608c2550fdf871"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","47d4ca585f2c927441da629bcf591d56"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","7799a02c7667da206089016f0f27f325"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","8380326ecfefed26e26f1e03dedf3aad"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","5a00e3c764be0e0e58930d6bdff75ac3"],["/2022/09/28/DevOps/Linux/Linux/index.html","7cd57bd4ddb8ad44adcc515c6834eb35"],["/2022/10/02/中间件/Redis/redis基础/index.html","6cf8114d21d68664bb402d540b629b28"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","bad67c814d99b881a2f4b7d41abf390b"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","20a1d79aeb655bdfcaa9533881ecae78"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","c6a6f28a2110ae54eef016aa90a6bd6f"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","71853a57102ceea5cc585326e31f9418"],["/2022/10/17/中间件/Redis/Redis集群/index.html","14e4b18f9fee4d022d97ab9b80baefea"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","098bbf18d920ebcb7938765b329ec3f2"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","1f44c092173f5103e10f334eff0e1ae2"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","1582aef1ae43a20e592f2f205a5aafd1"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","d3bace8c98f6ae2f3707f05c12a1c291"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","bf7865bfb0c9550faf1850c16b01b630"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","158293c8d9caac0fa54a4a22cfdd2762"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","a650b9daee072fbbfdcc8e2eaaff3ecd"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","ed48b212ca9ebfb2cf3a4da16786ce3d"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","112b11331774f36592028c456d049444"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","2b7d64b5296b9fa365fc035e70bbf751"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","ac5a878ce663a9923c384214daca6158"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","f8aea1260f81c18b7618d4762e111495"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","4e454969ab0873f671dbe66ee61809bb"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","993fc2b97ea94f55ee910cbccb725b20"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","3e0ae08b88c1260f2f193b9d0c51a692"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","33cf4845911ca7a8c399c5ba73d439f1"],["/2023/03/10/DevOps/CICD/CICD/index.html","c302b8e8462a0dfb437d338d302c2aa6"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","40b5735b580b367857a369e60566d50b"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","617f6a31bc4155ae08661c8104222324"],["/2023/03/13/Java/NIO/NIO/index.html","4284e3adc36ef20d250f684c364e5c75"],["/2023/03/14/中间件/Netty/Netty/index.html","1c9bce6974c72a529f357316891306c3"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","014a2cc3d4f6e9f3bd1110a8145a068d"],["/2023/03/17/系统设计/分布式系统认证/index.html","b488c8d6d42873f338152948a45d4aea"],["/2023/03/19/Java/JVM/JVM概述/index.html","f8fc62bd2f235f633f591c48c7934b20"],["/2023/03/23/Java/JVM/类的加载过程/index.html","c6466070cf6c513f8f52fabadecae1aa"],["/2023/03/28/Java/JVM/对象的实例化/index.html","58d74aaae3bc0d3ab4844d71f999a17b"],["/2023/04/01/Java/JVM/运行时数据区/index.html","e0dd2617a32529a89e11795561151b74"],["/2023/04/04/Java/JVM/执行引擎/index.html","9d40401c876078394fd2934c406a4cf6"],["/2023/04/06/Java/JVM/对象引用/index.html","d3c9b9f54e179a4974a91f8581584001"],["/2023/04/09/Java/JVM/垃圾回收/index.html","2f1128651976f798597a000cb91dd204"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","57e5dce5426457dbf0b1b20dbd97ba90"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","3dfb8044e35aa291df89309565c6a8e9"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","e68274428b5c49be7e1af381a49c1f74"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","539971e836a2471226fef453eedd088d"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","bfb0ab72fcb348de5c0bac178edecb40"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","746e58dece9f240410797269331265a5"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","b6f1d69f4acf8d7ee2a1a1c1b957a3a5"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","ea8f703b79522ee29c22ada547d221b9"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","2739564d8ccebdedcd90f9c6ff9175d1"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","3874144cd5a2f59ca34cd160a54b1539"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","301b41282c428c0aaf3dcf2a68c6da39"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","fb234cfc0d2dc93ede60c077466f0d64"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","ae74d9fadd34f9058f1f0d1b169f7369"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","25eaeda34232b04f84dfc320521d79aa"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","8d127d60e057a6fa0e09f0403f2c8f90"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","c1ce6ab58045cef31321055c74b65ba2"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","0fa3ac7c3a7f4d9f7b970a5cebb9db72"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","6ba1bb37abfe05dc8e0b47352fc7e50b"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","612e4a46cca9d3b3c714fa37cf011dd5"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","5dd2afce52e822c3f511290fe7f89fff"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","2e0b85b554d3442e5897d28ccb7eee22"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","a48f733bd21aac8abf0373fc9eccc537"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","570d80a2f6910b53722ef829e3608bd8"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","87a2c3064365c3128c015e48ac9d46a0"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","00421fea05e8b7da863012481cac3d16"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","9a7b87364b73b3b6f082137260c53a12"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","65d484d8e13403406c549ae8533a5475"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","5191894e20a99372241a1d144f939331"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","ce58c09862a2f7816ccaf8a73a069534"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","bb4cb92a07f20fbcda5c925b0aa1536e"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","7ad334189af504b9d2233b0d229da725"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","5de3ed00a95b760102bd2a19b8c18653"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","3d552ef607f9b32239421d16fabf12ac"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","d591265d67fe1f610fdffab0c5cd1bab"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","e873ef82b09cac4e7350204da063f6af"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","8ae9d98730328db02fbafb2f66090545"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","6460fe2c2f821c813a46874bb51f9d9b"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","1f1b6d28473858f6a56404e3d1f8b063"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","7357bee2548dc1c26eb71c345f8e70f9"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","c44d1cae893896c97e79030faeec090c"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","1dac00fa510229e803ffbde90b3cc294"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","5f6957243804708e4c5696911c82a7bc"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","74a185496d06c686a19114b0fae10c90"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","558a17e6a195f2ad903ba7bd468fe973"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","49fe0af2f18b87751ec7b19ae581de64"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","444e9a8fb9a71ef94e33e8b6476d39b8"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","967623003aadc06553a70d137655c5a8"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","08822f5e650641ceec27ad45860d60ee"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","5dabf99139144670f53d418749117cf4"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","e329cfde0c0cbecc7ea4a8a3ee88cab9"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","219a53ed2e412c653bd1980bba1deefd"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","437c3a1a2901dc906362b941ed67ac6d"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","e956249aae7892c000669840cbed7c55"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","aa7d0dfd9c6dd610f1f4bd4c40f414be"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","f4ba23f709446dcfe6ddcca3621623b8"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","e0ea9ba96b3947138ed1250a074f666d"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","27c6ad28e9f198248d8dc3a1f7e84eb0"],["/2023/09/04/中间件/Redis/Redis事务/index.html","57cefbc74f64d69840975d99020a2fc0"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","5702939b8f65eb6c6808931d2a0684ed"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","263abdc316bd14936c2c308082a554ad"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","a386f311d0e3566dec0e3791bb0a869a"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","34bb742c8a5b3701df423c7bc99c3f76"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","9d406fee687c1b3d53f5afad3f484e9e"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","71b7532ef0a726f9a1db3d4aba64c1f3"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","3531d948b6994fd6efa477c2bfaee9a4"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","4609ca589feb6c3b5435306434c8adfd"],["/2023/09/22/Java/NIO/零拷贝/index.html","9c8dc3c0a59257a62fb6739ee39671b9"],["/2023/09/24/系统设计/JWT认证/index.html","1aefec489ac30d59140dc9ca73216dbf"],["/2023/09/26/Java/NIO/Reactor模式/index.html","8551db70e7c93ae69ac3df5b3cb2900e"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","104b7152ef133b6372aeb7fd6a6e0e5d"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","88c844b10d25d3d2be38f24fbfd23195"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","6ee110b47e4860dce5058559f7fa757e"],["/2023/10/09/Java/并发编程/共享问题/index.html","f3c70c124d565f9a2857b1913ccdfa6b"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","9ee45f921e46c1ca122c969d9310fd91"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","682f0ce915f329eeaa08d6f3b1715837"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","8b778db8b3c26856139407f18c312d97"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","7a556387534958b30d367ba3309911d7"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","d26014eff0bf1093d9d633c8dfb4237c"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","b4708418035e39ff8c52454ac2c86eca"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","5f12e9a46514f2e1663cd718889c25e5"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","02ff5de864e0bdbe169fc79c169d8d57"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","bc280edd032656c2ff313d386640a451"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","a33c924c6447745311172e118bf06a04"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","882eb9f7282ae987c9365b50f7771e6c"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","cf0675019dfda95dd501571b8f10e5bf"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","f7e393a22fc97ee9a8d557c130a87185"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","aa5872b9a622cdd1aa05745c88db1ef5"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","6266d82755ecb3242dcf2eb70c90e137"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","4065df3534e4184a4a46b8a3795a9223"],["/2023/12/05/系统设计/开源协议/index.html","2d298d01e9863ffd2a760bff941f3b93"],["/2023/12/09/MockMvc/index.html","ae1fbf3d212cfd1a3f57d13a848ffbb6"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","366363f377b17880f379cd39a6ddbab8"],["/2023/12/19/MySQL读写分离/index.html","f7eea43f60bd9a7c88afa028447fdbf2"],["/2023/12/22/MySQL分库分表/index.html","0f9ca9af7c07fa110d4eb62835eb2ee1"],["/2023/12/27/利用NoSQL优化数据库/index.html","a6ba37e44e13a14b099bfdd84375c6a7"],["/2024/01/06/缓存概述/index.html","99d9f55a69a4f44f1e99bee364cda581"],["/2024/01/11/缓存的读写策略/index.html","d533ef83534ed12240cd7d43b9e57eac"],["/2024/01/14/CDN静态资源加速/index.html","2068ad3e063665f05f6ef111f4a32531"],["/2024/01/18/消息队列延迟问题/index.html","2f01939d6535c3c60635eb6501d379ca"],["/2024/01/22/高并发系统分布式服务方案/index.html","57f7e65e9ae7160c7f7c06e23320cf70"],["/2024/01/26/dubbo/index.html","f46c0b341e1460e3fb61404317015524"],["/2024/01/30/微服务基础/index.html","173a32a2172fa7faf0fedba59edc3109"],["/2024/02/02/监控微服务调用/index.html","be0efd2986754dc48a7391b79df4b5fc"],["/2024/02/13/微服务治理的手段/index.html","be07ac751dc79fa31d1cf9785e4c79f4"],["/2024/02/18/微服务治理的手段-二/index.html","c64f043a15f0e9c4f0d72444189db73c"],["/2024/02/22/计算机基础/操作系统/epoll、poll-和-select/index.html","16e828e5c5c14ff31fbbe1f691454e4c"],["/2024/02/26/Spring事务/index.html","2db724508c505fad8359e4c2c3722d3a"],["/2024/03/01/HTTP接口安全策略/index.html","cf58c85526e28b697db0d5dd4847afec"],["/2024/03/05/HTTP优化策略/index.html","b47adc49f5a6b45326d04453cc97eb28"],["/2024/03/09/计算机基础/计算机网络/基本网络攻击与防御/index.html","71ad918e4f66f26f45037c59b6772e2a"],["/2024/03/13/分布式系统监控/index.html","46abb92ea65b1ce62b4a005643b5bce6"],["/2024/03/18/中间件/规则引擎/规则引擎/index.html","527294a8280d10a8a4be24af90ac7414"],["/404.html","228f2f6afa5d912f751aed4fac65afa5"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","7a8e612ee4ca8db85f9d4a45169b6c23"],["/archives/2021/02/index.html","2df304f416eefcbf851fd5d3f780e8bd"],["/archives/2021/03/index.html","d2cb4eaf6df289cb40b7d7440208f2e2"],["/archives/2021/03/page/2/index.html","8dc86f2248a4c68478a6649ff4d8dc0c"],["/archives/2021/03/page/3/index.html","b9eaaf2ccb3ca7c06ba3dc72596224fa"],["/archives/2021/04/index.html","9e577d07101391d50dbbe25d51fdffba"],["/archives/2021/04/page/2/index.html","0cb94061c759ddc72fae41b7e590e663"],["/archives/2021/05/index.html","d08a61bdbc8ddb0d6a7edc05be006a06"],["/archives/2021/index.html","530a015c8c3870cbe696ac29f7c7fcf4"],["/archives/2021/page/2/index.html","2d29a540889e70e28f95851e5da9e400"],["/archives/2021/page/3/index.html","a898696305e5b0035576ba898ce4097d"],["/archives/2021/page/4/index.html","d978dcd965653149bde333fb27c36ab5"],["/archives/2021/page/5/index.html","07c2b8600d248a2e0682921d7e710a78"],["/archives/2021/page/6/index.html","cf5a0636d44265d0b9b81a7111a13cee"],["/archives/2021/page/7/index.html","5aa49cac8155445f2cd0b8752bc59ba9"],["/archives/2022/01/index.html","890a8628578aef9f90badb1133cde266"],["/archives/2022/04/index.html","b2dc2c6760eff090e373f90e15e69444"],["/archives/2022/08/index.html","a2d260f4c1920ea95a805ff70d0cd6c2"],["/archives/2022/09/index.html","86d9db2b869b1be643e9442fe49adb86"],["/archives/2022/09/page/2/index.html","55ec23469218001439af24670d2798d5"],["/archives/2022/10/index.html","a41126642548eef97dfecee7263014f8"],["/archives/2022/11/index.html","cea1cd2d30093ca7f50ed4e35f672382"],["/archives/2022/12/index.html","4007de687f64512cf6f794e13119b4f7"],["/archives/2022/index.html","0f2c0e4508ff556666398ca644cbd912"],["/archives/2022/page/2/index.html","2410513bb53e2a612f2e7ca34ff0ed5e"],["/archives/2022/page/3/index.html","3004dda34bac88e188a86d72684da37a"],["/archives/2022/page/4/index.html","1d67f64a3c0bf9fad795802ba167e401"],["/archives/2022/page/5/index.html","acfecfc1ae831fc80334b308f9e2d7bf"],["/archives/2023/01/index.html","87a48b3b6c0d139aafd9a223e87165ed"],["/archives/2023/02/index.html","affa4c9466ea58ccbe6789ff160bd6df"],["/archives/2023/03/index.html","d9437115c5a228017bc3978a362de09d"],["/archives/2023/04/index.html","84b8f946be85b72cab9b969aa54cd028"],["/archives/2023/04/page/2/index.html","b924d3fad48e115918f771793c62d218"],["/archives/2023/05/index.html","debbb544f251fa02fbdbf1dede3969d2"],["/archives/2023/06/index.html","56d611583779e0cbc891d2461b8cec43"],["/archives/2023/06/page/2/index.html","2f47190f088f844c945f2c475466a51c"],["/archives/2023/07/index.html","1d4fd09fd1c019467904d0fc63dccb95"],["/archives/2023/07/page/2/index.html","cd45ec757d4699ec6e94b3d46b81562f"],["/archives/2023/08/index.html","3e2b23844524389ad59d4d03164a9945"],["/archives/2023/08/page/2/index.html","573869b83b66491455c39f14a564acc6"],["/archives/2023/09/index.html","ca1eefceaacc3282e3ad9f12c94e277e"],["/archives/2023/09/page/2/index.html","cc573ac45b80569c8c2b4385f4c8f513"],["/archives/2023/10/index.html","976e02b1da41fb3f46669fb60c47aae0"],["/archives/2023/11/index.html","90b2ac0c973304fc51b32837c36647f6"],["/archives/2023/12/index.html","42ff154733435549beeb9f7d362b5476"],["/archives/2023/index.html","ad9a95068a898ea5bee3f3289841c9d1"],["/archives/2023/page/10/index.html","4f948ba7c9f722fb6c2cc7b25193a853"],["/archives/2023/page/11/index.html","6bc1feeced6ed875ab156f1c1f15df2f"],["/archives/2023/page/12/index.html","38e40c11b3a1b7c4916926f5dd6dae03"],["/archives/2023/page/2/index.html","bd14b379b631638485bd4f28daa0148b"],["/archives/2023/page/3/index.html","ce36a5f248cfddf46af3ed3fbc457ea2"],["/archives/2023/page/4/index.html","6e893a8fa7d955773830286a71d8fba4"],["/archives/2023/page/5/index.html","ce77bedd684d845389fbced6278ea91d"],["/archives/2023/page/6/index.html","1c51063d70537b5181217938f1d6a6d6"],["/archives/2023/page/7/index.html","c2e01dcce046f1dfa6e470e303852e12"],["/archives/2023/page/8/index.html","e273dc83e4b6c6fcae3611e72df30ff4"],["/archives/2023/page/9/index.html","92ed6fad978fff5f6acbad5f98bec770"],["/archives/2024/01/index.html","9833387400e477764ce99b6741fec65f"],["/archives/2024/02/index.html","187a5c7f7c3e7ce2d6f2b50e04e1f665"],["/archives/2024/03/index.html","1540d7a0ab1bd7e7d4a05385ce4922c6"],["/archives/2024/index.html","f34f8e5f3e1507d8326ce0c153c00974"],["/archives/2024/page/2/index.html","1546d4f19af4ea7a05a773af7e690112"],["/archives/index.html","36199a50700e732fc24696a6e4112eb9"],["/archives/page/10/index.html","232e8a95d0e2eb4c3fe7cfe429ed9fbb"],["/archives/page/11/index.html","e0fcae6b5d19915e98ba8e7e01be3585"],["/archives/page/12/index.html","0881079f35aaaf7bbf9b4e649a89027e"],["/archives/page/13/index.html","e1dab4c4329897df4aea782dd0388f18"],["/archives/page/14/index.html","9e90b644a78c44908d8bc487090df626"],["/archives/page/15/index.html","f5872be4e2152b15e5a2a35775225e40"],["/archives/page/16/index.html","36679422fb65cd780cab517c51ab4921"],["/archives/page/17/index.html","89f448bbdf9d8ab204747e5a04bd2d1e"],["/archives/page/18/index.html","594fecfef95eec9a71b188e1dfbbb07a"],["/archives/page/19/index.html","28ea3ecd347c8037a83a3cdccd007aa5"],["/archives/page/2/index.html","e02129fef4ae250ee48211af35bf254e"],["/archives/page/20/index.html","9ef7d09b1870ec3049f6352a84bfc2b0"],["/archives/page/21/index.html","c8e9edd7e29504c52b5403e7d8b63ea5"],["/archives/page/22/index.html","720ebb8ea25d2f0a9afdb6c899a956c1"],["/archives/page/23/index.html","f301bef8d8640556b31e80bf3a7373a8"],["/archives/page/24/index.html","253bc1049b4d118fa481a85b0c5ff011"],["/archives/page/3/index.html","8996ad5ad81af05120fe920d1970df09"],["/archives/page/4/index.html","72d85fa5f73c09eb82812401362a1ab9"],["/archives/page/5/index.html","8aeb314c4a3653cb89615c3a892cff9a"],["/archives/page/6/index.html","0940b66dbd6dedaa79173fe18101a168"],["/archives/page/7/index.html","39618a76df063b785affa3655934ab5d"],["/archives/page/8/index.html","644a39aad63a145bf4de20d544a9d19c"],["/archives/page/9/index.html","cf8fa26a926eb4c56461a7678ac82d47"],["/categories/Devops/CICD/index.html","44045e83e374c8f8d31840424b314fe3"],["/categories/Devops/Linux/index.html","2f27dfbe8576034c62665d315a047afc"],["/categories/Devops/index.html","dc6231e53a44ee55ebad4d4a23a9ad22"],["/categories/Java/JVM/index.html","59c9f513d5d4cfb013c0fa9397388bf8"],["/categories/Java/Java基础/index.html","20574a82e0779b7a331d32ac842fe11f"],["/categories/Java/NIO/index.html","3ee6f48814fc7492cbfc562dffa5f6bf"],["/categories/Java/NIO/原生NIO/index.html","ef80697c64910ce5e32d25ce04575779"],["/categories/Java/NIO/文件操作工具类/index.html","f36bb993d87bf4f86c4ed1fb7d23a58b"],["/categories/Java/index.html","1fb3529985a38ee579b69cfccea2a1ae"],["/categories/Java/page/2/index.html","0446334c976614f04ebda923fa54ac6d"],["/categories/Java/并发编程/index.html","f226f4171b7407340d7d903ac5ef0f3f"],["/categories/Spring全家桶/Spring-Security/index.html","7464eee4035946bf12f33f2662fdeb5b"],["/categories/Spring全家桶/Spring/index.html","1780cfaa4847a68b1e55ff6ce33ba035"],["/categories/Spring全家桶/SpringBoot/index.html","e3a5bdf480741055bd087d128eea7615"],["/categories/Spring全家桶/SpringCloud/index.html","c8560b630715dd46c434526469c37b94"],["/categories/Spring全家桶/SpringMVC/index.html","b4327e816e3adaa5fbeda0b80dbe0ee3"],["/categories/Spring全家桶/index.html","fef44ae1f7e41d8d56994fbc6450b3f9"],["/categories/Spring全家桶/page/2/index.html","d9add65e1ebffd2bd788fa4b0b748518"],["/categories/index.html","6d1260ad1c2f27b40841b516bfeffe5d"],["/categories/中间件/Dubbo/index.html","41081a0dcee98c9de87d024e64f95c97"],["/categories/中间件/ElasticSearch/index.html","bee2068114eace50624f4019a191141a"],["/categories/中间件/LiteFlow/index.html","de8529cd56c0535458316a760e1f15a5"],["/categories/中间件/Netty/index.html","a10dd3e154e9526d9577b2951e76cdf6"],["/categories/中间件/Redis/index.html","5a631e41d24ed650dc9e6faf75b857bf"],["/categories/中间件/Redis/page/2/index.html","c3c19936e1ff3631250b9e8cabe03700"],["/categories/中间件/Redis/page/3/index.html","992368b67a45943c9af284576331a6f1"],["/categories/中间件/index.html","e7882b8715c2ea909398d0524c6aba98"],["/categories/中间件/page/2/index.html","77d240e734e1fea223f26e9c3bdc79b1"],["/categories/中间件/page/3/index.html","406a7a0ab23a8965b08e4a298d595291"],["/categories/中间件/page/4/index.html","9a6d558d7ba1414c39aea359d425cefe"],["/categories/中间件/消息队列/RabbitMQ/index.html","356ed6e85887c14e10e374df5bcefa7e"],["/categories/中间件/消息队列/index.html","86159148add32503e3ef16b9156f6b9a"],["/categories/前端/Mock/index.html","5b88e2df139f82df9b0f75258e836c7e"],["/categories/前端/Promise/index.html","4d33d2f83ffbbc5c6e35b18f2cf865f0"],["/categories/前端/Vue/index.html","757584640d7484e847bed2d7f0269b5f"],["/categories/前端/index.html","0657326e2fc4360ea8de2eb12be1efae"],["/categories/前端/jQuery/index.html","77393b5ef8303e07aa0a93476fc87545"],["/categories/前端/page/2/index.html","a2c627fc84be78e06a2a72b1753a8638"],["/categories/前端/原生基础/index.html","a4f982581754b9fde708b28a9131456f"],["/categories/前端/异步通信/index.html","755adf7e89475d67be16c13da8eab24a"],["/categories/工具使用/Git/index.html","b12f262dc5fd441cd5f08d8414c8dca9"],["/categories/工具使用/index.html","18fa98a90f8584c4500897628c7f735d"],["/categories/工具使用/markdown/index.html","f7d6d31a02e7b5514b3d46e96462bb89"],["/categories/工具的使用/Docker/index.html","53a284095ce436e2092d8a9c94cbc27b"],["/categories/工具的使用/Nginx/index.html","5e6121a23e2366f89ac408a6f7644c5c"],["/categories/工具的使用/Swagger/index.html","d7c82a210900f9abaf437f6ce775bccb"],["/categories/工具的使用/index.html","146274c2417e8ea3cba7a59a407e434d"],["/categories/工具的使用/博客搭建/index.html","976b4e84d70aabb5a24ad8a95ae1c7fe"],["/categories/数据库/MongoDB/index.html","b21663fc67649d6c4a03ba77d24b0770"],["/categories/数据库/MySQL/index.html","a5b58de5227cf92df157cfd7c80ee38f"],["/categories/数据库/MySQL/page/2/index.html","f01cc563be7c4ee8e7e006c0465eb672"],["/categories/数据库/MySQL/page/3/index.html","22b5c580af4aae4ab5bccefa4372cce0"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","fa2aa7adb4d42685b892dae1dab9715a"],["/categories/数据库/ORM持久层框架/index.html","75bac06b86fdaebe86689b9376a988ba"],["/categories/数据库/index.html","69fcfba7c3a2304845b14495c7c0a807"],["/categories/数据库/page/2/index.html","c938113bfc9decd2aca6b9f6d0567edd"],["/categories/数据库/page/3/index.html","4e5b8c20f7fc0f7075a7eb5619998969"],["/categories/系统设计/DDD领域模型/index.html","64bbe6fcae96d0a66646fa0033366054"],["/categories/系统设计/index.html","de6ddf9911296171f7dc0f20c0bb7f99"],["/categories/系统设计/page/2/index.html","c3671e333f482d7091bc41065777287d"],["/categories/系统设计/page/3/index.html","f58550dd05a0c591b6af55514616d27a"],["/categories/系统设计/page/4/index.html","e703a424e5f6ea2536bdf5a626834801"],["/categories/系统设计/page/5/index.html","d1ce95da807cdc346d4edaabb7bc0159"],["/categories/系统设计/分布式权限认证/index.html","f3f02eb6eebdf4d521a403d490e43881"],["/categories/系统设计/分布式系统/index.html","2d690778fbcb6c0ef52daff7f6dec740"],["/categories/系统设计/分布式系统/page/2/index.html","35bf461ebaec1b6d75366a4910b64625"],["/categories/系统设计/分布式系统/page/3/index.html","655b1df78daf6b433dff70cf0c98cbef"],["/categories/系统设计/微服务/index.html","eb3266ed5533f6073eab3a8f17508058"],["/categories/系统设计/数据库优化/index.html","44f6f8ce3fe3da187839a4302ff65a69"],["/categories/系统设计/设计模式/index.html","5422477db05a40bffe77abfefdb1c685"],["/categories/系统设计/设计模式/page/2/index.html","266e136f5780e2bb865d7d33b66bbfb0"],["/categories/计算机基础/index.html","0ea2572dd62b76d735a375da5ee7026f"],["/categories/计算机基础/page/2/index.html","923cee9837f6e8a0d70e352834937088"],["/categories/计算机基础/page/3/index.html","d3e3565dc07d43dda56d8b4990078219"],["/categories/计算机基础/page/4/index.html","2f6a7fafe50db19b604a174a70238d25"],["/categories/计算机基础/page/5/index.html","aefaf70cd517987bf6adb9027b62ff78"],["/categories/计算机基础/page/6/index.html","4bed79b54fff1b6626c819ba45fdbd4e"],["/categories/计算机基础/操作系统/index.html","6d03bfb75e34c85df649610e4e68a462"],["/categories/计算机基础/数据结构与算法/index.html","e4c3824136618f28932e724f89bde026"],["/categories/计算机基础/数据结构与算法/page/2/index.html","73dcdc600030109713b35f865c0728ad"],["/categories/计算机基础/数据结构与算法/page/3/index.html","7457c6c29fa01ece53d58092e3a95f68"],["/categories/计算机基础/数据结构与算法/page/4/index.html","d4866a27768c2858503717c724c7cc3d"],["/categories/计算机基础/数据结构与算法/page/5/index.html","43aba84b81909e9e294fd8ace58cb15e"],["/categories/计算机基础/计算机网络/index.html","4f082efdc2a53ec90d69a05bf4367dbd"],["/categories/计算机基础/计算机网络/page/2/index.html","4091e0a6c578b5a74f1c53b6474e52f3"],["/css/index.css","4116fa9aa4ac3772d0d5d3b403252b5d"],["/css/shadow.css","5a0dc2c757a4aaef1f7bfbd8637ed9f7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","ab96cc8ea8000f42cb8464e87dd1b1d3"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","141edf798cd13a5c9fba2f3d97060a3f"],["/messageboard/index.html","0a14e885279d55bca612362033042bee"],["/page/10/index.html","541044eabddf80cfc0c03d27443e3e82"],["/page/11/index.html","af066067e0cca2c32c5ed9c982a59a1a"],["/page/12/index.html","37190e587f009d204a2e3405dc65029e"],["/page/13/index.html","0e789dcf579cdf18c7f18d8204f461f0"],["/page/14/index.html","87748935926b3fccb9053a5d717923b5"],["/page/15/index.html","bb94fc3e34346ab3b975d475b3423e0c"],["/page/16/index.html","48f38f1fc7e3602183e8630c4f369804"],["/page/17/index.html","c3c815e5bdea5793a3cbe316091153c5"],["/page/18/index.html","7b10673b4aed05a1bf2c14e31c368041"],["/page/19/index.html","08180fdfacb654b341844a3af2870f99"],["/page/2/index.html","a14612de87f63177ea5838fefc04f0e5"],["/page/20/index.html","024605190e8c99b35161aa6fec5c6c4c"],["/page/21/index.html","00954008110037557be7843fdf35c84f"],["/page/22/index.html","2f742eda356c6ce1c7628171129fdb23"],["/page/23/index.html","9bff5d458e9c3ab111515c85bcfd8728"],["/page/24/index.html","43989c50e2123dfcd3a8422d2a548c63"],["/page/3/index.html","844bfeaa80440950eea912bc752df7c7"],["/page/4/index.html","9f8d9819bf6bcfab621bec68c172932a"],["/page/5/index.html","eaa54f20351ca8f69a623ac8ec05a3fb"],["/page/6/index.html","ce19a30c712f79e88a86fbc1b293b7b2"],["/page/7/index.html","d8ae0139f7e58e86ac9f02f53ef46383"],["/page/8/index.html","1484cd9122d89ba9c7877e00264a579f"],["/page/9/index.html","0570c4696bce069d4e241530e029ac56"],["/sw-register.js","6e5ce11a64ebed461513901d49e51558"],["/tags/Ajax/index.html","00f81c78e7eb85c66e366348e6fc6ecb"],["/tags/Axios/index.html","43b8a12b717b47bc1b5be0a9a7b4c947"],["/tags/BASE理论/index.html","3c9a44503b0b37a68566e6c591365313"],["/tags/CAP定理/index.html","052d859290fe27d984d758456205591a"],["/tags/CICD/index.html","8d0fe25644a1ad2fbabfb16a2c2f72e2"],["/tags/DDD领域模型/index.html","200b82db0f64190dc90c87bf6bab241e"],["/tags/Docker/index.html","c8b9f9dbb711629949ed4b442e1917a2"],["/tags/Dubbo/index.html","35fa37003d45a944cd2380272dd68811"],["/tags/ELK/index.html","507ff7738d0b08b334a3c25940ba8241"],["/tags/ElasticSearch/index.html","ba38a91f05ef0a55b86a454f94932f77"],["/tags/Git/index.html","2d83f80f16ab89005276022374cb71d4"],["/tags/H5/index.html","1e272262c5733ac3f649471c2512d015"],["/tags/HTTP优化策略/index.html","3e4337fb8fa50ed61321a3ebca4f6d52"],["/tags/JVM/index.html","f1abe649cc8e987ad409d2e961ed0e0c"],["/tags/JVM内存模型/index.html","26c7987e6143cc3034ee308419a8d3ce"],["/tags/JVM执行引擎/index.html","430bc04568eb92e2e2242e6d7112fd84"],["/tags/JavaScript/index.html","e8053a28761e46bb04cc9d21dd716bbc"],["/tags/Java内存模型/index.html","6223f75f061c9ebaae490c566a5fbbe9"],["/tags/Java进程线程/index.html","95ca6e72830bb3aec729db1280086c4d"],["/tags/Kibana/index.html","b7a8d8863da22dc12fd0e1c6fbaed718"],["/tags/LeetCode/index.html","1ce1e5a23cb33c8e1659a5a13321491a"],["/tags/LeetCode/page/2/index.html","737d40cb45b612067cde8d1c500152d0"],["/tags/LeetCode/page/3/index.html","4de372cd03919750c387abdaf5337a43"],["/tags/Linux/index.html","4e3710a80afa32997345b9f7051c50ce"],["/tags/LiteFlow/index.html","36a580c39644dc119c409d3a5bc1fbf7"],["/tags/Logstash/index.html","6ca70f5b24c5442da3208e8f07dfb914"],["/tags/Mock/index.html","facf18b576c46fbc84916511c9b93fa1"],["/tags/MockMvc/index.html","0c51d59633b8a182bfbdde82488ff2ba"],["/tags/MongoDB/index.html","091410ea070a9a7af17d2b229fe7928e"],["/tags/MySQL-事务/index.html","326101566c893e9b770f6fe7e6d91355"],["/tags/MySQL-数据类型/index.html","454951170aec1fae440e4411fc5a5531"],["/tags/MySQL-日志/index.html","6d47fd3f08cb01bf5f7b98636e314633"],["/tags/MySQL-索引/index.html","5082ad0f9a9d7ec73a4fdaa1ca6ccc0c"],["/tags/MySQL-锁/index.html","9120d45a2a72e698c099183afa17bc61"],["/tags/MySQL/index.html","59c447c2fd1ef2afc059dd797b2120e7"],["/tags/MySQL/page/2/index.html","ba69aa0b3255de4c9931baa8c132d74c"],["/tags/MySQL分库分表/index.html","1f8808f90934c7451164130cc831a321"],["/tags/MySQL读写分离/index.html","2298d1f11540fe082fd0da6937d3a8c2"],["/tags/Mybatis/index.html","3d11a2e033bad090450362698de5116b"],["/tags/MybatisPlus/index.html","35adba00ecbe60a0e061eadbc2582874"],["/tags/NIO/index.html","3d6d2dfa92a68fe4487c1a8e5bb30e7d"],["/tags/Netty/index.html","5b1987230ad2914eaaed66e9b88c557a"],["/tags/Nginx/index.html","d5b0790f82262d4ca97d2ec13819849e"],["/tags/NoSQL/index.html","f99bb00359a5d40e0a14752b17d37242"],["/tags/Promise/index.html","4803ee239a9ba04739c959d86e1598b7"],["/tags/RabbitMQ/index.html","bd6c8a0479eebbb16d061ba4c822999f"],["/tags/Redis/index.html","8039d434ddbf6a0f16df407147d7bdb3"],["/tags/Redis/page/2/index.html","dcc2811b4ea6e9d618b09f7634429292"],["/tags/Redis/page/3/index.html","003eb23f2ab5416e03b72e1b2c045d5b"],["/tags/SSM/index.html","899c282030808096e73a26185016feb6"],["/tags/Spring-Security/index.html","f89e04122086bc0c32e65efef9c1f1e6"],["/tags/Spring/index.html","4f7e990fbb467dfe0ec7b53f1980cc8b"],["/tags/SpringBoot/index.html","a6717c00b38a1ae76dcfcb9511589f14"],["/tags/SpringCloud/index.html","c39103585f0e5e5c5fa51598933bc819"],["/tags/SpringMVC/index.html","021fb7b28a054c2a6ef74ea69cd46cc4"],["/tags/Spring事务/index.html","614da7a7aed48eb95019024e5de8c342"],["/tags/Swagger/index.html","4562c594b09a79ef1899836901b20448"],["/tags/hexo/index.html","a9a5c507718de166b4f204f414e850ab"],["/tags/index.html","10815536697aea88f69be46517bc436e"],["/tags/jQuery/index.html","f558a5a73ded445ac9dc14c137f494af"],["/tags/java/index.html","7cdcb475d383564050c7003e95b0364c"],["/tags/markdown/index.html","bcd4e51ac52b9fccf8708f5ac1aa52a4"],["/tags/rpc框架/index.html","fdd8a82a5c4f438d753e069b74266c6d"],["/tags/typora/index.html","5fc7e7365793602a0a25a2e26b900c76"],["/tags/vue/index.html","577e738e007b5a04251694aad4085a21"],["/tags/享元模式/index.html","dfb6960995a671f77959044fa973cbd3"],["/tags/代理模式/index.html","c1d0f66f4326f4c6e664efb2ca3d1065"],["/tags/内存管理/index.html","a2d42099b8b44d5ceadbc565b37374d7"],["/tags/分布式/index.html","64a58f82775e008d902f3cc8df6ee559"],["/tags/分布式一致性算法/index.html","5e4152118830430edfb40a4650043ebf"],["/tags/分布式系统/index.html","1da4aff8508ec00e0d24fabecde38e10"],["/tags/分布式系统/page/2/index.html","4747046f2161cce34d8bd33ddadcaeb5"],["/tags/分布式系统/page/3/index.html","ceebd6a65d49696d8c54a522f6f81984"],["/tags/前端/index.html","4210a1d592934d082c99dde427a3c03d"],["/tags/前端/page/2/index.html","61565fde644223138848a442dbfd1da4"],["/tags/动态通知/index.html","65d4ab35971737ae06bc3dc68eac2211"],["/tags/博客/index.html","3860bccf9e153a9e06c1eb361bd81653"],["/tags/后端/index.html","8f8538654dc4d5ada84ef912aec60518"],["/tags/外观模式/index.html","d900304624fef590d5b0f7ec68edaa13"],["/tags/多级缓存架构/index.html","e5a78c91d8cf0b6ac17351786878c33f"],["/tags/多线程设计模式/index.html","7dcca382224933cce833ed75725adb7a"],["/tags/多路复用/index.html","b9ef6710d492185ce5ee73bcda4387e9"],["/tags/容器技术/index.html","ee665cff9aebb741c8f72c5230feaec8"],["/tags/工厂方法/index.html","13317a8abf6e5a51f6f9a7285a9debdf"],["/tags/开源协议/index.html","42a6bb266193a4db751702236ec51047"],["/tags/异构同步/index.html","e0fb0b76fa0232dc580a1f1aa89581f5"],["/tags/微服务/index.html","16411f2abeb2738048c7db804d4908fa"],["/tags/微服务基础/index.html","6c99b04c25f9a3cd9c4e775cb85b25fc"],["/tags/抽象工厂/index.html","c224d2007799131042e0c6d72e5ece9b"],["/tags/持续集成持续部署/index.html","bd6df2e101fe5ed3283233e0e58c6962"],["/tags/接口安全策略/index.html","24b9d57998474789d5570b424305b3e2"],["/tags/接口幂等性/index.html","4769b1949dfeb98d1d26eefbfdf1a2df"],["/tags/搜索引擎/index.html","608eb269281821ab1a685a644ffeb447"],["/tags/操作系统/index.html","2b3d01822a948f9615ff253550978434"],["/tags/数据库/index.html","5ca431c4231057aa3f263650f292a201"],["/tags/数据库/page/2/index.html","5d609b2f115377c7072338b5b729bf7e"],["/tags/数据库/page/3/index.html","63c4486445bb8122a99c339f10e5b06a"],["/tags/数据结构与算法/index.html","2c4ea98151e2b40e4b74f223ebb70458"],["/tags/数据结构与算法/page/2/index.html","e0d4e559f20d9b6da40ab0a3b9e7a369"],["/tags/文件操作/index.html","b3022f7a5fcdcea046fa67de8ee4cd8f"],["/tags/日志/index.html","01e72d248d9a6c0391c6bd840d269166"],["/tags/服务器/index.html","cf4e793a2b9f539180c4ad3babed2950"],["/tags/服务治理/index.html","d50eb1b1339b41c1125cc7341763f9d8"],["/tags/权限认证/index.html","c75fdefe2212b66e326907b31a6e8f7d"],["/tags/架构分层/index.html","11e017455a48c8f52ba1681476526761"],["/tags/桥接模式/index.html","95dea2019c4cf223cd5c83bd36733c7b"],["/tags/模板方法模式/index.html","5543e5c924033c696c4bb8e9f4f0e9b9"],["/tags/死锁/index.html","eea5ce7591ecd363e4bf940949900f2c"],["/tags/池化技术/index.html","f342261ffb705755e10dd371989057c1"],["/tags/消息队列/index.html","be5df3205d2511cfb1c99b1edf955615"],["/tags/版本控制/index.html","ab2287d26854cf2b50373404a4965f50"],["/tags/监控微服务调用/index.html","000c3c22ca0aff359c644660de6de82d"],["/tags/策略模式/index.html","6f5b4c6777ebc3e6c59c851efb885769"],["/tags/简单工厂/index.html","cabbf99670e7cf19690ab8249804744d"],["/tags/算法/index.html","1e5e512c09f9bdb66281478255924908"],["/tags/系统监控/index.html","264b382c9d0175997e6455cb92a6e1e1"],["/tags/线程活跃性问题/index.html","b0e8e1001fcea7e51a0ed95dd6f0999d"],["/tags/组件化/index.html","a5b1266ebe4cfb79ffae20e526ce09b9"],["/tags/经典限流算法/index.html","6a907db0451f77940430d09f2ec92240"],["/tags/缓存/index.html","9eac753ce596cb4ee98f296d7ca8a5da"],["/tags/缓存/page/2/index.html","933c2165207976c10f50d19777ec378b"],["/tags/缓存/page/3/index.html","e698ffbaaafdf28037cfa2e8784cdce6"],["/tags/观察者模式/index.html","e7c06b031180bf26d748e1b1c80a4619"],["/tags/规则引擎/index.html","4bc880b1318b10db4f541f24a67ea81c"],["/tags/计算机网络/index.html","8c777d64a4eb07e1a7c008a78f04ad10"],["/tags/计算机网络/page/2/index.html","e8614d012bac356a445ac67bb06ef5da"],["/tags/设计模式/index.html","7320acf6fcdcf199eb26f65690302e61"],["/tags/设计模式/page/2/index.html","065b48ed31d315258508621ea0040a91"],["/tags/设计目标/index.html","a6759a34b3f96063555d71131d978f47"],["/tags/资源共享问题/index.html","da17c4b1e9c23285cbcdf45ac6c598d5"],["/tags/进程管理/index.html","a179038cc0cb5bfb3077616ab21b9fa1"],["/tags/适配器模式/index.html","1776a547f902519865f9b46152038918"],["/tags/通用设计方法/index.html","87682dc4bf69c3ae6424f6721a2fedf7"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
