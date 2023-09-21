/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","c45aa5a061acb055b4cd1bcf741eb7bd"],["/2021/02/22/工具的使用/博客的搭建/index.html","f3b6f455fff4965fc6fc7c107b318b73"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","5c0c34fe8cc225e4066223aef8a74a93"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","1030a6e6955d48a97ea35ff407b7ad50"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","1861e2007792c298606e02bc1d67989e"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","4872523592b9644383b652cee568fcb1"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","be757f5b09a4339f96c71fed859491be"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","e6eb3b9d7d34c977edf9f557dbdfc22b"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","739e527ab519c8e40f35855ee156d164"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","bb4448528b84c5ec9e89813b26a3cf5f"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","eefa4cc480ead9b86df5fbccf04937f0"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","aaa67c8a83c30666001c09044e07910b"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","74a157d697aa2b86a3bd322e2f55e898"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","e465ec6d95c97d731c0d1cc72dc09eee"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","6161f5775e2e6cb57e3784feafdc7520"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","c4f25c6c0202ef383203e03af1dcc5f0"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","5cabf7431761fc7dca18a24b4f2df943"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","b30fd6c22508ee25fcd9dde1c9bf86ca"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","2d403c9326d2e61bfa5f1926b0680418"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","a3fc21d65f94e5b710927adad05442e7"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","7c0d785d5bcbcb97b766e3b9be219e05"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","862da4a045a95fb694ece29417f6a990"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","65f7687669d2ebaf6bda11e6e9cf3310"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","1cc65c071104a96dc247e7393664f810"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","ff95b8284823735a00b433c725c88244"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","5a5059eadbaf9ba5e7ccd708fbaecd8b"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","14ca9571974183d9b1ee8480fc441e55"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","6a79978ca851e8e669c6793a4265a65d"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","4bc1f4891ceb2416425eedf5cb7ab36e"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","e8ac42bf12fd3cd27886d304eb31616e"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","f5aa89c5390a1363570acdf955d07398"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","c8e65ee856e1cdb2dd0639d0ff41233f"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","08db6ab9cc9a0c984ce64dcf73ed0f9c"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","40b7722d2072e9cebf421495a469f9b6"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","69830fd7c24272ba6b373cc5569547d9"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","67f16cc132be671b615052598245ae65"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","d267128086db76ca0eb6c77446ed2edc"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","2e8c61be3cdcfd657c18e9d2ad6626cd"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","8d5c653ef0e9b03799f043b9e795962f"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","1c7231e8ac7301293b1d8e3aa63e5c0b"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","2635b65dc81e05031753758b716dd78a"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","defca942df5bcddc69e518faef3b862b"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","30d6f973aa05ddd4e2443df4f963a161"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","1cfc5b83c46387bbab9533bfea522b49"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","29b35d1e801e6243ba197738ebd25292"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","bbc4cc5177d7c7da6928666462d0f7e6"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","d3d47544774b8ba881b2f4c8931acf31"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","012600ab9e8f5424a91c5f5dba78a02f"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","7bf549d379a3351d9a21ed4ca630bf7a"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","faa47cecbf7009b906bac47a68eb3a23"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","57ca168a2c63057df55d790c1f719b37"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","bffdb99c79cc93d7a627c94394d4d69d"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","c65ed743a823ff975973e2b30bf125f5"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","0bde68458c5592e3d264784a458dc064"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","89309d50e692f594ca44ab7243b7b9c9"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","3d9451fba33c85fe2a44415fb0bf5269"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","3449597b8b1ba824bf39588ec7fc56e8"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","743d6dc285c6212df386b99d95d256f3"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","64014a3853414302995635686b3675d6"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","dd2cbebbaa9d3fedebf6437d5179a27c"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","b799db0d16a829ac8efab19c633ae13d"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","c24c3fcb416f3b62f7de9fb177d0b032"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","a2a5fb3707f5f8f3400fb2d9f58dd916"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","7773764832230d049453ed4835539c78"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","4b21abe76fb19126ddf529d808c42e4a"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","33afcf5deb2f334aa010f508be0d0fa9"],["/2022/08/17/前端/jQuery/index.html","bee92d8ed8a105f62a243eafd60703d0"],["/2022/08/19/前端/JavaScript/index.html","9bb2fc15dc85b11e4739da782b1c05ff"],["/2022/08/22/前端/Ajax/index.html","0b514e0748a4a0200dacfaa3d29a162a"],["/2022/08/23/前端/Promise/index.html","ade0034446351e358fa5fb729f638d03"],["/2022/08/24/前端/Axios/index.html","1ef226f68ff5c5b2838a98f08e6fd419"],["/2022/08/25/前端/H5本地存储/index.html","2070cdbb7a54a704036e2888d4e31469"],["/2022/08/26/前端/mock/index.html","2fab8dddf0db490e7affcfdb671d85d7"],["/2022/08/31/前端/vue/VueJs/index.html","67d6224f48a06dff343d5d4a1f7a6b88"],["/2022/09/01/前端/vue/vue组件化/index.html","27e08fe14181d3a5e66c0080005461d4"],["/2022/09/04/前端/vue/VueCLI/index.html","38ccb7b33623c0dac342bb38003c4f29"],["/2022/09/07/前端/vue/vue实现动画/index.html","654e69464a1780967c3505d3c772a8b1"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","a93dcc3687f4e8db0cadabd5a23e0d2b"],["/2022/09/10/前端/vue/Vue异步请求/index.html","6f0117e41cfae3b37e41d6068283714d"],["/2022/09/11/前端/vue/vue-Router/index.html","c39ca324166f13dfb0dd33089b9054b4"],["/2022/09/13/前端/vue/Vuex/index.html","023644585a5785db63e8a272ca70bb27"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","7631c6927c1feded4da264f0178020c9"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","adb62d0707407e53573b235d29a744f7"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","5990dee8c9a51d69e3720eaf72df5c8d"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","797faf57ad583b7db939adb0b044683d"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","e7cd133490a32a9dfdbfbcc1854181b5"],["/2022/09/28/DevOps/Linux/Linux/index.html","1b1bd9dcb65f56abaa72ead28c3e236b"],["/2022/10/02/中间件/Redis/redis基础/index.html","991ef643f6f70fee0815dbeb459d3073"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","1349bd45b800c1d24862833faf295c15"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","4eade12dadabe9a00febca0409faca4d"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","814cb89580cd7a247e35be25aeea3838"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","b6b4fe94663ea056cdb888177f17601e"],["/2022/10/17/中间件/Redis/Redis集群/index.html","88af410346bdbb7166310d89feb9feaf"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","f79b6c7c11cca7b252157a0d5c1f42f3"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","5d8a5ba6d59218dff3f23f42667233f8"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","67d74ae6e456e1e10eba45180458e4a2"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","3feffc58e6ba34f12143faa48d8f9a32"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","ce23aedc2b18430b4332817eb621ccad"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","107e3782795c73c2457f46a9773d9d09"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","b8f7ec299d02a5a34184fac8cc6c84d3"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","258bedebb4d03b9197ee334827185dfe"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","5ab2f72c2100a292a8062b7b0a9bd5da"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","0b115a173938c8fcb904a32a98e9e69c"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","2e483ed98925621aaae00eb2108d5aba"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","1bb4e2a25b4daf1745fe3c59694845df"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","b996eddb283508e29d05b3d5b31a94e1"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","33e5cf76147de44a83846c10d3d94930"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","eb57a89daf2aca39976e4c3dfa495f97"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","e0edbe059a49c90b16d5e0164f0c4909"],["/2023/03/10/DevOps/CICD/CICD/index.html","b30568f08509170078e465adc3840761"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","85fd2d1efbc783cd53b2978753a7f0cc"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","8ace4aab2365dc46d5bdaea322bad64e"],["/2023/03/13/Java/NIO/NIO/index.html","b4e6ffdb91a5d1264bf6d110ba203e94"],["/2023/03/14/Java/NIO/Netty/index.html","7ddfc3593c7c956465c8009ad9722db9"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","22d487304f63fd29de405c189799c47f"],["/2023/03/17/系统设计/分布式系统认证/index.html","67854aeffa36049a73ef006285b427b9"],["/2023/03/19/Java/JVM/JVM概述/index.html","aeb4bf39e24dfd4a27d156f9f84a7abc"],["/2023/03/23/Java/JVM/类的加载过程/index.html","0a7e8d95786b26b0fd6690cad0127686"],["/2023/03/28/Java/JVM/对象的实例化/index.html","c81fe16b7bb201bafb4be3c6d598f811"],["/2023/04/01/Java/JVM/运行时数据区/index.html","054f35aef4cefb8015be081a163e7d3e"],["/2023/04/04/Java/JVM/执行引擎/index.html","9045c8ac9c32060c68b38bd53bf8eef2"],["/2023/04/06/Java/JVM/对象引用/index.html","4f41c719c7b15102ff440581abcaac96"],["/2023/04/09/Java/JVM/垃圾回收/index.html","50986c0a981e1fe247b1504977957ae1"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","efb06621e0031104391f646d91001c6e"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","92ef024323c57892e310e81d585bb059"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","0659e81a74e6f232628ce550a2047085"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","2eb57e147c99d4d80a224826e0b988a7"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","307209b04e4f5be88d0a410c13c46b59"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","34312224c7fbcc8087d56c61dbac9cc9"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","d60a7be1e17c566ef3c40c0832ce9cbf"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","01322e6cdc5e14fdd4e76dc54e288bfb"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","ee2c5895d40a196faef9386c6ffad32f"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","8aa494ec746ec1b01619da2c5b13a5b5"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","c23cbc286fcdf7d8c914e1b40f2f1217"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","22c8e278a349095f61569f780de8cb6a"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","ccadb1a03e7456388794c391103d01b7"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","bf9009fc824ead09778c0fa6e6a2c278"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","de1242ebdb4e52d4d119b9e56e5a5f91"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","468837982b324a333198fd7cb0b6e89e"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","377be7dfdecd2be33e0c2aed7c99db03"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","cf2cc6c50644f50a72a77dea75badcfd"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","c56f2d1b42c6f575d4fb2fd064ef339d"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","b1cb595b240aa159971261e082cb4408"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","7fe7731753e044155edb83c3f8223f29"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","c6f0dcf622496ed7195e2d1aa317c201"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","e64f329e2321e830c0683ca5e1aa85a6"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","04dab1a9f1b104262de796c2ec1e1def"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","e9a679e54ddb05cef1c7618071b03895"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","161825784b8d97c73574b44dee9380c9"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","700574a8d6c183428a9ac44d7423af34"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","03150f978374b2765731ee917a517c3d"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","15b17bc2b72585198a82ee299cd13fda"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","4f732d4fef10733a186ae29caf405530"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","12755355e0ebbc54b7e06ce2166f2856"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","ee589a9d23fa886d20f4eeb005244f17"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","71cdd509dca16222ee82eedecb87c24b"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","b1eb704cb766fdb5b25601bf358fd939"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","1d841baae66baff5bdb5e972a0249937"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","a0d37a8521cfa51e340ff3d3c216db67"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","4945a676b45628be583e50026da4d472"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","274eccf0628aaeea56b368b8661256b0"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","498610f041568ab589427db307034b02"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","33cb59080f46ffa7d09c1d2d6935a116"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","8ddfd345f6031f19616f1dd1e263cc9a"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","18fc52a3d8730d52fa512655a133349c"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","609e83eecf98719d2076994d132672c2"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","b8614929bd8c8bcf12d3b719c16c5d75"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","365941e5cfbb3a4ee49e018396cb5ba2"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","6fbd3e1e3618453c66353fb6b4312e20"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","3a9ed07644da61f57b8c8477c96caebd"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","83c3642a6728b0bc8541ae559a17b7b1"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","d6dc1be3bfedd0bf40e4a3065f251287"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","c58766826666c9c01173c8c9f543e9f7"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","2daa84236b70adc3697425bbdf212876"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","1b831e202c3d4bdbe8e650b5d3b55212"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","6169185b13b25d7617984533b27a6924"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","d18e93ad9e03cc5836eb60df11fd63cf"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","50472078891f1824ce232f9b8b716fa4"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","97686f09dfef95279d45de5b56cf0197"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","20185121471ace61cc9b10e1b50c664d"],["/2023/09/04/中间件/Redis/Redis事务/index.html","24938d47a9ae182b55475d7547aeef57"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","a11f80036baddb34e79cc222d2c6bcbf"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","3e109f8171cb0ae4103db7e5c5a0fd0e"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","80eb5e5b5a430a533fb26e032b791a31"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","c8a0931f5812d3bc6aa678b9667cef81"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","da84d1998f6543163cfec35a9fa6da6c"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","9857caa35138834a8cc6dd13a0a635fe"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","c774f3f4ffd1eb650481bf9a67ecbe0d"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","774679f07ab0dfe6d16d74078b1df483"],["/404.html","e06adfa74dfd0249696c19e227688e44"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","7300e1b393892ad3fc6a9cb4570bccbd"],["/archives/2021/02/index.html","b5747bd3f555a941f1091390b76ac3dc"],["/archives/2021/03/index.html","9fcdb7a7a1f4fd5a06ba32c7d24ab75a"],["/archives/2021/03/page/2/index.html","3040a4dc6522023d75a9d437440fa3fd"],["/archives/2021/03/page/3/index.html","a53521d09a198f0c7c2c966ece0fedce"],["/archives/2021/04/index.html","f071d8c9624fe145852fdbfb0aa05aa3"],["/archives/2021/04/page/2/index.html","7e4a6f951311b5fba05f1e4a2a61d1ee"],["/archives/2021/05/index.html","268cd06de111ae758559ceb8c11d6bc0"],["/archives/2021/index.html","b816acc5618a42bfa08b72e936f99e96"],["/archives/2021/page/2/index.html","1df81b473851cb0a012d6c2f8c2c8a50"],["/archives/2021/page/3/index.html","c1d62f64c9db18d47fe3977a226dff4e"],["/archives/2021/page/4/index.html","6837050ede78986e8cfa5c9899b8e0aa"],["/archives/2021/page/5/index.html","179cb6cf2107450d2aae2d64f89a18fa"],["/archives/2021/page/6/index.html","950011d08dc88d40a376a71bda61ba3b"],["/archives/2021/page/7/index.html","8a44c58432db9f0bd47be87060210cfe"],["/archives/2022/01/index.html","e224e388313131eac647946671e29938"],["/archives/2022/04/index.html","8d0876d6b3cb98d74dd8e01185c50755"],["/archives/2022/08/index.html","198dba0ac51b8d9dd0a61d4786411650"],["/archives/2022/09/index.html","8309fcf643f150cc4ea4eda48b827386"],["/archives/2022/09/page/2/index.html","aaa13b7526f33bb4a8547d6d60566fd5"],["/archives/2022/10/index.html","7e2e7634f36972c1812b8ce102640971"],["/archives/2022/11/index.html","50898bacdd77247fa3c67c95ab313229"],["/archives/2022/12/index.html","89fbc969c3399351250ddce6a64eaf7a"],["/archives/2022/index.html","4cfa5e1b25da3390f7e1d18b52f5dd16"],["/archives/2022/page/2/index.html","5a0f24408cd323f376951bad6a024055"],["/archives/2022/page/3/index.html","84e4a056dfb0ca7dac75e537d78e0980"],["/archives/2022/page/4/index.html","73c094ea0191e38fcdc15270d1bcdf20"],["/archives/2022/page/5/index.html","b5400d692d64bdd149fde2912cf39709"],["/archives/2023/01/index.html","1d34b3ce02aaff34d477add82148002b"],["/archives/2023/02/index.html","188d8df9ebc309422b4c6c77fc84fe00"],["/archives/2023/03/index.html","600c75d9b615938b1d7d18dcc2898915"],["/archives/2023/04/index.html","e9552b31f3d5cc836d4f3ecc8eb8aea6"],["/archives/2023/04/page/2/index.html","96e1ac94885ab317eeb59649dc0312ce"],["/archives/2023/05/index.html","baf1ac32f01b3ba1ebfc8782127b6ca9"],["/archives/2023/06/index.html","92d49271507447324775bcb0e14e626b"],["/archives/2023/06/page/2/index.html","ea37eac8e815d966cb9bd7fb5322ee8c"],["/archives/2023/07/index.html","191301aafa779a225069151b4e531b73"],["/archives/2023/07/page/2/index.html","f36abd6a6a2146bf46c1fc2c084e66f0"],["/archives/2023/08/index.html","33d46925f46e1b1060b78416753b7e78"],["/archives/2023/08/page/2/index.html","967c33b19006ab4c88f4d66359104427"],["/archives/2023/09/index.html","ee938dd6a65005b7e1ed0554f1de339e"],["/archives/2023/index.html","1d021dbd233b5af3888e77c91dea03af"],["/archives/2023/page/2/index.html","6f7edea0c73d07682378132395b47b02"],["/archives/2023/page/3/index.html","0088edc8ff63398a6b5c3742a1eb0e46"],["/archives/2023/page/4/index.html","8c4b88429515be3c868728e97487b07c"],["/archives/2023/page/5/index.html","26ae3c8af7879c3afa4a61c9919617ca"],["/archives/2023/page/6/index.html","58f65cebdb63038b34a6a73ff65ada35"],["/archives/2023/page/7/index.html","743539caced5b2871e33e7f436f78c64"],["/archives/2023/page/8/index.html","79ddb098c87ae37e10a19a3bfc8abf69"],["/archives/2023/page/9/index.html","49b87cdae3aa25b85cf76f152d03cec8"],["/archives/index.html","9c33c5b27974f831064662f89f46d131"],["/archives/page/10/index.html","2337000282d01dd5503096b11987a0f5"],["/archives/page/11/index.html","d9e814c2c206010aae594bb88449bd4f"],["/archives/page/12/index.html","ee9528dc784bcc3a5f9be0739ffaa7e9"],["/archives/page/13/index.html","430ca7fec930e214dba9879ff6350366"],["/archives/page/14/index.html","867b53e059881a3811585f0b5effc99f"],["/archives/page/15/index.html","9de42b7b68a6b95ff652351f763b8122"],["/archives/page/16/index.html","c32bcca9aa1db8bdb868f761794925ea"],["/archives/page/17/index.html","0d2ec9eb2649b683552086f64c7c9274"],["/archives/page/18/index.html","bbb1a0204e7f6c5370743092840c0cac"],["/archives/page/19/index.html","f6771083637c256776ee3ad095ef0e6f"],["/archives/page/2/index.html","e6703e8ea50fcc1a9c8f0da6f1923834"],["/archives/page/3/index.html","f615b0fa88ccc8211f32c415f867c5e9"],["/archives/page/4/index.html","3a1b1caaae11003d42433b2d2a6f65d5"],["/archives/page/5/index.html","e1e4fbe390fcba30d4414ec994ea8fd0"],["/archives/page/6/index.html","3881a82f2b411e4125cebfc0d9fd5b2b"],["/archives/page/7/index.html","193d9b3f73d639b1f468a607b06c164b"],["/archives/page/8/index.html","820e249d1c67c3dd34a46fd1c55cd1db"],["/archives/page/9/index.html","678df4cb9b1b7c31918415744c0f7045"],["/categories/Devops/CICD/index.html","272d06de4e4184a199f6cbbae0aa08e0"],["/categories/Devops/Linux/index.html","60b3a393905f7dc0bae9aa9c477198f9"],["/categories/Devops/index.html","f4462170bc34da0b012e6f3af3b6c8bf"],["/categories/Java/JVM/index.html","9a483fae765859be58f81f0509ef05f4"],["/categories/Java/Java基础/index.html","a5389b7ca6fa74b1ea641da4e60eb275"],["/categories/Java/NIO/Netty/index.html","e095e24227c16184a0221673512a5e22"],["/categories/Java/NIO/index.html","28fe8ae365cead540b3307d80e5b637c"],["/categories/Java/NIO/原生NIO/index.html","0f14a9ed22a73e70956a9dd4ad2b5a7e"],["/categories/Java/NIO/文件操作工具类/index.html","d711a4b321fd042b6a9e24274b3e6aeb"],["/categories/Java/index.html","e09cc3cf8fd96642790b02d872c2eafd"],["/categories/Java/page/2/index.html","17d253e6c991e9b7baf026c802d88f22"],["/categories/Spring全家桶/Spring-Security/index.html","4c8e53dbc8a15ae85f27657574a21452"],["/categories/Spring全家桶/Spring/index.html","92b6a1193694de05a35faf29f9b5b01c"],["/categories/Spring全家桶/SpringBoot/index.html","7d6ea851f96adcee23c1eed250dd4721"],["/categories/Spring全家桶/SpringCloud/index.html","79368ba0bae3e8d67c00adf0d364ed94"],["/categories/Spring全家桶/SpringMVC/index.html","e523cd95e644904088c917637779d6f1"],["/categories/Spring全家桶/index.html","0756a6640ab2111518f55ddd711062fb"],["/categories/Spring全家桶/page/2/index.html","1f831364b29bb2c97c7de73188641e86"],["/categories/index.html","d79e6ed356d50c8e3721bab47a262b9b"],["/categories/中间件/ElasticSearch/index.html","8936a0f71aa64f8acc80d03149b8acb6"],["/categories/中间件/Redis/index.html","9ffcbd7ac269e71ceace68f6f6f6e72f"],["/categories/中间件/Redis/page/2/index.html","3ab062400c0e2fcb578798e070e4f045"],["/categories/中间件/Redis/page/3/index.html","733ada1af3d5289572d79f290f015f69"],["/categories/中间件/index.html","d6ef2b0ba477fc8759e6e9710a831f4f"],["/categories/中间件/page/2/index.html","5d46ac9718867f2200443e71d25ad8b5"],["/categories/中间件/page/3/index.html","ae90039fc281214dced95f956146deac"],["/categories/中间件/page/4/index.html","bb083853d042f25eef1de91f7e75601a"],["/categories/中间件/消息队列/RabbitMQ/index.html","6b6e7fdc7b8e8deeb4483a25b0d6ec5d"],["/categories/中间件/消息队列/index.html","77b4d46bcd461a209725213393684bf9"],["/categories/前端/Mock/index.html","0c7c55292d78c2ec36ecb8dcf278167c"],["/categories/前端/Promise/index.html","e9b085c286deadd189e0de2d44f54c4d"],["/categories/前端/Vue/index.html","e131507ca08c4fa8549b4ce55f47ee04"],["/categories/前端/index.html","392873b464181499aaa0df40cf5ef45b"],["/categories/前端/jQuery/index.html","b5038364ce55f0303b3631f32a84cffe"],["/categories/前端/page/2/index.html","79b3dc113f26f32982b9572c2a3b56a7"],["/categories/前端/原生基础/index.html","2d581d9dfb2871b3b9f73f67664c9247"],["/categories/前端/异步通信/index.html","1141b5ae2de04035e9d1e6ba22d085c6"],["/categories/工具使用/Git/index.html","cbff75263bf67afe576f97e30a98e49e"],["/categories/工具使用/index.html","0488ac912b4a3bd1cb13b910c8a4f31d"],["/categories/工具使用/markdown/index.html","b9ab69f5c68c084a7e8604837ee7b48c"],["/categories/工具的使用/Docker/index.html","064d5eb8c4882054965d61184cfa5def"],["/categories/工具的使用/Nginx/index.html","0518f0690a8652d7417f230ba7f87ec2"],["/categories/工具的使用/Swagger/index.html","d650802fa789c494d375727d3a4d8306"],["/categories/工具的使用/index.html","91d2a6ff624fd8e2e2f2c3e66f0b50f1"],["/categories/工具的使用/博客搭建/index.html","c0d0cfbf41b322159f2451b08c16bed8"],["/categories/数据库/MongoDB/index.html","101410cf9816394762e42af908ff68d7"],["/categories/数据库/MySQL/index.html","aed7beac838c9838a0be3ccc9bd01622"],["/categories/数据库/MySQL/page/2/index.html","c59da84bef8a8688c6d1d110de56fd65"],["/categories/数据库/MySQL/page/3/index.html","6699e825da9f96a5647fa9979c73a97c"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","68081d360eef9330fbd9b2130a0db4e5"],["/categories/数据库/ORM持久层框架/index.html","3ac436c8a6d5902f08b0bab997f1efb6"],["/categories/数据库/index.html","04176ce64a5290f64eabceceb092d63d"],["/categories/数据库/page/2/index.html","d6d90fdce7fe96b3fcba391ef7cdb508"],["/categories/数据库/page/3/index.html","e1fcf60f572ee64cf67e6b5473645029"],["/categories/系统设计/DDD领域模型/index.html","24663f9524da761c8c66549f252bd5e5"],["/categories/系统设计/index.html","096c4e74e03bd51c4917c5788e3f213f"],["/categories/系统设计/page/2/index.html","11741e4358fda7e902b1a30a217e53bc"],["/categories/系统设计/分布式权限认证/index.html","829fc77a1493b08fb6227c2d6b82c494"],["/categories/系统设计/设计模式/index.html","70e2060107df6fedd7c3ee57c67ee6ac"],["/categories/系统设计/设计模式/page/2/index.html","728e943542a8425b79bcbb05bef77c00"],["/categories/计算机基础/index.html","5e8837c9a1c0c709600aef4bf7ca278c"],["/categories/计算机基础/page/2/index.html","d351e167e825cea89cb230a142b36278"],["/categories/计算机基础/page/3/index.html","92c5fb9313c1e4e475cd396ffbe18122"],["/categories/计算机基础/page/4/index.html","d64c6cb90e7a263779f378ba9aab9b34"],["/categories/计算机基础/page/5/index.html","34c325416b95d90c8daf51872cde2ae4"],["/categories/计算机基础/page/6/index.html","ca638a3d53aa39fb9bb62e90e8d090a0"],["/categories/计算机基础/操作系统/index.html","e5e35ec65edf1c4cfe9c625a7639c9bb"],["/categories/计算机基础/数据结构与算法/index.html","d196fae7a1a4958ca23e2725a30c67db"],["/categories/计算机基础/数据结构与算法/page/2/index.html","1fbd23945c4294de96c5712206c226fe"],["/categories/计算机基础/数据结构与算法/page/3/index.html","c2851eabec9c8d20b87833d3a14f5bf1"],["/categories/计算机基础/数据结构与算法/page/4/index.html","f01893c115a36bba09bca0147146ee22"],["/categories/计算机基础/数据结构与算法/page/5/index.html","cb86c8bcff8e481851d920e46fc889d2"],["/categories/计算机基础/计算机网络/index.html","46b906d941641de347c5bd121d23160e"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","ad1703cf542768ce64e0ffd4b0f4cc0a"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","48ee17b01bb273261a4bb477c353ade0"],["/messageboard/index.html","b30b3fc5a1c3f14c940ec0f74a8b0bea"],["/page/10/index.html","f9218914a52d7fb1273abc3e6652b57b"],["/page/11/index.html","dc34d4671e6057fa4fa44ea2a0519dfc"],["/page/12/index.html","874960f302b96bcd3be299c4d793fe4a"],["/page/13/index.html","6f96d7952c55323830a4a8ccad92e5dd"],["/page/14/index.html","5dbeee5259714f94d763c5970b6859f9"],["/page/15/index.html","d59661197d17aebcc80302ff3a441d86"],["/page/16/index.html","1a6e5e1d3fad4511b30f396b09611512"],["/page/17/index.html","120191471377c79990545b440f217b48"],["/page/18/index.html","1b3f732c4142e660694bde5b43d003fe"],["/page/19/index.html","2ef8f5299ecfe3b2350f685838c3fb4b"],["/page/2/index.html","0815845a9e48a7eefebfa4a9fa96bb92"],["/page/3/index.html","b24af77d55d726514e9d38b5d5b0aac5"],["/page/4/index.html","1873786e37c7befd0f6ae798a57d6526"],["/page/5/index.html","60e03ee9c65634ff7f989abd1bbf9262"],["/page/6/index.html","33cff9eaf1af6ec1a5607c6a2d35d63c"],["/page/7/index.html","bf9932af1412a851f7e375cd498ae2fb"],["/page/8/index.html","cbdc74bc608113de61d1b7000a351a33"],["/page/9/index.html","cfb2ecd1ecddbffb549e9144983de777"],["/sw-register.js","b44b837d84484b5f98cfbc04377fa305"],["/tags/Ajax/index.html","ae440e8c295cd8d62e3b9d9f1e835367"],["/tags/Axios/index.html","a19fd935226933a58217666ccfb7b61c"],["/tags/CICD/index.html","b76ec5b9c9966b7859556b1e505b3827"],["/tags/DDD领域模型/index.html","456391c8b29ea7ea3116535208a28e80"],["/tags/Docker/index.html","e0e37ca374e91627f4eccfe89c5a0e0e"],["/tags/ELK/index.html","5874a41348b827d417e78ac453fbed50"],["/tags/ElasticSearch/index.html","affcd4a4aec7778013d1a197cd55fb56"],["/tags/Git/index.html","62758647f4158c3904ba5a2c445b3111"],["/tags/H5/index.html","4df75c1569df71bfa5939f6c235da270"],["/tags/JVM/index.html","55aa41ab74943e17800e1c5f05cdbf02"],["/tags/JVM内存模型/index.html","d69beaaf69c67edd0cc124fecb0469ec"],["/tags/JVM执行引擎/index.html","7d97395420d14af5956a359e6bde3428"],["/tags/JavaScript/index.html","c90e4da2b7fb43793c9f61251bd159cb"],["/tags/Kibana/index.html","4c52779bda645ed5adde537f98bb0fd8"],["/tags/LeetCode/index.html","8f23127b6be4abb2d86421f741904559"],["/tags/LeetCode/page/2/index.html","717e7b34ad9e82ed808ebf2ba4620366"],["/tags/LeetCode/page/3/index.html","4662070a768ee00d0a8246515ca1992b"],["/tags/Linux/index.html","d625c207a858d53ccd7530b57fdcc550"],["/tags/Logstash/index.html","4b9d9acacf9d2d0786f5d1e147f780bc"],["/tags/Mock/index.html","94e722684a5aa7beb4e9a74b4dbb15b6"],["/tags/MongoDB/index.html","91801d3087c71374fcbfd9b69f7a682e"],["/tags/MySQL-事务/index.html","dca8f56ea0c9bf20798851e4164871f3"],["/tags/MySQL-数据类型/index.html","67c1aa6f800df8f5a3e9a41b65efc706"],["/tags/MySQL-日志/index.html","bcd367b68159a3d37d10819f791486ad"],["/tags/MySQL-索引/index.html","b803de0198103004a0bec7c076287f96"],["/tags/MySQL-锁/index.html","7017db151367de97d401e77f5221f481"],["/tags/MySQL/index.html","3100b940ebff9fce8d46242e8c3654f1"],["/tags/MySQL/page/2/index.html","87810c21240c225afb7846135439b1f4"],["/tags/Mybatis/index.html","ca6464cdb00a8caae9b42bc8e54bef29"],["/tags/MybatisPlus/index.html","41aad5fc0b487d57e2228c530c8bca88"],["/tags/NIO/index.html","3ddea89dd3707ee27a374ca8f6345032"],["/tags/Netty/index.html","8e231819aa5ac02ea87d5ad0fc98456a"],["/tags/Nginx/index.html","4e36bc524d83b48a7740d5ea67251b71"],["/tags/Promise/index.html","cacab5cb98680f83b97a0bf78c2b5abb"],["/tags/RabbitMQ/index.html","150af2c265aeae012beba093a7005975"],["/tags/Redis/index.html","55080caf72b484e2a9f602ed0b47ebce"],["/tags/Redis/page/2/index.html","b59c3484d3a2443b7dcafd4a4290ab3b"],["/tags/Redis/page/3/index.html","7ba80c5775d568f28d7aac8d66c30106"],["/tags/SSM/index.html","ca1df5016d98ff7e5ce2350e86966fec"],["/tags/Spring-Security/index.html","fdf4067ba0996b5edab5cef6a5326b07"],["/tags/Spring/index.html","7059226b83bc4ea352e89feae73649f4"],["/tags/SpringBoot/index.html","c599e6885d5d4274d0675ad0141eef68"],["/tags/SpringCloud/index.html","f1b60f562d8567734280b7825f154e6f"],["/tags/SpringMVC/index.html","54d88148737b7443bd72d7bbb5dfb533"],["/tags/Swagger/index.html","34529cf37a9f02c9cf12f8b6ac9697ab"],["/tags/hexo/index.html","3668ec46f5caadfe563911c139863f44"],["/tags/index.html","275d57b8cdb631e3baf88e55f451a363"],["/tags/jQuery/index.html","1a91702a361e6b8d48f67ce9ddf6a407"],["/tags/java/index.html","45398e8adb7ac2c7f5d9f9d1b78ea474"],["/tags/markdown/index.html","62b0c9a59c26f4e7c96849291576a182"],["/tags/noSQL/index.html","959858f700c36a8e1b175635f25c06d0"],["/tags/typora/index.html","f7b600054a1d088140598a61e0688417"],["/tags/vue/index.html","85ef09fa4d64c52e7c947923c5c54a15"],["/tags/享元模式/index.html","16809fea53af335e3bb80649bdf4e740"],["/tags/代理模式/index.html","d57473416d7769101f0876377619c889"],["/tags/内存管理/index.html","3ad6f0770f445d84b6ef3393bfc54a2c"],["/tags/分布式/index.html","4dfef7e3467671ade936aa21371df0d0"],["/tags/分布式系统/index.html","7310a2beaa19b6b952848e1bb0abc2e7"],["/tags/前端/index.html","b1676baae2789036fcf7cd1996f2f99b"],["/tags/前端/page/2/index.html","711d7b485475629fab2d41ebc4f4b380"],["/tags/博客/index.html","9b9637e0cceee827258da3ba8f6711a2"],["/tags/后端/index.html","56d50fec0842f33f0209a03bf34d6045"],["/tags/外观模式/index.html","42ce1520031d89755a2812d81bf20597"],["/tags/容器技术/index.html","7f1944ccb4ee827f5247ca33e99819db"],["/tags/工厂方法/index.html","44df3d93449de795b107c9b63ad288de"],["/tags/微服务/index.html","a78fa0079ae21ee15857096c28358c5c"],["/tags/抽象工厂/index.html","382bebee4081ae5fda03555c462a69b9"],["/tags/持续集成持续部署/index.html","34582bee668c83c9ec29f201420453a0"],["/tags/搜索引擎/index.html","ba82bcb98ccb5c7a6e5847bfaf7b837a"],["/tags/操作系统/index.html","46264db253dffbaafbe7e6b476afef2e"],["/tags/数据库/index.html","96be912f299613ce86d227135857072e"],["/tags/数据库/page/2/index.html","c75080b9d78e4e1104259726c1b6d70b"],["/tags/数据库/page/3/index.html","18448af7d47046180311ce2c834ff342"],["/tags/数据结构与算法/index.html","04d3d759cdcf09b380f81b929638f6f4"],["/tags/数据结构与算法/page/2/index.html","0898e0979d7b8ea6cf2b085e6f9c602a"],["/tags/文件操作/index.html","b2f69d2d000ea13f50f1d392a9385917"],["/tags/日志/index.html","106cc147a19b02e54872dd676f03e415"],["/tags/服务器/index.html","6214738cc4fdefdf8a10d39892ef894a"],["/tags/权限认证/index.html","51f80587c4fc81ca3efb05f9e8839344"],["/tags/桥接模式/index.html","c39a904de20e1d83cc10006a8cdc1eb0"],["/tags/模板方法模式/index.html","4056df0bc79f4b4966dbe66d5a7dbf13"],["/tags/死锁/index.html","e78e35289fa4a1d8aca41aacedede701"],["/tags/消息队列/index.html","48ebc897022cc367cd5b827201494e50"],["/tags/版本控制/index.html","4414b07722a37574c4250d44d4c75687"],["/tags/策略模式/index.html","a32b3d95aba85a05036c38f191988369"],["/tags/简单工厂/index.html","3f4933e901d1235b52553df76d5e8450"],["/tags/算法/index.html","633f958b26b4f7165a56514507669fc2"],["/tags/组件化/index.html","12b7afc04626ad2a9b064cc2d782b2bb"],["/tags/缓存/index.html","0816955e9e09c742fbf9602b9e9d0875"],["/tags/缓存/page/2/index.html","32ea6473022914372f948e1a0455b87f"],["/tags/缓存/page/3/index.html","107dc0ce29328be9dfc91f94a9d45d24"],["/tags/观察者模式/index.html","ed63b6ca18fb677f7a043d6210d21646"],["/tags/计算机网络/index.html","aa8380470e1531a0ea2195e75a714980"],["/tags/设计模式/index.html","2d69be82ec168bdde1ae1654de4559c6"],["/tags/设计模式/page/2/index.html","034716d980d84f884520fabb9ab6f1f5"],["/tags/进程管理/index.html","562ce1b2a5cae6a8da1889aa2bd89552"],["/tags/适配器模式/index.html","73079cfd97fad3a4a42dfcc4afef46ca"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
