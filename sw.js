/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","c45aa5a061acb055b4cd1bcf741eb7bd"],["/2021/02/22/工具的使用/博客的搭建/index.html","f3b6f455fff4965fc6fc7c107b318b73"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","5c0c34fe8cc225e4066223aef8a74a93"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","c0cf7aa416315c8df11fdab659f27b5f"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","6a86dc1492f8413325940297fa44883c"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","4872523592b9644383b652cee568fcb1"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","4905d937b542dfad81ef56802aa9bd87"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","4e12d6d2c5e148f1e2ac1c2b81ecdd96"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","ae887bb7d1a7537fb321738a710a4148"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","bb4448528b84c5ec9e89813b26a3cf5f"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","a842a30e83c35ef2162d1a01b15b1c08"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","614394e78a627052cd35fd2b844f74db"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","4343bbba7c765d94a2bbc762afc2c372"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","88f44ff34b6e694aade3f7ebfafb5149"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","2eeca4a22fe437b947499def63e08506"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","eb6db3d53b76aecdced3a01ec78fc427"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","122ea1318d50e531276aea3858123383"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","cd237ea9e4315ca5cfdebfba17946455"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","0733f016fbab2fab052712341ebf5274"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","74f4cb01b55be83f0591281a04dcc0f6"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","fe51653e2f42e231425b211ab25972e6"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","16a18118f3da13493c6228daaae3ff4e"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","ed1d9dd007145ad5f1724fdd68c8227a"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","b19a0864f4eef4a234fa2f4623a469d7"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","f24ba1ff49a9ba7d96d49e77a5c3952e"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","83714c61d9c1a4c3906c174d4513ecd4"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","51f3cc82694eba7af4e554e50495c626"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","de40c031179580785cc95ebc2a03661b"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","76f173a761820916fe91e2820af16a90"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","3a8d841576b48cec376c16e10d7d8aca"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","e50ab1d06e5228d796f8ba8b2ca1c015"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","904c889369a6bdf6d080d6c0852452f0"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","157311d5261391eafaffe6e080c09263"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","7be625020130ab51d7bdd5a79102887b"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","2d161f78412bccfdd64a47a88715c421"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","55ec2e624f6e4d38e91bfc51e88d39e3"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","ca79f018ad99764d0855c3a068f0acdb"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","8c71f2cd9e3bcd1163a70b514f549bcd"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","4389b97d0c5ebad2f2c30334cbbf5b0d"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","c182926c66ba9d836559b29b8782a25c"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","2b392aa9200ab58d21aa2b64d910b17c"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","3a635dc1d7247d5127cef48dd81e6ef7"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","8dc100d11f59cd6feecaee115b6e45aa"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","8b358e08316af40b4c0bcc88f453970d"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","ce6164123b3be3d728571c0099cacfc2"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","83effbc78fa5456b2560d595bfe602d5"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","828712d32bf16f679dd3ad18b1b4b14d"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","ad0386097b7cc9741259998dbf8e128b"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","7bf549d379a3351d9a21ed4ca630bf7a"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","faa47cecbf7009b906bac47a68eb3a23"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","57ca168a2c63057df55d790c1f719b37"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","bffdb99c79cc93d7a627c94394d4d69d"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","c65ed743a823ff975973e2b30bf125f5"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","7090e5121521922afa57bb39aa339fd9"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","c62e8e48c4c12418e8402fa9641ef73e"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","db76d0001e298cc9c49f758e9ab79cca"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","d1699a99af72c18e4f9a66d1a6b44f7f"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","cf8e0fa34065cdfb6da09ae268bda2ea"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","b080543f38f1ab32e4af5089200a5c5b"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","d685654f3794863367a12d14105853ed"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","6464fa254a9aae155113311cd583f8b3"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","b21326ec73bdb9228464cf5e9ce87d43"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","24b1a9dfa3c93a1acfc3ffdd190512d2"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","7773764832230d049453ed4835539c78"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","332a392a8da72a2699b06029cdf01af0"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","33afcf5deb2f334aa010f508be0d0fa9"],["/2022/08/17/前端/jQuery/index.html","8878af0b0db50a377f634da933f7328f"],["/2022/08/19/前端/JavaScript/index.html","0dff4cf9a8c8f356513ea2f992bac5fe"],["/2022/08/22/前端/Ajax/index.html","6560ad76b3d126b66f33279a0a055e5b"],["/2022/08/23/前端/Promise/index.html","ebfaf2ff9d1444749871df1fc07e8250"],["/2022/08/24/前端/Axios/index.html","8dd573ea7e3749a4b1697a1fac2e3808"],["/2022/08/25/前端/H5本地存储/index.html","71b2d35d839569c3b007301d1ac0bdab"],["/2022/08/26/前端/mock/index.html","c315a81c1ba1c5bbcabaf7f607a7b991"],["/2022/08/31/前端/vue/VueJs/index.html","2ff2b58132021e9022115b23b8d00907"],["/2022/09/01/前端/vue/vue组件化/index.html","afc1637537fe08be93de3929aea60443"],["/2022/09/04/前端/vue/VueCLI/index.html","966fa7fb037e2aed0924e79d90f61b8e"],["/2022/09/07/前端/vue/vue实现动画/index.html","2abcea639188c01ba91fd88d7b2f5a65"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","ed40cc8085ea17a0633f1fdbb9b3dd9e"],["/2022/09/10/前端/vue/Vue异步请求/index.html","57e6dad5c93e52b1d4f26b4876f4c5a1"],["/2022/09/11/前端/vue/vue-Router/index.html","48794b7a14bc708b3d2d9b6e38cf6a1f"],["/2022/09/13/前端/vue/Vuex/index.html","b152600f84330414e13e2b99b9cd68a9"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","7631c6927c1feded4da264f0178020c9"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","adb62d0707407e53573b235d29a744f7"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","5990dee8c9a51d69e3720eaf72df5c8d"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","797faf57ad583b7db939adb0b044683d"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","e7cd133490a32a9dfdbfbcc1854181b5"],["/2022/09/28/DevOps/Linux/Linux/index.html","1b1bd9dcb65f56abaa72ead28c3e236b"],["/2022/10/02/中间件/Redis/redis基础/index.html","a59938b206e87d5e085b156405c4c9f7"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","61ac755ad8368010dc188764912e5e7f"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","ca52d7e2db4f5e37bca9787bb44c7732"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","1c7eb7488966c4e8bd85b23b0274c574"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","57e8f61e31ec87f825b0bb0633dbce9e"],["/2022/10/17/中间件/Redis/Redis集群/index.html","081397f26eeb75d4aa9498b2999247b8"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","66a25f3b3c0a810fd8d67d027bed1f09"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","adfd029eaaaed0c38700ce45d2f4fde8"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","67d74ae6e456e1e10eba45180458e4a2"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","3feffc58e6ba34f12143faa48d8f9a32"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","ce23aedc2b18430b4332817eb621ccad"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","a11161be1ff88eb72cbd19c76206b7c1"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","5404477fc30589f3c10bd56ec93044b2"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","ee1b0bf6400d6b04dacecfae531d0efb"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","7e0a599c1412a31069624b6d677d8ebe"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","49ca6c5219f598e9d7773de8512f0f0c"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","84e63ed5e986b8e43dfe9719351a177f"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","1bb4e2a25b4daf1745fe3c59694845df"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","b996eddb283508e29d05b3d5b31a94e1"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","fb84f86cdeeb4ef671432f030994aa9c"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","eb57a89daf2aca39976e4c3dfa495f97"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","e0edbe059a49c90b16d5e0164f0c4909"],["/2023/03/10/DevOps/CICD/CICD/index.html","b30568f08509170078e465adc3840761"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","85fd2d1efbc783cd53b2978753a7f0cc"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","8ace4aab2365dc46d5bdaea322bad64e"],["/2023/03/13/Java/NIO/NIO/index.html","b4e6ffdb91a5d1264bf6d110ba203e94"],["/2023/03/14/Java/NIO/Netty/index.html","3e1f908ceba6a7a42f3e42ce85417202"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","22d487304f63fd29de405c189799c47f"],["/2023/03/17/系统设计/分布式系统认证/index.html","67854aeffa36049a73ef006285b427b9"],["/2023/03/19/Java/JVM/JVM概述/index.html","e1298231435445d80d63e6792938c19f"],["/2023/03/23/Java/JVM/类的加载过程/index.html","79cc787f247b942115251ad2e09a75ad"],["/2023/03/28/Java/JVM/对象的实例化/index.html","678de87045e9c3d16f2ae4cf36124303"],["/2023/04/01/Java/JVM/运行时数据区/index.html","28b2c3056ebfe994995dac7556729ac2"],["/2023/04/04/Java/JVM/执行引擎/index.html","fa1b0b310809d0801c146f0a7be901c0"],["/2023/04/06/Java/JVM/对象引用/index.html","ea2bddcf7cf5e4eb589a8d18ec4f4072"],["/2023/04/09/Java/JVM/垃圾回收/index.html","fc806e14925dad9732f5021c76ae84a8"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","625718497b029c1f7d9ce5d2a0c15a47"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","4e102576733d4f83a0da6949a65d9196"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","98f7c6edc336b717d7989dab077c7775"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","2eb57e147c99d4d80a224826e0b988a7"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","307209b04e4f5be88d0a410c13c46b59"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","951cc9029aef3e9f0116d9f0d66b94e7"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","556b93f6d42e97d26430002a91e2f156"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","94d883aa91efa6c09fdaf49985ca9ed3"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","ee2c5895d40a196faef9386c6ffad32f"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","6e639459cf6d8e197c916fa307eb6ac7"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","03d763563c47c8060af0e2cd294f5d12"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","72ba5ddb55233ae6f2213ae7d5ed5c13"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","1848d537baef3e7120426e3da96cfe56"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","ed21d400fe18bbaa015adb1a823a1fe9"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","cb21b4cb8e473b047786779117d3b5d9"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","c3e3269fa609b33d0bacf95fbf0316aa"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","e1d47b9680cdc68f8ac26cf1a7001d66"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","cf2cc6c50644f50a72a77dea75badcfd"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","a1eb07657ffa08bc353c6649eca4a7cb"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","b1cb595b240aa159971261e082cb4408"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","fd0aa4496e42b645ff956b7abac35c71"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","1c44f5d57033265a8b5325a92e6e3e60"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","14531e7c95214fb372ba204197b70940"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","d1e0d60ef6e2ef7d174aa053d22de20f"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","beb0c3286d660c4d64049ccc5752374d"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","4990cd6146d7c3604c9c04d56a8f9db6"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","edaa2a2ea31857f38220dc043b54d521"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","bc3132da64e396bb13355309383433a0"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","83c2783b3ed4b1dd2d76ca1d1b487edc"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","b9ce7ea76a2e80f3ef79ef69ce223991"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","9e0150ef08e72ffc81b2c6f2930449a6"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","8eed3dcfefc2ad68fee4fe8e595445d4"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","be2d905940d93019ec9a3bc1370d2845"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","3fab94d11a9a1fe770e84dff8d04a04d"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","d7b2e437379b7bcf56bc897d7e2ada93"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","2aaaf7b96f48d07bcf5f3eee23331152"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","4a6f82f98b486510edb7cdd5b40342ea"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","20a2908b882290dddd4c315ed09fde2c"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","c8be419027a57819477db31511359e1a"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","91690698fa19ca64bd52acde592f29d0"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","72a1cb36159f32959aa022f30b7f7462"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","b76e9bde434c2db6954e48ddb370852d"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","312c9dd97264e7d3c306504359a186c1"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","4dd2b1ff9cc24e94d9f7c508bfe31b80"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","08b4c2aa256e8ce13a0af2d62e66070f"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","b58aed0ba4ffe70dedea6c0544127ba9"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","536c4672f105435923f86a5f137738ce"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","f288a7f11c1eb2e331cdab7adfa2eb5a"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","4a16dc08f9c9719c8307b24cb926728f"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","8a524db77b6ce431d4f89b09cab250d0"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","cada1ec8196e97c5b94fd3f6acf80f0e"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","79d2861fec1b52887b6a9b6dbc0db867"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","88534d9e81eeb559c86c653e3a2e88c9"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","f6010f3593bf35f81cff4906ddaeee97"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","cbbdc7d172dc2ca4a25f8d22263ebdd2"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","eed1facd98cc40120138806dd103a153"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","a443fe2f83b2d0fb6a88702adf1c1865"],["/2023/09/04/中间件/Redis/Redis事务/index.html","57bb18d22023b40aa5dfe37b57cfb148"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","41f0c68b8d23eef294f43abd5c2411c5"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","1e9d7a3febb514adf1d8d3534ce0a216"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","7104e294bac394c8e6e946b951435e68"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","42fda6936bfcca6b41fcc4aac9a57e41"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","da84d1998f6543163cfec35a9fa6da6c"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","9857caa35138834a8cc6dd13a0a635fe"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","c774f3f4ffd1eb650481bf9a67ecbe0d"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","774679f07ab0dfe6d16d74078b1df483"],["/404.html","266a1d351421e53f95820722efcfce02"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","562e0f336f29fb57b640e22fcbb5dfe1"],["/archives/2021/02/index.html","843112764ba267ec1b632ae53ab81ff8"],["/archives/2021/03/index.html","a8ce68dfb1a2faab2c0112fb190e5094"],["/archives/2021/03/page/2/index.html","ac967e93edcc4ef491840933e470184b"],["/archives/2021/03/page/3/index.html","3d7c1e27cf7db6a90775050ec6bea6c8"],["/archives/2021/04/index.html","74623d330ff8ae89d5762e69a8a9524d"],["/archives/2021/04/page/2/index.html","a1b4da390ff228f33556f1771171cc29"],["/archives/2021/05/index.html","203ee53ae4a78351f7af39940df66e09"],["/archives/2021/index.html","554d47b2d472d1c68b0327bc4e74099d"],["/archives/2021/page/2/index.html","b41f7d550b7ec5104235aa046f414f02"],["/archives/2021/page/3/index.html","b269e4156ed612f7c0a2607e83949ab5"],["/archives/2021/page/4/index.html","ac25aba251cb0d269553cf3589fdcd59"],["/archives/2021/page/5/index.html","2ff5d6b4f888af0bfe9d7343f15ee0ca"],["/archives/2021/page/6/index.html","459a35a63e9b369d1488ae6b5a612b6d"],["/archives/2021/page/7/index.html","44395bf95e7f2343dd02340280abdf9f"],["/archives/2022/01/index.html","372e130c51cc7cc6151b5ea9b97719da"],["/archives/2022/04/index.html","1a24dccfa43d77996a6dc4d3c847e9ed"],["/archives/2022/08/index.html","fcea6131a779aac67e98f01ce4ae50e4"],["/archives/2022/09/index.html","e33db92506080ecc53cc0d918812cbac"],["/archives/2022/09/page/2/index.html","16663be029da54345fc0bce845c0bedf"],["/archives/2022/10/index.html","bcef0a9ac9b342e815b50334e4780db8"],["/archives/2022/11/index.html","8492ef3aa513a367edfa00ab10877cb6"],["/archives/2022/12/index.html","cc76cd8cb31638c43b213b6ac4dd1e63"],["/archives/2022/index.html","ecf8332fcc85c4c3d31c00c910804589"],["/archives/2022/page/2/index.html","bed6507ee064724647d0a3d13d8f5c82"],["/archives/2022/page/3/index.html","5b374ac5be72cc69a840dbde1b93f517"],["/archives/2022/page/4/index.html","2065936453c2b7f02474c89f859c11fd"],["/archives/2022/page/5/index.html","4fd9c3f9292a6c0ab9d23e9696b98385"],["/archives/2023/01/index.html","f67996dc9a74afbc63fec565a53b38f1"],["/archives/2023/02/index.html","6858683af6571c85a19bafdb84027c50"],["/archives/2023/03/index.html","1dbd6382dda44037e203c5545bb03e59"],["/archives/2023/04/index.html","c6e136c9d46521e4b52a3c6e73550ce8"],["/archives/2023/04/page/2/index.html","6768d5d1f9e497c82b572da7eb79f54a"],["/archives/2023/05/index.html","76a47da589ab121c7e162d75ccf4582a"],["/archives/2023/06/index.html","59ca95ec8d1eb1eaa5921b7b458eb8e7"],["/archives/2023/06/page/2/index.html","6068bb9018e4c5f4cde2649c72159f13"],["/archives/2023/07/index.html","fbc5a89840924992304673af29d9a539"],["/archives/2023/07/page/2/index.html","3039e38002a59da5bbc5621c252a1c68"],["/archives/2023/08/index.html","cc9de8dd8b13e109eb96e3feb63d2b54"],["/archives/2023/08/page/2/index.html","ac15f0254445c9b1ca42e3621a6e095c"],["/archives/2023/09/index.html","0543b5c0d9c8a0f39883bdaa4ad67674"],["/archives/2023/index.html","496e8c5dac00e2f207ab3ae581cac8bd"],["/archives/2023/page/2/index.html","8949777fab6c3b139e161c1114055322"],["/archives/2023/page/3/index.html","4d9e79a832786de268987742ac3d5dae"],["/archives/2023/page/4/index.html","13e8ad73c94116a40e722f2079280386"],["/archives/2023/page/5/index.html","ac33b386a84d1d40c806a635a487739d"],["/archives/2023/page/6/index.html","b5a761667b1a937bd4e0d36748a0e07e"],["/archives/2023/page/7/index.html","a017f2e56caf428f84eb76a18cf168ce"],["/archives/2023/page/8/index.html","9e27a9e4dc14ef1cc2f10e19ce23b051"],["/archives/2023/page/9/index.html","a5fe0c5fbe2280ff68a634453a7faee0"],["/archives/index.html","f6754951ca2b3ed61118db5e5bc34e3b"],["/archives/page/10/index.html","fe97ced296902c87c41dd5c4b91ed3df"],["/archives/page/11/index.html","83cb7681cc2c67d1a38b7af6b5f740dd"],["/archives/page/12/index.html","db4c5e59bf8753a5096fdddb43d3d31e"],["/archives/page/13/index.html","2c7e727ff52dcf359f3739808835eb1d"],["/archives/page/14/index.html","5cc3e8a74cb671409a415e1eceed0445"],["/archives/page/15/index.html","ff0e4899cac164890c31e9080f7d685a"],["/archives/page/16/index.html","d01ffb9353b56a5868cf0718608d76ca"],["/archives/page/17/index.html","85556cd4a553c861757a9529a12bc198"],["/archives/page/18/index.html","9b465ae1b1a871ddc1cf20dac4524c71"],["/archives/page/19/index.html","c14bbdde5e3f81da7dc377025bbca4a5"],["/archives/page/2/index.html","a39314668efb904225ca4ea32b4f4ef0"],["/archives/page/3/index.html","f6809d669bea978e77b4b99b699c6021"],["/archives/page/4/index.html","9afe538fab0696b660f3fbfc068ff763"],["/archives/page/5/index.html","b0cef0c55e749ebc05bf1e59e745ef10"],["/archives/page/6/index.html","e88d64ed8e85498e4ecf60bc1a8d5a55"],["/archives/page/7/index.html","c657105cc0c7cc6d790a645571afe999"],["/archives/page/8/index.html","507a1bda5c98ee694fb5005d0673f8ac"],["/archives/page/9/index.html","3571e1a63801e3f00b63c24694c02ab0"],["/categories/Devops/CICD/index.html","cfdd86588da5f217f237b5fa3ba925ba"],["/categories/Devops/Linux/index.html","2a98ad313ac2b600a58fdac60f72fc96"],["/categories/Devops/index.html","9e3dfc8f23c2de4f2d9e40cf1e7039f9"],["/categories/Java/JVM/index.html","3558a566446cc535af1c56772d8043d9"],["/categories/Java/Java基础/index.html","a17d1f13ce23be194e4426d43f68cb5a"],["/categories/Java/NIO/Netty/index.html","35676f679213607e9fd921bd4e604f20"],["/categories/Java/NIO/index.html","9a270331c3b9f326de7e371894dab642"],["/categories/Java/NIO/原生NIO/index.html","726e2d7c7f733e5ff9e98dcc99bf7b2b"],["/categories/Java/NIO/文件操作工具类/index.html","086aee37394b1bc48eaed4f42fbe281d"],["/categories/Java/index.html","1caa72fc540fe2e99ecdcd7a9ba6a64f"],["/categories/Java/page/2/index.html","a9e8fc14353f0b14f5486e970671f4d1"],["/categories/Spring全家桶/Spring-Security/index.html","ff6db70752635cabb7e0be64123eb114"],["/categories/Spring全家桶/Spring/index.html","23a832f8d87870729132b23ad0ffa9d2"],["/categories/Spring全家桶/SpringBoot/index.html","c5ef66ae0fb9d7b5b8831cda55ac4ffd"],["/categories/Spring全家桶/SpringCloud/index.html","f969255ff1de7515e591fd48ed118171"],["/categories/Spring全家桶/SpringMVC/index.html","75cbe662bd72387309e837ea63edcb69"],["/categories/Spring全家桶/index.html","c4e6d10167112d92f8426627271344d3"],["/categories/Spring全家桶/page/2/index.html","085ceb1d637a156c5f9e1102bd3d67b9"],["/categories/index.html","9ade1da33c36a1b9a6eb304a4437baa9"],["/categories/中间件/ElasticSearch/index.html","1a933233503e78c01a3dabb3e0fb6c6b"],["/categories/中间件/Redis/index.html","f7d425a32bf677a28e5f1e050be64bf7"],["/categories/中间件/Redis/page/2/index.html","a5e62f83b479244e14899b6a4e6a0245"],["/categories/中间件/Redis/page/3/index.html","e2bafada1f86af973278065549753cd8"],["/categories/中间件/index.html","0379b0487a215531a4b812310ee2443c"],["/categories/中间件/page/2/index.html","1b0c7fe1414b1fdfbb6d2ea5b8983356"],["/categories/中间件/page/3/index.html","f273e7c9c74b34463a91bfef35913a14"],["/categories/中间件/page/4/index.html","be9ba5dd675ae9deb2e6b80cb76d2365"],["/categories/中间件/消息队列/RabbitMQ/index.html","20cad8b0591e095dd20773a1da77c566"],["/categories/中间件/消息队列/index.html","28832e518c1186dc4c88f98d1e6c89eb"],["/categories/前端/Mock/index.html","ab0b20e9f759dabbd927f642c20afbe2"],["/categories/前端/Promise/index.html","bd84786f3a906a5b537e3be3740adbac"],["/categories/前端/Vue/index.html","8ae80dde57a50d214b20e7d67c0e81ab"],["/categories/前端/index.html","85f2634105be0c16c0167fb4eb7ffb1c"],["/categories/前端/jQuery/index.html","2b991a4a40504f6cf30bc573d3235855"],["/categories/前端/page/2/index.html","fed4ace78f5d630e0a496834e75bb49c"],["/categories/前端/原生基础/index.html","b893235ccdfdd1d9737f94bc730946ae"],["/categories/前端/异步通信/index.html","0a033212408f88856176d10c3d05fb1f"],["/categories/工具使用/Git/index.html","5a91d747c37de2dbb032dbb3db5f5a14"],["/categories/工具使用/index.html","c7927328fc614cd639cdb7ce5057d347"],["/categories/工具使用/markdown/index.html","613f0b67bb62d2b0b25073f6c80814b1"],["/categories/工具的使用/Docker/index.html","494bc9873afea431d9f767fc612bd307"],["/categories/工具的使用/Nginx/index.html","0d85de3ab224b66e623d59f3ff72f951"],["/categories/工具的使用/Swagger/index.html","39308a20bdefb7e9e221d51827804fab"],["/categories/工具的使用/index.html","5eef412f3cc1db3b8d832d6c8dbf0b4c"],["/categories/工具的使用/博客搭建/index.html","c56d1b8dcb1602fd67f8755c96b1a708"],["/categories/数据库/MongoDB/index.html","773a6d44800a1edecb2c0789ab5d8239"],["/categories/数据库/MySQL/index.html","5caf2a0b664a505419e651af6c258e7d"],["/categories/数据库/MySQL/page/2/index.html","c65f4e1b98c3ac335f284112c0bba36a"],["/categories/数据库/MySQL/page/3/index.html","db17f886af236a3261b844b28e44409b"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","6f77bfacf2e58cfa23ebe0252e833279"],["/categories/数据库/ORM持久层框架/index.html","059d8447178d6792e04cfa662f7bdea5"],["/categories/数据库/index.html","06c4f3fa3012a8fcd7404122e6afd70d"],["/categories/数据库/page/2/index.html","0e260f0476352d951bf0d391c85e4581"],["/categories/数据库/page/3/index.html","c88c510648af9f0c2e8654b45a4a95ea"],["/categories/系统设计/DDD领域模型/index.html","dba10f4541bf7d4970cd2995870e2eb9"],["/categories/系统设计/index.html","36c7f90fc9168f1c63246c712ff5717d"],["/categories/系统设计/page/2/index.html","a5e567f21eb55d616c5f9f0c696f7eb7"],["/categories/系统设计/分布式权限认证/index.html","2855de9bbcedd269a88e5afc5632a229"],["/categories/系统设计/设计模式/index.html","54427cc67100b48f91f82e73015b2f81"],["/categories/系统设计/设计模式/page/2/index.html","a121706af71ff66d9ea385305825c47c"],["/categories/计算机基础/index.html","ce7addb099ca2e3a1d8c582cb8d1b147"],["/categories/计算机基础/page/2/index.html","8c567f3b57d4d8195c0a8cae8e82ad38"],["/categories/计算机基础/page/3/index.html","eb984faa975720bbfe8bcdf617b2ef16"],["/categories/计算机基础/page/4/index.html","06ba082f99af051e9fbc7a7593a16d1e"],["/categories/计算机基础/page/5/index.html","cd0940666b673c939dd6222287d4902e"],["/categories/计算机基础/page/6/index.html","9aeb4527fff1b5471edb07776def66a9"],["/categories/计算机基础/操作系统/index.html","401b7ab1ea76d5052997255156617eef"],["/categories/计算机基础/数据结构与算法/index.html","2960e287e2025ebd863fdcd8209d650b"],["/categories/计算机基础/数据结构与算法/page/2/index.html","726ee2cd8051940bbf8e9d17e6aed684"],["/categories/计算机基础/数据结构与算法/page/3/index.html","d3b74db909c9c5fca827cf8882e3bb31"],["/categories/计算机基础/数据结构与算法/page/4/index.html","88361147bfffa661dbdb4ef653867217"],["/categories/计算机基础/数据结构与算法/page/5/index.html","fe754c8eb0dba39c062d6a1c24844a91"],["/categories/计算机基础/计算机网络/index.html","0db94cba0f1ca2e085c318df8369153c"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","4c42629ae3df7101110d0d0edb9e37b1"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","0b7c8421e54dcb6ee57862cd76c3e41d"],["/messageboard/index.html","5fe2f1a1ec07164d26d4e6d5f0e3bf20"],["/page/10/index.html","a678272565f0b19f0e590ab2bec4a861"],["/page/11/index.html","b133e887f5230980f27b66d60dc6a14b"],["/page/12/index.html","b073363b20c808a9118478e737e4a4b1"],["/page/13/index.html","00335ddd402cc50ebf3f9abab4cc21f7"],["/page/14/index.html","6ceaa3e12fa648afbfceac3c8a43eef2"],["/page/15/index.html","b0c99cbdef01b59d4253c3137f4f103b"],["/page/16/index.html","845770584c5d1863d8bcca5a39380b47"],["/page/17/index.html","36161d23edc234387902c60112a0bee4"],["/page/18/index.html","b72f7c5ef07b3e1eeeec2ecfe4a9a2f6"],["/page/19/index.html","78257041017253b6aadb023168672f51"],["/page/2/index.html","d299543d194c93e3546380c4c88c6a31"],["/page/3/index.html","b575c3859bd1d86922f9f44eca4d7120"],["/page/4/index.html","cbf034c794074f2e75c974097920b2f2"],["/page/5/index.html","2d69df1ccb644265c7ea666de72d055f"],["/page/6/index.html","83e5a7228fc519cd3f8b5b5791621dc1"],["/page/7/index.html","42873a6712108fa9e1785969ed65edc8"],["/page/8/index.html","4dfa983d51523a73940fb921438086af"],["/page/9/index.html","f09c099b9c7393d7ebe81c394f9f27ea"],["/sw-register.js","3842012801cc0cbb37e3562320ce4758"],["/tags/Ajax/index.html","687f74b946d5c082de517d9f498ea607"],["/tags/Axios/index.html","8439c470f33a3e4704bf3c993e957ee2"],["/tags/CICD/index.html","cc91c5bbc7ae4303dfaf86eceaeb2e39"],["/tags/DDD领域模型/index.html","81d35b04d8353d9d1b44aae849aa7411"],["/tags/Docker/index.html","9b94509d04d1e2c10232b7847f07edaf"],["/tags/ELK/index.html","3f6afb7878d6ee82a0bf8daf4cdc306e"],["/tags/ElasticSearch/index.html","bd0977cb786dfb7b6a9112ccba1f366c"],["/tags/Git/index.html","7d6910d3b51c4fe9e97e9be51eb940b9"],["/tags/H5/index.html","9d7302c497dd6959b7d7c367d90d9e3b"],["/tags/JVM/index.html","7063221a5bbb57a1a61677b143f90020"],["/tags/JVM内存模型/index.html","3032f0cfd8fd763c4220e09d91d486b6"],["/tags/JVM执行引擎/index.html","1580c248a59b40d5d7a3af0b87afc975"],["/tags/JavaScript/index.html","5896ecea9ad94cb0ea90579c47a8de37"],["/tags/Kibana/index.html","01f3e850aed4c9e2925d80a0a91c41b9"],["/tags/LeetCode/index.html","bcf5848dc2d3d77f8564b1e19801ae8e"],["/tags/LeetCode/page/2/index.html","cac0622e335a5514e765f0f1aa82b33c"],["/tags/LeetCode/page/3/index.html","5c28da55309162ea39d4525089fbdaf1"],["/tags/Linux/index.html","6d8dc4915a36f25d77e668d19bc74dd3"],["/tags/Logstash/index.html","7bbd631153d1cf6535f5e6d2171fb1b7"],["/tags/Mock/index.html","1eecb8e3bef05fd4f997b8c856c8c137"],["/tags/MongoDB/index.html","ef867ef2ad864be84f35eec4fcb4edd6"],["/tags/MySQL-事务/index.html","77bca283a63195c4b62d005bbb04b950"],["/tags/MySQL-数据类型/index.html","4414f6c0236d597825fe95f0b9ab3609"],["/tags/MySQL-日志/index.html","118eada942dbca96b889e4b446f0d5ee"],["/tags/MySQL-索引/index.html","dae55535ed1f1c721ff320169030df77"],["/tags/MySQL-锁/index.html","bcb2c26c32c59d521021920a01d02cbc"],["/tags/MySQL/index.html","8c3d3aeb1f9dea892344949e9d683be4"],["/tags/MySQL/page/2/index.html","3a78a6228bfd485c6a2d72f8bc61a48a"],["/tags/Mybatis/index.html","9dffca57f04f31baa8e37e2fc50a9acb"],["/tags/MybatisPlus/index.html","8128cecc90c70689c0732e496fd90426"],["/tags/NIO/index.html","9d0573469ff8223c10caad7133fe9857"],["/tags/Netty/index.html","a63f138c148fe4001023b1db1596795e"],["/tags/Nginx/index.html","46d21d81f5a24d4290f96daec771a1c0"],["/tags/Promise/index.html","33a28b5283f3c34e2d82f8057cdb86ec"],["/tags/RabbitMQ/index.html","39174c7a589e19bfd5693c4347cdd0e8"],["/tags/Redis/index.html","30620847dee8cf561601a09c73a6443a"],["/tags/Redis/page/2/index.html","cb18d06cbf887a008466ed2c2baddb7d"],["/tags/Redis/page/3/index.html","1bb3fbd03ab3845397b9c08b3ccc0c17"],["/tags/SSM/index.html","104f9a542d53bda1acd8f59f2ff40500"],["/tags/Spring-Security/index.html","28f41672565d94406e167561bc88f3ec"],["/tags/Spring/index.html","a985aa4ae6941170e411ddc54e059e46"],["/tags/SpringBoot/index.html","d33c6db2bee9968ab37a0852fa339b81"],["/tags/SpringCloud/index.html","56227daba96fcc5396fb87ab941769d0"],["/tags/SpringMVC/index.html","189a316192464f0f713d78550b2f7337"],["/tags/Swagger/index.html","10fb141a5832addcc93e42f54d69e560"],["/tags/hexo/index.html","2f407c4757402d7f8f2958b05ec065c1"],["/tags/index.html","75c4f75272944aafaee55d84204adf48"],["/tags/jQuery/index.html","0359fb9f01285986e912f5a1aea3cbfb"],["/tags/java/index.html","18e8b254e411f801da81dd71611af0f6"],["/tags/markdown/index.html","fd37ec953e16db50ce0aca9f10c9b456"],["/tags/noSQL/index.html","834cd19fae92ada560f3732f9994f0f0"],["/tags/typora/index.html","a936dcb34fe6fed8a1736cfe623f7b83"],["/tags/vue/index.html","2cddfd64292e87a798bfd0aeb157c16c"],["/tags/享元模式/index.html","09d218ca1f7b06db95d364b07a1a03ea"],["/tags/代理模式/index.html","780eca6ab3acd4c647d087691daa9492"],["/tags/内存管理/index.html","f70237df863a6fb5f5cfb9432fcd7d75"],["/tags/分布式/index.html","794c46295b35f45e1eea1bc95b6c0b2f"],["/tags/分布式系统/index.html","c8e058ffb2fd4e477c1879a6973b2412"],["/tags/前端/index.html","15f7d3c34857b6c39f85397dfd93c9c7"],["/tags/前端/page/2/index.html","4cffbea089351f6671a4156767243b5b"],["/tags/博客/index.html","2250de8aca326af99aa6ccfb32042e21"],["/tags/后端/index.html","80e9dd0b063a2beeb1f85d1ef4bfc912"],["/tags/外观模式/index.html","c9df237f54c8921b841ccbc5e8413907"],["/tags/容器技术/index.html","bc2f5524f0646057e943d0720f750d9c"],["/tags/工厂方法/index.html","60d9061defce1cf630027483cd41a375"],["/tags/微服务/index.html","a749fa797e03f56b5f18a7ff524a8630"],["/tags/抽象工厂/index.html","0cd10b04fd1e9bb1ab3c8f2bcd35d699"],["/tags/持续集成持续部署/index.html","10b931c472ade35938d768e87c2bf3de"],["/tags/搜索引擎/index.html","612baea793b8091a94484c7d4bd0113c"],["/tags/操作系统/index.html","443dca4ce73db2ebd1a5338aee7d2450"],["/tags/数据库/index.html","728dadc5fac3a0ebb9fb0b1e0433d55d"],["/tags/数据库/page/2/index.html","ad812cbf403b169afdb14f5cc790419c"],["/tags/数据库/page/3/index.html","fed8c837f991f884ce7a3f10c06f1658"],["/tags/数据结构与算法/index.html","df3de35e5659976d2f67dffc8edb020a"],["/tags/数据结构与算法/page/2/index.html","3fc95778a3683de5abe69f1f519a86f8"],["/tags/文件操作/index.html","6d03216de89581021052b050f8bb50f9"],["/tags/日志/index.html","324380d4ca1a572c84e113e10fab1ea3"],["/tags/服务器/index.html","6afb2a09473267a06e95c47635b98c16"],["/tags/权限认证/index.html","e5f5888a1c1682f339c4f15df03bede5"],["/tags/桥接模式/index.html","7d43bd0c049cbef7ca313bb88fbe482b"],["/tags/模板方法模式/index.html","16d08ab89379833acf96504566ada611"],["/tags/死锁/index.html","912257e87c25f1c228b7790f1a765468"],["/tags/消息队列/index.html","73702cad06229817e8c2d85185375c7a"],["/tags/版本控制/index.html","0d35d2810a3e64553e7afdfc3b3cd13e"],["/tags/策略模式/index.html","94ca3e861c5b5a0f370328f26665fb0c"],["/tags/简单工厂/index.html","6bda655170aee3c6d4fdfab78f5a2082"],["/tags/算法/index.html","ea542bb42161724ca8f8a8f626d5f6ba"],["/tags/组件化/index.html","500f6a352c649b686e8e12af77681cc0"],["/tags/缓存/index.html","80f8d3b574a6705676aff989c2a38e9f"],["/tags/缓存/page/2/index.html","b44701e0a8918bf53d16ecfe276709b6"],["/tags/缓存/page/3/index.html","ddf79fecbee159b9689d9b60c3e2782d"],["/tags/观察者模式/index.html","45006c9f868b1695e3ebb367270ebf1f"],["/tags/计算机网络/index.html","4bf862b21c1346de3c9e674489996306"],["/tags/设计模式/index.html","90f08c86918e41f1a2673e364a03f907"],["/tags/设计模式/page/2/index.html","7e4f9a97a4b971f8283d144a044dcda9"],["/tags/进程管理/index.html","f9181b846408c5d935176e0fab5e5d2a"],["/tags/适配器模式/index.html","d35edb66951c86e3914d395ccb085f1f"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
