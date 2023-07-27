/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/02/21/Java/Java学习路线/Java 学习路线/index.html","f60c5de5bcf24a9c0022b9be2501ec4b"],["/2021/02/22/工具的使用/博客的搭建/index.html","31a0d9dc2954ac24e298f87423c8ab05"],["/2021/02/23/工具的使用/markdown/如何使用markdown/index.html","daf0d1dd0ff1c757b00d2548da39a979"],["/2021/02/24/数据库/MySQL/MySQL命令大全/index.html","e680ab7a2069b59bed8574210c66ed3e"],["/2021/02/24/数据库/MySQL/MySQL数据类型/index.html","419d06ec7268241c24765780d108c3bd"],["/2021/02/25/工具的使用/Git/Git的介绍与简单使用/index.html","eaa3ecfb34861868b06bdea1efc4ae6a"],["/2021/02/27/系统设计/设计模式/简单工厂模式/index.html","67ffb4effcc19bdc7a027bd52b2e3f95"],["/2021/03/01/系统设计/设计模式/工厂方法模式/index.html","d0fc990ccfe435d8579e374e8834f12f"],["/2021/03/02/系统设计/设计模式/抽象工厂模式/index.html","955cdae4fe4b314ecfb3b624144a7969"],["/2021/03/03/系统设计/设计模式/单例模式/index.html","e369208028a3147c105a7c6b550c3585"],["/2021/03/04/系统设计/设计模式/观察者模式/index.html","227d068f57b991a408bedd59cbd7e5f1"],["/2021/03/05/系统设计/设计模式/适配器模式/index.html","23a6e0fa169edda51ecf9ccdb8f96c60"],["/2021/03/06/系统设计/设计模式/模板方法模式/index.html","9895f80a7d9dd9afd8d1a6f6b4c9ce80"],["/2021/03/09/系统设计/设计模式/代理模式/index.html","5223590bae0f24a242ab69665cd7286e"],["/2021/03/11/系统设计/设计模式/享元模式/index.html","0c3f83c7cfb99dda180c78263d54dbd4"],["/2021/03/12/系统设计/设计模式/外观模式/index.html","f0530f7412e5446b2c5977f65d181299"],["/2021/03/13/系统设计/设计模式/策略模式/index.html","ed009b49ab8212cc9e8bef81ed7e9492"],["/2021/03/14/系统设计/设计模式/桥接模式/index.html","d097cba2697116b85901edc305ff0382"],["/2021/03/15/计算机基础/数据结构与算法/LeetCode-多数元素/index.html","0afbc91a914f4a14646f49b8898a2890"],["/2021/03/16/计算机基础/数据结构与算法/LeetCode之汉明距离/index.html","fc78760f1c9afef4a06ee08b967e8ba4"],["/2021/03/17/计算机基础/数据结构与算法/LeetCode之合并两个有序链表/index.html","8c678fe69452ed7738b0d1bb52a8ae2f"],["/2021/03/18/计算机基础/数据结构与算法/LeetCode之两数之和/index.html","ea0790369b7e21796f0de08af032dd1c"],["/2021/03/19/计算机基础/数据结构与算法/LeetCode之买卖股票的最佳时机/index.html","bcc5f3456cf8a30f2ca12cb7f411186b"],["/2021/03/20/计算机基础/数据结构与算法/LeetCode之找到所有数组中消失的数字/index.html","9134cac12e24af72f087a5ede4b62d66"],["/2021/03/21/计算机基础/数据结构与算法/LeetCode之有效的括号/index.html","844101b31b91942779b7ee642ebd7ea6"],["/2021/03/22/计算机基础/数据结构与算法/LeetCode之移动零/index.html","7bbddf4ae79a4432997c20fe0722724a"],["/2021/03/23/计算机基础/数据结构与算法/LeetCode之爬楼梯/index.html","3c04c12c4b012bc6aa4025dc73e3e9dd"],["/2021/03/24/计算机基础/数据结构与算法/LeetCode之只出现一次的数字/index.html","ffe84117490338f0fa52c8204de68bad"],["/2021/03/25/计算机基础/数据结构与算法/LeetCode之删除字符串中的所有相邻重复项/index.html","1c3032ba100e28770fac4da69b06bc5b"],["/2021/03/26/计算机基础/数据结构与算法/LeetCode之最大子序和/index.html","b6dd2207e17f93ad66ef8e9559d49663"],["/2021/03/27/计算机基础/数据结构与算法/LeetCode之子集/index.html","64b064774293e84602b4ce5f9ec6101e"],["/2021/03/28/计算机基础/数据结构与算法/LeetCode之合并二叉树/index.html","12e2d1d1037b4d9a70ae582a3021d09c"],["/2021/03/29/计算机基础/数据结构与算法/LeetCode之翻转二叉树/index.html","09ec8904cf4a4184add56d1436f9b269"],["/2021/03/30/计算机基础/数据结构与算法/LeetCode之二叉树的最大深度/index.html","99f610b634446a1808b5daf6c8f4669e"],["/2021/03/31/计算机基础/数据结构与算法/LeetCode之翻转链表/index.html","dbe8c871fbfca305555527c6fad43de8"],["/2021/04/01/计算机基础/数据结构与算法/LeetCode之相交链表/index.html","d75b13ebb53dead7f15e3779cabe0059"],["/2021/04/02/计算机基础/数据结构与算法/LeetCode之最小栈/index.html","af9301ffc272c708057346e4a9ffb1f0"],["/2021/04/03/计算机基础/数据结构与算法/LeetCode之对称二叉树/index.html","c6ff9190558cc38e6a133aaa06885397"],["/2021/04/04/计算机基础/数据结构与算法/LeetCode之环形链表/index.html","db875ab5c432a8efd7e0aa2eef2e1423"],["/2021/04/05/计算机基础/数据结构与算法/LeetCode之二叉树的直径/index.html","09a5be7d621c6e727707117da2107ed8"],["/2021/04/06/计算机基础/数据结构与算法/LeetCode之回文链表/index.html","d749867dc190b34c547d621626c21649"],["/2021/04/07/计算机基础/数据结构与算法/LeetCode之比特位计数/index.html","4169ed076f16493e288204a2d1814331"],["/2021/04/08/计算机基础/数据结构与算法/LeetCode之全排列/index.html","a6764eafc23345b214f9e3227dc5663a"],["/2021/04/09/计算机基础/数据结构与算法/LeetCode之括号的生成/index.html","1028e5f0d6c3dff9d3f38a036f4f80de"],["/2021/04/10/计算机基础/数据结构与算法/LeetCode之合并两个有序数组/index.html","829467240b6a40c5cc33421652f47ffb"],["/2021/04/11/计算机基础/数据结构与算法/LeetCode之删除有序数组中的重复项/index.html","ae6948966735998eaca600778b731313"],["/2021/04/12/计算机基础/数据结构与算法/LeetCode之二叉树的中序遍历/index.html","566ef22ced8c63e7e9d3bf8f41330f95"],["/2021/04/13/计算机基础/数据结构与算法/LeetCode之根据身高重建队列/index.html","824cf2c20b1eb314937edd4e62aec323"],["/2021/04/14/数据库/ORM持久层框架/MyBatis/MyBatis/index.html","54f4008edc5b64e44655be8bcead48e2"],["/2021/04/15/Spring全家桶/Spring/Spring-1/index.html","47efc51e2a9e17cdbaca4c3e369e07fb"],["/2021/04/25/Spring全家桶/Spring/Spring-2/index.html","18b38b1732ba1baf33078a45cdef2a3f"],["/2021/04/27/Spring全家桶/SpringMVC/SpringMVC-1/index.html","6a0a32b9be6a29b14888f11a9fdc15f4"],["/2021/04/29/Spring全家桶/SpringMVC/SpringMVC-2/index.html","78d0913c52a94e1f4fc606b912f0805a"],["/2021/05/03/计算机基础/数据结构与算法/冒泡排序/index.html","34f9d509310940657dd79ee8017c7485"],["/2021/05/08/计算机基础/数据结构与算法/选择排序/index.html","2d364260ffc3e878462fbc45a7ac1ee8"],["/2021/05/12/计算机基础/数据结构与算法/插入排序/index.html","9bb06c55da112233833c10068178259c"],["/2021/05/15/计算机基础/数据结构与算法/快速排序/index.html","dbf082c5b685188b87be7c3b8453fa97"],["/2021/05/19/计算机基础/数据结构与算法/基数排序/index.html","7d4325de251c0ea06a74adfad3e7da6a"],["/2021/05/20/计算机基础/数据结构与算法/哈希排序/index.html","8dabd67a9c79d72d141e3d3547d4b511"],["/2021/05/21/计算机基础/数据结构与算法/归并排序/index.html","a081362bfb50e34e92ac46e192d45ffa"],["/2021/05/22/计算机基础/数据结构与算法/二分查找/index.html","d1f2d064fc8fa177df3ce24fa74e4732"],["/2021/05/26/计算机基础/数据结构与算法/差值查找/index.html","67c40bcc55905ab3e9dcec16372ab76a"],["/2022/01/12/计算机基础/数据结构与算法/高精度大整数计算/index.html","61784e150955ebd290b137ac7821dafb"],["/2022/01/22/计算机基础/数据结构与算法/前缀和/index.html","aac7da279e4c6b308991845aa6688735"],["/2022/01/23/计算机基础/数据结构与算法/差分/index.html","32e9ff17f831021f7f25ae872ff3a994"],["/2022/04/04/数据库/ORM持久层框架/MyBatis/MyBatisPlus/index.html","0a09b3e5442f05a07728aa6a27d31b7b"],["/2022/08/17/前端/jQuery/index.html","cbe10c4abe90955b0a07070e89454f68"],["/2022/08/19/前端/JavaScript/index.html","7ed4f41a04379673d704f32a3eae7854"],["/2022/08/22/前端/Ajax/index.html","c1f72282b1729b728f9018c5e79ea2b7"],["/2022/08/23/前端/Promise/index.html","154b55cf6c1cf474b06c14bc2c7bce70"],["/2022/08/24/前端/Axios/index.html","27b3e4d0b86ce684b2ac6c37f80908d1"],["/2022/08/25/前端/H5本地存储/index.html","bddd65c2990b275c54b94c971b524d2d"],["/2022/08/26/前端/mock/index.html","4e9fa8dc2e15e94eed5d01941e067dc9"],["/2022/08/31/前端/vue/VueJs/index.html","d223fb195a5fe13e1ec0211ec3204983"],["/2022/09/01/前端/vue/vue组件化/index.html","e11b49a8488fe81176ae16b4e9ff88fc"],["/2022/09/04/前端/vue/VueCLI/index.html","0997b73d0f72c3c713988910cb231bf6"],["/2022/09/07/前端/vue/vue实现动画/index.html","6f6d2f4bdfcf98d5db094a414473bd13"],["/2022/09/09/前端/vue/Vue响应式方法/index.html","90e0f172e4ea8bbc184bb952e410ac9a"],["/2022/09/10/前端/vue/Vue异步请求/index.html","94b811819e76a31765c908aefc747a5e"],["/2022/09/11/前端/vue/vue-Router/index.html","dbf4cc8558475652f66f2912ee4c3cff"],["/2022/09/13/前端/vue/Vuex/index.html","a5fbbe94444579171660e79615ccdabb"],["/2022/09/15/Spring全家桶/SpringBoot/SpringBoot/index.html","0755e2c0fbb26250c2a4913c82f960a8"],["/2022/09/16/Spring全家桶/SpringBoot/SpringBoot配置FastJson/index.html","a5d946ac6c9475ac01300d711a3d2746"],["/2022/09/19/Spring全家桶/SpringBoot/SpringBoot参数校验/index.html","a8821a4f0ab2adf0e2d7095883294036"],["/2022/09/20/Spring全家桶/SpringBoot/SpringBoot的异常处理/index.html","42a847258221cb8c7152c2880372235b"],["/2022/09/21/Spring全家桶/SpringBoot/SpringBoot统一响应处理/index.html","65268b819e9e1ad41882ee1f9d8ff6c1"],["/2022/09/28/DevOps/Linux/Linux/index.html","876014e1cb64adcc270c3e6ed3999c6d"],["/2022/10/02/中间件/Redis/redis基础/index.html","e64a32f48ca199bcaa2fc91fd640b50e"],["/2022/10/03/中间件/Redis/Redis缓存/index.html","2bc1c147bb1ec952944c1094b0d7626a"],["/2022/10/04/中间件/Redis/redis缓存穿透/index.html","6beb28914f8b27f72e9e2ecf8ea38fda"],["/2022/10/13/中间件/Redis/Redis缓存击穿/index.html","952ec9bf729c04b6b37bdb5f31c0b265"],["/2022/10/14/中间件/Redis/Redis缓存雪崩/index.html","42a477c725d7ee58a7e0c24ccb39af34"],["/2022/10/17/中间件/Redis/Redis集群/index.html","3e0102c52756a19ebf91180ff8504877"],["/2022/10/18/中间件/Redis/Redis哨兵模式/index.html","3c6cfa13a010dee9deda8c4494b39f3c"],["/2022/10/19/中间件/Redis/Redis主从复制/index.html","4a38219995d450d9fa4eac121575ee85"],["/2022/11/03/Spring全家桶/SpringSecurity/Spring-Security/index.html","2065c1cba5e4c2a4885703483cec72d3"],["/2022/11/08/Spring全家桶/SpringBoot/SpringBoot日志/index.html","072f38ddcc92e6f0110c2fd42f2d7e23"],["/2022/11/11/工具的使用/swagger2/Swagger2/index.html","6400ba127fe3653cbc4e6f0d73dc6d9a"],["/2022/11/21/工具的使用/Nginx/Nginx-一/index.html","10d273eab1b1c6f569a306bfe1e810cf"],["/2022/11/23/工具的使用/Nginx/Nginx-二-代理服务/index.html","c9cfcfe732a8f9e7133136650754a138"],["/2022/11/24/工具的使用/Nginx/nginx-三-负载均衡/index.html","78b4a041a2325cc64202ccaa738cb8f2"],["/2022/11/26/工具的使用/Nginx/nginx-四-缓存集成/index.html","06879676307c014beebabfe0260afcab"],["/2022/11/28/工具的使用/Nginx/nginx-五-动静分离/index.html","82a0ac7fe24205452ba8409567127fec"],["/2022/11/29/工具的使用/Nginx/nginx-六-制作下载站点/index.html","a48ed3a9214e55a82b40c34f9f3780f9"],["/2022/12/06/工具的使用/Docker/Docker基础/index.html","cd06511d721a54ab7cbf43e6212f9371"],["/2022/12/09/工具的使用/Docker/Docker高级/index.html","3e3fda082ca9d420be47dbfce7ccd5f9"],["/2023/01/04/数据库/MongoDB/MongoDB/index.html","5d2714aa53b1ae637e36cf3ec9ca527d"],["/2023/02/05/中间件/消息队列/RabbitMQ/消息队列/index.html","cbc3e5ad2cfa90c4e37ba1c67c976cd3"],["/2023/02/12/中间件/消息队列/RabbitMQ/RabbitMQ集群/index.html","4ab401c15d9be7560ee25253cb1541a2"],["/2023/03/10/DevOps/CICD/CICD/index.html","a3007e2675a929f55e64e077032644c7"],["/2023/03/11/中间件/Elasticsearch/ElasticSearch/index.html","f4197214697e63e672c46c04e9f54b24"],["/2023/03/12/中间件/Elasticsearch/ELK日志平台搭建/index.html","772467eda7b15e3b3d181f38da79c281"],["/2023/03/13/Java/NIO/NIO/index.html","8263065009a966ff1bde855f91d46e55"],["/2023/03/14/Java/NIO/Netty/index.html","23157057a543c64284a170d64054dca9"],["/2023/03/15/Spring全家桶/SpringCloud/SpringCloud/index.html","0251278930c552170a3b0b27b25fc93f"],["/2023/03/17/系统设计/分布式系统认证/index.html","63b60f46cd0f3fa98d8f63c3fccdbc31"],["/2023/03/19/Java/JVM/JVM概述/index.html","3ded081326ceefd3dac2536c156794b5"],["/2023/03/23/Java/JVM/类的加载过程/index.html","fb2a9f59661458238b55d04d73c40af7"],["/2023/03/28/Java/JVM/对象的实例化/index.html","0e53ca9790b1176781b74c8772777cc3"],["/2023/04/01/Java/JVM/运行时数据区/index.html","3bb9c82e9872d585d8245c185353c49a"],["/2023/04/04/Java/JVM/执行引擎/index.html","7a0d604f1eb33ae7e351dcc8ac93e85f"],["/2023/04/06/Java/JVM/对象引用/index.html","81ce673f07f9917e759b6cf71f88f1ac"],["/2023/04/09/Java/JVM/垃圾回收/index.html","05e4bb30c98a6e41d6e1af629efbefa5"],["/2023/04/11/Java/JVM/垃圾回收器/index.html","feaaef83f39052befcd866f71c22acce"],["/2023/04/14/Java/JVM/Class字节码文件/index.html","2b6b30d379976f74b09396875851bb1c"],["/2023/04/17/系统设计/设计模式/设计模式总结/index.html","86d076b09505ee7e51ed1e193c3db6c7"],["/2023/04/20/计算机基础/操作系统/进程管理-一/index.html","d6ea6ffe0bd627dbc1216868ae818f35"],["/2023/04/24/计算机基础/操作系统/进程管理-二/index.html","82eef14365cfb630ec3d6e24c15d2267"],["/2023/04/26/计算机基础/操作系统/内存管理-一/index.html","6a634af4031179de88029248240b34f0"],["/2023/04/29/计算机基础/操作系统/内存管理-二/index.html","540f846c0d7d52b36f0ea59e952927f8"],["/2023/04/30/计算机基础/操作系统/内存管理-三/index.html","a52e8eb6189dbb272dc8052d9769412a"],["/2023/05/03/计算机基础/操作系统/死锁/index.html","1f6cf0714d14aa88cb37098f150ea572"],["/2023/05/05/计算机基础/计算机网络/计算机网络和因特网/index.html","6f190784c38407204eebe71b20656d5f"],["/2023/05/08/计算机基础/计算机网络/应用层基础/index.html","0f37e9cce479faa38ad544f468bece36"],["/2023/05/11/计算机基础/计算机网络/应用层协议/index.html","3623111eded865934e1e673dd6881cd4"],["/2023/05/15/计算机基础/计算机网络/套接字编程/index.html","e9fa8875f36958f69ef66a09df567307"],["/2023/05/18/计算机基础/计算机网络/传输层-一/index.html","46ebdd31749b7b6680ce6b2a68fcb139"],["/2023/05/21/计算机基础/计算机网络/可靠数据传输协议rdt/index.html","db9d8873eb947bab7231e994184fca2a"],["/2023/05/24/计算机基础/计算机网络/面向连接的传输：TCP/index.html","e482387907fa42d6ce4fc2545fa6e85b"],["/2023/05/27/计算机基础/计算机网络/路由器的组成/index.html","f778d05693eff0ec054162a64bec37a6"],["/2023/05/31/Java/NIO/Java文件操作工具类/index.html","e04dd17ce7c5a12fa6401f79458fa7c6"],["/2023/06/05/计算机基础/计算机网络/IP协议/index.html","6b3c310ad908860a5a6cc34f77950d4f"],["/2023/06/08/计算机基础/计算机网络/路由选择/index.html","87f6aad3d5a3193db3ff1057dceee75b"],["/2023/06/11/计算机基础/计算机网络/链路层和局域网/index.html","e5ba1e3d45b84f88d5a80689ce78ec5a"],["/2023/06/14/数据库/MySQL/MySQL的两大日志/index.html","68c916641d7f0e6190b87cf330b99519"],["/2023/06/17/数据库/MySQL/Mysql数据库表的空间回收/index.html","f9b3ed86ac0fed3e69836b5db48720b6"],["/2023/06/19/数据库/MySQL/RedoLog刷脏页/index.html","8a84f98863e47183b5550cf4d0890de9"],["/2023/06/21/数据库/MySQL/日志的写入机制/index.html","92941b69ea0d8775756ee96873c2457c"],["/2023/06/23/数据库/MySQL/MySQL索引/index.html","1c6937b5dec40c13cdd8a4ce69f66f6f"],["/2023/06/26/数据库/MySQL/MySQL索引-二/index.html","be893d52c39a4fd4c14854b7c59bac7f"],["/2023/06/28/数据库/MySQL/MySQL事务/index.html","d9137dc7ae330c502a33389d854b62ee"],["/2023/06/30/数据库/MySQL/MySQL锁/index.html","4b0b3a494cb0505e6cb0beeb4b13c53c"],["/2023/07/03/数据库/MySQL/MySQL语句执行过程及count-效率问题/index.html","764783bfbca95ed9aec3bef86e8a03c0"],["/2023/07/05/数据库/MySQL/MySQL中Orderby是怎么工作的/index.html","900f3a7864feb6898ae7979f6d8c4835"],["/2023/07/07/数据库/MySQL/MySQL中执行单条语句很慢的场景/index.html","7ff1bed8cb6a3ddd36964ae36290380e"],["/2023/07/09/数据库/MySQL/MySQL幻读问题/index.html","c9ca40bb04597bb0ed4e5e79835a61dc"],["/2023/07/11/数据库/MySQL/MySQL短时提供性能的方法/index.html","c15768282e74f61c6e0c9ea9d3c403e5"],["/2023/07/13/数据库/MySQL/MySQL保证主备一致/index.html","28c3d5d879fa8f7b020e07ef9b7a126d"],["/2023/07/15/数据库/MySQL/MySQL保证高可用/index.html","971e54bbea40dbc88a343e561bedad30"],["/2023/07/17/数据库/MySQL/MySQL备库并行复制策略/index.html","2a771ab7a5c4e56eec7dc54953da2b15"],["/2023/07/19/数据库/MySQL/MySQL误删数据怎么办/index.html","d82e65af39a92baa72a538f27bb35e4c"],["/2023/07/21/数据库/MySQL/MySQL优化JOIN语句/index.html","20dfa5843ea56e9dcda9f234c772805d"],["/2023/07/23/数据库/MySQL/MySQL内部临时表的运用/index.html","32a0c00ec394e7054309542f35c08e34"],["/2023/07/25/MySQL自增主键/index.html","1aa4c9c888639bd30ee645311808879e"],["/2023/07/27/MySQL快速的复制一张表/index.html","ba5ae2390fa3bada2443d6101ea5463f"],["/404.html","113026c094fde4962d5160293896d5d9"],["/about/2BBFFF66.png","bf0656fbe9f02789e96e0e633bdfc122"],["/about/index.html","a9a8f44ce259763c6fbbec265294ae0c"],["/archives/2021/02/index.html","f00dfc45f73a12e1939462d07157bf83"],["/archives/2021/03/index.html","11c0878520f715805f334d25ec7ac26f"],["/archives/2021/03/page/2/index.html","77f0a420038965df62a464f8d0c66964"],["/archives/2021/03/page/3/index.html","a55f23de28c95ce1a81a0cc4bd6da586"],["/archives/2021/04/index.html","6a811c2f49e32e9ce778464edec3e613"],["/archives/2021/04/page/2/index.html","4eae1268c517515d328b48274141fb4f"],["/archives/2021/05/index.html","90c628e0b7500d165fe84703a077464c"],["/archives/2021/index.html","eaee9d8ad84da14e36164cbc33ceade0"],["/archives/2021/page/2/index.html","89615817fa3bf405b1f52d9dfb437039"],["/archives/2021/page/3/index.html","faebe5c2da071c91b10b381bb14bab08"],["/archives/2021/page/4/index.html","fee6c2529f32b44d487b1854c018c281"],["/archives/2021/page/5/index.html","a00dd86e98a52116c086d050ca06a93e"],["/archives/2021/page/6/index.html","46f768ead00a771a974a72c6c0a04536"],["/archives/2021/page/7/index.html","02f1f33cbdac9eb078bef08edde7577d"],["/archives/2022/01/index.html","075dd583efeaa720bc6194430d0ca462"],["/archives/2022/04/index.html","7650d3aa3564e08c39fd03f19282a675"],["/archives/2022/08/index.html","25bd005cf30bab5f60b473f334a16a27"],["/archives/2022/09/index.html","e6af4d7866bde28bb5e6ed03f1167859"],["/archives/2022/09/page/2/index.html","3697f03518b39b3749b27693fcd5abcb"],["/archives/2022/10/index.html","b9978b840e60f05457f0c17d96e437fd"],["/archives/2022/11/index.html","e418657aff6507b5993463ff4521dc6f"],["/archives/2022/12/index.html","5e353821e06defd1808d3686250f00cb"],["/archives/2022/index.html","9edea250e210d386ade25a6e518fdd2b"],["/archives/2022/page/2/index.html","cdc6edea285fab80b0221e932819a85b"],["/archives/2022/page/3/index.html","a4ba68952ac63abc36ab3608889c37f6"],["/archives/2022/page/4/index.html","c2476f6fb12af284e8d5ba56ce7babf0"],["/archives/2022/page/5/index.html","4e59b35b54e3d848afec572c9de79239"],["/archives/2023/01/index.html","a251400e81ae6857585f077b9113fc73"],["/archives/2023/02/index.html","bb6501e173f388ed3ff2ec641d77f154"],["/archives/2023/03/index.html","7948e6e8f02d295c723410ee030f1e70"],["/archives/2023/04/index.html","c210988e8ff2a55c98174610dab8cc9e"],["/archives/2023/04/page/2/index.html","e58f04de93aaf594a86f9b57c7f7cebc"],["/archives/2023/05/index.html","1978ae4dca8f2002ab714d8b95a8f512"],["/archives/2023/06/index.html","b9e198ece2c622f68db17d05ae287f3e"],["/archives/2023/06/page/2/index.html","b9fb0ae1efb909c044c2c8c3479ec798"],["/archives/2023/07/index.html","ded9c5428b6e697961680debe410a7c6"],["/archives/2023/07/page/2/index.html","da5894e01db2091eec5a55ae2be54e28"],["/archives/2023/index.html","709565e11a62e84b02a05f4615e860af"],["/archives/2023/page/2/index.html","0c8aa1ad00d13ef07d2faae3fb881d86"],["/archives/2023/page/3/index.html","b426ed3410a398ec6c22a0f918d50d5f"],["/archives/2023/page/4/index.html","3365d9e762ed342b5d17b610f644e435"],["/archives/2023/page/5/index.html","242d3e9a29c2d0cf89ba397b8823d174"],["/archives/2023/page/6/index.html","a15dbd10eb450dd22947328468e1c981"],["/archives/index.html","af43a1a16838dd56a6d2eae44236f7e1"],["/archives/page/10/index.html","1d374d96e0620e83debb641605ca40b8"],["/archives/page/11/index.html","60cbd099874dd3df1967434c295d7121"],["/archives/page/12/index.html","859efc447ca6eaa53cf7476d1b47ca53"],["/archives/page/13/index.html","785b3dd147ccc5706c59ae43e7651931"],["/archives/page/14/index.html","ac959d6a9a2413fe47e7971036eb3350"],["/archives/page/15/index.html","d6e97c2817592147989873af2405be63"],["/archives/page/16/index.html","837e0d251b44b5c00df8962ed64d541e"],["/archives/page/17/index.html","713e860f755c106922c196be44f1f5ea"],["/archives/page/2/index.html","b02dd6bed067ed42f720a7c46e78d123"],["/archives/page/3/index.html","c18c2f41fc562d4bd2262f3a630ed6b5"],["/archives/page/4/index.html","e8d9b04a38f9cd4f9ec52aea002ba03c"],["/archives/page/5/index.html","2d98151157fd5d7aca99f30378f53806"],["/archives/page/6/index.html","fbbca71c3245b8db9b663071df486495"],["/archives/page/7/index.html","548d9d922bc5cd5e0f42b44d9bb61afa"],["/archives/page/8/index.html","fc85e90fbf38bb50b10c27c94604330c"],["/archives/page/9/index.html","812969a6a3267255cacebbd4f23b2955"],["/categories/Devops/CICD/index.html","d947a50d2fb0359f376f9559b8b9f1cb"],["/categories/Devops/Linux/index.html","10572d41cf51d9fb4845bf3b8218ea44"],["/categories/Devops/index.html","3f0ec190c5782a39a611c3962a297cee"],["/categories/Java/JVM/index.html","33c5666f718f254d5b2853cd83803c6c"],["/categories/Java/NIO/Netty/index.html","e31839473ca0c2cba34241ecf4a8cf5b"],["/categories/Java/NIO/index.html","afae04a4e6ed6dcdff8af55e7abd0cf9"],["/categories/Java/NIO/原生NIO/index.html","f98e0b8e3292e4f640b6139df08996e1"],["/categories/Java/NIO/文件操作工具类/index.html","71849385dc6ad09556a584bd16351fef"],["/categories/Java/index.html","30ae47ca4014a60b501507a8f1fc8320"],["/categories/Java/page/2/index.html","d4aeda11c364174dc877998c03835ff6"],["/categories/Java/学习路线/index.html","a32d4e4e56570c6775476ec1fdfe5ae7"],["/categories/Spring全家桶/Spring-Security/index.html","8a61d076823e74bd705d02f6bb6c3931"],["/categories/Spring全家桶/Spring/index.html","9306935819b36c1687c3d8bce8412ea1"],["/categories/Spring全家桶/SpringBoot/index.html","d43999a251a81f8c882e05e68eedcad8"],["/categories/Spring全家桶/SpringCloud/index.html","feecb316fd1bba5d9a1f7085820e478a"],["/categories/Spring全家桶/SpringMVC/index.html","1987bc96861df052d2bc2683934159f3"],["/categories/Spring全家桶/index.html","2957af6f67e527b1470d005a400478dc"],["/categories/Spring全家桶/page/2/index.html","d1e34b0c333b3a0c1ab0c52023b452b3"],["/categories/index.html","ab8fddac224aacf0bc285064cd696d9e"],["/categories/中间件/ElasticSearch/index.html","961f388a2bc674be238f7f012e1426da"],["/categories/中间件/Redis/index.html","6caf90692df94d67d4d16cbb89894e44"],["/categories/中间件/index.html","30774e26ca96608c76204bdc04b2417d"],["/categories/中间件/page/2/index.html","43543b27d3720382adc7f7e14b28a6a7"],["/categories/中间件/消息队列/RabbitMQ/index.html","d2968119dbdc7750f8c0a4b3c2474705"],["/categories/中间件/消息队列/index.html","8728cc2b5427c12a279aeb5e91bc958f"],["/categories/前端/Mock/index.html","dd2677d314f5f8b8e74e1be393f66734"],["/categories/前端/Promise/index.html","523816874ff74fc11b97fb1944f0f247"],["/categories/前端/Vue/index.html","fdda7ab1f2e9952facadbe2ba555dbee"],["/categories/前端/index.html","b04255c0a3fa06e2ffd1d0c547a23f9d"],["/categories/前端/jQuery/index.html","1725d9bc670bcfdb56801e7b8471a0ee"],["/categories/前端/page/2/index.html","0fa0b1e939eba431454de8ce3042cac9"],["/categories/前端/原生基础/index.html","bde3349158e306361a1acb414fdef641"],["/categories/前端/异步通信/index.html","860cc2899d35923e66b0503dc4f308e0"],["/categories/工具使用/Git/index.html","8287d3d6a0a44ca213c0a901842165df"],["/categories/工具使用/index.html","e79f4506c8c8b0fed771e330a9828f6f"],["/categories/工具使用/markdown/index.html","c4eb675bf736a0c20399777c78dd234d"],["/categories/工具的使用/Docker/index.html","4cb79b25e91432fe7dc35fb7f69936d3"],["/categories/工具的使用/Nginx/index.html","41c8876df4eed874aca096e74ec036a5"],["/categories/工具的使用/Swagger/index.html","bb13d9f5036cb93cb89eeb2b61c0e7f4"],["/categories/工具的使用/index.html","a1aac9e4c84d98d58752b9bcc8aabb05"],["/categories/工具的使用/博客搭建/index.html","b933339871f4be63b0c83af174089023"],["/categories/数据库/MongoDB/index.html","edc09f1a1d9147be1d976a504967b3ca"],["/categories/数据库/MySQL/index.html","c1ebabd47a6d89a0cd4b5676aae0a3c4"],["/categories/数据库/MySQL/page/2/index.html","b258fd6972f11d330009a8eb926dcb43"],["/categories/数据库/MySQL/page/3/index.html","6dd327e1eadf6e04921e2333c191f1fd"],["/categories/数据库/ORM持久层框架/MyBatis/index.html","197fc986b06506f51dff0f6bd1dab415"],["/categories/数据库/ORM持久层框架/index.html","2a10aac7117093b2f84f2dbb9f367ef7"],["/categories/数据库/index.html","689b99aff0302cb8bddc69dbf8e6e020"],["/categories/数据库/page/2/index.html","901d274161b8e66c193ff1be5865c0d0"],["/categories/数据库/page/3/index.html","af6f0f30af399fecace5962209936e25"],["/categories/系统设计/index.html","5b567956b3bb73e319a29a298458d9a0"],["/categories/系统设计/page/2/index.html","03fe8c1c7ef0083f944ccd60b48ee2c1"],["/categories/系统设计/分布式权限认证/index.html","7df6f3ce01596bc89bcd440af28dd850"],["/categories/系统设计/设计模式/index.html","7d500c757c2c349a739fe3c1ed2012f3"],["/categories/系统设计/设计模式/page/2/index.html","a02efff2c61923c3ce56cecee6387617"],["/categories/计算机基础/index.html","53dc770b404daf44b421db6a2d175a9f"],["/categories/计算机基础/page/2/index.html","3f5442cce4fe1bd789c19e25f1be65f4"],["/categories/计算机基础/page/3/index.html","ed0af15efca2ab66a61b13bf10e8258d"],["/categories/计算机基础/page/4/index.html","6ae67575c5ca8214b4c4bb4a70e510b2"],["/categories/计算机基础/page/5/index.html","1b0c5642e532a7e95fa85ff7f11035cc"],["/categories/计算机基础/page/6/index.html","2c667fbd667f796ac6166e311e30fcc2"],["/categories/计算机基础/操作系统/index.html","0a1124f3a3a879aa2e2f0d8a88572770"],["/categories/计算机基础/数据结构与算法/index.html","8a251a60d2bd5084ec820af5f2637097"],["/categories/计算机基础/数据结构与算法/page/2/index.html","52a5d52d0c1a4d61dd345c1d5e6f39bb"],["/categories/计算机基础/数据结构与算法/page/3/index.html","f471dc8001e28a6102101807a7d582ca"],["/categories/计算机基础/数据结构与算法/page/4/index.html","b1b8ada1a88c05ab9908b40427122bf3"],["/categories/计算机基础/数据结构与算法/page/5/index.html","906f4d4a6b4fe43d4e1e67a0ad460c69"],["/categories/计算机基础/计算机网络/index.html","87ec9f9f7690509862d2415bf0348f28"],["/css/index.css","4ddcf7871bdff772b25815c17c50e7db"],["/css/shadow.css","37656dae25841d74b1e8738214002616"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/blogphoto2.jpg","ebb491c0124d34d92296df6eb3a7eaf8"],["/img/favicon2.png","885a31e8f9f24d4c77d9b2012dd5554c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wall3.jpg","8894e834fc7c9447b6e7b7cd00ac1611"],["/img/wall5.jpg","9c2a8ca608b20f06b08089b12ac3dd52"],["/img/wall6.jpg","8955fd8e5ac137008dd1056d15669d00"],["/img/wall7.jpg","760dff7a2708d8efc1f6c0fe6df05f2c"],["/index.html","c9bb4b033ad33845a3c9297aa9b2d1ca"],["/js/footer.js","4fad46f72a4b9ed0b2dc360a1b900768"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","3dcdd6c952130dcfe982fb72a53a8add"],["/messageboard/index.html","df63c02c9fcf0a5cf4583ab74eb43f3b"],["/page/10/index.html","4341f5af2708735dc4b00535ab4230e0"],["/page/11/index.html","7572066bb855b6ff65dd71fb72e5c113"],["/page/12/index.html","6a05ebc28ae042079bc5591e2281ccf8"],["/page/13/index.html","087c452d0d0f1a7c51434271f4bc9082"],["/page/14/index.html","d8ab9737f77ce38eef5fb7c4b6af87ca"],["/page/15/index.html","03b29afa82ad98b26971b093b65ec362"],["/page/16/index.html","e257181946e59a62b1ccf1dc20facf73"],["/page/17/index.html","897971f06d489b1a7d040e2ba9d6e516"],["/page/2/index.html","47f1dd2a8ee1b0ebb795bc80dfd41a77"],["/page/3/index.html","91795a4e7a0c01425df65af30d4259e6"],["/page/4/index.html","5e6b939f4b00465d342ebec8c0d9ec38"],["/page/5/index.html","14820d327eb600ef08519b9a9e6b1353"],["/page/6/index.html","99d13e6a91602ab46176500a2c6ad082"],["/page/7/index.html","ac6ee5d4b756337d614c5d9bbb436c5e"],["/page/8/index.html","97a42252afc6c65f09149ff10c9abd99"],["/page/9/index.html","a8c71ef70a35bbffefb3f232d8da85ce"],["/sw-register.js","f4f51cb3cfff688df5e2548e736bba8c"],["/tags/Ajax/index.html","7b4050d88452d5f8d167858886690d75"],["/tags/Axios/index.html","1e6423b038b55eebf706dbf8e075b502"],["/tags/CICD/index.html","a9856475de855f935e79acb5a3ff0b67"],["/tags/Docker/index.html","0cea2440e1e65cb46e11c5f53f3c28e1"],["/tags/ELK/index.html","b899275bc82192a745c5c3d9dcaf88b4"],["/tags/ElasticSearch/index.html","2d77d7fa223408555137b8dcbb721702"],["/tags/Git/index.html","f7bf16cf9038e404ac6cadd80a2122d2"],["/tags/H5/index.html","2426977dd6f23a67bac1cc11115c20a1"],["/tags/JVM/index.html","97c086fa7c49623fcb3eed4190d4c4ba"],["/tags/JVM内存模型/index.html","5003f561647c3894bb0bff5a9934990d"],["/tags/JVM执行引擎/index.html","1d8ebaa8df481b05a5dee0eb479782d5"],["/tags/JavaScript/index.html","0cd9045ca129da642dd47664f8a71441"],["/tags/Kibana/index.html","9968d9e09fa452f189557aebe04b067b"],["/tags/LeetCode/index.html","b34d260c97f2992496d55ee27a46c127"],["/tags/LeetCode/page/2/index.html","47dbcf27044dc696d3d1b640089f2bed"],["/tags/LeetCode/page/3/index.html","c14d33e957ee931669e5a8600ddd2826"],["/tags/Linux/index.html","233110848d2f6bcae8cd3455290e3391"],["/tags/Logstash/index.html","37b46c23a32c49a279c2a8ed2eb6dc8e"],["/tags/Mock/index.html","3f5f05188b7413ee613b5acb04b1e361"],["/tags/MongoDB/index.html","79e5cc39cf279e091d435166f1629311"],["/tags/MySQL-事务/index.html","bf3cd64cabcecee38fba89c3d5cf4d33"],["/tags/MySQL-数据类型/index.html","5517c33e03990e08fe08f0b443a13616"],["/tags/MySQL-日志/index.html","a6d9b22a162e553f4d9470eeee8b8e95"],["/tags/MySQL-索引/index.html","3d6847e34e309dee95e8c601f5cde67a"],["/tags/MySQL-锁/index.html","1cd47cd083dd21978a94c004cd92d97a"],["/tags/MySQL/index.html","955e59dbaa29ee772e6b7a28243ff27a"],["/tags/MySQL/page/2/index.html","aab2f102f713a3e8c3cf23f1fcdff856"],["/tags/Mybatis/index.html","4c95716ef3b074c96d5eb76686dae4d5"],["/tags/MybatisPlus/index.html","ac96d772b0d3b57247a5ec3964bdba27"],["/tags/NIO/index.html","e47f99f1ab3960278cd576ee25b17a44"],["/tags/Netty/index.html","cfe2612f0ced305c451cf33f39f4d342"],["/tags/Nginx/index.html","28986968c2e36009e7f8a06ff7a88d02"],["/tags/Promise/index.html","bb24e19b4c06eba142e42ba47df691af"],["/tags/RabbitMQ/index.html","269638aeaaae9d8489ac8dc0646ddb59"],["/tags/Redis/index.html","6eebef5c730441b54dbdd17ddc9b8c22"],["/tags/SSM/index.html","cae809c895150031c9c038a11041d541"],["/tags/Spring-Security/index.html","d60d070ae6e476a55c9a038c936fc002"],["/tags/Spring/index.html","7a322d9a72e9859af8f0f49a247396f7"],["/tags/SpringBoot/index.html","d9f955b9d6d6e4df7557e2f794caab3d"],["/tags/SpringCloud/index.html","5e1fc8bcfb5f562e509abfd2b43ace92"],["/tags/SpringMVC/index.html","a8739b502b1379ce9a055a53a64b3e9d"],["/tags/Swagger/index.html","bb23a438385f398b1578f67ced4b22fa"],["/tags/hexo/index.html","425166f3fd0b6473bc1ab79143e504b1"],["/tags/index.html","8819e704744de1e65950f8711344930e"],["/tags/jQuery/index.html","ea5f43799cee78e4e64eac1025b16241"],["/tags/java/index.html","d047c44f3340b99c4532fe92b16febc3"],["/tags/markdown/index.html","a8fed5b4d1a8744e678cca3f368b2eb7"],["/tags/noSQL/index.html","10d12f9d0d305fb22e3fa658a594c697"],["/tags/typora/index.html","94b570cf4a7cacb9626a7fcfd8f6619c"],["/tags/vue/index.html","d0d05cc9dd3c5fa2be672b315cc6e6d2"],["/tags/享元模式/index.html","549c91d852766b745af88fe83240972b"],["/tags/代理模式/index.html","30c3b4b0674cf4b81259e329a64a478d"],["/tags/内存管理/index.html","28afc23beb7f63a6ce3e12fab8102f87"],["/tags/分布式/index.html","c5c3eede9cea2ea9a8284374e8fc13a1"],["/tags/分布式系统/index.html","5314a00c2462ce2e11cf39ff7f2d00f0"],["/tags/前端/index.html","d6b1d8533fd298eed8e0f1413dddf74e"],["/tags/前端/page/2/index.html","345de52de0473248e220b7094048ceca"],["/tags/博客/index.html","e4adcb061756837ce727d5a3f6e97556"],["/tags/后端/index.html","b252f333dc8538aef1de15743fa9583e"],["/tags/外观模式/index.html","8441d497351e474759128b70127592e5"],["/tags/容器技术/index.html","aebdb1f8bb5ecb10ead06cc4c75b999d"],["/tags/工厂方法/index.html","f78dc4071c8790a8b136c944ee017012"],["/tags/微服务/index.html","a1f90e00e4669391052ec1f0e58ef26e"],["/tags/抽象工厂/index.html","ea34bef0cb32b252b0eab7de1f056e5c"],["/tags/持续集成持续部署/index.html","dd87f0f7b3c2faa6d2c9ebb3732a89a0"],["/tags/搜索引擎/index.html","aeb9604b54cde92fe270981af1e8c826"],["/tags/操作系统/index.html","619398161f16284ff5dce4170cf44e82"],["/tags/数据库/index.html","ac25665345b9d6551909b5437be4522e"],["/tags/数据库/page/2/index.html","65377b73b65a7da9e95b7f27fed7b243"],["/tags/数据库/page/3/index.html","622f840c33525c3428a6f2f9e8d4d050"],["/tags/数据结构与算法/index.html","6d0d39ffe344900e6e5396d0444ea117"],["/tags/数据结构与算法/page/2/index.html","5c3b0b844224042591251cc1890fc883"],["/tags/文件操作/index.html","e1100cf8bf4bc71019371d3282ae6157"],["/tags/日志/index.html","74f46075189e97f256d64c74fe7e3f59"],["/tags/服务器/index.html","c779d2a44d870f0b61377192dbb039d7"],["/tags/权限认证/index.html","cb83e2821f030ecc6fdbdebc84d22033"],["/tags/桥接模式/index.html","5ada5c466756e9fc40c86742f277edc2"],["/tags/模板方法模式/index.html","5a1817f57034465206ebb6ff677bb2c5"],["/tags/死锁/index.html","f815e981d1da13fc4ab1d5545092811e"],["/tags/消息队列/index.html","a371f7b0d9ba052faf92cdc07c227dc7"],["/tags/版本控制/index.html","ac57f2d11f17342e440f6dca96bb79b9"],["/tags/策略模式/index.html","aed93a950bc2adf770ed566d208e55ca"],["/tags/简单工厂/index.html","e759ce7bf3e79760f820a509bddf7223"],["/tags/算法/index.html","1bffd0998bdfeb67c3adb31db7163309"],["/tags/组件化/index.html","cb1f9bf4b7a226863855697242549f4f"],["/tags/缓存/index.html","05eba329c0ea37d5ed88947fd1cbc834"],["/tags/观察者模式/index.html","1a55640dbe2cd58c8c032872578bdd35"],["/tags/计算机网络/index.html","b5313e7b33b1e502e6bf1eb1f2b157aa"],["/tags/设计模式/index.html","a9ebb4f384c8d8fc88a96b4b1a27e50e"],["/tags/设计模式/page/2/index.html","04ab2dc39b0f9cb166b2cff8e261fac5"],["/tags/进程管理/index.html","85da718b19bacb668c4ac4258ce1ac4e"],["/tags/适配器模式/index.html","c3c48e756f8339b0e2825923109a5e4a"],["/zhheo/zhheocar.css","3db2c3f8b7dd31412f94717b55cb0f8b"]];
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
