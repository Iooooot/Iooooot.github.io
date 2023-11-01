/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","4aa8e757ee7a08fef30c2336318f7f9e"],["/2021/02/22/工具的使用/博客的搭建/index.html","730432ba77cb4a08ebab701e6ef620d7"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","bc5d4763f71b4bc32cd6485d57605965"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","c592c1e1ee5a3623d3e1fb10d79f9ef7"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","01cbe6baf2a4ac4ee3bdd2e40d93bc9a"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","95d13b4a1c403628e3d1b48091deb701"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","739c5b79f438700bca4dbc8527d05571"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","e03bb018b868217afae575401743ae9f"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","27b2edadab9472003e8c254a6c5c8e46"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","d0294cd3f5722eacc691a29cb5620311"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","5cc506fac19751ecadff4bd0ccc3de72"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","9e4636dc0a18c25eb621ac77608e2222"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","ab400fdecc06d3e0a21795b4c4fa3b83"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","4a79315b8a048ab13082426e4d67a2aa"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","e5ebd409e99d92ebbe5f95da1b49fc9d"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","2222da90a4c38417e096150ded7d0008"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","977fdf18071220743a786eb0399a0820"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","0158053fb59d00733775b8f91164d672"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","0814d6dca65c188a2c1b841f4427c1a3"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","275370609f159dfb18e0c11b97ed790f"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","813833fb3b018c2e9a312215c9b8bb46"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","5eca35211a69b34b36e10d5a50caf007"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","c209119370b626ae8fcdbe4200dc156e"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","0a16719a0923b24ba8bda3b0e0c4f3bf"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","6aa5735a1cb0aa883af00854531d25fb"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","97f2005014230ee0a65be986c895a2ae"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","b869fe0161b5ddb1fd75d0dc337cfed5"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","17a8118030abd385b03c8f211f0eda9b"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","0dcad462bbf7caef181625b1bc93cd9c"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","8b762f81604b4325270209a0808bd213"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","f86e041ba519ef622ee0fe298abde00a"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","b0e50596650e6a209ea96d28f79d5de9"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","8976a8ccfe098526b4c3082522bee14f"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","11904a897d5e17922ce831fdfd6b91b0"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","5c75c3dd6d33d442bf1d2acbb92f0ce3"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","dcc73c5a9d9dba46841f0beab36c2a73"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","a151a779e2cc1bf3059a918b8ab16ae1"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","24c0ee945e03f965689457f5681d4fc5"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","b55db9659ce352f78b895202fc97955b"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","b3a7f70d498af30c01964d07ab59adb3"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","8bbcbd6b4ee25180372ae4de542ea8f6"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","abe6924a4f47839c71e5885f39125f9b"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","85a8ac680b714ecc69634f0f7605d924"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","b6b2c574232e3167f321a6255ed02f0d"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","203262e1324432216e5944a24891fd0a"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","e3114e9277459941ce1e555522771638"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","b893c5038fe65af1262ca9b2b3942a6a"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","52af0c395890283c5af3b79a4426d000"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","0bc12e2814a458190e65050cf1c923d9"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","086eb221b7950179449c635b55222430"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","c25eb347a8110d1d7368ba4846b41b82"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","50c66f3ffa07318e19fc15b3f9feff14"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","b865d1d10d8628ae23f9956e6a9df839"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","f47e3350113ed4987ea2bfac8d8c7bb8"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","57e9d00cccd71b277835d07a8fdcf82f"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","d1e3a49d2e0ceeb0185caed8acefec25"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","1b80b8353c9b8416787cc1d861bac4c0"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","70556559eb1f6105ac3845b76171116a"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","b6b2e30dfc3fbc01793fbaa76d67f8df"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","8ae8412d417caf55b18651c7190af3c6"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","b2f10c7cb418798e9738cd8f96e406ab"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","1294e351da9f2965d8ee6da47f1ad511"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","11e9b70d88b2d8e30253369fcd66bc63"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","878d3421220622d72d3a13cc3bc8d6ad"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","8a59d4c115b4df217f8b21786c199360"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","3e0931a778c278162ebe70707ca0751a"],["/2022/08/17/前端/jQuery/index.html","c628c629094a83aa242ec0a0cab5cb37"],["/2022/08/19/前端/JavaScript/index.html","41f50b0709bfdc255ac4157c31afaa48"],["/2022/08/22/前端/Ajax/index.html","bb96ad0680915b35f49b1f860c7878e8"],["/2022/08/23/前端/Promise/index.html","dee06494d350bcd5cd72f0e0ab80638e"],["/2022/08/24/前端/Axios/index.html","10cd3a7d6587ce08a05d3bf46323bf80"],["/2022/08/25/前端/H5本地存储/index.html","5be5130efcad2580eaad21ee83499a14"],["/2022/08/26/前端/mock/index.html","a624f33ad0f66598ceb9ba832c24f691"],["/2022/08/31/前端/vue/VueJs/index.html","6976336ca4d58c2fc74c4e91302cfdfb"],["/2022/09/01/前端/vue/vue组件化/index.html","bd1aadd270baf754e1a92c66cc3cdf9d"],["/2022/09/04/前端/vue/VueCLI/index.html","986d01075d7d6249860681a76d39535c"],["/2022/09/07/前端/vue/vue实现动画/index.html","355601d2e92e2f6d013a911c824e6f69"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","01db7c5543c5b7513e87396da38d5f26"],["/2022/09/10/前端/vue/Vue异步请求/index.html","5fcccfc39d2980371af0198bff227da1"],["/2022/09/11/前端/vue/vue-Router/index.html","205c4788fc22fc57de40e414ca28be0a"],["/2022/09/13/前端/vue/Vuex/index.html","f21fa0b9e0ed9ebab5cfc5d180ba4f84"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","f9945106bc93a6a5f50ae2f6c8f55b1b"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","77ecc20083264228a899be11b94e2c18"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","1f0793c20c24e9567893b35cdcd55979"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","3bfe635fcde37cbcb64dc92bcbff27a5"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","9936745359b019541448ea931f5157a5"],["/2022/09/28/DevOps/Linux/Linux/index.html","96340e3fa087d235875d1cc84f3bfc8b"],["/2022/10/02/中间件/Redis/redis基础/index.html","49eb18167880e502b631598f1a798856"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","f384a48c938eedb2a9121ad2019c2eb5"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","ed14526c655fc26f3bed2267d75a5182"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","357d2d41eee17ec936093c2a27945b81"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","329fb65e5b13280310b527a37b85e95d"],["/2022/10/17/中间件/Redis/Redis集群/index.html","441e90398a1dd7e58a04d18fccb51ce6"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","ba8880e7ede9c080010016140add489f"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","415bc5cc22250569fe3050ebeffe8d95"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","65d1f9c6ca5a76d2420affae55ddbae0"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","6b0132c61e735333fe0c2c2f94188532"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","1f77d2af0e586b8d9fccc860e07bc191"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","a38f242f97fa5da8a6cb0ca3e41639a8"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","e503bab298f55efbed379369d3e13f4b"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","34b31cec5b4e2051c6e6022f91f984d0"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","9227f9bc234a20c5f1d919f9c468f651"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","021bcc790b4252df3ebace972df66330"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","28f16b7f4a44dca83084ec3df466ce02"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","f8a67c31869f1cacdc66051e22f73eb5"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","cf031c45cb98f5873997ffcf591d0cd6"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","a737d8fea69512018c55f40d40e3680a"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","34c5b84a0aae1d6d6eb26e6de6a3a3f3"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","bc223236287b5de7e2c753bda90f2843"],["/2023/03/10/DevOps/CICD/CICD/index.html","9a5a62f000f5982d61b7283097c1afa8"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","e5b896071ff68ae6de3fca59c340ee74"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","31eae439f2971c10d4bc82a113fb4cfc"],["/2023/03/13/Java/NIO/NIO/index.html","6810a6d809439d8a3e54b7cbe0ff20aa"],["/2023/03/14/中间件/Netty/Netty/index.html","113ea8bf357e9f08551c540ed0c2953e"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","f51934a41faa3c0bb17788e61a5eee6e"],["/2023/03/17/系统设计/分布式系统认证/index.html","0f28590b4094eda579e4cc21fff35f2b"],["/2023/03/19/Java/JVM/JVM概述/index.html","2146726340f77ff18ce0d97476094af2"],["/2023/03/23/Java/JVM/类的加载过程/index.html","a78f28d99d62521b01e7e5740b369608"],["/2023/03/28/Java/JVM/对象的实例化/index.html","346ff80516cba3af3a16bff16018a768"],["/2023/04/01/Java/JVM/运行时数据区/index.html","8a1fe3f19e41834e7491eeb42200224f"],["/2023/04/04/Java/JVM/执行引擎/index.html","cfea8aecc0a0a65f3a8ff4c47f6eca2f"],["/2023/04/06/Java/JVM/对象引用/index.html","bc23682cd69d1a7c97b374ea191a2f99"],["/2023/04/09/Java/JVM/垃圾回收/index.html","5ee5694de2da1e7efac3a4c88e965be7"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","1dcd091852b81b80f4dbc9c0b93ab383"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","a34d6c490826b684aac39e30c2478c21"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","48602088681386c14add0366328c7f74"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","e52c84dab66f23ab157ee3379f716fe8"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","382f03e9b8e50ae0a4ce426b57430236"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","0484c6fe26f741b185a430db972cd492"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","10d24444c6f4beaf7a101603e0ced2a1"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","a35d3748e3f12cdf24a796370d457d55"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","dec7df382ba925b4ab56a2b32b721181"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","360a2e092122f66cb5ba225fd334d0ed"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","de08ba36232abd6d6d965fc311ea0eda"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","846dd4415c7eb9fa081eb5451d775e47"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","cd8e570eb9438807c6ed586083debe2f"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","e87017a83e9927ea9cc14eb8b05e86e1"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","36d8684e996bec9cc4c9be23994782bd"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","e5283b13010e9d1a8d248ec4b8af8224"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","bb461a91739eaeaf0e0040ad2c1c2e82"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","0c4dbc436610f02aa46bae962543989c"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","55e36edc55bb18c7c45cd72cfaeefd08"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","131dd46eec8b9cc62cec3261d6bbbdee"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","45c913ae954df502b53f851aec3f6873"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","3349cd5c07f60f352dede4d4a7808d83"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","46b8df9f85c034e4f686271a55e73007"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","e4f0f385876f34c6d8f8895e8f81a0ef"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","c66afd2945b1e95faba264d260737551"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","007a8be5b89e57e03ab05995651eb187"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","e901a5e5f121789911a1a9928e1beaf6"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","6485592286cb2e971ec8ebebd1975f26"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","4fed8974ee0186c06876e8c4f2cfb539"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","a6001a6e835df5243fd6ccdc3b7c40e6"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","299de1b5a98484708ba77c3b673621d6"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","451b639ad6d58fd7a7677694c7a6824b"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","307b351ae7c5eb52262801bf46c51f1b"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","b28686089c3cc728bb04c51fde02f129"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","52a0fd02f37fd3d4ff91833a6df675f7"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","7b85be97f2a9bf64eb538b52c9a55f7f"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","0a02d9182021ccd3cf9a6a9003d3171a"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","2facb335f5a16693fbb25a2e2d37fde2"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","39f76eb0a2792a7f92ed69a62ddbe03b"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","034718bf750a3e15abb1893fa628b96b"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","42a88ca2ca1d297ef7ac26f870bd0dfa"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","2c3d540ac3cb5c8912269d36937e16a2"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","2d1b68f2339aebf244b35e9adb795b6b"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","62581e57a060d1b4089728f655691f8e"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","9fae704755966d36c391372501c091d8"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","6e5eb59b26b7b5bd6f909514bdd1e28a"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","20100287f461108d81f83fb52bdcb7e2"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","f67adcb4c19dc5435521d8a683d93ed7"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","f96bf9b8054140194b77768d7870055c"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","261a298662babebdeb2afef28f8f9a18"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","e18e25db53123b0714617250615b9ee7"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","6ee179b4f395eba4039224d358f56146"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","6c03a125bb417632c87a1446c74c8e47"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","c20687252b717db841f414479fc15766"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","77d127e7245bcabd22b77f65a83afa5f"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","ae339ccf4cce06b65497451692d1a351"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","0f8c9ca4caa5c0257bfb5766d71b399c"],["/2023/09/04/中间件/Redis/Redis事务/index.html","30590ffeffad9a03f4dbcd9f925ec9f1"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","3d55ad7b6b53ed15a2543195585b50ee"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","697390f307ee392cdcb05d0e198e9cda"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","448ef6fd5cddb93a86b797a22e109670"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","9be8abed3bf92540b655f923ab9f2189"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","a884d6092d58c2c612c55ae2497a2a3b"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","e8c551254947c74f12d86796b5f92415"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","a4ffa1f5d5538b5d8d5a1a9d17b68182"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","9ae5a6d1bc1f06d6c36b78851830e18d"],["/2023/09/22/Java/NIO/零拷贝/index.html","f97ea045d1f2d304754b55086c4f284c"],["/2023/09/24/系统设计/JWT认证/index.html","478b8d2f7d762bf096b9aaea7790234e"],["/2023/09/26/Java/NIO/Reactor模式/index.html","6f37ba292dcf2f8257361d54a29b5def"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","9a17f2841518565f8659db0453aad92a"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","1904b89ed018d861433a5e0b4dcbbed3"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","a25f30a367838c264f296d7f9bdc2325"],["/2023/10/09/Java/并发编程/共享问题/index.html","a730bda7ea7c3110d66fa1aa58183ced"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","9fbfd1474027becf7c7e6aee50bf4094"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","80d904ad0a016e845e73a324c7817062"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","5b709d9182f36ed168e2a005f9987b93"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","37ea5d53445fb0b33e79c44e5f511c18"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","e2007400502f3dd07678040abb78d973"],["/2023/10/23/MySQL数据异构同步方案/index.html","218ddbf7ad55d4f627b3562615a3bca2"],["/2023/10/29/动态通知方案/index.html","d3e874f769e9f5288cd24778df21f0de"],["/2023/11/01/多级缓存架构/index.html","ef672e69de7b5a0f179b88c39b68a8ca"],["/404.html","25567a7095f0388aa5de342d9121c4d1"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","c7b445bbeeb26e2f2d7cc8ecf9d3e166"],["/archives/2021/02/index.html","66aecfc8d0f70d633e6bd710742033f8"],["/archives/2021/03/index.html","3aeb38a42bcd41e423b452cfd62c86dc"],["/archives/2021/03/page/2/index.html","0a17db28f396ddd7c11ec1bd825df172"],["/archives/2021/03/page/3/index.html","ed0694858723ccf2bf811d1307dbe473"],["/archives/2021/04/index.html","d5db82e3b449e162a317d2ec670bc3c1"],["/archives/2021/04/page/2/index.html","0903b15fe120021fdb4ca42e943e17fd"],["/archives/2021/05/index.html","c0425c1d5610d079cdabf6c97c57bec5"],["/archives/2021/index.html","8b1c6c0db94beb2fc2801c3ce9bdbe15"],["/archives/2021/page/2/index.html","2c325d4fd9a9375341864d2d4e6d9253"],["/archives/2021/page/3/index.html","1811f616b72d5b6bd7b2ee6c15d3fd5f"],["/archives/2021/page/4/index.html","1ead1de11b9bf9398e0a9fb1748beb44"],["/archives/2021/page/5/index.html","e1c85e062dbbb078a19b0daf3d1bcbc2"],["/archives/2021/page/6/index.html","bc238307d28e133b9f7b9bf1d5c97cce"],["/archives/2021/page/7/index.html","c5e63732a467151303daa7df6f9e17af"],["/archives/2022/01/index.html","3d063eedc9b13a75f10ea8619bf8597d"],["/archives/2022/04/index.html","dd687f30ef121d93b9511829379180e2"],["/archives/2022/08/index.html","eb9a1dcc465c76b10816d3e1b2bb2699"],["/archives/2022/09/index.html","f70516b27a969498dce794a1f0cb1f12"],["/archives/2022/09/page/2/index.html","31543605d5d6fd4d558ab7130e307004"],["/archives/2022/10/index.html","b53f783e2b3c842f14c0c61235d66a5a"],["/archives/2022/11/index.html","deb482702a0d55fc11d606d3ad37fb4e"],["/archives/2022/12/index.html","04592f730baf852c47b7f5a9a8678171"],["/archives/2022/index.html","462a299d65980b9a8ec75611a4b990f6"],["/archives/2022/page/2/index.html","ed3399bb115985c7cc1e5f136aee2a62"],["/archives/2022/page/3/index.html","b6b66a1d750d967c3b178eeb0864222c"],["/archives/2022/page/4/index.html","6f6f313fcdae8cb9f1645bc2e3a7d1ae"],["/archives/2022/page/5/index.html","03efc3efed9ce6af85216d56f35392de"],["/archives/2023/01/index.html","786d87691043d9eccd07024964277cdb"],["/archives/2023/02/index.html","1632948c1d51a7685c48942e76201fcf"],["/archives/2023/03/index.html","ed00917e671bc0fc32a49a07a17790a4"],["/archives/2023/04/index.html","37b9783ec77151151cc2a42314f131db"],["/archives/2023/04/page/2/index.html","c5252bab9f3de5f3c32d0a759e858b9a"],["/archives/2023/05/index.html","495ad66538ef5f1b9dbe2a835dfb042e"],["/archives/2023/06/index.html","914c6f704e95fdf834155fd01e8f7ada"],["/archives/2023/06/page/2/index.html","163050fb6f0ecaad30930edacd53a1df"],["/archives/2023/07/index.html","eecd57afeb3e95b32e394d03f8f3513a"],["/archives/2023/07/page/2/index.html","3b83f9f493f1055b737dbc406414049e"],["/archives/2023/08/index.html","f98e95506b76ad6216435f5942b1d24c"],["/archives/2023/08/page/2/index.html","40c65e96b772891f2d9317393e849819"],["/archives/2023/09/index.html","bbc716c8a21e7192e85ea29837be3b69"],["/archives/2023/09/page/2/index.html","a3bd991d0d06a2d22882a2be21472990"],["/archives/2023/10/index.html","d7839e95f7519c611e4dc96eba44de91"],["/archives/2023/11/index.html","f8f3008b16d6985693d99f75ce797472"],["/archives/2023/index.html","2ca43ce7dacad190bbcf2ac72030110f"],["/archives/2023/page/10/index.html","73b6dffaacef07ee80330d723dee829d"],["/archives/2023/page/2/index.html","238a0e36f3fd2ccd7cefdbe8d557d0d1"],["/archives/2023/page/3/index.html","a75ff25c57df6f9e9b5a22b8fe844261"],["/archives/2023/page/4/index.html","34c0dce5c22d81b08df7c13355ca9bc4"],["/archives/2023/page/5/index.html","6642a4b23e94856e175acccc7e57edec"],["/archives/2023/page/6/index.html","b2e9332ec21673f61bb8550110322b91"],["/archives/2023/page/7/index.html","e7127119609db776bed90f2a65f7b96d"],["/archives/2023/page/8/index.html","8c4700715b5c9fd490ab110c6a496d6a"],["/archives/2023/page/9/index.html","c8da96cd6b034074e223d70faf10b571"],["/archives/index.html","5671e865fa382dcb501b7cbe6f76d1c4"],["/archives/page/10/index.html","2b481a6b2eb3e5126b4a7f3223c54d17"],["/archives/page/11/index.html","5c1990f6467856fa43f347499cb9d25a"],["/archives/page/12/index.html","c334b3793772ac541d2ce55794caa057"],["/archives/page/13/index.html","1761060479d35a3e67c15881153dbf08"],["/archives/page/14/index.html","61a1556ee75e855c51b835a111613f8d"],["/archives/page/15/index.html","bc98f4b5c895c8ad63a9709b5ccda7c7"],["/archives/page/16/index.html","8607721cbec2ee90a7b0e0544d4cc613"],["/archives/page/17/index.html","bcd4cfc603dbe8da8f28d24fb8536a48"],["/archives/page/18/index.html","4870bdaf00a88487df152ea180d8687a"],["/archives/page/19/index.html","05a905babc563fc69f4bb910655aeb4a"],["/archives/page/2/index.html","86b6a2fa5c506b0fc1265338105f2ef7"],["/archives/page/20/index.html","5d5b8298342860f4d9ffb67ab258c4f1"],["/archives/page/21/index.html","f3a4d0e97f1b4d4984f256e23e983657"],["/archives/page/3/index.html","62a73cd3fe31ec7465223028e8730e88"],["/archives/page/4/index.html","9454bf00bf13dae29dccdd29e44ae4c3"],["/archives/page/5/index.html","4c1ec7a59a5b52642eac772266661c5b"],["/archives/page/6/index.html","ba66b82fb232ce7259898bc9ad3ba966"],["/archives/page/7/index.html","7644fe7d0bdf0dd9af9714e233932aeb"],["/archives/page/8/index.html","2f05002dfbac7bb5489cada86e942e39"],["/archives/page/9/index.html","b70107551668d5c9655ff18c06318fde"],["/categories/Devops/CICD/index.html","311abadfaf6fd212c07dfdbc8ce119b7"],["/categories/Devops/Linux/index.html","131e5d7d20cf329d8e8f55905be3a5d5"],["/categories/Devops/index.html","1d8a379b1e9516a9aba6b6275d43c3f0"],["/categories/Java/JVM/index.html","7e24304f9f7c78e6a7ba302eed2928c8"],["/categories/Java/Java基础/index.html","b1806a4c87c94e019e0d2977e508553d"],["/categories/Java/NIO/index.html","ca7d4817bcbb712df13aecc05a58581c"],["/categories/Java/NIO/原生NIO/index.html","cf6a46b455ce3f5d13394dce38e8daff"],["/categories/Java/NIO/文件操作工具类/index.html","66052d94e569c7ab2d7fb197736bc093"],["/categories/Java/index.html","1467a4e0b5356104d0475aee8df0f769"],["/categories/Java/page/2/index.html","143ab28a047b854abbe388cc2fd59502"],["/categories/Java/并发编程/index.html","3ef2285dfd7badf36fb3cb005e1e56bf"],["/categories/Spring全家桶/Spring-Security/index.html","011841bfb7007ec260867fc75c0576ac"],["/categories/Spring全家桶/Spring/index.html","ab9b5c7eee70ebecd2ea6f17e5ded6e1"],["/categories/Spring全家桶/SpringBoot/index.html","7def10c3487302d1d618f89bcc68ac8e"],["/categories/Spring全家桶/SpringCloud/index.html","789412fcb88ea77d3120d5932eb02d15"],["/categories/Spring全家桶/SpringMVC/index.html","5758e6140a69b1eb681c7b10c4cbc6bf"],["/categories/Spring全家桶/index.html","136b854d05afd5fd1b8ad9ae23412782"],["/categories/Spring全家桶/page/2/index.html","6ff0b855831e3ae0409cf034910928b6"],["/categories/index.html","1977080bc1a29d3f3182286cbb803a70"],["/categories/中间件/ElasticSearch/index.html","97b87097ecd8483497254f7a3aee6e76"],["/categories/中间件/Netty/index.html","cfcaa3d20fac77cff4b384c9a76d6711"],["/categories/中间件/Redis/index.html","94623d12396231e47e2715fd636269f2"],["/categories/中间件/Redis/page/2/index.html","d3f0cf033737e7c08cb9a715615fd864"],["/categories/中间件/Redis/page/3/index.html","7663fbb3ffd8733e3a1baf20f93a1c45"],["/categories/中间件/index.html","2abb62723b33cf8edb2f3d798414e179"],["/categories/中间件/page/2/index.html","9ff936f04bf310cbe50e0ec8a1edcfbd"],["/categories/中间件/page/3/index.html","cfec543002ff78874fff5a9580c8763a"],["/categories/中间件/page/4/index.html","05b2496ef5701810b913da1390cf8375"],["/categories/中间件/消息队列/RabbitMQ/index.html","11f523d52f93473c8157651003679f62"],["/categories/中间件/消息队列/index.html","1e5e92990bffd74ba0ad12006bff144c"],["/categories/前端/Mock/index.html","bccd7125dd77e1c5d8ab2395209d219d"],["/categories/前端/Promise/index.html","9f8fe037de28ef50dea3c7990275bbc0"],["/categories/前端/Vue/index.html","fd446563b9c61080429e101e95b5f3c8"],["/categories/前端/index.html","345432c6066ef1d4c3f58f69a73798fe"],["/categories/前端/jQuery/index.html","05988ff7ba149b5b0ea3c1e91079fae0"],["/categories/前端/page/2/index.html","87c4c601cd8374d7cfb431db7a3510e5"],["/categories/前端/原生基础/index.html","3752efcb4147c32d983d693ad00df2a1"],["/categories/前端/异步通信/index.html","324fd37e2de579bbf5d14a4e80e8b0d1"],["/categories/工具使用/Git/index.html","3b35e24819bf9d05161a55241eb7fbd6"],["/categories/工具使用/index.html","dcfc76b4108df6d8470471909c07b74e"],["/categories/工具使用/markdown/index.html","a97ffca5ab7bacc853d937cf7103f9a5"],["/categories/工具的使用/Docker/index.html","b8d2d67431d54d188c46dad5f3766cd1"],["/categories/工具的使用/Nginx/index.html","1133f5c3a890464e5d2165c11c5fb1dc"],["/categories/工具的使用/Swagger/index.html","38a9559913b2a8a80bd5b1b815681ba5"],["/categories/工具的使用/index.html","8a678d61cff0f0c230f7d63450442e03"],["/categories/工具的使用/博客搭建/index.html","bc09e6bbf4eaa087b013d658de07e8c5"],["/categories/数据库/MongoDB/index.html","6ffa29e77d3d48a1a4ccc9b346620a73"],["/categories/数据库/MySQL/index.html","878513a37a725b7de165c4dc93aced97"],["/categories/数据库/MySQL/page/2/index.html","1f89cbb17f6d5b1a519433bee4118071"],["/categories/数据库/MySQL/page/3/index.html","2c506f19586851b58489ca87a7667c64"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","3059865464b63a082fe56e39825c2bbe"],["/categories/数据库/ORM持久层框架/index.html","e4265689b1f2a49a41271b18e1611293"],["/categories/数据库/index.html","cf6ce51133a81bc2d64046062f906b2c"],["/categories/数据库/page/2/index.html","2183d5f0a77138daa2030a903a0ec92f"],["/categories/数据库/page/3/index.html","573a9498ec1c27fb6dd6878a02ab68c9"],["/categories/系统设计/DDD领域模型/index.html","f83b3ba726f716fa5f38317189d32daf"],["/categories/系统设计/index.html","d7f2abd194e718e4601c5a5197d7953d"],["/categories/系统设计/page/2/index.html","1dcbfbeac3763ec6ff50ccf314a7eedc"],["/categories/系统设计/page/3/index.html","6cca9cc0b8622d7415ffdb18d12c1224"],["/categories/系统设计/分布式权限认证/index.html","ea66fd682895bc1e7d88eec93592298c"],["/categories/系统设计/分布式系统/index.html","04152f152cd2fa3514231860629b1d8e"],["/categories/系统设计/设计模式/index.html","3e8e9e25d528db1c92bf36bd8d651964"],["/categories/系统设计/设计模式/page/2/index.html","74d86c4f16c921ca4278dcdaa8722658"],["/categories/计算机基础/index.html","d0df4acb3c7368125b60864c23c4d6e6"],["/categories/计算机基础/page/2/index.html","a1ac1341a19a2ef5bbbd13e3e8c96cb1"],["/categories/计算机基础/page/3/index.html","7cbba70de2a43a5fbb79187305c19098"],["/categories/计算机基础/page/4/index.html","683344f22b71fd58afa3d40e1e4f0424"],["/categories/计算机基础/page/5/index.html","4c4f4d83a4793c0a0f425d0bbad7cba7"],["/categories/计算机基础/page/6/index.html","18e9c6bc8b0e49d72b22bccf31e20262"],["/categories/计算机基础/操作系统/index.html","8e96f642e988506af9a33d5e46c5ddd9"],["/categories/计算机基础/数据结构与算法/index.html","c1ba69bc64275a8d1cf1628d134c7bbf"],["/categories/计算机基础/数据结构与算法/page/2/index.html","18a2e00acc17d0e932d0e17985795096"],["/categories/计算机基础/数据结构与算法/page/3/index.html","a56af66e68c762f4648afb384ecd8011"],["/categories/计算机基础/数据结构与算法/page/4/index.html","566cb0a97f8e9a8c14b395ac5372c8f7"],["/categories/计算机基础/数据结构与算法/page/5/index.html","1d1aa33cf1791c59a04236b251bf33a1"],["/categories/计算机基础/计算机网络/index.html","1e21a254e73bd4fa8c4be40c58192bc1"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","6d2bad023f41a16b9159878b1a3aa2e1"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","0e4e663fb917472b86a530aca46599a1"],["/messageboard/index.html","9f9f7d5570486ece5faa153b3703be58"],["/page/10/index.html","8ad32bfb998c60368b42c13384c54055"],["/page/11/index.html","7eeed4ec2fb0198ee92cc8ec16eb18f9"],["/page/12/index.html","4c9d9da16b8b1dd5a822649a866d382e"],["/page/13/index.html","5f9ff29f35075ef33b54b0f987bd2fab"],["/page/14/index.html","6acf11b5ce0652ebfc04f9516617fccf"],["/page/15/index.html","74e4bdb9c63b679a35acab47317819e0"],["/page/16/index.html","51e07b44ba93f1f24e3b2df62ef7e118"],["/page/17/index.html","76b1a81e7e0d06ba2733f98a2788973b"],["/page/18/index.html","d4bdf019108051ac778acb4159a4e6f6"],["/page/19/index.html","6074d024e14eb1dbba74019a6ebb9255"],["/page/2/index.html","453418de2a32926e8854dfae2014f3c5"],["/page/20/index.html","8b772c2e0e940f769fcedc207f2bc800"],["/page/21/index.html","ab453b49ce32553a03149c87e1f966fa"],["/page/3/index.html","4352f5aa0ac8e5421562a00a690a68f4"],["/page/4/index.html","588434c9f2b6a9b053b0eb78d19eeac2"],["/page/5/index.html","be760cc47708cabcf6ec641de2a0e97e"],["/page/6/index.html","06fcb86c04e055cf3d60d0b3b40eaf6b"],["/page/7/index.html","2fed765240c63d69876fb7a9a5c6f466"],["/page/8/index.html","27002a350d5885200760346fee6a8331"],["/page/9/index.html","3ec72eea3841fc94f25dc7763aeb6152"],["/sw-register.js","b4e6ec5b68e80a9846ba6b3f79657454"],["/tags/Ajax/index.html","410d3bb08f27c790f0b633e8ccfde7f8"],["/tags/Axios/index.html","35a095b1aeefcf199c59f42d395f4d06"],["/tags/BASE理论/index.html","122c41753ff697e6a139140f61aa566e"],["/tags/CAP定理/index.html","3f313ca0f5eba1f22d063b9aa486bfc6"],["/tags/CICD/index.html","8769ef888e3c6422cf355ab750d8f648"],["/tags/DDD领域模型/index.html","2e5e010b1f183938a1ba2ae0fb4cf5b3"],["/tags/Docker/index.html","1878633aa264e096ad8beb7110d25937"],["/tags/ELK/index.html","106ae690cd100b69170a15d7ba1434b3"],["/tags/ElasticSearch/index.html","19b2116b3008da32512dc93f8cfea9e1"],["/tags/Git/index.html","3c7dc2e6ff29a946f73781d02b9acfb5"],["/tags/H5/index.html","4a69a5d6751fee58fd326fdea0c528cf"],["/tags/JVM/index.html","c38c01e3b00bedeafa8f670992d51f26"],["/tags/JVM内存模型/index.html","b00ca7c44831ef325b875c0da4d6fbfb"],["/tags/JVM执行引擎/index.html","0a375f5a7c7851f40f075141bc0efe62"],["/tags/JavaScript/index.html","102f59e886e822948970cfd79e31fb30"],["/tags/Java内存模型/index.html","a50b5b1f76582fe48b3b109ca41e4082"],["/tags/Java进程线程/index.html","7201dfd3eff6cf42bba6ebab51e46f9d"],["/tags/Kibana/index.html","c18268944ed2f12e069ef653ef4cb984"],["/tags/LeetCode/index.html","8802a8f1ac6441a847bea05f707d5816"],["/tags/LeetCode/page/2/index.html","72be5f554e6308114fc76f29b07966d9"],["/tags/LeetCode/page/3/index.html","e9901335e0700c8ab94a060e7ea09dac"],["/tags/Linux/index.html","09da8a9f08495f39ee2363ad9e79de2c"],["/tags/Logstash/index.html","63e233ee15ddace75cce00366cced8a0"],["/tags/Mock/index.html","628cff9d0de9f2fd2a1a08da26818cac"],["/tags/MongoDB/index.html","1afa7dc597c331bef4e1d262fcf94a0d"],["/tags/MySQL-事务/index.html","d542d06db483e718439877476da030c4"],["/tags/MySQL-数据类型/index.html","84a20019defd086d22dbb23d2daef328"],["/tags/MySQL-日志/index.html","cdb69b44bdef8793cd44904ab3fd172e"],["/tags/MySQL-索引/index.html","dbb76eb35b4595242fa6933a670c26ef"],["/tags/MySQL-锁/index.html","384e42f3d76bc8d111d4cba31720efba"],["/tags/MySQL/index.html","4229fe7267b4484b8e3212d3c8243c4b"],["/tags/MySQL/page/2/index.html","de595d8d8192eba5e18c13cbe4b263fc"],["/tags/Mybatis/index.html","7379ef7feaebaa64e91e0eeb72b5383c"],["/tags/MybatisPlus/index.html","ed7f97956ca43520d8d097de0883cd17"],["/tags/NIO/index.html","29022e6bfec932f264d268609b40303b"],["/tags/Netty/index.html","4b92c3e09345d0765bf2222633887d0c"],["/tags/Nginx/index.html","7da1e21529cfac0d2cac192ed0a2963a"],["/tags/Promise/index.html","6d9597c06b15eefd009ac37a7d94696d"],["/tags/RabbitMQ/index.html","f2eff18c6727d4b1ed8d30d82c8d4649"],["/tags/Redis/index.html","c3eee3b46dddede6d57e95dfacc8c4f2"],["/tags/Redis/page/2/index.html","b3dca8327b167051fea33f9516e1f698"],["/tags/Redis/page/3/index.html","3c389ec6719d5db414f9572a451fcff4"],["/tags/SSM/index.html","c85813b4f07485d26664104d39ac920a"],["/tags/Spring-Security/index.html","be115782b2ce7f524c5661b425c962f7"],["/tags/Spring/index.html","d46466e7f44ff37b3f1fef1336026757"],["/tags/SpringBoot/index.html","63e43c41f6d01963409ec666f7720baf"],["/tags/SpringCloud/index.html","ab51b2fcdd84ee1aa099106b8d7af15c"],["/tags/SpringMVC/index.html","e496c3797e33abbc0e4a351b84857da4"],["/tags/Swagger/index.html","6b2d104293f68fa70900e3d9c6639314"],["/tags/hexo/index.html","1cfc3875a15c5dfac6f6f33922d5faaf"],["/tags/index.html","23d5f45a6eb3bd425e70da146350373a"],["/tags/jQuery/index.html","b3aee8128775e42508f696434306667c"],["/tags/java/index.html","678740ebebc9b9d39ee06cd1c5ce72b3"],["/tags/markdown/index.html","4b48146dc790e60626cc062e5a6c828c"],["/tags/noSQL/index.html","70ac92c839c15812e98dfa73516f4639"],["/tags/typora/index.html","b5132309ab93be61cd5c2f43631fcaac"],["/tags/vue/index.html","0841d6e284aa7112b0307e84287c853e"],["/tags/享元模式/index.html","05a53b3532e0c7fe5a796a4ca792fca7"],["/tags/代理模式/index.html","06a46e66f157b1222cadcd1fab42b48f"],["/tags/内存管理/index.html","5d6bd95b763f5aed63e6672993af3187"],["/tags/分布式/index.html","7335d546a3fb3fff5dececd7e1ccf467"],["/tags/分布式系统/index.html","2c7132dd3d43c745b44e1b387b525ace"],["/tags/前端/index.html","04ade1c3af0f3fcdead549a3d90fbf6e"],["/tags/前端/page/2/index.html","24fc8fb5a417b2353dd0b0a84e603bdd"],["/tags/动态通知/index.html","aa603690de42098ae0dae062cfb06779"],["/tags/博客/index.html","0b2624ddd8399adc52cb288363e9a772"],["/tags/后端/index.html","fd7760bfa3870c6277cfc6c0b66351a8"],["/tags/外观模式/index.html","28705ff811492ae84d0be4fd8997371b"],["/tags/多级缓存架构/index.html","6fe78443b65ea9e74e015b6e48809499"],["/tags/多线程设计模式/index.html","7c4bd1dd6f4e56e7d457e6c747a10e39"],["/tags/容器技术/index.html","a6b18a71ad4057ea252037fe9e892387"],["/tags/工厂方法/index.html","27ee6bc0826504ae23812d264a6d1b21"],["/tags/异构同步/index.html","768e60aa58dbbe89ad169aeab9cd3e15"],["/tags/微服务/index.html","796e4691d61b126ca0ab50e44f2077ad"],["/tags/抽象工厂/index.html","8a03f56234ad15981aa0628059e8f170"],["/tags/持续集成持续部署/index.html","a5477b6a6c018208f92f747b9868b959"],["/tags/搜索引擎/index.html","6cbbc98231d21fa3889bec6666dc678f"],["/tags/操作系统/index.html","82e06b68b000e1e59290d9909f6eb977"],["/tags/数据库/index.html","04f4d19b43fabf10fde3effd5b5ff5ce"],["/tags/数据库/page/2/index.html","1c3115e54c0694036f506873fa297a64"],["/tags/数据库/page/3/index.html","016d2d652756de0dfbf19a89f65a0291"],["/tags/数据结构与算法/index.html","bb42bbf1335c80f395307b470922fa4d"],["/tags/数据结构与算法/page/2/index.html","e8a2bf2c66d723c4e4c223e8221590af"],["/tags/文件操作/index.html","8b11dd9b35813a530572d84af16d43ca"],["/tags/日志/index.html","333cd4785d70e522ec2ee90a3e8ffef5"],["/tags/服务器/index.html","fdb1c0697573225e5423f988e12e62fe"],["/tags/权限认证/index.html","cbea8f5845b1333253b69ef3fb221aee"],["/tags/桥接模式/index.html","e6cc001110fa036dfc92a7900652d27e"],["/tags/模板方法模式/index.html","acc2f49e5a7f11944ed4fceae43b3b70"],["/tags/死锁/index.html","6112652f5afebc16559c2f0125304354"],["/tags/消息队列/index.html","d82f2c3c708e60ba3d8f1b4119412271"],["/tags/版本控制/index.html","5f94fb2a410c9f2527da52517feade07"],["/tags/策略模式/index.html","e5af46786dd64ec55c53a8d38f73b40d"],["/tags/简单工厂/index.html","487b24b448ae338088860a33cdc19da4"],["/tags/算法/index.html","d2bf0ac855e64e1b89b1e52b4a6a91de"],["/tags/线程活跃性问题/index.html","9a226201881a0fb0a97c03b3bc39c1ec"],["/tags/组件化/index.html","8b12eefbb698935ddb8ddf9921ee5699"],["/tags/缓存/index.html","9dc6f4273659a5d7d97870c34b6764c2"],["/tags/缓存/page/2/index.html","5cde85f3d901e3d0e97549e1843673db"],["/tags/缓存/page/3/index.html","ef79ad1bedabf950bb0759eb26a75e7b"],["/tags/观察者模式/index.html","3528ca52270c101bd4c96d51d4192964"],["/tags/计算机网络/index.html","caa64cfe2ead3ec5c2f79d0f7a7579cd"],["/tags/设计模式/index.html","3ce8fca81c4c0586988be908acc126dc"],["/tags/设计模式/page/2/index.html","2f302fb970ab71cbddca03f99ec70a97"],["/tags/资源共享问题/index.html","084683ccc5aee95a36f5e2a848967b17"],["/tags/进程管理/index.html","c667f57695162b1f22bd5f5be47f62a5"],["/tags/适配器模式/index.html","cd01f85e347d38cdff5b0f04c6e6b326"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
