/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","9e4e055afed313c166fa10af944b234a"],["/2021/02/22/工具的使用/博客的搭建/index.html","f04e1ff97276e9b6c7464fa458cb6e93"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","edfce4177e813c98009e7e5c9246791f"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","70e43467096344f9730f058330b3f3c1"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","b6c53d6ac9d2abfd11783636701264ac"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","6dcfb44f8571ac762e199ca3119e2642"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","ad20c6cb69f4876c0d4c840f2ec1f3a1"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","9f4cc6f91ba0101d714843c951372fcc"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","2ddfa2d99b8335c9ff76bc29898cb7ba"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","8e13364cdb5b8b0c0aefc8052a0960bc"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","bffd1af9713edd4bc9d238450a3af438"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","9eeb97a57ae4db62ac673d29346a4048"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","955f96e4e9328c064efaf867da511778"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","e41d45ba121ed29de0968c4806de6061"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","96820f505d5f702c81c50998eb12da01"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","a9634a96576102334425a6dfdafc6c9d"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","f89c0a94c5f0b8a66424578f210b69cb"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","b071c18f5a3c41b6ef319f3934db9e6c"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","947bbe16e8daf14c20dc8df090cb1a56"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","6abc9d24f1270f590a7110d61420acc4"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","4412e5b8e9d3e6a0f7bba7a721972315"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","627f9a98df64b259e517cdfd10371472"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","d17f252aa07214df8b708a72e8f61daf"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","c737af4dc247ee9926f1bef319d19d87"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","6e93c99b79a603b301f9cbe242a1532d"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","cab90b6bfeaf2fcf9946bebc224703be"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","4b16e5fd1a524b6676ff55a3ad9451ee"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","9c91a17b57640b0744a3f7ada2f4d442"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","51b0b83415b234c1fee61573874c9085"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","eae85aabf86309860361f9294f88bc31"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","22089f1372b51a8e043ab7fa36d1bfc2"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","cfb5e90cf45e7b407693728826109a81"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","a5b9c5343bc83cd1a1672b19ee71cf63"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","a669c0c050e6e348c164c32e64c78db4"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","7aeb81c1a6d4e3b6ed507ccac1c55fd7"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","e50d657201e0b594ce9d36d5eab3a09a"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","1933fb6dbcb106e9a884503afb53d074"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","e1ab0eca80ee50eace3bd14f0bbc38a4"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","804499d140c37853253f1bd7030aae97"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","d7ca91555939d6cd0f30fc78e02473c2"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","73cecb188cd4822b8618ff05380735c3"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","7dae241e4d8874591026c075ba3029e5"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","5a2f3a652da9266614df58dde1dbac0b"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","d00efc206160305438e26c1d9f1e1086"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","d68ebb5dea016ce159dd90387d6a70e2"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","df29bb123570ebef0025ee8b50157a1c"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","19456439dcf19c9f868babd3efb2daad"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","a236c43b5d98223d308d3f9058f71a16"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","77fa702deeee0d6e9a80d3f9b19bbd61"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","f10399aed6e4e3623ccc49d70f08148c"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","11534e61cd801685b62ad3292f7a352e"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","c16bf98b82751722bd167963c0440f79"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","adba0dc86277ac06f3cd5758ea07175a"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","88f5e4cac9da08160cecece2964e38cb"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","62254aaa7bd7fe749dea170539cd1866"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","d688b23b3aa40964b12bf601e8628940"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","4800b9eb949de33f33ce7c098c8cc54a"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","89c0ec7aee1a18bf2de3b65a06739336"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","65cf25d58457ee6bf6668d77ea3eefe8"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","dd630bfdc659ae72460f26a258594b1d"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","93ccf7ee8e871e9072e2af3edb89dccf"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","7e6073f52fe79bab1ee67cf9ffe85785"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","97c4c2cefd9bd54f0f636039b0ad7389"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","7fe06a795c9e3051182af0f1f36b3854"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","96a59597d63db7bf34c9d544d2d6740b"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","d4f41e6c65c8a19fc9cb9840e9434935"],["/2022/08/17/前端/jQuery/index.html","f4cab417328a94fafd2766b5e941d5f2"],["/2022/08/19/前端/JavaScript/index.html","37169f6c01dbca339f3bff46dbe68920"],["/2022/08/22/前端/Ajax/index.html","68d341743d78e3114180e267b4ed03f7"],["/2022/08/23/前端/Promise/index.html","cccadbb7dcf9ea736463654f52b2e688"],["/2022/08/24/前端/Axios/index.html","c6eb32b8a92af9fc3446cce053fe6a14"],["/2022/08/25/前端/H5本地存储/index.html","5f1c98b527d94b3311e4e0e632d2b287"],["/2022/08/26/前端/mock/index.html","295e878375964fcfc181c5007e68cd87"],["/2022/08/31/前端/vue/VueJs/index.html","9314726d78ba6d9bba1f0dd369b802f2"],["/2022/09/01/前端/vue/vue组件化/index.html","22cd52a87c619ba71f2fc695b529da20"],["/2022/09/04/前端/vue/VueCLI/index.html","8b75925384e3816121d8b8848039e4ad"],["/2022/09/07/前端/vue/vue实现动画/index.html","9c2f3147ac7e1440ed096f92e7861648"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","2ac5cc1b82d37af2fdf88406cb3f308c"],["/2022/09/10/前端/vue/Vue异步请求/index.html","9421c5fe5e7fa916708a6883bda1b303"],["/2022/09/11/前端/vue/vue-Router/index.html","140f0200508fc06d122ddcea5c936f67"],["/2022/09/13/前端/vue/Vuex/index.html","1683aa86a9625d3e79b14da526f3308e"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","4660fb25b8938a20061bfe0c13e8afc7"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","02ce0a947ffae9d2de4d2632c4ad5768"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","d17a8113e070c727e0541bdda84b2500"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","b37275af134b42a65e6d3c4c803f0e44"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","cc0ef794fb71a19b7ad2901afef7c7a2"],["/2022/09/28/DevOps/Linux/Linux/index.html","835c7da92f1e43f727ce5f49a22e398a"],["/2022/10/02/中间件/Redis/redis基础/index.html","12620764a8a1a6dc51c04ba62568415e"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","417b24351c3ac1e3fee0a5738c6491a0"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","faf83376df2c39f515d2397ef2017239"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","4e0084da4ea33cad951f5becc123b6e7"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","a1e7a5ea95a14b20c5f9637cabdfc071"],["/2022/10/17/中间件/Redis/Redis集群/index.html","47e511c4fe840383d13fb93edee2f992"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","b497bd9b1e0c84543884c675e11c2ee1"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","25ce06cfc2728c4a7a17a81a6c4e6f0f"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","f929a82b76377e84d7bfa9a9ed0519c8"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","6edd064bee9b4e460fae265101ac85df"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","bbd3e7bdb7584b79277d13493088e82b"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","21df5c7562ba50ae8b15583bbdffe24f"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","8c8eb07620c58aea0bf5d36e5ba0592a"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","aae9fdcbdd5499501997393834684d8b"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","940153fb90be0bcc1f41a48d46bfe690"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","cbe2478de2809fb5a67412bd838feb05"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","ade570ffac3c9e7da3b2656fd607bc25"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","8e33a48466ea61d02881248c86f3b81c"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","85b11f10e3c120542ba8d4e10cfadef7"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","364c79889aa4eb6e29b49a026bafd93c"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","ca06a7eac8403fc444e29a33cbc12c87"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","d1b0e81f3df9f6b7232fe1099d7e0cc8"],["/2023/03/10/DevOps/CICD/CICD/index.html","269b332c1b50ab16dc8dff0e1732d5ac"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","2a917e1efffa602decbaaf882b27d4f0"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","960258966348b5d03b0936a10d2952e5"],["/2023/03/13/Java/NIO/NIO/index.html","38204ab688a9299bcbe0ba7b3fbae87a"],["/2023/03/14/Java/NIO/Netty/index.html","83abf27f77271fbe8dd398fd48cd515b"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","4ae0fcbfd9d010f5a5baec9d8b55018f"],["/2023/03/17/系统设计/分布式系统认证/index.html","53b4d5f948dfa647a84463d951e54037"],["/2023/03/19/Java/JVM/JVM概述/index.html","d2489f71df339f9e26983cf0a034a316"],["/2023/03/23/Java/JVM/类的加载过程/index.html","68f3ff26557d07fcea830f3a0629c3ba"],["/2023/03/28/Java/JVM/对象的实例化/index.html","ecfbb9893a89ff15883c1c59cbf8f730"],["/2023/04/01/Java/JVM/运行时数据区/index.html","d54c4c50e626b80f2cd85d1993b1291d"],["/2023/04/04/Java/JVM/执行引擎/index.html","0d66be9a17a7649620a2591c0100d0b3"],["/2023/04/06/Java/JVM/对象引用/index.html","3d9888e5ba1484e937656e70e80d4d3d"],["/2023/04/09/Java/JVM/垃圾回收/index.html","3407983cff5816ca94e57b956e79980a"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","57765ee3f5b2dc0b46ff349c0ae685d7"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","7755844eadd7cd8b60c2ef0375fe7d0c"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","eb6a09ca828e0ac56523b902ada35ce1"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","b93d6024478d120bc92b131af9a5195e"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","d821adabe4ad4395ce3b7058751ad8ac"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","cb410580183ada3f0520399c2dc81d7e"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","2e7e45dd143e25ffdb651677cbd9c8e9"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","e145ebe65a1dfe985dae6336ed87f852"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","f9bbb0fd450fa88c42353a595614ede1"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","819d4d2043037072c858fa85ac902582"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","e72a66f407588b797abe77a06fc77ea0"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","eb9f228f5114d4a98366b9407c657836"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","a6059e97f3ecceeb640ab221af72b7e2"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","2161500c8f85afcbb89c35384103de44"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","fb32fd86488e1d018a5847d30395e1a0"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","128a2bc16221a8870c2465a84d6435e6"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","9ae7a8875647068749139e559e1feb72"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","b5489676aad1bea373da6bbd6e8ff688"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","fc3f76002908a6bd3dc36d4efe113724"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","ff9dbcc4e19e9b700ef84e7ac54379be"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","b13c843f48b7f1a84cf3884ca5d284a6"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","d8fc161352ee8258491a8cc9767e0507"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","915b8fe758a01ef36cfb2e9ab8962e15"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","b7f755c25eb225fef8205eacec989f3f"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","522d65fc00047d6885b43e7874e34345"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","b1433e663246f4db016cf8f45e7c49c3"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","ac10a4f7c01eb46b248b521eefb2eaae"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","d188e9f1c8653697f02c7847669af0c4"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","9c748a20915984212557ba4e48144885"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","d51efef597ffaf18648232cfb5cc457b"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","64a0b1600dffdf409de8bd3a2d058f4b"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","fac26b4beb92ce1a55b89e05f240ce75"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","85535f80613c57a03cec52a0a014e993"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","3a21be1ae4e45d817c1474cc1dde054a"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","1f63b941ed46f1541091d52fb527eb7d"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","bf9810484e810b69cb2f94d804aa4ea9"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","375a0edb24023c77ff6d0b914669abd4"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","0b06bae1fc60d3e2f18fe612eed088bb"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","6e8906389b0e2c07251b4f54e704041b"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","f280bce9a0cc59f98e985f257a93de35"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","1a2d6fd4a525cb736677c6a41ee8fb2a"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","d8bb2c672f8205cf93063c316e074c3a"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","b647bd14d993d5f63367fa7b2b021344"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","3f45fd54a255975bf2d65e87f723024e"],["/404.html","65ef57b21f90f04ad9be66c514fd1a40"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","c7266a1874c74996918506c3b62f54fe"],["/archives/2021/02/index.html","665eb62cc76cdf3bf68e0d055bd554b5"],["/archives/2021/03/index.html","7357f4aaffb74d9ac619f308183a3354"],["/archives/2021/03/page/2/index.html","76d10a1a5e18fcdd530f671a1ee79bf2"],["/archives/2021/03/page/3/index.html","f8cba9fe11414a1f934b67b832c9d530"],["/archives/2021/04/index.html","3a93ef752b9d576e25e25158f92b1055"],["/archives/2021/04/page/2/index.html","5eed54ad650620abd7a82bc815e5dbe0"],["/archives/2021/05/index.html","2468c7e291cd66645799c2008e492698"],["/archives/2021/index.html","3381482884d86e5878a6e50bf19fb0e5"],["/archives/2021/page/2/index.html","241da0ad38ce56fae32d4303c9231b55"],["/archives/2021/page/3/index.html","e84fe36f225afdd43584faa4a2f527b8"],["/archives/2021/page/4/index.html","61269071beb0cb830e3196576da16d09"],["/archives/2021/page/5/index.html","a343034dda73cecec253e0a97a3e48c2"],["/archives/2021/page/6/index.html","93e42a6a4ad9d167edfbd8707338d5da"],["/archives/2021/page/7/index.html","3eeb52f048bc3cfbbd41b50c7f999bcc"],["/archives/2022/01/index.html","f102b25b26214776845fdc755da937b4"],["/archives/2022/04/index.html","a1fc8a19913fd3a773ccbfeae6f4b61b"],["/archives/2022/08/index.html","296b009da2856234712b71bc887373f1"],["/archives/2022/09/index.html","2ccbbacd78fd61176387f0e473f9ce41"],["/archives/2022/09/page/2/index.html","4c5988ef4d97ecd7d10f9215e72ae6c8"],["/archives/2022/10/index.html","be22efc63115d81faf12b26d9cc5c58e"],["/archives/2022/11/index.html","87b77f54cc571bf501726c66d1135761"],["/archives/2022/12/index.html","ecfff188451c8081bffa3d19bd0e093f"],["/archives/2022/index.html","44d16d2d853f749a4b6a4e3e22ce6186"],["/archives/2022/page/2/index.html","690c2b2cc0b56d1fc2b0c0244a9b73f9"],["/archives/2022/page/3/index.html","ef7418b7f2a5e8784289b1abdb58069f"],["/archives/2022/page/4/index.html","a9139fd737bc6b40fab98c13e503e166"],["/archives/2022/page/5/index.html","b69f07c2ba4f718d7a7c45834b32cf8b"],["/archives/2023/01/index.html","7824b9134c8294ed2e450237d1996f3b"],["/archives/2023/02/index.html","c7a605bb8f6bdaa8deca170fee0993fa"],["/archives/2023/03/index.html","8bb3828872db1d3036d107ceb0a212b8"],["/archives/2023/04/index.html","e30c33d925edeb75635b521cde84d056"],["/archives/2023/04/page/2/index.html","fea8f5773ee03b0643a38c43903f5ce1"],["/archives/2023/05/index.html","9af9c0bb2645762fd57542301f3401e3"],["/archives/2023/06/index.html","2532c180ba157d5c508569fba99beb16"],["/archives/2023/06/page/2/index.html","6a25a0ce3a48ae2652759549d86d2b92"],["/archives/2023/07/index.html","e47dccd689c2b0cdd0181cf306d0b968"],["/archives/2023/07/page/2/index.html","956f04a358e0e6336816aa0bcfc121d0"],["/archives/2023/index.html","c24a23f731dd5932ffcb7756ee3e6c49"],["/archives/2023/page/2/index.html","470d78b01343570708759f43915baadb"],["/archives/2023/page/3/index.html","e218244e09d9e2c3aa7034a2a40ff487"],["/archives/2023/page/4/index.html","9a7ae2204db3bae6d1bc37b8b6c4b411"],["/archives/2023/page/5/index.html","2152df49b6fd12ce0c5722192bfb9073"],["/archives/2023/page/6/index.html","790e850a6ee55a2fc97559f74c2acb00"],["/archives/2023/page/7/index.html","30284b9a7abf858f1b8d719d4ae7f319"],["/archives/index.html","d306cda12745eea74f71ab1fd9fd4be0"],["/archives/page/10/index.html","03bce5c30ff741d3c6213865324889fc"],["/archives/page/11/index.html","91858f6fae42027d066c9e184cf63dd9"],["/archives/page/12/index.html","f6bd8bd039a080c82ec1ead70234ae5b"],["/archives/page/13/index.html","5c74edc43f8536a601d0460f81f3b4c4"],["/archives/page/14/index.html","8ff6261e9db3d4c66fb983ac937d1fda"],["/archives/page/15/index.html","ca92731bc2cf8dc4279ab01f27806924"],["/archives/page/16/index.html","79e84a39c8b1488babb58f2420575c71"],["/archives/page/17/index.html","74371eebadc323927d63d24e028805ba"],["/archives/page/2/index.html","5f9f0e227cd2fb6c6179da0ef949af9f"],["/archives/page/3/index.html","c227c9edd093d608f7e7c49cae866fe4"],["/archives/page/4/index.html","bbe6f3a5d6743b0bccc5449ea6c75acc"],["/archives/page/5/index.html","3be803b984088e5a3231c2040254a1e9"],["/archives/page/6/index.html","7238051eccbcb641b0461dcb111abf88"],["/archives/page/7/index.html","20e3eda4a456099f1a2d8d65c25ce1e2"],["/archives/page/8/index.html","1faefd96dba1f85814a2413a91d4c168"],["/archives/page/9/index.html","060bb2fb54feb95b2f87350c5cbc0f2a"],["/categories/Devops/CICD/index.html","08fbdfb592319c82a6b23f0f2eca277a"],["/categories/Devops/Linux/index.html","f91ea502b782257db6ffe91e649214b7"],["/categories/Devops/index.html","e7d83457301c292260e7ae694e158eb4"],["/categories/Java/JVM/index.html","2f68144a1244c622bec699f299e0a5e3"],["/categories/Java/NIO/Netty/index.html","5b128f2cadc12c9be7c855834573856e"],["/categories/Java/NIO/index.html","955d635784e87b10c86f9c54ac81a80c"],["/categories/Java/NIO/原生NIO/index.html","37592301e2587952f3e5ffba1ecb0150"],["/categories/Java/NIO/文件操作工具类/index.html","4e071c7f6d5307a22febe27c639d8968"],["/categories/Java/index.html","ae1fca786bb0dd6ef72e45c2f83deb3c"],["/categories/Java/page/2/index.html","793b66b9df1786d87278bcbdecafe94d"],["/categories/Java/学习路线/index.html","0ed22b78643fe37296cf403044552d95"],["/categories/Spring全家桶/Spring-Security/index.html","7eb5c52d2e04e8d6757f35e562ee5e78"],["/categories/Spring全家桶/Spring/index.html","525f402db98835ffd3d7fff029bc583a"],["/categories/Spring全家桶/SpringBoot/index.html","c62624673ecfd3aad3c72193c30fd4d5"],["/categories/Spring全家桶/SpringCloud/index.html","26921329976b4d2d2be4e6cdbb82162e"],["/categories/Spring全家桶/SpringMVC/index.html","64c0952764b3971e52d277308518eb4d"],["/categories/Spring全家桶/index.html","de324eacc8e3ac40e198da2f5e705fa2"],["/categories/Spring全家桶/page/2/index.html","3a35901860a89b668e84c872917be7bb"],["/categories/index.html","6976d4ee7ef5ec0844dade9c3bb04809"],["/categories/中间件/ElasticSearch/index.html","5316b808ac65adb167cffd23e2474daf"],["/categories/中间件/Redis/index.html","4051eb18480d335af8ff871b44ad84b1"],["/categories/中间件/index.html","05be558d5cf19ed0a709c2fd550c118f"],["/categories/中间件/page/2/index.html","472259341886ec41ba02c24abe7b5895"],["/categories/中间件/消息队列/RabbitMQ/index.html","044d887c6cb467ef232eefa8944ab10d"],["/categories/中间件/消息队列/index.html","44d8e50bbe3b75569196f9dbe605c606"],["/categories/前端/Mock/index.html","3563ec0ce09f173bebebdd9745f77b6c"],["/categories/前端/Promise/index.html","eb85aa10cf181c001ee43e2d20c679e4"],["/categories/前端/Vue/index.html","aff116c439648ebef75659dadb4b86c7"],["/categories/前端/index.html","624edf532ca643f72076086f7b4a7145"],["/categories/前端/jQuery/index.html","6a288aa1ad93253c9afb510271da8f88"],["/categories/前端/page/2/index.html","5b96cb7cf245d072758e94a713491c6d"],["/categories/前端/原生基础/index.html","475c4fedfdadd6c279bd2e747ef7f5f3"],["/categories/前端/异步通信/index.html","0c40518bd8520e6904c968ff141f5362"],["/categories/工具使用/Git/index.html","76de3a3458f011cac86498b0c784ba75"],["/categories/工具使用/index.html","86eb1b6221bd519f487d32e7493f95e4"],["/categories/工具使用/markdown/index.html","d8c9355085dec340497cb813c79ddeaa"],["/categories/工具的使用/Docker/index.html","3eeb5b87e4461b221b4e3d1b59e09bfd"],["/categories/工具的使用/Nginx/index.html","f57b904582cac899496bd701e42b7aae"],["/categories/工具的使用/Swagger/index.html","b2de74c531c7185c5d38e4edc0f0c4d3"],["/categories/工具的使用/index.html","26e8450a8b8bccaa8e9d55c0cf8bfb7b"],["/categories/工具的使用/博客搭建/index.html","d00c90275c99f7f054811fbf8d621805"],["/categories/数据库/MongoDB/index.html","b1a2ab9617a6c1bf24679b57698f5ebf"],["/categories/数据库/MySQL/index.html","695435191d8eb797560ed7b232744b96"],["/categories/数据库/MySQL/page/2/index.html","021b6acdf9de616e8216d976466b8caf"],["/categories/数据库/MySQL/page/3/index.html","d2f6c00bc80113c18b315d1f657805a3"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","9555480da319afc098d605da3a220085"],["/categories/数据库/ORM持久层框架/index.html","b394f5d54fd63b53c71d6784df88b619"],["/categories/数据库/index.html","eb74af4087c0da1fe82b478a34566f50"],["/categories/数据库/page/2/index.html","545d0c1885002a2b9dda0a1abc302f97"],["/categories/数据库/page/3/index.html","0badae639a49938c126feb20ceb5f284"],["/categories/系统设计/index.html","d282c5d0154dc9efa429a34fd4baf20b"],["/categories/系统设计/page/2/index.html","463060b34c00da7aee8434b7be373d0b"],["/categories/系统设计/分布式权限认证/index.html","5d562e41426ec5946f92e3bcb698eaa8"],["/categories/系统设计/设计模式/index.html","936d6500fc95b956d4354e80dcbc0137"],["/categories/系统设计/设计模式/page/2/index.html","e508eb70978bc093cbaddd29a47ce6d7"],["/categories/计算机基础/index.html","d76475033aa1eb716236e9cdfab57c0b"],["/categories/计算机基础/page/2/index.html","35598dafe324b281a7ccffa56934d66e"],["/categories/计算机基础/page/3/index.html","b8348a029f50be90b8ccc5fd90f918f3"],["/categories/计算机基础/page/4/index.html","9d9be982d9b01a737c0536052d5067c3"],["/categories/计算机基础/page/5/index.html","de136a2786a436c417f89285ba11feaf"],["/categories/计算机基础/page/6/index.html","7c56a484153f076945605c7059be9180"],["/categories/计算机基础/操作系统/index.html","90617e09ffd86fcfd0f15d560a23af72"],["/categories/计算机基础/数据结构与算法/index.html","456b4d24978e1a984710e2b8264456e5"],["/categories/计算机基础/数据结构与算法/page/2/index.html","a9565aff1ae6f3e1a54e04591dd71123"],["/categories/计算机基础/数据结构与算法/page/3/index.html","6546ec0f1b4bb5b2303496a843670811"],["/categories/计算机基础/数据结构与算法/page/4/index.html","1434f56e577e69fa7b8461ae76710976"],["/categories/计算机基础/数据结构与算法/page/5/index.html","80bea9b24f615a0ce3bad13ff3f5d27b"],["/categories/计算机基础/计算机网络/index.html","7d8ed7aaa3f6cdb045c443ca81e40c1d"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","b2318453fb1a22a87f1101ca551747bf"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","2965e77b9829a8f847c20468f2478dae"],["/messageboard/index.html","4eba5756bd46d7e59616de79231f94b2"],["/page/10/index.html","1d3f6478399947082d1ee9ea3a30346c"],["/page/11/index.html","f1d59bd5eac181edd22f59c8784a788a"],["/page/12/index.html","391dbc1367348ddd9a502cf93ad29d09"],["/page/13/index.html","2b035fa37cd3f51d67e56697c8813f16"],["/page/14/index.html","4aa59b9bc65235b67fc3185a0a1a1ac3"],["/page/15/index.html","e3d663ffd5c5193e9a8de82ae1f408ed"],["/page/16/index.html","39d8133e9c1932492f01bc56261ece5d"],["/page/17/index.html","0f915ac6cdfdb6b12e94724c6e22c5f6"],["/page/2/index.html","05f6a428533e550f6badb496a2a1df9b"],["/page/3/index.html","860c0f1dabefc798faae0bb1e9379a5a"],["/page/4/index.html","ce4c5badff789e93b05fb35e255b8935"],["/page/5/index.html","dd1c27d54bf6fbd9cf81b723359ae9dd"],["/page/6/index.html","82832f810a6c983ab8c7e53c82186005"],["/page/7/index.html","d5e6eabaa20be1ac6a54c54042fc3bb0"],["/page/8/index.html","866eca00759387f639d1fdab72b34427"],["/page/9/index.html","ea522a44de5405e735b9587ec1ca1b20"],["/sw-register.js","76d81ff1915567db1697e9d6a4e4aecd"],["/tags/Ajax/index.html","2be194f3fea943af658025ab11bed336"],["/tags/Axios/index.html","db43f4098ad40ea73a11458faa17a135"],["/tags/CICD/index.html","e969ab6282f386375b753ad40a1eafb8"],["/tags/Docker/index.html","162ba6811246af26b3dda118ca2a0471"],["/tags/ELK/index.html","15a08104c6797476e9089738f39b1b24"],["/tags/ElasticSearch/index.html","31dee8d6dac90c8e0548334f669966f3"],["/tags/Git/index.html","588c095635dcf48ea38e64fa3c44bd8c"],["/tags/H5/index.html","d0d1cf08ccc0f39c71818592355ff616"],["/tags/JVM/index.html","ec8d716ba23c79fdbdc17c901e0eecaa"],["/tags/JVM内存模型/index.html","b2b3a4d2a8c77aba5b2583054fd457d5"],["/tags/JVM执行引擎/index.html","799f2dfa877a0089e2e3832147b174bf"],["/tags/JavaScript/index.html","4c1cb93f52bdf1f961d5dc025a01cacd"],["/tags/Kibana/index.html","970c101dad6177ff751375b9854404ac"],["/tags/LeetCode/index.html","5dd67fc1c5940b7f61cd7a6bda0aba76"],["/tags/LeetCode/page/2/index.html","5ccb860c50176604b8dc1cba1f47efaf"],["/tags/LeetCode/page/3/index.html","711f8eebb2d2d71edd8813aa1146d885"],["/tags/Linux/index.html","34a1174cfc064e68f8844f7a9f2fcb1a"],["/tags/Logstash/index.html","df27d9115b9fc6314d508d72097dec62"],["/tags/Mock/index.html","627199777981dd6a6c34acc79b0817f3"],["/tags/MongoDB/index.html","fe829a1e4a140f95256f91900e1f2321"],["/tags/MySQL-事务/index.html","a090fab5513a8f12d549ad74da67f446"],["/tags/MySQL-数据类型/index.html","1fd02cd28eff12868ec9da8a8e8b4a5a"],["/tags/MySQL-日志/index.html","782eb24e7678defb83b3bd9916b33e36"],["/tags/MySQL-索引/index.html","b8b5455f4b47a9f4ba9c132f29e27be7"],["/tags/MySQL-锁/index.html","091e7557609adb26b3a7a39488e1cf6d"],["/tags/MySQL/index.html","861d03f5fee3b50be90c71447eba3457"],["/tags/MySQL/page/2/index.html","3eac9b1b553ac38af199bdae7ec1f951"],["/tags/Mybatis/index.html","df7cb9dfc735fdb5273d5024fc57041c"],["/tags/MybatisPlus/index.html","6845855e984231bf90d9e9ca11d4d8b7"],["/tags/NIO/index.html","107d29586c90be5251d4591feaca1d62"],["/tags/Netty/index.html","3051f1d93c2eaa757628f8b5f6949450"],["/tags/Nginx/index.html","d04c442c0e292b18f4b49ad4f452cfec"],["/tags/Promise/index.html","d8c589ca5f15e905375f1185abc0ca06"],["/tags/RabbitMQ/index.html","25c32e272b4fd804f871fbe4925788e0"],["/tags/Redis/index.html","872b469453b795670e2f4d63e98897e4"],["/tags/SSM/index.html","07e82070335eb50e3f8d895bea9b58ba"],["/tags/Spring-Security/index.html","4bf90aeb1a4f734b4269fdc978e538d7"],["/tags/Spring/index.html","368c087c9d4018123121cb3b761c422f"],["/tags/SpringBoot/index.html","940d805f383f82008a1eae7082aa2b41"],["/tags/SpringCloud/index.html","e95bafc0c83ec0b9a12fd19fa74674c0"],["/tags/SpringMVC/index.html","385ae500145c16564777fe0e69ab9e8e"],["/tags/Swagger/index.html","e728ce35c7427ff29d45847fb9d8c1b1"],["/tags/hexo/index.html","da1d48f99d241b9ed2fa0e20db9a5cf5"],["/tags/index.html","4e8e48b50bcc70ec71b16d2f7c2d590e"],["/tags/jQuery/index.html","da40c3c67ea298e9070bae41e44e71d8"],["/tags/java/index.html","7e6c082c840dc4c9d9274542ba3b9650"],["/tags/markdown/index.html","ea626a61777a55154718c791f8745515"],["/tags/noSQL/index.html","910eac9056cd58b23ec8578de89ec542"],["/tags/typora/index.html","f622c987488f49173dd11e32534c62f5"],["/tags/vue/index.html","d26a6e1798c156e7dadeb0ca614c2589"],["/tags/享元模式/index.html","2082c0f005843f3548a98ec2f53112c4"],["/tags/代理模式/index.html","e43d130a87bc9a9a981af541a5f41a46"],["/tags/内存管理/index.html","301b50338036526dab141335f07eb531"],["/tags/分布式/index.html","9d826fded360eb5b0afdbc9de1c34399"],["/tags/分布式系统/index.html","9839172a587e87d599bc3766e8506b97"],["/tags/前端/index.html","0590a1b372623229386457a4d8fa41c9"],["/tags/前端/page/2/index.html","86b81b473e54dd65b70549f6ea7ef17a"],["/tags/博客/index.html","6ec0de27a3dcbd6695c3fe2c867cce7c"],["/tags/后端/index.html","a8722c0a87c96ddb119b691ce953248f"],["/tags/外观模式/index.html","3b43697705fe897b4e07f6194fc41e38"],["/tags/容器技术/index.html","6dd5d7c0c470f993f0f5f04ffa479d09"],["/tags/工厂方法/index.html","e58876afd9c552b143f237cf40a33c02"],["/tags/微服务/index.html","c571b8216082e3c22fec9d3ba849fdab"],["/tags/抽象工厂/index.html","3dac028c07872a68686e28d5fe6eb13d"],["/tags/持续集成持续部署/index.html","a46e854b6d337887bbdc61ace50562b9"],["/tags/搜索引擎/index.html","7e9fae66cd15c287870657c19c45aa1c"],["/tags/操作系统/index.html","01c0257e3b2e1189839d39c384a273ba"],["/tags/数据库/index.html","7b14ced111a9464aadae3b9587a1311f"],["/tags/数据库/page/2/index.html","d22dfc5688eec4379d9ea9eb89f58b36"],["/tags/数据库/page/3/index.html","4bab8b5b8fc448794599756a0a4f0d9a"],["/tags/数据结构与算法/index.html","d25d0c0d6d8bd5034e503c91ad8c181d"],["/tags/数据结构与算法/page/2/index.html","5d6f28611b13897eb90507375cf9e20a"],["/tags/文件操作/index.html","d2029a7f1f9dfe17a1cb24ccb851f951"],["/tags/日志/index.html","0b6c86ddd9916232980895f09f59054a"],["/tags/服务器/index.html","2b29aaad1c99851a5898153d9636de7a"],["/tags/权限认证/index.html","95b32760f444c22f25a729021e6face5"],["/tags/桥接模式/index.html","ac7fcf775ced426e1bd8130e73bd0d54"],["/tags/模板方法模式/index.html","680193d7530c8faad13fc44a0c0065dc"],["/tags/死锁/index.html","087258cc06708e6f6e80837a631db38d"],["/tags/消息队列/index.html","e910d7074912bb970cd5f2eaede3b0d3"],["/tags/版本控制/index.html","29dcf7b132ff6e976292deb78504eada"],["/tags/策略模式/index.html","9c3de7f8c42a80119f495a6451412f5c"],["/tags/简单工厂/index.html","c7674c19593329b3a64d816c1e3c1df9"],["/tags/算法/index.html","cae210a0a15e544fe29626a412142a3c"],["/tags/组件化/index.html","06edaa1c87cdf30234bf47e637b5400c"],["/tags/缓存/index.html","4e1ec13a88aaa8dad1b9f9ac0acdf547"],["/tags/观察者模式/index.html","64fcf65cea715ac4f0f9e1c7c844248b"],["/tags/计算机网络/index.html","09c7f98f902f25c2613881f4c9934642"],["/tags/设计模式/index.html","76010bddba3a8b3d8bd23aaf03a9b20b"],["/tags/设计模式/page/2/index.html","dfd3780998325674a28e176b443a77fe"],["/tags/进程管理/index.html","9bf513b0403dbb99e9d6c71aa5eff5f2"],["/tags/适配器模式/index.html","2dcdcba8134cbaa7bb9cdab9c31b3a61"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
