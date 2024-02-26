/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java基础/Java 学习路线/index.html","96934e8be74fa72c70887455dc643ce1"],["/2021/02/22/工具的使用/博客的搭建/index.html","6ec64a3bc8acf4b735dfbb2b7d6fee01"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","3e2f75834cde709883ad35d4e986016d"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","b552e7d00ee24f4dae5f749ba2d676f1"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","9012e788a86b9ed75fa4a8ad10377f0d"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","984512d3bc42b86770c5a9c9da206640"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","9e93b19e99db37e4139cbea3843d46f0"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","e91d47173e7942619e16b69ce970f16e"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","e84c3b4c46eb2d6f982c4e0fe22da30d"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","814f098d0cbcbf3aa535809264fa07a4"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","287e3da5752c02767476f9c2c60c4004"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","911953986ec420f3ef9e550c175e2335"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","371d3b6a5ca5948e4f934d5d006f9bae"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","9dd5153474008478281436ae64a31999"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","aa9be504595f8aafaa20218d7cb6463e"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","35e658f4eed36b5248385f104cf6d2c7"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","47c18a3e011ef26728cba6dd428d4570"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","379a48f19cfedb9b2b5c245a64d42408"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","6626a799a7ba15c8c0ccbf3e242b2b84"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","4d701b461fe5fecfcab22b6a7283b9b0"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","9ded9ed3ea580be4929957db8ba53c0f"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","ee917ce5f6ad7a8389fbcd644b6ba6a5"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","0b5616b984caf20f486d967ae85b3722"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","0101c6d2be121f8b190045172d2007f5"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","28c8e2c4af6d273664533d4da9e64a3b"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","82d041e6c7f4556476610b14b1ad303b"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","5f961c05aab0b371561abbd24e11d969"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","d2469d68e246a47154096c867930ca26"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","0949459200cb59c2a0d5a63f05ac9117"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","46e39485839c9c2612e3acd26f9b43eb"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","bcc4a23da5f53844a35f695f6c1242b3"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","581af313f61068cdc3dd1f19e712142c"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","c2b2d537d5514bf411a29f85d82a3089"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","faf5ed2a197da645946935fd46a19d27"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","55a0bf3fd3133fd1b7d51b124cf66141"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","4021d35c77429d66bbba450277e83a79"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","b5d04c0a1ce112d11f59ca3317f8d290"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","bb177f00a69d908e84363d8449236a90"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","3412b4ad7035f07f85df99122e0702dc"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","1675f267bb4702256fdc1221b4c5ecf5"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","97534dec5f2563d7b7ad324e0a0b4ced"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","3301dc2575a14b0692c1bd19c476f9a1"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","33c367dbb9caa33a359286a9dd946f07"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","96af5d304149605dc1b4a8ae198c8c7b"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","2d9e469a677b09404c71baf5c669e8c7"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","fd04833ca6a9cc3b0d158a0cdbb88345"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","1aafbd8394deb9cef078f70c9942b956"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","ed304465e3fbc9ec0e275250ca4cc475"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","d1fcad22d52bf536fbab651ba3bc684c"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","ba4b2ff41de5943b89dc720022436e42"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","931b54390ae4020d37a48d90da15a9ed"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","629b6de3f42b8e3877ee05f636715c8e"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","95e076076a6b3656184855f0499cec16"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","cad2056aa565e936dde998c1ead77817"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","d5f6baeefd713b23d6d5d9e18f8cd464"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","b593d5fc7ab4ac40bf2607b5f1bb2bbc"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","2899601ea277d1b82c0c596ead326e44"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","eec3f223d7762d5104b7ccff5b1155b0"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","1515df1f9ea310fc5e97ac8611aa4d31"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","2c6a6d6f24feb1b1135d040481e8f4b5"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","e00007c2f26d2a23b4a5573171544921"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","21213d3c92279a51deca72308a79afcf"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","9de7553d296ccdf420e69112463eab3c"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","8a9d1898679745e978a89cf2d4618cce"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","a090c4bfc47ae7f47a2f093e525662b9"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","95eeba3fcaae98cd7d39ed4ed35dad29"],["/2022/08/17/前端/jQuery/index.html","b3df3bbbcf12e8a6217c777bd2f3caec"],["/2022/08/19/前端/JavaScript/index.html","9f3d2acb8b9cfc44286e1fd5bf229bcd"],["/2022/08/22/前端/Ajax/index.html","b24e9fcfbaca94dd7c5029f78fe80d6b"],["/2022/08/23/前端/Promise/index.html","7de42e17416126504557292f8771ede7"],["/2022/08/24/前端/Axios/index.html","4c42b11627a87f1151eae6d97b2b30b3"],["/2022/08/25/前端/H5本地存储/index.html","d44eedf93fa3b61514938d9ae9d11d31"],["/2022/08/26/前端/mock/index.html","2a30a909dfba59317d86720e46628598"],["/2022/08/31/前端/vue/VueJs/index.html","ee560548a48d23a51d63b31bd3c05e5a"],["/2022/09/01/前端/vue/vue组件化/index.html","eace31b682e725270977d0824b0bf5b0"],["/2022/09/04/前端/vue/VueCLI/index.html","5402a63825a1ba98c1a28696a6e2ba55"],["/2022/09/07/前端/vue/vue实现动画/index.html","4a54a5a11d23ecbebef2fee918c365a4"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","e5a05d7c0f854c7366995cbd9158237f"],["/2022/09/10/前端/vue/Vue异步请求/index.html","72a3577deb9dfcaeb2acad1eefebecb7"],["/2022/09/11/前端/vue/vue-Router/index.html","f7a1ffd7beb7cc16d1e05bb1b11b6bf7"],["/2022/09/13/前端/vue/Vuex/index.html","15ed3aafeddf134505a4661e64ca509b"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","cb4cbdf9f1637e4cc05dfc2a715912a2"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","5e75f140d5dcd9ec9521c90d050e6c8c"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","40293b2ba54cc3443e16c87bc479e8f4"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","310c419b08bcda8ef64dcb053a7c64ea"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","fe899b2ff4e748cd075456b1ca36e38a"],["/2022/09/28/DevOps/Linux/Linux/index.html","3d7c52f77959a03a9bf3dfddf906ace6"],["/2022/10/02/中间件/Redis/redis基础/index.html","8eb4cb69c879f30bafc3d3ac181c14ba"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","67578034dec7964ca82ef13f5daff2a8"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","68bdf540a897c2acf453984151a6931a"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","ca63d731aba2e4448092452fa88f4246"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","91a21ba54c13ce5aedbb4dd89ece6ad3"],["/2022/10/17/中间件/Redis/Redis集群/index.html","6f012b7cc197e4ebce49542461ace650"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","8905b3b2a07b931c641d465fde4106d8"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","c340be0e64768672995b72db4d9587bc"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","39f61179a7f662ca01dddcad3854f0b0"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","1240d4e5db128fe41cac9ac1af291aa7"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","7642621e02426208f718c91df63d70c7"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","fe39c0af9aa9c169bd84c7c5cc816d05"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","8627a6339274f6078bb122318b4cfa12"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","132c81df5a4470939057735531e44446"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","e917d273625f0537dc0f0640baa504f5"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","42423204d8b80a396079171a7bea81c5"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","f6f14e396b8ece9da9865ccc16857788"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","33e0fea9239683a7549eaa4d3adc17c1"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","008e779001c481e92c0f6da24623d932"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","886dc78838a49cce9c2cb0ae3a6f3515"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","5f6e028d5602e3459976639248f8c110"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","62d3fbedcc6f57c719a1779e394ae784"],["/2023/03/10/DevOps/CICD/CICD/index.html","1f56707ded4d8fd22058b2e2ced372cd"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","2fddf43d4c93a88be029ba1593183f70"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","718068d2c386172de5abcbc6923c1658"],["/2023/03/13/Java/NIO/NIO/index.html","60a0c9af7fe4fba8414dbe805568d902"],["/2023/03/14/中间件/Netty/Netty/index.html","8ffd00d3610e5fd21f29637704421293"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","39b8c8a84d243c9519191fb1d9f7700d"],["/2023/03/17/系统设计/分布式系统认证/index.html","d8ed4cf85ebd61f3a167d15997bd9383"],["/2023/03/19/Java/JVM/JVM概述/index.html","399fd2f3874cce179ccdf080efdf9b15"],["/2023/03/23/Java/JVM/类的加载过程/index.html","378ce5793ad57eccacd794acb7cb2b41"],["/2023/03/28/Java/JVM/对象的实例化/index.html","344c3907565c3e2cbf46ca271f0abbae"],["/2023/04/01/Java/JVM/运行时数据区/index.html","58d4de02367f5143a97730ff664dd994"],["/2023/04/04/Java/JVM/执行引擎/index.html","633a5e33ff7213a1d5cff5e1390029a7"],["/2023/04/06/Java/JVM/对象引用/index.html","922c52e9ed16ab58a31396818204eaae"],["/2023/04/09/Java/JVM/垃圾回收/index.html","7352c8c4d40632ed6fab68e6368787ea"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","77d17c761b47bf33fd57b1b374fe83ce"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","d3d48803e033a4355181d41de3d9fc78"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","46db2df799b4d3dd721a94096a522dfd"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","1169f5f8d96746acbf0b6e4e9c4a2018"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","20a9aeca3b998d9613dbbdf36535c634"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","9cc8871ddcdea193f2652c7be6da2917"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","fe2b637459393f559ddc7192fbfaae36"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","3d892af88ed97b41d1ea49a84ab240d1"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","397a50864bd3c816a1356eea6f77c431"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","0adc8e49aa0b0e67de1bf612651c22af"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","cde0789ac70ca9256cc1e5bdfa77a57a"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","e4b09ea61637c53333967eb6e7a299d6"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","c1bd35e8480b472d47974048b1c59313"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","7a18d45358148fdb8796873f1931d8f0"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","b42dd728b8e248b0594ff0bc47625c32"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","c28660ebcc9984c3153baa5824be820a"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","44cecd70045286a27ad63b0184d8b1c8"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","18b6a10ced6cd56e4244f0abc6d9e41c"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","c584e8bbf5ee4ea44f5f88d72e237a51"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","a6982dfedd0fbaa2cf9220bb63cf1c11"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","10558949f0c09391d2f4558e1d3f2c03"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","3d9e7303c4997473496e658e7025e180"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","ae73cc093cb249a5d06d45e9c999dbb5"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","e02c10219525fa3b6030051de5a22a74"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","7d35d418250d8b5d05e846fbbbb3193a"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","feba709bcad8f487ace6dbd5fc1f36b5"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","29e920e7a83d6fa4c56c7f0dc4ddd6d6"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","c18ef5f4e7645afb9b2a81447c8571fd"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","2f1142855ce03167f0604b2559bda7cf"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","aac55879f43f658e8d82dddb731de9ac"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","fa2208b228a5b5d31ec6f96a1b823444"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","c75a9d652a18b2a199a6f67862a70300"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","9c36085856361f9769a358345f02f190"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","a6679b42a74b19eb8fca5d588028d4ff"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","d32e92324a362a5b18079880719de8d5"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","9dd1404e21228b9054df5fe1d4f580ac"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","3b2b7be68af66358393670f4606432df"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","a4a1714c82786b023774eb6669e8b665"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","1ab6c98ab1d5040153026c4415bef713"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","6b8c7f44678f71789f4422ec9da1cb9d"],["/2023/07/25/数据库/MySQL/MySQL自增主键/index.html","b8edd40ce69223a6e8a5d3a3a9276399"],["/2023/07/27/数据库/MySQL/MySQL快速的复制一张表/index.html","1f6fa1d10c1883ce8e3fe84e1c6dad1d"],["/2023/07/29/数据库/MySQL/MySQL用户权限/index.html","5e26a4f7c670ad1275894e950e6fd8c2"],["/2023/07/31/中间件/Redis/Redis的IO模型/index.html","8ce8b22d3f0b70a06125b8479d8f05a2"],["/2023/08/02/中间件/Redis/Redis的AOF日志/index.html","1695b0902dcb9ad18af6d112c28f6f3e"],["/2023/08/04/中间件/Redis/Redis的RDB日志/index.html","d6a6c6b2101c744adb9181010bd9a8fc"],["/2023/08/06/中间件/Redis/Redis的常见的四种统计模式/index.html","02066a505f071ad1916213fe1f7c16f9"],["/2023/08/08/中间件/Redis/Redis实现时间序列数据/index.html","a2002b9f20d6ab8190e9cccd269122f4"],["/2023/08/13/中间件/Redis/Redis实现消息队列/index.html","244ee072f4fa1c51f150cd05259ec2cc"],["/2023/08/15/中间件/Redis/Redis如何避免单线程模型的阻塞/index.html","34fa32dfd5d1193d7de58bdca44e2aad"],["/2023/08/17/中间件/Redis/如何应对变慢的Redis/index.html","6ca7d43bb5d0046177121ffdf3e076d7"],["/2023/08/19/中间件/Redis/Redis内存碎片问题/index.html","9ba2ae7fe2a10e3acf4bd9dfc24a0dec"],["/2023/08/22/中间件/Redis/Redis缓冲区/index.html","faaab07a9849bb374b97759ef68dc4cc"],["/2023/08/26/中间件/Redis/Redis做缓冲/index.html","862433c3cdeb5b5114bc466321927b3a"],["/2023/08/29/中间件/Redis/Redis内存替换策略/index.html","e93cea8b5c69ec2e77d16f4bf537ec44"],["/2023/08/31/中间件/Redis/Redis缓存与数据库一致性问题/index.html","b94f2834f4985c769e25b2902d2017c5"],["/2023/09/02/中间件/Redis/Redis应对高并发/index.html","be3413c7bf74b096287ac3c417f410c4"],["/2023/09/04/中间件/Redis/Redis事务/index.html","42fff64e02889f34dc9038c9aaa635c1"],["/2023/09/06/中间件/Redis/Redis主从同步/index.html","2f91118f55d1c2bed00f4917a9d4c9d1"],["/2023/09/08/中间件/Redis/Redis主从问题/index.html","25dd61fd103497303d4ef29976751a3b"],["/2023/09/10/中间件/Redis/秒杀场景模拟/index.html","14010ccb587285de1bf39fa3d9b5fa7c"],["/2023/09/12/中间件/Redis/Redis数据倾斜问题/index.html","d76bf9f87145f6d3a132fff79e3c805d"],["/2023/09/14/中间件/Redis/Redis6-0新特性/index.html","843af4d0cdf59133cd986c8bef376fef"],["/2023/09/16/系统设计/DDD/DDD领域模型基础/index.html","b22389041de4b5a73d9cdfd0121726fb"],["/2023/09/18/系统设计/DDD/DDD设计流程/index.html","91ece81efbedb9ebbe4020f884b4ce58"],["/2023/09/20/Java/Java基础/Java基础编程优化/index.html","e4c7e38f108dadda989cf34a6840221e"],["/2023/09/22/Java/NIO/零拷贝/index.html","56d0ec248164f30bf91a3df1f1518e69"],["/2023/09/24/系统设计/JWT认证/index.html","c5581cda7bb7b54d4e5ef6d19fe41f9a"],["/2023/09/26/Java/NIO/Reactor模式/index.html","28dc775d85c3980dba3d34ec7385de46"],["/2023/09/28/Java/并发编程/Java内存模型/index.html","b1583ea2f77097af3a728ed703513799"],["/2023/10/05/Java/并发编程/Java进程线程/index.html","34e15cc6b70a58eef2898fa5925795b7"],["/2023/10/07/Java/并发编程/线程活跃性问题/index.html","0a3a25afc5de9c8ed1aaac91be747a3f"],["/2023/10/09/Java/并发编程/共享问题/index.html","a082ba7efc975f9b58f865c8edd8613b"],["/2023/10/11/Java/并发编程/Java并发工具/index.html","22cfa42650d9c86c43a1770b770c2b4d"],["/2023/10/13/Java/并发编程/多线程设计模式/index.html","caba908bebb35e5f992efffbc95bbffd"],["/2023/10/16/系统设计/分布式系统/项目发布/index.html","a2d638877b633a1b563f6d698ab0f2ea"],["/2023/10/19/系统设计/分布式系统/BASE理论/index.html","2565aaf332a09b57ef310d463159e369"],["/2023/10/22/系统设计/分布式系统/CAP定理/index.html","3b586b7dc52eb4ffa115e2aa77e8b8c9"],["/2023/10/23/系统设计/分布式系统/MySQL数据异构同步方案/index.html","724ea4d02da17112a8cd2fb79da49242"],["/2023/10/29/系统设计/分布式系统/动态通知方案/index.html","23a14bc665895e4074ab929dd604d40c"],["/2023/11/01/系统设计/分布式系统/多级缓存架构/index.html","b8526e78145d29e7d099a1ca770959f8"],["/2023/11/04/系统设计/分布式系统/分布式一致性算法/index.html","628775e23fa5b18a01367929a8f0afe3"],["/2023/11/08/系统设计/分布式系统/接口幂等性/index.html","8c3fb6a597067cb2ff8c072719a6e661"],["/2023/11/12/系统设计/分布式系统/数据迁移/index.html","159e6352c78106cb3e5340caba01f55e"],["/2023/11/16/系统设计/分布式系统/经典限流算法/index.html","1435326dd6341eb655aad8e16f56c85b"],["/2023/11/20/系统设计/分布式系统/高并发系统通用设计方法/index.html","18b2ac6bf538f99049eb760ef23faa7c"],["/2023/11/23/系统设计/分布式系统/架构分层/index.html","4b163bb862aaa60427e4c86918e73ce6"],["/2023/11/27/系统设计/分布式系统/高并发系统设计目标/index.html","2ac958fe0a8acc470b2751cf48eb081d"],["/2023/12/01/系统设计/分布式系统/数据迁移细节/index.html","ed6c75f66e96d28e4bd0936fa0b41221"],["/2023/12/05/系统设计/开源协议/index.html","774c50deebbb00e1832cc126b53801fc"],["/2023/12/09/MockMvc/index.html","0a4cdd2841ee11b938dcdc11b27a0abb"],["/2023/12/14/系统设计/数据库优化/池化技术/index.html","cee9e50747a83231a0df75ebfcc7408c"],["/2023/12/19/MySQL读写分离/index.html","8f8eaaa46122f7c04a6609ceb9385672"],["/2023/12/22/MySQL分库分表/index.html","48349768b7cfc5c76061c425a91bc7d4"],["/2023/12/27/利用NoSQL优化数据库/index.html","3c1df5692f3f8df35ab398abb86d5e44"],["/2024/01/06/缓存概述/index.html","52df0945d8dce666040bae0773dd47b9"],["/2024/01/11/缓存的读写策略/index.html","96ecf59cf65a36803ad5af6d213207da"],["/2024/01/14/CDN静态资源加速/index.html","03a3468117d9c1c7f24464461250a72a"],["/2024/01/18/消息队列延迟问题/index.html","26efc9e2c771c90c4871afbc24069e29"],["/2024/01/22/高并发系统分布式服务方案/index.html","da8c8eda652249a497e60666b2cda366"],["/2024/01/26/dubbo/index.html","69dbf28b6ee346f2906ae0c394e1c19e"],["/2024/01/30/微服务基础/index.html","fe35dc95963155923525bac6afe27853"],["/2024/02/02/监控微服务调用/index.html","62c27dbe4e33b7ffa91951a3ab50a97d"],["/2024/02/13/微服务治理的手段/index.html","756803b678dc3fd0213cfb5eb26d4380"],["/2024/02/18/微服务治理的手段-二/index.html","82bca68516bc9ebfef678230a7456c53"],["/2024/02/22/计算机基础/操作系统/epoll、poll-和-select/index.html","1f4f032ddf12763c61203be96f73be10"],["/2024/02/26/Spring事务/index.html","f4d74f402c4941dcb7970888d81180f5"],["/404.html","cb0ae78e33c8334dc5e75c9553385550"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","0ba00032d28bafd987b080716eb17707"],["/archives/2021/02/index.html","0cdfb949a47ec1b86d8b60ab6a5cbec8"],["/archives/2021/03/index.html","8388a6a09376829c476c4bbb5119e312"],["/archives/2021/03/page/2/index.html","0cfd797805f376865945463220d23785"],["/archives/2021/03/page/3/index.html","3ab4ca7ef4fa5fd49dd5f864d968f39e"],["/archives/2021/04/index.html","08a04cebe849fe2dc085876bac06f749"],["/archives/2021/04/page/2/index.html","540927a287ae7be195d7c13d06ed3d85"],["/archives/2021/05/index.html","9ac71b6d75409b9f761cbeba8ad7e9f6"],["/archives/2021/index.html","455cbe7ae1523a1441fb526d77df695f"],["/archives/2021/page/2/index.html","d37e42142a0b4fb4e9aac5676437f23e"],["/archives/2021/page/3/index.html","c84cd4a43950892e98c2901363e70985"],["/archives/2021/page/4/index.html","d53b0cc03234280238d7322804b6b9d8"],["/archives/2021/page/5/index.html","5153c01d5dff11860bb18b888df3f1b9"],["/archives/2021/page/6/index.html","3a54f290482c25d2ab1d991fc40382f7"],["/archives/2021/page/7/index.html","d1c1cbfc278592294d5db3c9b118bd53"],["/archives/2022/01/index.html","f2ba861f6740c9c809823328b72def47"],["/archives/2022/04/index.html","efe3f39d6db72053bb97fffedc256523"],["/archives/2022/08/index.html","56c4d1d7177ab3ac71006d3dff52bd52"],["/archives/2022/09/index.html","f97ff9b1d2254a6975a50b109189b80c"],["/archives/2022/09/page/2/index.html","bdbaf004692b8f09b9de29d575145785"],["/archives/2022/10/index.html","a1dd72388d4013de5b3cead21ce54af3"],["/archives/2022/11/index.html","962a82051b48712647c3795fba8c4226"],["/archives/2022/12/index.html","501c2c6f755543b296d38cb6834c4811"],["/archives/2022/index.html","b117baca1a9c567a39878e49576b4ef7"],["/archives/2022/page/2/index.html","ec004ae01b57f8b3f944c62a390798d5"],["/archives/2022/page/3/index.html","e5108ee09c1b40313c832f5dea9282ad"],["/archives/2022/page/4/index.html","3eab522a5e98b5db567e1d65808dd0ed"],["/archives/2022/page/5/index.html","75344242058ce66b8be02e97542bc839"],["/archives/2023/01/index.html","5e145fb60b150a764db397c7931bd091"],["/archives/2023/02/index.html","a97c1a2251e7889f5a838db95dcd7121"],["/archives/2023/03/index.html","d6ac8758de7161d7b3e129ecefb0009c"],["/archives/2023/04/index.html","87b528ac2a633683df317cc844d3f8e8"],["/archives/2023/04/page/2/index.html","966dd8bec1fd7ec6ca8d4499de7cad3d"],["/archives/2023/05/index.html","e985fc744cc47fcf4bd7929f24a417c8"],["/archives/2023/06/index.html","244b34263c1fb24ad089789de6f496cc"],["/archives/2023/06/page/2/index.html","2e560fb3c970bfac7b5ed81f4afd54be"],["/archives/2023/07/index.html","68477415efdf2e9d8b43e861df4a6e8b"],["/archives/2023/07/page/2/index.html","74d49d87f6a4e10609f03fd987194bae"],["/archives/2023/08/index.html","786ea1cc394733252d40d96601f3daf3"],["/archives/2023/08/page/2/index.html","c17fed6b11cfe5511c968bc45d3d99de"],["/archives/2023/09/index.html","382286cd0f13decc6945b001f2633ef2"],["/archives/2023/09/page/2/index.html","4949bee017d6c09d82bec3382703cd40"],["/archives/2023/10/index.html","c4f5273c58af0b6c1b2cc3910ca6bff3"],["/archives/2023/11/index.html","c11ce428033bf1915ec252fed22f2bba"],["/archives/2023/12/index.html","0fa1cb06e830eda901d7c39698687eb9"],["/archives/2023/index.html","033e5a1ebf78bc1f9beab2fb42b2dcf1"],["/archives/2023/page/10/index.html","dec9fe71d5f36a53745aaafdb9d1a032"],["/archives/2023/page/11/index.html","0bf93aa3f4a1203a71eed4abb9d101ad"],["/archives/2023/page/12/index.html","78c7cb111709d15a1bff1f7997b0ec5c"],["/archives/2023/page/2/index.html","a573e958f96eca7c4e062abfee5332bd"],["/archives/2023/page/3/index.html","6df7c28a032613ce80bac6c2281981de"],["/archives/2023/page/4/index.html","7342d350d1c90a08f1d9c45f25056320"],["/archives/2023/page/5/index.html","d7f6b9e8b17e28d097411c7e89d162a1"],["/archives/2023/page/6/index.html","62ca6e3bc5c034e00cfeafb4d65bc217"],["/archives/2023/page/7/index.html","d575f3c43bab9026cbf6c41eb038a2b0"],["/archives/2023/page/8/index.html","626db0a721aeb34350e7e52cf8f497af"],["/archives/2023/page/9/index.html","82381e5cc814fe3dadc7b49fd0382643"],["/archives/2024/01/index.html","49753ae780b8dde7618f3e85c89bdd1d"],["/archives/2024/02/index.html","1ae257ffaf1fdc0785e66995fb4239f7"],["/archives/2024/index.html","21f22352d6f5779ca80487a776ba5d5d"],["/archives/2024/page/2/index.html","1b799435f38c9c3d7f3929c01b2894c8"],["/archives/index.html","79245caefc2c34ea27dc8abf0e1790d3"],["/archives/page/10/index.html","7fd0c5742aa56ea2a1d3d670674f4d14"],["/archives/page/11/index.html","8c70254b8c71cb92f84d5caaed308366"],["/archives/page/12/index.html","4b6f1bc059e2a81df6f6f07f20791a17"],["/archives/page/13/index.html","03f1174a63180c455d36730c7e74a32e"],["/archives/page/14/index.html","2089e55619aeb03705360236a8e65e12"],["/archives/page/15/index.html","731831935863cdb0bb5dfe1236af5b09"],["/archives/page/16/index.html","96ec2478aad402ea946b4ff1e914cea0"],["/archives/page/17/index.html","66f1a6d07e852557b69961e5f4557636"],["/archives/page/18/index.html","48166d7e24753c263077bde0398d0cc2"],["/archives/page/19/index.html","cc90c23e7d034da11e88d35f07f2e0cf"],["/archives/page/2/index.html","18bf5c05783b5240943d8b6bef13d09a"],["/archives/page/20/index.html","6cab50a8fa4977c02f4c5301ee316eab"],["/archives/page/21/index.html","b82bdafa8a0228b95efddc072583f39b"],["/archives/page/22/index.html","75b74e421b52fb32f118956291f5718f"],["/archives/page/23/index.html","9059e1955a7034413b53ce030c156fe6"],["/archives/page/3/index.html","ee959d2aab099ddb32015b42b280d783"],["/archives/page/4/index.html","f6a1c696b1beb97cbec0e9c09594cd87"],["/archives/page/5/index.html","940d311730e961c02a1a1c5eaf327892"],["/archives/page/6/index.html","b97bcf414605bbee2b4338aedf587e2b"],["/archives/page/7/index.html","aaea7504491a5ce0fa7def0be694c729"],["/archives/page/8/index.html","d37a937f72e55b3b6a777575b62677b9"],["/archives/page/9/index.html","74850e68cb40dde6b3cc71f38f0d5b8e"],["/categories/Devops/CICD/index.html","44c04451861f1bddced5d22325e5a885"],["/categories/Devops/Linux/index.html","cbf7a7302086c8a314b28dd5461c4dad"],["/categories/Devops/index.html","c1ca2f10f712306dc0b9d934e4cdf285"],["/categories/Java/JVM/index.html","59bd6a4971c766c9a01c45cb2a100792"],["/categories/Java/Java基础/index.html","b153618b87124b58dff9fe563a288eb2"],["/categories/Java/NIO/index.html","1b6f245a669597fba571f103bc7ddc9b"],["/categories/Java/NIO/原生NIO/index.html","16822d9ebe6e118890870591f2cad933"],["/categories/Java/NIO/文件操作工具类/index.html","353277e44e96e48a6e38804e77152e9a"],["/categories/Java/index.html","1e537a7ba1dbaea299ac55c86cc9c3db"],["/categories/Java/page/2/index.html","eaa456db52da4d8dbe1e43e56563a00c"],["/categories/Java/并发编程/index.html","9df0c549cf3bbbfbfaccc88e1eb0b9de"],["/categories/Spring全家桶/Spring-Security/index.html","4db37064380a1a191372b96c7b7821d8"],["/categories/Spring全家桶/Spring/index.html","1a1c50a446f3c0e70810c02f64b91ad8"],["/categories/Spring全家桶/SpringBoot/index.html","7c8215e5b991e55a7382ec39b91e57c3"],["/categories/Spring全家桶/SpringCloud/index.html","cfe0cce2369aadce264a5ef200f342c9"],["/categories/Spring全家桶/SpringMVC/index.html","5b17d3dd80a0811e1ac47d6fb37dd2cf"],["/categories/Spring全家桶/index.html","66f71d6d2a2be605d6e544f3fab8a344"],["/categories/Spring全家桶/page/2/index.html","4e2a36f6b0aa7221f9b4db0471813d3e"],["/categories/index.html","725ae006a4d939a2f06be515ae17ca92"],["/categories/中间件/Dubbo/index.html","8d53d8e464b195f012d89854f5324677"],["/categories/中间件/ElasticSearch/index.html","d28882f95b923e7cba758f7b4646b9b6"],["/categories/中间件/Netty/index.html","f7a1deb741e592847f4bd22763a63de9"],["/categories/中间件/Redis/index.html","41e3e1dc43bbaf986ff91d97b68731a2"],["/categories/中间件/Redis/page/2/index.html","025fdede7dcd633214e16e7a4ff56267"],["/categories/中间件/Redis/page/3/index.html","9c3d5ff303f3ecec15ef8796595bfd65"],["/categories/中间件/index.html","dc4d3542dc151bd97ac48d9a6738703d"],["/categories/中间件/page/2/index.html","624ec4b5c25e30f7ba39147a5b21309d"],["/categories/中间件/page/3/index.html","c486c3c53b676d37ee1ffb9e0d9c1b66"],["/categories/中间件/page/4/index.html","4e956d712d44e4c46cc20b1cc9e475ba"],["/categories/中间件/消息队列/RabbitMQ/index.html","2de35346a04cd7681cd2827afed279c3"],["/categories/中间件/消息队列/index.html","bfd19ee2327a92d6a9e300ad759d9d01"],["/categories/前端/Mock/index.html","bc59b445f8bcb0599d2ed4bef5cb00bb"],["/categories/前端/Promise/index.html","7291a3133d4fd0a1a6bc7b912be46a0f"],["/categories/前端/Vue/index.html","74988c609b27d5cba36b2195e92a8356"],["/categories/前端/index.html","c103dc0be89675c24446d36d8aa152ff"],["/categories/前端/jQuery/index.html","d324b49e356ea69ad5d56756e3ec9d75"],["/categories/前端/page/2/index.html","7b4dcdfd494ccdd62ffeb5bfb2a04b1c"],["/categories/前端/原生基础/index.html","11c1ec8708c9dee48b755b10b0526c7b"],["/categories/前端/异步通信/index.html","c16cb86d22e96d0b0fab1e0397ee2bbf"],["/categories/工具使用/Git/index.html","91a3e14e3a79bcb8d3b95382b2376e08"],["/categories/工具使用/index.html","264e9636e5301dce2a1f58e71d031ddd"],["/categories/工具使用/markdown/index.html","1e895e0b20b18f1d6e684baef96ced7c"],["/categories/工具的使用/Docker/index.html","499c396cef3103f63770fbc200df16fa"],["/categories/工具的使用/Nginx/index.html","42b2e85affaaa7dfff857f704a63e74a"],["/categories/工具的使用/Swagger/index.html","a25a78671d4fa213d95b5ca6ae5707ff"],["/categories/工具的使用/index.html","ed320a748df662d4fd0d527a7b10fe7d"],["/categories/工具的使用/博客搭建/index.html","2eb7591799e99e8be2fbe30d8ee1c653"],["/categories/数据库/MongoDB/index.html","50d08d4c9cd34b2d206892ac93bbf547"],["/categories/数据库/MySQL/index.html","34e4c0fd2b36b3b8de1a5fe266577375"],["/categories/数据库/MySQL/page/2/index.html","68464a8d967757f712c80198be1be342"],["/categories/数据库/MySQL/page/3/index.html","f0f1caba0d6ffa5811839a8b96f3a723"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","09e9c5274d116beb0c8cf579ea0fbd5e"],["/categories/数据库/ORM持久层框架/index.html","207251d86676331ad515e26edcf3278a"],["/categories/数据库/index.html","6fd1733b232ac9e5b844bf7d0fc7f694"],["/categories/数据库/page/2/index.html","64ae0438cee9666aa12f0ce7b4b7aef2"],["/categories/数据库/page/3/index.html","66e4d219ec3c39aa1bb344f6fd8d8b5f"],["/categories/系统设计/DDD领域模型/index.html","91e36929160a0e940f2d830eabb90c4a"],["/categories/系统设计/index.html","d84fec09eb99f45ca385d3ee1c80fae9"],["/categories/系统设计/page/2/index.html","0f6b414634ae4bd75aa402185c1acc62"],["/categories/系统设计/page/3/index.html","291fc0a91dba681da9704e34a65a6115"],["/categories/系统设计/page/4/index.html","90aac439322b75717592d4ae114bac98"],["/categories/系统设计/page/5/index.html","6f39a5db51a927d44ed3b14111e0b041"],["/categories/系统设计/分布式权限认证/index.html","d152827986cd62977d1c3af84ffba61f"],["/categories/系统设计/分布式系统/index.html","0a6bccd86fe95bca519275ce925dff0f"],["/categories/系统设计/分布式系统/page/2/index.html","5cd6d4b12847d144fb452d269d8cfd4c"],["/categories/系统设计/分布式系统/page/3/index.html","16e33018bb729499da35bf8eee81d0e1"],["/categories/系统设计/微服务/index.html","c475f3fdfe368e84b6bdbe3667bb8819"],["/categories/系统设计/数据库优化/index.html","566c132aa93aa02fba339054dd976365"],["/categories/系统设计/设计模式/index.html","5ceeb7b1e7d00fcedaca25c6e7567088"],["/categories/系统设计/设计模式/page/2/index.html","4e864de02de097437d1fec8459dd3441"],["/categories/计算机基础/index.html","1f981245cddd761a8e3010851b76737c"],["/categories/计算机基础/page/2/index.html","2ac09d1bd49b579d5b5780b8e11bb6b1"],["/categories/计算机基础/page/3/index.html","b04c68fe98c00ca10861ef6a864dc5f3"],["/categories/计算机基础/page/4/index.html","89971f6f9fc0c2b2daed732b0d4b2806"],["/categories/计算机基础/page/5/index.html","f7562db02e48a9551fc62770f44e58d8"],["/categories/计算机基础/page/6/index.html","20466246137afd7e0410cb11304f3880"],["/categories/计算机基础/操作系统/index.html","3a9f03a043ec8135b6fa8c63365864e0"],["/categories/计算机基础/数据结构与算法/index.html","2036239ce0c06dde2f66b417fb65470c"],["/categories/计算机基础/数据结构与算法/page/2/index.html","a3e04efd617a9f5343fce571ab06f68b"],["/categories/计算机基础/数据结构与算法/page/3/index.html","c153d41d9f439bad831834a66fe08d8e"],["/categories/计算机基础/数据结构与算法/page/4/index.html","f36aea9da94d2be504ee3826bed6d222"],["/categories/计算机基础/数据结构与算法/page/5/index.html","715fab9616768119631efe602f16e987"],["/categories/计算机基础/计算机网络/index.html","bf5ab7823fb222d2a784bf2b6e2bc8da"],["/css/index.css","2af5ea34362e0b34f799106b2659ad50"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","f9e1071833785e3d737ac648b70aa044"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","4364bc924a43a36777977e625357a78f"],["/messageboard/index.html","361c90dc4318c5bb411c4fcd80238ee8"],["/page/10/index.html","a18514c46c6b0884539ec59a54e7177b"],["/page/11/index.html","7035f918cb2ed75c3e93278b0e03e91d"],["/page/12/index.html","6d5726d3c5da5edc097abf59cc177e08"],["/page/13/index.html","91c462fe41f2f4cb13d7dc88a51c8b0f"],["/page/14/index.html","e4c48f1ef2404e083954836b31b49211"],["/page/15/index.html","35cd4f140487051127beecb40c773986"],["/page/16/index.html","b308b19c18f9e4a2b76637e6bc3ed975"],["/page/17/index.html","74abacb935e7172bf87ba567fa98edfc"],["/page/18/index.html","a6ce1aedb806eb536acb5a722a7acd4a"],["/page/19/index.html","6760144e5bb4e62b428e33d892dd78bb"],["/page/2/index.html","b1b868ea337158a84ee129f9178b4628"],["/page/20/index.html","4140d6d82b38332dbfa385558f693c24"],["/page/21/index.html","c096e688181cd71e5983e8071bfdca4d"],["/page/22/index.html","282662458c09e2aa18319966f70fc2eb"],["/page/23/index.html","a29704e7d3ee5d34c9751c290a661ba3"],["/page/3/index.html","ee1dd2ce33322bc1c878e127b378f2dc"],["/page/4/index.html","44d698fd90c10ae7bea79b4a06297311"],["/page/5/index.html","028d8dfb091496332d50dba140349ee4"],["/page/6/index.html","482c3b2a40403e5461af40bef1a27139"],["/page/7/index.html","05abeedf5c5584225e28236ca79a5f7f"],["/page/8/index.html","c239fbcf2a98af2afff10f813b58601f"],["/page/9/index.html","32ba1acaea18890ae884e5f1c62bbeab"],["/sw-register.js","bcfa94cc417bbba59c15dc55ef98366d"],["/tags/Ajax/index.html","88b8706575ca573598e69da4438edd40"],["/tags/Axios/index.html","7c886b703e09155bbdb6574255030e10"],["/tags/BASE理论/index.html","118a25e00f4274a4c0afee8d10806946"],["/tags/CAP定理/index.html","47268d8019678eb03889a1429a5f7cbe"],["/tags/CICD/index.html","3e2e858a5242dac27c91ba0e9c73a70b"],["/tags/DDD领域模型/index.html","f92d5e4d402711be4a15bbb0fc3f611d"],["/tags/Docker/index.html","23d1f188536ee199a86afbfee7e8ea68"],["/tags/Dubbo/index.html","f73a5741a54b0b2b0c1d6d8839cd4697"],["/tags/ELK/index.html","cb84151ddc12621d2eaa344438e1faeb"],["/tags/ElasticSearch/index.html","d23492caee7d430b1a4cdc23302dfac5"],["/tags/Git/index.html","c71799f00c1ecc63c9739c5a1f8ed7fa"],["/tags/H5/index.html","0c2e513d5c9d821331a77c14813e9d72"],["/tags/JVM/index.html","0f3ae3d9ac52a1ac316d479846262508"],["/tags/JVM内存模型/index.html","56fc9962987576c1bc92bdaf577f012a"],["/tags/JVM执行引擎/index.html","8cbd19f6bfb62afb238920f2a01a45da"],["/tags/JavaScript/index.html","2f1aef4419569707c89c9cec763a885a"],["/tags/Java内存模型/index.html","7fa8f87c74697acdeceb66135a8a4347"],["/tags/Java进程线程/index.html","23a7911cb76a88ebfc2e37993bd9b50b"],["/tags/Kibana/index.html","9c289575629b80bff15f4c9580f06851"],["/tags/LeetCode/index.html","b98085c15660f41266eccd4ffccd9946"],["/tags/LeetCode/page/2/index.html","4655dd1cdc3a523ee0968ec80c304b9f"],["/tags/LeetCode/page/3/index.html","f0cce413cf43c362dd7659ab1838a872"],["/tags/Linux/index.html","f22964bc2396dae9d6c3107200db49ea"],["/tags/Logstash/index.html","d3e04af4c8be4a7f8f4ed8ad27d1a307"],["/tags/Mock/index.html","3d37c26fdd94f18622d3d40d381b9648"],["/tags/MockMvc/index.html","71528a613d4ac6593e10a80eb82c0c25"],["/tags/MongoDB/index.html","f26563dcf92043e3e94e78e5f3aaa5c5"],["/tags/MySQL-事务/index.html","9628b443a0a15e08308f6a8bb8ec0753"],["/tags/MySQL-数据类型/index.html","6a47b86fd5847777e08c2adf646d72f4"],["/tags/MySQL-日志/index.html","9bcff79f09e9e10af70a2082a40bde2f"],["/tags/MySQL-索引/index.html","611349018f52ded919d0bb4ab7a8ed7d"],["/tags/MySQL-锁/index.html","8373393b17a1a6cb6a8fe1e9fa981099"],["/tags/MySQL/index.html","9cfb87949c0baf69e8f52959a6e6aa6c"],["/tags/MySQL/page/2/index.html","5d0d843ca5dcabfd282ef7c9f0cf3578"],["/tags/MySQL分库分表/index.html","8884f4a1b1e26b571c5aa2104c9fb6fc"],["/tags/MySQL读写分离/index.html","91e48c801ce845d3cee6ca91c599d17d"],["/tags/Mybatis/index.html","007de2216b9eb13758bd7ef18c2aaa37"],["/tags/MybatisPlus/index.html","7525b22d8af8f44af1f6687208a936c7"],["/tags/NIO/index.html","760264410c14d75a7b5dfbc2132f0d88"],["/tags/Netty/index.html","b00fdeebbdd097ea8cd124b5f2eacf97"],["/tags/Nginx/index.html","2f4ca5e91da1fd34c59f3c13ec680ae7"],["/tags/NoSQL/index.html","bcd141b0965744ef7d23078168ef2600"],["/tags/Promise/index.html","a201d40e530e7883bf0c44a4595db692"],["/tags/RabbitMQ/index.html","e8ccc0e0197b3330c6b7e8f48deb3f76"],["/tags/Redis/index.html","f04ec47c88a81bd267cc2b6e3d3b6ae7"],["/tags/Redis/page/2/index.html","d974fb5a802de5d634e65baa3bdb4467"],["/tags/Redis/page/3/index.html","a4697f95a0ae7c291e17c65bfa2f9f58"],["/tags/SSM/index.html","358dbb2c04a0a424ab64508da018901a"],["/tags/Spring-Security/index.html","5eb77680bbf486363ab50c1bb6bd8142"],["/tags/Spring/index.html","dfa26e04989da08105192823eb714334"],["/tags/SpringBoot/index.html","4d67a453d07946991e4638857b6e9297"],["/tags/SpringCloud/index.html","aabbbe038da0d97d88c5442e7da90b4f"],["/tags/SpringMVC/index.html","87beda3a4edec37cf128f0bff13d2a44"],["/tags/Spring事务/index.html","f5f6651cd2e6c41f6123e4a3874b5359"],["/tags/Swagger/index.html","47a33aa76ccd7d2a617049e2d95bcc44"],["/tags/hexo/index.html","9444a83f2ee34100a357dc7f0c74218b"],["/tags/index.html","6bfb417a2fd8f20572670e005886df5b"],["/tags/jQuery/index.html","663054a405cdd6092846d6933f6f9d77"],["/tags/java/index.html","9c8d63b7e58b960553318a8b43b4a566"],["/tags/markdown/index.html","777cfb7d91505f1342808a13edebb561"],["/tags/rpc框架/index.html","3c80fa5e6b849dcb8976343446489dae"],["/tags/typora/index.html","cd5ce43e46846cbf8ee06f8c9d78d8f7"],["/tags/vue/index.html","b7a4ee7fde8873494298e55cf2d4c2d8"],["/tags/享元模式/index.html","7777ef61c591b62befc7cd8503767971"],["/tags/代理模式/index.html","e92208c2f30ea7552e56fce07ddd4a62"],["/tags/内存管理/index.html","6eefcd8dc32c14ab98103b4e5a4cb3d7"],["/tags/分布式/index.html","c494d75cb3dbe5571097f0fae232f3d0"],["/tags/分布式一致性算法/index.html","504d5f84a1a1a08be57d90d0e9315d68"],["/tags/分布式系统/index.html","43b00d4e8b1177286f9ceb509be1b8d7"],["/tags/分布式系统/page/2/index.html","016fcedbf4a7656c0049d07e9168127a"],["/tags/分布式系统/page/3/index.html","1455a59a57ad2365843869815d45b532"],["/tags/前端/index.html","526c90cf267fdb9cf7b92292b593f925"],["/tags/前端/page/2/index.html","cb290322889c4b5c311f13f59f8b04b4"],["/tags/动态通知/index.html","a5418aad27a14ce081cb92a95e548cb3"],["/tags/博客/index.html","5003f1ce6dccfe05cd52264437bde305"],["/tags/后端/index.html","6df47476d7d31f900d9ba4f26d57f93e"],["/tags/外观模式/index.html","3fd189491244ba11382a3d7f21c4709b"],["/tags/多级缓存架构/index.html","c9a5d2c1339f4849f248edd2acae6bb7"],["/tags/多线程设计模式/index.html","60fe9cf017e4b6a6449e0d5f0364af40"],["/tags/多路复用/index.html","d1ff0d501304250998dc99c0b37fe46f"],["/tags/容器技术/index.html","b2fcfd74c6d5eca13520fe2182fe698c"],["/tags/工厂方法/index.html","01e773cda9e0da011327b1907874da49"],["/tags/开源协议/index.html","054b538a5d8dad7304e3c7ec6e0fc378"],["/tags/异构同步/index.html","2d63c225d3b72683291f205b2e65bf56"],["/tags/微服务/index.html","26ea4fc84412fb9c66c828642e4126e5"],["/tags/微服务基础/index.html","15cc18004b0b15495aa8137a96d4c344"],["/tags/抽象工厂/index.html","9cccd182827c2afdebba1dcd391f8618"],["/tags/持续集成持续部署/index.html","59ffb78532c71756fe5f19747a4e7637"],["/tags/接口幂等性/index.html","c220c312761cbcf96a64f7cd52cb7675"],["/tags/搜索引擎/index.html","7e875681fbefe997bba52296e69f938e"],["/tags/操作系统/index.html","a84a28746bdd7f2d3f0b2243c9e64887"],["/tags/数据库/index.html","fba89f8ca864d91f2fd710a9c8050e24"],["/tags/数据库/page/2/index.html","28bd609e0e877ee6f78eaf9eb4d585b9"],["/tags/数据库/page/3/index.html","c2472690db415b6c23b8796f69c6fcee"],["/tags/数据结构与算法/index.html","8674c1ff9646b3556a9a35770a4dd834"],["/tags/数据结构与算法/page/2/index.html","ac362a2aba5b7103226b62875a2cf75d"],["/tags/文件操作/index.html","c21829cca143d065a0497d36fc5d3e77"],["/tags/日志/index.html","dc57c6767ea01115885d98e203c70002"],["/tags/服务器/index.html","b6135baf0493e2926d54da7d29dbd8e9"],["/tags/服务治理/index.html","09793265a7652ecf427dccc0bbed658c"],["/tags/权限认证/index.html","4adf4973ee2402997363c0ea6266797d"],["/tags/架构分层/index.html","fe061c21574e81830e6a2530e86c0ead"],["/tags/桥接模式/index.html","edb72efaeec80a65b6722f2bc5840ce3"],["/tags/模板方法模式/index.html","20f2a87d02951e96c275f1df6f8b0f80"],["/tags/死锁/index.html","a8ec1a351b259dd55bd15aeb655ae82d"],["/tags/池化技术/index.html","fdb2eb6d894eb06a84d030e55b7e8bab"],["/tags/消息队列/index.html","3468d25086441065eaec68ce9c7fc438"],["/tags/版本控制/index.html","48cd295fc43f4d7f636d8b6f43d94790"],["/tags/监控微服务调用/index.html","bee024a17c8a21eb4381634ff0862bf9"],["/tags/策略模式/index.html","44886732c316fe5d7b97f5c9a7aae296"],["/tags/简单工厂/index.html","197441ec0b4ac74de2f8529ac1ed8e8c"],["/tags/算法/index.html","4309141272e859de2a0c036d750eda26"],["/tags/线程活跃性问题/index.html","47c0cfb2944d205cad52332e0149abe7"],["/tags/组件化/index.html","710cb6023784bc52c089e8b712346e3f"],["/tags/经典限流算法/index.html","09f1fecb526229883da53e0ea4028f4d"],["/tags/缓存/index.html","3b28c4288aa2f8f0347fa25b9d94864c"],["/tags/缓存/page/2/index.html","949140f8a5c81c32e6ebd53a40d56fc2"],["/tags/缓存/page/3/index.html","522ad654f96a5348ef830d19852daa13"],["/tags/观察者模式/index.html","613f544525bd914e849f9a4bcd6e7cf6"],["/tags/计算机网络/index.html","db77a65f4aafb9722d3bf57e6c88ff73"],["/tags/设计模式/index.html","3fe6bdbbcebfb695b998788b3d54016a"],["/tags/设计模式/page/2/index.html","19242996c425ddeaca767131782a84cc"],["/tags/设计目标/index.html","de4314ce8a0aa7678e1b7a8d43e99d7d"],["/tags/资源共享问题/index.html","860ec738ba6c2c686168eb9f765b60e4"],["/tags/进程管理/index.html","841b95d8a8d42bd9c1f71c5e9a07d9da"],["/tags/适配器模式/index.html","68fe3baa4e0f87c021892cf9380ad8e1"],["/tags/通用设计方法/index.html","8fc781663852c0e95398e9867772b2cd"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
