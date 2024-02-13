/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","a4545093d12128fdc19a4c5ed1bba2d6"],["/2021/02/22/工具的使用/博客的搭建/index.html","0255d863a6caf10f4019e8a45b5c29bd"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","3b27d3bdfc02396fa526b322fc50cec1"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","28964f305b6678e881ccc25e450b5ec7"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","e4c343dd64122113ad07c1342e26e760"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","2bcc970ff9533c0006a01c8ffd878b8f"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","093420c57aa1788c2d95813c8f1fec32"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","c72b869d52ee5f2a0edcec64e368d223"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","6a7c4b395500ff30f5fa1c037c5dd673"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","06960711063711dc5051258233f4fd1d"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","a2a3b0999503e7c4090c77fde5855e36"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","9be22b75fde3052d89b4993e4e257806"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","512c5434a20056d24b7233e3ff240e44"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","19062881e9f7072b95c62d09e4ec6ac4"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","592f3d17d40d0f4d07401ac78b525a5e"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","e1ffe135b64dd2f4c3fce07fed92a283"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","80a8c2ae86c45854dee8819d84088034"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","ed6c42908c2325d2ea8d4a333da681f1"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","09fef4fe917e3f1ce81ec62c17962f18"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","9f8b9bb0ee6cac758a57d0c73169dbdb"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","a2a13546ae004ca0db138a087933ea00"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","0b0853fd94bedd13e8bdada509ed67f1"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","e4a14d144f43b873710ecec87912cd7f"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","60f03b3e2ae30aa4a76b79bd9a513803"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","9c8e62ed3230d736536bc88309279003"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","a6c8fcee0be490b0316919c9f4b4dd58"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","1b8d638f5e8bc426ffc1f9f004711770"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","a443f5d58147464afb930b5950493a45"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","145ba27c0480983f59206f58b376e90c"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","8c70af9ae86ff8747f468a742641c217"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","eb9f5756be287455bc905d8214582451"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","28ba23d54b1dfa985e3b2777ad75cb5f"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","d1c8a213b3ed219ef8ad758bece3b7cb"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","335b1c6527121e8554c7131588456c60"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","922bcc45295c4738fe792b53627f664c"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","b63361436ad9d72777bd7336811ccc21"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","440240cfec86b28fc8ef9529193ec6ee"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","ab5be58b871890a79f3a75fe7d74b4f9"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","d718265a0bed9fba1a99dcdf5728d8af"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","bff42482f26d311fcbcc1c11a22b407a"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","c568954aec96f2fac9525f95b93b6ae7"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","9d68d32585021ec57f81b853fa11314e"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","61f7a50308799bf708d24c4fc8c9aabb"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","74ff39bfc58535c4427a410861beac64"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","da568f6cd9859c7956412eb5a3430391"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","a158f16a270780b23c0cf9cd76edb591"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","b8aadca8851f46352161a975419c2b57"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","c6d1f5394dfecbc2e55895a91b25b18a"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","4e51c882abe4e4d7c0881ad86bbeb479"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","bb6d90b7e7c2ed0c176e43fed29c2e5f"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","c4dc77004c16defb17101495bf71f55d"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","82b576108295116944dd8beac6860a7d"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","e597adabc03e6697524e7dff1ecddf2f"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","e36efe93c49580a55c86a8118322ff5c"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","ba45d84d1d575265b5c180180e3213d3"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","58e51afe14d171ef5462a38df72db4a2"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","f944cd884e6b3646d7595621bcc3049d"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","d3745a99ce8a5e2b31d31bc4444c814d"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","544d1acb5dd00b54b0a464c8a65c985e"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","fdcfb743903e892c93d6299734d2e309"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","de8009b748641e7a98ab836e060c70df"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","3ee6a2e5cae39acef2c2606bb62e7879"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","bf636f79295f947e5849eabff802089c"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","c6f973cb887b2fdbb11f7df173f53dcc"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","38bb50673cb6de25705c7b0732316161"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","1fe8366f1d6b76c777b14600b9af0133"],["/2022/08/17/前端/jQuery/index.html","bb11efc4875ed6368af9e93ac47e12c6"],["/2022/08/19/前端/JavaScript/index.html","2bab349262097b3d1055077fdc882a32"],["/2022/08/22/前端/Ajax/index.html","d90229ca06dc67ed4c0855bac95c7678"],["/2022/08/23/前端/Promise/index.html","38067c6ce1a6695f4ceb211bcef08c33"],["/2022/08/24/前端/Axios/index.html","21fd3c6c450fa14119b7a1af35fe9b0f"],["/2022/08/25/前端/H5本地存储/index.html","58a94f2a2c15752d0d435c9946d048a9"],["/2022/08/26/前端/mock/index.html","5278f5f60b5edc885812a1e4a681cc7a"],["/2022/08/31/前端/vue/VueJs/index.html","f3082db5a899e5f80a9f9b0898a0eeef"],["/2022/09/01/前端/vue/vue组件化/index.html","be1425e92e63c39f105ae1dfae190ed3"],["/2022/09/04/前端/vue/VueCLI/index.html","40342ec7c26e87d7acb2d32edd4f9d92"],["/2022/09/07/前端/vue/vue实现动画/index.html","f9bd8445739d8975b1e8796d9f437d8a"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","b2cdcf86226ea82891b519fefeeb1c34"],["/2022/09/10/前端/vue/Vue异步请求/index.html","361a029555c7776494d699d663d05fb0"],["/2022/09/11/前端/vue/vue-Router/index.html","04f5c264ff09eb215f2c02d022a1ee02"],["/2022/09/13/前端/vue/Vuex/index.html","71d58d7360c274c0d54c2aaf78b08c8b"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","e2094e58dad68d5593e27828e91ec90e"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","51b78db8b4c9139dc221ff5785e78f13"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","88c1c0d459c0658eb9b2fb816d02f981"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","d2c44a6c7718b49dce3ae9c0fbfe0b52"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","edff7dab506edd2ae4f9a92bfd5a524b"],["/2022/09/28/DevOps/Linux/Linux/index.html","7d70472a2b1f62ebcbfc087abe8ea103"],["/2022/10/02/中间件/Redis/redis基础/index.html","2680d53d046542a50c481c6aa90f16bd"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","2c5dbdef641d7275c6b73dce85636282"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","ab3a09b1fd021fc240dac4246442a283"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","7fce8a7b026931ae3d1eb16fd454ec4e"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","4e23cd582377a95507809f50a20b1b2e"],["/2022/10/17/中间件/Redis/Redis集群/index.html","354188a973714184f937b38f57688d53"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","267852a93ad2538bb5ec52cc6ba0f120"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","fff24fa795a53dc5f611e88f5480ce34"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","09aa8015ce999e04ad9aa46e839e3856"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","3587727816fb19992dddaf42efa83c05"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","f7bf988d0188f5758b80fb963a682cb8"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","c455a78d0a2a82c10ffd67c092da724a"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","bd40821fb552a926359b3a77bfdc6dd9"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","ce1e0b7190b295de50f7ff5d8240c2bb"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","744714e9037d27e58919d7a989a6534e"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","75549fd4545823494c0b967b640dc748"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","143830339d742ea385d46307135bae43"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","55596f32c164e8c08653305bb2012992"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","d29d16a648f05723af0f0bf41067c98b"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","4cb34d9327aae47d46d5cc32b7fad9fa"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","9319e175f9d004baf312ab4c251a0912"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","7a2b24856752a78d3d49593d8dc0feb7"],["/2023/03/10/DevOps/CICD/CICD/index.html","c9897f40e019171ca03bab14aeddc95c"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","35f3f4e7536871e54cda10ed587076cb"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","e97416f8e6ab33df952f289419eca21b"],["/2023/03/13/Java/NIO/NIO/index.html","dd2a7ac64cdcf1771b8a4a1da7a62382"],["/2023/03/14/中间件/Netty/Netty/index.html","1241d0f1dadefbb9a90234edbe55e1d4"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","a263da63c22fc5cc4169e2db414b8fbd"],["/2023/03/17/系统设计/分布式系统认证/index.html","833c27bf72b8432b82a7808a6bbd4a2f"],["/2023/03/19/Java/JVM/JVM概述/index.html","c90d7d2e62650b37278e263272c95908"],["/2023/03/23/Java/JVM/类的加载过程/index.html","7eb73bcb1d89a9ac759e503c12c477b3"],["/2023/03/28/Java/JVM/对象的实例化/index.html","5aafcd0d16560dbab9aec2564b22acba"],["/2023/04/01/Java/JVM/运行时数据区/index.html","4f9d407e2642e42824c40391de6e1a5a"],["/2023/04/04/Java/JVM/执行引擎/index.html","9c2b0ba167a8759e8e3ce87ccc7a133a"],["/2023/04/06/Java/JVM/对象引用/index.html","a7f171aabed866c9062786760d55ffc3"],["/2023/04/09/Java/JVM/垃圾回收/index.html","303736209d530638d68b1ba6ebb9d64e"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","a86926149e14fee120ec39c061556c37"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","5c9c8047857f0b3207a632d081c5c0cc"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","ba36dc3a09323a0068e6ce08601f803a"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","8b897516b4adeef80ab1c768c19f4262"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","f315b9d8f4901214568b22e439f4605a"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","f4496c9835bef1cfe41dfdb6cee538c1"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","bd71f089ce8bc926f6c6b07091b17eab"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","8196e3fab44a77f32f4e70b3f4fcffa2"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","e9d23432343a286755a9fe7a4d87bf94"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","aa7737dc0997f2400d50b3b7db8d015f"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","8eac204d54740cadd3030529bfb46752"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","d40e318043605964441058957f57d6e3"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","5ca39a781c8b6a1791c1985423fa1a08"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","cf0f9a51766f0040b21892e1458995af"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","2fe84b28da7d402944516c12876a7321"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","259b12cf947050f9ddc40e61d8208455"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","8f3e89c5be1491e7e66809bdffe934ca"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","0e22b4c8088d16cab736ad74e237c788"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","293b761a890378837e7a530e5883d5eb"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","4a271ae67e239c6ce61690dfd39eb1ee"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","0f5e7dcad5f5c76d132b8d448d145d78"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","6116b22f6dab7a44828aa7fb1da61867"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","79a5831b0df963ec4ef7c73ece196e70"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","d092ab861ecdb59e88a8adb2f2cb457f"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","595e6d75341244cb6e92ae7cac2918dd"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","9ab83ef9a040fb364583e5ba560393b4"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","8e2304f86510e9f45d1f5771213d8ffb"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","fbbf674cd30890f78744bb8128db97ae"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","98072bff5e265d8881b8ac4b3cc45a22"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","9c5d2a5309fff66ac928e0b2ee302224"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","3b8a4b286ba0b2a4c7340403fd3b7bc4"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","a98e4b64da694502e759a83485ab88f5"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","07c49fc16553c1dd26cf80737fc19751"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","730767f0d5d512760638618391e7dd89"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","6a963f0c8a62daab2f170bbe96ede79a"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","38721b9a4e92ee7c793d46350e992bfe"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","37ade7def7bb25ac3683011be4c6e381"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","6e73d3e5dc6310ebcef5f499227a81d1"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","668a7a3bed7e4664a921e20583aac602"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","0df50fc9d500e66943027b08bd4e5c22"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","b1b617343b8ea61ff580a009de299888"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","661b95bf3ab69c848237d81d09e1b772"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","713b1a7761723d0e65d0fb72dbf71e9f"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","c5a45d301553870128ee31ea9bccf4a2"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","c443d3cff7fbfa78be2c6566fea3dc81"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","a4e76374052d69d25a7cd12a6ae8a664"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","dc171ad4d08d5dd4e6f0b9219cd0ab3a"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","2b3e1a53c60237af2b9b6332e110cda9"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","e4983673dbd0a87571958b7f0811254c"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","f47946c86696a41a5ab55190e10b17fe"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","284ad29e3b3d61a3621ee8024b2cb6ba"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","05b0227559a2c66a870184da11d801dd"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","d563ffbe5d1686621c5895648661a71e"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","8f526b8b11ca4608bd12a483420b85b1"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","689958c48ca1b83fe15fb5d6edd49c30"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","bfa120da158124580c4d747273029fce"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","f281d546dbbb30eae166c483bb2ef2b2"],["/2023/09/04/中间件/Redis/Redis事务/index.html","1ea790e383591394635588405b21025e"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","f86c2757f4d212417fe1b510f5efb217"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","41a106932915567ddace8234a51e0ac2"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","ee4043a51593bf8dc6bdb475d40b07d0"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","1f5a484075cbed6380e04710f025c155"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","ae8921e9a577ce5275b1c8593bb18a18"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","4ef3acdeabbecd119a06f8769cee2c41"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","a94148b56c32a15776da540328b12aff"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","9ece20421bb5953320e3875db2ea5474"],["/2023/09/22/Java/NIO/零拷贝/index.html","ba0c1ada4e766741fd0c02216f38b6c0"],["/2023/09/24/系统设计/JWT认证/index.html","bed598d04841e8f886e09136bbb530b6"],["/2023/09/26/Java/NIO/Reactor模式/index.html","8aba0379f1c90cf05e556c8876da140f"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","92a29fc6c89b53f24efd8324f40bfc1b"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","83227fd6424ef53b2078895a07192b4d"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","5ca6dbe8f1658c0fe78d632b88e49080"],["/2023/10/09/Java/并发编程/共享问题/index.html","dd3da2c434fa6ada45cde0de8792063b"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","437610a5ec9672299abcaef758f40707"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","b582815feea9cc223d9b11e201c706c5"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","e5cb19835d6fc2ddc383b69e9f6f77aa"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","fed23cf8e5d680af2370091e97049fb2"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","e8038113595fc09abb8617c4e796a33a"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","4af9e9634f0e1aaae62222508992bc92"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","aedb961dbc0fa8b04392b79195998fa7"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","f3a0e96cfcf12f8e6ff12839c7095b67"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","707c8b3ddb7b7904c30f11ddfee6ab37"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","187f88543850f4d19adc633f2d7fa435"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","b975fcc3785bd6c846e5afc7b9c3fa65"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","f421d2e5f6976e5d1d2bf14a8a158f4e"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","e200e490b34979458b54062710c0b8a6"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","f941401185e19717d8bf9257757b9f23"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","488ade26197b11da8b60aa1aa1b8e584"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","c467f0e33863318e05cbe4d63d1e55c0"],["/2023/12/05/系统设计/开源协议/index.html","035ce873a8a85033e90796cc25ddf5ff"],["/2023/12/09/MockMvc/index.html","3d914db92fd11b7e302d85c2bc7aafd9"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","6c142799f0922df5271183f834d11a73"],["/2023/12/19/MySQL读写分离/index.html","e98613b58c05eec6bb2beb842c7082dc"],["/2023/12/22/MySQL分库分表/index.html","844d87599a4b17323ba904557c3151cb"],["/2023/12/27/利用NoSQL优化数据库/index.html","4a85120f4499c027a7bf04d87f127013"],["/2024/01/06/缓存概述/index.html","2ff13e3e736e64caef11da766fe7fb3e"],["/2024/01/11/缓存的读写策略/index.html","e315805e72cf030eefd089a184881b54"],["/2024/01/14/CDN静态资源加速/index.html","86d6bac5b629cfd159d391356deac234"],["/2024/01/18/消息队列延迟问题/index.html","ea21f559a9f924994096ac932c943621"],["/2024/01/22/高并发系统分布式服务方案/index.html","9acdcd9c67e7191c47ca420e0ba4325e"],["/2024/01/26/dubbo/index.html","b71392d64256c56421b4767b0a04662b"],["/2024/01/30/微服务基础/index.html","a66a45f273c83ae1f49077ca0f68b394"],["/2024/02/02/监控微服务调用/index.html","1abe0287928706046d95c286c934d779"],["/2024/02/13/微服务治理的手段/index.html","b9d95c4f9ea608fd8c14967c7f463e88"],["/404.html","748abe9eda6972d1c25df8c5cf9609d3"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","ba4ae52e0b7cd6e3492d2a298a80c6cc"],["/archives/2021/02/index.html","dbdb7a094da5c5c030a4f8fca32e2955"],["/archives/2021/03/index.html","066db1b4eccbd117e50c459d62b66ee4"],["/archives/2021/03/page/2/index.html","1a53197008ddcee321eaeaf8bff2652c"],["/archives/2021/03/page/3/index.html","b1cc7a0b6be7872fc660901ec1286c7b"],["/archives/2021/04/index.html","38f2a81ba39eb4a9d163c1688789ce90"],["/archives/2021/04/page/2/index.html","ca605ca03cc1bd22919fb8572eb8ee00"],["/archives/2021/05/index.html","dadc70dd8acbe864f26c68277c425741"],["/archives/2021/index.html","99b1a27544e1972cafab9a4793b6d0f9"],["/archives/2021/page/2/index.html","d942f66049e03e5858feec510a11ddb5"],["/archives/2021/page/3/index.html","757cdee41f2e64a3bfc06453aebd078f"],["/archives/2021/page/4/index.html","a8702255b2a8f45b0b2464ab9204ec7d"],["/archives/2021/page/5/index.html","39783e3cfc5df5c64177c1e54183b28d"],["/archives/2021/page/6/index.html","178012c7c2cca6de6c9b4ded81c3331c"],["/archives/2021/page/7/index.html","ce84ce9b15d0a2c1bc64540e520bc77b"],["/archives/2022/01/index.html","c0043c5bce90e71002792b88afe6d8ee"],["/archives/2022/04/index.html","b99a1cbc3350e81e2f2ce6933595ebc7"],["/archives/2022/08/index.html","d51aebd151f939d431ad25dab9764a97"],["/archives/2022/09/index.html","c86a1854b8f6acc82d48f8c675c0a56d"],["/archives/2022/09/page/2/index.html","ef6decbabb1a8e1ef69da7585129e854"],["/archives/2022/10/index.html","deb41f7e0b1cc351cd37ccb15c2d451d"],["/archives/2022/11/index.html","193a3c943cddda82210d7fe8cf6a2b8d"],["/archives/2022/12/index.html","ddc4192b066725244ae20c07337e7c18"],["/archives/2022/index.html","c3d3712378d193ddd58dcd9506117613"],["/archives/2022/page/2/index.html","0739f97fab7149c61153bb32c8b1901f"],["/archives/2022/page/3/index.html","61fc3cf07809bb010fc59dc984314336"],["/archives/2022/page/4/index.html","e1c28143b479f1381cb37f62eb89dd2e"],["/archives/2022/page/5/index.html","63c696f71f6d62aaf9d101b321e3f7de"],["/archives/2023/01/index.html","9ecc7523345c9514303c81804c91dfca"],["/archives/2023/02/index.html","9804f673444bea5e194c341969670a72"],["/archives/2023/03/index.html","85d2ced55516d411fa8c41ebdfe02248"],["/archives/2023/04/index.html","a981718139c4a6fc0fe68b26c962d02c"],["/archives/2023/04/page/2/index.html","e1266d5af05ae88c0cd2b0ea47cc9bbd"],["/archives/2023/05/index.html","033e83f59c0f6f8575b66b921289288c"],["/archives/2023/06/index.html","ab854523ba394621edeb20b6a4d6c9a8"],["/archives/2023/06/page/2/index.html","f6a133c0431c11bc7e90eceb2dd2a4bf"],["/archives/2023/07/index.html","98131addf837330949da03ac8f501ab3"],["/archives/2023/07/page/2/index.html","1c225777a01803916be21beb9d549bdc"],["/archives/2023/08/index.html","07ac3993500f212eae2dc1b911b5b090"],["/archives/2023/08/page/2/index.html","b14496fcf6e44b8974da0c951cb932f8"],["/archives/2023/09/index.html","b7aceb6f5f19c0b47e08dd4fba3e0e60"],["/archives/2023/09/page/2/index.html","883d351631657004f1da9c83a19bfcb4"],["/archives/2023/10/index.html","6ec672f820ebff0a09ea7be69aa50559"],["/archives/2023/11/index.html","8cf9d89ea52fab152dd1854a99f6efe9"],["/archives/2023/12/index.html","ea9cdbf2847b53066ec138e4c70bdcce"],["/archives/2023/index.html","e2c038cbbe22acc462cd4a70729ed868"],["/archives/2023/page/10/index.html","466534f23522c59ec5b0e167a21c5030"],["/archives/2023/page/11/index.html","2267c2bcbd2eb6f5da501845894e6205"],["/archives/2023/page/12/index.html","be9a8e7781ce1890c26cda46d763ecb2"],["/archives/2023/page/2/index.html","e68f5b94b1c6cf43d833a596530398bc"],["/archives/2023/page/3/index.html","1b74a044a5ec5174d724c291cd788c6d"],["/archives/2023/page/4/index.html","b93d62b0eaf3be7d38e3680382e7d997"],["/archives/2023/page/5/index.html","904b01e0d74b16b22ba8b7a0267baf37"],["/archives/2023/page/6/index.html","09a027375d16fa4f9279b44bbe9e48ef"],["/archives/2023/page/7/index.html","b881e661b6527889268d77af8bb308e2"],["/archives/2023/page/8/index.html","6bec9f35e4db383940e976685ba7a4ef"],["/archives/2023/page/9/index.html","e81b593198499d0b9d9db04e37b48de2"],["/archives/2024/01/index.html","3eebdbbff2d9ae05e689afcc1f1a3710"],["/archives/2024/02/index.html","f96dab691115d93b3b35e93313779b21"],["/archives/2024/index.html","aa8169cfe7e2184d8108a62a5c8a02a2"],["/archives/index.html","9e279f50b019f0e56e834bb1f0ecfa47"],["/archives/page/10/index.html","c5c08bed21c8104419099f32ea3c850a"],["/archives/page/11/index.html","f8b2399a5c9dd98276b6d96c7adea288"],["/archives/page/12/index.html","69d6835448e8b46eeb8f5ded4ac81f3e"],["/archives/page/13/index.html","f6f995858555f313f2bcc1530b7ef2f3"],["/archives/page/14/index.html","3eec9036388077ba21746c1840b88e20"],["/archives/page/15/index.html","85aeaa8309987966aeb372a6c18a03ed"],["/archives/page/16/index.html","69457d1b79aaf6bb5fc8a7e58de15687"],["/archives/page/17/index.html","cb6e4e49c540b61e14c58a552506b2b9"],["/archives/page/18/index.html","b2a0d39115ba21878c612f41462b2da3"],["/archives/page/19/index.html","ec2751a67f94e2416c1de49f2fdcfeee"],["/archives/page/2/index.html","f489aa95af4b28144ea15d7a27618c9a"],["/archives/page/20/index.html","7ea551dc1735ab7300a2bb116c0ce41d"],["/archives/page/21/index.html","2c223c70e9bb5b47ed8659045015afd6"],["/archives/page/22/index.html","e2756ea8f4d27a9654f1faa1e2f1bf23"],["/archives/page/23/index.html","de0bc3e97b50d583e48890250fe5a63b"],["/archives/page/3/index.html","3e24933faa30aad7002ad161a0799a1d"],["/archives/page/4/index.html","be9bba3a7f187bebd4568173488e67e1"],["/archives/page/5/index.html","44dfb680bb281dd45d920ae91b02a331"],["/archives/page/6/index.html","25e55825f5467c6069a2f35fde1d53fe"],["/archives/page/7/index.html","11f16d40d89625d8b0607bd7ef596b04"],["/archives/page/8/index.html","1be1ba35ba50dcd8cd07713ced3b6194"],["/archives/page/9/index.html","b975c8f0ffd11f2526cbdeaba3d8c030"],["/categories/Devops/CICD/index.html","35629165fd5ca51222aa8a646e507899"],["/categories/Devops/Linux/index.html","ccd6ead198cda23fef028ea9ad04a887"],["/categories/Devops/index.html","2cf8c9cc2e60c0b726d0190801b2504e"],["/categories/Java/JVM/index.html","66d0ba2da36c3b1bd89a2c614b379b8a"],["/categories/Java/Java基础/index.html","e51cf6e3f8ed744ebc7e40005b5de51a"],["/categories/Java/NIO/index.html","c42b3005ae3332b9ce9e6073dea3a886"],["/categories/Java/NIO/原生NIO/index.html","1d3461576c0ad4491ae4c6fc319429dd"],["/categories/Java/NIO/文件操作工具类/index.html","e2f096515f26c980949df59f092395a2"],["/categories/Java/index.html","b408012b444c2a3d284c0a25eb2aa620"],["/categories/Java/page/2/index.html","120819eeedeb461492febdb9870693c1"],["/categories/Java/并发编程/index.html","95e4895452016b0788d8cceb16ff0933"],["/categories/Spring全家桶/Spring-Security/index.html","bcf9257bff4a71e65bc05e62f3475133"],["/categories/Spring全家桶/Spring/index.html","a444f6454241ddb97b256ff63a01f6b9"],["/categories/Spring全家桶/SpringBoot/index.html","dc6efc3b8c167353524e66e15c9c26a2"],["/categories/Spring全家桶/SpringCloud/index.html","490a1de0ef0a0337e0ec7d56f8bc7cff"],["/categories/Spring全家桶/SpringMVC/index.html","1669aabe7a0200b98f6bcde2bf791e76"],["/categories/Spring全家桶/index.html","09888d13de8f8045cf6b7357a2658e2f"],["/categories/Spring全家桶/page/2/index.html","22f4d01039c65a1fdf47232ea6baaecc"],["/categories/index.html","11c93840984334816c36582141808b9d"],["/categories/中间件/Dubbo/index.html","8bd7a241687ce7720f7a03f6e7cf4e7b"],["/categories/中间件/ElasticSearch/index.html","d4c7faf419c3b5a675e76407cb0f1b09"],["/categories/中间件/Netty/index.html","3949bd57d5eafb56c01ea3de401943dc"],["/categories/中间件/Redis/index.html","db35319c12237473518b69dbc3236743"],["/categories/中间件/Redis/page/2/index.html","d59768d90b19657e80713bfc970c2241"],["/categories/中间件/Redis/page/3/index.html","9e05bde0b51e8b762e8cf13a44c619a3"],["/categories/中间件/index.html","8e260815c15623ccf31c28cc05c55b5b"],["/categories/中间件/page/2/index.html","6ccb1068b440d69cc38038df851e011a"],["/categories/中间件/page/3/index.html","25e8f852e18a7a72ef926de4513f5701"],["/categories/中间件/page/4/index.html","f9914941207d24bd100f8d5b1640aba3"],["/categories/中间件/消息队列/RabbitMQ/index.html","ce3a29547bba3eb14f0d40db960556da"],["/categories/中间件/消息队列/index.html","3c90554e7c1b995c78ec98cf1f50d0c8"],["/categories/前端/Mock/index.html","d3049569aa2a015ea8aa9b52793054f8"],["/categories/前端/Promise/index.html","e35f76e6d2d4f699eb3237a1b124c13e"],["/categories/前端/Vue/index.html","e03ef194e1c0757650310149bfb55263"],["/categories/前端/index.html","2ff987e2cbb664b7ff327ef1eaf1ac5a"],["/categories/前端/jQuery/index.html","0b18332158d2886dc306ced0c165bf09"],["/categories/前端/page/2/index.html","91514c13086af83dc7833a3f65d940b6"],["/categories/前端/原生基础/index.html","0ba274600a98767151c949205c1c0b90"],["/categories/前端/异步通信/index.html","fa5b212ba81252ab1cab6ff6db119930"],["/categories/工具使用/Git/index.html","f3a39732b93752311c1f38df2e5ec210"],["/categories/工具使用/index.html","b4ac3ce5cbac2f7565dc70854f26ab2f"],["/categories/工具使用/markdown/index.html","a95e9b9dd6ce93204d0d027d70d42be7"],["/categories/工具的使用/Docker/index.html","99640e6c3add43324b2d0dbfc3315b17"],["/categories/工具的使用/Nginx/index.html","d166e6c1d68b4f2d59341e76d0dd6436"],["/categories/工具的使用/Swagger/index.html","c0d470fadec95ef993734a3afeb050b6"],["/categories/工具的使用/index.html","f9ed1f13ddce8852c870246d8595efaf"],["/categories/工具的使用/博客搭建/index.html","acd831d471ef839d0b2ca819d096ac0b"],["/categories/数据库/MongoDB/index.html","ec5e2943e04b9306c44c784827a86e38"],["/categories/数据库/MySQL/index.html","8d0053d48ae81ef216cc1302913030d6"],["/categories/数据库/MySQL/page/2/index.html","7482c3a3156b2af3d12310ca6b7cd7a8"],["/categories/数据库/MySQL/page/3/index.html","e8e1b2f8e2eac1d72584563b9268aec1"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","2865018d3bd45640e4cfd79bb868a65e"],["/categories/数据库/ORM持久层框架/index.html","d15c526e715ed984e14faec9fd0ec3ac"],["/categories/数据库/index.html","5a7aff7f6d257c097df08d642f167cd9"],["/categories/数据库/page/2/index.html","3ab9ca0ec410d9a8a7ce5531f9c86c09"],["/categories/数据库/page/3/index.html","7e9bc953f7700dc310d250d1c8c06ca3"],["/categories/系统设计/DDD领域模型/index.html","f66640d52e238a68f31d69a8c8ebf7bd"],["/categories/系统设计/index.html","0faf5c1e6434023a85083f1143c5cbfa"],["/categories/系统设计/page/2/index.html","86001faf75e9eaceef4e338d485d070c"],["/categories/系统设计/page/3/index.html","2fe44a0b265a4373cd26360d5a6e5b8f"],["/categories/系统设计/page/4/index.html","066e80254f5b5581f2504ece71d64913"],["/categories/系统设计/page/5/index.html","d4326bc6b2ac9ab2db3bef95037083c4"],["/categories/系统设计/分布式权限认证/index.html","66ef4368b19e4991a7fe15b71850ec5e"],["/categories/系统设计/分布式系统/index.html","9d8bb3bafc89d96f61d4a7bd39a3eba0"],["/categories/系统设计/分布式系统/page/2/index.html","88015a7a914688c39d3abd34e85e9b0b"],["/categories/系统设计/分布式系统/page/3/index.html","2c4e2b302b4a6b4c14b8177038c6423b"],["/categories/系统设计/微服务/index.html","4dd227801706742a11b55617a46d5691"],["/categories/系统设计/数据库优化/index.html","6ca32d79e185f2ad2505797692aa4a0f"],["/categories/系统设计/设计模式/index.html","87fbabc6907c866157fb624395a17200"],["/categories/系统设计/设计模式/page/2/index.html","2c6f8ca4e407b25cf17a5abf13e03ab7"],["/categories/计算机基础/index.html","63e7af18186432dc3fdac5558f576df1"],["/categories/计算机基础/page/2/index.html","113d508b56e15ed760d869dabf5b6aee"],["/categories/计算机基础/page/3/index.html","f2783985d4c8202353d7dd0a4a12e3a7"],["/categories/计算机基础/page/4/index.html","ac44072cf1373a1a362b804a5aa52616"],["/categories/计算机基础/page/5/index.html","01696fde31c55e4aaf241815053fc67a"],["/categories/计算机基础/page/6/index.html","207aeb0716cfc35084fda0da9ac48f03"],["/categories/计算机基础/操作系统/index.html","17db90e8f4351118784bdea8a4d1996c"],["/categories/计算机基础/数据结构与算法/index.html","cb30621463b8f9b8ea512cf77dda7ab6"],["/categories/计算机基础/数据结构与算法/page/2/index.html","50279a2c99e35c9018bc4e8567d75bf9"],["/categories/计算机基础/数据结构与算法/page/3/index.html","d5e4bc48a07662db9632e4d2d5403de1"],["/categories/计算机基础/数据结构与算法/page/4/index.html","b2ef8eec4393aea0ac3ff5fecfbc83ce"],["/categories/计算机基础/数据结构与算法/page/5/index.html","f73ac245b4ecbc07a84704669b496950"],["/categories/计算机基础/计算机网络/index.html","f4dda495fe6dfdbf0222ad818be3033a"],["/css/index.css","2af5ea34362e0b34f799106b2659ad50"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","4e2c0a714546296dfcb72bddf877ce6e"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","a28141689f8ba99523e1dc8d7729aaf1"],["/messageboard/index.html","2e482ddff4b601a130261dcd74dca751"],["/page/10/index.html","7bdc786b64a55843e8d82ef720771078"],["/page/11/index.html","03c9a93d783c5b43b18208e824dbf374"],["/page/12/index.html","c65191df196a464edce0091ae2732733"],["/page/13/index.html","beeef40cd2105839df2602ca7acfb675"],["/page/14/index.html","be1c9a3a4c69e132bd9e9ebad7cd7334"],["/page/15/index.html","4153fdc548827d461d84e18649590732"],["/page/16/index.html","bea4619ec9ab48c15d15c2e39045c306"],["/page/17/index.html","b4d95cfc39f9d9fe0393cea22cea4339"],["/page/18/index.html","3fc7a7703a1fdf618d00abba88aecd74"],["/page/19/index.html","ad9308460434a0b4031e70ff57fcd750"],["/page/2/index.html","bb294f8624993eb911369182d5a2f2c9"],["/page/20/index.html","c5a32185aebc382a2e6f688304358ded"],["/page/21/index.html","e49a24e38b07d9d17bf6be6095b413a0"],["/page/22/index.html","c3000733b8b14140b91b80fa02ed3047"],["/page/23/index.html","623f872adad7cc078d2419c1e09fbc7a"],["/page/3/index.html","d642305108ff1dd81114eef47903015b"],["/page/4/index.html","324cb012fc0b62e27205e15cf4104c59"],["/page/5/index.html","c16dc94f955caf25a89f40d0b5280305"],["/page/6/index.html","efbfecec22173f29226c364c05a2932c"],["/page/7/index.html","9b806fcaf3a3341ef49f33f55714c3a8"],["/page/8/index.html","9eb21baa5014900e77e4eb3c495d5657"],["/page/9/index.html","8e4ee9442020fc93834428d1efca61a7"],["/sw-register.js","e30fd7a1f3c7578238e8d6805cfa6eb7"],["/tags/Ajax/index.html","ea00d1ab16ceec7ba777226e7bfd6111"],["/tags/Axios/index.html","3a4a25420a56c4c8649499deb5608bdb"],["/tags/BASE理论/index.html","dcb4aa750b08216450bb0535ff452eda"],["/tags/CAP定理/index.html","7e3728ce7f3525e85256e2ad43c0d2fb"],["/tags/CICD/index.html","5ea454e27d090db6dc9f2a1299068ae2"],["/tags/DDD领域模型/index.html","d1bcfbe80977c4e08e054c3e768807ff"],["/tags/Docker/index.html","2ac4cd4ed7640ae13d131ead62b7bd54"],["/tags/Dubbo/index.html","e77cc6c775e9b0a35f30aacf032c8504"],["/tags/ELK/index.html","f1ca9c5e3687ed2821d29757afeedba2"],["/tags/ElasticSearch/index.html","9d1caffaed13dbd59f4f94ced06ef6d2"],["/tags/Git/index.html","7898afa0ba99065f8f5584f36c9b67b9"],["/tags/H5/index.html","68cf9ee7590216085819a475ed2cd248"],["/tags/JVM/index.html","cf9c7b4fd2dfe5ee6d9b17adcb49b18e"],["/tags/JVM内存模型/index.html","bc0907925ba74393ca57f45bd61f8c35"],["/tags/JVM执行引擎/index.html","6b1175f2c017a346d56f0d441b27a0d8"],["/tags/JavaScript/index.html","a0f82b91859a298cd9cc17cad864ee42"],["/tags/Java内存模型/index.html","7d20c2edbe650ea54568bb63f451a8be"],["/tags/Java进程线程/index.html","cab82bfb91fccc6907fa90ec97bfaf54"],["/tags/Kibana/index.html","f8010480f932e3ebe8c5cde23863347d"],["/tags/LeetCode/index.html","210440377bc8551cdebdbbb6dce5323b"],["/tags/LeetCode/page/2/index.html","224473f18d26baff53604b8ae0142647"],["/tags/LeetCode/page/3/index.html","a0d135be6b473e824b3cc8f98abce679"],["/tags/Linux/index.html","da0a35126235f176ca2779362570ed73"],["/tags/Logstash/index.html","ce7936296aa37e174670aa0f91dd9dc8"],["/tags/Mock/index.html","68323b127f6990b1d0fb5e8f636a0860"],["/tags/MockMvc/index.html","0dce7b0a4e1ee7527884a3d965a99b1c"],["/tags/MongoDB/index.html","9b038b6596b21c6004c69bdc62d3ddac"],["/tags/MySQL-事务/index.html","6321d326d729fdf6d530466682245d87"],["/tags/MySQL-数据类型/index.html","696c430f7c8f242ff38bfc3fffc49af1"],["/tags/MySQL-日志/index.html","7ce4525ff729cf63c99eb49ba23cf5c7"],["/tags/MySQL-索引/index.html","7e9c4f4ea15757f84b8beec2c3257b95"],["/tags/MySQL-锁/index.html","fcc795779a9b608a3f8e46cad5ea48b5"],["/tags/MySQL/index.html","e68e0b51cee0c5e5ff47bd3a26bf1946"],["/tags/MySQL/page/2/index.html","0e2c7cc1f4f72ad0c330313cd0ac444b"],["/tags/MySQL分库分表/index.html","ce9aec48d2b387eab35bab10adabcf37"],["/tags/MySQL读写分离/index.html","bda6b345abf8086ed0d345a0546ff30e"],["/tags/Mybatis/index.html","85d080773cb8c4b8813fcc0573b29135"],["/tags/MybatisPlus/index.html","06f745326f913ca3c9c740c4e6797deb"],["/tags/NIO/index.html","5ac28d6136f282b45260371bbbea880f"],["/tags/Netty/index.html","16587c77f106d4068c664bebddf27b43"],["/tags/Nginx/index.html","c2aef1337005fbe25067e84ffa8440e5"],["/tags/NoSQL/index.html","a745e7eae9da02b7837d7895a76a009e"],["/tags/Promise/index.html","a3690ba499194e6239112a7ab62d9ea9"],["/tags/RabbitMQ/index.html","d9fb57ca088c22c4346c0f83ba1211d4"],["/tags/Redis/index.html","39ffc988160181e8e686915da59523e6"],["/tags/Redis/page/2/index.html","788f8816d4a12b54d6494c084589dc9e"],["/tags/Redis/page/3/index.html","27d7f3b28e86fa8323969a09d493ad36"],["/tags/SSM/index.html","6fa46fa96034e145a703a8749e3851af"],["/tags/Spring-Security/index.html","01f1c1874723eb27d9be3d5a3aee86a4"],["/tags/Spring/index.html","cfdaefa71bf60149fa243441ce1d404d"],["/tags/SpringBoot/index.html","4b9bc8743b787b092b5358a69bcca6eb"],["/tags/SpringCloud/index.html","fae59407917eded236796897d941cf3c"],["/tags/SpringMVC/index.html","3d6f778ba9c865327dc4d5e1779556d3"],["/tags/Swagger/index.html","e4cecaaec38de915eea43c53bd372be9"],["/tags/hexo/index.html","c7c09d283484dd681e56fb1ff5de4473"],["/tags/index.html","9c3f7b17afb79c92b49c78ae9e3e176c"],["/tags/jQuery/index.html","e58a225e0d3f72e10e7f221851b4bbf1"],["/tags/java/index.html","95f68131ba2cf7b88fb1123c0ae4660c"],["/tags/markdown/index.html","183ad5a9f7bad676cb34b39ecc3f22ac"],["/tags/rpc框架/index.html","cfc0095a78e852011097f319e44689d0"],["/tags/typora/index.html","9676dddedc8e242606d580f2375abeeb"],["/tags/vue/index.html","40bb544f3facf04b9feb1c099ff9383a"],["/tags/享元模式/index.html","aa0392c3d9dae85650076c7d7fd857e9"],["/tags/代理模式/index.html","1206f90e8acbcd1a87a334d794030b52"],["/tags/内存管理/index.html","6c33b796cc8f9e4de88ac80ab2f91172"],["/tags/分布式/index.html","a9b33f0c255a4d73dff4d223b13781e2"],["/tags/分布式一致性算法/index.html","27fe88fabdb1a4d4a2e21ba31862211e"],["/tags/分布式系统/index.html","2645097e2bad550633408fb1a02176f7"],["/tags/分布式系统/page/2/index.html","d5cafd6d9d23bb22006bf13b82004380"],["/tags/分布式系统/page/3/index.html","95e3852015b9a97274362ac36e37a967"],["/tags/前端/index.html","1c3a38d3b5a32779791a211eb9a76774"],["/tags/前端/page/2/index.html","8f365aad5e5c225229e14ea0128f04d0"],["/tags/动态通知/index.html","99b8cfe149f0fadfd2f1e2647d7c75cf"],["/tags/博客/index.html","1a6188551dea88dcf2f1cb61aed93dbe"],["/tags/后端/index.html","c1fa886c041b0d97ea6d14b50dfc2ddc"],["/tags/外观模式/index.html","287fea3f37545d6aed8dfdff6fa0970c"],["/tags/多级缓存架构/index.html","d45fd85223e79d09b6ca5359b243ca40"],["/tags/多线程设计模式/index.html","fb5912a13b8dc467d828c73f4b913030"],["/tags/容器技术/index.html","1c2e91bfd998ecbb8c327c5fa346eddd"],["/tags/工厂方法/index.html","f2755435733eee119cb4039ef4d50947"],["/tags/开源协议/index.html","519a06fa0ef46b02043a8307ba38537e"],["/tags/异构同步/index.html","91d89a0895f96dc81da1812cd127b15a"],["/tags/微服务/index.html","70c88011c7dcb06d137a0a790f553181"],["/tags/微服务基础/index.html","a9eea8c32bbcb4daade102a9f2215792"],["/tags/抽象工厂/index.html","c7d512fa255e543ed9ca5665fcf2222a"],["/tags/持续集成持续部署/index.html","6d9c75b93147f55d8cab1e3d1fc35168"],["/tags/接口幂等性/index.html","7f0caf798e0188f0c941e4f9a5910829"],["/tags/搜索引擎/index.html","63e354b5e68a800f0cae1add141dcdd7"],["/tags/操作系统/index.html","6fffbe84b781f34d56f36c4272ab8fb2"],["/tags/数据库/index.html","8c96d2f6805946220f1bdbb7ab7f44ae"],["/tags/数据库/page/2/index.html","b3aa249a7b9bf5b0cdf2fd203234f201"],["/tags/数据库/page/3/index.html","9edc252898aa79af893d0ee498ff6047"],["/tags/数据结构与算法/index.html","55a2a8e431e0cf9f4fc1274753cf80bb"],["/tags/数据结构与算法/page/2/index.html","7b2710438a7fb4f5bb9efce17d4901e6"],["/tags/文件操作/index.html","333af2176366f062d27bf370a71f17c0"],["/tags/日志/index.html","0046199e1f28fd70f83c85801bfad7d6"],["/tags/服务器/index.html","8d580ebf3b81ef806b4a3064de9e3391"],["/tags/服务治理/index.html","ac02b7f99b84e86ce77c558b2c02c371"],["/tags/权限认证/index.html","3d540252debf34226fffc407065fba1a"],["/tags/架构分层/index.html","4efa8a11309b40f6fcf8b8a7a3877a10"],["/tags/桥接模式/index.html","7a4c095ba100aa25095056f2e621c466"],["/tags/模板方法模式/index.html","a444f10f5e0a428cca3d09a1c1920e71"],["/tags/死锁/index.html","ccdc32c72590095d47e663c60c00b4dc"],["/tags/池化技术/index.html","6d474df64bcdddd0930881975a24403b"],["/tags/消息队列/index.html","c70dadcf7f91aac4e307c9ac9f21278d"],["/tags/版本控制/index.html","6c943a4c61ed6e58f11dea8f48ecf8b4"],["/tags/监控微服务调用/index.html","b55e82a776714c6ad452b7e854e9a8a5"],["/tags/策略模式/index.html","e12e3a44e660b84287b795da14fe079a"],["/tags/简单工厂/index.html","982dc7aaa89cc1b1d61a6c800cefdc63"],["/tags/算法/index.html","69726ed13c72993f61efe9c2e3cad828"],["/tags/线程活跃性问题/index.html","f1c0319d6b9c3f2970651848091c3673"],["/tags/组件化/index.html","c82afbb75c8788733fcb00d0d3812287"],["/tags/经典限流算法/index.html","3e98f045d5623d8f8a19edc9497f3754"],["/tags/缓存/index.html","327a790207538ce4082e220bd01e58f3"],["/tags/缓存/page/2/index.html","32e28a1ba78edd982127884db601d92e"],["/tags/缓存/page/3/index.html","99b51f914b892af1f7bb878add25dbbd"],["/tags/观察者模式/index.html","c38b2485d12112471f5e679605ee46c6"],["/tags/计算机网络/index.html","01a6b54bcbdfb3ae6ac63e8cfe9a8d77"],["/tags/设计模式/index.html","3bd9904b5f91e804a0266764f67f9a06"],["/tags/设计模式/page/2/index.html","348231c3aad212ca9b04c8670c866c2d"],["/tags/设计目标/index.html","591001bc9ebf1d14019a59dc8ff242ec"],["/tags/资源共享问题/index.html","82dc51f53561fa08c7bf2bd6e29e6621"],["/tags/进程管理/index.html","a1b0297752826ca28658d77cff55a03f"],["/tags/适配器模式/index.html","c36889d3a2225c6a18f87add2bd61e44"],["/tags/通用设计方法/index.html","08ea20ce593eac5334e37005b38f82b1"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
